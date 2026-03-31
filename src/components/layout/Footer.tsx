import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border/40 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-lg font-bold">
              runai4<span className="text-primary/70">.me</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              AI solutions that actually work for your business.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Links
            </p>
            <nav className="flex flex-col gap-2">
              <Link href="/services" className="text-sm hover:underline">
                Services
              </Link>
              <Link href="/quiz" className="text-sm hover:underline">
                AI Readiness Quiz
              </Link>
              <Link href="/about" className="text-sm hover:underline">
                About
              </Link>
              <Link href="/contact" className="text-sm hover:underline">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Connect
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href="mailto:hello@runai4.me"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} runai4.me. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
