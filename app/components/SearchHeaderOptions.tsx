"use client";

import { useTheme } from "next-themes";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";

function SearchHeaderOptions() {
  const pathname = usePathname();
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query");

  const selectTab = (tab: string) => {
    router.push(
      `/search/${tab === "Images" ? "image" : "web"}?query=${searchQuery}`
    );
  };
  const activeTextClass =
    resolvedTheme === "dark"
      ? "text-blue-300! border-blue-300!"
      : "text-blue-700! border-blue-700!";
  const inactiveTextClass =
    resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600";

  return (
    <div className="flex space-x-2 text-sm select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700">
      <div
        onClick={() => selectTab("All")}
        className={`flex items-center space-x-1 border-b-3 border-transparent active:text-blue-700 cursor-pointer pb-3 px-2 ${
          pathname === "/search/web" ? activeTextClass : inactiveTextClass
        }`}
      >
        <AiOutlineSearch className="text-md" />
        <p
          className={
            pathname === "/search/web" ? activeTextClass : inactiveTextClass
          }
        >
          All
        </p>
      </div>
      <div
        onClick={() => selectTab("Images")}
        className={`flex items-center space-x-1 border-b-3 border-transparent active:text-blue-700 cursor-pointer pb-3 px-2 ${
          pathname === "/search/image" ? activeTextClass : inactiveTextClass
        }`}
      >
        <AiOutlineCamera className="text-md" />
        <p
          className={
            pathname === "/search/image" ? activeTextClass : inactiveTextClass
          }
        >
          Images
        </p>
      </div>
    </div>
  );
}

export { SearchHeaderOptions };
