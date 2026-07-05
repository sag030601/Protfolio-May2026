import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { HiArrowDownTray, HiEnvelope } from 'react-icons/hi2';
import profileImage from '../assets/profile.jpeg';
import { contactInfo } from '../data/contact';

const floatingVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
  },
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-20 pb-12 md:pt-24 md:pb-16">
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_280px] lg:gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl"
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">Sagar Singh</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-2 text-lg font-semibold text-slate-700 dark:text-slate-200"
            >
              Full Stack Developer
              <span className="mx-2 text-slate-300 dark:text-slate-600">|</span>
              <span className="text-emerald-500">2+ Years Experience</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base"
            >
              I architect and ship production-grade web applications — from enterprise e-commerce
              platforms with Stripe payments to CMS systems, HRMS solutions, and geospatial mapping
              tools. Focused on clean code, scalable backends, and measurable business impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <a
                href={contactInfo.resume}
                download="Sagar_Singh_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/20 transition-all hover:bg-emerald-600 hover:shadow-lg"
              >
                <HiArrowDownTray className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-emerald-500 hover:text-emerald-500 dark:border-slate-600 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
              >
                <HiEnvelope className="h-4 w-4" />
                Contact Me
              </a>
              <div className="flex gap-2">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200/80 text-slate-600 transition-all hover:border-emerald-500 hover:text-emerald-500 dark:border-slate-700 dark:text-slate-400 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
                >
                  <FaGithub className="h-4 w-4" />
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200/80 text-slate-600 transition-all hover:border-emerald-500 hover:text-emerald-500 dark:border-slate-700 dark:text-slate-400 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
                >
                  <FaLinkedin className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="relative mx-auto w-full max-w-[260px] lg:max-w-none"
          >
            <div className="gradient-border rounded-2xl p-[2px]">
              <motion.img
                src={profileImage}
                alt="Sagar Singh"
                className="w-full rounded-2xl shadow-xl shadow-emerald-500/10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.03 }}
              />
            </div>
            <motion.div
              className="absolute -bottom-3 -left-3 rounded-xl glass border border-slate-200/60 px-3 py-2 shadow-lg dark:border-slate-700/60"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-lg font-bold text-emerald-500">2+</p>
              <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400">Years Exp.</p>
            </motion.div>
            <motion.div
              className="absolute -top-2 -right-2 rounded-xl glass border border-slate-200/60 px-3 py-2 shadow-lg dark:border-slate-700/60"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-lg font-bold text-cyan-500">20+</p>
              <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400">Technologies</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
