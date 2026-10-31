import React, { useState } from 'react';
import {
  Mail,
  Calendar,
  Clock,
  ArrowUpRight,
  Send,
  CheckCircle,
  Copy,
  ExternalLink,
  Sparkles,
  Download
} from 'lucide-react';
import { DossierFrame } from '../components/DossierFrame';
import { getStoredPersonalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

export const ContactPage: React.FC = () => {
  const [personalInfo] = useState(() => getStoredPersonalInfo());
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'AI & Engineering Collaboration',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const calComUrl = `https://cal.com/${personalInfo.calUsername}/30min`;
  const gcalUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?text=Conversation+with+Tushar+Thakur&details=Discussion+on+AI,+Robotics,+or+Product+Collaboration`;

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 900);
  };

  return (
    <DossierFrame
      terminalCode="ESTABLISH_CONNECTION..."
      categoryLabel="DIRECT TRANSMISSION"
      title="OPEN TO INTERESTING IDEAS."
      subtitle="Have an idea, project, collaboration or an interesting opportunity? Let's connect."
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="font-pixel text-xs text-[#FBBF24] uppercase tracking-wider block">
                COMMUNICATION MATRIX
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
                Direct Channels
              </h2>
              <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                Whether you represent a research laboratory, robotics venture, or technology team looking for polymathic builders—my inbox is open.
              </p>
            </div>

            {/* Verified Links List */}
            <div className="space-y-3">
              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl border border-[#222638] bg-[#12141F] hover:border-[#F59E0B]/60 transition-all flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-sm bg-[#161926] border border-[#2D3346] text-[#F59E0B]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-pixel text-neutral-500 block uppercase">PRIMARY EMAIL</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-mono font-bold text-white hover:text-[#FBBF24] transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmailToClipboard}
                  className="p-2 rounded hover:bg-[#1E2333] text-neutral-400 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <span className="text-[10px] font-pixel text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" />
                      COPIED
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group p-4 rounded-xl border border-[#222638] bg-[#12141F] hover:border-[#06B6D4]/60 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-sm bg-[#161926] border border-[#2D3346] text-[#06B6D4]">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-pixel text-neutral-500 block uppercase">PROFESSIONAL NETWORK</span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-white group-hover:text-[#06B6D4] transition-colors">
                      linkedin.com/in/tushar-thakur-429b01288
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#06B6D4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="group p-4 rounded-xl border border-[#222638] bg-[#12141F] hover:border-[#F59E0B]/60 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-sm bg-[#161926] border border-[#2D3346] text-[#F59E0B]">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-pixel text-neutral-500 block uppercase">SOURCE REPOSITORY</span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-white group-hover:text-[#FBBF24] transition-colors">
                      github.com/thistushar24
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#F59E0B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Resume Direct Download Card */}
              <a
                href="/Tushar_Thakur_Resume.pdf"
                download="Tushar_Thakur_Resume.pdf"
                className="group p-4 rounded-xl border border-[#F59E0B]/40 bg-[#171A28] hover:bg-[#1E2336] transition-all flex items-center justify-between shadow-[0_0_15px_rgba(245,158,11,0.15)]"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-sm bg-[#F59E0B] text-black">
                    <Download className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-pixel text-[#FBBF24] block uppercase">OFFICIAL RESUME // CV</span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-white group-hover:text-[#FBBF24] transition-colors">
                      Download Tushar_Thakur_Resume.pdf
                    </span>
                  </div>
                </div>
                <Download className="w-4 h-4 text-[#F59E0B] group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl border border-[#222638] bg-[#12141F] shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-[#1E2333] pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F59E0B] shadow-[0_0_6px_#F59E0B]" />
                  <span className="font-pixel text-xs font-bold text-white uppercase tracking-wider">
                    DISPATCH TRANSMISSION
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#06B6D4]">ENCRYPTED // TLS</span>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#10B981]/20 border border-[#10B981] text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_15px_#10B981]">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    TRANSMISSION RECORDED
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto">
                    Thank you for reaching out. Your message has been archived in the dossier system. I typically respond within 24–48 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'AI & Engineering Collaboration', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-sm text-xs font-pixel bg-[#161926] border border-[#2D3346] text-[#FBBF24] hover:bg-[#1E2336]"
                  >
                    SEND ANOTHER TRANSMISSION
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs font-mono">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-neutral-400 uppercase font-semibold">YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Elena Rostova"
                        className="w-full px-3.5 py-2.5 rounded-sm border border-[#262A38] focus:border-[#F59E0B] focus:outline-hidden font-sans text-sm bg-[#0E1018] text-white"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-neutral-400 uppercase font-semibold">CONTACT EMAIL *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. elena@laboratory.org"
                        className="w-full px-3.5 py-2.5 rounded-sm border border-[#262A38] focus:border-[#F59E0B] focus:outline-hidden font-sans text-sm bg-[#0E1018] text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-neutral-400 uppercase font-semibold">TOPIC / INQUIRY CATEGORY</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-sm border border-[#262A38] focus:border-[#F59E0B] focus:outline-hidden font-sans text-sm bg-[#0E1018] text-white"
                    >
                      <option value="AI & Engineering Collaboration">AI & Engineering Collaboration</option>
                      <option value="Robotics R&D Inquiry">Robotics R&D Inquiry</option>
                      <option value="Product Architecture & Design">Product Architecture & Design</option>
                      <option value="Speaking, Hackathon & Mentorship">Speaking, Hackathon & Mentorship</option>
                      <option value="General Technical Conversation">General Technical Conversation</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-neutral-400 uppercase font-semibold">MESSAGE TRANSMISSION *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, context, or question..."
                      className="w-full px-3.5 py-2.5 rounded-sm border border-[#262A38] focus:border-[#F59E0B] focus:outline-hidden font-sans text-sm bg-[#0E1018] text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-sm bg-[#F59E0B] text-black font-pixel text-xs font-bold uppercase tracking-wider hover:bg-[#FBBF24] transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(245,158,11,0.3)] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING MESSAGE...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>TRANSMIT DISPATCH</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Premium Meeting Booking Section */}
        <section className="p-8 sm:p-12 rounded-2xl border border-[#F59E0B]/40 bg-[#12141F] shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#1E2333]">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-xs bg-[#1A1D2C] text-[#FBBF24] font-pixel text-xs border border-[#F59E0B]/30">
                <Calendar className="w-3.5 h-3.5" />
                <span>CALENDAR PROTOCOL // DIRECT SCHEDULING</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight">
                Schedule a Focused Conversation
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                Prefer a synchronous 1-on-1 dialogue? Reserve a 30-minute deep-dive slot directly on my synchronized schedule via Cal.com or Google Calendar.
              </p>
            </div>

            <a
              href={calComUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-md bg-[#F59E0B] text-black font-pixel text-xs font-bold uppercase tracking-wider hover:bg-[#FBBF24] transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] shrink-0"
            >
              <Sparkles className="w-4 h-4" />
              <span>BOOK A CONVERSATION</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-[#222638] bg-[#0E1018] space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-pixel text-xs font-bold text-[#F59E0B] uppercase">
                    CAL.COM INTEGRATION
                  </span>
                  <span className="px-2 py-0.5 rounded-xs bg-emerald-950 text-emerald-400 text-[9px] font-pixel border border-emerald-800">
                    LIVE SYNC
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  30-Minute Technical Exploration
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Automatic timezone conversion, instant Google Meet link generation, and calendar invite dispatched upon confirmation.
                </p>
              </div>

              <a
                href={calComUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between w-full p-3 rounded-sm border border-[#2D3346] hover:border-[#F59E0B] bg-[#141724] hover:bg-[#1A1D2E] text-white text-xs font-mono font-semibold transition-all"
              >
                <span>OPEN CAL.COM APPOINTMENTS</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#F59E0B]" />
              </a>
            </div>

            <div className="p-6 rounded-xl border border-[#222638] bg-[#0E1018] space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-pixel text-xs font-bold text-[#06B6D4] uppercase">
                    GOOGLE CALENDAR SCHEDULER
                  </span>
                  <span className="px-2 py-0.5 rounded-xs bg-[#161926] text-neutral-300 text-[9px] font-pixel">
                    DIRECT LINK
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  Direct Google Calendar Invite
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Generate a pre-filled Google Calendar event invitation directly with discussion agenda notes and contact coordinates.
                </p>
              </div>

              <a
                href={gcalUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between w-full p-3 rounded-sm border border-[#2D3346] hover:border-[#06B6D4] bg-[#141724] hover:bg-[#1A1D2E] text-white text-xs font-mono font-semibold transition-all"
              >
                <span>ADD TO GOOGLE CALENDAR</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#06B6D4]" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </DossierFrame>
  );
};
