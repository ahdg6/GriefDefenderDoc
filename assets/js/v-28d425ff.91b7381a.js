"use strict";(self.webpackChunkgriefdefender=self.webpackChunkgriefdefender||[]).push([[4022],{6602:(t,e,a)=>{a.r(e),a.d(e,{data:()=>r});const r={key:"v-28d425ff",path:"/zh/guide/advanced/global-config.html",title:"Global Config",lang:"zh-CN",frontmatter:{title:"Global Config",category:["Configuration"],icon:"setting",summary:"GriefDefender's default config offers extended customization for your server. Below is a breakdown of all default variables for your convenience. \" :warning: Some options can cause",head:[["meta",{property:"og:url",content:"https://bloodmc.github.io/GrierDefenderDoc/GriefDefenderDoc/zh/guide/advanced/global-config.html"}],["meta",{property:"og:title",content:"Global Config"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}]]},excerpt:"",headers:[{level:2,title:"Plugin Dependency",slug:"plugin-dependency",children:[]},{level:2,title:"Modular Configuration",slug:"modular-configuration",children:[]},{level:2,title:"Bukkit",slug:"bukkit",children:[]},{level:2,title:"Sponge",slug:"sponge",children:[]}],git:{createdTime:16467354e5,updatedTime:16467354e5,contributors:[{name:"ahdg6",email:"ahdg6@outlook.com",commits:1}]},readingTime:{minutes:10.28,words:3085},filePathRelative:"zh/guide/advanced/global-config.md"}},1778:(t,e,a)=>{a.r(e),a.d(e,{default:()=>y});var r=a(6252);const d=(0,r.uE)('<p>GriefDefender&#39;s default config offers extended customization for your server. Below is a breakdown of all default variables for your convenience.</p><blockquote><p>⚠️ Some options can cause irreparable changes to your data. Please ensure that you have read the sub-text found next to the variables in your generated <code>global.conf</code> file. <strong>All migration variables should ALWAYS be used AFTER a backup of your data is made.</strong> ⚠️</p></blockquote><hr><h2 id="plugin-dependency" tabindex="-1"><a class="header-anchor" href="#plugin-dependency" aria-hidden="true">#</a> Plugin Dependency</h2><p>Do note, cost variables (such as Towns&#39; <code>creation-cost</code>) <strong>require</strong> an Economy plugin. Similarly, MCClans is only needed if you plan on using it&#39;s integration across plugins. It is <strong>not</strong>, however, required to use GriefDefender&#39;s Town claims.</p><h2 id="modular-configuration" tabindex="-1"><a class="header-anchor" href="#modular-configuration" aria-hidden="true">#</a> Modular Configuration</h2><p>GriefDefender allows for modular enabling. As per default configuration files however, all modules are enabled. Disabling a module will render all flags unusable. Only do it if you do not plan on using GriefDefender&#39;s management of said flag. You can choose to disable the following:</p><ul><li>Block-Changes: block-break, block-grow, block-modify, block-place, block-pre, block-spread</li><li>Collisions: collide-block, collide-entity</li><li>Commands: command-execute</li><li>Movements: enter-claim, exit-claim</li><li>Entity: entity-damage, entity-riding, entity-spawn, entity-teleport-from, entity-teleport-to</li><li>Explosions: explosion-block, explosion-entity</li><li>Interacts: interact-block-primary, interact-block-secondary, interact-entity-primary, interact-entity-secondary, interact-inventory, interact-inventory-click, interact-item-primary, interact-item-secondary</li><li>Item: item-drop, item-pickup, item-spawn, item-use</li><li>Liquids: liquid-flow</li><li>Portals: portal-use</li><li>Projectiles: projectile-impact-block, projectile-impact-entity</li></ul><h1 id="ban" tabindex="-1"><a class="header-anchor" href="#ban" aria-hidden="true">#</a> Ban</h1><table><thead><tr><th>Variable</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td>blocks</td><td>A map of banned block id&#39;s and messages</td><td>[ ]</td></tr><tr><td>entities</td><td>A map of banned entity id&#39;s and messages</td><td>[ ]</td></tr><tr><td>items</td><td>A map of banned item id&#39;s and messages</td><td>[ ]</td></tr></tbody></table><p>Used to store a list of global banned blocks, entities, and items. Use the <code>/claimban</code> command to set.</p><h1 id="blacklist" tabindex="-1"><a class="header-anchor" href="#blacklist" aria-hidden="true">#</a> Blacklist</h1><table><thead><tr><th>Variable</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td>flag-id-blacklist</td><td>A list of id&#39;s ignored by flags.</td><td>[ ]</td></tr><tr><td>global-source</td><td>A global list of source id&#39;s that are ignored by events. <br>Note: This only affects events where the id specified is the source.</td><td>[ ]</td></tr><tr><td>global-target</td><td>A global list of target id&#39;s that are ignored by events. <br>Note: This only affects events where the id specified is the target.</td><td>[ ]</td></tr><tr><td>entity-damage-source-blacklist</td><td>A global list of entity damage sources that are ignored in events by default.</td><td>[contact,cramming,drowning,<br>&quot;falling_block&quot;,flyintowall,&quot;fire_tick&quot;,<br>&quot;hot_floor&quot;,poison,starvation,suffocation,<br>suicide,void]</td></tr></tbody></table><p>The blacklist controls events from interacting with items, blocks, or entities on either a per-flag or global basis.</p>',14),i=(0,r.Uk)("It supports wildcards "),o=(0,r._)("code",null,"?",-1),n=(0,r.Uk)(" and "),s=(0,r._)("code",null,"*",-1),l=(0,r.Uk)(" where "),c=(0,r._)("code",null,"?",-1),h=(0,r.Uk)(" represents a single character and "),u=(0,r._)("code",null,"*",-1),m=(0,r.Uk)(" represents zero or more characters. For more info you can go to "),b={href:"https://commons.apache.org/proper/commons-io/javadocs/api-2.5/org/apache/commons/io/FilenameUtils.html#wildcardMatch(java.lang.String,%20java.lang.String)",target:"_blank",rel:"noopener noreferrer"},p=(0,r.Uk)("Apache's wildcard matcher."),f=(0,r.uE)('<p>To add an item into the blacklist simply add the ID between a set of quotation marks.</p><p>An example of how to block items from being checked by GD is as shown</p><p><code>block-break=[&quot;modID:itemID&quot;]</code></p><h1 id="claims" tabindex="-1"><a class="header-anchor" href="#claims" aria-hidden="true">#</a> Claims</h1><table><thead><tr><th>Variable</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td>auto-chest-claim-block-radius</td><td>Radius used (in blocks) for auto-created claim when a chest is placed. Set to -1 to disable chest claim creation.</td><td>4</td></tr><tr><td>auto-nature-restore</td><td>Whether survival claims will be automatically restored to nature when auto-deleted.</td><td>FALSE</td></tr><tr><td>auto-schematic-restore</td><td>Whether survival claims will be automatically restored to its claim creation schematic on abandon/expiration. <br>Note: Enabling this feature will cause ALL newly created claims to automatically create a special schematic that will be used to restore claim on abandon/expiration.<br>Note: Enabling this feature will disable ability to resize claims.<br>Note: It is HIGHLY recommended to disable building in the wilderness before using this feature to avoid players exploiting.<br>Note: It is also recommended to ONLY use this feature in newly created worlds where there is no existing player data.<br>Note: This does NOT affect deletions. If admins want to restore back to original schematic, they can select &#39;<strong>restore</strong>&#39; by using /claimschematic command.</td><td>FALSE</td></tr><tr><td>border-block-radius</td><td>Set claim border of specified radius (in blocks), centered on claim. If set to 1, adds an additional 1 block protected radius around claim. <br>Note: It is not recommended to set this value too high as performance can degrade due to deeper claim searches.</td><td>0</td></tr><tr><td>claim-block-task</td><td>Whether claim block task should run to accrue blocks for players. <br>Note: If in economy-mode, use setting &#39;use-claim-block-task&#39; under economy category. <br>Note: To configure amount accrued, see &#39;blocks-accrued-per-hour&#39; option at https://github.com/bloodmc/GriefDefender/wiki/Options-(Meta)#global-options</td><td>FALSE</td></tr><tr><td>claim-block-task-move-threshold</td><td>The minimum threshold of movement (in blocks) required to receive accrued claim blocks. <br>Note: The claim block task runs every 5 minutes which is the time each player will get to move the required amount of blocks.</td><td>0</td></tr><tr><td>claim-create-radius-limit</td><td>The radius limit for the /claimcreate command.</td><td>256</td></tr><tr><td>claims-enabled</td><td>Whether claiming is enabled or not. (0 = Disabled, 1 = Enabled).</td><td>1</td></tr><tr><td>expiration-cleanup-interval</td><td>The interval in minutes for cleaning up expired claims. Set to 0 to disable.</td><td>63</td></tr><tr><td>explosion-block-surface-blacklist</td><td>A list of source id&#39;s that cannot cause explosion damage to blocks above sea level.</td><td>[ ]</td></tr><tr><td>explosion-entity-surface-blacklist</td><td>A list of id&#39;s that cannot cause explosion damage to entities above sea level.</td><td>[ ]</td></tr><tr><td>explosion-surface-block-level</td><td>The &#39;Y&#39; block level that is considered the surface for explosions.</td><td>0</td></tr><tr><td>inspection-tool</td><td>The item used to inspect claims with a right-click. <br>Note: Set to empty quotes if you want to assign no item and use &#39;/claim&#39; mode exclusively.</td><td>&quot;minecraft:stick&quot;</td></tr><tr><td>modification-tool</td><td>The item used to create/resize claims with a right click.<br>Note: Set to empty quotes if you want to assign no item and use &#39;/claim&#39; mode exclusively.</td><td>&quot;minecraft:golden_shovel&quot;</td></tr><tr><td>piston-protection-in-claims</td><td>Whether piston protection should be enabled within claims. Note: This does not affect pistons crossing into another claim, that is always protected. This only determines whether or not GD should process pistons if it doesn&#39;t cross into another claim.</td><td>false</td></tr><tr><td>player-trapped-cooldown</td><td>The cooldown time, in seconds, when using the &#39;/trapped&#39; command.</td><td>300</td></tr><tr><td>protect-tamed-entities</td><td>Whether tamed entities should be protected in claims.</td><td>true</td></tr><tr><td>reserved-claim-names</td><td>A list of reserved claim names for use only by administrators.</td><td>[ ]</td></tr><tr><td>restrict-world-max-height</td><td>Whether to restrict claiming to world max height.</td><td>true</td></tr></tbody></table><h1 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> Context</h1><table><thead><tr><th>Variable</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td>player-equipment</td><td>Whether player equipment contexts should be applied during permission checks.</td><td>true</td></tr><tr><td>potion-effects</td><td>Whether potion effect contexts should be applied during permission checks.</td><td>true</td></tr><tr><td>enchantments</td><td>Whether potion effect contexts should be applied during permission checks.</td><td>false</td></tr></tbody></table><h1 id="economy" tabindex="-1"><a class="header-anchor" href="#economy" aria-hidden="true">#</a> Economy</h1><table><thead><tr><th>Variable</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td>bank-system</td><td>Whether to enable the bank system for claims. Set to true to enable.</td><td>FALSE</td></tr><tr><td>bank-transaction-log-limit</td><td>The amount of transactions to keep for history.</td><td>60</td></tr><tr><td>economy-mode</td><td>Uses economy instead of player claim blocks for claim creation. If true, disables the claim block system in favor of economy. <br>Note: Using this mode disables the &#39;/buyblocks&#39; command as claim creation will pull funds directly from a player&#39;s economy balance. <br>Note: If players have existing claimblocks from past configurations, an admin must use the &#39;/ecomigrateblocks&#39; command to convert remainder to currency.</td><td>FALSE</td></tr><tr><td>rent-delinquent-task-apply-hour</td><td>The specific hour in day to attempt to get owed claim rent balances from delinquent renters. <br>Note: This uses military time and accepts values between 0-23.</td><td>0</td></tr><tr><td>rent-max-time-limit</td><td>Controls the maximum time limit(hours or days) that a claim owner can have their rental max set to. <br>Note: This only affects claim rentals that have a max specified. If no max is specified by the claim owner, a renter may rent as long as they want.</td><td>false</td></tr><tr><td>rent-restore-day-warning</td><td>Controls which day a player should start to receive warnings about their rented claim nearing expiration. <br>Ex. If set to &#39;5&#39;, this will begin to send players messaging on login and at the rent apply hour when 5 days are remaining before expiration. <br>Note: This only applies if the owner has &#39;rent-restore&#39; option enabled and the rent owner sets a max.</td><td>5</td></tr><tr><td>rent-schematic-restore-admin</td><td>Controls whether rented admin claims will use a schematic for restoration. <br>Note: If set, the claim will create a schematic on rental start and restore it back when finished. <br>Note: This ONLY applies to rentals with a max date set.</td><td>false</td></tr><tr><td>rent-sign</td><td>Whether rent signs are enabled.</td><td>FALSE</td></tr><tr><td>rent-system</td><td>Controls whether the rent system is enabled.</td><td>FALSE</td></tr><tr><td>rent-task-interval</td><td>The interval in minutes for checking claim rent payments that are due. Set to &#39;0&#39; to disable</td><td>1</td></tr><tr><td>rent-transaction-log-limit</td><td>The amount of transactions to keep for history.</td><td>60</td></tr><tr><td>sell-sign</td><td>Whether sell signs are enabled.</td><td>false</td></tr><tr><td>sign-update-interval</td><td>The interval in minutes for updating sign data. Set to &#39;0&#39; to disable</td><td>1</td></tr><tr><td>tax-apply-hour</td><td>The specific hour in day to apply tax to all claims. <br>Note: This uses military time and accepts values between 0-23.</td><td>0</td></tr><tr><td>tax-system</td><td>Whether to enable the tax system for claims. Set to true to enable.</td><td>FALSE</td></tr><tr><td>tax-transaction-log-limit</td><td>The amount of transactions to keep for history.</td><td>60</td></tr></tbody></table><h1 id="gui" tabindex="-1"><a class="header-anchor" href="#gui" aria-hidden="true">#</a> GUI</h1><table><thead><tr><th>Variable</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td>chat-capture-idle-timeout</td><td>The idle timeout in seconds when a command GUI will stop capturing chat.</td><td>15</td></tr><tr><td>command-input-idle-timeout</td><td>The idle timeout in seconds when a command GUI will stop waiting for player input.</td><td>15</td></tr></tbody></table><h1 id="message" tabindex="-1"><a class="header-anchor" href="#message" aria-hidden="true">#</a> Message</h1><table><thead><tr><th>Variable</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td>deny-message-action-bar</td><td>Controls whether to send claim deny messages to action bar. <br>Note: Setting to false will send messages to chat.</td><td>TRUE</td></tr><tr><td>enable-exit-chat-messages</td><td>Controls whether exit chat messages are displayed when both enter and exit messages are being sent to a player at the same time.For example, if both an enter and exit title message is configured in a claim then the exit title would be sent to chat if this setting is true.</td><td>FALSE</td></tr><tr><td>enter-claim-player-messages</td><td>Controls whether to display playername and claim display name as enter message if not set. <br> Set to &#39;1&#39; to send messages to chat. <br> Set to &#39;2&#39; to send messages to actionbar. <br> Set to &#39;3&#39; to send messages to title. <br> Set to 0 to disable.</td><td>2</td></tr><tr><td>enter-exit-chat-show-gd-prefix</td><td>Whether GD prefix should be shown in enter/exit chat messages.</td><td>TRUE</td></tr><tr><td>greeting-farewell-action-bar</td><td>Controls whether to send greeting/farewell messages to action bar by default. <br>Note: Setting to true will send messages to actionbar. <br>Note: This will only be set if there is no actionbar already set in claim. If so, it will use chat instead.</td><td>FALSE</td></tr><tr><td>locale</td><td>Set the locale to use for GP messages. Available languages: de_DE, en_US, es_ES, fr_FR, pl_PL, ru_RU, zh_HK. The data is stored under assets in jar. <br>Note: The language code must be lowercase and the country code must be uppercase.</td><td>&quot;en_US&quot;</td></tr><tr><td>locale-unicode-fix</td><td>Attempts to adjust unicode fonts to represent minecraft default fonts better. <br>Note: If you are using &#39;pl_PL&#39; or &#39;ru_RU&#39;, this setting should be set to false. <br>Note: Any other languages that experience misalignment in chat menus should disable this setting.</td><td>TRUE</td></tr></tbody></table><h1 id="migrators" tabindex="-1"><a class="header-anchor" href="#migrators" aria-hidden="true">#</a> Migrators</h1><h2 id="bukkit" tabindex="-1"><a class="header-anchor" href="#bukkit" aria-hidden="true">#</a> Bukkit</h2><table><thead><tr><th>Variable</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td>classic</td><td>Set to true to enable the classic migrator. <br>Note: Migrates GP bukkit classic claim data and GPFlags data, if available, to current format.<br>Note: It is recommended to backup data before using.</td><td>FALSE</td></tr><tr><td>classic-database</td><td>Migrates GP bukkit classic database.</td><td>FALSE</td></tr><tr><td>classic-playerdata-threshold</td><td>Controls the last active player day threshold in order to avoid migrating inactive GP playerdata. To disable, set value to 0. <br>Note: For example, with the default value of &#39;180&#39; the the migrator will only migrate playerdata for players that played within the past 180 days. <br>Note: This only handles a player&#39;s playerdata where accrued/bonus block information is stored. This setting has no effect on claim migration. <br>Note: This avoids storing inactive user data in LuckPerms which helps keep &#39;/lp editor&#39; view clean.</td><td>180</td></tr><tr><td>griefdefender-file-to-database</td><td>Set to true to migrate from file format to database. <br>Note: The storage method must be set to hocon in order for this to work properly. <br>Note: After migration is complete, switch storage to database. <br>Note: This will NOT remove existing files in case you want to go back.</td><td>FALSE</td></tr><tr><td>red-protect</td><td>Set to true to enable RedProtect data migrator.</td><td>FALSE</td></tr><tr><td>worldguard</td><td>Set to true to enable WorldGuard data migrator. <br>Note: Only cuboid regions are supported. <br>Note: It is recommended to backup data before using.</td><td>FALSE</td></tr></tbody></table><h2 id="sponge" tabindex="-1"><a class="header-anchor" href="#sponge" aria-hidden="true">#</a> Sponge</h2><table><thead><tr><th>Variable</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td>griefprevention-bukkit</td><td>Set to true to enable the griefprevention bukkit migrator. <br>Note: Migrates GP bukkit classic claim data and GPFlags data, if available, to current format. <br>Note: It is recommended to backup data before using.</td><td>FALSE</td></tr><tr><td>griefprevention-sponge</td><td>Set to true to enable the griefprevention sponge migrator. <br>Note: Migrates GP sponge claim data to current format. <br>Note: It is recommended to backup data before using.</td><td>FALSE</td></tr><tr><td>red-protect</td><td>Set to true to enable RedProtect data migrator. <br>Note: All RedProtect data will be converted into basic claim data.</td><td>FALSE</td></tr><tr><td>worldguard</td><td>Set to true to enable WorldGuard data migrator. <br>Note: Only cuboid regions are supported. <br>Note: It is recommended to backup data before using.</td><td>FALSE</td></tr></tbody></table><h1 id="optimization" tabindex="-1"><a class="header-anchor" href="#optimization" aria-hidden="true">#</a> Optimization</h1><table><thead><tr><th>Variable</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td>dispenser-item-spawns</td><td>Controls whether dispener item spawns are ignored.</td><td>TRUE</td></tr><tr><td>entity-damage-living-passive</td><td>Controls whether entity damage events that contain both a source/target living passive entity, such as two animals fighting, are ignored.</td><td>TRUE</td></tr><tr><td>entity-damage-monster</td><td>Controls whether entity damage events that contain both a source/target monster are ignored.</td><td>TRUE</td></tr><tr><td>entity-item-pickup-non-players</td><td>Controls whether entity item pickups made by non-players are ignored.</td><td>TRUE</td></tr><tr><td>fall-non-player</td><td>Controls whether non-player falls are ignored.</td><td>TRUE</td></tr><tr><td>monster-player-damage</td><td>Controls whether monster attacks against a player are ignored. <br>Note: This does not include explosion damage. <br>Note: If you need to prevent damage from monsters in claims then this should remain false.</td><td>FALSE</td></tr><tr><td>player-monster-damage</td><td>Controls whether player attacks against a monster are ignored. <br>Note: This does not include explosion damage.</td><td>TRUE</td></tr></tbody></table><h1 id="permission" tabindex="-1"><a class="header-anchor" href="#permission" aria-hidden="true">#</a> Permission</h1><table><thead><tr><th>Variable</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td>griefdefender-claim-group-priority</td><td>The claimgroup permission group priority.</td><td>-60</td></tr><tr><td>griefdefender-claim-priority</td><td>The claim permission group priority.</td><td>-60</td></tr><tr><td>griefdefender-default-priority</td><td>The default permission group priority.</td><td>-80</td></tr><tr><td>griefdefender-option-priority</td><td>The option permission group priority.</td><td>0</td></tr><tr><td>griefdefender-override-priority</td><td>The override permission group priority.</td><td>-40</td></tr></tbody></table><h1 id="player-data" tabindex="-1"><a class="header-anchor" href="#player-data" aria-hidden="true">#</a> Player Data</h1><table><thead><tr><th>Variable</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td>claim-block-system</td><td>Determines which claim block system to use for claims. <br>Note: If set to VOLUME, claim blocks will use the chunk count system to balance 3d claiming. <br>Note: If set to AREA, the standard 2d block count system will be used.</td><td>AREA</td></tr><tr><td>context-storage-type</td><td>The context type used when storing playerdata within a permissions database. <br> Available types are : global, server, world. (Default: global) <br> Global will store data globally shared by all servers. <br> Server will store data per server. Note: This requires servername to be properly set in permissions config. <br> World will store data per world.</td><td>GLOBAL</td></tr></tbody></table><h1 id="pvp" tabindex="-1"><a class="header-anchor" href="#pvp" aria-hidden="true">#</a> PvP</h1><table><thead><tr><th>Variable</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td>combat-logout</td><td>Whether players should be killed if they logout while in pvp combat.</td><td>false</td></tr><tr><td>combat-timeout</td><td>How long combat is considered to continue after the most recent damage.</td><td>15</td></tr><tr><td>enabled</td><td>Whether pvp protection is enabled for players. <br>Note: Turnings this off disables all PvP functionality in GriefDefender.</td><td>true</td></tr></tbody></table><h1 id="town" tabindex="-1"><a class="header-anchor" href="#town" aria-hidden="true">#</a> Town</h1><table><thead><tr><th>Variable</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td>auto-nature-restore</td><td>Whether survival towns will be automatically restored to nature when auto-deleted.</td><td>FALSE</td></tr><tr><td>clan-require-town</td><td>Requires a town to be owned for MCClans. <br>Note: This is for Sponge only.</td><td>TRUE</td></tr><tr><td>cleanup-task-interval</td><td>The interval in minutes for restoring blocks in an expired town.</td><td>5</td></tr><tr><td>creation-cost</td><td>The required amount of funds to create a town. <br>Note: This requires an Economy plugin.</td><td>0.0</td></tr></tbody></table><h1 id="visual" tabindex="-1"><a class="header-anchor" href="#visual" aria-hidden="true">#</a> Visual</h1><table><thead><tr><th>Variable</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td>active-claim-visual-time</td><td>The active time, in seconds, to keep a claim&#39;s visuals shown to a player. <br>Note: If value is &lt;= 0, GD will use the default value.</td><td>60</td></tr><tr><td>active-create-block-visual-time</td><td>The active time, in seconds, to keep a claim&#39;s create block visual shown to a player. <br>Note: This only applies during claim creation. <br>Note: If value is &lt;= 0, GD will use the default value.</td><td>180</td></tr><tr><td>client-visuals-per-tick</td><td>The amount of block visuals a client can receive per tick when showing/hiding claims.</td><td>12</td></tr><tr><td>cuboid-level-visuals-2d</td><td>Whether to use cuboid visuals, in 2D claims, during inspection with owner min/max claim levels between 0 and 255 or 0 and 319 for MC 1.17+. <br>Note: WECUI visuals are not associated to this option. <br>Note: If enabled, this will send many block updates to players causing more client strain depending on size of claim. Use with caution.</td><td>FALSE</td></tr><tr><td>fill-spacing</td><td>The space between each filler visual block.</td><td>10</td></tr><tr><td>hide-borders-when-using-wecui</td><td>Whether to hide the glowstone/gold block borders when using WECUI.</td><td>FALSE</td></tr><tr><td>hide-fillers-when-using-wecui</td><td>Whether to hide the block fillers when using WECUI.</td><td>TRUE</td></tr><tr><td>hide-wecui-drag-visuals-2d</td><td>Whether drag visuals should be shown while creating a claim in 2D mode.</td><td>TRUE</td></tr><tr><td>claim-create-block</td><td>The visual block used during claim creation.</td><td>minecraft:diamond_block</td></tr><tr><td>admin-accent-block</td><td>The visual accent block used for admin claims.</td><td>minecraft:pumpkin</td></tr><tr><td>admin-corner-block</td><td>The visual corner block used for admin claims.</td><td>minecraft:glowstone</td></tr><tr><td>admin-filler-block</td><td>The visual filler block used for admin claims.</td><td>minecraft:pumpkin</td></tr><tr><td>basic-accent-block</td><td>The visual accent block used for basic claims.</td><td>minecraft:gold_block</td></tr><tr><td>basic-corner-block</td><td>The visual corner block used for basic claims.</td><td>minecraft:glowstone</td></tr><tr><td>basic-filler-block</td><td>The visual filler block used for basic claims.</td><td>minecraft:gold_block</td></tr><tr><td>error-accent-block</td><td>The visual accent block used to visualize an error in a claim.</td><td>minecraft:netherrack</td></tr><tr><td>error-corner-block</td><td>The visual corner block used to visualize an error in a claim.</td><td>minecraft:redstone_ore</td></tr><tr><td>error-filler-block</td><td>The visual filler block used to visualize an error in a claim.</td><td>minecraft:diamond_block</td></tr><tr><td>subdivision-accent-block</td><td>The visual accent block used for subdivision claims.</td><td>minecraft:white_wool or minecraft:wool for legacy versions</td></tr></tbody></table>',30),g={},y=(0,a(3744).Z)(g,[["render",function(t,e){const a=(0,r.up)("ExternalLinkIcon");return(0,r.wg)(),(0,r.iD)(r.HY,null,[d,(0,r._)("p",null,[i,o,n,s,l,c,h,u,m,(0,r._)("a",b,[p,(0,r.Wm)(a)])]),f],64)}]])}}]);