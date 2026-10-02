import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-tight">
          meta
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#mission" className="text-sm hover:underline">
            Our mission
          </a>

          <a href="#technologies" className="text-sm hover:underline">
            Our technologies
          </a>

          <a href="#news" className="text-sm hover:underline">
            News
          </a>

          <a href="#actions" className="text-sm hover:underline">
            Our actions
          </a>

          <a href="#leadership" className="text-sm hover:underline">
            Leadership
          </a>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t bg-white px-6 py-6 md:hidden">
          <div className="flex flex-col gap-6">
            <a
              href="#mission"
              onClick={() => setMenuOpen(false)}
            >
              Our mission
            </a>

            <a
              href="#technologies"
              onClick={() => setMenuOpen(false)}
            >
              Our technologies
            </a>

            <a
              href="#news"
              onClick={() => setMenuOpen(false)}
            >
              News
            </a>

            <a
              href="#actions"
              onClick={() => setMenuOpen(false)}
            >
              Our actions
            </a>

            <a
              href="#leadership"
              onClick={() => setMenuOpen(false)}
            >
              Leadership
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;