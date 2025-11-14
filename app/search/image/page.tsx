import { ImageSearchResult } from "@/app/components/ImageSearchResult";
import { notFound } from "next/navigation";

export default async function ImageSearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query: string; start: string }>;
}) {
  const { query, start } = await searchParams;
  const startIndex = start || "1";

  if (!query) return null;

  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${query}&searchType=image&start=${startIndex}`
  );
  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  const data = await res.json();
  const results = data.items;

  if (!results) {
    return notFound();
  }

  return <>{results && <ImageSearchResult results={data} />}</>;
}
