"use client";

import { useEffect, useState } from "react";

function CountryLookup() {
  const [country, setCountry] = useState("Nigeria");

  useEffect(() => {
    try {
      const fetchCountry = async () => {
        const res = await fetch("http://ip-api.com/json?fields=country");
        const data = await res.json();
        setCountry(data.country);
      };
      fetchCountry();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return <div>{country}</div>;
}

export { CountryLookup };
