const Leadership = () => {
  return (
    <section
      id="leadership"
      className="bg-gray-100 px-6 py-24 sm:py-32 md:py-40"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 md:grid-cols-2 md:items-end">

          <div>
            <p className="mb-8 text-sm uppercase tracking-wide">
              Leadership
            </p>

            <h2 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Meet our leadership
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-lg leading-relaxed text-gray-600">
              Meta's leaders are guiding our company as mixed reality
              and AI evolve, helping to create the next evolution of
              digital connection.
            </p>

            <a
              href="#"
              className="mt-8 inline-block underline underline-offset-4"
            >
              Get to know our leadership →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Leadership;