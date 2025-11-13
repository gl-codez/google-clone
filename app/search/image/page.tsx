import { ImageSearchResult } from "@/app/components/ImageSearchResult";
import Link from "next/link";

export default async function ImageSearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query: string; start: string }>;
}) {
  const query = (await searchParams).query;
  const startIndex = (await searchParams).start || "1";

  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${query}&searchType=image&start=${startIndex}`
  );
  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  const data = await res.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try searching for something else or go back to homepage{" "}
          <Link href={"/"} className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }

  return <>{results && <ImageSearchResult results={data} />}</>;
}
