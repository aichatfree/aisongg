(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2253],{92285:function(e,t,n){Promise.resolve().then(n.bind(n,21922)),Promise.resolve().then(n.bind(n,60526)),Promise.resolve().then(n.t.bind(n,94181,23))},49694:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}n.d(t,{g:function(){return r}})},21922:function(e,t,n){"use strict";n.d(t,{default:function(){return l}});var r=n(49694),o=n(2402),i=n(52750),u=n(70265),c=n(88070),l=(0,u.forwardRef)(function(e,t){let{defaultLocale:n,href:l,locale:a,localeCookie:f,onClick:s,prefetch:h,unprefixed:d,...p}=e,m=(0,c.Z)(),v=null!=a&&a!==m,g=a||m,y=function(){let[e,t]=(0,u.useState)();return(0,u.useEffect)(()=>{t(window.location.host)},[]),e}(),b=y&&d&&(d.domains[y]===g||!Object.keys(d.domains).includes(y)&&m===n&&!a)?d.pathname:l,w=(0,i.usePathname)();return v&&(h&&console.error("The `prefetch` prop is currently not supported when using the `locale` prop on `Link` to switch the locale.`"),h=!1),u.createElement(o.default,(0,r.g)({ref:t,href:b,hrefLang:v?a:void 0,onClick:function(e){(function(e,t,n,r){if(!e||!(r!==n&&null!=r)||!t)return;let o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.pathname;return"/"===e?t:t.replace(e,"")}(t),{name:i,...u}=e;u.path||(u.path=""!==o?o:"/");let c="".concat(i,"=").concat(r,";");for(let[e,t]of Object.entries(u))c+="".concat("maxAge"===e?"max-age":e),"boolean"!=typeof t&&(c+="="+t),c+=";";document.cookie=c})(f,w,m,a),s&&s(e)},prefetch:h},p))})},60526:function(e,t,n){"use strict";n.d(t,{default:function(){return s}});var r=n(49694),o=n(52750),i=n(70265),u=n(88070);function c(e){return("object"==typeof e?null==e.host&&null==e.hostname:!/^[a-z]+:/i.test(e))&&!function(e){let t="object"==typeof e?e.pathname:e;return null!=t&&!t.startsWith("/")}(e)}function l(e,t){let n;return"string"==typeof e?n=a(t,e):(n={...e},e.pathname&&(n.pathname=a(t,e.pathname))),n}function a(e,t){let n=e;return/^\/(\?.*)?$/.test(t)&&(t=t.slice(1)),n+=t}n(28070);var f=n(21922);let s=(0,i.forwardRef)(function(e,t){let{href:n,locale:a,localeCookie:s,localePrefixMode:h,prefix:d,...p}=e,m=(0,o.usePathname)(),v=(0,u.Z)(),g=a!==v,[y,b]=(0,i.useState)(()=>c(n)&&("never"!==h||g)?l(n,d):n);return(0,i.useEffect)(()=>{m&&b(function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;if(!c(e))return e;let i=r===o||r.startsWith("".concat(o,"/"));return(t!==n||i)&&null!=o?l(e,o):e}(n,a,v,m,d))},[v,n,a,m,d]),i.createElement(f.default,(0,r.g)({ref:t,href:y,locale:a,localeCookie:s},p))});s.displayName="ClientLink"},88070:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(52750),o=n(23276);let i="locale";function u(){let e;let t=(0,r.useParams)();try{e=(0,o.useLocale)()}catch(n){if("string"!=typeof(null==t?void 0:t[i]))throw n;e=t[i]}return e}},2402:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o.a}});var r=n(19706),o=n.n(r),i={};for(var u in r)"default"!==u&&(i[u]=(function(e){return r[e]}).bind(0,u));n.d(t,i)},52750:function(e,t,n){"use strict";n.r(t);var r=n(87660),o={};for(var i in r)"default"!==i&&(o[i]=(function(e){return r[e]}).bind(0,i));n.d(t,o)},44998:function(e,t,n){"use strict";let r=n(70265).createContext(void 0);t.IntlContext=r},25824:function(e,t,n){"use strict";var r=n(70265),o=n(44998);function i(){let e=r.useContext(o.IntlContext);if(!e)throw Error(void 0);return e}t.useIntlContext=i,t.useLocale=function(){return i().locale}},23276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(25824);n(70265),n(44998),t.useLocale=r.useLocale},28070:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(e){n=u}}();var l=[],a=!1,f=-1;function s(){a&&r&&(a=!1,r.length?l=r.concat(l):f=-1,l.length&&h())}function h(){if(!a){var e=c(s);a=!0;for(var t=l.length;t;){for(r=l,l=[];++f<t;)r&&r[f].run();f=-1,t=l.length}r=null,a=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function p(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new d(e,t)),1!==l.length||a||c(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},function(e){e.O(0,[9706,4181,2484,9642,1744],function(){return e(e.s=92285)}),_N_E=e.O()}]);