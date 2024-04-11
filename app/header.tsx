"use client";

import useScrollPosition from "@react-hook/window-scroll";

export const Header: React.FC = () => {
  const scrollY = useScrollPosition(60);
  const logoScale = 1 - Math.min(scrollY, 50) / 250;

  return (
    <header className="pt-4 pb-2 bg-white">
      <svg
        className="fixed z-10 left-4 top-4"
        aria-label="Vercel Logo"
        viewBox="0 0 75 65"
        style={{ transform: `scale(${logoScale})` }}
        height="22"
      >
        <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
      </svg>

      <nav className="flex flex-row pl-12">
        <ul>
          <li className="flex flex-row">
            <svg
              data-testid="geist-icon"
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
              style={{
                color: "hsl(var(--border))",
                width: "22px",
                height: "22px",
              }}
            >
              <path d="M16.88 3.549L7.12 20.451"></path>
            </svg>
            <p className="leading-7  font-semibold">Cornevin's projects</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};
