'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border" role="contentinfo">
      <div className="max-w-[1400px] mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <svg
                width="32"
                height="32"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="40" height="40" rx="8" fill="var(--color-primary)" />
                <path
                  d="M12 28V12L20 16L28 12V28L20 24L12 28Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path d="M20 16V24" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div>
                <div className="font-headline font-semibold text-foreground">Northflow</div>
                <div className="text-xs text-muted-foreground">Technologies</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Institutional evidence infrastructure for climate and critical systems. Built in
              Norway. Operating across Europe.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-headline font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/systems"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/initiatives"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Initiatives
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-headline font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/resources"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:underline"
                >
                  All Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/engage/request-access"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Access request
                </Link>
              </li>
              <li>
                <Link
                  href="/documentation"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/technical-papers"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Technical Papers
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-headline font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/legal-notice"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Legal Notice
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/data-protection-notice"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Data Protection
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date()?.getFullYear()} Northflow Technologies. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Designed to align with ISO/IEC 27001 • GDPR-aligned data protection approach
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
