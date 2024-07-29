import{N as X,D as Q,b as tt,u as N}from"./index.9378a5f4.js";function _e(e,t){return function(){return e.apply(t,arguments)}}const{toString:rt}=Object.prototype,{getPrototypeOf:le}=Object,$=(e=>t=>{const n=rt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>$(t)===e),J=e=>t=>typeof t===e,{isArray:F}=Array,k=J("undefined");function nt(e){return e!==null&&!k(e)&&e.constructor!==null&&!k(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Le=A("ArrayBuffer");function st(e){let t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Le(e.buffer),t}const ot=J("string"),R=J("function"),Fe=J("number"),V=e=>e!==null&&typeof e=="object",it=e=>e===!0||e===!1,v=e=>{if($(e)!=="object")return!1;const t=le(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},at=A("Date"),ct=A("File"),lt=A("Blob"),ut=A("FileList"),ft=e=>V(e)&&R(e.pipe),dt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=$(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},pt=A("URLSearchParams"),[ht,mt,yt,bt]=["ReadableStream","Request","Response","Headers"].map(A),wt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function j(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e=="undefined")return;let r,s;if(typeof e!="object"&&(e=[e]),F(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Be(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const De=(()=>typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:global)(),Ue=e=>!k(e)&&e!==De;function re(){const{caseless:e}=Ue(this)&&this||{},t={},n=(r,s)=>{const o=e&&Be(t,s)||s;v(t[o])&&v(r)?t[o]=re(t[o],r):v(r)?t[o]=re({},r):F(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&j(arguments[r],n);return t}const gt=(e,t,n,{allOwnKeys:r}={})=>(j(t,(s,o)=>{n&&R(s)?e[o]=_e(s,n):e[o]=s},{allOwnKeys:r}),e),Et=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),St=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Rt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&le(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ot=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Tt=e=>{if(!e)return null;if(F(e))return e;let t=e.length;if(!Fe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},At=(e=>t=>e&&t instanceof e)(typeof Uint8Array!="undefined"&&le(Uint8Array)),xt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Ct=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Pt=A("HTMLFormElement"),Nt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),be=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),_t=A("RegExp"),ke=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};j(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Lt=e=>{ke(e,(t,n)=>{if(R(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(!!R(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ft=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return F(e)?r(e):r(String(e).split(t)),n},Bt=()=>{},Dt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Z="abcdefghijklmnopqrstuvwxyz",we="0123456789",je={DIGIT:we,ALPHA:Z,ALPHA_DIGIT:Z+Z.toUpperCase()+we},Ut=(e=16,t=je.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function kt(e){return!!(e&&R(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const jt=e=>{const t=new Array(10),n=(r,s)=>{if(V(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=F(r)?[]:{};return j(r,(i,c)=>{const f=n(i,s+1);!k(f)&&(o[c]=f)}),t[s]=void 0,o}}return r};return n(e,0)},vt=A("AsyncFunction"),qt=e=>e&&(V(e)||R(e))&&R(e.then)&&R(e.catch);var a={isArray:F,isArrayBuffer:Le,isBuffer:nt,isFormData:dt,isArrayBufferView:st,isString:ot,isNumber:Fe,isBoolean:it,isObject:V,isPlainObject:v,isReadableStream:ht,isRequest:mt,isResponse:yt,isHeaders:bt,isUndefined:k,isDate:at,isFile:ct,isBlob:lt,isRegExp:_t,isFunction:R,isStream:ft,isURLSearchParams:pt,isTypedArray:At,isFileList:ut,forEach:j,merge:re,extend:gt,trim:wt,stripBOM:Et,inherits:St,toFlatObject:Rt,kindOf:$,kindOfTest:A,endsWith:Ot,toArray:Tt,forEachEntry:xt,matchAll:Ct,isHTMLForm:Pt,hasOwnProperty:be,hasOwnProp:be,reduceDescriptors:ke,freezeMethods:Lt,toObjectSet:Ft,toCamelCase:Nt,noop:Bt,toFiniteNumber:Dt,findKey:Be,global:De,isContextDefined:Ue,ALPHABET:je,generateString:Ut,isSpecCompliantForm:kt,toJSONObject:jt,isAsyncFn:vt,isThenable:qt};function h(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ve=h.prototype,qe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{qe[e]={value:e}});Object.defineProperties(h,qe);Object.defineProperty(ve,"isAxiosError",{value:!0});h.from=(e,t,n,r,s,o)=>{const i=Object.create(ve);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),h.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};var Ht=null;function ne(e){return a.isPlainObject(e)||a.isArray(e)}function He(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ge(e,t,n){return e?e.concat(t).map(function(s,o){return s=He(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function It(e){return a.isArray(e)&&!e.some(ne)}const Mt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function W(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,E){return!a.isUndefined(E[m])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob!="undefined"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function u(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!f&&a.isBlob(d))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?f&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function l(d,m,E){let S=d;if(d&&!E&&typeof d=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&It(d)||(a.isFileList(d)||a.endsWith(m,"[]"))&&(S=a.toArray(d)))return m=He(m),S.forEach(function(b,D){!(a.isUndefined(b)||b===null)&&t.append(i===!0?ge([m],D,o):i===null?m:m+"[]",u(b))}),!1}return ne(d)?!0:(t.append(ge(E,m,o),u(d)),!1)}const p=[],w=Object.assign(Mt,{defaultVisitor:l,convertValue:u,isVisitable:ne});function y(d,m){if(!a.isUndefined(d)){if(p.indexOf(d)!==-1)throw Error("Circular reference detected in "+m.join("."));p.push(d),a.forEach(d,function(S,x){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(x)?x.trim():x,m,w))===!0&&y(S,m?m.concat(x):[x])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Ee(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ue(e,t){this._pairs=[],e&&W(e,this,t)}const Ie=ue.prototype;Ie.append=function(t,n){this._pairs.push([t,n])};Ie.toString=function(t){const n=t?function(r){return t.call(this,r,Ee)}:Ee;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function zt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Me(e,t,n){if(!t)return e;const r=n&&n.encode||zt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ue(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class $t{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}var Se=$t,ze={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Jt=typeof URLSearchParams!="undefined"?URLSearchParams:ue,Vt=typeof FormData!="undefined"?FormData:null,Wt=typeof Blob!="undefined"?Blob:null,Kt={isBrowser:!0,classes:{URLSearchParams:Jt,FormData:Vt,Blob:Wt},protocols:["http","https","file","blob","url","data"]};const fe=typeof window!="undefined"&&typeof document!="undefined",Gt=(e=>fe&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator!="undefined"&&navigator.product),Xt=(()=>typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Qt=fe&&window.location.href||"http://localhost";var Zt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:fe,hasStandardBrowserWebWorkerEnv:Xt,hasStandardBrowserEnv:Gt,origin:Qt},Symbol.toStringTag,{value:"Module"})),O={...Zt,...Kt};function Yt(e,t){return W(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function er(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function tr(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function $e(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=tr(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(er(r),s,n,0)}),n}return null}function rr(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const de={transitional:ze,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify($e(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Yt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return W(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),rr(t)):t}],transformResponse:[function(t){const n=this.transitional||de.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?h.from(c,h.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{de.headers[e]={}});var pe=de;const nr=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var sr=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&nr[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t};const Re=Symbol("internals");function U(e){return e&&String(e).trim().toLowerCase()}function q(e){return e===!1||e==null?e:a.isArray(e)?e.map(q):String(e)}function or(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const ir=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Y(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function ar(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function cr(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class K{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,f,u){const l=U(f);if(!l)throw new Error("header name must be a non-empty string");const p=a.findKey(s,l);(!p||s[p]===void 0||u===!0||u===void 0&&s[p]!==!1)&&(s[p||f]=q(c))}const i=(c,f)=>a.forEach(c,(u,l)=>o(u,l,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!ir(t))i(sr(t),n);else if(a.isHeaders(t))for(const[c,f]of t.entries())o(f,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=U(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return or(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=U(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Y(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=U(i),i){const c=a.findKey(r,i);c&&(!n||Y(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||Y(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=q(s),delete n[o];return}const c=t?ar(o):String(o).trim();c!==o&&delete n[o],n[c]=q(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Re]=this[Re]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=U(i);r[c]||(cr(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}K.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(K.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(K);var T=K;function ee(e,t){const n=this||pe,r=t||n,s=T.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Je(e){return!!(e&&e.__CANCEL__)}function B(e,t,n){h.call(this,e==null?"canceled":e,h.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(B,h,{__CANCEL__:!0});function Ve(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new h("Request failed with status code "+n.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function lr(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ur(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const u=Date.now(),l=r[o];i||(i=u),n[s]=f,r[s]=u;let p=o,w=0;for(;p!==s;)w+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),u-i<t)return;const y=l&&u-l;return y?Math.round(w*1e3/y):void 0}}function fr(e,t){let n=0;const r=1e3/t;let s=null;return function(){const i=this===!0,c=Date.now();if(i||c-n>r)return s&&(clearTimeout(s),s=null),n=c,e.apply(null,arguments);s||(s=setTimeout(()=>(s=null,n=Date.now(),e.apply(null,arguments)),r-(c-n)))}}var I=(e,t,n=3)=>{let r=0;const s=ur(50,250);return fr(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,f=i-r,u=s(f),l=i<=c;r=i;const p={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:u||void 0,estimated:u&&c&&l?(c-i)/u:void 0,event:o,lengthComputable:c!=null};p[t?"download":"upload"]=!0,e(p)},n)},dr=O.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),pr=O.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function hr(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function mr(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function We(e,t){return e&&!hr(t)?mr(e,t):t}const Oe=e=>e instanceof T?{...e}:e;function _(e,t){t=t||{};const n={};function r(u,l,p){return a.isPlainObject(u)&&a.isPlainObject(l)?a.merge.call({caseless:p},u,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(u,l,p){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u,p)}else return r(u,l,p)}function o(u,l){if(!a.isUndefined(l))return r(void 0,l)}function i(u,l){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function c(u,l,p){if(p in t)return r(u,l);if(p in e)return r(void 0,u)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(u,l)=>s(Oe(u),Oe(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const p=f[l]||s,w=p(e[l],t[l],l);a.isUndefined(w)&&p!==c||(n[l]=w)}),n}var Ke=e=>{const t=_({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=T.from(i),t.url=Me(We(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(n)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[u,...l]=f?f.split(";").map(p=>p.trim()).filter(Boolean):[];i.setContentType([u||"multipart/form-data",...l].join("; "))}}if(O.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&dr(t.url))){const u=s&&o&&pr.read(o);u&&i.set(s,u)}return t};const yr=typeof XMLHttpRequest!="undefined";var br=yr&&function(e){return new Promise(function(n,r){const s=Ke(e);let o=s.data;const i=T.from(s.headers).normalize();let{responseType:c}=s,f;function u(){s.cancelToken&&s.cancelToken.unsubscribe(f),s.signal&&s.signal.removeEventListener("abort",f)}let l=new XMLHttpRequest;l.open(s.method.toUpperCase(),s.url,!0),l.timeout=s.timeout;function p(){if(!l)return;const y=T.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),m={data:!c||c==="text"||c==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:y,config:e,request:l};Ve(function(S){n(S),u()},function(S){r(S),u()},m),l=null}"onloadend"in l?l.onloadend=p:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(p)},l.onabort=function(){!l||(r(new h("Request aborted",h.ECONNABORTED,s,l)),l=null)},l.onerror=function(){r(new h("Network Error",h.ERR_NETWORK,s,l)),l=null},l.ontimeout=function(){let d=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const m=s.transitional||ze;s.timeoutErrorMessage&&(d=s.timeoutErrorMessage),r(new h(d,m.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,s,l)),l=null},o===void 0&&i.setContentType(null),"setRequestHeader"in l&&a.forEach(i.toJSON(),function(d,m){l.setRequestHeader(m,d)}),a.isUndefined(s.withCredentials)||(l.withCredentials=!!s.withCredentials),c&&c!=="json"&&(l.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&l.addEventListener("progress",I(s.onDownloadProgress,!0)),typeof s.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",I(s.onUploadProgress)),(s.cancelToken||s.signal)&&(f=y=>{!l||(r(!y||y.type?new B(null,e,l):y),l.abort(),l=null)},s.cancelToken&&s.cancelToken.subscribe(f),s.signal&&(s.signal.aborted?f():s.signal.addEventListener("abort",f)));const w=lr(s.url);if(w&&O.protocols.indexOf(w)===-1){r(new h("Unsupported protocol "+w+":",h.ERR_BAD_REQUEST,e));return}l.send(o||null)})};const wr=(e,t)=>{let n=new AbortController,r;const s=function(f){if(!r){r=!0,i();const u=f instanceof Error?f:this.reason;n.abort(u instanceof h?u:new B(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{s(new h(`timeout ${t} of ms exceeded`,h.ETIMEDOUT))},t);const i=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(f=>{f&&(f.removeEventListener?f.removeEventListener("abort",s):f.unsubscribe(s))}),e=null)};e.forEach(f=>f&&f.addEventListener&&f.addEventListener("abort",s));const{signal:c}=n;return c.unsubscribe=i,[c,()=>{o&&clearTimeout(o),o=null}]};var gr=wr;const Er=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},Sr=async function*(e,t,n){for await(const r of e)yield*Er(ArrayBuffer.isView(r)?r:await n(String(r)),t)},Te=(e,t,n,r,s)=>{const o=Sr(e,t,s);let i=0;return new ReadableStream({type:"bytes",async pull(c){const{done:f,value:u}=await o.next();if(f){c.close(),r();return}let l=u.byteLength;n&&n(i+=l),c.enqueue(new Uint8Array(u))},cancel(c){return r(c),o.return()}},{highWaterMark:2})},Ae=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},G=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ge=G&&typeof ReadableStream=="function",se=G&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Rr=Ge&&(()=>{let e=!1;const t=new Request(O.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),xe=64*1024,oe=Ge&&!!(()=>{try{return a.isReadableStream(new Response("").body)}catch{}})(),M={stream:oe&&(e=>e.body)};G&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!M[t]&&(M[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new h(`Response type '${t}' is not supported`,h.ERR_NOT_SUPPORT,r)})})})(new Response);const Or=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(a.isArrayBufferView(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await se(e)).byteLength},Tr=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n==null?Or(t):n};var Ar=G&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:u,headers:l,withCredentials:p="same-origin",fetchOptions:w}=Ke(e);u=u?(u+"").toLowerCase():"text";let[y,d]=s||o||i?gr([s,o],i):[],m,E;const S=()=>{!m&&setTimeout(()=>{y&&y.unsubscribe()}),m=!0};let x;try{if(f&&Rr&&n!=="get"&&n!=="head"&&(x=await Tr(l,r))!==0){let C=new Request(t,{method:"POST",body:r,duplex:"half"}),L;a.isFormData(r)&&(L=C.headers.get("content-type"))&&l.setContentType(L),C.body&&(r=Te(C.body,xe,Ae(x,I(f)),null,se))}a.isString(p)||(p=p?"cors":"omit"),E=new Request(t,{...w,signal:y,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",withCredentials:p});let b=await fetch(E);const D=oe&&(u==="stream"||u==="response");if(oe&&(c||D)){const C={};["status","statusText","headers"].forEach(ye=>{C[ye]=b[ye]});const L=a.toFiniteNumber(b.headers.get("content-length"));b=new Response(Te(b.body,xe,c&&Ae(L,I(c,!0)),D&&S,se),C)}u=u||"text";let et=await M[a.findKey(M,u)||"text"](b,e);return!D&&S(),d&&d(),await new Promise((C,L)=>{Ve(C,L,{data:et,headers:T.from(b.headers),status:b.status,statusText:b.statusText,config:e,request:E})})}catch(b){throw S(),b&&b.name==="TypeError"&&/fetch/i.test(b.message)?Object.assign(new h("Network Error",h.ERR_NETWORK,e,E),{cause:b.cause||b}):h.from(b,b&&b.code,e,E)}});const ie={http:Ht,xhr:br,fetch:Ar};a.forEach(ie,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ce=e=>`- ${e}`,xr=e=>a.isFunction(e)||e===null||e===!1;var Xe={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!xr(n)&&(r=ie[(i=String(n)).toLowerCase()],r===void 0))throw new h(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Ce).join(`
`):" "+Ce(o[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ie};function te(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new B(null,e)}function Pe(e){return te(e),e.headers=T.from(e.headers),e.data=ee.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Xe.getAdapter(e.adapter||pe.adapter)(e).then(function(r){return te(e),r.data=ee.call(e,e.transformResponse,r),r.headers=T.from(r.headers),r},function(r){return Je(r)||(te(e),r&&r.response&&(r.response.data=ee.call(e,e.transformResponse,r.response),r.response.headers=T.from(r.response.headers))),Promise.reject(r)})}const Qe="1.7.2",he={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{he[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ne={};he.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Qe+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new h(s(i," has been removed"+(n?" in "+n:"")),h.ERR_DEPRECATED);return n&&!Ne[i]&&(Ne[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Cr(e,t,n){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new h("option "+o+" must be "+f,h.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new h("Unknown option "+o,h.ERR_BAD_OPTION)}}var ae={assertOptions:Cr,validators:he};const P=ae.validators;class z{constructor(t){this.defaults=t,this.interceptors={request:new Se,response:new Se}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=_(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ae.assertOptions(r,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ae.assertOptions(s,{encode:P.function,serialize:P.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=T.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(f=f&&m.synchronous,c.unshift(m.fulfilled,m.rejected))});const u=[];this.interceptors.response.forEach(function(m){u.push(m.fulfilled,m.rejected)});let l,p=0,w;if(!f){const d=[Pe.bind(this),void 0];for(d.unshift.apply(d,c),d.push.apply(d,u),w=d.length,l=Promise.resolve(n);p<w;)l=l.then(d[p++],d[p++]);return l}w=c.length;let y=n;for(p=0;p<w;){const d=c[p++],m=c[p++];try{y=d(y)}catch(E){m.call(this,E);break}}try{l=Pe.call(this,y)}catch(d){return Promise.reject(d)}for(p=0,w=u.length;p<w;)l=l.then(u[p++],u[p++]);return l}getUri(t){t=_(this.defaults,t);const n=We(t.baseURL,t.url);return Me(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){z.prototype[t]=function(n,r){return this.request(_(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(_(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}z.prototype[t]=n(),z.prototype[t+"Form"]=n(!0)});var H=z;class me{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new B(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new me(function(s){t=s}),cancel:t}}}var Pr=me;function Nr(e){return function(n){return e.apply(null,n)}}function _r(e){return a.isObject(e)&&e.isAxiosError===!0}const ce={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ce).forEach(([e,t])=>{ce[t]=e});var Lr=ce;function Ze(e){const t=new H(e),n=_e(H.prototype.request,t);return a.extend(n,H.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ze(_(e,s))},n}const g=Ze(pe);g.Axios=H;g.CanceledError=B;g.CancelToken=Pr;g.isCancel=Je;g.VERSION=Qe;g.toFormData=W;g.AxiosError=h;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=Nr;g.isAxiosError=_r;g.mergeConfig=_;g.AxiosHeaders=T;g.formToJSON=e=>$e(a.isHTMLForm(e)?new FormData(e):e);g.getAdapter=Xe.getAdapter;g.HttpStatusCode=Lr;g.default=g;var Ye=g,Fr={},kr=Object.freeze(Object.defineProperty({__proto__:null,default:Fr},Symbol.toStringTag,{value:"Module"}));class Br{static success(t){X.create({progress:!0,progressClass:"bg-positive",color:"white",textColor:"black",position:"top-right",message:t,icon:"check_circle",iconColor:"positive",timeout:1e3,actions:[{icon:"close",color:"grey",size:"sm",round:!0,dense:!0}]})}static dialog(t){return Q.create({title:"Confirmaci\xF3n",message:t,color:"positive",ok:{label:"Aceptar",color:"positive"},cancel:{label:"Cancelar",color:"negative"}})}static confirm(t){return Q.create({title:'<span style="color: red">Confirmaci\xF3n</span>',message:t,html:!0,color:"positive",ok:{label:"Aceptar",color:"positive",push:!0},cancel:{label:"Cancelar",color:"negative",push:!0}})}static promptPassword(t){return Q.create({title:"Confirmaci\xF3n",message:t,prompt:{model:"",type:"password",placeholder:"Escribe algo"},color:"positive",ok:{label:"Aceptar",color:"positive"},cancel:{label:"Cancelar",color:"negative"}})}static error(t){X.create({progress:!0,color:"negative",position:"top",message:t,timeout:1500,actions:[{icon:"close",color:"white",size:"sm"}]})}static warning(t){X.create({progress:!0,color:"warning",position:"top",message:t,timeout:1500,actions:[{icon:"close",color:"white",size:"sm"}]})}}const Dr=Ye.create({baseURL:"https://bsuper.tuprogam.com/api/"});var jr=tt(({app:e,router:t})=>{N().cart=JSON.parse(localStorage.getItem("cart"))||[],N().favorites=JSON.parse(localStorage.getItem("favorites"))||[],e.config.globalProperties.$url="https://bsuper.tuprogam.com/api/",e.config.globalProperties.$axios=Ye.create({baseURL:"https://bsuper.tuprogam.com/api/"}),e.config.globalProperties.$store=N(),e.config.globalProperties.$alert=Br,e.config.globalProperties.$filters={capitalize:function(r){return r?(r=r.toString().toLowerCase(),r.charAt(0).toUpperCase()+r.slice(1)):""}};const n=localStorage.getItem("tokenEco");n&&(e.config.globalProperties.$axios.defaults.headers.common.Authorization=`Bearer ${n}`,e.config.globalProperties.$axios.get("me").then(r=>{N().isLogged=!0,N().user=r.data}).catch(r=>{console.log(r),localStorage.removeItem("tokenEco"),N().isLogged=!1,N().user={},t.push("/login")})),e.config.globalProperties.$api=Dr});export{Dr as api,Ye as axios,jr as default,kr as url};