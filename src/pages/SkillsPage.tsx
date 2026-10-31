import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Cpu, Palette, Layers, ArrowRight, BrainCircuit, Wrench } from 'lucide-react';
import { DossierFrame } from '../components/DossierFrame';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsPage: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'PROGRAMMING & SOFTWARE': return Code;
      case 'ARTIFICIAL INTELLIGENCE': return BrainCircuit;
      case 'HARDWARE & ROBOTICS': return Cpu;
      case 'DESIGN & CREATIVE TOOLS': return Palette;
      case 'FRAMEWORKS & PLATFORMS': return Layers;
      default: return Wrench;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'PROGRAMMING & SOFTWARE': return '#06B6D4';
      case 'ARTIFICIAL INTELLIGENCE': return '#8B5CF6';
      case 'HARDWARE & ROBOTICS': return '#F59E0B';
      case 'DESIGN & CREATIVE TOOLS': return '#EC4899';
      case 'FRAMEWORKS & PLATFORMS': return '#10B981';
      default: return '#F59E0B';
    }
  };

  return (
    <DossierFrame
      terminalCode="LOADING_TECH_STACK..."
      categoryLabel="INSTRUMENTATION & RIGOR"
      title="TOOLS OF EXPLORATION."
      subtitle="Organized capability matrix spanning core programming, machine intelligence pipelines, physical robotics hardware, and tactile design systems. (Zero percentage bars—pure applied competence)."
    >
      <div className="space-y-12 max-w-6xl mx-auto">
        {SKILL_GROUPS.map((group) => {
          const Icon = getCategoryIcon(group.category);
          const color = getCategoryColor(group.category);

          return (
            <section
              key={group.category}
              className="p-6 sm:p-8 rounded-xl border border-[#222638] bg-[#12141F] shadow-lg space-y-6 hover:border-[#33394D] transition-colors"
            >
              {/* Group Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#1E2333]">
                <div className="flex items-center gap-3">
                  <div
                    className="p-2.5 rounded-sm bg-[#161926] border border-[#2D3346]"
                    style={{ color, boxShadow: `0 0 10px ${color}33` }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display">
                      {group.category}
                    </h2>
                    <span className="font-pixel text-[10px] text-neutral-400">
                      SUBSYSTEM // {group.terminalCode}
                    </span>
                  </div>
                </div>

                <span className="font-pixel text-xs font-semibold" style={{ color }}>
                  [{group.skills.length} VERIFIED]
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-lg bg-[#0E1018] border border-[#1E2333] hover:border-[#2D3346] transition-all space-y-2 group"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-mono text-sm font-bold text-white group-hover:text-[#FBBF24] transition-colors">
                        {skill.name}
                      </h3>
                      <span className="px-2 py-0.5 rounded-xs text-[10px] font-pixel bg-[#161926] border border-[#2D3346] text-[#06B6D4]">
                        {skill.level}
                      </span>
                    </div>

                    <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                      {skill.note}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="max-w-xl mx-auto mt-16 pt-10 border-t border-[#1E2333] text-center space-y-4">
        <div className="font-pixel text-xs text-neutral-500 uppercase tracking-widest">
          TRANSIT TO NEXT ROOT BRANCH
        </div>
        <Link
          to="/explorations"
          className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-md bg-[#F59E0B] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#FBBF24] transition-all duration-200 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
        >
          <span>EXPLORE BEYOND THE CODE [05]</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </DossierFrame>
  );
};
