import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { skills, skillCategories } from '../data/skills';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered =
    activeFilter === 'all'
      ? skills
      : skills.filter((s) => s.category === activeFilter);

  return (
    <section id="skills" className="py-12 md:py-14 bg-slate-50/80 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle subtitle="Skills" title="Technical Expertise" />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 flex flex-wrap gap-2"
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveFilter(cat.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                activeFilter === cat.id
                  ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                  : 'border border-slate-200/80 bg-white/80 text-slate-600 hover:border-emerald-500/40 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <SkillCard skill={skill} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
