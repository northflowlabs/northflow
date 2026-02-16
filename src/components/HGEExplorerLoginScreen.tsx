'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import AppImage from '@/components/ui/AppImage';

const ThreeStarfield = dynamic(() => import('@/components/ThreeStarfield'), { ssr: false });

type Props = {
  backgroundImageSrc?: string;
};

export default function HGEExplorerLoginScreen({
  backgroundImageSrc = '/assets/images/HGE%20Explorer%20Entry.jpg',
}: Props) {
  const [status, setStatus] = useState<string>('');

  const requestAccessHref = useMemo(() => {
    // Keep it simple for now; this can be swapped to a dedicated form later.
    return 'mailto:contact@northflow.no?subject=HGE%20Explorer%20Access%20Request';
  }, []);

  return (
    <div className="hge-login fixed inset-0 z-[9999] overflow-hidden text-white">
      {/* Layer: gradients + stars */}
      <div className="hge-login__fx" aria-hidden="true" />

      {/* Layer: background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <AppImage
          src={backgroundImageSrc}
          alt=""
          fill
          priority
          className="h-full w-full opacity-90"
          sizes="100vw"
        />
      </div>

      {/* Layer: WebGL starfield (Three.js) */}
      <ThreeStarfield className="absolute inset-0 z-[2] pointer-events-none" opacity={0.9} density={1} />

      {/* Layer: vignette */}
      <div className="hge-login__vignette" aria-hidden="true" />

      <main className="relative z-10 mx-auto flex h-full w-full max-w-xl flex-col items-center justify-center px-6 py-10 text-center">
        <div className="w-full">
          <h1 className="text-balance text-[clamp(2.25rem,7vw,3.75rem)] font-[450] tracking-[-0.02em]">
            HGE Explorer
          </h1>
          <p className="mt-3 text-pretty text-sm text-white/85 md:text-base">
            Advanced generation engine for scientific discovery
          </p>

          <section className="mt-10 rounded-2xl border border-white/10 bg-black/20 p-8 backdrop-blur-md">
            <h2 className="text-lg font-semibold tracking-tight">Access Portal</h2>
            <p className="mt-1 text-sm text-white/80">Hypotheses Generation Engine</p>

            <form
              className="mt-8 space-y-5"
              onSubmit={(event) => {
                event.preventDefault();
                setStatus('Demo preview: authentication is not wired yet.');
              }}
            >
              <label className="block text-left">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="name@organization.space"
                  required
                  className="mt-2 w-full rounded-lg border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-white/35 focus:bg-black/40"
                />
              </label>

              <label className="block text-left">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                  Credentials
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••••••"
                  required
                  className="mt-2 w-full rounded-lg border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-white/35 focus:bg-black/40"
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-white/10 active:scale-[0.99]"
              >
                Enter
              </button>

              <div className="pt-1 text-center">
                <a
                  href={requestAccessHref}
                  className="text-xs text-white/80 underline-offset-4 transition hover:text-white hover:underline"
                >
                  Request access
                </a>
              </div>

              {status ? <p className="text-xs text-white/75">{status}</p> : null}
            </form>
          </section>

          <div className="mt-10 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70">
            NASA · ESA · Space Agencies
          </div>

          <div className="mt-6 text-xs text-white/60">
            <Link href="/" className="hover:text-white">
              Return to Northflow
            </Link>
          </div>
        </div>
      </main>

      <style jsx>{`
        .hge-login {
          background: #000;
        }

        .hge-login__fx {
          position: absolute;
          inset: 0;
          z-index: 0;

          /*
           * Interstellar-ish background stack:
           * 1) deep space gradient
           * 2) nebula highlights
           * 3) star fields (two densities)
           * 4) subtle film grain via repeating-radial + opacity
           */
          background:
            radial-gradient(1200px 700px at 50% 20%, rgba(255, 206, 160, 0.22), transparent 55%),
            radial-gradient(900px 600px at 15% 70%, rgba(120, 190, 255, 0.15), transparent 60%),
            radial-gradient(800px 520px at 85% 75%, rgba(185, 125, 255, 0.12), transparent 60%),
            radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.10) 0.8px, transparent 0.9px),
            radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.08) 0.7px, transparent 0.9px),
            linear-gradient(180deg, #000 0%, #071225 40%, #000 100%);

          background-size:
            auto,
            auto,
            auto,
            240px 240px,
            320px 320px,
            auto;

          background-repeat: no-repeat, no-repeat, no-repeat, repeat, repeat, no-repeat;
          filter: saturate(1.12);
          opacity: 0.95;
          transform: scale(1.03);
          animation: drift 22s ease-in-out infinite;
        }

        .hge-login__fx::before {
          content: '';
          position: absolute;
          inset: -40%;
          pointer-events: none;
          opacity: 0.06;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E");
          background-size: 220px 220px;
          animation: grain 9s steps(10) infinite;
        }

        .hge-login__fx::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.55;
          background:
            radial-gradient(circle at 18% 26%, rgba(255, 255, 255, 0.22) 1px, transparent 2px),
            radial-gradient(circle at 72% 32%, rgba(255, 255, 255, 0.18) 1px, transparent 2px),
            radial-gradient(circle at 44% 78%, rgba(255, 255, 255, 0.16) 1px, transparent 2px);
          filter: blur(0.2px);
          animation: twinkle 6.5s ease-in-out infinite;
        }

        .hge-login__vignette {
          position: absolute;
          inset: 0;
          z-index: 5;
          pointer-events: none;
          background:
            radial-gradient(circle at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.55) 70%, rgba(0, 0, 0, 0.88) 100%),
            linear-gradient(0deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 35%);
        }

        @keyframes drift {
          0% {
            background-position: 50% 20%, 15% 70%, 85% 75%, 0 0, 0 0, 0 0;
          }
          50% {
            background-position: 52% 22%, 13% 68%, 87% 77%, 40px 10px, -30px 20px, 0 0;
          }
          100% {
            background-position: 50% 20%, 15% 70%, 85% 75%, 0 0, 0 0, 0 0;
          }
        }

        @keyframes grain {
          0% {
            transform: translate3d(0, 0, 0);
          }
          20% {
            transform: translate3d(-2%, 1%, 0);
          }
          40% {
            transform: translate3d(1%, -2%, 0);
          }
          60% {
            transform: translate3d(3%, 2%, 0);
          }
          80% {
            transform: translate3d(-1%, 3%, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes twinkle {
          0% {
            opacity: 0.35;
            transform: translate3d(0, 0, 0);
          }
          50% {
            opacity: 0.75;
            transform: translate3d(0.5%, -0.3%, 0);
          }
          100% {
            opacity: 0.42;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}
