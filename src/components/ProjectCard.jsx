import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowTopRightOnSquare, HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { FaGithub } from 'react-icons/fa6';

const AUTO_SCROLL_MS = 3500;

function normalizeScreenshots(screenshots, fallbackImage) {
  const items = screenshots ?? [{ src: fallbackImage }];
  return items.map((item) =>
    typeof item === 'string' ? { src: item, label: null } : item,
  );
}

export default function ProjectCard({ project, index }) {
  const screenshots = normalizeScreenshots(project.screenshots, project.image);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = (nextIndex) => {
    setActiveIndex((nextIndex + screenshots.length) % screenshots.length);
  };

  useEffect(() => {
    if (screenshots.length <= 1 || isPaused) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % screenshots.length);
    }, AUTO_SCROLL_MS);

    return () => clearInterval(timer);
  }, [screenshots.length, isPaused]);

  const current = screenshots[activeIndex];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 shadow-sm backdrop-blur-sm transition-shadow hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 dark:border-slate-700/80 dark:bg-slate-800/60 ${
        project.highlight ? 'lg:col-span-2' : ''
      }`}
    >
      <div
        className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-700"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <motion.img
          key={current.src}
          src={current.src}
          alt={`${project.title} — ${current.label ?? `preview ${activeIndex + 1}`}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        {project.featured && (
          <span className="absolute top-3 left-3 rounded-full bg-emerald-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
            Featured
          </span>
        )}
        {current.label && (
          <span className="absolute top-3 right-3 rounded-full bg-black/50 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
            {current.label}
          </span>
        )}
        {screenshots.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goTo(activeIndex - 1);
              }}
              aria-label="Previous screenshot"
              className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-black/60"
            >
              <HiChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goTo(activeIndex + 1);
              }}
              aria-label="Next screenshot"
              className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-black/60"
            >
              <HiChevronRight className="h-4 w-4" />
            </button>
            <div className="absolute bottom-3 left-1/2 z-10 flex max-w-[85%] -translate-x-1/2 flex-wrap justify-center gap-1.5">
              {screenshots.map((shot, i) => (
                <button
                  key={`${shot.label ?? 'slide'}-${i}`}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(i);
                  }}
                  aria-label={shot.label ? `View ${shot.label}` : `View screenshot ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[11px] text-slate-600 dark:bg-slate-700/80 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-emerald-500 hover:text-emerald-500 dark:border-slate-600 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
          >
            <FaGithub className="h-3.5 w-3.5" />
            GitHub
          </a>
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-600"
          >
            <HiArrowTopRightOnSquare className="h-3.5 w-3.5" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}
