import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi2';

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200/80 bg-white/60 text-slate-600 transition-colors hover:border-emerald-500/50 hover:text-emerald-500 dark:border-slate-700/80 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:text-emerald-400"
    >
      {isDark ? <HiSun className="h-4 w-4" /> : <HiMoon className="h-4 w-4" />}
    </motion.button>
  );
}
