"use client";

import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdMic } from "react-icons/io";
import { useRouter } from "next/navigation";
import Image from "next/image";

function HomeSearch() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?query=${input}`);
  };

  const randomSearch = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://random-word-api.vercel.app/api?words=1");
      const data = await res.json();

      if (!res.ok) return;
      const word = data[0];
      if (!word) return;

      router.push(`/search/web?query=${word}`);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl items-center"
      >
        <AiOutlineSearch className="text-gray-500 text-xl mr-3" />
        <input
          type="text"
          className="grow focus:outline-none"
          placeholder="Search..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <IoMdMic className="text-gray-500 text-xl ml-3" />
      </form>
      <div className="flex flex-col sm:space-y-0 space-y-2 sm:flex-row sm:space-x-4 mt-8 justify-center">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          disabled={loading}
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity-80"
        >
          {loading ? (
            <Image
              width={50}
              height={50}
              src="spinner.svg"
              alt="loading spinner"
              className="text-center h-5"
              style={{ height: "50", width: "auto" }}
            />
          ) : (
            "I'm Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}

export { HomeSearch };
