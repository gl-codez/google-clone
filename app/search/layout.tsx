import { auth } from "@/auth";
import { SearchHeader } from "../components/SearchHeader";

export default async function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <div>
      <SearchHeader session={session} />
      {children}
    </div>
  );
}
