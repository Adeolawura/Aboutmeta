const technologies = [
  {
    title: "Artificial intelligence",
    text: "Building AI experiences that help people create, connect and discover.",
  },
  {
    title: "Virtual reality",
    text: "Creating immersive experiences that bring people into new worlds.",
  },
  {
    title: "Augmented reality",
    text: "Blending digital experiences with the world around us.",
  },
];

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="bg-gray-100 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">

        <p className="mb-8 text-sm uppercase tracking-wide">
          Our technologies
        </p>

        <h2 className="max-w-5xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Our innovations give people new ways to connect
        </h2>

        <div className="mt-16 grid gap-px overflow-hidden bg-black md:grid-cols-3">

          {technologies.map((technology) => (
            <article
              key={technology.title}
              className="bg-gray-100 p-8 md:p-10"
            >
              <h3 className="text-2xl font-medium">
                {technology.title}
              </h3>

              <p className="mt-5 leading-relaxed text-gray-600">
                {technology.text}
              </p>

              <a
                href="#"
                className="mt-8 inline-block underline underline-offset-4"
              >
                Learn more →
              </a>
            </article>
          ))}

        </div>

        {/* AI section */}
        <div className="mt-24 border-t border-black pt-10">

          <p className="text-sm uppercase tracking-wide">
            AI at Meta
          </p>

          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

            <h3 className="max-w-3xl text-3xl font-medium sm:text-4xl md:text-5xl">
              Building AI experiences for everyone
            </h3>

            <a
              href="#"
              className="shrink-0 underline underline-offset-4"
            >
              Explore AI at Meta →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Technologies;