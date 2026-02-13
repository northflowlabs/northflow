'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface RouteErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function RouteErrorBoundary({ error, reset }: RouteErrorBoundaryProps) {
  const pathname = usePathname();

  useEffect(() => {
    console.error('Route error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
            <svg
              className="w-10 h-10 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-3">Page Error</h1>

          <p className="text-gray-600 mb-2">We encountered an error while loading this page.</p>

          {pathname && (
            <p className="text-sm text-gray-500 mb-6">
              Path: <code className="bg-gray-100 px-2 py-1 rounded">{pathname}</code>
            </p>
          )}
        </div>

        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="block w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Return to Homepage
          </Link>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700 font-medium">
              Error Details (Development Only)
            </summary>
            <div className="mt-3 p-4 bg-gray-100 rounded-lg">
              <p className="text-xs font-semibold text-gray-700 mb-2">Message:</p>
              <pre className="text-xs overflow-auto text-red-600 mb-4">{error.message}</pre>

              {error.digest && (
                <>
                  <p className="text-xs font-semibold text-gray-700 mb-2">Digest:</p>
                  <pre className="text-xs overflow-auto text-gray-600 mb-4">{error.digest}</pre>
                </>
              )}

              {error.stack && (
                <>
                  <p className="text-xs font-semibold text-gray-700 mb-2">Stack:</p>
                  <pre className="text-xs overflow-auto text-gray-600">{error.stack}</pre>
                </>
              )}
            </div>
          </details>
        )}
      </div>
    </div>
  );
}
