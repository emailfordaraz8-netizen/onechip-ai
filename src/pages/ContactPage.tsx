import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GridBackground } from "../components/ui/GridBackground";
import { GlowOrb } from "../components/ui/GlowOrb";
import { Check } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  website: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  company: "",
  website: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
};

const services = [
  "AI Agents",
  "AI Automation",
  "AI Chatbots",
  "Workflow Automation",
  "AI Integrations",
  "Custom AI Systems",
  "Not sure yet",
];

const budgets = [
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $30,000",
  "$30,000+",
  "Discuss with team",
];

const timelines = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Flexible",
];

function generateReference(): string {
  const num = Math.floor(Math.random() * 900) + 100;
  return `ONE-2026-${num}`;
}

const ContactPage: React.FC = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState("");

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1800));
    setLoading(false);
    setSubmitted(true);
    setReference(generateReference());
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full bg-[rgba(255,255,255,0.02)] border ${
      errors[field]
        ? "border-red-500/50"
        : "border-[rgba(70,150,125,0.2)]"
    } px-4 py-3 text-sm text-[#F0F7F4] placeholder-[#49655D] focus:outline-none focus:border-[rgba(53,242,176,0.4)] transition-colors`;

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <GridBackground />
        <GlowOrb size={600} x="70%" y="50%" opacity={0.05} />

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#35F2B0]">
              — START A PROJECT
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl sm:text-6xl md:text-7xl font-light text-[#F0F7F4] leading-tight tracking-tight mb-6"
          >
            Tell us about
            <br />
            <span className="text-[#8EA8A0] font-extralight">your business.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#8EA8A0] text-lg max-w-lg leading-relaxed"
          >
            Describe what you'd like to automate or improve. We'll respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact info */}
            <div>
              <div className="space-y-8">
                <div>
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#35F2B0] mb-3">
                    Email
                  </div>
                  <a
                    href="mailto:onechipai@gmail.com"
                    className="text-[#8EA8A0] hover:text-[#35F2B0] transition-colors"
                  >
                    onechipai@gmail.com
                  </a>
                </div>

                <div>
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#35F2B0] mb-3">
                    Response time
                  </div>
                  <p className="text-[#8EA8A0] text-sm">Within 24 hours</p>
                </div>

                <div>
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#35F2B0] mb-3">
                    What to expect
                  </div>
                  <ul className="space-y-2 text-[#8EA8A0] text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#35F2B0] mt-1.5 shrink-0" />
                      Initial discovery call
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#35F2B0] mt-1.5 shrink-0" />
                      System assessment
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#35F2B0] mt-1.5 shrink-0" />
                      Custom proposal
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#35F2B0] mt-1.5 shrink-0" />
                      Project kickoff
                    </li>
                  </ul>
                </div>

                <div className="pt-8 border-t border-[rgba(70,150,125,0.1)]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#35F2B0] animate-pulse" />
                    <span className="font-mono text-[9px] tracking-widest uppercase text-[#35F2B0]">
                      SYSTEM / ONLINE
                    </span>
                  </div>
                  <p className="text-[#49655D] text-xs font-mono">
                    All project inquiries are reviewed personally.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Project inquiry form"
                  >
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#49655D] mb-2" htmlFor="name">
                          Name <span className="text-[#35F2B0]">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={inputClass("name")}
                          aria-required="true"
                          aria-describedby={errors.name ? "name-error" : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1 text-xs text-red-400 font-mono">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#49655D] mb-2" htmlFor="email">
                          Email <span className="text-[#35F2B0]">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={inputClass("email")}
                          aria-required="true"
                          aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1 text-xs text-red-400 font-mono">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#49655D] mb-2" htmlFor="company">
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Company name"
                          className={inputClass("company")}
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#49655D] mb-2" htmlFor="website">
                          Website
                        </label>
                        <input
                          id="website"
                          name="website"
                          type="url"
                          value={form.website}
                          onChange={handleChange}
                          placeholder="https://yoursite.com"
                          className={inputClass("website")}
                        />
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#49655D] mb-2" htmlFor="service">
                          Service
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={`${inputClass("service")} appearance-none`}
                        >
                          <option value="">Select a service</option>
                          {services.map((s) => (
                            <option key={s} value={s} className="bg-[#030B09]">
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#49655D] mb-2" htmlFor="budget">
                          Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className={`${inputClass("budget")} appearance-none`}
                        >
                          <option value="">Select a budget range</option>
                          {budgets.map((b) => (
                            <option key={b} value={b} className="bg-[#030B09]">
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="mb-4">
                      <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#49655D] mb-2" htmlFor="timeline">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={form.timeline}
                        onChange={handleChange}
                        className={`${inputClass("timeline")} appearance-none`}
                      >
                        <option value="">When do you need this?</option>
                        {timelines.map((t) => (
                          <option key={t} value={t} className="bg-[#030B09]">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="mb-8">
                      <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#49655D] mb-2" htmlFor="message">
                        Message <span className="text-[#35F2B0]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your business and what you'd like to automate or improve..."
                        className={`${inputClass("message")} resize-none`}
                        aria-required="true"
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1 text-xs text-red-400 font-mono">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <div className="flex items-center gap-6">
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: loading ? 1 : 1.02 }}
                        whileTap={{ scale: loading ? 1 : 0.98 }}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#35F2B0] text-[#020807] font-semibold text-sm tracking-wider uppercase hover:bg-[#50FFC2] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35F2B0]"
                        aria-busy={loading}
                      >
                        {loading ? (
                          <>
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-4 h-4 border-2 border-[#020807] border-t-transparent rounded-full"
                            />
                            Sending...
                          </>
                        ) : (
                          "Send Request"
                        )}
                      </motion.button>
                      <p className="text-[#49655D] text-xs font-mono">
                        We reply within 24 hours
                      </p>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-12 border border-[rgba(53,242,176,0.2)] bg-[rgba(53,242,176,0.03)] text-center"
                  >
                    <div className="w-16 h-16 border border-[rgba(53,242,176,0.3)] flex items-center justify-center mx-auto mb-8">
                      <Check size={24} className="text-[#35F2B0]" />
                    </div>
                    <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#35F2B0] mb-4">
                      REQUEST RECEIVED
                    </div>
                    <h2 className="text-3xl font-light text-[#F0F7F4] mb-4">
                      We'll be in touch.
                    </h2>
                    <p className="text-[#8EA8A0] text-sm leading-relaxed mb-8 max-w-sm mx-auto">
                      Your project inquiry has been received. Our team will review it and respond within 24 hours.
                    </p>
                    <div className="inline-block px-6 py-3 border border-[rgba(70,150,125,0.2)] bg-[rgba(6,16,14,0.6)]">
                      <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#49655D] mb-1">
                        Reference Number
                      </div>
                      <div className="font-mono text-[#35F2B0] tracking-widest">
                        {reference}
                      </div>
                    </div>
                    <div className="mt-8">
                      <p className="text-[#49655D] text-xs font-mono">
                        A copy will be sent to{" "}
                        <span className="text-[#8EA8A0]">{form.email}</span>
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
