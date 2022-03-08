"use strict";(self.webpackChunkgriefdefender=self.webpackChunkgriefdefender||[]).push([[1917],{3253:(e,i,a)=>{a.r(i),a.d(i,{data:()=>l});const l={key:"v-3a677d82",path:"/zh/guide/claim/claim-types.html",title:"领地类型",lang:"zh-CN",frontmatter:{title:"领地类型",category:["领地"],tag:["类型"],icon:"fa-solid fa-grid",summary:"这是一个正在施工中的页面，将涵盖 GD 的所有领地类型--基本领地、细分领地、城镇领地和管理员领地。. 领地类型 有四种类型的用户领地：管理员、城镇、基本和细分，每一种都有一个 2D 和 3D 模式。要在不同类型之间切换，请使用 /adminclaims 、 /townclaims 和 /basicclaims 。要切换到细分模式，使用 /claimsubd",head:[["meta",{property:"og:url",content:"https://bloodmc.github.io/GrierDefenderDoc/GriefDefenderDoc/zh/guide/claim/claim-types.html"}],["meta",{property:"og:title",content:"领地类型"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{property:"article:tag",content:"类型"}]]},excerpt:"",headers:[{level:2,title:"领地类型",slug:"领地类型",children:[]},{level:2,title:"基本领地",slug:"基本领地",children:[{level:3,title:"子领地",slug:"子领地",children:[]},{level:3,title:"管理员",slug:"管理员",children:[]},{level:3,title:"城镇领地",slug:"城镇领地",children:[]},{level:3,title:"野外",slug:"野外",children:[]}]}],git:{createdTime:1646752853e3,updatedTime:1646752853e3,contributors:[{name:"ahdg6",email:"ahdg6@outlook.com",commits:1}]},readingTime:{minutes:2.96,words:887},filePathRelative:"zh/guide/claim/claim-types.md"}},5947:(e,i,a)=>{a.r(i),a.d(i,{default:()=>m});var l=a(6252);const d=(0,l.uE)('<p><em>这是一个正在施工中的页面，将涵盖 GD 的所有领地类型--基本领地、细分领地、城镇领地和管理员领地。.</em></p><h2 id="领地类型" tabindex="-1"><a class="header-anchor" href="#领地类型" aria-hidden="true">#</a> 领地类型</h2><p>有四种类型的用户领地：管理员、城镇、基本和细分，每一种都有一个 2D 和 3D 模式。要在不同类型之间切换，请使用 <code>/adminclaims</code> 、 <code>/townclaims</code> 和 <code>/basicclaims</code> 。要切换到细分模式，使用 <code>/claimsubdivide</code> 。所有三种主要领地类型都支持直接的子领地（细分）--城镇、管理员和基本。</p>',3),t=(0,l.Uk)("管理员领地没有大小限制，与普通玩家可创建的基本领地相比，有不同的 Flag. 城镇也可以由玩家创建，并支持在城镇领地中创建基本领地。基本领地是玩家的首选领地类型，并且可以支持玩家自己管理领地的 Flags. 更多信息，请访问我们的 "),r={href:"https://bloodmc.github.io/GriefDefenderDoc/zh/guide/permissions/",target:"_blank",rel:"noopener noreferrer"},c=(0,l.Uk)("权限"),o=(0,l.Uk)(" 页面，它将帮助你分配适当的权限。"),n=(0,l.uE)('<h2 id="基本领地" tabindex="-1"><a class="header-anchor" href="#基本领地" aria-hidden="true">#</a> 基本领地</h2><p>基本领地是用于用户的默认领地类型.</p><p>一个基本领地具有以下功能</p><ul><li>2D 模式下的 5x5 尺寸限制. 3D 模式下的 5x5x5 尺寸限制.</li><li>可以出售、出租或转让给其他玩家.</li><li>需要领地方块.</li></ul><p>这是使用领地工具(minecraft:golden_shovel) 时的默认圈地类型模式。 注意: 使用 <code>/basicclaims</code> 或 <code>/gd mode basic</code> 来切换到这种圈地类型模式。.</p><h3 id="子领地" tabindex="-1"><a class="header-anchor" href="#子领地" aria-hidden="true">#</a> 子领地</h3><p>子领地用于将最高级别的领地，如基本/管理员/城镇细分为较小的区域.</p><p>子领地具有以下功能</p><ul><li>2D 模式下的 1x1 尺寸限制. 3D 模式下的 1x1x1 尺寸限制.</li><li>可以出售、出租或转让给其他玩家.</li><li>由所有者创建时不需要领地方块.</li></ul><h3 id="管理员" tabindex="-1"><a class="header-anchor" href="#管理员" aria-hidden="true">#</a> 管理员</h3><p>管理员领地是最适合管理的. 它们可以叠加在任何领地类型上，以强制执行Flags. 要创建一个管理员领地，需要权限节点 <code>griefdefender.admin.claim.command.admin-mode</code>. 注意: 推荐使用 <code>griefdefender.admin</code> --它将允许对管理员类型的领地进行管理。</p><p>管理员领地具有以下能力</p><ul><li>没有大小限制.</li><li>创建不需要任何费用.</li><li>可以围绕任何现有的领地进行创建.</li><li>可以租借.</li><li>仅由管理员使用.</li></ul><p>注意: 使用 <code>/adminclaims</code> 或 <code>/gd mode admin</code> 来切换到这种领地类型模式。</p><h3 id="城镇领地" tabindex="-1"><a class="header-anchor" href="#城镇领地" aria-hidden="true">#</a> 城镇领地</h3><p>城镇领地是引入 GriefDefender 的第三种玩家领地类型. 当拿着金铲子时, 使用 <code>/townclaims</code> 切换到城镇领地模式. 一旦创建,城镇领地可以容纳其他基本领地，就像基本或管理员领地的细分领地一样.</p><p>一个城镇领地有以下功能</p><ul><li>在 2D 模式下有 32x32 的尺寸限制. 在 3D 模式下有 32x32x32 的尺寸限制。</li><li>需要领地方块.</li><li>支持内部的基本领地.</li><li>创建限制为1,这意味着你默认只能创建一个城镇. 注意: 这可以通过改变 <code>griefdefender.create-limit</code> 在 <code>gd_claim_default=town</code> 情境下来达到一个高于 1 的值.</li></ul><h3 id="野外" tabindex="-1"><a class="header-anchor" href="#野外" aria-hidden="true">#</a> 野外</h3><p>荒野是一种管理员领地。它在世界首次加载时自动创建，并使用任何未被用户拥有的空间。它的功能就像任何其他领地一样，你可以给它分配 Flags 和 Options.默认情况下，在荒野中允许所有的操作。</p>',20),h={},m=(0,a(3744).Z)(h,[["render",function(e,i){const a=(0,l.up)("ExternalLinkIcon");return(0,l.wg)(),(0,l.iD)(l.HY,null,[d,(0,l._)("p",null,[t,(0,l._)("a",r,[c,(0,l.Wm)(a)]),o]),n],64)}]])}}]);