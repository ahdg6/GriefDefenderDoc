import { defineNavbarConfig } from "vuepress-theme-hope";

export const zh = defineNavbarConfig([
  { text: "主页", link: "/zh/", icon: "fas fa-home" },
  { text: "文档", link: "/zh/guide/", icon: "fas fa-book" },
  { text: "插件联动", link: "https://github.com/bloodmc/GDHooks", icon: "fas fa-plug"},
  { text: "API", link: "https://github.com/bloodmc/GriefDefenderAPI", icon: "fas fa-code" },
  {
	text: "购买支持",
    icon: "fas fa-headset",
    children: [
	  { text: "Patreon", link: "https://www.patreon.com/bloodmc" },
      { text: "Spigot", link: "https://www.spigotmc.org/resources/griefdefender.68900/" }
	]
  },
]);
