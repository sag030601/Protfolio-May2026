import { motion } from 'framer-motion';

export default function SectionTitle({ subtitle, title, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
      className={`mb-8 flex flex-col ${alignClass}`}
    >
      {subtitle && (
        <span className="mb-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
          {subtitle}
        </span>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
        {title}
      </h2>
      <div className={`mt-2 h-0.5 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  );
}
