"use strict";(self.webpackChunkgriefdefender=self.webpackChunkgriefdefender||[]).push([[7825],{1890:(e,t,a)=>{a.r(t),a.d(t,{data:()=>d});const d={key:"v-3c30a057",path:"/zh/guide/basic/options.html",title:"选项",lang:"zh-CN",frontmatter:{title:"选项",category:[],icon:"set",summary:"details 名词辨析 Options - 选项 Meta - 元数据 Global - 全局 set - 集 permission - 权限 group - 权限组 Options, also known as Meta, are a way to configure plugins using player/group contexts through",head:[["meta",{property:"og:url",content:"https://bloodmc.github.io/GrierDefenderDoc/GriefDefenderDoc/zh/guide/basic/options.html"}],["meta",{property:"og:title",content:"选项"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}]],tag:["Meta"]},excerpt:"",headers:[{level:2,title:"Built-in Commands",slug:"built-in-commands",children:[{level:3,title:"Contexts",slug:"contexts",children:[]},{level:3,title:"Examples",slug:"examples",children:[]}]},{level:2,title:"LuckPerms",slug:"luckperms",children:[]},{level:2,title:"Global Options",slug:"global-options",children:[]},{level:2,title:"Claim Options",slug:"claim-options",children:[]},{level:2,title:"Admin Options",slug:"admin-options",children:[]},{level:2,title:"Option Config",slug:"option-config",children:[{level:3,title:"Default Options",slug:"default-options",children:[]},{level:3,title:"Option Control",slug:"option-control",children:[]},{level:3,title:"Vanilla fallback values",slug:"vanilla-fallback-values",children:[]}]}],git:{createdTime:1646752853e3,updatedTime:1646752853e3,contributors:[{name:"ahdg6",email:"ahdg6@outlook.com",commits:1}]},readingTime:{minutes:5.78,words:1733},filePathRelative:"zh/guide/basic/options.md"}},1225:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const d=(0,a(6252).uE)('<details class="custom-block details"><summary>名词辨析</summary><p>Options - 选项 Meta - 元数据 Global - 全局 set - 集 permission - 权限 group - 权限组</p></details><p>Options, also known as Meta, are a way to configure plugins using player/group contexts through your permission system, this gives you the benefit of being able to set different settings for different players, groups, worlds etc.</p><p>Default values can be changed in <code>options.conf</code>, for finer control continue reading below.</p><h2 id="built-in-commands" tabindex="-1"><a class="header-anchor" href="#built-in-commands" aria-hidden="true">#</a> Built-in Commands</h2><p>Options support the same format as flags</p><p>Claim - <code>/claimoption &lt;option&gt; &lt;value&gt; [contexts]</code><br> Player - <code>/cop &lt;player&gt; &lt;option&gt; &lt;value&gt; [contexts]</code><br> Group - <code>/cog &lt;group&gt; &lt;option&gt; &lt;value&gt; [contexts]</code></p><h3 id="contexts" tabindex="-1"><a class="header-anchor" href="#contexts" aria-hidden="true">#</a> Contexts</h3><p>All options may use one or more contexts when applied as meta in LuckPerms.<br> See https://github.com/bloodmc/GriefDefender/wiki/Contexts on what contexts you can use and how they work.</p><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h3><ul><li>Send a welcome message to players entering a claim as console.<br><code>/claimoption player-command-enter &quot;/tellraw %player% [\\&quot;\\&quot;,{\\&quot;text\\&quot;:\\&quot;Welcome %player%!\\&quot;,\\&quot;color\\&quot;:\\&quot;gold\\&quot;},{\\&quot;text\\&quot;:\\&quot;\\\\nYou are visiting %owner%s claim.\\\\nEnjoy your stay!\\\\n\\\\n-\\&quot;}]&quot; context[run_for=member, run_as=console]</code></li><li>Set group vip&#39;s <code>create-limit</code> to 100 default for basic claims.<br><code>/cog vip create-limit 100 context[default=basic]</code></li><li>Set player JoeSmith&#39;s <code>expiration</code> to 30 days default for basic claims.<br><code>/cop JoeSmith expiration 30 context[default=basic]</code></li></ul><p>Using <code>/claimoption</code> with no arguments opens up the GUI and displays all claim options for claim you are standing in including default options that affect all claims.</p><h2 id="luckperms" tabindex="-1"><a class="header-anchor" href="#luckperms" aria-hidden="true">#</a> LuckPerms</h2><p><code>/lp user/group &lt;user|group&gt; meta set &lt;option&gt; &lt;value&gt; [contexts]</code></p><p>Ex1. Set create basic claim limit of 50 for a group called <code>vip</code><br><code>/lp group vip meta set griefdefender.create-limit 50 gd_claim_default=basic server=global</code></p><p>Ex1. Set create basic claim limit of 50 for a group called <code>vip</code> on server mc01<br><code>/lp group vip meta set griefdefender.create-limit 50 gd_claim_default=basic server=mc01</code></p><p>Reset all users accrued claimblocks<br><code>/lp bulkupdate users delete &quot;permission ~~ meta.griefdefender\\\\.accrued-blocks.%&quot;</code></p><p>Reset all users bonus claimblocks<br><code>/lp bulkupdate users delete &quot;permission ~~ meta.griefdefender\\\\.bonus-blocks.%&quot;</code></p><p>See https://luckperms.net/wiki/Prefixes,-Suffixes-&amp;-Meta and https://luckperms.net/wiki/Meta-Commands for more information on how to use it directly in LuckPerms</p><h2 id="global-options" tabindex="-1"><a class="header-anchor" href="#global-options" aria-hidden="true">#</a> Global Options</h2><p>Global Options can be set globally, or on a server, world, group or player.<br> They cannot be set on individual claims or claim types.</p><p>Permissions for using Global Options are <code>griefdefender.admin.claim.option.global.&lt;optionname&gt;</code></p><table><thead><tr><th>Option</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code>griefdefender.abandon-return-ratio</code></td><td>1.0</td><td>The portion of claim blocks returned to a player when a claim is abandoned. Note: When using Economy Mode, this is the ratio of funds returned when abandoning a claim.</td></tr><tr><td><code>griefdefender.accrued-blocks</code></td><td>0</td><td>The total number of claim blocks accrued by a player. <br>Note: This does not account for bonus blocks, and has no use/effect being set on a group.</td></tr><tr><td><code>griefdefender.blocks-accrued-per-hour</code></td><td>120</td><td>Blocks earned per hour. By default, each &#39;active&#39; player should receive 6 blocks every 5 min. Note: The player must have moved at least 3 blocks since last delivery. If using &#39;wilderness-cuboids&#39;, this value is 30720 by default with 1536 blocks every 5 min to players. Minimum setting is 12 due to 5 minute check interval, setting it lower will result in no blocks accruing.</td></tr><tr><td><code>griefdefender.bonus-blocks</code></td><td>0</td><td>The total number of bonus claim blocks given to a player, and has no use/effect being set on a group.</td></tr><tr><td><code>griefdefender.chest-expiration</code></td><td>7</td><td>Number of days of inactivity before an automatic chest claim will be deleted.</td></tr><tr><td><code>griefdefender.economy-block-cost</code></td><td>0.0</td><td>The economy amount to charge per block of a claim. <br>Note: If set to 0 or less, the buy block feature will be disabled.</td></tr><tr><td><code>griefdefender.economy-block-sell-return</code></td><td>0.0</td><td>The return ratio for selling claim blocks. <br>Note: If set to 0 or less, the sell block feature will be disabled.</td></tr><tr><td><code>griefdefender.expiration</code></td><td>14</td><td>Number of days of inactivity before a claim will be deleted.<br>Note: If set to 0, it will disable claim expiration for user/group.</td></tr><tr><td><code>griefdefender.initial-blocks</code></td><td>120</td><td>The number of bonus starter claim blocks a player has initially. <br>Note: This number is not counted as part of accrued blocks. <br>Note: If using &#39;wilderness-cuboids&#39;, this value is 25600 by default.</td></tr><tr><td><code>griefdefender.max-accrued-blocks</code></td><td>80000</td><td>The limit on accrued blocks (over time). doesn&#39;t limit purchased or admin-gifted blocks. <br>Note: If using &#39;wilderness-cuboids&#39;, this value is 20480000 by default. <br>Note: This setting will affect <code>/scb</code> command.</td></tr><tr><td><code>griefdefender.max-bonus-blocks</code></td><td>-1</td><td>The maximum amount of bonus blocks a player can obtain. <br>Note: Set to -1 or less to make unlimited. <br>Note: This setting will affect commands <code>/acb</code> and <code>/buyclaimblocks</code>, use with caution.</td></tr><tr><td><code>griefdefender.radius-inspect</code></td><td>100</td><td>The radius in blocks used to search for nearby claims while inspecting.</td></tr></tbody></table><h2 id="claim-options" tabindex="-1"><a class="header-anchor" href="#claim-options" aria-hidden="true">#</a> Claim Options</h2><p>Claim Options can be set on individual claims, claim types, server, world, group or player.</p><p>Permissions for using Claim Options are <code>griefdefender.user.claim.option.&lt;optionname&gt;</code></p><table><thead><tr><th>Option</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code>griefdefender.abandon-delay</code></td><td>0</td><td>The number of days to delay before allowing a player to abandon a newly created claim.</td></tr><tr><td><code>griefdefender.create-mode</code></td><td>area</td><td>The default claiming mode set for players on login. (area = 2D, volume = 3D)</td></tr><tr><td><code>griefdefender.create-limit</code></td><td>-1</td><td>Maximum number of claims per player. (-1 = unlimited)</td></tr><tr><td><code>griefdefender.min-level</code><br><code>griefdefender.max-level</code></td><td>0/255</td><td>The minimum/maximum level that a claim can be created in.</td></tr><tr><td><code>griefdefender.min-size-x</code><br><code>griefdefender.max-size-x</code></td><td>10/5000</td><td>The min/max size in blocks that the x-axis can be.</td></tr><tr><td><code>griefdefender.min-size-y</code><br><code>griefdefender.max-size-y</code></td><td>5/256</td><td>The min/max size in blocks that the y-axis can be.</td></tr><tr><td><code>griefdefender.min-size-z</code><br><code>griefdefender.max-size-z</code></td><td>10/5000</td><td>The min/max size in blocks that the z-axis can be.</td></tr><tr><td><code>griefdefender.player-command-enter</code></td><td>undefined</td><td>Used for executing a command on claim enter with specific contexts. Accepts the following placeholders : %player%, %owner%, %uuid%, %world%, %server%, %location%</td></tr><tr><td><code>griefdefender.player-command-exit</code></td><td>undefined</td><td>Used for executing a command on claim exit with specific contexts. Accepts the following placeholders : %player%, %owner%, %uuid%, %world%, %server%, %location%</td></tr><tr><td><code>griefdefender.player-deny-flight</code></td><td>false</td><td>Used to determine if a player is unable to fly in a claim. Note: This does not give players the ability to fly, it merely removes the ability if set. This provides the greatest compatibility with plugins.</td></tr><tr><td><code>griefdefender.player-weather</code></td><td>undefined</td><td>Used to a set player&#39;s weather in a claim. Supported types are clear and rain.</td></tr><tr><td><code>griefdefender.pvp</code></td><td>undefined</td><td>Used to determine if players can combat each other.</td></tr><tr><td><code>griefdefender.pvp-combat-command</code></td><td>false</td><td>Used to determine if a player can use commands during PvP combat.</td></tr><tr><td><code>griefdefender.pvp-combat-teleport</code></td><td>false</td><td>Used to determine if a player can teleport during PvP combat.</td></tr><tr><td><code>griefdefender.pvp-combat-timeout</code></td><td>15</td><td>Used to determine how many seconds PvP combat is considered to continue after the most recent damage.</td></tr><tr><td><code>griefdefender.rent-restore</code></td><td>false</td><td>Used to determine if a rent owner has permission to have their claim automatically restored on rent end date.<br>Note: This requires the claim rental to have an end date.</td></tr><tr><td><code>griefdefender.tax-expiration</code></td><td>7</td><td>Number of days after not paying taxes before a claim will be frozen.</td></tr><tr><td><code>griefdefender.tax-expiration-days-keep</code></td><td>7</td><td>Number of days to keep a claim after frozen and before being deleted</td></tr><tr><td><code>griefdefender.tax-rate</code></td><td>1.0</td><td>Tax is calculated by the number of claimblocks in the claim. <code>Number of claimblocks * tax-rate</code></td></tr></tbody></table><h2 id="admin-options" tabindex="-1"><a class="header-anchor" href="#admin-options" aria-hidden="true">#</a> Admin Options</h2><p>Admin Options can be set on individual claims, claim types, server, world, group or player.</p><p>Permissions for using Admin Options are <code>griefdefender.admin.claim.option.admin.&lt;optionname&gt;</code></p><table><thead><tr><th>Option</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code>griefdefender.player-deny-godmode</code></td><td>false</td><td>Used to determine if a player can be in godmode within a claim. Note: This does not give players the ability to be in godmode, it merely removes the ability if set. This provides the greatest compatibility with plugins.</td></tr><tr><td><code>griefdefender.player-deny-hunger</code></td><td>false</td><td>Used to if a player&#39;s hunger is denied in a claim.</td></tr><tr><td><code>griefdefender.player-gamemode</code></td><td>undefined</td><td>Used to determine the gamemode of a player in a claim. Accepts the following values : ADVENTURE, CREATIVE, SURVIVAL, SPECTATOR, UNDEFINED.</td></tr><tr><td><code>griefdefender.player-health-regen</code></td><td>0.0</td><td>Used to set the health regen amount for a player in a claim. Note: If the player is at max health, this will have no effect.</td></tr><tr><td><code>griefdefender.player-keep-inventory</code></td><td>undefined</td><td>Used to determine if a player can keep inventory after death in a claim.</td></tr><tr><td><code>griefdefender.player-keep-level</code></td><td>undefined</td><td>Used to determine if a player can keep their level after death in a claim.</td></tr><tr><td><code>griefdefender.player-teleport-delay</code></td><td>undefined</td><td>Used to determine the delay before teleporting a player to a new location.</td></tr><tr><td><code>griefdefender.player-walk-speed</code></td><td>-1.0</td><td>Used to set a player&#39;s walk speed in a claim. Note: (-1 = undefined)</td></tr><tr><td><code>griefdefender.spawn-limit</code></td><td>0</td><td>The limit of entity spawns a claim can have.</td></tr></tbody></table><h2 id="option-config" tabindex="-1"><a class="header-anchor" href="#option-config" aria-hidden="true">#</a> Option Config</h2><p>On server startup, GD will generate a file named <code>options.conf</code> which will have various settings to manage options.</p><h3 id="default-options" tabindex="-1"><a class="header-anchor" href="#default-options" aria-hidden="true">#</a> Default Options</h3><p>The default options section <code>default-options</code> controls the default transient meta values that GD will set in LP at server startup.<br> There are 4 subsections within this section.</p><table><thead><tr><th>Variable</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td>default-user-options</td><td>The default user options for all players. <br>Note: Setting default claim type options will override this.</td><td>[ ]</td></tr><tr><td>default-user-basic-options</td><td>The default options applied to users for basic claims. <br>Note: These options override default global options.</td><td>[ ]</td></tr><tr><td>default-user-subdivision-options</td><td>The default options applied to users for subdivisions. <br>Note: These options override default global options.</td><td>[ ]</td></tr><tr><td>default-user-town-options</td><td>The default options applied to users for towns. <br>Note: These options override default global options.</td><td>[ ]</td></tr></tbody></table><h3 id="option-control" tabindex="-1"><a class="header-anchor" href="#option-control" aria-hidden="true">#</a> Option Control</h3><p>The option control section lets you enable/disable option functionality. By default, all player/pvp and spawn options are disabled. To enable this functionality, you will need to set the corresponding option to true.</p><p>Here are the delivered options that can be controlled</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>option-control {\n    player-command-enter=false\n    player-command-exit=false\n    player-deny-flight=false\n    player-deny-godmode=false\n    player-deny-hunger=false\n    player-fly-speed=false\n    player-gamemode=false\n    player-health-regen=false\n    player-keep-inventory=false\n    player-keep-level=false\n    player-teleport-delay=false\n    player-walk-speed=false\n    player-weather=false\n    pvp=false\n    pvp-combat-command=false\n    pvp-combat-teleport=false\n    pvp-combat-timeout=false\n    spawn-limit=false\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="vanilla-fallback-values" tabindex="-1"><a class="header-anchor" href="#vanilla-fallback-values" aria-hidden="true">#</a> Vanilla fallback values</h3><p>This section is currently only used for player fly and walk default speeds. If your server uses a different default value, you can adjust it here.</p><p>The delivered defaults are</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vanilla-fallback-values {\n    player-fly-speed=&quot;0.1&quot;\n    player-walk-speed=&quot;0.2&quot;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',43),o={},r=(0,a(3744).Z)(o,[["render",function(e,t){return d}]])}}]);