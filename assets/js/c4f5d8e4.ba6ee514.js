(self.webpackChunktonghualabs_website=self.webpackChunktonghualabs_website||[]).push([[195],{9119:function(e,t,n){"use strict";n.d(t,{ug:function(){return H},t:function(){return k},$5:function(){return b},iW:function(){return U}});var a=n(2122),r=n(7294),c=n(6010),l="container_3W2b",s="containerActive_3rYT",i=function(e){var t,n=e.className,a=e.active,i=e.onClick;return r.createElement("div",{className:(0,c.Z)(l,n,(t={},t[s]=a,t)),onClick:i})},o=n(6742),m=n(3671),u="container_176e",d="container_active_-mar",v="image_2oBa",g="title_1oEI",f="description_f9qD",E="more_3y8Z",h=function(e){var t,n=e.data,a=e.className,l=e.active,s=e.width,i=e.height,h=n.image,p=n.alt,N=n.title,_=n.description,y=n.to;return r.createElement("div",{className:(0,c.Z)(u,a,(t={},t[d]=l,t)),style:{width:s,height:i}},r.createElement("img",{src:h,alt:p,className:v}),r.createElement("div",null,r.createElement(m.bU,{text:N,className:g}),r.createElement(m.he,{text:_,className:f})),r.createElement(o.Z,{to:y},r.createElement(m.he,{text:"More",className:E})))},p=n(1061),N=n(6037),_="container_1ofh",y="slider_2liT",w="item_3CKO",x="bulletContainer_zyq_",b=function(e){var t=e.labs,n=e.style,l=e.className,s=(0,p.i)().windowWidth,o=(0,r.useState)(0),m=o[0],u=o[1],d={width:300,height:400},v=(0,N.useSwipeable)({onSwipedLeft:function(){m<t.length-1&&u(m+1)},onSwipedRight:function(){m>0&&u(m-1)},preventDefaultTouchmoveEvent:!0,trackMouse:!0}),g=(0,r.useCallback)((function(e){var t=d.width;return e-3>=m?{translateX:t/2+t/40,zIndex:-1,opacity:0,scale:.75}:e-2===m?{translateX:t/2+t/40,zIndex:0,opacity:s>996?1:0,scale:.75}:e-1===m?{translateX:t/4,zIndex:1,opacity:s>t+t/2?1:0,scale:.85}:e===m?{translateX:0,zIndex:2,opacity:1,scale:1}:e+1===m?{translateX:-t/4,zIndex:1,opacity:s>t+t/2?1:0,scale:.85}:e+2===m?{translateX:-t/2-t/40,zIndex:0,opacity:s>996?1:0,scale:.75}:e+3<=m?{translateX:-t/2-t/40,zIndex:-1,opacity:0,scale:.75}:void 0}),[m,d,s]);return r.createElement("div",(0,a.Z)({className:(0,c.Z)(_,l)},v,{style:n}),r.createElement("div",{className:y,style:{height:d.height,width:.95*s>d.width&&d.width||"100%"}},t.map((function(e,t){var n=g(t);return r.createElement("div",{key:e.title,className:w,style:{transform:"translateX("+n.translateX+"px) scale("+n.scale+")",opacity:n.opacity,zIndex:n.zIndex,cursor:t===m?"auto":"pointer"},onClick:function(){u(t)}},r.createElement(h,{data:e,active:t===m,width:.95*s>d.width&&d.width||"100%",height:d.height}))}))),t.length>1&&r.createElement("div",{className:x},t.map((function(e,t){return r.createElement(i,{key:e.title,active:t===m,onClick:function(){u(t)}})}))))},Z="container_1RSq",I="image_2yjj",k=function(e){var t=e.image,n=e.alt,a=e.title,l=e.description,s=e.to,i=e.style,o=e.className;return r.createElement("div",{className:(0,c.Z)(Z,o),style:i},r.createElement("img",{src:t,alt:n,className:I}),r.createElement(m.bU,{text:a,to:s,style:{marginTop:"24px"}}),r.createElement(m.dk,{text:l}))},C=n(4996),T=n(2263),S="windowContainer_3A5X",M="windowImage_3a85",D="captionSpace_3Itq",U=function(e){var t=e.style,n=e.textContent,a=e.className,l=(0,T.Z)().siteConfig.title;return r.createElement("div",{className:(0,c.Z)(S,a),style:t},r.createElement("img",{src:(0,C.Z)("/img/features/window_header.png"),alt:"Widows Header Image | "+l,className:M}),r.createElement("div",{className:D},n))},W="block_3OoZ",H=function(e){var t=e.content,n=e.style,a=e.className;return r.createElement("div",{className:(0,c.Z)(W,a),style:n},t)}},7731:function(e,t,n){"use strict";var a=n(7294),r=n(4087);t.Z=function(e){var t=e.largeContent,n=e.smallContent,c=(0,r.D)(),l=(0,r.U)();return a.createElement(a.Fragment,null,c&&(n||t),l&&(t||n))}},3671:function(e,t,n){"use strict";n.d(t,{Ql:function(){return _},dk:function(){return Z},h4:function(){return w},aG:function(){return b},YP:function(){return k},eb:function(){return y},he:function(){return I},bU:function(){return x}});var a=n(7294),r=n(6010),c=n(6742),l="biggestHeader_9sF5",s="subBiggestHeader_2wZf",i="colorful_2QVy",o="header_R8UQ",m="subHeader_35Wj",u="headerDescription_CLjX",d="description_1uPm",v="subDescription_1Yoe",g="highlightContainer_iHTa",f="highlightText_2vvY",E="underlineCentered_6Hgl",h="underlineLeft_3lM7",p="link_iN34",N=function(e){var t=e.to,n=e.textContent;return a.createElement(c.Z,{to:t,className:p},n)},_=function(e){var t=e.text,n=e.to,c=e.style,s=e.colorful,o=void 0!==s&&s,m=e.className;return n?a.createElement(N,{to:n,textContent:a.createElement("h1",{className:(0,r.Z)(o&&i,l,m),style:c},t)}):a.createElement("h1",{className:(0,r.Z)(o&&i,l,m),style:c},t)},y=function(e){var t=e.text,n=e.to,c=e.style,l=e.colorful,o=void 0!==l&&l,m=e.className;return n?a.createElement(N,{to:n,textContent:a.createElement("h1",{className:(0,r.Z)(o&&i,s,m),style:c},t)}):a.createElement("h1",{className:(0,r.Z)(o&&i,s,m),style:c},t)},w=function(e){var t=e.text,n=e.to,c=e.style,l=e.colorful,s=void 0!==l&&l,m=e.className;return n?a.createElement(N,{to:n,textContent:a.createElement("h1",{className:(0,r.Z)(s&&i,o,m),style:c},t)}):a.createElement("h1",{className:(0,r.Z)(s&&i,o,m),style:c},t)},x=function(e){var t=e.text,n=e.to,c=e.style,l=e.colorful,s=void 0!==l&&l,o=e.className;return n?a.createElement(N,{to:n,textContent:a.createElement("h1",{className:(0,r.Z)(s&&i,m,o),style:c},t)}):a.createElement("h1",{className:(0,r.Z)(s&&i,m,o),style:c},t)},b=function(e){var t=e.text,n=e.to,c=e.style,l=e.colorful,s=void 0!==l&&l,o=e.className;return n?a.createElement(N,{to:n,textContent:a.createElement("span",{className:(0,r.Z)(s&&i,u,o),style:c},t)}):a.createElement("span",{className:(0,r.Z)(s&&i,u,o),style:c},t)},Z=function(e){var t=e.text,n=e.to,c=e.style,l=e.colorful,s=void 0!==l&&l,o=e.className;return n?a.createElement(N,{to:n,textContent:a.createElement("span",{className:(0,r.Z)(s&&i,d,o),style:c},t)}):a.createElement("span",{className:(0,r.Z)(s&&i,d,o),style:c},t)},I=function(e){var t=e.text,n=e.to,c=e.style,l=e.colorful,s=void 0!==l&&l,o=e.className;return n?a.createElement(N,{to:n,textContent:a.createElement("span",{className:(0,r.Z)(s&&i,v,o),style:c},t)}):a.createElement("span",{className:(0,r.Z)(s&&i,v,o),style:c},t)},k=function(e){var t=e.style,n=e.colorful,c=void 0!==n&&n,l=e.className,s=e.text,o=e.to,m=e.centered,u=void 0!==m&&m;return o?a.createElement(N,{to:o,textContent:a.createElement("div",{style:t,className:(0,r.Z)(c&&i,g,l)},a.createElement("h1",{className:f},s),a.createElement("div",{className:u?E:h}))}):a.createElement("div",{style:t,className:(0,r.Z)(c&&i,g,l)},a.createElement("h1",{className:f},s),a.createElement("div",{className:u?E:h}))}},4087:function(e,t,n){"use strict";n.d(t,{D:function(){return r},U:function(){return c}});var a=n(1061),r=function(){return(0,a.i)().windowWidth<=768},c=function(){return(0,a.i)().windowWidth>=769}},1061:function(e,t,n){"use strict";n.d(t,{i:function(){return r}});var a=n(7294);function r(){var e=(0,a.useState)({windowWidth:void 0,windowHeight:void 0,scrollHeight:void 0}),t=e[0],n=e[1];return(0,a.useEffect)((function(){var e=function(){n({windowWidth:window.innerWidth,windowHeight:window.innerHeight,scrollHeight:document.documentElement.scrollHeight})};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t}},1342:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ue}});var a=n(7294),r=n(4973),c=n(6016),l=n(4996),s=n(2263),i=n(6010),o=n(3671),m="stars_1ip1",u="stars2_Y1il",d="stars3_1LJF",v=function(){return a.createElement("div",null,a.createElement("div",{className:m}),a.createElement("div",{className:u}),a.createElement("div",{className:d}))},g="container_w-Nl",f="introduce_1mxl",E="headerText_1SZG",h="description_11jp",p="imgSection_1Y8Q",N="moonHalf_1K4g",_="rocket_3OcK",y="jupiter_3M8X",w="circle_grey_1GJp",x=function(e){var t=e.style,n=e.className,c=(0,s.Z)().siteConfig.title;return a.createElement("div",{className:(0,i.Z)(n,g),style:t},a.createElement(v,null),a.createElement("div",{className:(0,i.Z)("container",f)},a.createElement(o.Ql,{className:E,text:(0,r.I)({message:"home.introduction.title"})}),a.createElement(o.eb,{colorful:!0,className:h,text:(0,r.I)({message:"home.introduction.description"})}),a.createElement("img",{src:(0,l.Z)("/img/rocket.svg"),alt:"Rocket Image | "+c,className:_}),a.createElement("img",{src:(0,l.Z)("/img/jupiter.svg"),alt:"Jupiter Image | "+c,className:y}),a.createElement("img",{src:(0,l.Z)("/img/circle_grey.svg"),alt:"Grey Circle Image | "+c,className:w})),a.createElement("div",{className:p},a.createElement("img",{src:(0,l.Z)("/img/moon_half.svg"),alt:"Moon Half Image | "+c,className:N})))},b="container_1XWT",Z="introduce__QBF",I="headerText_3hBG",k="description_16bG",C="imgSection_2DAb",T="moonHalf_3uvZ",S="rocket_3MQn",M="jupiter_xCCo",D="circle_grey_1HO_",U=function(e){var t=e.style,n=e.className,c=(0,s.Z)().siteConfig.title;return a.createElement("div",{className:(0,i.Z)(n,b),style:t},a.createElement(v,null),a.createElement("div",{className:C},a.createElement("img",{src:(0,l.Z)("/img/moon_half.svg"),alt:"Moon Half Image | "+c,className:T})),a.createElement("div",{className:(0,i.Z)("container",Z)},a.createElement(o.h4,{text:(0,r.I)({message:"home.introduction.title"}),className:I}),a.createElement(o.bU,{colorful:!0,className:k,text:(0,r.I)({message:"home.introduction.description"})})),a.createElement("img",{src:(0,l.Z)("/img/rocket.svg"),alt:"Rocket Image | "+c,className:S}),a.createElement("img",{src:(0,l.Z)("/img/jupiter.svg"),alt:"Jupiter Image | "+c,className:M}),a.createElement("img",{src:(0,l.Z)("/img/circle_grey.svg"),alt:"Grey Circle Image | "+c,className:D}))},W=n(9119),H="container_W0Av",X="imgSection_3Aku",Y="image_3zk7",z="caption_g7yB",L="textSection_IUzE",F=function(e){var t=e.style,n=e.className,c=(0,s.Z)().siteConfig.title;return a.createElement("div",{className:n,style:t},a.createElement("div",{className:(0,i.Z)("container",H)},a.createElement("div",{className:X},a.createElement("img",{src:(0,l.Z)("/img/tonghualabs_feature.svg"),alt:"Feature Image | "+c,className:Y})),a.createElement("div",{className:L},a.createElement("div",null,a.createElement(o.YP,{text:(0,r.I)({message:"feature.title"})}),a.createElement(o.dk,{text:(0,r.I)({message:"feature.description"}),style:{marginTop:"16px"}})),a.createElement(W.iW,{textContent:a.createElement(o.dk,{className:z,text:'"'+(0,r.I)({message:"feature.caption"})+'"'}),style:{marginTop:"60px"}}))))},G="container_1YyB",j="header_SO4k",O="description_PyCp",P="caption_3N-q",R=function(e){var t=e.style,n=e.className,c=(0,s.Z)().siteConfig.title;return a.createElement("div",{className:(0,i.Z)("container",G,n),style:t},a.createElement("img",{src:(0,l.Z)("/img/tonghualabs_feature.svg"),alt:"Feature Image | "+c}),a.createElement(o.YP,{text:(0,r.I)({message:"feature.title"}),className:j,centered:!0}),a.createElement(o.dk,{text:(0,r.I)({message:"feature.description"}),className:O}),a.createElement(W.iW,{style:{marginTop:"48px"},textContent:a.createElement(o.dk,{className:P,text:'"'+(0,r.I)({message:"feature.caption"})+'"'})}))},A="container_YDlO",B="textSection_2o84",Q="cardSection_2WKb",q="swipeCard_1US-",J=function(e){var t=e.labs,n=e.content;return a.createElement("div",{className:A},a.createElement("div",{className:B},a.createElement(o.YP,{centered:!0,text:(0,r.I)({message:"our.labs.title"})})),n,a.createElement("div",{className:Q},a.createElement(W.$5,{labs:t,className:q})))},K="description_26xw",$="blockCard_1frz",V="labWord_1s6s",ee="labNoun_34rY",te=function(e){var t=e.labs;return a.createElement(J,{labs:t,content:a.createElement(a.Fragment,null,a.createElement(W.ug,{className:$,content:a.createElement("div",null,a.createElement(o.aG,{text:(0,r.I)({message:"lab.word"}),className:V}),a.createElement(o.aG,{text:(0,r.I)({message:"lab.noun"}),className:ee}),a.createElement(o.aG,{text:(0,r.I)({message:"lab.word.meaning"})}))}),a.createElement(o.aG,{text:(0,r.I)({message:"our.labs.description"}),className:(0,i.Z)("container",K)}))})},ne="description_3gSB",ae="blockCard_4rir",re="labWord__rpk",ce="labNoun_1WPF",le=function(e){var t=e.labs;return a.createElement(J,{labs:t,content:a.createElement(a.Fragment,null,a.createElement(W.ug,{className:ae,content:a.createElement("div",null,a.createElement(o.he,{text:(0,r.I)({message:"lab.word"}),className:re}),a.createElement(o.he,{text:(0,r.I)({message:"lab.noun"}),className:ce}),a.createElement(o.he,{text:(0,r.I)({message:"lab.word.meaning"})}))}),a.createElement(o.dk,{text:(0,r.I)({message:"our.labs.description"}),className:(0,i.Z)("container",ne)}))})},se=n(7731),ie="landing_1ayZ",oe="feature_3rM8",me=function(){var e=(0,s.Z)().siteConfig.title,t=[{title:(0,r.I)({message:"labs.first.title"}),description:(0,r.I)({message:"labs.first.description"}),to:"media-lab",image:(0,l.Z)("/img/labs/media.svg"),alt:(0,r.I)({message:"labs.first.title"})+" Image | "+e},{title:(0,r.I)({message:"labs.second.title"}),description:(0,r.I)({message:"labs.second.description"}),to:"web3-lab",image:(0,l.Z)("/img/labs/web3.svg"),alt:(0,r.I)({message:"labs.second.title"})+" Image | "+e}];return a.createElement(a.Fragment,null,a.createElement(se.Z,{smallContent:a.createElement(a.Fragment,null,a.createElement(U,{className:ie}),a.createElement(R,{className:oe}),a.createElement(le,{labs:t})),largeContent:a.createElement(a.Fragment,null,a.createElement(x,{className:ie}),a.createElement(F,{className:oe}),a.createElement(te,{labs:t}))}))};function ue(){return a.createElement(c.Z,{description:(0,r.I)({message:"home.opengraph.description"})},a.createElement(me,null))}},6037:function(e,t,n){!function(e,t){function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var a="Left",r="Right",c="Up",l="Down",s={delta:10,preventDefaultTouchmoveEvent:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0},i={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},o="mousemove",m="mouseup",u="touchend",d="touchmove",v="touchstart";function g(e,t,n,s){return e>t?n>0?r:a:s>0?l:c}function f(e,t){if(0===t)return e;var n=Math.PI/180*t;return[e[0]*Math.cos(n)+e[1]*Math.sin(n),e[1]*Math.cos(n)-e[0]*Math.sin(n)]}function E(e,t){var a=function(t){t&&"touches"in t&&t.touches.length>1||e((function(e,a){a.trackMouse&&(document.addEventListener(o,r),document.addEventListener(m,s));var c="touches"in t?t.touches[0]:t,l=f([c.clientX,c.clientY],a.rotationAngle);return n({},e,i,{initial:[].concat(l),xy:l,start:t.timeStamp||0})}))},r=function(t){e((function(e,a){if("touches"in t&&t.touches.length>1)return e;var r="touches"in t?t.touches[0]:t,c=f([r.clientX,r.clientY],a.rotationAngle),l=c[0],s=c[1],i=l-e.xy[0],o=s-e.xy[1],m=Math.abs(i),u=Math.abs(o),d=(t.timeStamp||0)-e.start,v=Math.sqrt(m*m+u*u)/(d||1),E=[i/(d||1),o/(d||1)];if(m<a.delta&&u<a.delta&&!e.swiping)return e;var h=g(m,u,i,o),p={absX:m,absY:u,deltaX:i,deltaY:o,dir:h,event:t,first:e.first,initial:e.initial,velocity:v,vxvy:E};p.first&&a.onSwipeStart&&a.onSwipeStart(p),a.onSwiping&&a.onSwiping(p);var N=!1;return(a.onSwiping||a.onSwiped||"onSwiped"+h in a)&&(N=!0),N&&a.preventDefaultTouchmoveEvent&&a.trackTouch&&t.cancelable&&t.preventDefault(),n({},e,{first:!1,eventData:p,swiping:!0})}))},c=function(t){e((function(e,a){var r;if(e.swiping&&e.eventData){r=n({},e.eventData,{event:t}),a.onSwiped&&a.onSwiped(r);var c="onSwiped"+r.dir;c in a&&a[c](r)}else a.onTap&&a.onTap({event:t});return n({},e,i,{eventData:r})}))},l=function(){document.removeEventListener(o,r),document.removeEventListener(m,s)},s=function(e){l(),c(e)},E=function(e,t){var n=function(){};if(e&&e.addEventListener){var l=[[v,a],[d,r],[u,c]];l.forEach((function(n){var a=n[0],r=n[1];return e.addEventListener(a,r,{passive:t})})),n=function(){return l.forEach((function(t){var n=t[0],a=t[1];return e.removeEventListener(n,a)}))}}return n},h={ref:function(t){null!==t&&e((function(e,a){if(e.el===t)return e;var r={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),r.cleanUpTouch=void 0),a.trackTouch&&t&&(r.cleanUpTouch=E(t,!a.preventDefaultTouchmoveEvent)),n({},e,{el:t},r)}))}};return t.trackMouse&&(h.onMouseDown=a),[h,E]}function h(e,t,a){var r={};return!t.trackTouch&&e.cleanUpTouch?(e.cleanUpTouch(),r.cleanUpTouch=void 0):t.trackTouch&&!e.cleanUpTouch&&e.el&&(r.cleanUpTouch=a(e.el,!t.preventDefaultTouchmoveEvent)),n({},e,r)}function p(e){var a=e.trackMouse,r=t.useRef(n({},i)),c=t.useRef(n({},s));c.current=n({},s,e);var l=t.useMemo((function(){return E((function(e){return r.current=e(r.current,c.current)}),{trackMouse:a})}),[a]),o=l[0],m=l[1];return r.current=h(r.current,c.current,m),o}e.DOWN=l,e.LEFT=a,e.RIGHT=r,e.UP=c,e.useSwipeable=p}(t,n(7294))}}]);