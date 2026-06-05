import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { contactInfo } from '../data/contact';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { HiEnvelope, HiPaperAirplane } from 'react-icons/hi2';

const initialForm = { name: '', email: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Name is required';
  else if (values.name.trim().length < 2) errors.name = 'Name must be at least 2 characters';
  if (!values.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter a valid email';
  if (!values.message.trim()) errors.message = 'Message is required';
  else if (values.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
  return errors;
}

const socialCards = [
  { label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}`, icon: HiEnvelope },
  { label: 'LinkedIn', value: 'linkedin.com/in/sagarsingh', href: contactInfo.linkedin, icon: FaLinkedin },
  { label: 'GitHub', value: 'github.com/sagarsingh', href: contactInfo.github, icon: FaGithub },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
    if (status) setStatus(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      setStatus('error');
      return;
    }

    const mailto = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      `Portfolio Contact from ${form.name}`
    )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`;

    window.location.href = mailto;
    setStatus('success');
    setForm(initialForm);
    setErrors({});
  };

  const inputClass = (field) =>
    `w-full rounded-lg border bg-white/80 px-4 py-2.5 text-sm text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/50 dark:bg-slate-800/60 dark:text-white ${
      errors[field]
        ? 'border-red-400 dark:border-red-500'
        : 'border-slate-200 dark:border-slate-600'
    }`;

  return (
    <section id="contact" className="py-12 md:py-14 bg-slate-50/80 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle subtitle="Contact" title="Let's Build Something Great" />

        <div className="grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3 lg:col-span-2"
          >
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Open to freelance, full-time roles, and collaborations. Drop a message or connect directly.
            </p>
            {socialCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white/70 p-3.5 transition-all hover:border-emerald-500/40 hover:shadow-sm dark:border-slate-700/80 dark:bg-slate-800/50"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                  <card.icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{card.label}</p>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{card.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-800/50 lg:col-span-3"
            aria-label="Contact form"
          >
            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-300">Name</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} className={inputClass('name')} placeholder="Your name" />
                  {errors.name && <p className="mt-1 text-xs text-red-500" role="alert">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-300">Email</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={inputClass('email')} placeholder="you@example.com" />
                  {errors.email && <p className="mt-1 text-xs text-red-500" role="alert">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-300">Message</label>
                <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} className={`${inputClass('message')} resize-none`} placeholder="Tell me about your project..." />
                {errors.message && <p className="mt-1 text-xs text-red-500" role="alert">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
              >
                <HiPaperAirplane className="h-4 w-4" />
                Send Message
              </button>

              {status === 'success' && (
                <p className="text-sm font-medium text-emerald-500" role="status">
                  Message ready! Your email client will open shortly.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm font-medium text-red-500" role="alert">
                  Please fix the errors above before submitting.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
