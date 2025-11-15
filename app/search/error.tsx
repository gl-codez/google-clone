"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-3xl mb-4">Something went wrong!</h1>
      <button
        className="text-white bg-blue-700 px-6 py-2 font-medium rounded-md cursor-pointer"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
