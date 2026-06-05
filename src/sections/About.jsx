import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { HiCheckCircle } from 'react-icons/hi2';

const highlights = [
  '2+ years delivering end-to-end web solutions',
  'Government and enterprise project experience',
  'Full application lifecycle ownership',
  'Backend architecture & system design',
  'Database architecture & optimization',
  'Role-Based Access Control (RBAC)',
  'API development and integration',
  'GIS and GeoServer integration',
];

export default function About() {
  return (
    <section id="about" className="py-12 md:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle subtitle="About Me" title="Engineering Solutions That Scale" />

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-slate-200/80 bg-white/60 p-6 backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-800/40"
          >
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
              I&apos;m a <strong className="text-slate-900 dark:text-white">Full Stack Developer</strong> with
              over two years of hands-on experience building production systems for enterprise and
              government clients. I own the full application lifecycle — from requirements and
              architecture to deployment and maintenance.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
              My work spans CMS platforms, HRMS &amp; payroll systems, and geospatial mapping
              solutions. I specialize in designing secure RBAC systems, robust REST APIs, and
              scalable database architectures that perform under real-world load.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="grid gap-2 sm:grid-cols-2"
          >
            {highlights.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-2 rounded-lg border border-slate-200/60 bg-white/50 px-3 py-2.5 dark:border-slate-700/60 dark:bg-slate-800/30"
              >
                <HiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-200 sm:text-sm">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
