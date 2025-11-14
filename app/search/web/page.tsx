import { WebSearchResult } from "@/app/components/WebSearchResult";
import { notFound } from "next/navigation";

export default async function WebSearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query: string; start: string }>;
}) {
  const { query, start } = await searchParams;
  const startIndex = start || "1";

  if (!query) {
    return null;
  }

  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${query}&start=${startIndex}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    console.log(res);
    throw new Error("Error fetching data");
  }
  const data = await res.json();
  const results = data.items;

  if (!results) {
    return notFound();
  }

  return <>{results && <WebSearchResult results={data} />}</>;
}
