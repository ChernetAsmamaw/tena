(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function c_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ud={exports:{}},Lo={};var k0;function yS(){if(k0)return Lo;k0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Lo.Fragment=e,Lo.jsx=i,Lo.jsxs=i,Lo}var X0;function SS(){return X0||(X0=1,ud.exports=yS()),ud.exports}var B=SS(),fd={exports:{}},rt={};var W0;function MS(){if(W0)return rt;W0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,S={};function _(O,ie,be){this.props=O,this.context=ie,this.refs=S,this.updater=be||b}_.prototype.isReactComponent={},_.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function L(){}L.prototype=_.prototype;function U(O,ie,be){this.props=O,this.context=ie,this.refs=S,this.updater=be||b}var C=U.prototype=new L;C.constructor=U,A(C,_.prototype),C.isPureReactComponent=!0;var G=Array.isArray;function H(){}var P={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function w(O,ie,be){var Ce=be.ref;return{$$typeof:s,type:O,key:ie,ref:Ce!==void 0?Ce:null,props:be}}function D(O,ie){return w(O.type,ie,O.props)}function F(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function ue(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(be){return ie[be]})}var oe=/\/+/g;function he(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?ue(""+O.key):ie.toString(36)}function ge(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(H,H):(O.status="pending",O.then(function(ie){O.status==="pending"&&(O.status="fulfilled",O.value=ie)},function(ie){O.status==="pending"&&(O.status="rejected",O.reason=ie)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function z(O,ie,be,Ce,Q){var xe=typeof O;(xe==="undefined"||xe==="boolean")&&(O=null);var _e=!1;if(O===null)_e=!0;else switch(xe){case"bigint":case"string":case"number":_e=!0;break;case"object":switch(O.$$typeof){case s:case e:_e=!0;break;case v:return _e=O._init,z(_e(O._payload),ie,be,Ce,Q)}}if(_e)return Q=Q(O),_e=Ce===""?"."+he(O,0):Ce,G(Q)?(be="",_e!=null&&(be=_e.replace(oe,"$&/")+"/"),z(Q,ie,be,"",function(nt){return nt})):Q!=null&&(F(Q)&&(Q=D(Q,be+(Q.key==null||O&&O.key===Q.key?"":(""+Q.key).replace(oe,"$&/")+"/")+_e)),ie.push(Q)),1;_e=0;var Ge=Ce===""?".":Ce+":";if(G(O))for(var ze=0;ze<O.length;ze++)Ce=O[ze],xe=Ge+he(Ce,ze),_e+=z(Ce,ie,be,xe,Q);else if(ze=M(O),typeof ze=="function")for(O=ze.call(O),ze=0;!(Ce=O.next()).done;)Ce=Ce.value,xe=Ge+he(Ce,ze++),_e+=z(Ce,ie,be,xe,Q);else if(xe==="object"){if(typeof O.then=="function")return z(ge(O),ie,be,Ce,Q);throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return _e}function K(O,ie,be){if(O==null)return O;var Ce=[],Q=0;return z(O,Ce,"","",function(xe){return ie.call(be,xe,Q++)}),Ce}function Z(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(be){(O._status===0||O._status===-1)&&(O._status=1,O._result=be)},function(be){(O._status===0||O._status===-1)&&(O._status=2,O._result=be)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var Se=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Te={map:K,forEach:function(O,ie,be){K(O,function(){ie.apply(this,arguments)},be)},count:function(O){var ie=0;return K(O,function(){ie++}),ie},toArray:function(O){return K(O,function(ie){return ie})||[]},only:function(O){if(!F(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return rt.Activity=g,rt.Children=Te,rt.Component=_,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=U,rt.StrictMode=r,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,rt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return P.H.useMemoCache(O)}},rt.cache=function(O){return function(){return O.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(O,ie,be){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Ce=A({},O.props),Q=O.key;if(ie!=null)for(xe in ie.key!==void 0&&(Q=""+ie.key),ie)!j.call(ie,xe)||xe==="key"||xe==="__self"||xe==="__source"||xe==="ref"&&ie.ref===void 0||(Ce[xe]=ie[xe]);var xe=arguments.length-2;if(xe===1)Ce.children=be;else if(1<xe){for(var _e=Array(xe),Ge=0;Ge<xe;Ge++)_e[Ge]=arguments[Ge+2];Ce.children=_e}return w(O.type,Q,Ce)},rt.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},rt.createElement=function(O,ie,be){var Ce,Q={},xe=null;if(ie!=null)for(Ce in ie.key!==void 0&&(xe=""+ie.key),ie)j.call(ie,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(Q[Ce]=ie[Ce]);var _e=arguments.length-2;if(_e===1)Q.children=be;else if(1<_e){for(var Ge=Array(_e),ze=0;ze<_e;ze++)Ge[ze]=arguments[ze+2];Q.children=Ge}if(O&&O.defaultProps)for(Ce in _e=O.defaultProps,_e)Q[Ce]===void 0&&(Q[Ce]=_e[Ce]);return w(O,xe,Q)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(O){return{$$typeof:h,render:O}},rt.isValidElement=F,rt.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:Z}},rt.memo=function(O,ie){return{$$typeof:p,type:O,compare:ie===void 0?null:ie}},rt.startTransition=function(O){var ie=P.T,be={};P.T=be;try{var Ce=O(),Q=P.S;Q!==null&&Q(be,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(H,Se)}catch(xe){Se(xe)}finally{ie!==null&&be.types!==null&&(ie.types=be.types),P.T=ie}},rt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},rt.use=function(O){return P.H.use(O)},rt.useActionState=function(O,ie,be){return P.H.useActionState(O,ie,be)},rt.useCallback=function(O,ie){return P.H.useCallback(O,ie)},rt.useContext=function(O){return P.H.useContext(O)},rt.useDebugValue=function(){},rt.useDeferredValue=function(O,ie){return P.H.useDeferredValue(O,ie)},rt.useEffect=function(O,ie){return P.H.useEffect(O,ie)},rt.useEffectEvent=function(O){return P.H.useEffectEvent(O)},rt.useId=function(){return P.H.useId()},rt.useImperativeHandle=function(O,ie,be){return P.H.useImperativeHandle(O,ie,be)},rt.useInsertionEffect=function(O,ie){return P.H.useInsertionEffect(O,ie)},rt.useLayoutEffect=function(O,ie){return P.H.useLayoutEffect(O,ie)},rt.useMemo=function(O,ie){return P.H.useMemo(O,ie)},rt.useOptimistic=function(O,ie){return P.H.useOptimistic(O,ie)},rt.useReducer=function(O,ie,be){return P.H.useReducer(O,ie,be)},rt.useRef=function(O){return P.H.useRef(O)},rt.useState=function(O){return P.H.useState(O)},rt.useSyncExternalStore=function(O,ie,be){return P.H.useSyncExternalStore(O,ie,be)},rt.useTransition=function(){return P.H.useTransition()},rt.version="19.2.3",rt}var j0;function Xh(){return j0||(j0=1,fd.exports=MS()),fd.exports}var fe=Xh();const fi=c_(fe);var dd={exports:{}},No={},hd={exports:{}},pd={};var q0;function ES(){return q0||(q0=1,(function(s){function e(z,K){var Z=z.length;z.push(K);e:for(;0<Z;){var Se=Z-1>>>1,Te=z[Se];if(0<l(Te,K))z[Se]=K,z[Z]=Te,Z=Se;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var K=z[0],Z=z.pop();if(Z!==K){z[0]=Z;e:for(var Se=0,Te=z.length,O=Te>>>1;Se<O;){var ie=2*(Se+1)-1,be=z[ie],Ce=ie+1,Q=z[Ce];if(0>l(be,Z))Ce<Te&&0>l(Q,be)?(z[Se]=Q,z[Ce]=Z,Se=Ce):(z[Se]=be,z[ie]=Z,Se=ie);else if(Ce<Te&&0>l(Q,Z))z[Se]=Q,z[Ce]=Z,Se=Ce;else break e}}return K}function l(z,K){var Z=z.sortIndex-K.sortIndex;return Z!==0?Z:z.id-K.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],v=1,g=null,x=3,M=!1,b=!1,A=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function C(z){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=z)r(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=i(p)}}function G(z){if(A=!1,C(z),!b)if(i(m)!==null)b=!0,H||(H=!0,ue());else{var K=i(p);K!==null&&ge(G,K.startTime-z)}}var H=!1,P=-1,j=5,w=-1;function D(){return S?!0:!(s.unstable_now()-w<j)}function F(){if(S=!1,H){var z=s.unstable_now();w=z;var K=!0;try{e:{b=!1,A&&(A=!1,L(P),P=-1),M=!0;var Z=x;try{t:{for(C(z),g=i(m);g!==null&&!(g.expirationTime>z&&D());){var Se=g.callback;if(typeof Se=="function"){g.callback=null,x=g.priorityLevel;var Te=Se(g.expirationTime<=z);if(z=s.unstable_now(),typeof Te=="function"){g.callback=Te,C(z),K=!0;break t}g===i(m)&&r(m),C(z)}else r(m);g=i(m)}if(g!==null)K=!0;else{var O=i(p);O!==null&&ge(G,O.startTime-z),K=!1}}break e}finally{g=null,x=Z,M=!1}K=void 0}}finally{K?ue():H=!1}}}var ue;if(typeof U=="function")ue=function(){U(F)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,he=oe.port2;oe.port1.onmessage=F,ue=function(){he.postMessage(null)}}else ue=function(){_(F,0)};function ge(z,K){P=_(function(){z(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(z){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var Z=x;x=K;try{return z()}finally{x=Z}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Z=x;x=z;try{return K()}finally{x=Z}},s.unstable_scheduleCallback=function(z,K,Z){var Se=s.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Se+Z:Se):Z=Se,z){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=Z+Te,z={id:v++,callback:K,priorityLevel:z,startTime:Z,expirationTime:Te,sortIndex:-1},Z>Se?(z.sortIndex=Z,e(p,z),i(m)===null&&z===i(p)&&(A?(L(P),P=-1):A=!0,ge(G,Z-Se))):(z.sortIndex=Te,e(m,z),b||M||(b=!0,H||(H=!0,ue()))),z},s.unstable_shouldYield=D,s.unstable_wrapCallback=function(z){var K=x;return function(){var Z=x;x=K;try{return z.apply(this,arguments)}finally{x=Z}}}})(pd)),pd}var Y0;function bS(){return Y0||(Y0=1,hd.exports=ES()),hd.exports}var md={exports:{}},An={};var Z0;function TS(){if(Z0)return An;Z0=1;var s=Xh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},An.flushSync=function(m){var p=f.T,v=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=v,r.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:M}):v==="script"&&r.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},An.requestFormReset=function(m){r.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},An.useFormStatus=function(){return f.H.useHostTransitionStatus()},An.version="19.2.3",An}var K0;function AS(){if(K0)return md.exports;K0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),md.exports=TS(),md.exports}var Q0;function RS(){if(Q0)return No;Q0=1;var s=bS(),e=Xh(),i=AS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var y=!1,T=u.child;T;){if(T===a){y=!0,a=u,o=d;break}if(T===o){y=!0,o=u,a=d;break}T=T.sibling}if(!y){for(T=d.child;T;){if(T===a){y=!0,a=d,o=u;break}if(T===o){y=!0,o=d,a=u;break}T=T.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function he(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case G:return"Suspense";case H:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case U:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:he(t.type)||"Memo";case j:n=t._payload,t=t._init;try{return he(t(n))}catch{}}return null}var ge=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},Se=[],Te=-1;function O(t){return{current:t}}function ie(t){0>Te||(t.current=Se[Te],Se[Te]=null,Te--)}function be(t,n){Te++,Se[Te]=t.current,t.current=n}var Ce=O(null),Q=O(null),xe=O(null),_e=O(null);function Ge(t,n){switch(be(xe,n),be(Q,t),be(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?d0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=d0(n),t=h0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ie(Ce),be(Ce,t)}function ze(){ie(Ce),ie(Q),ie(xe)}function nt(t){t.memoizedState!==null&&be(_e,t);var n=Ce.current,a=h0(n,t.type);n!==a&&(be(Q,t),be(Ce,a))}function Wt(t){Q.current===t&&(ie(Ce),ie(Q)),_e.current===t&&(ie(_e),Co._currentValue=Z)}var ht,V;function Et(t){if(ht===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ht=n&&n[1]||"",V=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ht+t+V}var $e=!1;function yt(t,n){if(!t||$e)return"";$e=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var me=function(){throw Error()};if(Object.defineProperty(me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(me,[])}catch(se){var ne=se}Reflect.construct(t,[],me)}else{try{me.call()}catch(se){ne=se}t.call(me.prototype)}}else{try{throw Error()}catch(se){ne=se}(me=t())&&typeof me.catch=="function"&&me.catch(function(){})}}catch(se){if(se&&ne&&typeof se.stack=="string")return[se.stack,ne.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),y=d[0],T=d[1];if(y&&T){var I=y.split(`
`),ee=T.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===ee.length)for(o=I.length-1,u=ee.length-1;1<=o&&0<=u&&I[o]!==ee[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==ee[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==ee[u]){var ce=`
`+I[o].replace(" at new "," at ");return t.displayName&&ce.includes("<anonymous>")&&(ce=ce.replace("<anonymous>",t.displayName)),ce}while(1<=o&&0<=u);break}}}finally{$e=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Et(a):""}function Ke(t,n){switch(t.tag){case 26:case 27:case 5:return Et(t.type);case 16:return Et("Lazy");case 13:return t.child!==n&&n!==null?Et("Suspense Fallback"):Et("Suspense");case 19:return Et("SuspenseList");case 0:case 15:return yt(t.type,!1);case 11:return yt(t.type.render,!1);case 1:return yt(t.type,!0);case 31:return Et("Activity");default:return""}}function Vt(t){try{var n="",a=null;do n+=Ke(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Fe=Object.prototype.hasOwnProperty,st=s.unstable_scheduleCallback,$t=s.unstable_cancelCallback,Kt=s.unstable_shouldYield,N=s.unstable_requestPaint,E=s.unstable_now,te=s.unstable_getCurrentPriorityLevel,de=s.unstable_ImmediatePriority,Me=s.unstable_UserBlockingPriority,le=s.unstable_NormalPriority,Ye=s.unstable_LowPriority,we=s.unstable_IdlePriority,je=s.log,qe=s.unstable_setDisableYieldValue,Ae=null,De=null;function Ze(t){if(typeof je=="function"&&qe(t),De&&typeof De.setStrictMode=="function")try{De.setStrictMode(Ae,t)}catch{}}var Be=Math.clz32?Math.clz32:X,Le=Math.log,ot=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(Le(t)/ot|0)|0}var Re=256,Ue=262144,Ie=4194304;function Ee(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~d,o!==0?u=Ee(o):(y&=T,y!==0?u=Ee(y):a||(a=T&~t,a!==0&&(u=Ee(a))))):(T=o&~d,T!==0?u=Ee(T):y!==0?u=Ee(y):a||(a=o&~t,a!==0&&(u=Ee(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function He(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function at(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(){var t=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),t}function bt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function wn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ei(t,n,a,o,u,d){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,I=t.expirationTimes,ee=t.hiddenUpdates;for(a=y&~a;0<a;){var ce=31-Be(a),me=1<<ce;T[ce]=0,I[ce]=-1;var ne=ee[ce];if(ne!==null)for(ee[ce]=null,ce=0;ce<ne.length;ce++){var se=ne[ce];se!==null&&(se.lane&=-536870913)}a&=~me}o!==0&&Gs(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(y&~n))}function Gs(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Be(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Ti(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Be(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function wr(t,n){var a=n&-n;return a=(a&42)!==0?1:Dr(a),(a&(t.suspendedLanes|n))!==0?0:a}function Dr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ur(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Za(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:z0(t.type))}function Vs(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var kn=Math.random().toString(36).slice(2),sn="__reactFiber$"+kn,xn="__reactProps$"+kn,pa="__reactContainer$"+kn,ks="__reactEvents$"+kn,iu="__reactListeners$"+kn,au="__reactHandles$"+kn,nl="__reactResources$"+kn,Ka="__reactMarker$"+kn;function R(t){delete t[sn],delete t[xn],delete t[ks],delete t[iu],delete t[au]}function W(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[pa]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=y0(t);t!==null;){if(a=t[sn])return a;t=y0(t)}return n}t=a,a=t.parentNode}return null}function ae(t){if(t=t[sn]||t[pa]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function re(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function q(t){var n=t[nl];return n||(n=t[nl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ye(t){t[Ka]=!0}var Ne=new Set,ke={};function Pe(t,n){Qe(t,n),Qe(t+"Capture",n)}function Qe(t,n){for(ke[t]=n,t=0;t<n.length;t++)Ne.add(n[t])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Je={},dt={};function Lt(t){return Fe.call(dt,t)?!0:Fe.call(Je,t)?!1:it.test(t)?dt[t]=!0:(Je[t]=!0,!1)}function kt(t,n,a){if(Lt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Nt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function pt(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Xe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Tt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,d.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function yn(t){if(!t._valueTracker){var n=jt(t)?"checked":"value";t._valueTracker=Tt(t,n,""+t[n])}}function Ii(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=jt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function gn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Qa=/[\n"\\]/g;function vt(t){return t.replace(Qa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Tn(t,n,a,o,u,d,y,T){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Xe(n)):t.value!==""+Xe(n)&&(t.value=""+Xe(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?dn(t,y,Xe(n)):a!=null?dn(t,y,Xe(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Xe(T):t.removeAttribute("name")}function Dn(t,n,a,o,u,d,y,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){yn(t);return}a=a!=null?""+Xe(a):"",n=n!=null?""+Xe(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),yn(t)}function dn(t,n,a){n==="number"&&gn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function nn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Xe(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Lr(t,n,a){if(n!=null&&(n=""+Xe(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Xe(a):""}function Ai(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ge(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Xe(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),yn(t)}function Nr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var mx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cp(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||mx.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function up(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&cp(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&cp(t,d,n[d])}function ru(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function il(t){return vx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Fi(){}var su=null;function ou(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Or=null,Pr=null;function fp(t){var n=ae(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Tn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[xn]||null;if(!u)throw Error(r(90));Tn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Ii(o)}break e;case"textarea":Lr(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&nn(t,!!a.multiple,n,!1)}}}var lu=!1;function dp(t,n,a){if(lu)return t(n,a);lu=!0;try{var o=t(n);return o}finally{if(lu=!1,(Or!==null||Pr!==null)&&(Xl(),Or&&(n=Or,t=Pr,Pr=Or=null,fp(n),t)))for(n=0;n<t.length;n++)fp(t[n])}}function Xs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cu=!1;if(Hi)try{var Ws={};Object.defineProperty(Ws,"passive",{get:function(){cu=!0}}),window.addEventListener("test",Ws,Ws),window.removeEventListener("test",Ws,Ws)}catch{cu=!1}var ma=null,uu=null,al=null;function hp(){if(al)return al;var t,n=uu,a=n.length,o,u="value"in ma?ma.value:ma.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===u[d-o];o++);return al=u.slice(t,1<o?1-o:void 0)}function rl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function sl(){return!0}function pp(){return!1}function Pn(t){function n(a,o,u,d,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?sl:pp,this.isPropagationStopped=pp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=Pn(Ja),js=g({},Ja,{view:0,detail:0}),_x=Pn(js),fu,du,qs,ll=g({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(fu=t.screenX-qs.screenX,du=t.screenY-qs.screenY):du=fu=0,qs=t),fu)},movementY:function(t){return"movementY"in t?t.movementY:du}}),mp=Pn(ll),xx=g({},ll,{dataTransfer:0}),yx=Pn(xx),Sx=g({},js,{relatedTarget:0}),hu=Pn(Sx),Mx=g({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Ex=Pn(Mx),bx=g({},Ja,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Tx=Pn(bx),Ax=g({},Ja,{data:0}),gp=Pn(Ax),Rx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=wx[t])?!!n[t]:!1}function pu(){return Dx}var Ux=g({},js,{key:function(t){if(t.key){var n=Rx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(t){return t.type==="keypress"?rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Lx=Pn(Ux),Nx=g({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vp=Pn(Nx),Ox=g({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),Px=Pn(Ox),zx=g({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bx=Pn(zx),Ix=g({},ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fx=Pn(Ix),Hx=g({},Ja,{newState:0,oldState:0}),Gx=Pn(Hx),Vx=[9,13,27,32],mu=Hi&&"CompositionEvent"in window,Ys=null;Hi&&"documentMode"in document&&(Ys=document.documentMode);var kx=Hi&&"TextEvent"in window&&!Ys,_p=Hi&&(!mu||Ys&&8<Ys&&11>=Ys),xp=" ",yp=!1;function Sp(t,n){switch(t){case"keyup":return Vx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zr=!1;function Xx(t,n){switch(t){case"compositionend":return Mp(n);case"keypress":return n.which!==32?null:(yp=!0,xp);case"textInput":return t=n.data,t===xp&&yp?null:t;default:return null}}function Wx(t,n){if(zr)return t==="compositionend"||!mu&&Sp(t,n)?(t=hp(),al=uu=ma=null,zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return _p&&n.locale!=="ko"?null:n.data;default:return null}}var jx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ep(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!jx[t.type]:n==="textarea"}function bp(t,n,a,o){Or?Pr?Pr.push(o):Pr=[o]:Or=o,n=Ql(n,"onChange"),0<n.length&&(a=new ol("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Zs=null,Ks=null;function qx(t){s0(t,0)}function cl(t){var n=re(t);if(Ii(n))return t}function Tp(t,n){if(t==="change")return n}var Ap=!1;if(Hi){var gu;if(Hi){var vu="oninput"in document;if(!vu){var Rp=document.createElement("div");Rp.setAttribute("oninput","return;"),vu=typeof Rp.oninput=="function"}gu=vu}else gu=!1;Ap=gu&&(!document.documentMode||9<document.documentMode)}function Cp(){Zs&&(Zs.detachEvent("onpropertychange",wp),Ks=Zs=null)}function wp(t){if(t.propertyName==="value"&&cl(Ks)){var n=[];bp(n,Ks,t,ou(t)),dp(qx,n)}}function Yx(t,n,a){t==="focusin"?(Cp(),Zs=n,Ks=a,Zs.attachEvent("onpropertychange",wp)):t==="focusout"&&Cp()}function Zx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cl(Ks)}function Kx(t,n){if(t==="click")return cl(n)}function Qx(t,n){if(t==="input"||t==="change")return cl(n)}function Jx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xn=typeof Object.is=="function"?Object.is:Jx;function Qs(t,n){if(Xn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Fe.call(n,u)||!Xn(t[u],n[u]))return!1}return!0}function Dp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Up(t,n){var a=Dp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Dp(a)}}function Lp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Lp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Np(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=gn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=gn(t.document)}return n}function _u(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var $x=Hi&&"documentMode"in document&&11>=document.documentMode,Br=null,xu=null,Js=null,yu=!1;function Op(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yu||Br==null||Br!==gn(o)||(o=Br,"selectionStart"in o&&_u(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Js&&Qs(Js,o)||(Js=o,o=Ql(xu,"onSelect"),0<o.length&&(n=new ol("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Br)))}function $a(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ir={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},Su={},Pp={};Hi&&(Pp=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function er(t){if(Su[t])return Su[t];if(!Ir[t])return t;var n=Ir[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Pp)return Su[t]=n[a];return t}var zp=er("animationend"),Bp=er("animationiteration"),Ip=er("animationstart"),ey=er("transitionrun"),ty=er("transitionstart"),ny=er("transitioncancel"),Fp=er("transitionend"),Hp=new Map,Mu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mu.push("scrollEnd");function hi(t,n){Hp.set(t,n),Pe(n,[t])}var ul=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ti=[],Fr=0,Eu=0;function fl(){for(var t=Fr,n=Eu=Fr=0;n<t;){var a=ti[n];ti[n++]=null;var o=ti[n];ti[n++]=null;var u=ti[n];ti[n++]=null;var d=ti[n];if(ti[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}d!==0&&Gp(a,u,d)}}function dl(t,n,a,o){ti[Fr++]=t,ti[Fr++]=n,ti[Fr++]=a,ti[Fr++]=o,Eu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function bu(t,n,a,o){return dl(t,n,a,o),hl(t)}function tr(t,n){return dl(t,null,null,n),hl(t)}function Gp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Be(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function hl(t){if(50<So)throw So=0,Of=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Hr={};function iy(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,o){return new iy(t,n,a,o)}function Tu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gi(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Vp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function pl(t,n,a,o,u,d){var y=0;if(o=t,typeof t=="function")Tu(t)&&(y=1);else if(typeof t=="string")y=lS(t,a,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=Wn(31,a,n,u),t.elementType=w,t.lanes=d,t;case A:return nr(a.children,u,d,n);case S:y=8,u|=24;break;case _:return t=Wn(12,a,n,u|2),t.elementType=_,t.lanes=d,t;case G:return t=Wn(13,a,n,u),t.elementType=G,t.lanes=d,t;case H:return t=Wn(19,a,n,u),t.elementType=H,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:y=10;break e;case L:y=9;break e;case C:y=11;break e;case P:y=14;break e;case j:y=16,o=null;break e}y=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Wn(y,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function nr(t,n,a,o){return t=Wn(7,t,o,n),t.lanes=a,t}function Au(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function kp(t){var n=Wn(18,null,null,0);return n.stateNode=t,n}function Ru(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Xp=new WeakMap;function ni(t,n){if(typeof t=="object"&&t!==null){var a=Xp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Vt(n)},Xp.set(t,n),n)}return{value:t,source:n,stack:Vt(n)}}var Gr=[],Vr=0,ml=null,$s=0,ii=[],ai=0,ga=null,Ri=1,Ci="";function Vi(t,n){Gr[Vr++]=$s,Gr[Vr++]=ml,ml=t,$s=n}function Wp(t,n,a){ii[ai++]=Ri,ii[ai++]=Ci,ii[ai++]=ga,ga=t;var o=Ri;t=Ci;var u=32-Be(o)-1;o&=~(1<<u),a+=1;var d=32-Be(n)+u;if(30<d){var y=u-u%5;d=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Ri=1<<32-Be(n)+u|a<<u|o,Ci=d+t}else Ri=1<<d|a<<u|o,Ci=t}function Cu(t){t.return!==null&&(Vi(t,1),Wp(t,1,0))}function wu(t){for(;t===ml;)ml=Gr[--Vr],Gr[Vr]=null,$s=Gr[--Vr],Gr[Vr]=null;for(;t===ga;)ga=ii[--ai],ii[ai]=null,Ci=ii[--ai],ii[ai]=null,Ri=ii[--ai],ii[ai]=null}function jp(t,n){ii[ai++]=Ri,ii[ai++]=Ci,ii[ai++]=ga,Ri=n.id,Ci=n.overflow,ga=t}var Sn=null,qt=null,St=!1,va=null,ri=!1,Du=Error(r(519));function _a(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw eo(ni(n,t)),Du}function qp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[sn]=t,n[xn]=o,a){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(a=0;a<Eo.length;a++)gt(Eo[a],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),Dn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),Ai(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||u0(n.textContent,a)?(o.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),o.onScroll!=null&&gt("scroll",n),o.onScrollEnd!=null&&gt("scrollend",n),o.onClick!=null&&(n.onclick=Fi),n=!0):n=!1,n||_a(t,!0)}function Yp(t){for(Sn=t.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:Sn=Sn.return}}function kr(t){if(t!==Sn)return!1;if(!St)return Yp(t),St=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Zf(t.type,t.memoizedProps)),a=!a),a&&qt&&_a(t),Yp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qt=x0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qt=x0(t)}else n===27?(n=qt,La(t.type)?(t=ed,ed=null,qt=t):qt=n):qt=Sn?oi(t.stateNode.nextSibling):null;return!0}function ir(){qt=Sn=null,St=!1}function Uu(){var t=va;return t!==null&&(Fn===null?Fn=t:Fn.push.apply(Fn,t),va=null),t}function eo(t){va===null?va=[t]:va.push(t)}var Lu=O(null),ar=null,ki=null;function xa(t,n,a){be(Lu,n._currentValue),n._currentValue=a}function Xi(t){t._currentValue=Lu.current,ie(Lu)}function Nu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Ou(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=u;for(var I=0;I<n.length;I++)if(T.context===n[I]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Nu(d.return,a,t),o||(y=null);break e}d=T.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=a,d=y.alternate,d!==null&&(d.lanes|=a),Nu(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function Xr(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var T=u.type;Xn(u.pendingProps.value,y.value)||(t!==null?t.push(T):t=[T])}}else if(u===_e.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Co):t=[Co])}u=u.return}t!==null&&Ou(n,t,a,o),n.flags|=262144}function gl(t){for(t=t.firstContext;t!==null;){if(!Xn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function rr(t){ar=t,ki=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return Zp(ar,t)}function vl(t,n){return ar===null&&rr(t),Zp(t,n)}function Zp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(t===null)throw Error(r(308));ki=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ki=ki.next=n;return a}var ay=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ry=s.unstable_scheduleCallback,sy=s.unstable_NormalPriority,on={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pu(){return{controller:new ay,data:new Map,refCount:0}}function to(t){t.refCount--,t.refCount===0&&ry(sy,function(){t.controller.abort()})}var no=null,zu=0,Wr=0,jr=null;function oy(t,n){if(no===null){var a=no=[];zu=0,Wr=Hf(),jr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return zu++,n.then(Kp,Kp),n}function Kp(){if(--zu===0&&no!==null){jr!==null&&(jr.status="fulfilled");var t=no;no=null,Wr=0,jr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ly(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Qp=z.S;z.S=function(t,n){Og=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&oy(t,n),Qp!==null&&Qp(t,n)};var sr=O(null);function Bu(){var t=sr.current;return t!==null?t:Xt.pooledCache}function _l(t,n){n===null?be(sr,sr.current):be(sr,n.pool)}function Jp(){var t=Bu();return t===null?null:{parent:on._currentValue,pool:t}}var qr=Error(r(460)),Iu=Error(r(474)),xl=Error(r(542)),yl={then:function(){}};function $p(t){return t=t.status,t==="fulfilled"||t==="rejected"}function em(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Fi,Fi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,nm(t),t;default:if(typeof n.status=="string")n.then(Fi,Fi);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,nm(t),t}throw lr=n,qr}}function or(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(lr=a,qr):a}}var lr=null;function tm(){if(lr===null)throw Error(r(459));var t=lr;return lr=null,t}function nm(t){if(t===qr||t===xl)throw Error(r(483))}var Yr=null,io=0;function Sl(t){var n=io;return io+=1,Yr===null&&(Yr=[]),em(Yr,t,n)}function ao(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ml(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function im(t){function n(Y,k){if(t){var J=Y.deletions;J===null?(Y.deletions=[k],Y.flags|=16):J.push(k)}}function a(Y,k){if(!t)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function o(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function u(Y,k){return Y=Gi(Y,k),Y.index=0,Y.sibling=null,Y}function d(Y,k,J){return Y.index=J,t?(J=Y.alternate,J!==null?(J=J.index,J<k?(Y.flags|=67108866,k):J):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function y(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,k,J,pe){return k===null||k.tag!==6?(k=Au(J,Y.mode,pe),k.return=Y,k):(k=u(k,J),k.return=Y,k)}function I(Y,k,J,pe){var et=J.type;return et===A?ce(Y,k,J.props.children,pe,J.key):k!==null&&(k.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===j&&or(et)===k.type)?(k=u(k,J.props),ao(k,J),k.return=Y,k):(k=pl(J.type,J.key,J.props,null,Y.mode,pe),ao(k,J),k.return=Y,k)}function ee(Y,k,J,pe){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=Ru(J,Y.mode,pe),k.return=Y,k):(k=u(k,J.children||[]),k.return=Y,k)}function ce(Y,k,J,pe,et){return k===null||k.tag!==7?(k=nr(J,Y.mode,pe,et),k.return=Y,k):(k=u(k,J),k.return=Y,k)}function me(Y,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Au(""+k,Y.mode,J),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return J=pl(k.type,k.key,k.props,null,Y.mode,J),ao(J,k),J.return=Y,J;case b:return k=Ru(k,Y.mode,J),k.return=Y,k;case j:return k=or(k),me(Y,k,J)}if(ge(k)||ue(k))return k=nr(k,Y.mode,J,null),k.return=Y,k;if(typeof k.then=="function")return me(Y,Sl(k),J);if(k.$$typeof===U)return me(Y,vl(Y,k),J);Ml(Y,k)}return null}function ne(Y,k,J,pe){var et=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return et!==null?null:T(Y,k,""+J,pe);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===et?I(Y,k,J,pe):null;case b:return J.key===et?ee(Y,k,J,pe):null;case j:return J=or(J),ne(Y,k,J,pe)}if(ge(J)||ue(J))return et!==null?null:ce(Y,k,J,pe,null);if(typeof J.then=="function")return ne(Y,k,Sl(J),pe);if(J.$$typeof===U)return ne(Y,k,vl(Y,J),pe);Ml(Y,J)}return null}function se(Y,k,J,pe,et){if(typeof pe=="string"&&pe!==""||typeof pe=="number"||typeof pe=="bigint")return Y=Y.get(J)||null,T(k,Y,""+pe,et);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case M:return Y=Y.get(pe.key===null?J:pe.key)||null,I(k,Y,pe,et);case b:return Y=Y.get(pe.key===null?J:pe.key)||null,ee(k,Y,pe,et);case j:return pe=or(pe),se(Y,k,J,pe,et)}if(ge(pe)||ue(pe))return Y=Y.get(J)||null,ce(k,Y,pe,et,null);if(typeof pe.then=="function")return se(Y,k,J,Sl(pe),et);if(pe.$$typeof===U)return se(Y,k,J,vl(k,pe),et);Ml(k,pe)}return null}function Ve(Y,k,J,pe){for(var et=null,Rt=null,We=k,ct=k=0,xt=null;We!==null&&ct<J.length;ct++){We.index>ct?(xt=We,We=null):xt=We.sibling;var Ct=ne(Y,We,J[ct],pe);if(Ct===null){We===null&&(We=xt);break}t&&We&&Ct.alternate===null&&n(Y,We),k=d(Ct,k,ct),Rt===null?et=Ct:Rt.sibling=Ct,Rt=Ct,We=xt}if(ct===J.length)return a(Y,We),St&&Vi(Y,ct),et;if(We===null){for(;ct<J.length;ct++)We=me(Y,J[ct],pe),We!==null&&(k=d(We,k,ct),Rt===null?et=We:Rt.sibling=We,Rt=We);return St&&Vi(Y,ct),et}for(We=o(We);ct<J.length;ct++)xt=se(We,Y,ct,J[ct],pe),xt!==null&&(t&&xt.alternate!==null&&We.delete(xt.key===null?ct:xt.key),k=d(xt,k,ct),Rt===null?et=xt:Rt.sibling=xt,Rt=xt);return t&&We.forEach(function(Ba){return n(Y,Ba)}),St&&Vi(Y,ct),et}function tt(Y,k,J,pe){if(J==null)throw Error(r(151));for(var et=null,Rt=null,We=k,ct=k=0,xt=null,Ct=J.next();We!==null&&!Ct.done;ct++,Ct=J.next()){We.index>ct?(xt=We,We=null):xt=We.sibling;var Ba=ne(Y,We,Ct.value,pe);if(Ba===null){We===null&&(We=xt);break}t&&We&&Ba.alternate===null&&n(Y,We),k=d(Ba,k,ct),Rt===null?et=Ba:Rt.sibling=Ba,Rt=Ba,We=xt}if(Ct.done)return a(Y,We),St&&Vi(Y,ct),et;if(We===null){for(;!Ct.done;ct++,Ct=J.next())Ct=me(Y,Ct.value,pe),Ct!==null&&(k=d(Ct,k,ct),Rt===null?et=Ct:Rt.sibling=Ct,Rt=Ct);return St&&Vi(Y,ct),et}for(We=o(We);!Ct.done;ct++,Ct=J.next())Ct=se(We,Y,ct,Ct.value,pe),Ct!==null&&(t&&Ct.alternate!==null&&We.delete(Ct.key===null?ct:Ct.key),k=d(Ct,k,ct),Rt===null?et=Ct:Rt.sibling=Ct,Rt=Ct);return t&&We.forEach(function(xS){return n(Y,xS)}),St&&Vi(Y,ct),et}function Ft(Y,k,J,pe){if(typeof J=="object"&&J!==null&&J.type===A&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:e:{for(var et=J.key;k!==null;){if(k.key===et){if(et=J.type,et===A){if(k.tag===7){a(Y,k.sibling),pe=u(k,J.props.children),pe.return=Y,Y=pe;break e}}else if(k.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===j&&or(et)===k.type){a(Y,k.sibling),pe=u(k,J.props),ao(pe,J),pe.return=Y,Y=pe;break e}a(Y,k);break}else n(Y,k);k=k.sibling}J.type===A?(pe=nr(J.props.children,Y.mode,pe,J.key),pe.return=Y,Y=pe):(pe=pl(J.type,J.key,J.props,null,Y.mode,pe),ao(pe,J),pe.return=Y,Y=pe)}return y(Y);case b:e:{for(et=J.key;k!==null;){if(k.key===et)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){a(Y,k.sibling),pe=u(k,J.children||[]),pe.return=Y,Y=pe;break e}else{a(Y,k);break}else n(Y,k);k=k.sibling}pe=Ru(J,Y.mode,pe),pe.return=Y,Y=pe}return y(Y);case j:return J=or(J),Ft(Y,k,J,pe)}if(ge(J))return Ve(Y,k,J,pe);if(ue(J)){if(et=ue(J),typeof et!="function")throw Error(r(150));return J=et.call(J),tt(Y,k,J,pe)}if(typeof J.then=="function")return Ft(Y,k,Sl(J),pe);if(J.$$typeof===U)return Ft(Y,k,vl(Y,J),pe);Ml(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(a(Y,k.sibling),pe=u(k,J),pe.return=Y,Y=pe):(a(Y,k),pe=Au(J,Y.mode,pe),pe.return=Y,Y=pe),y(Y)):a(Y,k)}return function(Y,k,J,pe){try{io=0;var et=Ft(Y,k,J,pe);return Yr=null,et}catch(We){if(We===qr||We===xl)throw We;var Rt=Wn(29,We,null,Y.mode);return Rt.lanes=pe,Rt.return=Y,Rt}}}var cr=im(!0),am=im(!1),ya=!1;function Fu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Sa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ma(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ut&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=hl(t),Gp(t,null,a),n}return dl(t,o,n,a),hl(t)}function ro(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ti(t,a)}}function Gu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Vu=!1;function so(){if(Vu){var t=jr;if(t!==null)throw t}}function oo(t,n,a,o){Vu=!1;var u=t.updateQueue;ya=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var I=T,ee=I.next;I.next=null,y===null?d=ee:y.next=ee,y=I;var ce=t.alternate;ce!==null&&(ce=ce.updateQueue,T=ce.lastBaseUpdate,T!==y&&(T===null?ce.firstBaseUpdate=ee:T.next=ee,ce.lastBaseUpdate=I))}if(d!==null){var me=u.baseState;y=0,ce=ee=I=null,T=d;do{var ne=T.lane&-536870913,se=ne!==T.lane;if(se?(_t&ne)===ne:(o&ne)===ne){ne!==0&&ne===Wr&&(Vu=!0),ce!==null&&(ce=ce.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ve=t,tt=T;ne=n;var Ft=a;switch(tt.tag){case 1:if(Ve=tt.payload,typeof Ve=="function"){me=Ve.call(Ft,me,ne);break e}me=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=tt.payload,ne=typeof Ve=="function"?Ve.call(Ft,me,ne):Ve,ne==null)break e;me=g({},me,ne);break e;case 2:ya=!0}}ne=T.callback,ne!==null&&(t.flags|=64,se&&(t.flags|=8192),se=u.callbacks,se===null?u.callbacks=[ne]:se.push(ne))}else se={lane:ne,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ce===null?(ee=ce=se,I=me):ce=ce.next=se,y|=ne;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;se=T,T=se.next,se.next=null,u.lastBaseUpdate=se,u.shared.pending=null}}while(!0);ce===null&&(I=me),u.baseState=I,u.firstBaseUpdate=ee,u.lastBaseUpdate=ce,d===null&&(u.shared.lanes=0),Ra|=y,t.lanes=y,t.memoizedState=me}}function rm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function sm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)rm(a[t],n)}var Zr=O(null),El=O(0);function om(t,n){t=$i,be(El,t),be(Zr,n),$i=t|n.baseLanes}function ku(){be(El,$i),be(Zr,Zr.current)}function Xu(){$i=El.current,ie(Zr),ie(El)}var jn=O(null),si=null;function Ea(t){var n=t.alternate;be(an,an.current&1),be(jn,t),si===null&&(n===null||Zr.current!==null||n.memoizedState!==null)&&(si=t)}function Wu(t){be(an,an.current),be(jn,t),si===null&&(si=t)}function lm(t){t.tag===22?(be(an,an.current),be(jn,t),si===null&&(si=t)):ba()}function ba(){be(an,an.current),be(jn,jn.current)}function qn(t){ie(jn),si===t&&(si=null),ie(an)}var an=O(0);function bl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Jf(a)||$f(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Wi=0,lt=null,Bt=null,ln=null,Tl=!1,Kr=!1,ur=!1,Al=0,lo=0,Qr=null,cy=0;function en(){throw Error(r(321))}function ju(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Xn(t[a],n[a]))return!1;return!0}function qu(t,n,a,o,u,d){return Wi=d,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?Wm:cf,ur=!1,d=a(o,u),ur=!1,Kr&&(d=um(n,a,o,u)),cm(t),d}function cm(t){z.H=fo;var n=Bt!==null&&Bt.next!==null;if(Wi=0,ln=Bt=lt=null,Tl=!1,lo=0,Qr=null,n)throw Error(r(300));t===null||cn||(t=t.dependencies,t!==null&&gl(t)&&(cn=!0))}function um(t,n,a,o){lt=t;var u=0;do{if(Kr&&(Qr=null),lo=0,Kr=!1,25<=u)throw Error(r(301));if(u+=1,ln=Bt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=jm,d=n(a,o)}while(Kr);return d}function uy(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?co(n):n,t=t.useState()[0],(Bt!==null?Bt.memoizedState:null)!==t&&(lt.flags|=1024),n}function Yu(){var t=Al!==0;return Al=0,t}function Zu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ku(t){if(Tl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Tl=!1}Wi=0,ln=Bt=lt=null,Kr=!1,lo=Al=0,Qr=null}function Un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?lt.memoizedState=ln=t:ln=ln.next=t,ln}function rn(){if(Bt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var n=ln===null?lt.memoizedState:ln.next;if(n!==null)ln=n,Bt=t;else{if(t===null)throw lt.alternate===null?Error(r(467)):Error(r(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},ln===null?lt.memoizedState=ln=t:ln=ln.next=t}return ln}function Rl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(t){var n=lo;return lo+=1,Qr===null&&(Qr=[]),t=em(Qr,t,n),n=lt,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Wm:cf),t}function Cl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return co(t);if(t.$$typeof===U)return Mn(t)}throw Error(r(438,String(t)))}function Qu(t){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=lt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Rl(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=D;return n.index++,a}function ji(t,n){return typeof n=="function"?n(t):n}function wl(t){var n=rn();return Ju(n,Bt,t)}function Ju(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var T=y=null,I=null,ee=n,ce=!1;do{var me=ee.lane&-536870913;if(me!==ee.lane?(_t&me)===me:(Wi&me)===me){var ne=ee.revertLane;if(ne===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),me===Wr&&(ce=!0);else if((Wi&ne)===ne){ee=ee.next,ne===Wr&&(ce=!0);continue}else me={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},I===null?(T=I=me,y=d):I=I.next=me,lt.lanes|=ne,Ra|=ne;me=ee.action,ur&&a(d,me),d=ee.hasEagerState?ee.eagerState:a(d,me)}else ne={lane:me,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},I===null?(T=I=ne,y=d):I=I.next=ne,lt.lanes|=me,Ra|=me;ee=ee.next}while(ee!==null&&ee!==n);if(I===null?y=d:I.next=T,!Xn(d,t.memoizedState)&&(cn=!0,ce&&(a=jr,a!==null)))throw a;t.memoizedState=d,t.baseState=y,t.baseQueue=I,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function $u(t){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do d=t(d,y.action),y=y.next;while(y!==u);Xn(d,n.memoizedState)||(cn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function fm(t,n,a){var o=lt,u=rn(),d=St;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!Xn((Bt||u).memoizedState,a);if(y&&(u.memoizedState=a,cn=!0),u=u.queue,nf(pm.bind(null,o,u,t),[t]),u.getSnapshot!==n||y||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,Jr(9,{destroy:void 0},hm.bind(null,o,u,a,n),null),Xt===null)throw Error(r(349));d||(Wi&127)!==0||dm(o,n,a)}return a}function dm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=Rl(),lt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function hm(t,n,a,o){n.value=a,n.getSnapshot=o,mm(n)&&gm(t)}function pm(t,n,a){return a(function(){mm(n)&&gm(t)})}function mm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Xn(t,a)}catch{return!0}}function gm(t){var n=tr(t,2);n!==null&&Hn(n,t,2)}function ef(t){var n=Un();if(typeof t=="function"){var a=t;if(t=a(),ur){Ze(!0);try{a()}finally{Ze(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:t},n}function vm(t,n,a,o){return t.baseState=a,Ju(t,Bt,typeof o=="function"?o:ji)}function fy(t,n,a,o,u){if(Ll(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};z.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,_m(n,d)):(d.next=a.next,n.pending=a.next=d)}}function _m(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=z.T,y={};z.T=y;try{var T=a(u,o),I=z.S;I!==null&&I(y,T),xm(t,n,T)}catch(ee){tf(t,n,ee)}finally{d!==null&&y.types!==null&&(d.types=y.types),z.T=d}}else try{d=a(u,o),xm(t,n,d)}catch(ee){tf(t,n,ee)}}function xm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){ym(t,n,o)},function(o){return tf(t,n,o)}):ym(t,n,a)}function ym(t,n,a){n.status="fulfilled",n.value=a,Sm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,_m(t,a)))}function tf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Sm(n),n=n.next;while(n!==o)}t.action=null}function Sm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Mm(t,n){return n}function Em(t,n){if(St){var a=Xt.formState;if(a!==null){e:{var o=lt;if(St){if(qt){t:{for(var u=qt,d=ri;u.nodeType!==8;){if(!d){u=null;break t}if(u=oi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){qt=oi(u.nextSibling),o=u.data==="F!";break e}}_a(o)}o=!1}o&&(n=a[0])}}return a=Un(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mm,lastRenderedState:n},a.queue=o,a=Vm.bind(null,lt,o),o.dispatch=a,o=ef(!1),d=lf.bind(null,lt,!1,o.queue),o=Un(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=fy.bind(null,lt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function bm(t){var n=rn();return Tm(n,Bt,t)}function Tm(t,n,a){if(n=Ju(t,n,Mm)[0],t=wl(ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=co(n)}catch(y){throw y===qr?xl:y}else o=n;n=rn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,Jr(9,{destroy:void 0},dy.bind(null,u,a),null)),[o,d,t]}function dy(t,n){t.action=n}function Am(t){var n=rn(),a=Bt;if(a!==null)return Tm(n,a,t);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Jr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=lt.updateQueue,n===null&&(n=Rl(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Rm(){return rn().memoizedState}function Dl(t,n,a,o){var u=Un();lt.flags|=t,u.memoizedState=Jr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Ul(t,n,a,o){var u=rn();o=o===void 0?null:o;var d=u.memoizedState.inst;Bt!==null&&o!==null&&ju(o,Bt.memoizedState.deps)?u.memoizedState=Jr(n,d,a,o):(lt.flags|=t,u.memoizedState=Jr(1|n,d,a,o))}function Cm(t,n){Dl(8390656,8,t,n)}function nf(t,n){Ul(2048,8,t,n)}function hy(t){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=Rl(),lt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function wm(t){var n=rn().memoizedState;return hy({ref:n,nextImpl:t}),function(){if((Ut&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Dm(t,n){return Ul(4,2,t,n)}function Um(t,n){return Ul(4,4,t,n)}function Lm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Nm(t,n,a){a=a!=null?a.concat([t]):null,Ul(4,4,Lm.bind(null,n,t),a)}function af(){}function Om(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ju(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Pm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ju(n,o[1]))return o[0];if(o=t(),ur){Ze(!0);try{t()}finally{Ze(!1)}}return a.memoizedState=[o,n],o}function rf(t,n,a){return a===void 0||(Wi&1073741824)!==0&&(_t&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=zg(),lt.lanes|=t,Ra|=t,a)}function zm(t,n,a,o){return Xn(a,n)?a:Zr.current!==null?(t=rf(t,a,o),Xn(t,n)||(cn=!0),t):(Wi&42)===0||(Wi&1073741824)!==0&&(_t&261930)===0?(cn=!0,t.memoizedState=a):(t=zg(),lt.lanes|=t,Ra|=t,n)}function Bm(t,n,a,o,u){var d=K.p;K.p=d!==0&&8>d?d:8;var y=z.T,T={};z.T=T,lf(t,!1,n,a);try{var I=u(),ee=z.S;if(ee!==null&&ee(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ce=ly(I,o);uo(t,n,ce,Kn(t))}else uo(t,n,o,Kn(t))}catch(me){uo(t,n,{then:function(){},status:"rejected",reason:me},Kn())}finally{K.p=d,y!==null&&T.types!==null&&(y.types=T.types),z.T=y}}function py(){}function sf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=Im(t).queue;Bm(t,u,n,Z,a===null?py:function(){return Fm(t),a(o)})}function Im(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Fm(t){var n=Im(t);n.next===null&&(n=t.alternate.memoizedState),uo(t,n.next.queue,{},Kn())}function of(){return Mn(Co)}function Hm(){return rn().memoizedState}function Gm(){return rn().memoizedState}function my(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();t=Sa(a);var o=Ma(n,t,a);o!==null&&(Hn(o,n,a),ro(o,n,a)),n={cache:Pu()},t.payload=n;return}n=n.return}}function gy(t,n,a){var o=Kn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ll(t)?km(n,a):(a=bu(t,n,a,o),a!==null&&(Hn(a,t,o),Xm(a,n,o)))}function Vm(t,n,a){var o=Kn();uo(t,n,a,o)}function uo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ll(t))km(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,T=d(y,a);if(u.hasEagerState=!0,u.eagerState=T,Xn(T,y))return dl(t,n,u,0),Xt===null&&fl(),!1}catch{}if(a=bu(t,n,u,o),a!==null)return Hn(a,t,o),Xm(a,n,o),!0}return!1}function lf(t,n,a,o){if(o={lane:2,revertLane:Hf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ll(t)){if(n)throw Error(r(479))}else n=bu(t,a,o,2),n!==null&&Hn(n,t,2)}function Ll(t){var n=t.alternate;return t===lt||n!==null&&n===lt}function km(t,n){Kr=Tl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Xm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ti(t,a)}}var fo={readContext:Mn,use:Cl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};fo.useEffectEvent=en;var Wm={readContext:Mn,use:Cl,useCallback:function(t,n){return Un().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:Cm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Dl(4194308,4,Lm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Dl(4194308,4,t,n)},useInsertionEffect:function(t,n){Dl(4,2,t,n)},useMemo:function(t,n){var a=Un();n=n===void 0?null:n;var o=t();if(ur){Ze(!0);try{t()}finally{Ze(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Un();if(a!==void 0){var u=a(n);if(ur){Ze(!0);try{a(n)}finally{Ze(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=gy.bind(null,lt,t),[o.memoizedState,t]},useRef:function(t){var n=Un();return t={current:t},n.memoizedState=t},useState:function(t){t=ef(t);var n=t.queue,a=Vm.bind(null,lt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:af,useDeferredValue:function(t,n){var a=Un();return rf(a,t,n)},useTransition:function(){var t=ef(!1);return t=Bm.bind(null,lt,t.queue,!0,!1),Un().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=lt,u=Un();if(St){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xt===null)throw Error(r(349));(_t&127)!==0||dm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Cm(pm.bind(null,o,d,t),[t]),o.flags|=2048,Jr(9,{destroy:void 0},hm.bind(null,o,d,a,n),null),a},useId:function(){var t=Un(),n=Xt.identifierPrefix;if(St){var a=Ci,o=Ri;a=(o&~(1<<32-Be(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Al++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=cy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:of,useFormState:Em,useActionState:Em,useOptimistic:function(t){var n=Un();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=lf.bind(null,lt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Qu,useCacheRefresh:function(){return Un().memoizedState=my.bind(null,lt)},useEffectEvent:function(t){var n=Un(),a={impl:t};return n.memoizedState=a,function(){if((Ut&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},cf={readContext:Mn,use:Cl,useCallback:Om,useContext:Mn,useEffect:nf,useImperativeHandle:Nm,useInsertionEffect:Dm,useLayoutEffect:Um,useMemo:Pm,useReducer:wl,useRef:Rm,useState:function(){return wl(ji)},useDebugValue:af,useDeferredValue:function(t,n){var a=rn();return zm(a,Bt.memoizedState,t,n)},useTransition:function(){var t=wl(ji)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:fm,useId:Hm,useHostTransitionStatus:of,useFormState:bm,useActionState:bm,useOptimistic:function(t,n){var a=rn();return vm(a,Bt,t,n)},useMemoCache:Qu,useCacheRefresh:Gm};cf.useEffectEvent=wm;var jm={readContext:Mn,use:Cl,useCallback:Om,useContext:Mn,useEffect:nf,useImperativeHandle:Nm,useInsertionEffect:Dm,useLayoutEffect:Um,useMemo:Pm,useReducer:$u,useRef:Rm,useState:function(){return $u(ji)},useDebugValue:af,useDeferredValue:function(t,n){var a=rn();return Bt===null?rf(a,t,n):zm(a,Bt.memoizedState,t,n)},useTransition:function(){var t=$u(ji)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:fm,useId:Hm,useHostTransitionStatus:of,useFormState:Am,useActionState:Am,useOptimistic:function(t,n){var a=rn();return Bt!==null?vm(a,Bt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Qu,useCacheRefresh:Gm};jm.useEffectEvent=wm;function uf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ff={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Kn(),u=Sa(o);u.payload=n,a!=null&&(u.callback=a),n=Ma(t,u,o),n!==null&&(Hn(n,t,o),ro(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Kn(),u=Sa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ma(t,u,o),n!==null&&(Hn(n,t,o),ro(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Kn(),o=Sa(a);o.tag=2,n!=null&&(o.callback=n),n=Ma(t,o,a),n!==null&&(Hn(n,t,a),ro(n,t,a))}};function qm(t,n,a,o,u,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,y):n.prototype&&n.prototype.isPureReactComponent?!Qs(a,o)||!Qs(u,d):!0}function Ym(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&ff.enqueueReplaceState(n,n.state,null)}function fr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Zm(t){ul(t)}function Km(t){console.error(t)}function Qm(t){ul(t)}function Nl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Jm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function df(t,n,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){Nl(t,n)},a}function $m(t){return t=Sa(t),t.tag=3,t}function eg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){Jm(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){Jm(n,a,o),typeof u!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function vy(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Xr(n,a,u,!0),a=jn.current,a!==null){switch(a.tag){case 31:case 13:return si===null?Wl():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===yl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Bf(t,o,u)),!1;case 22:return a.flags|=65536,o===yl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Bf(t,o,u)),!1}throw Error(r(435,a.tag))}return Bf(t,o,u),Wl(),!1}if(St)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Du&&(t=Error(r(422),{cause:o}),eo(ni(t,a)))):(o!==Du&&(n=Error(r(423),{cause:o}),eo(ni(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ni(o,a),u=df(t.stateNode,o,u),Gu(t,u),tn!==4&&(tn=2)),!1;var d=Error(r(520),{cause:o});if(d=ni(d,a),yo===null?yo=[d]:yo.push(d),tn!==4&&(tn=2),n===null)return!0;o=ni(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=df(a.stateNode,o,t),Gu(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ca===null||!Ca.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=$m(u),eg(u,t,a,o),Gu(a,u),!1}a=a.return}while(a!==null);return!1}var hf=Error(r(461)),cn=!1;function En(t,n,a,o){n.child=t===null?am(n,null,a,o):cr(n,t.child,a,o)}function tg(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var y={};for(var T in o)T!=="ref"&&(y[T]=o[T])}else y=o;return rr(n),o=qu(t,n,a,y,d,u),T=Yu(),t!==null&&!cn?(Zu(t,n,u),qi(t,n,u)):(St&&T&&Cu(n),n.flags|=1,En(t,n,o,u),n.child)}function ng(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Tu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,ig(t,n,d,o,u)):(t=pl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Sf(t,u)){var y=d.memoizedProps;if(a=a.compare,a=a!==null?a:Qs,a(y,o)&&t.ref===n.ref)return qi(t,n,u)}return n.flags|=1,t=Gi(d,o),t.ref=n.ref,t.return=n,n.child=t}function ig(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(Qs(d,o)&&t.ref===n.ref)if(cn=!1,n.pendingProps=o=d,Sf(t,u))(t.flags&131072)!==0&&(cn=!0);else return n.lanes=t.lanes,qi(t,n,u)}return pf(t,n,a,o,u)}function ag(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return rg(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&_l(n,d!==null?d.cachePool:null),d!==null?om(n,d):ku(),lm(n);else return o=n.lanes=536870912,rg(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(_l(n,d.cachePool),om(n,d),ba(),n.memoizedState=null):(t!==null&&_l(n,null),ku(),ba());return En(t,n,u,a),n.child}function ho(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function rg(t,n,a,o,u){var d=Bu();return d=d===null?null:{parent:on._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&_l(n,null),ku(),lm(n),t!==null&&Xr(t,n,o,!0),n.childLanes=u,null}function Ol(t,n){return n=zl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function sg(t,n,a){return cr(n,t.child,null,a),t=Ol(n,n.pendingProps),t.flags|=2,qn(n),n.memoizedState=null,t}function _y(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(St){if(o.mode==="hidden")return t=Ol(n,o),n.lanes=536870912,ho(null,t);if(Wu(n),(t=qt)?(t=_0(t,ri),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ga!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=kp(t),a.return=n,n.child=a,Sn=n,qt=null)):t=null,t===null)throw _a(n);return n.lanes=536870912,null}return Ol(n,o)}var d=t.memoizedState;if(d!==null){var y=d.dehydrated;if(Wu(n),u)if(n.flags&256)n.flags&=-257,n=sg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(cn||Xr(t,n,a,!1),u=(a&t.childLanes)!==0,cn||u){if(o=Xt,o!==null&&(y=wr(o,a),y!==0&&y!==d.retryLane))throw d.retryLane=y,tr(t,y),Hn(o,t,y),hf;Wl(),n=sg(t,n,a)}else t=d.treeContext,qt=oi(y.nextSibling),Sn=n,St=!0,va=null,ri=!1,t!==null&&jp(n,t),n=Ol(n,o),n.flags|=4096;return n}return t=Gi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Pl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function pf(t,n,a,o,u){return rr(n),a=qu(t,n,a,o,void 0,u),o=Yu(),t!==null&&!cn?(Zu(t,n,u),qi(t,n,u)):(St&&o&&Cu(n),n.flags|=1,En(t,n,a,u),n.child)}function og(t,n,a,o,u,d){return rr(n),n.updateQueue=null,a=um(n,o,a,u),cm(t),o=Yu(),t!==null&&!cn?(Zu(t,n,d),qi(t,n,d)):(St&&o&&Cu(n),n.flags|=1,En(t,n,a,d),n.child)}function lg(t,n,a,o,u){if(rr(n),n.stateNode===null){var d=Hr,y=a.contextType;typeof y=="object"&&y!==null&&(d=Mn(y)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ff,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Fu(n),y=a.contextType,d.context=typeof y=="object"&&y!==null?Mn(y):Hr,d.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(uf(n,a,y,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&ff.enqueueReplaceState(d,d.state,null),oo(n,o,d,u),so(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var T=n.memoizedProps,I=fr(a,T);d.props=I;var ee=d.context,ce=a.contextType;y=Hr,typeof ce=="object"&&ce!==null&&(y=Mn(ce));var me=a.getDerivedStateFromProps;ce=typeof me=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ce||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||ee!==y)&&Ym(n,d,o,y),ya=!1;var ne=n.memoizedState;d.state=ne,oo(n,o,d,u),so(),ee=n.memoizedState,T||ne!==ee||ya?(typeof me=="function"&&(uf(n,a,me,o),ee=n.memoizedState),(I=ya||qm(n,a,I,o,ne,ee,y))?(ce||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ee),d.props=o,d.state=ee,d.context=y,o=I):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Hu(t,n),y=n.memoizedProps,ce=fr(a,y),d.props=ce,me=n.pendingProps,ne=d.context,ee=a.contextType,I=Hr,typeof ee=="object"&&ee!==null&&(I=Mn(ee)),T=a.getDerivedStateFromProps,(ee=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==me||ne!==I)&&Ym(n,d,o,I),ya=!1,ne=n.memoizedState,d.state=ne,oo(n,o,d,u),so();var se=n.memoizedState;y!==me||ne!==se||ya||t!==null&&t.dependencies!==null&&gl(t.dependencies)?(typeof T=="function"&&(uf(n,a,T,o),se=n.memoizedState),(ce=ya||qm(n,a,ce,o,ne,se,I)||t!==null&&t.dependencies!==null&&gl(t.dependencies))?(ee||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,se,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,se,I)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=se),d.props=o,d.state=se,d.context=I,o=ce):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Pl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=cr(n,t.child,null,u),n.child=cr(n,null,a,u)):En(t,n,a,u),n.memoizedState=d.state,t=n.child):t=qi(t,n,u),t}function cg(t,n,a,o){return ir(),n.flags|=256,En(t,n,a,o),n.child}var mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gf(t){return{baseLanes:t,cachePool:Jp()}}function vf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Zn),t}function ug(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,y;if((y=d)||(y=t!==null&&t.memoizedState===null?!1:(an.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(St){if(u?Ea(n):ba(),(t=qt)?(t=_0(t,ri),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ga!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=kp(t),a.return=n,n.child=a,Sn=n,qt=null)):t=null,t===null)throw _a(n);return $f(t)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,u?(ba(),u=n.mode,T=zl({mode:"hidden",children:T},u),o=nr(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=gf(a),o.childLanes=vf(t,y,a),n.memoizedState=mf,ho(null,o)):(Ea(n),_f(n,T))}var I=t.memoizedState;if(I!==null&&(T=I.dehydrated,T!==null)){if(d)n.flags&256?(Ea(n),n.flags&=-257,n=xf(t,n,a)):n.memoizedState!==null?(ba(),n.child=t.child,n.flags|=128,n=null):(ba(),T=o.fallback,u=n.mode,o=zl({mode:"visible",children:o.children},u),T=nr(T,u,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,cr(n,t.child,null,a),o=n.child,o.memoizedState=gf(a),o.childLanes=vf(t,y,a),n.memoizedState=mf,n=ho(null,o));else if(Ea(n),$f(T)){if(y=T.nextSibling&&T.nextSibling.dataset,y)var ee=y.dgst;y=ee,o=Error(r(419)),o.stack="",o.digest=y,eo({value:o,source:null,stack:null}),n=xf(t,n,a)}else if(cn||Xr(t,n,a,!1),y=(a&t.childLanes)!==0,cn||y){if(y=Xt,y!==null&&(o=wr(y,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,tr(t,o),Hn(y,t,o),hf;Jf(T)||Wl(),n=xf(t,n,a)}else Jf(T)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,qt=oi(T.nextSibling),Sn=n,St=!0,va=null,ri=!1,t!==null&&jp(n,t),n=_f(n,o.children),n.flags|=4096);return n}return u?(ba(),T=o.fallback,u=n.mode,I=t.child,ee=I.sibling,o=Gi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,ee!==null?T=Gi(ee,T):(T=nr(T,u,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,ho(null,o),o=n.child,T=t.child.memoizedState,T===null?T=gf(a):(u=T.cachePool,u!==null?(I=on._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=Jp(),T={baseLanes:T.baseLanes|a,cachePool:u}),o.memoizedState=T,o.childLanes=vf(t,y,a),n.memoizedState=mf,ho(t.child,o)):(Ea(n),a=t.child,t=a.sibling,a=Gi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function _f(t,n){return n=zl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function zl(t,n){return t=Wn(22,t,null,n),t.lanes=0,t}function xf(t,n,a){return cr(n,t.child,null,a),t=_f(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function fg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Nu(t.return,n,a)}function yf(t,n,a,o,u,d){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=d)}function dg(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var y=an.current,T=(y&2)!==0;if(T?(y=y&1|2,n.flags|=128):y&=1,be(an,y),En(t,n,o,a),o=St?$s:0,!T&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fg(t,a,n);else if(t.tag===19)fg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&bl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),yf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&bl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}yf(n,!0,a,null,d,o);break;case"together":yf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function qi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Xr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Gi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Gi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Sf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&gl(t)))}function xy(t,n,a){switch(n.tag){case 3:Ge(n,n.stateNode.containerInfo),xa(n,on,t.memoizedState.cache),ir();break;case 27:case 5:nt(n);break;case 4:Ge(n,n.stateNode.containerInfo);break;case 10:xa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Wu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ea(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ug(t,n,a):(Ea(n),t=qi(t,n,a),t!==null?t.sibling:null);Ea(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Xr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return dg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),be(an,an.current),o)break;return null;case 22:return n.lanes=0,ag(t,n,a,n.pendingProps);case 24:xa(n,on,t.memoizedState.cache)}return qi(t,n,a)}function hg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)cn=!0;else{if(!Sf(t,a)&&(n.flags&128)===0)return cn=!1,xy(t,n,a);cn=(t.flags&131072)!==0}else cn=!1,St&&(n.flags&1048576)!==0&&Wp(n,$s,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=or(n.elementType),n.type=t,typeof t=="function")Tu(t)?(o=fr(t,o),n.tag=1,n=lg(null,n,t,o,a)):(n.tag=0,n=pf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===C){n.tag=11,n=tg(null,n,t,o,a);break e}else if(u===P){n.tag=14,n=ng(null,n,t,o,a);break e}}throw n=he(t)||t,Error(r(306,n,""))}}return n;case 0:return pf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=fr(o,n.pendingProps),lg(t,n,o,u,a);case 3:e:{if(Ge(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Hu(t,n),oo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,xa(n,on,o),o!==d.cache&&Ou(n,[on],a,!0),so(),o=y.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=cg(t,n,o,a);break e}else if(o!==u){u=ni(Error(r(424)),n),eo(u),n=cg(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,qt=oi(t.firstChild),Sn=n,St=!0,va=null,ri=!0,a=am(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ir(),o===u){n=qi(t,n,a);break e}En(t,n,o,a)}n=n.child}return n;case 26:return Pl(t,n),t===null?(a=b0(n.type,null,n.pendingProps,null))?n.memoizedState=a:St||(a=n.type,t=n.pendingProps,o=Jl(xe.current).createElement(a),o[sn]=n,o[xn]=t,bn(o,a,t),ye(o),n.stateNode=o):n.memoizedState=b0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nt(n),t===null&&St&&(o=n.stateNode=S0(n.type,n.pendingProps,xe.current),Sn=n,ri=!0,u=qt,La(n.type)?(ed=u,qt=oi(o.firstChild)):qt=u),En(t,n,n.pendingProps.children,a),Pl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&St&&((u=o=qt)&&(o=Zy(o,n.type,n.pendingProps,ri),o!==null?(n.stateNode=o,Sn=n,qt=oi(o.firstChild),ri=!1,u=!0):u=!1),u||_a(n)),nt(n),u=n.type,d=n.pendingProps,y=t!==null?t.memoizedProps:null,o=d.children,Zf(u,d)?o=null:y!==null&&Zf(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=qu(t,n,uy,null,null,a),Co._currentValue=u),Pl(t,n),En(t,n,o,a),n.child;case 6:return t===null&&St&&((t=a=qt)&&(a=Ky(a,n.pendingProps,ri),a!==null?(n.stateNode=a,Sn=n,qt=null,t=!0):t=!1),t||_a(n)),null;case 13:return ug(t,n,a);case 4:return Ge(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=cr(n,null,o,a):En(t,n,o,a),n.child;case 11:return tg(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,xa(n,n.type,o.value),En(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,rr(n),u=Mn(u),o=o(u),n.flags|=1,En(t,n,o,a),n.child;case 14:return ng(t,n,n.type,n.pendingProps,a);case 15:return ig(t,n,n.type,n.pendingProps,a);case 19:return dg(t,n,a);case 31:return _y(t,n,a);case 22:return ag(t,n,a,n.pendingProps);case 24:return rr(n),o=Mn(on),t===null?(u=Bu(),u===null&&(u=Xt,d=Pu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Fu(n),xa(n,on,u)):((t.lanes&a)!==0&&(Hu(t,n),oo(n,null,null,a),so()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),xa(n,on,o)):(o=d.cache,xa(n,on,o),o!==u.cache&&Ou(n,[on],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Yi(t){t.flags|=4}function Mf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Hg())t.flags|=8192;else throw lr=yl,Iu}else t.flags&=-16777217}function pg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!w0(n))if(Hg())t.flags|=8192;else throw lr=yl,Iu}function Bl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ot():536870912,t.lanes|=n,ns|=n)}function po(t,n){if(!St)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Yt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function yy(t,n,a){var o=n.pendingProps;switch(wu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(n),null;case 1:return Yt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Xi(on),ze(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(kr(n)?Yi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Uu())),Yt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(Yi(n),d!==null?(Yt(n),pg(n,d)):(Yt(n),Mf(n,u,null,o,a))):d?d!==t.memoizedState?(Yi(n),Yt(n),pg(n,d)):(Yt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Yi(n),Yt(n),Mf(n,u,t,o,a)),null;case 27:if(Wt(n),a=xe.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}t=Ce.current,kr(n)?qp(n):(t=S0(u,o,a),n.stateNode=t,Yi(n))}return Yt(n),null;case 5:if(Wt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}if(d=Ce.current,kr(n))qp(n);else{var y=Jl(xe.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}d[sn]=n,d[xn]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=d;e:switch(bn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Yi(n)}}return Yt(n),Mf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Yi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=xe.current,kr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Sn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||u0(t.nodeValue,a)),t||_a(n,!0)}else t=Jl(t).createTextNode(o),t[sn]=n,n.stateNode=t}return Yt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=kr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[sn]=n}else ir(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),t=!1}else a=Uu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(qn(n),n):(qn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Yt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=kr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[sn]=n}else ir(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),u=!1}else u=Uu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(qn(n),n):(qn(n),null)}return qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Bl(n,n.updateQueue),Yt(n),null);case 4:return ze(),t===null&&Xf(n.stateNode.containerInfo),Yt(n),null;case 10:return Xi(n.type),Yt(n),null;case 19:if(ie(an),o=n.memoizedState,o===null)return Yt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)po(o,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=bl(t),d!==null){for(n.flags|=128,po(o,!1),t=d.updateQueue,n.updateQueue=t,Bl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Vp(a,t),a=a.sibling;return be(an,an.current&1|2),St&&Vi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&E()>Vl&&(n.flags|=128,u=!0,po(o,!1),n.lanes=4194304)}else{if(!u)if(t=bl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Bl(n,t),po(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!St)return Yt(n),null}else 2*E()-o.renderingStartTime>Vl&&a!==536870912&&(n.flags|=128,u=!0,po(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=E(),t.sibling=null,a=an.current,be(an,u?a&1|2:a&1),St&&Vi(n,o.treeForkCount),t):(Yt(n),null);case 22:case 23:return qn(n),Xu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Yt(n),n.subtreeFlags&6&&(n.flags|=8192)):Yt(n),a=n.updateQueue,a!==null&&Bl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ie(sr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(on),Yt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Sy(t,n){switch(wu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Xi(on),ze(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Wt(n),null;case 31:if(n.memoizedState!==null){if(qn(n),n.alternate===null)throw Error(r(340));ir()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(qn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ir()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ie(an),null;case 4:return ze(),null;case 10:return Xi(n.type),null;case 22:case 23:return qn(n),Xu(),t!==null&&ie(sr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Xi(on),null;case 25:return null;default:return null}}function mg(t,n){switch(wu(n),n.tag){case 3:Xi(on),ze();break;case 26:case 27:case 5:Wt(n);break;case 4:ze();break;case 31:n.memoizedState!==null&&qn(n);break;case 13:qn(n);break;case 19:ie(an);break;case 10:Xi(n.type);break;case 22:case 23:qn(n),Xu(),t!==null&&ie(sr);break;case 24:Xi(on)}}function mo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,y=a.inst;o=d(),y.destroy=o}a=a.next}while(a!==u)}}catch(T){zt(n,n.return,T)}}function Ta(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var y=o.inst,T=y.destroy;if(T!==void 0){y.destroy=void 0,u=n;var I=a,ee=T;try{ee()}catch(ce){zt(u,I,ce)}}}o=o.next}while(o!==d)}}catch(ce){zt(n,n.return,ce)}}function gg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{sm(n,a)}catch(o){zt(t,t.return,o)}}}function vg(t,n,a){a.props=fr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){zt(t,n,o)}}function go(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){zt(t,n,u)}}function wi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){zt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){zt(t,n,u)}else a.current=null}function _g(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){zt(t,t.return,u)}}function Ef(t,n,a){try{var o=t.stateNode;ky(o,t.type,a,n),o[xn]=n}catch(u){zt(t,t.return,u)}}function xg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&La(t.type)||t.tag===4}function bf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&La(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Fi));else if(o!==4&&(o===27&&La(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Tf(t,n,a),t=t.sibling;t!==null;)Tf(t,n,a),t=t.sibling}function Il(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&La(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Il(t,n,a),t=t.sibling;t!==null;)Il(t,n,a),t=t.sibling}function yg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);bn(n,o,a),n[sn]=t,n[xn]=a}catch(d){zt(t,t.return,d)}}var Zi=!1,un=!1,Af=!1,Sg=typeof WeakSet=="function"?WeakSet:Set,vn=null;function My(t,n){if(t=t.containerInfo,qf=rc,t=Np(t),_u(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var y=0,T=-1,I=-1,ee=0,ce=0,me=t,ne=null;t:for(;;){for(var se;me!==a||u!==0&&me.nodeType!==3||(T=y+u),me!==d||o!==0&&me.nodeType!==3||(I=y+o),me.nodeType===3&&(y+=me.nodeValue.length),(se=me.firstChild)!==null;)ne=me,me=se;for(;;){if(me===t)break t;if(ne===a&&++ee===u&&(T=y),ne===d&&++ce===o&&(I=y),(se=me.nextSibling)!==null)break;me=ne,ne=me.parentNode}me=se}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yf={focusedElem:t,selectionRange:a},rc=!1,vn=n;vn!==null;)if(n=vn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,vn=t;else for(;vn!==null;){switch(n=vn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Ve=fr(a.type,u);t=o.getSnapshotBeforeUpdate(Ve,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){zt(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Qf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Qf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,vn=t;break}vn=n.return}}function Mg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Qi(t,a),o&4&&mo(5,a);break;case 1:if(Qi(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){zt(a,a.return,y)}else{var u=fr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){zt(a,a.return,y)}}o&64&&gg(a),o&512&&go(a,a.return);break;case 3:if(Qi(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{sm(t,n)}catch(y){zt(a,a.return,y)}}break;case 27:n===null&&o&4&&yg(a);case 26:case 5:Qi(t,a),n===null&&o&4&&_g(a),o&512&&go(a,a.return);break;case 12:Qi(t,a);break;case 31:Qi(t,a),o&4&&Tg(t,a);break;case 13:Qi(t,a),o&4&&Ag(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Uy.bind(null,a),Qy(t,a))));break;case 22:if(o=a.memoizedState!==null||Zi,!o){n=n!==null&&n.memoizedState!==null||un,u=Zi;var d=un;Zi=o,(un=n)&&!d?Ji(t,a,(a.subtreeFlags&8772)!==0):Qi(t,a),Zi=u,un=d}break;case 30:break;default:Qi(t,a)}}function Eg(t){var n=t.alternate;n!==null&&(t.alternate=null,Eg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&R(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Zt=null,zn=!1;function Ki(t,n,a){for(a=a.child;a!==null;)bg(t,n,a),a=a.sibling}function bg(t,n,a){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(Ae,a)}catch{}switch(a.tag){case 26:un||wi(a,n),Ki(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||wi(a,n);var o=Zt,u=zn;La(a.type)&&(Zt=a.stateNode,zn=!1),Ki(t,n,a),To(a.stateNode),Zt=o,zn=u;break;case 5:un||wi(a,n);case 6:if(o=Zt,u=zn,Zt=null,Ki(t,n,a),Zt=o,zn=u,Zt!==null)if(zn)try{(Zt.nodeType===9?Zt.body:Zt.nodeName==="HTML"?Zt.ownerDocument.body:Zt).removeChild(a.stateNode)}catch(d){zt(a,n,d)}else try{Zt.removeChild(a.stateNode)}catch(d){zt(a,n,d)}break;case 18:Zt!==null&&(zn?(t=Zt,g0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),us(t)):g0(Zt,a.stateNode));break;case 4:o=Zt,u=zn,Zt=a.stateNode.containerInfo,zn=!0,Ki(t,n,a),Zt=o,zn=u;break;case 0:case 11:case 14:case 15:Ta(2,a,n),un||Ta(4,a,n),Ki(t,n,a);break;case 1:un||(wi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&vg(a,n,o)),Ki(t,n,a);break;case 21:Ki(t,n,a);break;case 22:un=(o=un)||a.memoizedState!==null,Ki(t,n,a),un=o;break;default:Ki(t,n,a)}}function Tg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{us(t)}catch(a){zt(n,n.return,a)}}}function Ag(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{us(t)}catch(a){zt(n,n.return,a)}}function Ey(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Sg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Sg),n;default:throw Error(r(435,t.tag))}}function Fl(t,n){var a=Ey(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Ly.bind(null,t,o);o.then(u,u)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,y=n,T=y;e:for(;T!==null;){switch(T.tag){case 27:if(La(T.type)){Zt=T.stateNode,zn=!1;break e}break;case 5:Zt=T.stateNode,zn=!1;break e;case 3:case 4:Zt=T.stateNode.containerInfo,zn=!0;break e}T=T.return}if(Zt===null)throw Error(r(160));bg(d,y,u),Zt=null,zn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Rg(n,t),n=n.sibling}var pi=null;function Rg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),In(t),o&4&&(Ta(3,t,t.return),mo(3,t),Ta(5,t,t.return));break;case 1:Bn(n,t),In(t),o&512&&(un||a===null||wi(a,a.return)),o&64&&Zi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=pi;if(Bn(n,t),In(t),o&512&&(un||a===null||wi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ka]||d[sn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),bn(d,o,a),d[sn]=t,ye(d),o=d;break e;case"link":var y=R0("link","href",u).get(o+(a.href||""));if(y){for(var T=0;T<y.length;T++)if(d=y[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(T,1);break t}}d=u.createElement(o),bn(d,o,a),u.head.appendChild(d);break;case"meta":if(y=R0("meta","content",u).get(o+(a.content||""))){for(T=0;T<y.length;T++)if(d=y[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(T,1);break t}}d=u.createElement(o),bn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[sn]=t,ye(d),o=d}t.stateNode=o}else C0(u,t.type,t.stateNode);else t.stateNode=A0(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?C0(u,t.type,t.stateNode):A0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Ef(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),In(t),o&512&&(un||a===null||wi(a,a.return)),a!==null&&o&4&&Ef(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),In(t),o&512&&(un||a===null||wi(a,a.return)),t.flags&32){u=t.stateNode;try{Nr(u,"")}catch(Ve){zt(t,t.return,Ve)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Ef(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Af=!0);break;case 6:if(Bn(n,t),In(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ve){zt(t,t.return,Ve)}}break;case 3:if(tc=null,u=pi,pi=$l(n.containerInfo),Bn(n,t),pi=u,In(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{us(n.containerInfo)}catch(Ve){zt(t,t.return,Ve)}Af&&(Af=!1,Cg(t));break;case 4:o=pi,pi=$l(t.stateNode.containerInfo),Bn(n,t),In(t),pi=o;break;case 12:Bn(n,t),In(t);break;case 31:Bn(n,t),In(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Fl(t,o)));break;case 13:Bn(n,t),In(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Gl=E()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Fl(t,o)));break;case 22:u=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,ee=Zi,ce=un;if(Zi=ee||u,un=ce||I,Bn(n,t),un=ce,Zi=ee,In(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||Zi||un||dr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(d=I.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{T=I.stateNode;var me=I.memoizedProps.style,ne=me!=null&&me.hasOwnProperty("display")?me.display:null;T.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(Ve){zt(I,I.return,Ve)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(Ve){zt(I,I.return,Ve)}}}else if(n.tag===18){if(a===null){I=n;try{var se=I.stateNode;u?v0(se,!0):v0(I.stateNode,!1)}catch(Ve){zt(I,I.return,Ve)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Fl(t,a))));break;case 19:Bn(n,t),In(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Fl(t,o)));break;case 30:break;case 21:break;default:Bn(n,t),In(t)}}function In(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(xg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=bf(t);Il(t,d,u);break;case 5:var y=a.stateNode;a.flags&32&&(Nr(y,""),a.flags&=-33);var T=bf(t);Il(t,T,y);break;case 3:case 4:var I=a.stateNode.containerInfo,ee=bf(t);Tf(t,ee,I);break;default:throw Error(r(161))}}catch(ce){zt(t,t.return,ce)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Cg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Cg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Qi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Mg(t,n.alternate,n),n=n.sibling}function dr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ta(4,n,n.return),dr(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&vg(n,n.return,a),dr(n);break;case 27:To(n.stateNode);case 26:case 5:wi(n,n.return),dr(n);break;case 22:n.memoizedState===null&&dr(n);break;case 30:dr(n);break;default:dr(n)}t=t.sibling}}function Ji(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,y=d.flags;switch(d.tag){case 0:case 11:case 15:Ji(u,d,a),mo(4,d);break;case 1:if(Ji(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){zt(o,o.return,ee)}if(o=d,u=o.updateQueue,u!==null){var T=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)rm(I[u],T)}catch(ee){zt(o,o.return,ee)}}a&&y&64&&gg(d),go(d,d.return);break;case 27:yg(d);case 26:case 5:Ji(u,d,a),a&&o===null&&y&4&&_g(d),go(d,d.return);break;case 12:Ji(u,d,a);break;case 31:Ji(u,d,a),a&&y&4&&Tg(u,d);break;case 13:Ji(u,d,a),a&&y&4&&Ag(u,d);break;case 22:d.memoizedState===null&&Ji(u,d,a),go(d,d.return);break;case 30:break;default:Ji(u,d,a)}n=n.sibling}}function Rf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&to(a))}function Cf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t))}function mi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)wg(t,n,a,o),n=n.sibling}function wg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:mi(t,n,a,o),u&2048&&mo(9,n);break;case 1:mi(t,n,a,o);break;case 3:mi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t)));break;case 12:if(u&2048){mi(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,y=d.id,T=d.onPostCommit;typeof T=="function"&&T(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){zt(n,n.return,I)}}else mi(t,n,a,o);break;case 31:mi(t,n,a,o);break;case 13:mi(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,y=n.alternate,n.memoizedState!==null?d._visibility&2?mi(t,n,a,o):vo(t,n):d._visibility&2?mi(t,n,a,o):(d._visibility|=2,$r(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Rf(y,n);break;case 24:mi(t,n,a,o),u&2048&&Cf(n.alternate,n);break;default:mi(t,n,a,o)}}function $r(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,y=n,T=a,I=o,ee=y.flags;switch(y.tag){case 0:case 11:case 15:$r(d,y,T,I,u),mo(8,y);break;case 23:break;case 22:var ce=y.stateNode;y.memoizedState!==null?ce._visibility&2?$r(d,y,T,I,u):vo(d,y):(ce._visibility|=2,$r(d,y,T,I,u)),u&&ee&2048&&Rf(y.alternate,y);break;case 24:$r(d,y,T,I,u),u&&ee&2048&&Cf(y.alternate,y);break;default:$r(d,y,T,I,u)}n=n.sibling}}function vo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:vo(a,o),u&2048&&Rf(o.alternate,o);break;case 24:vo(a,o),u&2048&&Cf(o.alternate,o);break;default:vo(a,o)}n=n.sibling}}var _o=8192;function es(t,n,a){if(t.subtreeFlags&_o)for(t=t.child;t!==null;)Dg(t,n,a),t=t.sibling}function Dg(t,n,a){switch(t.tag){case 26:es(t,n,a),t.flags&_o&&t.memoizedState!==null&&cS(a,pi,t.memoizedState,t.memoizedProps);break;case 5:es(t,n,a);break;case 3:case 4:var o=pi;pi=$l(t.stateNode.containerInfo),es(t,n,a),pi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=_o,_o=16777216,es(t,n,a),_o=o):es(t,n,a));break;default:es(t,n,a)}}function Ug(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function xo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,Ng(o,t)}Ug(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Lg(t),t=t.sibling}function Lg(t){switch(t.tag){case 0:case 11:case 15:xo(t),t.flags&2048&&Ta(9,t,t.return);break;case 3:xo(t);break;case 12:xo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Hl(t)):xo(t);break;default:xo(t)}}function Hl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,Ng(o,t)}Ug(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ta(8,n,n.return),Hl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Hl(n));break;default:Hl(n)}t=t.sibling}}function Ng(t,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Ta(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:to(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,vn=o;else e:for(a=t;vn!==null;){o=vn;var u=o.sibling,d=o.return;if(Eg(o),o===a){vn=null;break e}if(u!==null){u.return=d,vn=u;break e}vn=d}}}var by={getCacheForType:function(t){var n=Mn(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Mn(on).controller.signal}},Ty=typeof WeakMap=="function"?WeakMap:Map,Ut=0,Xt=null,mt=null,_t=0,Pt=0,Yn=null,Aa=!1,ts=!1,wf=!1,$i=0,tn=0,Ra=0,hr=0,Df=0,Zn=0,ns=0,yo=null,Fn=null,Uf=!1,Gl=0,Og=0,Vl=1/0,kl=null,Ca=null,hn=0,wa=null,is=null,ea=0,Lf=0,Nf=null,Pg=null,So=0,Of=null;function Kn(){return(Ut&2)!==0&&_t!==0?_t&-_t:z.T!==null?Hf():Za()}function zg(){if(Zn===0)if((_t&536870912)===0||St){var t=Ue;Ue<<=1,(Ue&3932160)===0&&(Ue=262144),Zn=t}else Zn=536870912;return t=jn.current,t!==null&&(t.flags|=32),Zn}function Hn(t,n,a){(t===Xt&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)&&(as(t,0),Da(t,_t,Zn,!1)),wn(t,a),((Ut&2)===0||t!==Xt)&&(t===Xt&&((Ut&2)===0&&(hr|=a),tn===4&&Da(t,_t,Zn,!1)),Di(t))}function Bg(t,n,a){if((Ut&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||He(t,n),u=o?Cy(t,n):zf(t,n,!0),d=o;do{if(u===0){ts&&!o&&Da(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!Ay(a)){u=zf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var T=t;u=yo;var I=T.current.memoizedState.isDehydrated;if(I&&(as(T,y).flags|=256),y=zf(T,y,!1),y!==2){if(wf&&!I){T.errorRecoveryDisabledLanes|=d,hr|=d,u=4;break e}d=Fn,Fn=u,d!==null&&(Fn===null?Fn=d:Fn.push.apply(Fn,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){as(t,0),Da(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Da(o,n,Zn,!Aa);break e;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Gl+300-E(),10<u)){if(Da(o,n,Zn,!Aa),ve(o,0,!0)!==0)break e;ea=n,o.timeoutHandle=p0(Ig.bind(null,o,a,Fn,kl,Uf,n,Zn,hr,ns,Aa,d,"Throttled",-0,0),u);break e}Ig(o,a,Fn,kl,Uf,n,Zn,hr,ns,Aa,d,null,-0,0)}}break}while(!0);Di(t)}function Ig(t,n,a,o,u,d,y,T,I,ee,ce,me,ne,se){if(t.timeoutHandle=-1,me=n.subtreeFlags,me&8192||(me&16785408)===16785408){me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fi},Dg(n,d,me);var Ve=(d&62914560)===d?Gl-E():(d&4194048)===d?Og-E():0;if(Ve=uS(me,Ve),Ve!==null){ea=d,t.cancelPendingCommit=Ve(jg.bind(null,t,n,d,a,o,u,y,T,I,ce,me,null,ne,se)),Da(t,d,y,!ee);return}}jg(t,n,d,a,o,u,y,T,I)}function Ay(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Xn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Da(t,n,a,o){n&=~Df,n&=~hr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Be(u),y=1<<d;o[d]=-1,u&=~y}a!==0&&Gs(t,a,n)}function Xl(){return(Ut&6)===0?(Mo(0),!1):!0}function Pf(){if(mt!==null){if(Pt===0)var t=mt.return;else t=mt,ki=ar=null,Ku(t),Yr=null,io=0,t=mt;for(;t!==null;)mg(t.alternate,t),t=t.return;mt=null}}function as(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,jy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ea=0,Pf(),Xt=t,mt=a=Gi(t.current,null),_t=n,Pt=0,Yn=null,Aa=!1,ts=He(t,n),wf=!1,ns=Zn=Df=hr=Ra=tn=0,Fn=yo=null,Uf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Be(o),d=1<<u;n|=t[u],o&=~d}return $i=n,fl(),a}function Fg(t,n){lt=null,z.H=fo,n===qr||n===xl?(n=tm(),Pt=3):n===Iu?(n=tm(),Pt=4):Pt=n===hf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,mt===null&&(tn=1,Nl(t,ni(n,t.current)))}function Hg(){var t=jn.current;return t===null?!0:(_t&4194048)===_t?si===null:(_t&62914560)===_t||(_t&536870912)!==0?t===si:!1}function Gg(){var t=z.H;return z.H=fo,t===null?fo:t}function Vg(){var t=z.A;return z.A=by,t}function Wl(){tn=4,Aa||(_t&4194048)!==_t&&jn.current!==null||(ts=!0),(Ra&134217727)===0&&(hr&134217727)===0||Xt===null||Da(Xt,_t,Zn,!1)}function zf(t,n,a){var o=Ut;Ut|=2;var u=Gg(),d=Vg();(Xt!==t||_t!==n)&&(kl=null,as(t,n)),n=!1;var y=tn;e:do try{if(Pt!==0&&mt!==null){var T=mt,I=Yn;switch(Pt){case 8:Pf(),y=6;break e;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var ee=Pt;if(Pt=0,Yn=null,rs(t,T,I,ee),a&&ts){y=0;break e}break;default:ee=Pt,Pt=0,Yn=null,rs(t,T,I,ee)}}Ry(),y=tn;break}catch(ce){Fg(t,ce)}while(!0);return n&&t.shellSuspendCounter++,ki=ar=null,Ut=o,z.H=u,z.A=d,mt===null&&(Xt=null,_t=0,fl()),y}function Ry(){for(;mt!==null;)kg(mt)}function Cy(t,n){var a=Ut;Ut|=2;var o=Gg(),u=Vg();Xt!==t||_t!==n?(kl=null,Vl=E()+500,as(t,n)):ts=He(t,n);e:do try{if(Pt!==0&&mt!==null){n=mt;var d=Yn;t:switch(Pt){case 1:Pt=0,Yn=null,rs(t,n,d,1);break;case 2:case 9:if($p(d)){Pt=0,Yn=null,Xg(n);break}n=function(){Pt!==2&&Pt!==9||Xt!==t||(Pt=7),Di(t)},d.then(n,n);break e;case 3:Pt=7;break e;case 4:Pt=5;break e;case 7:$p(d)?(Pt=0,Yn=null,Xg(n)):(Pt=0,Yn=null,rs(t,n,d,7));break;case 5:var y=null;switch(mt.tag){case 26:y=mt.memoizedState;case 5:case 27:var T=mt;if(y?w0(y):T.stateNode.complete){Pt=0,Yn=null;var I=T.sibling;if(I!==null)mt=I;else{var ee=T.return;ee!==null?(mt=ee,jl(ee)):mt=null}break t}}Pt=0,Yn=null,rs(t,n,d,5);break;case 6:Pt=0,Yn=null,rs(t,n,d,6);break;case 8:Pf(),tn=6;break e;default:throw Error(r(462))}}wy();break}catch(ce){Fg(t,ce)}while(!0);return ki=ar=null,z.H=o,z.A=u,Ut=a,mt!==null?0:(Xt=null,_t=0,fl(),tn)}function wy(){for(;mt!==null&&!Kt();)kg(mt)}function kg(t){var n=hg(t.alternate,t,$i);t.memoizedProps=t.pendingProps,n===null?jl(t):mt=n}function Xg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=og(a,n,n.pendingProps,n.type,void 0,_t);break;case 11:n=og(a,n,n.pendingProps,n.type.render,n.ref,_t);break;case 5:Ku(n);default:mg(a,n),n=mt=Vp(n,$i),n=hg(a,n,$i)}t.memoizedProps=t.pendingProps,n===null?jl(t):mt=n}function rs(t,n,a,o){ki=ar=null,Ku(n),Yr=null,io=0;var u=n.return;try{if(vy(t,u,n,a,_t)){tn=1,Nl(t,ni(a,t.current)),mt=null;return}}catch(d){if(u!==null)throw mt=u,d;tn=1,Nl(t,ni(a,t.current)),mt=null;return}n.flags&32768?(St||o===1?t=!0:ts||(_t&536870912)!==0?t=!1:(Aa=t=!0,(o===2||o===9||o===3||o===6)&&(o=jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Wg(n,t)):jl(n)}function jl(t){var n=t;do{if((n.flags&32768)!==0){Wg(n,Aa);return}t=n.return;var a=yy(n.alternate,n,$i);if(a!==null){mt=a;return}if(n=n.sibling,n!==null){mt=n;return}mt=n=t}while(n!==null);tn===0&&(tn=5)}function Wg(t,n){do{var a=Sy(t.alternate,t);if(a!==null){a.flags&=32767,mt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){mt=t;return}mt=t=a}while(t!==null);tn=6,mt=null}function jg(t,n,a,o,u,d,y,T,I){t.cancelPendingCommit=null;do ql();while(hn!==0);if((Ut&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Eu,ei(t,a,d,y,T,I),t===Xt&&(mt=Xt=null,_t=0),is=n,wa=t,ea=a,Lf=d,Nf=u,Pg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ny(le,function(){return Qg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=K.p,K.p=2,y=Ut,Ut|=4;try{My(t,n,a)}finally{Ut=y,K.p=u,z.T=o}}hn=1,qg(),Yg(),Zg()}}function qg(){if(hn===1){hn=0;var t=wa,n=is,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=K.p;K.p=2;var u=Ut;Ut|=4;try{Rg(n,t);var d=Yf,y=Np(t.containerInfo),T=d.focusedElem,I=d.selectionRange;if(y!==T&&T&&T.ownerDocument&&Lp(T.ownerDocument.documentElement,T)){if(I!==null&&_u(T)){var ee=I.start,ce=I.end;if(ce===void 0&&(ce=ee),"selectionStart"in T)T.selectionStart=ee,T.selectionEnd=Math.min(ce,T.value.length);else{var me=T.ownerDocument||document,ne=me&&me.defaultView||window;if(ne.getSelection){var se=ne.getSelection(),Ve=T.textContent.length,tt=Math.min(I.start,Ve),Ft=I.end===void 0?tt:Math.min(I.end,Ve);!se.extend&&tt>Ft&&(y=Ft,Ft=tt,tt=y);var Y=Up(T,tt),k=Up(T,Ft);if(Y&&k&&(se.rangeCount!==1||se.anchorNode!==Y.node||se.anchorOffset!==Y.offset||se.focusNode!==k.node||se.focusOffset!==k.offset)){var J=me.createRange();J.setStart(Y.node,Y.offset),se.removeAllRanges(),tt>Ft?(se.addRange(J),se.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),se.addRange(J))}}}}for(me=[],se=T;se=se.parentNode;)se.nodeType===1&&me.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<me.length;T++){var pe=me[T];pe.element.scrollLeft=pe.left,pe.element.scrollTop=pe.top}}rc=!!qf,Yf=qf=null}finally{Ut=u,K.p=o,z.T=a}}t.current=n,hn=2}}function Yg(){if(hn===2){hn=0;var t=wa,n=is,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=K.p;K.p=2;var u=Ut;Ut|=4;try{Mg(t,n.alternate,n)}finally{Ut=u,K.p=o,z.T=a}}hn=3}}function Zg(){if(hn===4||hn===3){hn=0,N();var t=wa,n=is,a=ea,o=Pg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?hn=5:(hn=0,is=wa=null,Kg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ca=null),Ur(a),n=n.stateNode,De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(Ae,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=K.p,K.p=2,z.T=null;try{for(var d=t.onRecoverableError,y=0;y<o.length;y++){var T=o[y];d(T.value,{componentStack:T.stack})}}finally{z.T=n,K.p=u}}(ea&3)!==0&&ql(),Di(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Of?So++:(So=0,Of=t):So=0,Mo(0)}}function Kg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,to(n)))}function ql(){return qg(),Yg(),Zg(),Qg()}function Qg(){if(hn!==5)return!1;var t=wa,n=Lf;Lf=0;var a=Ur(ea),o=z.T,u=K.p;try{K.p=32>a?32:a,z.T=null,a=Nf,Nf=null;var d=wa,y=ea;if(hn=0,is=wa=null,ea=0,(Ut&6)!==0)throw Error(r(331));var T=Ut;if(Ut|=4,Lg(d.current),wg(d,d.current,y,a),Ut=T,Mo(0,!1),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(Ae,d)}catch{}return!0}finally{K.p=u,z.T=o,Kg(t,n)}}function Jg(t,n,a){n=ni(a,n),n=df(t.stateNode,n,2),t=Ma(t,n,2),t!==null&&(wn(t,2),Di(t))}function zt(t,n,a){if(t.tag===3)Jg(t,t,a);else for(;n!==null;){if(n.tag===3){Jg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ca===null||!Ca.has(o))){t=ni(a,t),a=$m(2),o=Ma(n,a,2),o!==null&&(eg(a,o,n,t),wn(o,2),Di(o));break}}n=n.return}}function Bf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Ty;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(wf=!0,u.add(a),t=Dy.bind(null,t,n,a),n.then(t,t))}function Dy(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xt===t&&(_t&a)===a&&(tn===4||tn===3&&(_t&62914560)===_t&&300>E()-Gl?(Ut&2)===0&&as(t,0):Df|=a,ns===_t&&(ns=0)),Di(t)}function $g(t,n){n===0&&(n=Ot()),t=tr(t,n),t!==null&&(wn(t,n),Di(t))}function Uy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),$g(t,a)}function Ly(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),$g(t,a)}function Ny(t,n){return st(t,n)}var Yl=null,ss=null,If=!1,Zl=!1,Ff=!1,Ua=0;function Di(t){t!==ss&&t.next===null&&(ss===null?Yl=ss=t:ss=ss.next=t),Zl=!0,If||(If=!0,Py())}function Mo(t,n){if(!Ff&&Zl){Ff=!0;do for(var a=!1,o=Yl;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var y=o.suspendedLanes,T=o.pingedLanes;d=(1<<31-Be(42|t)+1)-1,d&=u&~(y&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,i0(o,d))}else d=_t,d=ve(o,o===Xt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||He(o,d)||(a=!0,i0(o,d));o=o.next}while(a);Ff=!1}}function Oy(){e0()}function e0(){Zl=If=!1;var t=0;Ua!==0&&Wy()&&(t=Ua);for(var n=E(),a=null,o=Yl;o!==null;){var u=o.next,d=t0(o,n);d===0?(o.next=null,a===null?Yl=u:a.next=u,u===null&&(ss=a)):(a=o,(t!==0||(d&3)!==0)&&(Zl=!0)),o=u}hn!==0&&hn!==5||Mo(t),Ua!==0&&(Ua=0)}function t0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var y=31-Be(d),T=1<<y,I=u[y];I===-1?((T&a)===0||(T&o)!==0)&&(u[y]=at(T,n)):I<=n&&(t.expiredLanes|=T),d&=~T}if(n=Xt,a=_t,a=ve(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&$t(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||He(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&$t(o),Ur(a)){case 2:case 8:a=Me;break;case 32:a=le;break;case 268435456:a=we;break;default:a=le}return o=n0.bind(null,t),a=st(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&$t(o),t.callbackPriority=2,t.callbackNode=null,2}function n0(t,n){if(hn!==0&&hn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ql()&&t.callbackNode!==a)return null;var o=_t;return o=ve(t,t===Xt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Bg(t,o,n),t0(t,E()),t.callbackNode!=null&&t.callbackNode===a?n0.bind(null,t):null)}function i0(t,n){if(ql())return null;Bg(t,n,!0)}function Py(){qy(function(){(Ut&6)!==0?st(de,Oy):e0()})}function Hf(){if(Ua===0){var t=Wr;t===0&&(t=Re,Re<<=1,(Re&261888)===0&&(Re=256)),Ua=t}return Ua}function a0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:il(""+t)}function r0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function zy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=a0((u[xn]||null).action),y=o.submitter;y&&(n=(n=y[xn]||null)?a0(n.formAction):y.getAttribute("formAction"),n!==null&&(d=n,y=null));var T=new ol("action","action",null,o,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ua!==0){var I=y?r0(u,y):new FormData(u);sf(a,{pending:!0,data:I,method:u.method,action:d},null,I)}}else typeof d=="function"&&(T.preventDefault(),I=y?r0(u,y):new FormData(u),sf(a,{pending:!0,data:I,method:u.method,action:d},d,I))},currentTarget:u}]})}}for(var Gf=0;Gf<Mu.length;Gf++){var Vf=Mu[Gf],By=Vf.toLowerCase(),Iy=Vf[0].toUpperCase()+Vf.slice(1);hi(By,"on"+Iy)}hi(zp,"onAnimationEnd"),hi(Bp,"onAnimationIteration"),hi(Ip,"onAnimationStart"),hi("dblclick","onDoubleClick"),hi("focusin","onFocus"),hi("focusout","onBlur"),hi(ey,"onTransitionRun"),hi(ty,"onTransitionStart"),hi(ny,"onTransitionCancel"),hi(Fp,"onTransitionEnd"),Qe("onMouseEnter",["mouseout","mouseover"]),Qe("onMouseLeave",["mouseout","mouseover"]),Qe("onPointerEnter",["pointerout","pointerover"]),Qe("onPointerLeave",["pointerout","pointerover"]),Pe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function s0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var y=o.length-1;0<=y;y--){var T=o[y],I=T.instance,ee=T.currentTarget;if(T=T.listener,I!==d&&u.isPropagationStopped())break e;d=T,u.currentTarget=ee;try{d(u)}catch(ce){ul(ce)}u.currentTarget=null,d=I}else for(y=0;y<o.length;y++){if(T=o[y],I=T.instance,ee=T.currentTarget,T=T.listener,I!==d&&u.isPropagationStopped())break e;d=T,u.currentTarget=ee;try{d(u)}catch(ce){ul(ce)}u.currentTarget=null,d=I}}}}function gt(t,n){var a=n[ks];a===void 0&&(a=n[ks]=new Set);var o=t+"__bubble";a.has(o)||(o0(n,t,2,!1),a.add(o))}function kf(t,n,a){var o=0;n&&(o|=4),o0(a,t,o,n)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function Xf(t){if(!t[Kl]){t[Kl]=!0,Ne.forEach(function(a){a!=="selectionchange"&&(Fy.has(a)||kf(a,!1,t),kf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Kl]||(n[Kl]=!0,kf("selectionchange",!1,n))}}function o0(t,n,a,o){switch(z0(n)){case 2:var u=hS;break;case 8:u=pS;break;default:u=rd}a=u.bind(null,n,a,t),u=void 0,!cu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Wf(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var T=o.stateNode.containerInfo;if(T===u)break;if(y===4)for(y=o.return;y!==null;){var I=y.tag;if((I===3||I===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;T!==null;){if(y=W(T),y===null)return;if(I=y.tag,I===5||I===6||I===26||I===27){o=d=y;continue e}T=T.parentNode}}o=o.return}dp(function(){var ee=d,ce=ou(a),me=[];e:{var ne=Hp.get(t);if(ne!==void 0){var se=ol,Ve=t;switch(t){case"keypress":if(rl(a)===0)break e;case"keydown":case"keyup":se=Lx;break;case"focusin":Ve="focus",se=hu;break;case"focusout":Ve="blur",se=hu;break;case"beforeblur":case"afterblur":se=hu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=yx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=Px;break;case zp:case Bp:case Ip:se=Ex;break;case Fp:se=Bx;break;case"scroll":case"scrollend":se=_x;break;case"wheel":se=Fx;break;case"copy":case"cut":case"paste":se=Tx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=vp;break;case"toggle":case"beforetoggle":se=Gx}var tt=(n&4)!==0,Ft=!tt&&(t==="scroll"||t==="scrollend"),Y=tt?ne!==null?ne+"Capture":null:ne;tt=[];for(var k=ee,J;k!==null;){var pe=k;if(J=pe.stateNode,pe=pe.tag,pe!==5&&pe!==26&&pe!==27||J===null||Y===null||(pe=Xs(k,Y),pe!=null&&tt.push(bo(k,pe,J))),Ft)break;k=k.return}0<tt.length&&(ne=new se(ne,Ve,null,a,ce),me.push({event:ne,listeners:tt}))}}if((n&7)===0){e:{if(ne=t==="mouseover"||t==="pointerover",se=t==="mouseout"||t==="pointerout",ne&&a!==su&&(Ve=a.relatedTarget||a.fromElement)&&(W(Ve)||Ve[pa]))break e;if((se||ne)&&(ne=ce.window===ce?ce:(ne=ce.ownerDocument)?ne.defaultView||ne.parentWindow:window,se?(Ve=a.relatedTarget||a.toElement,se=ee,Ve=Ve?W(Ve):null,Ve!==null&&(Ft=c(Ve),tt=Ve.tag,Ve!==Ft||tt!==5&&tt!==27&&tt!==6)&&(Ve=null)):(se=null,Ve=ee),se!==Ve)){if(tt=mp,pe="onMouseLeave",Y="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(tt=vp,pe="onPointerLeave",Y="onPointerEnter",k="pointer"),Ft=se==null?ne:re(se),J=Ve==null?ne:re(Ve),ne=new tt(pe,k+"leave",se,a,ce),ne.target=Ft,ne.relatedTarget=J,pe=null,W(ce)===ee&&(tt=new tt(Y,k+"enter",Ve,a,ce),tt.target=J,tt.relatedTarget=Ft,pe=tt),Ft=pe,se&&Ve)t:{for(tt=Hy,Y=se,k=Ve,J=0,pe=Y;pe;pe=tt(pe))J++;pe=0;for(var et=k;et;et=tt(et))pe++;for(;0<J-pe;)Y=tt(Y),J--;for(;0<pe-J;)k=tt(k),pe--;for(;J--;){if(Y===k||k!==null&&Y===k.alternate){tt=Y;break t}Y=tt(Y),k=tt(k)}tt=null}else tt=null;se!==null&&l0(me,ne,se,tt,!1),Ve!==null&&Ft!==null&&l0(me,Ft,Ve,tt,!0)}}e:{if(ne=ee?re(ee):window,se=ne.nodeName&&ne.nodeName.toLowerCase(),se==="select"||se==="input"&&ne.type==="file")var Rt=Tp;else if(Ep(ne))if(Ap)Rt=Qx;else{Rt=Zx;var We=Yx}else se=ne.nodeName,!se||se.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?ee&&ru(ee.elementType)&&(Rt=Tp):Rt=Kx;if(Rt&&(Rt=Rt(t,ee))){bp(me,Rt,a,ce);break e}We&&We(t,ne,ee),t==="focusout"&&ee&&ne.type==="number"&&ee.memoizedProps.value!=null&&dn(ne,"number",ne.value)}switch(We=ee?re(ee):window,t){case"focusin":(Ep(We)||We.contentEditable==="true")&&(Br=We,xu=ee,Js=null);break;case"focusout":Js=xu=Br=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,Op(me,a,ce);break;case"selectionchange":if($x)break;case"keydown":case"keyup":Op(me,a,ce)}var ct;if(mu)e:{switch(t){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else zr?Sp(t,a)&&(xt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xt="onCompositionStart");xt&&(_p&&a.locale!=="ko"&&(zr||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&zr&&(ct=hp()):(ma=ce,uu="value"in ma?ma.value:ma.textContent,zr=!0)),We=Ql(ee,xt),0<We.length&&(xt=new gp(xt,t,null,a,ce),me.push({event:xt,listeners:We}),ct?xt.data=ct:(ct=Mp(a),ct!==null&&(xt.data=ct)))),(ct=kx?Xx(t,a):Wx(t,a))&&(xt=Ql(ee,"onBeforeInput"),0<xt.length&&(We=new gp("onBeforeInput","beforeinput",null,a,ce),me.push({event:We,listeners:xt}),We.data=ct)),zy(me,t,ee,a,ce)}s0(me,n)})}function bo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ql(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Xs(t,a),u!=null&&o.unshift(bo(t,u,d)),u=Xs(t,n),u!=null&&o.push(bo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function Hy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function l0(t,n,a,o,u){for(var d=n._reactName,y=[];a!==null&&a!==o;){var T=a,I=T.alternate,ee=T.stateNode;if(T=T.tag,I!==null&&I===o)break;T!==5&&T!==26&&T!==27||ee===null||(I=ee,u?(ee=Xs(a,d),ee!=null&&y.unshift(bo(a,ee,I))):u||(ee=Xs(a,d),ee!=null&&y.push(bo(a,ee,I)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var Gy=/\r\n?/g,Vy=/\u0000|\uFFFD/g;function c0(t){return(typeof t=="string"?t:""+t).replace(Gy,`
`).replace(Vy,"")}function u0(t,n){return n=c0(n),c0(t)===n}function It(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Nr(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Nr(t,""+o);break;case"className":Nt(t,"class",o);break;case"tabIndex":Nt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Nt(t,a,o);break;case"style":up(t,o,d);break;case"data":if(n!=="object"){Nt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=il(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&It(t,n,"name",u.name,u,null),It(t,n,"formEncType",u.formEncType,u,null),It(t,n,"formMethod",u.formMethod,u,null),It(t,n,"formTarget",u.formTarget,u,null)):(It(t,n,"encType",u.encType,u,null),It(t,n,"method",u.method,u,null),It(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=il(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Fi);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=il(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":gt("beforetoggle",t),gt("toggle",t),kt(t,"popover",o);break;case"xlinkActuate":pt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":pt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":pt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":pt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":pt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":pt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":pt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":pt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":pt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":kt(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=gx.get(a)||a,kt(t,a,o))}}function jf(t,n,a,o,u,d){switch(a){case"style":up(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Nr(t,o):(typeof o=="number"||typeof o=="bigint")&&Nr(t,""+o);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Fi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ke.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[xn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):kt(t,a,o)}}}function bn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var y=a[d];if(y!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(t,n,d,y,a,null)}}u&&It(t,n,"srcSet",a.srcSet,a,null),o&&It(t,n,"src",a.src,a,null);return;case"input":gt("invalid",t);var T=d=y=u=null,I=null,ee=null;for(o in a)if(a.hasOwnProperty(o)){var ce=a[o];if(ce!=null)switch(o){case"name":u=ce;break;case"type":y=ce;break;case"checked":I=ce;break;case"defaultChecked":ee=ce;break;case"value":d=ce;break;case"defaultValue":T=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:It(t,n,o,ce,a,null)}}Dn(t,d,T,I,ee,y,u,!1);return;case"select":gt("invalid",t),o=y=d=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":d=T;break;case"defaultValue":y=T;break;case"multiple":o=T;default:It(t,n,u,T,a,null)}n=d,a=y,t.multiple=!!o,n!=null?nn(t,!!o,n,!1):a!=null&&nn(t,!!o,a,!0);return;case"textarea":gt("invalid",t),d=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(T=a[y],T!=null))switch(y){case"value":o=T;break;case"defaultValue":u=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:It(t,n,y,T,a,null)}Ai(t,o,u,d);return;case"option":for(I in a)a.hasOwnProperty(I)&&(o=a[I],o!=null)&&(I==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":It(t,n,I,o,a,null));return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(o=0;o<Eo.length;o++)gt(Eo[o],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(o=a[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(t,n,ee,o,a,null)}return;default:if(ru(n)){for(ce in a)a.hasOwnProperty(ce)&&(o=a[ce],o!==void 0&&jf(t,n,ce,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&It(t,n,T,o,a,null))}function ky(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,T=null,I=null,ee=null,ce=null;for(se in a){var me=a[se];if(a.hasOwnProperty(se)&&me!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":I=me;default:o.hasOwnProperty(se)||It(t,n,se,null,o,me)}}for(var ne in o){var se=o[ne];if(me=a[ne],o.hasOwnProperty(ne)&&(se!=null||me!=null))switch(ne){case"type":d=se;break;case"name":u=se;break;case"checked":ee=se;break;case"defaultChecked":ce=se;break;case"value":y=se;break;case"defaultValue":T=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(r(137,n));break;default:se!==me&&It(t,n,ne,se,o,me)}}Tn(t,y,T,I,ee,ce,d,u);return;case"select":se=y=T=ne=null;for(d in a)if(I=a[d],a.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":se=I;default:o.hasOwnProperty(d)||It(t,n,d,null,o,I)}for(u in o)if(d=o[u],I=a[u],o.hasOwnProperty(u)&&(d!=null||I!=null))switch(u){case"value":ne=d;break;case"defaultValue":T=d;break;case"multiple":y=d;default:d!==I&&It(t,n,u,d,o,I)}n=T,a=y,o=se,ne!=null?nn(t,!!a,ne,!1):!!o!=!!a&&(n!=null?nn(t,!!a,n,!0):nn(t,!!a,a?[]:"",!1));return;case"textarea":se=ne=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:It(t,n,T,null,o,u)}for(y in o)if(u=o[y],d=a[y],o.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":ne=u;break;case"defaultValue":se=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&It(t,n,y,u,o,d)}Lr(t,ne,se);return;case"option":for(var Ve in a)ne=a[Ve],a.hasOwnProperty(Ve)&&ne!=null&&!o.hasOwnProperty(Ve)&&(Ve==="selected"?t.selected=!1:It(t,n,Ve,null,o,ne));for(I in o)ne=o[I],se=a[I],o.hasOwnProperty(I)&&ne!==se&&(ne!=null||se!=null)&&(I==="selected"?t.selected=ne&&typeof ne!="function"&&typeof ne!="symbol":It(t,n,I,ne,o,se));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)ne=a[tt],a.hasOwnProperty(tt)&&ne!=null&&!o.hasOwnProperty(tt)&&It(t,n,tt,null,o,ne);for(ee in o)if(ne=o[ee],se=a[ee],o.hasOwnProperty(ee)&&ne!==se&&(ne!=null||se!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(r(137,n));break;default:It(t,n,ee,ne,o,se)}return;default:if(ru(n)){for(var Ft in a)ne=a[Ft],a.hasOwnProperty(Ft)&&ne!==void 0&&!o.hasOwnProperty(Ft)&&jf(t,n,Ft,void 0,o,ne);for(ce in o)ne=o[ce],se=a[ce],!o.hasOwnProperty(ce)||ne===se||ne===void 0&&se===void 0||jf(t,n,ce,ne,o,se);return}}for(var Y in a)ne=a[Y],a.hasOwnProperty(Y)&&ne!=null&&!o.hasOwnProperty(Y)&&It(t,n,Y,null,o,ne);for(me in o)ne=o[me],se=a[me],!o.hasOwnProperty(me)||ne===se||ne==null&&se==null||It(t,n,me,ne,o,se)}function f0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Xy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,y=u.initiatorType,T=u.duration;if(d&&T&&f0(y)){for(y=0,T=u.responseEnd,o+=1;o<a.length;o++){var I=a[o],ee=I.startTime;if(ee>T)break;var ce=I.transferSize,me=I.initiatorType;ce&&f0(me)&&(I=I.responseEnd,y+=ce*(I<T?1:(T-ee)/(I-ee)))}if(--o,n+=8*(d+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var qf=null,Yf=null;function Jl(t){return t.nodeType===9?t:t.ownerDocument}function d0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function h0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Zf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Kf=null;function Wy(){var t=window.event;return t&&t.type==="popstate"?t===Kf?!1:(Kf=t,!0):(Kf=null,!1)}var p0=typeof setTimeout=="function"?setTimeout:void 0,jy=typeof clearTimeout=="function"?clearTimeout:void 0,m0=typeof Promise=="function"?Promise:void 0,qy=typeof queueMicrotask=="function"?queueMicrotask:typeof m0<"u"?function(t){return m0.resolve(null).then(t).catch(Yy)}:p0;function Yy(t){setTimeout(function(){throw t})}function La(t){return t==="head"}function g0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),us(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")To(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,To(a);for(var d=a.firstChild;d;){var y=d.nextSibling,T=d.nodeName;d[Ka]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=y}}else a==="body"&&To(t.ownerDocument.body);a=u}while(a);us(n)}function v0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Qf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Qf(a),R(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Zy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ka])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=oi(t.nextSibling),t===null)break}return null}function Ky(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=oi(t.nextSibling),t===null))return null;return t}function _0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=oi(t.nextSibling),t===null))return null;return t}function Jf(t){return t.data==="$?"||t.data==="$~"}function $f(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Qy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function oi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ed=null;function x0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return oi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function y0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function S0(t,n,a){switch(n=Jl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function To(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);R(t)}var li=new Map,M0=new Set;function $l(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ta=K.d;K.d={f:Jy,r:$y,D:eS,C:tS,L:nS,m:iS,X:rS,S:aS,M:sS};function Jy(){var t=ta.f(),n=Xl();return t||n}function $y(t){var n=ae(t);n!==null&&n.tag===5&&n.type==="form"?Fm(n):ta.r(t)}var os=typeof document>"u"?null:document;function E0(t,n,a){var o=os;if(o&&typeof n=="string"&&n){var u=vt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),M0.has(u)||(M0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),bn(n,"link",t),ye(n),o.head.appendChild(n)))}}function eS(t){ta.D(t),E0("dns-prefetch",t,null)}function tS(t,n){ta.C(t,n),E0("preconnect",t,n)}function nS(t,n,a){ta.L(t,n,a);var o=os;if(o&&t&&n){var u='link[rel="preload"][as="'+vt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+vt(a.imageSizes)+'"]')):u+='[href="'+vt(t)+'"]';var d=u;switch(n){case"style":d=ls(t);break;case"script":d=cs(t)}li.has(d)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),li.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ao(d))||n==="script"&&o.querySelector(Ro(d))||(n=o.createElement("link"),bn(n,"link",t),ye(n),o.head.appendChild(n)))}}function iS(t,n){ta.m(t,n);var a=os;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+vt(o)+'"][href="'+vt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=cs(t)}if(!li.has(d)&&(t=g({rel:"modulepreload",href:t},n),li.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ro(d)))return}o=a.createElement("link"),bn(o,"link",t),ye(o),a.head.appendChild(o)}}}function aS(t,n,a){ta.S(t,n,a);var o=os;if(o&&t){var u=q(o).hoistableStyles,d=ls(t);n=n||"default";var y=u.get(d);if(!y){var T={loading:0,preload:null};if(y=o.querySelector(Ao(d)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=li.get(d))&&td(t,a);var I=y=o.createElement("link");ye(I),bn(I,"link",t),I._p=new Promise(function(ee,ce){I.onload=ee,I.onerror=ce}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,ec(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:T},u.set(d,y)}}}function rS(t,n){ta.X(t,n);var a=os;if(a&&t){var o=q(a).hoistableScripts,u=cs(t),d=o.get(u);d||(d=a.querySelector(Ro(u)),d||(t=g({src:t,async:!0},n),(n=li.get(u))&&nd(t,n),d=a.createElement("script"),ye(d),bn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function sS(t,n){ta.M(t,n);var a=os;if(a&&t){var o=q(a).hoistableScripts,u=cs(t),d=o.get(u);d||(d=a.querySelector(Ro(u)),d||(t=g({src:t,async:!0,type:"module"},n),(n=li.get(u))&&nd(t,n),d=a.createElement("script"),ye(d),bn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function b0(t,n,a,o){var u=(u=xe.current)?$l(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ls(a.href),a=q(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ls(a.href);var d=q(u).hoistableStyles,y=d.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,y),(d=u.querySelector(Ao(t)))&&!d._p&&(y.instance=d,y.state.loading=5),li.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(t,a),d||oS(u,t,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=cs(a),a=q(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ls(t){return'href="'+vt(t)+'"'}function Ao(t){return'link[rel="stylesheet"]['+t+"]"}function T0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function oS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),bn(n,"link",a),ye(n),t.head.appendChild(n))}function cs(t){return'[src="'+vt(t)+'"]'}function Ro(t){return"script[async]"+t}function A0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+vt(a.href)+'"]');if(o)return n.instance=o,ye(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),ye(o),bn(o,"style",u),ec(o,a.precedence,t),n.instance=o;case"stylesheet":u=ls(a.href);var d=t.querySelector(Ao(u));if(d)return n.state.loading|=4,n.instance=d,ye(d),d;o=T0(a),(u=li.get(u))&&td(o,u),d=(t.ownerDocument||t).createElement("link"),ye(d);var y=d;return y._p=new Promise(function(T,I){y.onload=T,y.onerror=I}),bn(d,"link",o),n.state.loading|=4,ec(d,a.precedence,t),n.instance=d;case"script":return d=cs(a.src),(u=t.querySelector(Ro(d)))?(n.instance=u,ye(u),u):(o=a,(u=li.get(d))&&(o=g({},a),nd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),ye(u),bn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ec(o,a.precedence,t));return n.instance}function ec(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,y=0;y<o.length;y++){var T=o[y];if(T.dataset.precedence===n)d=T;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function td(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function nd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var tc=null;function R0(t,n,a){if(tc===null){var o=new Map,u=tc=new Map;u.set(a,o)}else u=tc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[Ka]||d[sn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(n)||"";y=t+y;var T=o.get(y);T?T.push(d):o.set(y,[d])}}return o}function C0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function lS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function w0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function cS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ls(o.href),d=n.querySelector(Ao(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=nc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,ye(d);return}d=n.ownerDocument||n,o=T0(o),(u=li.get(u))&&td(o,u),d=d.createElement("link"),ye(d);var y=d;y._p=new Promise(function(T,I){y.onload=T,y.onerror=I}),bn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=nc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var id=0;function uS(t,n){return t.stylesheets&&t.count===0&&ac(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&ac(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&id===0&&(id=62500*Xy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ac(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>id?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function nc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ac(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ic=null;function ac(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ic=new Map,n.forEach(fS,t),ic=null,nc.call(t))}function fS(t,n){if(!(n.state.loading&4)){var a=ic.get(t);if(a)var o=a.get(null);else{a=new Map,ic.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),d=a.get(y)||o,d===o&&a.set(null,u),a.set(y,u),this.count++,o=nc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Co={$$typeof:U,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function dS(t,n,a,o,u,d,y,T,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function D0(t,n,a,o,u,d,y,T,I,ee,ce,me){return t=new dS(t,n,a,y,I,ee,ce,me,T),n=1,d===!0&&(n|=24),d=Wn(3,null,null,n),t.current=d,d.stateNode=t,n=Pu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Fu(d),t}function U0(t){return t?(t=Hr,t):Hr}function L0(t,n,a,o,u,d){u=U0(u),o.context===null?o.context=u:o.pendingContext=u,o=Sa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ma(t,o,n),a!==null&&(Hn(a,t,n),ro(a,t,n))}function N0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ad(t,n){N0(t,n),(t=t.alternate)&&N0(t,n)}function O0(t){if(t.tag===13||t.tag===31){var n=tr(t,67108864);n!==null&&Hn(n,t,67108864),ad(t,67108864)}}function P0(t){if(t.tag===13||t.tag===31){var n=Kn();n=Dr(n);var a=tr(t,n);a!==null&&Hn(a,t,n),ad(t,n)}}var rc=!0;function hS(t,n,a,o){var u=z.T;z.T=null;var d=K.p;try{K.p=2,rd(t,n,a,o)}finally{K.p=d,z.T=u}}function pS(t,n,a,o){var u=z.T;z.T=null;var d=K.p;try{K.p=8,rd(t,n,a,o)}finally{K.p=d,z.T=u}}function rd(t,n,a,o){if(rc){var u=sd(o);if(u===null)Wf(t,n,o,sc,a),B0(t,o);else if(gS(u,t,n,a,o))o.stopPropagation();else if(B0(t,o),n&4&&-1<mS.indexOf(t)){for(;u!==null;){var d=ae(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=Ee(d.pendingLanes);if(y!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;y;){var I=1<<31-Be(y);T.entanglements[1]|=I,y&=~I}Di(d),(Ut&6)===0&&(Vl=E()+500,Mo(0))}}break;case 31:case 13:T=tr(d,2),T!==null&&Hn(T,d,2),Xl(),ad(d,2)}if(d=sd(o),d===null&&Wf(t,n,o,sc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Wf(t,n,o,null,a)}}function sd(t){return t=ou(t),od(t)}var sc=null;function od(t){if(sc=null,t=W(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return sc=t,null}function z0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(te()){case de:return 2;case Me:return 8;case le:case Ye:return 32;case we:return 268435456;default:return 32}default:return 32}}var ld=!1,Na=null,Oa=null,Pa=null,wo=new Map,Do=new Map,za=[],mS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function B0(t,n){switch(t){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Oa=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Uo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=ae(n),n!==null&&O0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function gS(t,n,a,o,u){switch(n){case"focusin":return Na=Uo(Na,t,n,a,o,u),!0;case"dragenter":return Oa=Uo(Oa,t,n,a,o,u),!0;case"mouseover":return Pa=Uo(Pa,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return wo.set(d,Uo(wo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Do.set(d,Uo(Do.get(d)||null,t,n,a,o,u)),!0}return!1}function I0(t){var n=W(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Vs(t.priority,function(){P0(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Vs(t.priority,function(){P0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=sd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);su=o,a.target.dispatchEvent(o),su=null}else return n=ae(a),n!==null&&O0(n),t.blockedOn=a,!1;n.shift()}return!0}function F0(t,n,a){oc(t)&&a.delete(n)}function vS(){ld=!1,Na!==null&&oc(Na)&&(Na=null),Oa!==null&&oc(Oa)&&(Oa=null),Pa!==null&&oc(Pa)&&(Pa=null),wo.forEach(F0),Do.forEach(F0)}function lc(t,n){t.blockedOn===n&&(t.blockedOn=null,ld||(ld=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,vS)))}var cc=null;function H0(t){cc!==t&&(cc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){cc===t&&(cc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(od(o||a)===null)continue;break}var d=ae(a);d!==null&&(t.splice(n,3),n-=3,sf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function us(t){function n(I){return lc(I,t)}Na!==null&&lc(Na,t),Oa!==null&&lc(Oa,t),Pa!==null&&lc(Pa,t),wo.forEach(n),Do.forEach(n);for(var a=0;a<za.length;a++){var o=za[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<za.length&&(a=za[0],a.blockedOn===null);)I0(a),a.blockedOn===null&&za.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],y=u[xn]||null;if(typeof d=="function")y||H0(a);else if(y){var T=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[xn]||null)T=y.formAction;else if(od(u)!==null)continue}else T=y.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),H0(a)}}}function G0(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function cd(t){this._internalRoot=t}uc.prototype.render=cd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Kn();L0(a,o,t,n,null,null)},uc.prototype.unmount=cd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;L0(t.current,2,null,t,null,null),Xl(),n[pa]=null}};function uc(t){this._internalRoot=t}uc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Za();t={blockedOn:null,target:t,priority:n};for(var a=0;a<za.length&&n!==0&&n<za[a].priority;a++);za.splice(a,0,t),a===0&&I0(t)}};var V0=e.version;if(V0!=="19.2.3")throw Error(r(527,V0,"19.2.3"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var _S={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{Ae=fc.inject(_S),De=fc}catch{}}return No.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=Zm,d=Km,y=Qm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=D0(t,1,!1,null,null,a,o,null,u,d,y,G0),t[pa]=n.current,Xf(t),new cd(n)},No.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",d=Zm,y=Km,T=Qm,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=D0(t,1,!0,n,a??null,o,u,I,d,y,T,G0),n.context=U0(null),a=n.current,o=Kn(),o=Dr(o),u=Sa(o),u.callback=null,Ma(a,u,o),a=o,n.current.lanes=a,wn(n,a),Di(n),t[pa]=n.current,Xf(t),new uc(n)},No.version="19.2.3",No}var J0;function CS(){if(J0)return dd.exports;J0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),dd.exports=RS(),dd.exports}var wS=CS();const DS=c_(wS);var $0="popstate";function US(s={}){function e(r,l){let{pathname:c,search:f,hash:h}=r.location;return $d("",{pathname:c,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:Vo(l)}return NS(e,i,null,s)}function Qt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function bi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function LS(){return Math.random().toString(36).substring(2,10)}function ev(s,e){return{usr:s.state,key:s.key,idx:e}}function $d(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Ps(e):e,state:i,key:e&&e.key||r||LS()}}function Vo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Ps(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function NS(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,h="POP",m=null,p=v();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function v(){return(f.state||{idx:null}).idx}function g(){h="POP";let S=v(),_=S==null?null:S-p;p=S,m&&m({action:h,location:A.location,delta:_})}function x(S,_){h="PUSH";let L=$d(A.location,S,_);p=v()+1;let U=ev(L,p),C=A.createHref(L);try{f.pushState(U,"",C)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;l.location.assign(C)}c&&m&&m({action:h,location:A.location,delta:1})}function M(S,_){h="REPLACE";let L=$d(A.location,S,_);p=v();let U=ev(L,p),C=A.createHref(L);f.replaceState(U,"",C),c&&m&&m({action:h,location:A.location,delta:0})}function b(S){return OS(S)}let A={get action(){return h},get location(){return s(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener($0,g),m=S,()=>{l.removeEventListener($0,g),m=null}},createHref(S){return e(l,S)},createURL:b,encodeLocation(S){let _=b(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:M,go(S){return f.go(S)}};return A}function OS(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Qt(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Vo(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function u_(s,e,i="/"){return PS(s,e,i,!1)}function PS(s,e,i,r){let l=typeof e=="string"?Ps(e):e,c=da(l.pathname||"/",i);if(c==null)return null;let f=f_(s);zS(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=qS(c);h=WS(f[m],p,r)}return h}function f_(s,e=[],i=[],r="",l=!1){let c=(f,h,m=l,p)=>{let v={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(r)&&m)return;Qt(v.relativePath.startsWith(r),`Absolute route path "${v.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(r.length)}let g=ua([r,v.relativePath]),x=i.concat(v);f.children&&f.children.length>0&&(Qt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),f_(f.children,e,x,g,m)),!(f.path==null&&!f.index)&&e.push({path:g,score:kS(g,f.index),routesMeta:x})};return s.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of d_(f.path))c(f,h,!0,m)}),e}function d_(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=d_(r.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function zS(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:XS(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var BS=/^:[\w-]+$/,IS=3,FS=2,HS=1,GS=10,VS=-2,tv=s=>s==="*";function kS(s,e){let i=s.split("/"),r=i.length;return i.some(tv)&&(r+=VS),e&&(r+=FS),i.filter(l=>!tv(l)).reduce((l,c)=>l+(BS.test(c)?IS:c===""?HS:GS),r)}function XS(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function WS(s,e,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,v=c==="/"?e:e.slice(c.length)||"/",g=Wc({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},v),x=m.route;if(!g&&p&&i&&!r[r.length-1].route.index&&(g=Wc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:ua([c,g.pathname]),pathnameBase:QS(ua([c,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(c=ua([c,g.pathnameBase]))}return f}function Wc(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=jS(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((p,{paramName:v,isOptional:g},x)=>{if(v==="*"){let b=h[x]||"";f=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const M=h[x];return g&&!M?p[v]=void 0:p[v]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:s}}function jS(s,e=!1,i=!0){bi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function qS(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return bi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function da(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var h_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,YS=s=>h_.test(s);function ZS(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Ps(s):s,c;if(i)if(YS(i))c=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),bi(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?c=nv(i.substring(1),"/"):c=nv(i,e)}else c=e;return{pathname:c,search:JS(r),hash:$S(l)}}function nv(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function gd(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function KS(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function p_(s){let e=KS(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function m_(s,e,i,r=!1){let l;typeof s=="string"?l=Ps(s):(l={...s},Qt(!l.pathname||!l.pathname.includes("?"),gd("?","pathname","search",l)),Qt(!l.pathname||!l.pathname.includes("#"),gd("#","pathname","hash",l)),Qt(!l.search||!l.search.includes("#"),gd("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let g=e.length-1;if(!r&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),g-=1;l.pathname=x.join("/")}h=g>=0?e[g]:"/"}let m=ZS(l,h),p=f&&f!=="/"&&f.endsWith("/"),v=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||v)&&(m.pathname+="/"),m}var ua=s=>s.join("/").replace(/\/\/+/g,"/"),QS=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),JS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,$S=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,eM=class{constructor(s,e,i,r=!1){this.status=s,this.statusText=e||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function tM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function nM(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var g_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function v_(s,e){let i=s;if(typeof i!="string"||!h_.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(g_)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),h=da(f.pathname,e);f.origin===c.origin&&h!=null?i=h+f.search+f.hash:l=!0}catch{bi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var __=["POST","PUT","PATCH","DELETE"];new Set(__);var iM=["GET",...__];new Set(iM);var zs=fe.createContext(null);zs.displayName="DataRouter";var Qc=fe.createContext(null);Qc.displayName="DataRouterState";var aM=fe.createContext(!1),x_=fe.createContext({isTransitioning:!1});x_.displayName="ViewTransition";var rM=fe.createContext(new Map);rM.displayName="Fetchers";var sM=fe.createContext(null);sM.displayName="Await";var di=fe.createContext(null);di.displayName="Navigation";var Yo=fe.createContext(null);Yo.displayName="Location";var ha=fe.createContext({outlet:null,matches:[],isDataRoute:!1});ha.displayName="Route";var Wh=fe.createContext(null);Wh.displayName="RouteError";var y_="REACT_ROUTER_ERROR",oM="REDIRECT",lM="ROUTE_ERROR_RESPONSE";function cM(s){if(s.startsWith(`${y_}:${oM}:{`))try{let e=JSON.parse(s.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function uM(s){if(s.startsWith(`${y_}:${lM}:{`))try{let e=JSON.parse(s.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new eM(e.status,e.statusText,e.data)}catch{}}function fM(s,{relative:e}={}){Qt(Zo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=fe.useContext(di),{hash:l,pathname:c,search:f}=Ko(s,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:ua([i,c])),r.createHref({pathname:h,search:f,hash:l})}function Zo(){return fe.useContext(Yo)!=null}function Cr(){return Qt(Zo(),"useLocation() may be used only in the context of a <Router> component."),fe.useContext(Yo).location}var S_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function M_(s){fe.useContext(di).static||fe.useLayoutEffect(s)}function jh(){let{isDataRoute:s}=fe.useContext(ha);return s?bM():dM()}function dM(){Qt(Zo(),"useNavigate() may be used only in the context of a <Router> component.");let s=fe.useContext(zs),{basename:e,navigator:i}=fe.useContext(di),{matches:r}=fe.useContext(ha),{pathname:l}=Cr(),c=JSON.stringify(p_(r)),f=fe.useRef(!1);return M_(()=>{f.current=!0}),fe.useCallback((m,p={})=>{if(bi(f.current,S_),!f.current)return;if(typeof m=="number"){i.go(m);return}let v=m_(m,JSON.parse(c),l,p.relative==="path");s==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:ua([e,v.pathname])),(p.replace?i.replace:i.push)(v,p.state,p)},[e,i,c,l,s])}fe.createContext(null);function Ko(s,{relative:e}={}){let{matches:i}=fe.useContext(ha),{pathname:r}=Cr(),l=JSON.stringify(p_(i));return fe.useMemo(()=>m_(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function hM(s,e){return E_(s,e)}function E_(s,e,i,r,l){Qt(Zo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=fe.useContext(di),{matches:f}=fe.useContext(ha),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",v=h?h.pathnameBase:"/",g=h&&h.route;{let L=g&&g.path||"";T_(p,!g||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let x=Cr(),M;if(e){let L=typeof e=="string"?Ps(e):e;Qt(v==="/"||L.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${L.pathname}" was given in the \`location\` prop.`),M=L}else M=x;let b=M.pathname||"/",A=b;if(v!=="/"){let L=v.replace(/^\//,"").split("/");A="/"+b.replace(/^\//,"").split("/").slice(L.length).join("/")}let S=u_(s,{pathname:A});bi(g||S!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),bi(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=_M(S&&S.map(L=>Object.assign({},L,{params:Object.assign({},m,L.params),pathname:ua([v,c.encodeLocation?c.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?v:ua([v,c.encodeLocation?c.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),f,i,r,l);return e&&_?fe.createElement(Yo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},_):_}function pM(){let s=EM(),e=tM(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=fe.createElement(fe.Fragment,null,fe.createElement("p",null,"💿 Hey developer 👋"),fe.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",fe.createElement("code",{style:c},"ErrorBoundary")," or"," ",fe.createElement("code",{style:c},"errorElement")," prop on your route.")),fe.createElement(fe.Fragment,null,fe.createElement("h2",null,"Unexpected Application Error!"),fe.createElement("h3",{style:{fontStyle:"italic"}},e),i?fe.createElement("pre",{style:l},i):null,f)}var mM=fe.createElement(pM,null),b_=class extends fe.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=uM(s.digest);i&&(s=i)}let e=s!==void 0?fe.createElement(ha.Provider,{value:this.props.routeContext},fe.createElement(Wh.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?fe.createElement(gM,{error:s},e):e}};b_.contextType=aM;var vd=new WeakMap;function gM({children:s,error:e}){let{basename:i}=fe.useContext(di);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=cM(e.digest);if(r){let l=vd.get(e);if(l)throw l;let c=v_(r.location,i);if(g_&&!vd.get(e))if(c.isExternal||r.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:r.replace}));throw vd.set(e,f),f}return fe.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return s}function vM({routeContext:s,match:e,children:i}){let r=fe.useContext(zs);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),fe.createElement(ha.Provider,{value:s},i)}function _M(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,f=i?.errors;if(f!=null){let v=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Qt(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,v+1))}let h=!1,m=-1;if(i)for(let v=0;v<c.length;v++){let g=c[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=v),g.route.id){let{loaderData:x,errors:M}=i,b=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!M||M[g.route.id]===void 0);if(g.route.lazy||b){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=i&&r?(v,g)=>{r(v,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:nM(i.matches),errorInfo:g})}:void 0;return c.reduceRight((v,g,x)=>{let M,b=!1,A=null,S=null;i&&(M=f&&g.route.id?f[g.route.id]:void 0,A=g.route.errorElement||mM,h&&(m<0&&x===0?(T_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,S=null):m===x&&(b=!0,S=g.route.hydrateFallbackElement||null)));let _=e.concat(c.slice(0,x+1)),L=()=>{let U;return M?U=A:b?U=S:g.route.Component?U=fe.createElement(g.route.Component,null):g.route.element?U=g.route.element:U=v,fe.createElement(vM,{match:g,routeContext:{outlet:v,matches:_,isDataRoute:i!=null},children:U})};return i&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?fe.createElement(b_,{location:i.location,revalidation:i.revalidation,component:A,error:M,children:L(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:p}):L()},null)}function qh(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xM(s){let e=fe.useContext(zs);return Qt(e,qh(s)),e}function yM(s){let e=fe.useContext(Qc);return Qt(e,qh(s)),e}function SM(s){let e=fe.useContext(ha);return Qt(e,qh(s)),e}function Yh(s){let e=SM(s),i=e.matches[e.matches.length-1];return Qt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function MM(){return Yh("useRouteId")}function EM(){let s=fe.useContext(Wh),e=yM("useRouteError"),i=Yh("useRouteError");return s!==void 0?s:e.errors?.[i]}function bM(){let{router:s}=xM("useNavigate"),e=Yh("useNavigate"),i=fe.useRef(!1);return M_(()=>{i.current=!0}),fe.useCallback(async(l,c={})=>{bi(i.current,S_),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var iv={};function T_(s,e,i){!e&&!iv[s]&&(iv[s]=!0,bi(!1,i))}fe.memo(TM);function TM({routes:s,future:e,state:i,onError:r}){return E_(s,void 0,i,r,e)}function eh(s){Qt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function AM({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){Qt(!Zo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),m=fe.useMemo(()=>({basename:h,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[h,l,c,f]);typeof i=="string"&&(i=Ps(i));let{pathname:p="/",search:v="",hash:g="",state:x=null,key:M="default"}=i,b=fe.useMemo(()=>{let A=da(p,h);return A==null?null:{location:{pathname:A,search:v,hash:g,state:x,key:M},navigationType:r}},[h,p,v,g,x,M,r]);return bi(b!=null,`<Router basename="${h}"> is not able to match the URL "${p}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:fe.createElement(di.Provider,{value:m},fe.createElement(Yo.Provider,{children:e,value:b}))}function RM({children:s,location:e}){return hM(th(s),e)}function th(s,e=[]){let i=[];return fe.Children.forEach(s,(r,l)=>{if(!fe.isValidElement(r))return;let c=[...e,l];if(r.type===fe.Fragment){i.push.apply(i,th(r.props.children,c));return}Qt(r.type===eh,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=th(r.props.children,c)),i.push(f)}),i}var Bc="get",Ic="application/x-www-form-urlencoded";function Jc(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function CM(s){return Jc(s)&&s.tagName.toLowerCase()==="button"}function wM(s){return Jc(s)&&s.tagName.toLowerCase()==="form"}function DM(s){return Jc(s)&&s.tagName.toLowerCase()==="input"}function UM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function LM(s,e){return s.button===0&&(!e||e==="_self")&&!UM(s)}var dc=null;function NM(){if(dc===null)try{new FormData(document.createElement("form"),0),dc=!1}catch{dc=!0}return dc}var OM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _d(s){return s!=null&&!OM.has(s)?(bi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ic}"`),null):s}function PM(s,e){let i,r,l,c,f;if(wM(s)){let h=s.getAttribute("action");r=h?da(h,e):null,i=s.getAttribute("method")||Bc,l=_d(s.getAttribute("enctype"))||Ic,c=new FormData(s)}else if(CM(s)||DM(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(r=m?da(m,e):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||Bc,l=_d(s.getAttribute("formenctype"))||_d(h.getAttribute("enctype"))||Ic,c=new FormData(h,s),!NM()){let{name:p,type:v,value:g}=s;if(v==="image"){let x=p?`${p}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else p&&c.append(p,g)}}else{if(Jc(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Bc,r=null,l=Ic,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Zh(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function zM(s,e,i,r){let l=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${r}`:l.pathname=`${l.pathname}.${r}`:l.pathname==="/"?l.pathname=`_root.${r}`:e&&da(l.pathname,e)==="/"?l.pathname=`${e.replace(/\/$/,"")}/_root.${r}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${r}`,l}async function BM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function IM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function FM(s,e,i){let r=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await BM(c,i);return f.links?f.links():[]}return[]}));return kM(r.flat(1).filter(IM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function av(s,e,i,r,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{let v=r.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function HM(s,e,{includeHydrateFallback:i}={}){return GM(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function GM(s){return[...new Set(s)]}function VM(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function kM(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let c=JSON.stringify(VM(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function A_(){let s=fe.useContext(zs);return Zh(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function XM(){let s=fe.useContext(Qc);return Zh(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Kh=fe.createContext(void 0);Kh.displayName="FrameworkContext";function R_(){let s=fe.useContext(Kh);return Zh(s,"You must render this element inside a <HydratedRouter> element"),s}function WM(s,e){let i=fe.useContext(Kh),[r,l]=fe.useState(!1),[c,f]=fe.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:v,onTouchStart:g}=e,x=fe.useRef(null);fe.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let A=_=>{_.forEach(L=>{f(L.isIntersecting)})},S=new IntersectionObserver(A,{threshold:.5});return x.current&&S.observe(x.current),()=>{S.disconnect()}}},[s]),fe.useEffect(()=>{if(r){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[r]);let M=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,x,{}]:[c,x,{onFocus:Oo(h,M),onBlur:Oo(m,b),onMouseEnter:Oo(p,M),onMouseLeave:Oo(v,b),onTouchStart:Oo(g,M)}]:[!1,x,{}]}function Oo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function jM({page:s,...e}){let{router:i}=A_(),r=fe.useMemo(()=>u_(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?fe.createElement(YM,{page:s,matches:r,...e}):null}function qM(s){let{manifest:e,routeModules:i}=R_(),[r,l]=fe.useState([]);return fe.useEffect(()=>{let c=!1;return FM(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),r}function YM({page:s,matches:e,...i}){let r=Cr(),{future:l,manifest:c,routeModules:f}=R_(),{basename:h}=A_(),{loaderData:m,matches:p}=XM(),v=fe.useMemo(()=>av(s,e,p,c,r,"data"),[s,e,p,c,r]),g=fe.useMemo(()=>av(s,e,p,c,r,"assets"),[s,e,p,c,r]),x=fe.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let A=new Set,S=!1;if(e.forEach(L=>{let U=c.routes[L.route.id];!U||!U.hasLoader||(!v.some(C=>C.route.id===L.route.id)&&L.route.id in m&&f[L.route.id]?.shouldRevalidate||U.hasClientLoader?S=!0:A.add(L.route.id))}),A.size===0)return[];let _=zM(s,h,l.unstable_trailingSlashAwareDataRequests,"data");return S&&A.size>0&&_.searchParams.set("_routes",e.filter(L=>A.has(L.route.id)).map(L=>L.route.id).join(",")),[_.pathname+_.search]},[h,l.unstable_trailingSlashAwareDataRequests,m,r,c,v,e,s,f]),M=fe.useMemo(()=>HM(g,c),[g,c]),b=qM(g);return fe.createElement(fe.Fragment,null,x.map(A=>fe.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...i})),M.map(A=>fe.createElement("link",{key:A,rel:"modulepreload",href:A,...i})),b.map(({key:A,link:S})=>fe.createElement("link",{key:A,nonce:i.nonce,...S})))}function ZM(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var KM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{KM&&(window.__reactRouterVersion="7.12.0")}catch{}function QM({basename:s,children:e,unstable_useTransitions:i,window:r}){let l=fe.useRef();l.current==null&&(l.current=US({window:r,v5Compat:!0}));let c=l.current,[f,h]=fe.useState({action:c.action,location:c.location}),m=fe.useCallback(p=>{i===!1?h(p):fe.startTransition(()=>h(p))},[i]);return fe.useLayoutEffect(()=>c.listen(m),[c,m]),fe.createElement(AM,{basename:s,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var C_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,w_=fe.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:h,target:m,to:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:x,...M},b){let{basename:A,unstable_useTransitions:S}=fe.useContext(di),_=typeof p=="string"&&C_.test(p),L=v_(p,A);p=L.to;let U=fM(p,{relative:l}),[C,G,H]=WM(r,M),P=tE(p,{replace:f,state:h,target:m,preventScrollReset:v,relative:l,viewTransition:g,unstable_defaultShouldRevalidate:x,unstable_useTransitions:S});function j(D){e&&e(D),D.defaultPrevented||P(D)}let w=fe.createElement("a",{...M,...H,href:L.absoluteURL||U,onClick:L.isExternal||c?e:j,ref:ZM(b,G),target:m,"data-discover":!_&&i==="render"?"true":void 0});return C&&!_?fe.createElement(fe.Fragment,null,w,fe.createElement(jM,{page:U})):w});w_.displayName="Link";var JM=fe.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},v){let g=Ko(f,{relative:p.relative}),x=Cr(),M=fe.useContext(Qc),{navigator:b,basename:A}=fe.useContext(di),S=M!=null&&sE(g)&&h===!0,_=b.encodeLocation?b.encodeLocation(g).pathname:g.pathname,L=x.pathname,U=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(L=L.toLowerCase(),U=U?U.toLowerCase():null,_=_.toLowerCase()),U&&A&&(U=da(U,A)||U);const C=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let G=L===_||!l&&L.startsWith(_)&&L.charAt(C)==="/",H=U!=null&&(U===_||!l&&U.startsWith(_)&&U.charAt(_.length)==="/"),P={isActive:G,isPending:H,isTransitioning:S},j=G?e:void 0,w;typeof r=="function"?w=r(P):w=[r,G?"active":null,H?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let D=typeof c=="function"?c(P):c;return fe.createElement(w_,{...p,"aria-current":j,className:w,ref:v,style:D,to:f,viewTransition:h},typeof m=="function"?m(P):m)});JM.displayName="NavLink";var $M=fe.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:f=Bc,action:h,onSubmit:m,relative:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:x,...M},b)=>{let{unstable_useTransitions:A}=fe.useContext(di),S=aE(),_=rE(h,{relative:p}),L=f.toLowerCase()==="get"?"get":"post",U=typeof h=="string"&&C_.test(h),C=G=>{if(m&&m(G),G.defaultPrevented)return;G.preventDefault();let H=G.nativeEvent.submitter,P=H?.getAttribute("formmethod")||f,j=()=>S(H||G.currentTarget,{fetcherKey:e,method:P,navigate:i,replace:l,state:c,relative:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:x});A&&i!==!1?fe.startTransition(()=>j()):j()};return fe.createElement("form",{ref:b,method:L,action:_,onSubmit:r?m:C,...M,"data-discover":!U&&s==="render"?"true":void 0})});$M.displayName="Form";function eE(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function D_(s){let e=fe.useContext(zs);return Qt(e,eE(s)),e}function tE(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:h,unstable_useTransitions:m}={}){let p=jh(),v=Cr(),g=Ko(s,{relative:c});return fe.useCallback(x=>{if(LM(x,e)){x.preventDefault();let M=i!==void 0?i:Vo(v)===Vo(g),b=()=>p(s,{replace:M,state:r,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:h});m?fe.startTransition(()=>b()):b()}},[v,p,g,i,r,e,s,l,c,f,h,m])}var nE=0,iE=()=>`__${String(++nE)}__`;function aE(){let{router:s}=D_("useSubmit"),{basename:e}=fe.useContext(di),i=MM(),r=s.fetch,l=s.navigate;return fe.useCallback(async(c,f={})=>{let{action:h,method:m,encType:p,formData:v,body:g}=PM(c,e);if(f.navigate===!1){let x=f.fetcherKey||iE();await r(x,i,f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,e,i])}function rE(s,{relative:e}={}){let{basename:i}=fe.useContext(di),r=fe.useContext(ha);Qt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...Ko(s||".",{relative:e})},f=Cr();if(s==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(v=>v==="")){h.delete("index"),m.filter(g=>g).forEach(g=>h.append("index",g));let v=h.toString();c.search=v?`?${v}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:ua([i,c.pathname])),Vo(c)}function sE(s,{relative:e}={}){let i=fe.useContext(x_);Qt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=D_("useViewTransitionState"),l=Ko(s,{relative:e});if(!i.isTransitioning)return!1;let c=da(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=da(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Wc(l.pathname,f)!=null||Wc(l.pathname,c)!=null}const oE=()=>{const[s,e]=fe.useState(!1),[i,r]=fe.useState(!1);fe.useEffect(()=>{const c=()=>{e(window.scrollY>20)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const l=()=>{r(!i)};return B.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${s?"glass-white shadow-lg shadow-sky-500/10":"bg-transparent"}`,children:[B.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-5 flex justify-between items-center",children:[B.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-3",children:[B.jsx("div",{className:"w-8 h-8 sm:w-10 sm:h-10 bg-blue-gradient rounded-2xl flex items-center justify-center animate-pulse-blue",children:B.jsx("div",{className:"w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center",children:B.jsx("div",{className:"w-2 h-2 bg-sky-500 rounded-full"})})}),B.jsxs("span",{className:"text-xl sm:text-2xl font-display font-bold text-dark",children:["Tena",B.jsx("span",{className:"text-blue-gradient",children:"AI"})]})]}),B.jsx("nav",{className:"hidden md:flex items-center space-x-10",children:["Features","Services","Impact","Download"].map((c,f)=>B.jsxs("a",{href:`#${c.toLowerCase()}`,className:`font-display font-medium text-dark/80 hover:text-sky-600 transition-all duration-300 relative group pb-1 ${f===0?"delay-100":f===1?"delay-200":f===2?"delay-300":"delay-400"}`,children:[c,B.jsx("div",{className:"absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-gradient transition-all duration-300 group-hover:w-full rounded-full"})]},c))}),B.jsx("button",{className:"hidden md:block btn-blue px-8 py-3 rounded-full text-sm font-display font-semibold shadow-lg hover:shadow-sky-500/25",children:"Get Started Free"}),B.jsx("div",{className:"md:hidden",children:B.jsxs("button",{onClick:l,className:"w-8 h-8 flex flex-col justify-center items-center space-y-1","aria-label":"Toggle mobile menu",children:[B.jsx("div",{className:`w-6 h-0.5 bg-dark transition-all duration-300 ${i?"transform rotate-45 translate-y-1.5":""}`}),B.jsx("div",{className:`w-6 h-0.5 bg-dark transition-all duration-300 ${i?"opacity-0":""}`}),B.jsx("div",{className:`w-6 h-0.5 bg-dark transition-all duration-300 ${i?"transform -rotate-45 -translate-y-1.5":""}`})]})})]}),i&&B.jsx("div",{className:"md:hidden bg-white border-t border-sky-100 shadow-lg",children:B.jsxs("nav",{className:"flex flex-col space-y-4 px-4 py-6",children:[["Features","Services","Impact","Download"].map(c=>B.jsx("a",{href:`#${c.toLowerCase()}`,className:"font-display font-medium text-dark/80 hover:text-sky-600 transition-all duration-300",onClick:()=>r(!1),children:c},c)),B.jsx("button",{className:"btn-blue w-full py-3 rounded-full text-sm font-display font-semibold",children:"Get Started Free"})]})})]})};const Qh="179",lE=0,rv=1,cE=2,U_=1,uE=2,oa=3,qa=0,Vn=1,la=2,Wa=0,Rs=1,sv=2,ov=3,lv=4,fE=5,Mr=100,dE=101,hE=102,pE=103,mE=104,gE=200,vE=201,_E=202,xE=203,nh=204,ih=205,yE=206,SE=207,ME=208,EE=209,bE=210,TE=211,AE=212,RE=213,CE=214,ah=0,rh=1,sh=2,Ds=3,oh=4,lh=5,ch=6,uh=7,Jh=0,wE=1,DE=2,ja=0,UE=1,LE=2,NE=3,OE=4,PE=5,zE=6,BE=7,L_=300,Us=301,Ls=302,fh=303,dh=304,$c=306,hh=1e3,br=1001,ph=1002,Mi=1003,IE=1004,hc=1005,Li=1006,xd=1007,Tr=1008,Pi=1009,N_=1010,O_=1011,ko=1012,$h=1013,Ar=1014,ca=1015,Qo=1016,ep=1017,tp=1018,Xo=1020,P_=35902,z_=1021,B_=1022,yi=1023,Wo=1026,jo=1027,I_=1028,np=1029,F_=1030,ip=1031,ap=1033,Fc=33776,Hc=33777,Gc=33778,Vc=33779,mh=35840,gh=35841,vh=35842,_h=35843,xh=36196,yh=37492,Sh=37496,Mh=37808,Eh=37809,bh=37810,Th=37811,Ah=37812,Rh=37813,Ch=37814,wh=37815,Dh=37816,Uh=37817,Lh=37818,Nh=37819,Oh=37820,Ph=37821,kc=36492,zh=36494,Bh=36495,H_=36283,Ih=36284,Fh=36285,Hh=36286,FE=3200,HE=3201,G_=0,GE=1,Xa="",ui="srgb",Ns="srgb-linear",jc="linear",Ht="srgb",fs=7680,cv=519,VE=512,kE=513,XE=514,V_=515,WE=516,jE=517,qE=518,YE=519,uv=35044,fv="300 es",Ni=2e3,qc=2001;class Bs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yd=Math.PI/180,Gh=180/Math.PI;function Jo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function Mt(s,e,i){return Math.max(e,Math.min(i,s))}function ZE(s,e){return(s%e+e)%e}function Sd(s,e,i){return(1-i)*s+i*e}function Po(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Gn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Dt{constructor(e=0,i=0){Dt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $o{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,h){let m=r[l+0],p=r[l+1],v=r[l+2],g=r[l+3];const x=c[f+0],M=c[f+1],b=c[f+2],A=c[f+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g;return}if(h===1){e[i+0]=x,e[i+1]=M,e[i+2]=b,e[i+3]=A;return}if(g!==A||m!==x||p!==M||v!==b){let S=1-h;const _=m*x+p*M+v*b+g*A,L=_>=0?1:-1,U=1-_*_;if(U>Number.EPSILON){const G=Math.sqrt(U),H=Math.atan2(G,_*L);S=Math.sin(S*H)/G,h=Math.sin(h*H)/G}const C=h*L;if(m=m*S+x*C,p=p*S+M*C,v=v*S+b*C,g=g*S+A*C,S===1-h){const G=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=G,p*=G,v*=G,g*=G}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,c,f){const h=r[l],m=r[l+1],p=r[l+2],v=r[l+3],g=c[f],x=c[f+1],M=c[f+2],b=c[f+3];return e[i]=h*b+v*g+m*M-p*x,e[i+1]=m*b+v*x+p*g-h*M,e[i+2]=p*b+v*M+h*x-m*g,e[i+3]=v*b-h*g-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(r/2),v=h(l/2),g=h(c/2),x=m(r/2),M=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=x*v*g+p*M*b,this._y=p*M*g-x*v*b,this._z=p*v*b+x*M*g,this._w=p*v*g-x*M*b;break;case"YXZ":this._x=x*v*g+p*M*b,this._y=p*M*g-x*v*b,this._z=p*v*b-x*M*g,this._w=p*v*g+x*M*b;break;case"ZXY":this._x=x*v*g-p*M*b,this._y=p*M*g+x*v*b,this._z=p*v*b+x*M*g,this._w=p*v*g-x*M*b;break;case"ZYX":this._x=x*v*g-p*M*b,this._y=p*M*g+x*v*b,this._z=p*v*b-x*M*g,this._w=p*v*g+x*M*b;break;case"YZX":this._x=x*v*g+p*M*b,this._y=p*M*g+x*v*b,this._z=p*v*b-x*M*g,this._w=p*v*g-x*M*b;break;case"XZY":this._x=x*v*g-p*M*b,this._y=p*M*g-x*v*b,this._z=p*v*b+x*M*g,this._w=p*v*g+x*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],v=i[6],g=i[10],x=r+h+g;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(r>h&&r>g){const M=2*Math.sqrt(1+r-h-g);this._w=(v-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(h>g){const M=2*Math.sqrt(1+h-r-g);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+g-r-h);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+f*h+l*p-c*m,this._y=l*v+f*m+c*h-r*p,this._z=c*v+f*p+r*m-l*h,this._w=f*v-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,f=this._w;let h=f*e._w+r*e._x+l*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-i;return this._w=M*f+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,h),g=Math.sin((1-i)*v)/p,x=Math.sin(i*v)/p;return this._w=f*g+this._w*x,this._x=r*g+this._x*x,this._y=l*g+this._y*x,this._z=c*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,i=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(dv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(dv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*r),v=2*(h*i-c*l),g=2*(c*r-f*i);return this.x=i+m*p+f*g-h*v,this.y=r+m*v+h*p-c*g,this.z=l+m*g+c*v-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-r*m,this.z=r*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Md.copy(this).projectOnVector(e),this.sub(Md)}reflect(e){return this.sub(Md.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Md=new $,dv=new $o;class ut{constructor(e,i,r,l,c,f,h,m,p){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p)}set(e,i,r,l,c,f,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],v=r[4],g=r[7],x=r[2],M=r[5],b=r[8],A=l[0],S=l[3],_=l[6],L=l[1],U=l[4],C=l[7],G=l[2],H=l[5],P=l[8];return c[0]=f*A+h*L+m*G,c[3]=f*S+h*U+m*H,c[6]=f*_+h*C+m*P,c[1]=p*A+v*L+g*G,c[4]=p*S+v*U+g*H,c[7]=p*_+v*C+g*P,c[2]=x*A+M*L+b*G,c[5]=x*S+M*U+b*H,c[8]=x*_+M*C+b*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*f*v-i*h*p-r*c*v+r*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8],g=v*f-h*p,x=h*m-v*c,M=p*c-f*m,b=i*g+r*x+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=g*A,e[1]=(l*p-v*r)*A,e[2]=(h*r-l*f)*A,e[3]=x*A,e[4]=(v*i-l*m)*A,e[5]=(l*c-h*i)*A,e[6]=M*A,e[7]=(r*m-p*i)*A,e[8]=(f*i-r*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Ed.makeScale(e,i)),this}rotate(e){return this.premultiply(Ed.makeRotation(-e)),this}translate(e,i){return this.premultiply(Ed.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ed=new ut;function k_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function qo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function KE(){const s=qo("canvas");return s.style.display="block",s}const hv={};function Cs(s){s in hv||(hv[s]=!0,console.warn(s))}function QE(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const pv=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mv=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function JE(){const s={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ht&&(l.r=fa(l.r),l.g=fa(l.g),l.b=fa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ht&&(l.r=ws(l.r),l.g=ws(l.g),l.b=ws(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Xa?jc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Cs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Cs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ns]:{primaries:e,whitePoint:r,transfer:jc,toXYZ:pv,fromXYZ:mv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:r,transfer:Ht,toXYZ:pv,fromXYZ:mv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),s}const wt=JE();function fa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ds;class $E{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ds===void 0&&(ds=qo("canvas")),ds.width=e.width,ds.height=e.height;const l=ds.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ds}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=qo("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=fa(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(fa(i[r]/255)*255):i[r]=fa(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eb=0;class rp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=Jo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(bd(l[f].image)):c.push(bd(l[f]))}else c=bd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function bd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?$E.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tb=0;const Td=new $;class Nn extends Bs{constructor(e=Nn.DEFAULT_IMAGE,i=Nn.DEFAULT_MAPPING,r=br,l=br,c=Li,f=Tr,h=yi,m=Pi,p=Nn.DEFAULT_ANISOTROPY,v=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=Jo(),this.name="",this.source=new rp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Td).x}get height(){return this.source.getSize(Td).y}get depth(){return this.source.getSize(Td).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==L_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hh:e.x=e.x-Math.floor(e.x);break;case br:e.x=e.x<0?0:1;break;case ph:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hh:e.y=e.y-Math.floor(e.y);break;case br:e.y=e.y<0?0:1;break;case ph:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=L_;Nn.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,i=0,r=0,l=1){Gt.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],v=m[4],g=m[8],x=m[1],M=m[5],b=m[9],A=m[2],S=m[6],_=m[10];if(Math.abs(v-x)<.01&&Math.abs(g-A)<.01&&Math.abs(b-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+A)<.1&&Math.abs(b+S)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,C=(M+1)/2,G=(_+1)/2,H=(v+x)/4,P=(g+A)/4,j=(b+S)/4;return U>C&&U>G?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=H/r,c=P/r):C>G?C<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),r=H/l,c=j/l):G<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),r=P/c,l=j/c),this.set(r,l,c,i),this}let L=Math.sqrt((S-b)*(S-b)+(g-A)*(g-A)+(x-v)*(x-v));return Math.abs(L)<.001&&(L=1),this.x=(S-b)/L,this.y=(g-A)/L,this.z=(x-v)/L,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this.w=Mt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this.w=Mt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nb extends Bs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Gt(0,0,e,i),this.scissorTest=!1,this.viewport=new Gt(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Nn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Li,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new rp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends nb{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class X_ extends Nn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ib extends Nn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class el{constructor(e=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(gi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(gi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=gi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,gi):gi.fromBufferAttribute(c,f),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),pc.copy(r.boundingBox)),pc.applyMatrix4(e.matrixWorld),this.union(pc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),mc.subVectors(this.max,zo),hs.subVectors(e.a,zo),ps.subVectors(e.b,zo),ms.subVectors(e.c,zo),Ia.subVectors(ps,hs),Fa.subVectors(ms,ps),pr.subVectors(hs,ms);let i=[0,-Ia.z,Ia.y,0,-Fa.z,Fa.y,0,-pr.z,pr.y,Ia.z,0,-Ia.x,Fa.z,0,-Fa.x,pr.z,0,-pr.x,-Ia.y,Ia.x,0,-Fa.y,Fa.x,0,-pr.y,pr.x,0];return!Ad(i,hs,ps,ms,mc)||(i=[1,0,0,0,1,0,0,0,1],!Ad(i,hs,ps,ms,mc))?!1:(gc.crossVectors(Ia,Fa),i=[gc.x,gc.y,gc.z],Ad(i,hs,ps,ms,mc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(na),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const na=[new $,new $,new $,new $,new $,new $,new $,new $],gi=new $,pc=new el,hs=new $,ps=new $,ms=new $,Ia=new $,Fa=new $,pr=new $,zo=new $,mc=new $,gc=new $,mr=new $;function Ad(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){mr.fromArray(s,c);const h=l.x*Math.abs(mr.x)+l.y*Math.abs(mr.y)+l.z*Math.abs(mr.z),m=e.dot(mr),p=i.dot(mr),v=r.dot(mr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const ab=new el,Bo=new $,Rd=new $;class eu{constructor(e=new $,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):ab.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Bo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(Rd)),this.expandByPoint(Bo.copy(e.center).sub(Rd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ia=new $,Cd=new $,vc=new $,Ha=new $,wd=new $,_c=new $,Dd=new $;class W_{constructor(e=new $,i=new $(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ia)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ia.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ia.copy(this.origin).addScaledVector(this.direction,i),ia.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Cd.copy(e).add(i).multiplyScalar(.5),vc.copy(i).sub(e).normalize(),Ha.copy(this.origin).sub(Cd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(vc),h=Ha.dot(this.direction),m=-Ha.dot(vc),p=Ha.lengthSq(),v=Math.abs(1-f*f);let g,x,M,b;if(v>0)if(g=f*m-h,x=f*h-m,b=c*v,g>=0)if(x>=-b)if(x<=b){const A=1/v;g*=A,x*=A,M=g*(g+f*x+2*h)+x*(f*g+x+2*m)+p}else x=c,g=Math.max(0,-(f*x+h)),M=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(f*x+h)),M=-g*g+x*(x+2*m)+p;else x<=-b?(g=Math.max(0,-(-f*c+h)),x=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+x*(x+2*m)+p):x<=b?(g=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(g=Math.max(0,-(f*c+h)),x=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+x*(x+2*m)+p);else x=f>0?-c:c,g=Math.max(0,-(f*x+h)),M=-g*g+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Cd).addScaledVector(vc,x),M}intersectSphere(e,i){ia.subVectors(e.center,this.origin);const r=ia.dot(this.direction),l=ia.dot(ia)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,h,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),v>=0?(c=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),g>=0?(h=(e.min.z-x.z)*g,m=(e.max.z-x.z)*g):(h=(e.max.z-x.z)*g,m=(e.min.z-x.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ia)!==null}intersectTriangle(e,i,r,l,c){wd.subVectors(i,e),_c.subVectors(r,e),Dd.crossVectors(wd,_c);let f=this.direction.dot(Dd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ha.subVectors(this.origin,e);const m=h*this.direction.dot(_c.crossVectors(Ha,_c));if(m<0)return null;const p=h*this.direction.dot(wd.cross(Ha));if(p<0||m+p>f)return null;const v=-h*Ha.dot(Dd);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,i,r,l,c,f,h,m,p,v,g,x,M,b,A,S){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p,v,g,x,M,b,A,S)}set(e,i,r,l,c,f,h,m,p,v,g,x,M,b,A,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=f,_[9]=h,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=x,_[3]=M,_[7]=b,_[11]=A,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/gs.setFromMatrixColumn(e,0).length(),c=1/gs.setFromMatrixColumn(e,1).length(),f=1/gs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const x=f*v,M=f*g,b=h*v,A=h*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=M+b*p,i[5]=x-A*p,i[9]=-h*m,i[2]=A-x*p,i[6]=b+M*p,i[10]=f*m}else if(e.order==="YXZ"){const x=m*v,M=m*g,b=p*v,A=p*g;i[0]=x+A*h,i[4]=b*h-M,i[8]=f*p,i[1]=f*g,i[5]=f*v,i[9]=-h,i[2]=M*h-b,i[6]=A+x*h,i[10]=f*m}else if(e.order==="ZXY"){const x=m*v,M=m*g,b=p*v,A=p*g;i[0]=x-A*h,i[4]=-f*g,i[8]=b+M*h,i[1]=M+b*h,i[5]=f*v,i[9]=A-x*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const x=f*v,M=f*g,b=h*v,A=h*g;i[0]=m*v,i[4]=b*p-M,i[8]=x*p+A,i[1]=m*g,i[5]=A*p+x,i[9]=M*p-b,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const x=f*m,M=f*p,b=h*m,A=h*p;i[0]=m*v,i[4]=A-x*g,i[8]=b*g+M,i[1]=g,i[5]=f*v,i[9]=-h*v,i[2]=-p*v,i[6]=M*g+b,i[10]=x-A*g}else if(e.order==="XZY"){const x=f*m,M=f*p,b=h*m,A=h*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=x*g+A,i[5]=f*v,i[9]=M*g-b,i[2]=b*g-M,i[6]=h*v,i[10]=A*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rb,e,sb)}lookAt(e,i,r){const l=this.elements;return Qn.subVectors(e,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Ga.crossVectors(r,Qn),Ga.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Ga.crossVectors(r,Qn)),Ga.normalize(),xc.crossVectors(Qn,Ga),l[0]=Ga.x,l[4]=xc.x,l[8]=Qn.x,l[1]=Ga.y,l[5]=xc.y,l[9]=Qn.y,l[2]=Ga.z,l[6]=xc.z,l[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],v=r[1],g=r[5],x=r[9],M=r[13],b=r[2],A=r[6],S=r[10],_=r[14],L=r[3],U=r[7],C=r[11],G=r[15],H=l[0],P=l[4],j=l[8],w=l[12],D=l[1],F=l[5],ue=l[9],oe=l[13],he=l[2],ge=l[6],z=l[10],K=l[14],Z=l[3],Se=l[7],Te=l[11],O=l[15];return c[0]=f*H+h*D+m*he+p*Z,c[4]=f*P+h*F+m*ge+p*Se,c[8]=f*j+h*ue+m*z+p*Te,c[12]=f*w+h*oe+m*K+p*O,c[1]=v*H+g*D+x*he+M*Z,c[5]=v*P+g*F+x*ge+M*Se,c[9]=v*j+g*ue+x*z+M*Te,c[13]=v*w+g*oe+x*K+M*O,c[2]=b*H+A*D+S*he+_*Z,c[6]=b*P+A*F+S*ge+_*Se,c[10]=b*j+A*ue+S*z+_*Te,c[14]=b*w+A*oe+S*K+_*O,c[3]=L*H+U*D+C*he+G*Z,c[7]=L*P+U*F+C*ge+G*Se,c[11]=L*j+U*ue+C*z+G*Te,c[15]=L*w+U*oe+C*K+G*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],v=e[2],g=e[6],x=e[10],M=e[14],b=e[3],A=e[7],S=e[11],_=e[15];return b*(+c*m*g-l*p*g-c*h*x+r*p*x+l*h*M-r*m*M)+A*(+i*m*M-i*p*x+c*f*x-l*f*M+l*p*v-c*m*v)+S*(+i*p*g-i*h*M-c*f*g+r*f*M+c*h*v-r*p*v)+_*(-l*h*v-i*m*g+i*h*x+l*f*g-r*f*x+r*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8],g=e[9],x=e[10],M=e[11],b=e[12],A=e[13],S=e[14],_=e[15],L=g*S*p-A*x*p+A*m*M-h*S*M-g*m*_+h*x*_,U=b*x*p-v*S*p-b*m*M+f*S*M+v*m*_-f*x*_,C=v*A*p-b*g*p+b*h*M-f*A*M-v*h*_+f*g*_,G=b*g*m-v*A*m-b*h*x+f*A*x+v*h*S-f*g*S,H=i*L+r*U+l*C+c*G;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/H;return e[0]=L*P,e[1]=(A*x*c-g*S*c-A*l*M+r*S*M+g*l*_-r*x*_)*P,e[2]=(h*S*c-A*m*c+A*l*p-r*S*p-h*l*_+r*m*_)*P,e[3]=(g*m*c-h*x*c-g*l*p+r*x*p+h*l*M-r*m*M)*P,e[4]=U*P,e[5]=(v*S*c-b*x*c+b*l*M-i*S*M-v*l*_+i*x*_)*P,e[6]=(b*m*c-f*S*c-b*l*p+i*S*p+f*l*_-i*m*_)*P,e[7]=(f*x*c-v*m*c+v*l*p-i*x*p-f*l*M+i*m*M)*P,e[8]=C*P,e[9]=(b*g*c-v*A*c-b*r*M+i*A*M+v*r*_-i*g*_)*P,e[10]=(f*A*c-b*h*c+b*r*p-i*A*p-f*r*_+i*h*_)*P,e[11]=(v*h*c-f*g*c-v*r*p+i*g*p+f*r*M-i*h*M)*P,e[12]=G*P,e[13]=(v*A*l-b*g*l+b*r*x-i*A*x-v*r*S+i*g*S)*P,e[14]=(b*h*l-f*A*l-b*r*m+i*A*m+f*r*S-i*h*S)*P,e[15]=(f*g*l-v*h*l+v*r*m-i*g*m-f*r*x+i*h*x)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,h=e.y,m=e.z,p=c*f,v=c*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+r,v*m-l*f,0,p*m-l*h,v*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,v=f+f,g=h+h,x=c*p,M=c*v,b=c*g,A=f*v,S=f*g,_=h*g,L=m*p,U=m*v,C=m*g,G=r.x,H=r.y,P=r.z;return l[0]=(1-(A+_))*G,l[1]=(M+C)*G,l[2]=(b-U)*G,l[3]=0,l[4]=(M-C)*H,l[5]=(1-(x+_))*H,l[6]=(S+L)*H,l[7]=0,l[8]=(b+U)*P,l[9]=(S-L)*P,l[10]=(1-(x+A))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=gs.set(l[0],l[1],l[2]).length();const f=gs.set(l[4],l[5],l[6]).length(),h=gs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],vi.copy(this);const p=1/c,v=1/f,g=1/h;return vi.elements[0]*=p,vi.elements[1]*=p,vi.elements[2]*=p,vi.elements[4]*=v,vi.elements[5]*=v,vi.elements[6]*=v,vi.elements[8]*=g,vi.elements[9]*=g,vi.elements[10]*=g,i.setFromRotationMatrix(vi),r.x=c,r.y=f,r.z=h,this}makePerspective(e,i,r,l,c,f,h=Ni,m=!1){const p=this.elements,v=2*c/(i-e),g=2*c/(r-l),x=(i+e)/(i-e),M=(r+l)/(r-l);let b,A;if(m)b=c/(f-c),A=f*c/(f-c);else if(h===Ni)b=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(h===qc)b=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,f,h=Ni,m=!1){const p=this.elements,v=2/(i-e),g=2/(r-l),x=-(i+e)/(i-e),M=-(r+l)/(r-l);let b,A;if(m)b=1/(f-c),A=f/(f-c);else if(h===Ni)b=-2/(f-c),A=-(f+c)/(f-c);else if(h===qc)b=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const gs=new $,vi=new Jt,rb=new $(0,0,0),sb=new $(1,1,1),Ga=new $,xc=new $,Qn=new $,gv=new Jt,vv=new $o;class zi{constructor(e=0,i=0,r=0,l=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],v=l[9],g=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return gv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return vv.setFromEuler(this),this.setFromQuaternion(vv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class j_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ob=0;const _v=new $,vs=new $o,aa=new Jt,yc=new $,Io=new $,lb=new $,cb=new $o,xv=new $(1,0,0),yv=new $(0,1,0),Sv=new $(0,0,1),Mv={type:"added"},ub={type:"removed"},_s={type:"childadded",child:null},Ud={type:"childremoved",child:null};class On extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=Jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new $,i=new zi,r=new $o,l=new $(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Jt},normalMatrix:{value:new ut}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new j_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return vs.setFromAxisAngle(e,i),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,i){return vs.setFromAxisAngle(e,i),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(xv,e)}rotateY(e){return this.rotateOnAxis(yv,e)}rotateZ(e){return this.rotateOnAxis(Sv,e)}translateOnAxis(e,i){return _v.copy(e).applyQuaternion(this.quaternion),this.position.add(_v.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(xv,e)}translateY(e){return this.translateOnAxis(yv,e)}translateZ(e){return this.translateOnAxis(Sv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(aa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?yc.copy(e):yc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?aa.lookAt(Io,yc,this.up):aa.lookAt(yc,Io,this.up),this.quaternion.setFromRotationMatrix(aa),l&&(aa.extractRotation(l.matrixWorld),vs.setFromRotationMatrix(aa),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mv),_s.child=e,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ub),Ud.child=e,this.dispatchEvent(Ud),Ud.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),aa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),aa.multiply(e.parent.matrixWorld)),e.applyMatrix4(aa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mv),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,lb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,cb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),v=f(e.images),g=f(e.shapes),x=f(e.skeletons),M=f(e.animations),b=f(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function f(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}On.DEFAULT_UP=new $(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new $,ra=new $,Ld=new $,sa=new $,xs=new $,ys=new $,Ev=new $,Nd=new $,Od=new $,Pd=new $,zd=new Gt,Bd=new Gt,Id=new Gt;class xi{constructor(e=new $,i=new $,r=new $){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),_i.subVectors(e,i),l.cross(_i);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){_i.subVectors(l,i),ra.subVectors(r,i),Ld.subVectors(e,i);const f=_i.dot(_i),h=_i.dot(ra),m=_i.dot(Ld),p=ra.dot(ra),v=ra.dot(Ld),g=f*p-h*h;if(g===0)return c.set(0,0,0),null;const x=1/g,M=(p*m-h*v)*x,b=(f*v-h*m)*x;return c.set(1-M-b,b,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,sa)===null?!1:sa.x>=0&&sa.y>=0&&sa.x+sa.y<=1}static getInterpolation(e,i,r,l,c,f,h,m){return this.getBarycoord(e,i,r,l,sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,sa.x),m.addScaledVector(f,sa.y),m.addScaledVector(h,sa.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return zd.setScalar(0),Bd.setScalar(0),Id.setScalar(0),zd.fromBufferAttribute(e,i),Bd.fromBufferAttribute(e,r),Id.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(zd,c.x),f.addScaledVector(Bd,c.y),f.addScaledVector(Id,c.z),f}static isFrontFacing(e,i,r,l){return _i.subVectors(r,i),ra.subVectors(e,i),_i.cross(ra).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),ra.subVectors(this.a,this.b),_i.cross(ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return xi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return xi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,h;xs.subVectors(l,r),ys.subVectors(c,r),Nd.subVectors(e,r);const m=xs.dot(Nd),p=ys.dot(Nd);if(m<=0&&p<=0)return i.copy(r);Od.subVectors(e,l);const v=xs.dot(Od),g=ys.dot(Od);if(v>=0&&g<=v)return i.copy(l);const x=m*g-v*p;if(x<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(r).addScaledVector(xs,f);Pd.subVectors(e,c);const M=xs.dot(Pd),b=ys.dot(Pd);if(b>=0&&M<=b)return i.copy(c);const A=M*p-m*b;if(A<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(r).addScaledVector(ys,h);const S=v*b-M*g;if(S<=0&&g-v>=0&&M-b>=0)return Ev.subVectors(c,l),h=(g-v)/(g-v+(M-b)),i.copy(l).addScaledVector(Ev,h);const _=1/(S+A+x);return f=A*_,h=x*_,i.copy(r).addScaledVector(xs,f).addScaledVector(ys,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const q_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Va={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Fd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class At{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=wt.workingColorSpace){return this.r=e,this.g=i,this.b=r,wt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=wt.workingColorSpace){if(e=ZE(e,1),i=Mt(i,0,1),r=Mt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Fd(f,c,e+1/3),this.g=Fd(f,c,e),this.b=Fd(f,c,e-1/3)}return wt.colorSpaceToWorking(this,l),this}setStyle(e,i=ui){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ui){const r=q_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return wt.workingToColorSpace(Cn.copy(this),e),Math.round(Mt(Cn.r*255,0,255))*65536+Math.round(Mt(Cn.g*255,0,255))*256+Math.round(Mt(Cn.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=wt.workingColorSpace){wt.workingToColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,c=Cn.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const v=(h+f)/2;if(h===f)m=0,p=0;else{const g=f-h;switch(p=v<=.5?g/(f+h):g/(2-f-h),f){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=wt.workingColorSpace){return wt.workingToColorSpace(Cn.copy(this),i),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=ui){wt.workingToColorSpace(Cn.copy(this),e);const i=Cn.r,r=Cn.g,l=Cn.b;return e!==ui?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Va),this.setHSL(Va.h+e,Va.s+i,Va.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Va),e.getHSL(Sc);const r=Sd(Va.h,Sc.h,i),l=Sd(Va.s,Sc.s,i),c=Sd(Va.l,Sc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new At;At.NAMES=q_;let fb=0;class Is extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=Jo(),this.name="",this.type="Material",this.blending=Rs,this.side=qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(r.blending=this.blending),this.side!==qa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==nh&&(r.blendSrc=this.blendSrc),this.blendDst!==ih&&(r.blendDst=this.blendDst),this.blendEquation!==Mr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Y_ extends Is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new $,Mc=new Dt;let db=0;class Ei{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:db++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=uv,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Mc.fromBufferAttribute(this,i),Mc.applyMatrix3(e),this.setXY(i,Mc.x,Mc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Po(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Gn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Po(i,this.array)),i}setX(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Po(i,this.array)),i}setY(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Po(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Po(i,this.array)),i}setW(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array),c=Gn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uv&&(e.usage=this.usage),e}}class Z_ extends Ei{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class K_ extends Ei{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Oi extends Ei{constructor(e,i,r){super(new Float32Array(e),i,r)}}let hb=0;const ci=new Jt,Hd=new On,Ss=new $,Jn=new el,Fo=new el,_n=new $;class Bi extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=Jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(k_(e)?K_:Z_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ut().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,i,r){return ci.makeTranslation(e,i,r),this.applyMatrix4(ci),this}scale(e,i,r){return ci.makeScale(e,i,r),this.applyMatrix4(ci),this}lookAt(e){return Hd.lookAt(e),Hd.updateMatrix(),this.applyMatrix4(Hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Oi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Jn.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Fo.setFromBufferAttribute(h),this.morphTargetsRelative?(_n.addVectors(Jn.min,Fo.min),Jn.expandByPoint(_n),_n.addVectors(Jn.max,Fo.max),Jn.expandByPoint(_n)):(Jn.expandByPoint(Fo.min),Jn.expandByPoint(Fo.max))}Jn.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)_n.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)_n.fromBufferAttribute(h,p),m&&(Ss.fromBufferAttribute(e,p),_n.add(Ss)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let j=0;j<r.count;j++)h[j]=new $,m[j]=new $;const p=new $,v=new $,g=new $,x=new Dt,M=new Dt,b=new Dt,A=new $,S=new $;function _(j,w,D){p.fromBufferAttribute(r,j),v.fromBufferAttribute(r,w),g.fromBufferAttribute(r,D),x.fromBufferAttribute(c,j),M.fromBufferAttribute(c,w),b.fromBufferAttribute(c,D),v.sub(p),g.sub(p),M.sub(x),b.sub(x);const F=1/(M.x*b.y-b.x*M.y);isFinite(F)&&(A.copy(v).multiplyScalar(b.y).addScaledVector(g,-M.y).multiplyScalar(F),S.copy(g).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(F),h[j].add(A),h[w].add(A),h[D].add(A),m[j].add(S),m[w].add(S),m[D].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let j=0,w=L.length;j<w;++j){const D=L[j],F=D.start,ue=D.count;for(let oe=F,he=F+ue;oe<he;oe+=3)_(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const U=new $,C=new $,G=new $,H=new $;function P(j){G.fromBufferAttribute(l,j),H.copy(G);const w=h[j];U.copy(w),U.sub(G.multiplyScalar(G.dot(w))).normalize(),C.crossVectors(H,w);const F=C.dot(m[j])<0?-1:1;f.setXYZW(j,U.x,U.y,U.z,F)}for(let j=0,w=L.length;j<w;++j){const D=L[j],F=D.start,ue=D.count;for(let oe=F,he=F+ue;oe<he;oe+=3)P(e.getX(oe+0)),P(e.getX(oe+1)),P(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ei(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new $,c=new $,f=new $,h=new $,m=new $,p=new $,v=new $,g=new $;if(e)for(let x=0,M=e.count;x<M;x+=3){const b=e.getX(x+0),A=e.getX(x+1),S=e.getX(x+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,S),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),h.fromBufferAttribute(r,b),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,S),h.add(v),m.add(v),p.add(v),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,g=h.normalized,x=new p.constructor(m.length*v);let M=0,b=0;for(let A=0,S=m.length;A<S;A++){h.isInterleavedBufferAttribute?M=m[A]*h.data.stride+h.offset:M=m[A]*v;for(let _=0;_<v;_++)x[b++]=p[M++]}return new Ei(x,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Bi,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let v=0,g=p.length;v<g;v++){const x=p[v],M=e(x,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,x=p.length;g<x;g++){const M=p[g];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],g=c[p];for(let x=0,M=g.length;x<M;x++)v.push(g[x].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,v=f.length;p<v;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bv=new Jt,gr=new W_,Ec=new eu,Tv=new $,bc=new $,Tc=new $,Ac=new $,Gd=new $,Rc=new $,Av=new $,Cc=new $;class Si extends On{constructor(e=new Bi,i=new Y_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Rc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=h[m],g=c[m];v!==0&&(Gd.fromBufferAttribute(g,e),f?Rc.addScaledVector(Gd,v):Rc.addScaledVector(Gd.sub(i),v))}i.add(Rc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ec.copy(r.boundingSphere),Ec.applyMatrix4(c),gr.copy(e.ray).recast(e.near),!(Ec.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Ec,Tv)===null||gr.origin.distanceToSquared(Tv)>(e.far-e.near)**2))&&(bv.copy(c).invert(),gr.copy(e.ray).applyMatrix4(bv),!(r.boundingBox!==null&&gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,gr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,x=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,A=x.length;b<A;b++){const S=x[b],_=f[S.materialIndex],L=Math.max(S.start,M.start),U=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let C=L,G=U;C<G;C+=3){const H=h.getX(C),P=h.getX(C+1),j=h.getX(C+2);l=wc(this,_,e,r,p,v,g,H,P,j),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),A=Math.min(h.count,M.start+M.count);for(let S=b,_=A;S<_;S+=3){const L=h.getX(S),U=h.getX(S+1),C=h.getX(S+2);l=wc(this,f,e,r,p,v,g,L,U,C),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,A=x.length;b<A;b++){const S=x[b],_=f[S.materialIndex],L=Math.max(S.start,M.start),U=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let C=L,G=U;C<G;C+=3){const H=C,P=C+1,j=C+2;l=wc(this,_,e,r,p,v,g,H,P,j),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let S=b,_=A;S<_;S+=3){const L=S,U=S+1,C=S+2;l=wc(this,f,e,r,p,v,g,L,U,C),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function pb(s,e,i,r,l,c,f,h){let m;if(e.side===Vn?m=r.intersectTriangle(f,c,l,!0,h):m=r.intersectTriangle(l,c,f,e.side===qa,h),m===null)return null;Cc.copy(h),Cc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Cc);return p<i.near||p>i.far?null:{distance:p,point:Cc.clone(),object:s}}function wc(s,e,i,r,l,c,f,h,m,p){s.getVertexPosition(h,bc),s.getVertexPosition(m,Tc),s.getVertexPosition(p,Ac);const v=pb(s,e,i,r,bc,Tc,Ac,Av);if(v){const g=new $;xi.getBarycoord(Av,bc,Tc,Ac,g),l&&(v.uv=xi.getInterpolatedAttribute(l,h,m,p,g,new Dt)),c&&(v.uv1=xi.getInterpolatedAttribute(c,h,m,p,g,new Dt)),f&&(v.normal=xi.getInterpolatedAttribute(f,h,m,p,g,new $),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new $,materialIndex:0};xi.getNormal(bc,Tc,Ac,x.normal),v.face=x,v.barycoord=g}return v}class tl extends Bi{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],v=[],g=[];let x=0,M=0;b("z","y","x",-1,-1,r,i,e,f,c,0),b("z","y","x",1,-1,r,i,-e,f,c,1),b("x","z","y",1,1,e,r,i,l,f,2),b("x","z","y",1,-1,e,r,-i,l,f,3),b("x","y","z",1,-1,e,i,r,l,c,4),b("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Oi(p,3)),this.setAttribute("normal",new Oi(v,3)),this.setAttribute("uv",new Oi(g,2));function b(A,S,_,L,U,C,G,H,P,j,w){const D=C/P,F=G/j,ue=C/2,oe=G/2,he=H/2,ge=P+1,z=j+1;let K=0,Z=0;const Se=new $;for(let Te=0;Te<z;Te++){const O=Te*F-oe;for(let ie=0;ie<ge;ie++){const be=ie*D-ue;Se[A]=be*L,Se[S]=O*U,Se[_]=he,p.push(Se.x,Se.y,Se.z),Se[A]=0,Se[S]=0,Se[_]=H>0?1:-1,v.push(Se.x,Se.y,Se.z),g.push(ie/P),g.push(1-Te/j),K+=1}}for(let Te=0;Te<j;Te++)for(let O=0;O<P;O++){const ie=x+O+ge*Te,be=x+O+ge*(Te+1),Ce=x+(O+1)+ge*(Te+1),Q=x+(O+1)+ge*Te;m.push(ie,be,Q),m.push(be,Ce,Q),Z+=6}h.addGroup(M,Z,w),M+=Z,x+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Ln(s){const e={};for(let i=0;i<s.length;i++){const r=Os(s[i]);for(const l in r)e[l]=r[l]}return e}function mb(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function Q_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const gb={clone:Os,merge:Ln};var vb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_b=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ya extends Is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vb,this.fragmentShader=_b,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=mb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class J_ extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ka=new $,Rv=new Dt,Cv=new Dt;class $n extends J_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Gh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gh*2*Math.atan(Math.tan(yd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ka.x,ka.y).multiplyScalar(-e/ka.z),ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ka.x,ka.y).multiplyScalar(-e/ka.z)}getViewSize(e,i){return this.getViewBounds(e,Rv,Cv),i.subVectors(Cv,Rv)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(yd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ms=-90,Es=1;class xb extends On{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new $n(Ms,Es,e,i);l.layers=this.layers,this.add(l);const c=new $n(Ms,Es,e,i);c.layers=this.layers,this.add(c);const f=new $n(Ms,Es,e,i);f.layers=this.layers,this.add(f);const h=new $n(Ms,Es,e,i);h.layers=this.layers,this.add(h);const m=new $n(Ms,Es,e,i);m.layers=this.layers,this.add(m);const p=new $n(Ms,Es,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===Ni)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===qc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,v]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(g,x,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class $_ extends Nn{constructor(e=[],i=Us,r,l,c,f,h,m,p,v){super(e,i,r,l,c,f,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yb extends Rr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new $_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new tl(5,5,5),c=new Ya({name:"CubemapFromEquirect",uniforms:Os(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:Wa});c.uniforms.tEquirect.value=i;const f=new Si(l,c),h=i.minFilter;return i.minFilter===Tr&&(i.minFilter=Li),new xb(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}class Dc extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sb={type:"move"};class Vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const A of e.hand.values()){const S=i.getJointPose(A,r),_=this._getHandJoint(p,A);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=v.position.distanceTo(g.position),M=.02,b=.005;p.inputState.pinching&&x>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Sb)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Dc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Mb extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const kd=new $,Eb=new $,bb=new ut;class yr{constructor(e=new $(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=kd.subVectors(r,i).cross(Eb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(kd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||bb.getNormalMatrix(e),l=this.coplanarPoint(kd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new eu,Tb=new Dt(.5,.5),Uc=new $;class sp{constructor(e=new yr,i=new yr,r=new yr,l=new yr,c=new yr,f=new yr){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ni,r=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],v=c[4],g=c[5],x=c[6],M=c[7],b=c[8],A=c[9],S=c[10],_=c[11],L=c[12],U=c[13],C=c[14],G=c[15];if(l[0].setComponents(p-f,M-v,_-b,G-L).normalize(),l[1].setComponents(p+f,M+v,_+b,G+L).normalize(),l[2].setComponents(p+h,M+g,_+A,G+U).normalize(),l[3].setComponents(p-h,M-g,_-A,G-U).normalize(),r)l[4].setComponents(m,x,S,C).normalize(),l[5].setComponents(p-m,M-x,_-S,G-C).normalize();else if(l[4].setComponents(p-m,M-x,_-S,G-C).normalize(),i===Ni)l[5].setComponents(p+m,M+x,_+S,G+C).normalize();else if(i===qc)l[5].setComponents(m,x,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){vr.center.set(0,0,0);const i=Tb.distanceTo(e.center);return vr.radius=.7071067811865476+i,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Uc.x=l.normal.x>0?e.max.x:e.min.x,Uc.y=l.normal.y>0?e.max.y:e.min.y,Uc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ex extends Is{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wv=new Jt,Vh=new W_,Lc=new eu,Nc=new $;class Ab extends On{constructor(e=new Bi,i=new ex){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Lc.copy(r.boundingSphere),Lc.applyMatrix4(l),Lc.radius+=c,e.ray.intersectsSphere(Lc)===!1)return;wv.copy(l).invert(),Vh.copy(e.ray).applyMatrix4(wv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,g=r.attributes.position;if(p!==null){const x=Math.max(0,f.start),M=Math.min(p.count,f.start+f.count);for(let b=x,A=M;b<A;b++){const S=p.getX(b);Nc.fromBufferAttribute(g,S),Dv(Nc,S,m,l,e,i,this)}}else{const x=Math.max(0,f.start),M=Math.min(g.count,f.start+f.count);for(let b=x,A=M;b<A;b++)Nc.fromBufferAttribute(g,b),Dv(Nc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Dv(s,e,i,r,l,c,f){const h=Vh.distanceSqToPoint(s);if(h<i){const m=new $;Vh.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class tx extends Nn{constructor(e,i,r=Ar,l,c,f,h=Mi,m=Mi,p,v=Wo,g=1){if(v!==Wo&&v!==jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:g};super(x,l,c,f,h,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class tu extends Bi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,v=m+1,g=e/h,x=i/m,M=[],b=[],A=[],S=[];for(let _=0;_<v;_++){const L=_*x-f;for(let U=0;U<p;U++){const C=U*g-c;b.push(C,-L,0),A.push(0,0,1),S.push(U/h),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let L=0;L<h;L++){const U=L+p*_,C=L+p*(_+1),G=L+1+p*(_+1),H=L+1+p*_;M.push(U,C,H),M.push(C,G,H)}this.setIndex(M),this.setAttribute("position",new Oi(b,3)),this.setAttribute("normal",new Oi(A,3)),this.setAttribute("uv",new Oi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yc extends Bi{constructor(e=1,i=32,r=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(f+h,Math.PI);let p=0;const v=[],g=new $,x=new $,M=[],b=[],A=[],S=[];for(let _=0;_<=r;_++){const L=[],U=_/r;let C=0;_===0&&f===0?C=.5/i:_===r&&m===Math.PI&&(C=-.5/i);for(let G=0;G<=i;G++){const H=G/i;g.x=-e*Math.cos(l+H*c)*Math.sin(f+U*h),g.y=e*Math.cos(f+U*h),g.z=e*Math.sin(l+H*c)*Math.sin(f+U*h),b.push(g.x,g.y,g.z),x.copy(g).normalize(),A.push(x.x,x.y,x.z),S.push(H+C,1-U),L.push(p++)}v.push(L)}for(let _=0;_<r;_++)for(let L=0;L<i;L++){const U=v[_][L+1],C=v[_][L],G=v[_+1][L],H=v[_+1][L+1];(_!==0||f>0)&&M.push(U,C,H),(_!==r-1||m<Math.PI)&&M.push(C,G,H)}this.setIndex(M),this.setAttribute("position",new Oi(b,3)),this.setAttribute("normal",new Oi(A,3)),this.setAttribute("uv",new Oi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Uv extends Is{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new At(16777215),this.specular=new At(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=G_,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rb extends Is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cb extends Is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xd={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class wb{constructor(e,i,r){const l=this;let c=!1,f=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this.abortController=new AbortController,this.itemStart=function(v){h++,c===!1&&l.onStart!==void 0&&l.onStart(v,f,h),c=!0},this.itemEnd=function(v){f++,l.onProgress!==void 0&&l.onProgress(v,f,h),f===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(v){l.onError!==void 0&&l.onError(v)},this.resolveURL=function(v){return m?m(v):v},this.setURLModifier=function(v){return m=v,this},this.addHandler=function(v,g){return p.push(v,g),this},this.removeHandler=function(v){const g=p.indexOf(v);return g!==-1&&p.splice(g,2),this},this.getHandler=function(v){for(let g=0,x=p.length;g<x;g+=2){const M=p[g],b=p[g+1];if(M.global&&(M.lastIndex=0),M.test(v))return b}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Db=new wb;class op{constructor(e){this.manager=e!==void 0?e:Db,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,c){r.load(e,l,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}op.DEFAULT_MATERIAL_NAME="__DEFAULT";const bs=new WeakMap;class Ub extends op{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,f=Xd.get(`image:${e}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(e),setTimeout(function(){i&&i(f),c.manager.itemEnd(e)},0);else{let g=bs.get(f);g===void 0&&(g=[],bs.set(f,g)),g.push({onLoad:i,onError:l})}return f}const h=qo("img");function m(){v(),i&&i(this);const g=bs.get(this)||[];for(let x=0;x<g.length;x++){const M=g[x];M.onLoad&&M.onLoad(this)}bs.delete(this),c.manager.itemEnd(e)}function p(g){v(),l&&l(g),Xd.remove(`image:${e}`);const x=bs.get(this)||[];for(let M=0;M<x.length;M++){const b=x[M];b.onError&&b.onError(g)}bs.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function v(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Xd.add(`image:${e}`,h),c.manager.itemStart(e),h.src=e,h}}class Lb extends op{constructor(e){super(e)}load(e,i,r,l){const c=new Nn,f=new Ub(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(e,function(h){c.image=h,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class nx extends On{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Wd=new Jt,Lv=new $,Nv=new $;class Nb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sp,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;Lv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Lv),Nv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Nv),i.updateMatrixWorld(),Wd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Wd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ov=new Jt,Ho=new $,jd=new $;class Ob extends Nb{constructor(){super(new $n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Dt(4,2),this._viewportCount=6,this._viewports=[new Gt(2,1,1,1),new Gt(0,1,1,1),new Gt(3,1,1,1),new Gt(1,1,1,1),new Gt(3,0,1,1),new Gt(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,c=e.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Ho.setFromMatrixPosition(e.matrixWorld),r.position.copy(Ho),jd.copy(r.position),jd.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(jd),r.updateMatrixWorld(),l.makeTranslation(-Ho.x,-Ho.y,-Ho.z),Ov.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ov,r.coordinateSystem,r.reversedDepth)}}class Pv extends nx{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new Ob}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Pb extends J_{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class zb extends nx{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bb extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function zv(s,e,i,r){const l=Ib(r);switch(i){case z_:return s*e;case I_:return s*e/l.components*l.byteLength;case np:return s*e/l.components*l.byteLength;case F_:return s*e*2/l.components*l.byteLength;case ip:return s*e*2/l.components*l.byteLength;case B_:return s*e*3/l.components*l.byteLength;case yi:return s*e*4/l.components*l.byteLength;case ap:return s*e*4/l.components*l.byteLength;case Fc:case Hc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Gc:case Vc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gh:case _h:return Math.max(s,16)*Math.max(e,8)/4;case mh:case vh:return Math.max(s,8)*Math.max(e,8)/2;case xh:case yh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Sh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case bh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Th:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case wh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Dh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Nh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Oh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ph:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case kc:case zh:case Bh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case H_:case Ih:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Fh:case Hh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ib(s){switch(s){case Pi:case N_:return{byteLength:1,components:1};case ko:case O_:case Qo:return{byteLength:2,components:1};case ep:case tp:return{byteLength:2,components:4};case Ar:case $h:case ca:return{byteLength:4,components:1};case P_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qh);function ix(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function Fb(s){const e=new WeakMap;function i(h,m){const p=h.array,v=h.usage,g=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,v),h.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const v=m.array,g=m.updateRanges;if(s.bindBuffer(p,h),g.length===0)s.bufferSubData(p,0,v);else{g.sort((M,b)=>M.start-b.start);let x=0;for(let M=1;M<g.length;M++){const b=g[x],A=g[M];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++x,g[x]=A)}g.length=x+1;for(let M=0,b=g.length;M<b;M++){const A=g[M];s.bufferSubData(p,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var Hb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$b=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,e1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,s1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,o1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,l1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,c1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,u1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,f1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,d1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g1="gl_FragColor = linearToOutputTexel( gl_FragColor );",v1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,x1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,y1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,S1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,E1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,C1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,L1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,N1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,z1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,I1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,F1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,H1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,G1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,j1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Z1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,aT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_T=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ST=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,MT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ET=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,TT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,NT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,PT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,IT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,YT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ZT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$T=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,eA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_A=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:Hb,alphahash_pars_fragment:Gb,alphamap_fragment:Vb,alphamap_pars_fragment:kb,alphatest_fragment:Xb,alphatest_pars_fragment:Wb,aomap_fragment:jb,aomap_pars_fragment:qb,batching_pars_vertex:Yb,batching_vertex:Zb,begin_vertex:Kb,beginnormal_vertex:Qb,bsdfs:Jb,iridescence_fragment:$b,bumpmap_pars_fragment:e1,clipping_planes_fragment:t1,clipping_planes_pars_fragment:n1,clipping_planes_pars_vertex:i1,clipping_planes_vertex:a1,color_fragment:r1,color_pars_fragment:s1,color_pars_vertex:o1,color_vertex:l1,common:c1,cube_uv_reflection_fragment:u1,defaultnormal_vertex:f1,displacementmap_pars_vertex:d1,displacementmap_vertex:h1,emissivemap_fragment:p1,emissivemap_pars_fragment:m1,colorspace_fragment:g1,colorspace_pars_fragment:v1,envmap_fragment:_1,envmap_common_pars_fragment:x1,envmap_pars_fragment:y1,envmap_pars_vertex:S1,envmap_physical_pars_fragment:L1,envmap_vertex:M1,fog_vertex:E1,fog_pars_vertex:b1,fog_fragment:T1,fog_pars_fragment:A1,gradientmap_pars_fragment:R1,lightmap_pars_fragment:C1,lights_lambert_fragment:w1,lights_lambert_pars_fragment:D1,lights_pars_begin:U1,lights_toon_fragment:N1,lights_toon_pars_fragment:O1,lights_phong_fragment:P1,lights_phong_pars_fragment:z1,lights_physical_fragment:B1,lights_physical_pars_fragment:I1,lights_fragment_begin:F1,lights_fragment_maps:H1,lights_fragment_end:G1,logdepthbuf_fragment:V1,logdepthbuf_pars_fragment:k1,logdepthbuf_pars_vertex:X1,logdepthbuf_vertex:W1,map_fragment:j1,map_pars_fragment:q1,map_particle_fragment:Y1,map_particle_pars_fragment:Z1,metalnessmap_fragment:K1,metalnessmap_pars_fragment:Q1,morphinstance_vertex:J1,morphcolor_vertex:$1,morphnormal_vertex:eT,morphtarget_pars_vertex:tT,morphtarget_vertex:nT,normal_fragment_begin:iT,normal_fragment_maps:aT,normal_pars_fragment:rT,normal_pars_vertex:sT,normal_vertex:oT,normalmap_pars_fragment:lT,clearcoat_normal_fragment_begin:cT,clearcoat_normal_fragment_maps:uT,clearcoat_pars_fragment:fT,iridescence_pars_fragment:dT,opaque_fragment:hT,packing:pT,premultiplied_alpha_fragment:mT,project_vertex:gT,dithering_fragment:vT,dithering_pars_fragment:_T,roughnessmap_fragment:xT,roughnessmap_pars_fragment:yT,shadowmap_pars_fragment:ST,shadowmap_pars_vertex:MT,shadowmap_vertex:ET,shadowmask_pars_fragment:bT,skinbase_vertex:TT,skinning_pars_vertex:AT,skinning_vertex:RT,skinnormal_vertex:CT,specularmap_fragment:wT,specularmap_pars_fragment:DT,tonemapping_fragment:UT,tonemapping_pars_fragment:LT,transmission_fragment:NT,transmission_pars_fragment:OT,uv_pars_fragment:PT,uv_pars_vertex:zT,uv_vertex:BT,worldpos_vertex:IT,background_vert:FT,background_frag:HT,backgroundCube_vert:GT,backgroundCube_frag:VT,cube_vert:kT,cube_frag:XT,depth_vert:WT,depth_frag:jT,distanceRGBA_vert:qT,distanceRGBA_frag:YT,equirect_vert:ZT,equirect_frag:KT,linedashed_vert:QT,linedashed_frag:JT,meshbasic_vert:$T,meshbasic_frag:eA,meshlambert_vert:tA,meshlambert_frag:nA,meshmatcap_vert:iA,meshmatcap_frag:aA,meshnormal_vert:rA,meshnormal_frag:sA,meshphong_vert:oA,meshphong_frag:lA,meshphysical_vert:cA,meshphysical_frag:uA,meshtoon_vert:fA,meshtoon_frag:dA,points_vert:hA,points_frag:pA,shadow_vert:mA,shadow_frag:gA,sprite_vert:vA,sprite_frag:_A},Oe={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Ui={basic:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new At(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Ln([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Ln([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new At(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Ln([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Ln([Oe.points,Oe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Ln([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Ln([Oe.common,Oe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Ln([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Ln([Oe.sprite,Oe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Ln([Oe.common,Oe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Ln([Oe.lights,Oe.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ui.physical={uniforms:Ln([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Oc={r:0,b:0,g:0},_r=new zi,xA=new Jt;function yA(s,e,i,r,l,c,f){const h=new At(0);let m=c===!0?0:1,p,v,g=null,x=0,M=null;function b(U){let C=U.isScene===!0?U.background:null;return C&&C.isTexture&&(C=(U.backgroundBlurriness>0?i:e).get(C)),C}function A(U){let C=!1;const G=b(U);G===null?_(h,m):G&&G.isColor&&(_(G,1),C=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(U,C){const G=b(C);G&&(G.isCubeTexture||G.mapping===$c)?(v===void 0&&(v=new Si(new tl(1,1,1),new Ya({name:"BackgroundCubeMaterial",uniforms:Os(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(H,P,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),_r.copy(C.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),v.material.uniforms.envMap.value=G,v.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(xA.makeRotationFromEuler(_r)),v.material.toneMapped=wt.getTransfer(G.colorSpace)!==Ht,(g!==G||x!==G.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,g=G,x=G.version,M=s.toneMapping),v.layers.enableAll(),U.unshift(v,v.geometry,v.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new Si(new tu(2,2),new Ya({name:"BackgroundMaterial",uniforms:Os(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=wt.getTransfer(G.colorSpace)!==Ht,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(g!==G||x!==G.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,g=G,x=G.version,M=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,C){U.getRGB(Oc,Q_(s)),r.buffers.color.setClear(Oc.r,Oc.g,Oc.b,C,f)}function L(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,C=1){h.set(U),m=C,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(h,m)},render:A,addToRenderList:S,dispose:L}}function SA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,f=!1;function h(D,F,ue,oe,he){let ge=!1;const z=g(oe,ue,F);c!==z&&(c=z,p(c.object)),ge=M(D,oe,ue,he),ge&&b(D,oe,ue,he),he!==null&&e.update(he,s.ELEMENT_ARRAY_BUFFER),(ge||f)&&(f=!1,C(D,F,ue,oe),he!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function m(){return s.createVertexArray()}function p(D){return s.bindVertexArray(D)}function v(D){return s.deleteVertexArray(D)}function g(D,F,ue){const oe=ue.wireframe===!0;let he=r[D.id];he===void 0&&(he={},r[D.id]=he);let ge=he[F.id];ge===void 0&&(ge={},he[F.id]=ge);let z=ge[oe];return z===void 0&&(z=x(m()),ge[oe]=z),z}function x(D){const F=[],ue=[],oe=[];for(let he=0;he<i;he++)F[he]=0,ue[he]=0,oe[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ue,attributeDivisors:oe,object:D,attributes:{},index:null}}function M(D,F,ue,oe){const he=c.attributes,ge=F.attributes;let z=0;const K=ue.getAttributes();for(const Z in K)if(K[Z].location>=0){const Te=he[Z];let O=ge[Z];if(O===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(O=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(O=D.instanceColor)),Te===void 0||Te.attribute!==O||O&&Te.data!==O.data)return!0;z++}return c.attributesNum!==z||c.index!==oe}function b(D,F,ue,oe){const he={},ge=F.attributes;let z=0;const K=ue.getAttributes();for(const Z in K)if(K[Z].location>=0){let Te=ge[Z];Te===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(Te=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(Te=D.instanceColor));const O={};O.attribute=Te,Te&&Te.data&&(O.data=Te.data),he[Z]=O,z++}c.attributes=he,c.attributesNum=z,c.index=oe}function A(){const D=c.newAttributes;for(let F=0,ue=D.length;F<ue;F++)D[F]=0}function S(D){_(D,0)}function _(D,F){const ue=c.newAttributes,oe=c.enabledAttributes,he=c.attributeDivisors;ue[D]=1,oe[D]===0&&(s.enableVertexAttribArray(D),oe[D]=1),he[D]!==F&&(s.vertexAttribDivisor(D,F),he[D]=F)}function L(){const D=c.newAttributes,F=c.enabledAttributes;for(let ue=0,oe=F.length;ue<oe;ue++)F[ue]!==D[ue]&&(s.disableVertexAttribArray(ue),F[ue]=0)}function U(D,F,ue,oe,he,ge,z){z===!0?s.vertexAttribIPointer(D,F,ue,he,ge):s.vertexAttribPointer(D,F,ue,oe,he,ge)}function C(D,F,ue,oe){A();const he=oe.attributes,ge=ue.getAttributes(),z=F.defaultAttributeValues;for(const K in ge){const Z=ge[K];if(Z.location>=0){let Se=he[K];if(Se===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor)),Se!==void 0){const Te=Se.normalized,O=Se.itemSize,ie=e.get(Se);if(ie===void 0)continue;const be=ie.buffer,Ce=ie.type,Q=ie.bytesPerElement,xe=Ce===s.INT||Ce===s.UNSIGNED_INT||Se.gpuType===$h;if(Se.isInterleavedBufferAttribute){const _e=Se.data,Ge=_e.stride,ze=Se.offset;if(_e.isInstancedInterleavedBuffer){for(let nt=0;nt<Z.locationSize;nt++)_(Z.location+nt,_e.meshPerAttribute);D.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let nt=0;nt<Z.locationSize;nt++)S(Z.location+nt);s.bindBuffer(s.ARRAY_BUFFER,be);for(let nt=0;nt<Z.locationSize;nt++)U(Z.location+nt,O/Z.locationSize,Ce,Te,Ge*Q,(ze+O/Z.locationSize*nt)*Q,xe)}else{if(Se.isInstancedBufferAttribute){for(let _e=0;_e<Z.locationSize;_e++)_(Z.location+_e,Se.meshPerAttribute);D.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let _e=0;_e<Z.locationSize;_e++)S(Z.location+_e);s.bindBuffer(s.ARRAY_BUFFER,be);for(let _e=0;_e<Z.locationSize;_e++)U(Z.location+_e,O/Z.locationSize,Ce,Te,O*Q,O/Z.locationSize*_e*Q,xe)}}else if(z!==void 0){const Te=z[K];if(Te!==void 0)switch(Te.length){case 2:s.vertexAttrib2fv(Z.location,Te);break;case 3:s.vertexAttrib3fv(Z.location,Te);break;case 4:s.vertexAttrib4fv(Z.location,Te);break;default:s.vertexAttrib1fv(Z.location,Te)}}}}L()}function G(){j();for(const D in r){const F=r[D];for(const ue in F){const oe=F[ue];for(const he in oe)v(oe[he].object),delete oe[he];delete F[ue]}delete r[D]}}function H(D){if(r[D.id]===void 0)return;const F=r[D.id];for(const ue in F){const oe=F[ue];for(const he in oe)v(oe[he].object),delete oe[he];delete F[ue]}delete r[D.id]}function P(D){for(const F in r){const ue=r[F];if(ue[D.id]===void 0)continue;const oe=ue[D.id];for(const he in oe)v(oe[he].object),delete oe[he];delete ue[D.id]}}function j(){w(),f=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:j,resetDefaultState:w,dispose:G,releaseStatesOfGeometry:H,releaseStatesOfProgram:P,initAttributes:A,enableAttribute:S,disableUnusedAttributes:L}}function MA(s,e,i){let r;function l(p){r=p}function c(p,v){s.drawArrays(r,p,v),i.update(v,r,1)}function f(p,v,g){g!==0&&(s.drawArraysInstanced(r,p,v,g),i.update(v,r,g))}function h(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,g);let M=0;for(let b=0;b<g;b++)M+=v[b];i.update(M,r,1)}function m(p,v,g,x){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)f(p[b],v[b],x[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,v,0,x,0,g);let b=0;for(let A=0;A<g;A++)b+=v[A]*x[A];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function EA(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(P){return!(P!==yi&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const j=P===Qo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Pi&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ca&&!j)}function m(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=b>0,H=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:C,vertexTextures:G,maxSamples:H}}function bA(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new yr,h=new ut,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const M=g.length!==0||x||r!==0||l;return l=x,r=g.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=v(g,x,0)},this.setState=function(g,x,M){const b=g.clippingPlanes,A=g.clipIntersection,S=g.clipShadows,_=s.get(g);if(!l||b===null||b.length===0||c&&!S)c?v(null):p();else{const L=c?0:r,U=L*4;let C=_.clippingState||null;m.value=C,C=v(b,x,U,M);for(let G=0;G!==U;++G)C[G]=i[G];_.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,x,M,b){const A=g!==null?g.length:0;let S=null;if(A!==0){if(S=m.value,b!==!0||S===null){const _=M+A*4,L=x.matrixWorldInverse;h.getNormalMatrix(L),(S===null||S.length<_)&&(S=new Float32Array(_));for(let U=0,C=M;U!==A;++U,C+=4)f.copy(g[U]).applyMatrix4(L,h),f.normal.toArray(S,C),S[C+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function TA(s){let e=new WeakMap;function i(f,h){return h===fh?f.mapping=Us:h===dh&&(f.mapping=Ls),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===fh||h===dh)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new yb(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const As=4,Bv=[.125,.215,.35,.446,.526,.582],Er=20,qd=new Pb,Iv=new At;let Yd=null,Zd=0,Kd=0,Qd=!1;const Sr=(1+Math.sqrt(5))/2,Ts=1/Sr,Fv=[new $(-Sr,Ts,0),new $(Sr,Ts,0),new $(-Ts,0,Sr),new $(Ts,0,Sr),new $(0,Sr,-Ts),new $(0,Sr,Ts),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],AA=new $;class Hv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=AA}=c;Yd=this._renderer.getRenderTarget(),Zd=this._renderer.getActiveCubeFace(),Kd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yd,Zd,Kd),this._renderer.xr.enabled=Qd,e.scissorTest=!1,Pc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Us||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yd=this._renderer.getRenderTarget(),Zd=this._renderer.getActiveCubeFace(),Kd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:Qo,format:yi,colorSpace:Ns,depthBuffer:!1},l=Gv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gv(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RA(c)),this._blurMaterial=CA(c,e,i)}return l}_compileMaterial(e){const i=new Si(this._lodPlanes[0],e);this._renderer.compile(i,qd)}_sceneToCubeUV(e,i,r,l,c){const m=new $n(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,M=g.toneMapping;g.getClearColor(Iv),g.toneMapping=ja,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const A=new Y_({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),S=new Si(new tl,A);let _=!1;const L=e.background;L?L.isColor&&(A.color.copy(L),e.background=null,_=!0):(A.color.copy(Iv),_=!0);for(let U=0;U<6;U++){const C=U%3;C===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[U],c.y,c.z)):C===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[U]));const G=this._cubeSize;Pc(l,C*G,U>2?G:0,G,G),g.setRenderTarget(l),_&&g.render(S,m),g.render(e,m)}S.geometry.dispose(),S.material.dispose(),g.toneMapping=M,g.autoClear=x,e.background=L}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Us||e.mapping===Ls;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=kv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Si(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Pc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,qd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=Fv[(l-c-1)%Fv.length];this._blur(e,c-1,c,f,h)}i.autoClear=r}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new Si(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Er-1),A=c/b,S=isFinite(c)?1+Math.floor(v*A):Er;S>Er&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Er}`);const _=[];let L=0;for(let P=0;P<Er;++P){const j=P/A,w=Math.exp(-j*j/2);_.push(w),P===0?L+=w:P<S&&(L+=2*w)}for(let P=0;P<_.length;P++)_[P]=_[P]/L;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:U}=this;x.dTheta.value=b,x.mipInt.value=U-r;const C=this._sizeLods[l],G=3*C*(l>U-As?l-U+As:0),H=4*(this._cubeSize-C);Pc(i,G,H,3*C,2*C),m.setRenderTarget(i),m.render(g,qd)}}function RA(s){const e=[],i=[],r=[];let l=s;const c=s-As+1+Bv.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);i.push(h);let m=1/h;f>s-As?m=Bv[f-s+As-1]:f===0&&(m=0),r.push(m);const p=1/(h-2),v=-p,g=1+p,x=[v,v,g,v,g,g,v,v,g,g,v,g],M=6,b=6,A=3,S=2,_=1,L=new Float32Array(A*b*M),U=new Float32Array(S*b*M),C=new Float32Array(_*b*M);for(let H=0;H<M;H++){const P=H%3*2/3-1,j=H>2?0:-1,w=[P,j,0,P+2/3,j,0,P+2/3,j+1,0,P,j,0,P+2/3,j+1,0,P,j+1,0];L.set(w,A*b*H),U.set(x,S*b*H);const D=[H,H,H,H,H,H];C.set(D,_*b*H)}const G=new Bi;G.setAttribute("position",new Ei(L,A)),G.setAttribute("uv",new Ei(U,S)),G.setAttribute("faceIndex",new Ei(C,_)),e.push(G),l>As&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function Gv(s,e,i){const r=new Rr(s,e,i);return r.texture.mapping=$c,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Pc(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function CA(s,e,i){const r=new Float32Array(Er),l=new $(0,1,0);return new Ya({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function Vv(){return new Ya({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function kv(){return new Ya({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function lp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wA(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===fh||m===dh,v=m===Us||m===Ls;if(p||v){let g=e.get(h);const x=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new Hv(s)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new Hv(s)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function DA(s){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Cs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function UA(s,e,i,r){const l={},c=new WeakMap;function f(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",f),delete l[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(g,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function p(g){const x=[],M=g.index,b=g.attributes.position;let A=0;if(M!==null){const L=M.array;A=M.version;for(let U=0,C=L.length;U<C;U+=3){const G=L[U+0],H=L[U+1],P=L[U+2];x.push(G,H,H,P,P,G)}}else if(b!==void 0){const L=b.array;A=b.version;for(let U=0,C=L.length/3-1;U<C;U+=3){const G=U+0,H=U+1,P=U+2;x.push(G,H,H,P,P,G)}}else return;const S=new(k_(x)?K_:Z_)(x,1);S.version=A;const _=c.get(g);_&&e.remove(_),c.set(g,S)}function v(g){const x=c.get(g);if(x){const M=g.index;M!==null&&x.version<M.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:v}}function LA(s,e,i){let r;function l(x){r=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function m(x,M){s.drawElements(r,M,c,x*f),i.update(M,r,1)}function p(x,M,b){b!==0&&(s.drawElementsInstanced(r,M,c,x*f,b),i.update(M,r,b))}function v(x,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,b);let S=0;for(let _=0;_<b;_++)S+=M[_];i.update(S,r,1)}function g(x,M,b,A){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)p(x[_]/f,M[_],A[_]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,A,0,b);let _=0;for(let L=0;L<b;L++)_+=M[L]*A[L];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function NA(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function OA(s,e,i){const r=new WeakMap,l=new Gt;function c(f,h,m){const p=f.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let x=r.get(h);if(x===void 0||x.count!==g){let D=function(){j.dispose(),r.delete(h),h.removeEventListener("dispose",D)};var M=D;x!==void 0&&x.texture.dispose();const b=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let C=0;b===!0&&(C=1),A===!0&&(C=2),S===!0&&(C=3);let G=h.attributes.position.count*C,H=1;G>e.maxTextureSize&&(H=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const P=new Float32Array(G*H*4*g),j=new X_(P,G,H,g);j.type=ca,j.needsUpdate=!0;const w=C*4;for(let F=0;F<g;F++){const ue=_[F],oe=L[F],he=U[F],ge=G*H*4*F;for(let z=0;z<ue.count;z++){const K=z*w;b===!0&&(l.fromBufferAttribute(ue,z),P[ge+K+0]=l.x,P[ge+K+1]=l.y,P[ge+K+2]=l.z,P[ge+K+3]=0),A===!0&&(l.fromBufferAttribute(oe,z),P[ge+K+4]=l.x,P[ge+K+5]=l.y,P[ge+K+6]=l.z,P[ge+K+7]=0),S===!0&&(l.fromBufferAttribute(he,z),P[ge+K+8]=l.x,P[ge+K+9]=l.y,P[ge+K+10]=l.z,P[ge+K+11]=he.itemSize===4?l.w:1)}}x={count:g,texture:j,size:new Dt(G,H)},r.set(h,x),h.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let b=0;for(let S=0;S<p.length;S++)b+=p[S];const A=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function PA(s,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,v=m.geometry,g=e.get(m,v);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const ax=new Nn,Xv=new tx(1,1),rx=new X_,sx=new ib,ox=new $_,Wv=[],jv=[],qv=new Float32Array(16),Yv=new Float32Array(9),Zv=new Float32Array(4);function Fs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=Wv[l];if(c===void 0&&(c=new Float32Array(l),Wv[l]=c),e!==0){r.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,s[f].toArray(c,h)}return c}function pn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function mn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function nu(s,e){let i=jv[e];i===void 0&&(i=new Int32Array(e),jv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function zA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function BA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;s.uniform2fv(this.addr,e),mn(i,e)}}function IA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(pn(i,e))return;s.uniform3fv(this.addr,e),mn(i,e)}}function FA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;s.uniform4fv(this.addr,e),mn(i,e)}}function HA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;Zv.set(r),s.uniformMatrix2fv(this.addr,!1,Zv),mn(i,r)}}function GA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;Yv.set(r),s.uniformMatrix3fv(this.addr,!1,Yv),mn(i,r)}}function VA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;qv.set(r),s.uniformMatrix4fv(this.addr,!1,qv),mn(i,r)}}function kA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function XA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;s.uniform2iv(this.addr,e),mn(i,e)}}function WA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;s.uniform3iv(this.addr,e),mn(i,e)}}function jA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;s.uniform4iv(this.addr,e),mn(i,e)}}function qA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function YA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;s.uniform2uiv(this.addr,e),mn(i,e)}}function ZA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;s.uniform3uiv(this.addr,e),mn(i,e)}}function KA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;s.uniform4uiv(this.addr,e),mn(i,e)}}function QA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Xv.compareFunction=V_,c=Xv):c=ax,i.setTexture2D(e||c,l)}function JA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||sx,l)}function $A(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||ox,l)}function e2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||rx,l)}function t2(s){switch(s){case 5126:return zA;case 35664:return BA;case 35665:return IA;case 35666:return FA;case 35674:return HA;case 35675:return GA;case 35676:return VA;case 5124:case 35670:return kA;case 35667:case 35671:return XA;case 35668:case 35672:return WA;case 35669:case 35673:return jA;case 5125:return qA;case 36294:return YA;case 36295:return ZA;case 36296:return KA;case 35678:case 36198:case 36298:case 36306:case 35682:return QA;case 35679:case 36299:case 36307:return JA;case 35680:case 36300:case 36308:case 36293:return $A;case 36289:case 36303:case 36311:case 36292:return e2}}function n2(s,e){s.uniform1fv(this.addr,e)}function i2(s,e){const i=Fs(e,this.size,2);s.uniform2fv(this.addr,i)}function a2(s,e){const i=Fs(e,this.size,3);s.uniform3fv(this.addr,i)}function r2(s,e){const i=Fs(e,this.size,4);s.uniform4fv(this.addr,i)}function s2(s,e){const i=Fs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function o2(s,e){const i=Fs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function l2(s,e){const i=Fs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function c2(s,e){s.uniform1iv(this.addr,e)}function u2(s,e){s.uniform2iv(this.addr,e)}function f2(s,e){s.uniform3iv(this.addr,e)}function d2(s,e){s.uniform4iv(this.addr,e)}function h2(s,e){s.uniform1uiv(this.addr,e)}function p2(s,e){s.uniform2uiv(this.addr,e)}function m2(s,e){s.uniform3uiv(this.addr,e)}function g2(s,e){s.uniform4uiv(this.addr,e)}function v2(s,e,i){const r=this.cache,l=e.length,c=nu(i,l);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||ax,c[f])}function _2(s,e,i){const r=this.cache,l=e.length,c=nu(i,l);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||sx,c[f])}function x2(s,e,i){const r=this.cache,l=e.length,c=nu(i,l);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||ox,c[f])}function y2(s,e,i){const r=this.cache,l=e.length,c=nu(i,l);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||rx,c[f])}function S2(s){switch(s){case 5126:return n2;case 35664:return i2;case 35665:return a2;case 35666:return r2;case 35674:return s2;case 35675:return o2;case 35676:return l2;case 5124:case 35670:return c2;case 35667:case 35671:return u2;case 35668:case 35672:return f2;case 35669:case 35673:return d2;case 5125:return h2;case 36294:return p2;case 36295:return m2;case 36296:return g2;case 35678:case 36198:case 36298:case 36306:case 35682:return v2;case 35679:case 36299:case 36307:return _2;case 35680:case 36300:case 36308:case 36293:return x2;case 36289:case 36303:case 36311:case 36292:return y2}}class M2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=t2(i.type)}}class E2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=S2(i.type)}}class b2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const Jd=/(\w+)(\])?(\[|\.)?/g;function Kv(s,e){s.seq.push(e),s.map[e.id]=e}function T2(s,e,i){const r=s.name,l=r.length;for(Jd.lastIndex=0;;){const c=Jd.exec(r),f=Jd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){Kv(i,p===void 0?new M2(h,s,e):new E2(h,s,e));break}else{let g=i.map[h];g===void 0&&(g=new b2(h),Kv(i,g)),i=g}}}class Xc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);T2(c,f,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function Qv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const A2=37297;let R2=0;function C2(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const Jv=new ut;function w2(s){wt._getMatrix(Jv,wt.workingColorSpace,s);const e=`mat3( ${Jv.elements.map(i=>i.toFixed(4))} )`;switch(wt.getTransfer(s)){case jc:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function $v(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+C2(s.getShaderSource(e),h)}else return c}function D2(s,e){const i=w2(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function U2(s,e){let i;switch(e){case UE:i="Linear";break;case LE:i="Reinhard";break;case NE:i="Cineon";break;case OE:i="ACESFilmic";break;case zE:i="AgX";break;case BE:i="Neutral";break;case PE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const zc=new $;function L2(){wt.getLuminanceCoefficients(zc);const s=zc.x.toFixed(4),e=zc.y.toFixed(4),i=zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N2(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function O2(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function P2(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:h}}return i}function Go(s){return s!==""}function e_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function t_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const z2=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(s){return s.replace(z2,I2)}const B2=new Map;function I2(s,e){let i=ft[e];if(i===void 0){const r=B2.get(e);if(r!==void 0)i=ft[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return kh(i)}const F2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n_(s){return s.replace(F2,H2)}function H2(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function i_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function G2(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===U_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===uE?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===oa&&(e="SHADOWMAP_TYPE_VSM"),e}function V2(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Us:case Ls:e="ENVMAP_TYPE_CUBE";break;case $c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function k2(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ls&&(e="ENVMAP_MODE_REFRACTION"),e}function X2(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Jh:e="ENVMAP_BLENDING_MULTIPLY";break;case wE:e="ENVMAP_BLENDING_MIX";break;case DE:e="ENVMAP_BLENDING_ADD";break}return e}function W2(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function j2(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=G2(i),p=V2(i),v=k2(i),g=X2(i),x=W2(i),M=N2(i),b=O2(c),A=l.createProgram();let S,_,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Go).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Go).join(`
`),_.length>0&&(_+=`
`)):(S=[i_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),_=[i_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ja?"#define TONE_MAPPING":"",i.toneMapping!==ja?ft.tonemapping_pars_fragment:"",i.toneMapping!==ja?U2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,D2("linearToOutputTexel",i.outputColorSpace),L2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Go).join(`
`)),f=kh(f),f=e_(f,i),f=t_(f,i),h=kh(h),h=e_(h,i),h=t_(h,i),f=n_(f),h=n_(h),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===fv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===fv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=L+S+f,C=L+_+h,G=Qv(l,l.VERTEX_SHADER,U),H=Qv(l,l.FRAGMENT_SHADER,C);l.attachShader(A,G),l.attachShader(A,H),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function P(F){if(s.debug.checkShaderErrors){const ue=l.getProgramInfoLog(A)||"",oe=l.getShaderInfoLog(G)||"",he=l.getShaderInfoLog(H)||"",ge=ue.trim(),z=oe.trim(),K=he.trim();let Z=!0,Se=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,G,H);else{const Te=$v(l,G,"vertex"),O=$v(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ge+`
`+Te+`
`+O)}else ge!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ge):(z===""||K==="")&&(Se=!1);Se&&(F.diagnostics={runnable:Z,programLog:ge,vertexShader:{log:z,prefix:S},fragmentShader:{log:K,prefix:_}})}l.deleteShader(G),l.deleteShader(H),j=new Xc(l,A),w=P2(l,A)}let j;this.getUniforms=function(){return j===void 0&&P(this),j};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(A,A2)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=R2++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=G,this.fragmentShader=H,this}let q2=0;class Y2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Z2(e),i.set(e,r)),r}}class Z2{constructor(e){this.id=q2++,this.code=e,this.usedTimes=0}}function K2(s,e,i,r,l,c,f){const h=new j_,m=new Y2,p=new Set,v=[],g=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return p.add(w),w===0?"uv":`uv${w}`}function S(w,D,F,ue,oe){const he=ue.fog,ge=oe.geometry,z=w.isMeshStandardMaterial?ue.environment:null,K=(w.isMeshStandardMaterial?i:e).get(w.envMap||z),Z=K&&K.mapping===$c?K.image.height:null,Se=b[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const Te=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,O=Te!==void 0?Te.length:0;let ie=0;ge.morphAttributes.position!==void 0&&(ie=1),ge.morphAttributes.normal!==void 0&&(ie=2),ge.morphAttributes.color!==void 0&&(ie=3);let be,Ce,Q,xe;if(Se){const bt=Ui[Se];be=bt.vertexShader,Ce=bt.fragmentShader}else be=w.vertexShader,Ce=w.fragmentShader,m.update(w),Q=m.getVertexShaderID(w),xe=m.getFragmentShaderID(w);const _e=s.getRenderTarget(),Ge=s.state.buffers.depth.getReversed(),ze=oe.isInstancedMesh===!0,nt=oe.isBatchedMesh===!0,Wt=!!w.map,ht=!!w.matcap,V=!!K,Et=!!w.aoMap,$e=!!w.lightMap,yt=!!w.bumpMap,Ke=!!w.normalMap,Vt=!!w.displacementMap,Fe=!!w.emissiveMap,st=!!w.metalnessMap,$t=!!w.roughnessMap,Kt=w.anisotropy>0,N=w.clearcoat>0,E=w.dispersion>0,te=w.iridescence>0,de=w.sheen>0,Me=w.transmission>0,le=Kt&&!!w.anisotropyMap,Ye=N&&!!w.clearcoatMap,we=N&&!!w.clearcoatNormalMap,je=N&&!!w.clearcoatRoughnessMap,qe=te&&!!w.iridescenceMap,Ae=te&&!!w.iridescenceThicknessMap,De=de&&!!w.sheenColorMap,Ze=de&&!!w.sheenRoughnessMap,Be=!!w.specularMap,Le=!!w.specularColorMap,ot=!!w.specularIntensityMap,X=Me&&!!w.transmissionMap,Re=Me&&!!w.thicknessMap,Ue=!!w.gradientMap,Ie=!!w.alphaMap,Ee=w.alphaTest>0,ve=!!w.alphaHash,He=!!w.extensions;let at=ja;w.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(at=s.toneMapping);const Ot={shaderID:Se,shaderType:w.type,shaderName:w.name,vertexShader:be,fragmentShader:Ce,defines:w.defines,customVertexShaderID:Q,customFragmentShaderID:xe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:nt,batchingColor:nt&&oe._colorsTexture!==null,instancing:ze,instancingColor:ze&&oe.instanceColor!==null,instancingMorph:ze&&oe.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Ns,alphaToCoverage:!!w.alphaToCoverage,map:Wt,matcap:ht,envMap:V,envMapMode:V&&K.mapping,envMapCubeUVHeight:Z,aoMap:Et,lightMap:$e,bumpMap:yt,normalMap:Ke,displacementMap:x&&Vt,emissiveMap:Fe,normalMapObjectSpace:Ke&&w.normalMapType===GE,normalMapTangentSpace:Ke&&w.normalMapType===G_,metalnessMap:st,roughnessMap:$t,anisotropy:Kt,anisotropyMap:le,clearcoat:N,clearcoatMap:Ye,clearcoatNormalMap:we,clearcoatRoughnessMap:je,dispersion:E,iridescence:te,iridescenceMap:qe,iridescenceThicknessMap:Ae,sheen:de,sheenColorMap:De,sheenRoughnessMap:Ze,specularMap:Be,specularColorMap:Le,specularIntensityMap:ot,transmission:Me,transmissionMap:X,thicknessMap:Re,gradientMap:Ue,opaque:w.transparent===!1&&w.blending===Rs&&w.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Ee,alphaHash:ve,combine:w.combine,mapUv:Wt&&A(w.map.channel),aoMapUv:Et&&A(w.aoMap.channel),lightMapUv:$e&&A(w.lightMap.channel),bumpMapUv:yt&&A(w.bumpMap.channel),normalMapUv:Ke&&A(w.normalMap.channel),displacementMapUv:Vt&&A(w.displacementMap.channel),emissiveMapUv:Fe&&A(w.emissiveMap.channel),metalnessMapUv:st&&A(w.metalnessMap.channel),roughnessMapUv:$t&&A(w.roughnessMap.channel),anisotropyMapUv:le&&A(w.anisotropyMap.channel),clearcoatMapUv:Ye&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:we&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:je&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:De&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&A(w.sheenRoughnessMap.channel),specularMapUv:Be&&A(w.specularMap.channel),specularColorMapUv:Le&&A(w.specularColorMap.channel),specularIntensityMapUv:ot&&A(w.specularIntensityMap.channel),transmissionMapUv:X&&A(w.transmissionMap.channel),thicknessMapUv:Re&&A(w.thicknessMap.channel),alphaMapUv:Ie&&A(w.alphaMap.channel),vertexTangents:!!ge.attributes.tangent&&(Ke||Kt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!ge.attributes.uv&&(Wt||Ie),fog:!!he,useFog:w.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ge,skinning:oe.isSkinnedMesh===!0,morphTargets:ge.morphAttributes.position!==void 0,morphNormals:ge.morphAttributes.normal!==void 0,morphColors:ge.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ie,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:Wt&&w.map.isVideoTexture===!0&&wt.getTransfer(w.map.colorSpace)===Ht,decodeVideoTextureEmissive:Fe&&w.emissiveMap.isVideoTexture===!0&&wt.getTransfer(w.emissiveMap.colorSpace)===Ht,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===la,flipSided:w.side===Vn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:He&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&w.extensions.multiDraw===!0||nt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ot.vertexUv1s=p.has(1),Ot.vertexUv2s=p.has(2),Ot.vertexUv3s=p.has(3),p.clear(),Ot}function _(w){const D=[];if(w.shaderID?D.push(w.shaderID):(D.push(w.customVertexShaderID),D.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)D.push(F),D.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(L(D,w),U(D,w),D.push(s.outputColorSpace)),D.push(w.customProgramCacheKey),D.join()}function L(w,D){w.push(D.precision),w.push(D.outputColorSpace),w.push(D.envMapMode),w.push(D.envMapCubeUVHeight),w.push(D.mapUv),w.push(D.alphaMapUv),w.push(D.lightMapUv),w.push(D.aoMapUv),w.push(D.bumpMapUv),w.push(D.normalMapUv),w.push(D.displacementMapUv),w.push(D.emissiveMapUv),w.push(D.metalnessMapUv),w.push(D.roughnessMapUv),w.push(D.anisotropyMapUv),w.push(D.clearcoatMapUv),w.push(D.clearcoatNormalMapUv),w.push(D.clearcoatRoughnessMapUv),w.push(D.iridescenceMapUv),w.push(D.iridescenceThicknessMapUv),w.push(D.sheenColorMapUv),w.push(D.sheenRoughnessMapUv),w.push(D.specularMapUv),w.push(D.specularColorMapUv),w.push(D.specularIntensityMapUv),w.push(D.transmissionMapUv),w.push(D.thicknessMapUv),w.push(D.combine),w.push(D.fogExp2),w.push(D.sizeAttenuation),w.push(D.morphTargetsCount),w.push(D.morphAttributeCount),w.push(D.numDirLights),w.push(D.numPointLights),w.push(D.numSpotLights),w.push(D.numSpotLightMaps),w.push(D.numHemiLights),w.push(D.numRectAreaLights),w.push(D.numDirLightShadows),w.push(D.numPointLightShadows),w.push(D.numSpotLightShadows),w.push(D.numSpotLightShadowsWithMaps),w.push(D.numLightProbes),w.push(D.shadowMapType),w.push(D.toneMapping),w.push(D.numClippingPlanes),w.push(D.numClipIntersection),w.push(D.depthPacking)}function U(w,D){h.disableAll(),D.supportsVertexTextures&&h.enable(0),D.instancing&&h.enable(1),D.instancingColor&&h.enable(2),D.instancingMorph&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),D.alphaHash&&h.enable(18),D.batching&&h.enable(19),D.dispersion&&h.enable(20),D.batchingColor&&h.enable(21),D.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),w.push(h.mask)}function C(w){const D=b[w.type];let F;if(D){const ue=Ui[D];F=gb.clone(ue.uniforms)}else F=w.uniforms;return F}function G(w,D){let F;for(let ue=0,oe=v.length;ue<oe;ue++){const he=v[ue];if(he.cacheKey===D){F=he,++F.usedTimes;break}}return F===void 0&&(F=new j2(s,D,w,c),v.push(F)),F}function H(w){if(--w.usedTimes===0){const D=v.indexOf(w);v[D]=v[v.length-1],v.pop(),w.destroy()}}function P(w){m.remove(w)}function j(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:C,acquireProgram:G,releaseProgram:H,releaseShaderCache:P,programs:v,dispose:j}}function Q2(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function J2(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function a_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function r_(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(g,x,M,b,A,S){let _=s[e];return _===void 0?(_={id:g.id,object:g,geometry:x,material:M,groupOrder:b,renderOrder:g.renderOrder,z:A,group:S},s[e]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=M,_.groupOrder=b,_.renderOrder=g.renderOrder,_.z=A,_.group=S),e++,_}function h(g,x,M,b,A,S){const _=f(g,x,M,b,A,S);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(g,x,M,b,A,S){const _=f(g,x,M,b,A,S);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,x){i.length>1&&i.sort(g||J2),r.length>1&&r.sort(x||a_),l.length>1&&l.sort(x||a_)}function v(){for(let g=e,x=s.length;g<x;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:v,sort:p}}function $2(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new r_,s.set(r,[f])):l>=c.length?(f=new r_,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function eR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new $,color:new At};break;case"SpotLight":i={position:new $,direction:new $,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new At,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new At,groundColor:new At};break;case"RectAreaLight":i={color:new At,position:new $,halfWidth:new $,halfHeight:new $};break}return s[e.id]=i,i}}}function tR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let nR=0;function iR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function aR(s){const e=new eR,i=tR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new $);const l=new $,c=new Jt,f=new Jt;function h(p){let v=0,g=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,b=0,A=0,S=0,_=0,L=0,U=0,C=0,G=0,H=0,P=0;p.sort(iR);for(let w=0,D=p.length;w<D;w++){const F=p[w],ue=F.color,oe=F.intensity,he=F.distance,ge=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)v+=ue.r*oe,g+=ue.g*oe,x+=ue.b*oe;else if(F.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(F.sh.coefficients[z],oe);P++}else if(F.isDirectionalLight){const z=e.get(F);if(z.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const K=F.shadow,Z=i.get(F);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,r.directionalShadow[M]=Z,r.directionalShadowMap[M]=ge,r.directionalShadowMatrix[M]=F.shadow.matrix,L++}r.directional[M]=z,M++}else if(F.isSpotLight){const z=e.get(F);z.position.setFromMatrixPosition(F.matrixWorld),z.color.copy(ue).multiplyScalar(oe),z.distance=he,z.coneCos=Math.cos(F.angle),z.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),z.decay=F.decay,r.spot[A]=z;const K=F.shadow;if(F.map&&(r.spotLightMap[G]=F.map,G++,K.updateMatrices(F),F.castShadow&&H++),r.spotLightMatrix[A]=K.matrix,F.castShadow){const Z=i.get(F);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,r.spotShadow[A]=Z,r.spotShadowMap[A]=ge,C++}A++}else if(F.isRectAreaLight){const z=e.get(F);z.color.copy(ue).multiplyScalar(oe),z.halfWidth.set(F.width*.5,0,0),z.halfHeight.set(0,F.height*.5,0),r.rectArea[S]=z,S++}else if(F.isPointLight){const z=e.get(F);if(z.color.copy(F.color).multiplyScalar(F.intensity),z.distance=F.distance,z.decay=F.decay,F.castShadow){const K=F.shadow,Z=i.get(F);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,r.pointShadow[b]=Z,r.pointShadowMap[b]=ge,r.pointShadowMatrix[b]=F.shadow.matrix,U++}r.point[b]=z,b++}else if(F.isHemisphereLight){const z=e.get(F);z.skyColor.copy(F.color).multiplyScalar(oe),z.groundColor.copy(F.groundColor).multiplyScalar(oe),r.hemi[_]=z,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=x;const j=r.hash;(j.directionalLength!==M||j.pointLength!==b||j.spotLength!==A||j.rectAreaLength!==S||j.hemiLength!==_||j.numDirectionalShadows!==L||j.numPointShadows!==U||j.numSpotShadows!==C||j.numSpotMaps!==G||j.numLightProbes!==P)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=S,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=C+G-H,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=P,j.directionalLength=M,j.pointLength=b,j.spotLength=A,j.rectAreaLength=S,j.hemiLength=_,j.numDirectionalShadows=L,j.numPointShadows=U,j.numSpotShadows=C,j.numSpotMaps=G,j.numLightProbes=P,r.version=nR++)}function m(p,v){let g=0,x=0,M=0,b=0,A=0;const S=v.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const U=p[_];if(U.isDirectionalLight){const C=r.directional[g];C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(S),g++}else if(U.isSpotLight){const C=r.spot[M];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(S),M++}else if(U.isRectAreaLight){const C=r.rectArea[b];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(S),f.identity(),c.copy(U.matrixWorld),c.premultiply(S),f.extractRotation(c),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),b++}else if(U.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(S),x++}else if(U.isHemisphereLight){const C=r.hemi[A];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(S),A++}}}return{setup:h,setupView:m,state:r}}function s_(s){const e=new aR(s),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function f(v){r.push(v)}function h(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function rR(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new s_(s),e.set(l,[h])):c>=f.length?(h=new s_(s),f.push(h)):h=f[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const sR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lR(s,e,i){let r=new sp;const l=new Dt,c=new Dt,f=new Gt,h=new Rb({depthPacking:HE}),m=new Cb,p={},v=i.maxTextureSize,g={[qa]:Vn,[Vn]:qa,[la]:la},x=new Ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:sR,fragmentShader:oR}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new Bi;b.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Si(b,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=U_;let _=this.type;this.render=function(H,P,j){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;const w=s.getRenderTarget(),D=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),ue=s.state;ue.setBlending(Wa),ue.buffers.depth.getReversed()?ue.buffers.color.setClear(0,0,0,0):ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const oe=_!==oa&&this.type===oa,he=_===oa&&this.type!==oa;for(let ge=0,z=H.length;ge<z;ge++){const K=H[ge],Z=K.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const Se=Z.getFrameExtents();if(l.multiply(Se),c.copy(Z.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/Se.x),l.x=c.x*Se.x,Z.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/Se.y),l.y=c.y*Se.y,Z.mapSize.y=c.y)),Z.map===null||oe===!0||he===!0){const O=this.type!==oa?{minFilter:Mi,magFilter:Mi}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Rr(l.x,l.y,O),Z.map.texture.name=K.name+".shadowMap",Z.camera.updateProjectionMatrix()}s.setRenderTarget(Z.map),s.clear();const Te=Z.getViewportCount();for(let O=0;O<Te;O++){const ie=Z.getViewport(O);f.set(c.x*ie.x,c.y*ie.y,c.x*ie.z,c.y*ie.w),ue.viewport(f),Z.updateMatrices(K,O),r=Z.getFrustum(),C(P,j,Z.camera,K,this.type)}Z.isPointLightShadow!==!0&&this.type===oa&&L(Z,j),Z.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(w,D,F)};function L(H,P){const j=e.update(A);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,M.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Rr(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(P,null,j,x,A,null),M.uniforms.shadow_pass.value=H.mapPass.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(P,null,j,M,A,null)}function U(H,P,j,w){let D=null;const F=j.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(F!==void 0)D=F;else if(D=j.isPointLight===!0?m:h,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const ue=D.uuid,oe=P.uuid;let he=p[ue];he===void 0&&(he={},p[ue]=he);let ge=he[oe];ge===void 0&&(ge=D.clone(),he[oe]=ge,P.addEventListener("dispose",G)),D=ge}if(D.visible=P.visible,D.wireframe=P.wireframe,w===oa?D.side=P.shadowSide!==null?P.shadowSide:P.side:D.side=P.shadowSide!==null?P.shadowSide:g[P.side],D.alphaMap=P.alphaMap,D.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,D.map=P.map,D.clipShadows=P.clipShadows,D.clippingPlanes=P.clippingPlanes,D.clipIntersection=P.clipIntersection,D.displacementMap=P.displacementMap,D.displacementScale=P.displacementScale,D.displacementBias=P.displacementBias,D.wireframeLinewidth=P.wireframeLinewidth,D.linewidth=P.linewidth,j.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const ue=s.properties.get(D);ue.light=j}return D}function C(H,P,j,w,D){if(H.visible===!1)return;if(H.layers.test(P.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&D===oa)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,H.matrixWorld);const oe=e.update(H),he=H.material;if(Array.isArray(he)){const ge=oe.groups;for(let z=0,K=ge.length;z<K;z++){const Z=ge[z],Se=he[Z.materialIndex];if(Se&&Se.visible){const Te=U(H,Se,w,D);H.onBeforeShadow(s,H,P,j,oe,Te,Z),s.renderBufferDirect(j,null,oe,Te,H,Z),H.onAfterShadow(s,H,P,j,oe,Te,Z)}}}else if(he.visible){const ge=U(H,he,w,D);H.onBeforeShadow(s,H,P,j,oe,ge,null),s.renderBufferDirect(j,null,oe,ge,H,null),H.onAfterShadow(s,H,P,j,oe,ge,null)}}const ue=H.children;for(let oe=0,he=ue.length;oe<he;oe++)C(ue[oe],P,j,w,D)}function G(H){H.target.removeEventListener("dispose",G);for(const j in p){const w=p[j],D=H.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}const cR={[ah]:rh,[sh]:ch,[oh]:uh,[Ds]:lh,[rh]:ah,[ch]:sh,[uh]:oh,[lh]:Ds};function uR(s,e){function i(){let X=!1;const Re=new Gt;let Ue=null;const Ie=new Gt(0,0,0,0);return{setMask:function(Ee){Ue!==Ee&&!X&&(s.colorMask(Ee,Ee,Ee,Ee),Ue=Ee)},setLocked:function(Ee){X=Ee},setClear:function(Ee,ve,He,at,Ot){Ot===!0&&(Ee*=at,ve*=at,He*=at),Re.set(Ee,ve,He,at),Ie.equals(Re)===!1&&(s.clearColor(Ee,ve,He,at),Ie.copy(Re))},reset:function(){X=!1,Ue=null,Ie.set(-1,0,0,0)}}}function r(){let X=!1,Re=!1,Ue=null,Ie=null,Ee=null;return{setReversed:function(ve){if(Re!==ve){const He=e.get("EXT_clip_control");ve?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Re=ve;const at=Ee;Ee=null,this.setClear(at)}},getReversed:function(){return Re},setTest:function(ve){ve?_e(s.DEPTH_TEST):Ge(s.DEPTH_TEST)},setMask:function(ve){Ue!==ve&&!X&&(s.depthMask(ve),Ue=ve)},setFunc:function(ve){if(Re&&(ve=cR[ve]),Ie!==ve){switch(ve){case ah:s.depthFunc(s.NEVER);break;case rh:s.depthFunc(s.ALWAYS);break;case sh:s.depthFunc(s.LESS);break;case Ds:s.depthFunc(s.LEQUAL);break;case oh:s.depthFunc(s.EQUAL);break;case lh:s.depthFunc(s.GEQUAL);break;case ch:s.depthFunc(s.GREATER);break;case uh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=ve}},setLocked:function(ve){X=ve},setClear:function(ve){Ee!==ve&&(Re&&(ve=1-ve),s.clearDepth(ve),Ee=ve)},reset:function(){X=!1,Ue=null,Ie=null,Ee=null,Re=!1}}}function l(){let X=!1,Re=null,Ue=null,Ie=null,Ee=null,ve=null,He=null,at=null,Ot=null;return{setTest:function(bt){X||(bt?_e(s.STENCIL_TEST):Ge(s.STENCIL_TEST))},setMask:function(bt){Re!==bt&&!X&&(s.stencilMask(bt),Re=bt)},setFunc:function(bt,wn,ei){(Ue!==bt||Ie!==wn||Ee!==ei)&&(s.stencilFunc(bt,wn,ei),Ue=bt,Ie=wn,Ee=ei)},setOp:function(bt,wn,ei){(ve!==bt||He!==wn||at!==ei)&&(s.stencilOp(bt,wn,ei),ve=bt,He=wn,at=ei)},setLocked:function(bt){X=bt},setClear:function(bt){Ot!==bt&&(s.clearStencil(bt),Ot=bt)},reset:function(){X=!1,Re=null,Ue=null,Ie=null,Ee=null,ve=null,He=null,at=null,Ot=null}}}const c=new i,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let v={},g={},x=new WeakMap,M=[],b=null,A=!1,S=null,_=null,L=null,U=null,C=null,G=null,H=null,P=new At(0,0,0),j=0,w=!1,D=null,F=null,ue=null,oe=null,he=null;const ge=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),z=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),z=K>=2);let Se=null,Te={};const O=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),be=new Gt().fromArray(O),Ce=new Gt().fromArray(ie);function Q(X,Re,Ue,Ie){const Ee=new Uint8Array(4),ve=s.createTexture();s.bindTexture(X,ve),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<Ue;He++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(Re+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return ve}const xe={};xe[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),xe[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xe[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),_e(s.DEPTH_TEST),f.setFunc(Ds),yt(!1),Ke(rv),_e(s.CULL_FACE),Et(Wa);function _e(X){v[X]!==!0&&(s.enable(X),v[X]=!0)}function Ge(X){v[X]!==!1&&(s.disable(X),v[X]=!1)}function ze(X,Re){return g[X]!==Re?(s.bindFramebuffer(X,Re),g[X]=Re,X===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Re),X===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function nt(X,Re){let Ue=M,Ie=!1;if(X){Ue=x.get(Re),Ue===void 0&&(Ue=[],x.set(Re,Ue));const Ee=X.textures;if(Ue.length!==Ee.length||Ue[0]!==s.COLOR_ATTACHMENT0){for(let ve=0,He=Ee.length;ve<He;ve++)Ue[ve]=s.COLOR_ATTACHMENT0+ve;Ue.length=Ee.length,Ie=!0}}else Ue[0]!==s.BACK&&(Ue[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(Ue)}function Wt(X){return b!==X?(s.useProgram(X),b=X,!0):!1}const ht={[Mr]:s.FUNC_ADD,[dE]:s.FUNC_SUBTRACT,[hE]:s.FUNC_REVERSE_SUBTRACT};ht[pE]=s.MIN,ht[mE]=s.MAX;const V={[gE]:s.ZERO,[vE]:s.ONE,[_E]:s.SRC_COLOR,[nh]:s.SRC_ALPHA,[bE]:s.SRC_ALPHA_SATURATE,[ME]:s.DST_COLOR,[yE]:s.DST_ALPHA,[xE]:s.ONE_MINUS_SRC_COLOR,[ih]:s.ONE_MINUS_SRC_ALPHA,[EE]:s.ONE_MINUS_DST_COLOR,[SE]:s.ONE_MINUS_DST_ALPHA,[TE]:s.CONSTANT_COLOR,[AE]:s.ONE_MINUS_CONSTANT_COLOR,[RE]:s.CONSTANT_ALPHA,[CE]:s.ONE_MINUS_CONSTANT_ALPHA};function Et(X,Re,Ue,Ie,Ee,ve,He,at,Ot,bt){if(X===Wa){A===!0&&(Ge(s.BLEND),A=!1);return}if(A===!1&&(_e(s.BLEND),A=!0),X!==fE){if(X!==S||bt!==w){if((_!==Mr||C!==Mr)&&(s.blendEquation(s.FUNC_ADD),_=Mr,C=Mr),bt)switch(X){case Rs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case sv:s.blendFunc(s.ONE,s.ONE);break;case ov:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lv:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Rs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case sv:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ov:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,U=null,G=null,H=null,P.set(0,0,0),j=0,S=X,w=bt}return}Ee=Ee||Re,ve=ve||Ue,He=He||Ie,(Re!==_||Ee!==C)&&(s.blendEquationSeparate(ht[Re],ht[Ee]),_=Re,C=Ee),(Ue!==L||Ie!==U||ve!==G||He!==H)&&(s.blendFuncSeparate(V[Ue],V[Ie],V[ve],V[He]),L=Ue,U=Ie,G=ve,H=He),(at.equals(P)===!1||Ot!==j)&&(s.blendColor(at.r,at.g,at.b,Ot),P.copy(at),j=Ot),S=X,w=!1}function $e(X,Re){X.side===la?Ge(s.CULL_FACE):_e(s.CULL_FACE);let Ue=X.side===Vn;Re&&(Ue=!Ue),yt(Ue),X.blending===Rs&&X.transparent===!1?Et(Wa):Et(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ie=X.stencilWrite;h.setTest(Ie),Ie&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Fe(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):Ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function yt(X){D!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),D=X)}function Ke(X){X!==lE?(_e(s.CULL_FACE),X!==F&&(X===rv?s.cullFace(s.BACK):X===cE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ge(s.CULL_FACE),F=X}function Vt(X){X!==ue&&(z&&s.lineWidth(X),ue=X)}function Fe(X,Re,Ue){X?(_e(s.POLYGON_OFFSET_FILL),(oe!==Re||he!==Ue)&&(s.polygonOffset(Re,Ue),oe=Re,he=Ue)):Ge(s.POLYGON_OFFSET_FILL)}function st(X){X?_e(s.SCISSOR_TEST):Ge(s.SCISSOR_TEST)}function $t(X){X===void 0&&(X=s.TEXTURE0+ge-1),Se!==X&&(s.activeTexture(X),Se=X)}function Kt(X,Re,Ue){Ue===void 0&&(Se===null?Ue=s.TEXTURE0+ge-1:Ue=Se);let Ie=Te[Ue];Ie===void 0&&(Ie={type:void 0,texture:void 0},Te[Ue]=Ie),(Ie.type!==X||Ie.texture!==Re)&&(Se!==Ue&&(s.activeTexture(Ue),Se=Ue),s.bindTexture(X,Re||xe[X]),Ie.type=X,Ie.texture=Re)}function N(){const X=Te[Se];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function te(){try{s.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function de(){try{s.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Me(){try{s.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function le(){try{s.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ye(){try{s.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function we(){try{s.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function je(){try{s.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qe(){try{s.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ae(){try{s.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function De(X){be.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),be.copy(X))}function Ze(X){Ce.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Ce.copy(X))}function Be(X,Re){let Ue=p.get(Re);Ue===void 0&&(Ue=new WeakMap,p.set(Re,Ue));let Ie=Ue.get(X);Ie===void 0&&(Ie=s.getUniformBlockIndex(Re,X.name),Ue.set(X,Ie))}function Le(X,Re){const Ie=p.get(Re).get(X);m.get(Re)!==Ie&&(s.uniformBlockBinding(Re,Ie,X.__bindingPointIndex),m.set(Re,Ie))}function ot(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},Se=null,Te={},g={},x=new WeakMap,M=[],b=null,A=!1,S=null,_=null,L=null,U=null,C=null,G=null,H=null,P=new At(0,0,0),j=0,w=!1,D=null,F=null,ue=null,oe=null,he=null,be.set(0,0,s.canvas.width,s.canvas.height),Ce.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:_e,disable:Ge,bindFramebuffer:ze,drawBuffers:nt,useProgram:Wt,setBlending:Et,setMaterial:$e,setFlipSided:yt,setCullFace:Ke,setLineWidth:Vt,setPolygonOffset:Fe,setScissorTest:st,activeTexture:$t,bindTexture:Kt,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:te,texImage2D:qe,texImage3D:Ae,updateUBOMapping:Be,uniformBlockBinding:Le,texStorage2D:we,texStorage3D:je,texSubImage2D:de,texSubImage3D:Me,compressedTexSubImage2D:le,compressedTexSubImage3D:Ye,scissor:De,viewport:Ze,reset:ot}}function fR(s,e,i,r,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Dt,v=new WeakMap;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,E){return M?new OffscreenCanvas(N,E):qo("canvas")}function A(N,E,te){let de=1;const Me=Kt(N);if((Me.width>te||Me.height>te)&&(de=te/Math.max(Me.width,Me.height)),de<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const le=Math.floor(de*Me.width),Ye=Math.floor(de*Me.height);g===void 0&&(g=b(le,Ye));const we=E?b(le,Ye):g;return we.width=le,we.height=Ye,we.getContext("2d").drawImage(N,0,0,le,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+le+"x"+Ye+")."),we}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),N;return N}function S(N){return N.generateMipmaps}function _(N){s.generateMipmap(N)}function L(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(N,E,te,de,Me=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let le=E;if(E===s.RED&&(te===s.FLOAT&&(le=s.R32F),te===s.HALF_FLOAT&&(le=s.R16F),te===s.UNSIGNED_BYTE&&(le=s.R8)),E===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(le=s.R8UI),te===s.UNSIGNED_SHORT&&(le=s.R16UI),te===s.UNSIGNED_INT&&(le=s.R32UI),te===s.BYTE&&(le=s.R8I),te===s.SHORT&&(le=s.R16I),te===s.INT&&(le=s.R32I)),E===s.RG&&(te===s.FLOAT&&(le=s.RG32F),te===s.HALF_FLOAT&&(le=s.RG16F),te===s.UNSIGNED_BYTE&&(le=s.RG8)),E===s.RG_INTEGER&&(te===s.UNSIGNED_BYTE&&(le=s.RG8UI),te===s.UNSIGNED_SHORT&&(le=s.RG16UI),te===s.UNSIGNED_INT&&(le=s.RG32UI),te===s.BYTE&&(le=s.RG8I),te===s.SHORT&&(le=s.RG16I),te===s.INT&&(le=s.RG32I)),E===s.RGB_INTEGER&&(te===s.UNSIGNED_BYTE&&(le=s.RGB8UI),te===s.UNSIGNED_SHORT&&(le=s.RGB16UI),te===s.UNSIGNED_INT&&(le=s.RGB32UI),te===s.BYTE&&(le=s.RGB8I),te===s.SHORT&&(le=s.RGB16I),te===s.INT&&(le=s.RGB32I)),E===s.RGBA_INTEGER&&(te===s.UNSIGNED_BYTE&&(le=s.RGBA8UI),te===s.UNSIGNED_SHORT&&(le=s.RGBA16UI),te===s.UNSIGNED_INT&&(le=s.RGBA32UI),te===s.BYTE&&(le=s.RGBA8I),te===s.SHORT&&(le=s.RGBA16I),te===s.INT&&(le=s.RGBA32I)),E===s.RGB&&te===s.UNSIGNED_INT_5_9_9_9_REV&&(le=s.RGB9_E5),E===s.RGBA){const Ye=Me?jc:wt.getTransfer(de);te===s.FLOAT&&(le=s.RGBA32F),te===s.HALF_FLOAT&&(le=s.RGBA16F),te===s.UNSIGNED_BYTE&&(le=Ye===Ht?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT_4_4_4_4&&(le=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(le=s.RGB5_A1)}return(le===s.R16F||le===s.R32F||le===s.RG16F||le===s.RG32F||le===s.RGBA16F||le===s.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function C(N,E){let te;return N?E===null||E===Ar||E===Xo?te=s.DEPTH24_STENCIL8:E===ca?te=s.DEPTH32F_STENCIL8:E===ko&&(te=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ar||E===Xo?te=s.DEPTH_COMPONENT24:E===ca?te=s.DEPTH_COMPONENT32F:E===ko&&(te=s.DEPTH_COMPONENT16),te}function G(N,E){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Mi&&N.minFilter!==Li?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function H(N){const E=N.target;E.removeEventListener("dispose",H),j(E),E.isVideoTexture&&v.delete(E)}function P(N){const E=N.target;E.removeEventListener("dispose",P),D(E)}function j(N){const E=r.get(N);if(E.__webglInit===void 0)return;const te=N.source,de=x.get(te);if(de){const Me=de[E.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&w(N),Object.keys(de).length===0&&x.delete(te)}r.remove(N)}function w(N){const E=r.get(N);s.deleteTexture(E.__webglTexture);const te=N.source,de=x.get(te);delete de[E.__cacheKey],f.memory.textures--}function D(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(E.__webglFramebuffer[de]))for(let Me=0;Me<E.__webglFramebuffer[de].length;Me++)s.deleteFramebuffer(E.__webglFramebuffer[de][Me]);else s.deleteFramebuffer(E.__webglFramebuffer[de]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[de])}else{if(Array.isArray(E.__webglFramebuffer))for(let de=0;de<E.__webglFramebuffer.length;de++)s.deleteFramebuffer(E.__webglFramebuffer[de]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let de=0;de<E.__webglColorRenderbuffer.length;de++)E.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[de]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const te=N.textures;for(let de=0,Me=te.length;de<Me;de++){const le=r.get(te[de]);le.__webglTexture&&(s.deleteTexture(le.__webglTexture),f.memory.textures--),r.remove(te[de])}r.remove(N)}let F=0;function ue(){F=0}function oe(){const N=F;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),F+=1,N}function he(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function ge(N,E){const te=r.get(N);if(N.isVideoTexture&&st(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&te.__version!==N.version){const de=N.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(te,N,E);return}}else N.isExternalTexture&&(te.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+E)}function z(N,E){const te=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&te.__version!==N.version){xe(te,N,E);return}i.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+E)}function K(N,E){const te=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&te.__version!==N.version){xe(te,N,E);return}i.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+E)}function Z(N,E){const te=r.get(N);if(N.version>0&&te.__version!==N.version){_e(te,N,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+E)}const Se={[hh]:s.REPEAT,[br]:s.CLAMP_TO_EDGE,[ph]:s.MIRRORED_REPEAT},Te={[Mi]:s.NEAREST,[IE]:s.NEAREST_MIPMAP_NEAREST,[hc]:s.NEAREST_MIPMAP_LINEAR,[Li]:s.LINEAR,[xd]:s.LINEAR_MIPMAP_NEAREST,[Tr]:s.LINEAR_MIPMAP_LINEAR},O={[VE]:s.NEVER,[YE]:s.ALWAYS,[kE]:s.LESS,[V_]:s.LEQUAL,[XE]:s.EQUAL,[qE]:s.GEQUAL,[WE]:s.GREATER,[jE]:s.NOTEQUAL};function ie(N,E){if(E.type===ca&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Li||E.magFilter===xd||E.magFilter===hc||E.magFilter===Tr||E.minFilter===Li||E.minFilter===xd||E.minFilter===hc||E.minFilter===Tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,Se[E.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,Se[E.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,Se[E.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,Te[E.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,Te[E.minFilter]),E.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,O[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Mi||E.minFilter!==hc&&E.minFilter!==Tr||E.type===ca&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function be(N,E){let te=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",H));const de=E.source;let Me=x.get(de);Me===void 0&&(Me={},x.set(de,Me));const le=he(E);if(le!==N.__cacheKey){Me[le]===void 0&&(Me[le]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,te=!0),Me[le].usedTimes++;const Ye=Me[N.__cacheKey];Ye!==void 0&&(Me[N.__cacheKey].usedTimes--,Ye.usedTimes===0&&w(E)),N.__cacheKey=le,N.__webglTexture=Me[le].texture}return te}function Ce(N,E,te){return Math.floor(Math.floor(N/te)/E)}function Q(N,E,te,de){const le=N.updateRanges;if(le.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,te,de,E.data);else{le.sort((Ae,De)=>Ae.start-De.start);let Ye=0;for(let Ae=1;Ae<le.length;Ae++){const De=le[Ye],Ze=le[Ae],Be=De.start+De.count,Le=Ce(Ze.start,E.width,4),ot=Ce(De.start,E.width,4);Ze.start<=Be+1&&Le===ot&&Ce(Ze.start+Ze.count-1,E.width,4)===Le?De.count=Math.max(De.count,Ze.start+Ze.count-De.start):(++Ye,le[Ye]=Ze)}le.length=Ye+1;const we=s.getParameter(s.UNPACK_ROW_LENGTH),je=s.getParameter(s.UNPACK_SKIP_PIXELS),qe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Ae=0,De=le.length;Ae<De;Ae++){const Ze=le[Ae],Be=Math.floor(Ze.start/4),Le=Math.ceil(Ze.count/4),ot=Be%E.width,X=Math.floor(Be/E.width),Re=Le,Ue=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ot),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,ot,X,Re,Ue,te,de,E.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,we),s.pixelStorei(s.UNPACK_SKIP_PIXELS,je),s.pixelStorei(s.UNPACK_SKIP_ROWS,qe)}}function xe(N,E,te){let de=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(de=s.TEXTURE_3D);const Me=be(N,E),le=E.source;i.bindTexture(de,N.__webglTexture,s.TEXTURE0+te);const Ye=r.get(le);if(le.version!==Ye.__version||Me===!0){i.activeTexture(s.TEXTURE0+te);const we=wt.getPrimaries(wt.workingColorSpace),je=E.colorSpace===Xa?null:wt.getPrimaries(E.colorSpace),qe=E.colorSpace===Xa||we===je?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let Ae=A(E.image,!1,l.maxTextureSize);Ae=$t(E,Ae);const De=c.convert(E.format,E.colorSpace),Ze=c.convert(E.type);let Be=U(E.internalFormat,De,Ze,E.colorSpace,E.isVideoTexture);ie(de,E);let Le;const ot=E.mipmaps,X=E.isVideoTexture!==!0,Re=Ye.__version===void 0||Me===!0,Ue=le.dataReady,Ie=G(E,Ae);if(E.isDepthTexture)Be=C(E.format===jo,E.type),Re&&(X?i.texStorage2D(s.TEXTURE_2D,1,Be,Ae.width,Ae.height):i.texImage2D(s.TEXTURE_2D,0,Be,Ae.width,Ae.height,0,De,Ze,null));else if(E.isDataTexture)if(ot.length>0){X&&Re&&i.texStorage2D(s.TEXTURE_2D,Ie,Be,ot[0].width,ot[0].height);for(let Ee=0,ve=ot.length;Ee<ve;Ee++)Le=ot[Ee],X?Ue&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Le.width,Le.height,De,Ze,Le.data):i.texImage2D(s.TEXTURE_2D,Ee,Be,Le.width,Le.height,0,De,Ze,Le.data);E.generateMipmaps=!1}else X?(Re&&i.texStorage2D(s.TEXTURE_2D,Ie,Be,Ae.width,Ae.height),Ue&&Q(E,Ae,De,Ze)):i.texImage2D(s.TEXTURE_2D,0,Be,Ae.width,Ae.height,0,De,Ze,Ae.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Re&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Be,ot[0].width,ot[0].height,Ae.depth);for(let Ee=0,ve=ot.length;Ee<ve;Ee++)if(Le=ot[Ee],E.format!==yi)if(De!==null)if(X){if(Ue)if(E.layerUpdates.size>0){const He=zv(Le.width,Le.height,E.format,E.type);for(const at of E.layerUpdates){const Ot=Le.data.subarray(at*He/Le.data.BYTES_PER_ELEMENT,(at+1)*He/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,at,Le.width,Le.height,1,De,Ot)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Le.width,Le.height,Ae.depth,De,Le.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ee,Be,Le.width,Le.height,Ae.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ue&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Le.width,Le.height,Ae.depth,De,Ze,Le.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Ee,Be,Le.width,Le.height,Ae.depth,0,De,Ze,Le.data)}else{X&&Re&&i.texStorage2D(s.TEXTURE_2D,Ie,Be,ot[0].width,ot[0].height);for(let Ee=0,ve=ot.length;Ee<ve;Ee++)Le=ot[Ee],E.format!==yi?De!==null?X?Ue&&i.compressedTexSubImage2D(s.TEXTURE_2D,Ee,0,0,Le.width,Le.height,De,Le.data):i.compressedTexImage2D(s.TEXTURE_2D,Ee,Be,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ue&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Le.width,Le.height,De,Ze,Le.data):i.texImage2D(s.TEXTURE_2D,Ee,Be,Le.width,Le.height,0,De,Ze,Le.data)}else if(E.isDataArrayTexture)if(X){if(Re&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Be,Ae.width,Ae.height,Ae.depth),Ue)if(E.layerUpdates.size>0){const Ee=zv(Ae.width,Ae.height,E.format,E.type);for(const ve of E.layerUpdates){const He=Ae.data.subarray(ve*Ee/Ae.data.BYTES_PER_ELEMENT,(ve+1)*Ee/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ve,Ae.width,Ae.height,1,De,Ze,He)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,De,Ze,Ae.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Be,Ae.width,Ae.height,Ae.depth,0,De,Ze,Ae.data);else if(E.isData3DTexture)X?(Re&&i.texStorage3D(s.TEXTURE_3D,Ie,Be,Ae.width,Ae.height,Ae.depth),Ue&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,De,Ze,Ae.data)):i.texImage3D(s.TEXTURE_3D,0,Be,Ae.width,Ae.height,Ae.depth,0,De,Ze,Ae.data);else if(E.isFramebufferTexture){if(Re)if(X)i.texStorage2D(s.TEXTURE_2D,Ie,Be,Ae.width,Ae.height);else{let Ee=Ae.width,ve=Ae.height;for(let He=0;He<Ie;He++)i.texImage2D(s.TEXTURE_2D,He,Be,Ee,ve,0,De,Ze,null),Ee>>=1,ve>>=1}}else if(ot.length>0){if(X&&Re){const Ee=Kt(ot[0]);i.texStorage2D(s.TEXTURE_2D,Ie,Be,Ee.width,Ee.height)}for(let Ee=0,ve=ot.length;Ee<ve;Ee++)Le=ot[Ee],X?Ue&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,De,Ze,Le):i.texImage2D(s.TEXTURE_2D,Ee,Be,De,Ze,Le);E.generateMipmaps=!1}else if(X){if(Re){const Ee=Kt(Ae);i.texStorage2D(s.TEXTURE_2D,Ie,Be,Ee.width,Ee.height)}Ue&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,De,Ze,Ae)}else i.texImage2D(s.TEXTURE_2D,0,Be,De,Ze,Ae);S(E)&&_(de),Ye.__version=le.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function _e(N,E,te){if(E.image.length!==6)return;const de=be(N,E),Me=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+te);const le=r.get(Me);if(Me.version!==le.__version||de===!0){i.activeTexture(s.TEXTURE0+te);const Ye=wt.getPrimaries(wt.workingColorSpace),we=E.colorSpace===Xa?null:wt.getPrimaries(E.colorSpace),je=E.colorSpace===Xa||Ye===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const qe=E.isCompressedTexture||E.image[0].isCompressedTexture,Ae=E.image[0]&&E.image[0].isDataTexture,De=[];for(let ve=0;ve<6;ve++)!qe&&!Ae?De[ve]=A(E.image[ve],!0,l.maxCubemapSize):De[ve]=Ae?E.image[ve].image:E.image[ve],De[ve]=$t(E,De[ve]);const Ze=De[0],Be=c.convert(E.format,E.colorSpace),Le=c.convert(E.type),ot=U(E.internalFormat,Be,Le,E.colorSpace),X=E.isVideoTexture!==!0,Re=le.__version===void 0||de===!0,Ue=Me.dataReady;let Ie=G(E,Ze);ie(s.TEXTURE_CUBE_MAP,E);let Ee;if(qe){X&&Re&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ot,Ze.width,Ze.height);for(let ve=0;ve<6;ve++){Ee=De[ve].mipmaps;for(let He=0;He<Ee.length;He++){const at=Ee[He];E.format!==yi?Be!==null?X?Ue&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,0,0,at.width,at.height,Be,at.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,ot,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ue&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,0,0,at.width,at.height,Be,Le,at.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,ot,at.width,at.height,0,Be,Le,at.data)}}}else{if(Ee=E.mipmaps,X&&Re){Ee.length>0&&Ie++;const ve=Kt(De[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ot,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ae){X?Ue&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,De[ve].width,De[ve].height,Be,Le,De[ve].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ot,De[ve].width,De[ve].height,0,Be,Le,De[ve].data);for(let He=0;He<Ee.length;He++){const Ot=Ee[He].image[ve].image;X?Ue&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,0,0,Ot.width,Ot.height,Be,Le,Ot.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,ot,Ot.width,Ot.height,0,Be,Le,Ot.data)}}else{X?Ue&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Be,Le,De[ve]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ot,Be,Le,De[ve]);for(let He=0;He<Ee.length;He++){const at=Ee[He];X?Ue&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,0,0,Be,Le,at.image[ve]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,ot,Be,Le,at.image[ve])}}}S(E)&&_(s.TEXTURE_CUBE_MAP),le.__version=Me.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Ge(N,E,te,de,Me,le){const Ye=c.convert(te.format,te.colorSpace),we=c.convert(te.type),je=U(te.internalFormat,Ye,we,te.colorSpace),qe=r.get(E),Ae=r.get(te);if(Ae.__renderTarget=E,!qe.__hasExternalTextures){const De=Math.max(1,E.width>>le),Ze=Math.max(1,E.height>>le);Me===s.TEXTURE_3D||Me===s.TEXTURE_2D_ARRAY?i.texImage3D(Me,le,je,De,Ze,E.depth,0,Ye,we,null):i.texImage2D(Me,le,je,De,Ze,0,Ye,we,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),Fe(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,Me,Ae.__webglTexture,0,Vt(E)):(Me===s.TEXTURE_2D||Me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,Me,Ae.__webglTexture,le),i.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(N,E,te){if(s.bindRenderbuffer(s.RENDERBUFFER,N),E.depthBuffer){const de=E.depthTexture,Me=de&&de.isDepthTexture?de.type:null,le=C(E.stencilBuffer,Me),Ye=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=Vt(E);Fe(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,le,E.width,E.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,le,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,le,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ye,s.RENDERBUFFER,N)}else{const de=E.textures;for(let Me=0;Me<de.length;Me++){const le=de[Me],Ye=c.convert(le.format,le.colorSpace),we=c.convert(le.type),je=U(le.internalFormat,Ye,we,le.colorSpace),qe=Vt(E);te&&Fe(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,je,E.width,E.height):Fe(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe,je,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,je,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function nt(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=r.get(E.depthTexture);de.__renderTarget=E,(!de.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ge(E.depthTexture,0);const Me=de.__webglTexture,le=Vt(E);if(E.depthTexture.format===Wo)Fe(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Me,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Me,0);else if(E.depthTexture.format===jo)Fe(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Me,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function Wt(N){const E=r.get(N),te=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const de=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),de){const Me=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,de.removeEventListener("dispose",Me)};de.addEventListener("dispose",Me),E.__depthDisposeCallback=Me}E.__boundDepthTexture=de}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");const de=N.texture.mipmaps;de&&de.length>0?nt(E.__webglFramebuffer[0],N):nt(E.__webglFramebuffer,N)}else if(te){E.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[de]),E.__webglDepthbuffer[de]===void 0)E.__webglDepthbuffer[de]=s.createRenderbuffer(),ze(E.__webglDepthbuffer[de],N,!1);else{const Me=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,le)}}else{const de=N.texture.mipmaps;if(de&&de.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),ze(E.__webglDepthbuffer,N,!1);else{const Me=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,le)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function ht(N,E,te){const de=r.get(N);E!==void 0&&Ge(de.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&Wt(N)}function V(N){const E=N.texture,te=r.get(N),de=r.get(E);N.addEventListener("dispose",P);const Me=N.textures,le=N.isWebGLCubeRenderTarget===!0,Ye=Me.length>1;if(Ye||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=E.version,f.memory.textures++),le){te.__webglFramebuffer=[];for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0){te.__webglFramebuffer[we]=[];for(let je=0;je<E.mipmaps.length;je++)te.__webglFramebuffer[we][je]=s.createFramebuffer()}else te.__webglFramebuffer[we]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){te.__webglFramebuffer=[];for(let we=0;we<E.mipmaps.length;we++)te.__webglFramebuffer[we]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(Ye)for(let we=0,je=Me.length;we<je;we++){const qe=r.get(Me[we]);qe.__webglTexture===void 0&&(qe.__webglTexture=s.createTexture(),f.memory.textures++)}if(N.samples>0&&Fe(N)===!1){te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let we=0;we<Me.length;we++){const je=Me[we];te.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[we]);const qe=c.convert(je.format,je.colorSpace),Ae=c.convert(je.type),De=U(je.internalFormat,qe,Ae,je.colorSpace,N.isXRRenderTarget===!0),Ze=Vt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,De,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,te.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),ze(te.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(le){i.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),ie(s.TEXTURE_CUBE_MAP,E);for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0)for(let je=0;je<E.mipmaps.length;je++)Ge(te.__webglFramebuffer[we][je],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,je);else Ge(te.__webglFramebuffer[we],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(E)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ye){for(let we=0,je=Me.length;we<je;we++){const qe=Me[we],Ae=r.get(qe);let De=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(De=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(De,Ae.__webglTexture),ie(De,qe),Ge(te.__webglFramebuffer,N,qe,s.COLOR_ATTACHMENT0+we,De,0),S(qe)&&_(De)}i.unbindTexture()}else{let we=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(we=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(we,de.__webglTexture),ie(we,E),E.mipmaps&&E.mipmaps.length>0)for(let je=0;je<E.mipmaps.length;je++)Ge(te.__webglFramebuffer[je],N,E,s.COLOR_ATTACHMENT0,we,je);else Ge(te.__webglFramebuffer,N,E,s.COLOR_ATTACHMENT0,we,0);S(E)&&_(we),i.unbindTexture()}N.depthBuffer&&Wt(N)}function Et(N){const E=N.textures;for(let te=0,de=E.length;te<de;te++){const Me=E[te];if(S(Me)){const le=L(N),Ye=r.get(Me).__webglTexture;i.bindTexture(le,Ye),_(le),i.unbindTexture()}}}const $e=[],yt=[];function Ke(N){if(N.samples>0){if(Fe(N)===!1){const E=N.textures,te=N.width,de=N.height;let Me=s.COLOR_BUFFER_BIT;const le=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ye=r.get(N),we=E.length>1;if(we)for(let qe=0;qe<E.length;qe++)i.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);const je=N.texture.mipmaps;je&&je.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let qe=0;qe<E.length;qe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Me|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Me|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[qe]);const Ae=r.get(E[qe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ae,0)}s.blitFramebuffer(0,0,te,de,0,0,te,de,Me,s.NEAREST),m===!0&&($e.length=0,yt.length=0,$e.push(s.COLOR_ATTACHMENT0+qe),N.depthBuffer&&N.resolveDepthBuffer===!1&&($e.push(le),yt.push(le),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,yt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,$e))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let qe=0;qe<E.length;qe++){i.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[qe]);const Ae=r.get(E[qe]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.TEXTURE_2D,Ae,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Vt(N){return Math.min(l.maxSamples,N.samples)}function Fe(N){const E=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function st(N){const E=f.render.frame;v.get(N)!==E&&(v.set(N,E),N.update())}function $t(N,E){const te=N.colorSpace,de=N.format,Me=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||te!==Ns&&te!==Xa&&(wt.getTransfer(te)===Ht?(de!==yi||Me!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),E}function Kt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=oe,this.resetTextureUnits=ue,this.setTexture2D=ge,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=Z,this.rebindTextures=ht,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=Fe}function dR(s,e){function i(r,l=Xa){let c;const f=wt.getTransfer(l);if(r===Pi)return s.UNSIGNED_BYTE;if(r===ep)return s.UNSIGNED_SHORT_4_4_4_4;if(r===tp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===P_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===N_)return s.BYTE;if(r===O_)return s.SHORT;if(r===ko)return s.UNSIGNED_SHORT;if(r===$h)return s.INT;if(r===Ar)return s.UNSIGNED_INT;if(r===ca)return s.FLOAT;if(r===Qo)return s.HALF_FLOAT;if(r===z_)return s.ALPHA;if(r===B_)return s.RGB;if(r===yi)return s.RGBA;if(r===Wo)return s.DEPTH_COMPONENT;if(r===jo)return s.DEPTH_STENCIL;if(r===I_)return s.RED;if(r===np)return s.RED_INTEGER;if(r===F_)return s.RG;if(r===ip)return s.RG_INTEGER;if(r===ap)return s.RGBA_INTEGER;if(r===Fc||r===Hc||r===Gc||r===Vc)if(f===Ht)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Fc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Fc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Vc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===mh||r===gh||r===vh||r===_h)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===mh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===gh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_h)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xh||r===yh||r===Sh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===xh||r===yh)return f===Ht?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Sh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Mh||r===Eh||r===bh||r===Th||r===Ah||r===Rh||r===Ch||r===wh||r===Dh||r===Uh||r===Lh||r===Nh||r===Oh||r===Ph)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Mh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Eh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Th)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ah)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Rh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ch)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Dh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Uh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Lh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Nh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Oh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ph)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===kc||r===zh||r===Bh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===kc)return f===Ht?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Bh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===H_||r===Ih||r===Fh||r===Hh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===kc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ih)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Fh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Hh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}class lx extends Nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const hR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new lx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ya({vertexShader:hR,fragmentShader:pR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Si(new tu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gR extends Bs{constructor(e,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,v=null,g=null,x=null,M=null,b=null;const A=new mR,S={},_=i.getContextAttributes();let L=null,U=null;const C=[],G=[],H=new Dt;let P=null;const j=new $n;j.viewport=new Gt;const w=new $n;w.viewport=new Gt;const D=[j,w],F=new Bb;let ue=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let xe=C[Q];return xe===void 0&&(xe=new Vd,C[Q]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(Q){let xe=C[Q];return xe===void 0&&(xe=new Vd,C[Q]=xe),xe.getGripSpace()},this.getHand=function(Q){let xe=C[Q];return xe===void 0&&(xe=new Vd,C[Q]=xe),xe.getHandSpace()};function he(Q){const xe=G.indexOf(Q.inputSource);if(xe===-1)return;const _e=C[xe];_e!==void 0&&(_e.update(Q.inputSource,Q.frame,p||f),_e.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ge(){l.removeEventListener("select",he),l.removeEventListener("selectstart",he),l.removeEventListener("selectend",he),l.removeEventListener("squeeze",he),l.removeEventListener("squeezestart",he),l.removeEventListener("squeezeend",he),l.removeEventListener("end",ge),l.removeEventListener("inputsourceschange",z);for(let Q=0;Q<C.length;Q++){const xe=G[Q];xe!==null&&(G[Q]=null,C[Q].disconnect(xe))}ue=null,oe=null,A.reset();for(const Q in S)delete S[Q];e.setRenderTarget(L),M=null,x=null,g=null,l=null,U=null,Ce.stop(),r.isPresenting=!1,e.setPixelRatio(P),e.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",he),l.addEventListener("selectstart",he),l.addEventListener("selectend",he),l.addEventListener("squeeze",he),l.addEventListener("squeezestart",he),l.addEventListener("squeezeend",he),l.addEventListener("end",ge),l.addEventListener("inputsourceschange",z),_.xrCompatible!==!0&&await i.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(H),typeof XRWebGLBinding<"u"&&(g=new XRWebGLBinding(l,i)),g!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ge=null,ze=null;_.depth&&(ze=_.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,_e=_.stencil?jo:Wo,Ge=_.stencil?Xo:Ar);const nt={colorFormat:i.RGBA8,depthFormat:ze,scaleFactor:c};x=g.createProjectionLayer(nt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),U=new Rr(x.textureWidth,x.textureHeight,{format:yi,type:Pi,depthTexture:new tx(x.textureWidth,x.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const _e={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,_e),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Rr(M.framebufferWidth,M.framebufferHeight,{format:yi,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Ce.setContext(l),Ce.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function z(Q){for(let xe=0;xe<Q.removed.length;xe++){const _e=Q.removed[xe],Ge=G.indexOf(_e);Ge>=0&&(G[Ge]=null,C[Ge].disconnect(_e))}for(let xe=0;xe<Q.added.length;xe++){const _e=Q.added[xe];let Ge=G.indexOf(_e);if(Ge===-1){for(let nt=0;nt<C.length;nt++)if(nt>=G.length){G.push(_e),Ge=nt;break}else if(G[nt]===null){G[nt]=_e,Ge=nt;break}if(Ge===-1)break}const ze=C[Ge];ze&&ze.connect(_e)}}const K=new $,Z=new $;function Se(Q,xe,_e){K.setFromMatrixPosition(xe.matrixWorld),Z.setFromMatrixPosition(_e.matrixWorld);const Ge=K.distanceTo(Z),ze=xe.projectionMatrix.elements,nt=_e.projectionMatrix.elements,Wt=ze[14]/(ze[10]-1),ht=ze[14]/(ze[10]+1),V=(ze[9]+1)/ze[5],Et=(ze[9]-1)/ze[5],$e=(ze[8]-1)/ze[0],yt=(nt[8]+1)/nt[0],Ke=Wt*$e,Vt=Wt*yt,Fe=Ge/(-$e+yt),st=Fe*-$e;if(xe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(st),Q.translateZ(Fe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ze[10]===-1)Q.projectionMatrix.copy(xe.projectionMatrix),Q.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const $t=Wt+Fe,Kt=ht+Fe,N=Ke-st,E=Vt+(Ge-st),te=V*ht/Kt*$t,de=Et*ht/Kt*$t;Q.projectionMatrix.makePerspective(N,E,te,de,$t,Kt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Te(Q,xe){xe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(xe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let xe=Q.near,_e=Q.far;A.texture!==null&&(A.depthNear>0&&(xe=A.depthNear),A.depthFar>0&&(_e=A.depthFar)),F.near=w.near=j.near=xe,F.far=w.far=j.far=_e,(ue!==F.near||oe!==F.far)&&(l.updateRenderState({depthNear:F.near,depthFar:F.far}),ue=F.near,oe=F.far),F.layers.mask=Q.layers.mask|6,j.layers.mask=F.layers.mask&3,w.layers.mask=F.layers.mask&5;const Ge=Q.parent,ze=F.cameras;Te(F,Ge);for(let nt=0;nt<ze.length;nt++)Te(ze[nt],Ge);ze.length===2?Se(F,j,w):F.projectionMatrix.copy(j.projectionMatrix),O(Q,F,Ge)};function O(Q,xe,_e){_e===null?Q.matrix.copy(xe.matrixWorld):(Q.matrix.copy(_e.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(xe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(xe.projectionMatrix),Q.projectionMatrixInverse.copy(xe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Gh*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(F)},this.getCameraTexture=function(Q){return S[Q]};let ie=null;function be(Q,xe){if(v=xe.getViewerPose(p||f),b=xe,v!==null){const _e=v.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let Ge=!1;_e.length!==F.cameras.length&&(F.cameras.length=0,Ge=!0);for(let ht=0;ht<_e.length;ht++){const V=_e[ht];let Et=null;if(M!==null)Et=M.getViewport(V);else{const yt=g.getViewSubImage(x,V);Et=yt.viewport,ht===0&&(e.setRenderTargetTextures(U,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(U))}let $e=D[ht];$e===void 0&&($e=new $n,$e.layers.enable(ht),$e.viewport=new Gt,D[ht]=$e),$e.matrix.fromArray(V.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(V.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(Et.x,Et.y,Et.width,Et.height),ht===0&&(F.matrix.copy($e.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ge===!0&&F.cameras.push($e)}const ze=l.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&g){const ht=g.getDepthInformation(_e[0]);ht&&ht.isValid&&ht.texture&&A.init(ht,l.renderState)}if(ze&&ze.includes("camera-access")&&(e.state.unbindTexture(),g))for(let ht=0;ht<_e.length;ht++){const V=_e[ht].camera;if(V){let Et=S[V];Et||(Et=new lx,S[V]=Et);const $e=g.getCameraImage(V);Et.sourceTexture=$e}}}for(let _e=0;_e<C.length;_e++){const Ge=G[_e],ze=C[_e];Ge!==null&&ze!==void 0&&ze.update(Ge,xe,p||f)}ie&&ie(Q,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),b=null}const Ce=new ix;Ce.setAnimationLoop(be),this.setAnimationLoop=function(Q){ie=Q},this.dispose=function(){}}}const xr=new zi,vR=new Jt;function _R(s,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,Q_(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,L,U,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),g(S,_)):_.isMeshPhongMaterial?(c(S,_),v(S,_)):_.isMeshStandardMaterial?(c(S,_),x(S,_),_.isMeshPhysicalMaterial&&M(S,_,C)):_.isMeshMatcapMaterial?(c(S,_),b(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),A(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?m(S,_,L,U):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Vn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Vn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const L=e.get(_),U=L.envMap,C=L.envMapRotation;U&&(S.envMap.value=U,xr.copy(C),xr.x*=-1,xr.y*=-1,xr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),S.envMapRotation.value.setFromMatrix4(vR.makeRotationFromEuler(xr)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,L,U){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*L,S.scale.value=U*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function g(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,L){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Vn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,_){_.matcap&&(S.matcap.value=_.matcap)}function A(S,_){const L=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function xR(s,e,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,U){const C=U.program;r.uniformBlockBinding(L,C)}function p(L,U){let C=l[L.id];C===void 0&&(b(L),C=v(L),l[L.id]=C,L.addEventListener("dispose",S));const G=U.program;r.updateUBOMapping(L,G);const H=e.render.frame;c[L.id]!==H&&(x(L),c[L.id]=H)}function v(L){const U=g();L.__bindingPointIndex=U;const C=s.createBuffer(),G=L.__size,H=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,G,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,C),C}function g(){for(let L=0;L<h;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const U=l[L.id],C=L.uniforms,G=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let H=0,P=C.length;H<P;H++){const j=Array.isArray(C[H])?C[H]:[C[H]];for(let w=0,D=j.length;w<D;w++){const F=j[w];if(M(F,H,w,G)===!0){const ue=F.__offset,oe=Array.isArray(F.value)?F.value:[F.value];let he=0;for(let ge=0;ge<oe.length;ge++){const z=oe[ge],K=A(z);typeof z=="number"||typeof z=="boolean"?(F.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,ue+he,F.__data)):z.isMatrix3?(F.__data[0]=z.elements[0],F.__data[1]=z.elements[1],F.__data[2]=z.elements[2],F.__data[3]=0,F.__data[4]=z.elements[3],F.__data[5]=z.elements[4],F.__data[6]=z.elements[5],F.__data[7]=0,F.__data[8]=z.elements[6],F.__data[9]=z.elements[7],F.__data[10]=z.elements[8],F.__data[11]=0):(z.toArray(F.__data,he),he+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ue,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(L,U,C,G){const H=L.value,P=U+"_"+C;if(G[P]===void 0)return typeof H=="number"||typeof H=="boolean"?G[P]=H:G[P]=H.clone(),!0;{const j=G[P];if(typeof H=="number"||typeof H=="boolean"){if(j!==H)return G[P]=H,!0}else if(j.equals(H)===!1)return j.copy(H),!0}return!1}function b(L){const U=L.uniforms;let C=0;const G=16;for(let P=0,j=U.length;P<j;P++){const w=Array.isArray(U[P])?U[P]:[U[P]];for(let D=0,F=w.length;D<F;D++){const ue=w[D],oe=Array.isArray(ue.value)?ue.value:[ue.value];for(let he=0,ge=oe.length;he<ge;he++){const z=oe[he],K=A(z),Z=C%G,Se=Z%K.boundary,Te=Z+Se;C+=Se,Te!==0&&G-Te<K.storage&&(C+=G-Te),ue.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=C,C+=K.storage}}}const H=C%G;return H>0&&(C+=G-H),L.__size=C,L.__cache={},this}function A(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),U}function S(L){const U=L.target;U.removeEventListener("dispose",S);const C=f.indexOf(U.__bindingPointIndex);f.splice(C,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function _(){for(const L in l)s.deleteBuffer(l[L]);f=[],l={},c={}}return{bind:m,update:p,dispose:_}}class yR{constructor(e={}){const{canvas:i=KE(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=f;const b=new Uint32Array(4),A=new Int32Array(4);let S=null,_=null;const L=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let G=!1;this._outputColorSpace=ui;let H=0,P=0,j=null,w=-1,D=null;const F=new Gt,ue=new Gt;let oe=null;const he=new At(0);let ge=0,z=i.width,K=i.height,Z=1,Se=null,Te=null;const O=new Gt(0,0,z,K),ie=new Gt(0,0,z,K);let be=!1;const Ce=new sp;let Q=!1,xe=!1;const _e=new Jt,Ge=new $,ze=new Gt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function ht(){return j===null?Z:1}let V=r;function Et(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Qh}`),i.addEventListener("webglcontextlost",Ue,!1),i.addEventListener("webglcontextrestored",Ie,!1),i.addEventListener("webglcontextcreationerror",Ee,!1),V===null){const W="webgl2";if(V=Et(W,R),V===null)throw Et(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let $e,yt,Ke,Vt,Fe,st,$t,Kt,N,E,te,de,Me,le,Ye,we,je,qe,Ae,De,Ze,Be,Le,ot;function X(){$e=new DA(V),$e.init(),Be=new dR(V,$e),yt=new EA(V,$e,e,Be),Ke=new uR(V,$e),yt.reversedDepthBuffer&&x&&Ke.buffers.depth.setReversed(!0),Vt=new NA(V),Fe=new Q2,st=new fR(V,$e,Ke,Fe,yt,Be,Vt),$t=new TA(C),Kt=new wA(C),N=new Fb(V),Le=new SA(V,N),E=new UA(V,N,Vt,Le),te=new PA(V,E,N,Vt),Ae=new OA(V,yt,st),we=new bA(Fe),de=new K2(C,$t,Kt,$e,yt,Le,we),Me=new _R(C,Fe),le=new $2,Ye=new rR($e),qe=new yA(C,$t,Kt,Ke,te,M,m),je=new lR(C,te,yt),ot=new xR(V,Vt,yt,Ke),De=new MA(V,$e,Vt),Ze=new LA(V,$e,Vt),Vt.programs=de.programs,C.capabilities=yt,C.extensions=$e,C.properties=Fe,C.renderLists=le,C.shadowMap=je,C.state=Ke,C.info=Vt}X();const Re=new gR(C,V);this.xr=Re,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=$e.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=$e.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(z,K,!1))},this.getSize=function(R){return R.set(z,K)},this.setSize=function(R,W,ae=!0){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,K=W,i.width=Math.floor(R*Z),i.height=Math.floor(W*Z),ae===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(z*Z,K*Z).floor()},this.setDrawingBufferSize=function(R,W,ae){z=R,K=W,Z=ae,i.width=Math.floor(R*ae),i.height=Math.floor(W*ae),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(O)},this.setViewport=function(R,W,ae,re){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,W,ae,re),Ke.viewport(F.copy(O).multiplyScalar(Z).round())},this.getScissor=function(R){return R.copy(ie)},this.setScissor=function(R,W,ae,re){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,W,ae,re),Ke.scissor(ue.copy(ie).multiplyScalar(Z).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(R){Ke.setScissorTest(be=R)},this.setOpaqueSort=function(R){Se=R},this.setTransparentSort=function(R){Te=R},this.getClearColor=function(R){return R.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,ae=!0){let re=0;if(R){let q=!1;if(j!==null){const ye=j.texture.format;q=ye===ap||ye===ip||ye===np}if(q){const ye=j.texture.type,Ne=ye===Pi||ye===Ar||ye===ko||ye===Xo||ye===ep||ye===tp,ke=qe.getClearColor(),Pe=qe.getClearAlpha(),Qe=ke.r,it=ke.g,Je=ke.b;Ne?(b[0]=Qe,b[1]=it,b[2]=Je,b[3]=Pe,V.clearBufferuiv(V.COLOR,0,b)):(A[0]=Qe,A[1]=it,A[2]=Je,A[3]=Pe,V.clearBufferiv(V.COLOR,0,A))}else re|=V.COLOR_BUFFER_BIT}W&&(re|=V.DEPTH_BUFFER_BIT),ae&&(re|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ue,!1),i.removeEventListener("webglcontextrestored",Ie,!1),i.removeEventListener("webglcontextcreationerror",Ee,!1),qe.dispose(),le.dispose(),Ye.dispose(),Fe.dispose(),$t.dispose(),Kt.dispose(),te.dispose(),Le.dispose(),ot.dispose(),de.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",ei),Re.removeEventListener("sessionend",Gs),Ti.stop()};function Ue(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const R=Vt.autoReset,W=je.enabled,ae=je.autoUpdate,re=je.needsUpdate,q=je.type;X(),Vt.autoReset=R,je.enabled=W,je.autoUpdate=ae,je.needsUpdate=re,je.type=q}function Ee(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ve(R){const W=R.target;W.removeEventListener("dispose",ve),He(W)}function He(R){at(R),Fe.remove(R)}function at(R){const W=Fe.get(R).programs;W!==void 0&&(W.forEach(function(ae){de.releaseProgram(ae)}),R.isShaderMaterial&&de.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,ae,re,q,ye){W===null&&(W=nt);const Ne=q.isMesh&&q.matrixWorld.determinant()<0,ke=pa(R,W,ae,re,q);Ke.setMaterial(re,Ne);let Pe=ae.index,Qe=1;if(re.wireframe===!0){if(Pe=E.getWireframeAttribute(ae),Pe===void 0)return;Qe=2}const it=ae.drawRange,Je=ae.attributes.position;let dt=it.start*Qe,Lt=(it.start+it.count)*Qe;ye!==null&&(dt=Math.max(dt,ye.start*Qe),Lt=Math.min(Lt,(ye.start+ye.count)*Qe)),Pe!==null?(dt=Math.max(dt,0),Lt=Math.min(Lt,Pe.count)):Je!=null&&(dt=Math.max(dt,0),Lt=Math.min(Lt,Je.count));const kt=Lt-dt;if(kt<0||kt===1/0)return;Le.setup(q,re,ke,ae,Pe);let Nt,pt=De;if(Pe!==null&&(Nt=N.get(Pe),pt=Ze,pt.setIndex(Nt)),q.isMesh)re.wireframe===!0?(Ke.setLineWidth(re.wireframeLinewidth*ht()),pt.setMode(V.LINES)):pt.setMode(V.TRIANGLES);else if(q.isLine){let Xe=re.linewidth;Xe===void 0&&(Xe=1),Ke.setLineWidth(Xe*ht()),q.isLineSegments?pt.setMode(V.LINES):q.isLineLoop?pt.setMode(V.LINE_LOOP):pt.setMode(V.LINE_STRIP)}else q.isPoints?pt.setMode(V.POINTS):q.isSprite&&pt.setMode(V.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Cs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))pt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Xe=q._multiDrawStarts,jt=q._multiDrawCounts,Tt=q._multiDrawCount,yn=Pe?N.get(Pe).bytesPerElement:1,Ii=Fe.get(re).currentProgram.getUniforms();for(let gn=0;gn<Tt;gn++)Ii.setValue(V,"_gl_DrawID",gn),pt.render(Xe[gn]/yn,jt[gn])}else if(q.isInstancedMesh)pt.renderInstances(dt,kt,q.count);else if(ae.isInstancedBufferGeometry){const Xe=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,jt=Math.min(ae.instanceCount,Xe);pt.renderInstances(dt,kt,jt)}else pt.render(dt,kt)};function Ot(R,W,ae){R.transparent===!0&&R.side===la&&R.forceSinglePass===!1?(R.side=Vn,R.needsUpdate=!0,kn(R,W,ae),R.side=qa,R.needsUpdate=!0,kn(R,W,ae),R.side=la):kn(R,W,ae)}this.compile=function(R,W,ae=null){ae===null&&(ae=R),_=Ye.get(ae),_.init(W),U.push(_),ae.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),R!==ae&&R.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),_.setupLights();const re=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ye=q.material;if(ye)if(Array.isArray(ye))for(let Ne=0;Ne<ye.length;Ne++){const ke=ye[Ne];Ot(ke,ae,q),re.add(ke)}else Ot(ye,ae,q),re.add(ye)}),_=U.pop(),re},this.compileAsync=function(R,W,ae=null){const re=this.compile(R,W,ae);return new Promise(q=>{function ye(){if(re.forEach(function(Ne){Fe.get(Ne).currentProgram.isReady()&&re.delete(Ne)}),re.size===0){q(R);return}setTimeout(ye,10)}$e.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let bt=null;function wn(R){bt&&bt(R)}function ei(){Ti.stop()}function Gs(){Ti.start()}const Ti=new ix;Ti.setAnimationLoop(wn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(R){bt=R,Re.setAnimationLoop(R),R===null?Ti.stop():Ti.start()},Re.addEventListener("sessionstart",ei),Re.addEventListener("sessionend",Gs),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(W),W=Re.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,W,j),_=Ye.get(R,U.length),_.init(W),U.push(_),_e.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ce.setFromProjectionMatrix(_e,Ni,W.reversedDepth),xe=this.localClippingEnabled,Q=we.init(this.clippingPlanes,xe),S=le.get(R,L.length),S.init(),L.push(S),Re.enabled===!0&&Re.isPresenting===!0){const ye=C.xr.getDepthSensingMesh();ye!==null&&wr(ye,W,-1/0,C.sortObjects)}wr(R,W,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(Se,Te),Wt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Wt&&qe.addToRenderList(S,R),this.info.render.frame++,Q===!0&&we.beginShadows();const ae=_.state.shadowsArray;je.render(ae,R,W),Q===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=S.opaque,q=S.transmissive;if(_.setupLights(),W.isArrayCamera){const ye=W.cameras;if(q.length>0)for(let Ne=0,ke=ye.length;Ne<ke;Ne++){const Pe=ye[Ne];Ur(re,q,R,Pe)}Wt&&qe.render(R);for(let Ne=0,ke=ye.length;Ne<ke;Ne++){const Pe=ye[Ne];Dr(S,R,Pe,Pe.viewport)}}else q.length>0&&Ur(re,q,R,W),Wt&&qe.render(R),Dr(S,R,W);j!==null&&P===0&&(st.updateMultisampleRenderTarget(j),st.updateRenderTargetMipmap(j)),R.isScene===!0&&R.onAfterRender(C,R,W),Le.resetDefaultState(),w=-1,D=null,U.pop(),U.length>0?(_=U[U.length-1],Q===!0&&we.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function wr(R,W,ae,re){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ce.intersectsSprite(R)){re&&ze.setFromMatrixPosition(R.matrixWorld).applyMatrix4(_e);const Ne=te.update(R),ke=R.material;ke.visible&&S.push(R,Ne,ke,ae,ze.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ce.intersectsObject(R))){const Ne=te.update(R),ke=R.material;if(re&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ze.copy(R.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),ze.copy(Ne.boundingSphere.center)),ze.applyMatrix4(R.matrixWorld).applyMatrix4(_e)),Array.isArray(ke)){const Pe=Ne.groups;for(let Qe=0,it=Pe.length;Qe<it;Qe++){const Je=Pe[Qe],dt=ke[Je.materialIndex];dt&&dt.visible&&S.push(R,Ne,dt,ae,ze.z,Je)}}else ke.visible&&S.push(R,Ne,ke,ae,ze.z,null)}}const ye=R.children;for(let Ne=0,ke=ye.length;Ne<ke;Ne++)wr(ye[Ne],W,ae,re)}function Dr(R,W,ae,re){const q=R.opaque,ye=R.transmissive,Ne=R.transparent;_.setupLightsView(ae),Q===!0&&we.setGlobalState(C.clippingPlanes,ae),re&&Ke.viewport(F.copy(re)),q.length>0&&Za(q,W,ae),ye.length>0&&Za(ye,W,ae),Ne.length>0&&Za(Ne,W,ae),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Ur(R,W,ae,re){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[re.id]===void 0&&(_.state.transmissionRenderTarget[re.id]=new Rr(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?Qo:Pi,minFilter:Tr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const ye=_.state.transmissionRenderTarget[re.id],Ne=re.viewport||F;ye.setSize(Ne.z*C.transmissionResolutionScale,Ne.w*C.transmissionResolutionScale);const ke=C.getRenderTarget(),Pe=C.getActiveCubeFace(),Qe=C.getActiveMipmapLevel();C.setRenderTarget(ye),C.getClearColor(he),ge=C.getClearAlpha(),ge<1&&C.setClearColor(16777215,.5),C.clear(),Wt&&qe.render(ae);const it=C.toneMapping;C.toneMapping=ja;const Je=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),_.setupLightsView(re),Q===!0&&we.setGlobalState(C.clippingPlanes,re),Za(R,ae,re),st.updateMultisampleRenderTarget(ye),st.updateRenderTargetMipmap(ye),$e.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Lt=0,kt=W.length;Lt<kt;Lt++){const Nt=W[Lt],pt=Nt.object,Xe=Nt.geometry,jt=Nt.material,Tt=Nt.group;if(jt.side===la&&pt.layers.test(re.layers)){const yn=jt.side;jt.side=Vn,jt.needsUpdate=!0,Vs(pt,ae,re,Xe,jt,Tt),jt.side=yn,jt.needsUpdate=!0,dt=!0}}dt===!0&&(st.updateMultisampleRenderTarget(ye),st.updateRenderTargetMipmap(ye))}C.setRenderTarget(ke,Pe,Qe),C.setClearColor(he,ge),Je!==void 0&&(re.viewport=Je),C.toneMapping=it}function Za(R,W,ae){const re=W.isScene===!0?W.overrideMaterial:null;for(let q=0,ye=R.length;q<ye;q++){const Ne=R[q],ke=Ne.object,Pe=Ne.geometry,Qe=Ne.group;let it=Ne.material;it.allowOverride===!0&&re!==null&&(it=re),ke.layers.test(ae.layers)&&Vs(ke,W,ae,Pe,it,Qe)}}function Vs(R,W,ae,re,q,ye){R.onBeforeRender(C,W,ae,re,q,ye),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(C,W,ae,re,R,ye),q.transparent===!0&&q.side===la&&q.forceSinglePass===!1?(q.side=Vn,q.needsUpdate=!0,C.renderBufferDirect(ae,W,re,q,R,ye),q.side=qa,q.needsUpdate=!0,C.renderBufferDirect(ae,W,re,q,R,ye),q.side=la):C.renderBufferDirect(ae,W,re,q,R,ye),R.onAfterRender(C,W,ae,re,q,ye)}function kn(R,W,ae){W.isScene!==!0&&(W=nt);const re=Fe.get(R),q=_.state.lights,ye=_.state.shadowsArray,Ne=q.state.version,ke=de.getParameters(R,q.state,ye,W,ae),Pe=de.getProgramCacheKey(ke);let Qe=re.programs;re.environment=R.isMeshStandardMaterial?W.environment:null,re.fog=W.fog,re.envMap=(R.isMeshStandardMaterial?Kt:$t).get(R.envMap||re.environment),re.envMapRotation=re.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Qe===void 0&&(R.addEventListener("dispose",ve),Qe=new Map,re.programs=Qe);let it=Qe.get(Pe);if(it!==void 0){if(re.currentProgram===it&&re.lightsStateVersion===Ne)return xn(R,ke),it}else ke.uniforms=de.getUniforms(R),R.onBeforeCompile(ke,C),it=de.acquireProgram(ke,Pe),Qe.set(Pe,it),re.uniforms=ke.uniforms;const Je=re.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Je.clippingPlanes=we.uniform),xn(R,ke),re.needsLights=iu(R),re.lightsStateVersion=Ne,re.needsLights&&(Je.ambientLightColor.value=q.state.ambient,Je.lightProbe.value=q.state.probe,Je.directionalLights.value=q.state.directional,Je.directionalLightShadows.value=q.state.directionalShadow,Je.spotLights.value=q.state.spot,Je.spotLightShadows.value=q.state.spotShadow,Je.rectAreaLights.value=q.state.rectArea,Je.ltc_1.value=q.state.rectAreaLTC1,Je.ltc_2.value=q.state.rectAreaLTC2,Je.pointLights.value=q.state.point,Je.pointLightShadows.value=q.state.pointShadow,Je.hemisphereLights.value=q.state.hemi,Je.directionalShadowMap.value=q.state.directionalShadowMap,Je.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Je.spotShadowMap.value=q.state.spotShadowMap,Je.spotLightMatrix.value=q.state.spotLightMatrix,Je.spotLightMap.value=q.state.spotLightMap,Je.pointShadowMap.value=q.state.pointShadowMap,Je.pointShadowMatrix.value=q.state.pointShadowMatrix),re.currentProgram=it,re.uniformsList=null,it}function sn(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Xc.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function xn(R,W){const ae=Fe.get(R);ae.outputColorSpace=W.outputColorSpace,ae.batching=W.batching,ae.batchingColor=W.batchingColor,ae.instancing=W.instancing,ae.instancingColor=W.instancingColor,ae.instancingMorph=W.instancingMorph,ae.skinning=W.skinning,ae.morphTargets=W.morphTargets,ae.morphNormals=W.morphNormals,ae.morphColors=W.morphColors,ae.morphTargetsCount=W.morphTargetsCount,ae.numClippingPlanes=W.numClippingPlanes,ae.numIntersection=W.numClipIntersection,ae.vertexAlphas=W.vertexAlphas,ae.vertexTangents=W.vertexTangents,ae.toneMapping=W.toneMapping}function pa(R,W,ae,re,q){W.isScene!==!0&&(W=nt),st.resetTextureUnits();const ye=W.fog,Ne=re.isMeshStandardMaterial?W.environment:null,ke=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ns,Pe=(re.isMeshStandardMaterial?Kt:$t).get(re.envMap||Ne),Qe=re.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,it=!!ae.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Je=!!ae.morphAttributes.position,dt=!!ae.morphAttributes.normal,Lt=!!ae.morphAttributes.color;let kt=ja;re.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(kt=C.toneMapping);const Nt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,pt=Nt!==void 0?Nt.length:0,Xe=Fe.get(re),jt=_.state.lights;if(Q===!0&&(xe===!0||R!==D)){const dn=R===D&&re.id===w;we.setState(re,R,dn)}let Tt=!1;re.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==jt.state.version||Xe.outputColorSpace!==ke||q.isBatchedMesh&&Xe.batching===!1||!q.isBatchedMesh&&Xe.batching===!0||q.isBatchedMesh&&Xe.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Xe.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Xe.instancing===!1||!q.isInstancedMesh&&Xe.instancing===!0||q.isSkinnedMesh&&Xe.skinning===!1||!q.isSkinnedMesh&&Xe.skinning===!0||q.isInstancedMesh&&Xe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Xe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Xe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Xe.instancingMorph===!1&&q.morphTexture!==null||Xe.envMap!==Pe||re.fog===!0&&Xe.fog!==ye||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==we.numPlanes||Xe.numIntersection!==we.numIntersection)||Xe.vertexAlphas!==Qe||Xe.vertexTangents!==it||Xe.morphTargets!==Je||Xe.morphNormals!==dt||Xe.morphColors!==Lt||Xe.toneMapping!==kt||Xe.morphTargetsCount!==pt)&&(Tt=!0):(Tt=!0,Xe.__version=re.version);let yn=Xe.currentProgram;Tt===!0&&(yn=kn(re,W,q));let Ii=!1,gn=!1,Qa=!1;const vt=yn.getUniforms(),Tn=Xe.uniforms;if(Ke.useProgram(yn.program)&&(Ii=!0,gn=!0,Qa=!0),re.id!==w&&(w=re.id,gn=!0),Ii||D!==R){Ke.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),vt.setValue(V,"projectionMatrix",R.projectionMatrix),vt.setValue(V,"viewMatrix",R.matrixWorldInverse);const nn=vt.map.cameraPosition;nn!==void 0&&nn.setValue(V,Ge.setFromMatrixPosition(R.matrixWorld)),yt.logarithmicDepthBuffer&&vt.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&vt.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),D!==R&&(D=R,gn=!0,Qa=!0)}if(q.isSkinnedMesh){vt.setOptional(V,q,"bindMatrix"),vt.setOptional(V,q,"bindMatrixInverse");const dn=q.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),vt.setValue(V,"boneTexture",dn.boneTexture,st))}q.isBatchedMesh&&(vt.setOptional(V,q,"batchingTexture"),vt.setValue(V,"batchingTexture",q._matricesTexture,st),vt.setOptional(V,q,"batchingIdTexture"),vt.setValue(V,"batchingIdTexture",q._indirectTexture,st),vt.setOptional(V,q,"batchingColorTexture"),q._colorsTexture!==null&&vt.setValue(V,"batchingColorTexture",q._colorsTexture,st));const Dn=ae.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Ae.update(q,ae,yn),(gn||Xe.receiveShadow!==q.receiveShadow)&&(Xe.receiveShadow=q.receiveShadow,vt.setValue(V,"receiveShadow",q.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Tn.envMap.value=Pe,Tn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&W.environment!==null&&(Tn.envMapIntensity.value=W.environmentIntensity),gn&&(vt.setValue(V,"toneMappingExposure",C.toneMappingExposure),Xe.needsLights&&ks(Tn,Qa),ye&&re.fog===!0&&Me.refreshFogUniforms(Tn,ye),Me.refreshMaterialUniforms(Tn,re,Z,K,_.state.transmissionRenderTarget[R.id]),Xc.upload(V,sn(Xe),Tn,st)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Xc.upload(V,sn(Xe),Tn,st),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&vt.setValue(V,"center",q.center),vt.setValue(V,"modelViewMatrix",q.modelViewMatrix),vt.setValue(V,"normalMatrix",q.normalMatrix),vt.setValue(V,"modelMatrix",q.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const dn=re.uniformsGroups;for(let nn=0,Lr=dn.length;nn<Lr;nn++){const Ai=dn[nn];ot.update(Ai,yn),ot.bind(Ai,yn)}}return yn}function ks(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function iu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(R,W,ae){const re=Fe.get(R);re.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),Fe.get(R.texture).__webglTexture=W,Fe.get(R.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ae,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const ae=Fe.get(R);ae.__webglFramebuffer=W,ae.__useDefaultFramebuffer=W===void 0};const au=V.createFramebuffer();this.setRenderTarget=function(R,W=0,ae=0){j=R,H=W,P=ae;let re=!0,q=null,ye=!1,Ne=!1;if(R){const Pe=Fe.get(R);if(Pe.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(V.FRAMEBUFFER,null),re=!1;else if(Pe.__webglFramebuffer===void 0)st.setupRenderTarget(R);else if(Pe.__hasExternalTextures)st.rebindTextures(R,Fe.get(R.texture).__webglTexture,Fe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Je=R.depthTexture;if(Pe.__boundDepthTexture!==Je){if(Je!==null&&Fe.has(Je)&&(R.width!==Je.image.width||R.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(R)}}const Qe=R.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ne=!0);const it=Fe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(it[W])?q=it[W][ae]:q=it[W],ye=!0):R.samples>0&&st.useMultisampledRTT(R)===!1?q=Fe.get(R).__webglMultisampledFramebuffer:Array.isArray(it)?q=it[ae]:q=it,F.copy(R.viewport),ue.copy(R.scissor),oe=R.scissorTest}else F.copy(O).multiplyScalar(Z).floor(),ue.copy(ie).multiplyScalar(Z).floor(),oe=be;if(ae!==0&&(q=au),Ke.bindFramebuffer(V.FRAMEBUFFER,q)&&re&&Ke.drawBuffers(R,q),Ke.viewport(F),Ke.scissor(ue),Ke.setScissorTest(oe),ye){const Pe=Fe.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,Pe.__webglTexture,ae)}else if(Ne){const Pe=W;for(let Qe=0;Qe<R.textures.length;Qe++){const it=Fe.get(R.textures[Qe]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Qe,it.__webglTexture,ae,Pe)}}else if(R!==null&&ae!==0){const Pe=Fe.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Pe.__webglTexture,ae)}w=-1},this.readRenderTargetPixels=function(R,W,ae,re,q,ye,Ne,ke=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Fe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Pe=Pe[Ne]),Pe){Ke.bindFramebuffer(V.FRAMEBUFFER,Pe);try{const Qe=R.textures[ke],it=Qe.format,Je=Qe.type;if(!yt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-re&&ae>=0&&ae<=R.height-q&&(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+ke),V.readPixels(W,ae,re,q,Be.convert(it),Be.convert(Je),ye))}finally{const Qe=j!==null?Fe.get(j).__webglFramebuffer:null;Ke.bindFramebuffer(V.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(R,W,ae,re,q,ye,Ne,ke=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Fe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Pe=Pe[Ne]),Pe)if(W>=0&&W<=R.width-re&&ae>=0&&ae<=R.height-q){Ke.bindFramebuffer(V.FRAMEBUFFER,Pe);const Qe=R.textures[ke],it=Qe.format,Je=Qe.type;if(!yt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,dt),V.bufferData(V.PIXEL_PACK_BUFFER,ye.byteLength,V.STREAM_READ),R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+ke),V.readPixels(W,ae,re,q,Be.convert(it),Be.convert(Je),0);const Lt=j!==null?Fe.get(j).__webglFramebuffer:null;Ke.bindFramebuffer(V.FRAMEBUFFER,Lt);const kt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await QE(V,kt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,dt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,ye),V.deleteBuffer(dt),V.deleteSync(kt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,ae=0){const re=Math.pow(2,-ae),q=Math.floor(R.image.width*re),ye=Math.floor(R.image.height*re),Ne=W!==null?W.x:0,ke=W!==null?W.y:0;st.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,ae,0,0,Ne,ke,q,ye),Ke.unbindTexture()};const nl=V.createFramebuffer(),Ka=V.createFramebuffer();this.copyTextureToTexture=function(R,W,ae=null,re=null,q=0,ye=null){ye===null&&(q!==0?(Cs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=q,q=0):ye=0);let Ne,ke,Pe,Qe,it,Je,dt,Lt,kt;const Nt=R.isCompressedTexture?R.mipmaps[ye]:R.image;if(ae!==null)Ne=ae.max.x-ae.min.x,ke=ae.max.y-ae.min.y,Pe=ae.isBox3?ae.max.z-ae.min.z:1,Qe=ae.min.x,it=ae.min.y,Je=ae.isBox3?ae.min.z:0;else{const Dn=Math.pow(2,-q);Ne=Math.floor(Nt.width*Dn),ke=Math.floor(Nt.height*Dn),R.isDataArrayTexture?Pe=Nt.depth:R.isData3DTexture?Pe=Math.floor(Nt.depth*Dn):Pe=1,Qe=0,it=0,Je=0}re!==null?(dt=re.x,Lt=re.y,kt=re.z):(dt=0,Lt=0,kt=0);const pt=Be.convert(W.format),Xe=Be.convert(W.type);let jt;W.isData3DTexture?(st.setTexture3D(W,0),jt=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(st.setTexture2DArray(W,0),jt=V.TEXTURE_2D_ARRAY):(st.setTexture2D(W,0),jt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);const Tt=V.getParameter(V.UNPACK_ROW_LENGTH),yn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Ii=V.getParameter(V.UNPACK_SKIP_PIXELS),gn=V.getParameter(V.UNPACK_SKIP_ROWS),Qa=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Nt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Nt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Qe),V.pixelStorei(V.UNPACK_SKIP_ROWS,it),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Je);const vt=R.isDataArrayTexture||R.isData3DTexture,Tn=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const Dn=Fe.get(R),dn=Fe.get(W),nn=Fe.get(Dn.__renderTarget),Lr=Fe.get(dn.__renderTarget);Ke.bindFramebuffer(V.READ_FRAMEBUFFER,nn.__webglFramebuffer),Ke.bindFramebuffer(V.DRAW_FRAMEBUFFER,Lr.__webglFramebuffer);for(let Ai=0;Ai<Pe;Ai++)vt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Fe.get(R).__webglTexture,q,Je+Ai),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Fe.get(W).__webglTexture,ye,kt+Ai)),V.blitFramebuffer(Qe,it,Ne,ke,dt,Lt,Ne,ke,V.DEPTH_BUFFER_BIT,V.NEAREST);Ke.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(q!==0||R.isRenderTargetTexture||Fe.has(R)){const Dn=Fe.get(R),dn=Fe.get(W);Ke.bindFramebuffer(V.READ_FRAMEBUFFER,nl),Ke.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ka);for(let nn=0;nn<Pe;nn++)vt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Dn.__webglTexture,q,Je+nn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Dn.__webglTexture,q),Tn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,dn.__webglTexture,ye,kt+nn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,dn.__webglTexture,ye),q!==0?V.blitFramebuffer(Qe,it,Ne,ke,dt,Lt,Ne,ke,V.COLOR_BUFFER_BIT,V.NEAREST):Tn?V.copyTexSubImage3D(jt,ye,dt,Lt,kt+nn,Qe,it,Ne,ke):V.copyTexSubImage2D(jt,ye,dt,Lt,Qe,it,Ne,ke);Ke.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Tn?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(jt,ye,dt,Lt,kt,Ne,ke,Pe,pt,Xe,Nt.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(jt,ye,dt,Lt,kt,Ne,ke,Pe,pt,Nt.data):V.texSubImage3D(jt,ye,dt,Lt,kt,Ne,ke,Pe,pt,Xe,Nt):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,ye,dt,Lt,Ne,ke,pt,Xe,Nt.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,ye,dt,Lt,Nt.width,Nt.height,pt,Nt.data):V.texSubImage2D(V.TEXTURE_2D,ye,dt,Lt,Ne,ke,pt,Xe,Nt);V.pixelStorei(V.UNPACK_ROW_LENGTH,Tt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ii),V.pixelStorei(V.UNPACK_SKIP_ROWS,gn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Qa),ye===0&&W.generateMipmaps&&V.generateMipmap(jt),Ke.unbindTexture()},this.copyTextureToTexture3D=function(R,W,ae=null,re=null,q=0){return Cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,ae,re,q)},this.initRenderTarget=function(R){Fe.get(R).__webglFramebuffer===void 0&&st.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?st.setTextureCube(R,0):R.isData3DTexture?st.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?st.setTexture2DArray(R,0):st.setTexture2D(R,0),Ke.unbindTexture()},this.resetState=function(){H=0,P=0,j=null,Ke.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),i.unpackColorSpace=wt._getUnpackColorSpace()}}var cx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o_=fi.createContext&&fi.createContext(cx),SR=["attr","size","title"];function MR(s,e){if(s==null)return{};var i=ER(s,e),r,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(l=0;l<c.length;l++)r=c[l],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(s,r)&&(i[r]=s[r])}return i}function ER(s,e){if(s==null)return{};var i={};for(var r in s)if(Object.prototype.hasOwnProperty.call(s,r)){if(e.indexOf(r)>=0)continue;i[r]=s[r]}return i}function Zc(){return Zc=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},Zc.apply(this,arguments)}function l_(s,e){var i=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(s,l).enumerable})),i.push.apply(i,r)}return i}function Kc(s){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?l_(Object(i),!0).forEach(function(r){bR(s,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(i)):l_(Object(i)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(i,r))})}return s}function bR(s,e,i){return e=TR(e),e in s?Object.defineProperty(s,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[e]=i,s}function TR(s){var e=AR(s,"string");return typeof e=="symbol"?e:e+""}function AR(s,e){if(typeof s!="object"||!s)return s;var i=s[Symbol.toPrimitive];if(i!==void 0){var r=i.call(s,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function ux(s){return s&&s.map((e,i)=>fi.createElement(e.tag,Kc({key:i},e.attr),ux(e.child)))}function Hs(s){return e=>fi.createElement(RR,Zc({attr:Kc({},s.attr)},e),ux(s.child))}function RR(s){var e=i=>{var{attr:r,size:l,title:c}=s,f=MR(s,SR),h=l||i.size||"1em",m;return i.className&&(m=i.className),s.className&&(m=(m?m+" ":"")+s.className),fi.createElement("svg",Zc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,f,{className:m,style:Kc(Kc({color:s.color||i.color},i.style),s.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),c&&fi.createElement("title",null,c),s.children)};return o_!==void 0?fi.createElement(o_.Consumer,null,i=>e(i)):e(cx)}function fx(s){return Hs({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(s)}function CR(s){return Hs({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(s)}function dx(s){return Hs({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"},child:[]}]})(s)}function wR(s){return Hs({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 492v20H0v-20c0-6.627 5.373-12 12-12h20V120c0-13.255 10.745-24 24-24h88V24c0-13.255 10.745-24 24-24h112c13.255 0 24 10.745 24 24v72h88c13.255 0 24 10.745 24 24v360h20c6.627 0 12 5.373 12 12zM308 192h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zm-168 64h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm104 128h-40c-6.627 0-12 5.373-12 12v84h64v-84c0-6.627-5.373-12-12-12zm64-96h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zm-116 12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40zM182 96h26v26a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V96h26a6 6 0 0 0 6-6V70a6 6 0 0 0-6-6h-26V38a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v26h-26a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6z"},child:[]}]})(s)}function hx(s){return Hs({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"},child:[]}]})(s)}function px(s){return Hs({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zM104 424c0 13.3 10.7 24 24 24s24-10.7 24-24-10.7-24-24-24-24 10.7-24 24zm216-135.4v49c36.5 7.4 64 39.8 64 78.4v41.7c0 7.6-5.4 14.2-12.9 15.7l-32.2 6.4c-4.3.9-8.5-1.9-9.4-6.3l-3.1-15.7c-.9-4.3 1.9-8.6 6.3-9.4l19.3-3.9V416c0-62.8-96-65.1-96 1.9v26.7l19.3 3.9c4.3.9 7.1 5.1 6.3 9.4l-3.1 15.7c-.9 4.3-5.1 7.1-9.4 6.3l-31.2-4.2c-7.9-1.1-13.8-7.8-13.8-15.9V416c0-38.6 27.5-70.9 64-78.4v-45.2c-2.2.7-4.4 1.1-6.6 1.9-18 6.3-37.3 9.8-57.4 9.8s-39.4-3.5-57.4-9.8c-7.4-2.6-14.9-4.2-22.6-5.2v81.6c23.1 6.9 40 28.1 40 53.4 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.3 16.9-46.5 40-53.4v-80.4C48.5 301 0 355.8 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-72-56.8-130.3-128-133.8z"},child:[]}]})(s)}const DR=(s={})=>{const[e,i]=fi.useState(!1),r=fi.useRef(null);return fi.useEffect(()=>{const l=new IntersectionObserver(([c])=>{i(c.isIntersecting)},s);return r.current&&l.observe(r.current),()=>{r.current&&l.unobserve(r.current)}},[s]),[r,e]},UR=()=>{const s=fe.useRef(null),e=fe.useRef(null);return fe.useEffect(()=>{if(!s.current)return;const i=500,r=500,l=new Mb,c=new $n(75,i/r,.1,1e3);c.position.z=3;const f=new yR({antialias:!0,alpha:!0});f.setSize(i,r),f.setClearColor(0,0),s.current.appendChild(f.domElement);const m=new Lb().load("https://unpkg.com/three-globe@2.27.0/example/img/earth-dark.jpg",void 0,void 0,()=>{console.warn("Continents texture failed to load; falling back to flat color.")}),p=new Yc(1.2,64,64),v=new Uv({color:223649,shininess:100,transparent:!0,opacity:.9}),g=new Uv({map:m,color:16777215,transparent:!0}),x=new Si(p,v);l.add(x);const M=new Si(new Yc(1.201,64,64),g);l.add(M),x.rotation.y=-.5,M.rotation.y=-.5,l.add(new zb(16777215,.6));const b=new Pv(223649,1,100);b.position.set(2,2,2),l.add(b);const A=new Pv(165063,.8,100);A.position.set(-2,-2,2),l.add(A);const S=new Bi,_=50,L=new Float32Array(_*3);for(let H=0;H<_*3;H+=3){const j=Math.random()*Math.PI*2,w=Math.random()*Math.PI;L[H]=1.3*Math.sin(w)*Math.cos(j),L[H+1]=1.3*Math.sin(w)*Math.sin(j),L[H+2]=1.3*Math.cos(w)}S.setAttribute("position",new Ei(L,3));const U=new ex({color:440020,size:.05,transparent:!0,opacity:.6}),C=new Ab(S,U);l.add(C);const G=()=>{e.current=requestAnimationFrame(G),x.rotation.y+=5e-4,M.rotation.y+=5e-4;const H=1+.3*Math.sin(Date.now()*.002);C.scale.set(H,H,H),f.render(l,c)};return G(),()=>{e.current&&cancelAnimationFrame(e.current),s.current&&f.domElement.parentNode===s.current&&s.current.removeChild(f.domElement)}},[]),B.jsx("div",{ref:s,className:"w-full h-full flex items-center justify-center"})},LR=()=>{const[s,e]=DR({threshold:.1}),i=jh();return B.jsxs("section",{ref:s,className:"min-h-screen bg-white flex items-center pt-24 pb-20 px-6 relative overflow-hidden",children:[B.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-sky-50"}),B.jsx("div",{className:"absolute top-32 right-20 w-32 h-32 bg-sky-100 rounded-full blur-3xl animate-pulse opacity-60"}),B.jsx("div",{className:"absolute bottom-40 left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl animate-pulse opacity-40"}),B.jsxs("div",{className:"max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10",children:[B.jsxs("div",{className:`transition-all duration-1000 ${e?"opacity-100 translate-x-0":"opacity-0 -translate-x-10"}`,children:[B.jsxs("span",{className:"inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-display font-semibold mb-6 animate-slide-up",children:[B.jsx(dx,{})," Advanced Medical Access"]}),B.jsx("h1",{className:"text-hero text-dark mb-6 font-display animate-slide-up delay-100",children:"Quality Healthcare at Your Fingertips"}),B.jsx("p",{className:"text-lg text-gray-600 mb-8 font-body leading-relaxed animate-slide-up delay-200",children:"Tena AI brings AI-powered medical assistance to rural communities across Africa. Get instant answers to health questions, understand symptom severity, and connect with healthcare professionals when needed."}),B.jsxs("ul",{className:"space-y-4 mb-10 animate-slide-up delay-300",children:[B.jsxs("li",{className:"flex items-center space-x-3 text-gray-700",children:[B.jsx("span",{className:"w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center",children:B.jsx("svg",{className:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M5 13l4 4L19 7"})})}),B.jsx("span",{children:"24/7 AI Medical Assistant"})]}),B.jsxs("li",{className:"flex items-center space-x-3 text-gray-700",children:[B.jsx("span",{className:"w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center",children:B.jsx("svg",{className:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M5 13l4 4L19 7"})})}),B.jsx("span",{children:"Symptom Severity Ranking"})]}),B.jsxs("li",{className:"flex items-center space-x-3 text-gray-700",children:[B.jsx("span",{className:"w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center",children:B.jsx("svg",{className:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M5 13l4 4L19 7"})})}),B.jsx("span",{children:"Professional Doctor Oversight"})]})]}),B.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 animate-slide-up delay-400",children:[B.jsx("button",{onClick:()=>i("/coming-soon"),className:"btn-blue px-8 py-4 rounded-full font-display font-semibold text-lg",children:"Get Started Free"}),B.jsx("button",{className:"btn-blue-outline px-8 py-4 rounded-full font-display font-semibold text-lg",children:"Learn More"})]})]}),B.jsx("div",{className:`hidden md:block h-96 animate-fade-in transition-all duration-1000 ${e?"opacity-100":"opacity-0"}`,children:B.jsxs("div",{className:"relative w-full h-full",children:[B.jsx(UR,{}),B.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-transparent rounded-full blur-2xl"})]})})]}),B.jsx("div",{className:"absolute bottom-0 left-0 right-0 border-t border-sky-100 bg-white/50 backdrop-blur-sm",children:B.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-8",children:[B.jsxs("div",{className:"text-center",children:[B.jsx("div",{className:"text-3xl font-display font-bold text-sky-600 mb-2",children:"50K+"}),B.jsx("p",{className:"text-gray-600",children:"Lives Impacted"})]}),B.jsxs("div",{className:"text-center",children:[B.jsx("div",{className:"text-3xl font-display font-bold text-sky-600 mb-2",children:"10+ Countries"}),B.jsx("p",{className:"text-gray-600",children:"Growing Across Africa"})]}),B.jsxs("div",{className:"text-center",children:[B.jsx("div",{className:"text-3xl font-display font-bold text-sky-600 mb-2",children:"99.9%"}),B.jsx("p",{className:"text-gray-600",children:"Uptime Guarantee"})]})]})})]})},NR=()=>{const s=[{icon:B.jsx(hx,{className:"text-sky-600"}),title:"AI Medical Assistant",description:"Trained on medical knowledge, providing instant answers to health questions in multiple languages.",features:["24/7 Availability","Multi-language Support","Evidence-based Responses"]},{icon:B.jsx(fx,{className:"text-orange-500"}),title:"Severity Assessment",description:"Our AI evaluates symptoms and ranks urgency levels to help you understand when professional help is needed.",features:["Real-time Analysis","Risk Indicators","Action Recommendations"]},{icon:B.jsx(px,{className:"text-sky-600"}),title:"Doctor Dashboard",description:"Medical professionals can monitor patients, track health stats, and provide personalized care and follow-ups.",features:["Patient Monitoring","Health Tracking","Referral System"]},{icon:B.jsx(wR,{className:"text-sky-600"}),title:"Admin Portal",description:"Manage referrals, monitor system health, and ensure critical cases are routed to appropriate medical facilities.",features:["Case Management","Analytics","Automated Routing"]}];return B.jsxs("section",{id:"services",className:"py-20 px-6 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden",children:[B.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[B.jsxs("div",{className:"text-center mb-16 animate-slide-up",children:[B.jsx("span",{className:"inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-display font-semibold mb-4",children:"Our Services"}),B.jsx("h2",{className:"text-4xl md:text-5xl font-display font-bold text-dark mb-6",children:"Comprehensive Healthcare Solutions"}),B.jsx("p",{className:"text-lg text-gray-600 max-w-2xl mx-auto",children:"Tena AI provides multiple layers of healthcare support, from AI-powered assistance to professional oversight"})]}),B.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:s.map((e,i)=>B.jsxs("div",{className:`card-hover glass-white rounded-2xl p-8 border border-sky-100 transition-all duration-1000 ${i%2===0?"delay-100":"delay-200"}`,children:[B.jsx("div",{className:"text-5xl mb-6",children:e.icon}),B.jsx("h3",{className:"text-2xl font-display font-bold text-dark mb-4",children:e.title}),B.jsx("p",{className:"text-gray-600 mb-6",children:e.description}),B.jsx("div",{className:"space-y-3",children:e.features.map(r=>B.jsxs("div",{className:"flex items-center space-x-3",children:[B.jsx("div",{className:"w-5 h-5 rounded-full bg-sky-500 flex items-center justify-center flex-shrink-0",children:B.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M5 13l4 4L19 7"})})}),B.jsx("span",{className:"text-gray-700 font-body",children:r})]},r))})]},e.title))})]}),B.jsx("div",{className:"absolute top-32 -right-40 w-96 h-96 bg-sky-200 rounded-full blur-3xl opacity-20 pointer-events-none"}),B.jsx("div",{className:"absolute -bottom-32 -left-40 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 pointer-events-none"})]})},OR=()=>{const s=[{number:"01",title:"Instant Medical Answers",description:"Ask health questions anytime and get evidence-based responses from our AI trained on medical literature and best practices.",image:"💬"},{number:"02",title:"Smart Severity Detection",description:"Understand the urgency of your symptoms with our intelligent ranking system. Know when to seek professional help immediately.",image:"🎯"},{number:"03",title:"Doctor Oversight",description:"Critical cases are flagged for admin review and can be redirected to qualified medical professionals for proper care.",image:"👨‍⚕️"},{number:"04",title:"Health Monitoring",description:"Doctors can monitor patient health stats, track progress, and schedule follow-ups directly through our platform.",image:"📊"}];return B.jsxs("section",{id:"features",className:"py-20 px-6 bg-white relative overflow-hidden",children:[B.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[B.jsxs("div",{className:"text-center mb-16 animate-slide-up",children:[B.jsx("span",{className:"inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-display font-semibold mb-4",children:"Features"}),B.jsx("h2",{className:"text-4xl md:text-5xl font-display font-bold text-dark mb-6",children:"Powerful Features for Better Health"}),B.jsx("p",{className:"text-lg text-gray-600 max-w-2xl mx-auto",children:"Everything you need to take control of your health, right in your pocket"})]}),B.jsx("div",{className:"space-y-12",children:s.map((e,i)=>B.jsx("div",{className:`card-hover bg-gradient-to-r from-blue-50 to-sky-50 rounded-2xl p-8 md:p-12 border border-sky-100 transition-all duration-1000 ${i%2===0?"delay-100":"delay-200"}`,children:B.jsxs("div",{className:"grid md:grid-cols-2 gap-8 items-center",children:[B.jsxs("div",{children:[B.jsx("div",{className:"text-5xl font-display font-bold text-sky-300 mb-4",children:e.number}),B.jsx("h3",{className:"text-3xl font-display font-bold text-dark mb-4",children:e.title}),B.jsx("p",{className:"text-lg text-gray-600 leading-relaxed",children:e.description}),B.jsxs("button",{className:"mt-8 flex items-center space-x-2 text-sky-600 font-display font-semibold hover:text-sky-700 transition-colors",children:[B.jsx("span",{children:"Learn More"}),B.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})]}),B.jsx("div",{className:"flex items-center justify-center",children:B.jsx("div",{className:"w-32 h-32 md:w-40 md:h-40 bg-blue-gradient rounded-3xl flex items-center justify-center shadow-lg shadow-sky-500/25 transform hover:scale-110 transition-transform duration-300",children:B.jsx("span",{className:"text-6xl md:text-7xl",children:e.image})})})]})},e.number))})]}),B.jsx("div",{className:"absolute top-1/4 -right-64 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-30 pointer-events-none"})]})},PR=()=>{const s=jh(),e=[{label:"Users in Rwanda",value:"Starting Soon"},{label:"Healthcare Partners",value:"20+"},{label:"Lives to Impact",value:"Millions"}];return B.jsxs("section",{id:"download",className:"py-20 px-6 bg-gradient-to-br from-blue-50 to-sky-50 relative overflow-hidden",children:[B.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[B.jsx("div",{className:"glass-white rounded-3xl p-12 md:p-20 border border-sky-200 mb-16 animate-slide-up",children:B.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[B.jsxs("div",{children:[B.jsx("h2",{className:"text-4xl md:text-5xl font-display font-bold text-dark mb-6",children:"Get Healthcare in Your Hands"}),B.jsx("p",{className:"text-lg text-gray-600 mb-8",children:"Tena AI is launching in Rwanda. Be among the first to access AI-powered healthcare from anywhere, anytime."}),B.jsxs("div",{className:"space-y-4 mb-8",children:[B.jsxs("div",{className:"flex items-center space-x-3",children:[B.jsx("svg",{className:"w-6 h-6 text-sky-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),B.jsx("span",{className:"text-gray-700",children:"Free to use with premium features"})]}),B.jsxs("div",{className:"flex items-center space-x-3",children:[B.jsx("svg",{className:"w-6 h-6 text-sky-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),B.jsx("span",{className:"text-gray-700",children:"Works offline and online"})]}),B.jsxs("div",{className:"flex items-center space-x-3",children:[B.jsx("svg",{className:"w-6 h-6 text-sky-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),B.jsx("span",{className:"text-gray-700",children:"Privacy & security guaranteed"})]})]}),B.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[B.jsx("button",{onClick:()=>s("/coming-soon"),className:"btn-blue px-8 py-4 rounded-full font-display font-semibold text-lg",children:"Get App"}),B.jsx("button",{className:"btn-blue-outline px-8 py-4 rounded-full font-display font-semibold text-lg",children:"Doctor Sign Up"})]})]}),B.jsx("div",{className:"flex items-center justify-center",children:B.jsxs("div",{className:"relative",children:[B.jsx("div",{className:"w-60 h-96 bg-dark rounded-3xl border-8 border-dark shadow-2xl overflow-hidden",children:B.jsxs("div",{className:"w-full h-full bg-gradient-to-b from-blue-50 to-sky-50 flex flex-col items-center justify-center p-4 text-center",children:[B.jsx("div",{className:"text-5xl mb-4 flex justify-center text-sky-600",children:B.jsx(dx,{})}),B.jsx("h3",{className:"font-display font-bold text-dark mb-2",children:"TenaAI"}),B.jsx("p",{className:"text-sm text-gray-600 mb-6",children:"Your AI Healthcare Assistant"}),B.jsx("div",{className:"w-12 h-12 bg-sky-500 rounded-full animate-pulse"})]})}),B.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-sky-500/30 to-blue-500/20 rounded-3xl blur-2xl"})]})})]})}),B.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:e.map((i,r)=>B.jsxs("div",{className:`glass-blue rounded-2xl p-8 text-center card-hover transition-all duration-1000 ${r===0?"delay-100":r===1?"delay-200":"delay-300"}`,children:[B.jsx("div",{className:"text-3xl font-display font-bold text-sky-600 mb-2",children:i.value}),B.jsx("p",{className:"text-gray-600 font-body",children:i.label})]},i.label))})]}),B.jsx("div",{className:"absolute -top-40 right-20 w-96 h-96 bg-sky-200 rounded-full blur-3xl opacity-20 pointer-events-none"}),B.jsx("div",{className:"absolute -bottom-40 left-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 pointer-events-none"})]})},zR=()=>{const s=new Date().getFullYear(),e={Product:["Features","Security","Pricing","Download"],Company:["About","Blog","Press","Careers"],Resources:["Documentation","API Docs","Community","Contact"],Legal:["Privacy","Terms","Compliance","Cookies"]};return B.jsxs("footer",{className:"bg-dark text-white relative overflow-hidden pt-20 pb-10",children:[B.jsx("div",{className:"absolute top-0 -right-40 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl opacity-30"}),B.jsxs("div",{className:"max-w-7xl mx-auto px-6 relative z-10",children:[B.jsxs("div",{className:"grid md:grid-cols-5 gap-12 mb-16",children:[B.jsxs("div",{className:"md:col-span-1",children:[B.jsxs("div",{className:"flex items-center space-x-2 mb-6",children:[B.jsx("div",{className:"w-10 h-10 bg-blue-gradient rounded-2xl flex items-center justify-center",children:B.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})})}),B.jsxs("span",{className:"text-xl font-display font-bold",children:["Tena",B.jsx("span",{className:"text-blue-gradient",children:"AI"})]})]}),B.jsx("p",{className:"text-gray-400 text-sm",children:"Healthcare for everyone, powered by AI. Bringing quality medical support to rural Africa."})]}),Object.entries(e).map(([i,r])=>B.jsxs("div",{children:[B.jsx("h4",{className:"font-display font-bold mb-4 text-white",children:i}),B.jsx("ul",{className:"space-y-2",children:r.map(l=>B.jsx("li",{children:B.jsx("a",{href:"#",className:"text-gray-400 hover:text-sky-400 transition-colors text-sm",children:l})},l))})]},i))]}),B.jsx("div",{className:"border-t border-gray-700 mb-8"}),B.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[B.jsxs("p",{className:"text-gray-400 text-sm flex items-center",children:["© ",s," Tena AI. All rights reserved. Made with"," ",B.jsx(CR,{className:"mx-1 text-red-500"})," for Africa."]}),B.jsxs("div",{className:"flex items-center space-x-6 mt-6 md:mt-0",children:[B.jsx("a",{href:"#",className:"text-gray-400 hover:text-sky-400 transition-colors","aria-label":"Twitter",children:B.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{d:"M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.03 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})})}),B.jsx("a",{href:"#",className:"text-gray-400 hover:text-sky-400 transition-colors","aria-label":"LinkedIn",children:B.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.006 1.419-.103.249-.129.597-.129.946v5.44h-3.553s.047-8.842 0-9.769h3.553v1.381c.432-.666 1.204-1.612 2.929-1.612 2.14 0 3.746 1.398 3.746 4.402v5.598zM5.337 9.342c-1.144 0-1.915-.758-1.915-1.705 0-.951.767-1.71 1.915-1.71 1.144 0 1.915.759 1.915 1.71 0 .947-.771 1.705-1.915 1.705zm1.575 11.11H3.762V9.583h3.15v10.869zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"})})}),B.jsx("a",{href:"#",className:"text-gray-400 hover:text-sky-400 transition-colors","aria-label":"Facebook",children:B.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})})]})]})]})]})},BR=()=>{const[s,e]=fi.useState(""),i=r=>{r.preventDefault(),console.log("Email submitted:",s),e("")};return B.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50 flex items-center justify-center px-4 relative overflow-hidden",children:[B.jsxs("div",{className:"absolute inset-0",children:[B.jsx("div",{className:"absolute top-20 right-32 w-64 h-64 bg-sky-200 rounded-full blur-3xl opacity-20"}),B.jsx("div",{className:"absolute bottom-32 left-20 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-20"})]}),B.jsxs("div",{className:"relative z-10 max-w-2xl mx-auto text-center animate-fade-in",children:[B.jsxs("div",{className:"flex items-center justify-center space-x-3 mb-8",children:[B.jsx("div",{className:"w-12 h-12 bg-blue-gradient rounded-2xl flex items-center justify-center",children:B.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})})}),B.jsx("h1",{className:"text-4xl font-display font-bold text-dark",children:"TenaAI"})]}),B.jsx("h2",{className:"text-5xl font-display font-bold text-dark mb-6",children:"Healthcare for Everyone"}),B.jsx("p",{className:"text-xl text-gray-600 mb-12 font-body",children:"An AI-powered medical assistant bringing quality healthcare information to rural communities across Africa"}),B.jsx("form",{onSubmit:i,className:"max-w-md mx-auto mb-12",children:B.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[B.jsx("input",{type:"email",placeholder:"Enter your email",value:s,onChange:r=>e(r.target.value),required:!0,className:"flex-1 px-6 py-4 rounded-full border-2 border-sky-200 focus:outline-none focus:border-sky-500 transition-colors"}),B.jsx("button",{type:"submit",className:"btn-blue px-8 py-4 rounded-full font-display font-semibold whitespace-nowrap",children:"Notify Me"})]})}),B.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[B.jsxs("div",{className:"glass-blue rounded-2xl p-6",children:[B.jsx("div",{className:"text-4xl mb-4 flex justify-center",children:B.jsx(hx,{className:"text-sky-600"})}),B.jsx("h3",{className:"font-display font-bold text-lg text-dark mb-2",children:"AI Medical Assistant"}),B.jsx("p",{className:"text-gray-600",children:"Get medical advice and health information instantly"})]}),B.jsxs("div",{className:"glass-blue rounded-2xl p-6",children:[B.jsx("div",{className:"text-4xl mb-4 flex justify-center",children:B.jsx(fx,{className:"text-orange-500"})}),B.jsx("h3",{className:"font-display font-bold text-lg text-dark mb-2",children:"Severity Ranking"}),B.jsx("p",{className:"text-gray-600",children:"Know when to seek immediate professional help"})]}),B.jsxs("div",{className:"glass-blue rounded-2xl p-6",children:[B.jsx("div",{className:"text-4xl mb-4 flex justify-center",children:B.jsx(px,{className:"text-sky-600"})}),B.jsx("h3",{className:"font-display font-bold text-lg text-dark mb-2",children:"Doctor Monitoring"}),B.jsx("p",{className:"text-gray-600",children:"Medical professionals can track patient health"})]})]}),B.jsx("div",{className:"mt-12",children:B.jsx("span",{className:"inline-block px-6 py-3 bg-sky-100 text-sky-700 rounded-full font-display font-semibold",children:"Coming Soon in Rwanda"})})]})]})};function IR(){return B.jsx(QM,{children:B.jsx("div",{className:"min-h-screen",children:B.jsxs(RM,{children:[B.jsx(eh,{path:"/coming-soon",element:B.jsx(BR,{})}),B.jsx(eh,{path:"/",element:B.jsxs(B.Fragment,{children:[B.jsx(oE,{}),B.jsxs("main",{children:[B.jsx(LR,{}),B.jsx(NR,{}),B.jsx(OR,{}),B.jsx(PR,{})]}),B.jsx(zR,{})]})})]})})})}DS.createRoot(document.getElementById("root")).render(B.jsx(fi.StrictMode,{children:B.jsx(IR,{})}));
