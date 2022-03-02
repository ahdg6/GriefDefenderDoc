import { defineNavbarConfig } from "vuepress-theme-hope";

export const en = defineNavbarConfig([
  { text: "Project Home", link: "/", icon: "fas fa-home" },
  { text: "Wiki", link: "https://github.com/bloodmc/GriefDefender/wiki/", icon: "fas fa-book" },
  { text: "Hooks", link: "https://github.com/bloodmc/GDHooks", icon: "fas fa-plug"},
  { text: "API", link: "https://github.com/bloodmc/GriefDefenderAPI", icon: "fas fa-code" },
  {
	text: "Support",
    icon: "fas fa-headset",
    children: [
	  { text: "Patreon", link: "https://www.patreon.com/bloodmc" },
      { text: "Spigot", link: "https://www.spigotmc.org/resources/griefdefender.68900/" }
	]
  },
]);
