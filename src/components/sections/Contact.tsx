'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Mail,
  MapPin,
  Calendar,
  Sparkles,
  CheckCircle,
  Loader2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from '@/components/ui/Icons';
import SectionHeading from '@/components/ui/SectionHeading';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/data/navigation';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all required fields.');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Try server-side API route first
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      }).catch(() => null);

      let data = res ? await res.json().catch(() => null) : null;

      // 2. If API route is not available (e.g. static hosting), fallback to direct FormSubmit AJAX
      if (!res || !res.ok) {
        const directRes = await fetch(
          `https://formsubmit.co/ajax/${encodeURIComponent(PERSONAL_INFO.email)}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              subject: formData.subject || `Inquiry from ${formData.name}`,
              message: formData.message,
              _subject: `[Portfolio] ${formData.subject || `Message from ${formData.name}`}`,
              _template: 'table',
              _captcha: 'false',
              _replyto: formData.email,
            }),
          }
        ).catch(() => null);

        if (directRes && directRes.ok) {
          data = { success: true };
        }
      }

      if (data && data.success) {
        setIsSent(true);
        toast.success('Thank you! Your message has been sent directly to Walid.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSent(false), 5000);
      } else {
        toast.error(data?.error || 'Failed to send message. Please try again or email directly.');
      }
    } catch {
      toast.error('Something went wrong. Please reach out directly to walidulislam2005@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialIconMap: Record<string, React.ReactNode> = {
    GitHub: <GithubIcon className="w-4 h-4" />,
    LinkedIn: <LinkedinIcon className="w-4 h-4" />,
    Facebook: <FacebookIcon className="w-4 h-4" />,
  };

  return (
    <section id="contact" aria-label="Contact Section" className="relative py-20 lg:py-28 overflow-hidden">
      <Toaster position="bottom-right" reverseOrder={false} />

      {/* Decorative 3D Glow Blobs (matching Figma Torus Rings) */}
      <div className="absolute top-1/2 left-8 w-60 h-60 rounded-full bg-purple-500/10 dark:bg-purple-600/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-8 w-72 h-72 rounded-full bg-pink-500/10 dark:bg-indigo-600/15 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Figma Pill */}
        <SectionHeading
          badge="Get In Touch"
          title="Let's Work"
          highlight="Together"
          subtitle="Have a project in mind or looking for a passionate developer? Let's connect and create something amazing together."
        />

        {/* Master Code Editor Container (matching Figma screenshot ec6975284616e10a6193f0fdfde320d928dd2757.png) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto rounded-3xl sm:rounded-[36px] bg-white/80 dark:bg-[#120B24]/85 border border-purple-200/80 dark:border-purple-500/20 backdrop-blur-2xl shadow-2xl shadow-purple-900/15 overflow-hidden"
        >
          {/* Top Window Titlebar (macOS dots + tab) */}
          <div className="flex items-center justify-between px-6 py-3.5 bg-zinc-100/90 dark:bg-[#1B1230]/90 border-b border-purple-200/60 dark:border-purple-900/40">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>

            {/* Tab pill */}
            <div className="px-4 py-1 rounded-t-xl bg-white dark:bg-[#120B24] border-t border-x border-purple-200/50 dark:border-purple-700/40 text-xs font-mono font-medium text-purple-900 dark:text-purple-200 flex items-center gap-2">
              <span className="text-purple-500">⚛</span> contact.tsx
            </div>

            <div className="w-12 text-right text-[11px] font-mono text-zinc-400">
              UTF-8
            </div>
          </div>

          {/* Grid: Left Code Info & Right Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-purple-200/60 dark:divide-purple-900/40">
            
            {/* Left Column: Code Line Numbers & Contact Details (Figma style) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between gap-6 font-mono">
              <div className="flex flex-col gap-6">
                
                {/* Email Info Card */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-2xl bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-zinc-400 dark:text-purple-400 font-sans font-semibold">
                      Email address
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="block text-xs sm:text-sm font-semibold text-zinc-900 dark:text-purple-100 hover:text-purple-600 dark:hover:text-purple-300 transition-colors break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Location Info Card */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-zinc-400 dark:text-purple-400 font-sans font-semibold">
                      Location
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-purple-100">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>

                {/* Availability Info Card */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-zinc-400 dark:text-purple-400 font-sans font-semibold">
                      Availability Status
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                      status: &quot;{PERSONAL_INFO.availability}&quot;
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Media & Code Comment (from Figma) */}
              <div className="pt-4 border-t border-purple-200/60 dark:border-purple-900/40">
                <div className="flex items-center gap-3 mb-3">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Walid on ${link.name}`}
                      className="p-2.5 rounded-2xl bg-zinc-100 dark:bg-[#1B1230] border border-purple-200/60 dark:border-purple-700/40 text-zinc-700 dark:text-purple-200 hover:text-purple-600 dark:hover:text-purple-300 hover:scale-110 transition-all shadow-xs"
                    >
                      {socialIconMap[link.name] || <Sparkles className="w-4 h-4" />}
                    </a>
                  ))}
                </div>

                <div className="text-[11px] text-zinc-400 dark:text-purple-400/60 italic font-mono">
                  {"/* Let's build scalable & impactful solutions */"}
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-7 p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-zinc-700 dark:text-purple-200 mb-1.5 font-mono"
                  >
                    const name =
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 rounded-2xl bg-zinc-50/80 dark:bg-[#1B1230]/70 border border-purple-200/70 dark:border-purple-500/20 text-zinc-900 dark:text-zinc-100 text-sm placeholder:text-zinc-400 dark:placeholder:text-purple-400/40 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-zinc-700 dark:text-purple-200 mb-1.5 font-mono"
                  >
                    const email =
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-2xl bg-zinc-50/80 dark:bg-[#1B1230]/70 border border-purple-200/70 dark:border-purple-500/20 text-zinc-900 dark:text-zinc-100 text-sm placeholder:text-zinc-400 dark:placeholder:text-purple-400/40 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold text-zinc-700 dark:text-purple-200 mb-1.5 font-mono"
                  >
                    const subject =
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-2xl bg-zinc-50/80 dark:bg-[#1B1230]/70 border border-purple-200/70 dark:border-purple-500/20 text-zinc-900 dark:text-zinc-100 text-sm placeholder:text-zinc-400 dark:placeholder:text-purple-400/40 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-zinc-700 dark:text-purple-200 mb-1.5 font-mono"
                  >
                    const message =
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, idea, or questions..."
                    className="w-full px-4 py-3 rounded-2xl bg-zinc-50/80 dark:bg-[#1B1230]/70 border border-purple-200/70 dark:border-purple-500/20 text-zinc-900 dark:text-zinc-100 text-sm placeholder:text-zinc-400 dark:placeholder:text-purple-400/40 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 text-white font-semibold text-sm shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:brightness-110 active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : isSent ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-emerald-300" />
                        <span>Message Prepared!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>

          </div>
        </motion.div>

        {/* Bottom Floating Pill Badge (directly from Figma design) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex items-center justify-center"
        >
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/70 dark:bg-[#1B1230]/80 border border-purple-200 dark:border-purple-500/30 shadow-md shadow-purple-500/10 backdrop-blur-xl">
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-300" />
            <span className="text-xs sm:text-sm font-semibold text-purple-900 dark:text-purple-200">
              Always Learning &amp; Building Scalable Solutions
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
