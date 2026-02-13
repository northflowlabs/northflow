import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: '404 Page Not Found | Northflow',
  description:
    'The page you are looking for could not be found. Return to Northflow Technologies homepage or explore our institutional digital infrastructure solutions.',
  path: '/404',
});

export default function NotFound() {
  return (
    <div className="pt-16">
      <div className="max-w-[1400px] mx-auto px-8 py-24">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h1 className="text-6xl font-headline font-bold text-foreground" aria-label="Error 404">
            404
          </h1>
          <h2 className="text-2xl font-headline font-semibold text-foreground">Page not found</h2>
          <p className="text-base text-muted-foreground font-body leading-relaxed">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="pt-8">
            <a
              href="/"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground text-sm font-cta font-medium rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-hover focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Return to homepage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
