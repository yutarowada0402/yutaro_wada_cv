var Rr=Object.defineProperty;var Zt=e=>{throw TypeError(e)};var kr=(e,t,n)=>t in e?Rr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var x=(e,t,n)=>kr(e,typeof t!="symbol"?t+"":t,n),vt=(e,t,n)=>t.has(e)||Zt("Cannot "+n);var c=(e,t,n)=>(vt(e,t,"read from private field"),n?n.call(e):t.get(e)),O=(e,t,n)=>t.has(e)?Zt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),y=(e,t,n,r)=>(vt(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),k=(e,t,n)=>(vt(e,t,"access private method"),n);var Xt=(e,t,n,r)=>({set _(s){y(e,t,s,n)},get _(){return c(e,t,r)}});import{AsyncLocalStorage as Pr}from"node:async_hooks";function Cr(){const{process:e,Deno:t}=globalThis;return!(typeof(t==null?void 0:t.noColor)=="boolean"?t.noColor:e!==void 0?"NO_COLOR"in(e==null?void 0:e.env):!1)}var $t="__COMPOSED_HANDLER",An=e=>e.length>1,_n=e=>e[$t]?_n(e[$t]):e,Ar=e=>e.name||(An(e)?"[middleware]":"[handler]"),_r=e=>e.routes.map(({path:t,method:n,handler:r})=>{const s=_n(r);return{path:t,method:n,name:Ar(s),isMiddleware:An(s)}}),$r=(e,t)=>{const n=Cr(),r={};let s=0,o=0;_r(e).filter(({isMiddleware:i})=>!i).map(i=>{const a=`${i.method}-${i.path}`;if((r[a]||(r[a]=[])).push(i),!(r[a].length>1))return s=Math.max(s,i.method.length),o=Math.max(o,i.path.length),{method:i.method,path:i.path,routes:r[a]}}).forEach(i=>{if(!i)return;const{method:a,path:l,routes:u}=i,f=n?`\x1B[32m${a}\x1B[0m`:a;console.log(`${f} ${" ".repeat(s-a.length)} ${l}`)})};const jr=e=>(e.status(404),e.render("404 Not Found")),Nr=Object.freeze(Object.defineProperty({__proto__:null,default:jr},Symbol.toStringTag,{value:"Module"})),Tr=(e,t)=>"getResponse"in e?e.getResponse():(console.error(e.message),t.status(500),t.render("Internal Server Error")),Dr=Object.freeze(Object.defineProperty({__proto__:null,default:Tr},Symbol.toStringTag,{value:"Module"}));var $n={Stringify:1},F=(e,t)=>{const n=new String(e);return n.isEscaped=!0,n.callbacks=t,n},Lr=/[&<>'"]/,jn=async(e,t)=>{let n="";t||(t=[]);const r=await Promise.all(e);for(let s=r.length-1;n+=r[s],s--,!(s<0);s--){let o=r[s];typeof o=="object"&&t.push(...o.callbacks||[]);const i=o.isEscaped;if(o=await(typeof o=="object"?o.toString():o),typeof o=="object"&&t.push(...o.callbacks||[]),o.isEscaped??i)n+=o;else{const a=[n];ue(o,a),n=a[0]}}return F(n,t)},ue=(e,t)=>{const n=e.search(Lr);if(n===-1){t[0]+=e;return}let r,s,o=0;for(s=n;s<e.length;s++){switch(e.charCodeAt(s)){case 34:r="&quot;";break;case 39:r="&#39;";break;case 38:r="&amp;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}t[0]+=e.substring(o,s)+r,o=s+1}t[0]+=e.substring(o,s)},Nn=e=>{const t=e.callbacks;if(!(t!=null&&t.length))return e;const n=[e],r={};return t.forEach(s=>s({phase:$n.Stringify,buffer:n,context:r})),n[0]},Tn=async(e,t,n,r,s)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const o=e.callbacks;return o!=null&&o.length?(s?s[0]+=e:s=[e],Promise.all(o.map(a=>a({phase:t,buffer:s,context:r}))).then(a=>Promise.all(a.filter(Boolean).map(l=>Tn(l,t,!1,r,s))).then(()=>s[0]))):Promise.resolve(e)},Mr=(e,...t)=>{const n=[""];for(let r=0,s=e.length-1;r<s;r++){n[0]+=e[r];const o=Array.isArray(t[r])?t[r].flat(1/0):[t[r]];for(let i=0,a=o.length;i<a;i++){const l=o[i];if(typeof l=="string")ue(l,n);else if(typeof l=="number")n[0]+=l;else{if(typeof l=="boolean"||l===null||l===void 0)continue;if(typeof l=="object"&&l.isEscaped)if(l.callbacks)n.unshift("",l);else{const u=l.toString();u instanceof Promise?n.unshift("",u):n[0]+=u}else l instanceof Promise?n.unshift("",l):ue(l.toString(),n)}}}return n[0]+=e.at(-1),n.length===1?"callbacks"in n?F(Nn(F(n[0],n.callbacks))):F(n[0]):jn(n,n.callbacks)},zt=Symbol("RENDERER"),jt=Symbol("ERROR_HANDLER"),C=Symbol("STASH"),Dn=Symbol("INTERNAL"),Ir=Symbol("MEMO"),dt=Symbol("PERMALINK"),Jt=e=>(e[Dn]=!0,e),Ln=e=>({value:t,children:n})=>{if(!n)return;const r={children:[{tag:Jt(()=>{e.push(t)}),props:{}}]};Array.isArray(n)?r.children.push(...n.flat()):r.children.push(n),r.children.push({tag:Jt(()=>{e.pop()}),props:{}});const s={tag:"",props:r,type:""};return s[jt]=o=>{throw e.pop(),o},s},Mn=e=>{const t=[e],n=Ln(t);return n.values=t,n.Provider=n,_e.push(n),n},_e=[],Gt=e=>{const t=[e],n=r=>{t.push(r.value);let s;try{s=r.children?(Array.isArray(r.children)?new Fn("",{},r.children):r.children).toString():""}finally{t.pop()}return s instanceof Promise?s.then(o=>F(o,o.callbacks)):F(s)};return n.values=t,n.Provider=n,n[zt]=Ln(t),_e.push(n),n},Ee=e=>e.values.at(-1),st={title:[],script:["src"],style:["data-href"],link:["href"],meta:["name","httpEquiv","charset","itemProp"]},Nt={},ot="data-precedence",Je=e=>Array.isArray(e)?e:[e],Yt=new WeakMap,en=(e,t,n,r)=>({buffer:s,context:o})=>{if(!s)return;const i=Yt.get(o)||{};Yt.set(o,i);const a=i[e]||(i[e]=[]);let l=!1;const u=st[e];if(u.length>0){e:for(const[,f]of a)for(const h of u)if(((f==null?void 0:f[h])??null)===(n==null?void 0:n[h])){l=!0;break e}}if(l?s[0]=s[0].replaceAll(t,""):u.length>0?a.push([t,n,r]):a.unshift([t,n,r]),s[0].indexOf("</head>")!==-1){let f;if(r===void 0)f=a.map(([h])=>h);else{const h=[];f=a.map(([d,,g])=>{let v=h.indexOf(g);return v===-1&&(h.push(g),v=h.length-1),[d,v]}).sort((d,g)=>d[1]-g[1]).map(([d])=>d)}f.forEach(h=>{s[0]=s[0].replaceAll(h,"")}),s[0]=s[0].replace(/(?=<\/head>)/,f.join(""))}},Ye=(e,t,n)=>F(new q(e,n,Je(t??[])).toString()),et=(e,t,n,r)=>{if("itemProp"in n)return Ye(e,t,n);let{precedence:s,blocking:o,...i}=n;s=r?s??"":void 0,r&&(i[ot]=s);const a=new q(e,i,Je(t||[])).toString();return a instanceof Promise?a.then(l=>F(a,[...l.callbacks||[],en(e,l,i,s)])):F(a,[en(e,a,i,s)])},Hr=({children:e,...t})=>{const n=Wt();if(n){const r=Ee(n);if(r==="svg"||r==="head")return new q("title",t,Je(e??[]))}return et("title",e,t,!1)},Br=({children:e,...t})=>{const n=Wt();return["src","async"].some(r=>!t[r])||n&&Ee(n)==="head"?Ye("script",e,t):et("script",e,t,!1)},Fr=({children:e,...t})=>["href","precedence"].every(n=>n in t)?(t["data-href"]=t.href,delete t.href,et("style",e,t,!0)):Ye("style",e,t),zr=({children:e,...t})=>["onLoad","onError"].some(n=>n in t)||t.rel==="stylesheet"&&(!("precedence"in t)||"disabled"in t)?Ye("link",e,t):et("link",e,t,"precedence"in t),Gr=({children:e,...t})=>{const n=Wt();return n&&Ee(n)==="head"?Ye("meta",e,t):et("meta",e,t,!1)},In=(e,{children:t,...n})=>new q(e,n,Je(t??[])),Wr=e=>(typeof e.action=="function"&&(e.action=dt in e.action?e.action[dt]:void 0),In("form",e)),Hn=(e,t)=>(typeof t.formAction=="function"&&(t.formAction=dt in t.formAction?t.formAction[dt]:void 0),In(e,t)),Ur=e=>Hn("input",e),qr=e=>Hn("button",e);const bt=Object.freeze(Object.defineProperty({__proto__:null,button:qr,form:Wr,input:Ur,link:zr,meta:Gr,script:Br,style:Fr,title:Hr},Symbol.toStringTag,{value:"Module"}));var Vr=new Map([["className","class"],["htmlFor","for"],["crossOrigin","crossorigin"],["httpEquiv","http-equiv"],["itemProp","itemprop"],["fetchPriority","fetchpriority"],["noModule","nomodule"],["formAction","formaction"]]),pt=e=>Vr.get(e)||e,Bn=(e,t)=>{for(const[n,r]of Object.entries(e)){const s=n[0]==="-"||!/[A-Z]/.test(n)?n:n.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`);t(s,r==null?null:typeof r=="number"?s.match(/^(?:a|border-im|column(?:-c|s)|flex(?:$|-[^b])|grid-(?:ar|[^a])|font-w|li|or|sca|st|ta|wido|z)|ty$/)?`${r}`:`${r}px`:r)}},Ge=void 0,Wt=()=>Ge,Kr=e=>/[A-Z]/.test(e)&&e.match(/^(?:al|basel|clip(?:Path|Rule)$|co|do|fill|fl|fo|gl|let|lig|i|marker[EMS]|o|pai|pointe|sh|st[or]|text[^L]|tr|u|ve|w)/)?e.replace(/([A-Z])/g,"-$1").toLowerCase():e,Qr=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],Zr=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","download","formnovalidate","hidden","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],Ut=(e,t)=>{for(let n=0,r=e.length;n<r;n++){const s=e[n];if(typeof s=="string")ue(s,t);else{if(typeof s=="boolean"||s===null||s===void 0)continue;s instanceof q?s.toStringToBuffer(t):typeof s=="number"||s.isEscaped?t[0]+=s:s instanceof Promise?t.unshift("",s):Ut(s,t)}}},q=class{constructor(e,t,n){x(this,"tag");x(this,"props");x(this,"key");x(this,"children");x(this,"isEscaped",!0);x(this,"localContexts");this.tag=e,this.props=t,this.children=n}get type(){return this.tag}get ref(){return this.props.ref||null}toString(){var t,n;const e=[""];(t=this.localContexts)==null||t.forEach(([r,s])=>{r.values.push(s)});try{this.toStringToBuffer(e)}finally{(n=this.localContexts)==null||n.forEach(([r])=>{r.values.pop()})}return e.length===1?"callbacks"in e?Nn(F(e[0],e.callbacks)).toString():e[0]:jn(e,e.callbacks)}toStringToBuffer(e){const t=this.tag,n=this.props;let{children:r}=this;e[0]+=`<${t}`;const s=Ge&&Ee(Ge)==="svg"?o=>Kr(pt(o)):o=>pt(o);for(let[o,i]of Object.entries(n))if(o=s(o),o!=="children"){if(o==="style"&&typeof i=="object"){let a="";Bn(i,(l,u)=>{u!=null&&(a+=`${a?";":""}${l}:${u}`)}),e[0]+=' style="',ue(a,e),e[0]+='"'}else if(typeof i=="string")e[0]+=` ${o}="`,ue(i,e),e[0]+='"';else if(i!=null)if(typeof i=="number"||i.isEscaped)e[0]+=` ${o}="${i}"`;else if(typeof i=="boolean"&&Zr.includes(o))i&&(e[0]+=` ${o}=""`);else if(o==="dangerouslySetInnerHTML"){if(r.length>0)throw"Can only set one of `children` or `props.dangerouslySetInnerHTML`.";r=[F(i.__html)]}else if(i instanceof Promise)e[0]+=` ${o}="`,e.unshift('"',i);else if(typeof i=="function"){if(!o.startsWith("on"))throw`Invalid prop '${o}' of type 'function' supplied to '${t}'.`}else e[0]+=` ${o}="`,ue(i.toString(),e),e[0]+='"'}if(Qr.includes(t)&&r.length===0){e[0]+="/>";return}e[0]+=">",Ut(r,e),e[0]+=`</${t}>`}},wt=class extends q{toStringToBuffer(e){const{children:t}=this,n=this.tag.call(null,{...this.props,children:t.length<=1?t[0]:t});if(!(typeof n=="boolean"||n==null))if(n instanceof Promise)if(_e.length===0)e.unshift("",n);else{const r=_e.map(s=>[s,s.values.at(-1)]);e.unshift("",n.then(s=>(s instanceof q&&(s.localContexts=r),s)))}else n instanceof q?n.toStringToBuffer(e):typeof n=="number"||n.isEscaped?(e[0]+=n,n.callbacks&&(e.callbacks||(e.callbacks=[]),e.callbacks.push(...n.callbacks))):ue(n,e)}},Fn=class extends q{toStringToBuffer(e){Ut(this.children,e)}},Tt=(e,t,...n)=>{t??(t={}),n.length&&(t.children=n.length===1?n[0]:n);const r=t.key;delete t.key;const s=it(e,t,n);return s.key=r,s},tn=!1,it=(e,t,n)=>{if(!tn){for(const r in Nt)bt[r][zt]=Nt[r];tn=!0}return typeof e=="function"?new wt(e,t,n):bt[e]?new wt(bt[e],t,n):e==="svg"||e==="head"?(Ge||(Ge=Gt("")),new q(e,t,[new wt(Ge,{value:e},n)])):new q(e,t,n)},$e=({children:e})=>new Fn("",{children:e},Array.isArray(e)?e:e?[e]:[]),Xr=e=>!!(e&&typeof e=="object"&&"tag"in e&&"props"in e);function p(e,t,n){let r;if(!t||!("children"in t))r=it(e,t,[]);else{const s=t.children;r=Array.isArray(s)?it(e,t,s):it(e,t,[s])}return r.key=n,r}var We="_hp",Jr={Change:"Input",DoubleClick:"DblClick"},Yr={svg:"2000/svg",math:"1998/Math/MathML"},je=[],Dt=new WeakMap,Ne=void 0,es=()=>Ne,Z=e=>"t"in e,xt={onClick:["click",!1]},nn=e=>{if(!e.startsWith("on"))return;if(xt[e])return xt[e];const t=e.match(/^on([A-Z][a-zA-Z]+?(?:PointerCapture)?)(Capture)?$/);if(t){const[,n,r]=t;return xt[e]=[(Jr[n]||n).toLowerCase(),!!r]}},rn=(e,t)=>Ne&&e instanceof SVGElement&&/[A-Z]/.test(t)&&(t in e.style||t.match(/^(?:o|pai|str|u|ve)/))?t.replace(/([A-Z])/g,"-$1").toLowerCase():t,ts=(e,t,n)=>{var r;t||(t={});for(let s in t){const o=t[s];if(s!=="children"&&(!n||n[s]!==o)){s=pt(s);const i=nn(s);if(i){if((n==null?void 0:n[s])!==o&&(n&&e.removeEventListener(i[0],n[s],i[1]),o!=null)){if(typeof o!="function")throw new Error(`Event handler for "${s}" is not a function`);e.addEventListener(i[0],o,i[1])}}else if(s==="dangerouslySetInnerHTML"&&o)e.innerHTML=o.__html;else if(s==="ref"){let a;typeof o=="function"?a=o(e)||(()=>o(null)):o&&"current"in o&&(o.current=e,a=()=>o.current=null),Dt.set(e,a)}else if(s==="style"){const a=e.style;typeof o=="string"?a.cssText=o:(a.cssText="",o!=null&&Bn(o,a.setProperty.bind(a)))}else{if(s==="value"){const l=e.nodeName;if(l==="INPUT"||l==="TEXTAREA"||l==="SELECT"){if(e.value=o==null||o===!1?null:o,l==="TEXTAREA"){e.textContent=o;continue}else if(l==="SELECT"){e.selectedIndex===-1&&(e.selectedIndex=0);continue}}}else(s==="checked"&&e.nodeName==="INPUT"||s==="selected"&&e.nodeName==="OPTION")&&(e[s]=o);const a=rn(e,s);o==null||o===!1?e.removeAttribute(a):o===!0?e.setAttribute(a,""):typeof o=="string"||typeof o=="number"?e.setAttribute(a,o):e.setAttribute(a,o.toString())}}}if(n)for(let s in n){const o=n[s];if(s!=="children"&&!(s in t)){s=pt(s);const i=nn(s);i?e.removeEventListener(i[0],o,i[1]):s==="ref"?(r=Dt.get(e))==null||r():e.removeAttribute(rn(e,s))}}},ns=(e,t)=>{t[C][0]=0,je.push([e,t]);const n=t.tag[zt]||t.tag,r=n.defaultProps?{...n.defaultProps,...t.props}:t.props;try{return[n.call(null,r)]}finally{je.pop()}},zn=(e,t,n,r,s)=>{var o,i;(o=e.vR)!=null&&o.length&&(r.push(...e.vR),delete e.vR),typeof e.tag=="function"&&((i=e[C][1][Be])==null||i.forEach(a=>s.push(a))),e.vC.forEach(a=>{var l;if(Z(a))n.push(a);else if(typeof a.tag=="function"||a.tag===""){a.c=t;const u=n.length;if(zn(a,t,n,r,s),a.s){for(let f=u;f<n.length;f++)n[f].s=!0;a.s=!1}}else n.push(a),(l=a.vR)!=null&&l.length&&(r.push(...a.vR),delete a.vR)})},rs=e=>{for(;;e=e.tag===We||!e.vC||!e.pP?e.nN:e.vC[0]){if(!e)return null;if(e.tag!==We&&e.e)return e.e}},Gn=e=>{var t,n,r,s,o,i;Z(e)||((n=(t=e[C])==null?void 0:t[1][Be])==null||n.forEach(a=>{var l;return(l=a[2])==null?void 0:l.call(a)}),(r=Dt.get(e.e))==null||r(),e.p===2&&((s=e.vC)==null||s.forEach(a=>a.p=2)),(o=e.vC)==null||o.forEach(Gn)),e.p||((i=e.e)==null||i.remove(),delete e.e),typeof e.tag=="function"&&(Me.delete(e),at.delete(e),delete e[C][3],e.a=!0)},Wn=(e,t,n)=>{e.c=t,Un(e,t,n)},sn=(e,t)=>{if(t){for(let n=0,r=e.length;n<r;n++)if(e[n]===t)return n}},on=Symbol(),Un=(e,t,n)=>{var u;const r=[],s=[],o=[];zn(e,t,r,s,o),s.forEach(Gn);const i=n?void 0:t.childNodes;let a,l=null;if(n)a=-1;else if(!i.length)a=0;else{const f=sn(i,rs(e.nN));f!==void 0?(l=i[f],a=f):a=sn(i,(u=r.find(h=>h.tag!==We&&h.e))==null?void 0:u.e)??-1,a===-1&&(n=!0)}for(let f=0,h=r.length;f<h;f++,a++){const d=r[f];let g;if(d.s&&d.e)g=d.e,d.s=!1;else{const v=n||!d.e;Z(d)?(d.e&&d.d&&(d.e.textContent=d.t),d.d=!1,g=d.e||(d.e=document.createTextNode(d.t))):(g=d.e||(d.e=d.n?document.createElementNS(d.n,d.tag):document.createElement(d.tag)),ts(g,d.props,d.pP),Un(d,g,v))}d.tag===We?a--:n?g.parentNode||t.appendChild(g):i[a]!==g&&i[a-1]!==g&&(i[a+1]===g?t.appendChild(i[a]):t.insertBefore(g,l||i[a]||null))}if(e.pP&&delete e.pP,o.length){const f=[],h=[];o.forEach(([,d,,g,v])=>{d&&f.push(d),g&&h.push(g),v==null||v()}),f.forEach(d=>d()),h.length&&requestAnimationFrame(()=>{h.forEach(d=>d())})}},ss=(e,t)=>!!(e&&e.length===t.length&&e.every((n,r)=>n[1]===t[r][1])),at=new WeakMap,Lt=(e,t,n)=>{var o,i,a,l,u,f;const r=!n&&t.pC;n&&(t.pC||(t.pC=t.vC));let s;try{n||(n=typeof t.tag=="function"?ns(e,t):Je(t.props.children)),((o=n[0])==null?void 0:o.tag)===""&&n[0][jt]&&(s=n[0][jt],e[5].push([e,s,t]));const h=r?[...t.pC]:t.vC?[...t.vC]:void 0,d=[];let g;for(let v=0;v<n.length;v++){Array.isArray(n[v])&&n.splice(v,1,...n[v].flat());let m=os(n[v]);if(m){typeof m.tag=="function"&&!m.tag[Dn]&&(_e.length>0&&(m[C][2]=_e.map(w=>[w,w.values.at(-1)])),(i=e[5])!=null&&i.length&&(m[C][3]=e[5].at(-1)));let b;if(h&&h.length){const w=h.findIndex(Z(m)?E=>Z(E):m.key!==void 0?E=>E.key===m.key&&E.tag===m.tag:E=>E.tag===m.tag);w!==-1&&(b=h[w],h.splice(w,1))}if(b)if(Z(m))b.t!==m.t&&(b.t=m.t,b.d=!0),m=b;else{const w=b.pP=b.props;if(b.props=m.props,b.f||(b.f=m.f||t.f),typeof m.tag=="function"){const E=b[C][2];b[C][2]=m[C][2]||[],b[C][3]=m[C][3],!b.f&&((b.o||b)===m.o||(l=(a=b.tag)[Ir])!=null&&l.call(a,w,b.props))&&ss(E,b[C][2])&&(b.s=!0)}m=b}else if(!Z(m)&&Ne){const w=Ee(Ne);w&&(m.n=w)}if(!Z(m)&&!m.s&&(Lt(e,m),delete m.f),d.push(m),g&&!g.s&&!m.s)for(let w=g;w&&!Z(w);w=(u=w.vC)==null?void 0:u.at(-1))w.nN=m;g=m}}t.vR=r?[...t.vC,...h||[]]:h||[],t.vC=d,r&&delete t.pC}catch(h){if(t.f=!0,h===on){if(s)return;throw h}const[d,g,v]=((f=t[C])==null?void 0:f[3])||[];if(g){const m=()=>lt([0,!1,e[2]],v),b=at.get(v)||[];b.push(m),at.set(v,b);const w=g(h,()=>{const E=at.get(v);if(E){const S=E.indexOf(m);if(S!==-1)return E.splice(S,1),m()}});if(w){if(e[0]===1)e[1]=!0;else if(Lt(e,v,[w]),(g.length===1||e!==d)&&v.c){Wn(v,v.c,!1);return}throw on}}throw h}finally{s&&e[5].pop()}},os=e=>{if(!(e==null||typeof e=="boolean")){if(typeof e=="string"||typeof e=="number")return{t:e.toString(),d:!0};if("vR"in e&&(e={tag:e.tag,props:e.props,key:e.key,f:e.f,type:e.tag,ref:e.props.ref,o:e.o||e}),typeof e.tag=="function")e[C]=[0,[]];else{const t=Yr[e.tag];t&&(Ne||(Ne=Mn("")),e.props.children=[{tag:Ne,props:{value:e.n=`http://www.w3.org/${t}`,children:e.props.children}}])}return e}},an=(e,t)=>{var n,r;(n=t[C][2])==null||n.forEach(([s,o])=>{s.values.push(o)});try{Lt(e,t,void 0)}catch{return}if(t.a){delete t.a;return}(r=t[C][2])==null||r.forEach(([s])=>{s.values.pop()}),(e[0]!==1||!e[1])&&Wn(t,t.c,!1)},Me=new WeakMap,ln=[],lt=async(e,t)=>{e[5]||(e[5]=[]);const n=Me.get(t);n&&n[0](void 0);let r;const s=new Promise(o=>r=o);if(Me.set(t,[r,()=>{e[2]?e[2](e,t,o=>{an(o,t)}).then(()=>r(t)):(an(e,t),r(t))}]),ln.length)ln.at(-1).add(t);else{await Promise.resolve();const o=Me.get(t);o&&(Me.delete(t),o[1]())}return s},is=(e,t,n)=>({tag:We,props:{children:e},key:n,e:t,p:1}),Et=0,Be=1,St=2,Ot=3,Rt=new WeakMap,qt=(e,t)=>!e||!t||e.length!==t.length||t.some((n,r)=>n!==e[r]),as=void 0,cn=[],Ue=e=>{var i;const t=()=>typeof e=="function"?e():e,n=je.at(-1);if(!n)return[t(),()=>{}];const[,r]=n,s=(i=r[C][1])[Et]||(i[Et]=[]),o=r[C][0]++;return s[o]||(s[o]=[t(),a=>{const l=as,u=s[o];if(typeof a=="function"&&(a=a(u[0])),!Object.is(a,u[0]))if(u[0]=a,cn.length){const[f,h]=cn.at(-1);Promise.all([f===3?r:lt([f,!1,l],r),h]).then(([d])=>{if(!d||!(f===2||f===3))return;const g=d.vC;requestAnimationFrame(()=>{setTimeout(()=>{g===d.vC&&lt([f===3?1:0,!1,l],d)})})})}else lt([0,!1,l],r)}])},ls=(e,t,n)=>{var u;const r=je.at(-1);if(!r)return;const[,s]=r,o=(u=s[C][1])[Be]||(u[Be]=[]),i=s[C][0]++,[a,,l]=o[i]||(o[i]=[]);if(qt(a,n)){l&&l();const f=()=>{h[e]=void 0,h[2]=t()},h=[n,void 0,void 0,void 0,void 0];h[e]=f,o[i]=h}},un=(e,t)=>ls(3,e,t),Vt=(e,t)=>{var a;const n=je.at(-1);if(!n)return e;const[,r]=n,s=(a=r[C][1])[St]||(a[St]=[]),o=r[C][0]++,i=s[o];return qt(i==null?void 0:i[1],t)?s[o]=[e,t]:e=s[o][0],e},cs=e=>{const t=Rt.get(e);if(t){if(t.length===2)throw t[1];return t[0]}throw e.then(n=>Rt.set(e,[n]),n=>Rt.set(e,[void 0,n])),e},us=(e,t)=>{var a;const n=je.at(-1);if(!n)return e();const[,r]=n,s=(a=r[C][1])[Ot]||(a[Ot]=[]),o=r[C][0]++,i=s[o];return qt(i==null?void 0:i[1],t)&&(s[o]=[e(),t]),s[o][0]},fs=Mn({pending:!1,data:null,method:null,action:null}),fn=new Set,hs=e=>{fn.add(e),e.finally(()=>fn.delete(e))},Kt=(e,t)=>us(()=>n=>{let r;e&&(typeof e=="function"?r=e(n)||(()=>{e(null)}):e&&"current"in e&&(e.current=n,r=()=>{e.current=null}));const s=t(n);return()=>{s==null||s(),r==null||r()}},[e]),Se=Object.create(null),nt=Object.create(null),tt=(e,t,n,r,s)=>{if(t!=null&&t.itemProp)return{tag:e,props:t,type:e,ref:t.ref};const o=document.head;let{onLoad:i,onError:a,precedence:l,blocking:u,...f}=t,h=null,d=!1;const g=st[e];let v;if(g.length>0){const E=o.querySelectorAll(e);e:for(const S of E)for(const R of st[e])if(S.getAttribute(R)===t[R]){h=S;break e}if(!h){const S=g.reduce((R,P)=>t[P]===void 0?R:`${R}-${P}-${t[P]}`,e);d=!nt[S],h=nt[S]||(nt[S]=(()=>{const R=document.createElement(e);for(const P of g)t[P]!==void 0&&R.setAttribute(P,t[P]),t.rel&&R.setAttribute("rel",t.rel);return R})())}}else v=o.querySelectorAll(e);l=r?l??"":void 0,r&&(f[ot]=l);const m=Vt(E=>{if(g.length>0){let S=!1;for(const R of o.querySelectorAll(e)){if(S&&R.getAttribute(ot)!==l){o.insertBefore(E,R);return}R.getAttribute(ot)===l&&(S=!0)}o.appendChild(E)}else if(v){let S=!1;for(const R of v)if(R===E){S=!0;break}S||o.insertBefore(E,o.contains(v[0])?v[0]:o.querySelector(e)),v=void 0}},[l]),b=Kt(t.ref,E=>{var P;const S=g[0];if(n===2&&(E.innerHTML=""),(d||v)&&m(E),!a&&!i)return;let R=Se[P=E.getAttribute(S)]||(Se[P]=new Promise((V,K)=>{E.addEventListener("load",V),E.addEventListener("error",K)}));i&&(R=R.then(i)),a&&(R=R.catch(a)),R.catch(()=>{})});if(s&&u==="render"){const E=st[e][0];if(t[E]){const S=t[E],R=Se[S]||(Se[S]=new Promise((P,V)=>{m(h),h.addEventListener("load",P),h.addEventListener("error",V)}));cs(R)}}const w={tag:e,type:e,props:{...f,ref:b},ref:b};return w.p=n,h&&(w.e=h),is(w,o)},ds=e=>{const t=es(),n=t&&Ee(t);return n!=null&&n.endsWith("svg")?{tag:"title",props:e,type:"title",ref:e.ref}:tt("title",e,void 0,!1,!1)},ps=e=>!e||["src","async"].some(t=>!e[t])?{tag:"script",props:e,type:"script",ref:e.ref}:tt("script",e,1,!1,!0),ms=e=>!e||!["href","precedence"].every(t=>t in e)?{tag:"style",props:e,type:"style",ref:e.ref}:(e["data-href"]=e.href,delete e.href,tt("style",e,2,!0,!0)),gs=e=>!e||["onLoad","onError"].some(t=>t in e)||e.rel==="stylesheet"&&(!("precedence"in e)||"disabled"in e)?{tag:"link",props:e,type:"link",ref:e.ref}:tt("link",e,1,"precedence"in e,!0),ys=e=>tt("meta",e,void 0,!1,!1),qn=Symbol(),vs=e=>{const{action:t,...n}=e;typeof t!="function"&&(n.action=t);const[r,s]=Ue([null,!1]),o=Vt(async u=>{const f=u.isTrusted?t:u.detail[qn];if(typeof f!="function")return;u.preventDefault();const h=new FormData(u.target);s([h,!0]);const d=f(h);d instanceof Promise&&(hs(d),await d),s([null,!0])},[]),i=Kt(e.ref,u=>(u.addEventListener("submit",o),()=>{u.removeEventListener("submit",o)})),[a,l]=r;return r[1]=!1,{tag:fs,props:{value:{pending:a!==null,data:a,method:a?"post":null,action:a?t:null},children:{tag:"form",props:{...n,ref:i},type:"form",ref:i}},f:l}},Vn=(e,{formAction:t,...n})=>{if(typeof t=="function"){const r=Vt(s=>{s.preventDefault(),s.currentTarget.form.dispatchEvent(new CustomEvent("submit",{detail:{[qn]:t}}))},[]);n.ref=Kt(n.ref,s=>(s.addEventListener("click",r),()=>{s.removeEventListener("click",r)}))}return{tag:e,props:n,type:e,ref:n.ref}},bs=e=>Vn("input",e),ws=e=>Vn("button",e);Object.assign(Nt,{title:ds,script:ps,style:ms,link:gs,meta:ys,form:vs,input:bs,button:ws});new TextEncoder;var xs=Gt(null),Es=(e,t,n,r)=>(s,o)=>{const i="<!DOCTYPE html>",a=n?Tt(u=>n(u,e),{Layout:t,...o},s):s,l=Mr`${F(i)}${Tt(xs.Provider,{value:e},a)}`;return e.html(l)},Ss=(e,t)=>function(r,s){const o=r.getLayout()??$e;return e&&r.setLayout(i=>e({...i,Layout:o},r)),r.setRenderer(Es(r,o,e)),s()};const Os=Ss(({children:e})=>p("html",{lang:"en",children:[p("head",{children:[p("meta",{charset:"utf-8"}),p("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),p("link",{href:"/favicon.ico",rel:"icon"}),p(Go,{href:"/app/style.css",rel:"stylesheet"}),p(zo,{src:"/app/client.ts",async:!0})]}),p("body",{children:e})]})),Rs=Object.freeze(Object.defineProperty({__proto__:null,default:Os},Symbol.toStringTag,{value:"Module"}));function Kn(e){return[/github\.com\/[^\/]+\/[^\/]+/,/qiita\.com\/[^\/]+\/items/,/qiita\.com\/tags/,/zenn\.dev\/[^\/]+\/articles/,/zenn\.dev\/[^\/]+\/books/,/zenn\.dev\/topics/,/dev\.classmethod\.jp\/articles/,/speakerdeck\.com\/[^\/]+\/[^\/]+/,/x\.com\/[^\/]+\/status/,/x\.com\/search/,/docswell\.com\/slide/].some(r=>r.test(e))?!1:[/https?:\/\/dev\.classmethod\.jp\/author\/[a-zA-Z0-9_-]+$/,/https?:\/\/github\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/zenn\.dev\/[a-zA-Z0-9_-]+$/,/https?:\/\/speakerdeck\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/x\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/qiita\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/www\.docswell\.com\/user\/[a-zA-Z0-9_-]+$/].some(r=>r.test(e))}function ks(e){const t=/\[([^\]]+)\]\(([^)]+)\)/g;let n;for(;(n=t.exec(e))!==null;){const r=n[2];if(Kn(r))return!0}return!1}function Ps(e,t){if(!ks(e))return e;const n={"dev.classmethod.jp":{name:"DevelopersIO",logo:"amazonaws",color:"orange",usernameRegex:/dev\.classmethod\.jp\/author\/([^\/\s\)]+)/},"github.com":{name:"GitHub",logo:"github",color:"black",usernameRegex:/github\.com\/([^\/\s\)]+)/},"zenn.dev":{name:"Zenn",logo:"zenn",color:"blue",usernameRegex:/zenn\.dev\/([^\/\s\)]+)/},"speakerdeck.com":{name:"Speaker--Deck",logo:"speakerdeck",color:"green",usernameRegex:/speakerdeck\.com\/([^\/\s\)]+)/},"x.com":{name:"X",logo:"x",color:"black",usernameRegex:/x\.com\/([^\/\s\)]+)/},"qiita.com":{name:"Qiita",logo:"qiita",color:"brightgreen",usernameRegex:/qiita\.com\/([^\/\s\)]+)/},"www.docswell.com":{name:"Docswell",logo:"readthedocs",color:"blue",usernameRegex:/www\.docswell\.com\/user\/([^\/\s\)]+)/}};let r=e;return Object.entries(n).forEach(([s,o])=>{const i=new RegExp(`\\[([^\\]]+)\\]\\(https?://${s.replace(/\./g,"\\.")}[^\\)]*\\)`,"g");r=r.replace(i,a=>{try{const l=a.match(/\[([^\]]+)\]\(([^)]+)\)/);if(!l)return a;const u=l[2];if(!Kn(u))return a;const f=a.match(o.usernameRegex),h=f?f[1]:"";if(h){const d=encodeURIComponent(`${o.name}-@${h}`),g=encodeURIComponent(o.logo),v=encodeURIComponent(o.color),m=`https://img.shields.io/badge/${d}-${v}?style=flat&logo=${g}`;return`<a href="${u}" target="_blank" rel="noopener"><img src="${m}" alt="${o.name}" /></a>`}else{const d=encodeURIComponent(o.name),g=encodeURIComponent(o.logo),v=encodeURIComponent(o.color),m=`https://img.shields.io/badge/${d}-${v}?style=flat&logo=${g}`;return`<a href="${u}" target="_blank" rel="noopener"><img src="${m}" alt="${o.name}" /></a>`}}catch(l){return console.warn("Error converting account link:",l),a}})}),r}const Cs="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200 shadow-sm hover:bg-blue-200 transition-colors duration-200",kt=/^\d+\.\s/;function As(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function hn(e,t){return`<li class="ml-4 mb-2 flex items-start"><span class="mr-2 text-blue-500">${t}</span><span>${Ie(e)}</span></li>`}function Qn(e){return e.replace(/\*\*([^*]+)\*\*/g,'<strong class="font-bold">$1</strong>').replace(new RegExp("(?<!\\*)\\*([^*]+)\\*(?!\\*)","g"),'<em class="italic">$1</em>').replace(/`([^`]+)`/g,`<code class="${Cs}">$1</code>`)}function Ie(e){return Qn(e.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>'))}function _s(e){var s;const t=e.trim().split(`
`);let n="",r=0;for(;r<t.length;){const o=t[r].trim();if(o==="---"){n+='<hr class="my-6 border-t border-gray-200">',r++;continue}if(o.startsWith("```")){let i="";for(r++;r<t.length;){const l=t[r];if(l.trim()==="```"||l.trim().startsWith("```"))break;i+=l+`
`,r++}const a=As(i.trim());n+=`<div class="my-6 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"><pre class="p-4 overflow-x-auto bg-gray-50"><code class="text-sm text-gray-800 font-mono leading-6 whitespace-pre-wrap">${a}</code></pre></div>`,r<t.length&&r++;continue}if(o.startsWith("> ")){let i="";for(;r<t.length&&t[r].trim().startsWith("> ");)i+=t[r].trim().substring(2)+" ",r++;n+=`<blockquote class="my-4 pl-4 border-l-4 border-blue-500 bg-blue-50 py-3 pr-4 rounded-r-lg"><p class="text-gray-700 italic">${Ie(i.trim())}</p></blockquote>`;continue}if(kt.test(o)){let i=1;for(;r<t.length&&kt.test(t[r].trim());){const a=t[r].trim().replace(kt,"");n+=hn(a,`${i}.`),i++,r++}continue}if(o.startsWith("- ")){const i=o.substring(2);n+=hn(i,"•"),r++;continue}if(o.includes("|")&&((s=t[r+1])!=null&&s.includes("---"))){const i=o.split("|").map(a=>a.trim()).filter(a=>a);if(t[r+1].includes("---")){for(n+='<div class="overflow-x-auto my-4"><table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm"><thead class="bg-gray-50"><tr>',i.forEach(a=>{n+=`<th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">${Ie(a)}</th>`}),n+='</tr></thead><tbody class="divide-y divide-gray-200">',r+=2;r<t.length&&t[r].trim().includes("|");){const a=t[r].trim().split("|").map(l=>l.trim()).filter(l=>l);a.length>0&&(n+='<tr class="hover:bg-gray-50">',a.forEach(l=>{n+=`<td class="px-4 py-3 text-sm text-gray-900 border-b border-gray-200">${Ie(l)}</td>`}),n+="</tr>"),r++}n+="</tbody></table></div>";continue}}o?n+=Ie(o)+"<br>":n+="<br>",r++}return n}function $s(e){const t=/- \[([^\]]+)\]\((https:\/\/(?:speakerdeck\.com\/player\/|www\.docswell\.com\/slide\/[^/]+\/embed?)[^)]+)\)/g;return e.replace(t,(n,r,s)=>{let o=r,i="";return s.includes("speakerdeck.com")?(o=r.replace(/\s*\\?\s*-\s*Speaker\s*Deck\s*$/i,""),i="speakerdeck-iframe"):s.includes("docswell.com")&&(o=r.replace(/\s*\|\s*ドクセル\s*$/i,""),i="docswell-iframe"),`<iframe class="${i}" frameborder="0" src="${s}" title="${o}" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>`})}function js(e){const t=/- \[([^\]]+)\]\((https:\/\/www\.youtube\.com\/embed\/[^\)]+)\)/g,n=/\[([^\]]+)\]\((https:\/\/www\.youtube\.com\/embed\/[^\)]+)\)/g,r="width: 100%; height: auto; aspect-ratio: 560 / 315; border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px;";let s=e.replace(t,(o,i,a)=>`<iframe style="${r}" src="${a}" title="${i}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);return s=s.replace(n,(o,i,a)=>`<iframe style="${r}" src="${a}" title="${i}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`),s}function Ns(e){const t=/- \[([^\]]+)\]\((https:\/\/(?:dev\.classmethod\.jp\/articles\/[^)]+|qiita\.com\/[^\/]+\/items\/[^)]+|zenn\.dev\/[^\/]+\/articles\/[^)]+))\)/g;return e.replace(t,(n,r,s)=>`<iframe class="hatenablogcard" style="width:100%;height:155px;" title="${r}" src="https://hatenablog-parts.com/embed?url=${encodeURIComponent(s)}" width="300" height="150" frameborder="0" scrolling="no"></iframe>`)}function Te(e,t){if(!e.trim())return"";let n=js(e);return n=$s(n),n=Ns(n),n=Ps(n),n=_s(n),Qn(n)}function Ts(e){const t=e.split(`
`),n=[];let r=null,s=0;for(const o of t){const i=o.match(/^(#+)\s+(.+)/);if(i){r&&n.push(r);const a=i[1].length;let l=i[2];l=l.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>'),r={title:l,content:"",level:a,id:`section-${++s}`}}else r?r.content+=o+`
`:n.length===0&&(r={title:"",content:o+`
`,level:0,id:"intro"})}return r&&n.push(r),n}const Ds="component-name",Ls="component-export",Ms="data-serialized-props",Is="data-hono-template",fe="__importing_islands",Mt=Symbol(),It=Symbol(),Pt=Gt({[Mt]:!1,[It]:!1}),Zn=e=>Array.isArray(e)?e.some(Zn):typeof e=="object"&&Xr(e),Qt=({componentName:e,componentExport:t,Component:n,props:r})=>{const s={},o={};for(const a in r){const l=r[a];Zn(l)?s[a]=l:o[a]=l}const i=Ee(Pt);return i[It]||!i[Mt]?p("honox-island",{[Ds]:e,[Ls]:t||void 0,[Ms]:JSON.stringify(o),children:[p(Pt.Provider,{value:{...i,[Mt]:!0},children:p(n,{...r})}),Object.entries(s).map(([a,l])=>Tt("template",{[Is]:a,key:a},p(Pt.Provider,{value:{...i,[It]:!0},children:l})))]}):p(n,{...r})},Xn=({title:e,level:t,className:n})=>{const s=`${(o=>{switch(o){case 2:return"text-2xl font-bold text-gray-800";case 3:return"text-xl font-semibold text-blue-900";case 4:return"text-lg font-semibold text-gray-800";default:return"text-3xl font-bold text-gray-900"}})(t)} ${n||""}`;return p("h2",{className:s,dangerouslySetInnerHTML:{__html:e}})},Hs=({title:e,level:t,isOpen:n,onClick:r})=>p("button",{onClick:r,className:"flex items-center gap-3 w-full text-left p-4 hover:bg-gray-50 transition-colors rounded-lg",children:[p("span",{className:`transform transition-transform text-gray-500 ${n?"rotate-90":""}`,children:"▶"}),p(Xn,{title:e,level:t})]}),Bs=function({title:e,content:t,level:n,defaultOpen:r=!1}){const[s,o]=Ue(r);return n!==4?p("div",{className:"mb-6",children:[p(Xn,{title:e,level:n,className:"mb-4"}),p("div",{className:"prose max-w-none",dangerouslySetInnerHTML:{__html:Te(t)}})]}):p("div",{className:"mb-6 border border-gray-200 rounded-lg",children:[p(Hs,{title:e,level:n,isOpen:s,onClick:()=>o(!s)}),s&&p("div",{className:"px-4 pb-4 border-t border-gray-100",children:p("div",{className:"prose max-w-none pt-3",dangerouslySetInnerHTML:{__html:Te(t)}})})]})},Fs=function(e){return p(Qt,{componentName:"/app/islands/CollapsibleSection.tsx",Component:Bs,props:e})},zs=e=>{const[t,n]=Ue({}),[r,s]=Ue(!1);return un(()=>{const a={};e.forEach(l=>{a[l.id]=!1}),n(a)},[e]),un(()=>{const a=Object.values(t).filter(Boolean).length;s(a===e.length&&e.length>0)},[t,e.length]),{toggleStates:t,allOpen:r,handleToggle:a=>{n(l=>({...l,[a]:!l[a]}))},handleBulkToggle:()=>{const a=!r,l={};e.forEach(u=>{l[u.id]=a}),n(l),s(a)}}},Gs=({allOpen:e,onClick:t})=>p("button",{onClick:t,className:`px-3 py-1 text-sm rounded-md transition-colors flex items-center gap-2 ${e?"bg-red-100 hover:bg-red-200 text-red-700":"bg-blue-100 hover:bg-blue-200 text-blue-700"}`,children:[p("span",{className:"text-xs",children:e?"全て閉じる":"全て開く"}),p("span",{className:`transform transition-transform ${e?"rotate-180":""}`,children:"▼"})]}),Ws=({title:e,hasSubsections:t,allOpen:n,onBulkToggle:r})=>p("div",{className:"flex items-center justify-between mb-4",children:[p("h3",{className:"text-xl font-semibold text-blue-900",dangerouslySetInnerHTML:{__html:e}}),t&&p(Gs,{allOpen:n,onClick:r})]}),Us=({subsection:e,isOpen:t,onToggle:n})=>p("div",{className:"mb-4 border border-gray-200 rounded-lg",children:[p("button",{onClick:n,className:"flex items-center gap-3 w-full text-left p-4 hover:bg-gray-50 transition-colors rounded-lg",children:[p("span",{className:`transform transition-transform text-gray-500 ${t?"rotate-90":""}`,children:"▶"}),p("span",{className:"text-lg font-semibold text-gray-800",dangerouslySetInnerHTML:{__html:e.title}})]}),t&&p("div",{className:"px-4 pb-4 border-t border-gray-100",children:p("div",{className:"prose max-w-none pt-3",dangerouslySetInnerHTML:{__html:Te(e.content,e.title)}})})]}),qs=function({section:e,subsections:t}){const{toggleStates:n,allOpen:r,handleToggle:s,handleBulkToggle:o}=zs(t);return p("div",{className:"mb-8",children:[p(Ws,{title:e.title,hasSubsections:t.length>0,allOpen:r,onBulkToggle:o}),e.content.trim()&&p("div",{className:"prose max-w-none mb-6",dangerouslySetInnerHTML:{__html:Te(e.content,e.title)}}),t.map(i=>p(Us,{subsection:i,isOpen:n[i.id]||!1,onToggle:()=>s(i.id)},i.id))]})},Vs=function(e){return p(Qt,{componentName:"/app/islands/SectionGroup.tsx",Component:qs,props:e})},Ks=()=>p("svg",{className:"animate-spin h-4 w-4",fill:"none",viewBox:"0 0 24 24",children:[p("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),p("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),Qs=()=>p("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:p("path",{d:"M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"})}),Zs=()=>p("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:p("path",{d:"M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"})}),dn=({type:e,isLoading:t,onClick:n})=>{const r=e==="pdf";return p("button",{onClick:n,disabled:t,className:`flex items-center justify-center gap-2 px-6 py-3 text-white font-medium rounded-lg shadow-md transition-colors duration-200 w-[280px] ${r?"bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300":"bg-slate-500 hover:bg-slate-600 disabled:bg-slate-300"}`,children:t?p($e,{children:[p(Ks,{}),p("span",{children:"ダウンロード中..."})]}):p($e,{children:[r?p(Zs,{}):p(Qs,{}),p("span",{children:r?"PDFをダウンロード":"Markdownをダウンロード"})]})})},Xs=function(){const[e,t]=Ue(null),n=async r=>{t(r);try{const s=r==="markdown"?"README.md":"README.pdf",o=`/yutaro_wada_cv/${s}`,i=document.createElement("a");i.href=o,i.download=s,document.body.appendChild(i),i.click(),document.body.removeChild(i)}catch(s){console.error("Download failed:",s)}finally{t(null)}};return p("div",{className:"flex flex-col sm:flex-row gap-3 items-center justify-center mb-8",children:[p(dn,{type:"markdown",isLoading:e==="markdown",onClick:()=>n("markdown")}),p(dn,{type:"pdf",isLoading:e==="pdf",onClick:()=>n("pdf")})]})},Js=function(e){return p(Qt,{componentName:"/app/islands/DownloadSection.tsx",Component:Xs,props:e})},Ys=`## 基本情報

### はじめに

\`\`\`txt
こんにちは。和田と申します。

現在はデータエンジニアとして、企業のデータ利活用を支援しています。
非営利組織に対する助成を行う財団でキャリアをスタートし、新型コロナウィルス対策事業に携わる中でデータ利活用に興味を持ちました。

今後はデータエンジニアリングの技術とビジネスの橋渡し役としてのスキルをさらに磨き、意思決定や戦略立案を後押ししていきたいと考えています。
\`\`\`

### プロフィール

|項目|値|
|---|---|
|名前|和田悠太郎|
|最終学歴|東北大学教育学部 卒|
|現在の職種|データエンジニア|

### アカウント

- [Github](https://github.com/yutarowada0402)
- [X](https://x.com/taroimo_dream)

## 業務スキル

### Pythonによるハイパフォーマンスなデータ加工・集計

\`\`\`txt
- 大規模テーブルデータの高速・効率的な加工・集計を実装できます。
- Numpy配列変換による処理最適化や、Pickle・Parquet等への外部出力を経験しています。
- concurrent.futuresによる並列処理を活用できます。
- 最終アウトプットを意識した集計フロー再構築（使用列絞り込み・集計タイミング最適化）により、処理時間・キャパシティを大幅に向上させられます。
\`\`\`

### データ変換・モデリングによる高品質なデータ基盤構築

\`\`\`txt
- dbtを活用した多層アーキテクチャ（interface/dimension/fact/wide/mart）によるデータモデリングの設計・実装ができます。
- BigQueryにおいて、ウィンドウ関数等を用いた高パフォーマンスな分析クエリを記述した実績があります。
- 必要に応じて、ループや変数を用いた記述も可能です。
- マーケターが作成したSQLのレビューを多数経験しており、要件適合性・パフォーマンス・可読性など多角的な観点から品質管理を行っています。
- 月次KPIテーブルの更新管理や、事業・組織体制の変化に応じた長大なクエリの改修・最適化も得意としています。
\`\`\`

### 生成AI活用・ナレッジマネジメント

\`\`\`txt
- RAGを用いた検索ツールや、社内ルールのマークダウンファイルをデータソースとした業務効率化アプリの開発経験があります。
- Claude Code等を活用したVibe Codingに習熟しています。
- BitBucket（Git）リポジトリ内のSQLレビュー証跡をLLMに読み込ませ、汎用的な検証ナレッジの整理・活用を行っています。
- ナレッジマネジメントの文脈において、企画および実践の経験があります。
\`\`\`

## 技術スキル

実業務で使用した主な技術のみ列挙します。

### プログラミング言語

- \`Python\`
- \`SAS\`
- \`VBA\`
- \`Windows PowerShell\`

### データベース

- \`BigQuery\`
- \`Databricks\`
- \`SAS\`

### OS

- \`Windows\`
- \`Linux (CUI)\`

### ツール

- \`Git (BitBucket, GitHub)\`
- \`dbt\`
- \`Terraform\`
- \`uv\`
- \`MkDocs\`
- \`JIRA\`
- \`Confluence\`

## 保有称号

### 資格

|資格名|取得月|
|---|---|
|普通自動車第一種運転免許|2017年9月|
|普通自動二輪運転免許|2018年9月|
|日商簿記検定3級|2020年10月|
|TOEIC L&R 800点|2020年11月|
|統計検定2級|2023年2月|
|中型自動車第一種運転免許|2023年5月|

## 経歴

### stable株式会社（2026/01 - ）

\`\`\`txt
某大手出版社のデータ基盤プロジェクトに参画し、データ利活用を支援しています。主に以下の業務に従事しています。

- dbtを活用したデータモデリング・データマート構築
- Databricks基盤上でのデータ加工・整備
- ダッシュボード（PowerBI → Databricks BI）のリプレイス
- 社内ハンドブック作成による知識共有推進

過去には以下の研修を受講しています。

- dbt/Databricksオンボーディング研修（4層アーキテクチャ、Terraform、S3連携）
\`\`\`

以下では参画したプロジェクトの内、主要なもののみを記載します。

#### [某大手出版社データ基盤構築・運用プロジェクト] (2026/01 - )

**概要**

某大手出版社のDatabricks基盤上でdbtを活用したデータ加工・整備を担当。複数サービスのデータマート開発、PowerBIからDatabricks BIへのダッシュボードリプレイス実施。
interface/dimension/fact/wide/martの多層アーキテクチャによるデータモデリングを実践し、サービス/データソースごとにカタログを分離した設計を採用している。

**役割**：データエンジニア

**業務内容**

1. dbtモデルの設計・実装・レビュー（interface/dimension/fact/wide/mart層）
2. 複数サービスのデータマート構築
3. PowerBIからDatabricks BIへのダッシュボードリプレイス
4. ビジネス要件に基づくSQL最適化とロジック改修
5. Git/GitHubを活用したコードレビューとプルリクエスト管理

**使用技術**

- データ変換・モデリング：\`dbt\` \`Databricks\` \`Unity Catalog\`
- BI：\`Databricks BI\` \`PowerBI\`
- Python環境管理：\`uv\`
- バージョン管理：\`Git\` \`GitHub\`

#### [dbt/Databricksオンボーディング研修プロジェクト] （2025/12 - 2026/01）

**概要**

Databricks + dbt を活用したモダンデータスタック構築の実践プロジェクト。4層アーキテクチャ（Staging / Dimension / Fact / Mart）の構築、インクリメンタルモデルとS3データ取込の実装、Terraformによるインフラコード化（AWS S3、IAM、Databricks Job）を通じて、集英社プロジェクト参画に向けた技術習得を行った。

**役割**：データエンジニア（研修）

**業務内容**

1. dbtプロジェクトのセットアップとDatabricks OAuth認証設定
2. 4層データモデリング（Staging/Dimension/Fact/Mart）の設計・実装
3. インクリメンタルモデルによる効率的なデータ更新パイプライン構築
4. TerraformによるAWS・Databricksリソースのコード化
5. Git/GitHubを用いたプルリクエストベースの開発フロー実践

**使用技術**

- データ変換・モデリング：\`dbt\` \`Databricks\` \`Unity Catalog\` \`Delta Lake\`
- クラウドインフラ：\`AWS S3\` \`AWS IAM\`
- IaC：\`Terraform\`
- Python環境管理：\`uv\`
- 認証：\`OAuth\` \`Token認証\`
- バージョン管理：\`Git\` \`GitHub\`

**主な成果**

- 7つのプルリクエストを通じてdbt/Databricksの基礎を習得
- インクリメンタル処理とパーティショニングによるパフォーマンス最適化を実装
- Terraform stateのリモート管理とworkspace機能を活用した環境分離を実現

#### [社内ハンドブック作成] (2026/01 - )

**概要**

stable社内のデータモデリングルールや社内ルールを整理し、MkDocsを活用した社内ハンドブックを構築。
Cloudflare Pagesでホスティングし、Google Workspace連携によるアクセス制御を実装。チーム全体の知識共有と業務効率化を開始。

**役割**：企画・実装

**業務内容**

1. データモデリングルール（カタログ・スキーマ設計、命名規則等）のドキュメント化
2. MkDocsによる静的サイト構築
3. Cloudflare Pages + Zero Trustによる認証基盤の構築
4. Google Workspaceとの連携設定

**使用技術**

- ドキュメント作成：\`MkDocs\` \`Markdown\`
- ホスティング・認証：\`Cloudflare Pages\` \`Cloudflare Zero Trust\`
- IdP：\`Google Workspace\`
- バージョン管理：\`Git\` \`GitHub\`

**主な成果**

- チーム全体で参照できるデータモデリングのベストプラクティス集を構築
- 社員のみがアクセス可能なセキュアな知識共有基盤を実現

### コグラフ株式会社（2024/03 - 2026/01）

\`\`\`txt
大手WEBサービス企業のプロジェクトに参画し、データ活用を推進しています。主に以下の業務に従事しています。

- キャンペーン施策に関連するSQL（BigQuery）のレビュー
- 会員ポイントの付与・利用に関する分析基盤の構築・運用
- ビッグデータを活用したサービス横断の戦略策定に向けた分析・集計

過去には以下の業務経験があります。

- Pythonによる住宅ローンアセットリスクマネジメント（ALM）用キャッシュフロー展開ツールの開発
- 大手金融機関のローンリスク指標分析に関するSAS移管プロジェクト

また、社内リーダーとして事業部運営にも貢献しています。

- 事業部運営MTGのファシリテーター
- メンバー（約7名）の進捗管理（進捗報告MTGのファシリテーション、研修レビュー、毎月の1on1実施）
- 研修プログラムの企画改善、各メンバーの参画プロジェクトに合わせたカリキュラムの策定
- その他円滑な事業部運営の推進に向けた調整雑務
\`\`\`

以下では参画したプロジェクトの内、主要なもののみを記載します。

#### [大手WEBサービス企業キャンペーン施策関連SQL品質管理・データエンジニアリング] （2025/04 -　）

**概要**

大手WEBサービス企業（会員数 1億人以上（国内）、月間アクティブユーザー数 約6,000万人規模）のキャンペーン施策に関連するSQL品質管理およびデータエンジニアリング業務を担当。
BIツール（DOMO）を活用したポイント関連データ分析基盤の構築・運用、ポイント施策の定量分析などを通じて、サービスのデータ活用推進に貢献。

**役割**：データアナリスト

**業務内容**

1. SQLの品質管理（要件適合性レビュー）：チームメンバーが作成したSQLの要件適合性・正確性・パフォーマンス・可読性の確認、プルリクエストを利用したGitでのレビュー・コード管理推進  
2. BIツール（DOMO）を活用したポイント関連データ分析基盤の構築・運用：DOMOダッシュボード/レポートの設計・開発・運用、BIツール用SQLの記述（データ抽出・集計・加工）、Pythonによるデータ処理作業（実行・ログ確認、CSVやExcelファイルからのETL処理等）  
3. ポイント施策関連定量分析：ポイント付与履歴から逆算したサービスごとの購買量分析、キャンペーン施策の効果分析（顧客育成効果、インパクト、ROI等）、ポイント付与数の予測（複数の機械学習モデル、統計モデルでの比較）  
4. LLMを活用した業務効率アプリケーション開発：JIRA APIから取得した法務相談チケットの検索および相談内容草案作成ツールの開発、KINTONE APIから取得したキャンペーン企画基礎情報をもとにしたキャンペーン要綱自動生成ツールの作成

**使用技術**

- SQLレビュー・品質チェック：\`BigQuery\` \`Git(BitBucket)\` \`Markdown\` \`Python\`（\`pandas\`）
- データ分析基盤管理：\`DOMO\` \`BigQuery\` \`Python\`
- ETL・データ処理：\`DOMO DataFlow\` \`Python\`（\`pandas\`、\`concurrent.futures\`、\`pyarrow\`、\`openpyxl\`）
- ドキュメント作成・ナレッジ管理：\`Markdown\` \`Git(BitBucket)\`
- 定量分析・可視化：\`BigQuery\` \`Python\`（\`pandas\`、\`matplotlib\`、\`seaborn\`、\`scikit-learn\`、\`statsmodels\`他）
- LLMアプリケーション開発：\`Python\`（\`openai\`、\`langchain\`、\`streamlit\`他）

**主な成果**

- SQLレビュー工数約50％削減及び検証ナレッジの要約をSQL生成ツールのルールへ反映させるFBエコシステムの構築
- 文章作成の効率化（作成時間を1時間から数分に短縮）と誤字脱字の防止（高品質な文章の安定作成）を実現
- 分析・集計結果を納期通りに共有し、経営会議や役員説明に向けたインサイトを提供

#### [住宅ローン明細キャッシュフロー展開ツール再構築] （2024/06 - 2025/03）

**概要**

住宅ローン明細キャッシュフロー算出ツール（Excel VBA）のPythonへの置換・再構築プロジェクト。現行VBAツールの調査・設計・コーディング・テストまで一貫して担当し、大規模データ（最大40万債権）の高速処理・集計機能を実装。高セキュリティエリアでの情報管理にも配慮し、ドキュメント作成やパフォーマンス改善も推進。

**担当**:Pythonスクリプト開発

**業務内容**

1. VBAツールの調査・不要機能の洗い出し・改修
2. Pythonでの大規模データ算出・集計機能の実装（個別債権返済データ算出、キャッシュフロー展開、並列処理による高速化、メモリ負担軽減、複数条件・帳票別集計、エラーハンドリング）
3. 実行PC仕様に合わせた処理チャンク設定・パフォーマンス計測・分析・ボトルネック特定
4. 設計書・処理ロジックフロー図等のドキュメント作成

**使用技術**

- データ処理・集計：\`Python\`（\`pandas\`、\`numpy\`、\`concurrent.futures\`、\`pickle\`、\`openpyxl\`）
- VBA調査・改修：\`Excel VBA\`
- ドキュメント作成：\`Markdown\`

**主な成果**

- 既存VBAツール（処理時間3時間/5万件）→Python再構築後（1.5時間/40万件、高性能PCでは20分）へ大幅なパフォーマンス改善
- 他者コードの解読・最適化による高品質なデータ処理実装
- MECEな設計書・フロー図等のドキュメント作成
- 高セキュリティ環境下での開発・情報管理徹底
- 開発プロセス全般を一人称で遂行し、上長レビューを受けながら納品

#### [大手金融機関におけるリスク分析用SAS環境移管] （2024/05 - 2025/03）

**概要**

メガバンクのローンリスク分析を行うSASプログラムの移管開発プロジェクト。既存SASプログラムの調査・改修、開発関連ドキュメントの作成、移管先環境でのプログラム実行テストを担当。

**担当**:保守対応

**業務内容**

1. バーゼル規制対応に伴うSASプログラムの調査・修正
2. 要件定義書・設計書・テスト仕様書等のドキュメント作成
3. 移管先Linux環境でのプログラム実行・テスト

**使用技術**

- SAS開発：\`SAS\`（データセット結合、列追加・変更、PROCステップ、マクロ変数活用）
- ドキュメント作成：\`Markdown\`
- OS操作：\`Linux\`（基本コマンド、viエディタ）
- セキュリティ管理：\`ISMS順守\`

**主な成果**

- 既存ドキュメントやコードの不備を複数発見し、修正を実施

### TSD株式会社（税理士事務所）（2023/09 - 2024/02）

#### 職務概要

**業務内容**
- 企業の月次会計処理および残高試算表の作成
- 法人税申告書の作成
- 年末調整計算、給与支払報告書作成

**習得スキル**
- 会計・税務の基礎知識と月次会計処理スキル
- セルフチェックによるミス防止能力
- 不明点・情報不足・進捗を明確に分けた報告作成能力

### 株式会社リクルート（2023/06 - 2023/07）

#### 職務概要

**業務内容**
- 中途採用求人向け広告媒体のサービス紹介、商談設定までの案内
    - 1日平均発信数：150件
    - 月受注件数ノルマ達成

**習得スキル**
- 顧客属性による絞り込み・優先順位付け・KPI達成のタスク管理能力
- 状況に応じた言葉選び・説明方法の工夫による新規顧客対応力

### 株式会社エスタイル（2023/01 - 2023/05）

#### 職務概要

**業務内容**
- データサイエンス関連の研修・自己学習

**習得スキル**
- Python（標準機能、pandas、numpy、matplotlib、seaborn、scikit-learn、statsmodels、Optuna等）によるデータ集計・分析・モデル実装
- SIGNATE 第31回_Beginner限定コンペ：4位（154名中）
- SIGNATE SOTA Challenge：銅メダル（上位10％）、称号「Advanced」獲得
- SQLによるデータ取得・加工・集計
- Tableauによるデータ接続・可視化・EDA

### 公益財団法人日本財団（2021/04 - 2022/12）

#### 職務概要

**業務内容**
- 非営利団体への助成事業のヒアリング・審査、助成契約締結～完了までの管理
- 災害ボランティア団体への物資・車両等調達支援
- 感染症対策事業の進捗管理・関連機関への報告

**習得スキル**
- 状況に応じた情報収集・根拠に基づく説明力
- PCR検査事業のデータ集計・分析・提案力
- Google Workspace活用（助成金申請フロー改善、GASによる自動返信・情報一元化）


## 記事

### 投稿記事

以下ではインターネット上に投稿した文書の内、主要なものを記載します。  

#### Note

- [TableauをPythonで再現！？お手軽分析ライブラリpygwalkerのすすめ](https://note.com/cograph_data/n/na02cbfeb35b7)
- [SAS-Python書き換えメモ　～SASと向き合うことになった貴方へ～](https://note.com/cograph_data/n/n3147bba49ed2)
- [並列処理入門　Pythonでの大規模データの爆速処理をDaskではじめよう](https://note.com/cograph_data/n/n6c8339b035f6)

#### その他

- [高齢者施設等への無料PCR検査事業 中間報告 実績編](https://www.nippon-foundation.or.jp/who/news/information/2021/20210825-60865.html)
- [高齢者施設等への無料PCR検査事業 学術的分析結果公表](https://www.nippon-foundation.or.jp/who/news/information/2022/20220722-75220.html)


### インタビュー記事

以下では採用広報向けにインタビューをうけた記事を紹介します

#### Wantedly

- [【社員インタビュー】予想外こそ成長のチャンス。実務で学んだ「データアナリストに必要な経験とスキル」](https://www.wantedly.com/companies/co-graph/post_articles/958219)
- [【社員インタビュー】気軽に勉強できる環境を身近に。職種を超え学び合える文化を作りたい](https://www.wantedly.com/companies/co-graph/post_articles/936037)




`;function eo(){const e=Ts(Ys),n=(r=>{const s=[];let o=null,i=[];return r.forEach(a=>{!a.title&&a.level===0?s.push({type:"intro",section:a}):a.level===1||a.level===2?(o&&(s.push({type:"h3-group",section:o,subsections:i}),o=null,i=[]),s.push({type:"regular",section:a})):a.level===3?(o&&s.push({type:"h3-group",section:o,subsections:i}),o=a,i=[]):a.level===4&&o?i.push(a):(o&&(s.push({type:"h3-group",section:o,subsections:i}),o=null,i=[]),s.push({type:"regular",section:a}))}),o&&s.push({type:"h3-group",section:o,subsections:i}),s})(e);return p("div",{className:"min-h-screen bg-gray-50",children:p("div",{className:"max-w-4xl mx-auto py-8 px-4",children:[p("header",{className:"text-center mb-12",children:[p("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"職務経歴書"}),p(Js,{})]}),p("main",{className:"bg-white rounded-lg shadow-lg p-8",children:n.map((r,s)=>{if(r.type==="intro")return p("div",{className:"mb-8",dangerouslySetInnerHTML:{__html:`<p class="mb-4">${Te(r.section.content)}</p>`}},r.section.id);if(r.type==="h3-group")return p(Vs,{section:r.section,subsections:r.subsections||[]},r.section.id);{const o=Te(r.section.content);return p(Fs,{title:r.section.title,content:o,level:r.section.level,defaultOpen:r.section.level<=2},r.section.id)}})}),p("footer",{className:"text-center mt-12 text-gray-500",children:[p("p",{children:"Built with HonoX on GitHub Pages"}),p("p",{className:"mt-2",children:["Generated by:"," ",p("a",{href:"https://zenn.dev/tsukuboshi/articles/honox-resume",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:text-blue-800 underline",children:"Markdownで書いた職務経歴書を良い感じのWebサイトとPDFに自動変換するツールを作ってみた"})]})]})]})})}const to=!0,no=Object.freeze(Object.defineProperty({__proto__:null,__importing_islands:to,default:eo},Symbol.toStringTag,{value:"Module"}));var pn=(e,t,n)=>(r,s)=>{let o=-1;return i(0);async function i(a){if(a<=o)throw new Error("next() called multiple times");o=a;let l,u=!1,f;if(e[a]?(f=e[a][0][0],r.req.routeIndex=a):f=a===e.length&&s||void 0,f)try{l=await f(r,()=>i(a+1))}catch(h){if(h instanceof Error&&t)r.error=h,l=await t(h,r),u=!0;else throw h}else r.finalized===!1&&n&&(l=await n(r));return l&&(r.finalized===!1||u)&&(r.res=l),r}},ro=async(e,t=Object.create(null))=>{const{all:n=!1,dot:r=!1}=t,o=(e instanceof sr?e.raw.headers:e.headers).get("Content-Type");return o!=null&&o.startsWith("multipart/form-data")||o!=null&&o.startsWith("application/x-www-form-urlencoded")?so(e,{all:n,dot:r}):{}};async function so(e,t){const n=await e.formData();return n?oo(n,t):{}}function oo(e,t){const n=Object.create(null);return e.forEach((r,s)=>{t.all||s.endsWith("[]")?io(n,s,r):n[s]=r}),t.dot&&Object.entries(n).forEach(([r,s])=>{r.includes(".")&&(ao(n,r,s),delete n[r])}),n}var io=(e,t,n)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(n):e[t]=[e[t],n]:e[t]=n},ao=(e,t,n)=>{let r=e;const s=t.split(".");s.forEach((o,i)=>{i===s.length-1?r[o]=n:((!r[o]||typeof r[o]!="object"||Array.isArray(r[o])||r[o]instanceof File)&&(r[o]=Object.create(null)),r=r[o])})},Jn=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},lo=e=>{const{groups:t,path:n}=co(e),r=Jn(n);return uo(r,t)},co=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(n,r)=>{const s=`@${r}`;return t.push([s,n]),s}),{groups:t,path:e}},uo=(e,t)=>{for(let n=t.length-1;n>=0;n--){const[r]=t[n];for(let s=e.length-1;s>=0;s--)if(e[s].includes(r)){e[s]=e[s].replace(r,t[n][1]);break}}return e},rt={},mn=(e,t)=>{if(e==="*")return"*";const n=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(n){const r=`${e}#${t}`;return rt[r]||(n[2]?rt[r]=t&&t[0]!==":"&&t[0]!=="*"?[r,n[1],new RegExp(`^${n[2]}(?=/${t})`)]:[e,n[1],new RegExp(`^${n[2]}$`)]:rt[r]=[e,n[1],!0]),rt[r]}return null},Yn=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,n=>{try{return t(n)}catch{return n}})}},fo=e=>Yn(e,decodeURI),er=e=>{const t=e.url,n=t.indexOf("/",8);let r=n;for(;r<t.length;r++){const s=t.charCodeAt(r);if(s===37){const o=t.indexOf("?",r),i=t.slice(n,o===-1?void 0:o);return fo(i.includes("%25")?i.replace(/%25/g,"%2525"):i)}else if(s===63)break}return t.slice(n,r)},ho=e=>{const t=er(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},Re=(e,t,...n)=>(n.length&&(t=Re(t,...n)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),tr=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),n=[];let r="";return t.forEach(s=>{if(s!==""&&!/\:/.test(s))r+="/"+s;else if(/\:/.test(s))if(/\?/.test(s)){n.length===0&&r===""?n.push("/"):n.push(r);const o=s.replace("?","");r+="/"+o,n.push(r)}else r+="/"+s}),n.filter((s,o,i)=>i.indexOf(s)===o)},Ct=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?rr(e):e):e,nr=(e,t,n)=>{let r;if(!n&&t&&!/[%+]/.test(t)){let i=e.indexOf(`?${t}`,8);for(i===-1&&(i=e.indexOf(`&${t}`,8));i!==-1;){const a=e.charCodeAt(i+t.length+1);if(a===61){const l=i+t.length+2,u=e.indexOf("&",l);return Ct(e.slice(l,u===-1?void 0:u))}else if(a==38||isNaN(a))return"";i=e.indexOf(`&${t}`,i+1)}if(r=/[%+]/.test(e),!r)return}const s={};r??(r=/[%+]/.test(e));let o=e.indexOf("?",8);for(;o!==-1;){const i=e.indexOf("&",o+1);let a=e.indexOf("=",o);a>i&&i!==-1&&(a=-1);let l=e.slice(o+1,a===-1?i===-1?void 0:i:a);if(r&&(l=Ct(l)),o=i,l==="")continue;let u;a===-1?u="":(u=e.slice(a+1,i===-1?void 0:i),r&&(u=Ct(u))),n?(s[l]&&Array.isArray(s[l])||(s[l]=[]),s[l].push(u)):s[l]??(s[l]=u)}return t?s[t]:s},po=nr,mo=(e,t)=>nr(e,t,!0),rr=decodeURIComponent,gn=e=>Yn(e,rr),ke,z,ne,or,ir,Ht,oe,wn,sr=(wn=class{constructor(e,t="/",n=[[]]){O(this,ne);x(this,"raw");O(this,ke);O(this,z);x(this,"routeIndex",0);x(this,"path");x(this,"bodyCache",{});O(this,oe,e=>{const{bodyCache:t,raw:n}=this,r=t[e];if(r)return r;const s=Object.keys(t)[0];return s?t[s].then(o=>(s==="json"&&(o=JSON.stringify(o)),new Response(o)[e]())):t[e]=n[e]()});this.raw=e,this.path=t,y(this,z,n),y(this,ke,{})}param(e){return e?k(this,ne,or).call(this,e):k(this,ne,ir).call(this)}query(e){return po(this.url,e)}queries(e){return mo(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((n,r)=>{t[r]=n}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await ro(this,e))}json(){return c(this,oe).call(this,"json")}text(){return c(this,oe).call(this,"text")}arrayBuffer(){return c(this,oe).call(this,"arrayBuffer")}blob(){return c(this,oe).call(this,"blob")}formData(){return c(this,oe).call(this,"formData")}addValidatedData(e,t){c(this,ke)[e]=t}valid(e){return c(this,ke)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get matchedRoutes(){return c(this,z)[0].map(([[,e]])=>e)}get routePath(){return c(this,z)[0].map(([[,e]])=>e)[this.routeIndex].path}},ke=new WeakMap,z=new WeakMap,ne=new WeakSet,or=function(e){const t=c(this,z)[0][this.routeIndex][1][e],n=k(this,ne,Ht).call(this,t);return n?/\%/.test(n)?gn(n):n:void 0},ir=function(){const e={},t=Object.keys(c(this,z)[0][this.routeIndex][1]);for(const n of t){const r=k(this,ne,Ht).call(this,c(this,z)[0][this.routeIndex][1][n]);r&&typeof r=="string"&&(e[n]=/\%/.test(r)?gn(r):r)}return e},Ht=function(e){return c(this,z)[1]?c(this,z)[1][e]:e},oe=new WeakMap,wn),go="text/plain; charset=UTF-8",At=(e,t={})=>{for(const n of Object.keys(t))e.set(n,t[n]);return e},qe,Ve,X,ye,J,_,$,I,Y,Ke,Pe,Ce,Qe,Ze,M,B,xn,yo=(xn=class{constructor(e,t){O(this,M);O(this,qe);O(this,Ve);x(this,"env",{});O(this,X);x(this,"finalized",!1);x(this,"error");O(this,ye,200);O(this,J);O(this,_);O(this,$);O(this,I);O(this,Y,!0);O(this,Ke);O(this,Pe);O(this,Ce);O(this,Qe);O(this,Ze);x(this,"render",(...e)=>(c(this,Pe)??y(this,Pe,t=>this.html(t)),c(this,Pe).call(this,...e)));x(this,"setLayout",e=>y(this,Ke,e));x(this,"getLayout",()=>c(this,Ke));x(this,"setRenderer",e=>{y(this,Pe,e)});x(this,"header",(e,t,n)=>{if(this.finalized&&y(this,I,new Response(c(this,I).body,c(this,I))),t===void 0){c(this,_)?c(this,_).delete(e):c(this,$)&&delete c(this,$)[e.toLocaleLowerCase()],this.finalized&&this.res.headers.delete(e);return}n!=null&&n.append?(c(this,_)||(y(this,Y,!1),y(this,_,new Headers(c(this,$))),y(this,$,{})),c(this,_).append(e,t)):c(this,_)?c(this,_).set(e,t):(c(this,$)??y(this,$,{}),c(this,$)[e.toLowerCase()]=t),this.finalized&&(n!=null&&n.append?this.res.headers.append(e,t):this.res.headers.set(e,t))});x(this,"status",e=>{y(this,Y,!1),y(this,ye,e)});x(this,"set",(e,t)=>{c(this,X)??y(this,X,new Map),c(this,X).set(e,t)});x(this,"get",e=>c(this,X)?c(this,X).get(e):void 0);x(this,"newResponse",(...e)=>k(this,M,B).call(this,...e));x(this,"body",(e,t,n)=>typeof t=="number"?k(this,M,B).call(this,e,t,n):k(this,M,B).call(this,e,t));x(this,"text",(e,t,n)=>{if(!c(this,$)){if(c(this,Y)&&!n&&!t)return new Response(e);y(this,$,{})}return c(this,$)["content-type"]=go,typeof t=="number"?k(this,M,B).call(this,e,t,n):k(this,M,B).call(this,e,t)});x(this,"json",(e,t,n)=>{const r=JSON.stringify(e);return c(this,$)??y(this,$,{}),c(this,$)["content-type"]="application/json",typeof t=="number"?k(this,M,B).call(this,r,t,n):k(this,M,B).call(this,r,t)});x(this,"html",(e,t,n)=>(c(this,$)??y(this,$,{}),c(this,$)["content-type"]="text/html; charset=UTF-8",typeof e=="object"?Tn(e,$n.Stringify,!1,{}).then(r=>typeof t=="number"?k(this,M,B).call(this,r,t,n):k(this,M,B).call(this,r,t)):typeof t=="number"?k(this,M,B).call(this,e,t,n):k(this,M,B).call(this,e,t)));x(this,"redirect",(e,t)=>(c(this,_)??y(this,_,new Headers),c(this,_).set("Location",String(e)),this.newResponse(null,t??302)));x(this,"notFound",()=>(c(this,Ce)??y(this,Ce,()=>new Response),c(this,Ce).call(this,this)));y(this,qe,e),t&&(y(this,J,t.executionCtx),this.env=t.env,y(this,Ce,t.notFoundHandler),y(this,Ze,t.path),y(this,Qe,t.matchResult))}get req(){return c(this,Ve)??y(this,Ve,new sr(c(this,qe),c(this,Ze),c(this,Qe))),c(this,Ve)}get event(){if(c(this,J)&&"respondWith"in c(this,J))return c(this,J);throw Error("This context has no FetchEvent")}get executionCtx(){if(c(this,J))return c(this,J);throw Error("This context has no ExecutionContext")}get res(){return y(this,Y,!1),c(this,I)||y(this,I,new Response("404 Not Found",{status:404}))}set res(e){if(y(this,Y,!1),c(this,I)&&e){e=new Response(e.body,e);for(const[t,n]of c(this,I).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const r=c(this,I).headers.getSetCookie();e.headers.delete("set-cookie");for(const s of r)e.headers.append("set-cookie",s)}else e.headers.set(t,n)}y(this,I,e),this.finalized=!0}get var(){return c(this,X)?Object.fromEntries(c(this,X)):{}}},qe=new WeakMap,Ve=new WeakMap,X=new WeakMap,ye=new WeakMap,J=new WeakMap,_=new WeakMap,$=new WeakMap,I=new WeakMap,Y=new WeakMap,Ke=new WeakMap,Pe=new WeakMap,Ce=new WeakMap,Qe=new WeakMap,Ze=new WeakMap,M=new WeakSet,B=function(e,t,n){if(c(this,Y)&&!n&&!t&&c(this,ye)===200)return new Response(e,{headers:c(this,$)});if(t&&typeof t!="number"){const s=new Headers(t.headers);c(this,_)&&c(this,_).forEach((i,a)=>{a==="set-cookie"?s.append(a,i):s.set(a,i)});const o=At(s,c(this,$));return new Response(e,{headers:o,status:t.status??c(this,ye)})}const r=typeof t=="number"?t:c(this,ye);c(this,$)??y(this,$,{}),c(this,_)??y(this,_,new Headers),At(c(this,_),c(this,$)),c(this,I)&&(c(this,I).headers.forEach((s,o)=>{var i,a;o==="set-cookie"?(i=c(this,_))==null||i.append(o,s):(a=c(this,_))==null||a.set(o,s)}),At(c(this,_),c(this,$))),n??(n={});for(const[s,o]of Object.entries(n))if(typeof o=="string")c(this,_).set(s,o);else{c(this,_).delete(s);for(const i of o)c(this,_).append(s,i)}return new Response(e,{status:r,headers:c(this,_)})},xn),j="ALL",vo="all",bo=["get","post","put","delete","options","patch"],ar="Can not add a route since the matcher is already built.",lr=class extends Error{},wo=e=>e.text("404 Not Found",404),yn=(e,t)=>{if("getResponse"in e){const n=e.getResponse();return t.newResponse(n.body,n)}return console.error(e),t.text("Internal Server Error",500)},G,N,ur,W,me,ct,ut,En,cr=(En=class{constructor(t={}){O(this,N);x(this,"get");x(this,"post");x(this,"put");x(this,"delete");x(this,"options");x(this,"patch");x(this,"all");x(this,"on");x(this,"use");x(this,"router");x(this,"getPath");x(this,"_basePath","/");O(this,G,"/");x(this,"routes",[]);O(this,W,wo);x(this,"errorHandler",yn);x(this,"onError",t=>(this.errorHandler=t,this));x(this,"notFound",t=>(y(this,W,t),this));x(this,"fetch",(t,...n)=>k(this,N,ut).call(this,t,n[1],n[0],t.method));x(this,"request",(t,n,r,s)=>t instanceof Request?this.fetch(n?new Request(t,n):t,r,s):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${Re("/",t)}`,n),r,s)));x(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(k(this,N,ut).call(this,t.request,t,void 0,t.request.method))})});[...bo,vo].forEach(o=>{this[o]=(i,...a)=>(typeof i=="string"?y(this,G,i):k(this,N,me).call(this,o,c(this,G),i),a.forEach(l=>{k(this,N,me).call(this,o,c(this,G),l)}),this)}),this.on=(o,i,...a)=>{for(const l of[i].flat()){y(this,G,l);for(const u of[o].flat())a.map(f=>{k(this,N,me).call(this,u.toUpperCase(),c(this,G),f)})}return this},this.use=(o,...i)=>(typeof o=="string"?y(this,G,o):(y(this,G,"*"),i.unshift(o)),i.forEach(a=>{k(this,N,me).call(this,j,c(this,G),a)}),this);const{strict:r,...s}=t;Object.assign(this,s),this.getPath=r??!0?t.getPath??er:ho}route(t,n){const r=this.basePath(t);return n.routes.map(s=>{var i;let o;n.errorHandler===yn?o=s.handler:(o=async(a,l)=>(await pn([],n.errorHandler)(a,()=>s.handler(a,l))).res,o[$t]=s.handler),k(i=r,N,me).call(i,s.method,s.path,o)}),this}basePath(t){const n=k(this,N,ur).call(this);return n._basePath=Re(this._basePath,t),n}mount(t,n,r){let s,o;r&&(typeof r=="function"?o=r:(o=r.optionHandler,r.replaceRequest===!1?s=l=>l:s=r.replaceRequest));const i=o?l=>{const u=o(l);return Array.isArray(u)?u:[u]}:l=>{let u;try{u=l.executionCtx}catch{}return[l.env,u]};s||(s=(()=>{const l=Re(this._basePath,t),u=l==="/"?0:l.length;return f=>{const h=new URL(f.url);return h.pathname=h.pathname.slice(u)||"/",new Request(h,f)}})());const a=async(l,u)=>{const f=await n(s(l.req.raw),...i(l));if(f)return f;await u()};return k(this,N,me).call(this,j,Re(t,"*"),a),this}},G=new WeakMap,N=new WeakSet,ur=function(){const t=new cr({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,y(t,W,c(this,W)),t.routes=this.routes,t},W=new WeakMap,me=function(t,n,r){t=t.toUpperCase(),n=Re(this._basePath,n);const s={path:n,method:t,handler:r};this.router.add(t,n,[r,s]),this.routes.push(s)},ct=function(t,n){if(t instanceof Error)return this.errorHandler(t,n);throw t},ut=function(t,n,r,s){if(s==="HEAD")return(async()=>new Response(null,await k(this,N,ut).call(this,t,n,r,"GET")))();const o=this.getPath(t,{env:r}),i=this.router.match(s,o),a=new yo(t,{path:o,matchResult:i,env:r,executionCtx:n,notFoundHandler:c(this,W)});if(i[0].length===1){let u;try{u=i[0][0][0][0](a,async()=>{a.res=await c(this,W).call(this,a)})}catch(f){return k(this,N,ct).call(this,f,a)}return u instanceof Promise?u.then(f=>f||(a.finalized?a.res:c(this,W).call(this,a))).catch(f=>k(this,N,ct).call(this,f,a)):u??c(this,W).call(this,a)}const l=pn(i[0],this.errorHandler,c(this,W));return(async()=>{try{const u=await l(a);if(!u.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return u.res}catch(u){return k(this,N,ct).call(this,u,a)}})()},En),mt="[^/]+",Fe=".*",ze="(?:|/.*)",He=Symbol(),xo=new Set(".\\+*[^]$()");function Eo(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===Fe||e===ze?1:t===Fe||t===ze?-1:e===mt?1:t===mt?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var ve,be,U,Sn,Bt=(Sn=class{constructor(){O(this,ve);O(this,be);O(this,U,Object.create(null))}insert(t,n,r,s,o){if(t.length===0){if(c(this,ve)!==void 0)throw He;if(o)return;y(this,ve,n);return}const[i,...a]=t,l=i==="*"?a.length===0?["","",Fe]:["","",mt]:i==="/*"?["","",ze]:i.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let u;if(l){const f=l[1];let h=l[2]||mt;if(f&&l[2]&&(h=h.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(h)))throw He;if(u=c(this,U)[h],!u){if(Object.keys(c(this,U)).some(d=>d!==Fe&&d!==ze))throw He;if(o)return;u=c(this,U)[h]=new Bt,f!==""&&y(u,be,s.varIndex++)}!o&&f!==""&&r.push([f,c(u,be)])}else if(u=c(this,U)[i],!u){if(Object.keys(c(this,U)).some(f=>f.length>1&&f!==Fe&&f!==ze))throw He;if(o)return;u=c(this,U)[i]=new Bt}u.insert(a,n,r,s,o)}buildRegExpStr(){const n=Object.keys(c(this,U)).sort(Eo).map(r=>{const s=c(this,U)[r];return(typeof c(s,be)=="number"?`(${r})@${c(s,be)}`:xo.has(r)?`\\${r}`:r)+s.buildRegExpStr()});return typeof c(this,ve)=="number"&&n.unshift(`#${c(this,ve)}`),n.length===0?"":n.length===1?n[0]:"(?:"+n.join("|")+")"}},ve=new WeakMap,be=new WeakMap,U=new WeakMap,Sn),gt,Xe,On,So=(On=class{constructor(){O(this,gt,{varIndex:0});O(this,Xe,new Bt)}insert(e,t,n){const r=[],s=[];for(let i=0;;){let a=!1;if(e=e.replace(/\{[^}]+\}/g,l=>{const u=`@\\${i}`;return s[i]=[u,l],i++,a=!0,u}),!a)break}const o=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let i=s.length-1;i>=0;i--){const[a]=s[i];for(let l=o.length-1;l>=0;l--)if(o[l].indexOf(a)!==-1){o[l]=o[l].replace(a,s[i][1]);break}}return c(this,Xe).insert(o,t,r,c(this,gt),n),r}buildRegExp(){let e=c(this,Xe).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const n=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(s,o,i)=>o!==void 0?(n[++t]=Number(o),"$()"):(i!==void 0&&(r[Number(i)]=++t),"")),[new RegExp(`^${e}`),n,r]}},gt=new WeakMap,Xe=new WeakMap,On),fr=[],Oo=[/^$/,[],Object.create(null)],ft=Object.create(null);function hr(e){return ft[e]??(ft[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,n)=>n?`\\${n}`:"(?:|/.*)")}$`))}function Ro(){ft=Object.create(null)}function ko(e){var u;const t=new So,n=[];if(e.length===0)return Oo;const r=e.map(f=>[!/\*|\/:/.test(f[0]),...f]).sort(([f,h],[d,g])=>f?1:d?-1:h.length-g.length),s=Object.create(null);for(let f=0,h=-1,d=r.length;f<d;f++){const[g,v,m]=r[f];g?s[v]=[m.map(([w])=>[w,Object.create(null)]),fr]:h++;let b;try{b=t.insert(v,h,g)}catch(w){throw w===He?new lr(v):w}g||(n[h]=m.map(([w,E])=>{const S=Object.create(null);for(E-=1;E>=0;E--){const[R,P]=b[E];S[R]=P}return[w,S]}))}const[o,i,a]=t.buildRegExp();for(let f=0,h=n.length;f<h;f++)for(let d=0,g=n[f].length;d<g;d++){const v=(u=n[f][d])==null?void 0:u[1];if(!v)continue;const m=Object.keys(v);for(let b=0,w=m.length;b<w;b++)v[m[b]]=a[v[m[b]]]}const l=[];for(const f in i)l[f]=n[i[f]];return[o,l,s]}function Oe(e,t){if(e){for(const n of Object.keys(e).sort((r,s)=>s.length-r.length))if(hr(n).test(t))return[...e[n]]}}var ie,ae,De,dr,pr,Rn,Po=(Rn=class{constructor(){O(this,De);x(this,"name","RegExpRouter");O(this,ie);O(this,ae);y(this,ie,{[j]:Object.create(null)}),y(this,ae,{[j]:Object.create(null)})}add(e,t,n){var a;const r=c(this,ie),s=c(this,ae);if(!r||!s)throw new Error(ar);r[e]||[r,s].forEach(l=>{l[e]=Object.create(null),Object.keys(l[j]).forEach(u=>{l[e][u]=[...l[j][u]]})}),t==="/*"&&(t="*");const o=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const l=hr(t);e===j?Object.keys(r).forEach(u=>{var f;(f=r[u])[t]||(f[t]=Oe(r[u],t)||Oe(r[j],t)||[])}):(a=r[e])[t]||(a[t]=Oe(r[e],t)||Oe(r[j],t)||[]),Object.keys(r).forEach(u=>{(e===j||e===u)&&Object.keys(r[u]).forEach(f=>{l.test(f)&&r[u][f].push([n,o])})}),Object.keys(s).forEach(u=>{(e===j||e===u)&&Object.keys(s[u]).forEach(f=>l.test(f)&&s[u][f].push([n,o]))});return}const i=tr(t)||[t];for(let l=0,u=i.length;l<u;l++){const f=i[l];Object.keys(s).forEach(h=>{var d;(e===j||e===h)&&((d=s[h])[f]||(d[f]=[...Oe(r[h],f)||Oe(r[j],f)||[]]),s[h][f].push([n,o-u+l+1]))})}}match(e,t){Ro();const n=k(this,De,dr).call(this);return this.match=(r,s)=>{const o=n[r]||n[j],i=o[2][s];if(i)return i;const a=s.match(o[0]);if(!a)return[[],fr];const l=a.indexOf("",1);return[o[1][l],a]},this.match(e,t)}},ie=new WeakMap,ae=new WeakMap,De=new WeakSet,dr=function(){const e=Object.create(null);return Object.keys(c(this,ae)).concat(Object.keys(c(this,ie))).forEach(t=>{e[t]||(e[t]=k(this,De,pr).call(this,t))}),y(this,ie,y(this,ae,void 0)),e},pr=function(e){const t=[];let n=e===j;return[c(this,ie),c(this,ae)].forEach(r=>{const s=r[e]?Object.keys(r[e]).map(o=>[o,r[e][o]]):[];s.length!==0?(n||(n=!0),t.push(...s)):e!==j&&t.push(...Object.keys(r[j]).map(o=>[o,r[j][o]]))}),n?ko(t):null},Rn),le,ee,kn,Co=(kn=class{constructor(e){x(this,"name","SmartRouter");O(this,le,[]);O(this,ee,[]);y(this,le,e.routers)}add(e,t,n){if(!c(this,ee))throw new Error(ar);c(this,ee).push([e,t,n])}match(e,t){if(!c(this,ee))throw new Error("Fatal error");const n=c(this,le),r=c(this,ee),s=n.length;let o=0,i;for(;o<s;o++){const a=n[o];try{for(let l=0,u=r.length;l<u;l++)a.add(...r[l]);i=a.match(e,t)}catch(l){if(l instanceof lr)continue;throw l}this.match=a.match.bind(a),y(this,le,[a]),y(this,ee,void 0);break}if(o===s)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,i}get activeRouter(){if(c(this,ee)||c(this,le).length!==1)throw new Error("No active router has been determined yet.");return c(this,le)[0]}},le=new WeakMap,ee=new WeakMap,kn),Le=Object.create(null),ce,L,we,Ae,D,te,ge,Pn,mr=(Pn=class{constructor(e,t,n){O(this,te);O(this,ce);O(this,L);O(this,we);O(this,Ae,0);O(this,D,Le);if(y(this,L,n||Object.create(null)),y(this,ce,[]),e&&t){const r=Object.create(null);r[e]={handler:t,possibleKeys:[],score:0},y(this,ce,[r])}y(this,we,[])}insert(e,t,n){y(this,Ae,++Xt(this,Ae)._);let r=this;const s=lo(t),o=[];for(let l=0,u=s.length;l<u;l++){const f=s[l],h=s[l+1],d=mn(f,h),g=Array.isArray(d)?d[0]:f;if(Object.keys(c(r,L)).includes(g)){r=c(r,L)[g];const v=mn(f,h);v&&o.push(v[1]);continue}c(r,L)[g]=new mr,d&&(c(r,we).push(d),o.push(d[1])),r=c(r,L)[g]}const i=Object.create(null),a={handler:n,possibleKeys:o.filter((l,u,f)=>f.indexOf(l)===u),score:c(this,Ae)};return i[e]=a,c(r,ce).push(i),r}search(e,t){var a;const n=[];y(this,D,Le);let s=[this];const o=Jn(t),i=[];for(let l=0,u=o.length;l<u;l++){const f=o[l],h=l===u-1,d=[];for(let g=0,v=s.length;g<v;g++){const m=s[g],b=c(m,L)[f];b&&(y(b,D,c(m,D)),h?(c(b,L)["*"]&&n.push(...k(this,te,ge).call(this,c(b,L)["*"],e,c(m,D))),n.push(...k(this,te,ge).call(this,b,e,c(m,D)))):d.push(b));for(let w=0,E=c(m,we).length;w<E;w++){const S=c(m,we)[w],R=c(m,D)===Le?{}:{...c(m,D)};if(S==="*"){const A=c(m,L)["*"];A&&(n.push(...k(this,te,ge).call(this,A,e,c(m,D))),y(A,D,R),d.push(A));continue}if(f==="")continue;const[P,V,K]=S,H=c(m,L)[P],yt=o.slice(l).join("/");if(K instanceof RegExp){const A=K.exec(yt);if(A){if(R[V]=A[0],n.push(...k(this,te,ge).call(this,H,e,c(m,D),R)),Object.keys(c(H,L)).length){y(H,D,R);const T=((a=A[0].match(/\//))==null?void 0:a.length)??0;(i[T]||(i[T]=[])).push(H)}continue}}(K===!0||K.test(f))&&(R[V]=f,h?(n.push(...k(this,te,ge).call(this,H,e,R,c(m,D))),c(H,L)["*"]&&n.push(...k(this,te,ge).call(this,c(H,L)["*"],e,R,c(m,D)))):(y(H,D,R),d.push(H)))}}s=d.concat(i.shift()??[])}return n.length>1&&n.sort((l,u)=>l.score-u.score),[n.map(({handler:l,params:u})=>[l,u])]}},ce=new WeakMap,L=new WeakMap,we=new WeakMap,Ae=new WeakMap,D=new WeakMap,te=new WeakSet,ge=function(e,t,n,r){const s=[];for(let o=0,i=c(e,ce).length;o<i;o++){const a=c(e,ce)[o],l=a[t]||a[j],u={};if(l!==void 0&&(l.params=Object.create(null),s.push(l),n!==Le||r&&r!==Le))for(let f=0,h=l.possibleKeys.length;f<h;f++){const d=l.possibleKeys[f],g=u[l.score];l.params[d]=r!=null&&r[d]&&!g?r[d]:n[d]??(r==null?void 0:r[d]),u[l.score]=!0}}return s},Pn),xe,Cn,Ao=(Cn=class{constructor(){x(this,"name","TrieRouter");O(this,xe);y(this,xe,new mr)}add(e,t,n){const r=tr(t);if(r){for(let s=0,o=r.length;s<o;s++)c(this,xe).insert(e,r[s],n);return}c(this,xe).insert(e,t,n)}match(e,t){return c(this,xe).search(e,t)}},xe=new WeakMap,Cn),ht=class extends cr{constructor(e={}){super(e),this.router=e.router??new Co({routers:[new Po,new Ao]})}},_o=e=>e;const gr=new Pr,vn=e=>(e=e.replace(/\.tsx?$/g,"").replace(/\.mdx?$/g,"").replace(/^\/?index$/,"/").replace(/\/index$/,"").replace(/\[\.{3}.+\]/,"*").replace(/\((.+?)\)/g,"").replace(/\[(.+?)\]/g,":$1").replace(/\/\//g,"/"),/^\//.test(e)?e:"/"+e),_t=e=>{const t={};for(const[n,r]of Object.entries(e)){const s=n.split("/"),o=s.pop(),i=s.join("/");t[i]||(t[i]={}),o&&(t[i][o]=r)}for(const[n,r]of Object.entries(t)){const s=Object.entries(r).sort(([o],[i])=>o[0]==="["&&i[0]!=="["?1:o[0]!=="["&&i[0]==="["?-1:o.localeCompare(i));t[n]=Object.fromEntries(s)}return t},$o=e=>Object.keys(e).sort((n,r)=>{const s=n.split("/").length,o=r.split("/").length;return s-o||r.localeCompare(n)}).map(n=>({[n]:e[n]})),jo=e=>{const t={};for(const r of Object.keys(e)){const s=r.split("/");s.pop();const o=s.join("/");t[o]||(t[o]=[]),t[o].includes(r)||t[o].push(r)}const n=Object.keys(t).sort((r,s)=>s.length-r.length);for(const r of n)for(const s of n)if(s.startsWith(r)&&s!==r){const o=new Set([...t[s],...t[r]]);t[s]=[...o]}return t},yr="_404.tsx",No="_error.tsx",To=["GET","POST","PUT","DELETE","OPTIONS","PATCH"],Do=e=>{const t=e.root,n=new RegExp(`^${t}`),r=b=>vn(b.replace(n,"")),s=new ht;s.use(async function(w,E){await gr.run(w,()=>E())});const o=e.NOT_FOUND,i=_t(o),a=e.ERROR,l=_t(a),u=e.RENDERER,f=jo(u),h=e.MIDDLEWARE,d=e.ROUTES,g=$o(_t(d)),v=(b,w)=>{let E=w[b]??[];const S=P=>(E=w[P.join("/")],E||(P.pop(),P.length&&S(P)),E??[]),R=b.split("/");return E=S(R),E.sort((P,V)=>P.split("/").length-V.split("/").length),E},m={};for(const b of g)for(const[w,E]of Object.entries(b)){const S=new ht;let R=!1;const P=Lo(w,i);P&&S.use(async(A,T)=>{if(await T(),A.res.status===404){const he=await P(A),Q=new Response(he.body,{status:404,headers:he.headers});A.res=Q}}),v(w,f).map(A=>{const T=u[A];T[fe]&&(R=!0);const Q=T.default;Q&&S.all("*",Q)});const K=Object.keys(h).find(A=>{const T=w.replaceAll("[","\\[").replaceAll("]","\\]").replaceAll("(","\\(").replaceAll(")","\\)");return new RegExp(T+"/_middleware.tsx?").test(A)});if(K){const A=h[K];A.default&&S.use(...A.default)}for(const[A,T]of Object.entries(E)){const he=T[fe],Q=_o(async function(se,Or){se.set(fe,he?!0:R),await Or()}),re=T.default,de=vn(A);re&&"fetch"in re&&(S.use(Q),S.route(de,re));for(const pe of To){const se=T[pe];se&&(S.on(pe,de,Q),S.on(pe,de,...se))}re&&Array.isArray(re)&&(S.get(de,Q),S.get(de,...re)),typeof re=="function"&&(S.get(de,Q),S.get(de,async pe=>{const se=await re(pe);return se instanceof Response?se:pe.render(se,T)}))}const H=Io(w,l);H&&(m[w]=H);for(const[A,T]of Object.entries(m))new RegExp(`^${A}`).test(w)&&T&&S.onError(T);let yt=r(w);s.route(yt,S)}for(const b of g.reverse()){const w=Object.entries(b)[0][0],E=new ht;Mo(E,w,i);const S=r(w);s.route(S,E)}return s};function Lo(e,t){for(const[n,r]of Object.entries(t))if(e===n){const s=r[yr];if(s)return s.default}}function Mo(e,t,n){for(const[r,s]of Object.entries(n))if(t===r){const o=s[yr];if(o){const i=o.default;o[fe]&&e.use("*",(l,u)=>(l.set(fe,!0),u())),e.get("*",l=>(l.status(404),i(l)))}}}function Io(e,t){for(const[n,r]of Object.entries(t))if(e===n){const s=r[No];if(s){const o=s.default;if(o)return async(a,l)=>{const u=s[fe];return u&&l.set(fe,u),l.status(500),o(a,l)}}}}const Ho=e=>Do({root:"/app/routes",NOT_FOUND:Object.assign({"/app/routes/_404.tsx":Nr}),ERROR:Object.assign({"/app/routes/_error.tsx":Dr}),RENDERER:Object.assign({"/app/routes/_renderer.tsx":Rs}),MIDDLEWARE:Object.assign({}),ROUTES:Object.assign({"/app/routes/index.tsx":no})}),Bo=({children:e})=>{const t=gr.getStore();if(!t)throw new Error("No context found");return p($e,{children:t.get(fe)&&e})},Fo={"_honox-island-DTc-E1Kc.js":{file:"static/honox-island-DTc-E1Kc.js",name:"honox-island",imports:["app/client.ts"]},"_index-BJLlL6Rz.js":{file:"static/index-BJLlL6Rz.js",name:"index"},"app/client.ts":{file:"static/client-Dg2L_Eg8.js",name:"client",src:"app/client.ts",isEntry:!0,dynamicImports:["app/islands/CollapsibleSection.tsx","app/islands/DownloadSection.tsx","app/islands/SectionGroup.tsx","node_modules/honox/dist/client/runtime.js","node_modules/honox/dist/client/runtime.js"]},"app/islands/CollapsibleSection.tsx":{file:"static/CollapsibleSection-C_myRPyc.js",name:"CollapsibleSection",src:"app/islands/CollapsibleSection.tsx",isDynamicEntry:!0,imports:["app/client.ts","_honox-island-DTc-E1Kc.js","_index-BJLlL6Rz.js"]},"app/islands/DownloadSection.tsx":{file:"static/DownloadSection-Ct7l9AXr.js",name:"DownloadSection",src:"app/islands/DownloadSection.tsx",isDynamicEntry:!0,imports:["app/client.ts","_honox-island-DTc-E1Kc.js"]},"app/islands/SectionGroup.tsx":{file:"static/SectionGroup-BQTtqCLD.js",name:"SectionGroup",src:"app/islands/SectionGroup.tsx",isDynamicEntry:!0,imports:["app/client.ts","_honox-island-DTc-E1Kc.js","_index-BJLlL6Rz.js"]},"app/style.css":{file:"static/style-Dv8O0o5u.css",src:"app/style.css",isEntry:!0},"node_modules/honox/dist/client/runtime.js":{file:"static/runtime-CUGxrjPU.js",name:"runtime",src:"node_modules/honox/dist/client/runtime.js",isDynamicEntry:!0,imports:["app/client.ts"]}},vr=Object.freeze(Object.defineProperty({__proto__:null,default:Fo},Symbol.toStringTag,{value:"Module"})),br=e=>e.endsWith("/")?e:e+"/",zo=e=>{const t=e.src;if(e.prod??!0){let n=e.manifest;if(!n){const r=Object.assign({"/dist/.vite/manifest.json":vr});for(const[,s]of Object.entries(r))if(s.default){n=s.default;break}}if(n){const r=n[t.replace(/^\//,"")];if(r)return p(Bo,{children:p("script",{type:"module",async:!!e.async,src:`${br("/yutaro_wada_cv/")}${r.file}`,nonce:e.nonce})})}return p($e,{})}else return p("script",{type:"module",async:!!e.async,src:t,nonce:e.nonce})},Go=e=>{let{href:t,prod:n,manifest:r,...s}=e;if(t)if(n??!0){if(!r){const o=Object.assign({"/dist/.vite/manifest.json":vr});for(const[,i]of Object.entries(o))if(i.default){r=i.default;break}}if(r){const o=r[t.replace(/^\//,"")];if(o)return t.startsWith("/")?p("link",{href:`${br("/yutaro_wada_cv/")}${o.file}`,...s}):p("link",{href:o.file,...s})}return p($e,{})}else return p("link",{href:t,...s});return p("link",{...s})},wr=Ho();$r(wr);const Ft=new ht,xr=Object.assign({"/app/server.ts":wr});let Er=!1;for(const[,e]of Object.entries(xr))e&&(Ft.all("*",t=>{let n;try{n=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,n)}),Ft.notFound(t=>{let n;try{n=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,n)}),Er=!0);if(!Er)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const Sr={},bn=new Set;for(const[e,t]of Object.entries(xr))for(const[n,r]of Object.entries(t))if(n!=="fetch"){if(bn.has(n))throw new Error(`Handler "${n}" is defined in multiple entry files. Please ensure each handler (except fetch) is defined only once.`);bn.add(n),Sr[n]=r}const Ko={...Sr,fetch:Ft.fetch};export{Ko as default};
