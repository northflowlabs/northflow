'use client';

import { usePathname } from 'next/navigation';
import { isEnglishOnlyPage } from '@/i18n/config';
import { removeLocaleFromPathname } from '@/lib/i18n';

export default function EnglishOnlyNotice() {
  const pathname = usePathname();
  const cleanPathname = removeLocaleFromPathname(pathname);
  
  if (!isEnglishOnlyPage(cleanPathname)) {
    return null;
  }

  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8" role="note" aria-label="Language notice">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm text-blue-700 font-medium">
            This page is available in English only
          </p>
          <p className="text-xs text-blue-600 mt-1">
            Detailed technical and legal materials are maintained in English as the authoritative version.
          </p>
        </div>
      </div>
    </div>
  );
}