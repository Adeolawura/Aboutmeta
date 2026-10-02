const actions = [
  {
    title: "Safety and expression",
    description:
      "Protecting your voice and helping you connect and share safely.",
    number: "01",
  },
  {
    title: "Data and privacy",
    description:
      "Giving you control over your privacy and protecting your information.",
    number: "02",
  },
  {
    title: "Responsible innovation",
    description:
      "Building for the future with privacy and safety in mind.",
    number: "03",
  },
];

const Actions = () => {
  return (
    <section
      id="actions"
      className="px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">

        <div className="max-w-4xl">

          <p className="mb-8 text-sm uppercase tracking-wide">
            Our actions
          </p>

          <h2 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
            We're committed to helping keep everyone safe and making a
            positive impact
          </h2>

        </div>

        <a
          href="#"
          className="mt-10 inline-block underline underline-offset-4"
        >
          Learn more →
        </a>

        <div className="mt-20 border-t border-black">

          {actions.map((action) => (
            <article
              key={action.title}
              className="grid gap-6 border-b border-black py-10 md:grid-cols-[100px_1fr_1fr] md:items-start"
            >

              <span className="text-sm text-gray-500">
                {action.number}
              </span>

              <h3 className="text-2xl font-medium md:text-3xl">
                {action.title}
              </h3>

              <p className="max-w-md leading-relaxed text-gray-600">
                {action.description}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Actions;