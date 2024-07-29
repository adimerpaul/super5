import{c as L,ab as V,aY as ce,ad as W,aZ as re,f as o,at as de,q as N,p as r,aF as O,a_ as fe,a$ as ve,v as U,a as he,d as ge,s as me,e as be,r as Q,g as qe,h as Se,i as ke,j as ye,k as Ce,w as H,b0 as xe,aq as Pe,b1 as Te,b2 as I,n as Be,b3 as Oe,t as _e,T as Re,o as we,b4 as Ee,b5 as Fe,b6 as Ae}from"./index.9edba5f1.js";import{g as De,v as $,a as Me,b as Ke,c as Qe,p as j,r as z,s as He,d as Ie}from"./QItem.eff87168.js";const $e={xs:8,sm:10,md:14,lg:20,xl:24};var Le=L({name:"QChip",props:{...V,...ce,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:y,emit:l}){const{proxy:{$q:u}}=N(),s=W(e,u),v=re(e,$e),d=o(()=>e.selected===!0||e.icon!==void 0),g=o(()=>e.selected===!0?e.iconSelected||u.iconSet.chip.selected:e.icon),q=o(()=>e.iconRemove||u.iconSet.chip.remove),f=o(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),i=o(()=>{const a=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(a?` text-${a} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(f.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(s.value===!0?" q-chip--dark q-dark":"")}),n=o(()=>{const a=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},h={...a,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||u.lang.label.remove};return{chip:a,remove:h}});function c(a){a.keyCode===13&&S(a)}function S(a){e.disable||(l("update:selected",!e.selected),l("click",a))}function k(a){(a.keyCode===void 0||a.keyCode===13)&&(U(a),e.disable===!1&&(l("update:modelValue",!1),l("remove")))}function C(){const a=[];f.value===!0&&a.push(r("div",{class:"q-focus-helper"})),d.value===!0&&a.push(r(O,{class:"q-chip__icon q-chip__icon--left",name:g.value}));const h=e.label!==void 0?[r("div",{class:"ellipsis"},[e.label])]:void 0;return a.push(r("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},fe(y.default,h))),e.iconRight&&a.push(r(O,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&a.push(r(O,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:q.value,...n.value.remove,onClick:k,onKeyup:k})),a}return()=>{if(e.modelValue===!1)return;const a={class:i.value,style:v.value};return f.value===!0&&Object.assign(a,n.value.chip,{onClick:S,onKeyup:c}),de("div",a,C(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[ve,e.ripple]])}}}),Ve=L({name:"QMenu",inheritAttrs:!1,props:{...De,...he,...V,...ge,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:$},self:{type:String,validator:$},offset:{type:Array,validator:Me},scrollTarget:me,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...be,"click","escapeKey"],setup(e,{slots:y,emit:l,attrs:u}){let s=null,v,d,g;const q=N(),{proxy:f}=q,{$q:i}=f,n=Q(null),c=Q(!1),S=o(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),k=W(e,i),{registerTick:C,removeTick:a}=qe(),{registerTimeout:h}=Se(),{transitionProps:Y,transitionStyle:Z}=ke(e),{localScrollTarget:_,changeScrollEvent:G,unconfigureScrollTarget:J}=Ke(e,M),{anchorEl:m,canShow:X}=Qe({showing:c}),{hide:R}=ye({showing:c,canShow:X,handleShow:oe,handleHide:ne,hideOnRouteChange:S,processOnMount:!0}),{showPortal:w,hidePortal:E,renderPortal:p}=Ce(q,n,ie,"menu"),x={anchorEl:m,innerRef:n,onClickOutside(t){if(e.persistent!==!0&&c.value===!0)return R(t),(t.type==="touchstart"||t.target.classList.contains("q-dialog__backdrop"))&&U(t),!0}},F=o(()=>j(e.anchor||(e.cover===!0?"center middle":"bottom start"),i.lang.rtl)),ee=o(()=>e.cover===!0?F.value:j(e.self||"top start",i.lang.rtl)),te=o(()=>(e.square===!0?" q-menu--square":"")+(k.value===!0?" q-menu--dark q-dark":"")),ae=o(()=>e.autoClose===!0?{onClick:le}:{}),A=o(()=>c.value===!0&&e.persistent!==!0);H(A,t=>{t===!0?(Fe(T),Ie(x)):(I(T),z(x))});function P(){Ee(()=>{let t=n.value;t&&t.contains(document.activeElement)!==!0&&(t=t.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||t.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))})}function oe(t){if(s=e.noRefocus===!1?document.activeElement:null,xe(K),w(),M(),v=void 0,t!==void 0&&(e.touchPosition||e.contextMenu)){const B=Pe(t);if(B.left!==void 0){const{top:ue,left:se}=m.value.getBoundingClientRect();v={left:B.left-se,top:B.top-ue}}}d===void 0&&(d=H(()=>i.screen.width+"|"+i.screen.height+"|"+e.self+"|"+e.anchor+"|"+i.lang.rtl,b)),e.noFocus!==!0&&document.activeElement.blur(),C(()=>{b(),e.noFocus!==!0&&P()}),h(()=>{i.platform.is.ios===!0&&(g=e.autoClose,n.value.click()),b(),w(!0),l("show",t)},e.transitionDuration)}function ne(t){a(),E(),D(!0),s!==null&&(t===void 0||t.qClickOutside!==!0)&&(((t&&t.type.indexOf("key")===0?s.closest('[tabindex]:not([tabindex^="-"])'):void 0)||s).focus(),s=null),h(()=>{E(!0),l("hide",t)},e.transitionDuration)}function D(t){v=void 0,d!==void 0&&(d(),d=void 0),(t===!0||c.value===!0)&&(Te(K),J(),z(x),I(T)),t!==!0&&(s=null)}function M(){(m.value!==null||e.scrollTarget!==void 0)&&(_.value=Be(m.value,e.scrollTarget),G(_.value,b))}function le(t){g!==!0?(Oe(f,t),l("click",t)):g=!1}function K(t){A.value===!0&&e.noFocus!==!0&&Ae(n.value,t.target)!==!0&&P()}function T(t){l("escapeKey"),R(t)}function b(){He({targetEl:n.value,offset:e.offset,anchorEl:m.value,anchorOrigin:F.value,selfOrigin:ee.value,absoluteOffset:v,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ie(){return r(Re,Y.value,()=>c.value===!0?r("div",{role:"menu",...u,ref:n,tabindex:-1,class:["q-menu q-position-engine scroll"+te.value,u.class],style:[u.style,Z.value],...ae.value},_e(y.default)):null)}return we(D),Object.assign(f,{focus:P,updatePosition:b}),p}});export{Le as Q,Ve as a};
