export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const centered = align === "center";
  return (
    <div
      className={`flex flex-col ${centered ? "items-center text-center" : "items-start text-left"} ${className}`}
    >
      <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface uppercase mb-4">
        {title}
      </h2>
      <div className="w-24 h-1 bg-primary-container" />
      {subtitle && (
        <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mx-auto mt-8 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
