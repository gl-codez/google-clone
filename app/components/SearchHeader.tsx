"use client";

import Image from "next/image";
import Link from "next/link";
import { SearchBox } from "./SearchBox";
import { CgMenuGridO } from "react-icons/cg";
import { SearchHeaderOptions } from "./SearchHeaderOptions";
import { Suspense, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { ThemeSwitch } from "./ThemeSwitch";

function SearchHeader() {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();

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
    try {
      setIsSigningOut(true);
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
      setIsSigningOut(false);
    }
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
          <div className="flex items-center md:hidden space-x-2 relative">
            <CgMenuGridO
              onClick={() => setMenuOpen(!menuOpen)}
              className=" md:hidden header-icon"
            />
            {menuOpen && (
              <div className="absolute right-0 mr-20 mt-3 bg-white shadow-lg rounded-xl w-15 text-sm">
                {session?.user ? (
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {isSigningOut ? "Signing out..." : "Sign out"}
                  </button>
                ) : (
                  <div className="px-4 py-2 text-sm">Sign in to continue</div>
                )}
              </div>
            )}
            {session?.user ? (
              <Image
                src={session?.user.image || "/default-profile.png"}
                alt="user"
                width={40}
                height={40}
                className="rounded-full w-11 h-11 cursor-pointer hover:brightness-95 md:hidden"
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
        </div>

        <div className="flex-1 w-full">
          <Suspense fallback={<p>Loading...</p>}>
            <SearchBox />
          </Suspense>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <ThemeSwitch />
          <CgMenuGridO
            onClick={() => setMenuOpen(!menuOpen)}
            className="header-icon"
          />
        </div>
        {session?.user ? (
          <Image
            src={session?.user.image || "/default-profile.png"}
            alt="user"
            width={40}
            height={40}
            className="rounded-full w-11 h-11 cursor-pointer hover:brightness-95 hidden md:inline"
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
        {menuOpen && (
          <div className="hidden md:inline absolute right-0 mr-10 mt-28 bg-white shadow-lg rounded-xl py-2 w-32 text-sm">
            {session?.user ? (
              <button
                onClick={handleSignOut}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                {isSigningOut ? "Signing out..." : "Sign out"}
              </button>
            ) : (
              <div className="px-4 py-2 text-sm">
                Sign in to access more options
              </div>
            )}
          </div>
        )}
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <SearchHeaderOptions />
      </Suspense>
    </header>
  );
}

export { SearchHeader };
