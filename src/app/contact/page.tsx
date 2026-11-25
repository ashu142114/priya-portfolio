"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";
import { SparkleIcon } from "@/components/common/Stickers";
import { SplitText } from "@/components/motion";
import { Mail, MessageCircle, Send, CheckCircle2, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setIsSending(true);

    // Fallback mailto trigger or form submission simulation
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
      // Construct mailto link
      const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
        formData.subject || `Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-rose-700 text-xs font-semibold tracking-wide border border-blush-200 mb-4">
            <SparkleIcon className="w-3 h-3 text-rose-500" />
            <span>Get in Touch</span>
          </div>
          <SplitText
            as="h1"
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-plum tracking-tight"
          >
            Let's Talk Design
          </SplitText>
          <p className="font-sans text-sm sm:text-base text-plum-600 mt-3 leading-relaxed">
            Have a new project, mobile app idea, or opportunity in mind? Send a direct message or
            reach out via WhatsApp or email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Email Card */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="p-6 rounded-3xl bg-white border border-blush-200 shadow-soft glass-card-hover flex items-start gap-4 block"
              >
                <div className="w-12 h-12 rounded-2xl bg-blush-100 text-rose-600 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-plum-400 block">
                    Email Inquiries
                  </span>
                  <h3 className="font-serif font-bold text-base text-plum mt-0.5">
                    {siteConfig.email}
                  </h3>
                  <p className="text-xs text-plum-500 mt-1">Direct replies within 24 hours</p>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-3xl bg-white border border-blush-200 shadow-soft glass-card-hover flex items-start gap-4 block"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-plum-400 block">
                    Phone & WhatsApp
                  </span>
                  <h3 className="font-serif font-bold text-base text-plum mt-0.5">
                    {siteConfig.phoneFormatted}
                  </h3>
                  <p className="text-xs text-emerald-700 font-medium mt-1">
                    Quick chats & project consultations
                  </p>
                </div>
              </a>

              {/* Location Card */}
              <div className="p-6 rounded-3xl bg-white border border-blush-200 shadow-soft flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-lilac-100 text-plum-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-plum-400 block">
                    Location
                  </span>
                  <h3 className="font-serif font-bold text-base text-plum mt-0.5">
                    {siteConfig.location}
                  </h3>
                  <p className="text-xs text-plum-500 mt-1">Available for remote & hybrid roles</p>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="p-4 rounded-2xl bg-blush-100/50 border border-blush-200 text-xs text-plum-600">
              <span className="font-bold text-plum">Privacy Note:</span> Your details are only used to
              reply to your design inquiry.
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl sm:rounded-4xl bg-white border border-blush-200 shadow-soft-lg">
            <h2 className="font-serif text-2xl font-bold text-plum mb-6">Send a Message</h2>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-emerald-900">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-xs sm:text-sm text-emerald-800 mt-2">
                  Your message has been initiated. If your mail client didn't open automatically, feel free to write to{" "}
                  <a href={`mailto:${siteConfig.email}`} className="underline font-semibold">
                    {siteConfig.email}
                  </a>
                  .
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-5 py-2 rounded-full bg-white border border-emerald-300 text-xs font-semibold text-emerald-800 hover:bg-emerald-100"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-plum mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-blush-200 text-xs sm:text-sm text-plum focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white transition-all min-h-[44px]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-plum mb-1.5">
                    Your Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. jane@company.com"
                    className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-blush-200 text-xs sm:text-sm text-plum focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white transition-all min-h-[44px]"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-plum mb-1.5">
                    Subject (Optional)
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Healthcare App Design Inquiry"
                    className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-blush-200 text-xs sm:text-sm text-plum focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white transition-all min-h-[44px]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-plum mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me a bit about your project, timeline, or design needs..."
                    className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-blush-200 text-xs sm:text-sm text-plum focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-full bg-rose-500 text-white font-sans text-xs sm:text-sm font-semibold tracking-wide hover:bg-rose-600 transition-all shadow-soft flex items-center justify-center gap-2 active:scale-95 disabled:opacity-70"
                >
                  {isSending ? (
                    <span>Opening your mail client...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
