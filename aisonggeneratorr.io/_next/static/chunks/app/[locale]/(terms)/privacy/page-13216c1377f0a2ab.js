(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6213,1439,7814,9635],{54392:function(t,e,n){Promise.resolve().then(n.bind(n,21922)),Promise.resolve().then(n.bind(n,60526))},49694:function(t,e,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}n.d(e,{g:function(){return r}})},21922:function(t,e,n){"use strict";n.d(e,{default:function(){return l}});var r=n(49694),o=n(2402),i=n(52750),u=n(70265),c=n(88070),l=(0,u.forwardRef)(function(t,e){let{defaultLocale:n,href:l,locale:a,localeCookie:f,onClick:s,prefetch:h,unprefixed:d,...p}=t,m=(0,c.Z)(),v=null!=a&&a!==m,g=a||m,y=function(){let[t,e]=(0,u.useState)();return(0,u.useEffect)(()=>{e(window.location.host)},[]),t}(),b=y&&d&&(d.domains[y]===g||!Object.keys(d.domains).includes(y)&&m===n&&!a)?d.pathname:l,w=(0,i.usePathname)();return v&&(h&&console.error("The `prefetch` prop is currently not supported when using the `locale` prop on `Link` to switch the locale.`"),h=!1),u.createElement(o.default,(0,r.g)({ref:e,href:b,hrefLang:v?a:void 0,onClick:function(t){(function(t,e,n,r){if(!t||!(r!==n&&null!=r)||!e)return;let o=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.pathname;return"/"===t?e:e.replace(t,"")}(e),{name:i,...u}=t;u.path||(u.path=""!==o?o:"/");let c="".concat(i,"=").concat(r,";");for(let[t,e]of Object.entries(u))c+="".concat("maxAge"===t?"max-age":t),"boolean"!=typeof e&&(c+="="+e),c+=";";document.cookie=c})(f,w,m,a),s&&s(t)},prefetch:h},p))})},60526:function(t,e,n){"use strict";n.d(e,{default:function(){return s}});var r=n(49694),o=n(52750),i=n(70265),u=n(88070);function c(t){return("object"==typeof t?null==t.host&&null==t.hostname:!/^[a-z]+:/i.test(t))&&!function(t){let e="object"==typeof t?t.pathname:t;return null!=e&&!e.startsWith("/")}(t)}function l(t,e){let n;return"string"==typeof t?n=a(e,t):(n={...t},t.pathname&&(n.pathname=a(e,t.pathname))),n}function a(t,e){let n=t;return/^\/(\?.*)?$/.test(e)&&(e=e.slice(1)),n+=e}n(28070);var f=n(21922);let s=(0,i.forwardRef)(function(t,e){let{href:n,locale:a,localeCookie:s,localePrefixMode:h,prefix:d,...p}=t,m=(0,o.usePathname)(),v=(0,u.Z)(),g=a!==v,[y,b]=(0,i.useState)(()=>c(n)&&("never"!==h||g)?l(n,d):n);return(0,i.useEffect)(()=>{m&&b(function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;if(!c(t))return t;let i=r===o||r.startsWith("".concat(o,"/"));return(e!==n||i)&&null!=o?l(t,o):t}(n,a,v,m,d))},[v,n,a,m,d]),i.createElement(f.default,(0,r.g)({ref:e,href:y,locale:a,localeCookie:s},p))});s.displayName="ClientLink"},88070:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(52750),o=n(23276);let i="locale";function u(){let t;let e=(0,r.useParams)();try{t=(0,o.useLocale)()}catch(n){if("string"!=typeof(null==e?void 0:e[i]))throw n;t=e[i]}return t}},2402:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return o.a}});var r=n(19706),o=n.n(r),i={};for(var u in r)"default"!==u&&(i[u]=(function(t){return r[t]}).bind(0,u));n.d(e,i)},52750:function(t,e,n){"use strict";n.r(e);var r=n(87660),o={};for(var i in r)"default"!==i&&(o[i]=(function(t){return r[t]}).bind(0,i));n.d(e,o)},44998:function(t,e,n){"use strict";let r=n(70265).createContext(void 0);e.IntlContext=r},25824:function(t,e,n){"use strict";var r=n(70265),o=n(44998);function i(){let t=r.useContext(o.IntlContext);if(!t)throw Error(void 0);return t}e.useIntlContext=i,e.useLocale=function(){return i().locale}},23276:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(25824);n(70265),n(44998),e.useLocale=r.useLocale},28070:function(t){var e,n,r,o=t.exports={};function i(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function c(t){if(e===setTimeout)return setTimeout(t,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:i}catch(t){e=i}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(t){n=u}}();var l=[],a=!1,f=-1;function s(){a&&r&&(a=!1,r.length?l=r.concat(l):f=-1,l.length&&h())}function h(){if(!a){var t=c(s);a=!0;for(var e=l.length;e;){for(r=l,l=[];++f<e;)r&&r[f].run();f=-1,e=l.length}r=null,a=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function p(){}o.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new d(t,e)),1!==l.length||a||c(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(t){return[]},o.binding=function(t){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},function(t){t.O(0,[9706,2484,9642,1744],function(){return t(t.s=54392)}),_N_E=t.O()}]);