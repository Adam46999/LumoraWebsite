(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function FE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ew={exports:{}},uu={},tw={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=Symbol.for("react.element"),zE=Symbol.for("react.portal"),UE=Symbol.for("react.fragment"),$E=Symbol.for("react.strict_mode"),BE=Symbol.for("react.profiler"),HE=Symbol.for("react.provider"),WE=Symbol.for("react.context"),qE=Symbol.for("react.forward_ref"),GE=Symbol.for("react.suspense"),KE=Symbol.for("react.memo"),QE=Symbol.for("react.lazy"),Vg=Symbol.iterator;function YE(t){return t===null||typeof t!="object"?null:(t=Vg&&t[Vg]||t["@@iterator"],typeof t=="function"?t:null)}var nw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rw=Object.assign,sw={};function zi(t,e,n){this.props=t,this.context=e,this.refs=sw,this.updater=n||nw}zi.prototype.isReactComponent={};zi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function iw(){}iw.prototype=zi.prototype;function Kf(t,e,n){this.props=t,this.context=e,this.refs=sw,this.updater=n||nw}var Qf=Kf.prototype=new iw;Qf.constructor=Kf;rw(Qf,zi.prototype);Qf.isPureReactComponent=!0;var Fg=Array.isArray,ow=Object.prototype.hasOwnProperty,Yf={current:null},aw={key:!0,ref:!0,__self:!0,__source:!0};function lw(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)ow.call(e,r)&&!aw.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];s.children=c}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:Oa,type:t,key:i,ref:o,props:s,_owner:Yf.current}}function XE(t,e){return{$$typeof:Oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oa}function JE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var zg=/\/+/g;function fd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?JE(""+t.key):e.toString(36)}function Hl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Oa:case zE:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+fd(o,0):r,Fg(s)?(n="",t!=null&&(n=t.replace(zg,"$&/")+"/"),Hl(s,e,n,"",function(u){return u})):s!=null&&(Xf(s)&&(s=XE(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(zg,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Fg(t))for(var a=0;a<t.length;a++){i=t[a];var c=r+fd(i,a);o+=Hl(i,e,n,c,s)}else if(c=YE(t),typeof c=="function")for(t=c.call(t),a=0;!(i=t.next()).done;)i=i.value,c=r+fd(i,a++),o+=Hl(i,e,n,c,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function pl(t,e,n){if(t==null)return t;var r=[],s=0;return Hl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function ZE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ct={current:null},Wl={transition:null},eT={ReactCurrentDispatcher:Ct,ReactCurrentBatchConfig:Wl,ReactCurrentOwner:Yf};function cw(){throw Error("act(...) is not supported in production builds of React.")}ce.Children={map:pl,forEach:function(t,e,n){pl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pl(t,function(){e++}),e},toArray:function(t){return pl(t,function(e){return e})||[]},only:function(t){if(!Xf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ce.Component=zi;ce.Fragment=UE;ce.Profiler=BE;ce.PureComponent=Kf;ce.StrictMode=$E;ce.Suspense=GE;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eT;ce.act=cw;ce.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=rw({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Yf.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)ow.call(e,c)&&!aw.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Oa,type:t.type,key:s,ref:i,props:r,_owner:o}};ce.createContext=function(t){return t={$$typeof:WE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:HE,_context:t},t.Consumer=t};ce.createElement=lw;ce.createFactory=function(t){var e=lw.bind(null,t);return e.type=t,e};ce.createRef=function(){return{current:null}};ce.forwardRef=function(t){return{$$typeof:qE,render:t}};ce.isValidElement=Xf;ce.lazy=function(t){return{$$typeof:QE,_payload:{_status:-1,_result:t},_init:ZE}};ce.memo=function(t,e){return{$$typeof:KE,type:t,compare:e===void 0?null:e}};ce.startTransition=function(t){var e=Wl.transition;Wl.transition={};try{t()}finally{Wl.transition=e}};ce.unstable_act=cw;ce.useCallback=function(t,e){return Ct.current.useCallback(t,e)};ce.useContext=function(t){return Ct.current.useContext(t)};ce.useDebugValue=function(){};ce.useDeferredValue=function(t){return Ct.current.useDeferredValue(t)};ce.useEffect=function(t,e){return Ct.current.useEffect(t,e)};ce.useId=function(){return Ct.current.useId()};ce.useImperativeHandle=function(t,e,n){return Ct.current.useImperativeHandle(t,e,n)};ce.useInsertionEffect=function(t,e){return Ct.current.useInsertionEffect(t,e)};ce.useLayoutEffect=function(t,e){return Ct.current.useLayoutEffect(t,e)};ce.useMemo=function(t,e){return Ct.current.useMemo(t,e)};ce.useReducer=function(t,e,n){return Ct.current.useReducer(t,e,n)};ce.useRef=function(t){return Ct.current.useRef(t)};ce.useState=function(t){return Ct.current.useState(t)};ce.useSyncExternalStore=function(t,e,n){return Ct.current.useSyncExternalStore(t,e,n)};ce.useTransition=function(){return Ct.current.useTransition()};ce.version="18.3.1";tw.exports=ce;var D=tw.exports;const Xe=FE(D);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tT=D,nT=Symbol.for("react.element"),rT=Symbol.for("react.fragment"),sT=Object.prototype.hasOwnProperty,iT=tT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oT={key:!0,ref:!0,__self:!0,__source:!0};function uw(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)sT.call(e,r)&&!oT.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:nT,type:t,key:i,ref:o,props:s,_owner:iT.current}}uu.Fragment=rT;uu.jsx=uw;uu.jsxs=uw;ew.exports=uu;var d=ew.exports,gh={},dw={exports:{}},qt={},hw={exports:{}},fw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(M,F){var B=M.length;M.push(F);e:for(;0<B;){var Y=B-1>>>1,G=M[Y];if(0<s(G,F))M[Y]=F,M[B]=G,B=Y;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var F=M[0],B=M.pop();if(B!==F){M[0]=B;e:for(var Y=0,G=M.length,ue=G>>>1;Y<ue;){var xe=2*(Y+1)-1,Ke=M[xe],ze=xe+1,Qe=M[ze];if(0>s(Ke,B))ze<G&&0>s(Qe,Ke)?(M[Y]=Qe,M[ze]=B,Y=ze):(M[Y]=Ke,M[xe]=B,Y=xe);else if(ze<G&&0>s(Qe,B))M[Y]=Qe,M[ze]=B,Y=ze;else break e}}return F}function s(M,F){var B=M.sortIndex-F.sortIndex;return B!==0?B:M.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var c=[],u=[],h=1,p=null,m=3,_=!1,E=!1,j=!1,k=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(M){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=M)r(u),F.sortIndex=F.expirationTime,e(c,F);else break;F=n(u)}}function R(M){if(j=!1,v(M),!E)if(n(c)!==null)E=!0,O(V);else{var F=n(u);F!==null&&C(R,F.startTime-M)}}function V(M,F){E=!1,j&&(j=!1,b(x),x=-1),_=!0;var B=m;try{for(v(F),p=n(c);p!==null&&(!(p.expirationTime>F)||M&&!P());){var Y=p.callback;if(typeof Y=="function"){p.callback=null,m=p.priorityLevel;var G=Y(p.expirationTime<=F);F=t.unstable_now(),typeof G=="function"?p.callback=G:p===n(c)&&r(c),v(F)}else r(c);p=n(c)}if(p!==null)var ue=!0;else{var xe=n(u);xe!==null&&C(R,xe.startTime-F),ue=!1}return ue}finally{p=null,m=B,_=!1}}var L=!1,S=null,x=-1,T=5,I=-1;function P(){return!(t.unstable_now()-I<T)}function N(){if(S!==null){var M=t.unstable_now();I=M;var F=!0;try{F=S(!0,M)}finally{F?w():(L=!1,S=null)}}else L=!1}var w;if(typeof y=="function")w=function(){y(N)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,q=$.port2;$.port1.onmessage=N,w=function(){q.postMessage(null)}}else w=function(){k(N,0)};function O(M){S=M,L||(L=!0,w())}function C(M,F){x=k(function(){M(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){E||_||(E=!0,O(V))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(M){switch(m){case 1:case 2:case 3:var F=3;break;default:F=m}var B=m;m=F;try{return M()}finally{m=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,F){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var B=m;m=M;try{return F()}finally{m=B}},t.unstable_scheduleCallback=function(M,F,B){var Y=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Y+B:Y):B=Y,M){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=B+G,M={id:h++,callback:F,priorityLevel:M,startTime:B,expirationTime:G,sortIndex:-1},B>Y?(M.sortIndex=B,e(u,M),n(c)===null&&M===n(u)&&(j?(b(x),x=-1):j=!0,C(R,B-Y))):(M.sortIndex=G,e(c,M),E||_||(E=!0,O(V))),M},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(M){var F=m;return function(){var B=m;m=F;try{return M.apply(this,arguments)}finally{m=B}}}})(fw);hw.exports=fw;var aT=hw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lT=D,Wt=aT;function K(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pw=new Set,sa={};function Ms(t,e){Ti(t,e),Ti(t+"Capture",e)}function Ti(t,e){for(sa[t]=e,t=0;t<e.length;t++)pw.add(e[t])}var Wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yh=Object.prototype.hasOwnProperty,cT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ug={},$g={};function uT(t){return yh.call($g,t)?!0:yh.call(Ug,t)?!1:cT.test(t)?$g[t]=!0:(Ug[t]=!0,!1)}function dT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hT(t,e,n,r){if(e===null||typeof e>"u"||dT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function At(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ht[t]=new At(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ht[e]=new At(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ht[t]=new At(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ht[t]=new At(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ht[t]=new At(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ht[t]=new At(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ht[t]=new At(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ht[t]=new At(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ht[t]=new At(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jf=/[\-:]([a-z])/g;function Zf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jf,Zf);ht[e]=new At(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jf,Zf);ht[e]=new At(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jf,Zf);ht[e]=new At(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ht[t]=new At(t,1,!1,t.toLowerCase(),null,!1,!1)});ht.xlinkHref=new At("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ht[t]=new At(t,1,!1,t.toLowerCase(),null,!0,!0)});function ep(t,e,n,r){var s=ht.hasOwnProperty(e)?ht[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hT(e,n,s,r)&&(n=null),r||s===null?uT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Zn=lT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ml=Symbol.for("react.element"),Js=Symbol.for("react.portal"),Zs=Symbol.for("react.fragment"),tp=Symbol.for("react.strict_mode"),vh=Symbol.for("react.profiler"),mw=Symbol.for("react.provider"),gw=Symbol.for("react.context"),np=Symbol.for("react.forward_ref"),wh=Symbol.for("react.suspense"),xh=Symbol.for("react.suspense_list"),rp=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),yw=Symbol.for("react.offscreen"),Bg=Symbol.iterator;function yo(t){return t===null||typeof t!="object"?null:(t=Bg&&t[Bg]||t["@@iterator"],typeof t=="function"?t:null)}var je=Object.assign,pd;function ko(t){if(pd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pd=e&&e[1]||""}return`
`+pd+t}var md=!1;function gd(t,e){if(!t||md)return"";md=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var c=`
`+s[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=a);break}}}finally{md=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ko(t):""}function fT(t){switch(t.tag){case 5:return ko(t.type);case 16:return ko("Lazy");case 13:return ko("Suspense");case 19:return ko("SuspenseList");case 0:case 2:case 15:return t=gd(t.type,!1),t;case 11:return t=gd(t.type.render,!1),t;case 1:return t=gd(t.type,!0),t;default:return""}}function _h(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zs:return"Fragment";case Js:return"Portal";case vh:return"Profiler";case tp:return"StrictMode";case wh:return"Suspense";case xh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gw:return(t.displayName||"Context")+".Consumer";case mw:return(t._context.displayName||"Context")+".Provider";case np:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rp:return e=t.displayName||null,e!==null?e:_h(t.type)||"Memo";case ur:e=t._payload,t=t._init;try{return _h(t(e))}catch{}}return null}function pT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _h(e);case 8:return e===tp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mT(t){var e=vw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function gl(t){t._valueTracker||(t._valueTracker=mT(t))}function ww(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=vw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function pc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bh(t,e){var n=e.checked;return je({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Hg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xw(t,e){e=e.checked,e!=null&&ep(t,"checked",e,!1)}function Eh(t,e){xw(t,e);var n=Ur(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Th(t,e.type,n):e.hasOwnProperty("defaultValue")&&Th(t,e.type,Ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Wg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Th(t,e,n){(e!=="number"||pc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var No=Array.isArray;function di(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ur(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Sh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(K(91));return je({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(K(92));if(No(n)){if(1<n.length)throw Error(K(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ur(n)}}function _w(t,e){var n=Ur(e.value),r=Ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Gg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function bw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ih(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?bw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var yl,Ew=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(yl=yl||document.createElement("div"),yl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=yl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ia(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gT=["Webkit","ms","Moz","O"];Object.keys(zo).forEach(function(t){gT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zo[e]=zo[t]})});function Tw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zo.hasOwnProperty(t)&&zo[t]?(""+e).trim():e+"px"}function Sw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Tw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var yT=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ch(t,e){if(e){if(yT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(K(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(K(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(K(61))}if(e.style!=null&&typeof e.style!="object")throw Error(K(62))}}function Ah(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kh=null;function sp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nh=null,hi=null,fi=null;function Kg(t){if(t=za(t)){if(typeof Nh!="function")throw Error(K(280));var e=t.stateNode;e&&(e=mu(e),Nh(t.stateNode,t.type,e))}}function Iw(t){hi?fi?fi.push(t):fi=[t]:hi=t}function Cw(){if(hi){var t=hi,e=fi;if(fi=hi=null,Kg(t),e)for(t=0;t<e.length;t++)Kg(e[t])}}function Aw(t,e){return t(e)}function kw(){}var yd=!1;function Nw(t,e,n){if(yd)return t(e,n);yd=!0;try{return Aw(t,e,n)}finally{yd=!1,(hi!==null||fi!==null)&&(kw(),Cw())}}function oa(t,e){var n=t.stateNode;if(n===null)return null;var r=mu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(K(231,e,typeof n));return n}var Ph=!1;if(Wn)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){Ph=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{Ph=!1}function vT(t,e,n,r,s,i,o,a,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var Uo=!1,mc=null,gc=!1,Rh=null,wT={onError:function(t){Uo=!0,mc=t}};function xT(t,e,n,r,s,i,o,a,c){Uo=!1,mc=null,vT.apply(wT,arguments)}function _T(t,e,n,r,s,i,o,a,c){if(xT.apply(this,arguments),Uo){if(Uo){var u=mc;Uo=!1,mc=null}else throw Error(K(198));gc||(gc=!0,Rh=u)}}function Ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Pw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Qg(t){if(Ls(t)!==t)throw Error(K(188))}function bT(t){var e=t.alternate;if(!e){if(e=Ls(t),e===null)throw Error(K(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Qg(s),t;if(i===r)return Qg(s),e;i=i.sibling}throw Error(K(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(K(189))}}if(n.alternate!==r)throw Error(K(190))}if(n.tag!==3)throw Error(K(188));return n.stateNode.current===n?t:e}function Rw(t){return t=bT(t),t!==null?jw(t):null}function jw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jw(t);if(e!==null)return e;t=t.sibling}return null}var Mw=Wt.unstable_scheduleCallback,Yg=Wt.unstable_cancelCallback,ET=Wt.unstable_shouldYield,TT=Wt.unstable_requestPaint,Fe=Wt.unstable_now,ST=Wt.unstable_getCurrentPriorityLevel,ip=Wt.unstable_ImmediatePriority,Lw=Wt.unstable_UserBlockingPriority,yc=Wt.unstable_NormalPriority,IT=Wt.unstable_LowPriority,Dw=Wt.unstable_IdlePriority,du=null,Cn=null;function CT(t){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(du,t,void 0,(t.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:NT,AT=Math.log,kT=Math.LN2;function NT(t){return t>>>=0,t===0?32:31-(AT(t)/kT|0)|0}var vl=64,wl=4194304;function Po(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=Po(a):(i&=o,i!==0&&(r=Po(i)))}else o=n&~s,o!==0?r=Po(o):i!==0&&(r=Po(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dn(e),s=1<<n,r|=t[n],e&=~s;return r}function PT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function RT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-dn(i),a=1<<o,c=s[o];c===-1?(!(a&n)||a&r)&&(s[o]=PT(a,e)):c<=e&&(t.expiredLanes|=a),i&=~a}}function jh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ow(){var t=vl;return vl<<=1,!(vl&4194240)&&(vl=64),t}function vd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dn(e),t[e]=n}function jT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-dn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function op(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var we=0;function Vw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Fw,ap,zw,Uw,$w,Mh=!1,xl=[],Sr=null,Ir=null,Cr=null,aa=new Map,la=new Map,hr=[],MT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xg(t,e){switch(t){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Ir=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":aa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":la.delete(e.pointerId)}}function wo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=za(e),e!==null&&ap(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function LT(t,e,n,r,s){switch(e){case"focusin":return Sr=wo(Sr,t,e,n,r,s),!0;case"dragenter":return Ir=wo(Ir,t,e,n,r,s),!0;case"mouseover":return Cr=wo(Cr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return aa.set(i,wo(aa.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,la.set(i,wo(la.get(i)||null,t,e,n,r,s)),!0}return!1}function Bw(t){var e=fs(t.target);if(e!==null){var n=Ls(e);if(n!==null){if(e=n.tag,e===13){if(e=Pw(n),e!==null){t.blockedOn=e,$w(t.priority,function(){zw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ql(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);kh=r,n.target.dispatchEvent(r),kh=null}else return e=za(n),e!==null&&ap(e),t.blockedOn=n,!1;e.shift()}return!0}function Jg(t,e,n){ql(t)&&n.delete(e)}function DT(){Mh=!1,Sr!==null&&ql(Sr)&&(Sr=null),Ir!==null&&ql(Ir)&&(Ir=null),Cr!==null&&ql(Cr)&&(Cr=null),aa.forEach(Jg),la.forEach(Jg)}function xo(t,e){t.blockedOn===e&&(t.blockedOn=null,Mh||(Mh=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,DT)))}function ca(t){function e(s){return xo(s,t)}if(0<xl.length){xo(xl[0],t);for(var n=1;n<xl.length;n++){var r=xl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Sr!==null&&xo(Sr,t),Ir!==null&&xo(Ir,t),Cr!==null&&xo(Cr,t),aa.forEach(e),la.forEach(e),n=0;n<hr.length;n++)r=hr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<hr.length&&(n=hr[0],n.blockedOn===null);)Bw(n),n.blockedOn===null&&hr.shift()}var pi=Zn.ReactCurrentBatchConfig,wc=!0;function OT(t,e,n,r){var s=we,i=pi.transition;pi.transition=null;try{we=1,lp(t,e,n,r)}finally{we=s,pi.transition=i}}function VT(t,e,n,r){var s=we,i=pi.transition;pi.transition=null;try{we=4,lp(t,e,n,r)}finally{we=s,pi.transition=i}}function lp(t,e,n,r){if(wc){var s=Lh(t,e,n,r);if(s===null)Ad(t,e,r,xc,n),Xg(t,r);else if(LT(s,t,e,n,r))r.stopPropagation();else if(Xg(t,r),e&4&&-1<MT.indexOf(t)){for(;s!==null;){var i=za(s);if(i!==null&&Fw(i),i=Lh(t,e,n,r),i===null&&Ad(t,e,r,xc,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Ad(t,e,r,null,n)}}var xc=null;function Lh(t,e,n,r){if(xc=null,t=sp(r),t=fs(t),t!==null)if(e=Ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Pw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xc=t,null}function Hw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ST()){case ip:return 1;case Lw:return 4;case yc:case IT:return 16;case Dw:return 536870912;default:return 16}default:return 16}}var xr=null,cp=null,Gl=null;function Ww(){if(Gl)return Gl;var t,e=cp,n=e.length,r,s="value"in xr?xr.value:xr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Gl=s.slice(t,1<r?1-r:void 0)}function Kl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _l(){return!0}function Zg(){return!1}function Gt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?_l:Zg,this.isPropagationStopped=Zg,this}return je(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),e}var Ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},up=Gt(Ui),Fa=je({},Ui,{view:0,detail:0}),FT=Gt(Fa),wd,xd,_o,hu=je({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_o&&(_o&&t.type==="mousemove"?(wd=t.screenX-_o.screenX,xd=t.screenY-_o.screenY):xd=wd=0,_o=t),wd)},movementY:function(t){return"movementY"in t?t.movementY:xd}}),e0=Gt(hu),zT=je({},hu,{dataTransfer:0}),UT=Gt(zT),$T=je({},Fa,{relatedTarget:0}),_d=Gt($T),BT=je({},Ui,{animationName:0,elapsedTime:0,pseudoElement:0}),HT=Gt(BT),WT=je({},Ui,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qT=Gt(WT),GT=je({},Ui,{data:0}),t0=Gt(GT),KT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=YT[t])?!!e[t]:!1}function dp(){return XT}var JT=je({},Fa,{key:function(t){if(t.key){var e=KT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?QT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dp,charCode:function(t){return t.type==="keypress"?Kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ZT=Gt(JT),eS=je({},hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),n0=Gt(eS),tS=je({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dp}),nS=Gt(tS),rS=je({},Ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),sS=Gt(rS),iS=je({},hu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),oS=Gt(iS),aS=[9,13,27,32],hp=Wn&&"CompositionEvent"in window,$o=null;Wn&&"documentMode"in document&&($o=document.documentMode);var lS=Wn&&"TextEvent"in window&&!$o,qw=Wn&&(!hp||$o&&8<$o&&11>=$o),r0=String.fromCharCode(32),s0=!1;function Gw(t,e){switch(t){case"keyup":return aS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ei=!1;function cS(t,e){switch(t){case"compositionend":return Kw(e);case"keypress":return e.which!==32?null:(s0=!0,r0);case"textInput":return t=e.data,t===r0&&s0?null:t;default:return null}}function uS(t,e){if(ei)return t==="compositionend"||!hp&&Gw(t,e)?(t=Ww(),Gl=cp=xr=null,ei=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qw&&e.locale!=="ko"?null:e.data;default:return null}}var dS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function i0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dS[t.type]:e==="textarea"}function Qw(t,e,n,r){Iw(r),e=_c(e,"onChange"),0<e.length&&(n=new up("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Bo=null,ua=null;function hS(t){ox(t,0)}function fu(t){var e=ri(t);if(ww(e))return t}function fS(t,e){if(t==="change")return e}var Yw=!1;if(Wn){var bd;if(Wn){var Ed="oninput"in document;if(!Ed){var o0=document.createElement("div");o0.setAttribute("oninput","return;"),Ed=typeof o0.oninput=="function"}bd=Ed}else bd=!1;Yw=bd&&(!document.documentMode||9<document.documentMode)}function a0(){Bo&&(Bo.detachEvent("onpropertychange",Xw),ua=Bo=null)}function Xw(t){if(t.propertyName==="value"&&fu(ua)){var e=[];Qw(e,ua,t,sp(t)),Nw(hS,e)}}function pS(t,e,n){t==="focusin"?(a0(),Bo=e,ua=n,Bo.attachEvent("onpropertychange",Xw)):t==="focusout"&&a0()}function mS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fu(ua)}function gS(t,e){if(t==="click")return fu(e)}function yS(t,e){if(t==="input"||t==="change")return fu(e)}function vS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mn=typeof Object.is=="function"?Object.is:vS;function da(t,e){if(mn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!yh.call(e,s)||!mn(t[s],e[s]))return!1}return!0}function l0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function c0(t,e){var n=l0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=l0(n)}}function Jw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Jw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zw(){for(var t=window,e=pc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pc(t.document)}return e}function fp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wS(t){var e=Zw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Jw(n.ownerDocument.documentElement,n)){if(r!==null&&fp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=c0(n,i);var o=c0(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xS=Wn&&"documentMode"in document&&11>=document.documentMode,ti=null,Dh=null,Ho=null,Oh=!1;function u0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Oh||ti==null||ti!==pc(r)||(r=ti,"selectionStart"in r&&fp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ho&&da(Ho,r)||(Ho=r,r=_c(Dh,"onSelect"),0<r.length&&(e=new up("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ti)))}function bl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ni={animationend:bl("Animation","AnimationEnd"),animationiteration:bl("Animation","AnimationIteration"),animationstart:bl("Animation","AnimationStart"),transitionend:bl("Transition","TransitionEnd")},Td={},ex={};Wn&&(ex=document.createElement("div").style,"AnimationEvent"in window||(delete ni.animationend.animation,delete ni.animationiteration.animation,delete ni.animationstart.animation),"TransitionEvent"in window||delete ni.transitionend.transition);function pu(t){if(Td[t])return Td[t];if(!ni[t])return t;var e=ni[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ex)return Td[t]=e[n];return t}var tx=pu("animationend"),nx=pu("animationiteration"),rx=pu("animationstart"),sx=pu("transitionend"),ix=new Map,d0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(t,e){ix.set(t,e),Ms(e,[t])}for(var Sd=0;Sd<d0.length;Sd++){var Id=d0[Sd],_S=Id.toLowerCase(),bS=Id[0].toUpperCase()+Id.slice(1);Qr(_S,"on"+bS)}Qr(tx,"onAnimationEnd");Qr(nx,"onAnimationIteration");Qr(rx,"onAnimationStart");Qr("dblclick","onDoubleClick");Qr("focusin","onFocus");Qr("focusout","onBlur");Qr(sx,"onTransitionEnd");Ti("onMouseEnter",["mouseout","mouseover"]);Ti("onMouseLeave",["mouseout","mouseover"]);Ti("onPointerEnter",["pointerout","pointerover"]);Ti("onPointerLeave",["pointerout","pointerover"]);Ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ES=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));function h0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,_T(r,e,void 0,t),t.currentTarget=null}function ox(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==i&&s.isPropagationStopped())break e;h0(s,a,u),i=c}else for(o=0;o<r.length;o++){if(a=r[o],c=a.instance,u=a.currentTarget,a=a.listener,c!==i&&s.isPropagationStopped())break e;h0(s,a,u),i=c}}}if(gc)throw t=Rh,gc=!1,Rh=null,t}function Ce(t,e){var n=e[$h];n===void 0&&(n=e[$h]=new Set);var r=t+"__bubble";n.has(r)||(ax(e,t,2,!1),n.add(r))}function Cd(t,e,n){var r=0;e&&(r|=4),ax(n,t,r,e)}var El="_reactListening"+Math.random().toString(36).slice(2);function ha(t){if(!t[El]){t[El]=!0,pw.forEach(function(n){n!=="selectionchange"&&(ES.has(n)||Cd(n,!1,t),Cd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[El]||(e[El]=!0,Cd("selectionchange",!1,e))}}function ax(t,e,n,r){switch(Hw(e)){case 1:var s=OT;break;case 4:s=VT;break;default:s=lp}n=s.bind(null,e,n,t),s=void 0,!Ph||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Ad(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;a!==null;){if(o=fs(a),o===null)return;if(c=o.tag,c===5||c===6){r=i=o;continue e}a=a.parentNode}}r=r.return}Nw(function(){var u=i,h=sp(n),p=[];e:{var m=ix.get(t);if(m!==void 0){var _=up,E=t;switch(t){case"keypress":if(Kl(n)===0)break e;case"keydown":case"keyup":_=ZT;break;case"focusin":E="focus",_=_d;break;case"focusout":E="blur",_=_d;break;case"beforeblur":case"afterblur":_=_d;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=e0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=UT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=nS;break;case tx:case nx:case rx:_=HT;break;case sx:_=sS;break;case"scroll":_=FT;break;case"wheel":_=oS;break;case"copy":case"cut":case"paste":_=qT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=n0}var j=(e&4)!==0,k=!j&&t==="scroll",b=j?m!==null?m+"Capture":null:m;j=[];for(var y=u,v;y!==null;){v=y;var R=v.stateNode;if(v.tag===5&&R!==null&&(v=R,b!==null&&(R=oa(y,b),R!=null&&j.push(fa(y,R,v)))),k)break;y=y.return}0<j.length&&(m=new _(m,E,null,n,h),p.push({event:m,listeners:j}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==kh&&(E=n.relatedTarget||n.fromElement)&&(fs(E)||E[qn]))break e;if((_||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,_?(E=n.relatedTarget||n.toElement,_=u,E=E?fs(E):null,E!==null&&(k=Ls(E),E!==k||E.tag!==5&&E.tag!==6)&&(E=null)):(_=null,E=u),_!==E)){if(j=e0,R="onMouseLeave",b="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(j=n0,R="onPointerLeave",b="onPointerEnter",y="pointer"),k=_==null?m:ri(_),v=E==null?m:ri(E),m=new j(R,y+"leave",_,n,h),m.target=k,m.relatedTarget=v,R=null,fs(h)===u&&(j=new j(b,y+"enter",E,n,h),j.target=v,j.relatedTarget=k,R=j),k=R,_&&E)t:{for(j=_,b=E,y=0,v=j;v;v=Hs(v))y++;for(v=0,R=b;R;R=Hs(R))v++;for(;0<y-v;)j=Hs(j),y--;for(;0<v-y;)b=Hs(b),v--;for(;y--;){if(j===b||b!==null&&j===b.alternate)break t;j=Hs(j),b=Hs(b)}j=null}else j=null;_!==null&&f0(p,m,_,j,!1),E!==null&&k!==null&&f0(p,k,E,j,!0)}}e:{if(m=u?ri(u):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var V=fS;else if(i0(m))if(Yw)V=yS;else{V=mS;var L=pS}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(V=gS);if(V&&(V=V(t,u))){Qw(p,V,n,h);break e}L&&L(t,m,u),t==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&Th(m,"number",m.value)}switch(L=u?ri(u):window,t){case"focusin":(i0(L)||L.contentEditable==="true")&&(ti=L,Dh=u,Ho=null);break;case"focusout":Ho=Dh=ti=null;break;case"mousedown":Oh=!0;break;case"contextmenu":case"mouseup":case"dragend":Oh=!1,u0(p,n,h);break;case"selectionchange":if(xS)break;case"keydown":case"keyup":u0(p,n,h)}var S;if(hp)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else ei?Gw(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(qw&&n.locale!=="ko"&&(ei||x!=="onCompositionStart"?x==="onCompositionEnd"&&ei&&(S=Ww()):(xr=h,cp="value"in xr?xr.value:xr.textContent,ei=!0)),L=_c(u,x),0<L.length&&(x=new t0(x,t,null,n,h),p.push({event:x,listeners:L}),S?x.data=S:(S=Kw(n),S!==null&&(x.data=S)))),(S=lS?cS(t,n):uS(t,n))&&(u=_c(u,"onBeforeInput"),0<u.length&&(h=new t0("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=S))}ox(p,e)})}function fa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _c(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=oa(t,n),i!=null&&r.unshift(fa(t,i,s)),i=oa(t,e),i!=null&&r.push(fa(t,i,s))),t=t.return}return r}function Hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function f0(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,s?(c=oa(n,i),c!=null&&o.unshift(fa(n,c,a))):s||(c=oa(n,i),c!=null&&o.push(fa(n,c,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var TS=/\r\n?/g,SS=/\u0000|\uFFFD/g;function p0(t){return(typeof t=="string"?t:""+t).replace(TS,`
`).replace(SS,"")}function Tl(t,e,n){if(e=p0(e),p0(t)!==e&&n)throw Error(K(425))}function bc(){}var Vh=null,Fh=null;function zh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uh=typeof setTimeout=="function"?setTimeout:void 0,IS=typeof clearTimeout=="function"?clearTimeout:void 0,m0=typeof Promise=="function"?Promise:void 0,CS=typeof queueMicrotask=="function"?queueMicrotask:typeof m0<"u"?function(t){return m0.resolve(null).then(t).catch(AS)}:Uh;function AS(t){setTimeout(function(){throw t})}function kd(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),ca(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ca(e)}function Ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function g0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $i=Math.random().toString(36).slice(2),Sn="__reactFiber$"+$i,pa="__reactProps$"+$i,qn="__reactContainer$"+$i,$h="__reactEvents$"+$i,kS="__reactListeners$"+$i,NS="__reactHandles$"+$i;function fs(t){var e=t[Sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qn]||n[Sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=g0(t);t!==null;){if(n=t[Sn])return n;t=g0(t)}return e}t=n,n=t.parentNode}return null}function za(t){return t=t[Sn]||t[qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ri(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(K(33))}function mu(t){return t[pa]||null}var Bh=[],si=-1;function Yr(t){return{current:t}}function ke(t){0>si||(t.current=Bh[si],Bh[si]=null,si--)}function Se(t,e){si++,Bh[si]=t.current,t.current=e}var $r={},bt=Yr($r),Lt=Yr(!1),bs=$r;function Si(t,e){var n=t.type.contextTypes;if(!n)return $r;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Dt(t){return t=t.childContextTypes,t!=null}function Ec(){ke(Lt),ke(bt)}function y0(t,e,n){if(bt.current!==$r)throw Error(K(168));Se(bt,e),Se(Lt,n)}function lx(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(K(108,pT(t)||"Unknown",s));return je({},n,r)}function Tc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$r,bs=bt.current,Se(bt,t),Se(Lt,Lt.current),!0}function v0(t,e,n){var r=t.stateNode;if(!r)throw Error(K(169));n?(t=lx(t,e,bs),r.__reactInternalMemoizedMergedChildContext=t,ke(Lt),ke(bt),Se(bt,t)):ke(Lt),Se(Lt,n)}var Fn=null,gu=!1,Nd=!1;function cx(t){Fn===null?Fn=[t]:Fn.push(t)}function PS(t){gu=!0,cx(t)}function Xr(){if(!Nd&&Fn!==null){Nd=!0;var t=0,e=we;try{var n=Fn;for(we=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Fn=null,gu=!1}catch(s){throw Fn!==null&&(Fn=Fn.slice(t+1)),Mw(ip,Xr),s}finally{we=e,Nd=!1}}return null}var ii=[],oi=0,Sc=null,Ic=0,Xt=[],Jt=0,Es=null,zn=1,Un="";function us(t,e){ii[oi++]=Ic,ii[oi++]=Sc,Sc=t,Ic=e}function ux(t,e,n){Xt[Jt++]=zn,Xt[Jt++]=Un,Xt[Jt++]=Es,Es=t;var r=zn;t=Un;var s=32-dn(r)-1;r&=~(1<<s),n+=1;var i=32-dn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,zn=1<<32-dn(e)+s|n<<s|r,Un=i+t}else zn=1<<i|n<<s|r,Un=t}function pp(t){t.return!==null&&(us(t,1),ux(t,1,0))}function mp(t){for(;t===Sc;)Sc=ii[--oi],ii[oi]=null,Ic=ii[--oi],ii[oi]=null;for(;t===Es;)Es=Xt[--Jt],Xt[Jt]=null,Un=Xt[--Jt],Xt[Jt]=null,zn=Xt[--Jt],Xt[Jt]=null}var Ht=null,$t=null,Ne=!1,ln=null;function dx(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function w0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ht=t,$t=Ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ht=t,$t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Es!==null?{id:zn,overflow:Un}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ht=t,$t=null,!0):!1;default:return!1}}function Hh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wh(t){if(Ne){var e=$t;if(e){var n=e;if(!w0(t,e)){if(Hh(t))throw Error(K(418));e=Ar(n.nextSibling);var r=Ht;e&&w0(t,e)?dx(r,n):(t.flags=t.flags&-4097|2,Ne=!1,Ht=t)}}else{if(Hh(t))throw Error(K(418));t.flags=t.flags&-4097|2,Ne=!1,Ht=t}}}function x0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ht=t}function Sl(t){if(t!==Ht)return!1;if(!Ne)return x0(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zh(t.type,t.memoizedProps)),e&&(e=$t)){if(Hh(t))throw hx(),Error(K(418));for(;e;)dx(t,e),e=Ar(e.nextSibling)}if(x0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(K(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){$t=Ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}$t=null}}else $t=Ht?Ar(t.stateNode.nextSibling):null;return!0}function hx(){for(var t=$t;t;)t=Ar(t.nextSibling)}function Ii(){$t=Ht=null,Ne=!1}function gp(t){ln===null?ln=[t]:ln.push(t)}var RS=Zn.ReactCurrentBatchConfig;function bo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(K(309));var r=n.stateNode}if(!r)throw Error(K(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(K(284));if(!n._owner)throw Error(K(290,t))}return t}function Il(t,e){throw t=Object.prototype.toString.call(e),Error(K(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _0(t){var e=t._init;return e(t._payload)}function fx(t){function e(b,y){if(t){var v=b.deletions;v===null?(b.deletions=[y],b.flags|=16):v.push(y)}}function n(b,y){if(!t)return null;for(;y!==null;)e(b,y),y=y.sibling;return null}function r(b,y){for(b=new Map;y!==null;)y.key!==null?b.set(y.key,y):b.set(y.index,y),y=y.sibling;return b}function s(b,y){return b=Rr(b,y),b.index=0,b.sibling=null,b}function i(b,y,v){return b.index=v,t?(v=b.alternate,v!==null?(v=v.index,v<y?(b.flags|=2,y):v):(b.flags|=2,y)):(b.flags|=1048576,y)}function o(b){return t&&b.alternate===null&&(b.flags|=2),b}function a(b,y,v,R){return y===null||y.tag!==6?(y=Od(v,b.mode,R),y.return=b,y):(y=s(y,v),y.return=b,y)}function c(b,y,v,R){var V=v.type;return V===Zs?h(b,y,v.props.children,R,v.key):y!==null&&(y.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===ur&&_0(V)===y.type)?(R=s(y,v.props),R.ref=bo(b,y,v),R.return=b,R):(R=tc(v.type,v.key,v.props,null,b.mode,R),R.ref=bo(b,y,v),R.return=b,R)}function u(b,y,v,R){return y===null||y.tag!==4||y.stateNode.containerInfo!==v.containerInfo||y.stateNode.implementation!==v.implementation?(y=Vd(v,b.mode,R),y.return=b,y):(y=s(y,v.children||[]),y.return=b,y)}function h(b,y,v,R,V){return y===null||y.tag!==7?(y=xs(v,b.mode,R,V),y.return=b,y):(y=s(y,v),y.return=b,y)}function p(b,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Od(""+y,b.mode,v),y.return=b,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ml:return v=tc(y.type,y.key,y.props,null,b.mode,v),v.ref=bo(b,null,y),v.return=b,v;case Js:return y=Vd(y,b.mode,v),y.return=b,y;case ur:var R=y._init;return p(b,R(y._payload),v)}if(No(y)||yo(y))return y=xs(y,b.mode,v,null),y.return=b,y;Il(b,y)}return null}function m(b,y,v,R){var V=y!==null?y.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return V!==null?null:a(b,y,""+v,R);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ml:return v.key===V?c(b,y,v,R):null;case Js:return v.key===V?u(b,y,v,R):null;case ur:return V=v._init,m(b,y,V(v._payload),R)}if(No(v)||yo(v))return V!==null?null:h(b,y,v,R,null);Il(b,v)}return null}function _(b,y,v,R,V){if(typeof R=="string"&&R!==""||typeof R=="number")return b=b.get(v)||null,a(y,b,""+R,V);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case ml:return b=b.get(R.key===null?v:R.key)||null,c(y,b,R,V);case Js:return b=b.get(R.key===null?v:R.key)||null,u(y,b,R,V);case ur:var L=R._init;return _(b,y,v,L(R._payload),V)}if(No(R)||yo(R))return b=b.get(v)||null,h(y,b,R,V,null);Il(y,R)}return null}function E(b,y,v,R){for(var V=null,L=null,S=y,x=y=0,T=null;S!==null&&x<v.length;x++){S.index>x?(T=S,S=null):T=S.sibling;var I=m(b,S,v[x],R);if(I===null){S===null&&(S=T);break}t&&S&&I.alternate===null&&e(b,S),y=i(I,y,x),L===null?V=I:L.sibling=I,L=I,S=T}if(x===v.length)return n(b,S),Ne&&us(b,x),V;if(S===null){for(;x<v.length;x++)S=p(b,v[x],R),S!==null&&(y=i(S,y,x),L===null?V=S:L.sibling=S,L=S);return Ne&&us(b,x),V}for(S=r(b,S);x<v.length;x++)T=_(S,b,x,v[x],R),T!==null&&(t&&T.alternate!==null&&S.delete(T.key===null?x:T.key),y=i(T,y,x),L===null?V=T:L.sibling=T,L=T);return t&&S.forEach(function(P){return e(b,P)}),Ne&&us(b,x),V}function j(b,y,v,R){var V=yo(v);if(typeof V!="function")throw Error(K(150));if(v=V.call(v),v==null)throw Error(K(151));for(var L=V=null,S=y,x=y=0,T=null,I=v.next();S!==null&&!I.done;x++,I=v.next()){S.index>x?(T=S,S=null):T=S.sibling;var P=m(b,S,I.value,R);if(P===null){S===null&&(S=T);break}t&&S&&P.alternate===null&&e(b,S),y=i(P,y,x),L===null?V=P:L.sibling=P,L=P,S=T}if(I.done)return n(b,S),Ne&&us(b,x),V;if(S===null){for(;!I.done;x++,I=v.next())I=p(b,I.value,R),I!==null&&(y=i(I,y,x),L===null?V=I:L.sibling=I,L=I);return Ne&&us(b,x),V}for(S=r(b,S);!I.done;x++,I=v.next())I=_(S,b,x,I.value,R),I!==null&&(t&&I.alternate!==null&&S.delete(I.key===null?x:I.key),y=i(I,y,x),L===null?V=I:L.sibling=I,L=I);return t&&S.forEach(function(N){return e(b,N)}),Ne&&us(b,x),V}function k(b,y,v,R){if(typeof v=="object"&&v!==null&&v.type===Zs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ml:e:{for(var V=v.key,L=y;L!==null;){if(L.key===V){if(V=v.type,V===Zs){if(L.tag===7){n(b,L.sibling),y=s(L,v.props.children),y.return=b,b=y;break e}}else if(L.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===ur&&_0(V)===L.type){n(b,L.sibling),y=s(L,v.props),y.ref=bo(b,L,v),y.return=b,b=y;break e}n(b,L);break}else e(b,L);L=L.sibling}v.type===Zs?(y=xs(v.props.children,b.mode,R,v.key),y.return=b,b=y):(R=tc(v.type,v.key,v.props,null,b.mode,R),R.ref=bo(b,y,v),R.return=b,b=R)}return o(b);case Js:e:{for(L=v.key;y!==null;){if(y.key===L)if(y.tag===4&&y.stateNode.containerInfo===v.containerInfo&&y.stateNode.implementation===v.implementation){n(b,y.sibling),y=s(y,v.children||[]),y.return=b,b=y;break e}else{n(b,y);break}else e(b,y);y=y.sibling}y=Vd(v,b.mode,R),y.return=b,b=y}return o(b);case ur:return L=v._init,k(b,y,L(v._payload),R)}if(No(v))return E(b,y,v,R);if(yo(v))return j(b,y,v,R);Il(b,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,y!==null&&y.tag===6?(n(b,y.sibling),y=s(y,v),y.return=b,b=y):(n(b,y),y=Od(v,b.mode,R),y.return=b,b=y),o(b)):n(b,y)}return k}var Ci=fx(!0),px=fx(!1),Cc=Yr(null),Ac=null,ai=null,yp=null;function vp(){yp=ai=Ac=null}function wp(t){var e=Cc.current;ke(Cc),t._currentValue=e}function qh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function mi(t,e){Ac=t,yp=ai=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Mt=!0),t.firstContext=null)}function nn(t){var e=t._currentValue;if(yp!==t)if(t={context:t,memoizedValue:e,next:null},ai===null){if(Ac===null)throw Error(K(308));ai=t,Ac.dependencies={lanes:0,firstContext:t}}else ai=ai.next=t;return e}var ps=null;function xp(t){ps===null?ps=[t]:ps.push(t)}function mx(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,xp(e)):(n.next=s.next,s.next=n),e.interleaved=n,Gn(t,r)}function Gn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dr=!1;function _p(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Hn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Gn(t,n)}return s=r.interleaved,s===null?(e.next=e,xp(r)):(e.next=s.next,s.next=e),r.interleaved=e,Gn(t,n)}function Ql(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,op(t,n)}}function b0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function kc(t,e,n,r){var s=t.updateQueue;dr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var c=a,u=c.next;c.next=null,o===null?i=u:o.next=u,o=c;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=c))}if(i!==null){var p=s.baseState;o=0,h=u=c=null,a=i;do{var m=a.lane,_=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,j=a;switch(m=e,_=n,j.tag){case 1:if(E=j.payload,typeof E=="function"){p=E.call(_,p,m);break e}p=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=j.payload,m=typeof E=="function"?E.call(_,p,m):E,m==null)break e;p=je({},p,m);break e;case 2:dr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[a]:m.push(a))}else _={eventTime:_,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=_,c=p):h=h.next=_,o|=m;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;m=a,a=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(1);if(h===null&&(c=p),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Ss|=o,t.lanes=o,t.memoizedState=p}}function E0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(K(191,s));s.call(r)}}}var Ua={},An=Yr(Ua),ma=Yr(Ua),ga=Yr(Ua);function ms(t){if(t===Ua)throw Error(K(174));return t}function bp(t,e){switch(Se(ga,e),Se(ma,t),Se(An,Ua),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ih(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ih(e,t)}ke(An),Se(An,e)}function Ai(){ke(An),ke(ma),ke(ga)}function yx(t){ms(ga.current);var e=ms(An.current),n=Ih(e,t.type);e!==n&&(Se(ma,t),Se(An,n))}function Ep(t){ma.current===t&&(ke(An),ke(ma))}var Pe=Yr(0);function Nc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Pd=[];function Tp(){for(var t=0;t<Pd.length;t++)Pd[t]._workInProgressVersionPrimary=null;Pd.length=0}var Yl=Zn.ReactCurrentDispatcher,Rd=Zn.ReactCurrentBatchConfig,Ts=0,Re=null,Je=null,st=null,Pc=!1,Wo=!1,ya=0,jS=0;function gt(){throw Error(K(321))}function Sp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!mn(t[n],e[n]))return!1;return!0}function Ip(t,e,n,r,s,i){if(Ts=i,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yl.current=t===null||t.memoizedState===null?OS:VS,t=n(r,s),Wo){i=0;do{if(Wo=!1,ya=0,25<=i)throw Error(K(301));i+=1,st=Je=null,e.updateQueue=null,Yl.current=FS,t=n(r,s)}while(Wo)}if(Yl.current=Rc,e=Je!==null&&Je.next!==null,Ts=0,st=Je=Re=null,Pc=!1,e)throw Error(K(300));return t}function Cp(){var t=ya!==0;return ya=0,t}function En(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Re.memoizedState=st=t:st=st.next=t,st}function rn(){if(Je===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=Je.next;var e=st===null?Re.memoizedState:st.next;if(e!==null)st=e,Je=t;else{if(t===null)throw Error(K(310));Je=t,t={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},st===null?Re.memoizedState=st=t:st=st.next=t}return st}function va(t,e){return typeof e=="function"?e(t):e}function jd(t){var e=rn(),n=e.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=t;var r=Je,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,c=null,u=i;do{var h=u.lane;if((Ts&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=p,o=r):c=c.next=p,Re.lanes|=h,Ss|=h}u=u.next}while(u!==null&&u!==i);c===null?o=r:c.next=a,mn(r,e.memoizedState)||(Mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Re.lanes|=i,Ss|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Md(t){var e=rn(),n=e.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);mn(i,e.memoizedState)||(Mt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function vx(){}function wx(t,e){var n=Re,r=rn(),s=e(),i=!mn(r.memoizedState,s);if(i&&(r.memoizedState=s,Mt=!0),r=r.queue,Ap(bx.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,wa(9,_x.bind(null,n,r,s,e),void 0,null),it===null)throw Error(K(349));Ts&30||xx(n,e,s)}return s}function xx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function _x(t,e,n,r){e.value=n,e.getSnapshot=r,Ex(e)&&Tx(t)}function bx(t,e,n){return n(function(){Ex(e)&&Tx(t)})}function Ex(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!mn(t,n)}catch{return!0}}function Tx(t){var e=Gn(t,1);e!==null&&hn(e,t,1,-1)}function T0(t){var e=En();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:t},e.queue=t,t=t.dispatch=DS.bind(null,Re,t),[e.memoizedState,t]}function wa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Sx(){return rn().memoizedState}function Xl(t,e,n,r){var s=En();Re.flags|=t,s.memoizedState=wa(1|e,n,void 0,r===void 0?null:r)}function yu(t,e,n,r){var s=rn();r=r===void 0?null:r;var i=void 0;if(Je!==null){var o=Je.memoizedState;if(i=o.destroy,r!==null&&Sp(r,o.deps)){s.memoizedState=wa(e,n,i,r);return}}Re.flags|=t,s.memoizedState=wa(1|e,n,i,r)}function S0(t,e){return Xl(8390656,8,t,e)}function Ap(t,e){return yu(2048,8,t,e)}function Ix(t,e){return yu(4,2,t,e)}function Cx(t,e){return yu(4,4,t,e)}function Ax(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function kx(t,e,n){return n=n!=null?n.concat([t]):null,yu(4,4,Ax.bind(null,e,t),n)}function kp(){}function Nx(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Px(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Rx(t,e,n){return Ts&21?(mn(n,e)||(n=Ow(),Re.lanes|=n,Ss|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Mt=!0),t.memoizedState=n)}function MS(t,e){var n=we;we=n!==0&&4>n?n:4,t(!0);var r=Rd.transition;Rd.transition={};try{t(!1),e()}finally{we=n,Rd.transition=r}}function jx(){return rn().memoizedState}function LS(t,e,n){var r=Pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mx(t))Lx(e,n);else if(n=mx(t,e,n,r),n!==null){var s=It();hn(n,t,r,s),Dx(n,e,r)}}function DS(t,e,n){var r=Pr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mx(t))Lx(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,mn(a,o)){var c=e.interleaved;c===null?(s.next=s,xp(e)):(s.next=c.next,c.next=s),e.interleaved=s;return}}catch{}finally{}n=mx(t,e,s,r),n!==null&&(s=It(),hn(n,t,r,s),Dx(n,e,r))}}function Mx(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function Lx(t,e){Wo=Pc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dx(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,op(t,n)}}var Rc={readContext:nn,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},OS={readContext:nn,useCallback:function(t,e){return En().memoizedState=[t,e===void 0?null:e],t},useContext:nn,useEffect:S0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xl(4194308,4,Ax.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xl(4,2,t,e)},useMemo:function(t,e){var n=En();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=En();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=LS.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=En();return t={current:t},e.memoizedState=t},useState:T0,useDebugValue:kp,useDeferredValue:function(t){return En().memoizedState=t},useTransition:function(){var t=T0(!1),e=t[0];return t=MS.bind(null,t[1]),En().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,s=En();if(Ne){if(n===void 0)throw Error(K(407));n=n()}else{if(n=e(),it===null)throw Error(K(349));Ts&30||xx(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,S0(bx.bind(null,r,i,t),[t]),r.flags|=2048,wa(9,_x.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=En(),e=it.identifierPrefix;if(Ne){var n=Un,r=zn;n=(r&~(1<<32-dn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ya++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=jS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},VS={readContext:nn,useCallback:Nx,useContext:nn,useEffect:Ap,useImperativeHandle:kx,useInsertionEffect:Ix,useLayoutEffect:Cx,useMemo:Px,useReducer:jd,useRef:Sx,useState:function(){return jd(va)},useDebugValue:kp,useDeferredValue:function(t){var e=rn();return Rx(e,Je.memoizedState,t)},useTransition:function(){var t=jd(va)[0],e=rn().memoizedState;return[t,e]},useMutableSource:vx,useSyncExternalStore:wx,useId:jx,unstable_isNewReconciler:!1},FS={readContext:nn,useCallback:Nx,useContext:nn,useEffect:Ap,useImperativeHandle:kx,useInsertionEffect:Ix,useLayoutEffect:Cx,useMemo:Px,useReducer:Md,useRef:Sx,useState:function(){return Md(va)},useDebugValue:kp,useDeferredValue:function(t){var e=rn();return Je===null?e.memoizedState=t:Rx(e,Je.memoizedState,t)},useTransition:function(){var t=Md(va)[0],e=rn().memoizedState;return[t,e]},useMutableSource:vx,useSyncExternalStore:wx,useId:jx,unstable_isNewReconciler:!1};function on(t,e){if(t&&t.defaultProps){e=je({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:je({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vu={isMounted:function(t){return(t=t._reactInternals)?Ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=It(),s=Pr(t),i=Hn(r,s);i.payload=e,n!=null&&(i.callback=n),e=kr(t,i,s),e!==null&&(hn(e,t,s,r),Ql(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=It(),s=Pr(t),i=Hn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=kr(t,i,s),e!==null&&(hn(e,t,s,r),Ql(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=It(),r=Pr(t),s=Hn(n,r);s.tag=2,e!=null&&(s.callback=e),e=kr(t,s,r),e!==null&&(hn(e,t,r,n),Ql(e,t,r))}};function I0(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!da(n,r)||!da(s,i):!0}function Ox(t,e,n){var r=!1,s=$r,i=e.contextType;return typeof i=="object"&&i!==null?i=nn(i):(s=Dt(e)?bs:bt.current,r=e.contextTypes,i=(r=r!=null)?Si(t,s):$r),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function C0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&vu.enqueueReplaceState(e,e.state,null)}function Kh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},_p(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=nn(i):(i=Dt(e)?bs:bt.current,s.context=Si(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Gh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&vu.enqueueReplaceState(s,s.state,null),kc(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function ki(t,e){try{var n="",r=e;do n+=fT(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Ld(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zS=typeof WeakMap=="function"?WeakMap:Map;function Vx(t,e,n){n=Hn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Mc||(Mc=!0,of=r),Qh(t,e)},n}function Fx(t,e,n){n=Hn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Qh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Qh(t,e),typeof r!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function A0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new zS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=eI.bind(null,t,e,n),e.then(t,t))}function k0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function N0(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Hn(-1,1),e.tag=2,kr(n,e,1))),n.lanes|=1),t)}var US=Zn.ReactCurrentOwner,Mt=!1;function St(t,e,n,r){e.child=t===null?px(e,null,n,r):Ci(e,t.child,n,r)}function P0(t,e,n,r,s){n=n.render;var i=e.ref;return mi(e,s),r=Ip(t,e,n,r,i,s),n=Cp(),t!==null&&!Mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Kn(t,e,s)):(Ne&&n&&pp(e),e.flags|=1,St(t,e,r,s),e.child)}function R0(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Op(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,zx(t,e,i,r,s)):(t=tc(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:da,n(o,r)&&t.ref===e.ref)return Kn(t,e,s)}return e.flags|=1,t=Rr(i,r),t.ref=e.ref,t.return=e,e.child=t}function zx(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(da(i,r)&&t.ref===e.ref)if(Mt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Mt=!0);else return e.lanes=t.lanes,Kn(t,e,s)}return Yh(t,e,n,r,s)}function Ux(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(ci,zt),zt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Se(ci,zt),zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Se(ci,zt),zt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Se(ci,zt),zt|=r;return St(t,e,s,n),e.child}function $x(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yh(t,e,n,r,s){var i=Dt(n)?bs:bt.current;return i=Si(e,i),mi(e,s),n=Ip(t,e,n,r,i,s),r=Cp(),t!==null&&!Mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Kn(t,e,s)):(Ne&&r&&pp(e),e.flags|=1,St(t,e,n,s),e.child)}function j0(t,e,n,r,s){if(Dt(n)){var i=!0;Tc(e)}else i=!1;if(mi(e,s),e.stateNode===null)Jl(t,e),Ox(e,n,r),Kh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=nn(u):(u=Dt(n)?bs:bt.current,u=Si(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||c!==u)&&C0(e,o,r,u),dr=!1;var m=e.memoizedState;o.state=m,kc(e,r,o,s),c=e.memoizedState,a!==r||m!==c||Lt.current||dr?(typeof h=="function"&&(Gh(e,n,h,r),c=e.memoizedState),(a=dr||I0(e,n,a,r,m,c,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,gx(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:on(e.type,a),o.props=u,p=e.pendingProps,m=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=nn(c):(c=Dt(n)?bs:bt.current,c=Si(e,c));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==c)&&C0(e,o,r,c),dr=!1,m=e.memoizedState,o.state=m,kc(e,r,o,s);var E=e.memoizedState;a!==p||m!==E||Lt.current||dr?(typeof _=="function"&&(Gh(e,n,_,r),E=e.memoizedState),(u=dr||I0(e,n,u,r,m,E,c)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Xh(t,e,n,r,i,s)}function Xh(t,e,n,r,s,i){$x(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&v0(e,n,!1),Kn(t,e,i);r=e.stateNode,US.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ci(e,t.child,null,i),e.child=Ci(e,null,a,i)):St(t,e,a,i),e.memoizedState=r.state,s&&v0(e,n,!0),e.child}function Bx(t){var e=t.stateNode;e.pendingContext?y0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&y0(t,e.context,!1),bp(t,e.containerInfo)}function M0(t,e,n,r,s){return Ii(),gp(s),e.flags|=256,St(t,e,n,r),e.child}var Jh={dehydrated:null,treeContext:null,retryLane:0};function Zh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hx(t,e,n){var r=e.pendingProps,s=Pe.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Se(Pe,s&1),t===null)return Wh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=_u(o,r,0,null),t=xs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Zh(n),e.memoizedState=Jh,t):Np(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return $S(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=Rr(s,c),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Rr(a,i):(i=xs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Zh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Jh,r}return i=t.child,t=i.sibling,r=Rr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Np(t,e){return e=_u({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Cl(t,e,n,r){return r!==null&&gp(r),Ci(e,t.child,null,n),t=Np(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $S(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Ld(Error(K(422))),Cl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=_u({mode:"visible",children:r.children},s,0,null),i=xs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Ci(e,t.child,null,o),e.child.memoizedState=Zh(o),e.memoizedState=Jh,i);if(!(e.mode&1))return Cl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(K(419)),r=Ld(i,r,void 0),Cl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Mt||a){if(r=it,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Gn(t,s),hn(r,t,s,-1))}return Dp(),r=Ld(Error(K(421))),Cl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=tI.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,$t=Ar(s.nextSibling),Ht=e,Ne=!0,ln=null,t!==null&&(Xt[Jt++]=zn,Xt[Jt++]=Un,Xt[Jt++]=Es,zn=t.id,Un=t.overflow,Es=e),e=Np(e,r.children),e.flags|=4096,e)}function L0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),qh(t.return,e,n)}function Dd(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Wx(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(St(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&L0(t,n,e);else if(t.tag===19)L0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Se(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Nc(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Dd(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Nc(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Dd(e,!0,n,null,i);break;case"together":Dd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Jl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ss|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(K(153));if(e.child!==null){for(t=e.child,n=Rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function BS(t,e,n){switch(e.tag){case 3:Bx(e),Ii();break;case 5:yx(e);break;case 1:Dt(e.type)&&Tc(e);break;case 4:bp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Se(Cc,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Se(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?Hx(t,e,n):(Se(Pe,Pe.current&1),t=Kn(t,e,n),t!==null?t.sibling:null);Se(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Wx(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Se(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,Ux(t,e,n)}return Kn(t,e,n)}var qx,ef,Gx,Kx;qx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ef=function(){};Gx=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,ms(An.current);var i=null;switch(n){case"input":s=bh(t,s),r=bh(t,r),i=[];break;case"select":s=je({},s,{value:void 0}),r=je({},r,{value:void 0}),i=[];break;case"textarea":s=Sh(t,s),r=Sh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=bc)}Ch(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var a=s[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(sa.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(a=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(sa.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ce("scroll",t),i||a===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};Kx=function(t,e,n,r){n!==r&&(e.flags|=4)};function Eo(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function HS(t,e,n){var r=e.pendingProps;switch(mp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(e),null;case 1:return Dt(e.type)&&Ec(),yt(e),null;case 3:return r=e.stateNode,Ai(),ke(Lt),ke(bt),Tp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Sl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ln!==null&&(cf(ln),ln=null))),ef(t,e),yt(e),null;case 5:Ep(e);var s=ms(ga.current);if(n=e.type,t!==null&&e.stateNode!=null)Gx(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(K(166));return yt(e),null}if(t=ms(An.current),Sl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Sn]=e,r[pa]=i,t=(e.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(s=0;s<Ro.length;s++)Ce(Ro[s],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":Hg(r,i),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ce("invalid",r);break;case"textarea":qg(r,i),Ce("invalid",r)}Ch(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Tl(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Tl(r.textContent,a,t),s=["children",""+a]):sa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ce("scroll",r)}switch(n){case"input":gl(r),Wg(r,i,!0);break;case"textarea":gl(r),Gg(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=bc)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=bw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Sn]=e,t[pa]=r,qx(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ah(n,r),n){case"dialog":Ce("cancel",t),Ce("close",t),s=r;break;case"iframe":case"object":case"embed":Ce("load",t),s=r;break;case"video":case"audio":for(s=0;s<Ro.length;s++)Ce(Ro[s],t);s=r;break;case"source":Ce("error",t),s=r;break;case"img":case"image":case"link":Ce("error",t),Ce("load",t),s=r;break;case"details":Ce("toggle",t),s=r;break;case"input":Hg(t,r),s=bh(t,r),Ce("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=je({},r,{value:void 0}),Ce("invalid",t);break;case"textarea":qg(t,r),s=Sh(t,r),Ce("invalid",t);break;default:s=r}Ch(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];i==="style"?Sw(t,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Ew(t,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ia(t,c):typeof c=="number"&&ia(t,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(sa.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Ce("scroll",t):c!=null&&ep(t,i,c,o))}switch(n){case"input":gl(t),Wg(t,r,!1);break;case"textarea":gl(t),Gg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ur(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?di(t,!!r.multiple,i,!1):r.defaultValue!=null&&di(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=bc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yt(e),null;case 6:if(t&&e.stateNode!=null)Kx(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(K(166));if(n=ms(ga.current),ms(An.current),Sl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Sn]=e,(i=r.nodeValue!==n)&&(t=Ht,t!==null))switch(t.tag){case 3:Tl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Tl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Sn]=e,e.stateNode=r}return yt(e),null;case 13:if(ke(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&$t!==null&&e.mode&1&&!(e.flags&128))hx(),Ii(),e.flags|=98560,i=!1;else if(i=Sl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(K(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(K(317));i[Sn]=e}else Ii(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yt(e),i=!1}else ln!==null&&(cf(ln),ln=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?et===0&&(et=3):Dp())),e.updateQueue!==null&&(e.flags|=4),yt(e),null);case 4:return Ai(),ef(t,e),t===null&&ha(e.stateNode.containerInfo),yt(e),null;case 10:return wp(e.type._context),yt(e),null;case 17:return Dt(e.type)&&Ec(),yt(e),null;case 19:if(ke(Pe),i=e.memoizedState,i===null)return yt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Eo(i,!1);else{if(et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Nc(t),o!==null){for(e.flags|=128,Eo(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Se(Pe,Pe.current&1|2),e.child}t=t.sibling}i.tail!==null&&Fe()>Ni&&(e.flags|=128,r=!0,Eo(i,!1),e.lanes=4194304)}else{if(!r)if(t=Nc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Eo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ne)return yt(e),null}else 2*Fe()-i.renderingStartTime>Ni&&n!==1073741824&&(e.flags|=128,r=!0,Eo(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Fe(),e.sibling=null,n=Pe.current,Se(Pe,r?n&1|2:n&1),e):(yt(e),null);case 22:case 23:return Lp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?zt&1073741824&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),null;case 24:return null;case 25:return null}throw Error(K(156,e.tag))}function WS(t,e){switch(mp(e),e.tag){case 1:return Dt(e.type)&&Ec(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ai(),ke(Lt),ke(bt),Tp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ep(e),null;case 13:if(ke(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(K(340));Ii()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ke(Pe),null;case 4:return Ai(),null;case 10:return wp(e.type._context),null;case 22:case 23:return Lp(),null;case 24:return null;default:return null}}var Al=!1,xt=!1,qS=typeof WeakSet=="function"?WeakSet:Set,Z=null;function li(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function tf(t,e,n){try{n()}catch(r){De(t,e,r)}}var D0=!1;function GS(t,e){if(Vh=wc,t=Zw(),fp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,c=-1,u=0,h=0,p=t,m=null;t:for(;;){for(var _;p!==n||s!==0&&p.nodeType!==3||(a=o+s),p!==i||r!==0&&p.nodeType!==3||(c=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(_=p.firstChild)!==null;)m=p,p=_;for(;;){if(p===t)break t;if(m===n&&++u===s&&(a=o),m===i&&++h===r&&(c=o),(_=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=_}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fh={focusedElem:t,selectionRange:n},wc=!1,Z=e;Z!==null;)if(e=Z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Z=t;else for(;Z!==null;){e=Z;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var j=E.memoizedProps,k=E.memoizedState,b=e.stateNode,y=b.getSnapshotBeforeUpdate(e.elementType===e.type?j:on(e.type,j),k);b.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(K(163))}}catch(R){De(e,e.return,R)}if(t=e.sibling,t!==null){t.return=e.return,Z=t;break}Z=e.return}return E=D0,D0=!1,E}function qo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&tf(e,n,i)}s=s.next}while(s!==r)}}function wu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function nf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Qx(t){var e=t.alternate;e!==null&&(t.alternate=null,Qx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Sn],delete e[pa],delete e[$h],delete e[kS],delete e[NS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Yx(t){return t.tag===5||t.tag===3||t.tag===4}function O0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Yx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bc));else if(r!==4&&(t=t.child,t!==null))for(rf(t,e,n),t=t.sibling;t!==null;)rf(t,e,n),t=t.sibling}function sf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sf(t,e,n),t=t.sibling;t!==null;)sf(t,e,n),t=t.sibling}var lt=null,an=!1;function ar(t,e,n){for(n=n.child;n!==null;)Xx(t,e,n),n=n.sibling}function Xx(t,e,n){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(du,n)}catch{}switch(n.tag){case 5:xt||li(n,e);case 6:var r=lt,s=an;lt=null,ar(t,e,n),lt=r,an=s,lt!==null&&(an?(t=lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):lt.removeChild(n.stateNode));break;case 18:lt!==null&&(an?(t=lt,n=n.stateNode,t.nodeType===8?kd(t.parentNode,n):t.nodeType===1&&kd(t,n),ca(t)):kd(lt,n.stateNode));break;case 4:r=lt,s=an,lt=n.stateNode.containerInfo,an=!0,ar(t,e,n),lt=r,an=s;break;case 0:case 11:case 14:case 15:if(!xt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&tf(n,e,o),s=s.next}while(s!==r)}ar(t,e,n);break;case 1:if(!xt&&(li(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){De(n,e,a)}ar(t,e,n);break;case 21:ar(t,e,n);break;case 22:n.mode&1?(xt=(r=xt)||n.memoizedState!==null,ar(t,e,n),xt=r):ar(t,e,n);break;default:ar(t,e,n)}}function V0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qS),e.forEach(function(r){var s=nI.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function sn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:lt=a.stateNode,an=!1;break e;case 3:lt=a.stateNode.containerInfo,an=!0;break e;case 4:lt=a.stateNode.containerInfo,an=!0;break e}a=a.return}if(lt===null)throw Error(K(160));Xx(i,o,s),lt=null,an=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){De(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Jx(e,t),e=e.sibling}function Jx(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(sn(e,t),_n(t),r&4){try{qo(3,t,t.return),wu(3,t)}catch(j){De(t,t.return,j)}try{qo(5,t,t.return)}catch(j){De(t,t.return,j)}}break;case 1:sn(e,t),_n(t),r&512&&n!==null&&li(n,n.return);break;case 5:if(sn(e,t),_n(t),r&512&&n!==null&&li(n,n.return),t.flags&32){var s=t.stateNode;try{ia(s,"")}catch(j){De(t,t.return,j)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&xw(s,i),Ah(a,o);var u=Ah(a,i);for(o=0;o<c.length;o+=2){var h=c[o],p=c[o+1];h==="style"?Sw(s,p):h==="dangerouslySetInnerHTML"?Ew(s,p):h==="children"?ia(s,p):ep(s,h,p,u)}switch(a){case"input":Eh(s,i);break;case"textarea":_w(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var _=i.value;_!=null?di(s,!!i.multiple,_,!1):m!==!!i.multiple&&(i.defaultValue!=null?di(s,!!i.multiple,i.defaultValue,!0):di(s,!!i.multiple,i.multiple?[]:"",!1))}s[pa]=i}catch(j){De(t,t.return,j)}}break;case 6:if(sn(e,t),_n(t),r&4){if(t.stateNode===null)throw Error(K(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(j){De(t,t.return,j)}}break;case 3:if(sn(e,t),_n(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ca(e.containerInfo)}catch(j){De(t,t.return,j)}break;case 4:sn(e,t),_n(t);break;case 13:sn(e,t),_n(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(jp=Fe())),r&4&&V0(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(xt=(u=xt)||h,sn(e,t),xt=u):sn(e,t),_n(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(Z=t,h=t.child;h!==null;){for(p=Z=h;Z!==null;){switch(m=Z,_=m.child,m.tag){case 0:case 11:case 14:case 15:qo(4,m,m.return);break;case 1:li(m,m.return);var E=m.stateNode;if(typeof E.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(j){De(r,n,j)}}break;case 5:li(m,m.return);break;case 22:if(m.memoizedState!==null){z0(p);continue}}_!==null?(_.return=m,Z=_):z0(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{s=p.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Tw("display",o))}catch(j){De(t,t.return,j)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(j){De(t,t.return,j)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:sn(e,t),_n(t),r&4&&V0(t);break;case 21:break;default:sn(e,t),_n(t)}}function _n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Yx(n)){var r=n;break e}n=n.return}throw Error(K(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ia(s,""),r.flags&=-33);var i=O0(t);sf(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=O0(t);rf(t,a,o);break;default:throw Error(K(161))}}catch(c){De(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function KS(t,e,n){Z=t,Zx(t)}function Zx(t,e,n){for(var r=(t.mode&1)!==0;Z!==null;){var s=Z,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Al;if(!o){var a=s.alternate,c=a!==null&&a.memoizedState!==null||xt;a=Al;var u=xt;if(Al=o,(xt=c)&&!u)for(Z=s;Z!==null;)o=Z,c=o.child,o.tag===22&&o.memoizedState!==null?U0(s):c!==null?(c.return=o,Z=c):U0(s);for(;i!==null;)Z=i,Zx(i),i=i.sibling;Z=s,Al=a,xt=u}F0(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,Z=i):F0(t)}}function F0(t){for(;Z!==null;){var e=Z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:xt||wu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!xt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:on(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&E0(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}E0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&ca(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(K(163))}xt||e.flags&512&&nf(e)}catch(m){De(e,e.return,m)}}if(e===t){Z=null;break}if(n=e.sibling,n!==null){n.return=e.return,Z=n;break}Z=e.return}}function z0(t){for(;Z!==null;){var e=Z;if(e===t){Z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Z=n;break}Z=e.return}}function U0(t){for(;Z!==null;){var e=Z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wu(4,e)}catch(c){De(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(c){De(e,s,c)}}var i=e.return;try{nf(e)}catch(c){De(e,i,c)}break;case 5:var o=e.return;try{nf(e)}catch(c){De(e,o,c)}}}catch(c){De(e,e.return,c)}if(e===t){Z=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Z=a;break}Z=e.return}}var QS=Math.ceil,jc=Zn.ReactCurrentDispatcher,Pp=Zn.ReactCurrentOwner,tn=Zn.ReactCurrentBatchConfig,ge=0,it=null,He=null,dt=0,zt=0,ci=Yr(0),et=0,xa=null,Ss=0,xu=0,Rp=0,Go=null,Pt=null,jp=0,Ni=1/0,Vn=null,Mc=!1,of=null,Nr=null,kl=!1,_r=null,Lc=0,Ko=0,af=null,Zl=-1,ec=0;function It(){return ge&6?Fe():Zl!==-1?Zl:Zl=Fe()}function Pr(t){return t.mode&1?ge&2&&dt!==0?dt&-dt:RS.transition!==null?(ec===0&&(ec=Ow()),ec):(t=we,t!==0||(t=window.event,t=t===void 0?16:Hw(t.type)),t):1}function hn(t,e,n,r){if(50<Ko)throw Ko=0,af=null,Error(K(185));Va(t,n,r),(!(ge&2)||t!==it)&&(t===it&&(!(ge&2)&&(xu|=n),et===4&&fr(t,dt)),Ot(t,r),n===1&&ge===0&&!(e.mode&1)&&(Ni=Fe()+500,gu&&Xr()))}function Ot(t,e){var n=t.callbackNode;RT(t,e);var r=vc(t,t===it?dt:0);if(r===0)n!==null&&Yg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Yg(n),e===1)t.tag===0?PS($0.bind(null,t)):cx($0.bind(null,t)),CS(function(){!(ge&6)&&Xr()}),n=null;else{switch(Vw(r)){case 1:n=ip;break;case 4:n=Lw;break;case 16:n=yc;break;case 536870912:n=Dw;break;default:n=yc}n=a1(n,e1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function e1(t,e){if(Zl=-1,ec=0,ge&6)throw Error(K(327));var n=t.callbackNode;if(gi()&&t.callbackNode!==n)return null;var r=vc(t,t===it?dt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Dc(t,r);else{e=r;var s=ge;ge|=2;var i=n1();(it!==t||dt!==e)&&(Vn=null,Ni=Fe()+500,ws(t,e));do try{JS();break}catch(a){t1(t,a)}while(1);vp(),jc.current=i,ge=s,He!==null?e=0:(it=null,dt=0,e=et)}if(e!==0){if(e===2&&(s=jh(t),s!==0&&(r=s,e=lf(t,s))),e===1)throw n=xa,ws(t,0),fr(t,r),Ot(t,Fe()),n;if(e===6)fr(t,r);else{if(s=t.current.alternate,!(r&30)&&!YS(s)&&(e=Dc(t,r),e===2&&(i=jh(t),i!==0&&(r=i,e=lf(t,i))),e===1))throw n=xa,ws(t,0),fr(t,r),Ot(t,Fe()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(K(345));case 2:ds(t,Pt,Vn);break;case 3:if(fr(t,r),(r&130023424)===r&&(e=jp+500-Fe(),10<e)){if(vc(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){It(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Uh(ds.bind(null,t,Pt,Vn),e);break}ds(t,Pt,Vn);break;case 4:if(fr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-dn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*QS(r/1960))-r,10<r){t.timeoutHandle=Uh(ds.bind(null,t,Pt,Vn),r);break}ds(t,Pt,Vn);break;case 5:ds(t,Pt,Vn);break;default:throw Error(K(329))}}}return Ot(t,Fe()),t.callbackNode===n?e1.bind(null,t):null}function lf(t,e){var n=Go;return t.current.memoizedState.isDehydrated&&(ws(t,e).flags|=256),t=Dc(t,e),t!==2&&(e=Pt,Pt=n,e!==null&&cf(e)),t}function cf(t){Pt===null?Pt=t:Pt.push.apply(Pt,t)}function YS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!mn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fr(t,e){for(e&=~Rp,e&=~xu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dn(e),r=1<<n;t[n]=-1,e&=~r}}function $0(t){if(ge&6)throw Error(K(327));gi();var e=vc(t,0);if(!(e&1))return Ot(t,Fe()),null;var n=Dc(t,e);if(t.tag!==0&&n===2){var r=jh(t);r!==0&&(e=r,n=lf(t,r))}if(n===1)throw n=xa,ws(t,0),fr(t,e),Ot(t,Fe()),n;if(n===6)throw Error(K(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ds(t,Pt,Vn),Ot(t,Fe()),null}function Mp(t,e){var n=ge;ge|=1;try{return t(e)}finally{ge=n,ge===0&&(Ni=Fe()+500,gu&&Xr())}}function Is(t){_r!==null&&_r.tag===0&&!(ge&6)&&gi();var e=ge;ge|=1;var n=tn.transition,r=we;try{if(tn.transition=null,we=1,t)return t()}finally{we=r,tn.transition=n,ge=e,!(ge&6)&&Xr()}}function Lp(){zt=ci.current,ke(ci)}function ws(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,IS(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(mp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ec();break;case 3:Ai(),ke(Lt),ke(bt),Tp();break;case 5:Ep(r);break;case 4:Ai();break;case 13:ke(Pe);break;case 19:ke(Pe);break;case 10:wp(r.type._context);break;case 22:case 23:Lp()}n=n.return}if(it=t,He=t=Rr(t.current,null),dt=zt=e,et=0,xa=null,Rp=xu=Ss=0,Pt=Go=null,ps!==null){for(e=0;e<ps.length;e++)if(n=ps[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}ps=null}return t}function t1(t,e){do{var n=He;try{if(vp(),Yl.current=Rc,Pc){for(var r=Re.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Pc=!1}if(Ts=0,st=Je=Re=null,Wo=!1,ya=0,Pp.current=null,n===null||n.return===null){et=1,xa=e,He=null;break}e:{var i=t,o=n.return,a=n,c=e;if(e=dt,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=k0(o);if(_!==null){_.flags&=-257,N0(_,o,a,i,e),_.mode&1&&A0(i,u,e),e=_,c=u;var E=e.updateQueue;if(E===null){var j=new Set;j.add(c),e.updateQueue=j}else E.add(c);break e}else{if(!(e&1)){A0(i,u,e),Dp();break e}c=Error(K(426))}}else if(Ne&&a.mode&1){var k=k0(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),N0(k,o,a,i,e),gp(ki(c,a));break e}}i=c=ki(c,a),et!==4&&(et=2),Go===null?Go=[i]:Go.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var b=Vx(i,c,e);b0(i,b);break e;case 1:a=c;var y=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof y.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Nr===null||!Nr.has(v)))){i.flags|=65536,e&=-e,i.lanes|=e;var R=Fx(i,a,e);b0(i,R);break e}}i=i.return}while(i!==null)}s1(n)}catch(V){e=V,He===n&&n!==null&&(He=n=n.return);continue}break}while(1)}function n1(){var t=jc.current;return jc.current=Rc,t===null?Rc:t}function Dp(){(et===0||et===3||et===2)&&(et=4),it===null||!(Ss&268435455)&&!(xu&268435455)||fr(it,dt)}function Dc(t,e){var n=ge;ge|=2;var r=n1();(it!==t||dt!==e)&&(Vn=null,ws(t,e));do try{XS();break}catch(s){t1(t,s)}while(1);if(vp(),ge=n,jc.current=r,He!==null)throw Error(K(261));return it=null,dt=0,et}function XS(){for(;He!==null;)r1(He)}function JS(){for(;He!==null&&!ET();)r1(He)}function r1(t){var e=o1(t.alternate,t,zt);t.memoizedProps=t.pendingProps,e===null?s1(t):He=e,Pp.current=null}function s1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=WS(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{et=6,He=null;return}}else if(n=HS(n,e,zt),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);et===0&&(et=5)}function ds(t,e,n){var r=we,s=tn.transition;try{tn.transition=null,we=1,ZS(t,e,n,r)}finally{tn.transition=s,we=r}return null}function ZS(t,e,n,r){do gi();while(_r!==null);if(ge&6)throw Error(K(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(K(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(jT(t,i),t===it&&(He=it=null,dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||kl||(kl=!0,a1(yc,function(){return gi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=tn.transition,tn.transition=null;var o=we;we=1;var a=ge;ge|=4,Pp.current=null,GS(t,n),Jx(n,t),wS(Fh),wc=!!Vh,Fh=Vh=null,t.current=n,KS(n),TT(),ge=a,we=o,tn.transition=i}else t.current=n;if(kl&&(kl=!1,_r=t,Lc=s),i=t.pendingLanes,i===0&&(Nr=null),CT(n.stateNode),Ot(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Mc)throw Mc=!1,t=of,of=null,t;return Lc&1&&t.tag!==0&&gi(),i=t.pendingLanes,i&1?t===af?Ko++:(Ko=0,af=t):Ko=0,Xr(),null}function gi(){if(_r!==null){var t=Vw(Lc),e=tn.transition,n=we;try{if(tn.transition=null,we=16>t?16:t,_r===null)var r=!1;else{if(t=_r,_r=null,Lc=0,ge&6)throw Error(K(331));var s=ge;for(ge|=4,Z=t.current;Z!==null;){var i=Z,o=i.child;if(Z.flags&16){var a=i.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(Z=u;Z!==null;){var h=Z;switch(h.tag){case 0:case 11:case 15:qo(8,h,i)}var p=h.child;if(p!==null)p.return=h,Z=p;else for(;Z!==null;){h=Z;var m=h.sibling,_=h.return;if(Qx(h),h===u){Z=null;break}if(m!==null){m.return=_,Z=m;break}Z=_}}}var E=i.alternate;if(E!==null){var j=E.child;if(j!==null){E.child=null;do{var k=j.sibling;j.sibling=null,j=k}while(j!==null)}}Z=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,Z=o;else e:for(;Z!==null;){if(i=Z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:qo(9,i,i.return)}var b=i.sibling;if(b!==null){b.return=i.return,Z=b;break e}Z=i.return}}var y=t.current;for(Z=y;Z!==null;){o=Z;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Z=v;else e:for(o=y;Z!==null;){if(a=Z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wu(9,a)}}catch(V){De(a,a.return,V)}if(a===o){Z=null;break e}var R=a.sibling;if(R!==null){R.return=a.return,Z=R;break e}Z=a.return}}if(ge=s,Xr(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(du,t)}catch{}r=!0}return r}finally{we=n,tn.transition=e}}return!1}function B0(t,e,n){e=ki(n,e),e=Vx(t,e,1),t=kr(t,e,1),e=It(),t!==null&&(Va(t,1,e),Ot(t,e))}function De(t,e,n){if(t.tag===3)B0(t,t,n);else for(;e!==null;){if(e.tag===3){B0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nr===null||!Nr.has(r))){t=ki(n,t),t=Fx(e,t,1),e=kr(e,t,1),t=It(),e!==null&&(Va(e,1,t),Ot(e,t));break}}e=e.return}}function eI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=It(),t.pingedLanes|=t.suspendedLanes&n,it===t&&(dt&n)===n&&(et===4||et===3&&(dt&130023424)===dt&&500>Fe()-jp?ws(t,0):Rp|=n),Ot(t,e)}function i1(t,e){e===0&&(t.mode&1?(e=wl,wl<<=1,!(wl&130023424)&&(wl=4194304)):e=1);var n=It();t=Gn(t,e),t!==null&&(Va(t,e,n),Ot(t,n))}function tI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),i1(t,n)}function nI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(K(314))}r!==null&&r.delete(e),i1(t,n)}var o1;o1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Lt.current)Mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Mt=!1,BS(t,e,n);Mt=!!(t.flags&131072)}else Mt=!1,Ne&&e.flags&1048576&&ux(e,Ic,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Jl(t,e),t=e.pendingProps;var s=Si(e,bt.current);mi(e,n),s=Ip(null,e,r,t,s,n);var i=Cp();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Dt(r)?(i=!0,Tc(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,_p(e),s.updater=vu,e.stateNode=s,s._reactInternals=e,Kh(e,r,t,n),e=Xh(null,e,r,!0,i,n)):(e.tag=0,Ne&&i&&pp(e),St(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Jl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=sI(r),t=on(r,t),s){case 0:e=Yh(null,e,r,t,n);break e;case 1:e=j0(null,e,r,t,n);break e;case 11:e=P0(null,e,r,t,n);break e;case 14:e=R0(null,e,r,on(r.type,t),n);break e}throw Error(K(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:on(r,s),Yh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:on(r,s),j0(t,e,r,s,n);case 3:e:{if(Bx(e),t===null)throw Error(K(387));r=e.pendingProps,i=e.memoizedState,s=i.element,gx(t,e),kc(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=ki(Error(K(423)),e),e=M0(t,e,r,n,s);break e}else if(r!==s){s=ki(Error(K(424)),e),e=M0(t,e,r,n,s);break e}else for($t=Ar(e.stateNode.containerInfo.firstChild),Ht=e,Ne=!0,ln=null,n=px(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ii(),r===s){e=Kn(t,e,n);break e}St(t,e,r,n)}e=e.child}return e;case 5:return yx(e),t===null&&Wh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,zh(r,s)?o=null:i!==null&&zh(r,i)&&(e.flags|=32),$x(t,e),St(t,e,o,n),e.child;case 6:return t===null&&Wh(e),null;case 13:return Hx(t,e,n);case 4:return bp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ci(e,null,r,n):St(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:on(r,s),P0(t,e,r,s,n);case 7:return St(t,e,e.pendingProps,n),e.child;case 8:return St(t,e,e.pendingProps.children,n),e.child;case 12:return St(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Se(Cc,r._currentValue),r._currentValue=o,i!==null)if(mn(i.value,o)){if(i.children===s.children&&!Lt.current){e=Kn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Hn(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),qh(i.return,n,e),a.lanes|=n;break}c=c.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(K(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),qh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}St(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,mi(e,n),s=nn(s),r=r(s),e.flags|=1,St(t,e,r,n),e.child;case 14:return r=e.type,s=on(r,e.pendingProps),s=on(r.type,s),R0(t,e,r,s,n);case 15:return zx(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:on(r,s),Jl(t,e),e.tag=1,Dt(r)?(t=!0,Tc(e)):t=!1,mi(e,n),Ox(e,r,s),Kh(e,r,s,n),Xh(null,e,r,!0,t,n);case 19:return Wx(t,e,n);case 22:return Ux(t,e,n)}throw Error(K(156,e.tag))};function a1(t,e){return Mw(t,e)}function rI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,r){return new rI(t,e,n,r)}function Op(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sI(t){if(typeof t=="function")return Op(t)?1:0;if(t!=null){if(t=t.$$typeof,t===np)return 11;if(t===rp)return 14}return 2}function Rr(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function tc(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Op(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Zs:return xs(n.children,s,i,e);case tp:o=8,s|=8;break;case vh:return t=en(12,n,e,s|2),t.elementType=vh,t.lanes=i,t;case wh:return t=en(13,n,e,s),t.elementType=wh,t.lanes=i,t;case xh:return t=en(19,n,e,s),t.elementType=xh,t.lanes=i,t;case yw:return _u(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case mw:o=10;break e;case gw:o=9;break e;case np:o=11;break e;case rp:o=14;break e;case ur:o=16,r=null;break e}throw Error(K(130,t==null?t:typeof t,""))}return e=en(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function xs(t,e,n,r){return t=en(7,t,r,e),t.lanes=n,t}function _u(t,e,n,r){return t=en(22,t,r,e),t.elementType=yw,t.lanes=n,t.stateNode={isHidden:!1},t}function Od(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function Vd(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iI(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vd(0),this.expirationTimes=vd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vd(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Vp(t,e,n,r,s,i,o,a,c){return t=new iI(t,e,n,a,c),e===1?(e=1,i===!0&&(e|=8)):e=0,i=en(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_p(i),t}function oI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Js,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function l1(t){if(!t)return $r;t=t._reactInternals;e:{if(Ls(t)!==t||t.tag!==1)throw Error(K(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(K(171))}if(t.tag===1){var n=t.type;if(Dt(n))return lx(t,n,e)}return e}function c1(t,e,n,r,s,i,o,a,c){return t=Vp(n,r,!0,t,s,i,o,a,c),t.context=l1(null),n=t.current,r=It(),s=Pr(n),i=Hn(r,s),i.callback=e??null,kr(n,i,s),t.current.lanes=s,Va(t,s,r),Ot(t,r),t}function bu(t,e,n,r){var s=e.current,i=It(),o=Pr(s);return n=l1(n),e.context===null?e.context=n:e.pendingContext=n,e=Hn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=kr(s,e,o),t!==null&&(hn(t,s,o,i),Ql(t,s,o)),o}function Oc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function H0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Fp(t,e){H0(t,e),(t=t.alternate)&&H0(t,e)}function aI(){return null}var u1=typeof reportError=="function"?reportError:function(t){console.error(t)};function zp(t){this._internalRoot=t}Eu.prototype.render=zp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(K(409));bu(t,e,null,null)};Eu.prototype.unmount=zp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Is(function(){bu(null,t,null,null)}),e[qn]=null}};function Eu(t){this._internalRoot=t}Eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Uw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hr.length&&e!==0&&e<hr[n].priority;n++);hr.splice(n,0,t),n===0&&Bw(t)}};function Up(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function W0(){}function lI(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=Oc(o);i.call(u)}}var o=c1(e,r,t,0,null,!1,!1,"",W0);return t._reactRootContainer=o,t[qn]=o.current,ha(t.nodeType===8?t.parentNode:t),Is(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var u=Oc(c);a.call(u)}}var c=Vp(t,0,!1,null,null,!1,!1,"",W0);return t._reactRootContainer=c,t[qn]=c.current,ha(t.nodeType===8?t.parentNode:t),Is(function(){bu(e,c,n,r)}),c}function Su(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var c=Oc(o);a.call(c)}}bu(e,o,t,s)}else o=lI(n,e,t,s,r);return Oc(o)}Fw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Po(e.pendingLanes);n!==0&&(op(e,n|1),Ot(e,Fe()),!(ge&6)&&(Ni=Fe()+500,Xr()))}break;case 13:Is(function(){var r=Gn(t,1);if(r!==null){var s=It();hn(r,t,1,s)}}),Fp(t,1)}};ap=function(t){if(t.tag===13){var e=Gn(t,134217728);if(e!==null){var n=It();hn(e,t,134217728,n)}Fp(t,134217728)}};zw=function(t){if(t.tag===13){var e=Pr(t),n=Gn(t,e);if(n!==null){var r=It();hn(n,t,e,r)}Fp(t,e)}};Uw=function(){return we};$w=function(t,e){var n=we;try{return we=t,e()}finally{we=n}};Nh=function(t,e,n){switch(e){case"input":if(Eh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=mu(r);if(!s)throw Error(K(90));ww(r),Eh(r,s)}}}break;case"textarea":_w(t,n);break;case"select":e=n.value,e!=null&&di(t,!!n.multiple,e,!1)}};Aw=Mp;kw=Is;var cI={usingClientEntryPoint:!1,Events:[za,ri,mu,Iw,Cw,Mp]},To={findFiberByHostInstance:fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uI={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rw(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||aI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nl.isDisabled&&Nl.supportsFiber)try{du=Nl.inject(uI),Cn=Nl}catch{}}qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cI;qt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Up(e))throw Error(K(200));return oI(t,e,null,n)};qt.createRoot=function(t,e){if(!Up(t))throw Error(K(299));var n=!1,r="",s=u1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Vp(t,1,!1,null,null,n,!1,r,s),t[qn]=e.current,ha(t.nodeType===8?t.parentNode:t),new zp(e)};qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(K(188)):(t=Object.keys(t).join(","),Error(K(268,t)));return t=Rw(e),t=t===null?null:t.stateNode,t};qt.flushSync=function(t){return Is(t)};qt.hydrate=function(t,e,n){if(!Tu(e))throw Error(K(200));return Su(null,t,e,!0,n)};qt.hydrateRoot=function(t,e,n){if(!Up(t))throw Error(K(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=u1;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=c1(e,null,t,1,n??null,s,!1,i,o),t[qn]=e.current,ha(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Eu(e)};qt.render=function(t,e,n){if(!Tu(e))throw Error(K(200));return Su(null,t,e,!1,n)};qt.unmountComponentAtNode=function(t){if(!Tu(t))throw Error(K(40));return t._reactRootContainer?(Is(function(){Su(null,null,t,!1,function(){t._reactRootContainer=null,t[qn]=null})}),!0):!1};qt.unstable_batchedUpdates=Mp;qt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Tu(n))throw Error(K(200));if(t==null||t._reactInternals===void 0)throw Error(K(38));return Su(t,e,n,!1,r)};qt.version="18.3.1-next-f1338f8080-20240426";function d1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d1)}catch(t){console.error(t)}}d1(),dw.exports=qt;var $p=dw.exports,q0=$p;gh.createRoot=q0.createRoot,gh.hydrateRoot=q0.hydrateRoot;/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dI=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hI=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),G0=t=>{const e=hI(t);return e.charAt(0).toUpperCase()+e.slice(1)},h1=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),fI=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mI=D.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...a},c)=>D.createElement("svg",{ref:c,...pI,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:h1("lucide",s),...!i&&!fI(a)&&{"aria-hidden":"true"},...a},[...o.map(([u,h])=>D.createElement(u,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=(t,e)=>{const n=D.forwardRef(({className:r,...s},i)=>D.createElement(mI,{ref:i,iconNode:e,className:h1(`lucide-${dI(G0(t))}`,`lucide-${t}`,r),...s}));return n.displayName=G0(t),n};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gI=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],yI=ye("arrow-left",gI);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vI=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],f1=ye("arrow-right",vI);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wI=[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]],Vc=ye("bed-double",wI);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xI=[["path",{d:"M16 14v2.2l1.6 1",key:"fo4ql5"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]],_I=ye("calendar-clock",xI);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bI=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],br=ye("check",bI);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EI=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Qo=ye("chevron-down",EI);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TI=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],uf=ye("chevron-left",TI);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SI=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],df=ye("chevron-right",SI);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const II=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],CI=ye("circle-check",II);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AI=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Fc=ye("clipboard-list",AI);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kI=[["path",{d:"M12 6v6h4",key:"135r8i"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],hf=ye("clock-3",kI);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NI=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],PI=ye("credit-card",NI);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RI=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]],jI=ye("droplets",RI);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MI=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],LI=ye("earth",MI);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DI=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],OI=ye("eye-off",DI);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VI=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],FI=ye("eye",VI);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zI=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],zc=ye("layers",zI);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UI=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Uc=ye("loader-circle",UI);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $I=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],BI=ye("lock-keyhole",$I);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HI=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],WI=ye("mail",HI);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qI=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],p1=ye("map-pin",qI);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GI=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],KI=ye("menu",GI);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QI=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],yi=ye("message-circle",QI);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YI=[["path",{d:"M5 12h14",key:"1ays0h"}]],XI=ye("minus",YI);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JI=[["path",{d:"m18 8 4 4-4 4",key:"1ak13k"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}]],ZI=ye("move-horizontal",JI);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],t2=ye("phone",e2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],$a=ye("plus",n2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]],s2=ye("ruler",r2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Bp=ye("shield-check",i2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",key:"1dgpiv"}],["path",{d:"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"xacw8m"}],["path",{d:"M4 18v2",key:"jwo5n2"}],["path",{d:"M20 18v2",key:"1ar1qi"}],["path",{d:"M12 4v9",key:"oqhhn3"}]],_a=ye("sofa",o2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Pi=ye("sparkles",a2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],c2=ye("trash-2",l2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Iu=ye("x",u2),d2={__lang:"ar",home:"الرئيسية",services:"الخدمات",beforeafter:"قبل / بعد",nav:{contact:"تواصل معنا"},heroStatic:"تنظيف احترافي لـ",heroHighlight1:"الكنب",heroHighlight2:"فرشات النوم",heroHighlight3:"السجاد",heroSubtitle:"تنظيف احترافي في بيتك للكنب وفرشات النوم والسجاد، مع إمكانية جمع أكثر من خدمة في طلب واحد. نخدم مناطق الشمال والمركز.",heroButton:"اطلب الخدمة",heroButtonPrimary:"جهّز طلبك",heroButtonSecondary:"شاهد خدماتنا",heroAlt:"خدمات تنظيف في بيت الزبون",whatsappLink:"https://wa.me/972543075619",callLink:"tel:+972543075619",showCallButton:!1,callNow:"اتصال",heroPill1:"الخدمة في بيتك",heroPill2:"الشمال والمركز",heroPill3:"طلب واحد لكل الخدمات",scrollExplore:"استكشف",servicesTitle1:"خدمات",servicesTitle2:"التنظيف",servicesDescription:"اختر خدمة واحدة أو اجمع الكنب والسجاد وفرشات النوم في نفس الطلب، وأدخل تفاصيل كل عنصر لحاله.",sofaTitle:"تنظيف الكنب",sofaDescription:"تنظيف عميق للكنب داخل بيتك. يتم تحديد الطلب حسب عدد المقاعد التي تريد تنظيفها.",mattressTitle:"تنظيف فرشات النوم",mattressDescription:"أضف كل فرشة حسب حجمها: مفرد، مفرد ونص أو مزدوج، وحدد تنظيف وجه واحد أو وجهين.",carpetTitle:"تنظيف السجاد",carpetDescription:"أضف كل سجادة لحالها مع الطول والعرض، أو اختر أن القياسات غير معروفة.",glassTitle:"تنظيف الزجاج",glassDescription:"تنظيف الشبابيك والواجهات الزجاجية للمنازل والمكاتب. الخدمة غير متاحة للحجز حاليًا.",beforeAlt:"قبل",afterAlt:"بعد",beforeAfterTitle:"قبل / بعد",beforeAfterSubtitle:"مقارنة واضحة للنتيجة قبل وبعد التنظيف.",beforeAfterAria:"قبل وبعد",contactTitleSpan:"تواصل",contactTitle:"معنا",contactSubtitle:"عندك استفسار أو ملاحظة؟ أرسل لنا رسالة وسنرد عليك.",contactSubjectLabel:"موضوع",contactNameLabel:"الاسم",contactPhoneLabel:"الهاتف",contactMessageLabel:"الرسالة",contactPhName:"الاسم الكامل",contactPhPhone:"رقم الهاتف",contactPhMessageInquiry:"اكتب سؤالك أو طلبك…",contactPhMessageBooking:"اكتب الخدمات والتفاصيل المناسبة…",contactPhMessageComplaint:"اكتب الشكوى…",contactPhMessageOther:"اكتب رسالتك…",contactSend:"إرسال",contactSending:"جارٍ الإرسال...",contactSent:"تم الإرسال!",contactNeedMore:"أكمل الحقول",contactAssistName:"اكتب اسمك الكامل كما سيظهر بالتواصل.",contactAssistPhone:"يفضّل رقم متاح على واتساب لسهولة الرد.",contactAssistMsg:"اكتب الخدمات المطلوبة والتفاصيل المهمة.",contactErrSubject:"اختر الموضوع",contactErrName:"اكتب اسمك",contactErrPhoneEmpty:"أدخل رقمك",contactErrPhoneInvalid:"رقم غير صالح",contactErrMessage:"اكتب الرسالة",contactMoreOpts:"خيارات إضافية",contactMoreOptsHide:"إخفاء الخيارات",contactPrefTitle:"طريقة التواصل المفضّلة",contactPrefPhone:"اتصال",contactPrefWA:"واتساب",contactPrefEither:"لا فرق",contactPrefSummary:"المفضّل:",contactClearPrefA11y:"إزالة التفضيل",contactWAButton:"واتساب",contactWAPreviewTitle:"معاينة واتساب",contactWAOpenNow:"فتح واتساب الآن",contactWACopy:"نسخ النص",contactWAPreviewClose:"إغلاق المعاينة",contactSavedHint:"تم حفظ بياناتك محليًا.",commonClose:"إغلاق",header:{brand:"Lumora",menu_title:"القائمة الرئيسية",services:"الخدمات",gallery:"معرض النتائج",contact:"تواصل معنا",sofa_clean:"تنظيف الكنب",mattress_clean:"تنظيف فرشات النوم",carpet_clean:"تنظيف السجاد",glass_clean:"تنظيف الزجاج",choose_language:"اختر اللغة",ar:"العربية",en:"الإنجليزية",he:"العبرية"},contact:{titleSpan:"تواصل",title:"معنا",subtitle:"عندك استفسار أو ملاحظة؟ أرسل لنا رسالة وسنرد عليك."},common:{close:"إغلاق",opening:"جاري الفتح…"},services:{section:{badge:"خدمات تنظيف في بيت الزبون",title:"اختر الخدمات",titleAccent:"المناسبة لك",subtitle:"أضف أي عدد من خدمات الكنب والسجاد وفرشات النوم، وحدد تفاصيل كل عنصر، ثم أرسل الطلب كاملًا عبر واتساب."},actions:{details:"عرض الخدمة",book:"أضف للطلب"},badges:{popular:"الأكثر طلبًا",fast:"إضافة سريعة"},modal:{includesTitle:"ماذا تشمل الخدمة؟",moreDetails:"أضف الخدمات والتفاصيل الأساسية، ثم تابع الطلب عبر واتساب.",footerHint:"يمكنك جمع أكثر من خدمة في نفس الطلب",quickQuestion:"اسأل عن الخدمة",bookNow:"أضف للطلب",sofaSeatsLabel:"عدد مقاعد الكنب",sofaSeatsHint:"احسب مجموع المقاعد التي تريد تنظيفها.",mattressCountLabel:"عدد فرشات النوم",mattressSizeLabel:"حجم الفرشة",mattressSidesLabel:"عدد الأوجه",carpetLengthLabel:"الطول بالمتر",carpetWidthLabel:"العرض بالمتر"},order:{title:"جهّز طلبك",subtitle:"أضف كل خدمة وكل عنصر بتفاصيله، ثم أرسل رسالة واتساب واحدة.",addSofa:"إضافة كنب",addCarpet:"إضافة سجادة",addMattress:"إضافة فرشة نوم",viewOrder:"عرض الطلب",clearOrder:"مسح الطلب",sendOrder:"إرسال الطلب عبر واتساب"},whatsapp:{questionIntro:"مرحبًا، أنا مهتم بخدمة {title}.",questionOutro:"ممكن تفاصيل أكثر؟",bookIntro:"مرحبًا، أريد طلب خدمات تنظيف في موقعي.",bookOutro:"سأرسل الصور اللازمة عبر واتساب.",sofaSeats:"عدد مقاعد الكنب: {count}",mattressDetails:"العدد: {count} | الحجم: {size} | التنظيف: {sides}",carpetMeasurements:"الطول: {length} متر × العرض: {width} متر"}}},h2={__lang:"en",home:"Home",services:"Services",beforeafter:"Before / After",nav:{contact:"Contact Us"},heroStatic:"Professional cleaning for",heroHighlight1:"sofas",heroHighlight2:"mattresses",heroHighlight3:"carpets",heroSubtitle:"Professional sofa, mattress, and carpet cleaning at your home. Combine several services and different items in one clear order. Available across northern and central areas.",heroButton:"Request Service",heroButtonPrimary:"Build Your Order",heroButtonSecondary:"View Our Services",heroAlt:"Professional cleaning service at the customer’s home",whatsappLink:"https://wa.me/972543075619",callLink:"tel:+972543075619",showCallButton:!1,callNow:"Call",heroPill1:"Service at your home",heroPill2:"North and center",heroPill3:"One order for all services",scrollExplore:"Explore",servicesTitle1:"Cleaning",servicesTitle2:"Services",servicesDescription:"Choose one service or combine sofas, carpets, and mattresses in the same order. Add the details of every item separately.",sofaTitle:"Sofa Cleaning",sofaDescription:"Deep sofa cleaning at your home. The order is calculated according to the total number of sofa seats you want cleaned.",mattressTitle:"Mattress Cleaning",mattressDescription:"Add each mattress according to its size: single, single-and-a-half, or double, and choose cleaning for one side or both sides.",carpetTitle:"Carpet Cleaning",carpetDescription:"Add each carpet separately with its length and width, or mark its measurements as unknown.",glassTitle:"Glass Cleaning",glassDescription:"Window and glass-front cleaning for homes and offices. This service is currently unavailable for booking.",beforeAlt:"Before",afterAlt:"After",beforeAfterTitle:"Before / After",beforeAfterSubtitle:"A clear comparison of the result before and after cleaning.",beforeAfterAria:"Before and after",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",contactTitleSpan:"Contact",contactTitle:"Us",contactSubtitle:"Have a question or note? Send us a message and we will get back to you.",contactSubjectLabel:"Subject",contactNameLabel:"Name",contactPhoneLabel:"Phone",contactMessageLabel:"Message",contactPhName:"Full name",contactPhPhone:"Phone number",contactPhMessageInquiry:"Write your question or request…",contactPhMessageBooking:"Write the requested services and details…",contactPhMessageComplaint:"Write your complaint…",contactPhMessageOther:"Write your message…",contactSend:"Send",contactSending:"Sending...",contactSent:"Sent!",contactNeedMore:"Complete the fields",contactAssistName:"Enter your full name as it should appear when we contact you.",contactAssistPhone:"A number available on WhatsApp is preferred for an easier response.",contactAssistMsg:"Write the requested services and the important details.",contactErrSubject:"Choose a subject",contactErrName:"Enter your name",contactErrPhoneEmpty:"Enter your phone number",contactErrPhoneInvalid:"Invalid phone number",contactErrMessage:"Enter your message",contactMoreOpts:"Additional options",contactMoreOptsHide:"Hide options",contactPrefTitle:"Preferred contact method",contactPrefPhone:"Phone call",contactPrefWA:"WhatsApp",contactPrefEither:"Either",contactPrefSummary:"Preferred:",contactClearPrefA11y:"Clear preference",contactWAButton:"WhatsApp",contactWAPreviewTitle:"WhatsApp Preview",contactWAOpenNow:"Open WhatsApp Now",contactWACopy:"Copy Text",contactWAPreviewClose:"Close Preview",contactSavedHint:"Your information has been saved locally.",commonClose:"Close",header:{brand:"Lumora",menu_title:"Main Menu",services:"Services",gallery:"Results Gallery",contact:"Contact Us",sofa_clean:"Sofa Cleaning",mattress_clean:"Mattress Cleaning",carpet_clean:"Carpet Cleaning",glass_clean:"Glass Cleaning",choose_language:"Choose Language",ar:"Arabic",en:"English",he:"Hebrew"},contact:{titleSpan:"Contact",title:"Us",subtitle:"Have a question or note? Send us a message and we will get back to you."},common:{close:"Close",opening:"Opening…"},services:{section:{badge:"Cleaning services at your home",title:"Choose the",titleAccent:"services you need",subtitle:"Add any number of sofa, carpet, and mattress services. Enter the details of every item, then send the complete order through WhatsApp."},actions:{details:"View Service",book:"Add to Order"},badges:{popular:"Most Popular",fast:"Quick Add"},modal:{includesTitle:"What does the service include?",moreDetails:"Add the requested services and basic details, then continue through WhatsApp.",footerHint:"You can combine several services in the same order",quickQuestion:"Ask About the Service",bookNow:"Add to Order",sofaSeatsLabel:"Number of Sofa Seats",sofaSeatsHint:"Enter the total number of seats you want cleaned.",mattressCountLabel:"Number of Mattresses",mattressSizeLabel:"Mattress Size",mattressSidesLabel:"Cleaning Sides",carpetLengthLabel:"Length in Meters",carpetWidthLabel:"Width in Meters"},order:{title:"Build Your Order",subtitle:"Add every service and item with its own details, then send one WhatsApp message.",addSofa:"Add Sofa",addCarpet:"Add Carpet",addMattress:"Add Mattress",viewOrder:"View Order",clearOrder:"Clear Order",sendOrder:"Send Order Through WhatsApp",location:"Town",locationPlaceholder:"Enter your town",notes:"Additional Notes",notesPlaceholder:"Example: stairs, high floor, or specific stains…",sofaSection:"Sofas",carpetSection:"Carpets",mattressSection:"Mattresses",sofaSeats:"Number of Seats",carpetLength:"Length in Meters",carpetWidth:"Width in Meters",carpetUnknown:"I do not know the measurements",mattressCount:"Number of Mattresses",mattressSize:"Size",mattressSides:"Cleaning Sides",single:"Single",singleAndHalf:"Single and a Half",double:"Double",oneSide:"One Side",twoSides:"Both Sides",addAnotherSofa:"Add Another Sofa",addAnotherCarpet:"Add Another Carpet",addAnotherMattress:"Add Another Mattress Combination",removeItem:"Remove Item"},whatsapp:{questionIntro:"Hello, I am interested in {title}.",questionOutro:"Could you provide more details?",bookIntro:"Hello, I would like to request cleaning services at my location.",bookOutro:"I will send the necessary photos through WhatsApp.",sofaSeats:"Number of sofa seats: {count}",mattressDetails:"Quantity: {count} | Size: {size} | Cleaning: {sides}",carpetMeasurements:"Length: {length} m × Width: {width} m",carpetUnknown:"Measurements are unknown"}}},f2={__lang:"he",home:"ראשי",services:"שירותים",beforeafter:"לפני / אחרי",nav:{contact:"צור קשר"},heroStatic:"ניקוי מקצועי של",heroHighlight1:"ספות",heroHighlight2:"מזרנים",heroHighlight3:"שטיחים",heroSubtitle:"ניקוי מקצועי של ספות, מזרנים ושטיחים בבית הלקוח. ניתן לשלב מספר שירותים ופריטים שונים בהזמנה אחת ברורה. השירות זמין באזורי הצפון והמרכז.",heroButton:"הזמנת שירות",heroButtonPrimary:"בניית ההזמנה",heroButtonSecondary:"צפייה בשירותים",heroAlt:"שירות ניקיון מקצועי בבית הלקוח",whatsappLink:"https://wa.me/972543075619",callLink:"tel:+972543075619",showCallButton:!1,callNow:"התקשרו",heroPill1:"שירות בבית הלקוח",heroPill2:"צפון ומרכז",heroPill3:"הזמנה אחת לכל השירותים",scrollExplore:"גלו עוד",servicesTitle1:"שירותי",servicesTitle2:"ניקיון",servicesDescription:"בחרו שירות אחד או שלבו ספות, שטיחים ומזרנים באותה הזמנה. ניתן להזין את הפרטים של כל פריט בנפרד.",sofaTitle:"ניקוי ספות",sofaDescription:"ניקוי עמוק של ספות בביתכם. ההזמנה מחושבת לפי מספר המושבים הכולל שתרצו לנקות.",mattressTitle:"ניקוי מזרנים",mattressDescription:"הוסיפו כל מזרן לפי גודלו: יחיד, מיטה וחצי או זוגי, ובחרו ניקוי צד אחד או שני צדדים.",carpetTitle:"ניקוי שטיחים",carpetDescription:"הוסיפו כל שטיח בנפרד עם האורך והרוחב שלו, או סמנו שהמידות אינן ידועות.",glassTitle:"ניקוי זכוכית",glassDescription:"ניקוי חלונות וחזיתות זכוכית בבתים ובמשרדים. השירות אינו זמין כרגע להזמנה.",beforeAlt:"לפני",afterAlt:"אחרי",beforeAfterTitle:"לפני / אחרי",beforeAfterSubtitle:"השוואה ברורה בין המצב לפני הניקוי לבין התוצאה אחריו.",beforeAfterAria:"לפני ואחרי",enterFullscreen:"מסך מלא",exitFullscreen:"יציאה ממסך מלא",contactTitleSpan:"צרו",contactTitle:"קשר",contactSubtitle:"יש לכם שאלה או הערה? שלחו לנו הודעה ונחזור אליכם.",contactSubjectLabel:"נושא",contactNameLabel:"שם",contactPhoneLabel:"טלפון",contactMessageLabel:"הודעה",contactPhName:"שם מלא",contactPhPhone:"מספר טלפון",contactPhMessageInquiry:"כתבו את השאלה או הבקשה שלכם…",contactPhMessageBooking:"כתבו את השירותים והפרטים המבוקשים…",contactPhMessageComplaint:"כתבו את התלונה שלכם…",contactPhMessageOther:"כתבו את ההודעה שלכם…",contactSend:"שליחה",contactSending:"שולח...",contactSent:"נשלח!",contactNeedMore:"יש להשלים את השדות",contactAssistName:"הזינו את שמכם המלא כפי שיופיע ביצירת הקשר.",contactAssistPhone:"מומלץ להזין מספר הזמין ב-WhatsApp לצורך מענה מהיר.",contactAssistMsg:"כתבו את השירותים המבוקשים ואת הפרטים החשובים.",contactErrSubject:"יש לבחור נושא",contactErrName:"יש להזין שם",contactErrPhoneEmpty:"יש להזין מספר טלפון",contactErrPhoneInvalid:"מספר הטלפון אינו תקין",contactErrMessage:"יש להזין הודעה",contactMoreOpts:"אפשרויות נוספות",contactMoreOptsHide:"הסתרת אפשרויות",contactPrefTitle:"דרך יצירת קשר מועדפת",contactPrefPhone:"שיחת טלפון",contactPrefWA:"WhatsApp",contactPrefEither:"אין העדפה",contactPrefSummary:"מועדף:",contactClearPrefA11y:"הסרת ההעדפה",contactWAButton:"WhatsApp",contactWAPreviewTitle:"תצוגה מקדימה של WhatsApp",contactWAOpenNow:"פתיחת WhatsApp עכשיו",contactWACopy:"העתקת הטקסט",contactWAPreviewClose:"סגירת התצוגה",contactSavedHint:"הפרטים שלכם נשמרו במכשיר.",commonClose:"סגירה",header:{brand:"Lumora",menu_title:"תפריט ראשי",services:"שירותים",gallery:"גלריית תוצאות",contact:"צור קשר",sofa_clean:"ניקוי ספות",mattress_clean:"ניקוי מזרנים",carpet_clean:"ניקוי שטיחים",glass_clean:"ניקוי זכוכית",choose_language:"בחירת שפה",ar:"ערבית",en:"אנגלית",he:"עברית"},contact:{titleSpan:"צרו",title:"קשר",subtitle:"יש לכם שאלה או הערה? שלחו לנו הודעה ונחזור אליכם."},common:{close:"סגירה",opening:"נפתח…"},services:{section:{badge:"שירותי ניקיון בבית הלקוח",title:"בחרו את",titleAccent:"השירותים המתאימים",subtitle:"הוסיפו כל מספר של שירותי ספות, שטיחים ומזרנים. הזינו את הפרטים של כל פריט ושלחו את ההזמנה המלאה דרך WhatsApp."},actions:{details:"צפייה בשירות",book:"הוספה להזמנה"},badges:{popular:"הכי מבוקש",fast:"הוספה מהירה"},modal:{includesTitle:"מה כולל השירות?",moreDetails:"הוסיפו את השירותים והפרטים המבוקשים ולאחר מכן המשיכו דרך WhatsApp.",footerHint:"ניתן לשלב מספר שירותים באותה הזמנה",quickQuestion:"שאלה על השירות",bookNow:"הוספה להזמנה",sofaSeatsLabel:"מספר מושבי הספה",sofaSeatsHint:"הזינו את מספר המושבים הכולל שתרצו לנקות.",mattressCountLabel:"מספר המזרנים",mattressSizeLabel:"גודל המזרן",mattressSidesLabel:"צדדי ניקוי",carpetLengthLabel:"אורך במטרים",carpetWidthLabel:"רוחב במטרים"},order:{title:"בניית ההזמנה",subtitle:"הוסיפו כל שירות ופריט עם הפרטים שלו ושלחו הודעת WhatsApp אחת.",addSofa:"הוספת ספה",addCarpet:"הוספת שטיח",addMattress:"הוספת מזרן",viewOrder:"צפייה בהזמנה",clearOrder:"ניקוי ההזמנה",sendOrder:"שליחת ההזמנה דרך WhatsApp",location:"יישוב",locationPlaceholder:"הקלידו את שם היישוב",notes:"הערות נוספות",notesPlaceholder:"לדוגמה: מדרגות, קומה גבוהה או כתמים מסוימים…",sofaSection:"ספות",carpetSection:"שטיחים",mattressSection:"מזרנים",sofaSeats:"מספר מושבים",carpetLength:"אורך במטרים",carpetWidth:"רוחב במטרים",carpetUnknown:"אינני יודע/ת את המידות",mattressCount:"מספר מזרנים",mattressSize:"גודל",mattressSides:"צדדי ניקוי",single:"יחיד",singleAndHalf:"מיטה וחצי",double:"זוגי",oneSide:"צד אחד",twoSides:"שני צדדים",addAnotherSofa:"הוספת ספה נוספת",addAnotherCarpet:"הוספת שטיח נוסף",addAnotherMattress:"הוספת שילוב מזרנים נוסף",removeItem:"הסרת הפריט"},whatsapp:{questionIntro:"שלום, אני מתעניין/ת בשירות {title}.",questionOutro:"אפשר לקבל פרטים נוספים?",bookIntro:"שלום, אני רוצה להזמין שירותי ניקיון במיקום שלי.",bookOutro:"אשלח את התמונות הדרושות דרך WhatsApp.",sofaSeats:"מספר מושבי הספה: {count}",mattressDetails:"כמות: {count} | גודל: {size} | ניקוי: {sides}",carpetMeasurements:"אורך: {length} מ׳ × רוחב: {width} מ׳",carpetUnknown:"המידות אינן ידועות"}}},m1=D.createContext(null),ff="lumora-language",Fd={ar:d2,en:h2,he:f2},p2=new Set(["ar","he","en"]),g1=new Set(["ar","he"]);function $c(t){if(typeof t!="string")return null;const e=t.trim().toLowerCase().split(/[-_]/)[0];return p2.has(e)?e:null}function m2(){var e,n;if(typeof window>"u")return"ar";try{const r=$c(window.localStorage.getItem(ff));if(r)return r}catch{}const t=Array.isArray((e=window.navigator)==null?void 0:e.languages)?window.navigator.languages:[(n=window.navigator)==null?void 0:n.language];for(const r of t){const s=$c(r);if(s)return s}return"ar"}function K0(t,e){if(!(!t||!e))return String(e).split(".").reduce((n,r)=>{if(n&&Object.prototype.hasOwnProperty.call(n,r))return n[r]},t)}function g2(t,e){return t==null?"":e?String(t).replace(/\{(\w+)\}/g,(n,r)=>{const s=e[r];return s==null?"":String(s)}):String(t)}function y2(t){if(typeof document>"u")return;const e=g1.has(t)?"rtl":"ltr";document.documentElement.lang=t,document.documentElement.dir=e,document.body&&(document.body.lang=t,document.body.dir=e)}function v2({children:t}){const[e,n]=D.useState(m2),r=D.useCallback(a=>{n(c=>{const u=typeof a=="function"?a(c):a;return $c(u)||c})},[]),s=g1.has(e),i=s?"rtl":"ltr";D.useEffect(()=>{y2(e);try{window.localStorage.setItem(ff,e)}catch{}},[e]),D.useEffect(()=>{const a=c=>{if(c.key!==ff)return;const u=$c(c.newValue);u&&n(u)};return window.addEventListener("storage",a),()=>{window.removeEventListener("storage",a)}},[]);const o=D.useMemo(()=>{const a=Fd[e]||Fd.ar,c=Fd.ar;return{lang:e,setLang:r,t:a,tFn:(h,p)=>{const m=K0(a,h)??K0(c,h);return m==null||typeof m=="object"?h:g2(m,p)},isRTL:s,dir:i,supportedLanguages:["ar","he","en"]}},[i,s,e,r]);return d.jsx(m1.Provider,{value:o,children:t})}function kt(){const t=D.useContext(m1);if(!t)throw new Error("useLanguage must be used inside LanguageProvider");return t}const w2=[{code:"ar",short:"AR",label:"العربية"},{code:"en",short:"EN",label:"English"},{code:"he",short:"HE",label:"עברית"}];function x2({menuOpen:t,setMenuOpen:e,navItems:n=[],scrollToSection:r,activeId:s,hintText:i,labels:o}){const{lang:a,setLang:c}=kt(),u=a==="ar"||a==="he",h=u?"rtl":"ltr",p=D.useRef(null),[m,_]=D.useState(null),E=D.useMemo(()=>u?uf:df,[u]),j=D.useMemo(()=>a==="he"?{menuTitle:"תפריט ראשי",menuSubtitle:"ניווט מהיר באתר",languageTitle:"בחירת שפה",allServices:"כל השירותים",close:"סגירת התפריט",active:"פעיל",brandSub:"CLEANING"}:a==="en"?{menuTitle:"Main menu",menuSubtitle:"Quick website navigation",languageTitle:"Choose language",allServices:"All services",close:"Close menu",active:"Active",brandSub:"CLEANING"}:{menuTitle:"القائمة الرئيسية",menuSubtitle:"تنقّل سريع داخل الموقع",languageTitle:"اختر اللغة",allServices:"كل الخدمات",close:"إغلاق القائمة",active:"محدد",brandSub:"CLEANING"},[a]),k=D.useCallback(()=>{e(!1),_(null)},[e]),b=D.useCallback(v=>{if(v)try{r==null||r(v)}finally{k()}},[k,r]);if(D.useEffect(()=>{if(!t){_(null);return}const v=document.body.style.overflow;document.body.style.overflow="hidden";const R=L=>{L.key==="Escape"&&k()};window.addEventListener("keydown",R);const V=window.setTimeout(()=>{var L;(L=p.current)==null||L.focus()},30);return()=>{window.clearTimeout(V),window.removeEventListener("keydown",R),document.body.style.overflow=v}},[k,t]),D.useEffect(()=>{if(!t)return;const v=n.find(R=>{var V;return(V=R==null?void 0:R.subItems)==null?void 0:V.some(L=>L.id===s)});v!=null&&v.id&&_(v.id)},[s,t,n]),!t||typeof document>"u")return null;const y=d.jsxs("div",{className:"fixed inset-0 z-[10000]",role:"presentation",dir:h,children:[d.jsx("button",{type:"button","aria-label":j.close,onClick:k,className:`\r
          absolute\r
          inset-0\r
          h-full\r
          w-full\r
          cursor-default\r
          bg-[rgba(3,7,24,0.76)]\r
          backdrop-blur-sm\r
        `}),d.jsxs("aside",{ref:p,tabIndex:-1,role:"dialog","aria-modal":"true","aria-label":j.menuTitle,className:["absolute top-0 h-[100dvh]","w-[min(92vw,390px)]","overflow-hidden","border-white/10","bg-gradient-to-b","from-[var(--lumora-navy-900)]","via-[var(--lumora-navy-950)]","to-[#050817]","text-white","shadow-[0_0_80px_rgba(0,0,0,0.55)]","focus:outline-none",u?"right-0 border-l":"left-0 border-r"].join(" "),children:[d.jsx("img",{src:"/lumora-icon.png",alt:"","aria-hidden":"true",draggable:!1,className:["pointer-events-none","absolute -top-24","h-72 w-72","select-none object-contain","opacity-[0.055]",u?"-left-24":"-right-24"].join(" ")}),d.jsx("div",{"aria-hidden":"true",className:`\r
            pointer-events-none\r
            absolute\r
            -right-24\r
            top-28\r
            h-56\r
            w-56\r
            rounded-full\r
            bg-[rgba(16,148,192,0.16)]\r
            blur-3xl\r
          `}),d.jsx("div",{"aria-hidden":"true",className:`\r
            pointer-events-none\r
            absolute\r
            -bottom-24\r
            -left-20\r
            h-64\r
            w-64\r
            rounded-full\r
            bg-[rgba(174,221,57,0.10)]\r
            blur-3xl\r
          `}),d.jsxs("div",{className:"relative z-10 flex h-full flex-col",children:[d.jsxs("div",{className:`\r
              shrink-0\r
              border-b\r
              border-white/[0.08]\r
              px-4\r
              pb-4\r
              pt-[max(16px,env(safe-area-inset-top))]\r
            `,children:[d.jsxs("div",{className:"flex items-center justify-between gap-3",children:[d.jsxs("button",{type:"button",onClick:()=>b("home"),className:`\r
                  flex\r
                  min-w-0\r
                  items-center\r
                  gap-3\r
                  rounded-2xl\r
                  text-start\r
                `,children:[d.jsx("span",{className:`\r
                    flex\r
                    h-14\r
                    w-14\r
                    shrink-0\r
                    items-center\r
                    justify-center\r
                    overflow-hidden\r
                    rounded-full\r
                    border\r
                    border-[rgba(174,221,57,0.38)]\r
                    bg-[var(--lumora-navy-900)]\r
                    shadow-[0_0_28px_rgba(16,148,192,0.18)]\r
                  `,children:d.jsx("img",{src:"/lumora-icon.png",alt:"Lumora",draggable:!1,className:"h-full w-full object-cover"})}),d.jsxs("span",{className:"min-w-0",children:[d.jsx("span",{className:`\r
                      block\r
                      truncate\r
                      text-lg\r
                      font-black\r
                      leading-none\r
                      tracking-[0.08em]\r
                      text-white\r
                    `,children:"LUMORA"}),d.jsx("span",{className:`\r
                      mt-1.5\r
                      block\r
                      text-[9px]\r
                      font-black\r
                      leading-none\r
                      tracking-[0.32em]\r
                      text-[var(--lumora-lime)]\r
                    `,children:j.brandSub})]})]}),d.jsx("button",{type:"button",onClick:k,"aria-label":j.close,className:`\r
                  flex\r
                  h-11\r
                  w-11\r
                  shrink-0\r
                  items-center\r
                  justify-center\r
                  rounded-2xl\r
                  border\r
                  border-white/10\r
                  bg-white/[0.06]\r
                  text-white\r
                  transition\r
                  hover:border-[rgba(66,204,227,0.28)]\r
                  hover:bg-white/[0.10]\r
                  active:scale-95\r
                `,children:d.jsx(Iu,{"aria-hidden":"true",className:"h-5 w-5"})})]}),d.jsxs("div",{className:"mt-4",children:[d.jsxs("div",{className:`\r
                  inline-flex\r
                  items-center\r
                  gap-2\r
                  rounded-full\r
                  border\r
                  border-[rgba(174,221,57,0.18)]\r
                  bg-[rgba(174,221,57,0.07)]\r
                  px-3\r
                  py-1.5\r
                `,children:[d.jsx(Pi,{"aria-hidden":"true",className:"h-3.5 w-3.5 text-[var(--lumora-lime)]"}),d.jsx("span",{className:`\r
                    text-[11px]\r
                    font-extrabold\r
                    text-[var(--lumora-lime-light)]\r
                  `,children:j.menuTitle})]}),d.jsx("p",{className:"mt-2 text-xs leading-5 text-white/55",children:i||j.menuSubtitle})]})]}),d.jsx("div",{className:`\r
              min-h-0\r
              flex-1\r
              overflow-y-auto\r
              overscroll-contain\r
              px-3\r
              py-4\r
            `,children:d.jsx("nav",{"aria-label":j.menuTitle,className:"space-y-2",children:n.map(v=>{const R=Array.isArray(v.subItems)&&v.subItems.length>0,V=R?v.subItems.some(x=>x.id===s):!1,L=s===v.id||V,S=m===v.id;return R?d.jsxs("div",{className:["overflow-hidden rounded-[22px] border",L?["border-[rgba(174,221,57,0.24)]","bg-[rgba(174,221,57,0.055)]"].join(" "):["border-white/[0.07]","bg-white/[0.03]"].join(" ")].join(" "),children:[d.jsxs("button",{type:"button",onClick:()=>{_(x=>x===v.id?null:v.id)},"aria-expanded":S,className:["flex w-full items-center gap-3","px-4 py-3.5","text-start text-sm font-extrabold","transition",L?"text-[var(--lumora-lime-light)]":"text-white/80 hover:bg-white/[0.04] hover:text-white"].join(" "),children:[d.jsx("span",{className:["h-2 w-2 shrink-0 rounded-full",L?["bg-[var(--lumora-lime)]","shadow-[0_0_0_5px_rgba(174,221,57,0.10)]"].join(" "):"bg-white/20"].join(" ")}),d.jsx("span",{className:"flex-1",children:v.label}),d.jsx(Qo,{"aria-hidden":"true",className:["h-4 w-4 shrink-0 transition-transform duration-200",S?"rotate-180 text-[var(--lumora-lime)]":"text-white/35"].join(" ")})]}),S&&d.jsxs("div",{className:`\r
                          border-t\r
                          border-white/[0.07]\r
                          px-2\r
                          pb-2\r
                          pt-2\r
                        `,children:[d.jsxs("button",{type:"button",onClick:()=>b(v.id),className:["mb-1 flex w-full items-center gap-3","rounded-xl px-3 py-3","text-start text-sm font-bold","transition",s===v.id?["bg-[rgba(174,221,57,0.10)]","text-[var(--lumora-lime-light)]"].join(" "):["text-white/64","hover:bg-white/[0.055]","hover:text-white"].join(" ")].join(" "),children:[d.jsx("span",{className:`\r
                              h-1.5\r
                              w-1.5\r
                              shrink-0\r
                              rounded-full\r
                              bg-[var(--lumora-cyan)]\r
                            `}),d.jsx("span",{className:"flex-1",children:j.allServices}),s===v.id&&d.jsx(br,{"aria-hidden":"true",className:"h-4 w-4"})]}),v.subItems.map(x=>{const T=x.icon,I=s===x.id;return d.jsxs("button",{type:"button",onClick:()=>b(x.id),className:["flex w-full items-center gap-3","rounded-xl px-3 py-2.5","text-start text-sm font-bold","transition",I?["bg-[rgba(16,148,192,0.13)]","text-[var(--lumora-cyan-light)]"].join(" "):["text-white/68","hover:bg-white/[0.055]","hover:text-white"].join(" ")].join(" "),children:[d.jsx("span",{className:["flex h-9 w-9 shrink-0","items-center justify-center","rounded-xl border",I?["border-[rgba(66,204,227,0.28)]","bg-[rgba(16,148,192,0.13)]","text-[var(--lumora-cyan-light)]"].join(" "):["border-white/[0.07]","bg-white/[0.04]","text-white/48"].join(" ")].join(" "),children:T?d.jsx(T,{"aria-hidden":"true",className:"h-[18px] w-[18px]"}):d.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-current"})}),d.jsx("span",{className:"flex-1",children:x.label}),I?d.jsx(br,{"aria-hidden":"true",className:"h-4 w-4"}):d.jsx(E,{"aria-hidden":"true",className:"h-4 w-4 text-white/22"})]},x.id)})]})]},v.id):d.jsxs("button",{type:"button",onClick:()=>b(v.id),"aria-current":L?"page":void 0,className:["group flex w-full items-center gap-3","rounded-2xl border px-4 py-3.5","text-start text-sm font-extrabold","transition-all duration-200",L?["border-[rgba(174,221,57,0.28)]","bg-[rgba(174,221,57,0.10)]","text-[var(--lumora-lime-light)]","shadow-[inset_0_0_22px_rgba(174,221,57,0.035)]"].join(" "):["border-white/[0.07]","bg-white/[0.035]","text-white/78","hover:border-[rgba(66,204,227,0.22)]","hover:bg-white/[0.07]","hover:text-white"].join(" ")].join(" "),children:[d.jsx("span",{className:["h-2 w-2 shrink-0 rounded-full","transition",L?["bg-[var(--lumora-lime)]","shadow-[0_0_0_5px_rgba(174,221,57,0.10)]"].join(" "):"bg-white/20 group-hover:bg-[var(--lumora-cyan-light)]"].join(" ")}),d.jsx("span",{className:"flex-1",children:v.label}),L?d.jsx(br,{"aria-hidden":"true",className:"h-4 w-4 shrink-0"}):d.jsx(E,{"aria-hidden":"true",className:`\r
                            h-4\r
                            w-4\r
                            shrink-0\r
                            text-white/28\r
                            transition\r
                            group-hover:text-[var(--lumora-cyan-light)]\r
                          `})]},v.id)})})}),d.jsxs("div",{className:`\r
              shrink-0\r
              border-t\r
              border-white/[0.08]\r
              bg-black/10\r
              px-4\r
              pb-[max(18px,env(safe-area-inset-bottom))]\r
              pt-4\r
            `,children:[d.jsxs("div",{className:"mb-3 flex items-center gap-2",children:[d.jsx(LI,{"aria-hidden":"true",className:"h-4 w-4 text-[var(--lumora-cyan-light)]"}),d.jsx("span",{className:"text-xs font-extrabold text-white/65",children:j.languageTitle})]}),d.jsx("div",{className:"grid grid-cols-3 gap-2",children:w2.map(v=>{const R=v.code===a;return d.jsxs("button",{type:"button",onClick:()=>c(v.code),"aria-pressed":R,className:["relative flex min-h-12 flex-col","items-center justify-center","rounded-2xl border px-2 py-2","transition-all duration-200",R?["border-[rgba(174,221,57,0.32)]","bg-[rgba(174,221,57,0.10)]","text-[var(--lumora-lime-light)]"].join(" "):["border-white/[0.08]","bg-white/[0.035]","text-white/62","hover:border-[rgba(66,204,227,0.24)]","hover:bg-white/[0.065]","hover:text-white"].join(" ")].join(" "),children:[d.jsx("span",{className:"text-xs font-black",children:v.short}),d.jsx("span",{className:"mt-0.5 text-[9px] font-bold opacity-70",children:v.label}),R&&d.jsx("span",{className:`\r
                          absolute\r
                          right-1.5\r
                          top-1.5\r
                          flex\r
                          h-4\r
                          w-4\r
                          items-center\r
                          justify-center\r
                          rounded-full\r
                          bg-[var(--lumora-lime)]\r
                          text-[var(--lumora-navy-950)]\r
                        `,children:d.jsx(br,{"aria-hidden":"true",className:"h-2.5 w-2.5"})})]},v.code)})})]})]})]})]});return $p.createPortal(y,document.body)}const Q0={ar:{title:"كيف نقدر نساعدك؟",subtitle:"للاستفسار عن خدمات التنظيف وتنسيق المواعيد",wa:"راسلنا على واتساب",call:"اتصل بنا",hint:"أرسل تفاصيل الخدمة والصور",close:"إغلاق",message:"مرحبًا، حابب أستفسر عن خدمات التنظيف لدى Lumora."},he:{title:"איך נוכל לעזור?",subtitle:"לשאלות על שירותי הניקיון ולתיאום מועד",wa:"שלחו לנו הודעה בוואטסאפ",call:"התקשרו אלינו",hint:"שלחו פרטים ותמונות",close:"סגירה",message:"שלום, אשמח לפרטים על שירותי הניקיון של Lumora."},en:{title:"How can we help?",subtitle:"Ask about cleaning services or arrange a visit",wa:"Message us on WhatsApp",call:"Call us",hint:"Send service details and photos",close:"Close",message:"Hi, I'd like to ask about Lumora's cleaning services."}};function _2({open:t,onClose:e,contacts:n=[]}){const{lang:r}=kt(),s=Q0[r]||Q0.ar,i=r==="en"?"ltr":"rtl",o=D.useId(),a=D.useId(),c=D.useRef(null),u=D.useRef(e);u.current=e;const h=n.find(j=>j.id==="amir"),p=!!(t&&h);if(D.useEffect(()=>{if(!p)return;const j=c.current;if(!j)return;const k=document.activeElement,b=document.body.style.overflow;return j.showModal(),document.body.style.overflow="hidden",()=>{j.open&&j.close(),document.body.style.overflow=b,k instanceof HTMLElement&&k.isConnected&&k.focus({preventScroll:!0})}},[p]),!p||typeof document>"u")return null;const m=String(h.whatsappRaw||"").replace(/\D/g,""),_=String(h.phoneRaw||"").replace(/[^\d+]/g,""),E=`https://wa.me/${m}?text=${encodeURIComponent(s.message)}`;return $p.createPortal(d.jsxs(d.Fragment,{children:[d.jsx("style",{children:`
        .lumora-contact-dialog {
          position: fixed;
          inset: auto 0 0;
          margin: 0 auto;
          width: 100%;
          max-width: 100%;
          max-height: 90dvh;
          padding: 0;
          border: 0;
          border-radius: 26px 26px 0 0;
          background: #fff;
          color: #111827;
          overflow-y: auto;
          overscroll-behavior: contain;
          box-shadow: 0 -12px 60px rgb(0 0 0 / 20%);
          font-family: inherit;
        }
        .lumora-contact-dialog::backdrop {
          background: rgb(10 15 26 / 60%);
          backdrop-filter: blur(4px);
        }
        .lumora-contact-dialog[open] {
          animation: lumora-contact-enter 180ms ease-out;
        }
        .lumora-contact-dialog a:focus-visible,
        .lumora-contact-dialog button:focus-visible {
          outline: 3px solid #2563eb;
          outline-offset: 4px;
        }
        @keyframes lumora-contact-enter {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (min-width: 768px) {
          .lumora-contact-dialog {
            inset: 0;
            margin: auto;
            width: min(420px, calc(100vw - 32px));
            max-height: calc(100dvh - 48px);
            border-radius: 26px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .lumora-contact-dialog[open] { animation: none; }
        }
      `}),d.jsx("dialog",{ref:c,className:"lumora-contact-dialog",dir:i,"aria-labelledby":o,"aria-describedby":a,onCancel:j=>{var k;j.preventDefault(),(k=u.current)==null||k.call(u)},onClick:j=>{var b;if(j.target!==j.currentTarget)return;const k=j.currentTarget.getBoundingClientRect();(j.clientX<k.left||j.clientX>k.right||j.clientY<k.top||j.clientY>k.bottom)&&((b=u.current)==null||b.call(u))},children:d.jsxs("div",{className:"p-5 md:p-6",style:{paddingBottom:"max(24px, env(safe-area-inset-bottom))"},children:[d.jsxs("div",{className:"flex items-start justify-between gap-3",children:[d.jsxs("div",{className:"min-w-0 pt-1 text-start",children:[d.jsx("div",{dir:"ltr",className:"mb-2 text-xs font-extrabold tracking-[0.2em] text-gray-500",style:{textAlign:i==="rtl"?"right":"left"},children:"LUMORA"}),d.jsx("h2",{id:o,className:"m-0 text-xl font-extrabold leading-relaxed text-gray-900",children:s.title}),d.jsx("p",{id:a,className:"mt-1 text-sm leading-6 text-gray-500",children:s.subtitle})]}),d.jsx("button",{type:"button",autoFocus:!0,onClick:()=>{var j;return(j=u.current)==null?void 0:j.call(u)},"aria-label":s.close,className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200",children:d.jsx(Iu,{className:"h-5 w-5","aria-hidden":"true"})})]}),d.jsxs("div",{className:"mt-4 grid gap-3",children:[d.jsxs("a",{href:E,target:"_blank",rel:"noopener noreferrer",onClick:()=>{var j;return(j=u.current)==null?void 0:j.call(u)},className:"flex min-h-14 items-center gap-4 rounded-2xl bg-emerald-700 px-4 py-4 text-start text-base font-bold text-white transition-colors hover:bg-emerald-800 active:bg-emerald-900",children:[d.jsx("span",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10",children:d.jsx(yi,{className:"h-6 w-6","aria-hidden":"true"})}),d.jsxs("span",{className:"min-w-0",children:[d.jsx("span",{className:"block leading-6",children:s.wa}),d.jsx("span",{className:"mt-1 block text-xs font-normal leading-5 text-white/90",children:s.hint})]})]}),d.jsxs("a",{href:`tel:${_}`,onClick:()=>{var j;return(j=u.current)==null?void 0:j.call(u)},className:"flex min-h-14 items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 text-start text-base font-bold text-gray-900 transition-colors hover:bg-gray-100 active:bg-gray-200",children:[d.jsx("span",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white",children:d.jsx(t2,{className:"h-5 w-5","aria-hidden":"true"})}),d.jsxs("span",{className:"min-w-0",children:[d.jsx("span",{className:"block leading-6",children:s.call}),d.jsx("span",{className:"mt-1 block text-sm font-normal leading-5 tracking-wide text-gray-600",children:d.jsx("bdi",{dir:"ltr",children:h.phoneDisplay})})]})]})]})]})})]}),document.body)}const b2=[{id:"amir",nameAr:"أمير",nameEn:"Amir",nameHe:"אמיר",phone:"050-272-7724",tel:"+972502727724",whatsapp:"972502727724"}],pf=[{code:"ar",short:"AR",label:"العربية"},{code:"en",short:"EN",label:"English"},{code:"he",short:"HE",label:"עברית"}];function E2({scrollToSection:t}){var $,q;const{lang:e,setLang:n}=kt(),r=e==="ar"||e==="he",[s,i]=D.useState(!1),[o,a]=D.useState(!1),[c,u]=D.useState(!1),[h,p]=D.useState(!1),[m,_]=D.useState("home"),[E,j]=D.useState(!1),k=D.useRef(null),b=D.useRef(null),y=D.useRef(null),v=D.useRef(null),R=D.useMemo(()=>e==="he"?{brand:"LUMORA",brandSub:"CLEANING",results:"תוצאות",services:"שירותים",faq:"שאלות נפוצות",allServices:"כל השירותים",sofa:"ניקוי ספות",mattress:"ניקוי מזרנים",carpet:"ניקוי שטיחים",request:"הזמנת שירות",contact:"יצירת קשר",language:"שפה",openMenu:"פתיחת תפריט",home:"חזרה לראש הדף",skip:"דלג לתוכן",menuHint:"ניווט מהיר וברור באתר."}:e==="en"?{brand:"LUMORA",brandSub:"CLEANING",results:"Results",services:"Services",faq:"FAQ",allServices:"All services",sofa:"Sofa cleaning",mattress:"Mattress cleaning",carpet:"Carpet cleaning",request:"Request service",contact:"Contact us",language:"Language",openMenu:"Open menu",home:"Back to top",skip:"Skip to content",menuHint:"Fast and clear website navigation."}:{brand:"LUMORA",brandSub:"CLEANING",results:"النتائج",services:"الخدمات",faq:"الأسئلة الشائعة",allServices:"كل الخدمات",sofa:"تنظيف الكنب",mattress:"تنظيف فرشات النوم",carpet:"تنظيف السجاد",request:"جهّز طلبك",contact:"تواصل معنا",language:"اللغة",openMenu:"فتح القائمة",home:"العودة للأعلى",skip:"تجاوز إلى المحتوى",menuHint:"تنقّل سريع وواضح داخل الموقع."},[e]),V=D.useMemo(()=>[{id:"beforeafter",label:R.results},{id:"services",label:R.services,subItems:[{id:"sofa",label:R.sofa,icon:_a},{id:"mattress",label:R.mattress,icon:Vc},{id:"carpet",label:R.carpet,icon:zc}]},{id:"faq",label:R.faq}],[R]),L=D.useMemo(()=>pf.find(O=>O.code===e)||pf[0],[e]),S=D.useMemo(()=>(b2||[]).map(O=>({id:O.id,name:e==="en"?O.nameEn:e==="he"?O.nameHe:O.nameAr,phoneDisplay:O.phone,phoneRaw:O.tel,whatsappRaw:O.whatsapp,note:e==="en"?O.noteEn:e==="he"?O.noteHe:O.noteAr})),[e]),x=D.useCallback(()=>{a(!1),u(!1)},[]),T=D.useCallback(O=>{var F;if(O==="home"){window.scrollTo({top:0,behavior:"smooth"});return}const C=["sofa","mattress","carpet"];let M=document.getElementById(O);if(!M&&C.includes(O)&&(M=document.getElementById("services")),M){const B=((F=k.current)==null?void 0:F.offsetHeight)||68,Y=M.getBoundingClientRect().top+window.scrollY-B-10;window.scrollTo({top:Y,behavior:"smooth"});return}t==null||t(O)},[t]),I=D.useCallback(O=>{_(O),i(!1),x(),T(O)},[x,T]),P=D.useCallback(()=>{i(!1),x(),p(!0)},[x]);D.useEffect(()=>{const O=()=>{j(window.scrollY>10),window.scrollY<120&&_("home")};return O(),window.addEventListener("scroll",O,{passive:!0}),()=>{window.removeEventListener("scroll",O)}},[]),D.useEffect(()=>{const C=["beforeafter","services","faq"].map(F=>document.getElementById(F)).filter(Boolean);if(C.length===0||!("IntersectionObserver"in window))return;const M=new IntersectionObserver(F=>{var Y;const B=F.filter(G=>G.isIntersecting).sort((G,ue)=>ue.intersectionRatio-G.intersectionRatio)[0];(Y=B==null?void 0:B.target)!=null&&Y.id&&_(B.target.id)},{rootMargin:"-25% 0px -60% 0px",threshold:[.05,.2,.4]});return C.forEach(F=>{M.observe(F)}),()=>{M.disconnect()}},[]),D.useEffect(()=>{const O=M=>{var G,ue,xe;const F=(G=b.current)==null?void 0:G.contains(M.target),B=(ue=y.current)==null?void 0:ue.contains(M.target),Y=(xe=v.current)==null?void 0:xe.contains(M.target);!F&&!B&&a(!1),Y||u(!1)},C=M=>{M.key==="Escape"&&x()};return document.addEventListener("mousedown",O),window.addEventListener("keydown",C),()=>{document.removeEventListener("mousedown",O),window.removeEventListener("keydown",C)}},[x]);const N=["services","sofa","mattress","carpet"].includes(m),w=O=>["relative inline-flex h-10 items-center justify-center gap-1.5","rounded-xl px-3.5 text-sm font-extrabold","transition-colors duration-200",O?"bg-white/10 text-[var(--lumora-lime-light)]":"text-white/75 hover:bg-white/[0.06] hover:text-white"].join(" ");return d.jsxs(d.Fragment,{children:[d.jsx("a",{href:"#beforeafter",className:`\r
          sr-only\r
          focus:not-sr-only\r
          focus:fixed\r
          focus:start-3\r
          focus:top-3\r
          focus:z-[99999]\r
          focus:rounded-xl\r
          focus:bg-white\r
          focus:px-4\r
          focus:py-2\r
          focus:text-slate-900\r
          focus:shadow-xl\r
        `,children:R.skip}),d.jsxs("header",{ref:k,dir:r?"rtl":"ltr",className:["sticky top-0 z-[9998] w-full border-b","transition-colors duration-200",E?["border-white/10","bg-[rgba(8,12,29,0.97)]","shadow-[0_10px_30px_rgba(3,7,24,0.22)]","backdrop-blur-xl"].join(" "):["border-white/[0.08]","bg-[rgba(8,12,29,0.94)]","backdrop-blur-lg"].join(" ")].join(" "),children:[d.jsx("div",{className:"mx-auto max-w-7xl px-3 sm:px-6",children:d.jsxs("div",{className:"flex h-[66px] items-center justify-between gap-2 sm:h-[72px]",children:[d.jsxs("button",{type:"button",dir:"ltr",onClick:()=>I("home"),"aria-label":R.home,className:`\r
                flex\r
                min-w-0\r
                shrink-0\r
                items-center\r
                gap-2.5\r
                rounded-xl\r
              `,children:[d.jsx("span",{className:`\r
                  flex\r
                  h-11\r
                  w-11\r
                  shrink-0\r
                  items-center\r
                  justify-center\r
                  overflow-hidden\r
                  rounded-full\r
                  border\r
                  border-[rgba(174,221,57,0.32)]\r
                  bg-[var(--lumora-navy-900)]\r
                  sm:h-12\r
                  sm:w-12\r
                `,children:d.jsx("img",{src:"/lumora-icon.png",alt:"","aria-hidden":"true",draggable:!1,className:"h-full w-full object-cover"})}),d.jsxs("span",{className:"hidden sm:block",children:[d.jsx("span",{className:`\r
                    block\r
                    text-[16px]\r
                    font-black\r
                    leading-none\r
                    tracking-[0.08em]\r
                    text-white\r
                  `,children:R.brand}),d.jsx("span",{className:`\r
                    mt-1\r
                    block\r
                    text-[8px]\r
                    font-black\r
                    leading-none\r
                    tracking-[0.3em]\r
                    text-[var(--lumora-lime)]\r
                  `,children:R.brandSub})]})]}),d.jsxs("nav",{"aria-label":"Primary navigation",className:`\r
                hidden\r
                items-center\r
                gap-1\r
                lg:flex\r
              `,children:[d.jsx("button",{type:"button",onClick:()=>I("beforeafter"),className:w(m==="beforeafter"),children:R.results}),d.jsxs("div",{ref:v,className:"relative",children:[d.jsxs("button",{type:"button",onClick:()=>{u(O=>!O),a(!1)},className:w(N),"aria-expanded":c,"aria-haspopup":"menu",children:[d.jsx("span",{children:R.services}),d.jsx(Qo,{"aria-hidden":"true",className:["h-4 w-4 transition-transform duration-200",c?"rotate-180":""].join(" ")})]}),c&&d.jsxs("div",{role:"menu",className:["absolute top-full mt-2 w-[260px]","rounded-2xl border border-white/10","bg-[rgba(8,12,29,0.98)] p-2","shadow-[0_20px_55px_rgba(0,0,0,0.38)]","backdrop-blur-xl",r?"right-0":"left-0"].join(" "),children:[d.jsxs("button",{type:"button",role:"menuitem",onClick:()=>I("services"),className:`\r
                        mb-1\r
                        flex\r
                        w-full\r
                        items-center\r
                        justify-between\r
                        rounded-xl\r
                        px-3\r
                        py-2.5\r
                        text-start\r
                        text-sm\r
                        font-extrabold\r
                        text-[var(--lumora-lime-light)]\r
                        transition\r
                        hover:bg-white/[0.06]\r
                      `,children:[d.jsx("span",{children:R.allServices}),m==="services"&&d.jsx(br,{"aria-hidden":"true",className:"h-4 w-4"})]}),d.jsx("div",{className:"my-1 h-px bg-white/[0.08]"}),(q=($=V.find(O=>O.id==="services"))==null?void 0:$.subItems)==null?void 0:q.map(O=>{const C=O.icon,M=m===O.id;return d.jsxs("button",{type:"button",role:"menuitem",onClick:()=>I(O.id),className:["flex w-full items-center gap-3","rounded-xl px-3 py-2.5","text-start text-sm font-bold","transition",M?["bg-[rgba(174,221,57,0.10)]","text-[var(--lumora-lime-light)]"].join(" "):["text-white/72","hover:bg-white/[0.06]","hover:text-white"].join(" ")].join(" "),children:[d.jsx("span",{className:`\r
                                  flex\r
                                  h-8\r
                                  w-8\r
                                  shrink-0\r
                                  items-center\r
                                  justify-center\r
                                  rounded-lg\r
                                  bg-[rgba(16,148,192,0.10)]\r
                                  text-[var(--lumora-cyan-light)]\r
                                `,children:d.jsx(C,{"aria-hidden":"true",className:"h-4 w-4"})}),d.jsx("span",{className:"flex-1",children:O.label}),M&&d.jsx(br,{"aria-hidden":"true",className:"h-4 w-4"})]},O.id)})]})]}),d.jsx("button",{type:"button",onClick:()=>I("faq"),className:w(m==="faq"),children:R.faq})]}),d.jsxs("div",{className:"hidden items-center gap-2 lg:flex",children:[d.jsxs("div",{ref:b,className:"relative",children:[d.jsxs("button",{type:"button",onClick:()=>{a(O=>!O),u(!1)},className:`\r
                    inline-flex\r
                    h-10\r
                    items-center\r
                    gap-1.5\r
                    rounded-xl\r
                    border\r
                    border-white/10\r
                    bg-white/[0.04]\r
                    px-3\r
                    text-xs\r
                    font-extrabold\r
                    text-white/80\r
                    transition\r
                    hover:bg-white/[0.07]\r
                    hover:text-white\r
                  `,"aria-expanded":o,children:[d.jsx("span",{children:L.short}),d.jsx(Qo,{"aria-hidden":"true",className:["h-3.5 w-3.5 transition-transform",o?"rotate-180":""].join(" ")})]}),o&&d.jsx(Y0,{lang:e,isRTL:r,onSelect:O=>{n(O),a(!1)}})]}),d.jsxs("button",{type:"button",onClick:P,className:`\r
                  inline-flex\r
                  h-10\r
                  items-center\r
                  justify-center\r
                  gap-2\r
                  rounded-xl\r
                  bg-[var(--lumora-lime)]\r
                  px-4\r
                  text-sm\r
                  font-black\r
                  text-[var(--lumora-navy-950)]\r
                  transition\r
                  hover:brightness-105\r
                  active:scale-[0.98]\r
                `,children:[d.jsx(yi,{"aria-hidden":"true",className:"h-4 w-4"}),d.jsx("span",{children:R.request})]})]}),d.jsxs("div",{className:"flex items-center gap-1.5 lg:hidden",children:[d.jsxs("div",{ref:y,className:"relative",children:[d.jsxs("button",{type:"button",onClick:()=>a(O=>!O),"aria-label":R.language,"aria-expanded":o,className:`\r
                    flex\r
                    h-10\r
                    min-w-10\r
                    items-center\r
                    justify-center\r
                    gap-1\r
                    rounded-xl\r
                    border\r
                    border-white/10\r
                    bg-white/[0.05]\r
                    px-2\r
                    text-[11px]\r
                    font-black\r
                    text-white\r
                  `,children:[d.jsx("span",{children:L.short}),d.jsx(Qo,{"aria-hidden":"true",className:["h-3 w-3 transition-transform",o?"rotate-180":""].join(" ")})]}),o&&d.jsx(Y0,{lang:e,isRTL:r,onSelect:O=>{n(O),a(!1)}})]}),d.jsx("button",{type:"button",onClick:P,"aria-label":R.contact,className:`\r
                  flex\r
                  h-10\r
                  w-10\r
                  items-center\r
                  justify-center\r
                  rounded-xl\r
                  border\r
                  border-[rgba(174,221,57,0.26)]\r
                  bg-[rgba(174,221,57,0.08)]\r
                  text-[var(--lumora-lime-light)]\r
                  active:scale-95\r
                `,children:d.jsx(yi,{"aria-hidden":"true",className:"h-[18px] w-[18px]"})}),d.jsx("button",{type:"button",onClick:()=>{x(),i(!0)},"aria-label":R.openMenu,className:`\r
                  flex\r
                  h-10\r
                  w-10\r
                  items-center\r
                  justify-center\r
                  rounded-xl\r
                  border\r
                  border-white/10\r
                  bg-white/[0.05]\r
                  text-white\r
                  active:scale-95\r
                `,children:d.jsx(KI,{"aria-hidden":"true",className:"h-5 w-5"})})]})]})}),d.jsx(x2,{menuOpen:s,setMenuOpen:i,navItems:V,scrollToSection:I,activeId:m,hintText:R.menuHint,labels:R})]}),d.jsx(_2,{open:h,onClose:()=>p(!1),contacts:S,lang:e}),d.jsx("a",{href:"https://wa.me/972543075619?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D9%86%D8%B8%D9%8A%D9%81.",target:"_blank",rel:"noopener noreferrer","aria-label":e==="en"?"WhatsApp":e==="he"?"וואטסאפ":"واتساب",className:["fixed bottom-4 z-[9997]","flex h-14 w-14 items-center justify-center","rounded-full border border-white/25","bg-[#25D366] text-white","shadow-[0_12px_30px_rgba(0,0,0,0.24)]","transition-transform duration-200","hover:-translate-y-1","active:scale-95",r?"left-4":"right-4"].join(" "),children:d.jsx(yi,{"aria-hidden":"true",className:"h-6 w-6"})})]})}function Y0({lang:t,isRTL:e,onSelect:n}){return d.jsx("div",{className:["absolute top-full z-[9999] mt-2","w-[170px] rounded-2xl","border border-white/10","bg-[rgba(8,12,29,0.98)]","p-2 shadow-[0_18px_50px_rgba(0,0,0,0.38)]","backdrop-blur-xl",e?"left-0":"right-0"].join(" "),children:pf.map(r=>{const s=t===r.code;return d.jsxs("button",{type:"button",onClick:()=>n(r.code),className:["flex h-10 w-full items-center gap-2.5","rounded-xl px-3 text-start","text-sm font-bold transition",s?["bg-[rgba(174,221,57,0.10)]","text-[var(--lumora-lime-light)]"].join(" "):["text-white/72","hover:bg-white/[0.06]","hover:text-white"].join(" ")].join(" "),children:[d.jsx("span",{className:`\r
                flex\r
                h-6\r
                min-w-8\r
                items-center\r
                justify-center\r
                rounded-md\r
                bg-white/[0.05]\r
                text-[10px]\r
                font-black\r
              `,children:r.short}),d.jsx("span",{className:"flex-1",children:r.label}),s&&d.jsx(br,{"aria-hidden":"true",className:"h-4 w-4"})]},r.code)})})}const y1="/assets/hero1-d2b1a281.jpg",v1="/assets/hero3-e98d4155.jpg",zd=[{id:"sofa",src:y1,position:"center"},{id:"carpet",src:v1,position:"center"}];function T2(){const[t,e]=D.useState(0),n=D.useMemo(()=>{var r;return typeof window>"u"?!1:(r=window.matchMedia)==null?void 0:r.call(window,"(prefers-reduced-motion: reduce)").matches},[]);return D.useEffect(()=>{if(n||zd.length<=1)return;const r=window.setInterval(()=>{e(s=>(s+1)%zd.length)},6e3);return()=>{window.clearInterval(r)}},[n]),d.jsx("div",{"aria-hidden":"true",className:`\r
        pointer-events-none\r
        absolute\r
        inset-0\r
        overflow-hidden\r
        bg-[var(--lumora-navy-950)]\r
      `,children:zd.map((r,s)=>{const i=s===t;return d.jsx("img",{src:r.src,alt:"",draggable:!1,loading:s===0?"eager":"lazy",decoding:"async",fetchPriority:s===0?"high":"auto",className:["absolute inset-0 h-full w-full object-cover","transition-opacity duration-[1200ms] ease-in-out",i?"opacity-100":"opacity-0"].join(" "),style:{objectPosition:r.position,transform:"translateZ(0)"}},r.id)})})}function S2(){const{t}=kt(),e=D.useMemo(()=>[t.heroHighlight1||"الكنب",t.heroHighlight2||"السيارات",t.heroHighlight3||"السجاد"],[t.heroHighlight1,t.heroHighlight2,t.heroHighlight3]),[n,r]=D.useState(0),[s,i]=D.useState(""),[o,a]=D.useState(!1),c=120,u=80,h=1500;return D.useEffect(()=>{i(""),a(!1),r(0)},[e]),D.useEffect(()=>{let p;const m=e[n]||"";return!o&&s.length<m.length?p=setTimeout(()=>{i(m.slice(0,s.length+1))},c):!o&&s.length===m.length?p=setTimeout(()=>a(!0),h):o&&s.length>0?p=setTimeout(()=>{i(m.slice(0,s.length-1))},u):o&&s.length===0&&(a(!1),r(_=>(_+1)%e.length)),()=>clearTimeout(p)},[s,o,n,e]),d.jsxs("h1",{className:"text-3xl sm:text-5xl font-extrabold leading-tight mb-6 sm:mb-8 text-center animate-slide-up",style:{textShadow:"0 3px 6px rgba(0,0,0,0.7)"},children:[d.jsx("span",{className:"text-white",children:t.heroStatic||"تنظيف عميق ومرتب لـ"})," ",d.jsxs("span",{className:"text-blue-500",children:[s,d.jsx("span",{className:"animate-pulse",children:"|"})]})]})}function I2(){const{t}=kt();return d.jsx("p",{className:"text-base sm:text-lg lg:text-xl mb-10 sm:mb-12 max-w-2xl text-center px-2 text-white animate-slide-up",style:{textShadow:"0 2px 5px rgba(0,0,0,0.5)"},children:t.heroSubtitle||"نتائج نظافة بتبين من أول مرة — حجز سريع، التزام بالمواعيد، واهتمام بالتفاصيل حتى آخر زاوية."})}function C2({t}){const e=t.whatsappLink||"https://wa.me/0000000000",n=t.callLink||"tel:+0000000000",r=t.heroButtonPrimary||"واتساب الآن",s=t.heroButtonSecondary||"اطلب عرض سعر";return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"hidden sm:flex items-center gap-3 animate-slide-up",children:[d.jsxs("a",{href:e,target:"_blank",rel:"noreferrer",dir:"ltr",className:`\r
            btn-primary shadow-lg hover:scale-105 animate-glow\r
            px-6 py-3\r
          `,"aria-label":"WhatsApp",children:[d.jsx("span",{className:"mr-2 text-lg",children:"💬"}),d.jsx("span",{className:"text-sm sm:text-base font-semibold tracking-wide",children:r})]}),d.jsxs("a",{href:"#contact",className:`\r
            inline-flex items-center justify-center\r
            rounded-full px-6 py-3\r
            bg-white/10 hover:bg-white/15\r
            border border-white/25\r
            text-white shadow-lg\r
            transition-all duration-200 hover:scale-105\r
          `,children:[d.jsx("span",{className:"mr-2 text-lg",children:"🧾"}),d.jsx("span",{className:"text-sm sm:text-base font-semibold tracking-wide",children:s})]}),t.showCallButton?d.jsxs("a",{href:n,dir:"ltr",className:`\r
              inline-flex items-center justify-center\r
              rounded-full px-5 py-3\r
              bg-white/10 hover:bg-white/15\r
              border border-white/25\r
              text-white shadow-lg\r
              transition-all duration-200 hover:scale-105\r
            `,children:[d.jsx("span",{className:"mr-2 text-lg",children:"📞"}),d.jsx("span",{className:"text-sm sm:text-base font-semibold tracking-wide",children:t.callNow||"اتصال"})]}):null]}),d.jsx("a",{href:e,target:"_blank",rel:"noreferrer","aria-label":"WhatsApp",className:`\r
          sm:hidden fixed bottom-6 right-6 z-50\r
          flex items-center justify-center\r
          w-14 h-14 rounded-full\r
          bg-[var(--primary)] hover:bg-[var(--primary-600)]\r
          text-white text-2xl shadow-xl\r
          transition-all duration-200 active:translate-y-[1px]\r
          animate-glow\r
        `,children:"💬"})]})}function A2(){const{t}=kt(),e=[{icon:"⏱️",text:t.heroPill1||"التزام بالمواعيد"},{icon:"✨",text:t.heroPill2||"تفاصيل دقيقة ونتائج واضحة"},{icon:"🧼",text:t.heroPill3||"مواد آمنة وخيارات صديقة للبيئة"}];return d.jsx("div",{className:"mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 animate-fade-in",children:e.map((n,r)=>d.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-2 rounded-full bg-black/25 border border-white/15 text-white/90 text-xs sm:text-sm backdrop-blur-[2px]",children:[d.jsx("span",{className:"text-base",children:n.icon}),d.jsx("span",{className:"font-semibold tracking-wide",children:n.text})]},r))})}function k2(){const{lang:t}=kt(),e=D.useMemo(()=>t==="he"?"גלול":t==="en"?"Explore":"استكشف",[t]),[n,r]=D.useState(!0);return D.useEffect(()=>{const s=()=>r(window.scrollY<100);return window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s)},[]),n?d.jsxs("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center",children:[d.jsx("div",{className:"w-8 h-12 border-2 border-white/70 rounded-full flex items-start justify-center p-2 relative",children:d.jsx("div",{className:"w-1 h-2 bg-white/80 rounded-full animate-scroll-dot"})}),d.jsx("div",{className:"w-[1px] h-8 bg-gradient-to-b from-white/60 to-transparent mt-2 animate-scroll-line"}),d.jsx("p",{className:"mt-3 text-xs tracking-widest uppercase text-white/70 animate-fade-in",children:e})]}):null}function N2(){const{t,lang:e}=kt(),n=e==="ar"||e==="he",r=D.useMemo(()=>e==="he"?"ניקוי מקצועי עם תוצאות ברורות":e==="en"?"Professional cleaning with visible results":"تنظيف احترافي بنتائج واضحة",[e]);return d.jsxs("section",{id:"hero",dir:n?"rtl":"ltr",className:`\r
        relative\r
        isolate\r
        min-h-[620px]\r
        w-full\r
        overflow-hidden\r
        bg-[var(--lumora-navy-950)]\r
        sm:min-h-[660px]\r
        lg:min-h-[690px]\r
      `,children:[d.jsx(T2,{}),d.jsx("div",{"aria-hidden":"true",className:`\r
          pointer-events-none\r
          absolute\r
          inset-0\r
          z-[2]\r
          bg-[rgba(8,12,29,0.66)]\r
        `}),d.jsx("div",{"aria-hidden":"true",className:["pointer-events-none absolute inset-y-0 z-[3] w-full","lg:w-[72%]",n?"right-0 bg-gradient-to-l from-[rgba(8,12,29,0.94)] via-[rgba(8,12,29,0.68)] to-transparent":"left-0 bg-gradient-to-r from-[rgba(8,12,29,0.94)] via-[rgba(8,12,29,0.68)] to-transparent"].join(" ")}),d.jsx("img",{src:"/lumora-icon.png",alt:"","aria-hidden":"true",draggable:!1,className:["pointer-events-none absolute z-[4]","top-1/2 -translate-y-1/2","h-[280px] w-[280px]","select-none object-contain opacity-[0.075]","sm:h-[360px] sm:w-[360px]","lg:h-[470px] lg:w-[470px]",n?"-left-24 sm:-left-20 lg:left-[4%]":"-right-24 sm:-right-20 lg:right-[4%]"].join(" ")}),d.jsx("div",{className:`\r
          relative\r
          z-20\r
          mx-auto\r
          flex\r
          min-h-[620px]\r
          w-full\r
          max-w-7xl\r
          items-center\r
          px-4\r
          pb-28\r
          pt-14\r
          sm:min-h-[660px]\r
          sm:px-6\r
          sm:pb-28\r
          sm:pt-16\r
          lg:min-h-[690px]\r
          lg:px-8\r
          lg:pb-24\r
          lg:pt-16\r
        `,children:d.jsxs("div",{className:["flex w-full flex-col","items-center text-center","lg:max-w-[720px]",n?"lg:items-start lg:text-right":"lg:items-start lg:text-left"].join(" "),children:[d.jsxs("div",{className:`\r
              mb-5\r
              inline-flex\r
              items-center\r
              gap-2\r
              rounded-full\r
              border\r
              border-white/15\r
              bg-black/15\r
              px-3\r
              py-1.5\r
              text-[11px]\r
              font-bold\r
              text-white/85\r
              backdrop-blur-sm\r
              sm:text-xs\r
            `,children:[d.jsx("span",{"aria-hidden":"true",className:`\r
                h-2\r
                w-2\r
                rounded-full\r
                bg-[var(--lumora-lime)]\r
              `}),d.jsx("span",{children:r})]}),d.jsx(S2,{}),d.jsx(I2,{}),d.jsx(C2,{t}),d.jsx(A2,{})]})}),d.jsx("div",{"aria-hidden":"true",className:`\r
          pointer-events-none\r
          absolute\r
          inset-x-0\r
          bottom-0\r
          z-[21]\r
          h-20\r
          bg-gradient-to-t\r
          from-[rgba(8,12,29,0.72)]\r
          to-transparent\r
        `}),d.jsx(k2,{})]})}const P2="/assets/hero2-a1c9e76a.jpg",R2="/assets/glasscleaning-1abb11f6.jpg",j2=[{id:"sofa",titleKey:"sofaTitle",descriptionKey:"sofaDescription",detailsKey:"sofaDetails",icon:"couch",image:y1,priority:"primary"},{id:"mattress",titleKey:"mattressTitle",descriptionKey:"mattressDescription",detailsKey:"mattressDetails",icon:"bed",image:P2,priority:"primary"},{id:"carpet",titleKey:"carpetTitle",descriptionKey:"carpetDescription",detailsKey:"carpetDetails",icon:"layer-group",image:v1,priority:"primary"},{id:"glass",titleKey:"glassTitle",descriptionKey:"glassDescription",detailsKey:"glassDetails",icon:"sparkles",image:R2,priority:"secondary"}],M2={couch:_a,bed:Vc,"layer-group":zc,sparkles:Pi},Ws=(t,e)=>t==="he"?e.he:t==="en"?e.en:e.ar;function L2({id:t,icon:e,titleKey:n,descriptionKey:r,image:s,priority:i="secondary",onClick:o,onBook:a}){const{t:c,lang:u,isRTL:h}=kt(),[p,m]=D.useState(!1),_=D.useRef(null),E=M2[e]||Pi,j=h?yI:f1,k=t==="glass",b=i==="primary",y=(c==null?void 0:c[n])||n,v=(c==null?void 0:c[r])||r,R={addToOrder:Ws(u,{ar:"أضف للطلب",en:"Add to order",he:"הוספה להזמנה"}),available:Ws(u,{ar:"متاح للطلب",en:"Available",he:"זמין להזמנה"}),unavailable:Ws(u,{ar:"غير متاح حاليًا",en:"Currently unavailable",he:"לא זמין כרגע"}),unavailableDescription:Ws(u,{ar:"هذه الخدمة متوقفة مؤقتًا ولا يمكن إضافتها إلى الطلب.",en:"This service is temporarily paused and cannot be added to the order.",he:"השירות מושהה זמנית ולא ניתן להוסיף אותו להזמנה."}),flexibleOrder:Ws(u,{ar:"يمكن دمجها مع خدمات أخرى",en:"Can be combined with other services",he:"ניתן לשלב עם שירותים נוספים"}),primary:Ws(u,{ar:"خدمة أساسية",en:"Main service",he:"שירות מרכזי"})};D.useEffect(()=>{const x=_.current;if(!x)return;if(!("IntersectionObserver"in window)){m(!0);return}const T=new IntersectionObserver(([I])=>{I.isIntersecting&&(m(!0),T.unobserve(I.target))},{threshold:.12});return T.observe(x),()=>{T.disconnect()}},[]);const V=()=>{k||o==null||o()},L=x=>{k||(x.key==="Enter"||x.key===" ")&&(x.preventDefault(),V())},S=x=>{x.stopPropagation(),!k&&(a==null||a())};return d.jsxs("article",{ref:_,id:t,dir:h?"rtl":"ltr",role:k?void 0:"button",tabIndex:k?-1:0,"aria-disabled":k,"aria-label":k?`${y} - ${R.unavailable}`:y,onClick:V,onKeyDown:L,className:["group relative flex h-full min-h-[390px]","flex-col overflow-hidden rounded-[26px]","border bg-white","transition-all duration-500 ease-out",p?"translate-y-0 opacity-100":"translate-y-4 opacity-0",k?["cursor-not-allowed","border-slate-200","shadow-[0_12px_34px_rgba(8,12,29,0.06)]"].join(" "):["cursor-pointer","border-[rgba(17,21,47,0.10)]","shadow-[0_14px_38px_rgba(8,12,29,0.08)]","hover:-translate-y-1.5","hover:border-[rgba(16,148,192,0.28)]","hover:shadow-[0_24px_58px_rgba(8,12,29,0.14)]","focus:outline-none","focus:ring-4","focus:ring-[rgba(174,221,57,0.18)]"].join(" ")].join(" "),children:[d.jsx("div",{"aria-hidden":"true",className:["absolute inset-x-0 top-0 z-20 h-1",k?"bg-slate-300":["bg-gradient-to-r","from-[var(--lumora-cyan)]","via-[var(--lumora-lime)]","to-[var(--lumora-cyan-light)]"].join(" ")].join(" ")}),d.jsxs("div",{className:`\r
          relative\r
          h-[185px]\r
          shrink-0\r
          overflow-hidden\r
          bg-[var(--lumora-navy-950)]\r
        `,children:[d.jsx("img",{src:s,alt:y,loading:"lazy",decoding:"async",draggable:!1,className:["h-full w-full object-cover","transition-transform duration-700 ease-out",k?"scale-[1.02] grayscale-[35%] opacity-65":"group-hover:scale-[1.055]"].join(" ")}),d.jsx("div",{"aria-hidden":"true",className:["absolute inset-0","bg-gradient-to-t","from-[rgba(8,12,29,0.88)]","via-[rgba(8,12,29,0.12)]","to-transparent"].join(" ")}),d.jsx("div",{className:["absolute bottom-4 start-4","flex h-12 w-12 items-center","justify-center rounded-2xl","border backdrop-blur-md",k?["border-white/15","bg-slate-700/75","text-white/70"].join(" "):["border-[rgba(174,221,57,0.30)]","bg-[rgba(8,12,29,0.78)]","text-[var(--lumora-lime-light)]","shadow-[0_10px_24px_rgba(0,0,0,0.18)]"].join(" ")].join(" "),children:d.jsx(E,{"aria-hidden":"true",className:"h-5 w-5",strokeWidth:2.2})}),d.jsxs("div",{className:["absolute end-3 top-3","inline-flex min-h-8 items-center","gap-1.5 rounded-full border","px-3 py-1","text-[11px] font-black","backdrop-blur-md",k?["border-white/15","bg-[rgba(15,23,42,0.82)]","text-white"].join(" "):["border-[rgba(174,221,57,0.30)]","bg-[rgba(8,12,29,0.80)]","text-[var(--lumora-lime-light)]"].join(" ")].join(" "),children:[k?d.jsx(hf,{"aria-hidden":"true",className:"h-3.5 w-3.5"}):d.jsx(br,{"aria-hidden":"true",className:"h-3.5 w-3.5"}),d.jsx("span",{children:k?R.unavailable:R.available})]})]}),d.jsxs("div",{className:"flex flex-1 flex-col p-5 sm:p-6",children:[d.jsx("div",{className:"flex items-start gap-3",children:d.jsxs("div",{className:"min-w-0 flex-1",children:[d.jsx("h3",{className:["text-xl font-black leading-tight","tracking-tight",k?"text-slate-600":"text-[var(--lumora-navy-900)]"].join(" "),children:y}),b&&!k&&d.jsx("span",{className:`\r
                  mt-2\r
                  inline-flex\r
                  rounded-full\r
                  bg-[rgba(16,148,192,0.07)]\r
                  px-2.5\r
                  py-1\r
                  text-[10px]\r
                  font-black\r
                  text-[var(--lumora-cyan)]\r
                `,children:R.primary})]})}),d.jsx("p",{className:["mt-3 text-sm font-medium leading-6",k?"text-slate-500":"text-slate-600"].join(" "),children:v}),k&&d.jsx("div",{className:`\r
              mt-4\r
              rounded-xl\r
              border\r
              border-slate-200\r
              bg-slate-50\r
              px-3.5\r
              py-3\r
              text-xs\r
              font-bold\r
              leading-5\r
              text-slate-500\r
            `,children:R.unavailableDescription}),!k&&d.jsxs("div",{className:`\r
              mt-4\r
              flex\r
              items-center\r
              gap-2\r
              text-xs\r
              font-bold\r
              text-[var(--lumora-cyan)]\r
            `,children:[d.jsx(Pi,{"aria-hidden":"true",className:"h-3.5 w-3.5"}),d.jsx("span",{children:R.flexibleOrder})]}),d.jsx("div",{className:"mt-auto pt-5",children:d.jsxs("button",{type:"button",disabled:k,onClick:S,className:["flex h-12 w-full items-center","justify-center gap-2 rounded-xl","px-4 text-sm font-black","transition-all duration-200",k?["cursor-not-allowed","border border-slate-200","bg-slate-100","text-slate-400"].join(" "):["bg-[var(--lumora-lime)]","text-[var(--lumora-navy-950)]","shadow-[0_10px_24px_rgba(79,168,37,0.18)]","hover:brightness-105","active:scale-[0.985]"].join(" ")].join(" "),children:[k?d.jsx(hf,{"aria-hidden":"true",className:"h-4 w-4"}):d.jsx($a,{"aria-hidden":"true",className:"h-4 w-4"}),d.jsx("span",{children:k?R.unavailable:R.addToOrder}),!k&&d.jsx(j,{"aria-hidden":"true",className:`\r
                  h-4\r
                  w-4\r
                  transition-transform\r
                  group-hover:-translate-x-0.5\r
                  ltr:group-hover:translate-x-0.5\r
                `})]})})]}),k&&d.jsx("div",{"aria-hidden":"true",className:`\r
            pointer-events-none\r
            absolute\r
            inset-0\r
            rounded-[26px]\r
            bg-white/[0.06]\r
          `})]})}const w1="lumora-multi-service-order-v1",mf=[{value:"single",ar:"مفرد",en:"Single",he:"יחיד"},{value:"singleAndHalf",ar:"مفرد ونص",en:"Single and a half",he:"מיטה וחצי"},{value:"double",ar:"مزدوج",en:"Double",he:"זוגי"}],gf=[{value:"one",ar:"وجه واحد",en:"One side",he:"צד אחד"},{value:"two",ar:"وجهين",en:"Two sides",he:"שני צדדים"}],Hp=t=>`${t}-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,X0=()=>({id:Hp("sofa"),seats:1}),J0=()=>({id:Hp("carpet"),length:"",width:"",unknownMeasurements:!1}),Z0=()=>({id:Hp("mattress"),count:1,size:"single",sides:"one"}),nc=()=>({location:"",sofas:[],carpets:[],mattresses:[],notes:""}),ne=(t,e)=>t==="he"?e.he:t==="en"?e.en:e.ar,Wp=(t,e)=>ne(t,{ar:e.ar,en:e.en,he:e.he}),D2=(t,e)=>{const n=mf.find(r=>r.value===e);return n?Wp(t,n):e},O2=(t,e)=>{const n=gf.find(r=>r.value===e);return n?Wp(t,n):e},Rt=(t,e=1)=>{const n=Number.parseInt(t,10);return!Number.isFinite(n)||n<1?e:n},lr=t=>{const e=Number.parseFloat(t);return!Number.isFinite(e)||e<=0?null:e},V2=()=>{if(typeof window>"u")return nc();try{const t=window.localStorage.getItem(w1);if(!t)return nc();const e=JSON.parse(t);return{location:typeof(e==null?void 0:e.location)=="string"?e.location:"",sofas:Array.isArray(e==null?void 0:e.sofas)?e.sofas:[],carpets:Array.isArray(e==null?void 0:e.carpets)?e.carpets:[],mattresses:Array.isArray(e==null?void 0:e.mattresses)?e.mattresses:[],notes:typeof(e==null?void 0:e.notes)=="string"?e.notes:""}}catch{return nc()}},ey=t=>{const e=t.sofas.reduce((i,o)=>i+Rt(o.seats),0),n=t.carpets.length,r=t.mattresses.reduce((i,o)=>i+Rt(o.count),0),s=[t.sofas.length>0,t.carpets.length>0,t.mattresses.length>0].filter(Boolean).length;return{sofaSeats:e,carpetCount:n,mattressCount:r,selectedServiceCount:s,totalItems:e+n+r,hasItems:e>0||n>0||r>0}},F2=(t,e="ar")=>{const n=[];return n.push(ne(e,{ar:"مرحبًا، أريد طلب خدمات تنظيف.",en:"Hello, I would like to request cleaning services.",he:"שלום, אני רוצה להזמין שירותי ניקיון."})),n.push(ne(e,{ar:`البلدة: ${t.location}`,en:`Town: ${t.location}`,he:`יישוב: ${t.location}`})),n.push(""),n.push(ne(e,{ar:"الخدمات المطلوبة:",en:"Requested services:",he:"השירותים המבוקשים:"})),t.sofas.length>0&&(n.push(""),n.push(ne(e,{ar:"الكنب:",en:"Sofas:",he:"ספות:"})),t.sofas.forEach((r,s)=>{n.push(ne(e,{ar:`${s+1}. عدد المقاعد: ${Rt(r.seats)}`,en:`${s+1}. Number of seats: ${Rt(r.seats)}`,he:`${s+1}. מספר מושבים: ${Rt(r.seats)}`}))})),t.carpets.length>0&&(n.push(""),n.push(ne(e,{ar:"السجاد:",en:"Carpets:",he:"שטיחים:"})),t.carpets.forEach((r,s)=>{if(r.unknownMeasurements){n.push(ne(e,{ar:`${s+1}. القياسات غير معروفة`,en:`${s+1}. Measurements are unknown`,he:`${s+1}. המידות אינן ידועות`}));return}n.push(ne(e,{ar:`${s+1}. الطول: ${r.length} متر × العرض: ${r.width} متر`,en:`${s+1}. Length: ${r.length} m × Width: ${r.width} m`,he:`${s+1}. אורך: ${r.length} מ׳ × רוחב: ${r.width} מ׳`}))})),t.mattresses.length>0&&(n.push(""),n.push(ne(e,{ar:"فرشات النوم:",en:"Mattresses:",he:"מזרנים:"})),t.mattresses.forEach((r,s)=>{const i=D2(e,r.size),o=O2(e,r.sides);n.push(ne(e,{ar:`${s+1}. العدد: ${Rt(r.count)} | الحجم: ${i} | التنظيف: ${o}`,en:`${s+1}. Quantity: ${Rt(r.count)} | Size: ${i} | Cleaning: ${o}`,he:`${s+1}. כמות: ${Rt(r.count)} | גודל: ${i} | ניקוי: ${o}`}))})),t.notes.trim()&&(n.push(""),n.push(ne(e,{ar:`ملاحظات: ${t.notes.trim()}`,en:`Notes: ${t.notes.trim()}`,he:`הערות: ${t.notes.trim()}`}))),n.push(""),n.push(ne(e,{ar:"سأرسل الصور اللازمة عبر واتساب.",en:"I will send the necessary photos through WhatsApp.",he:"אשלח את התמונות הדרושות דרך WhatsApp."})),n.join(`
`)};function z2({isOpen:t,onClose:e,initialServiceId:n=null,onSubmit:r,onSummaryChange:s}){const{lang:i}=kt(),o=i==="ar"||i==="he",[a,c]=D.useState(V2),[u,h]=D.useState(!1),[p,m]=D.useState(!1),_=D.useRef(null),E=D.useMemo(()=>({title:ne(i,{ar:"جهّز طلبك",en:"Build your order",he:"בניית ההזמנה"}),subtitle:ne(i,{ar:"أضف أي عدد من الخدمات والعناصر، ثم أرسلها برسالة واتساب واحدة.",en:"Add any number of services and items, then send one WhatsApp message.",he:"הוסיפו כל מספר של שירותים ופריטים ושלחו הודעת WhatsApp אחת."}),close:ne(i,{ar:"إغلاق",en:"Close",he:"סגירה"}),location:ne(i,{ar:"البلدة",en:"Town",he:"יישוב"}),locationPlaceholder:ne(i,{ar:"اكتب اسم البلدة",en:"Enter your town",he:"הקלידו את שם היישוב"}),locationError:ne(i,{ar:"اكتب اسم البلدة للمتابعة.",en:"Enter your town to continue.",he:"יש להזין את שם היישוב."}),addServices:ne(i,{ar:"أضف الخدمات المطلوبة",en:"Add requested services",he:"הוספת שירותים"}),sofa:ne(i,{ar:"كنب",en:"Sofa",he:"ספות"}),carpet:ne(i,{ar:"سجاد",en:"Carpet",he:"שטיחים"}),mattress:ne(i,{ar:"فرشات نوم",en:"Mattresses",he:"מזרנים"}),sofasTitle:ne(i,{ar:"الكنب",en:"Sofas",he:"ספות"}),sofaItem:ne(i,{ar:"كنب",en:"Sofa",he:"ספה"}),seats:ne(i,{ar:"عدد المقاعد",en:"Number of seats",he:"מספר מושבים"}),addSofa:ne(i,{ar:"إضافة كنب آخر",en:"Add another sofa",he:"הוספת ספה נוספת"}),carpetsTitle:ne(i,{ar:"السجاد",en:"Carpets",he:"שטיחים"}),carpetItem:ne(i,{ar:"سجادة",en:"Carpet",he:"שטיח"}),length:ne(i,{ar:"الطول بالمتر",en:"Length in meters",he:"אורך במטרים"}),width:ne(i,{ar:"العرض بالمتر",en:"Width in meters",he:"רוחב במטרים"}),unknownMeasurements:ne(i,{ar:"لا أعرف القياسات",en:"I do not know the measurements",he:"אני לא יודע/ת את המידות"}),carpetMeasurementError:ne(i,{ar:"أدخل الطول والعرض أو اختر أن القياسات غير معروفة.",en:"Enter the length and width, or mark the measurements as unknown.",he:"יש להזין אורך ורוחב או לסמן שהמידות אינן ידועות."}),addCarpet:ne(i,{ar:"إضافة سجادة أخرى",en:"Add another carpet",he:"הוספת שטיח נוסף"}),mattressesTitle:ne(i,{ar:"فرشات النوم",en:"Mattresses",he:"מזרנים"}),mattressGroup:ne(i,{ar:"مجموعة فرشات",en:"Mattress group",he:"קבוצת מזרנים"}),mattressCount:ne(i,{ar:"عدد الفرشات",en:"Number of mattresses",he:"מספר מזרנים"}),size:ne(i,{ar:"الحجم",en:"Size",he:"גודל"}),sides:ne(i,{ar:"عدد الأوجه",en:"Cleaning sides",he:"מספר צדדים"}),addMattressGroup:ne(i,{ar:"إضافة تركيبة فرشات أخرى",en:"Add another mattress combination",he:"הוספת שילוב מזרנים נוסף"}),notes:ne(i,{ar:"ملاحظات إضافية",en:"Additional notes",he:"הערות נוספות"}),notesPlaceholder:ne(i,{ar:"مثال: يوجد درج، طابق مرتفع، بقع معينة...",en:"Example: stairs, high floor, specific stains...",he:"לדוגמה: מדרגות, קומה גבוהה, כתמים מסוימים..."}),emptyTitle:ne(i,{ar:"لسه ما أضفت أي خدمة",en:"No services added yet",he:"עדיין לא נוספו שירותים"}),emptyText:ne(i,{ar:"اختر الكنب أو السجاد أو فرشات النوم من الأزرار فوق.",en:"Choose sofa, carpet, or mattresses from the buttons above.",he:"בחרו ספות, שטיחים או מזרנים מהכפתורים למעלה."}),atLeastOneError:ne(i,{ar:"أضف خدمة واحدة على الأقل.",en:"Add at least one service.",he:"יש להוסיף לפחות שירות אחד."}),clear:ne(i,{ar:"مسح الطلب",en:"Clear order",he:"ניקוי ההזמנה"}),send:ne(i,{ar:"مراجعة وإرسال عبر واتساب",en:"Review and send through WhatsApp",he:"בדיקה ושליחה דרך WhatsApp"}),items:ne(i,{ar:"عناصر",en:"items",he:"פריטים"}),delete:ne(i,{ar:"حذف",en:"Delete",he:"מחיקה"})}),[i]),j=D.useMemo(()=>ey(a),[a]);if(D.useEffect(()=>{try{window.localStorage.setItem(w1,JSON.stringify(a))}catch{}s==null||s(j)},[s,a,j]),D.useEffect(()=>{if(!t){m(!1);return}const O=window.requestAnimationFrame(()=>{m(!0)});return()=>{window.cancelAnimationFrame(O)}},[t]),D.useEffect(()=>{!t||!n||c(O=>n==="sofa"&&O.sofas.length===0?{...O,sofas:[X0()]}:n==="carpet"&&O.carpets.length===0?{...O,carpets:[J0()]}:n==="mattress"&&O.mattresses.length===0?{...O,mattresses:[Z0()]}:O)},[n,t]),D.useEffect(()=>{if(!t)return;const O=document.body.style.overflow;document.body.style.overflow="hidden";const C=M=>{M.key==="Escape"&&(e==null||e())};return window.addEventListener("keydown",C),()=>{window.removeEventListener("keydown",C),document.body.style.overflow=O}},[t,e]),!t)return null;const k=()=>{c(O=>({...O,sofas:[...O.sofas,X0()]}))},b=()=>{c(O=>({...O,carpets:[...O.carpets,J0()]}))},y=()=>{c(O=>({...O,mattresses:[...O.mattresses,Z0()]}))},v=(O,C)=>{c(M=>({...M,sofas:M.sofas.map(F=>F.id===O?{...F,...C}:F)}))},R=(O,C)=>{c(M=>({...M,carpets:M.carpets.map(F=>F.id===O?{...F,...C}:F)}))},V=(O,C)=>{c(M=>({...M,mattresses:M.mattresses.map(F=>F.id===O?{...F,...C}:F)}))},L=O=>{c(C=>({...C,sofas:C.sofas.filter(M=>M.id!==O)}))},S=O=>{c(C=>({...C,carpets:C.carpets.filter(M=>M.id!==O)}))},x=O=>{c(C=>({...C,mattresses:C.mattresses.filter(M=>M.id!==O)}))},T=a.location.trim().length>=2,I=a.sofas.every(O=>Rt(O.seats,0)>=1),P=a.carpets.every(O=>O.unknownMeasurements||lr(O.length)!==null&&lr(O.width)!==null),N=a.mattresses.every(O=>Rt(O.count,0)>=1&&mf.some(C=>C.value===O.size)&&gf.some(C=>C.value===O.sides)),w=T&&j.hasItems&&I&&P&&N,$=()=>{var C;if(h(!0),!w){T||(C=_.current)==null||C.focus();return}const O={location:a.location.trim(),sofas:a.sofas.map(M=>({...M,seats:Rt(M.seats)})),carpets:a.carpets.map(M=>({...M,length:M.unknownMeasurements?"":String(lr(M.length)),width:M.unknownMeasurements?"":String(lr(M.width))})),mattresses:a.mattresses.map(M=>({...M,count:Rt(M.count)})),notes:a.notes.trim()};r==null||r({order:O,message:F2(O,i),summary:ey(O)})},q=()=>{c(nc()),h(!1)};return d.jsxs("div",{dir:o?"rtl":"ltr",className:["fixed inset-0 z-[10030]","flex items-end justify-center","bg-[rgba(3,7,24,0.72)]","transition-opacity duration-200","sm:items-center sm:p-4",p?"opacity-100":"opacity-0"].join(" "),children:[d.jsx("button",{type:"button",onClick:e,"aria-label":E.close,className:"absolute inset-0 h-full w-full"}),d.jsxs("section",{role:"dialog","aria-modal":"true","aria-labelledby":"order-builder-title",className:["relative z-10 flex max-h-[96dvh]","w-full flex-col overflow-hidden","rounded-t-[28px] bg-[#f7f9f5]","shadow-[0_-24px_80px_rgba(0,0,0,0.32)]","transition-transform duration-200","sm:max-w-3xl sm:rounded-[28px]",p?"translate-y-0 scale-100":"translate-y-8 scale-[0.985]"].join(" "),children:[d.jsxs("header",{className:`\r
            relative\r
            shrink-0\r
            overflow-hidden\r
            bg-[var(--lumora-navy-950)]\r
            px-4\r
            py-5\r
            text-white\r
            sm:px-6\r
          `,children:[d.jsx("div",{"aria-hidden":"true",className:`\r
              absolute\r
              -end-14\r
              -top-14\r
              h-36\r
              w-36\r
              rounded-full\r
              bg-[rgba(174,221,57,0.10)]\r
              blur-2xl\r
            `}),d.jsxs("div",{className:"relative flex items-start gap-3",children:[d.jsx("div",{className:`\r
                flex\r
                h-11\r
                w-11\r
                shrink-0\r
                items-center\r
                justify-center\r
                rounded-2xl\r
                bg-[rgba(174,221,57,0.12)]\r
                text-[var(--lumora-lime-light)]\r
              `,children:d.jsx(Fc,{className:"h-5 w-5"})}),d.jsxs("div",{className:"min-w-0 flex-1",children:[d.jsx("h2",{id:"order-builder-title",className:`\r
                  text-xl\r
                  font-black\r
                  leading-tight\r
                  sm:text-2xl\r
                `,children:E.title}),d.jsx("p",{className:`\r
                  mt-1\r
                  max-w-xl\r
                  text-sm\r
                  font-medium\r
                  leading-6\r
                  text-white/70\r
                `,children:E.subtitle})]}),d.jsx("button",{type:"button",onClick:e,"aria-label":E.close,className:`\r
                flex\r
                h-10\r
                w-10\r
                shrink-0\r
                items-center\r
                justify-center\r
                rounded-full\r
                border\r
                border-white/10\r
                bg-white/[0.06]\r
                text-white\r
                transition\r
                hover:bg-white/10\r
                active:scale-95\r
              `,children:d.jsx(Iu,{className:"h-5 w-5"})})]})]}),d.jsx("div",{className:`\r
            min-h-0\r
            flex-1\r
            overflow-y-auto\r
            overscroll-contain\r
          `,children:d.jsxs("div",{className:"space-y-5 p-4 sm:p-6",children:[d.jsxs("div",{className:`\r
                rounded-2xl\r
                border\r
                border-slate-200\r
                bg-white\r
                p-4\r
              `,children:[d.jsxs("label",{htmlFor:"order-location",className:`\r
                  flex\r
                  items-center\r
                  gap-2\r
                  text-sm\r
                  font-black\r
                  text-[var(--lumora-navy-900)]\r
                `,children:[d.jsx(p1,{className:`\r
                    h-4\r
                    w-4\r
                    text-[var(--lumora-cyan)]\r
                  `}),E.location]}),d.jsx("input",{ref:_,id:"order-location",type:"text",value:a.location,onChange:O=>{c(C=>({...C,location:O.target.value}))},placeholder:E.locationPlaceholder,autoComplete:"address-level2",className:["mt-2 h-12 w-full rounded-xl","border bg-white px-4","text-sm font-bold text-slate-900","outline-none transition","placeholder:text-slate-400",u&&!T?"border-rose-400 ring-2 ring-rose-100":["border-slate-200","focus:border-[var(--lumora-cyan)]","focus:ring-2","focus:ring-[rgba(16,148,192,0.12)]"].join(" ")].join(" ")}),u&&!T&&d.jsx("p",{className:`\r
                    mt-2\r
                    text-xs\r
                    font-bold\r
                    text-rose-600\r
                  `,children:E.locationError})]}),d.jsxs("div",{children:[d.jsx("p",{className:`\r
                  mb-3\r
                  text-sm\r
                  font-black\r
                  text-[var(--lumora-navy-900)]\r
                `,children:E.addServices}),d.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[d.jsx(Ud,{icon:_a,label:E.sofa,active:a.sofas.length>0,onClick:k}),d.jsx(Ud,{icon:zc,label:E.carpet,active:a.carpets.length>0,onClick:b}),d.jsx(Ud,{icon:Vc,label:E.mattress,active:a.mattresses.length>0,onClick:y})]})]}),!j.hasItems&&d.jsxs("div",{className:["rounded-2xl border-2 border-dashed","px-5 py-8 text-center",u?["border-rose-300","bg-rose-50"].join(" "):["border-slate-200","bg-white"].join(" ")].join(" "),children:[d.jsx(Fc,{className:`\r
                    mx-auto\r
                    h-8\r
                    w-8\r
                    text-slate-300\r
                  `}),d.jsx("p",{className:`\r
                    mt-3\r
                    font-black\r
                    text-[var(--lumora-navy-900)]\r
                  `,children:E.emptyTitle}),d.jsx("p",{className:`\r
                    mx-auto\r
                    mt-1\r
                    max-w-md\r
                    text-sm\r
                    leading-6\r
                    text-slate-500\r
                  `,children:u?E.atLeastOneError:E.emptyText})]}),a.sofas.length>0&&d.jsxs($d,{icon:_a,title:E.sofasTitle,children:[d.jsx("div",{className:"space-y-3",children:a.sofas.map((O,C)=>d.jsx(Bd,{title:`${E.sofaItem} ${C+1}`,deleteLabel:E.delete,onDelete:()=>L(O.id),children:d.jsx(ty,{label:E.seats,value:O.seats,onChange:M=>v(O.id,{seats:M})})},O.id))}),d.jsx(Hd,{label:E.addSofa,onClick:k})]}),a.carpets.length>0&&d.jsxs($d,{icon:zc,title:E.carpetsTitle,children:[d.jsx("div",{className:"space-y-3",children:a.carpets.map((O,C)=>{const M=O.unknownMeasurements||lr(O.length)!==null&&lr(O.width)!==null;return d.jsxs(Bd,{title:`${E.carpetItem} ${C+1}`,deleteLabel:E.delete,onDelete:()=>S(O.id),children:[d.jsxs("label",{className:`\r
                              flex\r
                              cursor-pointer\r
                              items-center\r
                              gap-2\r
                              rounded-xl\r
                              bg-slate-50\r
                              px-3\r
                              py-2.5\r
                              text-sm\r
                              font-bold\r
                              text-slate-700\r
                            `,children:[d.jsx("input",{type:"checkbox",checked:O.unknownMeasurements,onChange:F=>{R(O.id,{unknownMeasurements:F.target.checked,...F.target.checked?{length:"",width:""}:{}})},className:`\r
                                h-4\r
                                w-4\r
                                accent-[var(--lumora-green)]\r
                              `}),d.jsx("span",{children:E.unknownMeasurements})]}),!O.unknownMeasurements&&d.jsxs("div",{className:"mt-3 grid grid-cols-2 gap-3",children:[d.jsx(ny,{label:E.length,value:O.length,invalid:u&&lr(O.length)===null,onChange:F=>R(O.id,{length:F})}),d.jsx(ny,{label:E.width,value:O.width,invalid:u&&lr(O.width)===null,onChange:F=>R(O.id,{width:F})})]}),u&&!M&&d.jsx("p",{className:`\r
                                mt-2\r
                                text-xs\r
                                font-bold\r
                                text-rose-600\r
                              `,children:E.carpetMeasurementError})]},O.id)})}),d.jsx(Hd,{label:E.addCarpet,onClick:b})]}),a.mattresses.length>0&&d.jsxs($d,{icon:Vc,title:E.mattressesTitle,children:[d.jsx("div",{className:"space-y-3",children:a.mattresses.map((O,C)=>d.jsxs(Bd,{title:`${E.mattressGroup} ${C+1}`,deleteLabel:E.delete,onDelete:()=>x(O.id),children:[d.jsx(ty,{label:E.mattressCount,value:O.count,onChange:M=>V(O.id,{count:M})}),d.jsx(ry,{label:E.size,options:mf,lang:i,value:O.size,onChange:M=>V(O.id,{size:M})}),d.jsx(ry,{label:E.sides,options:gf,lang:i,value:O.sides,columns:"grid-cols-2",onChange:M=>V(O.id,{sides:M})})]},O.id))}),d.jsx(Hd,{label:E.addMattressGroup,onClick:y})]}),j.hasItems&&d.jsxs("div",{className:`\r
                  rounded-2xl\r
                  border\r
                  border-slate-200\r
                  bg-white\r
                  p-4\r
                `,children:[d.jsx("label",{htmlFor:"order-notes",className:`\r
                    text-sm\r
                    font-black\r
                    text-[var(--lumora-navy-900)]\r
                  `,children:E.notes}),d.jsx("textarea",{id:"order-notes",value:a.notes,onChange:O=>{c(C=>({...C,notes:O.target.value}))},placeholder:E.notesPlaceholder,rows:3,className:`\r
                    mt-2\r
                    w-full\r
                    resize-none\r
                    rounded-xl\r
                    border\r
                    border-slate-200\r
                    bg-white\r
                    px-4\r
                    py-3\r
                    text-sm\r
                    font-medium\r
                    leading-6\r
                    text-slate-900\r
                    outline-none\r
                    transition\r
                    placeholder:text-slate-400\r
                    focus:border-[var(--lumora-cyan)]\r
                    focus:ring-2\r
                    focus:ring-[rgba(16,148,192,0.12)]\r
                  `})]})]})}),d.jsxs("footer",{className:`\r
            shrink-0\r
            border-t\r
            border-slate-200\r
            bg-white\r
            px-4\r
            pb-[max(14px,env(safe-area-inset-bottom))]\r
            pt-3\r
            sm:px-6\r
            sm:pb-5\r
          `,children:[d.jsxs("div",{className:"mb-3 flex items-center justify-between gap-3",children:[d.jsxs("div",{className:`\r
                flex\r
                items-center\r
                gap-2\r
                text-sm\r
                font-bold\r
                text-slate-600\r
              `,children:[d.jsx(CI,{className:`\r
                  h-4\r
                  w-4\r
                  text-[var(--lumora-green)]\r
                `}),d.jsxs("span",{children:[j.totalItems," ",E.items]})]}),j.hasItems&&d.jsx("button",{type:"button",onClick:q,className:`\r
                  text-xs\r
                  font-black\r
                  text-rose-600\r
                  transition\r
                  hover:text-rose-700\r
                `,children:E.clear})]}),d.jsxs("button",{type:"button",onClick:$,className:`\r
              flex\r
              h-12\r
              w-full\r
              items-center\r
              justify-center\r
              gap-2\r
              rounded-xl\r
              bg-[var(--lumora-lime)]\r
              px-4\r
              text-sm\r
              font-black\r
              text-[var(--lumora-navy-950)]\r
              shadow-[0_10px_24px_rgba(79,168,37,0.20)]\r
              transition\r
              hover:brightness-105\r
              active:scale-[0.99]\r
            `,children:[d.jsx(yi,{className:"h-5 w-5"}),d.jsx("span",{children:E.send})]})]})]})]})}function Ud({icon:t,label:e,active:n,onClick:r}){return d.jsxs("button",{type:"button",onClick:r,className:["flex min-h-[84px] flex-col","items-center justify-center gap-2","rounded-2xl border px-2 py-3","text-center text-xs font-black","transition active:scale-[0.98]",n?["border-[rgba(174,221,57,0.55)]","bg-[rgba(174,221,57,0.10)]","text-[var(--lumora-navy-900)]"].join(" "):["border-slate-200","bg-white","text-slate-700","hover:border-[rgba(16,148,192,0.30)]"].join(" ")].join(" "),children:[d.jsx(t,{className:["h-5 w-5",n?"text-[var(--lumora-green)]":"text-[var(--lumora-cyan)]"].join(" ")}),d.jsx("span",{children:e}),d.jsx($a,{className:"h-3.5 w-3.5"})]})}function $d({icon:t,title:e,children:n}){return d.jsxs("section",{className:`\r
        rounded-2xl\r
        border\r
        border-slate-200\r
        bg-white\r
        p-4\r
      `,children:[d.jsxs("div",{className:`\r
          mb-4\r
          flex\r
          items-center\r
          gap-2\r
          border-b\r
          border-slate-100\r
          pb-3\r
        `,children:[d.jsx("div",{className:`\r
            flex\r
            h-9\r
            w-9\r
            items-center\r
            justify-center\r
            rounded-xl\r
            bg-[rgba(16,148,192,0.08)]\r
            text-[var(--lumora-cyan)]\r
          `,children:d.jsx(t,{className:"h-4 w-4"})}),d.jsx("h3",{className:`\r
            text-base\r
            font-black\r
            text-[var(--lumora-navy-900)]\r
          `,children:e})]}),n]})}function Bd({title:t,deleteLabel:e,onDelete:n,children:r}){return d.jsxs("div",{className:`\r
        rounded-2xl\r
        border\r
        border-slate-200\r
        bg-[#fbfcfa]\r
        p-3.5\r
      `,children:[d.jsxs("div",{className:"mb-3 flex items-center justify-between gap-3",children:[d.jsx("p",{className:`\r
            text-sm\r
            font-black\r
            text-[var(--lumora-navy-900)]\r
          `,children:t}),d.jsx("button",{type:"button",onClick:n,"aria-label":e,className:`\r
            flex\r
            h-8\r
            w-8\r
            items-center\r
            justify-center\r
            rounded-lg\r
            text-slate-400\r
            transition\r
            hover:bg-rose-50\r
            hover:text-rose-600\r
            active:scale-95\r
          `,children:d.jsx(c2,{className:"h-4 w-4"})})]}),d.jsx("div",{className:"space-y-4",children:r})]})}function Hd({label:t,onClick:e}){return d.jsxs("button",{type:"button",onClick:e,className:`\r
        mt-3\r
        flex\r
        min-h-11\r
        w-full\r
        items-center\r
        justify-center\r
        gap-2\r
        rounded-xl\r
        border\r
        border-dashed\r
        border-[rgba(16,148,192,0.35)]\r
        bg-[rgba(16,148,192,0.04)]\r
        px-3\r
        text-sm\r
        font-black\r
        text-[var(--lumora-cyan)]\r
        transition\r
        hover:bg-[rgba(16,148,192,0.08)]\r
        active:scale-[0.99]\r
      `,children:[d.jsx($a,{className:"h-4 w-4"}),d.jsx("span",{children:t})]})}function ty({label:t,value:e,onChange:n}){const r=Rt(e);return d.jsxs("div",{className:"flex items-center justify-between gap-3",children:[d.jsx("p",{className:`\r
          text-sm\r
          font-bold\r
          text-slate-700\r
        `,children:t}),d.jsxs("div",{className:`\r
          flex\r
          items-center\r
          gap-1.5\r
          rounded-xl\r
          border\r
          border-slate-200\r
          bg-white\r
          p-1\r
        `,children:[d.jsx("button",{type:"button",onClick:()=>n(Math.max(1,r-1)),disabled:r<=1,className:`\r
            flex\r
            h-9\r
            w-9\r
            items-center\r
            justify-center\r
            rounded-lg\r
            bg-slate-100\r
            text-slate-700\r
            transition\r
            disabled:opacity-35\r
            active:scale-95\r
          `,children:d.jsx(XI,{className:"h-4 w-4"})}),d.jsx("input",{type:"number",min:"1",inputMode:"numeric",value:e,onChange:s=>{const i=s.target.value;if(i===""){n("");return}n(Rt(i))},className:`\r
            h-9\r
            w-12\r
            bg-transparent\r
            text-center\r
            text-base\r
            font-black\r
            text-[var(--lumora-navy-900)]\r
            outline-none\r
          `}),d.jsx("button",{type:"button",onClick:()=>n(r+1),className:`\r
            flex\r
            h-9\r
            w-9\r
            items-center\r
            justify-center\r
            rounded-lg\r
            bg-[var(--lumora-navy-900)]\r
            text-white\r
            transition\r
            active:scale-95\r
          `,children:d.jsx($a,{className:"h-4 w-4"})})]})]})}function ny({label:t,value:e,invalid:n,onChange:r}){return d.jsxs("label",{className:"block",children:[d.jsxs("span",{className:`\r
          flex\r
          items-center\r
          gap-1.5\r
          text-xs\r
          font-bold\r
          text-slate-600\r
        `,children:[d.jsx(s2,{className:"h-3.5 w-3.5"}),t]}),d.jsx("input",{type:"number",min:"0.1",step:"0.1",inputMode:"decimal",value:e,onChange:s=>r(s.target.value),placeholder:"0.0",className:["mt-1.5 h-11 w-full rounded-xl","border bg-white px-3","text-sm font-black text-slate-900","outline-none transition",n?"border-rose-400 ring-2 ring-rose-100":["border-slate-200","focus:border-[var(--lumora-cyan)]","focus:ring-2","focus:ring-[rgba(16,148,192,0.12)]"].join(" ")].join(" ")})]})}function ry({label:t,options:e,lang:n,value:r,onChange:s,columns:i="grid-cols-3"}){return d.jsxs("div",{children:[d.jsx("p",{className:`\r
          mb-2\r
          text-xs\r
          font-bold\r
          text-slate-600\r
        `,children:t}),d.jsx("div",{className:`grid gap-2 ${i}`,children:e.map(o=>{const a=o.value===r;return d.jsx("button",{type:"button",onClick:()=>s(o.value),className:["min-h-11 rounded-xl border","px-2 py-2 text-xs font-black","transition",a?["border-[rgba(174,221,57,0.65)]","bg-[rgba(174,221,57,0.12)]","text-[var(--lumora-navy-900)]"].join(" "):["border-slate-200","bg-white","text-slate-600","hover:bg-slate-50"].join(" ")].join(" "),children:Wp(n,o)},o.value)})})]})}const Wd={upholstery:"972502727724",carpet:"972543075619",mixed:"972543075619"},U2={sofaSeats:0,carpetCount:0,mattressCount:0,selectedServiceCount:0,totalItems:0,hasItems:!1},$2=new Set(["glass"]),ls=(t,e)=>t==="he"?e.he:t==="en"?e.en:e.ar,B2=t=>{var r,s,i;const e=((r=t==null?void 0:t.carpets)==null?void 0:r.length)>0,n=((s=t==null?void 0:t.sofas)==null?void 0:s.length)>0||((i=t==null?void 0:t.mattresses)==null?void 0:i.length)>0;return e&&n?Wd.mixed:e?Wd.carpet:Wd.upholstery};function H2(){const{lang:t,isRTL:e}=kt(),[n,r]=D.useState(!1),[s,i]=D.useState(!1),[o,a]=D.useState(null),[c,u]=D.useState(U2);D.useEffect(()=>{const L=document.getElementById("services-title");if(!L)return;if(!("IntersectionObserver"in window)){r(!0);return}const S=new IntersectionObserver(([x])=>{x.isIntersecting&&(r(!0),S.unobserve(x.target))},{threshold:.18});return S.observe(L),()=>{S.disconnect()}},[]);const h=D.useMemo(()=>j2.filter(L=>L.id!=="car"&&L.id!=="cars"&&L.id!=="carSeats"),[]),p=L=>!!L&&!$2.has(L.id),m=(L=null)=>{a(L),i(!0)},_=()=>{i(!1),a(null)},E=({order:L,message:S})=>{const T=`https://wa.me/${B2(L)}?text=${encodeURIComponent(S)}`;window.open(T,"_blank","noopener,noreferrer"),_()},j=ls(t,{ar:"خدمات في بيت الزبون",he:"שירותים בבית הלקוח",en:"Services at your location"}),k=ls(t,{ar:"شو الخدمة اللي بتحتاجها؟",he:"איזה שירות אתם צריכים?",en:"Which service do you need?"}),b=ls(t,{ar:"اختار خدمة واحدة أو اجمع أكثر من خدمة بنفس الطلب. بتقدر تضيف كل سجادة وكل فرشة بتفاصيلها لحالها.",he:"בחרו שירות אחד או שלבו כמה שירותים באותה הזמנה. ניתן להוסיף כל שטיח וכל מזרן עם הפרטים שלו.",en:"Choose one service or combine several in the same order. Each carpet and mattress can have its own details."}),y=ls(t,{ar:"جهّز طلب متعدد الخدمات",he:"בניית הזמנה עם כמה שירותים",en:"Build a multi-service order"}),v=ls(t,{ar:"كنب، سجاد وفرشات نوم في رسالة واحدة",he:"ספות, שטיחים ומזרנים בהודעה אחת",en:"Sofas, carpets, and mattresses in one message"}),R=ls(t,{ar:"عرض الطلب",he:"צפייה בהזמנה",en:"View order"}),V=ls(t,{ar:c.totalItems===1?"عنصر":"عناصر",he:"פריטים",en:c.totalItems===1?"item":"items"});return d.jsxs(d.Fragment,{children:[d.jsxs("div",{dir:e?"rtl":"ltr",className:"mx-auto w-full max-w-5xl",children:[d.jsxs("header",{id:"services-title",className:["mx-auto mb-8 max-w-3xl text-center sm:mb-10","transition-all duration-500 ease-out",n?"translate-y-0 opacity-100":"translate-y-2 opacity-0"].join(" "),children:[d.jsxs("div",{className:`\r
              inline-flex\r
              items-center\r
              gap-2\r
              rounded-full\r
              border\r
              border-[rgba(17,21,47,0.10)]\r
              bg-[#f7f9f5]\r
              px-3.5\r
              py-1.5\r
              text-xs\r
              font-extrabold\r
              text-[var(--lumora-navy-900)]\r
            `,children:[d.jsx("span",{"aria-hidden":"true",className:`\r
                h-2\r
                w-2\r
                rounded-full\r
                bg-[var(--lumora-lime)]\r
              `}),d.jsx("span",{children:j})]}),d.jsx("h2",{className:`\r
              mt-4\r
              text-[clamp(26px,6vw,40px)]\r
              font-black\r
              leading-tight\r
              tracking-tight\r
              text-[var(--lumora-navy-900)]\r
            `,children:k}),d.jsx("p",{className:`\r
              mx-auto\r
              mt-3\r
              max-w-2xl\r
              text-[15px]\r
              font-medium\r
              leading-7\r
              text-slate-600\r
              sm:text-base\r
            `,children:b})]}),d.jsx("div",{className:`\r
            grid\r
            grid-cols-1\r
            gap-5\r
            sm:grid-cols-2\r
            sm:gap-6\r
          `,children:h.map(L=>{const S=p(L);return d.jsx("div",{className:"h-full",children:d.jsx(L2,{id:L.id,icon:L.icon,titleKey:L.titleKey,descriptionKey:L.descriptionKey,image:L.image,priority:L.priority,onClick:S?()=>m(L.id):void 0,onBook:S?()=>m(L.id):void 0})},L.id)})}),d.jsxs("button",{type:"button",onClick:()=>m(),className:`\r
            group\r
            mt-7\r
            flex\r
            w-full\r
            items-center\r
            gap-3\r
            rounded-2xl\r
            border\r
            border-[rgba(16,148,192,0.18)]\r
            bg-[var(--lumora-navy-950)]\r
            px-4\r
            py-4\r
            text-start\r
            shadow-[0_16px_40px_rgba(8,12,29,0.12)]\r
            transition\r
            hover:-translate-y-0.5\r
            hover:shadow-[0_20px_48px_rgba(8,12,29,0.17)]\r
            active:translate-y-0\r
            sm:px-5\r
          `,children:[d.jsx("span",{className:`\r
              flex\r
              h-12\r
              w-12\r
              shrink-0\r
              items-center\r
              justify-center\r
              rounded-2xl\r
              bg-[rgba(174,221,57,0.12)]\r
              text-[var(--lumora-lime-light)]\r
            `,children:d.jsx(Fc,{className:"h-5 w-5"})}),d.jsxs("span",{className:"min-w-0 flex-1",children:[d.jsx("span",{className:`\r
                block\r
                text-sm\r
                font-black\r
                text-white\r
                sm:text-base\r
              `,children:y}),d.jsx("span",{className:`\r
                mt-1\r
                block\r
                text-xs\r
                font-medium\r
                leading-5\r
                text-white/60\r
                sm:text-sm\r
              `,children:v})]}),d.jsx("span",{className:`\r
              flex\r
              h-9\r
              w-9\r
              shrink-0\r
              items-center\r
              justify-center\r
              rounded-xl\r
              bg-[var(--lumora-lime)]\r
              text-[var(--lumora-navy-950)]\r
              transition\r
              group-hover:scale-105\r
            `,children:d.jsx($a,{className:"h-4 w-4"})})]})]}),d.jsx(z2,{isOpen:s,onClose:_,initialServiceId:o,onSummaryChange:u,onSubmit:E}),c.hasItems&&d.jsxs("button",{type:"button",dir:e?"rtl":"ltr",onClick:()=>m(),className:["fixed bottom-4 z-[9996]","flex min-h-14 items-center gap-3","rounded-2xl","border border-white/15","bg-[var(--lumora-navy-950)]","px-3.5 py-2.5","text-white","shadow-[0_16px_45px_rgba(0,0,0,0.28)]","transition","hover:-translate-y-1","active:scale-[0.98]",e?"right-4":"left-4"].join(" "),children:[d.jsxs("span",{className:`\r
              relative\r
              flex\r
              h-10\r
              w-10\r
              shrink-0\r
              items-center\r
              justify-center\r
              rounded-xl\r
              bg-[rgba(174,221,57,0.13)]\r
              text-[var(--lumora-lime-light)]\r
            `,children:[d.jsx(Fc,{className:"h-5 w-5"}),d.jsx("span",{className:`\r
                absolute\r
                -end-1.5\r
                -top-1.5\r
                flex\r
                min-h-5\r
                min-w-5\r
                items-center\r
                justify-center\r
                rounded-full\r
                bg-[var(--lumora-lime)]\r
                px-1\r
                text-[10px]\r
                font-black\r
                leading-none\r
                text-[var(--lumora-navy-950)]\r
              `,children:c.totalItems})]}),d.jsxs("span",{className:"text-start",children:[d.jsx("span",{className:`\r
                block\r
                text-xs\r
                font-black\r
                leading-tight\r
              `,children:R}),d.jsxs("span",{className:`\r
                mt-0.5\r
                block\r
                text-[10px]\r
                font-bold\r
                text-white/60\r
              `,children:[c.totalItems," ",V]})]}),d.jsx(yi,{"aria-hidden":"true",className:`\r
              h-4\r
              w-4\r
              text-[var(--lumora-lime-light)]\r
            `})]})]})}function sy(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function qp(t,e){t===void 0&&(t={}),e===void 0&&(e={});const n=["__proto__","constructor","prototype"];Object.keys(e).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof t[r]>"u"?t[r]=e[r]:sy(e[r])&&sy(t[r])&&Object.keys(e[r]).length>0&&qp(t[r],e[r])})}const x1={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function gn(){const t=typeof document<"u"?document:{};return qp(t,x1),t}const W2={document:x1,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function pt(){const t=typeof window<"u"?window:{};return qp(t,W2),t}function q2(t){return t===void 0&&(t=""),t.trim().split(" ").filter(e=>!!e.trim())}function G2(t){const e=t;Object.keys(e).forEach(n=>{try{e[n]=null}catch{}try{delete e[n]}catch{}})}function _1(t,e){return e===void 0&&(e=0),setTimeout(t,e)}function Bc(){return Date.now()}function K2(t){const e=pt();let n;return e.getComputedStyle&&(n=e.getComputedStyle(t,null)),!n&&t.currentStyle&&(n=t.currentStyle),n||(n=t.style),n}function Q2(t,e){e===void 0&&(e="x");const n=pt();let r,s,i;const o=K2(t);return n.WebKitCSSMatrix?(s=o.transform||o.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(a=>a.replace(",",".")).join(", ")),i=new n.WebKitCSSMatrix(s==="none"?"":s)):(i=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=i.toString().split(",")),e==="x"&&(n.WebKitCSSMatrix?s=i.m41:r.length===16?s=parseFloat(r[12]):s=parseFloat(r[4])),e==="y"&&(n.WebKitCSSMatrix?s=i.m42:r.length===16?s=parseFloat(r[13]):s=parseFloat(r[5])),s||0}function Pl(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function Y2(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function Ut(){const t=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!Y2(r)){const s=Object.keys(Object(r)).filter(i=>e.indexOf(i)<0);for(let i=0,o=s.length;i<o;i+=1){const a=s[i],c=Object.getOwnPropertyDescriptor(r,a);c!==void 0&&c.enumerable&&(Pl(t[a])&&Pl(r[a])?r[a].__swiper__?t[a]=r[a]:Ut(t[a],r[a]):!Pl(t[a])&&Pl(r[a])?(t[a]={},r[a].__swiper__?t[a]=r[a]:Ut(t[a],r[a])):t[a]=r[a])}}}return t}function Rl(t,e,n){t.style.setProperty(e,n)}function b1(t){let{swiper:e,targetPosition:n,side:r}=t;const s=pt(),i=-e.translate;let o=null,a;const c=e.params.speed;e.wrapperEl.style.scrollSnapType="none",s.cancelAnimationFrame(e.cssModeFrameID);const u=n>i?"next":"prev",h=(m,_)=>u==="next"&&m>=_||u==="prev"&&m<=_,p=()=>{a=new Date().getTime(),o===null&&(o=a);const m=Math.max(Math.min((a-o)/c,1),0),_=.5-Math.cos(m*Math.PI)/2;let E=i+_*(n-i);if(h(E,n)&&(E=n),e.wrapperEl.scrollTo({[r]:E}),h(E,n)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[r]:E})}),s.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=s.requestAnimationFrame(p)};p()}function In(t,e){e===void 0&&(e="");const n=pt(),r=[...t.children];return n.HTMLSlotElement&&t instanceof HTMLSlotElement&&r.push(...t.assignedElements()),e?r.filter(s=>s.matches(e)):r}function X2(t,e){const n=[e];for(;n.length>0;){const r=n.shift();if(t===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function J2(t,e){const n=pt();let r=e.contains(t);return!r&&n.HTMLSlotElement&&e instanceof HTMLSlotElement&&(r=[...e.assignedElements()].includes(t),r||(r=X2(t,e))),r}function Hc(t){try{console.warn(t);return}catch{}}function ba(t,e){e===void 0&&(e=[]);const n=document.createElement(t);return n.classList.add(...Array.isArray(e)?e:q2(e)),n}function Z2(t){const e=pt(),n=gn(),r=t.getBoundingClientRect(),s=n.body,i=t.clientTop||s.clientTop||0,o=t.clientLeft||s.clientLeft||0,a=t===e?e.scrollY:t.scrollTop,c=t===e?e.scrollX:t.scrollLeft;return{top:r.top+a-i,left:r.left+c-o}}function eC(t,e){const n=[];for(;t.previousElementSibling;){const r=t.previousElementSibling;e?r.matches(e)&&n.push(r):n.push(r),t=r}return n}function tC(t,e){const n=[];for(;t.nextElementSibling;){const r=t.nextElementSibling;e?r.matches(e)&&n.push(r):n.push(r),t=r}return n}function Er(t,e){return pt().getComputedStyle(t,null).getPropertyValue(e)}function Ea(t){let e=t,n;if(e){for(n=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(n+=1);return n}}function Wc(t,e){const n=[];let r=t.parentElement;for(;r;)e?r.matches(e)&&n.push(r):n.push(r),r=r.parentElement;return n}function yf(t,e,n){const r=pt();return n?t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):t.offsetWidth}function Ee(t){return(Array.isArray(t)?t:[t]).filter(e=>!!e)}function Ta(t,e){e===void 0&&(e=""),typeof trustedTypes<"u"?t.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(e):t.innerHTML=e}let qd;function nC(){const t=pt(),e=gn();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function E1(){return qd||(qd=nC()),qd}let Gd;function rC(t){let{userAgent:e}=t===void 0?{}:t;const n=E1(),r=pt(),s=r.navigator.platform,i=e||r.navigator.userAgent,o={ios:!1,android:!1},a=r.screen.width,c=r.screen.height,u=i.match(/(Android);?[\s\/]+([\d.]+)?/);let h=i.match(/(iPad).*OS\s([\d_]+)/);const p=i.match(/(iPod)(.*OS\s([\d_]+))?/),m=!h&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),_=s==="Win32";let E=s==="MacIntel";const j=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!h&&E&&n.touch&&j.indexOf(`${a}x${c}`)>=0&&(h=i.match(/(Version)\/([\d.]+)/),h||(h=[0,1,"13_0_0"]),E=!1),u&&!_&&(o.os="android",o.android=!0),(h||m||p)&&(o.os="ios",o.ios=!0),o}function T1(t){return t===void 0&&(t={}),Gd||(Gd=rC(t)),Gd}let Kd;function sC(){const t=pt(),e=T1();let n=!1;function r(){const a=t.navigator.userAgent.toLowerCase();return a.indexOf("safari")>=0&&a.indexOf("chrome")<0&&a.indexOf("android")<0}if(r()){const a=String(t.navigator.userAgent);if(a.includes("Version/")){const[c,u]=a.split("Version/")[1].split(" ")[0].split(".").map(h=>Number(h));n=c<16||c===16&&u<2}}const s=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),i=r(),o=i||s&&e.ios;return{isSafari:n||i,needPerspectiveFix:n,need3dFix:o,isWebView:s}}function S1(){return Kd||(Kd=sC()),Kd}function iC(t){let{swiper:e,on:n,emit:r}=t;const s=pt();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(r("beforeResize"),r("resize"))},c=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(p=>{o=s.requestAnimationFrame(()=>{const{width:m,height:_}=e;let E=m,j=_;p.forEach(k=>{let{contentBoxSize:b,contentRect:y,target:v}=k;v&&v!==e.el||(E=y?y.width:(b[0]||b).inlineSize,j=y?y.height:(b[0]||b).blockSize)}),(E!==m||j!==_)&&a()})}),i.observe(e.el))},u=()=>{o&&s.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},h=()=>{!e||e.destroyed||!e.initialized||r("orientationchange")};n("init",()=>{if(e.params.resizeObserver&&typeof s.ResizeObserver<"u"){c();return}s.addEventListener("resize",a),s.addEventListener("orientationchange",h)}),n("destroy",()=>{u(),s.removeEventListener("resize",a),s.removeEventListener("orientationchange",h)})}function oC(t){let{swiper:e,extendParams:n,on:r,emit:s}=t;const i=[],o=pt(),a=function(h,p){p===void 0&&(p={});const m=o.MutationObserver||o.WebkitMutationObserver,_=new m(E=>{if(e.__preventObserver__)return;if(E.length===1){s("observerUpdate",E[0]);return}const j=function(){s("observerUpdate",E[0])};o.requestAnimationFrame?o.requestAnimationFrame(j):o.setTimeout(j,0)});_.observe(h,{attributes:typeof p.attributes>"u"?!0:p.attributes,childList:e.isElement||(typeof p.childList>"u"?!0:p).childList,characterData:typeof p.characterData>"u"?!0:p.characterData}),i.push(_)},c=()=>{if(e.params.observer){if(e.params.observeParents){const h=Wc(e.hostEl);for(let p=0;p<h.length;p+=1)a(h[p])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},u=()=>{i.forEach(h=>{h.disconnect()}),i.splice(0,i.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",c),r("destroy",u)}var aC={on(t,e,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;const s=n?"unshift":"push";return t.split(" ").forEach(i=>{r.eventsListeners[i]||(r.eventsListeners[i]=[]),r.eventsListeners[i][s](e)}),r},once(t,e,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;function s(){r.off(t,s),s.__emitterProxy&&delete s.__emitterProxy;for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];e.apply(r,o)}return s.__emitterProxy=e,r.on(t,s,n)},onAny(t,e){const n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;const r=e?"unshift":"push";return n.eventsAnyListeners.indexOf(t)<0&&n.eventsAnyListeners[r](t),n},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const n=e.eventsAnyListeners.indexOf(t);return n>=0&&e.eventsAnyListeners.splice(n,1),e},off(t,e){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||t.split(" ").forEach(r=>{typeof e>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((s,i)=>{(s===e||s.__emitterProxy&&s.__emitterProxy===e)&&n.eventsListeners[r].splice(i,1)})}),n},emit(){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let e,n,r;for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return typeof i[0]=="string"||Array.isArray(i[0])?(e=i[0],n=i.slice(1,i.length),r=t):(e=i[0].events,n=i[0].data,r=i[0].context||t),n.unshift(r),(Array.isArray(e)?e:e.split(" ")).forEach(c=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(u=>{u.apply(r,[c,...n])}),t.eventsListeners&&t.eventsListeners[c]&&t.eventsListeners[c].forEach(u=>{u.apply(r,n)})}),t}};function lC(){const t=this;let e,n;const r=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=r.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?n=t.params.height:n=r.clientHeight,!(e===0&&t.isHorizontal()||n===0&&t.isVertical())&&(e=e-parseInt(Er(r,"padding-left")||0,10)-parseInt(Er(r,"padding-right")||0,10),n=n-parseInt(Er(r,"padding-top")||0,10)-parseInt(Er(r,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(n)&&(n=0),Object.assign(t,{width:e,height:n,size:t.isHorizontal()?e:n}))}function cC(){const t=this;function e(I,P){return parseFloat(I.getPropertyValue(t.getDirectionLabel(P))||0)}const n=t.params,{wrapperEl:r,slidesEl:s,size:i,rtlTranslate:o,wrongRTL:a}=t,c=t.virtual&&n.virtual.enabled,u=c?t.virtual.slides.length:t.slides.length,h=In(s,`.${t.params.slideClass}, swiper-slide`),p=c?t.virtual.slides.length:h.length;let m=[];const _=[],E=[];let j=n.slidesOffsetBefore;typeof j=="function"&&(j=n.slidesOffsetBefore.call(t));let k=n.slidesOffsetAfter;typeof k=="function"&&(k=n.slidesOffsetAfter.call(t));const b=t.snapGrid.length,y=t.slidesGrid.length;let v=n.spaceBetween,R=-j,V=0,L=0;if(typeof i>"u")return;typeof v=="string"&&v.indexOf("%")>=0?v=parseFloat(v.replace("%",""))/100*i:typeof v=="string"&&(v=parseFloat(v)),t.virtualSize=-v,h.forEach(I=>{o?I.style.marginLeft="":I.style.marginRight="",I.style.marginBottom="",I.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(Rl(r,"--swiper-centered-offset-before",""),Rl(r,"--swiper-centered-offset-after",""));const S=n.grid&&n.grid.rows>1&&t.grid;S?t.grid.initSlides(h):t.grid&&t.grid.unsetSlides();let x;const T=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(I=>typeof n.breakpoints[I].slidesPerView<"u").length>0;for(let I=0;I<p;I+=1){x=0;let P;if(h[I]&&(P=h[I]),S&&t.grid.updateSlide(I,P,h),!(h[I]&&Er(P,"display")==="none")){if(n.slidesPerView==="auto"){T&&(h[I].style[t.getDirectionLabel("width")]="");const N=getComputedStyle(P),w=P.style.transform,$=P.style.webkitTransform;if(w&&(P.style.transform="none"),$&&(P.style.webkitTransform="none"),n.roundLengths)x=t.isHorizontal()?yf(P,"width",!0):yf(P,"height",!0);else{const q=e(N,"width"),O=e(N,"padding-left"),C=e(N,"padding-right"),M=e(N,"margin-left"),F=e(N,"margin-right"),B=N.getPropertyValue("box-sizing");if(B&&B==="border-box")x=q+M+F;else{const{clientWidth:Y,offsetWidth:G}=P;x=q+O+C+M+F+(G-Y)}}w&&(P.style.transform=w),$&&(P.style.webkitTransform=$),n.roundLengths&&(x=Math.floor(x))}else x=(i-(n.slidesPerView-1)*v)/n.slidesPerView,n.roundLengths&&(x=Math.floor(x)),h[I]&&(h[I].style[t.getDirectionLabel("width")]=`${x}px`);h[I]&&(h[I].swiperSlideSize=x),E.push(x),n.centeredSlides?(R=R+x/2+V/2+v,V===0&&I!==0&&(R=R-i/2-v),I===0&&(R=R-i/2-v),Math.abs(R)<1/1e3&&(R=0),n.roundLengths&&(R=Math.floor(R)),L%n.slidesPerGroup===0&&m.push(R),_.push(R)):(n.roundLengths&&(R=Math.floor(R)),(L-Math.min(t.params.slidesPerGroupSkip,L))%t.params.slidesPerGroup===0&&m.push(R),_.push(R),R=R+x+v),t.virtualSize+=x+v,V=x,L+=1}}if(t.virtualSize=Math.max(t.virtualSize,i)+k,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${t.virtualSize+v}px`),n.setWrapperSize&&(r.style[t.getDirectionLabel("width")]=`${t.virtualSize+v}px`),S&&t.grid.updateWrapperSize(x,m),!n.centeredSlides){const I=[];for(let P=0;P<m.length;P+=1){let N=m[P];n.roundLengths&&(N=Math.floor(N)),m[P]<=t.virtualSize-i&&I.push(N)}m=I,Math.floor(t.virtualSize-i)-Math.floor(m[m.length-1])>1&&m.push(t.virtualSize-i)}if(c&&n.loop){const I=E[0]+v;if(n.slidesPerGroup>1){const P=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/n.slidesPerGroup),N=I*n.slidesPerGroup;for(let w=0;w<P;w+=1)m.push(m[m.length-1]+N)}for(let P=0;P<t.virtual.slidesBefore+t.virtual.slidesAfter;P+=1)n.slidesPerGroup===1&&m.push(m[m.length-1]+I),_.push(_[_.length-1]+I),t.virtualSize+=I}if(m.length===0&&(m=[0]),v!==0){const I=t.isHorizontal()&&o?"marginLeft":t.getDirectionLabel("marginRight");h.filter((P,N)=>!n.cssMode||n.loop?!0:N!==h.length-1).forEach(P=>{P.style[I]=`${v}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let I=0;E.forEach(N=>{I+=N+(v||0)}),I-=v;const P=I>i?I-i:0;m=m.map(N=>N<=0?-j:N>P?P+k:N)}if(n.centerInsufficientSlides){let I=0;E.forEach(N=>{I+=N+(v||0)}),I-=v;const P=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(I+P<i){const N=(i-I-P)/2;m.forEach((w,$)=>{m[$]=w-N}),_.forEach((w,$)=>{_[$]=w+N})}}if(Object.assign(t,{slides:h,snapGrid:m,slidesGrid:_,slidesSizesGrid:E}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Rl(r,"--swiper-centered-offset-before",`${-m[0]}px`),Rl(r,"--swiper-centered-offset-after",`${t.size/2-E[E.length-1]/2}px`);const I=-t.snapGrid[0],P=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(N=>N+I),t.slidesGrid=t.slidesGrid.map(N=>N+P)}if(p!==u&&t.emit("slidesLengthChange"),m.length!==b&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),_.length!==y&&t.emit("slidesGridLengthChange"),n.watchSlidesProgress&&t.updateSlidesOffset(),t.emit("slidesUpdated"),!c&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const I=`${n.containerModifierClass}backface-hidden`,P=t.el.classList.contains(I);p<=n.maxBackfaceHiddenSlides?P||t.el.classList.add(I):P&&t.el.classList.remove(I)}}function uC(t){const e=this,n=[],r=e.virtual&&e.params.virtual.enabled;let s=0,i;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);const o=a=>r?e.slides[e.getSlideIndexByData(a)]:e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{n.push(a)});else for(i=0;i<Math.ceil(e.params.slidesPerView);i+=1){const a=e.activeIndex+i;if(a>e.slides.length&&!r)break;n.push(o(a))}else n.push(o(e.activeIndex));for(i=0;i<n.length;i+=1)if(typeof n[i]<"u"){const a=n[i].offsetHeight;s=a>s?a:s}(s||s===0)&&(e.wrapperEl.style.height=`${s}px`)}function dC(){const t=this,e=t.slides,n=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let r=0;r<e.length;r+=1)e[r].swiperSlideOffset=(t.isHorizontal()?e[r].offsetLeft:e[r].offsetTop)-n-t.cssOverflowAdjustment()}const iy=(t,e,n)=>{e&&!t.classList.contains(n)?t.classList.add(n):!e&&t.classList.contains(n)&&t.classList.remove(n)};function hC(t){t===void 0&&(t=this&&this.translate||0);const e=this,n=e.params,{slides:r,rtlTranslate:s,snapGrid:i}=e;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-t;s&&(o=t),e.visibleSlidesIndexes=[],e.visibleSlides=[];let a=n.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*e.size:typeof a=="string"&&(a=parseFloat(a));for(let c=0;c<r.length;c+=1){const u=r[c];let h=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(h-=r[0].swiperSlideOffset);const p=(o+(n.centeredSlides?e.minTranslate():0)-h)/(u.swiperSlideSize+a),m=(o-i[0]+(n.centeredSlides?e.minTranslate():0)-h)/(u.swiperSlideSize+a),_=-(o-h),E=_+e.slidesSizesGrid[c],j=_>=0&&_<=e.size-e.slidesSizesGrid[c],k=_>=0&&_<e.size-1||E>1&&E<=e.size||_<=0&&E>=e.size;k&&(e.visibleSlides.push(u),e.visibleSlidesIndexes.push(c)),iy(u,k,n.slideVisibleClass),iy(u,j,n.slideFullyVisibleClass),u.progress=s?-p:p,u.originalProgress=s?-m:m}}function fC(t){const e=this;if(typeof t>"u"){const h=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*h||0}const n=e.params,r=e.maxTranslate()-e.minTranslate();let{progress:s,isBeginning:i,isEnd:o,progressLoop:a}=e;const c=i,u=o;if(r===0)s=0,i=!0,o=!0;else{s=(t-e.minTranslate())/r;const h=Math.abs(t-e.minTranslate())<1,p=Math.abs(t-e.maxTranslate())<1;i=h||s<=0,o=p||s>=1,h&&(s=0),p&&(s=1)}if(n.loop){const h=e.getSlideIndexByData(0),p=e.getSlideIndexByData(e.slides.length-1),m=e.slidesGrid[h],_=e.slidesGrid[p],E=e.slidesGrid[e.slidesGrid.length-1],j=Math.abs(t);j>=m?a=(j-m)/E:a=(j+E-_)/E,a>1&&(a-=1)}Object.assign(e,{progress:s,progressLoop:a,isBeginning:i,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&e.updateSlidesProgress(t),i&&!c&&e.emit("reachBeginning toEdge"),o&&!u&&e.emit("reachEnd toEdge"),(c&&!i||u&&!o)&&e.emit("fromEdge"),e.emit("progress",s)}const Qd=(t,e,n)=>{e&&!t.classList.contains(n)?t.classList.add(n):!e&&t.classList.contains(n)&&t.classList.remove(n)};function pC(){const t=this,{slides:e,params:n,slidesEl:r,activeIndex:s}=t,i=t.virtual&&n.virtual.enabled,o=t.grid&&n.grid&&n.grid.rows>1,a=p=>In(r,`.${n.slideClass}${p}, swiper-slide${p}`)[0];let c,u,h;if(i)if(n.loop){let p=s-t.virtual.slidesBefore;p<0&&(p=t.virtual.slides.length+p),p>=t.virtual.slides.length&&(p-=t.virtual.slides.length),c=a(`[data-swiper-slide-index="${p}"]`)}else c=a(`[data-swiper-slide-index="${s}"]`);else o?(c=e.find(p=>p.column===s),h=e.find(p=>p.column===s+1),u=e.find(p=>p.column===s-1)):c=e[s];c&&(o||(h=tC(c,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!h&&(h=e[0]),u=eC(c,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=e[e.length-1]))),e.forEach(p=>{Qd(p,p===c,n.slideActiveClass),Qd(p,p===h,n.slideNextClass),Qd(p,p===u,n.slidePrevClass)}),t.emitSlidesClasses()}const rc=(t,e)=>{if(!t||t.destroyed||!t.params)return;const n=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,r=e.closest(n());if(r){let s=r.querySelector(`.${t.params.lazyPreloaderClass}`);!s&&t.isElement&&(r.shadowRoot?s=r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(s=r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),s&&s.remove())})),s&&s.remove()}},Yd=(t,e)=>{if(!t.slides[e])return;const n=t.slides[e].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},vf=t=>{if(!t||t.destroyed||!t.params)return;let e=t.params.lazyPreloadPrevNext;const n=t.slides.length;if(!n||!e||e<0)return;e=Math.min(e,n);const r=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(t.params.slidesPerView),s=t.activeIndex;if(t.params.grid&&t.params.grid.rows>1){const o=s,a=[o-e];a.push(...Array.from({length:e}).map((c,u)=>o+r+u)),t.slides.forEach((c,u)=>{a.includes(c.column)&&Yd(t,u)});return}const i=s+r-1;if(t.params.rewind||t.params.loop)for(let o=s-e;o<=i+e;o+=1){const a=(o%n+n)%n;(a<s||a>i)&&Yd(t,a)}else for(let o=Math.max(s-e,0);o<=Math.min(i+e,n-1);o+=1)o!==s&&(o>i||o<s)&&Yd(t,o)};function mC(t){const{slidesGrid:e,params:n}=t,r=t.rtlTranslate?t.translate:-t.translate;let s;for(let i=0;i<e.length;i+=1)typeof e[i+1]<"u"?r>=e[i]&&r<e[i+1]-(e[i+1]-e[i])/2?s=i:r>=e[i]&&r<e[i+1]&&(s=i+1):r>=e[i]&&(s=i);return n.normalizeSlideIndex&&(s<0||typeof s>"u")&&(s=0),s}function gC(t){const e=this,n=e.rtlTranslate?e.translate:-e.translate,{snapGrid:r,params:s,activeIndex:i,realIndex:o,snapIndex:a}=e;let c=t,u;const h=_=>{let E=_-e.virtual.slidesBefore;return E<0&&(E=e.virtual.slides.length+E),E>=e.virtual.slides.length&&(E-=e.virtual.slides.length),E};if(typeof c>"u"&&(c=mC(e)),r.indexOf(n)>=0)u=r.indexOf(n);else{const _=Math.min(s.slidesPerGroupSkip,c);u=_+Math.floor((c-_)/s.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),c===i&&!e.params.loop){u!==a&&(e.snapIndex=u,e.emit("snapIndexChange"));return}if(c===i&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=h(c);return}const p=e.grid&&s.grid&&s.grid.rows>1;let m;if(e.virtual&&s.virtual.enabled&&s.loop)m=h(c);else if(p){const _=e.slides.find(j=>j.column===c);let E=parseInt(_.getAttribute("data-swiper-slide-index"),10);Number.isNaN(E)&&(E=Math.max(e.slides.indexOf(_),0)),m=Math.floor(E/s.grid.rows)}else if(e.slides[c]){const _=e.slides[c].getAttribute("data-swiper-slide-index");_?m=parseInt(_,10):m=c}else m=c;Object.assign(e,{previousSnapIndex:a,snapIndex:u,previousRealIndex:o,realIndex:m,previousIndex:i,activeIndex:c}),e.initialized&&vf(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(o!==m&&e.emit("realIndexChange"),e.emit("slideChange"))}function yC(t,e){const n=this,r=n.params;let s=t.closest(`.${r.slideClass}, swiper-slide`);!s&&n.isElement&&e&&e.length>1&&e.includes(t)&&[...e.slice(e.indexOf(t)+1,e.length)].forEach(a=>{!s&&a.matches&&a.matches(`.${r.slideClass}, swiper-slide`)&&(s=a)});let i=!1,o;if(s){for(let a=0;a<n.slides.length;a+=1)if(n.slides[a]===s){i=!0,o=a;break}}if(s&&i)n.clickedSlide=s,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(s.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var vC={updateSize:lC,updateSlides:cC,updateAutoHeight:uC,updateSlidesOffset:dC,updateSlidesProgress:hC,updateProgress:fC,updateSlidesClasses:pC,updateActiveIndex:gC,updateClickedSlide:yC};function wC(t){t===void 0&&(t=this.isHorizontal()?"x":"y");const e=this,{params:n,rtlTranslate:r,translate:s,wrapperEl:i}=e;if(n.virtualTranslate)return r?-s:s;if(n.cssMode)return s;let o=Q2(i,t);return o+=e.cssOverflowAdjustment(),r&&(o=-o),o||0}function xC(t,e){const n=this,{rtlTranslate:r,params:s,wrapperEl:i,progress:o}=n;let a=0,c=0;const u=0;n.isHorizontal()?a=r?-t:t:c=t,s.roundLengths&&(a=Math.floor(a),c=Math.floor(c)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:c,s.cssMode?i[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-c:s.virtualTranslate||(n.isHorizontal()?a-=n.cssOverflowAdjustment():c-=n.cssOverflowAdjustment(),i.style.transform=`translate3d(${a}px, ${c}px, ${u}px)`);let h;const p=n.maxTranslate()-n.minTranslate();p===0?h=0:h=(t-n.minTranslate())/p,h!==o&&n.updateProgress(t),n.emit("setTranslate",n.translate,e)}function _C(){return-this.snapGrid[0]}function bC(){return-this.snapGrid[this.snapGrid.length-1]}function EC(t,e,n,r,s){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const i=this,{params:o,wrapperEl:a}=i;if(i.animating&&o.preventInteractionOnTransition)return!1;const c=i.minTranslate(),u=i.maxTranslate();let h;if(r&&t>c?h=c:r&&t<u?h=u:h=t,i.updateProgress(h),o.cssMode){const p=i.isHorizontal();if(e===0)a[p?"scrollLeft":"scrollTop"]=-h;else{if(!i.support.smoothScroll)return b1({swiper:i,targetPosition:-h,side:p?"left":"top"}),!0;a.scrollTo({[p?"left":"top"]:-h,behavior:"smooth"})}return!0}return e===0?(i.setTransition(0),i.setTranslate(h),n&&(i.emit("beforeTransitionStart",e,s),i.emit("transitionEnd"))):(i.setTransition(e),i.setTranslate(h),n&&(i.emit("beforeTransitionStart",e,s),i.emit("transitionStart")),i.animating||(i.animating=!0,i.onTranslateToWrapperTransitionEnd||(i.onTranslateToWrapperTransitionEnd=function(m){!i||i.destroyed||m.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onTranslateToWrapperTransitionEnd),i.onTranslateToWrapperTransitionEnd=null,delete i.onTranslateToWrapperTransitionEnd,i.animating=!1,n&&i.emit("transitionEnd"))}),i.wrapperEl.addEventListener("transitionend",i.onTranslateToWrapperTransitionEnd))),!0}var TC={getTranslate:wC,setTranslate:xC,minTranslate:_C,maxTranslate:bC,translateTo:EC};function SC(t,e){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${t}ms`,n.wrapperEl.style.transitionDelay=t===0?"0ms":""),n.emit("setTransition",t,e)}function I1(t){let{swiper:e,runCallbacks:n,direction:r,step:s}=t;const{activeIndex:i,previousIndex:o}=e;let a=r;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${s}`),n&&a==="reset"?e.emit(`slideResetTransition${s}`):n&&i!==o&&(e.emit(`slideChangeTransition${s}`),a==="next"?e.emit(`slideNextTransition${s}`):e.emit(`slidePrevTransition${s}`))}function IC(t,e){t===void 0&&(t=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),I1({swiper:n,runCallbacks:t,direction:e,step:"Start"}))}function CC(t,e){t===void 0&&(t=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),I1({swiper:n,runCallbacks:t,direction:e,step:"End"}))}var AC={setTransition:SC,transitionStart:IC,transitionEnd:CC};function kC(t,e,n,r,s){t===void 0&&(t=0),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const i=this;let o=t;o<0&&(o=0);const{params:a,snapGrid:c,slidesGrid:u,previousIndex:h,activeIndex:p,rtlTranslate:m,wrapperEl:_,enabled:E}=i;if(!E&&!r&&!s||i.destroyed||i.animating&&a.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=i.params.speed);const j=Math.min(i.params.slidesPerGroupSkip,o);let k=j+Math.floor((o-j)/i.params.slidesPerGroup);k>=c.length&&(k=c.length-1);const b=-c[k];if(a.normalizeSlideIndex)for(let S=0;S<u.length;S+=1){const x=-Math.floor(b*100),T=Math.floor(u[S]*100),I=Math.floor(u[S+1]*100);typeof u[S+1]<"u"?x>=T&&x<I-(I-T)/2?o=S:x>=T&&x<I&&(o=S+1):x>=T&&(o=S)}if(i.initialized&&o!==p&&(!i.allowSlideNext&&(m?b>i.translate&&b>i.minTranslate():b<i.translate&&b<i.minTranslate())||!i.allowSlidePrev&&b>i.translate&&b>i.maxTranslate()&&(p||0)!==o))return!1;o!==(h||0)&&n&&i.emit("beforeSlideChangeStart"),i.updateProgress(b);let y;o>p?y="next":o<p?y="prev":y="reset";const v=i.virtual&&i.params.virtual.enabled;if(!(v&&s)&&(m&&-b===i.translate||!m&&b===i.translate))return i.updateActiveIndex(o),a.autoHeight&&i.updateAutoHeight(),i.updateSlidesClasses(),a.effect!=="slide"&&i.setTranslate(b),y!=="reset"&&(i.transitionStart(n,y),i.transitionEnd(n,y)),!1;if(a.cssMode){const S=i.isHorizontal(),x=m?b:-b;if(e===0)v&&(i.wrapperEl.style.scrollSnapType="none",i._immediateVirtual=!0),v&&!i._cssModeVirtualInitialSet&&i.params.initialSlide>0?(i._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{_[S?"scrollLeft":"scrollTop"]=x})):_[S?"scrollLeft":"scrollTop"]=x,v&&requestAnimationFrame(()=>{i.wrapperEl.style.scrollSnapType="",i._immediateVirtual=!1});else{if(!i.support.smoothScroll)return b1({swiper:i,targetPosition:x,side:S?"left":"top"}),!0;_.scrollTo({[S?"left":"top"]:x,behavior:"smooth"})}return!0}const L=S1().isSafari;return v&&!s&&L&&i.isElement&&i.virtual.update(!1,!1,o),i.setTransition(e),i.setTranslate(b),i.updateActiveIndex(o),i.updateSlidesClasses(),i.emit("beforeTransitionStart",e,r),i.transitionStart(n,y),e===0?i.transitionEnd(n,y):i.animating||(i.animating=!0,i.onSlideToWrapperTransitionEnd||(i.onSlideToWrapperTransitionEnd=function(x){!i||i.destroyed||x.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onSlideToWrapperTransitionEnd),i.onSlideToWrapperTransitionEnd=null,delete i.onSlideToWrapperTransitionEnd,i.transitionEnd(n,y))}),i.wrapperEl.addEventListener("transitionend",i.onSlideToWrapperTransitionEnd)),!0}function NC(t,e,n,r){t===void 0&&(t=0),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const s=this;if(s.destroyed)return;typeof e>"u"&&(e=s.params.speed);const i=s.grid&&s.params.grid&&s.params.grid.rows>1;let o=t;if(s.params.loop)if(s.virtual&&s.params.virtual.enabled)o=o+s.virtual.slidesBefore;else{let a;if(i){const m=o*s.params.grid.rows;a=s.slides.find(_=>_.getAttribute("data-swiper-slide-index")*1===m).column}else a=s.getSlideIndexByData(o);const c=i?Math.ceil(s.slides.length/s.params.grid.rows):s.slides.length,{centeredSlides:u}=s.params;let h=s.params.slidesPerView;h==="auto"?h=s.slidesPerViewDynamic():(h=Math.ceil(parseFloat(s.params.slidesPerView,10)),u&&h%2===0&&(h=h+1));let p=c-a<h;if(u&&(p=p||a<Math.ceil(h/2)),r&&u&&s.params.slidesPerView!=="auto"&&!i&&(p=!1),p){const m=u?a<s.activeIndex?"prev":"next":a-s.activeIndex-1<s.params.slidesPerView?"next":"prev";s.loopFix({direction:m,slideTo:!0,activeSlideIndex:m==="next"?a+1:a-c+1,slideRealIndex:m==="next"?s.realIndex:void 0})}if(i){const m=o*s.params.grid.rows;o=s.slides.find(_=>_.getAttribute("data-swiper-slide-index")*1===m).column}else o=s.getSlideIndexByData(o)}return requestAnimationFrame(()=>{s.slideTo(o,e,n,r)}),s}function PC(t,e,n){e===void 0&&(e=!0);const r=this,{enabled:s,params:i,animating:o}=r;if(!s||r.destroyed)return r;typeof t>"u"&&(t=r.params.speed);let a=i.slidesPerGroup;i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(a=Math.max(r.slidesPerViewDynamic("current",!0),1));const c=r.activeIndex<i.slidesPerGroupSkip?1:a,u=r.virtual&&i.virtual.enabled;if(i.loop){if(o&&!u&&i.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+c,t,e,n)}),!0}return i.rewind&&r.isEnd?r.slideTo(0,t,e,n):r.slideTo(r.activeIndex+c,t,e,n)}function RC(t,e,n){e===void 0&&(e=!0);const r=this,{params:s,snapGrid:i,slidesGrid:o,rtlTranslate:a,enabled:c,animating:u}=r;if(!c||r.destroyed)return r;typeof t>"u"&&(t=r.params.speed);const h=r.virtual&&s.virtual.enabled;if(s.loop){if(u&&!h&&s.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const p=a?r.translate:-r.translate;function m(y){return y<0?-Math.floor(Math.abs(y)):Math.floor(y)}const _=m(p),E=i.map(y=>m(y)),j=s.freeMode&&s.freeMode.enabled;let k=i[E.indexOf(_)-1];if(typeof k>"u"&&(s.cssMode||j)){let y;i.forEach((v,R)=>{_>=v&&(y=R)}),typeof y<"u"&&(k=j?i[y]:i[y>0?y-1:y])}let b=0;if(typeof k<"u"&&(b=o.indexOf(k),b<0&&(b=r.activeIndex-1),s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(b=b-r.slidesPerViewDynamic("previous",!0)+1,b=Math.max(b,0))),s.rewind&&r.isBeginning){const y=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(y,t,e,n)}else if(s.loop&&r.activeIndex===0&&s.cssMode)return requestAnimationFrame(()=>{r.slideTo(b,t,e,n)}),!0;return r.slideTo(b,t,e,n)}function jC(t,e,n){e===void 0&&(e=!0);const r=this;if(!r.destroyed)return typeof t>"u"&&(t=r.params.speed),r.slideTo(r.activeIndex,t,e,n)}function MC(t,e,n,r){e===void 0&&(e=!0),r===void 0&&(r=.5);const s=this;if(s.destroyed)return;typeof t>"u"&&(t=s.params.speed);let i=s.activeIndex;const o=Math.min(s.params.slidesPerGroupSkip,i),a=o+Math.floor((i-o)/s.params.slidesPerGroup),c=s.rtlTranslate?s.translate:-s.translate;if(c>=s.snapGrid[a]){const u=s.snapGrid[a],h=s.snapGrid[a+1];c-u>(h-u)*r&&(i+=s.params.slidesPerGroup)}else{const u=s.snapGrid[a-1],h=s.snapGrid[a];c-u<=(h-u)*r&&(i-=s.params.slidesPerGroup)}return i=Math.max(i,0),i=Math.min(i,s.slidesGrid.length-1),s.slideTo(i,t,e,n)}function LC(){const t=this;if(t.destroyed)return;const{params:e,slidesEl:n}=t,r=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView;let s=t.getSlideIndexWhenGrid(t.clickedIndex),i;const o=t.isElement?"swiper-slide":`.${e.slideClass}`,a=t.grid&&t.params.grid&&t.params.grid.rows>1;if(e.loop){if(t.animating)return;i=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?t.slideToLoop(i):s>(a?(t.slides.length-r)/2-(t.params.grid.rows-1):t.slides.length-r)?(t.loopFix(),s=t.getSlideIndex(In(n,`${o}[data-swiper-slide-index="${i}"]`)[0]),_1(()=>{t.slideTo(s)})):t.slideTo(s)}else t.slideTo(s)}var DC={slideTo:kC,slideToLoop:NC,slideNext:PC,slidePrev:RC,slideReset:jC,slideToClosest:MC,slideToClickedSlide:LC};function OC(t,e){const n=this,{params:r,slidesEl:s}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const i=()=>{In(s,`.${r.slideClass}, swiper-slide`).forEach((_,E)=>{_.setAttribute("data-swiper-slide-index",E)})},o=()=>{const m=In(s,`.${r.slideBlankClass}`);m.forEach(_=>{_.remove()}),m.length>0&&(n.recalcSlides(),n.updateSlides())},a=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||a)&&o();const c=r.slidesPerGroup*(a?r.grid.rows:1),u=n.slides.length%c!==0,h=a&&n.slides.length%r.grid.rows!==0,p=m=>{for(let _=0;_<m;_+=1){const E=n.isElement?ba("swiper-slide",[r.slideBlankClass]):ba("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(E)}};if(u){if(r.loopAddBlankSlides){const m=c-n.slides.length%c;p(m),n.recalcSlides(),n.updateSlides()}else Hc("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(h){if(r.loopAddBlankSlides){const m=r.grid.rows-n.slides.length%r.grid.rows;p(m),n.recalcSlides(),n.updateSlides()}else Hc("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();n.loopFix({slideRealIndex:t,direction:r.centeredSlides?void 0:"next",initial:e})}function VC(t){let{slideRealIndex:e,slideTo:n=!0,direction:r,setTranslate:s,activeSlideIndex:i,initial:o,byController:a,byMousewheel:c}=t===void 0?{}:t;const u=this;if(!u.params.loop)return;u.emit("beforeLoopFix");const{slides:h,allowSlidePrev:p,allowSlideNext:m,slidesEl:_,params:E}=u,{centeredSlides:j,initialSlide:k}=E;if(u.allowSlidePrev=!0,u.allowSlideNext=!0,u.virtual&&E.virtual.enabled){n&&(!E.centeredSlides&&u.snapIndex===0?u.slideTo(u.virtual.slides.length,0,!1,!0):E.centeredSlides&&u.snapIndex<E.slidesPerView?u.slideTo(u.virtual.slides.length+u.snapIndex,0,!1,!0):u.snapIndex===u.snapGrid.length-1&&u.slideTo(u.virtual.slidesBefore,0,!1,!0)),u.allowSlidePrev=p,u.allowSlideNext=m,u.emit("loopFix");return}let b=E.slidesPerView;b==="auto"?b=u.slidesPerViewDynamic():(b=Math.ceil(parseFloat(E.slidesPerView,10)),j&&b%2===0&&(b=b+1));const y=E.slidesPerGroupAuto?b:E.slidesPerGroup;let v=j?Math.max(y,Math.ceil(b/2)):y;v%y!==0&&(v+=y-v%y),v+=E.loopAdditionalSlides,u.loopedSlides=v;const R=u.grid&&E.grid&&E.grid.rows>1;h.length<b+v||u.params.effect==="cards"&&h.length<b+v*2?Hc("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):R&&E.grid.fill==="row"&&Hc("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const V=[],L=[],S=R?Math.ceil(h.length/E.grid.rows):h.length,x=o&&S-k<b&&!j;let T=x?k:u.activeIndex;typeof i>"u"?i=u.getSlideIndex(h.find(O=>O.classList.contains(E.slideActiveClass))):T=i;const I=r==="next"||!r,P=r==="prev"||!r;let N=0,w=0;const q=(R?h[i].column:i)+(j&&typeof s>"u"?-b/2+.5:0);if(q<v){N=Math.max(v-q,y);for(let O=0;O<v-q;O+=1){const C=O-Math.floor(O/S)*S;if(R){const M=S-C-1;for(let F=h.length-1;F>=0;F-=1)h[F].column===M&&V.push(F)}else V.push(S-C-1)}}else if(q+b>S-v){w=Math.max(q-(S-v*2),y),x&&(w=Math.max(w,b-S+k+1));for(let O=0;O<w;O+=1){const C=O-Math.floor(O/S)*S;R?h.forEach((M,F)=>{M.column===C&&L.push(F)}):L.push(C)}}if(u.__preventObserver__=!0,requestAnimationFrame(()=>{u.__preventObserver__=!1}),u.params.effect==="cards"&&h.length<b+v*2&&(L.includes(i)&&L.splice(L.indexOf(i),1),V.includes(i)&&V.splice(V.indexOf(i),1)),P&&V.forEach(O=>{h[O].swiperLoopMoveDOM=!0,_.prepend(h[O]),h[O].swiperLoopMoveDOM=!1}),I&&L.forEach(O=>{h[O].swiperLoopMoveDOM=!0,_.append(h[O]),h[O].swiperLoopMoveDOM=!1}),u.recalcSlides(),E.slidesPerView==="auto"?u.updateSlides():R&&(V.length>0&&P||L.length>0&&I)&&u.slides.forEach((O,C)=>{u.grid.updateSlide(C,O,u.slides)}),E.watchSlidesProgress&&u.updateSlidesOffset(),n){if(V.length>0&&P){if(typeof e>"u"){const O=u.slidesGrid[T],M=u.slidesGrid[T+N]-O;c?u.setTranslate(u.translate-M):(u.slideTo(T+Math.ceil(N),0,!1,!0),s&&(u.touchEventsData.startTranslate=u.touchEventsData.startTranslate-M,u.touchEventsData.currentTranslate=u.touchEventsData.currentTranslate-M))}else if(s){const O=R?V.length/E.grid.rows:V.length;u.slideTo(u.activeIndex+O,0,!1,!0),u.touchEventsData.currentTranslate=u.translate}}else if(L.length>0&&I)if(typeof e>"u"){const O=u.slidesGrid[T],M=u.slidesGrid[T-w]-O;c?u.setTranslate(u.translate-M):(u.slideTo(T-w,0,!1,!0),s&&(u.touchEventsData.startTranslate=u.touchEventsData.startTranslate-M,u.touchEventsData.currentTranslate=u.touchEventsData.currentTranslate-M))}else{const O=R?L.length/E.grid.rows:L.length;u.slideTo(u.activeIndex-O,0,!1,!0)}}if(u.allowSlidePrev=p,u.allowSlideNext=m,u.controller&&u.controller.control&&!a){const O={slideRealIndex:e,direction:r,setTranslate:s,activeSlideIndex:i,byController:!0};Array.isArray(u.controller.control)?u.controller.control.forEach(C=>{!C.destroyed&&C.params.loop&&C.loopFix({...O,slideTo:C.params.slidesPerView===E.slidesPerView?n:!1})}):u.controller.control instanceof u.constructor&&u.controller.control.params.loop&&u.controller.control.loopFix({...O,slideTo:u.controller.control.params.slidesPerView===E.slidesPerView?n:!1})}u.emit("loopFix")}function FC(){const t=this,{params:e,slidesEl:n}=t;if(!e.loop||!n||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const r=[];t.slides.forEach(s=>{const i=typeof s.swiperSlideIndex>"u"?s.getAttribute("data-swiper-slide-index")*1:s.swiperSlideIndex;r[i]=s}),t.slides.forEach(s=>{s.removeAttribute("data-swiper-slide-index")}),r.forEach(s=>{n.append(s)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}var zC={loopCreate:OC,loopFix:VC,loopDestroy:FC};function UC(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const n=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=t?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function $C(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t.isElement&&(t.__preventObserver__=!0),t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1}))}var BC={setGrabCursor:UC,unsetGrabCursor:$C};function HC(t,e){e===void 0&&(e=this);function n(r){if(!r||r===gn()||r===pt())return null;r.assignedSlot&&(r=r.assignedSlot);const s=r.closest(t);return!s&&!r.getRootNode?null:s||n(r.getRootNode().host)}return n(e)}function oy(t,e,n){const r=pt(),{params:s}=t,i=s.edgeSwipeDetection,o=s.edgeSwipeThreshold;return i&&(n<=o||n>=r.innerWidth-o)?i==="prevent"?(e.preventDefault(),!0):!1:!0}function WC(t){const e=this,n=gn();let r=t;r.originalEvent&&(r=r.originalEvent);const s=e.touchEventsData;if(r.type==="pointerdown"){if(s.pointerId!==null&&s.pointerId!==r.pointerId)return;s.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(s.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){oy(e,r,r.targetTouches[0].pageX);return}const{params:i,touches:o,enabled:a}=e;if(!a||!i.simulateTouch&&r.pointerType==="mouse"||e.animating&&i.preventInteractionOnTransition)return;!e.animating&&i.cssMode&&i.loop&&e.loopFix();let c=r.target;if(i.touchEventsTarget==="wrapper"&&!J2(c,e.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||s.isTouched&&s.isMoved)return;const u=!!i.noSwipingClass&&i.noSwipingClass!=="",h=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&h&&(c=h[0]);const p=i.noSwipingSelector?i.noSwipingSelector:`.${i.noSwipingClass}`,m=!!(r.target&&r.target.shadowRoot);if(i.noSwiping&&(m?HC(p,c):c.closest(p))){e.allowClick=!0;return}if(i.swipeHandler&&!c.closest(i.swipeHandler))return;o.currentX=r.pageX,o.currentY=r.pageY;const _=o.currentX,E=o.currentY;if(!oy(e,r,_))return;Object.assign(s,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=_,o.startY=E,s.touchStartTime=Bc(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,i.threshold>0&&(s.allowThresholdMove=!1);let j=!0;c.matches(s.focusableElements)&&(j=!1,c.nodeName==="SELECT"&&(s.isTouched=!1)),n.activeElement&&n.activeElement.matches(s.focusableElements)&&n.activeElement!==c&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!c.matches(s.focusableElements))&&n.activeElement.blur();const k=j&&e.allowTouchMove&&i.touchStartPreventDefault;(i.touchStartForcePreventDefault||k)&&!c.isContentEditable&&r.preventDefault(),i.freeMode&&i.freeMode.enabled&&e.freeMode&&e.animating&&!i.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",r)}function qC(t){const e=gn(),n=this,r=n.touchEventsData,{params:s,touches:i,rtlTranslate:o,enabled:a}=n;if(!a||!s.simulateTouch&&t.pointerType==="mouse")return;let c=t;if(c.originalEvent&&(c=c.originalEvent),c.type==="pointermove"&&(r.touchId!==null||c.pointerId!==r.pointerId))return;let u;if(c.type==="touchmove"){if(u=[...c.changedTouches].find(L=>L.identifier===r.touchId),!u||u.identifier!==r.touchId)return}else u=c;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",c);return}const h=u.pageX,p=u.pageY;if(c.preventedByNestedSwiper){i.startX=h,i.startY=p;return}if(!n.allowTouchMove){c.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(i,{startX:h,startY:p,currentX:h,currentY:p}),r.touchStartTime=Bc());return}if(s.touchReleaseOnEdges&&!s.loop)if(n.isVertical()){if(p<i.startY&&n.translate<=n.maxTranslate()||p>i.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(o&&(h>i.startX&&-n.translate<=n.maxTranslate()||h<i.startX&&-n.translate>=n.minTranslate()))return;if(!o&&(h<i.startX&&n.translate<=n.maxTranslate()||h>i.startX&&n.translate>=n.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(r.focusableElements)&&e.activeElement!==c.target&&c.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&c.target===e.activeElement&&c.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",c),i.previousX=i.currentX,i.previousY=i.currentY,i.currentX=h,i.currentY=p;const m=i.currentX-i.startX,_=i.currentY-i.startY;if(n.params.threshold&&Math.sqrt(m**2+_**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let L;n.isHorizontal()&&i.currentY===i.startY||n.isVertical()&&i.currentX===i.startX?r.isScrolling=!1:m*m+_*_>=25&&(L=Math.atan2(Math.abs(_),Math.abs(m))*180/Math.PI,r.isScrolling=n.isHorizontal()?L>s.touchAngle:90-L>s.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",c),typeof r.startMoving>"u"&&(i.currentX!==i.startX||i.currentY!==i.startY)&&(r.startMoving=!0),r.isScrolling||c.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!s.cssMode&&c.cancelable&&c.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&c.stopPropagation();let E=n.isHorizontal()?m:_,j=n.isHorizontal()?i.currentX-i.previousX:i.currentY-i.previousY;s.oneWayMovement&&(E=Math.abs(E)*(o?1:-1),j=Math.abs(j)*(o?1:-1)),i.diff=E,E*=s.touchRatio,o&&(E=-E,j=-j);const k=n.touchesDirection;n.swipeDirection=E>0?"prev":"next",n.touchesDirection=j>0?"prev":"next";const b=n.params.loop&&!s.cssMode,y=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(b&&y&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const L=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(L)}r.allowMomentumBounce=!1,s.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",c)}let v;if(new Date().getTime(),s._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&k!==n.touchesDirection&&b&&y&&Math.abs(E)>=1){Object.assign(i,{startX:h,startY:p,currentX:h,currentY:p,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",c),r.isMoved=!0,r.currentTranslate=E+r.startTranslate;let R=!0,V=s.resistanceRatio;if(s.touchReleaseOnEdges&&(V=0),E>0?(b&&y&&!v&&r.allowThresholdMove&&r.currentTranslate>(s.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(s.slidesPerView!=="auto"&&n.slides.length-s.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(R=!1,s.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+E)**V))):E<0&&(b&&y&&!v&&r.allowThresholdMove&&r.currentTranslate<(s.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(s.slidesPerView!=="auto"&&n.slides.length-s.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(s.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(s.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(R=!1,s.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-E)**V))),R&&(c.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),s.threshold>0)if(Math.abs(E)>s.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,i.startX=i.currentX,i.startY=i.currentY,r.currentTranslate=r.startTranslate,i.diff=n.isHorizontal()?i.currentX-i.startX:i.currentY-i.startY;return}}else{r.currentTranslate=r.startTranslate;return}!s.followFinger||s.cssMode||((s.freeMode&&s.freeMode.enabled&&n.freeMode||s.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),s.freeMode&&s.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function GC(t){const e=this,n=e.touchEventsData;let r=t;r.originalEvent&&(r=r.originalEvent);let s;if(r.type==="touchend"||r.type==="touchcancel"){if(s=[...r.changedTouches].find(V=>V.identifier===n.touchId),!s||s.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;s=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(e.browser.isSafari||e.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:o,touches:a,rtlTranslate:c,slidesGrid:u,enabled:h}=e;if(!h||!o.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&e.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&o.grabCursor&&e.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}o.grabCursor&&n.isMoved&&n.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const p=Bc(),m=p-n.touchStartTime;if(e.allowClick){const V=r.path||r.composedPath&&r.composedPath();e.updateClickedSlide(V&&V[0]||r.target,V),e.emit("tap click",r),m<300&&p-n.lastClickTime<300&&e.emit("doubleTap doubleClick",r)}if(n.lastClickTime=Bc(),_1(()=>{e.destroyed||(e.allowClick=!0)}),!n.isTouched||!n.isMoved||!e.swipeDirection||a.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let _;if(o.followFinger?_=c?e.translate:-e.translate:_=-n.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:_});return}const E=_>=-e.maxTranslate()&&!e.params.loop;let j=0,k=e.slidesSizesGrid[0];for(let V=0;V<u.length;V+=V<o.slidesPerGroupSkip?1:o.slidesPerGroup){const L=V<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof u[V+L]<"u"?(E||_>=u[V]&&_<u[V+L])&&(j=V,k=u[V+L]-u[V]):(E||_>=u[V])&&(j=V,k=u[u.length-1]-u[u.length-2])}let b=null,y=null;o.rewind&&(e.isBeginning?y=o.virtual&&o.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(b=0));const v=(_-u[j])/k,R=j<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(m>o.longSwipesMs){if(!o.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(v>=o.longSwipesRatio?e.slideTo(o.rewind&&e.isEnd?b:j+R):e.slideTo(j)),e.swipeDirection==="prev"&&(v>1-o.longSwipesRatio?e.slideTo(j+R):y!==null&&v<0&&Math.abs(v)>o.longSwipesRatio?e.slideTo(y):e.slideTo(j))}else{if(!o.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(r.target===e.navigation.nextEl||r.target===e.navigation.prevEl)?r.target===e.navigation.nextEl?e.slideTo(j+R):e.slideTo(j):(e.swipeDirection==="next"&&e.slideTo(b!==null?b:j+R),e.swipeDirection==="prev"&&e.slideTo(y!==null?y:j))}}function ay(){const t=this,{params:e,el:n}=t;if(n&&n.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:s,snapGrid:i}=t,o=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const a=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!a?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!o?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(t.autoplay.resizeTimeout),t.autoplay.resizeTimeout=setTimeout(()=>{t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.resume()},500)),t.allowSlidePrev=s,t.allowSlideNext=r,t.params.watchOverflow&&i!==t.snapGrid&&t.checkOverflow()}function KC(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function QC(){const t=this,{wrapperEl:e,rtlTranslate:n,enabled:r}=t;if(!r)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let s;const i=t.maxTranslate()-t.minTranslate();i===0?s=0:s=(t.translate-t.minTranslate())/i,s!==t.progress&&t.updateProgress(n?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}function YC(t){const e=this;rc(e,t.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function XC(){const t=this;t.documentTouchHandlerProceeded||(t.documentTouchHandlerProceeded=!0,t.params.touchReleaseOnEdges&&(t.el.style.touchAction="auto"))}const C1=(t,e)=>{const n=gn(),{params:r,el:s,wrapperEl:i,device:o}=t,a=!!r.nested,c=e==="on"?"addEventListener":"removeEventListener",u=e;!s||typeof s=="string"||(n[c]("touchstart",t.onDocumentTouchStart,{passive:!1,capture:a}),s[c]("touchstart",t.onTouchStart,{passive:!1}),s[c]("pointerdown",t.onTouchStart,{passive:!1}),n[c]("touchmove",t.onTouchMove,{passive:!1,capture:a}),n[c]("pointermove",t.onTouchMove,{passive:!1,capture:a}),n[c]("touchend",t.onTouchEnd,{passive:!0}),n[c]("pointerup",t.onTouchEnd,{passive:!0}),n[c]("pointercancel",t.onTouchEnd,{passive:!0}),n[c]("touchcancel",t.onTouchEnd,{passive:!0}),n[c]("pointerout",t.onTouchEnd,{passive:!0}),n[c]("pointerleave",t.onTouchEnd,{passive:!0}),n[c]("contextmenu",t.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&s[c]("click",t.onClick,!0),r.cssMode&&i[c]("scroll",t.onScroll),r.updateOnWindowResize?t[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",ay,!0):t[u]("observerUpdate",ay,!0),s[c]("load",t.onLoad,{capture:!0}))};function JC(){const t=this,{params:e}=t;t.onTouchStart=WC.bind(t),t.onTouchMove=qC.bind(t),t.onTouchEnd=GC.bind(t),t.onDocumentTouchStart=XC.bind(t),e.cssMode&&(t.onScroll=QC.bind(t)),t.onClick=KC.bind(t),t.onLoad=YC.bind(t),C1(t,"on")}function ZC(){C1(this,"off")}var eA={attachEvents:JC,detachEvents:ZC};const ly=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function tA(){const t=this,{realIndex:e,initialized:n,params:r,el:s}=t,i=r.breakpoints;if(!i||i&&Object.keys(i).length===0)return;const o=gn(),a=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",c=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?t.el:o.querySelector(r.breakpointsBase),u=t.getBreakpoint(i,a,c);if(!u||t.currentBreakpoint===u)return;const p=(u in i?i[u]:void 0)||t.originalParams,m=ly(t,r),_=ly(t,p),E=t.params.grabCursor,j=p.grabCursor,k=r.enabled;m&&!_?(s.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),t.emitContainerClasses()):!m&&_&&(s.classList.add(`${r.containerModifierClass}grid`),(p.grid.fill&&p.grid.fill==="column"||!p.grid.fill&&r.grid.fill==="column")&&s.classList.add(`${r.containerModifierClass}grid-column`),t.emitContainerClasses()),E&&!j?t.unsetGrabCursor():!E&&j&&t.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(L=>{if(typeof p[L]>"u")return;const S=r[L]&&r[L].enabled,x=p[L]&&p[L].enabled;S&&!x&&t[L].disable(),!S&&x&&t[L].enable()});const b=p.direction&&p.direction!==r.direction,y=r.loop&&(p.slidesPerView!==r.slidesPerView||b),v=r.loop;b&&n&&t.changeDirection(),Ut(t.params,p);const R=t.params.enabled,V=t.params.loop;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),k&&!R?t.disable():!k&&R&&t.enable(),t.currentBreakpoint=u,t.emit("_beforeBreakpoint",p),n&&(y?(t.loopDestroy(),t.loopCreate(e),t.updateSlides()):!v&&V?(t.loopCreate(e),t.updateSlides()):v&&!V&&t.loopDestroy()),t.emit("breakpoint",p)}function nA(t,e,n){if(e===void 0&&(e="window"),!t||e==="container"&&!n)return;let r=!1;const s=pt(),i=e==="window"?s.innerHeight:n.clientHeight,o=Object.keys(t).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const c=parseFloat(a.substr(1));return{value:i*c,point:a}}return{value:a,point:a}});o.sort((a,c)=>parseInt(a.value,10)-parseInt(c.value,10));for(let a=0;a<o.length;a+=1){const{point:c,value:u}=o[a];e==="window"?s.matchMedia(`(min-width: ${u}px)`).matches&&(r=c):u<=n.clientWidth&&(r=c)}return r||"max"}var rA={setBreakpoint:tA,getBreakpoint:nA};function sA(t,e){const n=[];return t.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(s=>{r[s]&&n.push(e+s)}):typeof r=="string"&&n.push(e+r)}),n}function iA(){const t=this,{classNames:e,params:n,rtl:r,el:s,device:i}=t,o=sA(["initialized",n.direction,{"free-mode":t.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:i.android},{ios:i.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);e.push(...o),s.classList.add(...e),t.emitContainerClasses()}function oA(){const t=this,{el:e,classNames:n}=t;!e||typeof e=="string"||(e.classList.remove(...n),t.emitContainerClasses())}var aA={addClasses:iA,removeClasses:oA};function lA(){const t=this,{isLocked:e,params:n}=t,{slidesOffsetBefore:r}=n;if(r){const s=t.slides.length-1,i=t.slidesGrid[s]+t.slidesSizesGrid[s]+r*2;t.isLocked=t.size>i}else t.isLocked=t.snapGrid.length===1;n.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),n.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var cA={checkOverflow:lA},wf={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function uA(t,e){return function(r){r===void 0&&(r={});const s=Object.keys(r)[0],i=r[s];if(typeof i!="object"||i===null){Ut(e,r);return}if(t[s]===!0&&(t[s]={enabled:!0}),s==="navigation"&&t[s]&&t[s].enabled&&!t[s].prevEl&&!t[s].nextEl&&(t[s].auto=!0),["pagination","scrollbar"].indexOf(s)>=0&&t[s]&&t[s].enabled&&!t[s].el&&(t[s].auto=!0),!(s in t&&"enabled"in i)){Ut(e,r);return}typeof t[s]=="object"&&!("enabled"in t[s])&&(t[s].enabled=!0),t[s]||(t[s]={enabled:!1}),Ut(e,r)}}const Xd={eventsEmitter:aC,update:vC,translate:TC,transition:AC,slide:DC,loop:zC,grabCursor:BC,events:eA,breakpoints:rA,checkOverflow:cA,classes:aA},Jd={};let Gp=class On{constructor(){let e,n;for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];s.length===1&&s[0].constructor&&Object.prototype.toString.call(s[0]).slice(8,-1)==="Object"?n=s[0]:[e,n]=s,n||(n={}),n=Ut({},n),e&&!n.el&&(n.el=e);const o=gn();if(n.el&&typeof n.el=="string"&&o.querySelectorAll(n.el).length>1){const h=[];return o.querySelectorAll(n.el).forEach(p=>{const m=Ut({},n,{el:p});h.push(new On(m))}),h}const a=this;a.__swiper__=!0,a.support=E1(),a.device=T1({userAgent:n.userAgent}),a.browser=S1(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],n.modules&&Array.isArray(n.modules)&&a.modules.push(...n.modules);const c={};a.modules.forEach(h=>{h({params:n,swiper:a,extendParams:uA(n,c),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const u=Ut({},wf,c);return a.params=Ut({},u,Jd,n),a.originalParams=Ut({},a.params),a.passedParams=Ut({},n),a.params&&a.params.on&&Object.keys(a.params.on).forEach(h=>{a.on(h,a.params.on[h])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:n,params:r}=this,s=In(n,`.${r.slideClass}, swiper-slide`),i=Ea(s[0]);return Ea(e)-i}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill==="row"&&(e=e%Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){const e=this,{slidesEl:n,params:r}=e;e.slides=In(n,`.${r.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,n){const r=this;e=Math.min(Math.max(e,0),1);const s=r.minTranslate(),o=(r.maxTranslate()-s)*e+s;r.translateTo(o,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=e.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",n.join(" "))}getSlideClasses(e){const n=this;return n.destroyed?"":e.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=[];e.slides.forEach(r=>{const s=e.getSlideClasses(r);n.push({slideEl:r,classNames:s}),e.emit("_slideClass",r,s)}),e.emit("_slideClasses",n)}slidesPerViewDynamic(e,n){e===void 0&&(e="current"),n===void 0&&(n=!1);const r=this,{params:s,slides:i,slidesGrid:o,slidesSizesGrid:a,size:c,activeIndex:u}=r;let h=1;if(typeof s.slidesPerView=="number")return s.slidesPerView;if(s.centeredSlides){let p=i[u]?Math.ceil(i[u].swiperSlideSize):0,m;for(let _=u+1;_<i.length;_+=1)i[_]&&!m&&(p+=Math.ceil(i[_].swiperSlideSize),h+=1,p>c&&(m=!0));for(let _=u-1;_>=0;_-=1)i[_]&&!m&&(p+=i[_].swiperSlideSize,h+=1,p>c&&(m=!0))}else if(e==="current")for(let p=u+1;p<i.length;p+=1)(n?o[p]+a[p]-o[u]<c:o[p]-o[u]<c)&&(h+=1);else for(let p=u-1;p>=0;p-=1)o[u]-o[p]<c&&(h+=1);return h}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:n,params:r}=e;r.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&rc(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function s(){const o=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let i;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)s(),r.autoHeight&&e.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&e.isEnd&&!r.centeredSlides){const o=e.virtual&&r.virtual.enabled?e.virtual.slides:e.slides;i=e.slideTo(o.length-1,0,!1,!0)}else i=e.slideTo(e.activeIndex,0,!1,!0);i||s()}r.watchOverflow&&n!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,n){n===void 0&&(n=!0);const r=this,s=r.params.direction;return e||(e=s==="horizontal"?"vertical":"horizontal"),e===s||e!=="horizontal"&&e!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${s}`),r.el.classList.add(`${r.params.containerModifierClass}${e}`),r.emitContainerClasses(),r.params.direction=e,r.slides.forEach(i=>{e==="vertical"?i.style.width="":i.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(e){const n=this;n.rtl&&e==="rtl"||!n.rtl&&e==="ltr"||(n.rtl=e==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(e){const n=this;if(n.mounted)return!0;let r=e||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const s=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(s()):In(r,s())[0])();return!o&&n.params.createElements&&(o=ba("div",n.params.wrapperClass),r.append(o),In(r,`.${n.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(n,{el:r,wrapperEl:o,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:o,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Er(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Er(r,"direction")==="rtl"),wrongRTL:Er(o,"display")==="-webkit-box"}),!0}init(e){const n=this;if(n.initialized||n.mount(e)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const s=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&s.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),s.forEach(i=>{i.complete?rc(n,i):i.addEventListener("load",o=>{rc(n,o.target)})}),vf(n),n.initialized=!0,vf(n),n.emit("init"),n.emit("afterInit"),n}destroy(e,n){e===void 0&&(e=!0),n===void 0&&(n=!0);const r=this,{params:s,el:i,wrapperEl:o,slides:a}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),s.loop&&r.loopDestroy(),n&&(r.removeClasses(),i&&typeof i!="string"&&i.removeAttribute("style"),o&&o.removeAttribute("style"),a&&a.length&&a.forEach(c=>{c.classList.remove(s.slideVisibleClass,s.slideFullyVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass),c.removeAttribute("style"),c.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(c=>{r.off(c)}),e!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),G2(r)),r.destroyed=!0),null}static extendDefaults(e){Ut(Jd,e)}static get extendedDefaults(){return Jd}static get defaults(){return wf}static installModule(e){On.prototype.__modules__||(On.prototype.__modules__=[]);const n=On.prototype.__modules__;typeof e=="function"&&n.indexOf(e)<0&&n.push(e)}static use(e){return Array.isArray(e)?(e.forEach(n=>On.installModule(n)),On):(On.installModule(e),On)}};Object.keys(Xd).forEach(t=>{Object.keys(Xd[t]).forEach(e=>{Gp.prototype[e]=Xd[t][e]})});Gp.use([iC,oC]);const A1=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Cs(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"&&!t.__swiper__}function vi(t,e){const n=["__proto__","constructor","prototype"];Object.keys(e).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof t[r]>"u"?t[r]=e[r]:Cs(e[r])&&Cs(t[r])&&Object.keys(e[r]).length>0?e[r].__swiper__?t[r]=e[r]:vi(t[r],e[r]):t[r]=e[r]})}function k1(t){return t===void 0&&(t={}),t.navigation&&typeof t.navigation.nextEl>"u"&&typeof t.navigation.prevEl>"u"}function N1(t){return t===void 0&&(t={}),t.pagination&&typeof t.pagination.el>"u"}function P1(t){return t===void 0&&(t={}),t.scrollbar&&typeof t.scrollbar.el>"u"}function R1(t){t===void 0&&(t="");const e=t.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return e.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function dA(t){return t===void 0&&(t=""),t?t.includes("swiper-wrapper")?t:`swiper-wrapper ${t}`:"swiper-wrapper"}function hA(t){let{swiper:e,slides:n,passedParams:r,changedParams:s,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:c}=t;const u=s.filter(T=>T!=="children"&&T!=="direction"&&T!=="wrapperClass"),{params:h,pagination:p,navigation:m,scrollbar:_,virtual:E,thumbs:j}=e;let k,b,y,v,R,V,L,S;s.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&!r.thumbs.swiper.destroyed&&h.thumbs&&(!h.thumbs.swiper||h.thumbs.swiper.destroyed)&&(k=!0),s.includes("controller")&&r.controller&&r.controller.control&&h.controller&&!h.controller.control&&(b=!0),s.includes("pagination")&&r.pagination&&(r.pagination.el||c)&&(h.pagination||h.pagination===!1)&&p&&!p.el&&(y=!0),s.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||a)&&(h.scrollbar||h.scrollbar===!1)&&_&&!_.el&&(v=!0),s.includes("navigation")&&r.navigation&&(r.navigation.prevEl||o)&&(r.navigation.nextEl||i)&&(h.navigation||h.navigation===!1)&&m&&!m.prevEl&&!m.nextEl&&(R=!0);const x=T=>{e[T]&&(e[T].destroy(),T==="navigation"?(e.isElement&&(e[T].prevEl.remove(),e[T].nextEl.remove()),h[T].prevEl=void 0,h[T].nextEl=void 0,e[T].prevEl=void 0,e[T].nextEl=void 0):(e.isElement&&e[T].el.remove(),h[T].el=void 0,e[T].el=void 0))};s.includes("loop")&&e.isElement&&(h.loop&&!r.loop?V=!0:!h.loop&&r.loop?L=!0:S=!0),u.forEach(T=>{if(Cs(h[T])&&Cs(r[T]))Object.assign(h[T],r[T]),(T==="navigation"||T==="pagination"||T==="scrollbar")&&"enabled"in r[T]&&!r[T].enabled&&x(T);else{const I=r[T];(I===!0||I===!1)&&(T==="navigation"||T==="pagination"||T==="scrollbar")?I===!1&&x(T):h[T]=r[T]}}),u.includes("controller")&&!b&&e.controller&&e.controller.control&&h.controller&&h.controller.control&&(e.controller.control=h.controller.control),s.includes("children")&&n&&E&&h.virtual.enabled?(E.slides=n,E.update(!0)):s.includes("virtual")&&E&&h.virtual.enabled&&(n&&(E.slides=n),E.update(!0)),s.includes("children")&&n&&h.loop&&(S=!0),k&&j.init()&&j.update(!0),b&&(e.controller.control=h.controller.control),y&&(e.isElement&&(!c||typeof c=="string")&&(c=document.createElement("div"),c.classList.add("swiper-pagination"),c.part.add("pagination"),e.el.appendChild(c)),c&&(h.pagination.el=c),p.init(),p.render(),p.update()),v&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(h.scrollbar.el=a),_.init(),_.updateSize(),_.setTranslate()),R&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),Ta(i,e.hostEl.constructor.nextButtonSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),Ta(o,e.hostEl.constructor.prevButtonSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(h.navigation.nextEl=i),o&&(h.navigation.prevEl=o),m.init(),m.update()),s.includes("allowSlideNext")&&(e.allowSlideNext=r.allowSlideNext),s.includes("allowSlidePrev")&&(e.allowSlidePrev=r.allowSlidePrev),s.includes("direction")&&e.changeDirection(r.direction,!1),(V||S)&&e.loopDestroy(),(L||S)&&e.loopCreate(),e.update()}function fA(t,e){t===void 0&&(t={}),e===void 0&&(e=!0);const n={on:{}},r={},s={};vi(n,wf),n._emitClasses=!0,n.init=!1;const i={},o=A1.map(c=>c.replace(/_/,"")),a=Object.assign({},t);return Object.keys(a).forEach(c=>{typeof t[c]>"u"||(o.indexOf(c)>=0?Cs(t[c])?(n[c]={},s[c]={},vi(n[c],t[c]),vi(s[c],t[c])):(n[c]=t[c],s[c]=t[c]):c.search(/on[A-Z]/)===0&&typeof t[c]=="function"?e?r[`${c[2].toLowerCase()}${c.substr(3)}`]=t[c]:n.on[`${c[2].toLowerCase()}${c.substr(3)}`]=t[c]:i[c]=t[c])}),["navigation","pagination","scrollbar"].forEach(c=>{n[c]===!0&&(n[c]={}),n[c]===!1&&delete n[c]}),{params:n,passedParams:s,rest:i,events:r}}function pA(t,e){let{el:n,nextEl:r,prevEl:s,paginationEl:i,scrollbarEl:o,swiper:a}=t;k1(e)&&r&&s&&(a.params.navigation.nextEl=r,a.originalParams.navigation.nextEl=r,a.params.navigation.prevEl=s,a.originalParams.navigation.prevEl=s),N1(e)&&i&&(a.params.pagination.el=i,a.originalParams.pagination.el=i),P1(e)&&o&&(a.params.scrollbar.el=o,a.originalParams.scrollbar.el=o),a.init(n)}function mA(t,e,n,r,s){const i=[];if(!e)return i;const o=c=>{i.indexOf(c)<0&&i.push(c)};if(n&&r){const c=r.map(s),u=n.map(s);c.join("")!==u.join("")&&o("children"),r.length!==n.length&&o("children")}return A1.filter(c=>c[0]==="_").map(c=>c.replace(/_/,"")).forEach(c=>{if(c in t&&c in e)if(Cs(t[c])&&Cs(e[c])){const u=Object.keys(t[c]),h=Object.keys(e[c]);u.length!==h.length?o(c):(u.forEach(p=>{t[c][p]!==e[c][p]&&o(c)}),h.forEach(p=>{t[c][p]!==e[c][p]&&o(c)}))}else t[c]!==e[c]&&o(c)}),i}const gA=t=>{!t||t.destroyed||!t.params.virtual||t.params.virtual&&!t.params.virtual.enabled||(t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.emit("_virtualUpdated"),t.parallax&&t.params.parallax&&t.params.parallax.enabled&&t.parallax.setTranslate())};function qc(){return qc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qc.apply(this,arguments)}function j1(t){return t.type&&t.type.displayName&&t.type.displayName.includes("SwiperSlide")}function M1(t){const e=[];return Xe.Children.toArray(t).forEach(n=>{j1(n)?e.push(n):n.props&&n.props.children&&M1(n.props.children).forEach(r=>e.push(r))}),e}function yA(t){const e=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Xe.Children.toArray(t).forEach(r=>{if(j1(r))e.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const s=M1(r.props.children);s.length>0?s.forEach(i=>e.push(i)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:e,slots:n}}function vA(t,e,n){if(!n)return null;const r=h=>{let p=h;return h<0?p=e.length+h:p>=e.length&&(p=p-e.length),p},s=t.isHorizontal()?{[t.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:i,to:o}=n,a=t.params.loop?-e.length:0,c=t.params.loop?e.length*2:e.length,u=[];for(let h=a;h<c;h+=1)h>=i&&h<=o&&u.push(e[r(h)]);return u.map((h,p)=>Xe.cloneElement(h,{swiper:t,style:s,key:h.props.virtualIndex||h.key||`slide-${p}`}))}function Yo(t,e){return typeof window>"u"?D.useEffect(t,e):D.useLayoutEffect(t,e)}const cy=D.createContext(null),wA=D.createContext(null),L1=D.forwardRef(function(t,e){let{className:n,tag:r="div",wrapperTag:s="div",children:i,onSwiper:o,...a}=t===void 0?{}:t,c=!1;const[u,h]=D.useState("swiper"),[p,m]=D.useState(null),[_,E]=D.useState(!1),j=D.useRef(!1),k=D.useRef(null),b=D.useRef(null),y=D.useRef(null),v=D.useRef(null),R=D.useRef(null),V=D.useRef(null),L=D.useRef(null),S=D.useRef(null),{params:x,passedParams:T,rest:I,events:P}=fA(a),{slides:N,slots:w}=yA(i),$=()=>{E(!_)};Object.assign(x.on,{_containerClasses(F,B){h(B)}});const q=()=>{Object.assign(x.on,P),c=!0;const F={...x};if(delete F.wrapperClass,b.current=new Gp(F),b.current.virtual&&b.current.params.virtual.enabled){b.current.virtual.slides=N;const B={cache:!1,slides:N,renderExternal:m,renderExternalUpdate:!1};vi(b.current.params.virtual,B),vi(b.current.originalParams.virtual,B)}};k.current||q(),b.current&&b.current.on("_beforeBreakpoint",$);const O=()=>{c||!P||!b.current||Object.keys(P).forEach(F=>{b.current.on(F,P[F])})},C=()=>{!P||!b.current||Object.keys(P).forEach(F=>{b.current.off(F,P[F])})};D.useEffect(()=>()=>{b.current&&b.current.off("_beforeBreakpoint",$)}),D.useEffect(()=>{!j.current&&b.current&&(b.current.emitSlidesClasses(),j.current=!0)}),Yo(()=>{if(e&&(e.current=k.current),!!k.current)return b.current.destroyed&&q(),pA({el:k.current,nextEl:R.current,prevEl:V.current,paginationEl:L.current,scrollbarEl:S.current,swiper:b.current},x),o&&!b.current.destroyed&&o(b.current),()=>{b.current&&!b.current.destroyed&&b.current.destroy(!0,!1)}},[]),Yo(()=>{O();const F=mA(T,y.current,N,v.current,B=>B.key);return y.current=T,v.current=N,F.length&&b.current&&!b.current.destroyed&&hA({swiper:b.current,slides:N,passedParams:T,changedParams:F,nextEl:R.current,prevEl:V.current,scrollbarEl:S.current,paginationEl:L.current}),()=>{C()}}),Yo(()=>{gA(b.current)},[p]);function M(){return x.virtual?vA(b.current,N,p):N.map((F,B)=>Xe.cloneElement(F,{swiper:b.current,swiperSlideIndex:B}))}return Xe.createElement(r,qc({ref:k,className:R1(`${u}${n?` ${n}`:""}`)},I),Xe.createElement(wA.Provider,{value:b.current},w["container-start"],Xe.createElement(s,{className:dA(x.wrapperClass)},w["wrapper-start"],M(),w["wrapper-end"]),k1(x)&&Xe.createElement(Xe.Fragment,null,Xe.createElement("div",{ref:V,className:"swiper-button-prev"}),Xe.createElement("div",{ref:R,className:"swiper-button-next"})),P1(x)&&Xe.createElement("div",{ref:S,className:"swiper-scrollbar"}),N1(x)&&Xe.createElement("div",{ref:L,className:"swiper-pagination"}),w["container-end"]))});L1.displayName="Swiper";const D1=D.forwardRef(function(t,e){let{tag:n="div",children:r,className:s="",swiper:i,zoom:o,lazy:a,virtualIndex:c,swiperSlideIndex:u,...h}=t===void 0?{}:t;const p=D.useRef(null),[m,_]=D.useState("swiper-slide"),[E,j]=D.useState(!1);function k(R,V,L){V===p.current&&_(L)}Yo(()=>{if(typeof u<"u"&&(p.current.swiperSlideIndex=u),e&&(e.current=p.current),!(!p.current||!i)){if(i.destroyed){m!=="swiper-slide"&&_("swiper-slide");return}return i.on("_slideClass",k),()=>{i&&i.off("_slideClass",k)}}}),Yo(()=>{i&&p.current&&!i.destroyed&&_(i.getSlideClasses(p.current))},[i]);const b={isActive:m.indexOf("swiper-slide-active")>=0,isVisible:m.indexOf("swiper-slide-visible")>=0,isPrev:m.indexOf("swiper-slide-prev")>=0,isNext:m.indexOf("swiper-slide-next")>=0},y=()=>typeof r=="function"?r(b):r,v=()=>{j(!0)};return Xe.createElement(n,qc({ref:p,className:R1(`${m}${s?` ${s}`:""}`),"data-swiper-slide-index":c,onLoad:v},h),o&&Xe.createElement(cy.Provider,{value:b},Xe.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},y(),a&&!E&&Xe.createElement("div",{className:"swiper-lazy-preloader"}))),!o&&Xe.createElement(cy.Provider,{value:b},y(),a&&!E&&Xe.createElement("div",{className:"swiper-lazy-preloader"})))});D1.displayName="SwiperSlide";function xA(t){let{swiper:e,extendParams:n,on:r,emit:s}=t;const i=gn(),o=pt();e.keyboard={enabled:!1},n({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function a(h){if(!e.enabled)return;const{rtlTranslate:p}=e;let m=h;m.originalEvent&&(m=m.originalEvent);const _=m.keyCode||m.charCode,E=e.params.keyboard.pageUpDown,j=E&&_===33,k=E&&_===34,b=_===37,y=_===39,v=_===38,R=_===40;if(!e.allowSlideNext&&(e.isHorizontal()&&y||e.isVertical()&&R||k)||!e.allowSlidePrev&&(e.isHorizontal()&&b||e.isVertical()&&v||j))return!1;if(!(m.shiftKey||m.altKey||m.ctrlKey||m.metaKey)&&!(i.activeElement&&(i.activeElement.isContentEditable||i.activeElement.nodeName&&(i.activeElement.nodeName.toLowerCase()==="input"||i.activeElement.nodeName.toLowerCase()==="textarea")))){if(e.params.keyboard.onlyInViewport&&(j||k||b||y||v||R)){let V=!1;if(Wc(e.el,`.${e.params.slideClass}, swiper-slide`).length>0&&Wc(e.el,`.${e.params.slideActiveClass}`).length===0)return;const L=e.el,S=L.clientWidth,x=L.clientHeight,T=o.innerWidth,I=o.innerHeight,P=Z2(L);p&&(P.left-=L.scrollLeft);const N=[[P.left,P.top],[P.left+S,P.top],[P.left,P.top+x],[P.left+S,P.top+x]];for(let w=0;w<N.length;w+=1){const $=N[w];if($[0]>=0&&$[0]<=T&&$[1]>=0&&$[1]<=I){if($[0]===0&&$[1]===0)continue;V=!0}}if(!V)return}e.isHorizontal()?((j||k||b||y)&&(m.preventDefault?m.preventDefault():m.returnValue=!1),((k||y)&&!p||(j||b)&&p)&&e.slideNext(),((j||b)&&!p||(k||y)&&p)&&e.slidePrev()):((j||k||v||R)&&(m.preventDefault?m.preventDefault():m.returnValue=!1),(k||R)&&e.slideNext(),(j||v)&&e.slidePrev()),s("keyPress",_)}}function c(){e.keyboard.enabled||(i.addEventListener("keydown",a),e.keyboard.enabled=!0)}function u(){e.keyboard.enabled&&(i.removeEventListener("keydown",a),e.keyboard.enabled=!1)}r("init",()=>{e.params.keyboard.enabled&&c()}),r("destroy",()=>{e.keyboard.enabled&&u()}),Object.assign(e.keyboard,{enable:c,disable:u})}function _A(t,e,n,r){return t.params.createElements&&Object.keys(r).forEach(s=>{if(!n[s]&&n.auto===!0){let i=In(t.el,`.${r[s]}`)[0];i||(i=ba("div",r[s]),i.className=r[s],t.el.append(i)),n[s]=i,e[s]=i}}),n}function pr(t){return t===void 0&&(t=""),`.${t.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function bA(t){let{swiper:e,extendParams:n,on:r,emit:s}=t;const i="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:y=>y,formatFractionTotal:y=>y,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function c(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function u(y,v){const{bulletActiveClass:R}=e.params.pagination;y&&(y=y[`${v==="prev"?"previous":"next"}ElementSibling`],y&&(y.classList.add(`${R}-${v}`),y=y[`${v==="prev"?"previous":"next"}ElementSibling`],y&&y.classList.add(`${R}-${v}-${v}`)))}function h(y,v,R){if(y=y%R,v=v%R,v===y+1)return"next";if(v===y-1)return"previous"}function p(y){const v=y.target.closest(pr(e.params.pagination.bulletClass));if(!v)return;y.preventDefault();const R=Ea(v)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===R)return;const V=h(e.realIndex,R,e.slides.length);V==="next"?e.slideNext():V==="previous"?e.slidePrev():e.slideToLoop(R)}else e.slideTo(R)}function m(){const y=e.rtl,v=e.params.pagination;if(c())return;let R=e.pagination.el;R=Ee(R);let V,L;const S=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,x=e.params.loop?Math.ceil(S/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(L=e.previousRealIndex||0,V=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(V=e.snapIndex,L=e.previousSnapIndex):(L=e.previousIndex||0,V=e.activeIndex||0),v.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const T=e.pagination.bullets;let I,P,N;if(v.dynamicBullets&&(o=yf(T[0],e.isHorizontal()?"width":"height",!0),R.forEach(w=>{w.style[e.isHorizontal()?"width":"height"]=`${o*(v.dynamicMainBullets+4)}px`}),v.dynamicMainBullets>1&&L!==void 0&&(a+=V-(L||0),a>v.dynamicMainBullets-1?a=v.dynamicMainBullets-1:a<0&&(a=0)),I=Math.max(V-a,0),P=I+(Math.min(T.length,v.dynamicMainBullets)-1),N=(P+I)/2),T.forEach(w=>{const $=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(q=>`${v.bulletActiveClass}${q}`)].map(q=>typeof q=="string"&&q.includes(" ")?q.split(" "):q).flat();w.classList.remove(...$)}),R.length>1)T.forEach(w=>{const $=Ea(w);$===V?w.classList.add(...v.bulletActiveClass.split(" ")):e.isElement&&w.setAttribute("part","bullet"),v.dynamicBullets&&($>=I&&$<=P&&w.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),$===I&&u(w,"prev"),$===P&&u(w,"next"))});else{const w=T[V];if(w&&w.classList.add(...v.bulletActiveClass.split(" ")),e.isElement&&T.forEach(($,q)=>{$.setAttribute("part",q===V?"bullet-active":"bullet")}),v.dynamicBullets){const $=T[I],q=T[P];for(let O=I;O<=P;O+=1)T[O]&&T[O].classList.add(...`${v.bulletActiveClass}-main`.split(" "));u($,"prev"),u(q,"next")}}if(v.dynamicBullets){const w=Math.min(T.length,v.dynamicMainBullets+4),$=(o*w-o)/2-N*o,q=y?"right":"left";T.forEach(O=>{O.style[e.isHorizontal()?q:"top"]=`${$}px`})}}R.forEach((T,I)=>{if(v.type==="fraction"&&(T.querySelectorAll(pr(v.currentClass)).forEach(P=>{P.textContent=v.formatFractionCurrent(V+1)}),T.querySelectorAll(pr(v.totalClass)).forEach(P=>{P.textContent=v.formatFractionTotal(x)})),v.type==="progressbar"){let P;v.progressbarOpposite?P=e.isHorizontal()?"vertical":"horizontal":P=e.isHorizontal()?"horizontal":"vertical";const N=(V+1)/x;let w=1,$=1;P==="horizontal"?w=N:$=N,T.querySelectorAll(pr(v.progressbarFillClass)).forEach(q=>{q.style.transform=`translate3d(0,0,0) scaleX(${w}) scaleY(${$})`,q.style.transitionDuration=`${e.params.speed}ms`})}v.type==="custom"&&v.renderCustom?(Ta(T,v.renderCustom(e,V+1,x)),I===0&&s("paginationRender",T)):(I===0&&s("paginationRender",T),s("paginationUpdate",T)),e.params.watchOverflow&&e.enabled&&T.classList[e.isLocked?"add":"remove"](v.lockClass)})}function _(){const y=e.params.pagination;if(c())return;const v=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let R=e.pagination.el;R=Ee(R);let V="";if(y.type==="bullets"){let L=e.params.loop?Math.ceil(v/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&L>v&&(L=v);for(let S=0;S<L;S+=1)y.renderBullet?V+=y.renderBullet.call(e,S,y.bulletClass):V+=`<${y.bulletElement} ${e.isElement?'part="bullet"':""} class="${y.bulletClass}"></${y.bulletElement}>`}y.type==="fraction"&&(y.renderFraction?V=y.renderFraction.call(e,y.currentClass,y.totalClass):V=`<span class="${y.currentClass}"></span> / <span class="${y.totalClass}"></span>`),y.type==="progressbar"&&(y.renderProgressbar?V=y.renderProgressbar.call(e,y.progressbarFillClass):V=`<span class="${y.progressbarFillClass}"></span>`),e.pagination.bullets=[],R.forEach(L=>{y.type!=="custom"&&Ta(L,V||""),y.type==="bullets"&&e.pagination.bullets.push(...L.querySelectorAll(pr(y.bulletClass)))}),y.type!=="custom"&&s("paginationRender",R[0])}function E(){e.params.pagination=_A(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const y=e.params.pagination;if(!y.el)return;let v;typeof y.el=="string"&&e.isElement&&(v=e.el.querySelector(y.el)),!v&&typeof y.el=="string"&&(v=[...document.querySelectorAll(y.el)]),v||(v=y.el),!(!v||v.length===0)&&(e.params.uniqueNavElements&&typeof y.el=="string"&&Array.isArray(v)&&v.length>1&&(v=[...e.el.querySelectorAll(y.el)],v.length>1&&(v=v.find(R=>Wc(R,".swiper")[0]===e.el))),Array.isArray(v)&&v.length===1&&(v=v[0]),Object.assign(e.pagination,{el:v}),v=Ee(v),v.forEach(R=>{y.type==="bullets"&&y.clickable&&R.classList.add(...(y.clickableClass||"").split(" ")),R.classList.add(y.modifierClass+y.type),R.classList.add(e.isHorizontal()?y.horizontalClass:y.verticalClass),y.type==="bullets"&&y.dynamicBullets&&(R.classList.add(`${y.modifierClass}${y.type}-dynamic`),a=0,y.dynamicMainBullets<1&&(y.dynamicMainBullets=1)),y.type==="progressbar"&&y.progressbarOpposite&&R.classList.add(y.progressbarOppositeClass),y.clickable&&R.addEventListener("click",p),e.enabled||R.classList.add(y.lockClass)}))}function j(){const y=e.params.pagination;if(c())return;let v=e.pagination.el;v&&(v=Ee(v),v.forEach(R=>{R.classList.remove(y.hiddenClass),R.classList.remove(y.modifierClass+y.type),R.classList.remove(e.isHorizontal()?y.horizontalClass:y.verticalClass),y.clickable&&(R.classList.remove(...(y.clickableClass||"").split(" ")),R.removeEventListener("click",p))})),e.pagination.bullets&&e.pagination.bullets.forEach(R=>R.classList.remove(...y.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const y=e.params.pagination;let{el:v}=e.pagination;v=Ee(v),v.forEach(R=>{R.classList.remove(y.horizontalClass,y.verticalClass),R.classList.add(e.isHorizontal()?y.horizontalClass:y.verticalClass)})}),r("init",()=>{e.params.pagination.enabled===!1?b():(E(),_(),m())}),r("activeIndexChange",()=>{typeof e.snapIndex>"u"&&m()}),r("snapIndexChange",()=>{m()}),r("snapGridLengthChange",()=>{_(),m()}),r("destroy",()=>{j()}),r("enable disable",()=>{let{el:y}=e.pagination;y&&(y=Ee(y),y.forEach(v=>v.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),r("lock unlock",()=>{m()}),r("click",(y,v)=>{const R=v.target,V=Ee(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&V&&V.length>0&&!R.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&R===e.navigation.nextEl||e.navigation.prevEl&&R===e.navigation.prevEl))return;const L=V[0].classList.contains(e.params.pagination.hiddenClass);s(L===!0?"paginationShow":"paginationHide"),V.forEach(S=>S.classList.toggle(e.params.pagination.hiddenClass))}});const k=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:y}=e.pagination;y&&(y=Ee(y),y.forEach(v=>v.classList.remove(e.params.pagination.paginationDisabledClass))),E(),_(),m()},b=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:y}=e.pagination;y&&(y=Ee(y),y.forEach(v=>v.classList.add(e.params.pagination.paginationDisabledClass))),j()};Object.assign(e.pagination,{enable:k,disable:b,render:_,update:m,init:E,destroy:j})}function EA(t){let{swiper:e,extendParams:n,on:r}=t;n({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,containerRole:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null,scrollOnFocus:!0}}),e.a11y={clicked:!1};let s=null,i,o,a=new Date().getTime();function c(C){const M=s;M.length!==0&&Ta(M,C)}function u(C){C===void 0&&(C=16);const M=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(C).replace(/x/g,M)}function h(C){C=Ee(C),C.forEach(M=>{M.setAttribute("tabIndex","0")})}function p(C){C=Ee(C),C.forEach(M=>{M.setAttribute("tabIndex","-1")})}function m(C,M){C=Ee(C),C.forEach(F=>{F.setAttribute("role",M)})}function _(C,M){C=Ee(C),C.forEach(F=>{F.setAttribute("aria-roledescription",M)})}function E(C,M){C=Ee(C),C.forEach(F=>{F.setAttribute("aria-controls",M)})}function j(C,M){C=Ee(C),C.forEach(F=>{F.setAttribute("aria-label",M)})}function k(C,M){C=Ee(C),C.forEach(F=>{F.setAttribute("id",M)})}function b(C,M){C=Ee(C),C.forEach(F=>{F.setAttribute("aria-live",M)})}function y(C){C=Ee(C),C.forEach(M=>{M.setAttribute("aria-disabled",!0)})}function v(C){C=Ee(C),C.forEach(M=>{M.setAttribute("aria-disabled",!1)})}function R(C){if(C.keyCode!==13&&C.keyCode!==32)return;const M=e.params.a11y,F=C.target;if(!(e.pagination&&e.pagination.el&&(F===e.pagination.el||e.pagination.el.contains(C.target))&&!C.target.matches(pr(e.params.pagination.bulletClass)))){if(e.navigation&&e.navigation.prevEl&&e.navigation.nextEl){const B=Ee(e.navigation.prevEl);Ee(e.navigation.nextEl).includes(F)&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?c(M.lastSlideMessage):c(M.nextSlideMessage)),B.includes(F)&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?c(M.firstSlideMessage):c(M.prevSlideMessage))}e.pagination&&F.matches(pr(e.params.pagination.bulletClass))&&F.click()}}function V(){if(e.params.loop||e.params.rewind||!e.navigation)return;const{nextEl:C,prevEl:M}=e.navigation;M&&(e.isBeginning?(y(M),p(M)):(v(M),h(M))),C&&(e.isEnd?(y(C),p(C)):(v(C),h(C)))}function L(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function S(){return L()&&e.params.pagination.clickable}function x(){const C=e.params.a11y;L()&&e.pagination.bullets.forEach(M=>{e.params.pagination.clickable&&(h(M),e.params.pagination.renderBullet||(m(M,"button"),j(M,C.paginationBulletMessage.replace(/\{\{index\}\}/,Ea(M)+1)))),M.matches(pr(e.params.pagination.bulletActiveClass))?M.setAttribute("aria-current","true"):M.removeAttribute("aria-current")})}const T=(C,M,F)=>{h(C),C.tagName!=="BUTTON"&&(m(C,"button"),C.addEventListener("keydown",R)),j(C,F),E(C,M)},I=C=>{o&&o!==C.target&&!o.contains(C.target)&&(i=!0),e.a11y.clicked=!0},P=()=>{i=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.destroyed||(e.a11y.clicked=!1)})})},N=C=>{a=new Date().getTime()},w=C=>{if(e.a11y.clicked||!e.params.a11y.scrollOnFocus||new Date().getTime()-a<100)return;const M=C.target.closest(`.${e.params.slideClass}, swiper-slide`);if(!M||!e.slides.includes(M))return;o=M;const F=e.slides.indexOf(M)===e.activeIndex,B=e.params.watchSlidesProgress&&e.visibleSlides&&e.visibleSlides.includes(M);F||B||C.sourceCapabilities&&C.sourceCapabilities.firesTouchEvents||(e.isHorizontal()?e.el.scrollLeft=0:e.el.scrollTop=0,requestAnimationFrame(()=>{i||(e.params.loop?e.slideToLoop(e.getSlideIndexWhenGrid(parseInt(M.getAttribute("data-swiper-slide-index"))),0):e.slideTo(e.getSlideIndexWhenGrid(e.slides.indexOf(M)),0),i=!1)}))},$=()=>{const C=e.params.a11y;C.itemRoleDescriptionMessage&&_(e.slides,C.itemRoleDescriptionMessage),C.slideRole&&m(e.slides,C.slideRole);const M=e.slides.length;C.slideLabelMessage&&e.slides.forEach((F,B)=>{const Y=e.params.loop?parseInt(F.getAttribute("data-swiper-slide-index"),10):B,G=C.slideLabelMessage.replace(/\{\{index\}\}/,Y+1).replace(/\{\{slidesLength\}\}/,M);j(F,G)})},q=()=>{const C=e.params.a11y;e.el.append(s);const M=e.el;C.containerRoleDescriptionMessage&&_(M,C.containerRoleDescriptionMessage),C.containerMessage&&j(M,C.containerMessage),C.containerRole&&m(M,C.containerRole);const F=e.wrapperEl,B=C.id||F.getAttribute("id")||`swiper-wrapper-${u(16)}`,Y=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";k(F,B),b(F,Y),$();let{nextEl:G,prevEl:ue}=e.navigation?e.navigation:{};G=Ee(G),ue=Ee(ue),G&&G.forEach(Ke=>T(Ke,B,C.nextSlideMessage)),ue&&ue.forEach(Ke=>T(Ke,B,C.prevSlideMessage)),S()&&Ee(e.pagination.el).forEach(ze=>{ze.addEventListener("keydown",R)}),gn().addEventListener("visibilitychange",N),e.el.addEventListener("focus",w,!0),e.el.addEventListener("focus",w,!0),e.el.addEventListener("pointerdown",I,!0),e.el.addEventListener("pointerup",P,!0)};function O(){s&&s.remove();let{nextEl:C,prevEl:M}=e.navigation?e.navigation:{};C=Ee(C),M=Ee(M),C&&C.forEach(B=>B.removeEventListener("keydown",R)),M&&M.forEach(B=>B.removeEventListener("keydown",R)),S()&&Ee(e.pagination.el).forEach(Y=>{Y.removeEventListener("keydown",R)}),gn().removeEventListener("visibilitychange",N),e.el&&typeof e.el!="string"&&(e.el.removeEventListener("focus",w,!0),e.el.removeEventListener("pointerdown",I,!0),e.el.removeEventListener("pointerup",P,!0))}r("beforeInit",()=>{s=ba("span",e.params.a11y.notificationClass),s.setAttribute("aria-live","assertive"),s.setAttribute("aria-atomic","true")}),r("afterInit",()=>{e.params.a11y.enabled&&q()}),r("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{e.params.a11y.enabled&&$()}),r("fromEdge toEdge afterInit lock unlock",()=>{e.params.a11y.enabled&&V()}),r("paginationUpdate",()=>{e.params.a11y.enabled&&x()}),r("destroy",()=>{e.params.a11y.enabled&&O()})}const TA=({className:t=""})=>d.jsx("svg",{viewBox:"0 0 24 24",className:t,"aria-hidden":"true",children:d.jsx("path",{d:"M4 9V4h5M20 15v5h-5M15 4h5v5M4 15v5h5",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});function jl({text:t,align:e="start"}){return d.jsx("div",{className:["absolute top-3 z-20 select-none pointer-events-none",e==="start"?"start-3":"end-3","rounded-full px-3 py-1.5 text-xs sm:text-sm font-extrabold","bg-white/85 text-slate-900 border border-slate-200","shadow-sm backdrop-blur-md"].join(" "),children:t})}function SA(t){D.useEffect(()=>{if(!t)return;const e=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e||""}},[t])}function IA({beforeImage:t,afterImage:e,aspectClass:n="aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/9]",ariaLabel:r}){const{t:s,lang:i}=kt(),o=D.useMemo(()=>i==="ar"||i==="he",[i]),a=D.useCallback((L,S,x,T)=>{const I=s==null?void 0:s[L];return typeof I=="string"&&I.trim()?I:i==="he"?T??x??S:i==="en"?x??S??T:S??x??T},[s,i]),c=a("ba_before","قبل","Before","לפני"),u=a("ba_after","بعد","After","אחרי"),h=D.useRef(null),[p,m]=D.useState(!1),[_,E]=D.useState(!1);SA(p||_);const j=D.useCallback(()=>E(!1),[]),k=D.useCallback(()=>E(!0),[]),b=D.useCallback(async()=>{var S;const L=h.current;if(L){if(document.fullscreenElement){try{await((S=document.exitFullscreen)==null?void 0:S.call(document))}catch{}m(!1);return}try{if(L.requestFullscreen){await L.requestFullscreen(),m(!0);return}k()}catch{k()}}},[k]);D.useEffect(()=>{const L=()=>{document.fullscreenElement||m(!1)};return document.addEventListener("fullscreenchange",L),()=>document.removeEventListener("fullscreenchange",L)},[]),D.useEffect(()=>{const L=S=>{var x;S.key==="Escape"&&(_&&E(!1),document.fullscreenElement&&((x=document.exitFullscreen)==null||x.call(document)))};return document.addEventListener("keydown",L),()=>document.removeEventListener("keydown",L)},[_]);const y=D.useMemo(()=>r||a("ba_aria","قبل / بعد","Before / After","לפני / אחרי"),[r,a]),v=D.useMemo(()=>a("ba_zoom","تكبير","Zoom","הגדלה"),[a]),R=D.useMemo(()=>a("ba_close","إغلاق","Close","סגור"),[a]),V=L=>{L.stopPropagation(),b()};return d.jsxs(d.Fragment,{children:[d.jsxs("div",{ref:h,className:["relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm",n,p?"fixed inset-0 z-[9999] rounded-none border-0":""].join(" "),dir:o?"rtl":"ltr","aria-label":y,style:{WebkitTapHighlightColor:"transparent"},children:[d.jsx("button",{type:"button",onClick:V,className:"absolute top-2 end-2 z-30 h-10 w-10 rounded-full bg-black/45 text-white backdrop-blur-md flex items-center justify-center hover:bg-black/55 transition","aria-label":p||_?R:v,children:d.jsx(TA,{className:"w-5 h-5"})}),d.jsxs("div",{className:"absolute inset-0 grid grid-cols-2",children:[d.jsxs("button",{type:"button",onClick:V,className:"relative overflow-hidden text-start cursor-zoom-in","aria-label":`${c} - ${v}`,children:[d.jsx(jl,{text:c,align:o?"end":"start"}),d.jsx("img",{src:t,alt:c,draggable:!1,loading:"lazy",decoding:"async",className:"w-full h-full object-cover",sizes:"(max-width: 640px) 50vw, 35vw"}),d.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 via-black/5 to-transparent","aria-hidden":"true"})]}),d.jsxs("button",{type:"button",onClick:V,className:"relative overflow-hidden text-start cursor-zoom-in","aria-label":`${u} - ${v}`,children:[d.jsx(jl,{text:u,align:o?"start":"end"}),d.jsx("img",{src:e,alt:u,draggable:!1,loading:"lazy",decoding:"async",className:"w-full h-full object-cover",sizes:"(max-width: 640px) 50vw, 35vw"}),d.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 via-black/5 to-transparent","aria-hidden":"true"})]})]}),d.jsxs("div",{className:"pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 z-20",children:[d.jsx("div",{className:"absolute inset-y-0 left-1/2 -translate-x-1/2 w-10 bg-gradient-to-r from-black/10 via-black/0 to-black/10"}),d.jsx("div",{className:"absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-white/80"})]})]}),_&&d.jsxs("div",{className:"fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 backdrop-blur-md",onClick:j,role:"dialog","aria-modal":"true","aria-label":a("ba_previewAria","معاينة قبل وبعد","Before/After preview","תצוגה לפני/אחרי"),children:[d.jsx("button",{type:"button",onClick:L=>{L.stopPropagation(),j()},className:"absolute top-5 end-5 text-white hover:text-yellow-400 transition","aria-label":R,children:d.jsx(Iu,{className:"w-7 h-7"})}),d.jsx("div",{className:"w-[94vw] max-w-5xl bg-white/95 border border-white/20 rounded-3xl overflow-hidden shadow-2xl",onClick:L=>L.stopPropagation(),children:d.jsxs("div",{className:"relative w-full aspect-[4/5] sm:aspect-[16/9] grid grid-cols-2",children:[d.jsxs("div",{className:"relative overflow-hidden",children:[d.jsx(jl,{text:c,align:o?"end":"start"}),d.jsx("img",{src:t,alt:c,className:"w-full h-full object-cover",draggable:!1,loading:"eager",decoding:"async"})]}),d.jsxs("div",{className:"relative overflow-hidden",children:[d.jsx(jl,{text:u,align:o?"start":"end"}),d.jsx("img",{src:e,alt:u,className:"w-full h-full object-cover",draggable:!1,loading:"eager",decoding:"async"})]}),d.jsxs("div",{className:"pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 z-20",children:[d.jsx("div",{className:"absolute inset-y-0 left-1/2 -translate-x-1/2 w-10 bg-gradient-to-r from-black/10 via-black/0 to-black/10"}),d.jsx("div",{className:"absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-white/80"})]})]})})]})]})}function CA(t){return t==="he"?{title:"לפני / אחרי",subtitle:"השוואה ברורה בין התוצאה לפני ואחרי הניקוי.",previous:"התוצאה הקודמת",next:"התוצאה הבאה",counter:(e,n)=>`${e} מתוך ${n}`,swipeHint:"החליקו לצדדים כדי לראות תוצאות נוספות",carouselLabel:"גלריית תוצאות לפני ואחרי",resultLabel:e=>`תוצאת ניקוי מספר ${e}`}:t==="en"?{title:"Before / After",subtitle:"A clear comparison of the result before and after cleaning.",previous:"Previous result",next:"Next result",counter:(e,n)=>`${e} of ${n}`,swipeHint:"Swipe sideways to see more results",carouselLabel:"Before and after results gallery",resultLabel:e=>`Cleaning result ${e}`}:{title:"قبل / بعد",subtitle:"مقارنة واضحة للنتيجة قبل التنظيف وبعده.",previous:"النتيجة السابقة",next:"النتيجة التالية",counter:(e,n)=>`${e} من ${n}`,swipeHint:"اسحب لليمين أو اليسار لمشاهدة نتائج إضافية",carouselLabel:"معرض نتائج قبل وبعد التنظيف",resultLabel:e=>`نتيجة التنظيف رقم ${e}`}}function AA({items:t,pairs:e,hideDescription:n=!1}){const{lang:r,isRTL:s}=kt(),i=D.useRef(null),[o,a]=D.useState(0),c=D.useMemo(()=>CA(r),[r]),u=D.useMemo(()=>Array.isArray(t)?t.filter(k=>(k==null?void 0:k.before)&&(k==null?void 0:k.after)):Array.isArray(e)?e.filter(k=>(k==null?void 0:k.before)&&(k==null?void 0:k.after)):[],[t,e]),h=u.length,p=h>1,m=D.useCallback(()=>{const k=i.current;!k||!p||k.slidePrev()},[p]),_=D.useCallback(()=>{const k=i.current;!k||!p||k.slideNext()},[p]);if(!h)return null;const E=s?df:uf,j=s?uf:df;return d.jsxs("section",{className:"lumora-before-after-carousel mt-2",dir:s?"rtl":"ltr","aria-label":c.carouselLabel,children:[n?null:d.jsxs("header",{className:"mx-auto mb-5 max-w-2xl text-center",children:[d.jsx("h3",{className:"text-xl font-black text-slate-950 sm:text-2xl",children:c.title}),d.jsx("p",{className:"mt-2 text-sm font-medium leading-6 text-slate-600 sm:text-base",children:c.subtitle})]}),d.jsxs("div",{className:"relative",children:[p?d.jsx("div",{className:`\r
              absolute start-3 top-3 z-40\r
              inline-flex min-h-9 items-center justify-center\r
              rounded-full border border-white/20\r
              bg-slate-950/60 px-3\r
              text-xs font-extrabold text-white\r
              shadow-lg backdrop-blur-md\r
              sm:start-4 sm:top-4\r
            `,"aria-live":"polite","aria-atomic":"true",children:c.counter(o+1,h)}):null,d.jsx(L1,{modules:[bA,EA,xA],onSwiper:k=>{i.current=k,a(k.realIndex||0)},onSlideChange:k=>{a(k.realIndex)},spaceBetween:20,slidesPerView:1,loop:p,allowTouchMove:p,grabCursor:p,keyboard:{enabled:p,onlyInViewport:!0},pagination:p?{clickable:!0,dynamicBullets:h>7}:!1,speed:420,threshold:5,resistanceRatio:.7,watchOverflow:!0,observer:!0,observeParents:!0,className:"overflow-hidden rounded-3xl","aria-label":c.carouselLabel,style:{"--swiper-pagination-bullet-size":"9px","--swiper-pagination-bullet-horizontal-gap":"5px"},children:u.map((k,b)=>d.jsx(D1,{"aria-label":c.resultLabel(b+1),children:d.jsx(IA,{beforeImage:k.before,afterImage:k.after})},`${k.before}-${k.after}-${b}`))},r),p?d.jsxs(d.Fragment,{children:[d.jsx("button",{type:"button",onClick:m,className:`\r
                absolute start-3 top-1/2 z-40\r
                hidden h-12 w-12 -translate-y-1/2\r
                items-center justify-center\r
                rounded-full border border-white/25\r
                bg-slate-950/60 text-white\r
                shadow-[0_10px_30px_rgba(15,23,42,0.30)]\r
                backdrop-blur-md transition\r
                hover:scale-105 hover:bg-slate-950/75\r
                active:scale-95\r
                focus-visible:outline-none\r
                focus-visible:ring-4 focus-visible:ring-white/40\r
                sm:flex\r
              `,"aria-label":c.previous,children:d.jsx(E,{className:"h-6 w-6",strokeWidth:2.5,"aria-hidden":"true"})}),d.jsx("button",{type:"button",onClick:_,className:`\r
                absolute end-3 top-1/2 z-40\r
                hidden h-12 w-12 -translate-y-1/2\r
                items-center justify-center\r
                rounded-full border border-white/25\r
                bg-slate-950/60 text-white\r
                shadow-[0_10px_30px_rgba(15,23,42,0.30)]\r
                backdrop-blur-md transition\r
                hover:scale-105 hover:bg-slate-950/75\r
                active:scale-95\r
                focus-visible:outline-none\r
                focus-visible:ring-4 focus-visible:ring-white/40\r
                sm:flex\r
              `,"aria-label":c.next,children:d.jsx(j,{className:"h-6 w-6",strokeWidth:2.5,"aria-hidden":"true"})})]}):null]}),p?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:`\r
              mt-3 flex items-center justify-center gap-2\r
              text-center text-xs font-bold text-slate-500\r
              sm:hidden\r
            `,children:[d.jsx(ZI,{className:"h-4 w-4 shrink-0 text-blue-600","aria-hidden":"true"}),d.jsx("span",{children:c.swipeHint})]}),d.jsxs("div",{className:"mt-3 grid grid-cols-2 gap-2 sm:hidden",children:[d.jsxs("button",{type:"button",onClick:m,className:`\r
                inline-flex min-h-11 items-center justify-center gap-2\r
                rounded-2xl border border-slate-200\r
                bg-white px-3 text-sm font-extrabold text-slate-700\r
                shadow-sm transition\r
                active:scale-[0.98] active:bg-slate-50\r
                focus-visible:outline-none\r
                focus-visible:ring-4 focus-visible:ring-blue-100\r
              `,children:[d.jsx(E,{className:"h-4 w-4","aria-hidden":"true"}),d.jsx("span",{children:c.previous})]}),d.jsxs("button",{type:"button",onClick:_,className:`\r
                inline-flex min-h-11 items-center justify-center gap-2\r
                rounded-2xl bg-blue-600\r
                px-3 text-sm font-extrabold text-white\r
                shadow-sm transition\r
                active:scale-[0.98] active:bg-blue-700\r
                focus-visible:outline-none\r
                focus-visible:ring-4 focus-visible:ring-blue-100\r
              `,children:[d.jsx("span",{children:c.next}),d.jsx(j,{className:"h-4 w-4","aria-hidden":"true"})]})]})]}):null,d.jsx("style",{children:`
        .lumora-before-after-carousel .swiper-pagination {
          position: relative !important;
          inset: auto !important;
          display: flex;
          min-height: 30px;
          align-items: center;
          justify-content: center;
          margin-top: 10px !important;
        }

        .lumora-before-after-carousel .swiper-pagination-bullet {
          opacity: 0.42;
          background: rgb(100 116 139);
          transition:
            width 180ms ease,
            opacity 180ms ease,
            background-color 180ms ease;
        }

        .lumora-before-after-carousel .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 999px;
          opacity: 1;
          background: rgb(37 99 235);
        }

        @media (prefers-reduced-motion: reduce) {
          .lumora-before-after-carousel *,
          .lumora-before-after-carousel *::before,
          .lumora-before-after-carousel *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `})]})}function kA({sofaPairs:t=[]}){const{lang:e}=kt(),n=e==="ar"||e==="he",r=D.useCallback((i,o,a)=>e==="he"?a:e==="en"?o:i,[e]);D.useEffect(()=>{t.slice(0,2).flatMap(o=>[o==null?void 0:o.before,o==null?void 0:o.after]).filter(Boolean).forEach(o=>{const a=new Image;a.decoding="async",a.src=o})},[t]);const s=t.length;return d.jsxs("section",{id:"cleaning-showcase",dir:n?"rtl":"ltr",className:`\r
        mx-auto\r
        w-full\r
        max-w-6xl\r
        px-4\r
        py-10\r
        sm:px-6\r
        sm:py-14\r
        lg:py-16\r
      `,children:[d.jsxs("header",{className:"mx-auto mb-7 max-w-3xl text-center sm:mb-9",children:[d.jsxs("div",{className:`\r
            inline-flex\r
            items-center\r
            gap-2\r
            rounded-full\r
            border\r
            border-[rgba(17,21,47,0.10)]\r
            bg-white\r
            px-3.5\r
            py-1.5\r
            text-xs\r
            font-extrabold\r
            text-[var(--lumora-navy-900)]\r
            shadow-sm\r
          `,children:[d.jsx("span",{"aria-hidden":"true",className:`\r
              h-2\r
              w-2\r
              rounded-full\r
              bg-[var(--lumora-lime)]\r
              shadow-[0_0_0_4px_rgba(174,221,57,0.12)]\r
            `}),d.jsx("span",{children:r("نتائج حقيقية","Real results","תוצאות אמיתיות")})]}),d.jsx("h2",{className:`\r
            mt-4\r
            text-[clamp(25px,5vw,39px)]\r
            font-black\r
            leading-tight\r
            tracking-tight\r
            text-[var(--lumora-navy-900)]\r
          `,children:r("الفرق واضح من أول نظرة","The difference is clear","רואים את ההבדל מיד")}),d.jsx("p",{className:`\r
            mx-auto\r
            mt-3\r
            max-w-2xl\r
            text-sm\r
            font-medium\r
            leading-7\r
            text-slate-600\r
            sm:text-base\r
          `,children:r("صور حقيقية قبل وبعد تنظيف الكنب، بدون مبالغة وبدون فلاتر.","Real before-and-after sofa cleaning results, without exaggeration or filters.","תמונות אמיתיות לפני ואחרי ניקוי ספות, ללא הגזמה וללא פילטרים.")}),s>0&&d.jsxs("div",{className:`\r
              mt-4\r
              inline-flex\r
              items-center\r
              gap-2\r
              rounded-xl\r
              bg-[rgba(16,148,192,0.07)]\r
              px-3\r
              py-2\r
              text-xs\r
              font-bold\r
              text-[var(--lumora-navy-900)]\r
            `,children:[d.jsx("span",{className:"text-[var(--lumora-cyan)]",children:s}),d.jsx("span",{children:r("نتائج موثقة","documented results","תוצאות מתועדות")})]})]}),d.jsx("div",{className:"mx-auto max-w-5xl",children:s>0?d.jsx(AA,{pairs:t,hideDescription:!0}):d.jsx(NA,{title:r("سيتم إضافة النتائج قريبًا","Results will be added soon","התוצאות יתווספו בקרוב"),description:r("صور قبل وبعد تنظيف الكنب ستظهر هنا.","Before-and-after sofa cleaning images will appear here.","תמונות לפני ואחרי ניקוי ספות יופיעו כאן.")})})]})}function NA({title:t,description:e}){return d.jsxs("div",{className:`\r
        rounded-3xl\r
        border\r
        border-slate-200\r
        bg-white\r
        px-5\r
        py-10\r
        text-center\r
        shadow-sm\r
        sm:px-8\r
        sm:py-14\r
      `,children:[d.jsx("div",{"aria-hidden":"true",className:`\r
          mx-auto\r
          flex\r
          h-14\r
          w-14\r
          items-center\r
          justify-center\r
          rounded-2xl\r
          bg-[rgba(174,221,57,0.12)]\r
        `,children:d.jsx("span",{className:`\r
            h-5\r
            w-5\r
            rounded-full\r
            bg-[var(--lumora-lime)]\r
          `})}),d.jsx("h3",{className:`\r
          mt-4\r
          text-lg\r
          font-black\r
          text-[var(--lumora-navy-900)]\r
        `,children:t}),d.jsx("p",{className:"mt-2 text-sm leading-6 text-slate-500",children:e})]})}const uy={ar:[{icon:"coverage",q:"بأي مناطق بتخدموا؟",short:"نقدّم خدماتنا في مناطق الشمال والمركز.",details:"اكتب اسم بلدتك داخل الطلب، وسنتأكد من توفر الخدمة في منطقتك قبل تثبيت الموعد."},{icon:"price",q:"كيف بيتحدد السعر؟",short:"السعر يتحدد حسب نوع الخدمة وتفاصيل كل عنصر.",details:"الكنب يُحسب حسب عدد المقاعد. فرشات النوم حسب العدد والحجم وتنظيف وجه واحد أو وجهين. السجاد حسب طول وعرض كل سجادة وحالتها. بعد إرسال الطلب والصور اللازمة يتم تأكيد السعر."},{icon:"schedule",q:"بقدر أطلب أكثر من خدمة بنفس الطلب؟",short:"نعم، بتقدر تجمع الكنب والسجاد وفرشات النوم برسالة واحدة.",details:"أضف أي عدد من الخدمات داخل نفس الطلب. مثلًا: كنب مع سجادتين وثلاث فرشات نوم، وبعدها يتم إرسال كل التفاصيل برسالة واتساب واحدة."},{icon:"fabric",q:"شو بصير إذا كل فرشة نوم مختلفة؟",short:"بتقدر تضيف كل تركيبة فرشات لحالها.",details:"مثلًا: فرشتان مفردتان وجه واحد، وفرشة مزدوجة وجهين. أضف كل مجموعة مختلفة بسطر مستقل وحدد العدد والحجم وعدد الأوجه."},{icon:"price",q:"شو بصير إذا كل سجادة إلها قياس مختلف؟",short:"كل سجادة بتنضاف مع طولها وعرضها بشكل مستقل.",details:"أضف سجادة أولى بطول وعرض معين، وبعدها أضف سجادة ثانية بقياس مختلف. وإذا ما بتعرف قياس سجادة معينة، اختَر خيار أن القياسات غير معروفة."},{icon:"results",q:"هل لازم أرسل صور؟",short:"الصور بتساعد على فهم الحالة وتأكيد السعر.",details:"بعد إرسال الطلب عبر واتساب، أرسل صورًا واضحة للكنب أو فرشات النوم أو السجاد المطلوب تنظيفه. الصور تساعد على تقييم الحالة والبقع وتحديد السعر بشكل أدق."},{icon:"dry",q:"كم بيستغرق التنظيف وكم بده لينشف؟",short:"المدة تختلف حسب الكمية ونوع القماش والتهوية.",details:"نعطيك تقديرًا تقريبيًا بعد مراجعة الطلب. وقت التجفيف يتأثر بنوع القماش والطقس والتهوية، وفتح الشبابيك أو تشغيل مروحة يساعد على تسريع التجفيف."},{icon:"results",q:"هل كل البقع بتروح؟",short:"نعمل على إزالة البقع قدر الإمكان، لكن النتيجة تختلف حسب نوعها وعمرها.",details:"بعض البقع القديمة أو المثبتة داخل القماش قد لا تختفي بالكامل. نوضح الحالة المتوقعة قبل بدء العمل ونتجنب أي معالجة قد تضر بالقماش."},{icon:"safety",q:"هل مواد التنظيف مناسبة للأقمشة؟",short:"نختار طريقة ومواد مناسبة حسب نوع السطح والقماش.",details:"يتم فحص نوع القماش والحالة قبل التنظيف واختيار الطريقة المناسبة. من المهم إبلاغنا عن أي حساسية أو تعليمات خاصة قبل الموعد."},{icon:"time",q:"هل خدمة تنظيف الزجاج متاحة؟",short:"خدمة الزجاج غير متاحة للحجز حاليًا.",details:"تظهر الخدمة داخل الموقع للتعريف بها، لكنها متوقفة مؤقتًا ولا يمكن إضافتها إلى الطلب حاليًا. الخدمات المتاحة الآن هي الكنب والسجاد وفرشات النوم."},{icon:"schedule",q:"شو لازم أجهز قبل ما توصلوا؟",short:"أبعد الأغراض الصغيرة وجهّز مصدر ماء وكهرباء قريب.",details:"يفضل إبعاد الأغراض الصغيرة عن منطقة العمل والتأكد من وجود ماء وكهرباء قريبين. أخبرنا مسبقًا عن الدرج أو الطابق المرتفع أو أي تعليمات خاصة للوصول."}],en:[{icon:"coverage",q:"Which areas do you serve?",short:"We provide services across northern and central areas.",details:"Enter your town inside the order, and we will confirm service availability before scheduling the appointment."},{icon:"price",q:"How is the price determined?",short:"The price depends on the service and the details of every item.",details:"Sofas are calculated by the number of seats. Mattresses depend on quantity, size, and whether one or both sides are cleaned. Carpets depend on the length, width, and condition of each carpet. The final price is confirmed after reviewing the order and photos."},{icon:"schedule",q:"Can I request several services in one order?",short:"Yes. Sofas, carpets, and mattresses can be combined in one order.",details:"Add any number of services to the same order. For example, you can request sofa cleaning, two carpets, and three mattresses, then send everything in one WhatsApp message."},{icon:"fabric",q:"What if my mattresses have different sizes or cleaning needs?",short:"Every different mattress combination can be added separately.",details:"For example, add two single mattresses cleaned on one side, then add one double mattress cleaned on both sides as a separate row."},{icon:"price",q:"What if every carpet has different measurements?",short:"Each carpet can be entered with its own length and width.",details:"Add the first carpet with its measurements, then add another carpet with different measurements. You can also mark an individual carpet as having unknown measurements."},{icon:"results",q:"Do I need to send photos?",short:"Photos help us understand the condition and confirm the price.",details:"After sending the order through WhatsApp, send clear photos of the sofas, mattresses, or carpets. Photos help us assess stains, condition, and the required work."},{icon:"dry",q:"How long does cleaning and drying take?",short:"Timing depends on quantity, fabric type, weather, and ventilation.",details:"We provide an approximate duration after reviewing the order. Opening windows or using a fan may help speed up the drying process."},{icon:"results",q:"Will every stain be removed?",short:"We remove stains whenever possible, but results depend on the stain.",details:"Some old or deeply set stains may not disappear completely. We explain the expected result and avoid treatments that could damage the fabric."},{icon:"safety",q:"Are the cleaning materials suitable for fabrics?",short:"The cleaning method and materials are selected according to the surface.",details:"We check the fabric type and condition before cleaning. Please inform us in advance about allergies or any special requirements."},{icon:"time",q:"Is glass cleaning currently available?",short:"Glass cleaning is currently unavailable for booking.",details:"The service remains visible on the website for information, but it is temporarily paused and cannot be added to an order. Sofa, carpet, and mattress cleaning are currently available."},{icon:"schedule",q:"What should I prepare before you arrive?",short:"Clear small items and prepare nearby water and electricity.",details:"Move small objects away from the work area and ensure that water and electricity are available nearby. Tell us about stairs, high floors, or special access instructions."}],he:[{icon:"coverage",q:"באילו אזורים אתם נותנים שירות?",short:"השירות ניתן באזורי הצפון והמרכז.",details:"הזינו את שם היישוב בהזמנה, ואנו נאשר שהשירות זמין באזור לפני קביעת המועד."},{icon:"price",q:"איך נקבע המחיר?",short:"המחיר נקבע לפי סוג השירות והפרטים של כל פריט.",details:"בספות החישוב הוא לפי מספר המושבים. במזרנים לפי הכמות, הגודל וניקוי צד אחד או שני צדדים. בשטיחים לפי האורך, הרוחב והמצב של כל שטיח. המחיר הסופי מאושר לאחר בדיקת ההזמנה והתמונות."},{icon:"schedule",q:"אפשר להזמין כמה שירותים באותה הזמנה?",short:"כן. ניתן לשלב ספות, שטיחים ומזרנים בהזמנה אחת.",details:"אפשר להוסיף כל מספר של שירותים לאותה הזמנה. לדוגמה: ספה, שני שטיחים ושלושה מזרנים, ולשלוח את כל הפרטים בהודעת WhatsApp אחת."},{icon:"fabric",q:"מה עושים אם כל מזרן שונה?",short:"ניתן להוסיף כל שילוב של מזרנים בנפרד.",details:"לדוגמה: שני מזרני יחיד לניקוי צד אחד ומזרן זוגי לניקוי שני צדדים. כל שילוב שונה מתווסף בשורה נפרדת."},{icon:"price",q:"מה עושים אם לכל שטיח יש מידות שונות?",short:"כל שטיח מתווסף עם האורך והרוחב שלו.",details:"הוסיפו את השטיח הראשון עם המידות שלו ולאחר מכן שטיח נוסף עם מידות שונות. אפשר גם לסמן שהמידות של שטיח מסוים אינן ידועות."},{icon:"results",q:"האם צריך לשלוח תמונות?",short:"תמונות עוזרות להבין את המצב ולאשר את המחיר.",details:"לאחר שליחת ההזמנה דרך WhatsApp, שלחו תמונות ברורות של הספות, המזרנים או השטיחים. התמונות עוזרות להעריך את הכתמים ואת העבודה הנדרשת."},{icon:"dry",q:"כמה זמן לוקח הניקוי והייבוש?",short:"הזמן משתנה לפי הכמות, סוג הבד, מזג האוויר והאוורור.",details:"לאחר בדיקת ההזמנה ניתן הערכת זמן. פתיחת חלונות או הפעלת מאוורר עשויה לזרז את הייבוש."},{icon:"results",q:"האם כל הכתמים יורדים?",short:"אנו מסירים כתמים ככל האפשר, אך התוצאה תלויה בסוג הכתם.",details:"כתמים ישנים או עמוקים לא תמיד נעלמים לחלוטין. נסביר מראש מהי התוצאה הצפויה ונימנע מטיפול שעלול לפגוע בבד."},{icon:"safety",q:"האם חומרי הניקוי מתאימים לבדים?",short:"השיטה והחומרים נבחרים לפי סוג המשטח והבד.",details:"לפני הניקוי בודקים את סוג הבד ואת מצבו. חשוב לעדכן מראש על רגישויות או דרישות מיוחדות."},{icon:"time",q:"האם שירות ניקוי הזכוכית זמין?",short:"ניקוי זכוכית אינו זמין כרגע להזמנה.",details:"השירות עדיין מוצג באתר לצורכי מידע, אך הוא מושהה זמנית ולא ניתן להוסיף אותו להזמנה. כרגע זמינים ניקוי ספות, שטיחים ומזרנים."},{icon:"schedule",q:"מה צריך להכין לפני שאתם מגיעים?",short:"יש לפנות חפצים קטנים ולהכין מים וחשמל בקרבת מקום.",details:"מומלץ להזיז חפצים קטנים מאזור העבודה ולוודא שיש מקור מים וחשמל קרוב. יש לעדכן מראש על מדרגות, קומה גבוהה או הוראות גישה מיוחדות."}]},PA={time:hf,schedule:_I,safety:Bp,results:Pi,dry:jI,coverage:p1,price:PI,fabric:_a};function RA(t){return String(t??"item").replace(/[^a-zA-Z0-9_-]/g,"-")}function jA({id:t,icon:e,question:n,short:r,details:s,isOpen:i,onToggle:o,dir:a="ltr",variant:c="default"}){const u=D.useMemo(()=>PA[e]||Pi,[e]),h=a==="rtl",p=c==="compact",m=RA(t),_=`faq-button-${m}`,E=`faq-panel-${m}`,j=h?"إغلاق الإجابة":"Close answer",k=h?"فتح الإجابة":"Open answer",b=()=>{o==null||o(t)};return d.jsxs("article",{className:["overflow-hidden rounded-2xl border bg-white","transition-[border-color,box-shadow,transform] duration-300",i?"border-blue-200 shadow-[0_14px_38px_rgba(37,99,235,0.12)]":"border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md"].join(" "),dir:a,children:[d.jsx("h3",{children:d.jsxs("button",{id:_,type:"button",onClick:b,"aria-expanded":i,"aria-controls":E,"aria-label":`${i?j:k}: ${n}`,className:["flex w-full items-start justify-between gap-4","text-start transition-colors","focus-visible:outline-none","focus-visible:ring-4 focus-visible:ring-inset","focus-visible:ring-blue-100",p?"px-4 py-4":"px-5 py-5",i?"bg-blue-50/45":"bg-white hover:bg-slate-50/70"].join(" "),children:[d.jsxs("span",{className:"flex min-w-0 flex-1 items-start gap-3",children:[d.jsx("span",{className:["mt-0.5 inline-flex shrink-0 items-center justify-center","rounded-xl border border-blue-100 bg-blue-50","text-blue-700 transition",p?"h-9 w-9":"h-10 w-10",i?"border-blue-200 bg-blue-100":""].join(" "),"aria-hidden":"true",children:d.jsx(u,{className:p?"h-4 w-4":"h-[18px] w-[18px]",strokeWidth:2.3})}),d.jsxs("span",{className:"min-w-0 flex-1",children:[d.jsx("span",{className:["block font-extrabold leading-6 text-slate-950",p?"text-sm":"text-sm sm:text-base"].join(" "),children:n}),r?d.jsx("span",{className:["mt-1.5 block font-medium leading-6 text-slate-600",p?"text-[13px]":"text-sm"].join(" "),children:r}):null]})]}),d.jsx("span",{className:["mt-1 flex h-8 w-8 shrink-0 items-center justify-center","rounded-full border transition",i?"border-blue-200 bg-blue-100 text-blue-700":"border-slate-200 bg-white text-slate-500"].join(" "),"aria-hidden":"true",children:d.jsx(Qo,{className:["h-4 w-4 transition-transform duration-300",i?"rotate-180":""].join(" "),strokeWidth:2.5})})]})}),d.jsx("div",{id:E,role:"region","aria-labelledby":_,"aria-hidden":!i,className:["grid transition-[grid-template-rows,opacity] duration-300 ease-out",i?"grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"].join(" "),children:d.jsx("div",{className:"overflow-hidden",children:s?d.jsx("div",{className:["border-t border-slate-100","text-sm font-medium leading-7 text-slate-600","whitespace-pre-line",p?"px-4 pb-5 pt-4 sm:ps-16":"px-5 pb-6 pt-4 sm:ps-[76px]"].join(" "),children:s}):d.jsx("div",{className:["border-t border-slate-100 text-sm text-slate-500",p?"px-4 pb-5 pt-4 sm:ps-16":"px-5 pb-6 pt-4 sm:ps-[76px]"].join(" "),children:r})})})]})}function MA({items:t=[],dir:e="ltr",variant:n="default"}){const[r,s]=D.useState(null);D.useEffect(()=>{s(null)},[t]);const i=o=>{s(a=>a===o?null:o)};return!Array.isArray(t)||t.length===0?null:d.jsx("div",{className:n==="compact"?"space-y-2.5":"space-y-3",dir:e,children:t.map((o,a)=>{const c=(o==null?void 0:o.id)||`faq-${a}`;return d.jsx(jA,{id:c,icon:o==null?void 0:o.icon,question:(o==null?void 0:o.q)||"",short:(o==null?void 0:o.short)||"",details:(o==null?void 0:o.details)||"",isOpen:r===c,onToggle:i,dir:e,variant:n},`${c}-${(o==null?void 0:o.q)||a}`)})})}function LA(){const{lang:t}=kt(),n=t==="ar"||t==="he"?"rtl":"ltr",r=uy[t]||uy.en,s=D.useMemo(()=>t==="ar"?{title:"الأسئلة الشائعة",subtitle:"إجابات واضحة على أهم الأسئلة قبل طلب خدمة التنظيف.",showLess:"عرض أقل",showAll:"عرض كل الأسئلة",showMoreWithCount:i=>`عرض ${i} أسئلة إضافية`}:t==="he"?{title:"שאלות נפוצות",subtitle:"תשובות ברורות לשאלות החשובות לפני הזמנת שירות ניקיון.",showLess:"הצג פחות",showAll:"הצג את כל השאלות",showMoreWithCount:i=>`הצג עוד ${i}`}:{title:"Frequently Asked Questions",subtitle:"Clear answers to the most important questions before requesting a cleaning service.",showLess:"Show less",showAll:"Show all questions",showMoreWithCount:i=>`Show ${i} more`},[t]);return d.jsxs("section",{id:"faq",dir:n,className:"mx-auto max-w-5xl scroll-mt-[calc(var(--app-topbar-h,72px)+16px)] px-4 py-14 sm:px-6 sm:py-16",children:[d.jsxs("header",{className:"mb-7 text-center sm:mb-9",children:[d.jsx("div",{className:"inline-flex items-center justify-center rounded-[28px] border border-slate-200 bg-white px-6 py-3 shadow-sm sm:px-10 sm:py-4",children:d.jsx("h2",{className:"text-[clamp(20px,4vw,34px)] font-extrabold text-blue-600",children:s.title})}),d.jsx("div",{className:"mx-auto mt-3 h-[3px] w-24 rounded-full bg-blue-600"}),d.jsx("p",{className:"mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7",children:s.subtitle})]}),d.jsx(MA,{items:r,dir:n,variant:"compact",visibleMobile:r.length,visibleDesktop:r.length,showAll:!0,onToggleShowAll:()=>{},t:s})]})}const DA=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},OA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},V1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,h=i>>2,p=(i&3)<<4|a>>4;let m=(a&15)<<2|u>>6,_=u&63;c||(_=64,o||(m=64)),r.push(n[h],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(O1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||p==null)throw new VA;const m=i<<2|a>>4;if(r.push(m),u!==64){const _=a<<4&240|u>>2;if(r.push(_),p!==64){const E=u<<6&192|p;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class VA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FA=function(t){const e=O1(t);return V1.encodeByteArray(e,!0)},Gc=function(t){return FA(t).replace(/\./g,"")},F1=function(t){try{return V1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=()=>zA().__FIREBASE_DEFAULTS__,$A=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},BA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&F1(t[1]);return e&&JSON.parse(e)},Cu=()=>{try{return DA()||UA()||$A()||BA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},z1=t=>{var e,n;return(n=(e=Cu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},HA=t=>{const e=z1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},U1=()=>{var t;return(t=Cu())==null?void 0:t.config},$1=t=>{var e;return(e=Cu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function B1(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t},a="";return[Gc(JSON.stringify(n)),Gc(JSON.stringify(o)),a].join(".")}const Xo={};function GA(){const t={prod:[],emulator:[]};for(const e of Object.keys(Xo))Xo[e]?t.emulator.push(e):t.prod.push(e);return t}function KA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let dy=!1;function H1(t,e){if(typeof window>"u"||typeof document>"u"||!Bi(window.location.host)||Xo[t]===e||Xo[t]||dy)return;Xo[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=GA().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function a(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{dy=!0,o()},m}function h(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=KA(r),_=n("text"),E=document.getElementById(_)||document.createElement("span"),j=n("learnmore"),k=document.getElementById(j)||document.createElement("a"),b=n("preprendIcon"),y=document.getElementById(b)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const v=m.element;a(v),h(k,j);const R=u();c(y,b),v.append(y,E,k,R),document.body.appendChild(v)}i?(E.innerText="Preview backend disconnected.",y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(y.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,E.innerText="Preview backend running in this workspace."),E.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function QA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function YA(){var e;const t=(e=Cu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function XA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function JA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ZA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ek(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tk(){return!YA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nk(){try{return typeof indexedDB=="object"}catch{return!1}}function rk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk="FirebaseError";class er extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sk,Object.setPrototypeOf(this,er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ba.prototype.create)}}class Ba{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ik(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new er(s,a,r)}}function ik(t,e){return t.replace(ok,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ok=/\{\$([^}]+)}/g;function ak(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function As(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(hy(i)&&hy(o)){if(!As(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function hy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Mo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function lk(t,e){const n=new ck(t,e);return n.subscribe.bind(n)}class ck{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");uk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Zd),s.error===void 0&&(s.error=Zd),s.complete===void 0&&(s.complete=Zd);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t){return t&&t._delegate?t._delegate:t}class ks{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new WA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fk(e))try{this.getOrInitializeService({instanceIdentifier:hs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=hs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hs){return this.instances.has(e)}getOptions(e=hs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hs){return this.component?this.component.multipleInstances?e:hs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hk(t){return t===hs?void 0:t}function fk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const mk={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},gk=de.INFO,yk={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},vk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=yk[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kp{constructor(e){this.name=e,this._logLevel=gk,this._logHandler=vk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const wk=(t,e)=>e.some(n=>t instanceof n);let fy,py;function xk(){return fy||(fy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _k(){return py||(py=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const W1=new WeakMap,xf=new WeakMap,q1=new WeakMap,eh=new WeakMap,Qp=new WeakMap;function bk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(jr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&W1.set(n,t)}).catch(()=>{}),Qp.set(e,t),e}function Ek(t){if(xf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});xf.set(t,e)}let _f={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||q1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Tk(t){_f=t(_f)}function Sk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(th(this),e,...n);return q1.set(r,e.sort?e.sort():[e]),jr(r)}:_k().includes(t)?function(...e){return t.apply(th(this),e),jr(W1.get(this))}:function(...e){return jr(t.apply(th(this),e))}}function Ik(t){return typeof t=="function"?Sk(t):(t instanceof IDBTransaction&&Ek(t),wk(t,xk())?new Proxy(t,_f):t)}function jr(t){if(t instanceof IDBRequest)return bk(t);if(eh.has(t))return eh.get(t);const e=Ik(t);return e!==t&&(eh.set(t,e),Qp.set(e,t)),e}const th=t=>Qp.get(t);function Ck(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=jr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(jr(o.result),c.oldVersion,c.newVersion,jr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Ak=["get","getKey","getAll","getAllKeys","count"],kk=["put","add","delete","clear"],nh=new Map;function my(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nh.get(e))return nh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=kk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ak.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return nh.set(e,i),i}Tk(t=>({...t,get:(e,n,r)=>my(e,n)||t.get(e,n,r),has:(e,n)=>!!my(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Pk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Pk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bf="@firebase/app",gy="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new Kp("@firebase/app"),Rk="@firebase/app-compat",jk="@firebase/analytics-compat",Mk="@firebase/analytics",Lk="@firebase/app-check-compat",Dk="@firebase/app-check",Ok="@firebase/auth",Vk="@firebase/auth-compat",Fk="@firebase/database",zk="@firebase/data-connect",Uk="@firebase/database-compat",$k="@firebase/functions",Bk="@firebase/functions-compat",Hk="@firebase/installations",Wk="@firebase/installations-compat",qk="@firebase/messaging",Gk="@firebase/messaging-compat",Kk="@firebase/performance",Qk="@firebase/performance-compat",Yk="@firebase/remote-config",Xk="@firebase/remote-config-compat",Jk="@firebase/storage",Zk="@firebase/storage-compat",eN="@firebase/firestore",tN="@firebase/ai",nN="@firebase/firestore-compat",rN="firebase",sN="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="[DEFAULT]",iN={[bf]:"fire-core",[Rk]:"fire-core-compat",[Mk]:"fire-analytics",[jk]:"fire-analytics-compat",[Dk]:"fire-app-check",[Lk]:"fire-app-check-compat",[Ok]:"fire-auth",[Vk]:"fire-auth-compat",[Fk]:"fire-rtdb",[zk]:"fire-data-connect",[Uk]:"fire-rtdb-compat",[$k]:"fire-fn",[Bk]:"fire-fn-compat",[Hk]:"fire-iid",[Wk]:"fire-iid-compat",[qk]:"fire-fcm",[Gk]:"fire-fcm-compat",[Kk]:"fire-perf",[Qk]:"fire-perf-compat",[Yk]:"fire-rc",[Xk]:"fire-rc-compat",[Jk]:"fire-gcs",[Zk]:"fire-gcs-compat",[eN]:"fire-fst",[nN]:"fire-fst-compat",[tN]:"fire-vertex","fire-js":"fire-js",[rN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=new Map,oN=new Map,Tf=new Map;function yy(t,e){try{t.container.addComponent(e)}catch(n){Qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ri(t){const e=t.name;if(Tf.has(e))return Qn.debug(`There were multiple attempts to register component ${e}.`),!1;Tf.set(e,t);for(const n of Sa.values())yy(n,t);for(const n of oN.values())yy(n,t);return!0}function Yp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cn(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mr=new Ba("app","Firebase",aN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ks("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=sN;function G1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ef,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Mr.create("bad-app-name",{appName:String(s)});if(n||(n=U1()),!n)throw Mr.create("no-options");const i=Sa.get(s);if(i){if(As(n,i.options)&&As(r,i.config))return i;throw Mr.create("duplicate-app",{appName:s})}const o=new pk(s);for(const c of Tf.values())o.addComponent(c);const a=new lN(n,r,o);return Sa.set(s,a),a}function Xp(t=Ef){const e=Sa.get(t);if(!e&&t===Ef&&U1())return G1();if(!e)throw Mr.create("no-app",{appName:t});return e}function cN(){return Array.from(Sa.values())}function Lr(t,e,n){let r=iN[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qn.warn(o.join(" "));return}Ri(new ks(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN="firebase-heartbeat-database",dN=1,Ia="firebase-heartbeat-store";let rh=null;function K1(){return rh||(rh=Ck(uN,dN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ia)}catch(n){console.warn(n)}}}}).catch(t=>{throw Mr.create("idb-open",{originalErrorMessage:t.message})})),rh}async function hN(t){try{const n=(await K1()).transaction(Ia),r=await n.objectStore(Ia).get(Q1(t));return await n.done,r}catch(e){if(e instanceof er)Qn.warn(e.message);else{const n=Mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qn.warn(n.message)}}}async function vy(t,e){try{const r=(await K1()).transaction(Ia,"readwrite");await r.objectStore(Ia).put(e,Q1(t)),await r.done}catch(n){if(n instanceof er)Qn.warn(n.message);else{const r=Mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qn.warn(r.message)}}}function Q1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN=1024,pN=30;class mN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=wy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>pN){const o=vN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Qn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wy(),{heartbeatsToSend:r,unsentEntries:s}=gN(this._heartbeatsCache.heartbeats),i=Gc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Qn.warn(n),""}}}function wy(){return new Date().toISOString().substring(0,10)}function gN(t,e=fN){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),xy(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),xy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nk()?rk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return vy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return vy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function xy(t){return Gc(JSON.stringify({version:2,heartbeats:t})).length}function vN(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wN(t){Ri(new ks("platform-logger",e=>new Nk(e),"PRIVATE")),Ri(new ks("heartbeat",e=>new mN(e),"PRIVATE")),Lr(bf,gy,t),Lr(bf,gy,"esm2020"),Lr("fire-js","")}wN("");function Y1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xN=Y1,X1=new Ba("auth","Firebase",Y1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=new Kp("@firebase/auth");function _N(t,...e){Kc.logLevel<=de.WARN&&Kc.warn(`Auth (${Hi}): ${t}`,...e)}function sc(t,...e){Kc.logLevel<=de.ERROR&&Kc.error(`Auth (${Hi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,...e){throw Jp(t,...e)}function kn(t,...e){return Jp(t,...e)}function J1(t,e,n){const r={...xN(),[e]:n};return new Ba("auth","Firebase",r).create(e,{appName:t.name})}function Dr(t){return J1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return X1.create(t,...e)}function re(t,e,...n){if(!t)throw Jp(e,...n)}function $n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sc(e),new Error(e)}function Yn(t,e){t||$n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function bN(){return _y()==="http:"||_y()==="https:"}function _y(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bN()||JA()||"connection"in navigator)?navigator.onLine:!0}function TN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yn(n>e,"Short delay should be less than long delay!"),this.isMobile=QA()||ZA()}get(){return EN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(t,e){Yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],CN=new Wa(3e4,6e4);function Ds(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Jr(t,e,n,r,s={}){return e_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ha({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return XA()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Bi(t.emulatorConfig.host)&&(u.credentials="include"),Z1.fetch()(await t_(t,t.config.apiHost,n,a),u)})}async function e_(t,e,n){t._canInitEmulator=!1;const r={...SN,...e};try{const s=new kN(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ml(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ml(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ml(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ml(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw J1(t,h,u);yn(t,h)}}catch(s){if(s instanceof er)throw s;yn(t,"network-request-failed",{message:String(s)})}}async function Au(t,e,n,r,s={}){const i=await Jr(t,e,n,r,s);return"mfaPendingCredential"in i&&yn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function t_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Zp(t.config,s):`${t.config.apiScheme}://${s}`;return IN.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function AN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kn(this.auth,"network-request-failed")),CN.get())})}}function Ml(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=kn(t,e,r);return s.customData._tokenResponse=n,s}function by(t){return t!==void 0&&t.enterprise!==void 0}class NN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return AN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function PN(t,e){return Jr(t,"GET","/v2/recaptchaConfig",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RN(t,e){return Jr(t,"POST","/v1/accounts:delete",e)}async function Qc(t,e){return Jr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jN(t,e=!1){const n=Ge(t),r=await n.getIdToken(e),s=em(r);re(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Jo(sh(s.auth_time)),issuedAtTime:Jo(sh(s.iat)),expirationTime:Jo(sh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function sh(t){return Number(t)*1e3}function em(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return sc("JWT malformed, contained fewer than 3 sections"),null;try{const s=F1(n);return s?JSON.parse(s):(sc("Failed to decode base64 JWT payload"),null)}catch(s){return sc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ey(t){const e=em(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ca(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof er&&MN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function MN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jo(this.lastLoginAt),this.creationTime=Jo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yc(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Ca(t,Qc(e,{idToken:n}));re(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?n_(s.providerUserInfo):[],o=ON(t.providerData,i),a=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=a?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new If(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function DN(t){const e=Ge(t);await Yc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ON(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function n_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VN(t,e){const n=await e_(t,{},async()=>{const r=Ha({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await t_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return t.emulatorConfig&&Bi(t.emulatorConfig.host)&&(c.credentials="include"),Z1.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function FN(t,e){return Jr(t,"POST","/v2/accounts:revokeToken",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ey(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=Ey(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await VN(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new wi;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wi,this.toJSON())}_performRefresh(){return $n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class un{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new LN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new If(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ca(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jN(this,e)}reload(){return DN(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new un({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Yc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cn(this.auth.app))return Promise.reject(Dr(this.auth));const e=await this.getIdToken();return await Ca(this,RN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:_,providerData:E,stsTokenManager:j}=n;re(p&&j,e,"internal-error");const k=wi.fromJSON(this.name,j);re(typeof p=="string",e,"internal-error"),cr(r,e.name),cr(s,e.name),re(typeof m=="boolean",e,"internal-error"),re(typeof _=="boolean",e,"internal-error"),cr(i,e.name),cr(o,e.name),cr(a,e.name),cr(c,e.name),cr(u,e.name),cr(h,e.name);const b=new un({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:k,createdAt:u,lastLoginAt:h});return E&&Array.isArray(E)&&(b.providerData=E.map(y=>({...y}))),c&&(b._redirectEventId=c),b}static async _fromIdTokenResponse(e,n,r=!1){const s=new wi;s.updateFromServerResponse(n);const i=new un({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Yc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];re(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?n_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new wi;a.updateFromIdToken(r);const c=new un({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new If(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=new Map;function Bn(t){Yn(t instanceof Function,"Expected a class definition");let e=Ty.get(t);return e?(Yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ty.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}r_.type="NONE";const Sy=r_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(t,e,n){return`firebase:${t}:${e}:${n}`}class xi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ic(this.userKey,s.apiKey,i),this.fullPersistenceKey=ic("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Qc(this.auth,{idToken:e}).catch(()=>{});return n?un._fromGetAccountInfoResponse(this.auth,n,e):null}return un._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xi(Bn(Sy),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Bn(Sy);const o=ic(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){let p;if(typeof h=="string"){const m=await Qc(e,{idToken:h}).catch(()=>{});if(!m)break;p=await un._fromGetAccountInfoResponse(e,m,h)}else p=un._fromJSON(e,h);u!==i&&(a=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new xi(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new xi(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(a_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(s_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(c_(e))return"Blackberry";if(u_(e))return"Webos";if(i_(e))return"Safari";if((e.includes("chrome/")||o_(e))&&!e.includes("edge/"))return"Chrome";if(l_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function s_(t=Et()){return/firefox\//i.test(t)}function i_(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function o_(t=Et()){return/crios\//i.test(t)}function a_(t=Et()){return/iemobile/i.test(t)}function l_(t=Et()){return/android/i.test(t)}function c_(t=Et()){return/blackberry/i.test(t)}function u_(t=Et()){return/webos/i.test(t)}function tm(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zN(t=Et()){var e;return tm(t)&&!!((e=window.navigator)!=null&&e.standalone)}function UN(){return ek()&&document.documentMode===10}function d_(t=Et()){return tm(t)||l_(t)||u_(t)||c_(t)||/windows phone/i.test(t)||a_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(t,e=[]){let n;switch(t){case"Browser":n=Iy(Et());break;case"Worker":n=`${Iy(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BN(t,e={}){return Jr(t,"GET","/v2/passwordPolicy",Ds(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN=6;class WN{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??HN,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cy(this),this.idTokenSubscription=new Cy(this),this.beforeStateQueue=new $N(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=X1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await xi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Qc(this,{idToken:e}),r=await un._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(cn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cn(this.app))return Promise.reject(Dr(this));const n=e?Ge(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cn(this.app)?Promise.reject(Dr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cn(this.app)?Promise.reject(Dr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BN(this),n=new WN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ba("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await FN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bn(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await xi.create(this,[Bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=h_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&_N(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Wi(t){return Ge(t)}class Cy{constructor(e){this.auth=e,this.observer=null,this.addObserver=lk(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ku={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function GN(t){ku=t}function f_(t){return ku.loadJS(t)}function KN(){return ku.recaptchaEnterpriseScript}function QN(){return ku.gapiScript}function YN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class XN{constructor(){this.enterprise=new JN}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class JN{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const ZN="recaptcha-enterprise",p_="NO_RECAPTCHA";class eP{constructor(e){this.type=ZN,this.auth=Wi(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{PN(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new NN(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;by(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(p_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new XN().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&by(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=KN();c.length!==0&&(c+=a),f_(c).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function So(t,e,n,r=!1,s=!1){const i=new eP(t);let o;if(s)o=p_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ay(t,e,n,r,s){var i,o;if(s==="EMAIL_PASSWORD_PROVIDER")if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await So(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await So(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(a)});else if(s==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await So(t,e,n);return r(t,a).catch(async c=>{var u;if(((u=t._getRecaptchaConfig())==null?void 0:u.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const h=await So(t,e,n,!1,!0);return r(t,h)}return Promise.reject(c)})}else{const a=await So(t,e,n,!1,!0);return r(t,a)}else return Promise.reject(s+" provider is not supported.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(t,e){const n=Yp(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(As(i,e??{}))return s;yn(s,"already-initialized")}return n.initialize({options:e})}function nP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function rP(t,e,n){const r=Wi(t);re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=m_(e),{host:o,port:a}=sP(e),c=a===null?"":`:${a}`,u={url:`${i}//${o}${c}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){re(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),re(As(u,r.config.emulator)&&As(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Bi(o)?(B1(`${i}//${o}${c}`),H1("Auth",!0)):s||iP()}function m_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sP(t){const e=m_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ky(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ky(o)}}}function ky(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function iP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $n("not implemented")}_getIdTokenResponse(e){return $n("not implemented")}_linkToIdToken(e,n){return $n("not implemented")}_getReauthenticationResolver(e){return $n("not implemented")}}async function oP(t,e){return Jr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aP(t,e){return Au(t,"POST","/v1/accounts:signInWithPassword",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lP(t,e){return Au(t,"POST","/v1/accounts:signInWithEmailLink",Ds(t,e))}async function cP(t,e){return Au(t,"POST","/v1/accounts:signInWithEmailLink",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends nm{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Aa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Aa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ay(e,n,"signInWithPassword",aP,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return lP(e,{email:this._email,oobCode:this._password});default:yn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ay(e,r,"signUpPassword",oP,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return cP(e,{idToken:n,email:this._email,oobCode:this._password});default:yn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(t,e){return Au(t,"POST","/v1/accounts:signInWithIdp",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP="http://localhost";class Ns extends nm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):yn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Ns(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _i(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_i(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_i(e,n)}buildRequest(){const e={requestUri:uP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ha(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hP(t){const e=jo(Mo(t)).link,n=e?jo(Mo(e)).deep_link_id:null,r=jo(Mo(t)).deep_link_id;return(r?jo(Mo(r)).link:null)||r||n||e||t}class rm{constructor(e){const n=jo(Mo(e)),r=n.apiKey??null,s=n.oobCode??null,i=dP(n.mode??null);re(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=hP(e);try{return new rm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(){this.providerId=qi.PROVIDER_ID}static credential(e,n){return Aa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=rm.parseLink(n);return re(r,"argument-error"),Aa._fromEmailAndCode(e,r.code,r.tenantId)}}qi.PROVIDER_ID="password";qi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends g_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends qa{constructor(){super("facebook.com")}static credential(e){return Ns._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mr.credential(e.oauthAccessToken)}catch{return null}}}mr.FACEBOOK_SIGN_IN_METHOD="facebook.com";mr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends qa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ns._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gr.credential(n,r)}catch{return null}}}gr.GOOGLE_SIGN_IN_METHOD="google.com";gr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends qa{constructor(){super("github.com")}static credential(e){return Ns._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yr.credential(e.oauthAccessToken)}catch{return null}}}yr.GITHUB_SIGN_IN_METHOD="github.com";yr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends qa{constructor(){super("twitter.com")}static credential(e,n){return Ns._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vr.credential(n,r)}catch{return null}}}vr.TWITTER_SIGN_IN_METHOD="twitter.com";vr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await un._fromIdTokenResponse(e,r,s),o=Ny(r);return new ji({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ny(r);return new ji({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ny(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc extends er{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Xc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Xc(e,n,r,s)}}function y_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xc._fromErrorAndOperation(t,i,e,r):i})}async function fP(t,e,n=!1){const r=await Ca(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ji._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pP(t,e,n=!1){const{auth:r}=t;if(cn(r.app))return Promise.reject(Dr(r));const s="reauthenticate";try{const i=await Ca(t,y_(r,s,e,t),n);re(i.idToken,r,"internal-error");const o=em(i.idToken);re(o,r,"internal-error");const{sub:a}=o;return re(t.uid===a,r,"user-mismatch"),ji._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&yn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v_(t,e,n=!1){if(cn(t.app))return Promise.reject(Dr(t));const r="signIn",s=await y_(t,r,e),i=await ji._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function mP(t,e){return v_(Wi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gP(t){const e=Wi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function yP(t,e,n){return cn(t.app)?Promise.reject(Dr(t)):mP(Ge(t),qi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gP(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(t,e){return Ge(t).setPersistence(e)}function wP(t,e,n,r){return Ge(t).onIdTokenChanged(e,n,r)}function xP(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}function _P(t,e,n,r){return Ge(t).onAuthStateChanged(e,n,r)}function Lo(t){return Ge(t).signOut()}const Jc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jc,"1"),this.storage.removeItem(Jc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP=1e3,EP=10;class x_ extends w_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=d_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);UN()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,EP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},bP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}x_.type="LOCAL";const __=x_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_ extends w_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}b_.type="SESSION";const sm=b_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Nu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await TP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=im("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(){return window}function IP(t){Nn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function CP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function kP(){return E_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_="firebaseLocalStorageDb",NP=1,Zc="firebaseLocalStorage",S_="fbase_key";class Ga{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pu(t,e){return t.transaction([Zc],e?"readwrite":"readonly").objectStore(Zc)}function PP(){const t=indexedDB.deleteDatabase(T_);return new Ga(t).toPromise()}function Cf(){const t=indexedDB.open(T_,NP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zc,{keyPath:S_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zc)?e(r):(r.close(),await PP(),e(await Cf()))})})}async function Py(t,e,n){const r=Pu(t,!0).put({[S_]:e,value:n});return new Ga(r).toPromise()}async function RP(t,e){const n=Pu(t,!1).get(e),r=await new Ga(n).toPromise();return r===void 0?null:r.value}function Ry(t,e){const n=Pu(t,!0).delete(e);return new Ga(n).toPromise()}const jP=800,MP=3;class I_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>MP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return E_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nu._getInstance(kP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await CP(),!this.activeServiceWorker)return;this.sender=new SP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||AP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cf();return await Py(e,Jc,"1"),await Ry(e,Jc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Py(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>RP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ry(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Pu(s,!1).getAll();return new Ga(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}I_.type="LOCAL";const LP=I_;new Wa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t,e){return e?Bn(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om extends nm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function OP(t){return v_(t.auth,new om(t),t.bypassAuthState)}function VP(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),pP(n,new om(t),t.bypassAuthState)}async function FP(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),fP(n,new om(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OP;case"linkViaPopup":case"linkViaRedirect":return FP;case"reauthViaPopup":case"reauthViaRedirect":return VP;default:yn(this.auth,"internal-error")}}resolve(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP=new Wa(2e3,1e4);class ui extends C_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ui.currentPopupAction&&ui.currentPopupAction.cancel(),ui.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const e=im();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ui.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zP.get())};e()}}ui.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP="pendingRedirect",oc=new Map;class $P extends C_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=oc.get(this.auth._key());if(!e){try{const r=await BP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}oc.set(this.auth._key(),e)}return this.bypassAuthState||oc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BP(t,e){const n=qP(e),r=WP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function HP(t,e){oc.set(t._key(),e)}function WP(t){return Bn(t._redirectPersistence)}function qP(t){return ic(UP,t.config.apiKey,t.name)}async function GP(t,e,n=!1){if(cn(t.app))return Promise.reject(Dr(t));const r=Wi(t),s=DP(r,e),o=await new $P(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP=10*60*1e3;class QP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!A_(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(kn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=KP&&this.cachedEventUids.clear(),this.cachedEventUids.has(jy(e))}saveEventToCache(e){this.cachedEventUids.add(jy(e)),this.lastProcessedEventTime=Date.now()}}function jy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function A_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return A_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XP(t,e={}){return Jr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZP=/^https?/;async function eR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await XP(t);for(const n of e)try{if(tR(n))return}catch{}yn(t,"unauthorized-domain")}function tR(t){const e=Sf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ZP.test(n))return!1;if(JP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=new Wa(3e4,6e4);function My(){const t=Nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rR(t){return new Promise((e,n)=>{var s,i,o;function r(){My(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{My(),n(kn(t,"network-request-failed"))},timeout:nR.get()})}if((i=(s=Nn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Nn().gapi)!=null&&o.load)r();else{const a=YN("iframefcb");return Nn()[a]=()=>{gapi.load?r():n(kn(t,"network-request-failed"))},f_(`${QN()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ac=null,e})}let ac=null;function sR(t){return ac=ac||rR(t),ac}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR=new Wa(5e3,15e3),oR="__/auth/iframe",aR="emulator/auth/iframe",lR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uR(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zp(e,aR):`https://${t.config.authDomain}/${oR}`,r={apiKey:e.apiKey,appName:t.name,v:Hi},s=cR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ha(r).slice(1)}`}async function dR(t){const e=await sR(t),n=Nn().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:uR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=kn(t,"network-request-failed"),a=Nn().setTimeout(()=>{i(o)},iR.get());function c(){Nn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fR=500,pR=600,mR="_blank",gR="http://localhost";class Ly{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yR(t,e,n,r=fR,s=pR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c={...hR,width:r.toString(),height:s.toString(),top:i,left:o},u=Et().toLowerCase();n&&(a=o_(u)?mR:n),s_(u)&&(e=e||gR,c.scrollbars="yes");const h=Object.entries(c).reduce((m,[_,E])=>`${m}${_}=${E},`,"");if(zN(u)&&a!=="_self")return vR(e||"",a),new Ly(null);const p=window.open(e||"",a,h);re(p,t,"popup-blocked");try{p.focus()}catch{}return new Ly(p)}function vR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR="__/auth/handler",xR="emulator/auth/handler",_R=encodeURIComponent("fac");async function Dy(t,e,n,r,s,i){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Hi,eventId:s};if(e instanceof g_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ak(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries(i||{}))o[h]=p}if(e instanceof qa){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),u=c?`#${_R}=${encodeURIComponent(c)}`:"";return`${bR(t)}?${Ha(a).slice(1)}${u}`}function bR({config:t}){return t.emulator?Zp(t,xR):`https://${t.authDomain}/${wR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="webStorageSupport";class ER{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sm,this._completeRedirectFn=GP,this._overrideRedirectResult=HP}async _openPopup(e,n,r,s){var o;Yn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Dy(e,n,r,Sf(),s);return yR(e,i,im())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Dy(e,n,r,Sf(),s);return IP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Yn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dR(e),r=new QP(e);return n.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ih,{type:ih},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[ih];i!==void 0&&n(!!i),yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return d_()||i_()||tm()}}const TR=ER;var Oy="@firebase/auth",Vy="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function CR(t){Ri(new ks("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:h_(t)},u=new qN(r,s,i,c);return nP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ri(new ks("auth-internal",e=>{const n=Wi(e.getProvider("auth").getImmediate());return(r=>new SR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lr(Oy,Vy,IR(t)),Lr(Oy,Vy,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR=5*60,kR=$1("authIdTokenMaxAge")||AR;let Fy=null;const NR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kR)return;const s=n==null?void 0:n.token;Fy!==s&&(Fy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function PR(t=Xp()){const e=Yp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=tP(t,{popupRedirectResolver:TR,persistence:[LP,__,sm]}),r=$1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=NR(i.toString());xP(n,o,()=>o(n.currentUser)),wP(n,a=>o(a))}}const s=z1("auth");return s&&rP(n,`http://${s}`),n}function RR(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}GN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=kn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",RR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});CR("Browser");var jR="firebase",MR="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lr(jR,MR,"app");var zy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Or,k_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,x){function T(){}T.prototype=x.prototype,S.F=x.prototype,S.prototype=new T,S.prototype.constructor=S,S.D=function(I,P,N){for(var w=Array(arguments.length-2),$=2;$<arguments.length;$++)w[$-2]=arguments[$];return x.prototype[P].apply(I,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(S,x,T){T||(T=0);const I=Array(16);if(typeof x=="string")for(var P=0;P<16;++P)I[P]=x.charCodeAt(T++)|x.charCodeAt(T++)<<8|x.charCodeAt(T++)<<16|x.charCodeAt(T++)<<24;else for(P=0;P<16;++P)I[P]=x[T++]|x[T++]<<8|x[T++]<<16|x[T++]<<24;x=S.g[0],T=S.g[1],P=S.g[2];let N=S.g[3],w;w=x+(N^T&(P^N))+I[0]+3614090360&4294967295,x=T+(w<<7&4294967295|w>>>25),w=N+(P^x&(T^P))+I[1]+3905402710&4294967295,N=x+(w<<12&4294967295|w>>>20),w=P+(T^N&(x^T))+I[2]+606105819&4294967295,P=N+(w<<17&4294967295|w>>>15),w=T+(x^P&(N^x))+I[3]+3250441966&4294967295,T=P+(w<<22&4294967295|w>>>10),w=x+(N^T&(P^N))+I[4]+4118548399&4294967295,x=T+(w<<7&4294967295|w>>>25),w=N+(P^x&(T^P))+I[5]+1200080426&4294967295,N=x+(w<<12&4294967295|w>>>20),w=P+(T^N&(x^T))+I[6]+2821735955&4294967295,P=N+(w<<17&4294967295|w>>>15),w=T+(x^P&(N^x))+I[7]+4249261313&4294967295,T=P+(w<<22&4294967295|w>>>10),w=x+(N^T&(P^N))+I[8]+1770035416&4294967295,x=T+(w<<7&4294967295|w>>>25),w=N+(P^x&(T^P))+I[9]+2336552879&4294967295,N=x+(w<<12&4294967295|w>>>20),w=P+(T^N&(x^T))+I[10]+4294925233&4294967295,P=N+(w<<17&4294967295|w>>>15),w=T+(x^P&(N^x))+I[11]+2304563134&4294967295,T=P+(w<<22&4294967295|w>>>10),w=x+(N^T&(P^N))+I[12]+1804603682&4294967295,x=T+(w<<7&4294967295|w>>>25),w=N+(P^x&(T^P))+I[13]+4254626195&4294967295,N=x+(w<<12&4294967295|w>>>20),w=P+(T^N&(x^T))+I[14]+2792965006&4294967295,P=N+(w<<17&4294967295|w>>>15),w=T+(x^P&(N^x))+I[15]+1236535329&4294967295,T=P+(w<<22&4294967295|w>>>10),w=x+(P^N&(T^P))+I[1]+4129170786&4294967295,x=T+(w<<5&4294967295|w>>>27),w=N+(T^P&(x^T))+I[6]+3225465664&4294967295,N=x+(w<<9&4294967295|w>>>23),w=P+(x^T&(N^x))+I[11]+643717713&4294967295,P=N+(w<<14&4294967295|w>>>18),w=T+(N^x&(P^N))+I[0]+3921069994&4294967295,T=P+(w<<20&4294967295|w>>>12),w=x+(P^N&(T^P))+I[5]+3593408605&4294967295,x=T+(w<<5&4294967295|w>>>27),w=N+(T^P&(x^T))+I[10]+38016083&4294967295,N=x+(w<<9&4294967295|w>>>23),w=P+(x^T&(N^x))+I[15]+3634488961&4294967295,P=N+(w<<14&4294967295|w>>>18),w=T+(N^x&(P^N))+I[4]+3889429448&4294967295,T=P+(w<<20&4294967295|w>>>12),w=x+(P^N&(T^P))+I[9]+568446438&4294967295,x=T+(w<<5&4294967295|w>>>27),w=N+(T^P&(x^T))+I[14]+3275163606&4294967295,N=x+(w<<9&4294967295|w>>>23),w=P+(x^T&(N^x))+I[3]+4107603335&4294967295,P=N+(w<<14&4294967295|w>>>18),w=T+(N^x&(P^N))+I[8]+1163531501&4294967295,T=P+(w<<20&4294967295|w>>>12),w=x+(P^N&(T^P))+I[13]+2850285829&4294967295,x=T+(w<<5&4294967295|w>>>27),w=N+(T^P&(x^T))+I[2]+4243563512&4294967295,N=x+(w<<9&4294967295|w>>>23),w=P+(x^T&(N^x))+I[7]+1735328473&4294967295,P=N+(w<<14&4294967295|w>>>18),w=T+(N^x&(P^N))+I[12]+2368359562&4294967295,T=P+(w<<20&4294967295|w>>>12),w=x+(T^P^N)+I[5]+4294588738&4294967295,x=T+(w<<4&4294967295|w>>>28),w=N+(x^T^P)+I[8]+2272392833&4294967295,N=x+(w<<11&4294967295|w>>>21),w=P+(N^x^T)+I[11]+1839030562&4294967295,P=N+(w<<16&4294967295|w>>>16),w=T+(P^N^x)+I[14]+4259657740&4294967295,T=P+(w<<23&4294967295|w>>>9),w=x+(T^P^N)+I[1]+2763975236&4294967295,x=T+(w<<4&4294967295|w>>>28),w=N+(x^T^P)+I[4]+1272893353&4294967295,N=x+(w<<11&4294967295|w>>>21),w=P+(N^x^T)+I[7]+4139469664&4294967295,P=N+(w<<16&4294967295|w>>>16),w=T+(P^N^x)+I[10]+3200236656&4294967295,T=P+(w<<23&4294967295|w>>>9),w=x+(T^P^N)+I[13]+681279174&4294967295,x=T+(w<<4&4294967295|w>>>28),w=N+(x^T^P)+I[0]+3936430074&4294967295,N=x+(w<<11&4294967295|w>>>21),w=P+(N^x^T)+I[3]+3572445317&4294967295,P=N+(w<<16&4294967295|w>>>16),w=T+(P^N^x)+I[6]+76029189&4294967295,T=P+(w<<23&4294967295|w>>>9),w=x+(T^P^N)+I[9]+3654602809&4294967295,x=T+(w<<4&4294967295|w>>>28),w=N+(x^T^P)+I[12]+3873151461&4294967295,N=x+(w<<11&4294967295|w>>>21),w=P+(N^x^T)+I[15]+530742520&4294967295,P=N+(w<<16&4294967295|w>>>16),w=T+(P^N^x)+I[2]+3299628645&4294967295,T=P+(w<<23&4294967295|w>>>9),w=x+(P^(T|~N))+I[0]+4096336452&4294967295,x=T+(w<<6&4294967295|w>>>26),w=N+(T^(x|~P))+I[7]+1126891415&4294967295,N=x+(w<<10&4294967295|w>>>22),w=P+(x^(N|~T))+I[14]+2878612391&4294967295,P=N+(w<<15&4294967295|w>>>17),w=T+(N^(P|~x))+I[5]+4237533241&4294967295,T=P+(w<<21&4294967295|w>>>11),w=x+(P^(T|~N))+I[12]+1700485571&4294967295,x=T+(w<<6&4294967295|w>>>26),w=N+(T^(x|~P))+I[3]+2399980690&4294967295,N=x+(w<<10&4294967295|w>>>22),w=P+(x^(N|~T))+I[10]+4293915773&4294967295,P=N+(w<<15&4294967295|w>>>17),w=T+(N^(P|~x))+I[1]+2240044497&4294967295,T=P+(w<<21&4294967295|w>>>11),w=x+(P^(T|~N))+I[8]+1873313359&4294967295,x=T+(w<<6&4294967295|w>>>26),w=N+(T^(x|~P))+I[15]+4264355552&4294967295,N=x+(w<<10&4294967295|w>>>22),w=P+(x^(N|~T))+I[6]+2734768916&4294967295,P=N+(w<<15&4294967295|w>>>17),w=T+(N^(P|~x))+I[13]+1309151649&4294967295,T=P+(w<<21&4294967295|w>>>11),w=x+(P^(T|~N))+I[4]+4149444226&4294967295,x=T+(w<<6&4294967295|w>>>26),w=N+(T^(x|~P))+I[11]+3174756917&4294967295,N=x+(w<<10&4294967295|w>>>22),w=P+(x^(N|~T))+I[2]+718787259&4294967295,P=N+(w<<15&4294967295|w>>>17),w=T+(N^(P|~x))+I[9]+3951481745&4294967295,S.g[0]=S.g[0]+x&4294967295,S.g[1]=S.g[1]+(P+(w<<21&4294967295|w>>>11))&4294967295,S.g[2]=S.g[2]+P&4294967295,S.g[3]=S.g[3]+N&4294967295}r.prototype.v=function(S,x){x===void 0&&(x=S.length);const T=x-this.blockSize,I=this.C;let P=this.h,N=0;for(;N<x;){if(P==0)for(;N<=T;)s(this,S,N),N+=this.blockSize;if(typeof S=="string"){for(;N<x;)if(I[P++]=S.charCodeAt(N++),P==this.blockSize){s(this,I),P=0;break}}else for(;N<x;)if(I[P++]=S[N++],P==this.blockSize){s(this,I),P=0;break}}this.h=P,this.o+=x},r.prototype.A=function(){var S=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);S[0]=128;for(var x=1;x<S.length-8;++x)S[x]=0;x=this.o*8;for(var T=S.length-8;T<S.length;++T)S[T]=x&255,x/=256;for(this.v(S),S=Array(16),x=0,T=0;T<4;++T)for(let I=0;I<32;I+=8)S[x++]=this.g[T]>>>I&255;return S};function i(S,x){var T=a;return Object.prototype.hasOwnProperty.call(T,S)?T[S]:T[S]=x(S)}function o(S,x){this.h=x;const T=[];let I=!0;for(let P=S.length-1;P>=0;P--){const N=S[P]|0;I&&N==x||(T[P]=N,I=!1)}this.g=T}var a={};function c(S){return-128<=S&&S<128?i(S,function(x){return new o([x|0],x<0?-1:0)}):new o([S|0],S<0?-1:0)}function u(S){if(isNaN(S)||!isFinite(S))return p;if(S<0)return k(u(-S));const x=[];let T=1;for(let I=0;S>=T;I++)x[I]=S/T|0,T*=4294967296;return new o(x,0)}function h(S,x){if(S.length==0)throw Error("number format error: empty string");if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if(S.charAt(0)=="-")return k(h(S.substring(1),x));if(S.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=u(Math.pow(x,8));let I=p;for(let N=0;N<S.length;N+=8){var P=Math.min(8,S.length-N);const w=parseInt(S.substring(N,N+P),x);P<8?(P=u(Math.pow(x,P)),I=I.j(P).add(u(w))):(I=I.j(T),I=I.add(u(w)))}return I}var p=c(0),m=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(j(this))return-k(this).m();let S=0,x=1;for(let T=0;T<this.g.length;T++){const I=this.i(T);S+=(I>=0?I:4294967296+I)*x,x*=4294967296}return S},t.toString=function(S){if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(E(this))return"0";if(j(this))return"-"+k(this).toString(S);const x=u(Math.pow(S,6));var T=this;let I="";for(;;){const P=R(T,x).g;T=b(T,P.j(x));let N=((T.g.length>0?T.g[0]:T.h)>>>0).toString(S);if(T=P,E(T))return N+I;for(;N.length<6;)N="0"+N;I=N+I}},t.i=function(S){return S<0?0:S<this.g.length?this.g[S]:this.h};function E(S){if(S.h!=0)return!1;for(let x=0;x<S.g.length;x++)if(S.g[x]!=0)return!1;return!0}function j(S){return S.h==-1}t.l=function(S){return S=b(this,S),j(S)?-1:E(S)?0:1};function k(S){const x=S.g.length,T=[];for(let I=0;I<x;I++)T[I]=~S.g[I];return new o(T,~S.h).add(m)}t.abs=function(){return j(this)?k(this):this},t.add=function(S){const x=Math.max(this.g.length,S.g.length),T=[];let I=0;for(let P=0;P<=x;P++){let N=I+(this.i(P)&65535)+(S.i(P)&65535),w=(N>>>16)+(this.i(P)>>>16)+(S.i(P)>>>16);I=w>>>16,N&=65535,w&=65535,T[P]=w<<16|N}return new o(T,T[T.length-1]&-2147483648?-1:0)};function b(S,x){return S.add(k(x))}t.j=function(S){if(E(this)||E(S))return p;if(j(this))return j(S)?k(this).j(k(S)):k(k(this).j(S));if(j(S))return k(this.j(k(S)));if(this.l(_)<0&&S.l(_)<0)return u(this.m()*S.m());const x=this.g.length+S.g.length,T=[];for(var I=0;I<2*x;I++)T[I]=0;for(I=0;I<this.g.length;I++)for(let P=0;P<S.g.length;P++){const N=this.i(I)>>>16,w=this.i(I)&65535,$=S.i(P)>>>16,q=S.i(P)&65535;T[2*I+2*P]+=w*q,y(T,2*I+2*P),T[2*I+2*P+1]+=N*q,y(T,2*I+2*P+1),T[2*I+2*P+1]+=w*$,y(T,2*I+2*P+1),T[2*I+2*P+2]+=N*$,y(T,2*I+2*P+2)}for(S=0;S<x;S++)T[S]=T[2*S+1]<<16|T[2*S];for(S=x;S<2*x;S++)T[S]=0;return new o(T,0)};function y(S,x){for(;(S[x]&65535)!=S[x];)S[x+1]+=S[x]>>>16,S[x]&=65535,x++}function v(S,x){this.g=S,this.h=x}function R(S,x){if(E(x))throw Error("division by zero");if(E(S))return new v(p,p);if(j(S))return x=R(k(S),x),new v(k(x.g),k(x.h));if(j(x))return x=R(S,k(x)),new v(k(x.g),x.h);if(S.g.length>30){if(j(S)||j(x))throw Error("slowDivide_ only works with positive integers.");for(var T=m,I=x;I.l(S)<=0;)T=V(T),I=V(I);var P=L(T,1),N=L(I,1);for(I=L(I,2),T=L(T,2);!E(I);){var w=N.add(I);w.l(S)<=0&&(P=P.add(T),N=w),I=L(I,1),T=L(T,1)}return x=b(S,P.j(x)),new v(P,x)}for(P=p;S.l(x)>=0;){for(T=Math.max(1,Math.floor(S.m()/x.m())),I=Math.ceil(Math.log(T)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),N=u(T),w=N.j(x);j(w)||w.l(S)>0;)T-=I,N=u(T),w=N.j(x);E(N)&&(N=m),P=P.add(N),S=b(S,w)}return new v(P,S)}t.B=function(S){return R(this,S).h},t.and=function(S){const x=Math.max(this.g.length,S.g.length),T=[];for(let I=0;I<x;I++)T[I]=this.i(I)&S.i(I);return new o(T,this.h&S.h)},t.or=function(S){const x=Math.max(this.g.length,S.g.length),T=[];for(let I=0;I<x;I++)T[I]=this.i(I)|S.i(I);return new o(T,this.h|S.h)},t.xor=function(S){const x=Math.max(this.g.length,S.g.length),T=[];for(let I=0;I<x;I++)T[I]=this.i(I)^S.i(I);return new o(T,this.h^S.h)};function V(S){const x=S.g.length+1,T=[];for(let I=0;I<x;I++)T[I]=S.i(I)<<1|S.i(I-1)>>>31;return new o(T,S.h)}function L(S,x){const T=x>>5;x%=32;const I=S.g.length-T,P=[];for(let N=0;N<I;N++)P[N]=x>0?S.i(N+T)>>>x|S.i(N+T+1)<<32-x:S.i(N+T);return new o(P,S.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,k_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Or=o}).apply(typeof zy<"u"?zy:typeof self<"u"?self:typeof window<"u"?window:{});var Ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var N_,Do,P_,lc,Af,R_,j_,M_;(function(){var t,e=Object.defineProperty;function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ll=="object"&&Ll];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(l,f){if(f)e:{var g=r;l=l.split(".");for(var A=0;A<l.length-1;A++){var z=l[A];if(!(z in g))break e;g=g[z]}l=l[l.length-1],A=g[l],f=f(A),f!=A&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}s("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(l){return l||function(f){var g=[],A;for(A in f)Object.prototype.hasOwnProperty.call(f,A)&&g.push([A,f[A]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function c(l,f,g){return l.call.apply(l.bind,arguments)}function u(l,f,g){return u=c,u.apply(null,arguments)}function h(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var A=g.slice();return A.push.apply(A,arguments),l.apply(this,A)}}function p(l,f){function g(){}g.prototype=f.prototype,l.Z=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Ob=function(A,z,U){for(var Q=Array(arguments.length-2),le=2;le<arguments.length;le++)Q[le-2]=arguments[le];return f.prototype[z].apply(A,Q)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function _(l){const f=l.length;if(f>0){const g=Array(f);for(let A=0;A<f;A++)g[A]=l[A];return g}return[]}function E(l,f){for(let A=1;A<arguments.length;A++){const z=arguments[A];var g=typeof z;if(g=g!="object"?g:z?Array.isArray(z)?"array":g:"null",g=="array"||g=="object"&&typeof z.length=="number"){g=l.length||0;const U=z.length||0;l.length=g+U;for(let Q=0;Q<U;Q++)l[g+Q]=z[Q]}else l.push(z)}}class j{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function k(l){o.setTimeout(()=>{throw l},0)}function b(){var l=S;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class y{constructor(){this.h=this.g=null}add(f,g){const A=v.get();A.set(f,g),this.h?this.h.next=A:this.g=A,this.h=A}}var v=new j(()=>new R,l=>l.reset());class R{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let V,L=!1,S=new y,x=()=>{const l=Promise.resolve(void 0);V=()=>{l.then(T)}};function T(){for(var l;l=b();){try{l.h.call(l.g)}catch(g){k(g)}var f=v;f.j(l),f.h<100&&(f.h++,l.next=f.g,f.g=l)}L=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function P(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}P.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};o.addEventListener("test",g,f),o.removeEventListener("test",g,f)}catch{}return l}();function w(l){return/^[\s\xa0]*$/.test(l)}function $(l,f){P.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,f)}p($,P),$.prototype.init=function(l,f){const g=this.type=l.type,A=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget,f||(g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement)),this.relatedTarget=f,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&$.Z.h.call(this)},$.prototype.h=function(){$.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var q="closure_listenable_"+(Math.random()*1e6|0),O=0;function C(l,f,g,A,z){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!A,this.ha=z,this.key=++O,this.da=this.fa=!1}function M(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function F(l,f,g){for(const A in l)f.call(g,l[A],A,l)}function B(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function Y(l){const f={};for(const g in l)f[g]=l[g];return f}const G="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ue(l,f){let g,A;for(let z=1;z<arguments.length;z++){A=arguments[z];for(g in A)l[g]=A[g];for(let U=0;U<G.length;U++)g=G[U],Object.prototype.hasOwnProperty.call(A,g)&&(l[g]=A[g])}}function xe(l){this.src=l,this.g={},this.h=0}xe.prototype.add=function(l,f,g,A,z){const U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);const Q=ze(l,f,A,z);return Q>-1?(f=l[Q],g||(f.fa=!1)):(f=new C(f,this.src,U,!!A,z),f.fa=g,l.push(f)),f};function Ke(l,f){const g=f.type;if(g in l.g){var A=l.g[g],z=Array.prototype.indexOf.call(A,f,void 0),U;(U=z>=0)&&Array.prototype.splice.call(A,z,1),U&&(M(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function ze(l,f,g,A){for(let z=0;z<l.length;++z){const U=l[z];if(!U.da&&U.listener==f&&U.capture==!!g&&U.ha==A)return z}return-1}var Qe="closure_lm_"+(Math.random()*1e6|0),Kt={};function ts(l,f,g,A,z){if(A&&A.once)return pe(l,f,g,A,z);if(Array.isArray(f)){for(let U=0;U<f.length;U++)ts(l,f[U],g,A,z);return null}return g=Qt(g),l&&l[q]?l.J(f,g,a(A)?!!A.capture:!!A,z):ie(l,f,g,!1,A,z)}function ie(l,f,g,A,z,U){if(!f)throw Error("Invalid event type");const Q=a(z)?!!z.capture:!!z;let le=Ji(l);if(le||(l[Qe]=le=new xe(l)),g=le.add(f,g,A,Q,U),g.proxy)return g;if(A=te(),g.proxy=A,A.src=l,A.listener=g,l.addEventListener)N||(z=Q),z===void 0&&(z=!1),l.addEventListener(f.toString(),A,z);else if(l.attachEvent)l.attachEvent(mt(f.toString()),A);else if(l.addListener&&l.removeListener)l.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return g}function te(){function l(g){return f.call(l.src,l.listener,g)}const f=tl;return l}function pe(l,f,g,A,z){if(Array.isArray(f)){for(let U=0;U<f.length;U++)pe(l,f[U],g,A,z);return null}return g=Qt(g),l&&l[q]?l.K(f,g,a(A)?!!A.capture:!!A,z):ie(l,f,g,!0,A,z)}function Ue(l,f,g,A,z){if(Array.isArray(f))for(var U=0;U<f.length;U++)Ue(l,f[U],g,A,z);else A=a(A)?!!A.capture:!!A,g=Qt(g),l&&l[q]?(l=l.i,U=String(f).toString(),U in l.g&&(f=l.g[U],g=ze(f,g,A,z),g>-1&&(M(f[g]),Array.prototype.splice.call(f,g,1),f.length==0&&(delete l.g[U],l.h--)))):l&&(l=Ji(l))&&(f=l.g[f.toString()],l=-1,f&&(l=ze(f,g,A,z)),(g=l>-1?f[l]:null)&&$e(g))}function $e(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[q])Ke(f.i,l);else{var g=l.type,A=l.proxy;f.removeEventListener?f.removeEventListener(g,A,l.capture):f.detachEvent?f.detachEvent(mt(g),A):f.addListener&&f.removeListener&&f.removeListener(A),(g=Ji(f))?(Ke(g,l),g.h==0&&(g.src=null,f[Qe]=null)):M(l)}}}function mt(l){return l in Kt?Kt[l]:Kt[l]="on"+l}function tl(l,f){if(l.da)l=!0;else{f=new $(f,this);const g=l.listener,A=l.ha||l.src;l.fa&&$e(l),l=g.call(A,f)}return l}function Ji(l){return l=l[Qe],l instanceof xe?l:null}var Dn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Qt(l){return typeof l=="function"?l:(l[Dn]||(l[Dn]=function(f){return l.handleEvent(f)}),l[Dn])}function ot(){I.call(this),this.i=new xe(this),this.M=this,this.G=null}p(ot,I),ot.prototype[q]=!0,ot.prototype.removeEventListener=function(l,f,g,A){Ue(this,l,f,g,A)};function at(l,f){var g,A=l.G;if(A)for(g=[];A;A=A.G)g.push(A);if(l=l.M,A=f.type||f,typeof f=="string")f=new P(f,l);else if(f instanceof P)f.target=f.target||l;else{var z=f;f=new P(A,l),ue(f,z)}z=!0;let U,Q;if(g)for(Q=g.length-1;Q>=0;Q--)U=f.g=g[Q],z=zs(U,A,!0,f)&&z;if(U=f.g=l,z=zs(U,A,!0,f)&&z,z=zs(U,A,!1,f)&&z,g)for(Q=0;Q<g.length;Q++)U=f.g=g[Q],z=zs(U,A,!1,f)&&z}ot.prototype.N=function(){if(ot.Z.N.call(this),this.i){var l=this.i;for(const f in l.g){const g=l.g[f];for(let A=0;A<g.length;A++)M(g[A]);delete l.g[f],l.h--}}this.G=null},ot.prototype.J=function(l,f,g,A){return this.i.add(String(l),f,!1,g,A)},ot.prototype.K=function(l,f,g,A){return this.i.add(String(l),f,!0,g,A)};function zs(l,f,g,A){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();let z=!0;for(let U=0;U<f.length;++U){const Q=f[U];if(Q&&!Q.da&&Q.capture==g){const le=Q.listener,Ye=Q.ha||Q.src;Q.fa&&Ke(l.i,Q),z=le.call(Ye,A)!==!1&&z}}return z&&!A.defaultPrevented}function ns(l,f){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=u(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:o.setTimeout(l,f||0)}function nl(l){l.g=ns(()=>{l.g=null,l.i&&(l.i=!1,nl(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class Zi extends I{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:nl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eo(l){I.call(this),this.h=l,this.g={}}p(eo,I);var Wm=[];function qm(l){F(l.g,function(f,g){this.g.hasOwnProperty(g)&&$e(f)},l),l.g={}}eo.prototype.N=function(){eo.Z.N.call(this),qm(this)},eo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Yu=o.JSON.stringify,mE=o.JSON.parse,gE=class{stringify(l){return o.JSON.stringify(l,void 0)}parse(l){return o.JSON.parse(l,void 0)}};function Gm(){}function Km(){}var to={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Xu(){P.call(this,"d")}p(Xu,P);function Ju(){P.call(this,"c")}p(Ju,P);var rs={},Qm=null;function rl(){return Qm=Qm||new ot}rs.Ia="serverreachability";function Ym(l){P.call(this,rs.Ia,l)}p(Ym,P);function no(l){const f=rl();at(f,new Ym(f))}rs.STAT_EVENT="statevent";function Xm(l,f){P.call(this,rs.STAT_EVENT,l),this.stat=f}p(Xm,P);function Tt(l){const f=rl();at(f,new Xm(f,l))}rs.Ja="timingevent";function Jm(l,f){P.call(this,rs.Ja,l),this.size=f}p(Jm,P);function ro(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){l()},f)}function so(){this.g=!0}so.prototype.ua=function(){this.g=!1};function yE(l,f,g,A,z,U){l.info(function(){if(l.g)if(U){var Q="",le=U.split("&");for(let be=0;be<le.length;be++){var Ye=le[be].split("=");if(Ye.length>1){const nt=Ye[0];Ye=Ye[1];const xn=nt.split("_");Q=xn.length>=2&&xn[1]=="type"?Q+(nt+"="+Ye+"&"):Q+(nt+"=redacted&")}}}else Q=null;else Q=U;return"XMLHTTP REQ ("+A+") [attempt "+z+"]: "+f+`
`+g+`
`+Q})}function vE(l,f,g,A,z,U,Q){l.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+z+"]: "+f+`
`+g+`
`+U+" "+Q})}function Us(l,f,g,A){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+xE(l,g)+(A?" "+A:"")})}function wE(l,f){l.info(function(){return"TIMEOUT: "+f})}so.prototype.info=function(){};function xE(l,f){if(!l.g)return f;if(!f)return null;try{const U=JSON.parse(f);if(U){for(l=0;l<U.length;l++)if(Array.isArray(U[l])){var g=U[l];if(!(g.length<2)){var A=g[1];if(Array.isArray(A)&&!(A.length<1)){var z=A[0];if(z!="noop"&&z!="stop"&&z!="close")for(let Q=1;Q<A.length;Q++)A[Q]=""}}}}return Yu(U)}catch{return f}}var sl={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Zm={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},eg;function Zu(){}p(Zu,Gm),Zu.prototype.g=function(){return new XMLHttpRequest},eg=new Zu;function io(l){return encodeURIComponent(String(l))}function _E(l){var f=1;l=l.split(":");const g=[];for(;f>0&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function tr(l,f,g,A){this.j=l,this.i=f,this.l=g,this.S=A||1,this.V=new eo(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new tg}function tg(){this.i=null,this.g="",this.h=!1}var ng={},ed={};function td(l,f,g){l.M=1,l.A=ol(wn(f)),l.u=g,l.R=!0,rg(l,null)}function rg(l,f){l.F=Date.now(),il(l),l.B=wn(l.A);var g=l.B,A=l.S;Array.isArray(A)||(A=[String(A)]),gg(g.i,"t",A),l.C=0,g=l.j.L,l.h=new tg,l.g=Mg(l.j,g?f:null,!l.u),l.P>0&&(l.O=new Zi(u(l.Y,l,l.g),l.P)),f=l.V,g=l.g,A=l.ba;var z="readystatechange";Array.isArray(z)||(z&&(Wm[0]=z.toString()),z=Wm);for(let U=0;U<z.length;U++){const Q=ts(g,z[U],A||f.handleEvent,!1,f.h||f);if(!Q)break;f.g[Q.key]=Q}f=l.J?Y(l.J):{},l.u?(l.v||(l.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,f)):(l.v="GET",l.g.ea(l.B,l.v,null,f)),no(),yE(l.i,l.v,l.B,l.l,l.S,l.u)}tr.prototype.ba=function(l){l=l.target;const f=this.O;f&&sr(l)==3?f.j():this.Y(l)},tr.prototype.Y=function(l){try{if(l==this.g)e:{const le=sr(this.g),Ye=this.g.ya(),be=this.g.ca();if(!(le<3)&&(le!=3||this.g&&(this.h.h||this.g.la()||Eg(this.g)))){this.K||le!=4||Ye==7||(Ye==8||be<=0?no(3):no(2)),nd(this);var f=this.g.ca();this.X=f;var g=bE(this);if(this.o=f==200,vE(this.i,this.v,this.B,this.l,this.S,le,f),this.o){if(this.U&&!this.L){t:{if(this.g){var A,z=this.g;if((A=z.g?z.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(A)){var U=A;break t}}U=null}if(l=U)Us(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,rd(this,l);else{this.o=!1,this.m=3,Tt(12),ss(this),oo(this);break e}}if(this.R){l=!0;let nt;for(;!this.K&&this.C<g.length;)if(nt=EE(this,g),nt==ed){le==4&&(this.m=4,Tt(14),l=!1),Us(this.i,this.l,null,"[Incomplete Response]");break}else if(nt==ng){this.m=4,Tt(15),Us(this.i,this.l,g,"[Invalid Chunk]"),l=!1;break}else Us(this.i,this.l,nt,null),rd(this,nt);if(sg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),le!=4||g.length!=0||this.h.h||(this.m=1,Tt(16),l=!1),this.o=this.o&&l,!l)Us(this.i,this.l,g,"[Invalid Chunked Response]"),ss(this),oo(this);else if(g.length>0&&!this.W){this.W=!0;var Q=this.j;Q.g==this&&Q.aa&&!Q.P&&(Q.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),dd(Q),Q.P=!0,Tt(11))}}else Us(this.i,this.l,g,null),rd(this,g);le==4&&ss(this),this.o&&!this.K&&(le==4?Ng(this.j,this):(this.o=!1,il(this)))}else OE(this.g),f==400&&g.indexOf("Unknown SID")>0?(this.m=3,Tt(12)):(this.m=0,Tt(13)),ss(this),oo(this)}}}catch{}finally{}};function bE(l){if(!sg(l))return l.g.la();const f=Eg(l.g);if(f==="")return"";let g="";const A=f.length,z=sr(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return ss(l),oo(l),"";l.h.i=new o.TextDecoder}for(let U=0;U<A;U++)l.h.h=!0,g+=l.h.i.decode(f[U],{stream:!(z&&U==A-1)});return f.length=0,l.h.g+=g,l.C=0,l.h.g}function sg(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function EE(l,f){var g=l.C,A=f.indexOf(`
`,g);return A==-1?ed:(g=Number(f.substring(g,A)),isNaN(g)?ng:(A+=1,A+g>f.length?ed:(f=f.slice(A,A+g),l.C=A+g,f)))}tr.prototype.cancel=function(){this.K=!0,ss(this)};function il(l){l.T=Date.now()+l.H,ig(l,l.H)}function ig(l,f){if(l.D!=null)throw Error("WatchDog timer not null");l.D=ro(u(l.aa,l),f)}function nd(l){l.D&&(o.clearTimeout(l.D),l.D=null)}tr.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(wE(this.i,this.B),this.M!=2&&(no(),Tt(17)),ss(this),this.m=2,oo(this)):ig(this,this.T-l)};function oo(l){l.j.I==0||l.K||Ng(l.j,l)}function ss(l){nd(l);var f=l.O;f&&typeof f.dispose=="function"&&f.dispose(),l.O=null,qm(l.V),l.g&&(f=l.g,l.g=null,f.abort(),f.dispose())}function rd(l,f){try{var g=l.j;if(g.I!=0&&(g.g==l||sd(g.h,l))){if(!l.L&&sd(g.h,l)&&g.I==3){try{var A=g.Ba.g.parse(f)}catch{A=null}if(Array.isArray(A)&&A.length==3){var z=A;if(z[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<l.F)dl(g),cl(g);else break e;ud(g),Tt(18)}}else g.xa=z[1],0<g.xa-g.K&&z[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=ro(u(g.Va,g),6e3));lg(g.h)<=1&&g.ta&&(g.ta=void 0)}else os(g,11)}else if((l.L||g.g==l)&&dl(g),!w(f))for(z=g.Ba.g.parse(f),f=0;f<z.length;f++){let be=z[f];const nt=be[0];if(!(nt<=g.K))if(g.K=nt,be=be[1],g.I==2)if(be[0]=="c"){g.M=be[1],g.ba=be[2];const xn=be[3];xn!=null&&(g.ka=xn,g.j.info("VER="+g.ka));const as=be[4];as!=null&&(g.za=as,g.j.info("SVER="+g.za));const ir=be[5];ir!=null&&typeof ir=="number"&&ir>0&&(A=1.5*ir,g.O=A,g.j.info("backChannelRequestTimeoutMs_="+A)),A=g;const or=l.g;if(or){const fl=or.g?or.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fl){var U=A.h;U.g||fl.indexOf("spdy")==-1&&fl.indexOf("quic")==-1&&fl.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(id(U,U.h),U.h=null))}if(A.G){const hd=or.g?or.g.getResponseHeader("X-HTTP-Session-Id"):null;hd&&(A.wa=hd,Ie(A.J,A.G,hd))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-l.F,g.j.info("Handshake RTT: "+g.T+"ms")),A=g;var Q=l;if(A.na=jg(A,A.L?A.ba:null,A.W),Q.L){cg(A.h,Q);var le=Q,Ye=A.O;Ye&&(le.H=Ye),le.D&&(nd(le),il(le)),A.g=Q}else Ag(A);g.i.length>0&&ul(g)}else be[0]!="stop"&&be[0]!="close"||os(g,7);else g.I==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?os(g,7):cd(g):be[0]!="noop"&&g.l&&g.l.qa(be),g.A=0)}}no(4)}catch{}}var TE=class{constructor(l,f){this.g=l,this.map=f}};function og(l){this.l=l||10,o.PerformanceNavigationTiming?(l=o.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ag(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function lg(l){return l.h?1:l.g?l.g.size:0}function sd(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function id(l,f){l.g?l.g.add(f):l.h=f}function cg(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}og.prototype.cancel=function(){if(this.i=ug(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function ug(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.G);return f}return _(l.i)}var dg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function SE(l,f){if(l){l=l.split("&");for(let g=0;g<l.length;g++){const A=l[g].indexOf("=");let z,U=null;A>=0?(z=l[g].substring(0,A),U=l[g].substring(A+1)):z=l[g],f(z,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function nr(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;l instanceof nr?(this.l=l.l,ao(this,l.j),this.o=l.o,this.g=l.g,lo(this,l.u),this.h=l.h,od(this,yg(l.i)),this.m=l.m):l&&(f=String(l).match(dg))?(this.l=!1,ao(this,f[1]||"",!0),this.o=co(f[2]||""),this.g=co(f[3]||"",!0),lo(this,f[4]),this.h=co(f[5]||"",!0),od(this,f[6]||"",!0),this.m=co(f[7]||"")):(this.l=!1,this.i=new ho(null,this.l))}nr.prototype.toString=function(){const l=[];var f=this.j;f&&l.push(uo(f,hg,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(uo(f,hg,!0),"@"),l.push(io(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&l.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(uo(g,g.charAt(0)=="/"?AE:CE,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",uo(g,NE)),l.join("")},nr.prototype.resolve=function(l){const f=wn(this);let g=!!l.j;g?ao(f,l.j):g=!!l.o,g?f.o=l.o:g=!!l.g,g?f.g=l.g:g=l.u!=null;var A=l.h;if(g)lo(f,l.u);else if(g=!!l.h){if(A.charAt(0)!="/")if(this.g&&!this.h)A="/"+A;else{var z=f.h.lastIndexOf("/");z!=-1&&(A=f.h.slice(0,z+1)+A)}if(z=A,z==".."||z==".")A="";else if(z.indexOf("./")!=-1||z.indexOf("/.")!=-1){A=z.lastIndexOf("/",0)==0,z=z.split("/");const U=[];for(let Q=0;Q<z.length;){const le=z[Q++];le=="."?A&&Q==z.length&&U.push(""):le==".."?((U.length>1||U.length==1&&U[0]!="")&&U.pop(),A&&Q==z.length&&U.push("")):(U.push(le),A=!0)}A=U.join("/")}else A=z}return g?f.h=A:g=l.i.toString()!=="",g?od(f,yg(l.i)):g=!!l.m,g&&(f.m=l.m),f};function wn(l){return new nr(l)}function ao(l,f,g){l.j=g?co(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function lo(l,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);l.u=f}else l.u=null}function od(l,f,g){f instanceof ho?(l.i=f,PE(l.i,l.l)):(g||(f=uo(f,kE)),l.i=new ho(f,l.l))}function Ie(l,f,g){l.i.set(f,g)}function ol(l){return Ie(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function co(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function uo(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,IE),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function IE(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var hg=/[#\/\?@]/g,CE=/[#\?:]/g,AE=/[#\?]/g,kE=/[#\?@]/g,NE=/#/g;function ho(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function is(l){l.g||(l.g=new Map,l.h=0,l.i&&SE(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}t=ho.prototype,t.add=function(l,f){is(this),this.i=null,l=$s(this,l);let g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function fg(l,f){is(l),f=$s(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function pg(l,f){return is(l),f=$s(l,f),l.g.has(f)}t.forEach=function(l,f){is(this),this.g.forEach(function(g,A){g.forEach(function(z){l.call(f,z,A,this)},this)},this)};function mg(l,f){is(l);let g=[];if(typeof f=="string")pg(l,f)&&(g=g.concat(l.g.get($s(l,f))));else for(l=Array.from(l.g.values()),f=0;f<l.length;f++)g=g.concat(l[f]);return g}t.set=function(l,f){return is(this),this.i=null,l=$s(this,l),pg(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},t.get=function(l,f){return l?(l=mg(this,l),l.length>0?String(l[0]):f):f};function gg(l,f,g){fg(l,f),g.length>0&&(l.i=null,l.g.set($s(l,f),_(g)),l.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(let A=0;A<f.length;A++){var g=f[A];const z=io(g);g=mg(this,g);for(let U=0;U<g.length;U++){let Q=z;g[U]!==""&&(Q+="="+io(g[U])),l.push(Q)}}return this.i=l.join("&")};function yg(l){const f=new ho;return f.i=l.i,l.g&&(f.g=new Map(l.g),f.h=l.h),f}function $s(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function PE(l,f){f&&!l.j&&(is(l),l.i=null,l.g.forEach(function(g,A){const z=A.toLowerCase();A!=z&&(fg(this,A),gg(this,z,g))},l)),l.j=f}function RE(l,f){const g=new so;if(o.Image){const A=new Image;A.onload=h(rr,g,"TestLoadImage: loaded",!0,f,A),A.onerror=h(rr,g,"TestLoadImage: error",!1,f,A),A.onabort=h(rr,g,"TestLoadImage: abort",!1,f,A),A.ontimeout=h(rr,g,"TestLoadImage: timeout",!1,f,A),o.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=l}else f(!1)}function jE(l,f){const g=new so,A=new AbortController,z=setTimeout(()=>{A.abort(),rr(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:A.signal}).then(U=>{clearTimeout(z),U.ok?rr(g,"TestPingServer: ok",!0,f):rr(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(z),rr(g,"TestPingServer: error",!1,f)})}function rr(l,f,g,A,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),A(g)}catch{}}function ME(){this.g=new gE}function ad(l){this.i=l.Sb||null,this.h=l.ab||!1}p(ad,Gm),ad.prototype.g=function(){return new al(this.i,this.h)};function al(l,f){ot.call(this),this.H=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(al,ot),t=al.prototype,t.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=f,this.readyState=1,po(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(f.body=l),(this.H||o).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,fo(this)),this.readyState=0},t.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,po(this)),this.g&&(this.readyState=3,po(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;vg(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function vg(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}t.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?fo(this):po(this),this.readyState==3&&vg(this)}},t.Oa=function(l){this.g&&(this.response=this.responseText=l,fo(this))},t.Na=function(l){this.g&&(this.response=l,fo(this))},t.ga=function(){this.g&&fo(this)};function fo(l){l.readyState=4,l.l=null,l.j=null,l.B=null,po(l)}t.setRequestHeader=function(l,f){this.A.append(l,f)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function po(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(al.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function wg(l){let f="";return F(l,function(g,A){f+=A,f+=":",f+=g,f+=`\r
`}),f}function ld(l,f,g){e:{for(A in g){var A=!1;break e}A=!0}A||(g=wg(g),typeof l=="string"?g!=null&&io(g):Ie(l,f,g))}function Le(l){ot.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Le,ot);var LE=/^https?$/i,DE=["POST","PUT"];t=Le.prototype,t.Fa=function(l){this.H=l},t.ea=function(l,f,g,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():eg.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){xg(this,U);return}if(l=g||"",g=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var z in A)g.set(z,A[z]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const U of A.keys())g.set(U,A.get(U));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),z=o.FormData&&l instanceof o.FormData,!(Array.prototype.indexOf.call(DE,f,void 0)>=0)||A||z||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,Q]of g)this.g.setRequestHeader(U,Q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(U){xg(this,U)}};function xg(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.o=5,_g(l),ll(l)}function _g(l){l.A||(l.A=!0,at(l,"complete"),at(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,at(this,"complete"),at(this,"abort"),ll(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ll(this,!0)),Le.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?bg(this):this.Xa())},t.Xa=function(){bg(this)};function bg(l){if(l.h&&typeof i<"u"){if(l.v&&sr(l)==4)setTimeout(l.Ca.bind(l),0);else if(at(l,"readystatechange"),sr(l)==4){l.h=!1;try{const U=l.ca();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var A;if(A=U===0){let Q=String(l.D).match(dg)[1]||null;!Q&&o.self&&o.self.location&&(Q=o.self.location.protocol.slice(0,-1)),A=!LE.test(Q?Q.toLowerCase():"")}g=A}if(g)at(l,"complete"),at(l,"success");else{l.o=6;try{var z=sr(l)>2?l.g.statusText:""}catch{z=""}l.l=z+" ["+l.ca()+"]",_g(l)}}finally{ll(l)}}}}function ll(l,f){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const g=l.g;l.g=null,f||at(l,"ready");try{g.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function sr(l){return l.g?l.g.readyState:0}t.ca=function(){try{return sr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),mE(f)}};function Eg(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function OE(l){const f={};l=(l.g&&sr(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<l.length;A++){if(w(l[A]))continue;var g=_E(l[A]);const z=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=f[z]||[];f[z]=U,U.push(g)}B(f,function(A){return A.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function mo(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function Tg(l){this.za=0,this.i=[],this.j=new so,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=mo("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=mo("baseRetryDelayMs",5e3,l),this.Za=mo("retryDelaySeedMs",1e4,l),this.Ta=mo("forwardChannelMaxRetries",2,l),this.va=mo("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new og(l&&l.concurrentRequestLimit),this.Ba=new ME,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Tg.prototype,t.ka=8,t.I=1,t.connect=function(l,f,g,A){Tt(0),this.W=l,this.H=f||{},g&&A!==void 0&&(this.H.OSID=g,this.H.OAID=A),this.F=this.X,this.J=jg(this,null,this.W),ul(this)};function cd(l){if(Sg(l),l.I==3){var f=l.V++,g=wn(l.J);if(Ie(g,"SID",l.M),Ie(g,"RID",f),Ie(g,"TYPE","terminate"),go(l,g),f=new tr(l,l.j,f),f.M=2,f.A=ol(wn(g)),g=!1,o.navigator&&o.navigator.sendBeacon)try{g=o.navigator.sendBeacon(f.A.toString(),"")}catch{}!g&&o.Image&&(new Image().src=f.A,g=!0),g||(f.g=Mg(f.j,null),f.g.ea(f.A)),f.F=Date.now(),il(f)}Rg(l)}function cl(l){l.g&&(dd(l),l.g.cancel(),l.g=null)}function Sg(l){cl(l),l.v&&(o.clearTimeout(l.v),l.v=null),dl(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&o.clearTimeout(l.m),l.m=null)}function ul(l){if(!ag(l.h)&&!l.m){l.m=!0;var f=l.Ea;V||x(),L||(V(),L=!0),S.add(f,l),l.D=0}}function VE(l,f){return lg(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=f.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=ro(u(l.Ea,l,f),Pg(l,l.D)),l.D++,!0)}t.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const z=new tr(this,this.j,l);let U=this.o;if(this.U&&(U?(U=Y(U),ue(U,this.U)):U=this.U),this.u!==null||this.R||(z.J=U,U=null),this.S)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var A=this.i[g];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(f+=A,f>4096){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Cg(this,z,f),g=wn(this.J),Ie(g,"RID",l),Ie(g,"CVER",22),this.G&&Ie(g,"X-HTTP-Session-Id",this.G),go(this,g),U&&(this.R?f="headers="+io(wg(U))+"&"+f:this.u&&ld(g,this.u,U)),id(this.h,z),this.Ra&&Ie(g,"TYPE","init"),this.S?(Ie(g,"$req",f),Ie(g,"SID","null"),z.U=!0,td(z,g,null)):td(z,g,f),this.I=2}}else this.I==3&&(l?Ig(this,l):this.i.length==0||ag(this.h)||Ig(this))};function Ig(l,f){var g;f?g=f.l:g=l.V++;const A=wn(l.J);Ie(A,"SID",l.M),Ie(A,"RID",g),Ie(A,"AID",l.K),go(l,A),l.u&&l.o&&ld(A,l.u,l.o),g=new tr(l,l.j,g,l.D+1),l.u===null&&(g.J=l.o),f&&(l.i=f.G.concat(l.i)),f=Cg(l,g,1e3),g.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),id(l.h,g),td(g,A,f)}function go(l,f){l.H&&F(l.H,function(g,A){Ie(f,A,g)}),l.l&&F({},function(g,A){Ie(f,A,g)})}function Cg(l,f,g){g=Math.min(l.i.length,g);const A=l.l?u(l.l.Ka,l.l,l):null;e:{var z=l.i;let le=-1;for(;;){const Ye=["count="+g];le==-1?g>0?(le=z[0].g,Ye.push("ofs="+le)):le=0:Ye.push("ofs="+le);let be=!0;for(let nt=0;nt<g;nt++){var U=z[nt].g;const xn=z[nt].map;if(U-=le,U<0)le=Math.max(0,z[nt].g-100),be=!1;else try{U="req"+U+"_"||"";try{var Q=xn instanceof Map?xn:Object.entries(xn);for(const[as,ir]of Q){let or=ir;a(ir)&&(or=Yu(ir)),Ye.push(U+as+"="+encodeURIComponent(or))}}catch(as){throw Ye.push(U+"type="+encodeURIComponent("_badmap")),as}}catch{A&&A(xn)}}if(be){Q=Ye.join("&");break e}}Q=void 0}return l=l.i.splice(0,g),f.G=l,Q}function Ag(l){if(!l.g&&!l.v){l.Y=1;var f=l.Da;V||x(),L||(V(),L=!0),S.add(f,l),l.A=0}}function ud(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=ro(u(l.Da,l),Pg(l,l.A)),l.A++,!0)}t.Da=function(){if(this.v=null,kg(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=ro(u(this.Wa,this),l)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Tt(10),cl(this),kg(this))};function dd(l){l.B!=null&&(o.clearTimeout(l.B),l.B=null)}function kg(l){l.g=new tr(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var f=wn(l.na);Ie(f,"RID","rpc"),Ie(f,"SID",l.M),Ie(f,"AID",l.K),Ie(f,"CI",l.F?"0":"1"),!l.F&&l.ia&&Ie(f,"TO",l.ia),Ie(f,"TYPE","xmlhttp"),go(l,f),l.u&&l.o&&ld(f,l.u,l.o),l.O&&(l.g.H=l.O);var g=l.g;l=l.ba,g.M=1,g.A=ol(wn(f)),g.u=null,g.R=!0,rg(g,l)}t.Va=function(){this.C!=null&&(this.C=null,cl(this),ud(this),Tt(19))};function dl(l){l.C!=null&&(o.clearTimeout(l.C),l.C=null)}function Ng(l,f){var g=null;if(l.g==f){dl(l),dd(l),l.g=null;var A=2}else if(sd(l.h,f))g=f.G,cg(l.h,f),A=1;else return;if(l.I!=0){if(f.o)if(A==1){g=f.u?f.u.length:0,f=Date.now()-f.F;var z=l.D;A=rl(),at(A,new Jm(A,g)),ul(l)}else Ag(l);else if(z=f.m,z==3||z==0&&f.X>0||!(A==1&&VE(l,f)||A==2&&ud(l)))switch(g&&g.length>0&&(f=l.h,f.i=f.i.concat(g)),z){case 1:os(l,5);break;case 4:os(l,10);break;case 3:os(l,6);break;default:os(l,2)}}}function Pg(l,f){let g=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(g*=2),g*f}function os(l,f){if(l.j.info("Error code "+f),f==2){var g=u(l.bb,l),A=l.Ua;const z=!A;A=new nr(A||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ao(A,"https"),ol(A),z?RE(A.toString(),g):jE(A.toString(),g)}else Tt(2);l.I=0,l.l&&l.l.pa(f),Rg(l),Sg(l)}t.bb=function(l){l?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function Rg(l){if(l.I=0,l.ja=[],l.l){const f=ug(l.h);(f.length!=0||l.i.length!=0)&&(E(l.ja,f),E(l.ja,l.i),l.h.i.length=0,_(l.i),l.i.length=0),l.l.oa()}}function jg(l,f,g){var A=g instanceof nr?wn(g):new nr(g);if(A.g!="")f&&(A.g=f+"."+A.g),lo(A,A.u);else{var z=o.location;A=z.protocol,f=f?f+"."+z.hostname:z.hostname,z=+z.port;const U=new nr(null);A&&ao(U,A),f&&(U.g=f),z&&lo(U,z),g&&(U.h=g),A=U}return g=l.G,f=l.wa,g&&f&&Ie(A,g,f),Ie(A,"VER",l.ka),go(l,A),A}function Mg(l,f,g){if(f&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Aa&&!l.ma?new Le(new ad({ab:g})):new Le(l.ma),f.Fa(l.L),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lg(){}t=Lg.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function hl(){}hl.prototype.g=function(l,f){return new Vt(l,f)};function Vt(l,f){ot.call(this),this.g=new Tg(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(l?l["X-WebChannel-Client-Profile"]=f.sa:l={"X-WebChannel-Client-Profile":f.sa}),this.g.U=l,(l=f&&f.Qb)&&!w(l)&&(this.g.u=l),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!w(f)&&(this.g.G=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Bs(this)}p(Vt,ot),Vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){cd(this.g)},Vt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.v&&(g={},g.__data__=Yu(l),l=g);f.i.push(new TE(f.Ya++,l)),f.I==3&&ul(f)},Vt.prototype.N=function(){this.g.l=null,delete this.j,cd(this.g),delete this.g,Vt.Z.N.call(this)};function Dg(l){Xu.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}p(Dg,Xu);function Og(){Ju.call(this),this.status=1}p(Og,Ju);function Bs(l){this.g=l}p(Bs,Lg),Bs.prototype.ra=function(){at(this.g,"a")},Bs.prototype.qa=function(l){at(this.g,new Dg(l))},Bs.prototype.pa=function(l){at(this.g,new Og)},Bs.prototype.oa=function(){at(this.g,"b")},hl.prototype.createWebChannel=hl.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,M_=function(){return new hl},j_=function(){return rl()},R_=rs,Af={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},sl.NO_ERROR=0,sl.TIMEOUT=8,sl.HTTP_ERROR=6,lc=sl,Zm.COMPLETE="complete",P_=Zm,Km.EventType=to,to.OPEN="a",to.CLOSE="b",to.ERROR="c",to.MESSAGE="d",ot.prototype.listen=ot.prototype.J,Do=Km,Le.prototype.listenOnce=Le.prototype.K,Le.prototype.getLastError=Le.prototype.Ha,Le.prototype.getLastErrorCode=Le.prototype.ya,Le.prototype.getStatus=Le.prototype.ca,Le.prototype.getResponseJson=Le.prototype.La,Le.prototype.getResponseText=Le.prototype.la,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Fa,N_=Le}).apply(typeof Ll<"u"?Ll:typeof self<"u"?self:typeof window<"u"?window:{});const Uy="@firebase/firestore",$y="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gi="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=new Kp("@firebase/firestore");function Ks(){return Ps.logLevel}function J(t,...e){if(Ps.logLevel<=de.DEBUG){const n=e.map(am);Ps.debug(`Firestore (${Gi}): ${t}`,...n)}}function Xn(t,...e){if(Ps.logLevel<=de.ERROR){const n=e.map(am);Ps.error(`Firestore (${Gi}): ${t}`,...n)}}function Mi(t,...e){if(Ps.logLevel<=de.WARN){const n=e.map(am);Ps.warn(`Firestore (${Gi}): ${t}`,...n)}}function am(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,L_(t,r,n)}function L_(t,e,n){let r=`FIRESTORE (${Gi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Xn(r),new Error(r)}function ve(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||L_(e,s,r)}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends er{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class LR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(wt.UNAUTHENTICATED))}shutdown(){}}class DR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class OR{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ve(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Vr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Vr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string",31837,{l:r}),new D_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string",2055,{h:e}),new wt(e)}}class VR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class FR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new VR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class By{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,cn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ve(this.o===void 0,3512);const r=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new By(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new By(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=UR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function kf(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return oh(s)===oh(i)?he(s,i):oh(s)?1:-1}return he(t.length,e.length)}const $R=55296,BR=57343;function oh(t){const e=t.charCodeAt(0);return e>=$R&&e<=BR}function Li(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy="__name__";class Tn{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&se(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Tn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Tn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Tn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return he(e.length,n.length)}static compareSegments(e,n){const r=Tn.isNumericId(e),s=Tn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Tn.extractNumericId(e).compare(Tn.extractNumericId(n)):kf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Or.fromString(e.substring(4,e.length-2))}}class Te extends Tn{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const HR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Tn{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return HR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Hy}static keyField(){return new ut([Hy])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new X(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new X(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new X(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Te.fromString(e))}static fromName(e){return new ee(Te.fromString(e).popFirst(5))}static empty(){return new ee(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Te(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(t,e,n){if(!n)throw new X(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function WR(t,e,n,r){if(e===!0&&r===!0)throw new X(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Wy(t){if(!ee.isDocumentKey(t))throw new X(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function qy(t){if(ee.isDocumentKey(t))throw new X(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function V_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Ru(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se(12329,{type:typeof t})}function fn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ru(t);throw new X(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ka(t,e){if(!V_(t))throw new X(H.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new X(H.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy=-62135596800,Ky=1e6;class Ae{static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Ky);return new Ae(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Gy)throw new X(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ky}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ka(e,Ae._jsonSchema))return new Ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Gy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ae._jsonSchemaVersion="firestore/timestamp/1.0",Ae._jsonSchema={type:qe("string",Ae._jsonSchemaVersion),seconds:qe("number"),nanoseconds:qe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{static fromTimestamp(e){return new oe(e)}static min(){return new oe(new Ae(0,0))}static max(){return new oe(new Ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=-1;function qR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=oe.fromTimestamp(r===1e9?new Ae(n+1,0):new Ae(n,r));return new Br(s,ee.empty(),e)}function GR(t){return new Br(t.readTime,t.key,ka)}class Br{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Br(oe.min(),ee.empty(),ka)}static max(){return new Br(oe.max(),ee.empty(),ka)}}function KR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==QR)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new W((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof W?n:W.resolve(n)}catch(n){return W.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):W.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):W.reject(n)}static resolve(e){return new W((n,r)=>{n(e)})}static reject(e){return new W((n,r)=>{r(e)})}static waitFor(e){return new W((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=W.resolve(!1);for(const r of e)n=n.next(s=>s?W.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new W((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new W((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function XR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Qi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ju.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=-1;function Mu(t){return t==null}function eu(t){return t===0&&1/t==-1/0}function JR(t){return typeof t=="number"&&Number.isInteger(t)&&!eu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_="";function ZR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Qy(e)),e=ej(t.get(n),e);return Qy(e)}function ej(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case F_:n+="";break;default:n+=i}}return n}function Qy(t){return t+F_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function z_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){this.comparator=e,this.root=n||ct.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Dl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Dl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Dl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Dl(this.root,e,this.comparator,!0)}}class Dl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ct.RED,this.left=s??ct.EMPTY,this.right=i??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ct(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ct.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw se(27949);return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw se(57766)}get value(){throw se(16141)}get color(){throw se(16727)}get left(){throw se(29726)}get right(){throw se(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ct(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xy(this.data.getIterator())}getIteratorFrom(e){return new Xy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class Xy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new tt(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Li(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new U_("Invalid base64 string: "+i):i}}(e);return new ft(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const tj=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hr(t){if(ve(!!t,39018),typeof t=="string"){let e=0;const n=tj.exec(t);if(ve(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Wr(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="server_timestamp",B_="__type__",H_="__previous_value__",W_="__local_write_time__";function um(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[B_])==null?void 0:r.stringValue)===$_}function Lu(t){const e=t.mapValue.fields[H_];return um(e)?Lu(e):e}function Na(t){const e=Hr(t.mapValue.fields[W_].timestampValue);return new Ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nj{constructor(e,n,r,s,i,o,a,c,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=h}}const tu="(default)";class Pa{constructor(e,n){this.projectId=e,this.database=n||tu}static empty(){return new Pa("","")}get isDefaultDatabase(){return this.database===tu}isEqual(e){return e instanceof Pa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_="__type__",G_="__max__",Ol={mapValue:{fields:{__type__:{stringValue:G_}}}},K_="__vector__",nu="value";function qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?um(t)?4:sj(t)?9007199254740991:rj(t)?10:11:se(28295,{value:t})}function Ln(t,e){if(t===e)return!0;const n=qr(t);if(n!==qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Na(t).isEqual(Na(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Hr(s.timestampValue),a=Hr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Wr(s.bytesValue).isEqual(Wr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ve(s.geoPointValue.latitude)===Ve(i.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ve(s.integerValue)===Ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ve(s.doubleValue),a=Ve(i.doubleValue);return o===a?eu(o)===eu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Li(t.arrayValue.values||[],e.arrayValue.values||[],Ln);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Yy(o)!==Yy(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Ln(o[c],a[c])))return!1;return!0}(t,e);default:return se(52216,{left:t})}}function Ra(t,e){return(t.values||[]).find(n=>Ln(n,e))!==void 0}function Di(t,e){if(t===e)return 0;const n=qr(t),r=qr(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ve(i.integerValue||i.doubleValue),c=Ve(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Jy(t.timestampValue,e.timestampValue);case 4:return Jy(Na(t),Na(e));case 5:return kf(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Wr(i),c=Wr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=he(a[u],c[u]);if(h!==0)return h}return he(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=he(Ve(i.latitude),Ve(o.latitude));return a!==0?a:he(Ve(i.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Zy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,_,E,j;const a=i.fields||{},c=o.fields||{},u=(m=a[nu])==null?void 0:m.arrayValue,h=(_=c[nu])==null?void 0:_.arrayValue,p=he(((E=u==null?void 0:u.values)==null?void 0:E.length)||0,((j=h==null?void 0:h.values)==null?void 0:j.length)||0);return p!==0?p:Zy(u,h)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ol.mapValue&&o===Ol.mapValue)return 0;if(i===Ol.mapValue)return 1;if(o===Ol.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let p=0;p<c.length&&p<h.length;++p){const m=kf(c[p],h[p]);if(m!==0)return m;const _=Di(a[c[p]],u[h[p]]);if(_!==0)return _}return he(c.length,h.length)}(t.mapValue,e.mapValue);default:throw se(23264,{he:n})}}function Jy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Hr(t),r=Hr(e),s=he(n.seconds,r.seconds);return s!==0?s:he(n.nanos,r.nanos)}function Zy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Di(n[s],r[s]);if(i)return i}return he(n.length,r.length)}function Oi(t){return Nf(t)}function Nf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Wr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ee.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Nf(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Nf(n.fields[o])}`;return s+"}"}(t.mapValue):se(61005,{value:t})}function cc(t){switch(qr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Lu(t);return e?16+cc(e):16;case 5:return 2*t.stringValue.length;case 6:return Wr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+cc(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Zr(r.fields,(i,o)=>{s+=i.length+cc(o)}),s}(t.mapValue);default:throw se(13486,{value:t})}}function ev(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Pf(t){return!!t&&"integerValue"in t}function dm(t){return!!t&&"arrayValue"in t}function tv(t){return!!t&&"nullValue"in t}function nv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function uc(t){return!!t&&"mapValue"in t}function rj(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[q_])==null?void 0:r.stringValue)===K_}function Zo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Zr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Zo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zo(t.arrayValue.values[n]);return e}return{...t}}function sj(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.value=e}static empty(){return new jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!uc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zo(n)}setAll(e){let n=ut.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Zo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());uc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];uc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Zr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new jt(Zo(this.value))}}function Q_(t){const e=[];return Zr(t.fields,(n,r)=>{const s=new ut([n]);if(uc(r)){const i=Q_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new _t(e,0,oe.min(),oe.min(),oe.min(),jt.empty(),0)}static newFoundDocument(e,n,r,s){return new _t(e,1,n,oe.min(),r,s,0)}static newNoDocument(e,n){return new _t(e,2,n,oe.min(),oe.min(),jt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,oe.min(),oe.min(),jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n){this.position=e,this.inclusive=n}}function rv(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ee.comparator(ee.fromName(o.referenceValue),n.key):r=Di(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function sv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ln(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n="asc"){this.field=e,this.dir=n}}function ij(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{}class We extends Y_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new aj(e,n,r):n==="array-contains"?new uj(e,r):n==="in"?new dj(e,r):n==="not-in"?new hj(e,r):n==="array-contains-any"?new fj(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new lj(e,r):new cj(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Di(n,this.value)):n!==null&&qr(this.value)===qr(n)&&this.matchesComparison(Di(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vn extends Y_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new vn(e,n)}matches(e){return X_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function X_(t){return t.op==="and"}function J_(t){return oj(t)&&X_(t)}function oj(t){for(const e of t.filters)if(e instanceof vn)return!1;return!0}function Rf(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+Oi(t.value);if(J_(t))return t.filters.map(e=>Rf(e)).join(",");{const e=t.filters.map(n=>Rf(n)).join(",");return`${t.op}(${e})`}}function Z_(t,e){return t instanceof We?function(r,s){return s instanceof We&&r.op===s.op&&r.field.isEqual(s.field)&&Ln(r.value,s.value)}(t,e):t instanceof vn?function(r,s){return s instanceof vn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Z_(o,s.filters[a]),!0):!1}(t,e):void se(19439)}function eb(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${Oi(n.value)}`}(t):t instanceof vn?function(n){return n.op.toString()+" {"+n.getFilters().map(eb).join(" ,")+"}"}(t):"Filter"}class aj extends We{constructor(e,n,r){super(e,n,r),this.key=ee.fromName(r.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class lj extends We{constructor(e,n){super(e,"in",n),this.keys=tb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class cj extends We{constructor(e,n){super(e,"not-in",n),this.keys=tb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function tb(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>ee.fromName(r.referenceValue))}class uj extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return dm(n)&&Ra(n.arrayValue,this.value)}}class dj extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ra(this.value.arrayValue,n)}}class hj extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ra(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ra(this.value.arrayValue,n)}}class fj extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!dm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ra(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pj{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function iv(t,e=null,n=[],r=[],s=null,i=null,o=null){return new pj(t,e,n,r,s,i,o)}function hm(t){const e=ae(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Rf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Mu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Oi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Oi(r)).join(",")),e.Te=n}return e.Te}function fm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ij(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Z_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sv(t.startAt,e.startAt)&&sv(t.endAt,e.endAt)}function jf(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function mj(t,e,n,r,s,i,o,a){return new Yi(t,e,n,r,s,i,o,a)}function Du(t){return new Yi(t)}function ov(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function nb(t){return t.collectionGroup!==null}function ea(t){const e=ae(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new tt(ut.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ja(i,r))}),n.has(ut.keyField().canonicalString())||e.Ie.push(new ja(ut.keyField(),r))}return e.Ie}function Pn(t){const e=ae(t);return e.Ee||(e.Ee=gj(e,ea(t))),e.Ee}function gj(t,e){if(t.limitType==="F")return iv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ja(s.field,i)});const n=t.endAt?new ru(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ru(t.startAt.position,t.startAt.inclusive):null;return iv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Mf(t,e){const n=t.filters.concat([e]);return new Yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Lf(t,e,n){return new Yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ou(t,e){return fm(Pn(t),Pn(e))&&t.limitType===e.limitType}function rb(t){return`${hm(Pn(t))}|lt:${t.limitType}`}function Qs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>eb(s)).join(", ")}]`),Mu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Oi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Oi(s)).join(",")),`Target(${r})`}(Pn(t))}; limitType=${t.limitType})`}function Vu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ee.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ea(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const u=rv(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,ea(r),s)||r.endAt&&!function(o,a,c){const u=rv(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,ea(r),s))}(t,e)}function yj(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sb(t){return(e,n)=>{let r=!1;for(const s of ea(t)){const i=vj(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function vj(t,e,n){const r=t.field.isKeyField()?ee.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?Di(c,u):se(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Zr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return z_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wj=new Me(ee.comparator);function Jn(){return wj}const ib=new Me(ee.comparator);function Oo(...t){let e=ib;for(const n of t)e=e.insert(n.key,n);return e}function ob(t){let e=ib;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gs(){return ta()}function ab(){return ta()}function ta(){return new Os(t=>t.toString(),(t,e)=>t.isEqual(e))}const xj=new Me(ee.comparator),_j=new tt(ee.comparator);function fe(...t){let e=_j;for(const n of t)e=e.add(n);return e}const bj=new tt(he);function Ej(){return bj}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eu(e)?"-0":e}}function lb(t){return{integerValue:""+t}}function Tj(t,e){return JR(e)?lb(e):pm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(){this._=void 0}}function Sj(t,e,n){return t instanceof Ma?function(s,i){const o={fields:{[B_]:{stringValue:$_},[W_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&um(i)&&(i=Lu(i)),i&&(o.fields[H_]=i),{mapValue:o}}(n,e):t instanceof La?ub(t,e):t instanceof Da?db(t,e):function(s,i){const o=cb(s,i),a=av(o)+av(s.Ae);return Pf(o)&&Pf(s.Ae)?lb(a):pm(s.serializer,a)}(t,e)}function Ij(t,e,n){return t instanceof La?ub(t,e):t instanceof Da?db(t,e):n}function cb(t,e){return t instanceof su?function(r){return Pf(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ma extends Fu{}class La extends Fu{constructor(e){super(),this.elements=e}}function ub(t,e){const n=hb(e);for(const r of t.elements)n.some(s=>Ln(s,r))||n.push(r);return{arrayValue:{values:n}}}class Da extends Fu{constructor(e){super(),this.elements=e}}function db(t,e){let n=hb(e);for(const r of t.elements)n=n.filter(s=>!Ln(s,r));return{arrayValue:{values:n}}}class su extends Fu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function av(t){return Ve(t.integerValue||t.doubleValue)}function hb(t){return dm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cj{constructor(e,n){this.field=e,this.transform=n}}function Aj(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof La&&s instanceof La||r instanceof Da&&s instanceof Da?Li(r.elements,s.elements,Ln):r instanceof su&&s instanceof su?Ln(r.Ae,s.Ae):r instanceof Ma&&s instanceof Ma}(t.transform,e.transform)}class kj{constructor(e,n){this.version=e,this.transformResults=n}}class pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pn}static exists(e){return new pn(void 0,e)}static updateTime(e){return new pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zu{}function fb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new mm(t.key,pn.none()):new Qa(t.key,t.data,pn.none());{const n=t.data,r=jt.empty();let s=new tt(ut.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new es(t.key,r,new Bt(s.toArray()),pn.none())}}function Nj(t,e,n){t instanceof Qa?function(s,i,o){const a=s.value.clone(),c=cv(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof es?function(s,i,o){if(!dc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=cv(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(pb(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function na(t,e,n,r){return t instanceof Qa?function(i,o,a,c){if(!dc(i.precondition,o))return a;const u=i.value.clone(),h=uv(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof es?function(i,o,a,c){if(!dc(i.precondition,o))return a;const u=uv(i.fieldTransforms,c,o),h=o.data;return h.setAll(pb(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,a){return dc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Pj(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=cb(r.transform,s||null);i!=null&&(n===null&&(n=jt.empty()),n.set(r.field,i))}return n||null}function lv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Li(r,s,(i,o)=>Aj(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qa extends zu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class es extends zu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function pb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function cv(t,e,n){const r=new Map;ve(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Ij(o,a,n[s]))}return r}function uv(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Sj(i,o,e))}return r}class mm extends zu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Rj extends zu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jj{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Nj(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=na(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=na(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ab();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=fb(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&Li(this.mutations,e.mutations,(n,r)=>lv(n,r))&&Li(this.baseMutations,e.baseMutations,(n,r)=>lv(n,r))}}class gm{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ve(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return xj}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new gm(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mj{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lj{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,me;function Dj(t){switch(t){case H.OK:return se(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return se(15467,{code:t})}}function mb(t){if(t===void 0)return Xn("GRPC error has no .code"),H.UNKNOWN;switch(t){case Be.OK:return H.OK;case Be.CANCELLED:return H.CANCELLED;case Be.UNKNOWN:return H.UNKNOWN;case Be.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Be.INTERNAL:return H.INTERNAL;case Be.UNAVAILABLE:return H.UNAVAILABLE;case Be.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Be.NOT_FOUND:return H.NOT_FOUND;case Be.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Be.ABORTED:return H.ABORTED;case Be.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Be.DATA_LOSS:return H.DATA_LOSS;default:return se(39323,{code:t})}}(me=Be||(Be={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oj(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vj=new Or([4294967295,4294967295],0);function dv(t){const e=Oj().encode(t),n=new k_;return n.update(e),new Uint8Array(n.digest())}function hv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Or([n,r],0),new Or([s,i],0)]}class ym{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Vo(`Invalid padding: ${n}`);if(r<0)throw new Vo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Vo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Vo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Or.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Or.fromNumber(r)));return s.compare(Vj)===1&&(s=new Or([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=dv(e),[r,s]=hv(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ym(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=dv(e),[r,s]=hv(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Vo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ya.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Uu(oe.min(),s,new Me(he),Jn(),fe())}}class Ya{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ya(r,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class gb{constructor(e,n){this.targetId=e,this.Ce=n}}class yb{constructor(e,n,r=ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class fv{constructor(){this.ve=0,this.Fe=pv(),this.Me=ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=fe(),n=fe(),r=fe();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:se(38017,{changeType:i})}}),new Ya(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=pv()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ve(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Fj{constructor(e){this.Ge=e,this.ze=new Map,this.je=Jn(),this.Je=Vl(),this.He=Vl(),this.Ye=new Me(he)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:se(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(jf(i))if(r===0){const o=new ee(i.path);this.et(n,o,_t.newNoDocument(o,oe.min()))}else ve(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),c=a?this.ct(a,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Wr(r).toUint8Array()}catch(c){if(c instanceof U_)return Mi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new ym(o,s,i)}catch(c){return Mi(c instanceof Vo?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const a=this.ot(o);if(a){if(i.current&&jf(a.target)){const c=new ee(a.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,_t.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=fe();this.He.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Uu(e,n,this.Ye,this.je,r);return this.je=Jn(),this.Je=Vl(),this.He=Vl(),this.Ye=new Me(he),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new fv,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new tt(he),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new tt(he),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new fv),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Vl(){return new Me(ee.comparator)}function pv(){return new Me(ee.comparator)}const zj=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Uj=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),$j=(()=>({and:"AND",or:"OR"}))();class Bj{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Df(t,e){return t.useProto3Json||Mu(e)?e:{value:e}}function iu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vb(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Hj(t,e){return iu(t,e.toTimestamp())}function Rn(t){return ve(!!t,49232),oe.fromTimestamp(function(n){const r=Hr(n);return new Ae(r.seconds,r.nanos)}(t))}function vm(t,e){return Of(t,e).canonicalString()}function Of(t,e){const n=function(s){return new Te(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function wb(t){const e=Te.fromString(t);return ve(Tb(e),10190,{key:e.toString()}),e}function Vf(t,e){return vm(t.databaseId,e.path)}function ah(t,e){const n=wb(e);if(n.get(1)!==t.databaseId.projectId)throw new X(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ee(_b(n))}function xb(t,e){return vm(t.databaseId,e)}function Wj(t){const e=wb(t);return e.length===4?Te.emptyPath():_b(e)}function Ff(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _b(t){return ve(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function mv(t,e,n){return{name:Vf(t,e),fields:n.value.mapValue.fields}}function qj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:se(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(ve(h===void 0||typeof h=="string",58123),ft.fromBase64String(h||"")):(ve(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),ft.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?H.UNKNOWN:mb(u.code);return new X(h,u.message||"")}(o);n=new yb(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ah(t,r.document.name),i=Rn(r.document.updateTime),o=r.document.createTime?Rn(r.document.createTime):oe.min(),a=new jt({mapValue:{fields:r.document.fields}}),c=_t.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new hc(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ah(t,r.document),i=r.readTime?Rn(r.readTime):oe.min(),o=_t.newNoDocument(s,i),a=r.removedTargetIds||[];n=new hc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ah(t,r.document),i=r.removedTargetIds||[];n=new hc([],i,s,null)}else{if(!("filter"in e))return se(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Lj(s,i),a=r.targetId;n=new gb(a,o)}}return n}function Gj(t,e){let n;if(e instanceof Qa)n={update:mv(t,e.key,e.value)};else if(e instanceof mm)n={delete:Vf(t,e.key)};else if(e instanceof es)n={update:mv(t,e.key,e.data),updateMask:nM(e.fieldMask)};else{if(!(e instanceof Rj))return se(16599,{Vt:e.type});n={verify:Vf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Ma)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof La)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Da)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof su)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw se(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Hj(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:se(27497)}(t,e.precondition)),n}function Kj(t,e){return t&&t.length>0?(ve(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Rn(s.updateTime):Rn(i);return o.isEqual(oe.min())&&(o=Rn(i)),new kj(o,s.transformResults||[])}(n,e))):[]}function Qj(t,e){return{documents:[xb(t,e.path)]}}function Yj(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=xb(t,s);const i=function(u){if(u.length!==0)return Eb(vn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:Ys(m.field),direction:Zj(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Df(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function Xj(t){let e=Wj(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ve(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(p){const m=bb(p);return m instanceof vn&&J_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(E){return new ja(Xs(E.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(p){let m;return m=typeof p=="object"?p.value:p,Mu(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,_=p.values||[];return new ru(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,_=p.values||[];return new ru(_,m)}(n.endAt)),mj(e,s,o,i,a,"F",c,u)}function Jj(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function bb(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xs(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Xs(n.unaryFilter.field);return We.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Xs(n.unaryFilter.field);return We.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xs(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return se(61313);default:return se(60726)}}(t):t.fieldFilter!==void 0?function(n){return We.create(Xs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return se(58110);default:return se(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return vn.create(n.compositeFilter.filters.map(r=>bb(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return se(1026)}}(n.compositeFilter.op))}(t):se(30097,{filter:t})}function Zj(t){return zj[t]}function eM(t){return Uj[t]}function tM(t){return $j[t]}function Ys(t){return{fieldPath:t.canonicalString()}}function Xs(t){return ut.fromServerFormat(t.fieldPath)}function Eb(t){return t instanceof We?function(n){if(n.op==="=="){if(nv(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NAN"}};if(tv(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(nv(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NOT_NAN"}};if(tv(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ys(n.field),op:eM(n.op),value:n.value}}}(t):t instanceof vn?function(n){const r=n.getFilters().map(s=>Eb(s));return r.length===1?r[0]:{compositeFilter:{op:tM(n.op),filters:r}}}(t):se(54877,{filter:t})}function nM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Tb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,r,s,i=oe.min(),o=oe.min(),a=ft.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(e){this.yt=e}}function sM(t){const e=Xj({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Lf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(){this.Cn=new oM}addToCollectionParentIndex(e,n){return this.Cn.add(n),W.resolve()}getCollectionParents(e,n){return W.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return W.resolve()}deleteFieldIndex(e,n){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,n){return W.resolve()}getDocumentsMatchingTarget(e,n){return W.resolve(null)}getIndexType(e,n){return W.resolve(0)}getFieldIndexes(e,n){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,n){return W.resolve(Br.min())}getMinOffsetFromCollectionGroup(e,n){return W.resolve(Br.min())}updateCollectionGroup(e,n,r){return W.resolve()}updateIndexEntries(e,n){return W.resolve()}}class oM{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new tt(Te.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new tt(Te.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Sb=41943040;class Nt{static withCacheSize(e){return new Nt(e,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(Sb,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Vi(0)}static cr(){return new Vi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv="LruGarbageCollector",aM=1048576;function vv([t,e],[n,r]){const s=he(t,n);return s===0?he(e,r):s}class lM{constructor(e){this.Ir=e,this.buffer=new tt(vv),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();vv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class cM{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){J(yv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Qi(n)?J(yv,"Ignoring IndexedDB error during garbage collection: ",n):await Ki(n)}await this.Vr(3e5)})}}class uM{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return W.resolve(ju.ce);const r=new lM(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(gv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gv):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,a=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),Ks()<=de.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function dM(t,e){return new uM(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hM{constructor(){this.changes=new Os(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?W.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&na(r.mutation,s,Bt.empty(),Ae.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const s=gs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Oo();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=gs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Jn();const o=ta(),a=function(){return ta()}();return n.forEach((c,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof es)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),na(h.mutation,u,h.mutation.getFieldMask(),Ae.now())):o.set(u.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>a.set(u,new fM(h,o.get(u)??null))),a))}recalculateAndSaveOverlays(e,n){const r=ta();let s=new Me((o,a)=>o-a),i=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=r.get(c)||Bt.empty();h=a.applyToLocalView(u,h),r.set(c,h);const p=(s.get(a.batchId)||fe()).add(c);s=s.insert(a.batchId,p)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,p=ab();h.forEach(m=>{if(!i.has(m)){const _=fb(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return W.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ee.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):W.resolve(gs());let a=ka,c=i;return o.next(u=>W.forEach(u,(h,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),i.get(h)?W.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{c=c.insert(h,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,fe())).next(h=>({batchId:a,changes:ob(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next(r=>{let s=Oo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Oo();return this.indexManager.getCollectionParents(e,i).next(a=>W.forEach(a,c=>{const u=function(p,m){return new Yi(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,_t.newInvalidDocument(h)))});let a=Oo();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&na(h.mutation,u,Bt.empty(),Ae.now()),Vu(n,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mM{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return W.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Rn(s.createTime)}}(n)),W.resolve()}getNamedQuery(e,n){return W.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:sM(s.bundledQuery),readTime:Rn(s.readTime)}}(n)),W.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gM{constructor(){this.overlays=new Me(ee.comparator),this.qr=new Map}getOverlay(e,n){return W.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gs();return W.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),W.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),W.resolve()}getOverlaysForCollection(e,n,r){const s=gs(),i=n.length+1,o=new ee(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return W.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Me((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=gs(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=gs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return W.resolve(a)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Mj(n,r));let i=this.qr.get(n);i===void 0&&(i=fe(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yM{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(){this.Qr=new tt(rt.$r),this.Ur=new tt(rt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new rt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new rt(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new ee(new Te([])),r=new rt(n,e),s=new rt(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ee(new Te([])),r=new rt(n,e),s=new rt(n,e+1);let i=fe();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new rt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ee.comparator(e.key,n.key)||he(e.Yr,n.Yr)}static Kr(e,n){return he(e.Yr,n.Yr)||ee.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new tt(rt.$r)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jj(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Zr=this.Zr.add(new rt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return W.resolve(o)}lookupMutationBatch(e,n){return W.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return W.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?cm:this.tr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),s=new rt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const a=this.Xr(o.Yr);i.push(a)}),W.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(he);return n.forEach(s=>{const i=new rt(s,0),o=new rt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],a=>{r=r.add(a.Yr)})}),W.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ee.isDocumentKey(i)||(i=i.child(""));const o=new rt(new ee(i),0);let a=new tt(he);return this.Zr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.Yr)),!0)},o),W.resolve(this.ti(a))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ve(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return W.forEach(n.mutations,s=>{const i=new rt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new rt(n,0),s=this.Zr.firstAfterOrEqual(r);return W.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(e){this.ri=e,this.docs=function(){return new Me(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return W.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=Jn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():_t.newInvalidDocument(s))}),W.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Jn();const o=n.path,a=new ee(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||KR(GR(h),r)<=0||(s.has(h.key)||Vu(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return W.resolve(i)}getAllFromCollectionGroup(e,n,r,s){se(9500)}ii(e,n){return W.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new xM(this)}getSize(e){return W.resolve(this.size)}}class xM extends hM{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),W.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M{constructor(e){this.persistence=e,this.si=new Os(n=>hm(n),fm),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.oi=0,this._i=new wm,this.targetCount=0,this.ai=Vi.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),W.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Vi(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,W.resolve()}updateTargetData(e,n){return this.Pr(n),W.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),W.waitFor(i).next(()=>s)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return W.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),W.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),W.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),W.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return W.resolve(r)}containsKey(e,n){return W.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e,n){this.ui={},this.overlays={},this.ci=new ju(0),this.li=!1,this.li=!0,this.hi=new yM,this.referenceDelegate=e(this),this.Pi=new _M(this),this.indexManager=new iM,this.remoteDocumentCache=function(s){return new wM(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new rM(n),this.Ii=new mM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new vM(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){J("MemoryPersistence","Starting transaction:",e);const s=new bM(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return W.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class bM extends YR{constructor(e){super(),this.currentSequenceNumber=e}}class xm{constructor(e){this.persistence=e,this.Ri=new wm,this.Vi=null}static mi(e){return new xm(e)}get fi(){if(this.Vi)return this.Vi;throw se(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),W.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),W.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),W.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.fi,r=>{const s=ee.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,oe.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return W.or([()=>W.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class ou{constructor(e,n){this.persistence=e,this.pi=new Os(r=>ZR(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=dM(this,n)}static mi(e,n){return new ou(e,n)}Ei(){}di(e){return W.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return W.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?W.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(a=>{a||(r++,i.removeEntry(o,oe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),W.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),W.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),W.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=cc(e.data.value)),n}br(e,n,r){return W.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return W.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=fe(),s=fe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new _m(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return tk()?8:XR(Et())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new EM;return this.Ss(e,n,o).next(a=>{if(i.result=a,this.Vs)return this.bs(e,n,o,a.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(Ks()<=de.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",Qs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),W.resolve()):(Ks()<=de.DEBUG&&J("QueryEngine","Query:",Qs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Ks()<=de.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",Qs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pn(n))):W.resolve())}ys(e,n){if(ov(n))return W.resolve(null);let r=Pn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Lf(n,null,"F"),r=Pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=fe(...i);return this.ps.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Ds(n,a);return this.Cs(n,u,o,c.readTime)?this.ys(e,Lf(n,null,"F")):this.vs(e,u,n,c)}))})))}ws(e,n,r,s){return ov(n)||s.isEqual(oe.min())?W.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?W.resolve(null):(Ks()<=de.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qs(n)),this.vs(e,o,n,qR(s,ka)).next(a=>a))})}Ds(e,n){let r=new tt(sb(e));return n.forEach((s,i)=>{Vu(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Ks()<=de.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Qs(n)),this.ps.getDocumentsMatchingQuery(e,n,Br.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm="LocalStore",SM=3e8;class IM{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Me(he),this.xs=new Os(i=>hm(i),fm),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pM(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function CM(t,e,n,r){return new IM(t,e,n,r)}async function Cb(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=fe();for(const u of s){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:a}))})})}function AM(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const p=u.batch,m=p.keys();let _=W.resolve();return m.forEach(E=>{_=_.next(()=>h.getEntry(c,E)).next(j=>{const k=u.docVersions.get(E);ve(k!==null,48541),j.version.compareTo(k)<0&&(p.applyToRemoteDocument(j,u),j.isValidDocument()&&(j.setReadTime(u.commitVersion),h.addEntry(j)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=fe();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Ab(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function kM(t,e){const n=ae(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const a=[];e.targetChanges.forEach((h,p)=>{const m=s.get(p);if(!m)return;a.push(n.Pi.removeMatchingKeys(i,h.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,h.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(ft.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),s=s.insert(p,_),function(j,k,b){return j.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-j.snapshotVersion.toMicroseconds()>=SM?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(m,_,h)&&a.push(n.Pi.updateTargetData(i,_))});let c=Jn(),u=fe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(NM(i,o,e.documentUpdates).next(h=>{c=h.ks,u=h.qs})),!r.isEqual(oe.min())){const h=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return W.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ms=s,i))}function NM(t,e,n){let r=fe(),s=fe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Jn();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(oe.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):J(bm,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{ks:o,qs:s}})}function PM(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=cm),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function RM(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,W.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new Tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function zf(t,e,n){const r=ae(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Qi(o))throw o;J(bm,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function wv(t,e,n){const r=ae(t);let s=oe.min(),i=fe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const p=ae(c),m=p.xs.get(h);return m!==void 0?W.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,h)}(r,o,Pn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:oe.min(),n?i:fe())).next(a=>(jM(r,yj(e),a),{documents:a,Qs:i})))}function jM(t,e,n){let r=t.Os.get(e)||oe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class xv{constructor(){this.activeTargetIds=Ej()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class MM{constructor(){this.Mo=new xv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new xv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v="ConnectivityMonitor";class bv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){J(_v,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){J(_v,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fl=null;function Uf(){return Fl===null?Fl=function(){return 268435456+Math.round(2147483648*Math.random())}():Fl++,"0x"+Fl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="RestConnection",DM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class OM{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===tu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Uf(),a=this.zo(e,n.toUriEncodedString());J(lh,`Sending RPC '${e}' ${o}:`,a,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,s,i);const{host:u}=new URL(a),h=Bi(u);return this.Jo(e,a,c,r,h).then(p=>(J(lh,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Mi(lh,`RPC '${e}' ${o} failed with error: `,p,"url: ",a,"request:",r),p})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Gi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=DM[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VM{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="WebChannelConnection";class FM extends OM{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Uf();return new Promise((a,c)=>{const u=new N_;u.setWithCredentials(!0),u.listenOnce(P_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case lc.NO_ERROR:const p=u.getResponseJson();J(vt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),a(p);break;case lc.TIMEOUT:J(vt,`RPC '${e}' ${o} timed out`),c(new X(H.DEADLINE_EXCEEDED,"Request time out"));break;case lc.HTTP_ERROR:const m=u.getStatus();if(J(vt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const E=_==null?void 0:_.error;if(E&&E.status&&E.message){const j=function(b){const y=b.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(y)>=0?y:H.UNKNOWN}(E.status);c(new X(j,E.message))}else c(new X(H.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new X(H.UNAVAILABLE,"Connection failed."));break;default:se(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{J(vt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);J(vt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",h,r,15)})}T_(e,n,r){const s=Uf(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=M_(),a=j_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const h=i.join("");J(vt,`Creating RPC '${e}' stream ${s}: ${h}`,c);const p=o.createWebChannel(h,c);this.I_(p);let m=!1,_=!1;const E=new VM({Yo:k=>{_?J(vt,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(m||(J(vt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),J(vt,`RPC '${e}' stream ${s} sending:`,k),p.send(k))},Zo:()=>p.close()}),j=(k,b,y)=>{k.listen(b,v=>{try{y(v)}catch(R){setTimeout(()=>{throw R},0)}})};return j(p,Do.EventType.OPEN,()=>{_||(J(vt,`RPC '${e}' stream ${s} transport opened.`),E.o_())}),j(p,Do.EventType.CLOSE,()=>{_||(_=!0,J(vt,`RPC '${e}' stream ${s} transport closed`),E.a_(),this.E_(p))}),j(p,Do.EventType.ERROR,k=>{_||(_=!0,Mi(vt,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),E.a_(new X(H.UNAVAILABLE,"The operation could not be completed")))}),j(p,Do.EventType.MESSAGE,k=>{var b;if(!_){const y=k.data[0];ve(!!y,16349);const v=y,R=(v==null?void 0:v.error)||((b=v[0])==null?void 0:b.error);if(R){J(vt,`RPC '${e}' stream ${s} received error:`,R);const V=R.status;let L=function(T){const I=Be[T];if(I!==void 0)return mb(I)}(V),S=R.message;L===void 0&&(L=H.INTERNAL,S="Unknown error status: "+V+" with message "+R.message),_=!0,E.a_(new X(L,S)),p.close()}else J(vt,`RPC '${e}' stream ${s} received:`,y),E.u_(y)}}),j(a,R_.STAT_EVENT,k=>{k.stat===Af.PROXY?J(vt,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===Af.NOPROXY&&J(vt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.__()},0),E}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function ch(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(t){return new Bj(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev="PersistentStream";class Nb{constructor(e,n,r,s,i,o,a,c){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new kb(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(Xn(n.toString()),Xn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new X(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return J(Ev,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(J(Ev,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zM extends Nb{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=qj(this.serializer,e),r=function(i){if(!("targetChange"in i))return oe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?Rn(o.readTime):oe.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Ff(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=jf(c)?{documents:Qj(i,c)}:{query:Yj(i,c).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=vb(i,o.resumeToken);const u=Df(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(oe.min())>0){a.readTime=iu(i,o.snapshotVersion.toTimestamp());const u=Df(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=Jj(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Ff(this.serializer),n.removeTarget=e,this.q_(n)}}class UM extends Nb{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ve(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ve(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Kj(e.writeResults,e.commitTime),r=Rn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Ff(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Gj(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $M{}class BM extends $M{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new X(H.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Of(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(H.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Ho(e,Of(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(H.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class HM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Xn(n),this.aa=!1):J("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="RemoteStore";class WM{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Vs(this)&&(J(Rs,"Restarting streams for network reachability change."),await async function(c){const u=ae(c);u.Ea.add(4),await Xa(u),u.Ra.set("Unknown"),u.Ea.delete(4),await Bu(u)}(this))})}),this.Ra=new HM(r,s)}}async function Bu(t){if(Vs(t))for(const e of t.da)await e(!0)}async function Xa(t){for(const e of t.da)await e(!1)}function Pb(t,e){const n=ae(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Im(n)?Sm(n):Xi(n).O_()&&Tm(n,e))}function Em(t,e){const n=ae(t),r=Xi(n);n.Ia.delete(e),r.O_()&&Rb(n,e),n.Ia.size===0&&(r.O_()?r.L_():Vs(n)&&n.Ra.set("Unknown"))}function Tm(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Xi(t).Y_(e)}function Rb(t,e){t.Va.Ue(e),Xi(t).Z_(e)}function Sm(t){t.Va=new Fj({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Xi(t).start(),t.Ra.ua()}function Im(t){return Vs(t)&&!Xi(t).x_()&&t.Ia.size>0}function Vs(t){return ae(t).Ea.size===0}function jb(t){t.Va=void 0}async function qM(t){t.Ra.set("Online")}async function GM(t){t.Ia.forEach((e,n)=>{Tm(t,e)})}async function KM(t,e){jb(t),Im(t)?(t.Ra.ha(e),Sm(t)):t.Ra.set("Unknown")}async function QM(t,e,n){if(t.Ra.set("Online"),e instanceof yb&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.Va.removeTarget(a))}(t,e)}catch(r){J(Rs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await au(t,r)}else if(e instanceof hc?t.Va.Ze(e):e instanceof gb?t.Va.st(e):t.Va.tt(e),!n.isEqual(oe.min()))try{const r=await Ab(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.Va.Tt(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.Ia.get(u);h&&i.Ia.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=i.Ia.get(c);if(!h)return;i.Ia.set(c,h.withResumeToken(ft.EMPTY_BYTE_STRING,h.snapshotVersion)),Rb(i,c);const p=new Tr(h.target,c,u,h.sequenceNumber);Tm(i,p)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){J(Rs,"Failed to raise snapshot:",r),await au(t,r)}}async function au(t,e,n){if(!Qi(e))throw e;t.Ea.add(1),await Xa(t),t.Ra.set("Offline"),n||(n=()=>Ab(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J(Rs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Bu(t)})}function Mb(t,e){return e().catch(n=>au(t,n,e))}async function Hu(t){const e=ae(t),n=Gr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:cm;for(;YM(e);)try{const s=await PM(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,XM(e,s)}catch(s){await au(e,s)}Lb(e)&&Db(e)}function YM(t){return Vs(t)&&t.Ta.length<10}function XM(t,e){t.Ta.push(e);const n=Gr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function Lb(t){return Vs(t)&&!Gr(t).x_()&&t.Ta.length>0}function Db(t){Gr(t).start()}async function JM(t){Gr(t).ra()}async function ZM(t){const e=Gr(t);for(const n of t.Ta)e.ea(n.mutations)}async function e4(t,e,n){const r=t.Ta.shift(),s=gm.from(r,e,n);await Mb(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Hu(t)}async function t4(t,e){e&&Gr(t).X_&&await async function(r,s){if(function(o){return Dj(o)&&o!==H.ABORTED}(s.code)){const i=r.Ta.shift();Gr(r).B_(),await Mb(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Hu(r)}}(t,e),Lb(t)&&Db(t)}async function Tv(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),J(Rs,"RemoteStore received new credentials");const r=Vs(n);n.Ea.add(3),await Xa(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Bu(n)}async function n4(t,e){const n=ae(t);e?(n.Ea.delete(2),await Bu(n)):e||(n.Ea.add(2),await Xa(n),n.Ra.set("Unknown"))}function Xi(t){return t.ma||(t.ma=function(n,r,s){const i=ae(n);return i.sa(),new zM(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:qM.bind(null,t),t_:GM.bind(null,t),r_:KM.bind(null,t),H_:QM.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Im(t)?Sm(t):t.Ra.set("Unknown")):(await t.ma.stop(),jb(t))})),t.ma}function Gr(t){return t.fa||(t.fa=function(n,r,s){const i=ae(n);return i.sa(),new UM(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:JM.bind(null,t),r_:t4.bind(null,t),ta:ZM.bind(null,t),na:e4.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Hu(t)):(await t.fa.stop(),t.Ta.length>0&&(J(Rs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Cm(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Am(t,e){if(Xn("AsyncQueue",`${e}: ${t}`),Qi(t))return new X(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{static emptySet(e){return new bi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ee.comparator(n.key,r.key):(n,r)=>ee.comparator(n.key,r.key),this.keyedMap=Oo(),this.sortedSet=new Me(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(){this.ga=new Me(ee.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):se(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Fi{constructor(e,n,r,s,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Fi(e,n,bi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ou(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class s4{constructor(){this.queries=Iv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ae(n),i=s.queries;s.queries=Iv(),i.forEach((o,a)=>{for(const c of a.Sa)c.onError(r)})})(this,new X(H.ABORTED,"Firestore shutting down"))}}function Iv(){return new Os(t=>rb(t),Ou)}async function Ob(t,e){const n=ae(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new r4,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Am(o,`Initialization of query '${Qs(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&km(n)}async function Vb(t,e){const n=ae(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function i4(t,e){const n=ae(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Sa)a.Fa(s)&&(r=!0);o.wa=s}}r&&km(n)}function o4(t,e,n){const r=ae(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function km(t){t.Ca.forEach(e=>{e.next()})}var $f,Cv;(Cv=$f||($f={})).Ma="default",Cv.Cache="cache";class Fb{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Fi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Fi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==$f.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e){this.key=e}}class Ub{constructor(e){this.key=e}}class a4{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=fe(),this.mutatedKeys=fe(),this.eu=sb(e),this.tu=new bi(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Sv,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,p)=>{const m=s.get(h),_=Vu(this.query,p)?p:null,E=!!m&&this.mutatedKeys.has(m.key),j=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let k=!1;m&&_?m.data.isEqual(_.data)?E!==j&&(r.track({type:3,doc:_}),k=!0):this.su(m,_)||(r.track({type:2,doc:_}),k=!0,(c&&this.eu(_,c)>0||u&&this.eu(_,u)<0)&&(a=!0)):!m&&_?(r.track({type:0,doc:_}),k=!0):m&&!_&&(r.track({type:1,doc:m}),k=!0,(c||u)&&(a=!0)),k&&(_?(o=o.add(_),i=j?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,Cs:a,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((h,p)=>function(_,E){const j=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se(20277,{Rt:k})}};return j(_)-j(E)}(h.type,p.type)||this.eu(h.doc,p.doc)),this.ou(r),s=s??!1;const a=n&&!s?this._u():[],c=this.Xa.size===0&&this.current&&!s?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new Fi(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Sv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=fe(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new Ub(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new zb(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=fe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Fi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Nm="SyncEngine";class l4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class c4{constructor(e){this.key=e,this.hu=!1}}class u4{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Os(a=>rb(a),Ou),this.Iu=new Map,this.Eu=new Set,this.du=new Me(ee.comparator),this.Au=new Map,this.Ru=new wm,this.Vu={},this.mu=new Map,this.fu=Vi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function d4(t,e,n=!0){const r=Gb(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await $b(r,e,n,!0),s}async function h4(t,e){const n=Gb(t);await $b(n,e,!0,!1)}async function $b(t,e,n,r){const s=await RM(t.localStore,Pn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await f4(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Pb(t.remoteStore,s),a}async function f4(t,e,n,r,s){t.pu=(p,m,_)=>async function(j,k,b,y){let v=k.view.ru(b);v.Cs&&(v=await wv(j.localStore,k.query,!1).then(({documents:S})=>k.view.ru(S,v)));const R=y&&y.targetChanges.get(k.targetId),V=y&&y.targetMismatches.get(k.targetId)!=null,L=k.view.applyChanges(v,j.isPrimaryClient,R,V);return kv(j,k.targetId,L.au),L.snapshot}(t,p,m,_);const i=await wv(t.localStore,e,!0),o=new a4(e,i.Qs),a=o.ru(i.documents),c=Ya.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,c);kv(t,n,u.au);const h=new l4(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function p4(t,e,n){const r=ae(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Ou(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await zf(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Em(r.remoteStore,s.targetId),Bf(r,s.targetId)}).catch(Ki)):(Bf(r,s.targetId),await zf(r.localStore,s.targetId,!0))}async function m4(t,e){const n=ae(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Em(n.remoteStore,r.targetId))}async function g4(t,e,n){const r=E4(t);try{const s=await function(o,a){const c=ae(o),u=Ae.now(),h=a.reduce((_,E)=>_.add(E.key),fe());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let E=Jn(),j=fe();return c.Ns.getEntries(_,h).next(k=>{E=k,E.forEach((b,y)=>{y.isValidDocument()||(j=j.add(b))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,E)).next(k=>{p=k;const b=[];for(const y of a){const v=Pj(y,p.get(y.key).overlayedDocument);v!=null&&b.push(new es(y.key,v,Q_(v.value.mapValue),pn.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,b,a)}).next(k=>{m=k;const b=k.applyToLocalDocumentSet(p,j);return c.documentOverlayCache.saveOverlays(_,k.batchId,b)})}).then(()=>({batchId:m.batchId,changes:ob(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new Me(he)),u=u.insert(a,c),o.Vu[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ja(r,s.changes),await Hu(r.remoteStore)}catch(s){const i=Am(s,"Failed to persist write");n.reject(i)}}async function Bb(t,e){const n=ae(t);try{const r=await kM(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?ve(o.hu,14607):s.removedDocuments.size>0&&(ve(o.hu,42227),o.hu=!1))}),await Ja(n,r,e)}catch(r){await Ki(r)}}function Av(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ae(o);c.onlineState=a;let u=!1;c.queries.forEach((h,p)=>{for(const m of p.Sa)m.va(a)&&(u=!0)}),u&&km(c)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function y4(t,e,n){const r=ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Me(ee.comparator);o=o.insert(i,_t.newNoDocument(i,oe.min()));const a=fe().add(i),c=new Uu(oe.min(),new Map,new Me(he),o,a);await Bb(r,c),r.du=r.du.remove(i),r.Au.delete(e),Pm(r)}else await zf(r.localStore,e,!1).then(()=>Bf(r,e,n)).catch(Ki)}async function v4(t,e){const n=ae(t),r=e.batch.batchId;try{const s=await AM(n.localStore,e);Wb(n,r,null),Hb(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ja(n,s)}catch(s){await Ki(s)}}async function w4(t,e,n){const r=ae(t);try{const s=await function(o,a){const c=ae(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(p=>(ve(p!==null,37113),h=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(r.localStore,e);Wb(r,e,n),Hb(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ja(r,s)}catch(s){await Ki(s)}}function Hb(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Wb(t,e,n){const r=ae(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Bf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||qb(t,r)})}function qb(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Em(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Pm(t))}function kv(t,e,n){for(const r of n)r instanceof zb?(t.Ru.addReference(r.key,e),x4(t,r)):r instanceof Ub?(J(Nm,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||qb(t,r.key)):se(19791,{wu:r})}function x4(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(J(Nm,"New document in limbo: "+n),t.Eu.add(r),Pm(t))}function Pm(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ee(Te.fromString(e)),r=t.fu.next();t.Au.set(r,new c4(n)),t.du=t.du.insert(n,r),Pb(t.remoteStore,new Tr(Pn(Du(n.path)),r,"TargetPurposeLimboResolution",ju.ce))}}async function Ja(t,e,n){const r=ae(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,c)=>{o.push(r.pu(c,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=_m.As(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(c,u){const h=ae(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>W.forEach(u,m=>W.forEach(m.Es,_=>h.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>W.forEach(m.ds,_=>h.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!Qi(p))throw p;J(bm,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=h.Ms.get(m),E=_.snapshotVersion,j=_.withLastLimboFreeSnapshotVersion(E);h.Ms=h.Ms.insert(m,j)}}}(r.localStore,i))}async function _4(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){J(Nm,"User change. New user:",e.toKey());const r=await Cb(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(a=>{a.forEach(c=>{c.reject(new X(H.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ja(n,r.Ls)}}function b4(t,e){const n=ae(t),r=n.Au.get(e);if(r&&r.hu)return fe().add(r.key);{let s=fe();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const a=n.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}function Gb(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=b4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=y4.bind(null,e),e.Pu.H_=i4.bind(null,e.eventManager),e.Pu.yu=o4.bind(null,e.eventManager),e}function E4(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=v4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=w4.bind(null,e),e}class lu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$u(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return CM(this.persistence,new TM,e.initialUser,this.serializer)}Cu(e){return new Ib(xm.mi,this.serializer)}Du(e){return new MM}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}lu.provider={build:()=>new lu};class T4 extends lu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ve(this.persistence.referenceDelegate instanceof ou,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new cM(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new Ib(r=>ou.mi(r,n),this.serializer)}}class Hf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Av(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_4.bind(null,this.syncEngine),await n4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new s4}()}createDatastore(e){const n=$u(e.databaseInfo.databaseId),r=function(i){return new FM(i)}(e.databaseInfo);return function(i,o,a,c){return new BM(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new WM(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Av(this.syncEngine,n,0),function(){return bv.v()?new bv:new LM}())}createSyncEngine(e,n){return function(s,i,o,a,c,u,h){const p=new u4(s,i,o,a,c,u);return h&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ae(s);J(Rs,"RemoteStore shutting down."),i.Ea.add(5),await Xa(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Hf.provider={build:()=>new Hf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Xn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="FirestoreClient";class S4{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=wt.UNAUTHENTICATED,this.clientId=lm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{J(Kr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(J(Kr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Am(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uh(t,e){t.asyncQueue.verifyOperationInProgress(),J(Kr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Cb(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Nv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await I4(t);J(Kr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Tv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Tv(e.remoteStore,s)),t._onlineComponents=e}async function I4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J(Kr,"Using user provided OfflineComponentProvider");try{await uh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Mi("Error using user provided cache. Falling back to memory cache: "+n),await uh(t,new lu)}}else J(Kr,"Using default OfflineComponentProvider"),await uh(t,new T4(void 0));return t._offlineComponents}async function Qb(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J(Kr,"Using user provided OnlineComponentProvider"),await Nv(t,t._uninitializedComponentsProvider._online)):(J(Kr,"Using default OnlineComponentProvider"),await Nv(t,new Hf))),t._onlineComponents}function C4(t){return Qb(t).then(e=>e.syncEngine)}async function Wf(t){const e=await Qb(t),n=e.eventManager;return n.onListen=d4.bind(null,e.syncEngine),n.onUnlisten=p4.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=h4.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=m4.bind(null,e.syncEngine),n}function A4(t,e,n={}){const r=new Vr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new Kb({next:m=>{h.Nu(),o.enqueueAndForget(()=>Vb(i,p));const _=m.docs.has(a);!_&&m.fromCache?u.reject(new X(H.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?u.reject(new X(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Fb(Du(a.path),h,{includeMetadataChanges:!0,qa:!0});return Ob(i,p)}(await Wf(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb="firestore.googleapis.com",Rv=!0;class jv{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new X(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Xb,this.ssl=Rv}else this.host=e.host,this.ssl=e.ssl??Rv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Sb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<aM)throw new X(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yb(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new X(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new X(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new X(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new LR;switch(r.type){case"firstParty":return new FR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Pv.get(n);r&&(J("ComponentProvider","Removing Datastore"),Pv.delete(n),r.terminate())}(this),Promise.resolve()}}function k4(t,e,n,r={}){var u;t=fn(t,Wu);const s=Bi(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(B1(`https://${a}`),H1("Firestore",!0)),i.host!==Xb&&i.host!==a&&Mi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:a,ssl:s,emulatorOptions:r};if(!As(c,o)&&(t._setSettings(c),r.mockUserToken)){let h,p;if(typeof r.mockUserToken=="string")h=r.mockUserToken,p=wt.MOCK_USER;else{h=qA(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new X(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new wt(m)}t._authCredentials=new DR(new D_(h,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Fs(this.firestore,e,this._query)}}class Oe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Oe(this.firestore,e,this._key)}toJSON(){return{type:Oe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ka(n,Oe._jsonSchema))return new Oe(e,r||null,new ee(Te.fromString(n.referencePath)))}}Oe._jsonSchemaVersion="firestore/documentReference/1.0",Oe._jsonSchema={type:qe("string",Oe._jsonSchemaVersion),referencePath:qe("string")};class Fr extends Fs{constructor(e,n,r){super(e,n,Du(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Oe(this.firestore,null,new ee(e))}withConverter(e){return new Fr(this.firestore,e,this._path)}}function N4(t,e,...n){if(t=Ge(t),O_("collection","path",e),t instanceof Wu){const r=Te.fromString(e,...n);return qy(r),new Fr(t,null,r)}{if(!(t instanceof Oe||t instanceof Fr))throw new X(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return qy(r),new Fr(t.firestore,null,r)}}function qu(t,e,...n){if(t=Ge(t),arguments.length===1&&(e=lm.newId()),O_("doc","path",e),t instanceof Wu){const r=Te.fromString(e,...n);return Wy(r),new Oe(t,null,new ee(r))}{if(!(t instanceof Oe||t instanceof Fr))throw new X(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Wy(r),new Oe(t.firestore,t instanceof Fr?t.converter:null,new ee(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="AsyncQueue";class Lv{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new kb(this,"async_queue_retry"),this._c=()=>{const r=ch();r&&J(Mv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=ch();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=ch();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Vr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Qi(e))throw e;J(Mv,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Xn("INTERNAL UNHANDLED ERROR: ",Dv(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Cm.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&se(47125,{Pc:Dv(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Dv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class js extends Wu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Lv,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Lv(e),this._firestoreClient=void 0,await e}}}function P4(t,e){const n=typeof t=="object"?t:Xp(),r=typeof t=="string"?t:e||tu,s=Yp(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=HA("firestore");i&&k4(s,...i)}return s}function Rm(t){if(t._terminated)throw new X(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||R4(t),t._firestoreClient}function R4(t){var r,s,i;const e=t._freezeSettings(),n=function(a,c,u,h){return new nj(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Yb(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new S4(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zt(ft.fromBase64String(e))}catch(n){throw new X(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zt(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Zt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ka(e,Zt._jsonSchema))return Zt.fromBase64String(e.bytes)}}Zt._jsonSchemaVersion="firestore/bytes/1.0",Zt._jsonSchema={type:qe("string",Zt._jsonSchemaVersion),bytes:qe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:jn._jsonSchemaVersion}}static fromJSON(e){if(Ka(e,jn._jsonSchema))return new jn(e.latitude,e.longitude)}}jn._jsonSchemaVersion="firestore/geoPoint/1.0",jn._jsonSchema={type:qe("string",jn._jsonSchemaVersion),latitude:qe("number"),longitude:qe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Mn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ka(e,Mn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Mn(e.vectorValues);throw new X(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Mn._jsonSchemaVersion="firestore/vectorValue/1.0",Mn._jsonSchema={type:qe("string",Mn._jsonSchemaVersion),vectorValues:qe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j4=/^__.*__$/;class M4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new es(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qa(e,this.data,n,this.fieldTransforms)}}class Jb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new es(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Zb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se(40011,{Ac:t})}}class jm{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new jm({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return cu(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Zb(this.Ac)&&j4.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class L4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||$u(e)}Cc(e,n,r,s=!1){return new jm({Ac:e,methodName:n,Dc:r,path:ut.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mm(t){const e=t._freezeSettings(),n=$u(t._databaseId);return new L4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function D4(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);Dm("Data must be an object, but it was:",o,r);const a=eE(r,o);let c,u;if(i.merge)c=new Bt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const p of i.mergeFields){const m=qf(e,p,n);if(!o.contains(m))throw new X(H.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);nE(h,m)||h.push(m)}c=new Bt(h),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new M4(new jt(a),c,u)}class Qu extends Ku{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qu}}class Lm extends Ku{_toFieldTransform(e){return new Cj(e.path,new Ma)}isEqual(e){return e instanceof Lm}}function O4(t,e,n,r){const s=t.Cc(1,e,n);Dm("Data must be an object, but it was:",s,r);const i=[],o=jt.empty();Zr(r,(c,u)=>{const h=Om(e,c,n);u=Ge(u);const p=s.yc(h);if(u instanceof Qu)i.push(h);else{const m=Za(u,p);m!=null&&(i.push(h),o.set(h,m))}});const a=new Bt(i);return new Jb(o,a,s.fieldTransforms)}function V4(t,e,n,r,s,i){const o=t.Cc(1,e,n),a=[qf(e,r,n)],c=[s];if(i.length%2!=0)throw new X(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)a.push(qf(e,i[m])),c.push(i[m+1]);const u=[],h=jt.empty();for(let m=a.length-1;m>=0;--m)if(!nE(u,a[m])){const _=a[m];let E=c[m];E=Ge(E);const j=o.yc(_);if(E instanceof Qu)u.push(_);else{const k=Za(E,j);k!=null&&(u.push(_),h.set(_,k))}}const p=new Bt(u);return new Jb(h,p,o.fieldTransforms)}function F4(t,e,n,r=!1){return Za(n,t.Cc(r?4:3,e))}function Za(t,e){if(tE(t=Ge(t)))return Dm("Unsupported field value:",e,t),eE(t,e);if(t instanceof Ku)return function(r,s){if(!Zb(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Za(a,s.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Tj(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ae.fromDate(r);return{timestampValue:iu(s.serializer,i)}}if(r instanceof Ae){const i=new Ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:iu(s.serializer,i)}}if(r instanceof jn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zt)return{bytesValue:vb(s.serializer,r._byteString)};if(r instanceof Oe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:vm(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Mn)return function(o,a){return{mapValue:{fields:{[q_]:{stringValue:K_},[nu]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Sc("VectorValues must only contain numeric values.");return pm(a.serializer,u)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Ru(r)}`)}(t,e)}function eE(t,e){const n={};return z_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zr(t,(r,s)=>{const i=Za(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function tE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ae||t instanceof jn||t instanceof Zt||t instanceof Oe||t instanceof Ku||t instanceof Mn)}function Dm(t,e,n){if(!tE(n)||!V_(n)){const r=Ru(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function qf(t,e,n){if((e=Ge(e))instanceof Gu)return e._internalPath;if(typeof e=="string")return Om(t,e);throw cu("Field path arguments must be of type string or ",t,!1,void 0,n)}const z4=new RegExp("[~\\*/\\[\\]]");function Om(t,e,n){if(e.search(z4)>=0)throw cu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gu(...e.split("."))._internalPath}catch{throw cu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function cu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new X(H.INVALID_ARGUMENT,a+t+c)}function nE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new U4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Vm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class U4 extends rE{data(){return super.data()}}function Vm(t,e){return typeof e=="string"?Om(t,e):e instanceof Gu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $4(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fm{}class sE extends Fm{}function B4(t,e,...n){let r=[];e instanceof Fm&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Um).length,a=i.filter(c=>c instanceof zm).length;if(o>1||o>0&&a>0)throw new X(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class zm extends sE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new zm(e,n,r)}_apply(e){const n=this._parse(e);return iE(e._query,n),new Fs(e.firestore,e.converter,Mf(e._query,n))}_parse(e){const n=Mm(e.firestore);return function(i,o,a,c,u,h,p){let m;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new X(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Fv(p,h);const E=[];for(const j of p)E.push(Vv(c,i,j));m={arrayValue:{values:E}}}else m=Vv(c,i,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Fv(p,h),m=F4(a,o,p,h==="in"||h==="not-in");return We.create(u,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Um extends Fm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Um(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:vn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)iE(o,c),o=Mf(o,c)}(e._query,n),new Fs(e.firestore,e.converter,Mf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class $m extends sE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new $m(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new X(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new X(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ja(i,o)}(e._query,this._field,this._direction);return new Fs(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Yi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function H4(t,e="asc"){const n=e,r=Vm("orderBy",t);return $m._create(r,n)}function Vv(t,e,n){if(typeof(n=Ge(n))=="string"){if(n==="")throw new X(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nb(e)&&n.indexOf("/")!==-1)throw new X(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!ee.isDocumentKey(r))throw new X(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ev(t,new ee(r))}if(n instanceof Oe)return ev(t,n._key);throw new X(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ru(n)}.`)}function Fv(t,e){if(!Array.isArray(t)||t.length===0)throw new X(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function iE(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new X(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class W4{convertValue(e,n="none"){switch(qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw se(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Zr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[nu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Ve(o.doubleValue));return new Mn(n)}convertGeoPoint(e){return new jn(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Lu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Na(e));default:return null}}convertTimestamp(e){const n=Hr(e);return new Ae(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);ve(Tb(r),9688,{name:e});const s=new Pa(r.get(1),r.get(3)),i=new ee(r.popFirst(5));return s.isEqual(n)||Xn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q4(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Fo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _s extends rE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Vm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new X(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=_s._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}_s._jsonSchemaVersion="firestore/documentSnapshot/1.0",_s._jsonSchema={type:qe("string",_s._jsonSchemaVersion),bundleSource:qe("string","DocumentSnapshot"),bundleName:qe("string"),bundle:qe("string")};class fc extends _s{data(e={}){return super.data(e)}}class Ei{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Fo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new fc(this._firestore,this._userDataWriter,r.key,r,new Fo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new fc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Fo(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new fc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Fo(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:G4(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new X(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ei._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=lm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function G4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K4(t){t=fn(t,Oe);const e=fn(t.firestore,js);return A4(Rm(e),t._key).then(n=>aE(e,t,n))}Ei._jsonSchemaVersion="firestore/querySnapshot/1.0",Ei._jsonSchema={type:qe("string",Ei._jsonSchemaVersion),bundleSource:qe("string","QuerySnapshot"),bundleName:qe("string"),bundle:qe("string")};class oE extends W4{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Oe(this.firestore,null,n)}}function Q4(t,e,n){t=fn(t,Oe);const r=fn(t.firestore,js),s=q4(t.converter,e,n);return Bm(r,[D4(Mm(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,pn.none())])}function Y4(t,e,n,...r){t=fn(t,Oe);const s=fn(t.firestore,js),i=Mm(s);let o;return o=typeof(e=Ge(e))=="string"||e instanceof Gu?V4(i,"updateDoc",t._key,e,n,r):O4(i,"updateDoc",t._key,e),Bm(s,[o.toMutation(t._key,pn.exists(!0))])}function X4(t){return Bm(fn(t.firestore,js),[new mm(t._key,pn.none())])}function J4(t,...e){var c,u,h;t=Ge(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Ov(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Ov(e[r])){const p=e[r];e[r]=(c=p.next)==null?void 0:c.bind(p),e[r+1]=(u=p.error)==null?void 0:u.bind(p),e[r+2]=(h=p.complete)==null?void 0:h.bind(p)}let i,o,a;if(t instanceof Oe)o=fn(t.firestore,js),a=Du(t._key.path),i={next:p=>{e[r]&&e[r](aE(o,t,p))},error:e[r+1],complete:e[r+2]};else{const p=fn(t,Fs);o=fn(p.firestore,js),a=p._query;const m=new oE(o);i={next:_=>{e[r]&&e[r](new Ei(o,m,p,_))},error:e[r+1],complete:e[r+2]},$4(t._query)}return function(m,_,E,j){const k=new Kb(j),b=new Fb(_,k,E);return m.asyncQueue.enqueueAndForget(async()=>Ob(await Wf(m),b)),()=>{k.Nu(),m.asyncQueue.enqueueAndForget(async()=>Vb(await Wf(m),b))}}(Rm(o),a,s,i)}function Bm(t,e){return function(r,s){const i=new Vr;return r.asyncQueue.enqueueAndForget(async()=>g4(await C4(r),s,i)),i.promise}(Rm(t),e)}function aE(t,e,n){const r=n.docs.get(e._key),s=new oE(t);return new _s(t,s,e._key,r,new Fo(n.hasPendingWrites,n.fromCache),e.converter)}function lE(){return new Lm("serverTimestamp")}(function(e,n=!0){(function(s){Gi=s})(Hi),Ri(new ks("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new js(new OR(r.getProvider("auth-internal")),new zR(o,r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new X(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pa(u.options.projectId,h)}(o,s),o);return i={useFetchStreams:n,...i},a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Lr(Uy,$y,e),Lr(Uy,$y,"esm2020")})();const Z4={apiKey:"AIzaSyAWv-Lv7ZYWCuHSN_xYQV71y4k6TF7Ol_0",authDomain:"lumorabase.firebaseapp.com",projectId:"lumorabase",storageBucket:"lumorabase.appspot.com",messagingSenderId:"487602333259",appId:"1:487602333259:web:0069e6532efd3e7bd79ae",measurementId:"G-0TXG6KPPN5"},cE=cN().length>0?Xp():G1(Z4),el=P4(cE),wr=PR(cE),dh=String({}.VITE_ADMIN_EMAIL||"").trim().toLowerCase();function eL(t){switch((t==null?void 0:t.code)||""){case"auth/invalid-email":return"عنوان البريد الإلكتروني غير صحيح.";case"auth/missing-password":return"اكتب كلمة المرور.";case"auth/invalid-credential":case"auth/user-not-found":case"auth/wrong-password":return"البريد الإلكتروني أو كلمة المرور غير صحيحة.";case"auth/user-disabled":return"تم تعطيل هذا الحساب. راجع إعدادات Firebase.";case"auth/too-many-requests":return"تمت محاولات كثيرة. انتظر قليلًا ثم جرّب مرة ثانية.";case"auth/network-request-failed":return"تعذر الاتصال بالإنترنت. افحص الاتصال وحاول مرة ثانية.";case"auth/operation-not-allowed":return"تسجيل الدخول بالبريد غير مفعّل في Firebase.";default:return"تعذر تسجيل الدخول. حاول مرة ثانية."}}function tL({onAuthorized:t,onExit:e}){const[n,r]=D.useState(dh||""),[s,i]=D.useState(""),[o,a]=D.useState(!0),[c,u]=D.useState(!1),[h,p]=D.useState(!1),[m,_]=D.useState(""),E=!dh,j=async k=>{var y;if(k.preventDefault(),h)return;const b=n.trim().toLowerCase();if(E){_("لازم تضيف بريد الأدمن داخل ملف .env.local أولًا.");return}if(!b){_("اكتب البريد الإلكتروني.");return}if(!s){_("اكتب كلمة المرور.");return}p(!0),_("");try{await vP(wr,o?__:sm);const v=await yP(wr,b,s);if(String(((y=v.user)==null?void 0:y.email)||"").trim().toLowerCase()!==dh){await Lo(wr),_("هذا الحساب غير مخوّل للدخول إلى لوحة الإدارة.");return}i(""),t==null||t(v.user)}catch(v){console.error("Admin sign-in failed:",v),_(eL(v))}finally{p(!1)}};return d.jsxs("main",{className:`\r
        relative flex min-h-screen items-center justify-center\r
        overflow-hidden bg-[#F6F8FC]\r
        px-4 py-8\r
      `,dir:"rtl",children:[d.jsx("div",{className:`\r
          pointer-events-none absolute start-[-130px] top-[-140px]\r
          h-[330px] w-[330px]\r
          rounded-full bg-blue-100/70 blur-3xl\r
        `,"aria-hidden":"true"}),d.jsx("div",{className:`\r
          pointer-events-none absolute bottom-[-160px] end-[-130px]\r
          h-[350px] w-[350px]\r
          rounded-full bg-slate-200/70 blur-3xl\r
        `,"aria-hidden":"true"}),d.jsxs("div",{className:"relative w-full max-w-md",children:[d.jsxs("section",{className:`\r
            overflow-hidden rounded-[30px]\r
            border border-slate-200 bg-white\r
            shadow-[0_24px_70px_rgba(15,23,42,0.12)]\r
          `,"aria-labelledby":"admin-login-title",children:[d.jsxs("header",{className:`\r
              border-b border-slate-100\r
              bg-slate-50/80 px-5 py-6\r
              text-center sm:px-7\r
            `,children:[d.jsx("div",{className:`\r
                mx-auto flex h-14 w-14\r
                items-center justify-center\r
                rounded-2xl bg-blue-600\r
                text-white\r
                shadow-[0_10px_28px_rgba(37,99,235,0.28)]\r
              `,"aria-hidden":"true",children:d.jsx(Bp,{className:"h-7 w-7"})}),d.jsx("h1",{id:"admin-login-title",className:`\r
                mt-4 text-2xl font-black\r
                tracking-tight text-slate-950\r
              `,children:"لوحة إدارة Lumora"}),d.jsx("p",{className:`\r
                mx-auto mt-2 max-w-sm\r
                text-sm font-medium leading-6\r
                text-slate-500\r
              `,children:"سجّل الدخول بحساب الإدارة للوصول إلى البيانات وإدارة العمل."})]}),d.jsxs("form",{onSubmit:j,className:"px-5 py-6 sm:px-7",noValidate:!0,children:[d.jsxs("div",{children:[d.jsx("label",{htmlFor:"admin-email",className:`\r
                  block text-sm font-extrabold\r
                  text-slate-800\r
                `,children:"البريد الإلكتروني"}),d.jsxs("div",{className:"relative mt-2",children:[d.jsx(WI,{className:`\r
                    pointer-events-none absolute\r
                    start-4 top-1/2 h-5 w-5\r
                    -translate-y-1/2 text-slate-400\r
                  `,"aria-hidden":"true"}),d.jsx("input",{id:"admin-email",type:"email",value:n,onChange:k=>{r(k.target.value),_("")},autoComplete:"username",inputMode:"email",placeholder:"admin@example.com",disabled:h,className:`\r
                    h-13 w-full rounded-2xl\r
                    border border-slate-200\r
                    bg-white py-3\r
                    pe-4 ps-12\r
                    text-sm font-bold text-slate-900\r
                    outline-none transition\r
                    placeholder:font-medium\r
                    placeholder:text-slate-400\r
                    focus:border-blue-500\r
                    focus:ring-4 focus:ring-blue-100\r
                    disabled:cursor-not-allowed\r
                    disabled:bg-slate-50\r
                    disabled:opacity-70\r
                  `})]})]}),d.jsxs("div",{className:"mt-5",children:[d.jsx("label",{htmlFor:"admin-password",className:`\r
                  block text-sm font-extrabold\r
                  text-slate-800\r
                `,children:"كلمة المرور"}),d.jsxs("div",{className:"relative mt-2",children:[d.jsx(BI,{className:`\r
                    pointer-events-none absolute\r
                    start-4 top-1/2 h-5 w-5\r
                    -translate-y-1/2 text-slate-400\r
                  `,"aria-hidden":"true"}),d.jsx("input",{id:"admin-password",type:c?"text":"password",value:s,onChange:k=>{i(k.target.value),_("")},autoComplete:"current-password",placeholder:"أدخل كلمة المرور",disabled:h,className:`\r
                    h-13 w-full rounded-2xl\r
                    border border-slate-200\r
                    bg-white py-3\r
                    pe-12 ps-12\r
                    text-sm font-bold text-slate-900\r
                    outline-none transition\r
                    placeholder:font-medium\r
                    placeholder:text-slate-400\r
                    focus:border-blue-500\r
                    focus:ring-4 focus:ring-blue-100\r
                    disabled:cursor-not-allowed\r
                    disabled:bg-slate-50\r
                    disabled:opacity-70\r
                  `}),d.jsx("button",{type:"button",onClick:()=>u(k=>!k),disabled:h,className:`\r
                    absolute end-2 top-1/2\r
                    flex h-10 w-10\r
                    -translate-y-1/2\r
                    items-center justify-center\r
                    rounded-xl text-slate-500\r
                    transition\r
                    hover:bg-slate-100\r
                    hover:text-slate-800\r
                    focus-visible:outline-none\r
                    focus-visible:ring-2\r
                    focus-visible:ring-blue-300\r
                    disabled:cursor-not-allowed\r
                    disabled:opacity-50\r
                  `,"aria-label":c?"إخفاء كلمة المرور":"إظهار كلمة المرور",children:c?d.jsx(OI,{className:"h-5 w-5","aria-hidden":"true"}):d.jsx(FI,{className:"h-5 w-5","aria-hidden":"true"})})]})]}),d.jsxs("label",{className:`\r
                mt-4 flex cursor-pointer\r
                items-start gap-3\r
                rounded-2xl border border-slate-200\r
                bg-slate-50/70 p-3.5\r
              `,children:[d.jsx("input",{type:"checkbox",checked:o,onChange:k=>a(k.target.checked),disabled:h,className:`\r
                  mt-0.5 h-4 w-4 shrink-0\r
                  rounded border-slate-300\r
                  text-blue-600\r
                  focus:ring-blue-500\r
                `}),d.jsxs("span",{children:[d.jsx("span",{className:`\r
                    block text-sm font-extrabold\r
                    text-slate-800\r
                  `,children:"تذكّر هذا الجهاز"}),d.jsx("span",{className:`\r
                    mt-0.5 block text-xs\r
                    font-medium leading-5\r
                    text-slate-500\r
                  `,children:"ألغِ الخيار إذا كان الجهاز مشتركًا مع أشخاص آخرين."})]})]}),m?d.jsx("div",{className:`\r
                  mt-4 rounded-2xl\r
                  border border-rose-200\r
                  bg-rose-50 px-4 py-3\r
                  text-sm font-bold leading-6\r
                  text-rose-700\r
                `,role:"alert",children:m}):null,d.jsx("button",{type:"submit",disabled:h||E,className:`\r
                mt-5 inline-flex min-h-12\r
                w-full items-center justify-center\r
                gap-2 rounded-2xl\r
                bg-blue-600 px-5\r
                text-sm font-extrabold text-white\r
                shadow-[0_10px_28px_rgba(37,99,235,0.25)]\r
                transition\r
                hover:bg-blue-700\r
                active:scale-[0.98]\r
                focus-visible:outline-none\r
                focus-visible:ring-4\r
                focus-visible:ring-blue-200\r
                disabled:cursor-not-allowed\r
                disabled:bg-slate-300\r
                disabled:shadow-none\r
              `,children:h?d.jsxs(d.Fragment,{children:[d.jsx(Uc,{className:"h-5 w-5 animate-spin","aria-hidden":"true"}),d.jsx("span",{children:"جارٍ تسجيل الدخول..."})]}):d.jsxs(d.Fragment,{children:[d.jsx("span",{children:"دخول إلى لوحة الإدارة"}),d.jsx(f1,{className:"h-4 w-4 rotate-180","aria-hidden":"true"})]})}),e?d.jsx("button",{type:"button",onClick:e,disabled:h,className:`\r
                  mt-2 min-h-11 w-full\r
                  rounded-2xl border\r
                  border-slate-200 bg-white\r
                  px-4 text-sm font-extrabold\r
                  text-slate-600 transition\r
                  hover:bg-slate-50\r
                  hover:text-slate-900\r
                  focus-visible:outline-none\r
                  focus-visible:ring-4\r
                  focus-visible:ring-slate-200\r
                  disabled:cursor-not-allowed\r
                  disabled:opacity-50\r
                `,children:"العودة إلى الموقع"}):null]})]}),d.jsx("p",{className:`\r
            mt-4 text-center text-xs\r
            font-medium leading-5 text-slate-400\r
          `,children:"الوصول مخصص لحساب الإدارة المعتمد فقط."})]})]})}function _e(t){const e=Number(t);return Number.isFinite(e)?e:0}function Ze(t){return new Intl.NumberFormat("he-IL",{maximumFractionDigits:2}).format(_e(t))}function zr(){return Math.random().toString(16).slice(2)+Date.now().toString(16)}function nL(t){if(!t)return null;if(typeof t=="number")return t;if(typeof t=="string"){const e=Date.parse(t);return Number.isFinite(e)?e:null}return typeof(t==null?void 0:t.toMillis)=="function"?t.toMillis():typeof(t==null?void 0:t.seconds)=="number"?t.seconds*1e3:null}function zv({tone:t="slate",children:e,className:n="",...r}){const s="h-8 px-3 rounded-2xl border text-[11px] font-extrabold transition whitespace-nowrap",i=t==="primary"?"bg-blue-600 border-blue-600 text-white hover:bg-blue-700":t==="dark"?"bg-slate-900 border-slate-900 text-white hover:bg-slate-800":t==="ghost"?"bg-white border-slate-200 text-slate-700 hover:bg-slate-50":t==="danger"?"bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100":"bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100";return d.jsx("button",{...r,type:"button",className:`${s} ${i} ${n}`,children:e})}function hh({active:t,children:e,...n}){return d.jsx("button",{...n,type:"button",className:`h-8 px-3 rounded-2xl text-[11px] font-extrabold border transition ${t?"bg-slate-900 text-white border-slate-900":"bg-white text-slate-700 border-slate-200 hover:bg-slate-50"}`,children:e})}function zl({label:t,value:e}){return d.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white px-3 py-2",children:[d.jsx("div",{className:"text-[10px] text-slate-500 leading-4",children:t}),d.jsx("div",{className:"text-[12px] font-extrabold text-slate-900 leading-4",children:e})]})}function rL({saving:t,isDirty:e,saveError:n}){const r=n?"bg-rose-500":t?"bg-amber-500":e?"bg-sky-500":"bg-emerald-500",s=n?"فشل حفظ":t?"حفظ...":e?"في تغييرات":"محفوظ";return d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:`h-2.5 w-2.5 rounded-full ${r}`}),d.jsx("span",{className:"text-[11px] text-slate-600",children:s})]})}function sL({tab:t,setTab:e,dateKey:n,setDateKey:r,onExit:s,totals:i,onReload:o,saving:a,isDirty:c,lastSavedAt:u,isClosed:h=!1,saveError:p=!1}){const[m,_]=D.useState(!1),E=String(t||"daily").trim().toLowerCase(),j=D.useMemo(()=>{if(a)return"جارٍ الحفظ تلقائيًا...";const y=nL(u);return y?`آخر حفظ: ${new Date(y).toLocaleTimeString("he-IL",{hour:"2-digit",minute:"2-digit"})}`:"لم يتم الحفظ بعد"},[a,u]),k=i||{total:0,shopTotal:0,youTotal:0,carpetsTotal:0},b=y=>e(String(y).trim().toLowerCase());return d.jsxs("header",{className:"sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200",dir:"rtl",children:[d.jsxs("div",{className:"max-w-6xl mx-auto px-3 sm:px-4 py-2",children:[d.jsxs("div",{className:"flex items-center justify-between gap-2 flex-wrap",children:[d.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[d.jsx("div",{className:"h-9 w-9 rounded-2xl bg-blue-600 text-white grid place-items-center text-sm font-extrabold shrink-0",children:"L"}),d.jsxs("div",{className:"min-w-0",children:[d.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[d.jsx("h1",{className:"text-sm font-extrabold text-slate-900",children:"لوحة الإدارة"}),d.jsx(rL,{saving:a,isDirty:c,saveError:p}),h&&d.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded-full border bg-slate-900 text-white border-slate-900",children:"اليوم مغلق"})]}),d.jsx("p",{className:"text-[11px] text-slate-500 truncate",children:j})]})]}),d.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"text-[11px] text-slate-500 hidden sm:inline",children:"التاريخ"}),d.jsx("input",{type:"date",value:n,onChange:y=>r(y.target.value),className:"h-8 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-[11px] text-slate-800 outline-none"})]}),d.jsx(zv,{onClick:o,tone:"ghost",title:"تحديث",children:"⟳"}),s&&d.jsx(zv,{onClick:s,tone:"dark",title:"خروج",children:"خروج"})]})]}),d.jsxs("div",{className:"mt-2 flex items-center justify-between gap-2 flex-wrap",children:[d.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[d.jsx(hh,{active:E==="daily",onClick:()=>b("daily"),children:"🧾 اليوم"}),d.jsx(hh,{active:E==="carpets",onClick:()=>b("carpets"),children:"🧵 سجاد"}),d.jsx(hh,{active:E==="messages",onClick:()=>b("messages"),children:"📩 Inbox"}),d.jsx("button",{type:"button",onClick:()=>_(y=>!y),className:"sm:hidden h-8 px-3 rounded-2xl border border-slate-200 bg-white text-[11px] font-extrabold text-slate-700 hover:bg-slate-50",title:"إظهار/إخفاء الملخص",children:m?"إخفاء الملخص":"إظهار الملخص"})]}),d.jsx("div",{className:"text-[10px] text-slate-400 hidden sm:block",children:"الحفظ تلقائي بالكامل ✅"})]})]}),d.jsx("div",{className:`max-w-6xl mx-auto px-3 sm:px-4 pb-2 ${m?"":"hidden sm:block"}`,children:d.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:[d.jsx(zl,{label:"إجمالي اليوم",value:Ze(k.total)}),d.jsx(zl,{label:"للمحل",value:Ze(k.shopTotal)}),d.jsx(zl,{label:"إلك",value:Ze(k.youTotal)}),d.jsx(zl,{label:"سجاد اليوم",value:Ze(k.carpetsTotal)})]})})]})}function iL({error:t=null}){const e=D.useMemo(()=>t?typeof t=="string"?t:"فشل الحفظ":null,[t]);return e?d.jsx("div",{className:"fixed top-3 right-3 z-50",dir:"rtl",children:d.jsxs("div",{className:"max-w-[92vw] sm:max-w-[420px] rounded-2xl border border-rose-200 bg-rose-50 text-rose-800 shadow-md px-3 py-2",children:[d.jsx("div",{className:"text-[11px] font-extrabold",children:"مشكلة بالحفظ"}),d.jsx("div",{className:"mt-0.5 text-[11px] text-slate-700",children:e})]})}):null}function Uv({title:t,tone:e="slate",className:n="",...r}){const s=e==="danger"?"border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100":"border-slate-200 bg-white text-slate-700 hover:bg-slate-50";return d.jsx("button",{...r,type:"button",title:t,className:`h-9 w-10 rounded-2xl border text-[12px] grid place-items-center transition ${s} ${n}`})}function oL({children:t}){return d.jsx("span",{className:"inline-flex items-center px-2 py-0.5 rounded-full border border-slate-200 bg-slate-50 text-[11px] font-extrabold text-slate-700",children:t})}function fh({label:t,value:e}){return d.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white px-3 py-2",children:[d.jsx("div",{className:"text-[11px] text-slate-500",children:t}),d.jsx("div",{className:"text-xs font-extrabold text-slate-900",children:e})]})}function aL({totals:t,topRecent:e,modalOpen:n,openAdd:r,openRepeatLast:s,applyPreset:i}){return d.jsxs("section",{className:"bg-white rounded-2xl border border-slate-200 p-3 shadow-sm space-y-2",children:[d.jsxs("div",{className:"flex items-center justify-between gap-2 flex-wrap",children:[d.jsxs("div",{className:"min-w-0",children:[d.jsx("h2",{className:"text-sm font-extrabold text-slate-900",children:"بنود اليوم"}),d.jsx("p",{className:"text-[11px] text-slate-500",children:"أسرع طريقة: اختر قالب → أدخل مبلغ → حفظ."})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("button",{onClick:s,className:"h-9 px-4 rounded-2xl border border-slate-200 bg-white text-xs font-extrabold text-slate-800 hover:bg-slate-50 transition active:scale-[0.98]",title:"فتح نموذج آخر بند بسرعة",children:"↺ نفس آخر بند"}),d.jsx("button",{onClick:r,className:"h-9 px-4 rounded-2xl bg-blue-600 text-xs font-extrabold text-white hover:bg-blue-700 transition active:scale-[0.98]",children:"+ إضافة"})]})]}),d.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[d.jsx(fh,{label:"الإجمالي",value:Ze(t.total)}),d.jsx(fh,{label:"للمحل",value:Ze(t.shopTotal)}),d.jsx(fh,{label:"إلك",value:Ze(t.youTotal)})]}),e.length>0&&d.jsxs("div",{className:"pt-1 flex items-center gap-2 flex-wrap",children:[d.jsx(oL,{children:"آخر استخدام"}),e.map(o=>d.jsx("button",{onClick:()=>{n?i(o):(r(),window.setTimeout(()=>i(o),0))},className:"h-8 px-3 rounded-2xl border border-slate-200 bg-slate-50 text-[11px] font-extrabold text-slate-800 hover:bg-slate-100 transition active:scale-[0.98]",children:o.title},`${o.type}__${o.title}`))]})]})}function lL({filter:t,setFilter:e,q:n,setQ:r}){return d.jsx("section",{className:"bg-white rounded-2xl border border-slate-200 p-3 shadow-sm",children:d.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[d.jsxs("select",{value:t,onChange:s=>e(s.target.value),className:"h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm font-bold text-slate-800 outline-none",children:[d.jsx("option",{value:"all",children:"الكل"}),d.jsx("option",{value:"service",children:"خدمات"}),d.jsx("option",{value:"product",children:"منتجات"}),d.jsx("option",{value:"carpet",children:"سجاد"}),d.jsx("option",{value:"other",children:"أخرى"})]}),d.jsxs("div",{className:"relative flex-1",children:[d.jsx("span",{className:"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs",children:"🔍"}),d.jsx("input",{value:n,onChange:s=>r(s.target.value),className:"w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 pl-8 pr-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-200",placeholder:"بحث سريع (عنوان / زبون)…"})]})]})})}const uE=[{value:"service",label:"خدمة"},{value:"product",label:"منتج"},{value:"carpet",label:"سجاد"},{value:"other",label:"أخرى"}],dE=[{type:"service",title:"غسيل سيارة"},{type:"service",title:"غسيل جيب"},{type:"service",title:"تنظيف فرش"},{type:"service",title:"تنظيف فرش سيارة"},{type:"product",title:"بيع منتج"},{type:"carpet",title:"سجاد"}],$v="admin_daily_recent_presets_v1",Bv="admin_daily_last_entry_v1";function cL(t){var e;return((e=uE.find(n=>n.value===t))==null?void 0:e.label)||"خدمة"}function uL({e:t,isOpen:e,onToggle:n,onEdit:r,onDelete:s,setEntries:i}){const o=_e(t.amount)-_e(t.shop);return d.jsxs("div",{className:"bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden",children:[d.jsxs("button",{type:"button",onClick:n,className:"group w-full px-3 py-3 flex items-center justify-between gap-2 text-right hover:bg-slate-50 transition",children:[d.jsxs("div",{className:"min-w-0 flex-1",children:[d.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[d.jsx("span",{className:"text-[11px] px-2 py-0.5 rounded-full border border-slate-200 bg-slate-50 text-slate-700 font-extrabold",children:cL(t.type)}),d.jsx("div",{className:"text-[13px] font-extrabold text-slate-900 truncate",children:t.title||"بدون عنوان"}),t.customerName?d.jsxs("span",{className:"text-[11px] text-slate-500 truncate",children:["— ",t.customerName]}):null]}),d.jsxs("div",{className:"mt-1 text-[11px] text-slate-600 flex gap-3 flex-wrap",children:[d.jsxs("span",{children:["المبلغ: ",d.jsx("b",{className:"text-slate-900",children:Ze(t.amount)})]}),d.jsxs("span",{children:["إلك: ",d.jsx("b",{className:"text-slate-900",children:Ze(o)})]})]})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs("div",{className:"flex items-center gap-2 "+(e?"":"opacity-0 group-hover:opacity-100"),children:[d.jsx(Uv,{title:"تعديل",onClick:a=>{a.preventDefault(),a.stopPropagation(),r()},children:"✏️"}),d.jsx(Uv,{title:"حذف",tone:"danger",onClick:a=>{a.preventDefault(),a.stopPropagation(),s()},children:"🗑️"})]}),d.jsx("span",{className:"text-[11px] text-slate-400 w-6 text-center",children:e?"▲":"▼"})]})]}),e&&d.jsx("div",{className:"px-3 pb-3",children:d.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-3",children:[d.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:[d.jsxs("div",{children:[d.jsx("div",{className:"text-[11px] text-slate-600 mb-1",children:"النوع"}),d.jsxs("select",{value:t.type||"service",onChange:a=>{const c=a.target.value;i(u=>(u||[]).map(h=>h.id!==t.id?h:c==="product"?{...h,type:c,shop:_e(h.amount)}:{...h,type:c}))},className:"w-full h-10 rounded-2xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-200",children:[d.jsx("option",{value:"service",children:"خدمة"}),d.jsx("option",{value:"product",children:"منتج"}),d.jsx("option",{value:"carpet",children:"سجاد"}),d.jsx("option",{value:"other",children:"أخرى"})]})]}),d.jsxs("div",{children:[d.jsx("div",{className:"text-[11px] text-slate-600 mb-1",children:"اسم الزبون (اختياري)"}),d.jsx("input",{value:t.customerName||"",onChange:a=>{const c=a.target.value;i(u=>(u||[]).map(h=>h.id===t.id?{...h,customerName:c}:h))},className:"w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200",placeholder:"مثال: أحمد"})]}),d.jsxs("div",{className:"sm:col-span-2",children:[d.jsx("div",{className:"text-[11px] text-slate-600 mb-1",children:"العنوان"}),d.jsx("input",{value:t.title||"",onChange:a=>{const c=a.target.value;i(u=>(u||[]).map(h=>h.id===t.id?{...h,title:c}:h))},className:"w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200",placeholder:"غسيل سيارة / بيع منتج..."})]}),d.jsxs("div",{children:[d.jsx("div",{className:"text-[11px] text-slate-600 mb-1",children:"المبلغ"}),d.jsx("input",{type:"number",inputMode:"decimal",value:t.amount??"",onChange:a=>{const c=a.target.value;i(u=>(u||[]).map(h=>h.id!==t.id?h:h.type==="product"?{...h,amount:c,shop:c}:{...h,amount:c}))},className:"w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"})]}),t.type!=="product"?d.jsxs("div",{children:[d.jsx("div",{className:"text-[11px] text-slate-600 mb-1",children:"للمحل"}),d.jsx("input",{type:"number",inputMode:"decimal",value:t.shop??"",onChange:a=>{const c=a.target.value;i(u=>(u||[]).map(h=>h.id===t.id?{...h,shop:c}:h))},className:"w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"})]}):d.jsx("div",{className:"sm:col-span-1 flex items-end",children:d.jsxs("div",{className:"w-full rounded-2xl border border-slate-200 bg-white px-3 py-2",children:[d.jsx("div",{className:"text-[11px] text-slate-600 font-extrabold",children:"بيع منتج → للمحل تلقائيًا"}),d.jsx("div",{className:"text-[11px] text-slate-400",children:"(إذا بدك استثناء: عدّل من المودال عند الإضافة)"})]})})]}),d.jsxs("div",{className:"mt-2 text-[11px] text-slate-600",children:["إلك: ",d.jsx("b",{className:"text-slate-900",children:Ze(o)})]})]})})]})}function dL({filtered:t,openId:e,setOpenId:n,openEdit:r,remove:s,setEntries:i}){return t.length===0?d.jsxs("div",{className:"bg-white rounded-2xl border border-slate-200 p-6 text-center shadow-sm",children:[d.jsx("div",{className:"text-sm font-bold text-slate-900",children:"لا يوجد بنود"}),d.jsx("div",{className:"mt-1 text-[12px] text-slate-500",children:"اضغط “+ إضافة” لبدء التسجيل"})]}):d.jsx("section",{className:"space-y-2",children:t.slice().sort((o,a)=>(a.createdAt||0)-(o.createdAt||0)).map(o=>{const a=e===o.id;return d.jsx(uL,{e:o,isOpen:a,onToggle:()=>n(c=>c===o.id?null:o.id),onEdit:()=>r(o),onDelete:()=>s(o.id),setEntries:i},o.id)})})}function hL({entries:t,modalOpen:e,editing:n,presetPulse:r,amountRef:s,closeModal:i,applyPreset:o,setEditing:a,save:c}){return!e||!n?null:d.jsx("div",{className:"fixed inset-0 z-[9999] bg-black/30 flex items-end sm:items-center justify-center p-3",dir:"rtl",onMouseDown:u=>{u.target===u.currentTarget&&i()},children:d.jsxs("div",{className:"w-full max-w-xl bg-white rounded-3xl shadow-xl border border-slate-200 p-4",children:[d.jsxs("div",{className:"flex items-start justify-between gap-2",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"text-sm font-extrabold text-slate-900",children:(t||[]).some(u=>u.id===n.id)?"تعديل بند":"إضافة بند"}),d.jsx("p",{className:"text-[11px] text-slate-500",children:"اختر قالب (يظهر أثر الكبس) → ركّز على المبلغ."})]}),d.jsx("button",{onClick:i,className:"h-9 px-3 rounded-2xl border border-slate-200 bg-white text-[11px] text-slate-700 hover:bg-slate-50 transition active:scale-[0.98]",children:"إغلاق"})]}),d.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:dE.map(u=>{const h=`${u.type}:${u.title}`,p=r===h;return d.jsx("button",{onClick:()=>o(u),className:["h-9 px-4 rounded-2xl border text-[12px] font-extrabold transition","active:scale-[0.98]",p?"border-blue-300 bg-blue-50 text-blue-800 ring-2 ring-blue-200":"border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100"].join(" "),children:u.title},h)})}),d.jsxs("div",{className:"mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-[11px] text-slate-600 mb-1",children:"النوع"}),d.jsx("select",{value:n.type,onChange:u=>{const h=u.target.value;a(p=>{const m={...p,type:h};return h==="product"?(m.splitEnabled=!1,m.shop=m.amount):m.splitEnabled=!0,m})},className:"w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-200",children:uE.map(u=>d.jsx("option",{value:u.value,children:u.label},u.value))})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-[11px] text-slate-600 mb-1",children:"اسم الزبون (اختياري)"}),d.jsx("input",{value:n.customerName,onChange:u=>a(h=>({...h,customerName:u.target.value})),className:"w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-200",placeholder:"مثال: أحمد"})]}),d.jsxs("div",{className:"sm:col-span-2",children:[d.jsx("label",{className:"block text-[11px] text-slate-600 mb-1",children:"العنوان"}),d.jsx("input",{value:n.title,onChange:u=>a(h=>({...h,title:u.target.value})),className:"w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-200",placeholder:"غسيل سيارة / بيع منتج..."})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-[11px] text-slate-600 mb-1",children:"المبلغ"}),d.jsx("input",{ref:s,type:"number",inputMode:"decimal",value:n.amount,onChange:u=>a(h=>{const p=u.target.value,m={...h,amount:p};return m.type==="product"&&!m.splitEnabled&&(m.shop=p),m}),className:"w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-200"})]}),n.type==="product"?d.jsxs("div",{className:"flex flex-col justify-end gap-2",children:[d.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white px-3 py-2",children:[d.jsx("div",{className:"text-[11px] font-extrabold text-slate-700",children:"بيع منتج = للمحل تلقائيًا"}),d.jsx("div",{className:"text-[11px] text-slate-400",children:"حالات نادرة؟ فعّل التقسيم."})]}),d.jsx("button",{type:"button",onClick:()=>a(u=>{const h={...u,splitEnabled:!u.splitEnabled};return h.splitEnabled||(h.shop=h.amount),h}),className:"h-10 rounded-2xl border border-slate-200 bg-white text-xs font-extrabold text-slate-800 hover:bg-slate-50 transition active:scale-[0.98]",children:n.splitEnabled?"إلغاء التقسيم (نادر)":"تقسيم (نادر)"})]}):d.jsxs("div",{children:[d.jsx("label",{className:"block text-[11px] text-slate-600 mb-1",children:"للمحل"}),d.jsx("input",{type:"number",inputMode:"decimal",value:n.shop,onChange:u=>a(h=>({...h,shop:u.target.value})),className:"w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-200"})]}),n.type==="product"&&n.splitEnabled&&d.jsxs("div",{className:"sm:col-span-2",children:[d.jsx("label",{className:"block text-[11px] text-slate-600 mb-1",children:"للمحل (استثناء)"}),d.jsx("input",{type:"number",inputMode:"decimal",value:n.shop,onChange:u=>a(h=>({...h,shop:u.target.value})),className:"w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-200"})]})]}),d.jsxs("div",{className:"mt-3 flex items-center justify-between text-[12px]",children:[d.jsxs("span",{className:"text-slate-600",children:["إلك:"," ",d.jsx("b",{className:"text-slate-900",children:Ze(_e(n.amount)-_e(n.shop))})]}),d.jsx("button",{onClick:c,className:"h-10 px-6 rounded-2xl bg-blue-600 text-xs font-extrabold text-white hover:bg-blue-700 transition active:scale-[0.98]",children:"حفظ"})]})]})})}function Hv(t,e){try{const n=localStorage.getItem(t);return n?JSON.parse(n):e}catch{return e}}function Wv(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch{}}function fL({entries:t,setEntries:e}){const[n,r]=D.useState("all"),[s,i]=D.useState(""),[o,a]=D.useState(null),[c,u]=D.useState(!1),[h,p]=D.useState(null),[m,_]=D.useState(null),E=D.useRef(null),[j,k]=D.useState(()=>Hv($v,[])),b=D.useMemo(()=>(t||[]).filter(w=>{if(n!=="all"&&w.type!==n)return!1;if(s.trim()){const $=s.trim().toLowerCase();if(!`${w.title||""} ${w.customerName||""}`.toLowerCase().includes($))return!1}return!0}),[t,n,s]),y=D.useMemo(()=>{const w=(t||[]).reduce((O,C)=>O+_e(C.amount),0),$=(t||[]).reduce((O,C)=>O+_e(C.shop),0),q=w-$;return{total:w,shopTotal:$,youTotal:q}},[t]),v=()=>{u(!1),p(null)},R=()=>{p({id:zr(),type:"service",title:"",customerName:"",amount:"",shop:"",splitEnabled:!1,createdAt:Date.now()}),u(!0)},V=w=>{const q=((w==null?void 0:w.type)||"")==="product"?_e(w.shop)!==_e(w.amount):!0;p({...w,splitEnabled:q}),u(!0)},L=w=>{window.confirm("حذف هذا البند؟")&&(e($=>($||[]).filter(q=>q.id!==w)),o===w&&a(null))},S=w=>{const $=`${w.type}__${w.title}`,q=[$,...(j||[]).filter(O=>O!==$)].slice(0,8);k(q),Wv($v,q)},x=w=>{Wv(Bv,{type:w.type,title:w.title,customerName:w.customerName||""})},T=()=>{const w=Hv(Bv,null);if(!(w!=null&&w.title)){R();return}p({id:zr(),type:w.type||"service",title:w.title||"",customerName:w.customerName||"",amount:"",shop:"",splitEnabled:!1,createdAt:Date.now()}),u(!0)},I=w=>{const $=`${w.type}:${w.title}`;_($),window.setTimeout(()=>_(null),220),S(w),p(q=>{const O=q||{id:zr(),type:"service",title:"",customerName:"",amount:"",shop:"",splitEnabled:!1,createdAt:Date.now()},C=w.type==="product";return{...O,type:w.type,title:w.title,splitEnabled:!C}}),window.setTimeout(()=>{var q,O;return(O=(q=E.current)==null?void 0:q.focus)==null?void 0:O.call(q)},60)},P=()=>{if(!h)return;const w={...h,type:h.type||"service",title:String(h.title||"").trim(),customerName:String(h.customerName||"").trim(),amount:_e(h.amount),shop:_e(h.shop),createdAt:h.createdAt||Date.now()};w.type==="product"&&!h.splitEnabled&&(w.shop=w.amount),e($=>($||[]).some(O=>O.id===w.id)?($||[]).map(O=>O.id===w.id?w:O):[...$||[],w]),x(w),v()};D.useEffect(()=>{c&&window.setTimeout(()=>{var w,$;return($=(w=E.current)==null?void 0:w.focus)==null?void 0:$.call(w)},80)},[c]);const N=D.useMemo(()=>{const w=(j||[]).slice(0,3),$=new Map(dE.map(q=>[`${q.type}__${q.title}`,q]));return w.map(q=>$.get(q)).filter(Boolean)},[j]);return d.jsxs("div",{className:"space-y-3",dir:"rtl",children:[d.jsx(aL,{totals:y,topRecent:N,modalOpen:c,openAdd:R,openRepeatLast:T,applyPreset:I}),d.jsx(lL,{filter:n,setFilter:r,q:s,setQ:i}),d.jsx(dL,{filtered:b,openId:o,setOpenId:a,openEdit:V,remove:L,setEntries:e}),d.jsx(hL,{entries:t,modalOpen:c,editing:h,presetPulse:m,amountRef:E,closeModal:v,applyPreset:I,setEditing:p,save:P})]})}function ys(t){const e=Number(t);return Number.isFinite(e)?e:0}function vs(t){const e=String(t||"").toLowerCase();return e==="cm"||e==="area"||e==="price"?e:"cm"}function Gf(t){const e=vs(t==null?void 0:t.mode),n=ys(t==null?void 0:t.areaM2),r=ys(t==null?void 0:t.lengthCm),s=ys(t==null?void 0:t.widthCm);return n>0?n:r>0&&s>0?r/100*(s/100):0}function qv(t,e){const n=vs(t==null?void 0:t.mode),r=ys(t==null?void 0:t.ratePerM2)>0?ys(t==null?void 0:t.ratePerM2):ys(e);if(n==="price"){const i=ys(t==null?void 0:t.priceOverride);if(i>0)return i}const s=Gf(t);return s<=0||r<=0?0:s*r}const Gv="admin_carpets_ui_v1";function Io({active:t,children:e,className:n="",...r}){return d.jsx("button",{...r,type:"button",className:`h-8 px-3 rounded-2xl text-[11px] font-extrabold border transition ${t?"bg-slate-900 text-white border-slate-900":"bg-white text-slate-700 border-slate-200 hover:bg-slate-50"} ${n}`,children:e})}function Kv({title:t,children:e,tone:n="slate",className:r="",...s}){const i=n==="danger"?"border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100":n==="primary"?"border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100":"border-slate-200 bg-white text-slate-700 hover:bg-slate-50";return d.jsx("button",{...s,type:"button",title:t,className:`h-8 w-9 rounded-2xl border text-[12px] grid place-items-center ${i} ${r}`,children:e})}function ph({label:t,value:e}){return d.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white px-3 py-2",children:[d.jsx("div",{className:"text-[11px] text-slate-500",children:t}),d.jsx("div",{className:"text-xs font-extrabold text-slate-900",children:e})]})}function cs(t){return`w-full h-9 rounded-2xl border px-3 text-xs outline-none ${t?"bg-slate-100 border-slate-200 text-slate-500 cursor-not-allowed":"bg-white border-slate-200 text-slate-900"}`}function bn(){return Date.now()}function pL(t,e){try{return JSON.parse(t)??e}catch{return e}}function Ul(t){return{id:(t==null?void 0:t.id)||zr(),name:String((t==null?void 0:t.name)||"").trim(),phone:String((t==null?void 0:t.phone)||"").trim(),status:(t==null?void 0:t.status)||"open",locked:!!(t!=null&&t.locked),notes:String((t==null?void 0:t.notes)||""),doneAt:(t==null?void 0:t.doneAt)||null,updatedAt:(t==null?void 0:t.updatedAt)||null,rugs:Array.isArray(t==null?void 0:t.rugs)?t.rugs:[]}}function mh(t){return{id:(t==null?void 0:t.id)||zr(),mode:vs((t==null?void 0:t.mode)||"cm"),lengthCm:(t==null?void 0:t.lengthCm)??"",widthCm:(t==null?void 0:t.widthCm)??"",areaM2:(t==null?void 0:t.areaM2)??"",ratePerM2:(t==null?void 0:t.ratePerM2)??null,priceOverride:(t==null?void 0:t.priceOverride)??"",createdAt:(t==null?void 0:t.createdAt)||null,updatedAt:(t==null?void 0:t.updatedAt)||null}}function mL({defaultRatePerM2:t,setDefaultRatePerM2:e,customers:n,setCustomers:r,onAddEntryFromCarpets:s}){const[i,o]=D.useState(""),[a,c]=D.useState(null),[u,h]=D.useState(null),[p,m]=D.useState(null),_=D.useRef(null),E=D.useRef(new Map),j=D.useRef(new Map);D.useEffect(()=>{var M,F;const C=pL(localStorage.getItem(Gv),{});(C==null?void 0:C.q)!=null&&o(C.q),C!=null&&C.openCustomerId&&c(C.openCustomerId),(M=C==null?void 0:C.active)!=null&&M.customerId&&((F=C==null?void 0:C.active)!=null&&F.rugId)&&h(C.active)},[]),D.useEffect(()=>{localStorage.setItem(Gv,JSON.stringify({q:i,openCustomerId:a,active:u,savedAt:Date.now()}))},[i,a,u]);const k=(C,M="ok")=>{m({msg:C,tone:M}),_.current&&clearTimeout(_.current),_.current=setTimeout(()=>m(null),1600)},b=D.useMemo(()=>{const C=(n||[]).map(Ul);if(!i.trim())return C;const M=i.trim().toLowerCase();return C.filter(F=>`${F.name} ${F.phone} ${F.notes}`.toLowerCase().includes(M))},[n,i]),y=D.useMemo(()=>{const C=_e(t)||15,M=(n||[]).map(G=>{const ue=Ul(G),xe=(ue.rugs||[]).map(mh),Ke=xe.reduce((Qe,Kt)=>Qe+_e(qv(Kt,C)),0),ze=xe.reduce((Qe,Kt)=>Qe+_e(Gf(Kt)),0);return{id:ue.id,total:Ke,totalArea:ze,rugsCount:xe.length}}),F=M.reduce((G,ue)=>G+_e(ue.total),0),B=M.reduce((G,ue)=>G+_e(ue.totalArea),0),Y=M.reduce((G,ue)=>G+_e(ue.rugsCount),0);return{rate:C,perCustomer:M,grandTotal:F,grandArea:B,grandCount:Y}},[n,t]),v=D.useMemo(()=>{const C=new Map;for(const M of y.perCustomer)C.set(M.id,M);return C},[y]),R=(C,M)=>{r(F=>(F||[]).map(B=>B.id===C?{...B,...M,updatedAt:bn()}:B))},V=(C,M,F)=>{r(B=>(B||[]).map(Y=>Y.id!==C?Y:{...Y,updatedAt:bn(),rugs:(Y.rugs||[]).map(G=>G.id===M?{...G,...F,updatedAt:bn()}:G)}))},L=()=>{const C=zr(),M=Ul({id:C,status:"open",rugs:[],updatedAt:bn()});r(F=>[...F||[],M]),c(C),h(null),k("تم إنشاء زبون جديد")},S=C=>{window.confirm("حذف هذا الزبون وكل السجاد التابع له؟")&&(r(M=>(M||[]).filter(F=>F.id!==C)),a===C&&c(null),(u==null?void 0:u.customerId)===C&&h(null),k("تم الحذف","warn"))},x=(C,M="cm")=>{const F=zr(),B=mh({id:F,mode:vs(M),createdAt:bn(),updatedAt:bn()});r(Y=>(Y||[]).map(G=>G.id!==C?G:{...G,rugs:[...G.rugs||[],B],updatedAt:bn()})),c(C),h({customerId:C,rugId:F}),setTimeout(()=>{var ue;const Y=`${C}:${F}`,G=E.current.get(Y);(ue=G==null?void 0:G.scrollIntoView)==null||ue.call(G,{behavior:"smooth",block:"center"}),N(C,F,vs(M))},50)},T=(C,M)=>{r(F=>(F||[]).map(B=>B.id!==C?B:{...B,updatedAt:bn(),rugs:(B.rugs||[]).filter(Y=>Y.id!==M)})),(u==null?void 0:u.customerId)===C&&(u==null?void 0:u.rugId)===M&&h(null),k("تم حذف السجادة","warn")},I=(C,M,F)=>`${C}:${M}:${F}`,P=(C,M,F)=>{const B=j.current.get(I(C,M,F));B!=null&&B.focus&&B.focus(),B!=null&&B.select&&B.select()},N=(C,M,F)=>{const B=vs(F);return B==="cm"?P(C,M,"length"):B==="area"?P(C,M,"area"):P(C,M,"price")},w=(C,M)=>{h(null),x(C,"cm"),k("تم تثبيت السجادة + فتح سجادة جديدة")},$=(C,M)=>{R(C,M?{status:"done",doneAt:bn()}:{status:"open"}),k(M?"تم إنهاء الزبون":"تم فتح الزبون")},q=C=>{R(C,{status:"done",doneAt:bn()}),h(null);const M=(n||[]).map(Ul),F=M.findIndex(Y=>Y.id===C),B=M.slice(F+1).find(Y=>Y.status!=="done")||M.find(Y=>Y.status!=="done");c(B?B.id:null),k(B?"تم إنهاء الزبون + فتح التالي":"تم إنهاء الزبون")},O=C=>{const M=v.get(C.id),F=_e(M==null?void 0:M.total);if(F<=0){k("لا يمكن إضافة بند بسعر 0","warn");return}s==null||s({type:"carpet",title:"سجاد",customerName:C.name||"",amount:F,shop:""}),k("تمت إضافة الإجمالي لليوم")};return d.jsxs("div",{className:"space-y-3 pb-20",dir:"rtl",children:[p?d.jsx("div",{className:"fixed top-4 left-1/2 -translate-x-1/2 z-50",children:d.jsx("div",{className:`px-4 py-2 rounded-2xl text-xs font-extrabold shadow-lg border ${p.tone==="warn"?"bg-amber-50 text-amber-800 border-amber-200":"bg-emerald-50 text-emerald-800 border-emerald-200"}`,children:p.msg})}):null,d.jsxs("section",{className:"bg-white rounded-2xl border border-slate-200 p-3 shadow-sm space-y-2",children:[d.jsxs("div",{className:"flex items-center justify-between gap-2 flex-wrap",children:[d.jsxs("div",{className:"min-w-0",children:[d.jsx("h2",{className:"text-sm font-semibold text-slate-900",children:"السجاد"}),d.jsx("p",{className:"text-[11px] text-slate-500",children:"إدخال سريع: سجادة واحدة مفتوحة + Enter للتنقل + تثبيت بضغطة."})]}),d.jsx("button",{onClick:L,className:"h-9 px-4 rounded-2xl bg-blue-600 text-xs font-extrabold text-white hover:bg-blue-700",children:"+ زبون جديد"})]}),d.jsxs("div",{className:"flex flex-col lg:flex-row gap-2 lg:items-center lg:justify-between",children:[d.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 sm:items-center",children:[d.jsxs("div",{className:"flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 h-9",children:[d.jsx("span",{className:"text-[11px] text-slate-600",children:"سعر المتر"}),d.jsx("input",{type:"number",inputMode:"decimal",value:t??15,onChange:C=>e(C.target.value),className:"w-20 bg-transparent text-xs text-slate-900 outline-none"}),d.jsx("span",{className:"text-[11px] text-slate-500",children:"₪/م²"})]}),d.jsxs("div",{className:"relative flex-1 min-w-[240px]",children:[d.jsx("span",{className:"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs",children:"🔍"}),d.jsx("input",{value:i,onChange:C=>o(C.target.value),className:"w-full h-9 rounded-2xl border border-slate-200 bg-slate-50 pl-8 pr-3 text-xs text-slate-900 outline-none",placeholder:"بحث (اسم / هاتف / ملاحظة)…"})]})]}),d.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[d.jsx(ph,{label:"عدد السجاد",value:y.grandCount}),d.jsx(ph,{label:"مجموع المساحة",value:`${Ze(y.grandArea)} م²`}),d.jsx(ph,{label:"إجمالي السجاد",value:Ze(y.grandTotal)})]})]})]}),d.jsx("section",{className:"space-y-2",children:b.length===0?d.jsxs("div",{className:"bg-white rounded-2xl border border-slate-200 p-6 text-center shadow-sm",children:[d.jsx("div",{className:"text-sm font-bold text-slate-900",children:"لا يوجد زبائن سجاد"}),d.jsx("div",{className:"mt-1 text-[12px] text-slate-500",children:"اضغط “+ زبون جديد” وابدأ."})]}):b.slice().sort((C,M)=>(C.status==="done"?1:0)-(M.status==="done"?1:0)).map(C=>{const M=a===C.id,F=v.get(C.id)||{total:0,totalArea:0,rugsCount:0};return d.jsxs("div",{className:"bg-white rounded-2xl border border-slate-200 shadow-sm",children:[d.jsxs("button",{type:"button",onClick:()=>c(B=>B===C.id?null:C.id),className:"w-full px-3 py-2.5 flex items-start justify-between gap-2 text-right",children:[d.jsxs("div",{className:"min-w-0 flex-1",children:[d.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[d.jsx("span",{className:`text-[11px] px-2 py-0.5 rounded-full border ${C.status==="done"?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-amber-50 text-amber-700 border-amber-200"}`,children:C.status==="done"?"🟢 مكتمل":"🟡 قيد العمل"}),d.jsx("div",{className:"text-xs font-extrabold text-slate-900 truncate",children:C.name||"زبون بدون اسم"}),C.phone?d.jsxs("span",{className:"text-[11px] text-slate-500 truncate",children:["— ",C.phone]}):null]}),d.jsxs("div",{className:"mt-1 text-[11px] text-slate-600 flex gap-3 flex-wrap",children:[d.jsxs("span",{children:["عدد:"," ",d.jsx("b",{className:"text-slate-900",children:F.rugsCount})]}),d.jsxs("span",{children:["مساحة:"," ",d.jsxs("b",{className:"text-slate-900",children:[Ze(F.totalArea)," م²"]})]}),d.jsxs("span",{children:["الإجمالي:"," ",d.jsxs("b",{className:"text-slate-900",children:[Ze(F.total)," ₪"]})]})]})]}),d.jsx("span",{className:"text-[11px] text-slate-400 w-6 text-center",children:M?"▲":"▼"})]}),M&&d.jsxs("div",{className:"px-3 pb-3 space-y-3",children:[d.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-3",children:[d.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:[d.jsxs("div",{children:[d.jsx("div",{className:"text-[11px] text-slate-600 mb-1",children:"اسم الزبون"}),d.jsx("input",{value:C.name||"",onChange:B=>R(C.id,{name:B.target.value}),className:cs(!1),placeholder:"مثال: أحمد"})]}),d.jsxs("div",{children:[d.jsx("div",{className:"text-[11px] text-slate-600 mb-1",children:"رقم الهاتف (اختياري)"}),d.jsx("input",{value:C.phone||"",onChange:B=>R(C.id,{phone:B.target.value}),className:cs(!1),placeholder:"05X..."})]}),d.jsxs("div",{className:"sm:col-span-2",children:[d.jsx("div",{className:"text-[11px] text-slate-600 mb-1",children:"ملاحظات (اختياري)"}),d.jsx("input",{value:C.notes||"",onChange:B=>R(C.id,{notes:B.target.value}),className:cs(!1),placeholder:"مثال: عنده 3 سجاد كبار…"})]})]}),d.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-between gap-2",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Io,{active:C.status!=="done",onClick:()=>$(C.id,!1),children:"⏳ قيد العمل"}),d.jsx(Io,{active:C.status==="done",onClick:()=>$(C.id,!0),children:"✅ مكتمل"})]}),d.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[d.jsx("button",{type:"button",onClick:()=>O(C),className:"h-9 px-4 rounded-2xl bg-slate-900 text-xs font-extrabold text-white hover:bg-slate-800",title:"يضيف مجموع هذا الزبون كبند واحد في بنود اليوم",children:"➕ إضافة الإجمالي لليوم"}),d.jsx("button",{type:"button",onClick:()=>q(C.id),className:"h-9 px-4 rounded-2xl bg-emerald-600 text-xs font-extrabold text-white hover:bg-emerald-700",title:"ينهي الزبون ويغلقه ويفتح التالي (إن وجد)",children:"✅ إنهاء الزبون"}),d.jsx(Kv,{title:"حذف الزبون",tone:"danger",onClick:()=>S(C.id),children:"🗑️"})]})]})]}),d.jsxs("div",{className:"space-y-2",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{className:"text-[12px] font-extrabold text-slate-900",children:["السجاد (",F.rugsCount,")"]}),d.jsx("button",{type:"button",onClick:()=>x(C.id,"cm"),className:"h-8 px-3 rounded-2xl border border-slate-200 bg-white text-[11px] font-extrabold text-slate-800 hover:bg-slate-50",children:"+ إضافة سجادة"})]}),(C.rugs||[]).map((B,Y)=>{const G=mh(B),ue=vs(G.mode),xe=(u==null?void 0:u.customerId)===C.id&&(u==null?void 0:u.rugId)===G.id,Ke=ue==="cm",ze=ue==="area",Qe=ue==="price",Kt=Gf(G),ts=qv(G,y.rate);return d.jsxs("div",{ref:ie=>ie&&E.current.set(`${C.id}:${G.id}`,ie),className:"rounded-2xl border border-slate-200 bg-white overflow-hidden",children:[d.jsxs("button",{type:"button",onClick:()=>{h(ie=>(ie==null?void 0:ie.customerId)===C.id&&(ie==null?void 0:ie.rugId)===G.id?null:{customerId:C.id,rugId:G.id}),c(C.id),setTimeout(()=>N(C.id,G.id,ue),20)},className:"w-full px-3 py-2 flex items-center justify-between",children:[d.jsxs("div",{className:"text-[11px] text-slate-500",children:["سجادة #",Y+1]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs("span",{className:"text-[11px] text-slate-500",children:[Ze(ts)," ₪"]}),d.jsx("span",{className:"text-[11px] text-slate-400",children:xe?"▲":"▼"})]})]}),xe&&d.jsxs("div",{className:"p-3 pt-0 space-y-2",children:[d.jsxs("div",{className:"flex items-center justify-between gap-2",children:[d.jsxs("div",{className:"mt-2 flex flex-wrap gap-2",children:[d.jsx(Io,{active:Ke,onClick:()=>V(C.id,G.id,{mode:"cm",priceOverride:""}),children:"طول × عرض"}),d.jsx(Io,{active:ze,onClick:()=>V(C.id,G.id,{mode:"area",lengthCm:"",widthCm:"",priceOverride:""}),children:"مساحة"}),d.jsx(Io,{active:Qe,onClick:()=>V(C.id,G.id,{mode:"price",lengthCm:"",widthCm:"",areaM2:""}),children:"سعر مباشر"})]}),d.jsx(Kv,{title:"حذف السجادة",tone:"danger",onClick:()=>T(C.id,G.id),className:"mt-2",children:"🗑️"})]}),d.jsxs("div",{className:"mt-2 grid grid-cols-1 sm:grid-cols-12 gap-2 items-end",children:[Ke&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"sm:col-span-6",children:[d.jsx("div",{className:"text-[11px] text-slate-600 mb-1",children:"الطول (سم)"}),d.jsx("input",{ref:ie=>ie&&j.current.set(I(C.id,G.id,"length"),ie),type:"text",inputMode:"decimal",value:G.lengthCm??"",onChange:ie=>{const te=ie.target.value,pe=String(te).toLowerCase().replace("×","x").split("x");if(pe.length===2){V(C.id,G.id,{lengthCm:pe[0].trim(),widthCm:pe[1].trim()}),setTimeout(()=>P(C.id,G.id,"width"),0);return}V(C.id,G.id,{lengthCm:te})},onKeyDown:ie=>{ie.key==="Enter"&&(ie.preventDefault(),P(C.id,G.id,"width"))},className:cs(!1),placeholder:"مثال: 300 أو 300x200"})]}),d.jsxs("div",{className:"sm:col-span-6",children:[d.jsx("div",{className:"text-[11px] text-slate-600 mb-1",children:"العرض (سم)"}),d.jsx("input",{ref:ie=>ie&&j.current.set(I(C.id,G.id,"width"),ie),type:"number",inputMode:"decimal",value:G.widthCm??"",onChange:ie=>V(C.id,G.id,{widthCm:ie.target.value}),onKeyDown:ie=>{ie.key==="Enter"&&(ie.preventDefault(),w(C.id,G.id))},className:cs(!1),placeholder:"مثال: 200"})]})]}),ze&&d.jsxs("div",{className:"sm:col-span-12",children:[d.jsx("div",{className:"text-[11px] text-slate-600 mb-1",children:"المساحة (م²)"}),d.jsx("input",{ref:ie=>ie&&j.current.set(I(C.id,G.id,"area"),ie),type:"number",inputMode:"decimal",value:G.areaM2??"",onChange:ie=>V(C.id,G.id,{areaM2:ie.target.value}),onKeyDown:ie=>{ie.key==="Enter"&&(ie.preventDefault(),w(C.id,G.id))},className:cs(!1),placeholder:"مثال: 6"})]}),Qe&&d.jsxs("div",{className:"sm:col-span-12",children:[d.jsx("div",{className:"text-[11px] text-slate-600 mb-1",children:"السعر (₪)"}),d.jsx("input",{ref:ie=>ie&&j.current.set(I(C.id,G.id,"price"),ie),type:"number",inputMode:"decimal",value:G.priceOverride??"",onChange:ie=>V(C.id,G.id,{priceOverride:ie.target.value}),onKeyDown:ie=>{ie.key==="Enter"&&(ie.preventDefault(),w(C.id,G.id))},className:cs(!1),placeholder:"مثال: 120"})]})]}),d.jsxs("div",{className:"mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 flex flex-wrap items-center justify-between gap-2",children:[Qe?null:d.jsxs("div",{className:"text-[11px] text-slate-600",children:["المساحة:"," ",d.jsx("b",{className:"text-slate-900",children:Kt>0?`${Ze(Kt)} م²`:"—"})]}),d.jsxs("div",{className:"text-[11px] text-slate-600",children:["السعر:"," ",d.jsxs("b",{className:"text-slate-900",children:[Ze(ts)," ₪"]})," ",d.jsx("span",{className:"text-slate-400",children:Qe?"(سعر مباشر)":`(${Ze(y.rate)} ₪/م²)`})]})]}),d.jsx("button",{type:"button",onClick:()=>w(C.id,G.id),className:"h-9 w-full rounded-2xl bg-emerald-600 text-xs font-extrabold text-white hover:bg-emerald-700",children:"✅ تثبيت السجادة"})]})]},G.id)})]})]})]},C.id)})}),d.jsx("div",{className:"fixed bottom-3 left-1/2 -translate-x-1/2 w-[min(920px,calc(100%-24px))] z-40",children:d.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white/95 backdrop-blur px-2 py-2 shadow-lg flex items-center gap-2",children:[d.jsx("button",{type:"button",disabled:!a,onClick:()=>a&&x(a,"cm"),className:`h-10 px-4 rounded-2xl text-xs font-extrabold ${a?"bg-blue-600 text-white hover:bg-blue-700":"bg-slate-200 text-slate-500 cursor-not-allowed"}`,title:"إضافة سجادة جديدة (ويتم فتحها مباشرة)",children:"➕ سجادة"}),d.jsx("button",{type:"button",disabled:!(u!=null&&u.customerId)||!(u!=null&&u.rugId),onClick:()=>(u==null?void 0:u.customerId)&&(u==null?void 0:u.rugId)&&w(u.customerId,u.rugId),className:`h-10 px-3 rounded-2xl border text-xs font-extrabold ${u!=null&&u.customerId&&(u!=null&&u.rugId)?"border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100":"border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed"}`,title:"تثبيت السجادة الحالية وفتح سجادة جديدة",children:"✅ تثبيت"}),d.jsx("div",{className:"flex-1"}),d.jsx("div",{className:"text-[11px] text-slate-500 pl-2",children:a?"جاهز للشغل السريع":"افتح زبون للبدء"})]})})]})}const Hm="contact_messages";function gL(t,e){const n=B4(N4(el,Hm),H4("createdAt","desc"));return J4(n,r=>{const s=r.docs.map(i=>({id:i.id,...i.data()}));t==null||t(s)},r=>e==null?void 0:e(r))}async function Qv(t,e){t&&await Y4(qu(el,Hm,t),{status:e,updatedAt:lE()})}async function Yv(t){t&&await X4(qu(el,Hm,t))}const hE=D.createContext(null);function yL({children:t}){const[e,n]=D.useState([]),r=D.useCallback(o=>{n(a=>a.filter(c=>c.id!==o))},[]),s=D.useCallback(o=>{const a=o.id||`${Date.now()}-${Math.random().toString(16).slice(2)}`,c=o.type||"info",u=o.title||"",h=o.message||"",p=Number.isFinite(Number(o.durationMs))?Number(o.durationMs):2800,m={id:a,type:c,title:u,message:h,durationMs:p};return n(_=>[..._,m]),p>0&&window.setTimeout(()=>r(a),p),a},[r]),i=D.useMemo(()=>({push:s,remove:r,success:(o,a={})=>s({type:"success",message:o,...a}),error:(o,a={})=>s({type:"error",message:o,...a}),info:(o,a={})=>s({type:"info",message:o,...a})}),[s]);return d.jsxs(hE.Provider,{value:i,children:[t,d.jsx("div",{className:"fixed top-3 left-3 right-3 z-[9999] flex justify-center pointer-events-none",children:d.jsx("div",{className:"w-full max-w-xl space-y-2",children:e.map(o=>d.jsx(vL,{toast:o,onClose:()=>r(o.id)},o.id))})})]})}function fE(){const t=D.useContext(hE);return t||{push:()=>{},remove:()=>{},success:()=>{},error:()=>{},info:()=>{}}}function vL({toast:t,onClose:e}){const n="pointer-events-auto w-full rounded-2xl border px-3 py-2 shadow-lg bg-white flex items-start justify-between gap-3",r=t.type==="success"?"border-emerald-200":t.type==="error"?"border-rose-200":"border-slate-200",s=t.type==="success"?"✅":t.type==="error"?"⚠️":"ℹ️";return d.jsxs("div",{className:`${n} ${r}`,dir:"rtl",children:[d.jsxs("div",{className:"min-w-0",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"text-sm",children:s}),t.title?d.jsx("div",{className:"text-xs font-extrabold text-slate-900",children:t.title}):null]}),t.message?d.jsx("div",{className:"mt-1 text-[12px] text-slate-700 whitespace-pre-wrap break-words",children:t.message}):null]}),d.jsx("button",{type:"button",onClick:e,className:"h-8 px-3 rounded-2xl border border-slate-200 bg-white text-[11px] text-slate-700 hover:bg-slate-50","aria-label":"إغلاق التنبيه",children:"إغلاق"})]})}function qs(t){return String(t||"").toLowerCase().trim()}function wL(t){if(!t)return null;if(typeof(t==null?void 0:t.toDate)=="function")return t.toDate();if(typeof t=="number")return new Date(t);if(typeof(t==null?void 0:t.seconds)=="number")return new Date(t.seconds*1e3);if(typeof t=="string"){const e=Date.parse(t);if(Number.isFinite(e))return new Date(e)}return null}function Co(t){const e=wL(t);return e?e.toLocaleString("ar"):""}function Ao(t){return t.subject||t.topic||t.title||"بدون عنوان"}function Gs(t){return(t.status||"new")==="new"?"new":"done"}function xL(t,e){const n=String(t||"").replace(/[^\d+]/g,""),r=encodeURIComponent(e||"");return n?`https://wa.me/${n.startsWith("0")?`972${n.slice(1)}`:n}?text=${r}`:null}function Xv(t){var e;if(!t)return Promise.resolve(!1);if((e=navigator==null?void 0:navigator.clipboard)!=null&&e.writeText)return navigator.clipboard.writeText(t).then(()=>!0);try{const n=document.createElement("textarea");return n.value=t,document.body.appendChild(n),n.select(),document.execCommand("copy"),n.remove(),Promise.resolve(!0)}catch{return Promise.resolve(!1)}}function Yt({tone:t="slate",children:e}){const n=t==="amber"?"bg-amber-50 text-amber-800 border-amber-200":t==="emerald"?"bg-emerald-50 text-emerald-800 border-emerald-200":"bg-slate-50 text-slate-700 border-slate-200";return d.jsx("span",{className:"inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-extrabold border "+n,children:e})}function Ft({tone:t="default",disabled:e,onClick:n,children:r,title:s}){const i=t==="primary"?"border-blue-200 text-blue-700 hover:bg-blue-50":t==="danger"?"border-rose-200 text-rose-700 hover:bg-rose-50":"border-slate-200 text-slate-700 hover:bg-slate-50";return d.jsx("button",{type:"button",title:s,disabled:e,onClick:n,className:"h-9 px-3 rounded-2xl border bg-white text-xs font-extrabold transition "+i+(e?" opacity-60 cursor-not-allowed":""),children:r})}function _L(){const t=fE(),[e,n]=D.useState([]),[r,s]=D.useState(!0),[i,o]=D.useState(()=>new Set),[a,c]=D.useState(""),[u,h]=D.useState("new"),[p,m]=D.useState(()=>new Set),[_,E]=D.useState(null),j=D.useRef(!1),k=(N,w)=>{o($=>{const q=new Set($);return w?q.add(N):q.delete(N),q})};D.useEffect(()=>{j.current=!0,s(!0);const N=gL(w=>{if(!j.current)return;const $=Array.isArray(w)?w:[];n($),E(q=>{var O;return q&&$.some(C=>C.id===q)?q:((O=$[0])==null?void 0:O.id)||null}),s(!1)},w=>{console.error(w),j.current&&(s(!1),t.error("فشل تحميل الرسائل"))});return()=>{j.current=!1,N==null||N()}},[]);const b=D.useMemo(()=>{const N=e.length,w=e.filter(q=>Gs(q)==="new").length,$=N-w;return{all:N,news:w,done:$}},[e]),y=D.useMemo(()=>{const N=qs(a);return e.filter(w=>u==="new"?Gs(w)==="new":u==="done"?Gs(w)==="done":!0).filter(w=>N?(qs(Ao(w))+" "+qs(w.name)+" "+qs(w.phone)+" "+qs(w.channel)+" "+qs(w.message)).includes(N):!0)},[e,a,u]),v=D.useMemo(()=>e.find(N=>N.id===_)||null,[e,_]),R=N=>{m(w=>{const $=new Set(w);return $.has(N)?$.delete(N):$.add(N),$})},V=()=>{m(new Set(y.map(N=>N.id)))},L=()=>m(new Set),S=async(N,w)=>{if(N){k(N,!0),n($=>$.map(q=>q.id===N?{...q,status:w}:q));try{await Qv(N,w)}catch($){console.error($),t.error("فشل تحديث الحالة")}finally{k(N,!1)}}},x=async N=>{if(N){k(N,!0),n(w=>w.filter($=>$.id!==N)),m(w=>{const $=new Set(w);return $.delete(N),$});try{await Yv(N),E(w=>w===N?null:w)}catch(w){console.error(w),t.error("فشل حذف الرسالة")}finally{k(N,!1)}}},T=async N=>{const w=Array.from(p);if(w.length===0){t.info("حدد رسائل أولاً");return}t.info(`جاري تحديث ${w.length} رسالة…`,{durationMs:1200}),n($=>$.map(q=>p.has(q.id)?{...q,status:N}:q));try{for(const $ of w)await Qv($,N);t.success("تم التحديث"),L()}catch($){console.error($),t.error("فشل التحديث الجماعي")}},I=async()=>{const N=Array.from(p);if(N.length===0){t.info("حدد رسائل أولاً");return}t.info(`جاري حذف ${N.length} رسالة…`,{durationMs:1200}),n(w=>w.filter($=>!p.has($.id))),L();try{for(const w of N)await Yv(w);t.success("تم الحذف"),N.includes(_)&&E(null)}catch(w){console.error(w),t.error("فشل الحذف الجماعي")}};D.useEffect(()=>{const N=w=>{var O,C,M;const $=(((O=w.target)==null?void 0:O.tagName)||"").toLowerCase();if(!($==="input"||$==="textarea")){if(w.key.toLowerCase()==="j"){w.preventDefault();const F=y.findIndex(Y=>Y.id===_),B=(C=y[Math.min(y.length-1,F+1)])==null?void 0:C.id;B&&E(B);return}if(w.key.toLowerCase()==="k"){w.preventDefault();const F=y.findIndex(Y=>Y.id===_),B=(M=y[Math.max(0,F-1)])==null?void 0:M.id;B&&E(B);return}if(w.key===" "){w.preventDefault(),_&&R(_);return}if(w.key.toLowerCase()==="d"){w.preventDefault(),_&&S(_,"done");return}if(w.key.toLowerCase()==="n"){w.preventDefault(),_&&S(_,"new");return}if(w.key.toLowerCase()==="x"){w.preventDefault(),_&&x(_);return}(w.ctrlKey||w.metaKey)&&w.key.toLowerCase()==="a"&&(w.preventDefault(),V())}};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[_,y]);const P=p.size;return d.jsxs("section",{className:"bg-white rounded-2xl border border-slate-200 shadow-sm p-3",children:[d.jsxs("div",{className:"flex items-center justify-between gap-2 flex-wrap",children:[d.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[d.jsx("div",{className:"text-sm font-extrabold text-slate-900",children:"Inbox الرسائل"}),d.jsxs(Yt,{tone:"slate",children:[b.all," الكل"]}),d.jsxs(Yt,{tone:"amber",children:[b.news," جديد"]}),d.jsxs(Yt,{tone:"emerald",children:[b.done," تم التعامل"]})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Yt,{tone:"slate",children:"Realtime"}),d.jsx(Ft,{title:"مزامنة لحظية (لا يوجد تحديث يدوي)",disabled:!0,onClick:()=>{},children:"● مباشر"})]})]}),d.jsxs("div",{className:"mt-3 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-2",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("input",{value:a,onChange:N=>c(N.target.value),placeholder:"بحث سريع… (اسم / هاتف / موضوع / نص)",className:"w-full h-10 rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-blue-200"}),d.jsxs("select",{value:u,onChange:N=>h(N.target.value),className:"h-10 rounded-2xl border border-slate-200 bg-white px-3 text-sm font-bold text-slate-800",children:[d.jsx("option",{value:"new",children:"جديد (الافتراضي)"}),d.jsx("option",{value:"done",children:"تم التعامل"}),d.jsx("option",{value:"all",children:"الكل"})]})]}),d.jsx("div",{className:"flex items-center gap-2 flex-wrap justify-end",children:P>0?d.jsxs(d.Fragment,{children:[d.jsxs(Yt,{children:[P," محدد"]}),d.jsx(Ft,{tone:"primary",onClick:()=>T("done"),children:"✓ تم التعامل (Bulk)"}),d.jsx(Ft,{onClick:()=>T("new"),children:"↩︎ رجّع جديد (Bulk)"}),d.jsx(Ft,{tone:"danger",onClick:I,children:"🗑 حذف (Bulk)"}),d.jsx(Ft,{onClick:L,children:"مسح التحديد"})]}):d.jsxs(d.Fragment,{children:[d.jsx(Ft,{onClick:V,title:"Ctrl+A",children:"تحديد الكل (بالفلتر)"}),d.jsx(Yt,{tone:"slate",children:"اختصارات: J/K تنقل · Space تحديد · D تم · N جديد · X حذف"})]})})]}),d.jsxs("div",{className:"mt-3 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-3",children:[d.jsxs("div",{className:"rounded-2xl border border-slate-200 overflow-hidden bg-white",children:[d.jsxs("div",{className:"px-3 py-2 border-b border-slate-200 bg-slate-50 flex items-center justify-between",children:[d.jsxs("div",{className:"text-xs font-extrabold text-slate-700",children:[y.length," نتيجة"]}),d.jsx("div",{className:"text-[11px] text-slate-500",children:"اضغط على الرسالة لعرض التفاصيل"})]}),d.jsx("div",{className:"max-h-[60vh] overflow-auto",children:r?d.jsx("div",{className:"p-4 text-sm text-slate-600",children:"جاري التحميل…"}):y.length===0?d.jsx("div",{className:"p-4 text-sm text-slate-600",children:"لا يوجد رسائل مطابقة."}):y.map(N=>{const w=N.id===_,$=Gs(N),q=p.has(N.id);return d.jsxs("button",{type:"button",onClick:()=>E(N.id),className:"w-full text-right px-3 py-2 border-b border-slate-100 hover:bg-slate-50 transition "+(w?"bg-blue-50/60":""),children:[d.jsxs("div",{className:"flex items-start justify-between gap-2",children:[d.jsxs("div",{className:"min-w-0",children:[d.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[d.jsx("div",{className:"text-[13px] font-extrabold text-slate-900 truncate",children:Ao(N)}),$==="new"?d.jsx(Yt,{tone:"amber",children:"جديد"}):d.jsx(Yt,{tone:"emerald",children:"تم"})]}),d.jsxs("div",{className:"mt-1 text-[11px] text-slate-500 flex gap-2 flex-wrap",children:[N.name?d.jsxs("span",{children:["👤 ",N.name]}):null,N.phone?d.jsxs("span",{children:["📞 ",N.phone]}):null,Co(N.createdAt)?d.jsxs("span",{children:["🕒 ",Co(N.createdAt)]}):null]})]}),d.jsx("div",{className:"flex items-center gap-2",children:d.jsx("input",{type:"checkbox",checked:q,onChange:()=>R(N.id),onClick:O=>O.stopPropagation(),className:"h-4 w-4",title:"تحديد (Space)"})})]}),N.message?d.jsx("div",{className:"mt-1 text-[12px] text-slate-700 line-clamp-2",children:N.message}):d.jsx("div",{className:"mt-1 text-[12px] text-slate-400",children:"(بدون نص)"})]},N.id)})})]}),d.jsx("div",{className:"rounded-2xl border border-slate-200 bg-white p-3",children:v?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"flex items-start justify-between gap-2 flex-wrap",children:[d.jsxs("div",{children:[d.jsx("div",{className:"text-lg font-extrabold text-slate-900",children:Ao(v)}),d.jsxs("div",{className:"mt-1 flex items-center gap-2 flex-wrap",children:[Gs(v)==="new"?d.jsx(Yt,{tone:"amber",children:"جديد"}):d.jsx(Yt,{tone:"emerald",children:"تم التعامل"}),Co(v.createdAt)?d.jsx(Yt,{children:Co(v.createdAt)}):null,v.channel?d.jsxs(Yt,{children:["💬 ",v.channel]}):null]})]}),d.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[Gs(v)==="new"?d.jsx(Ft,{tone:"primary",disabled:i.has(v.id),onClick:()=>S(v.id,"done"),title:"D",children:"✓ تم التعامل"}):d.jsx(Ft,{disabled:i.has(v.id),onClick:()=>S(v.id,"new"),title:"N",children:"↩︎ رجّع جديد"}),d.jsx(Ft,{tone:"danger",disabled:i.has(v.id),onClick:()=>x(v.id),title:"X",children:"🗑 حذف"})]})]}),d.jsxs("div",{className:"mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2",children:[d.jsxs("div",{className:"rounded-2xl border border-slate-200 p-3",children:[d.jsx("div",{className:"text-[11px] font-extrabold text-slate-500",children:"الاسم"}),d.jsx("div",{className:"mt-1 text-sm font-bold text-slate-900",children:v.name||"—"})]}),d.jsxs("div",{className:"rounded-2xl border border-slate-200 p-3",children:[d.jsx("div",{className:"text-[11px] font-extrabold text-slate-500",children:"الهاتف"}),d.jsxs("div",{className:"mt-1 flex items-center justify-between gap-2",children:[d.jsx("div",{className:"text-sm font-bold text-slate-900",children:v.phone||"—"}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Ft,{disabled:!v.phone,onClick:async()=>{await Xv(String(v.phone||""))?t.success("تم نسخ الرقم"):t.error("فشل النسخ")},title:"نسخ",children:"📋 نسخ"}),d.jsx(Ft,{disabled:!v.phone,onClick:()=>{v.phone&&window.open(`tel:${v.phone}`,"_self")},title:"اتصال",children:"📞 اتصال"})]})]})]})]}),d.jsxs("div",{className:"mt-2 flex items-center gap-2 flex-wrap",children:[d.jsx(Ft,{disabled:!v.phone,onClick:()=>{const N=xL(v.phone,`مرحباً ${v.name||""}، استلمنا رسالتك بخصوص: ${Ao(v)}`);N&&window.open(N,"_blank")},title:"فتح واتساب",children:"🟢 واتساب"}),d.jsx(Ft,{onClick:async()=>{const N=`[${Ao(v)}]
الاسم: ${v.name||"-"}
الهاتف: ${v.phone||"-"}
القناة: ${v.channel||"-"}
التاريخ: ${Co(v.createdAt)||"-"}

${v.message||""}`;await Xv(N)?t.success("تم نسخ ملخص الرسالة"):t.error("فشل النسخ")},title:"نسخ ملخص",children:"🧾 نسخ ملخص"})]}),d.jsxs("div",{className:"mt-3 rounded-2xl border border-slate-200 p-3 bg-slate-50",children:[d.jsx("div",{className:"text-[11px] font-extrabold text-slate-500",children:"نص الرسالة"}),d.jsx("div",{className:"mt-2 text-[14px] text-slate-900 whitespace-pre-wrap leading-relaxed",children:v.message||"(بدون نص)"})]}),d.jsx("div",{className:"mt-3 text-[11px] text-slate-400",children:"تذكير: J/K للتنقل · Space للتحديد · D تم · N جديد · X حذف · Ctrl+A تحديد الكل (حسب الفلتر)"})]}):d.jsx("div",{className:"text-sm text-slate-600",children:"اختر رسالة من القائمة."})})]})]})}const pE="manager_daily_v2";function bL(t=new Date){const e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${n}-${r}`}function ra(t){return{dateKey:t,isClosed:!1,defaultCarpetRatePerM2:15,entries:[],carpetCustomers:[],updatedAt:null}}async function EL(t){if(!t)throw new Error("fetchDay: missing dateKey");const e=qu(el,pE,String(t)),n=await K4(e);if(!n.exists())return ra(t);const r=n.data()||{};return{...ra(t),...r,dateKey:t}}async function TL(t,e){if(!t)throw new Error("upsertDay: missing dateKey");const n=qu(el,pE,String(t));return await Q4(n,{...e,dateKey:t,updatedAt:lE()},{merge:!0}),!0}const $l=String({}.VITE_ADMIN_EMAIL||"").trim().toLowerCase();function Jv(t){return String(t||"").trim().toLowerCase()}function Zv(t){const e=String(t||"daily").trim().toLowerCase();return e==="daily"||e==="carpets"||e==="messages"?e:"daily"}function SL(t){return t?typeof t=="number"?t:typeof(t==null?void 0:t.toMillis)=="function"?t.toMillis():typeof(t==null?void 0:t.seconds)=="number"?t.seconds*1e3:null:null}function Bl(t){const e=new WeakSet,n=r=>{if(r===null||typeof r!="object")return r;if(e.has(r))return"[Circular]";if(e.add(r),Array.isArray(r))return r.map(n);const s={};return Object.keys(r).sort().forEach(i=>{s[i]=n(r[i])}),s};return JSON.stringify(n(t))}function IL(){return d.jsxs("main",{className:`\r
        relative flex min-h-screen\r
        items-center justify-center\r
        overflow-hidden bg-[#F6F8FC]\r
        px-4\r
      `,dir:"rtl",children:[d.jsx("div",{className:`\r
          pointer-events-none absolute\r
          start-[-120px] top-[-140px]\r
          h-[320px] w-[320px]\r
          rounded-full bg-blue-100/70\r
          blur-3xl\r
        `,"aria-hidden":"true"}),d.jsxs("div",{className:`\r
          relative w-full max-w-sm\r
          rounded-[28px] border border-slate-200\r
          bg-white px-6 py-8 text-center\r
          shadow-[0_22px_65px_rgba(15,23,42,0.10)]\r
        `,children:[d.jsx("div",{className:`\r
            mx-auto flex h-14 w-14\r
            items-center justify-center\r
            rounded-2xl bg-blue-600\r
            text-white\r
            shadow-[0_10px_28px_rgba(37,99,235,0.24)]\r
          `,"aria-hidden":"true",children:d.jsx(Bp,{className:"h-7 w-7"})}),d.jsx(Uc,{className:`\r
            mx-auto mt-5 h-6 w-6\r
            animate-spin text-blue-600\r
          `,"aria-hidden":"true"}),d.jsx("h1",{className:"mt-3 text-lg font-black text-slate-950",children:"جارٍ التحقق من جلسة الإدارة"}),d.jsx("p",{className:"mt-2 text-sm font-medium leading-6 text-slate-500",children:"لحظة واحدة، يتم التأكد من حالة تسجيل الدخول."})]})]})}function CL({message:t}){return t?d.jsx("div",{className:`\r
        pointer-events-none fixed\r
        left-1/2 top-4 z-[10200]\r
        w-[calc(100%-28px)] max-w-md\r
        -translate-x-1/2\r
      `,dir:"rtl",role:"alert",children:d.jsx("div",{className:`\r
          rounded-2xl border border-rose-200\r
          bg-white px-4 py-3\r
          text-center text-sm font-extrabold\r
          leading-6 text-rose-700\r
          shadow-[0_16px_45px_rgba(15,23,42,0.16)]\r
        `,children:t})}):null}function AL({onExit:t}){const e=fE(),[n,r]=D.useState(!1),[s,i]=D.useState(null),[o,a]=D.useState(""),[c,u]=D.useState(!1),[h,p]=D.useState("daily"),m=Zv(h),_=bL(),[E,j]=D.useState(_),[k,b]=D.useState(ra(_)),[y,v]=D.useState(0),[R,V]=D.useState(!1),[L,S]=D.useState(""),[x,T]=D.useState(!1),[I,P]=D.useState(null),[N,w]=D.useState(null),$=D.useRef(k),q=D.useRef(E),O=D.useRef(""),C=D.useRef(null),M=D.useRef(null),F=!!(n&&s),B=!!(k!=null&&k.isClosed);D.useEffect(()=>{$.current=k},[k]),D.useEffect(()=>{q.current=E},[E]),D.useEffect(()=>{let te=!0;const pe=_P(wr,async Ue=>{if(!te)return;if(!Ue){i(null),r(!0);return}const $e=Jv(Ue.email);if(!$l){i(null),a("بريد الأدمن غير موجود داخل ملف .env.local.");try{await Lo(wr)}catch(mt){console.error("Failed to sign out unconfigured admin:",mt)}finally{te&&r(!0)}return}if($e!==$l){i(null),a("الحساب المسجل غير مخوّل للدخول إلى لوحة الإدارة.");try{await Lo(wr)}catch(mt){console.error("Failed to sign out unauthorized user:",mt)}finally{te&&r(!0)}return}a(""),i(Ue),r(!0)},Ue=>{console.error("Firebase auth state error:",Ue),te&&(i(null),r(!0),a("تعذر التحقق من جلسة الإدارة. افحص الاتصال وحاول مرة ثانية."))});return()=>{te=!1,pe()}},[]);const Y=D.useCallback(async(te="manual")=>{const pe=q.current,Ue=$.current;if(!pe||M.current!==pe)return!0;const $e=Bl(Ue);if($e===O.current)return!0;T(!0),w(null),console.log("💾 SAVE START:",te,"key=",pe);try{return await TL(pe,Ue),O.current=$e,P(Date.now()),console.log("✅ SAVE OK:",te,"key=",pe),!0}catch(mt){console.error("❌ SAVE FAIL:",te,mt);const tl=(mt==null?void 0:mt.message)||"فشل الحفظ";return w(tl),!1}finally{T(!1)}},[]);D.useEffect(()=>{if(!F)return;let te=!0;return M.current=null,C.current&&(window.clearTimeout(C.current),C.current=null),(async()=>{try{V(!0),S(""),w(null);const Ue=await EL(E);if(!te)return;const $e=Ue||ra(E);q.current=E,$.current=$e,O.current=Bl($e),M.current=E,b($e)}catch(Ue){if(console.error("Failed to load manager day:",Ue),!te)return;const $e=ra(E);q.current=E,$.current=$e,O.current=Bl($e),M.current=E,b($e),S("فشل تحميل بيانات اليوم"),e.error("فشل تحميل بيانات اليوم")}finally{te&&V(!1)}})(),()=>{te=!1}},[F,E,y,e]),D.useEffect(()=>{if(!(!F||R||M.current!==E))return C.current&&window.clearTimeout(C.current),C.current=window.setTimeout(()=>{Y("autosave")},800),()=>{C.current&&(window.clearTimeout(C.current),C.current=null)}},[F,E,k,R,Y]),D.useEffect(()=>{if(!F)return;const te=()=>{C.current&&window.clearTimeout(C.current),Y("beforeunload")};return window.addEventListener("beforeunload",te),()=>{window.removeEventListener("beforeunload",te)}},[F,Y]);const G=D.useMemo(()=>{const te=Array.isArray(k.entries)?k.entries:[],pe=te.reduce((Dn,Qt)=>Dn+_e(Qt.amount),0),Ue=te.reduce((Dn,Qt)=>Dn+_e(Qt.shop),0),$e=pe-Ue,mt=_e(k.defaultCarpetRatePerM2)||15,Ji=(Array.isArray(k.carpetCustomers)?k.carpetCustomers:[]).reduce((Dn,Qt)=>{const at=(Array.isArray(Qt==null?void 0:Qt.rugs)?Qt.rugs:[]).reduce((zs,ns)=>{const nl=_e(ns.ratePerM2)||mt;let Zi=0;return ns.mode==="area"?Zi=_e(ns.areaM2):Zi=_e(ns.lengthCm)/100*(_e(ns.widthCm)/100),zs+Zi*nl},0);return Dn+at},0);return{total:pe,shopTotal:Ue,youTotal:$e,carpetsTotal:Ji}},[k]),ue=D.useMemo(()=>M.current!==E?!1:Bl(k)!==O.current,[E,k,I]),xe=te=>{if(B){e.info("اليوم مغلق — العرض للقراءة فقط");return}te()},Ke=({title:te,customerName:pe,amount:Ue,shop:$e})=>{xe(()=>{b(mt=>({...mt,entries:[...mt.entries||[],{id:zr(),type:"carpet",title:te||"سجاد",customerName:pe||"",amount:_e(Ue),shop:_e($e),createdAt:Date.now()}]})),p("daily"),e.success("تمت إضافة بند السجاد")})},ze=D.useCallback(te=>{const pe=Jv(te==null?void 0:te.email);if(!$l||pe!==$l){a("هذا الحساب غير مخوّل للدخول إلى لوحة الإدارة."),Lo(wr);return}i(te),r(!0),a(""),e.success("تم الدخول إلى لوحة الإدارة")},[e]),Qe=D.useCallback(async te=>{if(!te||te===E)return;if(C.current&&(window.clearTimeout(C.current),C.current=null),!await Y("date-change")){e.error("تعذر الحفظ، لذلك لم يتم تغيير اليوم.");return}M.current=null,j(te)},[E,Y,e]),Kt=D.useCallback(te=>{Y("tab-change"),p(Zv(te))},[Y]),ts=D.useCallback(async()=>{if(R)return;if(C.current&&(window.clearTimeout(C.current),C.current=null),!await Y("manual-reload")){e.error("تعذر الحفظ، لذلك لم يتم تحديث البيانات.");return}v(pe=>pe+1)},[Y,R,e]),ie=D.useCallback(async()=>{if(c)return;if(u(!0),C.current&&(window.clearTimeout(C.current),C.current=null),!await Y("logout")){e.error("تعذر حفظ التغييرات. لم يتم تسجيل الخروج حتى لا تضيع البيانات."),u(!1);return}try{await Lo(wr),i(null),t==null||t()}catch(pe){console.error("Admin sign-out failed:",pe),e.error("تعذر تسجيل الخروج. حاول مرة ثانية."),u(!1)}},[Y,t,c,e]);return n?F?d.jsxs("div",{className:`\r
        min-h-screen bg-slate-100\r
      `,dir:"rtl",children:[c?d.jsx("div",{className:`\r
            fixed inset-0 z-[10300]\r
            flex items-center justify-center\r
            bg-slate-950/35 px-4\r
            backdrop-blur-sm\r
          `,role:"status","aria-live":"polite",children:d.jsxs("div",{className:`\r
              flex items-center gap-3\r
              rounded-2xl border border-white/20\r
              bg-white px-5 py-4\r
              text-sm font-extrabold\r
              text-slate-800\r
              shadow-[0_18px_55px_rgba(15,23,42,0.22)]\r
            `,children:[d.jsx(Uc,{className:`\r
                h-5 w-5 animate-spin\r
                text-blue-600\r
              `,"aria-hidden":"true"}),d.jsx("span",{children:"جارٍ حفظ التغييرات وتسجيل الخروج..."})]})}):null,d.jsx(sL,{tab:m,setTab:Kt,dateKey:E,setDateKey:Qe,totals:G,onReload:ts,saving:x,isDirty:ue,lastSavedAt:SL(I),isClosed:B,saveError:!!N,onExit:ie}),d.jsxs("main",{className:`\r
          mx-auto max-w-6xl\r
          space-y-4 px-4 py-5\r
        `,children:[L?d.jsx("div",{className:`\r
              rounded-2xl border\r
              border-rose-200\r
              bg-rose-50 p-3\r
              text-sm font-bold\r
              text-rose-700\r
            `,role:"alert",children:L}):null,R?d.jsxs("div",{className:`\r
              flex min-h-40\r
              items-center justify-center\r
              gap-3 rounded-2xl\r
              border border-slate-200\r
              bg-white p-6\r
              text-sm font-extrabold\r
              text-slate-600 shadow-sm\r
            `,children:[d.jsx(Uc,{className:`\r
                h-5 w-5 animate-spin\r
                text-blue-600\r
              `,"aria-hidden":"true"}),d.jsx("span",{children:"جارٍ تحميل بيانات اليوم..."})]}):d.jsxs(d.Fragment,{children:[m==="daily"?d.jsx(fL,{entries:k.entries||[],setEntries:te=>xe(()=>b(pe=>({...pe,entries:typeof te=="function"?te(pe.entries||[]):te})))}):null,m==="carpets"?d.jsx(mL,{defaultRatePerM2:k.defaultCarpetRatePerM2||15,setDefaultRatePerM2:te=>xe(()=>b(pe=>({...pe,defaultCarpetRatePerM2:te}))),customers:k.carpetCustomers||[],setCustomers:te=>xe(()=>b(pe=>({...pe,carpetCustomers:typeof te=="function"?te(pe.carpetCustomers||[]):te}))),onAddEntryFromCarpets:Ke}):null,m==="messages"?d.jsx(_L,{}):null]})]}),d.jsx(iL,{error:N||null})]}):d.jsxs(d.Fragment,{children:[d.jsx(CL,{message:o}),d.jsx(tL,{onAuthorized:ze,onExit:t})]}):d.jsx(IL,{})}function kL(t){return d.jsx(yL,{children:d.jsx(AL,{...t})})}const NL="/assets/before1-9df4dbe3.jpg",PL="/assets/after1-db837d4f.jpg",RL="/assets/before2-8edafd0a.jpg",jL="/assets/after2-d933f9fb.jpg",ML="/assets/before3-7f549e50.jpg",LL="/assets/after3-87bb129a.jpg",DL="/assets/before4-978c4ff4.jpg",OL="/assets/after4-5ed2a1b5.jpg",VL="/assets/before5-11742a12.jpg",FL="/assets/after5-48d7bd8b.jpg",zL="/assets/before6-4d4558a0.jpg",UL="/assets/after6-5d449552.jpg",$L="/assets/before7-56007332.jpg",BL="/assets/after7-da37ae48.jpg",HL="/assets/before8-a0f9a9a1.jpg",WL="/assets/after8-bdf1dbea.jpg",qL="/assets/before9-74df05f4.jpg",GL="/assets/after9-4eeee850.jpg",KL="/assets/before10-f23d751e.jpg",QL="/assets/after10-016a20a5.jpg";function YL(){const[t,e]=D.useState(!1),n=s=>{const i=document.getElementById(s);i&&i.scrollIntoView({behavior:"smooth",block:"start"})};D.useEffect(()=>{const s=()=>{const i=document.getElementById("site-header"),o=(i==null?void 0:i.offsetHeight)||64;document.documentElement.style.setProperty("--app-topbar-h",`${o}px`)};return s(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]);const r=[{before:NL,after:PL},{before:RL,after:jL},{before:ML,after:LL},{before:DL,after:OL},{before:VL,after:FL},{before:zL,after:UL},{before:$L,after:BL},{before:HL,after:WL},{before:qL,after:GL},{before:KL,after:QL}];return t?d.jsx(kL,{onExit:()=>e(!1)}):d.jsxs("div",{className:"relative min-h-screen overflow-x-hidden bg-[#f7f9f5] font-sans",children:[d.jsx("div",{id:"site-header",className:"relative z-50",children:d.jsx(E2,{scrollToSection:n})}),d.jsxs("main",{children:[d.jsx(N2,{}),d.jsxs("section",{id:"beforeafter",className:`
            relative
            scroll-mt-20
            overflow-hidden
            border-b
            border-slate-200/70
            bg-[#fbfcf9]
          `,children:[d.jsx("div",{"aria-hidden":"true",className:`
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-[rgba(16,148,192,0.28)]
              to-transparent
            `}),d.jsx("div",{className:"relative z-10",children:d.jsx(kA,{sofaPairs:r})})]}),d.jsx("section",{id:"services",className:`
            relative
            scroll-mt-20
            bg-white
            px-4
            py-12
            sm:px-6
            sm:py-16
            lg:py-20
          `,children:d.jsx("div",{className:"mx-auto max-w-7xl",children:d.jsx(H2,{})})}),d.jsx("section",{id:"faq",className:`
            relative
            scroll-mt-20
            border-t
            border-slate-200/70
            bg-[#f5f7f2]
            px-4
            py-12
            sm:px-6
            sm:py-16
            lg:py-20
          `,children:d.jsx("div",{className:"mx-auto max-w-6xl",children:d.jsx(LA,{})})})]}),d.jsx("button",{type:"button",onClick:()=>e(!0),"aria-label":"لوحة الأدمن",className:`
          fixed
          bottom-3
          right-3
          z-[9999]
          select-none
          text-[15px]
          font-semibold
          tracking-wide
          text-slate-500
          opacity-0
          transition-opacity
          duration-500
          hover:opacity-30
        `,style:{fontFamily:"'Cinzel', serif",textShadow:"0 0 6px rgba(255, 255, 255, 0.8)"},children:"Lumora ✦"})]})}gh.createRoot(document.getElementById("root")).render(d.jsx(v2,{children:d.jsx(YL,{})}));
