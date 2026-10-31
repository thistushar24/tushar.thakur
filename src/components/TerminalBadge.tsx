import React from 'react';

interface TerminalBadgeProps {
  label: string;
  variant?: 'gold' | 'neutral' | 'subtle';
  pulse?: boolean;
  className?: string;
}

export const TerminalBadge: React.FC<TerminalBadgeProps> = ({
  label,
  variant = 'gold',
  pulse = false,
  className = '',
}) => {
  const getStyles = () => {
    switch (variant) {
      case 'gold':
        return 'border-[#C49A3A]/40 bg-[#FAF4E6] text-[#A67C25]';
      case 'neutral':
        return 'border-[#EAEAEA] bg-neutral-50 text-neutral-600';
      case 'subtle':
        return 'border-[#EAEAEA]/60 bg-white text-neutral-400';
    }
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono tracking-wider uppercase border rounded-sm transition-all duration-300 ${getStyles()} ${className}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          variant === 'gold' ? 'bg-[#C49A3A]' : 'bg-neutral-400'
        } ${pulse ? 'animate-pulse' : ''}`}
      />
      <span>{label}</span>
    </span>
  );
};
