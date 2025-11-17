"use client";

import Link from "next/link";
import Parser from "html-react-parser";
import { PaginationButtons } from "./PaginationButtons";
import { useTheme } from "next-themes";

interface SearchItem {
  title: string;
  link: string;
  formattedUrl: string;
  htmlSnippet: string;
}

interface ResultsProps {
  searchInformation: {
    formattedTotalResults: string;
    formattedSearchTime: string;
  };
  items: SearchItem[];
}

function WebSearchResult({ results }: { results: ResultsProps }) {
  const { resolvedTheme } = useTheme();

  const titleText =
    resolvedTheme === "dark" ? "text-blue-300" : "text-blue-700";
  const snippetText =
    resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600";
  const textDecoration =
    resolvedTheme === "dark" ? "decoration-blue-300" : "decoration-blue-700";

  return (
    <div className="w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className={`${snippetText} text-sm mb-5 mt-3`}>
        About {results.searchInformation?.formattedTotalResults} results{" "}
        {results.searchInformation?.formattedSearchTime} seconds
      </p>
      {results.items.map((result) => (
        <div className="mb-8 max-w-xl" key={result.link}>
          <div className="group flex flex-col">
            <Link className="text-sm truncate" href={result?.link}>
              {result.formattedUrl}
            </Link>
            <Link
              className={`group-hover:underline ${textDecoration} text-xl truncate font-medium ${titleText}`}
              href={result?.link}
            >
              {result.title}
            </Link>
            <p className={`${snippetText}`}>{Parser(result.htmlSnippet)}</p>
          </div>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}

export { WebSearchResult };
