// SVG icon components, ported 1:1 from the original.

export const Tick = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const ArrowR = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Stars = () => (
  <div className="fb-stars">
    {[0, 1, 2, 3, 4].map((i) => (
      <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.8 5.9 21.2l1.4-6.8L2.2 9.7l6.9-.7z" />
      </svg>
    ))}
  </div>
);

export const CommIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const TikTokIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16.5 3c.32 2.1 1.5 3.43 3.5 3.6v2.42c-1.2.12-2.3-.27-3.5-1v5.74c0 3.54-2.62 5.78-5.74 5.27-2.6-.43-4.28-2.62-4-5.2.27-2.42 2.4-4.13 4.9-3.9v2.5c-.5-.1-1.02-.06-1.5.12-.98.36-1.55 1.24-1.4 2.2.16.98 1.05 1.66 2.16 1.55 1.07-.1 1.78-.94 1.78-2.12V3h3.8z" />
  </svg>
);

export const YouTubeIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23 7.5a3 3 0 0 0-2.1-2.12C19 5 12 5 12 5s-7 0-8.9.38A3 3 0 0 0 1 7.5 31.3 31.3 0 0 0 .6 12 31.3 31.3 0 0 0 1 16.5a3 3 0 0 0 2.1 2.12C5 19 12 19 12 19s7 0 8.9-.38A3 3 0 0 0 23 16.5a31.3 31.3 0 0 0 .4-4.5 31.3 31.3 0 0 0-.4-4.5zM9.75 15.3V8.7L15.5 12l-5.75 3.3z" />
  </svg>
);
