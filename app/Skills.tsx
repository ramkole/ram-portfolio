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
    <div className=" border border-dotted border-orange-400">
      <section className="text-center m-5">
        <section className="text-2xl font-medium">
          <h2 className="text-3xl font-medium capitalize  text-center">
            Tech that i Worked On
          </h2>
        </section>
        <div className="items-center overflow-scroll overflow-x-hidden">
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
      </section>
    </div>
  );
}
