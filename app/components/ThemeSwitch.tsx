"use client";

import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();

  if (!resolvedTheme) return null;

  return (
    <div>
      {resolvedTheme === "dark" ? (
        <MdLightMode
          className="text-gray-400 text-xl"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MdDarkMode
          className="text-gray-800 text-xl"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}

export { ThemeSwitch };
