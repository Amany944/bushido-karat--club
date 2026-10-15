const FOOTER_LINKS = [
  { label: "MENTIONS LÉGALES", href: "#" },
  { label: "POLITIQUE DE CONFIDENTIALITÉ", href: "#" },
  { label: "CONTACT (WhatsApp)", href: "https://wa.me/242066781995", target: "_blank" },
  { label: "APPELER", href: "tel:+242066781995" },
  { label: "DOJO", href: "#dojos" },
];

export default function Footer() {
  return (
    <footer className="w-full py-margin-md px-margin-sm md:px-margin-lg flex flex-col md:flex-row justify-between items-center gap-6 md:gap-unit bg-surface-container-lowest border-t border-outline-variant">
      <div className="font-headline-md text-primary opacity-80 hover:opacity-100 transition-opacity">
        BUSHIDO KARATÉ CLUB
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {FOOTER_LINKS.map((link) => (
          <a
            key={link.label}
            className="font-body-md text-body-md text-text-dim hover:text-primary transition-colors"
            href={link.href}
            {...(link.target && { target: link.target, rel: "noopener noreferrer" })}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="font-label-sm text-label-sm text-text-dim text-center md:text-right">
        © 2026 BUSHIDO KARATÉ CLUB. DISCIPLINE &amp; RESPECT.
        <span className="tracking-widest"> | MBOUNGOU Christ Amany</span>
      </div>
    </footer>
  );
}
