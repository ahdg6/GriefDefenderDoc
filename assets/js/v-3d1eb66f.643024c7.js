"use strict";(self.webpackChunkgriefdefender=self.webpackChunkgriefdefender||[]).push([[2109],{7410:(n,s,e)=>{e.r(s),e.d(s,{data:()=>t});const t={key:"v-3d1eb66f",path:"/zh/hooks/dynmap.html",title:"Dynmap",lang:"zh-CN",frontmatter:{title:"Dynmap",category:["Dev"],summary:"In order to use GriefDefender's Dynmap provider, you must have GDHooks installed. See https://github.com/bloodmc/GriefDefender/wiki/GDHooks Bukkit Dynmap - Download ; Sample Dynmap",head:[["meta",{property:"og:url",content:"https://bloodmc.github.io/GrierDefenderDoc/GriefDefenderDoc/zh/hooks/dynmap.html"}],["meta",{property:"og:title",content:"Dynmap"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}]],tag:["plugin"]},excerpt:"",headers:[],git:{createdTime:1646296717e3,updatedTime:1646296717e3,contributors:[{name:"ahdg",email:"ahdg6@outlook.com",commits:1}]},readingTime:{minutes:.88,words:265},filePathRelative:"zh/hooks/dynmap.md"}},7724:(n,s,e)=>{e.r(s),e.d(s,{default:()=>b});var t=e(6252);const a=(0,t._)("p",null,[(0,t.Uk)("In order to use GriefDefender's Dynmap provider, you must have GDHooks installed."),(0,t._)("br"),(0,t.Uk)(" See https://github.com/bloodmc/GriefDefender/wiki/GDHooks")],-1),l=(0,t._)("p",null,[(0,t._)("strong",null,"Bukkit")],-1),r=(0,t.Uk)("Dynmap - "),o={href:"https://www.spigotmc.org/resources/dynmap.274/",target:"_blank",rel:"noopener noreferrer"},i=(0,t.Uk)("Download"),p=(0,t.uE)('<details><summary>Sample Dynmap Configuration</summary><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>dynmap {\n    claimtype-styles {\n        admin {\n            fill-color=&quot;#FF0000&quot;\n            fill-opacity=0.35\n            label=none\n            stroke-color=&quot;#FF0000&quot;\n            stroke-opacity=0.8\n            stroke-weight=3\n        }\n        basic {\n            fill-color=&quot;#FF0000&quot;\n            fill-opacity=0.35\n            label=none\n            stroke-color=&quot;#FF0000&quot;\n            stroke-opacity=0.8\n            stroke-weight=3\n        }\n        subdivision {\n            fill-color=&quot;#FF0000&quot;\n            fill-opacity=0.35\n            label=none\n            stroke-color=&quot;#FF0000&quot;\n            stroke-opacity=0.8\n            stroke-weight=3\n        }\n        town {\n            fill-color=&quot;#FF0000&quot;\n            fill-opacity=0.35\n            label=none\n            stroke-color=&quot;#FF0000&quot;\n            stroke-opacity=0.8\n            stroke-weight=3\n        }\n    }\n    enabled=true\n    hidden-regions=[]\n    info-window-admin=&quot;&lt;div class=\\&quot;infowindow\\&quot;&gt;&lt;span style=\\&quot;font-weight:bold;\\&quot;&gt;Administrator Claim&lt;/span&gt;&lt;br/&gt;Permission Trust: &lt;span style=\\&quot;font-weight:bold;\\&quot;&gt;%managers%&lt;/span&gt;&lt;br/&gt;Trust: &lt;span style=\\&quot;font-weight:bold;\\&quot;&gt;%builders%&lt;/span&gt;&lt;br/&gt;Container Trust: &lt;span style=\\&quot;font-weight:bold;\\&quot;&gt;%containers%&lt;/span&gt;&lt;br/&gt;Access Trust: &lt;span style=\\&quot;font-weight:bold;\\&quot;&gt;%accessors%&lt;/span&gt;&lt;/div&gt;&quot;\n    info-window-basic=&quot;&lt;div class=\\&quot;infowindow\\&quot;&gt;Name: &lt;span style=\\&quot;font-weight:bold;\\&quot;&gt;%claimname%&lt;/span&gt;&lt;br/&gt;Owner: &lt;span style=\\&quot;font-weight:bold;\\&quot;&gt;%owner%&lt;/span&gt;&lt;br/&gt;Type: &lt;span style=\\&quot;font-weight:bold;\\&quot;&gt;%gdtype%&lt;/span&gt;&lt;br/&gt;Last Seen: &lt;span style=\\&quot;font-weight:bold;\\&quot;&gt;%lastseen%&lt;/span&gt;&lt;br/&gt;Permission Trust: &lt;span style=\\&quot;font-weight:bold;\\&quot;&gt;%managers%&lt;/span&gt;&lt;br/&gt;Trust: &lt;span style=\\&quot;font-weight:bold;\\&quot;&gt;%builders%&lt;/span&gt;&lt;br/&gt;Container Trust: &lt;span style=\\&quot;font-weight:bold;\\&quot;&gt;%containers%&lt;/span&gt;&lt;br/&gt;Access Trust: &lt;span style=\\&quot;font-weight:bold;\\&quot;&gt;%accessors%&lt;/span&gt;&lt;/div&gt;&quot;\n    layer-hide-by-default=false\n    layer-priority=10\n    minzoom=0\n    owner-styles {}\n    use-3d-regions=false\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div></details>',1),u={},b=(0,e(3744).Z)(u,[["render",function(n,s){const e=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)(t.HY,null,[a,l,(0,t._)("ul",null,[(0,t._)("li",null,[r,(0,t._)("a",o,[i,(0,t.Wm)(e)])])]),p],64)}]])}}]);