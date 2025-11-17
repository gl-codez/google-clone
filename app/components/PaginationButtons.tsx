"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

function PaginationButtons() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query");
  const startIndex = Number(searchParams.get("start")) || 1;
  const { resolvedTheme } = useTheme();
  const text = resolvedTheme === "dark" ? "text-blue-300" : "text-blue-700";

  return (
    <div
      className={`${text} px-10 pb-4 justify-between flex sm:justify-start sm:space-x-44 sm:px-0`}
    >
      {startIndex >= 10 && (
        <Link
          href={`${pathname}?query=${searchQuery}&start=${startIndex - 10}`}
        >
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <GoChevronLeft className="h-5" /> <p>Previous</p>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link
          href={`${pathname}?query=${searchQuery}&start=${startIndex + 10}`}
        >
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <GoChevronRight className="h-5" /> <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}

export { PaginationButtons };
