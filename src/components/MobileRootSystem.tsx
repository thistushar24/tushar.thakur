import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, History, FolderGit2, Compass, Cpu, Sparkles, MessageSquare } from 'lucide-react';

interface MobileBranch {
  id: string;
  number: string;
  name: string;
  path: string;
  category: string;
  description: string;
  icon: React.ElementType;
  pixelColor: string;
}

export const MobileRootSystem: React.FC = () => {
  const navigate = useNavigate();

  const branches: MobileBranch[] = [
    {
      id: "story",
      number: "01",
      name: "My Story",
      path: "/about",
      category: "Personal History",
      description: "From early childhood curiosities in Nepal to AI engineering at VIT Pune.",
      icon: History,
      pixelColor: "#F59E0B",
    },
    {
      id: "projects",
      number: "02",
      name: "Project Archive",
      path: "/projects",
      category: "Selected Builds",
      description: "Edge computer vision, 18-DOF robotics, and web operating interfaces.",
      icon: FolderGit2,
      pixelColor: "#06B6D4",
    },
    {
      id: "experience",
      number: "03",
      name: "Experience Log",
      path: "/experience",
      category: "Leadership & R&D",
      description: "Institutional leadership, club directorship, and robotics forum engineering.",
      icon: Compass,
      pixelColor: "#10B981",
    },
    {
      id: "skills",
      number: "04",
      name: "Technology & Skills",
      path: "/skills",
      category: "Technical Stack",
      description: "AI pipelines, embedded systems, PyTorch, ESP32, and spatial interface design.",
      icon: Cpu,
      pixelColor: "#8B5CF6",
    },
    {
      id: "explorations",
      number: "05",
      name: "Beyond Technology",
      path: "/explorations",
      category: "Lateral Frontiers",
      description: "Product thinking, startup ecosystems, creative philosophy, and polymathic synthesis.",
      icon: Sparkles,
      pixelColor: "#EC4899",
    },
    {
      id: "contact",
      number: "06",
      name: "Contact & Booking",
      path: "/contact",
      category: "Transmission Node",
      description: "Direct transmission channel, Cal.com calendar scheduling, and dialogues.",
      icon: MessageSquare,
      pixelColor: "#EAB308",
    },
  ];

  return (
    <div className="w-full py-16 px-4 select-none bg-[#0B0C10]">
      {/* Mobile Pixel Header */}
      <div className="text-center mb-10 space-y-2">
        <span className="text-[11px] font-pixel text-[#F59E0B] uppercase tracking-widest block font-medium">
          [●] CHOOSE CHAPTER
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-white font-display">
          Six Branches
        </h2>
        <p className="text-xs text-neutral-400 font-sans max-w-xs mx-auto">
          Tap any destination below to navigate into each chapter.
        </p>
      </div>

      {/* Vertical Spine with Dark Pixel Cards */}
      <div className="relative pl-6 max-w-md mx-auto">
        {/* Bioluminescent Golden Taproot Line */}
        <div className="absolute left-[11px] top-2 bottom-6 w-[2.5px] bg-gradient-to-b from-[#D97706] via-[#F59E0B] to-[#FDE68A] shadow-[0_0_10px_#F59E0B] rounded-full" />

        <div className="space-y-4">
          {branches.map((b) => {
            const Icon = b.icon;

            return (
              <div
                key={b.id}
                className="relative group cursor-pointer"
                onClick={() => navigate(b.path)}
              >
                {/* Node Pin on Spine */}
                <div
                  className="absolute -left-[23px] top-5 w-5 h-5 rounded-full bg-[#0E1018] border-2 flex items-center justify-center shadow-md"
                  style={{ borderColor: b.pixelColor }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: b.pixelColor, boxShadow: `0 0 6px ${b.pixelColor}` }}
                  />
                </div>

                {/* Dark Pixel Card */}
                <div
                  className="p-4 rounded-lg border bg-[#12141F] shadow-md hover:border-[#F59E0B]/60 active:scale-[0.98] transition-all"
                  style={{ borderColor: '#232738' }}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-pixel text-[10px] font-semibold" style={{ color: b.pixelColor }}>
                      [{b.number}] {b.category}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
                  </div>

                  <div className="flex items-center gap-2 mb-1.5">
                    <div
                      className="p-1 rounded bg-[#1A1D2C] border border-[#2D3346]"
                      style={{ color: b.pixelColor }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="font-display text-base font-bold text-white">
                      {b.name}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
