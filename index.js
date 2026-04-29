var Rr=Object.defineProperty;var Jt=e=>{throw TypeError(e)};var Cr=(e,t,n)=>t in e?Rr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var x=(e,t,n)=>Cr(e,typeof t!="symbol"?t+"":t,n),bt=(e,t,n)=>t.has(e)||Jt("Cannot "+n);var c=(e,t,n)=>(bt(e,t,"read from private field"),n?n.call(e):t.get(e)),k=(e,t,n)=>t.has(e)?Jt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),v=(e,t,n,r)=>(bt(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),C=(e,t,n)=>(bt(e,t,"access private method"),n);var Xt=(e,t,n,r)=>({set _(s){v(e,t,s,n)},get _(){return c(e,t,r)}});import{AsyncLocalStorage as Pr}from"node:async_hooks";function Or(){const{process:e,Deno:t}=globalThis;return!(typeof(t==null?void 0:t.noColor)=="boolean"?t.noColor:e!==void 0?"NO_COLOR"in(e==null?void 0:e.env):!1)}var $t="__COMPOSED_HANDLER",An=e=>e.length>1,_n=e=>e[$t]?_n(e[$t]):e,Ar=e=>e.name||(An(e)?"[middleware]":"[handler]"),_r=e=>e.routes.map(({path:t,method:n,handler:r})=>{const s=_n(r);return{path:t,method:n,name:Ar(s),isMiddleware:An(s)}}),jr=(e,t)=>{const n=Or(),r={};let s=0,o=0;_r(e).filter(({isMiddleware:i})=>!i).map(i=>{const a=`${i.method}-${i.path}`;if((r[a]||(r[a]=[])).push(i),!(r[a].length>1))return s=Math.max(s,i.method.length),o=Math.max(o,i.path.length),{method:i.method,path:i.path,routes:r[a]}}).forEach(i=>{if(!i)return;const{method:a,path:l,routes:u}=i,f=n?`\x1B[32m${a}\x1B[0m`:a;console.log(`${f} ${" ".repeat(s-a.length)} ${l}`)})};const $r=e=>(e.status(404),e.render("404 Not Found")),Dr=Object.freeze(Object.defineProperty({__proto__:null,default:$r},Symbol.toStringTag,{value:"Module"})),Nr=(e,t)=>"getResponse"in e?e.getResponse():(console.error(e.message),t.status(500),t.render("Internal Server Error")),Lr=Object.freeze(Object.defineProperty({__proto__:null,default:Nr},Symbol.toStringTag,{value:"Module"}));var jn={Stringify:1},F=(e,t)=>{const n=new String(e);return n.isEscaped=!0,n.callbacks=t,n},Mr=/[&<>'"]/,$n=async(e,t)=>{let n="";t||(t=[]);const r=await Promise.all(e);for(let s=r.length-1;n+=r[s],s--,!(s<0);s--){let o=r[s];typeof o=="object"&&t.push(...o.callbacks||[]);const i=o.isEscaped;if(o=await(typeof o=="object"?o.toString():o),typeof o=="object"&&t.push(...o.callbacks||[]),o.isEscaped??i)n+=o;else{const a=[n];ue(o,a),n=a[0]}}return F(n,t)},ue=(e,t)=>{const n=e.search(Mr);if(n===-1){t[0]+=e;return}let r,s,o=0;for(s=n;s<e.length;s++){switch(e.charCodeAt(s)){case 34:r="&quot;";break;case 39:r="&#39;";break;case 38:r="&amp;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}t[0]+=e.substring(o,s)+r,o=s+1}t[0]+=e.substring(o,s)},Dn=e=>{const t=e.callbacks;if(!(t!=null&&t.length))return e;const n=[e],r={};return t.forEach(s=>s({phase:jn.Stringify,buffer:n,context:r})),n[0]},Nn=async(e,t,n,r,s)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const o=e.callbacks;return o!=null&&o.length?(s?s[0]+=e:s=[e],Promise.all(o.map(a=>a({phase:t,buffer:s,context:r}))).then(a=>Promise.all(a.filter(Boolean).map(l=>Nn(l,t,!1,r,s))).then(()=>s[0]))):Promise.resolve(e)},Ir=(e,...t)=>{const n=[""];for(let r=0,s=e.length-1;r<s;r++){n[0]+=e[r];const o=Array.isArray(t[r])?t[r].flat(1/0):[t[r]];for(let i=0,a=o.length;i<a;i++){const l=o[i];if(typeof l=="string")ue(l,n);else if(typeof l=="number")n[0]+=l;else{if(typeof l=="boolean"||l===null||l===void 0)continue;if(typeof l=="object"&&l.isEscaped)if(l.callbacks)n.unshift("",l);else{const u=l.toString();u instanceof Promise?n.unshift("",u):n[0]+=u}else l instanceof Promise?n.unshift("",l):ue(l.toString(),n)}}}return n[0]+=e.at(-1),n.length===1?"callbacks"in n?F(Dn(F(n[0],n.callbacks))):F(n[0]):$n(n,n.callbacks)},Wt=Symbol("RENDERER"),Dt=Symbol("ERROR_HANDLER"),O=Symbol("STASH"),Ln=Symbol("INTERNAL"),Tr=Symbol("MEMO"),pt=Symbol("PERMALINK"),Yt=e=>(e[Ln]=!0,e),Mn=e=>({value:t,children:n})=>{if(!n)return;const r={children:[{tag:Yt(()=>{e.push(t)}),props:{}}]};Array.isArray(n)?r.children.push(...n.flat()):r.children.push(n),r.children.push({tag:Yt(()=>{e.pop()}),props:{}});const s={tag:"",props:r,type:""};return s[Dt]=o=>{throw e.pop(),o},s},In=e=>{const t=[e],n=Mn(t);return n.values=t,n.Provider=n,_e.push(n),n},_e=[],Ut=e=>{const t=[e],n=r=>{t.push(r.value);let s;try{s=r.children?(Array.isArray(r.children)?new Fn("",{},r.children):r.children).toString():""}finally{t.pop()}return s instanceof Promise?s.then(o=>F(o,o.callbacks)):F(s)};return n.values=t,n.Provider=n,n[Wt]=Mn(t),_e.push(n),n},Ee=e=>e.values.at(-1),ot={title:[],script:["src"],style:["data-href"],link:["href"],meta:["name","httpEquiv","charset","itemProp"]},Nt={},it="data-precedence",Xe=e=>Array.isArray(e)?e:[e],en=new WeakMap,tn=(e,t,n,r)=>({buffer:s,context:o})=>{if(!s)return;const i=en.get(o)||{};en.set(o,i);const a=i[e]||(i[e]=[]);let l=!1;const u=ot[e];if(u.length>0){e:for(const[,f]of a)for(const d of u)if(((f==null?void 0:f[d])??null)===(n==null?void 0:n[d])){l=!0;break e}}if(l?s[0]=s[0].replaceAll(t,""):u.length>0?a.push([t,n,r]):a.unshift([t,n,r]),s[0].indexOf("</head>")!==-1){let f;if(r===void 0)f=a.map(([d])=>d);else{const d=[];f=a.map(([h,,g])=>{let y=d.indexOf(g);return y===-1&&(d.push(g),y=d.length-1),[h,y]}).sort((h,g)=>h[1]-g[1]).map(([h])=>h)}f.forEach(d=>{s[0]=s[0].replaceAll(d,"")}),s[0]=s[0].replace(/(?=<\/head>)/,f.join(""))}},Ye=(e,t,n)=>F(new q(e,n,Xe(t??[])).toString()),et=(e,t,n,r)=>{if("itemProp"in n)return Ye(e,t,n);let{precedence:s,blocking:o,...i}=n;s=r?s??"":void 0,r&&(i[it]=s);const a=new q(e,i,Xe(t||[])).toString();return a instanceof Promise?a.then(l=>F(a,[...l.callbacks||[],tn(e,l,i,s)])):F(a,[tn(e,a,i,s)])},Hr=({children:e,...t})=>{const n=Gt();if(n){const r=Ee(n);if(r==="svg"||r==="head")return new q("title",t,Xe(e??[]))}return et("title",e,t,!1)},Br=({children:e,...t})=>{const n=Gt();return["src","async"].some(r=>!t[r])||n&&Ee(n)==="head"?Ye("script",e,t):et("script",e,t,!1)},Fr=({children:e,...t})=>["href","precedence"].every(n=>n in t)?(t["data-href"]=t.href,delete t.href,et("style",e,t,!0)):Ye("style",e,t),zr=({children:e,...t})=>["onLoad","onError"].some(n=>n in t)||t.rel==="stylesheet"&&(!("precedence"in t)||"disabled"in t)?Ye("link",e,t):et("link",e,t,"precedence"in t),Wr=({children:e,...t})=>{const n=Gt();return n&&Ee(n)==="head"?Ye("meta",e,t):et("meta",e,t,!1)},Tn=(e,{children:t,...n})=>new q(e,n,Xe(t??[])),Ur=e=>(typeof e.action=="function"&&(e.action=pt in e.action?e.action[pt]:void 0),Tn("form",e)),Hn=(e,t)=>(typeof t.formAction=="function"&&(t.formAction=pt in t.formAction?t.formAction[pt]:void 0),Tn(e,t)),Gr=e=>Hn("input",e),qr=e=>Hn("button",e);const wt=Object.freeze(Object.defineProperty({__proto__:null,button:qr,form:Ur,input:Gr,link:zr,meta:Wr,script:Br,style:Fr,title:Hr},Symbol.toStringTag,{value:"Module"}));var Vr=new Map([["className","class"],["htmlFor","for"],["crossOrigin","crossorigin"],["httpEquiv","http-equiv"],["itemProp","itemprop"],["fetchPriority","fetchpriority"],["noModule","nomodule"],["formAction","formaction"]]),mt=e=>Vr.get(e)||e,Bn=(e,t)=>{for(const[n,r]of Object.entries(e)){const s=n[0]==="-"||!/[A-Z]/.test(n)?n:n.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`);t(s,r==null?null:typeof r=="number"?s.match(/^(?:a|border-im|column(?:-c|s)|flex(?:$|-[^b])|grid-(?:ar|[^a])|font-w|li|or|sca|st|ta|wido|z)|ty$/)?`${r}`:`${r}px`:r)}},We=void 0,Gt=()=>We,Qr=e=>/[A-Z]/.test(e)&&e.match(/^(?:al|basel|clip(?:Path|Rule)$|co|do|fill|fl|fo|gl|let|lig|i|marker[EMS]|o|pai|pointe|sh|st[or]|text[^L]|tr|u|ve|w)/)?e.replace(/([A-Z])/g,"-$1").toLowerCase():e,Zr=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],Kr=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","download","formnovalidate","hidden","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],qt=(e,t)=>{for(let n=0,r=e.length;n<r;n++){const s=e[n];if(typeof s=="string")ue(s,t);else{if(typeof s=="boolean"||s===null||s===void 0)continue;s instanceof q?s.toStringToBuffer(t):typeof s=="number"||s.isEscaped?t[0]+=s:s instanceof Promise?t.unshift("",s):qt(s,t)}}},q=class{constructor(e,t,n){x(this,"tag");x(this,"props");x(this,"key");x(this,"children");x(this,"isEscaped",!0);x(this,"localContexts");this.tag=e,this.props=t,this.children=n}get type(){return this.tag}get ref(){return this.props.ref||null}toString(){var t,n;const e=[""];(t=this.localContexts)==null||t.forEach(([r,s])=>{r.values.push(s)});try{this.toStringToBuffer(e)}finally{(n=this.localContexts)==null||n.forEach(([r])=>{r.values.pop()})}return e.length===1?"callbacks"in e?Dn(F(e[0],e.callbacks)).toString():e[0]:$n(e,e.callbacks)}toStringToBuffer(e){const t=this.tag,n=this.props;let{children:r}=this;e[0]+=`<${t}`;const s=We&&Ee(We)==="svg"?o=>Qr(mt(o)):o=>mt(o);for(let[o,i]of Object.entries(n))if(o=s(o),o!=="children"){if(o==="style"&&typeof i=="object"){let a="";Bn(i,(l,u)=>{u!=null&&(a+=`${a?";":""}${l}:${u}`)}),e[0]+=' style="',ue(a,e),e[0]+='"'}else if(typeof i=="string")e[0]+=` ${o}="`,ue(i,e),e[0]+='"';else if(i!=null)if(typeof i=="number"||i.isEscaped)e[0]+=` ${o}="${i}"`;else if(typeof i=="boolean"&&Kr.includes(o))i&&(e[0]+=` ${o}=""`);else if(o==="dangerouslySetInnerHTML"){if(r.length>0)throw"Can only set one of `children` or `props.dangerouslySetInnerHTML`.";r=[F(i.__html)]}else if(i instanceof Promise)e[0]+=` ${o}="`,e.unshift('"',i);else if(typeof i=="function"){if(!o.startsWith("on"))throw`Invalid prop '${o}' of type 'function' supplied to '${t}'.`}else e[0]+=` ${o}="`,ue(i.toString(),e),e[0]+='"'}if(Zr.includes(t)&&r.length===0){e[0]+="/>";return}e[0]+=">",qt(r,e),e[0]+=`</${t}>`}},xt=class extends q{toStringToBuffer(e){const{children:t}=this,n=this.tag.call(null,{...this.props,children:t.length<=1?t[0]:t});if(!(typeof n=="boolean"||n==null))if(n instanceof Promise)if(_e.length===0)e.unshift("",n);else{const r=_e.map(s=>[s,s.values.at(-1)]);e.unshift("",n.then(s=>(s instanceof q&&(s.localContexts=r),s)))}else n instanceof q?n.toStringToBuffer(e):typeof n=="number"||n.isEscaped?(e[0]+=n,n.callbacks&&(e.callbacks||(e.callbacks=[]),e.callbacks.push(...n.callbacks))):ue(n,e)}},Fn=class extends q{toStringToBuffer(e){qt(this.children,e)}},Lt=(e,t,...n)=>{t??(t={}),n.length&&(t.children=n.length===1?n[0]:n);const r=t.key;delete t.key;const s=at(e,t,n);return s.key=r,s},nn=!1,at=(e,t,n)=>{if(!nn){for(const r in Nt)wt[r][Wt]=Nt[r];nn=!0}return typeof e=="function"?new xt(e,t,n):wt[e]?new xt(wt[e],t,n):e==="svg"||e==="head"?(We||(We=Ut("")),new q(e,t,[new xt(We,{value:e},n)])):new q(e,t,n)},je=({children:e})=>new Fn("",{children:e},Array.isArray(e)?e:e?[e]:[]),Jr=e=>!!(e&&typeof e=="object"&&"tag"in e&&"props"in e);function p(e,t,n){let r;if(!t||!("children"in t))r=at(e,t,[]);else{const s=t.children;r=Array.isArray(s)?at(e,t,s):at(e,t,[s])}return r.key=n,r}var Ue="_hp",Xr={Change:"Input",DoubleClick:"DblClick"},Yr={svg:"2000/svg",math:"1998/Math/MathML"},$e=[],Mt=new WeakMap,De=void 0,es=()=>De,K=e=>"t"in e,Et={onClick:["click",!1]},rn=e=>{if(!e.startsWith("on"))return;if(Et[e])return Et[e];const t=e.match(/^on([A-Z][a-zA-Z]+?(?:PointerCapture)?)(Capture)?$/);if(t){const[,n,r]=t;return Et[e]=[(Xr[n]||n).toLowerCase(),!!r]}},sn=(e,t)=>De&&e instanceof SVGElement&&/[A-Z]/.test(t)&&(t in e.style||t.match(/^(?:o|pai|str|u|ve)/))?t.replace(/([A-Z])/g,"-$1").toLowerCase():t,ts=(e,t,n)=>{var r;t||(t={});for(let s in t){const o=t[s];if(s!=="children"&&(!n||n[s]!==o)){s=mt(s);const i=rn(s);if(i){if((n==null?void 0:n[s])!==o&&(n&&e.removeEventListener(i[0],n[s],i[1]),o!=null)){if(typeof o!="function")throw new Error(`Event handler for "${s}" is not a function`);e.addEventListener(i[0],o,i[1])}}else if(s==="dangerouslySetInnerHTML"&&o)e.innerHTML=o.__html;else if(s==="ref"){let a;typeof o=="function"?a=o(e)||(()=>o(null)):o&&"current"in o&&(o.current=e,a=()=>o.current=null),Mt.set(e,a)}else if(s==="style"){const a=e.style;typeof o=="string"?a.cssText=o:(a.cssText="",o!=null&&Bn(o,a.setProperty.bind(a)))}else{if(s==="value"){const l=e.nodeName;if(l==="INPUT"||l==="TEXTAREA"||l==="SELECT"){if(e.value=o==null||o===!1?null:o,l==="TEXTAREA"){e.textContent=o;continue}else if(l==="SELECT"){e.selectedIndex===-1&&(e.selectedIndex=0);continue}}}else(s==="checked"&&e.nodeName==="INPUT"||s==="selected"&&e.nodeName==="OPTION")&&(e[s]=o);const a=sn(e,s);o==null||o===!1?e.removeAttribute(a):o===!0?e.setAttribute(a,""):typeof o=="string"||typeof o=="number"?e.setAttribute(a,o):e.setAttribute(a,o.toString())}}}if(n)for(let s in n){const o=n[s];if(s!=="children"&&!(s in t)){s=mt(s);const i=rn(s);i?e.removeEventListener(i[0],o,i[1]):s==="ref"?(r=Mt.get(e))==null||r():e.removeAttribute(sn(e,s))}}},ns=(e,t)=>{t[O][0]=0,$e.push([e,t]);const n=t.tag[Wt]||t.tag,r=n.defaultProps?{...n.defaultProps,...t.props}:t.props;try{return[n.call(null,r)]}finally{$e.pop()}},zn=(e,t,n,r,s)=>{var o,i;(o=e.vR)!=null&&o.length&&(r.push(...e.vR),delete e.vR),typeof e.tag=="function"&&((i=e[O][1][Be])==null||i.forEach(a=>s.push(a))),e.vC.forEach(a=>{var l;if(K(a))n.push(a);else if(typeof a.tag=="function"||a.tag===""){a.c=t;const u=n.length;if(zn(a,t,n,r,s),a.s){for(let f=u;f<n.length;f++)n[f].s=!0;a.s=!1}}else n.push(a),(l=a.vR)!=null&&l.length&&(r.push(...a.vR),delete a.vR)})},rs=e=>{for(;;e=e.tag===Ue||!e.vC||!e.pP?e.nN:e.vC[0]){if(!e)return null;if(e.tag!==Ue&&e.e)return e.e}},Wn=e=>{var t,n,r,s,o,i;K(e)||((n=(t=e[O])==null?void 0:t[1][Be])==null||n.forEach(a=>{var l;return(l=a[2])==null?void 0:l.call(a)}),(r=Mt.get(e.e))==null||r(),e.p===2&&((s=e.vC)==null||s.forEach(a=>a.p=2)),(o=e.vC)==null||o.forEach(Wn)),e.p||((i=e.e)==null||i.remove(),delete e.e),typeof e.tag=="function"&&(Ie.delete(e),lt.delete(e),delete e[O][3],e.a=!0)},Un=(e,t,n)=>{e.c=t,Gn(e,t,n)},on=(e,t)=>{if(t){for(let n=0,r=e.length;n<r;n++)if(e[n]===t)return n}},an=Symbol(),Gn=(e,t,n)=>{var u;const r=[],s=[],o=[];zn(e,t,r,s,o),s.forEach(Wn);const i=n?void 0:t.childNodes;let a,l=null;if(n)a=-1;else if(!i.length)a=0;else{const f=on(i,rs(e.nN));f!==void 0?(l=i[f],a=f):a=on(i,(u=r.find(d=>d.tag!==Ue&&d.e))==null?void 0:u.e)??-1,a===-1&&(n=!0)}for(let f=0,d=r.length;f<d;f++,a++){const h=r[f];let g;if(h.s&&h.e)g=h.e,h.s=!1;else{const y=n||!h.e;K(h)?(h.e&&h.d&&(h.e.textContent=h.t),h.d=!1,g=h.e||(h.e=document.createTextNode(h.t))):(g=h.e||(h.e=h.n?document.createElementNS(h.n,h.tag):document.createElement(h.tag)),ts(g,h.props,h.pP),Gn(h,g,y))}h.tag===Ue?a--:n?g.parentNode||t.appendChild(g):i[a]!==g&&i[a-1]!==g&&(i[a+1]===g?t.appendChild(i[a]):t.insertBefore(g,l||i[a]||null))}if(e.pP&&delete e.pP,o.length){const f=[],d=[];o.forEach(([,h,,g,y])=>{h&&f.push(h),g&&d.push(g),y==null||y()}),f.forEach(h=>h()),d.length&&requestAnimationFrame(()=>{d.forEach(h=>h())})}},ss=(e,t)=>!!(e&&e.length===t.length&&e.every((n,r)=>n[1]===t[r][1])),lt=new WeakMap,It=(e,t,n)=>{var o,i,a,l,u,f;const r=!n&&t.pC;n&&(t.pC||(t.pC=t.vC));let s;try{n||(n=typeof t.tag=="function"?ns(e,t):Xe(t.props.children)),((o=n[0])==null?void 0:o.tag)===""&&n[0][Dt]&&(s=n[0][Dt],e[5].push([e,s,t]));const d=r?[...t.pC]:t.vC?[...t.vC]:void 0,h=[];let g;for(let y=0;y<n.length;y++){Array.isArray(n[y])&&n.splice(y,1,...n[y].flat());let m=os(n[y]);if(m){typeof m.tag=="function"&&!m.tag[Ln]&&(_e.length>0&&(m[O][2]=_e.map(w=>[w,w.values.at(-1)])),(i=e[5])!=null&&i.length&&(m[O][3]=e[5].at(-1)));let b;if(d&&d.length){const w=d.findIndex(K(m)?E=>K(E):m.key!==void 0?E=>E.key===m.key&&E.tag===m.tag:E=>E.tag===m.tag);w!==-1&&(b=d[w],d.splice(w,1))}if(b)if(K(m))b.t!==m.t&&(b.t=m.t,b.d=!0),m=b;else{const w=b.pP=b.props;if(b.props=m.props,b.f||(b.f=m.f||t.f),typeof m.tag=="function"){const E=b[O][2];b[O][2]=m[O][2]||[],b[O][3]=m[O][3],!b.f&&((b.o||b)===m.o||(l=(a=b.tag)[Tr])!=null&&l.call(a,w,b.props))&&ss(E,b[O][2])&&(b.s=!0)}m=b}else if(!K(m)&&De){const w=Ee(De);w&&(m.n=w)}if(!K(m)&&!m.s&&(It(e,m),delete m.f),h.push(m),g&&!g.s&&!m.s)for(let w=g;w&&!K(w);w=(u=w.vC)==null?void 0:u.at(-1))w.nN=m;g=m}}t.vR=r?[...t.vC,...d||[]]:d||[],t.vC=h,r&&delete t.pC}catch(d){if(t.f=!0,d===an){if(s)return;throw d}const[h,g,y]=((f=t[O])==null?void 0:f[3])||[];if(g){const m=()=>ct([0,!1,e[2]],y),b=lt.get(y)||[];b.push(m),lt.set(y,b);const w=g(d,()=>{const E=lt.get(y);if(E){const S=E.indexOf(m);if(S!==-1)return E.splice(S,1),m()}});if(w){if(e[0]===1)e[1]=!0;else if(It(e,y,[w]),(g.length===1||e!==h)&&y.c){Un(y,y.c,!1);return}throw an}}throw d}finally{s&&e[5].pop()}},os=e=>{if(!(e==null||typeof e=="boolean")){if(typeof e=="string"||typeof e=="number")return{t:e.toString(),d:!0};if("vR"in e&&(e={tag:e.tag,props:e.props,key:e.key,f:e.f,type:e.tag,ref:e.props.ref,o:e.o||e}),typeof e.tag=="function")e[O]=[0,[]];else{const t=Yr[e.tag];t&&(De||(De=In("")),e.props.children=[{tag:De,props:{value:e.n=`http://www.w3.org/${t}`,children:e.props.children}}])}return e}},ln=(e,t)=>{var n,r;(n=t[O][2])==null||n.forEach(([s,o])=>{s.values.push(o)});try{It(e,t,void 0)}catch{return}if(t.a){delete t.a;return}(r=t[O][2])==null||r.forEach(([s])=>{s.values.pop()}),(e[0]!==1||!e[1])&&Un(t,t.c,!1)},Ie=new WeakMap,cn=[],ct=async(e,t)=>{e[5]||(e[5]=[]);const n=Ie.get(t);n&&n[0](void 0);let r;const s=new Promise(o=>r=o);if(Ie.set(t,[r,()=>{e[2]?e[2](e,t,o=>{ln(o,t)}).then(()=>r(t)):(ln(e,t),r(t))}]),cn.length)cn.at(-1).add(t);else{await Promise.resolve();const o=Ie.get(t);o&&(Ie.delete(t),o[1]())}return s},is=(e,t,n)=>({tag:Ue,props:{children:e},key:n,e:t,p:1}),St=0,Be=1,kt=2,Rt=3,Ct=new WeakMap,Vt=(e,t)=>!e||!t||e.length!==t.length||t.some((n,r)=>n!==e[r]),as=void 0,un=[],Ge=e=>{var i;const t=()=>typeof e=="function"?e():e,n=$e.at(-1);if(!n)return[t(),()=>{}];const[,r]=n,s=(i=r[O][1])[St]||(i[St]=[]),o=r[O][0]++;return s[o]||(s[o]=[t(),a=>{const l=as,u=s[o];if(typeof a=="function"&&(a=a(u[0])),!Object.is(a,u[0]))if(u[0]=a,un.length){const[f,d]=un.at(-1);Promise.all([f===3?r:ct([f,!1,l],r),d]).then(([h])=>{if(!h||!(f===2||f===3))return;const g=h.vC;requestAnimationFrame(()=>{setTimeout(()=>{g===h.vC&&ct([f===3?1:0,!1,l],h)})})})}else ct([0,!1,l],r)}])},ls=(e,t,n)=>{var u;const r=$e.at(-1);if(!r)return;const[,s]=r,o=(u=s[O][1])[Be]||(u[Be]=[]),i=s[O][0]++,[a,,l]=o[i]||(o[i]=[]);if(Vt(a,n)){l&&l();const f=()=>{d[e]=void 0,d[2]=t()},d=[n,void 0,void 0,void 0,void 0];d[e]=f,o[i]=d}},fn=(e,t)=>ls(3,e,t),Qt=(e,t)=>{var a;const n=$e.at(-1);if(!n)return e;const[,r]=n,s=(a=r[O][1])[kt]||(a[kt]=[]),o=r[O][0]++,i=s[o];return Vt(i==null?void 0:i[1],t)?s[o]=[e,t]:e=s[o][0],e},cs=e=>{const t=Ct.get(e);if(t){if(t.length===2)throw t[1];return t[0]}throw e.then(n=>Ct.set(e,[n]),n=>Ct.set(e,[void 0,n])),e},us=(e,t)=>{var a;const n=$e.at(-1);if(!n)return e();const[,r]=n,s=(a=r[O][1])[Rt]||(a[Rt]=[]),o=r[O][0]++,i=s[o];return Vt(i==null?void 0:i[1],t)&&(s[o]=[e(),t]),s[o][0]},fs=In({pending:!1,data:null,method:null,action:null}),dn=new Set,ds=e=>{dn.add(e),e.finally(()=>dn.delete(e))},Zt=(e,t)=>us(()=>n=>{let r;e&&(typeof e=="function"?r=e(n)||(()=>{e(null)}):e&&"current"in e&&(e.current=n,r=()=>{e.current=null}));const s=t(n);return()=>{s==null||s(),r==null||r()}},[e]),Se=Object.create(null),nt=Object.create(null),tt=(e,t,n,r,s)=>{if(t!=null&&t.itemProp)return{tag:e,props:t,type:e,ref:t.ref};const o=document.head;let{onLoad:i,onError:a,precedence:l,blocking:u,...f}=t,d=null,h=!1;const g=ot[e];let y;if(g.length>0){const E=o.querySelectorAll(e);e:for(const S of E)for(const R of ot[e])if(S.getAttribute(R)===t[R]){d=S;break e}if(!d){const S=g.reduce((R,P)=>t[P]===void 0?R:`${R}-${P}-${t[P]}`,e);h=!nt[S],d=nt[S]||(nt[S]=(()=>{const R=document.createElement(e);for(const P of g)t[P]!==void 0&&R.setAttribute(P,t[P]),t.rel&&R.setAttribute("rel",t.rel);return R})())}}else y=o.querySelectorAll(e);l=r?l??"":void 0,r&&(f[it]=l);const m=Qt(E=>{if(g.length>0){let S=!1;for(const R of o.querySelectorAll(e)){if(S&&R.getAttribute(it)!==l){o.insertBefore(E,R);return}R.getAttribute(it)===l&&(S=!0)}o.appendChild(E)}else if(y){let S=!1;for(const R of y)if(R===E){S=!0;break}S||o.insertBefore(E,o.contains(y[0])?y[0]:o.querySelector(e)),y=void 0}},[l]),b=Zt(t.ref,E=>{var P;const S=g[0];if(n===2&&(E.innerHTML=""),(h||y)&&m(E),!a&&!i)return;let R=Se[P=E.getAttribute(S)]||(Se[P]=new Promise((V,Q)=>{E.addEventListener("load",V),E.addEventListener("error",Q)}));i&&(R=R.then(i)),a&&(R=R.catch(a)),R.catch(()=>{})});if(s&&u==="render"){const E=ot[e][0];if(t[E]){const S=t[E],R=Se[S]||(Se[S]=new Promise((P,V)=>{m(d),d.addEventListener("load",P),d.addEventListener("error",V)}));cs(R)}}const w={tag:e,type:e,props:{...f,ref:b},ref:b};return w.p=n,d&&(w.e=d),is(w,o)},hs=e=>{const t=es(),n=t&&Ee(t);return n!=null&&n.endsWith("svg")?{tag:"title",props:e,type:"title",ref:e.ref}:tt("title",e,void 0,!1,!1)},ps=e=>!e||["src","async"].some(t=>!e[t])?{tag:"script",props:e,type:"script",ref:e.ref}:tt("script",e,1,!1,!0),ms=e=>!e||!["href","precedence"].every(t=>t in e)?{tag:"style",props:e,type:"style",ref:e.ref}:(e["data-href"]=e.href,delete e.href,tt("style",e,2,!0,!0)),gs=e=>!e||["onLoad","onError"].some(t=>t in e)||e.rel==="stylesheet"&&(!("precedence"in e)||"disabled"in e)?{tag:"link",props:e,type:"link",ref:e.ref}:tt("link",e,1,"precedence"in e,!0),vs=e=>tt("meta",e,void 0,!1,!1),qn=Symbol(),ys=e=>{const{action:t,...n}=e;typeof t!="function"&&(n.action=t);const[r,s]=Ge([null,!1]),o=Qt(async u=>{const f=u.isTrusted?t:u.detail[qn];if(typeof f!="function")return;u.preventDefault();const d=new FormData(u.target);s([d,!0]);const h=f(d);h instanceof Promise&&(ds(h),await h),s([null,!0])},[]),i=Zt(e.ref,u=>(u.addEventListener("submit",o),()=>{u.removeEventListener("submit",o)})),[a,l]=r;return r[1]=!1,{tag:fs,props:{value:{pending:a!==null,data:a,method:a?"post":null,action:a?t:null},children:{tag:"form",props:{...n,ref:i},type:"form",ref:i}},f:l}},Vn=(e,{formAction:t,...n})=>{if(typeof t=="function"){const r=Qt(s=>{s.preventDefault(),s.currentTarget.form.dispatchEvent(new CustomEvent("submit",{detail:{[qn]:t}}))},[]);n.ref=Zt(n.ref,s=>(s.addEventListener("click",r),()=>{s.removeEventListener("click",r)}))}return{tag:e,props:n,type:e,ref:n.ref}},bs=e=>Vn("input",e),ws=e=>Vn("button",e);Object.assign(Nt,{title:hs,script:ps,style:ms,link:gs,meta:vs,form:ys,input:bs,button:ws});new TextEncoder;var xs=Ut(null),Es=(e,t,n,r)=>(s,o)=>{const i="<!DOCTYPE html>",a=n?Lt(u=>n(u,e),{Layout:t,...o},s):s,l=Ir`${F(i)}${Lt(xs.Provider,{value:e},a)}`;return e.html(l)},Ss=(e,t)=>function(r,s){const o=r.getLayout()??je;return e&&r.setLayout(i=>e({...i,Layout:o},r)),r.setRenderer(Es(r,o,e)),s()};const ks=Ss(({children:e})=>p("html",{lang:"en",children:[p("head",{children:[p("meta",{charset:"utf-8"}),p("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),p("link",{href:"/favicon.ico",rel:"icon"}),p(Wo,{href:"/app/style.css",rel:"stylesheet"}),p(zo,{src:"/app/client.ts",async:!0})]}),p("body",{children:e})]})),Rs=Object.freeze(Object.defineProperty({__proto__:null,default:ks},Symbol.toStringTag,{value:"Module"}));function Qn(e){return[/github\.com\/[^\/]+\/[^\/]+/,/qiita\.com\/[^\/]+\/items/,/qiita\.com\/tags/,/zenn\.dev\/[^\/]+\/articles/,/zenn\.dev\/[^\/]+\/books/,/zenn\.dev\/topics/,/dev\.classmethod\.jp\/articles/,/speakerdeck\.com\/[^\/]+\/[^\/]+/,/x\.com\/[^\/]+\/status/,/x\.com\/search/,/docswell\.com\/slide/].some(r=>r.test(e))?!1:[/https?:\/\/dev\.classmethod\.jp\/author\/[a-zA-Z0-9_-]+$/,/https?:\/\/github\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/zenn\.dev\/[a-zA-Z0-9_-]+$/,/https?:\/\/speakerdeck\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/x\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/qiita\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/www\.docswell\.com\/user\/[a-zA-Z0-9_-]+$/].some(r=>r.test(e))}function Cs(e){const t=/\[([^\]]+)\]\(([^)]+)\)/g;let n;for(;(n=t.exec(e))!==null;){const r=n[2];if(Qn(r))return!0}return!1}function Ps(e,t){if(!Cs(e))return e;const n={"dev.classmethod.jp":{name:"DevelopersIO",logo:"amazonaws",color:"orange",usernameRegex:/dev\.classmethod\.jp\/author\/([^\/\s\)]+)/},"github.com":{name:"GitHub",logo:"github",color:"black",usernameRegex:/github\.com\/([^\/\s\)]+)/},"zenn.dev":{name:"Zenn",logo:"zenn",color:"blue",usernameRegex:/zenn\.dev\/([^\/\s\)]+)/},"speakerdeck.com":{name:"Speaker--Deck",logo:"speakerdeck",color:"green",usernameRegex:/speakerdeck\.com\/([^\/\s\)]+)/},"x.com":{name:"X",logo:"x",color:"black",usernameRegex:/x\.com\/([^\/\s\)]+)/},"qiita.com":{name:"Qiita",logo:"qiita",color:"brightgreen",usernameRegex:/qiita\.com\/([^\/\s\)]+)/},"www.docswell.com":{name:"Docswell",logo:"readthedocs",color:"blue",usernameRegex:/www\.docswell\.com\/user\/([^\/\s\)]+)/}};let r=e;return Object.entries(n).forEach(([s,o])=>{const i=new RegExp(`\\[([^\\]]+)\\]\\(https?://${s.replace(/\./g,"\\.")}[^\\)]*\\)`,"g");r=r.replace(i,a=>{try{const l=a.match(/\[([^\]]+)\]\(([^)]+)\)/);if(!l)return a;const u=l[2];if(!Qn(u))return a;const f=a.match(o.usernameRegex),d=f?f[1]:"";if(d){const h=encodeURIComponent(`${o.name}-@${d}`),g=encodeURIComponent(o.logo),y=encodeURIComponent(o.color),m=`https://img.shields.io/badge/${h}-${y}?style=flat&logo=${g}`;return`<a href="${u}" target="_blank" rel="noopener"><img src="${m}" alt="${o.name}" /></a>`}else{const h=encodeURIComponent(o.name),g=encodeURIComponent(o.logo),y=encodeURIComponent(o.color),m=`https://img.shields.io/badge/${h}-${y}?style=flat&logo=${g}`;return`<a href="${u}" target="_blank" rel="noopener"><img src="${m}" alt="${o.name}" /></a>`}}catch(l){return console.warn("Error converting account link:",l),a}})}),r}const Os="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200 shadow-sm hover:bg-blue-200 transition-colors duration-200",Pt=/^\d+\.\s/;function As(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function hn(e,t){return`<li class="ml-4 mb-2 flex items-start"><span class="mr-2 text-blue-500">${t}</span><span>${Te(e)}</span></li>`}function Zn(e){return e.replace(/\*\*([^*]+)\*\*/g,'<strong class="font-bold">$1</strong>').replace(new RegExp("(?<!\\*)\\*([^*]+)\\*(?!\\*)","g"),'<em class="italic">$1</em>').replace(/`([^`]+)`/g,`<code class="${Os}">$1</code>`)}function Te(e){return Zn(e.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>'))}function _s(e){var s;const t=e.trim().split(`
`);let n="",r=0;for(;r<t.length;){const o=t[r].trim();if(o==="---"){n+='<hr class="my-6 border-t border-gray-200">',r++;continue}if(o.startsWith("```")){let i="";for(r++;r<t.length;){const l=t[r];if(l.trim()==="```"||l.trim().startsWith("```"))break;i+=l+`
`,r++}const a=As(i.trim());n+=`<div class="my-6 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"><pre class="p-4 overflow-x-auto bg-gray-50"><code class="text-sm text-gray-800 font-mono leading-6 whitespace-pre-wrap">${a}</code></pre></div>`,r<t.length&&r++;continue}if(o.startsWith("> ")){let i="";for(;r<t.length&&t[r].trim().startsWith("> ");)i+=t[r].trim().substring(2)+" ",r++;n+=`<blockquote class="my-4 pl-4 border-l-4 border-blue-500 bg-blue-50 py-3 pr-4 rounded-r-lg"><p class="text-gray-700 italic">${Te(i.trim())}</p></blockquote>`;continue}if(Pt.test(o)){let i=1;for(;r<t.length&&Pt.test(t[r].trim());){const a=t[r].trim().replace(Pt,"");n+=hn(a,`${i}.`),i++,r++}continue}if(o.startsWith("- ")){const i=o.substring(2);n+=hn(i,"•"),r++;continue}if(o.includes("|")&&((s=t[r+1])!=null&&s.includes("---"))){const i=o.split("|").map(a=>a.trim()).filter(a=>a);if(t[r+1].includes("---")){for(n+='<div class="overflow-x-auto my-4"><table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm"><thead class="bg-gray-50"><tr>',i.forEach(a=>{n+=`<th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">${Te(a)}</th>`}),n+='</tr></thead><tbody class="divide-y divide-gray-200">',r+=2;r<t.length&&t[r].trim().includes("|");){const a=t[r].trim().split("|").map(l=>l.trim()).filter(l=>l);a.length>0&&(n+='<tr class="hover:bg-gray-50">',a.forEach(l=>{n+=`<td class="px-4 py-3 text-sm text-gray-900 border-b border-gray-200">${Te(l)}</td>`}),n+="</tr>"),r++}n+="</tbody></table></div>";continue}}o?n+=Te(o)+"<br>":n+="<br>",r++}return n}function js(e){const t=/- \[([^\]]+)\]\((https:\/\/(?:speakerdeck\.com\/player\/|www\.docswell\.com\/slide\/[^/]+\/embed?)[^)]+)\)/g;return e.replace(t,(n,r,s)=>{let o=r,i="";return s.includes("speakerdeck.com")?(o=r.replace(/\s*\\?\s*-\s*Speaker\s*Deck\s*$/i,""),i="speakerdeck-iframe"):s.includes("docswell.com")&&(o=r.replace(/\s*\|\s*ドクセル\s*$/i,""),i="docswell-iframe"),`<iframe class="${i}" frameborder="0" src="${s}" title="${o}" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>`})}function $s(e){const t=/- \[([^\]]+)\]\((https:\/\/www\.youtube\.com\/embed\/[^\)]+)\)/g,n=/\[([^\]]+)\]\((https:\/\/www\.youtube\.com\/embed\/[^\)]+)\)/g,r="width: 100%; height: auto; aspect-ratio: 560 / 315; border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px;";let s=e.replace(t,(o,i,a)=>`<iframe style="${r}" src="${a}" title="${i}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);return s=s.replace(n,(o,i,a)=>`<iframe style="${r}" src="${a}" title="${i}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`),s}function Ds(e){const t=/- \[([^\]]+)\]\((https:\/\/(?:dev\.classmethod\.jp\/articles\/[^)]+|qiita\.com\/[^\/]+\/items\/[^)]+|zenn\.dev\/[^\/]+\/articles\/[^)]+))\)/g;return e.replace(t,(n,r,s)=>`<iframe class="hatenablogcard" style="width:100%;height:155px;" title="${r}" src="https://hatenablog-parts.com/embed?url=${encodeURIComponent(s)}" width="300" height="150" frameborder="0" scrolling="no"></iframe>`)}function Ne(e,t){if(!e.trim())return"";let n=$s(e);return n=js(n),n=Ds(n),n=Ps(n),n=_s(n),Zn(n)}function Ns(e){const t=e.split(`
`),n=[];let r=null,s=0;for(const o of t){const i=o.match(/^(#+)\s+(.+)/);if(i){r&&n.push(r);const a=i[1].length;let l=i[2];l=l.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>'),r={title:l,content:"",level:a,id:`section-${++s}`}}else r?r.content+=o+`
`:n.length===0&&(r={title:"",content:o+`
`,level:0,id:"intro"})}return r&&n.push(r),n}const Ls="component-name",Ms="component-export",Is="data-serialized-props",Ts="data-hono-template",fe="__importing_islands",Tt=Symbol(),Ht=Symbol(),Ot=Ut({[Tt]:!1,[Ht]:!1}),Kn=e=>Array.isArray(e)?e.some(Kn):typeof e=="object"&&Jr(e),Kt=({componentName:e,componentExport:t,Component:n,props:r})=>{const s={},o={};for(const a in r){const l=r[a];Kn(l)?s[a]=l:o[a]=l}const i=Ee(Ot);return i[Ht]||!i[Tt]?p("honox-island",{[Ls]:e,[Ms]:t||void 0,[Is]:JSON.stringify(o),children:[p(Ot.Provider,{value:{...i,[Tt]:!0},children:p(n,{...r})}),Object.entries(s).map(([a,l])=>Lt("template",{[Ts]:a,key:a},p(Ot.Provider,{value:{...i,[Ht]:!0},children:l})))]}):p(n,{...r})},Jn=({title:e,level:t,className:n})=>{const s=`${(o=>{switch(o){case 2:return"text-2xl font-bold text-gray-800";case 3:return"text-xl font-semibold text-blue-900";case 4:return"text-lg font-semibold text-gray-800";default:return"text-3xl font-bold text-gray-900"}})(t)} ${n||""}`;return p("h2",{className:s,dangerouslySetInnerHTML:{__html:e}})},Hs=({title:e,level:t,isOpen:n,onClick:r})=>p("button",{onClick:r,className:"flex items-center gap-3 w-full text-left p-4 hover:bg-gray-50 transition-colors rounded-lg",children:[p("span",{className:`transform transition-transform text-gray-500 ${n?"rotate-90":""}`,children:"▶"}),p(Jn,{title:e,level:t})]}),Bs=function({title:e,content:t,level:n,defaultOpen:r=!1}){const[s,o]=Ge(r);return n!==4?p("div",{className:"mb-6",children:[p(Jn,{title:e,level:n,className:"mb-4"}),p("div",{className:"prose max-w-none",dangerouslySetInnerHTML:{__html:Ne(t)}})]}):p("div",{className:"mb-6 border border-gray-200 rounded-lg",children:[p(Hs,{title:e,level:n,isOpen:s,onClick:()=>o(!s)}),s&&p("div",{className:"px-4 pb-4 border-t border-gray-100",children:p("div",{className:"prose max-w-none pt-3",dangerouslySetInnerHTML:{__html:Ne(t)}})})]})},Fs=function(e){return p(Kt,{componentName:"/app/islands/CollapsibleSection.tsx",Component:Bs,props:e})},zs=e=>{const[t,n]=Ge({}),[r,s]=Ge(!1);return fn(()=>{const a={};e.forEach(l=>{a[l.id]=!1}),n(a)},[e]),fn(()=>{const a=Object.values(t).filter(Boolean).length;s(a===e.length&&e.length>0)},[t,e.length]),{toggleStates:t,allOpen:r,handleToggle:a=>{n(l=>({...l,[a]:!l[a]}))},handleBulkToggle:()=>{const a=!r,l={};e.forEach(u=>{l[u.id]=a}),n(l),s(a)}}},Ws=({allOpen:e,onClick:t})=>p("button",{onClick:t,className:`px-3 py-1 text-sm rounded-md transition-colors flex items-center gap-2 ${e?"bg-red-100 hover:bg-red-200 text-red-700":"bg-blue-100 hover:bg-blue-200 text-blue-700"}`,children:[p("span",{className:"text-xs",children:e?"全て閉じる":"全て開く"}),p("span",{className:`transform transition-transform ${e?"rotate-180":""}`,children:"▼"})]}),Us=({title:e,hasSubsections:t,allOpen:n,onBulkToggle:r})=>p("div",{className:"flex items-center justify-between mb-4",children:[p("h3",{className:"text-xl font-semibold text-blue-900",dangerouslySetInnerHTML:{__html:e}}),t&&p(Ws,{allOpen:n,onClick:r})]}),Gs=({subsection:e,isOpen:t,onToggle:n})=>p("div",{className:"mb-4 border border-gray-200 rounded-lg",children:[p("button",{onClick:n,className:"flex items-center gap-3 w-full text-left p-4 hover:bg-gray-50 transition-colors rounded-lg",children:[p("span",{className:`transform transition-transform text-gray-500 ${t?"rotate-90":""}`,children:"▶"}),p("span",{className:"text-lg font-semibold text-gray-800",dangerouslySetInnerHTML:{__html:e.title}})]}),t&&p("div",{className:"px-4 pb-4 border-t border-gray-100",children:p("div",{className:"prose max-w-none pt-3",dangerouslySetInnerHTML:{__html:Ne(e.content,e.title)}})})]}),qs=function({section:e,subsections:t}){const{toggleStates:n,allOpen:r,handleToggle:s,handleBulkToggle:o}=zs(t);return p("div",{className:"mb-8",children:[p(Us,{title:e.title,hasSubsections:t.length>0,allOpen:r,onBulkToggle:o}),e.content.trim()&&p("div",{className:"prose max-w-none mb-6",dangerouslySetInnerHTML:{__html:Ne(e.content,e.title)}}),t.map(i=>p(Gs,{subsection:i,isOpen:n[i.id]||!1,onToggle:()=>s(i.id)},i.id))]})},Vs=function(e){return p(Kt,{componentName:"/app/islands/SectionGroup.tsx",Component:qs,props:e})},Qs=()=>p("svg",{className:"animate-spin h-4 w-4",fill:"none",viewBox:"0 0 24 24",children:[p("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),p("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),Zs=()=>p("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:p("path",{d:"M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"})}),Ks=()=>p("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:p("path",{d:"M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"})}),rt=({type:e,lang:t,isLoading:n,onClick:r})=>{const s=e==="pdf",o=t==="en",i="flex items-center justify-center gap-2 px-6 py-3 text-white font-medium rounded-lg shadow-md transition-colors duration-200 w-[280px]",a=s?"bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300":"bg-slate-500 hover:bg-slate-600 disabled:bg-slate-300",l=o?s?"Download PDF (EN)":"Download Markdown (EN)":s?"PDFをダウンロード":"Markdownをダウンロード";return p("button",{onClick:r,disabled:n,className:`${i} ${a}`,children:n?p(je,{children:[p(Qs,{}),p("span",{children:o?"Downloading...":"ダウンロード中..."})]}):p(je,{children:[s?p(Ks,{}):p(Zs,{}),p("span",{children:l})]})})},Js=function(){const[e,t]=Ge(null),n=async r=>{t(r);try{const o={"markdown-ja":"README.md","pdf-ja":"README.pdf","markdown-en":"README.en.md","pdf-en":"README.en.pdf"}[r],i=`/yutaro_wada_cv/${o}`,a=document.createElement("a");a.href=i,a.download=o,document.body.appendChild(a),a.click(),document.body.removeChild(a)}catch(s){console.error("Download failed:",s)}finally{t(null)}};return p("div",{className:"flex flex-col gap-3 items-center justify-center mb-8",children:[p("div",{className:"flex flex-col sm:flex-row gap-3",children:[p(rt,{type:"markdown",lang:"ja",isLoading:e==="markdown-ja",onClick:()=>n("markdown-ja")}),p(rt,{type:"pdf",lang:"ja",isLoading:e==="pdf-ja",onClick:()=>n("pdf-ja")})]}),p("div",{className:"flex flex-col sm:flex-row gap-3",children:[p(rt,{type:"markdown",lang:"en",isLoading:e==="markdown-en",onClick:()=>n("markdown-en")}),p(rt,{type:"pdf",lang:"en",isLoading:e==="pdf-en",onClick:()=>n("pdf-en")})]})]})},Xs=function(e){return p(Kt,{componentName:"/app/islands/DownloadSection.tsx",Component:Js,props:e})},Ys=`## 基本情報

|項目|値|
|---|---|
|氏名|和田悠太郎|
|最終学歴|東北大学教育学部 卒業|
|現職|データエンジニア|

### プロフィール

\`\`\`txt
データエンジニアとして、企業のデータ利活用を支援しています。  
dbt・Databricksを活用したデータ基盤構築、大規模データの高速処理、ビジネス意思決定を支える分析業務を経験してきました。  
技術とビジネスの橋渡し役として、データを通じた価値創出に貢献していきたいと考えています。

キャリア序盤、転職を繰り返した時期がありました。当時は環境に原因を求めていましたが、振り返ると根本には「自分への期待値の高さ」があり、現実とのギャップを自己否定に変えて、環境を変えることで解消しようとしていたのだと思います。

この自己理解は最近得たものです。今後は環境のせいにせず、目標と振り返りを通じて自分の期待値そのものと向き合いながら、仕事に臨んでいきたいと考えています。
\`\`\`

### アカウント
- [GitHub](https://github.com/yutarowada0402)
- [Zenn](https://zenn.dev/taro_imo)

---

## 主要な成果・強み

### ビジネスへの貢献
- **意思決定支援**：PoC分析により広告枠活用の効果を実証し、経営層の本格導入判断を支援
- **業務効率化**：SQLレビュー工数50%削減、文章作成時間を1時間→数分に短縮するLLMツール開発

### 技術的成果
- **パフォーマンス改善**：大規模データ処理ツールをVBA（3時間/5万件）からPython再構築（20分/40万件）へ改善
- **コスト最適化**：複雑なクエリのリファクタリングにより、コード量50%削減・クエリコスト66%削減を実現
- **データ基盤構築**：dbtによる多層アーキテクチャ（interface/dimension/fact/wide/mart）の設計・実装

### チーム・組織への貢献
- 育成プログラム改善により、新人育成期間を従来比50%短縮（1.5ヶ月で戦力化）
- 7名規模チームの進捗管理・1on1を通じた稼働率100%維持とメンバー定着率向上

---

## 職務経歴

### stable株式会社（2026/01 - 現在）

**職種**：データエンジニア

**直近の転職背景**
\`\`\`txt
稼働時間ベースで売上が立つ業態では、AIによる生産性向上が進む中で「時間単位の働き方」と「顧客への課題解決貢献」の乖離が広がると考えました。
時間ベースではなく課題ベースで顧客と向き合える環境を志向しました。
加えて分析実務を通じて対症療法ではなく根本からデータ利活用の課題に踏み込めるよう、データエンジニアリング・モデリングのスキル獲得を目指して転職しました。
\`\`\`

#### 某大手出版社データ基盤構築・運用（2026/01 - 現在）

**プロジェクト概要**  
\`\`\`txt
Databricks + dbtを活用した多層アーキテクチャによるデータ基盤構築プロジェクト。複数サービスのデータマート開発、PowerBIからDatabricks BIへのダッシュボードリプレイスを担当。
\`\`\`

**背景・課題**
- HPリニューアルに伴う複雑なマート群の大規模改修が必要
- 長期運用により肥大化したクエリのメンテナンス性低下
- タイトな納期の中で、パフォーマンスと品質を両立する必要

**取り組み**
- ビジネス要件を再確認し、不要な処理・結合を特定
- 段階的なリファクタリング計画を立案、テストケースを作成しながら改修を実行
- dbtのインクリメンタルモデルとパーティショニングを活用した効率的なデータ更新パイプライン構築
- Git/GitHubを活用したコードレビュー・品質管理の徹底

**成果**
- 特定マート群の改修において、SQLコード量50%削減、クエリコスト66%削減を達成し、納期数営業日前に納品完了
- PowerBI→Databricks BIへのダッシュボードリプレイスを推進中（2026年2月現在）
- dbtによる多層アーキテクチャ構築を継続的に実施中

**使用技術**  
\`dbt\` \`Databricks\` \`Unity Catalog\` \`Delta Lake\` \`Databricks BI\` \`PowerBI\` \`Git\` \`GitHub\` \`uv\`

---

#### 某大手出版社データ基盤引き継ぎ・コスト最適化（2026/03 - 現在）

**プロジェクト概要**  
\`\`\`txt
前任者退任に伴うDWH・データ連携基盤の引き継ぎプロジェクト。引き継ぎ完了後に改善フェーズ（コスト削減・運用整理）へ移行できる状態づくりを担当。
\`\`\`

**背景・課題**
- 前任者退任に伴い、DWH・データ連携基盤の全体引き継ぎを短期間で完了する必要
- Databricksを中心としたインフラコストが高止まりし、コスト要因の特定と改善方向づけが並行して求められた
- 属人化した運用・手動オペレーションが多く、全体像と論点の可視化が不十分

**取り組み**
- 引き継ぎ全10回のスコープ・優先順位・スケジュールを設計し、WBS・課題リスト・アウトプット棚卸しに落とし込んでプロジェクト管理の型を整備
- Power BI接続起因のSQL Warehouseコスト（月2万ドル規模）を論点として特定し、フルロード運用→増分更新／集計仕様見直し等、ビジネス要件を崩さずに計算量を減らす改善方向を関係者と整理
- Azure Data Factoryリポジトリ（主要パイプライン・接続先・トリガー）を読み解き、取り込み→変換→DWH/BI提供の全体像をドキュメント化
- Power BIデータリネージを、新旧アーキテクチャ差分・テーブル目的・集計ロジックまで含めて体系化し、後任・チームが参照できる技術資産を整備
- 問い合わせ運用フロー・権限移譲などの引き継ぎ後論点をタスクとして可視化、優先度まで整理

**成果**
- 引き継ぎ完了の定義（ディフェンス／オフェンス）と全体計画を文書化し、改善フェーズ移行の土台を構築
- コスト主要論点を特定し、要件を崩さずに転送量・計算量を減らす改善案の合意形成を推進
- 暗黙知だった運用・論点をタスク／ドキュメントに落とし込み、引き継ぎ後の不確実性を低減

**使用技術**  
\`Databricks\` \`Azure Data Factory\` \`Power BI\` \`dbt\` \`SQL Warehouse\` \`Git\` \`GitHub\`

---

#### 某フィンテック企業 MySQL→Snowflake CDC移行 PoC（2026/03 - 現在）

**プロジェクト概要**  
\`\`\`txt
既存の全件洗い替え方式から、AWS DMSのCDC（Change Data Capture）を用いた差分更新方式への移行可否を end-to-end で検証するPoC。コスト・整合性・自動化の3観点で本番移行判断の材料を整備。
\`\`\`

**背景・課題**
- 全件洗い替え方式がテーブル数・データ量の増加に対して処理時間・コストの双方で重くなっていた
- CDCによる差分更新への移行可否判断が必要で、整合性・運用・自動化設計まで検証が求められた
- MySQL・AWS DMS・S3・Snowpipe・dbt・Lambda・Schedulerに跨る広範な検証が必要

**取り組み**
- MySQL検証環境の構築（binlog設定、権限付与、サンプルデータ投入）を担当
- AWS DMS（Replication Instance / Endpoint / Task）を構築し、フルロード＋CDCを検証
- Snowpipe、dbt staging / MERGE、DELETE含むCDC整合性確認まで end-to-end で実装
- AWS Lambda ＋ EventBridge Scheduler による日次自動実行（DMSタスクの停止・再開を含む）を組み込み
- 負荷シミュレーションを実施し、Snowflakeクレジット・DMS・S3コストを現行方式と比較測定し、移行判断用ドキュメントを作成

**成果**
- 差分更新方式の実現性を、整合性・自動化・コストの3観点で検証できる状態まで構築
- 本番移行の意思決定に使える比較データと判断用ドキュメントを整理
- 調査に留めず PoC を end-to-end で完遂することで、技術検証を意思決定に直結するアウトプットへ転換

**使用技術**  
\`MySQL\` \`AWS DMS\` \`Amazon S3\` \`Snowflake\` \`Snowpipe\` \`dbt\` \`AWS Lambda\` \`Amazon EventBridge Scheduler\`

---

#### 社内ハンドブック構築、運用（2026/01 - 現在）

**背景・課題**
- データモデリングルールや社内ルールが属人化
- ナレッジの散在により、新規参画メンバーのオンボーディングに時間がかかる

**取り組み**
- データモデリングルール（カタログ・スキーマ設計、命名規則等）を体系的に整理
- MkDocsによる静的サイト構築、Cloudflare Pages + Zero Trustでセキュアなホスティング環境を実現
- Google Workspaceとの連携により、社員のみアクセス可能な仕組みを構築

**成果**
- チーム全体で参照できるベストプラクティス集を構築
- 新規参画メンバーのオンボーディング時間を短縮

**使用技術**  
\`MkDocs\` \`Markdown\` \`Cloudflare Pages\` \`Cloudflare Zero Trust\` \`Google Workspace\` \`Git\` \`GitHub\`

---

### コグラフ株式会社（2024/03 - 2026/01）

**職種**：データアナリスト / チームリーダー

#### 大手WEBサービス企業データ分析・品質管理（2024/04 - 2026/01）

**プロジェクト概要**  
\`\`\`txt
会員数1億人以上、月間アクティブユーザー約6,000万人規模のWEBサービスにおけるキャンペーン施策関連SQL品質管理およびデータ分析業務。
\`\`\`

**背景・課題**
- キャンペーン施策の効果測定に必要なデータ分析基盤の構築・運用
- マーケターが作成するSQLの品質担保（要件適合性・パフォーマンス・可読性）
- 広告枠活用の意思決定に向けた定量的な根拠の提示

**取り組み**

**1. ビジネス意思決定への貢献**
- 広告枠活用のPoC分析を担当
- 定量分析によりPoCの効果を実証し、本格導入判断を支援

**2. SQL品質管理・業務効率化**
- チームメンバーが作成したSQLのレビュー（要件適合性・パフォーマンス・可読性）
- Git（BitBucket）を活用したプルリクエストベースのレビュー体制構築
- レビュー証跡をLLMに読み込ませ、汎用的な検証ナレッジを整理・SQL生成ツールへフィードバック
- SQLレビュー工数を約50%削減

**3. データ分析基盤構築・運用**
- DOMO（BIツール）を活用したポイント関連データ分析基盤の構築・運用
- ポイント施策の効果分析（顧客育成効果、インパクト、ROI等）
- 複数の機械学習モデル・統計モデルを用いたポイント付与数予測

**4. LLM活用ツール開発**
- JIRA APIを活用した法務相談検索・草案作成ツール開発（文章作成時間を1時間→数分に短縮）
- KINTONE APIを活用したキャンペーン要綱自動生成ツール開発

**成果**
- PoC分析により広告枠活用の本格導入を実現
- SQLレビュー工数約50%削減、検証ナレッジのFBエコシステム構築
- 分析結果を経営会議・役員説明に活用されるインサイトとして提供
- LLMツールにより文章作成時間を大幅短縮、誤字脱字防止による品質向上

**使用技術**  
\`BigQuery\` \`Python (pandas, scikit-learn, statsmodels, openai, langchain, streamlit)\` \`DOMO\` \`Git (BitBucket)\` \`JIRA API\` \`KINTONE API\`

---

#### チーム運営への貢献（2024/09 - 2026/01）

**背景・課題**
- 約7名のメンバーを擁する事業部において、安定したプロジェクト稼働率の維持が課題
- 新人育成プログラムの効率化が必要

**取り組み**
- メンバーの進捗管理（日報報告会、1on1、評価一次レビュー）
- 研修プログラムの企画改善、各メンバーの参画プロジェクトに合わせたカリキュラム策定
- メンバーのメンタルコンディショニング支援（課題整理、タスク集中環境の構築）

**成果**
- プロジェクト稼働率100%を維持
- 育成プログラム改善により、育成期間を従来比50%短縮（BI研修含め1.5ヶ月で戦力化）
- 短期離任が続いていたメンバーの案件定着期間を3ヶ月→6ヶ月に改善

---

#### 住宅ローンキャッシュフロー展開ツール再構築（2024/06 - 2025/03）

**プロジェクト概要**  
\`\`\`txt
住宅ローン明細キャッシュフロー算出ツール（Excel VBA）のPythonへの置換・再構築プロジェクト。
\`\`\`

**背景・課題**
- 既存VBAツールの処理時間が長大（3時間/5万件）
- 最大40万債権への対応が必要
- 高セキュリティ環境下での開発・情報管理が求められる

**取り組み**
- VBAツールの調査・不要機能の洗い出し
- Pythonでの大規模データ算出・集計機能の実装（並列処理、メモリ負担軽減）
- 実行PC仕様に合わせた処理チャンク設定・パフォーマンス計測・ボトルネック特定
- 設計書・処理ロジックフロー図等のドキュメント作成

**成果**
- 処理時間を3時間（5万件）→20分（40万件）に大幅改善（高性能PCでの実行時）
- 他者コードの解読・最適化による高品質なデータ処理実装
- 高セキュリティ環境下での開発・納品を完遂

**使用技術**  
\`Python (pandas, numpy, concurrent.futures, pickle, openpyxl)\` \`Excel VBA\`

---

### キャリア転換期（2023/01 - 2024/02）

**背景**  
\`\`\`txt
公益財団法人から民間企業へのキャリアチェンジ、およびデータアナリストへの職種転換を目指した期間。研修と実務経験を通じて、データ分析に必要なスキルセットを習得。
\`\`\`

#### TSD株式会社（税理士事務所）（2023/09 - 2024/02）
**職種**：税理士補助

**業務内容**
- 企業の月次会計処理および残高試算表の作成
- 法人税申告書の作成
- 年末調整計算、給与支払報告書作成

**習得スキル**
- 会計・税務の基礎知識と月次会計処理スキル
- セルフチェックによるミス防止能力
- 不明点・情報不足・進捗を明確に分けた報告作成能力

#### 株式会社リクルート（2023/06 - 2023/07）
**職種**：営業

**業務内容**
- 中途採用求人向け広告媒体のサービス紹介、商談設定までの案内
- 1日平均発信数：150件

**成果**
- 月受注件数ノルマ達成
- 顧客属性による絞り込み・優先順位付け・KPI達成のタスク管理能力を習得
- 顧客折衝・ヒアリングスキルの習得

#### 株式会社エスタイル（2023/01 - 2023/05）
**職種**：研修生（データサイエンス）

**業務内容**
- Python（pandas、numpy、matplotlib、seaborn、scikit-learn、statsmodels、Optuna等）によるデータ集計・分析・モデル実装
- SQLによるデータ取得・加工・集計
- Tableauによるデータ接続・可視化・EDA

**成果**
- SIGNATE 第31回 Beginner限定コンペ：4位/154名
- SIGNATE SOTA Challenge：銅メダル（上位10％）、称号「Advanced」取得

---

**この期間の総括**  
\`\`\`txt
職種転換に向けた試行錯誤を経て、2024年3月よりデータアナリストとして本格的なキャリアをスタート。以降、データエンジニアリング領域で継続的にスキルを深めています。

各遷移の背景としては、下記のとおりです。
- エスタイル：データサイエンスを体系的に学ぶ場として
- リクルート：データを活用した顧客支援、実務経験を求めて
- TSD：財務データを通じた実務経験の獲得を志向して

この短期間での移動が続いた背景にある自己理解については冒頭プロフィールに記載のとおりです。
\`\`\`

---

### 公益財団法人日本財団（2021/04 - 2022/12）

**職種**：プロジェクトコーディネーター

#### 業務詳細

**業務内容**
- 非営利団体への助成事業のヒアリング・審査、助成契約締結～完了までの管理
- 災害ボランティア団体への物資・車両等調達支援
- 感染症対策事業（高齢者施設等への無料PCR検査事業）の進捗管理・関連機関への報告

**主な成果**
- PCR検査事業のデータ集計・分析・提案を実施し、学術的分析結果として公表
  - [高齢者施設等への無料PCR検査事業 中間報告 実績編](https://www.nippon-foundation.or.jp/who/news/information/2021/20210825-60865.html)
  - [高齢者施設等への無料PCR検査事業 学術的分析結果公表](https://www.nippon-foundation.or.jp/who/news/information/2022/20220722-75220.html)
- Google Workspaceを活用した助成金申請フロー改善（GASによる自動返信・情報一元化）

**習得スキル**
- 状況に応じた情報収集・根拠に基づく説明力
- データ集計・分析・提案力
- Google Workspace活用による業務効率化

---

## スキルセット

### プログラミング言語
\`Python\` \`SQL\` \`SAS\` \`VBA\` \`Windows PowerShell\`

### データベース・データ基盤
\`BigQuery\` \`Databricks\` \`Unity Catalog\` \`Delta Lake\` \`Snowflake\` \`MySQL\`

### データ変換・モデリング
\`dbt\` (多層アーキテクチャ設計・実装、インクリメンタルモデル)

### BIツール
\`Databricks BI\` \`PowerBI\` \`DOMO\`

### インフラ・IaC
\`AWS S3\` \`AWS IAM\` \`AWS DMS\` \`AWS Lambda\` \`Amazon EventBridge Scheduler\` \`Azure Data Factory\` \`Terraform\` \`Cloudflare Pages\` \`Cloudflare Zero Trust\`

### 開発・バージョン管理
\`Git\` \`GitHub\` \`BitBucket\` \`uv\` \`MkDocs\`

### AI・LLM活用
\`OpenAI API\` \`LangChain\` \`Streamlit\` \`RAG\` \`Claude Code\`

### プロジェクト管理
\`JIRA\` \`Confluence\`

### ソフトスキル
- データを通じたビジネス意思決定支援
- 要件定義・ステークホルダーとの調整
- コードレビュー・品質管理
- ドキュメント作成・ナレッジマネジメント
- チーム運営・メンバー育成

---

## 保有資格

|資格名|取得年月|
|---|---|
|統計検定2級|2023年2月|
|TOEIC L&R 800点|2020年11月|
|日商簿記検定3級|2020年10月|
|中型自動車第一種運転免許|2023年5月|
|普通自動二輪運転免許|2018年9月|
|普通自動車第一種運転免許|2017年9月|

---

## 技術記事・インタビュー

### Zenn投稿記事
- [一つのYAMLにユーザー情報をまとめてインフラ管理を楽にした](https://zenn.dev/stable_blog/articles/e4bd32e3085091)
- [Cloudflare Pages + MkDocs で社内ポータルサイトを約4時間で作った](https://zenn.dev/taro_imo/articles/5fca8c6d29731e)
- [Databricksではじめるオープンテーブルフォーマット入門 読書メモ 1-3章](https://zenn.dev/taro_imo/articles/1ec4c559f6b734)
- [Databricks JobのdbtタスクでFull RefreshとIncrementalを切り替える](https://zenn.dev/taro_imo/articles/ce6a695c9dec7c)
- [dbt チートシート](https://zenn.dev/taro_imo/articles/a3019d09604324)
- [BigQueryのループ処理で月次集計を自動化しよう](https://zenn.dev/taro_imo/articles/01214b3a793a3c)
- [markitdownとGrok 4.1で作るPDF翻訳ツール：オライリー本を日本語化する](https://zenn.dev/taro_imo/articles/c510256647efa0)
- [SQLでテストクエリを書いてみよう](https://zenn.dev/taro_imo/articles/1ddc1f2f3687ed)

### Note投稿記事
- [TableauをPythonで再現！？お手軽分析ライブラリpygwalkerのすすめ](https://note.com/cograph_data/n/na02cbfeb35b7)
- [SAS-Python書き換えメモ　～SASと向き合うことになった貴方へ～](https://note.com/cograph_data/n/n3147bba49ed2)
- [並列処理入門　Pythonでの大規模データの爆速処理をDaskではじめよう](https://note.com/cograph_data/n/n6c8339b035f6)

### インタビュー記事（Wantedly）
- [【社員インタビュー】予想外こそ成長のチャンス。実務で学んだ「データアナリストに必要な経験とスキル」](https://www.wantedly.com/companies/co-graph/post_articles/958219)
- [【社員インタビュー】気軽に勉強できる環境を身近に。職種を超え学び合える文化を作りたい](https://www.wantedly.com/companies/co-graph/post_articles/936037)

---
`;function eo(){const e=Ns(Ys),n=(r=>{const s=[];let o=null,i=[];return r.forEach(a=>{!a.title&&a.level===0?s.push({type:"intro",section:a}):a.level===1||a.level===2?(o&&(s.push({type:"h3-group",section:o,subsections:i}),o=null,i=[]),s.push({type:"regular",section:a})):a.level===3?(o&&s.push({type:"h3-group",section:o,subsections:i}),o=a,i=[]):a.level===4&&o?i.push(a):(o&&(s.push({type:"h3-group",section:o,subsections:i}),o=null,i=[]),s.push({type:"regular",section:a}))}),o&&s.push({type:"h3-group",section:o,subsections:i}),s})(e);return p("div",{className:"min-h-screen bg-gray-50",children:p("div",{className:"max-w-4xl mx-auto py-8 px-4",children:[p("header",{className:"text-center mb-12",children:[p("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"職務経歴書"}),p(Xs,{})]}),p("main",{className:"bg-white rounded-lg shadow-lg p-8",children:n.map((r,s)=>{if(r.type==="intro")return p("div",{className:"mb-8",dangerouslySetInnerHTML:{__html:`<p class="mb-4">${Ne(r.section.content)}</p>`}},r.section.id);if(r.type==="h3-group")return p(Vs,{section:r.section,subsections:r.subsections||[]},r.section.id);{const o=Ne(r.section.content);return p(Fs,{title:r.section.title,content:o,level:r.section.level,defaultOpen:r.section.level<=2},r.section.id)}})}),p("footer",{className:"text-center mt-12 text-gray-500",children:[p("p",{children:"Built with HonoX on GitHub Pages"}),p("p",{className:"mt-2",children:["Generated by:"," ",p("a",{href:"https://zenn.dev/tsukuboshi/articles/honox-resume",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:text-blue-800 underline",children:"Markdownで書いた職務経歴書を良い感じのWebサイトとPDFに自動変換するツールを作ってみた"})]})]})]})})}const to=!0,no=Object.freeze(Object.defineProperty({__proto__:null,__importing_islands:to,default:eo},Symbol.toStringTag,{value:"Module"}));var pn=(e,t,n)=>(r,s)=>{let o=-1;return i(0);async function i(a){if(a<=o)throw new Error("next() called multiple times");o=a;let l,u=!1,f;if(e[a]?(f=e[a][0][0],r.req.routeIndex=a):f=a===e.length&&s||void 0,f)try{l=await f(r,()=>i(a+1))}catch(d){if(d instanceof Error&&t)r.error=d,l=await t(d,r),u=!0;else throw d}else r.finalized===!1&&n&&(l=await n(r));return l&&(r.finalized===!1||u)&&(r.res=l),r}},ro=async(e,t=Object.create(null))=>{const{all:n=!1,dot:r=!1}=t,o=(e instanceof sr?e.raw.headers:e.headers).get("Content-Type");return o!=null&&o.startsWith("multipart/form-data")||o!=null&&o.startsWith("application/x-www-form-urlencoded")?so(e,{all:n,dot:r}):{}};async function so(e,t){const n=await e.formData();return n?oo(n,t):{}}function oo(e,t){const n=Object.create(null);return e.forEach((r,s)=>{t.all||s.endsWith("[]")?io(n,s,r):n[s]=r}),t.dot&&Object.entries(n).forEach(([r,s])=>{r.includes(".")&&(ao(n,r,s),delete n[r])}),n}var io=(e,t,n)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(n):e[t]=[e[t],n]:e[t]=n},ao=(e,t,n)=>{let r=e;const s=t.split(".");s.forEach((o,i)=>{i===s.length-1?r[o]=n:((!r[o]||typeof r[o]!="object"||Array.isArray(r[o])||r[o]instanceof File)&&(r[o]=Object.create(null)),r=r[o])})},Xn=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},lo=e=>{const{groups:t,path:n}=co(e),r=Xn(n);return uo(r,t)},co=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(n,r)=>{const s=`@${r}`;return t.push([s,n]),s}),{groups:t,path:e}},uo=(e,t)=>{for(let n=t.length-1;n>=0;n--){const[r]=t[n];for(let s=e.length-1;s>=0;s--)if(e[s].includes(r)){e[s]=e[s].replace(r,t[n][1]);break}}return e},st={},mn=(e,t)=>{if(e==="*")return"*";const n=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(n){const r=`${e}#${t}`;return st[r]||(n[2]?st[r]=t&&t[0]!==":"&&t[0]!=="*"?[r,n[1],new RegExp(`^${n[2]}(?=/${t})`)]:[e,n[1],new RegExp(`^${n[2]}$`)]:st[r]=[e,n[1],!0]),st[r]}return null},Yn=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,n=>{try{return t(n)}catch{return n}})}},fo=e=>Yn(e,decodeURI),er=e=>{const t=e.url,n=t.indexOf("/",8);let r=n;for(;r<t.length;r++){const s=t.charCodeAt(r);if(s===37){const o=t.indexOf("?",r),i=t.slice(n,o===-1?void 0:o);return fo(i.includes("%25")?i.replace(/%25/g,"%2525"):i)}else if(s===63)break}return t.slice(n,r)},ho=e=>{const t=er(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},Re=(e,t,...n)=>(n.length&&(t=Re(t,...n)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),tr=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),n=[];let r="";return t.forEach(s=>{if(s!==""&&!/\:/.test(s))r+="/"+s;else if(/\:/.test(s))if(/\?/.test(s)){n.length===0&&r===""?n.push("/"):n.push(r);const o=s.replace("?","");r+="/"+o,n.push(r)}else r+="/"+s}),n.filter((s,o,i)=>i.indexOf(s)===o)},At=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?rr(e):e):e,nr=(e,t,n)=>{let r;if(!n&&t&&!/[%+]/.test(t)){let i=e.indexOf(`?${t}`,8);for(i===-1&&(i=e.indexOf(`&${t}`,8));i!==-1;){const a=e.charCodeAt(i+t.length+1);if(a===61){const l=i+t.length+2,u=e.indexOf("&",l);return At(e.slice(l,u===-1?void 0:u))}else if(a==38||isNaN(a))return"";i=e.indexOf(`&${t}`,i+1)}if(r=/[%+]/.test(e),!r)return}const s={};r??(r=/[%+]/.test(e));let o=e.indexOf("?",8);for(;o!==-1;){const i=e.indexOf("&",o+1);let a=e.indexOf("=",o);a>i&&i!==-1&&(a=-1);let l=e.slice(o+1,a===-1?i===-1?void 0:i:a);if(r&&(l=At(l)),o=i,l==="")continue;let u;a===-1?u="":(u=e.slice(a+1,i===-1?void 0:i),r&&(u=At(u))),n?(s[l]&&Array.isArray(s[l])||(s[l]=[]),s[l].push(u)):s[l]??(s[l]=u)}return t?s[t]:s},po=nr,mo=(e,t)=>nr(e,t,!0),rr=decodeURIComponent,gn=e=>Yn(e,rr),Ce,z,ne,or,ir,Bt,oe,wn,sr=(wn=class{constructor(e,t="/",n=[[]]){k(this,ne);x(this,"raw");k(this,Ce);k(this,z);x(this,"routeIndex",0);x(this,"path");x(this,"bodyCache",{});k(this,oe,e=>{const{bodyCache:t,raw:n}=this,r=t[e];if(r)return r;const s=Object.keys(t)[0];return s?t[s].then(o=>(s==="json"&&(o=JSON.stringify(o)),new Response(o)[e]())):t[e]=n[e]()});this.raw=e,this.path=t,v(this,z,n),v(this,Ce,{})}param(e){return e?C(this,ne,or).call(this,e):C(this,ne,ir).call(this)}query(e){return po(this.url,e)}queries(e){return mo(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((n,r)=>{t[r]=n}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await ro(this,e))}json(){return c(this,oe).call(this,"json")}text(){return c(this,oe).call(this,"text")}arrayBuffer(){return c(this,oe).call(this,"arrayBuffer")}blob(){return c(this,oe).call(this,"blob")}formData(){return c(this,oe).call(this,"formData")}addValidatedData(e,t){c(this,Ce)[e]=t}valid(e){return c(this,Ce)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get matchedRoutes(){return c(this,z)[0].map(([[,e]])=>e)}get routePath(){return c(this,z)[0].map(([[,e]])=>e)[this.routeIndex].path}},Ce=new WeakMap,z=new WeakMap,ne=new WeakSet,or=function(e){const t=c(this,z)[0][this.routeIndex][1][e],n=C(this,ne,Bt).call(this,t);return n?/\%/.test(n)?gn(n):n:void 0},ir=function(){const e={},t=Object.keys(c(this,z)[0][this.routeIndex][1]);for(const n of t){const r=C(this,ne,Bt).call(this,c(this,z)[0][this.routeIndex][1][n]);r&&typeof r=="string"&&(e[n]=/\%/.test(r)?gn(r):r)}return e},Bt=function(e){return c(this,z)[1]?c(this,z)[1][e]:e},oe=new WeakMap,wn),go="text/plain; charset=UTF-8",_t=(e,t={})=>{for(const n of Object.keys(t))e.set(n,t[n]);return e},qe,Ve,J,ve,X,_,j,T,Y,Qe,Pe,Oe,Ze,Ke,I,B,xn,vo=(xn=class{constructor(e,t){k(this,I);k(this,qe);k(this,Ve);x(this,"env",{});k(this,J);x(this,"finalized",!1);x(this,"error");k(this,ve,200);k(this,X);k(this,_);k(this,j);k(this,T);k(this,Y,!0);k(this,Qe);k(this,Pe);k(this,Oe);k(this,Ze);k(this,Ke);x(this,"render",(...e)=>(c(this,Pe)??v(this,Pe,t=>this.html(t)),c(this,Pe).call(this,...e)));x(this,"setLayout",e=>v(this,Qe,e));x(this,"getLayout",()=>c(this,Qe));x(this,"setRenderer",e=>{v(this,Pe,e)});x(this,"header",(e,t,n)=>{if(this.finalized&&v(this,T,new Response(c(this,T).body,c(this,T))),t===void 0){c(this,_)?c(this,_).delete(e):c(this,j)&&delete c(this,j)[e.toLocaleLowerCase()],this.finalized&&this.res.headers.delete(e);return}n!=null&&n.append?(c(this,_)||(v(this,Y,!1),v(this,_,new Headers(c(this,j))),v(this,j,{})),c(this,_).append(e,t)):c(this,_)?c(this,_).set(e,t):(c(this,j)??v(this,j,{}),c(this,j)[e.toLowerCase()]=t),this.finalized&&(n!=null&&n.append?this.res.headers.append(e,t):this.res.headers.set(e,t))});x(this,"status",e=>{v(this,Y,!1),v(this,ve,e)});x(this,"set",(e,t)=>{c(this,J)??v(this,J,new Map),c(this,J).set(e,t)});x(this,"get",e=>c(this,J)?c(this,J).get(e):void 0);x(this,"newResponse",(...e)=>C(this,I,B).call(this,...e));x(this,"body",(e,t,n)=>typeof t=="number"?C(this,I,B).call(this,e,t,n):C(this,I,B).call(this,e,t));x(this,"text",(e,t,n)=>{if(!c(this,j)){if(c(this,Y)&&!n&&!t)return new Response(e);v(this,j,{})}return c(this,j)["content-type"]=go,typeof t=="number"?C(this,I,B).call(this,e,t,n):C(this,I,B).call(this,e,t)});x(this,"json",(e,t,n)=>{const r=JSON.stringify(e);return c(this,j)??v(this,j,{}),c(this,j)["content-type"]="application/json",typeof t=="number"?C(this,I,B).call(this,r,t,n):C(this,I,B).call(this,r,t)});x(this,"html",(e,t,n)=>(c(this,j)??v(this,j,{}),c(this,j)["content-type"]="text/html; charset=UTF-8",typeof e=="object"?Nn(e,jn.Stringify,!1,{}).then(r=>typeof t=="number"?C(this,I,B).call(this,r,t,n):C(this,I,B).call(this,r,t)):typeof t=="number"?C(this,I,B).call(this,e,t,n):C(this,I,B).call(this,e,t)));x(this,"redirect",(e,t)=>(c(this,_)??v(this,_,new Headers),c(this,_).set("Location",String(e)),this.newResponse(null,t??302)));x(this,"notFound",()=>(c(this,Oe)??v(this,Oe,()=>new Response),c(this,Oe).call(this,this)));v(this,qe,e),t&&(v(this,X,t.executionCtx),this.env=t.env,v(this,Oe,t.notFoundHandler),v(this,Ke,t.path),v(this,Ze,t.matchResult))}get req(){return c(this,Ve)??v(this,Ve,new sr(c(this,qe),c(this,Ke),c(this,Ze))),c(this,Ve)}get event(){if(c(this,X)&&"respondWith"in c(this,X))return c(this,X);throw Error("This context has no FetchEvent")}get executionCtx(){if(c(this,X))return c(this,X);throw Error("This context has no ExecutionContext")}get res(){return v(this,Y,!1),c(this,T)||v(this,T,new Response("404 Not Found",{status:404}))}set res(e){if(v(this,Y,!1),c(this,T)&&e){e=new Response(e.body,e);for(const[t,n]of c(this,T).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const r=c(this,T).headers.getSetCookie();e.headers.delete("set-cookie");for(const s of r)e.headers.append("set-cookie",s)}else e.headers.set(t,n)}v(this,T,e),this.finalized=!0}get var(){return c(this,J)?Object.fromEntries(c(this,J)):{}}},qe=new WeakMap,Ve=new WeakMap,J=new WeakMap,ve=new WeakMap,X=new WeakMap,_=new WeakMap,j=new WeakMap,T=new WeakMap,Y=new WeakMap,Qe=new WeakMap,Pe=new WeakMap,Oe=new WeakMap,Ze=new WeakMap,Ke=new WeakMap,I=new WeakSet,B=function(e,t,n){if(c(this,Y)&&!n&&!t&&c(this,ve)===200)return new Response(e,{headers:c(this,j)});if(t&&typeof t!="number"){const s=new Headers(t.headers);c(this,_)&&c(this,_).forEach((i,a)=>{a==="set-cookie"?s.append(a,i):s.set(a,i)});const o=_t(s,c(this,j));return new Response(e,{headers:o,status:t.status??c(this,ve)})}const r=typeof t=="number"?t:c(this,ve);c(this,j)??v(this,j,{}),c(this,_)??v(this,_,new Headers),_t(c(this,_),c(this,j)),c(this,T)&&(c(this,T).headers.forEach((s,o)=>{var i,a;o==="set-cookie"?(i=c(this,_))==null||i.append(o,s):(a=c(this,_))==null||a.set(o,s)}),_t(c(this,_),c(this,j))),n??(n={});for(const[s,o]of Object.entries(n))if(typeof o=="string")c(this,_).set(s,o);else{c(this,_).delete(s);for(const i of o)c(this,_).append(s,i)}return new Response(e,{status:r,headers:c(this,_)})},xn),$="ALL",yo="all",bo=["get","post","put","delete","options","patch"],ar="Can not add a route since the matcher is already built.",lr=class extends Error{},wo=e=>e.text("404 Not Found",404),vn=(e,t)=>{if("getResponse"in e){const n=e.getResponse();return t.newResponse(n.body,n)}return console.error(e),t.text("Internal Server Error",500)},W,D,ur,U,me,ut,ft,En,cr=(En=class{constructor(t={}){k(this,D);x(this,"get");x(this,"post");x(this,"put");x(this,"delete");x(this,"options");x(this,"patch");x(this,"all");x(this,"on");x(this,"use");x(this,"router");x(this,"getPath");x(this,"_basePath","/");k(this,W,"/");x(this,"routes",[]);k(this,U,wo);x(this,"errorHandler",vn);x(this,"onError",t=>(this.errorHandler=t,this));x(this,"notFound",t=>(v(this,U,t),this));x(this,"fetch",(t,...n)=>C(this,D,ft).call(this,t,n[1],n[0],t.method));x(this,"request",(t,n,r,s)=>t instanceof Request?this.fetch(n?new Request(t,n):t,r,s):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${Re("/",t)}`,n),r,s)));x(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(C(this,D,ft).call(this,t.request,t,void 0,t.request.method))})});[...bo,yo].forEach(o=>{this[o]=(i,...a)=>(typeof i=="string"?v(this,W,i):C(this,D,me).call(this,o,c(this,W),i),a.forEach(l=>{C(this,D,me).call(this,o,c(this,W),l)}),this)}),this.on=(o,i,...a)=>{for(const l of[i].flat()){v(this,W,l);for(const u of[o].flat())a.map(f=>{C(this,D,me).call(this,u.toUpperCase(),c(this,W),f)})}return this},this.use=(o,...i)=>(typeof o=="string"?v(this,W,o):(v(this,W,"*"),i.unshift(o)),i.forEach(a=>{C(this,D,me).call(this,$,c(this,W),a)}),this);const{strict:r,...s}=t;Object.assign(this,s),this.getPath=r??!0?t.getPath??er:ho}route(t,n){const r=this.basePath(t);return n.routes.map(s=>{var i;let o;n.errorHandler===vn?o=s.handler:(o=async(a,l)=>(await pn([],n.errorHandler)(a,()=>s.handler(a,l))).res,o[$t]=s.handler),C(i=r,D,me).call(i,s.method,s.path,o)}),this}basePath(t){const n=C(this,D,ur).call(this);return n._basePath=Re(this._basePath,t),n}mount(t,n,r){let s,o;r&&(typeof r=="function"?o=r:(o=r.optionHandler,r.replaceRequest===!1?s=l=>l:s=r.replaceRequest));const i=o?l=>{const u=o(l);return Array.isArray(u)?u:[u]}:l=>{let u;try{u=l.executionCtx}catch{}return[l.env,u]};s||(s=(()=>{const l=Re(this._basePath,t),u=l==="/"?0:l.length;return f=>{const d=new URL(f.url);return d.pathname=d.pathname.slice(u)||"/",new Request(d,f)}})());const a=async(l,u)=>{const f=await n(s(l.req.raw),...i(l));if(f)return f;await u()};return C(this,D,me).call(this,$,Re(t,"*"),a),this}},W=new WeakMap,D=new WeakSet,ur=function(){const t=new cr({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,v(t,U,c(this,U)),t.routes=this.routes,t},U=new WeakMap,me=function(t,n,r){t=t.toUpperCase(),n=Re(this._basePath,n);const s={path:n,method:t,handler:r};this.router.add(t,n,[r,s]),this.routes.push(s)},ut=function(t,n){if(t instanceof Error)return this.errorHandler(t,n);throw t},ft=function(t,n,r,s){if(s==="HEAD")return(async()=>new Response(null,await C(this,D,ft).call(this,t,n,r,"GET")))();const o=this.getPath(t,{env:r}),i=this.router.match(s,o),a=new vo(t,{path:o,matchResult:i,env:r,executionCtx:n,notFoundHandler:c(this,U)});if(i[0].length===1){let u;try{u=i[0][0][0][0](a,async()=>{a.res=await c(this,U).call(this,a)})}catch(f){return C(this,D,ut).call(this,f,a)}return u instanceof Promise?u.then(f=>f||(a.finalized?a.res:c(this,U).call(this,a))).catch(f=>C(this,D,ut).call(this,f,a)):u??c(this,U).call(this,a)}const l=pn(i[0],this.errorHandler,c(this,U));return(async()=>{try{const u=await l(a);if(!u.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return u.res}catch(u){return C(this,D,ut).call(this,u,a)}})()},En),gt="[^/]+",Fe=".*",ze="(?:|/.*)",He=Symbol(),xo=new Set(".\\+*[^]$()");function Eo(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===Fe||e===ze?1:t===Fe||t===ze?-1:e===gt?1:t===gt?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var ye,be,G,Sn,Ft=(Sn=class{constructor(){k(this,ye);k(this,be);k(this,G,Object.create(null))}insert(t,n,r,s,o){if(t.length===0){if(c(this,ye)!==void 0)throw He;if(o)return;v(this,ye,n);return}const[i,...a]=t,l=i==="*"?a.length===0?["","",Fe]:["","",gt]:i==="/*"?["","",ze]:i.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let u;if(l){const f=l[1];let d=l[2]||gt;if(f&&l[2]&&(d=d.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(d)))throw He;if(u=c(this,G)[d],!u){if(Object.keys(c(this,G)).some(h=>h!==Fe&&h!==ze))throw He;if(o)return;u=c(this,G)[d]=new Ft,f!==""&&v(u,be,s.varIndex++)}!o&&f!==""&&r.push([f,c(u,be)])}else if(u=c(this,G)[i],!u){if(Object.keys(c(this,G)).some(f=>f.length>1&&f!==Fe&&f!==ze))throw He;if(o)return;u=c(this,G)[i]=new Ft}u.insert(a,n,r,s,o)}buildRegExpStr(){const n=Object.keys(c(this,G)).sort(Eo).map(r=>{const s=c(this,G)[r];return(typeof c(s,be)=="number"?`(${r})@${c(s,be)}`:xo.has(r)?`\\${r}`:r)+s.buildRegExpStr()});return typeof c(this,ye)=="number"&&n.unshift(`#${c(this,ye)}`),n.length===0?"":n.length===1?n[0]:"(?:"+n.join("|")+")"}},ye=new WeakMap,be=new WeakMap,G=new WeakMap,Sn),vt,Je,kn,So=(kn=class{constructor(){k(this,vt,{varIndex:0});k(this,Je,new Ft)}insert(e,t,n){const r=[],s=[];for(let i=0;;){let a=!1;if(e=e.replace(/\{[^}]+\}/g,l=>{const u=`@\\${i}`;return s[i]=[u,l],i++,a=!0,u}),!a)break}const o=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let i=s.length-1;i>=0;i--){const[a]=s[i];for(let l=o.length-1;l>=0;l--)if(o[l].indexOf(a)!==-1){o[l]=o[l].replace(a,s[i][1]);break}}return c(this,Je).insert(o,t,r,c(this,vt),n),r}buildRegExp(){let e=c(this,Je).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const n=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(s,o,i)=>o!==void 0?(n[++t]=Number(o),"$()"):(i!==void 0&&(r[Number(i)]=++t),"")),[new RegExp(`^${e}`),n,r]}},vt=new WeakMap,Je=new WeakMap,kn),fr=[],ko=[/^$/,[],Object.create(null)],dt=Object.create(null);function dr(e){return dt[e]??(dt[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,n)=>n?`\\${n}`:"(?:|/.*)")}$`))}function Ro(){dt=Object.create(null)}function Co(e){var u;const t=new So,n=[];if(e.length===0)return ko;const r=e.map(f=>[!/\*|\/:/.test(f[0]),...f]).sort(([f,d],[h,g])=>f?1:h?-1:d.length-g.length),s=Object.create(null);for(let f=0,d=-1,h=r.length;f<h;f++){const[g,y,m]=r[f];g?s[y]=[m.map(([w])=>[w,Object.create(null)]),fr]:d++;let b;try{b=t.insert(y,d,g)}catch(w){throw w===He?new lr(y):w}g||(n[d]=m.map(([w,E])=>{const S=Object.create(null);for(E-=1;E>=0;E--){const[R,P]=b[E];S[R]=P}return[w,S]}))}const[o,i,a]=t.buildRegExp();for(let f=0,d=n.length;f<d;f++)for(let h=0,g=n[f].length;h<g;h++){const y=(u=n[f][h])==null?void 0:u[1];if(!y)continue;const m=Object.keys(y);for(let b=0,w=m.length;b<w;b++)y[m[b]]=a[y[m[b]]]}const l=[];for(const f in i)l[f]=n[i[f]];return[o,l,s]}function ke(e,t){if(e){for(const n of Object.keys(e).sort((r,s)=>s.length-r.length))if(dr(n).test(t))return[...e[n]]}}var ie,ae,Le,hr,pr,Rn,Po=(Rn=class{constructor(){k(this,Le);x(this,"name","RegExpRouter");k(this,ie);k(this,ae);v(this,ie,{[$]:Object.create(null)}),v(this,ae,{[$]:Object.create(null)})}add(e,t,n){var a;const r=c(this,ie),s=c(this,ae);if(!r||!s)throw new Error(ar);r[e]||[r,s].forEach(l=>{l[e]=Object.create(null),Object.keys(l[$]).forEach(u=>{l[e][u]=[...l[$][u]]})}),t==="/*"&&(t="*");const o=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const l=dr(t);e===$?Object.keys(r).forEach(u=>{var f;(f=r[u])[t]||(f[t]=ke(r[u],t)||ke(r[$],t)||[])}):(a=r[e])[t]||(a[t]=ke(r[e],t)||ke(r[$],t)||[]),Object.keys(r).forEach(u=>{(e===$||e===u)&&Object.keys(r[u]).forEach(f=>{l.test(f)&&r[u][f].push([n,o])})}),Object.keys(s).forEach(u=>{(e===$||e===u)&&Object.keys(s[u]).forEach(f=>l.test(f)&&s[u][f].push([n,o]))});return}const i=tr(t)||[t];for(let l=0,u=i.length;l<u;l++){const f=i[l];Object.keys(s).forEach(d=>{var h;(e===$||e===d)&&((h=s[d])[f]||(h[f]=[...ke(r[d],f)||ke(r[$],f)||[]]),s[d][f].push([n,o-u+l+1]))})}}match(e,t){Ro();const n=C(this,Le,hr).call(this);return this.match=(r,s)=>{const o=n[r]||n[$],i=o[2][s];if(i)return i;const a=s.match(o[0]);if(!a)return[[],fr];const l=a.indexOf("",1);return[o[1][l],a]},this.match(e,t)}},ie=new WeakMap,ae=new WeakMap,Le=new WeakSet,hr=function(){const e=Object.create(null);return Object.keys(c(this,ae)).concat(Object.keys(c(this,ie))).forEach(t=>{e[t]||(e[t]=C(this,Le,pr).call(this,t))}),v(this,ie,v(this,ae,void 0)),e},pr=function(e){const t=[];let n=e===$;return[c(this,ie),c(this,ae)].forEach(r=>{const s=r[e]?Object.keys(r[e]).map(o=>[o,r[e][o]]):[];s.length!==0?(n||(n=!0),t.push(...s)):e!==$&&t.push(...Object.keys(r[$]).map(o=>[o,r[$][o]]))}),n?Co(t):null},Rn),le,ee,Cn,Oo=(Cn=class{constructor(e){x(this,"name","SmartRouter");k(this,le,[]);k(this,ee,[]);v(this,le,e.routers)}add(e,t,n){if(!c(this,ee))throw new Error(ar);c(this,ee).push([e,t,n])}match(e,t){if(!c(this,ee))throw new Error("Fatal error");const n=c(this,le),r=c(this,ee),s=n.length;let o=0,i;for(;o<s;o++){const a=n[o];try{for(let l=0,u=r.length;l<u;l++)a.add(...r[l]);i=a.match(e,t)}catch(l){if(l instanceof lr)continue;throw l}this.match=a.match.bind(a),v(this,le,[a]),v(this,ee,void 0);break}if(o===s)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,i}get activeRouter(){if(c(this,ee)||c(this,le).length!==1)throw new Error("No active router has been determined yet.");return c(this,le)[0]}},le=new WeakMap,ee=new WeakMap,Cn),Me=Object.create(null),ce,M,we,Ae,L,te,ge,Pn,mr=(Pn=class{constructor(e,t,n){k(this,te);k(this,ce);k(this,M);k(this,we);k(this,Ae,0);k(this,L,Me);if(v(this,M,n||Object.create(null)),v(this,ce,[]),e&&t){const r=Object.create(null);r[e]={handler:t,possibleKeys:[],score:0},v(this,ce,[r])}v(this,we,[])}insert(e,t,n){v(this,Ae,++Xt(this,Ae)._);let r=this;const s=lo(t),o=[];for(let l=0,u=s.length;l<u;l++){const f=s[l],d=s[l+1],h=mn(f,d),g=Array.isArray(h)?h[0]:f;if(Object.keys(c(r,M)).includes(g)){r=c(r,M)[g];const y=mn(f,d);y&&o.push(y[1]);continue}c(r,M)[g]=new mr,h&&(c(r,we).push(h),o.push(h[1])),r=c(r,M)[g]}const i=Object.create(null),a={handler:n,possibleKeys:o.filter((l,u,f)=>f.indexOf(l)===u),score:c(this,Ae)};return i[e]=a,c(r,ce).push(i),r}search(e,t){var a;const n=[];v(this,L,Me);let s=[this];const o=Xn(t),i=[];for(let l=0,u=o.length;l<u;l++){const f=o[l],d=l===u-1,h=[];for(let g=0,y=s.length;g<y;g++){const m=s[g],b=c(m,M)[f];b&&(v(b,L,c(m,L)),d?(c(b,M)["*"]&&n.push(...C(this,te,ge).call(this,c(b,M)["*"],e,c(m,L))),n.push(...C(this,te,ge).call(this,b,e,c(m,L)))):h.push(b));for(let w=0,E=c(m,we).length;w<E;w++){const S=c(m,we)[w],R=c(m,L)===Me?{}:{...c(m,L)};if(S==="*"){const A=c(m,M)["*"];A&&(n.push(...C(this,te,ge).call(this,A,e,c(m,L))),v(A,L,R),h.push(A));continue}if(f==="")continue;const[P,V,Q]=S,H=c(m,M)[P],yt=o.slice(l).join("/");if(Q instanceof RegExp){const A=Q.exec(yt);if(A){if(R[V]=A[0],n.push(...C(this,te,ge).call(this,H,e,c(m,L),R)),Object.keys(c(H,M)).length){v(H,L,R);const N=((a=A[0].match(/\//))==null?void 0:a.length)??0;(i[N]||(i[N]=[])).push(H)}continue}}(Q===!0||Q.test(f))&&(R[V]=f,d?(n.push(...C(this,te,ge).call(this,H,e,R,c(m,L))),c(H,M)["*"]&&n.push(...C(this,te,ge).call(this,c(H,M)["*"],e,R,c(m,L)))):(v(H,L,R),h.push(H)))}}s=h.concat(i.shift()??[])}return n.length>1&&n.sort((l,u)=>l.score-u.score),[n.map(({handler:l,params:u})=>[l,u])]}},ce=new WeakMap,M=new WeakMap,we=new WeakMap,Ae=new WeakMap,L=new WeakMap,te=new WeakSet,ge=function(e,t,n,r){const s=[];for(let o=0,i=c(e,ce).length;o<i;o++){const a=c(e,ce)[o],l=a[t]||a[$],u={};if(l!==void 0&&(l.params=Object.create(null),s.push(l),n!==Me||r&&r!==Me))for(let f=0,d=l.possibleKeys.length;f<d;f++){const h=l.possibleKeys[f],g=u[l.score];l.params[h]=r!=null&&r[h]&&!g?r[h]:n[h]??(r==null?void 0:r[h]),u[l.score]=!0}}return s},Pn),xe,On,Ao=(On=class{constructor(){x(this,"name","TrieRouter");k(this,xe);v(this,xe,new mr)}add(e,t,n){const r=tr(t);if(r){for(let s=0,o=r.length;s<o;s++)c(this,xe).insert(e,r[s],n);return}c(this,xe).insert(e,t,n)}match(e,t){return c(this,xe).search(e,t)}},xe=new WeakMap,On),ht=class extends cr{constructor(e={}){super(e),this.router=e.router??new Oo({routers:[new Po,new Ao]})}},_o=e=>e;const gr=new Pr,yn=e=>(e=e.replace(/\.tsx?$/g,"").replace(/\.mdx?$/g,"").replace(/^\/?index$/,"/").replace(/\/index$/,"").replace(/\[\.{3}.+\]/,"*").replace(/\((.+?)\)/g,"").replace(/\[(.+?)\]/g,":$1").replace(/\/\//g,"/"),/^\//.test(e)?e:"/"+e),jt=e=>{const t={};for(const[n,r]of Object.entries(e)){const s=n.split("/"),o=s.pop(),i=s.join("/");t[i]||(t[i]={}),o&&(t[i][o]=r)}for(const[n,r]of Object.entries(t)){const s=Object.entries(r).sort(([o],[i])=>o[0]==="["&&i[0]!=="["?1:o[0]!=="["&&i[0]==="["?-1:o.localeCompare(i));t[n]=Object.fromEntries(s)}return t},jo=e=>Object.keys(e).sort((n,r)=>{const s=n.split("/").length,o=r.split("/").length;return s-o||r.localeCompare(n)}).map(n=>({[n]:e[n]})),$o=e=>{const t={};for(const r of Object.keys(e)){const s=r.split("/");s.pop();const o=s.join("/");t[o]||(t[o]=[]),t[o].includes(r)||t[o].push(r)}const n=Object.keys(t).sort((r,s)=>s.length-r.length);for(const r of n)for(const s of n)if(s.startsWith(r)&&s!==r){const o=new Set([...t[s],...t[r]]);t[s]=[...o]}return t},vr="_404.tsx",Do="_error.tsx",No=["GET","POST","PUT","DELETE","OPTIONS","PATCH"],Lo=e=>{const t=e.root,n=new RegExp(`^${t}`),r=b=>yn(b.replace(n,"")),s=new ht;s.use(async function(w,E){await gr.run(w,()=>E())});const o=e.NOT_FOUND,i=jt(o),a=e.ERROR,l=jt(a),u=e.RENDERER,f=$o(u),d=e.MIDDLEWARE,h=e.ROUTES,g=jo(jt(h)),y=(b,w)=>{let E=w[b]??[];const S=P=>(E=w[P.join("/")],E||(P.pop(),P.length&&S(P)),E??[]),R=b.split("/");return E=S(R),E.sort((P,V)=>P.split("/").length-V.split("/").length),E},m={};for(const b of g)for(const[w,E]of Object.entries(b)){const S=new ht;let R=!1;const P=Mo(w,i);P&&S.use(async(A,N)=>{if(await N(),A.res.status===404){const de=await P(A),Z=new Response(de.body,{status:404,headers:de.headers});A.res=Z}}),y(w,f).map(A=>{const N=u[A];N[fe]&&(R=!0);const Z=N.default;Z&&S.all("*",Z)});const Q=Object.keys(d).find(A=>{const N=w.replaceAll("[","\\[").replaceAll("]","\\]").replaceAll("(","\\(").replaceAll(")","\\)");return new RegExp(N+"/_middleware.tsx?").test(A)});if(Q){const A=d[Q];A.default&&S.use(...A.default)}for(const[A,N]of Object.entries(E)){const de=N[fe],Z=_o(async function(se,kr){se.set(fe,de?!0:R),await kr()}),re=N.default,he=yn(A);re&&"fetch"in re&&(S.use(Z),S.route(he,re));for(const pe of No){const se=N[pe];se&&(S.on(pe,he,Z),S.on(pe,he,...se))}re&&Array.isArray(re)&&(S.get(he,Z),S.get(he,...re)),typeof re=="function"&&(S.get(he,Z),S.get(he,async pe=>{const se=await re(pe);return se instanceof Response?se:pe.render(se,N)}))}const H=To(w,l);H&&(m[w]=H);for(const[A,N]of Object.entries(m))new RegExp(`^${A}`).test(w)&&N&&S.onError(N);let yt=r(w);s.route(yt,S)}for(const b of g.reverse()){const w=Object.entries(b)[0][0],E=new ht;Io(E,w,i);const S=r(w);s.route(S,E)}return s};function Mo(e,t){for(const[n,r]of Object.entries(t))if(e===n){const s=r[vr];if(s)return s.default}}function Io(e,t,n){for(const[r,s]of Object.entries(n))if(t===r){const o=s[vr];if(o){const i=o.default;o[fe]&&e.use("*",(l,u)=>(l.set(fe,!0),u())),e.get("*",l=>(l.status(404),i(l)))}}}function To(e,t){for(const[n,r]of Object.entries(t))if(e===n){const s=r[Do];if(s){const o=s.default;if(o)return async(a,l)=>{const u=s[fe];return u&&l.set(fe,u),l.status(500),o(a,l)}}}}const Ho=e=>Lo({root:"/app/routes",NOT_FOUND:Object.assign({"/app/routes/_404.tsx":Dr}),ERROR:Object.assign({"/app/routes/_error.tsx":Lr}),RENDERER:Object.assign({"/app/routes/_renderer.tsx":Rs}),MIDDLEWARE:Object.assign({}),ROUTES:Object.assign({"/app/routes/index.tsx":no})}),Bo=({children:e})=>{const t=gr.getStore();if(!t)throw new Error("No context found");return p(je,{children:t.get(fe)&&e})},Fo={"_honox-island-BU0dk8UE.js":{file:"static/honox-island-BU0dk8UE.js",name:"honox-island",imports:["app/client.ts"]},"_index-BJLlL6Rz.js":{file:"static/index-BJLlL6Rz.js",name:"index"},"app/client.ts":{file:"static/client-BJRnq0pz.js",name:"client",src:"app/client.ts",isEntry:!0,dynamicImports:["app/islands/CollapsibleSection.tsx","app/islands/DownloadSection.tsx","app/islands/SectionGroup.tsx","node_modules/honox/dist/client/runtime.js","node_modules/honox/dist/client/runtime.js"]},"app/islands/CollapsibleSection.tsx":{file:"static/CollapsibleSection-CKS7ZjBZ.js",name:"CollapsibleSection",src:"app/islands/CollapsibleSection.tsx",isDynamicEntry:!0,imports:["app/client.ts","_honox-island-BU0dk8UE.js","_index-BJLlL6Rz.js"]},"app/islands/DownloadSection.tsx":{file:"static/DownloadSection-CwOVR2yc.js",name:"DownloadSection",src:"app/islands/DownloadSection.tsx",isDynamicEntry:!0,imports:["app/client.ts","_honox-island-BU0dk8UE.js"]},"app/islands/SectionGroup.tsx":{file:"static/SectionGroup-D-44PkBE.js",name:"SectionGroup",src:"app/islands/SectionGroup.tsx",isDynamicEntry:!0,imports:["app/client.ts","_honox-island-BU0dk8UE.js","_index-BJLlL6Rz.js"]},"app/style.css":{file:"static/style-Dv8O0o5u.css",src:"app/style.css",isEntry:!0},"node_modules/honox/dist/client/runtime.js":{file:"static/runtime-Bcu8k3xu.js",name:"runtime",src:"node_modules/honox/dist/client/runtime.js",isDynamicEntry:!0,imports:["app/client.ts"]}},yr=Object.freeze(Object.defineProperty({__proto__:null,default:Fo},Symbol.toStringTag,{value:"Module"})),br=e=>e.endsWith("/")?e:e+"/",zo=e=>{const t=e.src;if(e.prod??!0){let n=e.manifest;if(!n){const r=Object.assign({"/dist/.vite/manifest.json":yr});for(const[,s]of Object.entries(r))if(s.default){n=s.default;break}}if(n){const r=n[t.replace(/^\//,"")];if(r)return p(Bo,{children:p("script",{type:"module",async:!!e.async,src:`${br("/yutaro_wada_cv/")}${r.file}`,nonce:e.nonce})})}return p(je,{})}else return p("script",{type:"module",async:!!e.async,src:t,nonce:e.nonce})},Wo=e=>{let{href:t,prod:n,manifest:r,...s}=e;if(t)if(n??!0){if(!r){const o=Object.assign({"/dist/.vite/manifest.json":yr});for(const[,i]of Object.entries(o))if(i.default){r=i.default;break}}if(r){const o=r[t.replace(/^\//,"")];if(o)return t.startsWith("/")?p("link",{href:`${br("/yutaro_wada_cv/")}${o.file}`,...s}):p("link",{href:o.file,...s})}return p(je,{})}else return p("link",{href:t,...s});return p("link",{...s})},wr=Ho();jr(wr);const zt=new ht,xr=Object.assign({"/app/server.ts":wr});let Er=!1;for(const[,e]of Object.entries(xr))e&&(zt.all("*",t=>{let n;try{n=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,n)}),zt.notFound(t=>{let n;try{n=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,n)}),Er=!0);if(!Er)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const Sr={},bn=new Set;for(const[e,t]of Object.entries(xr))for(const[n,r]of Object.entries(t))if(n!=="fetch"){if(bn.has(n))throw new Error(`Handler "${n}" is defined in multiple entry files. Please ensure each handler (except fetch) is defined only once.`);bn.add(n),Sr[n]=r}const Qo={...Sr,fetch:zt.fetch};export{Qo as default};
