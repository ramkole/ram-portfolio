import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const SectionContainer = ({ children }: Props) => {
  return (
    <div className="border border-dotted border-orange-300 m-10 hover:transform hover:scale-110 overflow-auto hover:bg-slate-50 overflow-x-hidden transition-transform duration-300 ease-in-out text-zinc-950 h-[35rem]">
      {children}
    </div>
  );
};

export default SectionContainer;
