import{d as t,h as e,A as n,aV as a,x as i,I as o}from"./vendor.js";const l=t({props:{variant:{type:String,default:"primary"},onClick:{type:Function},disabled:{type:Boolean}},setup:(t,{slots:a})=>()=>e(n,{type:t.variant,circle:!0,onClick:t.onClick,disabled:t.disabled},a)}),r=t({props:{to:{type:[Object,String]},variant:{type:String},icon:{type:Object,required:!0},onClick:{type:Function},disabled:{type:Boolean},name:{type:String}},setup(t){const n=()=>e(l,{variant:t.variant,class:"shadow",onClick:t.onClick,disabled:t.disabled},e(o,{size:"16"},t.icon)),r=()=>t.name?e(i,{trigger:"hover",placement:"bottom"},{trigger:()=>e(n,null),default:()=>t.name}):e(n,null);return()=>t.to?e(a,{to:t.to},e(r,null)):e(r,null)}});export{r as H};