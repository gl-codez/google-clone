"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/set-state-in-effect
  }, []);

  if (!mounted) return null;

  return (
    <div className="">
      {resolvedTheme === "dark" ? (
        <MdLightMode
          className="text-gray-400 text-4xl dark:hover:bg-gray-700/50 p-2 rounded-full cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MdDarkMode
          className="text-gray-800 text-4xl p-2 hover:bg-gray-200 rounded-full cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}

export { ThemeSwitch };
