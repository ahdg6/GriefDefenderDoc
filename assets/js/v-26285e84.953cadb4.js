"use strict";(self.webpackChunkgriefdefender=self.webpackChunkgriefdefender||[]).push([[5148],{756:(e,n,a)=>{a.r(n),a.d(n,{data:()=>r});const r={key:"v-26285e84",path:"/zh/guide/basic/tags.html",title:"标签组系统",lang:"zh-CN",frontmatter:{title:"标签组系统",category:["Tag"],icon:"list",summary:"标签 是一个于 Minecraft 1.13 引入的新系统，其允许用户将 物品，方块，实体 的标志符捆绑为一个标签组以方便分类。GriefDefender 将与标签系统集成并将其导出为情境用以 标签(Flag)/选项(Option)。 例如，假设您希望允许与以下站立告示牌进行交互 oaksign, sprucesign, birchsign, acacias",head:[["meta",{property:"og:url",content:"https://bloodmc.github.io/GrierDefenderDoc/GriefDefenderDoc/zh/guide/basic/tags.html"}],["meta",{property:"og:title",content:"标签组系统"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}]],tag:["QOL"]},excerpt:"",headers:[],git:{createdTime:1646296717e3,updatedTime:1646296717e3,contributors:[{name:"ahdg",email:"ahdg6@outlook.com",commits:1}]},readingTime:{minutes:2.35,words:706},filePathRelative:"zh/guide/basic/tags.md"}},5189:(e,n,a)=>{a.r(n),a.d(n,{default:()=>M});var r=a(6252);const s=(0,r.uE)('<p><code>标签</code> 是一个于 Minecraft 1.13 引入的新系统，其允许用户将 物品，方块，实体 的标志符捆绑为一个标签组以方便分类。GriefDefender 将与标签系统集成并将其导出为情境用以 标签(Flag)/选项(Option)。</p><p>例如，假设您希望允许与以下站立告示牌进行交互</p><ul><li>oak_sign, spruce_sign, birch_sign, acacia_sign, jungle_sign, dark_oak_sign, crimson_sign, warped_sign</li></ul><p>如果没有标签组，您只能手动将一个个告示牌的标志符添加到权限的情境当中，就像这样</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/cf interact-block-secondary oak_sign true\n/cf interact-block-secondary spruce_sign true\n/cf interact-block-secondary birch_sign true\n更多诸如此类的东西..\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这十分麻烦且会让您的权限系统变得一团乱麻。</p>',6),t=(0,r.Uk)("使用标签系统，您可以将提供的标签组用于所有名为 "),l={href:"https://minecraft.gamepedia.com/Tag#blocks_standing_signs",target:"_blank",rel:"noopener noreferrer"},i=(0,r.Uk)("#standing_signs"),c=(0,r._)("p",null,"使用如上的标签组将简化您原来繁琐的命令为一条",-1),p=(0,r._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,r._)("pre",{class:"language-text"},[(0,r._)("code",null,"/cf interact-block-secondary #standing_signs\n")]),(0,r._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,r._)("span",{class:"line-number"},"1"),(0,r._)("br")])],-1),o=(0,r._)("p",null,[(0,r.Uk)("这为用户提供了极大的灵活性，不仅可以保护一件东西，还可以保护许多东西。 注意: 标签组名称总以 "),(0,r._)("code",null,"#"),(0,r.Uk)(" 开头")],-1),u=(0,r.Uk)("现在让我们假设您有一些特殊需求，并且提供的原版标签组所标记的内容并不能满足您的服务器的需求。该示例将指导您将 "),d={href:"https://minecraft.gamepedia.com/Data_Pack",target:"_blank",rel:"noopener noreferrer"},m=(0,r.Uk)("数据包"),g=(0,r.Uk)(" 引入游戏。"),b={href:"https://minecraft.gamepedia.com/Data_Pack",target:"_blank",rel:"noopener noreferrer"},_=(0,r.Uk)("数据包"),k=(0,r.Uk)(" 允许服务器管理员通过定制成就、合成表、掉落物表、标签组 等行为增强 minecraft 体验。"),f=(0,r._)("p",null,"要创建一个用以添加 自定义标签组 的数据包，请执行以下操作",-1),h=(0,r._)("li",null,[(0,r.Uk)("导航到要在其中使用数据包的世界文件夹。 例如 "),(0,r._)("code",null,"./world/datapacks")],-1),U=(0,r.Uk)("参考 "),y={href:"https://minecraft.gamepedia.com/Data_Pack",target:"_blank",rel:"noopener noreferrer"},x=(0,r.Uk)("这里"),v=(0,r.Uk)(" 的介绍来创建一个数据包。 注意：数据包文件夹结构应在 world 文件夹中设置如下"),D=(0,r.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>datapacks/\n└── &lt;datapack_name&gt;/\n    ├── data/\n    │   ├── &lt;namespace&gt;/\n    │   │   ├── tags/\n    │   │   │   ├── blocks/\n    │   │   │   ├── entity_types/\n    │   │   │   ├── fluids/\n    │   │   │   └── items/\n    │   │   └── other...\n    │   └── \n    └── pack.mcmeta\n\n注意：在文件夹中的 minecraft 服务器 jar 的根目录中可以找到一个实际的示例 `data`  \n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>',1),w={start:"3"},G=(0,r._)("li",null,"在数据包中创建任意数量的 标签组，并在其中添加所需的任何其他自定义数据。",-1),z=(0,r._)("li",null,"启动服务器",-1),P=(0,r.Uk)("通过运行命令验证您的数据包是否已加载 "),T=(0,r._)("code",null,"/datapack list enabled",-1),W=(0,r.Uk)("。查看 "),C={href:"https://minecraft.gamepedia.com/Data_Pack",target:"_blank",rel:"noopener noreferrer"},E=(0,r.Uk)("数据包命令"),F=(0,r.Uk)(" 以获取更多信息 注意：如果未启用数据包，则步骤2中显示的数据包结构很可能是错误的。"),O=(0,r._)("p",null,"如果您成功加载数据包，GD 将自动将所有 标签组 加载到其 情境注册表 中，供您与 标志(Flag) 一起使用。",-1),j=(0,r._)("p",null,[(0,r.Uk)("要验证 标签组 是否与 GriefDefender 中的特定操作一起工作，请运行 "),(0,r._)("code",null,"/gddebug"),(0,r.Uk)(" 命令并检查 情境 列，该列将显示所有已被调用的 标签组。")],-1),L={},M=(0,a(3744).Z)(L,[["render",function(e,n){const a=(0,r.up)("ExternalLinkIcon");return(0,r.wg)(),(0,r.iD)(r.HY,null,[s,(0,r._)("p",null,[t,(0,r._)("a",l,[i,(0,r.Wm)(a)])]),c,p,o,(0,r._)("p",null,[u,(0,r._)("a",d,[m,(0,r.Wm)(a)]),g]),(0,r._)("p",null,[(0,r._)("a",b,[_,(0,r.Wm)(a)]),k]),f,(0,r._)("ol",null,[h,(0,r._)("li",null,[U,(0,r._)("a",y,[x,(0,r.Wm)(a)]),v])]),D,(0,r._)("ol",w,[G,z,(0,r._)("li",null,[P,T,W,(0,r._)("a",C,[E,(0,r.Wm)(a)]),F])]),O,j],64)}]])}}]);