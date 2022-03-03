"use strict";(self.webpackChunkgriefdefender=self.webpackChunkgriefdefender||[]).push([[3807],{5234:(e,n,r)=>{r.r(n),r.d(n,{data:()=>a});const a={key:"v-ddff3aac",path:"/zh/guide/migration/worldguard.html",title:"WorldGuard",lang:"zh-CN",frontmatter:{title:"WorldGuard",category:["Migration"],summary:":warning: Before using WorldGuard migrator, backup your data (including LuckPerms). It is recommended to test migration on a test server before applying to production to ensure eve",head:[["meta",{property:"og:url",content:"https://bloodmc.github.io/GrierDefenderDoc/GriefDefenderDoc/zh/guide/migration/worldguard.html"}],["meta",{property:"og:title",content:"WorldGuard"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}]]},excerpt:"",headers:[{level:3,title:"GriefDefender supports a migration of cuboid regions from WorldGuard. To migrate to GriefDefender, perform the following steps",slug:"griefdefender-supports-a-migration-of-cuboid-regions-from-worldguard-to-migrate-to-griefdefender-perform-the-following-steps",children:[]},{level:3,title:"Current Limitations",slug:"current-limitations",children:[]},{level:3,title:"The following flags do not support migration but can be handled via GD's API",slug:"the-following-flags-do-not-support-migration-but-can-be-handled-via-gd-s-api",children:[]},{level:2,title:"Migration Steps",slug:"migration-steps",children:[]}],git:{createdTime:1646296717e3,updatedTime:1646296717e3,contributors:[{name:"ahdg",email:"ahdg6@outlook.com",commits:1}]},readingTime:{minutes:1.02,words:306},filePathRelative:"zh/guide/migration/worldguard.md"}},7785:(e,n,r)=>{r.r(n),r.d(n,{default:()=>i});const a=(0,r(6252).uE)('<p>⚠️ Before using WorldGuard migrator, backup your data (including LuckPerms). It is recommended to test migration on a test server before applying to production to ensure everything works as expected.</p><h3 id="griefdefender-supports-a-migration-of-cuboid-regions-from-worldguard-to-migrate-to-griefdefender-perform-the-following-steps" tabindex="-1"><a class="header-anchor" href="#griefdefender-supports-a-migration-of-cuboid-regions-from-worldguard-to-migrate-to-griefdefender-perform-the-following-steps" aria-hidden="true">#</a> GriefDefender supports a migration of cuboid regions from WorldGuard. To migrate to GriefDefender, perform the following steps</h3><h3 id="current-limitations" tabindex="-1"><a class="header-anchor" href="#current-limitations" aria-hidden="true">#</a> Current Limitations</h3><ul><li>Only supports cuboid regions.</li><li>Does not support regions that cross each other&#39;s boundaries.</li><li>Does not support custom flags currently. (Will support in future release)</li></ul><p>The following WG flags are currently supported for migration:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>allowed-cmds\nblock-break\nblock-place\nblock-trampling\nblocked-cmds\nbuild\nchest-access\nchorus-fruit-teleport\ncreeper-explosion\ncrop-growth\ndamage-animals\ndeny-spawn\nenderdragon-block-damage\nenderman-grief\nenderpearl\nentity-item-frame-destroy\nentity-painting-destroy\nentry\nexit\nexp-drop\nfall-damage\nfarewell\nfire-spread\nfirework-damage\nghast-fireball\ngrass-growth\ngreeting\ninteract\ninvincible\nitem-drop\nitem-pickup\nlava-fire\nlava-flow\nleaf-decay\nlighter\nlightning\nmob-damage\nmob-spawning\nmushroom-growth\nother-explosion\npvp\nride\nsleep\nsnowman-trail\ntnt\nuse\nvehicle-place\nvine-growth\nwater-flow\nwither-damage\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><h3 id="the-following-flags-do-not-support-migration-but-can-be-handled-via-gd-s-api" tabindex="-1"><a class="header-anchor" href="#the-following-flags-do-not-support-migration-but-can-be-handled-via-gd-s-api" aria-hidden="true">#</a> The following flags do not support migration but can be handled via GD&#39;s API</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>deny-message\nentry-deny-message\nexit-deny-message\nexit-override\nnotify-enter\nnotify-exit\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="migration-steps" tabindex="-1"><a class="header-anchor" href="#migration-steps" aria-hidden="true">#</a> Migration Steps</h2><ol><li>Add GriefDefender jar to plugins</li><li>Remove WorldGuard jar from plugins</li><li>Start the server at least once to generate GriefDefender configs.</li><li>Stop server</li><li>Edit global.conf under ./plugins/GriefDefender/</li><li>Locate section</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># Set to true to enable WorldGuard data migrator.\n# Note: Only cuboid regions are supported.\n# Note: It is recommended to backup data before using.\nworldguard=false\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="7"><li>Set worldguard to <code>true</code></li><li>Start server</li></ol><p>If done properly, GriefDefender will migrate each world&#39;s data as it loads from <code>plugins/WorldGuard/data/&lt;worldname&gt;</code> to <code>plugins/GriefDefender</code>. Migration output should appear in console as it is migrating.</p>',13),s={},i=(0,r(3744).Z)(s,[["render",function(e,n){return a}]])}}]);