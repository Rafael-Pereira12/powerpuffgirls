import { _SectionHeader } from "./_SectionHeader";
import SectionHeaderProps from "./SectionHeaderTypes";
import { useGlobalContext } from "../../../context/globalContext";

export const SectionHeader = ({ title }: SectionHeaderProps) => {
  const { setViewEpisodes } = useGlobalContext();

  return (
    <_SectionHeader>
      <section className="text" onClick={() => setViewEpisodes(true)}>
        {title}
      </section>
    </_SectionHeader>
  );
};
