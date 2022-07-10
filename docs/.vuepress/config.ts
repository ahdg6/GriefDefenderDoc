import { defineUserConfig } from "vuepress";
import theme from "./theme";
import pluginFullTextSearch from "vuepress2-plugin-full-text-search";

export default defineUserConfig({
  base: "/",
  dest: "./dist",

  locales: {
    "/": {
      lang: "en-US",
      title: "GriefDefender",
      description: "Documentation for plugin GriefDefender",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "GriefDefender",
      description: "为 GriefDefender 准备的文档",
    },
  },

  plugins: [[ pluginFullTextSearch, ]],

  theme,
});
