import HaderHero from "./HaderHero";
import Me from "./Me";
import SectionContainer from "./SectionContainer";
import Skills from "./Skills";

export default function Home() {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
      <div className="grid lg:grid-rows-2 md:grid-rows-1 sm:grid-rows-1 w-full  ">
        <SectionContainer>
          <HaderHero />
        </SectionContainer>
        <SectionContainer>
          <Me />
        </SectionContainer>
      </div>
      <div className="grid lg:grid-rows-2 md:grid-rows-1 sm:grid-rows-1 w-full  ">
        <SectionContainer>
          <Skills />
        </SectionContainer>
        <SectionContainer>Hi There</SectionContainer>
      </div>
    </div>
  );
}
