/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});

/*!
 * Bootstrap v3.1.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
/**
 * BitcoinJS-lib v0.1.3-default
 * Copyright (c) 2011 BitcoinJS Project
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the MIT license.
 */
(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=window.Crypto={},n=t.util={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return n.rotl(e,8)&16711935|n.rotl(e,24)&4278255360;for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(Math.random()*256));return t},bytesToWords:function(e){for(var t=[],n=0,r=0;n<e.length;n++,r+=8)t[r>>>5]|=e[n]<<24-r%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<e.length*32;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((e[n]&15).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(t){if(typeof btoa=="function")return btoa(s.bytesToString(t));for(var n=[],r=0;r<t.length;r+=3){var i=t[r]<<16|t[r+1]<<8|t[r+2];for(var o=0;o<4;o++)r*8+o*6<=t.length*8?n.push(e.charAt(i>>>6*(3-o)&63)):n.push("=")}return n.join("")},base64ToBytes:function(t){if(typeof atob=="function")return s.stringToBytes(atob(t));t=t.replace(/[^A-Z0-9+\/]/ig,"");for(var n=[],r=0,i=0;r<t.length;i=++r%4){if(i==0)continue;n.push((e.indexOf(t.charAt(r-1))&Math.pow(2,-2*i+8)-1)<<i*2|e.indexOf(t.charAt(r))>>>6-i*2)}return n}};t.mode={};var r=t.charenc={},i=r.UTF8={stringToBytes:function(e){return s.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(s.bytesToString(e)))}},s=r.Binary={stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}})();
(function(){var e=Crypto,t=e.util,n=e.charenc,r=n.UTF8,i=n.Binary,s=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],o=e.SHA256=function(e,n){var r=t.wordsToBytes(o._sha256(e));return n&&n.asBytes?r:n&&n.asString?i.bytesToString(r):t.bytesToHex(r)};o._sha256=function(e){e.constructor==String&&(e=r.stringToBytes(e));var n=t.bytesToWords(e),i=e.length*8,o=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],u=[],a,f,l,c,h,p,d,v,m,g,y,b;n[i>>5]|=128<<24-i%32,n[(i+64>>9<<4)+15]=i;for(var m=0;m<n.length;m+=16){a=o[0],f=o[1],l=o[2],c=o[3],h=o[4],p=o[5],d=o[6],v=o[7];for(var g=0;g<64;g++){if(g<16)u[g]=n[g+m];else{var w=u[g-15],E=u[g-2],S=(w<<25|w>>>7)^(w<<14|w>>>18)^w>>>3,x=(E<<15|E>>>17)^(E<<13|E>>>19)^E>>>10;u[g]=S+(u[g-7]>>>0)+x+(u[g-16]>>>0)}var T=h&p^~h&d,N=a&f^a&l^f&l,C=(a<<30|a>>>2)^(a<<19|a>>>13)^(a<<10|a>>>22),k=(h<<26|h>>>6)^(h<<21|h>>>11)^(h<<7|h>>>25);y=(v>>>0)+k+T+s[g]+(u[g]>>>0),b=C+N,v=d,d=p,p=h,h=c+y,c=l,l=f,f=a,a=y+b}o[0]+=a,o[1]+=f,o[2]+=l,o[3]+=c,o[4]+=h,o[5]+=p,o[6]+=d,o[7]+=v}return o},o._blocksize=16})();
(function(){function o(e,t,n,r){return 0<=e&&e<=15?t^n^r:16<=e&&e<=31?t&n|~t&r:32<=e&&e<=47?(t|~n)^r:48<=e&&e<=63?t&r|n&~r:64<=e&&e<=79?t^(n|~r):"rmd160_f: j out of range"}function u(e){return 0<=e&&e<=15?0:16<=e&&e<=31?1518500249:32<=e&&e<=47?1859775393:48<=e&&e<=63?2400959708:64<=e&&e<=79?2840853838:"rmd160_K1: j out of range"}function a(e){return 0<=e&&e<=15?1352829926:16<=e&&e<=31?1548603684:32<=e&&e<=47?1836072691:48<=e&&e<=63?2053994217:64<=e&&e<=79?0:"rmd160_K2: j out of range"}function p(e,t){var n=(e&65535)+(t&65535),r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535}function d(e,t){return e<<t|e>>>32-t}var e=Crypto,t=e.util,n=e.charenc,r=n.UTF8,i=n.Binary;t.bytesToLWords=function(e){var t=Array(e.length>>2);for(var n=0;n<t.length;n++)t[n]=0;for(var n=0;n<e.length*8;n+=8)t[n>>5]|=(e[n/8]&255)<<n%32;return t},t.lWordsToBytes=function(e){var t=[];for(var n=0;n<e.length*32;n+=8)t.push(e[n>>5]>>>n%32&255);return t};var s=e.RIPEMD160=function(e,n){var r=t.lWordsToBytes(s._rmd160(e));return n&&n.asBytes?r:n&&n.asString?i.bytesToString(r):t.bytesToHex(r)};s._rmd160=function(e){e.constructor==String&&(e=r.stringToBytes(e));var n=t.bytesToLWords(e),i=e.length*8;n[i>>5]|=128<<i%32,n[(i+64>>>9<<4)+14]=i;var s=1732584193,v=4023233417,m=2562383102,g=271733878,y=3285377520;for(var b=0;b<n.length;b+=16){var w,E=s,S=v,x=m,T=g,N=y,C=s,k=v,L=m,A=g,O=y;for(var M=0;M<=79;++M)w=p(E,o(M,S,x,T)),w=p(w,n[b+f[M]]),w=p(w,u(M)),w=p(d(w,c[M]),N),E=N,N=T,T=d(x,10),x=S,S=w,w=p(C,o(79-M,k,L,A)),w=p(w,n[b+l[M]]),w=p(w,a(M)),w=p(d(w,h[M]),O),C=O,O=A,A=d(L,10),L=k,k=w;w=p(v,p(x,A)),v=p(m,p(T,O)),m=p(g,p(N,C)),g=p(y,p(E,k)),y=p(s,p(S,L)),s=w}return[s,v,m,g,y]};var f=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],l=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],c=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],h=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]})();
function Arcfour(){this.i=0,this.j=0,this.S=new Array}function ARC4init(e){var t,n,r;for(t=0;t<256;++t)this.S[t]=t;n=0;for(t=0;t<256;++t)n=n+this.S[t]+e[t%e.length]&255,r=this.S[t],this.S[t]=this.S[n],this.S[n]=r;this.i=0,this.j=0}function ARC4next(){var e;return this.i=this.i+1&255,this.j=this.j+this.S[this.i]&255,e=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=e,this.S[e+this.S[this.i]&255]}function prng_newstate(){return new Arcfour}Arcfour.prototype.init=ARC4init,Arcfour.prototype.next=ARC4next;var rng_psize=256;
function rng_seed_int(e){rng_pool[rng_pptr++]^=e&255,rng_pool[rng_pptr++]^=e>>8&255,rng_pool[rng_pptr++]^=e>>16&255,rng_pool[rng_pptr++]^=e>>24&255,rng_pptr>=rng_psize&&(rng_pptr-=rng_psize)}function rng_seed_time(){rng_seed_int((new Date).getTime())}function rng_get_byte(){if(rng_state==null){rng_seed_time(),rng_state=prng_newstate(),rng_state.init(rng_pool);for(rng_pptr=0;rng_pptr<rng_pool.length;++rng_pptr)rng_pool[rng_pptr]=0;rng_pptr=0}return rng_state.next()}function rng_get_bytes(e){var t;for(t=0;t<e.length;++t)e[t]=rng_get_byte()}function SecureRandom(){}var rng_state,rng_pool,rng_pptr;if(rng_pool==null){rng_pool=new Array,rng_pptr=0;var t;if(navigator.appName=="Netscape"&&navigator.appVersion<"5"&&window.crypto){var z=window.crypto.random(32);for(t=0;t<z.length;++t)rng_pool[rng_pptr++]=z.charCodeAt(t)&255}while(rng_pptr<rng_psize)t=Math.floor(65536*Math.random()),rng_pool[rng_pptr++]=t>>>8,rng_pool[rng_pptr++]=t&255;rng_pptr=0,rng_seed_time()}SecureRandom.prototype.nextBytes=rng_get_bytes;
function BigInteger(e,t,n){e!=null&&("number"==typeof e?this.fromNumber(e,t,n):t==null&&"string"!=typeof e?this.fromString(e,256):this.fromString(e,t))}function nbi(){return new BigInteger(null)}function am1(e,t,n,r,i,s){while(--s>=0){var o=t*this[e++]+n[r]+i;i=Math.floor(o/67108864),n[r++]=o&67108863}return i}function am2(e,t,n,r,i,s){var o=t&32767,u=t>>15;while(--s>=0){var a=this[e]&32767,f=this[e++]>>15,l=u*a+f*o;a=o*a+((l&32767)<<15)+n[r]+(i&1073741823),i=(a>>>30)+(l>>>15)+u*f+(i>>>30),n[r++]=a&1073741823}return i}function am3(e,t,n,r,i,s){var o=t&16383,u=t>>14;while(--s>=0){var a=this[e]&16383,f=this[e++]>>14,l=u*a+f*o;a=o*a+((l&16383)<<14)+n[r]+i,i=(a>>28)+(l>>14)+u*f,n[r++]=a&268435455}return i}function int2char(e){return BI_RM.charAt(e)}function intAt(e,t){var n=BI_RC[e.charCodeAt(t)];return n==null?-1:n}function bnpCopyTo(e){for(var t=this.t-1;t>=0;--t)e[t]=this[t];e.t=this.t,e.s=this.s}function bnpFromInt(e){this.t=1,this.s=e<0?-1:0,e>0?this[0]=e:e<-1?this[0]=e+DV:this.t=0}function nbv(e){var t=nbi();return t.fromInt(e),t}function bnpFromString(e,t){var n;if(t==16)n=4;else if(t==8)n=3;else if(t==256)n=8;else if(t==2)n=1;else if(t==32)n=5;else{if(t!=4){this.fromRadix(e,t);return}n=2}this.t=0,this.s=0;var r=e.length,i=!1,s=0;while(--r>=0){var o=n==8?e[r]&255:intAt(e,r);if(o<0){e.charAt(r)=="-"&&(i=!0);continue}i=!1,s==0?this[this.t++]=o:s+n>this.DB?(this[this.t-1]|=(o&(1<<this.DB-s)-1)<<s,this[this.t++]=o>>this.DB-s):this[this.t-1]|=o<<s,s+=n,s>=this.DB&&(s-=this.DB)}n==8&&(e[0]&128)!=0&&(this.s=-1,s>0&&(this[this.t-1]|=(1<<this.DB-s)-1<<s)),this.clamp(),i&&BigInteger.ZERO.subTo(this,this)}function bnpClamp(){var e=this.s&this.DM;while(this.t>0&&this[this.t-1]==e)--this.t}function bnToString(e){if(this.s<0)return"-"+this.negate().toString(e);var t;if(e==16)t=4;else if(e==8)t=3;else if(e==2)t=1;else if(e==32)t=5;else{if(e!=4)return this.toRadix(e);t=2}var n=(1<<t)-1,r,i=!1,s="",o=this.t,u=this.DB-o*this.DB%t;if(o-->0){u<this.DB&&(r=this[o]>>u)>0&&(i=!0,s=int2char(r));while(o>=0)u<t?(r=(this[o]&(1<<u)-1)<<t-u,r|=this[--o]>>(u+=this.DB-t)):(r=this[o]>>(u-=t)&n,u<=0&&(u+=this.DB,--o)),r>0&&(i=!0),i&&(s+=int2char(r))}return i?s:"0"}function bnNegate(){var e=nbi();return BigInteger.ZERO.subTo(this,e),e}function bnAbs(){return this.s<0?this.negate():this}function bnCompareTo(e){var t=this.s-e.s;if(t!=0)return t;var n=this.t;t=n-e.t;if(t!=0)return this.s<0?-t:t;while(--n>=0)if((t=this[n]-e[n])!=0)return t;return 0}function nbits(e){var t=1,n;return(n=e>>>16)!=0&&(e=n,t+=16),(n=e>>8)!=0&&(e=n,t+=8),(n=e>>4)!=0&&(e=n,t+=4),(n=e>>2)!=0&&(e=n,t+=2),(n=e>>1)!=0&&(e=n,t+=1),t}function bnBitLength(){return this.t<=0?0:this.DB*(this.t-1)+nbits(this[this.t-1]^this.s&this.DM)}function bnpDLShiftTo(e,t){var n;for(n=this.t-1;n>=0;--n)t[n+e]=this[n];for(n=e-1;n>=0;--n)t[n]=0;t.t=this.t+e,t.s=this.s}function bnpDRShiftTo(e,t){for(var n=e;n<this.t;++n)t[n-e]=this[n];t.t=Math.max(this.t-e,0),t.s=this.s}function bnpLShiftTo(e,t){var n=e%this.DB,r=this.DB-n,i=(1<<r)-1,s=Math.floor(e/this.DB),o=this.s<<n&this.DM,u;for(u=this.t-1;u>=0;--u)t[u+s+1]=this[u]>>r|o,o=(this[u]&i)<<n;for(u=s-1;u>=0;--u)t[u]=0;t[s]=o,t.t=this.t+s+1,t.s=this.s,t.clamp()}function bnpRShiftTo(e,t){t.s=this.s;var n=Math.floor(e/this.DB);if(n>=this.t){t.t=0;return}var r=e%this.DB,i=this.DB-r,s=(1<<r)-1;t[0]=this[n]>>r;for(var o=n+1;o<this.t;++o)t[o-n-1]|=(this[o]&s)<<i,t[o-n]=this[o]>>r;r>0&&(t[this.t-n-1]|=(this.s&s)<<i),t.t=this.t-n,t.clamp()}function bnpSubTo(e,t){var n=0,r=0,i=Math.min(e.t,this.t);while(n<i)r+=this[n]-e[n],t[n++]=r&this.DM,r>>=this.DB;if(e.t<this.t){r-=e.s;while(n<this.t)r+=this[n],t[n++]=r&this.DM,r>>=this.DB;r+=this.s}else{r+=this.s;while(n<e.t)r-=e[n],t[n++]=r&this.DM,r>>=this.DB;r-=e.s}t.s=r<0?-1:0,r<-1?t[n++]=this.DV+r:r>0&&(t[n++]=r),t.t=n,t.clamp()}function bnpMultiplyTo(e,t){var n=this.abs(),r=e.abs(),i=n.t;t.t=i+r.t;while(--i>=0)t[i]=0;for(i=0;i<r.t;++i)t[i+n.t]=n.am(0,r[i],t,i,0,n.t);t.s=0,t.clamp(),this.s!=e.s&&BigInteger.ZERO.subTo(t,t)}function bnpSquareTo(e){var t=this.abs(),n=e.t=2*t.t;while(--n>=0)e[n]=0;for(n=0;n<t.t-1;++n){var r=t.am(n,t[n],e,2*n,0,1);(e[n+t.t]+=t.am(n+1,2*t[n],e,2*n+1,r,t.t-n-1))>=t.DV&&(e[n+t.t]-=t.DV,e[n+t.t+1]=1)}e.t>0&&(e[e.t-1]+=t.am(n,t[n],e,2*n,0,1)),e.s=0,e.clamp()}function bnpDivRemTo(e,t,n){var r=e.abs();if(r.t<=0)return;var i=this.abs();if(i.t<r.t){t!=null&&t.fromInt(0),n!=null&&this.copyTo(n);return}n==null&&(n=nbi());var s=nbi(),o=this.s,u=e.s,a=this.DB-nbits(r[r.t-1]);a>0?(r.lShiftTo(a,s),i.lShiftTo(a,n)):(r.copyTo(s),i.copyTo(n));var f=s.t,l=s[f-1];if(l==0)return;var c=l*(1<<this.F1)+(f>1?s[f-2]>>this.F2:0),h=this.FV/c,p=(1<<this.F1)/c,d=1<<this.F2,v=n.t,m=v-f,g=t==null?nbi():t;s.dlShiftTo(m,g),n.compareTo(g)>=0&&(n[n.t++]=1,n.subTo(g,n)),BigInteger.ONE.dlShiftTo(f,g),g.subTo(s,s);while(s.t<f)s[s.t++]=0;while(--m>=0){var y=n[--v]==l?this.DM:Math.floor(n[v]*h+(n[v-1]+d)*p);if((n[v]+=s.am(0,y,n,m,0,f))<y){s.dlShiftTo(m,g),n.subTo(g,n);while(n[v]<--y)n.subTo(g,n)}}t!=null&&(n.drShiftTo(f,t),o!=u&&BigInteger.ZERO.subTo(t,t)),n.t=f,n.clamp(),a>0&&n.rShiftTo(a,n),o<0&&BigInteger.ZERO.subTo(n,n)}function bnMod(e){var t=nbi();return this.abs().divRemTo(e,null,t),this.s<0&&t.compareTo(BigInteger.ZERO)>0&&e.subTo(t,t),t}function Classic(e){this.m=e}function cConvert(e){return e.s<0||e.compareTo(this.m)>=0?e.mod(this.m):e}function cRevert(e){return e}function cReduce(e){e.divRemTo(this.m,null,e)}function cMulTo(e,t,n){e.multiplyTo(t,n),this.reduce(n)}function cSqrTo(e,t){e.squareTo(t),this.reduce(t)}function bnpInvDigit(){if(this.t<1)return 0;var e=this[0];if((e&1)==0)return 0;var t=e&3;return t=t*(2-(e&15)*t)&15,t=t*(2-(e&255)*t)&255,t=t*(2-((e&65535)*t&65535))&65535,t=t*(2-e*t%this.DV)%this.DV,t>0?this.DV-t:-t}function Montgomery(e){this.m=e,this.mp=e.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<e.DB-15)-1,this.mt2=2*e.t}function montConvert(e){var t=nbi();return e.abs().dlShiftTo(this.m.t,t),t.divRemTo(this.m,null,t),e.s<0&&t.compareTo(BigInteger.ZERO)>0&&this.m.subTo(t,t),t}function montRevert(e){var t=nbi();return e.copyTo(t),this.reduce(t),t}function montReduce(e){while(e.t<=this.mt2)e[e.t++]=0;for(var t=0;t<this.m.t;++t){var n=e[t]&32767,r=n*this.mpl+((n*this.mph+(e[t]>>15)*this.mpl&this.um)<<15)&e.DM;n=t+this.m.t,e[n]+=this.m.am(0,r,e,t,0,this.m.t);while(e[n]>=e.DV)e[n]-=e.DV,e[++n]++}e.clamp(),e.drShiftTo(this.m.t,e),e.compareTo(this.m)>=0&&e.subTo(this.m,e)}function montSqrTo(e,t){e.squareTo(t),this.reduce(t)}function montMulTo(e,t,n){e.multiplyTo(t,n),this.reduce(n)}function bnpIsEven(){return(this.t>0?this[0]&1:this.s)==0}function bnpExp(e,t){if(e>4294967295||e<1)return BigInteger.ONE;var n=nbi(),r=nbi(),i=t.convert(this),s=nbits(e)-1;i.copyTo(n);while(--s>=0){t.sqrTo(n,r);if((e&1<<s)>0)t.mulTo(r,i,n);else{var o=n;n=r,r=o}}return t.revert(n)}function bnModPowInt(e,t){var n;return e<256||t.isEven()?n=new Classic(t):n=new Montgomery(t),this.exp(e,n)}var dbits,canary=0xdeadbeefcafe,j_lm=(canary&16777215)==15715070;j_lm&&navigator.appName=="Microsoft Internet Explorer"?(BigInteger.prototype.am=am2,dbits=30):j_lm&&navigator.appName!="Netscape"?(BigInteger.prototype.am=am1,dbits=26):(BigInteger.prototype.am=am3,dbits=28),BigInteger.prototype.DB=dbits,BigInteger.prototype.DM=(1<<dbits)-1,BigInteger.prototype.DV=1<<dbits;var BI_FP=52;BigInteger.prototype.FV=Math.pow(2,BI_FP),BigInteger.prototype.F1=BI_FP-dbits,BigInteger.prototype.F2=2*dbits-BI_FP;var BI_RM="0123456789abcdefghijklmnopqrstuvwxyz",BI_RC=new Array,rr,vv;rr="0".charCodeAt(0);for(vv=0;vv<=9;++vv)BI_RC[rr++]=vv;rr="a".charCodeAt(0);for(vv=10;vv<36;++vv)BI_RC[rr++]=vv;rr="A".charCodeAt(0);for(vv=10;vv<36;++vv)BI_RC[rr++]=vv;Classic.prototype.convert=cConvert,Classic.prototype.revert=cRevert,Classic.prototype.reduce=cReduce,Classic.prototype.mulTo=cMulTo,Classic.prototype.sqrTo=cSqrTo,Montgomery.prototype.convert=montConvert,Montgomery.prototype.revert=montRevert,Montgomery.prototype.reduce=montReduce,Montgomery.prototype.mulTo=montMulTo,Montgomery.prototype.sqrTo=montSqrTo,BigInteger.prototype.copyTo=bnpCopyTo,BigInteger.prototype.fromInt=bnpFromInt,BigInteger.prototype.fromString=bnpFromString,BigInteger.prototype.clamp=bnpClamp,BigInteger.prototype.dlShiftTo=bnpDLShiftTo,BigInteger.prototype.drShiftTo=bnpDRShiftTo,BigInteger.prototype.lShiftTo=bnpLShiftTo,BigInteger.prototype.rShiftTo=bnpRShiftTo,BigInteger.prototype.subTo=bnpSubTo,BigInteger.prototype.multiplyTo=bnpMultiplyTo,BigInteger.prototype.squareTo=bnpSquareTo,BigInteger.prototype.divRemTo=bnpDivRemTo,BigInteger.prototype.invDigit=bnpInvDigit,BigInteger.prototype.isEven=bnpIsEven,BigInteger.prototype.exp=bnpExp,BigInteger.prototype.toString=bnToString,BigInteger.prototype.negate=bnNegate,BigInteger.prototype.abs=bnAbs,BigInteger.prototype.compareTo=bnCompareTo,BigInteger.prototype.bitLength=bnBitLength,BigInteger.prototype.mod=bnMod,BigInteger.prototype.modPowInt=bnModPowInt,BigInteger.ZERO=nbv(0),BigInteger.ONE=nbv(1);
function bnClone(){var e=nbi();return this.copyTo(e),e}function bnIntValue(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function bnByteValue(){return this.t==0?this.s:this[0]<<24>>24}function bnShortValue(){return this.t==0?this.s:this[0]<<16>>16}function bnpChunkSize(e){return Math.floor(Math.LN2*this.DB/Math.log(e))}function bnSigNum(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function bnpToRadix(e){e==null&&(e=10);if(this.signum()==0||e<2||e>36)return"0";var t=this.chunkSize(e),n=Math.pow(e,t),r=nbv(n),i=nbi(),s=nbi(),o="";this.divRemTo(r,i,s);while(i.signum()>0)o=(n+s.intValue()).toString(e).substr(1)+o,i.divRemTo(r,i,s);return s.intValue().toString(e)+o}function bnpFromRadix(e,t){this.fromInt(0),t==null&&(t=10);var n=this.chunkSize(t),r=Math.pow(t,n),i=!1,s=0,o=0;for(var u=0;u<e.length;++u){var a=intAt(e,u);if(a<0){e.charAt(u)=="-"&&this.signum()==0&&(i=!0);continue}o=t*o+a,++s>=n&&(this.dMultiply(r),this.dAddOffset(o,0),s=0,o=0)}s>0&&(this.dMultiply(Math.pow(t,s)),this.dAddOffset(o,0)),i&&BigInteger.ZERO.subTo(this,this)}function bnpFromNumber(e,t,n){if("number"==typeof t)if(e<2)this.fromInt(1);else{this.fromNumber(e,n),this.testBit(e-1)||this.bitwiseTo(BigInteger.ONE.shiftLeft(e-1),op_or,this),this.isEven()&&this.dAddOffset(1,0);while(!this.isProbablePrime(t))this.dAddOffset(2,0),this.bitLength()>e&&this.subTo(BigInteger.ONE.shiftLeft(e-1),this)}else{var r=new Array,i=e&7;r.length=(e>>3)+1,t.nextBytes(r),i>0?r[0]&=(1<<i)-1:r[0]=0,this.fromString(r,256)}}function bnToByteArray(){var e=this.t,t=new Array;t[0]=this.s;var n=this.DB-e*this.DB%8,r,i=0;if(e-->0){n<this.DB&&(r=this[e]>>n)!=(this.s&this.DM)>>n&&(t[i++]=r|this.s<<this.DB-n);while(e>=0){n<8?(r=(this[e]&(1<<n)-1)<<8-n,r|=this[--e]>>(n+=this.DB-8)):(r=this[e]>>(n-=8)&255,n<=0&&(n+=this.DB,--e)),(r&128)!=0&&(r|=-256),i==0&&(this.s&128)!=(r&128)&&++i;if(i>0||r!=this.s)t[i++]=r}}return t}function bnEquals(e){return this.compareTo(e)==0}function bnMin(e){return this.compareTo(e)<0?this:e}function bnMax(e){return this.compareTo(e)>0?this:e}function bnpBitwiseTo(e,t,n){var r,i,s=Math.min(e.t,this.t);for(r=0;r<s;++r)n[r]=t(this[r],e[r]);if(e.t<this.t){i=e.s&this.DM;for(r=s;r<this.t;++r)n[r]=t(this[r],i);n.t=this.t}else{i=this.s&this.DM;for(r=s;r<e.t;++r)n[r]=t(i,e[r]);n.t=e.t}n.s=t(this.s,e.s),n.clamp()}function op_and(e,t){return e&t}function bnAnd(e){var t=nbi();return this.bitwiseTo(e,op_and,t),t}function op_or(e,t){return e|t}function bnOr(e){var t=nbi();return this.bitwiseTo(e,op_or,t),t}function op_xor(e,t){return e^t}function bnXor(e){var t=nbi();return this.bitwiseTo(e,op_xor,t),t}function op_andnot(e,t){return e&~t}function bnAndNot(e){var t=nbi();return this.bitwiseTo(e,op_andnot,t),t}function bnNot(){var e=nbi();for(var t=0;t<this.t;++t)e[t]=this.DM&~this[t];return e.t=this.t,e.s=~this.s,e}function bnShiftLeft(e){var t=nbi();return e<0?this.rShiftTo(-e,t):this.lShiftTo(e,t),t}function bnShiftRight(e){var t=nbi();return e<0?this.lShiftTo(-e,t):this.rShiftTo(e,t),t}function lbit(e){if(e==0)return-1;var t=0;return(e&65535)==0&&(e>>=16,t+=16),(e&255)==0&&(e>>=8,t+=8),(e&15)==0&&(e>>=4,t+=4),(e&3)==0&&(e>>=2,t+=2),(e&1)==0&&++t,t}function bnGetLowestSetBit(){for(var e=0;e<this.t;++e)if(this[e]!=0)return e*this.DB+lbit(this[e]);return this.s<0?this.t*this.DB:-1}function cbit(e){var t=0;while(e!=0)e&=e-1,++t;return t}function bnBitCount(){var e=0,t=this.s&this.DM;for(var n=0;n<this.t;++n)e+=cbit(this[n]^t);return e}function bnTestBit(e){var t=Math.floor(e/this.DB);return t>=this.t?this.s!=0:(this[t]&1<<e%this.DB)!=0}function bnpChangeBit(e,t){var n=BigInteger.ONE.shiftLeft(e);return this.bitwiseTo(n,t,n),n}function bnSetBit(e){return this.changeBit(e,op_or)}function bnClearBit(e){return this.changeBit(e,op_andnot)}function bnFlipBit(e){return this.changeBit(e,op_xor)}function bnpAddTo(e,t){var n=0,r=0,i=Math.min(e.t,this.t);while(n<i)r+=this[n]+e[n],t[n++]=r&this.DM,r>>=this.DB;if(e.t<this.t){r+=e.s;while(n<this.t)r+=this[n],t[n++]=r&this.DM,r>>=this.DB;r+=this.s}else{r+=this.s;while(n<e.t)r+=e[n],t[n++]=r&this.DM,r>>=this.DB;r+=e.s}t.s=r<0?-1:0,r>0?t[n++]=r:r<-1&&(t[n++]=this.DV+r),t.t=n,t.clamp()}function bnAdd(e){var t=nbi();return this.addTo(e,t),t}function bnSubtract(e){var t=nbi();return this.subTo(e,t),t}function bnMultiply(e){var t=nbi();return this.multiplyTo(e,t),t}function bnSquare(){var e=nbi();return this.squareTo(e),e}function bnDivide(e){var t=nbi();return this.divRemTo(e,t,null),t}function bnRemainder(e){var t=nbi();return this.divRemTo(e,null,t),t}function bnDivideAndRemainder(e){var t=nbi(),n=nbi();return this.divRemTo(e,t,n),new Array(t,n)}function bnpDMultiply(e){this[this.t]=this.am(0,e-1,this,0,0,this.t),++this.t,this.clamp()}function bnpDAddOffset(e,t){if(e==0)return;while(this.t<=t)this[this.t++]=0;this[t]+=e;while(this[t]>=this.DV)this[t]-=this.DV,++t>=this.t&&(this[this.t++]=0),++this[t]}function NullExp(){}function nNop(e){return e}function nMulTo(e,t,n){e.multiplyTo(t,n)}function nSqrTo(e,t){e.squareTo(t)}function bnPow(e){return this.exp(e,new NullExp)}function bnpMultiplyLowerTo(e,t,n){var r=Math.min(this.t+e.t,t);n.s=0,n.t=r;while(r>0)n[--r]=0;var i;for(i=n.t-this.t;r<i;++r)n[r+this.t]=this.am(0,e[r],n,r,0,this.t);for(i=Math.min(e.t,t);r<i;++r)this.am(0,e[r],n,r,0,t-r);n.clamp()}function bnpMultiplyUpperTo(e,t,n){--t;var r=n.t=this.t+e.t-t;n.s=0;while(--r>=0)n[r]=0;for(r=Math.max(t-this.t,0);r<e.t;++r)n[this.t+r-t]=this.am(t-r,e[r],n,0,0,this.t+r-t);n.clamp(),n.drShiftTo(1,n)}function Barrett(e){this.r2=nbi(),this.q3=nbi(),BigInteger.ONE.dlShiftTo(2*e.t,this.r2),this.mu=this.r2.divide(e),this.m=e}function barrettConvert(e){if(e.s<0||e.t>2*this.m.t)return e.mod(this.m);if(e.compareTo(this.m)<0)return e;var t=nbi();return e.copyTo(t),this.reduce(t),t}function barrettRevert(e){return e}function barrettReduce(e){e.drShiftTo(this.m.t-1,this.r2),e.t>this.m.t+1&&(e.t=this.m.t+1,e.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);while(e.compareTo(this.r2)<0)e.dAddOffset(1,this.m.t+1);e.subTo(this.r2,e);while(e.compareTo(this.m)>=0)e.subTo(this.m,e)}function barrettSqrTo(e,t){e.squareTo(t),this.reduce(t)}function barrettMulTo(e,t,n){e.multiplyTo(t,n),this.reduce(n)}function bnModPow(e,t){var n=e.bitLength(),r,i=nbv(1),s;if(n<=0)return i;n<18?r=1:n<48?r=3:n<144?r=4:n<768?r=5:r=6,n<8?s=new Classic(t):t.isEven()?s=new Barrett(t):s=new Montgomery(t);var o=new Array,u=3,a=r-1,f=(1<<r)-1;o[1]=s.convert(this);if(r>1){var l=nbi();s.sqrTo(o[1],l);while(u<=f)o[u]=nbi(),s.mulTo(l,o[u-2],o[u]),u+=2}var c=e.t-1,h,p=!0,d=nbi(),v;n=nbits(e[c])-1;while(c>=0){n>=a?h=e[c]>>n-a&f:(h=(e[c]&(1<<n+1)-1)<<a-n,c>0&&(h|=e[c-1]>>this.DB+n-a)),u=r;while((h&1)==0)h>>=1,--u;(n-=u)<0&&(n+=this.DB,--c);if(p)o[h].copyTo(i),p=!1;else{while(u>1)s.sqrTo(i,d),s.sqrTo(d,i),u-=2;u>0?s.sqrTo(i,d):(v=i,i=d,d=v),s.mulTo(d,o[h],i)}while(c>=0&&(e[c]&1<<n)==0)s.sqrTo(i,d),v=i,i=d,d=v,--n<0&&(n=this.DB-1,--c)}return s.revert(i)}function bnGCD(e){var t=this.s<0?this.negate():this.clone(),n=e.s<0?e.negate():e.clone();if(t.compareTo(n)<0){var r=t;t=n,n=r}var i=t.getLowestSetBit(),s=n.getLowestSetBit();if(s<0)return t;i<s&&(s=i),s>0&&(t.rShiftTo(s,t),n.rShiftTo(s,n));while(t.signum()>0)(i=t.getLowestSetBit())>0&&t.rShiftTo(i,t),(i=n.getLowestSetBit())>0&&n.rShiftTo(i,n),t.compareTo(n)>=0?(t.subTo(n,t),t.rShiftTo(1,t)):(n.subTo(t,n),n.rShiftTo(1,n));return s>0&&n.lShiftTo(s,n),n}function bnpModInt(e){if(e<=0)return 0;var t=this.DV%e,n=this.s<0?e-1:0;if(this.t>0)if(t==0)n=this[0]%e;else for(var r=this.t-1;r>=0;--r)n=(t*n+this[r])%e;return n}function bnModInverse(e){var t=e.isEven();if(this.isEven()&&t||e.signum()==0)return BigInteger.ZERO;var n=e.clone(),r=this.clone(),i=nbv(1),s=nbv(0),o=nbv(0),u=nbv(1);while(n.signum()!=0){while(n.isEven()){n.rShiftTo(1,n);if(t){if(!i.isEven()||!s.isEven())i.addTo(this,i),s.subTo(e,s);i.rShiftTo(1,i)}else s.isEven()||s.subTo(e,s);s.rShiftTo(1,s)}while(r.isEven()){r.rShiftTo(1,r);if(t){if(!o.isEven()||!u.isEven())o.addTo(this,o),u.subTo(e,u);o.rShiftTo(1,o)}else u.isEven()||u.subTo(e,u);u.rShiftTo(1,u)}n.compareTo(r)>=0?(n.subTo(r,n),t&&i.subTo(o,i),s.subTo(u,s)):(r.subTo(n,r),t&&o.subTo(i,o),u.subTo(s,u))}return r.compareTo(BigInteger.ONE)!=0?BigInteger.ZERO:u.compareTo(e)>=0?u.subtract(e):u.signum()<0?(u.addTo(e,u),u.signum()<0?u.add(e):u):u}function bnIsProbablePrime(e){var t,n=this.abs();if(n.t==1&&n[0]<=lowprimes[lowprimes.length-1]){for(t=0;t<lowprimes.length;++t)if(n[0]==lowprimes[t])return!0;return!1}if(n.isEven())return!1;t=1;while(t<lowprimes.length){var r=lowprimes[t],i=t+1;while(i<lowprimes.length&&r<lplim)r*=lowprimes[i++];r=n.modInt(r);while(t<i)if(r%lowprimes[t++]==0)return!1}return n.millerRabin(e)}function bnpMillerRabin(e){var t=this.subtract(BigInteger.ONE),n=t.getLowestSetBit();if(n<=0)return!1;var r=t.shiftRight(n);e=e+1>>1,e>lowprimes.length&&(e=lowprimes.length);var i=nbi();for(var s=0;s<e;++s){i.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);var o=i.modPow(r,this);if(o.compareTo(BigInteger.ONE)!=0&&o.compareTo(t)!=0){var u=1;while(u++<n&&o.compareTo(t)!=0){o=o.modPowInt(2,this);if(o.compareTo(BigInteger.ONE)==0)return!1}if(o.compareTo(t)!=0)return!1}}return!0}NullExp.prototype.convert=nNop,NullExp.prototype.revert=nNop,NullExp.prototype.mulTo=nMulTo,NullExp.prototype.sqrTo=nSqrTo,Barrett.prototype.convert=barrettConvert,Barrett.prototype.revert=barrettRevert,Barrett.prototype.reduce=barrettReduce,Barrett.prototype.mulTo=barrettMulTo,Barrett.prototype.sqrTo=barrettSqrTo;var lowprimes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],lplim=(1<<26)/lowprimes[lowprimes.length-1];BigInteger.prototype.chunkSize=bnpChunkSize,BigInteger.prototype.toRadix=bnpToRadix,BigInteger.prototype.fromRadix=bnpFromRadix,BigInteger.prototype.fromNumber=bnpFromNumber,BigInteger.prototype.bitwiseTo=bnpBitwiseTo,BigInteger.prototype.changeBit=bnpChangeBit,BigInteger.prototype.addTo=bnpAddTo,BigInteger.prototype.dMultiply=bnpDMultiply,BigInteger.prototype.dAddOffset=bnpDAddOffset,BigInteger.prototype.multiplyLowerTo=bnpMultiplyLowerTo,BigInteger.prototype.multiplyUpperTo=bnpMultiplyUpperTo,BigInteger.prototype.modInt=bnpModInt,BigInteger.prototype.millerRabin=bnpMillerRabin,BigInteger.prototype.clone=bnClone,BigInteger.prototype.intValue=bnIntValue,BigInteger.prototype.byteValue=bnByteValue,BigInteger.prototype.shortValue=bnShortValue,BigInteger.prototype.signum=bnSigNum,BigInteger.prototype.toByteArray=bnToByteArray,BigInteger.prototype.equals=bnEquals,BigInteger.prototype.min=bnMin,BigInteger.prototype.max=bnMax,BigInteger.prototype.and=bnAnd,BigInteger.prototype.or=bnOr,BigInteger.prototype.xor=bnXor,BigInteger.prototype.andNot=bnAndNot,BigInteger.prototype.not=bnNot,BigInteger.prototype.shiftLeft=bnShiftLeft,BigInteger.prototype.shiftRight=bnShiftRight,BigInteger.prototype.getLowestSetBit=bnGetLowestSetBit,BigInteger.prototype.bitCount=bnBitCount,BigInteger.prototype.testBit=bnTestBit,BigInteger.prototype.setBit=bnSetBit,BigInteger.prototype.clearBit=bnClearBit,BigInteger.prototype.flipBit=bnFlipBit,BigInteger.prototype.add=bnAdd,BigInteger.prototype.subtract=bnSubtract,BigInteger.prototype.multiply=bnMultiply,BigInteger.prototype.divide=bnDivide,BigInteger.prototype.remainder=bnRemainder,BigInteger.prototype.divideAndRemainder=bnDivideAndRemainder,BigInteger.prototype.modPow=bnModPow,BigInteger.prototype.modInverse=bnModInverse,BigInteger.prototype.pow=bnPow,BigInteger.prototype.gcd=bnGCD,BigInteger.prototype.isProbablePrime=bnIsProbablePrime,BigInteger.prototype.square=bnSquare;
function ECFieldElementFp(e,t){this.x=t,this.q=e}function feFpEquals(e){return e==this?!0:this.q.equals(e.q)&&this.x.equals(e.x)}function feFpToBigInteger(){return this.x}function feFpNegate(){return new ECFieldElementFp(this.q,this.x.negate().mod(this.q))}function feFpAdd(e){return new ECFieldElementFp(this.q,this.x.add(e.toBigInteger()).mod(this.q))}function feFpSubtract(e){return new ECFieldElementFp(this.q,this.x.subtract(e.toBigInteger()).mod(this.q))}function feFpMultiply(e){return new ECFieldElementFp(this.q,this.x.multiply(e.toBigInteger()).mod(this.q))}function feFpSquare(){return new ECFieldElementFp(this.q,this.x.square().mod(this.q))}function feFpDivide(e){return new ECFieldElementFp(this.q,this.x.multiply(e.toBigInteger().modInverse(this.q)).mod(this.q))}function ECPointFp(e,t,n,r){this.curve=e,this.x=t,this.y=n,r==null?this.z=BigInteger.ONE:this.z=r,this.zinv=null}function pointFpGetX(){return this.zinv==null&&(this.zinv=this.z.modInverse(this.curve.q)),this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q))}function pointFpGetY(){return this.zinv==null&&(this.zinv=this.z.modInverse(this.curve.q)),this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q))}function pointFpEquals(e){if(e==this)return!0;if(this.isInfinity())return e.isInfinity();if(e.isInfinity())return this.isInfinity();var t,n;return t=e.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(e.z)).mod(this.curve.q),t.equals(BigInteger.ZERO)?(n=e.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(e.z)).mod(this.curve.q),n.equals(BigInteger.ZERO)):!1}function pointFpIsInfinity(){return this.x==null&&this.y==null?!0:this.z.equals(BigInteger.ZERO)&&!this.y.toBigInteger().equals(BigInteger.ZERO)}function pointFpNegate(){return new ECPointFp(this.curve,this.x,this.y.negate(),this.z)}function pointFpAdd(e){if(this.isInfinity())return e;if(e.isInfinity())return this;var t=e.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(e.z)).mod(this.curve.q),n=e.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(e.z)).mod(this.curve.q);if(BigInteger.ZERO.equals(n))return BigInteger.ZERO.equals(t)?this.twice():this.curve.getInfinity();var r=new BigInteger("3"),i=this.x.toBigInteger(),s=this.y.toBigInteger(),o=e.x.toBigInteger(),u=e.y.toBigInteger(),a=n.square(),f=a.multiply(n),l=i.multiply(a),c=t.square().multiply(this.z),h=c.subtract(l.shiftLeft(1)).multiply(e.z).subtract(f).multiply(n).mod(this.curve.q),p=l.multiply(r).multiply(t).subtract(s.multiply(f)).subtract(c.multiply(t)).multiply(e.z).add(t.multiply(f)).mod(this.curve.q),d=f.multiply(this.z).multiply(e.z).mod(this.curve.q);return new ECPointFp(this.curve,this.curve.fromBigInteger(h),this.curve.fromBigInteger(p),d)}function pointFpTwice(){if(this.isInfinity())return this;if(this.y.toBigInteger().signum()==0)return this.curve.getInfinity();var e=new BigInteger("3"),t=this.x.toBigInteger(),n=this.y.toBigInteger(),r=n.multiply(this.z),i=r.multiply(n).mod(this.curve.q),s=this.curve.a.toBigInteger(),o=t.square().multiply(e);BigInteger.ZERO.equals(s)||(o=o.add(this.z.square().multiply(s))),o=o.mod(this.curve.q);var u=o.square().subtract(t.shiftLeft(3).multiply(i)).shiftLeft(1).multiply(r).mod(this.curve.q),a=o.multiply(e).multiply(t).subtract(i.shiftLeft(1)).shiftLeft(2).multiply(i).subtract(o.square().multiply(o)).mod(this.curve.q),f=r.square().multiply(r).shiftLeft(3).mod(this.curve.q);return new ECPointFp(this.curve,this.curve.fromBigInteger(u),this.curve.fromBigInteger(a),f)}function pointFpMultiply(e){if(this.isInfinity())return this;if(e.signum()==0)return this.curve.getInfinity();var t=e,n=t.multiply(new BigInteger("3")),r=this.negate(),i=this,s;for(s=n.bitLength()-2;s>0;--s){i=i.twice();var o=n.testBit(s),u=t.testBit(s);o!=u&&(i=i.add(o?this:r))}return i}function pointFpMultiplyTwo(e,t,n){var r;e.bitLength()>n.bitLength()?r=e.bitLength()-1:r=n.bitLength()-1;var i=this.curve.getInfinity(),s=this.add(t);while(r>=0)i=i.twice(),e.testBit(r)?n.testBit(r)?i=i.add(s):i=i.add(this):n.testBit(r)&&(i=i.add(t)),--r;return i}function ECCurveFp(e,t,n){this.q=e,this.a=this.fromBigInteger(t),this.b=this.fromBigInteger(n),this.infinity=new ECPointFp(this,null,null)}function curveFpGetQ(){return this.q}function curveFpGetA(){return this.a}function curveFpGetB(){return this.b}function curveFpEquals(e){return e==this?!0:this.q.equals(e.q)&&this.a.equals(e.a)&&this.b.equals(e.b)}function curveFpGetInfinity(){return this.infinity}function curveFpFromBigInteger(e){return new ECFieldElementFp(this.q,e)}function curveFpDecodePointHex(e){switch(parseInt(e.substr(0,2),16)){case 0:return this.infinity;case 2:case 3:return null;case 4:case 6:case 7:var t=(e.length-2)/2,n=e.substr(2,t),r=e.substr(t+2,t);return new ECPointFp(this,this.fromBigInteger(new BigInteger(n,16)),this.fromBigInteger(new BigInteger(r,16)));default:return null}}ECFieldElementFp.prototype.equals=feFpEquals,ECFieldElementFp.prototype.toBigInteger=feFpToBigInteger,ECFieldElementFp.prototype.negate=feFpNegate,ECFieldElementFp.prototype.add=feFpAdd,ECFieldElementFp.prototype.subtract=feFpSubtract,ECFieldElementFp.prototype.multiply=feFpMultiply,ECFieldElementFp.prototype.square=feFpSquare,ECFieldElementFp.prototype.divide=feFpDivide,ECPointFp.prototype.getX=pointFpGetX,ECPointFp.prototype.getY=pointFpGetY,ECPointFp.prototype.equals=pointFpEquals,ECPointFp.prototype.isInfinity=pointFpIsInfinity,ECPointFp.prototype.negate=pointFpNegate,ECPointFp.prototype.add=pointFpAdd,ECPointFp.prototype.twice=pointFpTwice,ECPointFp.prototype.multiply=pointFpMultiply,ECPointFp.prototype.multiplyTwo=pointFpMultiplyTwo,ECCurveFp.prototype.getQ=curveFpGetQ,ECCurveFp.prototype.getA=curveFpGetA,ECCurveFp.prototype.getB=curveFpGetB,ECCurveFp.prototype.equals=curveFpEquals,ECCurveFp.prototype.getInfinity=curveFpGetInfinity,ECCurveFp.prototype.fromBigInteger=curveFpFromBigInteger,ECCurveFp.prototype.decodePointHex=curveFpDecodePointHex;
function X9ECParameters(e,t,n,r){this.curve=e,this.g=t,this.n=n,this.h=r}function x9getCurve(){return this.curve}function x9getG(){return this.g}function x9getN(){return this.n}function x9getH(){return this.h}function fromHex(e){return new BigInteger(e,16)}function secp128r1(){var e=fromHex("FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF"),t=fromHex("FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC"),n=fromHex("E87579C11079F43DD824993C2CEE5ED3"),r=fromHex("FFFFFFFE0000000075A30D1B9038A115"),i=BigInteger.ONE,s=new ECCurveFp(e,t,n),o=s.decodePointHex("04161FF7528B899B2D0C28607CA52C5B86CF5AC8395BAFEB13C02DA292DDED7A83");return new X9ECParameters(s,o,r,i)}function secp160k1(){var e=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73"),t=BigInteger.ZERO,n=fromHex("7"),r=fromHex("0100000000000000000001B8FA16DFAB9ACA16B6B3"),i=BigInteger.ONE,s=new ECCurveFp(e,t,n),o=s.decodePointHex("043B4C382CE37AA192A4019E763036F4F5DD4D7EBB938CF935318FDCED6BC28286531733C3F03C4FEE");return new X9ECParameters(s,o,r,i)}function secp160r1(){var e=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF"),t=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC"),n=fromHex("1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45"),r=fromHex("0100000000000000000001F4C8F927AED3CA752257"),i=BigInteger.ONE,s=new ECCurveFp(e,t,n),o=s.decodePointHex("044A96B5688EF573284664698968C38BB913CBFC8223A628553168947D59DCC912042351377AC5FB32");return new X9ECParameters(s,o,r,i)}function secp192k1(){var e=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37"),t=BigInteger.ZERO,n=fromHex("3"),r=fromHex("FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D"),i=BigInteger.ONE,s=new ECCurveFp(e,t,n),o=s.decodePointHex("04DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D");return new X9ECParameters(s,o,r,i)}function secp192r1(){var e=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF"),t=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC"),n=fromHex("64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1"),r=fromHex("FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831"),i=BigInteger.ONE,s=new ECCurveFp(e,t,n),o=s.decodePointHex("04188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF101207192B95FFC8DA78631011ED6B24CDD573F977A11E794811");return new X9ECParameters(s,o,r,i)}function secp224r1(){var e=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001"),t=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE"),n=fromHex("B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4"),r=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D"),i=BigInteger.ONE,s=new ECCurveFp(e,t,n),o=s.decodePointHex("04B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34");return new X9ECParameters(s,o,r,i)}function secp256k1(){var e=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F"),t=BigInteger.ZERO,n=fromHex("7"),r=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141"),i=BigInteger.ONE,s=new ECCurveFp(e,t,n),o=s.decodePointHex("0479BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8");return new X9ECParameters(s,o,r,i)}function secp256r1(){var e=fromHex("FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF"),t=fromHex("FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC"),n=fromHex("5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B"),r=fromHex("FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551"),i=BigInteger.ONE,s=new ECCurveFp(e,t,n),o=s.decodePointHex("046B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C2964FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5");return new X9ECParameters(s,o,r,i)}function getSECCurveByName(e){return e=="secp128r1"?secp128r1():e=="secp160k1"?secp160k1():e=="secp160r1"?secp160r1():e=="secp192k1"?secp192k1():e=="secp192r1"?secp192r1():e=="secp224r1"?secp224r1():e=="secp256k1"?secp256k1():e=="secp256r1"?secp256r1():null}X9ECParameters.prototype.getCurve=x9getCurve,X9ECParameters.prototype.getG=x9getG,X9ECParameters.prototype.getN=x9getN,X9ECParameters.prototype.getH=x9getH;
var EventEmitter=function(){};EventEmitter.prototype.on=function(e,t,n){n||(n=this),this._listeners||(this._listeners={}),this._listeners[e]||(this._listeners[e]=[]),this._unbinders||(this._unbinders={}),this._unbinders[e]||(this._unbinders[e]=[]);var r=function(e){t.apply(n,[e])};this._unbinders[e].push(t),this._listeners[e].push(r)},EventEmitter.prototype.trigger=function(e,t){t===undefined&&(t={}),this._listeners||(this._listeners={});if(!this._listeners[e])return;var n=this._listeners[e].length;while(n--)this._listeners[e][n](t)},EventEmitter.prototype.removeListener=function(e,t){this._unbinders||(this._unbinders={});if(!this._unbinders[e])return;var n=this._unbinders[e].length;while(n--)this._unbinders[e][n]===t&&(this._unbinders[e].splice(n,1),this._listeners[e].splice(n,1))},EventEmitter.augment=function(e){for(var t in EventEmitter.prototype)e[t]||(e[t]=EventEmitter.prototype[t])};
(function(e){var t=e;"object"!=typeof module&&(t.EventEmitter=EventEmitter)})("object"==typeof module?module.exports:window.Bitcoin={});
BigInteger.valueOf=nbv,BigInteger.prototype.toByteArrayUnsigned=function(){var e=this.abs().toByteArray();return e.length?(e[0]==0&&(e=e.slice(1)),e.map(function(e){return e<0?e+256:e})):e},BigInteger.fromByteArrayUnsigned=function(e){return e.length?e[0]&128?new BigInteger([0].concat(e)):new BigInteger(e):e.valueOf(0)},BigInteger.prototype.toByteArraySigned=function(){var e=this.abs().toByteArrayUnsigned(),t=this.compareTo(BigInteger.ZERO)<0;return t?e[0]&128?e.unshift(128):e[0]|=128:e[0]&128&&e.unshift(0),e},BigInteger.fromByteArraySigned=function(e){return e[0]&128?(e[0]&=127,BigInteger.fromByteArrayUnsigned(e).negate()):BigInteger.fromByteArrayUnsigned(e)};var names=["log","debug","info","warn","error","assert","dir","dirxml","group","groupEnd","time","timeEnd","count","trace","profile","profileEnd"];"undefined"==typeof window.console&&(window.console={});for(var i=0;i<names.length;++i)"undefined"==typeof window.console[names[i]]&&(window.console[names[i]]=function(){});Bitcoin.Util={isArray:Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},makeFilledArray:function(e,t){var n=[],r=0;while(r<e)n[r++]=t;return n},numToVarInt:function(e){return e<253?[e]:e<=65536?[253,e>>>8,e&255]:e<=1?[254].concat(Crypto.util.wordsToBytes([e])):[255].concat(Crypto.util.wordsToBytes([e>>>32,e]))},valueToBigInt:function(e){return e instanceof BigInteger?e:BigInteger.fromByteArrayUnsigned(e)},formatValue:function(e){var t=this.valueToBigInt(e).toString(),n=t.length>8?t.substr(0,t.length-8):"0",r=t.length>8?t.substr(t.length-8):t;while(r.length<8)r="0"+r;r=r.replace(/0*$/,"");while(r.length<2)r+="0";return n+"."+r},parseValue:function(e){var t=e.split("."),n=t[0],r=t[1]||"0";while(r.length<8)r+="0";r=r.replace(/^0+/g,"");var i=BigInteger.valueOf(parseInt(n));return i=i.multiply(BigInteger.valueOf(1e8)),i=i.add(BigInteger.valueOf(parseInt(r))),i},sha256ripe160:function(e){return Crypto.RIPEMD160(Crypto.SHA256(e,{asBytes:!0}),{asBytes:!0})}};for(var i in Crypto.util)Crypto.util.hasOwnProperty(i)&&(Bitcoin.Util[i]=Crypto.util[i]);
(function(e){e.Base58={alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",validRegex:/^[1-9A-HJ-NP-Za-km-z]+$/,base:BigInteger.valueOf(58),encode:function(e){var n=BigInteger.fromByteArrayUnsigned(e),r=[];while(n.compareTo(t.base)>=0){var i=n.mod(t.base);r.unshift(t.alphabet[i.intValue()]),n=n.subtract(i).divide(t.base)}r.unshift(t.alphabet[n.intValue()]);for(var s=0;s<e.length;s++){if(e[s]!=0)break;r.unshift(t.alphabet[0])}return r.join("")},decode:function(e){var n=BigInteger.valueOf(0),r=0;for(var i=e.length-1;i>=0;i--){var s=t.alphabet.indexOf(e[i]);if(s<0)throw"Invalid character";n=n.add(BigInteger.valueOf(s).multiply(t.base.pow(e.length-1-i))),e[i]=="1"?r++:r=0}var o=n.toByteArrayUnsigned();while(r-->0)o.unshift(0);return o}};var t=e.Base58})("undefined"!=typeof Bitcoin?Bitcoin:module.exports);
Bitcoin.Address=function(e){"string"==typeof e&&(e=Bitcoin.Address.decodeString(e)),this.hash=e,this.version=0},Bitcoin.Address.prototype.toString=function(){var e=this.hash.slice(0);e.unshift(this.version);var t=Crypto.SHA256(Crypto.SHA256(e,{asBytes:!0}),{asBytes:!0}),n=e.concat(t.slice(0,4));return Bitcoin.Base58.encode(n)},Bitcoin.Address.prototype.getHashBase64=function(){return Crypto.util.bytesToBase64(this.hash)},Bitcoin.Address.decodeString=function(e){var t=Bitcoin.Base58.decode(e),n=t.slice(0,21),r=Crypto.SHA256(Crypto.SHA256(n,{asBytes:!0}),{asBytes:!0});if(r[0]!=t[21]||r[1]!=t[22]||r[2]!=t[23]||r[3]!=t[24])throw"Checksum validation failed!";var i=n.shift();if(i!=0)throw"Version "+i+" not supported!";return n};
function integerToBytes(e,t){var n=e.toByteArrayUnsigned();if(t<n.length)n=n.slice(n.length-t);else while(t>n.length)n.unshift(0);return n}function dmp(e){return e instanceof BigInteger||(e=e.toBigInteger()),Crypto.util.bytesToHex(e.toByteArrayUnsigned())}ECFieldElementFp.prototype.getByteLength=function(){return Math.floor((this.toBigInteger().bitLength()+7)/8)},ECPointFp.prototype.getEncoded=function(e){var t=this.getX().toBigInteger(),n=this.getY().toBigInteger(),r=integerToBytes(t,32);return e?n.isEven()?r.unshift(2):r.unshift(3):(r.unshift(4),r=r.concat(integerToBytes(n,32))),r},ECPointFp.decodeFrom=function(e,t){var n=t[0],r=t.length-1,i=t.slice(1,1+r/2),s=t.slice(1+r/2,1+r);i.unshift(0),s.unshift(0);var o=new BigInteger(i),u=new BigInteger(s);return new ECPointFp(e,e.fromBigInteger(o),e.fromBigInteger(u))},ECPointFp.prototype.add2D=function(e){if(this.isInfinity())return e;if(e.isInfinity())return this;if(this.x.equals(e.x))return this.y.equals(e.y)?this.twice():this.curve.getInfinity();var t=e.x.subtract(this.x),n=e.y.subtract(this.y),r=n.divide(t),i=r.square().subtract(this.x).subtract(e.x),s=r.multiply(this.x.subtract(i)).subtract(this.y);return new ECPointFp(this.curve,i,s)},ECPointFp.prototype.twice2D=function(){if(this.isInfinity())return this;if(this.y.toBigInteger().signum()==0)return this.curve.getInfinity();var e=this.curve.fromBigInteger(BigInteger.valueOf(2)),t=this.curve.fromBigInteger(BigInteger.valueOf(3)),n=this.x.square().multiply(t).add(this.curve.a).divide(this.y.multiply(e)),r=n.square().subtract(this.x.multiply(e)),i=n.multiply(this.x.subtract(r)).subtract(this.y);return new ECPointFp(this.curve,r,i)},ECPointFp.prototype.multiply2D=function(e){if(this.isInfinity())return this;if(e.signum()==0)return this.curve.getInfinity();var t=e,n=t.multiply(new BigInteger("3")),r=this.negate(),i=this,s;for(s=n.bitLength()-2;s>0;--s){i=i.twice();var o=n.testBit(s),u=t.testBit(s);o!=u&&(i=i.add2D(o?this:r))}return i},ECPointFp.prototype.isOnCurve=function(){var e=this.getX().toBigInteger(),t=this.getY().toBigInteger(),n=this.curve.getA().toBigInteger(),r=this.curve.getB().toBigInteger(),i=this.curve.getQ(),s=t.multiply(t).mod(i),o=e.multiply(e).multiply(e).add(n.multiply(e)).add(r).mod(i);return s.equals(o)},ECPointFp.prototype.toString=function(){return"("+this.getX().toBigInteger().toString()+","+this.getY().toBigInteger().toString()+")"},ECPointFp.prototype.validate=function(){var e=this.curve.getQ();if(this.isInfinity())throw new Error("Point is at infinity.");var t=this.getX().toBigInteger(),n=this.getY().toBigInteger();if(t.compareTo(BigInteger.ONE)<0||t.compareTo(e.subtract(BigInteger.ONE))>0)throw new Error("x coordinate out of bounds");if(n.compareTo(BigInteger.ONE)<0||n.compareTo(e.subtract(BigInteger.ONE))>0)throw new Error("y coordinate out of bounds");if(!this.isOnCurve())throw new Error("Point is not on the curve.");if(this.multiply(e).isInfinity())throw new Error("Point is not a scalar multiple of G.");return!0},Bitcoin.ECDSA=function(){function r(e,t,n,r){var i=Math.max(t.bitLength(),r.bitLength()),s=e.add2D(n),o=e.curve.getInfinity();for(var u=i-1;u>=0;--u)o=o.twice2D(),o.z=BigInteger.ONE,t.testBit(u)?r.testBit(u)?o=o.add2D(s):o=o.add2D(e):r.testBit(u)&&(o=o.add2D(n));return o}var e=getSECCurveByName("secp256k1"),t=new SecureRandom,n=null,i={getBigRandom:function(e){return(new BigInteger(e.bitLength(),t)).mod(e.subtract(BigInteger.ONE)).add(BigInteger.ONE)},sign:function(t,n){var r=n,s=e.getN(),o=BigInteger.fromByteArrayUnsigned(t);do var u=i.getBigRandom(s),a=e.getG(),f=a.multiply(u),l=f.getX().toBigInteger().mod(s);while(l.compareTo(BigInteger.ZERO)<=0);var c=u.modInverse(s).multiply(o.add(r.multiply(l))).mod(s);return i.serializeSig(l,c)},verify:function(t,n,r){var s,o;if(Bitcoin.Util.isArray(n)){var u=i.parseSig(n);s=u.r,o=u.s}else{if("object"!=typeof n||!n.r||!n.s)throw"Invalid value for signature";s=n.r,o=n.s}var a;if(r instanceof ECPointFp)a=r;else{if(!Bitcoin.Util.isArray(r))throw"Invalid format for pubkey value, must be byte array or ECPointFp";a=ECPointFp.decodeFrom(e.getCurve(),r)}var f=BigInteger.fromByteArrayUnsigned(t);return i.verifyRaw(f,s,o,a)},verifyRaw:function(t,n,r,i){var s=e.getN(),o=e.getG();if(n.compareTo(BigInteger.ONE)<0||n.compareTo(s)>=0)return!1;if(r.compareTo(BigInteger.ONE)<0||r.compareTo(s)>=0)return!1;var u=r.modInverse(s),a=t.multiply(u).mod(s),f=n.multiply(u).mod(s),l=o.multiply(a).add(i.multiply(f)),c=l.getX().toBigInteger().mod(s);return c.equals(n)},serializeSig:function(e,t){var n=e.toByteArraySigned(),r=t.toByteArraySigned(),i=[];return i.push(2),i.push(n.length),i=i.concat(n),i.push(2),i.push(r.length),i=i.concat(r),i.unshift(i.length),i.unshift(48),i},parseSig:function(e){var t;if(e[0]!=48)throw new Error("Signature not a valid DERSequence");t=2;if(e[t]!=2)throw new Error("First element in signature must be a DERInteger");var n=e.slice(t+2,t+2+e[t+1]);t+=2+e[t+1];if(e[t]!=2)throw new Error("Second element in signature must be a DERInteger");var r=e.slice(t+2,t+2+e[t+1]);t+=2+e[t+1];var i=BigInteger.fromByteArrayUnsigned(n),s=BigInteger.fromByteArrayUnsigned(r);return{r:i,s:s}},parseSigCompact:function(t){if(t.length!==65)throw"Signature has the wrong length";var n=t[0]-27;if(n<0||n>7)throw"Invalid signature type";var r=e.getN(),i=BigInteger.fromByteArrayUnsigned(t.slice(1,33)).mod(r),s=BigInteger.fromByteArrayUnsigned(t.slice(33,65)).mod(r);return{r:i,s:s,i:n}},recoverPubKey:function(t,s,o,u){u&=3;var a=u&1,f=u>>1,l=e.getN(),c=e.getG(),h=e.getCurve(),p=h.getQ(),d=h.getA().toBigInteger(),v=h.getB().toBigInteger();n||(n=p.add(BigInteger.ONE).divide(BigInteger.valueOf(4)));var m=f?t.add(l):t,g=m.multiply(m).multiply(m).add(d.multiply(m)).add(v).mod(p),y=g.modPow(n,p),b=y.isEven()?u%2:(u+1)%2,w=(y.isEven()?!a:a)?y:p.subtract(y),E=new ECPointFp(h,h.fromBigInteger(m),h.fromBigInteger(w));E.validate();var S=BigInteger.fromByteArrayUnsigned(o),x=BigInteger.ZERO.subtract(S).mod(l),T=t.modInverse(l),N=r(E,s,c,x).multiply(T);console.log("G.x: ",Crypto.util.bytesToHex(c.x.toBigInteger().toByteArrayUnsigned())),console.log("G.y: ",Crypto.util.bytesToHex(c.y.toBigInteger().toByteArrayUnsigned())),console.log("s: ",Crypto.util.bytesToHex(T.toByteArrayUnsigned())),console.log("Q.x: ",Crypto.util.bytesToHex(N.x.toBigInteger().toByteArrayUnsigned())),console.log("Q.y: ",Crypto.util.bytesToHex(N.y.toBigInteger().toByteArrayUnsigned())),N.validate();if(!i.verifyRaw(S,t,s,N))throw"Pubkey recovery unsuccessful";var C=new Bitcoin.ECKey;return C.pub=N,C},calcPubkeyRecoveryParam:function(e,t,n,r){for(var i=0;i<4;i++)try{var s=Bitcoin.ECDSA.recoverPubKey(t,n,r,i);if(s.getBitcoinAddress().toString()==e)return i}catch(o){}throw"Unable to find valid recovery factor"}};return i}();
Bitcoin.ECKey=function(){var e=Bitcoin.ECDSA,t=getSECCurveByName("secp256k1"),n=new SecureRandom,r=function(n){if(!n){var i=t.getN();this.priv=e.getBigRandom(i)}else n instanceof BigInteger?this.priv=n:Bitcoin.Util.isArray(n)?this.priv=BigInteger.fromByteArrayUnsigned(n):"string"==typeof n&&(n.length==51&&n[0]=="5"?this.priv=BigInteger.fromByteArrayUnsigned(r.decodeString(n)):this.priv=BigInteger.fromByteArrayUnsigned(Crypto.util.base64ToBytes(n)));this.compressed=!!r.compressByDefault};return r.compressByDefault=!1,r.prototype.setCompressed=function(e){this.compressed=!!e},r.prototype.getPub=function(){return this.getPubPoint().getEncoded(this.compressed)},r.prototype.getPubPoint=function(){return this.pub||(this.pub=t.getG().multiply(this.priv)),this.pub},r.prototype.getPubKeyHash=function(){return this.pubKeyHash?this.pubKeyHash:this.pubKeyHash=Bitcoin.Util.sha256ripe160(this.getPub())},r.prototype.getBitcoinAddress=function(){var e=this.getPubKeyHash(),t=new Bitcoin.Address(e);return t},r.prototype.getExportedPrivateKey=function(){var e=this.priv.toByteArrayUnsigned();while(e.length<32)e.unshift(0);e.unshift(128);var t=Crypto.SHA256(Crypto.SHA256(e,{asBytes:!0}),{asBytes:!0}),n=e.concat(t.slice(0,4));return Bitcoin.Base58.encode(n)},r.prototype.setPub=function(e){this.pub=ECPointFp.decodeFrom(t.getCurve(),e)},r.prototype.toString=function(e){return e==="base64"?Crypto.util.bytesToBase64(this.priv.toByteArrayUnsigned()):Crypto.util.bytesToHex(this.priv.toByteArrayUnsigned())},r.prototype.sign=function(t){return e.sign(t,this.priv)},r.prototype.verify=function(t,n){return e.verify(t,n,this.getPub())},r.decodeString=function(e){var t=Bitcoin.Base58.decode(e),n=t.slice(0,33),r=Crypto.SHA256(Crypto.SHA256(n,{asBytes:!0}),{asBytes:!0});if(r[0]!=t[33]||r[1]!=t[34]||r[2]!=t[35]||r[3]!=t[36])throw"Checksum validation failed!";var i=n.shift();if(i!=128)throw"Version "+i+" not supported!";return n},r}();
(function(){var e=Bitcoin.Opcode=function(e){this.code=e};e.prototype.toString=function(){return e.reverseMap[this.code]},e.map={OP_0:0,OP_FALSE:0,OP_PUSHDATA1:76,OP_PUSHDATA2:77,OP_PUSHDATA4:78,OP_1NEGATE:79,OP_RESERVED:80,OP_1:81,OP_TRUE:81,OP_2:82,OP_3:83,OP_4:84,OP_5:85,OP_6:86,OP_7:87,OP_8:88,OP_9:89,OP_10:90,OP_11:91,OP_12:92,OP_13:93,OP_14:94,OP_15:95,OP_16:96,OP_NOP:97,OP_VER:98,OP_IF:99,OP_NOTIF:100,OP_VERIF:101,OP_VERNOTIF:102,OP_ELSE:103,OP_ENDIF:104,OP_VERIFY:105,OP_RETURN:106,OP_TOALTSTACK:107,OP_FROMALTSTACK:108,OP_2DROP:109,OP_2DUP:110,OP_3DUP:111,OP_2OVER:112,OP_2ROT:113,OP_2SWAP:114,OP_IFDUP:115,OP_DEPTH:116,OP_DROP:117,OP_DUP:118,OP_NIP:119,OP_OVER:120,OP_PICK:121,OP_ROLL:122,OP_ROT:123,OP_SWAP:124,OP_TUCK:125,OP_CAT:126,OP_SUBSTR:127,OP_LEFT:128,OP_RIGHT:129,OP_SIZE:130,OP_INVERT:131,OP_AND:132,OP_OR:133,OP_XOR:134,OP_EQUAL:135,OP_EQUALVERIFY:136,OP_RESERVED1:137,OP_RESERVED2:138,OP_1ADD:139,OP_1SUB:140,OP_2MUL:141,OP_2DIV:142,OP_NEGATE:143,OP_ABS:144,OP_NOT:145,OP_0NOTEQUAL:146,OP_ADD:147,OP_SUB:148,OP_MUL:149,OP_DIV:150,OP_MOD:151,OP_LSHIFT:152,OP_RSHIFT:153,OP_BOOLAND:154,OP_BOOLOR:155,OP_NUMEQUAL:156,OP_NUMEQUALVERIFY:157,OP_NUMNOTEQUAL:158,OP_LESSTHAN:159,OP_GREATERTHAN:160,OP_LESSTHANOREQUAL:161,OP_GREATERTHANOREQUAL:162,OP_MIN:163,OP_MAX:164,OP_WITHIN:165,OP_RIPEMD160:166,OP_SHA1:167,OP_SHA256:168,OP_HASH160:169,OP_HASH256:170,OP_CODESEPARATOR:171,OP_CHECKSIG:172,OP_CHECKSIGVERIFY:173,OP_CHECKMULTISIG:174,OP_CHECKMULTISIGVERIFY:175,OP_NOP1:176,OP_NOP2:177,OP_NOP3:178,OP_NOP4:179,OP_NOP5:180,OP_NOP6:181,OP_NOP7:182,OP_NOP8:183,OP_NOP9:184,OP_NOP10:185,OP_PUBKEYHASH:253,OP_PUBKEY:254,OP_INVALIDOPCODE:255},e.reverseMap=[];for(var t in e.map)e.reverseMap[e.map[t]]=t})();
(function(){var Opcode=Bitcoin.Opcode;for(var i in Opcode.map)eval("var "+i+" = "+Opcode.map[i]+";");var Script=Bitcoin.Script=function(e){if(!e)this.buffer=[];else if("string"==typeof e)this.buffer=Crypto.util.base64ToBytes(e);else if(Bitcoin.Util.isArray(e))this.buffer=e;else{if(!(e instanceof Script))throw new Error("Invalid script");this.buffer=e.buffer}this.parse()};Script.prototype.parse=function(){function n(n){e.chunks.push(e.buffer.slice(t,t+n)),t+=n}var e=this;this.chunks=[];var t=0;while(t<this.buffer.length){var r=this.buffer[t++];r>=240&&(r=r<<8|this.buffer[t++]);var i;r>0&&r<OP_PUSHDATA1?n(r):r==OP_PUSHDATA1?(i=this.buffer[t++],n(i)):r==OP_PUSHDATA2?(i=this.buffer[t++]<<8|this.buffer[t++],n(i)):r==OP_PUSHDATA4?(i=this.buffer[t++]<<24|this.buffer[t++]<<16|this.buffer[t++]<<8|this.buffer[t++],n(i)):this.chunks.push(r)}},Script.prototype.getOutType=function(){return this.chunks[this.chunks.length-1]==OP_CHECKMULTISIG&&this.chunks[this.chunks.length-2]<=3?"Multisig":this.chunks.length==5&&this.chunks[0]==OP_DUP&&this.chunks[1]==OP_HASH160&&this.chunks[3]==OP_EQUALVERIFY&&this.chunks[4]==OP_CHECKSIG?"Address":this.chunks.length==2&&this.chunks[1]==OP_CHECKSIG?"Pubkey":"Strange"},Script.prototype.simpleOutHash=function(){switch(this.getOutType()){case"Address":return this.chunks[2];case"Pubkey":return Bitcoin.Util.sha256ripe160(this.chunks[0]);default:throw new Error("Encountered non-standard scriptPubKey")}},Script.prototype.simpleOutPubKeyHash=Script.prototype.simpleOutHash,Script.prototype.getInType=function(){return this.chunks.length==1&&Bitcoin.Util.isArray(this.chunks[0])?"Pubkey":this.chunks.length==2&&Bitcoin.Util.isArray(this.chunks[0])&&Bitcoin.Util.isArray(this.chunks[1])?"Address":"Strange"},Script.prototype.simpleInPubKey=function(){switch(this.getInType()){case"Address":return this.chunks[1];case"Pubkey":throw new Error("Script does not contain pubkey.");default:throw new Error("Encountered non-standard scriptSig")}},Script.prototype.simpleInHash=function(){return Bitcoin.Util.sha256ripe160(this.simpleInPubKey())},Script.prototype.simpleInPubKeyHash=Script.prototype.simpleInHash,Script.prototype.writeOp=function(e){this.buffer.push(e),this.chunks.push(e)},Script.prototype.writeBytes=function(e){e.length<OP_PUSHDATA1?this.buffer.push(e.length):e.length<=255?(this.buffer.push(OP_PUSHDATA1),this.buffer.push(e.length)):e.length<=65535?(this.buffer.push(OP_PUSHDATA2),this.buffer.push(e.length&255),this.buffer.push(e.length>>>8&255)):(this.buffer.push(OP_PUSHDATA4),this.buffer.push(e.length&255),this.buffer.push(e.length>>>8&255),this.buffer.push(e.length>>>16&255),this.buffer.push(e.length>>>24&255)),this.buffer=this.buffer.concat(e),this.chunks.push(e)},Script.createOutputScript=function(e){var t=new Script;return t.writeOp(OP_DUP),t.writeOp(OP_HASH160),t.writeBytes(e.hash),t.writeOp(OP_EQUALVERIFY),t.writeOp(OP_CHECKSIG),t},Script.prototype.extractAddresses=function(e){switch(this.getOutType()){case"Address":return e.push(new Address(this.chunks[2])),1;case"Pubkey":return e.push(new Address(Util.sha256ripe160(this.chunks[0]))),1;case"Multisig":for(var t=1;t<this.chunks.length-2;++t)e.push(new Address(Util.sha256ripe160(this.chunks[t])));return this.chunks[0]-OP_1+1;default:throw new Error("Encountered non-standard scriptPubKey")}},Script.createMultiSigOutputScript=function(e,t){var n=new Bitcoin.Script;n.writeOp(OP_1+e-1);for(var r=0;r<t.length;++r)n.writeBytes(t[r]);return n.writeOp(OP_1+t.length-1),n.writeOp(OP_CHECKMULTISIG),n},Script.createInputScript=function(e,t){var n=new Script;return n.writeBytes(e),n.writeBytes(t),n},Script.prototype.clone=function(){return new Script(this.buffer)}})();
(function(){var e=Bitcoin.Script,t=Bitcoin.Transaction=function(e){this.version=1,this.lock_time=0,this.ins=[],this.outs=[],this.timestamp=null,this.block=null;if(e){e.hash&&(this.hash=e.hash),e.version&&(this.version=e.version),e.lock_time&&(this.lock_time=e.lock_time);if(e.ins&&e.ins.length)for(var t=0;t<e.ins.length;t++)this.addInput(new u(e.ins[t]));if(e.outs&&e.outs.length)for(var t=0;t<e.outs.length;t++)this.addOutput(new a(e.outs[t]));e.timestamp&&(this.timestamp=e.timestamp),e.block&&(this.block=e.block)}};t.objectify=function(e){var n=[];for(var r=0;r<e.length;r++)n.push(new t(e[r]));return n},t.prototype.addInput=function(e,t){arguments[0]instanceof u?this.ins.push(arguments[0]):this.ins.push(new u({outpoint:{hash:e.hash,index:t},script:new Bitcoin.Script,sequence:4294967295}))},t.prototype.addOutput=function(t,n){if(arguments[0]instanceof a)this.outs.push(arguments[0]);else{if(n instanceof BigInteger){n=n.toByteArrayUnsigned().reverse();while(n.length<8)n.push(0)}else Bitcoin.Util.isArray(n);this.outs.push(new a({value:n,script:e.createOutputScript(t)}))}},t.prototype.serialize=function(){var e=[];e=e.concat(Crypto.util.wordsToBytes([parseInt(this.version)]).reverse()),e=e.concat(Bitcoin.Util.numToVarInt(this.ins.length));for(var t=0;t<this.ins.length;t++){var n=this.ins[t];e=e.concat(Crypto.util.base64ToBytes(n.outpoint.hash)),e=e.concat(Crypto.util.wordsToBytes([parseInt(n.outpoint.index)]).reverse());var r=n.script.buffer;e=e.concat(Bitcoin.Util.numToVarInt(r.length)),e=e.concat(r),e=e.concat(Crypto.util.wordsToBytes([parseInt(n.sequence)]).reverse())}e=e.concat(Bitcoin.Util.numToVarInt(this.outs.length));for(var t=0;t<this.outs.length;t++){var i=this.outs[t];e=e.concat(i.value);var r=i.script.buffer;e=e.concat(Bitcoin.Util.numToVarInt(r.length)),e=e.concat(r)}return e=e.concat(Crypto.util.wordsToBytes([parseInt(this.lock_time)]).reverse()),e};var n=171,r=1,i=2,s=3,o=80;t.prototype.hashTransactionForSignature=function(t,n,r){var u=this.clone();for(var a=0;a<u.ins.length;a++)u.ins[a].script=new e;u.ins[n].script=t;if((r&31)==i){u.outs=[];for(var a=0;a<u.ins.length;a++)a!=n&&(u.ins[a].sequence=0)}else(r&31)==s;r&o&&(u.ins=[u.ins[n]]);var f=u.serialize();f=f.concat(Crypto.util.wordsToBytes([parseInt(r)]).reverse());var l=Crypto.SHA256(f,{asBytes:!0});return Crypto.SHA256(l,{asBytes:!0})},t.prototype.getHash=function(){var e=this.serialize();return Crypto.SHA256(Crypto.SHA256(e,{asBytes:!0}),{asBytes:!0})},t.prototype.clone=function(){var e=new t;e.version=this.version,e.lock_time=this.lock_time;for(var n=0;n<this.ins.length;n++){var r=this.ins[n].clone();e.addInput(r)}for(var n=0;n<this.outs.length;n++){var i=this.outs[n].clone();e.addOutput(i)}return e},t.prototype.analyze=function(e){if(e instanceof Bitcoin.Wallet){var t=!0,n=!0,r=null,i=null,s=null;for(var o=this.outs.length-1;o>=0;o--){var u=this.outs[o],a=u.script.simpleOutPubKeyHash();e.hasHash(a)?i=a:n=!1,r=a}for(var o=this.ins.length-1;o>=0;o--){var f=this.ins[o];s=f.script.simpleInPubKeyHash();if(!e.hasHash(s)){t=!1;break}}var l=this.calcImpact(e),c={};return c.impact=l,l.sign>0&&l.value.compareTo(BigInteger.ZERO)>0?(c.type="recv",c.addr=new Bitcoin.Address(i)):t&&n?c.type="self":t?(c.type="sent",c.addr=new Bitcoin.Address(r)):c.type="other",c}return null},t.prototype.getDescription=function(e){var t=this.analyze(e);if(!t)return"";switch(t.type){case"recv":return"Received with "+t.addr;case"sent":return"Payment to "+t.addr;case"self":return"Payment to yourself";case"other":default:return""}},t.prototype.getTotalOutValue=function(){var e=BigInteger.ZERO;for(var t=0;t<this.outs.length;t++){var n=this.outs[t];e=e.add(Bitcoin.Util.valueToBigInt(n.value))}return e},t.prototype.getTotalValue=t.prototype.getTotalOutValue,t.prototype.calcImpact=function(e){if(e instanceof Bitcoin.Wallet){var t=BigInteger.ZERO;for(var n=0;n<this.outs.length;n++){var r=this.outs[n],i=Crypto.util.bytesToBase64(r.script.simpleOutPubKeyHash());e.hasHash(i)&&(t=t.add(Bitcoin.Util.valueToBigInt(r.value)))}var s=BigInteger.ZERO;for(var n=0;n<this.ins.length;n++){var o=this.ins[n],i=Crypto.util.bytesToBase64(o.script.simpleInPubKeyHash());if(e.hasHash(i)){var u=e.txIndex[o.outpoint.hash];u&&(s=s.add(Bitcoin.Util.valueToBigInt(u.outs[o.outpoint.index].value)))}}return t.compareTo(s)>=0?{sign:1,value:t.subtract(s)}:{sign:-1,value:s.subtract(t)}}return BigInteger.ZERO};var u=Bitcoin.TransactionIn=function(t){this.outpoint=t.outpoint,t.script instanceof e?this.script=t.script:this.script=new e(t.script),this.sequence=t.sequence};u.prototype.clone=function(){var e=new u({outpoint:{hash:this.outpoint.hash,index:this.outpoint.index},script:this.script.clone(),sequence:this.sequence});return e};var a=Bitcoin.TransactionOut=function(t){t.script instanceof e?this.script=t.script:this.script=new e(t.script);if(Bitcoin.Util.isArray(t.value))this.value=t.value;else if("string"==typeof t.value){var n=(new BigInteger(t.value,10)).toString(16);while(n.length<16)n="0"+n;this.value=Crypto.util.hexToBytes(n)}};a.prototype.clone=function(){var e=new a({script:this.script.clone(),value:this.value.slice(0)});return e}})();
Bitcoin.Wallet=function(){var e=Bitcoin.Script,t=Bitcoin.TransactionIn,n=Bitcoin.TransactionOut,r=function(){var e=[];this.addressHashes=[],this.txIndex={},this.unspentOuts=[],this.addressPointer=0,this.addKey=function(t,n){t instanceof Bitcoin.ECKey||(t=new Bitcoin.ECKey(t)),e.push(t),n&&("string"==typeof n&&(n=Crypto.util.base64ToBytes(n)),t.setPub(n)),this.addressHashes.push(t.getBitcoinAddress().getHashBase64())},this.addKeys=function(e,t){"string"==typeof e&&(e=e.split(",")),"string"==typeof t&&(t=t.split(","));var n;if(Array.isArray(t)&&e.length==t.length)for(n=0;n<e.length;n++)this.addKey(e[n],t[n]);else for(n=0;n<e.length;n++)this.addKey(e[n])},this.getKeys=function(){var t=[];for(var n=0;n<e.length;n++)t.push(e[n].toString("base64"));return t},this.getPubKeys=function(){var t=[];for(var n=0;n<e.length;n++)t.push(Crypto.util.bytesToBase64(e[n].getPub()));return t},this.clear=function(){e=[]},this.getLength=function(){return e.length},this.getAllAddresses=function(){var t=[];for(var n=0;n<e.length;n++)t.push(e[n].getBitcoinAddress());return t},this.getCurAddress=function(){return e[this.addressPointer]?e[this.addressPointer].getBitcoinAddress():null},this.getNextAddress=function(){return this.addressPointer++,e[this.addressPointer]||this.generateAddress(),e[this.addressPointer].getBitcoinAddress()},this.signWithKey=function(t,n){t=Crypto.util.bytesToBase64(t);for(var r=0;r<this.addressHashes.length;r++)if(this.addressHashes[r]==t)return e[r].sign(n);throw new Error("Missing key for signature")},this.getPubKeyFromHash=function(t){t=Crypto.util.bytesToBase64(t);for(var n=0;n<this.addressHashes.length;n++)if(this.addressHashes[n]==t)return e[n].getPub();throw new Error("Hash unknown")}};return r.prototype.generateAddress=function(){this.addKey(new Bitcoin.ECKey)},r.prototype.process=function(e){if(this.txIndex[e.hash])return;var r,i,s;for(r=0;r<e.outs.length;r++){var o=new n(e.outs[r]);s=Crypto.util.bytesToBase64(o.script.simpleOutPubKeyHash());for(i=0;i<this.addressHashes.length;i++)if(this.addressHashes[i]===s){this.unspentOuts.push({tx:e,index:r,out:o});break}}for(r=0;r<e.ins.length;r++){var u=new t(e.ins[r]),a=u.script.simpleInPubKey();s=Crypto.util.bytesToBase64(Bitcoin.Util.sha256ripe160(a));for(i=0;i<this.addressHashes.length;i++)if(this.addressHashes[i]===s){for(var f=0;f<this.unspentOuts.length;f++)u.outpoint.hash==this.unspentOuts[f].tx.hash&&u.outpoint.index==this.unspentOuts[f].index&&this.unspentOuts.splice(f,1);break}}this.txIndex[e.hash]=e},r.prototype.getBalance=function(){var e=BigInteger.valueOf(0);for(var t=0;t<this.unspentOuts.length;t++){var n=this.unspentOuts[t].out;e=e.add(Bitcoin.Util.valueToBigInt(n.value))}return e},r.prototype.createSend=function(t,n,r){var i=[],s=n.add(r),o=BigInteger.ZERO,u;for(u=0;u<this.unspentOuts.length;u++){i.push(this.unspentOuts[u]),o=o.add(Bitcoin.Util.valueToBigInt(this.unspentOuts[u].out.value));if(o.compareTo(s)>=0)break}if(o.compareTo(s)<0)throw new Error("Insufficient funds.");var a=o.subtract(s),f=new Bitcoin.Transaction;for(u=0;u<i.length;u++)f.addInput(i[u].tx,i[u].index);f.addOutput(t,n),a.compareTo(BigInteger.ZERO)>0&&f.addOutput(this.getNextAddress(),a);var l=1;for(u=0;u<f.ins.length;u++){var c=f.hashTransactionForSignature(i[u].out.script,u,l),h=i[u].out.script.simpleOutPubKeyHash(),p=this.signWithKey(h,c);p.push(parseInt(l,10)),f.ins[u].script=e.createInputScript(p,this.getPubKeyFromHash(h))}return f},r.prototype.clearTransactions=function(){this.txIndex={},this.unspentOuts=[]},r.prototype.hasHash=function(e){Bitcoin.Util.isArray(e)&&(e=Crypto.util.bytesToBase64(e));for(var t=0;t<this.addressHashes.length;t++)if(this.addressHashes[t]===e)return!0;return!1},r}();
var TransactionDatabase=function(){this.txs=[],this.txIndex={}};EventEmitter.augment(TransactionDatabase.prototype),TransactionDatabase.prototype.addTransaction=function(e){this.addTransactionNoUpdate(e),$(this).trigger("update")},TransactionDatabase.prototype.addTransactionNoUpdate=function(e){if(this.txIndex[e.hash])return;this.txs.push(new Bitcoin.Transaction(e)),this.txIndex[e.hash]=e},TransactionDatabase.prototype.removeTransaction=function(e){this.removeTransactionNoUpdate(e),$(this).trigger("update")},TransactionDatabase.prototype.removeTransactionNoUpdate=function(e){var t=this.txIndex[e];if(!t)return;for(var n=0,r=this.txs.length;n<r;n++)if(this.txs[n].hash==e){this.txs.splice(n,1);break}delete this.txIndex[e]},TransactionDatabase.prototype.loadTransactions=function(e){for(var t=0;t<e.length;t++)this.addTransactionNoUpdate(e[t]);$(this).trigger("update")},TransactionDatabase.prototype.getTransactions=function(){return this.txs},TransactionDatabase.prototype.clear=function(){this.txs=[],this.txIndex={},$(this).trigger("update")}

//---------------------------------------------------------------------
//
// QR Code Generator for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//  http://www.opensource.org/licenses/mit-license.php
//
// The word 'QR Code' is registered trademark of
// DENSO WAVE INCORPORATED
//  http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------

var qrcode = function() {

  //---------------------------------------------------------------------
  // qrcode
  //---------------------------------------------------------------------

  /**
   * qrcode
   * @param typeNumber 1 to 10
   * @param errorCorrectLevel 'L','M','Q','H'
   */
  var qrcode = function(typeNumber, errorCorrectLevel) {

    var PAD0 = 0xEC;
    var PAD1 = 0x11;

    var _typeNumber = typeNumber;
    var _errorCorrectLevel = QRErrorCorrectLevel[errorCorrectLevel];
    var _modules = null;
    var _moduleCount = 0;
    var _dataCache = null;
    var _dataList = new Array();

    var _this = {};

    var makeImpl = function(test, maskPattern) {

      _moduleCount = _typeNumber * 4 + 17;
      _modules = function(moduleCount) {
        var modules = new Array(moduleCount);
        for (var row = 0; row < moduleCount; row += 1) {
          modules[row] = new Array(moduleCount);
          for (var col = 0; col < moduleCount; col += 1) {
            modules[row][col] = null;
          }
        }
        return modules;
      }(_moduleCount);

      setupPositionProbePattern(0, 0);
      setupPositionProbePattern(_moduleCount - 7, 0);
      setupPositionProbePattern(0, _moduleCount - 7);
      setupPositionAdjustPattern();
      setupTimingPattern();
      setupTypeInfo(test, maskPattern);

      if (_typeNumber >= 7) {
        setupTypeNumber(test);
      }

      if (_dataCache == null) {
        _dataCache = createData(_typeNumber, _errorCorrectLevel, _dataList);
      }

      mapData(_dataCache, maskPattern);
    };

    var setupPositionProbePattern = function(row, col) {

      for (var r = -1; r <= 7; r += 1) {

        if (row + r <= -1 || _moduleCount <= row + r) continue;

        for (var c = -1; c <= 7; c += 1) {

          if (col + c <= -1 || _moduleCount <= col + c) continue;

          if ( (0 <= r && r <= 6 && (c == 0 || c == 6) )
              || (0 <= c && c <= 6 && (r == 0 || r == 6) )
              || (2 <= r && r <= 4 && 2 <= c && c <= 4) ) {
            _modules[row + r][col + c] = true;
          } else {
            _modules[row + r][col + c] = false;
          }
        }
      }
    };

    var getBestMaskPattern = function() {

      var minLostPoint = 0;
      var pattern = 0;

      for (var i = 0; i < 8; i += 1) {

        makeImpl(true, i);

        var lostPoint = QRUtil.getLostPoint(_this);

        if (i == 0 || minLostPoint > lostPoint) {
          minLostPoint = lostPoint;
          pattern = i;
        }
      }

      return pattern;
    };

    var setupTimingPattern = function() {

      for (var r = 8; r < _moduleCount - 8; r += 1) {
        if (_modules[r][6] != null) {
          continue;
        }
        _modules[r][6] = (r % 2 == 0);
      }

      for (var c = 8; c < _moduleCount - 8; c += 1) {
        if (_modules[6][c] != null) {
          continue;
        }
        _modules[6][c] = (c % 2 == 0);
      }
    };

    var setupPositionAdjustPattern = function() {

      var pos = QRUtil.getPatternPosition(_typeNumber);

      for (var i = 0; i < pos.length; i += 1) {

        for (var j = 0; j < pos.length; j += 1) {

          var row = pos[i];
          var col = pos[j];

          if (_modules[row][col] != null) {
            continue;
          }

          for (var r = -2; r <= 2; r += 1) {

            for (var c = -2; c <= 2; c += 1) {

              if (r == -2 || r == 2 || c == -2 || c == 2
                  || (r == 0 && c == 0) ) {
                _modules[row + r][col + c] = true;
              } else {
                _modules[row + r][col + c] = false;
              }
            }
          }
        }
      }
    };

    var setupTypeNumber = function(test) {

      var bits = QRUtil.getBCHTypeNumber(_typeNumber);

      for (var i = 0; i < 18; i += 1) {
        var mod = (!test && ( (bits >> i) & 1) == 1);
        _modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = mod;
      }

      for (var i = 0; i < 18; i += 1) {
        var mod = (!test && ( (bits >> i) & 1) == 1);
        _modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
      }
    };

    var setupTypeInfo = function(test, maskPattern) {

      var data = (_errorCorrectLevel << 3) | maskPattern;
      var bits = QRUtil.getBCHTypeInfo(data);

      // vertical
      for (var i = 0; i < 15; i += 1) {

        var mod = (!test && ( (bits >> i) & 1) == 1);

        if (i < 6) {
          _modules[i][8] = mod;
        } else if (i < 8) {
          _modules[i + 1][8] = mod;
        } else {
          _modules[_moduleCount - 15 + i][8] = mod;
        }
      }

      // horizontal
      for (var i = 0; i < 15; i += 1) {

        var mod = (!test && ( (bits >> i) & 1) == 1);

        if (i < 8) {
          _modules[8][_moduleCount - i - 1] = mod;
        } else if (i < 9) {
          _modules[8][15 - i - 1 + 1] = mod;
        } else {
          _modules[8][15 - i - 1] = mod;
        }
      }

      // fixed module
      _modules[_moduleCount - 8][8] = (!test);
    };

    var mapData = function(data, maskPattern) {

      var inc = -1;
      var row = _moduleCount - 1;
      var bitIndex = 7;
      var byteIndex = 0;
      var maskFunc = QRUtil.getMaskFunction(maskPattern);

      for (var col = _moduleCount - 1; col > 0; col -= 2) {

        if (col == 6) col -= 1;

        while (true) {

          for (var c = 0; c < 2; c += 1) {

            if (_modules[row][col - c] == null) {

              var dark = false;

              if (byteIndex < data.length) {
                dark = ( ( (data[byteIndex] >>> bitIndex) & 1) == 1);
              }

              var mask = maskFunc(row, col - c);

              if (mask) {
                dark = !dark;
              }

              _modules[row][col - c] = dark;
              bitIndex -= 1;

              if (bitIndex == -1) {
                byteIndex += 1;
                bitIndex = 7;
              }
            }
          }

          row += inc;

          if (row < 0 || _moduleCount <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    };

    var createBytes = function(buffer, rsBlocks) {

      var offset = 0;

      var maxDcCount = 0;
      var maxEcCount = 0;

      var dcdata = new Array(rsBlocks.length);
      var ecdata = new Array(rsBlocks.length);

      for (var r = 0; r < rsBlocks.length; r += 1) {

        var dcCount = rsBlocks[r].dataCount;
        var ecCount = rsBlocks[r].totalCount - dcCount;

        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);

        dcdata[r] = new Array(dcCount);

        for (var i = 0; i < dcdata[r].length; i += 1) {
          dcdata[r][i] = 0xff & buffer.getBuffer()[i + offset];
        }
        offset += dcCount;

        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        var rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);

        var modPoly = rawPoly.mod(rsPoly);
        ecdata[r] = new Array(rsPoly.getLength() - 1);
        for (var i = 0; i < ecdata[r].length; i += 1) {
          var modIndex = i + modPoly.getLength() - ecdata[r].length;
          ecdata[r][i] = (modIndex >= 0)? modPoly.get(modIndex) : 0;
        }
      }

      var totalCodeCount = 0;
      for (var i = 0; i < rsBlocks.length; i += 1) {
        totalCodeCount += rsBlocks[i].totalCount;
      }

      var data = new Array(totalCodeCount);
      var index = 0;

      for (var i = 0; i < maxDcCount; i += 1) {
        for (var r = 0; r < rsBlocks.length; r += 1) {
          if (i < dcdata[r].length) {
            data[index] = dcdata[r][i];
            index += 1;
          }
        }
      }

      for (var i = 0; i < maxEcCount; i += 1) {
        for (var r = 0; r < rsBlocks.length; r += 1) {
          if (i < ecdata[r].length) {
            data[index] = ecdata[r][i];
            index += 1;
          }
        }
      }

      return data;
    };

    var createData = function(typeNumber, errorCorrectLevel, dataList) {

      var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);

      var buffer = qrBitBuffer();

      for (var i = 0; i < dataList.length; i += 1) {
        var data = dataList[i];
        buffer.put(data.getMode(), 4);
        buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
        data.write(buffer);
      }

      // calc num max data.
      var totalDataCount = 0;
      for (var i = 0; i < rsBlocks.length; i += 1) {
        totalDataCount += rsBlocks[i].dataCount;
      }

      if (buffer.getLengthInBits() > totalDataCount * 8) {
        throw new Error('code length overflow. ('
          + buffer.getLengthInBits()
          + '>'
          + totalDataCount * 8
          + ')');
      }

      // end code
      if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
        buffer.put(0, 4);
      }

      // padding
      while (buffer.getLengthInBits() % 8 != 0) {
        buffer.putBit(false);
      }

      // padding
      while (true) {

        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(PAD0, 8);

        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(PAD1, 8);
      }

      return createBytes(buffer, rsBlocks);
    };

    _this.addData = function(data) {
      var newData = qr8BitByte(data);
      _dataList.push(newData);
      _dataCache = null;
    };

    _this.isDark = function(row, col) {
      if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {
        throw new Error(row + ',' + col);
      }
      return _modules[row][col];
    };

    _this.getModuleCount = function() {
      return _moduleCount;
    };

    _this.make = function() {
      makeImpl(false, getBestMaskPattern() );
    };

    _this.createTableTag = function(cellSize, margin) {

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      var qrHtml = '';

      qrHtml += '<table style="';
      qrHtml += ' border-width: 0px; border-style: none;';
      qrHtml += ' border-collapse: collapse;';
      qrHtml += ' padding: 0px; margin: ' + margin + 'px;';
      qrHtml += '">';
      qrHtml += '<tbody>';

      for (var r = 0; r < _this.getModuleCount(); r += 1) {

        qrHtml += '<tr>';

        for (var c = 0; c < _this.getModuleCount(); c += 1) {
          qrHtml += '<td style="';
          qrHtml += ' border-width: 0px; border-style: none;';
          qrHtml += ' border-collapse: collapse;';
          qrHtml += ' padding: 0px; margin: 0px;';
          qrHtml += ' width: ' + cellSize + 'px;';
          qrHtml += ' height: ' + cellSize + 'px;';
          qrHtml += ' background-color: ';
          qrHtml += _this.isDark(r, c)? '#000000' : '#ffffff';
          qrHtml += ';';
          qrHtml += '"/>';
        }

        qrHtml += '</tr>';
      }

      qrHtml += '</tbody>';
      qrHtml += '</table>';

      return qrHtml;
    };

    _this.createImgTag = function(cellSize, margin) {

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;

      return createImgTag(size, size, function(x, y) {
        if (min <= x && x < max && min <= y && y < max) {
          var c = Math.floor( (x - min) / cellSize);
          var r = Math.floor( (y - min) / cellSize);
          return _this.isDark(r, c)? 0 : 1;
        } else {
          return 1;
        }
      } );
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qrcode.stringToBytes
  //---------------------------------------------------------------------

  qrcode.stringToBytes = function(s) {
    var bytes = new Array();
    for (var i = 0; i < s.length; i += 1) {
      var c = s.charCodeAt(i);
      bytes.push(c & 0xff);
    }
    return bytes;
  };

  //---------------------------------------------------------------------
  // qrcode.createStringToBytes
  //---------------------------------------------------------------------

  /**
   * @param unicodeData base64 string of byte array.
   * [16bit Unicode],[16bit Bytes], ...
   * @param numChars
   */
  qrcode.createStringToBytes = function(unicodeData, numChars) {

    // create conversion map.

    var unicodeMap = function() {

      var bin = base64DecodeInputStream(unicodeData);
      var read = function() {
        var b = bin.read();
        if (b == -1) throw new Error();
        return b;
      };

      var count = 0;
      var unicodeMap = {};
      while (true) {
        var b0 = bin.read();
        if (b0 == -1) break;
        var b1 = read();
        var b2 = read();
        var b3 = read();
        var k = String.fromCharCode( (b0 << 8) | b1);
        var v = (b2 << 8) | b3;
        unicodeMap[k] = v;
        count += 1;
      }
      if (count != numChars) {
        throw new Error(count + ' != ' + numChars);
      }

      return unicodeMap;
    }();

    var unknownChar = '?'.charCodeAt(0);

    return function(s) {
      var bytes = new Array();
      for (var i = 0; i < s.length; i += 1) {
        var c = s.charCodeAt(i);
        if (c < 128) {
          bytes.push(c);
        } else {
          var b = unicodeMap[s.charAt(i)];
          if (typeof b == 'number') {
            if ( (b & 0xff) == b) {
              // 1byte
              bytes.push(b);
            } else {
              // 2bytes
              bytes.push(b >>> 8);
              bytes.push(b & 0xff);
            }
          } else {
            bytes.push(unknownChar);
          }
        }
      }
      return bytes;
    };
  };

  //---------------------------------------------------------------------
  // QRMode
  //---------------------------------------------------------------------

  var QRMode = {
    MODE_NUMBER :   1 << 0,
    MODE_ALPHA_NUM :  1 << 1,
    MODE_8BIT_BYTE :  1 << 2,
    MODE_KANJI :    1 << 3
  };

  //---------------------------------------------------------------------
  // QRErrorCorrectLevel
  //---------------------------------------------------------------------

  var QRErrorCorrectLevel = {
    L : 1,
    M : 0,
    Q : 3,
    H : 2
  };

  //---------------------------------------------------------------------
  // QRMaskPattern
  //---------------------------------------------------------------------

  var QRMaskPattern = {
    PATTERN000 : 0,
    PATTERN001 : 1,
    PATTERN010 : 2,
    PATTERN011 : 3,
    PATTERN100 : 4,
    PATTERN101 : 5,
    PATTERN110 : 6,
    PATTERN111 : 7
  };

  //---------------------------------------------------------------------
  // QRUtil
  //---------------------------------------------------------------------

  var QRUtil = function() {

    var PATTERN_POSITION_TABLE = [
      [],
      [6, 18],
      [6, 22],
      [6, 26],
      [6, 30],
      [6, 34],
      [6, 22, 38],
      [6, 24, 42],
      [6, 26, 46],
      [6, 28, 50],
      [6, 30, 54],
      [6, 32, 58],
      [6, 34, 62],
      [6, 26, 46, 66],
      [6, 26, 48, 70],
      [6, 26, 50, 74],
      [6, 30, 54, 78],
      [6, 30, 56, 82],
      [6, 30, 58, 86],
      [6, 34, 62, 90],
      [6, 28, 50, 72, 94],
      [6, 26, 50, 74, 98],
      [6, 30, 54, 78, 102],
      [6, 28, 54, 80, 106],
      [6, 32, 58, 84, 110],
      [6, 30, 58, 86, 114],
      [6, 34, 62, 90, 118],
      [6, 26, 50, 74, 98, 122],
      [6, 30, 54, 78, 102, 126],
      [6, 26, 52, 78, 104, 130],
      [6, 30, 56, 82, 108, 134],
      [6, 34, 60, 86, 112, 138],
      [6, 30, 58, 86, 114, 142],
      [6, 34, 62, 90, 118, 146],
      [6, 30, 54, 78, 102, 126, 150],
      [6, 24, 50, 76, 102, 128, 154],
      [6, 28, 54, 80, 106, 132, 158],
      [6, 32, 58, 84, 110, 136, 162],
      [6, 26, 54, 82, 110, 138, 166],
      [6, 30, 58, 86, 114, 142, 170]
    ];
    var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
    var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
    var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);

    var _this = {};

    var getBCHDigit = function(data) {
      var digit = 0;
      while (data != 0) {
        digit += 1;
        data >>>= 1;
      }
      return digit;
    };

    _this.getBCHTypeInfo = function(data) {
      var d = data << 10;
      while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
        d ^= (G15 << (getBCHDigit(d) - getBCHDigit(G15) ) );
      }
      return ( (data << 10) | d) ^ G15_MASK;
    };

    _this.getBCHTypeNumber = function(data) {
      var d = data << 12;
      while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
        d ^= (G18 << (getBCHDigit(d) - getBCHDigit(G18) ) );
      }
      return (data << 12) | d;
    };

    _this.getPatternPosition = function(typeNumber) {
      return PATTERN_POSITION_TABLE[typeNumber - 1];
    };

    _this.getMaskFunction = function(maskPattern) {

      switch (maskPattern) {

      case QRMaskPattern.PATTERN000 :
        return function(i, j) { return (i + j) % 2 == 0; };
      case QRMaskPattern.PATTERN001 :
        return function(i, j) { return i % 2 == 0; };
      case QRMaskPattern.PATTERN010 :
        return function(i, j) { return j % 3 == 0; };
      case QRMaskPattern.PATTERN011 :
        return function(i, j) { return (i + j) % 3 == 0; };
      case QRMaskPattern.PATTERN100 :
        return function(i, j) { return (Math.floor(i / 2) + Math.floor(j / 3) ) % 2 == 0; };
      case QRMaskPattern.PATTERN101 :
        return function(i, j) { return (i * j) % 2 + (i * j) % 3 == 0; };
      case QRMaskPattern.PATTERN110 :
        return function(i, j) { return ( (i * j) % 2 + (i * j) % 3) % 2 == 0; };
      case QRMaskPattern.PATTERN111 :
        return function(i, j) { return ( (i * j) % 3 + (i + j) % 2) % 2 == 0; };

      default :
        throw new Error('bad maskPattern:' + maskPattern);
      }
    };

    _this.getErrorCorrectPolynomial = function(errorCorrectLength) {
      var a = qrPolynomial([1], 0);
      for (var i = 0; i < errorCorrectLength; i += 1) {
        a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0) );
      }
      return a;
    };

    _this.getLengthInBits = function(mode, type) {

      if (1 <= type && type < 10) {

        // 1 - 9

        switch(mode) {
        case QRMode.MODE_NUMBER   : return 10;
        case QRMode.MODE_ALPHA_NUM  : return 9;
        case QRMode.MODE_8BIT_BYTE  : return 8;
        case QRMode.MODE_KANJI    : return 8;
        default :
          throw new Error('mode:' + mode);
        }

      } else if (type < 27) {

        // 10 - 26

        switch(mode) {
        case QRMode.MODE_NUMBER   : return 12;
        case QRMode.MODE_ALPHA_NUM  : return 11;
        case QRMode.MODE_8BIT_BYTE  : return 16;
        case QRMode.MODE_KANJI    : return 10;
        default :
          throw new Error('mode:' + mode);
        }

      } else if (type < 41) {

        // 27 - 40

        switch(mode) {
        case QRMode.MODE_NUMBER   : return 14;
        case QRMode.MODE_ALPHA_NUM  : return 13;
        case QRMode.MODE_8BIT_BYTE  : return 16;
        case QRMode.MODE_KANJI    : return 12;
        default :
          throw new Error('mode:' + mode);
        }

      } else {
        throw new Error('type:' + type);
      }
    };

    _this.getLostPoint = function(qrcode) {

      var moduleCount = qrcode.getModuleCount();

      var lostPoint = 0;

      // LEVEL1

      for (var row = 0; row < moduleCount; row += 1) {
        for (var col = 0; col < moduleCount; col += 1) {

          var sameCount = 0;
          var dark = qrcode.isDark(row, col);

          for (var r = -1; r <= 1; r += 1) {

            if (row + r < 0 || moduleCount <= row + r) {
              continue;
            }

            for (var c = -1; c <= 1; c += 1) {

              if (col + c < 0 || moduleCount <= col + c) {
                continue;
              }

              if (r == 0 && c == 0) {
                continue;
              }

              if (dark == qrcode.isDark(row + r, col + c) ) {
                sameCount += 1;
              }
            }
          }

          if (sameCount > 5) {
            lostPoint += (3 + sameCount - 5);
          }
        }
      };

      // LEVEL2

      for (var row = 0; row < moduleCount - 1; row += 1) {
        for (var col = 0; col < moduleCount - 1; col += 1) {
          var count = 0;
          if (qrcode.isDark(row, col) ) count += 1;
          if (qrcode.isDark(row + 1, col) ) count += 1;
          if (qrcode.isDark(row, col + 1) ) count += 1;
          if (qrcode.isDark(row + 1, col + 1) ) count += 1;
          if (count == 0 || count == 4) {
            lostPoint += 3;
          }
        }
      }

      // LEVEL3

      for (var row = 0; row < moduleCount; row += 1) {
        for (var col = 0; col < moduleCount - 6; col += 1) {
          if (qrcode.isDark(row, col)
              && !qrcode.isDark(row, col + 1)
              &&  qrcode.isDark(row, col + 2)
              &&  qrcode.isDark(row, col + 3)
              &&  qrcode.isDark(row, col + 4)
              && !qrcode.isDark(row, col + 5)
              &&  qrcode.isDark(row, col + 6) ) {
            lostPoint += 40;
          }
        }
      }

      for (var col = 0; col < moduleCount; col += 1) {
        for (var row = 0; row < moduleCount - 6; row += 1) {
          if (qrcode.isDark(row, col)
              && !qrcode.isDark(row + 1, col)
              &&  qrcode.isDark(row + 2, col)
              &&  qrcode.isDark(row + 3, col)
              &&  qrcode.isDark(row + 4, col)
              && !qrcode.isDark(row + 5, col)
              &&  qrcode.isDark(row + 6, col) ) {
            lostPoint += 40;
          }
        }
      }

      // LEVEL4

      var darkCount = 0;

      for (var col = 0; col < moduleCount; col += 1) {
        for (var row = 0; row < moduleCount; row += 1) {
          if (qrcode.isDark(row, col) ) {
            darkCount += 1;
          }
        }
      }

      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
      lostPoint += ratio * 10;

      return lostPoint;
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // QRMath
  //---------------------------------------------------------------------

  var QRMath = function() {

    var EXP_TABLE = new Array(256);
    var LOG_TABLE = new Array(256);

    // initialize tables
    for (var i = 0; i < 8; i += 1) {
      EXP_TABLE[i] = 1 << i;
    }
    for (var i = 8; i < 256; i += 1) {
      EXP_TABLE[i] = EXP_TABLE[i - 4]
        ^ EXP_TABLE[i - 5]
        ^ EXP_TABLE[i - 6]
        ^ EXP_TABLE[i - 8];
    }
    for (var i = 0; i < 255; i += 1) {
      LOG_TABLE[EXP_TABLE[i] ] = i;
    }

    var _this = {};

    _this.glog = function(n) {

      if (n < 1) {
        throw new Error('glog(' + n + ')');
      }

      return LOG_TABLE[n];
    };

    _this.gexp = function(n) {

      while (n < 0) {
        n += 255;
      }

      while (n >= 256) {
        n -= 255;
      }

      return EXP_TABLE[n];
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // qrPolynomial
  //---------------------------------------------------------------------

  function qrPolynomial(num, shift) {

    if (typeof num.length == 'undefined') {
      throw new Error(num.length + '/' + shift);
    }

    var _num = function() {
      var offset = 0;
      while (offset < num.length && num[offset] == 0) {
        offset += 1;
      }
      var _num = new Array(num.length - offset + shift);
      for (var i = 0; i < num.length - offset; i += 1) {
        _num[i] = num[i + offset];
      }
      return _num;
    }();

    var _this = {};

    _this.get = function(index) {
      return _num[index];
    };

    _this.getLength = function() {
      return _num.length;
    };

    _this.multiply = function(e) {

      var num = new Array(_this.getLength() + e.getLength() - 1);

      for (var i = 0; i < _this.getLength(); i += 1) {
        for (var j = 0; j < e.getLength(); j += 1) {
          num[i + j] ^= QRMath.gexp(QRMath.glog(_this.get(i) ) + QRMath.glog(e.get(j) ) );
        }
      }

      return qrPolynomial(num, 0);
    };

    _this.mod = function(e) {

      if (_this.getLength() - e.getLength() < 0) {
        return _this;
      }

      var ratio = QRMath.glog(_this.get(0) ) - QRMath.glog(e.get(0) );

      var num = new Array(_this.getLength() );
      for (var i = 0; i < _this.getLength(); i += 1) {
        num[i] = _this.get(i);
      }

      for (var i = 0; i < e.getLength(); i += 1) {
        num[i] ^= QRMath.gexp(QRMath.glog(e.get(i) ) + ratio);
      }

      // recursive call
      return qrPolynomial(num, 0).mod(e);
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // QRRSBlock
  //---------------------------------------------------------------------

  var QRRSBlock = function() {

    var RS_BLOCK_TABLE = [

      // L
      // M
      // Q
      // H

      // 1
      [1, 26, 19],
      [1, 26, 16],
      [1, 26, 13],
      [1, 26, 9],

      // 2
      [1, 44, 34],
      [1, 44, 28],
      [1, 44, 22],
      [1, 44, 16],

      // 3
      [1, 70, 55],
      [1, 70, 44],
      [2, 35, 17],
      [2, 35, 13],

      // 4
      [1, 100, 80],
      [2, 50, 32],
      [2, 50, 24],
      [4, 25, 9],

      // 5
      [1, 134, 108],
      [2, 67, 43],
      [2, 33, 15, 2, 34, 16],
      [2, 33, 11, 2, 34, 12],

      // 6
      [2, 86, 68],
      [4, 43, 27],
      [4, 43, 19],
      [4, 43, 15],

      // 7
      [2, 98, 78],
      [4, 49, 31],
      [2, 32, 14, 4, 33, 15],
      [4, 39, 13, 1, 40, 14],

      // 8
      [2, 121, 97],
      [2, 60, 38, 2, 61, 39],
      [4, 40, 18, 2, 41, 19],
      [4, 40, 14, 2, 41, 15],

      // 9
      [2, 146, 116],
      [3, 58, 36, 2, 59, 37],
      [4, 36, 16, 4, 37, 17],
      [4, 36, 12, 4, 37, 13],

      // 10
      [2, 86, 68, 2, 87, 69],
      [4, 69, 43, 1, 70, 44],
      [6, 43, 19, 2, 44, 20],
      [6, 43, 15, 2, 44, 16]
    ];

    var qrRSBlock = function(totalCount, dataCount) {
      var _this = {};
      _this.totalCount = totalCount;
      _this.dataCount = dataCount;
      return _this;
    };

    var _this = {};

    var getRsBlockTable = function(typeNumber, errorCorrectLevel) {

      switch(errorCorrectLevel) {
      case QRErrorCorrectLevel.L :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
      case QRErrorCorrectLevel.M :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
      case QRErrorCorrectLevel.Q :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
      case QRErrorCorrectLevel.H :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
      default :
        return undefined;
      }
    };

    _this.getRSBlocks = function(typeNumber, errorCorrectLevel) {

      var rsBlock = getRsBlockTable(typeNumber, errorCorrectLevel);

      if (typeof rsBlock == 'undefined') {
        throw new Error('bad rs block @ typeNumber:' + typeNumber +
            '/errorCorrectLevel:' + errorCorrectLevel);
      }

      var length = rsBlock.length / 3;

      var list = new Array();

      for (var i = 0; i < length; i += 1) {

        var count = rsBlock[i * 3 + 0];
        var totalCount = rsBlock[i * 3 + 1];
        var dataCount = rsBlock[i * 3 + 2];

        for (var j = 0; j < count; j += 1) {
          list.push(qrRSBlock(totalCount, dataCount) );
        }
      }

      return list;
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // qrBitBuffer
  //---------------------------------------------------------------------

  var qrBitBuffer = function() {

    var _buffer = new Array();
    var _length = 0;

    var _this = {};

    _this.getBuffer = function() {
      return _buffer;
    };

    _this.get = function(index) {
      var bufIndex = Math.floor(index / 8);
      return ( (_buffer[bufIndex] >>> (7 - index % 8) ) & 1) == 1;
    };

    _this.put = function(num, length) {
      for (var i = 0; i < length; i += 1) {
        _this.putBit( ( (num >>> (length - i - 1) ) & 1) == 1);
      }
    };

    _this.getLengthInBits = function() {
      return _length;
    };

    _this.putBit = function(bit) {

      var bufIndex = Math.floor(_length / 8);
      if (_buffer.length <= bufIndex) {
        _buffer.push(0);
      }

      if (bit) {
        _buffer[bufIndex] |= (0x80 >>> (_length % 8) );
      }

      _length += 1;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qr8BitByte
  //---------------------------------------------------------------------

  var qr8BitByte = function(data) {

    var _mode = QRMode.MODE_8BIT_BYTE;
    var _data = data;
    var _bytes = qrcode.stringToBytes(data);

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return _bytes.length;
    };

    _this.write = function(buffer) {
      for (var i = 0; i < _bytes.length; i += 1) {
        buffer.put(_bytes[i], 8);
      }
    };

    return _this;
  };

  //=====================================================================
  // GIF Support etc.
  //

  //---------------------------------------------------------------------
  // byteArrayOutputStream
  //---------------------------------------------------------------------

  var byteArrayOutputStream = function() {

    var _bytes = new Array();

    var _this = {};

    _this.writeByte = function(b) {
      _bytes.push(b & 0xff);
    };

    _this.writeShort = function(i) {
      _this.writeByte(i);
      _this.writeByte(i >>> 8);
    };

    _this.writeBytes = function(b, off, len) {
      off = off || 0;
      len = len || b.length;
      for (var i = 0; i < len; i += 1) {
        _this.writeByte(b[i + off]);
      }
    };

    _this.writeString = function(s) {
      for (var i = 0; i < s.length; i += 1) {
        _this.writeByte(s.charCodeAt(i) );
      }
    };

    _this.toByteArray = function() {
      return _bytes;
    };

    _this.toString = function() {
      var s = '';
      s += '[';
      for (var i = 0; i < _bytes.length; i += 1) {
        if (i > 0) {
          s += ',';
        }
        s += _bytes[i];
      }
      s += ']';
      return s;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // base64EncodeOutputStream
  //---------------------------------------------------------------------

  var base64EncodeOutputStream = function() {

    var _buffer = 0;
    var _buflen = 0;
    var _length = 0;
    var _base64 = '';

    var _this = {};

    var writeEncoded = function(b) {
      _base64 += String.fromCharCode(encode(b & 0x3f) );
    };

    var encode = function(n) {
      if (n < 0) {
        // error.
      } else if (n < 26) {
        return 0x41 + n;
      } else if (n < 52) {
        return 0x61 + (n - 26);
      } else if (n < 62) {
        return 0x30 + (n - 52);
      } else if (n == 62) {
        return 0x2b;
      } else if (n == 63) {
        return 0x2f;
      }
      throw new Error('n:' + n);
    };

    _this.writeByte = function(n) {

      _buffer = (_buffer << 8) | (n & 0xff);
      _buflen += 8;
      _length += 1;

      while (_buflen >= 6) {
        writeEncoded(_buffer >>> (_buflen - 6) );
        _buflen -= 6;
      }
    };

    _this.flush = function() {

      if (_buflen > 0) {
        writeEncoded(_buffer << (6 - _buflen) );
        _buffer = 0;
        _buflen = 0;
      }

      if (_length % 3 != 0) {
        // padding
        var padlen = 3 - _length % 3;
        for (var i = 0; i < padlen; i += 1) {
          _base64 += '=';
        }
      }
    };

    _this.toString = function() {
      return _base64;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // base64DecodeInputStream
  //---------------------------------------------------------------------

  var base64DecodeInputStream = function(str) {

    var _str = str;
    var _pos = 0;
    var _buffer = 0;
    var _buflen = 0;

    var _this = {};

    _this.read = function() {

      while (_buflen < 8) {

        if (_pos >= _str.length) {
          if (_buflen == 0) {
            return -1;
          }
          throw new Error('unexpected end of file./' + _buflen);
        }

        var c = _str.charAt(_pos);
        _pos += 1;

        if (c == '=') {
          _buflen = 0;
          return -1;
        } else if (c.match(/^\s$/) ) {
          // ignore if whitespace.
          continue;
        }

        _buffer = (_buffer << 6) | decode(c.charCodeAt(0) );
        _buflen += 6;
      }

      var n = (_buffer >>> (_buflen - 8) ) & 0xff;
      _buflen -= 8;
      return n;
    };

    var decode = function(c) {
      if (0x41 <= c && c <= 0x5a) {
        return c - 0x41;
      } else if (0x61 <= c && c <= 0x7a) {
        return c - 0x61 + 26;
      } else if (0x30 <= c && c <= 0x39) {
        return c - 0x30 + 52;
      } else if (c == 0x2b) {
        return 62;
      } else if (c == 0x2f) {
        return 63;
      } else {
        throw new Error('c:' + c);
      }
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // gifImage (B/W)
  //---------------------------------------------------------------------

  var gifImage = function(width, height) {

    var _width = width;
    var _height = height;
    var _data = new Array(width * height);

    var _this = {};

    _this.setPixel = function(x, y, pixel) {
      _data[y * _width + x] = pixel;
    };

    _this.write = function(out) {

      //---------------------------------
      // GIF Signature

      out.writeString('GIF87a');

      //---------------------------------
      // Screen Descriptor

      out.writeShort(_width);
      out.writeShort(_height);

      out.writeByte(0x80); // 2bit
      out.writeByte(0);
      out.writeByte(0);

      //---------------------------------
      // Global Color Map

      // black
      out.writeByte(0x00);
      out.writeByte(0x00);
      out.writeByte(0x00);

      // white
      out.writeByte(0xff);
      out.writeByte(0xff);
      out.writeByte(0xff);

      //---------------------------------
      // Image Descriptor

      out.writeString(',');
      out.writeShort(0);
      out.writeShort(0);
      out.writeShort(_width);
      out.writeShort(_height);
      out.writeByte(0);

      //---------------------------------
      // Local Color Map

      //---------------------------------
      // Raster Data

      var lzwMinCodeSize = 2;
      var raster = getLZWRaster(lzwMinCodeSize);

      out.writeByte(lzwMinCodeSize);

      var offset = 0;

      while (raster.length - offset > 255) {
        out.writeByte(255);
        out.writeBytes(raster, offset, 255);
        offset += 255;
      }

      out.writeByte(raster.length - offset);
      out.writeBytes(raster, offset, raster.length - offset);
      out.writeByte(0x00);

      //---------------------------------
      // GIF Terminator
      out.writeString(';');
    };

    var bitOutputStream = function(out) {

      var _out = out;
      var _bitLength = 0;
      var _bitBuffer = 0;

      var _this = {};

      _this.write = function(data, length) {

        if ( (data >>> length) != 0) {
          throw new Error('length over');
        }

        while (_bitLength + length >= 8) {
          _out.writeByte(0xff & ( (data << _bitLength) | _bitBuffer) );
          length -= (8 - _bitLength);
          data >>>= (8 - _bitLength);
          _bitBuffer = 0;
          _bitLength = 0;
        }

        _bitBuffer = (data << _bitLength) | _bitBuffer;
        _bitLength = _bitLength + length;
      };

      _this.flush = function() {
        if (_bitLength > 0) {
          _out.writeByte(_bitBuffer);
        }
      };

      return _this;
    };

    var getLZWRaster = function(lzwMinCodeSize) {

      var clearCode = 1 << lzwMinCodeSize;
      var endCode = (1 << lzwMinCodeSize) + 1;
      var bitLength = lzwMinCodeSize + 1;

      // Setup LZWTable
      var table = lzwTable();

      for (var i = 0; i < clearCode; i += 1) {
        table.add(String.fromCharCode(i) );
      }
      table.add(String.fromCharCode(clearCode) );
      table.add(String.fromCharCode(endCode) );

      var byteOut = byteArrayOutputStream();
      var bitOut = bitOutputStream(byteOut);

      // clear code
      bitOut.write(clearCode, bitLength);

      var dataIndex = 0;

      var s = String.fromCharCode(_data[dataIndex]);
      dataIndex += 1;

      while (dataIndex < _data.length) {

        var c = String.fromCharCode(_data[dataIndex]);
        dataIndex += 1;

        if (table.contains(s + c) ) {

          s = s + c;

        } else {

          bitOut.write(table.indexOf(s), bitLength);

          if (table.size() < 0xfff) {

            if (table.size() == (1 << bitLength) ) {
              bitLength += 1;
            }

            table.add(s + c);
          }

          s = c;
        }
      }

      bitOut.write(table.indexOf(s), bitLength);

      // end code
      bitOut.write(endCode, bitLength);

      bitOut.flush();

      return byteOut.toByteArray();
    };

    var lzwTable = function() {

      var _map = {};
      var _size = 0;

      var _this = {};

      _this.add = function(key) {
        if (_this.contains(key) ) {
          throw new Error('dup key:' + key);
        }
        _map[key] = _size;
        _size += 1;
      };

      _this.size = function() {
        return _size;
      };

      _this.indexOf = function(key) {
        return _map[key];
      };

      _this.contains = function(key) {
        return typeof _map[key] != 'undefined';
      };

      return _this;
    };

    return _this;
  };

  var createImgTag = function(width, height, getPixel, alt) {

    var gif = gifImage(width, height);
    for (var y = 0; y < height; y += 1) {
      for (var x = 0; x < width; x += 1) {
        gif.setPixel(x, y, getPixel(x, y) );
      }
    }

    var b = byteArrayOutputStream();
    gif.write(b);

    var base64 = base64EncodeOutputStream();
    var bytes = b.toByteArray();
    for (var i = 0; i < bytes.length; i += 1) {
      base64.writeByte(bytes[i]);
    }
    base64.flush();

    var img = '';
    img += '<img';
    img += '\u0020src="';
    img += 'data:image/gif;base64,';
    img += base64;
    img += '"';
    img += '\u0020width="';
    img += width;
    img += '"';
    img += '\u0020height="';
    img += height;
    img += '"';
    if (alt) {
      img += '\u0020alt="';
      img += alt;
      img += '"';
    }
    img += '/>';

    return img;
  };

  //---------------------------------------------------------------------
  // returns qrcode function.

  return qrcode;
}();
/*
    rfc1751.js : Converts between 128-bit strings and a human-readable
    sequence of words, as defined in RFC1751: "A Convention for
    Human-Readable 128-bit Keys", by Daniel L. McDonald.
    Ported from rfc1751.py / Python Cryptography Toolkit (public domain).
*/

var rfc1751_wordlist = [ "A", "ABE", "ACE", "ACT", "AD", "ADA", "ADD",
   "AGO", "AID", "AIM", "AIR", "ALL", "ALP", "AM", "AMY", "AN", "ANA",
   "AND", "ANN", "ANT", "ANY", "APE", "APS", "APT", "ARC", "ARE", "ARK",
   "ARM", "ART", "AS", "ASH", "ASK", "AT", "ATE", "AUG", "AUK", "AVE",
   "AWE", "AWK", "AWL", "AWN", "AX", "AYE", "BAD", "BAG", "BAH", "BAM",
   "BAN", "BAR", "BAT", "BAY", "BE", "BED", "BEE", "BEG", "BEN", "BET",
   "BEY", "BIB", "BID", "BIG", "BIN", "BIT", "BOB", "BOG", "BON", "BOO",
   "BOP", "BOW", "BOY", "BUB", "BUD", "BUG", "BUM", "BUN", "BUS", "BUT",
   "BUY", "BY", "BYE", "CAB", "CAL", "CAM", "CAN", "CAP", "CAR", "CAT",
   "CAW", "COD", "COG", "COL", "CON", "COO", "COP", "COT", "COW", "COY",
   "CRY", "CUB", "CUE", "CUP", "CUR", "CUT", "DAB", "DAD", "DAM", "DAN",
   "DAR", "DAY", "DEE", "DEL", "DEN", "DES", "DEW", "DID", "DIE", "DIG",
   "DIN", "DIP", "DO", "DOE", "DOG", "DON", "DOT", "DOW", "DRY", "DUB",
   "DUD", "DUE", "DUG", "DUN", "EAR", "EAT", "ED", "EEL", "EGG", "EGO",
   "ELI", "ELK", "ELM", "ELY", "EM", "END", "EST", "ETC", "EVA", "EVE",
   "EWE", "EYE", "FAD", "FAN", "FAR", "FAT", "FAY", "FED", "FEE", "FEW",
   "FIB", "FIG", "FIN", "FIR", "FIT", "FLO", "FLY", "FOE", "FOG", "FOR",
   "FRY", "FUM", "FUN", "FUR", "GAB", "GAD", "GAG", "GAL", "GAM", "GAP",
   "GAS", "GAY", "GEE", "GEL", "GEM", "GET", "GIG", "GIL", "GIN", "GO",
   "GOT", "GUM", "GUN", "GUS", "GUT", "GUY", "GYM", "GYP", "HA", "HAD",
   "HAL", "HAM", "HAN", "HAP", "HAS", "HAT", "HAW", "HAY", "HE", "HEM",
   "HEN", "HER", "HEW", "HEY", "HI", "HID", "HIM", "HIP", "HIS", "HIT",
   "HO", "HOB", "HOC", "HOE", "HOG", "HOP", "HOT", "HOW", "HUB", "HUE",
   "HUG", "HUH", "HUM", "HUT", "I", "ICY", "IDA", "IF", "IKE", "ILL",
   "INK", "INN", "IO", "ION", "IQ", "IRA", "IRE", "IRK", "IS", "IT",
   "ITS", "IVY", "JAB", "JAG", "JAM", "JAN", "JAR", "JAW", "JAY", "JET",
   "JIG", "JIM", "JO", "JOB", "JOE", "JOG", "JOT", "JOY", "JUG", "JUT",
   "KAY", "KEG", "KEN", "KEY", "KID", "KIM", "KIN", "KIT", "LA", "LAB",
   "LAC", "LAD", "LAG", "LAM", "LAP", "LAW", "LAY", "LEA", "LED", "LEE",
   "LEG", "LEN", "LEO", "LET", "LEW", "LID", "LIE", "LIN", "LIP", "LIT",
   "LO", "LOB", "LOG", "LOP", "LOS", "LOT", "LOU", "LOW", "LOY", "LUG",
   "LYE", "MA", "MAC", "MAD", "MAE", "MAN", "MAO", "MAP", "MAT", "MAW",
   "MAY", "ME", "MEG", "MEL", "MEN", "MET", "MEW", "MID", "MIN", "MIT",
   "MOB", "MOD", "MOE", "MOO", "MOP", "MOS", "MOT", "MOW", "MUD", "MUG",
   "MUM", "MY", "NAB", "NAG", "NAN", "NAP", "NAT", "NAY", "NE", "NED",
   "NEE", "NET", "NEW", "NIB", "NIL", "NIP", "NIT", "NO", "NOB", "NOD",
   "NON", "NOR", "NOT", "NOV", "NOW", "NU", "NUN", "NUT", "O", "OAF",
   "OAK", "OAR", "OAT", "ODD", "ODE", "OF", "OFF", "OFT", "OH", "OIL",
   "OK", "OLD", "ON", "ONE", "OR", "ORB", "ORE", "ORR", "OS", "OTT",
   "OUR", "OUT", "OVA", "OW", "OWE", "OWL", "OWN", "OX", "PA", "PAD",
   "PAL", "PAM", "PAN", "PAP", "PAR", "PAT", "PAW", "PAY", "PEA", "PEG",
   "PEN", "PEP", "PER", "PET", "PEW", "PHI", "PI", "PIE", "PIN", "PIT",
   "PLY", "PO", "POD", "POE", "POP", "POT", "POW", "PRO", "PRY", "PUB",
   "PUG", "PUN", "PUP", "PUT", "QUO", "RAG", "RAM", "RAN", "RAP", "RAT",
   "RAW", "RAY", "REB", "RED", "REP", "RET", "RIB", "RID", "RIG", "RIM",
   "RIO", "RIP", "ROB", "ROD", "ROE", "RON", "ROT", "ROW", "ROY", "RUB",
   "RUE", "RUG", "RUM", "RUN", "RYE", "SAC", "SAD", "SAG", "SAL", "SAM",
   "SAN", "SAP", "SAT", "SAW", "SAY", "SEA", "SEC", "SEE", "SEN", "SET",
   "SEW", "SHE", "SHY", "SIN", "SIP", "SIR", "SIS", "SIT", "SKI", "SKY",
   "SLY", "SO", "SOB", "SOD", "SON", "SOP", "SOW", "SOY", "SPA", "SPY",
   "SUB", "SUD", "SUE", "SUM", "SUN", "SUP", "TAB", "TAD", "TAG", "TAN",
   "TAP", "TAR", "TEA", "TED", "TEE", "TEN", "THE", "THY", "TIC", "TIE",
   "TIM", "TIN", "TIP", "TO", "TOE", "TOG", "TOM", "TON", "TOO", "TOP",
   "TOW", "TOY", "TRY", "TUB", "TUG", "TUM", "TUN", "TWO", "UN", "UP",
   "US", "USE", "VAN", "VAT", "VET", "VIE", "WAD", "WAG", "WAR", "WAS",
   "WAY", "WE", "WEB", "WED", "WEE", "WET", "WHO", "WHY", "WIN", "WIT",
   "WOK", "WON", "WOO", "WOW", "WRY", "WU", "YAM", "YAP", "YAW", "YE",
   "YEA", "YES", "YET", "YOU", "ABED", "ABEL", "ABET", "ABLE", "ABUT",
   "ACHE", "ACID", "ACME", "ACRE", "ACTA", "ACTS", "ADAM", "ADDS",
   "ADEN", "AFAR", "AFRO", "AGEE", "AHEM", "AHOY", "AIDA", "AIDE",
   "AIDS", "AIRY", "AJAR", "AKIN", "ALAN", "ALEC", "ALGA", "ALIA",
   "ALLY", "ALMA", "ALOE", "ALSO", "ALTO", "ALUM", "ALVA", "AMEN",
   "AMES", "AMID", "AMMO", "AMOK", "AMOS", "AMRA", "ANDY", "ANEW",
   "ANNA", "ANNE", "ANTE", "ANTI", "AQUA", "ARAB", "ARCH", "AREA",
   "ARGO", "ARID", "ARMY", "ARTS", "ARTY", "ASIA", "ASKS", "ATOM",
   "AUNT", "AURA", "AUTO", "AVER", "AVID", "AVIS", "AVON", "AVOW",
   "AWAY", "AWRY", "BABE", "BABY", "BACH", "BACK", "BADE", "BAIL",
   "BAIT", "BAKE", "BALD", "BALE", "BALI", "BALK", "BALL", "BALM",
   "BAND", "BANE", "BANG", "BANK", "BARB", "BARD", "BARE", "BARK",
   "BARN", "BARR", "BASE", "BASH", "BASK", "BASS", "BATE", "BATH",
   "BAWD", "BAWL", "BEAD", "BEAK", "BEAM", "BEAN", "BEAR", "BEAT",
   "BEAU", "BECK", "BEEF", "BEEN", "BEER",
   "BEET", "BELA", "BELL", "BELT", "BEND", "BENT", "BERG", "BERN",
   "BERT", "BESS", "BEST", "BETA", "BETH", "BHOY", "BIAS", "BIDE",
   "BIEN", "BILE", "BILK", "BILL", "BIND", "BING", "BIRD", "BITE",
   "BITS", "BLAB", "BLAT", "BLED", "BLEW", "BLOB", "BLOC", "BLOT",
   "BLOW", "BLUE", "BLUM", "BLUR", "BOAR", "BOAT", "BOCA", "BOCK",
   "BODE", "BODY", "BOGY", "BOHR", "BOIL", "BOLD", "BOLO", "BOLT",
   "BOMB", "BONA", "BOND", "BONE", "BONG", "BONN", "BONY", "BOOK",
   "BOOM", "BOON", "BOOT", "BORE", "BORG", "BORN", "BOSE", "BOSS",
   "BOTH", "BOUT", "BOWL", "BOYD", "BRAD", "BRAE", "BRAG", "BRAN",
   "BRAY", "BRED", "BREW", "BRIG", "BRIM", "BROW", "BUCK", "BUDD",
   "BUFF", "BULB", "BULK", "BULL", "BUNK", "BUNT", "BUOY", "BURG",
   "BURL", "BURN", "BURR", "BURT", "BURY", "BUSH", "BUSS", "BUST",
   "BUSY", "BYTE", "CADY", "CAFE", "CAGE", "CAIN", "CAKE", "CALF",
   "CALL", "CALM", "CAME", "CANE", "CANT", "CARD", "CARE", "CARL",
   "CARR", "CART", "CASE", "CASH", "CASK", "CAST", "CAVE", "CEIL",
   "CELL", "CENT", "CERN", "CHAD", "CHAR", "CHAT", "CHAW", "CHEF",
   "CHEN", "CHEW", "CHIC", "CHIN", "CHOU", "CHOW", "CHUB", "CHUG",
   "CHUM", "CITE", "CITY", "CLAD", "CLAM", "CLAN", "CLAW", "CLAY",
   "CLOD", "CLOG", "CLOT", "CLUB", "CLUE", "COAL", "COAT", "COCA",
   "COCK", "COCO", "CODA", "CODE", "CODY", "COED", "COIL", "COIN",
   "COKE", "COLA", "COLD", "COLT", "COMA", "COMB", "COME", "COOK",
   "COOL", "COON", "COOT", "CORD", "CORE", "CORK", "CORN", "COST",
   "COVE", "COWL", "CRAB", "CRAG", "CRAM", "CRAY", "CREW", "CRIB",
   "CROW", "CRUD", "CUBA", "CUBE", "CUFF", "CULL", "CULT", "CUNY",
   "CURB", "CURD", "CURE", "CURL", "CURT", "CUTS", "DADE", "DALE",
   "DAME", "DANA", "DANE", "DANG", "DANK", "DARE", "DARK", "DARN",
   "DART", "DASH", "DATA", "DATE", "DAVE", "DAVY", "DAWN", "DAYS",
   "DEAD", "DEAF", "DEAL", "DEAN", "DEAR", "DEBT", "DECK", "DEED",
   "DEEM", "DEER", "DEFT", "DEFY", "DELL", "DENT", "DENY", "DESK",
   "DIAL", "DICE", "DIED", "DIET", "DIME", "DINE", "DING", "DINT",
   "DIRE", "DIRT", "DISC", "DISH", "DISK", "DIVE", "DOCK", "DOES",
   "DOLE", "DOLL", "DOLT", "DOME", "DONE", "DOOM", "DOOR", "DORA",
   "DOSE", "DOTE", "DOUG", "DOUR", "DOVE", "DOWN", "DRAB", "DRAG",
   "DRAM", "DRAW", "DREW", "DRUB", "DRUG", "DRUM", "DUAL", "DUCK",
   "DUCT", "DUEL", "DUET", "DUKE", "DULL", "DUMB", "DUNE", "DUNK",
   "DUSK", "DUST", "DUTY", "EACH", "EARL", "EARN", "EASE", "EAST",
   "EASY", "EBEN", "ECHO", "EDDY", "EDEN", "EDGE", "EDGY", "EDIT",
   "EDNA", "EGAN", "ELAN", "ELBA", "ELLA", "ELSE", "EMIL", "EMIT",
   "EMMA", "ENDS", "ERIC", "EROS", "EVEN", "EVER", "EVIL", "EYED",
   "FACE", "FACT", "FADE", "FAIL", "FAIN", "FAIR", "FAKE", "FALL",
   "FAME", "FANG", "FARM", "FAST", "FATE", "FAWN", "FEAR", "FEAT",
   "FEED", "FEEL", "FEET", "FELL", "FELT", "FEND", "FERN", "FEST",
   "FEUD", "FIEF", "FIGS", "FILE", "FILL", "FILM", "FIND", "FINE",
   "FINK", "FIRE", "FIRM", "FISH", "FISK", "FIST", "FITS", "FIVE",
   "FLAG", "FLAK", "FLAM", "FLAT", "FLAW", "FLEA", "FLED", "FLEW",
   "FLIT", "FLOC", "FLOG", "FLOW", "FLUB", "FLUE", "FOAL", "FOAM",
   "FOGY", "FOIL", "FOLD", "FOLK", "FOND", "FONT", "FOOD", "FOOL",
   "FOOT", "FORD", "FORE", "FORK", "FORM", "FORT", "FOSS", "FOUL",
   "FOUR", "FOWL", "FRAU", "FRAY", "FRED", "FREE", "FRET", "FREY",
   "FROG", "FROM", "FUEL", "FULL", "FUME", "FUND", "FUNK", "FURY",
   "FUSE", "FUSS", "GAFF", "GAGE", "GAIL", "GAIN", "GAIT", "GALA",
   "GALE", "GALL", "GALT", "GAME", "GANG", "GARB", "GARY", "GASH",
   "GATE", "GAUL", "GAUR", "GAVE", "GAWK", "GEAR", "GELD", "GENE",
   "GENT", "GERM", "GETS", "GIBE", "GIFT", "GILD", "GILL", "GILT",
   "GINA", "GIRD", "GIRL", "GIST", "GIVE", "GLAD", "GLEE", "GLEN",
   "GLIB", "GLOB", "GLOM", "GLOW", "GLUE", "GLUM", "GLUT", "GOAD",
   "GOAL", "GOAT", "GOER", "GOES", "GOLD", "GOLF", "GONE", "GONG",
   "GOOD", "GOOF", "GORE", "GORY", "GOSH", "GOUT", "GOWN", "GRAB",
   "GRAD", "GRAY", "GREG", "GREW", "GREY", "GRID", "GRIM", "GRIN",
   "GRIT", "GROW", "GRUB", "GULF", "GULL", "GUNK", "GURU", "GUSH",
   "GUST", "GWEN", "GWYN", "HAAG", "HAAS", "HACK", "HAIL", "HAIR",
   "HALE", "HALF", "HALL", "HALO", "HALT", "HAND", "HANG", "HANK",
   "HANS", "HARD", "HARK", "HARM", "HART", "HASH", "HAST", "HATE",
   "HATH", "HAUL", "HAVE", "HAWK", "HAYS", "HEAD", "HEAL", "HEAR",
   "HEAT", "HEBE", "HECK", "HEED", "HEEL", "HEFT", "HELD", "HELL",
   "HELM", "HERB", "HERD", "HERE", "HERO", "HERS", "HESS", "HEWN",
   "HICK", "HIDE", "HIGH", "HIKE", "HILL", "HILT", "HIND", "HINT",
   "HIRE", "HISS", "HIVE", "HOBO", "HOCK", "HOFF", "HOLD", "HOLE",
   "HOLM", "HOLT", "HOME", "HONE", "HONK", "HOOD", "HOOF", "HOOK",
   "HOOT", "HORN", "HOSE", "HOST", "HOUR", "HOVE", "HOWE", "HOWL",
   "HOYT", "HUCK", "HUED", "HUFF", "HUGE", "HUGH", "HUGO", "HULK",
   "HULL", "HUNK", "HUNT", "HURD", "HURL", "HURT", "HUSH", "HYDE",
   "HYMN", "IBIS", "ICON", "IDEA", "IDLE", "IFFY", "INCA", "INCH",
   "INTO", "IONS", "IOTA", "IOWA", "IRIS", "IRMA", "IRON", "ISLE",
   "ITCH", "ITEM", "IVAN", "JACK", "JADE", "JAIL", "JAKE", "JANE",
   "JAVA", "JEAN", "JEFF", "JERK", "JESS", "JEST", "JIBE", "JILL",
   "JILT", "JIVE", "JOAN", "JOBS", "JOCK", "JOEL", "JOEY", "JOHN",
   "JOIN", "JOKE", "JOLT", "JOVE", "JUDD", "JUDE", "JUDO", "JUDY",
   "JUJU", "JUKE", "JULY", "JUNE", "JUNK", "JUNO", "JURY", "JUST",
   "JUTE", "KAHN", "KALE", "KANE", "KANT", "KARL", "KATE", "KEEL",
   "KEEN", "KENO", "KENT", "KERN", "KERR", "KEYS", "KICK", "KILL",
   "KIND", "KING", "KIRK", "KISS", "KITE", "KLAN", "KNEE", "KNEW",
   "KNIT", "KNOB", "KNOT", "KNOW", "KOCH", "KONG", "KUDO", "KURD",
   "KURT", "KYLE", "LACE", "LACK", "LACY", "LADY", "LAID", "LAIN",
   "LAIR", "LAKE", "LAMB", "LAME", "LAND", "LANE", "LANG", "LARD",
   "LARK", "LASS", "LAST", "LATE", "LAUD", "LAVA", "LAWN", "LAWS",
   "LAYS", "LEAD", "LEAF", "LEAK", "LEAN", "LEAR", "LEEK", "LEER",
   "LEFT", "LEND", "LENS", "LENT", "LEON", "LESK", "LESS", "LEST",
   "LETS", "LIAR", "LICE", "LICK", "LIED", "LIEN", "LIES", "LIEU",
   "LIFE", "LIFT", "LIKE", "LILA", "LILT", "LILY", "LIMA", "LIMB",
   "LIME", "LIND", "LINE", "LINK", "LINT", "LION", "LISA", "LIST",
   "LIVE", "LOAD", "LOAF", "LOAM", "LOAN", "LOCK", "LOFT", "LOGE",
   "LOIS", "LOLA", "LONE", "LONG", "LOOK", "LOON", "LOOT", "LORD",
   "LORE", "LOSE", "LOSS", "LOST", "LOUD", "LOVE", "LOWE", "LUCK",
   "LUCY", "LUGE", "LUKE", "LULU", "LUND", "LUNG", "LURA", "LURE",
   "LURK", "LUSH", "LUST", "LYLE", "LYNN", "LYON", "LYRA", "MACE",
   "MADE", "MAGI", "MAID", "MAIL", "MAIN", "MAKE", "MALE", "MALI",
   "MALL", "MALT", "MANA", "MANN", "MANY", "MARC", "MARE", "MARK",
   "MARS", "MART", "MARY", "MASH", "MASK", "MASS", "MAST", "MATE",
   "MATH", "MAUL", "MAYO", "MEAD", "MEAL", "MEAN", "MEAT", "MEEK",
   "MEET", "MELD", "MELT", "MEMO", "MEND", "MENU", "MERT", "MESH",
   "MESS", "MICE", "MIKE", "MILD", "MILE", "MILK", "MILL", "MILT",
   "MIMI", "MIND", "MINE", "MINI", "MINK", "MINT", "MIRE", "MISS",
   "MIST", "MITE", "MITT", "MOAN", "MOAT", "MOCK", "MODE", "MOLD",
   "MOLE", "MOLL", "MOLT", "MONA", "MONK", "MONT", "MOOD", "MOON",
   "MOOR", "MOOT", "MORE", "MORN", "MORT", "MOSS", "MOST", "MOTH",
   "MOVE", "MUCH", "MUCK", "MUDD", "MUFF", "MULE", "MULL", "MURK",
   "MUSH", "MUST", "MUTE", "MUTT", "MYRA", "MYTH", "NAGY", "NAIL",
   "NAIR", "NAME", "NARY", "NASH", "NAVE", "NAVY", "NEAL", "NEAR",
   "NEAT", "NECK", "NEED", "NEIL", "NELL", "NEON", "NERO", "NESS",
   "NEST", "NEWS", "NEWT", "NIBS", "NICE", "NICK", "NILE", "NINA",
   "NINE", "NOAH", "NODE", "NOEL", "NOLL", "NONE", "NOOK", "NOON",
   "NORM", "NOSE", "NOTE", "NOUN", "NOVA", "NUDE", "NULL", "NUMB",
   "OATH", "OBEY", "OBOE", "ODIN", "OHIO", "OILY", "OINT", "OKAY",
   "OLAF", "OLDY", "OLGA", "OLIN", "OMAN", "OMEN", "OMIT", "ONCE",
   "ONES", "ONLY", "ONTO", "ONUS", "ORAL", "ORGY", "OSLO", "OTIS",
   "OTTO", "OUCH", "OUST", "OUTS", "OVAL", "OVEN", "OVER", "OWLY",
   "OWNS", "QUAD", "QUIT", "QUOD", "RACE", "RACK", "RACY", "RAFT",
   "RAGE", "RAID", "RAIL", "RAIN", "RAKE", "RANK", "RANT", "RARE",
   "RASH", "RATE", "RAVE", "RAYS", "READ", "REAL", "REAM", "REAR",
   "RECK", "REED", "REEF", "REEK", "REEL", "REID", "REIN", "RENA",
   "REND", "RENT", "REST", "RICE", "RICH", "RICK", "RIDE", "RIFT",
   "RILL", "RIME", "RING", "RINK", "RISE", "RISK", "RITE", "ROAD",
   "ROAM", "ROAR", "ROBE", "ROCK", "RODE", "ROIL", "ROLL", "ROME",
   "ROOD", "ROOF", "ROOK", "ROOM", "ROOT", "ROSA", "ROSE", "ROSS",
   "ROSY", "ROTH", "ROUT", "ROVE", "ROWE", "ROWS", "RUBE", "RUBY",
   "RUDE", "RUDY", "RUIN", "RULE", "RUNG", "RUNS", "RUNT", "RUSE",
   "RUSH", "RUSK", "RUSS", "RUST", "RUTH", "SACK", "SAFE", "SAGE",
   "SAID", "SAIL", "SALE", "SALK", "SALT", "SAME", "SAND", "SANE",
   "SANG", "SANK", "SARA", "SAUL", "SAVE", "SAYS", "SCAN", "SCAR",
   "SCAT", "SCOT", "SEAL", "SEAM", "SEAR", "SEAT", "SEED", "SEEK",
   "SEEM", "SEEN", "SEES", "SELF", "SELL", "SEND", "SENT", "SETS",
   "SEWN", "SHAG", "SHAM", "SHAW", "SHAY", "SHED", "SHIM", "SHIN",
   "SHOD", "SHOE", "SHOT", "SHOW", "SHUN", "SHUT", "SICK", "SIDE",
   "SIFT", "SIGH", "SIGN", "SILK", "SILL", "SILO", "SILT", "SINE",
   "SING", "SINK", "SIRE", "SITE", "SITS", "SITU", "SKAT", "SKEW",
   "SKID", "SKIM", "SKIN", "SKIT", "SLAB", "SLAM", "SLAT", "SLAY",
   "SLED", "SLEW", "SLID", "SLIM", "SLIT", "SLOB", "SLOG", "SLOT",
   "SLOW", "SLUG", "SLUM", "SLUR", "SMOG", "SMUG", "SNAG", "SNOB",
   "SNOW", "SNUB", "SNUG", "SOAK", "SOAR", "SOCK", "SODA", "SOFA",
   "SOFT", "SOIL", "SOLD", "SOME", "SONG", "SOON", "SOOT", "SORE",
   "SORT", "SOUL", "SOUR", "SOWN", "STAB", "STAG", "STAN", "STAR",
   "STAY", "STEM", "STEW", "STIR", "STOW", "STUB", "STUN", "SUCH",
   "SUDS", "SUIT", "SULK", "SUMS", "SUNG", "SUNK", "SURE", "SURF",
   "SWAB", "SWAG", "SWAM", "SWAN", "SWAT", "SWAY", "SWIM", "SWUM",
   "TACK", "TACT", "TAIL", "TAKE", "TALE", "TALK", "TALL", "TANK",
   "TASK", "TATE", "TAUT", "TEAL", "TEAM", "TEAR", "TECH", "TEEM",
   "TEEN", "TEET", "TELL", "TEND", "TENT", "TERM", "TERN", "TESS",
   "TEST", "THAN", "THAT", "THEE", "THEM", "THEN", "THEY", "THIN",
   "THIS", "THUD", "THUG", "TICK", "TIDE", "TIDY", "TIED", "TIER",
   "TILE", "TILL", "TILT", "TIME", "TINA", "TINE", "TINT", "TINY",
   "TIRE", "TOAD", "TOGO", "TOIL", "TOLD", "TOLL", "TONE", "TONG",
   "TONY", "TOOK", "TOOL", "TOOT", "TORE", "TORN", "TOTE", "TOUR",
   "TOUT", "TOWN", "TRAG", "TRAM", "TRAY", "TREE", "TREK", "TRIG",
   "TRIM", "TRIO", "TROD", "TROT", "TROY", "TRUE", "TUBA", "TUBE",
   "TUCK", "TUFT", "TUNA", "TUNE", "TUNG", "TURF", "TURN", "TUSK",
   "TWIG", "TWIN", "TWIT", "ULAN", "UNIT", "URGE", "USED", "USER",
   "USES", "UTAH", "VAIL", "VAIN", "VALE", "VARY", "VASE", "VAST",
   "VEAL", "VEDA", "VEIL", "VEIN", "VEND", "VENT", "VERB", "VERY",
   "VETO", "VICE", "VIEW", "VINE", "VISE", "VOID", "VOLT", "VOTE",
   "WACK", "WADE", "WAGE", "WAIL", "WAIT", "WAKE", "WALE", "WALK",
   "WALL", "WALT", "WAND", "WANE", "WANG", "WANT", "WARD", "WARM",
   "WARN", "WART", "WASH", "WAST", "WATS", "WATT", "WAVE", "WAVY",
   "WAYS", "WEAK", "WEAL", "WEAN", "WEAR", "WEED", "WEEK", "WEIR",
   "WELD", "WELL", "WELT", "WENT", "WERE", "WERT", "WEST", "WHAM",
   "WHAT", "WHEE", "WHEN", "WHET", "WHOA", "WHOM", "WICK", "WIFE",
   "WILD", "WILL", "WIND", "WINE", "WING", "WINK", "WINO", "WIRE",
   "WISE", "WISH", "WITH", "WOLF", "WONT", "WOOD", "WOOL", "WORD",
   "WORE", "WORK", "WORM", "WORN", "WOVE", "WRIT", "WYNN", "YALE",
   "YANG", "YANK", "YARD", "YARN", "YAWL", "YAWN", "YEAH", "YEAR",
   "YELL", "YOGA", "YOKE" ];

var binary = ['0000', '0001', '0010', '0011', '0100', '0101', '0110', '0111', 
              '1000', '1001', '1010', '1011', '1100', '1101', '1110', '1111'];

function _key2bin(key) {
    res = ''
    for (var i = 0; i < key.length; i++) {
        res += binary[key[i] >> 4] + binary [key[i] & 0x0f];
    }
    return res;
}

function _extract(key, start, length) {
    k = key.substring(start, start+length);
    var acc = 0;
    for (var i = 0; i < k.length; i++) {
        acc = acc * 2 + k.charCodeAt(i) - 48;
    }
    return acc;
}

function key_to_english(key) {

    //pad to 8 bytes
    var padding = [];
    for (var i = 0; i < (8 - (key.length % 8)) % 8; i++) {
        padding.push(0);
    }
    key = padding.concat(key);

    var english = [];
    for (var index = 0; index < key.length; index += 8) {
        var subkey = key.slice(index, index + 8);

        //add parity
        var skbin = _key2bin(subkey);
        var p = 0;
        for (var i = 0; i < 64; i += 2) {
            p = p + _extract(skbin, i, 2);
        }
        subkey.push((p << 6) & 0xff);

        skbin = _key2bin(subkey);
        for (var i = 0; i < 64; i += 11) {
            english.push(rfc1751_wordlist[_extract(skbin, i, 11)]);
        }
    }
    return english.join(' ');
}

function english_to_key(str) {

    var L = str.split(' ');
    var key = [];

    for (var index = 0; index < L.length; index += 6) {
        var sublist = L.slice(index, index + 6);
        var bits = 0;
        var ch = [0,0,0,0,0,0,0,0,0];
        for (var k = 0; k < sublist.length; k++) {
            var word = sublist[k];
            var idx = rfc1751_wordlist.indexOf(word);
            var shift = (8 - (bits + 11) % 8) % 8;
            var y = idx << shift;
            var cl = y >> 16;
            var cc = (y >> 8) & 0xff;
            var cr = y & 0xff;
            var t = Math.floor(bits / 8);
            if (shift > 5) {
                ch[t] = ch[t] | cl;
                ch[t+1] = ch[t+1] | cc;
                ch[t+2] = ch[t+2] | cr;
            } else if (shift > -3) {
                ch[t] = ch[t] | cc;
                ch[t+1] = ch[t+1] | cr;
            } else { 
                ch[t] = ch[t] | cr;
            }
            bits = bits + 11;
        }
        var subkey = ch.slice();

        //check parity
        var skbin = _key2bin(subkey);
        var p = 0;
        for (var i = 0; i < 64; i += 2) {
            p = p + _extract(skbin, i, 2);
        }
        var cs0 = _extract(skbin, 64, 2);
        var cs1 = p & 3;
        if (cs0 != cs1) {
            throw new Error("Parity error at " + word);
        }

        key = key.concat( subkey.slice(0,8) );
    }
    return key;
}

/*
    mnemonic.js : Converts between 4-byte aligned strings and a human-readable
    sequence of words. Uses 1626 common words taken from wikipedia article:
    http://en.wiktionary.org/wiki/Wiktionary:Frequency_lists/Contemporary_poetry
    Originally written in python special for Electrum (lightweight Bitcoin client).
    This version has been reimplemented in javascript and placed in public domain.
*/

function mn_encode(str) {
    var out = [];
    var n = mn_words.length;
    for (var i = 0; i < str.length; i += 8) {
        var x = parseInt(str.substr(i, 8), 16);
        var w1 = (x % n);
        var w2 = (Math.floor(x/n) + w1) % n;
        var w3 = (Math.floor(Math.floor(x/n)/n) + w2) % n;
        out = out.concat([mn_words[w1], mn_words[w2], mn_words[w3]]);
    }
    return out.join(' ');
}

function mn_mod(a, b) {
    return a < 0 ? b + a : a % b;
}

function mn_decode(str) {
    var out = '';
    var n = mn_words.length;
    str = str.replace(/^[ \r\n]+|[ \r\n ]+$/gm,'');
    var wlist = str.split(/[ \r\n]+/);
    for (var i = 0; i < wlist.length; i += 3) {
        var w1 = mn_words.indexOf(wlist[i]);
        var w2 = mn_words.indexOf(wlist[i+1]) % n;
        var w3 = mn_words.indexOf(wlist[i+2]) % n;
        var x = w1 + n * mn_mod((w2 - w1), n) + n * n * mn_mod((w3 - w2), n);
        out += ('0000000' + x.toString(16)).slice(-8);
    }
    return out;
}

var mn_words = [
    "like", "just", "love", "know", "never", "want", "time", "out", "there",
    "make", "look", "eye", "down", "only", "think", "heart", "back", "then",
    "into", "about", "more", "away", "still", "them", "take", "thing", "even",
    "through", "long", "always", "world", "too", "friend", "tell", "try",
    "hand", "thought", "over", "here", "other", "need", "smile", "again",
    "much", "cry", "been", "night", "ever", "little", "said", "end", "some",
    "those", "around", "mind", "people", "girl", "leave", "dream", "left",
    "turn", "myself", "give", "nothing", "really", "off", "before",
    "something", "find", "walk", "wish", "good", "once", "place", "ask",
    "stop", "keep", "watch", "seem", "everything", "wait", "got", "yet",
    "made", "remember", "start", "alone", "run", "hope", "maybe", "believe",
    "body", "hate", "after", "close", "talk", "stand", "own", "each", "hurt",
    "help", "home", "god", "soul", "new", "many", "two", "inside", "should",
    "true", "first", "fear", "mean", "better", "play", "another", "gone",
    "change", "use", "wonder", "someone", "hair", "cold", "open", "best",
    "any", "behind", "happen", "water", "dark", "laugh", "stay", "forever",
    "name", "work", "show", "sky", "break", "came", "deep", "door", "put",
    "black", "together", "upon", "happy", "such", "great", "white", "matter",
    "fill", "past", "please", "burn", "cause", "enough", "touch", "moment",
    "soon", "voice", "scream", "anything", "stare", "sound", "red", "everyone",
    "hide", "kiss", "truth", "death", "beautiful", "mine", "blood", "broken",
    "very", "pass", "next", "forget", "tree", "wrong", "air", "mother",
    "understand", "lip", "hit", "wall", "memory", "sleep", "free", "high",
    "realize", "school", "might", "skin", "sweet", "perfect", "blue", "kill",
    "breath", "dance", "against", "fly", "between", "grow", "strong", "under",
    "listen", "bring", "sometimes", "speak", "pull", "person", "become",
    "family", "begin", "ground", "real", "small", "father", "sure", "feet",
    "rest", "young", "finally", "land", "across", "today", "different", "guy",
    "line", "fire", "reason", "reach", "second", "slowly", "write", "eat",
    "smell", "mouth", "step", "learn", "three", "floor", "promise", "breathe",
    "darkness", "push", "earth", "guess", "save", "song", "above", "along",
    "both", "color", "house", "almost", "sorry", "anymore", "brother", "okay",
    "dear", "game", "fade", "already", "apart", "warm", "beauty", "heard",
    "notice", "question", "shine", "began", "piece", "whole", "shadow",
    "secret", "street", "within", "finger", "point", "morning", "whisper",
    "child", "moon", "green", "story", "glass", "kid", "silence", "since",
    "soft", "yourself", "empty", "shall", "angel", "answer", "baby", "bright",
    "dad", "path", "worry", "hour", "drop", "follow", "power", "war", "half",
    "flow", "heaven", "act", "chance", "fact", "least", "tired", "children",
    "near", "quite", "afraid", "rise", "sea", "taste", "window", "cover",
    "nice", "trust", "lot", "sad", "cool", "force", "peace", "return", "blind",
    "easy", "ready", "roll", "rose", "drive", "held", "music", "beneath",
    "hang", "mom", "paint", "emotion", "quiet", "clear", "cloud", "few",
    "pretty", "bird", "outside", "paper", "picture", "front", "rock", "simple",
    "anyone", "meant", "reality", "road", "sense", "waste", "bit", "leaf",
    "thank", "happiness", "meet", "men", "smoke", "truly", "decide", "self",
    "age", "book", "form", "alive", "carry", "escape", "damn", "instead",
    "able", "ice", "minute", "throw", "catch", "leg", "ring", "course",
    "goodbye", "lead", "poem", "sick", "corner", "desire", "known", "problem",
    "remind", "shoulder", "suppose", "toward", "wave", "drink", "jump",
    "woman", "pretend", "sister", "week", "human", "joy", "crack", "grey",
    "pray", "surprise", "dry", "knee", "less", "search", "bleed", "caught",
    "clean", "embrace", "future", "king", "son", "sorrow", "chest", "hug",
    "remain", "sat", "worth", "blow", "daddy", "final", "parent", "tight",
    "also", "create", "lonely", "safe", "cross", "dress", "evil", "silent",
    "bone", "fate", "perhaps", "anger", "class", "scar", "snow", "tiny",
    "tonight", "continue", "control", "dog", "edge", "mirror", "month",
    "suddenly", "comfort", "given", "loud", "quickly", "gaze", "plan", "rush",
    "stone", "town", "battle", "ignore", "spirit", "stood", "stupid", "yours",
    "brown", "build", "dust", "hey", "kept", "pay", "phone", "twist",
    "although", "ball", "beyond", "hidden", "nose", "taken", "fail", "float",
    "pure", "somehow", "wash", "wrap", "angry", "cheek", "creature",
    "forgotten", "heat", "rip", "single", "space", "special", "weak",
    "whatever", "yell", "anyway", "blame", "job", "choose", "country", "curse",
    "drift", "echo", "figure", "grew", "laughter", "neck", "suffer", "worse",
    "yeah", "disappear", "foot", "forward", "knife", "mess", "somewhere",
    "stomach", "storm", "beg", "idea", "lift", "offer", "breeze", "field",
    "five", "often", "simply", "stuck", "win", "allow", "confuse", "enjoy",
    "except", "flower", "seek", "strength", "calm", "grin", "gun", "heavy",
    "hill", "large", "ocean", "shoe", "sigh", "straight", "summer", "tongue",
    "accept", "crazy", "everyday", "exist", "grass", "mistake", "sent", "shut",
    "surround", "table", "ache", "brain", "destroy", "heal", "nature", "shout",
    "sign", "stain", "choice", "doubt", "glance", "glow", "mountain", "queen",
    "stranger", "throat", "tomorrow", "city", "either", "fish", "flame",
    "rather", "shape", "spin", "spread", "ash", "distance", "finish", "image",
    "imagine", "important", "nobody", "shatter", "warmth", "became", "feed",
    "flesh", "funny", "lust", "shirt", "trouble", "yellow", "attention",
    "bare", "bite", "money", "protect", "amaze", "appear", "born", "choke",
    "completely", "daughter", "fresh", "friendship", "gentle", "probably",
    "six", "deserve", "expect", "grab", "middle", "nightmare", "river",
    "thousand", "weight", "worst", "wound", "barely", "bottle", "cream",
    "regret", "relationship", "stick", "test", "crush", "endless", "fault",
    "itself", "rule", "spill", "art", "circle", "join", "kick", "mask",
    "master", "passion", "quick", "raise", "smooth", "unless", "wander",
    "actually", "broke", "chair", "deal", "favorite", "gift", "note", "number",
    "sweat", "box", "chill", "clothes", "lady", "mark", "park", "poor",
    "sadness", "tie", "animal", "belong", "brush", "consume", "dawn", "forest",
    "innocent", "pen", "pride", "stream", "thick", "clay", "complete", "count",
    "draw", "faith", "press", "silver", "struggle", "surface", "taught",
    "teach", "wet", "bless", "chase", "climb", "enter", "letter", "melt",
    "metal", "movie", "stretch", "swing", "vision", "wife", "beside", "crash",
    "forgot", "guide", "haunt", "joke", "knock", "plant", "pour", "prove",
    "reveal", "steal", "stuff", "trip", "wood", "wrist", "bother", "bottom",
    "crawl", "crowd", "fix", "forgive", "frown", "grace", "loose", "lucky",
    "party", "release", "surely", "survive", "teacher", "gently", "grip",
    "speed", "suicide", "travel", "treat", "vein", "written", "cage", "chain",
    "conversation", "date", "enemy", "however", "interest", "million", "page",
    "pink", "proud", "sway", "themselves", "winter", "church", "cruel", "cup",
    "demon", "experience", "freedom", "pair", "pop", "purpose", "respect",
    "shoot", "softly", "state", "strange", "bar", "birth", "curl", "dirt",
    "excuse", "lord", "lovely", "monster", "order", "pack", "pants", "pool",
    "scene", "seven", "shame", "slide", "ugly", "among", "blade", "blonde",
    "closet", "creek", "deny", "drug", "eternity", "gain", "grade", "handle",
    "key", "linger", "pale", "prepare", "swallow", "swim", "tremble", "wheel",
    "won", "cast", "cigarette", "claim", "college", "direction", "dirty",
    "gather", "ghost", "hundred", "loss", "lung", "orange", "present", "swear",
    "swirl", "twice", "wild", "bitter", "blanket", "doctor", "everywhere",
    "flash", "grown", "knowledge", "numb", "pressure", "radio", "repeat",
    "ruin", "spend", "unknown", "buy", "clock", "devil", "early", "false",
    "fantasy", "pound", "precious", "refuse", "sheet", "teeth", "welcome",
    "add", "ahead", "block", "bury", "caress", "content", "depth", "despite",
    "distant", "marry", "purple", "threw", "whenever", "bomb", "dull",
    "easily", "grasp", "hospital", "innocence", "normal", "receive", "reply",
    "rhyme", "shade", "someday", "sword", "toe", "visit", "asleep", "bought",
    "center", "consider", "flat", "hero", "history", "ink", "insane", "muscle",
    "mystery", "pocket", "reflection", "shove", "silently", "smart", "soldier",
    "spot", "stress", "train", "type", "view", "whether", "bus", "energy",
    "explain", "holy", "hunger", "inch", "magic", "mix", "noise", "nowhere",
    "prayer", "presence", "shock", "snap", "spider", "study", "thunder",
    "trail", "admit", "agree", "bag", "bang", "bound", "butterfly", "cute",
    "exactly", "explode", "familiar", "fold", "further", "pierce", "reflect",
    "scent", "selfish", "sharp", "sink", "spring", "stumble", "universe",
    "weep", "women", "wonderful", "action", "ancient", "attempt", "avoid",
    "birthday", "branch", "chocolate", "core", "depress", "drunk",
    "especially", "focus", "fruit", "honest", "match", "palm", "perfectly",
    "pillow", "pity", "poison", "roar", "shift", "slightly", "thump", "truck",
    "tune", "twenty", "unable", "wipe", "wrote", "coat", "constant", "dinner",
    "drove", "egg", "eternal", "flight", "flood", "frame", "freak", "gasp",
    "glad", "hollow", "motion", "peer", "plastic", "root", "screen", "season",
    "sting", "strike", "team", "unlike", "victim", "volume", "warn", "weird",
    "attack", "await", "awake", "built", "charm", "crave", "despair", "fought",
    "grant", "grief", "horse", "limit", "message", "ripple", "sanity",
    "scatter", "serve", "split", "string", "trick", "annoy", "blur", "boat",
    "brave", "clearly", "cling", "connect", "fist", "forth", "imagination",
    "iron", "jock", "judge", "lesson", "milk", "misery", "nail", "naked",
    "ourselves", "poet", "possible", "princess", "sail", "size", "snake",
    "society", "stroke", "torture", "toss", "trace", "wise", "bloom", "bullet",
    "cell", "check", "cost", "darling", "during", "footstep", "fragile",
    "hallway", "hardly", "horizon", "invisible", "journey", "midnight", "mud",
    "nod", "pause", "relax", "shiver", "sudden", "value", "youth", "abuse",
    "admire", "blink", "breast", "bruise", "constantly", "couple", "creep",
    "curve", "difference", "dumb", "emptiness", "gotta", "honor", "plain",
    "planet", "recall", "rub", "ship", "slam", "soar", "somebody", "tightly",
    "weather", "adore", "approach", "bond", "bread", "burst", "candle",
    "coffee", "cousin", "crime", "desert", "flutter", "frozen", "grand",
    "heel", "hello", "language", "level", "movement", "pleasure", "powerful",
    "random", "rhythm", "settle", "silly", "slap", "sort", "spoken", "steel",
    "threaten", "tumble", "upset", "aside", "awkward", "bee", "blank", "board",
    "button", "card", "carefully", "complain", "crap", "deeply", "discover",
    "drag", "dread", "effort", "entire", "fairy", "giant", "gotten", "greet",
    "illusion", "jeans", "leap", "liquid", "march", "mend", "nervous", "nine",
    "replace", "rope", "spine", "stole", "terror", "accident", "apple",
    "balance", "boom", "childhood", "collect", "demand", "depression",
    "eventually", "faint", "glare", "goal", "group", "honey", "kitchen",
    "laid", "limb", "machine", "mere", "mold", "murder", "nerve", "painful",
    "poetry", "prince", "rabbit", "shelter", "shore", "shower", "soothe",
    "stair", "steady", "sunlight", "tangle", "tease", "treasure", "uncle",
    "begun", "bliss", "canvas", "cheer", "claw", "clutch", "commit", "crimson",
    "crystal", "delight", "doll", "existence", "express", "fog", "football",
    "gay", "goose", "guard", "hatred", "illuminate", "mass", "math", "mourn",
    "rich", "rough", "skip", "stir", "student", "style", "support", "thorn",
    "tough", "yard", "yearn", "yesterday", "advice", "appreciate", "autumn",
    "bank", "beam", "bowl", "capture", "carve", "collapse", "confusion",
    "creation", "dove", "feather", "girlfriend", "glory", "government",
    "harsh", "hop", "inner", "loser", "moonlight", "neighbor", "neither",
    "peach", "pig", "praise", "screw", "shield", "shimmer", "sneak", "stab",
    "subject", "throughout", "thrown", "tower", "twirl", "wow", "army",
    "arrive", "bathroom", "bump", "cease", "cookie", "couch", "courage", "dim",
    "guilt", "howl", "hum", "husband", "insult", "led", "lunch", "mock",
    "mostly", "natural", "nearly", "needle", "nerd", "peaceful", "perfection",
    "pile", "price", "remove", "roam", "sanctuary", "serious", "shiny",
    "shook", "sob", "stolen", "tap", "vain", "void", "warrior", "wrinkle",
    "affection", "apologize", "blossom", "bounce", "bridge", "cheap",
    "crumble", "decision", "descend", "desperately", "dig", "dot", "flip",
    "frighten", "heartbeat", "huge", "lazy", "lick", "odd", "opinion",
    "process", "puzzle", "quietly", "retreat", "score", "sentence", "separate",
    "situation", "skill", "soak", "square", "stray", "taint", "task", "tide",
    "underneath", "veil", "whistle", "anywhere", "bedroom", "bid", "bloody",
    "burden", "careful", "compare", "concern", "curtain", "decay", "defeat",
    "describe", "double", "dreamer", "driver", "dwell", "evening", "flare",
    "flicker", "grandma", "guitar", "harm", "horrible", "hungry", "indeed",
    "lace", "melody", "monkey", "nation", "object", "obviously", "rainbow",
    "salt", "scratch", "shown", "shy", "stage", "stun", "third", "tickle",
    "useless", "weakness", "worship", "worthless", "afternoon", "beard",
    "boyfriend", "bubble", "busy", "certain", "chin", "concrete", "desk",
    "diamond", "doom", "drawn", "due", "felicity", "freeze", "frost", "garden",
    "glide", "harmony", "hopefully", "hunt", "jealous", "lightning", "mama",
    "mercy", "peel", "physical", "position", "pulse", "punch", "quit", "rant",
    "respond", "salty", "sane", "satisfy", "savior", "sheep", "slept",
    "social", "sport", "tuck", "utter", "valley", "wolf", "aim", "alas",
    "alter", "arrow", "awaken", "beaten", "belief", "brand", "ceiling",
    "cheese", "clue", "confidence", "connection", "daily", "disguise", "eager",
    "erase", "essence", "everytime", "expression", "fan", "flag", "flirt",
    "foul", "fur", "giggle", "glorious", "ignorance", "law", "lifeless",
    "measure", "mighty", "muse", "north", "opposite", "paradise", "patience",
    "patient", "pencil", "petal", "plate", "ponder", "possibly", "practice",
    "slice", "spell", "stock", "strife", "strip", "suffocate", "suit",
    "tender", "tool", "trade", "velvet", "verse", "waist", "witch", "aunt",
    "bench", "bold", "cap", "certainly", "click", "companion", "creator",
    "dart", "delicate", "determine", "dish", "dragon", "drama", "drum", "dude",
    "everybody", "feast", "forehead", "former", "fright", "fully", "gas",
    "hook", "hurl", "invite", "juice", "manage", "moral", "possess", "raw",
    "rebel", "royal", "scale", "scary", "several", "slight", "stubborn",
    "swell", "talent", "tea", "terrible", "thread", "torment", "trickle",
    "usually", "vast", "violence", "weave", "acid", "agony", "ashamed", "awe",
    "belly", "blend", "blush", "character", "cheat", "common", "company",
    "coward", "creak", "danger", "deadly", "defense", "define", "depend",
    "desperate", "destination", "dew", "duck", "dusty", "embarrass", "engine",
    "example", "explore", "foe", "freely", "frustrate", "generation", "glove",
    "guilty", "health", "hurry", "idiot", "impossible", "inhale", "jaw",
    "kingdom", "mention", "mist", "moan", "mumble", "mutter", "observe", "ode",
    "pathetic", "pattern", "pie", "prefer", "puff", "rape", "rare", "revenge",
    "rude", "scrape", "spiral", "squeeze", "strain", "sunset", "suspend",
    "sympathy", "thigh", "throne", "total", "unseen", "weapon", "weary"
];

  /*
    armory.js : Armory deterministic wallet implementation (public domain)
*/

function armory_extend_chain(pubKey, chainCode, privKey, fromPrivKey) {
    var chainXor = Crypto.SHA256(Crypto.SHA256(pubKey, {asBytes: true}), {asBytes: true});

    for (var i = 0; i < 32; i++)
        chainXor[i] ^= chainCode[i];

    var curve = getSECCurveByName("secp256k1");
    var secexp = null;
    var pt;

    var A;

    if (fromPrivKey) {
        A = BigInteger.fromByteArrayUnsigned(chainXor);
        var B = BigInteger.fromByteArrayUnsigned(privKey);
        var C = curve.getN();
        secexp = (A.multiply(B)).mod(C);
        pt = curve.getG().multiply(secexp);
    } else {
        A = BigInteger.fromByteArrayUnsigned(chainXor);
        pt = ECPointFp.decodeFrom(curve.getCurve(), pubKey).multiply(A);
    }

    var newPriv = secexp ? secexp.toByteArrayUnsigned() : [];
    var newPub = pt.getEncoded();
    var h160 = Bitcoin.Util.sha256ripe160(newPub);
    var addr = new Bitcoin.Address(h160);
    var sec = secexp ? new Bitcoin.Address(newPriv) : '';
    if (secexp)
        sec.version = 128;

    return [addr.toString(), sec.toString(), newPub, newPriv];
}

var armory_f = '0123456789abcdef';
var armory_t = 'asdfghjkwertuion';

function armory_map(str, from, to) {
    var res = '';
    for (var i = 0; i < str.length; i++)
        res += from.charAt(to.indexOf(str.charAt(i)));
    return res;
}

function armory_encode_keys(privKey, chainCode) {
    var key = privKey.concat(chainCode);
    var res = [];

    var str, code;

    for (var i = 0; i < 4; i++) {
        var bytes = key.slice(i * 16, i * 16 + 16);
        var cs = Crypto.SHA256(Crypto.SHA256(bytes, {asBytes: true}), {asBytes: true});
        str = Crypto.util.bytesToHex(bytes.concat(cs.slice(0,2)));
        code = armory_map(str, armory_t, armory_f);
        var arr = [];
        for (var j = 0; j < 9; j++)
            arr.push(code.substr(j*4, 4));
        code = arr.join(' ');
        res.push(code);
    }
    str = res.join('\n');
    return str;
}

function armory_derive_chaincode(root)
{
  var msg = 'Derive Chaincode from Root Key';
  var hash = Crypto.SHA256(Crypto.SHA256(root, {asBytes: true}), {asBytes: true});

  var okey = [];
  var ikey = [];
  for (var i in hash)
  {
    okey.push(0x5c^hash[i]);
    ikey.push(0x36^hash[i]);
  }

  var m = Crypto.charenc.UTF8.stringToBytes(msg);
  var a = Crypto.SHA256(ikey.concat(m), {asBytes: true});
  var b = Crypto.SHA256(okey.concat(a), {asBytes: true});
  return b;
}

function armory_decode_keys(data) {
    var keys = data.split('\n');
    var lines = [];
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i].replace(' ','');
        var raw = Crypto.util.hexToBytes(armory_map(k, armory_f, armory_t));
        data = raw.slice(0, 16);
      lines.push(data);
    }
    try {
        var privKey = lines[0].concat(lines[1]);
        var chainCode = (lines.length==4) ? lines[2].concat(lines[3]) : armory_derive_chaincode(privKey);
        return [privKey, chainCode];
    } catch (errr) {
        return null;
    }
}

function armory_get_pubkey(privKey) {
    var curve = getSECCurveByName("secp256k1");
    var secexp = BigInteger.fromByteArrayUnsigned(privKey);
    var pt = curve.getG().multiply(secexp);
    return pt.getEncoded();
}

function armory_get_wallet_uid(pubKey) {
    var h160 = Bitcoin.Util.sha256ripe160(pubKey);
    var id = [0].concat(h160.slice(0,5)).reverse();
    return Bitcoin.Base58.encode(id);
}

var Armory = new function () {
    var pubKey;
    var privKey;
    var chainCode;
    var range;
    var counter;
    var timeout;
    var onSuccess;
    var onUpdate;

    function calcAddr() {
        var r = armory_extend_chain(pubKey, chainCode, privKey, true);
        onUpdate(r);
        pubKey = r[2];
        privKey = r[3];
        counter++;
        if (counter < range) {
            timeout = setTimeout(calcAddr, 0);
        } else {
            if (onSuccess)
                onSuccess();
        }
    }

    this.gen = function(seed, _range, update, success) {
        var keys = armory_decode_keys(seed);
        if (keys == null)
            return null;
        privKey = keys[0];
        chainCode = keys[1];
        pubKey = armory_get_pubkey(privKey);
        range = _range;
        counter = 0;
        onUpdate = update;
        onSuccess = success;
        clearTimeout(timeout);
        calcAddr();
        return armory_get_wallet_uid(pubKey);
    };

    this.stop = function () {
        clearTimeout(timeout);
    };

    return this;
};

function armory_trim(str)
{
  str = str.replace(/^\s+|\s+$/g, '');
  str = str.replace(/^"+|"+$/g, '');
  return str;
}

function armory_fmt(str, quote)
{
  var chunks = str.match(/.{1,50}/g);
  var span = '\n            ';
  span = quote ? '"'+span+'"':span;
  var res = chunks.join(span);
  return quote ? '"'+res+'"' : res;
}

function crc24(buf) {
  var table = [0x000000, 0x864cfb, 0x8ad50d, 0x0c99f6, 0x93e6e1, 0x15aa1a, 0x1933ec, 0x9f7f17, 0xa18139, 0x27cdc2, 0x2b5434, 0xad18cf, 0x3267d8, 0xb42b23, 0xb8b2d5, 0x3efe2e, 0xc54e89, 0x430272, 0x4f9b84, 0xc9d77f, 0x56a868, 0xd0e493, 0xdc7d65, 0x5a319e, 0x64cfb0, 0xe2834b, 0xee1abd, 0x685646, 0xf72951, 0x7165aa, 0x7dfc5c, 0xfbb0a7, 0x0cd1e9, 0x8a9d12, 0x8604e4, 0x00481f, 0x9f3708, 0x197bf3, 0x15e205, 0x93aefe, 0xad50d0, 0x2b1c2b, 0x2785dd, 0xa1c926, 0x3eb631, 0xb8faca, 0xb4633c, 0x322fc7, 0xc99f60, 0x4fd39b, 0x434a6d, 0xc50696, 0x5a7981, 0xdc357a, 0xd0ac8c, 0x56e077, 0x681e59, 0xee52a2, 0xe2cb54, 0x6487af, 0xfbf8b8, 0x7db443, 0x712db5, 0xf7614e, 0x19a3d2, 0x9fef29, 0x9376df, 0x153a24, 0x8a4533, 0x0c09c8, 0x00903e, 0x86dcc5, 0xb822eb, 0x3e6e10, 0x32f7e6, 0xb4bb1d, 0x2bc40a, 0xad88f1, 0xa11107, 0x275dfc, 0xdced5b, 0x5aa1a0, 0x563856, 0xd074ad, 0x4f0bba, 0xc94741, 0xc5deb7, 0x43924c, 0x7d6c62, 0xfb2099, 0xf7b96f, 0x71f594, 0xee8a83, 0x68c678, 0x645f8e, 0xe21375, 0x15723b, 0x933ec0, 0x9fa736, 0x19ebcd, 0x8694da, 0x00d821, 0x0c41d7, 0x8a0d2c, 0xb4f302, 0x32bff9, 0x3e260f, 0xb86af4, 0x2715e3, 0xa15918, 0xadc0ee, 0x2b8c15, 0xd03cb2, 0x567049, 0x5ae9bf, 0xdca544, 0x43da53, 0xc596a8, 0xc90f5e, 0x4f43a5, 0x71bd8b, 0xf7f170, 0xfb6886, 0x7d247d, 0xe25b6a, 0x641791, 0x688e67, 0xeec29c, 0x3347a4, 0xb50b5f, 0xb992a9, 0x3fde52, 0xa0a145, 0x26edbe, 0x2a7448, 0xac38b3, 0x92c69d, 0x148a66, 0x181390, 0x9e5f6b, 0x01207c, 0x876c87, 0x8bf571, 0x0db98a, 0xf6092d, 0x7045d6, 0x7cdc20, 0xfa90db, 0x65efcc, 0xe3a337, 0xef3ac1, 0x69763a, 0x578814, 0xd1c4ef, 0xdd5d19, 0x5b11e2, 0xc46ef5, 0x42220e, 0x4ebbf8, 0xc8f703, 0x3f964d, 0xb9dab6, 0xb54340, 0x330fbb, 0xac70ac, 0x2a3c57, 0x26a5a1, 0xa0e95a, 0x9e1774, 0x185b8f, 0x14c279, 0x928e82, 0x0df195, 0x8bbd6e, 0x872498, 0x016863, 0xfad8c4, 0x7c943f, 0x700dc9, 0xf64132, 0x693e25, 0xef72de, 0xe3eb28, 0x65a7d3, 0x5b59fd, 0xdd1506, 0xd18cf0, 0x57c00b, 0xc8bf1c, 0x4ef3e7, 0x426a11, 0xc426ea, 0x2ae476, 0xaca88d, 0xa0317b, 0x267d80, 0xb90297, 0x3f4e6c, 0x33d79a, 0xb59b61, 0x8b654f, 0x0d29b4, 0x01b042, 0x87fcb9, 0x1883ae, 0x9ecf55, 0x9256a3, 0x141a58, 0xefaaff, 0x69e604, 0x657ff2, 0xe33309, 0x7c4c1e, 0xfa00e5, 0xf69913, 0x70d5e8, 0x4e2bc6, 0xc8673d, 0xc4fecb, 0x42b230, 0xddcd27, 0x5b81dc, 0x57182a, 0xd154d1, 0x26359f, 0xa07964, 0xace092, 0x2aac69, 0xb5d37e, 0x339f85, 0x3f0673, 0xb94a88, 0x87b4a6, 0x01f85d, 0x0d61ab, 0x8b2d50, 0x145247, 0x921ebc, 0x9e874a, 0x18cbb1, 0xe37b16, 0x6537ed, 0x69ae1b, 0xefe2e0, 0x709df7, 0xf6d10c, 0xfa48fa, 0x7c0401, 0x42fa2f, 0xc4b6d4, 0xc82f22, 0x4e63d9, 0xd11cce, 0x575035, 0x5bc9c3, 0xdd8538];
  var crc = 0xb704ce;
  for (i=0; i<buf.length; i++)
    crc = (table[((crc >> 16) ^ buf[i]) & 0xff] ^ (crc << 8)) & 0xffffff;
  return crc;
}

function armory_split_string(str) {
  var l = str.length, lc = 0, chunks = [], c = 0, chunkSize = 64;
  for (; lc < l; c++)
    chunks[c] = str.slice(lc, lc += chunkSize);
  return chunks.join('\r\n');
}

function armory_sign_message(private_key, address, message, compressed, addrtype, mode)
{
  // armory needs \r\n for some reason
  message = message.replace(/\n/g,'\r\n');

  var sig = sign_message(private_key, message, compressed, addrtype);
  var sig_bytes = Crypto.util.base64ToBytes(sig);
  var msg_bytes = Crypto.charenc.UTF8.stringToBytes(message);

  if (mode=='armory_base64') {

    var payload = sig_bytes.concat(msg_bytes);
    var crc = crc24(payload);

    return '-----BEGIN BITCOIN MESSAGE-----'
      +'\nComment: Signed by Bitcoin Armory v0.93.1'
      +'\n'
      +'\n'+armory_split_string(Crypto.util.bytesToBase64(payload))
      +'\n='+Crypto.util.bytesToBase64([crc & 0xff, (crc >>> 8 ) & 0xff, (crc >>> 16 ) & 0xff])
      +'\n'+'-----END BITCOIN MESSAGE-----';

  } else if (mode=='armory_clearsign') {

    var payload = sig_bytes;
    var crc = crc24(payload);

    return '-----BEGIN BITCOIN SIGNED MESSAGE-----'
      +'\nComment: Signed by Bitcoin Armory v0.93.1'
      +'\n'
      +'\n'+message
      +'\n-----BEGIN BITCOIN SIGNATURE-----'
      +'\n'
      +'\n'
      +'\n'+armory_split_string(Crypto.util.bytesToBase64(payload))
      +'\n='+Crypto.util.bytesToBase64([crc & 0xff, (crc >>> 8 ) & 0xff, (crc >>> 16 ) & 0xff])
      +'\n'+'-----END BITCOIN SIGNATURE-----';
  }

  message = message.replace(/\r|\n/g, ' ');
  message = message.replace(/\"/g, '\'');

  var digest = 'Bitcoin Signed Message:\n' +message;
  var hash = Crypto.SHA256(Crypto.SHA256(digest, {asBytes: true}), {asBytes: true});
  var sig = private_key.sign(hash);
  var obj = Bitcoin.ECDSA.parseSig(sig);
  var sigHex = Crypto.util.bytesToHex(integerToBytes(obj.r, 32))+Crypto.util.bytesToHex(integerToBytes(obj.s, 32));
  var pubHex = Crypto.util.bytesToHex(private_key.pub);

  return '-----BEGIN-SIGNATURE-BLOCK-------------------------------------'
      +'\nAddress:    '+address
      +'\nMessage:    '+armory_fmt(message,true)
      +'\nPublicKey:  '+armory_fmt(pubHex)
      +'\nSignature:  '+armory_fmt(sigHex)
      +'\n-----END-SIGNATURE-BLOCK---------------------------------------';
}

function armory_split_message(str)
{
  var regs = str.match(/-----BEGIN BITCOIN MESSAGE-----\nComment.*\n+([\s\S]*?)\n-----END BITCOIN MESSAGE-----/m);
  if (regs && regs.length==2) {

    var s = regs[1].split('\n');
    s = s.slice(0,-1); // ignore crc for now
    var payload = s.join('');

    var bytes = Crypto.util.base64ToBytes(payload);

    var sig_bytes = bytes.slice(0,65);
    var msg_bytes = bytes.slice(65);

    var msg =''; try { msg = Crypto.charenc.UTF8.bytesToString(msg_bytes); } catch (err) {  console.log(err); return null; };
    var sig = Crypto.util.bytesToBase64(sig_bytes);

    return { "message": msg, "signature": sig, "type": "armory_base64" };
  }

  regs = str.match(/-----BEGIN BITCOIN SIGNED MESSAGE-----\nComment.*\n+([\s\S]*?)\n-----BEGIN BITCOIN SIGNATURE-----\n+([\s\S]*?)\n-----END BITCOIN SIGNATURE-----/m);
  if (regs && regs.length==3) {
    var msg = regs[1];
    var s = regs[2].split('\n');
    s = s.slice(0,-1); // ignore crc for now
    var sig = s.join(''); 

    // again, armory needs \r\n in message for some reason
    msg = msg.replace(/\n/g,'\r\n');

    return { "message": msg, "signature": sig, "type": "armory_clearsign" };
  }

  var a = str.split('\n');
  var pre = true;
  var fields = ["Address","Message","PublicKey","Signature"];
  var p = {};
  var key = null;
  for (i in a)
  {
    var s = a[i];

    if (pre && s.indexOf('-----BEGIN-SIGNATURE-BLOCK')==0)
      pre = false;

    if (!pre)
    {
      if (s.indexOf('-----END-SIGNATURE-BLOCK')==0)
        break;
      for (j in fields)
      {
        var k = fields[j];
        if (s.indexOf(k+':')==0)
        {
          key = k;
          p[key]=''
          s = s.split(':')[1];
          break;
        }
      }

      if (key)
        p[key]+=armory_trim(s);
    }
  }

  if (p.Message && p.Signature && p.Address && p.PublicKey)
  {
    // return signature in a standard base64 form
    var bytes = [27].concat(Crypto.util.hexToBytes(p.Signature));
    sig = Crypto.util.bytesToBase64(bytes);
    return {"message":p.Message, "address":p.Address, "signature":sig, "pubkey":p.PublicKey, "type": "armory_hex" };
  }

  return null;
}

function armory_verify_message(p)
{
  var adr = p['address'];
  var msg = p['message'];
  var pub = p['pubkey'];
  var sig = p['signature'];

  if (!adr || !msg || !pub || !sig )
    return false;

  var digest = 'Bitcoin Signed Message:\n' +msg;
  var hash = Crypto.SHA256(Crypto.SHA256(digest, {asBytes: true}), {asBytes: true});

  var bytes = Crypto.util.base64ToBytes(sig);
  sig = Bitcoin.ECDSA.parseSigCompact(bytes);

  var res = false;

  for (var i=0; i<4; i++)
  {
    sig.i = i;

    try {
      var pubKey = Bitcoin.ECDSA.recoverPubKey(sig.r, sig.s, hash, sig.i);
    } catch(err) {
      return false;
    }

    var expectedAddress = pubKey.getBitcoinAddress().toString();
    if (expectedAddress==adr)
    {
      res = adr;
      break;
    }
  }

  return res;
}

// command-line tests
if (typeof require != 'undefined' && require.main === module) {
  window=global,navigator=Bitcoin={};eval(require('fs').readFileSync('./bitcoinjs-min.js')+'');

  var s = [
    '-----BEGIN-SIGNATURE-BLOCK-------------------------------------',
    'Address:    1JwSSubhmg6iPtRjtyqhUYYH7bZg3Lfy1T',
    'Message:    "This is an example of a signed message."',
    'PublicKey:  0478d430274f8c5ec1321338151e9f27f4c676a008bdf8638d',
    '            07c0b6be9ab35c71a1518063243acd4dfe96b66e3f2ec8013c',
    '            8e072cd09b3834a19f81f659cc3455',
    'Signature:  ad2e12415efc3509c261daee79eb31ae5a1dffd89045222d15',
    '            b73740866649b119d2415d02917164e80d5c20a7820c768d15',
    '            2be377ea19a7f4f645227d9d2902',
    '-----END-SIGNATURE-BLOCK---------------------------------------'
  ].join('\n');

  console.log('verified to: ' + armory_verify_message(armory_split_message(s)));

  var codes = [
    'atuw tnde sghh utho sudi ekgk ohoj odwd ojhw',
    'ueis hnrt fsht fjes gsgg gswg eutd duus ftfs',
    'jgjs fghg waug hjah faaw tksn gwig hrrr tdot',
    'kjuu oeuj kdun adst gfug howu jjes fndd fref'
  ].join('\n');

  Armory.gen(codes, 5, function(r) { console.log(r[0]); } );

  var codes = [
    'fdrn oeej stgu orhe tujr ndhj fedh ijnh duuo',
    'tdrd irhg jsgi djrg iasu ifof oass nust hhgg'
  ].join('\n');

  Armory.gen(codes, 5, function(r) { console.log(r[0]); } );
}

/*
    electrum.js : Electrum deterministic wallet implementation (public domain)
*/

function electrum_extend_chain(pubKey, privKey, n, forChange, fromPrivKey) {
    var curve = getSECCurveByName("secp256k1");
    var mode = forChange ? 1 : 0;
    var mpk = pubKey.slice(1);
    var bytes = Crypto.charenc.UTF8.stringToBytes(n + ':' + mode + ':').concat(mpk);
    var sequence = Crypto.SHA256(Crypto.SHA256(bytes, {asBytes: true}), {asBytes: true});
    var secexp = null;
    var pt = ECPointFp.decodeFrom(curve.getCurve(), pubKey);

    var A;

    if (fromPrivKey) {
        A = BigInteger.fromByteArrayUnsigned(sequence);
        var B = BigInteger.fromByteArrayUnsigned(privKey);
        var C = curve.getN();
        secexp = A.add(B).mod(C);
        pt = pt.add(curve.getG().multiply(A));
    } else {
        A = BigInteger.fromByteArrayUnsigned(sequence);
        pt = pt.add(curve.getG().multiply(A));
    }

    var newPriv = secexp ? secexp.toByteArrayUnsigned(): [];
    for(;newPriv.length<32;) newPriv.unshift(0x00);
    var newPub = pt.getEncoded();
    var h160 = Bitcoin.Util.sha256ripe160(newPub);
    var addr = new Bitcoin.Address(h160);
    var sec = secexp ? new Bitcoin.Address(newPriv) : '';
    if (secexp)
        sec.version = 128;

    return [addr.toString(), sec.toString(), newPub, newPriv];
}

function electrum_get_pubkey(privKey) {
    var curve = getSECCurveByName("secp256k1");
    var secexp = BigInteger.fromByteArrayUnsigned(privKey);
    var pt = curve.getG().multiply(secexp);
    return pt.getEncoded();
}

var Electrum = new function () {
    var seedRounds = 100000;
    var seed;
    var oldseed;
    var pubKey;
    var privKey;
    var rounds;
    var range;
    var counter;
    var timeout;
    var onUpdate;
    var onSuccess;
    var addChange;

    function calcSeed() {
        if (rounds < seedRounds) {
            var portion = seedRounds / 100;
            onUpdate(rounds * 100 / seedRounds, seed);
            for (var i = 0; i < portion; i++)
                seed = Crypto.SHA256(seed.concat(oldseed), {asBytes: true});
            rounds += portion;
            if (rounds < seedRounds) {
                timeout = setTimeout(calcSeed, 0);
            } else {
                privKey = seed;
                pubKey = electrum_get_pubkey(privKey);
                onSuccess(privKey);
            }
        }
    }

    function calcAddr() {
        var r = electrum_extend_chain(pubKey, privKey, counter<range ? counter : counter-range, counter >= range, true);
        onUpdate(r);
        counter++;
        if (counter >= range+addChange) {
            if (onSuccess) 
                onSuccess();
        } else {
            timeout = setTimeout(calcAddr, 0);
        }
    }

    this.init = function(_seed, update, success) {
        seed = Crypto.charenc.UTF8.stringToBytes(_seed);
        oldseed = seed.slice(0);
        rounds = 0;
        onUpdate = update;
        onSuccess = success;
        clearTimeout(timeout);
        calcSeed();
    };

    this.gen = function(_range, update, success, useChange) {
        addChange = useChange;
        range = _range;
        counter = 0;
        onUpdate = update;
        onSuccess = success;
        clearTimeout(timeout);
        calcAddr();
    };

    this.stop = function () {
        clearTimeout(timeout);
    };

    return this;
};

function electrum_test() {

    Electrum.init('12345678', function(r) {console.log(r);},
        function() {Electrum.gen(5, function(r) {console.log(r);});});

    /*
    1DLHQhEuLftmAMTiYhw4DvVWhFQ9hnbXio
    1HvoaBYqebPqFaS7GEZzywTaiTrS8cSaCF
    1KMtsVJdde66kjgaK5dcte3TiWfFBF2bC7
    159zjjZB3TadPXE3oeei5MfxTCYu5bqDCd
    1H4uQ5i3MWSiUdHLJiPop9HWw2fe96CrLR
    1EkX2PAY21FuqsKVirZS6wkLkSwbbE4EFD
    */
}

/*
    tx.js - Bitcoin transactions for JavaScript (public domain)

    Obtaining inputs:
    1) http://blockchain.info/unspent?address=<address>
    2) http://blockexplorer.com/q/mytransactions/<address>

    Sending transactions:
    1) http://bitsend.rowit.co.uk
    2) http://www.blockchain.info/pushtx
*/

var TX = new function () {

    var inputs = [];
    var outputs = [];
    var eckey = null;
    var balance = BigInteger.ZERO;

    this.init = function(_eckey) {
        outputs = [];
        eckey = _eckey;
    }

    this.addOutput = function(addr, fval) {
        outputs.push({address: addr, value: fval});
    }

    this.removeOutputs = function() {
        outputs = [];
    }

    this.getBalance = function() {
        return balance;
    }

    this.getFee = function(sendTx) {
        var out = BigInteger.ZERO;
        for (var i in outputs) {
            var fval = outputs[i].value;
            value = new BigInteger('' + Math.round(fval*1e8), 10);
            out = out.add(value);
        }
        return balance.subtract(out);
    }

    this.getAddress = function(addrtype) {
        var addr = new Bitcoin.Address(eckey.getPubKeyHash());
        addr.version = addrtype ? addrtype : 0;
        return addr.toString();
    }

    this.parseInputs = function(text, address) {
        try {
            var res = tx_parseBCI(text, address);
        } catch(err) {
            var res = parseTxs(text, address);
        }

        balance = res.balance;
        inputs = res.unspenttxs;
    }

    this.rebuild = function(sendTx, resign) {
        if (!resign)
          sendTx = new Bitcoin.Transaction();

        var selectedOuts = [];
        for (var hash in inputs) {
            if (!inputs.hasOwnProperty(hash))
                continue;
            for (var index in inputs[hash]) {
                if (!inputs[hash].hasOwnProperty(index))
                    continue;
                var script = parseScript(inputs[hash][index].script);
                var b64hash = Crypto.util.bytesToBase64(Crypto.util.hexToBytes(hash));
                var txin = new Bitcoin.TransactionIn({outpoint: {hash: b64hash, index: index}, script: script, sequence: 4294967295});
                selectedOuts.push(txin);
                if (!resign)
                  sendTx.addInput(txin);
            }
        }

        for (var i in outputs) {
            var address = outputs[i].address;
            var fval = outputs[i].value;
            var value = new BigInteger('' + Math.round(fval * 1e8), 10);
            if (!resign)
              sendTx.addOutput(new Bitcoin.Address(address), value);
        }

        var hashType = 1;
        for (var i = 0; i < sendTx.ins.length; i++) {
            var connectedScript = selectedOuts[i].script;
            var hash = sendTx.hashTransactionForSignature(connectedScript, i, hashType);
            var pubKeyHash = connectedScript.simpleOutPubKeyHash();
            var signature = eckey.sign(hash);
            signature.push(parseInt(hashType, 10));
            var pubKey = eckey.getPub();
            var script = new Bitcoin.Script();
            script.writeBytes(signature);
            script.writeBytes(pubKey);
            sendTx.ins[i].script = script;
        }
        return sendTx;
    };

    this.construct = function() {
      return this.rebuild(null, false);
    }

    this.resign = function(sendTx) {
      return this.rebuild(sendTx, true);
    }

    function uint(f, size) {
        if (f.length < size)
            return 0;
        var bytes = f.slice(0, size);
        var pos = 1;
        var n = 0;
        for (var i = 0; i < size; i++) {
            var b = f.shift();
            n += b * pos;
            pos *= 256;
        }
        return size <= 4 ? n : bytes;
    }

    function u8(f)  { return uint(f,1); }
    function u16(f) { return uint(f,2); }
    function u32(f) { return uint(f,4); }
    function u64(f) { return uint(f,8); }

    function errv(val) {
        return (val instanceof BigInteger || val > 0xffff);
    }

    function readBuffer(f, size) {
        var res = f.slice(0, size);
        for (var i = 0; i < size; i++) f.shift();
        return res;
    }

    function readString(f) {
        var len = readVarInt(f);
        if (errv(len)) return [];
        return readBuffer(f, len);
    }

    function readVarInt(f) {
        var t = u8(f);
        if (t == 0xfd) return u16(f); else
        if (t == 0xfe) return u32(f); else
        if (t == 0xff) return u64(f); else
        return t;
    }

    this.deserialize = function(bytes) {
        var sendTx = new Bitcoin.Transaction();

        var f = bytes.slice(0);
        var tx_ver = u32(f);
        var vin_sz = readVarInt(f);
        if (errv(vin_sz))
            return null;

        for (var i = 0; i < vin_sz; i++) {
            var op = readBuffer(f, 32);
            var n = u32(f);
            var script = readString(f);
            var seq = u32(f);
            var txin = new Bitcoin.TransactionIn({
                outpoint: {
                    hash: Crypto.util.bytesToBase64(op),
                    index: n
                },
                script: new Bitcoin.Script(script),
                sequence: seq
            });
            sendTx.addInput(txin);
        }

        var vout_sz = readVarInt(f);

        if (errv(vout_sz))
            return null;

        for (var i = 0; i < vout_sz; i++) {
            var value = u64(f);
            var script = readString(f);

            var txout = new Bitcoin.TransactionOut({
                value: value,
                script: new Bitcoin.Script(script)
            });

            sendTx.addOutput(txout);
        }
        var lock_time = u32(f);
        sendTx.lock_time = lock_time;
        return sendTx;
    };

    this.toBBE = function(sendTx) {
        //serialize to Bitcoin Block Explorer format
        var buf = sendTx.serialize();
        var hash = Crypto.SHA256(Crypto.SHA256(buf, {asBytes: true}), {asBytes: true});

        var r = {};
        r['hash'] = Crypto.util.bytesToHex(hash.reverse());
        r['ver'] = sendTx.version;
        r['vin_sz'] = sendTx.ins.length;
        r['vout_sz'] = sendTx.outs.length;
        r['lock_time'] = sendTx.lock_time;
        r['size'] = buf.length;
        r['in'] = []
        r['out'] = []

        for (var i = 0; i < sendTx.ins.length; i++) {
            var txin = sendTx.ins[i];
            var hash = Crypto.util.base64ToBytes(txin.outpoint.hash);
            var n = txin.outpoint.index;
            var prev_out = {'hash': Crypto.util.bytesToHex(hash.reverse()), 'n': n};
            var seq = txin.sequence;

            if (n == 4294967295) {
                var cb = Crypto.util.bytesToHex(txin.script.buffer);
                r['in'].push({'prev_out': prev_out, 'coinbase' : cb, 'sequence':seq});
            } else {
                var ss = dumpScript(txin.script);
                r['in'].push({'prev_out': prev_out, 'scriptSig' : ss, 'sequence':seq});
            }
        }

        for (var i = 0; i < sendTx.outs.length; i++) {
            var txout = sendTx.outs[i];
            var bytes = txout.value.slice(0);
            var fval = parseFloat(Bitcoin.Util.formatValue(bytes.reverse()));
            var value = fval.toFixed(8);
            var spk = dumpScript(txout.script);
            r['out'].push({'value' : value, 'scriptPubKey': spk});
        }

        return JSON.stringify(r, null, 4);
    };

    this.fromBBE = function(text) {
        //deserialize from Bitcoin Block Explorer format
        var sendTx = new Bitcoin.Transaction();
        var r = JSON.parse(text);
        if (!r)
            return sendTx;
        var tx_ver = r['ver'];
        var vin_sz = r['vin_sz'];

        for (var i = 0; i < vin_sz; i++) {
            var txi = r['in'][i];
            var hash = Crypto.util.hexToBytes(txi['prev_out']['hash']);
            var n = txi['prev_out']['n'];

            if (txi['coinbase'])
                var script = Crypto.util.hexToBytes(txi['coinbase']);
            else
                var script = parseScript(txi['scriptSig']);

            var seq = txi['sequence'] === undefined ? 4294967295 : txi['sequence'];

            var txin = new Bitcoin.TransactionIn({
                outpoint: {
                    hash: Crypto.util.bytesToBase64(hash.reverse()),
                    index: n
                },
                script: new Bitcoin.Script(script),
                sequence: seq
            });
            sendTx.addInput(txin);
        }

        var vout_sz = r['vout_sz'];

        TX.removeOutputs();
        for (var i = 0; i < vout_sz; i++) {
            var txo = r['out'][i];
            var fval = parseFloat(txo['value']);
            var value = new BigInteger('' + Math.round(fval * 1e8), 10);
            var script = parseScript(txo['scriptPubKey']);

            if (value instanceof BigInteger) {
                value = value.toByteArrayUnsigned().reverse();
                while (value.length < 8) value.push(0);
            }

            var txout = new Bitcoin.TransactionOut({
                value: value,
                script: new Bitcoin.Script(script)
            });

            sendTx.addOutput(txout);
            TX.addOutput(txo,fval);
        }
        sendTx.lock_time = r['lock_time'];
        return sendTx;
    };
    return this;
};

function dumpScript(script) {
    var out = [];
    for (var i = 0; i < script.chunks.length; i++) {
        var chunk = script.chunks[i];
        var op = new Bitcoin.Opcode(chunk);
        typeof chunk == 'number' ?  out.push(op.toString()) :
            out.push(Crypto.util.bytesToHex(chunk));
    }
    return out.join(' ');
}

// blockchain.info parser (adapted)
// uses http://blockchain.info/unspent?active=<address>
function tx_parseBCI(data, address) {
    var r = JSON.parse(data);
    var txs = r.unspent_outputs;

    if (!txs)
        throw 'Not a BCI format';

    delete unspenttxs;
    var unspenttxs = {};
    var balance = BigInteger.ZERO;
    for (var i in txs) {
        var o = txs[i];
        var lilendHash = o.tx_hash;

        //convert script back to BBE-compatible text
        var script = dumpScript( new Bitcoin.Script(Crypto.util.hexToBytes(o.script)) );

        var value = new BigInteger('' + o.value, 10);
        if (!(lilendHash in unspenttxs))
            unspenttxs[lilendHash] = {};
        unspenttxs[lilendHash][o.tx_output_n] = {amount: value, script: script};
        balance = balance.add(value);
    }
    return {balance:balance, unspenttxs:unspenttxs};
}

// blockexplorer parser (by BTCurious)
// uses http://blockexplorer.com/q/mytransactions/<address>
// --->8---
function parseTxs(data, address) {

    var address = address.toString();
    var tmp = JSON.parse(data);
    var txs = [];
    for (var a in tmp) {
        if (!tmp.hasOwnProperty(a))
            continue;
        txs.push(tmp[a]);
    }

    // Sort chronologically
    txs.sort(function(a,b) {
        if (a.time > b.time) return 1;
        else if (a.time < b.time) return -1;
        return 0;
    })

    delete unspenttxs;
    var unspenttxs = {}; // { "<hash>": { <output index>: { amount:<amount>, script:<script> }}}

    var balance = BigInteger.ZERO;

    // Enumerate the transactions
    for (var a in txs) {

        if (!txs.hasOwnProperty(a))
            continue;
        var tx = txs[a];
        if (tx.ver != 1) throw "Unknown version found. Expected version 1, found version " + tx.ver;

        // Enumerate inputs
        for (var b in tx.in ) {
            if (!tx.in.hasOwnProperty(b))
                continue;
            var input = tx.in[b];
            var p = input.prev_out;
            var lilendHash = endian(p.hash)
            // if this came from a transaction to our address...
            if (lilendHash in unspenttxs) {
                unspenttx = unspenttxs[lilendHash];

                // remove from unspent transactions, and deduce the amount from the balance
                balance = balance.subtract(unspenttx[p.n].amount);
                delete unspenttx[p.n]
                if (isEmpty(unspenttx)) {
                    delete unspenttxs[lilendHash]
                }
            }
        }

        // Enumerate outputs
        var i = 0;
        for (var b in tx.out) {
            if (!tx.out.hasOwnProperty(b))
                continue;

            var output = tx.out[b];

            // if this was sent to our address...
            if (output.address == address) {
                // remember the transaction, index, amount, and script, and add the amount to the wallet balance
                var value = btcstr2bignum(output.value);
                var lilendHash = endian(tx.hash)
                if (!(lilendHash in unspenttxs))
                    unspenttxs[lilendHash] = {};
                unspenttxs[lilendHash][i] = {amount: value, script: output.scriptPubKey};
                balance = balance.add(value);
            }
            i = i + 1;
        }
    }

    return {balance:balance, unspenttxs:unspenttxs};
}

function isEmpty(ob) {
    for(var i in ob){ if(ob.hasOwnProperty(i)){return false;}}
    return true;
}

function endian(string) {
    var out = []
    for(var i = string.length; i > 0; i-=2) {
        out.push(string.substring(i-2,i));
    }
    return out.join("");
}

function btcstr2bignum(btc) {
    var i = btc.indexOf('.');
    var value = new BigInteger(btc.replace(/\./,''));
    var diff = 9 - (btc.length - i);
    if (i == -1) {
        var mul = "100000000";
    } else if (diff < 0) {
        return value.divide(new BigInteger(Math.pow(10,-1*diff).toString()));
    } else {
        var mul = Math.pow(10,diff).toString();
    }
    return value.multiply(new BigInteger(mul));
}

function parseScript(script) {
    var newScript = new Bitcoin.Script();
    var s = script.split(" ");
    for (var i in s) {
        if (Bitcoin.Opcode.map.hasOwnProperty(s[i])){
            newScript.writeOp(Bitcoin.Opcode.map[s[i]]);
        } else {
            newScript.writeBytes(Crypto.util.hexToBytes(s[i]));
        }
    }
    return newScript;
}

var tx_dest = '1J9aQhHzRKUEVFEypkmzWKuiBHycpMY7HR';
var tx_sec = '5KdttCmkLPPLN4oDet53FBdPxp4N1DWoGCiigd3ES9Wuknhm8uT';
var tx_addr = '12c6DSiU4Rq3P4ZxziKxzrL5LmMBrzjrJX';
var tx_unspent = '{"unspent_outputs":[{"tx_hash":"7a06ea98cd40ba2e3288262b28638cec5337c1456aaf5eedc8e9e5a20f062bdf","tx_index":5,"tx_output_n": 0,"script":"4104de472bf240fe580f567e47793bb954feb2286fd6c406c31da54a6c0e7779b8ae52728817a76f9540ed0f8dccba048067acf7b0810f49cecf670e4a572e0ba6d5ac","value": 5000000000,"value_hex": "012a05f200","confirmations":177254}]}';

function tx_test() {
    var secret = Bitcoin.Base58.decode(tx_sec).slice(1, 33);
    var eckey = new Bitcoin.ECKey(secret);
    TX.init(eckey);
    TX.parseInputs(tx_unspent, TX.getAddress());
    TX.addOutput(tx_dest, 49.9999);
    var sendTx = TX.construct();
    console.log(TX.toBBE(sendTx));
    console.log(Crypto.util.bytesToHex(sendTx.serialize()));
}
/*
    bitcoinsig.js - sign and verify messages with bitcoin address (public domain)
*/

function msg_numToVarInt(i) {
    if (i < 0xfd) {
      return [i];
    } else if (i <= 0xffff) {
      // can't use numToVarInt from bitcoinjs, BitcoinQT wants big endian here (!)
      return [0xfd, i & 255, i >>> 8];
    } else if (i <= 0xffffffff) {
      return [0xfe, i & 255, (i >>> 8) & 255, (i >>> 16) & 255, i >>> 24];
    } else {
        throw ("message too large");
    }
}

function msg_bytes(message) {
    var b = Crypto.charenc.UTF8.stringToBytes(message);
    return msg_numToVarInt(b.length).concat(b);
}

function msg_digest(message) {
    var b = msg_bytes("Bitcoin Signed Message:\n").concat(msg_bytes(message));
    return Crypto.SHA256(Crypto.SHA256(b, {asBytes:true}), {asBytes:true});
}

function verify_message(signature, message, addrtype) {
    try {
        var sig = Crypto.util.base64ToBytes(signature);
    } catch(err) {
        return false;
    }

    if (sig.length != 65)
        return false;

    // extract r,s from signature
    var r = BigInteger.fromByteArrayUnsigned(sig.slice(1,1+32));
    var s = BigInteger.fromByteArrayUnsigned(sig.slice(33,33+32));

    // get recid
    var compressed = false;
    var nV = sig[0];
    if (nV < 27 || nV >= 35)
        return false;
    if (nV >= 31) {
        compressed = true;
        nV -= 4;
    }
    var recid = BigInteger.valueOf(nV - 27);

    var ecparams = getSECCurveByName("secp256k1");
    var curve = ecparams.getCurve();
    var a = curve.getA().toBigInteger();
    var b = curve.getB().toBigInteger();
    var p = curve.getQ();
    var G = ecparams.getG();
    var order = ecparams.getN();

    var x = r.add(order.multiply(recid.divide(BigInteger.valueOf(2))));
    var alpha = x.multiply(x).multiply(x).add(a.multiply(x)).add(b).mod(p);
    var beta = alpha.modPow(p.add(BigInteger.ONE).divide(BigInteger.valueOf(4)), p);
    var y = beta.subtract(recid).isEven() ? beta : p.subtract(beta);

    var R = new ECPointFp(curve, curve.fromBigInteger(x), curve.fromBigInteger(y));
    var e = BigInteger.fromByteArrayUnsigned(msg_digest(message));
    var minus_e = e.negate().mod(order);
    var inv_r = r.modInverse(order);
    var Q = (R.multiply(s).add(G.multiply(minus_e))).multiply(inv_r);

    var public_key = Q.getEncoded(compressed);
    var addr = new Bitcoin.Address(Bitcoin.Util.sha256ripe160(public_key));

    addr.version = addrtype ? addrtype : 0;
    return addr.toString();
}

function sign_message(private_key, message, compressed, addrtype) {
    if (!private_key)
        return false;

    var signature = private_key.sign(msg_digest(message));
    var address = new Bitcoin.Address(private_key.getPubKeyHash());
    address.version = addrtype ? addrtype : 0;

    //convert ASN.1-serialized signature to bitcoin-qt format
    var obj = Bitcoin.ECDSA.parseSig(signature);
    var sequence = [0];
    sequence = sequence.concat(obj.r.toByteArrayUnsigned());
    sequence = sequence.concat(obj.s.toByteArrayUnsigned());

    for (var i = 0; i < 4; i++) {
        var nV = 27 + i;
        if (compressed)
            nV += 4;
        sequence[0] = nV;
        var sig = Crypto.util.bytesToBase64(sequence);
        if (verify_message(sig, message, addrtype) == address)
            return sig;
    }

    return false;
}

function bitcoinsig_test() {
    var k = '5JeWZ1z6sRcLTJXdQEDdB986E6XfLAkj9CgNE4EHzr5GmjrVFpf';
    var a = '17mDAmveV5wBwxajBsY7g1trbMW1DVWcgL';
    var s = 'HDiv4Oe9SjM1FFVbKk4m3N34efYiRgkQGGoEm564ldYt44jHVTuX23+WnihNMi4vujvpUs1M529P3kftjDezn9E=';
    var m = 'test message';
    payload = Bitcoin.Base58.decode(k);
    secret = payload.slice(1, 33);
    compressed = payload.length == 38;
    console.log(verify_message(s, m));
    sig = sign_message(new Bitcoin.ECKey(secret), m, compressed);
    console.log(verify_message(sig, m));
}

if (typeof require != 'undefined' && require.main === module) {
    window = global; navigator = {}; Bitcoin = {};
    eval(require('fs').readFileSync('./bitcoinjs-min.js')+'');
    eval(require('path').basename(module.filename,'.js')+'_test()');
}

!function(globals){
'use strict'

//*** UMD BEGIN
if (typeof define !== 'undefined' && define.amd) { //require.js / AMD
  define([], function() {
    return secureRandom
  })
} else if (typeof module !== 'undefined' && module.exports) { //CommonJS
  module.exports = secureRandom
} else { //script / browser
  globals.secureRandom = secureRandom
}
//*** UMD END

//options.type is the only valid option
function secureRandom(count, options) {
  options = options || {type: 'Array'}
  //we check for process.pid to prevent browserify from tricking us
  if (typeof process != 'undefined' && typeof process.pid == 'number') {
    return nodeRandom(count, options)
  } else {
    var crypto = window.crypto || window.msCrypto
    if (!crypto) throw new Error("Your browser does not support window.crypto.")
    return browserRandom(count, options)
  }
}

function nodeRandom(count, options) {
  var crypto = require('crypto')
  var buf = crypto.randomBytes(count)

  switch (options.type) {
    case 'Array':
      return [].slice.call(buf)
    case 'Buffer':
      return buf
    case 'Uint8Array':
      var arr = new Uint8Array(count)
      for (var i = 0; i < count; ++i) { arr[i] = buf.readUInt8(i) }
      return arr
    default:
      throw new Error(options.type + " is unsupported.")
  }
}

function browserRandom(count, options) {
  var nativeArr = new Uint8Array(count)
  var crypto = window.crypto || window.msCrypto
  crypto.getRandomValues(nativeArr)

  switch (options.type) {
    case 'Array':
      return [].slice.call(nativeArr)
    case 'Buffer':
      try { var b = new Buffer(1) } catch(e) { throw new Error('Buffer not supported in this environment. Use Node.js or Browserify for browser support.')}
      return new Buffer(nativeArr)
    case 'Uint8Array':
      return nativeArr
    default:
      throw new Error(options.type + " is unsupported.")
  }
}

secureRandom.randomArray = function(byteCount) {
  return secureRandom(byteCount, {type: 'Array'})
}

secureRandom.randomUint8Array = function(byteCount) {
  return secureRandom(byteCount, {type: 'Uint8Array'})
}

secureRandom.randomBuffer = function(byteCount) {
  return secureRandom(byteCount, {type: 'Buffer'})
}


}(this);
  /*
    armory.js : Armory deterministic wallet implementation (public domain)
*/

function armory_extend_chain(pubKey, chainCode, privKey, fromPrivKey) {
    var chainXor = Crypto.SHA256(Crypto.SHA256(pubKey, {asBytes: true}), {asBytes: true});

    for (var i = 0; i < 32; i++)
        chainXor[i] ^= chainCode[i];

    var curve = getSECCurveByName("secp256k1");
    var secexp = null;
    var pt;

    var A;

    if (fromPrivKey) {
        A = BigInteger.fromByteArrayUnsigned(chainXor);
        var B = BigInteger.fromByteArrayUnsigned(privKey);
        var C = curve.getN();
        secexp = (A.multiply(B)).mod(C);
        pt = curve.getG().multiply(secexp);
    } else {
        A = BigInteger.fromByteArrayUnsigned(chainXor);
        pt = ECPointFp.decodeFrom(curve.getCurve(), pubKey).multiply(A);
    }

    var newPriv = secexp ? secexp.toByteArrayUnsigned() : [];
    var newPub = pt.getEncoded();
    var h160 = Bitcoin.Util.sha256ripe160(newPub);
    var addr = new Bitcoin.Address(h160);
    var sec = secexp ? new Bitcoin.Address(newPriv) : '';
    if (secexp)
        sec.version = 128;

    return [addr.toString(), sec.toString(), newPub, newPriv];
}

var armory_f = '0123456789abcdef';
var armory_t = 'asdfghjkwertuion';

function armory_map(str, from, to) {
    var res = '';
    for (var i = 0; i < str.length; i++)
        res += from.charAt(to.indexOf(str.charAt(i)));
    return res;
}

function armory_encode_keys(privKey, chainCode) {
    var key = privKey.concat(chainCode);
    var res = [];

    var str, code;

    for (var i = 0; i < 4; i++) {
        var bytes = key.slice(i * 16, i * 16 + 16);
        var cs = Crypto.SHA256(Crypto.SHA256(bytes, {asBytes: true}), {asBytes: true});
        str = Crypto.util.bytesToHex(bytes.concat(cs.slice(0,2)));
        code = armory_map(str, armory_t, armory_f);
        var arr = [];
        for (var j = 0; j < 9; j++)
            arr.push(code.substr(j*4, 4));
        code = arr.join(' ');
        res.push(code);
    }
    str = res.join('\n');
    return str;
}

function armory_derive_chaincode(root)
{
  var msg = 'Derive Chaincode from Root Key';
  var hash = Crypto.SHA256(Crypto.SHA256(root, {asBytes: true}), {asBytes: true});

  var okey = [];
  var ikey = [];
  for (var i in hash)
  {
    okey.push(0x5c^hash[i]);
    ikey.push(0x36^hash[i]);
  }

  var m = Crypto.charenc.UTF8.stringToBytes(msg);
  var a = Crypto.SHA256(ikey.concat(m), {asBytes: true});
  var b = Crypto.SHA256(okey.concat(a), {asBytes: true});
  return b;
}

function armory_decode_keys(data) {
    var keys = data.split('\n');
    var lines = [];
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i].replace(' ','');
        var raw = Crypto.util.hexToBytes(armory_map(k, armory_f, armory_t));
        data = raw.slice(0, 16);
      lines.push(data);
    }
    try {
        var privKey = lines[0].concat(lines[1]);
        var chainCode = (lines.length==4) ? lines[2].concat(lines[3]) : armory_derive_chaincode(privKey);
        return [privKey, chainCode];
    } catch (errr) {
        return null;
    }
}

function armory_get_pubkey(privKey) {
    var curve = getSECCurveByName("secp256k1");
    var secexp = BigInteger.fromByteArrayUnsigned(privKey);
    var pt = curve.getG().multiply(secexp);
    return pt.getEncoded();
}

function armory_get_wallet_uid(pubKey) {
    var h160 = Bitcoin.Util.sha256ripe160(pubKey);
    var id = [0].concat(h160.slice(0,5)).reverse();
    return Bitcoin.Base58.encode(id);
}

var Armory = new function () {
    var pubKey;
    var privKey;
    var chainCode;
    var range;
    var counter;
    var timeout;
    var onSuccess;
    var onUpdate;

    function calcAddr() {
        var r = armory_extend_chain(pubKey, chainCode, privKey, true);
        onUpdate(r);
        pubKey = r[2];
        privKey = r[3];
        counter++;
        if (counter < range) {
            timeout = setTimeout(calcAddr, 0);
        } else {
            if (onSuccess)
                onSuccess();
        }
    }

    this.gen = function(seed, _range, update, success) {
        var keys = armory_decode_keys(seed);
        if (keys == null)
            return null;
        privKey = keys[0];
        chainCode = keys[1];
        pubKey = armory_get_pubkey(privKey);
        range = _range;
        counter = 0;
        onUpdate = update;
        onSuccess = success;
        clearTimeout(timeout);
        calcAddr();
        return armory_get_wallet_uid(pubKey);
    };

    this.stop = function () {
        clearTimeout(timeout);
    };

    return this;
};

function armory_trim(str)
{
  str = str.replace(/^\s+|\s+$/g, '');
  str = str.replace(/^"+|"+$/g, '');
  return str;
}

function armory_fmt(str, quote)
{
  var chunks = str.match(/.{1,50}/g);
  var span = '\n            ';
  span = quote ? '"'+span+'"':span;
  var res = chunks.join(span);
  return quote ? '"'+res+'"' : res;
}

function crc24(buf) {
  var table = [0x000000, 0x864cfb, 0x8ad50d, 0x0c99f6, 0x93e6e1, 0x15aa1a, 0x1933ec, 0x9f7f17, 0xa18139, 0x27cdc2, 0x2b5434, 0xad18cf, 0x3267d8, 0xb42b23, 0xb8b2d5, 0x3efe2e, 0xc54e89, 0x430272, 0x4f9b84, 0xc9d77f, 0x56a868, 0xd0e493, 0xdc7d65, 0x5a319e, 0x64cfb0, 0xe2834b, 0xee1abd, 0x685646, 0xf72951, 0x7165aa, 0x7dfc5c, 0xfbb0a7, 0x0cd1e9, 0x8a9d12, 0x8604e4, 0x00481f, 0x9f3708, 0x197bf3, 0x15e205, 0x93aefe, 0xad50d0, 0x2b1c2b, 0x2785dd, 0xa1c926, 0x3eb631, 0xb8faca, 0xb4633c, 0x322fc7, 0xc99f60, 0x4fd39b, 0x434a6d, 0xc50696, 0x5a7981, 0xdc357a, 0xd0ac8c, 0x56e077, 0x681e59, 0xee52a2, 0xe2cb54, 0x6487af, 0xfbf8b8, 0x7db443, 0x712db5, 0xf7614e, 0x19a3d2, 0x9fef29, 0x9376df, 0x153a24, 0x8a4533, 0x0c09c8, 0x00903e, 0x86dcc5, 0xb822eb, 0x3e6e10, 0x32f7e6, 0xb4bb1d, 0x2bc40a, 0xad88f1, 0xa11107, 0x275dfc, 0xdced5b, 0x5aa1a0, 0x563856, 0xd074ad, 0x4f0bba, 0xc94741, 0xc5deb7, 0x43924c, 0x7d6c62, 0xfb2099, 0xf7b96f, 0x71f594, 0xee8a83, 0x68c678, 0x645f8e, 0xe21375, 0x15723b, 0x933ec0, 0x9fa736, 0x19ebcd, 0x8694da, 0x00d821, 0x0c41d7, 0x8a0d2c, 0xb4f302, 0x32bff9, 0x3e260f, 0xb86af4, 0x2715e3, 0xa15918, 0xadc0ee, 0x2b8c15, 0xd03cb2, 0x567049, 0x5ae9bf, 0xdca544, 0x43da53, 0xc596a8, 0xc90f5e, 0x4f43a5, 0x71bd8b, 0xf7f170, 0xfb6886, 0x7d247d, 0xe25b6a, 0x641791, 0x688e67, 0xeec29c, 0x3347a4, 0xb50b5f, 0xb992a9, 0x3fde52, 0xa0a145, 0x26edbe, 0x2a7448, 0xac38b3, 0x92c69d, 0x148a66, 0x181390, 0x9e5f6b, 0x01207c, 0x876c87, 0x8bf571, 0x0db98a, 0xf6092d, 0x7045d6, 0x7cdc20, 0xfa90db, 0x65efcc, 0xe3a337, 0xef3ac1, 0x69763a, 0x578814, 0xd1c4ef, 0xdd5d19, 0x5b11e2, 0xc46ef5, 0x42220e, 0x4ebbf8, 0xc8f703, 0x3f964d, 0xb9dab6, 0xb54340, 0x330fbb, 0xac70ac, 0x2a3c57, 0x26a5a1, 0xa0e95a, 0x9e1774, 0x185b8f, 0x14c279, 0x928e82, 0x0df195, 0x8bbd6e, 0x872498, 0x016863, 0xfad8c4, 0x7c943f, 0x700dc9, 0xf64132, 0x693e25, 0xef72de, 0xe3eb28, 0x65a7d3, 0x5b59fd, 0xdd1506, 0xd18cf0, 0x57c00b, 0xc8bf1c, 0x4ef3e7, 0x426a11, 0xc426ea, 0x2ae476, 0xaca88d, 0xa0317b, 0x267d80, 0xb90297, 0x3f4e6c, 0x33d79a, 0xb59b61, 0x8b654f, 0x0d29b4, 0x01b042, 0x87fcb9, 0x1883ae, 0x9ecf55, 0x9256a3, 0x141a58, 0xefaaff, 0x69e604, 0x657ff2, 0xe33309, 0x7c4c1e, 0xfa00e5, 0xf69913, 0x70d5e8, 0x4e2bc6, 0xc8673d, 0xc4fecb, 0x42b230, 0xddcd27, 0x5b81dc, 0x57182a, 0xd154d1, 0x26359f, 0xa07964, 0xace092, 0x2aac69, 0xb5d37e, 0x339f85, 0x3f0673, 0xb94a88, 0x87b4a6, 0x01f85d, 0x0d61ab, 0x8b2d50, 0x145247, 0x921ebc, 0x9e874a, 0x18cbb1, 0xe37b16, 0x6537ed, 0x69ae1b, 0xefe2e0, 0x709df7, 0xf6d10c, 0xfa48fa, 0x7c0401, 0x42fa2f, 0xc4b6d4, 0xc82f22, 0x4e63d9, 0xd11cce, 0x575035, 0x5bc9c3, 0xdd8538];
  var crc = 0xb704ce;
  for (i=0; i<buf.length; i++)
    crc = (table[((crc >> 16) ^ buf[i]) & 0xff] ^ (crc << 8)) & 0xffffff;
  return crc;
}

function armory_split_string(str) {
  var l = str.length, lc = 0, chunks = [], c = 0, chunkSize = 64;
  for (; lc < l; c++)
    chunks[c] = str.slice(lc, lc += chunkSize);
  return chunks.join('\r\n');
}

function armory_sign_message(private_key, address, message, compressed, addrtype, mode)
{
  // armory needs \r\n for some reason
  message = message.replace(/\n/g,'\r\n');

  var sig = sign_message(private_key, message, compressed, addrtype);
  var sig_bytes = Crypto.util.base64ToBytes(sig);
  var msg_bytes = Crypto.charenc.UTF8.stringToBytes(message);

  if (mode=='armory_base64') {

    var payload = sig_bytes.concat(msg_bytes);
    var crc = crc24(payload);

    return '-----BEGIN BITCOIN MESSAGE-----'
      +'\nComment: Signed by Bitcoin Armory v0.93.1'
      +'\n'
      +'\n'+armory_split_string(Crypto.util.bytesToBase64(payload))
      +'\n='+Crypto.util.bytesToBase64([crc & 0xff, (crc >>> 8 ) & 0xff, (crc >>> 16 ) & 0xff])
      +'\n'+'-----END BITCOIN MESSAGE-----';

  } else if (mode=='armory_clearsign') {

    var payload = sig_bytes;
    var crc = crc24(payload);

    return '-----BEGIN BITCOIN SIGNED MESSAGE-----'
      +'\nComment: Signed by Bitcoin Armory v0.93.1'
      +'\n'
      +'\n'+message
      +'\n-----BEGIN BITCOIN SIGNATURE-----'
      +'\n'
      +'\n'
      +'\n'+armory_split_string(Crypto.util.bytesToBase64(payload))
      +'\n='+Crypto.util.bytesToBase64([crc & 0xff, (crc >>> 8 ) & 0xff, (crc >>> 16 ) & 0xff])
      +'\n'+'-----END BITCOIN SIGNATURE-----';
  }

  message = message.replace(/\r|\n/g, ' ');
  message = message.replace(/\"/g, '\'');

  var digest = 'Bitcoin Signed Message:\n' +message;
  var hash = Crypto.SHA256(Crypto.SHA256(digest, {asBytes: true}), {asBytes: true});
  var sig = private_key.sign(hash);
  var obj = Bitcoin.ECDSA.parseSig(sig);
  var sigHex = Crypto.util.bytesToHex(integerToBytes(obj.r, 32))+Crypto.util.bytesToHex(integerToBytes(obj.s, 32));
  var pubHex = Crypto.util.bytesToHex(private_key.pub);

  return '-----BEGIN-SIGNATURE-BLOCK-------------------------------------'
      +'\nAddress:    '+address
      +'\nMessage:    '+armory_fmt(message,true)
      +'\nPublicKey:  '+armory_fmt(pubHex)
      +'\nSignature:  '+armory_fmt(sigHex)
      +'\n-----END-SIGNATURE-BLOCK---------------------------------------';
}

function armory_split_message(str)
{
  var regs = str.match(/-----BEGIN BITCOIN MESSAGE-----\nComment.*\n+([\s\S]*?)\n-----END BITCOIN MESSAGE-----/m);
  if (regs && regs.length==2) {

    var s = regs[1].split('\n');
    s = s.slice(0,-1); // ignore crc for now
    var payload = s.join('');

    var bytes = Crypto.util.base64ToBytes(payload);

    var sig_bytes = bytes.slice(0,65);
    var msg_bytes = bytes.slice(65);

    var msg =''; try { msg = Crypto.charenc.UTF8.bytesToString(msg_bytes); } catch (err) {  console.log(err); return null; };
    var sig = Crypto.util.bytesToBase64(sig_bytes);

    return { "message": msg, "signature": sig, "type": "armory_base64" };
  }

  regs = str.match(/-----BEGIN BITCOIN SIGNED MESSAGE-----\nComment.*\n+([\s\S]*?)\n-----BEGIN BITCOIN SIGNATURE-----\n+([\s\S]*?)\n-----END BITCOIN SIGNATURE-----/m);
  if (regs && regs.length==3) {
    var msg = regs[1];
    var s = regs[2].split('\n');
    s = s.slice(0,-1); // ignore crc for now
    var sig = s.join(''); 

    // again, armory needs \r\n in message for some reason
    msg = msg.replace(/\n/g,'\r\n');

    return { "message": msg, "signature": sig, "type": "armory_clearsign" };
  }

  var a = str.split('\n');
  var pre = true;
  var fields = ["Address","Message","PublicKey","Signature"];
  var p = {};
  var key = null;
  for (i in a)
  {
    var s = a[i];

    if (pre && s.indexOf('-----BEGIN-SIGNATURE-BLOCK')==0)
      pre = false;

    if (!pre)
    {
      if (s.indexOf('-----END-SIGNATURE-BLOCK')==0)
        break;
      for (j in fields)
      {
        var k = fields[j];
        if (s.indexOf(k+':')==0)
        {
          key = k;
          p[key]=''
          s = s.split(':')[1];
          break;
        }
      }

      if (key)
        p[key]+=armory_trim(s);
    }
  }

  if (p.Message && p.Signature && p.Address && p.PublicKey)
  {
    // return signature in a standard base64 form
    var bytes = [27].concat(Crypto.util.hexToBytes(p.Signature));
    sig = Crypto.util.bytesToBase64(bytes);
    return {"message":p.Message, "address":p.Address, "signature":sig, "pubkey":p.PublicKey, "type": "armory_hex" };
  }

  return null;
}

function armory_verify_message(p)
{
  var adr = p['address'];
  var msg = p['message'];
  var pub = p['pubkey'];
  var sig = p['signature'];

  if (!adr || !msg || !pub || !sig )
    return false;

  var digest = 'Bitcoin Signed Message:\n' +msg;
  var hash = Crypto.SHA256(Crypto.SHA256(digest, {asBytes: true}), {asBytes: true});

  var bytes = Crypto.util.base64ToBytes(sig);
  sig = Bitcoin.ECDSA.parseSigCompact(bytes);

  var res = false;

  for (var i=0; i<4; i++)
  {
    sig.i = i;

    try {
      var pubKey = Bitcoin.ECDSA.recoverPubKey(sig.r, sig.s, hash, sig.i);
    } catch(err) {
      return false;
    }

    var expectedAddress = pubKey.getBitcoinAddress().toString();
    if (expectedAddress==adr)
    {
      res = adr;
      break;
    }
  }

  return res;
}

// command-line tests
if (typeof require != 'undefined' && require.main === module) {
  window=global,navigator=Bitcoin={};eval(require('fs').readFileSync('./bitcoinjs-min.js')+'');

  var s = [
    '-----BEGIN-SIGNATURE-BLOCK-------------------------------------',
    'Address:    1JwSSubhmg6iPtRjtyqhUYYH7bZg3Lfy1T',
    'Message:    "This is an example of a signed message."',
    'PublicKey:  0478d430274f8c5ec1321338151e9f27f4c676a008bdf8638d',
    '            07c0b6be9ab35c71a1518063243acd4dfe96b66e3f2ec8013c',
    '            8e072cd09b3834a19f81f659cc3455',
    'Signature:  ad2e12415efc3509c261daee79eb31ae5a1dffd89045222d15',
    '            b73740866649b119d2415d02917164e80d5c20a7820c768d15',
    '            2be377ea19a7f4f645227d9d2902',
    '-----END-SIGNATURE-BLOCK---------------------------------------'
  ].join('\n');

  console.log('verified to: ' + armory_verify_message(armory_split_message(s)));

  var codes = [
    'atuw tnde sghh utho sudi ekgk ohoj odwd ojhw',
    'ueis hnrt fsht fjes gsgg gswg eutd duus ftfs',
    'jgjs fghg waug hjah faaw tksn gwig hrrr tdot',
    'kjuu oeuj kdun adst gfug howu jjes fndd fref'
  ].join('\n');

  Armory.gen(codes, 5, function(r) { console.log(r[0]); } );

  var codes = [
    'fdrn oeej stgu orhe tujr ndhj fedh ijnh duuo',
    'tdrd irhg jsgi djrg iasu ifof oass nust hhgg'
  ].join('\n');

  Armory.gen(codes, 5, function(r) { console.log(r[0]); } );
}

// ASN.1 JavaScript decoder
// Copyright (c) 2008-2013 Lapo Luchini <lapo@lapo.it>

// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
// 
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

/*jshint browser: true, strict: true, globalstrict: true, immed: true, latedef: true, undef: true, regexdash: false */
/*global oids */
"use strict";

function Stream(enc, pos) {
    if (enc instanceof Stream) {
        this.enc = enc.enc;
        this.pos = enc.pos;
    } else {
        this.enc = enc;
        this.pos = pos;
    }
}
Stream.prototype.ellipsis = "\u2026";
Stream.prototype.get = function (pos) {
    if (pos === undefined)
        pos = this.pos++;
    if (pos >= this.enc.length)
        throw 'Requesting byte offset ' + pos + ' on a stream of length ' + this.enc.length;
    return this.enc[pos];
};
Stream.prototype.hexDigits = "0123456789ABCDEF";
Stream.prototype.hexByte = function (b) {
    return this.hexDigits.charAt((b >> 4) & 0xF) + this.hexDigits.charAt(b & 0xF);
};
Stream.prototype.hexDump = function (start, end, raw) {
    var s = "";
    for (var i = start; i < end; ++i) {
        s += this.hexByte(this.get(i));
        if (raw !== true)
            switch (i & 0xF) {
            case 0x7: s += "  "; break;
            case 0xF: s += "\n"; break;
            default:  s += " ";
            }
    }
    return s;
};
Stream.prototype.parseStringISO = function (start, end) {
    var s = "";
    for (var i = start; i < end; ++i)
        s += String.fromCharCode(this.get(i));
    return s;
};
Stream.prototype.parseStringUTF = function (start, end) {
    var s = "", c = 0;
    for (var i = start; i < end; ) {
        c = this.get(i++);
        if (c < 128)
            s += String.fromCharCode(c);
        else if ((c > 191) && (c < 224))
            s += String.fromCharCode(((c & 0x1F) << 6) | (this.get(i++) & 0x3F));
        else
            s += String.fromCharCode(((c & 0x0F) << 12) | ((this.get(i++) & 0x3F) << 6) | (this.get(i++) & 0x3F));
        //TODO: this doesn't check properly 'end', some char could begin before and end after
    }
    return s;
};
Stream.prototype.reTime = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
Stream.prototype.parseTime = function (start, end) {
    var s = this.parseStringISO(start, end);
    var m = this.reTime.exec(s);
    if (!m)
        return "Unrecognized time: " + s;
    s = m[1] + "-" + m[2] + "-" + m[3] + " " + m[4];
    if (m[5]) {
        s += ":" + m[5];
        if (m[6]) {
            s += ":" + m[6];
            if (m[7])
                s += "." + m[7];
        }
    }
    if (m[8]) {
        s += " UTC";
        if (m[8] != 'Z') {
            s += m[8];
            if (m[9])
                s += ":" + m[9];
        }
    }
    return s;
};
Stream.prototype.parseInteger = function (start, end) {
    //TODO support negative numbers
    var len = end - start;
    if (len > 4) {
        len <<= 3;
        var s = this.get(start);
        if (s === 0)
            len -= 8;
        else
            while (s < 128) {
                s <<= 1;
                --len;
            }
        return "(" + len + " bit)";
    }
    var n = 0;
    for (var i = start; i < end; ++i)
        n = (n << 8) | this.get(i);
    return n;
};
Stream.prototype.parseBitString = function (start, end) {
    var unusedBit = this.get(start);
    var lenBit = ((end - start - 1) << 3) - unusedBit;
    var s = "(" + lenBit + " bit)";
    if (lenBit <= 20) {
        var skip = unusedBit;
        s += " ";
        for (var i = end - 1; i > start; --i) {
            var b = this.get(i);
            for (var j = skip; j < 8; ++j)
                s += (b >> j) & 1 ? "1" : "0";
            skip = 0;
        }
    }
    return s;
};
Stream.prototype.parseOctetString = function (start, end) {
    var len = end - start;
    var s = "(" + len + " byte) ";
    if (len > 20)
        end = start + 20;
    for (var i = start; i < end; ++i)
        s += this.hexByte(this.get(i));
    if (len > 20)
        s += Stream.ellipsis;
    return s;
};
Stream.prototype.parseOID = function (start, end) {
    var s = '', n = 0, bits = 0;
    for (var i = start; i < end; ++i) {
        var v = this.get(i);
        n = (n << 7) | (v & 0x7F);
        bits += 7;
        if (!(v & 0x80)) { // finished
            if (s === '') {
                var m = n < 80 ? n < 40 ? 0 : 1 : 2;
                s = m + "." + (n - m * 40);
            } else
                s += "." + ((bits >= 31) ? "bigint" : n);
            n = bits = 0;
        }
    }
    return s;
};

function ASN1(stream, header, length, tag, sub) {
    this.stream = stream;
    this.header = header;
    this.length = length;
    this.tag = tag;
    this.sub = sub;
}
ASN1.prototype.typeName = function () {
    if (this.tag === undefined)
        return "unknown";
    var tagClass = this.tag >> 6;
    var tagConstructed = (this.tag >> 5) & 1;
    var tagNumber = this.tag & 0x1F;
    switch (tagClass) {
    case 0: // universal
        switch (tagNumber) {
        case 0x00: return "EOC";
        case 0x01: return "BOOLEAN";
        case 0x02: return "INTEGER";
        case 0x03: return "BIT_STRING";
        case 0x04: return "OCTET_STRING";
        case 0x05: return "NULL";
        case 0x06: return "OBJECT_IDENTIFIER";
        case 0x07: return "ObjectDescriptor";
        case 0x08: return "EXTERNAL";
        case 0x09: return "REAL";
        case 0x0A: return "ENUMERATED";
        case 0x0B: return "EMBEDDED_PDV";
        case 0x0C: return "UTF8String";
        case 0x10: return "SEQUENCE";
        case 0x11: return "SET";
        case 0x12: return "NumericString";
        case 0x13: return "PrintableString"; // ASCII subset
        case 0x14: return "TeletexString"; // aka T61String
        case 0x15: return "VideotexString";
        case 0x16: return "IA5String"; // ASCII
        case 0x17: return "UTCTime";
        case 0x18: return "GeneralizedTime";
        case 0x19: return "GraphicString";
        case 0x1A: return "VisibleString"; // ASCII subset
        case 0x1B: return "GeneralString";
        case 0x1C: return "UniversalString";
        case 0x1E: return "BMPString";
        default:   return "Universal_" + tagNumber.toString(16);
        }
    case 1: return "Application_" + tagNumber.toString(16);
    case 2: return "[" + tagNumber + "]"; // Context
    case 3: return "Private_" + tagNumber.toString(16);
    }
};
ASN1.prototype.reSeemsASCII = /^[ -~]+$/;
ASN1.prototype.content = function () {
    if (this.tag === undefined)
        return null;
    var tagClass = this.tag >> 6,
        tagNumber = this.tag & 0x1F,
        content = this.posContent(),
        len = Math.abs(this.length);
    if (tagClass !== 0) { // universal
        if (this.sub !== null)
            return "(" + this.sub.length + " elem)";
        var s = this.stream.parseStringISO(content, content + len);
        if (this.reSeemsASCII.test(s))
            return s.substring(0, 40) + ((s.length > 40) ? this.stream.ellipsis : "");
        else
            return this.stream.parseOctetString(content, content + len);
    }
    switch (tagNumber) {
    case 0x01: // BOOLEAN
        return (this.stream.get(content) === 0) ? "false" : "true";
    case 0x02: // INTEGER
        return this.stream.parseInteger(content, content + len);
    case 0x03: // BIT_STRING
        return this.sub ? "(" + this.sub.length + " elem)" :
            this.stream.parseBitString(content, content + len);
    case 0x04: // OCTET_STRING
        return this.sub ? "(" + this.sub.length + " elem)" :
            this.stream.parseOctetString(content, content + len);
    //case 0x05: // NULL
    case 0x06: // OBJECT_IDENTIFIER
        return this.stream.parseOID(content, content + len);
    //case 0x07: // ObjectDescriptor
    //case 0x08: // EXTERNAL
    //case 0x09: // REAL
    //case 0x0A: // ENUMERATED
    //case 0x0B: // EMBEDDED_PDV
    case 0x10: // SEQUENCE
    case 0x11: // SET
        return "(" + this.sub.length + " elem)";
    case 0x0C: // UTF8String
        return this.stream.parseStringUTF(content, content + len);
    case 0x12: // NumericString
    case 0x13: // PrintableString
    case 0x14: // TeletexString
    case 0x15: // VideotexString
    case 0x16: // IA5String
    //case 0x19: // GraphicString
    case 0x1A: // VisibleString
    //case 0x1B: // GeneralString
    //case 0x1C: // UniversalString
    //case 0x1E: // BMPString
        return this.stream.parseStringISO(content, content + len);
    case 0x17: // UTCTime
    case 0x18: // GeneralizedTime
        return this.stream.parseTime(content, content + len);
    }
    return null;
};
ASN1.prototype.toString = function () {
    return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + ((this.sub === null) ? 'null' : this.sub.length) + "]";
};
ASN1.prototype.print = function (indent) {
    if (indent === undefined) indent = '';
    document.writeln(indent + this);
    if (this.sub !== null) {
        indent += '  ';
        for (var i = 0, max = this.sub.length; i < max; ++i)
            this.sub[i].print(indent);
    }
};
ASN1.prototype.toPrettyString = function (indent) {
    if (indent === undefined) indent = '';
    var s = indent + this.typeName() + " @" + this.stream.pos;
    if (this.length >= 0)
        s += "+";
    s += this.length;
    if (this.tag & 0x20)
        s += " (constructed)";
    else if (((this.tag == 0x03) || (this.tag == 0x04)) && (this.sub !== null))
        s += " (encapsulates)";
    s += "\n";
    if (this.sub !== null) {
        indent += '  ';
        for (var i = 0, max = this.sub.length; i < max; ++i)
            s += this.sub[i].toPrettyString(indent);
    }
    return s;
};
ASN1.prototype.toDOM = function () {
    var node = document.createElement("div");
    node.className = "node";
    node.asn1 = this;
    var head = document.createElement("div");
    head.className = "head";
    var s = this.typeName().replace(/_/g, " ");
    head.innerHTML = s;
    var content = this.content();
    if (content !== null) {
        content = String(content).replace(/</g, "&lt;");
        var preview = document.createElement("span");
        preview.className = "preview";
        preview.innerHTML = content;
        head.appendChild(preview);
    }
    node.appendChild(head);
    this.node = node;
    this.head = head;
    var value = document.createElement("div");
    value.className = "value";
    s = "Offset: " + this.stream.pos + "<br/>";
    s += "Length: " + this.header + "+";
    if (this.length >= 0)
        s += this.length;
    else
        s += (-this.length) + " (undefined)";
    if (this.tag & 0x20)
        s += "<br/>(constructed)";
    else if (((this.tag == 0x03) || (this.tag == 0x04)) && (this.sub !== null))
        s += "<br/>(encapsulates)";
    //TODO if (this.tag == 0x03) s += "Unused bits: "
    if (content !== null) {
        s += "<br/>Value:<br/><b>" + content + "</b>";
        if ((typeof oids === 'object') && (this.tag == 0x06)) {
            var oid = oids[content];
            if (oid) {
                if (oid.d) s += "<br/>" + oid.d;
                if (oid.c) s += "<br/>" + oid.c;
                if (oid.w) s += "<br/>(warning!)";
            }
        }
    }
    value.innerHTML = s;
    node.appendChild(value);
    var sub = document.createElement("div");
    sub.className = "sub";
    if (this.sub !== null) {
        for (var i = 0, max = this.sub.length; i < max; ++i)
            sub.appendChild(this.sub[i].toDOM());
    }
    node.appendChild(sub);
    head.switchNode = node;
    head.onclick = function () {
        var node = this.switchNode;
        node.className = (node.className == "node collapsed") ? "node" : "node collapsed";
    };
    return node;
};
ASN1.prototype.posStart = function () {
    return this.stream.pos;
};
ASN1.prototype.posContent = function () {
    return this.stream.pos + this.header;
};
ASN1.prototype.posEnd = function () {
    return this.stream.pos + this.header + Math.abs(this.length);
};
ASN1.prototype.fakeHover = function (current) {
    this.node.className += " hover";
    if (current)
        this.head.className += " hover";
};
ASN1.prototype.fakeOut = function (current) {
    var re = / ?hover/;
    this.node.className = this.node.className.replace(re, "");
    if (current)
        this.head.className = this.head.className.replace(re, "");
};
ASN1.prototype.toHexDOM_sub = function (node, className, stream, start, end) {
    if (start >= end)
        return;
    var sub = document.createElement("span");
    sub.className = className;
    sub.appendChild(document.createTextNode(
        stream.hexDump(start, end)));
    node.appendChild(sub);
};
ASN1.prototype.toHexDOM = function (root) {
    var node = document.createElement("span");
    node.className = 'hex';
    if (root === undefined) root = node;
    this.head.hexNode = node;
    this.head.onmouseover = function () { this.hexNode.className = "hexCurrent"; };
    this.head.onmouseout  = function () { this.hexNode.className = "hex"; };
    node.asn1 = this;
    node.onmouseover = function () {
        var current = !root.selected;
        if (current) {
            root.selected = this.asn1;
            this.className = "hexCurrent";
        }
        this.asn1.fakeHover(current);
    };
    node.onmouseout  = function () {
        var current = (root.selected == this.asn1);
        this.asn1.fakeOut(current);
        if (current) {
            root.selected = null;
            this.className = "hex";
        }
    };
    this.toHexDOM_sub(node, "tag", this.stream, this.posStart(), this.posStart() + 1);
    this.toHexDOM_sub(node, (this.length >= 0) ? "dlen" : "ulen", this.stream, this.posStart() + 1, this.posContent());
    if (this.sub === null)
        node.appendChild(document.createTextNode(
            this.stream.hexDump(this.posContent(), this.posEnd())));
    else if (this.sub.length > 0) {
        var first = this.sub[0];
        var last = this.sub[this.sub.length - 1];
        this.toHexDOM_sub(node, "intro", this.stream, this.posContent(), first.posStart());
        for (var i = 0, max = this.sub.length; i < max; ++i)
            node.appendChild(this.sub[i].toHexDOM(root));
        this.toHexDOM_sub(node, "outro", this.stream, last.posEnd(), this.posEnd());
    }
    return node;
};
ASN1.prototype.toHexString = function (root) {
    return this.stream.hexDump(this.posStart(), this.posEnd(), true);
};
ASN1.decodeLength = function (stream) {
    var buf = stream.get();
    var len = buf & 0x7F;
    if (len == buf)
        return len;
    if (len > 3)
        throw "Length over 24 bits not supported at position " + (stream.pos - 1);
    if (len === 0)
        return -1; // undefined
    buf = 0;
    for (var i = 0; i < len; ++i)
        buf = (buf << 8) | stream.get();
    return buf;
};
ASN1.hasContent = function (tag, len, stream) {
    if (tag & 0x20) // constructed
        return true;
    if ((tag < 0x03) || (tag > 0x04))
        return false;
    var p = new Stream(stream);
    if (tag == 0x03) p.get(); // BitString unused bits, must be in [0, 7]
    var subTag = p.get();
    if ((subTag >> 6) & 0x01) // not (universal or context)
        return false;
    try {
        var subLength = ASN1.decodeLength(p);
        return ((p.pos - stream.pos) + subLength == len);
    } catch (exception) {
        return false;
    }
};
ASN1.decode = function (stream) {
    if (!(stream instanceof Stream))
        stream = new Stream(stream, 0);
    var streamStart = new Stream(stream);
    var tag = stream.get();
    var len = ASN1.decodeLength(stream);
    var header = stream.pos - streamStart.pos;
    var sub = null;
    if (ASN1.hasContent(tag, len, stream)) {
        // it has content, so we decode it
        var start = stream.pos;
        if (tag == 0x03) stream.get(); // skip BitString unused bits, must be in [0, 7]
        sub = [];
        if (len >= 0) {
            // definite length
            var end = start + len;
            while (stream.pos < end)
                sub[sub.length] = ASN1.decode(stream);
            if (stream.pos != end)
                throw "Content size is not correct for container starting at offset " + start;
        } else {
            // undefined length
            try {
                for (;;) {
                    var s = ASN1.decode(stream);
                    if (s.tag === 0)
                        break;
                    sub[sub.length] = s;
                }
                len = start - stream.pos;
            } catch (e) {
                throw "Exception while decoding undefined length content: " + e;
            }
        }
    } else
        stream.pos += len; // skip content
    return new ASN1(streamStart, header, len, tag, sub);
};
ASN1.test = function () {
    var test = [
        { value: [0x27],                   expected: 0x27     },
        { value: [0x81, 0xC9],             expected: 0xC9     },
        { value: [0x83, 0xFE, 0xDC, 0xBA], expected: 0xFEDCBA }
    ];
    for (var i = 0, max = test.length; i < max; ++i) {
        var pos = 0;
        var stream = new Stream(test[i].value, 0);
        var res = ASN1.decodeLength(stream);
        if (res != test[i].expected)
            document.write("In test[" + i + "] expected " + test[i].expected + " got " + res + "\n");
    }
};
(function($){

    var gen_from = 'pass';
    var gen_compressed = true;
    var gen_eckey = null;
    var gen_pt = null;
    var gen_ps_reset = false;
    var TIMEOUT = 600;
    var timeout = null;

    var PUBLIC_KEY_VERSION = 0;
    var PRIVATE_KEY_VERSION = 0x80;
    var ADDRESS_URL_PREFIX = 'http://blockchain.info'

    function parseBase58Check(address) {
        var bytes = Bitcoin.Base58.decode(address);
        var end = bytes.length - 4;
        var hash = bytes.slice(0, end);
        var checksum = Crypto.SHA256(Crypto.SHA256(hash, {asBytes: true}), {asBytes: true});
        if (checksum[0] != bytes[end] ||
            checksum[1] != bytes[end+1] ||
            checksum[2] != bytes[end+2] ||
            checksum[3] != bytes[end+3])
                throw new Error("Wrong checksum");
        var version = hash.shift();
        return [version, hash];
    }

    encode_length = function(len) {
        if (len < 0x80)
            return [len];
        else if (len < 255)
            return [0x80|1, len];
        else
            return [0x80|2, len >> 8, len & 0xff];
    }

    encode_id = function(id, s) {
        var len = encode_length(s.length);
        return [id].concat(len).concat(s);
    }

    encode_integer = function(s) {
        if (typeof s == 'number')
            s = [s];
        return encode_id(0x02, s);
    }

    encode_octet_string = function(s)  {
        return encode_id(0x04, s);
    }

    encode_constructed = function(tag, s) {
        return encode_id(0xa0 + tag, s);
    }

    encode_bitstring = function(s) {
        return encode_id(0x03, s);
    }

    encode_sequence = function() {
        sequence = [];
        for (var i = 0; i < arguments.length; i++)
            sequence = sequence.concat(arguments[i]);
        return encode_id(0x30, sequence);
    }

    function getEncoded(pt, compressed) {
       var x = pt.getX().toBigInteger();
       var y = pt.getY().toBigInteger();
       var enc = integerToBytes(x, 32);
       if (compressed) {
         if (y.isEven()) {
           enc.unshift(0x02);
         } else {
           enc.unshift(0x03);
         }
       } else {
         enc.unshift(0x04);
         enc = enc.concat(integerToBytes(y, 32));
       }
       return enc;
    }

    function getDER(eckey, compressed) {
        var curve = getSECCurveByName("secp256k1");
        var _p = curve.getCurve().getQ().toByteArrayUnsigned();
        var _r = curve.getN().toByteArrayUnsigned();
        var encoded_oid = [0x06, 0x07, 0x2A, 0x86, 0x48, 0xCE, 0x3D, 0x01, 0x01];

        var secret = integerToBytes(eckey.priv, 32);
        var encoded_gxgy = getEncoded(curve.getG(), compressed);
        var encoded_pub = getEncoded(gen_pt, compressed);

        return encode_sequence(
            encode_integer(1),
            encode_octet_string(secret),
            encode_constructed(0,
                encode_sequence(
                    encode_integer(1),
                    encode_sequence(
                        encoded_oid, //encode_oid(*(1, 2, 840, 10045, 1, 1)), //TODO
                        encode_integer([0].concat(_p))
                    ),
                    encode_sequence(
                        encode_octet_string([0]),
                        encode_octet_string([7])
                    ),
                    encode_octet_string(encoded_gxgy),
                    encode_integer([0].concat(_r)),
                    encode_integer(1)
                )
            ),
            encode_constructed(1,
                encode_bitstring([0].concat(encoded_pub))
            )
        );
    }

    function pad(str, len, ch) {
        padding = '';
        for (var i = 0; i < len - str.length; i++) {
            padding += ch;
        }
        return padding + str;
    }

    function setErrorState(field, err, msg) {
        var group = field.closest('.controls').parent();
        if (err) {
            group.addClass('has-error');
            group.attr('title',msg);
        } else {
            group.removeClass('has-error');
            group.attr('title','');
        }
    }

    function genRandom() {
        $('#pass').val('');
        $('#hash').focus();
        gen_from = 'hash';
        $('#from_hash').click();
        genUpdate();
        var bytes = secureRandom(32);
        $('#hash').val(Crypto.util.bytesToHex(bytes));
        generate();
    }

    function genUpdate() {
        setErrorState($('#hash'), false);
        setErrorState($('#sec'), false);
        setErrorState($('#der'), false);
        $('#pass').attr('readonly', gen_from != 'pass');
        $('#hash').attr('readonly', gen_from != 'hash');
        $('#sec').attr('readonly', gen_from != 'sec');
        $('#der').attr('readonly', gen_from != 'der');
        $('#sec').parent().parent().removeClass('error');
    }

    function genUpdateFrom() {
        gen_from = $(this).attr('id').substring(5);
        genUpdate();
        if (gen_from == 'pass') {
            if (gen_ps_reset) {
                gen_ps_reset = false;
                onChangePass();
            }
            $('#pass').focus();
        } else if (gen_from == 'hash') {
            $('#hash').focus();
        } else if (gen_from == 'sec') {
            $('#sec').focus();
        } else if (gen_from == 'der') {
            $('#der').focus();
        }
    }

    function generate() {
        var hash_str = pad($('#hash').val(), 64, '0');
        var hash = Crypto.util.hexToBytes(hash_str);
        eckey = new Bitcoin.ECKey(hash);
        gen_eckey = eckey;

        try {
            var curve = getSECCurveByName("secp256k1");
            gen_pt = curve.getG().multiply(eckey.priv);
            gen_eckey.pub = getEncoded(gen_pt, gen_compressed);
            gen_eckey.pubKeyHash = Bitcoin.Util.sha256ripe160(gen_eckey.pub);
            setErrorState($('#hash'), false);
        } catch (err) {
            //console.info(err);
            setErrorState($('#hash'), true, 'Invalid secret exponent (must be non-zero value)');
            return;
        }

        gen_update();
    }

    function genOnChangeCompressed() {
        setErrorState($('#hash'), false);
        setErrorState($('#sec'), false);
        gen_compressed = $(this).attr('name') == 'compressed';
        gen_eckey.pub = getEncoded(gen_pt, gen_compressed);
        gen_eckey.pubKeyHash = Bitcoin.Util.sha256ripe160(gen_eckey.pub);
        gen_update();
    }

    function getAddressURL(addr)
    {
        if (ADDRESS_URL_PREFIX.indexOf('explorer.dot-bit.org')>=0 )
          return ADDRESS_URL_PREFIX+'/a/'+addr;
        else if (ADDRESS_URL_PREFIX.indexOf('address.dws')>=0 )
          return ADDRESS_URL_PREFIX+ "?" + addr;
        else if (ADDRESS_URL_PREFIX.indexOf('chainbrowser.com')>=0 )
          return ADDRESS_URL_PREFIX+'/address/'+addr+'/';
        else
          return ADDRESS_URL_PREFIX+'/address/'+addr;
    }

    function gen_update() {

        var eckey = gen_eckey;
        var compressed = gen_compressed;

        var hash_str = pad($('#hash').val(), 64, '0');
        var hash = Crypto.util.hexToBytes(hash_str);

        var hash160 = eckey.getPubKeyHash();

        var h160 = Crypto.util.bytesToHex(hash160);
        $('#h160').val(h160);

        var addr = new Bitcoin.Address(hash160);
        addr.version = PUBLIC_KEY_VERSION;
        $('#addr').val(addr);

        var payload = hash;

        if (compressed)
            payload.push(0x01);

        var sec = new Bitcoin.Address(payload);
        sec.version = PRIVATE_KEY_VERSION;
        $('#sec').val(sec);

        var pub = Crypto.util.bytesToHex(getEncoded(gen_pt, compressed));
        $('#pub').val(pub);

        var der = Crypto.util.bytesToHex(getDER(eckey, compressed));
        $('#der').val(der);

        var qrCode = qrcode(3, 'M');
        var text = $('#addr').val();
        text = text.replace(/^[\s\u3000]+|[\s\u3000]+$/g, '');
        qrCode.addData(text);
        qrCode.make();

        $('#genAddrQR').html(qrCode.createImgTag(4));
        $('#genAddrURL').attr('href', getAddressURL(addr));
        $('#genAddrURL').attr('title', addr);

        var keyQRCode = qrcode(3, 'L');
        var text = $('#sec').val();
        text = text.replace(/^[\s\u3000]+|[\s\u3000]+$/g, '');
        keyQRCode.addData(text);
        keyQRCode.make();

        $('#genKeyQR').html(keyQRCode.createImgTag(4));
        // NMC fix
        if (ADDRESS_URL_PREFIX.indexOf('explorer.dot-bit.org')>=0 )
          $('#genAddrURL').attr('href', ADDRESS_URL_PREFIX+'/a/'+addr);

        // chainbrowser fix (needs closing slash for some reason)
        if (ADDRESS_URL_PREFIX.indexOf('chainbrowser.com')>=0 )
          $('#genAddrURL').attr('href', ADDRESS_URL_PREFIX+'/address/'+addr+'/');
    }

    function genCalcHash() {
        var hash = Crypto.SHA256($('#pass').val(), { asBytes: true });
        $('#hash').val(Crypto.util.bytesToHex(hash));
    }

    function onChangePass() {
        genCalcHash();
        clearTimeout(timeout);
        timeout = setTimeout(generate, TIMEOUT);
    }

    function onChangeHash() {
        $('#pass').val('');
        gen_ps_reset = true;
        clearTimeout(timeout);

        if (/[^0123456789abcdef]+/i.test($('#hash').val())) {
            setErrorState($('#hash'), true, 'Erroneous characters (must be 0..9-a..f)');
            return;
        } else {
            setErrorState($('#hash'), false);
        }

        timeout = setTimeout(generate, TIMEOUT);
    }

    function setCompressed(compressed) {
      gen_compressed = compressed; // global
      // toggle radio button without firing an event
      $('#gen_comp label input').off();
      $('#gen_comp label input[name='+(gen_compressed?'compressed':'uncompressed')+']').click();
      $('#gen_comp label input').on('change', genOnChangeCompressed);
    }

    function genOnChangePrivKey() {

        clearTimeout(timeout);

        $('#pass').val('');
        gen_ps_reset = true;

        var sec = $('#sec').val();

        try {
            var res = parseBase58Check(sec);
            var version = res[0];
            var payload = res[1];
        } catch (err) {
            setErrorState($('#sec'), true, 'Invalid private key checksum');
            return;
        };

        if (version != PRIVATE_KEY_VERSION) {
            setErrorState($('#sec'), true, 'Invalid private key version');
            return;
        } else if (payload.length != 32 && payload.length != 33) {
            setErrorState($('#sec'), true, 'Invalid payload (must be 32 or 33 bytes)');
            return;
        }

        setErrorState($('#sec'), false);

        if (payload.length > 32) {
            payload.pop();
            setCompressed(true);
        } else {
            setCompressed(false);
        }

        $('#hash').val(Crypto.util.bytesToHex(payload));

        timeout = setTimeout(generate, TIMEOUT);
    }

    function genUpdateDER() {
      var s = $('#der').val();
      s = s.replace(/[^A-Fa-f0-9]+/g, '');
      var bytes = Crypto.util.hexToBytes(s);
      try {
        var asn1 = ASN1.decode(bytes);
        var r = asn1.sub[1];
        if (r.length!=32)
          throw('key length mismatch');
        var ofs = r.header + r.stream.pos;
        var priv = r.stream.enc.slice(ofs, ofs + r.length);
        var hex = Crypto.util.bytesToHex(priv);
        $('#hash').val(hex);

        // get public key
        r = asn1.sub[2].sub[0].sub[3];
        ofs = r.header + r.stream.pos;
        var pub = r.stream.enc.slice(ofs, ofs + r.length);
        setCompressed(pub[0]!=0x04);

        setErrorState($('#der'), false);
        $('#pass').val('');

        generate();
      } catch (err) {
        setErrorState($('#der'), true, err);
      }
    }

    function genOnChangeDER() {
      timeout = setTimeout(genUpdateDER, TIMEOUT);
    }

    function genRandomPass() {
        // chosen by fair dice roll
        // guaranted to be random
        $('#from_pass').button('toggle');
        $('#pass').focus();
        gen_from = 'pass';
        genUpdate();
        genCalcHash();
        generate();
    }

    // --- converter ---

    var from = '';
    var to = 'hex';

    function update_enc_from() {
        $(this).addClass('active');
        from = $(this).attr('id').substring(5);
        translate();
    }

    function update_enc_to() {
        to = $(this).attr('id').substring(3);
        translate();
    }

    // stringToBytes, exception-safe
    function stringToBytes(str) {
      try {
        var bytes = Crypto.charenc.UTF8.stringToBytes(str);
      } catch (err) {
        var bytes = [];
        for (var i = 0; i < str.length; ++i)
           bytes.push(str.charCodeAt(i));
      }
      return bytes;
    }

    // bytesToString, exception-safe
    function bytesToString(bytes) {
      try {
        var str = Crypto.charenc.UTF8.bytesToString(bytes);
      } catch (err) {
        var str = '';
        for (var i = 0; i < bytes.length; ++i)
            str += String.fromCharCode(bytes[i]);
      }
      return str;
    }


    function isHex(str) {
        return !/[^0123456789abcdef]+/i.test(str);
    }

    function isBase58(str) {
        return !/[^123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+/.test(str);
    }

    function isBase64(str) {
        return !/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=]+/.test(str) && (str.length % 4) == 0;
    }

    function isBin(str) {
      return !/[^01 \r\n]+/i.test(str);
    }

    function isDec(str) {
      return !/[^0123456789]+/i.test(str);
    }

    function issubset(a, ssv, min_words) {
        var b = ssv.trim().split(' ');
        if (min_words>b.length)
            return false;
        for (var i = 0; i < b.length; i++) {
            if (a.indexOf(b[i].toLowerCase()) == -1
                && a.indexOf(b[i].toUpperCase()) == -1)
            return false;
        }
        return true;
    }

    function isEasy16(str) {
      return !/[^asdfghjkwertuion \r\n]+/i.test(str);
    }

    function autodetect(str) {
        var enc = [];
        var bstr = str.replace(/[ :,\n]+/g,'').trim();
        if ( isBin(bstr) )
            enc.push('bin');
        if (isDec(bstr) )
            enc.push('dec');
        if (isHex(bstr))
            enc.push('hex');
        if (isBase58(bstr)) {
            // push base58check first (higher priority)
            try {
                var res = parseBase58Check(bstr);
                enc.push('base58check');
            } catch (err) {};
        }
        if (issubset(mn_words, str, 3))
            enc.push('mnemonic');
        if (issubset(rfc1751_wordlist, str, 6))
            enc.push('rfc1751');
        if (isEasy16(bstr))
          enc.push('easy16');
        if (isBase64(bstr))
            enc.push('base64');
        if (str.length > 0) {
            enc.push('text');
            enc.push('rot13');
        }
        if (isBase58(bstr)) {
          // arbitrary text should have higher priority than base58
          enc.push('base58');
        }
        return enc;
    }

    function update_toolbar(enc_list) {
        var reselect = false;

        $.each($('#enc_from').children(), function() {
            var enc = $(this).children().attr('id').substring(5);
            var disabled = (enc_list && enc_list.indexOf(enc) == -1);
            if (disabled && $(this).hasClass('active')) {
                $(this).removeClass('active');
                reselect = true;
            }
            $(this).attr('disabled', disabled);
        });

        if (enc_list && enc_list.length > 0) {
            if (reselect || from=='') {
              from = enc_list[0];
              $('#from_' + from).click();
            }
        }
    }

    function rot13(str) {
        return str.replace(/[a-zA-Z]/g, function(c) {
          return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
        });
    }

    function fromEasy16(str) {
      var keys = str.split('\n');
      var res = [];
      for (var i = 0; i < keys.length; i++) {
        var k = keys[i].replace(' ','');
        var raw = Crypto.util.hexToBytes(armory_map(k, armory_f, armory_t));
        data = raw.slice(0, 16);
        res = res.concat(data);
      }
      return res;
    }

    function toEasy16(bytes) {
        var keys = armory_encode_keys(bytes,[]);
        var lines = keys.split('\n');
        var res = [];
        for (var i in lines) {
          if (lines[i].trim(' ').split(' ').length==9)
            res.push(lines[i]);
        }
        return res.join('\n');
    }

    function toBin(bytes)
    {
      var arr = [];
      for (var i=0; i<bytes.length;i++)
      {
        var s = (bytes[i]).toString(2);
        arr.push(('0000000' + s).slice(-8));
      }
      return arr.join(' ');
    }

    function fromBin(str)
    {
      var arr = str.trim().split(/[\r\n ]+/);
      arr = [arr.join('')]; // this line actually kills separating bytes with spaces (people get confused), comment it out if you want
      var res = [];
      for (var i=0; i<arr.length; i++)
      {
        var bstr = arr[i];
        var s = ('0000000'+bstr).slice(-Math.ceil(bstr.length/8)*8); // needs padding
        var chunks = s.match(/.{1,8}/g);
         for (var j=0;j<chunks.length;j++)
          res.push(parseInt(chunks[j], 2));
      }
      return res;
    }

    function fromDec(str)
    {
        var h = new BigInteger(str).toString(16);
        return Crypto.util.hexToBytes(h.length%2?'0'+h:h);
    }

    function toDec(bytes)
    {
        var h = Crypto.util.bytesToHex(bytes);
        return new BigInteger(h,16).toString(10);
    }

    function enct(id) {
        return $('#from_'+id).parent().text();
    }

    function pad_array(bytes, n)
    {
      if (n==0) // remove padding
      {
        var res = bytes.slice(0);
        while (res.length>1 && res[0]==0)
          res.shift();
        return res;
      }

      // align to n bytes
      var len = bytes.length;
      var padding = Math.ceil(len/n)*n - len;
      var res = bytes.slice(0);
      for (i=0;i<padding;i++)
        res.unshift(0);
      return res;
    }

    function translate() {

        var str = $('#src').val();

        if (str.length == 0) {
          update_toolbar(null);
          $('#hint_from').text('');
          $('#hint_to').text('');
          $('#dest').val('');
          return;
        }

        text = str;

        var enc = autodetect(str);

        update_toolbar(enc);

        bytes = stringToBytes(str);

        var type = '';
        var addVersionByte = true; // for base58check

        if (bytes.length > 0) {
            var bstr = str.replace(/[ :,\n]+/g,'').trim();

            if (from == 'base58check') {
                try {
                    var res = parseBase58Check(bstr);
                    type = ' ver. 0x' + Crypto.util.bytesToHex([res[0]]);
                    bytes = res[1];
                    if (!addVersionByte)
                      bytes.unshift(res[0]);
                } catch (err) {};
            } else if (from == 'base58') {
                bytes = Bitcoin.Base58.decode(bstr);
            } else if (from == 'hex') {
                bytes = Crypto.util.hexToBytes(bstr.length%2?'0'+bstr:bstr); // needs padding
            } else if (from == 'rfc1751') {
                try { bytes = english_to_key(str); } catch (err) { type = ' ' + err; bytes = []; };
            } else if (from == 'mnemonic') {
                bytes = Crypto.util.hexToBytes(mn_decode(str.trim()));
            } else if (from == 'base64') {
                try { bytes = Crypto.util.base64ToBytes(bstr); } catch (err) {}
            } else if (from == 'rot13') {
                bytes = stringToBytes(rot13(str));
            } else if (from == 'bin') {
                bytes = fromBin(str);
            } else if (from == 'easy16') {
                bytes = fromEasy16(str);
            } else if (from == 'dec') {
                bytes = fromDec(bstr);
            }

            var ver = '';
            if (to == 'base58check') {
               var version = bytes.length <= 20 ? PUBLIC_KEY_VERSION : PRIVATE_KEY_VERSION;
               var buf = bytes.slice();
               if (!addVersionByte)
                version = buf.shift();
               var addr = new Bitcoin.Address(buf);
               addr.version = version;
               text = addr.toString();
               ver = ' ver. 0x' + Crypto.util.bytesToHex([addr.version]);
            } else if (to == 'base58') {
                text = Bitcoin.Base58.encode(bytes);
            } else if (to == 'hex') {
                text = Crypto.util.bytesToHex(bytes);
            } else if (to == 'text') {
                text = bytesToString(bytes);
            } else if (to == 'rfc1751') {
                text = key_to_english(pad_array(bytes,8));
            } else if (to == 'mnemonic') {
                text = mn_encode(Crypto.util.bytesToHex(pad_array(bytes,4)));
            } else if (to == 'base64') {
                text = Crypto.util.bytesToBase64(bytes);
            } else if (to == 'rot13') {
                text = rot13(bytesToString(bytes));
            } else if (to == 'bin') {
                text = toBin(bytes);
            } else if (to == 'easy16') {
                text = toEasy16(pad_array(bytes,32));
            } else if (to == 'dec') {
                text = toDec(bytes);
            }
        }

        $('#hint_from').text(enct(from) + type + ' (' + bytes.length + ' byte' + (bytes.length == 1 ? ')' : 's)'));
        $('#hint_to').text(enct(to) + ver + ' (' + text.length + ' character' + (text.length == 1 ? ')' : 's)'));
        $('#dest').val(text);
    }

    function onChangeFrom() {
        clearTimeout(timeout);
        timeout = setTimeout(translate, TIMEOUT);
    }

    function onInput(id, func) {
        $(id).bind("input keyup keydown keypress change blur", function() {
            if ($(this).val() != jQuery.data(this, "lastvalue")) {
                func();
            }
            jQuery.data(this, "lastvalue", $(this).val());
        });
        $(id).bind("focus", function() {
           jQuery.data(this, "lastvalue", $(this).val());
        });
    }

    // --- chain ---
    var chMode = 'csv';
    var chAddrList = [];
    var chRange = 1;
    var chType = 'armory';

    function chOnChangeType() {
        var id = $(this).attr('id');

        if (chType != id) {
            $('#chCode').val('');
            $('#chRoot').val('');
            $('#chBackup').val('');
            $('#chMsg').text('');
            $('#chList').text('');
            chOnStop();
        }

        $('#chChange').attr('disabled', id != 'electrum');

        chType = id;
    }

    function chOnChangeFormat() {
        chMode = $(this).attr('id');
        chUpdate();
    }

    function chAddrToCSV(i, r) {
        return i + ', "' + r[0] +'", "' + r[1] +'"\n';
    }

    function chUpdate() {
        if (chAddrList.length == 0)
            return;
        var str = '';
        if (chMode == 'csv') {
            for (var i = 0; i < chAddrList.length; i++)
                str += chAddrToCSV(i+1, chAddrList[i]);

        } else if (chMode == 'json') {

            var w = {};
            w['keys'] = [];
            for (var i = 0; i < chAddrList.length; i++)
                w['keys'].push({'addr':chAddrList[i][0],'sec':chAddrList[i][1]});
            str = JSON.stringify(w, null, 4);
        }
        $('#chList').text(str);

        chRange = parseInt($('#chRange').val());

        var c = (chType == 'electrum') ? parseInt($('#chChange').val()) : 0;

        if (chAddrList.length >= chRange+c)
            chOnStop();

    }

    function chOnChangeCode() {
        $('#chRoot').val('');
        $('#chMsg').text('');
        chOnStop();
        $('#chBackup').val( mn_encode(chRoot) );
        clearTimeout(timeout);
        timeout = setTimeout(chGenerate, TIMEOUT);
    }

    function chUpdateBackup() {
        var str =  $('#chBackup').val();

        if (str.length == 0) {
            chOnStop();
            $('#chCode').val('');
            $('#chRoot').val('');
            $('#chBackup').val('');
            $('#chMsg').text('');
            $('#chList').text('');
            return;
        }

        if (chType == 'electrum') {
            str = str.trim();
            if (issubset(mn_words, str, 12))  {
                var seed = mn_decode(str);
                $('#chRoot').val(seed);
                var words = str.split(' ');
                if (words.length!=12)
                {
                  $('#chList').text('');
                  return;
                }
            } else {
              $('#chRoot').val('');
              $('#chCode').val('');
              chOnStop();
            }
        }

        if (chType == 'armory') {
            var keys = armory_decode_keys(str);
            if (keys != null) {
                var pk = keys[0];
                var cc = keys[1];
                $('#chRoot').val(Crypto.util.bytesToHex(pk));
                $('#chCode').val(Crypto.util.bytesToHex(cc));

                var lines = str.split('\n');
                var text = lines.join(' ');
                var words = text.split(/\s+/);
                if (words.length!=9*2 && words.length!=9*4)
                {
                  $('#chList').text('');
                  return;
                }
            }
        }

        clearTimeout(timeout);
        timeout = setTimeout(chGenerate, TIMEOUT);
    }

    function chOnChangeBackup() {
        clearTimeout(timeout);
        timeout = setTimeout(chUpdateBackup, TIMEOUT);
    }

    function chOnRandom() {
        var pk = secureRandom(32);

        if (chType == 'armory') {
            var cc = armory_derive_chaincode(pk);
            $('#chRoot').val(Crypto.util.bytesToHex(pk));
            $('#chCode').val(Crypto.util.bytesToHex(cc));
            $('#chBackup').val(armory_encode_keys(pk, cc).split('\n').slice(0,2).join('\n'));
        }

        if (chType == 'electrum') {
            var seed = Crypto.util.bytesToHex(pk.slice(0,16));
            //nb! electrum doesn't handle trailing zeros very well
            if (seed.charAt(0) == '0') seed = seed.substr(1);
            $('#chRoot').val(seed);
            $('#chBackup').val(mn_encode(seed));
        }
        chGenerate();
    }

    function chOnStop() {
        Armory.stop();
        Electrum.stop();
        if (chType == 'electrum') {
            $('#chMsg').text('');
        }
    }

    function chOnChangeRange()
    {
        if ( chAddrList.length==0 )
          return;
        clearTimeout(timeout);
        timeout = setTimeout(chUpdateRange, TIMEOUT);
    }

    function chCallback(r) {
        chAddrList.push(r);
        $('#chList').append(chAddrToCSV(chAddrList.length,r));
    }

    function chElectrumUpdate(r, seed) {
        $('#chMsg').text('key stretching: ' + r + '%');
        $('#chCode').val(Crypto.util.bytesToHex(seed));
    }

    function chElectrumSuccess(privKey) {
        $('#chMsg').text('');
        $('#chCode').val(Crypto.util.bytesToHex(privKey));
        var addChange = parseInt($('#chChange').val());
        Electrum.gen(chRange, chCallback, chUpdate, addChange);
    }

    function chUpdateRange() {
        chRange = parseInt($('#chRange').val());
        chAddrList = [];

        $('#chList').text('');

        if (chType == 'electrum') {
            var addChange = parseInt($('#chChange').val());
            Electrum.stop();
            Electrum.gen(chRange, chCallback, chUpdate, addChange);
        }

        if (chType == 'armory') {
            var codes = $('#chBackup').val();
            Armory.gen(codes, chRange, chCallback, chUpdate);
        }
    }

    function chGenerate() {
        clearTimeout(timeout);

        var seed = $('#chRoot').val();
        var codes = $('#chBackup').val();

        chAddrList = [];

        $('#chMsg').text('');
        $('#chList').text('');

        Electrum.stop();

        if (chType == 'electrum') {
           if (seed.length == 0)
               return;
            Electrum.init(seed, chElectrumUpdate, chElectrumSuccess);
        }

        if (chType == 'armory') {
            var uid = Armory.gen(codes, chRange, chCallback, chUpdate);
            if (uid)
                $('#chMsg').text('uid: ' + uid);
            else
                return;
        }
    }

    // -- transactions --

    var txType = 'txBCI';
    var txFrom = 'txFromSec';

    function txGenSrcAddr() {
        var updated = updateAddr ($('#txSec'), $('#txAddr'));

        $('#txBalance').val('0.00');

        if (updated && txFrom=='txFromSec')
            txGetUnspent();
    }

    function txOnChangeSec() {
        clearTimeout(timeout);
        timeout = setTimeout(txGenSrcAddr, TIMEOUT);
    }

    function txOnChangeAddr() {
        clearTimeout(timeout);
        timeout = setTimeout(txGetUnspent, TIMEOUT);
    }

    function txSetUnspent(text) {
        var r = JSON.parse(text);
        txUnspent = JSON.stringify(r, null, 4);
        $('#txUnspent').val(txUnspent);
        var address = $('#txAddr').val();
        TX.parseInputs(txUnspent, address);
        var value = TX.getBalance();
        var fval = Bitcoin.Util.formatValue(value);
        var fee = parseFloat($('#txFee').val());
        $('#txBalance').val(fval);
        var value = Math.floor((fval-fee)*1e8)/1e8;
        $('#txValue').val(value);
        txRebuild();
    }

    function txUpdateUnspent() {
        txSetUnspent($('#txUnspent').val());
    }

    function txOnChangeUnspent() {
        clearTimeout(timeout);
        timeout = setTimeout(txUpdateUnspent, TIMEOUT);
    }

    function txParseUnspent(text) {
        if (text=='' || text=='{}') {
            alert('No data');
            return;
        }
        txSetUnspent(text);
    }

    function txGetUnspent() {
        var addr = $('#txAddr').val();

        var url = (txType == 'txBCI') ? 'https://blockchain.info/unspent?cors=true&active=' + addr :
            'https://blockexplorer.com/q/mytransactions/' + addr;

        url = prompt('Press OK to download transaction history:', url);

        if (url != null && url != "") {

            $('#txUnspent').val('');

            $.getJSON(url, function(data) {
              txParseUnspent ( JSON.stringify(data, null, 2) );
            }).fail(function(jqxhr, textStatus, error) {
              alert( typeof(jqxhr.responseText)=='undefined' ? jqxhr.statusText
                : ( jqxhr.responseText!='' ? jqxhr.responseText : 'No data, probably Access-Control-Allow-Origin error.') );
            });

        } else {
          txSetUnspent($('#txUnspent').val());
        }
    }

    function txOnChangeJSON() {
        var str = $('#txJSON').val();
        try {
          var sendTx = TX.fromBBE(str);
          $('txJSON').removeClass('has-error');
          var bytes = sendTx.serialize();
          var hex = Crypto.util.bytesToHex(bytes);
          $('#txHex').val(hex);
          if (!TX.getBalance().equals(BigInteger.ZERO))
            $('#txFee').val(Bitcoin.Util.formatValue(TX.getFee(sendTx)));
          setErrorState($('#txJSON'), false, '');
        } catch (err) {
          setErrorState($('#txJSON'), true, 'syntax error');
        }

        $('#txSend').attr('disabled', $('#txHex').val()=="");
    }

    function txOnChangeHex() {
        var str = $('#txHex').val();
        str = str.replace(/[^0-9a-fA-f]/g,'');
        $('#txHex').val(str);
        var bytes = Crypto.util.hexToBytes(str);
        var sendTx = TX.deserialize(bytes);
        var text = TX.toBBE(sendTx);
        $('#txJSON').val(text);
        $('#txSend').attr('disabled', $('#txHex').val()=="");
    }

    function txOnAddDest() {
        var list = $(document).find('.txCC');
        var clone = list.last().clone();
        clone.find('.help-inline').empty();
        clone.find('.control-label').text('Cc');
        var dest = clone.find('#txDest');
        var value = clone.find('#txValue');
        clone.insertAfter(list.last());
        onInput(dest, txOnChangeDest);
        onInput(value, txOnChangeDest);
        dest.val('');
        value.val('');
        $('#txRemoveDest').attr('disabled', false);
        return false;
    }

    function txOnRemoveDest() {
        var list = $(document).find('.txCC');
        if (list.size() == 2)
            $('#txRemoveDest').attr('disabled', true);
        list.last().remove();
        return false;
    }

    function txSent(text) {
        alert(text ? text : 'No response!');
    }

    function txSend() {
        var txAddr = $('#txAddr').val();

        var r = '';
        if (txAddr!='' && txAddr!=TX.getAddress())
            r += 'Warning! Source address does not match private key.\n\n';

        var tx = $('#txHex').val();

        url = 'https://blockchain.info/pushtx?cors=true';

        // alternatives are:
        // http://eligius.st/~wizkid057/newstats/pushtxn.php (supports non-standard transactions)
        // https://btc.blockr.io/tx/push
        // http://bitsend.rowit.co.uk (defunct)

        url = prompt(r + 'Press OK to send transaction to:', url);

        if (url != null && url != "") {

            $.post(url, { tx: tx }, function(data) {
              txSent(data.responseText);
            }).fail(function(jqxhr, textStatus, error) {
              alert( typeof(jqxhr.responseText)=='undefined' ? jqxhr.statusText
                : ( jqxhr.responseText!='' ? jqxhr.responseText : 'No data, probably Access-Control-Allow-Origin error.') );
            });

        }

        return false;
    }

    function txRebuild() {
        var sec = $('#txSec').val();
        var addr = $('#txAddr').val();
        var unspent = $('#txUnspent').val();
        var balance = parseFloat($('#txBalance').val());
        var fee = parseFloat('0'+$('#txFee').val());

        try {
            var res = parseBase58Check(sec);
            var version = res[0];
            var payload = res[1];
        } catch (err) {
            $('#txJSON').val('');
            $('#txHex').val('');
            return;
        }

        var compressed = false;
        if (payload.length > 32) {
            payload.pop();
            compressed = true;
        }

        var eckey = new Bitcoin.ECKey(payload);

        eckey.setCompressed(compressed);

        TX.init(eckey);

        var fval = 0;
        var o = txGetOutputs();
        for (i in o) {
            TX.addOutput(o[i].dest, o[i].fval);
            fval += o[i].fval;
        }

        // send change back or it will be sent as fee
        if (balance > fval + fee) {
            var change = balance - fval - fee;
            TX.addOutput(addr, change);
        }

        try {
            var sendTx = TX.construct();
            var txJSON = TX.toBBE(sendTx);
            var buf = sendTx.serialize();
            var txHex = Crypto.util.bytesToHex(buf);
            setErrorState($('#txJSON'), false, '');
            $('#txJSON').val(txJSON);
            $('#txHex').val(txHex);
        } catch(err) {
            $('#txJSON').val('');
            $('#txHex').val('');
        }
        $('#txSend').attr('disabled', $('#txHex').val()=="");
    }

    function txSign() {
        if (txFrom=='txFromSec')
        {
          txRebuild();
          return;
        }

        var str = $('#txJSON').val();
        TX.removeOutputs();
        var sendTx = TX.fromBBE(str);

        try {
            sendTx = TX.resign(sendTx);
            $('#txJSON').val(TX.toBBE(sendTx));
            $('#txHex').val(Crypto.util.bytesToHex(sendTx.serialize()));
            $('#txFee').val(Bitcoin.Util.formatValue(TX.getFee(sendTx)));
        } catch(err) {
            $('#txJSON').val('');
            $('#txHex').val('');
        }
        $('#txSend').attr('disabled', $('#txHex').val()=="");
    }

    function txOnChangeDest() {
        var balance = parseFloat($('#txBalance').val());
        var fval = parseFloat('0'+$('#txValue').val());
        var fee = parseFloat('0'+$('#txFee').val());

        if (fval + fee > balance) {
            fee = balance - fval;
            $('#txFee').val(fee > 0 ? fee : '0.00');
        }

        clearTimeout(timeout);
        timeout = setTimeout(txRebuild, TIMEOUT);
    }

    function txShowUnspent() {
        var div = $('#txUnspentForm');

        if (div.hasClass('hide')) {
            div.removeClass('hide');
            $('#txShowUnspent').text('Hide Outputs');
        } else {
            div.addClass('hide');
            $('#txShowUnspent').text('Show Outputs');
        }
    }

    function txChangeType() {
        txType = $(this).attr('id');
    }

    function txChangeFrom() {
      txFrom = $(this).attr('id');
      var bFromKey = txFrom=='txFromSec' || txFrom=='txFromPass';
      $('#txJSON').attr('readonly', txFrom!='txFromJSON');
      $('#txHex').attr('readonly', txFrom!='txFromRaw');
      $('#txFee').attr('readonly', !bFromKey);
      $('#txAddr').attr('readonly', !bFromKey);

      $.each($(document).find('.txCC'), function() {
        $(this).find('#txDest').attr('readonly', !bFromKey);
        $(this).find('#txValue').attr('readonly', !bFromKey);
      });

      if ( txFrom=='txFromRaw' )
        $('#txHex').focus();
      else if ( txFrom=='txFromJSON' )
        $('#txJSON').focus();
      else if ( bFromKey )
        $('#txSec').focus();
    }

    function txOnChangeFee() {

        var balance = parseFloat($('#txBalance').val());
        var fee = parseFloat('0'+$('#txFee').val());

        var fval = 0;
        var o = txGetOutputs();
        for (i in o) {
            TX.addOutput(o[i].dest, o[i].fval);
            fval += o[i].fval;
        }

        if (fval + fee > balance) {
            fval = balance - fee;
            $('#txValue').val(fval < 0 ? 0 : fval);
        }

        if (fee == 0 && fval == balance - 0.0001) {
            $('#txValue').val(balance);
        }

        clearTimeout(timeout);
        timeout = setTimeout(txRebuild, TIMEOUT);
    }

    function txGetOutputs() {
        var res = [];
        $.each($(document).find('.txCC'), function() {
            var dest = $(this).find('#txDest').val();
            var fval = parseFloat('0' + $(this).find('#txValue').val());
            res.push( {"dest":dest, "fval":fval } );
        });
        return res;
    }

    // -- sign --
    function updateAddr(from, to, bUpdate) {
        setErrorState(from, false);
        var sec = from.val();
        var addr = '';
        var eckey = null;
        var compressed = false;
        try {
            var res = parseBase58Check(sec);
            var privkey_version = res[0];
            var payload = res[1];

            if (payload.length!=32 && payload.length!=33)
              throw ('Invalid payload (must be 32 or 33 bytes)');

            if (payload.length > 32) {
                payload.pop();
                compressed = true;
            }
            eckey = new Bitcoin.ECKey(payload);
            var curve = getSECCurveByName("secp256k1");
            var pt = curve.getG().multiply(eckey.priv);
            eckey.pub = getEncoded(pt, compressed);
            eckey.pubKeyHash = Bitcoin.Util.sha256ripe160(eckey.pub);
            addr = new Bitcoin.Address(eckey.getPubKeyHash());
            addr.version = PUBLIC_KEY_VERSION;

            if (privkey_version!=PRIVATE_KEY_VERSION)
            {
                var wif = new Bitcoin.Address(payload);
                wif.version = PRIVATE_KEY_VERSION;
                from.val(wif.toString());
            }
        } catch (err) {
            if (from.val())
              setErrorState(from, true, err);
            return false;
        }
        to.val(addr);
        return {"key":eckey, "compressed":compressed, "addrtype":PUBLIC_KEY_VERSION, "address":addr};
    }

    function sgGenAddr() {
        updateAddr($('#sgSec'), $('#sgAddr'));
    }

    function sgOnChangeSec() {
        $('#sgSig').val('');
        $('#sgLabel').html('');
        clearTimeout(timeout);
        timeout = setTimeout(sgGenAddr, TIMEOUT);
    }

    function sgOnChangeMsg() {
        $('#sgSig').val('');
        $('#sgLabel').html('');
    }

    function fullTrim(message)
    {
        message = message.replace(/^\s+|\s+$/g, '');
        message = message.replace(/^\n+|\n+$/g, '');
        return message;
    }

    var sgHdr = [
      "-----BEGIN BITCOIN SIGNED MESSAGE-----",
      "-----BEGIN SIGNATURE-----",
      "-----END BITCOIN SIGNED MESSAGE-----"
    ];

    var qtHdr = [
      "-----BEGIN BITCOIN SIGNED MESSAGE-----",
      "-----BEGIN BITCOIN SIGNATURE-----",
      "-----END BITCOIN SIGNATURE-----"
    ];

    function joinMessage(type, addr, msg, sig)
    {
      if (type=='inputs_io')
        return sgHdr[0]+'\n'+msg +'\n'+sgHdr[1]+'\n'+addr+'\n'+sig+'\n'+sgHdr[2];
      else if (type=='multibit')
        return qtHdr[0]+'\n'+msg +'\n'+qtHdr[1]+'\nVersion: Bitcoin-qt (1.0)\nAddress: '+addr+'\n\n'+sig+'\n'+qtHdr[2];
      else
        return sig;
    }

    function sgSign() {
      var sgType = $('#sgType input:radio:checked').attr('value');
      var sgMsg = $('#sgMsg').val();

      var p = updateAddr($('#sgSec'), $('#sgAddr'));

      if ( !sgMsg || !p )
        return;

      sgMsg = fullTrim(sgMsg);

      var label = '';

      if (sgType=='armory_base64' || sgType=='armory_clearsign' || sgType=='armory_hex') {
        $('#sgSig').val(armory_sign_message (p.key, p.address, sgMsg, p.compressed, p.addrtype, sgType));
      } else {
        var sgSig = sign_message(p.key, sgMsg, p.compressed, p.addrtype);
        $('#sgSig').val(joinMessage(sgType, p.address, sgMsg, sgSig));
        label = '(<a href="#verify'+vrPermalink(p.address, sgMsg, sgSig)+'" target=_blank>permalink</a>)';
      }

      $('#sgLabel').html(label);
    }

    // -- verify --

    function vrPermalink(addr,msg,sig)
    {
      return '?vrAddr='+encodeURIComponent(addr)+'&vrMsg='+encodeURIComponent(msg)+'&vrSig='+encodeURIComponent(sig);
    }

    function splitSignature(s)
    {
      var addr = '';
      var sig = s;
      if ( s.indexOf('\n')>=0 )
      {
        var a = s.split('\n');
        addr = a[0];

        // always the last
        sig = a[a.length-1];

        // try named fields
        var h1 = 'Address: ';
        for (i in a) {
          var m = a[i];
          if ( m.indexOf(h1)>=0 )
            addr = m.substring(h1.length, m.length);
        }

        // address should not contain spaces
        if (addr.indexOf(' ')>=0)
          addr = '';

        // some forums break signatures with spaces
        sig = sig.replace(" ","");
      }
      return { "address":addr, "signature":sig };
    }

    function splitMessage(s)
    {
      var p = armory_split_message(s);
      if (p)
        return p;

      s = s.replace('\r','');

      for (var i=0; i<2; i++ )
      {
        var hdr = i==0 ? sgHdr : qtHdr;
        var type = i==0 ? "inputs_io" : "multibit";

        var p0 = s.indexOf(hdr[0]);
        if ( p0>=0 )
        {
          var p1 = s.indexOf(hdr[1]);
          if ( p1>p0 )
          {
            var p2 = s.indexOf(hdr[2]);
            if ( p2>p1 )
            {
              var msg = s.substring(p0+hdr[0].length+1, p1-1);
              var sig = s.substring(p1+hdr[1].length+1, p2-1);
              var m = splitSignature(sig);
              msg = fullTrim(msg); // doesn't work without this
              return { "message":msg, "address":m.address, "signature":m.signature, "type":type };
            }
          }
        }
      }
      return false;
    }

    function vrVerify() {

        var vrMsg = $('#vrMsg').val();
        var vrAddr = $('#vrAddr').val();
        var vrSig = $('#vrSig').val();

        var vrVer = PUBLIC_KEY_VERSION;

        var bSplit = $('#vrFromMessage').parent().hasClass('active');

        if (bSplit && !vrMsg)
          return;

        if (!bSplit && (!vrMsg || !vrSig))
          return;

        var addr = null;
        var p = null;

        if (bSplit) {
          p = splitMessage(vrMsg);
          vrAddr = p.address;
          vrMsg = p.message;
          vrSig = p.signature;

          // try armory first
          addr = armory_verify_message(p);
        } else {
          p = { "type": "bitcoin_qt", "address":vrAddr, "message": vrMsg, "signature": vrSig };
        }

        if (!addr) {
          try { vrVer = parseBase58Check(vrAddr)[0]; } catch (err) {};
          addr = verify_message(vrSig, vrMsg, vrVer);
        }

        var armoryMsg = "";
        if (p.type=="armory_base64" && p.message) {
          armoryMsg = p.message;
          console.log(armoryMsg);
        }

        $('#vrAlert').empty();

        var clone = $('#vrError').clone();

        // also check address was mentioned somewhere in the message (may be unsafe)
        if (!vrAddr && addr && vrMsg.search(addr)!=-1)
          vrAddr = addr;

        if (addr && (vrAddr==addr || !vrAddr)) {
          clone = vrAddr==addr ? $('#vrSuccess').clone() : $('#vrWarning').clone();

          var label = addr;

          // insert link here
          if (vrAddr==addr && p.type!="armory_hex")
            label = vrAddr +
              ' (<a href="#verify'+vrPermalink(vrAddr,vrMsg,vrSig)+'" target=_blank>permalink</a>)';

          clone.find('#vrAddrLabel').html(label);
        }

        clone.appendTo($('#vrAlert'));

        //if (armoryMsg) alert(armoryMsg);

        return false;
    }

    function vrOnInput() {
        $('#vrAlert').empty();
        vrVerify();
    }


    function vrOnChange() {
        clearTimeout(timeout);
        timeout = setTimeout(vrOnInput, TIMEOUT);
    }

    function crChange()
    {
      var p = $(this).attr('data-target').split(',',2);
      if (p.length>0)
        PUBLIC_KEY_VERSION = parseInt(p[0]);
      PRIVATE_KEY_VERSION = p.length>1 ? parseInt(p[1]) : ((PUBLIC_KEY_VERSION+128) & 255);
      ADDRESS_URL_PREFIX = $(this).attr('href');

      var name = $(this).text();
      var child = $(this).children();
      if (child.length)
        name = child.text();

      $('#crName').text(name);

      $('#crSelect').dropdown('toggle');
      gen_update();
      translate();

      updateAddr($('#sgSec'), $('#sgAddr'));
      updateAddr($('#txSec'), $('#txAddr'));

      return false;
    }

    $(document).ready( function() {

        if ((window.location.host=='aohycent.github.io' || window.location.host=='geckz.afocha.org') && window.location.protocol!="https:")
            window.location.protocol = "https";

        if (window.location.hash)
          $('#tab-' + window.location.hash.substr(1).split('?')[0]).tab('show');

        $('a[data-toggle="tab"]').on('click', function (e) {
            window.location.hash = $(this).attr('href');
        });


        $('#tab-converter').on('shown.bs.tab', function() { $('#src').focus(); });
        $('#tab-sign').on('shown.bs.tab', function() { $('#sgSec').focus(); });
        $('#tab-verify').on('shown.bs.tab', function() { $('#vrMsg').focus(); });
        $('#tab-gen').on('shown.bs.tab', function() { $('#'+gen_from).focus(); });
        $('#tab-chains').on('shown.bs.tab', function() { $('#chBackup').focus(); });
        $('#tab-tx').on('shown.bs.tab', function() { $('#txSec').focus(); });

        // generator

        onInput('#pass', onChangePass);
        onInput('#hash', onChangeHash);
        onInput('#sec', genOnChangePrivKey);
        onInput('#der', genOnChangeDER);

        $('#genRandom').click(genRandom);

        $('#gen_from label input').on('change', genUpdateFrom );
        $('#gen_comp label input').on('change', genOnChangeCompressed);

        genRandomPass();

        // chains

        $('#chRandom').click(chOnRandom);

        $('#chType label input').on('change', chOnChangeType);
        $('#chFormat label input').on('change', chOnChangeFormat);

        onInput($('#chRange'), chOnChangeRange);
        onInput($('#chCode'), chOnChangeCode);
        onInput($('#chBackup'), chOnChangeBackup);
        onInput($('#chChange'), chOnChangeRange);
        chRange = parseInt($('#chRange').val());

        // transactions

        //$('#txSec').val(tx_sec);
        //$('#txAddr').val(tx_addr);
        //$('#txDest').val(tx_dest);

        //txSetUnspent(tx_unspent);

        $('#txGetUnspent').click(txGetUnspent);
        $('#txType label input').on('change', txChangeType);
        $('#txFrom label input').on('change', txChangeFrom);

        onInput($('#txSec'), txOnChangeSec);
        onInput($('#txAddr'), txOnChangeAddr);
        onInput($('#txUnspent'), txOnChangeUnspent);
        onInput($('#txHex'), txOnChangeHex);
        onInput($('#txJSON'), txOnChangeJSON);
        onInput($('#txDest'), txOnChangeDest);
        onInput($('#txValue'), txOnChangeDest);
        onInput($('#txFee'), txOnChangeFee);

        $('#txAddDest').click(txOnAddDest);
        $('#txRemoveDest').click(txOnRemoveDest);
        $('#txSend').click(txSend);
        $('#txSign').click(txSign);
        $('#txSign').attr('disabled', true);
        $('#txSend').attr('disabled', true);

        // converter

        onInput('#src', onChangeFrom);

        $('#enc_from label input').on('change', update_enc_from );
        $('#enc_to label input').on('change', update_enc_to );

        // sign

        $('#sgSec').val($('#sec').val());
        $('#sgAddr').val($('#addr').val());
        $('#sgMsg').val("This is an example of a signed message.");

        onInput('#sgSec', sgOnChangeSec);
        onInput('#sgMsg', sgOnChangeMsg);

        $('#sgType label input').on('change', function() { if ($('#sgSig').val()!='') sgSign(); } );

        $('#sgSign').click(sgSign);
        $('#sgForm').submit(sgSign);

        // verify

        $('#vrVerify').click(vrVerify);

        $('#vrFrom label input').on('change', function() {
          var bJoin = $(this).attr('id')=="vrFromMessage";
          $('.vrAddr').attr('hidden', bJoin);
          $('.vrSig').attr('hidden', bJoin);
          $('#vrMsg').attr('rows', bJoin ? 14:9);

          // convert from Bitcoin-QT to signed message and vice-versa
          if (bJoin) {
            var p = { "address": $('#vrAddr').val(), "message":$('#vrMsg').val(), "signature":$('#vrSig').val() };
            if (p.message && p.signature && $('#vrMsg'))
              $('#vrMsg').val(joinMessage("inputs_io", p.address, p.message, p.signature));
          } else {
            var p = splitMessage($('#vrMsg').val());
            if (p) {

              if (p.type=="armory_hex") {
                $('#vrAlert').empty();
                console.log('impossible to convert signature, message digest is incompatible with bitcoin-qt');
                p = { "message": $('#vrMsg').val() };
              }

              $('#vrAddr').val(p.address)
              $('#vrMsg').val(p.message)
              $('#vrSig').val(p.signature);
            }
          }

        });

        onInput($('#vrAddr'), vrOnChange);
        onInput($('#vrMsg'), vrOnChange);
        onInput($('#vrSig'), vrOnChange);

        // permalink support
        if ( window.location.hash && window.location.hash.indexOf('?')!=-1 ) {
          var args = window.location.hash.split('?')[1].split('&');
          var p = {};
          for ( var i=0; i<args.length; i++ ) {
            var arg = args[i].split('=');
            p[arg[0]] = decodeURIComponent(arg[1]);
          }
          if (p.vrMsg && p.vrSig) {
            $('#vrMsg').val(joinMessage( "inputs_io", (p.vrAddr||"<insert address here>"), p.vrMsg, p.vrSig ));
            vrVerify();
          }
        }

        // currency select

        $('#crCurrency ul li a').on('click', crChange);

        // init secure random
        try {
          var r = secureRandom(32);
          $('#genRandom').attr('disabled', false);
          $('#chRandom').attr('disabled', false);
        } catch (err) {
          console.log ('secureRandom is not supported');
        }

        $('#toggleKeyCode').on('click', function() {
            $('#genKeyQR').slideToggle();
            $('#sec').closest('.form-group').slideToggle();
        });

        $('#togglePass').on('click', function(){
            var type = $('#pass').attr('type');
            type = (type === 'text' ? 'password' : 'text');
            $('#pass').attr('type', type);
        });
    });
})(jQuery);
