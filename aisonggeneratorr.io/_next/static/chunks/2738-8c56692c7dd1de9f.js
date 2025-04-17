"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2738],{22583:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(53403).Z)("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},36905:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(53403).Z)("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]])},86648:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(53403).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},49694:function(e,t,n){n.d(t,{g:function(){return r}});function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}},21922:function(e,t,n){n.d(t,{default:function(){return u}});var r=n(49694),o=n(2402),l=n(52750),i=n(70265),a=n(88070),u=(0,i.forwardRef)(function(e,t){let{defaultLocale:n,href:u,locale:c,localeCookie:s,onClick:d,prefetch:f,unprefixed:p,...h}=e,g=(0,a.Z)(),v=null!=c&&c!==g,m=c||g,y=function(){let[e,t]=(0,i.useState)();return(0,i.useEffect)(()=>{t(window.location.host)},[]),e}(),w=y&&p&&(p.domains[y]===m||!Object.keys(p.domains).includes(y)&&g===n&&!c)?p.pathname:u,k=(0,l.usePathname)();return v&&(f&&console.error("The `prefetch` prop is currently not supported when using the `locale` prop on `Link` to switch the locale.`"),f=!1),i.createElement(o.default,(0,r.g)({ref:t,href:w,hrefLang:v?c:void 0,onClick:function(e){(function(e,t,n,r){if(!e||!(r!==n&&null!=r)||!t)return;let o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.pathname;return"/"===e?t:t.replace(e,"")}(t),{name:l,...i}=e;i.path||(i.path=""!==o?o:"/");let a="".concat(l,"=").concat(r,";");for(let[e,t]of Object.entries(i))a+="".concat("maxAge"===e?"max-age":e),"boolean"!=typeof t&&(a+="="+t),a+=";";document.cookie=a})(s,k,g,c),d&&d(e)},prefetch:f},h))})},60526:function(e,t,n){n.d(t,{default:function(){return d}});var r=n(49694),o=n(52750),l=n(70265),i=n(88070);function a(e){return("object"==typeof e?null==e.host&&null==e.hostname:!/^[a-z]+:/i.test(e))&&!function(e){let t="object"==typeof e?e.pathname:e;return null!=t&&!t.startsWith("/")}(e)}function u(e,t){let n;return"string"==typeof e?n=c(t,e):(n={...e},e.pathname&&(n.pathname=c(t,e.pathname))),n}function c(e,t){let n=e;return/^\/(\?.*)?$/.test(t)&&(t=t.slice(1)),n+=t}n(28070);var s=n(21922);let d=(0,l.forwardRef)(function(e,t){let{href:n,locale:c,localeCookie:d,localePrefixMode:f,prefix:p,...h}=e,g=(0,o.usePathname)(),v=(0,i.Z)(),m=c!==v,[y,w]=(0,l.useState)(()=>a(n)&&("never"!==f||m)?u(n,p):n);return(0,l.useEffect)(()=>{g&&w(function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;if(!a(e))return e;let l=r===o||r.startsWith("".concat(o,"/"));return(t!==n||l)&&null!=o?u(e,o):e}(n,c,v,g,p))},[v,n,c,g,p]),l.createElement(s.default,(0,r.g)({ref:t,href:y,locale:c,localeCookie:d},h))});d.displayName="ClientLink"},88070:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(52750),o=n(23276);let l="locale";function i(){let e;let t=(0,r.useParams)();try{e=(0,o.useLocale)()}catch(n){if("string"!=typeof(null==t?void 0:t[l]))throw n;e=t[l]}return e}},83509:function(e,t,n){n.d(t,{default:function(){return i}});var r=n(49694),o=n(70265),l=n(20313);function i(e){let{locale:t,...n}=e;if(!t)throw Error("Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl.dev/docs/configuration#locale");return o.createElement(l.IntlProvider,(0,r.g)({locale:t},n))}},84988:function(e,t,n){n.d(t,{default:function(){return o.a}});var r=n(29189),o=n.n(r)},29189:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return u},getImageProps:function(){return a}});let r=n(8587),o=n(67912),l=n(26865),i=r._(n(22156));function a(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let u=l.Image},4919:function(e,t,n){n.d(t,{Dx:function(){return en},VY:function(){return et},aV:function(){return ee},dk:function(){return er},fC:function(){return Y},h_:function(){return J},jm:function(){return G},p8:function(){return x},x8:function(){return eo},xz:function(){return $}});var r=n(70265),o=n(48444),l=n(28975),i=n(8265),a=n(45712),u=n(35865),c=n(8105),s=n(97216),d=n(95472),f=n(79142),p=n(78568),h=n(25698),g=n(74860),v=n(39966),m=n(89148),y=n(61462),w="Dialog",[k,x]=(0,i.b)(w),[b,C]=k(w),j=e=>{let{__scopeDialog:t,children:n,open:o,defaultOpen:l,onOpenChange:i,modal:c=!0}=e,s=r.useRef(null),d=r.useRef(null),[f=!1,p]=(0,u.T)({prop:o,defaultProp:l,onChange:i});return(0,y.jsx)(b,{scope:t,triggerRef:s,contentRef:d,contentId:(0,a.M)(),titleId:(0,a.M)(),descriptionId:(0,a.M)(),open:f,onOpenChange:p,onOpenToggle:r.useCallback(()=>p(e=>!e),[p]),modal:c,children:n})};j.displayName=w;var D="DialogTrigger",I=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=C(D,n),a=(0,l.e)(t,i.triggerRef);return(0,y.jsx)(p.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":U(i.open),...r,ref:a,onClick:(0,o.M)(e.onClick,i.onOpenToggle)})});I.displayName=D;var M="DialogPortal",[R,E]=k(M,{forceMount:void 0}),O=e=>{let{__scopeDialog:t,forceMount:n,children:o,container:l}=e,i=C(M,t);return(0,y.jsx)(R,{scope:t,forceMount:n,children:r.Children.map(o,e=>(0,y.jsx)(f.z,{present:n||i.open,children:(0,y.jsx)(d.h,{asChild:!0,container:l,children:e})}))})};O.displayName=M;var _="DialogOverlay",N=r.forwardRef((e,t)=>{let n=E(_,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,l=C(_,e.__scopeDialog);return l.modal?(0,y.jsx)(f.z,{present:r||l.open,children:(0,y.jsx)(P,{...o,ref:t})}):null});N.displayName=_;var P=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=C(_,n);return(0,y.jsx)(g.Z,{as:m.g7,allowPinchZoom:!0,shards:[o.contentRef],children:(0,y.jsx)(p.WV.div,{"data-state":U(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),Z="DialogContent",F=r.forwardRef((e,t)=>{let n=E(Z,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,l=C(Z,e.__scopeDialog);return(0,y.jsx)(f.z,{present:r||l.open,children:l.modal?(0,y.jsx)(z,{...o,ref:t}):(0,y.jsx)(W,{...o,ref:t})})});F.displayName=Z;var z=r.forwardRef((e,t)=>{let n=C(Z,e.__scopeDialog),i=r.useRef(null),a=(0,l.e)(t,n.contentRef,i);return r.useEffect(()=>{let e=i.current;if(e)return(0,v.Ry)(e)},[]),(0,y.jsx)(A,{...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,o.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,o.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,o.M)(e.onFocusOutside,e=>e.preventDefault())})}),W=r.forwardRef((e,t)=>{let n=C(Z,e.__scopeDialog),o=r.useRef(!1),l=r.useRef(!1);return(0,y.jsx)(A,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,i;null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),o.current=!1,l.current=!1},onInteractOutside:t=>{var r,i;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current=!0,"pointerdown"!==t.detail.originalEvent.type||(l.current=!0));let a=t.target;(null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(a))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&l.current&&t.preventDefault()}})}),A=r.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:o,onOpenAutoFocus:i,onCloseAutoFocus:a,...u}=e,d=C(Z,n),f=r.useRef(null),p=(0,l.e)(t,f);return(0,h.EW)(),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s.M,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:i,onUnmountAutoFocus:a,children:(0,y.jsx)(c.XB,{role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":U(d.open),...u,ref:p,onDismiss:()=>d.onOpenChange(!1)})}),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(K,{titleId:d.titleId}),(0,y.jsx)(Q,{contentRef:f,descriptionId:d.descriptionId})]})]})}),L="DialogTitle",V=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=C(L,n);return(0,y.jsx)(p.WV.h2,{id:o.titleId,...r,ref:t})});V.displayName=L;var S="DialogDescription",T=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=C(S,n);return(0,y.jsx)(p.WV.p,{id:o.descriptionId,...r,ref:t})});T.displayName=S;var B="DialogClose",q=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,l=C(B,n);return(0,y.jsx)(p.WV.button,{type:"button",...r,ref:t,onClick:(0,o.M)(e.onClick,()=>l.onOpenChange(!1))})});function U(e){return e?"open":"closed"}q.displayName=B;var X="DialogTitleWarning",[G,H]=(0,i.k)(X,{contentName:Z,titleName:L,docsSlug:"dialog"}),K=e=>{let{titleId:t}=e,n=H(X),o="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return r.useEffect(()=>{t&&!document.getElementById(t)&&console.error(o)},[o,t]),null},Q=e=>{let{contentRef:t,descriptionId:n}=e,o=H("DialogDescriptionWarning"),l="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(o.contentName,"}.");return r.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(l)},[l,t,n]),null},Y=j,$=I,J=O,ee=N,et=F,en=V,er=T,eo=q},76217:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(70265),o={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};let l=(e,t,n,l)=>{let i=(0,r.forwardRef)((n,i)=>{let{color:a="currentColor",size:u=24,stroke:c=2,title:s,className:d,children:f,...p}=n;return(0,r.createElement)("svg",{ref:i,...o[e],width:u,height:u,className:["tabler-icon","tabler-icon-".concat(t),d].join(" "),..."filled"===e?{fill:a}:{strokeWidth:c,stroke:a},...p},[s&&(0,r.createElement)("title",{key:"svg-title"},s),...l.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(f)?f:[f]])});return i.displayName="".concat(n),i}},32521:function(e,t,n){n.d(t,{Z:function(){return r}});var r=(0,n(76217).Z)("outline","chevron-down","IconChevronDown",[["path",{d:"M6 9l6 6l6 -6",key:"svg-0"}]])},56334:function(e,t,n){n.d(t,{Z:function(){return r}});var r=(0,n(76217).Z)("outline","chevron-up","IconChevronUp",[["path",{d:"M6 15l6 -6l6 6",key:"svg-0"}]])},15342:function(e,t,n){n.d(t,{Z:function(){return r}});var r=(0,n(76217).Z)("outline","mail","IconMail",[["path",{d:"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z",key:"svg-0"}],["path",{d:"M3 7l9 6l9 -6",key:"svg-1"}]])},74238:function(e,t,n){n.d(t,{Z:function(){return r}});var r=(0,n(76217).Z)("outline","question-mark","IconQuestionMark",[["path",{d:"M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4",key:"svg-0"}],["path",{d:"M12 19l0 .01",key:"svg-1"}]])}}]);