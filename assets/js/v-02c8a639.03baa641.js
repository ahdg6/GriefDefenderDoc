"use strict";(self.webpackChunkgriefdefender=self.webpackChunkgriefdefender||[]).push([[8808],{103:(e,t,r)=>{r.r(t),r.d(t,{data:()=>d});const d={key:"v-02c8a639",path:"/zh/guide/basic/trust-system.html",title:"信任系统",lang:"zh-CN",frontmatter:{title:"信任系统",category:["领地"],icon:"profile",summary:"有四种不同类型的信任。访问者、建造师、容器和管理者. 选项 选项 描述 --------- ----------- `` 需要信任的玩家. 需要信任的组. 注意: 如果你信任所有人, 使用 public`. 信任类型 [none, accessor, builder, container, manager]. 注意: 如果你想移除信任, 使用 none. N",head:[["meta",{property:"og:url",content:"https://bloodmc.github.io/GrierDefenderDoc/GriefDefenderDoc/zh/guide/basic/trust-system.html"}],["meta",{property:"og:title",content:"信任系统"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}]],tag:["权限"]},excerpt:"",headers:[{level:3,title:"选项",slug:"选项",children:[]},{level:3,title:"信任玩家",slug:"信任玩家",children:[]},{level:3,title:"信任权限组",slug:"信任权限组",children:[]},{level:3,title:"移除信任玩家",slug:"移除信任玩家",children:[]},{level:3,title:"移除信任权限组",slug:"移除信任权限组",children:[]},{level:2,title:"信任名单",slug:"信任名单",children:[]}],git:{createdTime:1646202169e3,updatedTime:1646202169e3,contributors:[{name:"ahdg",email:"36436808+ahdg6@users.noreply.github.com",commits:1}]},readingTime:{minutes:1.19,words:358},filePathRelative:"zh/guide/basic/trust-system.md"}},3698:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const d=(0,r(6252).uE)('<p>有四种不同类型的信任。访问者、建造师、容器和管理者.</p><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><table><thead><tr><th>选项</th><th>描述</th></tr></thead><tbody><tr><td><code>&lt;player&gt;</code></td><td>需要信任的玩家.</td></tr><tr><td><code>&lt;group&gt;</code></td><td>需要信任的组. 注意: 如果你信任所有人, 使用 <code>public</code>.</td></tr><tr><td><code>&lt;type&gt;</code></td><td>信任类型 [none, accessor, builder, container, manager]. 注意: 如果你想移除信任, 使用 <code>none</code>. <br><em>None</em>: <code>撤销一个玩家/权限组对你的领地的访问权</code><br><em>Accessor</em>: <code>授予玩家/权限组与除库存以外的所有方块互动的权限</code><br><em>Container</em>: <code>授予玩家/权限组与所有方块互动的权限，包括库存。</code><br><em>Builder</em>: <code>授予玩家/权限组编辑权限，包括放置和破坏方块的能力，以实现上述所有功能</code><br><em>Manager</em>: <code>授予玩家/权限组对上述所有内容的访问权，包括修改领地的能力</code></td></tr></tbody></table><h3 id="信任玩家" tabindex="-1"><a class="header-anchor" href="#信任玩家" aria-hidden="true">#</a> 信任玩家</h3><p><strong>指令</strong>: <code>/gd trust player &lt;player&gt; &lt;type&gt;</code><br><strong>别名</strong>: <code>trust</code><br><strong>例子</strong>: <code>/gd trust player Kratos basic</code></p><p>授予玩家访问你的领地.</p><h3 id="信任权限组" tabindex="-1"><a class="header-anchor" href="#信任权限组" aria-hidden="true">#</a> 信任权限组</h3><p><strong>指令</strong>: <code>/gd trust group &lt;group&gt; &lt;type&gt;</code><br><strong>别名</strong>: <code>trust</code></p><p>授予权限组访问你的领地.</p><h3 id="移除信任玩家" tabindex="-1"><a class="header-anchor" href="#移除信任玩家" aria-hidden="true">#</a> 移除信任玩家</h3><p><strong>指令</strong>: <code>/gd trust player &lt;player&gt; none</code></p><p>撤销一个玩家对你领地的访问权.</p><h3 id="移除信任权限组" tabindex="-1"><a class="header-anchor" href="#移除信任权限组" aria-hidden="true">#</a> 移除信任权限组</h3><p><strong>指令</strong>: <code>/gd trust group &lt;group&gt; none</code></p><p>撤销一个权限组对你领地的访问权.</p><h2 id="信任名单" tabindex="-1"><a class="header-anchor" href="#信任名单" aria-hidden="true">#</a> 信任名单</h2><p><strong>指令</strong>: <code>/trustlist</code></p><p>列出当前受信任的玩家和信任类型.</p>',18),o={},a=(0,r(3744).Z)(o,[["render",function(e,t){return d}]])}}]);