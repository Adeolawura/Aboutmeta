

const devices = [
  {
    title: "Ray-Ban Meta AI glasses",
    description:
      "Capture, share and stay in the moment, completely hands-free.",
    bg: "bg-gray-200",
  },
  {
    title: "Meta Quest 3S",
    description:
      "Dive into the wonder of mixed reality with the new Meta Quest 3S.",
    bg: "bg-purple-100",
  },
];

const Devices = () => {
  return (
    <section className="bg-black px-6 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl">

        <h2 className="max-w-4xl text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
          Shop the latest devices and expand your world
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {devices.map((device) => (
            <article key={device.title}>

              <div
                className={`flex aspect-[4/3] items-center justify-center ${device.bg}`}
              >
                <div className="text-center text-black">
                  <div className="text-6xl font-bold">
                    M
                  </div>
                  <p className="mt-2 text-sm">
                    Meta device
                  </p>
                </div>
              </div>

              <h3 className="mt-6 text-2xl font-medium">
                {device.title}
              </h3>

              <p className="mt-3 max-w-lg text-gray-400">
                {device.description}
              </p>

              <a
                href="#"
                className="mt-6 inline-block underline underline-offset-4"
              >
                Shop now →
              </a>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Devices;