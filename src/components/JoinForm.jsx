import { useState } from "react";
import SectionHeading from "./SectionHeading.jsx";

const RADIO_CLASS =
  "form-radio text-primary-container bg-transparent border-border-low focus:ring-primary-container focus:ring-offset-background h-5 w-5";

const INITIAL = {
  nom: "",
  prenom: "",
  age: "",
  tuteur: "",
  dojo: "",
  experience: "",
  shotokan: "",
  motivation: "",
};

function Required() {
  return <span className="text-primary-container">*</span>;
}

function RadioGroup({ label, name, value, onChange, options, alwaysShown }) {
  return (
    <div className="flex flex-col gap-4 mb-8">
      <label className="font-label-sm text-text-dim uppercase tracking-wider">
        {label} <Required />
      </label>
      <div className="flex flex-wrap gap-6">
        {options.map((opt) => {
          const checked = value === opt.value;
          const showStar = alwaysShown && checked && opt.value === options[0].value;
          return (
            <label
              key={opt.value}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                className={RADIO_CLASS}
                name={name}
                type="radio"
                value={opt.value}
                checked={checked}
                onChange={onChange}
                required
              />
              <span className="font-body-md text-on-surface group-hover:text-primary-container transition-colors">
                {opt.label}
              </span>
              {showStar && <Required />}
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default function JoinForm() {
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const message =
      `*DEMANDE D'INSCRIPTION - BUSHIDO KARATÉ CLUB*\n\n` +
      `*Nom:* ${form.nom}\n` +
      `*Prénom:* ${form.prenom}\n` +
      `*Tranche d'âge:* ${form.age}\n` +
      `*Tuteur (si mineur):* ${form.tuteur || "N/A"}\n` +
      `*Dojo choisi:* ${form.dojo}\n` +
      `*Déjà fait du karaté ?* ${form.experience}\n` +
      `*Style Shotokan ?* ${form.shotokan || "N/A"}\n\n` +
      `*Motivations :*\n${form.motivation}\n\n` +
      `Cette demande a été envoyée via le site web du Bushido Karaté Club.`;

    const whatsappUrl = `https://wa.me/242066781995?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section
      id="inscription"
      className="py-margin-lg bg-surface-container-low px-margin-sm md:px-margin-lg scroll-mt-20"
    >
      <div className="max-w-container-max mx-auto">
        <SectionHeading
          title={
            <>
              REJOINDRE LE <span className="text-primary-container">DOJO</span>
            </>
          }
          subtitle="Inscrivez-vous dès maintenant pour découvrir la science du Bushido, la discipline de vie et l'auto-protection contre les situations indésirables."
          className="mb-16"
        />

        <div className="max-w-3xl mx-auto bg-surface ghost-border p-8 md:p-12 shadow-2xl">
          {submitted ? (
            <div className="text-center py-12">
              <h3 className="font-headline-md text-2xl text-primary-container uppercase mb-4">
                Demande envoyée
              </h3>
              <p className="font-body-md text-text-dim">
                Merci {form.prenom || form.nom}, votre demande d'inscription a bien
                été transmise. Maître MIAK vous contactera prochainement.
              </p>
              <button
                className="mt-8 bg-primary-container text-white px-8 py-4 font-label-sm uppercase hover:bg-inverse-primary transition-colors"
                onClick={() => {
                  setForm(INITIAL);
                  setSubmitted(false);
                }}
              >
                Nouvelle demande
              </button>
              <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/242066781995"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-8 py-4 font-label-sm uppercase hover:bg-green-700 transition-colors"
                >
                  NOUS CONTACTER (WhatsApp)
                </a>
                <a
                  href="tel:+242066781995"
                  className="inline-block bg-blue-600 text-white px-8 py-4 font-label-sm uppercase hover:bg-blue-700 transition-colors"
                >
                  APPELER MAINTENANT
                </a>
              </div>
            </div>
          ) : (
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="font-label-sm text-text-dim mb-2 uppercase tracking-wider">
                    Nom <Required />
                  </label>
                  <input
                    className="input-ghost py-2 text-on-surface font-body-md w-full bg-transparent focus:outline-none focus:border-primary-container"
                    placeholder="Votre nom"
                    type="text"
                    value={form.nom}
                    onChange={update("nom")}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-label-sm text-text-dim mb-2 uppercase tracking-wider">
                    Prénom <Required />
                  </label>
                  <input
                    className="input-ghost py-2 text-on-surface font-body-md w-full bg-transparent focus:outline-none focus:border-primary-container"
                    placeholder="Votre prénom"
                    type="text"
                    value={form.prenom}
                    onChange={update("prenom")}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="font-label-sm text-text-dim mb-2 uppercase tracking-wider">
                  Tranche d'âge <Required />
                </label>
                <select
                  className="input-ghost py-2 text-on-surface font-body-md w-full bg-surface focus:outline-none focus:border-primary-container cursor-pointer"
                  value={form.age}
                  onChange={update("age")}
                  required
                >
                  <option value="" disabled>
                    Sélectionnez votre tranche d'âge
                  </option>
                  <option value="enfant">Enfant (6-12 ans)</option>
                  <option value="ado">Adolescent (13-17 ans)</option>
                  <option value="adulte">Adulte (18+ ans)</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="font-label-sm text-text-dim mb-2 uppercase tracking-wider">
                  Nom du tuteur (si mineur) <Required />
                </label>
                <input
                  className="input-ghost py-2 text-on-surface font-body-md w-full bg-transparent focus:outline-none focus:border-primary-container"
                  placeholder="Obligatoire pour les moins de 18 ans"
                  type="text"
                  value={form.tuteur}
                  onChange={update("tuteur")}
                  required
                />
              </div>

              <RadioGroup
                label="Choix du dojo"
                name="dojo"
                value={form.dojo}
                onChange={update("dojo")}
                alwaysShown
                options={[
                  { value: "henri", label: "Dojo Henri Elende" },
                  { value: "mfilou", label: "Dojo Mfilou" },
                ]}
              />

              <RadioGroup
                label="Avez-vous déjà fait du karaté ?"
                name="experience"
                value={form.experience}
                onChange={update("experience")}
                alwaysShown
                options={[
                  { value: "oui", label: "Oui" },
                  { value: "non", label: "Non" },
                ]}
              />

              <RadioGroup
                label="Si oui, était-ce le style Shotokan comme le nôtre ?"
                name="shotokan"
                value={form.shotokan}
                onChange={update("shotokan")}
                alwaysShown
                options={[
                  { value: "oui", label: "Oui" },
                  { value: "non", label: "Non" },
                ]}
              />

              <div className="flex flex-col mt-4">
                <label className="font-headline-md text-2xl text-primary-container mb-4 uppercase">
                  Pour quelle raison aimeriez-vous apprendre notre art ?{" "}
                  <Required />
                </label>
                <textarea
                  className="input-ghost py-3 text-on-surface font-body-md w-full h-32 resize-none bg-surface/50 border focus:border-primary-container p-4 border-outline-variant"
                  placeholder="Partagez vos motivations, ce que vous recherchez à travers la pratique du Karaté..."
                  value={form.motivation}
                  onChange={update("motivation")}
                  required
                />
              </div>

              <button
                className="bg-primary-container text-white px-8 py-5 font-label-sm uppercase hover:bg-inverse-primary transition-colors w-full mt-4 tracking-widest"
                type="submit"
              >
                SOUMETTRE LA DEMANDE D'INSCRIPTION
              </button>
              <p className="font-body-md text-text-dim text-xs mt-4 italic">
                <span className="text-primary-container font-label-sm uppercase not-italic mr-1">
                  NB :
                </span>
                Toutes les questions posées sont à caractère obligatoire.
              </p>
              <div className="mt-6 text-center flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/242066781995"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-8 py-4 font-label-sm uppercase hover:bg-green-700 transition-colors"
                >
                  NOUS CONTACTER (WhatsApp)
                </a>
                <a
                  href="tel:+242066781995"
                  className="inline-block bg-blue-600 text-white px-8 py-4 font-label-sm uppercase hover:bg-blue-700 transition-colors"
                >
                  APPELER MAINTENANT
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
