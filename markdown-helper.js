import{a as N,R as B}from"./index.js";import{r as P}from"./index10.js";import{d as S,r as v,G as T,w as R,h as t,b1 as L,b2 as E,b4 as y,A as b,J as D,a_ as U,B as Y,bJ as j,b as H,bj as I,T as V,b5 as _}from"./vendor.js";class G{constructor(s){this.strList=s}parse(s){const l=s,i=/-{3,}\n(.*?)-{3,}\n*(.*)$/gms.exec(l);if(!i)return{text:l};const c=i[1],h=i.pop(),x=c.split(`
`),f=[],g=[];let p=null;const w=x.reduce((e,d)=>{const u=d.trim().split(":").filter(a=>a.length),n=u.length>=2?[u[0],u.slice(1).filter(a=>a.length).join(":").trim()]:[u[0]];if(n.length===2){const[a,o]=n;["date","updated"].includes(a)?e[a]=new Date(o.trim()).toISOString():["categories:","tags:"].includes(a)?p=a==="categories:"?"cate":"tag":e[a]=o.trim()}else{const a=d.trim().replace(/^\s*-\s*/,"");if(["","tags:","categories:"].includes(a))return p=a==="categories:"?"cate":"tag",e;p==="tag"?f.push(a):g.push(a)}return e},{});return w.categories=g,w.tags=f,{meta:w,text:h}}start(){const s=this.strList,l=[];for(const i of s)l.push(this.parse(i));return l}}var F;(function(r){r.Post="post",r.Note="note"})(F||(F={}));const J=[{value:F.Post,label:"\u535A\u6587"},{label:"\u65E5\u8BB0",value:F.Note}];var z=S(()=>{const r=v(F.Post),s=v([]),l=v([]);function i(e){return new G(e).start().map((u,n)=>{const o=s.value[n].file.name.replace(/\.md$/,"");return u.meta?u.meta.slug=u.meta.slug??o:u.meta={title:o,slug:o},u.meta?.date||(u.meta.date=new Date().toISOString()),u})}const c=T();async function h(e){if(e?.preventDefault(),e?.stopPropagation(),!s.value.length)throw new ReferenceError("fileList is empty");const d=[];for await(const n of s.value){const a=await Promise.resolve(new Promise((o,A)=>{const m=n.file;if(!m){c.error("\u6587\u4EF6\u4E0D\u5B58\u5728"),A("File is empty");return}const k=m.name.split(".").pop();if(m.type&&m.type!=="text/markdown"||!["md","markdown"].includes(k)){c.error("\u53EA\u80FD\u89E3\u6790 markdown \u6587\u4EF6, \u4F46\u662F\u5F97\u5230\u4E86 "+m.type),A("File must be markdown. got type: "+m.type+", got ext: "+k);return}const C=new FileReader;C.onload=M=>{o(M.target?.result||"")},C.readAsText(m)}));console.log(a),d.push(a)}const u=i(d);c.success("\u89E3\u6790\u5B8C\u6210, \u7ED3\u679C\u67E5\u770B console \u54E6"),l.value=u.map((n,a)=>({...n,filename:s.value[a].file?.name??""})),console.log(_(l))}async function x(e){if(e.stopPropagation(),e.preventDefault(),!l.value.length)return c.error("\u8BF7\u5148\u89E3\u6790!!");await B.api.markdown.import.post({data:{type:r.value,data:l.value}}),c.success("\u4E0A\u4F20\u6210\u529F!"),s.value=[]}const f=v(!0),g=v(!1),p=v(!1);async function w(){const e=await B.api.markdown.export.get({params:{slug:p.value,yaml:f.value,show_title:g.value},responseType:"blob"});P(e,"markdown.zip")}return R(()=>s.value,e=>{e.length==0?l.value=[]:h()}),()=>t(N,null,t(D,null,"\u4ECE MarkDown \u5BFC\u5165\u6570\u636E"),t(L,{labelAlign:"right",labelPlacement:"left",labelWidth:150,class:"max-w-[300px]"},t(E,{label:"\u5BFC\u5165\u5230:"},t(U,{options:J,value:r.value,onUpdateValue:e=>void(r.value=e)})),t(E,{label:"\u51C6\u5907\u597D\u4E86\u5417."},t(Y,{vertical:!0},t(j,{multiple:!0,accept:".md,.markdown",onChange:H(e=>{s.value=e.fileList},250),onRemove:e=>{const u=e.file.name,n=l.value.findIndex(a=>a.filename===u);n!=-1&&l.value.splice(n,1)}},t(I,null,t(b,{round:!0},"\u5148\u4E0A\u4F20"),t(b,{onClick:h,disabled:!s.value.length},"\u518D\u89E3\u6790"),t(b,{onClick:x,round:!0,disabled:!l.value.length},"\u6700\u540E\u5BFC\u5165"))),t(V,{depth:2,class:"!text-sm"},"\u53EA\u80FD\u4E0A\u4F20markdown\u6587\u4EF6")))),t(D,null,"\u5BFC\u51FA\u6570\u636E\u5230 Markdown (Hexo YAML Format)"),t(L,{labelAlign:"right",labelPlacement:"left",labelWidth:180,class:"max-w-[400px]"},t(E,{label:"\u662F\u5426\u5305\u62EC yaml header"},t(y,{value:f.value,onUpdateValue:e=>void(f.value=e)})),t(E,{label:"\u662F\u5426\u5728\u7B2C\u4E00\u884C\u663E\u793A\u6587\u7AE0\u6807\u9898"},t(y,{value:g.value,onUpdateValue:e=>void(g.value=e)})),t(E,{label:"\u6839\u636E slug \u751F\u6210\u6587\u4EF6\u540D"},t(y,{value:p.value,onUpdateValue:e=>void(p.value=e)})),t("div",{class:"text-right w-full"},t(b,{type:"primary",onClick:w},"\u5BFC\u51FA"))))});export{z as default};
