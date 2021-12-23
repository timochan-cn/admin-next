import{u as p,_ as C,U as y}from"./index.js";import{d as E,r as S,o as _,b5 as w,w as b,h,s as L}from"./vendor.js";import{C as D}from"./index6.js";import{e as R,u as k,s as A}from"./props.js";const N=E({props:{innerRef:{type:Object},...R},setup(a){const i=S();let r;const{isDark:o}=p(y);_(async()=>{!i.value||(r=await V(i.value,a.text,o),["onKeyDown","onDidPaste","onDidBlurEditorText"].forEach(e=>{r[e](()=>{const t=r.getValue();a.onChange(t)})}),a.innerRef&&(a.innerRef.value=r))});let n=w(a.text);return b(()=>a.text,e=>{!n&&e&&(n=e),r&&e!=r.getValue()&&r.setValue(e)}),k(a.unSaveConfirm,()=>n===r.getValue()),()=>h("div",{class:L("editor relative overflow-hidden",A.editor),ref:i},h(D,null))}}),O=N,V=async(a,i,r)=>{const{editor:o,KeyCode:n,KeyMod:e}=await C(()=>import("./editor.main.js").then(function(s){return s.e}),["editor.main.js","assets/editor.main.90c5c042.css"]),t=o.create(a,{value:i,language:"markdown",automaticLayout:!0,wrappingStrategy:"advanced",minimap:{enabled:!1},theme:r.value?"vs-dark":"vs",wordWrap:"on",cursorStyle:"line-thin",formatOnType:!0,quickSuggestions:{strings:!1,other:!1,comments:!1},tabCompletion:"off",parameterHints:{enabled:!1},suggestOnTriggerCharacters:!1,acceptSuggestionOnEnter:"off",wordBasedSuggestions:!1});b(()=>r.value,s=>{t.updateOptions({theme:s?"vs-dark":"vs"})}),t.addAction({id:"bold",label:"bold",keybindings:[e.CtrlCmd|n.KeyB],run:s=>(c(t,"**"),null)}),t.addAction({id:"em",label:"em",keybindings:[e.CtrlCmd|n.KeyI],run:s=>(c(t,"*"),null)}),t.addAction({id:"null",label:"null",keybindings:[e.CtrlCmd|n.KeyS,e.Shift|e.Alt|n.KeyF],run:s=>null}),t.addAction({id:"del",label:"del",keybindings:[e.Alt|n.KeyD],run:s=>(c(t,"~~"),null)});const v=[,n.Digit1,n.Digit2,n.Digit3,n.Digit4,n.Digit5];return Array.from({length:5}).fill(null).forEach((s,x)=>{const l=x+1;t.addAction({id:"head-"+l,label:"heading",keybindings:[e.CtrlCmd|v[l]],run:u=>{const g=u.getSelection();if(!g)return null;const d=g.startLineNumber,m={startLineNumber:d,endLineNumber:d,startColumn:0,endColumn:l+2},f=u.getModel()?.getValueInRange(m);if(f&&f=="#".repeat(l)+" "){u.executeEdits("",[{range:m,text:""}]);return}u.executeEdits("",[{range:{startLineNumber:d,endLineNumber:d,startColumn:0,endColumn:0},text:`${"#".repeat(l)} `}])}})}),t},c=async(a,i)=>{const{Selection:r}=await C(()=>import("./editor.main.js").then(function(t){return t.e}),["editor.main.js","assets/editor.main.90c5c042.css"]),o=a;if(!o)return;const n=i.length,e=o.getSelection();if(!!e)if(e.startLineNumber==e.endLineNumber&&e.startColumn==e.endColumn){o.executeEdits("",[{range:e,text:i.repeat(2)}]);const t=new r(e.startLineNumber,e.startColumn+n,e.startLineNumber,e.startColumn+n);o.setSelection(t)}else{const t=o.getModel()?.getValueInRange(e);if(!t)return;if(t.startsWith(i)&&t.endsWith(i)){o.executeEdits("",[{range:e,text:`${t.slice(n,t.length-n)}`}]);return}o.executeEdits("",[{range:e,text:`${i}${t}${i}`}])}};export{O as MonacoEditor};
