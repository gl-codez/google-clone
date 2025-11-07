import Image from "next/image";
import { Header } from "./components/Header";
import { Search } from "./components/Search";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <div className="flex flex-col items-center mt-24">
          <Image
            src={`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png`}
            width={300}
            height={100}
            alt="google"
            loading="eager"
            style={{ height: "auto", width: "auto" }}
          />
          <Search />
        </div>
      </main>
    </div>
  );
}
