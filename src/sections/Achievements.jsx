import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import AnimatedCounter from '../components/AnimatedCounter';
import { achievements } from '../data/contact';

export default function Achievements() {
  return (
    <section id="achievements" className="py-12 md:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle subtitle="Impact" title="Achievements & Metrics" align="center" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 text-center backdrop-blur-sm transition-shadow hover:border-emerald-500/30 hover:shadow-md dark:border-slate-700/80 dark:bg-slate-800/50"
            >
              <p className="text-3xl font-bold text-emerald-500">
                <AnimatedCounter
                  value={item.value}
                  suffix={item.suffix}
                  decimals={item.decimals}
                />
              </p>
              <p className="mt-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
