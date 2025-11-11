interface Results {
  title: string;
}

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const query = (await searchParams).query;

  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${query}`
  );
  const data = await res.json();
  const results: Results[] = data.items;

  return (
    <>
      {results &&
        results.map((result) => <h1 key={result.title}>{result.title}</h1>)}
    </>
  );
}
