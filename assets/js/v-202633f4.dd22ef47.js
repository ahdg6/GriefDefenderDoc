"use strict";(self.webpackChunkgriefdefender=self.webpackChunkgriefdefender||[]).push([[6544],{7150:(e,n,r)=>{r.r(n),r.d(n,{data:()=>a});const a={key:"v-202633f4",path:"/zh/guide/migration/griefprevention.html",title:"GriefPrevention",lang:"zh-CN",frontmatter:{title:"GriefPrevention",category:["Migration"],summary:":warning: Before using GriefPrevention migrator, backup your data (including LuckPerms). It is recommended to test migration on a test server before applying to production to ensur",head:[["meta",{property:"og:url",content:"https://bloodmc.github.io/GrierDefenderDoc/GriefDefenderDoc/zh/guide/migration/griefprevention.html"}],["meta",{property:"og:title",content:"GriefPrevention"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}]],tag:["Merge"]},excerpt:"",headers:[{level:2,title:"Bukkit",slug:"bukkit",children:[{level:3,title:"GriefDefender supports a complete migration from GriefPrevention Bukkit. To migrate to GriefDefender, perform the following steps",slug:"griefdefender-supports-a-complete-migration-from-griefprevention-bukkit-to-migrate-to-griefdefender-perform-the-following-steps",children:[]}]},{level:2,title:"Sponge",slug:"sponge",children:[]}],git:{createdTime:1646753834e3,updatedTime:1646753834e3,contributors:[{name:"ahdg6",email:"ahdg6@outlook.com",commits:1}]},readingTime:{minutes:2.94,words:881},filePathRelative:"zh/guide/migration/griefprevention.md"}},5421:(e,n,r)=>{r.r(n),r.d(n,{default:()=>P});var a=r(6252);const t=(0,a.Uk)("⚠️ Before using GriefPrevention migrator, backup your data (including LuckPerms)."),s=(0,a._)("br",null,null,-1),i=(0,a.Uk)(" It is recommended to test migration on a test server before applying to production to ensure everything works as expected."),o=(0,a._)("br",null,null,-1),l=(0,a.Uk)(" ⚠️ All player data that contains accrued claim blocks and bonus claim blocks will be stored as meta in LuckPerms when migrator is finished."),c=(0,a._)("br",null,null,-1),p=(0,a.Uk)(" ⚠️ Converting a GP SQL Database back to file storage can be done with the python script found "),d={href:"https://gist.github.com/ar00n/f1ac69dd52554e56f012c8d631bed5d7",target:"_blank",rel:"noopener noreferrer"},u=(0,a.Uk)("here"),m=(0,a.Uk)(", alter the database connection details in the script."),b=(0,a._)("br",null,null,-1),g=(0,a.Uk)(" Accrued claim blocks will use meta key "),f=(0,a._)("code",null,"griefdefender.accrued-blocks",-1),h=(0,a._)("br",null,null,-1),k=(0,a.Uk)(" Bonus claim blocks will use meta key "),v=(0,a._)("code",null,"griefdefender.bonus-blocks",-1),y=(0,a._)("br",null,null,-1),G=(0,a.Uk)(" See https://github.com/lucko/LuckPerms/wiki/Prefixes,-Suffixes-&-Meta#meta for more info"),w=(0,a.uE)('<h2 id="bukkit" tabindex="-1"><a class="header-anchor" href="#bukkit" aria-hidden="true">#</a> Bukkit</h2><h3 id="griefdefender-supports-a-complete-migration-from-griefprevention-bukkit-to-migrate-to-griefdefender-perform-the-following-steps" tabindex="-1"><a class="header-anchor" href="#griefdefender-supports-a-complete-migration-from-griefprevention-bukkit-to-migrate-to-griefdefender-perform-the-following-steps" aria-hidden="true">#</a> GriefDefender supports a complete migration from GriefPrevention Bukkit. To migrate to GriefDefender, perform the following steps</h3><ol><li>Add GriefDefender jar to plugins</li><li>Remove GriefPrevention jar from plugins</li><li>Start the server to generate GriefDefender configs.</li><li>Stop server</li><li>Edit global.conf under ./plugins/GriefDefender/</li><li>Locate section</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># List of migrators that convert old or other protection data into the current GD claim data format.\n# Note: It is recommended to backup data before using.\nmigrator {\n    # Set to true to enable the classic migrator.\n    # Note: Migrates GP bukkit classic claim data and GPFlags data, if available, to current format.\n    # Note: It is recommended to backup data before using.\n    classic=false\n    # Set to true to enable the legacy playerdata file migrator.\n    # Note: Migrates legacy playerdata file format to permissions storage such as LuckPerms json or mysql storage.\n    # Note: Before turning this on, make sure you properly set &#39;context-storage-type&#39; in the the playerdata section of this config.\n    # Note: It is HIGHLY recommended to backup your permissions database before running this migrator as all local playerdata files will be migrated to it.\n    # Note: Do NOT run this migrator on more than one server if multiple servers share the same permissions database.\n    playerdata=false\n    # Set to true to enable WorldGuard data migrator.\n    # Note: Only cuboid regions are supported.\n    # Note: It is recommended to backup data before using.\n    worldguard=false\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ol start="7"><li>Set classic to <code>true</code></li><li>Start Server<br> If done properly, GriefDefender will migrate all data from <code>plugins/GriefPreventionData</code> to <code>plugins/GriefDefender</code>.<br> Migration output should appear in console as it is migrating.</li><li>Disable the migrator in <code>global.conf</code></li></ol><h2 id="sponge" tabindex="-1"><a class="header-anchor" href="#sponge" aria-hidden="true">#</a> Sponge</h2><p>⚠️ The migrator will not copy the <code>global.conf</code> as there have been many changes to it in GriefDefender. You will have to manually copy the settings you want from GP&#39;s <code>global.conf</code> to GD.</p><ol><li>Add GriefDefender jar to mods or plugins folder</li><li>Remove GriefPrevention jar from mods/plugins folder</li><li>Start the server to generate GriefDefender configs.</li><li>Stop server</li><li>Edit global.conf under ./plugins/GriefDefender/</li><li>Locate section</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># List of migrators that convert old or other protection data into the current GD claim data format.\n# Note: It is recommended to backup data before using.\nmigrator {\n    # Set to true to enable the griefprevention bukkit migrator.\n    # Note: Migrates GP bukkit classic claim data and GPFlags data, if available, to current format.\n    # Note: It is recommended to backup data before using.\n    griefprevention-bukkit=false\n    # Set to true to enable the griefprevention sponge migrator.\n    # Note: Migrates GP sponge claim data to current format.\n    # Note: It is recommended to backup data before using.\n    griefprevention-sponge=false\n    # Set to true to enable the legacy playerdata file migrator.\n    # Note: Migrates legacy playerdata file format to permissions storage such as LuckPerms json or mysql storage.\n    # Note: Before turning this on, make sure you properly set &#39;context-storage-type&#39; in the the playerdata section of this config.\n    # Note: It is HIGHLY recommended to backup your permissions database before running this migrator as all local playerdata files will be migrated to it.\n    # Note: Do NOT run this migrator on more than one server if multiple servers share the same permissions database.\n    playerdata=false\n    # Set to true to enable RedProtect data migrator.\n    # Note: All RedProtect data will be converted into basic claim data.\n    red-protect=false\n    # Set to true to enable WorldGuard data migrator.\n    # Note: Only cuboid regions are supported.\n    # Note: It is recommended to backup data before using.\n    worldguard=false\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><ol start="7"><li>Set <code>griefprevention-sponge</code> to <code>true</code></li><li>Set &#39;playerdata&#39; to true.<br> Note: Make sure to read the comment carefully as there are things to check before turning on the migrator.</li><li>Locate section</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>playerdata {\n    # Determines which claim block system to use for claims. (Default: AREA)\n    # If set to VOLUME, claim blocks will use the chunk count system to balance 3d claiming.\n    # If set to AREA, the standard 2d block count system will be used.\n    claim-block-system=AREA\n    # The context type used when storing playerdata within a permissions database.\n    # Available types are : global, server, world. (Default: global)\n    # Global will store data globally shared by all servers.\n    # Server will store data per server. Note: This requires servername to be properly set in permissions config.\n    # World will store data per world.\n    context-storage-type=global\n    ...\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol start="10"><li><code>context-storage-type</code> needs to be set to <code>global</code>, <code>server</code>, or <code>world</code>. Read comment for more information.</li><li>Start server<br> If done properly, GriefDefender will migrate all data from <code>plugins/GriefPreventionData</code> to <code>plugins/GriefDefender</code> including permission data.<br> Migration output should appear in console as it is migrating.</li><li>Disable the migrator in <code>global.conf</code></li></ol>',12),D={},P=(0,r(3744).Z)(D,[["render",function(e,n){const r=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("p",null,[t,s,i,o,l,c,p,(0,a._)("a",d,[u,(0,a.Wm)(r)]),m,b,g,f,h,k,v,y,G]),w],64)}]])}}]);