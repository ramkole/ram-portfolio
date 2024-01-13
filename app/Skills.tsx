"use client";

import {
  frontEndStack,
  reactTooling,
  styleStack,
  testingStack,
  versionTooling,
} from "@/lib/constData";
import SkillContainer from "./SkillContainer";

export default function Skills() {
  return (
    <section className="text-center pb-10  lg:h-[19rem] md:h-[19rem] sm:h-[45rem] overflow-scroll overflow-x-hidden m-3">
      <section className="mt-6 px-4 text-2xl font-medium ">
        <h2 className="text-3xl font-medium capitalize mb-8">
          Tech that i Worked On
        </h2>
      </section>
      <div className="items-center  relative">
        <div className="absolute ">
          <SkillContainer
            skillTitle="Front End Stack"
            skillData={frontEndStack}
          />
          <SkillContainer skillTitle="React Tooling" skillData={reactTooling} />
          <SkillContainer skillTitle="Styling Stack" skillData={styleStack} />
          <SkillContainer
            skillTitle="Testing Tooling"
            skillData={testingStack}
          />
          <SkillContainer
            skillTitle="Version Control System"
            skillData={versionTooling}
          />
        </div>
      </div>
    </section>
  );
}
