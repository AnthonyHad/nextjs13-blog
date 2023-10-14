interface I18NConfig {
  defaultLocale: string;
  locales: string[];
}

export const i18n: I18NConfig = {
  defaultLocale: "en",
  locales: ["en", "de"],
};
