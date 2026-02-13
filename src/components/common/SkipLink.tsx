'use client';

import { useState } from 'react';

const SkipLink = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-primary focus:text-primary-foreground focus:rounded-sm focus:shadow-lg focus:outline-none focus:ring-4 focus:ring-ring font-cta font-medium text-sm"
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;
