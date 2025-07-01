import React from "react";

const GamingFooter = () => {
  return (
    <footer className="w-full bg-black text-center py-4 px-2 text-sm text-amber-100 tracking-widest shadow-inner border-t border-amber-800 font-[Quicksand]">
      © {new Date().getFullYear()} <span className="text-amber-400 font-bold"><a href="https://github.com/diptiprasadsarangi01"> RetroRiot</a></span> ⚡ Level Up. Game On.
    </footer>
  );
};

export default GamingFooter;