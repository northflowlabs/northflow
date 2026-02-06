'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { trackCTAClick } from '@/lib/analytics-events';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleBriefingClick = (location: 'header_desktop' | 'header_mobile') => {
    trackCTAClick({
      cta_id: 'request_briefing',
      cta_location: location,
      cta_text: 'Request briefing',
      destination: '/engage',
      audience_type: 'institution',
    });
  };

  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/research', label: 'Research' },
    { href: '/systems', label: 'Systems' },
    { href: '/initiatives', label: 'Initiatives' },
    { href: '/resources', label: 'Resources' },
    { href: '/engage', label: 'Engage' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-[#E6E9EF] ${className}`}
      style={{ height: '72px' }}
      role="banner"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-6 h-full">
        <div className="relative flex items-center justify-between h-full">
          {/* Logo - Left Side */}
          <Link
            href="/"
            className="flex items-center gap-2.5 flex-shrink-0"
            aria-label="Northflow Technologies Home"
          >
            {/* Logo Icon */}
            <div
              className="flex items-center justify-center"
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#1E2F4D',
                borderRadius: '10px',
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 28V12L20 16L28 12V28L20 24L12 28Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 16V24"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Brand Text */}
            <div className="flex flex-col">
              <span
                className="font-semibold"
                style={{
                  fontSize: '16px',
                  color: '#111827',
                  lineHeight: '1.2',
                }}
              >
                Northflow
              </span>
              <span
                className="font-normal"
                style={{
                  fontSize: '12px',
                  color: '#6B7280',
                  lineHeight: '1.2',
                }}
              >
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav
            className="hidden md:flex absolute left-1/2 transform -translate-x-1/2"
            aria-label="Main navigation"
          >
            <div className="flex items-center" style={{ gap: '30px' }}>
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-medium hover:text-[#1E2F4D] transition-colors whitespace-nowrap"
                  style={{
                    fontSize: '14px',
                    color: '#111827',
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Request Briefing Button - Right Side */}
          <div className="hidden md:flex flex-col items-end">
            <Link
              href="/engage"
              onClick={() => handleBriefingClick('header_desktop')}
              className="inline-flex items-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                backgroundColor: '#1E2F4D',
                color: '#FFFFFF',
                padding: '10px 20px',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2A4060';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1E2F4D';
              }}
            >
              Request briefing
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#1E2F4D] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1E2F4D]"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <Icon
                name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
                className="h-6 w-6"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden border-t border-[#E6E9EF] bg-white"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-4 py-3 space-y-3">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-[#111827] hover:text-[#1E2F4D] hover:bg-gray-50 transition-colors"
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/engage"
              onClick={() => {
                handleBriefingClick('header_mobile');
                closeMobileMenu();
              }}
              className="block px-3 py-2 rounded-md text-base font-semibold text-white text-center transition-colors mt-2"
              style={{
                backgroundColor: '#1E2F4D',
                borderRadius: '10px',
              }}
            >
              Request briefing
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
