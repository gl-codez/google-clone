"use client";

import Link from "next/link";
import { CgMenuGridO } from "react-icons/cg";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

interface Session {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  } | null;
}

function HomeHeader({ session }: { session: Session | null }) {
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

        <CgMenuGridO
          onClick={handleSignOut}
          className="bg-transparent text-black text-4xl hover:bg-gray-200 p-2 rounded-full cursor-pointer"
        />
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
