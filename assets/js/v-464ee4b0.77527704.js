"use strict";(self.webpackChunkgriefdefender=self.webpackChunkgriefdefender||[]).push([[8547],{1966:(d,e,t)=>{t.r(e),t.d(e,{data:()=>r});const r={key:"v-464ee4b0",path:"/zh/guide/permissions.html",title:"权限",lang:"zh-CN",frontmatter:{title:"权限",category:["信息"],icon:"condition",summary:"如果您想快速使用，将 授权至您的玩家，并给予 和 给您的社区管理或服务器管理。 在大多数情况下，建议使用上面的通用权限，如果您想要更精细的控制，请阅览下面的所有权限并相应地关掉一些不需要的权限。 重要信息 warning 警告 由于 GriefDefender 缓存了获取的权限，所以请确保您在更改管理员权限后运行 /gdreload 。 目前尚不支持通配符权",head:[["meta",{property:"og:url",content:"https://bloodmc.github.io/GrierDefenderDoc/GriefDefenderDoc/zh/guide/permissions.html"}],["meta",{property:"og:title",content:"权限"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}]],tag:["信息"]},excerpt:"",headers:[{level:3,title:"重要信息",slug:"重要信息",children:[]},{level:2,title:"领地相关",slug:"领地相关",children:[]},{level:2,title:"标签相关",slug:"标签相关",children:[]},{level:2,title:"预制标签",slug:"预制标签",children:[]},{level:2,title:"选项",slug:"选项",children:[]},{level:2,title:"信任相关",slug:"信任相关",children:[]},{level:2,title:"选项",slug:"选项-1",children:[]}],git:{createdTime:1646215768e3,updatedTime:1646215768e3,contributors:[{name:"ahdg",email:"ahdg6@outlook.com",commits:1}]},readingTime:{minutes:7.67,words:2302},filePathRelative:"zh/guide/permissions.md"}},4772:(d,e,t)=>{t.r(e),t.d(e,{default:()=>T});var r=t(6252);const a=(0,r.uE)('<p>如果您想快速使用，将 <code>griefdefender.user.*</code> 授权至您的玩家，并给予 <code>griefdefender.user.*</code> 和 <code>griefdefender.admin.*</code> 给您的社区管理或服务器管理。</p><p>在大多数情况下，建议使用上面的通用权限，如果您想要更精细的控制，请阅览下面的所有权限并相应地关掉一些不需要的权限。</p><h3 id="重要信息" tabindex="-1"><a class="header-anchor" href="#重要信息" aria-hidden="true">#</a> 重要信息</h3><div class="custom-container warning"><p class="custom-container-title">警告</p><p>由于 GriefDefender 缓存了获取的权限，所以请确保您在更改管理员权限后运行 <code>/gdreload</code> 。 目前尚不支持通配符权限 <code>*</code> 。请使用 <code>griefdefender.user.*</code> 和 <code>griefdefender.admin.*</code> 来授予管理员权限。</p><p>就目前而言，GD 大量使用了 LP 的 <code>default</code> 权限组，以下现象是必须出现的，请不要删除权限组，否则很可能插件将不能正常使用。</p><ul><li>所有非 GriefDefender 的权限组继承自 <code>default</code> 权限组。</li><li><code>default</code> 权限组继承自以下 GD 创建的权限组： <code>griefdefender_claim, griefdefender_default, griefdefender_definition, griefdefender_option, griefdefender_override</code></li><li><code>default</code> 权限组不应该被禁用。LP 强烈建议不要禁用此组。 详见 https://luckperms.net/wiki/Default-Groups</li></ul></div><h1 id="用户权限" tabindex="-1"><a class="header-anchor" href="#用户权限" aria-hidden="true">#</a> 用户权限</h1><h2 id="领地相关" tabindex="-1"><a class="header-anchor" href="#领地相关" aria-hidden="true">#</a> 领地相关</h2><table><thead><tr><th>权限节点</th><th>描述</th></tr></thead><tbody><tr><td>griefdefender.user.claim.command.abandon.basic</td><td>允许遗弃 基础 领地</td></tr><tr><td>griefdefender.user.claim.command.abandon.town</td><td>允许遗弃 城镇 领地</td></tr><tr><td>griefdefender.user.claim.command.abandon-all</td><td>允许遗弃 全部 领地</td></tr><tr><td>griefdefender.user.claim.command.abandon-top-level</td><td>允许遗弃母领地及其下属的子领地</td></tr><tr><td>griefdefender.user.claim.command.ban-item</td><td>允许在领地内 禁用 物品</td></tr><tr><td>griefdefender.user.claim.command.basic-mode</td><td>允许使用 基础 领地圈地模式</td></tr><tr><td>griefdefender.user.claim.command.bank</td><td>允许使用 领地银行</td></tr><tr><td>griefdefender.user.claim.command.buy</td><td>允许 购买 领地 (需要经济插件)</td></tr><tr><td>griefdefender.user.claim.command.buy-blocks</td><td>允许购买 领地方块 (需要经济插件)</td></tr><tr><td>griefdefender.user.claim.command.claim.tax</td><td>允许 查看/支付 税务</td></tr><tr><td>griefdefender.user.claim.command.contract</td><td>允许在一个方向上 缩减 领地</td></tr><tr><td>griefdefender.user.claim.command.cuboid</td><td>允许切换到 3D 领地模式</td></tr><tr><td>griefdefender.user.claim.command.expand</td><td>允许在一个方向上 扩大 领地</td></tr><tr><td>griefdefender.user.claim.command.farewell</td><td>允许设置 领地 告别信息</td></tr><tr><td>griefdefender.user.claim.command.give.blocks</td><td>允许玩家给予别的玩家 领地方块</td></tr><tr><td>griefdefender.user.claim.command.give.pet</td><td>允许玩家给予别的玩家已驯服宠物</td></tr><tr><td>griefdefender.user.claim.command.greeting</td><td>允许设置 领地 问候信息</td></tr><tr><td>griefdefender.user.claim.command.info.others</td><td>允许获取有关 其他领地 的信息</td></tr><tr><td>griefdefender.user.claim.command.info.base</td><td>允许获取有关 领地 的信息</td></tr><tr><td>griefdefender.user.claim.command.info.teleport.others</td><td>允许用户在 其他领地 中使用 claiminfo中的传送功能</td></tr><tr><td>griefdefender.user.claim.command.info.teleport.base</td><td>允许用户在 领地 中使用 claiminfo</td></tr><tr><td>griefdefender.user.claim.command.inherit</td><td>允许从 母领地 开关继承</td></tr><tr><td>griefdefender.user.claim.command.list.base</td><td>允许列出 属于自己 的领地</td></tr><tr><td>griefdefender.user.claim.command.list.others</td><td>允许列出 其他玩家 的领地</td></tr><tr><td>griefdefender.user.claim.command.list-flags</td><td>允许列出 领地标签</td></tr><tr><td>griefdefender.user.claim.command.name</td><td>允许设置 领地名称</td></tr><tr><td>griefdefender.user.claim.command.sell</td><td>允许 出售 领地 (需要经济插件)</td></tr><tr><td>griefdefender.user.claim.command.sell-blocks</td><td>允许 出售 领地方块 (需要经济插件)</td></tr><tr><td>griefdefender.user.claim.command.set-spawn</td><td>允许 设置 领地出生点</td></tr><tr><td>griefdefender.user.claim.command.spawn</td><td>允许 使用 领地出生点</td></tr><tr><td>griefdefender.user.claim.command.subdivide-mode</td><td>允许使用 子领地 圈地模式</td></tr><tr><td>griefdefender.user.claim.command.town-mode</td><td>允许使用 城镇 圈地模式</td></tr><tr><td>griefdefender.user.claim.command.transfer</td><td>允许 转让 个人的领地</td></tr><tr><td>griefdefender.user.claim.command.trapped</td><td>如果玩家被卡住无法建造，则将其传送到安全位置</td></tr><tr><td>griefdefender.user.claim.command.unban-item</td><td>允许取消 领地 中的禁用物品</td></tr><tr><td>griefdefender.user.claim.command.unlock-drops</td><td>允许玩家拾取所有死亡掉落的物品</td></tr><tr><td>griefdefender.user.claim.command.worldedit-claim</td><td>允许使用 worldedit 的选中区域创建领地</td></tr><tr><td>griefdefender.user.claim.create.base</td><td>允许创建一个 基础 领地</td></tr><tr><td>griefdefender.user.claim.create.basic</td><td>允许创建/更改大小于 基础 领地</td></tr><tr><td>griefdefender.user.claim.create.subdivision</td><td>允许创建/更改大小于 子领地</td></tr><tr><td>griefdefender.user.claim.create.town</td><td>允许创建/更改大小于 城镇 领地</td></tr><tr><td>griefdefender.user.claim.create.cuboid.basic</td><td>允许创建/更改大小于 3D 基础 领地</td></tr><tr><td>griefdefender.user.claim.create.cuboid.subdivision</td><td>允许创建/更改大小于 3D 子领地</td></tr><tr><td>griefdefender.user.claim.create.cuboid.town</td><td>允许创建/更改大小于 3D 城镇 领地</td></tr><tr><td>griefdefender.user.claim.resize</td><td>允许重新定义领地的大小</td></tr><tr><td>griefdefender.user.claim.show-tutorial</td><td>允许玩家于领地创建或更改大小时显示向导</td></tr><tr><td>griefdefender.user.claim.list.other</td><td>允许列出 其他玩家 的领地</td></tr><tr><td>griefdefender.user.claim.visualize.base</td><td>允许玩家可视化他们的领地</td></tr><tr><td>griefdefender.user.claim.visualize.nearby</td><td>允许玩家可视化周围的领地</td></tr><tr><td>griefdefender.user.command.info.base</td><td>允许玩家获取自己的个人信息</td></tr><tr><td>griefdefender.user.command.info.others</td><td>允许玩家获取别人的个人信息</td></tr><tr><td>griefdefender.user.command.version</td><td>允许获取有关 GD，服务器和 LP 等版本信息</td></tr><tr><td>griefdefender.user.town.command.bank</td><td></td></tr><tr><td>griefdefender.user.town.command.info.base</td><td>允许获取 城镇 信息</td></tr><tr><td>griefdefender.user.town.command.info.others</td><td>允许获取 别人城镇 的信息</td></tr><tr><td>griefdefender.user.town.command.name</td><td>允许设置 城镇 名称</td></tr><tr><td>griefdefender.user.town.command.tag</td><td>允许设置 城镇 的聊天标签</td></tr><tr><td>griefdefender.user.town.command.tax</td><td></td></tr></tbody></table><h2 id="标签相关" tabindex="-1"><a class="header-anchor" href="#标签相关" aria-hidden="true">#</a> 标签相关</h2>',8),i=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",null,"权限节点"),(0,r._)("th",null,"描述")])],-1),n=(0,r._)("tr",null,[(0,r._)("td",null,"griefdefender.admin.claim.command.flag.arg"),(0,r._)("td",null,"允许使用 claimflag 相关指令的时候附加参数")],-1),m=(0,r._)("tr",null,[(0,r._)("td",null,"griefdefender.user.claim.command.flag.base"),(0,r._)("td",null,"允许使用 claimflag 相关指令")],-1),l=(0,r._)("tr",null,[(0,r._)("td",null,"griefdefender.user.claim.command.flag.gui"),(0,r._)("td",null,"允许使用 claimflag 命令的GUI")],-1),f=(0,r._)("tr",null,[(0,r._)("td",null,"griefdefender.user.claim.command.flag.debug"),(0,r._)("td",null,"允许切换 领地标签调试 模式")],-1),c=(0,r._)("tr",null,[(0,r._)("td",null,"griefdefender.user.claim.command.flag.player"),(0,r._)("td",null,"允许指定 claimflag 所影响的玩家")],-1),o=(0,r._)("tr",null,[(0,r._)("td",null,"griefdefender.user.claim.command.flag.group"),(0,r._)("td",null,"允许指定 claimflag 所影响的玩家组")],-1),s=(0,r._)("tr",null,[(0,r._)("td",null,"griefdefender.user.claim.command.flag.reset"),(0,r._)("td",null,"允许使用 claimreset 命令")],-1),g=(0,r._)("td",null,"griefdefender.user.claim.flag",-1),u=(0,r.Uk)("用以检查玩家是否有相关 标签 的权限"),h=(0,r._)("br",null,null,-1),b=(0,r.Uk)("格式 "),p=(0,r._)("code",null,"griefdefender.user.claim.flag.<标签名称>",-1),_=(0,r.Uk)("。"),y=(0,r._)("br",null,null,-1),k=(0,r.Uk)("注意：在访问 高级标签 GUI部分以及使用带有参数的 flag 命令时，会检查此权限。"),v=(0,r._)("br",null,null,-1),w=(0,r.Uk)("注意：不要将 标签名称 与 自定义标签名称 混淆。这里指的是检查 GD 的 核心标签。 在"),D={href:"https://github.com/bloodmc/GriefDefender/wiki/Flags#available-flags",target:"_blank",rel:"noopener noreferrer"},G=(0,r.Uk)("这里"),U=(0,r.Uk)("获取更多"),x=(0,r.uE)('<h2 id="预制标签" tabindex="-1"><a class="header-anchor" href="#预制标签" aria-hidden="true">#</a> 预制标签</h2><table><thead><tr><th>权限节点</th><th>描述</th></tr></thead><tbody><tr><td>griefdefender.admin.custom.flag</td><td>用于检查用户是否有权限访问 管理员自定义标签 的基础权限 <br>权限格式 <code>griefdefender.admin.custom.flag.&lt;预制标签组&gt;.&lt;预制标签名称&gt;</code>。 <br>注意：在默认情况下，这个权限管理了对 设定UI 中 管理员 选项卡的使用。</td></tr><tr><td>griefdefender.user.custom.flag</td><td>用于检查用户是否有权限访问 用户自定义标签 的基础权限 <br>权限格式 <code>griefdefender.user.custom.flag.&lt;预制标签组&gt;.&lt;预制标签名称&gt;</code>。<br>注意：在默认情况下，这个权限管理了对 设定UI 中 用户 选项卡的使用。</td></tr></tbody></table>',2),z=(0,r.Uk)("*查看 "),I={href:"https://github.com/bloodmc/GriefDefender/wiki/Flag-Definitions-GUI",target:"_blank",rel:"noopener noreferrer"},P=(0,r.Uk)("预制标签 GUI"),C=(0,r.Uk)(" 来获取更多关于预制管理员或用户标签设定的信息。"),E=(0,r.uE)('<h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th>权限节点</th><th>描述</th></tr></thead><tbody><tr><td>griefdefender.user.claim.command.option.base</td><td>允许使用 claimoption 命令</td></tr><tr><td>griefdefender.user.claim.command.option.group</td><td>允许在领地里对 玩家组 修改选项</td></tr><tr><td>griefdefender.user.claim.command.option.player</td><td>允许在领地里对 玩家 修改选项</td></tr><tr><td>griefdefender.user.claim.option</td><td>允许在领地里使用选项设置</td></tr><tr><td>griefdefender.user.option.perk.owner-fly.basic</td><td>允许在自己领地里飞行</td></tr><tr><td>griefdefender.user.option.perk.owner-fly.town</td><td>允许在所有的城镇里飞行</td></tr></tbody></table><h2 id="信任相关" tabindex="-1"><a class="header-anchor" href="#信任相关" aria-hidden="true">#</a> 信任相关</h2><table><thead><tr><th>权限节点</th><th>描述</th></tr></thead><tbody><tr><td>griefdefender.user.claim.command.trust.group</td><td>允许给予 玩家组 领地权限</td></tr><tr><td>griefdefender.user.claim.command.trust.player</td><td>允许给予 玩家 领地权限</td></tr><tr><td>griefdefender.user.claim.command.trust.list</td><td>允许列出受信任的名单</td></tr><tr><td>griefdefender.user.claim.command.trustall.group</td><td>允许一次性对所有领地授予 玩家组 权限</td></tr><tr><td>griefdefender.user.claim.command.trustall.player</td><td>允许一次性对所有领地授予 玩家 权限</td></tr><tr><td>griefdefender.user.claim.command.untrust.group</td><td>允许撤销 玩家组 的领地权限</td></tr><tr><td>griefdefender.user.claim.command.untrust.player</td><td>允许撤销 玩家 的领地取消</td></tr><tr><td>griefdefender.user.claim.command.untrustall.group</td><td>允许在所有领地中一次性撤销 玩家组 的权限</td></tr><tr><td>griefdefender.user.claim.command.untrustall.player</td><td>允许在所有领地中一次性撤销 玩家 的权限</td></tr><tr><td>griefdefender.user.claim.trust.accessor</td><td>允许添加 访客 权限</td></tr><tr><td>griefdefender.user.claim.trust.container</td><td>允许添加 容器存取 权限</td></tr><tr><td>griefdefender.user.claim.trust.builder</td><td>允许添加 领地建筑师 权限</td></tr><tr><td>griefdefender.user.claim.trust.manager</td><td>允许添加 领地管理者 权限</td></tr><tr><td>griefdefender.user.claim.trust.remove</td><td>允许撤销权限</td></tr></tbody></table><h1 id="管理员权限" tabindex="-1"><a class="header-anchor" href="#管理员权限" aria-hidden="true">#</a> 管理员权限</h1><table><thead><tr><th>权限节点</th><th>描述</th></tr></thead><tbody><tr><td>griefdefender.admin.advanced-flags</td><td>允许使用 高级标签GUI</td></tr><tr><td>griefdefender.admin.bypass.ban</td><td>允许绕过物品封禁</td></tr><tr><td>griefdefender.admin.bypass.border-check</td><td>允许绕过领地超界检测</td></tr><tr><td>griefdefender.admin.bypass.option</td><td>允许绕过选项设置</td></tr><tr><td>griefdefender.admin.bypass.override.resize</td><td>允许绕过领地调整大小限制</td></tr><tr><td>griefdefender.admin.bypass.override.limit</td><td>允许绕过领地所有量限制</td></tr><tr><td>griefdefender.admin.claim.command.adjust-claim-blocks</td><td>允许编辑奖励领地方块数量</td></tr><tr><td>griefdefender.admin.claim.command.admin-mode</td><td>允许使用 管理员 圈地模式</td></tr><tr><td>griefdefender.admin.claim.command.ban</td><td>允许封禁 物品 的所有用途</td></tr><tr><td>griefdefender.admin.claim.command.clear</td><td>允许清除一个或多个领地的实体</td></tr><tr><td>griefdefender.admin.claim.command.schematic</td><td>允许管理领地图纸</td></tr><tr><td>griefdefender.admin.claim.command.debug</td><td>允许玩家使用 GDdebug</td></tr><tr><td>griefdefender.admin.claim.command.delete.base</td><td>允许使用 deleteclaim 命令</td></tr><tr><td>griefdefender.admin.claim.command.delete.basic</td><td>允许删除 基础 领地</td></tr><tr><td>griefdefender.admin.claim.command.delete.admin</td><td>允许删除 管理员 领地</td></tr><tr><td>griefdefender.admin.claim.command.delete-claims</td><td>允许删除另一名玩家所有的领地</td></tr><tr><td>griefdefender.admin.claim.command.ignore.base</td><td>允许使用 ignore claims 命令用以无视领地保护</td></tr><tr><td>griefdefender.admin.claim.command.ignore.basic</td><td>允许无视 基础 领地的保护</td></tr><tr><td>griefdefender.admin.claim.command.ignore.admin</td><td>允许无视 管理员 领地标签</td></tr><tr><td>griefdefender.admin.claim.command.ignore.town</td><td>允许无视 城镇 领地标签</td></tr><tr><td>griefdefender.admin.claim.command.ignore.wilderness</td><td>允许无视 荒野 领地标签</td></tr><tr><td>griefdefender.admin.claim.command.permission-group</td><td>允许对权限组使用领地指令</td></tr><tr><td>griefdefender.admin.claim.command.permission-player</td><td>允许对玩家权限使用领地指令</td></tr><tr><td>griefdefender.admin.claim.command.reserve-name</td><td>允许使用服务器保留领地名称</td></tr><tr><td>griefdefender.admin.claim.cuboid</td><td>允许创建/重建大小于 3D 模式的 管理员 领地</td></tr><tr><td>griefdefender.admin.claim.list.admin</td><td>允许列出管理员领地</td></tr><tr><td>griefdefender.admin.claim.option.global</td><td>允许管理全局选项</td></tr><tr><td>griefdefender.admin.claim.resize</td><td>允许重建领地尺寸</td></tr><tr><td>griefdefender.admin.claim.resize.admin</td><td>允许重建管理员领地的尺寸</td></tr><tr><td>griefdefender.admin.claim.resize.admin.subdivision</td><td>允许重建管理员子领地的尺寸</td></tr><tr><td>griefdefender.admin.claim.resize.basic</td><td>允许重建 基础 领地的尺寸</td></tr><tr><td>griefdefender.admin.claim.resize.basic.subdivision</td><td>允许重建 基础子领地 的大小</td></tr><tr><td>griefdefender.admin.claim.resize.town</td><td>允许重建 城镇 领地的大小</td></tr><tr><td>griefdefender.admin.claim.set-admin-flags</td><td>允许在 管理员 领地中编辑管理员标签</td></tr><tr><td>griefdefender.admin.claim.use-reserved-names</td><td>允许使用服务器保留名称</td></tr><tr><td>griefdefender.admin.claim.wilderness</td><td>允许编辑 荒野 领地</td></tr><tr><td>griefdefender.admin.command.delete-admin-claims</td><td>允许删除所有 管理员 领地</td></tr><tr><td>griefdefender.admin.command.reload</td><td>允许重新加载 GP</td></tr><tr><td>griefdefender.admin.command.restore-claim.base</td><td>允许将领地恢复到初始状态</td></tr><tr><td>griefdefender.admin.command.restore-nature.base</td><td>允许切换圈地工具为恢复模式</td></tr><tr><td>griefdefender.admin.command.restore-nature.aggressive</td><td></td></tr><tr><td>griefdefender.admin.command.restore-nature.fill</td><td></td></tr><tr><td>griefdefender.admin.command.set-accrued-claim-blocks</td><td>允许编辑 累积领地方块数目</td></tr><tr><td>griefdefender.admin.custom.flag</td><td>允许在 GUI 中使用高级标签</td></tr><tr><td>griefdefender.admin.flag-defaults</td><td>允许编辑 默认标签</td></tr><tr><td>griefdefender.admin.flag-overrides</td><td>允许编辑 覆写标签</td></tr></tbody></table><h2 id="选项-1" tabindex="-1"><a class="header-anchor" href="#选项-1" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th>权限节点</th><th>描述</th></tr></thead><tbody><tr><td>griefdefender.admin.claim.command.option.group.base</td><td>允许设置领地中权限组的选项</td></tr><tr><td>griefdefender.admin.claim.command.option.player.base</td><td>允许设置领地玩家的选项</td></tr></tbody></table><h1 id="杂项" tabindex="-1"><a class="header-anchor" href="#杂项" aria-hidden="true">#</a> 杂项</h1><table><thead><tr><th>权限节点</th><th>描述</th></tr></thead><tbody><tr><td>griefdefender.user.command.help</td><td>允许您查看帮助菜单</td></tr><tr><td>griefdefender.user.chat.capture</td><td>在命令 GUI 中查看玩家聊天记录</td></tr></tbody></table>',10),L={},T=(0,t(3744).Z)(L,[["render",function(d,e){const t=(0,r.up)("ExternalLinkIcon");return(0,r.wg)(),(0,r.iD)(r.HY,null,[a,(0,r._)("table",null,[i,(0,r._)("tbody",null,[n,m,l,f,c,o,s,(0,r._)("tr",null,[g,(0,r._)("td",null,[u,h,b,p,_,y,k,v,w,(0,r._)("a",D,[G,(0,r.Wm)(t)]),U])])])]),x,(0,r._)("p",null,[(0,r._)("em",null,[z,(0,r._)("a",I,[P,(0,r.Wm)(t)]),C])]),E],64)}]])}}]);