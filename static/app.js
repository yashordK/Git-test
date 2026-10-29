const search = document.getElementById("search");
const chips = document.getElementById("chips");
const cards = [...document.querySelectorAll(".card")];
const empty = document.getElementById("empty");
const count = document.getElementById("count");
let activeLang = "";

// Give every avatar a stable gradient based on the student's name.
function hue(str) {
  let h = 0;
  for (const c of str) h = (h * 31 + c.charCodeAt(0)) % 360;
  return h;
}
cards.forEach((card) => {
  const av = card.querySelector(".avatar");
  const h = hue(av.dataset.seed);
  av.style.background = `linear-gradient(135deg, hsl(${h} 70% 55%), hsl(${(h + 50) % 360} 70% 45%))`;
  const img = av.querySelector("img");
  if (img) {
    img.addEventListener("error", () => img.remove());
    img.addEventListener("load", () => av.classList.add("has-img"));
  }
});

function apply() {
  const q = search.value.trim().toLowerCase();
  let shown = 0;
  cards.forEach((card) => {
    const ok =
      card.dataset.text.includes(q) &&
      (!activeLang || card.dataset.lang === activeLang);
    card.hidden = !ok;
    if (ok) shown++;
  });
  count.textContent = shown;
  empty.hidden = shown !== 0;
}

search.addEventListener("input", apply);
chips.addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  activeLang = btn.dataset.lang;
  chips.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === btn));
  apply();
});

// Dark mode, remembered between visits.
const root = document.documentElement;
try {
  const saved = localStorage.getItem("theme");
  if (saved) root.dataset.theme = saved;
} catch (e) {}
document.getElementById("theme").addEventListener("click", () => {
  const dark =
    root.dataset.theme === "dark" ||
    (!root.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
  root.dataset.theme = dark ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
});
