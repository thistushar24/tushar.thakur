import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Compass, Lightbulb, TrendingUp, Palette, Network, ArrowRight, HelpCircle } from 'lucide-react';
import { DossierFrame } from '../components/DossierFrame';
import { EXPLORATION_TOPICS } from '../data/portfolioData';

export const ExplorationsPage: React.FC = () => {
  const getTopicIcon = (num: string) => {
    switch (num) {
      case '01': return Lightbulb;
      case '02': return TrendingUp;
      case '03': return Network;
      case '04': return Palette;
      case '05': return Compass;
      default: return Sparkles;
    }
  };

  const getTopicColor = (num: string) => {
    switch (num) {
      case '01': return '#F59E0B';
      case '02': return '#06B6D4';
      case '03': return '#8B5CF6';
      case '04': return '#EC4899';
      case '05': return '#10B981';
      default: return '#F59E0B';
    }
  };

  return (
    <DossierFrame
      terminalCode="EXPLORING_UNCHARTED_TERRITORIES..."
      categoryLabel="LATERAL FRONTIERS"
      title="BEYOND THE CODE."
      subtitle="Engineering is the substrate, but curiosity extends into product architecture, venture creation, aesthetic philosophy, and polymathic Da Vinci synthesis."
    >
      {/* Compact, Small Manifesto Quote */}
      <div className="max-w-3xl mx-auto p-4 sm:p-5 mb-12 rounded-lg bg-[#141724]/80 border border-[#2D3346] text-center space-y-1.5 shadow-md">
        <blockquote className="text-xs sm:text-sm font-sans text-neutral-300 italic leading-relaxed">
          "True breakthroughs occur not in the vacuum of a single domain, but at the turbulent intersections where fine art, mechanical rigor, business economics, and human empathy collide."
        </blockquote>
        <span className="font-pixel text-[10px] text-[#FBBF24] block">
          — TUSHAR THAKUR // POLYMATHIC POSTULATE
        </span>
      </div>

      {/* Experimental Asymmetric Editorial Sections */}
      <div className="space-y-16 max-w-6xl mx-auto">
        {EXPLORATION_TOPICS.map((topic) => {
          const Icon = getTopicIcon(topic.number);
          const color = getTopicColor(topic.number);

          return (
            <article
              key={topic.number}
              className="relative p-8 sm:p-12 rounded-2xl border border-[#222638] bg-[#12141F] hover:border-[#373D54] transition-all duration-300 shadow-xl overflow-hidden"
            >
              {/* Giant Background Number Watermark */}
              <div className="absolute top-2 right-4 sm:right-8 font-display text-8xl sm:text-9xl font-bold text-[#181B26] select-none pointer-events-none -z-0">
                {topic.number}
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Topic Metadata & Title */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-2">
                    <div
                      className="p-2 rounded bg-[#161926] border border-[#2D3346]"
                      style={{ color, boxShadow: `0 0 10px ${color}33` }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-pixel text-xs uppercase tracking-wider" style={{ color }}>
                      DOMAIN // 0{topic.number}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
                    {topic.title}
                  </h2>

                  <p className="font-mono text-xs text-[#06B6D4] italic">
                    "{topic.subtitle}"
                  </p>

                  <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                    {topic.summary}
                  </p>

                  {/* Core Inquiry Box */}
                  <div className="p-4 rounded-lg bg-[#0E1018] border border-[#1E2333] space-y-1 mt-4">
                    <div className="flex items-center gap-1.5 text-[10px] font-pixel text-[#FBBF24] uppercase">
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>THE CENTRAL INQUIRY</span>
                    </div>
                    <p className="text-xs font-mono text-neutral-300 leading-relaxed font-medium">
                      "{topic.keyInquiry}"
                    </p>
                  </div>
                </div>

                {/* Topic Perspectives & Artifacts */}
                <div className="lg:col-span-7 space-y-6 pt-2">
                  <div className="space-y-3">
                    <span className="font-pixel text-[10px] text-neutral-500 uppercase tracking-widest block">
                      PHILOSOPHICAL PERSPECTIVES:
                    </span>
                    <ul className="space-y-3">
                      {topic.perspectives.map((p, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                            style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}` }}
                          />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Artifacts Chips */}
                  <div className="pt-4 border-t border-[#1E2333]">
                    <span className="font-pixel text-[9px] text-neutral-500 uppercase tracking-widest block mb-2">
                      DERIVED EXPERIMENTAL ARTIFACTS:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {topic.artifacts.map((art) => (
                        <span
                          key={art}
                          className="px-3 py-1 rounded-sm bg-[#161926] border border-[#262A38] text-neutral-300 font-mono text-xs"
                        >
                          {art}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="max-w-xl mx-auto mt-20 pt-10 border-t border-[#1E2333] text-center space-y-4">
        <div className="font-pixel text-xs text-neutral-500 uppercase tracking-widest">
          COMPLETE THE EXPEDITION
        </div>
        <Link
          to="/contact"
          className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-md bg-[#F59E0B] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#FBBF24] transition-all duration-200 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
        >
          <span>ESTABLISH DIRECT CONNECTION [06]</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </DossierFrame>
  );
};
