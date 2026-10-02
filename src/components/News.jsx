const news = [
  {
    title: "Introducing Meta One",
    description:
      "A subscription service with more features and AI to create, connect and stand out.",
  },
  {
    title: "Threads expands podcast toolkit",
    description:
      "New tools help creators and listeners discover and engage with podcasts.",
  },
  {
    title: "Introducing Muse",
    description:
      "A new personal AI experience designed to help people create and connect.",
  },
];

const News = () => {
  return (
    <section
      id="news"
      className="px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <h2 className="max-w-3xl text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
            Catch up on the latest news
          </h2>

          <a
            href="#"
            className="underline underline-offset-4"
          >
            See more at Newsroom →
          </a>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {news.map((item, index) => (
            <article key={item.title}>

              <div
                className={`flex aspect-[4/3] items-center justify-center ${
                  index === 0
                    ? "bg-blue-100"
                    : index === 1
                    ? "bg-gray-200"
                    : "bg-yellow-100"
                }`}
              >
                <span className="text-5xl font-bold">
                  {index + 1}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-medium">
                {item.title}
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                {item.description}
              </p>

              <a
                href="#"
                className="mt-6 inline-block underline underline-offset-4"
              >
                Read more →
              </a>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default News;