import{d as B,b as k,aT as b,ai as f,ag as O,u as W,r as m,G,w as T,aU as X,z as Q,h as e,bb as Y,V as N,b1 as Z,bC as I,y as M,x as ee,A as r,I as ae,B as d,bI as ue,bJ as S,bK as te,bL as C,F as ne,bM as le,T as P,aX as se}from"./vendor.js";import{T as re}from"./Trash.js";import{H as A}from"./rounded-button.js";import{R as p,u as ie,d as oe,a as ce,I as de,B as D,b as U,U as pe}from"./index.js";import{T as ve}from"./index3.js";import{u as me}from"./use-table.js";const xe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},he=f("path",{fill:"none",stroke:"currentColor","stroke-linecap":"square","stroke-miterlimit":"10","stroke-width":"44",d:"M416 128L192 384l-96-96"},null,-1);var ge=B({name:"CheckmarkSharp",render:function(x,n){return k(),b("svg",xe,[he])}});const Be={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},fe=f("path",{d:"M400 145.49L366.51 112L256 222.51L145.49 112L112 145.49L222.51 256L112 366.51L145.49 400L256 289.49L366.51 400L400 366.51L289.49 256L400 145.49z",fill:"currentColor"},null,-1);var Fe=B({name:"CloseSharp",render:function(x,n){return k(),b("svg",Be,[fe])}});const ye={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},we=f("g",{fill:"none"},[f("path",{d:"M17.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11zM12 2c5.524 0 10.002 4.478 10.002 10.002c0 .263-.01.524-.03.782a6.507 6.507 0 0 0-1.475-1.052a8.501 8.501 0 1 0-8.765 8.767a6.5 6.5 0 0 0 1.05 1.474c-.257.02-.518.03-.782.03c-5.524 0-10.002-4.478-10.002-10.001C1.998 6.477 6.476 1.999 12 1.999zm5.5 12l-.09.008a.5.5 0 0 0-.402.402L17 14.5V17L14.498 17l-.09.008a.5.5 0 0 0-.402.402l-.008.09l.008.09a.5.5 0 0 0 .402.402l.09.008H17v2.503l.008.09a.5.5 0 0 0 .402.402l.09.008l.09-.008a.5.5 0 0 0 .402-.402l.008-.09V18l2.504.001l.09-.008a.5.5 0 0 0 .402-.402l.008-.09l-.008-.09a.5.5 0 0 0-.402-.402l-.09-.008H18v-2.5l-.008-.09a.5.5 0 0 0-.402-.403L17.5 14zm-9.038.785a4.494 4.494 0 0 0 2.63 1.626a6.449 6.449 0 0 0-.079 1.51a5.983 5.983 0 0 1-3.73-2.208a.75.75 0 0 1 1.179-.928zM9 8.75a1.25 1.25 0 1 1 0 2.499A1.25 1.25 0 0 1 9 8.75zm6 0a1.25 1.25 0 1 1 0 2.499a1.25 1.25 0 0 1 0-2.499z",fill:"currentColor"})],-1);var Ee=B({name:"EmojiAdd24Regular",render:function(x,n){return k(),b("svg",ye,[we])}});const ke=["(\u0E51\u2022\u0300\u3142\u2022\u0301)\u0648\u2727","(\xB0\u30FC\xB0\u3003)","o(\uFFE3\u30D8\uFFE3o\uFF03)","(\u0E51\xAF\u25E1\xAF\u0E51)","( \u2022\u0300 .\u032B \u2022\u0301 )\u2727","(\u3064\u0434\u2282)","(o\xB4\u03C9`o)","(\u2022\u0C6A\u2022 )","(>\u25BD<)","(\u0E51\u2022\u0300\u3142\u2022\u0301) \u2727","\u10DA(\u2579\u25E1\u2579\u10DA)","_(:\u0437\u300D\u2220)_","\u053E\u2038\u053E"," \u0295 \u2022\u0300 o \u2022\u0301 \u0294"," (\u2449\uFF65\u0306\u2313\uFF65\u0306\u2449)"," \u266B.(\u25D5\u2220\u25D5).\u266B"," | \u2022\u0301 \u25BE \u2022\u0300 |"," \u3033 \xB0 \u25BE \xB0 \u3035"," | \u2022\u0301 \u25BE \u2022\u0300 |"," \u22CB\u254F \u275B \u25E1 \u275B \u254F\u22CC"," (\u30FB\u2200\u30FB)"," (^\u30FB\u03C9\u30FB^ )","(\xB4\uFF65\u03C9\uFF65`)  ","(\u0E51\xB4\u3142`\u0E51) ","(\u0E51\u02D8 \u2083\u02D8\u0E51) ","(\u25CF\u2019\u03C9`\u25CF\uFF09","(\xB4\uFF65\u03C9\uFF65`)  "];var F;(function(u){u[u.Unread=0]="Unread",u[u.Read=1]="Read",u[u.Junk=2]="Junk"})(F||(F={}));var j;(function(u){u[u.Pending=0]="Pending",u[u.Marked=1]="Marked",u[u.Trash=2]="Trash"})(j||(j={}));const ze=B(()=>{const u=O(),x=W(),n=m(+u.query.state),{data:q,checkedRowKeys:i,fetchDataFn:V,pager:$,loading:_}=me((a,t)=>async(s=u.query.page||1,E=10,g=u.query.state)=>{const L=await p.api.comments.get({params:{page:s,size:E,state:g|0}});a.value=L.data,t.value=L.pagination}),y=G(),v=m(!1),l=m(null),o=m(""),w=m(),R=async()=>{!l.value||(await p.api.comments.master.reply(l.value.id).post({data:{text:o.value}}),v.value=!1,l.value=null,y.success("\u56DE\u590D\u6210\u529F\u5566~"),o.value="",await c())},c=V;T(()=>u.query.page,async a=>{await c(a)},{immediate:!0}),T(()=>u.query.state,async a=>{await c()});async function h(a,t){Array.isArray(a)?a.map(async s=>{await p.api.comments(s).patch({data:{state:t}})}):await p.api.comments(a).patch({data:{state:t}}),y.success("\u64CD\u4F5C\u5B8C\u6210"),await c()}async function z(a){if(Array.isArray(a))try{await Promise.all(a.map(t=>p.api.comments(t).delete({errorHandler:s=>{}})))}catch{}else await p.api.comments(a).delete();await c(),y.success("\u5220\u9664\u6210\u529F")}const H=X([{title:"",key:"avatar",width:60,render(a){return e(le,{circle:!0,src:a.avatar})}},{title:"\u4F5C\u8005",key:"author",width:200,render(a,t){return e(d,{vertical:!0,size:2},e("a",{href:a.url||"#",target:"_blank",rel:"noreferrer"},a.author),e("a",{href:"mailto:"+a.mail||"",target:"_blank"},a.mail),e("div",null,e(de,{ip:a.ip,trigger:"hover",triggerEl:e(P,{depth:"3",class:"select-all"},a.ip)})))}},{title:"\u5185\u5BB9",key:"text",render(a){const t=(()=>{switch(a.refType){case"Post":return D+"/posts/"+a.ref.slug;case"Note":return D+"/notes/"+a.ref.nid;case"Page":return D+"/"+a.ref.slug}})();return e(d,{vertical:!0,size:2},e(d,{size:5},e("span",null,U(a.created)),e("span",null,"\u4E8E"),e("a",{href:t,target:"_blank"},a.ref.title)),e("p",null,a.text),a.parent&&e("blockquote",{class:"border-l-[3px] border-solid border-primary-default pl-[12px] my-2 ml-4"},e(d,{size:2,align:"center"},e(P,{depth:"2"},a.parent.author,"\xA0\u5728\xA0",U(a.parent.created),"\xA0\u8BF4:\xA0",a.parent.text))),!_.value&&e("div",{class:"space-x-3"},n.value!==1&&e(r,{text:!0,size:"tiny",type:"success",onClick:()=>h(a.id,1)},"\u5DF2\u8BFB"),n.value!==2&&e(r,{text:!0,size:"tiny",type:"warning",onClick:()=>h(a.id,2)},"\u5783\u573E"),n.value!==2&&e(r,{text:!0,size:"tiny",type:"info",onClick:s=>{l.value=a,v.value=!0}},"\u56DE\u590D"),e(se,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:()=>{z(a.id)}},{trigger:()=>e(r,{text:!0,size:"tiny",type:"error"},"\u5220\u9664"),default:()=>e("span",{style:{maxWidth:"12rem"}},"\u786E\u5B9A\u8981\u5220\u9664 ",a.title," ?")}))," ")}}]),J=Q(),{viewport:K}=ie(pe);return()=>e(ce,{actionsElement:e(ne,null,n.value!==1&&e(A,{name:"\u5DF2\u8BFB",icon:e(ge,null),variant:"success",onClick:()=>{h(i.value,F.Read),i.value.length=0}}),n.value!==2&&e(A,{name:"\u6807\u8BB0\u4E3A\u5783\u573E",icon:e(re,null),variant:"warning",onClick:()=>{h(i.value,F.Junk),i.value.length=0}}),e(A,{name:"\u5220\u9664",icon:e(Fe,null),variant:"error",onClick:()=>{J.warning({title:"\u8B66\u544A",content:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u591A\u6761\u8BC4\u8BBA\uFF1F",negativeText:"\u786E\u5B9A",positiveText:"\u4E0D\u786E\u5B9A",onNegativeClick:async()=>{await z(i.value),i.value.length=0}})}}))},e(te,{size:"medium",value:n.value,onUpdateValue:a=>{x.replace({name:oe.Comment,query:{state:a}}).then(()=>{n.value=a})}},e(C,{name:0,tab:"\u672A\u8BFB"},e("div",{class:""})),e(C,{name:1,tab:"\u5DF2\u8BFB"},e("div",{class:""})),e(C,{name:2,tab:"\u5783\u573E"},e("div",{class:""}))),e(ve,{maxWidth:600,data:q,loading:_.value,onFetchData:c,pager:$,onUpdateCheckedRowKeys:a=>{i.value=a},columns:[{type:"selection",options:["none","all"],width:30},...H]}),e(Y,{show:!!v.value,onUpdateShow:a=>{a||(v.value=a)}},l.value&&e(N,{style:"width: 500px;max-width: 90vw",headerStyle:{textAlign:"center"},title:"\u56DE\u590D: "+l.value.author},e(Z,{onSubmit:R},e(I,{label:l.value.author+" \u8BF4:"},e(M,{disabled:!0,value:l.value.text,type:"textarea",autosize:{minRows:4,maxRows:10}})),e(I,{label:"\u56DE\u590D\u5185\u5BB9"},e(M,{ref:w,value:o.value,type:"textarea",onInput:a=>o.value=a,autosize:{minRows:4,maxRows:10}})),e("div",{class:"flex justify-between"},e(ee,{trigger:"click",placement:K.value.mobile?"top-end":"left"},{trigger(){return e(r,{text:!0,class:"text-[20px]"},e(ae,null,e(Ee,null)))},default(){return e(N,{style:"max-width: 300px",bordered:!1},e(d,{align:"center",class:"!justify-between"},ke.map(a=>e(r,{text:!0,key:a,type:"primary",onClick:()=>{if(!w.value)return;const t=ue(w.value).textareaElRef;t.focus(),S(()=>{const s=t.selectionStart,E=t.selectionEnd;t.value=t.value.substring(0,s)+` ${a} `+t.value.substring(E,t.value.length),o.value=t.value,S(()=>{const g=s+a.length+2;t.selectionStart=g,t.selectionEnd=g,t.focus()})})}},a))))}}),e(d,{size:12,align:"center",inline:!0},e(r,{type:"success",onClick:R,round:!0},"\u786E\u5B9A"),e(r,{onClick:()=>{o.value="",v.value=!1},round:!0},"\u53D6\u6D88")))))))});export{ze as default};