import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const timeline = [
  {
    period: '2022 — Present',
    role: 'Full Stack Developer',
    company: 'Enterprise & Government Projects',
    highlights: [
      'End-to-end solution delivery across full SDLC',
      'Built production e-commerce platform with Stripe payments & inventory management',
      'Government sector CMS and portal development',
      'HRMS systems with payroll automation',
      'GeoServer integrations for GIS mapping',
      'API ecosystem development & third-party integrations',
    ],
  },
];

const tags = [
  'E-Commerce',
  'Stripe Payments',
  'Inventory Management',
  'CMS Platforms',
  'HRMS Systems',
  'Payroll Automation',
  'GeoServer',
  'REST APIs',
  'RBAC',
  'PostgreSQL',
  'Docker',
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle subtitle="Experience" title="Professional Journey" />

        <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
          <div className="relative">
            {timeline.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative border-l-2 border-emerald-500/30 pl-6 pb-6 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-emerald-500 bg-white dark:bg-slate-900" />
                <span className="text-xs font-semibold text-emerald-500">{item.period}</span>
                <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">{item.role}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.company}</p>
                <ul className="mt-3 space-y-1.5">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-slate-200/80 bg-white/60 p-5 backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-800/40"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Core Domains</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-5 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-4">
              <p className="text-2xl font-bold text-emerald-500">2+</p>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Years of Production Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
