import Image from "next/image";
import Link from "next/link";
import { SearchBox } from "./SearchBox";
import { IoSettingsOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { SearchHeaderOptions } from "./SearchHeaderOptions";
import { Suspense, useState } from "react";
import { signIn, signOut } from "next-auth/react";

interface Session {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  } | null;
}

function SearchHeader({ session }: { session: Session | null }) {
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleSignIn = async () => {
    try {
      setIsSigningIn(true);
      await signIn("google");
    } catch (error) {
      console.error("Error signing in:", error);
      setIsSigningIn(false);
    }
  };
  const handleSignOut = async () => {
    await signOut();
  };
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
          {session?.user ? (
            <Image
              src={session?.user.image || "/default-profile.png"}
              alt="user"
              width={40}
              height={40}
              className="rounded-full w-11 h-11 cursor-pointer hover:brightness-95"
            />
          ) : (
            <button
              onClick={handleSignIn}
              className="text-white bg-blue-700 px-6 py-2 font-medium rounded-full hover:brightness-105 hover:shadow-md transition-all cursor-pointer ml-2 md:hidden"
            >
              {isSigningIn ? (
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Sign in"
              )}
            </button>
          )}
        </div>

        <div className="flex-1 w-full">
          <Suspense fallback={<p>Loading...</p>}>
            <SearchBox />
          </Suspense>
        </div>
        <div className="hidden md:flex space-x-2">
          <IoSettingsOutline className="header-icon" />
          <CgMenuGridO onClick={handleSignOut} className="header-icon" />
        </div>
        {session?.user ? (
          <Image
            src={session?.user.image || "/default-profile.png"}
            alt="user"
            width={40}
            height={40}
            className="rounded-full w-11 h-11 cursor-pointer hover:brightness-95"
          />
        ) : (
          <button
            onClick={handleSignIn}
            className="hidden md:inline text-white bg-blue-700 px-6 py-2 font-medium rounded-full hover:brightness-105 hover:shadow-md transition-all cursor-pointer ml-2"
          >
            {isSigningIn ? (
              <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Sign in"
            )}
          </button>
        )}
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <SearchHeaderOptions />
      </Suspense>
    </header>
  );
}

export { SearchHeader };
