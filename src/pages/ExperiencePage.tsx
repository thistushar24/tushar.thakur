import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  Award,
  CheckCircle2,
  ArrowRight,
  Layers,
  Camera
} from 'lucide-react';
import { DossierFrame } from '../components/DossierFrame';
import { getStoredExperiences } from '../data/portfolioData';

export const ExperiencePage: React.FC = () => {
  const [experiences] = useState(() => getStoredExperiences());
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'exp-i2iaoc': true,
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <DossierFrame
      terminalCode="LOADING PROFESSIONAL_HISTORY..."
      categoryLabel="RECORD OF SERVICE & LEADERSHIP"
      title="EXPERIENCE LOG."
      subtitle="A documented chronicle of institutional leadership, robotics R&D, design coordination, and technical engineering internships."
    >
      <div className="relative max-w-4xl mx-auto py-8">
        {/* Glowing Emerald / Gold Spine */}
        <div className="absolute left-4 sm:left-8 top-3 bottom-12 w-[3px] bg-gradient-to-b from-[#10B981] via-[#F59E0B] to-[#FBBF24] shadow-[0_0_10px_#10B981] rounded-full" />

        <div className="space-y-10 sm:space-y-12">
          {experiences.map((exp, idx) => {
            const isExpanded = !!expandedIds[exp.id];

            return (
              <div key={exp.id} className="relative pl-12 sm:pl-20">
                {/* Milestone Node on Spine */}
                <div className="absolute left-[3px] sm:left-[19px] top-4 w-7 h-7 rounded-full bg-[#0E1018] border-2 border-[#10B981] flex items-center justify-center shadow-[0_0_10px_#10B981] z-10">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                </div>

                {/* Experience Card */}
                <div className="rounded-xl border border-[#222638] bg-[#12141F] transition-all duration-300 hover:border-[#10B981]/60 shadow-xl overflow-hidden">
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className="p-6 sm:p-7 cursor-pointer hover:bg-[#161926] transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="font-pixel text-[11px] text-[#10B981] tracking-wider">
                        ENTRY_0{idx + 1} // {exp.type}
                      </span>
                      <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#F59E0B]" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display">
                          {exp.role}
                        </h2>
                        <h3 className="text-sm sm:text-base font-semibold text-[#FBBF24] font-mono mt-0.5">
                          {exp.organization}
                        </h3>
                      </div>

                      <button
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-[#2D3346] bg-[#161926] text-xs font-pixel text-neutral-300 hover:text-white self-start sm:self-auto"
                        aria-label="Toggle details"
                      >
                        <span>{isExpanded ? 'COLLAPSE' : 'EXPAND DETAILS'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    <p className="text-sm text-neutral-300 font-sans leading-relaxed mt-3">
                      {exp.shortDescription}
                    </p>
                  </div>

                  {/* Photo Slot & Expanded Details */}
                  {isExpanded && (
                    <div className="px-6 sm:px-7 pb-7 pt-4 border-t border-[#1E2333] bg-[#0E1018] space-y-6">
                      
                      {/* Photo from this experience / role */}
                      <div className="relative rounded-xl overflow-hidden border border-[#262A38] bg-[#141724]">
                        <div className="aspect-[16/8] sm:aspect-[21/9] w-full overflow-hidden bg-neutral-900">
                          <img
                            src={exp.photoUrl || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'}
                            alt={exp.organization}
                            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                          />
                        </div>
                        <div className="p-3 bg-[#11131E] border-t border-[#222638] flex items-center justify-between text-xs">
                          <span className="font-mono text-neutral-400 italic line-clamp-1">
                            "{exp.photoCaption || `${exp.organization} - Documented activity.`}"
                          </span>
                          <Link
                            to="/admin"
                            className="inline-flex items-center gap-1 text-[10px] font-pixel text-[#06B6D4] hover:underline shrink-0 ml-2"
                          >
                            <Camera className="w-3 h-3" />
                            <span>CHANGE PHOTO</span>
                          </Link>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 font-pixel text-xs text-[#10B981] uppercase tracking-wider">
                          <Layers className="w-3.5 h-3.5" />
                          <span>PRIMARY RESPONSIBILITIES & OPERATIONS</span>
                        </div>
                        <ul className="space-y-2 text-xs text-neutral-300">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2.5">
                              <span className="text-[#10B981] font-bold mt-0.5">•</span>
                              <span className="leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 font-pixel text-xs text-[#FBBF24] uppercase tracking-wider">
                          <Award className="w-3.5 h-3.5 text-[#F59E0B]" />
                          <span>DOCUMENTED ACHIEVEMENTS & IMPACT</span>
                        </div>
                        <ul className="space-y-2 text-xs text-neutral-300">
                          {exp.achievements.map((ach, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span className="leading-relaxed font-medium">{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Applied Domains */}
                      <div className="pt-2 border-t border-[#1E2333]">
                        <span className="font-pixel text-[9px] text-neutral-500 uppercase tracking-widest block mb-2">
                          APPLIED DOMAINS & TOOLCHAINS:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-1 rounded-xs bg-[#161926] border border-[#2D3346] text-neutral-300 font-mono text-[11px]"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-xl mx-auto mt-16 pt-10 border-t border-[#1E2333] text-center space-y-4">
        <div className="font-pixel text-xs text-neutral-500 uppercase tracking-widest">
          TRANSIT TO NEXT ROOT BRANCH
        </div>
        <Link
          to="/skills"
          className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-md bg-[#F59E0B] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#FBBF24] transition-all duration-200 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
        >
          <span>EXAMINE CAPABILITY STACK [04]</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </DossierFrame>
  );
};
