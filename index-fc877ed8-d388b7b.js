import{u as e,U as a}from"./index-d388b7b.js";import{d as o,l as r,ac as t,r as n,aS as s,w as d,aW as l,h as u,aX as c}from"./vendor-16c66007-d388b7b.js";var i="_table-row_1brqz_3";const p=i,v=o(((o,p)=>{const{data:v,noPagination:h=!1,pager:y,onUpdateCheckedRowKeys:g,onUpdateSorter:m,nTableProps:w,columns:b,onFetchData:K,checkedRowKey:k="id",maxWidth:U=1200}=o,C=r(),O=t(),P=n([]),R=s({sortBy:"",sortOrder:0}),S=n(!0),x=d((()=>v.value),(e=>{S.value=!1,x()}));l(((e,a,o)=>{S.value=!0,o(),S.value=!1}));const W=e(a);return()=>{var e;return u(c,{...w,loading:null!=(e=o.loading)?e:S.value,remote:!0,scrollX:Math.max(W.contentInsetWidth.value,U),pagination:h?void 0:{page:y.value.currentPage,pageSize:y.value.size,pageCount:y.value.totalPage,showQuickJumper:!0,pageSlot:W.viewport.value.mobile?W.contentInsetWidth.value<400?2:3:void 0,onChange:async e=>{C.push({query:{...O.query,page:e},path:O.path})}},bordered:!1,data:v.value,checkedRowKeys:P.value,rowKey:e=>e[k],onUpdateCheckedRowKeys:e=>{P.value=e,null==g||g(e)},rowClassName:()=>i,onUpdateSorter:async e=>{if(!e)return;b.forEach((a=>{"sortOrder"in a&&void 0!==a.sortOrder&&(e&&a.key===e.columnKey?a.sortOrder=e.order:a.sortOrder=!1)}));const{columnKey:a,order:o}=e;R.sortBy=R.sortBy&&R.sortBy==a?"":a,R.sortOrder=o?{descend:-1,ascend:1}[o]:1,null==m||m(R,e),await K()},columns:b})}}));v.props=["data","pager","onUpdateCheckedRowKeys","onUpdateSorter","columns","onFetchData","nTableProps","noPagination","checkedRowKey","maxWidth","loading"];export{v as T,p as t};
//# sourceMappingURL=index-fc877ed8-d388b7b.js.map