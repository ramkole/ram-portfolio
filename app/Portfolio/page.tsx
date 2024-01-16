import {
  Experience,
  HaderHero,
  Me,
  SectionContainer,
  Skills,
} from "../Portfolio";

const page = () => {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 ">
      <div className="grid lg:grid-rows-2 md:grid-rows-1 sm:grid-rows-1 w-full ">
        <SectionContainer>
          <HaderHero />
        </SectionContainer>
        <SectionContainer>
          <Skills />
        </SectionContainer>
      </div>
      <div className="grid lg:grid-rows-2 md:grid-rows-1 sm:grid-rows-1 w-full">
        <SectionContainer>
          <Experience />
        </SectionContainer>
        <SectionContainer>
          <Me />
        </SectionContainer>
      </div>
    </div>
  );
};

export default page;
