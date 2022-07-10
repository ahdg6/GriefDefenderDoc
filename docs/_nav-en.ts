import { navbar } from "vuepress-theme-hope";

export const en = navbar([
  { text: "Project Home", link: "/", icon: "home" },
  { text: "Wiki", link: "https://github.com/bloodmc/GriefDefender/wiki", icon: "edit" },
  { text: "Hooks", link: "https://github.com/bloodmc/GDHooks", icon: "plugin"},
  { text: "API", link: "https://github.com/bloodmc/GriefDefenderAPI", icon: "code" },
  {
	text: "Support",
    icon: "play",
    children: [
	  { text: "Patreon", link: "https://www.patreon.com/bloodmc" },
      { text: "Spigot", link: "https://www.spigotmc.org/resources/griefdefender.68900" }
	]
  },
]);
