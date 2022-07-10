import { defineNavbarConfig } from "vuepress-theme-hope";

export const zh = defineNavbarConfig([
  { text: "主页", link: "/zh/", icon: "home" },
  { text: "文档", link: "/zh/guide/", icon: "edit" },
  { text: "插件联动", link: "https://github.com/bloodmc/GDHooks", icon: "plugin"},
  { text: "API", link: "https://github.com/bloodmc/GriefDefenderAPI", icon: "code" },
  {
	text: "购买支持",
    icon: "play",
    children: [
	  { text: "Patreon", link: "https://www.patreon.com/bloodmc" },
      { text: "Spigot", link: "https://www.spigotmc.org/resources/griefdefender.68900/" }
	]
  },
]);
