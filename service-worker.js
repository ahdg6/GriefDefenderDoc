if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const f={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return f;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-282d8a9c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.3d284239.css",revision:"2f4afe9a57f5ff65f1c56f53b198fe98"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/46.8600ff27.js",revision:"8225729609df3ce45e23e29b956f4b71"},{url:"assets/js/47.f67acd6d.js",revision:"092d650eeea2bbcdacecc79c49009171"},{url:"assets/js/48.7980278b.js",revision:"e7db39b8bbf0d9f97f7bb61140fccba9"},{url:"assets/js/49.61f4915c.js",revision:"2651b0d25a84c60b98d0cb3eb3b024b1"},{url:"assets/js/50.5c18b0c3.js",revision:"a69c50db4eb0d9710cad1c3b9590374b"},{url:"assets/js/51.23b224b8.js",revision:"8ad780083165f932aad71c76b0886416"},{url:"assets/js/app.c3c501cc.js",revision:"9094250f3d14cc5860639d514e072875"},{url:"assets/js/layout-Blog.3c8afc04.js",revision:"512b723a9a27f7e11b28750e01fdcb3f"},{url:"assets/js/layout-Layout.2bf34208.js",revision:"718759dabc861648f626ad889caab75e"},{url:"assets/js/layout-NotFound.5e23a16d.js",revision:"9ee444d9c146c6077b27f5ad5576cde5"},{url:"assets/js/layout-Slide.5a9e4751.js",revision:"44b0f38981cd02bc18444a891c9e2a2f"},{url:"assets/js/mermaid.64594bfe.js",revision:"f796fd92f1272ee870030179375b5a3e"},{url:"assets/js/page-API.94a068fa.js",revision:"be780eceaafcf1c1a272c0db944a048a"},{url:"assets/js/page-ClaimManagement.f38f834b.js",revision:"f28c2405a49a33494b9f8a2b18842675"},{url:"assets/js/page-ClaimTypes.38ac5c8e.js",revision:"d49b9a874cf7d9d3fe802904426584be"},{url:"assets/js/page-CommandOverview.0b90b729.js",revision:"c81a257b8ac4c67a723bf2c63d493f3f"},{url:"assets/js/page-Contexts.fe1a32f1.js",revision:"304ec3b49dbc09cb13d37ab66e15cff8"},{url:"assets/js/page-Contrubution.4234f0d3.js",revision:"8d3943ceb7d85a80bde153a63936dfcb"},{url:"assets/js/page-CustomLayout.946acd1f.js",revision:"c90e1d5ad1b96c9e6f571b151fc4e417"},{url:"assets/js/page-Debugging.4bd7af46.js",revision:"2be58525a70cbcf7aa8552fe829f22e1"},{url:"assets/js/page-Dynmap.afe9c4f8.js",revision:"aebdff62c14fecc906ad701df1e24820"},{url:"assets/js/page-FlagDefinition.bc0aad78.js",revision:"ad0654771c361d5317ed90923cfc8597"},{url:"assets/js/page-Flags.e7ed0cd8.js",revision:"9860298cb90091a577916b4e9d379569"},{url:"assets/js/page-GDHooks.aa62ed7f.js",revision:"19b7eac22d6dc5cd74f7eeee11578347"},{url:"assets/js/page-GlobalConfig.ff53d03e.js",revision:"1ab18f11bf649a775c046ced18013f12"},{url:"assets/js/page-GriefDefender.0d928eb3.js",revision:"67b2d2e741f2bf7be0b225dbbe275616"},{url:"assets/js/page-GriefPrevention.2f34ffe8.js",revision:"2784cdb192f09ac65e838b52a399b182"},{url:"assets/js/page-Install.d21981e5.js",revision:"d57b5650a6b07f1da72a88905e048104"},{url:"assets/js/page-Options.9b90c173.js",revision:"5935c8ddbc63e3c1c64d7e0487cd4cb2"},{url:"assets/js/page-Permission.3affc4c9.js",revision:"4ad85e0d9334df2b790628b7168ab0f8"},{url:"assets/js/page-PixelmonPreset.8dcc0759.js",revision:"41ebfc41e53a172ccef0417057255df2"},{url:"assets/js/page-Placeholder.0efb9b43.js",revision:"afe3a79425457768615d398b002bab5a"},{url:"assets/js/page-PVP.efef1b9e.js",revision:"f0de1ee91b0566d8dc551a497efb58fc"},{url:"assets/js/page-RentSystem.ffa52f22.js",revision:"5ce7d241c8d3de364194794b39710dee"},{url:"assets/js/page-Resources.dfdc0004.js",revision:"29ab9af302cfd662e32ae34c61d8bdbd"},{url:"assets/js/page-Slidepage.202207b1.js",revision:"8b06ed19880e691fd76ee83b4dccea8e"},{url:"assets/js/page-TagsSystem.940cd8f2.js",revision:"886af16991605c7fdff8e00409408120"},{url:"assets/js/page-TrustSystem.0ed5c0a1.js",revision:"3a1dcc77e3903d01d4ad9dbcb09df21d"},{url:"assets/js/page-User-FriendlyCommands.bd886336.js",revision:"dc55284586abbd69ae6df6d35889f938"},{url:"assets/js/page-WECUI.213066ca.js",revision:"481b52d82b924c4b68f2102da672fc06"},{url:"assets/js/page-WorldGuard.114c809b.js",revision:"e288ad2ddaffd449d7d801c4a285ec9c"},{url:"assets/js/page-权限.7811cb86.js",revision:"ab5cfd4cb7c4161ff45edfd6e94365be"},{url:"assets/js/page-标签组系统.d2027e50.js",revision:"49a13619a2ba10a239411bade0ec962c"},{url:"assets/js/page-自定义布局.f0aa2a28.js",revision:"ddb44a5804b7aac611490f40b3643d80"},{url:"assets/js/vendors~flowchart.5357b14e.js",revision:"8639380e141c858adaaf6245aeb85d48"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.e75abd98.js",revision:"e625bf83976c6502746a404de98de110"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.91ec1857.js",revision:"e32f7e47de9550ec9e17ee08d4159865"},{url:"assets/js/vendors~layout-Layout.faa2cfcc.js",revision:"55e20025da76c6012f3736296a64829c"},{url:"assets/js/vendors~mermaid.8c97b7b6.js",revision:"133d84bdb79b9d590f4330f72403002e"},{url:"assets/js/vendors~photo-swipe.0127b9a1.js",revision:"3d47da8203c0632fb0d0f0ecafc6aba1"},{url:"assets/js/vendors~reveal.ead25d3e.js",revision:"629f6f4512eb83bc032b8909c66e60bf"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.3e94a45c.ttf",revision:"3e94a45ca214f93c9774291237bb393e"},{url:"assets/fonts/KaTeX_AMS-Regular.7bc59ee9.woff",revision:"7bc59ee9f9ad43040a2ff34a912bec13"},{url:"assets/fonts/KaTeX_AMS-Regular.92297720.woff2",revision:"92297720a8aaa0d239940bf10509fa1f"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4c370560.ttf",revision:"4c37056017b7f742eeb8851510f4971a"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.096ac2cc.ttf",revision:"096ac2cc25065eeca89ca560d0a51b1a"},{url:"assets/fonts/KaTeX_Fraktur-Bold.06e6c3f3.ttf",revision:"06e6c3f3900bf855fe69c6adbf2b59ac"},{url:"assets/fonts/KaTeX_Fraktur-Bold.5ec2d705.woff2",revision:"5ec2d70532268860be506b06c8c82615"},{url:"assets/fonts/KaTeX_Fraktur-Bold.8518f4fe.woff",revision:"8518f4fec3f73b37b3693f3625bc146b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.56d671ca.woff2",revision:"56d671ca5dc88ca20911bddc5a84c9fb"},{url:"assets/fonts/KaTeX_Fraktur-Regular.c5953fef.woff",revision:"c5953fefe37f48064e17b75ff607fc0d"},{url:"assets/fonts/KaTeX_Fraktur-Regular.e78f1f02.ttf",revision:"e78f1f025d28668ddcaa2791fc818436"},{url:"assets/fonts/KaTeX_Main-Bold.36af3e91.woff",revision:"36af3e91a84645afe0e40be8046fba86"},{url:"assets/fonts/KaTeX_Main-Bold.5c603567.ttf",revision:"5c6035670847d3c6f8af38393b04eee9"},{url:"assets/fonts/KaTeX_Main-Bold.d94e53ed.woff2",revision:"d94e53ed77ae219e76e90cf02e7d627d"},{url:"assets/fonts/KaTeX_Main-BoldItalic.addf8657.woff2",revision:"addf865739892218570c00053c6c02dc"},{url:"assets/fonts/KaTeX_Main-BoldItalic.ceb7b930.woff",revision:"ceb7b93007c7e338f635833a4259a14b"},{url:"assets/fonts/KaTeX_Main-BoldItalic.dde48012.ttf",revision:"dde48012334937d446600e982f5d8522"},{url:"assets/fonts/KaTeX_Main-Italic.2bc9206b.woff",revision:"2bc9206b7e2d0c75941d4930b1990e49"},{url:"assets/fonts/KaTeX_Main-Italic.890a6b3f.ttf",revision:"890a6b3ff7159ac41c71ccd2c4e76323"},{url:"assets/fonts/KaTeX_Main-Italic.c24bf2da.woff2",revision:"c24bf2da2b956b13ba8101dda48a2d77"},{url:"assets/fonts/KaTeX_Main-Regular.16df5fa9.woff",revision:"16df5fa99e77eff4b91a4f3423b761d4"},{url:"assets/fonts/KaTeX_Main-Regular.46b1ffa6.woff2",revision:"46b1ffa6b7af252c4f89e7c8d757a39f"},{url:"assets/fonts/KaTeX_Main-Regular.d866ab9b.ttf",revision:"d866ab9ba6d5654e524ec6bd5e1d5a14"},{url:"assets/fonts/KaTeX_Math-BoldItalic.a562e8c1.woff",revision:"a562e8c1abe0de60ffc1f77ed9412327"},{url:"assets/fonts/KaTeX_Math-BoldItalic.bb40192b.woff2",revision:"bb40192b2e03ed2f0fa8ee17ff587fd3"},{url:"assets/fonts/KaTeX_Math-BoldItalic.cbf87238.ttf",revision:"cbf872382693c0b1c71f5df380206d7a"},{url:"assets/fonts/KaTeX_Math-Italic.92281c86.woff",revision:"92281c86717a2642f166728a8973f3f9"},{url:"assets/fonts/KaTeX_Math-Italic.96c61839.ttf",revision:"96c61839461dd0264a18a65a39212a62"},{url:"assets/fonts/KaTeX_Math-Italic.c359b8d5.woff2",revision:"c359b8d5e269eaf907baa338587ca80e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.26f259e4.woff",revision:"26f259e4e6c41f013a51f790e3a7dd0c"},{url:"assets/fonts/KaTeX_SansSerif-Bold.95392fb8.woff2",revision:"95392fb82420439d0c3bb9f2d414f83c"},{url:"assets/fonts/KaTeX_SansSerif-Bold.cb7f745a.ttf",revision:"cb7f745a9094fa659195d2d6f13711eb"},{url:"assets/fonts/KaTeX_SansSerif-Italic.7de8e4ae.woff2",revision:"7de8e4ae08eaaeb10a5112ce7f09ba80"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9c330d9e.ttf",revision:"9c330d9e5674fd3e79c644e451240331"},{url:"assets/fonts/KaTeX_SansSerif-Italic.a8f101e8.woff",revision:"a8f101e81769f08428b1e01d4b04c033"},{url:"assets/fonts/KaTeX_SansSerif-Regular.3ad86448.woff2",revision:"3ad86448e4a27c0e4a9b4e333aebeaa7"},{url:"assets/fonts/KaTeX_SansSerif-Regular.63e176e6.ttf",revision:"63e176e62748655e2076a07a12cc9355"},{url:"assets/fonts/KaTeX_SansSerif-Regular.df1117b1.woff",revision:"df1117b1c61ba086c7c286b4132350d3"},{url:"assets/fonts/KaTeX_Script-Regular.1e0cfc32.woff",revision:"1e0cfc3296ecafedbd818c2dd8e42d44"},{url:"assets/fonts/KaTeX_Script-Regular.52316064.ttf",revision:"52316064070cd6860d779f6a1185633e"},{url:"assets/fonts/KaTeX_Size1-Regular.f8369ce8.ttf",revision:"f8369ce8f0adc37a0654c8e989499e7c"},{url:"assets/fonts/KaTeX_Size2-Regular.90b50b45.ttf",revision:"90b50b453237cd955bbe7b979bb7345a"},{url:"assets/fonts/KaTeX_Size4-Regular.70d01e49.ttf",revision:"70d01e490e97425d479807ea319ceed5"},{url:"assets/fonts/KaTeX_Typewriter-Regular.099e00d5.woff2",revision:"099e00d5873cd2d4ef3ca5d23c23c313"},{url:"assets/fonts/KaTeX_Typewriter-Regular.2f005719.ttf",revision:"2f0057192d241cb99d64bba848b0164a"},{url:"assets/fonts/KaTeX_Typewriter-Regular.2f78c7d7.woff",revision:"2f78c7d76fe78153d0ca675b3923507d"},{url:"404.html",revision:"cfb400a9c700352629a1a4d7bf78f253"},{url:"API/index.html",revision:"14aebc86bac667196b80e4d6734cd538"},{url:"Contribution/index.html",revision:"bda3993e574e60e0568f0080bc542177"},{url:"guide/advanced/contexts/index.html",revision:"88c791ecf694d6d5eccb49adf1a8d756"},{url:"guide/advanced/debugging/index.html",revision:"62a5311b9cea543ac555b52e454d82b3"},{url:"guide/advanced/flags/index.html",revision:"b6e6d77483c27b00c71442d50d5bbf66"},{url:"guide/advanced/global-config/index.html",revision:"668c1e3a526dd58aef082e7f259326e1"},{url:"guide/basic/claim-management/index.html",revision:"cd752d73a586d4f90dd4f08b82238f75"},{url:"guide/basic/claim-rent-system/index.html",revision:"889a88fb2f50cb24a4e560a255d87b17"},{url:"guide/basic/claim-types/index.html",revision:"beb75e01de42578d63e566240cfc5d46"},{url:"guide/basic/custom-alias-creation/index.html",revision:"ea799b36ce13533522f3e401091f1447"},{url:"guide/basic/flag-definitions-gui/index.html",revision:"b4735b09113d60f055ce77b4c39ab3df"},{url:"guide/basic/options/index.html",revision:"db5238b37eb1e15e19e9e208fc4abb82"},{url:"guide/basic/pvp/index.html",revision:"fc919779f94b4c6f10bf0c55cfb19ee1"},{url:"guide/basic/tags/index.html",revision:"752abfbe855dc29863556c3ae005a9c6"},{url:"guide/basic/trust-system/index.html",revision:"c673bc0f4eaa10a328c5b6de777b297d"},{url:"guide/commands/index.html",revision:"bcd8897ce4da0db91992a9a04c15150d"},{url:"guide/index.html",revision:"84fbcd537447fabb4e5368dd3b505615"},{url:"guide/install/index.html",revision:"a2a5ac1328c54337c015226e405c9165"},{url:"guide/migration/griefprevention/index.html",revision:"222026f88530aa1b4961936255b990a2"},{url:"guide/migration/worldguard/index.html",revision:"7382071b2e682e668b6ac9e167e9e515"},{url:"guide/permissions/index.html",revision:"289d7ba242ef9569745d0910a5f785b8"},{url:"hooks/dynmap/index.html",revision:"86fb72463f7ecfc60cefda72be74d0e4"},{url:"hooks/index.html",revision:"b44d0531b39cad7fe110a51a85ff584b"},{url:"hooks/placeholder/index.html",revision:"cfd38ff5be5e37bc5e68bf4baf71c100"},{url:"hooks/wecui/index.html",revision:"0f33df3dbca10661273de230d42eb138"},{url:"index.html",revision:"82d6f4eed9b4931410543c834672fefe"},{url:"layout/index.html",revision:"5c27b4790bb7e1e401bb9b51ab2cb26e"},{url:"resources/index.html",revision:"a482081492eaab2972b60e9d134ff9a1"},{url:"resources/Pixelmon/index.html",revision:"88b86af8283357e31a62630df9f11c3e"},{url:"slides/index.html",revision:"dae9752e553380fa91baad19ea39c548"},{url:"zh/API/index.html",revision:"8c5361eb184db284098388fbbe4cacaa"},{url:"zh/Contribution/index.html",revision:"95589dc27e354e45b95c73c933b32d2d"},{url:"zh/guide/advanced/contexts/index.html",revision:"6e8c2923efde859ac3a158dc530254df"},{url:"zh/guide/advanced/debugging/index.html",revision:"99bb6635018ed2c677472c5d2cfb07a6"},{url:"zh/guide/advanced/flags/index.html",revision:"58fb2ca98b853d23a4be68ac0812fbba"},{url:"zh/guide/advanced/global-config/index.html",revision:"0986c3fcbb9e37f6861bbc05786497b4"},{url:"zh/guide/basic/claim-management/index.html",revision:"07a79b7799bb68155023ca987dc65ba1"},{url:"zh/guide/basic/claim-rent-system/index.html",revision:"0e0cc41fcaafb523c85a0b24563abba2"},{url:"zh/guide/basic/claim-types/index.html",revision:"58cb315d4d91fccd405286b91338aa6c"},{url:"zh/guide/basic/custom-alias-creation/index.html",revision:"1d4adf65a1bf430936212faa35fcc705"},{url:"zh/guide/basic/flag-definitions-gui/index.html",revision:"2a3be4f4b3e9f62071712d13c6dd6ab6"},{url:"zh/guide/basic/options/index.html",revision:"ad109e802c38ca1b721c7c8cadccbeed"},{url:"zh/guide/basic/pvp/index.html",revision:"21bc62e34db5d0dafcce0df77a756ad2"},{url:"zh/guide/basic/tags/index.html",revision:"a227891be398151e4abcf9768f8ad959"},{url:"zh/guide/basic/trust-system/index.html",revision:"b939725d9ac686640e3a51c44d731c97"},{url:"zh/guide/commands/index.html",revision:"7960c5c0c8dc21632aa11143919213ba"},{url:"zh/guide/index.html",revision:"beba162d952d66096ac0b1cf28ad7cce"},{url:"zh/guide/install/index.html",revision:"d2b3be5f915f2cf9542c201545ff34f2"},{url:"zh/guide/migration/griefprevention/index.html",revision:"f96d86fe52b19ba6a7f9d8a5429470a7"},{url:"zh/guide/migration/worldguard/index.html",revision:"4566993dfad190b2259580eb98f317a2"},{url:"zh/guide/permissions/index.html",revision:"9e7dce6d8200f6bda94c6d415c37f2fd"},{url:"zh/hooks/dynmap/index.html",revision:"d144f6f2aff355e1da213e0218052888"},{url:"zh/hooks/index.html",revision:"3bdc0356a68ba34ed86022b1828a2c0f"},{url:"zh/hooks/placeholder/index.html",revision:"02f4533c4d0b83d8fa4d9e96f990d2cd"},{url:"zh/hooks/wecui/index.html",revision:"c71538d2c63ba75e23b0c8c560415c3b"},{url:"zh/index.html",revision:"0bd73fb126f211bca7e7998ba28c31dc"},{url:"zh/layout/index.html",revision:"f6e6d3b46988abec8a7750ecbcf4e26b"},{url:"zh/resources/index.html",revision:"a39c4a96eb171dccd0521eaccc2f0d23"},{url:"zh/resources/Pixelmon/index.html",revision:"b6b4c39ae1de813cd692c93d70caa6d3"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"logo.png",revision:"c943b3ec715d30f93fe3e2fca730f4fe"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});