import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Code2, Sparkles, Crosshair, Cpu, MapPin, Calendar, Camera } from 'lucide-react';
import { DossierFrame } from '../components/DossierFrame';
import { getStoredMilestones } from '../data/portfolioData';

export const AboutPage: React.FC = () => {
  const [milestones] = useState(() => getStoredMilestones());

  return (
    <DossierFrame
      terminalCode="DOSSIER_001 // PERSONAL HISTORY"
      categoryLabel="BIOGRAPHICAL RECORD"
      title="THE JOURNEY SO FAR."
      subtitle="A sequential evolution of curiosity: from early childhood silicon fascinations in Nepal to multi-disciplinary AI and robotics engineering at VIT Pune."
    >
      <div className="relative max-w-6xl mx-auto py-8">
        {/* Continuous Central Golden Timeline Spine (Desktop) */}
        <div className="hidden lg:block absolute left-1/2 top-4 bottom-12 w-[3px] -translate-x-1/2 bg-gradient-to-b from-[#D97706] via-[#F59E0B] to-[#FDE68A] shadow-[0_0_12px_#F59E0B] rounded-full" />

        <div className="space-y-16 md:space-y-24">
          {milestones.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.level}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Timeline Center Milestone Node (Desktop) */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                  <div className="relative w-12 h-12 rounded-full bg-[#0E1018] border-2 border-[#F59E0B] flex items-center justify-center shadow-[0_0_16px_rgba(245,158,11,0.5)]">
                    <span className="font-pixel text-xs font-bold text-[#FBBF24]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* 1. Story Content Card */}
                <div
                  className={`lg:col-span-6 ${
                    isEven
                      ? 'lg:order-1'
                      : 'lg:order-2'
                  }`}
                >
                  <div className="p-6 sm:p-8 rounded-2xl border border-[#222638] bg-[#12141F] hover:border-[#F59E0B]/60 transition-all duration-300 shadow-xl space-y-4">
                    {/* Chapter Metadata */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-xs text-[10px] font-pixel bg-[#1D2133] text-[#FBBF24] border border-[#F59E0B]/30 uppercase">
                        {item.level}
                      </span>
                      <span className="text-xs font-mono text-[#06B6D4]">
                        {item.badge}
                      </span>
                    </div>

                    {/* Chapter Title & Tagline */}
                    <div>
                      <h2 className="text-2xl font-bold text-white tracking-tight font-display">
                        {item.title}
                      </h2>
                      <p className="text-xs font-mono text-[#F59E0B] pt-0.5">
                        {item.tagline}
                      </p>
                    </div>

                    {/* Location & Period Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 pt-1 pb-1 border-y border-[#1E2333]">
                      {item.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                          <span>{item.location}</span>
                        </div>
                      )}
                      {item.period && (
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                          <span>{item.period}</span>
                        </div>
                      )}
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-neutral-200 font-medium leading-relaxed">
                      {item.summary}
                    </p>

                    {/* Expanded Historical Details */}
                    <ul className="space-y-2 text-xs text-neutral-400 leading-relaxed">
                      {item.details.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-[#F59E0B] mt-0.5">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Takeaway Node */}
                    <div className="pt-3 border-t border-[#1E2333]">
                      <div className="text-[10px] font-pixel text-neutral-500 uppercase tracking-wider mb-1">
                        PIVOTAL TAKEAWAY
                      </div>
                      <p className="text-xs font-mono font-semibold text-[#FBBF24] italic">
                        "{item.keyTakeaway}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Photo Slot Beside Every Story (Real photo frame with caption & editable support) */}
                <div
                  className={`lg:col-span-6 ${
                    isEven
                      ? 'lg:order-2'
                      : 'lg:order-1'
                  }`}
                >
                  <div className="relative group p-3 rounded-2xl border border-[#222638] bg-[#0E1018] shadow-2xl hover:border-[#F59E0B]/50 transition-all">
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-neutral-900 border border-[#1A1D2B]">
                      <img
                        src={item.photoUrl || '/tushar-thakur.jpg'}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/tushar-thakur.jpg';
                        }}
                      />
                      <div className="absolute top-3 left-3 px-2 py-1 rounded-xs bg-black/80 backdrop-blur-md text-[10px] font-pixel text-[#FBBF24] border border-[#F59E0B]/40">
                        {item.level} PHOTO
                      </div>
                    </div>

                    {/* Photo Caption & Admin edit indicator */}
                    <div className="pt-3 px-1 flex items-center justify-between text-xs">
                      <p className="text-xs font-mono text-neutral-400 italic line-clamp-1">
                        "{item.photoCaption || 'Documentary record from this chapter.'}"
                      </p>
                      <Link
                        to="/admin"
                        className="inline-flex items-center gap-1 text-[10px] font-pixel text-[#06B6D4] hover:underline shrink-0 ml-2"
                        title="Edit / Replace Photo in Admin"
                      >
                        <Camera className="w-3 h-3" />
                        <span>EDIT PHOTO</span>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Transit to next branch */}
      <div className="max-w-2xl mx-auto mt-20 pt-10 border-t border-[#1E2333] text-center space-y-4">
        <div className="font-pixel text-xs text-neutral-500 uppercase tracking-widest">
          TRANSIT TO NEXT BRANCH
        </div>
        <Link
          to="/projects"
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-md bg-[#F59E0B] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#FBBF24] transition-all duration-200 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
        >
          <span>PROCEED TO PROJECT ARCHIVE [02]</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </DossierFrame>
  );
};
