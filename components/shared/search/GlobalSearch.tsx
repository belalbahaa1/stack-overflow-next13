"use client";
import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <Image
          src="/assets/icons/search.svg"
          width={20}
          height={20}
          alt="search"
          className="cursor-pointer"
        />
        <Input
          placeholder="Search"
          className="paragraph-regular no-focus placeholder text-dark400_light700 w-full border-none bg-transparent shadow-none outline-none"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
