import{E as a,M as e,P as l,S as t}from"./parse-button.js";import{T as s}from"./TelegramPlane.js";import{d as u,af as n,o,aT as i,l as r,r as m,G as p,u as d,h as c,a_ as v,a$ as g,b0 as y,b1 as b,aZ as h,b2 as f,y as w,b3 as x,F as j,I as U,b4 as C,b5 as I}from"./vendor.js";import{H as V}from"./rounded-button.js";import{U as k}from"./underline-input.js";import{u as P,R as T,B as $,a as q,C as E,d as S}from"./index.js";import"./index4.js";import"./props.js";const W=u((()=>{const W=n(),z=P(E);o((async()=>{await z.fetch()}));const A=i({categoryId:null!=(G=null==(F=null==(B=z.data)?void 0:B.value)?void 0:F[0].id)?G:"",slug:"",text:"",title:"",copyright:!0,tags:[],hide:!1,summary:""});var B,F,G;const H=r((()=>W.query.id)),M=r((()=>{var a,e;return z.get(A.categoryId)||(null==(e=null==(a=z.data)?void 0:a.value)?void 0:e[0])||{}}));o((async()=>{const a=H.value;if(a&&"string"==typeof a){(a=>{const e=C(A),l=Object.keys(e);for(const t in a)l.includes(t)&&(A[t]=a[t])})((await T.api.posts(a).get()).data)}}));const O=m(!1),R=p(),Z=d(),_=async()=>{if(H.value){if(!I(H.value))return;const a=H.value;await T.api.posts(a).put({data:{...C(A),summary:A.summary&&""!=A.summary.trim()?A.summary.trim():null}}),R.success("修改成功")}else await T.api.posts.post({data:{...C(A),summary:""==A.summary.trim()?null:A.summary.trim()}}),R.success("发布成功");Z.push({name:S.ViewPost,hash:"|publish"})};return()=>{var n;return c(q,{title:H.value?"修改文章":"撰写新文章",actionsElement:c(j,null,c(l,{data:A}),c(V,{icon:c(s,null),onClick:_})),footerButtonElement:c(j,null,c("button",{onClick:()=>{O.value=!0}},c(U,null,c(t,null))))},c(e,{class:"mt-3 relative z-10",label:"想想取个什么标题好呢~",value:A.title,onChange:a=>{A.title=a}}),c("div",{class:"text-gray-500 py-3"},c("label",{class:"prefix"},`${$}/${M.value.slug}/`),c(k,{class:"ml-2",value:A.slug,onChange:a=>{A.slug=a}})),c(a,{loading:!(!H.value||A.title),onChange:a=>{A.text=a},text:A.text}),c(v,{show:O.value,width:450,style:{maxWidth:"90vw"},placement:"right",onUpdateShow:a=>{O.value=a}},c(g,{title:"文章设定"},c(y,null,c(b,{label:"分类",required:!0,path:"category"},c(h,{placeholder:"请选择",value:A.categoryId,onUpdateValue:a=>{A.categoryId=a},options:(null==(n=z.data.value)?void 0:n.map((a=>({label:a.name,value:a.id,key:a.id}))))||[]})),c(b,{label:"标签"},c(f,{value:A.tags,onUpdateValue:a=>{A.tags.length=0,A.tags.push(...a)}},{input({submit:a}){const e=u({setup(){const e=m([]),l=m(!1),t=m(""),s=m();return o((async()=>{l.value=!0,s.value&&s.value.$el.querySelector("input").focus();const{data:a}=await T.api.categories.get({params:{type:"Tag"}});e.value=a.map((a=>({label:a.name+" ("+a.count+")",value:a.name,key:a.name}))),l.value=!1})),()=>c(h,{ref:s,size:"small",value:t.value,clearable:!0,loading:l.value,filterable:!0,tag:!0,options:e.value,onUpdateValue:e=>{t.value=e,a(e)}})}});return c(e,null)}})),c(b,{label:"概要"},c(w,{placeholder:"文章概要",value:A.summary,onInput:a=>{A.summary=a}})),c(b,{label:"隐藏",labelWidth:100,labelAlign:"right",labelPlacement:"left"},c(x,{value:A.hide,onUpdateValue:a=>{A.hide=a}})),c(b,{label:"版权注明",labelWidth:100,labelAlign:"right",labelPlacement:"left"},c(x,{value:A.copyright,onUpdateValue:a=>{A.copyright=a}}))))))}}));export{W as default};