import{r as s,f as ue,i as me,h as fe,ag as pe,w as A,c4 as he,o as B,p as xe,_ as T,q as H,bf as ve,x as ge,t as ye,m as X,y as be,j as r,D as Se,c6 as Ee,I as K,c7 as ke,c5 as Ce}from"./index-vyLcd-Je.js";import{d as je}from"./ExpandMore-3kkaHWRN.js";import{L as we}from"./LinearProgress-L2jHxBZR.js";import{B as v}from"./Box-C_Unawo1.js";import{T as D}from"./Button-P3xriBeC.js";import{C as De}from"./Card-ZBbaDw8s.js";import{g as Q,P as Ne}from"./Grow-AEneWTZ1.js";import{u as _e}from"./useTheme-gj9g8ZO4.js";var U={},$e=me,Pe=fe;Object.defineProperty(U,"__esModule",{value:!0});var Re=U.default=void 0,Te=Pe(s),Me=$e(ue()),ze=(0,Me.default)(Te.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}),"CloudUpload");Re=U.default=ze;var Y={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(a){(function(){var e={}.hasOwnProperty;function u(){for(var t="",i=0;i<arguments.length;i++){var n=arguments[i];n&&(t=d(t,c(n)))}return t}function c(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return u.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var i="";for(var n in t)e.call(t,n)&&t[n]&&(i=d(i,n));return i}function d(t,i){return i?t?t+" "+i:t+i:t}a.exports?(u.default=u,a.exports=u):window.classNames=u})()})(Y);var Le=Y.exports;const Ie=pe(Le);var We=function(e){return{root:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}},ee=s.forwardRef(function(e,u){var c=e.children,d=e.classes,t=e.className,i=e.collapsedHeight,n=e.collapsedSize,g=n===void 0?"0px":n,y=e.component,N=y===void 0?"div":y,f=e.disableStrictModeCompat,_=f===void 0?!1:f,b=e.in,k=e.onEnter,C=e.onEntered,j=e.onEntering,m=e.onExit,M=e.onExited,$=e.onExiting,P=e.style,z=e.timeout,p=z===void 0?he.standard:z,V=e.TransitionComponent,te=V===void 0?ve:V,ae=B(e,["children","classes","className","collapsedHeight","collapsedSize","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),F=_e(),Z=s.useRef(),w=s.useRef(null),O=s.useRef(),I=typeof(i||g)=="number"?"".concat(i||g,"px"):i||g;s.useEffect(function(){return function(){clearTimeout(Z.current)}},[]);var W=F.unstable_strictMode&&!_,q=s.useRef(null),re=xe(u,W?q:void 0),R=function(l){return function(h,x){if(l){var S=W?[q.current,h]:[h,x],L=ge(S,2),G=L[0],J=L[1];J===void 0?l(G):l(G,J)}}},ne=R(function(o,l){o.style.height=I,k&&k(o,l)}),ie=R(function(o,l){var h=w.current?w.current.clientHeight:0,x=Q({style:P,timeout:p},{mode:"enter"}),S=x.duration;if(p==="auto"){var L=F.transitions.getAutoHeightDuration(h);o.style.transitionDuration="".concat(L,"ms"),O.current=L}else o.style.transitionDuration=typeof S=="string"?S:"".concat(S,"ms");o.style.height="".concat(h,"px"),j&&j(o,l)}),se=R(function(o,l){o.style.height="auto",C&&C(o,l)}),oe=R(function(o){var l=w.current?w.current.clientHeight:0;o.style.height="".concat(l,"px"),m&&m(o)}),ce=R(M),le=R(function(o){var l=w.current?w.current.clientHeight:0,h=Q({style:P,timeout:p},{mode:"exit"}),x=h.duration;if(p==="auto"){var S=F.transitions.getAutoHeightDuration(l);o.style.transitionDuration="".concat(S,"ms"),O.current=S}else o.style.transitionDuration=typeof x=="string"?x:"".concat(x,"ms");o.style.height=I,$&&$(o)}),de=function(l,h){var x=W?l:h;p==="auto"&&(Z.current=setTimeout(x,O.current||0))};return s.createElement(te,T({in:b,onEnter:ne,onEntered:se,onEntering:ie,onExit:oe,onExited:ce,onExiting:le,addEndListener:de,nodeRef:W?q:void 0,timeout:p==="auto"?null:p},ae),function(o,l){return s.createElement(N,T({className:H(d.root,d.container,t,{entered:d.entered,exited:!b&&I==="0px"&&d.hidden}[o]),style:T({minHeight:I},P),ref:re},l),s.createElement("div",{className:d.wrapper,ref:w},s.createElement("div",{className:d.wrapperInner},c)))})});ee.muiSupportAuto=!0;const He=A(We,{name:"MuiCollapse"})(ee);var Ae={root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},Fe=s.forwardRef(function(e,u){var c=e.disableSpacing,d=c===void 0?!1:c,t=e.classes,i=e.className,n=B(e,["disableSpacing","classes","className"]);return s.createElement("div",T({className:H(t.root,i,!d&&t.spacing),ref:u},n))});const Oe=A(Ae,{name:"MuiCardActions"})(Fe);var E=44,qe=function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}},Be=s.forwardRef(function(e,u){var c=e.classes,d=e.className,t=e.color,i=t===void 0?"primary":t,n=e.disableShrink,g=n===void 0?!1:n,y=e.size,N=y===void 0?40:y,f=e.style,_=e.thickness,b=_===void 0?3.6:_,k=e.value,C=k===void 0?0:k,j=e.variant,m=j===void 0?"indeterminate":j,M=B(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),$={},P={},z={};if(m==="determinate"||m==="static"){var p=2*Math.PI*((E-b)/2);$.strokeDasharray=p.toFixed(3),z["aria-valuenow"]=Math.round(C),$.strokeDashoffset="".concat(((100-C)/100*p).toFixed(3),"px"),P.transform="rotate(-90deg)"}return s.createElement("div",T({className:H(c.root,d,i!=="inherit"&&c["color".concat(ye(i))],{determinate:c.determinate,indeterminate:c.indeterminate,static:c.static}[m]),style:T({width:N,height:N},P,f),ref:u,role:"progressbar"},z,M),s.createElement("svg",{className:c.svg,viewBox:"".concat(E/2," ").concat(E/2," ").concat(E," ").concat(E)},s.createElement("circle",{className:H(c.circle,g&&c.circleDisableShrink,{determinate:c.circleDeterminate,indeterminate:c.circleIndeterminate,static:c.circleStatic}[m]),style:$,cx:E,cy:E,r:(E-b)/2,fill:"none",strokeWidth:b})))});const Ue=A(qe,{name:"MuiCircularProgress",flip:!1})(Be),Ve=A(a=>be({root:{height:10,borderRadius:5},colorPrimary:{backgroundColor:a.palette.grey[a.palette.type==="light"?200:700]},bar:{borderRadius:5,backgroundImage:"linear-gradient(90deg,#0fbcf9,#34e7e4)"}}))(we),Ze=X({root:{width:"100%",maxWidth:"1200px",marginTop:"20px",marginBottom:"20px",padding:"10px"}});function Ge(a){const e=Ze();return r.jsxs("div",{className:e.root,children:[r.jsx("div",{children:r.jsxs(v,{display:"flex",justifyContent:"space-around",alignItems:"center",children:[a.dest&&r.jsx(v,{minWidth:35,children:r.jsx(D,{variant:"body2",color:"textSecondary",children:a.dest})}),a.file&&r.jsx(v,{minWidth:35,children:r.jsx(D,{variant:"body2",color:"textSecondary",children:a.file})}),a.total&&r.jsx(v,{minWidth:35,children:r.jsx(D,{variant:"body2",color:"textSecondary",children:a.total})}),a.speed&&r.jsx(v,{minWidth:35,children:r.jsx(D,{variant:"body2",color:"textSecondary",children:a.speed})}),a.status&&r.jsx(v,{minWidth:35,children:r.jsx(D,{variant:"body2",color:"textSecondary",children:a.status})})]})}),r.jsxs(v,{display:"flex",alignItems:"center",children:[r.jsx(v,{width:"100%",mr:1,children:r.jsx(Ve,{variant:"determinate",...a})}),r.jsx(v,{minWidth:35,children:r.jsx(D,{variant:"body2",color:"textSecondary",children:`${Math.round(a.value)}%`})})]})]})}const Je=X(a=>({root:{[a.breakpoints.up("sm")]:{minWidth:"344px !important"},backdropFilter:"blur(8px)"},card:{background:"rgba(255, 255, 255, 0.25)",width:"100%"},upLoading:{backgroundColor:a.palette.snacbar.main,width:"100%"},upLoadComplete:{backgroundColor:a.palette.snacbar.dark,width:"100%"},loading:{color:a.palette.loading.main},typography:{fontWeight:"bold"},actionRoot:{padding:"8px 8px 8px 16px",justifyContent:"space-between"},icons:{marginLeft:"auto"},expand:{padding:"8px 8px",transform:"rotate(0deg)",transition:a.transitions.create("transform",{duration:a.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},collapse:{padding:16,backgroundColor:"rgba(255, 255, 255, 0.1)"},button:{padding:0,textTransform:"none"}})),Ke=s.forwardRef((a,e)=>{const{id:u,message:c,total:d,data:t,cb:i}=a,n=Je(),{closeSnackbar:g}=Se(),[y,N]=s.useState(!1),[f,_]=s.useState(0),b=s.useCallback(()=>{N(m=>!m)},[]),k=s.useCallback(()=>{g(u)},[u,g]);function C(m){const M=m.loaded/m.total*100|0;_(M)}async function j(){const m=await Ce(t,{onUploadProgress:C});console.log(m),i&&i()}return s.useEffect(()=>{t&&j()},[t]),r.jsx(Ee,{ref:e,className:n.root,children:r.jsxs(De,{className:f===100?n.upLoadComplete:n.upLoading,children:[r.jsxs(Oe,{classes:{root:n.actionRoot},children:[f===100?r.jsx("div",{style:{fontSize:"22px"},children:"✅"}):r.jsx(Ue,{className:n.loading,value:f,size:22}),r.jsx(D,{variant:"subtitle2",className:n.typography,children:f===100?`成功上传 ${c}`:`正在上传 ${c}`}),r.jsxs("div",{className:n.icons,children:[r.jsx(K,{"aria-label":"Show more",className:Ie(n.expand,{[n.expandOpen]:y}),onClick:b,children:r.jsx(je,{})}),r.jsx(K,{className:n.expand,onClick:k,children:r.jsx(ke,{})})]})]}),r.jsx(He,{in:y,timeout:"auto",unmountOnExit:!0,children:r.jsx(Ne,{className:n.collapse,children:r.jsx(Ge,{value:f,total:String(d)})})})]})})});Ke.displayName="SnackMessageUpLoadFileProgress";export{Ge as L,Ke as S,Ie as c,Re as d};