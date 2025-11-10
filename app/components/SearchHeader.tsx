import Image from "next/image";
import Link from "next/link";
import { SearchBox } from "./SearchBox";
import { IoSettingsOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { SearchHeaderOptions } from "./SearchHeaderOptions";
import { Suspense } from "react";

function SearchHeader() {
  return (
    <header className="stick top-0 bg-white">
      <div className="flex flex-col md:flex-row w-full p-4 md:p-6 items-center md:justify-between space-y-4 md:space-y-0">
        <div className="flex w-full items-center justify-between md:w-auto">
          <Link href={"/"}>
            <Image
              src={`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png`}
              width={120}
              height={40}
              alt="google"
              loading="eager"
              style={{ height: "auto", width: "auto" }}
            />
          </Link>
          <button className="text-white bg-blue-700 px-6 py-2 font-medium rounded-full hover:brightness-105 hover:shadow-md transition-all cursor-pointer ml-2 md:hidden">
            Sign in
          </button>
        </div>

        <div className="flex-1 w-full">
          <Suspense fallback={<p>Loading...</p>}>
            <SearchBox />
          </Suspense>
        </div>
        <div className="hidden md:flex space-x-2">
          <IoSettingsOutline className="header-icon" />
          <CgMenuGridO className="header-icon" />
        </div>
        <button className="hidden md:inline text-white bg-blue-700 px-6 py-2 font-medium rounded-full hover:brightness-105 hover:shadow-md transition-all cursor-pointer ml-2">
          Sign in
        </button>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <SearchHeaderOptions />
      </Suspense>
    </header>
  );
}

export { SearchHeader };
