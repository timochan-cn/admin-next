function e(e,t){return void 0===t&&(t="\\b"),new RegExp("^(("+e.join(")|(")+"))"+t)}var t=e(["[<>]:","[<>=]=","<<=?",">>>?=?","=>","->","\\/\\/","[\\\\%*+\\-<>!=\\/^|&\\u00F7\\u22BB]=?","\\?","\\$","~",":","\\u00D7","\\u2208","\\u2209","\\u220B","\\u220C","\\u2218","\\u221A","\\u221B","\\u2229","\\u222A","\\u2260","\\u2264","\\u2265","\\u2286","\\u2288","\\u228A","\\u22C5","\\b(in|isa)\\b(?!.?\\()"],""),n=/^[;,()[\]{}]/,r=/^[_A-Za-z\u00A1-\u2217\u2219-\uFFFF][\w\u00A1-\u2217\u2219-\uFFFF]*!*/,a=e(["\\\\[0-7]{1,3}","\\\\x[A-Fa-f0-9]{1,2}","\\\\[abefnrtv0%?'\"\\\\]","([^\\u0027\\u005C\\uD800-\\uDFFF]|[\\uD800-\\uDFFF][\\uDC00-\\uDFFF])"],"'"),i=["if","else","elseif","while","for","begin","let","end","do","try","catch","finally","return","break","continue","global","local","const","export","import","importall","using","function","where","macro","module","baremodule","struct","type","mutable","immutable","quote","typealias","abstract","primitive","bitstype"],s=["true","false","nothing","NaN","Inf"],o=e(["begin","function","type","struct","immutable","let","macro","for","while","quote","if","else","elseif","try","finally","catch","do"]),u=e(["end","else","elseif","catch","finally"]),c=e(i),l=e(s),m=/^@[_A-Za-z][\w]*/,f=/^:[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/,p=/^(`|([_A-Za-z\u00A1-\uFFFF]*"("")?))/;function h(e){return e.nestedArrays>0}function d(e,t){return void 0===t&&(t=0),e.scopes.length<=t?null:e.scopes[e.scopes.length-(t+1)]}function k(e,a){if(e.match("#=",!1))return a.tokenize=F,a.tokenize(e,a);var i=a.leavingExpr;if(e.sol()&&(i=!1),a.leavingExpr=!1,i&&e.match(/^'+/))return"operator";if(e.match(/\.{4,}/))return"error";if(e.match(/\.{1,3}/))return"operator";if(e.eatSpace())return null;var s,v=e.peek();if("#"===v)return e.skipToEnd(),"comment";if("["===v&&(a.scopes.push("["),a.nestedArrays++),"("===v&&(a.scopes.push("("),a.nestedGenerators++),h(a)&&"]"===v){for(;a.scopes.length&&"["!==d(a);)a.scopes.pop();a.scopes.pop(),a.nestedArrays--,a.leavingExpr=!0}if(function(e){return e.nestedGenerators>0}(a)&&")"===v){for(;a.scopes.length&&"("!==d(a);)a.scopes.pop();a.scopes.pop(),a.nestedGenerators--,a.leavingExpr=!0}if(h(a)){if("end"==a.lastToken&&e.match(":"))return"operator";if(e.match("end"))return"number"}if((s=e.match(o,!1))&&a.scopes.push(s[0]),e.match(u,!1)&&a.scopes.pop(),e.match(/^::(?![:\$])/))return a.tokenize=b,a.tokenize(e,a);if(!i&&e.match(f)||e.match(/:([<>]:|<<=?|>>>?=?|->|\/\/|\.{2,3}|[\.\\%*+\-<>!\/^|&]=?|[~\?\$])/))return"builtin";if(e.match(t))return"operator";if(e.match(/^\.?\d/,!1)){var x=RegExp(/^im\b/),z=!1;if(e.match(/^0x\.[0-9a-f_]+p[\+\-]?[_\d]+/i)&&(z=!0),e.match(/^0x[0-9a-f_]+/i)&&(z=!0),e.match(/^0b[01_]+/i)&&(z=!0),e.match(/^0o[0-7_]+/i)&&(z=!0),e.match(/^(?:(?:\d[_\d]*)?\.(?!\.)(?:\d[_\d]*)?|\d[_\d]*\.(?!\.)(?:\d[_\d]*))?([Eef][\+\-]?[_\d]+)?/i)&&(z=!0),e.match(/^\d[_\d]*(e[\+\-]?\d+)?/i)&&(z=!0),z)return e.match(x),a.leavingExpr=!0,"number"}if(e.match("'"))return a.tokenize=g,a.tokenize(e,a);if(e.match(p))return a.tokenize=function(e){'"""'===e.substr(-3)?e='"""':'"'===e.substr(-1)&&(e='"');function t(t,n){if(t.eat("\\"))t.next();else{if(t.match(e))return n.tokenize=k,n.leavingExpr=!0,"string";t.eat(/[`"]/)}return t.eatWhile(/[^\\`"]/),"string"}return t}(e.current()),a.tokenize(e,a);if(e.match(m))return"meta";if(e.match(n))return null;if(e.match(c))return"keyword";if(e.match(l))return"builtin";var A=a.isDefinition||"function"==a.lastToken||"macro"==a.lastToken||"type"==a.lastToken||"struct"==a.lastToken||"immutable"==a.lastToken;return e.match(r)?A?"."===e.peek()?(a.isDefinition=!0,"variable"):(a.isDefinition=!1,"def"):(a.leavingExpr=!0,"variable"):(e.next(),"error")}function b(e,t){return e.match(/.*?(?=[,;{}()=\s]|$)/),e.match("{")?t.nestedParameters++:e.match("}")&&t.nestedParameters>0&&t.nestedParameters--,t.nestedParameters>0?e.match(/.*?(?={|})/)||e.next():0==t.nestedParameters&&(t.tokenize=k),"builtin"}function F(e,t){return e.match("#=")&&t.nestedComments++,e.match(/.*?(?=(#=|=#))/)||e.skipToEnd(),e.match("=#")&&(t.nestedComments--,0==t.nestedComments&&(t.tokenize=k)),"comment"}function g(e,t){var n,r=!1;if(e.match(a))r=!0;else if(n=e.match(/\\u([a-f0-9]{1,4})(?=')/i)){((i=parseInt(n[1],16))<=55295||i>=57344)&&(r=!0,e.next())}else if(n=e.match(/\\U([A-Fa-f0-9]{5,8})(?=')/)){var i;(i=parseInt(n[1],16))<=1114111&&(r=!0,e.next())}return r?(t.leavingExpr=!0,t.tokenize=k,"string"):(e.match(/^[^']+(?=')/)||e.skipToEnd(),e.match("'")&&(t.tokenize=k),"error")}const v={startState:function(){return{tokenize:k,scopes:[],lastToken:null,leavingExpr:!1,isDefinition:!1,nestedArrays:0,nestedComments:0,nestedGenerators:0,nestedParameters:0,firstParenPos:-1}},token:function(e,t){var n=t.tokenize(e,t),r=e.current();return r&&n&&(t.lastToken=r),n},indent:function(e,t,n){var r=0;return("]"===t||")"===t||/^end\b/.test(t)||/^else/.test(t)||/^catch\b/.test(t)||/^elseif\b/.test(t)||/^finally/.test(t))&&(r=-1),(e.scopes.length+r)*n.unit},languageData:{indentOnInput:/^\s*(end|else|catch|finally)\b$/,commentTokens:{line:"#",block:{open:"#=",close:"=#"}},closeBrackets:{brackets:["(","[","{",'"']},autocomplete:i.concat(s)}};export{v as julia};