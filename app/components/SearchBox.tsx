"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { IoMdMic } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

function SearchBox() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query");
  const router = useRouter();
  const [query, setQuery] = useState(searchQuery || "");
  const { resolvedTheme } = useTheme();
  const text = resolvedTheme === "dark" ? "text-blue-300" : "text-blue-700";

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search/web?query=${query}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 grow max-w-3xl items-center"
    >
      <input
        type="text"
        placeholder="Search Google"
        className="w-full focus:outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <RxCross2
        className="text-gray-500 text-2xl cursor-pointer sm:mr-2"
        onClick={() => setQuery("")}
      />
      <IoMdMic
        className={`hidden sm:inline-flex ${text}  text-4xl pl-4 border-l-2 border-gray-300 mr-3 cursor-pointer`}
      />
      <AiOutlineSearch
        onClick={handleSubmit}
        className={`text-2xl hidden sm:inline-flex ${text} cursor-pointer`}
      />
    </form>
  );
}

export { SearchBox };
