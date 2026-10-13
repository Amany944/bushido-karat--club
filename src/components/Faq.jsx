import { useState } from "react";
import Icon from "./Icon.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { FAQ } from "../data/content.js";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section
      id="faq"
      className="py-margin-lg px-margin-sm md:px-margin-lg max-w-container-max mx-auto scroll-mt-20"
    >
      <SectionHeading
        title={
          <>
            FOIRE AUX <span className="text-primary-container">QUESTIONS</span>
          </>
        }
        className="mb-16"
      />

      <div className="max-w-3xl mx-auto space-y-4">
        {FAQ.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question} className="bg-surface ghost-border">
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-surface-bright transition-colors"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
              >
                <span className="font-headline-md text-[24px] text-on-surface uppercase">
                  {item.question}
                </span>
                <Icon
                  name={isOpen ? "remove" : "add"}
                  className="text-primary-container transition-transform shrink-0"
                  style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: isOpen ? "600px" : "0px" }}
              >
                <div className="p-6 pt-0 font-body-md text-text-dim">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
