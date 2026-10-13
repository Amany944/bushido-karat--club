import { HERO } from "../data/content.js";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
          alt="Karatéka en action dans un dojo"
          src={HERO.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>
      <div className="relative z-10 text-center max-w-container-max px-margin-sm md:px-margin-lg mx-auto flex flex-col items-center">
        <h1 className="font-display-xl text-headline-lg-mobile md:text-display-xl text-on-surface uppercase mb-6 drop-shadow-lg">
          {HERO.title} <br />
          <span className="text-primary-container">{HERO.subtitle}</span>
        </h1>
        <p className="font-body-lg text-body-lg text-inverse-surface max-w-2xl mx-auto mb-10">
          {HERO.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            className="bg-primary-container text-white px-8 py-4 font-label-sm text-label-sm uppercase hover:bg-inverse-primary transition-colors"
            href="#inscription"
          >
            REJOINDRE LE DOJO
          </a>
          <a
            className="ghost-border text-white px-8 py-4 font-label-sm text-label-sm uppercase hover:bg-white hover:text-background transition-colors"
            href="#maitre"
          >
            DÉCOUVRIR
          </a>
        </div>
      </div>
    </section>
  );
}
