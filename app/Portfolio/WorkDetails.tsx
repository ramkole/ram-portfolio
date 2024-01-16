import React from "react";

interface workData {
  title: string;
  duration: string;
  clients: string;
  description: string;
}

interface Props {
  workDataList: workData[];
}

const WorkDetails = ({ workDataList }: Props) => {
  return (
    <>
      <div className="grid lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 ">
        {workDataList.map((data) => (
          <section
            key={data.title}
            className="items-center border border-dotted border-orange-400 m-2"
          >
            <h2 className="text-2xl font-medium capitalize  text-center">
              {data.title}
            </h2>
            <h3 className="text-1xl font-medium capitalize text-center border border-dotted border-orange-400 m-3">
              {data.duration}
            </h3>
            <h4 className="text-xl font-medium capitalize text-center">
              Clients: {data.clients}
            </h4>
            <p className=" text-sm text-center p-3">{data.description}</p>
          </section>
        ))}
      </div>
    </>
  );
};

export default WorkDetails;
