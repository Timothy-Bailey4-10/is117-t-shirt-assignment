// Exploration B only: fade the shirt in after the whole page has loaded.
document.documentElement.classList.add("pomo-js");
window.addEventListener("load", () => {
  document.documentElement.classList.add("pomo-loaded");
});

// Preview-only size check; the real demo bag lives on the storefront.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#pomo-form");
  const status = document.querySelector("#pomo-error");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const size = new FormData(form).get("size");
    status.classList.toggle("is-error", !size);
    status.textContent = size
      ? `Size ${size} added (preview only — the real demo bag is on the storefront).`
      : "Choose a size before adding the shirt to your bag.";
  });
});
