(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./.linaria-cache/src/components/pack/NsfwModal.linaria.css":function(e,t,a){},"./.linaria-cache/src/components/pack/Sticker.linaria.css":function(e,t,a){},"./.linaria-cache/src/components/pack/StickerPackDetail.linaria.css":function(e,t,a){},"./config/modernizr-config.json":function(e,t){!function(t){var a="Modernizr"in t,r=t.Modernizr;!function(e,t,a,r){function n(e,t){return typeof e===t}function s(e,t){return!!~(""+e).indexOf(t)}function o(){return"function"!=typeof a.createElement?a.createElement(arguments[0]):x?a.createElementNS.call(a,"http://www.w3.org/2000/svg",arguments[0]):a.createElement.apply(a,arguments)}function l(e,t,r,n){var s,l,c,i,d="modernizr",u=o("div"),m=function(){var e=a.body;return e||((e=o(x?"svg":"body")).fake=!0),e}();if(parseInt(r,10))for(;r--;)(c=o("div")).id=n?n[r]:d+(r+1),u.appendChild(c);return(s=o("style")).type="text/css",s.id="s"+d,(m.fake?m:u).appendChild(s),m.appendChild(u),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(a.createTextNode(e)),u.id=d,m.fake&&(m.style.background="",m.style.overflow="hidden",i=E.style.overflow,E.style.overflow="hidden",E.appendChild(m)),l=t(u,e),m.fake?(m.parentNode.removeChild(m),E.style.overflow=i,E.offsetHeight):u.parentNode.removeChild(u),!!l}function c(e){return e.replace(/([A-Z])/g,(function(e,t){return"-"+t.toLowerCase()})).replace(/^ms-/,"-ms-")}function i(e,a){var n=e.length;if("CSS"in t&&"supports"in t.CSS){for(;n--;)if(t.CSS.supports(c(e[n]),a))return!0;return!1}if("CSSSupportsRule"in t){for(var s=[];n--;)s.push("("+c(e[n])+":"+a+")");return l("@supports ("+(s=s.join(" or "))+") { #modernizr { position: absolute; } }",(function(e){return"absolute"===function(e,a,r){var n;if("getComputedStyle"in t){n=getComputedStyle.call(t,e,a);var s=t.console;if(null!==n)r&&(n=n.getPropertyValue(r));else if(s){s[s.error?"error":"log"].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else n=!a&&e.currentStyle&&e.currentStyle[r];return n}(e,null,"position")}))}return r}function d(e){return e.replace(/([a-z])-([a-z])/g,(function(e,t,a){return t+a.toUpperCase()})).replace(/^-/,"")}function u(e,t,a,l){function c(){m&&(delete S.style,delete S.modElem)}if(l=!n(l,"undefined")&&l,!n(a,"undefined")){var u=i(e,a);if(!n(u,"undefined"))return u}for(var m,p,f,k,b,g=["modernizr","tspan","samp"];!S.style&&g.length;)m=!0,S.modElem=o(g.shift()),S.style=S.modElem.style;for(f=e.length,p=0;p<f;p++)if(k=e[p],b=S.style[k],s(k,"-")&&(k=d(k)),S.style[k]!==r){if(l||n(a,"undefined"))return c(),"pfx"!==t||k;try{S.style[k]=a}catch(e){}if(S.style[k]!==b)return c(),"pfx"!==t||k}return c(),!1}function m(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,a,r,s){var o=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+v.join(o+" ")+o).split(" ");return n(t,"string")||n(t,"undefined")?u(l,t,r,s):function(e,t,a){var r;for(var s in e)if(e[s]in t)return!1===a?e[s]:n(r=t[e[s]],"function")?m(r,a||t):r;return!1}(l=(e+" "+N.join(o+" ")+o).split(" "),t,a)}function f(e,t,a){return p(e,r,r,t,a)}var k=[],b={_version:"3.11.3",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var a=this;setTimeout((function(){t(a[e])}),0)},addTest:function(e,t,a){k.push({name:e,fn:t,options:a})},addAsyncTest:function(e){k.push({name:null,fn:e})}},g=function(){};g.prototype=b,g=new g;var y=[],h="Moz O ms Webkit",v=b._config.usePrefixes?h.split(" "):[];b._cssomPrefixes=v;var E=a.documentElement,x="svg"===E.nodeName.toLowerCase(),w={elem:o("modernizr")};g._q.push((function(){delete w.elem}));var S={style:w.elem.style};g._q.unshift((function(){delete S.style}));var N=b._config.usePrefixes?h.toLowerCase().split(" "):[];b._domPrefixes=N,b.testAllProps=p,b.testAllProps=f,g.addTest("backdropfilter",f("backdropFilter")),function(){var e,t,a,r,s,o;for(var l in k)if(k.hasOwnProperty(l)){if(e=[],(t=k[l]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(a=0;a<t.options.aliases.length;a++)e.push(t.options.aliases[a].toLowerCase());for(r=n(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)1===(o=e[s].split(".")).length?g[o[0]]=r:(g[o[0]]&&(!g[o[0]]||g[o[0]]instanceof Boolean)||(g[o[0]]=new Boolean(g[o[0]])),g[o[0]][o[1]]=r),y.push((r?"":"no-")+o.join("-"))}}(),delete b.addTest,delete b.addAsyncTest;for(var L=0;L<g._q.length;L++)g._q[L]();e.Modernizr=g}(t,t,document),e.exports=t.Modernizr,a?t.Modernizr=r:delete t.Modernizr}(window)},"./src/components/pack/NsfwModal.tsx":function(e,t,a){"use strict";(function(e){var r,n=a("./node_modules/linaria/react.js"),s=a("./config/modernizr-config.json"),o=a.n(s),l=a("./node_modules/react-icons/bs/index.esm.js"),c=a("./node_modules/react-router-dom/esm/react-router-dom.js"),i=a("./node_modules/react/index.js"),d=a.n(i),u=a("./src/components/general/ExternalLink.tsx");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const p=Object(n.styled)("div")({name:"NsfwModal",class:"n11e8w11",vars:{"n11e8w11-0":[()=>o.a.backdropfilter?.75:1]}}),f=()=>{Object(i.useEffect)(()=>{$("#nsfw-modal").modal({show:!0,keyboard:!1,backdrop:"static"}),$("#nsfw-modal").addClass("fade"),$(".modal-backdrop").css("display","none")},[]);return d.a.createElement(p,{id:"nsfw-modal",className:"modal",role:"dialog"},d.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},d.a.createElement("div",{className:"modal-content"},d.a.createElement("div",{className:"modal-header"},d.a.createElement("h3",{className:"modal-title"},d.a.createElement(l.d,{className:"mr-1 text-primary"})," Content Warning")),d.a.createElement("div",{className:"modal-body"},d.a.createElement("p",null,"This pack has been marked ",d.a.createElement("i",null,"Not Safe For Work")," (",d.a.createElement(u.a,{href:"https://www.urbandictionary.com/define.php?term=NSFW"},"NSFW"),").",d.a.createElement("br",null),"This means that it may contain nudity, sexual content, or other potentially disturbing subject matter."),d.a.createElement("p",null,"You should not view this pack at work, or with children around.")),d.a.createElement("div",{className:"modal-footer"},d.a.createElement(c.Link,{to:"/",className:"btn btn-light",title:"Go back home"},"Go back home"),d.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:()=>{$("#nsfw-modal").modal("hide")}},"Show the pack")))))};m(f,"useEffect{}");const k=f;var b,g;t.a=k,a("./.linaria-cache/src/components/pack/NsfwModal.linaria.css"),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(p,"NsfwModal","/home/travis/build/signalstickers/signalstickers/src/components/pack/NsfwModal.tsx"),b.register(f,"NsfwModalComponent","/home/travis/build/signalstickers/signalstickers/src/components/pack/NsfwModal.tsx"),b.register(k,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/NsfwModal.tsx")),(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&g(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/pack/Sticker.tsx":function(e,t,a){"use strict";(function(e){var r,n=a("./node_modules/linaria/react.js"),s=a("./node_modules/react/index.js"),o=a.n(s),l=a("./node_modules/use-async-effect/index.js"),c=a.n(l),i=a("./src/lib/stickers.ts");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const u=Object(n.styled)("div")({name:"Sticker",class:"sahlm9h"}),m=({packId:e,packKey:t,stickerId:a})=>{const[r,n]=Object(s.useState)(""),[l,d]=Object(s.useState)("");return c()(async()=>{const[r,s]=await Promise.all([Object(i.b)(e,t,a),Object(i.a)(e,t,a)]);n(r),d(s)},[e,t,a]),o.a.createElement(u,null,r&&l?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"emoji"},r),o.a.createElement("img",{src:l,alt:"Sticker"})):o.a.createElement("div",{className:"spinner-border text-light",role:"status"},o.a.createElement("span",{className:"sr-only"},"Loading...")))};d(m,"useState{[emoji, setEmoji]('')}\nuseState{[stickerSrc, setStickerSrc]('')}\nuseAsyncEffect{}",()=>[c.a]);const p=m;var f,k;t.a=p,a("./.linaria-cache/src/components/pack/Sticker.linaria.css"),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(u,"Sticker","/home/travis/build/signalstickers/signalstickers/src/components/pack/Sticker.tsx"),f.register(m,"StickerComponent","/home/travis/build/signalstickers/signalstickers/src/components/pack/Sticker.tsx"),f.register(p,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/Sticker.tsx")),(k="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&k(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/pack/StickerPackDetail.tsx":function(e,t,a){"use strict";a.r(t),function(e){var r,n=a("./node_modules/linaria/react.js"),s=a("./node_modules/react/index.js"),o=a.n(s),l=a("./node_modules/react-icons/bs/index.esm.js"),c=a("./node_modules/react-router/esm/react-router.js"),i=a("./node_modules/react-router-dom/esm/react-router-dom.js"),d=a("./node_modules/react-linkify/dist/index.js"),u=a.n(d),m=a("./node_modules/use-async-effect/index.js"),p=a.n(m),f=a("./src/components/general/ExternalLink.tsx"),k=a("./src/contexts/StickersContext.tsx"),b=a("./src/hooks/use-query.ts"),g=a("./src/lib/stickers.ts"),y=a("./src/components/pack/NsfwModal.tsx"),h=a("./src/components/pack/Sticker.tsx"),v=a("./src/components/pack/StickerPackError.tsx"),E=a("./src/components/pack/Tag.tsx");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var x="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const w=Object(n.styled)("div")({name:"StickerPackDetail",class:"s11r72gg"}),S=Object(n.styled)("div")({name:"StickerGridView",class:"sk46ngu"}),N=(e,t,a)=>o.a.createElement(f.a,{href:e,key:a},t),L=()=>{const{setSearchQuery:e,searcher:t}=Object(s.useContext)(k.b),a=Object(c.k)(),r=Object(b.a)(),{packId:n}=Object(c.m)(),d="string"==typeof r.key?r.key:void 0,[m,x]=Object(s.useState)(),[L,j]=Object(s.useState)("");p()(async()=>{try{if(!n)return;x(await Object(g.c)(n,d))}catch(e){e.code&&j(e.code)}},[d,n]);const H=o.a.useCallback(r=>{r.preventDefault(),t&&r.currentTarget.textContent&&(e(t.buildQueryString({attributeQueries:[{author:r.currentTarget.textContent}]})),a.push("/"))},[a,t,e]);if(!n||!m){if(L)switch(L){case"NO_KEY_PROVIDED":return o.a.createElement(v.a,null,o.a.createElement("p",null,"This sticker pack is not listed in the Signal Stickers directory. However, if you have the pack's ",o.a.createElement("strong",null,"key"),", you can still preview the sticker pack by supplying a ",o.a.createElement("code",null,"key"),"parameter in the URL."),o.a.createElement("p",null,"For example: ",o.a.createElement("code",null,`/pack/${n}?key=sticker-pack-key`)));case"MANIFEST_DECRYPT":return o.a.createElement(v.a,null,o.a.createElement("p",null,"The provided key is invalid."));default:return o.a.createElement(v.a,null,o.a.createElement("p",null,"An unknown error occurred (",L,")."))}return null}const G=m.manifest.author.trim()?m.manifest.author:"Anonymous";return o.a.createElement(w,{className:"px-1 px-sm-4 py-4 mt-0 my-sm-4"},m.meta.nsfw&&o.a.createElement(y.a,null),o.a.createElement("div",{className:"row mb-4 flex-column-reverse flex-lg-row"},o.a.createElement("div",{className:"col-12 col-lg-8 mt-2 mt-lg-0"},o.a.createElement("h1",null,m.manifest.title),o.a.createElement("button",{type:"button",role:"link",title:"View more packs from "+G,className:"btn btn-link p-0 border-0 text-left",onClick:H},G)),o.a.createElement("div",{className:"col-12 col-lg-4 d-flex d-lg-block justify-content-between text-md-right mb-3 mb-lg-0"},m.meta.unlisted?null:o.a.createElement(i.Link,{to:"/",className:"btn btn-light mr-2"},o.a.createElement(l.a,{className:"arrow-left-icon"})," Back"),o.a.createElement(f.a,{href:`https://signal.art/addstickers/#pack_id=${n}&pack_key=${m.meta.key}`,className:"btn btn-primary",title:"Add to Signal"},o.a.createElement(l.h,{className:"plus-icon"})," Add to Signal"))),!m.meta.unlisted&&o.a.createElement("div",{className:"row mb-4"},o.a.createElement("div",{className:"col-12 col-lg-9"},o.a.createElement("ul",{className:"list-group"},m.meta.original&&o.a.createElement("li",{className:"list-group-item text-wrap text-break"},o.a.createElement(l.j,{title:"Original",className:"star-icon mr-4"}),"This pack has been created exclusively for Signal by the artist, from original artworks."),m.meta.animated&&o.a.createElement("li",{className:"list-group-item text-wrap text-break"},o.a.createElement(l.e,{title:"Animated",className:"text-primary mr-4"}),"This pack contains animated stickers!"),m.meta.source&&o.a.createElement("li",{className:"list-group-item text-wrap text-break"},o.a.createElement(l.b,{title:"Source",className:"mr-4 text-primary mention-icon"}),o.a.createElement("div",null,o.a.createElement(u.a,{componentDecorator:N},m.meta.source))),o.a.createElement("li",{className:"list-group-item text-wrap text-break"},o.a.createElement(l.f,{title:"Sticker Count",className:"mr-4 text-primary"}),m.manifest.stickers.length),o.a.createElement("li",{className:"list-group-item"},o.a.createElement(l.k,{title:"Tags",className:"mr-4 text-primary"}),o.a.createElement("div",{className:"text-wrap text-break mb-n1"},m.meta.tags&&m.meta.tags.length>0?m.meta.tags.map(e=>o.a.createElement(E.a,{key:e,className:"mb-1 mr-1",label:e})):"None"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement(S,null,m.manifest.stickers.map(e=>o.a.createElement(h.a,{packId:n,packKey:m.meta.key,stickerId:e.id,key:e.id}))))))};x(L,"useContext{{\n    setSearchQuery,\n    searcher\n  }}\nuseHistory{history}\nuseQuery{query}\nuseParams{{\n    packId\n  }}\nuseState{[stickerPack, setStickerPack]}\nuseState{[stickerPackError, setStickerPackError]('')}\nuseAsyncEffect{}\nuseCallback{onAuthorClick}",()=>[c.k,b.a,c.m,p.a]);const j=L;var H,G;t.default=j,a("./.linaria-cache/src/components/pack/StickerPackDetail.linaria.css"),(H="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(H.register(w,"StickerPackDetail","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx"),H.register(S,"StickerGridView","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx"),H.register(N,"linkifyHrefDecorator","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx"),H.register(L,"StickerPackDetailComponent","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx"),H.register(j,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx")),(G="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&G(e)}.call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/pack/StickerPackError.tsx":function(e,t,a){"use strict";(function(e){var r,n=a("./node_modules/react/index.js"),s=a.n(n);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const o=e=>s.a.createElement("div",{className:"p-4 my-4"},s.a.createElement("div",{className:"row mb-4"},s.a.createElement("div",{className:"col-10 offset-1 alert alert-danger"},s.a.createElement("h3",{className:"alert-heading mt-1 mb-3"},"Error"),e.children))),l=o;var c,i;t.a=l,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(o,"StickerPackError","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackError.tsx"),c.register(l,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackError.tsx")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/pack/Tag.tsx":function(e,t,a){"use strict";(function(e){var r,n=a("./node_modules/linaria/lib/index.js"),s=a("./node_modules/react/index.js"),o=a.n(s),l=a("./node_modules/react-router/esm/react-router.js"),c=a("./src/contexts/StickersContext.tsx");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const d=({className:e,label:t})=>{const{searcher:a,setSearchQuery:r}=Object(s.useContext)(c.b),i=Object(l.k)(),d=o.a.useCallback(e=>{e.preventDefault(),a&&(r(a.buildQueryString({attributeQueries:[{tag:t}]})),i.push("/"))},[a]);return o.a.createElement("button",{type:"button",title:`View more packs with tag "${t}"`,className:Object(n.cx)("btn btn-primary btn-sm px-2 py-1 rounded-lg text-capitalize text-nowrap",e),role:"link",onClick:d},t)};i(d,"useContext{{searcher, setSearchQuery}}\nuseHistory{history}\nuseCallback{onTagClick}",()=>[l.k]);const u=d;var m,p;t.a=u,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(d,"TagComponent","/home/travis/build/signalstickers/signalstickers/src/components/pack/Tag.tsx"),m.register(u,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/Tag.tsx")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/hooks/use-query.ts":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return i}));var r,n,s,o=a("./node_modules/query-string/index.js"),l=a.n(o),c=a("./node_modules/react-router/esm/react-router.js");function i(){return l.a.parse(Object(c.l)().search)}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(i,"useLocation{}",()=>[c.l]),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(i,"useQuery","/home/travis/build/signalstickers/signalstickers/src/hooks/use-query.ts"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))}}]);
//# sourceMappingURL=detail-9598a5daa3cf9ca2b1e7.js.map