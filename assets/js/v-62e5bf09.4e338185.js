"use strict";(self.webpackChunkgriefdefender=self.webpackChunkgriefdefender||[]).push([[1601],{2519:(e,i,o)=>{o.r(i),o.d(i,{data:()=>a});const a={key:"v-62e5bf09",path:"/zh/guide/basic/claim-management.html",title:"Claim Management",lang:"zh-CN",frontmatter:{title:"Claim Management",category:["Claim"],icon:"operate",summary:"GriefDefender is a plugin that provides self-service region protection functionality, giving you additional options to fine tune aspects such as door, chest, and build permissions ",head:[["meta",{property:"og:url",content:"https://bloodmc.github.io/GrierDefenderDoc/GriefDefenderDoc/zh/guide/basic/claim-management.html"}],["meta",{property:"og:title",content:"Claim Management"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}]],tag:["management"]},excerpt:"",headers:[{level:2,title:"Claim Creation",slug:"claim-creation",children:[{level:3,title:"2D",slug:"_2d",children:[]},{level:3,title:"3D",slug:"_3d",children:[]},{level:3,title:"Force players to default to 3D on login",slug:"force-players-to-default-to-3d-on-login",children:[]},{level:3,title:"Admin Claim",slug:"admin-claim",children:[]},{level:3,title:"Basic Claim",slug:"basic-claim",children:[]},{level:3,title:"Subdivision Claim",slug:"subdivision-claim",children:[]},{level:3,title:"Town Claim",slug:"town-claim",children:[]},{level:3,title:"Golden Shovel",slug:"golden-shovel",children:[]},{level:3,title:"Wooden stick",slug:"wooden-stick",children:[]}]},{level:2,title:"Claim Settings",slug:"claim-settings",children:[]},{level:2,title:"Claim Entry Control",slug:"claim-entry-control",children:[{level:3,title:"Allowing other players to access your claim",slug:"allowing-other-players-to-access-your-claim",children:[]},{level:3,title:"Require trust for players to enter claim",slug:"require-trust-for-players-to-enter-claim",children:[]}]},{level:2,title:"How to disable claiming/GD functionality",slug:"how-to-disable-claiming-gd-functionality",children:[{level:3,title:"Disable claiming in a specific world",slug:"disable-claiming-in-a-specific-world",children:[]},{level:3,title:"Disable GD in a specific world",slug:"disable-gd-in-a-specific-world",children:[]}]},{level:2,title:"How to handle explosions above surface level",slug:"how-to-handle-explosions-above-surface-level",children:[]},{level:2,title:"How to override default min/max world height",slug:"how-to-override-default-min-max-world-height",children:[]},{level:2,title:"FAQ",slug:"faq",children:[]}],git:{createdTime:1646752853e3,updatedTime:1646752853e3,contributors:[{name:"ahdg6",email:"ahdg6@outlook.com",commits:1}]},readingTime:{minutes:8.66,words:2598},filePathRelative:"zh/guide/basic/claim-management.md"}},6322:(e,i,o)=>{o.r(i),o.d(i,{default:()=>x});var a=o(6252);const l=(0,a.Uk)("GriefDefender is a plugin that provides self-service region protection functionality, giving you additional options to fine tune aspects such as door, chest, and build permissions for users or groups of users! Below some basic instructions for claim management for more fine tuned control over your claims check out the "),n={href:"https://github.com/bloodmc/GriefDefender/wiki/Flags",target:"_blank",rel:"noopener noreferrer"},t=(0,a.Uk)("Flags page"),s=(0,a.Uk)("."),r=(0,a.uE)('<p>All the examples are with the defaults at the time of writing this in mind.</p><h2 id="claim-creation" tabindex="-1"><a class="header-anchor" href="#claim-creation" aria-hidden="true">#</a> Claim Creation</h2><p>A player can create claims in two types of modes.</p><h3 id="_2d" tabindex="-1"><a class="header-anchor" href="#_2d" aria-hidden="true">#</a> 2D</h3><p>A 2D claim creates a claim by <code>AREA</code> (X and Z). It creates the claim from bedrock (lowest block point) to sky (max Y level 255) in the world you are in. This mode is the most user friendly as it doesn&#39;t require the player to worry about block height or other players claiming above or below their claims. By default all players default to this mode unless the meta option <code>griefdefender.create-mode</code> is set to a different mode.<br> See https://github.com/bloodmc/GriefDefender/wiki/Options-(Meta)#claim-options for more info on claim options.</p><h3 id="_3d" tabindex="-1"><a class="header-anchor" href="#_3d" aria-hidden="true">#</a> 3D</h3><p>A 3D claim creates a claim by <code>VOLUME</code> (X, Y, and Z). It is the same as 2D except it respects the block height from your selections. This mode is ideal perfect for subdivisions (child claims). For example, if you wanted to create a building with floors you could use this mode so the height is respected.<br> Note: To switch to this mode, use the command <code>/cuboid</code> or <code>/gd cuboid</code>. To exit back to 2D mode, enter the same command.</p><h3 id="force-players-to-default-to-3d-on-login" tabindex="-1"><a class="header-anchor" href="#force-players-to-default-to-3d-on-login" aria-hidden="true">#</a> Force players to default to 3D on login</h3><p>If you want to force players to default to 3D claiming mode on login, set <code>griefdefender.create-mode</code> to <code>VOLUME</code> on a LP group or player.<br> Note: This does not mean a player cannot switch modes, it just defaults them to what is set on login.</p><p>In order to start creating a claim, first make sure you are in the correct claiming mode (2D or 3D) then do one of the following</p><ol><li>Switch to the claiming tool which by default is a <code>minecraft:golden_shovel</code>.<br> OR</li><li>Switch to claiming mode by using command <code>/claim</code> or <code>/claimmode</code>.<br> Note: Claim mode requires no tools in hand.</li></ol><p>Claim mode has the following functionality</p><ul><li>Left-click to inspect existing claims based on your mouse cursor. The first non-air block hit will be the claim it inspects.</li><li>Shift Left-click to scan for existing claims around you.</li><li>Right-click to create a new claim. This requires 2 block points to complete. If in 2D mode, simply select 2 points in a square format. If in 3D mode, do the same as 2D but block height will matter so choose the lowest and highest block position you want your claim to be.</li></ul><p>Once you have the proper claiming tool equipped or are in <code>/claimmode</code> , it is time to decide what claim type you want to create.</p><p>There are four types of claims a user can create</p><ol><li>Admin - Use <code>/adminclaims</code> or <code>/gd mode admin</code> to switch.</li><li>Basic - Use <code>/basicclaims</code> or <code>/gd mode basic</code> to switch.</li><li>Subdivision - Use <code>/subdivideclaims</code> or <code>/gd mode subdivide</code> to switch.</li><li>Town - Use <code>/townclaims</code> or <code>/gd mode town</code> to switch.</li></ol><h3 id="admin-claim" tabindex="-1"><a class="header-anchor" href="#admin-claim" aria-hidden="true">#</a> Admin Claim</h3><p>An admin claim has the following capabilities</p><ul><li>No size restrictions.</li><li>Does not cost anything to create.</li><li>Can be created around any existing claim.</li><li>Can rented.</li><li>Used by administrators only.</li></ul><p>Note: Use <code>/adminclaims</code> or <code>/gd mode admin</code> to switch to this claim type mode.</p><h3 id="basic-claim" tabindex="-1"><a class="header-anchor" href="#basic-claim" aria-hidden="true">#</a> Basic Claim</h3><p>A basic claim has the following capabilities</p><ul><li>5x5 size restriction in 2D mode. 5x5x5 size restriction in 3D mode.</li><li>Can be sold, rented, or transferred to another player.</li><li>Requires claim blocks.</li></ul><p>This is the default claim type mode when equipping the claiming tool (minecraft:golden_shovel).<br> Note: Use <code>/basicclaims</code> or <code>/gd mode basic</code> to switch to this claim type mode.</p><h3 id="subdivision-claim" tabindex="-1"><a class="header-anchor" href="#subdivision-claim" aria-hidden="true">#</a> Subdivision Claim</h3><p>A subdivision claim has the following capabilities</p><ul><li>1x1 size restriction in 2D mode. 1x1x1 size restriction in 3D mode.</li><li>Can be sold, rented, or transferred to another player.</li><li>Requires no claim blocks when created by owner.</li></ul><h3 id="town-claim" tabindex="-1"><a class="header-anchor" href="#town-claim" aria-hidden="true">#</a> Town Claim</h3><p>A town claim has the following capabilities</p><ul><li>32x32 size restriction in 2D mode. 32x32x32 size restriction in 3D mode.</li><li>Requires claim blocks.</li><li>Supports basic claims inside.</li><li>A creation limit of 1 which means you can only create 1 town by default.<br> Note: This can be adjusted by changing <code>griefdefender.create-limit</code> to a value higher than 1 with <code>gd_claim_default=town</code> context.</li></ul>',30),c=(0,a.Uk)("Note: For a player to claim chunks they need the permissions and enough claim-blocks for the size of their claim which can be configured with "),d={href:"https://github.com/bloodmc/GriefDefender/wiki/Options",target:"_blank",rel:"noopener noreferrer"},m=(0,a.Uk)("Options"),h=(0,a.Uk)("."),p=(0,a.uE)('<p>See https://github.com/bloodmc/GriefDefender/wiki/Claim-Types for more information on each claim type.</p><h3 id="golden-shovel" tabindex="-1"><a class="header-anchor" href="#golden-shovel" aria-hidden="true">#</a> Golden Shovel</h3><p>You create claims with a golden shovel (item can be changed in the configs), which can also change claim size and position. Remember there are commands to switch claim type and mode, <code>/adminclaims</code>, <code>/townclaims</code>, <code>/basicclaims</code>, <code>/subdivideclaims</code>!</p><ul><li>Creating a new claim: Right click at two points to mark the corners</li><li>Resizing a claim: Right click once in an existing claim to see the markers. Right click on a corner block and then again on a different position to move that corner.</li><li>Cancelling operations: Putting away a golden shovel without completing an operation cancels all actions</li></ul><p>The shovel can also be used to subdivide a basic. To switch to that mode, use <code>/claimsubdivide</code>. All three main claim types support direct child claims (subdivisions) - Town, Admin and Basic.</p><h3 id="wooden-stick" tabindex="-1"><a class="header-anchor" href="#wooden-stick" aria-hidden="true">#</a> Wooden stick</h3><p>Basic tool, you can use it to indicate the position of claims, and identify who the owners of the claims are.</p><ul><li>Right clicking shows existing claim locations</li><li>Shift right clicking searches for all claims in a 100 block radius and shows their location</li><li>Left clicking hides the markers</li></ul><h2 id="claim-settings" tabindex="-1"><a class="header-anchor" href="#claim-settings" aria-hidden="true">#</a> Claim Settings</h2><p>To get general information about claims use <code>/claiminfo</code> while standing in them. Hover over things to find various details you can change directly without entering any commands. There are also commands to change the claim name, greeting, and farewell.</p><h2 id="claim-entry-control" tabindex="-1"><a class="header-anchor" href="#claim-entry-control" aria-hidden="true">#</a> Claim Entry Control</h2><h3 id="allowing-other-players-to-access-your-claim" tabindex="-1"><a class="header-anchor" href="#allowing-other-players-to-access-your-claim" aria-hidden="true">#</a> Allowing other players to access your claim</h3>',12),u=(0,a.Uk)("You can give other players access to your basic claim using the "),g={href:"https://github.com/bloodmc/GriefDefender/wiki/Commands#trust",target:"_blank",rel:"noopener noreferrer"},f=(0,a.Uk)("trust commands"),b=(0,a.Uk)(', e.g. to give your friend "Applehead" building permissions to your claim just run '),w=(0,a._)("code",null,"/trust Applehead",-1),y=(0,a.Uk)("."),v=(0,a.uE)('<h3 id="require-trust-for-players-to-enter-claim" tabindex="-1"><a class="header-anchor" href="#require-trust-for-players-to-enter-claim" aria-hidden="true">#</a> Require trust for players to enter claim</h3><p>Toggle the user flag definition <code>player-enter</code> to <code>false</code></p><p>Once the above is done, non-trusted players will not be able to enter your claim.</p><p>To allow entry for all users <code>/at public</code></p><p>To allow entry for a single user <code>/at &lt;playername&gt;</code></p><p>To remove entry for all users <code>/untrust public</code></p><p>To remove entry for a specific user <code>/untrust &lt;playername&gt;</code></p><h2 id="how-to-disable-claiming-gd-functionality" tabindex="-1"><a class="header-anchor" href="#how-to-disable-claiming-gd-functionality" aria-hidden="true">#</a> How to disable claiming/GD functionality</h2><h3 id="disable-claiming-in-a-specific-world" tabindex="-1"><a class="header-anchor" href="#disable-claiming-in-a-specific-world" aria-hidden="true">#</a> Disable claiming in a specific world</h3><p>To disable creating claims for a specific group of users in a world called <code>valhalla</code>, enter the following command<br><code>/lp group &lt;group&gt; permission set griefdefender.user.claim.create.* false world=valhalla</code></p><h3 id="disable-gd-in-a-specific-world" tabindex="-1"><a class="header-anchor" href="#disable-gd-in-a-specific-world" aria-hidden="true">#</a> Disable GD in a specific world</h3><p>To disable GD functionality in an overworld world named <code>valhalla</code>, go to GD config folder then to <code>worlds</code></p><p>You will see the following folders</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>nether\nnormal\nthe_end\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Since the world <code>valhalla</code> is of type <code>overworld</code> , go into <code>normal</code> folder. You will see a folder named <code>valhalla</code>. Inside this folder will be a config folder named <code>world.conf</code>. Edit the config file to be the following</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># 1.2.7\n# # If you need help with the configuration or have any issues related to GriefDefender,\n# # create a ticket on https://github.com/bloodmc/GriefDefender/issues.\n# # Note: If you have not purchased GriefDefender, please consider doing so to get \n# # exclusive access to Discord for prompt support.\n# \n\nGriefDefender {\n    claim {\n        # Whether claiming is enabled or not. (0 = Disabled, 1 = Enabled)\n        claims-enabled=0\n    }\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="how-to-handle-explosions-above-surface-level" tabindex="-1"><a class="header-anchor" href="#how-to-handle-explosions-above-surface-level" aria-hidden="true">#</a> How to handle explosions above surface level</h2><p>Open up the global.conf found under <code>./plugins/griefdefender</code> on Bukkit and <code>./config/griefdefender</code> on Sponge servers.<br> You will find the following config settings</p><ul><li><code>explosion-block-surface-blacklist</code> - Allows you to blacklist specific block source, such as tnt, above the surface level defined by setting <code>explosion-surface-block-level</code>. To blacklist ALL blocks, use the id <code>any</code>.</li><li><code>explosion-entity-surface-blacklist</code> - Allows you to blacklist specific entity explosion sources, such as creeper, above the surface level defined by setting <code>explosion-surface-block-level</code>. To blacklist ALL entities, use the id <code>any</code>.</li><li><code>explosion-surface-block-level</code> - Allows you to configure the block surface level (Y coord) that GriefDefender will use to determine if an explosion is above the surface. (Default: 63)<br> Note: You can configure these settings per world by copying the setting to your respective <code>world.conf</code> file.</li></ul><h2 id="how-to-override-default-min-max-world-height" tabindex="-1"><a class="header-anchor" href="#how-to-override-default-min-max-world-height" aria-hidden="true">#</a> How to override default min/max world height</h2><p>To override a world named <code>valhalla</code> with environment type <code>overworld</code>, the following config changes need to be made</p><h4 id="bukkit" tabindex="-1"><a class="header-anchor" href="#bukkit" aria-hidden="true">#</a> Bukkit</h4><ul><li>Locate world.conf in <code>./plugins/GriefDefender/worlds/normal/valhalla/world.conf</code></li><li>Copy claim create settings from <code>global.conf</code> to new world.conf</li><li>Open <code>./plugins/GriefDefender/options.conf</code></li><li>Under <code>default-user-options</code> set <code>min-level</code> to match override setting</li><li>Under <code>default-user-options</code> set <code>max-level</code> to match override setting</li></ul><h4 id="sponge" tabindex="-1"><a class="header-anchor" href="#sponge" aria-hidden="true">#</a> Sponge</h4><ul><li>Locate world.conf in <code>./config/GriefDefender/worlds/overworld/valhalla/world.conf</code></li><li>Copy claim create settings from <code>global.conf</code> to new world.conf</li><li>Open <code>./config/GriefDefender/options.conf</code></li><li>Under <code>default-user-options</code> set <code>min-level</code> to match override setting</li><li>Under <code>default-user-options</code> set <code>max-level</code> to match override setting</li></ul><p>If done right, it should look similar to</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GriefDefender {\n    claim {\n        creation-settings {\n            # Whether claims can expire by default. (Default: True)\n            expirable=true\n            # Whether claims should inherit their parent on creation. (Default: True)\n            # Note: This setting does not affect a claim whose parent is a town.\n            inherit-parent=true\n            # The maximum world height override used during claim creation.\n            # Note: Requires &#39;override-world-height&#39; to be enabled.\n            max-world-height-override=319\n            # The minimum world height override used during claim creation.\n            # Note: Requires &#39;override-world-height&#39; to be enabled.\n            min-world-height-override=-64\n            # Whether claim heights are taken from config instead of world. (Default: False)\n            # Note: Enable this setting if using custom datapack that alters the default world height.\n            override-world-height=true\n            # Whether claims requires claim blocks on creation. (Default: True)\n            requires-claim-blocks=true\n            # Whether claims can be resized on creation. (Default: True)\n            resizable=true\n            # Whether claims can show deny messages to players by default. (Default: True)\n            show-deny-messages=true\n        }\n    }\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>Note: These settings will only work for newly created claims. If the world has already been created, make sure to adjust the wilderness claim data with appropriate height.</p><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><p><strong>1. How do allow all users to create claims for free?</strong></p><p>Set meta <code>griefdefender.initial-blocks</code> to a high value such as <code>999999999</code>. See https://github.com/bloodmc/GriefDefender/wiki/Options-(Meta)#luckperms. You should also disable <code>claim-block-task</code> under claim category in <code>global.conf</code> so players do not accrue claim blocks.</p><p><strong>2. How do I transfer a claim to another player for free?</strong></p><p>Create claim, use <code>/claiminfo</code> -&gt; <code>Admin Settings</code> and toggle <code>Requires Claim Blocks</code> to false. Then use <code>/claimtransfer &lt;playername&gt;</code> to transfer claim to player.</p><p><strong>3. How do I create a claim using WorldEdit?</strong></p><p>First make sure your wand is set for cuboid mode as GD only supports cuboid. Use the wand to select your 2 points. If you want to create a 2D claim from bedrock to sky then type <code>/claimwe</code>. If you want to create a 3D claim that respect the height of your selection then type <code>/cuboid</code> then <code>/claimwe</code>. Using <code>/cuboid</code> will put you into 3D claiming mode where your selection will always respect block height.</p><p><strong>4. How do I make use of WECUI visuals with GD claims?</strong></p><p>Make sure you use the investigation tool (minecraft:stick by default) or are in <code>/claimmode</code> then right-click an area.</p><p><strong>5. How do I allow everyone to access my spawn?</strong></p><p>Give them accessor trust by using <code>/at public</code> where public represents all players. See https://github.com/bloodmc/GriefDefender/wiki/Trust-System. If you need more detailed protection then use the flag system. See https://github.com/bloodmc/GriefDefender/wiki/Flag-Definitions-GUI</p><p><strong>6. How do I select a specific claim to work in? (change settings, etc..)</strong></p><p>Most GD commands will use the claim you are standing in. Simply stand in the claim and make your change. If the claim is far, use <code>/claimlist</code> and TP to it.</p><p><strong>7. How do I test flags as a non-trusted user in a claim?</strong></p><p>Use <code>/cfdebug</code> to put yourself into claim flag debug mode then perform any action. This will internally set you as a non-trusted player for all claims. When done, simply run <code>/cfdebug</code> command again.</p><p><strong>8. Is there a way to allow a permission within all claims but deny it in the wild?</strong></p><ul><li>To deny a specific player permission in wilderness</li></ul><ol><li>Assign permission to all players in LuckPerms.</li><li>Stand in wilderness claim.</li><li>Execute command <code>/cpp &lt;playername&gt; &lt;permission&gt; false</code></li></ol><ul><li>To deny a specific group permission in wilderness</li></ul><ol><li>Assign permission to all players in LuckPerms.</li><li>Stand in wilderness claim.</li><li>Execute command <code>/cpg &lt;group&gt; &lt;permission&gt; false</code></li></ol><p>Note: The same steps can be applied to any claim.</p><p><strong>9. How do I stop a player from executing a command in a claim like <code>/sethome</code> ?</strong></p><ul><li>Deny the permission on a group in claim.</li></ul><ol><li>Stand in claim where you want to deny the permission.</li><li>Execute command <code>/cpg &lt;group&gt; &lt;permission&gt; false</code><br> ex. To deny the permission <code>essentials.sethome</code> for group <code>default</code><br><code>/cpg default essentials.sethome false</code></li></ol><ul><li>Deny the permission on a single player in claim.</li></ul><ol><li>Stand in claim where you want to deny the permission.</li><li>Execute command <code>/cpp &lt;playername&gt; &lt;permission&gt; false</code><br> ex. To deny the permission <code>essentials.sethome</code> for player <code>Mike</code><br><code>/cpp Mike essentials.sethome false</code></li></ol><p>OR</p><ul><li>Deny the command-execute flag on a group in claim.</li></ul><ol><li>Stand in claim where you want to deny the <code>command-execute</code> flag.</li><li>Execute command <code>/cfg &lt;group&gt; command-execute &lt;pluginid:command[arg]&gt; false</code><br> ex. To deny the essentials command <code>/sethome</code> for group <code>default</code><br><code>/cfg default command-execute essentials:sethome false</code></li></ol><ul><li>Deny the command-execute flag on a single player in claim.</li></ul><ol><li>Stand in claim where you want to deny the <code>command-execute</code> flag.</li><li>Execute command <code>/cfp &lt;playername&gt; command-execute &lt;pluginid:command[arg]&gt; false</code><br> ex. To deny the essentials command <code>/sethome</code> for player <code>Mike</code><br><code>/cfp Mike command-execute essentials:sethome false</code></li></ol><p>Note: Use <code>/gddebug record claim</code> to get the proper info for command.<br> See https://github.com/bloodmc/GriefDefender/wiki/Debugging for more info.</p><p><strong>10. How do I allow my admins to bypass protection ?</strong></p><p>Grant them access to use the <code>/ignoreclaims</code> command in order to toggle GriefDefender god-mode.</p><p><strong>11. How do I allow essentials <code>/sethome</code> in only claims users are trusted in?</strong></p><p>Run the command <code>/cf command-execute essentials:sethome false default=user</code></p><p><strong>12. How do I allow players to fly in their own claims?</strong></p><ol><li>Deny flight globally in all claims by running command <code>/claimoption player-deny-flight true default=global</code></li><li>Give players permission to use the <code>fly</code> command.</li><li>Assign the permission <code>griefdefender.admin.option.perk.fly.owner</code> to player or group.</li></ol><p><strong>13. How do I give claim owners the ability to allow other players to fly in their claims?</strong></p><ol><li>Admins need to assign all players the following perk permissions</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>griefdefender.admin.option.perk.fly.accessor\ngriefdefender.admin.option.perk.fly.builder\ngriefdefender.admin.option.perk.fly.container\ngriefdefender.admin.option.perk.fly.manager\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Note: Don&#39;t forget to run <code>/gdreload</code> after changing permissions</p><p>These permissions allow the trusted player to fly in claims they are trusted to.</p><ol start="2"><li>Have the claim owners trust players they wish to fly in their claims.</li></ol>',72),k={},x=(0,o(3744).Z)(k,[["render",function(e,i){const o=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("p",null,[l,(0,a._)("a",n,[t,(0,a.Wm)(o)]),s]),r,(0,a._)("p",null,[c,(0,a._)("a",d,[m,(0,a.Wm)(o)]),h]),p,(0,a._)("p",null,[u,(0,a._)("a",g,[f,(0,a.Wm)(o)]),b,w,y]),v],64)}]])}}]);