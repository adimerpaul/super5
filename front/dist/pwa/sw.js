if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,f)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const n=e=>a(e,i),b={module:{uri:i},exports:r,require:n};s[i]=Promise.all(c.map((e=>b[e]||n(e)))).then((e=>(f(...e),r)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"superHamburgesas"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"401410019_856216583174383_1617310435038937450_n.jpg",revision:"ff3f53545aecf97a1b9fe8f82fae3698"},{url:"assets/axios.517c66f9.js",revision:"3d1b7c111f261181951498aa87b96e7c"},{url:"assets/CarouselPage.ff94d34b.js",revision:"2af3e5c2877880270c2b24366940587d"},{url:"assets/CategoryPage.83b16934.js",revision:"c92b5ecb1f26b30f4bef544ed5bfb7e5"},{url:"assets/ClosePopup.9d2b3bd2.js",revision:"97e027abdd02a6190031d748e16a501d"},{url:"assets/ErrorNotFound.2c6130d3.js",revision:"ea431497e87e9a8dc25c75db223849d0"},{url:"assets/fa-brands-400.232c6f6a.woff2",revision:"b55b1345f0b919f0cab774ec25d6654e"},{url:"assets/fa-brands-400.e28096fa.ttf",revision:"b7dee83cb5ee2c47b053e2620f4bbb78"},{url:"assets/fa-regular-400.9174757e.ttf",revision:"3c264849ff4eb9b6e99eab9cd54c80ae"},{url:"assets/fa-regular-400.c27da6f8.woff2",revision:"aa7c5fa494807f7a9ec907defee083e8"},{url:"assets/fa-solid-900.ae17c16a.woff2",revision:"1ec0ba058c021acf7feaa18081445d63"},{url:"assets/fa-solid-900.b4990d0d.ttf",revision:"0a95f951745ba02faa8773ea6a1ebaed"},{url:"assets/fa-v4compatibility.c7a869fa.woff2",revision:"fdb652dcc200dd23b8b8040176858c36"},{url:"assets/fa-v4compatibility.ff8f525f.ttf",revision:"95b97efa98f9e3fb869bc9634c43a0cc"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/format.2cae61da.js",revision:"3e44fb3b0266cf3450e20c11b260836a"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.35dca8a7.woff2",revision:"0ba49c096a77b67734434cebcaf2e14d"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY.8e94758c.woff",revision:"0e4321a7c0dda51d72a669ac5892fc39"},{url:"assets/index.9378a5f4.js",revision:"a9dd7ba9da42653d9e8139d9063a45cf"},{url:"assets/index.b8034f94.css",revision:"fccdc709ad3c1fc18c17935b69a21a8d"},{url:"assets/IndexPage.6d3f4639.js",revision:"a22277d485d8e2e1f085df1a935b1e06"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/la-brands-400.14c63377.woff",revision:"fb598c9ccecd5fa1c6c769d0be60973b"},{url:"assets/la-brands-400.ff70c9bc.woff2",revision:"54b0b4e7de85711c3796882b2b19eb00"},{url:"assets/la-regular-400.51ca2c00.woff2",revision:"88d9d9416c58bde56378dc4439e3a144"},{url:"assets/la-regular-400.7711fabc.woff",revision:"338f6f873b90c8045204f8ac52408166"},{url:"assets/la-solid-900.10a68e01.woff2",revision:"36fc297902c9a2e857858baa6ac25f2c"},{url:"assets/la-solid-900.a0d21b2a.woff",revision:"87292218024ee1cab93406e228a0b7dd"},{url:"assets/LoginLayout.b09d6142.js",revision:"2a4029d6a8cc7517a66bdca2550f32e7"},{url:"assets/MainLayout.d2456cd2.js",revision:"abad3ba2174305f76a63f4a4e027f397"},{url:"assets/MenuLayout.22f4fe0e.js",revision:"8b6c6559b76aa3d586b7c043daa48599"},{url:"assets/MenuPage.9a94acd1.js",revision:"37fa6cba9c398ddc2c91dbd454b40317"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/ProductDetail.65a4675d.js",revision:"272c750210c78e70fd8851d136be773f"},{url:"assets/ProductsPage.c4fa3657.js",revision:"8fea0ce0e6f4c435a776741d1bca7161"},{url:"assets/ProductsSearch.0e14810c.js",revision:"1b756ac96408f8ad7b7bf42c65f4d6bb"},{url:"assets/QBadge.ef09c4a1.js",revision:"6e2f6e77365ceb80892767c11424136f"},{url:"assets/QBtnGroup.c632452e.js",revision:"5a1f51f95705f88abe2b08a8d4a34820"},{url:"assets/QCarousel.7b019504.js",revision:"ad5fdd423677d425662e03c2221b5b1f"},{url:"assets/QFooter.e67f2ecb.js",revision:"80a93d89e0b73edabf43030966b5afb9"},{url:"assets/QForm.2774be31.js",revision:"41310dd46339bed0eeedf793f6911c69"},{url:"assets/QImg.cab53abc.js",revision:"75e6f5094de4f4b92871123ef1e9d5d2"},{url:"assets/QItem.93c38175.js",revision:"7b3806679f16ab537563447e9dc9f913"},{url:"assets/QLayout.69bb893a.js",revision:"84aa9aa37128cae2460c919301ab2f2d"},{url:"assets/QList.18994195.js",revision:"291a28a3f750a871f8265bc050e3d789"},{url:"assets/QMenu.9b30d412.js",revision:"72b8b78811c9f7727a1945cd2a983692"},{url:"assets/QPage.65b06720.js",revision:"8e2bd344673aab2e4ff404bc5e861014"},{url:"assets/QResizeObserver.71c99d37.js",revision:"6a6071764acadf6592c689b88bd373a7"},{url:"assets/QScrollObserver.6508b005.js",revision:"df4727981183e5662d63597dbc37dfb5"},{url:"assets/QSelect.8f299c1a.js",revision:"24d6da97c73f02c5ba4cce41f0547b6a"},{url:"assets/QSpace.43b899ba.js",revision:"fabbb2d4c49173818ee54f1b53eaf769"},{url:"assets/QTable.3cea4a0c.js",revision:"e16ec4b07a9dc61d6e35a8f83f109961"},{url:"assets/QTr.e0755e71.js",revision:"f4c1f5ca262824561636438708394eb6"},{url:"assets/SegoeUI.f424915a.woff",revision:"9a2931180d6b1dc7b33052657eef554b"},{url:"assets/selection.7f999133.js",revision:"aade7557a6c3242a39bea4dfdc3cfa5a"},{url:"assets/SubCategoryPage.34c6fbdf.js",revision:"ae23a3fdfd6253e9a321b9af4a15f632"},{url:"assets/touch.9135741d.js",revision:"88ce3843cbd234458fc111496fd90393"},{url:"assets/TouchPan.994f23b5.js",revision:"b75a7c43cb245fc9aec60784116bc713"},{url:"assets/use-fullscreen.5b053bb5.js",revision:"9d27c0f5e845b6af23d36f7614a8e7d6"},{url:"assets/UsersPage.c4fbabea.js",revision:"ce8d80147323349a86fa81e1916395a5"},{url:"favicon.ico",revision:"2884db5881ba65f6e362494e9c6e5a0e"},{url:"fondoLogin.jpg",revision:"003ce9f06e8d1d2687ad066642c2adbb"},{url:"icons/apple-icon-120x120.png",revision:"e67168443ef1c965d2c4e5b377105484"},{url:"icons/apple-icon-152x152.png",revision:"ce00b7e228ea3d873b6459af1291376b"},{url:"icons/apple-icon-167x167.png",revision:"cc795e26d75ce522059ad5bf3a8bb996"},{url:"icons/apple-icon-180x180.png",revision:"4b65cbc35e8ca0ed765a9d342d1b63fc"},{url:"icons/apple-launch-1080x2340.png",revision:"7d67485a9ff9ef7307605e34b1ea5ee4"},{url:"icons/apple-launch-1125x2436.png",revision:"04cd96949c45748bbe3e46ea31f9eba6"},{url:"icons/apple-launch-1170x2532.png",revision:"b4d387fc00691435cdd87f4ef5257b55"},{url:"icons/apple-launch-1179x2556.png",revision:"e5e251fca744aa3eab4a95dfb1c90098"},{url:"icons/apple-launch-1242x2208.png",revision:"f74977399a0413fce623c30ce0e60306"},{url:"icons/apple-launch-1242x2688.png",revision:"879a1739e393d3682eac22effde69ec4"},{url:"icons/apple-launch-1284x2778.png",revision:"2205294307deffea5615e81c6a6bd75d"},{url:"icons/apple-launch-1290x2796.png",revision:"ae20e173ea07c5c076c2b6c981a1d2cc"},{url:"icons/apple-launch-1536x2048.png",revision:"4be6a7d85bc8bdc3092f1823d36b3549"},{url:"icons/apple-launch-1620x2160.png",revision:"8f1c9746567cd6de266a07d5f9e80897"},{url:"icons/apple-launch-1668x2224.png",revision:"04b87283243d917440f8452ce0d32cb6"},{url:"icons/apple-launch-1668x2388.png",revision:"e35d680a393104eacbecda11af948902"},{url:"icons/apple-launch-2048x2732.png",revision:"8f36c9c6e0b8e1edb1bba1892962b381"},{url:"icons/apple-launch-750x1334.png",revision:"fb96096a82d29e40dff2677f92ac8676"},{url:"icons/apple-launch-828x1792.png",revision:"a2d284f4c637f7dd86f97913fd59b706"},{url:"icons/favicon-128x128.png",revision:"6277726c9874da920912371dbb1a1a08"},{url:"icons/favicon-16x16.png",revision:"35548d190941811cea34cd07135a1991"},{url:"icons/favicon-32x32.png",revision:"27b34bca0d8ccca08e572f6ff0488078"},{url:"icons/favicon-96x96.png",revision:"fbffc0d04b1ace8eaeca7940414f56dc"},{url:"icons/icon-128x128.png",revision:"6277726c9874da920912371dbb1a1a08"},{url:"icons/icon-192x192.png",revision:"9caf9f084c349c4c154bad9ee9262026"},{url:"icons/icon-256x256.png",revision:"e24570b055b4bf51af168307e095dd14"},{url:"icons/icon-384x384.png",revision:"1321b44215238a94cdae7734ef22a886"},{url:"icons/icon-512x512.png",revision:"9f86e3a72f581e007a672bbfe52b7afc"},{url:"icons/ms-icon-144x144.png",revision:"1c4c6324fc8081e60eba75404dcafcf6"},{url:"icons/safari-pinned-tab.svg",revision:"719651a818f71af000848bb97eeeab41"},{url:"index.html",revision:"a862fbbd4b0fc2713e1430d6a283b37a"},{url:"logo.png",revision:"1348384ac4c2f0107b4637b0a68b8ae2"},{url:"logo1.png",revision:"0da2c79712f1fa7d38367761087f20af"},{url:"manifest.json",revision:"e4525cf7afa96ff30d9b9303be3f27dc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
