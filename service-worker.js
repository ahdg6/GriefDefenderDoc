if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,f)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let c={};const r=e=>a(e,d),b={module:{uri:d},exports:c,require:r};s[d]=Promise.all(i.map((e=>b[e]||r(e)))).then((e=>(f(...e),c)))}}define(["./workbox-ebf2f394"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.1b8355c0.css",revision:"472ec508445aec476c217018ab8c90cf"},{url:"assets/img/danger-dark.86c63c40.svg",revision:"86c63c4006d5cd5f860cdef57310696a"},{url:"assets/img/danger.1c7d8a0f.svg",revision:"1c7d8a0f45b8bee5d5b92334a16e2711"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.a1decb69.svg",revision:"a1decb69db82fb8eebb48704dd74e649"},{url:"assets/img/info.6f2cfedb.svg",revision:"6f2cfedb8e6d19d1b24eb73943f7ff4e"},{url:"assets/img/note-dark.8668720f.svg",revision:"8668720f2e50ebd01173f11a89d9da6e"},{url:"assets/img/note.32319b2e.svg",revision:"32319b2e9c86860d8a4f1c8f660096cb"},{url:"assets/img/search.237d6f6a.svg",revision:"237d6f6a3fe211d00a61e871a263e9fe"},{url:"assets/img/tip-dark.0d0028db.svg",revision:"0d0028db13caec45ac1527d8b673fae0"},{url:"assets/img/tip.a9004be5.svg",revision:"a9004be5a8a5a83cc9c77bba88c816ff"},{url:"assets/img/warning-dark.b995cb45.svg",revision:"b995cb45fa552ac10ad35fa7716af15b"},{url:"assets/img/warning.57a43d6d.svg",revision:"57a43d6dcdee07d8db78a5dd3d6137ba"},{url:"assets/js/48.60e62d26.js",revision:"f671ad3746a4859f4fd0d4d0e2bc1c7f"},{url:"assets/js/49.034cb1a9.js",revision:"d1c03ece23bff4f5f60b474e9f322328"},{url:"assets/js/50.20277d4e.js",revision:"1e92584e98f754c1d6ae25e917e6f0c9"},{url:"assets/js/51.ef5a3282.js",revision:"86790fa0a3fa1ba66611dd3f29ada5f0"},{url:"assets/js/52.ec7d4d8b.js",revision:"c9ae10fda5863bb121fb9a2b3be62f6d"},{url:"assets/js/53.eb166a20.js",revision:"64421d0423ab6fe9646973289e1cce5f"},{url:"assets/js/54.412708b2.js",revision:"8e2aa56775b55586668ac9f092457125"},{url:"assets/js/app.405a2891.js",revision:"cd77de04a448aeb3e17825892782a082"},{url:"assets/js/layout-Blog.68ee564c.js",revision:"668ed48c5da96b869ee39f1fae54dd57"},{url:"assets/js/layout-Layout.7e277e0b.js",revision:"8cafb67e983db61100973968d8f1b494"},{url:"assets/js/layout-NotFound.4b86fc91.js",revision:"0e3fd5d21e82dac3347c846755463dd4"},{url:"assets/js/layout-Slide.3fc0cc15.js",revision:"579466ca2d82f355bff689cb43a9494a"},{url:"assets/js/page-API.bec59a9e.js",revision:"57c43f913ddfa7755c3999162cc47574"},{url:"assets/js/page-ClaimManagement.2aa8ee40.js",revision:"dad8bc5432d05aa1e4f9f148a481ace9"},{url:"assets/js/page-ClaimTypes.3b5eb08a.js",revision:"ba454f5d0fc58477295d50091ee67904"},{url:"assets/js/page-CommandOverview.adb82c41.js",revision:"3d8d65a7b5f83eaf98aafbbe5aea419e"},{url:"assets/js/page-Contexts.1211772b.js",revision:"bc4b8e25d1248a392442107241fa2629"},{url:"assets/js/page-Contrubution.cdd35382.js",revision:"fd7ec80527895913950e43c2fb7350c9"},{url:"assets/js/page-Debugging.9e2dff62.js",revision:"8dbb40a867cc1cde67bb669a00612bf4"},{url:"assets/js/page-Dynmap.02f413a7.js",revision:"38f131f9038718bfaeb523b424824ffa"},{url:"assets/js/page-FlagDefinition.d6376269.js",revision:"7de9e38ad2ebf5537c4e9e014356a88e"},{url:"assets/js/page-Flags.dde166ab.js",revision:"ab5c1365b3dbe6f2ef33498ab923a088"},{url:"assets/js/page-GDHooks.92957a97.js",revision:"66a6e4fdf67a3c75c26e96f94981ffc9"},{url:"assets/js/page-GlobalConfig.a4d24314.js",revision:"6b9c3d45f39f875f643ea156a4673073"},{url:"assets/js/page-GriefDefender.192fdd8b.js",revision:"b37f6ae55fc9dcfb897804035cdf19f0"},{url:"assets/js/page-GriefPrevention.755466f7.js",revision:"9284adad7e3403b3d5e742bf1148745c"},{url:"assets/js/page-Install.efb826bb.js",revision:"7fe578ad913a9fc51e3f145e6c830ea3"},{url:"assets/js/page-Options.5d46922b.js",revision:"bc6c7c635be45f51b56aff5002ec36c0"},{url:"assets/js/page-Permission.dab6a203.js",revision:"c50c031949395aa0bfbf28b1dbcad9d0"},{url:"assets/js/page-PixelmonPreset.e52bff23.js",revision:"f37ccb9b4dcfaa9fd0f90f6e82bc546d"},{url:"assets/js/page-Placeholder.40f5224e.js",revision:"ae8419085bb5ae4b4b2f75e125b2c264"},{url:"assets/js/page-PVP.2b509bfc.js",revision:"08c2a749338fe7ee67d143c986c22e69"},{url:"assets/js/page-RentSystem.e4c38040.js",revision:"fc361d895b780b6de21cd4a45ec2fe06"},{url:"assets/js/page-Resources.a9d3d9b0.js",revision:"c9c28f1c427ba64ef596c777492b8df8"},{url:"assets/js/page-TagsSystem.a1752c50.js",revision:"2f86249cfa08bd5515e32aa763b67b67"},{url:"assets/js/page-TrustSystem.4a7381eb.js",revision:"814adc2f46e660b0c4b5d243c3097bbf"},{url:"assets/js/page-User-FriendlyCommands.8e3d7bd8.js",revision:"96de8b83cd40d29eac1a259b45d99055"},{url:"assets/js/page-WECUI.ca6fcab8.js",revision:"b6e982c4993e855a524dc2c9dcc9964d"},{url:"assets/js/page-WorldGuard.6cde322d.js",revision:"5b930a77bbfcc74d64c17fd08f224e3b"},{url:"assets/js/page-信任系统.0bb34a22.js",revision:"e1ce98accad28e5707cc52a16bf2834f"},{url:"assets/js/page-安装.28ccb5a5.js",revision:"1a6b5b059626f3b647dac65ba0b50648"},{url:"assets/js/page-权限.b2c9aed2.js",revision:"ebe4aa21c2bab6db52ebd9a5c5b716c3"},{url:"assets/js/page-标签组系统.1baf2ba0.js",revision:"795d61b01b816494751c22928c0a18f3"},{url:"assets/js/page-自定义布局.cc2c66c5.js",revision:"120572feb73040e8b951f0e7ed8c8f13"},{url:"assets/js/page-选项.f1ea1230.js",revision:"2cb937cda657689ec8bc1effccce0cff"},{url:"assets/js/page-预制标签.eda7c39c.js",revision:"8697262c550804eea0d7628071af20e5"},{url:"assets/js/page-领地类型.b49794ac.js",revision:"7004deeceda35641dcb6be0c11e31e56"},{url:"assets/js/page-领地设定.d9b375d4.js",revision:"6935a6cfa965ea22a9ba5783246969fa"},{url:"assets/js/vendors~flowchart.2c2a061f.js",revision:"d1deacdc4c465fa45625870fcb4cf7c9"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.f479fde2.js",revision:"05ed7a89407506a67ff972437602054b"},{url:"assets/js/vendors~layout-Layout.3aef2835.js",revision:"31bb2e0c75db1f12294d73702af42586"},{url:"assets/js/vendors~mermaid.43b922dd.js",revision:"7b0df404a69496fb68b69132f04f2132"},{url:"assets/js/vendors~photo-swipe.a94f8535.js",revision:"6a623830d9e69ced695a8a72a2c48ac3"},{url:"assets/js/vendors~reveal.4835a0f5.js",revision:"5b21473c8cff6b2e1c924216f9506861"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.10824af7.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/fonts/KaTeX_AMS-Regular.56573229.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/fonts/KaTeX_AMS-Regular.66c67820.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.497bf407.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.e6fb499f.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/fonts/KaTeX_Fraktur-Bold.40934fc0.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/fonts/KaTeX_Fraktur-Bold.796f3797.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/fonts/KaTeX_Fraktur-Bold.b9d7c449.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/fonts/KaTeX_Fraktur-Regular.97a699d8.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/fonts/KaTeX_Fraktur-Regular.e435cda5.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/fonts/KaTeX_Fraktur-Regular.f9e6a99f.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/fonts/KaTeX_Main-Bold.4cdba646.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/fonts/KaTeX_Main-Bold.8e431f7e.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/fonts/KaTeX_Main-Bold.a9382e25.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/fonts/KaTeX_Main-BoldItalic.52fb39b0.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/fonts/KaTeX_Main-BoldItalic.5f875f98.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/fonts/KaTeX_Main-BoldItalic.d8737343.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/fonts/KaTeX_Main-Italic.39349e0a.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/fonts/KaTeX_Main-Italic.65297062.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/fonts/KaTeX_Main-Italic.8ffd28f6.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/fonts/KaTeX_Main-Regular.818582da.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/fonts/KaTeX_Main-Regular.f1cdb692.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/fonts/KaTeX_Main-Regular.f8a7f19f.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/fonts/KaTeX_Math-BoldItalic.1320454d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.48155e43.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.6589c4f1.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/fonts/KaTeX_Math-Italic.d8b7a801.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/fonts/KaTeX_Math-Italic.ed7aea12.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/fonts/KaTeX_Math-Italic.fe5ed587.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/fonts/KaTeX_SansSerif-Bold.0e897d27.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/fonts/KaTeX_SansSerif-Bold.ad546b47.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f2ac7312.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e934cbc8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/fonts/KaTeX_SansSerif-Italic.ef725de5.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/fonts/KaTeX_SansSerif-Italic.f60b4a34.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/fonts/KaTeX_SansSerif-Regular.1ac3ed6e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/fonts/KaTeX_SansSerif-Regular.3243452e.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5f8637ee.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/fonts/KaTeX_Script-Regular.a189c37d.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/fonts/KaTeX_Script-Regular.a82fa2a7.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/fonts/KaTeX_Size1-Regular.0d8d9204.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/fonts/KaTeX_Size2-Regular.1fdda0e5.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/fonts/KaTeX_Size4-Regular.27a23ee6.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/fonts/KaTeX_Typewriter-Regular.0e046058.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6bf42875.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b8b8393d.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"404.html",revision:"3ab0389326c2dca150a2d4303c0a2dbd"},{url:"API/index.html",revision:"c7a5b4f04ee4bd6da2219326b98db2bb"},{url:"Contribution/index.html",revision:"3ad0e4850c7a66299560d259dad33796"},{url:"guide/advanced/contexts/index.html",revision:"a5970e2903b9f890806d6b36851e62f2"},{url:"guide/advanced/debugging/index.html",revision:"a237ce2a4c9456df7ab3f769200b6f58"},{url:"guide/advanced/flags/index.html",revision:"1e03969c7730b82f38a586625f5b55f1"},{url:"guide/advanced/global-config/index.html",revision:"7ae0a4182ff9a898655ed6d9756714aa"},{url:"guide/basic/claim-management/index.html",revision:"c02b57071f117066887d210eb52d7583"},{url:"guide/basic/claim-rent-system/index.html",revision:"eebfd6451ef7fbbc16bee463e5000d31"},{url:"guide/basic/claim-types/index.html",revision:"7d291a5f5218ecb805d80a94b6f461aa"},{url:"guide/basic/custom-alias-creation/index.html",revision:"6bf80c5d203484ab2b1ff63dff569e8d"},{url:"guide/basic/flag-definitions-gui/index.html",revision:"e97084ecaf820ba233ece30c6231727e"},{url:"guide/basic/options/index.html",revision:"47c0cb751652650d66721d1d546042ec"},{url:"guide/basic/pvp/index.html",revision:"faef6d35eb69b43ebf8cc5b03d5d92c7"},{url:"guide/basic/tags/index.html",revision:"c54ca8a1a9429b85bad6bdc8014e0d34"},{url:"guide/basic/trust-system/index.html",revision:"07e4e5f053bb8d64f9b3144b80532a21"},{url:"guide/commands/index.html",revision:"a43c11b5afb1c51d1270d8dc988e9cf6"},{url:"guide/index.html",revision:"8500c8f6d3ccadff00c226b7b5baae79"},{url:"guide/install/index.html",revision:"a831947d077b9cdadbd553ba1f748b38"},{url:"guide/migration/griefprevention/index.html",revision:"d22e7683c6f441aef9e05534a5a27cdb"},{url:"guide/migration/worldguard/index.html",revision:"30797c5e42d22393fd55f17e18bc5ba8"},{url:"guide/permissions/index.html",revision:"8d66e14b78c008fd278317cf060e78f1"},{url:"hooks/dynmap/index.html",revision:"99179bf7fbc85adba134fc204ba1a7a5"},{url:"hooks/index.html",revision:"c0f1f02f03b6faae83dc67692d47772e"},{url:"hooks/placeholder/index.html",revision:"cb31e42eb9717d912a25719135812dc9"},{url:"hooks/wecui/index.html",revision:"81ffa84e08fc8a023816b40a1f6a0df2"},{url:"index.html",revision:"38684d4ade8493a161cbe73e092b28b6"},{url:"resources/index.html",revision:"cb284fecac8c766c4fbaf16b13b692dd"},{url:"resources/Pixelmon/index.html",revision:"23ed8e985705511fb8857a24a5edcae5"},{url:"zh/API/index.html",revision:"e179fcbcaf2273e242fb0b73f5b5dffb"},{url:"zh/Contribution/index.html",revision:"51687a4e91c99a69033dcc910d7e887a"},{url:"zh/guide/advanced/contexts/index.html",revision:"582f62d3f82a8d0b876e5e935562484a"},{url:"zh/guide/advanced/debugging/index.html",revision:"3959ab5a563d99bc74f0217fc277dec6"},{url:"zh/guide/advanced/flags/index.html",revision:"0560125540db782640836964ff94cf6b"},{url:"zh/guide/advanced/global-config/index.html",revision:"0b9214ee05c15b8b31d4493babdc5a8c"},{url:"zh/guide/basic/claim-management/index.html",revision:"df72847f34591dc617a572a135216728"},{url:"zh/guide/basic/claim-rent-system/index.html",revision:"2a47e54ed4b134f21bc95cf4fd1c5f47"},{url:"zh/guide/basic/claim-types/index.html",revision:"a868b8e76439531c733660e569267a89"},{url:"zh/guide/basic/flag-definitions-gui/index.html",revision:"724875af7308c037bc2a9ff3d98348cc"},{url:"zh/guide/basic/flags/index.html",revision:"0e4d5ef6e2be95951a0a51c91ab5f96d"},{url:"zh/guide/basic/options/index.html",revision:"4bc708db112770f565d0b78832a60225"},{url:"zh/guide/basic/pvp/index.html",revision:"8ab4fec07428eb18d70b06ccb426cebb"},{url:"zh/guide/basic/tags/index.html",revision:"cfad146a2ce59f61b9fc3d4898619878"},{url:"zh/guide/basic/trust-system/index.html",revision:"d604f06dec0d4da643a9de7fcc710725"},{url:"zh/guide/commands/index.html",revision:"bcc18a8006bf5b84f4e553abcbec98a3"},{url:"zh/guide/index.html",revision:"baaac2a272fe595c2db90aa6edb50bda"},{url:"zh/guide/install/index.html",revision:"2e369843013e236b6172d56f5896f98a"},{url:"zh/guide/migration/griefprevention/index.html",revision:"edee26409bd18310d11449307e2e5988"},{url:"zh/guide/migration/worldguard/index.html",revision:"17f64bfa0a0504c903993f8ef7fdefd8"},{url:"zh/guide/permissions/index.html",revision:"f9fb825516e57f49a58ad6cdb8c1f84a"},{url:"zh/guide/领地设定/flag-definitions-gui/index.html",revision:"d80f591fb67d5e9b5aa67dfe615fc756"},{url:"zh/guide/领地设定/flags/index.html",revision:"6cd08c714f75e55af4edb03194851fb8"},{url:"zh/hooks/dynmap/index.html",revision:"b590c18a3634745b7338af8f42b20486"},{url:"zh/hooks/index.html",revision:"bd7d736ef92e3c6dabaf49ff123d511b"},{url:"zh/hooks/placeholder/index.html",revision:"a30d7f0d758da5a26ee0dc66b1482534"},{url:"zh/hooks/wecui/index.html",revision:"f91cdf0a192df459ebd478b6ad023431"},{url:"zh/index.html",revision:"2a39a494c69ca642107b48f93494f360"},{url:"zh/layout/index.html",revision:"a4d6feea5c0078389cd934f768b3b7c7"},{url:"zh/resources/index.html",revision:"b0451510bd6f28c58700771a2e3e45e1"},{url:"zh/resources/Pixelmon/index.html",revision:"bdc94ceec2333376c2571e38bd192ab5"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"logo.png",revision:"c943b3ec715d30f93fe3e2fca730f4fe"}],{}),e.cleanupOutdatedCaches()}));
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
