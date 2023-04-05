// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import en from "../../public/locales/en-US/translation.json";
import zh from "../../public/locales/zh-CN/translation.json";

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: "zh";
    // custom resources type
    resources: {
      zh: typeof zh;
      en: typeof en;
    };
    // other
  }
}