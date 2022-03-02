import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";
import pluginFullTextSearch from "vuepress2-plugin-full-text-search";
import pluginRightAnchor from "vuepress-plugin-right-anchor";

const base = (process.env.BASE as "/" | `/${string}/`) || "/";

export default defineHopeConfig({
  base,

  dest: "./dist",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
    [
      "script",
      {
        src: "https://kit.fontawesome.com/ca37c296c5.js",
        crossorigin: "anonymous",
      },
    ],
  ],

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
  
  plugins: [[ pluginFullTextSearch, pluginRightAnchor, ]],

  themeConfig,
});
