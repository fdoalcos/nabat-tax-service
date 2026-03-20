"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{
    type: "idle" | "error" | "success";
    text: string;
  }>({ type: "idle", text: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setStatus({ type: "error", text: "Please complete all fields." });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setStatus({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    setSubmitting(true);
    setStatus({ type: "idle", text: "" });

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus({ type: "success", text: "Message sent! We'll be in touch soon." });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", text: "Something went wrong. Please try again or call us directly." });
      }
    } catch {
      setStatus({ type: "error", text: "Something went wrong. Please try again or call us directly." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center px-8 bg-surface" id="contact">
      <div className="max-w-screen-2xl mx-auto w-full py-24">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Contact Form */}
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-primary font-sans text-xs font-bold uppercase tracking-[0.3em]">
                Inquiry
              </p>
              <h2 className="font-serif text-5xl md:text-6xl">
                We&apos;re Here to <span className="italic">Help</span>
              </h2>
              <p className="text-on-surface-variant text-lg font-light max-w-md">
                Our team is ready to assist with your tax needs.
              </p>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label
                    className="text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-1"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    className="bg-transparent border-0 border-b border-outline-variant/40 focus:border-primary focus:ring-0 px-0 py-3 transition-all duration-300 font-sans text-on-surface placeholder:text-outline-variant/60 outline-none"
                    id="name"
                    placeholder="John Doe"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-1"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="bg-transparent border-0 border-b border-outline-variant/40 focus:border-primary focus:ring-0 px-0 py-3 transition-all duration-300 font-sans text-on-surface placeholder:text-outline-variant/60 outline-none"
                    id="email"
                    placeholder="john@example.com"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  className="text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-1"
                  htmlFor="message"
                >
                  Your Inquiry
                </label>
                <textarea
                  className="bg-transparent border-0 border-b border-outline-variant/40 focus:border-primary focus:ring-0 px-0 py-3 transition-all duration-300 font-sans text-on-surface placeholder:text-outline-variant/60 min-h-[120px] outline-none resize-none"
                  id="message"
                  placeholder="How can we assist you today?"
                  required
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="gradient-cta text-on-primary px-12 py-5 rounded-lg font-sans font-semibold tracking-wide shadow-lg transition-transform hover:-translate-y-1 self-start inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {submitting ? "Sending..." : "Send Message"}
                <span className="material-symbols-outlined text-sm">
                  {submitting ? "hourglass_empty" : "send"}
                </span>
              </button>

              {status.type !== "idle" && (
                <p
                  className={`text-sm font-sans ${
                    status.type === "success" ? "text-primary" : "text-error"
                  }`}
                  role="status"
                >
                  {status.text}
                </p>
              )}
            </form>
          </div>

          {/* Info & Hours */}
          <div className="space-y-16 lg:pl-12 border-l border-outline-variant/20">
            {/* Address */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-primary">
                <span className="material-symbols-outlined">location_on</span>
                <h5 className="font-sans font-bold uppercase tracking-widest text-xs">
                  Nabat Tax Service
                </h5>
              </div>
              <p className="font-serif text-2xl leading-relaxed text-on-surface">
                175 William F. McClellan Hwy,
                <br />
                Boston, MA 02128
              </p>
              <a
                className="inline-block text-primary font-bold text-sm underline underline-offset-8 decoration-primary/30 hover:decoration-primary transition-all"
                href="https://maps.google.com/?q=175+William+F+McClellan+Hwy+Boston+MA+02128"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-primary">
                <span className="material-symbols-outlined">
                  contact_support
                </span>
                <h5 className="font-sans font-bold uppercase tracking-widest text-xs">
                  Direct Line
                </h5>
              </div>
              <div className="space-y-2">
                <p className="font-serif text-2xl text-on-surface">
                  (978) 908-8000
                </p>
                <p className="font-sans text-on-surface-variant">
                  NabatTaxService@gmail.com
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  className="p-4 bg-surface-container rounded-lg text-primary hover:bg-primary hover:text-on-primary transition-all duration-300"
                  href="tel:9789088000"
                >
                  <span className="material-symbols-outlined">call</span>
                </a>
                <a
                  className="p-4 bg-surface-container rounded-lg text-primary hover:bg-primary hover:text-on-primary transition-all duration-300"
                  href="mailto:NabatTaxService@gmail.com"
                >
                  <span className="material-symbols-outlined">mail</span>
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-primary">
                <span className="material-symbols-outlined">schedule</span>
                <h5 className="font-sans font-bold uppercase tracking-widest text-xs">
                  Availability
                </h5>
              </div>
              <div className="space-y-4 max-w-sm">
                <div className="flex justify-between border-b border-outline-variant/10 pb-4">
                  <span className="text-on-surface-variant font-sans">
                    Mon – Sat
                  </span>
                  <span className="font-bold text-on-surface">9am – 5pm</span>
                </div>
                <div className="pt-2">
                  <p className="text-on-surface-variant italic text-sm font-sans">
                    Services provided by appointment only to ensure dedicated
                    focus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
