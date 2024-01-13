import React from "react";

interface Props {
  skillData: string[];
  skillTitle: string;
}

const SkillContainer = ({ skillData, skillTitle }: Props) => {
  return (
    <>
      <h2 className="text-3xl font-medium capitalize mb-5 mt-5 text-center">
        {skillTitle}
      </h2>

      <ul className="flex flex-wrap justify-center gap-2 text-xs text-gray-800">
        {skillData.map((skill, index) => (
          <li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
          >
            {skill}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SkillContainer;
