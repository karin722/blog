!function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e=[]){const n=$(`\n  <div class="message">\n    <div class="message-title">\n    ${t}\n    </div>\n    <div class="message-btns">\n    </div>\n  </div>`),i={close(){n&&n.removeClass("active"),setTimeout(()=>{n&&n.remove()},600)},show(){setTimeout(()=>{n&&n.addClass("active")},1)}},r=$('\n    <a class="message-closeBtn">\n      <i class="fa fa-times-circle fa-2x"></i>\n    </a>\n  ');r.click(()=>{i.close()}),n.append(r);const o=n.find(".message-btns");for(const t of e){const e=$(`<button class="message-btn message-btn-${t.type||""}">${t.text}</button>`);t.click&&e.click(e=>t.click(e,i)),o.append(e)}$(document.body).append(n),i.show()}function n(t){const e=$("<div> </div>");e.on("scroll",t=>t.preventDefault()),e.on("wheel",t=>t.preventDefault());return e.css({position:"fixed",display:"none",top:0,left:0,width:"100%",height:"100%",overflow:"auto",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:1e3,cursor:"zoom-out"}),e.click(t=>t.currentTarget===t.target&&(e.hide(),void e.remove())),$(t).css({position:"relative",top:"50%",transform:"translateY(-50%)",margin:"0 auto",maxWidth:"80%",maxHeight:"80%",display:"block",cursor:"default"}),e.append(t),e}!function(t,e){!function(t){var e=function(){var e,n,i,r,o,a=[],s=a.concat,c=a.filter,u=a.slice,l=t.document,f={},h={},p={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},d=/^\s*<(\w+|!)[^>]*>/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,m=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,g=/^(?:body|html)$/i,y=/([A-Z])/g,b=["val","css","html","text","data","width","height","offset"],x=l.createElement("table"),w=l.createElement("tr"),E={tr:l.createElement("tbody"),tbody:x,thead:x,tfoot:x,td:w,th:w,"*":l.createElement("div")},j=/complete|loaded|interactive/,T=/^[\w-]*$/,$={},C=$.toString,N={},S=l.createElement("div"),O={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},k=Array.isArray||function(t){return t instanceof Array};function P(t){return null==t?String(t):$[C.call(t)]||"object"}function D(t){return"function"==P(t)}function A(t){return null!=t&&t==t.window}function L(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function M(t){return"object"==P(t)}function F(t){return M(t)&&!A(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){var e=!!t&&"length"in t&&t.length,i=n.type(t);return"function"!=i&&!A(t)&&("array"==i||0===e||"number"==typeof e&&e>0&&e-1 in t)}function z(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function Z(t){return t in h?h[t]:h[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function I(t,e){return"number"!=typeof e||p[z(t)]?e:e+"px"}function q(t){return"children"in t?u.call(t.children):n.map(t.childNodes,(function(t){if(1==t.nodeType)return t}))}function B(t,e){var n,i=t?t.length:0;for(n=0;n<i;n++)this[n]=t[n];this.length=i,this.selector=e||""}function H(t,n,i){for(e in n)i&&(F(n[e])||k(n[e]))?(F(n[e])&&!F(t[e])&&(t[e]={}),k(n[e])&&!k(t[e])&&(t[e]=[]),H(t[e],n[e],i)):void 0!==n[e]&&(t[e]=n[e])}function W(t,e){return null==e?n(t):n(t).filter(e)}function V(t,e,n,i){return D(e)?e.call(t,n,i):e}function _(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function U(t,e){var n=t.className||"",i=n&&void 0!==n.baseVal;if(void 0===e)return i?n.baseVal:n;i?n.baseVal=e:t.className=e}function X(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function J(t,e){e(t);for(var n=0,i=t.childNodes.length;n<i;n++)J(t.childNodes[n],e)}return N.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=S).appendChild(t),i=~N.qsa(r,e).indexOf(t),o&&S.removeChild(t),i},r=function(t){return t.replace(/-+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))},o=function(t){return c.call(t,(function(e,n){return t.indexOf(e)==n}))},N.fragment=function(t,e,i){var r,o,a;return v.test(t)&&(r=n(l.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(m,"<$1></$2>")),void 0===e&&(e=d.test(t)&&RegExp.$1),e in E||(e="*"),(a=E[e]).innerHTML=""+t,r=n.each(u.call(a.childNodes),(function(){a.removeChild(this)}))),F(i)&&(o=n(r),n.each(i,(function(t,e){b.indexOf(t)>-1?o[t](e):o.attr(t,e)}))),r},N.Z=function(t,e){return new B(t,e)},N.isZ=function(t){return t instanceof N.Z},N.init=function(t,e){var i,r;if(!t)return N.Z();if("string"==typeof t)if("<"==(t=t.trim())[0]&&d.test(t))i=N.fragment(t,RegExp.$1,e),t=null;else{if(void 0!==e)return n(e).find(t);i=N.qsa(l,t)}else{if(D(t))return n(l).ready(t);if(N.isZ(t))return t;if(k(t))r=t,i=c.call(r,(function(t){return null!=t}));else if(M(t))i=[t],t=null;else if(d.test(t))i=N.fragment(t.trim(),RegExp.$1,e),t=null;else{if(void 0!==e)return n(e).find(t);i=N.qsa(l,t)}}return N.Z(i,t)},(n=function(t,e){return N.init(t,e)}).extend=function(t){var e,n=u.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach((function(n){H(t,n,e)})),t},N.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],o=i||r?e.slice(1):e,a=T.test(o);return t.getElementById&&a&&i?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:u.call(a&&!i&&t.getElementsByClassName?r?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=l.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=P,n.isFunction=D,n.isWindow=A,n.isArray=k,n.isPlainObject=F,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},n.inArray=function(t,e,n){return a.indexOf.call(e,t,n)},n.camelCase=r,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.noop=function(){},n.map=function(t,e){var i,r,o,a,s=[];if(R(t))for(r=0;r<t.length;r++)null!=(i=e(t[r],r))&&s.push(i);else for(o in t)null!=(i=e(t[o],o))&&s.push(i);return(a=s).length>0?n.fn.concat.apply([],a):a},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(i in t)if(!1===e.call(t[i],i,t[i]))return t;return t},n.grep=function(t,e){return c.call(t,e)},t.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),(function(t,e){$["[object "+e+"]"]=e.toLowerCase()})),n.fn={constructor:N.Z,length:0,forEach:a.forEach,reduce:a.reduce,push:a.push,sort:a.sort,splice:a.splice,indexOf:a.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=N.isZ(e)?e.toArray():e;return s.apply(N.isZ(this)?this.toArray():this,n)},map:function(t){return n(n.map(this,(function(e,n){return t.call(e,n,e)})))},slice:function(){return n(u.apply(this,arguments))},ready:function(t){return j.test(l.readyState)&&l.body?t(n):l.addEventListener("DOMContentLoaded",(function(){t(n)}),!1),this},get:function(t){return void 0===t?u.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each((function(){null!=this.parentNode&&this.parentNode.removeChild(this)}))},each:function(t){return a.every.call(this,(function(e,n){return!1!==t.call(e,n,e)})),this},filter:function(t){return D(t)?this.not(this.not(t)):n(c.call(this,(function(e){return N.matches(e,t)})))},add:function(t,e){return n(o(this.concat(n(t,e))))},is:function(t){return this.length>0&&N.matches(this[0],t)},not:function(t){var e=[];if(D(t)&&void 0!==t.call)this.each((function(n){t.call(this,n)||e.push(this)}));else{var i="string"==typeof t?this.filter(t):R(t)&&D(t.item)?u.call(t):n(t);this.forEach((function(t){i.indexOf(t)<0&&e.push(t)}))}return n(e)},has:function(t){return this.filter((function(){return M(t)?n.contains(this,t):n(this).find(t).size()}))},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!M(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!M(t)?t:n(t)},find:function(t){var e=this;return t?"object"==typeof t?n(t).filter((function(){var t=this;return a.some.call(e,(function(e){return n.contains(e,t)}))})):1==this.length?n(N.qsa(this[0],t)):this.map((function(){return N.qsa(this,t)})):n()},closest:function(t,e){var i=[],r="object"==typeof t&&n(t);return this.each((function(n,o){for(;o&&!(r?r.indexOf(o)>=0:N.matches(o,t));)o=o!==e&&!L(o)&&o.parentNode;o&&i.indexOf(o)<0&&i.push(o)})),n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,(function(t){if((t=t.parentNode)&&!L(t)&&e.indexOf(t)<0)return e.push(t),t}));return W(e,t)},parent:function(t){return W(o(this.pluck("parentNode")),t)},children:function(t){return W(this.map((function(){return q(this)})),t)},contents:function(){return this.map((function(){return this.contentDocument||u.call(this.childNodes)}))},siblings:function(t){return W(this.map((function(t,e){return c.call(q(e.parentNode),(function(t){return t!==e}))})),t)},empty:function(){return this.each((function(){this.innerHTML=""}))},pluck:function(t){return n.map(this,(function(e){return e[t]}))},show:function(){return this.each((function(){var t,e,n;"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=(t=this.nodeName,f[t]||(e=l.createElement(t),l.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),f[t]=n),f[t]))}))},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=D(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each((function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)}))},wrapAll:function(t){if(this[0]){var e;for(n(this[0]).before(t=n(t));(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=D(t);return this.each((function(i){var r=n(this),o=r.contents(),a=e?t.call(this,i):t;o.length?o.wrapAll(a):r.append(a)}))},unwrap:function(){return this.parent().each((function(){n(this).replaceWith(n(this).children())})),this},clone:function(){return this.map((function(){return this.cloneNode(!0)}))},hide:function(){return this.css("display","none")},toggle:function(t){return this.each((function(){var e=n(this);(void 0===t?"none"==e.css("display"):t)?e.show():e.hide()}))},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each((function(e){var i=this.innerHTML;n(this).empty().append(V(this,t,e,i))})):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each((function(e){var n=V(this,t,e,this.textContent);this.textContent=null==n?"":""+n})):0 in this?this.pluck("textContent").join(""):null},attr:function(t,n){var i;return"string"!=typeof t||1 in arguments?this.each((function(i){if(1===this.nodeType)if(M(t))for(e in t)_(this,e,t[e]);else _(this,t,V(this,n,i,this.getAttribute(t)))})):0 in this&&1==this[0].nodeType&&null!=(i=this[0].getAttribute(t))?i:void 0},removeAttr:function(t){return this.each((function(){1===this.nodeType&&t.split(" ").forEach((function(t){_(this,t)}),this)}))},prop:function(t,e){return t=O[t]||t,1 in arguments?this.each((function(n){this[t]=V(this,e,n,this[t])})):this[0]&&this[0][t]},removeProp:function(t){return t=O[t]||t,this.each((function(){delete this[t]}))},data:function(t,e){var n="data-"+t.replace(y,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?X(i):void 0},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each((function(e){this.value=V(this,t,e,this.value)}))):this[0]&&(this[0].multiple?n(this[0]).find("option").filter((function(){return this.selected})).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each((function(t){var i=n(this),r=V(this,e,t,i.offset()),o=i.offsetParent().offset(),a={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(a.position="relative"),i.css(a)}));if(!this.length)return null;if(l.documentElement!==this[0]&&!n.contains(l.documentElement,this[0]))return{top:0,left:0};var i=this[0].getBoundingClientRect();return{left:i.left+t.pageXOffset,top:i.top+t.pageYOffset,width:Math.round(i.width),height:Math.round(i.height)}},css:function(t,i){if(arguments.length<2){var o=this[0];if("string"==typeof t){if(!o)return;return o.style[r(t)]||getComputedStyle(o,"").getPropertyValue(t)}if(k(t)){if(!o)return;var a={},s=getComputedStyle(o,"");return n.each(t,(function(t,e){a[e]=o.style[r(e)]||s.getPropertyValue(e)})),a}}var c="";if("string"==P(t))i||0===i?c=z(t)+":"+I(t,i):this.each((function(){this.style.removeProperty(z(t))}));else for(e in t)t[e]||0===t[e]?c+=z(e)+":"+I(e,t[e])+";":this.each((function(){this.style.removeProperty(z(e))}));return this.each((function(){this.style.cssText+=";"+c}))},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&a.some.call(this,(function(t){return this.test(U(t))}),Z(t))},addClass:function(t){return t?this.each((function(e){if("className"in this){i=[];var r=U(this);V(this,t,e,r).split(/\s+/g).forEach((function(t){n(this).hasClass(t)||i.push(t)}),this),i.length&&U(this,r+(r?" ":"")+i.join(" "))}})):this},removeClass:function(t){return this.each((function(e){if("className"in this){if(void 0===t)return U(this,"");i=U(this),V(this,t,e,i).split(/\s+/g).forEach((function(t){i=i.replace(Z(t)," ")})),U(this,i.trim())}}))},toggleClass:function(t,e){return t?this.each((function(i){var r=n(this);V(this,t,i,U(this)).split(/\s+/g).forEach((function(t){(void 0===e?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)}))})):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return void 0===t?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return void 0===t?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=g.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map((function(){for(var t=this.offsetParent||l.body;t&&!g.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t}))}},n.fn.detach=n.fn.remove,["width","height"].forEach((function(t){var e=t.replace(/./,(function(t){return t[0].toUpperCase()}));n.fn[t]=function(i){var r,o=this[0];return void 0===i?A(o)?o["inner"+e]:L(o)?o.documentElement["scroll"+e]:(r=this.offset())&&r[t]:this.each((function(e){(o=n(this)).css(t,V(this,i,e,o[t]()))}))}})),["after","prepend","before","append"].forEach((function(e,i){var r=i%2;n.fn[e]=function(){var e,o,a=n.map(arguments,(function(t){var i=[];return"array"==(e=P(t))?(t.forEach((function(t){return void 0!==t.nodeType?i.push(t):n.zepto.isZ(t)?i=i.concat(t.get()):void(i=i.concat(N.fragment(t)))})),i):"object"==e||null==t?t:N.fragment(t)})),s=this.length>1;return a.length<1?this:this.each((function(e,c){o=r?c:c.parentNode,c=0==i?c.nextSibling:1==i?c.firstChild:2==i?c:null;var u=n.contains(l.documentElement,o);a.forEach((function(e){if(s)e=e.cloneNode(!0);else if(!o)return n(e).remove();o.insertBefore(e,c),u&&J(e,(function(e){if(!(null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src)){var n=e.ownerDocument?e.ownerDocument.defaultView:t;n.eval.call(n,e.innerHTML)}}))}))}))},n.fn[r?e+"To":"insert"+(i?"Before":"After")]=function(t){return n(t)[e](this),this}})),N.Z.prototype=B.prototype=n.fn,N.uniq=o,N.deserializeValue=X,n.zepto=N,n}();t.Zepto=e,void 0===t.$&&(t.$=e),function(e){var n=1,i=Array.prototype.slice,r=e.isFunction,o=function(t){return"string"==typeof t},a={},s={},c="onfocusin"in t,u={focus:"focusin",blur:"focusout"},l={mouseenter:"mouseover",mouseleave:"mouseout"};function f(t){return t._zid||(t._zid=n++)}function h(t,e,n,i){if((e=p(e)).ns)var r=(o=e.ns,new RegExp("(?:^| )"+o.replace(" "," .* ?")+"(?: |$)"));var o;return(a[f(t)]||[]).filter((function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||r.test(t.ns))&&(!n||f(t.fn)===f(n))&&(!i||t.sel==i)}))}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t,e){return t.del&&!c&&t.e in u||!!e}function v(t){return l[t]||c&&u[t]||t}function m(t,n,i,r,o,s,c){var u=f(t),h=a[u]||(a[u]=[]);n.split(/\s/).forEach((function(n){if("ready"==n)return e(document).ready(i);var a=p(n);a.fn=i,a.sel=o,a.e in l&&(i=function(t){var n=t.relatedTarget;if(!n||n!==this&&!e.contains(this,n))return a.fn.apply(this,arguments)}),a.del=s;var u=s||i;a.proxy=function(e){if(!(e=E(e)).isImmediatePropagationStopped()){e.data=r;var n=u.apply(t,null==e._args?[e]:[e].concat(e._args));return!1===n&&(e.preventDefault(),e.stopPropagation()),n}},a.i=h.length,h.push(a),"addEventListener"in t&&t.addEventListener(v(a.e),a.proxy,d(a,c))}))}function g(t,e,n,i,r){var o=f(t);(e||"").split(/\s/).forEach((function(e){h(t,e,n,i).forEach((function(e){delete a[o][e.i],"removeEventListener"in t&&t.removeEventListener(v(e.e),e.proxy,d(e,r))}))}))}s.click=s.mousedown=s.mouseup=s.mousemove="MouseEvents",e.event={add:m,remove:g},e.proxy=function(t,n){var a=2 in arguments&&i.call(arguments,2);if(r(t)){var s=function(){return t.apply(n,a?a.concat(i.call(arguments)):arguments)};return s._zid=f(t),s}if(o(n))return a?(a.unshift(t[n],t),e.proxy.apply(null,a)):e.proxy(t[n],t);throw new TypeError("expected function")},e.fn.bind=function(t,e,n){return this.on(t,e,n)},e.fn.unbind=function(t,e){return this.off(t,e)},e.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var y=function(){return!0},b=function(){return!1},x=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,w={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};function E(t,n){return!n&&t.isDefaultPrevented||(n||(n=t),e.each(w,(function(e,i){var r=n[e];t[e]=function(){return this[i]=y,r&&r.apply(n,arguments)},t[i]=b})),t.timeStamp||(t.timeStamp=Date.now()),(void 0!==n.defaultPrevented?n.defaultPrevented:"returnValue"in n?!1===n.returnValue:n.getPreventDefault&&n.getPreventDefault())&&(t.isDefaultPrevented=y)),t}function j(t){var e,n={originalEvent:t};for(e in t)x.test(e)||void 0===t[e]||(n[e]=t[e]);return E(n,t)}e.fn.delegate=function(t,e,n){return this.on(e,t,n)},e.fn.undelegate=function(t,e,n){return this.off(e,t,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,a,s,c){var u,l,f=this;return t&&!o(t)?(e.each(t,(function(t,e){f.on(t,n,a,e,c)})),f):(o(n)||r(s)||!1===s||(s=a,a=n,n=void 0),void 0!==s&&!1!==a||(s=a,a=void 0),!1===s&&(s=b),f.each((function(r,o){c&&(u=function(t){return g(o,t.type,s),s.apply(this,arguments)}),n&&(l=function(t){var r,a=e(t.target).closest(n,o).get(0);if(a&&a!==o)return r=e.extend(j(t),{currentTarget:a,liveFired:o}),(u||s).apply(a,[r].concat(i.call(arguments,1)))}),m(o,t,s,a,n,l||u)})))},e.fn.off=function(t,n,i){var a=this;return t&&!o(t)?(e.each(t,(function(t,e){a.off(t,n,e)})),a):(o(n)||r(i)||!1===i||(i=n,n=void 0),!1===i&&(i=b),a.each((function(){g(this,t,i,n)})))},e.fn.trigger=function(t,n){return(t=o(t)||e.isPlainObject(t)?e.Event(t):E(t))._args=n,this.each((function(){t.type in u&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)}))},e.fn.triggerHandler=function(t,n){var i,r;return this.each((function(a,s){(i=j(o(t)?e.Event(t):t))._args=n,i.target=s,e.each(h(s,t.type||t),(function(t,e){if(r=e.proxy(i),i.isImmediatePropagationStopped())return!1}))})),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach((function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}})),e.Event=function(t,e){o(t)||(t=(e=t).type);var n=document.createEvent(s[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),E(n)}}(e),function(e){var n,i,r=+new Date,o=t.document,a=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,c=/^(?:text|application)\/xml/i,u=/^\s*$/,l=o.createElement("a");function f(t,n,i,r){if(t.global)return function(t,n,i){var r=e.Event(n);return e(t).trigger(r,i),!r.isDefaultPrevented()}(n||o,i,r)}function h(t,e){var n=e.context;if(!1===e.beforeSend.call(n,t,e)||!1===f(e,n,"ajaxBeforeSend",[t,e]))return!1;f(e,n,"ajaxSend",[t,e])}function p(t,e,n,i){var r=n.context;n.success.call(r,t,"success",e),i&&i.resolveWith(r,[t,"success",e]),f(n,r,"ajaxSuccess",[e,n,t]),v("success",e,n)}function d(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),f(i,o,"ajaxError",[n,i,t||e]),v(e,n,i)}function v(t,n,i){var r=i.context;i.complete.call(r,n,t),f(i,r,"ajaxComplete",[n,i]),function(t){t.global&&!--e.active&&f(t,null,"ajaxStop")}(i)}function m(){}function g(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function y(t,n,i,r){return e.isFunction(n)&&(r=i,i=n,n=void 0),e.isFunction(i)||(r=i,i=void 0),{url:t,data:n,success:i,dataType:r}}l.href=t.location.href,e.active=0,e.ajaxJSONP=function(n,i){if(!("type"in n))return e.ajax(n);var a,s,c=n.jsonpCallback,u=(e.isFunction(c)?c():c)||"Zepto"+r++,l=o.createElement("script"),f=t[u],v=function(t){e(l).triggerHandler("error",t||"abort")},m={abort:v};return i&&i.promise(m),e(l).on("load error",(function(r,o){clearTimeout(s),e(l).off().remove(),"error"!=r.type&&a?p(a[0],m,n,i):d(null,o||"error",m,n,i),t[u]=f,a&&e.isFunction(f)&&f(a[0]),f=a=void 0})),!1===h(m,n)?(v("abort"),m):(t[u]=function(){a=arguments},l.src=n.url.replace(/\?(.+)=\?/,"?$1="+u),o.head.appendChild(l),n.timeout>0&&(s=setTimeout((function(){v("timeout")}),n.timeout)),m)},e.ajaxSettings={type:"GET",beforeSend:m,success:m,error:m,complete:m,context:null,global:!0,xhr:function(){return new t.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:m},e.ajax=function(r){var a,v,y=e.extend({},r||{}),b=e.Deferred&&e.Deferred();for(n in e.ajaxSettings)void 0===y[n]&&(y[n]=e.ajaxSettings[n]);!function(t){t.global&&0==e.active++&&f(t,null,"ajaxStart")}(y),y.crossDomain||((a=o.createElement("a")).href=y.url,a.href=a.href,y.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),y.url||(y.url=t.location.toString()),(v=y.url.indexOf("#"))>-1&&(y.url=y.url.slice(0,v)),function(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=g(t.url,t.data),t.data=void 0)}(y);var x=y.dataType,w=/\?.+=\?/.test(y.url);if(w&&(x="jsonp"),!1!==y.cache&&(r&&!0===r.cache||"script"!=x&&"jsonp"!=x)||(y.url=g(y.url,"_="+Date.now())),"jsonp"==x)return w||(y.url=g(y.url,y.jsonp?y.jsonp+"=?":!1===y.jsonp?"":"callback=?")),e.ajaxJSONP(y,b);var E,j=y.accepts[x],T={},$=function(t,e){T[t.toLowerCase()]=[t,e]},C=/^([\w-]+:)\/\//.test(y.url)?RegExp.$1:t.location.protocol,N=y.xhr(),S=N.setRequestHeader;if(b&&b.promise(N),y.crossDomain||$("X-Requested-With","XMLHttpRequest"),$("Accept",j||"*/*"),(j=y.mimeType||j)&&(j.indexOf(",")>-1&&(j=j.split(",",2)[0]),N.overrideMimeType&&N.overrideMimeType(j)),(y.contentType||!1!==y.contentType&&y.data&&"GET"!=y.type.toUpperCase())&&$("Content-Type",y.contentType||"application/x-www-form-urlencoded"),y.headers)for(i in y.headers)$(i,y.headers[i]);if(N.setRequestHeader=$,N.onreadystatechange=function(){if(4==N.readyState){N.onreadystatechange=m,clearTimeout(E);var t,n=!1;if(N.status>=200&&N.status<300||304==N.status||0==N.status&&"file:"==C){if(x=x||function(t){return t&&(t=t.split(";",2)[0]),t&&("text/html"==t?"html":"application/json"==t?"json":s.test(t)?"script":c.test(t)&&"xml")||"text"}(y.mimeType||N.getResponseHeader("content-type")),"arraybuffer"==N.responseType||"blob"==N.responseType)t=N.response;else{t=N.responseText;try{t=function(t,e,n){if(n.dataFilter==m)return t;var i=n.context;return n.dataFilter.call(i,t,e)}(t,x,y),"script"==x?(0,eval)(t):"xml"==x?t=N.responseXML:"json"==x&&(t=u.test(t)?null:e.parseJSON(t))}catch(t){n=t}if(n)return d(n,"parsererror",N,y,b)}p(t,N,y,b)}else d(N.statusText||null,N.status?"error":"abort",N,y,b)}},!1===h(N,y))return N.abort(),d(null,"abort",N,y,b),N;var O=!("async"in y)||y.async;if(N.open(y.type,y.url,O,y.username,y.password),y.xhrFields)for(i in y.xhrFields)N[i]=y.xhrFields[i];for(i in T)S.apply(N,T[i]);return y.timeout>0&&(E=setTimeout((function(){N.onreadystatechange=m,N.abort(),d(null,"timeout",N,y,b)}),y.timeout)),N.send(y.data?y.data:null),N},e.get=function(){return e.ajax(y.apply(null,arguments))},e.post=function(){var t=y.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=y.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,i){if(!this.length)return this;var r,o=this,s=t.split(/\s/),c=y(t,n,i),u=c.success;return s.length>1&&(c.url=s[0],r=s[1]),c.success=function(t){o.html(r?e("<div>").html(t.replace(a,"")).find(r):t),u&&u.apply(o,arguments)},e.ajax(c),this};var b=encodeURIComponent;e.param=function(t,n){var i=[];return i.add=function(t,n){e.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(b(t)+"="+b(n))},function t(n,i,r,o){var a,s=e.isArray(i),c=e.isPlainObject(i);e.each(i,(function(i,u){a=e.type(u),o&&(i=r?o:o+"["+(c||"object"==a||"array"==a?i:"")+"]"),!o&&s?n.add(u.name,u.value):"array"==a||!r&&"object"==a?t(n,u,r,i):n.add(i,u)}))}(i,t,n),i.join("&").replace(/%20/g,"+")}}(e),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){if(t.forEach)return t.forEach(r);i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,(function(i,o){n=o.type,(e=o.name)&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())})),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach((function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))})),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(e),function(){try{getComputedStyle(void 0)}catch(n){var e=getComputedStyle;t.getComputedStyle=function(t,n){try{return e(t,n)}catch(t){return null}}}}()}(t)}(t),(t=>{t.fn.fancyImg=function(){return this.each((e,i)=>{const r=t(i);r.attr("src")&&r.click(()=>{const e=n(r.clone(!1,!1));t("body").append(e),e.show()})}),this},t.message=function(t,n){e(t,n)}})($);var i=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},r="object"==typeof t&&t&&t.Object===Object&&t,o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")(),s=function(){return a.Date.now()},c=a.Symbol,u=Object.prototype,l=u.hasOwnProperty,f=u.toString,h=c?c.toStringTag:void 0;var p=function(t){var e=l.call(t,h),n=t[h];try{t[h]=void 0;var i=!0}catch(t){}var r=f.call(t);return i&&(e?t[h]=n:delete t[h]),r},d=Object.prototype.toString;var v=function(t){return d.call(t)},m=c?c.toStringTag:void 0;var g=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":m&&m in Object(t)?p(t):v(t)};var y=function(t){return null!=t&&"object"==typeof t};var b=function(t){return"symbol"==typeof t||y(t)&&"[object Symbol]"==g(t)},x=/^\s+|\s+$/g,w=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,j=/^0o[0-7]+$/i,T=parseInt;var C=function(t){if("number"==typeof t)return t;if(b(t))return NaN;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(x,"");var n=E.test(t);return n||j.test(t)?T(t.slice(2),n?2:8):w.test(t)?NaN:+t},N=Math.max,S=Math.min;var O=function(t,e,n){var r,o,a,c,u,l,f=0,h=!1,p=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(e){var n=r,i=o;return r=o=void 0,f=e,c=t.apply(i,n)}function m(t){return f=t,u=setTimeout(y,e),h?v(t):c}function g(t){var n=t-l;return void 0===l||n>=e||n<0||p&&t-f>=a}function y(){var t=s();if(g(t))return b(t);u=setTimeout(y,function(t){var n=e-(t-l);return p?S(n,a-(t-f)):n}(t))}function b(t){return u=void 0,d&&r?v(t):(r=o=void 0,c)}function x(){var t=s(),n=g(t);if(r=arguments,o=this,l=t,n){if(void 0===u)return m(l);if(p)return clearTimeout(u),u=setTimeout(y,e),v(l)}return void 0===u&&(u=setTimeout(y,e)),c}return e=C(e)||0,i(n)&&(h=!!n.leading,a=(p="maxWait"in n)?N(C(n.maxWait)||0,e):a,d="trailing"in n?!!n.trailing:d),x.cancel=function(){void 0!==u&&clearTimeout(u),f=0,r=l=o=u=void 0},x.flush=function(){return void 0===u?c:b(s())},x};var k=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return i(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),O(t,e,{leading:r,maxWait:e,trailing:o})};const P="1.0.2";function D(t=!1){!function(t=!1){const e=t?"https://cdn.bootcss.com/highlight.js/9.18.1/styles/atom-one-dark.min.css":"https://cdn.bootcss.com/highlight.js/9.18.1/styles/atom-one-light.min.css",n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.href=e,n.media="all",$("head").append(n)}(t),document.documentElement.setAttribute("theme",t?"dark":"light")}window.addEventListener("load",()=>{console.log(`Production ${P}`),$(window).scroll(k(()=>{$(window).scrollTop()<5?$("nav").removeClass("active"):$("nav").addClass("active")},100)),$(".excerpt-link").click((function(){document.location.href=$(this).attr("href")}));const t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)")||{};D(t.matches),t.addEventListener("change",t=>{D(t.matches)})}),$(document).ready(()=>{switch(window.location.pathname){case"/":$(".menu").find(".home, .home a").addClass("hover");break;case"/archives/":$(".menu").find(".archives, .archives a").addClass("hover");break;case"/tags/":$(".menu").find(".tags, .tags a").addClass("hover")}});$(document).ready(()=>{$(".markdown-content img").fancyImg();let t=$("#post-nav");const e=$("#post-content");t[0]&&function(t,e){const n=t=>{const e=$("<ul> </ul>");return t.forEach(t=>{const i=$("<li> </li>"),r=$(`<a>${t.node.text}</a>`);r.click(()=>{const e=$("#"+t.node.href).offset().top-60;$(window).scrollTop(e)}),i.append(r),0!==t.children.length&&i.append(n(t.children)),e.append(i)}),e},i=function(t){const e=t=>{const n=t.node.level+1;for(let i=0;i<t.children.length;i++){const r=t.children[i];if(0!==r.children.length)e(r);else if(r.node.level!==n){const e=t.children.splice(i,1);t.children[i-1].children.push(e)}}},n=[];let i=null;return t.find("h1, h2, h3, h4, h5, h6").each((t,e)=>{const r=+e.nodeName.split("").pop();i||(i=r);const o=$(e).text(),a={level:r,text:o,href:o.split(/[\s.*+?^=!:${}()|[\]/\\]+/).filter(t=>""!==t).join("-")};i===r?n.push({node:a,children:[]}):n[n.length-1].children.push({node:a,children:[]})}),n.forEach(t=>{e(t)}),n}(e),r=n(i);t.append(r).addClass("active")}(t,e),function(t){const e=$("#post-content").find("h1, h2, h3, h4, h5, h6"),n=e.length,i=()=>{let i=-1;for(let r=0;r<n;r++){if($(e[r]).offset().top>=t.scrollTop()+60){i=r;break}}if(-1!=i){const t=$("#post-nav").find("a"),e=$("#post-nav").find("a").get(i),n=$(e);t.removeClass("hover"),n.addClass("hover")}};$(t).scroll(i),i()}($(window))}),window.addEventListener("load",()=>{const t=function(){const t=document.getElementsByTagName("meta"),e={};for(const n of t)e[n.name]=n.content;return e}();var e;"true"===t.sw?async function(){if(!navigator.serviceWorker)return;(await navigator.serviceWorker.register("/ws.js")).onupdatefound=t=>{$.message("检查到更新，请刷新重新访问",[{text:"刷新",click(t,e){e.close(),location.reload()}},{text:"关闭",type:"plain",click(){console.log("click")}}])}}():async function(){if(!navigator.serviceWorker)return;const t=await navigator.serviceWorker.getRegistrations();for(const e of t)e.unregister()}(),t.ga&&function(t){function e(){window.dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config",t)}(t.ga),t.ba&&(e=t.ba,function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?"+e;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}())})}();
//# sourceMappingURL=index.js.map
