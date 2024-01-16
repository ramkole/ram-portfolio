"use client";
import Image from "next/image";
import React from "react";
import {
  DownloadIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const HaderHero = () => {
  return (
    <div className="grid grid-cols-1 p-3 m-3">
      <div className="flex flex-row justify-center items-center">
        <Image
          className="border-8 border-opacity-50 border-orange-400"
          src="https://avatars.githubusercontent.com/u/56620810?v=4"
          width={250}
          height={250}
          alt="hero"
        />
        <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 ">
          <a href="https://www.linkedin.com/in/ram-kole-web/" target="_blank">
            <LinkedInLogoIcon className="h-10 w-10 border border-dotted border-orange-400 m-3" />
          </a>
          <a href="https://github.com/ramkole" target="_blank">
            <GitHubLogoIcon className="h-10 w-10 border border-dotted border-orange-400 m-3" />
          </a>
          <a href="/ram_kole_resume.pdf" download>
            <DownloadIcon className="h-10 w-10 border border-dotted border-orange-400 m-3" />
          </a>
        </div>
      </div>

      <div className="p-3 border border-dotted border-orange-400 m-3">
        I&lsquo;m a <span className="font-bold">front-end dev </span> with{" "}
        <span className="font-bold">7+ years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </div>
    </div>
  );
};

export default HaderHero;
