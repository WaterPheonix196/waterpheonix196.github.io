"use client";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-cyan-400/20 rounded-full"></div>
        <div className="absolute top-0 left-0 w-20 h-20 border-4 border-cyan-400 rounded-full border-t-transparent animate-spin"></div>
        <div className="absolute -inset-4">
          <div className="w-28 h-28 border-2 border-green-400/10 rounded-full animate-ping"></div>
        </div>
      </div>
    </div>
  );
}