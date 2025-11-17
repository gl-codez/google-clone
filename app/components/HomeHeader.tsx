"use client";

import Link from "next/link";
import { CgMenuGridO } from "react-icons/cg";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

function HomeHeader() {
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
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-4 items-center">
        <Link
          href="https://mail.google.com"
          className="hover:underline cursor-pointer"
        >
          Gmail
        </Link>
        <Link
          href="https://image.google.com"
          className="hover:underline cursor-pointer"
        >
          Images
        </Link>

        <div className="relative">
          <CgMenuGridO
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-transparent text-black text-4xl hover:bg-gray-200 p-2 rounded-full cursor-pointer"
          />

          {menuOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-xl py-2 w-32 text-sm border">
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

        {session?.user ? (
          <Image
            src={session?.user.image || "user"}
            alt="user"
            width={40}
            height={40}
            className="rounded-full w-11 h-11 cursor-pointer hover:brightness-95"
          />
        ) : (
          <button
            onClick={handleSignIn}
            className="text-white bg-blue-700 px-6 py-2 font-medium rounded-full hover:brightness-105 hover:shadow-md transition-shadow cursor-pointer"
          >
            {isSigningIn ? (
              <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Sign in"
            )}
          </button>
        )}
      </div>
    </header>
  );
}

export { HomeHeader };
