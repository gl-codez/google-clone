"use client";

import { Suspense } from "react";
import { CountryLookup } from "./CountryLookup";
import { useTheme } from "next-themes";

function Footer() {
  const { resolvedTheme } = useTheme();
  const bgColor = resolvedTheme === "dark" ? "bg-[#121212]" : "bg-[#f2f2f2]";
  const textColor =
    resolvedTheme === "dark" ? "text-gray-300" : "text-gray-400";

  if (!resolvedTheme) return null;
  return (
    <footer
      className={`absolute bottom-0 text-sm ${textColor} ${bgColor} w-full`}
    >
      <div className="border-b px-8 py-3">
        <Suspense fallback={<p>Loading...</p>}>
          <CountryLookup />
        </Suspense>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
        <ul className="flex items-center space-x-6">
          <li className="link">About</li>
          <li className="link">Advertising</li>
          <li className="link">Business</li>
          <li className="link">How Search works</li>
        </ul>
        <ul className="flex items-center space-x-6">
          <li className="link">Privacy</li>
          <li className="link">Terms</li>
          <li className="link">Settings</li>
        </ul>
      </div>
    </footer>
  );
}

export { Footer };

// About https://about.google/?utm_source=google-NG&utm_medium=referral&utm_campaign=hp-footer&fg=1
// How search. https://www.google.com/search/howsearchworks/?fg=1
//Business https://business.google.com/en-all/business-profile/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
// Advert https://business.google.com/en-all/google-ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
//Privacy https://policies.google.com/privacy?hl=en-NG&fg=1
// Terms https://policies.google.com/terms?hl=en-NG&fg=1
