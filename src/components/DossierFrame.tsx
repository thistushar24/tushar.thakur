import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GitFork, Download } from 'lucide-react';

interface DossierFrameProps {
  terminalCode: string;
  categoryLabel: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  backTo?: string;
  backLabel?: string;
}

export const DossierFrame: React.FC<DossierFrameProps> = ({
  terminalCode,
  categoryLabel,
  title,
  subtitle,
  children,
  backTo = '/',
  backLabel = 'Return to Root System',
}) => {
  return (
    <div className="min-h-screen bg-[#0B0C10] text-[#E5E7EB]">
      {/* Editorial Header / Dossier Bar in Dark Mode */}
      <section className="border-b border-[#1E2333] bg-[#0E1018] pixel-grid py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Terminal Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <Link
              to={backTo}
              className="group inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-[#F59E0B] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>{backLabel}</span>
            </Link>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#161926] border border-[#F59E0B]/40 text-[#FBBF24] font-pixel text-[11px] shadow-[0_0_8px_rgba(245,158,11,0.25)]">
                <span className="w-1.5 h-1.5 bg-[#F59E0B] animate-pulse" />
                <span>{terminalCode}</span>
              </span>
              
              <a
                href="/Tushar_Thakur_Resume.pdf"
                download="Tushar_Thakur_Resume.pdf"
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-sm bg-[#1A1D2C] border border-[#2D3346] text-[#F59E0B] hover:text-white font-mono text-xs hover:border-[#F59E0B] transition-colors"
              >
                <Download className="w-3 h-3" />
                <span>CV</span>
              </a>
            </div>
          </div>

          {/* Classification & Page Title */}
          <div className="max-w-4xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#F59E0B] shadow-[0_0_8px_#F59E0B]" />
              <span className="font-pixel text-xs text-[#FBBF24] uppercase tracking-widest font-semibold">
                {categoryLabel}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight font-display">
              {title}
            </h1>

            {subtitle && (
              <p className="text-base sm:text-lg text-neutral-400 font-sans leading-relaxed pt-1">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {children}
      </main>
    </div>
  );
};
