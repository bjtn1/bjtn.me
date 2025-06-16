// src/components/AnimatedDivider.tsx
import React from "react";

const AnimatedDivider: React.FC = () => {
  return (
    <div className="relative h-px w-full my-12 overflow-hidden">
      {/* Static gradient background */}
      <div className="h-full w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      {/* Animated overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0"
        style={{
          animation: 'shimmer 2s infinite'
        }}
      />
      
      {/* Embedded styles */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedDivider;
