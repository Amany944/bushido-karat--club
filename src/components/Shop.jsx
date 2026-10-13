import Icon from "./Icon.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { PRODUCTS, SHOP_NOTE, SHOP_CONTACT } from "../data/content.js";

export default function Shop() {
  return (
    <section
      id="boutique"
      className="py-margin-lg bg-surface-container-low px-margin-sm md:px-margin-lg scroll-mt-20"
    >
      <div className="max-w-container-max mx-auto">
        <SectionHeading
          title={
            <>
              BOUTIQUE : ÉQUIPEMENT{" "}
              <span className="text-primary-container">OFFICIEL</span>
            </>
          }
          subtitle="Maître Victor MIAK met à votre disposition une boutique spécialisée proposant une gamme complète d'équipements sportifs de haute performance. Si notre sélection honore l'authenticité du Karaté Shotokan, nous accompagnons avec la même exigence de qualité et de discipline les pratiquants de toutes les disciplines sportives en quête d'excellence."
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="bg-surface ghost-border group relative overflow-hidden flex flex-col"
            >
              <div className="aspect-square bg-[#0e0e0e] flex items-center justify-center p-6 relative">
                <img
                  alt={product.name}
                  className="object-cover w-full h-full mix-blend-lighten transition-transform duration-500 group-hover:scale-105"
                  src={product.image}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow border-t border-border-low">
                <h3 className="font-headline-md text-[24px] text-on-surface uppercase mb-1">
                  {product.name}
                </h3>
                <p className="font-body-md text-text-dim mb-4 text-sm flex-grow">
                  {product.description}
                </p>
                <div className="flex justify-end items-center mt-auto">
                  <a
                    className="bg-transparent border border-on-surface text-on-surface px-4 py-2 font-label-sm hover:bg-on-surface hover:text-background transition-colors uppercase text-xs inline-block"
                    href="#inscription"
                  >
                    COMMANDER
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="font-body-md text-on-surface-variant italic">
            <span className="text-primary-container font-label-sm uppercase not-italic mr-2">
              NB :
            </span>
            {SHOP_NOTE}
          </p>
          <div className="font-body-md text-on-surface-variant italic mt-2 flex flex-col items-center gap-2">
            <span className="flex items-center justify-center gap-2">
              <Icon name="location_on" className="text-primary text-sm" />
              {SHOP_CONTACT.address}
            </span>
            <span className="flex items-center justify-center gap-2">
              <Icon name="call" className="text-primary text-sm" />
              {SHOP_CONTACT.phone}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
