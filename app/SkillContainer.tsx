import React from "react";

interface Props {
  skillData: string[];
  skillTitle: string;
}

const SkillContainer = ({ skillData, skillTitle }: Props) => {
  return (
    <div className="border border-dotted border-orange-400 m-5">
      <h2 className="text-3xl font-medium capitalize text-center p-3">
        {skillTitle}
      </h2>

      <ul className="flex flex-wrap justify-center text-xs gap-2 text-gray-800 p-3 ">
        {skillData.map((skill, index) => (
          <li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillContainer;
