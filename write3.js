import{T as f,E as h,M as b,P as y,S as E}from"./parse-button.js";import{T as w}from"./TelegramPlane.js";import{d as C,af as j,aV as F,f as P,o as x,r as A,L as R,g as I,h as a,b0 as T,ba as D,F as r,I as S,b4 as M,b3 as B}from"./vendor.js";import{H}from"./rounded-button.js";import{U as i}from"./underline-input.js";import{R as n,W as L,a as N,d as U}from"./index.js";import{u as W}from"./use-parse-payload.js";import"./use-react.js";import"./props.js";import"./js-yaml.js";const O=C(()=>{const d=j(),p=()=>({text:"",title:"",order:0,slug:"",subtitle:"",allowComment:!0,id:void 0}),c=e=>W(t)(e),t=F(p()),s=P(()=>d.query.id);x(async()=>{const e=s.value;if(e&&typeof e=="string"){const v=(await n.api.pages(e).get({})).data;c(v)}});const u=A(!1),l=R(),m=I(),g=async()=>{const e=()=>{try{if(!t.title||t.title.trim().length==0)throw"\u6807\u9898\u4E3A\u7A7A";if(!t.slug)throw"\u8DEF\u5F84\u4E3A\u7A7A";return{...B(t),title:t.title.trim(),slug:t.slug.trim()}}catch(o){throw l.error(o),o}};if(s.value){if(!M(s.value))return;const o=s.value;await n.api.pages(o).put({data:e()}),l.success("\u4FEE\u6539\u6210\u529F")}else await n.api.pages.post({data:e()}),l.success("\u53D1\u5E03\u6210\u529F");m.push({name:U.ListPage,hash:"|publish"})};return()=>a(N,{actionsElement:a(r,null,a(y,{data:t,onHandleYamlParsedMeta:e=>{t.title=e.title??t.title,t.slug=e.slug??t.slug,t.subtitle=e.subtitle??t.subtitle}}),a(H,{icon:a(w,null),onClick:g})),footerButtonElement:a(r,null,a("button",{onClick:()=>{u.value=!0}},a(S,null,a(E,null))))},a(b,{class:"mt-3 relative z-10",label:"\u4E0E\u4F60\u6709\u4E2A\u597D\u5FC3\u60C5~",value:t.title,onChange:e=>{t.title=e}}),a("div",{class:"text-gray-700 pt-3"},a(i,{value:t.subtitle,onChange:e=>void(t.subtitle=e)})),a("div",{class:"text-gray-500 py-3"},a("label",null,`${L}/`),a(i,{value:t.slug,onChange:e=>void(t.slug=e)})),a(h,{loading:!!(s.value&&typeof t.id=="undefined"),onChange:e=>{t.text=e},text:t.text}),a(f,{onUpdateShow:e=>{u.value=e},data:t,show:u.value}),a(T,{label:"\u9875\u9762\u987A\u5E8F"},a(D,{placeholder:"",value:t.order,onChange:e=>void(t.order=e??0)})))});export{O as default};
