import Image from "next/image";
import { HomeHeader } from "./components/HomeHeader";
import { HomeSearch } from "./components/HomeSearch";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <main>
        <HomeHeader session={session} />
        <div className="flex flex-col items-center mt-24">
          <Image
            src={`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png`}
            width={300}
            height={100}
            alt="google"
            loading="eager"
            style={{ height: "auto", width: "auto" }}
          />
          <HomeSearch />
        </div>
      </main>
    </div>
  );
}
