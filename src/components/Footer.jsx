const Footer = () => {
  return (
    <footer className="bg-black px-6 py-16 text-white">

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <div className="text-3xl font-bold">
              meta
            </div>

            <p className="mt-6 max-w-xs text-sm leading-relaxed text-gray-400">
              We're building the future of human connection.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-medium">
              Explore
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a href="#mission">Our mission</a>
              <a href="#technologies">Our technologies</a>
              <a href="#news">News</a>
              <a href="#actions">Our actions</a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-medium">
              Company
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a href="#leadership">Leadership</a>
              <a href="#">Careers</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-medium">
              Follow
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Threads</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-gray-800 pt-8 text-sm text-gray-500">
          © 2026 Meta
        </div>

      </div>

    </footer>
  );
};

export default Footer;