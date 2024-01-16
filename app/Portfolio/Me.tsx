import React from "react";

const Me = () => {
  return (
    <section className="items-center  p-3 ">
      <h2 className="text-3xl font-medium capitalize mb-8 p-3 text-center border border-dotted border-orange-400 m-3">
        About Me
      </h2>
      <p className="mb-3 text-center border border-dotted border-orange-400 m-3 p-3">
        After graduating with a degree in{" "}
        <span className="font-medium">CSE</span>, I decided to pursue my passion
        for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">Front End web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">React, Next.js and React Native</span>.
        I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p className="border border-dotted border-orange-400 m-3 p-3">
        <span className="italic">When I&lsquo;m not coding</span>, I enjoy
        playing mobile video games, watching movies, and farming. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">diet and workouts to imporve health</span>{" "}
        as i am working from my home.
      </p>
    </section>
  );
};

export default Me;
