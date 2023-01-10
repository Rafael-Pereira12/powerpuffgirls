import { useState } from "react";
import { _Collapsible } from "./_Collapsible";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export const CollapsibleComponent = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <_Collapsible>
      <section className="card">
        <section className="seasonContainer">
          <h5>SEASON {props.number}</h5>
          <section className="btnContainer">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </section>
        </section>

        {isOpen && (
          <section className="episodeContainer">{props.children}</section>
        )}
      </section>
    </_Collapsible>
  );
};
