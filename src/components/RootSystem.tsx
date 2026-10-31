import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowUpRight,
  History,
  FolderGit2,
  Compass,
  Cpu,
  Sparkles,
  MessageSquare,
  ChevronRight,
  Activity,
  Terminal
} from 'lucide-react';

interface BranchItem {
  number: string;
  id: string;
  name: string;
  path: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  telemetry: {
    spec: string;
    metrics: string;
    status: string;
  };
  icon: React.ElementType;
  color: string;
  glowColor: string;
}

export const RootSystem: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const branches: BranchItem[] = [
    {
      number: "01",
      id: "story",
      name: "My Story",
      path: "/about",
      category: "Personal History",
      tagline: "Curiosity before the alphabet.",
      description: "From early childhood silicon fascinations in Nepal to Blogger experiments in school and pursuing AI & Data Science at VIT Pune.",
      highlights: ["Origin: Nepal", "Blogger & HTML (Class 6-7)", "Da Vinci & Bill Gates", "VIT Pune AI & DS"],
      telemetry: {
        spec: "CHRONICLE // 5 LEVELS",
        metrics: "NEPAL → PUNE, IN",
        status: "ORIGIN_SEED VERIFIED",
      },
      icon: History,
      color: "#F59E0B", // Golden Amber
      glowColor: "rgba(245, 158, 11, 0.4)",
    },
    {
      number: "02",
      id: "projects",
      name: "Project Archive",
      path: "/projects",
      category: "Selected Builds",
      tagline: "Ideas transformed into running code & silicon.",
      description: "Deep technical case studies: edge computer vision under 18ms latency, 18-DOF hexapod inverse kinematics, and spatial web systems.",
      highlights: ["Synapse Vision AI (YOLO/TensorRT)", "Aegis Hexapod 18-DOF (ESP32/IK)", "Aether OS", "NeuroAcoustic Analyzer"],
      telemetry: {
        spec: "BUILD_LOGS // 6 SYSTEMS",
        metrics: "60 FPS • 18 SERVOS",
        status: "ACTIVE INFERENCE",
      },
      icon: FolderGit2,
      color: "#06B6D4", // Neon Cyan
      glowColor: "rgba(6, 182, 212, 0.4)",
    },
    {
      number: "03",
      id: "experience",
      name: "Experience Log",
      path: "/experience",
      category: "Leadership & R&D",
      tagline: "Operational governance & institutional impact.",
      description: "Directing public relations and design coordination at I2IAOC, serving as Secretary of The Ideators Club, and hardware R&D with The Robotics Forum.",
      highlights: ["I2IAOC Public Relations Officer", "The Ideators Club Secretary", "The Robotics Forum R&D", "Faceify Labs"],
      telemetry: {
        spec: "OPERATIONAL // 5 ROLES",
        metrics: "3,500+ ATTENDEES",
        status: "COUNCIL LEADERSHIP",
      },
      icon: Compass,
      color: "#10B981", // Emerald Green
      glowColor: "rgba(16, 185, 129, 0.4)",
    },
    {
      number: "04",
      id: "skills",
      name: "Technology & Skills",
      path: "/skills",
      category: "Technical Stack",
      tagline: "Rigor over percentage bars.",
      description: "Hands-on mastery across Python, C/C++, PyTorch, OpenCV, FreeRTOS ESP32 embedded systems, Autodesk Fusion 360, and modern React architectures.",
      highlights: ["Python & PyTorch AI", "ESP32 & Embedded C++", "Autodesk Fusion 360", "React & Modern Web"],
      telemetry: {
        spec: "REPERTOIRE // 5 CLUSTERS",
        metrics: "PYTORCH • C++ • ESP32",
        status: "HIGH THROUGHPUT",
      },
      icon: Cpu,
      color: "#8B5CF6", // Electric Violet
      glowColor: "rgba(139, 92, 246, 0.4)",
    },
    {
      number: "05",
      id: "explorations",
      name: "Beyond Technology",
      path: "/explorations",
      category: "Lateral Frontiers",
      tagline: "Connecting engineering, art, and venture creation.",
      description: "Product thinking, startup economics, tactile UI aesthetics, and the polymathic Da Vinci philosophy uniting fine art and engineering.",
      highlights: ["Product-Market Thinking", "Startup Ecosystems", "Visual Storytelling", "Polymathic Synthesis"],
      telemetry: {
        spec: "PHILOSOPHY // 5 DOMAINS",
        metrics: "DA VINCI SYNTHESIS",
        status: "EXPEDITION ACTIVE",
      },
      icon: Sparkles,
      color: "#EC4899", // Synthwave Pink
      glowColor: "rgba(236, 72, 153, 0.4)",
    },
    {
      number: "06",
      id: "contact",
      name: "Contact & Booking",
      path: "/contact",
      category: "Establish Connection",
      tagline: "Open to compelling collaborations.",
      description: "Direct encrypted transmission channel, synchronized Cal.com 30-minute calendar scheduling, and verified social coordinates.",
      highlights: ["Cal.com 30-min Meeting", "Google Calendar Invite", "Direct Email", "GitHub & LinkedIn"],
      telemetry: {
        spec: "COMM_CHANNEL // SYNC",
        metrics: "CAL.COM • DIRECT TLS",
        status: "ACCEPTING INQUIRIES",
      },
      icon: MessageSquare,
      color: "#EAB308", // Sunburst Gold
      glowColor: "rgba(234, 179, 8, 0.4)",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-20 select-none">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#161926] border border-[#2D3346] text-[#FBBF24] font-pixel text-xs tracking-wider">
          <span className="w-1.5 h-1.5 bg-[#F59E0B] shadow-[0_0_6px_#F59E0B] animate-pulse" />
          <span>THE ROOT SYSTEM // SIX DISCIPLINES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
          Six Branches. One Journey.
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
          Every branch represents a distinct sphere of exploration. Click any chapter to enter its dedicated dossier.
        </p>
      </div>

      {/* Symmetrical Alternating Timeline with Perfectly Aligned Telemetry Node Cards */}
      <div className="relative">
        {/* Continuous Central Bioluminescent Golden Spine */}
        <div className="absolute left-5 md:left-1/2 top-4 bottom-8 w-[3px] -translate-x-1/2 bg-gradient-to-b from-[#F59E0B] via-[#06B6D4] to-[#EAB308] shadow-[0_0_12px_rgba(245,158,11,0.6)] rounded-full" />

        <div className="space-y-12 md:space-y-16">
          {branches.map((b, idx) => {
            const isLeft = idx % 2 === 0;
            const isHovered = hoveredId === b.id;
            const Icon = b.icon;

            return (
              <div
                key={b.id}
                className="relative flex items-center justify-between"
                onMouseEnter={() => setHoveredId(b.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* 1. LEFT SIDE (Main Content Card on Odd, Telemetry Node on Even) */}
                <div className="w-full md:w-[calc(50%-48px)] md:mr-auto pl-12 md:pl-0">
                  {isLeft ? (
                    /* Main Chapter Card (Left) */
                    <div
                      onClick={() => navigate(b.path)}
                      className={`group/card p-6 sm:p-7 rounded-2xl border bg-[#12141F] transition-all duration-300 cursor-pointer shadow-xl relative overflow-hidden ${
                        isHovered ? 'scale-[1.015]' : 'border-[#222638] hover:border-[#353B4F]'
                      }`}
                      style={{
                        borderColor: isHovered ? b.color : undefined,
                        boxShadow: isHovered ? `0 0 25px ${b.glowColor}` : undefined,
                      }}
                    >
                      <div
                        className="absolute top-0 left-0 right-0 h-[2.5px] transition-opacity duration-300"
                        style={{
                          backgroundColor: b.color,
                          opacity: isHovered ? 1 : 0.7,
                          boxShadow: isHovered ? `0 0 10px ${b.color}` : undefined,
                        }}
                      />

                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span
                            className="font-pixel text-xs font-bold px-2 py-0.5 rounded-xs bg-[#171A28] border border-[#262A38]"
                            style={{ color: b.color }}
                          >
                            [{b.number}]
                          </span>
                          <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                            {b.category}
                          </span>
                        </div>

                        <div
                          className="p-1.5 rounded-md bg-[#161926] border border-[#252A3A] transition-colors"
                          style={{ color: b.color }}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="mb-2">
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover/card:text-[#FBBF24] transition-colors flex items-center justify-between">
                          <span>{b.name}</span>
                          <ArrowUpRight
                            className="w-4 h-4 transition-transform duration-300 group-hover/card:translate-x-1 group-hover/card:-translate-y-1"
                            style={{ color: b.color }}
                          />
                        </h3>
                        <p className="text-xs font-mono pt-0.5" style={{ color: b.color }}>
                          "{b.tagline}"
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed mb-4">
                        {b.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1E2333] mb-3">
                        {b.highlights.map((h, hIdx) => (
                          <span
                            key={hIdx}
                            className="px-2 py-0.5 rounded-xs bg-[#161926] border border-[#222736] text-[10px] font-mono text-neutral-300"
                          >
                            {h}
                          </span>
                        ))}
                      </div>

                      <div
                        className="flex items-center justify-between text-xs font-pixel pt-1"
                        style={{ color: b.color }}
                      >
                        <span className="flex items-center gap-1">
                          <span>OPEN CHAPTER [{b.number}]</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-[10px] font-mono text-neutral-500">{b.path}</span>
                      </div>
                    </div>
                  ) : (
                    /* Paired Telemetry Companion Box (Left) - Perfectly Aligned! */
                    <div
                      onClick={() => navigate(b.path)}
                      className="hidden md:flex flex-col justify-between p-6 rounded-2xl border border-[#222638] bg-[#0E1018] hover:border-[#353B4F] transition-all duration-300 cursor-pointer shadow-lg group/telemetry"
                      style={{
                        borderColor: isHovered ? b.color : undefined,
                        boxShadow: isHovered ? `0 0 16px ${b.glowColor}` : undefined,
                      }}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-pixel text-xs tracking-wider" style={{ color: b.color }}>
                            BRANCH_{b.number} // TELEMETRY
                          </span>
                          <span className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400">
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: b.color, boxShadow: `0 0 6px ${b.color}` }}
                            />
                            {b.telemetry.status}
                          </span>
                        </div>

                        <div className="p-3 rounded-lg bg-[#141724] border border-[#202538] space-y-1">
                          <div className="text-[10px] font-pixel text-neutral-500 uppercase">{b.telemetry.spec}</div>
                          <div className="text-xs font-mono font-bold text-white">{b.telemetry.metrics}</div>
                        </div>

                        <p className="text-xs text-neutral-400 font-sans">
                          Direct subsystem route for <span className="text-white font-medium">{b.name}</span>.
                        </p>
                      </div>

                      <div
                        className="pt-4 border-t border-[#1C2030] flex items-center justify-between text-xs font-pixel"
                        style={{ color: b.color }}
                      >
                        <span>QUICK INSPECT</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/telemetry:translate-x-0.5 group-hover/telemetry:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. LEFT HORIZONTAL BRANCH CONNECTOR LINE */}
                <div
                  className="hidden md:block absolute right-1/2 h-[2px] transition-all duration-300 pointer-events-none"
                  style={{
                    left: 'calc(50% - 48px)',
                    width: '48px',
                    backgroundColor: b.color,
                    boxShadow: isHovered ? `0 0 10px ${b.color}` : undefined,
                    opacity: isHovered ? 1 : 0.6,
                  }}
                />

                {/* 3. CENTRAL MILESTONE BADGE (Dead-Center on the Golden Spine) */}
                <div className="absolute left-5 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div
                    className="w-10 h-10 rounded-full bg-[#0B0C10] border-2 flex items-center justify-center transition-all duration-300 shadow-xl"
                    style={{
                      borderColor: b.color,
                      boxShadow: isHovered ? `0 0 18px ${b.color}` : `0 0 8px ${b.color}55`,
                      transform: isHovered ? 'scale(1.18)' : 'scale(1)',
                    }}
                  >
                    <span className="font-pixel text-[11px] font-bold" style={{ color: b.color }}>
                      {b.number}
                    </span>
                  </div>
                </div>

                {/* 4. RIGHT HORIZONTAL BRANCH CONNECTOR LINE */}
                <div
                  className="hidden md:block absolute left-1/2 h-[2px] transition-all duration-300 pointer-events-none"
                  style={{
                    width: '48px',
                    backgroundColor: b.color,
                    boxShadow: isHovered ? `0 0 10px ${b.color}` : undefined,
                    opacity: isHovered ? 1 : 0.6,
                  }}
                />

                {/* 5. RIGHT SIDE (Telemetry on Odd, Main Card on Even) */}
                <div className="hidden md:block md:w-[calc(50%-48px)] md:ml-auto">
                  {!isLeft ? (
                    /* Main Chapter Card (Right) */
                    <div
                      onClick={() => navigate(b.path)}
                      className={`group/card p-6 sm:p-7 rounded-2xl border bg-[#12141F] transition-all duration-300 cursor-pointer shadow-xl relative overflow-hidden ${
                        isHovered ? 'scale-[1.015]' : 'border-[#222638] hover:border-[#353B4F]'
                      }`}
                      style={{
                        borderColor: isHovered ? b.color : undefined,
                        boxShadow: isHovered ? `0 0 25px ${b.glowColor}` : undefined,
                      }}
                    >
                      <div
                        className="absolute top-0 left-0 right-0 h-[2.5px] transition-opacity duration-300"
                        style={{
                          backgroundColor: b.color,
                          opacity: isHovered ? 1 : 0.7,
                          boxShadow: isHovered ? `0 0 10px ${b.color}` : undefined,
                        }}
                      />

                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span
                            className="font-pixel text-xs font-bold px-2 py-0.5 rounded-xs bg-[#171A28] border border-[#262A38]"
                            style={{ color: b.color }}
                          >
                            [{b.number}]
                          </span>
                          <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                            {b.category}
                          </span>
                        </div>

                        <div
                          className="p-1.5 rounded-md bg-[#161926] border border-[#252A3A] transition-colors"
                          style={{ color: b.color }}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="mb-2">
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover/card:text-[#FBBF24] transition-colors flex items-center justify-between">
                          <span>{b.name}</span>
                          <ArrowUpRight
                            className="w-4 h-4 transition-transform duration-300 group-hover/card:translate-x-1 group-hover/card:-translate-y-1"
                            style={{ color: b.color }}
                          />
                        </h3>
                        <p className="text-xs font-mono pt-0.5" style={{ color: b.color }}>
                          "{b.tagline}"
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed mb-4">
                        {b.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1E2333] mb-3">
                        {b.highlights.map((h, hIdx) => (
                          <span
                            key={hIdx}
                            className="px-2 py-0.5 rounded-xs bg-[#161926] border border-[#222736] text-[10px] font-mono text-neutral-300"
                          >
                            {h}
                          </span>
                        ))}
                      </div>

                      <div
                        className="flex items-center justify-between text-xs font-pixel pt-1"
                        style={{ color: b.color }}
                      >
                        <span className="flex items-center gap-1">
                          <span>OPEN CHAPTER [{b.number}]</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-[10px] font-mono text-neutral-500">{b.path}</span>
                      </div>
                    </div>
                  ) : (
                    /* Paired Telemetry Companion Box (Right) - Perfectly Aligned! */
                    <div
                      onClick={() => navigate(b.path)}
                      className="hidden md:flex flex-col justify-between p-6 rounded-2xl border border-[#222638] bg-[#0E1018] hover:border-[#353B4F] transition-all duration-300 cursor-pointer shadow-lg group/telemetry"
                      style={{
                        borderColor: isHovered ? b.color : undefined,
                        boxShadow: isHovered ? `0 0 16px ${b.glowColor}` : undefined,
                      }}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-pixel text-xs tracking-wider" style={{ color: b.color }}>
                            BRANCH_{b.number} // TELEMETRY
                          </span>
                          <span className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400">
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: b.color, boxShadow: `0 0 6px ${b.color}` }}
                            />
                            {b.telemetry.status}
                          </span>
                        </div>

                        <div className="p-3 rounded-lg bg-[#141724] border border-[#202538] space-y-1">
                          <div className="text-[10px] font-pixel text-neutral-500 uppercase">{b.telemetry.spec}</div>
                          <div className="text-xs font-mono font-bold text-white">{b.telemetry.metrics}</div>
                        </div>

                        <p className="text-xs text-neutral-400 font-sans">
                          Direct subsystem route for <span className="text-white font-medium">{b.name}</span>.
                        </p>
                      </div>

                      <div
                        className="pt-4 border-t border-[#1C2030] flex items-center justify-between text-xs font-pixel"
                        style={{ color: b.color }}
                      >
                        <span>QUICK INSPECT</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/telemetry:translate-x-0.5 group-hover/telemetry:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
