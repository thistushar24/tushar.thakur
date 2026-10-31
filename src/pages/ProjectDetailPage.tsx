import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Compass,
  Code2,
  Sparkles,
  Download
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { GithubIcon } from '../components/SocialIcons';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const currentIndex = PROJECTS_DATA.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];
  const { caseStudy } = project;

  return (
    <div className="min-h-screen bg-[#0B0C10] text-[#E5E7EB]">
      {/* Dark Editorial Header Bar */}
      <section className="border-b border-[#1E2333] bg-[#0E1018] pixel-grid py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-[#F59E0B] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>RETURN TO PROJECT ARCHIVE</span>
            </Link>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-xs bg-[#161926] border border-[#F59E0B]/40 text-[#FBBF24] font-pixel text-[10px]">
                BUILD // {project.category.toUpperCase()}
              </span>
              <span className="font-mono text-xs text-neutral-400">YEAR: {project.year}</span>
            </div>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-display">
              {project.name}
            </h1>
            <p className="text-lg sm:text-xl font-mono text-[#FBBF24] font-medium">
              "{project.tagline}"
            </p>
            <p className="text-base text-neutral-400 leading-relaxed pt-2">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              {caseStudy.githubUrl && (
                <a
                  href={caseStudy.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#1A1D2C] border border-[#2D3346] text-white font-mono text-xs font-semibold hover:border-[#06B6D4] hover:text-[#06B6D4] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>VIEW REPOSITORY</span>
                </a>
              )}
              {caseStudy.liveUrl && (
                <a
                  href={caseStudy.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#F59E0B] text-black font-mono text-xs font-bold hover:bg-[#FBBF24] transition-colors shadow-[0_0_15px_rgba(245,158,11,0.35)]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>LIVE DEMONSTRATION</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Case Study Body */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
        <div className="space-y-6">
          <div className="relative aspect-[21/9] w-full rounded-xl overflow-hidden border border-[#232738] shadow-2xl bg-neutral-900">
            <img
              src={project.coverImage}
              alt={project.name}
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          {project.metrics && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-[#12141F] border border-[#222638]">
                  <span className="font-pixel text-[9px] text-[#06B6D4] block uppercase">{m.label}</span>
                  <span className="font-mono text-xl font-bold text-white">{m.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 01. Overview */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 font-pixel text-xs text-[#F59E0B] uppercase tracking-wider">
            <span>[01 // CASE BRIEF]</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Project Overview
          </h2>
          <p className="text-neutral-300 leading-relaxed font-sans text-base">
            {caseStudy.overview}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.techTags.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-sm bg-[#161926] border border-[#2D3346] text-neutral-300 font-mono text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* 02 & 03. The Idea & Problem */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 sm:p-8 rounded-xl border border-[#222638] bg-[#12141F] space-y-4">
            <div className="flex items-center gap-2 font-pixel text-xs text-[#06B6D4] uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-[#06B6D4]" />
              <span>02 // THE GENESIS IDEA</span>
            </div>
            <h3 className="text-xl font-bold text-white font-display">Core Hypothesis</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {caseStudy.theIdea}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-xl border border-[#222638] bg-[#12141F] space-y-4">
            <div className="flex items-center gap-2 font-pixel text-xs text-rose-400 uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <span>03 // THE PROBLEM</span>
            </div>
            <h3 className="text-xl font-bold text-white font-display">Technical Friction</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {caseStudy.theProblem}
            </p>
          </div>
        </section>

        {/* 04. Approach */}
        <section className="p-8 rounded-xl border border-[#F59E0B]/40 bg-[#161926] space-y-4 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
          <div className="flex items-center gap-2 font-pixel text-xs text-[#FBBF24] uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#F59E0B]" />
            <span>04 // STRATEGIC METHODOLOGY</span>
          </div>
          <h2 className="text-2xl font-bold text-white font-display">My Engineering Approach</h2>
          <p className="text-neutral-300 leading-relaxed text-base">
            {caseStudy.myApproach}
          </p>
        </section>

        {/* 05. Architecture */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 font-pixel text-xs text-[#06B6D4] uppercase tracking-wider">
            <Layers className="w-4 h-4 text-[#06B6D4]" />
            <span>05 // ARCHITECTURAL BLUEPRINT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            System Architecture
          </h2>
          <div className="p-4 rounded-md bg-[#08090D] text-neutral-300 font-mono text-xs leading-relaxed border border-[#202536]">
            <div className="text-[#F59E0B] font-bold pb-2 border-b border-[#202536] mb-2 font-pixel text-[11px]">
              DATAFLOW_TOPOLOGY_SUMMARY:
            </div>
            {caseStudy.systemArchitecture.diagramSummary}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {caseStudy.systemArchitecture.layers.map((layer, lIdx) => (
              <div key={lIdx} className="p-5 rounded-lg border border-[#222638] bg-[#12141F] space-y-2">
                <span className="font-pixel text-[9px] text-[#06B6D4] block">
                  LAYER 0{lIdx + 1}
                </span>
                <h4 className="font-display font-bold text-base text-white">{layer.name}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{layer.description}</p>
                <div className="pt-2 font-mono text-[10px] text-[#F59E0B] border-t border-[#1E2333]">
                  {layer.tech}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Next Project Switcher */}
        <div className="pt-12 border-t border-[#1E2333] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/projects"
            className="text-xs font-mono text-neutral-400 hover:text-white transition-colors"
          >
            ← BACK TO FULL ARCHIVE
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="group inline-flex items-center gap-3 p-4 rounded-lg border border-[#2D3346] hover:border-[#F59E0B] bg-[#141724] hover:bg-[#1A1D2E] transition-all"
          >
            <div className="text-right">
              <span className="font-pixel text-[9px] text-[#FBBF24] block">NEXT CASE STUDY</span>
              <span className="font-display font-bold text-sm text-white">{nextProject.name}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#F59E0B] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </main>
    </div>
  );
};
