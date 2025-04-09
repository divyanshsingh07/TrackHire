import { useEffect, useRef } from "react";

const logos = [
  {
    name: "Google",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
    ),
  },
  {
    name: "Microsoft",
    svg: (
      <svg viewBox="0 0 23 23" className="w-8 h-8 sm:w-10 sm:h-10">
        <path fill="#F25022" d="M1 1h10v10H1z" />
        <path fill="#00A4EF" d="M12 1h10v10H12z" />
        <path fill="#7FBA00" d="M1 12h10v10H1z" />
        <path fill="#FFB900" d="M12 12h10v10H12z" />
      </svg>
    ),
  },
  {
    name: "Apple",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
        <path
          fill="currentColor"
          d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
        />
      </svg>
    ),
  },
  {
    name: "Amazon",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
        <path
          fill="currentColor"
          d="M10.115 2.093a.5.5 0 0 1 .77 0l1.73 2.1a.5.5 0 0 0 .38.17h3.85a.5.5 0 0 1 .5.5v2.5a.5.5 0 0 1-.5.5h-3.85a.5.5 0 0 0-.38.17l-1.73 2.1a.5.5 0 0 1-.77 0l-1.73-2.1a.5.5 0 0 0-.38-.17H3.5a.5.5 0 0 1-.5-.5v-2.5a.5.5 0 0 1 .5-.5h3.85a.5.5 0 0 0 .38-.17l1.73-2.1z"
        />
        <path
          fill="currentColor"
          d="M3.5 10.5a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5v-2z"
        />
        <path
          fill="currentColor"
          d="M3.5 15.5a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5v-2z"
        />
      </svg>
    ),
  },
  {
    name: "Meta",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
        <path
          fill="#0866FF"
          d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.53-4.5-10.02-10-10.02z"
        />
      </svg>
    ),
  },
  {
    name: "Netflix",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
        <path
          fill="#E50914"
          d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.913.012-22.95zM5.398 1.05V24c1.873-.225 2.81-.312 4.715-.398v-9.22z"
        />
      </svg>
    ),
  },
];

export function LogoRow() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scroll = scrollRef.current;

    if (!container || !scroll) return;

    const scrollWidth = scroll.scrollWidth;
    const containerWidth = container.clientWidth;
    const duration = 20000; // 20 seconds for one complete scroll

    const animate = () => {
      scroll.style.transform = `translateX(-${scrollWidth - containerWidth}px)`;
      scroll.style.transition = `transform ${duration}ms linear`;
    };

    const reset = () => {
      scroll.style.transform = "translateX(0)";
      scroll.style.transition = "none";
      requestAnimationFrame(animate);
    };

    scroll.addEventListener("transitionend", reset);
    animate();

    return () => {
      scroll.removeEventListener("transitionend", reset);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div ref={containerRef} className="relative w-full">
        <div
          ref={scrollRef}
          className="flex items-center space-x-8 sm:space-x-16 px-4"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[120px] sm:min-w-[150px] gap-2"
            >
              <div className="text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300">
                {logo.svg}
              </div>
              <span className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-400">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 