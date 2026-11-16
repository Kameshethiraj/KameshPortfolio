// 1) Trade lifecycle in the hero
const stages = [
  ["Booked", "A trade enters the platform. I support the Calypso and Quicksilver applications this happens in."],
  ["Validated", "Checks run on the trade data. I built automation that verifies live trades and flags problems early."],
  ["Confirmed", "Counterparties and downstream systems agree. I trace failed integrations and fix them in production."],
  ["Settled", "End of day closes the loop. My EOD monitoring automation alerts the team when something is off."]
];
const buttons = [...document.querySelectorAll("#stages button")];
const pill = document.getElementById("status-pill");
const bar = document.getElementById("bar");
const title = document.getElementById("stage-title");
const text = document.getElementById("stage-text");
let current = 0, timer = null;

function show(i){
  current = i;
  const [name, desc] = stages[i];
  buttons.forEach((b, n) => {
    b.classList.toggle("on", n === i);
    b.classList.toggle("past", n < i);
  });
  pill.textContent = name;
  pill.classList.toggle("done", i === stages.length - 1);
  bar.style.width = ((i + 1) / stages.length * 100) + "%";
  title.textContent = name;
  text.textContent = desc;
}
function stop(){ clearInterval(timer); timer = null; }
buttons.forEach(b => b.addEventListener("click", () => { stop(); show(+b.dataset.i); }));
show(0);
if (!matchMedia("(prefers-reduced-motion: reduce)").matches){
  timer = setInterval(() => {
    if (current === stages.length - 1) return stop();
    show(current + 1);
  }, 2600);
}

// 2) Put your real links here, then every placeholder link updates.
const LINKS = {
  github: "https://github.com/Kameshethiraj",
  linkedin: "https://www.linkedin.com/in/kamesh-ethiraj-027a24219/",
  leetcode: "https://leetcode.com/u/KameshE/",
  "github-incident": "",
  "github-resume": "https://github.com/Kameshethiraj/resume-analyzer",
  "github-food": "https://github.com/Kameshethiraj/FoodBazzar",
  "github-job": "https://github.com/Kameshethiraj/JobPortalBackend"
};
document.querySelectorAll("[data-link]").forEach(a => {
  a.href = LINKS[a.dataset.link];
  a.target = "_blank";
  a.rel = "noopener";
});
