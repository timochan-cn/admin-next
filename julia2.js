function c(e,n){return typeof n=="undefined"&&(n="\\b"),new RegExp("^(("+e.join(")|(")+"))"+n)}var d="\\\\[0-7]{1,3}",v="\\\\x[A-Fa-f0-9]{1,2}",k=`\\\\[abefnrtv0%?'"\\\\]`,F="([^\\u0027\\u005C\\uD800-\\uDFFF]|[\\uD800-\\uDFFF][\\uDC00-\\uDFFF])",g=c(["[<>]:","[<>=]=","<<=?",">>>?=?","=>","->","\\/\\/","[\\\\%*+\\-<>!=\\/^|&\\u00F7\\u22BB]=?","\\?","\\$","~",":","\\u00D7","\\u2208","\\u2209","\\u220B","\\u220C","\\u2218","\\u221A","\\u221B","\\u2229","\\u222A","\\u2260","\\u2264","\\u2265","\\u2286","\\u2288","\\u228A","\\u22C5","\\b(in|isa)\\b(?!.?\\()"],""),b=/^[;,()[\]{}]/,y=/^[_A-Za-z\u00A1-\u2217\u2219-\uFFFF][\w\u00A1-\u2217\u2219-\uFFFF]*!*/,m=c([d,v,k,F],"'"),x=["begin","function","type","struct","immutable","let","macro","for","while","quote","if","else","elseif","try","finally","catch","do"],z=["end","else","elseif","catch","finally"],l=["if","else","elseif","while","for","begin","let","end","do","try","catch","finally","return","break","continue","global","local","const","export","import","importall","using","function","where","macro","module","baremodule","struct","type","mutable","immutable","quote","typealias","abstract","primitive","bitstype"],t=["true","false","nothing","NaN","Inf"],E=c(x),C=c(z),_=c(l),A=c(t),w=/^@[_A-Za-z][\w]*/,D=/^:[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/,T=/^(`|([_A-Za-z\u00A1-\uFFFF]*"("")?))/;function a(e){return e.nestedArrays>0}function P(e){return e.nestedGenerators>0}function p(e,n){return typeof n=="undefined"&&(n=0),e.scopes.length<=n?null:e.scopes[e.scopes.length-(n+1)]}function f(e,n){if(e.match("#=",!1))return n.tokenize=G,n.tokenize(e,n);var i=n.leavingExpr;if(e.sol()&&(i=!1),n.leavingExpr=!1,i&&e.match(/^'+/))return"operator";if(e.match(/\.{4,}/))return"error";if(e.match(/\.{1,3}/))return"operator";if(e.eatSpace())return null;var r=e.peek();if(r==="#")return e.skipToEnd(),"comment";if(r==="["&&(n.scopes.push("["),n.nestedArrays++),r==="("&&(n.scopes.push("("),n.nestedGenerators++),a(n)&&r==="]"){for(;n.scopes.length&&p(n)!=="[";)n.scopes.pop();n.scopes.pop(),n.nestedArrays--,n.leavingExpr=!0}if(P(n)&&r===")"){for(;n.scopes.length&&p(n)!=="(";)n.scopes.pop();n.scopes.pop(),n.nestedGenerators--,n.leavingExpr=!0}if(a(n)){if(n.lastToken=="end"&&e.match(":"))return"operator";if(e.match("end"))return"number"}var o;if((o=e.match(E,!1))&&n.scopes.push(o[0]),e.match(C,!1)&&n.scopes.pop(),e.match(/^::(?![:\$])/))return n.tokenize=B,n.tokenize(e,n);if(!i&&e.match(D)||e.match(/:([<>]:|<<=?|>>>?=?|->|\/\/|\.{2,3}|[\.\\%*+\-<>!\/^|&]=?|[~\?\$])/))return"builtin";if(e.match(g))return"operator";if(e.match(/^\.?\d/,!1)){var h=RegExp(/^im\b/),u=!1;if(e.match(/^0x\.[0-9a-f_]+p[\+\-]?[_\d]+/i)&&(u=!0),e.match(/^0x[0-9a-f_]+/i)&&(u=!0),e.match(/^0b[01_]+/i)&&(u=!0),e.match(/^0o[0-7_]+/i)&&(u=!0),e.match(/^(?:(?:\d[_\d]*)?\.(?!\.)(?:\d[_\d]*)?|\d[_\d]*\.(?!\.)(?:\d[_\d]*))?([Eef][\+\-]?[_\d]+)?/i)&&(u=!0),e.match(/^\d[_\d]*(e[\+\-]?\d+)?/i)&&(u=!0),u)return e.match(h),n.leavingExpr=!0,"number"}if(e.match("'"))return n.tokenize=S,n.tokenize(e,n);if(e.match(T))return n.tokenize=$(e.current()),n.tokenize(e,n);if(e.match(w))return"meta";if(e.match(b))return null;if(e.match(_))return"keyword";if(e.match(A))return"builtin";var s=n.isDefinition||n.lastToken=="function"||n.lastToken=="macro"||n.lastToken=="type"||n.lastToken=="struct"||n.lastToken=="immutable";return e.match(y)?s?e.peek()==="."?(n.isDefinition=!0,"variable"):(n.isDefinition=!1,"def"):(n.leavingExpr=!0,"variable"):(e.next(),"error")}function B(e,n){return e.match(/.*?(?=[,;{}()=\s]|$)/),e.match("{")?n.nestedParameters++:e.match("}")&&n.nestedParameters>0&&n.nestedParameters--,n.nestedParameters>0?e.match(/.*?(?={|})/)||e.next():n.nestedParameters==0&&(n.tokenize=f),"builtin"}function G(e,n){return e.match("#=")&&n.nestedComments++,e.match(/.*?(?=(#=|=#))/)||e.skipToEnd(),e.match("=#")&&(n.nestedComments--,n.nestedComments==0&&(n.tokenize=f)),"comment"}function S(e,n){var i=!1,r;if(e.match(m))i=!0;else if(r=e.match(/\\u([a-f0-9]{1,4})(?=')/i)){var o=parseInt(r[1],16);(o<=55295||o>=57344)&&(i=!0,e.next())}else if(r=e.match(/\\U([A-Fa-f0-9]{5,8})(?=')/)){var o=parseInt(r[1],16);o<=1114111&&(i=!0,e.next())}return i?(n.leavingExpr=!0,n.tokenize=f,"string"):(e.match(/^[^']+(?=')/)||e.skipToEnd(),e.match("'")&&(n.tokenize=f),"error")}function $(e){e.substr(-3)==='"""'?e='"""':e.substr(-1)==='"'&&(e='"');function n(i,r){if(i.eat("\\"))i.next();else{if(i.match(e))return r.tokenize=f,r.leavingExpr=!0,"string";i.eat(/[`"]/)}return i.eatWhile(/[^\\`"]/),"string"}return n}const I={startState:function(){return{tokenize:f,scopes:[],lastToken:null,leavingExpr:!1,isDefinition:!1,nestedArrays:0,nestedComments:0,nestedGenerators:0,nestedParameters:0,firstParenPos:-1}},token:function(e,n){var i=n.tokenize(e,n),r=e.current();return r&&i&&(n.lastToken=r),i},indent:function(e,n,i){var r=0;return(n==="]"||n===")"||/^end\b/.test(n)||/^else/.test(n)||/^catch\b/.test(n)||/^elseif\b/.test(n)||/^finally/.test(n))&&(r=-1),(e.scopes.length+r)*i.unit},languageData:{indentOnInput:/^\s*(end|else|catch|finally)\b$/,commentTokens:{line:"#",block:{open:"#=",close:"=#"}},closeBrackets:{brackets:["(","[","{",'"']},autocomplete:l.concat(t)}};export{I as julia};
