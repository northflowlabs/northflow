'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type Props = {
  className?: string;
  opacity?: number;
  density?: number;
};

export default function ThreeStarfield({ className, opacity = 0.85, density = 1 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;
    if (!canvas || !host) return;

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    const isCoarsePointer =
      typeof window !== 'undefined' && window.matchMedia?.('(pointer: coarse)').matches;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 6000);
    camera.position.z = 900;

    const group = new THREE.Group();
    scene.add(group);

    const baseCamera = {
      x: 0,
      y: 0,
      z: camera.position.z,
    };

    // Pointer-driven drift (kept subtle; this is about "presence", not a gimmick)
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    const pointerStrength = 0.35; // rotation target (radians-ish, but applied as small deltas)
    const cameraStrength = 20; // px-ish in world units (very subtle)

    const onPointerMove = (ev: PointerEvent) => {
      if (reduceMotion) return;

      const rect = host.getBoundingClientRect();
      const nx = (ev.clientX - rect.left) / Math.max(1, rect.width);
      const ny = (ev.clientY - rect.top) / Math.max(1, rect.height);

      // [-0.5..0.5]
      target.x = (nx - 0.5) * 2;
      target.y = (ny - 0.5) * 2;
    };

    const materials: THREE.ShaderMaterial[] = [];
    const geometries: THREE.BufferGeometry[] = [];

    const buildLayer = (layer: {
      count: number;
      radius: number;
      baseSize: number;
      layerOpacity: number;
    }) => {
      const count = Math.max(0, Math.floor(layer.count * density));

      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const seeds = new Float32Array(count);

      for (let i = 0; i < count; i += 1) {
        const t = Math.random();
        const r = layer.radius * (0.2 + 0.8 * Math.random());
        const theta = 2 * Math.PI * Math.random();
        const phi = Math.acos(2 * Math.random() - 1);

        const sinPhi = Math.sin(phi);
        const x = r * sinPhi * Math.cos(theta);
        const y = r * Math.cos(phi);
        const z = r * sinPhi * Math.sin(theta);

        positions[i * 3 + 0] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        // Color temperature spread (mostly white, some blue, a few warm stars)
        let cr = 1;
        let cg = 1;
        let cb = 1;
        if (t > 0.78 && t <= 0.92) {
          cr = 0.78;
          cg = 0.88;
          cb = 1.0;
        } else if (t > 0.92) {
          cr = 1.0;
          cg = 0.86;
          cb = 0.72;
        }

        // Subtle brightness variation
        const b = 0.55 + 0.45 * Math.random();
        colors[i * 3 + 0] = cr * b;
        colors[i * 3 + 1] = cg * b;
        colors[i * 3 + 2] = cb * b;

        seeds[i] = Math.random();
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
      geometries.push(geometry);

      const material = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uBaseSize: { value: layer.baseSize },
          uOpacity: { value: layer.layerOpacity * opacity },
        },
        vertexShader: `
          uniform float uTime;
          uniform float uBaseSize;

          attribute float aSeed;
          varying vec3 vColor;
          varying float vSeed;

          void main() {
            vColor = color;
            vSeed = aSeed;

            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

            // Subtle per-star jitter to avoid perfectly static look.
            float jitter = sin(uTime * 0.25 + aSeed * 40.0) * 0.6;
            mvPosition.xy += jitter;

            float size = uBaseSize * (900.0 / -mvPosition.z);
            gl_PointSize = clamp(size, 0.8, 6.0);

            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          uniform float uTime;
          uniform float uOpacity;

          varying vec3 vColor;
          varying float vSeed;

          void main() {
            vec2 uv = gl_PointCoord - vec2(0.5);
            float d = length(uv);

            // Soft disk
            float core = smoothstep(0.5, 0.0, d);
            float halo = smoothstep(0.5, 0.15, d);

            // Twinkle (very subtle)
            float tw = 0.82 + 0.18 * sin(uTime * (0.9 + vSeed) + vSeed * 18.0);

            float a = (core + halo * 0.35) * uOpacity * tw;
            if (a < 0.02) discard;

            gl_FragColor = vec4(vColor, a);
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true,
      });

      materials.push(material);

      const points = new THREE.Points(geometry, material);
      group.add(points);
    };

    buildLayer({ count: 5200, radius: 2600, baseSize: 1.4, layerOpacity: 0.5 });
    buildLayer({ count: 2400, radius: 1900, baseSize: 1.9, layerOpacity: 0.65 });
    buildLayer({ count: 1200, radius: 1300, baseSize: 2.4, layerOpacity: 0.85 });

    const applySize = () => {
      const rect = host.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));

      const dpr = Math.min(2, window.devicePixelRatio || 1);
      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height, false);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    applySize();

    let raf = 0;
    const clock = new THREE.Clock();

    const renderOnce = () => {
      const t = clock.getElapsedTime();
      for (const mat of materials) {
        mat.uniforms.uTime.value = t;
      }
      renderer.render(scene, camera);
    };

    const animate = () => {
      const t = clock.getElapsedTime();

      // Slow drift feels more cinematic than fast movement.
      const baseRotY = t * 0.018;
      const baseRotX = t * 0.008;

      // Lerp pointer intent to avoid jitter.
      current.x += (target.x - current.x) * 0.06;
      current.y += (target.y - current.y) * 0.06;

      group.rotation.y = baseRotY + current.x * pointerStrength * 0.12;
      group.rotation.x = baseRotX + -current.y * pointerStrength * 0.08;

      camera.position.x = baseCamera.x + current.x * cameraStrength;
      camera.position.y = baseCamera.y + -current.y * cameraStrength * 0.75;
      camera.position.z = baseCamera.z;
      camera.lookAt(0, 0, 0);

      for (const mat of materials) {
        mat.uniforms.uTime.value = t;
      }

      renderer.render(scene, camera);
      raf = window.requestAnimationFrame(animate);
    };

    if (reduceMotion) {
      renderOnce();
    } else {
      raf = window.requestAnimationFrame(animate);
    }

    if (!reduceMotion && !isCoarsePointer) {
      window.addEventListener('pointermove', onPointerMove, { passive: true });
    }

    const ro = new ResizeObserver(() => {
      applySize();
      if (reduceMotion) renderOnce();
    });
    ro.observe(host);

    const onVisibility = () => {
      if (reduceMotion) return;

      if (document.hidden) {
        if (raf) window.cancelAnimationFrame(raf);
        raf = 0;
      } else if (!raf) {
        raf = window.requestAnimationFrame(animate);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pointermove', onPointerMove);
      ro.disconnect();

      if (raf) window.cancelAnimationFrame(raf);

      for (const m of materials) m.dispose();
      for (const g of geometries) g.dispose();

      renderer.dispose();
    };
  }, [opacity, density]);

  return (
    <div ref={hostRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
