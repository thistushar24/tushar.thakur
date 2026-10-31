import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Download, Sparkles, Terminal, Cpu, Layers, ExternalLink, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_DATA } from '../data/portfolioData';
import { RootSystem } from '../components/RootSystem';

export const HomePage: React.FC = () => {
  const scrollToRoots = () => {
    const rootElem = document.getElementById('root-system-section');
    if (rootElem) {
      rootElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Top 2 Flagship Projects for Instant Credibility on Page 1
  const featuredProjects = PROJECTS_DATA.slice(0, 2);

  return (
    <div className="min-h-screen bg-[#090A0F] text-[#E5E7EB] selection:bg-[#F59E0B]/30 selection:text-[#FDE68A] overflow-x-hidden">
      {/* 1. HERO SECTION: Side-by-Side (Text on Left, Photo on Right) */}
      <section className="relative pt-12 sm:pt-20 pb-16 md:pb-24 pixel-grid border-b border-[#1A1D2B]">
        {/* Subtle Ambient Golden Glows */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#F59E0B]/12 via-[#06B6D4]/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* LEFT COLUMN: Clean Typography, Tagline, Bio & Action Buttons */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#F59E0B]/40 bg-[#131622] text-[#FBBF24] font-mono text-xs tracking-wider uppercase shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] shadow-[0_0_8px_#F59E0B] animate-pulse" />
                <span>LEVEL 05 // AI & DATA SCIENCE • VIT PUNE</span>
              </div>

              {/* Headline Typography */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-display leading-[1.05]">
                  Tushar Thakur
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight font-display text-neutral-200">
                  Curious since day one.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#06B6D4]">
                    Building what's next.
                  </span>
                </p>
              </div>

              {/* Bio Summary */}
              <p className="text-sm sm:text-base text-neutral-400 font-sans max-w-xl leading-relaxed">
                Computer Engineer & AI researcher at Vishwakarma Institute of Technology, Pune. Building autonomous computer vision systems, bio-inspired robotics, and high-performance digital tools.
              </p>

              {/* Telemetry Chips */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-mono text-neutral-300">
                <span className="px-3 py-1 rounded-sm bg-[#12141F] border border-[#232738] flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>Edge AI & Vision</span>
                </span>
                <span className="px-3 py-1 rounded-sm bg-[#12141F] border border-[#232738] flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#06B6D4]" />
                  <span>18-DOF Robotics</span>
                </span>
                <span className="px-3 py-1 rounded-sm bg-[#12141F] border border-[#232738] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Software Systems</span>
                </span>
              </div>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-4">
                {/* 1. Resume Download Button */}
                <a
                  href="/Tushar_Thakur_Resume.pdf"
                  download="Tushar_Thakur_Resume.pdf"
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#F59E0B] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#FBBF24] transition-all duration-200 shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] active:scale-[0.98]"
                >
                  <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  <span>DOWNLOAD RESUME</span>
                  <span className="px-1.5 py-0.5 rounded-xs bg-black/15 text-[10px] font-pixel">PDF</span>
                </a>

                {/* 2. Explore Journey (Scrolls down to the 6 Branches) */}
                <button
                  onClick={scrollToRoots}
                  className="group inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-[#141724] hover:bg-[#1B1F30] text-white border border-[#262B3D] hover:border-[#F59E0B]/60 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200"
                >
                  <span>EXPLORE BRANCHES</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[#F59E0B] group-hover:translate-y-0.5 transition-transform" />
                </button>

                {/* 3. View Projects Link */}
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-1.5 px-5 py-3.5 rounded-lg bg-[#141724] hover:bg-[#1B1F30] text-neutral-300 hover:text-white border border-[#262B3D] hover:border-[#06B6D4]/60 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200"
                >
                  <span>ALL PROJECTS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#06B6D4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: Photo beside text, properly centered and framed */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group max-w-sm w-full">
                {/* Ambient Golden / Cyan Back-Glow */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#F59E0B]/20 via-[#06B6D4]/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-80" />

                {/* Photo Frame Container */}
                <div className="relative rounded-2xl overflow-hidden border border-[#282E42] group-hover:border-[#F59E0B]/60 bg-[#12141F] shadow-2xl transition-all">
                  <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-900">
                    <img
                      src="/tushar-thakur.jpg"
                      alt="Tushar Thakur"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Metadata Tag at bottom of photo */}
                  <div className="p-3.5 bg-[#0E1018]/95 backdrop-blur-md border-t border-[#222738] flex items-center justify-between">
                    <div>
                      <span className="font-display font-bold text-white text-sm block">Tushar Thakur</span>
                      <span className="font-mono text-[10px] text-[#F59E0B]">AI & Robotics • VIT Pune</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981] animate-pulse" />
                      <span>ONLINE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FEATURED ENGINEERING BUILDS PREVIEW (Instant proof of work on page 1) */}
      <section className="py-16 md:py-20 border-b border-[#1A1D2B] bg-[#0C0D14]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono text-[#06B6D4] uppercase tracking-widest block font-medium mb-1">
                KEY HIGHLIGHTS // BUILD SPEC
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Featured Engineering Systems
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F59E0B] hover:text-[#FBBF24] transition-colors self-start sm:self-auto"
            >
              <span>VIEW ALL 6 CASE STUDIES</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((p, idx) => (
              <div
                key={p.slug}
                className="group p-6 rounded-2xl border border-[#222638] bg-[#12141F] hover:border-[#F59E0B]/60 transition-all shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-neutral-900 border border-[#222638]">
                    <img
                      src={p.coverImage}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#F59E0B] font-bold">BUILD_0{idx + 1}</span>
                    <span className="text-neutral-400">{p.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#FBBF24] transition-colors font-display">
                    {p.name}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed font-sans line-clamp-2">
                    {p.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1E2333] flex items-center justify-between mt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {p.techTags.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-xs bg-[#161926] text-[10px] font-mono text-neutral-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/projects/${p.slug}`}
                    className="text-xs font-mono font-bold text-[#F59E0B] hover:text-white flex items-center gap-1"
                  >
                    <span>CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE ROOT SYSTEM (Fully Responsive, Zero Clipping, All 6 Branches Visible) */}
      <section id="root-system-section" className="relative scroll-mt-8 bg-[#090A0F]">
        <RootSystem />
      </section>

      {/* 4. DIRECT RESUME DOWNLOAD CALLOUT BANNER */}
      <section className="py-16 border-t border-[#1A1D2B] bg-[#0E1018]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#161926] border border-[#2D3346] text-[#FBBF24] font-pixel text-xs">
            <span>OFFICIAL CURRICULUM VITAE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
            Looking for Complete Credentials?
          </h2>

          <p className="text-sm text-neutral-400 max-w-xl mx-auto font-sans leading-relaxed">
            Download my verified technical resume summarizing academic coursework at VIT Pune, AI research, robotics builds, and institutional leadership.
          </p>

          <div className="pt-2">
            <a
              href="/Tushar_Thakur_Resume.pdf"
              download="Tushar_Thakur_Resume.pdf"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg bg-[#F59E0B] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#FBBF24] transition-all shadow-[0_0_25px_rgba(245,158,11,0.4)]"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD TUSHAR_THAKUR_RESUME.PDF</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
