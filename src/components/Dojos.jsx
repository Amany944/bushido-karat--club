import Icon from "./Icon.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { DOJOS, TRAINING_RULES } from "../data/content.js";

export default function Dojos() {
  return (
    <section
      id="dojos"
      className="py-margin-lg px-margin-sm md:px-margin-lg max-w-container-max mx-auto scroll-mt-20"
    >
      <SectionHeading
        title={
          <>
            NOS <span className="text-primary-container">DOJOS</span>
          </>
        }
        className="mb-16"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {DOJOS.map((dojo) => (
          <div
            key={dojo.name}
            className="bg-surface ghost-border p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Icon name={dojo.icon} style={{ fontSize: "120px" }} />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-2 relative z-10">
              {dojo.name}
            </h3>
            <p className="font-body-md text-text-dim mb-6 relative z-10">
              {dojo.location}
            </p>
            <div className="space-y-4 relative z-10">
              {dojo.schedule.map((slot) => (
                <div
                  key={slot.day}
                  className="flex justify-between items-center border-b border-border-low pb-2"
                >
                  <span className="font-label-sm text-on-surface">{slot.day}</span>
                  <span className="font-body-md text-text-dim">{slot.hours}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <SectionHeading
          title={
            <>
              RÈGLES DE{" "}
              <span className="text-primary-container">L'ENTRAÎNEMENT</span>
            </>
          }
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-4xl mx-auto">
          {TRAINING_RULES.map((rule, i) => (
            <div
              key={i}
              className="bg-surface ghost-border p-6 flex items-start gap-4"
            >
              <Icon name={rule.icon} className="text-primary-container shrink-0" />
              <p className="font-body-md text-on-surface">{rule.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
