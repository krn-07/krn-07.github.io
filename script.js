const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Theme toggle
(() => {
  const btn = document.querySelector(".theme-indicator");
  const icon = btn?.querySelector("span");
  if (!btn || !icon) return;

  const STORAGE_KEY = "theme";

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    icon.textContent = theme === "dark" ? "☀" : "☾";
    btn.setAttribute("aria-label", theme === "dark" ? "Light mode" : "Dark mode");
  }

  // Determine initial theme: saved > system preference > light
  const saved = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = saved || (prefersDark ? "dark" : "light");
  applyTheme(initial);

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  });
})();

// Scroll animations
(() => {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const els = document.querySelectorAll("[data-animate]");
  if (!els.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  els.forEach((el, i) => {
    el.style.transitionDelay = `${i * 80}ms`;
    observer.observe(el);
  });
})();
