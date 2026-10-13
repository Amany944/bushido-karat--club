import { MASTER } from "../data/content.js";

export default function Master() {
  return (
    <section
      id="maitre"
      className="py-margin-lg px-margin-sm md:px-margin-lg max-w-container-max mx-auto scroll-mt-20"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 relative group overflow-hidden">
          <img
            alt={`Maître ${MASTER.name}`}
            className="w-full h-auto object-cover ghost-border grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            src={MASTER.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
        </div>

        <div className="w-full md:w-1/2 flex flex-col">
          <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface uppercase mb-4">
            BIOGRAPHIE DU MAÎTRE{" "}
            <span className="text-primary-container">{MASTER.name}</span>
          </h2>
          <div className="w-24 h-1 bg-primary-container mb-8" />

          <div className="font-body-lg text-body-lg text-inverse-surface mb-8 leading-relaxed">
            <p className="font-label-sm text-primary-container uppercase tracking-wider mb-4">
              Une Figure Emblématique du Karaté Africain
            </p>
            {MASTER.paragraphs.map((paragraph, i) => (
              <p key={i} className="mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mb-8">
            <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-6">
              PARCOURS{" "}
              <span className="text-primary-container">INTERNATIONAL</span>
            </h3>
            <div className="space-y-4">
              {MASTER.career.map((step) => (
                <div key={step.period} className="flex gap-4 items-start">
                  <span className="font-headline-md text-primary-container text-xl min-w-[80px]">
                    {step.period}
                  </span>
                  <p className="font-body-md text-inverse-surface">
                    {step.text}
                    <br />
                    <a
                      className="font-label-sm text-primary opacity-80 hover:opacity-100 transition-opacity mt-1 inline-block"
                      href={step.href}
                      target={step.href === "#" ? undefined : "_blank"}
                      rel="noreferrer"
                    >
                      Source: {step.source}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <blockquote className="border-l-4 border-primary-container pl-6 py-2 italic font-body-lg text-text-dim">
            "{MASTER.quote}"
          </blockquote>
        </div>
      </div>
    </section>
  );
}
