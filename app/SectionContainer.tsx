import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const SectionContainer = ({ children }: Props) => {
  return (
    <div className="border border-dotted border-orange-300 m-10 hover:transform hover:scale-110 hover:bg-slate-50 transition-transform duration-300 ease-in-out text-zinc-950">
      {children}
    </div>
  );
};

export default SectionContainer;
