const translatedElements = document.querySelectorAll("[data-i18n]");
const translatedAriaElements = document.querySelectorAll("[data-i18n-aria]");
const languageButtons = document.querySelectorAll("[data-lang]");

// The static Russian HTML is also the Russian translation source.
const russianStrings = Object.fromEntries([
  ...Array.from(translatedElements, (el) => [el.dataset.i18n, el.textContent.trim()]),
  ...Array.from(translatedAriaElements, (el) => [el.dataset.i18nAria, el.getAttribute("aria-label")]),
  ["documentTitle", document.title],
  ["description", document.querySelector('meta[name="description"]').content],
]);
const translations = {
  ru: russianStrings,
  en: {
    name: "Dmitry Glukhov",
    skip: "Skip to content",
    availability: "Coimbra · Portugal · Remote",
    controls: "Page controls",
    language: "Language",
    profileDetails: "Profile details",
    download: "Download",
    downloadDataPdf: "AI Data Engineer · PDF (RU)",
    downloadArchitectPdf: "AI Solutions Architect · PDF (RU)",
    downloadDataMd: "AI Data Engineer · Markdown (RU)",
    downloadArchitectMd: "AI Solutions Architect · Markdown (RU)",
    heroStatement: "LLM systems, data architecture and numerical modeling.",
    contactHeading: "Contact",
    location: "Coimbra, Portugal · Europe/Lisbon",
    educationHeading: "Education",
    university: "Kazan National Research Technological University",
    degree: "Candidate of Sciences in Chemistry (PhD-equivalent)",
    skillsHeading: "Tools",
    developmentHeading: "Development",
    aiHeading: "AI systems",
    aiTools: "LLM APIs · embeddings · cache contracts · automated tests",
    analyticsHeading: "Data and modeling",
    summaryHeading: "Profile",
    summaryLead: "I build data pipelines and LLM systems: source ingestion, SQL storage, processing stages and result validation.",
    summaryBody: "My research experience covers numerical modeling, programming and the analysis of computational experiments. I am interested in AI Data Engineer and hands-on AI Solutions Architect roles.",
    experienceHeading: "Work experience",
    researchTitle: "Senior Researcher",
    researchOne: "Personally performed the computational work for scientific publications: Python, Fortran and MATLAB code, calculations in specialized software, data processing and analysis.",
    researchTwo: "Ran DFT, Monte Carlo and molecular dynamics calculations; compared results with experiments and examined parameter sensitivity and model limitations.",
    researchThree: "Wrote a MATLAB model of cysteine self-assembly on gold, defining states and probabilistic rules. Ran simulations of up to 8 million steps and checked the effect of lattice size.",
    researchPaper: "Nanoscale publication, 2019",
    projectsHeading: "Engineering experience",
    projectsIntro: "Self-directed projects: system design, implementation and validation.",
    chatArea: "LLM / SQL",
    dataArea: "Data",
    catalogArea: "Catalogs",
    chatOne: "Implemented message ingestion and updates with normalization, parameterized SQL UPSERTs, tracking of new and changed records, and batched SQLite writes.",
    chatTwo: "Separated raw messages, a semantic knowledge representation and an application graph layer. Connected staged LLM processing with context preparation.",
    chatThree: "Added model and output-schema checks for cache reuse, API timeouts and retries, stage status tracking and tests for consistent pipeline stopping.",
    projectOverview: "Public project overview",
    realityOne: "Separated the source-event ledger from analytical snapshots. Defined data contracts, source references and reproducible snapshot identifiers.",
    realityTwo: "Separated historical and operational queries using publication and ingestion times.",
    realityThree: "Wrote tests that exclude future information from historical queries, reject records without a source and verify reproducible processing.",
    timeOne: "Combined heterogeneous media catalogs into a shared model with source provenance, date precision and rights metadata.",
    timeTwo: "Implemented transactional imports, a full-text index and a data manifest for the web application, with consistency checks for aggregate statistics.",
    timeThree: "Distinguished source historical records from reconstructed events.",
    demo: "Demo",
    publicRelease: "Public release",
    moreProjects: "More projects and technical descriptions",
    footer: "AI/data engineering and hands-on LLM systems architecture.",
    documentTitle: "Dmitry Glukhov | AI / Data Engineer",
    description: "Dmitry Glukhov: AI and data engineering, LLM systems architecture and scientific computing. Experience, projects and CVs.",
  },
};

function setLanguage(language, updateUrl = true) {
  const selectedLanguage = Object.hasOwn(translations, language) ? language : "ru";
  const strings = translations[selectedLanguage];
  document.documentElement.lang = selectedLanguage;
  document.title = strings.documentTitle;
  document.querySelector('meta[name="description"]').content = strings.description;
  document.querySelector('meta[property="og:title"]').content = strings.documentTitle;
  document.querySelector('meta[property="og:description"]').content = strings.description;

  translatedElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (Object.hasOwn(strings, key)) element.textContent = strings[key];
  });
  translatedAriaElements.forEach((element) => {
    const key = element.dataset.i18nAria;
    if (Object.hasOwn(strings, key)) element.setAttribute("aria-label", strings[key]);
  });
  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === selectedLanguage));
  });
  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", selectedLanguage);
    window.history.replaceState({}, "", url);
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});
const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
setLanguage(requestedLanguage || "ru", Boolean(requestedLanguage));
window.addEventListener("popstate", () => {
  setLanguage(new URLSearchParams(window.location.search).get("lang") || "ru", false);
});
document.getElementById("current-year").textContent = new Date().getFullYear();

const downloadMenu = document.querySelector(".download-menu");
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && downloadMenu.open) {
    downloadMenu.open = false;
    downloadMenu.querySelector("summary").focus();
  }
});
document.addEventListener("click", (event) => {
  if (!downloadMenu.contains(event.target)) downloadMenu.open = false;
});
