import { navLinks, contactInfo } from '../data/contact';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { HiEnvelope } from 'react-icons/hi2';

const socialLinks = [
  { label: 'GitHub', href: contactInfo.github, icon: FaGithub },
  { label: 'LinkedIn', href: contactInfo.linkedin, icon: FaLinkedin },
  { label: 'Email', href: `mailto:${contactInfo.email}`, icon: HiEnvelope },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 bg-white/50 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-base font-bold text-slate-900 dark:text-white">Sagar Singh</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Full Stack Developer</p>
            <p className="mt-3 text-xs text-slate-400 dark:text-slate-500">
              Building scalable web solutions for enterprise &amp; government.
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Quick Links</p>
            <ul className="grid grid-cols-2 gap-1.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Connect</p>
            <div className="flex gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200/80 text-slate-500 transition-all hover:border-emerald-500 hover:text-emerald-500 dark:border-slate-700 dark:text-slate-400 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200/60 pt-6 text-center dark:border-slate-800">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            &copy; {year} Sagar Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
