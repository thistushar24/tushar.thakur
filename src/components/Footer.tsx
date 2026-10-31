import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Terminal, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-[#1E2333] bg-[#08090D] text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 pb-10 border-b border-[#1E2333]">
          {/* Column 1: System Identifier */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#F59E0B] shadow-[0_0_8px_#F59E0B]" />
              <span className="font-pixel text-xs font-semibold uppercase tracking-wider text-white">
                DIGITAL DOSSIER
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              Personal exploration universe and botanical knowledge archive. Connecting artificial intelligence, software, hardware, and design.
            </p>
            <div className="font-mono text-[11px] text-[#06B6D4]">
              STATUS: ARCHIVE_STABLE // 2024.11
            </div>
          </div>

          {/* Column 2: Navigation Destinations */}
          <div className="space-y-2">
            <div className="font-pixel text-[10px] text-neutral-500 uppercase tracking-widest">
              DESTINATIONS
            </div>
            <ul className="space-y-1.5 text-xs font-mono">
              <li>
                <Link to="/about" className="hover:text-[#FBBF24] transition-colors flex items-center gap-1.5">
                  <span className="text-[#F59E0B] font-pixel text-[9px]">[01]</span>
                  <span>My Story</span>
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#06B6D4] transition-colors flex items-center gap-1.5">
                  <span className="text-[#06B6D4] font-pixel text-[9px]">[02]</span>
                  <span>Project Archive</span>
                </Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-[#10B981] transition-colors flex items-center gap-1.5">
                  <span className="text-[#10B981] font-pixel text-[9px]">[03]</span>
                  <span>Experience Log</span>
                </Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-[#8B5CF6] transition-colors flex items-center gap-1.5">
                  <span className="text-[#8B5CF6] font-pixel text-[9px]">[04]</span>
                  <span>Technology & Skills</span>
                </Link>
              </li>
              <li>
                <Link to="/explorations" className="hover:text-[#EC4899] transition-colors flex items-center gap-1.5">
                  <span className="text-[#EC4899] font-pixel text-[9px]">[05]</span>
                  <span>Beyond Technology</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#EAB308] transition-colors flex items-center gap-1.5">
                  <span className="text-[#EAB308] font-pixel text-[9px]">[06]</span>
                  <span>Contact & Booking</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Telemetry & Institution */}
          <div className="space-y-2">
            <div className="font-pixel text-[10px] text-neutral-500 uppercase tracking-widest">
              ACADEMIC CONTEXT
            </div>
            <div className="text-xs space-y-1 text-neutral-300 font-mono">
              <p className="font-semibold text-white">B.Tech in Artificial Intelligence & Data Science</p>
              <p className="text-neutral-400">Vishwakarma Institute of Technology (VIT)</p>
              <p className="text-neutral-400">Pune, Maharashtra, India</p>
            </div>
            <div className="pt-2">
              <a
                href="/Tushar_Thakur_Resume.pdf"
                download="Tushar_Thakur_Resume.pdf"
                className="inline-flex items-center gap-1.5 text-xs font-pixel text-[#FBBF24] hover:underline"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD_RESUME.PDF</span>
              </a>
            </div>
          </div>

          {/* Column 4: Transmission & Protocols */}
          <div className="space-y-3">
            <div className="font-pixel text-[10px] text-neutral-500 uppercase tracking-widest">
              TRANSMISSION
            </div>
            <div className="flex flex-col gap-2 text-xs font-mono">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-[#06B6D4] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github.com/tusharthakur</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-[#06B6D4] transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>linkedin.com/in/tusharthakur</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 text-neutral-300 hover:text-[#F59E0B] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>BIOLUMINESCENT_TREE_RENDERER // PIXEL COLOUR PROTOCOL</span>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-white transition-colors">
              [RETURN_TO_HOME]
            </Link>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-1 hover:text-[#F59E0B] transition-colors"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
