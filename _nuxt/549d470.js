(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{269:function(t,e,o){"use strict";(function(t){o(53),o(54),o(110),o(55);var n=o(421),r=o.n(n),c=o(270),l=o(331),f=o.n(l);function d(t,e){var o;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,l=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return c=t.done,t},e:function(t){l=!0,r=t},f:function(){try{c||null==o.return||o.return()}finally{if(l)throw r}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}e.a={components:{Network:f.a},name:"Ecosystem",data:function(){return{example:null,dappsList:c,filters:[],featuredDapps:c.submissions.filter((function(t){return t.featured})),developmentDapps:c.submissions.filter((function(t){return!t.featured})),publicPath:t.env.BASE_URL,sort:"",sort_options:{title_asc:{value:"group_name",name:"Title (ascending)",order:"asc"},title_desc:{value:"group_name",name:"Title (descending)",order:"desc"},recently_added:{value:"id",name:"Recently added",order:"desc"}}}},mounted:function(){},computed:{heroDarkLight:function(){return"dark"===this.colorMode?[].join(" "):""},filteredDapps:function(){var t=this,e=this.developmentDapps;return this.filters.length>0&&(console.log(this.filters),e=e.filter((function(e){var o,n=d(t.filters);try{for(n.s();!(o=n.n()).done;){var filter=o.value;if(e.tags.includes(filter.toLowerCase()))return e.tags.includes(filter.toLowerCase())}}catch(t){n.e(t)}finally{n.f()}}))),this.sort&&(e=r.a.orderBy(e,[function(e){return"string"==typeof r.a.get(e,"".concat(t.sort.value))?r.a.get(e,"".concat(t.sort.value)).toLowerCase():r.a.get(e,"".concat(t.sort.value))}],[this.sort.order,"desc"])),e}},methods:{goToDapp:function(t){this.$router.push("/ecosystem/".concat(t))},removeFilter:function(t){this.filters=this.filters.filter((function(e){return e!==t}))},addFilter:function(t){this.filters.includes(t)||this.filters.push(t)},onSort:function(t){this.sort=t},getImageLink:function(t){return o(271)("./".concat(t))}}}}).call(this,o(160))},270:function(t){t.exports=JSON.parse('{"submissions":[{"id":1,"group_name":"Delos","description":"Delos allows anyone to submit a Document and using the amazing Effect Workforce, we categorize the data from the image and validate if it is in fact a useful document.","github_url":" https://github.com/jgarciajovel/delos/tree/master ","campaign_url":"https://app.effect.network","youtube_url":"https://youtu.be/VOw77SIIBHE","website":"","devpost":"","image_url":"Delos_Logo.jpg","tags":["identificaiton","validation"],"twitter":"","discord":"","instagram":"","reddit":"","featured":1},{"id":3,"group_name":"Haiku Generator","description":"One of the most beautiful art forms is poetry. One special format for this is the Japanese Haiku. These poems consist of three lines having 5, 7 and 5 syllables, respectively. The purpose of this app is to collect an international collection of haiku\'s about certain topics (e.g. love, childhood, death, etc.).","github_url":"https://github.com/effectai/hackathon-submission-repo/tree/main/Haiku%20Generator","campaign_url":"https://testnet.effect.network/campaigns/105","youtube_url":"https://youtu.be/80dVEoivHmc","website":"","devpost":"https://effect-network-hackathon.devpost.com/submissions/291937-haiku","image_url":"logo_icon.svg","tags":["poetry","art"],"twitter":"","discord":"","instagram":"","reddit":"","featured":0},{"id":4,"group_name":"ChessForce","description":"Play chess against workers on Effect Force!","github_url":"https://github.com/effectai/hackathon-submission-repo/tree/main/chessforce","campaign_url":"https://testnet.effect.network/campaigns/151","youtube_url":"https://youtu.be/3xVAG3cCZr8","website":"https://kevinlaan.github.io/hackathon-submission-repo/","devpost":"https://effect-network-hackathon.devpost.com/submissions/294465-chessforce","image_url":"chessforce_start.png","tags":["game","social"],"twitter":"","discord":"","instagram":"","reddit":"","featured":0},{"id":5,"group_name":"QuickCat","description":"QuickCat is an app built on Shopify, a platform used by over 1.7M merchants to run their online stores. The goal is to help merchants save time and increase sales by organizing their online product listing with the help of a global human workforce.","github_url":"https://github.com/effectai/hackathon-submission-repo/tree/main/catalogue","campaign_url":"https://testnet.effect.network/campaigns/190","youtube_url":"https://youtu.be/4-a0LISRtrs","website":"https://apps.shopify.com/quickcat","devpost":"https://effect-network-hackathon.devpost.com/submissions/293030-catalogue","image_url":"Catalogue_Thumbnail.png","tags":["validation","categorization"],"twitter":"","discord":"","instagram":"","reddit":"","featured":1},{"id":6,"group_name":"Effect Notebooks","description":"Effect Notebooks is a campaign where workers can earn EFX tokens for writing code that will automate the cleaning of data, the way a task specifies.","github_url":"https://github.com/effectai/hackathon-submission-repo/tree/main/Effect_Notebooks","campaign_url":"https://testnet.effect.network/campaigns/230 ","youtube_url":"https://youtu.be/9Yzuc54X5Po","website":"","devpost":"https://effect-network-hackathon.devpost.com/submissions/287525-effect-notebooks","image_url":"Effect Notebooks Logo.jpg","tags":["data","code"],"twitter":"","discord":"","instagram":"","reddit":"","featured":0},{"id":7,"group_name":"Ask A Stranger","description":"Ask any question, and wait for the answer from Effect Force!","github_url":"https://github.com/effectai/hackathon-submission-repo/tree/main/askastranger","campaign_url":"https://testnet.effect.network/campaigns/178","youtube_url":"","website":"https://askastranger.github.io/","devpost":"https://effect-network-hackathon.devpost.com/submissions/295751-askastranger","image_url":"Ask_A_Stranger_Animated.svg","tags":["social"],"twitter":"","discord":"","instagram":"","reddit":""},{"id":8,"group_name":"DStudio","description":"DStudio is a platform to Create Surveys, Test QA and Market Reasearch form in Seconds on Effect Network. Powered by Decentralized WorkForce !","github_url":"https://github.com/effectai/hackathon-submission-repo/tree/main/Dstudio","campaign_url":"https://testnet.effect.network/campaigns/290 ","youtube_url":"https://youtu.be/5_egxCq2urg","website":"https://dstudio.b-cdn.net/","devpost":"https://effect-network-hackathon.devpost.com/submissions/295281-dstudio","image_url":"DStudio_Banner.png","tags":["survey","market research"],"twitter":"","discord":"","instagram":"","reddit":""},{"id":9,"group_name":"Simple UI","description":"A simple ui for both tasker an task giver; a mechanism to create campaign without any coding knowledge","github_url":"https://github.com/effectai/hackathon-submission-repo/tree/main/gisam_submit","campaign_url":"https://testnet.effect.network/campaigns/127 ","youtube_url":"https://www.youtube.com/watch?v=Q_kkfMrDra0&feature=youtu.be","website":"https://hackaton-finale.vercel.app/","devpost":"https://effect-network-hackathon.devpost.com/submissions/291171-simple-ux","image_url":"logo_icon.svg","tags":["design","no-code"],"twitter":"","discord":"","instagram":"","reddit":""},{"id":10,"group_name":"Effect Research","description":"EffectResearch helps students, scholars and researchers to get quality data for their ongoing research.","github_url":"https://github.com/effectai/hackathon-submission-repo/tree/main/EffectResearch","campaign_url":"https://github.com/effectai/hackathon-submission-repo/tree/main/EffectResearch","youtube_url":"https://youtu.be/VVIShfU1TNg","website":"","devpost":"https://effect-network-hackathon.devpost.com/submissions/295286-effect-research","image_url":"Effect_Research_Logo.jpg","tags":["academia","research"],"twitter":"","discord":"","instagram":"","reddit":""},{"id":12,"group_name":"Gitstar","description":"Have the GitHub users from the Effect Network interact and with you open source repositories to get more traction. The Effect workforce allows projects to easily tap into a fitting audience for their GitHub pages.","github_url":"https://github.com/effectai/hackathon-submission-repo/tree/main/gitstar","campaign_url":"https://testnet.effect.network/campaigns/130/ ","youtube_url":"https://youtu.be/kUSMbex6qz8","website":"https://gitstar.dev/","devpost":"https://devpost.com/software/gitstar","image_url":"gitstar.png","tags":["social","engagement"],"twitter":"","discord":"","instagram":"","reddit":""},{"id":13,"group_name":"Ergasia","description":"It is a task distribution platform powered by Effect Network. It allows companies and individuals to upload tasks and get them done quickly. It currently has 5 campaigns which are Converting handwritten images to text, Editing Images, Technical Code Debug, Feedback for posters and asking Academic Course related questions.","github_url":"https://github.com/effectai/hackathon-submission-repo/tree/main/ergasia","campaign_url":"https://testnet.effect.network/campaigns/205","youtube_url":"https://youtu.be/LSPXKT6H_gQ","website":"https://ergasia.vercel.app/","devpost":"https://effect-network-hackathon.devpost.com/submissions/295276-ergasia","image_url":"Ergasia_Banner.svg","tags":["image","data","code"],"twitter":"","discord":"","instagram":"","reddit":""},{"id":14,"group_name":"BlockSage","description":"BlockSage tries to utilise the Effect Network to solve the Billion dollar challenge of Content Moderation and making the web a safe place, while creating more opportunities for Effect Workforce. With BlockSage focus is on helping companies leverage BlockSage for content moderation even if they don\'t have any Web3 expertise.","github_url":"https://github.com/effectai/hackathon-submission-repo/tree/main/blocksage","campaign_url":"https://testnet.effect.network/campaigns/354 ","youtube_url":"https://youtu.be/2QDypnL8Fog","website":"http://blocksage.github.io/web-app","devpost":"https://effect-network-hackathon.devpost.com/submissions/291860-blocksage","image_url":"logo_icon.svg","tags":["content","moderation","social"],"twitter":"","discord":"","instagram":"","reddit":""},{"id":15,"group_name":"EYEFX","description":"EYEFX measures where the users are looking on the computer screen, for how long, and where do they go next. This provides valuable insights into the perception and interaction of users of these digital assets which can be used to optimize design towards specific targets. Through the Effect Force platform, a requester can submit their design and have it trialled by a number of users, throughout the world, otherwise impossible to reach in a practical fashion. Moreover, pooling thousands of users\' interactions enables Machine Learning techniques to validate and combine the data in order to improve detection algorithms over time.","github_url":"https://github.com/effectai/hackathon-submission-repo/tree/main/EYEFX","campaign_url":"https://testnet.effect.network/campaigns/84 ","youtube_url":"https://www.youtube.com/watch?v=uXlsayVKdrA","website":"","devpost":"https://effect-network-hackathon.devpost.com/submissions/290789-eyefx","image_url":"EYE_FX.jpg","tags":["survey","analytics","behaviour"],"twitter":"","discord":"","instagram":"","reddit":""},{"id":16,"group_name":"Authentic","description":"An idea bulb to collaboratively manage and restructure and restrict false information to improve the quality of online presence.","github_url":"https://github.com/effectai/hackathon-submission-repo/tree/main/EFX-Authentic","campaign_url":"https://testnet.effect.network/campaigns/359 ","youtube_url":"https://youtu.be/nVpD5xGjrkI","website":"https://efx-authentic.herokuapp.com","devpost":"https://effect-network-hackathon.devpost.com/submissions/295461-authentic","image_url":"logo_icon.svg","tags":["quality-assurance"],"twitter":"","discord":"","instagram":"","reddit":""},{"id":17,"group_name":"Youtube Chapters","description":"Chapters in videos help us to get idea of the content of video without watching it completely. Chapters save us lot of time when we watch tutorial videos. It inspired me to find a solution to easily create chapters. This application add chapters to videos by using Effect Network.","github_url":"https://github.com/effectai/hackathon-submission-repo/tree/main/chapterfy","campaign_url":"https://testnet.effect.network/campaigns/351/1507533520896 ","youtube_url":"https://youtu.be/Rmw6JJqs2z8","website":"","devpost":"https://effect-network-hackathon.devpost.com/submissions/292602-youtube-chapters","image_url":"yt_logo_rgb_light.png","tags":["youtube","video"],"twitter":"","discord":"","instagram":"","reddit":""},{"id":18,"group_name":"EffectAndroidWallet","description":"Android Wallet for Effect Network. EffectWallet allows campaign creation directly from the app.","github_url":"https://github.com/bobguy101/EffectAndroidWallet","campaign_url":"https://testnet.effect.network/campaigns/329/1413044240384","youtube_url":"https://youtu.be/90Coagi08_Y","website":"","devpost":"https://effect-network-hackathon.devpost.com/submissions/295479-effect-android-wallet","image_url":"logo_icon.svg","tags":["android","wallet"],"twitter":"","discord":"","instagram":"","reddit":""},{"id":19,"group_name":"Effect Voice","description":"Effect Voice is an Effect Network template that allow worker to complete tasks with their voice and earn EFX rewards. Freedom to work from anywhere at anytime with your voice, even stuck in traffic jams, exercising or doing any relaxation and time consuming activity.","github_url":"https://github.com/effectai/hackathon-submission-repo/tree/main/EffectVoice","campaign_url":"https://testnet.effect.network/campaigns/358","youtube_url":"https://youtu.be/vMRXovfpY6Y","website":"http://47.242.55.212:8080/campaign.html","devpost":"https://effect-network-hackathon.devpost.com/submissions/295268-effect-voice","image_url":"Effect_Voice_Logo.png","tags":["work","voice-interaction"],"twitter":"","discord":"","instagram":"","reddit":""},{"id":20,"group_name":"EffectQA","description":"With EffectQA, you can gather valuable feedback for your product in days without breaking the bank, and without having to hire part or full time employees.","github_url":"https://github.com/effectai/hackathon-submission-repo/tree/main/EffectQA ","campaign_url":"https://testnet.effect.network/campaigns/144 ","youtube_url":"https://youtu.be/E32y-08ZYrg","website":"","devpost":"https://effect-network-hackathon.devpost.com/submissions/290748-effectqa-tokenized-product-feedback","image_url":"Effect_QA_1.png","tags":["quality-assurance","product-testing"],"twitter":"","discord":"","instagram":"","reddit":""},{"id":21,"group_name":"Effect Socials","description":"Real engagements on your social media posts from genuine fans. The most effective way to have the social media algorithms work for you is to increase your engagement rate. Quality engagement is rewarded 80% more than anything else.","github_url":"https://github.com/effectai/effect-socials","campaign_url":"https://app.effect.network/campaigns/14","youtube_url":"","website":"https://socials.effect.network","devpost":"","image_url":"effect-socials.png","tags":["social"],"twitter":"","discord":"","instagram":"","reddit":"","featured":1},{"id":11,"group_name":"Vibelyze","description":"Vibelyze is an app that investigates music nuance. Vibelyze obtains information suitable for training your music-related machine algorithm, designing your DJ setlist or just to promote your music by handing songs to thousands of listening ears.","github_url":"https://github.com/vibelyze/vibelyze","campaign_url":"https://app.effect.network/campaigns/19","youtube_url":"https://www.youtube.com/watch?v=O6vbbiE918Y","website":"https://vibelyze.github.io/vibelyze/","devpost":"https://effect-network-hackathon.devpost.com/submissions/295633-vibelyze","image_url":"Vibelyze_Logo.png","tags":["Music","categorization"],"twitter":"","discord":"","instagram":"","reddit":"","featured":1},{"id":22,"group_name":"MetaverseTasks.io","description":"MetaverseTasks.io is connecting individuals and businesses together in the web3 space. Its goal is to unite skilled individuals and web3 projects together, create pathways to skill progression, and launch careers for those who want to build the future.","github_url":"","campaign_url":"","youtube_url":"","website":"https://metaversetasks.io/","devpost":"","image_url":"metaverseio.png","tags":["work"],"twitter":"","discord":"","instagram":"","reddit":"","featured":0},{"id":23,"group_name":"Image Labeler","description":"Upgrade the metadata of your images and NFT\'s using the Effect Network image labeler. Make it easier for your audience to find your images and AI-generated NFT\'s. Label them today.","github_url":"https://github.com/effectai/dApp-Label-Image/","campaign_url":"https://app.effect.network/campaigns/41","youtube_url":"","website":"https://effectai.github.io/dApp-Label-Image/","devpost":"","image_url":"image-labeler.png","tags":["NFT","image","metadata"],"twitter":"https://twitter.com/effectaix","discord":"https://discord.gg/effectnetwork","instagram":"","reddit":"","featured":1}]}')},271:function(t,e,o){var map={"./2021 Twitter logo - black.png":272,"./2021 Twitter logo - blue.png":273,"./2021 Twitter logo - white.png":274,"./Ask_A_Stranger.svg":275,"./Ask_A_Stranger_Animated.svg":276,"./Catalogue_Icon.png":277,"./Catalogue_Thumbnail.png":278,"./DStudio_Banner.png":279,"./DStudio_Logo.png":280,"./Delos_Banner.jpeg":281,"./Delos_Logo.jpg":282,"./EYE_FX.jpg":283,"./Effect Notebooks Diagram.jpg":284,"./Effect Notebooks Logo.jpg":285,"./Effect_QA_1.png":286,"./Effect_QA_2.png":287,"./Effect_Research_BG.png":288,"./Effect_Research_Logo.jpg":289,"./Effect_Voice_Banner.png":290,"./Effect_Voice_Logo.png":291,"./Ergasia_Banner.svg":292,"./Ergasia_Logo.png":293,"./Ergasia_Title_Logo.svg":294,"./Vibelyze_Logo.png":295,"./chessforce_game-over.png":296,"./chessforce_start.png":297,"./effect-force.png":298,"./effect-socials.png":299,"./force-icon.svg":300,"./gitstar.png":301,"./image-labeler.png":302,"./logo_icon.svg":303,"./metaverseio.png":304,"./pepe_logo.png":305,"./pepe_titlte_logo.png":306,"./yt_logo_rgb_light.png":307};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=271},272:function(t,e,o){t.exports=o.p+"img/2021 Twitter logo - black.072692a.png"},273:function(t,e,o){t.exports=o.p+"img/2021 Twitter logo - blue.7571ea1.png"},274:function(t,e,o){t.exports=o.p+"img/2021 Twitter logo - white.1b41a5a.png"},275:function(t,e,o){t.exports=o.p+"1bcd1a54d4bfd0f80ad8039562efe071.svg"},276:function(t,e,o){t.exports=o.p+"def50d1673f83d2fdbd3a12f02994362.svg"},277:function(t,e,o){t.exports=o.p+"img/Catalogue_Icon.ef52c7b.png"},278:function(t,e,o){t.exports=o.p+"img/Catalogue_Thumbnail.dc6a47c.png"},279:function(t,e,o){t.exports=o.p+"img/DStudio_Banner.1f4a0b4.png"},280:function(t,e,o){t.exports=o.p+"img/DStudio_Logo.a7ebbeb.png"},281:function(t,e,o){t.exports=o.p+"img/Delos_Banner.27f7415.jpeg"},282:function(t,e,o){t.exports=o.p+"img/Delos_Logo.63d2b03.jpg"},283:function(t,e,o){t.exports=o.p+"img/EYE_FX.ee92fc3.jpg"},284:function(t,e,o){t.exports=o.p+"img/Effect Notebooks Diagram.2c17c15.jpg"},285:function(t,e,o){t.exports=o.p+"img/Effect Notebooks Logo.a5f575a.jpg"},286:function(t,e,o){t.exports=o.p+"img/Effect_QA_1.4fd2704.png"},287:function(t,e,o){t.exports=o.p+"img/Effect_QA_2.2165bb7.png"},288:function(t,e,o){t.exports=o.p+"img/Effect_Research_BG.ba17205.png"},289:function(t,e,o){t.exports=o.p+"img/Effect_Research_Logo.5dedaf1.jpg"},290:function(t,e,o){t.exports=o.p+"img/Effect_Voice_Banner.a8f1c5b.png"},291:function(t,e,o){t.exports=o.p+"img/Effect_Voice_Logo.cc43a91.png"},292:function(t,e,o){t.exports=o.p+"ef6eef6f97dcd11161092b7a829ed802.svg"},293:function(t,e,o){t.exports=o.p+"img/Ergasia_Logo.f855a01.png"},294:function(t,e,o){t.exports=o.p+"7055d3f2c909fd7250fa8def93bd7a46.svg"},295:function(t,e,o){t.exports=o.p+"img/Vibelyze_Logo.a401c86.png"},296:function(t,e,o){t.exports=o.p+"img/chessforce_game-over.31b824c.png"},297:function(t,e,o){t.exports=o.p+"img/chessforce_start.640d4ff.png"},298:function(t,e,o){t.exports=o.p+"img/effect-force.28115dc.png"},299:function(t,e,o){t.exports=o.p+"img/effect-socials.2ae2b37.png"},300:function(t,e,o){t.exports=o.p+"d5257d96beb1d85c3d81c7e50a41ea23.svg"},301:function(t,e,o){t.exports=o.p+"img/gitstar.be35135.png"},302:function(t,e,o){t.exports=o.p+"img/image-labeler.7c31ca1.png"},303:function(t,e,o){t.exports=o.p+"5d36f0ffee66f978b5707d35976e5905.svg"},304:function(t,e,o){t.exports=o.p+"img/metaverseio.97e758c.png"},305:function(t,e,o){t.exports=o.p+"img/pepe_logo.c0edd37.png"},306:function(t,e,o){t.exports=o.p+"img/pepe_titlte_logo.5f0d189.png"},307:function(t,e,o){t.exports=o.p+"img/yt_logo_rgb_light.07b8560.png"},332:function(t,e,o){var content=o(424);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("dd3c4cac",content,!0,{sourceMap:!1})},423:function(t,e,o){"use strict";o(332)},424:function(t,e,o){(e=o(19)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),e.push([t.i,"@import url(https://use.typekit.net/kej5qyk.css);"]),e.push([t.i,".select select[data-v-6363ef04]{outline:none;background-color:#f6f7ff;border:none;color:#81889d}.featured-apps[data-v-6363ef04]{background:linear-gradient(0deg,#f6f7ff 65%,transparent 0)}.card[data-v-6363ef04]:hover{box-shadow:0 4px 30px rgba(16,29,86,.1)!important}.card[data-v-6363ef04]{transition:all .3s ease;cursor:pointer;display:flex;flex-direction:column;height:100%;z-index:1;margin-top:auto;border:1px solid #ededed}.card .card-image[data-v-6363ef04]{border:1px solid #e8eeff;overflow:hidden;border-radius:10px!important}.card .card-image[data-v-6363ef04],.card .card-image figure[data-v-6363ef04],.card .card-image img[data-v-6363ef04]{height:150px!important}.card .card-image img[data-v-6363ef04]{width:100%;-o-object-fit:cover;object-fit:cover}.blurred[data-v-6363ef04]{filter:blur(10px)}#overlay[data-v-6363ef04]{overflow:hidden;position:fixed;height:100vh;width:100vw;text-align:center;display:flex;justify-content:center;align-items:center;z-index:29;margin-top:60px}#overlay h1[data-v-6363ef04]{font-size:4rem;margin-top:-60px;text-shadow:0 0 10px #fff}",""]),t.exports=e},620:function(t,e,o){"use strict";o.r(e);var n=o(269).a,r=(o(423),o(8)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",[t._m(0),t._v(" "),o("div",{staticClass:"featured-apps"},[o("div",{staticClass:"container pt-2 pb-6"},[o("h2",{staticClass:"subtitle has-text-weight-semibold is-4 mb-5"},[t._v("Featured dApps")]),t._v(" "),o("div",{staticClass:"columns is-multiline"},t._l(t.featuredDapps,(function(e){return o("div",{key:e.id,staticClass:"column is-full-mobile is-half-tablet is-one-fifth-desktop is-one-fifth-widescreen"},[o("div",{staticClass:"card is-shadowless has-background-white p-4",on:{click:function(o){return t.goToDapp(e.group_name)}}},[o("div",{staticClass:"card-image mx-auto mb-2"},[o("figure",[o("img",{attrs:{src:t.getImageLink(e.image_url),alt:e.image_url}})])]),t._v(" "),o("div",{staticClass:"card-content p-2"},[o("section",{staticClass:"title-section"},[o("div",{staticClass:"media-content"},[o("h2",{staticClass:"title is-5 has-text-weight-medium mb-3 has-text-centered has-text-black"},[t._v("\n                      "+t._s(e.group_name)+"\n                    ")]),t._v(" "),o("div",{staticClass:"tags is-centered"},t._l(e.tags,(function(e){return o("span",{key:e,staticClass:"tag is-info is-light",on:{click:function(o){return o.preventDefault(),t.addFilter(e)}}},[t._v(t._s(e))])})),0)])])])])])})),0)])]),t._v(" "),o("section",[o("div",{staticClass:"container my-6 py-6"},[o("h2",{staticClass:"subtitle has-text-weight-semibold is-4"},[t._v("In Development")]),t._v(" "),o("div",{staticClass:"is-flex is-align-items-center is-justify-content-space-between"},[o("div",{staticClass:"tags is-align-items-center is-align-content-center is-flex"},[t.filters.length>0?o("p",{staticClass:"is-size-7 mr-3 mb-0",on:{click:function(e){t.filters=[]}}},[t._v("clear tags")]):t._e(),t._v(" "),t._l(t.filters,(function(e){return o("span",{key:e,staticClass:"tag is-medium py-4 mb-0 is-info is-light"},[t._v("\n              "+t._s(e)+"\n              "),o("button",{staticClass:"delete is-small",on:{click:function(o){return t.removeFilter(e)}}})])}))],2),t._v(" "),o("div",{staticClass:"select"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.sort,expression:"sort"}],on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.sort=e.target.multiple?o:o[0]},function(e){return t.onSort(t.sort)}]}},[o("option",{attrs:{value:"",selected:""}},[t._v("Sort by")]),t._v(" "),t._l(t.sort_options,(function(e){return o("option",{key:e.name,staticClass:"column",domProps:{value:e}},[t._v("\n                "+t._s(e.name)+"\n              ")])}))],2)])]),t._v(" "),o("div",{staticClass:"columns is-multiline mt-2"},[t._l(t.filteredDapps,(function(e){return o("div",{key:e.id,staticClass:"column is-full-mobile is-half-tablet is-one-third-desktop is-one-quarter-widescreen"},[o("div",{staticClass:"card is-shadowless has-background-white p-4",on:{click:function(o){return t.goToDapp(e.group_name)}}},[o("div",{staticClass:"card-image mx-auto mb-2"},[o("figure",[o("img",{attrs:{src:t.getImageLink(e.image_url),alt:e.image_url}})])]),t._v(" "),o("div",{staticClass:"card-content p-2"},[o("section",{staticClass:"title-section"},[o("div",{staticClass:"media-content"},[o("h2",{staticClass:"title is-5 has-text-weight-medium mb-3 has-text-centered has-text-black"},[t._v("\n                      "+t._s(e.group_name)+"\n                    ")]),t._v(" "),o("div",{staticClass:"tags is-centered"},t._l(e.tags,(function(e){return o("span",{key:e,staticClass:"tag is-info is-light",on:{click:function(o){return t.addFilter(e)}}},[t._v(t._s(e))])})),0),t._v(" "),o("p",{staticClass:"has-text-grey is-flex is-clipped mb-0"},[t._v("\n                      "+t._s(e.description.length>200?e.description.slice(0,200)+"...":e.description)+"\n                    ")])])])])])])})),t._v(" "),0===t.filteredDapps.length?o("p",[t._v("\n            No dApps found matching that match the criteria\n          ")]):t._e()],2)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section has-navbar-fixed-top"},[e("div",{staticClass:"hero"},[e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"title is-1"},[this._v("Effect Ecosystem")]),this._v(" "),e("p",{staticClass:"block"},[this._v("\n          Effect Network's ecosystem is a collection of all the applications\n          running on the network. You may use $EFX tokens to buy a number of\n          services that boost productivity, including social media engagement,\n          translations, subtitles and graphics, to help your business grow in\n          many ways. Think of this as the $EFX candy store, which will be\n          available to you very soon!\n            ")])])])])])}],!1,null,"6363ef04",null);e.default=component.exports}}]);