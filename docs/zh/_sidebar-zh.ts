import { defineSidebarConfig } from "vuepress-theme-hope";

export const zh = defineSidebarConfig({
	"/zh/resources/": require("./resources/sidebar"),
	"/zh/hooks/": require("./hooks/sidebar"),
	"/zh/": [
        "/zh/",
        {
          text: "开始",
          icon: "fa-solid fa-wrench",
          prefix: "/zh/guide/",
		  collapsable: false,
          children: ["", "install", "commands", "permissions"],
        },
		{
		  text: "基础",
		  icon: "fa-solid fa-laptop-code",
		  prefix: "/zh/guide/basic/",
		  children: ["claim-management", "claim-types", "custom-alias-creation",
		  "flag-definitions-gui", "options", "pvp", "tags", "trust-system", "claim-rent-system"],
		},
		{
		  text: "进阶",
		  icon: "fa-solid fa-grid",
		  prefix: "/zh/guide/advanced/",
		  children: ["contexts", "debugging", "flags", "global-config"],
		},
		{
		  text: "迁移",
		  icon: "fas fa-file-arrow-up",
		  collapsable: false,
		  prefix: "/zh/guide/migration/",
		  children: ["griefprevention", "worldguard"],
		},
		{
		  text: "联动",
		  icon: "fas fa-plug",
		  prefix: "/zh/hooks/",
		  children: ["gdhooks", "dynmap", "placeholder", "wecui"],
		},
    ],
});