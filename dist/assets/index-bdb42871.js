(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function xE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ow={exports:{}},rd={},aw={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sl=Symbol.for("react.element"),_E=Symbol.for("react.portal"),bE=Symbol.for("react.fragment"),EE=Symbol.for("react.strict_mode"),SE=Symbol.for("react.profiler"),TE=Symbol.for("react.provider"),IE=Symbol.for("react.context"),CE=Symbol.for("react.forward_ref"),kE=Symbol.for("react.suspense"),AE=Symbol.for("react.memo"),NE=Symbol.for("react.lazy"),Wg=Symbol.iterator;function PE(t){return t===null||typeof t!="object"?null:(t=Wg&&t[Wg]||t["@@iterator"],typeof t=="function"?t:null)}var lw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cw=Object.assign,uw={};function Mo(t,e,n){this.props=t,this.context=e,this.refs=uw,this.updater=n||lw}Mo.prototype.isReactComponent={};Mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function dw(){}dw.prototype=Mo.prototype;function Np(t,e,n){this.props=t,this.context=e,this.refs=uw,this.updater=n||lw}var Pp=Np.prototype=new dw;Pp.constructor=Np;cw(Pp,Mo.prototype);Pp.isPureReactComponent=!0;var Gg=Array.isArray,hw=Object.prototype.hasOwnProperty,Rp={current:null},fw={key:!0,ref:!0,__self:!0,__source:!0};function pw(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)hw.call(e,r)&&!fw.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var u=Array(a),d=0;d<a;d++)u[d]=arguments[d+2];s.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:Sl,type:t,key:i,ref:o,props:s,_owner:Rp.current}}function RE(t,e){return{$$typeof:Sl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sl}function jE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Kg=/\/+/g;function Yd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jE(""+t.key):e.toString(36)}function jc(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Sl:case _E:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Yd(o,0):r,Gg(s)?(n="",t!=null&&(n=t.replace(Kg,"$&/")+"/"),jc(s,e,n,"",function(d){return d})):s!=null&&(jp(s)&&(s=RE(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Kg,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Gg(t))for(var a=0;a<t.length;a++){i=t[a];var u=r+Yd(i,a);o+=jc(i,e,n,u,s)}else if(u=PE(t),typeof u=="function")for(t=u.call(t),a=0;!(i=t.next()).done;)i=i.value,u=r+Yd(i,a++),o+=jc(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function rc(t,e,n){if(t==null)return t;var r=[],s=0;return jc(t,r,"","",function(i){return e.call(n,i,s++)}),r}function ME(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Vt={current:null},Mc={transition:null},LE={ReactCurrentDispatcher:Vt,ReactCurrentBatchConfig:Mc,ReactCurrentOwner:Rp};function mw(){throw Error("act(...) is not supported in production builds of React.")}fe.Children={map:rc,forEach:function(t,e,n){rc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return rc(t,function(){e++}),e},toArray:function(t){return rc(t,function(e){return e})||[]},only:function(t){if(!jp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};fe.Component=Mo;fe.Fragment=bE;fe.Profiler=SE;fe.PureComponent=Np;fe.StrictMode=EE;fe.Suspense=kE;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LE;fe.act=mw;fe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=cw({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Rp.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)hw.call(e,u)&&!fw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var d=0;d<u;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:Sl,type:t.type,key:s,ref:i,props:r,_owner:o}};fe.createContext=function(t){return t={$$typeof:IE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:TE,_context:t},t.Consumer=t};fe.createElement=pw;fe.createFactory=function(t){var e=pw.bind(null,t);return e.type=t,e};fe.createRef=function(){return{current:null}};fe.forwardRef=function(t){return{$$typeof:CE,render:t}};fe.isValidElement=jp;fe.lazy=function(t){return{$$typeof:NE,_payload:{_status:-1,_result:t},_init:ME}};fe.memo=function(t,e){return{$$typeof:AE,type:t,compare:e===void 0?null:e}};fe.startTransition=function(t){var e=Mc.transition;Mc.transition={};try{t()}finally{Mc.transition=e}};fe.unstable_act=mw;fe.useCallback=function(t,e){return Vt.current.useCallback(t,e)};fe.useContext=function(t){return Vt.current.useContext(t)};fe.useDebugValue=function(){};fe.useDeferredValue=function(t){return Vt.current.useDeferredValue(t)};fe.useEffect=function(t,e){return Vt.current.useEffect(t,e)};fe.useId=function(){return Vt.current.useId()};fe.useImperativeHandle=function(t,e,n){return Vt.current.useImperativeHandle(t,e,n)};fe.useInsertionEffect=function(t,e){return Vt.current.useInsertionEffect(t,e)};fe.useLayoutEffect=function(t,e){return Vt.current.useLayoutEffect(t,e)};fe.useMemo=function(t,e){return Vt.current.useMemo(t,e)};fe.useReducer=function(t,e,n){return Vt.current.useReducer(t,e,n)};fe.useRef=function(t){return Vt.current.useRef(t)};fe.useState=function(t){return Vt.current.useState(t)};fe.useSyncExternalStore=function(t,e,n){return Vt.current.useSyncExternalStore(t,e,n)};fe.useTransition=function(){return Vt.current.useTransition()};fe.version="18.3.1";aw.exports=fe;var j=aw.exports;const Re=xE(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DE=j,OE=Symbol.for("react.element"),VE=Symbol.for("react.fragment"),FE=Object.prototype.hasOwnProperty,zE=DE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,UE={key:!0,ref:!0,__self:!0,__source:!0};function gw(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)FE.call(e,r)&&!UE.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:OE,type:t,key:i,ref:o,props:s,_owner:zE.current}}rd.Fragment=VE;rd.jsx=gw;rd.jsxs=gw;ow.exports=rd;var c=ow.exports,Zh={},yw={exports:{}},un={},vw={exports:{}},ww={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,B){var Q=D.length;D.push(B);e:for(;0<Q;){var oe=Q-1>>>1,re=D[oe];if(0<s(re,B))D[oe]=B,D[Q]=re,Q=oe;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var B=D[0],Q=D.pop();if(Q!==B){D[0]=Q;e:for(var oe=0,re=D.length,Ve=re>>>1;oe<Ve;){var Me=2*(oe+1)-1,Fe=D[Me],Le=Me+1,he=D[Le];if(0>s(Fe,Q))Le<re&&0>s(he,Fe)?(D[oe]=he,D[Le]=Q,oe=Le):(D[oe]=Fe,D[Me]=Q,oe=Me);else if(Le<re&&0>s(he,Q))D[oe]=he,D[Le]=Q,oe=Le;else break e}}return B}function s(D,B){var Q=D.sortIndex-B.sortIndex;return Q!==0?Q:D.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],d=[],h=1,p=null,m=3,b=!1,T=!1,P=!1,N=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var B=n(d);B!==null;){if(B.callback===null)r(d);else if(B.startTime<=D)r(d),B.sortIndex=B.expirationTime,e(u,B);else break;B=n(d)}}function I(D){if(P=!1,v(D),!T)if(n(u)!==null)T=!0,V(O);else{var B=n(d);B!==null&&F(I,B.startTime-D)}}function O(D,B){T=!1,P&&(P=!1,E(w),w=-1),b=!0;var Q=m;try{for(v(B),p=n(u);p!==null&&(!(p.expirationTime>B)||D&&!k());){var oe=p.callback;if(typeof oe=="function"){p.callback=null,m=p.priorityLevel;var re=oe(p.expirationTime<=B);B=t.unstable_now(),typeof re=="function"?p.callback=re:p===n(u)&&r(u),v(B)}else r(u);p=n(u)}if(p!==null)var Ve=!0;else{var Me=n(d);Me!==null&&F(I,Me.startTime-B),Ve=!1}return Ve}finally{p=null,m=Q,b=!1}}var L=!1,S=null,w=-1,x=5,C=-1;function k(){return!(t.unstable_now()-C<x)}function M(){if(S!==null){var D=t.unstable_now();C=D;var B=!0;try{B=S(!0,D)}finally{B?_():(L=!1,S=null)}}else L=!1}var _;if(typeof y=="function")_=function(){y(M)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,q=H.port2;H.port1.onmessage=M,_=function(){q.postMessage(null)}}else _=function(){N(M,0)};function V(D){S=D,L||(L=!0,_())}function F(D,B){w=N(function(){D(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){T||b||(T=!0,V(O))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(D){switch(m){case 1:case 2:case 3:var B=3;break;default:B=m}var Q=m;m=B;try{return D()}finally{m=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,B){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Q=m;m=D;try{return B()}finally{m=Q}},t.unstable_scheduleCallback=function(D,B,Q){var oe=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?oe+Q:oe):Q=oe,D){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Q+re,D={id:h++,callback:B,priorityLevel:D,startTime:Q,expirationTime:re,sortIndex:-1},Q>oe?(D.sortIndex=Q,e(d,D),n(u)===null&&D===n(d)&&(P?(E(w),w=-1):P=!0,F(I,Q-oe))):(D.sortIndex=re,e(u,D),T||b||(T=!0,V(O))),D},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(D){var B=m;return function(){var Q=m;m=B;try{return D.apply(this,arguments)}finally{m=Q}}}})(ww);vw.exports=ww;var BE=vw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $E=j,cn=BE;function Y(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xw=new Set,Ga={};function bi(t,e){go(t,e),go(t+"Capture",e)}function go(t,e){for(Ga[t]=e,t=0;t<e.length;t++)xw.add(e[t])}var vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ef=Object.prototype.hasOwnProperty,HE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qg={},Yg={};function qE(t){return ef.call(Yg,t)?!0:ef.call(Qg,t)?!1:HE.test(t)?Yg[t]=!0:(Qg[t]=!0,!1)}function WE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function GE(t,e,n,r){if(e===null||typeof e>"u"||WE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ft(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){bt[t]=new Ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];bt[e]=new Ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){bt[t]=new Ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){bt[t]=new Ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){bt[t]=new Ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){bt[t]=new Ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){bt[t]=new Ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){bt[t]=new Ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){bt[t]=new Ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var Mp=/[\-:]([a-z])/g;function Lp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Mp,Lp);bt[e]=new Ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Mp,Lp);bt[e]=new Ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Mp,Lp);bt[e]=new Ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){bt[t]=new Ft(t,1,!1,t.toLowerCase(),null,!1,!1)});bt.xlinkHref=new Ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){bt[t]=new Ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function Dp(t,e,n,r){var s=bt.hasOwnProperty(e)?bt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(GE(e,n,s,r)&&(n=null),r||s===null?qE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Tr=$E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sc=Symbol.for("react.element"),Ui=Symbol.for("react.portal"),Bi=Symbol.for("react.fragment"),Op=Symbol.for("react.strict_mode"),tf=Symbol.for("react.profiler"),_w=Symbol.for("react.provider"),bw=Symbol.for("react.context"),Vp=Symbol.for("react.forward_ref"),nf=Symbol.for("react.suspense"),rf=Symbol.for("react.suspense_list"),Fp=Symbol.for("react.memo"),$r=Symbol.for("react.lazy"),Ew=Symbol.for("react.offscreen"),Xg=Symbol.iterator;function oa(t){return t===null||typeof t!="object"?null:(t=Xg&&t[Xg]||t["@@iterator"],typeof t=="function"?t:null)}var $e=Object.assign,Xd;function ya(t){if(Xd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xd=e&&e[1]||""}return`
`+Xd+t}var Jd=!1;function Zd(t,e){if(!t||Jd)return"";Jd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Jd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ya(t):""}function KE(t){switch(t.tag){case 5:return ya(t.type);case 16:return ya("Lazy");case 13:return ya("Suspense");case 19:return ya("SuspenseList");case 0:case 2:case 15:return t=Zd(t.type,!1),t;case 11:return t=Zd(t.type.render,!1),t;case 1:return t=Zd(t.type,!0),t;default:return""}}function sf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bi:return"Fragment";case Ui:return"Portal";case tf:return"Profiler";case Op:return"StrictMode";case nf:return"Suspense";case rf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case bw:return(t.displayName||"Context")+".Consumer";case _w:return(t._context.displayName||"Context")+".Provider";case Vp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fp:return e=t.displayName||null,e!==null?e:sf(t.type)||"Memo";case $r:e=t._payload,t=t._init;try{return sf(t(e))}catch{}}return null}function QE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sf(e);case 8:return e===Op?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ws(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Sw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function YE(t){var e=Sw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ic(t){t._valueTracker||(t._valueTracker=YE(t))}function Tw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Sw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function su(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function of(t,e){var n=e.checked;return $e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Jg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ws(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Iw(t,e){e=e.checked,e!=null&&Dp(t,"checked",e,!1)}function af(t,e){Iw(t,e);var n=ws(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lf(t,e.type,n):e.hasOwnProperty("defaultValue")&&lf(t,e.type,ws(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Zg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lf(t,e,n){(e!=="number"||su(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var va=Array.isArray;function no(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ws(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function cf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Y(91));return $e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ey(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Y(92));if(va(n)){if(1<n.length)throw Error(Y(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ws(n)}}function Cw(t,e){var n=ws(e.value),r=ws(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ty(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function kw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?kw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oc,Aw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(oc=oc||document.createElement("div"),oc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=oc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ka(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ka={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},XE=["Webkit","ms","Moz","O"];Object.keys(ka).forEach(function(t){XE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ka[e]=ka[t]})});function Nw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ka.hasOwnProperty(t)&&ka[t]?(""+e).trim():e+"px"}function Pw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Nw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var JE=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function df(t,e){if(e){if(JE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Y(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Y(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Y(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Y(62))}}function hf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ff=null;function zp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pf=null,ro=null,so=null;function ny(t){if(t=Cl(t)){if(typeof pf!="function")throw Error(Y(280));var e=t.stateNode;e&&(e=ld(e),pf(t.stateNode,t.type,e))}}function Rw(t){ro?so?so.push(t):so=[t]:ro=t}function jw(){if(ro){var t=ro,e=so;if(so=ro=null,ny(t),e)for(t=0;t<e.length;t++)ny(e[t])}}function Mw(t,e){return t(e)}function Lw(){}var eh=!1;function Dw(t,e,n){if(eh)return t(e,n);eh=!0;try{return Mw(t,e,n)}finally{eh=!1,(ro!==null||so!==null)&&(Lw(),jw())}}function Qa(t,e){var n=t.stateNode;if(n===null)return null;var r=ld(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Y(231,e,typeof n));return n}var mf=!1;if(vr)try{var aa={};Object.defineProperty(aa,"passive",{get:function(){mf=!0}}),window.addEventListener("test",aa,aa),window.removeEventListener("test",aa,aa)}catch{mf=!1}function ZE(t,e,n,r,s,i,o,a,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(h){this.onError(h)}}var Aa=!1,iu=null,ou=!1,gf=null,eS={onError:function(t){Aa=!0,iu=t}};function tS(t,e,n,r,s,i,o,a,u){Aa=!1,iu=null,ZE.apply(eS,arguments)}function nS(t,e,n,r,s,i,o,a,u){if(tS.apply(this,arguments),Aa){if(Aa){var d=iu;Aa=!1,iu=null}else throw Error(Y(198));ou||(ou=!0,gf=d)}}function Ei(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ow(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ry(t){if(Ei(t)!==t)throw Error(Y(188))}function rS(t){var e=t.alternate;if(!e){if(e=Ei(t),e===null)throw Error(Y(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return ry(s),t;if(i===r)return ry(s),e;i=i.sibling}throw Error(Y(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(Y(189))}}if(n.alternate!==r)throw Error(Y(190))}if(n.tag!==3)throw Error(Y(188));return n.stateNode.current===n?t:e}function Vw(t){return t=rS(t),t!==null?Fw(t):null}function Fw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Fw(t);if(e!==null)return e;t=t.sibling}return null}var zw=cn.unstable_scheduleCallback,sy=cn.unstable_cancelCallback,sS=cn.unstable_shouldYield,iS=cn.unstable_requestPaint,Ke=cn.unstable_now,oS=cn.unstable_getCurrentPriorityLevel,Up=cn.unstable_ImmediatePriority,Uw=cn.unstable_UserBlockingPriority,au=cn.unstable_NormalPriority,aS=cn.unstable_LowPriority,Bw=cn.unstable_IdlePriority,sd=null,Wn=null;function lS(t){if(Wn&&typeof Wn.onCommitFiberRoot=="function")try{Wn.onCommitFiberRoot(sd,t,void 0,(t.current.flags&128)===128)}catch{}}var Nn=Math.clz32?Math.clz32:dS,cS=Math.log,uS=Math.LN2;function dS(t){return t>>>=0,t===0?32:31-(cS(t)/uS|0)|0}var ac=64,lc=4194304;function wa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function lu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=wa(a):(i&=o,i!==0&&(r=wa(i)))}else o=n&~s,o!==0?r=wa(o):i!==0&&(r=wa(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Nn(e),s=1<<n,r|=t[n],e&=~s;return r}function hS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Nn(i),a=1<<o,u=s[o];u===-1?(!(a&n)||a&r)&&(s[o]=hS(a,e)):u<=e&&(t.expiredLanes|=a),i&=~a}}function yf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $w(){var t=ac;return ac<<=1,!(ac&4194240)&&(ac=64),t}function th(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Tl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Nn(e),t[e]=n}function pS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Nn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Bp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Nn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Te=0;function Hw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var qw,$p,Ww,Gw,Kw,vf=!1,cc=[],ss=null,is=null,os=null,Ya=new Map,Xa=new Map,Wr=[],mS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function iy(t,e){switch(t){case"focusin":case"focusout":ss=null;break;case"dragenter":case"dragleave":is=null;break;case"mouseover":case"mouseout":os=null;break;case"pointerover":case"pointerout":Ya.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xa.delete(e.pointerId)}}function la(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Cl(e),e!==null&&$p(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function gS(t,e,n,r,s){switch(e){case"focusin":return ss=la(ss,t,e,n,r,s),!0;case"dragenter":return is=la(is,t,e,n,r,s),!0;case"mouseover":return os=la(os,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Ya.set(i,la(Ya.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Xa.set(i,la(Xa.get(i)||null,t,e,n,r,s)),!0}return!1}function Qw(t){var e=ri(t.target);if(e!==null){var n=Ei(e);if(n!==null){if(e=n.tag,e===13){if(e=Ow(n),e!==null){t.blockedOn=e,Kw(t.priority,function(){Ww(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ff=r,n.target.dispatchEvent(r),ff=null}else return e=Cl(n),e!==null&&$p(e),t.blockedOn=n,!1;e.shift()}return!0}function oy(t,e,n){Lc(t)&&n.delete(e)}function yS(){vf=!1,ss!==null&&Lc(ss)&&(ss=null),is!==null&&Lc(is)&&(is=null),os!==null&&Lc(os)&&(os=null),Ya.forEach(oy),Xa.forEach(oy)}function ca(t,e){t.blockedOn===e&&(t.blockedOn=null,vf||(vf=!0,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,yS)))}function Ja(t){function e(s){return ca(s,t)}if(0<cc.length){ca(cc[0],t);for(var n=1;n<cc.length;n++){var r=cc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ss!==null&&ca(ss,t),is!==null&&ca(is,t),os!==null&&ca(os,t),Ya.forEach(e),Xa.forEach(e),n=0;n<Wr.length;n++)r=Wr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Wr.length&&(n=Wr[0],n.blockedOn===null);)Qw(n),n.blockedOn===null&&Wr.shift()}var io=Tr.ReactCurrentBatchConfig,cu=!0;function vS(t,e,n,r){var s=Te,i=io.transition;io.transition=null;try{Te=1,Hp(t,e,n,r)}finally{Te=s,io.transition=i}}function wS(t,e,n,r){var s=Te,i=io.transition;io.transition=null;try{Te=4,Hp(t,e,n,r)}finally{Te=s,io.transition=i}}function Hp(t,e,n,r){if(cu){var s=wf(t,e,n,r);if(s===null)dh(t,e,r,uu,n),iy(t,r);else if(gS(s,t,e,n,r))r.stopPropagation();else if(iy(t,r),e&4&&-1<mS.indexOf(t)){for(;s!==null;){var i=Cl(s);if(i!==null&&qw(i),i=wf(t,e,n,r),i===null&&dh(t,e,r,uu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else dh(t,e,r,null,n)}}var uu=null;function wf(t,e,n,r){if(uu=null,t=zp(r),t=ri(t),t!==null)if(e=Ei(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ow(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return uu=t,null}function Yw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oS()){case Up:return 1;case Uw:return 4;case au:case aS:return 16;case Bw:return 536870912;default:return 16}default:return 16}}var Zr=null,qp=null,Dc=null;function Xw(){if(Dc)return Dc;var t,e=qp,n=e.length,r,s="value"in Zr?Zr.value:Zr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Dc=s.slice(t,1<r?1-r:void 0)}function Oc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function uc(){return!0}function ay(){return!1}function dn(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?uc:ay,this.isPropagationStopped=ay,this}return $e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=uc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=uc)},persist:function(){},isPersistent:uc}),e}var Lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wp=dn(Lo),Il=$e({},Lo,{view:0,detail:0}),xS=dn(Il),nh,rh,ua,id=$e({},Il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ua&&(ua&&t.type==="mousemove"?(nh=t.screenX-ua.screenX,rh=t.screenY-ua.screenY):rh=nh=0,ua=t),nh)},movementY:function(t){return"movementY"in t?t.movementY:rh}}),ly=dn(id),_S=$e({},id,{dataTransfer:0}),bS=dn(_S),ES=$e({},Il,{relatedTarget:0}),sh=dn(ES),SS=$e({},Lo,{animationName:0,elapsedTime:0,pseudoElement:0}),TS=dn(SS),IS=$e({},Lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),CS=dn(IS),kS=$e({},Lo,{data:0}),cy=dn(kS),AS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function RS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=PS[t])?!!e[t]:!1}function Gp(){return RS}var jS=$e({},Il,{key:function(t){if(t.key){var e=AS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Oc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?NS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gp,charCode:function(t){return t.type==="keypress"?Oc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Oc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),MS=dn(jS),LS=$e({},id,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uy=dn(LS),DS=$e({},Il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gp}),OS=dn(DS),VS=$e({},Lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),FS=dn(VS),zS=$e({},id,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),US=dn(zS),BS=[9,13,27,32],Kp=vr&&"CompositionEvent"in window,Na=null;vr&&"documentMode"in document&&(Na=document.documentMode);var $S=vr&&"TextEvent"in window&&!Na,Jw=vr&&(!Kp||Na&&8<Na&&11>=Na),dy=String.fromCharCode(32),hy=!1;function Zw(t,e){switch(t){case"keyup":return BS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function e1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $i=!1;function HS(t,e){switch(t){case"compositionend":return e1(e);case"keypress":return e.which!==32?null:(hy=!0,dy);case"textInput":return t=e.data,t===dy&&hy?null:t;default:return null}}function qS(t,e){if($i)return t==="compositionend"||!Kp&&Zw(t,e)?(t=Xw(),Dc=qp=Zr=null,$i=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jw&&e.locale!=="ko"?null:e.data;default:return null}}var WS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!WS[t.type]:e==="textarea"}function t1(t,e,n,r){Rw(r),e=du(e,"onChange"),0<e.length&&(n=new Wp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Pa=null,Za=null;function GS(t){h1(t,0)}function od(t){var e=Wi(t);if(Tw(e))return t}function KS(t,e){if(t==="change")return e}var n1=!1;if(vr){var ih;if(vr){var oh="oninput"in document;if(!oh){var py=document.createElement("div");py.setAttribute("oninput","return;"),oh=typeof py.oninput=="function"}ih=oh}else ih=!1;n1=ih&&(!document.documentMode||9<document.documentMode)}function my(){Pa&&(Pa.detachEvent("onpropertychange",r1),Za=Pa=null)}function r1(t){if(t.propertyName==="value"&&od(Za)){var e=[];t1(e,Za,t,zp(t)),Dw(GS,e)}}function QS(t,e,n){t==="focusin"?(my(),Pa=e,Za=n,Pa.attachEvent("onpropertychange",r1)):t==="focusout"&&my()}function YS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return od(Za)}function XS(t,e){if(t==="click")return od(e)}function JS(t,e){if(t==="input"||t==="change")return od(e)}function ZS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rn=typeof Object.is=="function"?Object.is:ZS;function el(t,e){if(Rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!ef.call(e,s)||!Rn(t[s],e[s]))return!1}return!0}function gy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yy(t,e){var n=gy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gy(n)}}function s1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?s1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function i1(){for(var t=window,e=su();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=su(t.document)}return e}function Qp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function eT(t){var e=i1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&s1(n.ownerDocument.documentElement,n)){if(r!==null&&Qp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=yy(n,i);var o=yy(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var tT=vr&&"documentMode"in document&&11>=document.documentMode,Hi=null,xf=null,Ra=null,_f=!1;function vy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_f||Hi==null||Hi!==su(r)||(r=Hi,"selectionStart"in r&&Qp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ra&&el(Ra,r)||(Ra=r,r=du(xf,"onSelect"),0<r.length&&(e=new Wp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Hi)))}function dc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qi={animationend:dc("Animation","AnimationEnd"),animationiteration:dc("Animation","AnimationIteration"),animationstart:dc("Animation","AnimationStart"),transitionend:dc("Transition","TransitionEnd")},ah={},o1={};vr&&(o1=document.createElement("div").style,"AnimationEvent"in window||(delete qi.animationend.animation,delete qi.animationiteration.animation,delete qi.animationstart.animation),"TransitionEvent"in window||delete qi.transitionend.transition);function ad(t){if(ah[t])return ah[t];if(!qi[t])return t;var e=qi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in o1)return ah[t]=e[n];return t}var a1=ad("animationend"),l1=ad("animationiteration"),c1=ad("animationstart"),u1=ad("transitionend"),d1=new Map,wy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cs(t,e){d1.set(t,e),bi(e,[t])}for(var lh=0;lh<wy.length;lh++){var ch=wy[lh],nT=ch.toLowerCase(),rT=ch[0].toUpperCase()+ch.slice(1);Cs(nT,"on"+rT)}Cs(a1,"onAnimationEnd");Cs(l1,"onAnimationIteration");Cs(c1,"onAnimationStart");Cs("dblclick","onDoubleClick");Cs("focusin","onFocus");Cs("focusout","onBlur");Cs(u1,"onTransitionEnd");go("onMouseEnter",["mouseout","mouseover"]);go("onMouseLeave",["mouseout","mouseover"]);go("onPointerEnter",["pointerout","pointerover"]);go("onPointerLeave",["pointerout","pointerover"]);bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bi("onBeforeInput",["compositionend","keypress","textInput","paste"]);bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sT=new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));function xy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,nS(r,e,void 0,t),t.currentTarget=null}function h1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,d=a.currentTarget;if(a=a.listener,u!==i&&s.isPropagationStopped())break e;xy(s,a,d),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,d=a.currentTarget,a=a.listener,u!==i&&s.isPropagationStopped())break e;xy(s,a,d),i=u}}}if(ou)throw t=gf,ou=!1,gf=null,t}function Pe(t,e){var n=e[If];n===void 0&&(n=e[If]=new Set);var r=t+"__bubble";n.has(r)||(f1(e,t,2,!1),n.add(r))}function uh(t,e,n){var r=0;e&&(r|=4),f1(n,t,r,e)}var hc="_reactListening"+Math.random().toString(36).slice(2);function tl(t){if(!t[hc]){t[hc]=!0,xw.forEach(function(n){n!=="selectionchange"&&(sT.has(n)||uh(n,!1,t),uh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[hc]||(e[hc]=!0,uh("selectionchange",!1,e))}}function f1(t,e,n,r){switch(Yw(e)){case 1:var s=vS;break;case 4:s=wS;break;default:s=Hp}n=s.bind(null,e,n,t),s=void 0,!mf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function dh(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;a!==null;){if(o=ri(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}Dw(function(){var d=i,h=zp(n),p=[];e:{var m=d1.get(t);if(m!==void 0){var b=Wp,T=t;switch(t){case"keypress":if(Oc(n)===0)break e;case"keydown":case"keyup":b=MS;break;case"focusin":T="focus",b=sh;break;case"focusout":T="blur",b=sh;break;case"beforeblur":case"afterblur":b=sh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=ly;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=bS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=OS;break;case a1:case l1:case c1:b=TS;break;case u1:b=FS;break;case"scroll":b=xS;break;case"wheel":b=US;break;case"copy":case"cut":case"paste":b=CS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=uy}var P=(e&4)!==0,N=!P&&t==="scroll",E=P?m!==null?m+"Capture":null:m;P=[];for(var y=d,v;y!==null;){v=y;var I=v.stateNode;if(v.tag===5&&I!==null&&(v=I,E!==null&&(I=Qa(y,E),I!=null&&P.push(nl(y,I,v)))),N)break;y=y.return}0<P.length&&(m=new b(m,T,null,n,h),p.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",m&&n!==ff&&(T=n.relatedTarget||n.fromElement)&&(ri(T)||T[wr]))break e;if((b||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,b?(T=n.relatedTarget||n.toElement,b=d,T=T?ri(T):null,T!==null&&(N=Ei(T),T!==N||T.tag!==5&&T.tag!==6)&&(T=null)):(b=null,T=d),b!==T)){if(P=ly,I="onMouseLeave",E="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(P=uy,I="onPointerLeave",E="onPointerEnter",y="pointer"),N=b==null?m:Wi(b),v=T==null?m:Wi(T),m=new P(I,y+"leave",b,n,h),m.target=N,m.relatedTarget=v,I=null,ri(h)===d&&(P=new P(E,y+"enter",T,n,h),P.target=v,P.relatedTarget=N,I=P),N=I,b&&T)t:{for(P=b,E=T,y=0,v=P;v;v=ji(v))y++;for(v=0,I=E;I;I=ji(I))v++;for(;0<y-v;)P=ji(P),y--;for(;0<v-y;)E=ji(E),v--;for(;y--;){if(P===E||E!==null&&P===E.alternate)break t;P=ji(P),E=ji(E)}P=null}else P=null;b!==null&&_y(p,m,b,P,!1),T!==null&&N!==null&&_y(p,N,T,P,!0)}}e:{if(m=d?Wi(d):window,b=m.nodeName&&m.nodeName.toLowerCase(),b==="select"||b==="input"&&m.type==="file")var O=KS;else if(fy(m))if(n1)O=JS;else{O=YS;var L=QS}else(b=m.nodeName)&&b.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(O=XS);if(O&&(O=O(t,d))){t1(p,O,n,h);break e}L&&L(t,m,d),t==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&lf(m,"number",m.value)}switch(L=d?Wi(d):window,t){case"focusin":(fy(L)||L.contentEditable==="true")&&(Hi=L,xf=d,Ra=null);break;case"focusout":Ra=xf=Hi=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,vy(p,n,h);break;case"selectionchange":if(tT)break;case"keydown":case"keyup":vy(p,n,h)}var S;if(Kp)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else $i?Zw(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(Jw&&n.locale!=="ko"&&($i||w!=="onCompositionStart"?w==="onCompositionEnd"&&$i&&(S=Xw()):(Zr=h,qp="value"in Zr?Zr.value:Zr.textContent,$i=!0)),L=du(d,w),0<L.length&&(w=new cy(w,t,null,n,h),p.push({event:w,listeners:L}),S?w.data=S:(S=e1(n),S!==null&&(w.data=S)))),(S=$S?HS(t,n):qS(t,n))&&(d=du(d,"onBeforeInput"),0<d.length&&(h=new cy("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:d}),h.data=S))}h1(p,e)})}function nl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function du(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Qa(t,n),i!=null&&r.unshift(nl(t,i,s)),i=Qa(t,e),i!=null&&r.push(nl(t,i,s))),t=t.return}return r}function ji(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _y(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,d=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&d!==null&&(a=d,s?(u=Qa(n,i),u!=null&&o.unshift(nl(n,u,a))):s||(u=Qa(n,i),u!=null&&o.push(nl(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var iT=/\r\n?/g,oT=/\u0000|\uFFFD/g;function by(t){return(typeof t=="string"?t:""+t).replace(iT,`
`).replace(oT,"")}function fc(t,e,n){if(e=by(e),by(t)!==e&&n)throw Error(Y(425))}function hu(){}var bf=null,Ef=null;function Sf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tf=typeof setTimeout=="function"?setTimeout:void 0,aT=typeof clearTimeout=="function"?clearTimeout:void 0,Ey=typeof Promise=="function"?Promise:void 0,lT=typeof queueMicrotask=="function"?queueMicrotask:typeof Ey<"u"?function(t){return Ey.resolve(null).then(t).catch(cT)}:Tf;function cT(t){setTimeout(function(){throw t})}function hh(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Ja(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Ja(e)}function as(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Do=Math.random().toString(36).slice(2),Hn="__reactFiber$"+Do,rl="__reactProps$"+Do,wr="__reactContainer$"+Do,If="__reactEvents$"+Do,uT="__reactListeners$"+Do,dT="__reactHandles$"+Do;function ri(t){var e=t[Hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wr]||n[Hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sy(t);t!==null;){if(n=t[Hn])return n;t=Sy(t)}return e}t=n,n=t.parentNode}return null}function Cl(t){return t=t[Hn]||t[wr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Y(33))}function ld(t){return t[rl]||null}var Cf=[],Gi=-1;function ks(t){return{current:t}}function je(t){0>Gi||(t.current=Cf[Gi],Cf[Gi]=null,Gi--)}function Ne(t,e){Gi++,Cf[Gi]=t.current,t.current=e}var xs={},Rt=ks(xs),Yt=ks(!1),hi=xs;function yo(t,e){var n=t.type.contextTypes;if(!n)return xs;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Xt(t){return t=t.childContextTypes,t!=null}function fu(){je(Yt),je(Rt)}function Ty(t,e,n){if(Rt.current!==xs)throw Error(Y(168));Ne(Rt,e),Ne(Yt,n)}function p1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(Y(108,QE(t)||"Unknown",s));return $e({},n,r)}function pu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xs,hi=Rt.current,Ne(Rt,t),Ne(Yt,Yt.current),!0}function Iy(t,e,n){var r=t.stateNode;if(!r)throw Error(Y(169));n?(t=p1(t,e,hi),r.__reactInternalMemoizedMergedChildContext=t,je(Yt),je(Rt),Ne(Rt,t)):je(Yt),Ne(Yt,n)}var cr=null,cd=!1,fh=!1;function m1(t){cr===null?cr=[t]:cr.push(t)}function hT(t){cd=!0,m1(t)}function As(){if(!fh&&cr!==null){fh=!0;var t=0,e=Te;try{var n=cr;for(Te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}cr=null,cd=!1}catch(s){throw cr!==null&&(cr=cr.slice(t+1)),zw(Up,As),s}finally{Te=e,fh=!1}}return null}var Ki=[],Qi=0,mu=null,gu=0,pn=[],mn=0,fi=null,hr=1,fr="";function Zs(t,e){Ki[Qi++]=gu,Ki[Qi++]=mu,mu=t,gu=e}function g1(t,e,n){pn[mn++]=hr,pn[mn++]=fr,pn[mn++]=fi,fi=t;var r=hr;t=fr;var s=32-Nn(r)-1;r&=~(1<<s),n+=1;var i=32-Nn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,hr=1<<32-Nn(e)+s|n<<s|r,fr=i+t}else hr=1<<i|n<<s|r,fr=t}function Yp(t){t.return!==null&&(Zs(t,1),g1(t,1,0))}function Xp(t){for(;t===mu;)mu=Ki[--Qi],Ki[Qi]=null,gu=Ki[--Qi],Ki[Qi]=null;for(;t===fi;)fi=pn[--mn],pn[mn]=null,fr=pn[--mn],pn[mn]=null,hr=pn[--mn],pn[mn]=null}var ln=null,an=null,De=!1,In=null;function y1(t,e){var n=yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Cy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ln=t,an=as(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ln=t,an=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fi!==null?{id:hr,overflow:fr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ln=t,an=null,!0):!1;default:return!1}}function kf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Af(t){if(De){var e=an;if(e){var n=e;if(!Cy(t,e)){if(kf(t))throw Error(Y(418));e=as(n.nextSibling);var r=ln;e&&Cy(t,e)?y1(r,n):(t.flags=t.flags&-4097|2,De=!1,ln=t)}}else{if(kf(t))throw Error(Y(418));t.flags=t.flags&-4097|2,De=!1,ln=t}}}function ky(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ln=t}function pc(t){if(t!==ln)return!1;if(!De)return ky(t),De=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sf(t.type,t.memoizedProps)),e&&(e=an)){if(kf(t))throw v1(),Error(Y(418));for(;e;)y1(t,e),e=as(e.nextSibling)}if(ky(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Y(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){an=as(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}an=null}}else an=ln?as(t.stateNode.nextSibling):null;return!0}function v1(){for(var t=an;t;)t=as(t.nextSibling)}function vo(){an=ln=null,De=!1}function Jp(t){In===null?In=[t]:In.push(t)}var fT=Tr.ReactCurrentBatchConfig;function da(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Y(309));var r=n.stateNode}if(!r)throw Error(Y(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(Y(284));if(!n._owner)throw Error(Y(290,t))}return t}function mc(t,e){throw t=Object.prototype.toString.call(e),Error(Y(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ay(t){var e=t._init;return e(t._payload)}function w1(t){function e(E,y){if(t){var v=E.deletions;v===null?(E.deletions=[y],E.flags|=16):v.push(y)}}function n(E,y){if(!t)return null;for(;y!==null;)e(E,y),y=y.sibling;return null}function r(E,y){for(E=new Map;y!==null;)y.key!==null?E.set(y.key,y):E.set(y.index,y),y=y.sibling;return E}function s(E,y){return E=ds(E,y),E.index=0,E.sibling=null,E}function i(E,y,v){return E.index=v,t?(v=E.alternate,v!==null?(v=v.index,v<y?(E.flags|=2,y):v):(E.flags|=2,y)):(E.flags|=1048576,y)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,y,v,I){return y===null||y.tag!==6?(y=xh(v,E.mode,I),y.return=E,y):(y=s(y,v),y.return=E,y)}function u(E,y,v,I){var O=v.type;return O===Bi?h(E,y,v.props.children,I,v.key):y!==null&&(y.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===$r&&Ay(O)===y.type)?(I=s(y,v.props),I.ref=da(E,y,v),I.return=E,I):(I=Hc(v.type,v.key,v.props,null,E.mode,I),I.ref=da(E,y,v),I.return=E,I)}function d(E,y,v,I){return y===null||y.tag!==4||y.stateNode.containerInfo!==v.containerInfo||y.stateNode.implementation!==v.implementation?(y=_h(v,E.mode,I),y.return=E,y):(y=s(y,v.children||[]),y.return=E,y)}function h(E,y,v,I,O){return y===null||y.tag!==7?(y=li(v,E.mode,I,O),y.return=E,y):(y=s(y,v),y.return=E,y)}function p(E,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return y=xh(""+y,E.mode,v),y.return=E,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case sc:return v=Hc(y.type,y.key,y.props,null,E.mode,v),v.ref=da(E,null,y),v.return=E,v;case Ui:return y=_h(y,E.mode,v),y.return=E,y;case $r:var I=y._init;return p(E,I(y._payload),v)}if(va(y)||oa(y))return y=li(y,E.mode,v,null),y.return=E,y;mc(E,y)}return null}function m(E,y,v,I){var O=y!==null?y.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return O!==null?null:a(E,y,""+v,I);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case sc:return v.key===O?u(E,y,v,I):null;case Ui:return v.key===O?d(E,y,v,I):null;case $r:return O=v._init,m(E,y,O(v._payload),I)}if(va(v)||oa(v))return O!==null?null:h(E,y,v,I,null);mc(E,v)}return null}function b(E,y,v,I,O){if(typeof I=="string"&&I!==""||typeof I=="number")return E=E.get(v)||null,a(y,E,""+I,O);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case sc:return E=E.get(I.key===null?v:I.key)||null,u(y,E,I,O);case Ui:return E=E.get(I.key===null?v:I.key)||null,d(y,E,I,O);case $r:var L=I._init;return b(E,y,v,L(I._payload),O)}if(va(I)||oa(I))return E=E.get(v)||null,h(y,E,I,O,null);mc(y,I)}return null}function T(E,y,v,I){for(var O=null,L=null,S=y,w=y=0,x=null;S!==null&&w<v.length;w++){S.index>w?(x=S,S=null):x=S.sibling;var C=m(E,S,v[w],I);if(C===null){S===null&&(S=x);break}t&&S&&C.alternate===null&&e(E,S),y=i(C,y,w),L===null?O=C:L.sibling=C,L=C,S=x}if(w===v.length)return n(E,S),De&&Zs(E,w),O;if(S===null){for(;w<v.length;w++)S=p(E,v[w],I),S!==null&&(y=i(S,y,w),L===null?O=S:L.sibling=S,L=S);return De&&Zs(E,w),O}for(S=r(E,S);w<v.length;w++)x=b(S,E,w,v[w],I),x!==null&&(t&&x.alternate!==null&&S.delete(x.key===null?w:x.key),y=i(x,y,w),L===null?O=x:L.sibling=x,L=x);return t&&S.forEach(function(k){return e(E,k)}),De&&Zs(E,w),O}function P(E,y,v,I){var O=oa(v);if(typeof O!="function")throw Error(Y(150));if(v=O.call(v),v==null)throw Error(Y(151));for(var L=O=null,S=y,w=y=0,x=null,C=v.next();S!==null&&!C.done;w++,C=v.next()){S.index>w?(x=S,S=null):x=S.sibling;var k=m(E,S,C.value,I);if(k===null){S===null&&(S=x);break}t&&S&&k.alternate===null&&e(E,S),y=i(k,y,w),L===null?O=k:L.sibling=k,L=k,S=x}if(C.done)return n(E,S),De&&Zs(E,w),O;if(S===null){for(;!C.done;w++,C=v.next())C=p(E,C.value,I),C!==null&&(y=i(C,y,w),L===null?O=C:L.sibling=C,L=C);return De&&Zs(E,w),O}for(S=r(E,S);!C.done;w++,C=v.next())C=b(S,E,w,C.value,I),C!==null&&(t&&C.alternate!==null&&S.delete(C.key===null?w:C.key),y=i(C,y,w),L===null?O=C:L.sibling=C,L=C);return t&&S.forEach(function(M){return e(E,M)}),De&&Zs(E,w),O}function N(E,y,v,I){if(typeof v=="object"&&v!==null&&v.type===Bi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case sc:e:{for(var O=v.key,L=y;L!==null;){if(L.key===O){if(O=v.type,O===Bi){if(L.tag===7){n(E,L.sibling),y=s(L,v.props.children),y.return=E,E=y;break e}}else if(L.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===$r&&Ay(O)===L.type){n(E,L.sibling),y=s(L,v.props),y.ref=da(E,L,v),y.return=E,E=y;break e}n(E,L);break}else e(E,L);L=L.sibling}v.type===Bi?(y=li(v.props.children,E.mode,I,v.key),y.return=E,E=y):(I=Hc(v.type,v.key,v.props,null,E.mode,I),I.ref=da(E,y,v),I.return=E,E=I)}return o(E);case Ui:e:{for(L=v.key;y!==null;){if(y.key===L)if(y.tag===4&&y.stateNode.containerInfo===v.containerInfo&&y.stateNode.implementation===v.implementation){n(E,y.sibling),y=s(y,v.children||[]),y.return=E,E=y;break e}else{n(E,y);break}else e(E,y);y=y.sibling}y=_h(v,E.mode,I),y.return=E,E=y}return o(E);case $r:return L=v._init,N(E,y,L(v._payload),I)}if(va(v))return T(E,y,v,I);if(oa(v))return P(E,y,v,I);mc(E,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,y!==null&&y.tag===6?(n(E,y.sibling),y=s(y,v),y.return=E,E=y):(n(E,y),y=xh(v,E.mode,I),y.return=E,E=y),o(E)):n(E,y)}return N}var wo=w1(!0),x1=w1(!1),yu=ks(null),vu=null,Yi=null,Zp=null;function em(){Zp=Yi=vu=null}function tm(t){var e=yu.current;je(yu),t._currentValue=e}function Nf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function oo(t,e){vu=t,Zp=Yi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function xn(t){var e=t._currentValue;if(Zp!==t)if(t={context:t,memoizedValue:e,next:null},Yi===null){if(vu===null)throw Error(Y(308));Yi=t,vu.dependencies={lanes:0,firstContext:t}}else Yi=Yi.next=t;return e}var si=null;function nm(t){si===null?si=[t]:si.push(t)}function _1(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,nm(e)):(n.next=s.next,s.next=n),e.interleaved=n,xr(t,r)}function xr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hr=!1;function rm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function b1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ls(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,be&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,xr(t,n)}return s=r.interleaved,s===null?(e.next=e,nm(r)):(e.next=s.next,s.next=e),r.interleaved=e,xr(t,n)}function Vc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bp(t,n)}}function Ny(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wu(t,e,n,r){var s=t.updateQueue;Hr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var u=a,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=d:a.next=d,h.lastBaseUpdate=u))}if(i!==null){var p=s.baseState;o=0,h=d=u=null,a=i;do{var m=a.lane,b=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:b,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,P=a;switch(m=e,b=n,P.tag){case 1:if(T=P.payload,typeof T=="function"){p=T.call(b,p,m);break e}p=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=P.payload,m=typeof T=="function"?T.call(b,p,m):T,m==null)break e;p=$e({},p,m);break e;case 2:Hr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[a]:m.push(a))}else b={eventTime:b,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(d=h=b,u=p):h=h.next=b,o|=m;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;m=a,a=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(1);if(h===null&&(u=p),s.baseState=u,s.firstBaseUpdate=d,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);mi|=o,t.lanes=o,t.memoizedState=p}}function Py(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(Y(191,s));s.call(r)}}}var kl={},Gn=ks(kl),sl=ks(kl),il=ks(kl);function ii(t){if(t===kl)throw Error(Y(174));return t}function sm(t,e){switch(Ne(il,e),Ne(sl,t),Ne(Gn,kl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uf(e,t)}je(Gn),Ne(Gn,e)}function xo(){je(Gn),je(sl),je(il)}function E1(t){ii(il.current);var e=ii(Gn.current),n=uf(e,t.type);e!==n&&(Ne(sl,t),Ne(Gn,n))}function im(t){sl.current===t&&(je(Gn),je(sl))}var Ue=ks(0);function xu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ph=[];function om(){for(var t=0;t<ph.length;t++)ph[t]._workInProgressVersionPrimary=null;ph.length=0}var Fc=Tr.ReactCurrentDispatcher,mh=Tr.ReactCurrentBatchConfig,pi=0,Be=null,rt=null,ft=null,_u=!1,ja=!1,ol=0,pT=0;function It(){throw Error(Y(321))}function am(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Rn(t[n],e[n]))return!1;return!0}function lm(t,e,n,r,s,i){if(pi=i,Be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fc.current=t===null||t.memoizedState===null?vT:wT,t=n(r,s),ja){i=0;do{if(ja=!1,ol=0,25<=i)throw Error(Y(301));i+=1,ft=rt=null,e.updateQueue=null,Fc.current=xT,t=n(r,s)}while(ja)}if(Fc.current=bu,e=rt!==null&&rt.next!==null,pi=0,ft=rt=Be=null,_u=!1,e)throw Error(Y(300));return t}function cm(){var t=ol!==0;return ol=0,t}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?Be.memoizedState=ft=t:ft=ft.next=t,ft}function _n(){if(rt===null){var t=Be.alternate;t=t!==null?t.memoizedState:null}else t=rt.next;var e=ft===null?Be.memoizedState:ft.next;if(e!==null)ft=e,rt=t;else{if(t===null)throw Error(Y(310));rt=t,t={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},ft===null?Be.memoizedState=ft=t:ft=ft.next=t}return ft}function al(t,e){return typeof e=="function"?e(t):e}function gh(t){var e=_n(),n=e.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=t;var r=rt,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,u=null,d=i;do{var h=d.lane;if((pi&h)===h)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var p={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(a=u=p,o=r):u=u.next=p,Be.lanes|=h,mi|=h}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=a,Rn(r,e.memoizedState)||(Qt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Be.lanes|=i,mi|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yh(t){var e=_n(),n=e.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Rn(i,e.memoizedState)||(Qt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function S1(){}function T1(t,e){var n=Be,r=_n(),s=e(),i=!Rn(r.memoizedState,s);if(i&&(r.memoizedState=s,Qt=!0),r=r.queue,um(k1.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||ft!==null&&ft.memoizedState.tag&1){if(n.flags|=2048,ll(9,C1.bind(null,n,r,s,e),void 0,null),mt===null)throw Error(Y(349));pi&30||I1(n,e,s)}return s}function I1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function C1(t,e,n,r){e.value=n,e.getSnapshot=r,A1(e)&&N1(t)}function k1(t,e,n){return n(function(){A1(e)&&N1(t)})}function A1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Rn(t,n)}catch{return!0}}function N1(t){var e=xr(t,1);e!==null&&Pn(e,t,1,-1)}function Ry(t){var e=Bn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:al,lastRenderedState:t},e.queue=t,t=t.dispatch=yT.bind(null,Be,t),[e.memoizedState,t]}function ll(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function P1(){return _n().memoizedState}function zc(t,e,n,r){var s=Bn();Be.flags|=t,s.memoizedState=ll(1|e,n,void 0,r===void 0?null:r)}function ud(t,e,n,r){var s=_n();r=r===void 0?null:r;var i=void 0;if(rt!==null){var o=rt.memoizedState;if(i=o.destroy,r!==null&&am(r,o.deps)){s.memoizedState=ll(e,n,i,r);return}}Be.flags|=t,s.memoizedState=ll(1|e,n,i,r)}function jy(t,e){return zc(8390656,8,t,e)}function um(t,e){return ud(2048,8,t,e)}function R1(t,e){return ud(4,2,t,e)}function j1(t,e){return ud(4,4,t,e)}function M1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function L1(t,e,n){return n=n!=null?n.concat([t]):null,ud(4,4,M1.bind(null,e,t),n)}function dm(){}function D1(t,e){var n=_n();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&am(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function O1(t,e){var n=_n();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&am(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function V1(t,e,n){return pi&21?(Rn(n,e)||(n=$w(),Be.lanes|=n,mi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function mT(t,e){var n=Te;Te=n!==0&&4>n?n:4,t(!0);var r=mh.transition;mh.transition={};try{t(!1),e()}finally{Te=n,mh.transition=r}}function F1(){return _n().memoizedState}function gT(t,e,n){var r=us(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},z1(t))U1(e,n);else if(n=_1(t,e,n,r),n!==null){var s=Ot();Pn(n,t,r,s),B1(n,e,r)}}function yT(t,e,n){var r=us(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(z1(t))U1(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,Rn(a,o)){var u=e.interleaved;u===null?(s.next=s,nm(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=_1(t,e,s,r),n!==null&&(s=Ot(),Pn(n,t,r,s),B1(n,e,r))}}function z1(t){var e=t.alternate;return t===Be||e!==null&&e===Be}function U1(t,e){ja=_u=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function B1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bp(t,n)}}var bu={readContext:xn,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},vT={readContext:xn,useCallback:function(t,e){return Bn().memoizedState=[t,e===void 0?null:e],t},useContext:xn,useEffect:jy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,zc(4194308,4,M1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zc(4194308,4,t,e)},useInsertionEffect:function(t,e){return zc(4,2,t,e)},useMemo:function(t,e){var n=Bn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Bn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=gT.bind(null,Be,t),[r.memoizedState,t]},useRef:function(t){var e=Bn();return t={current:t},e.memoizedState=t},useState:Ry,useDebugValue:dm,useDeferredValue:function(t){return Bn().memoizedState=t},useTransition:function(){var t=Ry(!1),e=t[0];return t=mT.bind(null,t[1]),Bn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Be,s=Bn();if(De){if(n===void 0)throw Error(Y(407));n=n()}else{if(n=e(),mt===null)throw Error(Y(349));pi&30||I1(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,jy(k1.bind(null,r,i,t),[t]),r.flags|=2048,ll(9,C1.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Bn(),e=mt.identifierPrefix;if(De){var n=fr,r=hr;n=(r&~(1<<32-Nn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ol++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=pT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wT={readContext:xn,useCallback:D1,useContext:xn,useEffect:um,useImperativeHandle:L1,useInsertionEffect:R1,useLayoutEffect:j1,useMemo:O1,useReducer:gh,useRef:P1,useState:function(){return gh(al)},useDebugValue:dm,useDeferredValue:function(t){var e=_n();return V1(e,rt.memoizedState,t)},useTransition:function(){var t=gh(al)[0],e=_n().memoizedState;return[t,e]},useMutableSource:S1,useSyncExternalStore:T1,useId:F1,unstable_isNewReconciler:!1},xT={readContext:xn,useCallback:D1,useContext:xn,useEffect:um,useImperativeHandle:L1,useInsertionEffect:R1,useLayoutEffect:j1,useMemo:O1,useReducer:yh,useRef:P1,useState:function(){return yh(al)},useDebugValue:dm,useDeferredValue:function(t){var e=_n();return rt===null?e.memoizedState=t:V1(e,rt.memoizedState,t)},useTransition:function(){var t=yh(al)[0],e=_n().memoizedState;return[t,e]},useMutableSource:S1,useSyncExternalStore:T1,useId:F1,unstable_isNewReconciler:!1};function Sn(t,e){if(t&&t.defaultProps){e=$e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Pf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:$e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dd={isMounted:function(t){return(t=t._reactInternals)?Ei(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ot(),s=us(t),i=gr(r,s);i.payload=e,n!=null&&(i.callback=n),e=ls(t,i,s),e!==null&&(Pn(e,t,s,r),Vc(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ot(),s=us(t),i=gr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=ls(t,i,s),e!==null&&(Pn(e,t,s,r),Vc(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ot(),r=us(t),s=gr(n,r);s.tag=2,e!=null&&(s.callback=e),e=ls(t,s,r),e!==null&&(Pn(e,t,r,n),Vc(e,t,r))}};function My(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!el(n,r)||!el(s,i):!0}function $1(t,e,n){var r=!1,s=xs,i=e.contextType;return typeof i=="object"&&i!==null?i=xn(i):(s=Xt(e)?hi:Rt.current,r=e.contextTypes,i=(r=r!=null)?yo(t,s):xs),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Ly(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&dd.enqueueReplaceState(e,e.state,null)}function Rf(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},rm(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=xn(i):(i=Xt(e)?hi:Rt.current,s.context=yo(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Pf(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&dd.enqueueReplaceState(s,s.state,null),wu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function _o(t,e){try{var n="",r=e;do n+=KE(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function vh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function jf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _T=typeof WeakMap=="function"?WeakMap:Map;function H1(t,e,n){n=gr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Su||(Su=!0,$f=r),jf(t,e)},n}function q1(t,e,n){n=gr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){jf(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){jf(t,e),typeof r!="function"&&(cs===null?cs=new Set([this]):cs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Dy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new _T;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=LT.bind(null,t,e,n),e.then(t,t))}function Oy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vy(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gr(-1,1),e.tag=2,ls(n,e,1))),n.lanes|=1),t)}var bT=Tr.ReactCurrentOwner,Qt=!1;function Dt(t,e,n,r){e.child=t===null?x1(e,null,n,r):wo(e,t.child,n,r)}function Fy(t,e,n,r,s){n=n.render;var i=e.ref;return oo(e,s),r=lm(t,e,n,r,i,s),n=cm(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,_r(t,e,s)):(De&&n&&Yp(e),e.flags|=1,Dt(t,e,r,s),e.child)}function zy(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!wm(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,W1(t,e,i,r,s)):(t=Hc(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:el,n(o,r)&&t.ref===e.ref)return _r(t,e,s)}return e.flags|=1,t=ds(i,r),t.ref=e.ref,t.return=e,e.child=t}function W1(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(el(i,r)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,_r(t,e,s)}return Mf(t,e,n,r,s)}function G1(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(Ji,rn),rn|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ne(Ji,rn),rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ne(Ji,rn),rn|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ne(Ji,rn),rn|=r;return Dt(t,e,s,n),e.child}function K1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mf(t,e,n,r,s){var i=Xt(n)?hi:Rt.current;return i=yo(e,i),oo(e,s),n=lm(t,e,n,r,i,s),r=cm(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,_r(t,e,s)):(De&&r&&Yp(e),e.flags|=1,Dt(t,e,n,s),e.child)}function Uy(t,e,n,r,s){if(Xt(n)){var i=!0;pu(e)}else i=!1;if(oo(e,s),e.stateNode===null)Uc(t,e),$1(e,n,r),Rf(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=xn(d):(d=Xt(n)?hi:Rt.current,d=yo(e,d));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==d)&&Ly(e,o,r,d),Hr=!1;var m=e.memoizedState;o.state=m,wu(e,r,o,s),u=e.memoizedState,a!==r||m!==u||Yt.current||Hr?(typeof h=="function"&&(Pf(e,n,h,r),u=e.memoizedState),(a=Hr||My(e,n,a,r,m,u,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,b1(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:Sn(e.type,a),o.props=d,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=xn(u):(u=Xt(n)?hi:Rt.current,u=yo(e,u));var b=n.getDerivedStateFromProps;(h=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==u)&&Ly(e,o,r,u),Hr=!1,m=e.memoizedState,o.state=m,wu(e,r,o,s);var T=e.memoizedState;a!==p||m!==T||Yt.current||Hr?(typeof b=="function"&&(Pf(e,n,b,r),T=e.memoizedState),(d=Hr||My(e,n,d,r,m,T,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Lf(t,e,n,r,i,s)}function Lf(t,e,n,r,s,i){K1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Iy(e,n,!1),_r(t,e,i);r=e.stateNode,bT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=wo(e,t.child,null,i),e.child=wo(e,null,a,i)):Dt(t,e,a,i),e.memoizedState=r.state,s&&Iy(e,n,!0),e.child}function Q1(t){var e=t.stateNode;e.pendingContext?Ty(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ty(t,e.context,!1),sm(t,e.containerInfo)}function By(t,e,n,r,s){return vo(),Jp(s),e.flags|=256,Dt(t,e,n,r),e.child}var Df={dehydrated:null,treeContext:null,retryLane:0};function Of(t){return{baseLanes:t,cachePool:null,transitions:null}}function Y1(t,e,n){var r=e.pendingProps,s=Ue.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ne(Ue,s&1),t===null)return Af(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=pd(o,r,0,null),t=li(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Of(n),e.memoizedState=Df,t):hm(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return ET(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ds(s,u),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=ds(a,i):(i=li(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Of(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Df,r}return i=t.child,t=i.sibling,r=ds(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function hm(t,e){return e=pd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function gc(t,e,n,r){return r!==null&&Jp(r),wo(e,t.child,null,n),t=hm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ET(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=vh(Error(Y(422))),gc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=pd({mode:"visible",children:r.children},s,0,null),i=li(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&wo(e,t.child,null,o),e.child.memoizedState=Of(o),e.memoizedState=Df,i);if(!(e.mode&1))return gc(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(Y(419)),r=vh(i,r,void 0),gc(t,e,o,r)}if(a=(o&t.childLanes)!==0,Qt||a){if(r=mt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,xr(t,s),Pn(r,t,s,-1))}return vm(),r=vh(Error(Y(421))),gc(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=DT.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,an=as(s.nextSibling),ln=e,De=!0,In=null,t!==null&&(pn[mn++]=hr,pn[mn++]=fr,pn[mn++]=fi,hr=t.id,fr=t.overflow,fi=e),e=hm(e,r.children),e.flags|=4096,e)}function $y(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Nf(t.return,e,n)}function wh(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function X1(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Dt(t,e,r.children,n),r=Ue.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$y(t,n,e);else if(t.tag===19)$y(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ne(Ue,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&xu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),wh(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&xu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}wh(e,!0,n,null,i);break;case"together":wh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Uc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _r(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),mi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Y(153));if(e.child!==null){for(t=e.child,n=ds(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ds(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ST(t,e,n){switch(e.tag){case 3:Q1(e),vo();break;case 5:E1(e);break;case 1:Xt(e.type)&&pu(e);break;case 4:sm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ne(yu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ne(Ue,Ue.current&1),e.flags|=128,null):n&e.child.childLanes?Y1(t,e,n):(Ne(Ue,Ue.current&1),t=_r(t,e,n),t!==null?t.sibling:null);Ne(Ue,Ue.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return X1(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ne(Ue,Ue.current),r)break;return null;case 22:case 23:return e.lanes=0,G1(t,e,n)}return _r(t,e,n)}var J1,Vf,Z1,ex;J1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vf=function(){};Z1=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,ii(Gn.current);var i=null;switch(n){case"input":s=of(t,s),r=of(t,r),i=[];break;case"select":s=$e({},s,{value:void 0}),r=$e({},r,{value:void 0}),i=[];break;case"textarea":s=cf(t,s),r=cf(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=hu)}df(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var a=s[d];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ga.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(a=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&u!==a&&(u!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ga.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Pe("scroll",t),i||a===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};ex=function(t,e,n,r){n!==r&&(e.flags|=4)};function ha(t,e){if(!De)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function TT(t,e,n){var r=e.pendingProps;switch(Xp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(e),null;case 1:return Xt(e.type)&&fu(),Ct(e),null;case 3:return r=e.stateNode,xo(),je(Yt),je(Rt),om(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(pc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(Wf(In),In=null))),Vf(t,e),Ct(e),null;case 5:im(e);var s=ii(il.current);if(n=e.type,t!==null&&e.stateNode!=null)Z1(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(Y(166));return Ct(e),null}if(t=ii(Gn.current),pc(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Hn]=e,r[rl]=i,t=(e.mode&1)!==0,n){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(s=0;s<xa.length;s++)Pe(xa[s],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":Jg(r,i),Pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Pe("invalid",r);break;case"textarea":ey(r,i),Pe("invalid",r)}df(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&fc(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&fc(r.textContent,a,t),s=["children",""+a]):Ga.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Pe("scroll",r)}switch(n){case"input":ic(r),Zg(r,i,!0);break;case"textarea":ic(r),ty(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=hu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=kw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Hn]=e,t[rl]=r,J1(t,e,!1,!1),e.stateNode=t;e:{switch(o=hf(n,r),n){case"dialog":Pe("cancel",t),Pe("close",t),s=r;break;case"iframe":case"object":case"embed":Pe("load",t),s=r;break;case"video":case"audio":for(s=0;s<xa.length;s++)Pe(xa[s],t);s=r;break;case"source":Pe("error",t),s=r;break;case"img":case"image":case"link":Pe("error",t),Pe("load",t),s=r;break;case"details":Pe("toggle",t),s=r;break;case"input":Jg(t,r),s=of(t,r),Pe("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=$e({},r,{value:void 0}),Pe("invalid",t);break;case"textarea":ey(t,r),s=cf(t,r),Pe("invalid",t);break;default:s=r}df(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?Pw(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Aw(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ka(t,u):typeof u=="number"&&Ka(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ga.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Pe("scroll",t):u!=null&&Dp(t,i,u,o))}switch(n){case"input":ic(t),Zg(t,r,!1);break;case"textarea":ic(t),ty(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ws(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?no(t,!!r.multiple,i,!1):r.defaultValue!=null&&no(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=hu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ct(e),null;case 6:if(t&&e.stateNode!=null)ex(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(Y(166));if(n=ii(il.current),ii(Gn.current),pc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Hn]=e,(i=r.nodeValue!==n)&&(t=ln,t!==null))switch(t.tag){case 3:fc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fc(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Hn]=e,e.stateNode=r}return Ct(e),null;case 13:if(je(Ue),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(De&&an!==null&&e.mode&1&&!(e.flags&128))v1(),vo(),e.flags|=98560,i=!1;else if(i=pc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(Y(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(Y(317));i[Hn]=e}else vo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ct(e),i=!1}else In!==null&&(Wf(In),In=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ue.current&1?it===0&&(it=3):vm())),e.updateQueue!==null&&(e.flags|=4),Ct(e),null);case 4:return xo(),Vf(t,e),t===null&&tl(e.stateNode.containerInfo),Ct(e),null;case 10:return tm(e.type._context),Ct(e),null;case 17:return Xt(e.type)&&fu(),Ct(e),null;case 19:if(je(Ue),i=e.memoizedState,i===null)return Ct(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)ha(i,!1);else{if(it!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=xu(t),o!==null){for(e.flags|=128,ha(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ne(Ue,Ue.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ke()>bo&&(e.flags|=128,r=!0,ha(i,!1),e.lanes=4194304)}else{if(!r)if(t=xu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ha(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!De)return Ct(e),null}else 2*Ke()-i.renderingStartTime>bo&&n!==1073741824&&(e.flags|=128,r=!0,ha(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ke(),e.sibling=null,n=Ue.current,Ne(Ue,r?n&1|2:n&1),e):(Ct(e),null);case 22:case 23:return ym(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?rn&1073741824&&(Ct(e),e.subtreeFlags&6&&(e.flags|=8192)):Ct(e),null;case 24:return null;case 25:return null}throw Error(Y(156,e.tag))}function IT(t,e){switch(Xp(e),e.tag){case 1:return Xt(e.type)&&fu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xo(),je(Yt),je(Rt),om(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return im(e),null;case 13:if(je(Ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Y(340));vo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return je(Ue),null;case 4:return xo(),null;case 10:return tm(e.type._context),null;case 22:case 23:return ym(),null;case 24:return null;default:return null}}var yc=!1,Nt=!1,CT=typeof WeakSet=="function"?WeakSet:Set,te=null;function Xi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){qe(t,e,r)}else n.current=null}function Ff(t,e,n){try{n()}catch(r){qe(t,e,r)}}var Hy=!1;function kT(t,e){if(bf=cu,t=i1(),Qp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,d=0,h=0,p=t,m=null;t:for(;;){for(var b;p!==n||s!==0&&p.nodeType!==3||(a=o+s),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(b=p.firstChild)!==null;)m=p,p=b;for(;;){if(p===t)break t;if(m===n&&++d===s&&(a=o),m===i&&++h===r&&(u=o),(b=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=b}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ef={focusedElem:t,selectionRange:n},cu=!1,te=e;te!==null;)if(e=te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,te=t;else for(;te!==null;){e=te;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var P=T.memoizedProps,N=T.memoizedState,E=e.stateNode,y=E.getSnapshotBeforeUpdate(e.elementType===e.type?P:Sn(e.type,P),N);E.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Y(163))}}catch(I){qe(e,e.return,I)}if(t=e.sibling,t!==null){t.return=e.return,te=t;break}te=e.return}return T=Hy,Hy=!1,T}function Ma(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Ff(e,n,i)}s=s.next}while(s!==r)}}function hd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function zf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function tx(t){var e=t.alternate;e!==null&&(t.alternate=null,tx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Hn],delete e[rl],delete e[If],delete e[uT],delete e[dT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function nx(t){return t.tag===5||t.tag===3||t.tag===4}function qy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||nx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hu));else if(r!==4&&(t=t.child,t!==null))for(Uf(t,e,n),t=t.sibling;t!==null;)Uf(t,e,n),t=t.sibling}function Bf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Bf(t,e,n),t=t.sibling;t!==null;)Bf(t,e,n),t=t.sibling}var vt=null,Tn=!1;function Or(t,e,n){for(n=n.child;n!==null;)rx(t,e,n),n=n.sibling}function rx(t,e,n){if(Wn&&typeof Wn.onCommitFiberUnmount=="function")try{Wn.onCommitFiberUnmount(sd,n)}catch{}switch(n.tag){case 5:Nt||Xi(n,e);case 6:var r=vt,s=Tn;vt=null,Or(t,e,n),vt=r,Tn=s,vt!==null&&(Tn?(t=vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):vt.removeChild(n.stateNode));break;case 18:vt!==null&&(Tn?(t=vt,n=n.stateNode,t.nodeType===8?hh(t.parentNode,n):t.nodeType===1&&hh(t,n),Ja(t)):hh(vt,n.stateNode));break;case 4:r=vt,s=Tn,vt=n.stateNode.containerInfo,Tn=!0,Or(t,e,n),vt=r,Tn=s;break;case 0:case 11:case 14:case 15:if(!Nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ff(n,e,o),s=s.next}while(s!==r)}Or(t,e,n);break;case 1:if(!Nt&&(Xi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){qe(n,e,a)}Or(t,e,n);break;case 21:Or(t,e,n);break;case 22:n.mode&1?(Nt=(r=Nt)||n.memoizedState!==null,Or(t,e,n),Nt=r):Or(t,e,n);break;default:Or(t,e,n)}}function Wy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new CT),e.forEach(function(r){var s=OT.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function En(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:vt=a.stateNode,Tn=!1;break e;case 3:vt=a.stateNode.containerInfo,Tn=!0;break e;case 4:vt=a.stateNode.containerInfo,Tn=!0;break e}a=a.return}if(vt===null)throw Error(Y(160));rx(i,o,s),vt=null,Tn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(d){qe(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)sx(e,t),e=e.sibling}function sx(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(En(e,t),Fn(t),r&4){try{Ma(3,t,t.return),hd(3,t)}catch(P){qe(t,t.return,P)}try{Ma(5,t,t.return)}catch(P){qe(t,t.return,P)}}break;case 1:En(e,t),Fn(t),r&512&&n!==null&&Xi(n,n.return);break;case 5:if(En(e,t),Fn(t),r&512&&n!==null&&Xi(n,n.return),t.flags&32){var s=t.stateNode;try{Ka(s,"")}catch(P){qe(t,t.return,P)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Iw(s,i),hf(a,o);var d=hf(a,i);for(o=0;o<u.length;o+=2){var h=u[o],p=u[o+1];h==="style"?Pw(s,p):h==="dangerouslySetInnerHTML"?Aw(s,p):h==="children"?Ka(s,p):Dp(s,h,p,d)}switch(a){case"input":af(s,i);break;case"textarea":Cw(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?no(s,!!i.multiple,b,!1):m!==!!i.multiple&&(i.defaultValue!=null?no(s,!!i.multiple,i.defaultValue,!0):no(s,!!i.multiple,i.multiple?[]:"",!1))}s[rl]=i}catch(P){qe(t,t.return,P)}}break;case 6:if(En(e,t),Fn(t),r&4){if(t.stateNode===null)throw Error(Y(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(P){qe(t,t.return,P)}}break;case 3:if(En(e,t),Fn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ja(e.containerInfo)}catch(P){qe(t,t.return,P)}break;case 4:En(e,t),Fn(t);break;case 13:En(e,t),Fn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(mm=Ke())),r&4&&Wy(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Nt=(d=Nt)||h,En(e,t),Nt=d):En(e,t),Fn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!h&&t.mode&1)for(te=t,h=t.child;h!==null;){for(p=te=h;te!==null;){switch(m=te,b=m.child,m.tag){case 0:case 11:case 14:case 15:Ma(4,m,m.return);break;case 1:Xi(m,m.return);var T=m.stateNode;if(typeof T.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(P){qe(r,n,P)}}break;case 5:Xi(m,m.return);break;case 22:if(m.memoizedState!==null){Ky(p);continue}}b!==null?(b.return=m,te=b):Ky(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{s=p.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Nw("display",o))}catch(P){qe(t,t.return,P)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(P){qe(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:En(e,t),Fn(t),r&4&&Wy(t);break;case 21:break;default:En(e,t),Fn(t)}}function Fn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(nx(n)){var r=n;break e}n=n.return}throw Error(Y(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Ka(s,""),r.flags&=-33);var i=qy(t);Bf(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=qy(t);Uf(t,a,o);break;default:throw Error(Y(161))}}catch(u){qe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function AT(t,e,n){te=t,ix(t)}function ix(t,e,n){for(var r=(t.mode&1)!==0;te!==null;){var s=te,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||yc;if(!o){var a=s.alternate,u=a!==null&&a.memoizedState!==null||Nt;a=yc;var d=Nt;if(yc=o,(Nt=u)&&!d)for(te=s;te!==null;)o=te,u=o.child,o.tag===22&&o.memoizedState!==null?Qy(s):u!==null?(u.return=o,te=u):Qy(s);for(;i!==null;)te=i,ix(i),i=i.sibling;te=s,yc=a,Nt=d}Gy(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,te=i):Gy(t)}}function Gy(t){for(;te!==null;){var e=te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Nt||hd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Nt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Sn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Py(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Py(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Ja(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Y(163))}Nt||e.flags&512&&zf(e)}catch(m){qe(e,e.return,m)}}if(e===t){te=null;break}if(n=e.sibling,n!==null){n.return=e.return,te=n;break}te=e.return}}function Ky(t){for(;te!==null;){var e=te;if(e===t){te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,te=n;break}te=e.return}}function Qy(t){for(;te!==null;){var e=te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hd(4,e)}catch(u){qe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){qe(e,s,u)}}var i=e.return;try{zf(e)}catch(u){qe(e,i,u)}break;case 5:var o=e.return;try{zf(e)}catch(u){qe(e,o,u)}}}catch(u){qe(e,e.return,u)}if(e===t){te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,te=a;break}te=e.return}}var NT=Math.ceil,Eu=Tr.ReactCurrentDispatcher,fm=Tr.ReactCurrentOwner,wn=Tr.ReactCurrentBatchConfig,be=0,mt=null,Ze=null,_t=0,rn=0,Ji=ks(0),it=0,cl=null,mi=0,fd=0,pm=0,La=null,Wt=null,mm=0,bo=1/0,lr=null,Su=!1,$f=null,cs=null,vc=!1,es=null,Tu=0,Da=0,Hf=null,Bc=-1,$c=0;function Ot(){return be&6?Ke():Bc!==-1?Bc:Bc=Ke()}function us(t){return t.mode&1?be&2&&_t!==0?_t&-_t:fT.transition!==null?($c===0&&($c=$w()),$c):(t=Te,t!==0||(t=window.event,t=t===void 0?16:Yw(t.type)),t):1}function Pn(t,e,n,r){if(50<Da)throw Da=0,Hf=null,Error(Y(185));Tl(t,n,r),(!(be&2)||t!==mt)&&(t===mt&&(!(be&2)&&(fd|=n),it===4&&Gr(t,_t)),Jt(t,r),n===1&&be===0&&!(e.mode&1)&&(bo=Ke()+500,cd&&As()))}function Jt(t,e){var n=t.callbackNode;fS(t,e);var r=lu(t,t===mt?_t:0);if(r===0)n!==null&&sy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&sy(n),e===1)t.tag===0?hT(Yy.bind(null,t)):m1(Yy.bind(null,t)),lT(function(){!(be&6)&&As()}),n=null;else{switch(Hw(r)){case 1:n=Up;break;case 4:n=Uw;break;case 16:n=au;break;case 536870912:n=Bw;break;default:n=au}n=fx(n,ox.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ox(t,e){if(Bc=-1,$c=0,be&6)throw Error(Y(327));var n=t.callbackNode;if(ao()&&t.callbackNode!==n)return null;var r=lu(t,t===mt?_t:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Iu(t,r);else{e=r;var s=be;be|=2;var i=lx();(mt!==t||_t!==e)&&(lr=null,bo=Ke()+500,ai(t,e));do try{jT();break}catch(a){ax(t,a)}while(1);em(),Eu.current=i,be=s,Ze!==null?e=0:(mt=null,_t=0,e=it)}if(e!==0){if(e===2&&(s=yf(t),s!==0&&(r=s,e=qf(t,s))),e===1)throw n=cl,ai(t,0),Gr(t,r),Jt(t,Ke()),n;if(e===6)Gr(t,r);else{if(s=t.current.alternate,!(r&30)&&!PT(s)&&(e=Iu(t,r),e===2&&(i=yf(t),i!==0&&(r=i,e=qf(t,i))),e===1))throw n=cl,ai(t,0),Gr(t,r),Jt(t,Ke()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(Y(345));case 2:ei(t,Wt,lr);break;case 3:if(Gr(t,r),(r&130023424)===r&&(e=mm+500-Ke(),10<e)){if(lu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Ot(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Tf(ei.bind(null,t,Wt,lr),e);break}ei(t,Wt,lr);break;case 4:if(Gr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Nn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*NT(r/1960))-r,10<r){t.timeoutHandle=Tf(ei.bind(null,t,Wt,lr),r);break}ei(t,Wt,lr);break;case 5:ei(t,Wt,lr);break;default:throw Error(Y(329))}}}return Jt(t,Ke()),t.callbackNode===n?ox.bind(null,t):null}function qf(t,e){var n=La;return t.current.memoizedState.isDehydrated&&(ai(t,e).flags|=256),t=Iu(t,e),t!==2&&(e=Wt,Wt=n,e!==null&&Wf(e)),t}function Wf(t){Wt===null?Wt=t:Wt.push.apply(Wt,t)}function PT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Rn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gr(t,e){for(e&=~pm,e&=~fd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Nn(e),r=1<<n;t[n]=-1,e&=~r}}function Yy(t){if(be&6)throw Error(Y(327));ao();var e=lu(t,0);if(!(e&1))return Jt(t,Ke()),null;var n=Iu(t,e);if(t.tag!==0&&n===2){var r=yf(t);r!==0&&(e=r,n=qf(t,r))}if(n===1)throw n=cl,ai(t,0),Gr(t,e),Jt(t,Ke()),n;if(n===6)throw Error(Y(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ei(t,Wt,lr),Jt(t,Ke()),null}function gm(t,e){var n=be;be|=1;try{return t(e)}finally{be=n,be===0&&(bo=Ke()+500,cd&&As())}}function gi(t){es!==null&&es.tag===0&&!(be&6)&&ao();var e=be;be|=1;var n=wn.transition,r=Te;try{if(wn.transition=null,Te=1,t)return t()}finally{Te=r,wn.transition=n,be=e,!(be&6)&&As()}}function ym(){rn=Ji.current,je(Ji)}function ai(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,aT(n)),Ze!==null)for(n=Ze.return;n!==null;){var r=n;switch(Xp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fu();break;case 3:xo(),je(Yt),je(Rt),om();break;case 5:im(r);break;case 4:xo();break;case 13:je(Ue);break;case 19:je(Ue);break;case 10:tm(r.type._context);break;case 22:case 23:ym()}n=n.return}if(mt=t,Ze=t=ds(t.current,null),_t=rn=e,it=0,cl=null,pm=fd=mi=0,Wt=La=null,si!==null){for(e=0;e<si.length;e++)if(n=si[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}si=null}return t}function ax(t,e){do{var n=Ze;try{if(em(),Fc.current=bu,_u){for(var r=Be.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}_u=!1}if(pi=0,ft=rt=Be=null,ja=!1,ol=0,fm.current=null,n===null||n.return===null){it=1,cl=e,Ze=null;break}e:{var i=t,o=n.return,a=n,u=e;if(e=_t,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var b=Oy(o);if(b!==null){b.flags&=-257,Vy(b,o,a,i,e),b.mode&1&&Dy(i,d,e),e=b,u=d;var T=e.updateQueue;if(T===null){var P=new Set;P.add(u),e.updateQueue=P}else T.add(u);break e}else{if(!(e&1)){Dy(i,d,e),vm();break e}u=Error(Y(426))}}else if(De&&a.mode&1){var N=Oy(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Vy(N,o,a,i,e),Jp(_o(u,a));break e}}i=u=_o(u,a),it!==4&&(it=2),La===null?La=[i]:La.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var E=H1(i,u,e);Ny(i,E);break e;case 1:a=u;var y=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof y.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(cs===null||!cs.has(v)))){i.flags|=65536,e&=-e,i.lanes|=e;var I=q1(i,a,e);Ny(i,I);break e}}i=i.return}while(i!==null)}ux(n)}catch(O){e=O,Ze===n&&n!==null&&(Ze=n=n.return);continue}break}while(1)}function lx(){var t=Eu.current;return Eu.current=bu,t===null?bu:t}function vm(){(it===0||it===3||it===2)&&(it=4),mt===null||!(mi&268435455)&&!(fd&268435455)||Gr(mt,_t)}function Iu(t,e){var n=be;be|=2;var r=lx();(mt!==t||_t!==e)&&(lr=null,ai(t,e));do try{RT();break}catch(s){ax(t,s)}while(1);if(em(),be=n,Eu.current=r,Ze!==null)throw Error(Y(261));return mt=null,_t=0,it}function RT(){for(;Ze!==null;)cx(Ze)}function jT(){for(;Ze!==null&&!sS();)cx(Ze)}function cx(t){var e=hx(t.alternate,t,rn);t.memoizedProps=t.pendingProps,e===null?ux(t):Ze=e,fm.current=null}function ux(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=IT(n,e),n!==null){n.flags&=32767,Ze=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{it=6,Ze=null;return}}else if(n=TT(n,e,rn),n!==null){Ze=n;return}if(e=e.sibling,e!==null){Ze=e;return}Ze=e=t}while(e!==null);it===0&&(it=5)}function ei(t,e,n){var r=Te,s=wn.transition;try{wn.transition=null,Te=1,MT(t,e,n,r)}finally{wn.transition=s,Te=r}return null}function MT(t,e,n,r){do ao();while(es!==null);if(be&6)throw Error(Y(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Y(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(pS(t,i),t===mt&&(Ze=mt=null,_t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vc||(vc=!0,fx(au,function(){return ao(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=wn.transition,wn.transition=null;var o=Te;Te=1;var a=be;be|=4,fm.current=null,kT(t,n),sx(n,t),eT(Ef),cu=!!bf,Ef=bf=null,t.current=n,AT(n),iS(),be=a,Te=o,wn.transition=i}else t.current=n;if(vc&&(vc=!1,es=t,Tu=s),i=t.pendingLanes,i===0&&(cs=null),lS(n.stateNode),Jt(t,Ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Su)throw Su=!1,t=$f,$f=null,t;return Tu&1&&t.tag!==0&&ao(),i=t.pendingLanes,i&1?t===Hf?Da++:(Da=0,Hf=t):Da=0,As(),null}function ao(){if(es!==null){var t=Hw(Tu),e=wn.transition,n=Te;try{if(wn.transition=null,Te=16>t?16:t,es===null)var r=!1;else{if(t=es,es=null,Tu=0,be&6)throw Error(Y(331));var s=be;for(be|=4,te=t.current;te!==null;){var i=te,o=i.child;if(te.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var d=a[u];for(te=d;te!==null;){var h=te;switch(h.tag){case 0:case 11:case 15:Ma(8,h,i)}var p=h.child;if(p!==null)p.return=h,te=p;else for(;te!==null;){h=te;var m=h.sibling,b=h.return;if(tx(h),h===d){te=null;break}if(m!==null){m.return=b,te=m;break}te=b}}}var T=i.alternate;if(T!==null){var P=T.child;if(P!==null){T.child=null;do{var N=P.sibling;P.sibling=null,P=N}while(P!==null)}}te=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,te=o;else e:for(;te!==null;){if(i=te,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ma(9,i,i.return)}var E=i.sibling;if(E!==null){E.return=i.return,te=E;break e}te=i.return}}var y=t.current;for(te=y;te!==null;){o=te;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,te=v;else e:for(o=y;te!==null;){if(a=te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:hd(9,a)}}catch(O){qe(a,a.return,O)}if(a===o){te=null;break e}var I=a.sibling;if(I!==null){I.return=a.return,te=I;break e}te=a.return}}if(be=s,As(),Wn&&typeof Wn.onPostCommitFiberRoot=="function")try{Wn.onPostCommitFiberRoot(sd,t)}catch{}r=!0}return r}finally{Te=n,wn.transition=e}}return!1}function Xy(t,e,n){e=_o(n,e),e=H1(t,e,1),t=ls(t,e,1),e=Ot(),t!==null&&(Tl(t,1,e),Jt(t,e))}function qe(t,e,n){if(t.tag===3)Xy(t,t,n);else for(;e!==null;){if(e.tag===3){Xy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cs===null||!cs.has(r))){t=_o(n,t),t=q1(e,t,1),e=ls(e,t,1),t=Ot(),e!==null&&(Tl(e,1,t),Jt(e,t));break}}e=e.return}}function LT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ot(),t.pingedLanes|=t.suspendedLanes&n,mt===t&&(_t&n)===n&&(it===4||it===3&&(_t&130023424)===_t&&500>Ke()-mm?ai(t,0):pm|=n),Jt(t,e)}function dx(t,e){e===0&&(t.mode&1?(e=lc,lc<<=1,!(lc&130023424)&&(lc=4194304)):e=1);var n=Ot();t=xr(t,e),t!==null&&(Tl(t,e,n),Jt(t,n))}function DT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),dx(t,n)}function OT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(Y(314))}r!==null&&r.delete(e),dx(t,n)}var hx;hx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Yt.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,ST(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,De&&e.flags&1048576&&g1(e,gu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Uc(t,e),t=e.pendingProps;var s=yo(e,Rt.current);oo(e,n),s=lm(null,e,r,t,s,n);var i=cm();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Xt(r)?(i=!0,pu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,rm(e),s.updater=dd,e.stateNode=s,s._reactInternals=e,Rf(e,r,t,n),e=Lf(null,e,r,!0,i,n)):(e.tag=0,De&&i&&Yp(e),Dt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Uc(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=FT(r),t=Sn(r,t),s){case 0:e=Mf(null,e,r,t,n);break e;case 1:e=Uy(null,e,r,t,n);break e;case 11:e=Fy(null,e,r,t,n);break e;case 14:e=zy(null,e,r,Sn(r.type,t),n);break e}throw Error(Y(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Sn(r,s),Mf(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Sn(r,s),Uy(t,e,r,s,n);case 3:e:{if(Q1(e),t===null)throw Error(Y(387));r=e.pendingProps,i=e.memoizedState,s=i.element,b1(t,e),wu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=_o(Error(Y(423)),e),e=By(t,e,r,n,s);break e}else if(r!==s){s=_o(Error(Y(424)),e),e=By(t,e,r,n,s);break e}else for(an=as(e.stateNode.containerInfo.firstChild),ln=e,De=!0,In=null,n=x1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vo(),r===s){e=_r(t,e,n);break e}Dt(t,e,r,n)}e=e.child}return e;case 5:return E1(e),t===null&&Af(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Sf(r,s)?o=null:i!==null&&Sf(r,i)&&(e.flags|=32),K1(t,e),Dt(t,e,o,n),e.child;case 6:return t===null&&Af(e),null;case 13:return Y1(t,e,n);case 4:return sm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=wo(e,null,r,n):Dt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Sn(r,s),Fy(t,e,r,s,n);case 7:return Dt(t,e,e.pendingProps,n),e.child;case 8:return Dt(t,e,e.pendingProps.children,n),e.child;case 12:return Dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Ne(yu,r._currentValue),r._currentValue=o,i!==null)if(Rn(i.value,o)){if(i.children===s.children&&!Yt.current){e=_r(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=gr(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?u.next=u:(u.next=h.next,h.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Nf(i.return,n,e),a.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(Y(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Nf(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Dt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,oo(e,n),s=xn(s),r=r(s),e.flags|=1,Dt(t,e,r,n),e.child;case 14:return r=e.type,s=Sn(r,e.pendingProps),s=Sn(r.type,s),zy(t,e,r,s,n);case 15:return W1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Sn(r,s),Uc(t,e),e.tag=1,Xt(r)?(t=!0,pu(e)):t=!1,oo(e,n),$1(e,r,s),Rf(e,r,s,n),Lf(null,e,r,!0,t,n);case 19:return X1(t,e,n);case 22:return G1(t,e,n)}throw Error(Y(156,e.tag))};function fx(t,e){return zw(t,e)}function VT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,e,n,r){return new VT(t,e,n,r)}function wm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function FT(t){if(typeof t=="function")return wm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Vp)return 11;if(t===Fp)return 14}return 2}function ds(t,e){var n=t.alternate;return n===null?(n=yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Hc(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")wm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Bi:return li(n.children,s,i,e);case Op:o=8,s|=8;break;case tf:return t=yn(12,n,e,s|2),t.elementType=tf,t.lanes=i,t;case nf:return t=yn(13,n,e,s),t.elementType=nf,t.lanes=i,t;case rf:return t=yn(19,n,e,s),t.elementType=rf,t.lanes=i,t;case Ew:return pd(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _w:o=10;break e;case bw:o=9;break e;case Vp:o=11;break e;case Fp:o=14;break e;case $r:o=16,r=null;break e}throw Error(Y(130,t==null?t:typeof t,""))}return e=yn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function li(t,e,n,r){return t=yn(7,t,r,e),t.lanes=n,t}function pd(t,e,n,r){return t=yn(22,t,r,e),t.elementType=Ew,t.lanes=n,t.stateNode={isHidden:!1},t}function xh(t,e,n){return t=yn(6,t,null,e),t.lanes=n,t}function _h(t,e,n){return e=yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zT(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=th(0),this.expirationTimes=th(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=th(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function xm(t,e,n,r,s,i,o,a,u){return t=new zT(t,e,n,a,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=yn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rm(i),t}function UT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ui,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function px(t){if(!t)return xs;t=t._reactInternals;e:{if(Ei(t)!==t||t.tag!==1)throw Error(Y(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Y(171))}if(t.tag===1){var n=t.type;if(Xt(n))return p1(t,n,e)}return e}function mx(t,e,n,r,s,i,o,a,u){return t=xm(n,r,!0,t,s,i,o,a,u),t.context=px(null),n=t.current,r=Ot(),s=us(n),i=gr(r,s),i.callback=e??null,ls(n,i,s),t.current.lanes=s,Tl(t,s,r),Jt(t,r),t}function md(t,e,n,r){var s=e.current,i=Ot(),o=us(s);return n=px(n),e.context===null?e.context=n:e.pendingContext=n,e=gr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ls(s,e,o),t!==null&&(Pn(t,s,o,i),Vc(t,s,o)),o}function Cu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Jy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _m(t,e){Jy(t,e),(t=t.alternate)&&Jy(t,e)}function BT(){return null}var gx=typeof reportError=="function"?reportError:function(t){console.error(t)};function bm(t){this._internalRoot=t}gd.prototype.render=bm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Y(409));md(t,e,null,null)};gd.prototype.unmount=bm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gi(function(){md(null,t,null,null)}),e[wr]=null}};function gd(t){this._internalRoot=t}gd.prototype.unstable_scheduleHydration=function(t){if(t){var e=Gw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wr.length&&e!==0&&e<Wr[n].priority;n++);Wr.splice(n,0,t),n===0&&Qw(t)}};function Em(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Zy(){}function $T(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=Cu(o);i.call(d)}}var o=mx(e,r,t,0,null,!1,!1,"",Zy);return t._reactRootContainer=o,t[wr]=o.current,tl(t.nodeType===8?t.parentNode:t),gi(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var d=Cu(u);a.call(d)}}var u=xm(t,0,!1,null,null,!1,!1,"",Zy);return t._reactRootContainer=u,t[wr]=u.current,tl(t.nodeType===8?t.parentNode:t),gi(function(){md(e,u,n,r)}),u}function vd(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var u=Cu(o);a.call(u)}}md(e,o,t,s)}else o=$T(n,e,t,s,r);return Cu(o)}qw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wa(e.pendingLanes);n!==0&&(Bp(e,n|1),Jt(e,Ke()),!(be&6)&&(bo=Ke()+500,As()))}break;case 13:gi(function(){var r=xr(t,1);if(r!==null){var s=Ot();Pn(r,t,1,s)}}),_m(t,1)}};$p=function(t){if(t.tag===13){var e=xr(t,134217728);if(e!==null){var n=Ot();Pn(e,t,134217728,n)}_m(t,134217728)}};Ww=function(t){if(t.tag===13){var e=us(t),n=xr(t,e);if(n!==null){var r=Ot();Pn(n,t,e,r)}_m(t,e)}};Gw=function(){return Te};Kw=function(t,e){var n=Te;try{return Te=t,e()}finally{Te=n}};pf=function(t,e,n){switch(e){case"input":if(af(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=ld(r);if(!s)throw Error(Y(90));Tw(r),af(r,s)}}}break;case"textarea":Cw(t,n);break;case"select":e=n.value,e!=null&&no(t,!!n.multiple,e,!1)}};Mw=gm;Lw=gi;var HT={usingClientEntryPoint:!1,Events:[Cl,Wi,ld,Rw,jw,gm]},fa={findFiberByHostInstance:ri,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qT={bundleType:fa.bundleType,version:fa.version,rendererPackageName:fa.rendererPackageName,rendererConfig:fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vw(t),t===null?null:t.stateNode},findFiberByHostInstance:fa.findFiberByHostInstance||BT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wc.isDisabled&&wc.supportsFiber)try{sd=wc.inject(qT),Wn=wc}catch{}}un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HT;un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Em(e))throw Error(Y(200));return UT(t,e,null,n)};un.createRoot=function(t,e){if(!Em(t))throw Error(Y(299));var n=!1,r="",s=gx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=xm(t,1,!1,null,null,n,!1,r,s),t[wr]=e.current,tl(t.nodeType===8?t.parentNode:t),new bm(e)};un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Y(188)):(t=Object.keys(t).join(","),Error(Y(268,t)));return t=Vw(e),t=t===null?null:t.stateNode,t};un.flushSync=function(t){return gi(t)};un.hydrate=function(t,e,n){if(!yd(e))throw Error(Y(200));return vd(null,t,e,!0,n)};un.hydrateRoot=function(t,e,n){if(!Em(t))throw Error(Y(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=gx;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=mx(e,null,t,1,n??null,s,!1,i,o),t[wr]=e.current,tl(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new gd(e)};un.render=function(t,e,n){if(!yd(e))throw Error(Y(200));return vd(null,t,e,!1,n)};un.unmountComponentAtNode=function(t){if(!yd(t))throw Error(Y(40));return t._reactRootContainer?(gi(function(){vd(null,null,t,!1,function(){t._reactRootContainer=null,t[wr]=null})}),!0):!1};un.unstable_batchedUpdates=gm;un.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yd(n))throw Error(Y(200));if(t==null||t._reactInternals===void 0)throw Error(Y(38));return vd(t,e,n,!1,r)};un.version="18.3.1-next-f1338f8080-20240426";function yx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yx)}catch(t){console.error(t)}}yx(),yw.exports=un;var wd=yw.exports,ev=wd;Zh.createRoot=ev.createRoot,Zh.hydrateRoot=ev.hydrateRoot;/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),GT=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),tv=t=>{const e=GT(t);return e.charAt(0).toUpperCase()+e.slice(1)},vx=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),KT=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var QT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=j.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...a},u)=>j.createElement("svg",{ref:u,...QT,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:vx("lucide",s),...!i&&!KT(a)&&{"aria-hidden":"true"},...a},[...o.map(([d,h])=>j.createElement(d,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=(t,e)=>{const n=j.forwardRef(({className:r,...s},i)=>j.createElement(YT,{ref:i,iconNode:e,className:vx(`lucide-${WT(tv(t))}`,`lucide-${t}`,r),...s}));return n.displayName=tv(t),n};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],JT=ge("arrow-left",XT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],wx=ge("arrow-right",ZT);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]],ku=ge("bed-double",e2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M16 14v2.2l1.6 1",key:"fo4ql5"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]],n2=ge("calendar-clock",t2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],nv=ge("calendar-days",r2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ts=ge("check",s2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Oa=ge("chevron-down",i2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Gf=ge("chevron-left",o2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Kf=ge("chevron-right",a2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],c2=ge("circle-check",l2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Eo=ge("clipboard-list",u2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M12 6v6h4",key:"135r8i"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Qf=ge("clock-3",d2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],f2=ge("credit-card",h2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]],m2=ge("droplets",p2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],y2=ge("earth",g2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],w2=ge("eye-off",v2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],_2=ge("eye",x2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],rv=ge("image",b2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Au=ge("layers",E2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],xx=ge("loader-circle",S2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],I2=ge("lock-keyhole",T2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],k2=ge("mail",C2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],_x=ge("map-pin",A2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],P2=ge("menu",N2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],lo=ge("message-circle",R2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=[["path",{d:"M5 12h14",key:"1ays0h"}]],M2=ge("minus",j2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=[["path",{d:"m18 8 4 4-4 4",key:"1ak13k"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}]],D2=ge("move-horizontal",L2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],V2=ge("phone",O2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Al=ge("plus",F2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]],U2=ge("ruler",z2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Sm=ge("shield-check",B2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",key:"1dgpiv"}],["path",{d:"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"xacw8m"}],["path",{d:"M4 18v2",key:"jwo5n2"}],["path",{d:"M20 18v2",key:"1ar1qi"}],["path",{d:"M12 4v9",key:"oqhhn3"}]],ul=ge("sofa",$2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],So=ge("sparkles",H2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],W2=ge("trash-2",q2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]],sv=ge("wallet",G2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],xd=ge("x",K2),Q2={__lang:"ar",home:"الرئيسية",services:"الخدمات",beforeafter:"قبل / بعد",nav:{contact:"تواصل معنا"},heroStatic:"تنظيف احترافي لـ",heroHighlight1:"الكنب",heroHighlight2:"فرشات النوم",heroHighlight3:"السجاد",heroSubtitle:"تنظيف احترافي في بيتك للكنب وفرشات النوم والسجاد، مع إمكانية جمع أكثر من خدمة في طلب واحد. نخدم مناطق الشمال والمركز.",heroButton:"اطلب الخدمة",heroButtonPrimary:"جهّز طلبك",heroButtonSecondary:"شاهد خدماتنا",heroAlt:"خدمات تنظيف في بيت الزبون",whatsappLink:"https://wa.me/972543075619",callLink:"tel:+972543075619",showCallButton:!1,callNow:"اتصال",heroPill1:"الخدمة في بيتك",heroPill2:"الشمال والمركز",heroPill3:"طلب واحد لكل الخدمات",scrollExplore:"استكشف",servicesTitle1:"خدمات",servicesTitle2:"التنظيف",servicesDescription:"اختر خدمة واحدة أو اجمع الكنب والسجاد وفرشات النوم في نفس الطلب، وأدخل تفاصيل كل عنصر لحاله.",sofaTitle:"تنظيف الكنب",sofaDescription:"تنظيف عميق للكنب داخل بيتك. يتم تحديد الطلب حسب عدد المقاعد التي تريد تنظيفها.",mattressTitle:"تنظيف فرشات النوم",mattressDescription:"أضف كل فرشة حسب حجمها: مفرد، مفرد ونص أو مزدوج، وحدد تنظيف وجه واحد أو وجهين.",carpetTitle:"تنظيف السجاد",carpetDescription:"أضف كل سجادة لحالها مع الطول والعرض، أو اختر أن القياسات غير معروفة.",glassTitle:"تنظيف الزجاج",glassDescription:"تنظيف الشبابيك والواجهات الزجاجية للمنازل والمكاتب. الخدمة غير متاحة للحجز حاليًا.",beforeAlt:"قبل",afterAlt:"بعد",beforeAfterTitle:"قبل / بعد",beforeAfterSubtitle:"مقارنة واضحة للنتيجة قبل وبعد التنظيف.",beforeAfterAria:"قبل وبعد",contactTitleSpan:"تواصل",contactTitle:"معنا",contactSubtitle:"عندك استفسار أو ملاحظة؟ أرسل لنا رسالة وسنرد عليك.",contactSubjectLabel:"موضوع",contactNameLabel:"الاسم",contactPhoneLabel:"الهاتف",contactMessageLabel:"الرسالة",contactPhName:"الاسم الكامل",contactPhPhone:"رقم الهاتف",contactPhMessageInquiry:"اكتب سؤالك أو طلبك…",contactPhMessageBooking:"اكتب الخدمات والتفاصيل المناسبة…",contactPhMessageComplaint:"اكتب الشكوى…",contactPhMessageOther:"اكتب رسالتك…",contactSend:"إرسال",contactSending:"جارٍ الإرسال...",contactSent:"تم الإرسال!",contactNeedMore:"أكمل الحقول",contactAssistName:"اكتب اسمك الكامل كما سيظهر بالتواصل.",contactAssistPhone:"يفضّل رقم متاح على واتساب لسهولة الرد.",contactAssistMsg:"اكتب الخدمات المطلوبة والتفاصيل المهمة.",contactErrSubject:"اختر الموضوع",contactErrName:"اكتب اسمك",contactErrPhoneEmpty:"أدخل رقمك",contactErrPhoneInvalid:"رقم غير صالح",contactErrMessage:"اكتب الرسالة",contactMoreOpts:"خيارات إضافية",contactMoreOptsHide:"إخفاء الخيارات",contactPrefTitle:"طريقة التواصل المفضّلة",contactPrefPhone:"اتصال",contactPrefWA:"واتساب",contactPrefEither:"لا فرق",contactPrefSummary:"المفضّل:",contactClearPrefA11y:"إزالة التفضيل",contactWAButton:"واتساب",contactWAPreviewTitle:"معاينة واتساب",contactWAOpenNow:"فتح واتساب الآن",contactWACopy:"نسخ النص",contactWAPreviewClose:"إغلاق المعاينة",contactSavedHint:"تم حفظ بياناتك محليًا.",commonClose:"إغلاق",header:{brand:"Lumora",menu_title:"القائمة الرئيسية",services:"الخدمات",gallery:"معرض النتائج",contact:"تواصل معنا",sofa_clean:"تنظيف الكنب",mattress_clean:"تنظيف فرشات النوم",carpet_clean:"تنظيف السجاد",glass_clean:"تنظيف الزجاج",choose_language:"اختر اللغة",ar:"العربية",en:"الإنجليزية",he:"العبرية"},contact:{titleSpan:"تواصل",title:"معنا",subtitle:"عندك استفسار أو ملاحظة؟ أرسل لنا رسالة وسنرد عليك."},common:{close:"إغلاق",opening:"جاري الفتح…"},services:{section:{badge:"خدمات تنظيف في بيت الزبون",title:"اختر الخدمات",titleAccent:"المناسبة لك",subtitle:"أضف أي عدد من خدمات الكنب والسجاد وفرشات النوم، وحدد تفاصيل كل عنصر، ثم أرسل الطلب كاملًا عبر واتساب."},actions:{details:"عرض الخدمة",book:"أضف للطلب"},badges:{popular:"الأكثر طلبًا",fast:"إضافة سريعة"},modal:{includesTitle:"ماذا تشمل الخدمة؟",moreDetails:"أضف الخدمات والتفاصيل الأساسية، ثم تابع الطلب عبر واتساب.",footerHint:"يمكنك جمع أكثر من خدمة في نفس الطلب",quickQuestion:"اسأل عن الخدمة",bookNow:"أضف للطلب",sofaSeatsLabel:"عدد مقاعد الكنب",sofaSeatsHint:"احسب مجموع المقاعد التي تريد تنظيفها.",mattressCountLabel:"عدد فرشات النوم",mattressSizeLabel:"حجم الفرشة",mattressSidesLabel:"عدد الأوجه",carpetLengthLabel:"الطول بالمتر",carpetWidthLabel:"العرض بالمتر"},order:{title:"جهّز طلبك",subtitle:"أضف كل خدمة وكل عنصر بتفاصيله، ثم أرسل رسالة واتساب واحدة.",addSofa:"إضافة كنب",addCarpet:"إضافة سجادة",addMattress:"إضافة فرشة نوم",viewOrder:"عرض الطلب",clearOrder:"مسح الطلب",sendOrder:"إرسال الطلب عبر واتساب"},whatsapp:{questionIntro:"مرحبًا، أنا مهتم بخدمة {title}.",questionOutro:"ممكن تفاصيل أكثر؟",bookIntro:"مرحبًا، أريد طلب خدمات تنظيف في موقعي.",bookOutro:"سأرسل الصور اللازمة عبر واتساب.",sofaSeats:"عدد مقاعد الكنب: {count}",mattressDetails:"العدد: {count} | الحجم: {size} | التنظيف: {sides}",carpetMeasurements:"الطول: {length} متر × العرض: {width} متر"}}},Y2={__lang:"en",home:"Home",services:"Services",beforeafter:"Before / After",nav:{contact:"Contact Us"},heroStatic:"Professional cleaning for",heroHighlight1:"sofas",heroHighlight2:"mattresses",heroHighlight3:"carpets",heroSubtitle:"Professional sofa, mattress, and carpet cleaning at your home. Combine several services and different items in one clear order. Available across northern and central areas.",heroButton:"Request Service",heroButtonPrimary:"Build Your Order",heroButtonSecondary:"View Our Services",heroAlt:"Professional cleaning service at the customer’s home",whatsappLink:"https://wa.me/972543075619",callLink:"tel:+972543075619",showCallButton:!1,callNow:"Call",heroPill1:"Service at your home",heroPill2:"North and center",heroPill3:"One order for all services",scrollExplore:"Explore",servicesTitle1:"Cleaning",servicesTitle2:"Services",servicesDescription:"Choose one service or combine sofas, carpets, and mattresses in the same order. Add the details of every item separately.",sofaTitle:"Sofa Cleaning",sofaDescription:"Deep sofa cleaning at your home. The order is calculated according to the total number of sofa seats you want cleaned.",mattressTitle:"Mattress Cleaning",mattressDescription:"Add each mattress according to its size: single, single-and-a-half, or double, and choose cleaning for one side or both sides.",carpetTitle:"Carpet Cleaning",carpetDescription:"Add each carpet separately with its length and width, or mark its measurements as unknown.",glassTitle:"Glass Cleaning",glassDescription:"Window and glass-front cleaning for homes and offices. This service is currently unavailable for booking.",beforeAlt:"Before",afterAlt:"After",beforeAfterTitle:"Before / After",beforeAfterSubtitle:"A clear comparison of the result before and after cleaning.",beforeAfterAria:"Before and after",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",contactTitleSpan:"Contact",contactTitle:"Us",contactSubtitle:"Have a question or note? Send us a message and we will get back to you.",contactSubjectLabel:"Subject",contactNameLabel:"Name",contactPhoneLabel:"Phone",contactMessageLabel:"Message",contactPhName:"Full name",contactPhPhone:"Phone number",contactPhMessageInquiry:"Write your question or request…",contactPhMessageBooking:"Write the requested services and details…",contactPhMessageComplaint:"Write your complaint…",contactPhMessageOther:"Write your message…",contactSend:"Send",contactSending:"Sending...",contactSent:"Sent!",contactNeedMore:"Complete the fields",contactAssistName:"Enter your full name as it should appear when we contact you.",contactAssistPhone:"A number available on WhatsApp is preferred for an easier response.",contactAssistMsg:"Write the requested services and the important details.",contactErrSubject:"Choose a subject",contactErrName:"Enter your name",contactErrPhoneEmpty:"Enter your phone number",contactErrPhoneInvalid:"Invalid phone number",contactErrMessage:"Enter your message",contactMoreOpts:"Additional options",contactMoreOptsHide:"Hide options",contactPrefTitle:"Preferred contact method",contactPrefPhone:"Phone call",contactPrefWA:"WhatsApp",contactPrefEither:"Either",contactPrefSummary:"Preferred:",contactClearPrefA11y:"Clear preference",contactWAButton:"WhatsApp",contactWAPreviewTitle:"WhatsApp Preview",contactWAOpenNow:"Open WhatsApp Now",contactWACopy:"Copy Text",contactWAPreviewClose:"Close Preview",contactSavedHint:"Your information has been saved locally.",commonClose:"Close",header:{brand:"Lumora",menu_title:"Main Menu",services:"Services",gallery:"Results Gallery",contact:"Contact Us",sofa_clean:"Sofa Cleaning",mattress_clean:"Mattress Cleaning",carpet_clean:"Carpet Cleaning",glass_clean:"Glass Cleaning",choose_language:"Choose Language",ar:"Arabic",en:"English",he:"Hebrew"},contact:{titleSpan:"Contact",title:"Us",subtitle:"Have a question or note? Send us a message and we will get back to you."},common:{close:"Close",opening:"Opening…"},services:{section:{badge:"Cleaning services at your home",title:"Choose the",titleAccent:"services you need",subtitle:"Add any number of sofa, carpet, and mattress services. Enter the details of every item, then send the complete order through WhatsApp."},actions:{details:"View Service",book:"Add to Order"},badges:{popular:"Most Popular",fast:"Quick Add"},modal:{includesTitle:"What does the service include?",moreDetails:"Add the requested services and basic details, then continue through WhatsApp.",footerHint:"You can combine several services in the same order",quickQuestion:"Ask About the Service",bookNow:"Add to Order",sofaSeatsLabel:"Number of Sofa Seats",sofaSeatsHint:"Enter the total number of seats you want cleaned.",mattressCountLabel:"Number of Mattresses",mattressSizeLabel:"Mattress Size",mattressSidesLabel:"Cleaning Sides",carpetLengthLabel:"Length in Meters",carpetWidthLabel:"Width in Meters"},order:{title:"Build Your Order",subtitle:"Add every service and item with its own details, then send one WhatsApp message.",addSofa:"Add Sofa",addCarpet:"Add Carpet",addMattress:"Add Mattress",viewOrder:"View Order",clearOrder:"Clear Order",sendOrder:"Send Order Through WhatsApp",location:"Town",locationPlaceholder:"Enter your town",notes:"Additional Notes",notesPlaceholder:"Example: stairs, high floor, or specific stains…",sofaSection:"Sofas",carpetSection:"Carpets",mattressSection:"Mattresses",sofaSeats:"Number of Seats",carpetLength:"Length in Meters",carpetWidth:"Width in Meters",carpetUnknown:"I do not know the measurements",mattressCount:"Number of Mattresses",mattressSize:"Size",mattressSides:"Cleaning Sides",single:"Single",singleAndHalf:"Single and a Half",double:"Double",oneSide:"One Side",twoSides:"Both Sides",addAnotherSofa:"Add Another Sofa",addAnotherCarpet:"Add Another Carpet",addAnotherMattress:"Add Another Mattress Combination",removeItem:"Remove Item"},whatsapp:{questionIntro:"Hello, I am interested in {title}.",questionOutro:"Could you provide more details?",bookIntro:"Hello, I would like to request cleaning services at my location.",bookOutro:"I will send the necessary photos through WhatsApp.",sofaSeats:"Number of sofa seats: {count}",mattressDetails:"Quantity: {count} | Size: {size} | Cleaning: {sides}",carpetMeasurements:"Length: {length} m × Width: {width} m",carpetUnknown:"Measurements are unknown"}}},X2={__lang:"he",home:"ראשי",services:"שירותים",beforeafter:"לפני / אחרי",nav:{contact:"צור קשר"},heroStatic:"ניקוי מקצועי של",heroHighlight1:"ספות",heroHighlight2:"מזרנים",heroHighlight3:"שטיחים",heroSubtitle:"ניקוי מקצועי של ספות, מזרנים ושטיחים בבית הלקוח. ניתן לשלב מספר שירותים ופריטים שונים בהזמנה אחת ברורה. השירות זמין באזורי הצפון והמרכז.",heroButton:"הזמנת שירות",heroButtonPrimary:"בניית ההזמנה",heroButtonSecondary:"צפייה בשירותים",heroAlt:"שירות ניקיון מקצועי בבית הלקוח",whatsappLink:"https://wa.me/972543075619",callLink:"tel:+972543075619",showCallButton:!1,callNow:"התקשרו",heroPill1:"שירות בבית הלקוח",heroPill2:"צפון ומרכז",heroPill3:"הזמנה אחת לכל השירותים",scrollExplore:"גלו עוד",servicesTitle1:"שירותי",servicesTitle2:"ניקיון",servicesDescription:"בחרו שירות אחד או שלבו ספות, שטיחים ומזרנים באותה הזמנה. ניתן להזין את הפרטים של כל פריט בנפרד.",sofaTitle:"ניקוי ספות",sofaDescription:"ניקוי עמוק של ספות בביתכם. ההזמנה מחושבת לפי מספר המושבים הכולל שתרצו לנקות.",mattressTitle:"ניקוי מזרנים",mattressDescription:"הוסיפו כל מזרן לפי גודלו: יחיד, מיטה וחצי או זוגי, ובחרו ניקוי צד אחד או שני צדדים.",carpetTitle:"ניקוי שטיחים",carpetDescription:"הוסיפו כל שטיח בנפרד עם האורך והרוחב שלו, או סמנו שהמידות אינן ידועות.",glassTitle:"ניקוי זכוכית",glassDescription:"ניקוי חלונות וחזיתות זכוכית בבתים ובמשרדים. השירות אינו זמין כרגע להזמנה.",beforeAlt:"לפני",afterAlt:"אחרי",beforeAfterTitle:"לפני / אחרי",beforeAfterSubtitle:"השוואה ברורה בין המצב לפני הניקוי לבין התוצאה אחריו.",beforeAfterAria:"לפני ואחרי",enterFullscreen:"מסך מלא",exitFullscreen:"יציאה ממסך מלא",contactTitleSpan:"צרו",contactTitle:"קשר",contactSubtitle:"יש לכם שאלה או הערה? שלחו לנו הודעה ונחזור אליכם.",contactSubjectLabel:"נושא",contactNameLabel:"שם",contactPhoneLabel:"טלפון",contactMessageLabel:"הודעה",contactPhName:"שם מלא",contactPhPhone:"מספר טלפון",contactPhMessageInquiry:"כתבו את השאלה או הבקשה שלכם…",contactPhMessageBooking:"כתבו את השירותים והפרטים המבוקשים…",contactPhMessageComplaint:"כתבו את התלונה שלכם…",contactPhMessageOther:"כתבו את ההודעה שלכם…",contactSend:"שליחה",contactSending:"שולח...",contactSent:"נשלח!",contactNeedMore:"יש להשלים את השדות",contactAssistName:"הזינו את שמכם המלא כפי שיופיע ביצירת הקשר.",contactAssistPhone:"מומלץ להזין מספר הזמין ב-WhatsApp לצורך מענה מהיר.",contactAssistMsg:"כתבו את השירותים המבוקשים ואת הפרטים החשובים.",contactErrSubject:"יש לבחור נושא",contactErrName:"יש להזין שם",contactErrPhoneEmpty:"יש להזין מספר טלפון",contactErrPhoneInvalid:"מספר הטלפון אינו תקין",contactErrMessage:"יש להזין הודעה",contactMoreOpts:"אפשרויות נוספות",contactMoreOptsHide:"הסתרת אפשרויות",contactPrefTitle:"דרך יצירת קשר מועדפת",contactPrefPhone:"שיחת טלפון",contactPrefWA:"WhatsApp",contactPrefEither:"אין העדפה",contactPrefSummary:"מועדף:",contactClearPrefA11y:"הסרת ההעדפה",contactWAButton:"WhatsApp",contactWAPreviewTitle:"תצוגה מקדימה של WhatsApp",contactWAOpenNow:"פתיחת WhatsApp עכשיו",contactWACopy:"העתקת הטקסט",contactWAPreviewClose:"סגירת התצוגה",contactSavedHint:"הפרטים שלכם נשמרו במכשיר.",commonClose:"סגירה",header:{brand:"Lumora",menu_title:"תפריט ראשי",services:"שירותים",gallery:"גלריית תוצאות",contact:"צור קשר",sofa_clean:"ניקוי ספות",mattress_clean:"ניקוי מזרנים",carpet_clean:"ניקוי שטיחים",glass_clean:"ניקוי זכוכית",choose_language:"בחירת שפה",ar:"ערבית",en:"אנגלית",he:"עברית"},contact:{titleSpan:"צרו",title:"קשר",subtitle:"יש לכם שאלה או הערה? שלחו לנו הודעה ונחזור אליכם."},common:{close:"סגירה",opening:"נפתח…"},services:{section:{badge:"שירותי ניקיון בבית הלקוח",title:"בחרו את",titleAccent:"השירותים המתאימים",subtitle:"הוסיפו כל מספר של שירותי ספות, שטיחים ומזרנים. הזינו את הפרטים של כל פריט ושלחו את ההזמנה המלאה דרך WhatsApp."},actions:{details:"צפייה בשירות",book:"הוספה להזמנה"},badges:{popular:"הכי מבוקש",fast:"הוספה מהירה"},modal:{includesTitle:"מה כולל השירות?",moreDetails:"הוסיפו את השירותים והפרטים המבוקשים ולאחר מכן המשיכו דרך WhatsApp.",footerHint:"ניתן לשלב מספר שירותים באותה הזמנה",quickQuestion:"שאלה על השירות",bookNow:"הוספה להזמנה",sofaSeatsLabel:"מספר מושבי הספה",sofaSeatsHint:"הזינו את מספר המושבים הכולל שתרצו לנקות.",mattressCountLabel:"מספר המזרנים",mattressSizeLabel:"גודל המזרן",mattressSidesLabel:"צדדי ניקוי",carpetLengthLabel:"אורך במטרים",carpetWidthLabel:"רוחב במטרים"},order:{title:"בניית ההזמנה",subtitle:"הוסיפו כל שירות ופריט עם הפרטים שלו ושלחו הודעת WhatsApp אחת.",addSofa:"הוספת ספה",addCarpet:"הוספת שטיח",addMattress:"הוספת מזרן",viewOrder:"צפייה בהזמנה",clearOrder:"ניקוי ההזמנה",sendOrder:"שליחת ההזמנה דרך WhatsApp",location:"יישוב",locationPlaceholder:"הקלידו את שם היישוב",notes:"הערות נוספות",notesPlaceholder:"לדוגמה: מדרגות, קומה גבוהה או כתמים מסוימים…",sofaSection:"ספות",carpetSection:"שטיחים",mattressSection:"מזרנים",sofaSeats:"מספר מושבים",carpetLength:"אורך במטרים",carpetWidth:"רוחב במטרים",carpetUnknown:"אינני יודע/ת את המידות",mattressCount:"מספר מזרנים",mattressSize:"גודל",mattressSides:"צדדי ניקוי",single:"יחיד",singleAndHalf:"מיטה וחצי",double:"זוגי",oneSide:"צד אחד",twoSides:"שני צדדים",addAnotherSofa:"הוספת ספה נוספת",addAnotherCarpet:"הוספת שטיח נוסף",addAnotherMattress:"הוספת שילוב מזרנים נוסף",removeItem:"הסרת הפריט"},whatsapp:{questionIntro:"שלום, אני מתעניין/ת בשירות {title}.",questionOutro:"אפשר לקבל פרטים נוספים?",bookIntro:"שלום, אני רוצה להזמין שירותי ניקיון במיקום שלי.",bookOutro:"אשלח את התמונות הדרושות דרך WhatsApp.",sofaSeats:"מספר מושבי הספה: {count}",mattressDetails:"כמות: {count} | גודל: {size} | ניקוי: {sides}",carpetMeasurements:"אורך: {length} מ׳ × רוחב: {width} מ׳",carpetUnknown:"המידות אינן ידועות"}}},bx=j.createContext(null),Yf="lumora-language",bh={ar:Q2,en:Y2,he:X2},J2=new Set(["ar","he","en"]),Ex=new Set(["ar","he"]);function Nu(t){if(typeof t!="string")return null;const e=t.trim().toLowerCase().split(/[-_]/)[0];return J2.has(e)?e:null}function Z2(){var e,n;if(typeof window>"u")return"ar";try{const r=Nu(window.localStorage.getItem(Yf));if(r)return r}catch{}const t=Array.isArray((e=window.navigator)==null?void 0:e.languages)?window.navigator.languages:[(n=window.navigator)==null?void 0:n.language];for(const r of t){const s=Nu(r);if(s)return s}return"ar"}function iv(t,e){if(!(!t||!e))return String(e).split(".").reduce((n,r)=>{if(n&&Object.prototype.hasOwnProperty.call(n,r))return n[r]},t)}function eI(t,e){return t==null?"":e?String(t).replace(/\{(\w+)\}/g,(n,r)=>{const s=e[r];return s==null?"":String(s)}):String(t)}function tI(t){if(typeof document>"u")return;const e=Ex.has(t)?"rtl":"ltr";document.documentElement.lang=t,document.documentElement.dir=e,document.body&&(document.body.lang=t,document.body.dir=e)}function nI({children:t}){const[e,n]=j.useState(Z2),r=j.useCallback(a=>{n(u=>{const d=typeof a=="function"?a(u):a;return Nu(d)||u})},[]),s=Ex.has(e),i=s?"rtl":"ltr";j.useEffect(()=>{tI(e);try{window.localStorage.setItem(Yf,e)}catch{}},[e]),j.useEffect(()=>{const a=u=>{if(u.key!==Yf)return;const d=Nu(u.newValue);d&&n(d)};return window.addEventListener("storage",a),()=>{window.removeEventListener("storage",a)}},[]);const o=j.useMemo(()=>{const a=bh[e]||bh.ar,u=bh.ar;return{lang:e,setLang:r,t:a,tFn:(h,p)=>{const m=iv(a,h)??iv(u,h);return m==null||typeof m=="object"?h:eI(m,p)},isRTL:s,dir:i,supportedLanguages:["ar","he","en"]}},[i,s,e,r]);return c.jsx(bx.Provider,{value:o,children:t})}function Mt(){const t=j.useContext(bx);if(!t)throw new Error("useLanguage must be used inside LanguageProvider");return t}const rI=[{code:"ar",short:"AR",label:"العربية"},{code:"en",short:"EN",label:"English"},{code:"he",short:"HE",label:"עברית"}];function sI({menuOpen:t,setMenuOpen:e,navItems:n=[],scrollToSection:r,activeId:s,hintText:i,labels:o}){const{lang:a,setLang:u}=Mt(),d=a==="ar"||a==="he",h=d?"rtl":"ltr",p=j.useRef(null),[m,b]=j.useState(null),T=j.useMemo(()=>d?Gf:Kf,[d]),P=j.useMemo(()=>a==="he"?{menuTitle:"תפריט ראשי",menuSubtitle:"ניווט מהיר באתר",languageTitle:"בחירת שפה",allServices:"כל השירותים",close:"סגירת התפריט",active:"פעיל",brandSub:"CLEANING"}:a==="en"?{menuTitle:"Main menu",menuSubtitle:"Quick website navigation",languageTitle:"Choose language",allServices:"All services",close:"Close menu",active:"Active",brandSub:"CLEANING"}:{menuTitle:"القائمة الرئيسية",menuSubtitle:"تنقّل سريع داخل الموقع",languageTitle:"اختر اللغة",allServices:"كل الخدمات",close:"إغلاق القائمة",active:"محدد",brandSub:"CLEANING"},[a]),N=j.useCallback(()=>{e(!1),b(null)},[e]),E=j.useCallback(v=>{if(v)try{r==null||r(v)}finally{N()}},[N,r]);if(j.useEffect(()=>{if(!t){b(null);return}const v=document.body.style.overflow;document.body.style.overflow="hidden";const I=L=>{L.key==="Escape"&&N()};window.addEventListener("keydown",I);const O=window.setTimeout(()=>{var L;(L=p.current)==null||L.focus()},30);return()=>{window.clearTimeout(O),window.removeEventListener("keydown",I),document.body.style.overflow=v}},[N,t]),j.useEffect(()=>{if(!t)return;const v=n.find(I=>{var O;return(O=I==null?void 0:I.subItems)==null?void 0:O.some(L=>L.id===s)});v!=null&&v.id&&b(v.id)},[s,t,n]),!t||typeof document>"u")return null;const y=c.jsxs("div",{className:"fixed inset-0 z-[10000]",role:"presentation",dir:h,children:[c.jsx("button",{type:"button","aria-label":P.close,onClick:N,className:`\r
          absolute\r
          inset-0\r
          h-full\r
          w-full\r
          cursor-default\r
          bg-[rgba(3,7,24,0.76)]\r
          backdrop-blur-sm\r
        `}),c.jsxs("aside",{ref:p,tabIndex:-1,role:"dialog","aria-modal":"true","aria-label":P.menuTitle,className:["absolute top-0 h-[100dvh]","w-[min(92vw,390px)]","overflow-hidden","border-white/10","bg-gradient-to-b","from-[var(--lumora-navy-900)]","via-[var(--lumora-navy-950)]","to-[#050817]","text-white","shadow-[0_0_80px_rgba(0,0,0,0.55)]","focus:outline-none",d?"right-0 border-l":"left-0 border-r"].join(" "),children:[c.jsx("img",{src:"/lumora-icon.png",alt:"","aria-hidden":"true",draggable:!1,className:["pointer-events-none","absolute -top-24","h-72 w-72","select-none object-contain","opacity-[0.055]",d?"-left-24":"-right-24"].join(" ")}),c.jsx("div",{"aria-hidden":"true",className:`\r
            pointer-events-none\r
            absolute\r
            -right-24\r
            top-28\r
            h-56\r
            w-56\r
            rounded-full\r
            bg-[rgba(16,148,192,0.16)]\r
            blur-3xl\r
          `}),c.jsx("div",{"aria-hidden":"true",className:`\r
            pointer-events-none\r
            absolute\r
            -bottom-24\r
            -left-20\r
            h-64\r
            w-64\r
            rounded-full\r
            bg-[rgba(174,221,57,0.10)]\r
            blur-3xl\r
          `}),c.jsxs("div",{className:"relative z-10 flex h-full flex-col",children:[c.jsxs("div",{className:`\r
              shrink-0\r
              border-b\r
              border-white/[0.08]\r
              px-4\r
              pb-4\r
              pt-[max(16px,env(safe-area-inset-top))]\r
            `,children:[c.jsxs("div",{className:"flex items-center justify-between gap-3",children:[c.jsxs("button",{type:"button",onClick:()=>E("home"),className:`\r
                  flex\r
                  min-w-0\r
                  items-center\r
                  gap-3\r
                  rounded-2xl\r
                  text-start\r
                `,children:[c.jsx("span",{className:`\r
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
                  `,children:c.jsx("img",{src:"/lumora-icon.png",alt:"Lumora",draggable:!1,className:"h-full w-full object-cover"})}),c.jsxs("span",{className:"min-w-0",children:[c.jsx("span",{className:`\r
                      block\r
                      truncate\r
                      text-lg\r
                      font-black\r
                      leading-none\r
                      tracking-[0.08em]\r
                      text-white\r
                    `,children:"LUMORA"}),c.jsx("span",{className:`\r
                      mt-1.5\r
                      block\r
                      text-[9px]\r
                      font-black\r
                      leading-none\r
                      tracking-[0.32em]\r
                      text-[var(--lumora-lime)]\r
                    `,children:P.brandSub})]})]}),c.jsx("button",{type:"button",onClick:N,"aria-label":P.close,className:`\r
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
                `,children:c.jsx(xd,{"aria-hidden":"true",className:"h-5 w-5"})})]}),c.jsxs("div",{className:"mt-4",children:[c.jsxs("div",{className:`\r
                  inline-flex\r
                  items-center\r
                  gap-2\r
                  rounded-full\r
                  border\r
                  border-[rgba(174,221,57,0.18)]\r
                  bg-[rgba(174,221,57,0.07)]\r
                  px-3\r
                  py-1.5\r
                `,children:[c.jsx(So,{"aria-hidden":"true",className:"h-3.5 w-3.5 text-[var(--lumora-lime)]"}),c.jsx("span",{className:`\r
                    text-[11px]\r
                    font-extrabold\r
                    text-[var(--lumora-lime-light)]\r
                  `,children:P.menuTitle})]}),c.jsx("p",{className:"mt-2 text-xs leading-5 text-white/55",children:i||P.menuSubtitle})]})]}),c.jsx("div",{className:`\r
              min-h-0\r
              flex-1\r
              overflow-y-auto\r
              overscroll-contain\r
              px-3\r
              py-4\r
            `,children:c.jsx("nav",{"aria-label":P.menuTitle,className:"space-y-2",children:n.map(v=>{const I=Array.isArray(v.subItems)&&v.subItems.length>0,O=I?v.subItems.some(w=>w.id===s):!1,L=s===v.id||O,S=m===v.id;return I?c.jsxs("div",{className:["overflow-hidden rounded-[22px] border",L?["border-[rgba(174,221,57,0.24)]","bg-[rgba(174,221,57,0.055)]"].join(" "):["border-white/[0.07]","bg-white/[0.03]"].join(" ")].join(" "),children:[c.jsxs("button",{type:"button",onClick:()=>{b(w=>w===v.id?null:v.id)},"aria-expanded":S,className:["flex w-full items-center gap-3","px-4 py-3.5","text-start text-sm font-extrabold","transition",L?"text-[var(--lumora-lime-light)]":"text-white/80 hover:bg-white/[0.04] hover:text-white"].join(" "),children:[c.jsx("span",{className:["h-2 w-2 shrink-0 rounded-full",L?["bg-[var(--lumora-lime)]","shadow-[0_0_0_5px_rgba(174,221,57,0.10)]"].join(" "):"bg-white/20"].join(" ")}),c.jsx("span",{className:"flex-1",children:v.label}),c.jsx(Oa,{"aria-hidden":"true",className:["h-4 w-4 shrink-0 transition-transform duration-200",S?"rotate-180 text-[var(--lumora-lime)]":"text-white/35"].join(" ")})]}),S&&c.jsxs("div",{className:`\r
                          border-t\r
                          border-white/[0.07]\r
                          px-2\r
                          pb-2\r
                          pt-2\r
                        `,children:[c.jsxs("button",{type:"button",onClick:()=>E(v.id),className:["mb-1 flex w-full items-center gap-3","rounded-xl px-3 py-3","text-start text-sm font-bold","transition",s===v.id?["bg-[rgba(174,221,57,0.10)]","text-[var(--lumora-lime-light)]"].join(" "):["text-white/64","hover:bg-white/[0.055]","hover:text-white"].join(" ")].join(" "),children:[c.jsx("span",{className:`\r
                              h-1.5\r
                              w-1.5\r
                              shrink-0\r
                              rounded-full\r
                              bg-[var(--lumora-cyan)]\r
                            `}),c.jsx("span",{className:"flex-1",children:P.allServices}),s===v.id&&c.jsx(ts,{"aria-hidden":"true",className:"h-4 w-4"})]}),v.subItems.map(w=>{const x=w.icon,C=s===w.id;return c.jsxs("button",{type:"button",onClick:()=>E(w.id),className:["flex w-full items-center gap-3","rounded-xl px-3 py-2.5","text-start text-sm font-bold","transition",C?["bg-[rgba(16,148,192,0.13)]","text-[var(--lumora-cyan-light)]"].join(" "):["text-white/68","hover:bg-white/[0.055]","hover:text-white"].join(" ")].join(" "),children:[c.jsx("span",{className:["flex h-9 w-9 shrink-0","items-center justify-center","rounded-xl border",C?["border-[rgba(66,204,227,0.28)]","bg-[rgba(16,148,192,0.13)]","text-[var(--lumora-cyan-light)]"].join(" "):["border-white/[0.07]","bg-white/[0.04]","text-white/48"].join(" ")].join(" "),children:x?c.jsx(x,{"aria-hidden":"true",className:"h-[18px] w-[18px]"}):c.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-current"})}),c.jsx("span",{className:"flex-1",children:w.label}),C?c.jsx(ts,{"aria-hidden":"true",className:"h-4 w-4"}):c.jsx(T,{"aria-hidden":"true",className:"h-4 w-4 text-white/22"})]},w.id)})]})]},v.id):c.jsxs("button",{type:"button",onClick:()=>E(v.id),"aria-current":L?"page":void 0,className:["group flex w-full items-center gap-3","rounded-2xl border px-4 py-3.5","text-start text-sm font-extrabold","transition-all duration-200",L?["border-[rgba(174,221,57,0.28)]","bg-[rgba(174,221,57,0.10)]","text-[var(--lumora-lime-light)]","shadow-[inset_0_0_22px_rgba(174,221,57,0.035)]"].join(" "):["border-white/[0.07]","bg-white/[0.035]","text-white/78","hover:border-[rgba(66,204,227,0.22)]","hover:bg-white/[0.07]","hover:text-white"].join(" ")].join(" "),children:[c.jsx("span",{className:["h-2 w-2 shrink-0 rounded-full","transition",L?["bg-[var(--lumora-lime)]","shadow-[0_0_0_5px_rgba(174,221,57,0.10)]"].join(" "):"bg-white/20 group-hover:bg-[var(--lumora-cyan-light)]"].join(" ")}),c.jsx("span",{className:"flex-1",children:v.label}),L?c.jsx(ts,{"aria-hidden":"true",className:"h-4 w-4 shrink-0"}):c.jsx(T,{"aria-hidden":"true",className:`\r
                            h-4\r
                            w-4\r
                            shrink-0\r
                            text-white/28\r
                            transition\r
                            group-hover:text-[var(--lumora-cyan-light)]\r
                          `})]},v.id)})})}),c.jsxs("div",{className:`\r
              shrink-0\r
              border-t\r
              border-white/[0.08]\r
              bg-black/10\r
              px-4\r
              pb-[max(18px,env(safe-area-inset-bottom))]\r
              pt-4\r
            `,children:[c.jsxs("div",{className:"mb-3 flex items-center gap-2",children:[c.jsx(y2,{"aria-hidden":"true",className:"h-4 w-4 text-[var(--lumora-cyan-light)]"}),c.jsx("span",{className:"text-xs font-extrabold text-white/65",children:P.languageTitle})]}),c.jsx("div",{className:"grid grid-cols-3 gap-2",children:rI.map(v=>{const I=v.code===a;return c.jsxs("button",{type:"button",onClick:()=>u(v.code),"aria-pressed":I,className:["relative flex min-h-12 flex-col","items-center justify-center","rounded-2xl border px-2 py-2","transition-all duration-200",I?["border-[rgba(174,221,57,0.32)]","bg-[rgba(174,221,57,0.10)]","text-[var(--lumora-lime-light)]"].join(" "):["border-white/[0.08]","bg-white/[0.035]","text-white/62","hover:border-[rgba(66,204,227,0.24)]","hover:bg-white/[0.065]","hover:text-white"].join(" ")].join(" "),children:[c.jsx("span",{className:"text-xs font-black",children:v.short}),c.jsx("span",{className:"mt-0.5 text-[9px] font-bold opacity-70",children:v.label}),I&&c.jsx("span",{className:`\r
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
                        `,children:c.jsx(ts,{"aria-hidden":"true",className:"h-2.5 w-2.5"})})]},v.code)})})]})]})]})]});return wd.createPortal(y,document.body)}const ov={ar:{title:"كيف نقدر نساعدك؟",subtitle:"للاستفسار عن خدمات التنظيف وتنسيق المواعيد",wa:"راسلنا على واتساب",call:"اتصل بنا",hint:"أرسل تفاصيل الخدمة والصور",close:"إغلاق",message:"مرحبًا، حابب أستفسر عن خدمات التنظيف لدى Lumora."},he:{title:"איך נוכל לעזור?",subtitle:"לשאלות על שירותי הניקיון ולתיאום מועד",wa:"שלחו לנו הודעה בוואטסאפ",call:"התקשרו אלינו",hint:"שלחו פרטים ותמונות",close:"סגירה",message:"שלום, אשמח לפרטים על שירותי הניקיון של Lumora."},en:{title:"How can we help?",subtitle:"Ask about cleaning services or arrange a visit",wa:"Message us on WhatsApp",call:"Call us",hint:"Send service details and photos",close:"Close",message:"Hi, I'd like to ask about Lumora's cleaning services."}};function iI({open:t,onClose:e,contacts:n=[]}){const{lang:r}=Mt(),s=ov[r]||ov.ar,i=r==="en"?"ltr":"rtl",o=j.useId(),a=j.useId(),u=j.useRef(null),d=j.useRef(e);d.current=e;const h=n.find(P=>P.id==="amir"),p=!!(t&&h);if(j.useEffect(()=>{if(!p)return;const P=u.current;if(!P)return;const N=document.activeElement,E=document.body.style.overflow;return P.showModal(),document.body.style.overflow="hidden",()=>{P.open&&P.close(),document.body.style.overflow=E,N instanceof HTMLElement&&N.isConnected&&N.focus({preventScroll:!0})}},[p]),!p||typeof document>"u")return null;const m=String(h.whatsappRaw||"").replace(/\D/g,""),b=String(h.phoneRaw||"").replace(/[^\d+]/g,""),T=`https://wa.me/${m}?text=${encodeURIComponent(s.message)}`;return wd.createPortal(c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
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
      `}),c.jsx("dialog",{ref:u,className:"lumora-contact-dialog",dir:i,"aria-labelledby":o,"aria-describedby":a,onCancel:P=>{var N;P.preventDefault(),(N=d.current)==null||N.call(d)},onClick:P=>{var E;if(P.target!==P.currentTarget)return;const N=P.currentTarget.getBoundingClientRect();(P.clientX<N.left||P.clientX>N.right||P.clientY<N.top||P.clientY>N.bottom)&&((E=d.current)==null||E.call(d))},children:c.jsxs("div",{className:"p-5 md:p-6",style:{paddingBottom:"max(24px, env(safe-area-inset-bottom))"},children:[c.jsxs("div",{className:"flex items-start justify-between gap-3",children:[c.jsxs("div",{className:"min-w-0 pt-1 text-start",children:[c.jsx("div",{dir:"ltr",className:"mb-2 text-xs font-extrabold tracking-[0.2em] text-gray-500",style:{textAlign:i==="rtl"?"right":"left"},children:"LUMORA"}),c.jsx("h2",{id:o,className:"m-0 text-xl font-extrabold leading-relaxed text-gray-900",children:s.title}),c.jsx("p",{id:a,className:"mt-1 text-sm leading-6 text-gray-500",children:s.subtitle})]}),c.jsx("button",{type:"button",autoFocus:!0,onClick:()=>{var P;return(P=d.current)==null?void 0:P.call(d)},"aria-label":s.close,className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200",children:c.jsx(xd,{className:"h-5 w-5","aria-hidden":"true"})})]}),c.jsxs("div",{className:"mt-4 grid gap-3",children:[c.jsxs("a",{href:T,target:"_blank",rel:"noopener noreferrer",onClick:()=>{var P;return(P=d.current)==null?void 0:P.call(d)},className:"flex min-h-14 items-center gap-4 rounded-2xl bg-emerald-700 px-4 py-4 text-start text-base font-bold text-white transition-colors hover:bg-emerald-800 active:bg-emerald-900",children:[c.jsx("span",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10",children:c.jsx(lo,{className:"h-6 w-6","aria-hidden":"true"})}),c.jsxs("span",{className:"min-w-0",children:[c.jsx("span",{className:"block leading-6",children:s.wa}),c.jsx("span",{className:"mt-1 block text-xs font-normal leading-5 text-white/90",children:s.hint})]})]}),c.jsxs("a",{href:`tel:${b}`,onClick:()=>{var P;return(P=d.current)==null?void 0:P.call(d)},className:"flex min-h-14 items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 text-start text-base font-bold text-gray-900 transition-colors hover:bg-gray-100 active:bg-gray-200",children:[c.jsx("span",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white",children:c.jsx(V2,{className:"h-5 w-5","aria-hidden":"true"})}),c.jsxs("span",{className:"min-w-0",children:[c.jsx("span",{className:"block leading-6",children:s.call}),c.jsx("span",{className:"mt-1 block text-sm font-normal leading-5 tracking-wide text-gray-600",children:c.jsx("bdi",{dir:"ltr",children:h.phoneDisplay})})]})]})]})]})})]}),document.body)}const oI=[{id:"amir",nameAr:"أمير",nameEn:"Amir",nameHe:"אמיר",phone:"050-272-7724",tel:"+972502727724",whatsapp:"972502727724"}],Xf=[{code:"ar",short:"AR",label:"العربية"},{code:"en",short:"EN",label:"English"},{code:"he",short:"HE",label:"עברית"}];function aI({scrollToSection:t}){var H,q;const{lang:e,setLang:n}=Mt(),r=e==="ar"||e==="he",[s,i]=j.useState(!1),[o,a]=j.useState(!1),[u,d]=j.useState(!1),[h,p]=j.useState(!1),[m,b]=j.useState("home"),[T,P]=j.useState(!1),N=j.useRef(null),E=j.useRef(null),y=j.useRef(null),v=j.useRef(null),I=j.useMemo(()=>e==="he"?{brand:"LUMORA",brandSub:"CLEANING",results:"תוצאות",services:"שירותים",faq:"שאלות נפוצות",allServices:"כל השירותים",sofa:"ניקוי ספות",mattress:"ניקוי מזרנים",carpet:"ניקוי שטיחים",request:"הזמנת שירות",contact:"יצירת קשר",language:"שפה",openMenu:"פתיחת תפריט",home:"חזרה לראש הדף",skip:"דלג לתוכן",menuHint:"ניווט מהיר וברור באתר."}:e==="en"?{brand:"LUMORA",brandSub:"CLEANING",results:"Results",services:"Services",faq:"FAQ",allServices:"All services",sofa:"Sofa cleaning",mattress:"Mattress cleaning",carpet:"Carpet cleaning",request:"Request service",contact:"Contact us",language:"Language",openMenu:"Open menu",home:"Back to top",skip:"Skip to content",menuHint:"Fast and clear website navigation."}:{brand:"LUMORA",brandSub:"CLEANING",results:"النتائج",services:"الخدمات",faq:"الأسئلة الشائعة",allServices:"كل الخدمات",sofa:"تنظيف الكنب",mattress:"تنظيف فرشات النوم",carpet:"تنظيف السجاد",request:"جهّز طلبك",contact:"تواصل معنا",language:"اللغة",openMenu:"فتح القائمة",home:"العودة للأعلى",skip:"تجاوز إلى المحتوى",menuHint:"تنقّل سريع وواضح داخل الموقع."},[e]),O=j.useMemo(()=>[{id:"beforeafter",label:I.results},{id:"services",label:I.services,subItems:[{id:"sofa",label:I.sofa,icon:ul},{id:"mattress",label:I.mattress,icon:ku},{id:"carpet",label:I.carpet,icon:Au}]},{id:"faq",label:I.faq}],[I]),L=j.useMemo(()=>Xf.find(V=>V.code===e)||Xf[0],[e]),S=j.useMemo(()=>(oI||[]).map(V=>({id:V.id,name:e==="en"?V.nameEn:e==="he"?V.nameHe:V.nameAr,phoneDisplay:V.phone,phoneRaw:V.tel,whatsappRaw:V.whatsapp,note:e==="en"?V.noteEn:e==="he"?V.noteHe:V.noteAr})),[e]),w=j.useCallback(()=>{a(!1),d(!1)},[]),x=j.useCallback(V=>{var B;if(V==="home"){window.scrollTo({top:0,behavior:"smooth"});return}const F=["sofa","mattress","carpet"];let D=document.getElementById(V);if(!D&&F.includes(V)&&(D=document.getElementById("services")),D){const Q=((B=N.current)==null?void 0:B.offsetHeight)||68,oe=D.getBoundingClientRect().top+window.scrollY-Q-10;window.scrollTo({top:oe,behavior:"smooth"});return}t==null||t(V)},[t]),C=j.useCallback(V=>{b(V),i(!1),w(),x(V)},[w,x]),k=j.useCallback(()=>{i(!1),w(),p(!0)},[w]);j.useEffect(()=>{const V=()=>{P(window.scrollY>10),window.scrollY<120&&b("home")};return V(),window.addEventListener("scroll",V,{passive:!0}),()=>{window.removeEventListener("scroll",V)}},[]),j.useEffect(()=>{const F=["beforeafter","services","faq"].map(B=>document.getElementById(B)).filter(Boolean);if(F.length===0||!("IntersectionObserver"in window))return;const D=new IntersectionObserver(B=>{var oe;const Q=B.filter(re=>re.isIntersecting).sort((re,Ve)=>Ve.intersectionRatio-re.intersectionRatio)[0];(oe=Q==null?void 0:Q.target)!=null&&oe.id&&b(Q.target.id)},{rootMargin:"-25% 0px -60% 0px",threshold:[.05,.2,.4]});return F.forEach(B=>{D.observe(B)}),()=>{D.disconnect()}},[]),j.useEffect(()=>{const V=D=>{var re,Ve,Me;const B=(re=E.current)==null?void 0:re.contains(D.target),Q=(Ve=y.current)==null?void 0:Ve.contains(D.target),oe=(Me=v.current)==null?void 0:Me.contains(D.target);!B&&!Q&&a(!1),oe||d(!1)},F=D=>{D.key==="Escape"&&w()};return document.addEventListener("mousedown",V),window.addEventListener("keydown",F),()=>{document.removeEventListener("mousedown",V),window.removeEventListener("keydown",F)}},[w]);const M=["services","sofa","mattress","carpet"].includes(m),_=V=>["relative inline-flex h-10 items-center justify-center gap-1.5","rounded-xl px-3.5 text-sm font-extrabold","transition-colors duration-200",V?"bg-white/10 text-[var(--lumora-lime-light)]":"text-white/75 hover:bg-white/[0.06] hover:text-white"].join(" ");return c.jsxs(c.Fragment,{children:[c.jsx("a",{href:"#beforeafter",className:`\r
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
        `,children:I.skip}),c.jsxs("header",{ref:N,dir:r?"rtl":"ltr",className:["sticky top-0 z-[9998] w-full border-b","transition-colors duration-200",T?["border-white/10","bg-[rgba(8,12,29,0.97)]","shadow-[0_10px_30px_rgba(3,7,24,0.22)]","backdrop-blur-xl"].join(" "):["border-white/[0.08]","bg-[rgba(8,12,29,0.94)]","backdrop-blur-lg"].join(" ")].join(" "),children:[c.jsx("div",{className:"mx-auto max-w-7xl px-3 sm:px-6",children:c.jsxs("div",{className:"flex h-[66px] items-center justify-between gap-2 sm:h-[72px]",children:[c.jsxs("button",{type:"button",dir:"ltr",onClick:()=>C("home"),"aria-label":I.home,className:`\r
                flex\r
                min-w-0\r
                shrink-0\r
                items-center\r
                gap-2.5\r
                rounded-xl\r
              `,children:[c.jsx("span",{className:`\r
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
                `,children:c.jsx("img",{src:"/lumora-icon.png",alt:"","aria-hidden":"true",draggable:!1,className:"h-full w-full object-cover"})}),c.jsxs("span",{className:"hidden sm:block",children:[c.jsx("span",{className:`\r
                    block\r
                    text-[16px]\r
                    font-black\r
                    leading-none\r
                    tracking-[0.08em]\r
                    text-white\r
                  `,children:I.brand}),c.jsx("span",{className:`\r
                    mt-1\r
                    block\r
                    text-[8px]\r
                    font-black\r
                    leading-none\r
                    tracking-[0.3em]\r
                    text-[var(--lumora-lime)]\r
                  `,children:I.brandSub})]})]}),c.jsxs("nav",{"aria-label":"Primary navigation",className:`\r
                hidden\r
                items-center\r
                gap-1\r
                lg:flex\r
              `,children:[c.jsx("button",{type:"button",onClick:()=>C("beforeafter"),className:_(m==="beforeafter"),children:I.results}),c.jsxs("div",{ref:v,className:"relative",children:[c.jsxs("button",{type:"button",onClick:()=>{d(V=>!V),a(!1)},className:_(M),"aria-expanded":u,"aria-haspopup":"menu",children:[c.jsx("span",{children:I.services}),c.jsx(Oa,{"aria-hidden":"true",className:["h-4 w-4 transition-transform duration-200",u?"rotate-180":""].join(" ")})]}),u&&c.jsxs("div",{role:"menu",className:["absolute top-full mt-2 w-[260px]","rounded-2xl border border-white/10","bg-[rgba(8,12,29,0.98)] p-2","shadow-[0_20px_55px_rgba(0,0,0,0.38)]","backdrop-blur-xl",r?"right-0":"left-0"].join(" "),children:[c.jsxs("button",{type:"button",role:"menuitem",onClick:()=>C("services"),className:`\r
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
                      `,children:[c.jsx("span",{children:I.allServices}),m==="services"&&c.jsx(ts,{"aria-hidden":"true",className:"h-4 w-4"})]}),c.jsx("div",{className:"my-1 h-px bg-white/[0.08]"}),(q=(H=O.find(V=>V.id==="services"))==null?void 0:H.subItems)==null?void 0:q.map(V=>{const F=V.icon,D=m===V.id;return c.jsxs("button",{type:"button",role:"menuitem",onClick:()=>C(V.id),className:["flex w-full items-center gap-3","rounded-xl px-3 py-2.5","text-start text-sm font-bold","transition",D?["bg-[rgba(174,221,57,0.10)]","text-[var(--lumora-lime-light)]"].join(" "):["text-white/72","hover:bg-white/[0.06]","hover:text-white"].join(" ")].join(" "),children:[c.jsx("span",{className:`\r
                                  flex\r
                                  h-8\r
                                  w-8\r
                                  shrink-0\r
                                  items-center\r
                                  justify-center\r
                                  rounded-lg\r
                                  bg-[rgba(16,148,192,0.10)]\r
                                  text-[var(--lumora-cyan-light)]\r
                                `,children:c.jsx(F,{"aria-hidden":"true",className:"h-4 w-4"})}),c.jsx("span",{className:"flex-1",children:V.label}),D&&c.jsx(ts,{"aria-hidden":"true",className:"h-4 w-4"})]},V.id)})]})]}),c.jsx("button",{type:"button",onClick:()=>C("faq"),className:_(m==="faq"),children:I.faq})]}),c.jsxs("div",{className:"hidden items-center gap-2 lg:flex",children:[c.jsxs("div",{ref:E,className:"relative",children:[c.jsxs("button",{type:"button",onClick:()=>{a(V=>!V),d(!1)},className:`\r
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
                  `,"aria-expanded":o,children:[c.jsx("span",{children:L.short}),c.jsx(Oa,{"aria-hidden":"true",className:["h-3.5 w-3.5 transition-transform",o?"rotate-180":""].join(" ")})]}),o&&c.jsx(av,{lang:e,isRTL:r,onSelect:V=>{n(V),a(!1)}})]}),c.jsxs("button",{type:"button",onClick:()=>window.dispatchEvent(new Event("lumora:open-order")),className:`\r
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
                `,children:[c.jsx(lo,{"aria-hidden":"true",className:"h-4 w-4"}),c.jsx("span",{children:I.request})]})]}),c.jsxs("div",{className:"flex items-center gap-1.5 lg:hidden",children:[c.jsxs("div",{ref:y,className:"relative",children:[c.jsxs("button",{type:"button",onClick:()=>a(V=>!V),"aria-label":I.language,"aria-expanded":o,className:`\r
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
                  `,children:[c.jsx("span",{children:L.short}),c.jsx(Oa,{"aria-hidden":"true",className:["h-3 w-3 transition-transform",o?"rotate-180":""].join(" ")})]}),o&&c.jsx(av,{lang:e,isRTL:r,onSelect:V=>{n(V),a(!1)}})]}),c.jsx("button",{type:"button",onClick:k,"aria-label":I.contact,className:`\r
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
                `,children:c.jsx(lo,{"aria-hidden":"true",className:"h-[18px] w-[18px]"})}),c.jsx("button",{type:"button",onClick:()=>{w(),i(!0)},"aria-label":I.openMenu,className:`\r
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
                `,children:c.jsx(P2,{"aria-hidden":"true",className:"h-5 w-5"})})]})]})}),c.jsx(sI,{menuOpen:s,setMenuOpen:i,navItems:O,scrollToSection:C,activeId:m,hintText:I.menuHint,labels:I})]}),c.jsx(iI,{open:h,onClose:()=>p(!1),contacts:S,lang:e}),c.jsx("a",{href:"https://wa.me/972543075619?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D9%86%D8%B8%D9%8A%D9%81.",target:"_blank",rel:"noopener noreferrer","aria-label":e==="en"?"WhatsApp":e==="he"?"וואטסאפ":"واتساب",className:["fixed bottom-4 z-[9997]","flex h-14 w-14 items-center justify-center","rounded-full border border-white/25","bg-[#25D366] text-white","shadow-[0_12px_30px_rgba(0,0,0,0.24)]","transition-transform duration-200","hover:-translate-y-1","active:scale-95",r?"left-4":"right-4"].join(" "),children:c.jsx(lo,{"aria-hidden":"true",className:"h-6 w-6"})})]})}function av({lang:t,isRTL:e,onSelect:n}){return c.jsx("div",{className:["absolute top-full z-[9999] mt-2","w-[170px] rounded-2xl","border border-white/10","bg-[rgba(8,12,29,0.98)]","p-2 shadow-[0_18px_50px_rgba(0,0,0,0.38)]","backdrop-blur-xl",e?"left-0":"right-0"].join(" "),children:Xf.map(r=>{const s=t===r.code;return c.jsxs("button",{type:"button",onClick:()=>n(r.code),className:["flex h-10 w-full items-center gap-2.5","rounded-xl px-3 text-start","text-sm font-bold transition",s?["bg-[rgba(174,221,57,0.10)]","text-[var(--lumora-lime-light)]"].join(" "):["text-white/72","hover:bg-white/[0.06]","hover:text-white"].join(" ")].join(" "),children:[c.jsx("span",{className:`\r
                flex\r
                h-6\r
                min-w-8\r
                items-center\r
                justify-center\r
                rounded-md\r
                bg-white/[0.05]\r
                text-[10px]\r
                font-black\r
              `,children:r.short}),c.jsx("span",{className:"flex-1",children:r.label}),s&&c.jsx(ts,{"aria-hidden":"true",className:"h-4 w-4"})]},r.code)})})}const Sx="/assets/hero1-d2b1a281.jpg",Tx="/assets/hero3-e98d4155.jpg",Eh=[{id:"sofa",src:Sx,position:"center"},{id:"carpet",src:Tx,position:"center"}];function lI(){const[t,e]=j.useState(0),n=j.useMemo(()=>{var r;return typeof window>"u"?!1:(r=window.matchMedia)==null?void 0:r.call(window,"(prefers-reduced-motion: reduce)").matches},[]);return j.useEffect(()=>{if(n||Eh.length<=1)return;const r=window.setInterval(()=>{e(s=>(s+1)%Eh.length)},6e3);return()=>{window.clearInterval(r)}},[n]),c.jsx("div",{"aria-hidden":"true",className:`\r
        pointer-events-none\r
        absolute\r
        inset-0\r
        overflow-hidden\r
        bg-[var(--lumora-navy-950)]\r
      `,children:Eh.map((r,s)=>{const i=s===t;return c.jsx("img",{src:r.src,alt:"",draggable:!1,loading:s===0?"eager":"lazy",decoding:"async",fetchPriority:s===0?"high":"auto",className:["absolute inset-0 h-full w-full object-cover","transition-opacity duration-[1200ms] ease-in-out",i?"opacity-100":"opacity-0"].join(" "),style:{objectPosition:r.position,transform:"translateZ(0)"}},r.id)})})}function cI(){const{t}=Mt(),e=j.useMemo(()=>[t.heroHighlight1||"الكنب",t.heroHighlight2||"السيارات",t.heroHighlight3||"السجاد"],[t.heroHighlight1,t.heroHighlight2,t.heroHighlight3]),[n,r]=j.useState(0),[s,i]=j.useState(""),[o,a]=j.useState(!1),u=120,d=80,h=1500;return j.useEffect(()=>{i(""),a(!1),r(0)},[e]),j.useEffect(()=>{let p;const m=e[n]||"";return!o&&s.length<m.length?p=setTimeout(()=>{i(m.slice(0,s.length+1))},u):!o&&s.length===m.length?p=setTimeout(()=>a(!0),h):o&&s.length>0?p=setTimeout(()=>{i(m.slice(0,s.length-1))},d):o&&s.length===0&&(a(!1),r(b=>(b+1)%e.length)),()=>clearTimeout(p)},[s,o,n,e]),c.jsxs("h1",{className:"text-3xl sm:text-5xl font-extrabold leading-tight mb-6 sm:mb-8 text-center animate-slide-up",style:{textShadow:"0 3px 6px rgba(0,0,0,0.7)"},children:[c.jsx("span",{className:"text-white",children:t.heroStatic||"تنظيف عميق ومرتب لـ"})," ",c.jsxs("span",{className:"text-blue-500",children:[s,c.jsx("span",{className:"animate-pulse",children:"|"})]})]})}function uI(){const{t}=Mt();return c.jsx("p",{className:"text-base sm:text-lg lg:text-xl mb-10 sm:mb-12 max-w-2xl text-center px-2 text-white animate-slide-up",style:{textShadow:"0 2px 5px rgba(0,0,0,0.5)"},children:t.heroSubtitle||"نتائج نظافة بتبين من أول مرة — حجز سريع، التزام بالمواعيد، واهتمام بالتفاصيل حتى آخر زاوية."})}function dI({t={}}){const{lang:e}=Mt(),n=e==="he"?{order:"בניית ההזמנה",services:"השירותים שלנו"}:e==="en"?{order:"Build your order",services:"Explore services"}:{order:"جهّز طلبك",services:"شاهد خدماتنا"},r=()=>{window.dispatchEvent(new Event("lumora:open-order"))};return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"hidden sm:flex items-center gap-3 animate-slide-up",children:[c.jsxs("button",{type:"button",onClick:r,"aria-haspopup":"dialog",className:"btn-primary shadow-lg px-6 py-3 inline-flex items-center justify-center gap-2 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",children:[c.jsx(Eo,{className:"h-5 w-5","aria-hidden":"true"}),c.jsx("span",{className:"text-sm sm:text-base font-semibold",children:n.order})]}),c.jsx("a",{href:"#services",className:"inline-flex items-center justify-center rounded-full px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/25 text-white shadow-lg transition-all duration-200",children:c.jsx("span",{className:"text-sm sm:text-base font-semibold",children:n.services})}),t.showCallButton&&t.callLink?c.jsx("a",{href:t.callLink,className:"inline-flex items-center justify-center rounded-full px-5 py-3 bg-white/10 hover:bg-white/15 border border-white/25 text-white shadow-lg",children:t.callNow||(e==="en"?"Call":e==="he"?"שיחה":"اتصال")}):null]}),c.jsxs("button",{type:"button",onClick:r,"aria-haspopup":"dialog","aria-label":n.order,className:"sm:hidden fixed bottom-6 right-6 z-50 flex min-h-14 items-center justify-center gap-2 rounded-full px-5 bg-[var(--primary)] hover:bg-[var(--primary-600)] text-white shadow-xl transition-transform active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",children:[c.jsx(Eo,{className:"h-5 w-5","aria-hidden":"true"}),c.jsx("span",{className:"text-sm font-bold",children:n.order})]})]})}function hI(){const{t}=Mt(),e=[{icon:"⏱️",text:t.heroPill1||"التزام بالمواعيد"},{icon:"✨",text:t.heroPill2||"تفاصيل دقيقة ونتائج واضحة"},{icon:"🧼",text:t.heroPill3||"مواد آمنة وخيارات صديقة للبيئة"}];return c.jsx("div",{className:"mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 animate-fade-in",children:e.map((n,r)=>c.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-2 rounded-full bg-black/25 border border-white/15 text-white/90 text-xs sm:text-sm backdrop-blur-[2px]",children:[c.jsx("span",{className:"text-base",children:n.icon}),c.jsx("span",{className:"font-semibold tracking-wide",children:n.text})]},r))})}function fI(){const{lang:t}=Mt(),e=j.useMemo(()=>t==="he"?"גלול":t==="en"?"Explore":"استكشف",[t]),[n,r]=j.useState(!0);return j.useEffect(()=>{const s=()=>r(window.scrollY<100);return window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s)},[]),n?c.jsxs("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center",children:[c.jsx("div",{className:"w-8 h-12 border-2 border-white/70 rounded-full flex items-start justify-center p-2 relative",children:c.jsx("div",{className:"w-1 h-2 bg-white/80 rounded-full animate-scroll-dot"})}),c.jsx("div",{className:"w-[1px] h-8 bg-gradient-to-b from-white/60 to-transparent mt-2 animate-scroll-line"}),c.jsx("p",{className:"mt-3 text-xs tracking-widest uppercase text-white/70 animate-fade-in",children:e})]}):null}function pI(){const{t,lang:e}=Mt(),n=e==="ar"||e==="he",r=j.useMemo(()=>e==="he"?"ניקוי מקצועי עם תוצאות ברורות":e==="en"?"Professional cleaning with visible results":"تنظيف احترافي بنتائج واضحة",[e]);return c.jsxs("section",{id:"hero",dir:n?"rtl":"ltr",className:`\r
        relative\r
        isolate\r
        min-h-[620px]\r
        w-full\r
        overflow-hidden\r
        bg-[var(--lumora-navy-950)]\r
        sm:min-h-[660px]\r
        lg:min-h-[690px]\r
      `,children:[c.jsx(lI,{}),c.jsx("div",{"aria-hidden":"true",className:`\r
          pointer-events-none\r
          absolute\r
          inset-0\r
          z-[2]\r
          bg-[rgba(8,12,29,0.66)]\r
        `}),c.jsx("div",{"aria-hidden":"true",className:["pointer-events-none absolute inset-y-0 z-[3] w-full","lg:w-[72%]",n?"right-0 bg-gradient-to-l from-[rgba(8,12,29,0.94)] via-[rgba(8,12,29,0.68)] to-transparent":"left-0 bg-gradient-to-r from-[rgba(8,12,29,0.94)] via-[rgba(8,12,29,0.68)] to-transparent"].join(" ")}),c.jsx("img",{src:"/lumora-icon.png",alt:"","aria-hidden":"true",draggable:!1,className:["pointer-events-none absolute z-[4]","top-1/2 -translate-y-1/2","h-[280px] w-[280px]","select-none object-contain opacity-[0.075]","sm:h-[360px] sm:w-[360px]","lg:h-[470px] lg:w-[470px]",n?"-left-24 sm:-left-20 lg:left-[4%]":"-right-24 sm:-right-20 lg:right-[4%]"].join(" ")}),c.jsx("div",{className:`\r
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
        `,children:c.jsxs("div",{className:["flex w-full flex-col","items-center text-center","lg:max-w-[720px]",n?"lg:items-start lg:text-right":"lg:items-start lg:text-left"].join(" "),children:[c.jsxs("div",{className:`\r
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
            `,children:[c.jsx("span",{"aria-hidden":"true",className:`\r
                h-2\r
                w-2\r
                rounded-full\r
                bg-[var(--lumora-lime)]\r
              `}),c.jsx("span",{children:r})]}),c.jsx(cI,{}),c.jsx(uI,{}),c.jsx(dI,{t}),c.jsx(hI,{})]})}),c.jsx("div",{"aria-hidden":"true",className:`\r
          pointer-events-none\r
          absolute\r
          inset-x-0\r
          bottom-0\r
          z-[21]\r
          h-20\r
          bg-gradient-to-t\r
          from-[rgba(8,12,29,0.72)]\r
          to-transparent\r
        `}),c.jsx(fI,{})]})}const mI="/assets/hero2-a1c9e76a.jpg",gI="/assets/glasscleaning-1abb11f6.jpg",yI=[{id:"sofa",titleKey:"sofaTitle",descriptionKey:"sofaDescription",detailsKey:"sofaDetails",icon:"couch",image:Sx,priority:"primary"},{id:"mattress",titleKey:"mattressTitle",descriptionKey:"mattressDescription",detailsKey:"mattressDetails",icon:"bed",image:mI,priority:"primary"},{id:"carpet",titleKey:"carpetTitle",descriptionKey:"carpetDescription",detailsKey:"carpetDetails",icon:"layer-group",image:Tx,priority:"primary"},{id:"glass",titleKey:"glassTitle",descriptionKey:"glassDescription",detailsKey:"glassDetails",icon:"sparkles",image:gI,priority:"secondary"}],vI={couch:ul,bed:ku,"layer-group":Au,sparkles:So},Mi=(t,e)=>t==="he"?e.he:t==="en"?e.en:e.ar;function wI({id:t,icon:e,titleKey:n,descriptionKey:r,image:s,priority:i="secondary",onClick:o,onBook:a}){const{t:u,lang:d,isRTL:h}=Mt(),[p,m]=j.useState(!1),b=j.useRef(null),T=vI[e]||So,P=h?JT:wx,N=t==="glass",E=i==="primary",y=(u==null?void 0:u[n])||n,v=(u==null?void 0:u[r])||r,I={addToOrder:Mi(d,{ar:"أضف للطلب",en:"Add to order",he:"הוספה להזמנה"}),available:Mi(d,{ar:"متاح للطلب",en:"Available",he:"זמין להזמנה"}),unavailable:Mi(d,{ar:"غير متاح حاليًا",en:"Currently unavailable",he:"לא זמין כרגע"}),unavailableDescription:Mi(d,{ar:"هذه الخدمة متوقفة مؤقتًا ولا يمكن إضافتها إلى الطلب.",en:"This service is temporarily paused and cannot be added to the order.",he:"השירות מושהה זמנית ולא ניתן להוסיף אותו להזמנה."}),flexibleOrder:Mi(d,{ar:"يمكن دمجها مع خدمات أخرى",en:"Can be combined with other services",he:"ניתן לשלב עם שירותים נוספים"}),primary:Mi(d,{ar:"خدمة أساسية",en:"Main service",he:"שירות מרכזי"})};j.useEffect(()=>{const w=b.current;if(!w)return;if(!("IntersectionObserver"in window)){m(!0);return}const x=new IntersectionObserver(([C])=>{C.isIntersecting&&(m(!0),x.unobserve(C.target))},{threshold:.12});return x.observe(w),()=>{x.disconnect()}},[]);const O=()=>{N||o==null||o()},L=w=>{N||(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),O())},S=w=>{w.stopPropagation(),!N&&(a==null||a())};return c.jsxs("article",{ref:b,id:t,dir:h?"rtl":"ltr",role:N?void 0:"button",tabIndex:N?-1:0,"aria-disabled":N,"aria-label":N?`${y} - ${I.unavailable}`:y,onClick:O,onKeyDown:L,className:["group relative flex h-full min-h-[390px]","flex-col overflow-hidden rounded-[26px]","border bg-white","transition-all duration-500 ease-out",p?"translate-y-0 opacity-100":"translate-y-4 opacity-0",N?["cursor-not-allowed","border-slate-200","shadow-[0_12px_34px_rgba(8,12,29,0.06)]"].join(" "):["cursor-pointer","border-[rgba(17,21,47,0.10)]","shadow-[0_14px_38px_rgba(8,12,29,0.08)]","hover:-translate-y-1.5","hover:border-[rgba(16,148,192,0.28)]","hover:shadow-[0_24px_58px_rgba(8,12,29,0.14)]","focus:outline-none","focus:ring-4","focus:ring-[rgba(174,221,57,0.18)]"].join(" ")].join(" "),children:[c.jsx("div",{"aria-hidden":"true",className:["absolute inset-x-0 top-0 z-20 h-1",N?"bg-slate-300":["bg-gradient-to-r","from-[var(--lumora-cyan)]","via-[var(--lumora-lime)]","to-[var(--lumora-cyan-light)]"].join(" ")].join(" ")}),c.jsxs("div",{className:`\r
          relative\r
          h-[185px]\r
          shrink-0\r
          overflow-hidden\r
          bg-[var(--lumora-navy-950)]\r
        `,children:[c.jsx("img",{src:s,alt:y,loading:"lazy",decoding:"async",draggable:!1,className:["h-full w-full object-cover","transition-transform duration-700 ease-out",N?"scale-[1.02] grayscale-[35%] opacity-65":"group-hover:scale-[1.055]"].join(" ")}),c.jsx("div",{"aria-hidden":"true",className:["absolute inset-0","bg-gradient-to-t","from-[rgba(8,12,29,0.88)]","via-[rgba(8,12,29,0.12)]","to-transparent"].join(" ")}),c.jsx("div",{className:["absolute bottom-4 start-4","flex h-12 w-12 items-center","justify-center rounded-2xl","border backdrop-blur-md",N?["border-white/15","bg-slate-700/75","text-white/70"].join(" "):["border-[rgba(174,221,57,0.30)]","bg-[rgba(8,12,29,0.78)]","text-[var(--lumora-lime-light)]","shadow-[0_10px_24px_rgba(0,0,0,0.18)]"].join(" ")].join(" "),children:c.jsx(T,{"aria-hidden":"true",className:"h-5 w-5",strokeWidth:2.2})}),c.jsxs("div",{className:["absolute end-3 top-3","inline-flex min-h-8 items-center","gap-1.5 rounded-full border","px-3 py-1","text-[11px] font-black","backdrop-blur-md",N?["border-white/15","bg-[rgba(15,23,42,0.82)]","text-white"].join(" "):["border-[rgba(174,221,57,0.30)]","bg-[rgba(8,12,29,0.80)]","text-[var(--lumora-lime-light)]"].join(" ")].join(" "),children:[N?c.jsx(Qf,{"aria-hidden":"true",className:"h-3.5 w-3.5"}):c.jsx(ts,{"aria-hidden":"true",className:"h-3.5 w-3.5"}),c.jsx("span",{children:N?I.unavailable:I.available})]})]}),c.jsxs("div",{className:"flex flex-1 flex-col p-5 sm:p-6",children:[c.jsx("div",{className:"flex items-start gap-3",children:c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("h3",{className:["text-xl font-black leading-tight","tracking-tight",N?"text-slate-600":"text-[var(--lumora-navy-900)]"].join(" "),children:y}),E&&!N&&c.jsx("span",{className:`\r
                  mt-2\r
                  inline-flex\r
                  rounded-full\r
                  bg-[rgba(16,148,192,0.07)]\r
                  px-2.5\r
                  py-1\r
                  text-[10px]\r
                  font-black\r
                  text-[var(--lumora-cyan)]\r
                `,children:I.primary})]})}),c.jsx("p",{className:["mt-3 text-sm font-medium leading-6",N?"text-slate-500":"text-slate-600"].join(" "),children:v}),N&&c.jsx("div",{className:`\r
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
            `,children:I.unavailableDescription}),!N&&c.jsxs("div",{className:`\r
              mt-4\r
              flex\r
              items-center\r
              gap-2\r
              text-xs\r
              font-bold\r
              text-[var(--lumora-cyan)]\r
            `,children:[c.jsx(So,{"aria-hidden":"true",className:"h-3.5 w-3.5"}),c.jsx("span",{children:I.flexibleOrder})]}),c.jsx("div",{className:"mt-auto pt-5",children:c.jsxs("button",{type:"button",disabled:N,onClick:S,className:["flex h-12 w-full items-center","justify-center gap-2 rounded-xl","px-4 text-sm font-black","transition-all duration-200",N?["cursor-not-allowed","border border-slate-200","bg-slate-100","text-slate-400"].join(" "):["bg-[var(--lumora-lime)]","text-[var(--lumora-navy-950)]","shadow-[0_10px_24px_rgba(79,168,37,0.18)]","hover:brightness-105","active:scale-[0.985]"].join(" ")].join(" "),children:[N?c.jsx(Qf,{"aria-hidden":"true",className:"h-4 w-4"}):c.jsx(Al,{"aria-hidden":"true",className:"h-4 w-4"}),c.jsx("span",{children:N?I.unavailable:I.addToOrder}),!N&&c.jsx(P,{"aria-hidden":"true",className:`\r
                  h-4\r
                  w-4\r
                  transition-transform\r
                  group-hover:-translate-x-0.5\r
                  ltr:group-hover:translate-x-0.5\r
                `})]})})]}),N&&c.jsx("div",{"aria-hidden":"true",className:`\r
            pointer-events-none\r
            absolute\r
            inset-0\r
            rounded-[26px]\r
            bg-white/[0.06]\r
          `})]})}const Ix="lumora-multi-service-order-v1",Jf=[{value:"single",ar:"مفرد",en:"Single",he:"יחיד"},{value:"singleAndHalf",ar:"مفرد ونص",en:"Single and a half",he:"מיטה וחצי"},{value:"double",ar:"مزدوج",en:"Double",he:"זוגי"}],Zf=[{value:"one",ar:"وجه واحد",en:"One side",he:"צד אחד"},{value:"two",ar:"وجهين",en:"Two sides",he:"שני צדדים"}],Tm=t=>`${t}-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,lv=()=>({id:Tm("sofa"),seats:1}),cv=()=>({id:Tm("carpet"),length:"",width:"",unknownMeasurements:!1}),uv=()=>({id:Tm("mattress"),count:1,size:"single",sides:"one"}),qc=()=>({location:"",sofas:[],carpets:[],mattresses:[],notes:""}),le=(t,e)=>t==="he"?e.he:t==="en"?e.en:e.ar,Im=(t,e)=>le(t,{ar:e.ar,en:e.en,he:e.he}),xI=(t,e)=>{const n=Jf.find(r=>r.value===e);return n?Im(t,n):e},_I=(t,e)=>{const n=Zf.find(r=>r.value===e);return n?Im(t,n):e},Gt=(t,e=1)=>{const n=Number.parseInt(t,10);return!Number.isFinite(n)||n<1?e:n},Vr=t=>{const e=Number.parseFloat(t);return!Number.isFinite(e)||e<=0?null:e},bI=()=>{if(typeof window>"u")return qc();try{const t=window.localStorage.getItem(Ix);if(!t)return qc();const e=JSON.parse(t);return{location:typeof(e==null?void 0:e.location)=="string"?e.location:"",sofas:Array.isArray(e==null?void 0:e.sofas)?e.sofas:[],carpets:Array.isArray(e==null?void 0:e.carpets)?e.carpets:[],mattresses:Array.isArray(e==null?void 0:e.mattresses)?e.mattresses:[],notes:typeof(e==null?void 0:e.notes)=="string"?e.notes:""}}catch{return qc()}},dv=t=>{const e=t.sofas.reduce((i,o)=>i+Gt(o.seats),0),n=t.carpets.length,r=t.mattresses.reduce((i,o)=>i+Gt(o.count),0),s=[t.sofas.length>0,t.carpets.length>0,t.mattresses.length>0].filter(Boolean).length;return{sofaSeats:e,carpetCount:n,mattressCount:r,selectedServiceCount:s,totalItems:e+n+r,hasItems:e>0||n>0||r>0}},EI=(t,e="ar")=>{const n=[];return n.push(le(e,{ar:"مرحبًا، أريد طلب خدمات تنظيف.",en:"Hello, I would like to request cleaning services.",he:"שלום, אני רוצה להזמין שירותי ניקיון."})),n.push(le(e,{ar:`البلدة: ${t.location}`,en:`Town: ${t.location}`,he:`יישוב: ${t.location}`})),n.push(""),n.push(le(e,{ar:"الخدمات المطلوبة:",en:"Requested services:",he:"השירותים המבוקשים:"})),t.sofas.length>0&&(n.push(""),n.push(le(e,{ar:"الكنب:",en:"Sofas:",he:"ספות:"})),t.sofas.forEach((r,s)=>{n.push(le(e,{ar:`${s+1}. عدد المقاعد: ${Gt(r.seats)}`,en:`${s+1}. Number of seats: ${Gt(r.seats)}`,he:`${s+1}. מספר מושבים: ${Gt(r.seats)}`}))})),t.carpets.length>0&&(n.push(""),n.push(le(e,{ar:"السجاد:",en:"Carpets:",he:"שטיחים:"})),t.carpets.forEach((r,s)=>{if(r.unknownMeasurements){n.push(le(e,{ar:`${s+1}. القياسات غير معروفة`,en:`${s+1}. Measurements are unknown`,he:`${s+1}. המידות אינן ידועות`}));return}n.push(le(e,{ar:`${s+1}. الطول: ${r.length} متر × العرض: ${r.width} متر`,en:`${s+1}. Length: ${r.length} m × Width: ${r.width} m`,he:`${s+1}. אורך: ${r.length} מ׳ × רוחב: ${r.width} מ׳`}))})),t.mattresses.length>0&&(n.push(""),n.push(le(e,{ar:"فرشات النوم:",en:"Mattresses:",he:"מזרנים:"})),t.mattresses.forEach((r,s)=>{const i=xI(e,r.size),o=_I(e,r.sides);n.push(le(e,{ar:`${s+1}. العدد: ${Gt(r.count)} | الحجم: ${i} | التنظيف: ${o}`,en:`${s+1}. Quantity: ${Gt(r.count)} | Size: ${i} | Cleaning: ${o}`,he:`${s+1}. כמות: ${Gt(r.count)} | גודל: ${i} | ניקוי: ${o}`}))})),t.notes.trim()&&(n.push(""),n.push(le(e,{ar:`ملاحظات: ${t.notes.trim()}`,en:`Notes: ${t.notes.trim()}`,he:`הערות: ${t.notes.trim()}`}))),n.push(""),n.push(le(e,{ar:"سأرسل الصور اللازمة عبر واتساب.",en:"I will send the necessary photos through WhatsApp.",he:"אשלח את התמונות הדרושות דרך WhatsApp."})),n.join(`
`)};function SI({isOpen:t,onClose:e,initialServiceId:n=null,onSubmit:r,onSummaryChange:s}){const{lang:i}=Mt(),o=i==="ar"||i==="he",[a,u]=j.useState(bI),[d,h]=j.useState(!1),[p,m]=j.useState(!1),b=j.useRef(null),T=j.useMemo(()=>({title:le(i,{ar:"جهّز طلبك",en:"Build your order",he:"בניית ההזמנה"}),subtitle:le(i,{ar:"أضف أي عدد من الخدمات والعناصر، ثم أرسلها برسالة واتساب واحدة.",en:"Add any number of services and items, then send one WhatsApp message.",he:"הוסיפו כל מספר של שירותים ופריטים ושלחו הודעת WhatsApp אחת."}),close:le(i,{ar:"إغلاق",en:"Close",he:"סגירה"}),location:le(i,{ar:"البلدة",en:"Town",he:"יישוב"}),locationPlaceholder:le(i,{ar:"اكتب اسم البلدة",en:"Enter your town",he:"הקלידו את שם היישוב"}),locationError:le(i,{ar:"اكتب اسم البلدة للمتابعة.",en:"Enter your town to continue.",he:"יש להזין את שם היישוב."}),addServices:le(i,{ar:"أضف الخدمات المطلوبة",en:"Add requested services",he:"הוספת שירותים"}),sofa:le(i,{ar:"كنب",en:"Sofa",he:"ספות"}),carpet:le(i,{ar:"سجاد",en:"Carpet",he:"שטיחים"}),mattress:le(i,{ar:"فرشات نوم",en:"Mattresses",he:"מזרנים"}),sofasTitle:le(i,{ar:"الكنب",en:"Sofas",he:"ספות"}),sofaItem:le(i,{ar:"كنب",en:"Sofa",he:"ספה"}),seats:le(i,{ar:"عدد المقاعد",en:"Number of seats",he:"מספר מושבים"}),addSofa:le(i,{ar:"إضافة كنب آخر",en:"Add another sofa",he:"הוספת ספה נוספת"}),carpetsTitle:le(i,{ar:"السجاد",en:"Carpets",he:"שטיחים"}),carpetItem:le(i,{ar:"سجادة",en:"Carpet",he:"שטיח"}),length:le(i,{ar:"الطول بالمتر",en:"Length in meters",he:"אורך במטרים"}),width:le(i,{ar:"العرض بالمتر",en:"Width in meters",he:"רוחב במטרים"}),unknownMeasurements:le(i,{ar:"لا أعرف القياسات",en:"I do not know the measurements",he:"אני לא יודע/ת את המידות"}),carpetMeasurementError:le(i,{ar:"أدخل الطول والعرض أو اختر أن القياسات غير معروفة.",en:"Enter the length and width, or mark the measurements as unknown.",he:"יש להזין אורך ורוחב או לסמן שהמידות אינן ידועות."}),addCarpet:le(i,{ar:"إضافة سجادة أخرى",en:"Add another carpet",he:"הוספת שטיח נוסף"}),mattressesTitle:le(i,{ar:"فرشات النوم",en:"Mattresses",he:"מזרנים"}),mattressGroup:le(i,{ar:"مجموعة فرشات",en:"Mattress group",he:"קבוצת מזרנים"}),mattressCount:le(i,{ar:"عدد الفرشات",en:"Number of mattresses",he:"מספר מזרנים"}),size:le(i,{ar:"الحجم",en:"Size",he:"גודל"}),sides:le(i,{ar:"عدد الأوجه",en:"Cleaning sides",he:"מספר צדדים"}),addMattressGroup:le(i,{ar:"إضافة تركيبة فرشات أخرى",en:"Add another mattress combination",he:"הוספת שילוב מזרנים נוסף"}),notes:le(i,{ar:"ملاحظات إضافية",en:"Additional notes",he:"הערות נוספות"}),notesPlaceholder:le(i,{ar:"مثال: يوجد درج، طابق مرتفع، بقع معينة...",en:"Example: stairs, high floor, specific stains...",he:"לדוגמה: מדרגות, קומה גבוהה, כתמים מסוימים..."}),emptyTitle:le(i,{ar:"لسه ما أضفت أي خدمة",en:"No services added yet",he:"עדיין לא נוספו שירותים"}),emptyText:le(i,{ar:"اختر الكنب أو السجاد أو فرشات النوم من الأزرار فوق.",en:"Choose sofa, carpet, or mattresses from the buttons above.",he:"בחרו ספות, שטיחים או מזרנים מהכפתורים למעלה."}),atLeastOneError:le(i,{ar:"أضف خدمة واحدة على الأقل.",en:"Add at least one service.",he:"יש להוסיף לפחות שירות אחד."}),clear:le(i,{ar:"مسح الطلب",en:"Clear order",he:"ניקוי ההזמנה"}),send:le(i,{ar:"مراجعة وإرسال عبر واتساب",en:"Review and send through WhatsApp",he:"בדיקה ושליחה דרך WhatsApp"}),items:le(i,{ar:"عناصر",en:"items",he:"פריטים"}),delete:le(i,{ar:"حذف",en:"Delete",he:"מחיקה"})}),[i]),P=j.useMemo(()=>dv(a),[a]);if(j.useEffect(()=>{try{window.localStorage.setItem(Ix,JSON.stringify(a))}catch{}s==null||s(P)},[s,a,P]),j.useEffect(()=>{if(!t){m(!1);return}const V=window.requestAnimationFrame(()=>{m(!0)});return()=>{window.cancelAnimationFrame(V)}},[t]),j.useEffect(()=>{!t||!n||u(V=>n==="sofa"&&V.sofas.length===0?{...V,sofas:[lv()]}:n==="carpet"&&V.carpets.length===0?{...V,carpets:[cv()]}:n==="mattress"&&V.mattresses.length===0?{...V,mattresses:[uv()]}:V)},[n,t]),j.useEffect(()=>{if(!t)return;const V=document.body.style.overflow;document.body.style.overflow="hidden";const F=D=>{D.key==="Escape"&&(e==null||e())};return window.addEventListener("keydown",F),()=>{window.removeEventListener("keydown",F),document.body.style.overflow=V}},[t,e]),!t)return null;const N=()=>{u(V=>({...V,sofas:[...V.sofas,lv()]}))},E=()=>{u(V=>({...V,carpets:[...V.carpets,cv()]}))},y=()=>{u(V=>({...V,mattresses:[...V.mattresses,uv()]}))},v=(V,F)=>{u(D=>({...D,sofas:D.sofas.map(B=>B.id===V?{...B,...F}:B)}))},I=(V,F)=>{u(D=>({...D,carpets:D.carpets.map(B=>B.id===V?{...B,...F}:B)}))},O=(V,F)=>{u(D=>({...D,mattresses:D.mattresses.map(B=>B.id===V?{...B,...F}:B)}))},L=V=>{u(F=>({...F,sofas:F.sofas.filter(D=>D.id!==V)}))},S=V=>{u(F=>({...F,carpets:F.carpets.filter(D=>D.id!==V)}))},w=V=>{u(F=>({...F,mattresses:F.mattresses.filter(D=>D.id!==V)}))},x=a.location.trim().length>=2,C=a.sofas.every(V=>Gt(V.seats,0)>=1),k=a.carpets.every(V=>V.unknownMeasurements||Vr(V.length)!==null&&Vr(V.width)!==null),M=a.mattresses.every(V=>Gt(V.count,0)>=1&&Jf.some(F=>F.value===V.size)&&Zf.some(F=>F.value===V.sides)),_=x&&P.hasItems&&C&&k&&M,H=()=>{var F;if(h(!0),!_){x||(F=b.current)==null||F.focus();return}const V={location:a.location.trim(),sofas:a.sofas.map(D=>({...D,seats:Gt(D.seats)})),carpets:a.carpets.map(D=>({...D,length:D.unknownMeasurements?"":String(Vr(D.length)),width:D.unknownMeasurements?"":String(Vr(D.width))})),mattresses:a.mattresses.map(D=>({...D,count:Gt(D.count)})),notes:a.notes.trim()};r==null||r({order:V,message:EI(V,i),summary:dv(V)})},q=()=>{u(qc()),h(!1)};return c.jsxs("div",{dir:o?"rtl":"ltr",className:["fixed inset-0 z-[10030]","flex items-end justify-center","bg-[rgba(3,7,24,0.72)]","transition-opacity duration-200","sm:items-center sm:p-4",p?"opacity-100":"opacity-0"].join(" "),children:[c.jsx("button",{type:"button",onClick:e,"aria-label":T.close,className:"absolute inset-0 h-full w-full"}),c.jsxs("section",{role:"dialog","aria-modal":"true","aria-labelledby":"order-builder-title",className:["relative z-10 flex max-h-[96dvh]","w-full flex-col overflow-hidden","rounded-t-[28px] bg-[#f7f9f5]","shadow-[0_-24px_80px_rgba(0,0,0,0.32)]","transition-transform duration-200","sm:max-w-3xl sm:rounded-[28px]",p?"translate-y-0 scale-100":"translate-y-8 scale-[0.985]"].join(" "),children:[c.jsxs("header",{className:`\r
            relative\r
            shrink-0\r
            overflow-hidden\r
            bg-[var(--lumora-navy-950)]\r
            px-4\r
            py-5\r
            text-white\r
            sm:px-6\r
          `,children:[c.jsx("div",{"aria-hidden":"true",className:`\r
              absolute\r
              -end-14\r
              -top-14\r
              h-36\r
              w-36\r
              rounded-full\r
              bg-[rgba(174,221,57,0.10)]\r
              blur-2xl\r
            `}),c.jsxs("div",{className:"relative flex items-start gap-3",children:[c.jsx("div",{className:`\r
                flex\r
                h-11\r
                w-11\r
                shrink-0\r
                items-center\r
                justify-center\r
                rounded-2xl\r
                bg-[rgba(174,221,57,0.12)]\r
                text-[var(--lumora-lime-light)]\r
              `,children:c.jsx(Eo,{className:"h-5 w-5"})}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("h2",{id:"order-builder-title",className:`\r
                  text-xl\r
                  font-black\r
                  leading-tight\r
                  sm:text-2xl\r
                `,children:T.title}),c.jsx("p",{className:`\r
                  mt-1\r
                  max-w-xl\r
                  text-sm\r
                  font-medium\r
                  leading-6\r
                  text-white/70\r
                `,children:T.subtitle})]}),c.jsx("button",{type:"button",onClick:e,"aria-label":T.close,className:`\r
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
              `,children:c.jsx(xd,{className:"h-5 w-5"})})]})]}),c.jsx("div",{className:`\r
            min-h-0\r
            flex-1\r
            overflow-y-auto\r
            overscroll-contain\r
          `,children:c.jsxs("div",{className:"space-y-5 p-4 sm:p-6",children:[c.jsxs("div",{className:`\r
                rounded-2xl\r
                border\r
                border-slate-200\r
                bg-white\r
                p-4\r
              `,children:[c.jsxs("label",{htmlFor:"order-location",className:`\r
                  flex\r
                  items-center\r
                  gap-2\r
                  text-sm\r
                  font-black\r
                  text-[var(--lumora-navy-900)]\r
                `,children:[c.jsx(_x,{className:`\r
                    h-4\r
                    w-4\r
                    text-[var(--lumora-cyan)]\r
                  `}),T.location]}),c.jsx("input",{ref:b,id:"order-location",type:"text",value:a.location,onChange:V=>{u(F=>({...F,location:V.target.value}))},placeholder:T.locationPlaceholder,autoComplete:"address-level2",className:["mt-2 h-12 w-full rounded-xl","border bg-white px-4","text-sm font-bold text-slate-900","outline-none transition","placeholder:text-slate-400",d&&!x?"border-rose-400 ring-2 ring-rose-100":["border-slate-200","focus:border-[var(--lumora-cyan)]","focus:ring-2","focus:ring-[rgba(16,148,192,0.12)]"].join(" ")].join(" ")}),d&&!x&&c.jsx("p",{className:`\r
                    mt-2\r
                    text-xs\r
                    font-bold\r
                    text-rose-600\r
                  `,children:T.locationError})]}),c.jsxs("div",{children:[c.jsx("p",{className:`\r
                  mb-3\r
                  text-sm\r
                  font-black\r
                  text-[var(--lumora-navy-900)]\r
                `,children:T.addServices}),c.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[c.jsx(Sh,{icon:ul,label:T.sofa,active:a.sofas.length>0,onClick:N}),c.jsx(Sh,{icon:Au,label:T.carpet,active:a.carpets.length>0,onClick:E}),c.jsx(Sh,{icon:ku,label:T.mattress,active:a.mattresses.length>0,onClick:y})]})]}),!P.hasItems&&c.jsxs("div",{className:["rounded-2xl border-2 border-dashed","px-5 py-8 text-center",d?["border-rose-300","bg-rose-50"].join(" "):["border-slate-200","bg-white"].join(" ")].join(" "),children:[c.jsx(Eo,{className:`\r
                    mx-auto\r
                    h-8\r
                    w-8\r
                    text-slate-300\r
                  `}),c.jsx("p",{className:`\r
                    mt-3\r
                    font-black\r
                    text-[var(--lumora-navy-900)]\r
                  `,children:T.emptyTitle}),c.jsx("p",{className:`\r
                    mx-auto\r
                    mt-1\r
                    max-w-md\r
                    text-sm\r
                    leading-6\r
                    text-slate-500\r
                  `,children:d?T.atLeastOneError:T.emptyText})]}),a.sofas.length>0&&c.jsxs(Th,{icon:ul,title:T.sofasTitle,children:[c.jsx("div",{className:"space-y-3",children:a.sofas.map((V,F)=>c.jsx(Ih,{title:`${T.sofaItem} ${F+1}`,deleteLabel:T.delete,onDelete:()=>L(V.id),children:c.jsx(hv,{label:T.seats,value:V.seats,onChange:D=>v(V.id,{seats:D})})},V.id))}),c.jsx(Ch,{label:T.addSofa,onClick:N})]}),a.carpets.length>0&&c.jsxs(Th,{icon:Au,title:T.carpetsTitle,children:[c.jsx("div",{className:"space-y-3",children:a.carpets.map((V,F)=>{const D=V.unknownMeasurements||Vr(V.length)!==null&&Vr(V.width)!==null;return c.jsxs(Ih,{title:`${T.carpetItem} ${F+1}`,deleteLabel:T.delete,onDelete:()=>S(V.id),children:[c.jsxs("label",{className:`\r
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
                            `,children:[c.jsx("input",{type:"checkbox",checked:V.unknownMeasurements,onChange:B=>{I(V.id,{unknownMeasurements:B.target.checked,...B.target.checked?{length:"",width:""}:{}})},className:`\r
                                h-4\r
                                w-4\r
                                accent-[var(--lumora-green)]\r
                              `}),c.jsx("span",{children:T.unknownMeasurements})]}),!V.unknownMeasurements&&c.jsxs("div",{className:"mt-3 grid grid-cols-2 gap-3",children:[c.jsx(fv,{label:T.length,value:V.length,invalid:d&&Vr(V.length)===null,onChange:B=>I(V.id,{length:B})}),c.jsx(fv,{label:T.width,value:V.width,invalid:d&&Vr(V.width)===null,onChange:B=>I(V.id,{width:B})})]}),d&&!D&&c.jsx("p",{className:`\r
                                mt-2\r
                                text-xs\r
                                font-bold\r
                                text-rose-600\r
                              `,children:T.carpetMeasurementError})]},V.id)})}),c.jsx(Ch,{label:T.addCarpet,onClick:E})]}),a.mattresses.length>0&&c.jsxs(Th,{icon:ku,title:T.mattressesTitle,children:[c.jsx("div",{className:"space-y-3",children:a.mattresses.map((V,F)=>c.jsxs(Ih,{title:`${T.mattressGroup} ${F+1}`,deleteLabel:T.delete,onDelete:()=>w(V.id),children:[c.jsx(hv,{label:T.mattressCount,value:V.count,onChange:D=>O(V.id,{count:D})}),c.jsx(pv,{label:T.size,options:Jf,lang:i,value:V.size,onChange:D=>O(V.id,{size:D})}),c.jsx(pv,{label:T.sides,options:Zf,lang:i,value:V.sides,columns:"grid-cols-2",onChange:D=>O(V.id,{sides:D})})]},V.id))}),c.jsx(Ch,{label:T.addMattressGroup,onClick:y})]}),P.hasItems&&c.jsxs("div",{className:`\r
                  rounded-2xl\r
                  border\r
                  border-slate-200\r
                  bg-white\r
                  p-4\r
                `,children:[c.jsx("label",{htmlFor:"order-notes",className:`\r
                    text-sm\r
                    font-black\r
                    text-[var(--lumora-navy-900)]\r
                  `,children:T.notes}),c.jsx("textarea",{id:"order-notes",value:a.notes,onChange:V=>{u(F=>({...F,notes:V.target.value}))},placeholder:T.notesPlaceholder,rows:3,className:`\r
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
                  `})]})]})}),c.jsxs("footer",{className:`\r
            shrink-0\r
            border-t\r
            border-slate-200\r
            bg-white\r
            px-4\r
            pb-[max(14px,env(safe-area-inset-bottom))]\r
            pt-3\r
            sm:px-6\r
            sm:pb-5\r
          `,children:[c.jsxs("div",{className:"mb-3 flex items-center justify-between gap-3",children:[c.jsxs("div",{className:`\r
                flex\r
                items-center\r
                gap-2\r
                text-sm\r
                font-bold\r
                text-slate-600\r
              `,children:[c.jsx(c2,{className:`\r
                  h-4\r
                  w-4\r
                  text-[var(--lumora-green)]\r
                `}),c.jsxs("span",{children:[P.totalItems," ",T.items]})]}),P.hasItems&&c.jsx("button",{type:"button",onClick:q,className:`\r
                  text-xs\r
                  font-black\r
                  text-rose-600\r
                  transition\r
                  hover:text-rose-700\r
                `,children:T.clear})]}),c.jsxs("button",{type:"button",onClick:H,className:`\r
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
            `,children:[c.jsx(lo,{className:"h-5 w-5"}),c.jsx("span",{children:T.send})]})]})]})]})}function Sh({icon:t,label:e,active:n,onClick:r}){return c.jsxs("button",{type:"button",onClick:r,className:["flex min-h-[84px] flex-col","items-center justify-center gap-2","rounded-2xl border px-2 py-3","text-center text-xs font-black","transition active:scale-[0.98]",n?["border-[rgba(174,221,57,0.55)]","bg-[rgba(174,221,57,0.10)]","text-[var(--lumora-navy-900)]"].join(" "):["border-slate-200","bg-white","text-slate-700","hover:border-[rgba(16,148,192,0.30)]"].join(" ")].join(" "),children:[c.jsx(t,{className:["h-5 w-5",n?"text-[var(--lumora-green)]":"text-[var(--lumora-cyan)]"].join(" ")}),c.jsx("span",{children:e}),c.jsx(Al,{className:"h-3.5 w-3.5"})]})}function Th({icon:t,title:e,children:n}){return c.jsxs("section",{className:`\r
        rounded-2xl\r
        border\r
        border-slate-200\r
        bg-white\r
        p-4\r
      `,children:[c.jsxs("div",{className:`\r
          mb-4\r
          flex\r
          items-center\r
          gap-2\r
          border-b\r
          border-slate-100\r
          pb-3\r
        `,children:[c.jsx("div",{className:`\r
            flex\r
            h-9\r
            w-9\r
            items-center\r
            justify-center\r
            rounded-xl\r
            bg-[rgba(16,148,192,0.08)]\r
            text-[var(--lumora-cyan)]\r
          `,children:c.jsx(t,{className:"h-4 w-4"})}),c.jsx("h3",{className:`\r
            text-base\r
            font-black\r
            text-[var(--lumora-navy-900)]\r
          `,children:e})]}),n]})}function Ih({title:t,deleteLabel:e,onDelete:n,children:r}){return c.jsxs("div",{className:`\r
        rounded-2xl\r
        border\r
        border-slate-200\r
        bg-[#fbfcfa]\r
        p-3.5\r
      `,children:[c.jsxs("div",{className:"mb-3 flex items-center justify-between gap-3",children:[c.jsx("p",{className:`\r
            text-sm\r
            font-black\r
            text-[var(--lumora-navy-900)]\r
          `,children:t}),c.jsx("button",{type:"button",onClick:n,"aria-label":e,className:`\r
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
          `,children:c.jsx(W2,{className:"h-4 w-4"})})]}),c.jsx("div",{className:"space-y-4",children:r})]})}function Ch({label:t,onClick:e}){return c.jsxs("button",{type:"button",onClick:e,className:`\r
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
      `,children:[c.jsx(Al,{className:"h-4 w-4"}),c.jsx("span",{children:t})]})}function hv({label:t,value:e,onChange:n}){const r=Gt(e);return c.jsxs("div",{className:"flex items-center justify-between gap-3",children:[c.jsx("p",{className:`\r
          text-sm\r
          font-bold\r
          text-slate-700\r
        `,children:t}),c.jsxs("div",{className:`\r
          flex\r
          items-center\r
          gap-1.5\r
          rounded-xl\r
          border\r
          border-slate-200\r
          bg-white\r
          p-1\r
        `,children:[c.jsx("button",{type:"button",onClick:()=>n(Math.max(1,r-1)),disabled:r<=1,className:`\r
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
          `,children:c.jsx(M2,{className:"h-4 w-4"})}),c.jsx("input",{type:"number",min:"1",inputMode:"numeric",value:e,onChange:s=>{const i=s.target.value;if(i===""){n("");return}n(Gt(i))},className:`\r
            h-9\r
            w-12\r
            bg-transparent\r
            text-center\r
            text-base\r
            font-black\r
            text-[var(--lumora-navy-900)]\r
            outline-none\r
          `}),c.jsx("button",{type:"button",onClick:()=>n(r+1),className:`\r
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
          `,children:c.jsx(Al,{className:"h-4 w-4"})})]})]})}function fv({label:t,value:e,invalid:n,onChange:r}){return c.jsxs("label",{className:"block",children:[c.jsxs("span",{className:`\r
          flex\r
          items-center\r
          gap-1.5\r
          text-xs\r
          font-bold\r
          text-slate-600\r
        `,children:[c.jsx(U2,{className:"h-3.5 w-3.5"}),t]}),c.jsx("input",{type:"number",min:"0.1",step:"0.1",inputMode:"decimal",value:e,onChange:s=>r(s.target.value),placeholder:"0.0",className:["mt-1.5 h-11 w-full rounded-xl","border bg-white px-3","text-sm font-black text-slate-900","outline-none transition",n?"border-rose-400 ring-2 ring-rose-100":["border-slate-200","focus:border-[var(--lumora-cyan)]","focus:ring-2","focus:ring-[rgba(16,148,192,0.12)]"].join(" ")].join(" ")})]})}function pv({label:t,options:e,lang:n,value:r,onChange:s,columns:i="grid-cols-3"}){return c.jsxs("div",{children:[c.jsx("p",{className:`\r
          mb-2\r
          text-xs\r
          font-bold\r
          text-slate-600\r
        `,children:t}),c.jsx("div",{className:`grid gap-2 ${i}`,children:e.map(o=>{const a=o.value===r;return c.jsx("button",{type:"button",onClick:()=>s(o.value),className:["min-h-11 rounded-xl border","px-2 py-2 text-xs font-black","transition",a?["border-[rgba(174,221,57,0.65)]","bg-[rgba(174,221,57,0.12)]","text-[var(--lumora-navy-900)]"].join(" "):["border-slate-200","bg-white","text-slate-600","hover:bg-slate-50"].join(" ")].join(" "),children:Im(n,o)},o.value)})})]})}const kh={upholstery:"972502727724",carpet:"972502727724",mixed:"972502727724"},TI={sofaSeats:0,carpetCount:0,mattressCount:0,selectedServiceCount:0,totalItems:0,hasItems:!1},II=new Set(["glass"]),Ys=(t,e)=>t==="he"?e.he:t==="en"?e.en:e.ar,CI=t=>{var r,s,i;const e=((r=t==null?void 0:t.carpets)==null?void 0:r.length)>0,n=((s=t==null?void 0:t.sofas)==null?void 0:s.length)>0||((i=t==null?void 0:t.mattresses)==null?void 0:i.length)>0;return e&&n?kh.mixed:e?kh.carpet:kh.upholstery};function kI(){const{lang:t,isRTL:e}=Mt(),[n,r]=j.useState(!1),[s,i]=j.useState(!1);j.useEffect(()=>{const L=()=>{a(null),i(!0)};return window.addEventListener("lumora:open-order",L),()=>{window.removeEventListener("lumora:open-order",L)}},[]);const[o,a]=j.useState(null),[u,d]=j.useState(TI);j.useEffect(()=>{const L=document.getElementById("services-title");if(!L)return;if(!("IntersectionObserver"in window)){r(!0);return}const S=new IntersectionObserver(([w])=>{w.isIntersecting&&(r(!0),S.unobserve(w.target))},{threshold:.18});return S.observe(L),()=>{S.disconnect()}},[]);const h=j.useMemo(()=>yI.filter(L=>L.id!=="car"&&L.id!=="cars"&&L.id!=="carSeats"),[]),p=L=>!!L&&!II.has(L.id),m=(L=null)=>{a(L),i(!0)},b=()=>{i(!1),a(null)},T=({order:L,message:S})=>{const x=`https://wa.me/${CI(L)}?text=${encodeURIComponent(S)}`;window.open(x,"_blank","noopener,noreferrer"),b()},P=Ys(t,{ar:"خدمات في بيت الزبون",he:"שירותים בבית הלקוח",en:"Services at your location"}),N=Ys(t,{ar:"شو الخدمة اللي بتحتاجها؟",he:"איזה שירות אתם צריכים?",en:"Which service do you need?"}),E=Ys(t,{ar:"اختار خدمة واحدة أو اجمع أكثر من خدمة بنفس الطلب. بتقدر تضيف كل سجادة وكل فرشة بتفاصيلها لحالها.",he:"בחרו שירות אחד או שלבו כמה שירותים באותה הזמנה. ניתן להוסיף כל שטיח וכל מזרן עם הפרטים שלו.",en:"Choose one service or combine several in the same order. Each carpet and mattress can have its own details."}),y=Ys(t,{ar:"جهّز طلب متعدد الخدمات",he:"בניית הזמנה עם כמה שירותים",en:"Build a multi-service order"}),v=Ys(t,{ar:"كنب، سجاد وفرشات نوم في رسالة واحدة",he:"ספות, שטיחים ומזרנים בהודעה אחת",en:"Sofas, carpets, and mattresses in one message"}),I=Ys(t,{ar:"عرض الطلب",he:"צפייה בהזמנה",en:"View order"}),O=Ys(t,{ar:u.totalItems===1?"عنصر":"عناصر",he:"פריטים",en:u.totalItems===1?"item":"items"});return c.jsxs(c.Fragment,{children:[c.jsxs("div",{dir:e?"rtl":"ltr",className:"mx-auto w-full max-w-5xl",children:[c.jsxs("header",{id:"services-title",className:["mx-auto mb-8 max-w-3xl text-center sm:mb-10","transition-all duration-500 ease-out",n?"translate-y-0 opacity-100":"translate-y-2 opacity-0"].join(" "),children:[c.jsxs("div",{className:`\r
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
            `,children:[c.jsx("span",{"aria-hidden":"true",className:`\r
                h-2\r
                w-2\r
                rounded-full\r
                bg-[var(--lumora-lime)]\r
              `}),c.jsx("span",{children:P})]}),c.jsx("h2",{className:`\r
              mt-4\r
              text-[clamp(26px,6vw,40px)]\r
              font-black\r
              leading-tight\r
              tracking-tight\r
              text-[var(--lumora-navy-900)]\r
            `,children:N}),c.jsx("p",{className:`\r
              mx-auto\r
              mt-3\r
              max-w-2xl\r
              text-[15px]\r
              font-medium\r
              leading-7\r
              text-slate-600\r
              sm:text-base\r
            `,children:E})]}),c.jsx("div",{className:`\r
            grid\r
            grid-cols-1\r
            gap-5\r
            sm:grid-cols-2\r
            sm:gap-6\r
          `,children:h.map(L=>{const S=p(L);return c.jsx("div",{className:"h-full",children:c.jsx(wI,{id:L.id,icon:L.icon,titleKey:L.titleKey,descriptionKey:L.descriptionKey,image:L.image,priority:L.priority,onClick:S?()=>m(L.id):void 0,onBook:S?()=>m(L.id):void 0})},L.id)})}),c.jsxs("button",{type:"button",onClick:()=>m(),className:`\r
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
          `,children:[c.jsx("span",{className:`\r
              flex\r
              h-12\r
              w-12\r
              shrink-0\r
              items-center\r
              justify-center\r
              rounded-2xl\r
              bg-[rgba(174,221,57,0.12)]\r
              text-[var(--lumora-lime-light)]\r
            `,children:c.jsx(Eo,{className:"h-5 w-5"})}),c.jsxs("span",{className:"min-w-0 flex-1",children:[c.jsx("span",{className:`\r
                block\r
                text-sm\r
                font-black\r
                text-white\r
                sm:text-base\r
              `,children:y}),c.jsx("span",{className:`\r
                mt-1\r
                block\r
                text-xs\r
                font-medium\r
                leading-5\r
                text-white/60\r
                sm:text-sm\r
              `,children:v})]}),c.jsx("span",{className:`\r
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
            `,children:c.jsx(Al,{className:"h-4 w-4"})})]})]}),c.jsx(SI,{isOpen:s,onClose:b,initialServiceId:o,onSummaryChange:d,onSubmit:T}),u.hasItems&&c.jsxs("button",{type:"button",dir:e?"rtl":"ltr",onClick:()=>m(),className:["fixed bottom-4 z-[9996]","flex min-h-14 items-center gap-3","rounded-2xl","border border-white/15","bg-[var(--lumora-navy-950)]","px-3.5 py-2.5","text-white","shadow-[0_16px_45px_rgba(0,0,0,0.28)]","transition","hover:-translate-y-1","active:scale-[0.98]",e?"right-4":"left-4"].join(" "),children:[c.jsxs("span",{className:`\r
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
            `,children:[c.jsx(Eo,{className:"h-5 w-5"}),c.jsx("span",{className:`\r
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
              `,children:u.totalItems})]}),c.jsxs("span",{className:"text-start",children:[c.jsx("span",{className:`\r
                block\r
                text-xs\r
                font-black\r
                leading-tight\r
              `,children:I}),c.jsxs("span",{className:`\r
                mt-0.5\r
                block\r
                text-[10px]\r
                font-bold\r
                text-white/60\r
              `,children:[u.totalItems," ",O]})]}),c.jsx(lo,{"aria-hidden":"true",className:`\r
              h-4\r
              w-4\r
              text-[var(--lumora-lime-light)]\r
            `})]})]})}const AI=()=>{};/**
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
 */const Cx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},NI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},kx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,u=s+2<t.length,d=u?t[s+2]:0,h=i>>2,p=(i&3)<<4|a>>4;let m=(a&15)<<2|d>>6,b=d&63;u||(b=64,o||(m=64)),r.push(n[h],n[p],n[m],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cx(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||d==null||p==null)throw new PI;const m=i<<2|a>>4;if(r.push(m),d!==64){const b=a<<4&240|d>>2;if(r.push(b),p!==64){const T=d<<6&192|p;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class PI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const RI=function(t){const e=Cx(t);return kx.encodeByteArray(e,!0)},Pu=function(t){return RI(t).replace(/\./g,"")},Ax=function(t){try{return kx.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const MI=()=>jI().__FIREBASE_DEFAULTS__,LI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},DI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ax(t[1]);return e&&JSON.parse(e)},_d=()=>{try{return AI()||MI()||LI()||DI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Nx=t=>{var e,n;return(n=(e=_d())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},OI=t=>{const e=Nx(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Px=()=>{var t;return(t=_d())==null?void 0:t.config},Rx=t=>{var e;return(e=_d())==null?void 0:e[`_${t}`]};/**
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
 */class VI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Oo(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function jx(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function FI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t},a="";return[Pu(JSON.stringify(n)),Pu(JSON.stringify(o)),a].join(".")}const Va={};function zI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Va))Va[e]?t.emulator.push(e):t.prod.push(e);return t}function UI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let mv=!1;function Mx(t,e){if(typeof window>"u"||typeof document>"u"||!Oo(window.location.host)||Va[t]===e||Va[t]||mv)return;Va[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=zI().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function a(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,b){m.setAttribute("width","24"),m.setAttribute("id",b),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function d(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{mv=!0,o()},m}function h(m,b){m.setAttribute("id",b),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=UI(r),b=n("text"),T=document.getElementById(b)||document.createElement("span"),P=n("learnmore"),N=document.getElementById(P)||document.createElement("a"),E=n("preprendIcon"),y=document.getElementById(E)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const v=m.element;a(v),h(N,P);const I=d();u(y,E),v.append(y,T,N,I),document.body.appendChild(v)}i?(T.innerText="Preview backend disconnected.",y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,T.innerText="Preview backend running in this workspace."),T.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function BI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function $I(){var e;const t=(e=_d())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function HI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function WI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GI(){const t=jt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function KI(){return!$I()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function QI(){try{return typeof indexedDB=="object"}catch{return!1}}function YI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const XI="FirebaseError";class Ir extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=XI,Object.setPrototypeOf(this,Ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nl.prototype.create)}}class Nl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?JI(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ir(s,a,r)}}function JI(t,e){return t.replace(ZI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ZI=/\{\$([^}]+)}/g;function eC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(gv(i)&&gv(o)){if(!yi(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function gv(t){return t!==null&&typeof t=="object"}/**
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
 */function Pl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _a(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ba(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function tC(t,e){const n=new nC(t,e);return n.subscribe.bind(n)}class nC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rC(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ah),s.error===void 0&&(s.error=Ah),s.complete===void 0&&(s.complete=Ah);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ah(){}/**
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
 */function tt(t){return t&&t._delegate?t._delegate:t}class vi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ti="[DEFAULT]";/**
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
 */class sC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new VI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oC(e))try{this.getOrInitializeService({instanceIdentifier:ti})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ti){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ti){return this.instances.has(e)}getOptions(e=ti){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ti){return this.component?this.component.multipleInstances?e:ti:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iC(t){return t===ti?void 0:t}function oC(t){return t.instantiationMode==="EAGER"}/**
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
 */class aC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const lC={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},cC=pe.INFO,uC={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},dC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=uC[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cm{constructor(e){this.name=e,this._logLevel=cC,this._logHandler=dC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const hC=(t,e)=>e.some(n=>t instanceof n);let yv,vv;function fC(){return yv||(yv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pC(){return vv||(vv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lx=new WeakMap,ep=new WeakMap,Dx=new WeakMap,Nh=new WeakMap,km=new WeakMap;function mC(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(hs(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lx.set(n,t)}).catch(()=>{}),km.set(e,t),e}function gC(t){if(ep.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ep.set(t,e)}let tp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ep.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yC(t){tp=t(tp)}function vC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ph(this),e,...n);return Dx.set(r,e.sort?e.sort():[e]),hs(r)}:pC().includes(t)?function(...e){return t.apply(Ph(this),e),hs(Lx.get(this))}:function(...e){return hs(t.apply(Ph(this),e))}}function wC(t){return typeof t=="function"?vC(t):(t instanceof IDBTransaction&&gC(t),hC(t,fC())?new Proxy(t,tp):t)}function hs(t){if(t instanceof IDBRequest)return mC(t);if(Nh.has(t))return Nh.get(t);const e=wC(t);return e!==t&&(Nh.set(t,e),km.set(e,t)),e}const Ph=t=>km.get(t);function xC(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=hs(o);return r&&o.addEventListener("upgradeneeded",u=>{r(hs(o.result),u.oldVersion,u.newVersion,hs(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const _C=["get","getKey","getAll","getAllKeys","count"],bC=["put","add","delete","clear"],Rh=new Map;function wv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rh.get(e))return Rh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=bC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||_C.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),s&&u.done]))[0]};return Rh.set(e,i),i}yC(t=>({...t,get:(e,n,r)=>wv(e,n)||t.get(e,n,r),has:(e,n)=>!!wv(e,n)||t.has(e,n)}));/**
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
 */class EC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(SC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function SC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const np="@firebase/app",xv="0.14.6";/**
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
 */const br=new Cm("@firebase/app"),TC="@firebase/app-compat",IC="@firebase/analytics-compat",CC="@firebase/analytics",kC="@firebase/app-check-compat",AC="@firebase/app-check",NC="@firebase/auth",PC="@firebase/auth-compat",RC="@firebase/database",jC="@firebase/data-connect",MC="@firebase/database-compat",LC="@firebase/functions",DC="@firebase/functions-compat",OC="@firebase/installations",VC="@firebase/installations-compat",FC="@firebase/messaging",zC="@firebase/messaging-compat",UC="@firebase/performance",BC="@firebase/performance-compat",$C="@firebase/remote-config",HC="@firebase/remote-config-compat",qC="@firebase/storage",WC="@firebase/storage-compat",GC="@firebase/firestore",KC="@firebase/ai",QC="@firebase/firestore-compat",YC="firebase",XC="12.6.0";/**
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
 */const rp="[DEFAULT]",JC={[np]:"fire-core",[TC]:"fire-core-compat",[CC]:"fire-analytics",[IC]:"fire-analytics-compat",[AC]:"fire-app-check",[kC]:"fire-app-check-compat",[NC]:"fire-auth",[PC]:"fire-auth-compat",[RC]:"fire-rtdb",[jC]:"fire-data-connect",[MC]:"fire-rtdb-compat",[LC]:"fire-fn",[DC]:"fire-fn-compat",[OC]:"fire-iid",[VC]:"fire-iid-compat",[FC]:"fire-fcm",[zC]:"fire-fcm-compat",[UC]:"fire-perf",[BC]:"fire-perf-compat",[$C]:"fire-rc",[HC]:"fire-rc-compat",[qC]:"fire-gcs",[WC]:"fire-gcs-compat",[GC]:"fire-fst",[QC]:"fire-fst-compat",[KC]:"fire-vertex","fire-js":"fire-js",[YC]:"fire-js-all"};/**
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
 */const dl=new Map,ZC=new Map,sp=new Map;function _v(t,e){try{t.container.addComponent(e)}catch(n){br.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function To(t){const e=t.name;if(sp.has(e))return br.debug(`There were multiple attempts to register component ${e}.`),!1;sp.set(e,t);for(const n of dl.values())_v(n,t);for(const n of ZC.values())_v(n,t);return!0}function Am(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Cn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const ek={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fs=new Nl("app","Firebase",ek);/**
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
 */class tk{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fs.create("app-deleted",{appName:this._name})}}/**
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
 */const Vo=XC;function Ox(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:rp,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw fs.create("bad-app-name",{appName:String(s)});if(n||(n=Px()),!n)throw fs.create("no-options");const i=dl.get(s);if(i){if(yi(n,i.options)&&yi(r,i.config))return i;throw fs.create("duplicate-app",{appName:s})}const o=new aC(s);for(const u of sp.values())o.addComponent(u);const a=new tk(n,r,o);return dl.set(s,a),a}function Nm(t=rp){const e=dl.get(t);if(!e&&t===rp&&Px())return Ox();if(!e)throw fs.create("no-app",{appName:t});return e}function nk(){return Array.from(dl.values())}function ps(t,e,n){let r=JC[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),br.warn(o.join(" "));return}To(new vi(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const rk="firebase-heartbeat-database",sk=1,hl="firebase-heartbeat-store";let jh=null;function Vx(){return jh||(jh=xC(rk,sk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(hl)}catch(n){console.warn(n)}}}}).catch(t=>{throw fs.create("idb-open",{originalErrorMessage:t.message})})),jh}async function ik(t){try{const n=(await Vx()).transaction(hl),r=await n.objectStore(hl).get(Fx(t));return await n.done,r}catch(e){if(e instanceof Ir)br.warn(e.message);else{const n=fs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});br.warn(n.message)}}}async function bv(t,e){try{const r=(await Vx()).transaction(hl,"readwrite");await r.objectStore(hl).put(e,Fx(t)),await r.done}catch(n){if(n instanceof Ir)br.warn(n.message);else{const r=fs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});br.warn(r.message)}}}function Fx(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ok=1024,ak=30;class lk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ev();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>ak){const o=dk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){br.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ev(),{heartbeatsToSend:r,unsentEntries:s}=ck(this._heartbeatsCache.heartbeats),i=Pu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return br.warn(n),""}}}function Ev(){return new Date().toISOString().substring(0,10)}function ck(t,e=ok){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Sv(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Sv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return QI()?YI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ik(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return bv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return bv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Sv(t){return Pu(JSON.stringify({version:2,heartbeats:t})).length}function dk(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function hk(t){To(new vi("platform-logger",e=>new EC(e),"PRIVATE")),To(new vi("heartbeat",e=>new lk(e),"PRIVATE")),ps(np,xv,t),ps(np,xv,"esm2020"),ps("fire-js","")}hk("");var Tv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ms,zx;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,w){function x(){}x.prototype=w.prototype,S.F=w.prototype,S.prototype=new x,S.prototype.constructor=S,S.D=function(C,k,M){for(var _=Array(arguments.length-2),H=2;H<arguments.length;H++)_[H-2]=arguments[H];return w.prototype[k].apply(C,_)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(S,w,x){x||(x=0);const C=Array(16);if(typeof w=="string")for(var k=0;k<16;++k)C[k]=w.charCodeAt(x++)|w.charCodeAt(x++)<<8|w.charCodeAt(x++)<<16|w.charCodeAt(x++)<<24;else for(k=0;k<16;++k)C[k]=w[x++]|w[x++]<<8|w[x++]<<16|w[x++]<<24;w=S.g[0],x=S.g[1],k=S.g[2];let M=S.g[3],_;_=w+(M^x&(k^M))+C[0]+3614090360&4294967295,w=x+(_<<7&4294967295|_>>>25),_=M+(k^w&(x^k))+C[1]+3905402710&4294967295,M=w+(_<<12&4294967295|_>>>20),_=k+(x^M&(w^x))+C[2]+606105819&4294967295,k=M+(_<<17&4294967295|_>>>15),_=x+(w^k&(M^w))+C[3]+3250441966&4294967295,x=k+(_<<22&4294967295|_>>>10),_=w+(M^x&(k^M))+C[4]+4118548399&4294967295,w=x+(_<<7&4294967295|_>>>25),_=M+(k^w&(x^k))+C[5]+1200080426&4294967295,M=w+(_<<12&4294967295|_>>>20),_=k+(x^M&(w^x))+C[6]+2821735955&4294967295,k=M+(_<<17&4294967295|_>>>15),_=x+(w^k&(M^w))+C[7]+4249261313&4294967295,x=k+(_<<22&4294967295|_>>>10),_=w+(M^x&(k^M))+C[8]+1770035416&4294967295,w=x+(_<<7&4294967295|_>>>25),_=M+(k^w&(x^k))+C[9]+2336552879&4294967295,M=w+(_<<12&4294967295|_>>>20),_=k+(x^M&(w^x))+C[10]+4294925233&4294967295,k=M+(_<<17&4294967295|_>>>15),_=x+(w^k&(M^w))+C[11]+2304563134&4294967295,x=k+(_<<22&4294967295|_>>>10),_=w+(M^x&(k^M))+C[12]+1804603682&4294967295,w=x+(_<<7&4294967295|_>>>25),_=M+(k^w&(x^k))+C[13]+4254626195&4294967295,M=w+(_<<12&4294967295|_>>>20),_=k+(x^M&(w^x))+C[14]+2792965006&4294967295,k=M+(_<<17&4294967295|_>>>15),_=x+(w^k&(M^w))+C[15]+1236535329&4294967295,x=k+(_<<22&4294967295|_>>>10),_=w+(k^M&(x^k))+C[1]+4129170786&4294967295,w=x+(_<<5&4294967295|_>>>27),_=M+(x^k&(w^x))+C[6]+3225465664&4294967295,M=w+(_<<9&4294967295|_>>>23),_=k+(w^x&(M^w))+C[11]+643717713&4294967295,k=M+(_<<14&4294967295|_>>>18),_=x+(M^w&(k^M))+C[0]+3921069994&4294967295,x=k+(_<<20&4294967295|_>>>12),_=w+(k^M&(x^k))+C[5]+3593408605&4294967295,w=x+(_<<5&4294967295|_>>>27),_=M+(x^k&(w^x))+C[10]+38016083&4294967295,M=w+(_<<9&4294967295|_>>>23),_=k+(w^x&(M^w))+C[15]+3634488961&4294967295,k=M+(_<<14&4294967295|_>>>18),_=x+(M^w&(k^M))+C[4]+3889429448&4294967295,x=k+(_<<20&4294967295|_>>>12),_=w+(k^M&(x^k))+C[9]+568446438&4294967295,w=x+(_<<5&4294967295|_>>>27),_=M+(x^k&(w^x))+C[14]+3275163606&4294967295,M=w+(_<<9&4294967295|_>>>23),_=k+(w^x&(M^w))+C[3]+4107603335&4294967295,k=M+(_<<14&4294967295|_>>>18),_=x+(M^w&(k^M))+C[8]+1163531501&4294967295,x=k+(_<<20&4294967295|_>>>12),_=w+(k^M&(x^k))+C[13]+2850285829&4294967295,w=x+(_<<5&4294967295|_>>>27),_=M+(x^k&(w^x))+C[2]+4243563512&4294967295,M=w+(_<<9&4294967295|_>>>23),_=k+(w^x&(M^w))+C[7]+1735328473&4294967295,k=M+(_<<14&4294967295|_>>>18),_=x+(M^w&(k^M))+C[12]+2368359562&4294967295,x=k+(_<<20&4294967295|_>>>12),_=w+(x^k^M)+C[5]+4294588738&4294967295,w=x+(_<<4&4294967295|_>>>28),_=M+(w^x^k)+C[8]+2272392833&4294967295,M=w+(_<<11&4294967295|_>>>21),_=k+(M^w^x)+C[11]+1839030562&4294967295,k=M+(_<<16&4294967295|_>>>16),_=x+(k^M^w)+C[14]+4259657740&4294967295,x=k+(_<<23&4294967295|_>>>9),_=w+(x^k^M)+C[1]+2763975236&4294967295,w=x+(_<<4&4294967295|_>>>28),_=M+(w^x^k)+C[4]+1272893353&4294967295,M=w+(_<<11&4294967295|_>>>21),_=k+(M^w^x)+C[7]+4139469664&4294967295,k=M+(_<<16&4294967295|_>>>16),_=x+(k^M^w)+C[10]+3200236656&4294967295,x=k+(_<<23&4294967295|_>>>9),_=w+(x^k^M)+C[13]+681279174&4294967295,w=x+(_<<4&4294967295|_>>>28),_=M+(w^x^k)+C[0]+3936430074&4294967295,M=w+(_<<11&4294967295|_>>>21),_=k+(M^w^x)+C[3]+3572445317&4294967295,k=M+(_<<16&4294967295|_>>>16),_=x+(k^M^w)+C[6]+76029189&4294967295,x=k+(_<<23&4294967295|_>>>9),_=w+(x^k^M)+C[9]+3654602809&4294967295,w=x+(_<<4&4294967295|_>>>28),_=M+(w^x^k)+C[12]+3873151461&4294967295,M=w+(_<<11&4294967295|_>>>21),_=k+(M^w^x)+C[15]+530742520&4294967295,k=M+(_<<16&4294967295|_>>>16),_=x+(k^M^w)+C[2]+3299628645&4294967295,x=k+(_<<23&4294967295|_>>>9),_=w+(k^(x|~M))+C[0]+4096336452&4294967295,w=x+(_<<6&4294967295|_>>>26),_=M+(x^(w|~k))+C[7]+1126891415&4294967295,M=w+(_<<10&4294967295|_>>>22),_=k+(w^(M|~x))+C[14]+2878612391&4294967295,k=M+(_<<15&4294967295|_>>>17),_=x+(M^(k|~w))+C[5]+4237533241&4294967295,x=k+(_<<21&4294967295|_>>>11),_=w+(k^(x|~M))+C[12]+1700485571&4294967295,w=x+(_<<6&4294967295|_>>>26),_=M+(x^(w|~k))+C[3]+2399980690&4294967295,M=w+(_<<10&4294967295|_>>>22),_=k+(w^(M|~x))+C[10]+4293915773&4294967295,k=M+(_<<15&4294967295|_>>>17),_=x+(M^(k|~w))+C[1]+2240044497&4294967295,x=k+(_<<21&4294967295|_>>>11),_=w+(k^(x|~M))+C[8]+1873313359&4294967295,w=x+(_<<6&4294967295|_>>>26),_=M+(x^(w|~k))+C[15]+4264355552&4294967295,M=w+(_<<10&4294967295|_>>>22),_=k+(w^(M|~x))+C[6]+2734768916&4294967295,k=M+(_<<15&4294967295|_>>>17),_=x+(M^(k|~w))+C[13]+1309151649&4294967295,x=k+(_<<21&4294967295|_>>>11),_=w+(k^(x|~M))+C[4]+4149444226&4294967295,w=x+(_<<6&4294967295|_>>>26),_=M+(x^(w|~k))+C[11]+3174756917&4294967295,M=w+(_<<10&4294967295|_>>>22),_=k+(w^(M|~x))+C[2]+718787259&4294967295,k=M+(_<<15&4294967295|_>>>17),_=x+(M^(k|~w))+C[9]+3951481745&4294967295,S.g[0]=S.g[0]+w&4294967295,S.g[1]=S.g[1]+(k+(_<<21&4294967295|_>>>11))&4294967295,S.g[2]=S.g[2]+k&4294967295,S.g[3]=S.g[3]+M&4294967295}r.prototype.v=function(S,w){w===void 0&&(w=S.length);const x=w-this.blockSize,C=this.C;let k=this.h,M=0;for(;M<w;){if(k==0)for(;M<=x;)s(this,S,M),M+=this.blockSize;if(typeof S=="string"){for(;M<w;)if(C[k++]=S.charCodeAt(M++),k==this.blockSize){s(this,C),k=0;break}}else for(;M<w;)if(C[k++]=S[M++],k==this.blockSize){s(this,C),k=0;break}}this.h=k,this.o+=w},r.prototype.A=function(){var S=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);S[0]=128;for(var w=1;w<S.length-8;++w)S[w]=0;w=this.o*8;for(var x=S.length-8;x<S.length;++x)S[x]=w&255,w/=256;for(this.v(S),S=Array(16),w=0,x=0;x<4;++x)for(let C=0;C<32;C+=8)S[w++]=this.g[x]>>>C&255;return S};function i(S,w){var x=a;return Object.prototype.hasOwnProperty.call(x,S)?x[S]:x[S]=w(S)}function o(S,w){this.h=w;const x=[];let C=!0;for(let k=S.length-1;k>=0;k--){const M=S[k]|0;C&&M==w||(x[k]=M,C=!1)}this.g=x}var a={};function u(S){return-128<=S&&S<128?i(S,function(w){return new o([w|0],w<0?-1:0)}):new o([S|0],S<0?-1:0)}function d(S){if(isNaN(S)||!isFinite(S))return p;if(S<0)return N(d(-S));const w=[];let x=1;for(let C=0;S>=x;C++)w[C]=S/x|0,x*=4294967296;return new o(w,0)}function h(S,w){if(S.length==0)throw Error("number format error: empty string");if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(S.charAt(0)=="-")return N(h(S.substring(1),w));if(S.indexOf("-")>=0)throw Error('number format error: interior "-" character');const x=d(Math.pow(w,8));let C=p;for(let M=0;M<S.length;M+=8){var k=Math.min(8,S.length-M);const _=parseInt(S.substring(M,M+k),w);k<8?(k=d(Math.pow(w,k)),C=C.j(k).add(d(_))):(C=C.j(x),C=C.add(d(_)))}return C}var p=u(0),m=u(1),b=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-N(this).m();let S=0,w=1;for(let x=0;x<this.g.length;x++){const C=this.i(x);S+=(C>=0?C:4294967296+C)*w,w*=4294967296}return S},t.toString=function(S){if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(T(this))return"0";if(P(this))return"-"+N(this).toString(S);const w=d(Math.pow(S,6));var x=this;let C="";for(;;){const k=I(x,w).g;x=E(x,k.j(w));let M=((x.g.length>0?x.g[0]:x.h)>>>0).toString(S);if(x=k,T(x))return M+C;for(;M.length<6;)M="0"+M;C=M+C}},t.i=function(S){return S<0?0:S<this.g.length?this.g[S]:this.h};function T(S){if(S.h!=0)return!1;for(let w=0;w<S.g.length;w++)if(S.g[w]!=0)return!1;return!0}function P(S){return S.h==-1}t.l=function(S){return S=E(this,S),P(S)?-1:T(S)?0:1};function N(S){const w=S.g.length,x=[];for(let C=0;C<w;C++)x[C]=~S.g[C];return new o(x,~S.h).add(m)}t.abs=function(){return P(this)?N(this):this},t.add=function(S){const w=Math.max(this.g.length,S.g.length),x=[];let C=0;for(let k=0;k<=w;k++){let M=C+(this.i(k)&65535)+(S.i(k)&65535),_=(M>>>16)+(this.i(k)>>>16)+(S.i(k)>>>16);C=_>>>16,M&=65535,_&=65535,x[k]=_<<16|M}return new o(x,x[x.length-1]&-2147483648?-1:0)};function E(S,w){return S.add(N(w))}t.j=function(S){if(T(this)||T(S))return p;if(P(this))return P(S)?N(this).j(N(S)):N(N(this).j(S));if(P(S))return N(this.j(N(S)));if(this.l(b)<0&&S.l(b)<0)return d(this.m()*S.m());const w=this.g.length+S.g.length,x=[];for(var C=0;C<2*w;C++)x[C]=0;for(C=0;C<this.g.length;C++)for(let k=0;k<S.g.length;k++){const M=this.i(C)>>>16,_=this.i(C)&65535,H=S.i(k)>>>16,q=S.i(k)&65535;x[2*C+2*k]+=_*q,y(x,2*C+2*k),x[2*C+2*k+1]+=M*q,y(x,2*C+2*k+1),x[2*C+2*k+1]+=_*H,y(x,2*C+2*k+1),x[2*C+2*k+2]+=M*H,y(x,2*C+2*k+2)}for(S=0;S<w;S++)x[S]=x[2*S+1]<<16|x[2*S];for(S=w;S<2*w;S++)x[S]=0;return new o(x,0)};function y(S,w){for(;(S[w]&65535)!=S[w];)S[w+1]+=S[w]>>>16,S[w]&=65535,w++}function v(S,w){this.g=S,this.h=w}function I(S,w){if(T(w))throw Error("division by zero");if(T(S))return new v(p,p);if(P(S))return w=I(N(S),w),new v(N(w.g),N(w.h));if(P(w))return w=I(S,N(w)),new v(N(w.g),w.h);if(S.g.length>30){if(P(S)||P(w))throw Error("slowDivide_ only works with positive integers.");for(var x=m,C=w;C.l(S)<=0;)x=O(x),C=O(C);var k=L(x,1),M=L(C,1);for(C=L(C,2),x=L(x,2);!T(C);){var _=M.add(C);_.l(S)<=0&&(k=k.add(x),M=_),C=L(C,1),x=L(x,1)}return w=E(S,k.j(w)),new v(k,w)}for(k=p;S.l(w)>=0;){for(x=Math.max(1,Math.floor(S.m()/w.m())),C=Math.ceil(Math.log(x)/Math.LN2),C=C<=48?1:Math.pow(2,C-48),M=d(x),_=M.j(w);P(_)||_.l(S)>0;)x-=C,M=d(x),_=M.j(w);T(M)&&(M=m),k=k.add(M),S=E(S,_)}return new v(k,S)}t.B=function(S){return I(this,S).h},t.and=function(S){const w=Math.max(this.g.length,S.g.length),x=[];for(let C=0;C<w;C++)x[C]=this.i(C)&S.i(C);return new o(x,this.h&S.h)},t.or=function(S){const w=Math.max(this.g.length,S.g.length),x=[];for(let C=0;C<w;C++)x[C]=this.i(C)|S.i(C);return new o(x,this.h|S.h)},t.xor=function(S){const w=Math.max(this.g.length,S.g.length),x=[];for(let C=0;C<w;C++)x[C]=this.i(C)^S.i(C);return new o(x,this.h^S.h)};function O(S){const w=S.g.length+1,x=[];for(let C=0;C<w;C++)x[C]=S.i(C)<<1|S.i(C-1)>>>31;return new o(x,S.h)}function L(S,w){const x=w>>5;w%=32;const C=S.g.length-x,k=[];for(let M=0;M<C;M++)k[M]=w>0?S.i(M+x)>>>w|S.i(M+x+1)<<32-w:S.i(M+x);return new o(k,S.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,zx=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=h,ms=o}).apply(typeof Tv<"u"?Tv:typeof self<"u"?self:typeof window<"u"?window:{});var xc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ux,Ea,Bx,Wc,ip,$x,Hx,qx;(function(){var t,e=Object.defineProperty;function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof xc=="object"&&xc];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(l,f){if(f)e:{var g=r;l=l.split(".");for(var A=0;A<l.length-1;A++){var U=l[A];if(!(U in g))break e;g=g[U]}l=l[l.length-1],A=g[l],f=f(A),f!=A&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}s("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(l){return l||function(f){var g=[],A;for(A in f)Object.prototype.hasOwnProperty.call(f,A)&&g.push([A,f[A]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function u(l,f,g){return l.call.apply(l.bind,arguments)}function d(l,f,g){return d=u,d.apply(null,arguments)}function h(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var A=g.slice();return A.push.apply(A,arguments),l.apply(this,A)}}function p(l,f){function g(){}g.prototype=f.prototype,l.Z=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Ob=function(A,U,$){for(var J=Array(arguments.length-2),de=2;de<arguments.length;de++)J[de-2]=arguments[de];return f.prototype[U].apply(A,J)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function b(l){const f=l.length;if(f>0){const g=Array(f);for(let A=0;A<f;A++)g[A]=l[A];return g}return[]}function T(l,f){for(let A=1;A<arguments.length;A++){const U=arguments[A];var g=typeof U;if(g=g!="object"?g:U?Array.isArray(U)?"array":g:"null",g=="array"||g=="object"&&typeof U.length=="number"){g=l.length||0;const $=U.length||0;l.length=g+$;for(let J=0;J<$;J++)l[g+J]=U[J]}else l.push(U)}}class P{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function N(l){o.setTimeout(()=>{throw l},0)}function E(){var l=S;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class y{constructor(){this.h=this.g=null}add(f,g){const A=v.get();A.set(f,g),this.h?this.h.next=A:this.g=A,this.h=A}}var v=new P(()=>new I,l=>l.reset());class I{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let O,L=!1,S=new y,w=()=>{const l=Promise.resolve(void 0);O=()=>{l.then(x)}};function x(){for(var l;l=E();){try{l.h.call(l.g)}catch(g){N(g)}var f=v;f.j(l),f.h<100&&(f.h++,l.next=f.g,f.g=l)}L=!1}function C(){this.u=this.u,this.C=this.C}C.prototype.u=!1,C.prototype.dispose=function(){this.u||(this.u=!0,this.N())},C.prototype[Symbol.dispose]=function(){this.dispose()},C.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var M=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};o.addEventListener("test",g,f),o.removeEventListener("test",g,f)}catch{}return l}();function _(l){return/^[\s\xa0]*$/.test(l)}function H(l,f){k.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,f)}p(H,k),H.prototype.init=function(l,f){const g=this.type=l.type,A=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget,f||(g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement)),this.relatedTarget=f,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&H.Z.h.call(this)},H.prototype.h=function(){H.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var q="closure_listenable_"+(Math.random()*1e6|0),V=0;function F(l,f,g,A,U){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!A,this.ha=U,this.key=++V,this.da=this.fa=!1}function D(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function B(l,f,g){for(const A in l)f.call(g,l[A],A,l)}function Q(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function oe(l){const f={};for(const g in l)f[g]=l[g];return f}const re="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ve(l,f){let g,A;for(let U=1;U<arguments.length;U++){A=arguments[U];for(g in A)l[g]=A[g];for(let $=0;$<re.length;$++)g=re[$],Object.prototype.hasOwnProperty.call(A,g)&&(l[g]=A[g])}}function Me(l){this.src=l,this.g={},this.h=0}Me.prototype.add=function(l,f,g,A,U){const $=l.toString();l=this.g[$],l||(l=this.g[$]=[],this.h++);const J=Le(l,f,A,U);return J>-1?(f=l[J],g||(f.fa=!1)):(f=new F(f,this.src,$,!!A,U),f.fa=g,l.push(f)),f};function Fe(l,f){const g=f.type;if(g in l.g){var A=l.g[g],U=Array.prototype.indexOf.call(A,f,void 0),$;($=U>=0)&&Array.prototype.splice.call(A,U,1),$&&(D(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Le(l,f,g,A){for(let U=0;U<l.length;++U){const $=l[U];if(!$.da&&$.listener==f&&$.capture==!!g&&$.ha==A)return U}return-1}var he="closure_lm_"+(Math.random()*1e6|0),Cr={};function z(l,f,g,A,U){if(A&&A.once)return zt(l,f,g,A,U);if(Array.isArray(f)){for(let $=0;$<f.length;$++)z(l,f[$],g,A,U);return null}return g=ki(g),l&&l[q]?l.J(f,g,a(A)?!!A.capture:!!A,U):ee(l,f,g,!1,A,U)}function ee(l,f,g,A,U,$){if(!f)throw Error("Invalid event type");const J=a(U)?!!U.capture:!!U;let de=Ut(l);if(de||(l[he]=de=new Me(l)),g=de.add(f,g,A,J,$),g.proxy)return g;if(A=xe(),g.proxy=A,A.src=l,A.listener=g,l.addEventListener)M||(U=J),U===void 0&&(U=!1),l.addEventListener(f.toString(),A,U);else if(l.attachEvent)l.attachEvent(Zt(f.toString()),A);else if(l.addListener&&l.removeListener)l.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return g}function xe(){function l(g){return f.call(l.src,l.listener,g)}const f=Lt;return l}function zt(l,f,g,A,U){if(Array.isArray(f)){for(let $=0;$<f.length;$++)zt(l,f[$],g,A,U);return null}return g=ki(g),l&&l[q]?l.K(f,g,a(A)?!!A.capture:!!A,U):ee(l,f,g,!0,A,U)}function hn(l,f,g,A,U){if(Array.isArray(f))for(var $=0;$<f.length;$++)hn(l,f[$],g,A,U);else A=a(A)?!!A.capture:!!A,g=ki(g),l&&l[q]?(l=l.i,$=String(f).toString(),$ in l.g&&(f=l.g[$],g=Le(f,g,A,U),g>-1&&(D(f[g]),Array.prototype.splice.call(f,g,1),f.length==0&&(delete l.g[$],l.h--)))):l&&(l=Ut(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Le(f,g,A,U)),(g=l>-1?f[l]:null)&&We(g))}function We(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[q])Fe(f.i,l);else{var g=l.type,A=l.proxy;f.removeEventListener?f.removeEventListener(g,A,l.capture):f.detachEvent?f.detachEvent(Zt(g),A):f.addListener&&f.removeListener&&f.removeListener(A),(g=Ut(f))?(Fe(g,l),g.h==0&&(g.src=null,f[he]=null)):D(l)}}}function Zt(l){return l in Cr?Cr[l]:Cr[l]="on"+l}function Lt(l,f){if(l.da)l=!0;else{f=new H(f,this);const g=l.listener,A=l.ha||l.src;l.fa&&We(l),l=g.call(A,f)}return l}function Ut(l){return l=l[he],l instanceof Me?l:null}var Ps="__closure_events_fn_"+(Math.random()*1e9>>>0);function ki(l){return typeof l=="function"?l:(l[Ps]||(l[Ps]=function(f){return l.handleEvent(f)}),l[Ps])}function Ye(){C.call(this),this.i=new Me(this),this.M=this,this.G=null}p(Ye,C),Ye.prototype[q]=!0,Ye.prototype.removeEventListener=function(l,f,g,A){hn(this,l,f,g,A)};function lt(l,f){var g,A=l.G;if(A)for(g=[];A;A=A.G)g.push(A);if(l=l.M,A=f.type||f,typeof f=="string")f=new k(f,l);else if(f instanceof k)f.target=f.target||l;else{var U=f;f=new k(A,l),Ve(f,U)}U=!0;let $,J;if(g)for(J=g.length-1;J>=0;J--)$=f.g=g[J],U=Rs($,A,!0,f)&&U;if($=f.g=l,U=Rs($,A,!0,f)&&U,U=Rs($,A,!1,f)&&U,g)for(J=0;J<g.length;J++)$=f.g=g[J],U=Rs($,A,!1,f)&&U}Ye.prototype.N=function(){if(Ye.Z.N.call(this),this.i){var l=this.i;for(const f in l.g){const g=l.g[f];for(let A=0;A<g.length;A++)D(g[A]);delete l.g[f],l.h--}}this.G=null},Ye.prototype.J=function(l,f,g,A){return this.i.add(String(l),f,!1,g,A)},Ye.prototype.K=function(l,f,g,A){return this.i.add(String(l),f,!0,g,A)};function Rs(l,f,g,A){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();let U=!0;for(let $=0;$<f.length;++$){const J=f[$];if(J&&!J.da&&J.capture==g){const de=J.listener,nt=J.ha||J.src;J.fa&&Fe(l.i,J),U=de.call(nt,A)!==!1&&U}}return U&&!A.defaultPrevented}function Bd(l,f){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=d(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:o.setTimeout(l,f||0)}function Ul(l){l.g=Bd(()=>{l.g=null,l.i&&(l.i=!1,Ul(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class js extends C{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Ul(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ms(l){C.call(this),this.h=l,this.g={}}p(Ms,C);var Bl=[];function tr(l){B(l.g,function(f,g){this.g.hasOwnProperty(g)&&We(f)},l),l.g={}}Ms.prototype.N=function(){Ms.Z.N.call(this),tr(this)},Ms.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var kr=o.JSON.stringify,$l=o.JSON.parse,Hl=class{stringify(l){return o.JSON.stringify(l,void 0)}parse(l){return o.JSON.parse(l,void 0)}};function Ho(){}function nr(){}var Bt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function qo(){k.call(this,"d")}p(qo,k);function Ls(){k.call(this,"c")}p(Ls,k);var en={},Ln=null;function Dn(){return Ln=Ln||new Ye}en.Ia="serverreachability";function Ar(l){k.call(this,en.Ia,l)}p(Ar,k);function rr(l){const f=Dn();lt(f,new Ar(f))}en.STAT_EVENT="statevent";function ql(l,f){k.call(this,en.STAT_EVENT,l),this.stat=f}p(ql,k);function gt(l){const f=Dn();lt(f,new ql(f,l))}en.Ja="timingevent";function Wl(l,f){k.call(this,en.Ja,l),this.size=f}p(Wl,k);function Ds(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){l()},f)}function Os(){this.g=!0}Os.prototype.ua=function(){this.g=!1};function Nr(l,f,g,A,U,$){l.info(function(){if(l.g)if($){var J="",de=$.split("&");for(let Ie=0;Ie<de.length;Ie++){var nt=de[Ie].split("=");if(nt.length>1){const ut=nt[0];nt=nt[1];const Vn=ut.split("_");J=Vn.length>=2&&Vn[1]=="type"?J+(ut+"="+nt+"&"):J+(ut+"=redacted&")}}}else J=null;else J=$;return"XMLHTTP REQ ("+A+") [attempt "+U+"]: "+f+`
`+g+`
`+J})}function Wo(l,f,g,A,U,$,J){l.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+U+"]: "+f+`
`+g+`
`+$+" "+J})}function sr(l,f,g,A){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+Go(l,g)+(A?" "+A:"")})}function Ai(l,f){l.info(function(){return"TIMEOUT: "+f})}Os.prototype.info=function(){};function Go(l,f){if(!l.g)return f;if(!f)return null;try{const $=JSON.parse(f);if($){for(l=0;l<$.length;l++)if(Array.isArray($[l])){var g=$[l];if(!(g.length<2)){var A=g[1];if(Array.isArray(A)&&!(A.length<1)){var U=A[0];if(U!="noop"&&U!="stop"&&U!="close")for(let J=1;J<A.length;J++)A[J]=""}}}}return kr($)}catch{return f}}var Vs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Gl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Kl;function Xe(){}p(Xe,Ho),Xe.prototype.g=function(){return new XMLHttpRequest},Kl=new Xe;function Fs(l){return encodeURIComponent(String(l))}function Ni(l){var f=1;l=l.split(":");const g=[];for(;f>0&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function ze(l,f,g,A){this.j=l,this.i=f,this.l=g,this.S=A||1,this.V=new Ms(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new zs}function zs(){this.i=null,this.g="",this.h=!1}var Ko={},$t={};function Us(l,f,g){l.M=1,l.A=qs(Tt(f)),l.u=g,l.R=!0,Bs(l,null)}function Bs(l,f){l.F=Date.now(),ir(l),l.B=Tt(l.A);var g=l.B,A=l.S;Array.isArray(A)||(A=[String(A)]),Sg(g.i,"t",A),l.C=0,g=l.j.L,l.h=new zs,l.g=Bg(l.j,g?f:null,!l.u),l.P>0&&(l.O=new js(d(l.Y,l,l.g),l.P)),f=l.V,g=l.g,A=l.ba;var U="readystatechange";Array.isArray(U)||(U&&(Bl[0]=U.toString()),U=Bl);for(let $=0;$<U.length;$++){const J=z(g,U[$],A||f.handleEvent,!1,f.h||f);if(!J)break;f.g[J.key]=J}f=l.J?oe(l.J):{},l.u?(l.v||(l.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,f)):(l.v="GET",l.g.ea(l.B,l.v,null,f)),rr(),Nr(l.i,l.v,l.B,l.l,l.S,l.u)}ze.prototype.ba=function(l){l=l.target;const f=this.O;f&&Mr(l)==3?f.j():this.Y(l)},ze.prototype.Y=function(l){try{if(l==this.g)e:{const de=Mr(this.g),nt=this.g.ya(),Ie=this.g.ca();if(!(de<3)&&(de!=3||this.g&&(this.h.h||this.g.la()||Pg(this.g)))){this.K||de!=4||nt==7||(nt==8||Ie<=0?rr(3):rr(2)),Yo(this);var f=this.g.ca();this.X=f;var g=On(this);if(this.o=f==200,Wo(this.i,this.v,this.B,this.l,this.S,de,f),this.o){if(this.U&&!this.L){t:{if(this.g){var A,U=this.g;if((A=U.g?U.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(A)){var $=A;break t}}$=null}if(l=$)sr(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Xo(this,l);else{this.o=!1,this.m=3,gt(12),tn(this),$s(this);break e}}if(this.R){l=!0;let ut;for(;!this.K&&this.C<g.length;)if(ut=$d(this,g),ut==$t){de==4&&(this.m=4,gt(14),l=!1),sr(this.i,this.l,null,"[Incomplete Response]");break}else if(ut==Ko){this.m=4,gt(15),sr(this.i,this.l,g,"[Invalid Chunk]"),l=!1;break}else sr(this.i,this.l,ut,null),Xo(this,ut);if(Qo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),de!=4||g.length!=0||this.h.h||(this.m=1,gt(16),l=!1),this.o=this.o&&l,!l)sr(this.i,this.l,g,"[Invalid Chunked Response]"),tn(this),$s(this);else if(g.length>0&&!this.W){this.W=!0;var J=this.j;J.g==this&&J.aa&&!J.P&&(J.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),Kd(J),J.P=!0,gt(11))}}else sr(this.i,this.l,g,null),Xo(this,g);de==4&&tn(this),this.o&&!this.K&&(de==4?Vg(this.j,this):(this.o=!1,ir(this)))}else vE(this.g),f==400&&g.indexOf("Unknown SID")>0?(this.m=3,gt(12)):(this.m=0,gt(13)),tn(this),$s(this)}}}catch{}finally{}};function On(l){if(!Qo(l))return l.g.la();const f=Pg(l.g);if(f==="")return"";let g="";const A=f.length,U=Mr(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return tn(l),$s(l),"";l.h.i=new o.TextDecoder}for(let $=0;$<A;$++)l.h.h=!0,g+=l.h.i.decode(f[$],{stream:!(U&&$==A-1)});return f.length=0,l.h.g+=g,l.C=0,l.h.g}function Qo(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function $d(l,f){var g=l.C,A=f.indexOf(`
`,g);return A==-1?$t:(g=Number(f.substring(g,A)),isNaN(g)?Ko:(A+=1,A+g>f.length?$t:(f=f.slice(A,A+g),l.C=A+g,f)))}ze.prototype.cancel=function(){this.K=!0,tn(this)};function ir(l){l.T=Date.now()+l.H,Ql(l,l.H)}function Ql(l,f){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Ds(d(l.aa,l),f)}function Yo(l){l.D&&(o.clearTimeout(l.D),l.D=null)}ze.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(Ai(this.i,this.B),this.M!=2&&(rr(),gt(17)),tn(this),this.m=2,$s(this)):Ql(this,this.T-l)};function $s(l){l.j.I==0||l.K||Vg(l.j,l)}function tn(l){Yo(l);var f=l.O;f&&typeof f.dispose=="function"&&f.dispose(),l.O=null,tr(l.V),l.g&&(f=l.g,l.g=null,f.abort(),f.dispose())}function Xo(l,f){try{var g=l.j;if(g.I!=0&&(g.g==l||G(g.h,l))){if(!l.L&&G(g.h,l)&&g.I==3){try{var A=g.Ba.g.parse(f)}catch{A=null}if(Array.isArray(A)&&A.length==3){var U=A;if(U[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<l.F)ec(g),Jl(g);else break e;Gd(g),gt(18)}}else g.xa=U[1],0<g.xa-g.K&&U[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Ds(d(g.Va,g),6e3));R(g.h)<=1&&g.ta&&(g.ta=void 0)}else Ks(g,11)}else if((l.L||g.g==l)&&ec(g),!_(f))for(U=g.Ba.g.parse(f),f=0;f<U.length;f++){let Ie=U[f];const ut=Ie[0];if(!(ut<=g.K))if(g.K=ut,Ie=Ie[1],g.I==2)if(Ie[0]=="c"){g.M=Ie[1],g.ba=Ie[2];const Vn=Ie[3];Vn!=null&&(g.ka=Vn,g.j.info("VER="+g.ka));const Qs=Ie[4];Qs!=null&&(g.za=Qs,g.j.info("SVER="+g.za));const Lr=Ie[5];Lr!=null&&typeof Lr=="number"&&Lr>0&&(A=1.5*Lr,g.O=A,g.j.info("backChannelRequestTimeoutMs_="+A)),A=g;const Dr=l.g;if(Dr){const nc=Dr.g?Dr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(nc){var $=A.h;$.g||nc.indexOf("spdy")==-1&&nc.indexOf("quic")==-1&&nc.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(X($,$.h),$.h=null))}if(A.G){const Qd=Dr.g?Dr.g.getResponseHeader("X-HTTP-Session-Id"):null;Qd&&(A.wa=Qd,Se(A.J,A.G,Qd))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-l.F,g.j.info("Handshake RTT: "+g.T+"ms")),A=g;var J=l;if(A.na=Ug(A,A.L?A.ba:null,A.W),J.L){ae(A.h,J);var de=J,nt=A.O;nt&&(de.H=nt),de.D&&(Yo(de),ir(de)),A.g=J}else Dg(A);g.i.length>0&&Zl(g)}else Ie[0]!="stop"&&Ie[0]!="close"||Ks(g,7);else g.I==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?Ks(g,7):Wd(g):Ie[0]!="noop"&&g.l&&g.l.qa(Ie),g.A=0)}}rr(4)}catch{}}var Hs=class{constructor(l,f){this.g=l,this.map=f}};function Jo(l){this.l=l||10,o.PerformanceNavigationTiming?(l=o.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Zo(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function R(l){return l.h?1:l.g?l.g.size:0}function G(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function X(l,f){l.g?l.g.add(f):l.h=f}function ae(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Jo.prototype.cancel=function(){if(this.i=Ee(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Ee(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.G);return f}return b(l.i)}var ye=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fn(l,f){if(l){l=l.split("&");for(let g=0;g<l.length;g++){const A=l[g].indexOf("=");let U,$=null;A>=0?(U=l[g].substring(0,A),$=l[g].substring(A+1)):U=l[g],f(U,$?decodeURIComponent($.replace(/\+/g," ")):"")}}}function ct(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;l instanceof ct?(this.l=l.l,Ht(this,l.j),this.o=l.o,this.g=l.g,Pr(this,l.u),this.h=l.h,Rr(this,Tg(l.i)),this.m=l.m):l&&(f=String(l).match(ye))?(this.l=!1,Ht(this,f[1]||"",!0),this.o=Ws(f[2]||""),this.g=Ws(f[3]||"",!0),Pr(this,f[4]),this.h=Ws(f[5]||"",!0),Rr(this,f[6]||"",!0),this.m=Ws(f[7]||"")):(this.l=!1,this.i=new ta(null,this.l))}ct.prototype.toString=function(){const l=[];var f=this.j;f&&l.push(bn(f,xg,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(bn(f,xg,!0),"@"),l.push(Fs(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&l.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(bn(g,g.charAt(0)=="/"?cE:lE,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",bn(g,dE)),l.join("")},ct.prototype.resolve=function(l){const f=Tt(this);let g=!!l.j;g?Ht(f,l.j):g=!!l.o,g?f.o=l.o:g=!!l.g,g?f.g=l.g:g=l.u!=null;var A=l.h;if(g)Pr(f,l.u);else if(g=!!l.h){if(A.charAt(0)!="/")if(this.g&&!this.h)A="/"+A;else{var U=f.h.lastIndexOf("/");U!=-1&&(A=f.h.slice(0,U+1)+A)}if(U=A,U==".."||U==".")A="";else if(U.indexOf("./")!=-1||U.indexOf("/.")!=-1){A=U.lastIndexOf("/",0)==0,U=U.split("/");const $=[];for(let J=0;J<U.length;){const de=U[J++];de=="."?A&&J==U.length&&$.push(""):de==".."?(($.length>1||$.length==1&&$[0]!="")&&$.pop(),A&&J==U.length&&$.push("")):($.push(de),A=!0)}A=$.join("/")}else A=U}return g?f.h=A:g=l.i.toString()!=="",g?Rr(f,Tg(l.i)):g=!!l.m,g&&(f.m=l.m),f};function Tt(l){return new ct(l)}function Ht(l,f,g){l.j=g?Ws(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Pr(l,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);l.u=f}else l.u=null}function Rr(l,f,g){f instanceof ta?(l.i=f,hE(l.i,l.l)):(g||(f=bn(f,uE)),l.i=new ta(f,l.l))}function Se(l,f,g){l.i.set(f,g)}function qs(l){return Se(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Ws(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function bn(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,ea),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function ea(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var xg=/[#\/\?@]/g,lE=/[#\?:]/g,cE=/[#\?]/g,uE=/[#\?@]/g,dE=/#/g;function ta(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Gs(l){l.g||(l.g=new Map,l.h=0,l.i&&fn(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}t=ta.prototype,t.add=function(l,f){Gs(this),this.i=null,l=Pi(this,l);let g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function _g(l,f){Gs(l),f=Pi(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function bg(l,f){return Gs(l),f=Pi(l,f),l.g.has(f)}t.forEach=function(l,f){Gs(this),this.g.forEach(function(g,A){g.forEach(function(U){l.call(f,U,A,this)},this)},this)};function Eg(l,f){Gs(l);let g=[];if(typeof f=="string")bg(l,f)&&(g=g.concat(l.g.get(Pi(l,f))));else for(l=Array.from(l.g.values()),f=0;f<l.length;f++)g=g.concat(l[f]);return g}t.set=function(l,f){return Gs(this),this.i=null,l=Pi(this,l),bg(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},t.get=function(l,f){return l?(l=Eg(this,l),l.length>0?String(l[0]):f):f};function Sg(l,f,g){_g(l,f),g.length>0&&(l.i=null,l.g.set(Pi(l,f),b(g)),l.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(let A=0;A<f.length;A++){var g=f[A];const U=Fs(g);g=Eg(this,g);for(let $=0;$<g.length;$++){let J=U;g[$]!==""&&(J+="="+Fs(g[$])),l.push(J)}}return this.i=l.join("&")};function Tg(l){const f=new ta;return f.i=l.i,l.g&&(f.g=new Map(l.g),f.h=l.h),f}function Pi(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function hE(l,f){f&&!l.j&&(Gs(l),l.i=null,l.g.forEach(function(g,A){const U=A.toLowerCase();A!=U&&(_g(this,A),Sg(this,U,g))},l)),l.j=f}function fE(l,f){const g=new Os;if(o.Image){const A=new Image;A.onload=h(jr,g,"TestLoadImage: loaded",!0,f,A),A.onerror=h(jr,g,"TestLoadImage: error",!1,f,A),A.onabort=h(jr,g,"TestLoadImage: abort",!1,f,A),A.ontimeout=h(jr,g,"TestLoadImage: timeout",!1,f,A),o.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=l}else f(!1)}function pE(l,f){const g=new Os,A=new AbortController,U=setTimeout(()=>{A.abort(),jr(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:A.signal}).then($=>{clearTimeout(U),$.ok?jr(g,"TestPingServer: ok",!0,f):jr(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(U),jr(g,"TestPingServer: error",!1,f)})}function jr(l,f,g,A,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),A(g)}catch{}}function mE(){this.g=new Hl}function Hd(l){this.i=l.Sb||null,this.h=l.ab||!1}p(Hd,Ho),Hd.prototype.g=function(){return new Yl(this.i,this.h)};function Yl(l,f){Ye.call(this),this.H=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Yl,Ye),t=Yl.prototype,t.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=f,this.readyState=1,ra(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(f.body=l),(this.H||o).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,na(this)),this.readyState=0},t.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ra(this)),this.g&&(this.readyState=3,ra(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ig(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ig(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}t.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?na(this):ra(this),this.readyState==3&&Ig(this)}},t.Oa=function(l){this.g&&(this.response=this.responseText=l,na(this))},t.Na=function(l){this.g&&(this.response=l,na(this))},t.ga=function(){this.g&&na(this)};function na(l){l.readyState=4,l.l=null,l.j=null,l.B=null,ra(l)}t.setRequestHeader=function(l,f){this.A.append(l,f)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function ra(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Yl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Cg(l){let f="";return B(l,function(g,A){f+=A,f+=":",f+=g,f+=`\r
`}),f}function qd(l,f,g){e:{for(A in g){var A=!1;break e}A=!0}A||(g=Cg(g),typeof l=="string"?g!=null&&Fs(g):Se(l,f,g))}function He(l){Ye.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(He,Ye);var gE=/^https?$/i,yE=["POST","PUT"];t=He.prototype,t.Fa=function(l){this.H=l},t.ea=function(l,f,g,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Kl.g(),this.g.onreadystatechange=m(d(this.Ca,this));try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch($){kg(this,$);return}if(l=g||"",g=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var U in A)g.set(U,A[U]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const $ of A.keys())g.set($,A.get($));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(g.keys()).find($=>$.toLowerCase()=="content-type"),U=o.FormData&&l instanceof o.FormData,!(Array.prototype.indexOf.call(yE,f,void 0)>=0)||A||U||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,J]of g)this.g.setRequestHeader($,J);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch($){kg(this,$)}};function kg(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.o=5,Ag(l),Xl(l)}function Ag(l){l.A||(l.A=!0,lt(l,"complete"),lt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,lt(this,"complete"),lt(this,"abort"),Xl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xl(this,!0)),He.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Ng(this):this.Xa())},t.Xa=function(){Ng(this)};function Ng(l){if(l.h&&typeof i<"u"){if(l.v&&Mr(l)==4)setTimeout(l.Ca.bind(l),0);else if(lt(l,"readystatechange"),Mr(l)==4){l.h=!1;try{const $=l.ca();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var A;if(A=$===0){let J=String(l.D).match(ye)[1]||null;!J&&o.self&&o.self.location&&(J=o.self.location.protocol.slice(0,-1)),A=!gE.test(J?J.toLowerCase():"")}g=A}if(g)lt(l,"complete"),lt(l,"success");else{l.o=6;try{var U=Mr(l)>2?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.ca()+"]",Ag(l)}}finally{Xl(l)}}}}function Xl(l,f){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const g=l.g;l.g=null,f||lt(l,"ready");try{g.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Mr(l){return l.g?l.g.readyState:0}t.ca=function(){try{return Mr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),$l(f)}};function Pg(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function vE(l){const f={};l=(l.g&&Mr(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<l.length;A++){if(_(l[A]))continue;var g=Ni(l[A]);const U=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const $=f[U]||[];f[U]=$,$.push(g)}Q(f,function(A){return A.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function sa(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function Rg(l){this.za=0,this.i=[],this.j=new Os,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=sa("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=sa("baseRetryDelayMs",5e3,l),this.Za=sa("retryDelaySeedMs",1e4,l),this.Ta=sa("forwardChannelMaxRetries",2,l),this.va=sa("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Jo(l&&l.concurrentRequestLimit),this.Ba=new mE,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Rg.prototype,t.ka=8,t.I=1,t.connect=function(l,f,g,A){gt(0),this.W=l,this.H=f||{},g&&A!==void 0&&(this.H.OSID=g,this.H.OAID=A),this.F=this.X,this.J=Ug(this,null,this.W),Zl(this)};function Wd(l){if(jg(l),l.I==3){var f=l.V++,g=Tt(l.J);if(Se(g,"SID",l.M),Se(g,"RID",f),Se(g,"TYPE","terminate"),ia(l,g),f=new ze(l,l.j,f),f.M=2,f.A=qs(Tt(g)),g=!1,o.navigator&&o.navigator.sendBeacon)try{g=o.navigator.sendBeacon(f.A.toString(),"")}catch{}!g&&o.Image&&(new Image().src=f.A,g=!0),g||(f.g=Bg(f.j,null),f.g.ea(f.A)),f.F=Date.now(),ir(f)}zg(l)}function Jl(l){l.g&&(Kd(l),l.g.cancel(),l.g=null)}function jg(l){Jl(l),l.v&&(o.clearTimeout(l.v),l.v=null),ec(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&o.clearTimeout(l.m),l.m=null)}function Zl(l){if(!Zo(l.h)&&!l.m){l.m=!0;var f=l.Ea;O||w(),L||(O(),L=!0),S.add(f,l),l.D=0}}function wE(l,f){return R(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=f.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Ds(d(l.Ea,l,f),Fg(l,l.D)),l.D++,!0)}t.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const U=new ze(this,this.j,l);let $=this.o;if(this.U&&($?($=oe($),Ve($,this.U)):$=this.U),this.u!==null||this.R||(U.J=$,$=null),this.S)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var A=this.i[g];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(f+=A,f>4096){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Lg(this,U,f),g=Tt(this.J),Se(g,"RID",l),Se(g,"CVER",22),this.G&&Se(g,"X-HTTP-Session-Id",this.G),ia(this,g),$&&(this.R?f="headers="+Fs(Cg($))+"&"+f:this.u&&qd(g,this.u,$)),X(this.h,U),this.Ra&&Se(g,"TYPE","init"),this.S?(Se(g,"$req",f),Se(g,"SID","null"),U.U=!0,Us(U,g,null)):Us(U,g,f),this.I=2}}else this.I==3&&(l?Mg(this,l):this.i.length==0||Zo(this.h)||Mg(this))};function Mg(l,f){var g;f?g=f.l:g=l.V++;const A=Tt(l.J);Se(A,"SID",l.M),Se(A,"RID",g),Se(A,"AID",l.K),ia(l,A),l.u&&l.o&&qd(A,l.u,l.o),g=new ze(l,l.j,g,l.D+1),l.u===null&&(g.J=l.o),f&&(l.i=f.G.concat(l.i)),f=Lg(l,g,1e3),g.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),X(l.h,g),Us(g,A,f)}function ia(l,f){l.H&&B(l.H,function(g,A){Se(f,A,g)}),l.l&&B({},function(g,A){Se(f,A,g)})}function Lg(l,f,g){g=Math.min(l.i.length,g);const A=l.l?d(l.l.Ka,l.l,l):null;e:{var U=l.i;let de=-1;for(;;){const nt=["count="+g];de==-1?g>0?(de=U[0].g,nt.push("ofs="+de)):de=0:nt.push("ofs="+de);let Ie=!0;for(let ut=0;ut<g;ut++){var $=U[ut].g;const Vn=U[ut].map;if($-=de,$<0)de=Math.max(0,U[ut].g-100),Ie=!1;else try{$="req"+$+"_"||"";try{var J=Vn instanceof Map?Vn:Object.entries(Vn);for(const[Qs,Lr]of J){let Dr=Lr;a(Lr)&&(Dr=kr(Lr)),nt.push($+Qs+"="+encodeURIComponent(Dr))}}catch(Qs){throw nt.push($+"type="+encodeURIComponent("_badmap")),Qs}}catch{A&&A(Vn)}}if(Ie){J=nt.join("&");break e}}J=void 0}return l=l.i.splice(0,g),f.G=l,J}function Dg(l){if(!l.g&&!l.v){l.Y=1;var f=l.Da;O||w(),L||(O(),L=!0),S.add(f,l),l.A=0}}function Gd(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Ds(d(l.Da,l),Fg(l,l.A)),l.A++,!0)}t.Da=function(){if(this.v=null,Og(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Ds(d(this.Wa,this),l)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,gt(10),Jl(this),Og(this))};function Kd(l){l.B!=null&&(o.clearTimeout(l.B),l.B=null)}function Og(l){l.g=new ze(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var f=Tt(l.na);Se(f,"RID","rpc"),Se(f,"SID",l.M),Se(f,"AID",l.K),Se(f,"CI",l.F?"0":"1"),!l.F&&l.ia&&Se(f,"TO",l.ia),Se(f,"TYPE","xmlhttp"),ia(l,f),l.u&&l.o&&qd(f,l.u,l.o),l.O&&(l.g.H=l.O);var g=l.g;l=l.ba,g.M=1,g.A=qs(Tt(f)),g.u=null,g.R=!0,Bs(g,l)}t.Va=function(){this.C!=null&&(this.C=null,Jl(this),Gd(this),gt(19))};function ec(l){l.C!=null&&(o.clearTimeout(l.C),l.C=null)}function Vg(l,f){var g=null;if(l.g==f){ec(l),Kd(l),l.g=null;var A=2}else if(G(l.h,f))g=f.G,ae(l.h,f),A=1;else return;if(l.I!=0){if(f.o)if(A==1){g=f.u?f.u.length:0,f=Date.now()-f.F;var U=l.D;A=Dn(),lt(A,new Wl(A,g)),Zl(l)}else Dg(l);else if(U=f.m,U==3||U==0&&f.X>0||!(A==1&&wE(l,f)||A==2&&Gd(l)))switch(g&&g.length>0&&(f=l.h,f.i=f.i.concat(g)),U){case 1:Ks(l,5);break;case 4:Ks(l,10);break;case 3:Ks(l,6);break;default:Ks(l,2)}}}function Fg(l,f){let g=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(g*=2),g*f}function Ks(l,f){if(l.j.info("Error code "+f),f==2){var g=d(l.bb,l),A=l.Ua;const U=!A;A=new ct(A||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ht(A,"https"),qs(A),U?fE(A.toString(),g):pE(A.toString(),g)}else gt(2);l.I=0,l.l&&l.l.pa(f),zg(l),jg(l)}t.bb=function(l){l?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function zg(l){if(l.I=0,l.ja=[],l.l){const f=Ee(l.h);(f.length!=0||l.i.length!=0)&&(T(l.ja,f),T(l.ja,l.i),l.h.i.length=0,b(l.i),l.i.length=0),l.l.oa()}}function Ug(l,f,g){var A=g instanceof ct?Tt(g):new ct(g);if(A.g!="")f&&(A.g=f+"."+A.g),Pr(A,A.u);else{var U=o.location;A=U.protocol,f=f?f+"."+U.hostname:U.hostname,U=+U.port;const $=new ct(null);A&&Ht($,A),f&&($.g=f),U&&Pr($,U),g&&($.h=g),A=$}return g=l.G,f=l.wa,g&&f&&Se(A,g,f),Se(A,"VER",l.ka),ia(l,A),A}function Bg(l,f,g){if(f&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Aa&&!l.ma?new He(new Hd({ab:g})):new He(l.ma),f.Fa(l.L),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function $g(){}t=$g.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function tc(){}tc.prototype.g=function(l,f){return new nn(l,f)};function nn(l,f){Ye.call(this),this.g=new Rg(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(l?l["X-WebChannel-Client-Profile"]=f.sa:l={"X-WebChannel-Client-Profile":f.sa}),this.g.U=l,(l=f&&f.Qb)&&!_(l)&&(this.g.u=l),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!_(f)&&(this.g.G=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Ri(this)}p(nn,Ye),nn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},nn.prototype.close=function(){Wd(this.g)},nn.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.v&&(g={},g.__data__=kr(l),l=g);f.i.push(new Hs(f.Ya++,l)),f.I==3&&Zl(f)},nn.prototype.N=function(){this.g.l=null,delete this.j,Wd(this.g),delete this.g,nn.Z.N.call(this)};function Hg(l){qo.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}p(Hg,qo);function qg(){Ls.call(this),this.status=1}p(qg,Ls);function Ri(l){this.g=l}p(Ri,$g),Ri.prototype.ra=function(){lt(this.g,"a")},Ri.prototype.qa=function(l){lt(this.g,new Hg(l))},Ri.prototype.pa=function(l){lt(this.g,new qg)},Ri.prototype.oa=function(){lt(this.g,"b")},tc.prototype.createWebChannel=tc.prototype.g,nn.prototype.send=nn.prototype.o,nn.prototype.open=nn.prototype.m,nn.prototype.close=nn.prototype.close,qx=function(){return new tc},Hx=function(){return Dn()},$x=en,ip={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Vs.NO_ERROR=0,Vs.TIMEOUT=8,Vs.HTTP_ERROR=6,Wc=Vs,Gl.COMPLETE="complete",Bx=Gl,nr.EventType=Bt,Bt.OPEN="a",Bt.CLOSE="b",Bt.ERROR="c",Bt.MESSAGE="d",Ye.prototype.listen=Ye.prototype.J,Ea=nr,He.prototype.listenOnce=He.prototype.K,He.prototype.getLastError=He.prototype.Ha,He.prototype.getLastErrorCode=He.prototype.ya,He.prototype.getStatus=He.prototype.ca,He.prototype.getResponseJson=He.prototype.La,He.prototype.getResponseText=He.prototype.la,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Fa,Ux=He}).apply(typeof xc<"u"?xc:typeof self<"u"?self:typeof window<"u"?window:{});const Iv="@firebase/firestore",Cv="4.9.2";/**
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
 */class At{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
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
 */let Fo="12.3.0";/**
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
 */const wi=new Cm("@firebase/firestore");function Di(){return wi.logLevel}function Z(t,...e){if(wi.logLevel<=pe.DEBUG){const n=e.map(Pm);wi.debug(`Firestore (${Fo}): ${t}`,...n)}}function Er(t,...e){if(wi.logLevel<=pe.ERROR){const n=e.map(Pm);wi.error(`Firestore (${Fo}): ${t}`,...n)}}function Io(t,...e){if(wi.logLevel<=pe.WARN){const n=e.map(Pm);wi.warn(`Firestore (${Fo}): ${t}`,...n)}}function Pm(t){if(typeof t=="string")return t;try{/**
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
 */function se(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Wx(t,r,n)}function Wx(t,e,n){let r=`FIRESTORE (${Fo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Er(r),new Error(r)}function Ae(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Wx(e,s,r)}function me(t,e){return t}/**
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
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Ir{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ci{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Gx{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(At.UNAUTHENTICATED))}shutdown(){}}class pk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class mk{constructor(e){this.t=e,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ae(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new ci;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ci,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ci)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string",31837,{l:r}),new Gx(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string",2055,{h:e}),new At(e)}}class gk{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=At.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class yk{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new gk(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(At.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vk{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Cn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ae(this.o===void 0,3512);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new kv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ae(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new kv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function wk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Rm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=wk(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function op(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Mh(s)===Mh(i)?ve(s,i):Mh(s)?1:-1}return ve(t.length,e.length)}const xk=55296,_k=57343;function Mh(t){const e=t.charCodeAt(0);return e>=xk&&e<=_k}function Co(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Av="__name__";class $n{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&se(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return $n.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $n?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=$n.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ve(e.length,n.length)}static compareSegments(e,n){const r=$n.isNumericId(e),s=$n.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?$n.extractNumericId(e).compare($n.extractNumericId(n)):op(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ms.fromString(e.substring(4,e.length-2))}}class ke extends $n{construct(e,n,r){return new ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(K.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const bk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends $n{construct(e,n,r){return new Pt(e,n,r)}static isValidIdentifier(e){return bk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Av}static keyField(){return new Pt([Av])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ne(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new ne(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new ne(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(n)}static emptyPath(){return new Pt([])}}/**
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
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(ke.fromString(e))}static fromName(e){return new ie(ke.fromString(e).popFirst(5))}static empty(){return new ie(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new ke(e.slice()))}}/**
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
 */function Kx(t,e,n){if(!n)throw new ne(K.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ek(t,e,n,r){if(e===!0&&r===!0)throw new ne(K.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Nv(t){if(!ie.isDocumentKey(t))throw new ne(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Pv(t){if(ie.isDocumentKey(t))throw new ne(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qx(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function jm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se(12329,{type:typeof t})}function Fa(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jm(t);throw new ne(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function et(t,e){const n={typeString:t};return e&&(n.value=e),n}function Rl(t,e){if(!Qx(t))throw new ne(K.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ne(K.INVALID_ARGUMENT,n);return!0}/**
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
 */const Rv=-62135596800,jv=1e6;class Oe{static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*jv);return new Oe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Rv)throw new ne(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/jv}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Rl(e,Oe._jsonSchema))return new Oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Rv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Oe._jsonSchemaVersion="firestore/timestamp/1.0",Oe._jsonSchema={type:et("string",Oe._jsonSchemaVersion),seconds:et("number"),nanoseconds:et("number")};/**
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
 */class ue{static fromTimestamp(e){return new ue(e)}static min(){return new ue(new Oe(0,0))}static max(){return new ue(new Oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const fl=-1;function Sk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new _s(s,ie.empty(),e)}function Tk(t){return new _s(t.readTime,t.key,fl)}class _s{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new _s(ue.min(),ie.empty(),fl)}static max(){return new _s(ue.max(),ie.empty(),fl)}}function Ik(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
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
 */const Ck="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function bd(t){if(t.code!==K.FAILED_PRECONDITION||t.message!==Ck)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new W((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof W?n:W.resolve(n)}catch(n){return W.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):W.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):W.reject(n)}static resolve(e){return new W((n,r)=>{n(e)})}static reject(e){return new W((n,r)=>{r(e)})}static waitFor(e){return new W((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=W.resolve(!1);for(const r of e)n=n.next(s=>s?W.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new W((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const d=u;n(e[d]).next(h=>{o[d]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new W((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Ak(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function zo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ed{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ed.ce=-1;/**
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
 */const Nk=-1;function jl(t){return t==null}function Ru(t){return t===0&&1/t==-1/0}function Pk(t){return typeof t=="number"&&Number.isInteger(t)&&!Ru(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Yx="";function Rk(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Mv(e)),e=jk(t.get(n),e);return Mv(e)}function jk(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Yx:n+="";break;default:n+=i}}return n}function Mv(t){return t+Yx+""}/**
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
 */function Lv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Si(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Xx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Qe{constructor(e,n){this.comparator=e,this.root=n||xt.EMPTY}insert(e,n){return new Qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _c(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _c(this.root,e,this.comparator,!1)}getReverseIterator(){return new _c(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _c(this.root,e,this.comparator,!0)}}class _c{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??xt.RED,this.left=s??xt.EMPTY,this.right=i??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new xt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return xt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw se(27949);return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw se(57766)}get value(){throw se(16141)}get color(){throw se(16727)}get left(){throw se(29726)}get right(){throw se(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new xt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dv(this.data.getIterator())}getIteratorFrom(e){return new Dv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class Dv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class vn{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new vn([])}unionWith(e){let n=new at(Pt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new vn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Co(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Jx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Jx("Invalid base64 string: "+i):i}}(e);return new Et(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const Mk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bs(t){if(Ae(!!t,39018),typeof t=="string"){let e=0;const n=Mk.exec(t);if(Ae(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Es(t){return typeof t=="string"?Et.fromBase64String(t):Et.fromUint8Array(t)}/**
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
 */const Zx="server_timestamp",e_="__type__",t_="__previous_value__",n_="__local_write_time__";function Mm(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[e_])==null?void 0:r.stringValue)===Zx}function Sd(t){const e=t.mapValue.fields[t_];return Mm(e)?Sd(e):e}function pl(t){const e=bs(t.mapValue.fields[n_].timestampValue);return new Oe(e.seconds,e.nanos)}/**
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
 */class Lk{constructor(e,n,r,s,i,o,a,u,d,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=h}}const ju="(default)";class ml{constructor(e,n){this.projectId=e,this.database=n||ju}static empty(){return new ml("","")}get isDefaultDatabase(){return this.database===ju}isEqual(e){return e instanceof ml&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const r_="__type__",s_="__max__",bc={mapValue:{fields:{__type__:{stringValue:s_}}}},i_="__vector__",Mu="value";function Ss(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mm(t)?4:Ok(t)?9007199254740991:Dk(t)?10:11:se(28295,{value:t})}function Zn(t,e){if(t===e)return!0;const n=Ss(t);if(n!==Ss(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pl(t).isEqual(pl(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=bs(s.timestampValue),a=bs(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Es(s.bytesValue).isEqual(Es(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ge(s.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(s.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ge(s.integerValue)===Ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ge(s.doubleValue),a=Ge(i.doubleValue);return o===a?Ru(o)===Ru(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Co(t.arrayValue.values||[],e.arrayValue.values||[],Zn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Lv(o)!==Lv(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Zn(o[u],a[u])))return!1;return!0}(t,e);default:return se(52216,{left:t})}}function gl(t,e){return(t.values||[]).find(n=>Zn(n,e))!==void 0}function ko(t,e){if(t===e)return 0;const n=Ss(t),r=Ss(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ge(i.integerValue||i.doubleValue),u=Ge(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return Ov(t.timestampValue,e.timestampValue);case 4:return Ov(pl(t),pl(e));case 5:return op(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Es(i),u=Es(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),u=o.split("/");for(let d=0;d<a.length&&d<u.length;d++){const h=ve(a[d],u[d]);if(h!==0)return h}return ve(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ve(Ge(i.latitude),Ge(o.latitude));return a!==0?a:ve(Ge(i.longitude),Ge(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Vv(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,b,T,P;const a=i.fields||{},u=o.fields||{},d=(m=a[Mu])==null?void 0:m.arrayValue,h=(b=u[Mu])==null?void 0:b.arrayValue,p=ve(((T=d==null?void 0:d.values)==null?void 0:T.length)||0,((P=h==null?void 0:h.values)==null?void 0:P.length)||0);return p!==0?p:Vv(d,h)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===bc.mapValue&&o===bc.mapValue)return 0;if(i===bc.mapValue)return 1;if(o===bc.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),d=o.fields||{},h=Object.keys(d);u.sort(),h.sort();for(let p=0;p<u.length&&p<h.length;++p){const m=op(u[p],h[p]);if(m!==0)return m;const b=ko(a[u[p]],d[h[p]]);if(b!==0)return b}return ve(u.length,h.length)}(t.mapValue,e.mapValue);default:throw se(23264,{he:n})}}function Ov(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=bs(t),r=bs(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function Vv(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ko(n[s],r[s]);if(i)return i}return ve(n.length,r.length)}function Ao(t){return ap(t)}function ap(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=bs(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Es(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ap(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ap(n.fields[o])}`;return s+"}"}(t.mapValue):se(61005,{value:t})}function Gc(t){switch(Ss(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Sd(t);return e?16+Gc(e):16;case 5:return 2*t.stringValue.length;case 6:return Es(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Gc(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Si(r.fields,(i,o)=>{s+=i.length+Gc(o)}),s}(t.mapValue);default:throw se(13486,{value:t})}}function lp(t){return!!t&&"integerValue"in t}function Lm(t){return!!t&&"arrayValue"in t}function Fv(t){return!!t&&"nullValue"in t}function zv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Lh(t){return!!t&&"mapValue"in t}function Dk(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[r_])==null?void 0:r.stringValue)===i_}function za(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Si(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=za(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=za(t.arrayValue.values[n]);return e}return{...t}}function Ok(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===s_}/**
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
 */class Kt{constructor(e){this.value=e}static empty(){return new Kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Lh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=za(n)}setAll(e){let n=Pt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=za(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Lh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Lh(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Si(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Kt(za(this.value))}}/**
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
 */class pt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new pt(e,0,ue.min(),ue.min(),ue.min(),Kt.empty(),0)}static newFoundDocument(e,n,r,s){return new pt(e,1,n,ue.min(),r,s,0)}static newNoDocument(e,n){return new pt(e,2,n,ue.min(),ue.min(),Kt.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,ue.min(),ue.min(),Kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Lu{constructor(e,n){this.position=e,this.inclusive=n}}function Uv(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=ko(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Bv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Du{constructor(e,n="asc"){this.field=e,this.dir=n}}function Vk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class o_{}class st extends o_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new zk(e,n,r):n==="array-contains"?new $k(e,r):n==="in"?new Hk(e,r):n==="not-in"?new qk(e,r):n==="array-contains-any"?new Wk(e,r):new st(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Uk(e,r):new Bk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ko(n,this.value)):n!==null&&Ss(this.value)===Ss(n)&&this.matchesComparison(ko(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class er extends o_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new er(e,n)}matches(e){return a_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function a_(t){return t.op==="and"}function l_(t){return Fk(t)&&a_(t)}function Fk(t){for(const e of t.filters)if(e instanceof er)return!1;return!0}function cp(t){if(t instanceof st)return t.field.canonicalString()+t.op.toString()+Ao(t.value);if(l_(t))return t.filters.map(e=>cp(e)).join(",");{const e=t.filters.map(n=>cp(n)).join(",");return`${t.op}(${e})`}}function c_(t,e){return t instanceof st?function(r,s){return s instanceof st&&r.op===s.op&&r.field.isEqual(s.field)&&Zn(r.value,s.value)}(t,e):t instanceof er?function(r,s){return s instanceof er&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&c_(o,s.filters[a]),!0):!1}(t,e):void se(19439)}function u_(t){return t instanceof st?function(n){return`${n.field.canonicalString()} ${n.op} ${Ao(n.value)}`}(t):t instanceof er?function(n){return n.op.toString()+" {"+n.getFilters().map(u_).join(" ,")+"}"}(t):"Filter"}class zk extends st{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class Uk extends st{constructor(e,n){super(e,"in",n),this.keys=d_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Bk extends st{constructor(e,n){super(e,"not-in",n),this.keys=d_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function d_(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class $k extends st{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Lm(n)&&gl(n.arrayValue,this.value)}}class Hk extends st{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&gl(this.value.arrayValue,n)}}class qk extends st{constructor(e,n){super(e,"not-in",n)}matches(e){if(gl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!gl(this.value.arrayValue,n)}}class Wk extends st{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Lm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>gl(this.value.arrayValue,r))}}/**
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
 */class Gk{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function $v(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Gk(t,e,n,r,s,i,o)}function Dm(t){const e=me(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>cp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),jl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ao(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ao(r)).join(",")),e.Te=n}return e.Te}function Om(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Vk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!c_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Bv(t.startAt,e.startAt)&&Bv(t.endAt,e.endAt)}function up(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Td{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Kk(t,e,n,r,s,i,o,a){return new Td(t,e,n,r,s,i,o,a)}function Vm(t){return new Td(t)}function Hv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Qk(t){return t.collectionGroup!==null}function Ua(t){const e=me(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new at(Pt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(a=a.add(d.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Du(i,r))}),n.has(Pt.keyField().canonicalString())||e.Ie.push(new Du(Pt.keyField(),r))}return e.Ie}function Kn(t){const e=me(t);return e.Ee||(e.Ee=Yk(e,Ua(t))),e.Ee}function Yk(t,e){if(t.limitType==="F")return $v(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Du(s.field,i)});const n=t.endAt?new Lu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Lu(t.startAt.position,t.startAt.inclusive):null;return $v(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function dp(t,e,n){return new Td(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Id(t,e){return Om(Kn(t),Kn(e))&&t.limitType===e.limitType}function h_(t){return`${Dm(Kn(t))}|lt:${t.limitType}`}function Oi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>u_(s)).join(", ")}]`),jl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ao(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ao(s)).join(",")),`Target(${r})`}(Kn(t))}; limitType=${t.limitType})`}function Cd(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ie.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ua(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,u){const d=Uv(o,a,u);return o.inclusive?d<=0:d<0}(r.startAt,Ua(r),s)||r.endAt&&!function(o,a,u){const d=Uv(o,a,u);return o.inclusive?d>=0:d>0}(r.endAt,Ua(r),s))}(t,e)}function Xk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function f_(t){return(e,n)=>{let r=!1;for(const s of Ua(t)){const i=Jk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Jk(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(i,o,a){const u=o.data.field(i),d=a.data.field(i);return u!==null&&d!==null?ko(u,d):se(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se(19790,{direction:t.dir})}}/**
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
 */class Ti{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Si(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Xx(this.inner)}size(){return this.innerSize}}/**
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
 */const Zk=new Qe(ie.comparator);function Ts(){return Zk}const p_=new Qe(ie.comparator);function Sa(...t){let e=p_;for(const n of t)e=e.insert(n.key,n);return e}function eA(t){let e=p_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function oi(){return Ba()}function m_(){return Ba()}function Ba(){return new Ti(t=>t.toString(),(t,e)=>t.isEqual(e))}const tA=new at(ie.comparator);function _e(...t){let e=tA;for(const n of t)e=e.add(n);return e}const nA=new at(ve);function rA(){return nA}/**
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
 */function Fm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ru(e)?"-0":e}}function g_(t){return{integerValue:""+t}}function sA(t,e){return Pk(e)?g_(e):Fm(t,e)}/**
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
 */class kd{constructor(){this._=void 0}}function iA(t,e,n){return t instanceof Ou?function(s,i){const o={fields:{[e_]:{stringValue:Zx},[n_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Mm(i)&&(i=Sd(i)),i&&(o.fields[t_]=i),{mapValue:o}}(n,e):t instanceof yl?y_(t,e):t instanceof vl?v_(t,e):function(s,i){const o=aA(s,i),a=qv(o)+qv(s.Ae);return lp(o)&&lp(s.Ae)?g_(a):Fm(s.serializer,a)}(t,e)}function oA(t,e,n){return t instanceof yl?y_(t,e):t instanceof vl?v_(t,e):n}function aA(t,e){return t instanceof Vu?function(r){return lp(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ou extends kd{}class yl extends kd{constructor(e){super(),this.elements=e}}function y_(t,e){const n=w_(e);for(const r of t.elements)n.some(s=>Zn(s,r))||n.push(r);return{arrayValue:{values:n}}}class vl extends kd{constructor(e){super(),this.elements=e}}function v_(t,e){let n=w_(e);for(const r of t.elements)n=n.filter(s=>!Zn(s,r));return{arrayValue:{values:n}}}class Vu extends kd{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function qv(t){return Ge(t.integerValue||t.doubleValue)}function w_(t){return Lm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function lA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof yl&&s instanceof yl||r instanceof vl&&s instanceof vl?Co(r.elements,s.elements,Zn):r instanceof Vu&&s instanceof Vu?Zn(r.Ae,s.Ae):r instanceof Ou&&s instanceof Ou}(t.transform,e.transform)}class gn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new gn}static exists(e){return new gn(void 0,e)}static updateTime(e){return new gn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Kc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ad{}function x_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zm(t.key,gn.none()):new Ml(t.key,t.data,gn.none());{const n=t.data,r=Kt.empty();let s=new at(Pt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ii(t.key,r,new vn(s.toArray()),gn.none())}}function cA(t,e,n){t instanceof Ml?function(s,i,o){const a=s.value.clone(),u=Gv(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ii?function(s,i,o){if(!Kc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Gv(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(__(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function $a(t,e,n,r){return t instanceof Ml?function(i,o,a,u){if(!Kc(i.precondition,o))return a;const d=i.value.clone(),h=Kv(i.fieldTransforms,u,o);return d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ii?function(i,o,a,u){if(!Kc(i.precondition,o))return a;const d=Kv(i.fieldTransforms,u,o),h=o.data;return h.setAll(__(i)),h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,a){return Kc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Wv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Co(r,s,(i,o)=>lA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ml extends Ad{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ii extends Ad{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function __(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Gv(t,e,n){const r=new Map;Ae(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,oA(o,a,n[s]))}return r}function Kv(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,iA(i,o,e))}return r}class zm extends Ad{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class b_ extends Ad{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class uA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&cA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=$a(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=$a(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=m_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const u=x_(o,a);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&Co(this.mutations,e.mutations,(n,r)=>Wv(n,r))&&Co(this.baseMutations,e.baseMutations,(n,r)=>Wv(n,r))}}/**
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
 */class dA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class hA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Je,we;function fA(t){switch(t){case K.OK:return se(64938);case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return se(15467,{code:t})}}function E_(t){if(t===void 0)return Er("GRPC error has no .code"),K.UNKNOWN;switch(t){case Je.OK:return K.OK;case Je.CANCELLED:return K.CANCELLED;case Je.UNKNOWN:return K.UNKNOWN;case Je.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case Je.INTERNAL:return K.INTERNAL;case Je.UNAVAILABLE:return K.UNAVAILABLE;case Je.UNAUTHENTICATED:return K.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case Je.NOT_FOUND:return K.NOT_FOUND;case Je.ALREADY_EXISTS:return K.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return K.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case Je.ABORTED:return K.ABORTED;case Je.OUT_OF_RANGE:return K.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return K.UNIMPLEMENTED;case Je.DATA_LOSS:return K.DATA_LOSS;default:return se(39323,{code:t})}}(we=Je||(Je={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function pA(){return new TextEncoder}/**
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
 */const mA=new ms([4294967295,4294967295],0);function Qv(t){const e=pA().encode(t),n=new zx;return n.update(e),new Uint8Array(n.digest())}function Yv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ms([n,r],0),new ms([s,i],0)]}class Um{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ta(`Invalid padding: ${n}`);if(r<0)throw new Ta(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ta(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ta(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ms.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(ms.fromNumber(r)));return s.compare(mA)===1&&(s=new ms([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Qv(e),[r,s]=Yv(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Um(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=Qv(e),[r,s]=Yv(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ta extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Nd{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ll.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Nd(ue.min(),s,new Qe(ve),Ts(),_e())}}class Ll{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ll(r,n,_e(),_e(),_e())}}/**
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
 */class Qc{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class S_{constructor(e,n){this.targetId=e,this.Ce=n}}class T_{constructor(e,n,r=Et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Xv{constructor(){this.ve=0,this.Fe=Jv(),this.Me=Et.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=_e(),n=_e(),r=_e();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:se(38017,{changeType:i})}}),new Ll(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Jv()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ae(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class gA{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ts(),this.Je=Ec(),this.He=Ec(),this.Ye=new Qe(ve)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:se(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(up(i))if(r===0){const o=new ie(i.path);this.et(n,o,pt.newNoDocument(o,ue.min()))}else Ae(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),u=a?this.ct(a,e,o):1;if(u!==0){this.it(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,d)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Es(r).toUint8Array()}catch(u){if(u instanceof Jx)return Io("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Um(o,s,i)}catch(u){return Io(u instanceof Ta?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const a=this.ot(o);if(a){if(i.current&&up(a.target)){const u=new ie(a.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,pt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=_e();this.He.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Nd(e,n,this.Ye,this.je,r);return this.je=Ts(),this.Je=Ec(),this.He=Ec(),this.Ye=new Qe(ve),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Xv,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new at(ve),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new at(ve),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Xv),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ec(){return new Qe(ie.comparator)}function Jv(){return new Qe(ie.comparator)}const yA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),vA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),wA=(()=>({and:"AND",or:"OR"}))();class xA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hp(t,e){return t.useProto3Json||jl(e)?e:{value:e}}function Fu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function I_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _A(t,e){return Fu(t,e.toTimestamp())}function yr(t){return Ae(!!t,49232),ue.fromTimestamp(function(n){const r=bs(n);return new Oe(r.seconds,r.nanos)}(t))}function Bm(t,e){return fp(t,e).canonicalString()}function fp(t,e){const n=function(s){return new ke(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function C_(t){const e=ke.fromString(t);return Ae(R_(e),10190,{key:e.toString()}),e}function zu(t,e){return Bm(t.databaseId,e.path)}function Ha(t,e){const n=C_(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(A_(n))}function k_(t,e){return Bm(t.databaseId,e)}function bA(t){const e=C_(t);return e.length===4?ke.emptyPath():A_(e)}function Zv(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function A_(t){return Ae(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function e0(t,e,n){return{name:zu(t,e),fields:n.value.mapValue.fields}}function EA(t,e){return"found"in e?function(r,s){Ae(!!s.found,43571),s.found.name,s.found.updateTime;const i=Ha(r,s.found.name),o=yr(s.found.updateTime),a=s.found.createTime?yr(s.found.createTime):ue.min(),u=new Kt({mapValue:{fields:s.found.fields}});return pt.newFoundDocument(i,o,a,u)}(t,e):"missing"in e?function(r,s){Ae(!!s.missing,3894),Ae(!!s.readTime,22933);const i=Ha(r,s.missing),o=yr(s.readTime);return pt.newNoDocument(i,o)}(t,e):se(7234,{result:e})}function SA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:se(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,h){return d.useProto3Json?(Ae(h===void 0||typeof h=="string",58123),Et.fromBase64String(h||"")):(Ae(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Et.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(d){const h=d.code===void 0?K.UNKNOWN:E_(d.code);return new ne(h,d.message||"")}(o);n=new T_(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ha(t,r.document.name),i=yr(r.document.updateTime),o=r.document.createTime?yr(r.document.createTime):ue.min(),a=new Kt({mapValue:{fields:r.document.fields}}),u=pt.newFoundDocument(s,i,o,a),d=r.targetIds||[],h=r.removedTargetIds||[];n=new Qc(d,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ha(t,r.document),i=r.readTime?yr(r.readTime):ue.min(),o=pt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Qc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ha(t,r.document),i=r.removedTargetIds||[];n=new Qc([],i,s,null)}else{if(!("filter"in e))return se(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new hA(s,i),a=r.targetId;n=new S_(a,o)}}return n}function TA(t,e){let n;if(e instanceof Ml)n={update:e0(t,e.key,e.value)};else if(e instanceof zm)n={delete:zu(t,e.key)};else if(e instanceof Ii)n={update:e0(t,e.key,e.data),updateMask:jA(e.fieldMask)};else{if(!(e instanceof b_))return se(16599,{Vt:e.type});n={verify:zu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Ou)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof yl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof vl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Vu)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw se(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:_A(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:se(27497)}(t,e.precondition)),n}function IA(t,e){return{documents:[k_(t,e.path)]}}function CA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=k_(t,s);const i=function(d){if(d.length!==0)return P_(er.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(h=>function(m){return{field:Vi(m.field),direction:NA(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=hp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:n,parent:s}}function kA(t){let e=bA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ae(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(p){const m=N_(p);return m instanceof er&&l_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(T){return new Du(Fi(T.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(p){let m;return m=typeof p=="object"?p.value:p,jl(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,b=p.values||[];return new Lu(b,m)}(n.startAt));let d=null;return n.endAt&&(d=function(p){const m=!p.before,b=p.values||[];return new Lu(b,m)}(n.endAt)),Kk(e,s,o,i,a,"F",u,d)}function AA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function N_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fi(n.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Fi(n.unaryFilter.field);return st.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fi(n.unaryFilter.field);return st.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fi(n.unaryFilter.field);return st.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return se(61313);default:return se(60726)}}(t):t.fieldFilter!==void 0?function(n){return st.create(Fi(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return se(58110);default:return se(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return er.create(n.compositeFilter.filters.map(r=>N_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return se(1026)}}(n.compositeFilter.op))}(t):se(30097,{filter:t})}function NA(t){return yA[t]}function PA(t){return vA[t]}function RA(t){return wA[t]}function Vi(t){return{fieldPath:t.canonicalString()}}function Fi(t){return Pt.fromServerFormat(t.fieldPath)}function P_(t){return t instanceof st?function(n){if(n.op==="=="){if(zv(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NAN"}};if(Fv(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(zv(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NOT_NAN"}};if(Fv(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vi(n.field),op:PA(n.op),value:n.value}}}(t):t instanceof er?function(n){const r=n.getFilters().map(s=>P_(s));return r.length===1?r[0]:{compositeFilter:{op:RA(n.op),filters:r}}}(t):se(54877,{filter:t})}function jA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function R_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ns{constructor(e,n,r,s,i=ue.min(),o=ue.min(),a=Et.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new ns(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class MA{constructor(e){this.yt=e}}function LA(t){const e=kA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?dp(e,e.limit,"L"):e}/**
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
 */class DA{constructor(){this.Cn=new OA}addToCollectionParentIndex(e,n){return this.Cn.add(n),W.resolve()}getCollectionParents(e,n){return W.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return W.resolve()}deleteFieldIndex(e,n){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,n){return W.resolve()}getDocumentsMatchingTarget(e,n){return W.resolve(null)}getIndexType(e,n){return W.resolve(0)}getFieldIndexes(e,n){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,n){return W.resolve(_s.min())}getMinOffsetFromCollectionGroup(e,n){return W.resolve(_s.min())}updateCollectionGroup(e,n,r){return W.resolve()}updateIndexEntries(e,n){return W.resolve()}}class OA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(ke.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(ke.comparator)).toArray()}}/**
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
 */const t0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},j_=41943040;class qt{static withCacheSize(e){return new qt(e,qt.DEFAULT_COLLECTION_PERCENTILE,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */qt.DEFAULT_COLLECTION_PERCENTILE=10,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qt.DEFAULT=new qt(j_,qt.DEFAULT_COLLECTION_PERCENTILE,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qt.DISABLED=new qt(-1,0,0);/**
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
 */class No{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new No(0)}static cr(){return new No(-1)}}/**
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
 */const n0="LruGarbageCollector",VA=1048576;function r0([t,e],[n,r]){const s=ve(t,n);return s===0?ve(e,r):s}class FA{constructor(e){this.Ir=e,this.buffer=new at(r0),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();r0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class zA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){Z(n0,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){zo(n)?Z(n0,"Ignoring IndexedDB error during garbage collection: ",n):await bd(n)}await this.Vr(3e5)})}}class UA{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return W.resolve(Ed.ce);const r=new FA(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(t0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),t0):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,a,u,d;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,a=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(d=Date.now(),Di()<=pe.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(u-a)+`ms
	Removed ${p} documents in `+(d-u)+`ms
Total Duration: ${d-h}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function BA(t,e){return new UA(t,e)}/**
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
 */class $A{constructor(){this.changes=new Ti(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?W.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class HA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class qA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&$a(r.mutation,s,vn.empty(),Oe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const s=oi();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Sa();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=oi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Ts();const o=Ba(),a=function(){return Ba()}();return n.forEach((u,d)=>{const h=r.get(d.key);s.has(d.key)&&(h===void 0||h.mutation instanceof Ii)?i=i.insert(d.key,d):h!==void 0?(o.set(d.key,h.mutation.getFieldMask()),$a(h.mutation,d,h.mutation.getFieldMask(),Oe.now())):o.set(d.key,vn.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,h)=>o.set(d,h)),n.forEach((d,h)=>a.set(d,new HA(h,o.get(d)??null))),a))}recalculateAndSaveOverlays(e,n){const r=Ba();let s=new Qe((o,a)=>o-a),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let h=r.get(u)||vn.empty();h=a.applyToLocalView(d,h),r.set(u,h);const p=(s.get(a.batchId)||_e()).add(u);s=s.insert(a.batchId,p)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),d=u.key,h=u.value,p=m_();h.forEach(m=>{if(!i.has(m)){const b=x_(n.get(m),r.get(m));b!==null&&p.set(m,b),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,p))}return W.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Qk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):W.resolve(oi());let a=fl,u=i;return o.next(d=>W.forEach(d,(h,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),i.get(h)?W.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,_e())).next(h=>({batchId:a,changes:eA(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let s=Sa();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Sa();return this.indexManager.getCollectionParents(e,i).next(a=>W.forEach(a,u=>{const d=function(p,m){return new Td(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(h=>{h.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,d)=>{const h=d.getKey();o.get(h)===null&&(o=o.insert(h,pt.newInvalidDocument(h)))});let a=Sa();return o.forEach((u,d)=>{const h=i.get(u);h!==void 0&&$a(h.mutation,d,vn.empty(),Oe.now()),Cd(n,d)&&(a=a.insert(u,d))}),a})}}/**
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
 */class WA{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return W.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:yr(s.createTime)}}(n)),W.resolve()}getNamedQuery(e,n){return W.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:LA(s.bundledQuery),readTime:yr(s.readTime)}}(n)),W.resolve()}}/**
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
 */class GA{constructor(){this.overlays=new Qe(ie.comparator),this.qr=new Map}getOverlay(e,n){return W.resolve(this.overlays.get(n))}getOverlays(e,n){const r=oi();return W.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),W.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),W.resolve()}getOverlaysForCollection(e,n,r){const s=oi(),i=n.length+1,o=new ie(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return W.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Qe((d,h)=>d-h);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let h=i.get(d.largestBatchId);h===null&&(h=oi(),i=i.insert(d.largestBatchId,h)),h.set(d.getKey(),d)}}const a=oi(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,h)=>a.set(d,h)),!(a.size()>=s)););return W.resolve(a)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new dA(n,r));let i=this.qr.get(n);i===void 0&&(i=_e(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class KA{constructor(){this.sessionToken=Et.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,W.resolve()}}/**
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
 */class $m{constructor(){this.Qr=new at(ht.$r),this.Ur=new at(ht.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new ht(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new ht(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new ie(new ke([])),r=new ht(n,e),s=new ht(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ie(new ke([])),r=new ht(n,e),s=new ht(n,e+1);let i=_e();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ht(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ht{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ie.comparator(e.key,n.key)||ve(e.Yr,n.Yr)}static Kr(e,n){return ve(e.Yr,n.Yr)||ie.comparator(e.key,n.key)}}/**
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
 */class QA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new at(ht.$r)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uA(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Zr=this.Zr.add(new ht(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return W.resolve(o)}lookupMutationBatch(e,n){return W.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return W.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?Nk:this.tr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ht(n,0),s=new ht(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const a=this.Xr(o.Yr);i.push(a)}),W.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(ve);return n.forEach(s=>{const i=new ht(s,0),o=new ht(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],a=>{r=r.add(a.Yr)})}),W.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ie.isDocumentKey(i)||(i=i.child(""));const o=new ht(new ie(i),0);let a=new at(ve);return this.Zr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(a=a.add(u.Yr)),!0)},o),W.resolve(this.ti(a))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ae(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return W.forEach(n.mutations,s=>{const i=new ht(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new ht(n,0),s=this.Zr.firstAfterOrEqual(r);return W.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class YA{constructor(e){this.ri=e,this.docs=function(){return new Qe(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return W.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=Ts();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():pt.newInvalidDocument(s))}),W.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Ts();const o=n.path,a=new ie(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:d,value:{document:h}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||Ik(Tk(h),r)<=0||(s.has(h.key)||Cd(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return W.resolve(i)}getAllFromCollectionGroup(e,n,r,s){se(9500)}ii(e,n){return W.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new XA(this)}getSize(e){return W.resolve(this.size)}}class XA extends $A{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),W.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class JA{constructor(e){this.persistence=e,this.si=new Ti(n=>Dm(n),Om),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.oi=0,this._i=new $m,this.targetCount=0,this.ai=No.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),W.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new No(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,W.resolve()}updateTargetData(e,n){return this.Pr(n),W.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),W.waitFor(i).next(()=>s)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return W.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),W.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),W.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),W.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return W.resolve(r)}containsKey(e,n){return W.resolve(this._i.containsKey(n))}}/**
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
 */class M_{constructor(e,n){this.ui={},this.overlays={},this.ci=new Ed(0),this.li=!1,this.li=!0,this.hi=new KA,this.referenceDelegate=e(this),this.Pi=new JA(this),this.indexManager=new DA,this.remoteDocumentCache=function(s){return new YA(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new MA(n),this.Ii=new WA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new GA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new QA(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new ZA(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return W.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class ZA extends kk{constructor(e){super(),this.currentSequenceNumber=e}}class Hm{constructor(e){this.persistence=e,this.Ri=new $m,this.Vi=null}static mi(e){return new Hm(e)}get fi(){if(this.Vi)return this.Vi;throw se(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),W.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),W.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),W.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.fi,r=>{const s=ie.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,ue.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return W.or([()=>W.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Uu{constructor(e,n){this.persistence=e,this.pi=new Ti(r=>Rk(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=BA(this,n)}static mi(e,n){return new Uu(e,n)}Ei(){}di(e){return W.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return W.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?W.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(a=>{a||(r++,i.removeEntry(o,ue.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),W.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),W.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),W.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Gc(e.data.value)),n}br(e,n,r){return W.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return W.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class qm{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new qm(e,n.fromCache,r,s)}}/**
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
 */class eN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class tN{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return KI()?8:Ak(jt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new eN;return this.Ss(e,n,o).next(a=>{if(i.result=a,this.Vs)return this.bs(e,n,o,a.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(Di()<=pe.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Oi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),W.resolve()):(Di()<=pe.DEBUG&&Z("QueryEngine","Query:",Oi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Di()<=pe.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Oi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kn(n))):W.resolve())}ys(e,n){if(Hv(n))return W.resolve(null);let r=Kn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=dp(n,null,"F"),r=Kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=_e(...i);return this.ps.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.Ds(n,a);return this.Cs(n,d,o,u.readTime)?this.ys(e,dp(n,null,"F")):this.vs(e,d,n,u)}))})))}ws(e,n,r,s){return Hv(n)||s.isEqual(ue.min())?W.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?W.resolve(null):(Di()<=pe.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Oi(n)),this.vs(e,o,n,Sk(s,fl)).next(a=>a))})}Ds(e,n){let r=new at(f_(e));return n.forEach((s,i)=>{Cd(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Di()<=pe.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Oi(n)),this.ps.getDocumentsMatchingQuery(e,n,_s.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Wm="LocalStore",nN=3e8;class rN{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Qe(ve),this.xs=new Ti(i=>Dm(i),Om),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qA(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function sN(t,e,n,r){return new rN(t,e,n,r)}async function L_(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=_e();for(const d of s){o.push(d.batchId);for(const h of d.mutations)u=u.add(h.key)}for(const d of i){a.push(d.batchId);for(const h of d.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(d=>({Ls:d,removedBatchIds:o,addedBatchIds:a}))})})}function D_(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function iN(t,e){const n=me(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const a=[];e.targetChanges.forEach((h,p)=>{const m=s.get(p);if(!m)return;a.push(n.Pi.removeMatchingKeys(i,h.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,h.addedDocuments,p)));let b=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(Et.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):h.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(h.resumeToken,r)),s=s.insert(p,b),function(P,N,E){return P.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=nN?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,b,h)&&a.push(n.Pi.updateTargetData(i,b))});let u=Ts(),d=_e();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(oN(i,o,e.documentUpdates).next(h=>{u=h.ks,d=h.qs})),!r.isEqual(ue.min())){const h=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return W.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(n.Ms=s,i))}function oN(t,e,n){let r=_e(),s=_e();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Ts();return n.forEach((a,u)=>{const d=i.get(a);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(ue.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):Z(Wm,"Ignoring outdated watch update for ",a,". Current version:",d.version," Watch version:",u.version)}),{ks:o,qs:s}})}function aN(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,W.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new ns(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function pp(t,e,n){const r=me(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!zo(o))throw o;Z(Wm,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function s0(t,e,n){const r=me(t);let s=ue.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,h){const p=me(u),m=p.xs.get(h);return m!==void 0?W.resolve(p.Ms.get(m)):p.Pi.getTargetData(d,h)}(r,o,Kn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:ue.min(),n?i:_e())).next(a=>(lN(r,Xk(e),a),{documents:a,Qs:i})))}function lN(t,e,n){let r=t.Os.get(e)||ue.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class i0{constructor(){this.activeTargetIds=rA()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cN{constructor(){this.Mo=new i0,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new i0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uN{Oo(e){}shutdown(){}}/**
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
 */const o0="ConnectivityMonitor";class a0{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Z(o0,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Z(o0,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Sc=null;function mp(){return Sc===null?Sc=function(){return 268435456+Math.round(2147483648*Math.random())}():Sc++,"0x"+Sc.toString(16)}/**
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
 */const Dh="RestConnection",dN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class hN{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ju?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=mp(),a=this.zo(e,n.toUriEncodedString());Z(Dh,`Sending RPC '${e}' ${o}:`,a,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:d}=new URL(a),h=Oo(d);return this.Jo(e,a,u,r,h).then(p=>(Z(Dh,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Io(Dh,`RPC '${e}' ${o} failed with error: `,p,"url: ",a,"request:",r),p})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=dN[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class fN{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const kt="WebChannelConnection";class pN extends hN{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=mp();return new Promise((a,u)=>{const d=new Ux;d.setWithCredentials(!0),d.listenOnce(Bx.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Wc.NO_ERROR:const p=d.getResponseJson();Z(kt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),a(p);break;case Wc.TIMEOUT:Z(kt,`RPC '${e}' ${o} timed out`),u(new ne(K.DEADLINE_EXCEEDED,"Request time out"));break;case Wc.HTTP_ERROR:const m=d.getStatus();if(Z(kt,`RPC '${e}' ${o} failed with status:`,m,"response text:",d.getResponseText()),m>0){let b=d.getResponseJson();Array.isArray(b)&&(b=b[0]);const T=b==null?void 0:b.error;if(T&&T.status&&T.message){const P=function(E){const y=E.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(y)>=0?y:K.UNKNOWN}(T.status);u(new ne(P,T.message))}else u(new ne(K.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new ne(K.UNAVAILABLE,"Connection failed."));break;default:se(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{Z(kt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);Z(kt,`RPC '${e}' ${o} sending request:`,s),d.send(n,"POST",h,r,15)})}T_(e,n,r){const s=mp(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=qx(),a=Hx(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=i.join("");Z(kt,`Creating RPC '${e}' stream ${s}: ${h}`,u);const p=o.createWebChannel(h,u);this.I_(p);let m=!1,b=!1;const T=new fN({Yo:N=>{b?Z(kt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(Z(kt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Z(kt,`RPC '${e}' stream ${s} sending:`,N),p.send(N))},Zo:()=>p.close()}),P=(N,E,y)=>{N.listen(E,v=>{try{y(v)}catch(I){setTimeout(()=>{throw I},0)}})};return P(p,Ea.EventType.OPEN,()=>{b||(Z(kt,`RPC '${e}' stream ${s} transport opened.`),T.o_())}),P(p,Ea.EventType.CLOSE,()=>{b||(b=!0,Z(kt,`RPC '${e}' stream ${s} transport closed`),T.a_(),this.E_(p))}),P(p,Ea.EventType.ERROR,N=>{b||(b=!0,Io(kt,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),T.a_(new ne(K.UNAVAILABLE,"The operation could not be completed")))}),P(p,Ea.EventType.MESSAGE,N=>{var E;if(!b){const y=N.data[0];Ae(!!y,16349);const v=y,I=(v==null?void 0:v.error)||((E=v[0])==null?void 0:E.error);if(I){Z(kt,`RPC '${e}' stream ${s} received error:`,I);const O=I.status;let L=function(x){const C=Je[x];if(C!==void 0)return E_(C)}(O),S=I.message;L===void 0&&(L=K.INTERNAL,S="Unknown error status: "+O+" with message "+I.message),b=!0,T.a_(new ne(L,S)),p.close()}else Z(kt,`RPC '${e}' stream ${s} received:`,y),T.u_(y)}}),P(a,$x.STAT_EVENT,N=>{N.stat===ip.PROXY?Z(kt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===ip.NOPROXY&&Z(kt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{T.__()},0),T}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Oh(){return typeof document<"u"?document:null}/**
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
 */function Pd(t){return new xA(t,!0)}/**
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
 */class Gm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const l0="PersistentStream";class mN{constructor(e,n,r,s,i,o,a,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Gm(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===K.RESOURCE_EXHAUSTED?(Er(n.toString()),Er("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new ne(K.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Z(l0,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(Z(l0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gN extends mN{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=SA(this.serializer,e),r=function(i){if(!("targetChange"in i))return ue.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?yr(o.readTime):ue.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Zv(this.serializer),n.addTarget=function(i,o){let a;const u=o.target;if(a=up(u)?{documents:IA(i,u)}:{query:CA(i,u).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=I_(i,o.resumeToken);const d=hp(i,o.expectedCount);d!==null&&(a.expectedCount=d)}else if(o.snapshotVersion.compareTo(ue.min())>0){a.readTime=Fu(i,o.snapshotVersion.toTimestamp());const d=hp(i,o.expectedCount);d!==null&&(a.expectedCount=d)}return a}(this.serializer,e);const r=AA(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Zv(this.serializer),n.removeTarget=e,this.q_(n)}}/**
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
 */class yN{}class vN extends yN{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new ne(K.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,fp(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(K.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Ho(e,fp(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(K.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class wN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Er(n),this.aa=!1):Z("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Po="RemoteStore";class xN{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Ol(this)&&(Z(Po,"Restarting streams for network reachability change."),await async function(u){const d=me(u);d.Ea.add(4),await Dl(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Rd(d)}(this))})}),this.Ra=new wN(r,s)}}async function Rd(t){if(Ol(t))for(const e of t.da)await e(!0)}async function Dl(t){for(const e of t.da)await e(!1)}function O_(t,e){const n=me(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Xm(n)?Ym(n):Uo(n).O_()&&Qm(n,e))}function Km(t,e){const n=me(t),r=Uo(n);n.Ia.delete(e),r.O_()&&V_(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ol(n)&&n.Ra.set("Unknown"))}function Qm(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Uo(t).Y_(e)}function V_(t,e){t.Va.Ue(e),Uo(t).Z_(e)}function Ym(t){t.Va=new gA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Uo(t).start(),t.Ra.ua()}function Xm(t){return Ol(t)&&!Uo(t).x_()&&t.Ia.size>0}function Ol(t){return me(t).Ea.size===0}function F_(t){t.Va=void 0}async function _N(t){t.Ra.set("Online")}async function bN(t){t.Ia.forEach((e,n)=>{Qm(t,e)})}async function EN(t,e){F_(t),Xm(t)?(t.Ra.ha(e),Ym(t)):t.Ra.set("Unknown")}async function SN(t,e,n){if(t.Ra.set("Online"),e instanceof T_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.Va.removeTarget(a))}(t,e)}catch(r){Z(Po,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await c0(t,r)}else if(e instanceof Qc?t.Va.Ze(e):e instanceof S_?t.Va.st(e):t.Va.tt(e),!n.isEqual(ue.min()))try{const r=await D_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.Va.Tt(o);return a.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const h=i.Ia.get(d);h&&i.Ia.set(d,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,d)=>{const h=i.Ia.get(u);if(!h)return;i.Ia.set(u,h.withResumeToken(Et.EMPTY_BYTE_STRING,h.snapshotVersion)),V_(i,u);const p=new ns(h.target,u,d,h.sequenceNumber);Qm(i,p)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Z(Po,"Failed to raise snapshot:",r),await c0(t,r)}}async function c0(t,e,n){if(!zo(e))throw e;t.Ea.add(1),await Dl(t),t.Ra.set("Offline"),n||(n=()=>D_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z(Po,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Rd(t)})}async function u0(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),Z(Po,"RemoteStore received new credentials");const r=Ol(n);n.Ea.add(3),await Dl(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Rd(n)}async function TN(t,e){const n=me(t);e?(n.Ea.delete(2),await Rd(n)):e||(n.Ea.add(2),await Dl(n),n.Ra.set("Unknown"))}function Uo(t){return t.ma||(t.ma=function(n,r,s){const i=me(n);return i.sa(),new gN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:_N.bind(null,t),t_:bN.bind(null,t),r_:EN.bind(null,t),H_:SN.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Xm(t)?Ym(t):t.Ra.set("Unknown")):(await t.ma.stop(),F_(t))})),t.ma}/**
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
 */class Jm{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ci,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Jm(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function z_(t,e){if(Er("AsyncQueue",`${e}: ${t}`),zo(t))return new ne(K.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class co{static emptySet(e){return new co(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=Sa(),this.sortedSet=new Qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof co)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new co;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class d0{constructor(){this.ga=new Qe(ie.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):se(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ro{constructor(e,n,r,s,i,o,a,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ro(e,n,co.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Id(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class IN{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class CN{constructor(){this.queries=h0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=me(n),i=s.queries;s.queries=h0(),i.forEach((o,a)=>{for(const u of a.Sa)u.onError(r)})})(this,new ne(K.ABORTED,"Firestore shutting down"))}}function h0(){return new Ti(t=>h_(t),Id)}async function kN(t,e){const n=me(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new IN,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=z_(o,`Initialization of query '${Oi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Zm(n)}async function AN(t,e){const n=me(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function NN(t,e){const n=me(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Sa)a.Fa(s)&&(r=!0);o.wa=s}}r&&Zm(n)}function PN(t,e,n){const r=me(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Zm(t){t.Ca.forEach(e=>{e.next()})}var gp,f0;(f0=gp||(gp={})).Ma="default",f0.Cache="cache";class RN{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ro(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ro.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==gp.Cache}}/**
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
 */class U_{constructor(e){this.key=e}}class B_{constructor(e){this.key=e}}class jN{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=_e(),this.mutatedKeys=_e(),this.eu=f_(e),this.tu=new co(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new d0,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,p)=>{const m=s.get(h),b=Cd(this.query,p)?p:null,T=!!m&&this.mutatedKeys.has(m.key),P=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let N=!1;m&&b?m.data.isEqual(b.data)?T!==P&&(r.track({type:3,doc:b}),N=!0):this.su(m,b)||(r.track({type:2,doc:b}),N=!0,(u&&this.eu(b,u)>0||d&&this.eu(b,d)<0)&&(a=!0)):!m&&b?(r.track({type:0,doc:b}),N=!0):m&&!b&&(r.track({type:1,doc:m}),N=!0,(u||d)&&(a=!0)),N&&(b?(o=o.add(b),i=P?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,Cs:a,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((h,p)=>function(b,T){const P=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se(20277,{Rt:N})}};return P(b)-P(T)}(h.type,p.type)||this.eu(h.doc,p.doc)),this.ou(r),s=s??!1;const a=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,d=u!==this.Za;return this.Za=u,o.length!==0||d?{snapshot:new Ro(this.query,e.tu,i,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new d0,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=_e(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new B_(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new U_(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=_e();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ro.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const eg="SyncEngine";class MN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class LN{constructor(e){this.key=e,this.hu=!1}}class DN{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Ti(a=>h_(a),Id),this.Iu=new Map,this.Eu=new Set,this.du=new Qe(ie.comparator),this.Au=new Map,this.Ru=new $m,this.Vu={},this.mu=new Map,this.fu=No.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function ON(t,e,n=!0){const r=G_(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await $_(r,e,n,!0),s}async function VN(t,e){const n=G_(t);await $_(n,e,!0,!1)}async function $_(t,e,n,r){const s=await aN(t.localStore,Kn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await FN(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&O_(t.remoteStore,s),a}async function FN(t,e,n,r,s){t.pu=(p,m,b)=>async function(P,N,E,y){let v=N.view.ru(E);v.Cs&&(v=await s0(P.localStore,N.query,!1).then(({documents:S})=>N.view.ru(S,v)));const I=y&&y.targetChanges.get(N.targetId),O=y&&y.targetMismatches.get(N.targetId)!=null,L=N.view.applyChanges(v,P.isPrimaryClient,I,O);return m0(P,N.targetId,L.au),L.snapshot}(t,p,m,b);const i=await s0(t.localStore,e,!0),o=new jN(e,i.Qs),a=o.ru(i.documents),u=Ll.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=o.applyChanges(a,t.isPrimaryClient,u);m0(t,n,d.au);const h=new MN(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),d.snapshot}async function zN(t,e,n){const r=me(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Id(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await pp(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Km(r.remoteStore,s.targetId),yp(r,s.targetId)}).catch(bd)):(yp(r,s.targetId),await pp(r.localStore,s.targetId,!0))}async function UN(t,e){const n=me(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Km(n.remoteStore,r.targetId))}async function H_(t,e){const n=me(t);try{const r=await iN(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(Ae(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Ae(o.hu,14607):s.removedDocuments.size>0&&(Ae(o.hu,42227),o.hu=!1))}),await W_(n,r,e)}catch(r){await bd(r)}}function p0(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const u=me(o);u.onlineState=a;let d=!1;u.queries.forEach((h,p)=>{for(const m of p.Sa)m.va(a)&&(d=!0)}),d&&Zm(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BN(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Qe(ie.comparator);o=o.insert(i,pt.newNoDocument(i,ue.min()));const a=_e().add(i),u=new Nd(ue.min(),new Map,new Qe(ve),o,a);await H_(r,u),r.du=r.du.remove(i),r.Au.delete(e),tg(r)}else await pp(r.localStore,e,!1).then(()=>yp(r,e,n)).catch(bd)}function yp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||q_(t,r)})}function q_(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Km(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),tg(t))}function m0(t,e,n){for(const r of n)r instanceof U_?(t.Ru.addReference(r.key,e),$N(t,r)):r instanceof B_?(Z(eg,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||q_(t,r.key)):se(19791,{wu:r})}function $N(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(Z(eg,"New document in limbo: "+n),t.Eu.add(r),tg(t))}function tg(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ie(ke.fromString(e)),r=t.fu.next();t.Au.set(r,new LN(n)),t.du=t.du.insert(n,r),O_(t.remoteStore,new ns(Kn(Vm(n.path)),r,"TargetPurposeLimboResolution",Ed.ce))}}async function W_(t,e,n){const r=me(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,u)=>{o.push(r.pu(u,e,n).then(d=>{var h;if((d||n)&&r.isPrimaryClient){const p=d?!d.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(d){s.push(d);const p=qm.As(u.targetId,d);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,d){const h=me(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>W.forEach(d,m=>W.forEach(m.Es,b=>h.persistence.referenceDelegate.addReference(p,m.targetId,b)).next(()=>W.forEach(m.ds,b=>h.persistence.referenceDelegate.removeReference(p,m.targetId,b)))))}catch(p){if(!zo(p))throw p;Z(Wm,"Failed to update sequence numbers: "+p)}for(const p of d){const m=p.targetId;if(!p.fromCache){const b=h.Ms.get(m),T=b.snapshotVersion,P=b.withLastLimboFreeSnapshotVersion(T);h.Ms=h.Ms.insert(m,P)}}}(r.localStore,i))}async function HN(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){Z(eg,"User change. New user:",e.toKey());const r=await L_(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(a=>{a.forEach(u=>{u.reject(new ne(K.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await W_(n,r.Ls)}}function qN(t,e){const n=me(t),r=n.Au.get(e);if(r&&r.hu)return _e().add(r.key);{let s=_e();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const a=n.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}function G_(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=H_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BN.bind(null,e),e.Pu.H_=NN.bind(null,e.eventManager),e.Pu.yu=PN.bind(null,e.eventManager),e}class Bu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Pd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return sN(this.persistence,new tN,e.initialUser,this.serializer)}Cu(e){return new M_(Hm.mi,this.serializer)}Du(e){return new cN}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Bu.provider={build:()=>new Bu};class WN extends Bu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ae(this.persistence.referenceDelegate instanceof Uu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new zA(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?qt.withCacheSize(this.cacheSizeBytes):qt.DEFAULT;return new M_(r=>Uu.mi(r,n),this.serializer)}}class vp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>p0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=HN.bind(null,this.syncEngine),await TN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new CN}()}createDatastore(e){const n=Pd(e.databaseInfo.databaseId),r=function(i){return new pN(i)}(e.databaseInfo);return function(i,o,a,u){return new vN(i,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new xN(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>p0(this.syncEngine,n,0),function(){return a0.v()?new a0:new uN}())}createSyncEngine(e,n){return function(s,i,o,a,u,d,h){const p=new DN(s,i,o,a,u,d);return h&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=me(s);Z(Po,"RemoteStore shutting down."),i.Ea.add(5),await Dl(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}vp.provider={build:()=>new vp};/**
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
 */class GN{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Er("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class KN{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new ne(K.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(s,i){const o=me(s),a={documents:i.map(p=>zu(o.serializer,p))},u=await o.Ho("BatchGetDocuments",o.serializer.databaseId,ke.emptyPath(),a,i.length),d=new Map;u.forEach(p=>{const m=EA(o.serializer,p);d.set(m.key.toString(),m)});const h=[];return i.forEach(p=>{const m=d.get(p.toString());Ae(!!m,55234,{key:p}),h.push(m)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new zm(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const s=ie.fromPath(r);this.mutations.push(new b_(s,this.precondition(s)))}),await async function(r,s){const i=me(r),o={writes:s.map(a=>TA(i.serializer,a))};await i.Go("Commit",i.serializer.databaseId,ke.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw se(50498,{Gu:e.constructor.name});n=ue.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new ne(K.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(ue.min())?gn.exists(!1):gn.updateTime(n):gn.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(ue.min()))throw new ne(K.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return gn.updateTime(n)}return gn.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class QN{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.zu=r.maxAttempts,this.M_=new Gm(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_(async()=>{const e=new KN(this.datastore),n=this.Hu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Yu(s)}))}).catch(r=>{this.Yu(r)})})}Hu(e){try{const n=this.updateFunction(e);return!jl(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Yu(e){this.zu>0&&this.Zu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ju(),Promise.resolve()))):this.deferred.reject(e)}Zu(e){if((e==null?void 0:e.name)==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!fA(n)}return!1}}/**
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
 */const Is="FirestoreClient";class YN{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=At.UNAUTHENTICATED,this.clientId=Rm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Z(Is,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z(Is,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ci;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=z_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vh(t,e){t.asyncQueue.verifyOperationInProgress(),Z(Is,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await L_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function g0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await XN(t);Z(Is,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>u0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>u0(e.remoteStore,s)),t._onlineComponents=e}async function XN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(Is,"Using user provided OfflineComponentProvider");try{await Vh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===K.FAILED_PRECONDITION||s.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Io("Error using user provided cache. Falling back to memory cache: "+n),await Vh(t,new Bu)}}else Z(Is,"Using default OfflineComponentProvider"),await Vh(t,new WN(void 0));return t._offlineComponents}async function K_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(Is,"Using user provided OnlineComponentProvider"),await g0(t,t._uninitializedComponentsProvider._online)):(Z(Is,"Using default OnlineComponentProvider"),await g0(t,new vp))),t._onlineComponents}function JN(t){return K_(t).then(e=>e.datastore)}async function y0(t){const e=await K_(t),n=e.eventManager;return n.onListen=ON.bind(null,e.syncEngine),n.onUnlisten=zN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=VN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=UN.bind(null,e.syncEngine),n}/**
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
 */function Q_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const v0=new Map;/**
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
 */const Y_="firestore.googleapis.com",w0=!0;class x0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ne(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Y_,this.ssl=w0}else this.host=e.host,this.ssl=e.ssl??w0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=j_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<VA)throw new ne(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ek("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Q_(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ne(K.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ne(K.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ne(K.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jd{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new x0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new x0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fk;switch(r.type){case"firstParty":return new yk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=v0.get(n);r&&(Z("ComponentProvider","Removing Datastore"),v0.delete(n),r.terminate())}(this),Promise.resolve()}}function ZN(t,e,n,r={}){var d;t=Fa(t,jd);const s=Oo(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(jx(`https://${a}`),Mx("Firestore",!0)),i.host!==Y_&&i.host!==a&&Io("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:a,ssl:s,emulatorOptions:r};if(!yi(u,o)&&(t._setSettings(u),r.mockUserToken)){let h,p;if(typeof r.mockUserToken=="string")h=r.mockUserToken,p=At.MOCK_USER;else{h=FI(r.mockUserToken,(d=t._app)==null?void 0:d.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new ne(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new At(m)}t._authCredentials=new pk(new Gx(h,p))}}/**
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
 */class Md{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Md(this.firestore,e,this._query)}}class ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Rl(n,ot._jsonSchema))return new ot(e,r||null,new ie(ke.fromString(n.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:et("string",ot._jsonSchemaVersion),referencePath:et("string")};class gs extends Md{constructor(e,n,r){super(e,n,Vm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new ie(e))}withConverter(e){return new gs(this.firestore,e,this._path)}}function ng(t,e,...n){if(t=tt(t),Kx("collection","path",e),t instanceof jd){const r=ke.fromString(e,...n);return Pv(r),new gs(t,null,r)}{if(!(t instanceof ot||t instanceof gs))throw new ne(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return Pv(r),new gs(t.firestore,null,r)}}function ui(t,e,...n){if(t=tt(t),arguments.length===1&&(e=Rm.newId()),Kx("doc","path",e),t instanceof jd){const r=ke.fromString(e,...n);return Nv(r),new ot(t,null,new ie(r))}{if(!(t instanceof ot||t instanceof gs))throw new ne(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return Nv(r),new ot(t.firestore,t instanceof gs?t.converter:null,new ie(r))}}/**
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
 */const _0="AsyncQueue";class b0{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Gm(this,"async_queue_retry"),this._c=()=>{const r=Oh();r&&Z(_0,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Oh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Oh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new ci;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!zo(e))throw e;Z(_0,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Er("INTERNAL UNHANDLED ERROR: ",E0(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Jm.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&se(47125,{Pc:E0(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function E0(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function S0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class $u extends jd{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new b0,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new b0(e),this._firestoreClient=void 0,await e}}}function eP(t,e){const n=typeof t=="object"?t:Nm(),r=typeof t=="string"?t:e||ju,s=Am(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=OI("firestore");i&&ZN(s,...i)}return s}function X_(t){if(t._terminated)throw new ne(K.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||tP(t),t._firestoreClient}function tP(t){var r,s,i;const e=t._freezeSettings(),n=function(a,u,d,h){return new Lk(a,u,d,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Q_(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new YN(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class on{constructor(e){this._byteString=e}static fromBase64String(e){try{return new on(Et.fromBase64String(e))}catch(n){throw new ne(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new on(Et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:on._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Rl(e,on._jsonSchema))return on.fromBase64String(e.bytes)}}on._jsonSchemaVersion="firestore/bytes/1.0",on._jsonSchema={type:et("string",on._jsonSchemaVersion),bytes:et("string")};/**
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
 */class Ld{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class rg{constructor(e){this._methodName=e}}/**
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
 */class Qn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Qn._jsonSchemaVersion}}static fromJSON(e){if(Rl(e,Qn._jsonSchema))return new Qn(e.latitude,e.longitude)}}Qn._jsonSchemaVersion="firestore/geoPoint/1.0",Qn._jsonSchema={type:et("string",Qn._jsonSchemaVersion),latitude:et("number"),longitude:et("number")};/**
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
 */class Yn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Yn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Rl(e,Yn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Yn(e.vectorValues);throw new ne(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Yn._jsonSchemaVersion="firestore/vectorValue/1.0",Yn._jsonSchema={type:et("string",Yn._jsonSchemaVersion),vectorValues:et("object")};/**
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
 */const nP=/^__.*__$/;class rP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ii(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ml(e,this.data,n,this.fieldTransforms)}}class J_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ii(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Z_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se(40011,{Ac:t})}}class sg{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new sg({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Hu(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Z_(this.Ac)&&nP.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class sP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Pd(e)}Cc(e,n,r,s=!1){return new sg({Ac:e,methodName:n,Dc:r,path:Pt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function iP(t){const e=t._freezeSettings(),n=Pd(t._databaseId);return new sP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function oP(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);ig("Data must be an object, but it was:",o,r);const a=eb(r,o);let u,d;if(i.merge)u=new vn(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const p of i.mergeFields){const m=wp(e,p,n);if(!o.contains(m))throw new ne(K.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);nb(h,m)||h.push(m)}u=new vn(h),d=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,d=o.fieldTransforms;return new rP(new Kt(a),u,d)}class Dd extends rg{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Dd}}function aP(t,e,n,r){const s=t.Cc(1,e,n);ig("Data must be an object, but it was:",s,r);const i=[],o=Kt.empty();Si(r,(u,d)=>{const h=og(e,u,n);d=tt(d);const p=s.yc(h);if(d instanceof Dd)i.push(h);else{const m=Od(d,p);m!=null&&(i.push(h),o.set(h,m))}});const a=new vn(i);return new J_(o,a,s.fieldTransforms)}function lP(t,e,n,r,s,i){const o=t.Cc(1,e,n),a=[wp(e,r,n)],u=[s];if(i.length%2!=0)throw new ne(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)a.push(wp(e,i[m])),u.push(i[m+1]);const d=[],h=Kt.empty();for(let m=a.length-1;m>=0;--m)if(!nb(d,a[m])){const b=a[m];let T=u[m];T=tt(T);const P=o.yc(b);if(T instanceof Dd)d.push(b);else{const N=Od(T,P);N!=null&&(d.push(b),h.set(b,N))}}const p=new vn(d);return new J_(h,p,o.fieldTransforms)}function Od(t,e){if(tb(t=tt(t)))return ig("Unsupported field value:",e,t),eb(t,e);if(t instanceof rg)return function(r,s){if(!Z_(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let u=Od(a,s.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Oe.fromDate(r);return{timestampValue:Fu(s.serializer,i)}}if(r instanceof Oe){const i=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fu(s.serializer,i)}}if(r instanceof Qn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof on)return{bytesValue:I_(s.serializer,r._byteString)};if(r instanceof ot){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Bm(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Yn)return function(o,a){return{mapValue:{fields:{[r_]:{stringValue:i_},[Mu]:{arrayValue:{values:o.toArray().map(d=>{if(typeof d!="number")throw a.Sc("VectorValues must only contain numeric values.");return Fm(a.serializer,d)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${jm(r)}`)}(t,e)}function eb(t,e){const n={};return Xx(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Si(t,(r,s)=>{const i=Od(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function tb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof Qn||t instanceof on||t instanceof ot||t instanceof rg||t instanceof Yn)}function ig(t,e,n){if(!tb(n)||!Qx(n)){const r=jm(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function wp(t,e,n){if((e=tt(e))instanceof Ld)return e._internalPath;if(typeof e=="string")return og(t,e);throw Hu("Field path arguments must be of type string or ",t,!1,void 0,n)}const cP=new RegExp("[~\\*/\\[\\]]");function og(t,e,n){if(e.search(cP)>=0)throw Hu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ld(...e.split("."))._internalPath}catch{throw Hu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new ne(K.INVALID_ARGUMENT,a+t+u)}function nb(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class qu{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rb("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class uP extends qu{data(){return super.data()}}function rb(t,e){return typeof e=="string"?og(t,e):e instanceof Ld?e._internalPath:e._delegate._internalPath}/**
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
 */function dP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sb{convertValue(e,n="none"){switch(Ss(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw se(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Si(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Mu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Ge(o.doubleValue));return new Yn(n)}convertGeoPoint(e){return new Qn(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Sd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(pl(e));default:return null}}convertTimestamp(e){const n=bs(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ke.fromString(e);Ae(R_(r),9688,{name:e});const s=new ml(r.get(1),r.get(3)),i=new ie(r.popFirst(5));return s.isEqual(n)||Er(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function hP(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class fP extends sb{constructor(e){super(),this.firestore=e}convertBytes(e){return new on(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}class Zi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ys extends qu{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Yc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(rb("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ys._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ys._jsonSchemaVersion="firestore/documentSnapshot/1.0",ys._jsonSchema={type:et("string",ys._jsonSchemaVersion),bundleSource:et("string","DocumentSnapshot"),bundleName:et("string"),bundle:et("string")};class Yc extends ys{data(e={}){return super.data(e)}}class uo{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Zi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Yc(this._firestore,this._userDataWriter,r.key,r,new Zi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const u=new Yc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Zi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const u=new Yc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Zi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,h=-1;return a.type!==0&&(d=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:pP(a.type),doc:u,oldIndex:d,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=uo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Rm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function pP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se(61501,{type:t})}}uo._jsonSchemaVersion="firestore/querySnapshot/1.0",uo._jsonSchema={type:et("string",uo._jsonSchemaVersion),bundleSource:et("string","QuerySnapshot"),bundleName:et("string"),bundle:et("string")};class ag extends sb{constructor(e){super(),this.firestore=e}convertBytes(e){return new on(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function Wu(t,...e){var u,d,h;t=tt(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||S0(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(S0(e[r])){const p=e[r];e[r]=(u=p.next)==null?void 0:u.bind(p),e[r+1]=(d=p.error)==null?void 0:d.bind(p),e[r+2]=(h=p.complete)==null?void 0:h.bind(p)}let i,o,a;if(t instanceof ot)o=Fa(t.firestore,$u),a=Vm(t._key.path),i={next:p=>{e[r]&&e[r](mP(o,t,p))},error:e[r+1],complete:e[r+2]};else{const p=Fa(t,Md);o=Fa(p.firestore,$u),a=p._query;const m=new ag(o);i={next:b=>{e[r]&&e[r](new uo(o,m,p,b))},error:e[r+1],complete:e[r+2]},dP(t._query)}return function(m,b,T,P){const N=new GN(P),E=new RN(b,N,T);return m.asyncQueue.enqueueAndForget(async()=>kN(await y0(m),E)),()=>{N.Nu(),m.asyncQueue.enqueueAndForget(async()=>AN(await y0(m),E))}}(X_(o),a,s,i)}function mP(t,e,n){const r=n.docs.get(e._key),s=new ag(t);return new ys(t,s,e._key,r,new Zi(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const gP={maxAttempts:5};function Ia(t,e){if((t=tt(t)).firestore!==e)throw new ne(K.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class yP{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=iP(e)}get(e){const n=Ia(e,this._firestore),r=new fP(this._firestore);return this._transaction.lookup([n._key]).then(s=>{if(!s||s.length!==1)return se(24041);const i=s[0];if(i.isFoundDocument())return new qu(this._firestore,r,i.key,i,n.converter);if(i.isNoDocument())return new qu(this._firestore,r,n._key,null,n.converter);throw se(18433,{doc:i})})}set(e,n,r){const s=Ia(e,this._firestore),i=hP(s.converter,n,r),o=oP(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,n,r,...s){const i=Ia(e,this._firestore);let o;return o=typeof(n=tt(n))=="string"||n instanceof Ld?lP(this._dataReader,"Transaction.update",i._key,n,r,s):aP(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(e){const n=Ia(e,this._firestore);return this._transaction.delete(n._key),this}}/**
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
 */class vP extends yP{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Ia(e,this._firestore),r=new ag(this._firestore);return super.get(e).then(s=>new ys(this._firestore,r,n._key,s._document,new Zi(!1,!1),n.converter))}}function dr(t,e,n){t=Fa(t,$u);const r={...gP,...n};return function(i){if(i.maxAttempts<1)throw new ne(K.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,o,a){const u=new ci;return i.asyncQueue.enqueueAndForget(async()=>{const d=await JN(i);new QN(i.asyncQueue,d,a,o,u).ju()}),u.promise}(X_(t),s=>e(new vP(t,s)),r)}(function(e,n=!0){(function(s){Fo=s})(Vo),To(new vi("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new $u(new mk(r.getProvider("auth-internal")),new vk(o,r.getProvider("app-check-internal")),function(d,h){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new ne(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ml(d.options.projectId,h)}(o,s),o);return i={useFetchStreams:n,...i},a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),ps(Iv,Cv,e),ps(Iv,Cv,"esm2020")})();var wP="firebase",xP="12.6.0";/**
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
 */ps(wP,xP,"app");function ib(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _P=ib,ob=new Nl("auth","Firebase",ib());/**
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
 */const Gu=new Cm("@firebase/auth");function bP(t,...e){Gu.logLevel<=pe.WARN&&Gu.warn(`Auth (${Vo}): ${t}`,...e)}function Xc(t,...e){Gu.logLevel<=pe.ERROR&&Gu.error(`Auth (${Vo}): ${t}`,...e)}/**
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
 */function jn(t,...e){throw lg(t,...e)}function Xn(t,...e){return lg(t,...e)}function ab(t,e,n){const r={..._P(),[e]:n};return new Nl("auth","Firebase",r).create(e,{appName:t.name})}function vs(t){return ab(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ob.create(t,...e)}function ce(t,e,...n){if(!t)throw lg(e,...n)}function pr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xc(e),new Error(e)}function Sr(t,e){t||pr(e)}/**
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
 */function xp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function EP(){return T0()==="http:"||T0()==="https:"}function T0(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function SP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(EP()||qI()||"connection"in navigator)?navigator.onLine:!0}function TP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Vl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sr(n>e,"Short delay should be less than long delay!"),this.isMobile=BI()||WI()}get(){return SP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function cg(t,e){Sr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class lb{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const IP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const CP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],kP=new Vl(3e4,6e4);function Ci(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ns(t,e,n,r,s={}){return cb(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Pl({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d={method:e,headers:u,...i};return HI()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&Oo(t.emulatorConfig.host)&&(d.credentials="include"),lb.fetch()(await ub(t,t.config.apiHost,n,a),d)})}async function cb(t,e,n){t._canInitEmulator=!1;const r={...IP,...e};try{const s=new NP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Tc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[u,d]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tc(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Tc(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Tc(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ab(t,h,d);jn(t,h)}}catch(s){if(s instanceof Ir)throw s;jn(t,"network-request-failed",{message:String(s)})}}async function Vd(t,e,n,r,s={}){const i=await Ns(t,e,n,r,s);return"mfaPendingCredential"in i&&jn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function ub(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?cg(t.config,s):`${t.config.apiScheme}://${s}`;return CP.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function AP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class NP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xn(this.auth,"network-request-failed")),kP.get())})}}function Tc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Xn(t,e,r);return s.customData._tokenResponse=n,s}function I0(t){return t!==void 0&&t.enterprise!==void 0}class PP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return AP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function RP(t,e){return Ns(t,"GET","/v2/recaptchaConfig",Ci(t,e))}/**
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
 */async function jP(t,e){return Ns(t,"POST","/v1/accounts:delete",e)}async function Ku(t,e){return Ns(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function qa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function MP(t,e=!1){const n=tt(t),r=await n.getIdToken(e),s=ug(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:qa(Fh(s.auth_time)),issuedAtTime:qa(Fh(s.iat)),expirationTime:qa(Fh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Fh(t){return Number(t)*1e3}function ug(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Xc("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ax(n);return s?JSON.parse(s):(Xc("Failed to decode base64 JWT payload"),null)}catch(s){return Xc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function C0(t){const e=ug(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function wl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ir&&LP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class DP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _p{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qa(this.lastLoginAt),this.creationTime=qa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qu(t){var p;const e=t.auth,n=await t.getIdToken(),r=await wl(t,Ku(e,{idToken:n}));ce(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?db(s.providerUserInfo):[],o=VP(t.providerData,i),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),d=a?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new _p(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function OP(t){const e=tt(t);await Qu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function db(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function FP(t,e){const n=await cb(t,{},async()=>{const r=Pl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await ub(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:a,body:r};return t.emulatorConfig&&Oo(t.emulatorConfig.host)&&(u.credentials="include"),lb.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zP(t,e){return Ns(t,"POST","/v2/accounts:revokeToken",Ci(t,e))}/**
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
 */class ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):C0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=C0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await FP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ho;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ho,this.toJSON())}_performRefresh(){return pr("not implemented")}}/**
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
 */function Fr(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class An{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new DP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _p(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await wl(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return MP(this,e)}reload(){return OP(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new An({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Cn(this.auth.app))return Promise.reject(vs(this.auth));const e=await this.getIdToken();return await wl(this,jP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,u=n._redirectEventId??void 0,d=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:b,providerData:T,stsTokenManager:P}=n;ce(p&&P,e,"internal-error");const N=ho.fromJSON(this.name,P);ce(typeof p=="string",e,"internal-error"),Fr(r,e.name),Fr(s,e.name),ce(typeof m=="boolean",e,"internal-error"),ce(typeof b=="boolean",e,"internal-error"),Fr(i,e.name),Fr(o,e.name),Fr(a,e.name),Fr(u,e.name),Fr(d,e.name),Fr(h,e.name);const E=new An({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:b,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:N,createdAt:d,lastLoginAt:h});return T&&Array.isArray(T)&&(E.providerData=T.map(y=>({...y}))),u&&(E._redirectEventId=u),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new ho;s.updateFromServerResponse(n);const i=new An({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Qu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?db(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new ho;a.updateFromIdToken(r);const u=new An({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new _p(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const k0=new Map;function mr(t){Sr(t instanceof Function,"Expected a class definition");let e=k0.get(t);return e?(Sr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,k0.set(t,e),e)}/**
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
 */class hb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hb.type="NONE";const A0=hb;/**
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
 */function Jc(t,e,n){return`firebase:${t}:${e}:${n}`}class fo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Jc(this.userKey,s.apiKey,i),this.fullPersistenceKey=Jc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ku(this.auth,{idToken:e}).catch(()=>{});return n?An._fromGetAccountInfoResponse(this.auth,n,e):null}return An._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fo(mr(A0),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||mr(A0);const o=Jc(r,e.config.apiKey,e.name);let a=null;for(const d of n)try{const h=await d._get(o);if(h){let p;if(typeof h=="string"){const m=await Ku(e,{idToken:h}).catch(()=>{});if(!m)break;p=await An._fromGetAccountInfoResponse(e,m,h)}else p=An._fromJSON(e,h);d!==i&&(a=p),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new fo(i,e,r):(i=u[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new fo(i,e,r))}}/**
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
 */function N0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vb(e))return"Blackberry";if(wb(e))return"Webos";if(pb(e))return"Safari";if((e.includes("chrome/")||mb(e))&&!e.includes("edge/"))return"Chrome";if(yb(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function fb(t=jt()){return/firefox\//i.test(t)}function pb(t=jt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mb(t=jt()){return/crios\//i.test(t)}function gb(t=jt()){return/iemobile/i.test(t)}function yb(t=jt()){return/android/i.test(t)}function vb(t=jt()){return/blackberry/i.test(t)}function wb(t=jt()){return/webos/i.test(t)}function dg(t=jt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function UP(t=jt()){var e;return dg(t)&&!!((e=window.navigator)!=null&&e.standalone)}function BP(){return GI()&&document.documentMode===10}function xb(t=jt()){return dg(t)||yb(t)||wb(t)||vb(t)||/windows phone/i.test(t)||gb(t)}/**
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
 */function _b(t,e=[]){let n;switch(t){case"Browser":n=N0(jt());break;case"Worker":n=`${N0(jt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vo}/${r}`}/**
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
 */class $P{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const u=e(i);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function HP(t,e={}){return Ns(t,"GET","/v2/passwordPolicy",Ci(t,e))}/**
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
 */const qP=6;class WP{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??qP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class GP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new P0(this),this.idTokenSubscription=new P0(this),this.beforeStateQueue=new $P(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ob,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await fo.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ku(this,{idToken:e}),r=await An._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Cn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Cn(this.app))return Promise.reject(vs(this));const n=e?tt(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Cn(this.app)?Promise.reject(vs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Cn(this.app)?Promise.reject(vs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await HP(this),n=new WP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Nl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await zP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mr(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await fo.create(this,[mr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_b(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&bP(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Bo(t){return tt(t)}class P0{constructor(e){this.auth=e,this.observer=null,this.addObserver=tC(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Fd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KP(t){Fd=t}function bb(t){return Fd.loadJS(t)}function QP(){return Fd.recaptchaEnterpriseScript}function YP(){return Fd.gapiScript}function XP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class JP{constructor(){this.enterprise=new ZP}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ZP{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const eR="recaptcha-enterprise",Eb="NO_RECAPTCHA";class tR{constructor(e){this.type=eR,this.auth=Bo(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{RP(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const d=new PP(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(u=>{a(u)})})}function s(i,o,a){const u=window.grecaptcha;I0(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(Eb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new JP().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&I0(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=QP();u.length!==0&&(u+=a),bb(u).then(()=>{s(a,i,o)}).catch(d=>{o(d)})}}).catch(a=>{o(a)})})}}async function pa(t,e,n,r=!1,s=!1){const i=new tR(t);let o;if(s)o=Eb;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const u=a.phoneEnrollmentInfo.phoneNumber,d=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const u=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function R0(t,e,n,r,s){var i,o;if(s==="EMAIL_PASSWORD_PROVIDER")if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await pa(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await pa(t,e,n,n==="getOobCode");return r(t,u)}else return Promise.reject(a)});else if(s==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await pa(t,e,n);return r(t,a).catch(async u=>{var d;if(((d=t._getRecaptchaConfig())==null?void 0:d.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const h=await pa(t,e,n,!1,!0);return r(t,h)}return Promise.reject(u)})}else{const a=await pa(t,e,n,!1,!0);return r(t,a)}else return Promise.reject(s+" provider is not supported.")}/**
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
 */function nR(t,e){const n=Am(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(yi(i,e??{}))return s;jn(s,"already-initialized")}return n.initialize({options:e})}function rR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sR(t,e,n){const r=Bo(t);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Sb(e),{host:o,port:a}=iR(e),u=a===null?"":`:${a}`,d={url:`${i}//${o}${u}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(yi(d,r.config.emulator)&&yi(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Oo(o)?(jx(`${i}//${o}${u}`),Mx("Auth",!0)):s||oR()}function Sb(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function iR(t){const e=Sb(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:j0(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:j0(o)}}}function j0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class hg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pr("not implemented")}_getIdTokenResponse(e){return pr("not implemented")}_linkToIdToken(e,n){return pr("not implemented")}_getReauthenticationResolver(e){return pr("not implemented")}}async function aR(t,e){return Ns(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function lR(t,e){return Vd(t,"POST","/v1/accounts:signInWithPassword",Ci(t,e))}/**
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
 */async function cR(t,e){return Vd(t,"POST","/v1/accounts:signInWithEmailLink",Ci(t,e))}async function uR(t,e){return Vd(t,"POST","/v1/accounts:signInWithEmailLink",Ci(t,e))}/**
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
 */class xl extends hg{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new xl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return R0(e,n,"signInWithPassword",lR,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return cR(e,{email:this._email,oobCode:this._password});default:jn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return R0(e,r,"signUpPassword",aR,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return uR(e,{idToken:n,email:this._email,oobCode:this._password});default:jn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function po(t,e){return Vd(t,"POST","/v1/accounts:signInWithIdp",Ci(t,e))}/**
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
 */const dR="http://localhost";class xi extends hg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new xi(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return po(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,po(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,po(e,n)}buildRequest(){const e={requestUri:dR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pl(n)}return e}}/**
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
 */function hR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fR(t){const e=_a(ba(t)).link,n=e?_a(ba(e)).deep_link_id:null,r=_a(ba(t)).deep_link_id;return(r?_a(ba(r)).link:null)||r||n||e||t}class fg{constructor(e){const n=_a(ba(e)),r=n.apiKey??null,s=n.oobCode??null,i=hR(n.mode??null);ce(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=fR(e);try{return new fg(n)}catch{return null}}}/**
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
 */class $o{constructor(){this.providerId=$o.PROVIDER_ID}static credential(e,n){return xl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=fg.parseLink(n);return ce(r,"argument-error"),xl._fromEmailAndCode(e,r.code,r.tenantId)}}$o.PROVIDER_ID="password";$o.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$o.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Tb{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fl extends Tb{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kr extends Fl{constructor(){super("facebook.com")}static credential(e){return xi._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kr.credential(e.oauthAccessToken)}catch{return null}}}Kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kr.PROVIDER_ID="facebook.com";/**
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
 */class Qr extends Fl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xi._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qr.credential(n,r)}catch{return null}}}Qr.GOOGLE_SIGN_IN_METHOD="google.com";Qr.PROVIDER_ID="google.com";/**
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
 */class Yr extends Fl{constructor(){super("github.com")}static credential(e){return xi._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yr.credential(e.oauthAccessToken)}catch{return null}}}Yr.GITHUB_SIGN_IN_METHOD="github.com";Yr.PROVIDER_ID="github.com";/**
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
 */class Xr extends Fl{constructor(){super("twitter.com")}static credential(e,n){return xi._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xr.credential(n,r)}catch{return null}}}Xr.TWITTER_SIGN_IN_METHOD="twitter.com";Xr.PROVIDER_ID="twitter.com";/**
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
 */class jo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await An._fromIdTokenResponse(e,r,s),o=M0(r);return new jo({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=M0(r);return new jo({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function M0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Yu extends Ir{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Yu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Yu(e,n,r,s)}}function Ib(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Yu._fromErrorAndOperation(t,i,e,r):i})}async function pR(t,e,n=!1){const r=await wl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jo._forOperation(t,"link",r)}/**
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
 */async function mR(t,e,n=!1){const{auth:r}=t;if(Cn(r.app))return Promise.reject(vs(r));const s="reauthenticate";try{const i=await wl(t,Ib(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=ug(i.idToken);ce(o,r,"internal-error");const{sub:a}=o;return ce(t.uid===a,r,"user-mismatch"),jo._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&jn(r,"user-mismatch"),i}}/**
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
 */async function Cb(t,e,n=!1){if(Cn(t.app))return Promise.reject(vs(t));const r="signIn",s=await Ib(t,r,e),i=await jo._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function gR(t,e){return Cb(Bo(t),e)}/**
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
 */async function yR(t){const e=Bo(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function vR(t,e,n){return Cn(t.app)?Promise.reject(vs(t)):gR(tt(t),$o.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&yR(t),r})}/**
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
 */function wR(t,e){return tt(t).setPersistence(e)}function xR(t,e,n,r){return tt(t).onIdTokenChanged(e,n,r)}function _R(t,e,n){return tt(t).beforeAuthStateChanged(e,n)}function bR(t,e,n,r){return tt(t).onAuthStateChanged(e,n,r)}function Ca(t){return tt(t).signOut()}const Xu="__sak";/**
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
 */class kb{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xu,"1"),this.storage.removeItem(Xu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ER=1e3,SR=10;class Ab extends kb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);BP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,SR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ER)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ab.type="LOCAL";const Nb=Ab;/**
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
 */class Pb extends kb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Pb.type="SESSION";const pg=Pb;/**
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
 */function TR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class zd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new zd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async d=>d(n.origin,i)),u=await TR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zd.receivers=[];/**
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
 */function mg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class IR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,u)=>{const d=mg("",20);s.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===d)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(h),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Jn(){return window}function CR(t){Jn().location.href=t}/**
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
 */function Rb(){return typeof Jn().WorkerGlobalScope<"u"&&typeof Jn().importScripts=="function"}async function kR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function NR(){return Rb()?self:null}/**
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
 */const jb="firebaseLocalStorageDb",PR=1,Ju="firebaseLocalStorage",Mb="fbase_key";class zl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ud(t,e){return t.transaction([Ju],e?"readwrite":"readonly").objectStore(Ju)}function RR(){const t=indexedDB.deleteDatabase(jb);return new zl(t).toPromise()}function bp(){const t=indexedDB.open(jb,PR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ju,{keyPath:Mb})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ju)?e(r):(r.close(),await RR(),e(await bp()))})})}async function L0(t,e,n){const r=Ud(t,!0).put({[Mb]:e,value:n});return new zl(r).toPromise()}async function jR(t,e){const n=Ud(t,!1).get(e),r=await new zl(n).toPromise();return r===void 0?null:r.value}function D0(t,e){const n=Ud(t,!0).delete(e);return new zl(n).toPromise()}const MR=800,LR=3;class Lb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>LR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zd._getInstance(NR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await kR(),!this.activeServiceWorker)return;this.sender=new IR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||AR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bp();return await L0(e,Xu,"1"),await D0(e,Xu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>L0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>jR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>D0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ud(s,!1).getAll();return new zl(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lb.type="LOCAL";const DR=Lb;new Vl(3e4,6e4);/**
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
 */function OR(t,e){return e?mr(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class gg extends hg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return po(e,this._buildIdpRequest())}_linkToIdToken(e,n){return po(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return po(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function VR(t){return Cb(t.auth,new gg(t),t.bypassAuthState)}function FR(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),mR(n,new gg(t),t.bypassAuthState)}async function zR(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),pR(n,new gg(t),t.bypassAuthState)}/**
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
 */class Db{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VR;case"linkViaPopup":case"linkViaRedirect":return zR;case"reauthViaPopup":case"reauthViaRedirect":return FR;default:jn(this.auth,"internal-error")}}resolve(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const UR=new Vl(2e3,1e4);class eo extends Db{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,eo.currentPopupAction&&eo.currentPopupAction.cancel(),eo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Sr(this.filter.length===1,"Popup operations only handle one event");const e=mg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,eo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,UR.get())};e()}}eo.currentPopupAction=null;/**
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
 */const BR="pendingRedirect",Zc=new Map;class $R extends Db{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Zc.get(this.auth._key());if(!e){try{const r=await HR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Zc.set(this.auth._key(),e)}return this.bypassAuthState||Zc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HR(t,e){const n=GR(e),r=WR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function qR(t,e){Zc.set(t._key(),e)}function WR(t){return mr(t._redirectPersistence)}function GR(t){return Jc(BR,t.config.apiKey,t.name)}async function KR(t,e,n=!1){if(Cn(t.app))return Promise.reject(vs(t));const r=Bo(t),s=OR(r,e),o=await new $R(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const QR=10*60*1e3;class YR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ob(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QR&&this.cachedEventUids.clear(),this.cachedEventUids.has(O0(e))}saveEventToCache(e){this.cachedEventUids.add(O0(e)),this.lastProcessedEventTime=Date.now()}}function O0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ob({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ob(t);default:return!1}}/**
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
 */async function JR(t,e={}){return Ns(t,"GET","/v1/projects",e)}/**
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
 */const ZR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ej=/^https?/;async function tj(t){if(t.config.emulator)return;const{authorizedDomains:e}=await JR(t);for(const n of e)try{if(nj(n))return}catch{}jn(t,"unauthorized-domain")}function nj(t){const e=xp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ej.test(n))return!1;if(ZR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const rj=new Vl(3e4,6e4);function V0(){const t=Jn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sj(t){return new Promise((e,n)=>{var s,i,o;function r(){V0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{V0(),n(Xn(t,"network-request-failed"))},timeout:rj.get()})}if((i=(s=Jn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Jn().gapi)!=null&&o.load)r();else{const a=XP("iframefcb");return Jn()[a]=()=>{gapi.load?r():n(Xn(t,"network-request-failed"))},bb(`${YP()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw eu=null,e})}let eu=null;function ij(t){return eu=eu||sj(t),eu}/**
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
 */const oj=new Vl(5e3,15e3),aj="__/auth/iframe",lj="emulator/auth/iframe",cj={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uj=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dj(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?cg(e,lj):`https://${t.config.authDomain}/${aj}`,r={apiKey:e.apiKey,appName:t.name,v:Vo},s=uj.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Pl(r).slice(1)}`}async function hj(t){const e=await ij(t),n=Jn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:dj(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cj,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Xn(t,"network-request-failed"),a=Jn().setTimeout(()=>{i(o)},oj.get());function u(){Jn().clearTimeout(a),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const fj={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pj=500,mj=600,gj="_blank",yj="http://localhost";class F0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vj(t,e,n,r=pj,s=mj){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u={...fj,width:r.toString(),height:s.toString(),top:i,left:o},d=jt().toLowerCase();n&&(a=mb(d)?gj:n),fb(d)&&(e=e||yj,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[b,T])=>`${m}${b}=${T},`,"");if(UP(d)&&a!=="_self")return wj(e||"",a),new F0(null);const p=window.open(e||"",a,h);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new F0(p)}function wj(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const xj="__/auth/handler",_j="emulator/auth/handler",bj=encodeURIComponent("fac");async function z0(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vo,eventId:s};if(e instanceof Tb){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",eC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries(i||{}))o[h]=p}if(e instanceof Fl){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),d=u?`#${bj}=${encodeURIComponent(u)}`:"";return`${Ej(t)}?${Pl(a).slice(1)}${d}`}function Ej({config:t}){return t.emulator?cg(t,_j):`https://${t.authDomain}/${xj}`}/**
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
 */const zh="webStorageSupport";class Sj{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pg,this._completeRedirectFn=KR,this._overrideRedirectResult=qR}async _openPopup(e,n,r,s){var o;Sr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await z0(e,n,r,xp(),s);return vj(e,i,mg())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await z0(e,n,r,xp(),s);return CR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Sr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await hj(e),r=new YR(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zh,{type:zh},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[zh];i!==void 0&&n(!!i),jn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tj(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xb()||pb()||dg()}}const Tj=Sj;var U0="@firebase/auth",B0="1.11.1";/**
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
 */class Ij{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Cj(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kj(t){To(new vi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_b(t)},d=new GP(r,s,i,u);return rR(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),To(new vi("auth-internal",e=>{const n=Bo(e.getProvider("auth").getImmediate());return(r=>new Ij(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ps(U0,B0,Cj(t)),ps(U0,B0,"esm2020")}/**
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
 */const Aj=5*60,Nj=Rx("authIdTokenMaxAge")||Aj;let $0=null;const Pj=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Nj)return;const s=n==null?void 0:n.token;$0!==s&&($0=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Rj(t=Nm()){const e=Am(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nR(t,{popupRedirectResolver:Tj,persistence:[DR,Nb,pg]}),r=Rx("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Pj(i.toString());_R(n,o,()=>o(n.currentUser)),xR(n,a=>o(a))}}const s=Nx("auth");return s&&sR(n,`http://${s}`),n}function jj(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}KP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Xn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",jj().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kj("Browser");const Mj={apiKey:"AIzaSyAWV-Lv7ZYWCUhSN_xYQV71y4k6TF7oI_0",authDomain:"lumorabase.firebaseapp.com",projectId:"lumorabase",storageBucket:"lumorabase.appspot.com",messagingSenderId:"487602333259",appId:"1:487602333259:web:0069e6532efd3e7bd79ae",measurementId:"G-0TXG6KPPN5"},Vb=nk().length>0?Nm():Ox(Mj),wt=eP(Vb),kn=Rj(Vb),yg=ng(wt,"lumora_gallery");function Lj(t,e){var i;const n=new Map;t.forEach((o,a)=>{const u="original-"+(a+1);n.set(u,{...o,id:u,rev:0})});for(const o of[...e].sort((a,u)=>a.id.localeCompare(u.id))){const a=n.get(o.id),u=o.before||(a==null?void 0:a.before),d=o.after||(a==null?void 0:a.after);u&&d&&n.set(o.id,{id:o.id,before:u,after:d,rev:o.rev})}const r=(i=e.find(o=>o.id==="display-order"))==null?void 0:i.ids,s=[];for(const o of Array.isArray(r)?r:[])n.has(o)&&(s.push(n.get(o)),n.delete(o));return[...s,...n.values()]}function Dj(t){var a;const[e,n]=j.useState([]),[r,s]=j.useState("loading"),[i,o]=j.useState(0);return j.useEffect(()=>(s("loading"),Wu(yg,{includeMetadataChanges:!0},u=>{n(u.docs.map(d=>({...d.data(),id:d.id}))),s(u.metadata.fromCache?"offline":"ready")},u=>s(u.code==="permission-denied"?"denied":"error"))),[i]),{pairs:Lj(t,e),orderVersion:((a=e.find(u=>u.id==="display-order"))==null?void 0:a.rev)||0,status:r,retry:()=>o(u=>u+1)}}async function Oj(t,e){const n=ui(yg,"display-order");await dr(wt,async r=>{const s=(await r.get(n)).data(),i=(s==null?void 0:s.rev)||0;if(i!==e)throw new Error("ORDER_CONFLICT");r.set(n,{ids:t,rev:i+1})})}async function Vj(t,e){const n=ui(yg,t.id);await dr(wt,async r=>{const s=(await r.get(n)).data();if(((s==null?void 0:s.rev)||0)!==t.rev)throw new Error("CONFLICT");r.set(n,{before:e.before||(s==null?void 0:s.before)||"",after:e.after||(s==null?void 0:s.after)||"",rev:t.rev+1})})}async function Fj(t){if(t.size>25*1024*1024)throw new Error("الصورة أكبر من 25 ميغابايت. اختار نسخة أصغر.");const e=URL.createObjectURL(t);try{const n=new Image;n.src=e;try{await n.decode()}catch{throw new Error("تعذّر فتح الصورة. جرّب JPG أو PNG أو WebP.")}const r=document.createElement("canvas");for(const s of[1440,1200,960,720]){const i=Math.min(1,s/Math.max(n.width,n.height));r.width=Math.max(1,Math.round(n.width*i)),r.height=Math.max(1,Math.round(n.height*i));const o=r.getContext("2d");o.fillStyle="#fff",o.fillRect(0,0,r.width,r.height),o.drawImage(n,0,0,r.width,r.height);for(const a of[.84,.72,.6]){const u=r.toDataURL("image/jpeg",a);if(u.startsWith("data:image/jpeg;base64,")&&u.length<=2e5)return u}}throw new Error("تعذّر تصغير الصورة. جرّب نسخة أصغر.")}finally{URL.revokeObjectURL(e)}}function H0(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function vg(t,e){t===void 0&&(t={}),e===void 0&&(e={});const n=["__proto__","constructor","prototype"];Object.keys(e).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof t[r]>"u"?t[r]=e[r]:H0(e[r])&&H0(t[r])&&Object.keys(e[r]).length>0&&vg(t[r],e[r])})}const Fb={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Mn(){const t=typeof document<"u"?document:{};return vg(t,Fb),t}const zj={document:Fb,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function St(){const t=typeof window<"u"?window:{};return vg(t,zj),t}function Uj(t){return t===void 0&&(t=""),t.trim().split(" ").filter(e=>!!e.trim())}function Bj(t){const e=t;Object.keys(e).forEach(n=>{try{e[n]=null}catch{}try{delete e[n]}catch{}})}function zb(t,e){return e===void 0&&(e=0),setTimeout(t,e)}function Zu(){return Date.now()}function $j(t){const e=St();let n;return e.getComputedStyle&&(n=e.getComputedStyle(t,null)),!n&&t.currentStyle&&(n=t.currentStyle),n||(n=t.style),n}function Hj(t,e){e===void 0&&(e="x");const n=St();let r,s,i;const o=$j(t);return n.WebKitCSSMatrix?(s=o.transform||o.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(a=>a.replace(",",".")).join(", ")),i=new n.WebKitCSSMatrix(s==="none"?"":s)):(i=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=i.toString().split(",")),e==="x"&&(n.WebKitCSSMatrix?s=i.m41:r.length===16?s=parseFloat(r[12]):s=parseFloat(r[4])),e==="y"&&(n.WebKitCSSMatrix?s=i.m42:r.length===16?s=parseFloat(r[13]):s=parseFloat(r[5])),s||0}function Ic(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function qj(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function sn(){const t=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!qj(r)){const s=Object.keys(Object(r)).filter(i=>e.indexOf(i)<0);for(let i=0,o=s.length;i<o;i+=1){const a=s[i],u=Object.getOwnPropertyDescriptor(r,a);u!==void 0&&u.enumerable&&(Ic(t[a])&&Ic(r[a])?r[a].__swiper__?t[a]=r[a]:sn(t[a],r[a]):!Ic(t[a])&&Ic(r[a])?(t[a]={},r[a].__swiper__?t[a]=r[a]:sn(t[a],r[a])):t[a]=r[a])}}}return t}function Cc(t,e,n){t.style.setProperty(e,n)}function Ub(t){let{swiper:e,targetPosition:n,side:r}=t;const s=St(),i=-e.translate;let o=null,a;const u=e.params.speed;e.wrapperEl.style.scrollSnapType="none",s.cancelAnimationFrame(e.cssModeFrameID);const d=n>i?"next":"prev",h=(m,b)=>d==="next"&&m>=b||d==="prev"&&m<=b,p=()=>{a=new Date().getTime(),o===null&&(o=a);const m=Math.max(Math.min((a-o)/u,1),0),b=.5-Math.cos(m*Math.PI)/2;let T=i+b*(n-i);if(h(T,n)&&(T=n),e.wrapperEl.scrollTo({[r]:T}),h(T,n)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[r]:T})}),s.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=s.requestAnimationFrame(p)};p()}function qn(t,e){e===void 0&&(e="");const n=St(),r=[...t.children];return n.HTMLSlotElement&&t instanceof HTMLSlotElement&&r.push(...t.assignedElements()),e?r.filter(s=>s.matches(e)):r}function Wj(t,e){const n=[e];for(;n.length>0;){const r=n.shift();if(t===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function Gj(t,e){const n=St();let r=e.contains(t);return!r&&n.HTMLSlotElement&&e instanceof HTMLSlotElement&&(r=[...e.assignedElements()].includes(t),r||(r=Wj(t,e))),r}function ed(t){try{console.warn(t);return}catch{}}function _l(t,e){e===void 0&&(e=[]);const n=document.createElement(t);return n.classList.add(...Array.isArray(e)?e:Uj(e)),n}function Kj(t){const e=St(),n=Mn(),r=t.getBoundingClientRect(),s=n.body,i=t.clientTop||s.clientTop||0,o=t.clientLeft||s.clientLeft||0,a=t===e?e.scrollY:t.scrollTop,u=t===e?e.scrollX:t.scrollLeft;return{top:r.top+a-i,left:r.left+u-o}}function Qj(t,e){const n=[];for(;t.previousElementSibling;){const r=t.previousElementSibling;e?r.matches(e)&&n.push(r):n.push(r),t=r}return n}function Yj(t,e){const n=[];for(;t.nextElementSibling;){const r=t.nextElementSibling;e?r.matches(e)&&n.push(r):n.push(r),t=r}return n}function rs(t,e){return St().getComputedStyle(t,null).getPropertyValue(e)}function bl(t){let e=t,n;if(e){for(n=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(n+=1);return n}}function td(t,e){const n=[];let r=t.parentElement;for(;r;)e?r.matches(e)&&n.push(r):n.push(r),r=r.parentElement;return n}function Ep(t,e,n){const r=St();return n?t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):t.offsetWidth}function Ce(t){return(Array.isArray(t)?t:[t]).filter(e=>!!e)}function El(t,e){e===void 0&&(e=""),typeof trustedTypes<"u"?t.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(e):t.innerHTML=e}let Uh;function Xj(){const t=St(),e=Mn();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function Bb(){return Uh||(Uh=Xj()),Uh}let Bh;function Jj(t){let{userAgent:e}=t===void 0?{}:t;const n=Bb(),r=St(),s=r.navigator.platform,i=e||r.navigator.userAgent,o={ios:!1,android:!1},a=r.screen.width,u=r.screen.height,d=i.match(/(Android);?[\s\/]+([\d.]+)?/);let h=i.match(/(iPad).*OS\s([\d_]+)/);const p=i.match(/(iPod)(.*OS\s([\d_]+))?/),m=!h&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),b=s==="Win32";let T=s==="MacIntel";const P=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!h&&T&&n.touch&&P.indexOf(`${a}x${u}`)>=0&&(h=i.match(/(Version)\/([\d.]+)/),h||(h=[0,1,"13_0_0"]),T=!1),d&&!b&&(o.os="android",o.android=!0),(h||m||p)&&(o.os="ios",o.ios=!0),o}function $b(t){return t===void 0&&(t={}),Bh||(Bh=Jj(t)),Bh}let $h;function Zj(){const t=St(),e=$b();let n=!1;function r(){const a=t.navigator.userAgent.toLowerCase();return a.indexOf("safari")>=0&&a.indexOf("chrome")<0&&a.indexOf("android")<0}if(r()){const a=String(t.navigator.userAgent);if(a.includes("Version/")){const[u,d]=a.split("Version/")[1].split(" ")[0].split(".").map(h=>Number(h));n=u<16||u===16&&d<2}}const s=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),i=r(),o=i||s&&e.ios;return{isSafari:n||i,needPerspectiveFix:n,need3dFix:o,isWebView:s}}function Hb(){return $h||($h=Zj()),$h}function e4(t){let{swiper:e,on:n,emit:r}=t;const s=St();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(r("beforeResize"),r("resize"))},u=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(p=>{o=s.requestAnimationFrame(()=>{const{width:m,height:b}=e;let T=m,P=b;p.forEach(N=>{let{contentBoxSize:E,contentRect:y,target:v}=N;v&&v!==e.el||(T=y?y.width:(E[0]||E).inlineSize,P=y?y.height:(E[0]||E).blockSize)}),(T!==m||P!==b)&&a()})}),i.observe(e.el))},d=()=>{o&&s.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},h=()=>{!e||e.destroyed||!e.initialized||r("orientationchange")};n("init",()=>{if(e.params.resizeObserver&&typeof s.ResizeObserver<"u"){u();return}s.addEventListener("resize",a),s.addEventListener("orientationchange",h)}),n("destroy",()=>{d(),s.removeEventListener("resize",a),s.removeEventListener("orientationchange",h)})}function t4(t){let{swiper:e,extendParams:n,on:r,emit:s}=t;const i=[],o=St(),a=function(h,p){p===void 0&&(p={});const m=o.MutationObserver||o.WebkitMutationObserver,b=new m(T=>{if(e.__preventObserver__)return;if(T.length===1){s("observerUpdate",T[0]);return}const P=function(){s("observerUpdate",T[0])};o.requestAnimationFrame?o.requestAnimationFrame(P):o.setTimeout(P,0)});b.observe(h,{attributes:typeof p.attributes>"u"?!0:p.attributes,childList:e.isElement||(typeof p.childList>"u"?!0:p).childList,characterData:typeof p.characterData>"u"?!0:p.characterData}),i.push(b)},u=()=>{if(e.params.observer){if(e.params.observeParents){const h=td(e.hostEl);for(let p=0;p<h.length;p+=1)a(h[p])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},d=()=>{i.forEach(h=>{h.disconnect()}),i.splice(0,i.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",u),r("destroy",d)}var n4={on(t,e,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;const s=n?"unshift":"push";return t.split(" ").forEach(i=>{r.eventsListeners[i]||(r.eventsListeners[i]=[]),r.eventsListeners[i][s](e)}),r},once(t,e,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;function s(){r.off(t,s),s.__emitterProxy&&delete s.__emitterProxy;for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];e.apply(r,o)}return s.__emitterProxy=e,r.on(t,s,n)},onAny(t,e){const n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;const r=e?"unshift":"push";return n.eventsAnyListeners.indexOf(t)<0&&n.eventsAnyListeners[r](t),n},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const n=e.eventsAnyListeners.indexOf(t);return n>=0&&e.eventsAnyListeners.splice(n,1),e},off(t,e){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||t.split(" ").forEach(r=>{typeof e>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((s,i)=>{(s===e||s.__emitterProxy&&s.__emitterProxy===e)&&n.eventsListeners[r].splice(i,1)})}),n},emit(){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let e,n,r;for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return typeof i[0]=="string"||Array.isArray(i[0])?(e=i[0],n=i.slice(1,i.length),r=t):(e=i[0].events,n=i[0].data,r=i[0].context||t),n.unshift(r),(Array.isArray(e)?e:e.split(" ")).forEach(u=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(d=>{d.apply(r,[u,...n])}),t.eventsListeners&&t.eventsListeners[u]&&t.eventsListeners[u].forEach(d=>{d.apply(r,n)})}),t}};function r4(){const t=this;let e,n;const r=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=r.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?n=t.params.height:n=r.clientHeight,!(e===0&&t.isHorizontal()||n===0&&t.isVertical())&&(e=e-parseInt(rs(r,"padding-left")||0,10)-parseInt(rs(r,"padding-right")||0,10),n=n-parseInt(rs(r,"padding-top")||0,10)-parseInt(rs(r,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(n)&&(n=0),Object.assign(t,{width:e,height:n,size:t.isHorizontal()?e:n}))}function s4(){const t=this;function e(C,k){return parseFloat(C.getPropertyValue(t.getDirectionLabel(k))||0)}const n=t.params,{wrapperEl:r,slidesEl:s,size:i,rtlTranslate:o,wrongRTL:a}=t,u=t.virtual&&n.virtual.enabled,d=u?t.virtual.slides.length:t.slides.length,h=qn(s,`.${t.params.slideClass}, swiper-slide`),p=u?t.virtual.slides.length:h.length;let m=[];const b=[],T=[];let P=n.slidesOffsetBefore;typeof P=="function"&&(P=n.slidesOffsetBefore.call(t));let N=n.slidesOffsetAfter;typeof N=="function"&&(N=n.slidesOffsetAfter.call(t));const E=t.snapGrid.length,y=t.slidesGrid.length;let v=n.spaceBetween,I=-P,O=0,L=0;if(typeof i>"u")return;typeof v=="string"&&v.indexOf("%")>=0?v=parseFloat(v.replace("%",""))/100*i:typeof v=="string"&&(v=parseFloat(v)),t.virtualSize=-v,h.forEach(C=>{o?C.style.marginLeft="":C.style.marginRight="",C.style.marginBottom="",C.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(Cc(r,"--swiper-centered-offset-before",""),Cc(r,"--swiper-centered-offset-after",""));const S=n.grid&&n.grid.rows>1&&t.grid;S?t.grid.initSlides(h):t.grid&&t.grid.unsetSlides();let w;const x=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(C=>typeof n.breakpoints[C].slidesPerView<"u").length>0;for(let C=0;C<p;C+=1){w=0;let k;if(h[C]&&(k=h[C]),S&&t.grid.updateSlide(C,k,h),!(h[C]&&rs(k,"display")==="none")){if(n.slidesPerView==="auto"){x&&(h[C].style[t.getDirectionLabel("width")]="");const M=getComputedStyle(k),_=k.style.transform,H=k.style.webkitTransform;if(_&&(k.style.transform="none"),H&&(k.style.webkitTransform="none"),n.roundLengths)w=t.isHorizontal()?Ep(k,"width",!0):Ep(k,"height",!0);else{const q=e(M,"width"),V=e(M,"padding-left"),F=e(M,"padding-right"),D=e(M,"margin-left"),B=e(M,"margin-right"),Q=M.getPropertyValue("box-sizing");if(Q&&Q==="border-box")w=q+D+B;else{const{clientWidth:oe,offsetWidth:re}=k;w=q+V+F+D+B+(re-oe)}}_&&(k.style.transform=_),H&&(k.style.webkitTransform=H),n.roundLengths&&(w=Math.floor(w))}else w=(i-(n.slidesPerView-1)*v)/n.slidesPerView,n.roundLengths&&(w=Math.floor(w)),h[C]&&(h[C].style[t.getDirectionLabel("width")]=`${w}px`);h[C]&&(h[C].swiperSlideSize=w),T.push(w),n.centeredSlides?(I=I+w/2+O/2+v,O===0&&C!==0&&(I=I-i/2-v),C===0&&(I=I-i/2-v),Math.abs(I)<1/1e3&&(I=0),n.roundLengths&&(I=Math.floor(I)),L%n.slidesPerGroup===0&&m.push(I),b.push(I)):(n.roundLengths&&(I=Math.floor(I)),(L-Math.min(t.params.slidesPerGroupSkip,L))%t.params.slidesPerGroup===0&&m.push(I),b.push(I),I=I+w+v),t.virtualSize+=w+v,O=w,L+=1}}if(t.virtualSize=Math.max(t.virtualSize,i)+N,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${t.virtualSize+v}px`),n.setWrapperSize&&(r.style[t.getDirectionLabel("width")]=`${t.virtualSize+v}px`),S&&t.grid.updateWrapperSize(w,m),!n.centeredSlides){const C=[];for(let k=0;k<m.length;k+=1){let M=m[k];n.roundLengths&&(M=Math.floor(M)),m[k]<=t.virtualSize-i&&C.push(M)}m=C,Math.floor(t.virtualSize-i)-Math.floor(m[m.length-1])>1&&m.push(t.virtualSize-i)}if(u&&n.loop){const C=T[0]+v;if(n.slidesPerGroup>1){const k=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/n.slidesPerGroup),M=C*n.slidesPerGroup;for(let _=0;_<k;_+=1)m.push(m[m.length-1]+M)}for(let k=0;k<t.virtual.slidesBefore+t.virtual.slidesAfter;k+=1)n.slidesPerGroup===1&&m.push(m[m.length-1]+C),b.push(b[b.length-1]+C),t.virtualSize+=C}if(m.length===0&&(m=[0]),v!==0){const C=t.isHorizontal()&&o?"marginLeft":t.getDirectionLabel("marginRight");h.filter((k,M)=>!n.cssMode||n.loop?!0:M!==h.length-1).forEach(k=>{k.style[C]=`${v}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let C=0;T.forEach(M=>{C+=M+(v||0)}),C-=v;const k=C>i?C-i:0;m=m.map(M=>M<=0?-P:M>k?k+N:M)}if(n.centerInsufficientSlides){let C=0;T.forEach(M=>{C+=M+(v||0)}),C-=v;const k=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(C+k<i){const M=(i-C-k)/2;m.forEach((_,H)=>{m[H]=_-M}),b.forEach((_,H)=>{b[H]=_+M})}}if(Object.assign(t,{slides:h,snapGrid:m,slidesGrid:b,slidesSizesGrid:T}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Cc(r,"--swiper-centered-offset-before",`${-m[0]}px`),Cc(r,"--swiper-centered-offset-after",`${t.size/2-T[T.length-1]/2}px`);const C=-t.snapGrid[0],k=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(M=>M+C),t.slidesGrid=t.slidesGrid.map(M=>M+k)}if(p!==d&&t.emit("slidesLengthChange"),m.length!==E&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),b.length!==y&&t.emit("slidesGridLengthChange"),n.watchSlidesProgress&&t.updateSlidesOffset(),t.emit("slidesUpdated"),!u&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const C=`${n.containerModifierClass}backface-hidden`,k=t.el.classList.contains(C);p<=n.maxBackfaceHiddenSlides?k||t.el.classList.add(C):k&&t.el.classList.remove(C)}}function i4(t){const e=this,n=[],r=e.virtual&&e.params.virtual.enabled;let s=0,i;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);const o=a=>r?e.slides[e.getSlideIndexByData(a)]:e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{n.push(a)});else for(i=0;i<Math.ceil(e.params.slidesPerView);i+=1){const a=e.activeIndex+i;if(a>e.slides.length&&!r)break;n.push(o(a))}else n.push(o(e.activeIndex));for(i=0;i<n.length;i+=1)if(typeof n[i]<"u"){const a=n[i].offsetHeight;s=a>s?a:s}(s||s===0)&&(e.wrapperEl.style.height=`${s}px`)}function o4(){const t=this,e=t.slides,n=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let r=0;r<e.length;r+=1)e[r].swiperSlideOffset=(t.isHorizontal()?e[r].offsetLeft:e[r].offsetTop)-n-t.cssOverflowAdjustment()}const q0=(t,e,n)=>{e&&!t.classList.contains(n)?t.classList.add(n):!e&&t.classList.contains(n)&&t.classList.remove(n)};function a4(t){t===void 0&&(t=this&&this.translate||0);const e=this,n=e.params,{slides:r,rtlTranslate:s,snapGrid:i}=e;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-t;s&&(o=t),e.visibleSlidesIndexes=[],e.visibleSlides=[];let a=n.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*e.size:typeof a=="string"&&(a=parseFloat(a));for(let u=0;u<r.length;u+=1){const d=r[u];let h=d.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(h-=r[0].swiperSlideOffset);const p=(o+(n.centeredSlides?e.minTranslate():0)-h)/(d.swiperSlideSize+a),m=(o-i[0]+(n.centeredSlides?e.minTranslate():0)-h)/(d.swiperSlideSize+a),b=-(o-h),T=b+e.slidesSizesGrid[u],P=b>=0&&b<=e.size-e.slidesSizesGrid[u],N=b>=0&&b<e.size-1||T>1&&T<=e.size||b<=0&&T>=e.size;N&&(e.visibleSlides.push(d),e.visibleSlidesIndexes.push(u)),q0(d,N,n.slideVisibleClass),q0(d,P,n.slideFullyVisibleClass),d.progress=s?-p:p,d.originalProgress=s?-m:m}}function l4(t){const e=this;if(typeof t>"u"){const h=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*h||0}const n=e.params,r=e.maxTranslate()-e.minTranslate();let{progress:s,isBeginning:i,isEnd:o,progressLoop:a}=e;const u=i,d=o;if(r===0)s=0,i=!0,o=!0;else{s=(t-e.minTranslate())/r;const h=Math.abs(t-e.minTranslate())<1,p=Math.abs(t-e.maxTranslate())<1;i=h||s<=0,o=p||s>=1,h&&(s=0),p&&(s=1)}if(n.loop){const h=e.getSlideIndexByData(0),p=e.getSlideIndexByData(e.slides.length-1),m=e.slidesGrid[h],b=e.slidesGrid[p],T=e.slidesGrid[e.slidesGrid.length-1],P=Math.abs(t);P>=m?a=(P-m)/T:a=(P+T-b)/T,a>1&&(a-=1)}Object.assign(e,{progress:s,progressLoop:a,isBeginning:i,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&e.updateSlidesProgress(t),i&&!u&&e.emit("reachBeginning toEdge"),o&&!d&&e.emit("reachEnd toEdge"),(u&&!i||d&&!o)&&e.emit("fromEdge"),e.emit("progress",s)}const Hh=(t,e,n)=>{e&&!t.classList.contains(n)?t.classList.add(n):!e&&t.classList.contains(n)&&t.classList.remove(n)};function c4(){const t=this,{slides:e,params:n,slidesEl:r,activeIndex:s}=t,i=t.virtual&&n.virtual.enabled,o=t.grid&&n.grid&&n.grid.rows>1,a=p=>qn(r,`.${n.slideClass}${p}, swiper-slide${p}`)[0];let u,d,h;if(i)if(n.loop){let p=s-t.virtual.slidesBefore;p<0&&(p=t.virtual.slides.length+p),p>=t.virtual.slides.length&&(p-=t.virtual.slides.length),u=a(`[data-swiper-slide-index="${p}"]`)}else u=a(`[data-swiper-slide-index="${s}"]`);else o?(u=e.find(p=>p.column===s),h=e.find(p=>p.column===s+1),d=e.find(p=>p.column===s-1)):u=e[s];u&&(o||(h=Yj(u,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!h&&(h=e[0]),d=Qj(u,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d===0&&(d=e[e.length-1]))),e.forEach(p=>{Hh(p,p===u,n.slideActiveClass),Hh(p,p===h,n.slideNextClass),Hh(p,p===d,n.slidePrevClass)}),t.emitSlidesClasses()}const tu=(t,e)=>{if(!t||t.destroyed||!t.params)return;const n=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,r=e.closest(n());if(r){let s=r.querySelector(`.${t.params.lazyPreloaderClass}`);!s&&t.isElement&&(r.shadowRoot?s=r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(s=r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),s&&s.remove())})),s&&s.remove()}},qh=(t,e)=>{if(!t.slides[e])return;const n=t.slides[e].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Sp=t=>{if(!t||t.destroyed||!t.params)return;let e=t.params.lazyPreloadPrevNext;const n=t.slides.length;if(!n||!e||e<0)return;e=Math.min(e,n);const r=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(t.params.slidesPerView),s=t.activeIndex;if(t.params.grid&&t.params.grid.rows>1){const o=s,a=[o-e];a.push(...Array.from({length:e}).map((u,d)=>o+r+d)),t.slides.forEach((u,d)=>{a.includes(u.column)&&qh(t,d)});return}const i=s+r-1;if(t.params.rewind||t.params.loop)for(let o=s-e;o<=i+e;o+=1){const a=(o%n+n)%n;(a<s||a>i)&&qh(t,a)}else for(let o=Math.max(s-e,0);o<=Math.min(i+e,n-1);o+=1)o!==s&&(o>i||o<s)&&qh(t,o)};function u4(t){const{slidesGrid:e,params:n}=t,r=t.rtlTranslate?t.translate:-t.translate;let s;for(let i=0;i<e.length;i+=1)typeof e[i+1]<"u"?r>=e[i]&&r<e[i+1]-(e[i+1]-e[i])/2?s=i:r>=e[i]&&r<e[i+1]&&(s=i+1):r>=e[i]&&(s=i);return n.normalizeSlideIndex&&(s<0||typeof s>"u")&&(s=0),s}function d4(t){const e=this,n=e.rtlTranslate?e.translate:-e.translate,{snapGrid:r,params:s,activeIndex:i,realIndex:o,snapIndex:a}=e;let u=t,d;const h=b=>{let T=b-e.virtual.slidesBefore;return T<0&&(T=e.virtual.slides.length+T),T>=e.virtual.slides.length&&(T-=e.virtual.slides.length),T};if(typeof u>"u"&&(u=u4(e)),r.indexOf(n)>=0)d=r.indexOf(n);else{const b=Math.min(s.slidesPerGroupSkip,u);d=b+Math.floor((u-b)/s.slidesPerGroup)}if(d>=r.length&&(d=r.length-1),u===i&&!e.params.loop){d!==a&&(e.snapIndex=d,e.emit("snapIndexChange"));return}if(u===i&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=h(u);return}const p=e.grid&&s.grid&&s.grid.rows>1;let m;if(e.virtual&&s.virtual.enabled&&s.loop)m=h(u);else if(p){const b=e.slides.find(P=>P.column===u);let T=parseInt(b.getAttribute("data-swiper-slide-index"),10);Number.isNaN(T)&&(T=Math.max(e.slides.indexOf(b),0)),m=Math.floor(T/s.grid.rows)}else if(e.slides[u]){const b=e.slides[u].getAttribute("data-swiper-slide-index");b?m=parseInt(b,10):m=u}else m=u;Object.assign(e,{previousSnapIndex:a,snapIndex:d,previousRealIndex:o,realIndex:m,previousIndex:i,activeIndex:u}),e.initialized&&Sp(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(o!==m&&e.emit("realIndexChange"),e.emit("slideChange"))}function h4(t,e){const n=this,r=n.params;let s=t.closest(`.${r.slideClass}, swiper-slide`);!s&&n.isElement&&e&&e.length>1&&e.includes(t)&&[...e.slice(e.indexOf(t)+1,e.length)].forEach(a=>{!s&&a.matches&&a.matches(`.${r.slideClass}, swiper-slide`)&&(s=a)});let i=!1,o;if(s){for(let a=0;a<n.slides.length;a+=1)if(n.slides[a]===s){i=!0,o=a;break}}if(s&&i)n.clickedSlide=s,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(s.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var f4={updateSize:r4,updateSlides:s4,updateAutoHeight:i4,updateSlidesOffset:o4,updateSlidesProgress:a4,updateProgress:l4,updateSlidesClasses:c4,updateActiveIndex:d4,updateClickedSlide:h4};function p4(t){t===void 0&&(t=this.isHorizontal()?"x":"y");const e=this,{params:n,rtlTranslate:r,translate:s,wrapperEl:i}=e;if(n.virtualTranslate)return r?-s:s;if(n.cssMode)return s;let o=Hj(i,t);return o+=e.cssOverflowAdjustment(),r&&(o=-o),o||0}function m4(t,e){const n=this,{rtlTranslate:r,params:s,wrapperEl:i,progress:o}=n;let a=0,u=0;const d=0;n.isHorizontal()?a=r?-t:t:u=t,s.roundLengths&&(a=Math.floor(a),u=Math.floor(u)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:u,s.cssMode?i[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-u:s.virtualTranslate||(n.isHorizontal()?a-=n.cssOverflowAdjustment():u-=n.cssOverflowAdjustment(),i.style.transform=`translate3d(${a}px, ${u}px, ${d}px)`);let h;const p=n.maxTranslate()-n.minTranslate();p===0?h=0:h=(t-n.minTranslate())/p,h!==o&&n.updateProgress(t),n.emit("setTranslate",n.translate,e)}function g4(){return-this.snapGrid[0]}function y4(){return-this.snapGrid[this.snapGrid.length-1]}function v4(t,e,n,r,s){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const i=this,{params:o,wrapperEl:a}=i;if(i.animating&&o.preventInteractionOnTransition)return!1;const u=i.minTranslate(),d=i.maxTranslate();let h;if(r&&t>u?h=u:r&&t<d?h=d:h=t,i.updateProgress(h),o.cssMode){const p=i.isHorizontal();if(e===0)a[p?"scrollLeft":"scrollTop"]=-h;else{if(!i.support.smoothScroll)return Ub({swiper:i,targetPosition:-h,side:p?"left":"top"}),!0;a.scrollTo({[p?"left":"top"]:-h,behavior:"smooth"})}return!0}return e===0?(i.setTransition(0),i.setTranslate(h),n&&(i.emit("beforeTransitionStart",e,s),i.emit("transitionEnd"))):(i.setTransition(e),i.setTranslate(h),n&&(i.emit("beforeTransitionStart",e,s),i.emit("transitionStart")),i.animating||(i.animating=!0,i.onTranslateToWrapperTransitionEnd||(i.onTranslateToWrapperTransitionEnd=function(m){!i||i.destroyed||m.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onTranslateToWrapperTransitionEnd),i.onTranslateToWrapperTransitionEnd=null,delete i.onTranslateToWrapperTransitionEnd,i.animating=!1,n&&i.emit("transitionEnd"))}),i.wrapperEl.addEventListener("transitionend",i.onTranslateToWrapperTransitionEnd))),!0}var w4={getTranslate:p4,setTranslate:m4,minTranslate:g4,maxTranslate:y4,translateTo:v4};function x4(t,e){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${t}ms`,n.wrapperEl.style.transitionDelay=t===0?"0ms":""),n.emit("setTransition",t,e)}function qb(t){let{swiper:e,runCallbacks:n,direction:r,step:s}=t;const{activeIndex:i,previousIndex:o}=e;let a=r;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${s}`),n&&a==="reset"?e.emit(`slideResetTransition${s}`):n&&i!==o&&(e.emit(`slideChangeTransition${s}`),a==="next"?e.emit(`slideNextTransition${s}`):e.emit(`slidePrevTransition${s}`))}function _4(t,e){t===void 0&&(t=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),qb({swiper:n,runCallbacks:t,direction:e,step:"Start"}))}function b4(t,e){t===void 0&&(t=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),qb({swiper:n,runCallbacks:t,direction:e,step:"End"}))}var E4={setTransition:x4,transitionStart:_4,transitionEnd:b4};function S4(t,e,n,r,s){t===void 0&&(t=0),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const i=this;let o=t;o<0&&(o=0);const{params:a,snapGrid:u,slidesGrid:d,previousIndex:h,activeIndex:p,rtlTranslate:m,wrapperEl:b,enabled:T}=i;if(!T&&!r&&!s||i.destroyed||i.animating&&a.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=i.params.speed);const P=Math.min(i.params.slidesPerGroupSkip,o);let N=P+Math.floor((o-P)/i.params.slidesPerGroup);N>=u.length&&(N=u.length-1);const E=-u[N];if(a.normalizeSlideIndex)for(let S=0;S<d.length;S+=1){const w=-Math.floor(E*100),x=Math.floor(d[S]*100),C=Math.floor(d[S+1]*100);typeof d[S+1]<"u"?w>=x&&w<C-(C-x)/2?o=S:w>=x&&w<C&&(o=S+1):w>=x&&(o=S)}if(i.initialized&&o!==p&&(!i.allowSlideNext&&(m?E>i.translate&&E>i.minTranslate():E<i.translate&&E<i.minTranslate())||!i.allowSlidePrev&&E>i.translate&&E>i.maxTranslate()&&(p||0)!==o))return!1;o!==(h||0)&&n&&i.emit("beforeSlideChangeStart"),i.updateProgress(E);let y;o>p?y="next":o<p?y="prev":y="reset";const v=i.virtual&&i.params.virtual.enabled;if(!(v&&s)&&(m&&-E===i.translate||!m&&E===i.translate))return i.updateActiveIndex(o),a.autoHeight&&i.updateAutoHeight(),i.updateSlidesClasses(),a.effect!=="slide"&&i.setTranslate(E),y!=="reset"&&(i.transitionStart(n,y),i.transitionEnd(n,y)),!1;if(a.cssMode){const S=i.isHorizontal(),w=m?E:-E;if(e===0)v&&(i.wrapperEl.style.scrollSnapType="none",i._immediateVirtual=!0),v&&!i._cssModeVirtualInitialSet&&i.params.initialSlide>0?(i._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{b[S?"scrollLeft":"scrollTop"]=w})):b[S?"scrollLeft":"scrollTop"]=w,v&&requestAnimationFrame(()=>{i.wrapperEl.style.scrollSnapType="",i._immediateVirtual=!1});else{if(!i.support.smoothScroll)return Ub({swiper:i,targetPosition:w,side:S?"left":"top"}),!0;b.scrollTo({[S?"left":"top"]:w,behavior:"smooth"})}return!0}const L=Hb().isSafari;return v&&!s&&L&&i.isElement&&i.virtual.update(!1,!1,o),i.setTransition(e),i.setTranslate(E),i.updateActiveIndex(o),i.updateSlidesClasses(),i.emit("beforeTransitionStart",e,r),i.transitionStart(n,y),e===0?i.transitionEnd(n,y):i.animating||(i.animating=!0,i.onSlideToWrapperTransitionEnd||(i.onSlideToWrapperTransitionEnd=function(w){!i||i.destroyed||w.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onSlideToWrapperTransitionEnd),i.onSlideToWrapperTransitionEnd=null,delete i.onSlideToWrapperTransitionEnd,i.transitionEnd(n,y))}),i.wrapperEl.addEventListener("transitionend",i.onSlideToWrapperTransitionEnd)),!0}function T4(t,e,n,r){t===void 0&&(t=0),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const s=this;if(s.destroyed)return;typeof e>"u"&&(e=s.params.speed);const i=s.grid&&s.params.grid&&s.params.grid.rows>1;let o=t;if(s.params.loop)if(s.virtual&&s.params.virtual.enabled)o=o+s.virtual.slidesBefore;else{let a;if(i){const m=o*s.params.grid.rows;a=s.slides.find(b=>b.getAttribute("data-swiper-slide-index")*1===m).column}else a=s.getSlideIndexByData(o);const u=i?Math.ceil(s.slides.length/s.params.grid.rows):s.slides.length,{centeredSlides:d}=s.params;let h=s.params.slidesPerView;h==="auto"?h=s.slidesPerViewDynamic():(h=Math.ceil(parseFloat(s.params.slidesPerView,10)),d&&h%2===0&&(h=h+1));let p=u-a<h;if(d&&(p=p||a<Math.ceil(h/2)),r&&d&&s.params.slidesPerView!=="auto"&&!i&&(p=!1),p){const m=d?a<s.activeIndex?"prev":"next":a-s.activeIndex-1<s.params.slidesPerView?"next":"prev";s.loopFix({direction:m,slideTo:!0,activeSlideIndex:m==="next"?a+1:a-u+1,slideRealIndex:m==="next"?s.realIndex:void 0})}if(i){const m=o*s.params.grid.rows;o=s.slides.find(b=>b.getAttribute("data-swiper-slide-index")*1===m).column}else o=s.getSlideIndexByData(o)}return requestAnimationFrame(()=>{s.slideTo(o,e,n,r)}),s}function I4(t,e,n){e===void 0&&(e=!0);const r=this,{enabled:s,params:i,animating:o}=r;if(!s||r.destroyed)return r;typeof t>"u"&&(t=r.params.speed);let a=i.slidesPerGroup;i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(a=Math.max(r.slidesPerViewDynamic("current",!0),1));const u=r.activeIndex<i.slidesPerGroupSkip?1:a,d=r.virtual&&i.virtual.enabled;if(i.loop){if(o&&!d&&i.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+u,t,e,n)}),!0}return i.rewind&&r.isEnd?r.slideTo(0,t,e,n):r.slideTo(r.activeIndex+u,t,e,n)}function C4(t,e,n){e===void 0&&(e=!0);const r=this,{params:s,snapGrid:i,slidesGrid:o,rtlTranslate:a,enabled:u,animating:d}=r;if(!u||r.destroyed)return r;typeof t>"u"&&(t=r.params.speed);const h=r.virtual&&s.virtual.enabled;if(s.loop){if(d&&!h&&s.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const p=a?r.translate:-r.translate;function m(y){return y<0?-Math.floor(Math.abs(y)):Math.floor(y)}const b=m(p),T=i.map(y=>m(y)),P=s.freeMode&&s.freeMode.enabled;let N=i[T.indexOf(b)-1];if(typeof N>"u"&&(s.cssMode||P)){let y;i.forEach((v,I)=>{b>=v&&(y=I)}),typeof y<"u"&&(N=P?i[y]:i[y>0?y-1:y])}let E=0;if(typeof N<"u"&&(E=o.indexOf(N),E<0&&(E=r.activeIndex-1),s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(E=E-r.slidesPerViewDynamic("previous",!0)+1,E=Math.max(E,0))),s.rewind&&r.isBeginning){const y=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(y,t,e,n)}else if(s.loop&&r.activeIndex===0&&s.cssMode)return requestAnimationFrame(()=>{r.slideTo(E,t,e,n)}),!0;return r.slideTo(E,t,e,n)}function k4(t,e,n){e===void 0&&(e=!0);const r=this;if(!r.destroyed)return typeof t>"u"&&(t=r.params.speed),r.slideTo(r.activeIndex,t,e,n)}function A4(t,e,n,r){e===void 0&&(e=!0),r===void 0&&(r=.5);const s=this;if(s.destroyed)return;typeof t>"u"&&(t=s.params.speed);let i=s.activeIndex;const o=Math.min(s.params.slidesPerGroupSkip,i),a=o+Math.floor((i-o)/s.params.slidesPerGroup),u=s.rtlTranslate?s.translate:-s.translate;if(u>=s.snapGrid[a]){const d=s.snapGrid[a],h=s.snapGrid[a+1];u-d>(h-d)*r&&(i+=s.params.slidesPerGroup)}else{const d=s.snapGrid[a-1],h=s.snapGrid[a];u-d<=(h-d)*r&&(i-=s.params.slidesPerGroup)}return i=Math.max(i,0),i=Math.min(i,s.slidesGrid.length-1),s.slideTo(i,t,e,n)}function N4(){const t=this;if(t.destroyed)return;const{params:e,slidesEl:n}=t,r=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView;let s=t.getSlideIndexWhenGrid(t.clickedIndex),i;const o=t.isElement?"swiper-slide":`.${e.slideClass}`,a=t.grid&&t.params.grid&&t.params.grid.rows>1;if(e.loop){if(t.animating)return;i=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?t.slideToLoop(i):s>(a?(t.slides.length-r)/2-(t.params.grid.rows-1):t.slides.length-r)?(t.loopFix(),s=t.getSlideIndex(qn(n,`${o}[data-swiper-slide-index="${i}"]`)[0]),zb(()=>{t.slideTo(s)})):t.slideTo(s)}else t.slideTo(s)}var P4={slideTo:S4,slideToLoop:T4,slideNext:I4,slidePrev:C4,slideReset:k4,slideToClosest:A4,slideToClickedSlide:N4};function R4(t,e){const n=this,{params:r,slidesEl:s}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const i=()=>{qn(s,`.${r.slideClass}, swiper-slide`).forEach((b,T)=>{b.setAttribute("data-swiper-slide-index",T)})},o=()=>{const m=qn(s,`.${r.slideBlankClass}`);m.forEach(b=>{b.remove()}),m.length>0&&(n.recalcSlides(),n.updateSlides())},a=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||a)&&o();const u=r.slidesPerGroup*(a?r.grid.rows:1),d=n.slides.length%u!==0,h=a&&n.slides.length%r.grid.rows!==0,p=m=>{for(let b=0;b<m;b+=1){const T=n.isElement?_l("swiper-slide",[r.slideBlankClass]):_l("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(T)}};if(d){if(r.loopAddBlankSlides){const m=u-n.slides.length%u;p(m),n.recalcSlides(),n.updateSlides()}else ed("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(h){if(r.loopAddBlankSlides){const m=r.grid.rows-n.slides.length%r.grid.rows;p(m),n.recalcSlides(),n.updateSlides()}else ed("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();n.loopFix({slideRealIndex:t,direction:r.centeredSlides?void 0:"next",initial:e})}function j4(t){let{slideRealIndex:e,slideTo:n=!0,direction:r,setTranslate:s,activeSlideIndex:i,initial:o,byController:a,byMousewheel:u}=t===void 0?{}:t;const d=this;if(!d.params.loop)return;d.emit("beforeLoopFix");const{slides:h,allowSlidePrev:p,allowSlideNext:m,slidesEl:b,params:T}=d,{centeredSlides:P,initialSlide:N}=T;if(d.allowSlidePrev=!0,d.allowSlideNext=!0,d.virtual&&T.virtual.enabled){n&&(!T.centeredSlides&&d.snapIndex===0?d.slideTo(d.virtual.slides.length,0,!1,!0):T.centeredSlides&&d.snapIndex<T.slidesPerView?d.slideTo(d.virtual.slides.length+d.snapIndex,0,!1,!0):d.snapIndex===d.snapGrid.length-1&&d.slideTo(d.virtual.slidesBefore,0,!1,!0)),d.allowSlidePrev=p,d.allowSlideNext=m,d.emit("loopFix");return}let E=T.slidesPerView;E==="auto"?E=d.slidesPerViewDynamic():(E=Math.ceil(parseFloat(T.slidesPerView,10)),P&&E%2===0&&(E=E+1));const y=T.slidesPerGroupAuto?E:T.slidesPerGroup;let v=P?Math.max(y,Math.ceil(E/2)):y;v%y!==0&&(v+=y-v%y),v+=T.loopAdditionalSlides,d.loopedSlides=v;const I=d.grid&&T.grid&&T.grid.rows>1;h.length<E+v||d.params.effect==="cards"&&h.length<E+v*2?ed("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):I&&T.grid.fill==="row"&&ed("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const O=[],L=[],S=I?Math.ceil(h.length/T.grid.rows):h.length,w=o&&S-N<E&&!P;let x=w?N:d.activeIndex;typeof i>"u"?i=d.getSlideIndex(h.find(V=>V.classList.contains(T.slideActiveClass))):x=i;const C=r==="next"||!r,k=r==="prev"||!r;let M=0,_=0;const q=(I?h[i].column:i)+(P&&typeof s>"u"?-E/2+.5:0);if(q<v){M=Math.max(v-q,y);for(let V=0;V<v-q;V+=1){const F=V-Math.floor(V/S)*S;if(I){const D=S-F-1;for(let B=h.length-1;B>=0;B-=1)h[B].column===D&&O.push(B)}else O.push(S-F-1)}}else if(q+E>S-v){_=Math.max(q-(S-v*2),y),w&&(_=Math.max(_,E-S+N+1));for(let V=0;V<_;V+=1){const F=V-Math.floor(V/S)*S;I?h.forEach((D,B)=>{D.column===F&&L.push(B)}):L.push(F)}}if(d.__preventObserver__=!0,requestAnimationFrame(()=>{d.__preventObserver__=!1}),d.params.effect==="cards"&&h.length<E+v*2&&(L.includes(i)&&L.splice(L.indexOf(i),1),O.includes(i)&&O.splice(O.indexOf(i),1)),k&&O.forEach(V=>{h[V].swiperLoopMoveDOM=!0,b.prepend(h[V]),h[V].swiperLoopMoveDOM=!1}),C&&L.forEach(V=>{h[V].swiperLoopMoveDOM=!0,b.append(h[V]),h[V].swiperLoopMoveDOM=!1}),d.recalcSlides(),T.slidesPerView==="auto"?d.updateSlides():I&&(O.length>0&&k||L.length>0&&C)&&d.slides.forEach((V,F)=>{d.grid.updateSlide(F,V,d.slides)}),T.watchSlidesProgress&&d.updateSlidesOffset(),n){if(O.length>0&&k){if(typeof e>"u"){const V=d.slidesGrid[x],D=d.slidesGrid[x+M]-V;u?d.setTranslate(d.translate-D):(d.slideTo(x+Math.ceil(M),0,!1,!0),s&&(d.touchEventsData.startTranslate=d.touchEventsData.startTranslate-D,d.touchEventsData.currentTranslate=d.touchEventsData.currentTranslate-D))}else if(s){const V=I?O.length/T.grid.rows:O.length;d.slideTo(d.activeIndex+V,0,!1,!0),d.touchEventsData.currentTranslate=d.translate}}else if(L.length>0&&C)if(typeof e>"u"){const V=d.slidesGrid[x],D=d.slidesGrid[x-_]-V;u?d.setTranslate(d.translate-D):(d.slideTo(x-_,0,!1,!0),s&&(d.touchEventsData.startTranslate=d.touchEventsData.startTranslate-D,d.touchEventsData.currentTranslate=d.touchEventsData.currentTranslate-D))}else{const V=I?L.length/T.grid.rows:L.length;d.slideTo(d.activeIndex-V,0,!1,!0)}}if(d.allowSlidePrev=p,d.allowSlideNext=m,d.controller&&d.controller.control&&!a){const V={slideRealIndex:e,direction:r,setTranslate:s,activeSlideIndex:i,byController:!0};Array.isArray(d.controller.control)?d.controller.control.forEach(F=>{!F.destroyed&&F.params.loop&&F.loopFix({...V,slideTo:F.params.slidesPerView===T.slidesPerView?n:!1})}):d.controller.control instanceof d.constructor&&d.controller.control.params.loop&&d.controller.control.loopFix({...V,slideTo:d.controller.control.params.slidesPerView===T.slidesPerView?n:!1})}d.emit("loopFix")}function M4(){const t=this,{params:e,slidesEl:n}=t;if(!e.loop||!n||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const r=[];t.slides.forEach(s=>{const i=typeof s.swiperSlideIndex>"u"?s.getAttribute("data-swiper-slide-index")*1:s.swiperSlideIndex;r[i]=s}),t.slides.forEach(s=>{s.removeAttribute("data-swiper-slide-index")}),r.forEach(s=>{n.append(s)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}var L4={loopCreate:R4,loopFix:j4,loopDestroy:M4};function D4(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const n=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=t?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function O4(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t.isElement&&(t.__preventObserver__=!0),t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1}))}var V4={setGrabCursor:D4,unsetGrabCursor:O4};function F4(t,e){e===void 0&&(e=this);function n(r){if(!r||r===Mn()||r===St())return null;r.assignedSlot&&(r=r.assignedSlot);const s=r.closest(t);return!s&&!r.getRootNode?null:s||n(r.getRootNode().host)}return n(e)}function W0(t,e,n){const r=St(),{params:s}=t,i=s.edgeSwipeDetection,o=s.edgeSwipeThreshold;return i&&(n<=o||n>=r.innerWidth-o)?i==="prevent"?(e.preventDefault(),!0):!1:!0}function z4(t){const e=this,n=Mn();let r=t;r.originalEvent&&(r=r.originalEvent);const s=e.touchEventsData;if(r.type==="pointerdown"){if(s.pointerId!==null&&s.pointerId!==r.pointerId)return;s.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(s.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){W0(e,r,r.targetTouches[0].pageX);return}const{params:i,touches:o,enabled:a}=e;if(!a||!i.simulateTouch&&r.pointerType==="mouse"||e.animating&&i.preventInteractionOnTransition)return;!e.animating&&i.cssMode&&i.loop&&e.loopFix();let u=r.target;if(i.touchEventsTarget==="wrapper"&&!Gj(u,e.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||s.isTouched&&s.isMoved)return;const d=!!i.noSwipingClass&&i.noSwipingClass!=="",h=r.composedPath?r.composedPath():r.path;d&&r.target&&r.target.shadowRoot&&h&&(u=h[0]);const p=i.noSwipingSelector?i.noSwipingSelector:`.${i.noSwipingClass}`,m=!!(r.target&&r.target.shadowRoot);if(i.noSwiping&&(m?F4(p,u):u.closest(p))){e.allowClick=!0;return}if(i.swipeHandler&&!u.closest(i.swipeHandler))return;o.currentX=r.pageX,o.currentY=r.pageY;const b=o.currentX,T=o.currentY;if(!W0(e,r,b))return;Object.assign(s,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=b,o.startY=T,s.touchStartTime=Zu(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,i.threshold>0&&(s.allowThresholdMove=!1);let P=!0;u.matches(s.focusableElements)&&(P=!1,u.nodeName==="SELECT"&&(s.isTouched=!1)),n.activeElement&&n.activeElement.matches(s.focusableElements)&&n.activeElement!==u&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!u.matches(s.focusableElements))&&n.activeElement.blur();const N=P&&e.allowTouchMove&&i.touchStartPreventDefault;(i.touchStartForcePreventDefault||N)&&!u.isContentEditable&&r.preventDefault(),i.freeMode&&i.freeMode.enabled&&e.freeMode&&e.animating&&!i.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",r)}function U4(t){const e=Mn(),n=this,r=n.touchEventsData,{params:s,touches:i,rtlTranslate:o,enabled:a}=n;if(!a||!s.simulateTouch&&t.pointerType==="mouse")return;let u=t;if(u.originalEvent&&(u=u.originalEvent),u.type==="pointermove"&&(r.touchId!==null||u.pointerId!==r.pointerId))return;let d;if(u.type==="touchmove"){if(d=[...u.changedTouches].find(L=>L.identifier===r.touchId),!d||d.identifier!==r.touchId)return}else d=u;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",u);return}const h=d.pageX,p=d.pageY;if(u.preventedByNestedSwiper){i.startX=h,i.startY=p;return}if(!n.allowTouchMove){u.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(i,{startX:h,startY:p,currentX:h,currentY:p}),r.touchStartTime=Zu());return}if(s.touchReleaseOnEdges&&!s.loop)if(n.isVertical()){if(p<i.startY&&n.translate<=n.maxTranslate()||p>i.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(o&&(h>i.startX&&-n.translate<=n.maxTranslate()||h<i.startX&&-n.translate>=n.minTranslate()))return;if(!o&&(h<i.startX&&n.translate<=n.maxTranslate()||h>i.startX&&n.translate>=n.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(r.focusableElements)&&e.activeElement!==u.target&&u.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&u.target===e.activeElement&&u.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",u),i.previousX=i.currentX,i.previousY=i.currentY,i.currentX=h,i.currentY=p;const m=i.currentX-i.startX,b=i.currentY-i.startY;if(n.params.threshold&&Math.sqrt(m**2+b**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let L;n.isHorizontal()&&i.currentY===i.startY||n.isVertical()&&i.currentX===i.startX?r.isScrolling=!1:m*m+b*b>=25&&(L=Math.atan2(Math.abs(b),Math.abs(m))*180/Math.PI,r.isScrolling=n.isHorizontal()?L>s.touchAngle:90-L>s.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",u),typeof r.startMoving>"u"&&(i.currentX!==i.startX||i.currentY!==i.startY)&&(r.startMoving=!0),r.isScrolling||u.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!s.cssMode&&u.cancelable&&u.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&u.stopPropagation();let T=n.isHorizontal()?m:b,P=n.isHorizontal()?i.currentX-i.previousX:i.currentY-i.previousY;s.oneWayMovement&&(T=Math.abs(T)*(o?1:-1),P=Math.abs(P)*(o?1:-1)),i.diff=T,T*=s.touchRatio,o&&(T=-T,P=-P);const N=n.touchesDirection;n.swipeDirection=T>0?"prev":"next",n.touchesDirection=P>0?"prev":"next";const E=n.params.loop&&!s.cssMode,y=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(E&&y&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const L=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(L)}r.allowMomentumBounce=!1,s.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",u)}let v;if(new Date().getTime(),s._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&N!==n.touchesDirection&&E&&y&&Math.abs(T)>=1){Object.assign(i,{startX:h,startY:p,currentX:h,currentY:p,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",u),r.isMoved=!0,r.currentTranslate=T+r.startTranslate;let I=!0,O=s.resistanceRatio;if(s.touchReleaseOnEdges&&(O=0),T>0?(E&&y&&!v&&r.allowThresholdMove&&r.currentTranslate>(s.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(s.slidesPerView!=="auto"&&n.slides.length-s.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(I=!1,s.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+T)**O))):T<0&&(E&&y&&!v&&r.allowThresholdMove&&r.currentTranslate<(s.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(s.slidesPerView!=="auto"&&n.slides.length-s.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(s.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(s.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(I=!1,s.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-T)**O))),I&&(u.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),s.threshold>0)if(Math.abs(T)>s.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,i.startX=i.currentX,i.startY=i.currentY,r.currentTranslate=r.startTranslate,i.diff=n.isHorizontal()?i.currentX-i.startX:i.currentY-i.startY;return}}else{r.currentTranslate=r.startTranslate;return}!s.followFinger||s.cssMode||((s.freeMode&&s.freeMode.enabled&&n.freeMode||s.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),s.freeMode&&s.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function B4(t){const e=this,n=e.touchEventsData;let r=t;r.originalEvent&&(r=r.originalEvent);let s;if(r.type==="touchend"||r.type==="touchcancel"){if(s=[...r.changedTouches].find(O=>O.identifier===n.touchId),!s||s.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;s=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(e.browser.isSafari||e.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:o,touches:a,rtlTranslate:u,slidesGrid:d,enabled:h}=e;if(!h||!o.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&e.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&o.grabCursor&&e.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}o.grabCursor&&n.isMoved&&n.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const p=Zu(),m=p-n.touchStartTime;if(e.allowClick){const O=r.path||r.composedPath&&r.composedPath();e.updateClickedSlide(O&&O[0]||r.target,O),e.emit("tap click",r),m<300&&p-n.lastClickTime<300&&e.emit("doubleTap doubleClick",r)}if(n.lastClickTime=Zu(),zb(()=>{e.destroyed||(e.allowClick=!0)}),!n.isTouched||!n.isMoved||!e.swipeDirection||a.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let b;if(o.followFinger?b=u?e.translate:-e.translate:b=-n.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:b});return}const T=b>=-e.maxTranslate()&&!e.params.loop;let P=0,N=e.slidesSizesGrid[0];for(let O=0;O<d.length;O+=O<o.slidesPerGroupSkip?1:o.slidesPerGroup){const L=O<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof d[O+L]<"u"?(T||b>=d[O]&&b<d[O+L])&&(P=O,N=d[O+L]-d[O]):(T||b>=d[O])&&(P=O,N=d[d.length-1]-d[d.length-2])}let E=null,y=null;o.rewind&&(e.isBeginning?y=o.virtual&&o.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(E=0));const v=(b-d[P])/N,I=P<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(m>o.longSwipesMs){if(!o.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(v>=o.longSwipesRatio?e.slideTo(o.rewind&&e.isEnd?E:P+I):e.slideTo(P)),e.swipeDirection==="prev"&&(v>1-o.longSwipesRatio?e.slideTo(P+I):y!==null&&v<0&&Math.abs(v)>o.longSwipesRatio?e.slideTo(y):e.slideTo(P))}else{if(!o.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(r.target===e.navigation.nextEl||r.target===e.navigation.prevEl)?r.target===e.navigation.nextEl?e.slideTo(P+I):e.slideTo(P):(e.swipeDirection==="next"&&e.slideTo(E!==null?E:P+I),e.swipeDirection==="prev"&&e.slideTo(y!==null?y:P))}}function G0(){const t=this,{params:e,el:n}=t;if(n&&n.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:s,snapGrid:i}=t,o=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const a=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!a?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!o?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(t.autoplay.resizeTimeout),t.autoplay.resizeTimeout=setTimeout(()=>{t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.resume()},500)),t.allowSlidePrev=s,t.allowSlideNext=r,t.params.watchOverflow&&i!==t.snapGrid&&t.checkOverflow()}function $4(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function H4(){const t=this,{wrapperEl:e,rtlTranslate:n,enabled:r}=t;if(!r)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let s;const i=t.maxTranslate()-t.minTranslate();i===0?s=0:s=(t.translate-t.minTranslate())/i,s!==t.progress&&t.updateProgress(n?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}function q4(t){const e=this;tu(e,t.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function W4(){const t=this;t.documentTouchHandlerProceeded||(t.documentTouchHandlerProceeded=!0,t.params.touchReleaseOnEdges&&(t.el.style.touchAction="auto"))}const Wb=(t,e)=>{const n=Mn(),{params:r,el:s,wrapperEl:i,device:o}=t,a=!!r.nested,u=e==="on"?"addEventListener":"removeEventListener",d=e;!s||typeof s=="string"||(n[u]("touchstart",t.onDocumentTouchStart,{passive:!1,capture:a}),s[u]("touchstart",t.onTouchStart,{passive:!1}),s[u]("pointerdown",t.onTouchStart,{passive:!1}),n[u]("touchmove",t.onTouchMove,{passive:!1,capture:a}),n[u]("pointermove",t.onTouchMove,{passive:!1,capture:a}),n[u]("touchend",t.onTouchEnd,{passive:!0}),n[u]("pointerup",t.onTouchEnd,{passive:!0}),n[u]("pointercancel",t.onTouchEnd,{passive:!0}),n[u]("touchcancel",t.onTouchEnd,{passive:!0}),n[u]("pointerout",t.onTouchEnd,{passive:!0}),n[u]("pointerleave",t.onTouchEnd,{passive:!0}),n[u]("contextmenu",t.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&s[u]("click",t.onClick,!0),r.cssMode&&i[u]("scroll",t.onScroll),r.updateOnWindowResize?t[d](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",G0,!0):t[d]("observerUpdate",G0,!0),s[u]("load",t.onLoad,{capture:!0}))};function G4(){const t=this,{params:e}=t;t.onTouchStart=z4.bind(t),t.onTouchMove=U4.bind(t),t.onTouchEnd=B4.bind(t),t.onDocumentTouchStart=W4.bind(t),e.cssMode&&(t.onScroll=H4.bind(t)),t.onClick=$4.bind(t),t.onLoad=q4.bind(t),Wb(t,"on")}function K4(){Wb(this,"off")}var Q4={attachEvents:G4,detachEvents:K4};const K0=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function Y4(){const t=this,{realIndex:e,initialized:n,params:r,el:s}=t,i=r.breakpoints;if(!i||i&&Object.keys(i).length===0)return;const o=Mn(),a=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",u=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?t.el:o.querySelector(r.breakpointsBase),d=t.getBreakpoint(i,a,u);if(!d||t.currentBreakpoint===d)return;const p=(d in i?i[d]:void 0)||t.originalParams,m=K0(t,r),b=K0(t,p),T=t.params.grabCursor,P=p.grabCursor,N=r.enabled;m&&!b?(s.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),t.emitContainerClasses()):!m&&b&&(s.classList.add(`${r.containerModifierClass}grid`),(p.grid.fill&&p.grid.fill==="column"||!p.grid.fill&&r.grid.fill==="column")&&s.classList.add(`${r.containerModifierClass}grid-column`),t.emitContainerClasses()),T&&!P?t.unsetGrabCursor():!T&&P&&t.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(L=>{if(typeof p[L]>"u")return;const S=r[L]&&r[L].enabled,w=p[L]&&p[L].enabled;S&&!w&&t[L].disable(),!S&&w&&t[L].enable()});const E=p.direction&&p.direction!==r.direction,y=r.loop&&(p.slidesPerView!==r.slidesPerView||E),v=r.loop;E&&n&&t.changeDirection(),sn(t.params,p);const I=t.params.enabled,O=t.params.loop;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),N&&!I?t.disable():!N&&I&&t.enable(),t.currentBreakpoint=d,t.emit("_beforeBreakpoint",p),n&&(y?(t.loopDestroy(),t.loopCreate(e),t.updateSlides()):!v&&O?(t.loopCreate(e),t.updateSlides()):v&&!O&&t.loopDestroy()),t.emit("breakpoint",p)}function X4(t,e,n){if(e===void 0&&(e="window"),!t||e==="container"&&!n)return;let r=!1;const s=St(),i=e==="window"?s.innerHeight:n.clientHeight,o=Object.keys(t).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const u=parseFloat(a.substr(1));return{value:i*u,point:a}}return{value:a,point:a}});o.sort((a,u)=>parseInt(a.value,10)-parseInt(u.value,10));for(let a=0;a<o.length;a+=1){const{point:u,value:d}=o[a];e==="window"?s.matchMedia(`(min-width: ${d}px)`).matches&&(r=u):d<=n.clientWidth&&(r=u)}return r||"max"}var J4={setBreakpoint:Y4,getBreakpoint:X4};function Z4(t,e){const n=[];return t.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(s=>{r[s]&&n.push(e+s)}):typeof r=="string"&&n.push(e+r)}),n}function eM(){const t=this,{classNames:e,params:n,rtl:r,el:s,device:i}=t,o=Z4(["initialized",n.direction,{"free-mode":t.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:i.android},{ios:i.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);e.push(...o),s.classList.add(...e),t.emitContainerClasses()}function tM(){const t=this,{el:e,classNames:n}=t;!e||typeof e=="string"||(e.classList.remove(...n),t.emitContainerClasses())}var nM={addClasses:eM,removeClasses:tM};function rM(){const t=this,{isLocked:e,params:n}=t,{slidesOffsetBefore:r}=n;if(r){const s=t.slides.length-1,i=t.slidesGrid[s]+t.slidesSizesGrid[s]+r*2;t.isLocked=t.size>i}else t.isLocked=t.snapGrid.length===1;n.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),n.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var sM={checkOverflow:rM},Tp={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function iM(t,e){return function(r){r===void 0&&(r={});const s=Object.keys(r)[0],i=r[s];if(typeof i!="object"||i===null){sn(e,r);return}if(t[s]===!0&&(t[s]={enabled:!0}),s==="navigation"&&t[s]&&t[s].enabled&&!t[s].prevEl&&!t[s].nextEl&&(t[s].auto=!0),["pagination","scrollbar"].indexOf(s)>=0&&t[s]&&t[s].enabled&&!t[s].el&&(t[s].auto=!0),!(s in t&&"enabled"in i)){sn(e,r);return}typeof t[s]=="object"&&!("enabled"in t[s])&&(t[s].enabled=!0),t[s]||(t[s]={enabled:!1}),sn(e,r)}}const Wh={eventsEmitter:n4,update:f4,translate:w4,transition:E4,slide:P4,loop:L4,grabCursor:V4,events:Q4,breakpoints:J4,checkOverflow:sM,classes:nM},Gh={};let wg=class ar{constructor(){let e,n;for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];s.length===1&&s[0].constructor&&Object.prototype.toString.call(s[0]).slice(8,-1)==="Object"?n=s[0]:[e,n]=s,n||(n={}),n=sn({},n),e&&!n.el&&(n.el=e);const o=Mn();if(n.el&&typeof n.el=="string"&&o.querySelectorAll(n.el).length>1){const h=[];return o.querySelectorAll(n.el).forEach(p=>{const m=sn({},n,{el:p});h.push(new ar(m))}),h}const a=this;a.__swiper__=!0,a.support=Bb(),a.device=$b({userAgent:n.userAgent}),a.browser=Hb(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],n.modules&&Array.isArray(n.modules)&&a.modules.push(...n.modules);const u={};a.modules.forEach(h=>{h({params:n,swiper:a,extendParams:iM(n,u),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const d=sn({},Tp,u);return a.params=sn({},d,Gh,n),a.originalParams=sn({},a.params),a.passedParams=sn({},n),a.params&&a.params.on&&Object.keys(a.params.on).forEach(h=>{a.on(h,a.params.on[h])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:n,params:r}=this,s=qn(n,`.${r.slideClass}, swiper-slide`),i=bl(s[0]);return bl(e)-i}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill==="row"&&(e=e%Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){const e=this,{slidesEl:n,params:r}=e;e.slides=qn(n,`.${r.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,n){const r=this;e=Math.min(Math.max(e,0),1);const s=r.minTranslate(),o=(r.maxTranslate()-s)*e+s;r.translateTo(o,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=e.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",n.join(" "))}getSlideClasses(e){const n=this;return n.destroyed?"":e.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=[];e.slides.forEach(r=>{const s=e.getSlideClasses(r);n.push({slideEl:r,classNames:s}),e.emit("_slideClass",r,s)}),e.emit("_slideClasses",n)}slidesPerViewDynamic(e,n){e===void 0&&(e="current"),n===void 0&&(n=!1);const r=this,{params:s,slides:i,slidesGrid:o,slidesSizesGrid:a,size:u,activeIndex:d}=r;let h=1;if(typeof s.slidesPerView=="number")return s.slidesPerView;if(s.centeredSlides){let p=i[d]?Math.ceil(i[d].swiperSlideSize):0,m;for(let b=d+1;b<i.length;b+=1)i[b]&&!m&&(p+=Math.ceil(i[b].swiperSlideSize),h+=1,p>u&&(m=!0));for(let b=d-1;b>=0;b-=1)i[b]&&!m&&(p+=i[b].swiperSlideSize,h+=1,p>u&&(m=!0))}else if(e==="current")for(let p=d+1;p<i.length;p+=1)(n?o[p]+a[p]-o[d]<u:o[p]-o[d]<u)&&(h+=1);else for(let p=d-1;p>=0;p-=1)o[d]-o[p]<u&&(h+=1);return h}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:n,params:r}=e;r.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&tu(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function s(){const o=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let i;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)s(),r.autoHeight&&e.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&e.isEnd&&!r.centeredSlides){const o=e.virtual&&r.virtual.enabled?e.virtual.slides:e.slides;i=e.slideTo(o.length-1,0,!1,!0)}else i=e.slideTo(e.activeIndex,0,!1,!0);i||s()}r.watchOverflow&&n!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,n){n===void 0&&(n=!0);const r=this,s=r.params.direction;return e||(e=s==="horizontal"?"vertical":"horizontal"),e===s||e!=="horizontal"&&e!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${s}`),r.el.classList.add(`${r.params.containerModifierClass}${e}`),r.emitContainerClasses(),r.params.direction=e,r.slides.forEach(i=>{e==="vertical"?i.style.width="":i.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(e){const n=this;n.rtl&&e==="rtl"||!n.rtl&&e==="ltr"||(n.rtl=e==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(e){const n=this;if(n.mounted)return!0;let r=e||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const s=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(s()):qn(r,s())[0])();return!o&&n.params.createElements&&(o=_l("div",n.params.wrapperClass),r.append(o),qn(r,`.${n.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(n,{el:r,wrapperEl:o,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:o,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||rs(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||rs(r,"direction")==="rtl"),wrongRTL:rs(o,"display")==="-webkit-box"}),!0}init(e){const n=this;if(n.initialized||n.mount(e)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const s=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&s.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),s.forEach(i=>{i.complete?tu(n,i):i.addEventListener("load",o=>{tu(n,o.target)})}),Sp(n),n.initialized=!0,Sp(n),n.emit("init"),n.emit("afterInit"),n}destroy(e,n){e===void 0&&(e=!0),n===void 0&&(n=!0);const r=this,{params:s,el:i,wrapperEl:o,slides:a}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),s.loop&&r.loopDestroy(),n&&(r.removeClasses(),i&&typeof i!="string"&&i.removeAttribute("style"),o&&o.removeAttribute("style"),a&&a.length&&a.forEach(u=>{u.classList.remove(s.slideVisibleClass,s.slideFullyVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass),u.removeAttribute("style"),u.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(u=>{r.off(u)}),e!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),Bj(r)),r.destroyed=!0),null}static extendDefaults(e){sn(Gh,e)}static get extendedDefaults(){return Gh}static get defaults(){return Tp}static installModule(e){ar.prototype.__modules__||(ar.prototype.__modules__=[]);const n=ar.prototype.__modules__;typeof e=="function"&&n.indexOf(e)<0&&n.push(e)}static use(e){return Array.isArray(e)?(e.forEach(n=>ar.installModule(n)),ar):(ar.installModule(e),ar)}};Object.keys(Wh).forEach(t=>{Object.keys(Wh[t]).forEach(e=>{wg.prototype[e]=Wh[t][e]})});wg.use([e4,t4]);const Gb=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function _i(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"&&!t.__swiper__}function mo(t,e){const n=["__proto__","constructor","prototype"];Object.keys(e).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof t[r]>"u"?t[r]=e[r]:_i(e[r])&&_i(t[r])&&Object.keys(e[r]).length>0?e[r].__swiper__?t[r]=e[r]:mo(t[r],e[r]):t[r]=e[r]})}function Kb(t){return t===void 0&&(t={}),t.navigation&&typeof t.navigation.nextEl>"u"&&typeof t.navigation.prevEl>"u"}function Qb(t){return t===void 0&&(t={}),t.pagination&&typeof t.pagination.el>"u"}function Yb(t){return t===void 0&&(t={}),t.scrollbar&&typeof t.scrollbar.el>"u"}function Xb(t){t===void 0&&(t="");const e=t.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return e.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function oM(t){return t===void 0&&(t=""),t?t.includes("swiper-wrapper")?t:`swiper-wrapper ${t}`:"swiper-wrapper"}function aM(t){let{swiper:e,slides:n,passedParams:r,changedParams:s,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:u}=t;const d=s.filter(x=>x!=="children"&&x!=="direction"&&x!=="wrapperClass"),{params:h,pagination:p,navigation:m,scrollbar:b,virtual:T,thumbs:P}=e;let N,E,y,v,I,O,L,S;s.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&!r.thumbs.swiper.destroyed&&h.thumbs&&(!h.thumbs.swiper||h.thumbs.swiper.destroyed)&&(N=!0),s.includes("controller")&&r.controller&&r.controller.control&&h.controller&&!h.controller.control&&(E=!0),s.includes("pagination")&&r.pagination&&(r.pagination.el||u)&&(h.pagination||h.pagination===!1)&&p&&!p.el&&(y=!0),s.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||a)&&(h.scrollbar||h.scrollbar===!1)&&b&&!b.el&&(v=!0),s.includes("navigation")&&r.navigation&&(r.navigation.prevEl||o)&&(r.navigation.nextEl||i)&&(h.navigation||h.navigation===!1)&&m&&!m.prevEl&&!m.nextEl&&(I=!0);const w=x=>{e[x]&&(e[x].destroy(),x==="navigation"?(e.isElement&&(e[x].prevEl.remove(),e[x].nextEl.remove()),h[x].prevEl=void 0,h[x].nextEl=void 0,e[x].prevEl=void 0,e[x].nextEl=void 0):(e.isElement&&e[x].el.remove(),h[x].el=void 0,e[x].el=void 0))};s.includes("loop")&&e.isElement&&(h.loop&&!r.loop?O=!0:!h.loop&&r.loop?L=!0:S=!0),d.forEach(x=>{if(_i(h[x])&&_i(r[x]))Object.assign(h[x],r[x]),(x==="navigation"||x==="pagination"||x==="scrollbar")&&"enabled"in r[x]&&!r[x].enabled&&w(x);else{const C=r[x];(C===!0||C===!1)&&(x==="navigation"||x==="pagination"||x==="scrollbar")?C===!1&&w(x):h[x]=r[x]}}),d.includes("controller")&&!E&&e.controller&&e.controller.control&&h.controller&&h.controller.control&&(e.controller.control=h.controller.control),s.includes("children")&&n&&T&&h.virtual.enabled?(T.slides=n,T.update(!0)):s.includes("virtual")&&T&&h.virtual.enabled&&(n&&(T.slides=n),T.update(!0)),s.includes("children")&&n&&h.loop&&(S=!0),N&&P.init()&&P.update(!0),E&&(e.controller.control=h.controller.control),y&&(e.isElement&&(!u||typeof u=="string")&&(u=document.createElement("div"),u.classList.add("swiper-pagination"),u.part.add("pagination"),e.el.appendChild(u)),u&&(h.pagination.el=u),p.init(),p.render(),p.update()),v&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(h.scrollbar.el=a),b.init(),b.updateSize(),b.setTranslate()),I&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),El(i,e.hostEl.constructor.nextButtonSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),El(o,e.hostEl.constructor.prevButtonSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(h.navigation.nextEl=i),o&&(h.navigation.prevEl=o),m.init(),m.update()),s.includes("allowSlideNext")&&(e.allowSlideNext=r.allowSlideNext),s.includes("allowSlidePrev")&&(e.allowSlidePrev=r.allowSlidePrev),s.includes("direction")&&e.changeDirection(r.direction,!1),(O||S)&&e.loopDestroy(),(L||S)&&e.loopCreate(),e.update()}function lM(t,e){t===void 0&&(t={}),e===void 0&&(e=!0);const n={on:{}},r={},s={};mo(n,Tp),n._emitClasses=!0,n.init=!1;const i={},o=Gb.map(u=>u.replace(/_/,"")),a=Object.assign({},t);return Object.keys(a).forEach(u=>{typeof t[u]>"u"||(o.indexOf(u)>=0?_i(t[u])?(n[u]={},s[u]={},mo(n[u],t[u]),mo(s[u],t[u])):(n[u]=t[u],s[u]=t[u]):u.search(/on[A-Z]/)===0&&typeof t[u]=="function"?e?r[`${u[2].toLowerCase()}${u.substr(3)}`]=t[u]:n.on[`${u[2].toLowerCase()}${u.substr(3)}`]=t[u]:i[u]=t[u])}),["navigation","pagination","scrollbar"].forEach(u=>{n[u]===!0&&(n[u]={}),n[u]===!1&&delete n[u]}),{params:n,passedParams:s,rest:i,events:r}}function cM(t,e){let{el:n,nextEl:r,prevEl:s,paginationEl:i,scrollbarEl:o,swiper:a}=t;Kb(e)&&r&&s&&(a.params.navigation.nextEl=r,a.originalParams.navigation.nextEl=r,a.params.navigation.prevEl=s,a.originalParams.navigation.prevEl=s),Qb(e)&&i&&(a.params.pagination.el=i,a.originalParams.pagination.el=i),Yb(e)&&o&&(a.params.scrollbar.el=o,a.originalParams.scrollbar.el=o),a.init(n)}function uM(t,e,n,r,s){const i=[];if(!e)return i;const o=u=>{i.indexOf(u)<0&&i.push(u)};if(n&&r){const u=r.map(s),d=n.map(s);u.join("")!==d.join("")&&o("children"),r.length!==n.length&&o("children")}return Gb.filter(u=>u[0]==="_").map(u=>u.replace(/_/,"")).forEach(u=>{if(u in t&&u in e)if(_i(t[u])&&_i(e[u])){const d=Object.keys(t[u]),h=Object.keys(e[u]);d.length!==h.length?o(u):(d.forEach(p=>{t[u][p]!==e[u][p]&&o(u)}),h.forEach(p=>{t[u][p]!==e[u][p]&&o(u)}))}else t[u]!==e[u]&&o(u)}),i}const dM=t=>{!t||t.destroyed||!t.params.virtual||t.params.virtual&&!t.params.virtual.enabled||(t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.emit("_virtualUpdated"),t.parallax&&t.params.parallax&&t.params.parallax.enabled&&t.parallax.setTranslate())};function nd(){return nd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},nd.apply(this,arguments)}function Jb(t){return t.type&&t.type.displayName&&t.type.displayName.includes("SwiperSlide")}function Zb(t){const e=[];return Re.Children.toArray(t).forEach(n=>{Jb(n)?e.push(n):n.props&&n.props.children&&Zb(n.props.children).forEach(r=>e.push(r))}),e}function hM(t){const e=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Re.Children.toArray(t).forEach(r=>{if(Jb(r))e.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const s=Zb(r.props.children);s.length>0?s.forEach(i=>e.push(i)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:e,slots:n}}function fM(t,e,n){if(!n)return null;const r=h=>{let p=h;return h<0?p=e.length+h:p>=e.length&&(p=p-e.length),p},s=t.isHorizontal()?{[t.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:i,to:o}=n,a=t.params.loop?-e.length:0,u=t.params.loop?e.length*2:e.length,d=[];for(let h=a;h<u;h+=1)h>=i&&h<=o&&d.push(e[r(h)]);return d.map((h,p)=>Re.cloneElement(h,{swiper:t,style:s,key:h.props.virtualIndex||h.key||`slide-${p}`}))}function Wa(t,e){return typeof window>"u"?j.useEffect(t,e):j.useLayoutEffect(t,e)}const Q0=j.createContext(null),pM=j.createContext(null),eE=j.forwardRef(function(t,e){let{className:n,tag:r="div",wrapperTag:s="div",children:i,onSwiper:o,...a}=t===void 0?{}:t,u=!1;const[d,h]=j.useState("swiper"),[p,m]=j.useState(null),[b,T]=j.useState(!1),P=j.useRef(!1),N=j.useRef(null),E=j.useRef(null),y=j.useRef(null),v=j.useRef(null),I=j.useRef(null),O=j.useRef(null),L=j.useRef(null),S=j.useRef(null),{params:w,passedParams:x,rest:C,events:k}=lM(a),{slides:M,slots:_}=hM(i),H=()=>{T(!b)};Object.assign(w.on,{_containerClasses(B,Q){h(Q)}});const q=()=>{Object.assign(w.on,k),u=!0;const B={...w};if(delete B.wrapperClass,E.current=new wg(B),E.current.virtual&&E.current.params.virtual.enabled){E.current.virtual.slides=M;const Q={cache:!1,slides:M,renderExternal:m,renderExternalUpdate:!1};mo(E.current.params.virtual,Q),mo(E.current.originalParams.virtual,Q)}};N.current||q(),E.current&&E.current.on("_beforeBreakpoint",H);const V=()=>{u||!k||!E.current||Object.keys(k).forEach(B=>{E.current.on(B,k[B])})},F=()=>{!k||!E.current||Object.keys(k).forEach(B=>{E.current.off(B,k[B])})};j.useEffect(()=>()=>{E.current&&E.current.off("_beforeBreakpoint",H)}),j.useEffect(()=>{!P.current&&E.current&&(E.current.emitSlidesClasses(),P.current=!0)}),Wa(()=>{if(e&&(e.current=N.current),!!N.current)return E.current.destroyed&&q(),cM({el:N.current,nextEl:I.current,prevEl:O.current,paginationEl:L.current,scrollbarEl:S.current,swiper:E.current},w),o&&!E.current.destroyed&&o(E.current),()=>{E.current&&!E.current.destroyed&&E.current.destroy(!0,!1)}},[]),Wa(()=>{V();const B=uM(x,y.current,M,v.current,Q=>Q.key);return y.current=x,v.current=M,B.length&&E.current&&!E.current.destroyed&&aM({swiper:E.current,slides:M,passedParams:x,changedParams:B,nextEl:I.current,prevEl:O.current,scrollbarEl:S.current,paginationEl:L.current}),()=>{F()}}),Wa(()=>{dM(E.current)},[p]);function D(){return w.virtual?fM(E.current,M,p):M.map((B,Q)=>Re.cloneElement(B,{swiper:E.current,swiperSlideIndex:Q}))}return Re.createElement(r,nd({ref:N,className:Xb(`${d}${n?` ${n}`:""}`)},C),Re.createElement(pM.Provider,{value:E.current},_["container-start"],Re.createElement(s,{className:oM(w.wrapperClass)},_["wrapper-start"],D(),_["wrapper-end"]),Kb(w)&&Re.createElement(Re.Fragment,null,Re.createElement("div",{ref:O,className:"swiper-button-prev"}),Re.createElement("div",{ref:I,className:"swiper-button-next"})),Yb(w)&&Re.createElement("div",{ref:S,className:"swiper-scrollbar"}),Qb(w)&&Re.createElement("div",{ref:L,className:"swiper-pagination"}),_["container-end"]))});eE.displayName="Swiper";const tE=j.forwardRef(function(t,e){let{tag:n="div",children:r,className:s="",swiper:i,zoom:o,lazy:a,virtualIndex:u,swiperSlideIndex:d,...h}=t===void 0?{}:t;const p=j.useRef(null),[m,b]=j.useState("swiper-slide"),[T,P]=j.useState(!1);function N(I,O,L){O===p.current&&b(L)}Wa(()=>{if(typeof d<"u"&&(p.current.swiperSlideIndex=d),e&&(e.current=p.current),!(!p.current||!i)){if(i.destroyed){m!=="swiper-slide"&&b("swiper-slide");return}return i.on("_slideClass",N),()=>{i&&i.off("_slideClass",N)}}}),Wa(()=>{i&&p.current&&!i.destroyed&&b(i.getSlideClasses(p.current))},[i]);const E={isActive:m.indexOf("swiper-slide-active")>=0,isVisible:m.indexOf("swiper-slide-visible")>=0,isPrev:m.indexOf("swiper-slide-prev")>=0,isNext:m.indexOf("swiper-slide-next")>=0},y=()=>typeof r=="function"?r(E):r,v=()=>{P(!0)};return Re.createElement(n,nd({ref:p,className:Xb(`${m}${s?` ${s}`:""}`),"data-swiper-slide-index":u,onLoad:v},h),o&&Re.createElement(Q0.Provider,{value:E},Re.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},y(),a&&!T&&Re.createElement("div",{className:"swiper-lazy-preloader"}))),!o&&Re.createElement(Q0.Provider,{value:E},y(),a&&!T&&Re.createElement("div",{className:"swiper-lazy-preloader"})))});tE.displayName="SwiperSlide";function mM(t){let{swiper:e,extendParams:n,on:r,emit:s}=t;const i=Mn(),o=St();e.keyboard={enabled:!1},n({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function a(h){if(!e.enabled)return;const{rtlTranslate:p}=e;let m=h;m.originalEvent&&(m=m.originalEvent);const b=m.keyCode||m.charCode,T=e.params.keyboard.pageUpDown,P=T&&b===33,N=T&&b===34,E=b===37,y=b===39,v=b===38,I=b===40;if(!e.allowSlideNext&&(e.isHorizontal()&&y||e.isVertical()&&I||N)||!e.allowSlidePrev&&(e.isHorizontal()&&E||e.isVertical()&&v||P))return!1;if(!(m.shiftKey||m.altKey||m.ctrlKey||m.metaKey)&&!(i.activeElement&&(i.activeElement.isContentEditable||i.activeElement.nodeName&&(i.activeElement.nodeName.toLowerCase()==="input"||i.activeElement.nodeName.toLowerCase()==="textarea")))){if(e.params.keyboard.onlyInViewport&&(P||N||E||y||v||I)){let O=!1;if(td(e.el,`.${e.params.slideClass}, swiper-slide`).length>0&&td(e.el,`.${e.params.slideActiveClass}`).length===0)return;const L=e.el,S=L.clientWidth,w=L.clientHeight,x=o.innerWidth,C=o.innerHeight,k=Kj(L);p&&(k.left-=L.scrollLeft);const M=[[k.left,k.top],[k.left+S,k.top],[k.left,k.top+w],[k.left+S,k.top+w]];for(let _=0;_<M.length;_+=1){const H=M[_];if(H[0]>=0&&H[0]<=x&&H[1]>=0&&H[1]<=C){if(H[0]===0&&H[1]===0)continue;O=!0}}if(!O)return}e.isHorizontal()?((P||N||E||y)&&(m.preventDefault?m.preventDefault():m.returnValue=!1),((N||y)&&!p||(P||E)&&p)&&e.slideNext(),((P||E)&&!p||(N||y)&&p)&&e.slidePrev()):((P||N||v||I)&&(m.preventDefault?m.preventDefault():m.returnValue=!1),(N||I)&&e.slideNext(),(P||v)&&e.slidePrev()),s("keyPress",b)}}function u(){e.keyboard.enabled||(i.addEventListener("keydown",a),e.keyboard.enabled=!0)}function d(){e.keyboard.enabled&&(i.removeEventListener("keydown",a),e.keyboard.enabled=!1)}r("init",()=>{e.params.keyboard.enabled&&u()}),r("destroy",()=>{e.keyboard.enabled&&d()}),Object.assign(e.keyboard,{enable:u,disable:d})}function gM(t,e,n,r){return t.params.createElements&&Object.keys(r).forEach(s=>{if(!n[s]&&n.auto===!0){let i=qn(t.el,`.${r[s]}`)[0];i||(i=_l("div",r[s]),i.className=r[s],t.el.append(i)),n[s]=i,e[s]=i}}),n}function Jr(t){return t===void 0&&(t=""),`.${t.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function yM(t){let{swiper:e,extendParams:n,on:r,emit:s}=t;const i="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:y=>y,formatFractionTotal:y=>y,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function u(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function d(y,v){const{bulletActiveClass:I}=e.params.pagination;y&&(y=y[`${v==="prev"?"previous":"next"}ElementSibling`],y&&(y.classList.add(`${I}-${v}`),y=y[`${v==="prev"?"previous":"next"}ElementSibling`],y&&y.classList.add(`${I}-${v}-${v}`)))}function h(y,v,I){if(y=y%I,v=v%I,v===y+1)return"next";if(v===y-1)return"previous"}function p(y){const v=y.target.closest(Jr(e.params.pagination.bulletClass));if(!v)return;y.preventDefault();const I=bl(v)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===I)return;const O=h(e.realIndex,I,e.slides.length);O==="next"?e.slideNext():O==="previous"?e.slidePrev():e.slideToLoop(I)}else e.slideTo(I)}function m(){const y=e.rtl,v=e.params.pagination;if(u())return;let I=e.pagination.el;I=Ce(I);let O,L;const S=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,w=e.params.loop?Math.ceil(S/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(L=e.previousRealIndex||0,O=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(O=e.snapIndex,L=e.previousSnapIndex):(L=e.previousIndex||0,O=e.activeIndex||0),v.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const x=e.pagination.bullets;let C,k,M;if(v.dynamicBullets&&(o=Ep(x[0],e.isHorizontal()?"width":"height",!0),I.forEach(_=>{_.style[e.isHorizontal()?"width":"height"]=`${o*(v.dynamicMainBullets+4)}px`}),v.dynamicMainBullets>1&&L!==void 0&&(a+=O-(L||0),a>v.dynamicMainBullets-1?a=v.dynamicMainBullets-1:a<0&&(a=0)),C=Math.max(O-a,0),k=C+(Math.min(x.length,v.dynamicMainBullets)-1),M=(k+C)/2),x.forEach(_=>{const H=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(q=>`${v.bulletActiveClass}${q}`)].map(q=>typeof q=="string"&&q.includes(" ")?q.split(" "):q).flat();_.classList.remove(...H)}),I.length>1)x.forEach(_=>{const H=bl(_);H===O?_.classList.add(...v.bulletActiveClass.split(" ")):e.isElement&&_.setAttribute("part","bullet"),v.dynamicBullets&&(H>=C&&H<=k&&_.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),H===C&&d(_,"prev"),H===k&&d(_,"next"))});else{const _=x[O];if(_&&_.classList.add(...v.bulletActiveClass.split(" ")),e.isElement&&x.forEach((H,q)=>{H.setAttribute("part",q===O?"bullet-active":"bullet")}),v.dynamicBullets){const H=x[C],q=x[k];for(let V=C;V<=k;V+=1)x[V]&&x[V].classList.add(...`${v.bulletActiveClass}-main`.split(" "));d(H,"prev"),d(q,"next")}}if(v.dynamicBullets){const _=Math.min(x.length,v.dynamicMainBullets+4),H=(o*_-o)/2-M*o,q=y?"right":"left";x.forEach(V=>{V.style[e.isHorizontal()?q:"top"]=`${H}px`})}}I.forEach((x,C)=>{if(v.type==="fraction"&&(x.querySelectorAll(Jr(v.currentClass)).forEach(k=>{k.textContent=v.formatFractionCurrent(O+1)}),x.querySelectorAll(Jr(v.totalClass)).forEach(k=>{k.textContent=v.formatFractionTotal(w)})),v.type==="progressbar"){let k;v.progressbarOpposite?k=e.isHorizontal()?"vertical":"horizontal":k=e.isHorizontal()?"horizontal":"vertical";const M=(O+1)/w;let _=1,H=1;k==="horizontal"?_=M:H=M,x.querySelectorAll(Jr(v.progressbarFillClass)).forEach(q=>{q.style.transform=`translate3d(0,0,0) scaleX(${_}) scaleY(${H})`,q.style.transitionDuration=`${e.params.speed}ms`})}v.type==="custom"&&v.renderCustom?(El(x,v.renderCustom(e,O+1,w)),C===0&&s("paginationRender",x)):(C===0&&s("paginationRender",x),s("paginationUpdate",x)),e.params.watchOverflow&&e.enabled&&x.classList[e.isLocked?"add":"remove"](v.lockClass)})}function b(){const y=e.params.pagination;if(u())return;const v=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let I=e.pagination.el;I=Ce(I);let O="";if(y.type==="bullets"){let L=e.params.loop?Math.ceil(v/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&L>v&&(L=v);for(let S=0;S<L;S+=1)y.renderBullet?O+=y.renderBullet.call(e,S,y.bulletClass):O+=`<${y.bulletElement} ${e.isElement?'part="bullet"':""} class="${y.bulletClass}"></${y.bulletElement}>`}y.type==="fraction"&&(y.renderFraction?O=y.renderFraction.call(e,y.currentClass,y.totalClass):O=`<span class="${y.currentClass}"></span> / <span class="${y.totalClass}"></span>`),y.type==="progressbar"&&(y.renderProgressbar?O=y.renderProgressbar.call(e,y.progressbarFillClass):O=`<span class="${y.progressbarFillClass}"></span>`),e.pagination.bullets=[],I.forEach(L=>{y.type!=="custom"&&El(L,O||""),y.type==="bullets"&&e.pagination.bullets.push(...L.querySelectorAll(Jr(y.bulletClass)))}),y.type!=="custom"&&s("paginationRender",I[0])}function T(){e.params.pagination=gM(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const y=e.params.pagination;if(!y.el)return;let v;typeof y.el=="string"&&e.isElement&&(v=e.el.querySelector(y.el)),!v&&typeof y.el=="string"&&(v=[...document.querySelectorAll(y.el)]),v||(v=y.el),!(!v||v.length===0)&&(e.params.uniqueNavElements&&typeof y.el=="string"&&Array.isArray(v)&&v.length>1&&(v=[...e.el.querySelectorAll(y.el)],v.length>1&&(v=v.find(I=>td(I,".swiper")[0]===e.el))),Array.isArray(v)&&v.length===1&&(v=v[0]),Object.assign(e.pagination,{el:v}),v=Ce(v),v.forEach(I=>{y.type==="bullets"&&y.clickable&&I.classList.add(...(y.clickableClass||"").split(" ")),I.classList.add(y.modifierClass+y.type),I.classList.add(e.isHorizontal()?y.horizontalClass:y.verticalClass),y.type==="bullets"&&y.dynamicBullets&&(I.classList.add(`${y.modifierClass}${y.type}-dynamic`),a=0,y.dynamicMainBullets<1&&(y.dynamicMainBullets=1)),y.type==="progressbar"&&y.progressbarOpposite&&I.classList.add(y.progressbarOppositeClass),y.clickable&&I.addEventListener("click",p),e.enabled||I.classList.add(y.lockClass)}))}function P(){const y=e.params.pagination;if(u())return;let v=e.pagination.el;v&&(v=Ce(v),v.forEach(I=>{I.classList.remove(y.hiddenClass),I.classList.remove(y.modifierClass+y.type),I.classList.remove(e.isHorizontal()?y.horizontalClass:y.verticalClass),y.clickable&&(I.classList.remove(...(y.clickableClass||"").split(" ")),I.removeEventListener("click",p))})),e.pagination.bullets&&e.pagination.bullets.forEach(I=>I.classList.remove(...y.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const y=e.params.pagination;let{el:v}=e.pagination;v=Ce(v),v.forEach(I=>{I.classList.remove(y.horizontalClass,y.verticalClass),I.classList.add(e.isHorizontal()?y.horizontalClass:y.verticalClass)})}),r("init",()=>{e.params.pagination.enabled===!1?E():(T(),b(),m())}),r("activeIndexChange",()=>{typeof e.snapIndex>"u"&&m()}),r("snapIndexChange",()=>{m()}),r("snapGridLengthChange",()=>{b(),m()}),r("destroy",()=>{P()}),r("enable disable",()=>{let{el:y}=e.pagination;y&&(y=Ce(y),y.forEach(v=>v.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),r("lock unlock",()=>{m()}),r("click",(y,v)=>{const I=v.target,O=Ce(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&O&&O.length>0&&!I.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&I===e.navigation.nextEl||e.navigation.prevEl&&I===e.navigation.prevEl))return;const L=O[0].classList.contains(e.params.pagination.hiddenClass);s(L===!0?"paginationShow":"paginationHide"),O.forEach(S=>S.classList.toggle(e.params.pagination.hiddenClass))}});const N=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:y}=e.pagination;y&&(y=Ce(y),y.forEach(v=>v.classList.remove(e.params.pagination.paginationDisabledClass))),T(),b(),m()},E=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:y}=e.pagination;y&&(y=Ce(y),y.forEach(v=>v.classList.add(e.params.pagination.paginationDisabledClass))),P()};Object.assign(e.pagination,{enable:N,disable:E,render:b,update:m,init:T,destroy:P})}function vM(t){let{swiper:e,extendParams:n,on:r}=t;n({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,containerRole:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null,scrollOnFocus:!0}}),e.a11y={clicked:!1};let s=null,i,o,a=new Date().getTime();function u(F){const D=s;D.length!==0&&El(D,F)}function d(F){F===void 0&&(F=16);const D=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(F).replace(/x/g,D)}function h(F){F=Ce(F),F.forEach(D=>{D.setAttribute("tabIndex","0")})}function p(F){F=Ce(F),F.forEach(D=>{D.setAttribute("tabIndex","-1")})}function m(F,D){F=Ce(F),F.forEach(B=>{B.setAttribute("role",D)})}function b(F,D){F=Ce(F),F.forEach(B=>{B.setAttribute("aria-roledescription",D)})}function T(F,D){F=Ce(F),F.forEach(B=>{B.setAttribute("aria-controls",D)})}function P(F,D){F=Ce(F),F.forEach(B=>{B.setAttribute("aria-label",D)})}function N(F,D){F=Ce(F),F.forEach(B=>{B.setAttribute("id",D)})}function E(F,D){F=Ce(F),F.forEach(B=>{B.setAttribute("aria-live",D)})}function y(F){F=Ce(F),F.forEach(D=>{D.setAttribute("aria-disabled",!0)})}function v(F){F=Ce(F),F.forEach(D=>{D.setAttribute("aria-disabled",!1)})}function I(F){if(F.keyCode!==13&&F.keyCode!==32)return;const D=e.params.a11y,B=F.target;if(!(e.pagination&&e.pagination.el&&(B===e.pagination.el||e.pagination.el.contains(F.target))&&!F.target.matches(Jr(e.params.pagination.bulletClass)))){if(e.navigation&&e.navigation.prevEl&&e.navigation.nextEl){const Q=Ce(e.navigation.prevEl);Ce(e.navigation.nextEl).includes(B)&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?u(D.lastSlideMessage):u(D.nextSlideMessage)),Q.includes(B)&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?u(D.firstSlideMessage):u(D.prevSlideMessage))}e.pagination&&B.matches(Jr(e.params.pagination.bulletClass))&&B.click()}}function O(){if(e.params.loop||e.params.rewind||!e.navigation)return;const{nextEl:F,prevEl:D}=e.navigation;D&&(e.isBeginning?(y(D),p(D)):(v(D),h(D))),F&&(e.isEnd?(y(F),p(F)):(v(F),h(F)))}function L(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function S(){return L()&&e.params.pagination.clickable}function w(){const F=e.params.a11y;L()&&e.pagination.bullets.forEach(D=>{e.params.pagination.clickable&&(h(D),e.params.pagination.renderBullet||(m(D,"button"),P(D,F.paginationBulletMessage.replace(/\{\{index\}\}/,bl(D)+1)))),D.matches(Jr(e.params.pagination.bulletActiveClass))?D.setAttribute("aria-current","true"):D.removeAttribute("aria-current")})}const x=(F,D,B)=>{h(F),F.tagName!=="BUTTON"&&(m(F,"button"),F.addEventListener("keydown",I)),P(F,B),T(F,D)},C=F=>{o&&o!==F.target&&!o.contains(F.target)&&(i=!0),e.a11y.clicked=!0},k=()=>{i=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.destroyed||(e.a11y.clicked=!1)})})},M=F=>{a=new Date().getTime()},_=F=>{if(e.a11y.clicked||!e.params.a11y.scrollOnFocus||new Date().getTime()-a<100)return;const D=F.target.closest(`.${e.params.slideClass}, swiper-slide`);if(!D||!e.slides.includes(D))return;o=D;const B=e.slides.indexOf(D)===e.activeIndex,Q=e.params.watchSlidesProgress&&e.visibleSlides&&e.visibleSlides.includes(D);B||Q||F.sourceCapabilities&&F.sourceCapabilities.firesTouchEvents||(e.isHorizontal()?e.el.scrollLeft=0:e.el.scrollTop=0,requestAnimationFrame(()=>{i||(e.params.loop?e.slideToLoop(e.getSlideIndexWhenGrid(parseInt(D.getAttribute("data-swiper-slide-index"))),0):e.slideTo(e.getSlideIndexWhenGrid(e.slides.indexOf(D)),0),i=!1)}))},H=()=>{const F=e.params.a11y;F.itemRoleDescriptionMessage&&b(e.slides,F.itemRoleDescriptionMessage),F.slideRole&&m(e.slides,F.slideRole);const D=e.slides.length;F.slideLabelMessage&&e.slides.forEach((B,Q)=>{const oe=e.params.loop?parseInt(B.getAttribute("data-swiper-slide-index"),10):Q,re=F.slideLabelMessage.replace(/\{\{index\}\}/,oe+1).replace(/\{\{slidesLength\}\}/,D);P(B,re)})},q=()=>{const F=e.params.a11y;e.el.append(s);const D=e.el;F.containerRoleDescriptionMessage&&b(D,F.containerRoleDescriptionMessage),F.containerMessage&&P(D,F.containerMessage),F.containerRole&&m(D,F.containerRole);const B=e.wrapperEl,Q=F.id||B.getAttribute("id")||`swiper-wrapper-${d(16)}`,oe=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";N(B,Q),E(B,oe),H();let{nextEl:re,prevEl:Ve}=e.navigation?e.navigation:{};re=Ce(re),Ve=Ce(Ve),re&&re.forEach(Fe=>x(Fe,Q,F.nextSlideMessage)),Ve&&Ve.forEach(Fe=>x(Fe,Q,F.prevSlideMessage)),S()&&Ce(e.pagination.el).forEach(Le=>{Le.addEventListener("keydown",I)}),Mn().addEventListener("visibilitychange",M),e.el.addEventListener("focus",_,!0),e.el.addEventListener("focus",_,!0),e.el.addEventListener("pointerdown",C,!0),e.el.addEventListener("pointerup",k,!0)};function V(){s&&s.remove();let{nextEl:F,prevEl:D}=e.navigation?e.navigation:{};F=Ce(F),D=Ce(D),F&&F.forEach(Q=>Q.removeEventListener("keydown",I)),D&&D.forEach(Q=>Q.removeEventListener("keydown",I)),S()&&Ce(e.pagination.el).forEach(oe=>{oe.removeEventListener("keydown",I)}),Mn().removeEventListener("visibilitychange",M),e.el&&typeof e.el!="string"&&(e.el.removeEventListener("focus",_,!0),e.el.removeEventListener("pointerdown",C,!0),e.el.removeEventListener("pointerup",k,!0))}r("beforeInit",()=>{s=_l("span",e.params.a11y.notificationClass),s.setAttribute("aria-live","assertive"),s.setAttribute("aria-atomic","true")}),r("afterInit",()=>{e.params.a11y.enabled&&q()}),r("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{e.params.a11y.enabled&&H()}),r("fromEdge toEdge afterInit lock unlock",()=>{e.params.a11y.enabled&&O()}),r("paginationUpdate",()=>{e.params.a11y.enabled&&w()}),r("destroy",()=>{e.params.a11y.enabled&&V()})}const wM=({className:t=""})=>c.jsx("svg",{viewBox:"0 0 24 24",className:t,"aria-hidden":"true",children:c.jsx("path",{d:"M4 9V4h5M20 15v5h-5M15 4h5v5M4 15v5h5",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});function kc({text:t,align:e="start"}){return c.jsx("div",{className:["absolute top-3 z-20 select-none pointer-events-none",e==="start"?"start-3":"end-3","rounded-full px-3 py-1.5 text-xs sm:text-sm font-extrabold","bg-white/85 text-slate-900 border border-slate-200","shadow-sm backdrop-blur-md"].join(" "),children:t})}function xM(t){j.useEffect(()=>{if(!t)return;const e=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e||""}},[t])}function _M({beforeImage:t,afterImage:e,aspectClass:n="aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/9]",ariaLabel:r}){const{t:s,lang:i}=Mt(),o=j.useMemo(()=>i==="ar"||i==="he",[i]),a=j.useCallback((L,S,w,x)=>{const C=s==null?void 0:s[L];return typeof C=="string"&&C.trim()?C:i==="he"?x??w??S:i==="en"?w??S??x:S??w??x},[s,i]),u=a("ba_before","قبل","Before","לפני"),d=a("ba_after","بعد","After","אחרי"),h=j.useRef(null),[p,m]=j.useState(!1),[b,T]=j.useState(!1);xM(p||b);const P=j.useCallback(()=>T(!1),[]),N=j.useCallback(()=>T(!0),[]),E=j.useCallback(async()=>{var S;const L=h.current;if(L){if(document.fullscreenElement){try{await((S=document.exitFullscreen)==null?void 0:S.call(document))}catch{}m(!1);return}try{if(L.requestFullscreen){await L.requestFullscreen(),m(!0);return}N()}catch{N()}}},[N]);j.useEffect(()=>{const L=()=>{document.fullscreenElement||m(!1)};return document.addEventListener("fullscreenchange",L),()=>document.removeEventListener("fullscreenchange",L)},[]),j.useEffect(()=>{const L=S=>{var w;S.key==="Escape"&&(b&&T(!1),document.fullscreenElement&&((w=document.exitFullscreen)==null||w.call(document)))};return document.addEventListener("keydown",L),()=>document.removeEventListener("keydown",L)},[b]);const y=j.useMemo(()=>r||a("ba_aria","قبل / بعد","Before / After","לפני / אחרי"),[r,a]),v=j.useMemo(()=>a("ba_zoom","تكبير","Zoom","הגדלה"),[a]),I=j.useMemo(()=>a("ba_close","إغلاق","Close","סגור"),[a]),O=L=>{L.stopPropagation(),E()};return c.jsxs(c.Fragment,{children:[c.jsxs("div",{ref:h,className:["relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm",n,p?"fixed inset-0 z-[9999] rounded-none border-0":""].join(" "),dir:o?"rtl":"ltr","aria-label":y,style:{WebkitTapHighlightColor:"transparent"},children:[c.jsx("button",{type:"button",onClick:O,className:"absolute top-2 end-2 z-30 h-10 w-10 rounded-full bg-black/45 text-white backdrop-blur-md flex items-center justify-center hover:bg-black/55 transition","aria-label":p||b?I:v,children:c.jsx(wM,{className:"w-5 h-5"})}),c.jsxs("div",{className:"absolute inset-0 grid grid-cols-2",children:[c.jsxs("button",{type:"button",onClick:O,className:"relative overflow-hidden text-start cursor-zoom-in","aria-label":`${u} - ${v}`,children:[c.jsx(kc,{text:u,align:o?"end":"start"}),c.jsx("img",{src:t,alt:u,draggable:!1,loading:"lazy",decoding:"async",className:"w-full h-full object-cover",sizes:"(max-width: 640px) 50vw, 35vw"}),c.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 via-black/5 to-transparent","aria-hidden":"true"})]}),c.jsxs("button",{type:"button",onClick:O,className:"relative overflow-hidden text-start cursor-zoom-in","aria-label":`${d} - ${v}`,children:[c.jsx(kc,{text:d,align:o?"start":"end"}),c.jsx("img",{src:e,alt:d,draggable:!1,loading:"lazy",decoding:"async",className:"w-full h-full object-cover",sizes:"(max-width: 640px) 50vw, 35vw"}),c.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 via-black/5 to-transparent","aria-hidden":"true"})]})]}),c.jsxs("div",{className:"pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 z-20",children:[c.jsx("div",{className:"absolute inset-y-0 left-1/2 -translate-x-1/2 w-10 bg-gradient-to-r from-black/10 via-black/0 to-black/10"}),c.jsx("div",{className:"absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-white/80"})]})]}),b&&c.jsxs("div",{className:"fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 backdrop-blur-md",onClick:P,role:"dialog","aria-modal":"true","aria-label":a("ba_previewAria","معاينة قبل وبعد","Before/After preview","תצוגה לפני/אחרי"),children:[c.jsx("button",{type:"button",onClick:L=>{L.stopPropagation(),P()},className:"absolute top-5 end-5 text-white hover:text-yellow-400 transition","aria-label":I,children:c.jsx(xd,{className:"w-7 h-7"})}),c.jsx("div",{className:"w-[94vw] max-w-5xl bg-white/95 border border-white/20 rounded-3xl overflow-hidden shadow-2xl",onClick:L=>L.stopPropagation(),children:c.jsxs("div",{className:"relative w-full aspect-[4/5] sm:aspect-[16/9] grid grid-cols-2",children:[c.jsxs("div",{className:"relative overflow-hidden",children:[c.jsx(kc,{text:u,align:o?"end":"start"}),c.jsx("img",{src:t,alt:u,className:"w-full h-full object-cover",draggable:!1,loading:"eager",decoding:"async"})]}),c.jsxs("div",{className:"relative overflow-hidden",children:[c.jsx(kc,{text:d,align:o?"start":"end"}),c.jsx("img",{src:e,alt:d,className:"w-full h-full object-cover",draggable:!1,loading:"eager",decoding:"async"})]}),c.jsxs("div",{className:"pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 z-20",children:[c.jsx("div",{className:"absolute inset-y-0 left-1/2 -translate-x-1/2 w-10 bg-gradient-to-r from-black/10 via-black/0 to-black/10"}),c.jsx("div",{className:"absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-white/80"})]})]})})]})]})}function bM(t){return t==="he"?{title:"לפני / אחרי",subtitle:"השוואה ברורה בין התוצאה לפני ואחרי הניקוי.",previous:"התוצאה הקודמת",next:"התוצאה הבאה",counter:(e,n)=>`${e} מתוך ${n}`,swipeHint:"החליקו לצדדים כדי לראות תוצאות נוספות",carouselLabel:"גלריית תוצאות לפני ואחרי",resultLabel:e=>`תוצאת ניקוי מספר ${e}`}:t==="en"?{title:"Before / After",subtitle:"A clear comparison of the result before and after cleaning.",previous:"Previous result",next:"Next result",counter:(e,n)=>`${e} of ${n}`,swipeHint:"Swipe sideways to see more results",carouselLabel:"Before and after results gallery",resultLabel:e=>`Cleaning result ${e}`}:{title:"قبل / بعد",subtitle:"مقارنة واضحة للنتيجة قبل التنظيف وبعده.",previous:"النتيجة السابقة",next:"النتيجة التالية",counter:(e,n)=>`${e} من ${n}`,swipeHint:"اسحب لليمين أو اليسار لمشاهدة نتائج إضافية",carouselLabel:"معرض نتائج قبل وبعد التنظيف",resultLabel:e=>`نتيجة التنظيف رقم ${e}`}}function EM({items:t,pairs:e,hideDescription:n=!1}){const{lang:r,isRTL:s}=Mt(),i=j.useRef(null),[o,a]=j.useState(0),u=j.useMemo(()=>bM(r),[r]),d=j.useMemo(()=>Array.isArray(t)?t.filter(N=>(N==null?void 0:N.before)&&(N==null?void 0:N.after)):Array.isArray(e)?e.filter(N=>(N==null?void 0:N.before)&&(N==null?void 0:N.after)):[],[t,e]),h=d.length,p=h>1,m=j.useCallback(()=>{const N=i.current;!N||!p||N.slidePrev()},[p]),b=j.useCallback(()=>{const N=i.current;!N||!p||N.slideNext()},[p]);if(!h)return null;const T=s?Kf:Gf,P=s?Gf:Kf;return c.jsxs("section",{className:"lumora-before-after-carousel mt-2",dir:s?"rtl":"ltr","aria-label":u.carouselLabel,children:[n?null:c.jsxs("header",{className:"mx-auto mb-5 max-w-2xl text-center",children:[c.jsx("h3",{className:"text-xl font-black text-slate-950 sm:text-2xl",children:u.title}),c.jsx("p",{className:"mt-2 text-sm font-medium leading-6 text-slate-600 sm:text-base",children:u.subtitle})]}),c.jsxs("div",{className:"relative",children:[p?c.jsx("div",{className:`\r
              absolute start-3 top-3 z-40\r
              inline-flex min-h-9 items-center justify-center\r
              rounded-full border border-white/20\r
              bg-slate-950/60 px-3\r
              text-xs font-extrabold text-white\r
              shadow-lg backdrop-blur-md\r
              sm:start-4 sm:top-4\r
            `,"aria-live":"polite","aria-atomic":"true",children:u.counter(o+1,h)}):null,c.jsx(eE,{modules:[yM,vM,mM],onSwiper:N=>{i.current=N,a(N.realIndex||0)},onSlideChange:N=>{a(N.realIndex)},spaceBetween:20,slidesPerView:1,loop:p,allowTouchMove:p,grabCursor:p,keyboard:{enabled:p,onlyInViewport:!0},pagination:p?{clickable:!0,dynamicBullets:h>7}:!1,speed:420,threshold:5,resistanceRatio:.7,watchOverflow:!0,observer:!0,observeParents:!0,className:"overflow-hidden rounded-3xl","aria-label":u.carouselLabel,style:{"--swiper-pagination-bullet-size":"9px","--swiper-pagination-bullet-horizontal-gap":"5px"},children:d.map((N,E)=>c.jsx(tE,{"aria-label":u.resultLabel(E+1),children:c.jsx(_M,{beforeImage:N.before,afterImage:N.after})},`${N.before}-${N.after}-${E}`))},r+":"+d.map(N=>N.id||"").join("|")),p?c.jsxs(c.Fragment,{children:[c.jsx("button",{type:"button",onClick:m,className:`\r
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
              `,"aria-label":u.previous,children:c.jsx(T,{className:"h-6 w-6",strokeWidth:2.5,"aria-hidden":"true"})}),c.jsx("button",{type:"button",onClick:b,className:`\r
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
              `,"aria-label":u.next,children:c.jsx(P,{className:"h-6 w-6",strokeWidth:2.5,"aria-hidden":"true"})})]}):null]}),p?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:`\r
              mt-3 flex items-center justify-center gap-2\r
              text-center text-xs font-bold text-slate-500\r
              sm:hidden\r
            `,children:[c.jsx(D2,{className:"h-4 w-4 shrink-0 text-blue-600","aria-hidden":"true"}),c.jsx("span",{children:u.swipeHint})]}),c.jsxs("div",{className:"mt-3 grid grid-cols-2 gap-2 sm:hidden",children:[c.jsxs("button",{type:"button",onClick:m,className:`\r
                inline-flex min-h-11 items-center justify-center gap-2\r
                rounded-2xl border border-slate-200\r
                bg-white px-3 text-sm font-extrabold text-slate-700\r
                shadow-sm transition\r
                active:scale-[0.98] active:bg-slate-50\r
                focus-visible:outline-none\r
                focus-visible:ring-4 focus-visible:ring-blue-100\r
              `,children:[c.jsx(T,{className:"h-4 w-4","aria-hidden":"true"}),c.jsx("span",{children:u.previous})]}),c.jsxs("button",{type:"button",onClick:b,className:`\r
                inline-flex min-h-11 items-center justify-center gap-2\r
                rounded-2xl bg-blue-600\r
                px-3 text-sm font-extrabold text-white\r
                shadow-sm transition\r
                active:scale-[0.98] active:bg-blue-700\r
                focus-visible:outline-none\r
                focus-visible:ring-4 focus-visible:ring-blue-100\r
              `,children:[c.jsx("span",{children:u.next}),c.jsx(P,{className:"h-4 w-4","aria-hidden":"true"})]})]})]}):null,c.jsx("style",{children:`
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
      `})]})}function SM({sofaPairs:t=[]}){const{lang:e}=Mt(),n=e==="ar"||e==="he",r=j.useCallback((i,o,a)=>e==="he"?a:e==="en"?o:i,[e]);j.useEffect(()=>{t.slice(0,2).flatMap(o=>[o==null?void 0:o.before,o==null?void 0:o.after]).filter(Boolean).forEach(o=>{const a=new Image;a.decoding="async",a.src=o})},[t]);const s=t.length;return c.jsxs("section",{id:"cleaning-showcase",dir:n?"rtl":"ltr",className:`\r
        mx-auto\r
        w-full\r
        max-w-6xl\r
        px-4\r
        py-10\r
        sm:px-6\r
        sm:py-14\r
        lg:py-16\r
      `,children:[c.jsxs("header",{className:"mx-auto mb-7 max-w-3xl text-center sm:mb-9",children:[c.jsxs("div",{className:`\r
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
          `,children:[c.jsx("span",{"aria-hidden":"true",className:`\r
              h-2\r
              w-2\r
              rounded-full\r
              bg-[var(--lumora-lime)]\r
              shadow-[0_0_0_4px_rgba(174,221,57,0.12)]\r
            `}),c.jsx("span",{children:r("نتائج حقيقية","Real results","תוצאות אמיתיות")})]}),c.jsx("h2",{className:`\r
            mt-4\r
            text-[clamp(25px,5vw,39px)]\r
            font-black\r
            leading-tight\r
            tracking-tight\r
            text-[var(--lumora-navy-900)]\r
          `,children:r("الفرق واضح من أول نظرة","The difference is clear","רואים את ההבדל מיד")}),c.jsx("p",{className:`\r
            mx-auto\r
            mt-3\r
            max-w-2xl\r
            text-sm\r
            font-medium\r
            leading-7\r
            text-slate-600\r
            sm:text-base\r
          `,children:r("صور حقيقية قبل وبعد تنظيف الكنب، بدون مبالغة وبدون فلاتر.","Real before-and-after sofa cleaning results, without exaggeration or filters.","תמונות אמיתיות לפני ואחרי ניקוי ספות, ללא הגזמה וללא פילטרים.")}),s>0&&c.jsxs("div",{className:`\r
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
            `,children:[c.jsx("span",{className:"text-[var(--lumora-cyan)]",children:s}),c.jsx("span",{children:r("نتائج موثقة","documented results","תוצאות מתועדות")})]})]}),c.jsx("div",{className:"mx-auto max-w-5xl",children:s>0?c.jsx(EM,{pairs:t,hideDescription:!0}):c.jsx(TM,{title:r("سيتم إضافة النتائج قريبًا","Results will be added soon","התוצאות יתווספו בקרוב"),description:r("صور قبل وبعد تنظيف الكنب ستظهر هنا.","Before-and-after sofa cleaning images will appear here.","תמונות לפני ואחרי ניקוי ספות יופיעו כאן.")})})]})}function TM({title:t,description:e}){return c.jsxs("div",{className:`\r
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
      `,children:[c.jsx("div",{"aria-hidden":"true",className:`\r
          mx-auto\r
          flex\r
          h-14\r
          w-14\r
          items-center\r
          justify-center\r
          rounded-2xl\r
          bg-[rgba(174,221,57,0.12)]\r
        `,children:c.jsx("span",{className:`\r
            h-5\r
            w-5\r
            rounded-full\r
            bg-[var(--lumora-lime)]\r
          `})}),c.jsx("h3",{className:`\r
          mt-4\r
          text-lg\r
          font-black\r
          text-[var(--lumora-navy-900)]\r
        `,children:t}),c.jsx("p",{className:"mt-2 text-sm leading-6 text-slate-500",children:e})]})}const Y0={ar:[{icon:"coverage",q:"بأي مناطق بتخدموا؟",short:"نقدّم خدماتنا في مناطق الشمال والمركز.",details:"اكتب اسم بلدتك داخل الطلب، وسنتأكد من توفر الخدمة في منطقتك قبل تثبيت الموعد."},{icon:"price",q:"كيف بيتحدد السعر؟",short:"السعر يتحدد حسب نوع الخدمة وتفاصيل كل عنصر.",details:"الكنب يُحسب حسب عدد المقاعد. فرشات النوم حسب العدد والحجم وتنظيف وجه واحد أو وجهين. السجاد حسب طول وعرض كل سجادة وحالتها. بعد إرسال الطلب والصور اللازمة يتم تأكيد السعر."},{icon:"schedule",q:"بقدر أطلب أكثر من خدمة بنفس الطلب؟",short:"نعم، بتقدر تجمع الكنب والسجاد وفرشات النوم برسالة واحدة.",details:"أضف أي عدد من الخدمات داخل نفس الطلب. مثلًا: كنب مع سجادتين وثلاث فرشات نوم، وبعدها يتم إرسال كل التفاصيل برسالة واتساب واحدة."},{icon:"fabric",q:"شو بصير إذا كل فرشة نوم مختلفة؟",short:"بتقدر تضيف كل تركيبة فرشات لحالها.",details:"مثلًا: فرشتان مفردتان وجه واحد، وفرشة مزدوجة وجهين. أضف كل مجموعة مختلفة بسطر مستقل وحدد العدد والحجم وعدد الأوجه."},{icon:"price",q:"شو بصير إذا كل سجادة إلها قياس مختلف؟",short:"كل سجادة بتنضاف مع طولها وعرضها بشكل مستقل.",details:"أضف سجادة أولى بطول وعرض معين، وبعدها أضف سجادة ثانية بقياس مختلف. وإذا ما بتعرف قياس سجادة معينة، اختَر خيار أن القياسات غير معروفة."},{icon:"results",q:"هل لازم أرسل صور؟",short:"الصور بتساعد على فهم الحالة وتأكيد السعر.",details:"بعد إرسال الطلب عبر واتساب، أرسل صورًا واضحة للكنب أو فرشات النوم أو السجاد المطلوب تنظيفه. الصور تساعد على تقييم الحالة والبقع وتحديد السعر بشكل أدق."},{icon:"dry",q:"كم بيستغرق التنظيف وكم بده لينشف؟",short:"المدة تختلف حسب الكمية ونوع القماش والتهوية.",details:"نعطيك تقديرًا تقريبيًا بعد مراجعة الطلب. وقت التجفيف يتأثر بنوع القماش والطقس والتهوية، وفتح الشبابيك أو تشغيل مروحة يساعد على تسريع التجفيف."},{icon:"results",q:"هل كل البقع بتروح؟",short:"نعمل على إزالة البقع قدر الإمكان، لكن النتيجة تختلف حسب نوعها وعمرها.",details:"بعض البقع القديمة أو المثبتة داخل القماش قد لا تختفي بالكامل. نوضح الحالة المتوقعة قبل بدء العمل ونتجنب أي معالجة قد تضر بالقماش."},{icon:"safety",q:"هل مواد التنظيف مناسبة للأقمشة؟",short:"نختار طريقة ومواد مناسبة حسب نوع السطح والقماش.",details:"يتم فحص نوع القماش والحالة قبل التنظيف واختيار الطريقة المناسبة. من المهم إبلاغنا عن أي حساسية أو تعليمات خاصة قبل الموعد."},{icon:"time",q:"هل خدمة تنظيف الزجاج متاحة؟",short:"خدمة الزجاج غير متاحة للحجز حاليًا.",details:"تظهر الخدمة داخل الموقع للتعريف بها، لكنها متوقفة مؤقتًا ولا يمكن إضافتها إلى الطلب حاليًا. الخدمات المتاحة الآن هي الكنب والسجاد وفرشات النوم."},{icon:"schedule",q:"شو لازم أجهز قبل ما توصلوا؟",short:"أبعد الأغراض الصغيرة وجهّز مصدر ماء وكهرباء قريب.",details:"يفضل إبعاد الأغراض الصغيرة عن منطقة العمل والتأكد من وجود ماء وكهرباء قريبين. أخبرنا مسبقًا عن الدرج أو الطابق المرتفع أو أي تعليمات خاصة للوصول."}],en:[{icon:"coverage",q:"Which areas do you serve?",short:"We provide services across northern and central areas.",details:"Enter your town inside the order, and we will confirm service availability before scheduling the appointment."},{icon:"price",q:"How is the price determined?",short:"The price depends on the service and the details of every item.",details:"Sofas are calculated by the number of seats. Mattresses depend on quantity, size, and whether one or both sides are cleaned. Carpets depend on the length, width, and condition of each carpet. The final price is confirmed after reviewing the order and photos."},{icon:"schedule",q:"Can I request several services in one order?",short:"Yes. Sofas, carpets, and mattresses can be combined in one order.",details:"Add any number of services to the same order. For example, you can request sofa cleaning, two carpets, and three mattresses, then send everything in one WhatsApp message."},{icon:"fabric",q:"What if my mattresses have different sizes or cleaning needs?",short:"Every different mattress combination can be added separately.",details:"For example, add two single mattresses cleaned on one side, then add one double mattress cleaned on both sides as a separate row."},{icon:"price",q:"What if every carpet has different measurements?",short:"Each carpet can be entered with its own length and width.",details:"Add the first carpet with its measurements, then add another carpet with different measurements. You can also mark an individual carpet as having unknown measurements."},{icon:"results",q:"Do I need to send photos?",short:"Photos help us understand the condition and confirm the price.",details:"After sending the order through WhatsApp, send clear photos of the sofas, mattresses, or carpets. Photos help us assess stains, condition, and the required work."},{icon:"dry",q:"How long does cleaning and drying take?",short:"Timing depends on quantity, fabric type, weather, and ventilation.",details:"We provide an approximate duration after reviewing the order. Opening windows or using a fan may help speed up the drying process."},{icon:"results",q:"Will every stain be removed?",short:"We remove stains whenever possible, but results depend on the stain.",details:"Some old or deeply set stains may not disappear completely. We explain the expected result and avoid treatments that could damage the fabric."},{icon:"safety",q:"Are the cleaning materials suitable for fabrics?",short:"The cleaning method and materials are selected according to the surface.",details:"We check the fabric type and condition before cleaning. Please inform us in advance about allergies or any special requirements."},{icon:"time",q:"Is glass cleaning currently available?",short:"Glass cleaning is currently unavailable for booking.",details:"The service remains visible on the website for information, but it is temporarily paused and cannot be added to an order. Sofa, carpet, and mattress cleaning are currently available."},{icon:"schedule",q:"What should I prepare before you arrive?",short:"Clear small items and prepare nearby water and electricity.",details:"Move small objects away from the work area and ensure that water and electricity are available nearby. Tell us about stairs, high floors, or special access instructions."}],he:[{icon:"coverage",q:"באילו אזורים אתם נותנים שירות?",short:"השירות ניתן באזורי הצפון והמרכז.",details:"הזינו את שם היישוב בהזמנה, ואנו נאשר שהשירות זמין באזור לפני קביעת המועד."},{icon:"price",q:"איך נקבע המחיר?",short:"המחיר נקבע לפי סוג השירות והפרטים של כל פריט.",details:"בספות החישוב הוא לפי מספר המושבים. במזרנים לפי הכמות, הגודל וניקוי צד אחד או שני צדדים. בשטיחים לפי האורך, הרוחב והמצב של כל שטיח. המחיר הסופי מאושר לאחר בדיקת ההזמנה והתמונות."},{icon:"schedule",q:"אפשר להזמין כמה שירותים באותה הזמנה?",short:"כן. ניתן לשלב ספות, שטיחים ומזרנים בהזמנה אחת.",details:"אפשר להוסיף כל מספר של שירותים לאותה הזמנה. לדוגמה: ספה, שני שטיחים ושלושה מזרנים, ולשלוח את כל הפרטים בהודעת WhatsApp אחת."},{icon:"fabric",q:"מה עושים אם כל מזרן שונה?",short:"ניתן להוסיף כל שילוב של מזרנים בנפרד.",details:"לדוגמה: שני מזרני יחיד לניקוי צד אחד ומזרן זוגי לניקוי שני צדדים. כל שילוב שונה מתווסף בשורה נפרדת."},{icon:"price",q:"מה עושים אם לכל שטיח יש מידות שונות?",short:"כל שטיח מתווסף עם האורך והרוחב שלו.",details:"הוסיפו את השטיח הראשון עם המידות שלו ולאחר מכן שטיח נוסף עם מידות שונות. אפשר גם לסמן שהמידות של שטיח מסוים אינן ידועות."},{icon:"results",q:"האם צריך לשלוח תמונות?",short:"תמונות עוזרות להבין את המצב ולאשר את המחיר.",details:"לאחר שליחת ההזמנה דרך WhatsApp, שלחו תמונות ברורות של הספות, המזרנים או השטיחים. התמונות עוזרות להעריך את הכתמים ואת העבודה הנדרשת."},{icon:"dry",q:"כמה זמן לוקח הניקוי והייבוש?",short:"הזמן משתנה לפי הכמות, סוג הבד, מזג האוויר והאוורור.",details:"לאחר בדיקת ההזמנה ניתן הערכת זמן. פתיחת חלונות או הפעלת מאוורר עשויה לזרז את הייבוש."},{icon:"results",q:"האם כל הכתמים יורדים?",short:"אנו מסירים כתמים ככל האפשר, אך התוצאה תלויה בסוג הכתם.",details:"כתמים ישנים או עמוקים לא תמיד נעלמים לחלוטין. נסביר מראש מהי התוצאה הצפויה ונימנע מטיפול שעלול לפגוע בבד."},{icon:"safety",q:"האם חומרי הניקוי מתאימים לבדים?",short:"השיטה והחומרים נבחרים לפי סוג המשטח והבד.",details:"לפני הניקוי בודקים את סוג הבד ואת מצבו. חשוב לעדכן מראש על רגישויות או דרישות מיוחדות."},{icon:"time",q:"האם שירות ניקוי הזכוכית זמין?",short:"ניקוי זכוכית אינו זמין כרגע להזמנה.",details:"השירות עדיין מוצג באתר לצורכי מידע, אך הוא מושהה זמנית ולא ניתן להוסיף אותו להזמנה. כרגע זמינים ניקוי ספות, שטיחים ומזרנים."},{icon:"schedule",q:"מה צריך להכין לפני שאתם מגיעים?",short:"יש לפנות חפצים קטנים ולהכין מים וחשמל בקרבת מקום.",details:"מומלץ להזיז חפצים קטנים מאזור העבודה ולוודא שיש מקור מים וחשמל קרוב. יש לעדכן מראש על מדרגות, קומה גבוהה או הוראות גישה מיוחדות."}]},IM={time:Qf,schedule:n2,safety:Sm,results:So,dry:m2,coverage:_x,price:f2,fabric:ul};function CM(t){return String(t??"item").replace(/[^a-zA-Z0-9_-]/g,"-")}function kM({id:t,icon:e,question:n,short:r,details:s,isOpen:i,onToggle:o,dir:a="ltr",variant:u="default"}){const d=j.useMemo(()=>IM[e]||So,[e]),h=a==="rtl",p=u==="compact",m=CM(t),b=`faq-button-${m}`,T=`faq-panel-${m}`,P=h?"إغلاق الإجابة":"Close answer",N=h?"فتح الإجابة":"Open answer",E=()=>{o==null||o(t)};return c.jsxs("article",{className:["overflow-hidden rounded-2xl border bg-white","transition-[border-color,box-shadow,transform] duration-300",i?"border-blue-200 shadow-[0_14px_38px_rgba(37,99,235,0.12)]":"border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md"].join(" "),dir:a,children:[c.jsx("h3",{children:c.jsxs("button",{id:b,type:"button",onClick:E,"aria-expanded":i,"aria-controls":T,"aria-label":`${i?P:N}: ${n}`,className:["flex w-full items-start justify-between gap-4","text-start transition-colors","focus-visible:outline-none","focus-visible:ring-4 focus-visible:ring-inset","focus-visible:ring-blue-100",p?"px-4 py-4":"px-5 py-5",i?"bg-blue-50/45":"bg-white hover:bg-slate-50/70"].join(" "),children:[c.jsxs("span",{className:"flex min-w-0 flex-1 items-start gap-3",children:[c.jsx("span",{className:["mt-0.5 inline-flex shrink-0 items-center justify-center","rounded-xl border border-blue-100 bg-blue-50","text-blue-700 transition",p?"h-9 w-9":"h-10 w-10",i?"border-blue-200 bg-blue-100":""].join(" "),"aria-hidden":"true",children:c.jsx(d,{className:p?"h-4 w-4":"h-[18px] w-[18px]",strokeWidth:2.3})}),c.jsxs("span",{className:"min-w-0 flex-1",children:[c.jsx("span",{className:["block font-extrabold leading-6 text-slate-950",p?"text-sm":"text-sm sm:text-base"].join(" "),children:n}),r?c.jsx("span",{className:["mt-1.5 block font-medium leading-6 text-slate-600",p?"text-[13px]":"text-sm"].join(" "),children:r}):null]})]}),c.jsx("span",{className:["mt-1 flex h-8 w-8 shrink-0 items-center justify-center","rounded-full border transition",i?"border-blue-200 bg-blue-100 text-blue-700":"border-slate-200 bg-white text-slate-500"].join(" "),"aria-hidden":"true",children:c.jsx(Oa,{className:["h-4 w-4 transition-transform duration-300",i?"rotate-180":""].join(" "),strokeWidth:2.5})})]})}),c.jsx("div",{id:T,role:"region","aria-labelledby":b,"aria-hidden":!i,className:["grid transition-[grid-template-rows,opacity] duration-300 ease-out",i?"grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"].join(" "),children:c.jsx("div",{className:"overflow-hidden",children:s?c.jsx("div",{className:["border-t border-slate-100","text-sm font-medium leading-7 text-slate-600","whitespace-pre-line",p?"px-4 pb-5 pt-4 sm:ps-16":"px-5 pb-6 pt-4 sm:ps-[76px]"].join(" "),children:s}):c.jsx("div",{className:["border-t border-slate-100 text-sm text-slate-500",p?"px-4 pb-5 pt-4 sm:ps-16":"px-5 pb-6 pt-4 sm:ps-[76px]"].join(" "),children:r})})})]})}function AM({items:t=[],dir:e="ltr",variant:n="default"}){const[r,s]=j.useState(null);j.useEffect(()=>{s(null)},[t]);const i=o=>{s(a=>a===o?null:o)};return!Array.isArray(t)||t.length===0?null:c.jsx("div",{className:n==="compact"?"space-y-2.5":"space-y-3",dir:e,children:t.map((o,a)=>{const u=(o==null?void 0:o.id)||`faq-${a}`;return c.jsx(kM,{id:u,icon:o==null?void 0:o.icon,question:(o==null?void 0:o.q)||"",short:(o==null?void 0:o.short)||"",details:(o==null?void 0:o.details)||"",isOpen:r===u,onToggle:i,dir:e,variant:n},`${u}-${(o==null?void 0:o.q)||a}`)})})}function NM(){const{lang:t}=Mt(),n=t==="ar"||t==="he"?"rtl":"ltr",r=Y0[t]||Y0.en,s=j.useMemo(()=>t==="ar"?{title:"الأسئلة الشائعة",subtitle:"إجابات واضحة على أهم الأسئلة قبل طلب خدمة التنظيف.",showLess:"عرض أقل",showAll:"عرض كل الأسئلة",showMoreWithCount:i=>`عرض ${i} أسئلة إضافية`}:t==="he"?{title:"שאלות נפוצות",subtitle:"תשובות ברורות לשאלות החשובות לפני הזמנת שירות ניקיון.",showLess:"הצג פחות",showAll:"הצג את כל השאלות",showMoreWithCount:i=>`הצג עוד ${i}`}:{title:"Frequently Asked Questions",subtitle:"Clear answers to the most important questions before requesting a cleaning service.",showLess:"Show less",showAll:"Show all questions",showMoreWithCount:i=>`Show ${i} more`},[t]);return c.jsxs("section",{id:"faq",dir:n,className:"mx-auto max-w-5xl scroll-mt-[calc(var(--app-topbar-h,72px)+16px)] px-4 py-14 sm:px-6 sm:py-16",children:[c.jsxs("header",{className:"mb-7 text-center sm:mb-9",children:[c.jsx("div",{className:"inline-flex items-center justify-center rounded-[28px] border border-slate-200 bg-white px-6 py-3 shadow-sm sm:px-10 sm:py-4",children:c.jsx("h2",{className:"text-[clamp(20px,4vw,34px)] font-extrabold text-blue-600",children:s.title})}),c.jsx("div",{className:"mx-auto mt-3 h-[3px] w-24 rounded-full bg-blue-600"}),c.jsx("p",{className:"mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7",children:s.subtitle})]}),c.jsx(AM,{items:r,dir:n,variant:"compact",visibleMobile:r.length,visibleDesktop:r.length,showAll:!0,onToggleShowAll:()=>{},t:s})]})}const Kh=("amir@lumora.example".trim()||"amir@lumora.example").trim().toLowerCase();function PM(t){switch((t==null?void 0:t.code)||""){case"auth/invalid-email":return"عنوان البريد الإلكتروني غير صحيح.";case"auth/missing-password":return"اكتب كلمة المرور.";case"auth/invalid-credential":case"auth/user-not-found":case"auth/wrong-password":return"اسم المستخدم أو كلمة المرور غير صحيحة.";case"auth/user-disabled":return"تم تعطيل هذا الحساب. راجع إعدادات Firebase.";case"auth/too-many-requests":return"تمت محاولات كثيرة. انتظر قليلًا ثم جرّب مرة ثانية.";case"auth/network-request-failed":return"تعذر الاتصال بالإنترنت. افحص الاتصال وحاول مرة ثانية.";case"auth/operation-not-allowed":return"تسجيل الدخول بالبريد غير مفعّل في Firebase.";default:return"تعذر تسجيل الدخول. حاول مرة ثانية."}}function RM({onAuthorized:t,onExit:e}){const[n,r]=j.useState(""),[s,i]=j.useState(""),[o,a]=j.useState(!0),[u,d]=j.useState(!1),[h,p]=j.useState(!1),[m,b]=j.useState(""),T=!Kh,P=async N=>{var y;if(N.preventDefault(),h)return;const E=n.trim().toLowerCase();if(T){b("لازم تضيف بريد الأدمن داخل ملف .env.local أولًا.");return}if(E!=="amir"){b("تأكد من اسم المستخدم.");return}if(!s){b("اكتب كلمة المرور.");return}p(!0),b("");try{await wR(kn,o?Nb:pg);const v=await vR(kn,Kh,s);if(String(((y=v.user)==null?void 0:y.email)||"").trim().toLowerCase()!==Kh){await Ca(kn),b("هذا الحساب غير مخوّل للدخول إلى لوحة الإدارة.");return}i(""),t==null||t(v.user)}catch(v){console.error("Admin sign-in failed:",v),b(PM(v))}finally{p(!1)}};return c.jsxs("main",{className:`\r
        relative flex min-h-screen items-center justify-center\r
        overflow-hidden bg-[#F6F8FC]\r
        px-4 py-8\r
      `,dir:"rtl",children:[c.jsx("div",{className:`\r
          pointer-events-none absolute start-[-130px] top-[-140px]\r
          h-[330px] w-[330px]\r
          rounded-full bg-blue-100/70 blur-3xl\r
        `,"aria-hidden":"true"}),c.jsx("div",{className:`\r
          pointer-events-none absolute bottom-[-160px] end-[-130px]\r
          h-[350px] w-[350px]\r
          rounded-full bg-slate-200/70 blur-3xl\r
        `,"aria-hidden":"true"}),c.jsxs("div",{className:"relative w-full max-w-md",children:[c.jsxs("section",{className:`\r
            overflow-hidden rounded-[30px]\r
            border border-slate-200 bg-white\r
            shadow-[0_24px_70px_rgba(15,23,42,0.12)]\r
          `,"aria-labelledby":"admin-login-title",children:[c.jsxs("header",{className:`\r
              border-b border-slate-100\r
              bg-slate-50/80 px-5 py-6\r
              text-center sm:px-7\r
            `,children:[c.jsx("div",{className:`\r
                mx-auto flex h-14 w-14\r
                items-center justify-center\r
                rounded-2xl bg-blue-600\r
                text-white\r
                shadow-[0_10px_28px_rgba(37,99,235,0.28)]\r
              `,"aria-hidden":"true",children:c.jsx(Sm,{className:"h-7 w-7"})}),c.jsx("h1",{id:"admin-login-title",className:`\r
                mt-4 text-2xl font-black\r
                tracking-tight text-slate-950\r
              `,children:"لوحة إدارة Lumora"}),c.jsx("p",{className:`\r
                mx-auto mt-2 max-w-sm\r
                text-sm font-medium leading-6\r
                text-slate-500\r
              `,children:"سجّل الدخول بحساب الإدارة للوصول إلى البيانات وإدارة العمل."})]}),c.jsxs("form",{onSubmit:P,className:"px-5 py-6 sm:px-7",noValidate:!0,children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"admin-email",className:`\r
                  block text-sm font-extrabold\r
                  text-slate-800\r
                `,children:"اسم المستخدم"}),c.jsxs("div",{className:"relative mt-2",children:[c.jsx(k2,{className:`\r
                    pointer-events-none absolute\r
                    start-4 top-1/2 h-5 w-5\r
                    -translate-y-1/2 text-slate-400\r
                  `,"aria-hidden":"true"}),c.jsx("input",{id:"admin-email",type:"text",value:n,onChange:N=>{r(N.target.value),b("")},autoComplete:"username",autoCapitalize:"none",placeholder:"amir",disabled:h,className:`\r
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
                  `})]})]}),c.jsxs("div",{className:"mt-5",children:[c.jsx("label",{htmlFor:"admin-password",className:`\r
                  block text-sm font-extrabold\r
                  text-slate-800\r
                `,children:"كلمة المرور"}),c.jsxs("div",{className:"relative mt-2",children:[c.jsx(I2,{className:`\r
                    pointer-events-none absolute\r
                    start-4 top-1/2 h-5 w-5\r
                    -translate-y-1/2 text-slate-400\r
                  `,"aria-hidden":"true"}),c.jsx("input",{id:"admin-password",type:u?"text":"password",value:s,onChange:N=>{i(N.target.value),b("")},autoComplete:"current-password",placeholder:"أدخل كلمة المرور",disabled:h,className:`\r
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
                  `}),c.jsx("button",{type:"button",onClick:()=>d(N=>!N),disabled:h,className:`\r
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
                  `,"aria-label":u?"إخفاء كلمة المرور":"إظهار كلمة المرور",children:u?c.jsx(w2,{className:"h-5 w-5","aria-hidden":"true"}):c.jsx(_2,{className:"h-5 w-5","aria-hidden":"true"})})]})]}),c.jsxs("label",{className:`\r
                mt-4 flex cursor-pointer\r
                items-start gap-3\r
                rounded-2xl border border-slate-200\r
                bg-slate-50/70 p-3.5\r
              `,children:[c.jsx("input",{type:"checkbox",checked:o,onChange:N=>a(N.target.checked),disabled:h,className:`\r
                  mt-0.5 h-4 w-4 shrink-0\r
                  rounded border-slate-300\r
                  text-blue-600\r
                  focus:ring-blue-500\r
                `}),c.jsxs("span",{children:[c.jsx("span",{className:`\r
                    block text-sm font-extrabold\r
                    text-slate-800\r
                  `,children:"تذكّر هذا الجهاز"}),c.jsx("span",{className:`\r
                    mt-0.5 block text-xs\r
                    font-medium leading-5\r
                    text-slate-500\r
                  `,children:"ألغِ الخيار إذا كان الجهاز مشتركًا مع أشخاص آخرين."})]})]}),m?c.jsx("div",{className:`\r
                  mt-4 rounded-2xl\r
                  border border-rose-200\r
                  bg-rose-50 px-4 py-3\r
                  text-sm font-bold leading-6\r
                  text-rose-700\r
                `,role:"alert",children:m}):null,c.jsx("button",{type:"submit",disabled:h||T,className:`\r
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
              `,children:h?c.jsxs(c.Fragment,{children:[c.jsx(xx,{className:"h-5 w-5 animate-spin","aria-hidden":"true"}),c.jsx("span",{children:"جارٍ تسجيل الدخول..."})]}):c.jsxs(c.Fragment,{children:[c.jsx("span",{children:"دخول إلى لوحة الإدارة"}),c.jsx(wx,{className:"h-4 w-4 rotate-180","aria-hidden":"true"})]})}),e?c.jsx("button",{type:"button",onClick:e,disabled:h,className:`\r
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
                `,children:"العودة إلى الموقع"}):null]})]}),c.jsx("p",{className:`\r
            mt-4 text-center text-xs\r
            font-medium leading-5 text-slate-400\r
          `,children:"الوصول مخصص لحساب الإدارة المعتمد فقط."})]})]})}const jM=["كنب","فرشات","كراسي سفرة","موكيت","سجاد","برادي"],Ip=["נצרת","חיפה","עכו","כפר קאסם","עין מאהל","נוף הגליל","מוקייבלה","סולם"],MM=new Intl.NumberFormat("he-IL",{maximumFractionDigits:2}),LM=t=>MM.format(t/100)+" ₪",di=t=>String(t).replace(/[٠-٩]/g,e=>e.charCodeAt(0)-1632).replace(/[۰-۹]/g,e=>e.charCodeAt(0)-1776),nE=t=>[t.getFullYear(),String(t.getMonth()+1).padStart(2,"0"),String(t.getDate()).padStart(2,"0")].join("-");function or(){const t=new Intl.DateTimeFormat("en",{timeZone:"Asia/Jerusalem",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date);return["year","month","day"].map(e=>t.find(n=>n.type===e).value).join("-")}const ur=t=>new Date(t+"T12:00:00");function Xs(t,e){const n=ur(t);return n.setDate(n.getDate()+e),nE(n)}function Ac(t,e=0){const n=ur(t);return nE(new Date(n.getFullYear(),n.getMonth()+e,1,12))}const X0=t=>ur(t).toLocaleDateString("ar",{weekday:"long",day:"numeric",month:"long"}),nu=t=>t.trim().replace(/\s+/g," "),dt=t=>t.town+" "+t.number,ma=t=>t.start+(t.end?" – "+t.end:""),DM=t=>di(t).replace(/[\s()\-]/g,"").replace(/^00/,"+").replace(/^0(?=\d)/,"+972");function OM(t){if(!t.trim())return"";const e=t.match(/https:\/\/[^\s<>"']+/gi)||[];for(const n of e)try{const r=new URL(n);if(!r.username&&!r.password&&!r.port&&["waze.com","www.waze.com","ul.waze.com"].includes(r.hostname))return r.href}catch{}throw Error("الصق رابط المكان من Waze عبر Send ثم Copy link.")}function ru(t){const e=di(t).trim().replace(/[٫,]/g,".");if(!/^\d{1,8}(\.\d{1,2})?$/.test(e))throw Error("افحص المبلغ بالشيكل.");const[n,r=""]=e.split(".");return Number(n)*100+Number(r.padEnd(2,"0"))}function VM(t){return{id:crypto.randomUUID(),rev:0,date:t,town:"",number:"",start:"",end:"",duration:"",price:"",phone:"",location:"",note:"",items:{},status:"booked"}}function FM(t){const e=nu(t.town),n=di(t.number).trim();if(!e||!/^\d{1,8}$/.test(n))throw Error("اكتب البلد ورقم الزبون، حتى لو الرقم 0.");if(!t.date||!t.start||t.end&&t.end<=t.start)throw Error("افحص اليوم ووقت الوصول ونهاية الفترة.");const r=DM(t.phone);if(r&&!/^\+[1-9]\d{7,14}$/.test(r))throw Error("افحص رقم التلفون.");const s=di(t.duration).trim();if(s&&(!/^\d{1,4}$/.test(s)||Number(s)<1))throw Error("اكتب مدّة الشغل بالدقايق.");const i={};for(const[a,u]of Object.entries(t.items)){const d=di(u).trim();if(d&&(!/^\d{1,5}$/.test(d)||Number(d)<1))throw Error("افحص كمية "+a);i[a]=d}const o=t.price.trim()?String(ru(t.price)/100):"";return{...t,town:e,number:n,phone:r,price:o,duration:s,items:i,note:t.note.trim(),location:OM(t.location)}}function qr({title:t,children:e}){return c.jsxs("label",{className:"wc-field",children:[c.jsx("span",{children:t}),e]})}function Cp(t){return di(t||"").normalize("NFKC").trim().toLowerCase().replace(/\s+/g," ")}function J0(t,e,n=!1){if(!e)return!0;const r=[dt(t),n?t.note:"",n?Object.keys(t.items||{}).join(" "):""].join(" ");if(Cp(r).includes(e))return!0;if(!/^[+\d\s()-]+$/.test(e))return!1;const s=e.replace(/\D/g,"");if(!s)return!1;const i=di(t.phone||"").replace(/\D/g,""),o=i.startsWith("972")?"0"+i.slice(3):i;return i.includes(s)||o.includes(s)}function Z0({kind:t}){return c.jsxs("span",{className:"wc-missing-icon wc-missing-"+t,"aria-hidden":"true",children:[c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:t==="location"?c.jsxs(c.Fragment,{children:[c.jsx("path",{d:"M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"}),c.jsx("circle",{cx:"12",cy:"10",r:"2.3"})]}):c.jsx("path",{d:"m7 3 3 4-2 2c1.4 2.9 3.1 4.6 6 6l2-2 4 3c.4.3.5.8.3 1.3l-1 2.3c-.3.7-1 1.1-1.8 1C10 19.7 4.3 14 3.4 6.5c-.1-.8.3-1.5 1-1.8l2-1c.2-.1.4-.1.6-.1Z"})}),c.jsx("span",{className:"wc-plus-mark",children:"+"})]})}const Qh=Array.from({length:24},(t,e)=>String(e).padStart(2,"0")),Yh=["00","30"],to=40;function ew({label:t,values:e,wheelRef:n,index:r,onIndex:s}){function i(o){const a=Math.max(0,Math.min(e.length-1,o));n.current.scrollTop=a*to,s(a)}return c.jsxs("div",{className:"wc-wheel-column",children:[c.jsx("span",{children:t}),c.jsx("div",{className:"wc-wheel-frame",children:c.jsx("div",{className:"wc-wheel-scroll",ref:n,role:"spinbutton",tabIndex:0,"aria-label":t,"aria-valuemin":Number(e[0]),"aria-valuemax":Number(e[e.length-1]),"aria-valuenow":Number(e[r]),"aria-valuetext":e[r],onKeyDown:o=>{["ArrowUp","ArrowDown","Home","End"].includes(o.key)&&(o.preventDefault(),i(o.key==="Home"?0:o.key==="End"?e.length-1:r+(o.key==="ArrowDown"?1:-1)))},onScroll:o=>s(Math.max(0,Math.min(e.length-1,Math.round(o.currentTarget.scrollTop/to)))),children:e.map((o,a)=>c.jsx("div",{"aria-hidden":"true","data-selected":a===r,onClick:()=>i(a),children:o},o))})})]})}function tw({title:t,value:e,placeholder:n,onPick:r,buttonRef:s,optional:i=!1,after:o=""}){const a=j.useRef(null),u=j.useRef(null),d=j.useRef(null),[h,p]=j.useState(0),[m,b]=j.useState(0),[T,P]=j.useState("");function N(){const v=e||o||String(new Date().getHours()).padStart(2,"0")+":00";let I=Number(v.slice(0,2))*2+(Number(v.slice(3,5))>=30?1:0);!e&&o&&(I=Math.min(47,I+1));const O=Math.floor(I/2),L=I%2;p(O),b(L),P(""),a.current.showModal(),u.current.scrollTop=O*to,d.current.scrollTop=L*to}function E(){const y=Math.min(23,Math.max(0,Math.round(u.current.scrollTop/to))),v=Math.min(1,Math.max(0,Math.round(d.current.scrollTop/to))),I=Qh[y]+":"+Yh[v];if(o&&I<=o){P("وقت النهاية لازم يكون بعد وقت الوصول.");return}a.current.close(),r(I)}return c.jsxs("div",{className:"wc-book-picker wc-book-picker-time",children:[c.jsx("span",{className:"wc-picker-label",children:t}),c.jsxs("button",{type:"button",ref:s,className:"wc-picker-box wc-clock-trigger","data-filled":!!e,"aria-haspopup":"dialog","aria-label":t+"، "+(e||n),onClick:N,children:[c.jsx("span",{className:"wc-picker-value",children:e?c.jsx("bdi",{dir:"ltr",children:e}):n}),c.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round","aria-hidden":"true",children:[c.jsx("circle",{cx:"12",cy:"12",r:"9"}),c.jsx("path",{d:"M12 6v6l4 2"})]})]}),c.jsxs("dialog",{ref:a,className:"wc-hour-dialog","aria-label":t,onCancel:y=>{y.preventDefault(),y.stopPropagation(),a.current.close()},onClick:y=>{if(y.target!==y.currentTarget)return;const v=y.currentTarget.getBoundingClientRect();(y.clientX<v.left||y.clientX>v.right||y.clientY<v.top||y.clientY>v.bottom)&&a.current.close()},children:[c.jsxs("div",{className:"wc-wheel-title",children:[c.jsx("strong",{children:t}),c.jsxs("bdi",{dir:"ltr",className:"wc-wheel-preview",children:[Qh[h],":",Yh[m]]})]}),c.jsxs("div",{className:"wc-wheel-pair",dir:"rtl",children:[c.jsx(ew,{label:"الساعة",values:Qh,wheelRef:u,index:h,onIndex:y=>{p(y),P("")}}),c.jsx(ew,{label:"الدقائق",values:Yh,wheelRef:d,index:m,onIndex:y=>{b(y),P("")}})]}),T&&c.jsx("p",{role:"alert",children:T}),c.jsxs("div",{className:"wc-wheel-actions",children:[c.jsx("button",{type:"button",className:"wc-primary",onClick:E,children:"تم"}),c.jsx("button",{type:"button",onClick:()=>a.current.close(),children:"إلغاء"})]}),i&&e&&c.jsx("button",{type:"button",className:"wc-hour-clear",onClick:()=>{a.current.close(),r("")},children:"مسح وقت النهاية"})]})]})}function Xh({kind:t}){if(t==="waze")return c.jsxs("svg",{viewBox:"0 0 32 32","aria-hidden":"true",focusable:"false",children:[c.jsx("rect",{width:"32",height:"32",rx:"8",fill:"#33CCFF"}),c.jsx("path",{d:"M5.5 19c3 .2 3.2-1.4 3.2-4.2a9.1 9.1 0 1 1 9.1 9.1h-3.6c-4.5 0-7.3-1.7-8.7-4.9Z",fill:"white",stroke:"#18212B",strokeWidth:"1.7",strokeLinejoin:"round"}),c.jsxs("g",{fill:"#18212B",children:[c.jsx("circle",{cx:"13",cy:"23.6",r:"2.4"}),c.jsx("circle",{cx:"22",cy:"23.6",r:"2.4"}),c.jsx("circle",{cx:"15",cy:"13",r:"1.1"}),c.jsx("circle",{cx:"21.7",cy:"13",r:"1.1"})]}),c.jsx("path",{d:"M15.3 16.2q2.9 3.2 5.9 0",fill:"none",stroke:"#18212B",strokeWidth:"1.5",strokeLinecap:"round"})]});const e=c.jsx("path",{fill:"currentColor",d:"M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02z"});return t==="whatsapp"?c.jsxs("svg",{viewBox:"0 0 32 32","aria-hidden":"true",focusable:"false",children:[c.jsx("rect",{width:"32",height:"32",rx:"8",fill:"#25D366"}),c.jsx("path",{d:"M6.1 26.2l1.5-5.1a10.1 10.1 0 1 1 3.7 3.7z",fill:"none",stroke:"white",strokeWidth:"1.9",strokeLinejoin:"round"}),c.jsx("g",{transform:"translate(8.7 8) scale(.61)",color:"white",children:e})]}):c.jsxs("svg",{viewBox:"0 0 32 32","aria-hidden":"true",focusable:"false",children:[c.jsx("rect",{width:"32",height:"32",rx:"8",fill:"#27883F"}),c.jsx("g",{transform:"translate(4 4)",color:"white",children:e})]})}function zM({value:t,names:e,onChange:n}){const[r,s]=j.useState(!1),i=r||!!t&&!e.includes(t);return c.jsxs("div",{className:"wc-town-field",children:[c.jsx(qr,{title:"البلد",children:c.jsxs("select",{required:!0,value:i?"__other__":t,onChange:o=>{const a=o.target.value==="__other__";s(a),n(a?"":o.target.value)},children:[c.jsx("option",{value:"",disabled:!0,children:"اختار البلد"}),e.map(o=>c.jsx("option",{value:o,children:o},o)),c.jsx("option",{value:"__other__",children:"بلد ثانية…"})]})}),i&&c.jsxs(qr,{title:"اسم البلد",children:[c.jsx("input",{type:"text",required:!0,dir:"auto",autoFocus:r,value:t,placeholder:"اكتب اسم البلد",onChange:o=>n(o.target.value)}),c.jsx("small",{className:"wc-town-hint",children:"لهالموعد بس"})]})]})}function UM({uid:t,names:e,available:n,onClose:r}){const s=j.useRef(null),i=j.useRef(!1),o=j.useRef(null),[a,u]=j.useState(null),[d,h]=j.useState(""),[p,m]=j.useState(!1),[b,T]=j.useState(!1),[P,N]=j.useState(!1),E=j.useRef(null),y=j.useRef(new Map);j.useEffect(()=>{var _;if(b||a!==null){const H=o.current;if(!H)return;H.focus({preventScroll:!0}),H.select(),(_=H.closest("form"))==null||_.scrollIntoView({block:"nearest"})}},[b,a]);function v(_){requestAnimationFrame(()=>{var H;(H=y.current.get(_)||E.current)==null||H.focus({preventScroll:!0})})}const I=b||a!==null,O=j.useRef(!1);function L(){i.current||nu(d)!==(a??"")&&!window.confirm("ترجع لقائمة البلاد وتترك التغيير بدون حفظ؟")||(T(!1),u(null),h(""),w(""),N(!1),v(a))}const[S,w]=j.useState("");j.useEffect(()=>{const _=s.current,H=document.activeElement;return _.showModal(),()=>{_.close(),H instanceof HTMLElement&&H.isConnected&&H.focus({preventScroll:!0})}},[]);function x(){i.current||(I?L():r())}function C(_){if(_.target!==_.currentTarget)return!1;const H=_.currentTarget.getBoundingClientRect();return _.clientX<H.left||_.clientX>H.right||_.clientY<H.top||_.clientY>H.bottom}async function k(_,H){var V;if(i.current||!n)return;const q=nu(d);if(_!=="remove"&&(!q||q==="__other__")){N(!0),w("اكتب اسم بلد صالح."),(V=o.current)==null||V.focus();return}if(!(_==="remove"&&!window.confirm("تشيل "+H+" من خيارات الحجز؟ المواعيد القديمة بتضل محفوظة."))){i.current=!0,m(!0),N(!1),w("");try{const F=ui(wt,"lumora_calendar",t,"settings","towns");await dr(wt,async D=>{const B=await D.get(F),Q=B.exists()?B.data().names:Ip;if(!Array.isArray(Q))throw Error("تعذّر قراءة قائمة البلاد.");if(H!==null&&!Q.includes(H))throw Error("القائمة تغيّرت من جهاز ثاني. اختار البلد من جديد.");if(_!=="remove"&&Q.some(re=>re!==H&&nu(re)===q))throw Error("هالبلد موجودة بالقائمة.");const oe=_==="remove"?Q.filter(re=>re!==H):_==="rename"?Q.map(re=>re===H?q:re):[...Q,q];D.set(F,{names:oe})}),T(!1),u(null),h(""),v(_==="remove"?null:q),w(_==="remove"?"انشالت البلد من الخيارات.":_==="rename"?"تم تعديل اسم البلد.":"انضافت البلد للخيارات.")}catch(F){N(!0),w(F.code?"تعذّر حفظ إعدادات البلاد. افحص الاتصال وصلاحية الإعدادات.":F.message)}finally{i.current=!1,m(!1)}}}function M(_){const H=_===null;return c.jsxs("form",{className:"wc-town-editor",onSubmit:q=>{q.preventDefault(),k(H?"add":"rename",_)},children:[c.jsx("label",{htmlFor:"wc-town-edit-input",children:H?"اسم البلد الجديدة":"تعديل اسم البلد"}),c.jsx("input",{id:"wc-town-edit-input",ref:o,type:"text",dir:"auto",required:!0,value:d,disabled:p,onChange:q=>h(q.target.value),placeholder:"اكتب اسم البلد",enterKeyHint:"done"}),c.jsxs("div",{className:"wc-town-edit-actions",children:[c.jsx("button",{className:"wc-town-save",type:"submit",disabled:!n||p||!d.trim(),children:p?"جارٍ الحفظ…":H?"إضافة":"حفظ"}),c.jsx("button",{type:"button",disabled:p,onClick:L,children:"إلغاء"}),!H&&c.jsx("button",{type:"button",className:"wc-town-delete",disabled:!n||p,onClick:()=>k("remove",_),children:"إزالة من الخيارات"})]})]})}return c.jsxs("dialog",{ref:s,className:"wc-town-settings wc-town-sheet",dir:"rtl","aria-labelledby":"wc-settings-title",onCancel:_=>{_.preventDefault(),x()},onPointerDown:_=>{O.current=C(_)},onPointerCancel:()=>{O.current=!1},onClick:_=>{const H=O.current&&C(_);O.current=!1,H&&x()},children:[c.jsxs("header",{children:[c.jsx("h2",{id:"wc-settings-title",children:"إعدادات المواعيد"}),c.jsx("button",{type:"button",className:"wc-town-close",disabled:p,"aria-label":I?"رجوع لقائمة البلاد":"إغلاق إعدادات المواعيد",onClick:x,children:I?"رجوع":"إغلاق"})]}),c.jsxs("div",{className:"wc-town-list-heading",children:[c.jsxs("h3",{children:["بلاد الحجز ",c.jsx("small",{children:e.length})]}),!b&&a===null&&c.jsx("button",{type:"button",ref:E,className:"wc-town-add",disabled:!n,onClick:()=>{h(""),w(""),N(!1),T(!0)},children:"+ إضافة بلد"})]}),b&&M(null),!n&&c.jsx("p",{role:"status",children:"بانتظار الاتصال بإعدادات البلاد."}),c.jsx("p",{className:"wc-town-feedback",role:"status","data-error":P,children:S}),c.jsx("ul",{className:"wc-town-list",children:e.map(_=>c.jsx("li",{children:a===_?M(_):c.jsxs(c.Fragment,{children:[c.jsx("bdi",{dir:"auto",children:_}),c.jsx("button",{type:"button",className:"wc-town-pencil",ref:H=>{H?y.current.set(_,H):y.current.delete(_)},title:"تعديل "+_,"aria-label":"تعديل "+_,disabled:!n||p||b||a!==null,onClick:()=>{h(_),w(""),N(!1),u(_)},children:c.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round",children:c.jsx("path",{d:"m15 5 4 4M4 20l4-1 12-12a2.8 2.8 0 0 0-4-4L4 15z"})})})]})},_))}),a!==null&&!e.includes(a)&&c.jsxs("div",{role:"status",children:["تغيّرت هالبلد من جهاز ثاني.",c.jsx("button",{type:"button",disabled:p,onClick:L,children:"رجوع للقائمة"})]}),!e.length&&!b&&n&&c.jsx("p",{children:"القائمة فاضية. فيك تضيف أول بلد."})]})}function nw({uid:t,close:e,embedded:n=!1,leaveGuard:r,schedulePosition:s,actionHost:i}){var Zo;const o=n?"section":"dialog",[a,u]=j.useState(Ip),[d,h]=j.useState(!1),[p,m]=j.useState(!1),[b,T]=j.useState([]),[P,N]=j.useState(!1),[E,y]=j.useState(""),[v,I]=j.useState(0);j.useEffect(()=>(h(!1),Wu(ui(wt,"lumora_calendar",t,"settings","towns"),{includeMetadataChanges:!0},R=>{const G=R.exists()?R.data().names:Ip,X=Array.isArray(G)&&G.every(ae=>typeof ae=="string"&&ae.trim());X&&u(G),h(X&&!R.metadata.fromCache)},()=>h(!1))),[t,v]);const[O,L]=j.useState(()=>{var R;return((R=s==null?void 0:s.current)==null?void 0:R.date)||or()}),[S,w]=j.useState(()=>"الشهر");Re.useLayoutEffect(()=>{s&&(s.current={date:O,view:S,pickerOrigin:z.current})},[s,O,S]);const[x,C]=j.useState(null),[k,M]=j.useState(null),[_,H]=j.useState(""),[q,V]=j.useState(!1),[F,D]=j.useState(""),[B,Q]=j.useState(!1),[oe,re]=j.useState(!1),[Ve,Me]=j.useState("appointments"),[Fe,Le]=j.useState("all"),he=Ve==="history";function Cr(R){R!==Ve&&(Me(R),Q(!1),D(""),H(""))}const z=j.useRef(((Zo=s==null?void 0:s.current)==null?void 0:Zo.pickerOrigin)||null),[ee,xe]=j.useState(null),zt=j.useRef(null),hn=j.useRef(!1),[We,Zt]=j.useState(""),[Lt,Ut]=j.useState(!1),[Ps,ki]=j.useState(!1),Ye=!1,[lt,Rs]=j.useState(()=>new Set);function Bd(R,G){Rs(X=>{const ae=new Set(X);for(const Ee of R)G===Ye?ae.delete(Ee.id):ae.add(Ee.id);return ae})}function Ul(R){Rs(G=>{const X=new Set(G);return X.has(R)?X.delete(R):X.add(R),X})}const js=j.useRef(null);function Ms(R){if(js.current=null,R.touches.length!==1||R.target.closest("button,a,input,select,textarea,summary,label"))return;const G=R.touches[0];js.current={x:G.clientX,y:G.clientY}}function Bl(R){const G=js.current;if(js.current=null,!G||R.touches.length||!R.changedTouches.length)return;const X=R.changedTouches[0],ae=X.clientX-G.x,Ee=X.clientY-G.y;Math.abs(ae)<60||Math.abs(ae)<Math.abs(Ee)*1.7||L(ye=>Xs(ye,ae>0?1:-1))}const tr=j.useRef(""),kr=j.useRef(null),$l=j.useRef(null),Hl=j.useRef(null),Ho=j.useRef(null);Re.useLayoutEffect(()=>{if(!x||!kr.current)return;const R=kr.current==="phone"?Ho.current:Hl.current;kr.current=null,R&&(R.focus({preventScroll:!0}),R.scrollIntoView({block:"center"}))},[x]);const nr=j.useRef(!1),Bt=j.useRef(null);j.useEffect(()=>{if(n)return;const R=Bt.current;return R.showModal(),()=>R.close()},[n]),j.useEffect(()=>(N(!1),y(""),Wu(ng(wt,"lumora_calendar",t,"appointments"),{includeMetadataChanges:!0},R=>{T(R.docs.map(G=>({...G.data(),id:G.id})).sort((G,X)=>(G.date+G.start).localeCompare(X.date+X.start)||dt(G).localeCompare(dt(X)))),N(!R.metadata.fromCache)},R=>{N(!1),y(R.code==="permission-denied"?"المواعيد بحاجة لصلاحية Firebase.":"تعذّر تحميل المواعيد.")})),[t,v]),j.useEffect(()=>{var R,G;if(S==="الشهر"&&zt.current){const X=zt.current;zt.current=null;const ae=(R=Bt.current)==null?void 0:R.querySelector('[data-calendar-date="'+X+'"]');ae&&(ae.focus({preventScroll:!0}),ae.scrollIntoView({block:"nearest"}))}else S==="اليوم"&&hn.current&&(hn.current=!1,Bt.current&&(Bt.current.scrollTop=0,(G=Bt.current.querySelector("header button"))==null||G.focus({preventScroll:!0})))},[S,O]);function qo(R){xe(R),hn.current=!0,ir(R)}Re.useLayoutEffect(()=>{if(r)return r.current=()=>{if(nr.current)return!1;const R=x||k;return!R||JSON.stringify(R)===tr.current||window.confirm("تترك التغييرات وتنتقل من المواعيد؟")},()=>{r.current=null}},[r,x,k]);function Ls(){if(nr.current)return;const R=x||k;R&&JSON.stringify(R)!==tr.current&&!window.confirm("ترجع للجدول وتترك التعديلات؟")||(x||k?(C(null),M(null),H("")):!he&&S==="اليوم"&&ee?(zt.current=ee,L(ee),w("الشهر"),xe(null),Q(!1),D(""),H("")):e())}function en(R,G=null){Ut(!!(G||R.phone||R.location)),ki(!!(R.note||Object.keys(R.items||{}).length)),kr.current=G,Zt("");const X={...R,items:{...R.items}};tr.current=JSON.stringify(X),C(X),H(""),Bt.current.scrollTop=0}function Ln(R,G){C(X=>({...X,[R]:G})),H("")}async function Dn(R,G){if(!(nr.current||!P)){nr.current=!0,V(!0),H("");try{const X=await R();C(null),M(null),H(X??G)}catch(X){H(X.code?"تعذّر الحفظ. افحص الاتصال والصلاحية وجرّب كمان مرة.":X.message)}finally{nr.current=!1,V(!1)}}}const Ar=R=>ui(wt,"lumora_calendar",t,"appointments",R);function rr(R,G){if(!R||R.rev!==G.rev||R.status!=="booked")throw Error("الموعد تغيّر من الجهاز الثاني. ارجع للجدول وافتحه من جديد.")}function ql(){Dn(async()=>{const R=FM(x),G=Ar(R.id);return await dr(wt,async X=>{const ae=(await X.get(G)).data();if(R.rev)rr(ae,R);else if(ae)throw Error("الموعد محفوظ. ارجع للجدول.");X.set(G,{...R,rev:R.rev+1,updatedAt:Date.now()})}),Me("appointments"),L(R.date),w("اليوم"),D(""),Q(!1),{kind:"saved",edited:!!R.rev,name:dt(R),date:R.date,time:ma(R)}})}function gt(R){const G=dt(R)+" · "+R.date.split("-").reverse().join("/")+" · "+ma(R);window.confirm(`حذف الموعد نهائيًا؟
`+G+`
رح ينحذف من السجل وما بتقدر تسترجعه.`)&&Dn(async()=>{const X=Ar(R.id);await dr(wt,async ae=>{const Ee=await ae.get(X);if(!Ee.exists())throw Error("الموعد انحذف من قبل.");const ye=Ee.data();if(ye.status!=="cancelled"||ye.rev!==R.rev)throw Error("حالة الموعد تغيّرت. راجع الموعد قبل الحذف.");ae.delete(X)})},"تم حذف موعد "+G+" نهائيًا.")}function Wl(R){const G=dt(R)+" · "+R.date.split("-").reverse().join("/")+" · "+ma(R),X=R.date<or()?"تاريخ الموعد فات. ترجّعه بنفس تاريخه الأصلي؟":"ترجّع الموعد للجدول بنفس التاريخ والساعة؟";window.confirm(X+`
`+G)&&Dn(async()=>{const ae=Ar(R.id);await dr(wt,async Ee=>{const ye=(await Ee.get(ae)).data();if(!ye||ye.status!=="cancelled"||ye.rev!==R.rev)throw Error("الموعد تغيّر. راجع حالته بالجدول.");Ee.update(ae,{status:"booked",rev:ye.rev+1,updatedAt:Date.now()})}),ir(R.date)},"تم استرجاع موعد "+G)}function Ds(R){window.confirm("تأكيد إلغاء موعد "+dt(R)+"؟ رح يضل ظاهر بالسجل.")&&Dn(async()=>{const G=Ar(R.id);await dr(wt,async X=>{rr((await X.get(G)).data(),R),X.update(G,{status:"cancelled",rev:R.rev+1,updatedAt:Date.now()})})},{kind:"cancelled",name:dt(R),date:R.date,time:ma(R)})}function Os(){Dn(async()=>{const{r:R,price:G,paid:X,method:ae,partial:Ee,payDate:ye}=k,fn=ru(G),ct=Ee?ru(X||"0"):fn;if(!fn||ct>fn)throw Error("افحص السعر والمبلغ المقبوض.");if(R.date>or()||ct&&(!ye||ye<R.date||ye>or()))throw Error("تاريخ القبض لازم يكون بين يوم الشغل واليوم.");const Tt=Ar(R.id),Ht="visit-"+R.id,Pr=ui(wt,"lumora_finance",t,"entries",Ht);await dr(wt,async Rr=>{const Se=(await Rr.get(Tt)).data(),qs=(await Rr.get(Pr)).exists();if((Se==null?void 0:Se.status)==="done"&&Se.entryId===Ht&&qs)return;if(rr(Se,R),qs)throw Error("في قيد مالي مرتبط بالموعد. راجع الدفتر.");const Ws=Object.entries(R.items).map(([bn,ea])=>[bn,ea].filter(Boolean).join(" × ")).join("، ");Rr.set(Pr,{kind:"job",date:R.date,total:fn,wallet:0,to:1,name:dt(R),note:[Ws,ct?"القبض: "+ae:"بانتظار القبض",R.note].filter(Boolean).join(" · "),category:"",lines:Object.entries(R.items).filter(([,bn])=>bn).map(([bn,ea])=>({type:bn,qty:Number(ea),unit:"قطعة"})),payments:ct?[{id:Ht,date:ye,wallet:0,amount:ct,method:ae}]:[],rev:1,cancelled:!1,lastOp:Ht,appointmentId:R.id}),Rr.update(Tt,{status:"done",entryId:Ht,price:String(fn/100),rev:R.rev+1,updatedAt:Date.now()})})},"تم إنهاء الزيارة وتسجيل الشغل بالدفتر المالي.")}const{people:Nr,byDate:Wo}=j.useMemo(()=>{const R=new Map,G=new Map;for(const X of b){const ae=dt(X),Ee=R.get(ae);(!Ee||(X.updatedAt||0)>=(Ee.updatedAt||0))&&R.set(ae,X),G.has(X.date)||G.set(X.date,[]),G.get(X.date).push(X)}return{people:R,byDate:G}},[b]),sr=j.useMemo(()=>[...Nr.keys()].sort(),[Nr]),Ai=Cp(We),Go=j.useMemo(()=>Ai?sr.filter(R=>J0(Nr.get(R),Ai)):[],[sr,Nr,Ai]),Vs=Ac(O),Gl=Ac(O,1),Kl=Wo.get(O)||[],Xe=Cp(F),Fs=j.useMemo(()=>{if(!he&&!Xe)return[];const R=b.filter(G=>{if(he){if(G.status!=="done"&&G.status!=="cancelled"||Fe!=="all"&&G.status!==Fe)return!1}else if(G.status!=="booked")return!1;return!Xe||J0(G,Xe,!0)});return he?R.reverse():R},[b,Xe,he,Fe]),Ni=x!=null&&x.rev?x:k==null?void 0:k.r,ze=Ni?b.find(R=>R.id===Ni.id):null,zs=!!(P&&Ni&&(!ze||ze.rev!==Ni.rev||ze.status!=="booked"));function Ko(){if(nr.current||!P)return;const R=x||k;if(!(R&&JSON.stringify(R)!==tr.current&&!window.confirm("تحميل التحديث وترك التغييرات اللي كتبتها هون؟")))if(!ze||ze.status!=="booked")C(null),M(null),H((ze==null?void 0:ze.status)==="done"?"الزيارة منتهية ومسجّلة بالدفتر.":(ze==null?void 0:ze.status)==="cancelled"?"الموعد انلغى.":"الموعد لم يعد متاحًا.");else if(x)en(ze);else{const G={r:ze,price:ze.price,paid:"",partial:!1,method:"كاش",payDate:or()};tr.current=JSON.stringify(G),M(G),H("")}}const $t=or(),Us=(Wo.get($t)||[]).find(R=>R.status==="booked"),Bs=Kl.filter(R=>R.status==="booked"),On=he||Xe?Fs:Bs,Qo=On.length>0&&On.every(R=>lt.has(R.id));function $d(){const R=On.length;if(Xe)return"نتائج البحث ("+R+")";if(he)return"الزيارات ("+R+")";const G=R===1?"موعد":R===2?"موعدان":R+" "+(R>=3&&R<=10?"مواعيد":"موعد");return O<$t?G+" بحاجة لمراجعة":O===$t?R===2?"باقي موعدين":"باقي "+G:R===1?"موعد واحد مجدول":R===2?"موعدان مجدولان":G}function ir(R){Me("appointments"),L(R),w("اليوم"),D(""),Q(!1)}function Ql(){z.current=O,xe(null),D(""),Q(!1),H(""),w("الشهر")}function Yo(){ir(z.current||O),z.current=null}function $s(R){const G=R.status==="booked",X=(Us==null?void 0:Us.id)===R.id,ae=lt.has(R.id)?!Ye:Ye,Ee="wc-appointment-details-"+R.id;return c.jsxs("article",{className:"wc-card","data-next":X,"data-status":R.status,children:[c.jsxs("div",{className:"wc-card-top",children:[c.jsxs("button",{type:"button",className:"wc-card-toggle","aria-expanded":ae,"aria-controls":Ee,onClick:()=>Ul(R.id),children:[(X||!G||Xe)&&c.jsxs("span",{className:"wc-visit-meta",children:[X&&c.jsx("span",{className:"wc-visit-next",children:"الجاي"}),R.status==="done"&&c.jsx("span",{className:"wc-visit-done",children:"تمّ الشغل"}),R.status==="cancelled"&&c.jsx("span",{className:"wc-visit-cancelled",children:"ملغي"}),(he||Xe)&&c.jsx("time",{dateTime:R.date,children:ur(R.date).toLocaleDateString("ar",{day:"numeric",month:"short",year:"numeric"})})]}),c.jsxs("span",{className:"wc-visit-line",dir:"rtl",children:[c.jsx("bdi",{className:"wc-visit-time",dir:"ltr",children:ma(R)}),c.jsx("strong",{className:"wc-visit-client",children:c.jsx("bdi",{dir:"auto",children:dt(R)})}),c.jsx("svg",{className:"wc-fold-chevron","aria-hidden":"true",viewBox:"0 0 20 20",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"m5 8 5 5 5-5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]}),(G||ae&&R.status==="done"&&(R.location||R.phone))&&c.jsxs("div",{className:"wc-actions wc-contact wc-quick-contact",role:"group","aria-label":"تواصل وملاحة · "+dt(R),children:[R.location?c.jsx("a",{className:"wc-primary wc-icon-link","aria-label":"افتح موقع "+dt(R)+" بويز",title:"ويز",href:R.location,target:"_blank",rel:"noreferrer",children:c.jsx(Xh,{kind:"waze"})}):G?c.jsx("button",{className:"wc-add-location",disabled:!P||q,title:"أضف موقع ويز","aria-label":"أضف موقع ويز لـ "+dt(R),onClick:()=>en(R,"location"),children:c.jsx(Z0,{kind:"location"})}):null,R.phone&&c.jsxs(c.Fragment,{children:[c.jsx("a",{className:"wc-icon-link","aria-label":"واتساب "+dt(R),title:"واتساب",href:"https://wa.me/"+R.phone.slice(1),target:"_blank",rel:"noreferrer",children:c.jsx(Xh,{kind:"whatsapp"})}),c.jsx("a",{className:"wc-icon-link","aria-label":"اتصال بـ "+dt(R),title:"اتصال",href:"tel:"+R.phone,children:c.jsx(Xh,{kind:"phone"})})]}),!R.phone&&G&&c.jsx("button",{type:"button",className:"wc-add-phone",disabled:!P||q,"aria-label":"أضف تلفون لـ "+dt(R),title:"أضف تلفون",onClick:()=>en(R,"phone"),children:c.jsx(Z0,{kind:"phone"})})]})]}),c.jsxs("div",{id:Ee,className:"wc-card-body",hidden:!ae,children:[Object.keys(R.items||{}).length>0&&c.jsx("ul",{className:"wc-job-items","aria-label":"الشغل المطلوب",children:Object.entries(R.items).map(([ye,fn])=>c.jsxs("li",{children:[ye,fn&&c.jsxs(c.Fragment,{children:[" × ",c.jsx("bdi",{children:fn})]})]},ye))}),R.price&&c.jsxs("div",{className:"wc-card-price",children:[c.jsx("span",{children:"السعر المتفق عليه"}),c.jsx("strong",{children:c.jsx("bdi",{dir:"ltr",children:LM(ru(R.price))})})]}),R.note&&c.jsx("p",{className:"wc-card-note",children:R.note}),R.status==="cancelled"&&c.jsxs("div",{className:"wc-cancelled-actions",dir:"rtl",children:[c.jsxs("button",{type:"button",className:"wc-restore-action",disabled:!P||q,onClick:()=>Wl(R),children:[c.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",children:c.jsx("path",{d:"m14 4 5 5-5 5M19 9h-8a6 6 0 0 0 0 12"})}),c.jsx("span",{children:"استرجاع الموعد"})]}),c.jsxs("button",{type:"button",className:"wc-delete-action",disabled:!P||q,onClick:()=>gt(R),children:[c.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",children:c.jsx("path",{d:"M3 6h18M9 6V4h6v2M6 6l1 14h10l1-14M10 10v6m4-6v6"})}),c.jsx("span",{children:"حذف نهائي"})]})]}),G&&c.jsxs("div",{className:"wc-actions wc-work",children:[c.jsx("button",{disabled:!P||q||R.date>or(),onClick:()=>{const ye={r:R,price:R.price,paid:"",partial:!1,method:"كاش",payDate:or()};tr.current=JSON.stringify(ye),M(ye),H(""),Bt.current.scrollTop=0},children:"تم الشغل"}),c.jsxs("details",{className:"wc-manage",children:[c.jsx("summary",{children:"إدارة الموعد"}),c.jsxs("div",{children:[c.jsx("button",{disabled:!P||q,onClick:()=>en(R),children:"تعديل الموعد"}),c.jsx("button",{className:"wc-cancel",disabled:!P||q,onClick:()=>Ds(R),children:"إلغاء الموعد"})]})]})]})]})]},R.id)}const tn=(R,G,X="text",ae={})=>c.jsx(qr,{title:G,children:c.jsx("input",{type:X,value:x[R],onChange:Ee=>Ln(R,Ee.target.value),...ae})});function Xo(R,G,X,ae,Ee={}){const ye=x[R]||"",fn=X==="date"&&ye?ur(ye).toLocaleDateString("ar",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):ye;return c.jsxs("label",{className:"wc-book-picker wc-book-picker-"+X,children:[c.jsx("span",{className:"wc-picker-label",children:G}),c.jsxs("span",{className:"wc-picker-box","data-filled":!!ye,children:[c.jsx("span",{"aria-hidden":"true",className:"wc-picker-value",children:X==="time"&&ye?c.jsx("bdi",{dir:"ltr",children:ye}):fn||ae}),c.jsx("svg",{"aria-hidden":"true",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",children:X==="date"?c.jsxs(c.Fragment,{children:[c.jsx("rect",{x:"3",y:"5",width:"18",height:"16",rx:"3"}),c.jsx("path",{d:"M7 3v4m10-4v4M3 10h18"})]}):c.jsxs(c.Fragment,{children:[c.jsx("circle",{cx:"12",cy:"12",r:"9"}),c.jsx("path",{d:"M12 6v6l4 2"})]})}),c.jsx("input",{type:X,"aria-label":G,value:ye,onChange:ct=>Ln(R,ct.target.value),onClick:ct=>{var Tt,Ht;try{(Ht=(Tt=ct.currentTarget).showPicker)==null||Ht.call(Tt)}catch{}},...Ee})]})]})}const Hs=(R,G)=>M(X=>({...X,[R]:G})),Jo=c.jsx("div",{className:"wc-top-actions",children:c.jsx("button",{type:"button",className:"wc-settings-launch",title:"إعدادات المواعيد","aria-label":"إعدادات المواعيد",onClick:()=>m(!0),children:c.jsxs("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"19",height:"19",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[c.jsx("path",{d:"M4 7h7m4 0h5M4 17h2m4 0h10"}),c.jsx("circle",{cx:"13",cy:"7",r:"2"}),c.jsx("circle",{cx:"8",cy:"17",r:"2"})]})})});return c.jsxs(o,{ref:Bt,className:"wc","data-embedded":n,"data-form":!!(x||k),dir:"rtl","aria-label":"مواعيد الشغل",onCancel:R=>{R.preventDefault(),Ls()},children:[(!n||x||k||!he&&S==="اليوم"&&ee)&&c.jsxs("header",{"data-admin-step":"",className:"wc-row",children:[c.jsx("h2",{children:x?x.rev?"تعديل الموعد":"موعد جديد":k?"إنهاء الزيارة":n&&!he&&ee?"مواعيد اليوم المختار":"مواعيد الشغل"}),(!n||x||k||!he&&S==="اليوم"&&ee)&&c.jsx("button",{disabled:q,onClick:Ls,children:x||k?"رجوع":!he&&S==="اليوم"&&ee?"رجوع للتقويم":"إغلاق"})]}),E?c.jsxs("p",{role:"alert",children:[E," ",c.jsx("button",{onClick:()=>I(R=>R+1),children:"إعادة المحاولة"})]}):!P&&c.jsx("p",{role:"status",children:"بانتظار الاتصال لعرض آخر التحديثات والحفظ."}),x?c.jsxs("form",{className:"wc-fast-booking",onSubmit:R=>{R.preventDefault(),ql()},children:[c.jsxs("fieldset",{className:"wc-form-scroll",disabled:q,children:[c.jsxs("section",{className:"wc-booking-section","aria-label":"الزبون",children:[c.jsx("h3",{children:"الزبون"}),!x.rev&&Nr.size>0&&c.jsxs("details",{className:"wc-returning-option",onToggle:R=>{var X;const G=R.currentTarget;G.open?(X=G.querySelector('input[type="search"]'))==null||X.focus():Zt("")},children:[c.jsx("summary",{children:"زبون راجع؟"}),c.jsxs("div",{className:"wc-customer-picker",children:[c.jsx(qr,{title:"ابحث عن زبون سابق",children:c.jsx("input",{type:"search",value:We,placeholder:"ابحث بالبلد، رقم الزبون أو التلفون",onChange:R=>Zt(R.target.value)})}),Ai&&c.jsxs("div",{className:"wc-customer-results",children:[Go.slice(0,6).map(R=>{const G=Nr.get(R);return c.jsxs("button",{type:"button",onClick:X=>{var Ee;const ae=X.currentTarget.closest("details");ae&&(ae.open=!1,(Ee=ae.querySelector("summary"))==null||Ee.focus()),C(ye=>({...ye,town:G.town,number:G.number,phone:G.phone||"",location:G.location||""})),Ut(!!(G.phone||G.location)),Zt(""),H("")},children:[c.jsx("bdi",{dir:"auto",children:R}),c.jsx("bdi",{dir:"ltr",children:G.phone})]},R)}),Go.length>6&&c.jsx("small",{children:"في نتائج إضافية. اكتب كمان حرف أو رقم."}),!Go.length&&c.jsx("small",{children:"ما لقينا زبون مطابق. فيك تسجّله بخانات البلد والرقم تحت."})]})]})]}),c.jsxs("div",{className:"wc-grid wc-customer-identifiers",children:[c.jsx(zM,{value:x.town,names:a,onChange:R=>Ln("town",R)},x.id),tn("number","رقم الزبون بالبلد","text",{inputMode:"numeric",placeholder:"0",required:!0,enterKeyHint:"next",onKeyDown:R=>{var G;R.key!=="Enter"||R.nativeEvent.isComposing||(R.preventDefault(),R.currentTarget.reportValidity()&&((G=$l.current)==null||G.focus()))}})]})]}),c.jsxs("section",{className:"wc-booking-section","aria-label":"الموعد والسعر",children:[c.jsx("h3",{children:"الموعد والسعر"}),Xo("date","يوم الزيارة","date","اختَر التاريخ",{required:!0}),c.jsxs("div",{className:"wc-book-time-pair",children:[c.jsx(tw,{title:"من الساعة",value:x.start,placeholder:"اختَر الوقت",buttonRef:$l,onPick:R=>Ln("start",R)}),c.jsx(tw,{title:"لغاية · اختياري",value:x.end,placeholder:"أضف وقت نهاية",optional:!0,after:x.start,onPick:R=>Ln("end",R)})]}),c.jsx("div",{className:"wc-book-price-row",children:tn("price","السعر المتفق عليه ₪","text",{inputMode:"decimal",dir:"ltr",placeholder:"0.00"})})]}),c.jsxs("section",{className:"wc-booking-section wc-extra-section","aria-label":"الموقع والتواصل",children:[c.jsxs("button",{type:"button",className:"wc-extra-toggle","aria-expanded":Lt,"aria-controls":"wc-book-contact",onClick:()=>Ut(R=>!R),children:[c.jsx("span",{children:x.location||x.phone?"الموقع والتلفون":"إضافة موقع أو تلفون"}),c.jsx("span",{"aria-hidden":"true",children:Lt?"−":"+"})]}),c.jsxs("div",{id:"wc-book-contact",hidden:!Lt,children:[tn("location","رابط ويز · اختياري","text",{dir:"ltr",ref:Hl,placeholder:"https://www.waze.com/…"}),tn("phone","تلفون الزبون · اختياري","tel",{dir:"ltr",ref:Ho,inputMode:"tel"})]})]}),c.jsxs("section",{className:"wc-booking-section wc-extra-section","aria-label":"تفاصيل الشغل",children:[c.jsxs("button",{type:"button",className:"wc-extra-toggle","aria-expanded":Ps,"aria-controls":"wc-book-job",onClick:()=>ki(R=>!R),children:[c.jsx("span",{children:"تفاصيل الشغل وملاحظة"}),c.jsx("span",{"aria-hidden":"true",children:Ps?"−":"+"})]}),c.jsxs("div",{id:"wc-book-job",hidden:!Ps,children:[jM.map(R=>c.jsxs("div",{className:"wc-service",children:[c.jsxs("label",{children:[c.jsx("input",{type:"checkbox",checked:R in x.items,onChange:G=>{const X={...x.items};G.target.checked?X[R]="":delete X[R],Ln("items",X)}})," ",R]}),R in x.items&&c.jsx("input",{"aria-label":"كمية "+R,inputMode:"numeric",placeholder:"الكمية",value:x.items[R],onChange:G=>Ln("items",{...x.items,[R]:G.target.value})})]},R)),tn("note","ملاحظة · اختياري")]})]})]}),c.jsxs("div",{className:"wc-submit",children:[zs&&!q&&c.jsxs("div",{className:"wc-stale",role:"status",children:[c.jsx("span",{children:"الموعد تغيّر من وقت ما فتحته."}),c.jsx("button",{type:"button",onClick:Ko,children:"تحميل آخر نسخة"})]}),c.jsxs("div",{className:"wc-booking-actions",children:[c.jsx("button",{type:"submit",className:"wc-primary wc-wide",disabled:!P||q||zs,children:q?"جارٍ الحفظ…":E?"تعذّر الاتصال بالسجل":P?"حفظ الموعد":"بانتظار الاتصال…"}),c.jsx("button",{type:"button",className:"wc-booking-back",disabled:q,onClick:Ls,children:"رجوع"})]})]})]}):k?c.jsxs("form",{onSubmit:R=>{R.preventDefault(),Os()},children:[c.jsxs("fieldset",{className:"wc-form-scroll",disabled:q,children:[c.jsx("h3",{dir:"auto",children:dt(k.r)}),c.jsx(qr,{title:"سعر الشغلة النهائي ₪",children:c.jsx("input",{required:!0,inputMode:"decimal",value:k.price,onChange:R=>Hs("price",R.target.value)})}),c.jsx(qr,{title:"طريقة القبض",children:c.jsxs("select",{value:k.method,onChange:R=>Hs("method",R.target.value),children:[c.jsx("option",{children:"كاش"}),c.jsx("option",{children:"تحويل"})]})}),c.jsxs("label",{children:[c.jsx("input",{type:"checkbox",checked:k.partial,onChange:R=>Hs("partial",R.target.checked)}),"قبضنا جزء أو لسه ما قبضنا"]}),k.partial&&c.jsx(qr,{title:"المبلغ المقبوض ₪",children:c.jsx("input",{inputMode:"decimal",placeholder:"0",value:k.paid,onChange:R=>Hs("paid",R.target.value)})}),c.jsx(qr,{title:"يوم القبض",children:c.jsx("input",{type:"date",min:k.r.date,max:or(),value:k.payDate,onChange:R=>Hs("payDate",R.target.value)})})]}),c.jsxs("div",{className:"wc-submit",children:[zs&&!q&&c.jsxs("div",{className:"wc-stale",role:"status",children:[c.jsx("span",{children:"الموعد تغيّر من وقت ما فتحته."}),c.jsx("button",{type:"button",onClick:Ko,children:"تحميل آخر نسخة"})]}),c.jsx("button",{className:"wc-primary wc-wide",disabled:!P||q||zs,children:q?"جارٍ التسجيل…":E?"تعذّر الاتصال بالسجل":P?"تأكيد وتسجيل بالدفتر":"بانتظار الاتصال…"})]})]}):c.jsxs(c.Fragment,{children:[n&&i?wd.createPortal(Jo,i):Jo,(_==null?void 0:_.kind)==="saved"&&c.jsxs("div",{className:"wc-saved-notice",children:[c.jsx("span",{className:"wc-saved-check","aria-hidden":"true",children:"✓"}),c.jsxs("div",{role:"status","aria-atomic":"true",children:[c.jsxs("strong",{children:[_.edited?"تم تعديل موعد":"انحفظ موعد"," ",c.jsx("bdi",{dir:"auto",children:_.name})]}),c.jsxs("small",{children:[ur(_.date).toLocaleDateString("ar",{weekday:"long",day:"numeric",month:"long"})," · ",c.jsx("bdi",{dir:"ltr",children:_.time})]})]}),c.jsx("button",{type:"button","aria-label":"إخفاء تأكيد الحفظ",onClick:()=>H(""),children:"×"})]}),p&&c.jsx(UM,{uid:t,names:a,available:d,onClose:()=>m(!1)}),c.jsxs("div",{className:"wc-section-heading",dir:"rtl",children:[c.jsx("h3",{children:he?"سجل الزيارات":"الأدوار"}),c.jsxs("button",{type:"button",className:"wc-section-shortcut",onClick:()=>Cr(he?"appointments":"history"),children:[c.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"17",height:"17",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:he?c.jsx("path",{d:"M4 12h15m-6-6 6 6-6 6"}):c.jsxs(c.Fragment,{children:[c.jsx("circle",{cx:"12",cy:"12",r:"9"}),c.jsx("path",{d:"M12 7v5l3 2"})]})}),c.jsx("span",{children:he?"رجوع للأدوار":"السجل"})]})]}),he&&c.jsx("div",{className:"wc-record-filters",role:"group","aria-label":"حالة الزيارة",children:[["all","الكل"],["done","تمّ الشغل"],["cancelled","ملغي"]].map(([R,G])=>c.jsx("button",{type:"button","aria-pressed":Fe===R,onClick:()=>Le(R),children:G},R))}),!he&&!Xe&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"wc-fixed-toolbar",dir:"rtl",children:[c.jsx("button",{type:"button",className:"wc-calendar-toggle","aria-pressed":S==="الشهر",title:S==="الشهر"?"رجوع للمواعيد":"فتح الرزنامة","aria-label":S==="الشهر"?"رجوع للمواعيد":"فتح الرزنامة",onClick:S==="الشهر"?Yo:Ql,children:c.jsxs("svg",{viewBox:"0 0 24 24",width:"21",height:"21",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round","aria-hidden":"true",children:[c.jsx("rect",{x:"3",y:"5",width:"18",height:"16",rx:"3"}),c.jsx("path",{d:"M7 3v4m10-4v4M3 10h18"}),c.jsx("path",{d:"M8 14h2m4 0h2"})]})}),S==="اليوم"?c.jsxs("div",{className:"wc-day-strip",children:[c.jsx("button",{type:"button",onClick:()=>L(R=>Xs(R,-1)),children:"اليوم السابق"}),c.jsxs("span",{className:"wc-selected-date","aria-live":"polite","aria-atomic":"true",children:[O===$t?c.jsx("small",{children:"اليوم"}):O===Xs($t,1)?c.jsx("small",{children:"بكرا"}):O===Xs($t,2)?c.jsx("small",{children:"بعد بكرا"}):null,c.jsx("strong",{className:"wc-open-day-label",children:X0(O)}),c.jsx("small",{className:"wc-open-day-count",children:Bs.length===0?"ما في أدوار":Bs.length===1?"موعد واحد":"عدد الأدوار: "+Bs.length})]}),c.jsx("button",{type:"button",onClick:()=>L(R=>Xs(R,1)),children:"اليوم التالي"})]}):c.jsxs("div",{className:"wc-month-caption",children:[c.jsx("small",{children:"اختَر يومًا"}),c.jsx("strong",{"aria-live":"polite",children:ur(O).toLocaleDateString("ar",{month:"long",year:"numeric"})})]})]}),S==="اليوم"&&O!==$t&&c.jsx("button",{type:"button",className:"wc-period-reset",onClick:()=>ir($t),children:"ارجع لليوم"})]}),B&&c.jsx("input",{autoFocus:!0,className:"wc-wide wc-search",type:"search",placeholder:he?"ابحث في السجل":"ابحث بالأدوار من كل التواريخ","aria-label":he?"بحث بالسجل":"بحث بالأدوار من كل التواريخ",value:F,onChange:R=>D(R.target.value)}),he||Xe||S==="اليوم"?c.jsx(c.Fragment,{children:c.jsxs("div",{className:!he&&!Xe?"wc-swipe-day":void 0,onTouchStart:!he&&!Xe?Ms:void 0,onTouchEnd:!he&&!Xe?Bl:void 0,onTouchCancel:()=>{js.current=null},children:[On.length>0&&c.jsxs("div",{className:"wc-list-bar",children:[c.jsx("h3",{children:$d()}),On.length>1&&c.jsx("button",{type:"button",onClick:()=>Bd(On,!Qo),children:Qo?"طيّ الكل":"فتح الكل"})]}),On.map($s),P&&!On.length&&c.jsxs("div",{className:"wc-empty","data-empty-day":!he&&!Xe,role:"status",children:[c.jsx("strong",{children:Xe?"ما لقينا موعد مطابق":he?Fe==="done"?"ما في زيارات منتهية":Fe==="cancelled"?"ما في مواعيد ملغية":"السجل فاضي":O===$t?"ما في أدوار اليوم":"ما في أدوار بهالتاريخ"}),Xe?c.jsx("button",{type:"button",onClick:()=>D(""),children:"مسح البحث"}):!he&&null]})]})}):c.jsx(c.Fragment,{children:c.jsxs("section",{className:"wc-month-panel","aria-label":"تقويم الشهر",children:[c.jsxs("div",{className:"wc-month wc-month-readable",dir:"rtl",children:[["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"].map(R=>c.jsx("span",{className:"wc-weekday-name",children:R},R)),Array.from({length:ur(Vs).getDay()},(R,G)=>c.jsx("span",{"aria-hidden":"true"},"gap"+G)),Array.from({length:ur(Xs(Gl,-1)).getDate()},(R,G)=>{const X=Xs(Vs,G),ae=(Wo.get(X)||[]).filter(ye=>ye.status==="booked").length,Ee=X===$t;return c.jsxs("button",{type:"button",className:"wc-month-date","data-booked":ae>0,"data-today":Ee,"aria-current":Ee?"date":void 0,"aria-label":[Ee?"اليوم":"",X0(X),ae?"عدد المواعيد "+ae:"ما في مواعيد"].filter(Boolean).join("، "),"data-selected":X===O,"data-calendar-date":X,onClick:()=>qo(X),children:[c.jsx("span",{className:"wc-date-number",children:G+1}),c.jsx("span",{className:"wc-date-count-slot","aria-hidden":"true",children:ae>0&&c.jsx("span",{className:"wc-date-count",children:ae})})]},X)})]}),c.jsxs("div",{className:"wc-month-paging",dir:"rtl",role:"group","aria-label":"التنقل بين الشهور",children:[c.jsx("button",{type:"button",onClick:()=>L(R=>Ac(R,-1)),children:"الشهر السابق"}),c.jsx("button",{type:"button",onClick:()=>L(R=>Ac(R,1)),children:"الشهر التالي"})]}),c.jsxs("div",{className:"wc-month-key","aria-hidden":"true",children:[c.jsxs("span",{children:[c.jsx("i",{className:"wc-key-today"}),"اليوم"]}),c.jsxs("span",{children:[c.jsx("i",{className:"wc-key-count",children:"٢"}),"عدد المواعيد"]})]})]})})]}),(_==null?void 0:_.kind)==="cancelled"?c.jsxs("div",{className:"wc-cancel-notice",children:[c.jsxs("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"22",height:"22",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[c.jsx("circle",{cx:"12",cy:"12",r:"9"}),c.jsx("path",{d:"m8 12 2.5 2.5 5.5-5.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),c.jsxs("div",{role:"status","aria-atomic":"true",children:[c.jsxs("strong",{children:["تم إلغاء موعد ",c.jsx("bdi",{dir:"auto",children:_.name})]}),c.jsxs("small",{children:[c.jsx("bdi",{dir:"ltr",children:_.date.split("-").reverse().join("/")}),c.jsx("span",{"aria-hidden":"true",children:" · "}),c.jsx("bdi",{dir:"ltr",children:_.time})]})]}),c.jsx("button",{type:"button","aria-label":"إخفاء رسالة الإلغاء",onClick:()=>H(""),children:"×"})]}):typeof _=="string"&&_&&c.jsx("p",{className:"wc-msg",role:"status",children:_}),!x&&!k&&!p&&c.jsxs("div",{className:"wc-unified-action-menu",dir:"rtl",children:[oe&&c.jsxs(c.Fragment,{children:[c.jsx("button",{type:"button",className:"wc-menu-backdrop","aria-label":"إغلاق قائمة الإجراءات",onClick:()=>re(!1)}),c.jsxs("div",{className:"wc-menu-options",children:[c.jsxs("button",{type:"button",className:"wc-menu-option",disabled:!P||q,onClick:()=>{re(!1),en(VM(O))},children:[c.jsx("span",{className:"wc-menu-label",children:"إضافة موعد"}),c.jsx("span",{className:"wc-menu-option-icon","aria-hidden":"true",children:"+"})]}),c.jsxs("button",{type:"button",className:"wc-menu-option",onClick:()=>{re(!1),Q(R=>!R),D("")},children:[c.jsx("span",{className:"wc-menu-label",children:B?"إغلاق البحث":"بحث بالأدوار"}),c.jsx("span",{className:"wc-menu-option-icon","aria-hidden":"true",children:B?"×":c.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[c.jsx("circle",{cx:"10.5",cy:"10.5",r:"6.5"}),c.jsx("path",{d:"m16 16 5 5"})]})})]})]})]}),c.jsx("button",{type:"button",className:"wc-menu-main","aria-label":oe?"إغلاق الإجراءات":"فتح إجراءات المواعيد","aria-expanded":oe,"aria-haspopup":"true",onClick:()=>re(R=>!R),children:c.jsx("span",{"aria-hidden":"true",children:oe?"×":"+"})})]})]})}function BM({embedded:t=!1,leaveGuard:e,onHome:n,schedulePosition:r,actionHost:s}={}){var u;const[i,o]=j.useState(!1),a=(u=kn.currentUser)==null?void 0:u.uid;return t?a?c.jsx(nw,{uid:a,close:n,actionHost:s,embedded:!0,leaveGuard:e,schedulePosition:r}):null:c.jsxs(c.Fragment,{children:[c.jsx("button",{type:"button",className:"wc-launch",onClick:()=>o(!0),children:"مواعيد الشغل"}),i&&a&&c.jsx(nw,{uid:a,close:()=>o(!1)},a)]})}const Ur=["الصندوق","آدم","أمير"],kp=["مواد تنظيف","بنزين","أكل","شرب","أدهم – تسويق","أجرة عامل","أخرى"],rE=["مقاعد","فرشات","موكيت","سجاد","أخرى"],ga={job:"شغل زبون",cost:"مصروف",draw:"استلام حصة",move:"نقل مصاري"},zn=t=>(t/100).toLocaleString("he-IL",{maximumFractionDigits:2})+" ₪",$M=()=>Array.from(crypto.getRandomValues(new Uint32Array(4))).join("-"),zi=t=>t.kind==="job"||t.kind==="cost";function sE(t){return String(t).trim().replace(/[٠-٩]/g,e=>String(e.charCodeAt(0)-1632)).replace(/[۰-۹]/g,e=>String(e.charCodeAt(0)-1776)).replace(/[٫,]/g,".")}function Ap(t){const e=sE(t);if(!/^\d{1,8}(\.\d{1,2})?$/.test(e))throw Error("اكتب مبلغ صحيح، بحد أقصى خانتين بعد الفاصلة.");const[n,r=""]=e.split(".");return Number(n)*100+Number(r.padEnd(2,"0"))}function Un(){const t=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Jerusalem",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date),e=n=>t.find(r=>r.type===n).value;return[e("year"),e("month"),e("day")].join("-")}function iE(t,e="0001-01-01"){if(!/^\d{4}-\d{2}-\d{2}$/.test(t)||t<e||t>Un())throw Error("افحص تاريخ العملية. تاريخ الدفعة لازم يكون من تاريخ القيد لليوم.")}function zr(t){return t.total-t.payments.reduce((e,n)=>e+(n.cancelled?0:n.amount),0)}function rw(t,e){const n={receipts:0,costs:0,paidCosts:0,billed:0,draws:[0,0],shares:[0,0],cash:[0,0,0],categories:{},paidCategories:{}},r=new Map;function s(i,o){r.set(i,(r.get(i)||0)+o)}for(const i of t)if(!i.cancelled){e(i.date)&&(i.kind==="job"&&(n.billed+=i.total),i.kind==="cost"&&(n.costs+=i.total,n.categories[i.category]=(n.categories[i.category]||0)+i.total,s(i.date,-i.total)),(i.kind==="draw"||i.kind==="move")&&(n.cash[i.wallet]-=i.total,i.kind==="draw"?n.draws[i.to-1]+=i.total:n.cash[i.to]+=i.total));for(const o of i.payments)o.cancelled||!e(o.date)||(i.kind==="job"?(n.receipts+=o.amount,n.cash[o.wallet]+=o.amount,s(o.date,o.amount)):(n.paidCosts+=o.amount,n.paidCategories[i.category]=(n.paidCategories[i.category]||0)+o.amount,n.cash[o.wallet]-=o.amount))}for(const i of r.values()){const o=Math.trunc(i/2);n.shares[0]+=o,n.shares[1]+=i-o}return n}const ni="mt-1 min-h-11 w-full rounded-xl border bg-white px-3 text-base",yt="min-h-11 rounded-xl border bg-white px-3 py-2 font-bold disabled:opacity-50",Li=yt+" !bg-slate-900 text-white",oE=()=>({type:rE[0],qty:"",unit:"قطعة"});function Nc(t,e){return{kind:t,date:e,id:$M(),name:"",category:kp[0],total:"",partial:!1,paid:"",wallet:"0",to:"1",note:"",lines:[oE()]}}function Js({title:t,children:e}){return c.jsxs("label",{className:"block text-sm font-bold",children:[t,e]})}function sw({value:t,onChange:e,partner:n=!1}){return c.jsx("select",{className:ni,value:t,onChange:r=>e(r.target.value),children:Ur.map((r,s)=>(!n||s>0)&&c.jsx("option",{value:s,children:r},r))})}function HM(t){iE(t.date);const e=Ap(t.total),n=Number(t.wallet),r=Number(t.to);if(!e)throw Error("المبلغ لازم يكون أكبر من صفر.");const s=t.kind==="job";if((s||t.kind==="cost"&&["أجرة عامل","أخرى"].includes(t.category))&&!t.name.trim())throw Error("اكتب اسم الزبون أو العامل أو وصف المصروف.");if(t.kind==="move"&&n===r)throw Error("اختار مكانين مختلفين للنقل.");const o=zi(t)?t.partial?Ap(t.paid||"0"):e:0;if(o>e)throw Error("الدفعة أكبر من المبلغ.");const a=s?t.lines.map(u=>{const d=sE(u.qty);if(!/^\d{1,5}(\.\d{1,2})?$/.test(d)||Number(d)<=0||u.unit==="قطعة"&&!Number.isInteger(Number(d)))throw Error("افحص كمية كل خدمة. عدد القطع لازم يكون عدد صحيح.");return{...u,qty:Number(d)}}):[];return{kind:t.kind,date:t.date,total:e,wallet:n,to:r,name:t.name.trim(),note:t.note.trim(),category:t.kind==="cost"?t.category:"",lines:a,payments:o?[{id:t.id,date:t.date,wallet:n,amount:o}]:[],rev:1,cancelled:!1}}function qM({embedded:t=!1,leaveGuard:e,onHome:n}={}){var Cr;const r=t?"section":"dialog",s=j.useRef(null),i=j.useRef(!1),[o,a]=j.useState(t),[u,d]=j.useState([]),[h,p]=j.useState("loading"),[m,b]=j.useState(0),[T,P]=j.useState(Un),[N,E]=j.useState("اليوم"),[y,v]=j.useState(""),[I,O]=j.useState(null),[L,S]=j.useState(!1),[w,x]=j.useState(""),C=(Cr=kn.currentUser)==null?void 0:Cr.uid,[k,M]=j.useState("entries"),_=h==="ready";j.useEffect(()=>{if(!(!o||!C))return p("loading"),d([]),Wu(ng(wt,"lumora_finance",C,"entries"),{includeMetadataChanges:!0},z=>{d(z.docs.map(ee=>({...ee.data(),id:ee.id}))),p(z.metadata.fromCache?"offline":"ready")},z=>p(z.code==="permission-denied"?"denied":"error"))},[o,C,m]),j.useEffect(()=>{if(!o||t)return;const z=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=z}},[o]),Re.useLayoutEffect(()=>{if(e)return e.current=()=>!i.current&&(!I||window.confirm("تترك النموذج وتنتقل من الدفتر؟")),()=>{e.current=null}},[e,I]);function H(){if(!(i.current||I&&!window.confirm("ترك النموذج بدون حفظ؟"))){if(O(null),x(""),t){I?s.current&&(s.current.scrollTop=0):n();return}a(!1),s.current.close()}}function q(z,ee){x(""),O(xe=>({...xe,[z]:ee}))}function V(z){O(z),x(""),s.current.scrollTop=0}async function F(){if(!(i.current||!_||!C)){i.current=!0,S(!0),x("");try{const z=I,ee=ui(wt,"lumora_finance",C,"entries",z.rowId||z.id),xe=!z.rowId,zt=xe?HM(z):null;await dr(wt,async hn=>{const We=(await hn.get(ee)).data();if((We==null?void 0:We.lastOp)===z.id)return;if(xe){if(We)throw Error("رقم العملية موجود. افتح نموذج جديد.");hn.set(ee,{...zt,lastOp:z.id});return}if(!We||We.rev!==z.rev||We.cancelled)throw Error("السجل تغيّر. ارجع وافتحه من جديد.");const Zt={rev:We.rev+1,lastOp:z.id};if(z.kind==="pay"){iE(z.date,We.date);const Lt=Ap(z.total);if(!Lt||Lt>zr(We))throw Error("الدفعة لازم تكون ضمن المبلغ الباقي.");Zt.payments=[...We.payments,{id:z.id,date:z.date,amount:Lt,wallet:Number(z.wallet)}]}else{if(!z.note.trim())throw Error("اكتب سبب التصحيح.");if(z.kind==="voidPay"){const Lt=We.payments.find(Ut=>Ut.id===z.paymentId&&!Ut.cancelled);if(!Lt)throw Error("الدفعة غير متاحة.");Zt.payments=We.payments.map(Ut=>Ut.id===Lt.id?{...Ut,cancelled:!0,reason:z.note.trim()}:Ut)}else{if(We.payments.some(Lt=>!Lt.cancelled&&Lt.id!==z.rowId))throw Error("في دفعات لاحقة على القيد. راجعها وصحّحها أولاً.");Zt.cancelled=!0,Zt.reason=z.note.trim()}}hn.update(ee,Zt)}),z.kind.startsWith("void")||(P(z.date),E("اليوم"),v("")),M("entries"),O(null),x("تم الحفظ."),s.current.scrollTop=0}catch(z){x(z.code==="permission-denied"?"ما في صلاحية للحفظ.":z.code?"تعذّر الحفظ. افحص الاتصال وحاول مجددًا.":z.message)}finally{i.current=!1,S(!1)}}}const D=z=>N==="الشهر"?z.slice(0,7)===T.slice(0,7):z===T,B=rw(u,D),Q=rw(u,()=>!0),oe=z=>z.name||z.category||(z.kind==="draw"?Ur[z.to]:Ur[z.wallet]+" ← "+Ur[z.to]),re=z=>z.payments.reduce((ee,xe)=>xe.date>ee?xe.date:ee,z.date),Ve=u.filter(z=>(N==="المعلّق"?!z.cancelled&&zi(z)&&zr(z)>0:D(z.date)||z.payments.some(xe=>D(xe.date)))&&[oe(z),z.category,z.note,...z.lines.map(xe=>xe.type)].join(" ").includes(y.trim())).sort((z,ee)=>re(ee).localeCompare(re(z))||ee.id.localeCompare(z.id));function Me(z,ee,xe=""){V({...Nc(ee,Un()),rowId:z.id,rev:z.rev,paymentId:xe,name:oe(z),total:String(zr(z)/100)})}function Fe(z,ee,xe){q("lines",I.lines.map((zt,hn)=>hn===z?{...zt,[ee]:xe}:zt))}const Le=(z,ee)=>c.jsxs("div",{className:"fb-tile rounded-xl p-3",children:[c.jsx("small",{children:z}),c.jsx("bdi",{dir:"ltr",children:zn(ee)})]},z),he=`match /lumora_finance/{owner}/entries/{entry} {
  allow read, create, update: if request.auth != null && request.auth.uid == owner && owner == "`+C+`";
}`;return c.jsxs(c.Fragment,{children:[!t&&c.jsx("button",{type:"button",className:Li+" w-full",onClick:()=>{M("entries"),a(!0),s.current.showModal()},children:"دفتر آدم وأمير"}),c.jsxs(r,{"data-embedded":t,ref:s,dir:"rtl","aria-label":"دفتر آدم وأمير",onCancel:z=>{z.preventDefault(),H()},className:"finance-mobile-v2 fb-layout-3 fixed inset-0 m-0 h-[100dvh] max-h-[100dvh] w-full max-w-full overflow-y-auto overscroll-contain bg-white px-4 pb-6 pt-3 backdrop:bg-black/50 sm:m-auto sm:h-auto sm:max-h-[92dvh] sm:max-w-2xl sm:rounded-2xl sm:p-5",children:[(!t||I)&&c.jsxs("header",{"data-admin-step":"",className:"mb-3 flex items-center justify-between",children:[c.jsx("h2",{className:"text-lg font-bold",children:t&&I?ga[I.kind]||{pay:"تسجيل دفعة",voidPay:"تصحيح دفعة",void:"تصحيح قيد"}[I.kind]||"تفاصيل العملية":"دفتر آدم وأمير"}),c.jsx("button",{className:yt,disabled:L,onClick:H,children:t&&I?"رجوع":"إغلاق"})]}),h!=="ready"&&c.jsxs("div",{role:"status",children:[h==="denied"?"يلزم تفعيل صلاحية الدفتر.":h==="loading"?"جارٍ تحميل الدفتر…":"تعذّر تأكيد الاتصال.",h!=="loading"&&c.jsx("button",{className:yt,onClick:()=>b(z=>z+1),children:"إعادة المحاولة"})]}),!I&&w&&c.jsx("p",{role:"status",className:"my-2 rounded-xl bg-slate-50 p-3 font-bold",children:w}),I?c.jsxs("fieldset",{disabled:L,className:"space-y-3",children:[c.jsxs("h3",{className:"fb-form-title",children:[ga[I.kind]||(I.kind==="pay"?"تسجيل دفعة":"تصحيح السجل"),I.name&&!ga[I.kind]?" · "+I.name:""]}),!I.kind.startsWith("void")&&c.jsxs(c.Fragment,{children:[I.kind==="cost"&&c.jsxs("fieldset",{children:[c.jsx("legend",{className:"mb-1 font-bold",children:"على شو صرفت؟"}),c.jsx("div",{className:"grid grid-cols-3 gap-1",children:kp.map(z=>c.jsx("button",{type:"button","aria-pressed":I.category===z,className:I.category===z?Li:yt,onClick:()=>q("category",z),children:z},z))})]}),["job","cost"].includes(I.kind)&&c.jsx(Js,{title:I.kind==="job"?"اسم الزبون":"لِمين أو مقابل شو؟",children:c.jsx("input",{className:ni,value:I.name,onChange:z=>q("name",z.target.value)})}),I.kind==="job"&&c.jsxs("div",{children:[I.lines.map((z,ee)=>c.jsxs("div",{className:"my-2 flex flex-wrap gap-1",children:[c.jsx("select",{"aria-label":"الخدمة",className:yt,value:z.type,onChange:xe=>Fe(ee,"type",xe.target.value),children:rE.map(xe=>c.jsx("option",{children:xe},xe))}),c.jsx("input",{"aria-label":"الكمية",placeholder:"الكمية",inputMode:"decimal",className:"w-20 rounded-xl border p-2",value:z.qty,onChange:xe=>Fe(ee,"qty",xe.target.value)}),c.jsxs("select",{"aria-label":"الوحدة",className:yt,value:z.unit,onChange:xe=>Fe(ee,"unit",xe.target.value),children:[c.jsx("option",{children:"قطعة"}),c.jsx("option",{children:"م²"})]}),I.lines.length>1&&c.jsx("button",{className:yt,onClick:()=>q("lines",I.lines.filter((xe,zt)=>zt!==ee)),children:"إزالة"})]},ee)),c.jsx("button",{className:yt,onClick:()=>q("lines",[...I.lines,oE()]),children:"+ خدمة لنفس الزبون"})]}),c.jsx(Js,{title:"المبلغ ₪",children:c.jsx("input",{className:ni,inputMode:"decimal",value:I.total,onChange:z=>q("total",z.target.value)})}),zi(I)&&c.jsxs(c.Fragment,{children:[c.jsxs("label",{className:"flex min-h-11 items-center gap-2",children:[c.jsx("input",{type:"checkbox",checked:I.partial,onChange:z=>q("partial",z.target.checked)}),"دفع جزئي أو لسه ما اندفع"]}),I.partial&&c.jsx(Js,{title:"المبلغ اللي اندفع فعليًا ₪",children:c.jsx("input",{className:ni,inputMode:"decimal",placeholder:"0",value:I.paid,onChange:z=>q("paid",z.target.value)})})]}),c.jsx(Js,{title:I.kind==="job"?"مين قبض؟":I.kind==="pay"?"من أي جيبة طلع المبلغ أو لأي جيبة دخل؟":"من أي جيبة؟",children:c.jsx(sw,{value:I.wallet,onChange:z=>q("wallet",z)})}),["draw","move"].includes(I.kind)&&c.jsx(Js,{title:I.kind==="draw"?"مين استلم حصّته؟":"لوين انتقلت؟",children:c.jsx(sw,{partner:I.kind==="draw",value:I.to,onChange:z=>q("to",z)})})]}),!I.kind.startsWith("void")&&c.jsx(c.Fragment,{children:c.jsx(Js,{title:"تاريخ العملية",children:c.jsx("input",{className:ni,type:"date",value:I.date,max:Un(),onChange:z=>q("date",z.target.value)})})}),I.kind!=="pay"&&c.jsx(Js,{title:I.kind.startsWith("void")?"سبب التصحيح":"ملاحظة اختيارية",children:c.jsx("input",{className:ni,value:I.note,onChange:z=>q("note",z.target.value)})}),c.jsxs("div",{className:"fb-save sticky bottom-0 z-10 border-t bg-white py-2 pb-[max(.5rem,env(safe-area-inset-bottom))]",children:[w&&c.jsx("p",{role:"alert",className:"mb-2 text-sm font-bold text-red-700",children:w}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{disabled:!_||L,className:Li+" flex-1",onClick:F,children:L?"جارٍ الحفظ…":"حفظ العملية"}),c.jsx("button",{className:yt,onClick:()=>{window.confirm("ترك النموذج؟")&&(O(null),x(""))},children:"رجوع"})]})]})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"fb-actions grid grid-cols-2 gap-2",children:[c.jsx("button",{className:Li,disabled:!_,onClick:()=>V(Nc("job",Un())),children:"+ شغل زبون"}),c.jsx("button",{className:yt,disabled:!_,onClick:()=>V(Nc("cost",Un())),children:"+ مصروف"})]}),c.jsxs("details",{className:"my-2",children:[c.jsx("summary",{className:"cursor-pointer py-2",children:"استلام حصة أو نقل مصاري"}),c.jsx("div",{className:"grid grid-cols-2 gap-2",children:["draw","move"].map(z=>c.jsx("button",{className:yt,disabled:!_,onClick:()=>V(Nc(z,Un())),children:ga[z]},z))})]}),c.jsx("nav",{"aria-label":"فترة العرض",className:"my-3 grid grid-cols-3 gap-1 rounded-xl bg-slate-100 p-1",children:["اليوم","الشهر","المعلّق"].map(z=>c.jsx("button",{"aria-pressed":N===z,className:N===z?Li:yt,onClick:()=>{E(z),v(""),M("entries")},children:z},z))}),N!=="المعلّق"&&c.jsxs("div",{className:"mb-3 flex items-end gap-2",children:[c.jsxs("label",{className:"min-w-0 flex-1 text-sm font-bold",children:[N==="الشهر"?"شهر المراجعة":"تاريخ المراجعة",c.jsx("input",{className:ni,type:N==="الشهر"?"month":"date",value:N==="الشهر"?T.slice(0,7):T,onChange:z=>{const ee=z.target.value;ee&&P(N==="الشهر"?ee+"-01":ee)}})]}),(N==="الشهر"?T.slice(0,7)!==Un().slice(0,7):T!==Un())&&c.jsx("button",{className:yt,onClick:()=>P(Un()),children:N==="الشهر"?"هالشهر":"اليوم"})]}),N!=="المعلّق"&&_&&c.jsx(c.Fragment,{children:c.jsxs("section",{"aria-label":"ملخص الفترة",className:"fb-statement","data-loss":B.receipts<B.costs,children:[c.jsxs("div",{className:"fb-total-line",children:[c.jsx("h3",{children:B.receipts<B.costs?"العجز بعد المصاريف":"الصافي للتقسيم"}),c.jsx("bdi",{dir:"ltr",children:zn(B.receipts-B.costs)})]}),c.jsx("dl",{className:"fb-shares",children:["آدم","أمير"].map((z,ee)=>c.jsxs("div",{children:[c.jsxs("dt",{children:["حصة ",z]}),c.jsx("dd",{children:c.jsx("bdi",{dir:"ltr",children:zn(B.shares[ee])})})]},z))}),c.jsxs("dl",{className:"fb-flow",children:[c.jsxs("div",{children:[c.jsx("dt",{children:"قبض من الزباين"}),c.jsx("dd",{children:c.jsx("bdi",{dir:"ltr",children:zn(B.receipts)})})]}),c.jsxs("div",{children:[c.jsx("dt",{children:"مصاريف مستحقّة"}),c.jsx("dd",{children:c.jsx("bdi",{dir:"ltr",children:zn(B.costs)})})]})]})]})}),_&&N==="المعلّق"&&c.jsxs("div",{className:"mb-3 grid grid-cols-2 gap-2",children:[Le("باقي عند الزباين",u.filter(z=>!z.cancelled&&z.kind==="job").reduce((z,ee)=>z+zr(ee),0)),Le("باقي علينا",u.filter(z=>!z.cancelled&&z.kind==="cost").reduce((z,ee)=>z+zr(ee),0))]}),c.jsxs("nav",{className:"fb-sections","aria-label":"محتوى الدفتر",children:[c.jsx("button",{type:"button","aria-pressed":k==="entries",onClick:()=>M("entries"),children:"العمليات"}),c.jsx("button",{type:"button","aria-pressed":k==="reports",onClick:()=>M("reports"),children:"التقارير والأرصدة"})]}),k==="entries"?c.jsxs("section",{"aria-label":"سجل العمليات",children:[c.jsx("input",{className:"fb-search",type:"search","aria-label":"بحث بالاسم أو الفئة أو الملاحظة",placeholder:"ابحث باسم الزبون، المصروف أو الملاحظة",value:y,onChange:z=>v(z.target.value)}),_&&!Ve.length&&c.jsx("p",{className:"py-3",children:y?"ما في نتائج لهالبحث.":N==="المعلّق"?"كل الحسابات مسدّدة.":"ما في عمليات مسجّلة بهالفترة."}),Ve.map(z=>c.jsxs("details",{className:"fb-record","data-kind":z.kind,children:[c.jsxs("summary",{children:[c.jsx("span",{className:"fb-kind",children:ga[z.kind]}),c.jsx("span",{className:"fb-arrow","aria-hidden":"true",children:"⌄"}),c.jsx("strong",{className:"fb-title",children:oe(z)}),c.jsx("bdi",{dir:"ltr",className:"fb-amount",children:zn(z.total)}),z.cancelled?c.jsx("span",{className:"fb-state void",children:"ملغاة"}):zi(z)&&(zr(z)>0?c.jsxs("span",{className:"fb-state due",children:["باقي ",c.jsx("bdi",{dir:"ltr",children:zn(zr(z))})]}):c.jsx("span",{className:"fb-state paid",children:"مسدّد"}))]}),c.jsxs("p",{children:[z.date," · ",z.category," ",z.note]}),z.reason&&c.jsxs("p",{children:["سبب الإلغاء: ",z.reason]}),z.lines.map((ee,xe)=>c.jsxs("p",{children:[ee.type," · ",ee.qty," ",ee.unit]},xe)),!zi(z)&&c.jsxs("p",{children:["من ",Ur[z.wallet]," إلى ",Ur[z.to]]}),z.payments.map(ee=>c.jsxs("div",{className:"my-2",children:[ee.date," · ",zn(ee.amount)," · ",Ur[ee.wallet]," ",ee.cancelled?"· ملغاة: "+ee.reason:"",!z.cancelled&&!ee.cancelled&&c.jsx("button",{disabled:!_,className:yt,onClick:()=>Me(z,"voidPay",ee.id),children:"تصحيح دفعة"})]},ee.id)),!z.cancelled&&c.jsxs("div",{className:"flex flex-wrap gap-2",children:[zi(z)&&zr(z)>0&&c.jsx("button",{className:Li,disabled:!_,onClick:()=>Me(z,"pay"),children:z.kind==="job"?"قبض من الزبون":"دفع المصروف"}),c.jsx("button",{className:yt,disabled:!_,onClick:()=>Me(z,"void"),children:"إلغاء قيد خاطئ"})]})]},z.id))]}):c.jsxs("section",{"aria-label":"تقارير الدفتر",className:"fb-reports",children:[_&&N!=="المعلّق"&&c.jsxs(c.Fragment,{children:[c.jsxs("details",{className:"my-2",children:[c.jsx("summary",{className:"cursor-pointer py-2",children:"تفاصيل القبض والدفع والحصص"}),c.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[Le("قيمة الشغل",B.billed),Le("المدفوع للمصاريف",B.paidCosts),Le("استلم آدم",B.draws[0]),Le("استلم أمير",B.draws[1])]})]}),c.jsxs("details",{className:"my-2",children:[c.jsx("summary",{className:"py-2",children:"المصاريف حسب الفئة"}),kp.filter(z=>B.categories[z]||B.paidCategories[z]).map(z=>c.jsxs("button",{className:yt+" my-1 w-full text-start",onClick:()=>{v(z),M("entries")},children:[z," · مستحق ",zn(B.categories[z]||0)," · مدفوع ",zn(B.paidCategories[z]||0)]},z))]})]}),_&&c.jsxs("details",{className:"my-2",children:[c.jsx("summary",{className:"py-2",children:"الأرصدة من بداية الدفتر لليوم"}),Ur.map((z,ee)=>Le("مصاري الشغل عند "+z,Q.cash[ee])),["آدم","أمير"].map((z,ee)=>Le("حصة "+z+" المتراكمة بعد الاستلام",Q.shares[ee]-Q.draws[ee])),c.jsx("small",{children:"الرصيد السالب بالجيبة يعني إنّ المدفوع منها أكبر من المقبوض المسجّل فيها."})]})]}),c.jsxs("details",{className:"fb-settings",children:[c.jsx("summary",{children:"إعداد صلاحية الدفتر"}),c.jsx("button",{className:yt,onClick:async()=>{try{await navigator.clipboard.writeText(he),x("تم نسخ قاعدة الدفتر.")}catch{window.prompt("انسخ قاعدة المدير",he)}},children:"نسخ قاعدة المدير"})]})]})]})]})}const Br="min-h-12 rounded-xl border px-4 py-2 font-bold disabled:opacity-50",Pc=Br+" bg-slate-900 text-white",Jh=[["before","قبل"],["after","بعد"]];function WM(t){return["match /lumora_gallery/{pairId} {",'  function manager() { return request.auth != null && request.auth.uid == "'+t+'"; }',"  function validSide(v) {",'    return v is string && v.size() <= 200000 && (v == "" || v.matches("data:image/jpeg;base64,[A-Za-z0-9+/=]+"));',"  }","  function validPair() {","    let d = request.resource.data;",'    return d.keys().hasAll(["before","after","rev"])','      && d.keys().hasOnly(["before","after","rev"])',"      && d.rev is int && validSide(d.before) && validSide(d.after)",'      && ((pairId.matches("original-([1-9]|10)") && (d.before != "" || d.after != ""))','        || (pairId.matches("new-[0-9]+-[0-9]+-[0-9]+") && d.before != "" && d.after != ""));',"  }","  allow read: if true;","  allow create: if manager() && validPair() && request.resource.data.rev == 1;","  allow update: if manager() && validPair() && request.resource.data.rev == resource.data.rev + 1;","}","match /lumora_gallery/display-order {",'  function canOrder() { return request.auth != null && request.auth.uid == "'+t+'"; }',"  function validOrder() {","    let d = request.resource.data;",'    return d.keys().hasAll(["ids", "rev"]) && d.keys().hasOnly(["ids", "rev"])',"      && d.rev is int && d.ids is list && d.ids.size() > 0","      && d.ids.size() == d.ids.toSet().size();","  }","  allow create: if canOrder() && validOrder() && request.resource.data.rev == 1;","  allow update: if canOrder() && validOrder() && request.resource.data.rev == resource.data.rev + 1;","}"].join(`
`)}function GM({gallery:t,embedded:e=!1,leaveGuard:n,onHome:r}){const s=e?"section":"dialog",i=j.useRef(null),o=j.useRef(!1),[a,u]=j.useState(null),[d,h]=j.useState({}),[p,m]=j.useState(""),[b,T]=j.useState(""),P=t.status==="ready",[N,E]=j.useState(null),y=!!N&&N.ids.some((_,H)=>_!==N.initial[H]),v=y||Object.keys(d).length>0;function I(){const _=t.pairs.map(H=>H.id);E({ids:_,initial:_,version:t.orderVersion}),T(""),i.current.scrollTop=0}function O(_,H){E(q=>{if(!q)return q;const V=[...q.ids],F=V.indexOf(_),D=F+H;return F<0||D<0||D>=V.length?q:([V[F],V[D]]=[V[D],V[F]],{...q,ids:V})})}function L(){x("جارٍ حفظ الترتيب…",async()=>{await Oj(N.ids,N.version),S(null),T("تم حفظ ترتيب الصور.")})}function S(_){E(null),u(_),h({}),T(""),i.current&&(i.current.scrollTop=0)}j.useLayoutEffect(()=>{if(n)return n.current=()=>!o.current&&(!v||window.confirm("تترك تغييرات الصور وتنتقل؟")),()=>{n.current=null}},[n,v]);function w(){o.current||v&&!window.confirm("ترك التغييرات بدون حفظ؟")||(a||N?S(null):e?r():i.current.close())}async function x(_,H){if(!o.current){o.current=!0,m(_),T("");try{await H()}catch(q){q.message==="ORDER_CONFLICT"?T("انحفظ ترتيب أحدث من جهاز ثاني. ارجع للقائمة وافتح ترتيب الصور من جديد."):q.message==="CONFLICT"?T("تغيّرت المقارنة من جهاز آخر. ارجع للقائمة وافتحها من جديد."):q.code==="permission-denied"?T("حسابك ما معه صلاحية للحفظ. افحص قواعد المعرض."):q.code?T("تعذّر الحفظ. افحص الاتصال وجرّب مرة ثانية."):T(q.message)}finally{o.current=!1,m("")}}}function C(_,H){var V;const q=(V=_.target.files)==null?void 0:V[0];_.target.value="",q&&x("جارٍ تجهيز الصورة…",async()=>{const F=await Fj(q);h(D=>({...D,[H]:F}))})}function k(){x("جارٍ حفظ المقارنة…",async()=>{await Vj(a,d),S(null),T("تم حفظ المقارنة.")})}async function M(){var q;const _=(q=kn.currentUser)==null?void 0:q.uid;if(!_||!/^[a-zA-Z0-9_-]+$/.test(_)){T("تعذّر تحديد حساب المدير. سجّل الدخول من جديد.");return}const H=WM(_);try{await navigator.clipboard.writeText(H),T("تم نسخ قواعد المعرض.")}catch{window.prompt("انسخ قواعد المعرض",H)}}return c.jsxs(c.Fragment,{children:[!e&&c.jsx("button",{type:"button",className:Pc+" w-full",onClick:()=>{S(null),i.current.showModal()},children:"إدارة صور قبل وبعد"}),c.jsxs(s,{"data-embedded":e,ref:i,dir:"rtl","aria-label":"إدارة صور قبل وبعد",onCancel:_=>{_.preventDefault(),w()},className:"fixed inset-0 m-auto max-h-[92dvh] w-[96vw] max-w-2xl overflow-auto overscroll-contain rounded-2xl bg-white p-4 backdrop:bg-black/50",children:[(!e||a||N)&&c.jsxs("header",{"data-admin-step":"",className:"mb-4 flex items-center justify-between gap-2",children:[c.jsx("h2",{className:"text-lg font-bold",children:N?"ترتيب الصور":a?"معاينة المقارنة":"صور قبل وبعد"}),c.jsx("button",{type:"button",disabled:!!p,className:Br,onClick:w,children:a||N?"رجوع":"إغلاق"})]}),!P&&c.jsx("div",{role:"status",className:"mb-3 rounded-xl bg-amber-50 p-3",children:t.status==="loading"?"جارٍ تحميل المعرض…":c.jsxs(c.Fragment,{children:[c.jsx("p",{children:t.status==="denied"?"المعرض بحاجة لتفعيل الصلاحيات.":"تعذّر الاتصال بالمعرض."}),c.jsx("button",{type:"button",className:Br+" mt-2",onClick:t.retry,children:"إعادة المحاولة"})]})}),!a&&!N&&c.jsxs("details",{className:"mb-3 text-sm",children:[c.jsx("summary",{className:"cursor-pointer py-2",children:"إعداد صلاحيات المعرض"}),c.jsx("button",{type:"button",className:Br,onClick:M,children:"نسخ قواعد المعرض"})]}),c.jsx("p",{"aria-live":"polite",className:"mb-2 font-bold",children:p||b}),N?c.jsxs(c.Fragment,{children:[c.jsx("ol",{className:"space-y-2",children:N.ids.map((_,H)=>{const q=t.pairs.find(V=>V.id===_);return q?c.jsxs("li",{className:"flex items-center gap-2 rounded-xl border p-2",children:[c.jsx("span",{className:"w-6 shrink-0 text-center font-bold",children:H+1}),c.jsx("div",{className:"grid min-w-0 flex-1 grid-cols-2 gap-1",children:Jh.map(([V,F])=>c.jsxs("div",{children:[c.jsx("img",{src:q[V],alt:F,loading:"lazy",className:"aspect-square max-h-20 w-full rounded-lg object-cover"}),c.jsx("span",{className:"text-xs",children:F})]},V))}),c.jsxs("div",{className:"flex shrink-0 flex-col gap-1",children:[c.jsx("button",{type:"button",className:Br,"aria-label":"تقديم المقارنة رقم "+(H+1),disabled:!!p||H===0,onClick:()=>O(_,-1),children:"↑"}),c.jsx("button",{type:"button",className:Br,"aria-label":"تأخير المقارنة رقم "+(H+1),disabled:!!p||H===N.ids.length-1,onClick:()=>O(_,1),children:"↓"})]})]},_):null})}),c.jsx("div",{className:"sticky bottom-0 bg-white py-2",children:c.jsx("button",{type:"button",className:Pc+" w-full",disabled:!P||!!p||!y,onClick:L,children:"حفظ الترتيب"})})]}):a?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"grid grid-cols-2 gap-2",children:Jh.map(([_,H])=>c.jsxs("div",{className:"min-w-0",children:[c.jsx("strong",{children:H}),d[_]||a[_]?c.jsx("img",{src:d[_]||a[_],alt:H,className:"my-2 aspect-square w-full rounded-xl bg-slate-100 object-contain"}):c.jsx("div",{className:"my-2 aspect-square rounded-xl bg-slate-100"}),c.jsxs("label",{className:Br+" relative flex items-center justify-center text-center focus-within:ring-2",children:[d[_]||a[_]?"تبديل":"اختيار"," صورة ",H,c.jsx("input",{type:"file",accept:"image/*",disabled:!!p,"aria-label":"اختيار صورة "+H,className:"absolute inset-0 h-full w-full cursor-pointer opacity-0",onChange:q=>C(q,_)})]})]},_))}),c.jsx("button",{type:"button",className:Pc+" mt-5 w-full",disabled:!P||!!p||!v||!(a.before||d.before)||!(a.after||d.after),onClick:k,children:"حفظ المقارنة"})]}):c.jsxs(c.Fragment,{children:[c.jsx("button",{type:"button",className:Pc+" mb-3 w-full",disabled:!P,onClick:()=>S({id:"new-"+Date.now()+"-"+crypto.getRandomValues(new Uint32Array(2)).join("-"),rev:0}),children:"إضافة مقارنة"}),c.jsx("button",{type:"button",className:Br+" mb-3 w-full",disabled:!P||t.pairs.length<2,onClick:I,children:"ترتيب الصور"}),c.jsx("div",{className:"grid gap-3 sm:grid-cols-2",children:t.pairs.map((_,H)=>c.jsxs("button",{type:"button",disabled:!P,onClick:()=>S(_),className:"rounded-xl border p-2 text-start",children:[c.jsxs("strong",{children:["تعديل المقارنة ",H+1]}),c.jsx("span",{className:"mt-2 grid grid-cols-2 gap-2",children:Jh.map(([q,V])=>c.jsxs("span",{children:[c.jsx("img",{src:_[q],alt:"",loading:"lazy",className:"aspect-video w-full rounded-lg object-cover"}),V]},q))})]},_.id))})]})]})]})}const aE=j.createContext(null);function KM({children:t}){const[e,n]=j.useState([]),r=j.useCallback(o=>{n(a=>a.filter(u=>u.id!==o))},[]),s=j.useCallback(o=>{const a=o.id||`${Date.now()}-${Math.random().toString(16).slice(2)}`,u=o.type||"info",d=o.title||"",h=o.message||"",p=Number.isFinite(Number(o.durationMs))?Number(o.durationMs):2800,m={id:a,type:u,title:d,message:h,durationMs:p};return n(b=>[...b,m]),p>0&&window.setTimeout(()=>r(a),p),a},[r]),i=j.useMemo(()=>({push:s,remove:r,success:(o,a={})=>s({type:"success",message:o,...a}),error:(o,a={})=>s({type:"error",message:o,...a}),info:(o,a={})=>s({type:"info",message:o,...a})}),[s]);return c.jsxs(aE.Provider,{value:i,children:[t,c.jsx("div",{className:"fixed top-3 left-3 right-3 z-[9999] flex justify-center pointer-events-none",children:c.jsx("div",{className:"w-full max-w-xl space-y-2",children:e.map(o=>c.jsx(YM,{toast:o,onClose:()=>r(o.id)},o.id))})})]})}function QM(){const t=j.useContext(aE);return t||{push:()=>{},remove:()=>{},success:()=>{},error:()=>{},info:()=>{}}}function YM({toast:t,onClose:e}){const n="pointer-events-auto w-full rounded-2xl border px-3 py-2 shadow-lg bg-white flex items-start justify-between gap-3",r=t.type==="success"?"border-emerald-200":t.type==="error"?"border-rose-200":"border-slate-200",s=t.type==="success"?"✅":t.type==="error"?"⚠️":"ℹ️";return c.jsxs("div",{className:`${n} ${r}`,dir:"rtl",children:[c.jsxs("div",{className:"min-w-0",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"text-sm",children:s}),t.title?c.jsx("div",{className:"text-xs font-extrabold text-slate-900",children:t.title}):null]}),t.message?c.jsx("div",{className:"mt-1 text-[12px] text-slate-700 whitespace-pre-wrap break-words",children:t.message}):null]}),c.jsx("button",{type:"button",onClick:e,className:"h-8 px-3 rounded-2xl border border-slate-200 bg-white text-[11px] text-slate-700 hover:bg-slate-50","aria-label":"إغلاق التنبيه",children:"إغلاق"})]})}const Rc=("amir@lumora.example".trim()||"amir@lumora.example").trim().toLowerCase();function iw(t){return String(t||"").trim().toLowerCase()}function XM(){return c.jsxs("main",{className:`\r
        relative flex min-h-screen\r
        items-center justify-center\r
        overflow-hidden bg-[#F6F8FC]\r
        px-4\r
      `,dir:"rtl",children:[c.jsx("div",{className:`\r
          pointer-events-none absolute\r
          start-[-120px] top-[-140px]\r
          h-[320px] w-[320px]\r
          rounded-full bg-blue-100/70\r
          blur-3xl\r
        `,"aria-hidden":"true"}),c.jsxs("div",{className:`\r
          relative w-full max-w-sm\r
          rounded-[28px] border border-slate-200\r
          bg-white px-6 py-8 text-center\r
          shadow-[0_22px_65px_rgba(15,23,42,0.10)]\r
        `,children:[c.jsx("div",{className:`\r
            mx-auto flex h-14 w-14\r
            items-center justify-center\r
            rounded-2xl bg-blue-600\r
            text-white\r
            shadow-[0_10px_28px_rgba(37,99,235,0.24)]\r
          `,"aria-hidden":"true",children:c.jsx(Sm,{className:"h-7 w-7"})}),c.jsx(xx,{className:`\r
            mx-auto mt-5 h-6 w-6\r
            animate-spin text-blue-600\r
          `,"aria-hidden":"true"}),c.jsx("h1",{className:"mt-3 text-lg font-black text-slate-950",children:"جارٍ التحقق من جلسة الإدارة"}),c.jsx("p",{className:"mt-2 text-sm font-medium leading-6 text-slate-500",children:"لحظة واحدة، يتم التأكد من حالة تسجيل الدخول."})]})]})}function JM({message:t}){return t?c.jsx("div",{className:`\r
        pointer-events-none fixed\r
        left-1/2 top-4 z-[10200]\r
        w-[calc(100%-28px)] max-w-md\r
        -translate-x-1/2\r
      `,dir:"rtl",role:"alert",children:c.jsx("div",{className:`\r
          rounded-2xl border border-rose-200\r
          bg-white px-4 py-3\r
          text-center text-sm font-extrabold\r
          leading-6 text-rose-700\r
          shadow-[0_16px_45px_rgba(15,23,42,0.16)]\r
        `,children:t})}):null}function ZM({onExit:t,gallery:e}){const[n,r]=j.useState("calendar"),[s,i]=j.useState(null),o=Re.useRef(null),a=Re.useRef(null),u=()=>r("calendar");function d(w){w===n||o.current&&!o.current()||r(w)}const h=QM(),[p,m]=j.useState(!1),[b,T]=j.useState(null),[P,N]=j.useState(""),[E,y]=j.useState(!1),v=!!(p&&b);j.useEffect(()=>{let w=!0;const x=bR(kn,async C=>{if(!w)return;if(!C){T(null),m(!0);return}const k=iw(C.email);if(!Rc){T(null),N("بريد الأدمن غير موجود داخل ملف .env.local.");try{await Ca(kn)}catch(M){console.error("Failed to sign out unconfigured admin:",M)}finally{w&&m(!0)}return}if(k!==Rc){T(null),N("الحساب المسجل غير مخوّل للدخول إلى لوحة الإدارة.");try{await Ca(kn)}catch(M){console.error("Failed to sign out unauthorized user:",M)}finally{w&&m(!0)}return}N(""),T(C),m(!0)},C=>{console.error("Firebase auth state error:",C),w&&(T(null),m(!0),N("تعذر التحقق من جلسة الإدارة. افحص الاتصال وحاول مرة ثانية."))});return()=>{w=!1,x()}},[]);const I=j.useCallback(w=>{const x=iw(w==null?void 0:w.email);if(!Rc||x!==Rc){N("هذا الحساب غير مخوّل للدخول إلى لوحة الإدارة."),Ca(kn);return}T(w),m(!0),N(""),h.success("تم الدخول إلى لوحة الإدارة")},[h]);async function O(){if(!(E||o.current&&!o.current())){y(!0);try{await Ca(kn)}catch{y(!1),h.error("تعذّر تسجيل الخروج. حاول مرة ثانية.");return}y(!1),t==null||t()}}if(!p)return c.jsx(XM,{});if(!v)return c.jsxs(c.Fragment,{children:[c.jsx(JM,{message:P}),c.jsx(RM,{onAuthorized:I,onExit:t})]});const[L,S]=n==="finance"?[sv,"الحسابات"]:n==="gallery"?[rv,"الصور"]:[nv,"المواعيد"];return c.jsxs("main",{className:"la-app",dir:"rtl","data-section":n,children:[c.jsx("style",{children:`
      /* lumora-three-tabs-v1 */
      .la-app {
        block-size:100vh;block-size:100dvh;box-sizing:border-box;overflow:hidden;
        display:flex;flex-direction:column;align-items:center;
        background:var(--lumora-surface,#f5f7f2);color:var(--lumora-navy-900,#11152f);
        padding-top:env(safe-area-inset-top);
      }
      .la-brand,.la-page,.la-tabs {width:100%;max-width:720px;box-sizing:border-box}
      .la-brand {
        flex:none;display:flex;align-items:center;justify-content:space-between;
        padding:5px 16px;border-bottom:1px solid var(--lumora-border,#dfe5dc);
      }
      .la-brand h1 {margin:0;font-size:17px;font-weight:750}
      .la-brand button {
        min-height:44px;padding-inline:6px;font:inherit;font-size:13px;
        color:var(--lumora-text-soft,#5f6878);background:transparent;border:0;
      }
      .la-page {flex:1;min-height:0;overflow:hidden}
      .la-page > section[data-embedded=true] {
        display:block;position:relative;inset:auto;margin:0;box-sizing:border-box;
        width:100%;max-width:none;height:100%;min-height:0;max-height:none;
        overflow:auto;overscroll-behavior:contain;border:0;border-radius:0;
        padding-top:0;padding-bottom:12px;box-shadow:none;
      }
      .la-page > .wc[data-form=true] {display:flex;flex-direction:column;overflow:hidden}
      .la-page > .wc[data-embedded=true] {padding-top:0}
      .la-tabs {
        flex:none;background:white;border-top:1px solid var(--lumora-border,#dfe5dc);
        display:grid;grid-template-columns:repeat(3,minmax(0,1fr));
        padding:4px 8px max(5px,env(safe-area-inset-bottom));gap:4px;
      }
      .la-tabs button {
        min-height:52px;display:grid;justify-items:center;align-content:center;
        gap:3px;background:transparent;border:0;border-radius:12px;
        font-size:12px;font-weight:650;color:var(--lumora-text-soft,#5f6878);
      }
      .la-tabs button[aria-current=page] {
        background:#eff6dd;color:var(--lumora-navy-900,#11152f);
        box-shadow:inset 0 -3px var(--lumora-lime,#aedd39);
      }
      .la-tabs button:focus-visible,.la-brand button:focus-visible {
        outline:2px solid var(--lumora-cyan,#1094c0);outline-offset:-2px;
      }

      /* admin-unified-header-v1 */
      .la-app {
        --la-ink:var(--lumora-navy-900,#11152f);
        --la-muted:var(--lumora-text-soft,#5f6878);
        --la-line:var(--lumora-border,#dfe5dc);
        --la-surface:var(--lumora-surface,#f5f7f2);
      }
      .la-brand {
        min-height:60px;padding:6px clamp(12px,3vw,20px);
        background:var(--la-surface);border-bottom:1px solid var(--la-line);
      }
      .la-brand h1 {
        display:flex;align-items:baseline;flex-wrap:wrap;gap:8px;
        color:var(--la-ink);font-size:20px;line-height:1.4;font-weight:750;
      }
      .la-brand-name {font-size:14px;color:var(--la-muted)}
      .la-brand-divider {font-size:14px;color:var(--la-muted);font-weight:400}
      .la-brand button {flex-shrink:0;min-height:44px;padding-inline:8px}
      .la-page > section[data-embedded=true] {
        padding-inline:clamp(10px,3vw,18px);
        padding-top:10px;background:var(--la-surface);color:var(--la-ink);
      }
      .la-page > section[data-embedded=true] > header[data-admin-step] {
        position:sticky;top:0;z-index:2;
        display:flex;align-items:center;justify-content:space-between;
        gap:10px;min-height:52px;margin:0 0 10px;padding:4px 0 8px;
        background:var(--la-surface);color:var(--la-ink);
        border-bottom:1px solid var(--la-line);
      }
      .la-page > section[data-embedded=true] > header[data-admin-step] h2 {
        margin:0;color:var(--la-ink);font-size:17px;font-weight:700;line-height:1.4;
      }
      .la-page > section[data-embedded=true] > header[data-admin-step] button {
        flex-shrink:0;min-height:44px;padding:6px 12px;
        border:1px solid var(--la-line);border-radius:10px;background:white;
        color:var(--la-ink);font-size:14px;font-weight:650;
      }

      /* admin-section-hierarchy-v1 */
      .la-app {
        --la-ink:var(--lumora-navy-900,#11152f);
        --la-muted:var(--lumora-text-soft,#5f6878);
        --la-line:var(--lumora-border,#dfe5dc);
        --la-bg:var(--lumora-surface,#f5f7f2);
        --la-tint:#eaf4d4;
        --la-accent:#405713;
        background:var(--la-bg);color:var(--la-ink);
      }
      .la-app[data-section="finance"] {--la-tint:#e0f2f8;--la-accent:#18536b}
      .la-app[data-section="gallery"] {--la-tint:#eeeafa;--la-accent:#544582}

      .la-app .la-brand {
        flex:none;display:flex;align-items:center;justify-content:space-between;
        min-height:65px;padding:7px clamp(12px,3.5vw,22px);
        gap:12px;border-bottom:1px solid var(--la-line);background:var(--la-bg);
      }
      .la-app .la-brand h1 {
        display:flex;align-items:center;gap:10px;min-width:0;margin:0;
      }
      .la-section-icon {
        display:grid;place-items:center;flex:0 0 40px;height:40px;
        border-radius:13px;color:var(--la-accent);background:var(--la-tint);
      }
      .la-heading-copy {display:grid;justify-items:start;gap:0}
      .la-wordmark {
        font-size:12px;line-height:1.3;font-weight:650;color:var(--la-muted);
      }
      .la-section-name {
        font-size:clamp(20px,4.8vw,25px);font-weight:800;line-height:1.35;
        color:var(--la-ink);
      }
      .la-app .la-brand button {
        flex-shrink:0;min-height:44px;padding:6px 10px;
        color:var(--la-muted);background:transparent;
        border:1px solid transparent;border-radius:10px;
        font-size:13px;font-weight:600;
      }

      .la-page > section[data-embedded=true] {
        padding-inline:clamp(10px,3.5vw,22px);
        background:var(--la-bg);color:var(--la-ink);
      }
      .la-page > section[data-embedded=true] > header[data-admin-step] {
        gap:8px;min-height:50px;background:var(--la-bg);
        border-bottom:1px solid var(--la-line);
      }
      .la-page > section[data-embedded=true] > header[data-admin-step] h2 {
        color:var(--la-ink);font-size:17px;line-height:1.45;font-weight:700;
      }
      .la-page > section[data-embedded=true] > header[data-admin-step] button {
        min-height:44px;padding-inline:12px;border-radius:10px;
        color:var(--la-ink);border:1px solid var(--la-line);background:white;
      }

      .la-app .la-tabs {
        flex:none;position:relative;z-index:1;
        display:grid;grid-template-columns:repeat(3,minmax(0,1fr));
        gap:4px;padding:4px 8px max(5px,env(safe-area-inset-bottom));
        background:white;border-top:1px solid var(--la-line);
        box-shadow:0 -3px 12px rgb(17 21 47 / 4%);
      }
      .la-app .la-tabs button {
        display:grid;align-content:center;justify-items:center;gap:2px;
        min-width:0;min-height:54px;padding:2px 4px;border:0;
        background:transparent;color:var(--la-muted);box-shadow:none;
      }
      .la-tab-icon {
        display:grid;place-items:center;width:46px;height:28px;
        border-radius:12px;
      }
      .la-tab-label {font-size:12px;font-weight:600;line-height:1.4}
      .la-app .la-tabs button[aria-current=page] {
        color:var(--la-ink);background:transparent;box-shadow:none;
      }
      .la-tabs button[aria-current=page] .la-tab-icon {
        background:var(--la-tint);color:var(--la-accent);
      }
      .la-tabs button[aria-current=page] .la-tab-icon svg {stroke-width:2.5}
      .la-tabs button[aria-current=page] .la-tab-label {font-weight:800}
      .la-app .la-tabs button:focus-visible,
      .la-app .la-brand button:focus-visible {
        outline:2px solid var(--lumora-cyan,#1094c0);outline-offset:-2px;
      }
      @media(hover:hover) {
        .la-brand button:hover,.la-tabs button:not([aria-current]):hover {
          background:var(--la-bg);color:var(--la-ink);
        }
      }
      @media(max-height:540px) {
        .la-app .la-brand {min-height:46px;padding-block:1px}
        .la-app .la-wordmark {display:none}
        .la-app .la-tabs button {min-height:44px;display:flex;justify-content:center;gap:4px}
        .la-app .la-tab-icon {width:30px;height:26px}
      }
    `}),c.jsxs("header",{className:"la-brand",children:[c.jsxs("h1",{children:[c.jsx("span",{className:"la-section-icon","aria-hidden":"true",children:c.jsx(L,{size:22})}),c.jsxs("span",{className:"la-heading-copy",children:[c.jsx("span",{className:"sr-only",children:"Lumora "}),c.jsx("span",{className:"la-section-name",children:S})]})]}),n==="calendar"&&c.jsx("div",{className:"la-calendar-actions",ref:i}),c.jsx("button",{type:"button",className:"la-signout",disabled:E,"aria-label":"تسجيل الخروج",title:"تسجيل الخروج",onClick:()=>{window.confirm("تسجيل الخروج من إدارة Lumora؟")&&O()},children:c.jsx("svg",{className:"la-exit-icon",viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:c.jsx("path",{d:"M10 4H5v16h5M10 12h11m-4-4 4 4-4 4"})})})]}),c.jsxs("div",{className:"la-page",children:[n==="calendar"&&c.jsx(BM,{actionHost:s,embedded:!0,leaveGuard:o,onHome:u,schedulePosition:a}),n==="finance"&&c.jsx(qM,{embedded:!0,leaveGuard:o,onHome:u}),n==="gallery"&&c.jsx(GM,{gallery:e,embedded:!0,leaveGuard:o,onHome:u})]},b.uid+n),c.jsx("nav",{"aria-label":"أقسام الإدارة",className:"la-tabs",children:[[nv,"calendar","المواعيد"],[sv,"finance","الحسابات"],[rv,"gallery","الصور"]].map(([w,x,C])=>c.jsxs("button",{type:"button","aria-current":n===x?"page":void 0,onClick:()=>d(x),children:[c.jsx("span",{className:"la-tab-icon","aria-hidden":"true",children:c.jsx(w,{size:21})}),c.jsx("span",{className:"la-tab-label",children:C})]},x))})]})}function eL(t){return c.jsx(KM,{children:c.jsx(ZM,{...t})})}const tL="/assets/before1-9df4dbe3.jpg",nL="/assets/after1-db837d4f.jpg",rL="/assets/before2-8edafd0a.jpg",sL="/assets/after2-d933f9fb.jpg",iL="/assets/before3-7f549e50.jpg",oL="/assets/after3-87bb129a.jpg",aL="/assets/before4-978c4ff4.jpg",lL="/assets/after4-5ed2a1b5.jpg",cL="/assets/before5-11742a12.jpg",uL="/assets/after5-48d7bd8b.jpg",dL="/assets/before6-4d4558a0.jpg",hL="/assets/after6-5d449552.jpg",fL="/assets/before7-56007332.jpg",pL="/assets/after7-da37ae48.jpg",mL="/assets/before8-a0f9a9a1.jpg",gL="/assets/after8-bdf1dbea.jpg",yL="/assets/before9-74df05f4.jpg",vL="/assets/after9-4eeee850.jpg",wL="/assets/before10-f23d751e.jpg",xL="/assets/after10-016a20a5.jpg";function _L(){const[t,e]=j.useState(!1),n=i=>{const o=document.getElementById(i);o&&o.scrollIntoView({behavior:"smooth",block:"start"})};j.useEffect(()=>{const i=()=>{const o=document.getElementById("site-header"),a=(o==null?void 0:o.offsetHeight)||64;document.documentElement.style.setProperty("--app-topbar-h",`${a}px`)};return i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]);const s=Dj([{before:tL,after:nL},{before:rL,after:sL},{before:iL,after:oL},{before:aL,after:lL},{before:cL,after:uL},{before:dL,after:hL},{before:fL,after:pL},{before:mL,after:gL},{before:yL,after:vL},{before:wL,after:xL}]);return t?c.jsx(eL,{gallery:s,onExit:()=>e(!1)}):c.jsxs("div",{className:"relative min-h-screen overflow-x-hidden bg-[#f7f9f5] font-sans",children:[c.jsx("div",{id:"site-header",className:"relative z-50",children:c.jsx(aI,{scrollToSection:n})}),c.jsxs("main",{children:[c.jsx(pI,{}),c.jsxs("section",{id:"beforeafter",className:`
            relative
            scroll-mt-20
            overflow-hidden
            border-b
            border-slate-200/70
            bg-[#fbfcf9]
          `,children:[c.jsx("div",{"aria-hidden":"true",className:`
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-[rgba(16,148,192,0.28)]
              to-transparent
            `}),c.jsx("div",{className:"relative z-10",children:c.jsx(SM,{sofaPairs:s.pairs})})]}),c.jsx("section",{id:"services",className:`
            relative
            scroll-mt-20
            bg-white
            px-4
            py-12
            sm:px-6
            sm:py-16
            lg:py-20
          `,children:c.jsx("div",{className:"mx-auto max-w-7xl",children:c.jsx(kI,{})})}),c.jsx("section",{id:"faq",className:`
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
          `,children:c.jsx("div",{className:"mx-auto max-w-6xl",children:c.jsx(NM,{})})})]}),c.jsx("button",{type:"button",onClick:()=>e(!0),"aria-label":"لوحة الأدمن",className:`
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
        `,style:{fontFamily:"'Cinzel', serif",textShadow:"0 0 6px rgba(255, 255, 255, 0.8)"},children:"Lumora ✦"})]})}Zh.createRoot(document.getElementById("root")).render(c.jsx(nI,{children:c.jsx(_L,{})}));
