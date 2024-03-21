(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[15],{302:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n),i=a(28),o=a(260),s=Object(o.a)((e,t)=>{let{fluid:a,size:n,sizes:r}=t;return{root:{paddingLeft:e.spacing.md,paddingRight:e.spacing.md,maxWidth:a?"100%":e.fn.size({size:n,sizes:r}),marginLeft:"auto",marginRight:"auto"}}}),c=a(23),l=Object.defineProperty,d=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const b={sizes:{xs:540,sm:720,md:960,lg:1140,xl:1320}},m=Object(n.forwardRef)((e,t)=>{const a=Object(i.b)("Container",b,e),{className:n,fluid:o,size:l,unstyled:m,sizes:h}=a,y=((e,t)=>{var a={};for(var n in e)f.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["className","fluid","size","unstyled","sizes"]),{classes:v,cx:O}=s({fluid:o,size:l,sizes:h},{unstyled:m,name:"Container"});return r.a.createElement(c.a,((e,t)=>{for(var a in t||(t={}))f.call(t,a)&&u(e,a,t[a]);if(d)for(var a of d(t))p.call(t,a)&&u(e,a,t[a]);return e})({className:O(v.root,n),ref:t},y))});m.displayName="@mantine/core/Container"},327:function(e,t,a){"use strict";function n(e){return Array.isArray(e)?e:[e]}a.d(t,"a",(function(){return n}))},330:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(e,t,a){Object(n.useEffect)(()=>(window.addEventListener(e,t,a),()=>window.removeEventListener(e,t,a)),[e,t])}},356:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(267);function r(e){return Object(n.a)({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M2.75 12.5c-0.965 0-1.75 0.785-1.75 1.75s0.785 1.75 1.75 1.75 1.75-0.785 1.75-1.75-0.785-1.75-1.75-1.75zM2.75 15c-0.413 0-0.75-0.337-0.75-0.75s0.337-0.75 0.75-0.75 0.75 0.337 0.75 0.75-0.337 0.75-0.75 0.75zM11.25 12.5c-0.965 0-1.75 0.785-1.75 1.75s0.785 1.75 1.75 1.75 1.75-0.785 1.75-1.75-0.785-1.75-1.75-1.75zM11.25 15c-0.413 0-0.75-0.337-0.75-0.75s0.337-0.75 0.75-0.75 0.75 0.337 0.75 0.75-0.337 0.75-0.75 0.75zM13.37 2l-0.301 2h-13.143l1.117 8.036h11.914l1.043-7.5 0.231-1.536h2.769v-1h-3.63zM12.086 11.036h-10.172l-0.84-6.036h11.852l-0.84 6.036zM11 10h-8v-3.969h1v2.969h6v-2.97h1v3.97zM4 2.969h-1v-1.969h8v1.906h-1v-0.906h-6v0.969z"}}]})(e)}},423:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),r=a(330);function i(){return"undefined"!==typeof window?{x:window.pageXOffset,y:window.pageYOffset}:{x:0,y:0}}function o(e){let{x:t,y:a}=e;if("undefined"!==typeof window){const e={behavior:"smooth"};"number"===typeof t&&(e.left=t),"number"===typeof a&&(e.top=a),window.scrollTo(e)}}function s(){const[e,t]=Object(n.useState)({x:0,y:0});return Object(r.a)("scroll",()=>t(i())),Object(r.a)("resize",()=>t(i())),Object(n.useEffect)(()=>{t(i())},[]),[e,o]}},436:function(e,t,a){"use strict";a.d(t,"a",(function(){return W}));var n=a(0),r=a.n(n),i=a(28),o=a(256),s=a(419),c=a(307),l=a(293),d=a(260),f=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&y(e,a,t[a]);if(b)for(var a of b(t))h.call(t,a)&&y(e,a,t[a]);return e},O=(e,t)=>p(e,u(t)),x=Object(d.a)((e,t)=>{let{height:a,width:n,fixed:r,position:i,hiddenBreakpoint:o,zIndex:s,section:c,withBorder:d,layout:f}=t;const p="object"===typeof n&&null!==n?Object(l.a)(n,e).reduce((e,t)=>{let[a,n]=t;return e["@media (min-width: ".concat(a,"px)")]={width:n,minWidth:n},e},{}):null,u=d?{["navbar"===c?"borderRight":"borderLeft"]:"1px solid ".concat("dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[2])}:{};return{root:O(v(v(O(v(v({},e.fn.fontStyles()),i),{top:"alt"===f?0:(null==i?void 0:i.top)||"var(--mantine-header-height)",bottom:0,zIndex:s,height:a||("alt"===f?"auto":"calc(100vh - var(--mantine-header-height, 0px) - var(--mantine-footer-height, 0px))"),width:(null==n?void 0:n.base)||"100%",position:r?"fixed":"static",boxSizing:"border-box",display:"flex",flexDirection:"column",backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white}),u),p),{"&[data-hidden]":{["@media (max-width: ".concat(e.fn.size({size:o,sizes:e.breakpoints})-1,"px)")]:{display:"none"}}})}}),w=a(23),g=Object.defineProperty,z=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,N=(e,t,a)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,S=(e,t)=>{for(var a in t||(t={}))j.call(t,a)&&N(e,a,t[a]);if(z)for(var a of z(t))k.call(t,a)&&N(e,a,t[a]);return e};const P=Object(n.forwardRef)((e,t)=>{var a=e,{width:n,height:i,fixed:d=!1,position:f,zIndex:p,hiddenBreakpoint:u="md",hidden:b=!1,withBorder:m=!0,className:h,classNames:y,styles:v,children:O,section:g,__staticSelector:N,unstyled:P}=a,E=((e,t)=>{var a={};for(var n in e)j.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&z)for(var n of z(e))t.indexOf(n)<0&&k.call(e,n)&&(a[n]=e[n]);return a})(a,["width","height","fixed","position","zIndex","hiddenBreakpoint","hidden","withBorder","className","classNames","styles","children","section","__staticSelector","unstyled"]);const B=Object(c.b)(),{classes:I,cx:M,theme:R}=x({width:n,height:i,fixed:B.fixed||d,position:f,hiddenBreakpoint:u,zIndex:p||B.zIndex||Object(o.a)("app"),section:g,withBorder:m,layout:B.layout},{classNames:y,styles:v,name:N,unstyled:P}),T=Object(l.a)(n,R).reduce((e,t)=>{let[a,n]=t;return e["@media (min-width: ".concat(a,"px)")]={["--mantine-".concat(g,"-width")]:"".concat(n,"px")},e},{});return r.a.createElement(w.a,S({component:"navbar"===g?"nav":"aside",ref:t,"data-hidden":b||void 0,className:M(I.root,h)},E),O,r.a.createElement(s.a,{styles:()=>({":root":S({["--mantine-".concat(g,"-width")]:(null==n?void 0:n.base)?"".concat(n.base,"px"):"0px"},T)})}))});P.displayName="@mantine/core/HorizontalSection";var E=a(327),B=a(257),I=Object.defineProperty,M=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,L=(e,t,a)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const _=Object(n.forwardRef)((e,t)=>{var a=e,{children:n,grow:i=!1,sx:o}=a,s=((e,t)=>{var a={};for(var n in e)R.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&M)for(var n of M(e))t.indexOf(n)<0&&T.call(e,n)&&(a[n]=e[n]);return a})(a,["children","grow","sx"]);return r.a.createElement(w.a,((e,t)=>{for(var a in t||(t={}))R.call(t,a)&&L(e,a,t[a]);if(M)for(var a of M(t))T.call(t,a)&&L(e,a,t[a]);return e})({ref:t,sx:[{flex:i?1:0,boxSizing:"border-box"},...Object(E.a)(o)]},s),n)});_.displayName="@mantine/core/Section";const A=Object(B.a)(_);var C=Object.defineProperty,q=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,H=(e,t,a)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const J={fixed:!1,position:{top:0,left:0},hiddenBreakpoint:"md",hidden:!1},W=Object(n.forwardRef)((e,t)=>{const a=Object(i.b)("Navbar",J,e);return r.a.createElement(P,((e,t)=>{for(var a in t||(t={}))Q.call(t,a)&&H(e,a,t[a]);if(q)for(var a of q(t))D.call(t,a)&&H(e,a,t[a]);return e})({section:"navbar",__staticSelector:"Navbar",ref:t},a))});W.Section=A,W.displayName="@mantine/core/Navbar"},443:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n),i=a(28),o=a(260),s=Object(o.a)((e,t)=>{let{smallerThan:a,largerThan:n,query:r,styles:i}=t;const o={},s=e.fn.size({size:n,sizes:e.breakpoints}),c=e.fn.size({size:a,sizes:e.breakpoints}),l="function"===typeof i?i(e):i;return void 0!==n&&void 0!==a?o["@media (min-width: ".concat(s,"px) and (max-width: ").concat(c-1,"px)")]=l:(void 0!==n&&(o["@media (min-width: ".concat(e.fn.size({size:n,sizes:e.breakpoints}),"px)")]=l),void 0!==a&&(o["@media (max-width: ".concat(e.fn.size({size:a,sizes:e.breakpoints})-1,"px)")]=l)),r&&(o["@media ".concat(r)]=l),{media:o}});function c(e){var t;const{children:a,smallerThan:o,largerThan:c,query:l,styles:d,className:f}=Object(i.b)("MediaQuery",{},e),{classes:p,cx:u}=s({smallerThan:o,largerThan:c,query:l,styles:d},{name:"MediaQuery"}),b=n.Children.only(a);return"object"===typeof b&&null!==b&&"props"in b?r.a.cloneElement(b,{className:u(p.media,null==(t=b.props)?void 0:t.className,f)}):b}c.displayName="@mantine/core/MediaQuery"},444:function(e,t,a){"use strict";a.d(t,"a",(function(){return z}));var n=a(0),r=a.n(n),i=a(28),o=a(307),s=a(260),c=Object.defineProperty,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&p(e,a,t[a]);if(l)for(var a of l(t))f.call(t,a)&&p(e,a,t[a]);return e};function b(e,t){const a=t.fn.size({size:e.padding,sizes:t.spacing}),n=e.navbarOffsetBreakpoint?t.fn.size({size:e.navbarOffsetBreakpoint,sizes:t.breakpoints}):null,r=e.asideOffsetBreakpoint?t.fn.size({size:e.asideOffsetBreakpoint,sizes:t.breakpoints}):null;return e.fixed?{minHeight:"100vh",paddingTop:"calc(var(--mantine-header-height, 0px) + ".concat(a,"px)"),paddingBottom:"calc(var(--mantine-footer-height, 0px) + ".concat(a,"px)"),paddingLeft:"calc(var(--mantine-navbar-width, 0px) + ".concat(a,"px)"),paddingRight:"calc(var(--mantine-aside-width, 0px) + ".concat(a,"px)"),["@media (max-width: ".concat(n-1,"px)")]:{paddingLeft:a},["@media (max-width: ".concat(r-1,"px)")]:{paddingRight:a}}:{padding:a}}var m=Object(s.a)((e,t)=>({root:{boxSizing:"border-box"},body:{display:"flex",boxSizing:"border-box"},main:u({flex:1,width:"100vw",boxSizing:"border-box"},b(t,e))})),h=a(23),y=Object.defineProperty,v=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,w=(e,t,a)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const g={fixed:!0,padding:"md"},z=Object(n.forwardRef)((e,t)=>{const a=Object(i.b)("AppShell",g,e),{children:n,navbar:s,header:c,footer:l,aside:d,fixed:f,zIndex:p,padding:u,navbarOffsetBreakpoint:b,asideOffsetBreakpoint:y,className:z,styles:j,classNames:k,unstyled:N,hidden:S,layout:P}=a,E=((e,t)=>{var a={};for(var n in e)O.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&v)for(var n of v(e))t.indexOf(n)<0&&x.call(e,n)&&(a[n]=e[n]);return a})(a,["children","navbar","header","footer","aside","fixed","zIndex","padding","navbarOffsetBreakpoint","asideOffsetBreakpoint","className","styles","classNames","unstyled","hidden","layout"]),{classes:B,cx:I}=m({padding:u,fixed:f,navbarOffsetBreakpoint:b,asideOffsetBreakpoint:y},{styles:j,classNames:k,unstyled:N,name:"AppShell"});return S?r.a.createElement(r.a.Fragment,null,n):r.a.createElement(o.a,{value:{fixed:f,zIndex:p,layout:P}},r.a.createElement(h.a,((e,t)=>{for(var a in t||(t={}))O.call(t,a)&&w(e,a,t[a]);if(v)for(var a of v(t))x.call(t,a)&&w(e,a,t[a]);return e})({className:I(B.root,z),ref:t},E),c,r.a.createElement("div",{className:B.body},s,r.a.createElement("main",{className:B.main},n),d),l))});z.displayName="@mantine/core/AppShell"}}]);
//# sourceMappingURL=15.f3245f42.chunk.js.map