import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, Sparkles, Layers, Code, BrainCircuit, Cpu, Palette } from 'lucide-react';
import { DossierFrame } from '../components/DossierFrame';
import { getStoredProjects, Project } from '../data/portfolioData';
import { GithubIcon } from '../components/SocialIcons';

export const ProjectsPage: React.FC = () => {
  const [projects] = useState<Project[]>(() => getStoredProjects());

  // Two Highlight Main Projects
  const highlightProjects = projects.filter((p) => p.featured || p.slug === 'synapse-vision-ai' || p.slug === 'hexapod-kinematics-bot').slice(0, 2);

  // Categorized Sections
  const developmentProjects = projects.filter((p) => p.category === 'Development');
  const researchProjects = projects.filter((p) => p.category === 'Research');
  const designProjects = projects.filter((p) => p.category === 'Design');
  const hardwareProjects = projects.filter((p) => p.category === 'Hardware & Robotics');

  return (
    <DossierFrame
      terminalCode="ACCESSING BUILD_LOGS..."
      categoryLabel="PORTFOLIO INDEX"
      title="PROJECT ARCHIVE."
      subtitle="A collection of ideas, experiments, prototypes and solutions I've worked on across artificial intelligence, embedded robotics, and software architecture."
    >
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* 1. TWO HIGHLIGHT MAIN PROJECTS SECTION (Centrally Aligned) */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#161926] border border-[#F59E0B]/40 text-[#FBBF24] font-pixel text-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>FLAGSHIP ENGINEERING BUILDS</span>
            </div>
            <h2 className="text-3xl font-bold text-white font-display">
              Two Highlight Main Projects
            </h2>
            <p className="text-sm text-neutral-400 font-sans">
              Our two primary engineering breakthroughs bridging autonomous AI models with multi-actuator robotics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlightProjects.map((p, idx) => (
              <article
                key={p.slug}
                className="group relative rounded-2xl border-2 border-[#F59E0B]/50 bg-[#12141F] overflow-hidden transition-all duration-300 hover:border-[#FBBF24] shadow-2xl flex flex-col justify-between"
              >
                {/* Media Thumbnail */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900 border-b border-[#222638]">
                  <img
                    src={p.coverImage}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-95 group-hover:opacity-100"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-xs bg-[#F59E0B] text-black font-pixel text-[10px] font-bold shadow-md">
                    PRIMARY HIGHLIGHT 0{idx + 1}
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-xs bg-black/80 backdrop-blur-md text-white font-mono text-[10px]">
                    YEAR: {p.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <span className="font-pixel text-xs text-[#06B6D4] block">
                      CATEGORY // {p.category.toUpperCase()}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#FBBF24] transition-colors font-display">
                      {p.name}
                    </h3>
                    <p className="text-xs font-mono text-[#F59E0B]">
                      "{p.tagline}"
                    </p>
                    <p className="text-sm text-neutral-300 leading-relaxed font-sans line-clamp-3">
                      {p.shortDescription}
                    </p>

                    {/* Key Metrics */}
                    {p.metrics && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                        {p.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="p-2 rounded-sm bg-[#161926] border border-[#232738]">
                            <span className="text-[9px] font-pixel text-neutral-400 block">{m.label}</span>
                            <span className="text-xs font-mono font-bold text-white">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tech Tags & CTA */}
                  <div className="pt-4 border-t border-[#1E2333] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {p.techTags.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-xs bg-[#161926] text-[10px] font-mono text-neutral-300">
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/projects/${p.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#F59E0B] text-black font-mono text-xs font-bold hover:bg-[#FBBF24] transition-colors shadow-sm"
                    >
                      <span>EXAMINE CASE STUDY</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 2. DEVELOPMENT SECTION */}
        <section className="space-y-6 pt-10 border-t border-[#1A1D2B]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-sm bg-[#161926] border border-[#262A38] text-[#06B6D4]">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white font-display">Development</h3>
              <p className="text-xs font-mono text-neutral-400">Software systems, web operating interfaces, and high-performance apps.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>

        {/* 3. RESEARCH SECTION */}
        <section className="space-y-6 pt-10 border-t border-[#1A1D2B]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-sm bg-[#161926] border border-[#262A38] text-[#8B5CF6]">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white font-display">Research</h3>
              <p className="text-xs font-mono text-neutral-400">Computer vision algorithms, neural anomaly detection, and signal analysis.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>

        {/* 4. DESIGN SECTION */}
        <section className="space-y-6 pt-10 border-t border-[#1A1D2B]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-sm bg-[#161926] border border-[#262A38] text-[#EC4899]">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white font-display">Design</h3>
              <p className="text-xs font-mono text-neutral-400">UI/UX design systems, typography hierarchies, and tactile digital aesthetics.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>

        {/* 5. HARDWARE & ROBOTICS SECTION */}
        <section className="space-y-6 pt-10 border-t border-[#1A1D2B]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-sm bg-[#161926] border border-[#262A38] text-[#F59E0B]">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white font-display">Hardware & Robotics</h3>
              <p className="text-xs font-mono text-neutral-400">ESP32 FreeRTOS microcontrollers, 18-DOF walker kinetics, and IoT sensor mesh.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hardwareProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>

      </div>
    </DossierFrame>
  );
};

// Reusable Centrally Aligned Project Card
function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group p-5 rounded-xl border border-[#222638] bg-[#12141F] hover:border-[#F59E0B]/60 transition-all shadow-lg flex flex-col justify-between">
      <div className="space-y-3">
        <div className="aspect-[16/9] w-full rounded-lg overflow-hidden bg-neutral-900 border border-[#1E2333]">
          <img
            src={project.coverImage}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          />
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono">
          <span className="text-[#F59E0B] font-bold">{project.year}</span>
          <span className="text-neutral-400 uppercase">{project.category}</span>
        </div>

        <h4 className="text-lg font-bold text-white group-hover:text-[#FBBF24] transition-colors font-display">
          {project.name}
        </h4>

        <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
          {project.shortDescription}
        </p>
      </div>

      <div className="pt-4 border-t border-[#1E2333] flex items-center justify-between mt-4">
        <div className="flex flex-wrap gap-1">
          {project.techTags.slice(0, 2).map((t) => (
            <span key={t} className="px-1.5 py-0.5 rounded-xs bg-[#161926] text-[9px] font-mono text-neutral-300">
              {t}
            </span>
          ))}
        </div>

        <Link
          to={`/projects/${project.slug}`}
          className="text-xs font-mono font-bold text-[#F59E0B] hover:text-white flex items-center gap-1"
        >
          <span>CASE STUDY</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
