"use strict";(self.webpackChunkgriefdefender=self.webpackChunkgriefdefender||[]).push([[6611],{6906:(e,a,n)=>{n.r(a),n.d(a,{data:()=>t});const t={key:"v-30588143",path:"/zh/guide/basic/claim-rent-system.html",title:"Rent System",lang:"zh-CN",frontmatter:{title:"Rent System",category:["Economy"],icon:"view",summary:"This new system will allow you to set your claim up for rent and earn some money on the way. How to enable it Open your global.conf file and under economy section, you will find th",head:[["meta",{property:"og:url",content:"https://bloodmc.github.io/GrierDefenderDoc/GriefDefenderDoc/zh/guide/basic/claim-rent-system.html"}],["meta",{property:"og:title",content:"Rent System"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}]],tag:["rent"]},excerpt:"",headers:[{level:3,title:"Example 1",slug:"example-1",children:[]},{level:3,title:"Example 2",slug:"example-2",children:[]},{level:3,title:"Example 3",slug:"example-3",children:[]},{level:3,title:"Example 1",slug:"example-1-1",children:[]},{level:3,title:"Example 2",slug:"example-2-1",children:[]},{level:3,title:"Example 3",slug:"example-3-1",children:[]},{level:3,title:"Example 4",slug:"example-4",children:[]},{level:3,title:"Example 5",slug:"example-5",children:[]},{level:2,title:"Current Features",slug:"current-features",children:[]}],git:{createdTime:1646215768e3,updatedTime:1646215768e3,contributors:[{name:"ahdg",email:"ahdg6@outlook.com",commits:1}]},readingTime:{minutes:3.02,words:905},filePathRelative:"zh/guide/basic/claim-rent-system.md"}},8401:(e,a,n)=>{n.r(a),n.d(a,{default:()=>s});const t=(0,n(6252).uE)('<p><img src="https://media.discordapp.net/attachments/709505646457913426/709992848963141632/2019-12-18_22.png" alt="Rent System" loading="lazy"></p><p>This new system will allow you to set your claim up for rent and earn some money on the way.</p><h1 id="how-to-enable-it" tabindex="-1"><a class="header-anchor" href="#how-to-enable-it" aria-hidden="true">#</a> How to enable it</h1><p>Open your global.conf file and under economy section, you will find the following lines:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        # The specific hour in day to attempt to get owed claim rent balances from delinquent renters. Note: This uses military time and accepts values between 0-23. Default: 0\n        rent-delinquent-task-apply-hour=0\n        # Controls the maximum time limit(hours or days) that a claim owner can have their rental max set to.\n        # Note: This only affects claim rentals that have a max specified. If no max is specified by the claim owner, a renter may rent as long as they want.\n        rent-max-time-limit=100\n        # Controls which day a player should start to receive warnings about their rented claim nearing expiration. \n        # Ex. If set to &#39;5&#39;, this will begin to send players messaging on login and at the rent apply hour when 5 days are remaining before expiration.\n        # Note: This only applies if the owner has &#39;rent-restore&#39; option enabled and the rent owner sets a max.\n        rent-restore-day-warning=5\n        # Controls whether rented admin claims will use a schematic for restoration.\n        # Note: If set, the claim will create a schematic on rental start and restore it back when finished.\n        # Note: This ONLY applies to rentals with a max date set.\n        rent-schematic-restore-admin=false\n        # Whether rent signs are enabled.\n        rent-sign=false\n        # Controls whether the rent system is enabled. Note: This is currently experimental, use with caution.\n        rent-system=false\n        # The interval in minutes for checking claim rent payments that are due. Default: 1. Set to 0 to disable.\n        rent-task-interval=1\n        # The amount of transactions to keep for history. Default: 60\n        rent-transaction-log-limit=60\n        # Whether sell signs are enabled.\n        sell-sign=false\n        # The interval in minutes for updating sign data. Default: 5. Set to 0 to disable.\n        sign-update-interval=5\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h1 id="in-game-use" tabindex="-1"><a class="header-anchor" href="#in-game-use" aria-hidden="true">#</a> In Game Use</h1><p>After you have properly modified the config and did <code>/gdreload</code> or (better) restarted the server, now you can establish your first claim to be rented.</p><p>This system currently works fine for Basic, Town and Subdivided claims.</p><p><img src="https://i.imgur.com/sPB7pMs.png" alt="Renting Sign" loading="lazy"></p><p>In order to start renting your claim, you need to put a sign inside a specific owned claim, and fill it using the following format:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GD\nrent\n&lt;amount per day/hour&gt;\n[Min rent time] [Max rent time]\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example 1</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GD\nrent\n100d\n5 30\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>This example means that you will charge a minimum of <em><strong>500</strong></em> to start the rental (5 x 100) which will give the user 5 days already paid and your claim will be available for rent up to <strong>30 days.</strong></p><h3 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2" aria-hidden="true">#</a> Example 2</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GD\nrent\n10h\n60\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>This example means that you will charge <strong>10 per hour</strong> and your claim will be available for rent up to <strong>60 days.</strong></p><h3 id="example-3" tabindex="-1"><a class="header-anchor" href="#example-3" aria-hidden="true">#</a> Example 3</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GD\nrent\n100d\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>This example means that you will charge <strong>100 per day</strong> and your claim will be available for rent with unlimited time.</p><p><strong>Sidenote:</strong> The rent time availability of your claim will start ticking as soon as you set up the sign, which means that if you start a rental with a max of <strong>30 days</strong> and a person starts renting it on the 5th day, that user will only have the claim available for <strong>25 days</strong>.</p><p>After you place the sign, you will receive a message in chat that you need to read carefully, and then, click on CONFIRM.</p><p>If you did everything ok, your sign will be updated to something like this: (Layout may be different due to recent updates)</p><p><img src="https://i.imgur.com/e194JUX.png" alt="Rent Claim Started" loading="lazy"></p><p>If you want to cancel the claim rental, left-click the sign and click CONFIRM in chat.</p><p>As a customer, in order to rent the claim, you can use:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Right Click the sign: You will rent it. \nLeft Click the sign: Your rent will be canceled.\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>IMPORTANT:</strong> if rent-schematics-restore is true, right after Canceling the rent, the blocks/entities/items will be lost and restored to its original state, so be careful.</p><h1 id="command-use" tabindex="-1"><a class="header-anchor" href="#command-use" aria-hidden="true">#</a> Command Use</h1><p>The main command for handling rent is <code>/claimrent</code><br> Syntax is as follows<br><code>/claimrent [cancel|info|list|create &lt;rate&gt; [max]]</code></p><h3 id="example-1-1" tabindex="-1"><a class="header-anchor" href="#example-1-1" aria-hidden="true">#</a> Example 1</h3><p>Create a rental for $10 per hour with a maximum of 1 day<br><code>/claimrent create 10h 1</code></p><h3 id="example-2-1" tabindex="-1"><a class="header-anchor" href="#example-2-1" aria-hidden="true">#</a> Example 2</h3><p>Create a rental for $10 per hour with unlimited rentals<br><code>/claimrent create 10h</code></p><h3 id="example-3-1" tabindex="-1"><a class="header-anchor" href="#example-3-1" aria-hidden="true">#</a> Example 3</h3><p>Cancel rental<br><code>/claimrent cancel</code></p><h3 id="example-4" tabindex="-1"><a class="header-anchor" href="#example-4" aria-hidden="true">#</a> Example 4</h3><p>List all available rentals<br><code>/claimrent list</code></p><h3 id="example-5" tabindex="-1"><a class="header-anchor" href="#example-5" aria-hidden="true">#</a> Example 5</h3><p>List current rental info<br><code>/claimrent info</code></p><h2 id="current-features" tabindex="-1"><a class="header-anchor" href="#current-features" aria-hidden="true">#</a> Current Features</h2><ul><li>Claims can be restored using schematics option. If this is enabled, both the claim owner and the person renting it will receive a warning message.</li><li>When a person rents the claim, the owner claim will lose the privileges inside it until the rent period is over. The person who rented it will get the <em>Trust</em> permission inside the claim and will be able to interact with blocks like doors, levers, pistons, plates, etc. After the rental is finished, the trust permission will be automatically removed.</li><li>Everything works automatically. Claim owner will received the money and the customer will be charged every specific time you previously configured.</li><li>If the customers fails to pay the rental amount, their permission will be suspended until the payment is done.</li></ul>',42),r={},s=(0,n(3744).Z)(r,[["render",function(e,a){return t}]])}}]);