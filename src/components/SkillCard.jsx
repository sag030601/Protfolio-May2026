import { motion } from 'framer-motion';

export default function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group rounded-xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-shadow hover:border-emerald-500/30 hover:shadow-md hover:shadow-emerald-500/5 dark:border-slate-700/80 dark:bg-slate-800/60"
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100">{skill.name}</h3>
        <span className="text-xs font-medium text-emerald-500">{skill.level}%</span>
      </div>

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.04 + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
        />
      </div>
    </motion.div>
  );
}
