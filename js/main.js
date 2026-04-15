const SUPPORTED_LANGUAGES = ["en", "ar"];
const DEFAULT_LANGUAGE = "en";
const STORAGE_KEY = "rayah_language";
const cachedLocales = {};

const getNestedValue = (obj, keyPath) =>
  keyPath.split(".").reduce((value, key) => {
    if (value && Object.prototype.hasOwnProperty.call(value, key)) {
      return value[key];
    }
    return undefined;
  }, obj);

const getQueryLanguage = () => {
  const lang = new URLSearchParams(window.location.search).get("lang");
  return SUPPORTED_LANGUAGES.includes(lang) ? lang : null;
};

const getPathLanguage = () => {
  const segments = window.location.pathname.split("/").filter(Boolean);
  return segments.includes("ar") ? "ar" : null;
};

const getStoredLanguage = () => {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return SUPPORTED_LANGUAGES.includes(stored) ? stored : null;
};

const getInitialLanguage = () =>
  getQueryLanguage() || getPathLanguage() || getStoredLanguage() || DEFAULT_LANGUAGE;

const getLocaleFilePaths = (language) => [
  `./locales/${language}.json`,
  `/locales/${language}.json`,
];

const loadLocale = async (language) => {
  if (cachedLocales[language]) {
    return cachedLocales[language];
  }

  for (const path of getLocaleFilePaths(language)) {
    try {
      const response = await fetch(path, { cache: "no-store" });
      if (!response.ok) continue;
      const locale = await response.json();
      cachedLocales[language] = locale;
      return locale;
    } catch (_) {
      // try next path
    }
  }

  if (
    window.RAYAH_LOCALES &&
    Object.prototype.hasOwnProperty.call(window.RAYAH_LOCALES, language)
  ) {
    cachedLocales[language] = window.RAYAH_LOCALES[language];
    return cachedLocales[language];
  }

  throw new Error(`Unable to load locale file for "${language}"`);
};

const getTranslation = (key, activeLocale, fallbackLocale) => {
  const activeValue = getNestedValue(activeLocale, key);
  if (activeValue !== undefined) return activeValue;

  const fallbackValue = getNestedValue(fallbackLocale, key);
  if (fallbackValue !== undefined) return fallbackValue;

  return "";
};

const applyDocumentLanguage = (language) => {
  const root = document.documentElement;
  const isArabic = language === "ar";

  root.lang = language;
  root.dir = isArabic ? "rtl" : "ltr";
  root.classList.toggle("is-rtl", isArabic);
  document.body.classList.toggle("is-rtl", isArabic);
};

const applyTextTranslations = (activeLocale, fallbackLocale) => {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (!key) return;
    const value = getTranslation(key, activeLocale, fallbackLocale);
    if (value) element.textContent = value;
  });
};

const applyPlaceholderTranslations = (activeLocale, fallbackLocale) => {
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (!key) return;
    const value = getTranslation(key, activeLocale, fallbackLocale);
    if (value) element.setAttribute("placeholder", value);
  });
};

const applyAttributeTranslations = (activeLocale, fallbackLocale) => {
  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const mappings = element.getAttribute("data-i18n-attr");
    if (!mappings) return;

    mappings.split(",").forEach((entry) => {
      const [attributeName, key] = entry.split(":").map((part) => part.trim());
      if (!attributeName || !key) return;
      const value = getTranslation(key, activeLocale, fallbackLocale);
      if (value) element.setAttribute(attributeName, value);
    });
  });
};

const updateUrlLanguage = (language) => {
  const url = new URL(window.location.href);
  if (language === "ar") {
    url.searchParams.set("lang", "ar");
  } else {
    url.searchParams.delete("lang");
  }
  window.history.replaceState({}, "", url.toString());
};

const rewriteNavigationLinks = (language) => {
  document.querySelectorAll("a[href]").forEach((link) => {
    const baseHref = link.dataset.baseHref || link.getAttribute("href");
    if (!baseHref || baseHref.startsWith("#")) return;
    if (/^(https?:|mailto:|tel:|javascript:)/i.test(baseHref)) return;

    if (!link.dataset.baseHref) {
      link.dataset.baseHref = baseHref;
    }

    const target = new URL(link.dataset.baseHref, window.location.href);
    if (language === "ar") {
      target.searchParams.set("lang", "ar");
    } else {
      target.searchParams.delete("lang");
    }
    link.setAttribute("href", target.toString());
  });
};

const updateLanguageButtons = (language) => {
  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    const isActive = button.getAttribute("data-lang-switch") === language;
    button.setAttribute("aria-pressed", String(isActive));
    button.classList.toggle("lang-switch-active", isActive);
  });
};

const SHARED_PARTIAL_TO_LAYOUT_KEY = {
  "./partials/navbar.html": "navbar",
  "./partials/footer.html": "footer",
};

const getSharedLayoutHtml = (path) => {
  const key = SHARED_PARTIAL_TO_LAYOUT_KEY[path];
  if (!key) return "";
  const sharedLayout = window.RAYAH_SHARED_LAYOUT || {};
  return sharedLayout[key] || "";
};

const loadSharedPartials = async () => {
  const placeholders = Array.from(document.querySelectorAll("[data-shared-partial]"));

  await Promise.all(
    placeholders.map(async (placeholder) => {
      const path = placeholder.getAttribute("data-shared-partial");
      if (!path) return;

      try {
        const response = await fetch(path, { cache: "no-store" });
        if (!response.ok) throw new Error(`Failed to load ${path}`);
        const html = await response.text();
        placeholder.outerHTML = html;
      } catch (error) {
        const fallbackHtml = getSharedLayoutHtml(path);
        if (fallbackHtml) {
          placeholder.outerHTML = fallbackHtml;
          return;
        }
        console.error("Unable to load shared partial:", error);
      }
    })
  );
};

const applyLanguage = async (language) => {
  const normalizedLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE;
  window.localStorage.setItem(STORAGE_KEY, normalizedLanguage);
  updateUrlLanguage(normalizedLanguage);

  const fallbackLocale = await loadLocale(DEFAULT_LANGUAGE);
  const activeLocale =
    normalizedLanguage === DEFAULT_LANGUAGE
      ? fallbackLocale
      : await loadLocale(normalizedLanguage).catch(() => fallbackLocale);

  applyDocumentLanguage(normalizedLanguage);
  applyTextTranslations(activeLocale, fallbackLocale);
  applyPlaceholderTranslations(activeLocale, fallbackLocale);
  applyAttributeTranslations(activeLocale, fallbackLocale);
  rewriteNavigationLinks(normalizedLanguage);
  updateLanguageButtons(normalizedLanguage);
};

const registerLanguageSwitches = () => {
  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    button.addEventListener("click", async () => {
      const language = button.getAttribute("data-lang-switch");
      if (!language) return;
      await applyLanguage(language);
    });
  });
};

document.addEventListener("DOMContentLoaded", async () => {
  await loadSharedPartials();
  registerLanguageSwitches();
  await applyLanguage(getInitialLanguage());
});
