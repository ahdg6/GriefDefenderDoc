"use strict";(self.webpackChunkgriefdefender=self.webpackChunkgriefdefender||[]).push([[1429],{9262:(e,a,d)=>{d.r(a),d.d(a,{data:()=>r});const r={key:"v-47197251",path:"/zh/guide/%E9%A2%86%E5%9C%B0%E8%AE%BE%E5%AE%9A/flags.html",title:"领地设定",lang:"zh-CN",frontmatter:{title:"领地设定",category:["Flag"],icon:"token",summary:"标签机制 era基础标签(Flags)era GD 对一些事件进行了包装，这些事件往往常用于领地设定，成为 era预设标签era 的组成部分，我们称之为 era基础标签(Flags)era 例子：interact-block-primary - (对方块左键) interact-inventory-click - (背包内点击) entity-spawn -",head:[["meta",{property:"og:url",content:"https://bloodmc.github.io/GrierDefenderDoc/GriefDefenderDoc/zh/guide/%E9%A2%86%E5%9C%B0%E8%AE%BE%E5%AE%9A/flags.html"}],["meta",{property:"og:title",content:"领地设定"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}]]},excerpt:"",headers:[{level:2,title:"标签机制",slug:"标签机制",children:[{level:3,title:"era基础标签(Flags)era",slug:"era基础标签-flags-era",children:[]},{level:3,title:"预设标签(Flag-definitions)",slug:"预设标签-flag-definitions",children:[]},{level:3,title:"情境(Contexts)",slug:"情境-contexts",children:[]},{level:3,title:"判断阶段(抽象概念)",slug:"判断阶段-抽象概念",children:[]},{level:3,title:"标签调试模式 (/cfdebug)",slug:"标签调试模式-cfdebug",children:[]}]},{level:2,title:"命令",slug:"命令",children:[{level:3,title:"参数",slug:"参数",children:[]},{level:3,title:"命令列表",slug:"命令列表",children:[]}]},{level:2,title:"一些用例",slug:"一些用例",children:[{level:3,title:"用例 1",slug:"用例-1",children:[]},{level:3,title:"用例 2",slug:"用例-2",children:[]},{level:3,title:"用例 3",slug:"用例-3",children:[]},{level:3,title:"用例 4",slug:"用例-4",children:[]},{level:3,title:"用例 5",slug:"用例-5",children:[]},{level:3,title:"用例 6",slug:"用例-6",children:[]}]},{level:2,title:"通过 LuckPerms 添加",slug:"通过-luckperms-添加",children:[{level:3,title:"用例 1",slug:"用例-1-1",children:[]}]},{level:2,title:"可用的标签",slug:"可用的标签",children:[]}],git:{createdTime:1646202169e3,updatedTime:1646202169e3,contributors:[{name:"ahdg",email:"36436808+ahdg6@users.noreply.github.com",commits:1}]},readingTime:{minutes:4.24,words:1271},filePathRelative:"zh/guide/领地设定/flags.md"}},2618:(e,a,d)=>{d.r(a),d.d(a,{default:()=>h});var r=d(6252);const t=(0,r.uE)('<h2 id="标签机制" tabindex="-1"><a class="header-anchor" href="#标签机制" aria-hidden="true">#</a> 标签机制</h2><h3 id="era基础标签-flags-era" tabindex="-1"><a class="header-anchor" href="#era基础标签-flags-era" aria-hidden="true">#</a> era基础标签(Flags)era</h3><p>GD 对一些事件进行了包装，这些事件往往常用于领地设定，成为 era预设标签era 的组成部分，我们称之为 era基础标签(Flags)era 例子：<code>interact-block-primary</code> - (对方块左键) | <code>interact-inventory-click</code> - (背包内点击) | <code>entity-spawn</code> - (实体生成) 等等 在上述例子中，部分 era基础标签era 出于性能考量是关闭的[例如 entity-spawn]，您可以在 <code>flags.conf</code> 中开启。</p><h3 id="预设标签-flag-definitions" tabindex="-1"><a class="header-anchor" href="#预设标签-flag-definitions" aria-hidden="true">#</a> 预设标签(Flag-definitions)</h3><p>由 era基础标签era 组成，era情境era 限定，可根据权限分发到游戏中介面供玩家使用，以 era预设集era 作为显示单位， GD 在初始化时自动生成 era预设集era <code>./presets/minecraft.conf</code>。</p><h3 id="情境-contexts" tabindex="-1"><a class="header-anchor" href="#情境-contexts" aria-hidden="true">#</a> 情境(Contexts)</h3>',6),c=(0,r.Uk)("LuckPerms 中的情境系统，详见 "),o={href:"https://luckperms.net/wiki/Context",target:"_blank",rel:"noopener noreferrer"},l=(0,r.Uk)("官方Wiki"),i=(0,r.uE)(" ，GD 对 Luckperms 的 era情境 era 进行了延展，添加了部分又能使其和 era基础标签era 限定作用情境。 例如：<code>source</code> - <strong>标签触发的来源</strong> | <code>target</code> - <strong>标签作用的对象</strong> | <code>boots</code> - <strong>标签触发时装备的胸甲</strong> | <code>gametime</code> - <strong>游戏内所处时间</strong>等等 注意：部分 era情境era 只能限定相应的标签，您不可能将 <code>boots</code> 限定 <code>entity-spawn</code> 这个标签。",21),n=(0,r.uE)('<h3 id="判断阶段-抽象概念" tabindex="-1"><a class="header-anchor" href="#判断阶段-抽象概念" aria-hidden="true">#</a> 判断阶段(抽象概念)</h3><p>你可能注意到了，标签的判断是分阶段的 目前这个阶段可以分为 <code>默认(default)--&gt;领地(claim)--&gt;子领地(sub)--&gt;覆写(override)</code> 注：<code>默认</code> 对应情境 <code>default=types</code>，<code>覆写</code> 对应情境 <code>override=types</code>。 检查优先级依次增高，<code>默认</code>指的是该标签在原封不动情况下的默认值，<code>领地</code>指的是后边更改的值，<code>子领地</code>指的是领地中子领地又整上的新值，<code>覆写</code>处于最高优先级，往往只有管理员能使用。 这意味着当有两个标签冲突时，比如在领地设定中设置在 <code>领地</code> 内<strong>PVP禁止</strong>，但覆写标签中添加了<strong>PVP开启</strong>，那么领地行为遵照<code>PVP开启这个行径</code>。</p><h3 id="标签调试模式-cfdebug" tabindex="-1"><a class="header-anchor" href="#标签调试模式-cfdebug" aria-hidden="true">#</a> 标签调试模式 (/cfdebug)</h3><p>常用于测试标签状态，当该模式开启时，GD 将会视你为<strong>一般的过路人</strong>，所有关于领地标签的设定都将<strong>不再</strong>以你原来的权限进行判断，这有助于你在调整完 flag 后进行测试。</p><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p><code>&lt;必填项&gt; [选填项]</code></p><table><thead><tr><th>参数类型</th><th>描述</th></tr></thead><tbody><tr><td><code>&lt;标签&gt;</code></td><td>要进行操作的 era基础标签era 类型</td></tr><tr><td><code>&lt;作用对象&gt;</code></td><td>该标签即将影响的对象，一个例子 <code>minecraft:dirt</code>。使用 <code>any</code> 或 <code>modid:any</code> 作通配符管理。</td></tr><tr><td><code>&lt;值&gt;</code></td><td>设置标签返回的值，<code>false(否)|undefined(未定义)|true(是)</code> 三种状态，其中 <code>undefined</code> 可以用 <code>0</code> 代替</td></tr><tr><td><code>[键=值]</code></td><td>可选项，尝用于 情境限定:<br><code>override=type</code> 意味着会在指定的 领地类型(type) 中将该操作标签添加到 覆写</td></tr></tbody></table><p>示例：/cf block-break minecraft:dirt false source=player override=admin 意味着在 <code>所有(override)</code> 类型为 <code>管理员领地(admin)</code> 中 <code>禁用(false)</code> 由 <code>玩家(source=player)</code> 发出，对 <code>泥土(minecraft:dirt)</code> 进行<code>方块破坏(block-break)</code>的行为。</p><h3 id="命令列表" tabindex="-1"><a class="header-anchor" href="#命令列表" aria-hidden="true">#</a> 命令列表</h3><hr><h4 id="gd-claim-debug" tabindex="-1"><a class="header-anchor" href="#gd-claim-debug" aria-hidden="true">#</a> <code>/gd claim debug</code></h4><p><strong>别称</strong>: <code>cfd|claimflagdebug</code></p><p>切换 <code>领地标签调试</code></p><hr><h4 id="gd-flag-claim-标签-作用对象-值-情境" tabindex="-1"><a class="header-anchor" href="#gd-flag-claim-标签-作用对象-值-情境" aria-hidden="true">#</a> <code>/gd flag claim [&lt;标签&gt; &lt;作用对象&gt; &lt;值&gt; [情境]</code></h4><p><strong>别称</strong>: <code>cf|claimflag</code></p><p>编辑 era基础标签era</p><hr><h4 id="gd-flag-group-权限组-标签-作用对象-值-情境" tabindex="-1"><a class="header-anchor" href="#gd-flag-group-权限组-标签-作用对象-值-情境" aria-hidden="true">#</a> <code>/gd flag group &lt;权限组&gt; [&lt;标签&gt; &lt;作用对象&gt; &lt;值&gt; [情境]</code></h4><p><strong>别称</strong>: <code>cfg|claimflaggroup</code></p><p>编辑 era基础标签era，但影响的对象是权限组。 常用于限制某个权限组的行为，示例 /cfg default block-break minecraft:dirt false 就是让整个 default 权限组都不能破坏泥土。</p><hr><h4 id="gd-flag-player-player-标签-作用对象-值-情境" tabindex="-1"><a class="header-anchor" href="#gd-flag-player-player-标签-作用对象-值-情境" aria-hidden="true">#</a> <code>/gd flag player &lt;player&gt; [&lt;标签&gt; &lt;作用对象&gt; &lt;值&gt; [情境]</code></h4><p><strong>别称</strong>: <code>cfp|claimflagplayer</code></p><p>编辑 era基础标签era，但影响的对象是玩家。 和上述类似</p><hr><h4 id="gd-flag-reset" tabindex="-1"><a class="header-anchor" href="#gd-flag-reset" aria-hidden="true">#</a> <code>/gd flag reset</code></h4><p><strong>别称</strong>: <code>cfr|claimflagreset</code></p><p>重置一个领地的标签设定为默认，默认值可以在配置文件中更改。</p><h2 id="一些用例" tabindex="-1"><a class="header-anchor" href="#一些用例" aria-hidden="true">#</a> 一些用例</h2><p>era基础标签era 可以应用到 <code>玩家|权限组</code>，各类型领地(基础，子领地，城镇，管理员) 上边。</p><h3 id="用例-1" tabindex="-1"><a class="header-anchor" href="#用例-1" aria-hidden="true">#</a> 用例 1</h3><p>防止 <code>灰色羊毛</code> 被破坏 <code>/cf block-break minecraft:wool.5 false</code></p><p>如果不指定 modid，默认 minecraft 开头， <code>modid:blockid.meta</code>，不指定 meta 默认返回 0。</p><h3 id="用例-2" tabindex="-1"><a class="header-anchor" href="#用例-2" aria-hidden="true">#</a> 用例 2</h3><p>允许 <code>宝可梦精灵球</code> 与 <code>所有(override)</code> 的 <code>基础类型(basic)</code> 领地发生交互。</p><p><code>/cf projectile-impact-block any true source=pixelmon:occupiedpokeball override=basic</code></p><h3 id="用例-3" tabindex="-1"><a class="header-anchor" href="#用例-3" aria-hidden="true">#</a> 用例 3</h3><p>防止在权限组 &quot;Jailed&quot; 中的 <code>玩家(source=minecraft:player)</code> 在 <code>所有(override)</code> 的 <code>管理员领地(admin)</code> 中无法使用 <code>任何(any)</code> 类型的传送门。</p><p><code>/cfg Jailed portal-use any false source=minecraft:player override=admin</code></p><h3 id="用例-4" tabindex="-1"><a class="header-anchor" href="#用例-4" aria-hidden="true">#</a> 用例 4</h3><p>防止叫 &quot;notch&quot; 的玩家在当前领地中无法右键床。</p><p><code>/cfp notch interact-block-secondary minecraft:bed false</code></p><h3 id="用例-5" tabindex="-1"><a class="header-anchor" href="#用例-5" aria-hidden="true">#</a> 用例 5</h3><p>防止运行宝可梦中 &#39;/shop select&#39; 命令运行。</p><p><code>/cf command-execute pixelmon:shop[select] false</code></p><h3 id="用例-6" tabindex="-1"><a class="header-anchor" href="#用例-6" aria-hidden="true">#</a> 用例 6</h3><p>防止使用某物品右键某实体</p><p><code>/cf interact-entity-secondary item_id entity_id false</code></p><h2 id="通过-luckperms-添加" tabindex="-1"><a class="header-anchor" href="#通过-luckperms-添加" aria-hidden="true">#</a> 通过 LuckPerms 添加</h2><h3 id="用例-1-1" tabindex="-1"><a class="header-anchor" href="#用例-1-1" aria-hidden="true">#</a> 用例 1</h3><p>关闭 <code>starters</code> 权限组中对动物的伤害</p><p>GD:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/cfg starters entity-damage #animal false default=basic\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>LP:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/lp group starters permission set griefdefender.flag.entity-damage false gd_claim_default=basic target=#animal\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="可用的标签" tabindex="-1"><a class="header-anchor" href="#可用的标签" aria-hidden="true">#</a> 可用的标签</h2><p>请以 <code>flags.conf</code> 为准</p>',59),s={},h=(0,d(3744).Z)(s,[["render",function(e,a){const d=(0,r.up)("ExternalLinkIcon");return(0,r.wg)(),(0,r.iD)(r.HY,null,[t,(0,r._)("p",null,[c,(0,r._)("a",o,[l,(0,r.Wm)(d)]),i]),n],64)}]])}}]);