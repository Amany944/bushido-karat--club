import SectionHeading from "./SectionHeading.jsx";
import { CALENDAR } from "../data/content.js";

function EventText({ event, align }) {
  return (
    <div className={align === "right" ? "md:text-right" : "text-left"}>
      <h4 className="font-headline-md text-[28px] text-primary-container uppercase">
        {event.month}
      </h4>
      <h3 className="font-headline-md text-on-surface uppercase mt-1">
        {event.title}
      </h3>
      <p className="font-body-md text-text-dim mt-2">{event.description}</p>
    </div>
  );
}

function PlaceCard({ event, className = "" }) {
  return (
    <div className={`bg-surface ghost-border p-4 w-full md:w-3/4 ${className}`}>
      <p className="font-label-sm text-text-dim mb-1">LIEU</p>
      <p className="font-body-md text-on-surface">{event.place}</p>
    </div>
  );
}

export default function Calendar() {
  return (
    <section
      id="calendrier"
      className="py-margin-lg bg-surface-container-low px-margin-sm md:px-margin-lg scroll-mt-20"
    >
      <div className="max-w-container-max mx-auto">
        <SectionHeading
          title={
            <>
              CALENDRIER <span className="text-primary-container">2026</span>
            </>
          }
          className="mb-20"
        />

        <div className="relative w-full max-w-4xl mx-auto py-10">
          <div className="timeline-line hidden md:block" />

          {CALENDAR.map((event, i) => {
            const reversed = i % 2 === 1;
            const isLast = i === CALENDAR.length - 1;

            const textBlock = (
              <div
                className={`w-full md:w-5/12 ${
                  reversed ? "order-1 md:order-2" : ""
                } text-left ${reversed ? "pl-8" : "pl-8 md:pl-0 md:text-right pr-0 md:pr-8"}`}
              >
                <EventText event={event} align={reversed ? "left" : "right"} />
                {reversed && (
                  <div className="mt-4 md:hidden">
                    <PlaceCard event={event} />
                  </div>
                )}
              </div>
            );

            const placeBlock = (
              <div
                className={`w-full md:w-5/12 pl-8 md:pl-8 ${
                  reversed ? "hidden md:block order-2 md:order-1" : ""
                }`}
              >
                <PlaceCard event={event} className={reversed ? "ml-auto" : ""} />
              </div>
            );

            return (
              <div
                key={event.title}
                className={`relative flex flex-col md:flex-row items-center justify-between ${
                  isLast ? "" : "mb-16 md:mb-24"
                }`}
              >
                {reversed ? placeBlock : textBlock}
                <div className="timeline-node top-2 md:top-1/2 md:-mt-1 hidden md:block" />
                <div className="w-3 h-3 bg-primary-container transform rotate-45 absolute left-0 top-3 md:hidden" />
                {reversed ? textBlock : placeBlock}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
