var r;function f(e){return new RegExp("^(?:"+e.join("|")+")$","i")}var d=f(["str","lang","langmatches","datatype","bound","sameterm","isiri","isuri","iri","uri","bnode","count","sum","min","max","avg","sample","group_concat","rand","abs","ceil","floor","round","concat","substr","strlen","replace","ucase","lcase","encode_for_uri","contains","strstarts","strends","strbefore","strafter","year","month","day","hours","minutes","seconds","timezone","tz","now","uuid","struuid","md5","sha1","sha256","sha384","sha512","coalesce","if","strlang","strdt","isnumeric","regex","exists","isblank","isliteral","a","bind"]),F=f(["base","prefix","select","distinct","reduced","construct","describe","ask","from","named","where","order","limit","offset","filter","optional","graph","by","asc","desc","as","having","undef","values","group","minus","in","not","service","silent","using","insert","delete","union","true","false","with","data","copy","to","move","add","create","drop","clear","load"]),l=/[*+\-<>=&|\^\/!\?]/;function p(e,n){var t=e.next();if(r=null,t=="$"||t=="?")return t=="?"&&e.match(/\s/,!1)?"operator":(e.match(/^[A-Za-z0-9_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][A-Za-z0-9_\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]*/),"variableName.local");if(t=="<"&&!e.match(/^[\s\u00a0=]/,!1))return e.match(/^[^\s\u00a0>]*>?/),"atom";if(t=='"'||t=="'")return n.tokenize=x(t),n.tokenize(e,n);if(/[{}\(\),\.;\[\]]/.test(t))return r=t,"bracket";if(t=="#")return e.skipToEnd(),"comment";if(t==="^")return t=e.peek(),t==="^"?e.eat("^"):e.eatWhile(l),"operator";if(l.test(t))return e.eatWhile(l),"operator";if(t==":")return s(e),"atom";if(t=="@")return e.eatWhile(/[a-z\d\-]/i),"meta";if(e.eatWhile(/[_\w\d]/),e.eat(":"))return s(e),"atom";var u=e.current();return d.test(u)?"builtin":F.test(u)?"keyword":"variable"}function s(e){e.match(/(\.(?=[\w_\-\\%])|[:\w_-]|\\[-\\_~.!$&'()*+,;=/?#@%]|%[a-f\d][a-f\d])+/i)}function x(e){return function(n,t){for(var u=!1,i;(i=n.next())!=null;){if(i==e&&!u){t.tokenize=p;break}u=!u&&i=="\\"}return"string"}}function o(e,n,t){e.context={prev:e.context,indent:e.indent,col:t,type:n}}function c(e){e.indent=e.context.indent,e.context=e.context.prev}const h={startState:function(){return{tokenize:p,context:null,indent:0,col:0}},token:function(e,n){if(e.sol()&&(n.context&&n.context.align==null&&(n.context.align=!1),n.indent=e.indentation()),e.eatSpace())return null;var t=n.tokenize(e,n);if(t!="comment"&&n.context&&n.context.align==null&&n.context.type!="pattern"&&(n.context.align=!0),r=="(")o(n,")",e.column());else if(r=="[")o(n,"]",e.column());else if(r=="{")o(n,"}",e.column());else if(/[\]\}\)]/.test(r)){for(;n.context&&n.context.type=="pattern";)c(n);n.context&&r==n.context.type&&(c(n),r=="}"&&n.context&&n.context.type=="pattern"&&c(n))}else r=="."&&n.context&&n.context.type=="pattern"?c(n):/atom|string|variable/.test(t)&&n.context&&(/[\}\]]/.test(n.context.type)?o(n,"pattern",e.column()):n.context.type=="pattern"&&!n.context.align&&(n.context.align=!0,n.context.col=e.column()));return t},indent:function(e,n,t){var u=n&&n.charAt(0),i=e.context;if(/[\]\}]/.test(u))for(;i&&i.type=="pattern";)i=i.prev;var a=i&&u==i.type;return i?i.type=="pattern"?i.col:i.align?i.col+(a?0:1):i.indent+(a?0:t.unit):0},languageData:{commentTokens:{line:"#"}}};export{h as sparql};
