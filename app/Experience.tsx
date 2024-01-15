import React from "react";
import WorkDetails from "./WorkDetails";
import { workData } from "@/lib/constData";

const Experience = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h2 className="text-3xl font-medium capitalize text-center m-3">
        Work Experience
      </h2>
      <WorkDetails workDataList={workData} />
    </div>
  );
};

export default Experience;
