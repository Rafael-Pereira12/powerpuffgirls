import { useEffect, useState } from "react";
import { _Collapsible } from "./_Collapsible";
import { Collapsible } from "./CollasibleTypes";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export const CollapsibleComponent = (props: any) => {
  const [isOpen, setIsOpen] = useState<Collapsible>();

  return (
    <_Collapsible>
      {isOpen ? <FaChevronUp /> : <FaChevronDown />}

      {props.children}
    </_Collapsible>
  );
};
