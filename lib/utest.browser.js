// source /vendor/jquery.js
/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);
// end:source /vendor/jquery.js

// source /ref-atma-libs/browser/globals.js
(function(globals){function __eval(t,e){"use strict";e&&e.route.params;return eval.call(window,t)}function obj_extend(t,e){for(var n in e)null!=e[n]&&(null==globals[n]||"object"!=typeof globals[n]||"object"!=typeof e[n]?t[n]=e[n]:obj_extend(globals[n],e[n]))}/*!
 * ClassJS v%VERSION%
 * Part of the Atma.js Project
 * http://atmajs.com/
 *
 * MIT license
 * http://opensource.org/licenses/MIT
 *
 * (c) 2012, %YEAR% Atma.js and other contributors
 */
!function(t,e){"use strict";function n(){return e(o,r)}var r,o="undefined"==typeof window||null==window.navigator?global:window;return r=t||o,"function"==typeof define&&define.amd?define(n):(n(),void("undefined"!=typeof module&&(module.exports=r.Class)))}(this,function(t,e){"use strict";var n,r,o,i,l,s,u,a,c,f=Array.prototype.slice,h=Array.prototype.sort,p={ModelHost:null},d="__$class__";!function(){n=function(t){return"function"==typeof t},r=function(t){return null!=t&&"object"==typeof t},s=function(t){return null!=t&&"Date"===t.constructor.name&&t instanceof Date},o=function(t){return null!=t&&"number"==typeof t.length&&"function"==typeof t.slice},i=o,l=function(t){return"string"==typeof t},u=function(t){return"string"==typeof t&&""!==t},a=function(t){return null==t?!1:"object"!=typeof t?!1:t.constructor===Object},c=function(e){return void 0===e||e===t}}();var g,m,v;!function(){g=function(t,e){if(m(t))for(var n=0,r=t.length;r>n;n++)e(t[n],n);else e(t)},m=function(t){return null!=t&&"object"==typeof t&&"number"==typeof t.length&&"function"==typeof t.splice},v=function(t,e){for(var n=t.length,r=-1;++r<n;)e(t[r])===!0&&(t.splice(r,1),r--,n--)},"function"!=typeof Array.isArray&&(Array.isArray=function(t){return t instanceof Array?!0:null==t||"object"!=typeof t?!1:void 0!==t.length&&"function"==typeof t.slice})}();var _,y,b,x,w,C;!function(){function e(t,e){if(null==e||"object"!=typeof e)return e;var n=this,o=n[t];return o[d]&&o.toJSON?r(o[d],e):e}function r(t,e){var n={};return n.json=e,n[d]=t,n}function o(t,e){var n;return null!=e&&"object"==typeof e&&e[d]&&(n=Y(e[d]),"function"==typeof n?e=new n(e.json):console.error("<class:parse> Class was not registered",e[d])),e}function i(e,n){"function"==typeof e&&(e=e.prototype),null==n&&(n={});var r,o,l;for(o in e)if(l=e[o],r=null==l?null:typeof l,"function"!==r){var s=o.charCodeAt(0);if(!(95===s&&"_id"!==o||s>=65&&90>=s))if("object"!==r)n[o]=r;else{var u=l.constructor,a=u&&u.name;if("Object"!==a&&a&&t[a]===u){n[o]=a;continue}n[o]=i(l)}}return e.__proto__&&i(e.__proto__,n),n}_=function(t,e){T(p.ModelHost||Y.Model,t,e)},y=function(t){return D(p.ModelHost||Y.Model,t)},b=function(t,e){var r=l(t)?y(t):t;return!n(r)&&console.error("<class:patch> Not a Function",t),e.Base=r,r=Y(e),l(t)&&_(t,r),r},x=function(t){return JSON.stringify(t,e)},w=function(t){return JSON.parse(t,o)},C=function(t){return i(t)}}();var k,j,N;!function(){function t(t,e){if(null!=e){"function"==typeof t&&(t=t.prototype),"function"==typeof e&&(e=e.prototype);var n,r;for(n in e)"constructor"!==n&&(r=e[n],null!=r&&(t[n]=r))}}function e(t,e){var n;return n=t?function(e){var n=1===arguments.length&&f(e)?e:arguments;return U(t,this,n)}:B,function(){return this["super"]=n,U(e,this,arguments)}}function o(n,r,o,i,l,s){var a=i,c=i;a.constructor=n.prototype.constructor,null!=o&&(c[u]={},g(o,function(e){t(c[u],e)}),c=c[u]),null!=r&&(c[u]=r.prototype);for(var f in s)null==a[f]&&(a[f]=s[f]);for(var f in l)a[f]=e(a[f],l[f]);n.prototype=a}function l(n,r,o,i,l,s){if(null!=r){var u=function(){};u.prototype=r.prototype,n.prototype=new u,n.prototype.constructor=n}null!=o&&g(o,function(e){delete e.constructor,t(n,e)});var a=n.prototype;M(a,s);for(var c in l)a[c]=e(a[c],l[c]);t(n,i)}function s(t){return n(t)?t.prototype:t}var u="__proto__",c=Object.prototype.toString,f=function(t){return"[object Arguments]"===c.call(t)};k=u in Object.prototype?o:l,j=function(t,e){if(null!=e)if(i(e))for(var o=e.length;--o>-1;)j(t,e[o]);else{var l;n(e)?l=e:r(e.Static)&&(l=e.Static),null!=l&&L(t,l)}},N=function(t,e,n){var r,o;for(r in t)o=t[r],a(o)&&(null!=e&&a(e.prototype[r])&&M(o,e.prototype[r]),null!=n&&g(n,function(t){t=s(t),a(t[r])&&M(o,t[r])}))}}();var E,A,O="__$serialization";!function(){E=function(t){var e,n,r,o=this,i={};null==t&&(t=o[O]);var l;for(e in o)if(l=e,null!=t&&t.hasOwnProperty(e)&&(r=t[e],null!=r&&"object"==typeof r&&(r.key&&(l=r.key),r.hasOwnProperty("serialize")))){if(null==r.serialize)continue;i[l]=r.serialize(o[e])}else if(95!==e.charCodeAt(0)&&"Static"!==e&&"Validate"!==e&&(n=o[e],null!=n))if("_id"!==e){switch(typeof n){case"function":continue;case"object":if(s(n))break;var u=n.toJSON;if(null==u)break;i[l]=n.toJSON();continue}i[l]=n}else i[l]=n;return null!=o._id&&(i._id=o._id),i},A=function(){for(var t,e=this,n=e.length,r=0,o=new Array(n);n>r;r++){if(t=e[r],null!=t&&"object"==typeof t){var i=t.toJSON;if(i===E||i===A){o[r]=t.toJSON();continue}if(null==i){o[r]=E.call(t);continue}}o[r]=t}return o}}();var S,D,T,M,R,P,L,I;!function(){S=function(t){n(t)&&(t=t.prototype);for(var e,r,o=1,i=arguments.length;i>o;o++){e=n(arguments[o])?arguments[o].prototype:arguments[o];for(r in e)if("Static"!==r||null==t.Static)t[r]=e[r];else for(r in e.Static)t.Static[r]=e.Static[r]}return t},D=function(t,e){for(var n=e.split("."),r=n.length,o=-1;++o<r;){if(null==t)return null;t=t[n[o]]}return t},T=function(t,e,n){for(var r,o=e.split("."),i=o.length,l=-1;++l<i-1;)r=o[l],null==t[r]&&(t[r]={}),t=t[r];t[o[l]]=n},M=function(t,e){for(var n in e)null==t[n]&&(t[n]=e[n]);return t},R=function(t,e){if(null==t&&(t={}),null==e)return t;var n,r;for(r in e)n=e[r],null!=n&&(t[r]=n);return t},function(){function t(t,r,o){if(null==t)return{};if(null==r)return r;var i,l;for(l in r)(o!==!0||null==t[l])&&(i=e(r,l),null!=i?void 0===i.value?n(t,l,i):t[l]=i.value:P(t,r.__proto__));return t}var e=Object.getOwnPropertyDescriptor,n=Object.defineProperty;return null==e?(P=R,void(L=M)):(P=function(e,n){return t(e,n,!1)},void(L=function(e,n){return t(e,n,!0)}))}(),function(){function t(t,n,i){var l,a,c,f;for(a in n)if(null==u||t!==i||u.hasOwnProperty(a)!==!1){switch(a.charCodeAt(0)){case 63://! accept falsy value
if(f=a.substring(1),c=t[f],!c)continue;if(l=e(c,n[a],i),null!=l)return l.setInvalidProperty(f),l;continue;case 45:if(f=a.substring(1),"object"==typeof t&&f in t)return o(f);continue}if(c=t[a],null==c)return r(a);if(l=e(c,n[a],i),null!=l)return l.setInvalidProperty(a),l}if(s)for(a in t)if(!(a in n||"?"+a in n))return o(a)}function e(e,o,s){if(null==o)return null;if("function"==typeof o){var u=o.call(s,e);return null==u||u===!0?null:u===!1?l():i(u)}if(null==e)return r();if("string"==typeof o){var a="string",c="number",f="boolean";switch(o){case a:return typeof e!==a||0===e.length?n(a):null;case c:return typeof e!==c?n(c):null;case f:return typeof e!==f?n(f):null}}if(o instanceof RegExp)return o.test(e)===!1?l():null;if(Array.isArray(o)){if(Array.isArray(e)===!1)return n("array");for(var u,h=-1,p=e.length;++h<p;)if(u=t(e[h],o[0]))return u.setInvalidProperty(h),u;return null}return typeof e!=typeof o?n(typeof e):"object"==typeof e?t(e,o):null}I=function(e){if(null==e)return l("object");u=null,s=!1;for(var n,r,o=arguments.length;--o>0;)switch(r=arguments[o],typeof r){case"string":null==u&&(u={}),u[r]=1;continue;case"boolean":s=r;continue;case"undefined":continue;default:if(1!==o)return l("validation argument at "+o);n=r;continue}return null==n&&(n=e.Validate),null==n?null:t(e,n,e)};var n,r,o,i,l,s=!1,u=null;!function(){function t(t,n,r){return r.type=t,r.property=null,r.setInvalidProperty=e,n.prototype=r,function(t){return new n(t)}}function e(t){return null==this.property?void(this.property=t):void(this.property=t+"."+this.property)}n=t("type",function(t){this.expect=t},{toString:function(){return"Invalid type."+(this.expect?" Expect: "+this.expect:"")+(this.property?" Property: "+this.property:"")}}),r=t("expect",function(t){this.property=t},{toString:function(){return"Property expected."+(this.property?"`"+this.property+"`":"")}}),o=t("unexpect",function(t){this.property=t},{toString:function(){return"Unexpected property"+(this.property?"`"+this.property+"`":"")}}),i=t("custom",function(t){this.error=t},{toString:function(){return"Custom validation: "+this.error+(this.property?" Property: "+this.property:"")}}),l=t("invalid",function(t){this.expect=t},{toString:function(){return"Invalid."+(this.expect?" Expect: "+this.expect:"")+(this.property?" Property: "+this.property:"")}})}()}()}();var H,F;!function(){function t(t,e,n){for(var r in e)n(D(t,r),e[r],r)}function e(t,e,n){for(var r in e)T(t,r,n(D(t,r),e[r],r))}function n(){var t=arguments;return function(e,n,r){for(var o,i=0,l=t.length;l>i;i++)if(o=t[i],o(e,n,r)===!1)return}}function r(t,e,n){return m(t)===!1?(console.warn("<patch> property is not an array",n),!1):void 0}function o(t,e){if(e.hasOwnProperty("$each"))for(var n=0,r=e.$each.length;r>n;n++)t.push(e.$each[n]);else t.push(e)}function i(t,e){t[e>0?"pop":"shift"]()}function l(t,e){v(t,function(t){return c(t,e)})}function s(t,e){return t+e}function u(t,e){return e}function a(){return void 0}H=function(t,e){for(var n in e){var r=p[n];r?r[f](t,e[n],r[h]):console.error("Unknown or not implemented patcher",n)}return t},F=function(t){if(null==t)return"Undefined";var e=!1;for(var n in t)if(e=!0,null==p[n])return"Unsupported patcher: "+n;return e===!1?"No data":null};var c;!function(){c=function(t,e){for(var n in e)if(t[n]!==e[n])return!1;return!0}}();var f=0,h=1,p={$push:[t,n(r,o)],$pop:[t,n(r,i)],$pull:[t,n(r,l)],$inc:[e,s],$set:[e,u],$unset:[e,a],$bit:[e,a]}}();var $,U,z,B,q;!function(){function t(t,e){if(t.length!==e.length)return!1;for(var n=t.length,r=0;n>r;r++)if(t[r]!==e[r])return!1;return!0}$=function(t,e){return function(){return U(t,e,arguments)}},U=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2]);case 4:return t.call(e,n[0],n[1],n[2],n[3]);case 5:return t.call(e,n[0],n[1],n[2],n[3],n[4])}return t.apply(e,n)},z=function(t){var e=f.call(arguments,1);return function(){return arguments.length>0&&(e=e.concat(f.call(arguments))),U(t,null,e)}},B=function(){},q=function(e,n){if(0===e.length)return 0;for(var r=n.length,o=-1;++o<r;)if(t(n[o],e))return o+1;return n.push(e),n.length}}();var V={};(function(){!function(t){function e(){this._callbacks=[]}function n(t){function n(t){return function(){i+=1,o[t]=Array.prototype.slice.call(arguments),i===l&&r.done(o)}}var r=new e,o=[];if(!t||!t.length)return r.done(o),r;for(var i=0,l=t.length,s=0;l>s;s++)t[s].then(n(s));return r}function r(t,n){var o=new e;return 0===t.length?o.done.apply(o,n):t[0].apply(null,n).then(function(){t.splice(0,1),r(t,arguments).then(function(){o.done.apply(o,arguments)})}),o}function o(t){var e="";if("string"==typeof t)e=t;else{var n=encodeURIComponent;for(var r in t)t.hasOwnProperty(r)&&(e+="&"+n(r)+"="+n(t[r]))}return e}function i(){var t;if(window.XMLHttpRequest)t=new XMLHttpRequest;else if(window.ActiveXObject)try{t=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){t=new ActiveXObject("Microsoft.XMLHTTP")}return t}function l(t,n,r,l){function s(){d.abort(),g.done(f,"",d)}var d,g=new e,m=l&&l["Content-Type"]||p.contentType;try{d=i()}catch(v){return g.done(c,""),g}if(r)if("GET"===t)n+="?"+o(r),r=null;else switch(m){case u:r=o(r);break;case a:try{r=JSON.stringify(r)}catch(_){return g.done(h,""),g}default:r=o(r)}d.open(t,n),r&&d.setRequestHeader("Content-Type",m);for(var y in l)l.hasOwnProperty(y)&&d.setRequestHeader(y,l[y]);var b=p.ajaxTimeout;if(b)var x=setTimeout(s,b);return d.onreadystatechange=function(){if(b&&clearTimeout(x),4===d.readyState){var t=!d.status||(d.status<200||d.status>=300)&&304!==d.status;g.done(t,d.responseText,d)}},d.send(r),g}function s(t){return function(e,n,r){return l(t,e,n,r)}}var u="application/x-www-form-urlencoded",a="application/json",c=1,f=2,h=3;e.prototype.then=function(t,n){var r;return this._isdone?r=t.apply(n,this.result):(r=new e,this._callbacks.push(function(){var e=t.apply(n,arguments);e&&"function"==typeof e.then&&e.then(r.done,r)})),r},e.prototype.done=function(){this.result=arguments,this._isdone=!0;for(var t=0;t<this._callbacks.length;t++)this._callbacks[t].apply(null,arguments);this._callbacks=[]};var p={Promise:e,join:n,chain:r,ajax:l,get:s("GET"),post:s("POST"),put:s("PUT"),del:s("DELETE"),patch:s("PATCH"),ENOXHR:c,ETIMEOUT:f,E_PREPAIR_DATA:h,ajaxTimeout:0,contentType:a};"function"==typeof define&&define.amd?define(function(){return p}):t.promise=p}(this)}).call(V),g(["get"],function(t){V[t]=function(e,n){this.promise[t](e).then(function(t,e,r){return t?void n.onError(t,e,r):void n.onSuccess(e)})}}),g(["del","post","put","patch"],function(t){V[t]=function(e,n,r){this.promise[t](e,n).then(function(t,e,n){r(t,e,n)})}});var X;!function(){X=function(e){if(this===Y||null==this||this===t){var n=function(t){this[O]=R(this[O],e),X.call(this,t)};return n}null!=e&&(this.deserialize?this.deserialize(e):X.deserialize(this,e))},X.serialize=function(t){return n(t.toJSON)?t.toJSON():E.call(t,t[O])},X.deserialize=function(t,e){if(l(e))try{e=JSON.parse(e)}catch(i){return console.error("<json:deserialize>",e),t}if(o(e)&&n(t.push)){t.length=0;for(var s=0,u=e.length;u>s;s++)t.push(e[s]);return t}var a,c,f,h,p,d=t[O];if(null!=d){var g="__desAsKeys";if(a=d[g],null==a){a=d[g]={};for(f in d)"__desAsKeys"!==f&&d[f].hasOwnProperty("key")===!0&&(a[d[f].key]=f)}}for(f in e)h=e[f],c=f,t[c]=null!=d&&(p=d.hasOwnProperty(f)?d[f]:null,a[f]&&(c=a[f]),null!=p&&(r(p)&&(p=p.deserialize),l(p)&&(p=y(p)),n(p)))?h instanceof p?h:new p(h):h;return t}}();var W,K=function(){function t(t){this.route=r(t)}function e(t){var e=i.exec(t);return e?{optional:"?"===(e[2]||e[3]),parts:[e[1],e[4]]}:(e=l.exec(t))?{optional:"?"===e[3],parts:[e[1],e[4],e[5]]}:(console.error("Paths breadcrumbs should be matched by regexps"),{parts:[t]})}function n(t,n){for(var r=t.split(n),o=0,i=r.length;i>o;o++)r[o]=e(r[o]);return r}function r(t){var e=/[^\:\{]\?[^:]/.exec(t),r=null;return e&&(e=e.index+1,r=t.substring(e+1),t=t.substring(0,e)),{path:n(t,"/"),query:null==r?null:n(r,"&")}}function o(t,e,n){for(var r,o,i,l=[],s=0,u=t.length;u>s;s++)if(i=t[s],o=i.parts.slice(0),null!=o[1]){if(r=o[1],o[1]=e[r],null!=o[1])l.push(o.join(""));else if(!i.optional)return console.error("Object has no value, for not optional part - ",r),null}else l.push(o[0]);return l.join(n)}t.prototype={constructor:t,create:function(t){var e,n;return e=o(this.route.path,t,"/"),null==e?null:this.route.query&&(n=o(this.route.query,t,"&"),null==n)?null:e+(n?"?"+n:"")},hasAliases:function(t){for(var e,n=0,r=this.route.path.length;r>n;n++)if(e=this.route.path[n].parts[1],e&&null==t[e])return!1;return!0}};var i=/^([^:\?]*)(\??):(\??)([\w]+)$/,l=/^([^\{\?]*)(\{(\??)([\w]+)\})?([^\s]*)?$/;return t}();!function(){function t(t,e,n,r){return null==r?t:(null!=e?U(r,t,e):n.push(r),t)}function e(t){t._done=null,t._fail=null,t._always=null}function n(t,e,n){if(null!=t){for(var r,o=t.length,i=-1;++i<o;)r=t[i],r&&U(r,e,n);t.length=0}}function r(t){return null==t||"object"!=typeof t?!1:t instanceof W?!0:"function"==typeof t.done&&"function"==typeof t.fail}W=function(){},W.prototype={_isAsync:!0,_done:null,_fail:null,_always:null,_resolved:null,_rejected:null,defer:function(){this._rejected=null,this._resolved=null},isResolved:function(){return null!=this._resolved},isRejected:function(){return null!=this._rejected},isBusy:function(){return null==this._resolved&&null==this._rejected},resolve:function(){var t=this._done,r=this._always;return this._resolved=arguments,e(this),n(t,this,arguments),n(r,this,[this]),this},reject:function(){var t=this._fail,r=this._always;return this._rejected=arguments,e(this),n(t,this,arguments),n(r,this,[this]),this},resolveDelegate:function(){return $(this.resolve,this)},rejectDelegate:function(){return $(this.reject,this)},then:function(t,e){return this.pipe(t,e)},done:function(e){return null!=this._rejected?this:t(this,this._resolved,this._done||(this._done=[]),e)},fail:function(e){return null!=this._resolved?this:t(this,this._rejected,this._fail||(this._fail=[]),e)},always:function(e){return t(this,this._rejected||this._resolved,this._always||(this._always=[]),e)},pipe:function(t){function e(t,e,n){return function(){if(null!=n){var o=n.apply(this,arguments);if(null!=o)return r(o)===!0?void o.pipe(t):void t[e](o)}t[e].apply(t,arguments)}}var n;if("function"==typeof t){n=new W;var o=t,i=arguments.length>1?arguments[1]:null;return this.done(e(n,"resolve",o)).fail(e(n,"reject",i)),n}n=t;for(var l,s=arguments.length,u=1===s,a=1===s,c=0;++c<s;)switch(l=arguments[c]){case"done":u=!0;break;case"fail":a=!0;break;default:console.error("Unsupported pipe channel",arguments[c])}return u&&this.done(n.resolveDelegate()),a&&this.fail(n.rejectDelegate()),this},pipeCallback:function(){var t=this;return function(e){if(null!=e)return void t.reject(e);var n=f.call(arguments,1);U(t.resolve,t,n)}}},W.run=function(t,e){var n=new W;return null==e&&(e=n),t.call(e,n.resolveDelegate(),n.rejectDelegate(),n),n},W.create=function(t){return function(){var e=f.call(arguments),n=new W;return e.unshift(n),U(t,this,e),n}},W.memoize=function(t){var e={},n=[];return function(){var r=f.call(arguments),o=q(n,r);if(null!=e[o])return e[o];var i=e[o]=new W;return r.unshift(i),U(t,this,r),i}}}();var G;!function(){function t(){var t,e,n=f.call(arguments),r=n.shift(),o=this._listeners[r],i=0;if(null==o)return this;for(e=o.length;e>i;i++)t=o[i],U(t,this,n),t._once===!0&&(o.splice(i,1),i--,e--);return this}G=function(){this._listeners={}},G.prototype={constructor:G,on:function(t,e){return null!=e&&(this._listeners[t]||(this._listeners[t]=[])).push(e),this},once:function(t,e){return null!=e&&(e._once=!0,(this._listeners[t]||(this._listeners[t]=[])).push(e)),this},pipe:function(t){var e,n=this;return function(){e=f.call(arguments),e.unshift(t),U(n.trigger,n,e)}},emit:t,trigger:t,off:function(t,e){var n=this._listeners[t];if(null==n)return this;if(1===arguments.length)return n.length=0,this;for(var r=n.length,o=-1;++o<r;)n[o]===e&&(n.splice(o,1),o--,r--);return this}}}();var J,Y=function(t){var e,n;if(l(t)){if(e=t,1===arguments.length)return y(t);n=arguments[1],n[d]=e}else n=t;var r=n.Base,i=n.Extends,s=n.Static,u=n.Construct,a=null,f=n.Store,h=n.Self,p=n.Override;return null!=r&&delete n.Base,null!=i&&delete n.Extends,null!=s&&delete n.Static,null!=h&&delete n.Self,null!=u&&delete n.Construct,null!=f&&(null==i?i=f:o(i)?i.unshift(f):i=[f,i],delete n.Store),null!=p&&delete n.Override,null==r&&null==i&&null==h?(void 0===n.toJSON&&(n.toJSON=E),a=null==u?function(){}:u,n.constructor=a.prototype.constructor,null!=s&&P(a,s),a.prototype=n,null!=e&&_(e,a),a):(a=function(){if(null!=i)for(var t=i instanceof Array,e=t?i.length:1,n=0,o=null;e>n;n++)o=t?i[n]:i,"function"==typeof o&&U(o,this,arguments);if(null!=r&&U(r,this,arguments),null!=h&&c(this)===!1)for(var l in h)this[l]=$(h[l],this);if(null!=u){var s=U(u,this,arguments);if(null!=s)return s}return this["super"]=null,this},null!=e&&_(e,a),null!=s&&P(a,s),null!=r&&j(a,r),null!=i&&j(a,i),N(n,r,i),k(a,r,i,n,p,{toJSON:E}),n=null,s=null,a)};!function(){function t(t,n,r){var o,i=e(t,n,!0);return r.done(function(){o=f.call(arguments),o.unshift(null),i.apply(null,o)}).fail(function(t){i(t)})}function e(t,e,r){null==r&&(r=!0),t._timeout&&clearTimeout(t._timeout),t.defer(),t._wait++,e&&(t._result||(t._result={}),e in t._result&&console.warn("<await>",e,"already awaiting"),t._result[e]=null);var o=z(n,t,e,r);return t._timeout=setTimeout(o,J.TIMEOUT),o}function n(t,e,n){if(0===arguments.length)return t._wait=0,void t.reject("408: Timeout");if(0!==t._wait){var r=t._result;if(e){var o=f.call(arguments,3);r[e]={error:n?o.shift():null,arguments:o}}else n&&null!=arguments[3]&&(null==r&&(r=t._result={}),r.__error=arguments[3]);if(0===--t._wait){clearTimeout(t._timeout);var i,l,s=r&&r.__error;if(null==s)for(l in r)if(i=r[l],s=i&&i.error)break;if(s)return void t.reject(s,r);t.resolve(r)}}}J=Y({Extends:W.prototype,_wait:0,_timeout:null,_result:null,_resolved:[],Construct:function(){for(var e,n=arguments.length,r=-1;++r<n;)e=arguments[r],null!=e&&"function"==typeof e.done&&t(this,null,e)},delegate:function(t,n){return e(this,t,n)},deferred:function(e){return t(this,e,new W)},Static:{TIMEOUT:2e3}})}();var Q,Z,te,ee,ne={fetch:null,save:null,del:null,onSuccess:null,onError:null,Static:{fetch:function(t){return(new this).fetch(t)}}};!function(){function t(t,n){return function(){var r=null==t._rejected,o=r?t._resolved:t._rejected,s=r?i:l;e([s,t,n].concat(o))}}function e(t){s.trigger.apply(s,t)}var n,r,o="start",i="fulfilled",l="rejected",s=new G;Q=function(t){s.on(o,t),n=!0},Z=function(t,e){s.on(i,t).on(l,e),r=!0},te=function(t){s.off(i,t).off(l,t).off(o,t)},ee=function(i){return W.prototype.defer.call(this),n&&e([o,this,i]),r&&this.always(t(this,i)),this}}(),Y.Remote=function(){function t(t,n){var r;try{r=JSON.parse(n)}catch(o){return void e(t,o)}t.deserialize(r),t.resolve(t)}function e(t,e,r){var o;if("string"==typeof e&&n(r))try{o=JSON.parse(e)}catch(i){o=i}t.reject(o||e)}function n(t){var e=t.getResponseHeader(s);return null!=e&&-1!==e.toLowerCase().indexOf(u)}function i(t,i,l){return function(s,u,a){if(n(a))try{u=JSON.parse(u)}catch(s){return console.error("<XHR> invalid json response",u),e(t,s,a)}if(i&&i(s,u),s)return e(t,u,a);if("save"===l&&r(u)){if(o(t))for(var c=t.length,f=u.length,h=-1;++h<c&&f>h;)X.deserialize(t[h],u[h]);else t.deserialize(u);return t.resolve(t)}t.resolve(u)}}function l(t){return new a(t)}var s="content-type",u="json",a=function(t){this._route=new K(t)};return S(a,ne,X,W,{defer:ee,serialize:function(){return o(this)?A.call(this):E.call(this)},deserialize:function(t){return X.deserialize(this,t)},fetch:function(t){return this.defer("fetch"),V.get(this._route.create(t||this),this),this},save:function(t){this.defer("save");var e=this.serialize(),n=this._route.create(this),r=this._route.hasAliases(this)?"put":"post";return V[r](n,e,i(this,t,"save")),this},patch:function(t){return this.defer("patch"),H(this,t),V.patch(this._route.create(this),t,i(this)),this},del:function(t){this.defer("del");var e=this.serialize(),n=this._route.create(this);return V.del(n,e,i(this,t)),this},onSuccess:function(e){t(this,e)},onError:function(t,n,r){e(this,n,r)}}),l.onBefore=Q,l.onAfter=Z,g(["get","post","put","delete"],function(t){l[t]=function(e,n){var r=n;null!=n.serialize&&(r=n.serialize()),null==r&&n.toJSON&&(r=n.toJSON());var o=new W;return V[t](e,r,i(o)),o}}),l}(),Y.LocalStore=function(){function t(t,e){var n=t.create(e);localStorage.removeItem(n)}var e=function(t){this._route=new K(t)};S(e,ne,X,W,{serialize:function(){var t=o(this)?A.call(this):E.call(this);return JSON.stringify(t)},deserialize:function(t){return X.deserialize(this,t)},fetch:function(t){var e=this._route.create(t||this),n=localStorage.getItem(e);if(null==n)return this.resolve(this);if(l(n))try{n=JSON.parse(n)}catch(r){return this.reject(r)}return this.deserialize(n),this.resolve(this)},save:function(t){var e=this._route.create(this),n=this.serialize();return localStorage.setItem(e,n),t&&t(),this.resolve(this)},del:function(e){if(null==e&&0!==arguments.length)return this.reject("<localStore:del> - selector is specified, but is undefined");if(m(this)===!1)return t(this._route,e||this),this.resolve();if(null==e){for(var n=0,r=this.length;r>n;n++)this[n]=null;return this.length=0,t(this._route,this),this.resolve()}var o=this.remove(e);return 0===o.length?this.resolve():this.save()},onError:function(t){this.reject({error:t})}});var n=function(t){return new e(t)};return n.prototype=e.prototype,n}(),Y.bind=function(t){for(var e,n=arguments,r=1,o=arguments.length;o>r;r++)e=n[r],t[e]=t[e].bind(t);return t},Y.cfg=function(t,e){if(l(t))return 1===arguments.length?p[t]:void(p[t]=e);if(r(t))for(var n in t)Y.cfg(n,t[n])},Y.Model={},Y.Serializable=X,Y.Deferred=W,Y.EventEmitter=G,Y.Await=J,Y.validate=I,Y.stringify=x,Y.parse=w,Y.patch=b,Y.properties=C,Y.Collection=function(){function t(t,e){return e instanceof t?e:new t(e)}function e(){var t,e=arguments.length,o=arguments[e-1],i=arguments[e-2];return e>2&&(t=arguments[0]),o._ctor=i,S(o,r,n),null==t?Y(o):Y(t,o)}var n=function(){function e(t,e){if(null==e)return!1;if("function"==typeof e)return e(t);if("object"==typeof e){if(t.constructor===e.constructor&&t.constructor!==Object)return t===e;var n,r;for(var o in e){if(n=t[o],r=e[o],"string"==typeof r){var i=r[0],l=1;if("<"===i||">"===i)switch("="===r[1]&&(i+="=",l++),r=r.substring(l),i){case"<":if(n>=r)return!1;continue;case"<=":if(n>r)return!1;continue;case">":if(r>=n)return!1;continue;case">=":if(r>n)return!1;continue}}if(n!=r)return!1}return!0}return console.warn("No valid matcher",e),!1}function n(t,e){for(var n=this.length,r=-1;++r<n;)t.call(e||this,this[r],r);return this}var r={length:0,push:function(){for(var e=arguments.length,n=-1;++n<e;)this[this.length++]=t(this._ctor,arguments[n]);return this},pop:function(){var t=this[--this.length];return this[this.length]=null,t},shift:function(){if(0===this.length)return null;for(var t=this[0],e=this.length-1,n=0;e>n;n++)this[n]=this[n+1];return this[e]=null,this.length--,t},unshift:function(e){this.length++;for(var n=this.length;--n;)this[n]=this[n-1];return this[0]=t(this._ctor,e),this},splice:function(e,n){var r,o,i,l=this.length;if(e>=l)for(n=0,r=l,o=e;o>r;r++)this[r]=void 0;var s=n,u=e,a=e+s,c=arguments.length-2,f=l+c-s,h=a,p=l,d=f-l;if(d>0)for(r=p;--r>=h;)this[r+d]=this[r];if(0>d)for(r=h;p>r;)this[r+d]=this[r],r++;for(r=u,i=2;i<arguments.length;i)this[r++]=t(this._ctor,arguments[i++]);return this.length=f,this},slice:function(){return U(f,this,arguments)},sort:function(t){return h.call(this,t),this},reverse:function(){for(var t=f.call(this),e=this.length,n=-1;++n<e;)this[n]=t[e-n-1];return this},toString:function(){return f.call(this,0).toString()},each:n,forEach:n,where:function(t){for(var n,r=new this.constructor,o=0,i=this.length;i>o;o++)n=this[o],e(n,t)&&(r[r.length++]=n);return r},remove:function(t){for(var n=-1,r=[],o=0,i=this.length;i>o;o++)e(this[o],t)?r.push(this[o]):this[++n]=this[o];for(o=++n;i>o;o++)this[o]=null;return this.length=n,r},first:function(t){if(null==t)return this[0];var e=this.indexOf(t);return-1!==e?this[e]:null},last:function(t){if(null==t)return this[this.length-1];var e=this.lastIndexOf(t);return-1!==e?this[e]:null},indexOf:function(t,n){if(null==t)return-1;if(null!=n){if(0>n&&(n=0),n>=this.length)return-1}else n=0;for(var r=this.length;r>n;n++)if(e(this[n],t))return n;return-1},lastIndexOf:function(t,n){if(null==t)return-1;if(null!=n){if(n>=this.length&&(n=this.length-1),0>n)return-1}else n=this.length-1;for(;n>-1;n--)if(e(this[n],t))return n;return-1},map:function(t){for(var e=[],n=this.length,r=-1;++r<n;)e[r]=t(this[r]);return e},filter:function(t,e){for(var n=new this.constructor,r=this.length,o=-1;++o<r;)t.call(e||this,this[o])&&n.push(this[o]);return n}};return"undefined"!=typeof Symbol&&Symbol.iterator&&(r[Symbol.iterator]=function(){var t=this,e=-1;return{next:function(){return{value:t[++e],done:e>t.length-1}},hasNext:function(){return e<t.length}}}),r}(),r={toArray:function(){for(var t=new Array(this.length),e=0,n=this.length;n>e;e++)t[e]=this[e];return t},toJSON:A};return e}(),function(){var t,e;!function(){function n(t,e,n){return function(){t[n]=arguments;for(var r,o=0,i=e[n].length;i>o;o++)r=e[n][o],U(r,this,arguments);e[o]=null,t=null,e=null}}t=function(t){var e={},n=[];return function(){var r=q(arguments,n);return null==e[r]?e[r]=U(t,this,arguments):e[r]}},e=function(t){var e={},r={},o=[];return function(){var i=f.call(arguments),l=i.pop(),s=q(i,o);return e[s]?void U(l,this,e[s]):r[s]?void r[s].push(l):(r[s]=[l],i=f.call(i),i.push(n(e,r,s)),void U(t,this,i))}}}(),Y.Fn={memoize:t,memoizeAsync:e}}(),e.Class=Y}),function(t,e){"use strict";var n,r;return"undefined"==typeof exports||t!==exports&&null!=t||(n=r=global),null==n&&(n="undefined"==typeof window?global:window),null==r&&(r=t||n),"undefined"!=typeof include&&"function"==typeof include.js?(r.include=include,void(r.includeLib=include.Lib||n.includeLib)):void e(n,r,n.document)}(this,function(global,exports,document){"use strict";function fn_proxy(t,e){return function(){t.apply(e,arguments)}}function fn_doNothing(t){"function"==typeof t&&t()}function arr_invoke(t,e,n){if(null!=t&&t instanceof Array!=!1)for(var r=0,o=t.length;o>r;r++)"function"==typeof t[r]&&(null==e?t[r].call(n):t[r].apply(n,e))}function arr_ensure(t,e){if(!e)return t;for(var n,r=e.split("."),o=r.length-1,i=0;o>i;i++)n=r[i],t=t[n]||(t[n]={});return n=r[o],t[n]||(t[n]=[])}var bin={js:{},css:{},load:{}},isWeb=!!(global.location&&global.location.protocol&&/^https?:/.test(global.location.protocol)),reg_subFolder=/([^\/]+\/)?\.\.\//,reg_hasProtocol=/^(file|https?):/i,cfg={path:null,loader:null,version:null,lockedToFolder:null,sync:null,eval:null==document},handler={},hasOwnProp={}.hasOwnProperty,emptyResponse={load:{}},__array_slice=Array.prototype.slice,XMLHttpRequest=global.XMLHttpRequest,Helper={reportError:function(t){console.error("IncludeJS Error:",t,t.message,t.url),"function"==typeof handler.onerror&&handler.onerror(t)}},XHR=function(t,e){var n=new XMLHttpRequest;n.onreadystatechange=function(){4===n.readyState&&e&&e(t,n.responseText)},n.open("GET","object"==typeof t?t.url:t,!0),n.send()},obj_inherit,obj_getProperty,obj_setProperty;!function(){obj_inherit=function(t){"function"==typeof t&&(t=t.prototype);for(var e,n,r=1,o=arguments.length;o>r;r++){e="function"==typeof arguments[r]?arguments[r].prototype:arguments[r];for(n in e)t[n]=e[n]}return t},obj_getProperty=function(t,e){for(var n=e.split("."),r=n.length,o=0;r>o;o++){if(null==t)return null;t=t[n[o]]}return t},obj_setProperty=function(t,e,n){for(var r,o=e.split("."),i=o.length-1,l=-1;++l<i;)r=o[l],null==t[r]&&(t[r]={}),t=t[r];t[o[l]]=n}}();var path_getDir,path_getFile,path_getExtension,path_resolveCurrent,path_normalize,path_win32Normalize,path_resolveUrl,path_combine,path_isRelative;!function(){function t(t){for(;-1!==t.indexOf("../");)t=t.replace(reg_subFolder,"");return t.replace(/\/\.\//g,"/")}path_getDir=function(t){return t.substring(0,t.lastIndexOf("/")+1)},path_getFile=function(t){return t=t.replace("file://","").replace(/\\/g,"/").replace(/\?[^\n]+$/,""),/^\/\w+:\/[^\/]/i.test(t)?t.substring(1):t},path_getExtension=function(t){var e=t.indexOf("?");return-1===e?t.substring(t.lastIndexOf(".")+1):t.substring(t.lastIndexOf(".",e)+1,e)},path_resolveCurrent=function(){if(null==document)return"undefined"==typeof module?"":path_win32Normalize(module.parent.filename);var t=document.getElementsByTagName("script"),e=t[t.length-1],n=e&&e.getAttribute("src")||"";if("/"===n[0])return n;var r=window.location.pathname.replace(/\/[^\/]+\.\w+$/,"");return"/"!==r[r.length-1]&&(r+="/"),r+n},path_normalize=function(t){return t.replace(/\\/g,"/").replace(/([^:\/])\/{2,}/g,"$1/")},path_win32Normalize=function(t){return t=path_normalize(t),"file:"===t.substring(0,5)?t:"file:///"+t},path_resolveUrl=function(e,n){return reg_hasProtocol.test(e)?t(e):("./"===e.substring(0,2)&&(e=e.substring(2)),"/"===e[0]&&null!=n&&null!=n.base&&(e=path_combine(n.base,e),reg_hasProtocol.test(e))?t(e):"/"===e[0]&&cfg.path&&(e=cfg.path+e.substring(1),reg_hasProtocol.test(e))?t(e):("/"===e[0]?(isWeb===!1||cfg.lockedToFolder===!0)&&(e=e.substring(1)):null!=n&&null!=n.location&&(e=n.location+e),t(e)))},path_isRelative=function(t){var e=t.charCodeAt(0);switch(e){case 47:return!1;case 102:case 104:return reg_hasProtocol.test(t)===!1}return!0},path_combine=function(){for(var t,e="",n=arguments.length,r=-1;++r<n;)t=arguments[r],t&&(t=path_normalize(t),""!==e?("/"!==e[e.length-1]&&(e+="/"),"/"===t[0]&&(t=t.substring(1)),e+=t):e=t);return e}}();var tree_resolveUsage;!function(){function t(e,n,r){if(null==n){console.warn("<include> Usage Not Found:",e),console.warn("- Ensure to have it included before with the correct alias"),console.warn("- Initiator Stacktrace:");for(var o=[],i=r;null!=i;)o.push(i.url),i=i.parent;return console.warn(o.join("\n")),null}for(var l,s,u=n.includes,a=-1,c=u.length;++a<c;)if(l=u[a],s=l.route.alias||Routes.parseAlias(l.route),s===e)return l.resource;return t(e,n.parent,r)}tree_resolveUsage=function(e,n,r){for(var o,i,l,s,u,a=[],c=n.length,f=-1;++f<c;){if(l=i=n[f],s=i.indexOf("."),-1!==s&&(l=i.substring(0,s),i=i.substring(s+1)),u=t(l,e.parent,e),null==u)return null;if(4!==u.state)return e.state=3,u.on(4,r,u,"push"),null;o=u.exports,l!==i&&(o=obj_getProperty(o,i)),"object"==typeof o&&null==o&&console.warn("<include:use> Used resource has no exports",l,e.url),a[f]=o}return a}}();var RoutesLib=function(){var t={},e=/([^\\\/]+)\.\w+$/;return{register:function(e,n,r){if("string"==typeof n&&path_isRelative(n)){var o=r||include,i=o.location||path_getDir(o.url||path_resolveCurrent());path_isRelative(i)&&(i="/"+i),n=i+n}t[e]=n instanceof Array?n:n.split(/[\{\}]/g)},resolve:function(e,n){var r,o,i,l,s,u,a,c,f=n.indexOf("?"),h=n.indexOf("::");if(-1!==h&&(r=n.substring(h+2),n=n.substring(0,h)),-1!==f){for(c=n.substring(f+1).split("&"),i={},s=0,a=c.length;a>s;s++)u=c[s].split("="),i[u[0]]=u[1];n=n.substring(0,f)}if(n=n.split("/"),l=t[e],null==l)return{path:n.join("/"),params:i,alias:r};for(o=l[0],s=1;s<l.length;s++)if(s%2===0)o+=l[s];else{var p=l[s]<<0;if(p>n.length-1&&(p=n.length-1),o+=n[p],s===l.length-2)for(p++;p<n.length;p++)o+="/"+n[p]}return{path:o,params:i,alias:r}},each:function(t,e,n,r,o){var i;if(null!=e)if("lazy"!==t||null!=o)if(e instanceof Array)for(var l=0;l<e.length;l++)this.each(t,e[l],n,r,o);else if("object"!=typeof e){if("string"==typeof e){var s=this.resolve(r,e);return r&&(r+="."+e),void n(r,s,o)}console.error("Include Package is invalid",arguments)}else for(i in e)hasOwnProp.call(e,i)&&this.each(t,e[i],n,i,o);else for(i in e)this.each(t,e[i],n,null,i)},getRoutes:function(){return t},parseAlias:function(t){var n=t.path,r=e.exec(n);return r&&r[1]}}},Routes=RoutesLib(),Events=function(t){function e(){Events.ready=fn_doNothing,null!=n&&(arr_invoke(n),n=null)}if(null==t)return{ready:fn_doNothing,load:fn_doNothing};var n=[];return"onreadystatechange"in t?t.onreadystatechange=function(){/complete|interactive/g.test(t.readyState)!==!1&&e()}:t.addEventListener?t.addEventListener("DOMContentLoaded",e):window.onload=e,{ready:function(t){n.unshift(t)}}}(document),ScriptStack=function(){function t(t,e){var n=document.createElement("script");n.type="text/javascript",n.src=t,"onreadystatechange"in n?n.onreadystatechange=function(){("complete"===this.readyState||"loaded"===this.readyState)&&e()}:n.onload=n.onerror=e,(o||(o=document.getElementsByTagName("head")[0])).appendChild(n)}function e(){function n(t){t&&"error"===t.type&&console.log("Script Loaded Error",o.url);for(var n=0,r=s.length;r>n;n++)if(s[n]===o){s.splice(n,1);break}return n===r?void console.error("Loaded Resource not found in stack",o):(2.5!==o.state&&o.readystatechanged(3),i=null,void e())}if(!l){if(0===s.length)return void r();if(null==i){var o=i=s[0];if(1!==o.state)return o.state=1,global.include=o,global.iparams=o.route.params,o.source?(__eval(o.source,o),void n()):void t(o.url,n)}}}function n(){if(!l){if(0===s.length)return void r();if(null==i){var t=s[0];if(!(t.state<2)){i=t,t.state=1,global.include=t,__eval(t.source,t);for(var e,o=0,u=s.length;u>o;o++)if(e=s[o],e===t){s.splice(o,1);break}2.5!==t.state&&t.readystatechanged(3),i=null,n()}}}}function r(){for(var t=-1,e=u.length;++t<e;)u[t]();u.length=0}var o,i,l,s=[],u=[];return{load:function(t,r,o){return this.add(t,r),!cfg.eval||o?void e():t.source?(t.state=2,void n()):void XHR(t,function(t,e){e||(console.error("Not Loaded:",t.url),console.error("- Initiator:",t.parent&&t.parent.url||"<root resource>")),t.source=e,t.state=2,n()})},add:function(t,e){if(1===t.priority)return s.unshift(t);if(null==e)return s.push(t);for(var n=s.length,r=-1;++r<n;)if(s[r]===e)return s.splice(r,0,t);s.push(t)},moveToParent:function(t,e){var n,r=s.length,o=-1,i=-1;for(n=0;r>n;n++)if(s[n]===t){i=n;break}if(-1!==i){for(n=0;r>n;n++)if(s[n]===e){o=n;break}-1!==o&&(o>i||(s.splice(i,1),s.splice(o,0,t)))}},pause:function(){l=!0},resume:function(){l=!1,null==i&&this.touch()},touch:function(){var t=cfg.eval?n:e;t()},complete:function(t){return l!==!0&&0===s.length?void t():void u.push(t)}}}(),IncludeDeferred=function(){this.callbacks=[],this.state=-1};IncludeDeferred.prototype={on:function(t,e,n,r){return this===n&&-1===this.state?(e(this),this):(null==r&&(r=this.state<3||this===n?"unshift":"push"),t<=this.state?e(this):this.callbacks[r]({state:t,callback:e}),this)},readystatechanged:function(t){var e,n,r,o;if(t>this.state&&(this.state=t),3===this.state){var i=this.includes;if(null!=i&&i.length)for(e=0;e<i.length;e++)if(4!==i[e].resource.state)return;this.state=4}if(e=0,n=this.callbacks.length,0!==n){for("js"===this.type&&4===this.state&&(o=global.include,global.include=this);n>e&&(r=this.callbacks[e],null==r||r.state>this.state||(this.callbacks.splice(e,1),n--,e--,r.callback(this),!(this.state<4)));e++);null!=o&&(global.include=o)}},ready:function(t){var e=this;return this.on(4,function(){Events.ready(function(){e.resolve(t)})},this)},done:function(t){var e=this;return this.on(4,function(){e.resolve(t)},this)},resolve:function(t){var e=this.includes,n=null==e?0:e.length;if(n>0&&null==this.response){this.response={};for(var r,o,i,l=0;n>l;l++)if(i=e[l],r=i.resource,o=i.route,"undefined"!=typeof r.exports){var s=r.type;switch(s){case"js":case"load":case"ajax":var u=o.alias||Routes.parseAlias(o),a="js"===s?this.response:this.response[s]||(this.response[s]={});if(null!=u){obj_setProperty(a,u,r.exports);break}console.warn("<includejs> Alias is undefined",r)}}}var c=this.response||emptyResponse,f=this;return null==this._use&&null!=this._usage&&(this._use=tree_resolveUsage(this,this._usage,function(){f.state=4,f.resolve(t),f.readystatechanged(4)}),this.state<4)?void 0:this._use?void t.apply(null,[c].concat(this._use)):void t(c)}};var Include,IncludeLib={};!function(IncludeDeferred){function incl_getResource(t,e){var n=t;if(path_isRelative(t)===!0&&(n="/"+n),null!=e)return bin[e][n];for(var r in bin)if(bin[r].hasOwnProperty(n))return bin[r][n];
return null}function embedPlugin(source){eval(source)}function enableModules(){return"undefined"==typeof Object.defineProperty?void console.warn("Browser do not support Object.defineProperty"):(Object.defineProperty(global,"module",{get:function(){return global.include}}),void Object.defineProperty(global,"exports",{get:function(){var t=global.include;return t.exports||(t.exports={})},set:function(t){global.include.exports=t}}))}function includePackage(t,e,n){var r=1===n.length?n[0]:__array_slice.call(n);return t instanceof Resource?t.include(e,r):new Resource("js").include(e,r)}function createIncluder(t){return function(){return includePackage(this,t,arguments)}}function doNothing(){return this}function stub_freeze(t){t.js=t.css=t.load=t.ajax=t.embed=t.lazy=t.inject=doNothing}function stub_release(t){for(var e=["js","css","load","ajax","embed","lazy"],n=e.length;-1!==--n;)t[e[n]]=createIncluder(e[n]);t.inject=t.js}Include=function(){IncludeDeferred.call(this)},stub_release(Include.prototype),obj_inherit(Include,IncludeDeferred,{_use:null,_usage:null,isBrowser:!0,isNode:!1,setCurrent:function(t){var e=t.url,n=this.getResourceById(e,"js");if(null==n){"/"===e[0]&&this.base&&(e=this.base+e.substring(1));var n=new Resource("js",{path:e},t.namespace,null,null,e)}n.state<3&&console.error("<include> Resource should be loaded",t),n.state=3,global.include=n},cfg:function(t){switch(typeof t){case"object":var e,n;for(e in t)switch(n=t[e],e){case"loader":for(var r in n)CustomLoader.register(r,n[r]);break;case"modules":n===!0&&enableModules();break;default:cfg[e]=n}break;case"string":if(1===arguments.length)return cfg[t];2===arguments.length&&(cfg[t]=arguments[1]);break;case"undefined":return cfg}return this},routes:function(t){if(null==t)return Routes.getRoutes();if(2===arguments.length)return Routes.register(t,arguments[1],this),this;for(var e in t)Routes.register(e,t[e],this);return this},promise:function(t){for(var e=t.split("."),n=global;e.length;){var r=e.shift();n=n[r]||(n[r]={})}return n},register:function(t){function e(t){return null==u?t:("/"===t.url[0]&&(t.url=u+t.url.substring(1)),"/"===t.parent[0]&&(t.parent=u+t.parent.substring(1)),t.id=t.url,t)}function n(t,e){t.exports=e,t.readystatechanged(4)}var r,o,i,l,s,u=this.base;for(r in t)for(i=t[r],l=i.length,s=-1;++s<l;){o=e(i[s]);var a=o.id,c=o.url,f=o.namespace,h=o.parent&&incl_getResource(o.parent,"js"),p=new Resource,d=o.state;if(a||c){switch(c&&("/"===c[0]&&(c=c.substring(1)),p.location=path_getDir(c)),p.state=null==d?"js"===r?3:4:d,p.namespace=f,p.type=r,p.url=c||a,p.parent=h,p.base=h&&h.base||u,r){case"load":case"lazy":var g=document.querySelector("#includejs-"+a.replace(/\W/g,""));if(null==g){console.error('"%s" Data was not embedded into html',a);break}p.exports=g.innerHTML,CustomLoader.exists(p)&&(p.state=3,CustomLoader.load(p,n))}(bin[r]||(bin[r]={}))[a]=p}}},instance:function(t,e){var n;return null==t?(n=new Include,n.state=4,n):(n=new Resource,n.state=4,n.location=path_getDir(path_normalize(t)),n.parent=e,n)},getResource:function(t,e){return this.base&&"/"===t[0]&&(t=this.base+t.substring(1)),incl_getResource(t,e)},getResourceById:function(t,e){var n=bin[e],r=n[t];return null!=r?r:this.base&&"/"===t[0]&&(r=n[path_combine(this.base,t)],null!=r)?r:this.base&&this.location&&(r=n[path_combine(this.base,this.location,t)],null!=r)?r:this.location&&(r=n[path_combine(this.location,t)],null!=r)?r:null},getResources:function(){return bin},plugin:function(t,e){var n=[],r=0,o=0,i=0,l=function(t,n){o++,embedPlugin(n),o===r-1&&e&&(e(),e=null)};for(Routes.each("",t,function(t,e){n.push("/"===e.path[0]?e.path.substring(1):e.path)}),r=n.length;r>i;i++)XHR(n[i],l);return this},client:function(){return cfg.server===!0&&stub_freeze(this),this},server:function(){return cfg.server!==!0&&stub_freeze(this),this},use:function(){return null==this.parent?(console.error("<include.use> Parent resource is undefined"),this):(this._usage=arguments,this)},pauseStack:fn_proxy(ScriptStack.pause,ScriptStack),resumeStack:fn_proxy(ScriptStack.resume,ScriptStack),allDone:function(t){ScriptStack.complete(function(){function e(){--r<1&&t()}var n=include.getPending(),r=n.length;if(0===r)return void t();for(var o=-1,i=r;++o<i;)n[o].on(4,e,null,"push")})},getPending:function(t){var e,n,r,o=[];for(n in bin)if(null==t||t===n)for(r in bin[n])e=bin[n][r],e.state<4&&o.push(e);return o},Lib:IncludeLib})}(IncludeDeferred);var CustomLoader=function(){function t(t){return"string"==typeof t?!1:"function"==typeof t.ready||"function"==typeof t.process}function e(e){var n=path_getExtension(e),r=cfg.loader[n];if(t(r))return r;var o,i=r;if("object"==typeof i)for(var l in i){o=l,i=i[l];break}return cfg.loader[n]=new Resource("js",Routes.resolve(o,i),o,null,null,null,1)}function n(t,e){return function(n){t(e,n)}}function r(t,e,r,o){if(null==r.process)return void o(e,t);var i=n(o,e),l=r.process(t,e,i);"undefined"!=typeof l&&o(e,l)}function o(t,e,n){function o(t,o){r(o,t,e,n)}return"string"==typeof t.exports?void r(t.exports,t,e,n):e.load?e.load(t,o):void XHR(t,o)}var i={process:function(t){try{return JSON.parse(t)}catch(e){return console.error(e,t),null}}};return cfg.loader={json:i},{load:function(t,n){var r=e(t.url);return r.process?void o(t,r,n):void r.on(4,function(){o(t,r.exports,n)},null,"push")},exists:function(t){if(!t.url)return!1;var e=path_getExtension(t.url);return cfg.loader.hasOwnProperty(e)},register:function(t,e){if("string"==typeof e){var n=include;null==n.location&&(n={location:path_getDir(path_resolveCurrent())}),e=path_resolveUrl(e,n)}cfg.loader[t]=e}}}(),LazyModule={create:function(t,e){for(var n=t.split("."),r=global,o=n[n.length-1];n.length>1;){var i=n.shift();r=r[i]||(r[i]={})}n=null,Object.defineProperty(r,o,{get:function(){delete r[o];try{var n=__eval(e,global.include);null==n||n instanceof Resource||(r[o]=n)}catch(i){i.xpath=t,Helper.reportError(i)}finally{return e=null,t=null,r[o]}}})}},Resource;!function(t,e,n,r){function o(t){var e=t.type,o=t.parent,l=t.url;if(null==document&&"css"===e)return t.state=4,t;if(r.exists(t)===!1)switch(e){case"js":case"embed":n.load(t,o,"embed"===e);break;case"ajax":case"load":case"lazy":XHR(t,i);break;case"css":t.state=4;var s=document.createElement("link");s.href=l,s.rel="stylesheet",s.type="text/css",document.getElementsByTagName("head")[0].appendChild(s)}else("js"===e||"embed"===e)&&n.add(t,t.parent),r.load(t,i);return t}function i(t,e){switch(e||console.warn("Resource cannt be loaded",t.url),t.type){case"js":case"embed":return t.source=e,t.state=2,void n.touch();case"load":case"ajax":t.exports=e;break;case"lazy":LazyModule.create(t.xpath,e);break;case"css":var r=document.createElement("style");r.type="text/css",r.innerHTML=e,document.getElementsByTagName("head")[0].appendChild(r)}t.readystatechanged(4)}function l(t,e,n){if(null==t)return null;null==n&&(n=[]);for(var r,o=t.length,i=-1;++i<o;)r=t[i].resource,e===r.type&&n.push(r),null!=r.includes&&l(r.includes,e,n);return n}Resource=function(e,r,i,l,s,u,a){t.call(this),this.childLoaded=fn_proxy(this.childLoaded,this);var c=r&&r.path;null!=c&&(this.url=c=path_resolveUrl(c,s)),this.type=e,this.xpath=l,this.route=r,this.parent=s,this.priority=a,this.namespace=i,this.base=s&&s.base,null==u&&c&&(u=(path_isRelative(c)?"/":"")+c);var f=bin[e]&&bin[e][u];return f?(f.state<4&&"js"===e&&n.moveToParent(f,s),f):null==c?(this.state=3,this.location=path_getDir(path_resolveCurrent()),this):(this.state=0,this.location=path_getDir(c),(bin[e]||(bin[e]={}))[u]=this,cfg.version&&(this.url+=(-1===this.url.indexOf("?")?"?":"&")+"v="+cfg.version),o(this))},Resource.prototype=obj_inherit(Resource,t,{state:null,location:null,includes:null,response:null,url:null,base:null,type:null,xpath:null,route:null,parent:null,priority:null,namespace:null,setBase:function(t){return this.base=t,this},childLoaded:function(){var t=this,e=t.includes;if(e&&e.length){if(t.state<3)return;for(var n=0;n<e.length;n++)if(4!==e[n].resource.state)return}t.readystatechanged(4)},create:function(t,e,n,r,o){var i;return this.state=this.state>=3?3:2,this.response=null,null==this.includes&&(this.includes=[]),i=new Resource(t,e,n,r,this,o),this.includes.push({resource:i,route:e}),i},include:function(t,n){var r,o=this,i=[];e.each(t,n,function(e,n,l){(null==o.route||o.route.path!==n.path)&&(r=o.create(t,n,e,l),i.push(r))});for(var l=-1,s=i.length;++l<s;)i[l].on(4,this.childLoaded);return this},pause:function(){this.state=2.5;var t=this;return function(e){1===arguments.length&&(t.exports=e),t.readystatechanged(3)}},getNestedOfType:function(t){return l(this.includes,t)}})}(Include,Routes,ScriptStack,CustomLoader),IncludeLib.Routes=RoutesLib,IncludeLib.Resource=Resource,IncludeLib.ScriptStack=ScriptStack,IncludeLib.registerLoader=CustomLoader.register,exports.include=new Include,exports.includeLib=IncludeLib}),/*!
 * MaskJS v%VERSION%
 * Part of the Atma.js Project
 * http://atmajs.com/
 *
 * MIT license
 * http://opensource.org/licenses/MIT
 *
 * (c) 2012, %YEAR% Atma.js and other contributors
 */
function(t,e){"use strict";function n(){var t=e(o,l,s);return i&&(module.exports=t),t}var r="undefined"==typeof window||null==window.navigator?"node":"dom",o="dom"===r?window:global,i="undefined"!=typeof exports&&(null==t||t===exports||t===o);i&&(t=exports);var l=t||o,s=o.document;return"function"==typeof define&&define.amd?define(n):n()}(this,function(global,exports,document){"use strict";function util_interpolate(t,e,n,r,o,i,l){for(var s,u,a,c,f,h=t.length,p=-1,d=null,g="",m=!0;++p<h;){if(m===!0)null==d?g+=t[p]:d.push(t[p]);else{if(c=t[p],u=null,a=c.indexOf(":"),-1===a)u=obj_getPropertyEx(c,n,r,i);else{if(s=a>0?c.substring(0,a).trim():"",""===s&&(s="expression"),c=c.substring(a+1),f=custom_Utils[s],null==f){log_error("Undefined custom util `%s`",s);continue}u=f(c,n,r,o,i,l,e)}null!=u&&("object"==typeof u&&null==d&&(d=[g]),null==d?g+=u:d.push(u))}m=!m}return null==d?g:d}function VarStatement(){}var _Array_slice=Array.prototype.slice,_Array_splice=Array.prototype.splice,_Array_indexOf=Array.prototype.indexOf,_Object_create=null,_Object_hasOwnProp=Object.hasOwnProperty,_Object_getOwnProp=Object.getOwnPropertyDescriptor,_Object_defineProperty=Object.defineProperty,coll_each,coll_remove,coll_map,coll_indexOf,coll_find;if(function(){coll_each=function(t,e,n){if(null==n&&(n=t),null==t)return t;for(var r=t.length,o=0;r>o;o++)e.call(n,t[o],o);return n},coll_indexOf=function(t,e){if(null==t)return-1;for(var n=t.length,r=0;n>r;r++)if(t[r]===e)return r;return-1},coll_remove=function(t,e){var n=coll_indexOf(t,e);return-1===n?!1:(t.splice(n,1),!0)},coll_map=function(t,e,n){var r=new Array(t.length);return coll_each(t,function(t,n){r[n]=e.call(this,t,n)},n),r},coll_find=function(t,e,n){for(var r=t.length,o=0;r>o;o++)if(e.call(n||t,t[o],o))return!0;return!1}}(),void 0===Array.prototype.forEach&&(Array.prototype.forEach=function(t,e){coll_each(this,t,e)}),void 0===Array.prototype.indexOf&&(Array.prototype.indexOf=function(t){return coll_indexOf(this,t)}),null==String.prototype.trim&&(String.prototype.trim=function(){var t,e=-1,n=this.length;if(0===n)return this;for(;++e<n&&(t=this.charCodeAt(e),!(t>32)););for(;0!==--n&&(t=this.charCodeAt(n),!(t>32)););return 0!==e&&n!==length-1?this.substring(e,n+1):this}),null==Function.prototype.bind){var _Array_slice;Function.prototype.bind=function(){if(arguments.length<2&&"undefined"==typeof arguments[0])return this;var t=this,e=_Array_slice.call(arguments),n=e.shift();return function(){return t.apply(n,e.concat(_Array_slice.call(arguments)))}}}var is_Function,is_Array,is_ArrayLike,is_String,is_Object,is_notEmptyString,is_rawObject,is_NODE,is_DOM;!function(){is_Function=function(t){return"function"==typeof t},is_Object=function(t){return null!=t&&"object"==typeof t},is_Array=is_ArrayLike=function(t){return null!=t&&"object"==typeof t&&"number"==typeof t.length&&"function"==typeof t.slice},is_String=function(t){return"string"==typeof t},is_notEmptyString=function(t){return"string"==typeof t&&""!==t},is_rawObject=function(t){return null==t||"object"!=typeof t?!1:t.constructor===Object},is_DOM="undefined"!=typeof window&&null!=window.navigator,is_NODE=!is_DOM}();var obj_getProperty,obj_setProperty,obj_extend,obj_extendDefaults,obj_extendMany,obj_extendProperties,obj_create,obj_toFastProps;!function(){obj_getProperty=function(t,e){if("."===e)return t;for(var n=e.split("."),r=n.length,o=-1;null!=t&&++o<r;)t=t[n[o]];return t},obj_setProperty=function(t,e,n){for(var r,o=e.split("."),i=o.length-1,l=-1;++l<i;)r=o[l],null==t[r]&&(t[r]={}),t=t[r];t[o[l]]=n},obj_extend=function(t,e){if(null==e)return t||{};if(null==t)return obj_create(e);for(var n in e)t[n]=e[n];return t},obj_extendDefaults=function(t,e){if(null==e)return t||{};if(null==t)return obj_create(e);for(var n in e)null==t[n]&&(t[n]=e[n]);return t},obj_extendProperties=function(){return null==_Object_getOwnProp?obj_extend:function(t,e){if(null==e)return t||{};if(null==t)return obj_create(e);var n,r;for(n in e)r=_Object_getOwnProp(e,n),null!=r&&(r.hasOwnProperty("value")?t[n]=r.value:_Object_defineProperty(t,n,r));return t}}(),obj_extendMany=function(t){for(var e=arguments.length,n=1;e>n;n++)t=obj_extend(t,arguments[n]);return t},obj_toFastProps=function(t){function e(){}e.prototype=t,new e},_Object_create=obj_create=Object.create||function(t){var e=function(){};return e.prototype=t,new e}}();var arr_remove,arr_each,arr_indexOf,arr_contains,arr_pushMany;!function(){arr_remove=function(t,e){var n=t.indexOf(e);return-1===n?!1:(t.splice(n,1),!0)},arr_each=function(t,e,n){t.forEach(e,n)},arr_indexOf=function(t,e){return t.indexOf(e)},arr_contains=function(t,e){return-1!==t.indexOf(e)},arr_pushMany=function(t,e){if(null!=e&&null!=t&&t!==e)for(var n=t.length,r=e.length,o=-1;++o<r;)t[n+o]=e[o]}}();var fn_proxy,fn_apply,fn_doNothing;!function(){fn_proxy=function(t,e){return function(){return fn_apply(t,e,arguments)}},fn_apply=function(t,e,n){var r=n.length;return 0===r?t.call(e):1===r?t.call(e,n[0]):2===r?t.call(e,n[0],n[1]):3===r?t.call(e,n[0],n[1],n[2]):4===r?t.call(e,n[0],n[1],n[2],n[3]):t.apply(e,n)},fn_doNothing=function(){return!1}}();var class_create,class_createEx;!function(){function t(t,e){return e.constructor=t,t.prototype=e,t}function e(t,e){return null==t?e:null==e?t:function(){var n=_Array_slice.call(arguments),r=t.apply(this,n);return void 0!==r?r:e.apply(this,n)}}class_create=function(){var n=_Array_slice.call(arguments),r=n.pop();null==r&&(r={});for(var o,i,l=r.hasOwnProperty("constructor")?r.constructor:function(){},s=n.length;--s>-1;)i=n[s],"function"==typeof i&&(o=e(i,o),i=i.prototype),obj_extendDefaults(r,i);return t(e(o,l),r)},class_createEx=function(){var n=_Array_slice.call(arguments),r=n.pop();null==r&&(r={});for(var o,i,l=r.hasOwnProperty("constructor")?r.constructor:function(){},s=n.length,u=-1;++u<s;)i=n[u],"function"==typeof i&&(o=e(o,i),i=i.prototype),obj_extendProperties(r,i);return t(e(o,l),r)}}();var class_Dfr;!function(){function t(t,e,n,r){return null==r?t:(null!=e?fn_apply(r,t,e):n.push(r),t)}function e(t){t._done=null,t._fail=null,t._always=null}function n(t,e,n){if(null!=t){for(var r,o=t.length,i=-1;++i<o;)r=t[i],r&&fn_apply(r,e,n);t.length=0}}function r(t){return null==t||"object"!=typeof t?!1:t instanceof class_Dfr?!0:"function"==typeof t.done&&"function"==typeof t.fail}class_Dfr=function(){},class_Dfr.prototype={_isAsync:!0,_done:null,_fail:null,_always:null,_resolved:null,_rejected:null,defer:function(){return this._rejected=null,this._resolved=null,this},isResolved:function(){return null!=this._resolved},isRejected:function(){return null!=this._rejected},isBusy:function(){return null==this._resolved&&null==this._rejected},resolve:function(){var t=this._done,r=this._always;return this._resolved=arguments,e(this),n(t,this,arguments),n(r,this,[this]),this},reject:function(){var t=this._fail,r=this._always;return this._rejected=arguments,e(this),n(t,this,arguments),n(r,this,[this]),this},then:function(t,e){return this.pipe(t,e)},done:function(e){return null!=this._rejected?this:t(this,this._resolved,this._done||(this._done=[]),e)},fail:function(e){return null!=this._resolved?this:t(this,this._rejected,this._fail||(this._fail=[]),e)},always:function(e){return t(this,this._rejected||this._resolved,this._always||(this._always=[]),e)},pipe:function(t){function e(t,e,n){return function(){if(null!=n){var o=n.apply(this,arguments);if(null!=o)return r(o)===!0?void o.pipe(t):void t[e](o)}t[e].apply(t,arguments)}}var n;if("function"==typeof t){n=new class_Dfr;var o=t,i=arguments.length>1?arguments[1]:null;return this.done(e(n,"resolve",o)).fail(e(n,"reject",i)),n}n=t;for(var l,s=arguments.length,u=1===s,a=1===s,c=0;++c<s;)switch(l=arguments[c]){case"done":u=!0;break;case"fail":a=!0;break;default:console.error("Unsupported pipe channel",arguments[c])}return u&&this.done(e(n,"resolve")),a&&this.fail(e(n,"reject")),this},pipeCallback:function(){var t=this;return function(e){if(null!=e)return void t.reject(e);var n=_Array_slice.call(arguments,1);fn_apply(t.resolve,t,n)}}},class_Dfr.run=function(t,e){var n=new class_Dfr;return null==e&&(e=n),t.call(e,fn_proxy(n.resolve,e),fn_proxy(n.reject,n),n),n}}();var class_EventEmitter;!function(){function t(){var t,e,n=_Array_slice.call(arguments),r=n.shift(),o=this._listeners[r],i=0;if(null==o)return this;for(e=o.length;e>i;i++)t=o[i],fn_apply(t,this,n),t._once===!0&&(o.splice(i,1),i--,e--);return this}class_EventEmitter=function(){this._listeners={}},class_EventEmitter.prototype={on:function(t,e){return null!=e&&(this._listeners[t]||(this._listeners[t]=[])).push(e),this},once:function(t,e){return null!=e&&(e._once=!0,(this._listeners[t]||(this._listeners[t]=[])).push(e)),this},pipe:function(t){var e,n=this;return function(){e=_Array_slice.call(arguments),e.unshift(t),fn_apply(n.trigger,n,e)}},emit:t,trigger:t,off:function(t,e){var n=this._listeners[t];if(null==n)return this;if(1===arguments.length)return n.length=0,this;for(var r=n.length,o=-1;++o<r;)n[o]===e&&(n.splice(o,1),o--,r--);return this}}}();var __rgxEscapedChar={"'":/\\'/g,'"':/\\"/g,"{":/\\\{/g,">":/\\>/g,";":/\\>/g},__cfg={allowCache:!0},attr_extend;!function(){attr_extend=function(t,e){if(null==t)return null==e?{}:obj_create(e);if(null==e)return t;var n;for(n in e)"class"!==n||"string"!=typeof t[n]?t[n]=e[n]:t[n]+=" "+e[n];return t}}();var arr_pushMany;!function(){arr_pushMany=function(t,e){if(null!=e&&null!=t)for(var n=t.length,r=e.length,o=-1;++o<r;)t[n+o]=e[o]}}();var obj_getPropertyEx,obj_toDictionary;!function(){function t(t,e,n,r){for(var o=t;r>n&&null!=o;)o=o[e[n]],n++;return o}obj_getPropertyEx=function(e,n,r,o){if("."===e)return n;var i,l=e.split("."),s=n,u=-1,a=l.length,c=l[0];for("$c"===c?(s=o,u++):"$a"===c?(s=o&&o.attr,u++):"$u"===c?(s=customUtil_$utils,u++):"$ctx"===c&&(s=r,u++),i=u;null!=s&&++u<a;)s=s[l[u]];if(null==s&&-1===i)for(var f;null!=o;){if(f=o.scope,null!=f&&(s=t(f,l,0,a),null!=s))return s;o=o.parent}return s},obj_toDictionary=function(t){var e,n=[],r=0;for(e in t)n[r++]={key:e,value:t[e]};return n}}();var listeners_on,listeners_off,listeners_emit;!function(){listeners_on=function(e,n){(t[e]||(t[e]=[])).push(n)},listeners_off=function(e,n){return null==n?void(t[e]=[]):void arr_remove(t[e],n)},listeners_emit=function(e){var n=t[e];if(null==n)return!1;var r=n.length,o=-1,i=_Array_slice.call(arguments,1);if(0===r)return!1;for(;++o<r;)n[o].apply(null,i);return!0};var t={compoCreated:null,error:null}}();var throw_,parser_error,parser_warn,log,log_warn,log_error,log_errorNode;!function(){function t(t){function r(n,r,o){this.type="Parser"+t,this.message=n,this.original=r,this.index=o,this.stack=e()}return n(r,Error),r}function e(){var t=(new Error).stack;return null==t?null:t.split("\n").slice(6,8).join("\n")}function n(t,e){t.prototype=obj_create(e.prototype)}function r(t,e,n,r,u,a,c){e+=o(u)+i(n,r,c)+"\nParser "+l(a)+s(t,n,r);var p="error"===t?f:h;return new p(e,n,r)}function o(t){return null==t?"":("number"==typeof t&&(t=String.fromCharCode(t))," Invalid token: `"+t+"`")}function i(t,e,n){if(null==e||!n)return"";var r=u(t,e),o=r[1],i=r[2];return" at "+(n||"")+"("+o+":"+i+")"}function l(t){var e={2:"tag",3:"tag",5:"attribute key",6:"attribute value",8:"literal","var":"VarStatement",expr:"Expression"};return null==t||null==e[t]?"":' on "'+e[t]+'"'}function s(t,e,n){if(null==n)return"";var r=u(e,n),o=r[0],i=r[1],l=r[2];return null==n?"":" at ("+i+":"+l+") \n"+c(o,i,l)}function u(t,e){var n=t.substring(0,e).split("\n"),r=n.length,o=e+1-n.slice(0,r-1).join("\n").length;return r>1&&(o-=1),[t.split("\n"),r,o]}if(throw_=function(t){log_error(t),listeners_emit("error",t)},parser_error=function(t,e,n,o,i,l){var s=r("error",t,e,n,o,i,l);listeners_emit("error",s)||(log_error(s.message),log_warn("\n"+s.stack))},parser_warn=function(t,e,n,o,i,l){var s=r("warn",t,e,n,o,i,l);listeners_emit("error",s)||(log_warn(s.message),log("\n"+s.stack))},log_errorNode=function(t){return parser_parse('div style="background:red;color:white;">tt>"'+t+'"')},"undefined"==typeof console)log=log_warn=log_error=function(){};else{var a=Function.prototype.bind;log=a.call(console.warn,console),log_warn=a.call(console.warn,console,"MaskJS [Warn] :"),log_error=a.call(console.error,console,"MaskJS [Error] :")}var c,f=t("Error"),h=t("Warning");!function(){function t(t,e){for(var n=String(t);n.length<e;)n+=" ";return n}function e(t,e){for(var n="";--e>-1;)n+=t;return n}c=function(n,r,o){var i=3,l=2,s=r-1-i,u=s+i+l,a="";0>s&&(s=0),u>n.length&&(u=n.length);for(var c,f=String(u).length;u>s;s++)a&&(a+="\n"),c=t(s+1,f),a+=c+"|"+n[s],s+1===r&&(a+="\n"+e(" ",f+1),a+=n[s].substring(0,o-1).replace(/[^\s]/g," "),a+="^");return a}}()}();var path_getDir,path_getFile,path_getExtension,path_resolveCurrent,path_normalize,path_resolveUrl,path_combine,path_isRelative,path_toRelative;!function(){function t(t){return t=path_normalize(t),"file:"===t.substring(0,5)?t:"file:///"+t}function e(){return i(window.location.pathname)}function n(){return t(process.cwd())}function r(t){for(;-1!==t.indexOf("../");)t=t.replace(s,"");return t.replace(/\/\.\//g,"/")}function o(t){return 47===t.charCodeAt(t.length-1)?t:t+"/"}function i(t){return o(t.replace(u,""))}path_getDir=function(t){return t.substring(0,t.lastIndexOf("/")+1)},path_getFile=function(t){return t=t.replace("file://","").replace(/\\/g,"/").replace(/\?[^\n]+$/,""),/^\/\w+:\/[^\/]/i.test(t)?t.substring(1):t},path_getExtension=function(t){var e=t.indexOf("?");-1!==e&&(t=t.substring(0,e));var n=a.exec(t);return null==n?"":n[1]},path_resolveCurrent="undefined"!=typeof window&&window.location?e:n,path_normalize=function(t){var e=t.replace(/\\/g,"/").replace(/([^:\/])\/{2,}/g,"$1/").replace(/^\.\//,"").replace(/\/\.\//g,"");return r(e)},path_resolveUrl=function(t,e){var n=path_normalize(t);return path_isRelative(n)?path_normalize(path_combine(e||path_resolveCurrent(),n)):l.test(n)?n:47===n.charCodeAt(0)&&__cfg.base?path_combine(__cfg.base,n):n},path_isRelative=function(t){var e=t.charCodeAt(0);switch(e){case 47:return!1;case 102:case 104:return l.test(t)===!1}return!0},path_toRelative=function(t,e,n){var r=path_resolveUrl(path_normalize(t),n),o=path_resolveUrl(path_normalize(e),n);return""!==path_getExtension(o)&&(o=path_getDir(o)),o=path_combine(o,"/"),0===r.toUpperCase().indexOf(o.toUpperCase())?r.substring(o.length):t},path_combine=function(){for(var t,e="",n=arguments.length,r=-1;++r<n;)t=arguments[r],t&&(t=path_normalize(t),""!==e?("/"!==e[e.length-1]&&(e+="/"),"/"===t[0]&&(t=t.substring(1)),e+=t):e=t);return e};var l=/^(file|https?):/i,s=/([^\/]+\/)?\.\.\//,u=/\/[^\/]+\.\w+$/,a=/\.(\w+)$/}();var file_get,file_getScript;!function(){function t(t,e,r){e=path_resolveUrl(e,r);var o=n[e];return void 0!==o?o:(o=new class_Dfr,t(e,o.pipeCallback()),o)}file_get=function(n,r){return t(e,n,r)},file_getScript=function(e,n){return t(r,e,n)};var e,n={};!function(){e=function(t,e){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4===n.readyState){var r,o=n.responseText;200!==n.status&&(r={status:n.status,content:o},log_warn("File error",t,n.status)),e(r,o)}},n.open("GET",t,!0),n.send()}}();var r;!function(){r=function(n,r){var o=new e(n).done(function(t){r(null,t)}).fail(function(t){r(t)});t.load(o)};var t,e=class_create(class_Dfr,{exports:null,url:null,state:0,constructor:function(t){this.url=t},load:function(){if(0!==this.state)return this;this.state=1,global.module={};var t=this;return n(this.url,function(e){return t.state=4,e&&"error"===e.type?void t.reject(e):void t.resolve(t.exports=global.module.exports)}),this}});!function(){function e(){if(0!==n.length){var t=n[0];0===t.state&&t.load().always(e)}}t={load:function(t){n.push(t),e()}};var n=[]}();var n;!function(){n=function(e,n){var r=document.createElement("script");r.type="text/javascript",r.src=e,"onreadystatechange"in r?r.onreadystatechange=function(){("complete"===this.readyState||"loaded"===this.readyState)&&n()}:r.onload=r.onerror=n,void 0===t&&(t=document.getElementsByTagName("head")[0]),t.appendChild(r)};var t}()}()}();var custom_Utils,custom_Statements,custom_Attributes,custom_Tags,custom_Tags_global,custom_Tags_defs,custom_Parsers,custom_Parsers_Transform,custom_Optimizers,customUtil_get,customUtil_$utils,customUtil_register,customTag_register,customTag_registerResolver,custom_optimize;!function(){var t={div:null,span:null,input:null,button:null,textarea:null,select:null,option:null,h1:null,h2:null,h3:null,h4:null,h5:null,h6:null,a:null,p:null,img:null,table:null,td:null,tr:null,pre:null,ul:null,li:null,ol:null,i:null,em:null,b:null,br:null,strong:null,form:null,audio:null,video:null,canvas:null,svg:null},e={"class":null,id:null,style:null,name:null,type:null,value:null,required:null,disabled:null};custom_Utils={expression:function(t,e,n,r,o){return ExpressionUtil.eval(t,e,n,o)}},custom_Optimizers={},custom_Statements={},custom_Attributes=obj_extend({},e),custom_Tags=obj_extend({},t),custom_Tags_global=obj_extend({},t),custom_Parsers=obj_extend({},t),custom_Parsers_Transform=obj_extend({},t),custom_Tags_defs={},function(){function t(t){function e(t,e){this.ID=null,this.tagName=t.tagName,this.attr=obj_create(t.attr),this.expression=t.expression,this.nodes=t.nodes,this.nextSibling=t.nextSibling,this.parent=e,this.components=null}return e.prototype=t,e}customTag_register=function(e,n){is_Object(n)&&(n.__Ctor=t(n)),custom_Tags[e]=n,obj_toFastProps(custom_Tags)},customTag_registerResolver=function(t){var n=custom_Tags[t];n!==e&&(null!=n&&(custom_Tags_global[t]=n),custom_Tags[t]=e)};var e;!function(){e=function(t,e,n,r,o){for(var i=t.tagName,l=null;null!=o&&(!is_Function(o.getHandler)||(l=o.getHandler(i),null==l));)o=o.parent;return null==l&&(l=custom_Tags_global[i]),null!=l?is_Function(l)===!1?obj_create(l):new l(t,e,n,r,o):(log_error("Component not found:",i),null)}}()}(),function(){function t(t){if("parsed"===t.arguments)return n(t.process);var r=fn_proxy(t.process||e,t);return r.util=t,r}function e(t,e,n,r,o,i,l){return"node"===l?(this.nodeRenderStart(t,e,n,r,o),this.node(t,e,n,r,o)):(this.attrRenderStart(t,e,n,r,o,i),this.attr(t,e,n,r,o,i))}function n(t){return function(e,n,r,o,i){var l=ExpressionUtil.evalStatements(e,n,r,i);return t.apply(null,l)}}customUtil_$utils={},customUtil_register=function(e,n){return is_Function(n)?void(custom_Utils[e]=n):(custom_Utils[e]=t(n),void("parsed"===n.arguments&&(customUtil_$utils[e]=n.process)))},customUtil_get=function(t){return null!=t?custom_Utils[t]:custom_Utils}}(),function(){function t(t){for(var e in t)r[e]=null}function e(t){for(var e in r)void 0===t[e]&&(t[e]=null)}custom_optimize=function(){for(var r=n.length;--r>-1;)t(n[r]);for(r=n.length;--r>-1;)e(n[r]),obj_toFastProps(n[r]);obj_toFastProps(custom_Attributes)};var n=[custom_Statements,custom_Tags,custom_Parsers,custom_Parsers_Transform],r={}}()}();var ExpressionUtil=function(){function t(t,e){null==e&&(e=!1),n=t,o=0,i=t.length,r=new te;var l,C,X=r,G=Y;t:for(;;)if(i>o&&(l=n.charCodeAt(o))<33)o++;else{if(o>=i)break;if(C=ye(l),null==C&&i>o)break;if(C===R){if(e===!0)return[r,o];break}if(e===!0){var J=X.parent;if(null!=J&&J.type===$&&null==J.parent&&C===P)return[r,o]}if(C===R)break;switch(C){case k:X=he(X,new ee(X)),X=he(X,new te(X)),o++;continue;case j:var Z=$;G===Q&&(G=Y,Z=B);do X=X.parent;while(null!=X&&X.type!==Z);if(Z===$&&(X=X.parent),null==X){de("OutOfAst Exception",l);break t}o++;continue;case A:X=he(X,new oe(X)),C=F,o++;break;case O:for(;null!=X&&X.type!==W;)X=X.parent;o++;continue;case S:if(G!==Q){G=Y;do X=X.parent;while(null!=X&&X.type!==$&&X.type!==W);if(o++,null==X){de("Unexpected comma",l);break t}if(X.type===W){C=F;break}continue}do X=X.parent;while(null!=X&&X.type!==B);if(null==X){de("OutOfAst Exception",l);break t}X=X.newArgument(),o++;continue;case T:r=new ce(r),X=r.case1,o++;continue;case M:X=r.case2,o++;continue;case D:l=n.charCodeAt(o+1),l>=48&&57>=l?C=H:(C=X.type===$?P:L,o++);break;case N:if(X.type===z||X.type===V||X.type===q){X=he(X,new ue(X)),X=X.getBody(),o++;continue}X=he(X,new re(X)),X=X.body,o++;continue;case E:do X=X.parent;while(null!=X&&X.type!==V&&X.type!==K);o++;continue}if(X.type===$&&(X=he(X,new ee(X))),s!==C&&d!==C||null!=X.body)switch(C){case s:case u:case c:case a:case f:case p:case h:case g:case m:case v:case _:case y:case b:case x:case w:for(;X&&X.type!==U;)X=X.parent;if(null==X.body)return de("Unexpected operator",l);X.join=C;do X=X.parent;while(null!=X&&X.type!==$);if(null==X)return de("Unexpected operator",l);o++;continue;case I:case H:if(null!=X.body&&null==X.join)return de("Directive expected",l);I===C&&(o++,he(X,new ne(me(l))),o++),H===C&&he(X,new ne(ve(l)));continue;case P:case L:var pe=_e();if(C===P&&("null"===pe&&(pe=null),"false"===pe&&(pe=!1),"true"===pe&&(pe=!0),"string"!=typeof pe)){he(X,new ne(pe));continue}for(;i>o;){l=n.charCodeAt(o);{if(!(33>l))break;o++}}if(40===l){G=Q,o++;var be=he(X,new ie(X,pe));X=be.newArgument();continue}var xe=C===P?le:se;X=he(X,new xe(X,pe));break;case F:if(125===ge())continue;var we=_e();if(58!==ge())return de("Object parser. Semicolon expeted",l);o++,X=X.nextProp(we),C=P;continue}else X=he(X,new ae(X,C)),o++}return null==X.body&&X.type===U?de("Unexpected end of expression",l):(fe(r),r)}function e(n,r,o,i){var C,k;if(null==n)return null;if("."===n)return r;if(k="string"==typeof n?l.hasOwnProperty(n)===!0?l[n]:l[n]=t(n):n,null==k)return null;var j,N,E,A=k.type;if($===A){var O,S;t:for(j=0,E=k.body.length;E>j;j++)if(N=k.body[j],O=e(N,r,o,i),null!=S&&null!=S.join){if(S.join===p)if(C)C=O;else for(;E>j&&k.body[j].join!==h;j++);if(S.join===h){if(C)break t;if(O){C=O;break t}}switch(S.join){case s:C-=O;break;case u:C+=O;break;case a:C/=O;break;case c:C*=O;break;case f:C%=O;break;case v:C=C!=O;break;case _:C=C!==O;break;case g:C=C==O;break;case m:C=C===O;break;case y:C=C>O;break;case b:C=C>=O;break;case x:C=O>C;break;case w:C=O>=C}S=N}else S=N,C=O}if(U===A)return C=e(k.body,r,o,i),null==k.next?C:pe(k.next,C);if(X===A)return k.body;if(K===A){var D=k.body.body,T=D.length,j=-1;for(C=new Array(T);++j<T;)C[j]=e(D[j],r,o,i);return C}if(W===A){C={};var M=k.props;for(var R in M)C[R]=e(M[R],r,o,i);return C}if(z===A||B===A||V===A||q===A)return pe(k,r,o,i);if(G===A)switch(C=e(k.body,r,o,i),k.prefix){case s:C=-C;break;case d:C=!C}return J===A&&(C=e(k.body,r,o,i),C=e(C?k.case1:k.case2,r,o,i)),C}var n,r,o=0,i=0,l={},s="-",u="+",a="/",c="*",f="%",h="||",p="&&",d="!",g="==",m="===",v="!=",_="!==",y=">",b=">=",x="<",w="<=",C=".",k=20,j=21,N=22,E=23,A=24,O=25,S=26,D=27,T=28,M=29,R=30,P=31,L=32,I=33,H=34,F=35,$=1,U=2,z=3,B=4,q=5,V=6,X=7,W=10,K=11,G=12,J=13,Y=1,Q=2,Z={};Z[C]=1,Z[a]=2,Z[c]=2,Z[s]=3,Z[u]=3,Z[y]=4,Z[b]=4,Z[x]=4,Z[w]=4,Z[g]=5,Z[m]=5,Z[v]=5,Z[_]=5,Z[p]=6,Z[h]=6;var te,ee,ne,re,oe,ie,le,se,ue,ae,ce;!function(){te=function(t){this.parent=t,this.type=$,this.body=[],this.join=null},ee=function(t){this.parent=t},ee.prototype={constructor:ee,type:U,join:null,body:null},ne=function(t){this.type=X,this.body=t,this.join=null},re=function(t){this.type=K,this.parent=t,this.body=new te(this)},oe=function(t){this.type=W,this.parent=t,this.props={}},oe.prototype={nextProp:function(t){var e=new ee(this);return this.props[t]=e,e}},ie=function(t,e){this.parent=t,this.type=B,this.body=e,this.arguments=[],this.next=null},ie.prototype={constructor:ie,newArgument:function(){var t=new te(this);return this.arguments.push(t),t}},le=function(t,e){this.type=z,this.parent=t,this.body=e,this.next=null},se=function(t,e){this.type=q,this.parent=t,this.body=e,this.next=null},ue=function(t){this.parent=t,this.body=new ee(this),this.body.body=new te(this.body),this.next=null},ue.prototype={type:V,getBody:function(){return this.body.body}},ae=function(t,e){this.parent=t,this.prefix=e},ae.prototype={constructor:ae,type:G,body:null},ce=function(t){this.body=t,this.case1=new te(this),this.case2=new te(this)},ce.prototype={constructor:ce,type:J,case1:null,case2:null}}();var fe,he;!function(){function t(t){if(0===t.length)return null;var e=new te(t[0].parent);return e.join=t[t.length-1].join,e.body=t,e}he=function(t,e){switch(t.type){case $:return t.body.push(e),e;case U:if(e.type===q||e.type===V)return t.next=e;case G:return t.body=e;case z:case B:case q:case V:return t.next=e}return de("Invalid expression")},fe=function(e){if(e.type!==$)return void(null!=e.body&&"object"==typeof e.body&&fe(e.body));for(var n,r,o,i=e.body,l=0,s=i.length;s>l;l++)fe(i[l]);for(l=1;s>l&&(n=i[l],r=i[l-1],!(Z[r.join]>Z[n.join]));l++);if(l!==s){for(o=[i[0]],l=1;s>l;l++){n=i[l],r=i[l-1];var u=Z[r.join];if(u>Z[n.join]&&s-1>l){for(var a,c,f=l;++l<s&&(a=i[l].join,null!=a)&&!(u<=Z[a]););c=i.slice(f,l+1),n=t(c),fe(n)}o.push(n)}e.body=o}}}();var pe,de;!function(){de=function(t,e){return parser_error(t,n,o,e,"expr")},pe=function(t,n,r,o){var i,l,s,u,a,c=t,f=t.body;if("$c"===f){l=o;var h=c.next,p=null!=h&&h.body;if(null!=p&&null==l[p]){if(h.type===B&&"function"==typeof Compo.prototype[p])i=o,l=Compo.prototype[p],c=h;else for(;;){if(l=l.parent,null==l)break;if(null!=l[p]){i=l,l=l[p],c=h;break}}null==l&&(f="$c."+p,c=h)}}else if("$a"===f)l=o&&o.attr;else if("$u"===f)l=customUtil_$utils;else if("$ctx"===f)l=r;else if(null!=n&&(i=n,l=n[f]),null==l)for(;null!=o&&(i=o.scope,null!=i&&(l=i[f]),null==l);)o=o.parent;if(null==l)return(null==c||null!=c.next)&&log_warn("<mask:expression> Accessor error:",f),null;for(;;){if(c.type===B){for(s=[],u=-1,a=c.arguments.length;++u<a;)s[u]=e(c.arguments[u],n,r,o);l=l.apply(i,s)}if(null==l||null==c.next)break;if(c=c.next,f=c.type===V?e(c.body,n,r,o):c.body,i=l,l=l[f],null==l)break}return l}}();var ge,me,ve,_e,ye;!function(){ge=function(){for(var t;i>o;){if(t=n.charCodeAt(o),t>32)return t;o++}return null},me=function(t){for(var e,r,i=!1,l=39===t?"'":'"',s=o;(e=n.indexOf(l,o))>-1&&(o=e,92===n.charCodeAt(e-1));)i=!0,o++;return r=n.substring(s,o),i===!0&&(r=r.replace(__rgxEscapedChar[l],l)),r},ve=function(){for(var t,e,r=o;;){if(t=n.charCodeAt(o),46===t){if(e===!0)return de("Invalid number",t),null;e=!0}if(!((t>=48&&57>=t||46===t)&&i>o))break;o++}return+n.substring(r,o)},_e=function(){var t,e=o,r=n.charCodeAt(o);if(34===r||39===r)return o++,t=me(r),o++,t;for(;;){if(o===i)break;if(r=n.charCodeAt(o),36!==r&&95!==r){if(!(r>=48&&57>=r||r>=65&&90>=r||r>=97&&122>=r))break;o++}else o++}return n.substring(e,o)},ye=function(t){if(null==t&&o===i)return null;switch(t){case 40:return k;case 41:return j;case 123:return A;case 125:return O;case 91:return N;case 93:return E;case 44:return S;case 46:return D;case 59:return R;case 43:return u;case 45:return s;case 42:return c;case 47:return a;case 37:return f;case 61:return n.charCodeAt(++o)!==t?(de("Assignment violation: View can only access model/controllers","="),null):n.charCodeAt(o+1)===t?(o++,m):g;case 33:return 61===n.charCodeAt(o+1)?(o++,61===n.charCodeAt(o+1)?(o++,_):v):d;case 62:return 61===n.charCodeAt(o+1)?(o++,b):y;case 60:return 61===n.charCodeAt(o+1)?(o++,w):x;case 38:return n.charCodeAt(++o)!==t?(de("Not supported: Bitwise AND",t),null):p;case 124:return n.charCodeAt(++o)!==t?(de("Not supported: Bitwise OR",t),null):h;case 63:return T;case 58:return M}return t>=65&&90>=t||t>=97&&122>=t||95===t||36===t?P:t>=48&&57>=t?H:34===t||39===t?I:(de("Unexpected or unsupported directive",t),null)}}();var be;return function(){function n(t,l,s,u){if(null==t)return null;var a,c,f=t.type;if($===f)for(var h=t.body,p=h.length,d=-1;++d<p;)c=n(h[d],l,s,u),a=o(a,c);if(z===f||q===f||V===f){for(var g,m=t.body,v=t.next;null!=v;){if(g=v.type,B===g)return n(v,l,s,u);if(z!==g&&q!==g&&V!==g)return log_error("Ast Exception: next should be a symbol/function ref"),null;var _=g===V?e(v.body,l,s,u):v.body;if("string"!=typeof _)return log_warn("Can`t extract accessor name",m),null;m+="."+_,v=v.next}return m}switch(f){case U:case G:case J:c=n(t.body,l,s,u),a=o(a,c)}if(J===f&&(c=n(r.case1,l,s,u),a=o(a,c),c=n(r.case2,l,s,u),a=o(a,c)),B===f){for(var y=t.arguments,p=y.length,d=-1;++d<p;)c=n(y[d],l,s,u),a=o(a,c);c=null;var b=t;t:for(;b=b.parent;)switch(b.type){case z:case q:case V:c=b.body+(null==c?"":"."+c);break;case $:case U:break t;default:c=null;break t}null!=c&&(a=o(a,c)),t.next&&(c=n(t.next,l,s,u),a=o(a,{accessor:i(t),ref:c}))}return a}function o(t,e){if(null==t)return e;if(null==e)return t;if(("object"!=typeof t||null==t.length)&&(t=[t]),"object"!=typeof e||null==e.length)return-1===t.indexOf(e)&&t.push(e),t;for(var n=0,r=e.length;r>n;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function i(t){var e=t;t:for(;e.parent;){switch(e.parent.type){case $:case U:break t}e=e.parent}return l(e,t.next)}function l(t,e){if(t===e||null==t)return null;if("object"!=typeof t)return t;if(null!=t.length&&"function"==typeof t.splice){for(var n=[],r=0,o=t.length;o>r;r++)n[r]=l(t[r],e);return n}var i={};for(var s in t)null!=t[s]&&"parent"!==s&&(i[s]=l(t[s],e));return i}be=function(e,r,o,i){return"string"==typeof e&&(e=t(e)),n(e,r,o,i)}}(),{parse:t,eval:e,varRefs:be,evalStatements:function(n,r,o,i){for(var l=t(n).body,s=[],u=l.length,a=-1,c=new te;++a<u;)c.body.push(l[a]),null==l[a].join&&(s.push(e(c,r,o,i)),c.body.length=0);return s}}}(),Dom;!function(){function t(t){var e=this.nodes;if(null==e)return void(this.nodes=[t]);e.push(t);var n=e[e.length-2];n.nextSibling=t}function e(t,e){this.type=Dom.NODE,this.tagName=t,this.parent=e,this.attr={}}function n(t,e){this.content=t,this.parent=e}function r(t,e,n){this.tagName=t,this.parent=e,this.controller=n,this.attr={}}function o(){}var i=1,l=2,s=3,u=4,a=9,c=10,f=15;e.prototype={constructor:e,type:i,tagName:null,parent:null,attr:null,nodes:null,expression:null,appendChild:t,stringify:null,__single:null},n.prototype={type:l,content:null,parent:null},r.prototype={constructor:r,type:u,parent:null,attr:null,controller:null,nodes:null,components:null,model:null,modelRef:null},o.prototype={constructor:o,type:s,nodes:null,appendChild:t},Dom={NODE:i,TEXTNODE:l,FRAGMENT:s,COMPONENT:u,CONTROLLER:a,SET:c,STATEMENT:f,Node:e,TextNode:n,Fragment:o,Component:r}}(),function(){function t(t,e,n,r){function o(t){return ExpressionUtil.eval(t,e,n,r)}if(o(t.expression))return t.nodes;for(;;){if(t=t.nextSibling,null==t||"else"!==t.tagName)break;var i=t.expression;if(null==i||""===i||o(i))return t.nodes}return null}custom_Statements["if"]={getNodes:t,render:function(e,n,r,o,i,l){var s=t(e,n,r,i);null!=s&&builder_build(s,n,r,o,i,l)}}}(),function(){function t(t,n,r,o,i,l,s,u){builder_build(e(r,t,n[0],n[1],n[2],n[3]),o,i,l,s,u)}function e(t,e,o,i,l,s){return"of"===l?is_Array(e)===!1?(log_error("<ForStatement> Value is not enumerable",e),null):n(t,e,o,i,s):"in"===l?"object"!=typeof e?(log_warn("<ForStatement> Value is not an object",e),null):(is_Array(e)&&log_warn("<ForStatement> Consider to use `for..of` for Arrays"),r(t,e,o,i,s)):void 0}function n(t,e,n,r,i){for(var l,s=-1,u=e.length,a=new Array(u);++s<u;)l={},l[n]=e[s],r&&(l[r]=s),a[s]=o(p,t,l,s,n,i);return a}function r(t,e,n,r,i){var l,s,u,a=[],c=0;for(s in e)u=e[s],l={},l[n]=s,r&&(l[r]=u),a[c++]=o(d,t,l,s,r,i);return a}function o(t,e,n,r,o,l){return{type:Dom.COMPONENT,tagName:t,nodes:e,controller:i(t,n,r,o,l)}}function i(t,e,n,r,o){return{meta:{serializeScope:!0},compoName:t,scope:e,elements:null,propVal:r,key:n,expression:o,renderEnd:l,dispose:s,serializeScope:u}}function l(t){this.elements=t}function s(){this.elements&&(this.elements.length=0)}function u(t){var e=this,n=e.expression,r=e.key,o=e.propVal,i=t[o];return null!=i&&"object"==typeof i&&(t[o]="$ref:("+n+')."'+r+'"'),t}function a(t){g=t,v=t.length,m=0;var e,n,r,o,i;if(i=c(),40===i&&(o=!0,m++,c()),e=f(),i=c(),44===i){if(o!==!0)return h("Parenthese must be used in multiple var declarion");m++,c(),n=f()}if(o){if(i=c(),41!==i)return h("Closing parenthese expected");m++}i=c();var r;return 105===i&&110===g.charCodeAt(++m)&&(r="in"),111===i&&102===g.charCodeAt(++m)&&(r="of"),null==r?h("Invalid FOR statement. (in|of) expected"):(_[0]=e,_[1]=n,_[2]=r,_[3]=g.substring(++m),_)}function c(){for(var t;v>m;m++)if(t=g.charCodeAt(m),!(33>t))return t;return-1}function f(){for(var t,e=m;v>m;m++)if(t=g.charCodeAt(m),t>48&&57>t){if(e===m)return h("Variable name begins with a digit")}else if(!(36===t||95===t||t>=97&&122>=t||t>=65&&90>=t))break;
return e===m?h("Variable declaration expected"):g.substring(e,m)}function h(t){throw new Error("<ForStatement parser> "+t+" `"+g.substring(m,20)+"`")}var p="for..of::item",d="for..in::item";custom_Statements["for"]={render:function(e,n,r,o,i,l){a(e.expression);var s=ExpressionUtil.eval(_[3],n,r,i);null!=s&&t(s,_,e.nodes,n,r,o,i,l)},build:t,parseFor:a,createForNode:o,getNodes:e,getHandler:function(t,e){return i(t,e)}},function(){function t(t){function e(){}return e.prototype={meta:{serializeScope:!0},serializeScope:u,type:Dom.COMPONENT,compoName:t,renderEnd:l,dispose:s},e}custom_Tags[p]=t(p),custom_Tags[d]=t(d)}();var g,m,v,_=["prop1","prop2","in|of","expression"]}(),function(){function t(t,n){for(var r=n.length,o=new Array(r),i=t.nodes,l=t.expression,s="."===l?'."':"("+t.expression+')."',u=0;r>u;u++)o[u]=e(i,n[u],s,u);return o}function e(t,e,r,o){return{type:Dom.COMPONENT,tagName:"each::item",nodes:t,controller:n(e,o,r)}}function n(t,e,n){return{compoName:"each::item",model:t,scope:{index:e},modelRef:n+e+'"',attr:null,meta:null}}custom_Statements.each={render:function(e,n,r,o,i,l){var s=ExpressionUtil.eval(e.expression,n,r,i);null!=s&&builder_build(t(e,s),s,r,o,i,l)}}}(),custom_Statements["with"]={render:function(t,e,n,r,o,i){var l=ExpressionUtil.eval(t.expression,e,n,o);builder_build(t.nodes,l,n,r,o,i)}},function(){function t(t,n,r,o,i){if(null==n)return null;for(var l,s,u,a,c=n.length,f=-1;++f<c;)if(l=n[f],"default"!==l.tagName)if("case"===l.tagName)if(s=l.expression){if(e(s,r,o,i)==t){u=l;break}}else log_warn("<mask:switch:case> Expression expected");else log_warn("<mask:switch> Case expected",l.tagName);else a=l;return null==u&&(u=a),null!=u?u.nodes:null}var e=ExpressionUtil.eval;custom_Statements["switch"]={render:function(n,r,o,i,l,s){var u=e(n.expression,r,o,l),a=t(u,n.nodes,r,o,l);null!=a&&builder_build(a,r,o,i,l,s)},getNodes:t}}(),function(){function t(t){this.parent=t,this.compoName="include",this.components=[],this.templates=null}custom_Statements.include={render:function(e,n,r,o,i,l){for(var s,u=ExpressionUtil.evalStatements(e.expression);null!=i&&(s=i.resource,null==s);)i=i.parent;var i=new t(i),a=Compo.pause(i,r);include.instance(s&&s.url).load.apply(s,u).done(function(t){i.templates=t.load,builder_build(e.nodes,n,r,o,i,l),a()})}}}(),custom_Statements["import"]={render:function(t,e,n,r,o,i){var l=t.expression,s=ExpressionUtil.evalStatements(l,e,n,o),u=s[0];if("string"!=typeof u)return void log_error("<mask:import> Invalid argument",l);for(;;){if("include"===o.compoName)break;if(o=o.parent,null==o)break}if(null!=o){var a=o.templates[u];null!=a&&builder_build(parser_parse(a),e,n,r,o,i)}}},custom_Tags["var"]=VarStatement,VarStatement.prototype={renderStart:function(t,e){var n,r,o=this.parent,i=o.scope;null==i&&(i=o.scope={}),this.model={};for(n in this.attr)r=ExpressionUtil.eval(this.attr[n],t,e,o),this.model[n]=i[n]=r;this.attr={}},onRenderStartClient:function(){var t=this.parent,e=t.scope;null==e&&(e=t.scope={});for(var n in this.model)e[n]=this.model[n]}},function(){function t(t,e){for(var n=0;n<t.length;n++)t[n].style.display=e?"":"none"}custom_Statements.visible={toggle:t,render:function(e,n,r,o,i,l){var s=[];builder_build(e.nodes,n,r,o,i,s),arr_pushMany(l,s);var u=ExpressionUtil.eval(e.expression,n,r,i);t(s,u)}}}(),function(){function t(t,e,n,r,o,i){return{type:Dom.COMPONENT,compoName:t,attr:{},nodes:e,model:n,container:o,parent:i,index:r,scope:{index:r}}}custom_Statements.repeat={render:function(e,n,r,o,i,l){var s=ExpressionUtil.eval,u=e.expression,a=u.split(".."),c=+s(a[0]||"",n,r,i),f=+s(a[1]||"",n,r,i);if(c!==c||f!==f)return void log_error("Repeat attribute(from..to) invalid",u);for(var h=e.nodes,p=[],d=-1;++d<f;)p[d]=t("repeat::item",h,n,d,o,i);var g=[];builder_build(p,n,r,o,i,g),arr_pushMany(l,g)}}}();var mask_stringify;!function(){function t(t){for(var e="";t--;)e+=" ";return e}function e(e,r,o){var i,l;null==r&&(r=0),null==o&&(i=!0,o=[]);var s=o.length;if(e.type===Dom.FRAGMENT&&(e=e.nodes),e instanceof Array)for(l=0;l<e.length;l++)n(e[l],r,o);else n(e,r,o);var u=t(r);for(l=s;l<o.length;l++)o[l]=u+o[l];return i?o.join(0===a?"":"\n"):void 0}function n(t,n,c){if(is_Function(t.stringify))return void c.push(t.stringify(a));if(is_String(t.content))return void c.push(s(t.content));if(is_Function(t.content))return void c.push(s(t.content()));if(is_Function(t.stringifyChildren)){var f=r(t),h=t.stringifyChildren();return null==h?void c.push(f+";"):void c.push(f+"{",h,"}")}if(o(t))return void c.push(r(t)+";");if(i(t)){var p=u?">":" > ";return c.push(r(t)+p),void e(l(t),a,c)}c.push(r(t)+"{"),e(t.nodes,a,c),c.push("}")}function r(t){var e,n,r=t.tagName;null!=t.attr&&(e=t.attr.id||"",n=t.attr["class"]||""),"function"==typeof e&&(e=e()),"function"==typeof n&&(n=n()),e&&(e=-1!==e.indexOf(" ")?"":"#"+e),n&&(n="."+n.split(" ").join("."));var o="";for(var i in t.attr)if("id"!==i&&"class"!==i){var l=t.attr[i];"function"==typeof l&&(l=l()),i===l||u!==!1&&!/[^\w_$\-\.]/.test(l)||(l=s(l)),o+=" "+i,i!==l&&(o+="="+l)}"div"===r&&(e||n)&&(r="");var a="";return t.expression&&(a="("+t.expression+")"),r+e+n+o+a}function o(t){return null==t.nodes||t.nodes instanceof Array&&0===t.nodes.length}function i(t){return t.nodes&&(t.nodes instanceof Array==!1||1===t.nodes.length)}function l(t){return t.nodes instanceof Array?t.nodes[0]:t.nodes}function s(t){return-1===t.indexOf("'")?"'"+t+"'":-1===t.indexOf('"')?'"'+t+'"':'"'+t.replace(/"/g,'\\"')+'"'}mask_stringify=function(t,n){return null==t?"":("string"==typeof t&&(t=mask.parse(t)),null==n?(a=0,u=!0):"number"==typeof n?(a=n,u=0===a):(a=n&&n.indent||4,u=0===a||n&&n.minimizeAttributes),e(t))};var u,a}();var parser_parse,parser_parseAttr,parser_ensureTemplateFunction,parser_setInterpolationQuotes,parser_cleanObject,parser_ObjectLexer;!function(t,e,n){function r(t){for(var e=-1;-1!==(e=t.indexOf(c,e))&&t.charCodeAt(e+1)!==d;)e++;if(-1===e)return t;for(var n,r=t.length,i=[],l=0,s=0;;){if(n=o(t,e+2,r,d,g),-1===n)break;for(i[s++]=l===e?"":t.substring(l,e),i[s++]=t.substring(e+2,n),l=e=n+1;-1!==(e=t.indexOf(c,e))&&t.charCodeAt(e+1)!==d;)e++;if(-1===e)break}return r>l&&(i[s]=t.substring(l)),t=null,function(t,e,n,r,o,l){if(null==t){for(var s,u="",a=i.length,p=-1;++p<a;)s=i[p],u+=p%2===1?c+f+s+h:s;return u}return util_interpolate(i,t,e,n,r,o,l)}}var o,i,l,s,u,a,c="~",f="[",h="]",p=126,d=91,g=93;!function(){o=function(t,e,n,r,o){for(var l,s=0,u=e;n>e;e++)if(l=t.charCodeAt(e),34!==l&&39!==l)if(l!==r){if(l===o&&-1===--s)return e}else s++;else e=i(t,e+1,n,34===l?'"':"'");return parser_warn("Group was not closed",t,u),n},l=function(t,e,n){for(var r;n>e;)if(r=t.charCodeAt(e),36!==r&&95!==r){if(!(r>=48&&57>=r||r>=65&&90>=r||r>=97&&122>=r))break;e++}else e++;return e},s=function(t,e,n){for(var r;n>e;)if(r=t.charCodeAt(e),36!==r&&95!==r&&58!==r){if(!(r>=48&&57>=r||r>=65&&90>=r||r>=97&&122>=r))break;e++}else e++;return e},i=function(t,e,n,r){for(var o=e;-1!==(e=t.indexOf(r,e));){if(92!==t.charCodeAt(e-1))return e;e++}return parser_warn("Quote was not closed",t,o-1),n},u=function(t,e,n){for(;n>e;e++)if(t.charCodeAt(e)>32)return e;return e},a=function(t,e,n){for(;n>e;e++)if(t.charCodeAt(e)<33)return e;return e}}();var m;!function(){function t(t){var r=e(t);return function(t,e,o,i,l){return n(r,t,e,o,i,l)}}var e;!function(){function t(t,n,r,i,l,s){var u=++i;i=o(r,i,l,91,93);var a=e(r,u,i);i++,40!==r.charCodeAt(i)&&_("Punctuation group expected"),u=++i,i=o(r,i,l,40,41);var c=r.substring(u,i);return n.push(new f(t,a,new h(c),s)),i}function n(t,e,n,r,i){var l=++r;return r=o(n,r,i,40,41),e.push(new p(t,n.substring(l,r))),r}function u(t,e,n,r,o){var i=++r;return r=s(n,r,o),e.push(new d(t,n.substring(i,r))),r}function m(t,n,r,i,l){var s=++i;return i=o(r,s,l,40,41),n.push(new g(e(r,s,i),t)),i}function _(t){throw Error("Lexer pattern: "+t)}e=function(o,f,p){void 0===f&&(f=0,p=o.length);var d,y,b,x=[];t:for(;p>f;f++){switch(b=f,d=o.charCodeAt(f),y=!1,63===d&&(y=!0,b=++f,d=o.charCodeAt(f)),d){case 32:x.push(new c(y,f));continue;case 34:case 39:f=i(o,f+1,p,34===d?'"':"'"),x.push(new a(e(o,b+1,f)));continue;case 36:b=++f;var w=!1;d===o.charCodeAt(f)&&(w=!0,b=++f),f=s(o,f,p);var C=o.substring(b,f);if(y===!1&&w===!1){x.push(new l(C)),f--;continue}if(d=o.charCodeAt(f),91===d){f=t(C,x,o,f,p,y);continue}if(40===d){f=n(C,x,o,f,p);continue}if(60===d){f=u(C,x,o,f,p);continue}_("Unexpected extended type");continue;case 40:if(y===!0){f=m(y,x,o,f,p);continue}case 44:case 41:case 91:case 93:case 123:case 125:x.push(new h(String.fromCharCode(d)));continue}for(;p>f;)if(d=o.charCodeAt(++f),!(d>32&&34!==d&&39!==d&&36!==d&&44!==d)){x.push(new r(o.substring(b,f))),--f;continue t}}for(var k,j=x.length,N=-1,E=j>1;E===!0&&++N<j;)k=x[N],(k instanceof g==!1||k.optional!==!0)&&(E=!1);return E===!0&&(x=[new v(x)]),x}}();var n;!function(){n=function(t,e,n,r,o,i){for(var l,s,u=n,a=t.length,c=0;a>c;c++)if(l=t[c],s=n,n=l.consume(e,n,r,o),n===s){if(l.optional===!1){if(i!==!0){var f="Token of type `"+l.name+"`";l.token&&(f+=" Did you mean: `"+l.token+"`?"),parser_error(f,e,n)}return u}return n}return n}}();var r,l,a,c,f,h,p,d,g,v;!function(){function t(t){return new Function("obj","val","obj."+t+"= val;")}function e(t,e){var n=e.constructor;return e.name=t,e.optional=!1,e.token=null,n.prototype=e,n}c=e("Whitespace",{constructor:function(t){this.optional=t},consume:u}),r=e("Const",{constructor:function(t){this.token=t},consume:function(t,e){var n=e+this.token.length;return t=t.substring(e,n),t===this.token?n:e}}),l=e("Var",{constructor:function(e){this.token=e,this.setter=t(e)},consume:function(t,e,n,r){var o=s(t,e,n);return o===e?e:(this.setter(r,t.substring(e,o)),o)}}),p=e("ExtendedVar",{constructor:function(e,n){return this.token=n,this.setter=t(e),"*"===n?void(this.consume=this.consumeAll):void(this.rgx=new RegExp(n,"g"))},consumeAll:function(t,e,n,r){return this.setter(r,t.substring(e)),n},consume:function(t,e,n,r){this.rgx.lastIndex=e;var o=this.rgx.exec(t);if(null==o)return e;var i=o[0];return this.setter(r,i),e+i.length}}),function(){d=e("CustomVar",{constructor:function(e,r){this.fn=n[r],this.token=e,this.setter=t(e)},consume:function(t,e,n,r){for(var o,i=e;n>e&&(o=t.charCodeAt(e),36===o||95===o||58===o||(o>=48&&57>=o||o>=65&&90>=o||o>=97&&122>=o)||this.fn(o)===!0);e++);return e===i?e:(this.setter(r,t.substring(i,e)),e)}});var n={accessor:function(t){return 46===t?!0:!1}}}(),a=e("String",{constructor:function(t){this.tokens=t},consume:function(t,e,n,r){var o=t.charCodeAt(e);if(34!==o&&39!==o)return e;var l=i(t,e+1,n,34===o?'"':"'");if(1!==this.tokens.length)throw Error("Not implemented");var s=this.tokens[0];return r[s.token]=t.substring(e+1,l),++l}}),f=e("Array",{constructor:function(t,e,n,r){this.token=t,this.delim=n,this.tokens=e,this.optional=r},consume:function(t,e,r,o){for(var i,l,s;;){if(i={},l=n(this.tokens,t,e,r,i,this.optional),e===l){if(null==s)return e;throw Error("Next item expected")}if(null==s&&(s=[]),s.push(i),e=l,l=this.delim.consume(t,e,r),e===l)break;e=l}return o[this.token]=s,e}}),h=e("Punc",{constructor:function(t){this.before=new c(!0),this.delim=new r(t),this.after=new c(!0),this.token=t},consume:function(t,e,n){var r=this.before.consume(t,e,n),o=this.delim.consume(t,r,n);return r===o?e:this.after.consume(t,o,n)}}),g=e("Group",{constructor:function(t,e){this.optional=e,this.tokens=t},consume:function(t,e,r,o){return n(this.tokens,t,e,r,o,this.optional)}}),v=e("OrGroup",{constructor:function(t){this.groups=t,this.length=t.length},consume:function(t,e,n,r){for(var o=e,i=0;i<this.length;i++)if(e=this.groups[i].consume(t,e,n,r),e!==o)return e;return e}})}(),m=function(e){return 1===arguments.length&&"string"==typeof e?t(e):_(Array.prototype.slice.call(arguments))};var _;!function(){function e(t,e,r,o,i,l){return"function"==typeof t?t(e,r,o,i,l):n(t,e,r,o,i,l)}function n(t,e,n,r,o,i){for(var l=n,s=t.length,u=-1;++u<s;)if(n=t[u](e,n,r,o,!0),l!==n)return n;return i!==!0&&t[0](e,l,r,o,i),l}function r(e){if("string"==typeof e)return t(e);for(var n=e.length;--n>-1;)e[n]=t(e[n]);return e}_=function(t){for(var n=t.length,o=-1;++o<n;)t[o]=r(t[o]);return function(r,i,l,s,u){var a;for(o=-1;++o<n;)if(a=i,i=e(t[o],r,i,l,s,u),i===a)return a;return i}}}()}(),function(){function e(){var t=this.attr,e="var ";for(var n in t)"var "!==e&&(e+=","),e+=n+"="+t[n];return e+";"}custom_Parsers["var"]=function(n,r,s,u){var a,c,f=new t("var",u);f.stringify=e;for(var h,p=1,d=2,g=3,m=4,v=p;;)if(s>r&&(c=n.charCodeAt(r))<33)r++;else if(v!==p)if(v!==d)if(v!==g){if(v===m){if(44===c){v=p,r++;continue}break}}else{switch(a=r,r++,c){case 123:case 91:r=o(n,r,s,c,c+2);break;case 39:case 34:r=i(n,r,s,39===c?"'":'"');break;default:for(;s>r&&(c=n.charCodeAt(r),44!==c&&59!==c);)r++;r--}r++,f.attr[h]=n.substring(a,r),v=m}else{if(61!==c)return parser_error("Assignment expected",n,r,c,"var"),[f,r];v=g,r++}else a=r,r=l(n,r,s),h=n.substring(a,r),v=d;return[f,r,0]}}(),function(){function t(t,r,o){null!=t.scoped&&(r=e(r,o)),r=n(r,o),this.content=parser_ensureTemplateFunction(r),this.parent=o,this.attr=t}custom_Parsers.style=function(e,n,r,i){var l=e.indexOf("{",n)+1,s=parser_parseAttr(e,n,l-1),u=o(e,l,r,123,125),a=e.substring(l,u);if(null!=s.self){var c=i.attr.style;return i.attr.style=parser_ensureTemplateFunction((c||"")+a),[null,u+1]}return[new t(s,a,i),u+1,0]},t.prototype={tagName:"style",type:Dom.COMPONENT,controller:null,elements:null,model:null,stringify:function(){return"style {"+this.getStyle()+"}"},render:function(t,e,n,r){var o=document.createElement("style");o.textContent=this.getStyle(t,e,o,r);var i,l;for(i in this.attr)l=this.attr[i],null!=l&&o.setAttribute(i,l);n.appendChild(o)},getStyle:function(t,e,n,r){return is_Function(this.content)?0===arguments.length?this.content():this.content("node",t,e,n,r):this.content}};var e,n;!function(){function t(t){if(null==t)return log_warn('"style" should be inside elements node'),"";var e=t.attr.id;return null==e&&(e=t.attr.id="scoped__css__"+ ++r),"#"+e}var r=0,o=/^([\s]*)([^\{\}]+)\{/gm,i=/^([\s]*):host\s*(\(([^)]+)\))?\s*\{/gm;e=function(e,n){var r;return e=e.replace(o,function(e,o,i){if(-1!==i.indexOf(":host"))return e;null==r&&(r=t(n));for(var l=i.split(","),s=l.length,u=0;s>u;u++)l[u]=r+" "+l[u];return i=l.join(","),o+i+"{"})},n=function(e,n){var r;return e=e.replace(i,function(e,o,i,l){return o+(r||(r=t(n)))+(l||"")+"{"})}}()}(),function(){custom_Parsers.script=function(e,n,i,l){for(var s,u,a,c,f=n;i>n&&(c=e.charCodeAt(n),123!==c&&59!==c&&62!==c);)n++;if(62===c)return[new Dom.Node("script",l),n,v];var h=123===c;s=parser_parseAttr(e,f,n);for(var p in s)s[p]=r(s[p]);u=n,h&&(n++,u=o(e,n,i,123,125),a=e.substring(n,u));var d=new t("script",l);return d.attr=s,null!=a&&(d.nodes=[new Dom.TextNode(a,d)]),[d,u+1,0]};var t=class_create(Dom.Node,{tagName:"script",stringifyChildren:function(){return null==this.nodes||0===this.nodes.length?null:this.nodes[0].content}})}(),function(){var t="import",e="imports";custom_Parsers[t]=function(t,e,r,i){var l={exports:null,alias:null,path:null},s=n(t,e,r,l);return[new o(i,l),s,0]},custom_Tags["import:base"]=function(t,e,n,r,o){var i=path_normalize(ExpressionUtil.eval(t.expression,e,n,o));null!=i&&"/"!==i[i.length-1]&&(i+="/"),Module.cfg("base",i)},custom_Parsers_Transform[t]=function(t){if(t.tagName===e)return null;var n=new r("imports",t);return t.appendChild(n),n};var n=m(['from "$path"','* as $alias from "$path"','$$exports[$name?( as $alias)](,) from "$path"']),r=class_create(Dom.Node,{stringify:function(t){return mask_stringify(this.nodes,t)}}),o=class_create({type:Dom.COMPONENT,tagName:t,path:null,exports:null,alias:null,constructor:function(t,e){this.path=e.path,this.alias=e.alias,this.exports=e.exports,this.parent=t},stringify:function(){var e=" from '"+this.path+"';";if(null!=this.alias)return t+" * as "+this.alias+e;if(null!=this.exports){for(var n,r=this.exports,o="",i=r.length,l=-1;++l<i;)n=r[l],o+=n.name,n.alias&&(o+=" as "+n.alias),l!==i-1&&(o+=", ");return t+" "+o+e}return t+e}});custom_Tags[t]=class_create({meta:{serializeNodes:!0},constructor:function(t,e,n){this.dependency=Module.createDependency(t,n,this)},renderStart:function(t,e){if(this.dependency.isEmbeddable()!==!1){var n=Compo.pause(this,e),r=this;this.dependency.loadImport(function(){r.nodes=r.dependency.getEmbeddableNodes(),n()})}}}),custom_Tags[e]=class_create({imports_:null,load_:function(t,e){function n(){0===--l&&e()}for(var r,o=this.imports_,i=o.length,l=i,s=-1;++s<i;)r=o[s],r.loadImport(n)},start_:function(e,n){for(var r=Compo.pause(this,n),o=this.nodes,i=o.length,l=-1,s=this.imports_=[];++l<i;)o[l].tagName===t&&s.push(Module.createDependency(o[l],n,this));this.load_(n,r)},meta:{serializeNodes:!0},renderStart:function(t,e){this.start_(t,e)},renderStartClient:function(t,e){this.start_(t,e)},serializeNodes:function(){for(var e,n=[],r=this.nodes.length;--r>-1;)e=this.nodes[r],e.tagName===t&&n.push(e);return mask_stringify(n)},getHandler:function(t){for(var e,n=this.imports_,r=n.length,o=-1;++o<r;)if(e=n[o].getHandler(t),null!=e)return e;return null},getHandlers:function(){for(var t,e={},n=this.imports_,r=n.length,o=-1;++o<r;)t=n[o].getHandlers(),obj_extend(e,t);return e}})}(),function(){custom_Parsers.define=function(n,r,o,i){var l=new e("define",i),s=t(n,r,o,l);return[l,s,v]};var t=m("$name",'?( extends $$extends[?("$path")?($$compo<accessor>)](,))',"{"),e=class_create(Dom.Node,{name:null,"extends":null,stringify:function(t){var e=this["extends"],n="";if(e&&0!==e.length){n=" extends ";for(var r=e.length,o=-1;++o<r;)n+=e[o].compo,r-1>o&&(n+=", ")}return"define "+this.name+n+"{"+mask_stringify(this.nodes,t)+"}"}});custom_Tags.define=class_create({meta:{serializeNodes:!0},constructor:function(t,e,n,r,o){var i=Define.create(t,e,o);customTag_register(t.name,i)},render:fn_doNothing})}(),function(){function t(t){return function(n,i,l,s){var u=n.indexOf("{",i)+1,a=e(n.substring(i,u-1)),c=o(n,u,l,123,125),f=n.substring(u,c),h=new r(t,a.shift(),a,f,s);return[h,c+1,0]}}function e(t){var e=/(\w+)\s*\(([^\)]*)\)/.exec(t);if(null==e)return log_error("`slot` has invalid head syntax",t),null;var n=[e[1]];return n=n.concat(e[2].replace(/\s/g,"").split(","))}function n(t,e){var n=_Array_slice.call(t);return n.push(e),new(Function.bind.apply(Function,[null].concat(n)))}var r=class_create(Dom.Component.prototype,{constructor:function(t,e,r,o,i){this.tagName=t,this.name=e,this.args=r,this.body=o,this.parent=i,this.fn=n(r,o)},stringify:function(){return this.tagName+" "+this.name+"("+this.args.join(",")+") {"+this.body+"}"}}),i=class_create({meta:{serializeNodes:!0},constructor:function(t){this.fn=t.fn||n(t.args,t.body),this.name=t.name}});custom_Tags.slot=class_create(i,{renderEnd:function(){var t=this.parent,e=t.slots;null==e&&(e=t.slots={}),e[this.name]=this.fn}}),custom_Tags.event=class_create(i,{renderEnd:function(t,e,n,r){this.fn=this.fn.bind(this.parent),Compo.Dom.addEventListener(r,this.name,this.fn)}}),custom_Tags["function"]=class_create(i,{renderEnd:function(){this.parent[this.name]=this.fn}}),custom_Parsers.slot=t("slot"),custom_Parsers.event=t("event"),custom_Parsers["function"]=t("function")}();var v=2,_=3,y=5,b=6,x=7,w=8,C=9;parser_ensureTemplateFunction=r,parser_ObjectLexer=m,parser_parse=function(i){var l,s,u,a,c,f,h,m,k=new n,j=k,N=v,E=_,A=0,O=i.length;t:for(;;){for(;O>A&&(f=i.charCodeAt(A))<33;)A++;if(47===f){if(m=i.charCodeAt(A+1),47===m){for(A++;10!==f&&13!==f&&O>A;)f=i.charCodeAt(++A);continue}if(42===m){A=i.indexOf("*/",A+2)+2,1===A&&(parser_warn("Block comment has no ending",i,A),A=O);continue}}if(E===y&&(null!=l&&(k.attr["class"]=r(l),l=null),null!=u&&(k.attr[u]=u,u=null,s=null)),null!=s){if(N===y)null==u?u=s:a=s,null!=u&&null!=a&&("class"!==u?k.attr[u]=a:l=null==l?a:l+" "+a,u=null,a=null);else if(E===_){var S=custom_Parsers[s];if(null!=S){var D=S(i,A,O,k),T=D[0],M=D[2];if(A=D[1],N=0===M?v:M,null!=T){var R=custom_Parsers_Transform[s];if(null!=R){var P=R(k,T);null!=P&&(k.__single=!0,k=P)}if(k.appendChild(T),0!==M)k=T;else if(k.__single===!0)do k=k.parent;while(null!=k&&null!=k.__single)}s=null;continue}c=new t(s,k),k.appendChild(c),k=c,N=y}else if(E===w){if(c=new e(s,k),k.appendChild(c),k.__single===!0)do k=k.parent;while(null!=k&&null!=k.__single);N=v}s=null}if(A>=O){N===y&&(null!=l&&(k.attr["class"]=r(l)),null!=u&&(k.attr[u]=u)),f=null;break}if(N===C){for(k=k.parent;null!=k&&null!=k.__single;)k=k.parent;null==k&&(k=j,parser_warn("Unexpected tag closing",i,A-1)),N=v}switch(f){case 123:E=N,N=v,A++;continue;case 62:E=N,N=v,A++,k.__single=!0;continue;case 59:if(null!=k.nodes){A++;continue}case 125:125!==f||N!==_&&N!==y||A--,A++,E=N,N=C;continue;case 39:case 34:N===b?N=y:E=N=w,A++;var L=!1,I=!1,H=39===f?"'":'"';for(h=A;(A=i.indexOf(H,A))>-1&&92===i.charCodeAt(A-1);)L=!0,A++;-1===A&&(parser_warn("Literal has no ending",i,h-1),A=O),A===h&&(m=i.charCodeAt(A+1),(124===m||m===f)&&(I=!0,h=A+2,A=i.indexOf((124===m?"|":H)+H+H,h),-1===A&&(A=O))),s=i.substring(h,A),L===!0&&(s=s.replace(__rgxEscapedChar[H],H)),(N!==y||"class"!==u)&&(s=r(s)),A+=I?3:1;continue}if(N===v){if(E=_,N=_,46===f||35===f){s="div";continue}}else if(N===y)if(46===f)A++,u="class",N=x;else if(35===f)A++,u="id",N=x;else{if(61===f){A++,N=b,E===_&&null==u&&parser_warn("Unexpected tag assignment",i,A,f,N);continue}if(40===f){h=1+A,A=1+o(i,h,O,f,41),k.expression=i.substring(h,A-1),k.type=Dom.STATEMENT;continue}if(null!=u){s=u;continue}}(N===b||N===x)&&(E=N,N=y);var F=null;for(h=A;O>A;){if(f=i.charCodeAt(A),f===p&&i.charCodeAt(A+1)===d){F=!0,++A;do f=i.charCodeAt(++A);while(f!==g&&O>A)}if(39===f||34===f||47===f||60===f||44===f){parser_warn("",i,A,f,N);break t}if(E!==b&&(46===f||35===f))break;if(33>f||61===f||62===f||59===f||40===f||123===f||125===f)break;A++}if(s=i.substring(h,A),""===s){parser_warn("String expected",i,A,f,N);break}if(F===!0){if(N===_){parser_warn("Invalid interpolation (in tag name)",i,A,s,N);break}if(N===y)if("id"===u||E===b)s=r(s);else if("class"!==u){parser_warn("Invalid interpolation (in attr name)",i,A,s,N);break}}}f!==f&&parser_warn("IndexOverflow",i,A,f,N);var $=k.parent;null!=$&&$!==j&&$.__single!==!0&&null!=k.nodes&&"imports"!==$.tagName&&parser_warn("Tag was not closed: "+k.tagName,i);var U=j.nodes;return null!=U&&1===U.length?U[0]:j},parser_cleanObject=function(t){if(is_Array(t)){for(var e=0;e<t.length;e++)parser_cleanObject(t[e]);return t}return delete t.parent,delete t.__single,null!=t.nodes&&parser_cleanObject(t.nodes),t},parser_setInterpolationQuotes=function(t,e){return t&&2===t.length?e&&1===e.length?(p=t.charCodeAt(0),d=t.charCodeAt(1),g=e.charCodeAt(0),c=t[0],f=t[1],void(h=e)):void log_error("Interpolation End must be of 1 Character"):void log_error("Interpolation Start must contain 2 Characters")},parser_parseAttr=function(t,e,n){for(var r,o,l={},s=e;n>s&&(s=u(t,s,n),s!==n);){for(e=s;n>s&&(o=t.charCodeAt(s),!(61===o||33>o));s++);if(r=t.substring(e,s),s=u(t,s,n),s===n){l[r]=r;break}61===t.charCodeAt(s)?(s=e=u(t,s+1,n),o=t.charCodeAt(s),34!==o&&39!==o?(s=a(t,s,n),l[r]=t.substring(e,s)):(s=i(t,s+1,n,39===o?"'":'"'),l[r]=t.substring(e+1,s),s++)):l[r]=r}return l}}(Dom.Node,Dom.TextNode,Dom.Fragment,Dom.Component);var builder_componentID=0,builder_build,builder_Ctx;!function(t){function e(t,e){var n=t.components;return null==n?void(t.components=[e]):void n.push(e)}var n;!function(){function t(t,e,n,r,o,i){null!=t.tagName&&t.tagName!==t.compoName&&(t.nodes={tagName:t.tagName,attr:t.attr,nodes:t.nodes,type:1}),null!=t.model&&(e=t.model);var l=t.nodes,s=[];if(null!=l){for(var u=l instanceof Array,a=u===!0?l.length:1,c=0,f=null,h=document.createDocumentFragment();a>c;c++)f=u===!0?l[c]:l,builder_build(f,e,n,h,t,s);r.parentNode.insertBefore(h,r)}if(null==t.tagName){var p,d,g=t.handlers&&t.handlers.attr;for(d in t.attr)p=null,g&&is_Function(g[d])&&(p=g[d]),null==p&&is_Function(custom_Attributes[d])&&(p=custom_Attributes[d]),null!=p&&p(r,t.attr[d],e,n,s[0],t)}if(is_Function(i)&&i.call(t,s,e,n,r.parentNode),null!=o&&o!==s)for(var m=o.length,v=s.length,_=-1;++_<v;)o[m+_]=s[_]}n=function(e,n,r,o,i,l){var s=document.createComment("");return o.appendChild(s),function(){return t(e,n,r,s,i,l)}}}();var r,o=function(){var t=function(t){return function(e,n){e.appendChild(t.createTextNode(n))}}(document);return function(e,n,r,o,i){var l=e.content;if(is_Function(l)){var s=l("node",n,r,o,i);if("string"==typeof s)return void t(o,s);for(var u,a="",c=s.length,f=0;c>f;f++)if(u=s[f],"object"!=typeof u)a+=u;else{if(""!==a&&(t(o,a),a=""),null==u.nodeType){a+=u.toString();continue}o.appendChild(u)}return void(""!==a&&t(o,a))}t(o,l)}}();!function(){r=function(e,n,r,o,i,l){var s=e.tagName,u=e.attr,a=t(s);if(null!=a){null!=l&&(l.push(a),u["x-compo-id"]=i.ID),null!=o&&o.appendChild(a);var c,f,h,p;for(c in u){if(f=u[c],is_Function(f)){var d=f("attr",n,r,a,i,c);if(null==d)continue;if("string"==typeof d)h=d;else if(is_ArrayLike(d)){if(0===d.length)continue;h=d.join("")}else h=d}else h=f;null!=h&&""!==h&&(p=custom_Attributes[c],null!=p?p(e,h,n,r,a,i,o):a.setAttribute(c,h))}return a}};var t;!function(e){t=function(t){try{return e.createElement(t)}catch(n){return log_error(t,"element cannot be created. If this should be a custom handler tag, then controller is not defined"),null}}}(document)}();var i;!function(){function t(t,r,o,i,l,s,u){var a,c;t.ID=++builder_componentID,t.attr=a=attr_extend(t.attr,r.attr),t.parent=s,t.expression=r.expression,null==t.compoName&&(t.compoName=r.tagName),null==t.model&&(t.model=o),null==t.nodes&&(t.nodes=r.nodes);for(c in a)"function"==typeof a[c]&&(a[c]=a[c]("attr",o,i,l,s,c));if(listeners_emit("compoCreated",t,o,i,l),is_Function(t.renderStart)&&t.renderStart(o,i,l),e(s,t),t.async===!0){var f=n(t,o,i,l,u,t.renderEnd);return t.await(f),null}return null!=t.tagName&&(t.nodes={tagName:t.tagName,attr:t.attr,nodes:t.nodes,type:1}),"function"==typeof t.render?(t.render(t.model,i,l),null):t}function r(t,n,r,o,i,l,s){var u,a,c,f=t.__Ctor,h=!1;if(null!=f)c=new f(n,l);else{c=t;for(var p in n)c[p]=n[p];c.parent=l}var d=c.attr;if(null!=d)for(var p in d)"function"==typeof d[p]&&(d[p]=d[p]("attr",r,o,i,l,p));is_Function(c.renderStart)&&c.renderStart(r,o,i,l,s),c.ID=++builder_componentID,e(l,c);var g=l.components.length-1;return is_Function(c.render)&&(h=!0,u=c.render(r,o,i,l,s),arr_pushMany(s,u),is_Function(c.renderEnd)&&(a=c.renderEnd(u,r,o,i,l),null!=a&&(l.components[g]=a))),h?null:c}function o(t,n,r,o,i,l){t.ID=++builder_componentID,e(i,t),null==t.model&&(t.model=n);var s=t.elements=[];return t.render?t.render(t.model,r,o,i,s):builder_build(t.nodes,t.model,r,o,t,s),null!=l&&0!==s.length&&arr_pushMany(l,s),null}i=function(e,n,i,l,s,u){var a,c=e.tagName;if(null!=e.controller&&(a=e.controller),null==a&&(a=custom_Tags[c]),null==a)return o(e,n,i,l,s,u);var f,h=!1;"function"==typeof a?f=new a(e,n,i,l,s):(f=a,h=!0);var p=h?r:t;return p(f,e,n,i,l,s,u)}}(),function(){builder_Ctx=class_create(class_Dfr,{constructor:function(t){obj_extend(this,t)},async:!1,defers:null,_id:null,_models:null,_modules:null,_redirect:null,_rewrite:null})}(),builder_build=function(e,n,l,s,u,a){if(null==e)return s;var c,f,h,p,d=e.type;if(null==u&&(u=new t),null==d&&(is_ArrayLike(e)?d=10:null!=e.tagName?d=1:null!=e.content&&(d=2)),1===d&&null!=custom_Tags[e.tagName]&&(d=4),null==s&&1!==d&&(s=document.createDocumentFragment()),2===d)return o(e,n,l,s,u),s;if(10===d){for(h=0,p=e.length;p>h;h++)builder_build(e[h],n,l,s,u,a);return s}var g=e.tagName;if("else"===g)return s;if(15===d){var m=custom_Statements[g];if(null==m){if(null==custom_Tags[g])return log_error("<mask: statement is undefined>",g),s;d=4}if(15===d)return m.render(e,n,l,s,u,a),s}if(1===d&&(s=r(e,n,l,s,u,a),a=null),4===d){if(u=i(e,n,l,s,u,a),null==u)return s;c=[],e=u,u.model!==n&&null!=u.model&&(n=u.model)}var v=e.nodes;if(null!=v)if(null!=a&&null==c&&(c=a),is_ArrayLike(v))for(var _=v.length,y=0;_>y;y++)builder_build(v[y],n,l,s,u,c);else builder_build(v,n,l,s,u,c);if(4===d){if(null==e.tagName&&"%"!==e.compoName){var b,x,f,w=e.handlers&&e.handlers.attr;for(f in e.attr)x=e.attr[f],null!=x&&(b=null,null!=w&&is_Function(w[f])&&(b=w[f]),null==b&&null!=custom_Attributes[f]&&(b=custom_Attributes[f]),null!=b&&b(e,x,n,l,c[0],u))}is_Function(e.renderEnd)&&e.renderEnd(c,n,l,s)}return null!=a&&null!=c&&a!==c&&arr_pushMany(a,c),s}}(Dom.Component);var mask_run;!function(){function t(t,e,n){return function(){e.parentNode.insertBefore(t,e),n()}}mask_run=function(){function e(){0===--g&&d&&n()}function n(){is_Function(c.renderEnd)&&c.renderEnd(r,o),Compo.signal.emitIn(c,"domInsert")}var r,o,i,l,s,u,a=_Array_slice.call(arguments);for(l=a.length,s=-1;++s<l;)u=a[s],u instanceof Node?r=u:is_Function(u)?i=u:is_Object(u)&&(o=u);null==r&&(r=document.body);var c=is_Function(i)?new i:new Compo;c.ID=++builder_componentID,null==o&&(o=c.model||{});var f,h=_Array_slice.call(document.getElementsByTagName("script")),p=!1,d=!1,g=0;for(l=h.length,s=-1;++s<l;)if(f=h[s],"text/mask"===f.getAttribute("type")&&"true"===f.getAttribute("data-run")){p=!0;var m=new builder_Ctx,v=builder_build(parser_parse(f.textContent),o,m,null,c);m.async!==!0?f.parentNode.insertBefore(v,f):(g++,m.done(t(v,f,e)))}return d=!0,p===!1&&log_warn("No blocks found: <script type='text/mask' data-run='true'>...</script>"),0===g&&n(),c}}();var mask_merge;!function(){function t(t,i,l,u){if(null==t)return null;var a;if(is_Array(t))a=e;else switch(t.type){case w:a=s;break;case x:case k:a=o;break;case C:a=n;break;case j:a=r}return void 0!==a?a(t,i,l,u):(log_warn("Uknown type",t.type),null)}function e(e,n,r,o){for(var i,l,s=[],u=e.length,a=-1;++a<u;){if(l=e[a],l.tagName===v){if(null!=i)continue;if(l.expression&&!g(l.expression,n,r))continue;i=t(e[a].nodes,n,r,o)}else i=t(l,n,r,o);f(s,i)}return s}function n(t,n,r,o){var i=new Dom.Fragment;return i.parent=o,i.nodes=e(t.nodes,n,r,i),i}function r(e,n,r,o){if(null==e.nodes)return e;var i=new Dom.Component;return obj_extend(i,e),i.nodes=t(i.nodes,n,r,o),i}function o(e,n,r,o){var s=e.tagName;if(64!==s.charCodeAt(0))return l(e,n,r,o);var u=e.attr.id;if(s===b&&null==u){if(null!=r){var a=r.tagName;if(null!=a&&64===r.tagName.charCodeAt(0))return r.nodes}u="$root"}if(y===s){var c,p=n[e.expression];if(null==p)return log_error("No template node: @"+e.expression),null;if(is_Array(p)===!1)return c=p,t(e.nodes,h(c.nodes,c.nodes,new m(n)),c,o);for(var v=new Dom.Fragment,w=p.length,C=-1;++C<w;)c=p[C],f(v,t(e.nodes,h(c.nodes,c.nodes,new m(n)),c,o));return v}if(_===s){var k=g(e.expression,n,r);return k?t(e.nodes,n,r,o):null}null==u&&(u=s.substring(1));var j=n.$getNode(u,e.expression);if(null==j)return null;j.parent&&d(o,j.parent);var N,E=j.nodes;if(void 0!==e.attr.as){var a=e.attr.as;N={type:x,tagName:a,attr:i(e.attr,j.attr,n,r),parent:o,nodes:E},N.attr.as=null}if(null==e.nodes)return N||E;var A=t(e.nodes,h(E,E,new m(n)),j,N||o);return null!=N?(N.nodes=A,N):A}function i(t,e,n,r){if(null==t||null==e)return t||e;var o=u(t,n,r);for(var i in e)o[i]=a(e[i],n,r);return o}function l(e,n,r,o){var i=e.tagName||e.compoName;switch(i){case":template":var l=a(e.attr.id,n,r);return Mask.templates.register(l,e.nodes),null;case":import":var l=a(e.attr.id,n,r),s=Mask.templates.resolve(e,l);return t(s,n,r,o);case"define":case"function":case"var":case"import":return e}var c={type:e.type,tagName:i,attr:u(e.attr,n,r),expression:a(e.expression,n,r),controller:e.controller,parent:o,nodes:null};return e.nodes&&(c.nodes=t(e.nodes,n,r,c)),c}function s(t,e,n,r){return{type:t.type,content:a(t.content,e,n),parent:r}}function u(t,e,n){var r,o=_Object_create(t);for(var i in o)r=o[i],null!=r&&(o[i]=a(r,e,n));return o}function a(t,e,n){var r=-1,o=!1,i=t;if("function"==typeof t&&(o=!0,i=t()),"string"!=typeof i||-1===(r=i.indexOf("@")))return t;for(var l,s=i.substring(0,r),u=i.length,a=91===i.charCodeAt(r+1),f=-1;u>r;){if(f=r,a===!0)r=i.indexOf("]",f),-1===r&&(r=u),f+=2;else for(;u>r&&(l=i.charCodeAt(++r),36===l||95===l||46===l||l>=48&&57>=l||l>=65&&90>=l||l>=97&&122>=l););var h=i.substring(f,r),p=a?g:c,d=p(h,e,n);null!=d&&(s+=d),f=a?r+1:r,r=i.indexOf("@",r),-1===r&&(r=u),s+=i.substring(f,r)}return o?parser_ensureTemplateFunction(s):s}function c(t,e,n){var r=t.indexOf(".");
if(-1===r)return log_warn("Merge templates. Accessing node",t),"";var o=t.substring(0,r),i=o.substring(1),l=t.substring(r+1),s=null;return null!=n&&("@attr"===o?s=n.attr:o===n.tagName&&(s=n)),null==s&&(s=e.$getNode(i)),null==s?(log_error("Merge templates. Node not found",o),""):obj_getProperty(s,l)}function f(t,e){if(null!=e)if("function"!=typeof e.concat){if(e.type===C)return void f(t,e.nodes);if("function"==typeof t.appendChild)return void t.appendChild(e);var n=t.length;if(n>0){var r=t[n-1];r.nextSibling=e}t.push(e)}else for(var o=e.length,i=0;o>i;i++)f(t,e[i])}function h(t,e,n){if(null==e)return n;if(is_Array(e)){for(var r=e.length,o=-1;++o<r;)h(e===t?e[o]:t,e[o],n);return n}var i=e.type;if(i===w)return n;if(i===x){var l=e.tagName;if(null!=l&&64===l.charCodeAt(0)){var s=l.substring(1);-1!==N.indexOf(" "+s+" ")&&log_error("MaskMerge. Reserved Name",s);var u={tagName:e.tagName,parent:p(t,e),nodes:e.nodes,attr:e.attr,expression:e.expression};if(null==n[s])n[s]=u;else{var a=n[s];is_Array(a)?a.push(u):n[s]=[a,u]}return n}}return h(t,e.nodes,n)}function p(t,e){if(e===t)return null;for(var n,r,o=e.parent;;){if(null==o)break;if(o===t&&t.type!==x)break;var i={type:o.type,tagName:o.tagName,attr:o.attr,controller:o.controller,expression:o.expression,nodes:null,parent:null};null==r?n=r=i:(n.parent=i,n=i),o=o.parent}return r}function d(t,e){for(var n=t,r=e;null!=n&&null!=r;){r.tagName&&(n.tagName=r.tagName),r.expression&&(n.expression=r.expression);for(var o in r.attr)n.attr[o]=r.attr[o];n=n.parent,r=r.parent}}function g(t,e,n){return null!=n&&(e.attr=n.attr),ExpressionUtil.eval(t,e,null,e)}function m(t,e){var n=null;null!=e&&(n=new Dom.Node(b),n.nodes=e),this.scope=this,this.parent=t,this.$root=n||t&&t.$root}mask_merge=function(e,n,r){"string"==typeof e&&(e=parser_parse(e)),"string"==typeof n&&(n=parser_parse(n));var o=h(n,n,new m(null,n));return t(e,o,r)};var v="@else",_="@if",y="@each",b="@placeholder",x=Dom.NODE,w=Dom.TEXTNODE,C=Dom.FRAGMENT,k=Dom.STATEMENT,j=Dom.COMPONENT,N=" else placeholder each attr if parent scope";m.prototype={parent:null,attr:null,scope:null,$root:null,$getNode:function(t,e){for(var n,r=this;null!=r&&(n=r[t],null==n);)r=r.parent;return null!=e&&null!=n&&(n={nodes:jmask(n.nodes).filter(e)}),n}}}();var mask_optimize;!function(){function t(t){return t.type!==Dom.NODE?null:custom_Optimizers[t.tagName]}mask_optimize=function(e,n){mask_TreeWalker.walkAsync(e,function(e,n){var r=t(e);return null!=r?void r(e,n):void n()},n)}}();var Module;!function(){var t,e,n,r,o={};!function(){e=function(e,n,r){if(null!=r)return r.location;for(;null!=n;){if(null!=n.location)return n.location;if(null!=n.resource&&n.resource.location)return n.resource.location;n=n.parent}var o=null;return null!=e&&(null!=e.filename&&(o=path_getDir(path_normalize(e.filename))),null!=e.dirname&&(o=path_normalize(e.dirname+"/"))),null==t&&(t=path_resolveCurrent()),null!=o?path_isRelative(o)===!1?o:path_combine(t,o):t},n=function(t,e,n){return function(r){return r===t?e:null!=n?n(r):null}},r=function(t,e){return null==e?t:function(n){var r=t.call(this,n);return null==r?e.call(this,n):r}}}();var i=class_create({constructor:function(t,e,n,r){this.path=t.path,this.exports=t.exports,this.alias=t.alias,Module.isMask(this.path)===!0&&this.eachExport(function(t){"*"!==t&&customTag_registerResolver(t)}),this.ctx=e,this.ctr=n,this.module=Module.createModule(this.path,e,n,r),e._modules&&e._modules.add(this.module,r)},eachExport:function(t){var e=this.alias,n="*";null!=e&&t.call(this,null==e?n:e,n,e);var r=this.exports;if(null!=r)for(var o,i=r.length,l=-1;++l<i;)o=r[l],n=o.name,e=o.alias,t.call(this,null==e?n:e,n,e)},withExport:function(t,e){var n=this.alias;if(n===t)return void e("*",n);var r=this.exports;if(null!=r)for(var o,i=r.length,l=-1;++l<i;)if(o=r[l],(o.alias||o.name)===t)return void e(o.name,o.alias)},hasExport:function(t){if("*"===t)return!0;var e=this.exports;if(null!=e)for(var n,r=e.length,o=-1;++o<r;)if(n=e[o],t===(n.alias||n.name))return!0;return!1},getHandler:function(t){var e=this.module;if(null!=e){var n=null;return this.withExport(t,function(t){n=e.exports[t],null==n&&(n=e.getIntern(t))}),n}},loadImport:function(t){var e=this;this.module.loadModule().fail(t).done(function(){e.eachExport(function(t,n,r){e.module.register(e.ctr,n,r)}),t(null,e)})},getEmbeddableNodes:function(){var t=this.module;return null==t||"mask"!==t.type?null:null!=this.alias||null!=this.exports?null:t.nodes||t.erroredExport_()},isEmbeddable:function(){return null==this.alias&&null==this.exports&&Module.isMask(this.path)}}),l=class_create(class_Dfr,{type:null,path:null,location:null,exports:null,state:0,constructor:function(t,e,n,r){this.path=t,this.location=path_getDir(t),this.parent=r,this.ctx=e,this.ctr=n},loadModule:function(){if(0!==this.state)return this;this.state=1;var t=this;return this.load_(this.path).fail(function(e){t.state=4,t.reject(t.error=e)}).done(function(e){t.preproc_(e,function(e){t.state=4,t.exports=e,t.resolve(t)})}),this},get:function(t,e,n){var r=this.exports;return null==r?this.erroredExport_():void 0!==r[t]?r[t]:this.get_(t,e,n)},getHandler:null,getIntern:null,register:null,preproc_:function(t,e){e(t)},load_:null,get_:null,erroredExport_:fn_doNothing});!function(){function t(t){var e=path_getExtension(t);return"mask"===e?s:u}l.create=function(e,n,r,o){return new(t(e))(e,n,r,o)}}();var s;!function(){function t(t){var e=t.type;return e===Dom.FRAGMENT?t.nodes:e===Dom.NODE&&"imports"===t.tagName?t.nodes:null!=e?[t]:t}function e(t,e){for(var n,r=[],o=t.length,i=-1;++i<o;)n=t[i],n.tagName===e&&r.push(n);return r}function n(t,e,n){for(var r=(n.imports,n.exports),o=n.getHandler.bind(n),i=t.length,l=-1;++l<i;){var s=t[l];if("define"===s.tagName){var u=Define.create(s,e,n);u.prototype.getHandler=o,r[s.name]=u}}return r}function r(t,e){return class_create({location:e.location,nodes:t,getHandler:e.getHandler.bind(e)})}function o(t,e,n){function r(){--o>0||e.call(n)}var o=t.length;if(0===o)return e.call(n);for(var i=o,l=-1;++l<i;)t[l].loadImport(r)}function u(t,e){var n=t.exports[e];if(null!=n)return n;for(var r,o=t.imports,i=o.length;--i>-1;)if(r=o[i],n=r.getHandler(e),null!=n)return n;return null}s=class_create(l,{load_:function(t){var e=__cfg.getFile||file_get;return e(t)},preproc_:function(e,r){for(var l,s="string"==typeof e?parser_parse(e):e,u=this.imports=[],a=this.exports={__nodes__:[]},c=this.nodes=t(s),f=c.length,h=-1;++h<f;)switch(l=c[h],l.tagName){case"import":u.push(new i(l,this.ctx,this.ctr,this));break;case"module":Module.registerModule(l.nodes,path_resolveUrl(l.attr.path,this.location));break;default:a.__nodes__.push(l)}o(u,function(){r(n(c,null,this))},this)},get_:function(t,n,r){var o=this.exports[t];if(null!=o)return new Dom.Component(t,r,o);var i=e(this.exports.__nodes__,t);return null!=i?i:(log_error("Export not found",t),log_errorNode("Error: Export not found; "+t))},erroredExport_:function(t){var e=(t||"")+"; Resource: "+this.path;return this.error&&(e+="; Status: "+this.error.status),log_errorNode(e)},register:function(){},getHandler:function(t){return u(this,t)},getIntern:function(t){var n=this.exports.__nodes__;return null!=t&&"*"!==t&&(n=e(n,t)),null!=n&&0!==n.length?r(n,this):null},type:"mask",nodes:null,modules:null,exports:null})}();var u=class_create(l,{type:"js",load_:function(t){var e=__cfg.getScript||file_getScript;return e(t)},getIntern:function(t){var e=this.exports||{};return"*"!==t?obj_getProperty(e,t):e},register:function(t,e,n){var r=n||e,o=this.getIntern(e);return null==o?void log_error("Property is undefined",e):(null==t.scope&&(t.scope={}),void obj_setProperty(t.scope,r,o))}});custom_Tags.module=class_create({constructor:function(t,n,r,o,i){var l=path_resolveUrl(t.attr.path,e(r,i));Module.registerModule(t.nodes,l,r,i)},render:fn_doNothing}),Module={createModule:function(t,n,r,i){""===path_getExtension(t)&&(t+=".mask"),path_isRelative(t)&&(t=path_combine(e(n,r,i),t)),t=path_normalize(t);var s=o[t];return null==s&&(s=o[t]=l.create(t,n,r,i)),s},registerModule:function(t,e,n,r){var i;if(Module.isMask(e)){i=Module.createModule(e,n,r),i.state=1;var l=t;is_ArrayLike(l)&&1===l.length&&(l=l[0]),i.preproc_(l,function(){i.state=4,i.resolve()})}o[e]=i},createDependency:function(t,e,n,r){return new i(t,e,n,r)},isMask:function(t){var e=path_getExtension(t);return""===e||"mask"===e},cfg:function(e,n){switch(e){case"base":t=n}},resolveLocation:e}}();var Define;!function(){function t(t,e){for(var n,r,i=[],l={template:i,location:o(e),meta:{template:"merge"},renderStart:function(){Compo.prototype.renderStart.apply(this,arguments),this.nodes===this.template&&(this.nodes=mask_merge(this.nodes,[],this))},getHandler:null},s=null==t?0:t.length,u=0;s>u;u++)if(n=t[u],null!=n)if(r=n.tagName,"function"!==r)if("slot"!==r&&"event"!==r)i.push(n);else{var a=r+"s",c=l[a];null==c&&(c=l[a]={}),c[n.name]=n.fn}else l[n.name]=n.fn;return l}function e(t,e,r){var o=[];if(null==t)return o;for(var i,l=t.length,s=-1;++s<l;)if(i=t[s],i.compo){var u=n(i.compo,r);if(null!=u){o.unshift(u);continue}var a=ExpressionUtil.eval(i.compo,e,null,r);if(null!=a){o.unshift(a);continue}log_error("Nor component, nor scoped data is resolved:",i.compo)}else;return o}function n(t,e){for(;null!=e;){if(e.getHandler){var n=e.getHandler(t);if(null!=n)return n}e=e.parent}return custom_Tags[t]}function r(n,r,o){var i=(n.name,t(n.nodes,o)),l=e(n["extends"],r,o);return l.push(i),Compo.apply(null,l)}function o(t){for(;null!=t;){if(t.location)return t.location;if(t.resource&&t.resource.location)return t.resource.location;t=t.parent}return null}Define={create:function(t,e,n){return r(t,e,n)}}}();var mask_TreeWalker;!function(){function t(t){return Dom.FRAGMENT===n(t)}function e(t){var e=t.nodes;return null==e?null:is_Array(e)?e:t.nodes=[e]}function n(t){var e=t.type;return null!=e?e:is_Array(t)?Dom.FRAGMENT:null!=t.tagName?Dom.NODE:null!=t.content?Dom.TEXTNODE:Dom.NODE}function r(e){if("string"==typeof e&&(e=parser_parse(e)),t(e)===!1){var n=new Dom.Fragment;n.appendChild(e),e=n}return e}mask_TreeWalker={walk:function(t,e){return t=r(t),new o(t,e),t},walkAsync:function(t,e,n){t=r(t),new i(t,e,n)}};var o;!function(){function n(r,o,i,u){if(null!=r){var a,c=!0;t(r)!==!0&&(a=o(r)),void 0!==a&&(a=new l(a),a.process(new s(r,i,u)),c=a.deep);var f=e(r);if(null!=f&&c!==!1)for(var h,p=f.length,d=0;p>d;d++)h=f[d],n(h,o,r,d)}}o=function(t,e){n(t,e)}}();var i;!function(){i=function(t,e,n){this.stack=[],this.done=n,this.root=t,this.fn=e,this.process=this.process.bind(this),this.visit(this.push(t))},i.prototype={current:function(){return this.stack[this.stack.length-1]},push:function(t,e,n){var r=new s(t,e,n);return this.stack.push(r),r},pop:function(){return this.stack.pop()},getNext:function(t){var n=this.current(),r=n.node,o=e(r);if(null==r)throw Error("Node is null");if(null!=o&&t!==!1&&0!==o.length){if(null==o[0])throw logger.log(r.tagName),Error("IS NULL");return this.push(o[0],r,0)}for(var i,l;0!==this.stack.length;)if(n=this.pop(),i=n.parent,l=n.index,null!=i){if(++l<i.nodes.length)return this.push(i.nodes[l],i,l)}else this.pop();return null},process:function(t){var e=!0;void 0!==t&&(t=new l(t),t.process(this.current()),e=t.deep);var n=this.getNext(e);return null==n?void this.done(this.root):void this.visit(n)},visit:function(e){var n=e.node;return t(n)===!1?void this.fn(n,this.process):void this.process()},fn:null,done:null,stack:null}}();var l;!function(){l=function(t){for(var e in t)this[e]=t[e]},l.prototype={deep:!0,replace:null,process:function(t){return null!=this.replace?(this.deep=!1,void(t.parent.nodes[t.index]=this.replace)):void 0}}}();var s=function(t,e,n){this.node=t,this.index=n,this.parent=e}}();var Mask;!function(){Mask={render:function(t,e,n,r,o){null!=r&&"function"!=typeof r.appendChild&&log_error(".render(template[, model, ctx, container, controller]","Container should implement .appendChild method");var i=t;return"string"==typeof t&&(i=_Object_hasOwnProp.call(__templates,t)?__templates[t]:__templates[t]=parser_parse(t)),(null==n||n.constructor!==builder_Ctx)&&(n=new builder_Ctx(n)),builder_build(i,e,n,r,o)},renderAsync:function(t,e,n,r,o){(null==n||n.constructor!==builder_Ctx)&&(n=new builder_Ctx(n));var i=mask.render(t,e,n,r,o),l=new class_Dfr;return n.async===!0?n.done(function(){l.resolve(i)}):l.resolve(i),l},compile:parser_parse,parse:parser_parse,stringify:mask_stringify,build:builder_build,run:mask_run,merge:mask_merge,optimize:mask_optimize,registerOptimizer:function(t,e){custom_Optimizers[t]=e},registerHandler:customTag_register,getHandler:function(t){return null!=t?custom_Tags[t]:custom_Tags},registerStatement:function(t,e){custom_Statements[t]=is_Function(e)?{render:e}:e},getStatement:function(t){return null!=t?custom_Statements[t]:custom_Statements},registerAttrHandler:function(t,e,n){is_Function(e)&&(n=e),custom_Attributes[t]=n},getAttrHandler:function(t){return null!=t?custom_Attributes[t]:custom_Attributes},registerUtil:customUtil_register,getUtil:customUtil_get,$utils:customUtil_$utils,registerUtility:function(t,e){log_warn("@registerUtility - deprecated - use registerUtil(utilName, mix)",t),this.registerUtility=this.registerUtil,this.registerUtility(t,e)},getUtility:function(t){return log_warn("@getUtility - deprecated - use getUtil(utilName)",t),this.getUtility=this.getUtil,this.getUtility()},clearCache:function(t){"string"==typeof t?delete __templates[t]:__templates={}},Utils:{Expression:ExpressionUtil,getProperty:function(t,e){return log_warn("mask.getProperty is deprecated. Use `mask.obj.get`"),obj_getProperty(t,e)},ensureTmplFn:parser_ensureTemplateFunction},Dom:Dom,TreeWalker:mask_TreeWalker,plugin:function(source){eval(source)},obj:{get:obj_getProperty,set:obj_setProperty,extend:obj_extend},is:{Function:is_Function,String:is_String,ArrayLike:is_ArrayLike,Array:is_ArrayLike,Object:is_Object,NODE:is_NODE,DOM:is_DOM},"class":{create:class_create,Deferred:class_Dfr},parser:{ObjectLexer:parser_ObjectLexer},on:listeners_on,off:listeners_off,delegateReload:function(){},setInterpolationQuotes:parser_setInterpolationQuotes,setCompoIndex:function(t){builder_componentID=t},cfg:function(){var t=arguments;if(0===t.length)return __cfg;var e;if(2===t.length)return e=t[0],void(__cfg[e]=t[1]);var n=t[0];if("object"==typeof n)for(e in n)__cfg[e]=n[e]},toHtml:function(t){return $(t).outerHtml()},factory:function(t){var e=_Array_slice.call(arguments,1),n=e.pop(),r="both";if(0!==e.length){var o=e[0];("client"===o||"server"===o)&&(r=o)}return"client"===r&&is_NODE||"server"===r&&is_DOM?void mask.registerHandler(t,{meta:{mode:r}}):void n(global,Compo.config.getDOMLibrary(),function(e){mask.registerHandler(t,e)})}};var __templates={}}();var Compo=exports.Compo=function(mask){function domLib_initialize(){null!=domLib&&null!=domLib.fn&&(domLib.fn.compo=function(t){if(0===this.length)return null;var e=Anchor.resolveCompo(this[0],!0);return null==t?e:find_findSingle(e,selector_parse(t,Dom.CONTROLLER,"up"))},domLib.fn.model=function(t){var e=this.compo(t);if(null==e)return null;for(var n=e.model;null==n&&e.parent;)e=e.parent,n=e.model;return n},function(){var t=["append","prepend","before","after"];["appendMask","prependMask","beforeMask","afterMask"].forEach(function(e,n){domLib.fn[e]=function(r,o,i,l){if(0===this.length)return log_warn("<jcompo> $.",e,"- no element was selected(found)"),this;this.length>1&&log_warn("<jcompo> $.",e," can insert only to one element. Fix is comming ..."),null==i&&(i=2>n?this.compo():this.parent().compo());var s=!1;null==i&&(i={},s=!0),null==i.components&&(i.components=[]);for(var u=i.components,a=u.length,c=mask.render(r,o,l,null,i),f=this[t[n]](c),h=u.length;h>a;a++)Compo.signal.emitIn(u[a],"domInsert");return s&&0!==h&&(log_warn("$.",e,"- parent controller was not found in Elements DOM.","This can lead to memory leaks."),log_warn("Specify the controller directly, via $.",e,"(template[, model, controller, ctx])")),f}})}(),function(){function t(t,e){node_tryDispose(e)}function e(t,e){node_tryDisposeChildren(e)}var n=domLib.fn.remove,r=domLib.fn.empty;domLib.fn.removeAndDispose=function(){return this.each(t),n.call(this)},domLib.fn.emptyAndDispose=function(){return this.each(e),r.call(this)}}())}function SlotHandler(){}var Dom=mask.Dom,_mask_ensureTmplFnOrig=mask.Utils.ensureTmplFn,_mask_ensureTmplFn,_resolve_External,domLib,Class;!function(){function t(){for(var t,e=arguments.length;--e>-1;)if(t=_resolve_External(arguments[e]),null!=t)return t;return null}_mask_ensureTmplFn=function(t){return"string"!=typeof t?t:_mask_ensureTmplFnOrig(t)},_resolve_External=function(t){return e[t]||r[t]||n[t]};var e=global,n=global.atma||{},r=exports||{};domLib=t("jQuery","Zepto","$"),Class=t("Class")}(),null!=global.document&&null==domLib&&log_warn("DomLite is used. You can set jQuery-Zepto-Kimbo via `Compo.config.setDOMLibrary($)`");var selector_parse,selector_match;!function(){function t(t){return function(n){return e(n,t)}}function e(t,n,r){if("string"!=typeof t)return!1;if(null==r&&(r=0),r=t.indexOf(n,r),-1===r)return!1;if(r>0&&t.charCodeAt(r-1)>32)return e(t,n,r+1);var o=t.length,i=n.length;return o-i>r&&t.charCodeAt(r+i)>32?e(t,n,r+1):!0}selector_parse=function(e,n,r){if(null==e&&log_error("<compo>selector is undefined",n),"object"==typeof e)return e;var o,i,l;if(null==o)switch(e[0]){case"#":o="id",e=e.substring(1),i="attr";break;case".":o="class",e=t(e.substring(1)),i="attr";break;default:o=n===Dom.SET?"tagName":"compoName"}return l="up"===r?"parent":n===Dom.SET?"nodes":"components",{key:o,prop:i,selector:e,nextKey:l}},selector_match=function(t,e,n){if(null==t)return!1;is_String(e)&&(null==n&&(n=Dom[t.compoName?"CONTROLLER":"SET"]),e=selector_parse(e,n));var r=e.prop?t[e.prop]:t;return null==r?!1:is_Function(e.selector)?e.selector(r[e.key]):null!=e.selector.test?e.selector.test(r[e.key]):r[e.key]==e.selector}}();var find_findSingle,find_findAll;!function(){find_findSingle=function(t,e){if(null==t)return null;if(is_Array(t)){for(var n,r=t.length,o=0;r>o;o++)if(n=find_findSingle(t[o],e),null!=n)return n;return null}return selector_match(t,e)?t:(t=t[e.nextKey],null==t?null:find_findSingle(t,e))},find_findAll=function(t,e,n){if(null==n&&(n=[]),is_Array(t)){for(var r=t.length,o=0;r>o;o++)find_findAll(t[o],e,n);return n}return selector_match(t,e)&&n.push(t),t=t[e.nextKey],null==t?n:find_findAll(t,e,n)}}();var dom_addEventListener,node_tryDispose,node_tryDisposeChildren;!function(){dom_addEventListener=function(t,e,n,r,o){return TouchHandler.supports(e)?void TouchHandler.on(t,e,n):KeyboardHandler.supports(e,r)?void KeyboardHandler.attach(t,e,r,n,o):null!=domLib?domLib(t).on(e,n):null!=t.addEventListener?t.addEventListener(e,n,!1):void(t.attachEvent&&t.attachEvent("on"+e,n))},node_tryDispose=function(t){if(t.hasAttribute("x-compo-id")){var e=t.getAttribute("x-compo-id"),n=Anchor.getByID(e);if(null!=n){if(null==n.$||1===n.$.length)return compo_dispose(n),void compo_detachChild(n);var r=_Array_indexOf.call(n.$,t);-1!==r&&_Array_splice.call(n.$,r,1)}}node_tryDisposeChildren(t)},node_tryDisposeChildren=function(t){for(var e=t.firstChild;null!=e;)1===e.nodeType&&node_tryDispose(e),e=e.nextSibling}}();var domLib_find,domLib_on;!function(){domLib_find=function(t,e){return t.filter(e).add(t.find(e))},domLib_on=function(t,e,n,r){return null==n?t.on(e,r):(t.on(e,n,r).filter(n).on(e,r),t)}}();var compo_dispose,compo_detachChild,compo_ensureTemplate,compo_ensureAttributes,compo_attachDisposer,compo_removeElements,compo_prepairAsync,compo_errored,compo_meta_prepairAttributeHandler,compo_meta_executeAttributeHandler;!function(){function t(t){var e=t.template;if(null==e){if(e=t.attr.template,null==e)return null;delete t.attr.template}if("object"==typeof e)return e;if(is_String(e)){if(35===e.charCodeAt(0)&&/^#[\w\d_-]+$/.test(e)){var n=document.getElementById(e.substring(1));if(null==n)return log_warn("Template not found by id:",e),null;e=n.innerHTML}return mask.parse(e)}return log_warn("Invalid template",typeof e),null}compo_dispose=function(t){null!=t.dispose&&t.dispose(),Anchor.removeCompo(t);var e=t.components;if(null!=e)for(var n=e.length;--n>-1;)compo_dispose(e[n])},compo_detachChild=function(t){var e=t.parent;if(null!=e){var n,r=t.$,o=e.$||e.elements;if(o&&r){var i,l,s=r.length;for(n=o.length;--n>-1;)for(i=o[n],l=s;--l>-1;)if(i===r[l]){o.splice(n,1);break}}var u=e.components;if(null!=u){for(n=u.length;--n>-1;)if(u[n]===t){u.splice(n,1);break}-1===n&&log_warn("<compo:remove> - i`m not in parents collection",t)}}},compo_ensureTemplate=function(e){if(null==e.nodes)return void(e.nodes=t(e));var n=e.meta.template;if(null!=n&&"replace"!==n){var r=t(e);if(null!=r)return"merge"===n?void(e.nodes=mask_merge(r,e.nodes,e)):"join"===n?void(e.nodes=[r,e.nodes]):void log_error("Invalid meta.nodes behaviour",n)}},compo_attachDisposer=function(t,e){if(null==t.dispose)return void(t.dispose=e);var n=t.dispose;t.dispose=function(){e.call(this),n.call(this)}},compo_removeElements=function(t){if(t.$)return void t.$.remove();var e=t.elements;if(e)for(var n=-1,r=e.length;++n<r;)e[n].parentNode&&e[n].parentNode.removeChild(e[n]);else{var o=t.components;if(o)for(var n=-1,r=o.length;++n<r;)compo_removeElements(o[n])}},compo_prepairAsync=function(t,e,n){var r=Compo.pause(e,n);t.then(r,function(t){compo_errored(e,t),r()})},compo_errored=function(t,e){t.nodes=mask.parse('.-mask-compo-errored > "~[.]"'),t.model=e.message||String(e),t.renderEnd=fn_doNothing},function(){function t(t){return function(e,n){var o,i,l,s,u=e.attr;for(o in t)if(i=t[o],l=u[o],s=i(e,l,n),null!=s)return r(e,s,o,l),!1;return!0}}function e(t,e,r,l){var s=63===e.charCodeAt(0),u=null,a=s?e.substring(1):e,c=a.replace(/-(\w)/g,n),f=r;return"string"==typeof r?f=o[r]:r instanceof RegExp?f=i.regexp(r):"function"==typeof r?f=r:null==r?f=i.any():"object"==typeof r&&(f=i.options(r),u=r["default"]),null==f?void log_error("Function expected for the attr. handler",e):(t[c]=null,t=null,void(l[a]=function(t,e,n){if(null==e)return s===!1?Error("Expected"):(null!=u&&(t[c]=u),null);var r=f.call(t,e,t,n,a);return r instanceof Error?r:(t[c]=r,null)}))}function n(t,e){return e.toUpperCase()}function r(t,e,n,r){e.message=t.compoName+" - attribute `"+n+"`: "+e.message,compo_errored(t,e),log_error(e.message,". Current: ",r)}compo_meta_prepairAttributeHandler=function(n){null==n.meta&&(n.meta={attributes:null,cache:null,mode:null});var r=n.meta.attributes,o=null;if(r){var i={};for(var l in r)e(n,l,r[l],i);o=t(i)}n.meta.handleAttributes=o},compo_meta_executeAttributeHandler=function(t,e){var n=t.meta&&t.meta.handleAttributes;return null==n?!0:n(t,e)};var o={string:function(t){return"string"==typeof t?t:Error("String")},number:function(t){var e=Number(t);return e===e?e:Error("Number")},"boolean":function(t,e,n,r){return"boolean"==typeof t?t:t===r?!0:"true"===t||"1"===t?!0:"false"===t||"0"===t?!1:Error("Boolean")}},i={regexp:function(t){return function(e){return t.test(e)?e:Error("RegExp")}},any:function(){return function(t){return t}},options:function(t){var e=t.type||"string",n=t.default||l[e];return function(t){if(!t)return n;var r=o[e];return null!=r?r.apply(this,arguments):t}}},l={string:"","boolean":!1,number:0}}()}();var compo_create,compo_createConstructor;!function(){compo_create=function(t){var e,n,r=t.length,o=t[r-1];r>1&&compo_inherit(o,_Array_slice.call(t,0,r-1)),null==o&&(o={});var i=_resolve_External("include");null!=i&&(o.__resource=i.url);o.attr;for(n in o.attr)o.attr[n]=_mask_ensureTmplFn(o.attr[n]);var l=o.slots;for(n in l)"string"==typeof l[n]&&(is_Function(o[l[n]])===!1&&log_error("Not a Function @Slot.",l[n]),l[n]=o[l[n]]);compo_meta_prepairAttributeHandler(o),e=o.hasOwnProperty("constructor")?o.constructor:function(){},e=compo_createConstructor(e,o);for(n in CompoProto)null==o[n]&&(o[n]=CompoProto[n]);return e.prototype=o,o=null,e},compo_createConstructor=function(t,e){var n=e.compos,r=e.pipes,o=e.scope,i=e.attr;return null==n&&null==r&&null==i&&null==o?t:function(e,l,s,u,a){if(null!=t){var c=t.call(this,e,l,s,u,a);if(null!=c)return c}null!=n&&(this.compos=obj_create(this.compos)),null!=r&&Pipes.addController(this),null!=i&&(this.attr=obj_create(this.attr)),null!=o&&(this.scope=obj_create(this.scope))}}}();var compo_inherit;!function(){function t(o,i,l){if(null!=o&&null!=i){if("node"===l){var s=o.template||o.nodes,u=i.template||i.nodes;o.template=null==s||null==u?s||u:mask_merge(u,s,o),null!=o.nodes&&(o.nodes=o.template)}var a,c,f,h=!1;for(var p in i)if(a=i[p],null!=a&&"constructor"!==p&&("node"!==l||"template"!==p&&"nodes"!==p))if(c=typeof a,null!=o[p]){if("node"===l){var d="renderStart"===p||"renderEnd"===p||"emitIn"===p||"emitOut"===p||"components"===p||"nodes"===p||"template"===p||"find"===p||"closest"===p||"on"===p||"remove"===p||"slotState"===p||"signalState"===p||"append"===p||"appendTo"===p;if(d===!0)continue}if("pipes"!==l)if("function"!==c){if("object"===c){switch(p){case"slots":case"pipes":case"events":case"attr":t(o[p],a,p);continue}n(o[p],a)}}else f=!1,"slots"===l||"events"===l||"pipe"===l?f=!0:"node"!==l||"onRenderStart"!==p&&"onRenderEnd"!==p||(f=!0),o[p]=r(o[p],a,f),h=!0;else t(o[p],a,"pipe")}else o[p]="object"===c?e(a):a;h===!0&&(null!=o.super&&log_error("`super` property is reserved. Dismissed. Current prototype",o),o.super=null)}}/*! Circular references are not handled */
function e(t){if(null==t)return null;if("object"!=typeof t)return t;if(is_Array(t)){for(var n=t.length,r=-1,o=new Array(n);++r<n;)o[r]=e(t[r]);return o}var i,l,s=obj_create(t);for(i in s)l=s[i],null!=l&&"object"==typeof l&&(s[i]=e(l));return s}function n(t,e){var r,o,i;for(var i in e)r=t[i],o=e[i],null!=r?is_rawObject(r)&&is_rawObject(o)&&n(r,o):t[i]=o}function r(t,e,n){function r(){var t=s._fn||(s._fn=l(s._fn_chain));return t.apply(this,arguments)}if("compoInheritanceWrapper"===t.name)return t._fn_chain.push(e),t;var l=n===!0?i:o,s=r;return s._fn_chain=[t,e],s._fn=null,s}function o(t){for(var e=t.length,n=t[--e];--e>-1;)n=l(t[e],n);return n}function i(t){var e=t.length;return function(){for(var n,r,o,i=e;--i>-1;)r=t[i],null!=r&&(o=fn_apply(r,this,arguments),void 0!==o&&(n=o));return n}}function l(t,e){return function(){this.super=e;var n=fn_apply(t,this,arguments);return this.super=null,n}}function s(t){var e=t.length;return function(){for(var n,r=e;--r>-1;){var o=t[r].apply(this,arguments);null!=o&&(n=o)}return n}}compo_inherit=function(e,n){for(var r,o=n.length,i=o,l=[];--i>-1;)r=n[i],"string"==typeof r&&(r=Mask.getHandler(r)),null!=r?("function"==typeof r&&(l.push(r),r=r.prototype),t(e,r,"node")):log_error("Base component not defined",n[i]);i=-1,o=l.length,o>0&&(e.hasOwnProperty("constructor")&&l.unshift(e.constructor),e.constructor=s(l));var u=e.meta;null==u&&(u=e.meta={}),null==u.template&&(u.template="merge")}}();var dfr_isBusy;!function(){dfr_isBusy=function(t){return null==t||"function"!=typeof t.then?!1:is_Function(t.isBusy)?t.isBusy():is_Function(t.state)?"pending"===t.state():(log_warn("Class or jQuery deferred interface expected"),!1)}}();var Children_={select:function(t,e){for(var n in e){var r=e[n],o=null,i=null;if(r instanceof Array&&(i=r[0],o=r.splice(1)),"string"==typeof r&&(i=r),null==r||null==i)return log_error("Unknown component child",n,e[n]),void log_warn("Is this object shared within multiple compo classes? Define it in constructor!");var l=i.indexOf(":"),s=i.substring(0,l);s=Compo.config.selectors[s],null==s?t.compos[n]=t.$[0].querySelector(i):(i=i.substring(++l).trim(),t.compos[n]=s(t,i));var u=t.compos[n];null!=o&&(null!=u.$&&(u=u.$),Events_.on(t,o,u))}}},Events_={on:function(t,e,n){null==n&&(n=t.$);for(var r,o=e instanceof Array,i=o?e.length:1,l=0;o?i>l:1>l;l++)if(r=o?e[l]:e,r instanceof Array)null!=EventDecorator&&(r[0]=EventDecorator(r[0])),n.on.apply(n,r);else for(var s in r){var u,a,c="string"==typeof r[s]?t[r[s]]:r[s],f=s.indexOf(":");-1!==f?(u=s.substring(0,f),a=s.substring(f+1).trim()):u=s,null!=EventDecorator&&(u=EventDecorator(u)),domLib_on(n,u,a,fn_proxy(c,t))}}},EventDecorator=null,EventDecos=function(){var t=function(){if(null==document)return!1;if("createTouch"in document)return!0;try{return!!document.createEvent("TouchEvent").initTouchEvent}catch(t){return!1}}();return{touch:function(e){return t===!1?e:"click"===e?"touchend":"mousedown"===e?"touchstart":"mouseup"===e?"touchend":"mousemove"===e?"touchmove":e}}}(),Pipes=function(){function t(t,e){return function(n){new i(t).emit(e,n)}}function e(t,e){return null==e.pipes[t]?void log_error("Controller has no pipes to be added to collection",t,e):(null==l[t]&&(l[t]=[]),void l[t].push(e))}function n(t,e){for(var n=l[t],r=n.length;--r>-1;)n[r]===e&&n.splice(r,1)}function r(){var t=this,e=t.pipes;for(var r in e)n(r,t)}function o(t){var n=t.pipes;if(null==n)return void log_error("Controller has no pipes",t);for(var o in n)e(o,t);Compo.attachDisposer(t,r.bind(t))}function i(t){return this instanceof i==!1?new i(t):(this.pipeName=t,this)}var l={};return mask.registerAttrHandler("x-pipe-signal","client",function(e,n,r,o,i){for(var l,s=n.split(";"),u=s.length,a=-1;++a<u;)if(l=s[a].trim(),""!==l){var c,f,h=l.indexOf(":"),p=l.substring(0,h),d=l.substring(h+1).trim(),g=d.indexOf(".");if(-1===g)return void log_error('define pipeName "click: pipeName.pipeSignal"');c=d.substring(0,g),f=d.substring(++g);var m=t(c,f);!p&&log_error("Signal: event type is not set",n),dom_addEventListener(i,p,m)}}),i.prototype={constructor:i,emit:function(t){var e,n=l[this.pipeName],r=this.pipeName;if(null==n)return void log_warn("Pipe.emit: No signals were bound to:",r);2===arguments.length&&is_Array(arguments[1])?e=arguments[1]:arguments.length>1&&(e=_Array_slice.call(arguments,1));for(var o,i,s,u,a=n.length;-1!==--a;)o=n[a],i=o.pipes[r],null!=i&&(s=i[t],is_Function(s)&&(s.apply(o,e),u=!0));u||log_warn("Pipe `%s` has not slots for `%s`",r,t)}},i.addController=o,i.removeController=r,{addController:o,removeController:r,pipe:i}}(),KeyboardHandler;!function(){var t,e,n;!function(){t=function(t,e,n){t.addEventListener(e,n,!1)},e=function(t,e,n){t.removeEventListener(e,n,!1)},n=function(t){var e=t.keyCode||t.which;return e>=96&&105>=e?e-48:e}}();var r,o,i;r={backspace:8,tab:9,"return":13,enter:13,shift:16,ctrl:17,control:17,alt:18,option:18,fn:255,pause:19,capslock:20,esc:27,space:32,pageup:33,pagedown:34,end:35,home:36,start:36,left:37,up:38,right:39,down:40,insert:45,ins:45,del:46,numlock:144,scroll:145,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,";":186,"=":187,"*":106,"+":107,"-":189,".":190,"/":191,",":188,"`":192,"[":219,"\\":220,"]":221,"'":222},o={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"},i={16:"shiftKey",17:"ctrlKey",18:"altKey"};var l,s,u,a;!function(){s=function(t){return t.ctrlKey||t.altKey?!1:l(t.target)},u=function(t){return null==t.$||0===t.$.length?!1:a(t.$.get(0))},a=function(t){if(document.contains(t)===!1)return!1;if("none"===t.style.display)return!1;var e=t.disabled;return e===!0?!1:!0},l=function(e){var n=e.tagName;return"TEXTAREA"===n?!0:"INPUT"!==n?!1:-1===t.indexOf(" "+e.type+" ")};var t=" button submit checkbox file hidden image radio range reset "}();var c;!function(){function e(){r=new _,t(window,"keydown",c),t(window,"keyup",c),t(window,"focus",c.reset)}c={on:function(t,n,o){null==r&&e();var i=f.create(t,"keydown",n,o);r.attach(i)},off:function(t){r.off(t)},handleEvent:function(t){r.handle(t.type,n(t),t)},reset:function(){r.reset()}};var r}();var f;!function(){function t(t){for(var e,n,o=t.split("+"),i=o.length,l=0,s=[];i>l;l++){if(e=o[l].trim(),n=r[e],void 0===n){if(1!==e.length)throw Error("Unexpected sequence. Use `+` sign to define the sequence:"+e);n=e.toUpperCase().charCodeAt(0)}s[l]=n}return{last:s[i-1],keys:s.sort()}}f=function(t){this.set=t},f.parse=function(e){for(var n=e.split(","),r=[],o=n.length,i=0;o>i;i++)r[i]=t(n[i]);return r},f.create=function(t,e,n,r){var o=f.parse(t),i=h.create(o);return null==i&&(i=new p(o)),i.init(e,n,r),i},f.prototype={type:null,ctx:null,set:null,fn:null,init:function(t,e,n){this.type=t,this.ctx=n,this.fn=e},tryCall:null}}();var h;!function(){h=class_create(f,{constructor:function(t,e,n){this.key=e,this.mods=n},tryCall:function(t,e,n){if(t.type!==this.type||n!==this.key)return g;for(var r in this.mods)if(t[r]!==this.mods[r])return g;return this.fn.call(this.ctx,t),d}}),h.create=function(t){if(1!==t.length)return null;for(var e,n,r=t[0].keys,o=r.length,l={shiftKey:!1,ctrlKey:!1,altKey:!1};--o>-1;)if(i.hasOwnProperty(r[o])!==!1)l[i[r[o]]]=!0,n=!0;else{if(null!=e)return null;e=r[o]}return new h(t,e,l)}}();var p,d=1,g=2,m=3,v=4;!function(){p=class_create(f,{index:0,tryCall:function(t,e,n){var r=this.check_(e,n);return r===d&&(this.index=0,this.fn.call(this.ctx,t)),r},fail_:function(){return this.index=0,g},check_:function(t,e){var n=this.set[this.index],r=n.keys,o=n.last,i=t.length;if(i<r.length)return m;if(i>r.length)return this.fail_();if(o!==e)return this.fail_();for(;--i>-1;)if(r[i]!==t[i])return this.fail_();return this.index<this.set.length-1?(this.index++,v):(this.index=0,d)}})}();var _;!function(){_=function(){this.keys=[],this.combs=[]},_.prototype={keys:null,combs:null,attach:function(t){this.combs.push(t)},off:function(t){for(var e=this.combs.length,n=0;e>n;n++)if(this.combs[n].fn===t)return this.combs.splice(n,1),!0;return!1},handle:function(t,e,n){return 0===this.combs.length||this.filter_(n,e)?void 0:"keydown"===t?void(this.add_(e)&&this.emit_(t,n,e)):void("keyup"===t&&(this.emit_(t,n,e),this.remove_(e)))},handleEvent:function(t){var e=n(t),r=t.type;this.handle(r,e,t)},reset:function(){this.keys.length=0},add_:function(t){for(var e,n=this.keys.length,r=0;n>r;r++){if(e=this.keys[r],e===t)return!1;if(e>t)return this.keys.splice(r,0,t),!0}return this.keys.push(t),!0},remove_:function(t){for(var e=this.keys.length;--e>-1;)if(this.keys[e]===t)return void this.keys.splice(e,1)},emit_:function(t,e,n){for(var r,o,i=!1,l=this.combs,s=l.length,u=0;s>u;u++)r=l[u],r.type===t&&(o=r.tryCall(e,this.keys,n),(d===o||o===v)&&e.preventDefault(),(o===m||o===v)&&(i=!0))},filter_:function(t,e){return s(t,e)}}}(),KeyboardHandler={supports:function(t,e){if(null==e)return!1;switch(t){case"press":case"keypress":case"keydown":case"keyup":case"hotkey":case"shortcut":return!0}return!1},on:function(e,r,o,i){("keypress"===r||"press"===r)&&(r="keydown");var l=f.create(o,r,i);if(l instanceof h)return void t(e,r,function(t){var e=n(t),r=l.tryCall(t,null,e);r===d&&t.preventDefault()});var s=new _;t(e,"keydown",s),t(e,"keyup",s),s.attach(l)},hotkeys:function(t,e){var n,r;for(r in e)n=e[r],c.on(r,n,t);compo_attachDisposer(t,function(){var t;for(t in e)c.off(e[t])})},attach:function(t,e,n,r,o){l(t)&&this.on(t,e,n,r);for(var i=o;i&&null==i.slots;)i=i.parent;if(null==i)return void log_error("Slot-component not found:",n);var s=i.hotkeys;null==s&&(s=i.hotkeys={}),s[n]=r}}}();var TouchHandler;!function(){var t,e,n,r;!function(){r="ontouchstart"in global,t=function(t,e,n){t.addEventListener(e,n,!1)},e=function(t,e,n){t.removeEventListener(e,n,!1)},n=function(t,e){var n=new CustomEvent(e,{cancelable:!0,bubbles:!0});t.dispatchEvent(n)}}();var o;!function(){function e(t){var e=null,r=t.changedTouches;return r&&r.length&&(e=r[0]),null==e&&t.touches&&(e=t.touches[0]),null==e?t:n(t,e)}function n(t,e){var n=Object.create(MouseEvent.prototype);for(var r in t)n[r]=t[r];for(var r in l)n[r]=e[r];return new MouseEvent(i[t.type],n)}o=function(e,n,o){this.el=e,this.fn=o,this.dismiss=0,t(e,n,this),t(e,r[n],this)};var r={mousemove:"touchmove",mousedown:"touchstart",mouseup:"touchend"},i={touchmove:"mousemove",touchstart:"mousedown",touchup:"mouseup"};o.prototype={handleEvent:function(t){switch(t.type){case"touchstart":case"touchmove":case"touchend":this.dismiss++,t=e(t),this.fn(t);break;case"mousedown":case"mousemove":case"mouseup":--this.dismiss<0&&(this.dismiss=0,this.fn(t))}}};var l={clientX:1,clientY:1,pageX:1,pageY:1,screenX:1,screenY:1}}();var i;!function(){i=function(e,n){this.state=0,this.el=e,this.fn=n,this.startX=0,this.startY=0,this.tStart=0,this.tEnd=0,this.dismiss=0,t(e,"touchstart",this),t(e,"touchend",this),t(e,"click",this)};var r=300,o=10;i.prototype={handleEvent:function(t){switch(t.type){case"touchmove":this.touchmove(t);break;case"touchstart":this.touchstart(t);break;case"touchend":this.touchend(t);break;case"touchcancel":this.reset();break;case"click":this.click(t)}},touchstart:function(e){t(document.body,"touchmove",this);var n=e.touches[0];this.state=1,this.tStart=e.timeStamp,this.startX=n.clientX,this.startY=n.clientY},touchend:function(t){return this.tEnd=t.timeStamp,1===this.state?(this.dismiss++,this.tEnd-this.tStart<=r?void this.call(t):void n(this.el,"taphold")):void this.reset()},click:function(t){if(!(--this.dismiss>-1)){var e=t.timeStamp-this.tEnd;400>e||(this.dismiss=0,this.call(t))}},touchmove:function(t){var e=t.touches[0],n=e.clientX-this.startX;if(0>n&&(n*=-1),n>o)return void this.reset();var r=e.clientY-this.startY;return 0>r&&(r*=-1),r>o?void this.reset():void 0},reset:function(){this.state=0,e(document.body,"touchmove",this)},call:function(t){this.reset(),this.fn(t)}}}(),TouchHandler={supports:function(t){if(r===!1)return!1;switch(t){case"click":case"mousedown":case"mouseup":case"mousemove":return!0}return!1},on:function(t,e,n){return"click"===e?new i(t,n):new o(t,e,n)}}}();var Anchor;!function(){Anchor={create:function(e){var n=e.ID;return null==n?void log_warn("Component should have an ID"):void(t[n]=e)},resolveCompo:function(e,n){if(null==e)return null;var r,o,i;do{if(o=e.getAttribute("x-compo-id"),null!=o&&(null==r&&(r=o),i=t[o],null!=i&&(i=Compo.find(i,{key:"ID",selector:r,nextKey:"components"}),null!=i)))return i;e=e.parentNode}while(null!=e&&1===e.nodeType);return r&&n!==!0&&log_warn("No controller for ID",r),null},removeCompo:function(e){var n=e.ID;null!=n&&(t[n]=void 0)},getByID:function(e){return t[e]}};var t={}}();var Compo,CompoProto;!function(){Compo=function(){return this instanceof Compo?void 0:compo_create(arguments)},obj_extend(Compo,{create:function(){return compo_create(arguments)},createClass:function(){var t=compo_create(arguments),e=t.prototype;return e.Construct=t,Class(e)},initialize:function(t,e,n,r,o){function i(t){l={controller:t,type:Dom.COMPONENT}}if(null==t)throw Error("Undefined is not a component");null==r&&(n&&null!=n.nodeType?(r=n,n=null):e&&null!=e.nodeType&&(r=e,e=null));var l;if("string"==typeof t)if(/^[^\s]+$/.test(t)){var s=mask.getHandler(t);if(null==s)throw Error("Component not found: "+t);i(s)}else i(Compo({template:t}));else"function"==typeof t&&i(t);null==o&&null!=r&&(o=Anchor.resolveCompo(r)),null==o&&(o=new Compo);var u=mask.render(l,e,n,null,o),a=o.components[o.components.length-1];return null!=r&&(r.appendChild(u),Compo.signal.emitIn(a,"domInsert")),a},find:function(t,e){return find_findSingle(t,selector_parse(e,Dom.CONTROLLER,"down"))},closest:function(t,e){return find_findSingle(t,selector_parse(e,Dom.CONTROLLER,"up"))},dispose:compo_dispose,ensureTemplate:compo_ensureTemplate,attachDisposer:compo_attachDisposer,config:{selectors:{$:function(t,e){var n=domLib_find(t.$,e);return 0===n.length&&log_warn("<compo-selector> - element not found -",e,t),n},compo:function(t,e){var n=Compo.find(t,e);return null==n&&log_warn("<compo-selector> - component not found -",e,t),n}},setDOMLibrary:function(t){domLib!==t&&(domLib=t,domLib_initialize())},getDOMLibrary:function(){return domLib},eventDecorator:function(t){return"function"==typeof t?void(EventDecorator=t):"string"==typeof t?(console.error("EventDecorators are not used. Touch&Mouse support is already integrated"),void(EventDecorator=EventDecos[t])):"boolean"==typeof t&&t===!1?void(EventDecorator=null):void 0}},pipe:Pipes.pipe,resource:function(t){for(var e=t;null!=e;){if(e.resource)return e.resource;e=e.parent}return include.instance()},plugin:function(source){eval(source)},Dom:{addEventListener:dom_addEventListener}}),function(){Compo.pause=function(e,n){return null!=n&&(null==n.defers&&(n.defers=[]),null==n.resolve&&obj_extend(n,class_Dfr.prototype),n.async=!0,n.defers.push(e)),obj_extend(e,t),function(){Compo.resume(e,n)}},Compo.resume=function(t,e){if(t.async=!1,t.resume&&t.resume(),null!=e){for(var n,r=!1,o=e.defers,i=o.length,l=-1;++l<i;)n=o[l],n!==t?r=r||null!=n:o[l]=null;r===!1&&e.resolve()}};var t={async:!0,await:function(t){this.resume=t}}}(),CompoProto={type:Dom.CONTROLLER,__resource:null,ID:null,tagName:null,compoName:null,nodes:null,components:null,expression:null,attr:null,model:null,slots:null,pipes:null,compos:null,events:null,hotkeys:null,async:!1,await:null,meta:{mode:null,modelMode:null,attributes:null,serializeNodes:null,handleAttributes:null},onRenderStart:null,onRenderEnd:null,render:null,renderStart:function(t,e,n){if(1===arguments.length&&null!=t&&t instanceof Array==!1&&null!=t[0]){var r=arguments[0];t=r[0],e=r[1],n=r[2]}if(compo_meta_executeAttributeHandler(this,t)!==!1&&(compo_ensureTemplate(this),is_Function(this.onRenderStart))){var o=this.onRenderStart(t,e,n);void 0!==o&&dfr_isBusy(o)&&compo_prepairAsync(o,this,e)}},renderEnd:function(t,e,n,r){if(1===arguments.length&&t instanceof Array==!1){var o=arguments[0];t=o[0],e=o[1],n=o[2],r=o[3]}Anchor.create(this,t),this.$=domLib(t),null!=this.events&&Events_.on(this,this.events),null!=this.compos&&Children_.select(this,this.compos),null!=this.hotkeys&&KeyboardHandler.hotkeys(this,this.hotkeys),is_Function(this.onRenderEnd)&&this.onRenderEnd(t,e,n,r)},appendTo:function(t){var e="string"==typeof t?document.querySelector(t):t;if(null==e)return log_warn("Compo.appendTo: parent is undefined. Args:",arguments),this;for(var n=this.$,r=0,o=n.length;o>r;r++)e.appendChild(n[r]);return this.emitIn("domInsert"),this},append:function(t,e,n){var r;if(null==this.$){var o="string"==typeof t?mask.compile(t):t;return r=n?find_findSingle(this,selector_parse(n,Dom.CONTROLLER,"down")):this,null==r.nodes?(this.nodes=o,this):(r.nodes=[this.nodes,o],this)}var i=mask.render(t,e,null,null,this);return r=n?this.$.find(n):this.$,r.append(i),this.emitIn("domInsert"),this},find:function(t){return find_findSingle(this,selector_parse(t,Dom.CONTROLLER,"down"))},findAll:function(t){return find_findAll(this,selector_parse(t,Dom.CONTROLLER,"down"))},closest:function(t){return find_findSingle(this,selector_parse(t,Dom.CONTROLLER,"up"))},on:function(){var t=_Array_slice.call(arguments);return arguments.length<3?(log_error("Invalid Arguments Exception @use .on(type,selector,fn)"),this):(null!=this.$&&Events_.on(this,[t]),null==this.events?this.events=[t]:is_Array(this.events)?this.events.push(t):this.events=[t,this.events],this)},remove:function(){return compo_removeElements(this),compo_detachChild(this),compo_dispose(this),this.$=null,this},slotState:function(t,e){return Compo.slot.toggle(this,t,e),this},signalState:function(t,e){return Compo.signal.toggle(this,t,e),this},emitOut:function(t){return Compo.signal.emitOut(this,t,this,arguments.length>1?_Array_slice.call(arguments,1):null),this},emitIn:function(t){return Compo.signal.emitIn(this,t,this,arguments.length>1?_Array_slice.call(arguments,1):null),this}},Compo.prototype=CompoProto}(),function(){var t,e;!function(){e=function(t,n,r,o,i){if(null==t)return!1;var l=!1,s=null!=t.slots&&t.slots[n];if("string"==typeof s&&(s=t[s]),"function"==typeof s){l=!0;var u=null!=t.slots.__disabled&&t.slots.__disabled[n];if(u!==!0){var a=null==o?s.call(t,r):s.apply(t,[r].concat(o));if(a===!1)return!0;null!=a&&"object"==typeof a&&null!=a.length&&(o=a)}}if(-1===i&&null!=t.parent)return e(t.parent,n,r,o,i)||l;if(1===i&&null!=t.components)for(var c,f=t.components,h=f.length,p=0;h>p;p++)c=e(f[p],n,r,o,i),!l&&(l=c);return l},t=function(e,n,r,o){if(null==e)return!1;var i=e.slots;if(null!=i&&null!=i[n]&&("string"==typeof i[n]&&(i[n]=e[i[n]]),"function"==typeof i[n])){if(o!==!0)return!0;if(null==i.__disabled||i.__disabled[n]!==!0)return!0}if(-1===r&&null!=e.parent)return t(e.parent,n,r);if(1===r&&null!=e.components)for(var l=0,s=e.components.length;s>l;l++)if(t(e.components[l],n,r))return!0;return!1}}();var n,r;!function(){function e(t,e,n){var r=t.slots;if(null!=r&&r.hasOwnProperty(e)!==!1){var o=r.__disabled;null==o&&(o=r.__disabled={}),o[e]=n===!1}}function o(t,n,r){e(t,n,r);var i=t.components;if(null!=i)for(var l=i.length,s=0;l>s;s++)o(i[s],n,r)}function i(t,e,n){return null==t.$?void log_warn("Controller has no elements to toggle state"):void domLib().add(t.$.filter("[data-signals]")).add(t.$.find("[data-signals]")).each(function(t,r){var o=r.getAttribute("data-signals");null!=o&&-1!==o.indexOf(e)&&r[n===!0?"removeAttribute":"setAttribute"]("disabled","disabled")})}n=function(t,n,r){for(var l=t,s=t;null!=(l=l.parent);)e(l,n,r),null!=l.$&&0!==l.$.length&&(s=l);o(t,n,r),i(s,n,r)},r=function(n,r,o){e(n,r,o),(o||!t(n,r,-1,!0)&&!t(n,r,1,!0))&&i(n,r,o)}}(),function(){function n(t,e){r(t,e||t)}function r(t,e){mask.registerAttrHandler("x-"+t,"client",function(t,n,r,i,l,s){o(l,s,n,e)})}function o(t,e,n,r){for(var o,l,s,u,a,c,f,h,p=n.split(";"),d="",g=p.length,m=-1;++m<g;)o=p[m].trim(),""!==o&&(a=c=f=null,l=o.indexOf(":"),-1!==l&&(a=o.substring(0,l),s=a.indexOf("("),-1!==s&&(c=a.substring(s+1,a.lastIndexOf(")")),a=a.substring(0,s),""===c&&log_error("Not valid signal parameter")),o=o.substring(l+1).trim()),f=o,h=i(e,f),null==r?u=a:(u=r,c=a),u||log_error("Signal: Eventname is not set",p[m]),h?(d+=","+f+",",dom_addEventListener(t,u,h,c,e)):log_warn("Slot not found:",f));if(""!==d){var v=t.getAttribute("data-signals");null!=v&&(d=v+d),t.setAttribute("data-signals",d)}}function i(n,r){return t(n,r,-1)===!1?null:function(t){var o=arguments.length>1?_Array_slice.call(arguments,1):null;e(n,r,t,o,-1)}}r("signal"),n("change"),n("click"),n("tap","click"),n("keypress"),n("keydown"),n("keyup"),n("mousedown"),n("mouseup"),n("press","keydown"),n("shortcut","keydown")}(),obj_extend(Compo,{signal:{toggle:n,emitOut:function(t,n,r,o){var i=e(t,n,r,o,-1);!i&&log_warn("Signal %c%s","font-weight:bold;",n,"was not captured")},emitIn:function(t,n,r,o){e(t,n,r,o,1)},enable:function(t,e){n(t,e,!0)},disable:function(t,e){n(t,e,!1)}},slot:{toggle:r,enable:function(t,e){r(t,e,!0)},disable:function(t,e){r(t,e,!1)},invoke:function(t,e,n,r){var o=t.slots;return null==o||"function"!=typeof o[e]?(log_error("Slot not found",e,t),null):null==r?o[e].call(t,n):o[e].apply(t,[n].concat(r))}}})}();var DomLite;return function(t){function e(t,e,n){if(null==t)return n||t;for(var r=t.length,o=-1;++o<r;)e.call(n||t,t[o],o);return n||t}function n(t,n,r,o){return e(n,function(e,i){t=r.call(o||n,t,n[i],i)}),t}function r(t,e,n){if(null==t)return-1;for(var r=t.length,o=-1;++o<r;)if(e.call(n||t,t[o],o)===!0)return o;return-1}if(null!=t){Compo.DomLite=DomLite=function(t){return this instanceof DomLite==!1?new DomLite(t):this.add(t)},null==domLib&&(domLib=DomLite);var o=DomLite.fn={constructor:DomLite,length:0,add:function(t){if(null==t)return this;if(is_Array(t)===!0)return e(t,this.add,this);var n=t.nodeType;return 11===n?e(t.childNodes,this.add,this):null==n?"number"==typeof t.length?e(t,this.add,this):(log_warn("Uknown domlite object"),this):(this[this.length++]=t,this)},on:function(){return i.call(this,l,u,arguments)},off:function(){return i.call(this,s,a,arguments)},find:function(t){return e(this,function(e){this.add(f.call(e,t))},new DomLite)},filter:function(t){return e(this,function(e){h(e,t)===!0&&this.add(e)},new DomLite)},parent:function(){var t=this[0];return new DomLite(t&&t.parentNode)},children:function(t){var n=e(this,function(t){this.add(t.childNodes)},new DomLite);return null==t?n:n.filter(t)},closest:function(t){for(var e=this[0],n=new DomLite;null!=e&&null!=e.parentNode;)if(e=e.parentNode,h(e,t))return n.add(e);return n},remove:function(){return e(this,function(t){t.parentNode.removeChild(t)})},text:function(t){return 0===arguments.length?n("",this,function(t,e){return t+e.textContent}):e(this,function(e){e.textContent=t})},html:function(t){return 0===arguments.length?n("",this,function(t,e){return t+e.innerHTML}):e(this,function(e){e.innerHTML=t})},val:function(t){return 0===arguments.length?0===this.length?null:this[0].value:(0!==this.length&&(this[0].value=t),this)}};!function(){function t(t,e,n){null!=t&&null!=n&&t.insertBefore(n,e)}function n(e,n,r){var o=null!=n?n.nextSibling:null;t(e,o,r)}var r={append:function(t,e){n(t,t.lastChild,e)},prepend:function(e,n){t(e,e.firstChild,n)},after:function(t,e){n(t.parentNode,t,e)},before:function(e,n){t(e.parentNode,e,n)}};e(["append","prepend","before","after"],function(t){var n=r[t];o[t]=function(t){var r=is_Array(t);return e(this,function(o){return r?void e(t,function(t){n(o,t)}):void n(o,t)})}})}();var i,l,s,u,a,c=t.documentElement,f=c.querySelectorAll,h=function(){var t=c.webkitMatchesSelector||c.mozMatchesSelector||c.msMatchesSelector||c.oMatchesSelector||c.matchesSelector;return function(e,n){return null==e||1!==e.nodeType?!1:t.call(e,n)}}();!function(){function t(t,n,r,o){return e(t,function(t){n.call(t,r,o,!1)})}i=function(t,n,r){var o,i=r.length;return 2===i&&(o=t),3===i&&(o=n),null!=o?e(this,function(t){o.apply(DomLite(t),r)}):(log_error("`DomLite.on|off` - invalid arguments count"),this)},l=function(e,r){return t(this,n,e,r)},s=function(e,n){return t(this,r,e,n)},u=function(t,e,n){function r(t){var r=t.target,o=t.currentTarget;if(o!==r)for(;null!=r&&r!==o;){if(h(r,e))return void n(t);r=r.parentNode}}return(n._guards||(n._guards=[])).push(r),l.call(this,t,r)},a=function(t,n,r){return e(r._quards,function(e){s.call(this,t,e)},this)};var n=c.addEventListener,r=c.removeEventListener}(),function(){var t=null!=c.classList,n=t===!0?function(t,e){return t.classList.contains(e)}:function(t,e){return-1!==(" "+t.className+" ").indexOf(" "+e+" ")};o.hasClass=function(t){return-1!==r(this,function(e){return n(e,t)})};var i;!function(){function t(t,e){t.className+=" "+e}function e(t,e){t.className=(" "+t.className+" ").replace(" "+e+" "," ")}i={add:function(e,r){n(e,r)===!1&&t(e,r)},remove:function(t,r){n(t,r)===!0&&e(t,r)},toggle:function(r,o){var i=n(r,o)===!0?e:t;i(r,o)}}}(),e(["add","remove","toggle"],function(n){var r=t===!1?i[n]:function(t,e){var r=t.classList;r[n].call(r,e)};o[n+"Class"]=function(t){return e(this,function(e){r(e,t)})}})}(),function(){var n=function(e){var n=t.createEvent("Event");return n.initEvent(e,!0,!0),n},r=function(e,r){if(null==r)return n(e);var o=t.createEvent("CustomEvent");return o.initCustomEvent(e,!0,!0,r),o},i=function(t,e){t.dispatchEvent(e)};o.trigger=function(t,n){var o=r(t,n);return e(this,function(t){i(t,o)})}}(),function(){o.attr=function(t,n){return void 0===n?this[0]&&this[0].getAttribute(t):e(this,function(e){e.setAttribute(t,n)})},o.removeAttr=function(t){return e(this,function(e){e.removeAttribute(t)})}}(),Object.setPrototypeOf?Object.setPrototypeOf(o,Array.prototype):o.__proto__&&(o.__proto__=Array.prototype),DomLite.prototype=o,domLib_initialize()}}(global.document),domLib_initialize(),mask.registerHandler(":slot",SlotHandler),SlotHandler.prototype={constructor:SlotHandler,renderEnd:function(){this.slots={},this.expression=this.attr.on,this.slots[this.attr.signal]=this.handle},handle:function(){var t=this.expression;mask.Utils.Expression.eval(t,this.model,global,this)}},Compo}(Mask),jmask=exports.jmask=Mask.jmask=function(t){function e(t){return"string"!=typeof t?t:u(t)}function n(t){return this instanceof n==!1?new n(t):null==t?this:t.type===i.SET?t:this.add(t)}var r,o,i=t.Dom,l=t.render,s=t.parse,u=t.Utils.ensureTmplFn,a=(t.Compo||Compo).signal.emitIn;!function(){r=function(t,e){if(is_ArrayLike(t)===!1)return void e(t);for(var n=t.length,r=-1;++r<n;)e(t[r],r)},function(){function t(t,n){return t===n?(e=!0,0):1}o=function(n){if(e=!1,n.sort(t),e===!1)return n;for(var r=[],o=0,i=0,l=n.length-1;l>o;)n[o++]===n[o]&&(r[i++]=o);for(;i--;)n.splice(r[i],1);return n};var e=!1}()}();var c,f;!function(){function t(t){return function(n){return e(n,t)}}function e(t,n,r){if("string"!=typeof t)return!1;if(null==r&&(r=0),r=t.indexOf(n,r),-1===r)return!1;if(r>0&&t.charCodeAt(r-1)>32)return e(t,n,r+1);var o=t.length,i=n.length;return o-i>r&&t.charCodeAt(r+i)>32?e(t,n,r+1):!0}function n(t,e,n){for(var r,o=!1,i=!1;n>e&&(r=t.charCodeAt(e),(34===r||39===r)&&(o=!o),92===r&&(i=!i),!(46===r||35===r||91===r||93===r||62===r||33>r)||o===!0||i===!0);)e++;return e}c=function(e,a,c){if(null==e&&log_error("selector is null for the type",a),"object"==typeof e)return e;var f,h,p,d,g,m,v,_,y,b,x,w=0,C=e.length;for(f="up"===c?o:a===i.SET?l:s;C>w;)if(g=e.charCodeAt(w),33>g)w++;else if(62!==g){if(m=n(e,w+1,C),46===g)h="class",p=u,d=t(e.substring(w+1,m));else if(35===g)h="id",p=u,d=e.substring(w+1,m);else if(91===g)b=e.indexOf("=",w),-1===b&&console.error('Attribute Selector: should contain "="'),p=u,h=e.substring(w+1,b),g=e.charCodeAt(b+1),x=34===g||39===g?2:1,d=e.substring(b+x,m-x+1),m++;else{if(58===g&&58===e.charCodeAt(w+1)){w+=2;var k,j,N=w;do g=e.charCodeAt(w);while(g>=97&&122>=g&&++w<C);if(k=e.substring(N,w),40===g){N=++w;do g=e.charCodeAt(w);while(41!==g&&++w<C);j=e.substring(N,w),w++}var E=r(k,j);null==v&&(v={selector:"*"}),null==_&&(_=v),null==v.filters&&(v.filters=[]),v.filters.push(E);continue}null!=v&&(v.next={type:"any",matcher:null},y=v,v=null),p=null,h=a===i.SET?"tagName":"compoName",d=e.substring(w,m)}w=m,null!=v?(null==v.filters&&(v.filters=[]),v.filters.push({key:h,selector:d,prop:p})):(v={key:h,prop:p,selector:d,nextKey:f,filters:null},null==_&&(_=v),null!=y&&(y.next.matcher=v))}else null==v?_=v={selector:"__scope__",nextKey:f,filters:null,next:{type:"children",matcher:null}}:v.next={type:"children",matcher:null},y=v,v=null,w++;return y&&y.next&&(y.next.matcher=v),_},f=function(t,e,n){"string"==typeof e&&(null==n&&(n=i[t.compoName?"CONTROLLER":"SET"]),e=c(e,n));var r=e.prop?t[e.prop]:t,o=!1;if(null==r)return!1;if("*"===e.selector?o=!0:"function"==typeof e.selector?o=e.selector(r[e.key]):null!=e.selector.test?e.selector.test(r[e.key])&&(o=!0):r[e.key]===e.selector&&(o=!0),o===!0&&null!=e.filters)for(var l,s=0,u=e.filters.length;u>s;s++)if(l=e.filters[s],"function"!=typeof l){if(f(t,l,n)===!1)return!1}else if(o=l(t,n),o===!1)return!1;return o};var r,o="parent",l="nodes",s="components",u="attr";!function(){r=function(n,r){var o=t[n];if(void 0!==o)return o;var i=e[n];if(void 0!==i)return i(r);throw new Error("Uknown pseudo selector:"+n)};var t={text:function(t){return t.type===i.TEXTNODE},node:function(t){return t.type===i.NODE}},e={not:function(t){return function(e,n){return!f(e,t,n)}}}}()}();var h,p,d,g,m;!function(){h=function(t,e){if(null==e)return t;var n=[];return r(t,function(t){f(t,e)&&n.push(t)}),n},p=function(t,e,n,o){return null==t?n:(null==n&&(n=[]),null==o&&("__scope__"===e.selector?(o=!1,e=e.next.matcher):o=!0),r(t,function(t){if(f(t,e)===!1)return void(null==e.next&&o!==!1&&p(t[e.nextKey],e,n,o));if(null==e.next)return n.push(t),void(o===!0&&p(t[e.nextKey],e,n,o));var r=e.next;o="children"!==r.type,p(t[e.nextKey],r.matcher,n,o)}),n)},d=function(t,e){var n={type:1,tagName:1,compoName:1,controller:1},r={parent:e};for(var o in t)1===n[o]&&(r[o]=t[o]);null!=t.attr&&(r.attr=obj_create(t.attr));var i=t.nodes;if(null!=i&&i.length>0)if(is_ArrayLike(i)===!1)r.nodes=[d(i,r)];else{r.nodes=[];for(var l=i.length,s=0;l>s;s++)r.nodes[s]=d(i[s],r)}return r},g=function(t){for(var e,n=t;null!=n;)e=n,n=n.nodes&&n.nodes[0];return e},m=function(t,e,n,r){if(i.TEXTNODE===t.type)return is_Function(t.content)?t.content("node",e,n,null,r):t.content;var o="";if(null!=t.nodes)for(var l,s=0,u=t.nodes.length;u>s;s++)l=t.nodes[s],o+=m(l,e,n,r);return o}}();var v=n.prototype={constructor:n,type:i.SET,length:0,components:null,add:function(t){var e,n;if("string"==typeof t&&(t=s(t)),is_ArrayLike(t)){for(e=0,n=t.length;n>e;e++)this.add(t[e]);return this}"function"==typeof t&&null!=t.prototype.type&&(t={controller:t,type:i.COMPONENT});var r=t.type;if(!r)return console.error("Only Mask Node/Component/NodeText/Fragment can be added to jmask set",t),this;if(r===i.FRAGMENT){var o=t.nodes;for(e=0,n=o.length;n>e;)this[this.length++]=o[e++];return this}if(r===i.CONTROLLER){if(null!=t.nodes&&t.nodes.length)for(e=t.nodes.length;0!==e;)t.nodes[--e].parent=t;null!=t.$&&(this.type=i.CONTROLLER)}return this[this.length++]=t,this},toArray:function(){return Array.prototype.slice.call(this)},render:function(t,e,n,r){if(this.components=[],1===this.length)return l(this[0],t,e,n,r||this);null==n&&(n=document.createDocumentFragment());for(var o=0,i=this.length;i>o;o++)l(this[o],t,e,n,r||this);return n},prevObject:null,end:function(){return this.prevObject||this},pushStack:function(t){var e;return e=n(t),e.prevObject=this,e},controllers:function(){return null==this.components&&console.warn("Set was not rendered"),this.pushStack(this.components||[])},mask:function(e){var n;if(null!=e)return this.empty().append(e);if(arguments.length)return this;if(0===this.length)n=new i.Node;else if(1===this.length)n=this[0];else{n=new i.Fragment,n.nodes=[];for(var r=-1;++r<this.length;)n.nodes[r]=this[r]}return t.stringify(n)},text:function(t,e,n){if("string"==typeof t&&1===arguments.length){for(var r,o=[new i.TextNode(t)],l=0,s=this.length;s>l;l++)r=this[l],r.nodes=o;return this}for(var r,u="",l=0,s=this.length;s>l;l++)r=this[l],u+=m(r,t,e,n);return u}};return arr_each(["append","prepend"],function(t){n.prototype[t]=function(e){for(var r,o,i=n(e),l=0,s=this.length;s>l;l++){o=this[l],r=i.toArray();
for(var u=0,a=r.length;a>u;u++)r[u].parent=o;o.nodes=null!=o.nodes?"append"===t?o.nodes.concat(r):r.concat(o.nodes):r}return this}}),arr_each(["appendTo"],function(t){n.prototype[t]=function(t,e,r,o){return null==o&&(o=this),null!=t.nodeType&&"function"==typeof t.appendChild?(t.appendChild(this.render(e,r,null,o)),a(o,"domInsert"),this):(n(t).append(this),this)}}),function(){function t(t,e,n){t[e]=n}function n(t){var e={};return t.split(";").forEach(function(t){if(""!==t){var n=t.indexOf(":"),r=t.substring(0,n).trim(),o=t.substring(n+1).trim();e[r]=o}}),e}function r(t){var e,n="";for(e in t)n+=e+":"+t[e]+";";return n}function o(t,e){return t+":"+e+";"}v.removeAttr=v.removeProp=function(t){return coll_each(this,function(e){e.attr[t]=null})},v.attr=v.prop=function(t,n){function r(t,n,r){t.attr[n]=e(r)}function o(t,e){for(var n in e)r(t,n,e[n])}if(1===arguments.length)return this.length>0?this[0].attr[t]:null;var i=is_String(t)?r:o;return coll_each(this,function(e){i(e,t,n)})},v.tag=function(t){return 0===arguments.length?this[0]&&this[0].tagName:coll_each(this,function(e){e.tagName=t})},v.css=function(e,i){if(arguments.length<=1&&"string"==typeof e){if(null==this.length)return null;var l=this[0].attr.style;if(null==l)return null;var s=n(l);return null==e?s:s[e]}if(null==e)return this;var u="object"==typeof e?r:o,a="object"==typeof e?obj_extend:t;return coll_each(this,function(t){var o=t.attr.style;if(null==o)return void(t.attr.style=u(e,i));var l=n(o);a(l,e,i),t.attr.style=r(l)})}}(),function(){function t(t){var e=t.attr["class"];return"string"==typeof e?e:""}function e(e,n){return-1!==(" "+t(e)+" ").indexOf(" "+n+" ")}function n(e,n){e.attr["class"]=(t(e)+" "+n).trim()}function r(e,n){e.attr["class"]=(" "+t(e)+" ").replace(" "+n+" ","").trim()}v.hasClass=function(t){return coll_find(this,function(n){return e(n,t)})};var o={add:function(t,r){e(t,r)===!1&&n(t,r)},remove:function(t,n){e(t,n)===!0&&r(t,n)},toggle:function(t,o){var i=e(t,o)===!0?r:n;i(t,o)}};arr_each(["add","remove","toggle"],function(t){var e=o[t];v[t+"Class"]=function(t){return coll_each(this,function(n){e(n,t)})}})}(),obj_extend(n.prototype,{clone:function(){return n(coll_map(this,d))},wrap:function(t){var e=n(t);if(0===e.length)return log_warn("Not valid wrapper",t),this;var r=coll_map(this,function(t){var n=e.clone()[0];if(g(n).nodes=[t],null!=t.parent){var r=coll_indexOf(t.parent.nodes,t);-1!==r&&t.parent.nodes.splice(r,1,n)}return n});return n(r)},wrapAll:function(t){var e=n(t);return 0===e.length?(log_error("Not valid wrapper",t),this):(this.parent().mask(e),g(e[0]).nodes=this.toArray(),this.pushStack(e))}}),arr_each(["empty","remove"],function(t){n.prototype[t]=function(){return coll_each(this,e[t])};var e={remove:function(t){null!=t.parent&&coll_remove(t.parent.nodes,t)},empty:function(t){t.nodes=null}}}),obj_extend(n.prototype,{each:function(t,e){for(var n=0;n<this.length;n++)t.call(e||this,this[n],n);return this},eq:function(t){return-1===t?this.slice(t):this.slice(t,t+1)},get:function(t){return 0>t?this[this.length-t]:this[t]},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments))}}),arr_each(["filter","children","closest","parent","find","first","last"],function(t){n.prototype[t]=function(e){var r,l,s=[],u=null==e?null:c(e,this.type,"closest"===t?"up":"down");switch(t){case"filter":return n(h(this,u));case"children":for(r=0;r<this.length;r++)l=this[r],null!=l.nodes&&(s=s.concat(null==u?l.nodes:h(l.nodes,u)));break;case"parent":for(r=0;r<this.length;r++)l=this[r].parent,!l||l.type===i.FRAGMENT||u&&f(l,u)||s.push(l);o(s);break;case"closest":case"find":if(null==u)break;for(r=0;r<this.length;r++)p(this[r][u.nextKey],u,s);break;case"first":case"last":var a;for(r=0;r<this.length;r++)if(a="first"===t?r:this.length-r-1,l=this[a],null==u||f(l,u)){s[0]=l;break}}return this.pushStack(s)}}),n}(Mask);return function(t,e){function n(t){return t.parentNode.removeChild(t)}function r(t){if(null!=t)for(var e=t.length,r=-1;++r<e;)n(t[r])}function o(t,e){return e.parentNode.insertBefore(t,e.nextSibling)}function i(t,e){return e.parentNode.insertBefore(t,e)}function l(){}function s(){}function u(){}function a(t,e){if(null==e&&(e=[]),null==t.components)return e;for(var n,r=t.components,o=0,i=r.length;i>o;o++)n=r[o],"validate"!==n.compoName?a(n):e.push(n);return e}var c,f,h,p,d,g,m,v,_=!1,y="undefined"!=typeof e?e:t.Compo||global.Compo,b=y.Dom.addEventListener,x=t.registerHandler,w=t.registerAttrHandler,C=t.registerUtil,k=y.config.getDOMLibrary();!function(){function t(t,e){for(var n,r=-1,o=e.length-1;++r<o;)n=e[r],null==t[n]&&(t[n]={}),t=t[n];return t}function e(t){return null==t||"object"!=typeof t?null:"number"==typeof t.length&&"function"==typeof t.slice?k.Array:"function"==typeof t.toUTCString?k.Date:null}function n(n,o,l,s){var u=s.length,c=u>1?t(n,s):n,f=s[u-1],h=c[f];if(u>1&&r(n,s),"length"===f){var p=e(c);if(null!=p)return a(c,p,function(){for(var t=l.length,e=-1;++e<t;)l[e].apply(null,arguments)}),h}return C(c,f,{get:function(){return h},set:function(t){if(t!==h){var r=h;h=t;var s=0,u=l.length,c=e(t);if(null!=c)for(;u>s;s++)a(t,c,l[s]);if(null!=n[y][w])return void(n[y][w][o]=1);for(s=0;u>s;s++)l[s](t);i(n,o,r)}},configurable:!0,enumerable:!0}),h}function r(t,e){for(var n,r=l(t),i="",s=e.length-1,u=0;s>u;u++)n=e[u],i+=n+".",o(i,t,n,r),t=t[n]}function o(t,e,n,r){var o,i=e[n];C(e,n,{get:function(){return i},set:function(e){e!==i&&(o=i,i=e,r(t,o))},configurable:!0,enumerable:!0})}function i(t,e,n){var r=t[y];if(null!=r)for(var o in r)if(0===o.indexOf(e+".")){var i,l,s=r[o].slice(0),u=s.length,a=0;if(0!==u){var f=obj_getProperty(t,o);for(a=0;u>a;a++)l=s[a],h(t,o,l),null!=n&&"object"==typeof n&&(i=o.substring(e.length+1),h(n,i,l));for(a=0;u>a;a++)s[a](f);for(a=0;u>a;a++)c(t,o,s[a])}}}function l(t){return function(e,n){s(t,e,n)}}function s(t,e,n){var r=t[y];if(null!=r)for(var o in r)if(0===o.indexOf(e)){var i=r[o].slice(0),l=i.length,s=0;if(0!==l){var u,a,f=obj_getProperty(t,o);for(s=0;l>s;s++)u=i[s],h(t,o,u),null!=n&&"object"==typeof n&&(a=o.substring(e.length),h(n,a,u));for(s=0;l>s;s++)i[s](f);for(s=0;l>s;s++)c(t,o,i[s])}}}function u(t,e,n){var r=g(t,e);return arr_contains(r,n)===!1&&r.push(n),r}c=function(t,r,o){for(var i=r.split("."),l=i.length,s=-1,c=t;++s<l&&(c=c[i[s]],null!=c);)if(null!=c[y]){var f=i.slice(s+1).join(".");if(null!=c[y][f]){u(c,f,o);var h=u(t,r,o);if(1===h.length){var p=i.splice(0,s);0!==p.length&&n(t,r,h,p,!0)}return}}var h=u(t,r,o);1===h.length&&n(t,r,h,i,!0);var d=obj_getProperty(t,r),g=e(d);null!=g&&a(d,g,o)},f=function(t,e,n){for(var r=e.split("."),o=r.length,i=-1,l=t;++i<o&&(l=l[r[i]],null!=l);)if(null!=l[y]){if(f(l,r.slice(i).join("."),n))return!0;break}var s=t[y];return null==s||null==s[e]?!1:arr_contains(s[e],n)},h=function(t,n,r){for(var o=n.split("."),i=o.length,l=-1,s=t;++l<i&&(s=s[o[l]],null!=s);)if(null!=s[y]){h(s,o.slice(l).join("."),r);break}var u=g(t,n),a=obj_getProperty(t,n);void 0===r?u.length=0:arr_remove(u,r);var c=e(a);null!=c&&_(a,c,r)},p=function(t){var e=t[y];null!=e&&(e[w]={})},d=function(t){var e=t[y],n=null==e?null:e[w];if(null!=n){e[w]=null;var r,o,i,l,s;for(r in n)if(o=t[y][r],l=null==o?0:o.length,0!==l)for(s=-1,i=r===b?t:obj_getProperty(t,r);++s<l;)o[s](i)}},g=function(t,e){var n=t[y];if(null==n&&(n={__dirty:null,__dfrTimeout:null,__mutators:null},C(t,"__observers",{value:n,enumerable:!1})),null==e)return n;var r=n[e];return null==r?n[e]=[]:r},m=function(t,n){var r=e(t);null!=r&&a(t,r,n)},v=function(t,e){_(t,null,e)};var a,_,y="__observers",b="__mutators",x="__dfrTimeout",w="__dirty",C=Object.defineProperty,k={Array:{throttle:!1,methods:["push","unshift","splice","pop","shift","reverse","sort","remove"]},Date:{throttle:!0,methods:["setDate","setFullYear","setHours","setMilliseconds","setMinutes","setMonth","setSeconds","setTime","setUTCDate","setUTCFullYear","setUTCHours","setUTCMilliseconds","setUTCMinutes","setUTCMonth","setUTCSeconds"]}};!function(){function t(t,r,o,i){var l=i===!0?n:e;return function(){return l(t,r,o,_Array_slice.call(arguments))}}function e(t,e,n,o){var i=g(t,b),l=e.apply(t,o);return r(t,i,n,o,l),l}function n(t,e,n,o){var i=g(t,b),l=e.apply(t,o),s=t[y];return null!=s[x]?l:(s[x]=setTimeout(function(){s[x]=null,r(t,i,n,o,l)}),l)}function r(t,e,n,r,o){if(0!==e.length){var i=t[y];if(null!=i[w])return void(i[w][b]=1);for(var l,s=e.length,u=-1;++u<s;)l=e[u],"function"==typeof l&&l(t,n,r,o)}}a=function(e,n,r){var o=n.methods,i=n.throttle,l=g(e,b);if(0===l.length)for(var s,u,a=o.length,c=-1;++c<a;)s=o[c],u=e[s],null!=u&&(e[s]=t(e,u,s,i));l[l.length++]=r},_=function(t,e,n){var r=g(t,b);return void 0===n?void(r.length=0):void arr_remove(r,n)}}()}();var j;!function(){j=function(t){return null==t||""===t?null:("string"==typeof t&&(t=new Date(t)),isNaN(t)===!1&&"function"==typeof t.getFullYear?t:null)}}();var N,E,A,O,S;!function(){N=function(t,e,n,r){if(null==t.components)return o(n,r||t.placeholder);var l,s=t.components,u=null,a=!0,c=s.length,f=e-1;if(null==u)for(;++f<c;)if(l=s[f].elements,l&&l.length){u=l[0];break}if(null==u)for(a=!1,f=c>e?e:c;--f>-1;)if(l=s[f].elements,l&&l.length){u=l[l.length-1];break}return null==u&&(u=r||t.placeholder),a?i(n,u):o(n,u)},E=function(e,n,r,o,i){return t.render(n,r,o,i,e)},A=function(t,e){if(null==t)return!1;null!=t.elements&&(r(t.elements),t.elements=null),y.dispose(t);var n=e&&e.components||t.parent&&t.parent.components;return null==n?(log_error("Parent Components Collection is undefined"),!1):arr_remove(n,t)},O=function(t){y.signal.emitIn(t,"domInsert")},S=function(t,e){if("function"==typeof t.dispose){var n=t.dispose;return void(t.dispose=function(){e.call(this),n.call(this)})}t.dispose=e}}();var D,T,M,R,P,L,I,H;!function(){function e(t,e,i,l,s){if(null!=l){if("object"==typeof l){var u=T(l.accessor,e,null,i);return null==u||"object"!=typeof u?void console.error("Binding failed to an object over accessor",l.ref):void t(u,l.ref,s)}var a=l,c=a.split("."),f=c.length;if(f>1){var h=c[0];if("$c"===h)return i=r(i,c.slice(1),f-1),void t(i,a.substring(3),s);if("$a"===h||"$ctx"===h)return}var u=null;o(e,c,f)&&(u=e),null==u&&(u=n(i,c,f)),null==u&&(u=e),t(u,a,s)}}function n(t,e,n){for(var r;null!=t;){if(r=t.scope,null!=r&&o(r,e,n))return r;t=t.parent}return null}function r(t,e,n){for(;null!=t;){if(o(t,e,n))return t;t=t.parent}return t}function o(t,e,n){if(null==t)return!1;for(var r=0;n>r;r++)if(t=t[e[r]],null==t)return!1;return!0}var i=t.Utils.Expression;T=i.eval,I=i.parse,H=i.varRefs,D=function(t,e,n,r){if("."===t)return e;var o=T(t,e,n,r);return null==o?"":o},M=function(t,n,r,o,i){if("."===t)return void m(n,i);var l=I(t),s=H(l,n,r,o);if(null!=s){if("string"==typeof s)return void e(c,n,o,s,i);for(var u,a=null!=s.length&&"function"==typeof s.splice,f=a===!0?s.length:1,h=0;f>h;h++)u=a===!0?s[h]:s,e(c,n,o,u,i)}},R=function(t,n,r,o){if("function"==typeof r&&log_warn("[mask.binding] - expression unbind(expr, model, controller, callback)"),"."===t)return void v(n,o);var i,l=H(t,n,null,r);if(null!=l){if("string"==typeof l)return void e(h,n,r,l,o);for(var i,s=null!=l.length&&"function"==typeof l.splice,u=s===!0?l.length:1,a=0;u>a;a++)i=s===!0?l[a]:l,e(h,n,r,i,o)}},P=function(t,e,n,r,o){var i=0;return function(){if(++i>1)return i=0,void log_warn("<mask:bind:expression> Concurent binder detected",t);var l=D(t,e,n,r);if(arguments.length>1){var s=_Array_slice.call(arguments);s[0]=l,o.apply(this,s)}else o(l);i--}},L=function(t){var e=0;return function(){return++e>1?(e=0,void log_warn("<listener:expression> concurent binder")):(t(),void e--)}}}();var F,$;!function(){F=function(t,e,n){for(var r,o,i,l,s=t.split(";"),u=[],a=0,c=s.length;c>a;a++)r=s[a].split(":"),1===r.length||2===r.length?(i=2===r.length?r[0]:n,o=r[2===r.length?1:0],l=$(o.trim(),i,e),null!=l&&u.push(l)):log_error('Too much ":" in a signal def.',s[a]);return u},$=function(t,e,n){if(n!==!0)return{signal:t,type:e};var r=t.indexOf(".");return-1===r?(log_error("No pipe name in a signal",t),null):{signal:t.substring(r+1),pipe:t.substring(0,r),type:e}}}();var U;!function(){function t(t,e,n){return null==t||"function"!=typeof t[e]?(log_error("BindingProvider.",n,"should be a function. Property:",e),!1):!0}function e(t,e){var n=t.ctr.parent;if(null!=n[e])return n;var r=t.model;return null!=r[e]?r:(log_error("BindingProvider. Accessor `",e,"`should be a function"),null)}function n(t){var e=t.getFullYear(),n=t.getMonth()+1,r=t.getDate();return e+"-"+(10>n?"0":"")+n+"-"+(10>r?"0":"")+r}function r(t){var e=t.getHours(),n=t.getMinutes();return e+":"+(10>n?"0":"")+n}var o={get:function(t,n){var r=t.objGetter;if(null==r)return D(n,t.model,t.ctx,t.ctr);var o=e(t,r);return null==o?null:o[r](n,t.model,t.ctr.parent)},set:function(t,n,r,o){var i=o.objSetter;if(null==i)return void obj_setProperty(t,n,r);var l=e(o,i);null!=l&&l[i](n,r,o.model,o.ctr.parent)}},i={get:function(e){var n=e.domGetter;if(null==n)return obj_getProperty(e,e.property);var r=e.ctr.parent;return t(r,n,"Getter")===!1?null:r[n](e.element)},set:function(e,n){var r=e.domSetter;if(null==r)return void obj_setProperty(e,e.property,n);var o=e.ctr.parent;t(o,r,"Setter")!==!1&&o[r](n,e.element)}},l={domSet:function(t){return function(e,n){var r=j(n);e.element.value=null==r?"":t(r)}},objSet:function(t){return function(e,n,r){var o=j(r);if(null!=o){var i=j(obj_getProperty(e,n));return null==i?void obj_setProperty(e,n,o):void t(i,o)}}}};U={objectWay:o,domWay:i,SELECT:{get:function(t){var e=t.element,n=e.selectedIndex;if(-1===n)return"";var r=e.options[n],o=r.getAttribute("value");return null==o?r.getAttribute("name"):o},set:function(t,e){var n,r,o,i=t.element,l=i.options,s=l.length;for(o=0;s>o;o++)if(n=l[o],r=n.getAttribute("value"),null==r&&(r=n.getAttribute("name")),r==e)return void(i.selectedIndex=o);log_warn("Value is not an option",e)}},DATE:{domWay:{get:i.get,set:function(t,e){var r=j(e);t.element.value=null==r?"":n(r)}},objectWay:{get:o.get,set:l.objSet(function(t,e){t.setFullYear(e.getFullYear()),t.setMonth(e.getMonth()),t.setDate(e.getDate())})}},TIME:{domWay:{get:i.get,set:l.domSet(r)},objectWay:{get:o.get,set:l.objSet(function(t,e){t.setHours(e.getHours()),t.setMinutes(e.getMinutes()),t.setSeconds(e.getSeconds())})}}}}();var z={};t.registerBinding=function(t,e){z[t]=e};var B;!function(){function e(t){var e=t.expression,n=t.model,r=t.objectChanged=t.objectChanged.bind(t);if(t.binder=P(e,n,t.ctx,t.ctr,r),M(e,n,t.ctx,t.ctr,t.binder),"dual"===t.bindingType){var o=t.ctr.attr;if(!o["change-slot"]&&!o["change-pipe-event"]){var i=t.element,l=o["change-event"]||o.changeEvent||"change",s=t.domChanged.bind(t);b(i,l,s)}if(!t.objectWay.get(t,t.expression))return setTimeout(function(){t.domWay.get(t)&&t.domChanged()}),t}return t.objectChanged(),t}function n(t,e,r){if(null!=t){var o=t.slots;(null==o||"function"!=typeof o[e]||o[e].apply(t,r)!==!1)&&n(t.parent,e,r)}}t.BindingProvider=B=function(t,e,n,r){null==r&&(r=":bind"===n.compoName?"single":"dual");var o,i=n.attr;if(this.node=n,this.ctr=n,this.ctx=null,this.model=t,this.element=e,this.value=i.value,this.property=i.property,this.domSetter=i.setter||i["dom-setter"],this.domGetter=i.getter||i["dom-getter"],this.objSetter=i["obj-setter"],this.objGetter=i["obj-getter"],this["typeof"]=i["typeof"]||null,this.dismiss=0,this.bindingType=r,this.log=!1,this.signal_domChanged=null,this.signal_objectChanged=null,this.locked=!1,null==this.property&&null==this.domGetter)switch(e.tagName){case"INPUT":if(o=e.getAttribute("type"),"checkbox"===o){this.property="element.checked";break}if("date"===o){var l=U.DATE;this.domWay=l.domWay,this.objectWay=l.objectWay}"number"===o&&(this["typeof"]="Number"),this.property="element.value";break;case"TEXTAREA":this.property="element.value";break;case"SELECT":this.domWay=U.SELECT;break;default:this.property="element.innerHTML"}if(i.log&&(this.log=!0,"log"!==i.log&&(this.logExpression=i.log)),i["x-signal"]){var s=F(i["x-signal"],null,"dom")[0],u=s&&s.type;switch(u){case"dom":case"object":this["signal_"+u+"Changed"]=s.signal;break;default:log_error("Signal typs is not supported",s)}}if(i["x-pipe-signal"]){var s=F(i["x-pipe-signal"],!0,"dom")[0],u=s&&s.type;switch(u){case"dom":case"object":this["pipe_"+u+"Changed"]=s;break;default:log_error("Pipe type is not supported")}}if(i["dom-slot"]){this.slots={};var a=n.parent,c=a.parent;a.parent=this,this.parent=c,this.slots[i["dom-slot"]]=function(t,e){this.domChanged(t,e)}}var f=i["object-pipe-slot"]||i["x-pipe-slot"];if(f){var h=f,p=h.indexOf("."),d=h.substring(0,p),s=h.substring(p+1);this.pipes={},this.pipes[d]={},this.pipes[d][s]=function(){this.objectChanged()},y.pipe.addController(this)}if(i.expression){if(this.expression=i.expression,null==this.value&&"single"!==r){var g=H(this.expression);"string"==typeof g?this.value=g:log_warn("Please set value attribute in DualBind Control.")}}else this.expression=this.value},B.create=function(t,e,n,r){var o,i=n.attr.bindingProvider,l=null==i?null:z[i];return"function"==typeof l?new l(t,e,n,r):(o=new B(t,e,n,r),null!=l&&obj_extend(o,l),o)},B.bind=function(t){return e(t)},B.prototype={constructor:B,dispose:function(){R(this.expression,this.model,this.ctr,this.binder)},objectChanged:function(t){if(!(this.dismiss-->0)){if(this.locked===!0)return void log_warn("Concurance change detected",this);if(this.locked=!0,null==t&&(t=this.objectWay.get(this,this.expression)),this.domWay.set(this,t),this.log&&console.log("[BindingProvider] objectChanged -",t),this.signal_objectChanged&&n(this.ctr,this.signal_objectChanged,[t]),this.pipe_objectChanged){var e=this.pipe_objectChanged;y.pipe(e.pipe).emit(e.signal)}this.locked=!1}},domChanged:function(t,e){if(this.locked===!0)return void log_warn("Concurance change detected",this);this.locked=!0,null==e&&(e=this.domWay.get(this));var r=this["typeof"];if(null!=r){var o=window[r];e=o(e)}var i=!0,l=this.ctr.validations;if(l)for(var s,u=l.length,a=-1;++a<u;)if(s=l[a],s.validate(e,this.element,this.objectChanged.bind(this))===!1){i=!1;break}if(i&&(this.dismiss=1,this.objectWay.set(this.model,this.value,e,this),this.dismiss=0,this.log&&console.log("[BindingProvider] domChanged -",e),this.signal_domChanged&&n(this.ctr,this.signal_domChanged,[e]),this.pipe_domChanged)){var c=this.pipe_domChanged;y.pipe(c.pipe).emit(c.signal)}this.locked=!1},objectWay:U.objectWay,domWay:U.domWay},obj_extend(B,{addObserver:c,removeObserver:h})}(),x(":visible",l),l.prototype={constructor:l,refresh:function(t,e){e.style.display=D(this.attr.check,t)?"":"none"},renderStart:function(t,e,n){this.refresh(t,n),this.attr.bind&&c(t,this.attr.bind,this.refresh.bind(this,t,n))}},function(){function t(){}x(":bind",t),t.prototype={constructor:t,renderEnd:function(t,e,n,r){this.provider=B.create(e,r,this,"single"),B.bind(this.provider)},dispose:function(){this.provider&&"function"==typeof this.provider.dispose&&this.provider.dispose()}}}(),x(":dualbind",s),s.prototype={constructor:s,renderEnd:function(e,n,r,o){if(this.provider=B.create(n,o,this),this.components)for(var i,l=0,s=this.components.length;s>l;l++)i=this.components[l],":validate"===i.compoName&&(this.validations||(this.validations=[])).push(i);if(!this.attr["no-validation"]&&!this.validations){var u=n.Validate,a=this.provider.value;if(null==u&&-1!==a.indexOf(".")){for(var c=a.split("."),l=0,f=c.length,h=n[c[0]];null==u&&++l<f&&h;)u=h.Validate,h=h[c[l]];a=c.slice(l).join(".")}var p=u&&u[a];"function"==typeof p&&(p=t.getHandler(":validate").createCustom(o,p),(this.validations||(this.validations=[])).push(p))}B.bind(this.provider)},dispose:function(){this.provider&&"function"==typeof this.provider.dispose&&this.provider.dispose()},handlers:{attr:{"x-signal":function(){}}}},function(){function n(){}function r(t,e){this.fn=t,this.message=e}function o(t,e,n){log_warn("Validate Notification:",t,e);var r=k(t).next("."+l);return 0===r.length&&(r=k("<div>").addClass(l).html("<span></span><button>cancel</button>").insertAfter(t)),r.children("button").off().on("click",function(){r.hide(),n&&n()}).end().children("span").text(e).end().show()}function i(t){return k(t).next("."+l).hide()}var l="-validate-invalid";t.registerValidator=function(t,e){s[t]=e},x(":validate",n),n.prototype={constructor:n,attr:{},renderStart:function(t,e,o){if(this.element=o,this.attr.value){var i=n.resolveFromModel(t,this.attr.value);i&&(this.validators=[new r(i)])}},validate:function(t,e,n){null==e&&(e=this.element),this.attr&&(null==t&&this.attr.getter&&(t=obj_getProperty({node:this,element:e},this.attr.getter)),null==t&&this.attr.value&&(t=obj_getProperty(this.model,this.attr.value))),null==this.validators&&this.initValidators();for(var r,o=0,i=this.validators.length;i>o;o++)if(r=this.validators[o].validate(t),r&&!this.attr.silent)return this.notifyInvalid(e,r,n),!1;return this.makeValid(e),!0},notifyInvalid:function(t,e,n){return o(t,e,n)},makeValid:function(t){return i(t)},initValidators:function(){this.validators=[];for(var t in this.attr){switch(t){case"message":case"value":case"getter":continue}if(t in s!=!1){var e=s[t];this.validators.push(new r(e(this.attr[t],this),this.attr.message))}else log_error("Unknown Validator:",t,this)}}},n.resolveFromModel=function(t,e){return obj_getProperty(t.Validate,e)},n.createCustom=function(t,e){var o=new n;return o.element=t,o.validators=[new r(e)],o},r.prototype.validate=function(t){var e=this.fn(t);return e===!1?this.message||"Invalid - "+t:e},x(":validate:message",e({template:"div."+l+' { span > "~[bind:message]" button > "~[cancel]" }',onRenderStart:function(t){"string"==typeof t&&(t={message:t}),t.cancel||(t.cancel="cancel"),this.model=t},compos:{button:"$: button"},show:function(t,e){var n=this;this.model.message=t,this.compos.button.off().on(function(){n.hide(),e&&e()}),this.$.show()},hide:function(){this.$.hide()}}));var s={match:function(t){return function(e){return new RegExp(t).test(e)}},unmatch:function(t){return function(e){return!new RegExp(t).test(e)}},minLength:function(t){return function(e){return e.length>=parseInt(t,10)}},maxLength:function(t){return function(e){return e.length<=parseInt(t,10)}},check:function(t,e){return function(n){return D("x"+t,e.model,{x:n},e)}}}}(),x(":validate:group",u),u.prototype={constructor:u,validate:function(){for(var t,e=a(this),n=0,r=e.length;r>n;n++)if(t=e[n],!t.validate())return!1;return!0}},function(){function t(t,e,n){return t?null==e||""===e?t+" "+n:t.replace(e,n):n}function e(t){return function(e){t.textContent=e}}function n(e,n,r){return function(o){var i=e.getAttribute(n),l=t(i,r,o);e.setAttribute(n,l),r=o}}function r(e,n,r){return function(o){switch(typeof e[n]){case"boolean":return void(r=e[n]=!!o);case"number":return void(r=e[n]=Number(o));case"string":return void(r=e[n]=t(e[n],r,o));default:return void log_warn("Unsupported elements property type",n)}}}function o(t,o,i,l,s){if("node"===t)return e(i);if("attr"===t){switch(s){case"value":case"disabled":case"checked":case"selected":case"selectedIndex":return r(i,s,l)}return n(i,s,l)}throw Error("Unexpected binder type: "+t)}function i(t,e,n,r,i,l,s,u){var a=o(u,e,i,t,s),c=P(e,n,r,l,a);M(e,n,r,l,c),S(l,function(){R(e,n,l,c)})}C("bind",{mode:"partial",current:null,element:null,nodeRenderStart:function(t,e,n,r,o){var i=D(t,e,n,o);return this.element=document.createTextNode(i),this.current=i},node:function(t,e,n,r,o){return i(this.current,t,e,n,this.element,o,null,"node"),this.element},attrRenderStart:function(t,e,n,r,o){return this.current=D(t,e,n,o)},attr:function(t,e,n,r,o,l){return i(this.current,t,e,n,r,o,l,"attr"),this.current}})}(),w("xx-visible",function(t,e,n,r,o,i){var l=P(e,n,r,i,function(t){o.style.display=t?"":"none"});M(e,n,r,i,l),S(i,function(){R(e,n,i,l)}),D(e,n,r,i)||(o.style.display="none")}),w("x-toggle","client",function(t,e,n,r,o,i){var l=e.substring(0,e.indexOf(":")),s=e.substring(l.length+1),u=H(s);"string"!=typeof u&&(u=u[0]),b(o,l,function(){var t=D(s,n,r,i);obj_setProperty(n,u,t)})}),w("x-class-toggle","client",function(t,e,n,r,o){var i=e.substring(0,e.indexOf(":")),l=e.substring(i.length+1).trim();b(o,i,function(){k(o).toggleClass(l)})}),function(){var n,o,l,s,u,a=t.getStatement();!function(){n=function(t,e,n,r,o){return a[t].getNodes(e,n,r,o)},o=function(t,e,n,r,o){if(null==t)return null;var i=[];return builder_build(t,e,n,r,o,i),i},l=function(t,e){t.placeholder=document.createComment(""),e.appendChild(t.placeholder)},s=function(t,e,n,r,o,i){t.parent=i,t.model=n,t.refresh=fn_proxy(t.refresh,t),t.binder=P(t.expr||t.expression,n,r,i,t.refresh),M(t.expr||t.expression,n,r,i,t.binder)},u=function(t,e){if(null!=t)for(var n,r="function"==typeof t.splice,o=r?t.length:1,i=-1;++i<o;)n=r?t[i]:t,n.style.display=e?"":"none"}}(),function(){function e(){}function r(t,e,n,r,o,i,l,s){for(t.model=o,t.ctx=i,t.controller=s,t.refresh=fn_proxy(t.refresh,t),t.binder=L(t.refresh),t.index=n,t.Switch=[{node:e,elements:null}],M(e.expression,o,i,s,t.binder);;){if(e=e.nextSibling,null==e||"else"!==e.tagName)break;t.Switch.push({node:e,elements:null}),e.expression&&M(e.expression,o,i,s,t.binder)}null!=n&&(t.Switch[n].elements=r)}t.registerHandler("+if",{meta:{serializeNodes:!0},render:function(t,e,r,i,l){for(var s=this,u=n("if",s,t,e,i),a=0,c=s;;){if(c.nodes===u)break;if(a++,c=s.nextSibling,null==c||"else"!==c.tagName){a=null;break}}return this.attr["switch-index"]=a,o(u,t,e,r,i,l)},renderEnd:function(t,n,o,i,l){var s=new e,u=this.attr["switch-index"];return s.placeholder=document.createComment(""),i.appendChild(s.placeholder),r(s,this,u,t,n,o,i,l),s},serializeNodes:function(e){for(var n=[e];;){if(e=e.nextSibling,null==e||"else"!==e.tagName)break;n.push(e)}return t.stringify(n)}}),e.prototype={compoName:"+if",ctx:null,model:null,controller:null,index:null,Switch:null,binder:null,refresh:function(){for(var e,n=this,r=n.Switch,o=r.length,l=-1,s=n.index,a=n.model,c=n.ctx,f=n.controller;++l<o&&(e=r[l].node.expression,null!=e)&&!D(e,a,c,f););if(s!==l){if(null!=s&&u(r[s].elements,!1),l===o)return void(n.index=null);this.index=l;var h=r[l];if(null!=h.elements)return void u(h.elements,!0);var p=t.render(h.node.nodes,a,c,null,f),d=p.nodeType===Node.DOCUMENT_FRAGMENT_NODE?_Array_slice.call(p.childNodes):p;i(p,n.placeholder),h.elements=d}},dispose:function(){for(var t,e,n=this.Switch,r=n.length,o=-1;++o<r;)t=n[o],e=t.node.expression,e&&R(e,this.model,this.controller,this.binder),t.node=null,t.elements=null;this.controller=null,this.model=null,this.ctx=null}}}(),function(){function e(){}function n(t,e,n,r,o){if(s=f.getNodes(t,e,n,r,o),c=null,null!=s){for(var i=e.length,l=-1;++l<i&&e[l].nodes!==s;);c=l===i?null:l}}function r(t,e,n,r,o,i,l,s){t.ctx=i,t.expr=e.expression,t.model=o,t.controller=s,t.index=n,t.nodes=e.nodes,t.refresh=fn_proxy(t.refresh,t),t.binder=P(t.expr,o,i,s,t.refresh),t.Switch=new Array(e.nodes.length),null!=n&&(t.Switch[n]=r),M(e.expression,o,i,s,t.binder)}var s,c,f=a["switch"],h="switch-index";t.registerHandler("+switch",{meta:{serializeNodes:!0},serializeNodes:function(e){return t.stringify(e)},render:function(t,e,r,i,l){var u=D(this.expression,t,e,i);return n(u,this.nodes,t,e,i),null==s?null:(this.attr[h]=c,o(s,t,e,r,i,l))},renderEnd:function(t,n,o,i,s){var u=new e,a=this.attr[h];return l(u,i),r(u,this,a,t,n,o,i,s),u}}),e.prototype={compoName:"+switch",ctx:null,model:null,controller:null,index:null,nodes:null,Switch:null,binder:null,refresh:function(e){var r=this,o=r.Switch,l=(o.length,r.index),a=r.model,f=r.ctx,h=r.controller;if(n(e,r.nodes,a,f,h),c!==l){if(null!=l&&u(o[l],!1),null==c)return void(r.index=null);this.index=c;var p=o[c];if(null!=p)return void u(p,!0);var d=t.render(s,a,f,null,h),g=d.nodeType===Node.DOCUMENT_FRAGMENT_NODE?_Array_slice.call(d.childNodes):d;i(d,r.placeholder),o[c]=g}},dispose:function(){R(this.expr,this.model,this.controller,this.binder),this.controller=null,this.model=null,this.ctx=null;var t,e,n,r,o=this.Switch;for(t in o)if(e=o[t],null!=e)for(r=e.length,n=-1;++n<r;)null!=e[n].parentNode&&e[n].parentNode.removeChild(e[n])}}}(),function(){function n(t){this.expr=t.expression,this.nodes=t.nodes}function o(t,e,n,r,o){var i=[];return builder_build(t,e,n,r,o,i),i}a["with"];t.registerHandler("+with",{meta:{serializeNodes:!0},rootModel:null,render:function(t,e,n,r){var i=this.expression,l=this.nodes,s=T(i,t,e,r);return this.rootModel=t,o(l,s,e,n,r)},onRenderStartClient:function(t,e){this.rootModel=t,this.model=T(this.expression,t,e,this)},renderEnd:function(t,e,r,o,i){e=this.rootModel||e;var s=new n(this);return s.elements=t,s.model=e,s.parent=i,s.refresh=fn_proxy(s.refresh,s),s.binder=P(s.expr,e,r,i,s.refresh),M(s.expr,e,r,i,s.binder),l(s,o),s}}),n.prototype={compoName:"+with",elements:null,binder:null,model:null,parent:null,refresh:function(t){if(r(this.elements),this.components){for(var n=this.components.length,l=-1;++l<n;)e.dispose(this.components[l]);this.components.length=0}var s=document.createDocumentFragment();this.elements=o(this.nodes,t,null,s,this),i(s,this.placeholder),O(this)},dispose:function(){R(this.expr,this.model,this.parent,this.binder),this.parent=null,this.model=null,this.ctx=null}}}(),function(){function e(t){this.expr=t.expression,this.nodes=t.nodes}function n(t,e,n,r,o){var i=[];return builder_build(t,e,n,r,o,i),i}var r=a.visible;t.registerHandler("+visible",{meta:{serializeNodes:!0},render:function(t,e,r,o){return n(this.nodes,t,e,r,o)},renderEnd:function(t,n,r,o,i){var l=new e(this);return l.elements=t,l.model=n,l.parent=i,l.refresh=fn_proxy(l.refresh,l),l.binder=P(l.expr,n,r,i,l.refresh),M(l.expr,n,r,i,l.binder),l.refresh(),l}}),e.prototype={compoName:"+visible",elements:null,binder:null,model:null,parent:null,refresh:function(){var t=D(this.expr,this.model,this.ctx,this);r.toggle(this.elements,t)},dispose:function(){R(this.expr,this.model,this.parent,this.binder),this.parent=null,this.model=null,this.ctx=null}}}(),function(){function e(t){for(var e,n=t.length,r=-1;++r<n;)switch(e=t[r],typeof e){case"string":case"number":case"boolean":t[r]=Object(e)}}function n(t,e){for(var n=t.node.components,r=0,o=n.length,l=0,s=null,u=null,a=null,c=document.createDocumentFragment(),f=[];o>r;r++)if(a=n[r],null!=a.elements&&0!==a.elements.length)for(l=0,s=a.elements.length;s>l;l++)u=a.elements[l],u.parentNode.removeChild(u);t:for(l=0,s=e.length;s>l;l++){for(r=0;o>r;r++)if(e[l]===t._getModel(n[r])){f[l]=n[r];continue t}console.warn("No Model Found for",e[l])}for(r=0,o=f.length;o>r;r++)if(a=f[r],null!=a.elements&&0!==a.elements.length)for(l=0,s=a.elements.length;s>l;l++)u=a.elements[l],c.appendChild(u);t.components=t.node.components=f,i(c,t.placeholder)}function r(t,e,n,r,o){var i=t.node,l=i.components;null==l&&(l=i.components=[]);var s=(t.prop1,t.prop2,t.type,t.ctx),u=t.node;if(null!=e&&null!=n){var a=e,c=e+n;for(c>l.length&&(c=l.length);c>a;a++)A(l[a],i)&&(a--,c--)}if(null!=r&&o&&o.length){var f,a=l.length,h=t._build(i,o,s,u),p=l.splice(a);for(N(i,r,h,t.placeholder),l.splice.apply(l,[r,0].concat(p)),a=0,f=p.length;f>a;a++)y.signal.emitIn(p[a],"domInsert")}}function o(t,e){for(var n,r=t.components,o=r.length;--o>-1;)n=r[o],-1!==e.indexOf(n.model)&&A(n,t.node)}var l={model:null,parent:null,refresh:function(t,l,s,u){var a,c=0,f=this.node,h=(this.model,this.ctx),p=this.node;if(null==l){var d=f.components;if(null!=d){for(var a=d.length,c=-1;++c<a;)A(d[c],f)&&(c--,a--);d.length=0}var g=this._build(f,t,h,p);return i(g,this.placeholder),void arr_each(f.components,O)}var m=t;switch(e(t),l){case"push":r(this,null,null,m.length-1,m.slice(m.length-1));break;case"pop":r(this,m.length,1);break;case"unshift":r(this,null,null,0,m.slice(0,1));break;case"shift":r(this,0,1);break;case"splice":var v=s[0],_=1===s.length?this.components.length:s[1],y=s.length>2?m.slice(s[0],s.length-2+s[0]):null;r(this,v,_,v,y);break;case"sort":case"reverse":n(this,m);break;case"remove":null!=u&&u.length&&o(this,u)}},dispose:function(){R(this.expr||this.expression,this.model,this.parent,this.binder)}};!function(){function n(t,e){this.prop1=e[o],this.prop2=e[i],this.type=e[u],this.expr=e[c],null==t.components&&(t.components=[]),this.node=t,this.components=t.components}var r=a["for"],o="for-prop-1",i="for-prop-2",u="for-type",c="for-expr";
t.registerHandler("+for",{meta:{serializeNodes:!0},serializeNodes:function(e){return t.stringify(e)},render:function(t,n,l,s,a){var f=r.parseFor(this.expression),h=this.attr;h[o]=f[0],h[i]=f[1],h[u]=f[2],h[c]=f[3];var p=T(f[3],t,n,s);null!=p&&(is_Array(p)&&e(p),r.build(p,f,this.nodes,t,n,l,this,a))},renderEnd:function(t,e,r,o,i){var l=new n(this,this.attr);return l.placeholder=document.createComment(""),o.appendChild(l.placeholder),s(l,this,e,r,o,i),l},getHandler:function(t,e){return r.getHandler(t,e)}}),n.prototype={compoName:"+for",model:null,parent:null,refresh:l.refresh,dispose:l.dispose,_getModel:function(t){return t.scope[this.prop1]},_build:function(t,e,n,o){var i=r.getNodes(t.nodes,e,this.prop1,this.prop2,this.type);return builder_build(i,this.model,n,null,o)}}}(),function(){function n(t,e,n,o,i,l){for(var s,u=e.length,a=(new Array(u),0);u>a;a++)s=r(t,a),builder_build(s,e[a],n,o,i,l)}function r(t,e){var n=new o;return n.scope={index:e},{type:Dom.COMPONENT,tagName:"each::item",nodes:t,controller:function(){return n}}}function o(){}function i(t){this.expression=t.expression,this.nodes=t.nodes,null==t.components&&(t.components=[]),this.node=t,this.components=t.components}a.each;t.registerHandler("+each",{meta:{serializeNodes:!0},serializeNodes:function(e){return t.stringify(e)},render:function(t,r,o,i,l){var s=D(this.expression,t,r,i);null!=s&&(e(s),n(this.nodes,s,r,o,this,l))},renderEnd:function(t,e,n,r,o){var l=new i(this,this.attr);return l.placeholder=document.createComment(""),r.appendChild(l.placeholder),s(l,this,e,n,r,o),l}}),t.registerHandler("each::item",o),o.prototype={compoName:"each::item",scope:null,model:null,modelRef:null,parent:null,renderStart:_===!0?function(){var t=this.parent.expression;this.modelRef=""+("."===t?"":"("+t+")")+'."'+this.scope.index+'"'}:null,renderEnd:function(t){this.elements=t},dispose:function(){null!=this.elements&&(this.elements.length=0,this.elements=null)}},i.prototype={compoName:"+each",refresh:l.refresh,dispose:l.dispose,_getModel:function(t){return t.model},_build:function(t,e,r,o){var i=document.createDocumentFragment();return n(t.nodes,e,r,i,o),i}}}()}()}()}(Mask,Compo),function(){Mask.registerHandler(":html",{$meta:{mode:"server:all"},render:function(t,e,n){if(this.html=jmask(this.nodes).text(t,e,this),n.insertAdjacentHTML)return void n.insertAdjacentHTML("beforeend",this.html);if(n.ownerDocument){var r,o=document.createElement("div"),i=document.createDocumentFragment();for(o.innerHTML=this.html,r=o.firstChild;null!=r;)i.appendChild(r),r=r.nextSibling}},toHtml:function(){return this.html||""},html:null})}(),function(){var t={},e={get:function(e){return t[e]},resolve:function(e,n){var r=t[n];if(null!=r)return r;for(var o=":template[id="+n+"]",i=e.parent,l=null;null!=i;){if(l=jmask(i.nodes).filter(o).get(0),null!=l)return l.nodes;i=i.parent}return log_warn("Template was not found",n),null},register:function(e,n){return null==e?void log_warn("`:template` must be define via id attr."):void(t[e]=n)}};Mask.templates=e,Mask.registerHandler(":template",{render:function(){e.register(this.attr.id,this.nodes)}}),Mask.registerHandler(":import",{renderStart:function(){var t=this.attr.id;return null==t?void log_error("`:import` shoud reference the template via id attr"):void(this.nodes=e.resolve(this,t))}})}(),function(){custom_Statements.log={render:function(t,e,n,r,o){var i=ExpressionUtil.evalStatements(t.expression,e,n,o);i.unshift("Mask::Log"),console.log.apply(console,i)}},customTag_register("debugger",{render:function(){}}),customTag_register(":utest",Compo({render:function(t,e,n){n.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(n=n.childNodes),this.$=$(n)}}))}(),Mask.Compo=Compo,Mask.jmask=jmask,Mask.version="0.12.10",custom_optimize(),exports.mask=Mask}),function(t,e){"use strict";null==t&&(t="undefined"!=typeof window&&"undefined"!=typeof document?window:global),t.ruta=e(t)}(this,function(t){"use strict";function e(){return null==v&&(v=new y(b)),v}var n,r=t.mask||Mask,o=!0,i=Array.prototype.slice;!function(){n=function(){var t=i.call(arguments);console.error.apply(console,["Ruta"].concat(t))}}();var l,s,u,a;!function(){function t(t){for(var e,n,r=t.trim().split(/\s+/),o=r.length,i=-1;++i<o;)if(n=r[i],0!==n.length&&(e=n[0],'"'===e||"'"===e))for(var l=i;o>i;i++)if(n=r[i],n[n.length-1]===e){var s=r.splice(l,i-l+1).join(" ").slice(1,-1);r.splice(l,0,s),o=r.length;break}return r}function e(t){for(var e,n,r,o=t.length,i=0,l={},s=[];o>i;i++)r=t[i],"-"!==r[0]?s.push(r):(e=r.replace(/^[\-]+/,""),o-1>i&&"-"!==t[i+1][0]?(n=t[i+1],i++):n=!0,l[e]=n);return{path:s,query:l}}l=function(t){for(var e=t.length,n=0,r=e-1;e>n&&"/"===t[n];n++);for(;r>n&&"/"===t[r];r--);return t.substring(n,r+1)},s=function(t){return t=l(t),""===t?[]:t.split("/")},u=function(t){return"/"+t.join("/")},a=function(n){"string"==typeof n&&(n=t(n));var r=e(n);return g(r)}}();var c,f;!function(){function t(t,e,n){for(var r,o=e.split("."),i=o.length,l=-1;++l<i-1;)r=o[l],null==t[r]&&(t[r]={}),t=t[r];t[o[l]]=n}function e(t){try{return decodeURIComponent(t)}catch(e){return n("decode:URI malformed"),""}}function r(t){try{return encodeURIComponent(t)}catch(e){return n("encode:URI malformed"),""}}c=function(n,r){null==r&&(r="&");for(var o,i,l={},s=n.split(r),u=0,a=s.length;a>u;u++)o=s[u].split("="),i=null==o[1]?"":e(o[1]),t(l,o[0],i);return l},f=function(t,e){null==e&&(e="&");var n,o,i="";for(n in t)o=t[n],null!=o&&("boolean"==typeof o&&(o=null),i=i+(i?e:"")+n,null!=o&&(i+="="+r(o)));return i}}();var h,p,d;!function(){h=function(t,e){return new RegExp(t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),e)},p=function(t){if("^"===t[0])return new RegExp(t);for(var e=t.split("|"),n=0,r=e.length;r>n;n++)e[n]="^"+e[n]+"$";return new RegExp(e.join("|"))},d=function(t){var e=t.indexOf("("),r=t.lastIndexOf(")");if(-1===e||-1===r)return n("Expected alias part with regexp",t),null;var o=t.substring(e+1,r);return{alias:t.substring(1,e),matcher:p(o)}}}();var g,m;!function(){g=function(t){var e=u(t.path);return null==t.query?e:e+"?"+f(t.query,"&")},m=function(t){var e=t.indexOf("?"),n=-1===e?t:t.substring(0,e);return{path:s(n),query:-1===e?null:c(t.substring(e+1),"&")}}}();var v,_=function(){function t(t,e){this.method=36===t.charCodeAt(0)?t.substring(1,t.indexOf(" ")).toUpperCase():null,null!=this.method&&(t=t.substring(this.method.length+2)),this.strict=o,this.value=e,this.definition=t,r(this,t)}function e(){this.routes=[]}var r,i;!function(){function t(t,e){for(var n in t)if(e.test(n))return t[n]}r=function(t,e){var r=e.charCodeAt(0);switch(r){case 33:t.strict=!0,e=e.substring(1);break;case 94:t.strict=!1,e=e.substring(1);break;case 40:var o=1,i=e.length-1;return 41!==e.charCodeAt(e.length-1)&&(n("parser - expect group closing"),i++),void(t.match=new RegExp(e.substring(o,i)))}var l,s,u,a,c,f,h=e.split("/"),d=0,g=h.length,m=h[g-1];s=m.indexOf("?"),s>(1===g?-1:0)&&(l=m.substring(s+1),h[g-1]=m.substring(0,s));for(var v,_,y,b=!0,x=t.path=[];g>d;d++)if(u=h[d],""!==u){a=u.charCodeAt(0),f=u.charCodeAt(1),v=63===a,_=58===(v?f:a),c=0,v&&c++,_&&c++,0!==c&&(u=u.substring(c)),v||b||n("Strict part found after optional",e),v&&(b=!1);var w=u.indexOf("(");if(_&&-1!==w){var i=u.length-1;")"!==u[i]&&(i+=1),y=new RegExp(p(u.substring(w+1,i))),u=u.substring(0,w)}v||_?_&&x.push({alias:u,matcher:y,optional:v}):x.push(u)}if(l){var C=t.query={};h=l.split("&"),d=-1,g=h.length;for(var k,j,N,E;++d<g;)N=h[d],E=N.indexOf("="),-1!==E?(k=N.substring(0,E),j=N.substring(E+1),40===j.charCodeAt(0)&&(j=new RegExp(p(j))),C[k]=j):C[N]="";0===t.path.length&&(t.strict=!1)}},i=function(e,n){var r=n.indexOf("?"),o=-1===r?null:n.substring(r+1),i={path:n,params:null==o?{}:c(o,"&")};if(e.query)for(var l in e.query)if("?"===l[0]&&(l=l.substring(1)),":"===l[0]){var u=d(l),a=u.alias;i.params[a]=t(i.params,u.matcher)}if(-1!==r&&(n=n.substring(0,r)),null!=e.path)for(var f,h,p=s(n),g=e.path,m=g.length,v=p.length,_=0;v>_;_++)if(f=p[_],h=m>_?g[_]:null){if("string"==typeof h)continue;if(h.alias){i.params[h.alias]=f;continue}}return i}}();var l,u;!function(){function t(t,e){for(var n in t)if(e.test(n))return!0;return!1}l=function(t,e,n){for(var r,o=m(t),l=0,s=e.length;s>l;l++)if(r=e[l],u(o,r,n))return r.current=i(r,t),r;return null},u=function(e,n,r){if(null!=r&&null!=n.method&&n.method!==r)return!1;if(n.match)return n.match.test("string"==typeof e?e:g(e));if("string"==typeof e&&(e=m(e)),n.query){var o,i,l=e.query;if(null==l)return!1;for(o in n.query){i=n.query[o];var s=o[0];if(":"!==s){if("?"!==s)if("string"!=typeof i){if(i.test&&!i.test(l[o]))return!1}else{if(null==l[o])return!1;if(i&&l[o]!==i)return!1}}else{var u=d(o);if(null==u||t(l,u.matcher)===!1)return!1}}}var a=n.path,c=a.length;if(0===c)return n.strict?0===e.path.length:!0;for(var f,h=0,p=e.path.length;p>h;h++){if(f=a[h],h>=c)return n.strict!==!0;if("string"==typeof f){if(e.path[h]===f)continue;return!1}if(f.matcher&&f.matcher.test(e.path[h])===!1)return!1;if(f.optional)return!0;if(!f.alias)return!1}return c>h?a[h].optional===!0:!0}}();return t.prototype={path:null,query:null,value:null,current:null},e.prototype={add:function(e,n){return this.routes.push(new t(e,n)),this},get:function(t,e){return l(t,this.routes,e)},clear:function(){return this.routes.length=0,this}},e.parse=function(t,e){var n={};return r(n,t),i(n,e)},e}(),y=function(){function t(t){if("undefined"==typeof window||"onhashchange"in window==!1)return null;this.listener=t;var e=this;return window.onhashchange=function(){e.changed(location.hash)},this}function e(t){if("undefined"==typeof window)return null;if(!window.history||!window.history.pushState)return null;var e=this;return e.listener=t,e.initial=location.pathname,window.onpopstate=function(){return e.initial===location.pathname?void(e.initial=null):void e.changed()},e}function r(r,o){if(this.collection=r||new _,o){var i="hash"===o?t:e;this.emitter=new i(this)}null==this.emitter&&(this.emitter=new e(this)),null==this.emitter&&(this.emitter=new t(this)),null==this.emitter&&n("Router can not be initialized - (nor HistoryAPI / nor hashchange")}return"undefined"==typeof window?function(){}:(function(){function e(t){return t.replace(/^[!#/]+/,"/")}t.prototype={navigate:function(t){return null==t?void this.changed(location.hash):void(location.hash=t)},changed:function(t){this.listener.changed(e(t))},current:function(){return e(location.hash)}}}(),e.prototype={navigate:function(t){return null==t?void this.changed():(history.pushState({},null,t),this.initial=null,void this.changed())},changed:function(){this.listener.changed(location.pathname+location.search)},current:function(){return location.pathname+location.search}},r.prototype={changed:function(t){var e=this.collection.get(t);e&&this.action(e)},action:function(t){if("function"==typeof t.value){var e=t.current;t.value(t,e&&e.params)}},navigate:function(t){this.emitter.navigate(t)},current:function(){return this.collection.get(this.currentPath())},currentPath:function(){return this.emitter.current()}},r)}(),b=new _,x={Collection:_,setRouterType:function(t){return null==v&&(v=new y(b,t)),this},setStrictBehaviour:function(t){return o=t,this},add:function(t,n){return e(),b.add(t,n),this},get:function(t){return b.get(t)},navigate:function(t){return e().navigate(t),this},current:function(){return e().current()},currentPath:function(){return e().currentPath()},notifyCurrent:function(){return e().navigate(),this},parse:_.parse,$utils:{pathFromCLI:a,query:{serialize:f,deserialize:c}}};return function(){function t(t){t.preventDefault(),t.stopPropagation(),x.navigate(this.href)}r.registerAttrHandler("x-dynamic",function(e,n,r,o,i){i.onclick=t},"client")}(),x}),function(t){"use strict";function e(t,e){if("object"!=typeof t||null==e)return t;for(var n,r=t,o=e.split("."),i=o.length,l=0;i>l;l++)if(n=o[l],r=r[n],null==r)return r;return r}function n(t,e){for(var n in e)e[n]&&(t[n]=e[n]);return t}function r(t,n,r,o){if("function"==typeof n)return n(t)?t:null;if("undefined"==typeof r)return t==n?t:null;var i=null!=n?e(t,n):t,l=r,s=o;switch(l){case">":return i>s?t:null;case"<":return s>i?t:null;case">=":return i>=s?t:null;case"<=":return s>=i?t:null;case"!=":return i!=s?t:null;case"==":return i==s?t:null}return console.error("InvalidArgumentException: arr.js:check",arguments),null}function o(t){this.items=t}function i(t){o.prototype[t]=function(){var e=arguments.length,n=s[t](this.items,e>0?arguments[0]:null,e>1?arguments[1]:null,e>2?arguments[2]:null,e>3?arguments[3]:null);return n instanceof Array?(this.items=n,this):n}}var l=t.ruqq||(t.ruqq={}),s={where:function(t,e,n,o){var i=[];if(null==t)return i;for(var l,s=0,u=t.length;u>s;s++)l=t[s],null!=r(l,e,n,o)&&i.push(l);return i},each:"undefined"!=typeof Array.prototype.forEach?function(t,e){return null==t?t:(t.forEach(e),t)}:function(t,e){if(null==t)return t;for(var n=0,r=t.length;r>n;n++)e(t[n]);return t},remove:function(t,e,n,o){for(var i=0,l=t.length;l>i;i++)null!=r(t[i],e,n,o)&&(t.splice(i,1),i--,l--);return t},invoke:function(){for(var t=Array.prototype.slice.call(arguments),e=t.shift(),n=t.shift(),r=[],o=0;o<e.length;o++)r.push("function"==typeof e[o][n]?e[o][n].apply(e[o],t):null);return r},last:function(t,e,n,o){if(null==t)return null;if(null==e)return t[t.length-1];for(var i=t.length;i>-1;--i)if(null!=r(t[i],e,n,o))return t[i];return null},first:function(t,e,n,o){if(null==e)return t[0];for(var i=0,l=t.length;l>i;i++)if(null!=r(t[i],e,n,o))return t[i];return null},any:function(t,e,n,o){for(var i=0,l=t.length;l>i;i++)if(null!=r(t[i],e,n,o))return!0;return!1},isIn:function(t,e){for(var n=0;n<t.length;n++)if(e==t[n])return!0;return!1},map:"undefined"!=typeof Array.prototype.map?function(t,e){return null==t?[]:t.map(e)}:function(t,e){var n=[];if(null==t)return n;for(var r=0,o=t.length;o>r;r++)n.push(e(t[r],r));return n},aggr:function(t,e,n){for(var r=0,o=t.length;o>r;r++){var i=n(t[r],e,r);null!=i&&(e=i)}return e},select:function(t,e){if(null==t)return[];for(var n,r=[],o=0,i=t.length;i>o;o++)if(n=t[o],"string"==typeof e)r.push(n[e]);else if("function"==typeof e)r.push(e(n));else if(e instanceof Array){for(var l={},s=0;s<e.length;s++)l[e[s]]=t[o][e[s]];r.push(l)}return r},indexOf:function(t,e,n,o){for(var i=0,l=t.length;l>i;i++)if(null!=r(t[i],e,n,o))return i;return-1},count:function(t,e,n,o){for(var i=0,l=0,s=t.length;s>l;l++)null!=r(t[l],e,n,o)&&i++;return i},distinct:function(t,e){var n=[];if(null==t)return n;for(var r=0,o=t.length;o>r;r++){for(var i=!0,l=0;l<n.length;l++)if(e&&e(t[r],n[l])||null==e&&t[r]==n[l]){i=!1;break}i&&n.push(t[r])}return n},groupBy:function(t,e){for(var n,r,o,i=[],l=t.length,s=-1,u={};++s<l;)if(u[s]!==!0){for(o=t[s],n=[o],r=s;++r<l;)u[r]!==!0&&e(o,t[r])&&(u[r]=!0,n.push(t[r]));i.push(n)}return i}};s.each(["min","max"],function(t){s[t]=function(n,r){if(null==n)return null;for(var o=null,i=0,l=n.length;l>i;i++){var s=e(n[i],r);null!=o?"max"===t&&s>o?o=s:"min"===t&&o>s&&(o=s):o=s}return o}}),l.arr=function(t){return new o(t)},n(l.arr,s);for(var u in s)i(u)}("undefined"!=typeof window?window:global),function(t,e){"use strict";null==t&&(t="undefined"!=typeof window&&"undefined"!=typeof document?window:global),null==t.net&&(t.net={}),t.net.Uri=e(t)}(this,function(){"use strict";function t(t){return t&&"object"==typeof t&&"function"==typeof t.combine}function e(){for(var t,e="",n=0,r=arguments.length;r>n;n++)t=arguments[n],t&&(e?("/"!==e[e.length-1]&&(e+="/"),e+="/"===t[0]?t.substring(1):t):e=t);return e}function n(t){return"/"===t[t.length-1]?t.substring(0,t.length-1):t}function r(t){var e,n=new d;for(e in t)"string"==typeof t[e]&&(n[e]=t[e]);return n}function o(t){return t.replace(/\\/g,"/").replace(/^\.\//,"").replace(/^(\w+):\/([^\/])/,"/$1:/$2")}function i(t){return p.test(t)&&"/"===t[0]?t.substring(1):t}function l(t){var e=c.exec(t.value);null==e&&"/"===t.value[0]&&(t.protocol="file"),null!=e&&(t.protocol=e[1],t.value=t.value.substring(e[0].length))}function s(t){if(null!=t.protocol){if("file"===t.protocol){var e=p.exec(t.value);return void(e&&(t.host=e[1],t.value=t.value.substring(t.host.length)))}var n=t.value.indexOf("/",2);t.host=~n?t.value.substring(0,n):t.value,t.value=t.value.replace(t.host,"")}}function u(t){var e=t.value.indexOf("?");-1!==e&&(t.search=t.value.substring(e),t.value=t.value.substring(0,e))}function a(t){var e=f.exec(t.value),r=null==e?null:e[1];null!=r&&(t.file=r,t.value=t.value.substring(0,t.value.length-r.length),t.value=n(t.value),e=h.exec(r),t.extension=null==e?null:e[1])}var c=/^([a-zA-Z]+):\/\//,f=/([^\/]+(\.[\w\d]+)?)$/i,h=/\.([\w\d]+)$/i,p=/(^\/?\w{1}:)(\/|$)/,d=function(e){return null==e?this:t(e)?e.combine(""):(e=o(e),this.value=e,l(this),s(this),u(this),a(this),this.path=n(this.value),/^[\w]+:\//.test(this.path)&&(this.path="/"+this.path),this)};return d.prototype={cdUp:function(){return this.path?"/"===this.path?this:/^\/?[a-zA-Z]+:\/?$/.test(this.path)?this:(this.path=this.path.replace(/\/?[^\/]+\/?$/i,""),this):this},combine:function(o){if(t(o)&&(o=o.toString()),!o)return r(this);if(p.test(o))return new d(o);var i=r(this);if(i.value=o,u(i),a(i),!i.value)return i;if(o=i.value.replace(/^\.\//i,""),"/"===o[0])return i.path=o,i;for(;/^(\.\.\/?)/gi.test(o);)i.cdUp(),o=o.substring(3);return i.path=n(e(i.path,o)),i},toString:function(){var t=this.protocol?this.protocol+"://":"";return t+=e(this.host,this.path,this.file)+(this.search||""),this.file||this.search||(t+="/"),t},toPathAndQuery:function(){return e(this.path,this.file)+(this.search||"")},toRelativeString:function(t){if("string"==typeof t&&(t=new d(t)),0===this.path.indexOf(t.path)){var n=this.path?this.path.replace(t.path,""):"";return"/"===n[0]&&(n=n.substring(1)),e(n,this.file)+(this.search||"")}for(var r=this.path.split("/"),o=t.path.split("/"),i="",l=0,s=Math.min(r.length,o.length);s>l&&r[l]===o[l];l++);if(l>0&&(i=r.splice(0,l).join("/")),i){for(var u,a="",c=t.path;c;){if(0==this.path.indexOf(c)){u=this.path.replace(c,"");break}c=c.replace(/\/?[^\/]+\/?$/i,""),a+="../"}return e(a,u,this.file)}return this.toString()},toLocalFile:function(){var t=e(this.host,this.path,this.file);return i(t)},toLocalDir:function(){var t=e(this.host,this.path,"/");return i(t)},toDir:function(){var t=this.protocol?this.protocol+"://":"";return t+e(this.host,this.path,"/")},isRelative:function(){return!(this.protocol||this.host)},getName:function(){return this.file.replace("."+this.extension,"")}},d.combinePathes=e,d.combine=e,d}),function(){var t={};String.format=function(e){if(~e.indexOf("#{")){for(var n="",r=0,o=arguments[1];;){var i=e.indexOf("#{",r);if(-1==i)break;n+=e.substring(r,i);var l=e.indexOf("}",i);n+=Object.getProperty(o,e.substring(i+2,l)),r=++l}return n+=e.substring(r)}for(var s=1;s<arguments.length;s++){var u=t[s]||(t[s]=new RegExp("%"+s,"g"));e=e.replace(u,arguments[s])}return e},Object.defaults=function(t,e){for(var n in e)null==t[n]&&(t[n]=e[n]);return t},Object.clear=function(t,e){if(e instanceof Array)for(var n,r=0,o=e.length;o>r;r++)n=e[r],n in t&&delete t[n];else if("object"==typeof e)for(var i in e)i in t&&delete t[i];return t},Object.extend=function(t,e){if(null==t&&(t={}),null==e)return t;for(var n in e)null!=e[n]&&(t[n]=e[n]);return t},Object.getProperty=function(t,e){if("."===e)return t;for(var n=t,r="string"==typeof e?e.split("."):e,o=-1,i=r.length;null!=n&&++o<i;)n=n[r[o]];return n},Object.setProperty=function(t,e,n){for(var r=e.split("."),o=t,i=r[r.length-1];r.length>1;){var l=r.shift();o=o[l]||(o[l]={})}o[i]=n},Object.lazyProperty=function(t,e,n){if("object"!=typeof e){for(var r=e.split("."),o=t,i=r[r.length-1];r.length>1;){var l=r.shift();o=o[l]||(o[l]={})}r=null,o.__defineGetter__(i,function(){return delete o[i],o[i]=n(),n=null,o[i]})}else for(var s in e)Object.lazyProperty(t,s,e[s])},Object.clone=function(t){if(null==t)return null;switch(typeof t){case"number":case"string":case"function":return t}if(t instanceof Array){for(var e=[],n=0,r=t.length;r>n;n++)e[n]=Object.clone(t[n]);return e}var o=t.constructor;if("function"==typeof o&&(o===String||o===Number||o===RegExp||o===Date))return new o(t);var i={};for(var l in t)i[l]=Object.clone(t[l]);return i},Object.observe=function(t,e,n){if(null==t.__observers&&Object.defineProperty(t,"__observers",{value:{},enumerable:!1}),t.__observers[e])return void t.__observers[e].push(n);(t.__observers[e]||(t.__observers[e]=[])).push(n);var r=e.split("."),o=t,i=e;r.length>1&&(i=r.pop(),o=Object.getProperty(t,r));var l=o[i];Object.defineProperty(o,i,{get:function(){return l},set:function(n){l=n;for(var r=t.__observers[e],o=0,i=r.length;i>o;o++)r[o](n)}})},Date.format=function(t,e){function n(t){return t>9?t:"0"+t}e||(e="MM/dd/yyyy"),e=e.replace("MM",n(t.getMonth()+1));var r=t.getFullYear();return e.indexOf("yyyy")>-1?e=e.replace("yyyy",r):e.indexOf("yy")>-1&&(e=e.replace("yy",r.toString().substr(2,2))),e=e.replace("dd",n(t.getDate())),e.indexOf("HH")>-1&&(e=e.replace("HH",n(t.getHours()))),e.indexOf("mm")>-1&&(e=e.replace("mm",n(t.getMinutes()))),e.indexOf("ss")>-1&&(e=e.replace("ss",n(t.getSeconds()))),e},RegExp.fromString=function(t,e){return new RegExp(t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),e)},Function.invoke=function(){var t=Array.prototype.slice.call(arguments),e=t.shift(),n=t.shift();return function(){return e[n].apply(e,t)}}}(),function(t){function e(){}function n(){}function r(t,e,n){if(t instanceof Array){for(var o,i=[],l=0,s=t.length;s>l;l++)o=r(t[l],e,n),t[l].tagName===u&&s-1>l&&t[l+1].tagName===a&&(l+=1,null==o&&(o=r(t[l].nodes,e,n))),null!=o&&(o instanceof Array?i=i.concat(o):i.push(o));return i}if(null!=t.content)return{content:t.content,type:t.type};if(t.tagName===u){var c=t.attr.id?e[t.attr.id]:n;return c?null==t.nodes?c:r(t.nodes,e,c):null}var f={tagName:t.tagName||t.compoName,attr:t.attr,type:t.type,controller:t.controller};return t.nodes&&(f.nodes=r(t.nodes,e,n)),f}function o(t,e){if(null==e&&(e={}),t instanceof Array){for(var n=t,r=0,l=n.length;l>r;r++)o(n[r],e);return e}var u=t.tagName;if(null!=u&&u===s){var a=t.attr.id;!a&&console.error("@content has no id specified",t),e[a]&&console.error("@content already exists",a),e[a]=i(t)}return null!=t.nodes&&o(t.nodes,e),e}function i(t){for(var e,n=t.parent;null!=n&&n.tagName!==c;){var r={type:n.type,tagName:n.tagName,attr:n.attr,controller:n.controller,nodes:null};null==e?(e=r,e.nodes=t.nodes):e.nodes=[r],n=n.parent}return null!=e?e:t.nodes}var l=t.mask||Mask,s="@content",u="@placeholder",a="@else",c="layout:view",f="layout:master",h={};e.prototype={constructor:e,render:function(){h[this.attr.id]=this}},l.registerHandler(f,e),n.prototype={constructor:n,renderStart:function(){var t=h[this.attr.master];return null==t?void console.error("Master Layout is not defined for",this):(null==this.contents&&(this.contents=o(this.nodes),Object.keys&&0===Object.keys(this.contents).length&&console.warn("no contents: @content #someID")),void(this.nodes=r(t,this.contents).nodes))}},l.registerHandler(c,n)}(this),obj_extend(globals,this)}).call({},"undefined"!=typeof global?global:window);
// end:source /ref-atma-libs/browser/globals.js
// source /ref-logger/lib/browser.min.js
!function(n,e){"use strict";var r="undefined"==typeof window?global:window,t=e(r);r.logger=t}(this,function(n){"use strict";function e(){return this}var r;!function(){var e,t={exports:{}};/*!
	 * format v0.8.9
	 *
	 * MIT license
	 * http://opensource.org/licenses/MIT
	 *
	 * (c) 2012, 2014
	 */
!function(r,o){function u(){return o(a,i)}var i,l="undefined"!=typeof e&&null!=e.navigator,a=l?e:n;"undefined"!=typeof Mask&&(i=Mask),"undefined"!=typeof mask&&(i=mask),null==i&&r&&(i=r.mask||r.atma&&r.atma.mask),null==i&&(i=a.mask||a.atma&&a.atma.mask);var c=u();return"undefined"!=typeof t&&"undefined"!=typeof t.exports&&(t.exports=c),l&&(e.Formatter=c),c}(this,function(n,e){function r(n){if(null==n)return"";switch(typeof n){case"string":return f.apply(null,arguments);case"number":return c.apply(null,arguments);case"object":return o(n)?a.apply(null,arguments):n.toString.apply(n,Array.prototype.slice.call(arguments,1));default:return""}}var t,o;!function(){t=function(n){return"number"==typeof n&&!isNaN(n)},o=function(n){return null!=n&&"object"==typeof n&&"function"==typeof n.toUTCString&&"function"==typeof n.constructor.UTC}}();var u,i;!function(){u=function(n,e){if(null==n&&(n={}),null==e)return n;for(var r in e)n[r]=e[r];return n},i=function(n,e){for(var r=n,t=e.split("."),o=-1,u=t.length;null!=r&&++o<u;)r=r[t[o]];return r}}();var l;!function(){l=function(n,e,r,t){for(var o,u=0,i=n.length;i>e;)if(o=n.charCodeAt(++e),92!==o)if(o!==r){if(o===t&&--u<0)break}else u++;else e++;return e===i||u>-1?-1:e}}();var a;!function(){function n(n){return n>9?n:"0"+n}var e,r;a=function(n,a,d){return e=n,r=d||g[h],a=a.replace("Mm",l).replace("MMM",c).replace("MM",i).replace("#M",u).replace("yyyy",t).replace("yy",o).replace("dd",s).replace("#d",f).replace("Dd",v).replace("DDD",p).replace("HH",b).replace("hh",m).replace("#h",y).replace("mm",_).replace("#m",w).replace("ss",x).replace("#s",S)};var t,o,u,i,l,c,f,s,v,p,d,b,y,m,w,_,S,x;t=function(){return e.getFullYear()},o=function(){return e.getFullYear()%100},u=function(){return e.getMonth()+1},i=function(){return n(e.getMonth()+1)},l=function(){return r.MONTH_SHORT[e.getMonth()]},c=function(){return r.MONTH[e.getMonth()]},f=function(){return e.getDate()},s=function(){return n(e.getDate())},v=function(){return r.DAY_SHORT[e.getMonth()]},p=function(){return r.DAY_SHORT[e.getMonth()]},d=function(){return e.getHours()},b=function(){return n(e.getHours())},m=b,y=d,w=function(){return e.getMinutes()},_=function(){return n(e.getMinutes())},S=function(){return e.getSeconds()},x=function(){return n(e.getSeconds())}}();var c;!function(){function n(n,e){return n.replace(/^([\d]{0,2})(([\d]{3})*)$/,function(n,r,t){var o=r?r+e:"";return o+t.replace(/([\d]{3})/g,"$1"+e).slice(0,-1)})}function e(n){return n>=48&&57>=n}function r(n,e){for(var r="";--e>0;)r+=n;return r}c=function(t,o,u){var i,l,a,c,f,s,h,v=null==u||null==u.NUMBER?g.$get("NUMBER"):u.NUMBER,p=!e(o.charCodeAt(0));return p&&(f=o[0],o=o.substring(1),","===f&&(f=v.Delimiter)),i=o.split("."),l=i[0],a=1===i.length?null:i[1],c=null==a?0:0===a.length?null:a.length,h=null==c?t.toString():t.toFixed(c),s=h.indexOf("."),-1===s&&(s=h.length),l.length>=s&&(h=r("0",l.length-s+1)+h),null!=c&&c>h.length-s-1&&(h+=r("0",c-(h.length-s+1))),p?(s=h.indexOf("."),null==a?n(h,f):3>=s?h.replace(".",v.Point):n(h.substring(0,s),f)+v.Point+h.substring(s+1)):h.replace(".",v.Point)}}();var f,s;!function(){function n(n,t,o){for(var u,i="",a=0,c=0,f=-1;-1!==(a=n.indexOf("{",a));)if(a>0&&92===n.charCodeAt(a-1))i+=n.substring(c,a-1)+"{",c=a+1;else{if(i+=n.substring(c,a),c=a+1,a=l(n,a,123,125),-1===a)break;switch(u=new r(n.substring(c,a)),u.accessorType){case"index":f<u.accessor&&(f=u.accessor);break;case"property":-1===f&&(f=0)}i+=u.process(t,o),c=a+1}return c<n.length&&(i+=n.substring(c)),++f<t.length?e(i,t.slice(f)):i}function e(n,e){for(var r,t=n,o=/%s|%d/,u=o.test(n),i=-1,l=e.length;++i<l;)r=e[i],u!==!0||0!==i&&!o.test(t)?(""!==t&&(t+=" "),t+=r):t=t.replace(o,r);return t}f=function(e){return n(e,Array.prototype.slice.call(arguments,1))},s=function(e,r,t){return n(e,r,t)};var r;!function(){function e(n,e){var r=d.exec(e);return null==r?void console.error("Format pattern not matched",e):(n.accessorType=r[s]?"index":"property",n.accessor="index"===n.accessorType?parseInt(r[s]):r[g],n.alignment=r[h]||null,n.pattern=r[v]||null,void(n.pluralizer=r[p]||null))}function u(n,e){if(null==n||isNaN(n))return e;var r=0>n?-1*n:n;if(e.length>r)return e;var t=l(" ",r-e.length);return 0>n?e+t:t+e}function l(n,e){for(var r="";--e>-1;)r+=n;return r}var f={};r=function(n){return f.hasOwnProperty(n)?f[n]:(f[n]=this,void e(this,n))},r.prototype={accessorType:null,accessor:null,alignment:null,pattern:null,pluralizer:null,process:function(e,r){var l,f=this.accessorType,s=this.accessor,g=this.pattern,h=this.alignment,v=this.pluralizer;if("index"===f&&(l=e[s]),"property"===f&&(l=i(e[0],s)),null==l)return u(h,"");if(g)return t(l)?u(h,c(l,g,r)):o(l)?u(h,a(l,g,r)):u(h,l.toString(g,r));if(v){var p=pluralize(l,v,r);return-1===p.indexOf("{")?p:n(p,e,r)}return u(h,l.toString())}};var s=2,g=3,h=5,v=7,p=9,d=/^((\d+)|([\w\d._]+))(,([-\d]+))?(:(.+))?(;(.+))?$/}()}();var g,h;return function(){h="en",g={$register:function(n,e){var r=this[n]||(this[n]={});u(r,e)},$get:function(n,e){var r=null==e?this[h]:this[e]||this[h];return r[n]},$use:function(n){return n=n.toLowerCase(),null==this[n]?void console.error("<FormatterLib> Language is not defined",n):void(h=n)}},function(){var n=["January","February","March","April","May","June","July","August","September","October","November","December"],e=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],t=["Mon","Tues","Weds","Thurs","Fri","Sat","Sun"];g.$register("en",{MONTH:n,MONTH_SHORT:e,DAY:r,DAY_SHORT:t,NUMBER:{Delimiter:",",Point:"."},Pluralize:"1:0; *:1"})}(),function(){var n=["Januar","Februar","M�rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],e=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];g.$register("de",{MONTH:n,MONTH_SHORT:n.map(function(n){return n.substring(0,3)}),DAY:e,DAY_SHORT:e.map(function(n){return n.substring(0,2)}),NUMBER:{Delimiter:".",Point:","},Pluralize:"1:0; *:1"})}()}(),null!=e&&e.registerUtil("format",{arguments:"parsed",process:r}),r.Lang=g,r}),r=t.exports}();var t,o,u,i,l,a=100,c=75,f=50,s=25,g=0,h=-25,v={formatMessage:!0,logCaller:!0,logDate:!1,logMeta:null,color:"ascii",handleExceptions:!1},p=f;!function(){t=function(n){return Object.prototype.toString.call(n).replace("[object ","").replace("]","")},o=function(n){"function"==typeof n&&(n=n.prototype);for(var e,r,t=1,o=arguments.length;o>t;t++){e="function"==typeof arguments[t]?arguments[t].prototype:arguments[t];for(r in e)n[r]=e[r]}return n},u=function(n,e){if(null==e)return n;for(var r in e)n[r]=e[r];return n},i=function(){function n(r){if(null==r)return r;var o,u=t(r);switch(u){case"String":case"Number":case"Date":case"RegExp":case"Function":case"Error":case"Boolean":return r;case"Array":case"Arguments":o=[];for(var i=0,l=r.length;l>i;i++)o[i]=n(r[i]);return o;case"Object":case"global":if(-1!==e.indexOf(r))return"<circular>";e.push(r),o={};for(var a in r)o[a]=n(r[a]);return o;default:return console.warn("obj_dimissCircular: Unknown type",u),r}}var e;return function(r){return"object"==typeof r&&null!=r&&(e=[],r=n(r),e=null),r}}(),l=function(){function n(n){for(var e="",r=0;n>r;r++)e+="  ";return e}return function e(r,o,u){null==u&&(u=0);var i=["",0];if("undefined"==typeof r)return i[1]="<undefined>",o(i,"undefined"),i[1];if(null==r)return i[1]="<null>",o(i,"null"),i[1];var l=t(r);switch(l){case"Array":case"Arguments":for(var a,c="[",f=r,s=0,g=f.length;g>s;s++)a=f[s],"["===c&&(c+="\n"),c+=n(u+1)+e(a,o,u+1)+(g-1>s?",":"")+"\n";return c+=n(u)+"]";case"RegExp":return i[1]=r.toString(),o(i,"regexp"),i[1];case"Date":return i[1]=r.toISOString(),o(i,"date"),i[1];case"String":case"Number":case"Boolean":return i[1]=r,o(i,l.toLowerCase()),i[1];case"Function":return i[1]="<function>",o(i,l.toLowerCase()),i[1];case"Error":return r.toString().red;case"Object":case"global":var h,c="{",v=Object.keys(r);for(s=0,g=v.length;g>s;s++)h=v[s],"{"===c&&(c+="\n"),i[0]=h,i[1]=r[h],o(i),c+=n(u+1)+i[0]+": "+e(r[h],o,u+1)+(g-1>s?",":"")+"\n";return c+=n(u)+"}"}}}()}();var d;!function(){function n(n){")"===n[n.length-1]&&(n=n.substr(n.indexOf("(")+1,n.lastIndexOf(")")-1));var t=/^(.+):(\d+):(\d)/.exec(n);if(null==t)return null;var o=r.path=t[1];return r.file=o.substring(o.search(/[\/\\][^\/\\]+$/)+1),r.line=t[2],null==e&&(e=r.file),r}var e,r={path:null,file:null,line:null};d=function(r){for(var t,o=(new Error).stack.split("\n").splice(1),u=o.length,i=-1;++i<u&&(t=n(o[i]),null==t||null==e||t.file===e););return null==t||i===u?"":r.replace("P",t.path).replace("F",t.file).replace("L",t.line)}}();var b;!function(){b=function(n){return"string"!=typeof n&&(n="dd-MM hh:mm:ss"),r(new Date,n)}}();var y,m;!function(){m=function(n,e){if(v.formatMessage===!1)return v.logMeta&&n.unshift(v.logMeta(n)),n;var r=y(n);return null!=e._name&&(r=e._name.color+" "+r),v.logCaller!==!1&&(r+=d(" (F:L)",5)),"function"==typeof v.logMeta&&(r=v.logMeta(n)+" "+r),v.logDate!==!1&&(r=b(v.logDate)+" "+r),r},y=function(n){for(var e,r,t="",o=/%s|%d/,u=n.length>1&&"string"==typeof n[0]&&o.test(n[0]),i=0,l=n.length;l>i;i++)r=n[i],r instanceof String&&(r=String(r)),e="string"==typeof r?r:k.formatJSON(r),i>0&&u&&o.test(t)?t=t.replace(o,e):(""!==t&&(t+=" "),t+=e);return t}}();var w;!function(){function n(n){var r=E.error(n).getTransport();if(null!=r){if(r.flush)return void r.flush(e);if(r.flushAsync)return void r.flushAsync(e)}e()}function e(){}w=function(){window.onerror=n}}();var _;!function(){_=function(n,e){switch(n){case"level":p=e;break;case"levels":for(var r in e)S(r,e[r]);break;case"transport":O.define(e);break;case"handleExceptions":w(e);break;case"color":k.define(e);case"logCaller":case"logDate":case"formatMessage":case"meta":v[n]=e;break;default:console.error("Logger: unknown configuration",n)}}}();var S,x;!function(){function n(e){var r=e.lastIndexOf(".");return-1===r?o:(e=e.substring(0,r),t.hasOwnProperty(e)&&t[e].strict!==!0?t[e]:n(e))}function e(n,e){var o=/\.\*$/.test(n);o&&(n=n.slice(0,-2)),t[n]={level:e,strict:o===!1},o&&r(n,e,o)}function r(n,e){var r,o=n.length;for(r in t)r.length<=o+1||0===r.indexOf(n+".")&&(t[r]={level:e})}S=function(n,r){e(n,r)},x=function(e){var r=t[e];return r===o?null:(null==r&&(r=t[e]=n(e)),r.level)};var t={},o={level:null}}();var k;!function(){function n(n){return Object.keys(n.value).forEach(function(e){try{Object.defineProperty(String.prototype,e,{get:function(){var r=this,t=n.decorator;null!=t&&r.__wrapped!==!0&&(r=t(r));var o=n.start(e)+r+n.END;return null==t?o:(o=new String(o),o.__wrapped=!0,o)},enumerable:!1,configurable:!0})}catch(r){}}),Object.defineProperty(String.prototype,"color",{get:function(){return u(this,n)},enumerable:!1,configurable:!0}),function(e){return u(e,n)}}k={init:{ascii:function(){e=n(o)},html:function(){e=n(r)},none:function(){e=n(t)}},colorize:function(n){return e(n)},formatJSON:function(n){var e=n;return void 0!==e&&"object"==typeof e&&(e=i(n)),l(e,function(n,e){e&&a[e]&&(n[1]=String(n[1])[a[e]]),n[0]&&(n[0]=n[0].bold)})},define:function(n){return k.init[n]?k.init[n]():void console.error("Invalid Color Type ",n)}};var e,r,t={END:"",value:{red:"",green:"",yellow:"",blue:"",magenta:"",cyan:"",bold:"",italic:"",underline:"",inverse:""},start:function(){return""}};!function(){r={END:"</span>",value:{red:"color:red",green:"color:green",yellow:"color:yellow",blue:"color:blue",magenta:"color:magenta",cyan:"color:cyan",bg_black:"background-color:black",bg_red:"background-color:red",bg_green:"background-color:green",bg_yellow:"background-color:yellow",bg_blue:"background-color:blue",bg_magenta:"background-color:magenta",bg_cyan:"background-color:cyan",bg_white:"background-color:white",bold:"font-weight:bold",italic:"font-style:italic",underline:"text-decoration:underline",inverse:"color:black;background:white"},start:function(n){var e='<span style="'+this.value[n]+'">';return e},decorator:function(e){return n(e)}};var n;!function(){function e(n){return r[n]}n=function(n){return n.replace(/[&"'<>\/]/g,e)};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}}()}();var o={type:"ascii",START:"[",END:"[0m",value:{red:"31m",green:"32m",yellow:"33m",blue:"34m",magenta:"35m",cyan:"36m",white:"37m",black:"30m",bg_black:"40m",bg_red:"41m",bg_green:"42m",bg_yellow:"43m",bg_blue:"44m",bg_magenta:"45m",bg_cyan:"46m",bg_white:"47m",bold:"1m",italic:"3m",underline:"4m",inverse:"7m"},start:function(n){return this.START+this.value[n]}};e=n(o);var u,a={string:"yellow",number:"cyan","boolean":"cyan",regexp:"magenta",date:"magenta","function":"magenta","null":"blue",undefined:"blue"};!function(){function n(n,e,r,t){var o=n.substring(e,r);return t.decorator?t.decorator(o):o}function e(n,e){for(var r,t=1,o=n.length,u=e;o>u;u++)if(r=n.charCodeAt(u),60===r&&t++,62===r&&t--,0===t)return u;return-1}function r(n,e,r){for(var t,o="",u=n.length,i=-1;++i<u;)t=n[i],t.end<e||(o+=r.start(t.key));return o}function t(n){if(null==n.rgx_search){var e="(";for(var r in n.value)e+="("===e?r:"|"+r;e+=")<",n.rgx_search=new RegExp(e,"g")}return n}u=function(o,i){t(i),i.rgx_search.lastIndex=0;for(var l,a,c,f,s="ascii"===i.type,g=s&&[]||null,h="",v=0;;){if(l=i.rgx_search.exec(o),null==l)break;if(a=l[1],null!=i.value[a]){var p,f,d=l.index,b=d+l[0].length;v!==d&&(h+=n(o,v,d,i)),c=e(o,b),v=c+1,-1!==c?(p=i.start(a),f=o.substring(b,c),f=u(f,i),h+=p+f+i.END+(s?r(g,c,i):""),s&&g.push({end:c,key:a}),i.rgx_search.lastIndex=c+1):h+=n(o,d,c,i)}}return v<o.length&&(h+=n(o,v,o.length,i)),h}}()}();var E,O=function(){var n,e,r={};return function(){function n(n,e){var t=r(n);""!==t&&e(n,t)}function r(n){var e=n.buffer;if(0===e.length)return"";var r=n.newLine,t=e.join(r)+r;return e.length=0,t}function t(n,e,r){n&&n(r);var t=e.length,o=-1;if(0!==t){for(;++o<t;)e[o](r);e.length=0}}e={flushAsync:function(n,e,o,u){if(n.busy)return void(null!=u&&n.listeners.push(u));var i=r(n);return""===i?void(u&&u()):(n.busy=!0,void o(n,i,function(){n.busy=!1,t(u,n.listeners),n.buffer.length>e&&n.flushAsync()}))},flush:function(e,r,t){return e.busy?void e.listeners.push(function(){n(e,r,t)}):(n(e,r),void(t&&t()))}}}(),r.http=function(){var n,r,t,o,u,i=0;!function(){function e(n,e,r,o,u){e=e.toUpperCase();var i=new XMLHttpRequest;if(r)for(var l in r)i.setRequestHeader(l,r[l]);if(i.onreadystatechange=function(){4===i.readyState&&u(i.responseText,i.status)},"GET"===e){if(o=t(o),null==o)return void(u&&u("Encode failed"));n+=o,o=void 0}i.open(e,n,!0),i.send(o)}function r(n,e,r){function o(){r&&r(),r=null}var u=t(e);if(null!=u){var i=new Image;i.onload=o,i.onerror=o,i.src=n+u}}function t(n){try{return encodeURIComponent(n)}catch(e){return E.error("Logger encode error",e),null}}u=function(t,u){"img"===o?r(n,t,u):e(n,method||"POST",headers,t,u)}}();var l;return function(){function n(n,e,r){u(e,r)}l={newLine:"\n",busy:!1,listeners:[],buffer:[],write:function(n){n=n.replace(/\n/g,"\\n"),this.buffer.push(n),this.buffer.length>i&&this.flushAsync()},flushAsync:function(r){e.flushAsync(this,i,n,r)}}}(),{write:function(n){l.write(n)},flushAsync:function(n){l.flushAsync(n)},cfg:function(e){null!=e.bufferSize&&(i=e.bufferSize),n=e.url||n,r=e.method||r,t=e.headers||t,o=/(\.gif|\.jpg|\.png|\.jpeg)/.test(n)?"img":"xhr"}}},r.console=function(){function n(n){console.log.apply(console,n)}return{write:function(e){return"string"==typeof e?n([e]):void n(e)},cfg:function(){}}}(),n=r.console,{define:function(e){var t=e.type;if(n=r[t],null==n)throw Error("Transport type is not supported `"+t+"`");return"function"==typeof n&&(n=n()),n.cfg(e),this},write:function(e){n.write(e)},get:function(e){if(null==e)return n;var r=n[e];if(null==r)throw Error("No transport: "+e);return"function"==typeof r?r():r}}}();return function(){var n,r;!function(){n=function(n,r){var t=r,o=p;(null==n||n instanceof E==!1)&&(n=e);var u=n._scope;if(null!=u){var i=x(u);if(null!=i)return o>=i+(r-f)}return null!=n._level&&(t=n._level),o>=t?!0:!1},r=function(e,r){return function(){if(n(this,e)===!1)return this;var t=m(arguments,this);return r&&"string"==typeof t&&(t=r(t)),O.write(t),this}};var e={_parent:null,_level:null,_name:null,_scope:null}}();var t,o;!function(){t={_parent:null,_level:null,_name:null,cfg:function(n){if(0===arguments.length)return v;if("string"==typeof n)return 1===arguments.length?v[n]:(_(n,arguments[1]),this);for(var e in n)_(e,n[e]);return this},color:k,formatMessage:function(){return y(arguments)},log:r(f),warn:r(s,function(n){return n.yellow.bold}),debug:r(c),trace:r(a),error:r(g,function(n){return n.red.bold}),getTransport:function(){return O.get()},create:function(n,e){return new l(this instanceof E&&this||null,n,e)},level_LOG:f,level_WARN:s,level_TRACE:a,level_DEBUG:c,level_ERROR:g,level_EXCEPTION:h},o=u({},t),o.log=o.warn=o.debug=o.trace=o.error=e}();var i;!function(){i=function(){},i.prototype=o}();var l;!function(){l=function(n,e,r){function t(){return o.log.apply(o,arguments)}this._parent=n,this._name=e,this._level=r,null!=n&&n._name&&(this._name=n._name+"."+e),this._scope=this._name;var o=this;return t.__proto__=o,t},l.prototype=t,u(l,t)}(),E=function(e,r){return"string"==typeof e?new l(this instanceof E&&this||null,e,r):"number"==typeof e?n(null,e)?t:o:"boolean"==typeof e&&e===!0?t:o},E.prototype=t,u(E,t)}(),function(){function n(n){var e=parseInt(r[++o]);return isNaN(e)?(E.error("<atma-logger> invalid cli command --"+n+" NUMBER"),null):e}if("undefined"!=typeof process)for(var e,r=process.argv.slice(2),t=r.length,o=-1;++o<t;)switch(e=r[o].replace(/^\-+/,"")){case"no-color":E.cfg("color","none");break;case"level":var u=n("level");if(null==u)break;E.cfg("level",u);break;default:if(0===e.indexOf("level.")){var u=n("level.SCOPE_NAME");if(null==u)break;e=e.replace("level.","");var i={};i[e]=u,E.cfg("levels",i)}}}(),E});
//# sourceMappingURL=browser.min.js.map
// end:source /ref-logger/lib/browser.min.js

logger.cfg({
	formatMessage: false,
	transport: {
		type: 'console'
	}
});


(function(){
	var global = window;
	var __env = 'dom';
	var __global = window;
	
	
	// source /src/vars.js
	
	var _Array_slice = Array.prototype.slice,
		mask = global.mask;
		
		
	RegExp.prototype.toJSON = RegExp.prototype.toString;
	
	// end:source /src/vars.js
	
	// source /src/assert/assert.browser.js
	(function(global){
		
		// source /ref-assertion/lib/assert.embed.js
		var assert;
		(function(global, exports){
			
			(function(){
				// source /src/exports.js
				// source scope-vars
				
				
				var _Array_slice = Array.prototype.slice,
				
					assert = {
						errors: 0
					};
				// end:source scope-vars
					
				// source utils/is
				function is_Array(ar) {
					return Array.isArray(ar);
				}
				
				function is_Boolean(arg) {
					return typeof arg === 'boolean';
				}
				
				function is_Null(arg) {
					return arg === null;
				}
				
				function is_NullOrUndefined(arg) {
					return arg == null;
				}
				
				function is_Number(arg) {
					return typeof arg === 'number';
				}
				
				function is_String(arg) {
					return typeof arg === 'string';
				}
				
				function is_Symbol(arg) {
					return typeof arg === 'symbol';
				}
				
				function is_Undefined(arg) {
					return arg === void 0;
				}
				
				function is_RegExp(re) {
					return obj_typeof(re) === 'RegExp';
				}
				
				function is_Object(arg) {
					return typeof arg === 'object' && arg !== null;
				}
				
				function is_Date(d) {
					return obj_typeof(d) === 'Date';
				}
				
				function is_Error(e) {
					return obj_typeof(e) === 'Error' || e instanceof Error;
				}
				
				function is_Function(arg) {
					return typeof arg === 'function';
				}
				
				function is_Buffer(buff){
					if (typeof Buffer === 'undefined') 
						return false;
					
					return buff instanceof Buffer;
				}
				
				function is_Arguments(x){
					return obj_typeof(x) === 'Arguments';
				}
				
				function is_Primitive(arg) {
					return arg === null
						|| typeof arg === 'boolean'
						|| typeof arg === 'number'
						|| typeof arg === 'string'
						|| typeof arg === 'symbol'
						|| typeof arg === 'undefined'
						;
				}
				// end:source utils/is
				// source utils/object
				var obj_typeof,
					obj_inherit,
					obj_extend,
					obj_keys
					;
					
				
				(function(){
				
					
					obj_typeof = function(x) {
						return Object
							.prototype
							.toString
							.call(x)
							.replace('[object ', '')
							.replace(']', '');
					};
					
					obj_inherit = function(Ctor, base) {
						
						function temp(){}
						temp.prototype = base.prototype;
						
						Ctor.prototype = new temp;
					};
				
					obj_keys = Object.keys
						? Object.keys
						: getKeys;
					
					obj_extend = function(target, source){
						if (target == null) 
							target = {};
							
						if (source == null) 
							return target;
						
						for(var key in source){
							target[key] = source[key];
						}
						
						return target;
					};
					
					// private
					
					function getKeys(obj) {
						var keys = [];
						for(var key in keys)
							keys.push(key);
						
						return keys;
					}
					
				}());
				
				// end:source utils/object
				// source utils/string
				function str_truncate(str, length) {
					
					if (is_String(str) == false) 
						return str;
					
					return str.length < length
						? str
						: str.slice(0, length)
						;
				}
				// end:source utils/string
				// source utils/stack
				var stack_prepair;
				
				(function(){
					
					stack_prepair = function(stack) {
						if (stack == null) 
							return '';
						
						var lines = stack.split('\n'),
							startIndex = 1, endIndex = lines.length
							;
						
						var rgx_start = /(^([ \t]*at )?[\w\.]*assert[_\.])|(^([ \t]*at )?\w+\.assert)/i,
							rgx_end = /(^([ \t]*at )?runCase)/i
							;
						
						var i = 0, 
							imax = lines.length;
						
						while ( ++i < imax ){
							if (rgx_start.test(lines[i])) 
								startIndex = i + 1;
							
							if (rgx_end.test(lines[i])) {
								endIndex = i;
								break;
							}
						}
						
						lines.splice(endIndex);
						lines.splice(1, startIndex - 1);
						
						
						return lines.join('\n');
					};
					
				}());
				// end:source utils/stack
				// source utils/style
				var style_get;
				(function(){
					
					var getters = {};
					
					// source style/box
					(function(){
						// Mainly for the FireFox support
						// as for instance 'padding' returns empty string
						
						obj_extend(getters, {
							'border-width': boxSizeDelegate('border-%anchor-width'),
							'padding': boxSizeDelegate('padding-%anchor'),
							'margin': boxSizeDelegate('margin-%anchor'),
						});
						
						function boxSizeDelegate(pattern) {
							return function(el){
								return boxSize(el, pattern);
							};
						}
						function boxSize(el, pattern) {
							var sizes = [];
							var equal = true;
							var prev  = null;
							(['top', 'right', 'bottom', 'left']).forEach(function(anchor){
								var style = pattern.replace('%anchor', anchor),
									val = getStyle(el, style);
								
								equal = prev == null || prev === val;
								prev  = val;
								
								sizes.push(val);
							});
							if (equal) {
								return sizes[0];
							}
							return sizes.join(' ');
						}
						
					}());
					
					// end:source style/box
					// source style/color
					(function(){
						
						// getComputedStyle returns RGB for colors
						
						obj_extend(getters, {
							'background-color': colorDelegate('background-color'),
							'color': colorDelegate('color'),
						});
						
						function colorDelegate(property) {
							return function(el, expect){
								return color(el, property, expect);
							};
						}
						
						function color(el, property, expect) {
							var current = getStyle(el, property);
							if (isEmpty(current)) {
								return current;
							}
							var x = toBrowsersColor(expect);
							if (x === current) {
								return expect;
							}
							if (isHex(expect) && isRgb(current)) {
								return toHex(current);
							}
							
							return current;
						}
						
						var rgx_RGB = /rgba? *\( *([0-9]{1,3}) *, *([0-9]{1,3}) *, *([0-9]{1,3})/;
						var div = null;
						
						function isRgb(any) {
							return /^rgb/.test(any);
						}
						function isHex(any) {
							return /^#/.test(any);
						}
						function isEmpty(any) {
							return any == null || any === '';
						}
						
						function toHex(rgb) {
							
							var values = rgx_RGB.exec(rgb);
							if (values == null || values.length !== 4)
								return rgb;
							
							var r = Math.round(parseFloat(values[1]));
							var g = Math.round(parseFloat(values[2]));
							var b = Math.round(parseFloat(values[3]));
							return "#" 
								+ (r + 0x10000).toString(16).substring(3).toUpperCase() 
								+ (g + 0x10000).toString(16).substring(3).toUpperCase()
								+ (b + 0x10000).toString(16).substring(3).toUpperCase();
						}
						function toBrowsersColor (any) {
							if (div == null) {
								div = document.createElement('div');
								document.body.appendChild(div);
							}
							div.style.color = any;
							return getComputedStyle(div).color;
						}
					}());
					// end:source style/color
					
					style_get = function (el, property, expect) {
						var fn = getters[property];
						if (fn) {
							return fn(el, expect);
						}
						return getStyle(el, property);
					};
					
					
					function getStyle(el, property) {
						if (global.getComputedStyle == null) {
							return $(el).css(property);
						}
						
						var styles = global.getComputedStyle(el);
						var x = styles.getPropertyValue(property);
						return x === ''
							? el.style.getPropertyValue(property)
							: x;
					}
				}());
				// end:source utils/style
				
				// source error
				var fail;
				
				(function() {
				
					fail = function assert_fail (actual, expected, message, operator, stackStartFunction) {
						
						var error = new AssertionError({
							message: message,
							actual: actual,
							expected: expected,
							operator: operator,
							stackStartFunction: stackStartFunction
						});
						
						throw error;
					};
				
					assert.AssertionError = AssertionError;
					assert.fail = function (mix) {
						var error = mix;
						if (typeof mix === 'string') {
							error = new AssertionError({
								message: message
							});
						}
						assert.errors++;
						
						throw error;
					};
					assert.prepairStack = stack_prepair;
					
					
					// private
				
					// {message, actual, expected }
					function AssertionError(options) {
						this.name = 'AssertionError';
						this.actual = options.actual;
						this.expected = options.expected;
						this.operator = options.operator;
				
						if (options.message) {
							this.message = options.message;
							this.generatedMessage = false;
						} else {
							this.message = getMessage(this);
							this.generatedMessage = true;
						}
						
						var stackStartFunction = options.stackStartFunction || fail;
				
						if (Error.captureStackTrace) {
							Error.captureStackTrace(this, stackStartFunction);
						} else {
							
							this.stack = new Error().stack;
						}
						
						this.stack = stack_prepair(this.stack);
					};
					obj_inherit(AssertionError, Error);
				
					function getMessage(error) {
						var str_actual = JSON.stringify(error.actual, replacer),
							str_expected = JSON.stringify(error.expected, replacer);
				
						return str_truncate(str_actual, 128) + ' ' + error.operator + ' ' + str_truncate(str_expected, 128);
					}
				
				
					function replacer(key, value) {
						if (is_Undefined(value))
							return '' + value;
				
						if (is_Number(value) && (isNaN(value) || !isFinite(value)))
							return value.toString();
				
						if (is_Function(value) || is_RegExp(value))
							return value.toString();
				
						return value;
					}
					
					
				
				}());
				// end:source error
				
				// source assert/exception
				(function() {
				
					assert.throws = function(mix, /*optional*/ error, /*optional*/ message) {
						_throws.apply(this, [true].concat(_Array_slice.call(arguments)));
					};
				
				
					assert.doesNotThrow = function(mix, /*optional*/ message) {
						_throws.apply(this, [false].concat(_Array_slice.call(arguments)));
					};
				
					assert.ifError = function(err) {
						if (err) 
							throw err;
					};
				
					// private
					function _throws(shouldThrow, mix, expected, message) {
						var actual,
							fn, args;
						
						if (is_Array(mix)) {
							var arr = _Array_slice.call(mix);
							fn = arr.shift();
							args = arr;
						}
						
						if (is_Function(mix)) {
							fn = mix;
							args = [];
						}
						
				
						if (is_String(expected)) {
							message = expected;
							expected = null;
						}
				
						try {
							fn.apply(null, args);
						} catch (error) {
							actual = error;
						}
						
						message = ''
							+ (expected && expected.name && (' (' + expected.name + ').') || '.')
							+ ((message && (' ' + message)) || '.') 
				
						
						if (shouldThrow === true && actual == null) 
							fail(actual, expected, 'Missing expected exception' + message);
						
						if (shouldThrow === false && expectedException(actual, expected)) 
							fail(actual, expected, 'Got unwanted exception' + message);
						
				
						if ((shouldThrow && actual && expected && !expectedException(actual, expected)) || (!shouldThrow && actual)) 
							throw actual;
						
					}
					
					function expectedException(actual, expected) {
						
						if (!actual || !expected) 
							return false;
						
						if (is_RegExp(expected)) 
							return expected.test(actual);
						
						if (actual instanceof expected) 
							return true;
				
						if (expected.call({}, actual) === true) 
							return true;
						
						return false;
					}
				
				}());
				// end:source assert/exception
				// source assert/callback
				(function() {
					
					assert.callbacks = [];
					assert.await = assert_await;
					assert.avoid = assert_avoid;
					
					function assert_await() {
						
						var fn, name, ctx, count;
						
						var i = arguments.length,
							x;
						while( --i > -1) {
							x = arguments[i];
							switch(typeof x) {
								case 'function':
									fn = x;
									break;
								case 'object':
									ctx = x;
									break;
								case 'number':
									count = x;
									break;
								case 'string':
									name = x;
									break;
							}
						}
						
						if (this.callbacks == null) 
							this.callbacks = [];
						
						if (isNaN(count) || count < 1) 
							count = 1;
						
						var cbs = this.callbacks,
							obj = {
								count: count,
								name: name,
								stack: stack_prepair((new Error).stack)
							};
						
						cbs.push(obj);
						return function(){
							
							if (--obj.count === 0) 
								cbs.splice(cbs.indexOf(obj), 1);
							
							if (typeof fn !== 'function') 
								return null;
							
							return fn.apply(ctx, arguments);
						}
					}
					
					function assert_avoid() {
						var name = 'function',
							count = 0,
							ctx,
							fn;
							
						
						var i = arguments.length,
							x;
						while( --i > -1) {
							x = arguments[i];
							switch(typeof x) {
								case 'function':
									fn = x;
									break;
								case 'object':
									ctx = x;
									break;
								case 'number':
									count = x;
									break;
								case 'string':
									name = x;
									break;
							}
						}
						
						var cbs = this.callbacks;
						if (cbs == null)
							cbs = this.callbacks = [];
				
						return function(mix) {
							
							if (--count < 0) {
									
								var obj = {
									count: count,
									name: '<avoid>' + (name || ''),
									argument: mix
								};
								
								cbs.push(obj);
							}
							
				
							fn && fn.apply(ctx, arguments)
						};
					}
				}());
				// end:source assert/callback
				// source assert/equal
				(function() {
				
					assert.ok = function ok(value, message) {
						if (!value)
							fail(value, true, message, '==', ok);
					};
				
					
					var equal,
						notEqual,
						strictEqual,
						notStrictEqual
						;
					
					equal = 
					assert.equal =
					function equal(actual, expected, message) {
						if (actual != expected)
							fail(actual, expected, message, '==', equal);
					};
				
					notEqual = 
					assert.notEqual =
					function notEqual(actual, expected, message) {
						if (actual == expected)
							fail(actual, expected, message, '!=', notEqual);
					};
				
					strictEqual = 
					assert.strictEqual =
					function strictEqual(actual, expected, message) {
						if (actual !== expected)
							fail(actual, expected, message, '===', strictEqual);
				
					};
				
					notStrictEqual = 
					assert.notStrictEqual =
					function notStrictEqual(actual, expected, message) {
						if (actual === expected)
							fail(actual, expected, message, '!==', notStrictEqual);
				
					};
					
					assert.eq_ = equal;
					assert.notEq_ = notEqual;
					assert.strictEq_ = strictEqual;
					assert.notStrictEq_ = notStrictEqual;
				
				}());
				// end:source assert/equal
				// source assert/deepEqual
				(function() {
					
					var deepEqual,
						notDeepEqual
						;
					
					assert.deepEqual =
					deepEqual =
					function deepEqual(actual, expected, message) {
						
						if (_deepEqual(actual, expected) === false) 
							fail(actual, expected, message, 'deepEqual', deepEqual);
					};
				
					
					assert.notDeepEqual =
					notDeepEqual =
					function notDeepEqual(actual, expected, message) {
						
						if (_deepEqual(actual, expected) === true) 
							fail(actual, expected, message, 'notDeepEqual', notDeepEqual);
					};
					
					
					assert.deepEq_ = deepEqual;
					assert.notDeepEq_ = notDeepEqual;
					
					function _deepEqual(a, b) {
						if (a == null || b == null) 
							return a == b;
						
						if (a === b) 
							return true;
						
						if (is_Arguments(a)) 
							a = _Array_slice.call(a);
						
						if (is_Arguments(a)) 
							a = _Array_slice.call(a);
							
						
						var AType = obj_typeof(a);
						
						switch(AType){
							case 'Number':
							case 'Boolean':
							case 'String':
								return a == b;
							
							case 'RegExp':
							case 'Date':
								return (a).toString() === (b).toString();
						}
						
						if (is_Buffer(a) && is_Buffer(b)) {
							if (a.length != b.length)
								return false;
						 
							for (var i = 0; i < a.length; i++) {
							  if (a[i] != b[i])
								return false;
							}
						 
							return true;
						}
						
						if (!is_Object(a) && !is_Object(b)) 
							return a === b;
						
						return objEquiv(a, b);
					}
				
				
					function objEquiv(a, b) {
						
						var ka = obj_keys(a).sort(),
							kb = obj_keys(b).sort(),
							key, i;
					
						if (ka.length != kb.length)
							return false;
						
						i = ka.length;
						while ( --i !== -1) {
							if (ka[i] != kb[i])
								return false;
						}
						
						i = ka.length
						while (--i !== -1) {
							key = ka[i];
							
							if (!_deepEqual(a[key], b[key]))
								return false;
						}
						
						return true;
					}
				
				
				}());
				// end:source assert/deepEqual
				// source assert/compare
				(function() {
					
					var lessThan,
						lessThanOrEqual,
						greaterThan,
						greaterThanOrEqual
						;
					
					lessThan = 
					assert.lessThan =
					function equal(actual, expected, message) {
						if (actual < Number(expected))
							fail(actual, expected, message, '<', lessThan);
					};
				
					lessThanOrEqual = 
					assert.lessThanOrEqual =
					function equal(actual, expected, message) {
						if (actual <= Number(expected))
							fail(actual, expected, message, '<=', lessThan);
					};
				
					greaterThan = 
					assert.greaterThan =
					function strictEqual(actual, expected, message) {
						if (actual > Number(expected))
							fail(actual, expected, message, '>', greaterThan);
				
					};
				
					greaterThanOrEqual = 
					assert.greaterThanOrEqual =
					function strictEqual(actual, expected, message) {
						if (actual >= Number(expected))
							fail(actual, expected, message, '>=', greaterThanOrEqual);
				
					};
					
					assert.lt_ = lessThan;
					assert.lte_ = lessThanOrEqual;
					assert.gt_ = greaterThan;
					assert.gte_ = greaterThanOrEqual;
				
				}());
				// end:source assert/compare
				// source assert/has
				(function() {
					
					var has,
						hasNot;
				
					has =
					assert.has =
					function has(actual, expected, message) {
						_performHas(actual, expected, true, message, has);
					};
				
					hasNot = 
					assert.hasNot =
					function hasNot(actual, expected, message) {
						_performHas(actual, expected, false, message, hasNot);
					}
					
					assert.has_ = has;
					assert.hasNot_ = hasNot;
				
					// = private
					var OPERATOR = '\u2287';
				
					var t_Date = 'Date',
						t_Array = 'Array',
						t_Object = 'Object',
						t_String = 'String',
						t_RegExp = 'RegExp',
						t_Number = 'Number',
						t_Boolean = 'Boolean',
						t_Function = 'Function',
						t_NullOrUndefined = '<undefined>',
						t_Reference = '<reference-check>';
				
					function obj_typeof(x) {
						var type = Object
							.prototype
							.toString
							.call(x)
							.replace('[object ', '')
							.replace(']', '');
				
						switch (type) {
							case t_Date:
							case t_Array:
							case t_String:
							case t_RegExp:
							case t_Boolean:
							case t_Number:
							case t_Function:
								return type;
							case t_Object:
								if (typeof x.length === 'number'
									&& typeof x.splice === 'function'
									&& typeof x.indexOf === 'function') {
									// Array-Alike
									return t_Array;
								}
								
								return t_Object;
							case 'Null':
							case 'Undefined':
								return t_NullOrUndefined;
				
							default:
								// Not supported type.
								// Not possible to run `contains` check
								// -> perform simple `==` comparison
								return t_Reference;
						}
					}
				
					function _performHas(actual, expected, expectedResult, message, stackStartFunction) {
				
						var result = _has(actual, expected);
						if (result === expectedResult) 
							return;
						
				
						if (expectedResult === false && result !== true) {
							// structur missmatch
							return;
						}
						
						if (typeof result === 'string') 
							message = '(' + result + ') ' + (message || '');
						
						fail(actual, expected, message, OPERATOR, stackStartFunction);
					}
				
					function _has(a, b) {
				
						var AType = obj_typeof(a),
							BType = obj_typeof(b);
				
						var _AType, _BType;
				
						switch (AType) {
							case t_String:
								if (t_String === BType) 
									return a.indexOf(b) !== -1
										|| ('Not a substring of ' + a);
								
								if (t_RegExp === BType) 
									return b.test(a) || ('RegExp failed: ' + a);
								
				
								return 'Unexpected types: String-' + BType;
				
							case t_RegExp:
							case t_Date:
							case t_Number:
							case t_Boolean:
							case t_Function:
								return (a).toString() === (b).toString()
									|| ('Unexpected value: ' + a);
				
							case t_Reference:
								return a === b
									|| ('Reference check');
				
							case t_Object:
								if (t_String === BType) 
									return b in a
										|| ('Property expected:' + b);
								
								if (t_Object === BType) {
									for (var key in b) {
										if (key in a === false) 
											return 'Property expected: ' + key;
										
				
										_AType = obj_typeof(a[key]);
										_BType = obj_typeof(b[key]);
				
										if (_BType === t_NullOrUndefined) {
											// property existance
											continue;
										}
										if (_AType !== _BType) 
											return 'Type missmatch: ' + _AType + '-' + _BType;
										
										if (t_String === _AType) {
											if (a[key] !== b[key]) 
												return 'Unexpected value: ' + a[key];
											
											continue;
										}
				
										var result = _has(a[key], b[key]);
										if (result !== true) 
											return result;
									}
									return true;
								}
				
								return 'Unexpected types: Object-' + BType;
						}
				
						if (t_Array === AType) {
				
							switch (BType) {
								case t_Number:
								case t_String:
								case t_Boolean:
									return a.indexOf(b) !== -1
										|| ('Array should contain: ' + b);
				
								case t_Date:
								case t_RegExp:
								case t_Function:
									var val = (b).toString();
									return a.some(function(x) {
										return (x).toString() === val;
									}) || ('Array should contain: ' + val);
				
								case t_Array:
									var ib = 0,
										ibmax = b.length,
										ia,
										iamax = a.length;
									bloop: for (; ib < ibmax; ib++) {
				
										_BType = obj_typeof(b[ib]);
				
										switch (_BType) {
											case t_String:
											case t_Number:
											case t_Boolean:
											case t_RegExp:
											case t_Date:
											case t_Function:
												var result = _has(a, b[ib])
												if (result !== true) 
													return result;
												
												continue bloop;
				
											case t_Object:
											case t_Array:
												ia = 0;
												for (; ia < iamax; ia++) {
				
													if (_BType !== obj_typeof(a[ia])) 
														continue;
													
													if (_has(a[ia], b[ib]) === true) 
														break;
													
												}
				
												if (ia === iamax) 
													return _BType + ' is not a subset';
												
												continue bloop;
										}
									}
									return true;
							}
						}
				
						return 'Unexpected types: ' + AType + '-' + BType;
					}
				
				}());
				// end:source assert/has
				// source assert/is
				(function(){
					
					var is,
						isNot
						;
					
					
					is =
					assert.is =
					function is(actual, expected, message) {
						_performCheck(actual, expected, true, message, is);
					};
				
					isNot =
					assert.isNot =
					function isNot(actual, expected, message) {
						_performCheck(actual, expected, false, message, isNot);
					};
					
					
					assert.is_ = is;
					assert.isNot_ = isNot;
					
				
					
					function _performCheck(actual, expected, expectedResult, message, stackStartFunction) {
						var result = _is(actual, expected);
						if (result === expectedResult) 
							return;
						
						fail(actual, expected, message, '~~', stackStartFunction);
					}
					
					
					function _is(a, b){
						
						if (b == null) 
							return a == b;
						
						if (typeof b === 'string') {
							var AType = obj_typeof(a);
							
							switch(b) {
								case 'Object':
									return a != null && typeof a === 'object';
							}
							
							
							return  AType === b;
						}
						
						if (typeof b === 'function') 
							return a instanceof b;
						
						if (typeof b === 'object' && b.constructor) 
							return _is(a, b.constructor)
						
						return false;
					}
					
				}());
				// end:source assert/is
				// source assert/jquery
				(function(){
					assert.setDOMLibrary = setDOMLibrary;
					assert.$ = {};
					
					var $ = global.$ || global.jQuery || global.Zepto || global.Kimbo;
					if ($ == null) 
						return;
					
					setDOMLibrary($);
					
					function setDOMLibrary($) {
						
						var Proto =  {};
						var METHODS =  [
							'eq_',
							'notEq_',
							
							'deepEq_',
							'notDeepEq_',
							
							'has_',
							'hasNot_',
							
							'is_',
							'isNot_',
							
							'lt_',
							'lte_',
							'gt_',
							'gte_',
						];
						
						METHODS.forEach(function (key) {
							Proto[key] = function assert_jquery(mix){
								var args = _Array_slice.call(arguments),
									message
									;
									
								if (is_Array(mix)) {
									message = args[args.length - 1];
									args = mix;
								}
								
								
								switch(key){
									case 'has_':
									case 'hasNot_':
										var selector = args[0];
										if (typeof selector !== 'string') 
											break;
										
										if (this[selector] != null && args.length !== 1) 
											break;
										
										var count = args[1],
											$els = this.find(selector);
										if ($els.length === 0) 
											$els = this.filter(selector);
										if ($els.length === 0) {
											$els = querySelector(this, selector);
										}
										
										if ('has_' === key) {
											
											if (isNaN(count)) {
												assert_do('notEq_', $els.length, 0, message);
												return this;
											}
											
											assert_do('eq_', $els.length, count, message);
										}
										
										if ('hasNot_' === key) {
											
											if (isNaN(count)) {
												assert_do('eq_', $els.length, 0, message);
												return this;
											}
											
											assert_do('notEq_', $els.length, count, message);
										}
										
										return this;
									
									
								}
								
								var expected = args.pop(),
									x = args.shift(),
									actual
									;
									
								if (typeof x === 'string') {
									// jquery property
									actual = getActual(this, x, args, expected);
								}
								
								if (typeof x === 'function') {
									// custom function
									actual = x(this);
								}
								
								assert_do(key, actual, expected, message);
								return this;
							};
							
							function getActual($, prop, args, expected) {
								if (prop === 'css' && args.length === 1 && $.length !== 0) {
									var el = $.get(0),
										css = args[0];
									return style_get(el, css, expected);
								}
								
								var val = $[prop];
								if (typeof val === 'function') {
									return val.apply($, args);
								}
								
								return val;
							}
							
							function assert_do(key, actual, expected, message){
								
								assert[key](actual, expected, message);
							}
						});
						
						METHODS.forEach(function (key) {
							assert.$[key] = function(){
								var args = _Array_slice.call(arguments),
									ctx = args.shift();
									
								return Proto[key].apply(ctx, args);
							};
							
							if ($.fn[key] !== void 0) 
								return;
							
							$.fn[key] = Proto[key];
						});
						
					}
					
					function querySelector($els, selector) {
						var set = $();
						$els.each(function(i, el){
							if (el == null || el.querySelectorAll == null)
								return;
							
							var arr = el.querySelectorAll(selector);
							set = set.add(arr);
						});
						return set;
					}
				}());
				// end:source assert/jquery
				
				// source listeners
				(function(){
					
					// wrap functions
					(function(lib, emit){
						
						for (var key in lib) {
							if (typeof lib[key] !== 'function') 
								continue;
							
							switch(key){
								case 'callback':
								case 'await':
								case 'avoid':
								case 'prepairStack':
								case 'on':
								case 'off':
									continue;
							}
							
							if (key[0] === key[0].toUpperCase()) 
								continue;
							
							lib[key] = wrapFn(lib[key]);
						}
						
						
						function wrapFn(fn) {
							return function assert_wrapFn(){
								
								var result;
								emit('start');
								
								try {
									result = fn.apply(this, arguments);
								} catch(error) {
									
									if (emit('fail', error) === false) 
										throw error;
									
									return null;
								}
								
								emit('success');
								
								return result;
							};
						}
						
					}(assert, emit));
					
					assert.on = function assert_on(type, listener) {
						
						if (_events[type] == null) 
							_events[type] = [];
						
						_events[type].push(listener);
					};
					
					assert.off = function assert_off(type, listener){
						
						var cbs = _events[type];
						if (cbs == null) 
							return;
						
						
						if (listener == null) {
							cbs.length = 0;
							return;
						}
						
						var i = cbs.length;
						while ( --i !== -1 ) {
							if (cbs[i] === listener)
								cbs.splice(i, 1);
						}
					};
					
					
					// = private
					
					
					var _events = {};
					
					function emit(type) {
							
						var cbs = _events[type];
						if (cbs == null) 
							return false;
						
						var i = cbs.length;
						if (i === 0) 
							return false;
						
						var args = _Array_slice.call(arguments, 1),
							fn;
							
						while ( --i !== -1 ) {
							
							fn = cbs[i];
							fn.apply(null, args);
						}
						
						return true;
					}
				}());
				// end:source listeners
				
				exports.assert = obj_extend(assert.ok, assert);
				// end:source /src/exports.js
			}());
			
			assert = exports.assert;	
		}(global, {}));
		
		
		// end:source /ref-assertion/lib/assert.embed.js
		// source wrapper.js
		
		
		global.assert = assert;
		
		obj_extend(assert, {
			total: 0,
			failed: 0,
			errors: 0,
			timeouts: [],
			
			reset: function(){
				
				this.callbacks.length = 0;
				this.timeouts.length = 0;
				
				this.failed = 0;
				this.total = 0;
				this.errors = 0;
			},
			
			// @obsolete
			callback: function assert_callback(callback){
				return this.await(callback);
			}
		});
		
		//> events
		(function(assert){
			
			assert.on('start', function(){
				assert.total++;
			});
			
			assert.on('success', function(){
				
				assert.onsuccess && assert.onsuccess();
			});
			
			assert.on('fail', function(error){
				
				// force stack calculation
				// (otherwise stack is not sent from browsers to the server)
				if (Object.defineProperty) {
					Object.defineProperty(error, 'stack', {
						value: error.stack,
						enumerable: true,
						configurable: true
					});
					Object.defineProperty(error, 'message', {
						value: error.message,
						enumerable: true,
						configurable: true
					});
				}
				
				
				assert.failed++;
				assert.onfailure && assert.onfailure(error);
			});
			
		}(assert));
		
		/* GLOBALS */
		
		global.eq_ = assert.equal;
		global.notEq_ = assert.notEqual;
		global.deepEq_ = assert.deepEqual;
		global.notDeepEq_ = assert.notDeepEqual;
		global.strictEq_ = assert.strictEqual;
		global.notStrictEq_ = assert.notStrictEqual;
		global.has_ = assert.has;
		global.hasNot_ = assert.hasNot;
		global.is_ = assert.is;
		global.isNot_ = assert.isNot;
		
		
		// obsolete for underscored
		global.eq = assert.equal;
		global.notEq = assert.notEqual;
		global.deepEq = assert.deepEqual;
		global.notDeepEq = assert.notDeepEqual;
		global.strictEq = assert.strictEqual;
		global.notStrictEq = assert.notStrictEqual;
		global.has = assert.has;
		global.hasNot = assert.hasNot;
		global.is = assert.is;
		global.isNot = assert.isNot;
		
		// <!---
		
		function obj_extend(target, source) {
			for (var key in source) {
				target[key] = source[key];
			}
			return target;
		}
		
		// end:source wrapper.js
		
	}(this));
	// end:source /src/assert/assert.browser.js
	// source /ref-domtest/lib/domtest.embed.js
	var DomTest;
	
	(function(root, factory){
		var _global = typeof global !== 'undefined' ? global : window,
			_mask = _global.mask || (_global.atma && _global.atma.mask),
			_$ = _global.jQuery || _global.$,
			_assert = _global.assert;
			
		if (_assert == null && typeof assert !== 'undefined') 
			_assert = assert;
		
	
		DomTest = factory(_global, _mask, _$, _assert);
		
	}(this, function(global, mask, $, __assert){
		'use strict';
		
		// source /bower_components/assertion/lib/assert.embed.js
		var assert;
	(function(global, exports){
		
		(function(){
			// source /src/exports.js
			// source /src/scope-vars.js
			
			
			var _Array_slice = Array.prototype.slice,
			
				assert = {
					errors: 0
				};
			// end:source /src/scope-vars.js
				
			// source /src/utils/is.js
			function is_Array(ar) {
				return Array.isArray(ar);
			}
			
			function is_Boolean(arg) {
				return typeof arg === 'boolean';
			}
			
			function is_Null(arg) {
				return arg === null;
			}
			
			function is_NullOrUndefined(arg) {
				return arg == null;
			}
			
			function is_Number(arg) {
				return typeof arg === 'number';
			}
			
			function is_String(arg) {
				return typeof arg === 'string';
			}
			
			function is_Symbol(arg) {
				return typeof arg === 'symbol';
			}
			
			function is_Undefined(arg) {
				return arg === void 0;
			}
			
			function is_RegExp(re) {
				return obj_typeof(re) === 'RegExp';
			}
			
			function is_Object(arg) {
				return typeof arg === 'object' && arg !== null;
			}
			
			function is_Date(d) {
				return obj_typeof(d) === 'Date';
			}
			
			function is_Error(e) {
				return obj_typeof(e) === 'Error' || e instanceof Error;
			}
			
			function is_Function(arg) {
				return typeof arg === 'function';
			}
			
			function is_Buffer(buff){
				if (typeof Buffer === 'undefined') 
					return false;
				
				return buff instanceof Buffer;
			}
			
			function is_Arguments(x){
				return obj_typeof(x) === 'Arguments';
			}
			
			function is_Primitive(arg) {
				return arg === null
					|| typeof arg === 'boolean'
					|| typeof arg === 'number'
					|| typeof arg === 'string'
					|| typeof arg === 'symbol'
					|| typeof arg === 'undefined'
					;
			}
			// end:source /src/utils/is.js
			// source /src/utils/object.js
			var obj_typeof,
				obj_inherit,
				obj_extend,
				obj_keys
				;
				
			
			(function(){
			
				
				obj_typeof = function(x) {
					return Object
						.prototype
						.toString
						.call(x)
						.replace('[object ', '')
						.replace(']', '');
				};
				
				obj_inherit = function(Ctor, base) {
					
					function temp(){}
					temp.prototype = base.prototype;
					
					Ctor.prototype = new temp;
				};
			
				obj_keys = Object.keys
					? Object.keys
					: getKeys;
				
				obj_extend = function(target, source){
					if (target == null) 
						target = {};
						
					if (source == null) 
						return target;
					
					for(var key in source){
						target[key] = source[key];
					}
					
					return target;
				};
				
				// private
				
				function getKeys(obj) {
					var keys = [];
					for(var key in keys)
						keys.push(key);
					
					return keys;
				}
				
			}());
			
			// end:source /src/utils/object.js
			// source /src/utils/string.js
			function str_truncate(str, length) {
				
				if (is_String(str) == false) 
					return str;
				
				return str.length < length
					? str
					: str.slice(0, length)
					;
			}
			// end:source /src/utils/string.js
			// source /src/utils/stack.js
			var stack_prepair;
			
			(function(){
				
				stack_prepair = function(stack) {
					if (stack == null) 
						return '';
					
					var lines = stack.split('\n'),
						startIndex = 1, endIndex = lines.length
						;
					
					var rgx_start = /(^([ \t]*at )?[\w\.]*assert[_\.])|(^([ \t]*at )?\w+\.assert)/i,
						rgx_end = /(^([ \t]*at )?runCase)/i
						;
					
					var i = 0, 
						imax = lines.length;
					
					while ( ++i < imax ){
						if (rgx_start.test(lines[i])) 
							startIndex = i + 1;
						
						if (rgx_end.test(lines[i])) {
							endIndex = i;
							break;
						}
					}
					
					lines.splice(endIndex);
					lines.splice(1, startIndex - 1);
					
					
					return lines.join('\n');
				};
				
			}());
			// end:source /src/utils/stack.js
			
			// source /src/error.js
			var fail;
			
			(function() {
			
				fail = function assert_fail (actual, expected, message, operator, stackStartFunction) {
					
					var error = new AssertionError({
						message: message,
						actual: actual,
						expected: expected,
						operator: operator,
						stackStartFunction: stackStartFunction
					});
					
					throw error;
				};
			
				assert.AssertionError = AssertionError;
				assert.fail = function (mix) {
					var error = mix;
					if (typeof mix === 'string') {
						error = new AssertionError({
							message: message
						});
					}
					assert.errors++;
					
					throw error;
				};
				assert.prepairStack = stack_prepair;
				
				
				// private
			
				// {message, actual, expected }
				function AssertionError(options) {
					this.name = 'AssertionError';
					this.actual = options.actual;
					this.expected = options.expected;
					this.operator = options.operator;
			
					if (options.message) {
						this.message = options.message;
						this.generatedMessage = false;
					} else {
						this.message = getMessage(this);
						this.generatedMessage = true;
					}
					
					var stackStartFunction = options.stackStartFunction || fail;
			
					if (Error.captureStackTrace) {
						Error.captureStackTrace(this, stackStartFunction);
					} else {
						
						this.stack = new Error().stack;
					}
					
					this.stack = stack_prepair(this.stack);
				};
				obj_inherit(AssertionError, Error);
			
				function getMessage(error) {
					var str_actual = JSON.stringify(error.actual, replacer),
						str_expected = JSON.stringify(error.expected, replacer);
			
					return str_truncate(str_actual, 128) + ' ' + error.operator + ' ' + str_truncate(str_expected, 128);
				}
			
			
				function replacer(key, value) {
					if (is_Undefined(value))
						return '' + value;
			
					if (is_Number(value) && (isNaN(value) || !isFinite(value)))
						return value.toString();
			
					if (is_Function(value) || is_RegExp(value))
						return value.toString();
			
					return value;
				}
				
				
			
			}());
			// end:source /src/error.js
			
			// source /src/assert/exception.js
			(function() {
			
				assert.throws = function(mix, /*optional*/ error, /*optional*/ message) {
					_throws.apply(this, [true].concat(_Array_slice.call(arguments)));
				};
			
			
				assert.doesNotThrow = function(mix, /*optional*/ message) {
					_throws.apply(this, [false].concat(_Array_slice.call(arguments)));
				};
			
				assert.ifError = function(err) {
					if (err) 
						throw err;
				};
			
				// private
				function _throws(shouldThrow, mix, expected, message) {
					var actual,
						fn, args;
					
					if (is_Array(mix)) {
						var arr = _Array_slice.call(mix);
						fn = arr.shift();
						args = arr;
					}
					
					if (is_Function(mix)) {
						fn = mix;
						args = [];
					}
					
			
					if (is_String(expected)) {
						message = expected;
						expected = null;
					}
			
					try {
						fn.apply(null, args);
					} catch (error) {
						actual = error;
					}
					
					message = ''
						+ (expected && expected.name && (' (' + expected.name + ').') || '.')
						+ ((message && (' ' + message)) || '.') 
			
					
					if (shouldThrow === true && actual == null) 
						fail(actual, expected, 'Missing expected exception' + message);
					
					if (shouldThrow === false && expectedException(actual, expected)) 
						fail(actual, expected, 'Got unwanted exception' + message);
					
			
					if ((shouldThrow && actual && expected && !expectedException(actual, expected)) || (!shouldThrow && actual)) 
						throw actual;
					
				}
				
				function expectedException(actual, expected) {
					
					if (!actual || !expected) 
						return false;
					
					if (is_RegExp(expected)) 
						return expected.test(actual);
					
					if (actual instanceof expected) 
						return true;
			
					if (expected.call({}, actual) === true) 
						return true;
					
					return false;
				}
			
			}());
			// end:source /src/assert/exception.js
			// source /src/assert/callback.js
			(function() {
				
				assert.callbacks = [];
				assert.await = assert_await;
				assert.avoid = assert_avoid;
				
				function assert_await() {
					
					var fn, name, ctx, count;
					
					var i = arguments.length,
						x;
					while( --i > -1) {
						x = arguments[i];
						switch(typeof x) {
							case 'function':
								fn = x;
								break;
							case 'object':
								ctx = x;
								break;
							case 'number':
								count = x;
								break;
							case 'string':
								name = x;
								break;
						}
					}
					
					if (this.callbacks == null) 
						this.callbacks = [];
					
					if (isNaN(count) || count < 1) 
						count = 1;
					
					var cbs = this.callbacks,
						obj = {
							count: count,
							name: name,
							stack: stack_prepair((new Error).stack)
						};
					
					cbs.push(obj);
					return function(){
						
						if (--obj.count === 0) 
							cbs.splice(cbs.indexOf(obj), 1);
						
						if (typeof fn !== 'function') 
							return null;
						
						return fn.apply(ctx, arguments);
					}
				}
				
				function assert_avoid() {
					var name = 'function',
						count = 0,
						ctx,
						fn;
						
					
					var i = arguments.length,
						x;
					while( --i > -1) {
						x = arguments[i];
						switch(typeof x) {
							case 'function':
								fn = x;
								break;
							case 'object':
								ctx = x;
								break;
							case 'number':
								count = x;
								break;
							case 'string':
								name = x;
								break;
						}
					}
					
					var cbs = this.callbacks;
					if (cbs == null)
						cbs = this.callbacks = [];
			
					return function(mix) {
						
						if (--count < 0) {
								
							var obj = {
								count: count,
								name: '<avoid>' + (name || ''),
								argument: mix
							};
							
							cbs.push(obj);
						}
						
			
						fn && fn.apply(ctx, arguments)
					};
				}
			}());
			// end:source /src/assert/callback.js
			// source /src/assert/equal.js
			(function() {
			
				assert.ok = function ok(value, message) {
					if (!value)
						fail(value, true, message, '==', ok);
				};
			
				
				var equal,
					notEqual,
					strictEqual,
					notStrictEqual
					;
				
				equal = 
				assert.equal =
				function equal(actual, expected, message) {
					if (actual != expected)
						fail(actual, expected, message, '==', equal);
				};
			
				notEqual = 
				assert.notEqual =
				function notEqual(actual, expected, message) {
					if (actual == expected)
						fail(actual, expected, message, '!=', notEqual);
				};
			
				strictEqual = 
				assert.strictEqual =
				function strictEqual(actual, expected, message) {
					if (actual !== expected)
						fail(actual, expected, message, '===', strictEqual);
			
				};
			
				notStrictEqual = 
				assert.notStrictEqual =
				function notStrictEqual(actual, expected, message) {
					if (actual === expected)
						fail(actual, expected, message, '!==', notStrictEqual);
			
				};
				
				assert.eq_ = equal;
				assert.notEq_ = notEqual;
				assert.strictEq_ = strictEqual;
				assert.notStrictEq_ = notStrictEqual;
			
			}());
			// end:source /src/assert/equal.js
			// source /src/assert/deepEqual.js
			(function() {
				
				var deepEqual,
					notDeepEqual
					;
				
				assert.deepEqual =
				deepEqual =
				function deepEqual(actual, expected, message) {
					
					if (_deepEqual(actual, expected) === false) 
						fail(actual, expected, message, 'deepEqual', deepEqual);
				};
			
				
				assert.notDeepEqual =
				notDeepEqual =
				function notDeepEqual(actual, expected, message) {
					
					if (_deepEqual(actual, expected) === true) 
						fail(actual, expected, message, 'notDeepEqual', notDeepEqual);
				};
				
				
				assert.deepEq_ = deepEqual;
				assert.notDeepEq_ = notDeepEqual;
				
				function _deepEqual(a, b) {
					if (a == null || b == null) 
						return a == b;
					
					if (a === b) 
						return true;
					
					if (is_Arguments(a)) 
						a = _Array_slice.call(a);
					
					if (is_Arguments(a)) 
						a = _Array_slice.call(a);
						
					
					var AType = obj_typeof(a);
					
					switch(AType){
						case 'Number':
						case 'Boolean':
						case 'String':
							return a == b;
						
						case 'RegExp':
						case 'Date':
							return (a).toString() === (b).toString();
					}
					
					if (is_Buffer(a) && is_Buffer(b)) {
						if (a.length != b.length)
							return false;
					 
						for (var i = 0; i < a.length; i++) {
						  if (a[i] != b[i])
							return false;
						}
					 
						return true;
					}
					
					if (!is_Object(a) && !is_Object(b)) 
						return a === b;
					
					return objEquiv(a, b);
				}
			
			
				function objEquiv(a, b) {
					
					var ka = obj_keys(a).sort(),
						kb = obj_keys(b).sort(),
						key, i;
				
					if (ka.length != kb.length)
						return false;
					
					i = ka.length;
					while ( --i !== -1) {
						if (ka[i] != kb[i])
							return false;
					}
					
					i = ka.length
					while (--i !== -1) {
						key = ka[i];
						
						if (!_deepEqual(a[key], b[key]))
							return false;
					}
					
					return true;
				}
			
			
			}());
			// end:source /src/assert/deepEqual.js
			// source /src/assert/compare.js
			(function() {
				
				var lessThan,
					lessThanOrEqual,
					greaterThan,
					greaterThanOrEqual
					;
				
				lessThan = 
				assert.lessThan =
				function equal(actual, expected, message) {
					if (actual < Number(expected))
						fail(actual, expected, message, '<', lessThan);
				};
			
				lessThanOrEqual = 
				assert.lessThanOrEqual =
				function equal(actual, expected, message) {
					if (actual <= Number(expected))
						fail(actual, expected, message, '<=', lessThan);
				};
			
				greaterThan = 
				assert.greaterThan =
				function strictEqual(actual, expected, message) {
					if (actual > Number(expected))
						fail(actual, expected, message, '>', greaterThan);
			
				};
			
				greaterThanOrEqual = 
				assert.greaterThanOrEqual =
				function strictEqual(actual, expected, message) {
					if (actual >= Number(expected))
						fail(actual, expected, message, '>=', greaterThanOrEqual);
			
				};
				
				assert.lt_ = lessThan;
				assert.lte_ = lessThanOrEqual;
				assert.gt_ = greaterThan;
				assert.gte_ = greaterThanOrEqual;
			
			}());
			// end:source /src/assert/compare.js
			// source /src/assert/has.js
			(function() {
				
				var has,
					hasNot;
			
				has =
				assert.has =
				function has(actual, expected, message) {
					_performHas(actual, expected, true, message, has);
				};
			
				hasNot = 
				assert.hasNot =
				function hasNot(actual, expected, message) {
					_performHas(actual, expected, false, message, hasNot);
				}
				
				assert.has_ = has;
				assert.hasNot_ = hasNot;
			
				// = private
				var OPERATOR = '\u2287';
			
				var t_Date = 'Date',
					t_Array = 'Array',
					t_Object = 'Object',
					t_String = 'String',
					t_RegExp = 'RegExp',
					t_Number = 'Number',
					t_Boolean = 'Boolean',
					t_Function = 'Function',
					t_NullOrUndefined = '<undefined>',
					t_Reference = '<reference-check>';
			
				function obj_typeof(x) {
					var type = Object
						.prototype
						.toString
						.call(x)
						.replace('[object ', '')
						.replace(']', '');
			
					switch (type) {
						case t_Date:
						case t_Array:
						case t_String:
						case t_RegExp:
						case t_Boolean:
						case t_Number:
						case t_Function:
							return type;
						case t_Object:
							if (typeof x.length === 'number'
								&& typeof x.splice === 'function'
								&& typeof x.indexOf === 'function') {
								// Array-Alike
								return t_Array;
							}
							
							return t_Object;
						case 'Null':
						case 'Undefined':
							return t_NullOrUndefined;
			
						default:
							// Not supported type.
							// Not possible to run `contains` check
							// -> perform simple `==` comparison
							return t_Reference;
					}
				}
			
				function _performHas(actual, expected, expectedResult, message, stackStartFunction) {
			
					var result = _has(actual, expected);
					if (result === expectedResult) 
						return;
					
			
					if (expectedResult === false && result !== true) {
						// structur missmatch
						return;
					}
					
					if (typeof result === 'string') 
						message = '(' + result + ') ' + (message || '');
					
					fail(actual, expected, message, OPERATOR, stackStartFunction);
				}
			
				function _has(a, b) {
			
					var AType = obj_typeof(a),
						BType = obj_typeof(b);
			
					var _AType, _BType;
			
					switch (AType) {
						case t_String:
							if (t_String === BType) 
								return a.indexOf(b) !== -1
									|| ('Not a substring of ' + a);
							
							if (t_RegExp === BType) 
								return b.test(a) || ('RegExp failed: ' + a);
							
			
							return 'Unexpected types: String-' + BType;
			
						case t_RegExp:
						case t_Date:
						case t_Number:
						case t_Boolean:
						case t_Function:
							return (a).toString() === (b).toString()
								|| ('Unexpected value: ' + a);
			
						case t_Reference:
							return a === b
								|| ('Reference check');
			
						case t_Object:
							if (t_String === BType) 
								return b in a
									|| ('Property expected:' + b);
							
							if (t_Object === BType) {
								for (var key in b) {
									if (key in a === false) 
										return 'Property expected: ' + key;
									
			
									_AType = obj_typeof(a[key]);
									_BType = obj_typeof(b[key]);
			
									if (_BType === t_NullOrUndefined) {
										// property existance
										continue;
									}
									if (_AType !== _BType) 
										return 'Type missmatch: ' + _AType + '-' + _BType;
									
									if (t_String === _AType) {
										if (a[key] !== b[key]) 
											return 'Unexpected value: ' + a[key];
										
										continue;
									}
			
									var result = _has(a[key], b[key]);
									if (result !== true) 
										return result;
								}
								return true;
							}
			
							return 'Unexpected types: Object-' + BType;
					}
			
					if (t_Array === AType) {
			
						switch (BType) {
							case t_Number:
							case t_String:
							case t_Boolean:
								return a.indexOf(b) !== -1
									|| ('Array should contain: ' + b);
			
							case t_Date:
							case t_RegExp:
							case t_Function:
								var val = (b).toString();
								return a.some(function(x) {
									return (x).toString() === val;
								}) || ('Array should contain: ' + val);
			
							case t_Array:
								var ib = 0,
									ibmax = b.length,
									ia,
									iamax = a.length;
								bloop: for (; ib < ibmax; ib++) {
			
									_BType = obj_typeof(b[ib]);
			
									switch (_BType) {
										case t_String:
										case t_Number:
										case t_Boolean:
										case t_RegExp:
										case t_Date:
										case t_Function:
											var result = _has(a, b[ib])
											if (result !== true) 
												return result;
											
											continue bloop;
			
										case t_Object:
										case t_Array:
											ia = 0;
											for (; ia < iamax; ia++) {
			
												if (_BType !== obj_typeof(a[ia])) 
													continue;
												
												if (_has(a[ia], b[ib]) === true) 
													break;
												
											}
			
											if (ia === iamax) 
												return _BType + ' is not a subset';
											
											continue bloop;
									}
								}
								return true;
						}
					}
			
					return 'Unexpected types: ' + AType + '-' + BType;
				}
			
			}());
			// end:source /src/assert/has.js
			// source /src/assert/is.js
			(function(){
				
				var is,
					isNot
					;
				
				
				is =
				assert.is =
				function is(actual, expected, message) {
					_performCheck(actual, expected, true, message, is);
				};
			
				isNot =
				assert.isNot =
				function isNot(actual, expected, message) {
					_performCheck(actual, expected, false, message, isNot);
				};
				
				
				assert.is_ = is;
				assert.isNot_ = isNot;
				
			
				
				function _performCheck(actual, expected, expectedResult, message, stackStartFunction) {
					var result = _is(actual, expected);
					if (result === expectedResult) 
						return;
					
					fail(actual, expected, message, '~~', stackStartFunction);
				}
				
				
				function _is(a, b){
					
					if (b == null) 
						return a == b;
					
					if (typeof b === 'string') {
						var AType = obj_typeof(a);
						
						switch(b) {
							case 'Object':
								return a != null && typeof a === 'object';
						}
						
						
						return  AType === b;
					}
					
					if (typeof b === 'function') 
						return a instanceof b;
					
					if (typeof b === 'object' && b.constructor) 
						return _is(a, b.constructor)
					
					return false;
				}
				
			}());
			// end:source /src/assert/is.js
			// source /src/assert/jquery.js
			(function(){
				assert.setDOMLibrary = setDOMLibrary;
				assert.$ = {};
				
				var $ = global.$ || global.jQuery || global.Zepto || global.Kimbo;
				if ($ == null) 
					return;
				
				setDOMLibrary($);
				
				function setDOMLibrary($) {
					
					var Proto =  {};
					var METHODS =  [
						'eq_',
						'notEq_',
						
						'deepEq_',
						'notDeepEq_',
						
						'has_',
						'hasNot_',
						
						'is_',
						'isNot_',
						
						'lt_',
						'lte_',
						'gt_',
						'gte_',
					];
					
					METHODS.forEach(function (key) {
						Proto[key] = function assert_jquery(mix){
							var args = _Array_slice.call(arguments),
								message
								;
								
							if (is_Array(mix)) {
								message = args[args.length - 1];
								args = mix;
							}
							
							
							switch(key){
								case 'has_':
								case 'hasNot_':
									var selector = args[0];
									if (typeof selector !== 'string') 
										break;
									
									if (this[selector] != null && args.length !== 1) 
										break;
									
									var count = args[1],
										$els = this.find(selector);
									if ($els.length === 0) 
										$els = this.filter(selector);
									
									if ('has_' === key) {
										
										if (isNaN(count)) {
											assert_do('notEq_', $els.length, 0, message);
											return this;
										}
										
										assert_do('eq_', $els.length, count, message);
									}
									
									if ('hasNot_' === key) {
										
										if (isNaN(count)) {
											assert_do('eq_', $els.length, 0, message);
											return this;
										}
										
										assert_do('notEq_', $els.length, count, message);
									}
									
									return this;
								
								
							}
							
							var expected = args.pop(),
								fn = args.shift()
								;
								
							if (typeof fn === 'string') {
								
								assert_byProperty(key, this, fn, args, expected, message);
								return this;
							}
							
							if (typeof fn === 'function') {
								
								assert_byFunction(key, this, fn, expected, message);
								return this;
							}
							
							return this;
						};
						
						
						function assert_byProperty(key, $, prop, args, expected, message) {
							var val = $[prop];
							
							if (typeof val === 'function') 
								val = val.apply($, args);
							
							assert[key](val, expected, message);
						}
						function assert_byFunction(key, $, fn, expected, message) {
							var val = fn($);
							
							assert[key](val, expected, message);
						}
						function assert_do(key, actual, expected, message){
							
							assert[key](actual, expected, message);
						}
					});
					
					METHODS.forEach(function (key) {
						assert.$[key] = function(){
							var args = _Array_slice.call(arguments),
								ctx = args.shift();
								
							return Proto[key].apply(ctx, args);
						};
						
						if ($.fn[key] !== void 0) 
							return;
						
						$.fn[key] = Proto[key];
					});
					
				}
				
				
			}());
			// end:source /src/assert/jquery.js
			
			// source /src/listeners.js
			(function(){
				
				// wrap functions
				(function(lib, emit){
					
					for (var key in lib) {
						if (typeof lib[key] !== 'function') 
							continue;
						
						switch(key){
							case 'callback':
							case 'await':
							case 'avoid':
							case 'prepairStack':
							case 'on':
							case 'off':
								continue;
						}
						
						if (key[0] === key[0].toUpperCase()) 
							continue;
						
						lib[key] = wrapFn(lib[key]);
					}
					
					
					function wrapFn(fn) {
						return function assert_wrapFn(){
							
							var result;
							emit('start');
							
							try {
								result = fn.apply(this, arguments);
							} catch(error) {
								
								if (emit('fail', error) === false) 
									throw error;
								
								return null;
							}
							
							emit('success');
							
							return result;
						};
					}
					
				}(assert, emit));
				
				assert.on = function assert_on(type, listener) {
					
					if (_events[type] == null) 
						_events[type] = [];
					
					_events[type].push(listener);
				};
				
				assert.off = function assert_off(type, listener){
					
					var cbs = _events[type];
					if (cbs == null) 
						return;
					
					
					if (listener == null) {
						cbs.length = 0;
						return;
					}
					
					var i = cbs.length;
					while ( --i !== -1 ) {
						if (cbs[i] === listener)
							cbs.splice(i, 1);
					}
				};
				
				
				// = private
				
				
				var _events = {};
				
				function emit(type) {
						
					var cbs = _events[type];
					if (cbs == null) 
						return false;
					
					var i = cbs.length;
					if (i === 0) 
						return false;
					
					var args = _Array_slice.call(arguments, 1),
						fn;
						
					while ( --i !== -1 ) {
						
						fn = cbs[i];
						fn.apply(null, args);
					}
					
					return true;
				}
			}());
			// end:source /src/listeners.js
			
			exports.assert = obj_extend(assert.ok, assert);
			// end:source /src/exports.js
		}());
		
		assert = exports.assert;	
	}(global, {}));
	
	
		// end:source /bower_components/assertion/lib/assert.embed.js
		// source /src/exports.es6
		var _Array_slice = Array.prototype.slice,
	    _Array_splice = Array.prototype.splice,
	    _Array_indexOf = Array.prototype.indexOf,
	    _Object_create = null,
	    _Object_hasOwnProp = Object.hasOwnProperty,
	    _Object_getOwnProp = Object.getOwnPropertyDescriptor,
	    _Object_defineProperty = Object.defineProperty;
	var coll_each,
	    coll_remove,
	    coll_map,
	    coll_indexOf,
	    coll_find;
	(function() {
	  coll_each = function(coll, fn, ctx) {
	    if (ctx == null)
	      ctx = coll;
	    if (coll == null)
	      return coll;
	    var imax = coll.length,
	        i = 0;
	    for (; i < imax; i++) {
	      fn.call(ctx, coll[i], i);
	    }
	    return ctx;
	  };
	  coll_indexOf = function(coll, x) {
	    if (coll == null)
	      return -1;
	    var imax = coll.length,
	        i = 0;
	    for (; i < imax; i++) {
	      if (coll[i] === x)
	        return i;
	    }
	    return -1;
	  };
	  coll_remove = function(coll, x) {
	    var i = coll_indexOf(coll, x);
	    if (i === -1)
	      return false;
	    coll.splice(i, 1);
	    return true;
	  };
	  coll_map = function(coll, fn, ctx) {
	    var arr = new Array(coll.length);
	    coll_each(coll, function(x, i) {
	      arr[i] = fn.call(this, x, i);
	    }, ctx);
	    return arr;
	  };
	  coll_find = function(coll, fn, ctx) {
	    var imax = coll.length,
	        i = 0;
	    for (; i < imax; i++) {
	      if (fn.call(ctx || coll, coll[i], i))
	        return true;
	    }
	    return false;
	  };
	}());
	if (Array.prototype.forEach === void 0) {
	  Array.prototype.forEach = function(fn, ctx) {
	    coll_each(this, fn, ctx);
	  };
	}
	if (Array.prototype.indexOf === void 0) {
	  Array.prototype.indexOf = function(x) {
	    return coll_indexOf(this, x);
	  };
	}
	if (String.prototype.trim == null) {
	  String.prototype.trim = function() {
	    var start = -1,
	        end = this.length,
	        code;
	    if (end === 0)
	      return this;
	    while (++start < end) {
	      code = this.charCodeAt(start);
	      if (code > 32)
	        break;
	    }
	    while (--end !== 0) {
	      code = this.charCodeAt(end);
	      if (code > 32)
	        break;
	    }
	    return start !== 0 && end !== length - 1 ? this.substring(start, end + 1) : this;
	  };
	}
	if (Function.prototype.bind == null) {
	  var _Array_slice;
	  Function.prototype.bind = function() {
	    if (arguments.length < 2 && typeof arguments[0] === "undefined")
	      return this;
	    var fn = this,
	        args = _Array_slice.call(arguments),
	        ctx = args.shift();
	    return function() {
	      return fn.apply(ctx, args.concat(_Array_slice.call(arguments)));
	    };
	  };
	}
	var is_Function,
	    is_Array,
	    is_ArrayLike,
	    is_String,
	    is_Object,
	    is_notEmptyString,
	    is_rawObject,
	    is_NODE,
	    is_DOM;
	(function() {
	  is_Function = function(x) {
	    return typeof x === 'function';
	  };
	  is_Object = function(x) {
	    return x != null && typeof x === 'object';
	  };
	  is_Array = is_ArrayLike = function(arr) {
	    return arr != null && typeof arr === 'object' && typeof arr.length === 'number' && typeof arr.slice === 'function';
	    ;
	  };
	  is_String = function(x) {
	    return typeof x === 'string';
	  };
	  is_notEmptyString = function(x) {
	    return typeof x === 'string' && x !== '';
	  };
	  is_rawObject = function(obj) {
	    if (obj == null || typeof obj !== 'object')
	      return false;
	    return obj.constructor === Object;
	  };
	  is_DOM = typeof window !== 'undefined' && window.navigator != null;
	  is_NODE = !is_DOM;
	}());
	var obj_getProperty,
	    obj_setProperty,
	    obj_extend,
	    obj_extendDefaults,
	    obj_extendMany,
	    obj_extendProperties,
	    obj_create,
	    obj_toFastProps;
	(function() {
	  obj_getProperty = function(obj, path) {
	    if ('.' === path)
	      return obj;
	    var chain = path.split('.'),
	        imax = chain.length,
	        i = -1;
	    while (obj != null && ++i < imax) {
	      obj = obj[chain[i]];
	    }
	    return obj;
	  };
	  obj_setProperty = function(obj, path, val) {
	    var chain = path.split('.'),
	        imax = chain.length - 1,
	        i = -1,
	        key;
	    while (++i < imax) {
	      key = chain[i];
	      if (obj[key] == null)
	        obj[key] = {};
	      obj = obj[key];
	    }
	    obj[chain[i]] = val;
	  };
	  obj_extend = function(a, b) {
	    if (b == null)
	      return a || {};
	    if (a == null)
	      return obj_create(b);
	    for (var key in b) {
	      a[key] = b[key];
	    }
	    return a;
	  };
	  obj_extendDefaults = function(a, b) {
	    if (b == null)
	      return a || {};
	    if (a == null)
	      return obj_create(b);
	    for (var key in b) {
	      if (a[key] == null)
	        a[key] = b[key];
	    }
	    return a;
	  };
	  obj_extendProperties = (function() {
	    if (_Object_getOwnProp == null)
	      return obj_extend;
	    return function(a, b) {
	      if (b == null)
	        return a || {};
	      if (a == null)
	        return obj_create(b);
	      var key,
	          descr;
	      for (key in b) {
	        descr = _Object_getOwnProp(b, key);
	        if (descr == null)
	          continue;
	        if (descr.hasOwnProperty('value')) {
	          a[key] = descr.value;
	          continue;
	        }
	        _Object_defineProperty(a, key, descr);
	      }
	      return a;
	    };
	  }());
	  obj_extendMany = function(a) {
	    var imax = arguments.length,
	        i = 1;
	    for (; i < imax; i++) {
	      a = obj_extend(a, arguments[i]);
	    }
	    return a;
	  };
	  obj_toFastProps = function(obj) {
	    function F() {}
	    F.prototype = obj;
	    new F();
	    return;
	    eval(obj);
	  };
	  _Object_create = obj_create = Object.create || function(x) {
	    var Ctor = function() {};
	    Ctor.prototype = x;
	    return new Ctor;
	  };
	}());
	var arr_remove,
	    arr_each,
	    arr_indexOf,
	    arr_contains,
	    arr_pushMany;
	(function() {
	  arr_remove = function(array, x) {
	    var i = array.indexOf(x);
	    if (i === -1)
	      return false;
	    array.splice(i, 1);
	    return true;
	  };
	  arr_each = function(arr, fn, ctx) {
	    arr.forEach(fn, ctx);
	  };
	  arr_indexOf = function(arr, x) {
	    return arr.indexOf(x);
	  };
	  arr_contains = function(arr, x) {
	    return arr.indexOf(x) !== -1;
	  };
	  arr_pushMany = function(arr, arrSource) {
	    if (arrSource == null || arr == null || arr === arrSource)
	      return;
	    var il = arr.length,
	        jl = arrSource.length,
	        j = -1;
	    ;
	    while (++j < jl) {
	      arr[il + j] = arrSource[j];
	    }
	  };
	}());
	var fn_proxy,
	    fn_apply,
	    fn_doNothing;
	(function() {
	  fn_proxy = function(fn, ctx) {
	    return function() {
	      return fn_apply(fn, ctx, arguments);
	    };
	  };
	  fn_apply = function(fn, ctx, args) {
	    var l = args.length;
	    if (0 === l)
	      return fn.call(ctx);
	    if (1 === l)
	      return fn.call(ctx, args[0]);
	    if (2 === l)
	      return fn.call(ctx, args[0], args[1]);
	    if (3 === l)
	      return fn.call(ctx, args[0], args[1], args[2]);
	    if (4 === l)
	      return fn.call(ctx, args[0], args[1], args[2], args[3]);
	    return fn.apply(ctx, args);
	  };
	  fn_doNothing = function() {
	    return false;
	  };
	}());
	var class_create,
	    class_createEx;
	(function() {
	  class_create = function() {
	    var args = _Array_slice.call(arguments),
	        Proto = args.pop();
	    if (Proto == null)
	      Proto = {};
	    var Ctor = Proto.hasOwnProperty('constructor') ? Proto.constructor : function() {};
	    var i = args.length,
	        BaseCtor,
	        x;
	    while (--i > -1) {
	      x = args[i];
	      if (typeof x === 'function') {
	        BaseCtor = wrapFn(x, BaseCtor);
	        x = x.prototype;
	      }
	      obj_extendDefaults(Proto, x);
	    }
	    return createClass(wrapFn(BaseCtor, Ctor), Proto);
	  };
	  class_createEx = function() {
	    var args = _Array_slice.call(arguments),
	        Proto = args.pop();
	    if (Proto == null)
	      Proto = {};
	    var Ctor = Proto.hasOwnProperty('constructor') ? Proto.constructor : function() {};
	    var imax = args.length,
	        i = -1,
	        BaseCtor,
	        x;
	    while (++i < imax) {
	      x = args[i];
	      if (typeof x === 'function') {
	        BaseCtor = wrapFn(BaseCtor, x);
	        x = x.prototype;
	      }
	      obj_extendProperties(Proto, x);
	    }
	    return createClass(wrapFn(BaseCtor, Ctor), Proto);
	  };
	  function createClass(Ctor, Proto) {
	    Proto.constructor = Ctor;
	    Ctor.prototype = Proto;
	    return Ctor;
	  }
	  function wrapFn(fnA, fnB) {
	    if (fnA == null) {
	      return fnB;
	    }
	    if (fnB == null) {
	      return fnA;
	    }
	    return function() {
	      var args = _Array_slice.call(arguments);
	      var x = fnA.apply(this, args);
	      if (x !== void 0)
	        return x;
	      return fnB.apply(this, args);
	    };
	  }
	}());
	var class_Dfr;
	(function() {
	  class_Dfr = function() {};
	  class_Dfr.prototype = {
	    _isAsync: true,
	    _done: null,
	    _fail: null,
	    _always: null,
	    _resolved: null,
	    _rejected: null,
	    defer: function() {
	      this._rejected = null;
	      this._resolved = null;
	      return this;
	    },
	    isResolved: function() {
	      return this._resolved != null;
	    },
	    isRejected: function() {
	      return this._rejected != null;
	    },
	    isBusy: function() {
	      return this._resolved == null && this._rejected == null;
	    },
	    resolve: function() {
	      var done = this._done,
	          always = this._always;
	      ;
	      this._resolved = arguments;
	      dfr_clearListeners(this);
	      arr_callOnce(done, this, arguments);
	      arr_callOnce(always, this, [this]);
	      return this;
	    },
	    reject: function() {
	      var fail = this._fail,
	          always = this._always;
	      ;
	      this._rejected = arguments;
	      dfr_clearListeners(this);
	      arr_callOnce(fail, this, arguments);
	      arr_callOnce(always, this, [this]);
	      return this;
	    },
	    then: function(filterSuccess, filterError) {
	      return this.pipe(filterSuccess, filterError);
	    },
	    done: function(callback) {
	      if (this._rejected != null)
	        return this;
	      return dfr_bind(this, this._resolved, this._done || (this._done = []), callback);
	    },
	    fail: function(callback) {
	      if (this._resolved != null)
	        return this;
	      return dfr_bind(this, this._rejected, this._fail || (this._fail = []), callback);
	    },
	    always: function(callback) {
	      return dfr_bind(this, this._rejected || this._resolved, this._always || (this._always = []), callback);
	    },
	    pipe: function(mix) {
	      var dfr;
	      if (typeof mix === 'function') {
	        dfr = new class_Dfr;
	        var done_ = mix,
	            fail_ = arguments.length > 1 ? arguments[1] : null;
	        this.done(delegate(dfr, 'resolve', done_)).fail(delegate(dfr, 'reject', fail_));
	        ;
	        return dfr;
	      }
	      dfr = mix;
	      var imax = arguments.length,
	          done = imax === 1,
	          fail = imax === 1,
	          i = 0,
	          x;
	      while (++i < imax) {
	        x = arguments[i];
	        switch (x) {
	          case 'done':
	            done = true;
	            break;
	          case 'fail':
	            fail = true;
	            break;
	          default:
	            console.error('Unsupported pipe channel', arguments[i]);
	            break;
	        }
	      }
	      done && this.done(delegate(dfr, 'resolve'));
	      fail && this.fail(delegate(dfr, 'reject'));
	      function pipe(dfr, method) {
	        return function() {
	          dfr[method].apply(dfr, arguments);
	        };
	      }
	      function delegate(dfr, name, fn) {
	        return function() {
	          if (fn != null) {
	            var override = fn.apply(this, arguments);
	            if (override != null) {
	              if (isDeferred(override) === true) {
	                override.pipe(dfr);
	                return;
	              }
	              dfr[name](override);
	              return;
	            }
	          }
	          dfr[name].apply(dfr, arguments);
	        };
	      }
	      return this;
	    },
	    pipeCallback: function() {
	      var self = this;
	      return function(error) {
	        if (error != null) {
	          self.reject(error);
	          return;
	        }
	        var args = _Array_slice.call(arguments, 1);
	        fn_apply(self.resolve, self, args);
	      };
	    }
	  };
	  class_Dfr.run = function(fn, ctx) {
	    var dfr = new class_Dfr();
	    if (ctx == null)
	      ctx = dfr;
	    fn.call(ctx, fn_proxy(dfr.resolve, ctx), fn_proxy(dfr.reject, dfr), dfr);
	    return dfr;
	  };
	  function dfr_bind(dfr, arguments_, listeners, callback) {
	    if (callback == null)
	      return dfr;
	    if (arguments_ != null)
	      fn_apply(callback, dfr, arguments_);
	    else
	      listeners.push(callback);
	    return dfr;
	  }
	  function dfr_clearListeners(dfr) {
	    dfr._done = null;
	    dfr._fail = null;
	    dfr._always = null;
	  }
	  function arr_callOnce(arr, ctx, args) {
	    if (arr == null)
	      return;
	    var imax = arr.length,
	        i = -1,
	        fn;
	    while (++i < imax) {
	      fn = arr[i];
	      if (fn)
	        fn_apply(fn, ctx, args);
	    }
	    arr.length = 0;
	  }
	  function isDeferred(x) {
	    if (x == null || typeof x !== 'object')
	      return false;
	    if (x instanceof class_Dfr)
	      return true;
	    return typeof x.done === 'function' && typeof x.fail === 'function';
	    ;
	  }
	}());
	var class_EventEmitter;
	(function() {
	  class_EventEmitter = function() {
	    this._listeners = {};
	  };
	  class_EventEmitter.prototype = {
	    on: function(event, fn) {
	      if (fn != null) {
	        (this._listeners[event] || (this._listeners[event] = [])).push(fn);
	      }
	      return this;
	    },
	    once: function(event, fn) {
	      if (fn != null) {
	        fn._once = true;
	        (this._listeners[event] || (this._listeners[event] = [])).push(fn);
	      }
	      return this;
	    },
	    pipe: function(event) {
	      var that = this,
	          args;
	      return function() {
	        args = _Array_slice.call(arguments);
	        args.unshift(event);
	        fn_apply(that.trigger, that, args);
	      };
	    },
	    emit: event_trigger,
	    trigger: event_trigger,
	    off: function(event, fn) {
	      var listeners = this._listeners[event];
	      if (listeners == null)
	        return this;
	      if (arguments.length === 1) {
	        listeners.length = 0;
	        return this;
	      }
	      var imax = listeners.length,
	          i = -1;
	      while (++i < imax) {
	        if (listeners[i] === fn) {
	          listeners.splice(i, 1);
	          i--;
	          imax--;
	        }
	      }
	      return this;
	    }
	  };
	  function event_trigger() {
	    var args = _Array_slice.call(arguments),
	        event = args.shift(),
	        fns = this._listeners[event],
	        fn,
	        imax,
	        i = 0;
	    if (fns == null)
	      return this;
	    for (imax = fns.length; i < imax; i++) {
	      fn = fns[i];
	      fn_apply(fn, this, args);
	      if (fn._once === true) {
	        fns.splice(i, 1);
	        i--;
	        imax--;
	      }
	    }
	    return this;
	  }
	}());
	function assert_TestDom(container, utest) {
	  for (var args = [],
	      $__0 = 2; $__0 < arguments.length; $__0++)
	    args[$__0 - 2] = arguments[$__0];
	  if (typeof utest === 'string') {
	    utest = mask.parse(utest);
	    if (utest.type !== mask.Dom.FRAGMENT)
	      utest = {nodes: [utest]};
	  }
	  var model,
	      compo,
	      callback,
	      i = 0,
	      imax = args.length,
	      x;
	  for (; i < imax; i++) {
	    x = args[i];
	    if (typeof x === 'function') {
	      callback = x;
	      continue;
	    }
	    if (model != null) {
	      compo = x;
	      continue;
	    }
	    model = x;
	  }
	  var runner = new Runner(container, utest, model, compo);
	  runner.on('complete', callback);
	  simulate_ready(runner.process);
	  return runner;
	}
	var is_JQuery;
	(function() {
	  is_JQuery = function(x) {
	    if (typeof x.jquery === 'string')
	      return true;
	    return x.constructor === $.fn.constructor;
	  };
	}());
	var obj_typeof,
	    obj_inherit,
	    obj_extend,
	    obj_keys;
	;
	(function() {
	  obj_typeof = function(x) {
	    return Object.prototype.toString.call(x).replace('[object ', '').replace(']', '');
	  };
	  obj_inherit = function(Ctor, base) {
	    function temp() {}
	    temp.prototype = base.prototype;
	    Ctor.prototype = new temp;
	  };
	  obj_keys = Object.keys ? Object.keys : getKeys;
	  obj_extend = function(target, source) {
	    if (target == null)
	      target = {};
	    if (source == null)
	      return target;
	    for (var key in source) {
	      target[key] = source[key];
	    }
	    return target;
	  };
	  function getKeys(obj) {
	    var keys = [];
	    for (var key in keys)
	      keys.push(key);
	    return keys;
	  }
	}());
	var log_error;
	(function() {
	  log_error = console.error.bind(console, '<TestDom>');
	}());
	var dfr_call,
	    dfr_bind,
	    dfr_clear;
	(function() {
	  dfr_call = function(cbs, args) {
	    if (cbs == null)
	      return;
	    for (var i = 0; i < cbs.length; i++) {
	      cbs[i].apply(null, args || []);
	    }
	  };
	  dfr_bind = function(dfr, type, cb) {
	    if (cb == null)
	      return;
	    var name = '_' + type + 'Cb';
	    var cbs = dfr[name];
	    if (cbs == null)
	      cbs = dfr[name] = [];
	    cbs.push(cb);
	  };
	  dfr_clear = function(dfr) {
	    arr_clear(dfr._rejectCb);
	    arr_clear(dfr._alwaysCb);
	    arr_clear(dfr._resolveCb);
	  };
	  function arr_clear(arr) {
	    if (arr != null)
	      arr.length = 0;
	  }
	}());
	var node_evalMany,
	    node_eval;
	(function() {
	  node_evalMany = function() {
	    for (var args = [],
	        $__0 = 0; $__0 < arguments.length; $__0++)
	      args[$__0] = arguments[$__0];
	    args.unshift(mask.Utils.Expression.evalStatements);
	    return run.apply(null, args);
	  };
	  node_eval = function() {
	    for (var args = [],
	        $__1 = 0; $__1 < arguments.length; $__1++)
	      args[$__1] = arguments[$__1];
	    args.unshift(mask.Utils.Expression.evalStatements);
	    return run.apply(null, args)[0];
	  };
	  function run(fn, node, model, compo) {
	    if (node.expression == null) {
	      var attr = node.attr,
	          arr = [];
	      for (var key in attr) {
	        if (key === attr[key]) {
	          arr.push(key);
	        }
	      }
	      if (arr.length !== 0)
	        return arr;
	      var obj = {},
	          count = 0;
	      for (var key in attr) {
	        obj[key] = attr[key];
	        count++;
	      }
	      if (count > 0)
	        return [obj];
	      log_error('Expression expected for', node.tagName);
	      return null;
	    }
	    if (node.expression === '')
	      return [];
	    return fn(node.expression, model, null, compo);
	  }
	}());
	var assert_isAlias,
	    assert_runAlias,
	    assert_isJQuery,
	    assert_runJQuery,
	    assert_getFn,
	    assert_test;
	(function() {
	  assert_isAlias = function(name) {
	    return $.fn[name] != null;
	  };
	  assert_runAlias = function($el, name, args, attr) {
	    if ($el.eq_ != null) {
	      args.unshift(name);
	      $el.eq_.apply($el, args);
	      return;
	    }
	    var mix = $el[name];
	    var expect = args.pop();
	    if (typeof mix === 'function') {
	      var actual = mix.apply($el, args);
	      assert.equal(actual, expect);
	      return;
	    }
	    assert.equal(mix, expect);
	  };
	  assert_isJQuery = function(name) {
	    return assert.$[name + '_'] != null;
	  };
	  assert_runJQuery = function($el, name, args, attr) {
	    assert.$[name + '_'].apply($el, [$el].concat(args));
	  };
	  assert_getFn = function(name) {
	    return check(assert_isJQuery, assert_runJQuery) || check(assert_isAlias, assert_runAlias);
	    function check(check, fn) {
	      __assert.total++;
	      if (check(name))
	        return fn;
	    }
	  };
	  assert_test = function(ctx, name, args) {
	    if (typeof assert[name] !== 'function') {
	      ctx = ctx[name];
	      name = 'equal';
	    }
	    assert[name].apply(assert, [ctx].concat(args));
	  };
	}());
	var simulate_ready;
	(function() {
	  simulate_ready = function(fn) {
	    var count = arguments[1] !== (void 0) ? arguments[1] : 0;
	    if (count > 5) {
	      return fn();
	    }
	    if ($.simulate.prototype.quirks.delayedSpacesInNonInputGlitchToEnd != null) {
	      simulate_ready = function(fn) {
	        setTimeout(fn);
	      };
	      simulate_ready(fn);
	      return;
	    }
	    setTimeout((function() {
	      return simulate_ready(fn, ++count);
	    }));
	  };
	}());
	var Traverser = {};
	(function() {
	  [['find', 'filter', findNative], ['filter'], ['closest'], ['children'], ['siblings']].forEach((function(x) {
	    var $__0 = x,
	        name = $__0[0],
	        fallback = $__0[1],
	        customFn = $__0[2];
	    Traverser[name] = create(name, fallback, customFn);
	  }));
	  obj_extend(Traverser, {'__eq__': create('eq')});
	  function create(name, fallback, customFn) {
	    return function assert_Traverse(current) {
	      var selector = current.node.expression;
	      if (/^\s*('|")/.test(selector)) {
	        selector = node_eval(current.node);
	      }
	      var x = current.$[name](selector);
	      if (x.length === 0 && fallback) {
	        x = current.$[fallback](selector);
	      }
	      if (x.length === 0 && customFn) {
	        x = customFn(current.$, selector);
	      }
	      assert.notEqual(x.length, 0, ("Selector does not matched any elements: " + name + "(" + selector + ")"));
	      current.$ = x;
	    };
	  }
	  function findNative($el, selector) {
	    var set = $(),
	        imax = $el.length,
	        i = -1,
	        arr;
	    while (++i < imax) {
	      arr = $el[i].querySelectorAll(selector);
	      set = set.add(arr);
	    }
	    return set;
	  }
	}());
	var Simulate;
	(function() {
	  Simulate = {
	    $$run: function(event, runner, current, done) {
	      runner.ensureInDom_();
	      var fn = Simulate[event];
	      if (fn) {
	        fn(runner, current, done);
	        return;
	      }
	      current.$.simulate(event, current.node.attr);
	      setTimeout(done);
	    },
	    'press': function(runner, current, done) {
	      var str = node_eval(current.node);
	      current.$.simulate('key-combo', {combo: str});
	      setTimeout(done);
	    },
	    'type': function(runner, current, done) {
	      var str = node_eval(current.node);
	      current.$.simulate('key-sequence', {
	        sequence: str,
	        delay: 10,
	        callback: function() {
	          current.$.removeData('simulate-keySequence.selection').off('keyup.simulate-keySequence').off('mouseup.simulate-keySequence');
	          ;
	          done();
	        }
	      });
	    },
	    'select': function(runner, current, done) {
	      var el = current.$.filter('select').eq(0);
	      if (el.length !== 0) {
	        var str = node_eval(current.node);
	        select_Option(el, str, done);
	        setTimeout(done);
	        return;
	      }
	      var el = current.$.filter('input, textarea').eq(0);
	      if (el.length !== 0) {
	        var args = node_evalMany(current.node);
	        el.get(0).focus();
	        select_TextRange(el.get(0), args);
	        setTimeout(done);
	        return;
	      }
	      assert(false, '`Select` should be invoked in "input" or "select" context');
	    }
	  };
	  function select_Option(el, str) {
	    var opts,
	        opt = find(byText);
	    if (opt == null)
	      opt = find(byAttr('value'));
	    if (opt == null)
	      opt = find(byAttr('name'));
	    if (opt == null)
	      opt = find(byAttr('id'));
	    assert.notEqual(opt, null, 'Option not found: ' + str);
	    var $__0 = opt,
	        $opt = $__0[0],
	        index = $__0[1];
	    el.get(0).selectedIndex = index;
	    $opt.simulate('click');
	    el.trigger('change');
	    function byText($el, i) {
	      var txt = $el.text();
	      return txt.trim().indexOf(str) !== -1;
	    }
	    function byAttr(name) {
	      return function($el) {
	        return $el.attr(name).trim() === str;
	      };
	    }
	    function find(fn) {
	      if (opts == null)
	        opts = el.children('option');
	      var imax = opts.length,
	          i = 0,
	          x;
	      for (; i < imax; i++) {
	        x = opts.eq(i);
	        if (fn(x, i) === true)
	          return [x, i];
	      }
	      return null;
	    }
	  }
	  function select_TextRange(el, args) {
	    var txt = el.value;
	    if (args.length === 0) {
	      select(0, txt.length - 1);
	      return;
	    }
	    var str = args[0];
	    if (typeof str === 'string') {
	      var start = txt.indexOf(str);
	      if (start !== -1) {
	        select(start, start + str.length);
	      }
	      return;
	    }
	    var $__1 = args,
	        start = $__1[0],
	        end = $__1[1];
	    if (typeof start === 'number' && typeof end === 'number') {
	      select(start, end);
	    }
	    function select(start, end) {
	      if (el.selectionStart !== void 0) {
	        el.selectionStart = start;
	        el.selectionEnd = end;
	        return;
	      }
	      if (el.setSelectionRange !== void 0) {
	        el.setSelectionRange(start, end);
	        return;
	      }
	      console.error('<DomTest> Unable to selec the range');
	    }
	  }
	}());
	var Actions;
	(function() {
	  Actions = {
	    'with': function(runner, current, done) {
	      var selector = current.node.expression.trim();
	      switch (selector) {
	        case 'model':
	          current.$ = runner.getCurrentModel_();
	          done();
	          return;
	      }
	      Traverser.find(current);
	      done();
	    },
	    'debugger': function(runner, current, done) {
	      var ctx = current.$;
	      debugger;
	      done();
	    },
	    'slot': function(runner, current, done) {
	      var fn = current.node.fn;
	      if (fn.length === 3) {
	        fn(current.$, runner.wrapAssertion_(), done);
	        return;
	      }
	      fn(current.$, runner.wrapAssertion_());
	      done();
	    },
	    'do': function(runner, current, done) {
	      Simulate.$$run(resolveAttrFirst(current.node), runner, current, done);
	    },
	    'call': function(runner, current, done) {
	      var name = resolveAttrFirst(current.node);
	      assert.is(current.$[name], 'Function');
	      var args = node_evalMany(current.node, runner.model, runner.compo);
	      current.$[name].apply(current.$, args);
	      setTimeout(done);
	    },
	    'await': function(runner, current, done) {
	      var expression = current.node.expression;
	      var num = parseFloat(expression);
	      if (num === num) {
	        setTimeout(done, num);
	        return;
	      }
	      var selector = expression;
	      var INTERVAL = 200;
	      var MAX = 1600;
	      var i = 0;
	      function check() {
	        var el = current.$.find(selector);
	        if (el.length === 0) {
	          el = current.$.filter(selector);
	        }
	        if (i < MAX && el.length === 0) {
	          i += INTERVAL;
	          setTimeout(check, INTERVAL);
	          return;
	        }
	        if (i > MAX) {
	          assert(false, ("<await> Elements are not resolved: " + selector));
	        }
	        Traverser.find(current);
	        done();
	      }
	      check();
	    }
	  };
	  function resolveAttrFirst(node) {
	    var x;
	    for (x in node.attr)
	      break;
	    delete node.attr[x];
	    return x;
	  }
	}());
	obj_extend(Actions, {hasClass: function(compo, current, done) {
	    var args = node_evalMany(current.node);
	    var fn = assert_getFn('hasClass');
	    if (args.length === 1) {
	      args.push(true);
	    }
	    fn(current.$, 'hasClass', args, current.node.attr);
	    done();
	  }});
	var Events;
	(function() {
	  Events = ["blur", "focus", "load", "resize", "scroll", "unload", "beforeunload", "click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "mouseenter", "mouseleave", "change", "select", "submit", "keydown", "keypress", "keyup", "type", "press"];
	}());
	var options = {report: null};
	(function() {
	  assert_TestDom.config = function(mix) {
	    if (typeof mix === 'sttring') {
	      return options[mix];
	    }
	    obj_extend(options, mix);
	    return assert_TestDom;
	  };
	}());
	var Reporter,
	    ProgressReporter_DOM;
	(function() {
	  Reporter = {report: function(error, runner) {
	      if (options.report) {
	        options.report(error);
	        return;
	      }
	      if (__assert) {
	        if (__assert.ifError) {
	          __assert.ifError(error);
	          return;
	        }
	        if (error != null && __assert.fail) {
	          __assert.fail(error);
	          return;
	        }
	      }
	      if (error) {
	        throw error;
	      }
	    }};
	  ProgressReporter_DOM = function(el) {
	    var lines = [];
	    var pre = mask.render("\n\t\t\tpre > +each(.) > div {\n\t\t\t\tspan style='color: ~[: errored ? \"red\" : \"green\"]' > '~[hint]'\n\t\t\t\tspan > '~[text]'\n\t\t\t}\n\t\t", lines);
	    el.appendChild(pre);
	    return function(runner, node, error) {
	      lines.push({
	        text: runner.formatCurrentLine_(error),
	        hint: error ? '✘ ' : '✓ ',
	        errored: Boolean(error)
	      });
	      if (error) {
	        lines.push({
	          text: String(error),
	          hint: ' '
	        });
	      }
	    };
	  };
	}());
	var Runner = class_create(class_EventEmitter, class_Dfr, {
	  constructor: function Runner(container, node, model, compo) {
	    if (container.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
	      container = container.childNodes;
	    }
	    if (container.nodeType === Node.DOCUMENT_NODE) {
	      container = container.body;
	    }
	    this.model = model;
	    this.compo = compo;
	    this.$ = $(container);
	    this.stack = [{
	      $: this.$,
	      node: node
	    }];
	    this.errors = [];
	    this.process = this.process.bind(this);
	    this.next_ = this.next_.bind(this);
	    this.backtrace = new Error().stack;
	    if (this.$.length === 0) {
	      this.report_(Error('No elements to test <root>'));
	    }
	  },
	  attachReporter: function(Reporter) {
	    new Reporter(this);
	    return this;
	  },
	  getCurrent_: function() {
	    return this.stack[this.stack.length - 1];
	  },
	  getCurrentModel_: function() {
	    var el = this.getCurrent_().$;
	    if (el.model) {
	      return el.model() || this.model;
	    }
	    return this.model;
	  },
	  getCurrentCompo_: function() {
	    var el = this.getCurrent_().$;
	    if (el.compo) {
	      return el.compo() || this.compo;
	    }
	    return this.compo;
	  },
	  getCurrentArgs_: function() {
	    var current = this.getCurrent_();
	    return node_evalMany(current.node, this.getCurrentModel_(), this.getCurrentCompo_());
	  },
	  getNext_: function(goDeep) {
	    var current = this.getCurrent_();
	    if (current == null)
	      return null;
	    if (goDeep !== false && current.node.nodes) {
	      this.stack.push({
	        $: current.$,
	        node: current.node.nodes[0]
	      });
	      return this.getCurrent_();
	    }
	    this.stack.pop();
	    while (this.stack.length > 0) {
	      var parent = this.getCurrent_(),
	          nodes = parent.node.nodes,
	          index = nodes.indexOf(current.node);
	      if (index >= nodes.length - 1) {
	        current = this.stack.pop();
	        continue;
	      }
	      if (index === -1) {
	        console.error('Node not found');
	        current = this.stack.pop();
	        continue;
	      }
	      this.stack.push({
	        $: parent.$,
	        node: nodes[index + 1]
	      });
	      return this.getCurrent_();
	    }
	    return null;
	  },
	  process: function assert_TestDom(error) {
	    var current = this.getNext_(error == null);
	    if (current == null) {
	      this.emit('complete', this.errors);
	      if (this.errors.length) {
	        this.reject(this.errors);
	      } else {
	        this.resolve();
	      }
	      return;
	    }
	    var name = current.node.tagName;
	    var traverser = Traverser[name];
	    if (traverser) {
	      var error = this.run_(traverser, [current]);
	      this.next_(error);
	      return;
	    }
	    if (Events.indexOf(name) !== -1) {
	      this.run_(Simulate.$$run, [name, this, current, this.next_]);
	      return;
	    }
	    var action = Actions[name];
	    if (action) {
	      this.run_(action, [this, current, this.next_]);
	      return;
	    }
	    var args = this.getCurrentArgs_();
	    var ctx = current.$;
	    if (name === 'eq' && args.length === 1) {
	      var traverser = Traverser.__eq__;
	      var error = this.run_(traverser, [current]);
	      this.next_(error);
	      return;
	    }
	    if (is_JQuery(ctx)) {
	      var fn = assert_getFn(name);
	      if (fn) {
	        var err = this.run_(fn, [ctx, name, args, current.node.attr]);
	        this.next_(err);
	        return;
	      }
	      log_error('Uknown test function: ', name);
	      this.next_();
	      return;
	    }
	    var err = this.run_(assert_test, [ctx, name, args]);
	    this.next_(err);
	  },
	  next_: function(error) {
	    this.emit('progress', this, this.getCurrent_().node, error);
	    this.process(error);
	  },
	  run_: function(fn, args, ctx) {
	    var error;
	    try {
	      fn.apply(ctx, args);
	    } catch (err) {
	      error = err;
	    }
	    this.report_(error);
	    var next = args[args.length - 1];
	    if (error != null && typeof next === 'function') {
	      next(error);
	    }
	    return error;
	  },
	  report_: function(error) {
	    error = this.prepairError_(error);
	    Reporter.report(error, this);
	    this.emit(error ? 'fail' : 'success', error);
	    if (error) {
	      this.errors.push(error);
	    }
	  },
	  formatCurrentLine_: function(error) {
	    var node = this.getCurrent_().node,
	        indent = '';
	    var parent = node.parent;
	    while (parent != null && parent.type !== mask.Dom.FRAGMENT) {
	      indent += '  ';
	      parent = parent.parent;
	    }
	    return indent + mask.stringify({
	      tagName: node.tagName,
	      attr: node.attr,
	      expression: node.expression
	    }, 2).slice(0, -1);
	  },
	  prepairError_: function(error) {
	    if (error == null)
	      return null;
	    var node = this.getCurrent_().node,
	        tmpl = mask.stringify(node, 2),
	        lines = tmpl.split('\n');
	    if (lines.length > 7) {
	      tmpl = lines.splice(0, 6).join('\n');
	    }
	    Object.defineProperty(error, 'stack', {
	      value: tmpl + '\n' + assert.prepairStack(this.backtrace),
	      writable: true,
	      enumerable: true,
	      configurable: true
	    });
	    error.generatedMessage = false;
	    return error;
	  },
	  ensureInDom_: function() {
	    var $__0 = this;
	    this.ensureInDom_ = function() {};
	    var parent = this.$.get(0).parentNode,
	        inPage = false;
	    while (parent != null) {
	      if (parent.nodeType === Node.DOCUMENT_NODE) {
	        inPage = true;
	        break;
	      }
	      parent = parent.parentNode;
	    }
	    if (inPage)
	      return;
	    this.$.appendTo('body');
	    this.done((function() {
	      return $__0.$.remove();
	    }));
	  },
	  assert: null,
	  wrapAssertion_: function() {
	    var $__0 = this;
	    if (this.assert != null)
	      return this.assert;
	    var wrap = (function(key) {
	      return (function() {
	        for (var args = [],
	            $__1 = 0; $__1 < arguments.length; $__1++)
	          args[$__1] = arguments[$__1];
	        return $__0.run_(key && assert[key] || assert, args);
	      });
	    });
	    ;
	    this.assert = wrap();
	    for (var key in assert) {
	      if (typeof assert[key] === 'function') {
	        this.assert[key] = wrap(key);
	      }
	    }
	    return this.assert;
	  }
	});
	var compo_domtest;
	(function() {
	  compo_domtest = function(mix, model) {
	    if (typeof mix !== 'string') {
	      return test(mix);
	    }
	    var compo = new Compo;
	    mask.render(mix, model, null, null, compo);
	    return test(compo);
	  };
	  function test(compo) {
	    var u = compo.findAll(':utest'),
	        count = u.length,
	        dfr = new class_Dfr;
	    if (count === 0) {
	      __assert(false, 'No `:utest` components found');
	      return dfr.reject();
	    }
	    u.forEach((function(test) {
	      DomTest(test.$, test).done((function() {
	        if (--count === 0)
	          dfr.resolve();
	      }));
	    }));
	    return dfr;
	  }
	  mask.registerHandler(':utest', mask.Compo({render: function(model, ctx, container) {
	      if (container.nodeType === Node.DOCUMENT_FRAGMENT_NODE)
	        container = container.childNodes;
	      this.$ = $(container);
	    }}));
	}());
	assert_TestDom.create = assert_TestDom;
	assert_TestDom.compo = compo_domtest;
	assert_TestDom.ProgressReporters = {Dom: ProgressReporter_DOM};
	
	//# sourceMappingURL=exports.es6.map
		// end:source /src/exports.es6
		
		return assert_TestDom;
	}));
	
	
	(function($){
		if ($.simulate && $.simulate.prototype.simulateKeyCombo) {
			return;
		}
		
		// source /vendor/bililiteRange.js
		// Cross-broswer implementation of text ranges and selections
		// documentation: http://bililite.com/blog/2011/01/17/cross-browser-text-ranges-and-selections/
		// Version: 2.5.1
		// Copyright (c) 2013 Daniel Wachsstock
		// MIT license:
		// Permission is hereby granted, free of charge, to any person
		// obtaining a copy of this software and associated documentation
		// files (the "Software"), to deal in the Software without
		// restriction, including without limitation the rights to use,
		// copy, modify, merge, publish, distribute, sublicense, and/or sell
		// copies of the Software, and to permit persons to whom the
		// Software is furnished to do so, subject to the following
		// conditions:
		
		// The above copyright notice and this permission notice shall be
		// included in all copies or substantial portions of the Software.
		
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
		// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
		// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
		// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
		// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
		// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
		// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
		// OTHER DEALINGS IN THE SOFTWARE.
		
		(function(){
		
		// a bit of weirdness with IE11: using 'focus' is flaky, even if I'm not bubbling, as far as I can tell.
		var focusEvent = 'onfocusin' in document.createElement('input') ? 'focusin' : 'focus';
		
		// IE11 normalize is buggy (http://connect.microsoft.com/IE/feedback/details/809424/node-normalize-removes-text-if-dashes-are-present)
		var n = document.createElement('div');
		n.appendChild(document.createTextNode('x-'));
		n.appendChild(document.createTextNode('x'));
		n.normalize();
		var canNormalize = n.firstChild.length == 3;
		
		
		bililiteRange = function(el, debug){
			var ret;
			if (debug){
				ret = new NothingRange(); // Easier to force it to use the no-selection type than to try to find an old browser
			}else if (window.getSelection && el.setSelectionRange){
				// Standards. Element is an input or textarea 
				// note that some input elements do not allow selections
				try{
					el.selectionStart; // even getting the selection in such an element will throw
					ret = new InputRange();
				}catch(e){
					ret = new NothingRange();
				}
			}else if (window.getSelection){
				// Standards, with any other kind of element
				ret = new W3CRange();
			}else if (document.selection){
				// Internet Explorer
				ret = new IERange();
			}else{
				// doesn't support selection
				ret = new NothingRange();
			}
			ret._el = el;
			// determine parent document, as implemented by John McLear <john@mclear.co.uk>
			ret._doc = el.ownerDocument;
			ret._win = 'defaultView' in ret._doc ? ret._doc.defaultView : ret._doc.parentWindow;
			ret._textProp = textProp(el);
			ret._bounds = [0, ret.length()];
			//  There's no way to detect whether a focus event happened as a result of a click (which should change the selection)
			// or as a result of a keyboard event (a tab in) or a script  action (el.focus()). So we track it globally, which is a hack, and is likely to fail
			// in edge cases (right-clicks, drag-n-drop), and is vulnerable to a lower-down handler preventing bubbling.
			// I just don't know a better way.
			// I'll hack my event-listening code below, rather than create an entire new bilililiteRange, potentially before the DOM has loaded
			if (!('bililiteRangeMouseDown' in ret._doc)){
				var _doc = {_el: ret._doc};
				ret._doc.bililiteRangeMouseDown = false;
				bililiteRange.fn.listen.call(_doc, 'mousedown', function() {
					ret._doc.bililiteRangeMouseDown = true;
				});
				bililiteRange.fn.listen.call(_doc, 'mouseup', function() {
					ret._doc.bililiteRangeMouseDown = false;
				});
			}
			// note that bililiteRangeSelection is an array, which means that copying it only copies the address, which points to the original.
			// make sure that we never let it (always do return [bililiteRangeSelection[0], bililiteRangeSelection[1]]), which means never returning
			// this._bounds directly
			if (!('bililiteRangeSelection' in el)){
				// start tracking the selection
				function trackSelection(evt){
					if (evt && evt.which == 9){
						// do tabs my way, by restoring the selection
						// there's a flash of the browser's selection, but I don't see a way of avoiding that
						ret._nativeSelect(ret._nativeRange(el.bililiteRangeSelection));
					}else{
						el.bililiteRangeSelection = ret._nativeSelection();
					}
				}
				trackSelection();
				// only IE does this right and allows us to grab the selection before blurring
				if ('onbeforedeactivate' in el){
					ret.listen('beforedeactivate', trackSelection);
				}else{
					// with standards-based browsers, have to listen for every user interaction
					ret.listen('mouseup', trackSelection).listen('keyup', trackSelection);
				}
				ret.listen(focusEvent, function(){
					// restore the correct selection when the element comes into focus (mouse clicks change the position of the selection)
					// Note that Firefox will not fire the focus event until the window/tab is active even if el.focus() is called
					// https://bugzilla.mozilla.org/show_bug.cgi?id=566671
					if (!ret._doc.bililiteRangeMouseDown){
						ret._nativeSelect(ret._nativeRange(el.bililiteRangeSelection));
					}
				});
			}
			if (!('oninput' in el)){
				// give IE8 a chance. Note that this still fails in IE11, which has has oninput on contenteditable elements but does not 
				// dispatch input events. See http://connect.microsoft.com/IE/feedback/details/794285/ie10-11-input-event-does-not-fire-on-div-with-contenteditable-set
				// TODO: revisit this when I have IE11 running on my development machine
				var inputhack = function() {ret.dispatch({type: 'input'}) };
				ret.listen('keyup', inputhack);
				ret.listen('cut', inputhack);
				ret.listen('paste', inputhack);
				ret.listen('drop', inputhack);
				el.oninput = 'patched';
			}
			return ret;
		}
		
		function textProp(el){
			// returns the property that contains the text of the element
			// note that for <body> elements the text attribute represents the obsolete text color, not the textContent.
			// we document that these routines do not work for <body> elements so that should not be relevant
			if (typeof el.value != 'undefined') return 'value';
			if (typeof el.text != 'undefined') return 'text';
			if (typeof el.textContent != 'undefined') return 'textContent';
			return 'innerText';
		}
		
		// base class
		function Range(){}
		Range.prototype = {
			length: function() {
				return this._el[this._textProp].replace(/\r/g, '').length; // need to correct for IE's CrLf weirdness
			},
			bounds: function(s){
				if (bililiteRange.bounds[s]){
					this._bounds = bililiteRange.bounds[s].apply(this);
				}else if (s){
					this._bounds = s; // don't do error checking now; things may change at a moment's notice
				}else{
					var b = [
						Math.max(0, Math.min (this.length(), this._bounds[0])),
						Math.max(0, Math.min (this.length(), this._bounds[1]))
					];
					b[1] = Math.max(b[0], b[1]);
					return b; // need to constrain it to fit
				}
				return this; // allow for chaining
			},
			select: function(){
				var b = this._el.bililiteRangeSelection = this.bounds();
				if (this._el == document.activeElement){
					// only actually select if this element is active!
					this._nativeSelect(this._nativeRange(b));
				}
				this.dispatch({type: 'select'});
				return this; // allow for chaining
			},
			text: function(text, select){
				if (arguments.length){
					var bounds = this.bounds(), el = this._el;
					// signal the input per DOM 3 input events, http://www.w3.org/TR/DOM-Level-3-Events/#h4_events-inputevents
					// we add another field, bounds, which are the bounds of the original text before being changed.
					this.dispatch({type: 'beforeinput', data: text, bounds: bounds});
					this._nativeSetText(text, this._nativeRange(bounds));
					if (select == 'start'){
						this.bounds ([bounds[0], bounds[0]]);
					}else if (select == 'end'){
						this.bounds ([bounds[0]+text.length, bounds[0]+text.length]);
					}else if (select == 'all'){
						this.bounds ([bounds[0], bounds[0]+text.length]);
					}
					this.dispatch({type: 'input', data: text, bounds: bounds});
					return this; // allow for chaining
				}else{
					return this._nativeGetText(this._nativeRange(this.bounds())).replace(/\r/g, ''); // need to correct for IE's CrLf weirdness
				}
			},
			insertEOL: function (){
				this._nativeEOL();
				this._bounds = [this._bounds[0]+1, this._bounds[0]+1]; // move past the EOL marker
				return this;
			},
			sendkeys: function (text){
				var self = this;
				this.data().sendkeysOriginalText = this.text();
				this.data().sendkeysBounds = undefined;
				function simplechar (rng, c){
					if (/^{[^}]*}$/.test(c)) c = c.slice(1,-1);	// deal with unknown {key}s
					for (var i =0; i < c.length; ++i){
						var x = c.charCodeAt(i);
						rng.dispatch({type: 'keypress', keyCode: x, which: x, charCode: x});
					}
					rng.text(c, 'end');
				}
				text.replace(/{[^}]*}|[^{]+/g, function(part){
					(bililiteRange.sendkeys[part] || simplechar)(self, part, simplechar);
				});
				this.bounds(this.data().sendkeysBounds);
				this.dispatch({type: 'sendkeys', which: text});
				return this;
			},
			top: function(){
				return this._nativeTop(this._nativeRange(this.bounds()));
			},
			scrollIntoView: function(scroller){
				var top = this.top();
				// scroll into position if necessary
				if (this._el.scrollTop > top || this._el.scrollTop+this._el.clientHeight < top){
					if (scroller){
						scroller.call(this._el, top);
					}else{
						this._el.scrollTop = top;
					}
				}
				return this;
			},
			wrap: function (n){
				this._nativeWrap(n, this._nativeRange(this.bounds()));
				return this;
			},
			selection: function(text){
				if (arguments.length){
					return this.bounds('selection').text(text, 'end').select();
				}else{
					return this.bounds('selection').text();
				}
			},
			clone: function(){
				return bililiteRange(this._el).bounds(this.bounds());
			},
			all: function(text){
				if (arguments.length){
					this.dispatch ({type: 'beforeinput', data: text});
					this._el[this._textProp] = text;
					this.dispatch ({type: 'input', data: text});
					return this;
				}else{
					return this._el[this._textProp].replace(/\r/g, ''); // need to correct for IE's CrLf weirdness
				}
			},
			element: function() { return this._el },
			// includes a quickie polyfill for CustomEvent for IE that isn't perfect but works for me
			// IE10 allows custom events but not "new CustomEvent"; have to do it the old-fashioned way
			dispatch: function(opts){
				opts = opts || {};
				var event = document.createEvent ? document.createEvent('CustomEvent') : this._doc.createEventObject();
				event.initCustomEvent && event.initCustomEvent(opts.type, !!opts.bubbles, !!opts.cancelable, opts.detail);
				for (var key in opts) event[key] = opts[key];
				// dispatch event asynchronously (in the sense of on the next turn of the event loop; still should be fired in order of dispatch
				var el = this._el;
				setTimeout(function(){
					try {
						el.dispatchEvent ? el.dispatchEvent(event) : el.fireEvent("on" + opts.type, document.createEventObject());
						}catch(e){
						// IE8 will not let me fire custom events at all. Call them directly
							var listeners = el['listen'+opts.type];
							if (listeners) for (var i = 0; i < listeners.length; ++i){
								listeners[i].call(el, event);
							}
						}
				}, 0);
				return this;
			},
			listen: function (type, func){
				var el = this._el;
				if (el.addEventListener){
					el.addEventListener(type, func);
				}else{
					el.attachEvent("on" + type, func);
					// IE8 can't even handle custom events created with createEventObject  (though it permits attachEvent), so we have to make our own
					var listeners = el['listen'+type] = el['listen'+type] || [];
					listeners.push(func);
				}
				return this;
			},
			dontlisten: function (type, func){
				var el = this._el;
				if (el.removeEventListener){
					el.removeEventListener(type, func);
				}else try{
					el.detachEvent("on" + type, func);
				}catch(e){
					var listeners = el['listen'+type];
					if (listeners) for (var i = 0; i < listeners.length; ++i){
						if (listeners[i] === func) listeners[i] = function(){}; // replace with a noop
					}
				}
				return this;
			}
		};
		
		// allow extensions ala jQuery
		bililiteRange.fn = Range.prototype; // to allow monkey patching
		bililiteRange.extend = function(fns){
			for (fn in fns) Range.prototype[fn] = fns[fn];
		};
		
		//bounds functions
		bililiteRange.bounds = {
			all: function() { return [0, this.length()] },
			start: function () { return [0,0] },
			end: function () { return [this.length(), this.length()] },
			selection: function(){
				if (this._el == document.activeElement){
					this.bounds ('all'); // first select the whole thing for constraining
					return this._nativeSelection();
				}else{
					return this._el.bililiteRangeSelection;
				}
			}
		};
		
		// sendkeys functions
		bililiteRange.sendkeys = {
			'{enter}': function (rng){
				var x = '\n'.charCodeAt(0);
				rng.dispatch({type: 'keypress', keyCode: x, which: x, charCode: x});
				rng.insertEOL();
			},
			'{tab}': function (rng, c, simplechar){
				simplechar(rng, '\t'); // useful for inserting what would be whitespace
			},
			'{newline}': function (rng, c, simplechar){
				simplechar(rng, '\n'); // useful for inserting what would be whitespace (and if I don't want to use insertEOL, which does some fancy things)
			},
			'{backspace}': function (rng){
				var b = rng.bounds();
				if (b[0] == b[1]) rng.bounds([b[0]-1, b[0]]); // no characters selected; it's just an insertion point. Remove the previous character
				rng.text('', 'end'); // delete the characters and update the selection
			},
			'{del}': function (rng){
				var b = rng.bounds();
				if (b[0] == b[1]) rng.bounds([b[0], b[0]+1]); // no characters selected; it's just an insertion point. Remove the next character
				rng.text('', 'end'); // delete the characters and update the selection
			},
			'{rightarrow}':  function (rng){
				var b = rng.bounds();
				if (b[0] == b[1]) ++b[1]; // no characters selected; it's just an insertion point. Move to the right
				rng.bounds([b[1], b[1]]);
			},
			'{leftarrow}': function (rng){
				var b = rng.bounds();
				if (b[0] == b[1]) --b[0]; // no characters selected; it's just an insertion point. Move to the left
				rng.bounds([b[0], b[0]]);
			},
			'{selectall}' : function (rng){
				rng.bounds('all');
			},
			'{selection}': function (rng){
				// insert the characters without the sendkeys processing
				var s = rng.data().sendkeysOriginalText;
				for (var i =0; i < s.length; ++i){
					var x = s.charCodeAt(i);
					rng.dispatch({type: 'keypress', keyCode: x, which: x, charCode: x});
				}
				rng.text(s, 'end');
			},
			'{mark}' : function (rng){
				rng.data().sendkeysBounds = rng.bounds();
			}
		};
		
		function IERange(){}
		IERange.prototype = new Range();
		IERange.prototype._nativeRange = function (bounds){
			var rng;
			if (this._el.tagName == 'INPUT'){
				// IE 8 is very inconsistent; textareas have createTextRange but it doesn't work
				rng = this._el.createTextRange();
			}else{
				rng = this._doc.body.createTextRange ();
				rng.moveToElementText(this._el);
			}
			if (bounds){
				if (bounds[1] < 0) bounds[1] = 0; // IE tends to run elements out of bounds
				if (bounds[0] > this.length()) bounds[0] = this.length();
				if (bounds[1] < rng.text.replace(/\r/g, '').length){ // correct for IE's CrLf weirdness
					// block-display elements have an invisible, uncounted end of element marker, so we move an extra one and use the current length of the range
					rng.moveEnd ('character', -1);
					rng.moveEnd ('character', bounds[1]-rng.text.replace(/\r/g, '').length);
				}
				if (bounds[0] > 0) rng.moveStart('character', bounds[0]);
			}
			return rng;					
		};
		IERange.prototype._nativeSelect = function (rng){
			rng.select();
		};
		IERange.prototype._nativeSelection = function (){
			// returns [start, end] for the selection constrained to be in element
			var rng = this._nativeRange(); // range of the element to constrain to
			var len = this.length();
			var sel = this._doc.selection.createRange();
			try{
				return [
					iestart(sel, rng),
					ieend (sel, rng)
				];
			}catch (e){
				// TODO: determine if this is still necessary, since we only call _nativeSelection if _el is active
				// IE gets upset sometimes about comparing text to input elements, but the selections cannot overlap, so make a best guess
				return (sel.parentElement().sourceIndex < this._el.sourceIndex) ? [0,0] : [len, len];
			}
		};
		IERange.prototype._nativeGetText = function (rng){
			return rng.text;
		};
		IERange.prototype._nativeSetText = function (text, rng){
			rng.text = text;
		};
		IERange.prototype._nativeEOL = function(){
			if ('value' in this._el){
				this.text('\n'); // for input and textarea, insert it straight
			}else{
				this._nativeRange(this.bounds()).pasteHTML('\n<br/>');
			}
		};
		IERange.prototype._nativeTop = function(rng){
			var startrng = this._nativeRange([0,0]);
			return rng.boundingTop - startrng.boundingTop;
		}
		IERange.prototype._nativeWrap = function(n, rng) {
			// hacky to use string manipulation but I don't see another way to do it.
			var div = document.createElement('div');
			div.appendChild(n);
			// insert the existing range HTML after the first tag
			var html = div.innerHTML.replace('><', '>'+rng.htmlText+'<');
			rng.pasteHTML(html);
		};
		
		// IE internals
		function iestart(rng, constraint){
			// returns the position (in character) of the start of rng within constraint. If it's not in constraint, returns 0 if it's before, length if it's after
			var len = constraint.text.replace(/\r/g, '').length; // correct for IE's CrLf weirdness
			if (rng.compareEndPoints ('StartToStart', constraint) <= 0) return 0; // at or before the beginning
			if (rng.compareEndPoints ('StartToEnd', constraint) >= 0) return len;
			for (var i = 0; rng.compareEndPoints ('StartToStart', constraint) > 0; ++i, rng.moveStart('character', -1));
			return i;
		}
		function ieend (rng, constraint){
			// returns the position (in character) of the end of rng within constraint. If it's not in constraint, returns 0 if it's before, length if it's after
			var len = constraint.text.replace(/\r/g, '').length; // correct for IE's CrLf weirdness
			if (rng.compareEndPoints ('EndToEnd', constraint) >= 0) return len; // at or after the end
			if (rng.compareEndPoints ('EndToStart', constraint) <= 0) return 0;
			for (var i = 0; rng.compareEndPoints ('EndToStart', constraint) > 0; ++i, rng.moveEnd('character', -1));
			return i;
		}
		
		// an input element in a standards document. "Native Range" is just the bounds array
		function InputRange(){}
		InputRange.prototype = new Range();
		InputRange.prototype._nativeRange = function(bounds) {
			return bounds || [0, this.length()];
		};
		InputRange.prototype._nativeSelect = function (rng){
			this._el.setSelectionRange(rng[0], rng[1]);
		};
		InputRange.prototype._nativeSelection = function(){
			return [this._el.selectionStart, this._el.selectionEnd];
		};
		InputRange.prototype._nativeGetText = function(rng){
			return this._el.value.substring(rng[0], rng[1]);
		};
		InputRange.prototype._nativeSetText = function(text, rng){
			var val = this._el.value;
			this._el.value = val.substring(0, rng[0]) + text + val.substring(rng[1]);
		};
		InputRange.prototype._nativeEOL = function(){
			this.text('\n');
		};
		InputRange.prototype._nativeTop = function(rng){
			// I can't remember where I found this clever hack to find the location of text in a text area
			var clone = this._el.cloneNode(true);
			clone.style.visibility = 'hidden';
			clone.style.position = 'absolute';
			this._el.parentNode.insertBefore(clone, this._el);
			clone.style.height = '1px';
			clone.value = this._el.value.slice(0, rng[0]);
			var top = clone.scrollHeight;
			// this gives the bottom of the text, so we have to subtract the height of a single line
			clone.value = 'X';
			top -= clone.scrollHeight;
			clone.parentNode.removeChild(clone);
			return top;
		}
		InputRange.prototype._nativeWrap = function() {throw new Error("Cannot wrap in a text element")};
		
		function W3CRange(){}
		W3CRange.prototype = new Range();
		W3CRange.prototype._nativeRange = function (bounds){
			var rng = this._doc.createRange();
			rng.selectNodeContents(this._el);
			if (bounds){
				w3cmoveBoundary (rng, bounds[0], true, this._el);
				rng.collapse (true);
				w3cmoveBoundary (rng, bounds[1]-bounds[0], false, this._el);
			}
			return rng;					
		};
		W3CRange.prototype._nativeSelect = function (rng){
			this._win.getSelection().removeAllRanges();
			this._win.getSelection().addRange (rng);
		};
		W3CRange.prototype._nativeSelection = function (){
			// returns [start, end] for the selection constrained to be in element
			var rng = this._nativeRange(); // range of the element to constrain to
			if (this._win.getSelection().rangeCount == 0) return [this.length(), this.length()]; // append to the end
			var sel = this._win.getSelection().getRangeAt(0);
			return [
				w3cstart(sel, rng),
				w3cend (sel, rng)
			];
			}
		W3CRange.prototype._nativeGetText = function (rng){
			return String.prototype.slice.apply(this._el.textContent, this.bounds());
			// return rng.toString(); // this fails in IE11 since it insists on inserting \r's before \n's in Ranges. node.textContent works as expected
		};
		W3CRange.prototype._nativeSetText = function (text, rng){
			rng.deleteContents();
			rng.insertNode (this._doc.createTextNode(text));
			if (canNormalize) this._el.normalize(); // merge the text with the surrounding text
		};
		W3CRange.prototype._nativeEOL = function(){
			var rng = this._nativeRange(this.bounds());
			rng.deleteContents();
			var br = this._doc.createElement('br');
			br.setAttribute ('_moz_dirty', ''); // for Firefox
			rng.insertNode (br);
			rng.insertNode (this._doc.createTextNode('\n'));
			rng.collapse (false);
		};
		W3CRange.prototype._nativeTop = function(rng){
			if (this.length == 0) return 0; // no text, no scrolling
			if (rng.toString() == ''){
				var textnode = this._doc.createTextNode('X');
				rng.insertNode (textnode);
			}
			var startrng = this._nativeRange([0,1]);
			var top = rng.getBoundingClientRect().top - startrng.getBoundingClientRect().top;
			if (textnode) textnode.parentNode.removeChild(textnode);
			return top;
		}
		W3CRange.prototype._nativeWrap = function(n, rng) {
			rng.surroundContents(n);
		};
		
		// W3C internals
		function nextnode (node, root){
			//  in-order traversal
			// we've already visited node, so get kids then siblings
			if (node.firstChild) return node.firstChild;
			if (node.nextSibling) return node.nextSibling;
			if (node===root) return null;
			while (node.parentNode){
				// get uncles
				node = node.parentNode;
				if (node == root) return null;
				if (node.nextSibling) return node.nextSibling;
			}
			return null;
		}
		function w3cmoveBoundary (rng, n, bStart, el){
			// move the boundary (bStart == true ? start : end) n characters forward, up to the end of element el. Forward only!
			// if the start is moved after the end, then an exception is raised
			if (n <= 0) return;
			var node = rng[bStart ? 'startContainer' : 'endContainer'];
			if (node.nodeType == 3){
			  // we may be starting somewhere into the text
			  n += rng[bStart ? 'startOffset' : 'endOffset'];
			}
			while (node){
				if (node.nodeType == 3){
					var length = node.nodeValue.length;
					if (n <= length){
						rng[bStart ? 'setStart' : 'setEnd'](node, n);
						// special case: if we end next to a <br>, include that node.
						if (n == length){
							// skip past zero-length text nodes
							for (var next = nextnode (node, el); next && next.nodeType==3 && next.nodeValue.length == 0; next = nextnode(next, el)){
								rng[bStart ? 'setStartAfter' : 'setEndAfter'](next);
							}
							if (next && next.nodeType == 1 && next.nodeName == "BR") rng[bStart ? 'setStartAfter' : 'setEndAfter'](next);
						}
						return;
					}else{
						rng[bStart ? 'setStartAfter' : 'setEndAfter'](node); // skip past this one
						n -= length; // and eat these characters
					}
				}
				node = nextnode (node, el);
			}
		}
		var     START_TO_START                 = 0; // from the w3c definitions
		var     START_TO_END                   = 1;
		var     END_TO_END                     = 2;
		var     END_TO_START                   = 3;
		// from the Mozilla documentation, for range.compareBoundaryPoints(how, sourceRange)
		// -1, 0, or 1, indicating whether the corresponding boundary-point of range is respectively before, equal to, or after the corresponding boundary-point of sourceRange. 
		    // * Range.END_TO_END compares the end boundary-point of sourceRange to the end boundary-point of range.
		    // * Range.END_TO_START compares the end boundary-point of sourceRange to the start boundary-point of range.
		    // * Range.START_TO_END compares the start boundary-point of sourceRange to the end boundary-point of range.
		    // * Range.START_TO_START compares the start boundary-point of sourceRange to the start boundary-point of range. 
		function w3cstart(rng, constraint){
			if (rng.compareBoundaryPoints (START_TO_START, constraint) <= 0) return 0; // at or before the beginning
			if (rng.compareBoundaryPoints (END_TO_START, constraint) >= 0) return constraint.toString().length;
			rng = rng.cloneRange(); // don't change the original
			rng.setEnd (constraint.endContainer, constraint.endOffset); // they now end at the same place
			return constraint.toString().replace(/\r/g, '').length - rng.toString().replace(/\r/g, '').length;
		}
		function w3cend (rng, constraint){
			if (rng.compareBoundaryPoints (END_TO_END, constraint) >= 0) return constraint.toString().length; // at or after the end
			if (rng.compareBoundaryPoints (START_TO_END, constraint) <= 0) return 0;
			rng = rng.cloneRange(); // don't change the original
			rng.setStart (constraint.startContainer, constraint.startOffset); // they now start at the same place
			return rng.toString().replace(/\r/g, '').length;
		}
		
		function NothingRange(){}
		NothingRange.prototype = new Range();
		NothingRange.prototype._nativeRange = function(bounds) {
			return bounds || [0,this.length()];
		};
		NothingRange.prototype._nativeSelect = function (rng){ // do nothing
		};
		NothingRange.prototype._nativeSelection = function(){
			return [0,0];
		};
		NothingRange.prototype._nativeGetText = function (rng){
			return this._el[this._textProp].substring(rng[0], rng[1]);
		};
		NothingRange.prototype._nativeSetText = function (text, rng){
			var val = this._el[this._textProp];
			this._el[this._textProp] = val.substring(0, rng[0]) + text + val.substring(rng[1]);
		};
		NothingRange.prototype._nativeEOL = function(){
			this.text('\n');
		};
		NothingRange.prototype._nativeTop = function(){
			return 0;
		};
		NothingRange.prototype._nativeWrap = function() {throw new Error("Wrapping not implemented")};
		
		
		// data for elements, similar to jQuery data, but allows for monitoring with custom events
		var data = []; // to avoid attaching javascript objects to DOM elements, to avoid memory leaks
		bililiteRange.fn.data = function(){
			var index = this.element().bililiteRangeData;
			if (index == undefined){
				index = this.element().bililiteRangeData = data.length;
				data[index] = new Data(this);
			}
			return data[index];
		}
		try {
			Object.defineProperty({},'foo',{}); // IE8 will throw an error
			var Data = function(rng) {
				// we use JSON.stringify to display the data values. To make some of those non-enumerable, we have to use properties
				Object.defineProperty(this, 'values', {
					value: {}
				});
				Object.defineProperty(this, 'sourceRange', {
					value: rng
				});
				Object.defineProperty(this, 'toJSON', {
					value: function(){
						var ret = {};
						for (var i in Data.prototype) if (i in this.values) ret[i] = this.values[i];
						return ret;
					}
				});
				// to display all the properties (not just those changed), use JSON.stringify(state.all)
				Object.defineProperty(this, 'all', {
					get: function(){
						var ret = {};
						for (var i in Data.prototype) ret[i] = this[i];
						return ret;
					}
				});
			}
		
			Data.prototype = {};
			Object.defineProperty(Data.prototype, 'values', {
				value: {}
			});
			Object.defineProperty(Data.prototype, 'monitored', {
				value: {}
			});
			
			bililiteRange.data = function (name, newdesc){
				newdesc = newdesc || {};
				var desc = Object.getOwnPropertyDescriptor(Data.prototype, name) || {};
				if ('enumerable' in newdesc) desc.enumerable = !!newdesc.enumerable;
				if (!('enumerable' in desc)) desc.enumerable = true; // default
				if ('value' in newdesc) Data.prototype.values[name] = newdesc.value;
				if ('monitored' in newdesc) Data.prototype.monitored[name] = newdesc.monitored;
				desc.configurable = true;
				desc.get = function (){
					if (name in this.values) return this.values[name];
					return Data.prototype.values[name];
				};
				desc.set = function (value){
					this.values[name] = value;
					if (Data.prototype.monitored[name]) this.sourceRange.dispatch({
						type: 'bililiteRangeData',
						bubbles: true,
						detail: {name: name, value: value}
					});
				}
				Object.defineProperty(Data.prototype, name, desc);
			}
		}catch(err){
			// if we can't set object property properties, just use old-fashioned properties
		  Data = function(rng){ this.sourceRange = rng };
			Data.prototype = {};
			bililiteRange.data = function(name, newdesc){
				if ('value' in newdesc) Data.prototype[name] = newdesc.value;
			}
		}
		
		})();
		
		// Polyfill for forEach, per Mozilla documentation. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Polyfill
		if (!Array.prototype.forEach)
		{
		  Array.prototype.forEach = function(fun /*, thisArg */)
		  {
		    "use strict";
		
		    if (this === void 0 || this === null)
		      throw new TypeError();
		
		    var t = Object(this);
		    var len = t.length >>> 0;
		    if (typeof fun !== "function")
		      throw new TypeError();
		
		    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
		    for (var i = 0; i < len; i++)
		    {
		      if (i in t)
		        fun.call(thisArg, t[i], i, t);
		    }
		  };
		}
		
		// end:source /vendor/bililiteRange.js
		// source /bower_components/jquery-simulate-ext/libs/jquery.simulate.js
		 /*!
	 * jQuery Simulate v0.0.1 - simulate browser mouse and keyboard events
	 * https://github.com/jquery/jquery-simulate
	 *
	 * Copyright 2012 jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 *
	 * Date: Sun Dec 9 12:15:33 2012 -0500
	 */
	
	;(function( $, undefined ) {
		"use strict";
	
	var rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|contextmenu)|click/,
		rdocument = /\[object (?:HTML)?Document\]/;
	
	function isDocument(ele) {
		return rdocument.test(Object.prototype.toString.call(ele));
	}
	
	function windowOfDocument(doc) {
		for (var i=0; i < window.frames.length; i+=1) {
			if (window.frames[i].document === doc) {
				return window.frames[i];
			}
		}
		return window;
	}
	
	$.fn.simulate = function( type, options ) {
		return this.each(function() {
			new $.simulate( this, type, options );
		});
	};
	
	$.simulate = function( elem, type, options ) {
		var method = $.camelCase( "simulate-" + type );
	
		this.target = elem;
		this.options = options || {};
	
		if ( this[ method ] ) {
			this[ method ]();
		} else {
			this.simulateEvent( elem, type, this.options );
		}
	};
	
	$.extend( $.simulate, {
	
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			NUMPAD_ADD: 107,
			NUMPAD_DECIMAL: 110,
			NUMPAD_DIVIDE: 111,
			NUMPAD_ENTER: 108,
			NUMPAD_MULTIPLY: 106,
			NUMPAD_SUBTRACT: 109,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		},
	
		buttonCode: {
			LEFT: 0,
			MIDDLE: 1,
			RIGHT: 2
		}
	});
	
	$.extend( $.simulate.prototype, {
	
		simulateEvent: function( elem, type, options ) {
			var event = this.createEvent( type, options );
			this.dispatchEvent( elem, type, event, options );
		},
	
		createEvent: function( type, options ) {
			if ( rkeyEvent.test( type ) ) {
				return this.keyEvent( type, options );
			}
	
			if ( rmouseEvent.test( type ) ) {
				return this.mouseEvent( type, options );
			}
		},
	
		mouseEvent: function( type, options ) {
			var event,
				eventDoc,
				doc = isDocument(this.target)? this.target : (this.target.ownerDocument || document),
				docEle,
				body;
			
			
			options = $.extend({
				bubbles: true,
				cancelable: (type !== "mousemove"),
				view: windowOfDocument(doc),
				detail: 0,
				screenX: 0,
				screenY: 0,
				clientX: 1,
				clientY: 1,
				ctrlKey: false,
				altKey: false,
				shiftKey: false,
				metaKey: false,
				button: 0,
				relatedTarget: undefined
			}, options );
	
			
			
			if ( doc.createEvent ) {
				event = doc.createEvent( "MouseEvents" );
				event.initMouseEvent( type, options.bubbles, options.cancelable,
					options.view, options.detail,
					options.screenX, options.screenY, options.clientX, options.clientY,
					options.ctrlKey, options.altKey, options.shiftKey, options.metaKey,
					options.button, options.relatedTarget || doc.body.parentNode );
	
				// IE 9+ creates events with pageX and pageY set to 0.
				// Trying to modify the properties throws an error,
				// so we define getters to return the correct values.
				if ( event.pageX === 0 && event.pageY === 0 && Object.defineProperty ) {
					eventDoc = isDocument(event.relatedTarget)? event.relatedTarget : (event.relatedTarget.ownerDocument || document);
					docEle = eventDoc.documentElement;
					body = eventDoc.body;
	
					Object.defineProperty( event, "pageX", {
						get: function() {
							return options.clientX +
								( docEle && docEle.scrollLeft || body && body.scrollLeft || 0 ) -
								( docEle && docEle.clientLeft || body && body.clientLeft || 0 );
						}
					});
					Object.defineProperty( event, "pageY", {
						get: function() {
							return options.clientY +
								( docEle && docEle.scrollTop || body && body.scrollTop || 0 ) -
								( docEle && docEle.clientTop || body && body.clientTop || 0 );
						}
					});
				}
			} else if ( doc.createEventObject ) {
				event = doc.createEventObject();
				$.extend( event, options );
				// standards event.button uses constants defined here: http://msdn.microsoft.com/en-us/library/ie/ff974877(v=vs.85).aspx
				// old IE event.button uses constants defined here: http://msdn.microsoft.com/en-us/library/ie/ms533544(v=vs.85).aspx
				// so we actually need to map the standard back to oldIE
				event.button = {
					0: 1,
					1: 4,
					2: 2
				}[ event.button ] || event.button;
			}
	
			return event;
		},
	
		keyEvent: function( type, options ) {
			var event, doc;
			options = $.extend({
				bubbles: true,
				cancelable: true,
				view: windowOfDocument(doc),
				ctrlKey: false,
				altKey: false,
				shiftKey: false,
				metaKey: false,
				keyCode: 0,
				charCode: undefined
			}, options );
	
			doc = isDocument(this.target)? this.target : (this.target.ownerDocument || document);
			if ( doc.createEvent ) {
				try {
					event = doc.createEvent( "KeyEvents" );
					event.initKeyEvent( type, options.bubbles, options.cancelable, options.view,
						options.ctrlKey, options.altKey, options.shiftKey, options.metaKey,
						options.keyCode, options.charCode );
				// initKeyEvent throws an exception in WebKit
				// see: http://stackoverflow.com/questions/6406784/initkeyevent-keypress-only-works-in-firefox-need-a-cross-browser-solution
				// and also https://bugs.webkit.org/show_bug.cgi?id=13368
				// fall back to a generic event until we decide to implement initKeyboardEvent
				} catch( err ) {
					event = doc.createEvent( "Events" );
					event.initEvent( type, options.bubbles, options.cancelable );
					$.extend( event, {
						view: options.view,
						ctrlKey: options.ctrlKey,
						altKey: options.altKey,
						shiftKey: options.shiftKey,
						metaKey: options.metaKey,
						keyCode: options.keyCode,
						charCode: options.charCode
					});
				}
			} else if ( doc.createEventObject ) {
				event = doc.createEventObject();
				$.extend( event, options );
			}
	
			if ( !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() ) || (({}).toString.call( window.opera ) === "[object Opera]") ) {
				event.keyCode = (options.charCode > 0) ? options.charCode : options.keyCode;
				event.charCode = undefined;
			}
	
			return event;
		},
	
		dispatchEvent: function( elem, type, event, options ) {
			if (options.jQueryTrigger === true) {
				$(elem).trigger($.extend({}, event, options, {type: type}));
			}
			else if ( elem.dispatchEvent ) {
				elem.dispatchEvent( event );
			} else if ( elem.fireEvent ) {
				elem.fireEvent( "on" + type, event );
			}
		},
	
		simulateFocus: function() {
			var focusinEvent,
				triggered = false,
				$element = $( this.target );
	
			function trigger() {
				triggered = true;
			}
	
			$element.bind( "focus", trigger );
			$element[ 0 ].focus();
	
			if ( !triggered ) {
				focusinEvent = $.Event( "focusin" );
				focusinEvent.preventDefault();
				$element.trigger( focusinEvent );
				$element.triggerHandler( "focus" );
			}
			$element.unbind( "focus", trigger );
		},
	
		simulateBlur: function() {
			var focusoutEvent,
				triggered = false,
				$element = $( this.target );
	
			function trigger() {
				triggered = true;
			}
	
			$element.bind( "blur", trigger );
			$element[ 0 ].blur();
	
			// blur events are async in IE
			setTimeout(function() {
				// IE won't let the blur occur if the window is inactive
				if ( $element[ 0 ].ownerDocument.activeElement === $element[ 0 ] ) {
					$element[ 0 ].ownerDocument.body.focus();
				}
	
				// Firefox won't trigger events if the window is inactive
				// IE doesn't trigger events if we had to manually focus the body
				if ( !triggered ) {
					focusoutEvent = $.Event( "focusout" );
					focusoutEvent.preventDefault();
					$element.trigger( focusoutEvent );
					$element.triggerHandler( "blur" );
				}
				$element.unbind( "blur", trigger );
			}, 1 );
		}
	});
	
	
	
	/** complex events **/
	
	function findCenter( elem ) {
		var offset,
			$document,
			$elem = $( elem );
		
		if ( isDocument($elem[0]) ) {
			$document = $elem;
			offset = { left: 0, top: 0 };
		}
		else {
			$document = $( $elem[0].ownerDocument || document );
			offset = $elem.offset();
		}
		
		return {
			x: offset.left + $elem.outerWidth() / 2 - $document.scrollLeft(),
			y: offset.top + $elem.outerHeight() / 2 - $document.scrollTop()
		};
	}
	
	function findCorner( elem ) {
		var offset,
			$document,
			$elem = $( elem );
		
		if ( isDocument($elem[0]) ) {
			$document = $elem;
			offset = { left: 0, top: 0 };
		}
		else {
			$document = $( $elem[0].ownerDocument || document );
			offset = $elem.offset();
		}
	
		return {
			x: offset.left - document.scrollLeft(),
			y: offset.top - document.scrollTop()
		};
	}
	
	$.extend( $.simulate.prototype, {
		simulateDrag: function() {
			var i = 0,
				target = this.target,
				options = this.options,
				center = options.handle === "corner" ? findCorner( target ) : findCenter( target ),
				x = Math.floor( center.x ),
				y = Math.floor( center.y ),
				coord = { clientX: x, clientY: y },
				dx = options.dx || ( options.x !== undefined ? options.x - x : 0 ),
				dy = options.dy || ( options.y !== undefined ? options.y - y : 0 ),
				moves = options.moves || 3;
	
			this.simulateEvent( target, "mousedown", coord );
	
			for ( ; i < moves ; i++ ) {
				x += dx / moves;
				y += dy / moves;
	
				coord = {
					clientX: Math.round( x ),
					clientY: Math.round( y )
				};
	
				this.simulateEvent( target.ownerDocument, "mousemove", coord );
			}
	
			if ( $.contains( document, target ) ) {
				this.simulateEvent( target, "mouseup", coord );
				this.simulateEvent( target, "click", coord );
			} else {
				this.simulateEvent( document, "mouseup", coord );
			}
		}
	});
	
	})( jQuery );
	
		// end:source /bower_components/jquery-simulate-ext/libs/jquery.simulate.js
		// source /bower_components/jquery-simulate-ext/src/jquery.simulate.ext.js
		/*jshint camelcase:true, plusplus:true, forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true, devel:true, maxerr:100, white:false, onevar:false */
	/*global jQuery:true $:true */
	
	/* jQuery Simulate Extended Plugin 1.3.0
	 * http://github.com/j-ulrich/jquery-simulate-ext
	 * 
	 * Copyright (c) 2014 Jochen Ulrich
	 * Licensed under the MIT license (MIT-LICENSE.txt).
	 */
	
	;(function( $ ) {
		"use strict";
	
		/* Overwrite the $.simulate.prototype.mouseEvent function
		 * to convert pageX/Y to clientX/Y
		 */
		var originalMouseEvent = $.simulate.prototype.mouseEvent,
			rdocument = /\[object (?:HTML)?Document\]/;
		
		$.simulate.prototype.mouseEvent = function(type, options) {
			if (options.pageX || options.pageY) {
				var doc = rdocument.test(Object.prototype.toString.call(this.target))? this.target : (this.target.ownerDocument || document);
				options.clientX = (options.pageX || 0) - $(doc).scrollLeft();
				options.clientY = (options.pageY || 0) - $(doc).scrollTop();
			}
			return originalMouseEvent.apply(this, [type, options]);
		};
		
		
	})( jQuery );
	
		// end:source /bower_components/jquery-simulate-ext/src/jquery.simulate.ext.js
		// source /bower_components/jquery-simulate-ext/src/jquery.simulate.drag-n-drop.js
		/*jshint camelcase:true, plusplus:true, forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true, devel:true, maxerr:100, white:false, onevar:false */
		/*global jQuery:true $:true */
		
		/* jQuery Simulate Drag-n-Drop Plugin 1.3.0
		 * http://github.com/j-ulrich/jquery-simulate-ext
		 * 
		 * Copyright (c) 2014 Jochen Ulrich
		 * Licensed under the MIT license (MIT-LICENSE.txt).
		 */
		
		;(function($, undefined) {
			"use strict";
			
			/* Overwrite the $.fn.simulate function to reduce the jQuery set to the first element for the
			 * drag-n-drop interactions.
			 */
			$.fn.simulate = function( type, options ) {
				switch (type) {
				case "drag":
				case "drop":
				case "drag-n-drop":
					var ele = this.first();
					new $.simulate( ele[0], type, options);
					return ele;
				default:
					return this.each(function() {
						new $.simulate( this, type, options );
					});
				}
			};
			
			var now = Date.now || function() { return new Date().getTime(); };
			
			var rdocument = /\[object (?:HTML)?Document\]/;
			/**
			 * Tests whether an object is an (HTML) document object.
			 * @param {DOM Element} elem - the object/element to be tested
			 * @returns {Boolean} <code>true</code> if <i>elem</i> is an (HTML) document object.
			 * @private
			 * @author julrich
			 * @since 1.1
			 */
			function isDocument( elem ) {
				return rdocument.test(Object.prototype.toString.call($(elem)[0]));
			}
			
			/**
			 * Selects the first match from an array.
			 * @param {Array} array - Array of objects to be be tested
			 * @param {Function} check - Callback function that accepts one argument (which will be one element
			 * from the <i>array</i>) and returns a boolean.
			 * @returns {Boolean|null} the first element in <i>array</i> for which <i>check</i> returns <code>true</code>.
			 * If none of the elements in <i>array</i> passes <i>check</i>, <code>null</code> is returned.
			 * @private
			 * @author julrich
			 * @since 1.1
			 */
			function selectFirstMatch(array, check) {
				var i;
				if ($.isFunction(check)) {
					for (i=0; i < array.length; i+=1) {
						if (check(array[i])) {
							return array[i];
						}
					}
					return null;
				}
				else {
					for (i=0; i < array.length; i+=1) {
						if (array[i]) {
							return array[i];
						}
					}
					return null;
				}
			}
			
			// Based on the findCenter function from jquery.simulate.js
			/**
			 * Calculates the position of the center of an DOM element.
			 * @param {DOM Element} elem - the element whose center should be calculated.
			 * @returns {Object} an object with the properties <code>x</code> and <code>y</code>
			 * representing the position of the center of <i>elem</i> in page relative coordinates
			 * (i.e. independent of any scrolling).
			 * @private
			 * @author julrich
			 * @since 1.0
			 */
			function findCenter( elem ) {
				var offset,
					$elem = $( elem );
				if ( isDocument($elem[0]) ) {
					offset = {left: 0, top: 0}; 
				}
				else {
					offset = $elem.offset();
				}
					
				return {
					x: offset.left + $elem.outerWidth() / 2,
					y: offset.top + $elem.outerHeight() / 2
				};
			}
			
			/**
			 * Converts page relative coordinates into client relative coordinates.
			 * @param {Numeric|Object} x - Either the x coordinate of the page relative coordinates or
			 * an object with the properties <code>pageX</code> and <code>pageY</code> representing page
			 * relative coordinates.
			 * @param {Numeric} [y] - If <i>x</i> is numeric (i.e. the x coordinate of page relative coordinates),
			 * then this is the y coordinate. If <i>x</i> is an object, this parameter is skipped.
			 * @param {DOM Document} [docRel] - Optional DOM document object used to calculate the client relative
			 * coordinates. The page relative coordinates are interpreted as being relative to that document and
			 * the scroll position of that document is used to calculate the client relative coordinates.
			 * By default, <code>document</code> is used.
			 * @returns {Object} an object representing the client relative coordinates corresponding to the
			 * given page relative coordinates. The object either provides the properties <code>x</code> and
			 * <code>y</code> when <i>x</i> and <i>y</i> were given as arguments, or <code>clientX</code>
			 * and <code>clientY</code> when the parameter <i>x</i> was given as an object (see above).
			 * @private
			 * @author julrich
			 * @since 1.0
			 */
			function pageToClientPos(x, y, docRel) {
				var $document;
				if ( isDocument(y) ) {
					$document = $(y);
				} else {
					$document = $(docRel || document);
				}
				
				if (typeof x === "number" && typeof y === "number") {
					return {
						x: x - $document.scrollLeft(),
						y: y - $document.scrollTop()
					};
				}
				else if (typeof x === "object" && x.pageX && x.pageY) {
					return {
						clientX: x.pageX - $document.scrollLeft(),
						clientY: x.pageY - $document.scrollTop()
					};
				}
			}
			
			/**
			 * Browser-independent implementation of <code>document.elementFromPoint()</code>.
			 * 
			 * When run for the first time on a scrolled page, this function performs a check on how
			 * <code>document.elementFromPoint()</code> is implemented in the current browser. It stores
			 * the results in two static variables so that the check can be skipped for successive calls.
			 * 
			 * @param {Numeric|Object} x - Either the x coordinate of client relative coordinates or an object
			 * with the properties <code>x</code> and <code>y</code> representing client relative coordinates.
			 * @param {Numeric} [y] - If <i>x</i> is numeric (i.e. the x coordinate of client relative coordinates),
			 * this is the y coordinate. If <i>x</i> is an object, this parameter is skipped.
			 * @param {DOM Document} [docRel] - Optional DOM document object
			 * @returns {DOM Element|Null}
			 * @private
			 * @author Nicolas Zeh (Basic idea), julrich
			 * @see http://www.zehnet.de/2010/11/19/document-elementfrompoint-a-jquery-solution/
			 * @since 1.0
			 */
			function elementAtPosition(x, y, docRel) {
				var doc;
				if ( isDocument(y) ) {
					doc = y;
				} else {
					doc = docRel || document;
				}
				
				if(!doc.elementFromPoint) {
					return null;
				}
		
				var clientX = x, clientY = y;
				if (typeof x === "object" && (x.clientX || x.clientY)) {
					clientX = x.clientX || 0 ;
					clientY = x.clientY || 0;
				}
				
				if(elementAtPosition.prototype.check)
				{
					var sl, ele;
					if ((sl = $(doc).scrollTop()) >0)
					{
						ele = doc.elementFromPoint(0, sl + $(window).height() -1);
						if ( ele !== null && ele.tagName.toUpperCase() === 'HTML' ) { ele = null; }
						elementAtPosition.prototype.nativeUsesRelative = ( ele === null );
					}
					else if((sl = $(doc).scrollLeft()) >0)
					{
						ele = doc.elementFromPoint(sl + $(window).width() -1, 0);
						if ( ele !== null && ele.tagName.toUpperCase() === 'HTML' ) { ele = null; }
						elementAtPosition.prototype.nativeUsesRelative = ( ele === null );
					}
					elementAtPosition.prototype.check = (sl<=0); // Check was not meaningful because we were at scroll position 0
				}
		
				if(!elementAtPosition.prototype.nativeUsesRelative)
				{
					clientX += $(doc).scrollLeft();
					clientY += $(doc).scrollTop();
				}
		
				return doc.elementFromPoint(clientX,clientY);
			}
			// Default values for the check variables
			elementAtPosition.prototype.check = true;
			elementAtPosition.prototype.nativeUsesRelative = true;
			
			/**
			 * Informs the rest of the world that the drag is finished.
			 * @param {DOM Element} ele - The element which was dragged.
			 * @param {Object} [options] - The drag options.
			 * @fires simulate-drag
			 * @private
			 * @author julrich 
			 * @since 1.0
			 */
			function dragFinished(ele, options) {
				var opts = options || {};
				$(ele).trigger({type: "simulate-drag"});
				if ($.isFunction(opts.callback)) {
					opts.callback.apply(ele);
				}
			}
			
			/**
			 * Generates a series of <code>mousemove</code> events for a drag.
			 * @param {Object} self - The simulate object.
			 * @param {DOM Element} ele - The element which is dragged.
			 * @param {Object} start - The start coordinates of the drag, represented using the properties
			 * <code>x</code> and <code>y</code>.
			 * @param {Object} drag - The distance to be dragged, represented using the properties <code>dx</code>
			 * and <code>dy</code>.
			 * @param {Object} options - The drag options. Must have the property <code>interpolation</code>
			 * containing the interpolation options (<code>stepWidth</code>, <code>stepCount</code>, etc.).
			 * @requires eventTarget
			 * @requires now()
			 * @private
			 * @author julrich
			 * @since 1.0
			 */
			function interpolatedEvents(self, ele, start, drag, options) {
				var targetDoc = selectFirstMatch([ele, ele.ownerDocument], isDocument) || document,
					interpolOptions = options.interpolation,
					dragDistance = Math.sqrt(Math.pow(drag.dx,2) + Math.pow(drag.dy,2)), // sqrt(a^2 + b^2)
					stepWidth, stepCount, stepVector;
				
				if (interpolOptions.stepWidth) {
					stepWidth = parseInt(interpolOptions.stepWidth, 10);
					stepCount = Math.floor(dragDistance / stepWidth)-1;
					var stepScale = stepWidth / dragDistance;
					stepVector = {x: drag.dx*stepScale, y: drag.dy*stepScale };
				}
				else {
					stepCount = parseInt(interpolOptions.stepCount, 10);
					stepWidth = dragDistance / (stepCount+1);
					stepVector = {x: drag.dx/(stepCount+1), y: drag.dy/(stepCount+1)};
				}
				
				
				var coords = $.extend({},start);
				
				/**
				 * Calculates the effective coordinates for one <code>mousemove</code> event and fires the event.
				 * @requires eventTarget
				 * @requires targetDoc
				 * @requires coords
				 * @requires stepVector
				 * @requires interpolOptions
				 * @fires mousemove
				 * @inner
				 * @author julrich
				 * @since 1.0
				 */
				function interpolationStep() {
					coords.x += stepVector.x;
					coords.y += stepVector.y;
					var effectiveCoords = {pageX: coords.x, pageY: coords.y};
					if (interpolOptions.shaky && (interpolOptions.shaky === true || !isNaN(parseInt(interpolOptions.shaky,10)) )) {
						var amplitude = (interpolOptions.shaky === true)? 1 : parseInt(interpolOptions.shaky,10);
						effectiveCoords.pageX += Math.floor(Math.random()*(2*amplitude+1)-amplitude);
						effectiveCoords.pageY += Math.floor(Math.random()*(2*amplitude+1)-amplitude);
					}
					var clientCoord = pageToClientPos(effectiveCoords, targetDoc),
						eventTarget = elementAtPosition(clientCoord, targetDoc) || ele;
					self.simulateEvent( eventTarget, "mousemove", {pageX: Math.round(effectiveCoords.pageX), pageY: Math.round(effectiveCoords.pageY)});	
				}
				
				
				var lastTime;
				
				/**
				 * Performs one interpolation step (i.e. cares about firing the event) and then sleeps for
				 * <code>stepDelay</code> milliseconds.
				 * @requires lastTime
				 * @requires stepDelay
				 * @requires step
				 * @requires ele
				 * @requires eventTarget
				 * @reuiqre targetDoc
				 * @requires start
				 * @requires drag
				 * @requires now()
				 * @inner
				 * @author julrich
				 * @since 1.0
				 */
				function stepAndSleep() {
					var timeElapsed = now() - lastTime; // Work-around for Firefox & IE "bug": setTimeout can fire before the timeout
					if (timeElapsed >= stepDelay) {
						if (step < stepCount) {
							interpolationStep();
							step += 1;
							lastTime = now();
							setTimeout(stepAndSleep, stepDelay);
						}
						else {
							var pageCoord = {pageX: Math.round(start.x+drag.dx), pageY: Math.round(start.y+drag.dy)},
								clientCoord = pageToClientPos(pageCoord, targetDoc),
								eventTarget = elementAtPosition(clientCoord, targetDoc) || ele;
							self.simulateEvent( eventTarget, "mousemove", pageCoord);
							dragFinished(ele, options);
						}
					}
					else {
						setTimeout(stepAndSleep, stepDelay - timeElapsed);
					}
		
				}
		
				if ( (!interpolOptions.stepDelay && !interpolOptions.duration) || ((interpolOptions.stepDelay <= 0) && (interpolOptions.duration <= 0)) ) {
					// Trigger as fast as possible
					for (var i=0; i < stepCount; i+=1) {
						interpolationStep();
					}
					var pageCoord = {pageX: Math.round(start.x+drag.dx), pageY: Math.round(start.y+drag.dy)},
						clientCoord = pageToClientPos(pageCoord, targetDoc),
						eventTarget = elementAtPosition(clientCoord, targetDoc) || ele;
					self.simulateEvent( eventTarget, "mousemove", pageCoord);
					dragFinished(ele, options);
				}
				else {
					var stepDelay = parseInt(interpolOptions.stepDelay,10) || Math.ceil(parseInt(interpolOptions.duration,10) / (stepCount+1));
					var step = 0;
		
					lastTime = now();
					setTimeout(stepAndSleep, stepDelay);
				}
				
			}
		
			/**
			 * @returns {Object|undefined} an object containing information about the currently active drag
			 * or <code>undefined</code> when there is no active drag.
			 * The returned object contains the following properties:
			 * <ul>
			 *     <li><code>dragElement</code>: the dragged element</li>
			 *     <li><code>dragStart</code>: object with the properties <code>x</code> and <code>y</code>
			 * representing the page relative start coordinates of the drag</li>
			 *     <li><code>dragDistance</code>: object with the properties <code>x</code> and <code>y</code>
			 * representing the distance of the drag in x and y direction</li>
			 * </ul>
			 * @public
			 * @author julrich
			 * @since 1.0
			 */
			$.simulate.activeDrag = function() {
				if (!$.simulate._activeDrag) {
					return undefined;
				}
				return $.extend(true,{},$.simulate._activeDrag);
			};
			
			$.extend( $.simulate.prototype,
		
			/**
			 * @lends $.simulate.prototype
			 */
			{
				
			
				/**
				 * Simulates a drag.
				 *
				 * @see https://github.com/j-ulrich/jquery-simulate-ext/blob/master/doc/drag-n-drop.md
				 * @public
				 * @author julrich
				 * @since 1.0
				 */
				simulateDrag: function() {
					var self = this,
						ele = self.target,
						options = $.extend({
							dx: 0,
							dy: 0,
							dragTarget: undefined,
							clickToDrag: false,
							eventProps: {},
							interpolation: {
								stepWidth: 0,
								stepCount: 0,
								stepDelay: 0,
								duration: 0,
								shaky: false
							},
							callback: undefined
						},	this.options);
					
					var start,
						continueDrag = ($.simulate._activeDrag && $.simulate._activeDrag.dragElement === ele);
					
					if (continueDrag) {
						start = $.simulate._activeDrag.dragStart;
					}
					else {
						start = findCenter( ele );
					}
						
					var x = Math.round( start.x ),
						y = Math.round( start.y ),
						coord = { pageX: x, pageY: y },
						dx,
						dy;
						
					if (options.dragTarget) {
						var end = findCenter(options.dragTarget);
						dx = Math.round(end.x - start.x);
						dy = Math.round(end.y - start.y);
					}
					else {
						dx = options.dx || 0;
						dy = options.dy || 0;
					}
						
					if (continueDrag) {
						// We just continue to move the dragged element
						$.simulate._activeDrag.dragDistance.x += dx;
						$.simulate._activeDrag.dragDistance.y += dy;	
						coord = { pageX: Math.round(x + $.simulate._activeDrag.dragDistance.x) , pageY: Math.round(y + $.simulate._activeDrag.dragDistance.y) };
					}
					else {
						if ($.simulate._activeDrag) {
							// Drop before starting a new drag
							$($.simulate._activeDrag.dragElement).simulate( "drop" );
						}
						
						// We start a new drag
						$.extend(options.eventProps, coord);
						self.simulateEvent( ele, "mousedown", options.eventProps );
						if (options.clickToDrag === true) {
							self.simulateEvent( ele, "mouseup", options.eventProps );
							self.simulateEvent( ele, "click", options.eventProps );
						}
						$(ele).add(ele.ownerDocument).one('mouseup', function() {
							$.simulate._activeDrag = undefined;
						});
						
						$.extend($.simulate, {
							_activeDrag: {
								dragElement: ele,
								dragStart: { x: x, y: y },
								dragDistance: { x: dx, y: dy }
							}
						});
						coord = { pageX: Math.round(x + dx), pageY: Math.round(y + dy) };
					}
		
					if (dx !== 0 || dy !== 0) {
						
						if ( options.interpolation && (options.interpolation.stepCount || options.interpolation.stepWidth) ) {
							interpolatedEvents(self, ele, {x: x, y: y}, {dx: dx, dy: dy}, options);
						}
						else {
							var targetDoc = selectFirstMatch([ele, ele.ownerDocument], isDocument) || document,
								clientCoord = pageToClientPos(coord, targetDoc),
								eventTarget = elementAtPosition(clientCoord, targetDoc) || ele;
		
							$.extend(options.eventProps, coord);
							self.simulateEvent( eventTarget, "mousemove", options.eventProps );
							dragFinished(ele, options);
						}
					}
					else {
						dragFinished(ele, options);
					}
				},
				
				/**
				 * Simulates a drop.
				 * 
				 * @see https://github.com/j-ulrich/jquery-simulate-ext/blob/master/doc/drag-n-drop.md
				 * @public
				 * @author julrich
				 * @since 1.0
				 */
				simulateDrop: function() {
					var self = this,
						ele = this.target,
						activeDrag = $.simulate._activeDrag,
						options = $.extend({
							clickToDrop: false,
							eventProps: {},
							callback: undefined
						}, self.options),
						moveBeforeDrop = true,
						center = findCenter( ele ),
						x = Math.round( center.x ),
						y = Math.round( center.y ),
						coord = { pageX: x, pageY: y },
						targetDoc = ( (activeDrag)? selectFirstMatch([activeDrag.dragElement, activeDrag.dragElement.ownerDocument], isDocument) : selectFirstMatch([ele, ele.ownerDocument], isDocument) ) || document, 
						clientCoord = pageToClientPos(coord, targetDoc),
						eventTarget = elementAtPosition(clientCoord, targetDoc);
					
					if (activeDrag && (activeDrag.dragElement === ele || isDocument(ele))) {
						// We already moved the mouse during the drag so we just simulate the drop on the end position
						x = Math.round(activeDrag.dragStart.x + activeDrag.dragDistance.x);
						y = Math.round(activeDrag.dragStart.y + activeDrag.dragDistance.y);
						coord = { pageX: x, pageY: y };
						clientCoord = pageToClientPos(coord, targetDoc);
						eventTarget = elementAtPosition(clientCoord, targetDoc);
						moveBeforeDrop = false;
					}
					
					if (!eventTarget) {
						eventTarget = (activeDrag)? activeDrag.dragElement : ele;
					}
					
					$.extend(options.eventProps, coord);
		
					if (moveBeforeDrop === true) {
						// Else we assume the drop should happen on target, so we move there
						self.simulateEvent( eventTarget, "mousemove", options.eventProps );
					}
		
					if (options.clickToDrop) {
						self.simulateEvent( eventTarget, "mousedown", options.eventProps );
					}
					this.simulateEvent( eventTarget, "mouseup", options.eventProps );
					if (options.clickToDrop) {
						self.simulateEvent( eventTarget, "click", options.eventProps );
					}
					
					$.simulate._activeDrag = undefined;
					$(eventTarget).trigger({type: "simulate-drop"});
					if ($.isFunction(options.callback)) {
						options.callback.apply(eventTarget);
					}
				},
				
				/**
				 * Simulates a drag followed by drop.
				 * 
				 * @see https://github.com/j-ulrich/jquery-simulate-ext/blob/master/doc/drag-n-drop.md
				 * @public
				 * @author julrich
				 * @since 1.0
				 */
				simulateDragNDrop: function() {
					var self = this,
						ele = this.target,
						options = $.extend({
							dragTarget: undefined,
							dropTarget: undefined
						}, self.options),
						// If there is a dragTarget or dx/dy, then we drag there and simulate an independent drop on dropTarget or ele
						dropEle = ((options.dragTarget || options.dx || options.dy)? options.dropTarget : ele) || ele;
		/*
						dx = (options.dropTarget)? 0 : (options.dx || 0),
						dy = (options.dropTarget)? 0 : (options.dy || 0),
						dragDistance = { dx: dx, dy: dy };
					
					$.extend(options, dragDistance);
		*/			
					$(ele).simulate( "drag", $.extend({},options,{
						// If there is no dragTarget, no dx and no dy, we drag onto the dropTarget directly
						dragTarget: options.dragTarget || ((options.dx || options.dy)?undefined:options.dropTarget),
						callback: function() {
							$(dropEle).simulate( "drop", options );
						}
					}));
					
				}
			});
			
		}(jQuery));
		// end:source /bower_components/jquery-simulate-ext/src/jquery.simulate.drag-n-drop.js
		// source /bower_components/jquery-simulate-ext/src/jquery.simulate.key-combo.js
		/*jshint camelcase:true, plusplus:true, forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true, devel:true, maxerr:100, white:false, onevar:false */
		/*global jQuery:true $:true */
		
		/* jQuery Simulate Key-Combo Plugin 1.3.0
		 * http://github.com/j-ulrich/jquery-simulate-ext
		 * 
		 * Copyright (c) 2014 Jochen Ulrich
		 * Licensed under the MIT license (MIT-LICENSE.txt).
		 */
		
		/**
		 * 
		 * For details about key events, key codes, char codes etc. see http://unixpapa.com/js/key.html
		 */
		
		;(function($,undefined) {
			"use strict";
		
			/**
			 * Key codes of special keys.
			 * @private
			 * @author julrich
			 * @since 1.3.0
			 */
			var SpecialKeyCodes = {
				// Modifier Keys
				SHIFT:			16,
				CONTROL:		17,
				ALTERNATIVE:	18,
				META:			91,
				// Arrow Keys
				LEFT_ARROW:		37,
				UP_ARROW:		38,
				RIGHT_ARROW:	39,
				DOWN_ARROW:		40,
				// Function Keys
				F1:				112,
				F2:				113,
				F3:				114,
				F4:				115,
				F5:				116,
				F6:				117,
				F7:				118,
				F8:				119,
				F9:				120,
				F10:			121,
				F11:			122,
				F12:			123,
				// Other
				ENTER:			13,
				TABULATOR:		9,
				ESCAPE:			27,
				BACKSPACE:		8,
				INSERT:			45,
				DELETE:			46,
				HOME:			36,
				END:			35,
				PAGE_UP:		33,
				PAGE_DOWN:		34,
		
			};
			
			// SpecialKeyCode aliases
			SpecialKeyCodes.CTRL	= SpecialKeyCodes.CONTROL;
			SpecialKeyCodes.ALT		= SpecialKeyCodes.ALTERNATIVE;
			SpecialKeyCodes.COMMAND	= SpecialKeyCodes.META;
			SpecialKeyCodes.TAB		= SpecialKeyCodes.TABULATOR;
			SpecialKeyCodes.ESC		= SpecialKeyCodes.ESCAPE;
			
		
			$.extend( $.simulate.prototype,
					
			/**
			 * @lends $.simulate.prototype
			 */		
			{
				
				
				/**
				 * Simulates simultaneous key presses
				 * 
				 * @see https://github.com/j-ulrich/jquery-simulate-ext/blob/master/doc/key-combo.md
				 * @public
				 * @author julrich
				 * @since 1.0
				 */
				simulateKeyCombo: function() {
					var $target = $(this.target),
						options = $.extend({
							combo: "",
							eventProps: {},
							eventsOnly: false
						}, this.options),
						combo = options.combo,
						comboSplit = combo.split(/(\+)/),
						plusExpected = false,
						holdKeys = [],
						i;
					
					if (combo.length === 0) {
						return;
					}
					
					// Remove empty parts
					comboSplit = $.grep(comboSplit, function(part) {
						return (part !== "");
					});
					
					for (i=0; i < comboSplit.length; i+=1) {
						var key = comboSplit[i],
							keyLowered = key.toLowerCase(),
							keySpecial = key.toUpperCase().replace('-','_');
						
						if (plusExpected) {
							if (key !== "+") {
								throw 'Syntax error: expected "+"';
							}
							else {
								plusExpected = false;
							}
						}
						else {
							var keyCode;
							if ( key.length > 1) {
								// Assume a special key
								keyCode = SpecialKeyCodes[keySpecial];
								
								if (keyCode === undefined) {
									throw 'Syntax error: unknown special key "'+key+'" (forgot "+" between keys?)';
								}
								
								switch (keyCode) {
								case SpecialKeyCodes.CONTROL:
								case SpecialKeyCodes.ALT:
								case SpecialKeyCodes.SHIFT:
								case SpecialKeyCodes.META:
									options.eventProps[keyLowered+"Key"] = true;
									break;
								}
								holdKeys.unshift(keyCode);
								options.eventProps.keyCode = keyCode;
								options.eventProps.which = keyCode;
								options.eventProps.charCode = 0;
								$target.simulate("keydown", options.eventProps);
								
							}
							else {
								// "Normal" key
								keyCode = $.simulate.prototype.simulateKeySequence.prototype.charToKeyCode(key);
								holdKeys.unshift(keyCode);
								options.eventProps.keyCode = keyCode;
								options.eventProps.which = keyCode;
								options.eventProps.charCode = undefined;
								$target.simulate("keydown", options.eventProps);
								if (options.eventProps.shiftKey) {
									key = key.toUpperCase();
								}
								options.eventProps.keyCode = key.charCodeAt(0);
								options.eventProps.charCode = options.eventProps.keyCode;
								options.eventProps.which = options.eventProps.keyCode;
								$target.simulate("keypress", options.eventProps);
								if (options.eventsOnly !== true && !options.eventProps.ctrlKey && !options.eventProps.altKey && !options.eventProps.metaKey) {
									$target.simulate('key-sequence', {sequence: key, triggerKeyEvents: false});
								}
							}
							
							plusExpected = true;
						}
					}
					
					if (!plusExpected) {
						throw 'Syntax error: expected key (trailing "+"?)';
					}
					
					// Release keys
					options.eventProps.charCode = undefined;
					for (i=0; i < holdKeys.length; i+=1) {
						options.eventProps.keyCode = holdKeys[i];
						options.eventProps.which = holdKeys[i];
						switch (options.eventProps.keyCode) {
						case SpecialKeyCodes.ALT:		options.eventProps.altKey = false; break;
						case SpecialKeyCodes.SHIFT:		options.eventProps.shiftKey = false; break;
						case SpecialKeyCodes.CONTROL:	options.eventProps.ctrlKey = false; break;
						case SpecialKeyCodes.META:		options.eventProps.metaKey = false; break;
						default:
							break;
						}
						$target.simulate("keyup", options.eventProps);				
					}
				}
				
			});
		}(jQuery));
		// end:source /bower_components/jquery-simulate-ext/src/jquery.simulate.key-combo.js
		// source /bower_components/jquery-simulate-ext/src/jquery.simulate.key-sequence.js
		/*jshint camelcase:true, plusplus:true, forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true, devel:true, maxerr:100, white:false, onevar:false */
		/*global jQuery:true $:true bililiteRange:true */
		
		/* jQuery Simulate Key-Sequence Plugin 1.3.0
		 * http://github.com/j-ulrich/jquery-simulate-ext
		 * 
		 * Copyright (c) 2014 Jochen Ulrich
		 * Licensed under the MIT license (MIT-LICENSE.txt).
		 * 
		 * The plugin is an extension and modification of the jQuery sendkeys plugin by Daniel Wachsstock.
		 * Therefore, the original copyright notice and license follow below.
		 */
		
		// insert characters in a textarea or text input field
		// special characters are enclosed in {}; use {{} for the { character itself
		// documentation: http://bililite.com/blog/2008/08/20/the-fnsendkeys-plugin/
		// Version: 2.0
		// Copyright (c) 2010 Daniel Wachsstock
		// MIT license:
		// Permission is hereby granted, free of charge, to any person
		// obtaining a copy of this software and associated documentation
		// files (the "Software"), to deal in the Software without
		// restriction, including without limitation the rights to use,
		// copy, modify, merge, publish, distribute, sublicense, and/or sell
		// copies of the Software, and to permit persons to whom the
		// Software is furnished to do so, subject to the following
		// conditions:
		//
		// The above copyright notice and this permission notice shall be
		// included in all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
		// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
		// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
		// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
		// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
		// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
		// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
		// OTHER DEALINGS IN THE SOFTWARE.
		
		;(function($, undefined){
			"use strict";
			
			$.simulate.prototype.quirks = $.simulate.prototype.quirks || {};
			
			$.extend($.simulate.prototype.quirks, 
		
			/**
			 * @lends $.simulate.prototype.quirks
			 */		
			{
				/**
				 * When simulating with delay in non-input elements,
				 * all spaces are simulated at the end of the sequence instead
				 * of the correct position.
				 * @see {@link https://github.com/j-ulrich/jquery-simulate-ext/issues/6|issues #6}
				 */
				delayedSpacesInNonInputGlitchToEnd: undefined
		
			});
			
			$.extend($.simulate.prototype,
					
			/**
			 * @lends $.simulate.prototype
			 */		
			{
				
				/**
				 * Simulates sequencial key strokes.
				 * 
				 * @see https://github.com/j-ulrich/jquery-simulate-ext/blob/master/doc/key-sequence.md
				 * @public
				 * @author Daniel Wachsstock, julrich
				 * @since 1.0
				 */
				simulateKeySequence: function() {
					var target = this.target,
						$target = $(target),
						opts = $.extend({
							sequence: "",
							triggerKeyEvents: true,
							eventProps: {},
							delay: 0,
							callback: undefined
						}, this.options),
						sequence = opts.sequence;
					
					opts.delay = parseInt(opts.delay,10);
		
					var localkeys = {};
		
					// Fix for #6 (https://github.com/j-ulrich/jquery-simulate-ext/issues/6)
					if ($.simulate.prototype.quirks.delayedSpacesInNonInputGlitchToEnd && !$target.is('input,textarea')) {
						$.extend(localkeys, {
							' ': function(rng, s, opts) {
								var internalOpts = $.extend({}, opts, {
									triggerKeyEvents: false,
									delay: 0,
									callback: undefined
								});
								$.simulate.prototype.simulateKeySequence.defaults.simplechar(rng, '\xA0', internalOpts);
								$.simulate.prototype.simulateKeySequence.defaults['{leftarrow}'](rng, s, internalOpts);
								$.simulate.prototype.simulateKeySequence.defaults.simplechar(rng, s, opts);
								$.simulate.prototype.simulateKeySequence.defaults['{del}'](rng, s, internalOpts);
							}
						});
					}
		
					$.extend(localkeys, opts, $target.data('simulate-keySequence')); // allow for element-specific key functions
		
					// most elements to not keep track of their selection when they lose focus, so we have to do it for them
					var rng = $.data (target, 'simulate-keySequence.selection');
					if (!rng){
						rng = bililiteRange(target).bounds('selection');
						$.data(target, 'simulate-keySequence.selection', rng);
						$target.bind('mouseup.simulate-keySequence', function(){
							// we have to update the saved range. The routines here update the bounds with each press, but actual keypresses and mouseclicks do not
							$.data(target, 'simulate-keySequence.selection').bounds('selection');
						}).bind('keyup.simulate-keySequence', function(evt){
							// restore the selection if we got here with a tab (a click should select what was clicked on)
							if (evt.which === 9){
								// there's a flash of selection when we restore the focus, but I don't know how to avoid that.
								$.data(target, 'simulate-keySequence.selection').select();
							}else{
								$.data(target, 'simulate-keySequence.selection').bounds('selection');
							}	
						});
					}
					$target.focus();
					if (typeof sequence === 'undefined') { // no string, so we just set up the event handlers
						return;
					}
					sequence = sequence.replace(/\n/g, '{enter}'); // turn line feeds into explicit break insertions
					
					/**
					 * Informs the rest of the world that the sequences is finished.
					 * @fires simulate-keySequence
					 * @requires target
					 * @requires sequence
					 * @requires opts
					 * @inner
					 * @author julrich
					 * @since 1.0
					 */
					function sequenceFinished() {
						$target.trigger({type: 'simulate-keySequence', sequence: sequence});
						if ($.isFunction(opts.callback)) {
							opts.callback.apply(target, [{
								sequence: sequence
							}]);
						}
					}
					
					/**
					 * Simulates the key stroke for one character (or special sequence) and sleeps for
					 * <code>opts.delay</code> milliseconds.
					 * @requires lastTime
					 * @requires now()
					 * @requires tokenRegExp
					 * @requires opts
					 * @requires rng
					 * @inner
					 * @author julrich
					 * @since 1.0
					 */
					function processNextToken() {
						var timeElapsed = now() - lastTime; // Work-around for Firefox "bug": setTimeout can fire before the timeout
						if (timeElapsed >= opts.delay) {
							var match = tokenRegExp.exec(sequence);
							if ( match !== null ) {
								var s = match[0];
								(localkeys[s] || $.simulate.prototype.simulateKeySequence.defaults[s] || $.simulate.prototype.simulateKeySequence.defaults.simplechar)(rng, s, opts);
								setTimeout(processNextToken, opts.delay);
							}
							else {
								sequenceFinished();
							}
							lastTime = now();
						}
						else {
							setTimeout(processNextToken, opts.delay - timeElapsed);
						}
					}
		
					if (!opts.delay || opts.delay <= 0) {
						// Run as fast as possible
						sequence.replace(/\{[^}]*\}|[^{]+/g, function(s){
							(localkeys[s] || $.simulate.prototype.simulateKeySequence.defaults[s] || $.simulate.prototype.simulateKeySequence.defaults.simplechar)(rng, s, opts);
						});
						sequenceFinished();
					}
					else {
						var tokenRegExp = /\{[^}]*\}|[^{]/g; // This matches curly bracket expressions or single characters
						var now = Date.now || function() { return new Date().getTime(); },
							lastTime = now();
						
						processNextToken();
					}
					
				}
			});
		
			$.extend($.simulate.prototype.simulateKeySequence.prototype,
					
			/**
			 * @lends $.simulate.prototype.simulateKeySequence.prototype
			 */		
			{
				
					/**
					 * Maps special character char codes to IE key codes (covers IE and Webkit)
					 * @author julrich
					 * @since 1.0
					 */
					IEKeyCodeTable: {
						33: 49,	// ! -> 1
						64: 50,	// @ -> 2
						35: 51,	// # -> 3
						36: 52,	// $ -> 4
						37: 53,	// % -> 5
						94: 54,	// ^ -> 6
						38: 55,	// & -> 7
						42: 56,	// * -> 8
						40: 57,	// ( -> 9
						41: 48,	// ) -> 0
						
						59: 186,	// ; -> 186
						58: 186,	// : -> 186
						61: 187,	// = -> 187
						43: 187,	// + -> 187
						44: 188,	// , -> 188
						60: 188,	// < -> 188
						45: 189,	// - -> 189
						95: 189,	// _ -> 189
						46: 190,	// . -> 190
						62: 190,	// > -> 190
						47: 191,	// / -> 191
						63: 191,	// ? -> 191
						96: 192,	// ` -> 192
						126: 192,	// ~ -> 192
						91: 219,	// [ -> 219
						123: 219,	// { -> 219
						92: 220,	// \ -> 220
						124: 220,	// | -> 220
						93: 221,	// ] -> 221
						125: 221,	// } -> 221
						39: 222,	// ' -> 222
						34: 222		// " -> 222
					},
					
					/**
					 * Tries to convert character codes to key codes.
					 * @param {Numeric} character - A character code
					 * @returns {Numeric} The key code corresponding to the given character code,
					 * based on the key code table of InternetExplorer. If no corresponding key code
					 * could be found (which will be the case for all special characters except the common
					 * ones), the character code itself is returned. However, <code>keyCode === charCode</code>
					 * does not imply that no key code was found because some key codes are identical to the
					 * character codes (e.g. for uppercase characters).
					 * @requires $.simulate.prototype.simulateKeySequence.prototype.IEKeyCodeTable
					 * @see $.simulate.prototype.simulateKeySequence.prototype.IEKeyCodeTable
					 * @author julrich
					 * @since 1.0
					 */
					charToKeyCode: function(character) {
						var specialKeyCodeTable = $.simulate.prototype.simulateKeySequence.prototype.IEKeyCodeTable;
						var charCode = character.charCodeAt(0);
				
						if (charCode >= 64 && charCode <= 90 || charCode >= 48 && charCode <= 57) {
							// A-Z and 0-9
							return charCode;
						}
						else if (charCode >= 97 && charCode <= 122) {
							// a-z -> A-Z
							return character.toUpperCase().charCodeAt(0);
						}
						else if (specialKeyCodeTable[charCode] !== undefined) {
							return specialKeyCodeTable[charCode];
						}
						else {
							return charCode;
						}
					}
			});
		
			// add the functions publicly so they can be overridden
			$.simulate.prototype.simulateKeySequence.defaults = {
				
				/**
				 * Simulates key strokes of "normal" characters (i.e. non-special sequences).
				 * @param {Object} rng - bililiteRange object of the simulation target element.
				 * @param {String} s - String of (simple) characters to be simulated. 
				 * @param {Object} opts - The key-sequence options.
				 * @author Daniel Wachsstock, julrich
				 * @since 1.0
				 */
				simplechar: function (rng, s, opts){
					rng.text(s, 'end');
					if (opts.triggerKeyEvents) {
						for (var i =0; i < s.length; i += 1){
							var charCode = s.charCodeAt(i);
							var keyCode = $.simulate.prototype.simulateKeySequence.prototype.charToKeyCode(s.charAt(i));
							// a bit of cheating: rng._el is the element associated with rng.
							$(rng._el).simulate('keydown', $.extend({}, opts.eventProps, {keyCode: keyCode}));
							$(rng._el).simulate('keypress', $.extend({}, opts.eventProps,{keyCode: charCode, which: charCode, charCode: charCode}));
							$(rng._el).simulate('keyup', $.extend({}, opts.eventProps, {keyCode: keyCode}));
						}
					}
				},
				
				/**
				 * Simulates key strokes of a curly opening bracket. 
				 * @param {Object} rng - bililiteRange object of the simulation target element.
				 * @param {String} s - Ignored. 
				 * @param {Object} opts - The key-sequence options.
				 * @author Daniel Wachsstock, julrich
				 * @since 1.0
				 */
				'{{}': function (rng, s, opts){
					$.simulate.prototype.simulateKeySequence.defaults.simplechar(rng, '{', opts);
				},
				
				/**
				 * Simulates hitting the enter button.
				 * @param {Object} rng - bililiteRange object of the simulation target element.
				 * @param {String} s - Ignored. 
				 * @param {Object} opts - The key-sequence options.
				 * @author Daniel Wachsstock, julrich
				 * @since 1.0
				 */
				'{enter}': function (rng, s, opts){
					rng.insertEOL();
					rng.select();
					if (opts.triggerKeyEvents === true) {
						$(rng._el).simulate('keydown', $.extend({}, opts.eventProps, {keyCode: 13}));
						$(rng._el).simulate('keypress', $.extend({}, opts.eventProps, {keyCode: 13, which: 13, charCode: 13}));
						$(rng._el).simulate('keyup', $.extend({}, opts.eventProps, {keyCode: 13}));
					}
				},
				
				/**
				 * Simulates hitting the backspace button.
				 * @param {Object} rng - bililiteRange object of the simulation target element.
				 * @param {String} s - Ignored. 
				 * @param {Object} opts - The key-sequence options.
				 * @author Daniel Wachsstock, julrich
				 * @since 1.0
				 */
				'{backspace}': function (rng, s, opts){
					var b = rng.bounds();
					if (b[0] === b[1]) { rng.bounds([b[0]-1, b[0]]); } // no characters selected; it's just an insertion point. Remove the previous character
					rng.text('', 'end'); // delete the characters and update the selection
					if (opts.triggerKeyEvents === true) {
						$(rng._el).simulate('keydown', $.extend({}, opts.eventProps, {keyCode: 8}));
						$(rng._el).simulate('keyup', $.extend({}, opts.eventProps, {keyCode: 8}));
					}
				},
				
				/**
				 * Simulates hitting the delete button.
				 * @param {Object} rng - bililiteRange object of the simulation target element.
				 * @param {String} s - Ignored. 
				 * @param {Object} opts - The key-sequence options.
				 * @author Daniel Wachsstock, julrich
				 * @since 1.0
				 */
				'{del}': function (rng, s, opts){
					var b = rng.bounds();
					if (b[0] === b[1]) { rng.bounds([b[0], b[0]+1]); } // no characters selected; it's just an insertion point. Remove the next character
					rng.text('', 'end'); // delete the characters and update the selection
					if (opts.triggerKeyEvents === true) {
						$(rng._el).simulate('keydown', $.extend({}, opts.eventProps, {keyCode: 46}));
						$(rng._el).simulate('keyup', $.extend({}, opts.eventProps, {keyCode: 46}));
					}
				},
				
				/**
				 * Simulates hitting the right arrow button.
				 * @param {Object} rng - bililiteRange object of the simulation target element.
				 * @param {String} s - Ignored. 
				 * @param {Object} opts - The key-sequence options.
				 * @author Daniel Wachsstock, julrich
				 * @since 1.0
				 */
				'{rightarrow}':  function (rng, s, opts){
					var b = rng.bounds();
					if (b[0] === b[1]) { b[1] += 1; } // no characters selected; it's just an insertion point. Move to the right
					rng.bounds([b[1], b[1]]).select();
					if (opts.triggerKeyEvents === true) {
						$(rng._el).simulate('keydown', $.extend({}, opts.eventProps, {keyCode: 39}));
						$(rng._el).simulate('keyup', $.extend({}, opts.eventProps, {keyCode: 39}));
					}
				},
				
				/**
				 * Simulates hitting the left arrow button.
				 * @param {Object} rng - bililiteRange object of the simulation target element.
				 * @param {String} s - Ignored. 
				 * @param {Object} opts - The key-sequence options.
				 * @author Daniel Wachsstock, julrich
				 * @since 1.0
				 */
				'{leftarrow}': function (rng, s, opts){
					var b = rng.bounds();
					if (b[0] === b[1]) { b[0] -= 1; } // no characters selected; it's just an insertion point. Move to the left
					rng.bounds([b[0], b[0]]).select();
					if (opts.triggerKeyEvents === true) {
						$(rng._el).simulate('keydown', $.extend({}, opts.eventProps, {keyCode: 37}));
						$(rng._el).simulate('keyup', $.extend({}, opts.eventProps, {keyCode: 37}));
					}
				},
				
				/**
				 * Selects all characters in the target element.
				 * @param {Object} rng - bililiteRange object of the simulation target element.
				 * @author Daniel Wachsstock, julrich
				 * @since 1.0
				 */
				'{selectall}' : function (rng){
					rng.bounds('all').select();
				}
			};
			
			
				
			
			//####### Quirk detection #######
			if ($.simulate.ext_disableQuirkDetection !== true) { // Fixes issue #9 (https://github.com/j-ulrich/jquery-simulate-ext/issues/9)
				$(document).ready(function() {
					// delayedSpacesInNonInputGlitchToEnd
					// See issues #6 (https://github.com/j-ulrich/jquery-simulate-ext/issues/6)
					/* Append a div to the document (bililiteRange needs the element to be in the document), simulate
					 * a delayed sequence containing a space in the middle and check if the space moves to the end.
					 */
					var $testDiv = $('<div/>').css({height: 1, width: 1, position: 'absolute', left: -1000, top: -1000}).appendTo('body');
					$testDiv.simulate('key-sequence', {sequence: '\xA0 \xA0', delay:1, callback: function() {
						$.simulate.prototype.quirks.delayedSpacesInNonInputGlitchToEnd = ($testDiv.text() === '\xA0\xA0 ');
						$testDiv.remove();
					}});
				});
			}
		
		})(jQuery);
		// end:source /bower_components/jquery-simulate-ext/src/jquery.simulate.key-sequence.js
		
	}(jQuery));
	
	// end:source /ref-domtest/lib/domtest.embed.js
	// source /src/patch/jquery.js
	(function(){
		/* Make jQuery to support DocumentFragment`s */
		
		var _jQuery = global.jQuery;
		_jQuery.noConflict();
		
		function Wrapper (frag) {
			var args = Array.prototype.slice.call(arguments);
			if (frag != null && typeof frag === 'object' && frag.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
				args[0] = frag.childNodes;
			}
			
			return _jQuery.apply(global, args);
		};
		Wrapper.prototype = _jQuery.prototype;
		
		for(var key in _jQuery) {
			Wrapper[key] = _jQuery[key];
		}
		
		global.$ = Wrapper;
	}());
	// end:source /src/patch/jquery.js
	
	// source /src/utils/xhr.js
	var xhr_createListener,
		xhr_isBusy;
	
	(function(){
		
		xhr_createListener = function(win){
			
			if (KEY in win) 
				return win[KEY];
			
			return win[KEY] = wrapXhr(win);
		};
		
		xhr_isBusy = function(win){
			if (win == null) 
				win = window;
			
			if (KEY in win === false) 
				return false;
			
			if (win[KEY].isBusy()) 
				return true;
			
			if (win.parent !== win) 
				return xhr_isBusy(win);
			
			return false;
		};
		
		// private
		var KEY = 'XMLHttpRequestListener__';
		
		function wrapXhr(win){
			if (win.parent !== win) 
				xhr_createListener(win.parent);
			
			
			var XHR = win.XMLHttpRequest,
				dfr = new Class.Deferred,
				counter__ = 0,
				send__ = XHR.prototype.send
				;
			dfr.resolve();
			XHR.prototype.send = onSend;
			
			function onSend() {
				if (this.responseType !== 'arraybuffer') {
					// socket.io fix
					
					dfr.defer();
					this.addEventListener('readystatechange', function() {
						if(this.readyState == XMLHttpRequest.DONE) 
							--counter__;
						
						onComplete();
					}, false);
					++counter__;
				}
				send__.apply(this, arguments);
			}
			
			function onComplete() {
				if (counter__ > 0) 
					return;
				
				if (win.parent === win) {
					dfr.resolve();
					return;
				}
				
				if (win.parent[KEY]) {
					win
						.parent
						[KEY]
						.done(dfr.resolveDelegate())
						;
				}
			}
			
			function onready(callback){
				if (dfr_isBusy(dfr)) {
					dfr.done(onready.bind(null, callback));
					return;
				}
				
				if (win.parent === win) {
					callback();
					return;
				}
				
				var pxhr_listener = win.parent[KEY];
				if (pxhr_listener == null || pxhr_listener.isBusy() === false) {
					callback();
					return;
				}
				
				pxhr_listener.done(onready.bind(null, callback));
			}
			
			return {
				isBusy: dfr_isBusy.bind(null, dfr),
				done: onready
			};
		}
		
		function dfr_isBusy(dfr){
			return dfr._resolved == null && dfr._rejected == null;
		}
		
	}());
	// end:source /src/utils/xhr.js
	// source /src/utils/array.js
	var arr_isArray,
		arr_isEmpty,
		arr_distinctConcat;
	
	(function(){
			
		arr_isArray = function(array) {
			return array != null
				&& typeof array.length === 'number'
				&& typeof array.splice === 'function'
				;
		};
		
		arr_isEmpty = function(array) {
			if (arr_isArray(array) === false)
				return true;
				
			return array.length === 0;
		};
		
		arr_distinctConcat = function(a, b){
			if (b == null) 
				return a;
			if (a == null) 
				return b;
			
			return ruqq.arr.distinct(a.concat(b));
		}
	}());
		
	// end:source /src/utils/array.js
	// source /src/utils/cfg.js
	var cfg_runConfigurationScript;
	
	(function(){
		
		cfg_runConfigurationScript = function(type, config, done){
			var $script = config && config.$config && config.$config[type];
			if ($script == null) 
				return done();
				
			
			if (typeof $script === 'function'){
				$script(done);
				if ($script.length === 0) 
					done();
				
				return;
			}
			
			if (typeof $script === 'string') {
				
				include
					.instance(config.base || (process.cwd() + '/'))
					.js($script + '::Script')
					.done(function(resp){
						var Script = resp.Script;
						if (Script == null || Script.process == null) {
							logger
								.error('<configuration script>', $script)
								.error(' is not loaded or `process` function not implemented')
								;
							
							done();
							return;
						}
						if (Script.process.length === 0) {
							Script.process();
							done();
							return;
						}
						Script.process(done);
					});
					
				return;
			}
			
			console.error('Invalid configuration script', config);
			done();
		};
		
	}());
	// end:source /src/utils/cfg.js
	// source /src/utils/fn.js
	var fn_waterfall;
	(function(){
		
		fn_waterfall = function(){
			var fns = Array.prototype.slice.call(arguments),
				done = fns.pop(),
				imax = fns.length,
				i = -1;
				
			function next(){
				if (++i > imax - 1) 
					return done();
				
				fns[i](next);
			}
			next();
		};
		
	}());
	// end:source /src/utils/fn.js
	
	// source /src/utils/location.js
	var location_pushHistory,
		location_pushSearch;
	
	(function(){
		location_pushSearch = function(path, win){
			win = win || window;
			
			var q = path.indexOf('?');
			if (q === -1) {
				trySetHash(path, win);
				return;
			}
			if (win.history == null || win.history.pushState == null) 
				return;
			
			try {
				win.history.pushState({}, '', path.substring(q));
			} catch(error){}
		};
		
		location_pushHistory = function(path, win){
			win = win || window;
			
			if (win.history == null || win.history.pushState == null) {
				trySetHash(path, win);
				return;
			}
			
			var a;
			a = document.createElement('a');
			a.href = path;
			
			path = ''
				+ win.top.location.protocol
				+ '//'
				+ win.top.location.host
				+ a.pathname
				+ a.search
				+ a.hash
				;
			
			try {
				win.history.pushState(null, null, path);
			} catch(error){}
		}
	
		function trySetHash(url, win){
			var index = url.indexOf('#');
			if (index === -1)
				return;
			win.location.hash = url.substring(index + 1);
	
		}
	}());
	// end:source /src/utils/location.js
	// source /src/utils/transport.jam.js
	var transport_isBusy;
	
	(function(){
		
		if ('node' === __env) 
			return node();
		
		if ('dom' === __env) 
			return dom();
		
		
		function node(){
			transport_isBusy = function(){
				return false;
			};
		}
		function dom(){
			
			transport_isBusy = function(win){
				return xhr_isBusy(win) || dom_isReady(win) === false;
			};
			
			//= private
			//= Initialize
			xhr_createListener(window);
		}
		
		
		function dom_isReady(win){
			if (frame_isReady(win) === false) 
				return false;
			
			var i = win.frames.length;
			while ( --i > -1) {
				if (frame_isReady(win.frames[i]) === false) 
					return false;
			}
			return true;
		}
		
		function frame_isReady(frame){
			try {
				// `readyState` fallback
				if ('__utest_isLoading' in frame)
					return frame.__utest_isLoading === false;
				
				return (frame.document || frame.contentDocument).readyState === 'complete';
			} catch(error){
				// cross-origin ?
				return false;
			}
		}
	}());
	// end:source /src/utils/transport.jam.js
	
	// source /src/UTest.js
	(function(global){
		
		var _tests = [],
			_index = -1,
			_listeners = {},
			
			// default options
			_options = {
				timeout: 3000,
				errorableCallbacks: false,
				breakOnError: false,
				
				// master server configurations, in browser runners
				'http.config': null,
				'http.eval': null,
				'http.include': null,
				'http.service': null,
				'http.process': null,
				'util.process': null,
			},
			_testsDone;
		
		var RESERVED = [
			'$teardown',
			'$config',
			'$before',
			'$after',
			'$run'
		];
		
		// source utils/object.js
		var obj_getProperty,
			obj_defaults;
		(function(){
		
			obj_getProperty = function(obj, property) {
				var chain = property.split('.'),
					imax = chain.length,
					i = -1;
				
				while(++i<imax) {
					if (obj == null) 
						return null;
					
					obj = obj[chain[i]];
				}
				return obj;
			};
			obj_defaults = function(target, defaults_, limit){
				if (target == null) 
					target = {};
				
				for(var key in defaults_){
					if (target[key] != null)
						continue;
					if (limit != null && limit.indexOf(key) === -1) 
						continue;
					
					target[key] = defaults_[key];
				}
				return target;
			};
		}());
		
		// end:source utils/object.js
		// source utils/syntax.js
		// TEST interfaces
		
		var syntax_Mocha;
		(function(){
			
			syntax_Mocha = function(init){
				suite = {};
				
				global.it = it;
				global.before = before;
				global.beforeEach = beforeEach;
				global.after = after;
				global.afterEach = afterEach;
				global.describe = describe;
				init();
				return suite;
			};
			
			
			var suite;
			function describe(name, fn) {
				var root = suite;
				root[name] = syntax_Mocha(fn);
				suite = root;
			}
			function it(name, fn) {
				suite[name] = fn;
			}
			function before(fn){
				suite['$before'] = fn;
			}
			function after(fn){
				suite['$after'] = fn;
			}
			function afterEach(fn){
				suite['$teardown'] = fn;
			}
			function beforeEach(fn){
				suite['$teardown'] = fn;
			}
		}());
		// end:source utils/syntax.js
		// source utils/is.js
		var is_Deferred,
			is_Function,
			is_Object
			;
		(function(){
			
			is_Deferred = function(x){
				return x != null
					&& typeof x === 'object'
					&& typeof x.done === 'function'
					&& typeof x.fail === 'function'
					;
			};
			is_Function = function(x){
				return typeof x === 'function'
			};
			is_Object = function(x){
				return x != null && typeof x === 'object'
			};
			
		}());
		// end:source utils/is.js
		
		// source UTest.config.es6
		"use strict";
	
	var UTestConfiguration;
	
	(function () {
		UTestConfiguration = {
			$cfg: function $cfg(key) {
				var cfg = this.suite.$config;
				if (cfg == null || cfg[key] == null) {
					return _options[key];
				}return cfg[key];
			},
			configurate: function configurate() {
				var cfg,
				    done,
				    x,
				    xtype,
				    i = arguments.length;
				while (--i > -1) {
					x = arguments[i];
					xtype = typeof x;
	
					if ("function" === xtype) done = x;
	
					if ("object" === xtype && x != null) cfg = x;
				}
				if (cfg == null) cfg = this.suite.$config;
	
				if (cfg == null) {
					done && done();
					return;
				}
	
				var await = new Class.Await();
				for (var key in cfg) {
					if (_options.hasOwnProperty(key) === false) {
						logger.warn("Unknown key `%s`, support:", key, Object.keys(_options));
						continue;
					}
	
					perform(key, cfg[key], await.delegate());
				}
	
				await.fail(function (error) {
					return console.error("<utest:configurate> ", error);
				}).always(done);
			}
		};
	
		var Configurations = {
			http: {
				service: function service(routes, done) {
					http_config("http.service", routes, done);
				},
				config: function config(configDir, done) {
					http_config("http.config", configDir, done);
				},
				include: function include(pckg, done) {
					http_config("include", pckg, done);
				},
	
				eval: function evaluate(fn, done) {
					http_config("eval", fn.toString(), done);
				},
				process: function process(params, done) {
					http_config("process", params, done);
				}
			},
			util: {
				process: function process(params, done) {
					process_toggle(params, done);
				}
			}
		};
	
		function http_config() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}
	
			args.splice(1, 0, null); // populate later with current configuration
			args.unshift(">server:utest:action");
	
			UTest.getSocket(function (socket, config) {
	
				args[2] = UTest.getConfig && UTest.getConfig() || config;
				socket.emit.apply(socket, args);
			});
		}
	
		function perform(key, args, done) {
			var fn = obj_getProperty(Configurations, key);
			if (typeof fn !== "function") {
				return done();
			}fn(args, done);
		}
	})();
	/*?cfg, done */
	//# sourceMappingURL=UTest.config.es6.map
		// end:source UTest.config.es6
		// source UTest.page.js
		var UTestPage;
		
		(function(){
			
			var _iframe;
			
			UTestPage = {
				request: function(url, method, headers, data, callback){
					
					if (_iframe) {
						_iframe.parentNode.removeChild(_iframe);
						_iframe = null;
					}
					
					request(url, method, headers, data, function(error, response, headers){
						
						if (error) {
							callback(error);
							return;
						}
						if (response == null) {
							callback('Server not responded');
							return;
						}
						
						var html;
						if (typeof response === 'string') 
							html = response;
						
						if (html == null) {
							callback(null, response, headers);
							return;
						}
						
						
						var base = '/utest/';
						if (data != null && data.base) {
							base = data.base;
						}
						else if (/https?:/.test(url)) {
							base = /https?:\/\/[^\/]+/.exec(url)[0];
						} else {
							base += url;
						}
						
						if (/<\s*head[^>]*>/i.test(html)) {
							// no head
							var index = html.indexOf('>');
							if (index !== -1) {
								
								html = html.substring(0, index + 1)
									+ '<head><base href="'
									+ base
									+ '" /></head>'
									+ html.substring(index + 1)
									;
							}
						}
						else {
							html = html.replace(/(head[^>]*>)/i, '$1 <base href="' + base + '" />');
						}
						
						
						_iframe = document.createElement('iframe');
						
						document
							.body
							.appendChild(_iframe);
							
						var _doc = _iframe.contentDocument,
							_win = _iframe.contentWindow
							;
						
						_win.__utest_isLoading = true;
						_win.domain = window.domain;
						
						var listener = xhr_createListener(_win);
						
						$(_iframe).load(function(){
							if (_win.include) {
								_win.include.allDone(process);
							} else {
								process();
							}
							function process() {
								listener.done(function(){
									_win.__utest_isLoading = false;
									callback(null, _doc, _win, headers);
								});
							}
						})
						
						location_pushSearch(url);
						_doc.open();
						
						// Mozilla throws NS_ERROR_FAILURE. workaround with querystring only
						//- location_pushHistory(url, _win);
						
						_doc.write(html);
						_doc.close();
					
					})
				}
			};
			
			
			function request(url, method, headers, data, callback) {
				
				headers = headers || {};
				if (/https?:/.test(url)) {
					// cross-origin
					headers['x-remote'] = url;
					url = '/utest/server/proxy';
				}
				var contentType,
					body = data;
				if (body && typeof body !== 'string') {
					body = JSON.stringify(body);
					contentType = 'application/json; charset=utf-8';
				}
				
				$
					.ajax({
						url: url,
						cache: false,
						contentType: contentType,
						data: body,
						type: (method || 'get').toUpperCase(),
						headers: headers
					})
					.done(function(response, status, xhr){
						callback(null, response, xhr.getAllResponseHeaders());
					})
					.fail(function(xhr, textStatus){
						callback({
							responseText: xhr.responseText,
							statusCode: xhr.status,
							headers: xhr.getAllResponseHeaders()
						});
					})
			}
			
		}());
		// end:source UTest.page.js
		// source UTest.server.js
		var UTestServer;
		
		(function(){
			
			UTestServer = {
				
				Static: {
					server: {
						render: function(template /* [, params, callback] */){
							
							var args = _Array_slice.call(arguments, 1),
								dfr = new Class.Deferred(),
								callback
								;
							
							if (typeof args[args.length - 1] === 'function') {
								callback = args.pop();
							}
							
							var params = args.shift() || {},
								model = params.model,
								scripts = params.scripts,
								controller = params.controller;
							
							UTestPage.request('/utest/server/render', 'post', null, {
								template: template,
								model: model,
								controller: controller,
								scripts: scripts,						
								base: '/utest/'
							}, done);
							
							function done(error, doc, win) {
								
								if (callback) 
									callback(error, doc, win);
								
								if (error) {
									dfr.reject(error);
									return;
								}
									
								dfr.resolve(doc, win);
							}
							
							return dfr
						},
						
						request: function(mix /* [, method, data, callback] */){
							var url = mix,
								method,
								data,
								headers,
								callback
								;
							if (typeof mix !== 'string') {
								url = mix.url;
								method = mix.method;
								data = mix.data;
								headers = mix.headers;
							}
							
							var args = _Array_slice.call(arguments, 1),
								dfr = new Class.Deferred()
								;
							
							if (typeof args[args.length - 1] === 'function') 
								callback = args.pop();
							
							if (args.length > 0) 
								method = args.shift();
							
							if (args.length > 0) 
								data = args.shift();
								
							UTestPage.request(url, method, headers, data, done);
							
							function done(error, doc, win){
								if (callback) 
									callback(error, doc, win);
								
								if (error) {
									dfr.reject(error);
									return;
								}
								
								dfr.resolve(doc, win);
							}
							
							return dfr;
						}
					}
				}
			};
			
		}());
		// end:source UTest.server.js
		
		function nextUTest() {
			if (++_index > _tests.length - 1) {
				_testsDone();
				
				return;
			}
			
			var test = _tests[_index];
			
			test.run(nextUTest);
		}
		
		function teardownDelegate(ctx, teardown, done) {
			if (teardown == null) 
				return done;
			
			return function(){
				ctx.arguments = arguments;
				runCase(ctx, teardown, done);
			};
		}
		
		function async(callback, name, msTimeout) {
			var isTimeouted = false,
				isProcessed = false,
				// in case http requests are busy, take some more time
				jam = 5,
				fn = function(){
					clearTimeout(timeout);
					if (isTimeouted || isProcessed) 
						return;
					isProcessed = true;
					callback.apply(null, arguments);
				};
			var timeout = wait(),
				future = {
					fn: fn,
					id: timeout
				};
			
			function onTimeout() {
				if (transport_isBusy(global) && --jam > 0) {
					timeout = future.timeout = wait();
					console.log('<transport jam> bold<%d> yellow<%s>'.color, jam, name);
					return;
				}
				
				console.error('Async Suite Timeout - ', name);
				isTimeouted = true;
				assert.timeouts.push(name);
				callback();
			}
			function wait() {
				return setTimeout(onTimeout, msTimeout || _options.timeout);
			}
			
			return future;
		}
		
		
		function runCase(ctx, fn, done, teardown, key) {
			
			if (fn != null && typeof fn === 'object') {
				
				var sub = new UTest(key, fn, ctx);
				sub.run(teardownDelegate(ctx, teardown, done));
				return;
			}
			
			var asyncData;
			try {
				
				var args = _Array_slice.call(ctx.arguments || []),
					onComplete = teardownDelegate(ctx, teardown, done),
					asyncData,
					result;
				
				if (is_Function(fn) === false) {
					onComplete();
					return;
				}
				
				if (case_isAsync(fn)) {
					asyncData = async(
						onComplete
						, key
						, ctx.$config && ctx.$config.timeout
					);
					args.unshift(asyncData.fn);
					
					result = fn.apply(ctx, args);
					
					tryWait_Deferred(result);
					return;
				}
				result = fn.apply(ctx, args);
				if (tryWait_Deferred(result))
					return;
				
				onComplete();
			} catch(error){
				
				if (asyncData)
					clearTimeout(asyncData.id);
	
				if (error.name === 'AssertionError') {
					assert.fail(error);
					done();
					return;
				}
				
				error.stack = assert.prepairStack(error.stack);
				
				var msg = error.stack || error;
				console.error(msg);
				
				
				assert.errors++;
				done();
			}
			
			
			function tryWait_Deferred(dfr) {
				if (is_Deferred(dfr) === false) 
					return false;
				
				if (asyncData == null){
					asyncData = async(
						onComplete
						, key
						, ctx.$config && ctx.$config.timeout
					);
				}
				result
					.fail(function(error){
						if (error && error.name === 'AssertionError' && assert.onfailure) {
							assert.fail(error);
							return;
						}
						var msg = logger.formatMessage(
							'Test case red<bold<`%s`>> rejected'.color , key
						);
						logger.log(msg);
						eq_(error, null);
					})
					.done(function(){
						eq_(result._rejected, null);
						if (arguments.length !== 0) 
							ctx.arguments = arguments;
					})
					.always(asyncData.fn);
				return true;
			}
		}
		
		function case_isAsync(fn) {
			return /^\s*function\s*([\w]+)?\s*\([\w\s,]*(done|next)/.test(fn.toString());
		}
		
		var UTestProto = {
			// stores data exposed by the async Case
			arguments: null,
			$run: function(key, done){
				runCase(this.proto, this.suite[key], done || function(){}, null, key);
			}
		};
		
		var UTestProtoDelegate = function(instance, suite){
			var proto = {},
				key;
			for (key in UTestProto) {
				
				if (typeof UTestProto[key] === 'function') {
					proto[key] = UTestProto[key].bind(instance);
					continue;
				}
				proto[key] = UTestProto[key];
			}
			
			for (key in suite) {
				proto[key] = suite[key];
			}
			return proto;
		};
		
		var UTest = Class({
			
			Extends: [ UTestServer, UTestConfiguration ],
			Construct: function(mix, suite, parent){
				if (this instanceof UTest === false) 
					return new UTest(mix, suite, parent);
				
				var name = mix;
				if (typeof mix !== 'string' && suite == null) {
					suite = mix;
					name = 'UTest'
				}
				
				if (typeof suite === 'function') 
					suite = syntax_Mocha(suite);
				
				if (parent != null) {
					suite.$config = obj_defaults(
						suite.$config,
						parent.$config,
						[
							'timeout',
							'errorableCallbacks'
						]
					);
				}
				this.name = name;
				this.suite = suite;
				this.processed = [];
				this.proto = UTestProtoDelegate(this, suite);
				
				// @obsolete properties
				['before', 'after', 'teardown', 'config']
					.forEach(function(key){
						if (suite[key] == null) 
							return;
						
						console.warn('<UTest>', key, 'property is deprecated. Use: $' + key);
						
						suite['$' + key] = suite[key];
						delete suite[key];
					});
				
				if (parent == null) 
					_tests.push(this);
				return this;
			},
			
			run: function(callback){
				
				this.processed = [];
				this.errors = 0;
				//this.snapshot = {
				//	total: assert.total,
				//	failed: assert.failed
				//};
				
				this.onComplete = callback;
				
				this.handleRanges();
				this.handleBangs();
				this.configurate(this._start);
			},
			
			handleBangs: function(){
				
				var has = rewriteDeep(this.suite);
				if (has) {
					clearObject(this.suite);
				}
				
				function rewriteDeep(obj){
					var has = false;
					Object
						.keys(obj)
						.forEach(function(key){
							var val = obj[key];
							if (key[0] === '!') {
								has = true;
								if (is_Object(val) && hasBang(val) === false) {
									forceDeep(val);
								}
								return;
							}
							
							if (key[0] !== '!' && is_Object(val) && hasBang(val)) {
								delete obj[key];
								key = '!' + key;
								obj[key] = val;
								rewriteDeep(val);
								has = true;
							}
						});
					return has;
				}
				function forceDeep(obj) {
					var key, val;
					for (key in obj) {
						if (RESERVED.indexOf(key) !== -1) continue;
						if (key.substring(0, 2) === '//') continue;
							
						val = obj[key];
						delete obj[key];
						obj['!' + key] = val;
						if (is_Object(val)) {
							forceDeep(val);
						}
					}
				}
				function clearObject(obj){
					Object
						.keys(obj)
						.forEach(function(key){
							if (RESERVED.indexOf(key) !== -1) 
								return;
							
							if (key[0] !== '!') {
								delete obj[key];
								return;
							}
							if (is_Object(obj[key])) 
								clearObject(obj[key]);
						});
				}
				function hasBang(obj){
					return ruqq.arr.any(Object.keys(obj), function(key){
						
						if (key[0] === '!')
							return true;
						
						var val = obj[key];
						if (is_Object(val)) 
							return hasBang(val);
						
						return false;
					});
				}
			},
			handleRanges: function(){
				var keys = Object.keys(this.suite),
					start, end;
					
				keys.forEach(function(x, index){
					switch(x[0]) {
						case '[':
							if (start != null) {
								logger.warn('Range is already started at `%s` (skipp)', keys[start]);
								return;
							}
							start = index;
							break;
						case ']':
							if (end != null) {
								logger.warn('Range is already closed at `%s` (enlarge)', keys[end]);
							}
							end = index;
							break;
					}
				});
				if (start == null && end == null) 
					return;
				if (start == null) 
					start = 0;
				if (end == null) 
					end = keys.length - 1;
				
				logger.log('Range: from bold<green<%s>> to bold<green<%s>>'.color, keys[start], keys[end]);
				
				var range = {},
					suite = this.suite;
				keys.slice(start, end + 1).forEach(function(key){
					range[key] = suite[key];
				});
				
				RESERVED.forEach(function(key){
					if (suite[key] != null) 
						range[key] = suite[key];
				})
				
				this.suite = range;
			},
			
			Self: {
				_start: function(){
					runCase(this.proto, this.suite.$before, this._nextCase);	
				},
				_nextCase: function(){
					
					if (arguments.length > 0) {
						var index = 0;
						if (this.$cfg('errorableCallbacks') === true) {
							assert.equal(arguments[0], null);
							index = 1;
						}
						this.proto.arguments = _Array_slice.call(arguments, index);
					}
					
					var breakOnError = this.$cfg('breakOnError');
					if (breakOnError) {
						breakOnError = assert.failed !== 0
							|| assert.errors !== 0
							|| assert.timeouts.length !== 0
							;
					}
					
					
					for (var key in this.suite) {
						if (breakOnError) 
							break;
						
						if (~this.processed.indexOf(key)) 
							continue;
						
						// reserved
						if (RESERVED.indexOf(key) !== -1) 
							continue;
						
						if (key.substring(0,2) === '//') {
							console.warn(key.substring(2), '(skipped)'.bold);
							this.processed.push(key);
							continue;
							
						}
						this.processed.push(key);
						
						var case_ = this.suite[key];
						if (case_ == null) 
							continue;
						
						var message = ('   ' + key + ': ').bold;
						if (typeof case_ === 'object') 
							message = message.bg_cyan;
						
						console.log('');
						console.print(message);
						runCase(this.proto, case_, this._nextCase, this.suite.$teardown, key);
						return;
					}
					
					var that = this;
					runCase(this.proto, this.suite.$after, function(){
						UTest.trigger('complete', that);
						that.onComplete();
					});
				}
			},
			Static: {
				stats: function(){
					return {
						suites: _tests.length
					};
				},
				clear: function(){
					_tests = [];
					_listeners = {};
				},
				run: function(callback){
					_index = -1;
					_testsDone = callback;
					
					nextUTest();
				},
				on: function(event, callback){
					switch (event) {
						case 'complete':
							if (UTest.isBusy() === false) {
								callback();
								return;
							}
							break;
					}
					
					var fns = (_listeners[event] || (_listeners[event] = []));
					fns.push(callback);
				},
				trigger: function(event){
					var fns = _listeners[event];
					if (fns == null || !fns.length) {
						return;
					}
					
					var args = Array.prototype.slice.call(arguments, 1);
					for (var i = 0, x, imax = fns.length; i < imax; i++){
						x = fns[i];
						x.apply(null, args);
					}
				},
				isBusy: function(){
					return _index < _tests.length;
				},
				cfg: function(options){
					for (var key in options) {
						_options[key] = options[key];
					}
				},
				
				configurate: function($config, done){
					UTestConfiguration.configurate($config, done);
				},
				
				domtest: typeof DomTest !== 'undefined' ? DomTest : null
			}
		});
		
		global.UTest = UTest;
		
		
	}(__global));
	
	
	
	// end:source /src/UTest.js
	
	// source /src/browser/detect.js
	(function() {
	
		window.browserInfo = window.browserInfo || {};
		
		if (typeof navigator == 'undefined') {
			return;
		}
	
		var info = browserInfo,
			ua = navigator.userAgent,
			
			_object,
			_prop1,
			_prop2;
	
		function use(container, prop1, prop2) {
			_object = container;
			_prop1 = prop1;
			_prop2 = prop2;
		}
	
		function has(str, value, regexp) {
			if (ua.indexOf(str) == -1) {
				return false;
			}
			_object[_prop1] = value;
	
			if (regexp && _prop2) {
				var match = regexp.exec(ua);
				if (match && match.length > 1) {
					_object[_prop2] = match[1];
				}
			}
			return true;
		}
	
	
		use(info.platform = {}, 'name');
		if (!( //
		has('Windows', 'win') || //
		has('Mac', 'mac') || //
		has('Linux', 'linux') || //
		has('iPhone', 'iphone') || //
		has('Android', 'android'))) {
			info.platform.name = 'unknown'
		}
	
		use(info.browser = {}, 'name', 'version')
		if (!( //
		has('MSIE', 'msie', /MSIE (\d+(\.\d+)*)/) || //
		has('Firefox', 'firefox', /Firefox\/(\d+(\.\d+)*)/) || //
		has('Safari', 'safari', /Version\/(\d+(\.\d+)*)/) || //
		has('Opera', 'opera', /Version\/? ?(\d+(\.\d+)*)/))) {
			info.browser.name = 'unknown';
			info.browser.version = 0;
		}
		has('Chrome', 'chrome', /Chrome\/(\d+(\.\d+)*)/);
	
	
		use(info.engine = {}, 'name', 'version');
		if (!( //
		has('Trident', 'trident', /Trident\/(\d+(\.\d+)*)/) || //
		has('Gecko', 'gecko', /rv:(\d+(\.\d+)*)/) || //
		has('Presto', 'presto', /Presto\/(\d+(\.\d+)*)/) || //
		has('Opera', 'opera', /Version\/? ?(\d+(\.\d+)*)/))) {
			info.engine.name = 'unknown';
			info.engine.version = 0;
		}
		has('WebKit', 'webkit', /WebKit\/(\d+(\.\d+)*)/);
	
	}());
	// end:source /src/browser/detect.js
	// source /src/browser/action.js
	(function() {
	
		window.onerror = function(message, file, lineNumber) {
			var lines = [];
			lines.push('Message: ' + message);
			lines.push('File: ' + file + ':' + lineNumber);
			
			message = lines.join('\n');
			console.error(message);
			
			socket.emit('browser:utest:error', {
				error: message
			});
			
			//-state = state_ready;
		};
		
		// source notify.js
		function notify(state) {
			
			switch (state) {
				case 'connect':
					$('<div>').text('connected to server').appendTo('body');
					break;
			}
			
		}
		// end:source notify.js
		// source utils/logger.js
		(function() {
		
			var orig_log = console.log;
		
			console.print = function(){
				orig_log.apply(console, arguments);
			};
		
			for (var key in console) {
				if (typeof console[key] !== 'function') {
					continue;
				}
				console[key] = logger_create(key);
			}
		
			assert.onfailure = function() {
				socket.emit('browser:assert:failure', Arguments_dismissCircular(arguments));
			}
			assert.onsuccess = function() {
				socket.emit('browser:assert:success', Arguments_dismissCircular(arguments));
			}
		
			function logger_create(key) {
		
				var original = console[key];
				return function() {
					var args = Arguments_dismissCircular(arguments);
		
					if (socket) {
						socket.emit('browser:log', key, args);
					}
					return original.apply(console, args);
				};
			}
		
			function Arguments_dismissCircular(arguments_) {
				var arr = [],
					imax = arguments_.length,
					i = -1;
				while( ++i < imax ) {
					arr[i] = logger_dimissCircular(arguments_[i]);
				}
				return arr;
			}
		
			var logger_dimissCircular = (function() {
				var cache;
		
				function clone(mix) {
					if (mix == null) {
						return null;
					}
		
		
					var cloned;
		
					if (mix instanceof Array) {
						cloned = [];
						for (var i = 0, imax = mix.length; i < imax; i++) {
							cloned[i] = clone(mix[i]);
						}
						return cloned;
					}
		
					if (typeof mix === 'object') {
						var type = Object.prototype.toString.call(mix);
						if (type.indexOf('[object HTML') === 0) 
							return '[dom ' + mix.tagName + ']';
						
						if (~cache.indexOf(mix)) {
							return '[object Circular]';
						}
						cache.push(mix);
		
						cloned = {};
						for (var key in mix) {
							cloned[key] = clone(mix[key]);
						}
						return cloned;
					}
		
					return mix;
				}
		
				return function(mix) {
					if (typeof mix === 'object' && mix != null) {
						cache = [];
						mix = clone(mix);
						cache = null;
					}
		
					return mix;
				};
			}());
		
		}());
		// end:source utils/logger.js
		// source utils/script.js
		var script_insert = (function() {
		
			function scriptLoadedDelegate(callback) {
				return function scriptLoaded(event) {
					if (event && event.type === 'error') {
						console.error('Script cannt be loaded', event.target.src);
					}
		
					callback && callback();
				};
			}
		
		
			return function(data, callback) {
		
				var path = data.path,
					code = data.code,
					tag = document.createElement('script');
		
				callback = scriptLoadedDelegate(callback);
		
				tag.type = 'text/javascript';
		
				if (path) {
					//
					path += (~path.indexOf('?') ? '&' : '?') + Date.now();
		
					tag.src = path;
		
					if ('onreadystatechange' in tag) {
						tag.onreadystatechange = function() {
							switch (this.readyState) {
								case 'complete':
								case 'loaded':
									callback();
									break;
							}
						};
					} else {
						tag.onload = tag.onerror = callback;
					}
				} else {
					tag.innerHTML = code;
				}
		
				var head = document.querySelector('head');
		
				head.appendChild(tag);
			}
		}());
		
		var script_insertMany = function(bundle, callback){
			if (!(arr_isArray(bundle) && bundle.length)) {
				callback();
				return;
			}
			
			for (var i = 0, x, imax = bundle.length; i < imax; i++){
				x = bundle[i];
				
				script_insert({path: x}, i === imax - 1 ? callback : null);
			}
		}
		
		var script_getResources = (function() {
		
		
			return function() {
				var scripts = document.querySelectorAll('script'),
					resources = [];
		
				for (var i = 0, x, imax = scripts.length; i < imax; i++) {
					x = scripts[i].getAttribute('src');
		
					if (x) {
						resources.push(x);
					}
				}
				return resources;
			};
		}());
		// end:source utils/script.js
		// source utils/include.js
		var include_ready = (function() {
			var callback;
		
			function defer() {
				include.done(function() {
					setTimeout(check);
				});
			}
		
			function check() {
				if (typeof include === 'undefined') {
					callback();
					return;
				}
				if (include.state == null || include.state > 3) {
					callback();
					return;
				}
		
				defer();
			}
		
			return function(fn) {
				callback = fn;
		
				check();
			};
		}());
		
		var include_clearCache = function() {
			if (typeof include === 'undefined') {
				return;
			}
		
			var resources = include.getResources(),
				scripts = document.querySelectorAll('head > script');
			
			// @TODO - remove only scripts from resources
			for (var i = 0, x, imax = scripts.length; i < imax; i++){
				x = scripts[i];
				x.parentNode.removeChild(x);
			}
			
			for (var key in resources) {
				resources[key] = {};
			}
			
			if (window.location.search.indexOf('nocache') === -1) 
				include.cfg('version', +(new Date));
			
			include = include.instance();
		};
		
		var include_reset = function(){
			if (typeof include === 'undefined' || include.instance == null) {
				return;
			}
			
			include = include.instance();
		}
		// end:source utils/include.js
		
		// source RunnerDom.js
		var RunnerDom;
		(function() {
			RunnerDom = Class({
				Static: {
					run: function(configs, socket, callback){
						
						_runners = [];
						_socket = socket;
						_configs = arr_isArray(configs) ? configs : [configs];
						_onComplete = callback;
						_stats = {};
						_configIndex = _scriptIndex = -1;
					
						_socket.emit('browser:utest:start', {
							userAgent: window.browserInfo
						});
					
						assert.reset();		
						cfg_runNext();
					},
					getResources: function(){
						var resources = [];
						
						for (var i = 0, x, imax = _runners.length; i < imax; i++){
							x = _runners[i];
							
							if (x.resources) {
								resources = resources.concat(x.resources);
							}
						}
						
						return resources;
					},
					getCurrentConfig: function(){
						return _configs[_configIndex];
					}
				},
				
				Construct: function(config){
					this.config = config;
					this.scripts = config.scripts;
					
					var key, val, cfg = config.$config;
					for(key in cfg){
						val = cfg[key];
						if (/^function\s*\(/.test(val)) {
							cfg[key] = eval('(' + val + ')');
						}
					}
					
				},
				run: function(callback) {
					this.onComplete = callback;
					this.index = -1;
					this.stats = [];
					
					TestSuite.clear();
					include_clearCache();
		
					_socket.emit('browser:utest:suite:start', {
						url: this.config.name
					});
					
					if (!(this.scripts && this.scripts.length)) {
						console.warn('Suite has not test scripts');
						callback();
						return this;
					}
					
					suite_prepair(this, this.process);
					return this;
				},
				
				Self: {
				
					process: function() {
			
						if (++this.index > this.scripts.length - 1) {
							this.resources = script_getResources();
							this.onComplete(this);
							return;
						}
						
						var path = this.scripts[this.index];
						
						_socket.emit('browser:utest:script',{
							script: path
						});
						
						include_reset();
						TestSuite.clear();
						
						path = '/utest/' + path;
						
						script_insert({path: path}, this.processSingle);
						
					},
					
					processSingle: function(force){
						
						var that = this;
						
						include_ready(function(){
							TestSuite.run(that.singleComplete);
						});
					},
			
					singleComplete: function() {
						this.stats.push({
							url: this.scripts[this.index],
							total: assert.total,
							failed: assert.failed,
							timeouts: assert.timeouts,
							errors: assert.errors,
							callbacks: assert.callbacks,
						});
			
						this.process();
					}
				}
			});
			
			var _configs,
				_configIndex,
				_socket,
				_stats,
				_onComplete,
				_runners;
			
			
			function cfg_runNext() {
				if (++_configIndex > _configs.length - 1) {
					_onComplete(_stats);
					return;
				}
				
				var config = _configs[_configIndex];
				_socket.emit('browser:utest:beforestart', {
					config: config
				}, function(){
					
					_runners.push(new RunnerDom(config).run(cfg_runNext));
				});
			}
			
			function suite_prepair(runner, callback) {
				var suite = runner.config;
				
				fn_waterfall(
					function(done) {
						cfg_runConfigurationScript(
							'$after', _configs[_configIndex - 1], done
						);
					},
					function(done) {
						suite_loadEnv(runner, suite, done);
					},
					function(done){
						cfg_runConfigurationScript(
							'$before', suite, done
						);
					},
					callback
				);
			}
			function suite_loadEnv(runner, suite, done) {
				if (arr_isArray(suite.env) === false) {
					done();
					return;
				}
				
				if (typeof include === 'undefined') {
					script_insertMany(suite.env, done);
					return;
				}
				
				var resource = include
					.instance('/utest/')
					;
				
				ruqq.arr.each(suite.env, function(x){
					resource.js(x);
				});
				
				resource.done(function(resp){
					setTimeout(function(){
						for (var lib in resp) {
							var exports = resp[lib];
							
							if (exports != null) {
								window[lib] = exports;
							}
						}
						
						done(resp);
					});
				});
			}
		}());
		// end:source RunnerDom.js
		// source utest.extend.js
		
		
		UTest.getSocket = function(callback){
			
			callback(socket);
		};
		
		UTest.getConfig = RunnerDom.getCurrentConfig;
		// end:source utest.extend.js
		
		var TestSuite = window.UTest,
			state_ready = 1,
			state_busy = 2,
			state = state_ready,
			configuration = new Class.Await,
			socket = io.connect('/utest-browser')
				.on('connect', function(){
					console.log('browser:connected to utest-browser socket');
					notify('connect');
				})
				.on('server:utest:handshake', function(done) {
					console.log('browser:handshake');
					done({
						userAgent: window.browserInfo,
						ready: state
					});
				})
				.on('server:utest', utest_start)
				;
	
		
	
	
	
		function utest_start(config) {
			
			if (!config) {
				socket.emit('browser:utest:end', {
					error: 'No scripts to be tested'
				});
				return;
			}
			
			state = state_busy;
			
			if (configuration._wait > 0) {
				configuration.always(utest_start.bind(null, config));
				return;
			}
			
			RunnerDom.run(config, socket, function(){
					
					state = state_ready;
				
					var resources = RunnerDom.getResources();
					
					socket.emit('browser:utest:end', {
						total: assert.total,
						failed: assert.failed,
						timeouts: assert.timeouts,
						callbacks: assert.callbacks,
						errors: assert.errors,
						
						userAgent: window.browserInfo,
						resources: resources
					});
					
					
				
			});
			
		}
		
		
		function server_configurate(action){
			var args = Array.prototype.slice.call(arguments);
			
			args.unshift('>server:utest:action');
			args.push(configuration.delegate());
			
			socket
				.emit
				.apply(socket, args)
				;
		}
		
	
	
		
	}());
	// end:source /src/browser/action.js
	
	
}());

// source /vendor/sinon.js
// source sinon.js
/*jslint eqeqeq: false, onevar: false, forin: true, nomen: false, regexp: false, plusplus: false*/
/*global module, require, __dirname, document*/
/**
 * Sinon core utilities. For internal use only.
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @license BSD
 *
 * Copyright (c) 2010-2013 Christian Johansen
 */
"use strict";

var sinon = (function (buster) {
    var div = typeof document != "undefined" && document.createElement("div");
    var hasOwn = Object.prototype.hasOwnProperty;

    function isDOMNode(obj) {
        var success = false;

        try {
            obj.appendChild(div);
            success = div.parentNode == obj;
        } catch (e) {
            return false;
        } finally {
            try {
                obj.removeChild(div);
            } catch (e) {
                // Remove failed, not much we can do about that
            }
        }

        return success;
    }

    function isElement(obj) {
        return div && obj && obj.nodeType === 1 && isDOMNode(obj);
    }

    function isFunction(obj) {
        return typeof obj === "function" || !!(obj && obj.constructor && obj.call && obj.apply);
    }

    function mirrorProperties(target, source) {
        for (var prop in source) {
            if (!hasOwn.call(target, prop)) {
                target[prop] = source[prop];
            }
        }
    }

    function isRestorable (obj) {
        return typeof obj === "function" && typeof obj.restore === "function" && obj.restore.sinon;
    }

    var sinon = {
        wrapMethod: function wrapMethod(object, property, method) {
            if (!object) {
                throw new TypeError("Should wrap property of object");
            }

            if (typeof method != "function") {
                throw new TypeError("Method wrapper should be function");
            }

            var wrappedMethod = object[property];

            if (!isFunction(wrappedMethod)) {
                throw new TypeError("Attempted to wrap " + (typeof wrappedMethod) + " property " +
                                    property + " as function");
            }

            if (wrappedMethod.restore && wrappedMethod.restore.sinon) {
                throw new TypeError("Attempted to wrap " + property + " which is already wrapped");
            }

            if (wrappedMethod.calledBefore) {
                var verb = !!wrappedMethod.returns ? "stubbed" : "spied on";
                throw new TypeError("Attempted to wrap " + property + " which is already " + verb);
            }

            // IE 8 does not support hasOwnProperty on the window object.
            var owned = hasOwn.call(object, property);
            object[property] = method;
            method.displayName = property;

            method.restore = function () {
                // For prototype properties try to reset by delete first.
                // If this fails (ex: localStorage on mobile safari) then force a reset
                // via direct assignment.
                if (!owned) {
                    delete object[property];
                }
                if (object[property] === method) {
                    object[property] = wrappedMethod;
                }
            };

            method.restore.sinon = true;
            mirrorProperties(method, wrappedMethod);

            return method;
        },

        extend: function extend(target) {
            for (var i = 1, l = arguments.length; i < l; i += 1) {
                for (var prop in arguments[i]) {
                    if (arguments[i].hasOwnProperty(prop)) {
                        target[prop] = arguments[i][prop];
                    }

                    // DONT ENUM bug, only care about toString
                    if (arguments[i].hasOwnProperty("toString") &&
                        arguments[i].toString != target.toString) {
                        target.toString = arguments[i].toString;
                    }
                }
            }

            return target;
        },

        create: function create(proto) {
            var F = function () {};
            F.prototype = proto;
            return new F();
        },

        deepEqual: function deepEqual(a, b) {
            if (sinon.match && sinon.match.isMatcher(a)) {
                return a.test(b);
            }
            if (typeof a != "object" || typeof b != "object") {
                return a === b;
            }

            if (isElement(a) || isElement(b)) {
                return a === b;
            }

            if (a === b) {
                return true;
            }

            if ((a === null && b !== null) || (a !== null && b === null)) {
                return false;
            }

            var aString = Object.prototype.toString.call(a);
            if (aString != Object.prototype.toString.call(b)) {
                return false;
            }

            if (aString == "[object Array]") {
                if (a.length !== b.length) {
                    return false;
                }

                for (var i = 0, l = a.length; i < l; i += 1) {
                    if (!deepEqual(a[i], b[i])) {
                        return false;
                    }
                }

                return true;
            }

            if (aString == "[object Date]") {
                return a.valueOf() === b.valueOf();
            }

            var prop, aLength = 0, bLength = 0;

            for (prop in a) {
                aLength += 1;

                if (!deepEqual(a[prop], b[prop])) {
                    return false;
                }
            }

            for (prop in b) {
                bLength += 1;
            }

            return aLength == bLength;
        },

        functionName: function functionName(func) {
            var name = func.displayName || func.name;

            // Use function decomposition as a last resort to get function
            // name. Does not rely on function decomposition to work - if it
            // doesn't debugging will be slightly less informative
            // (i.e. toString will say 'spy' rather than 'myFunc').
            if (!name) {
                var matches = func.toString().match(/function ([^\s\(]+)/);
                name = matches && matches[1];
            }

            return name;
        },

        functionToString: function toString() {
            if (this.getCall && this.callCount) {
                var thisValue, prop, i = this.callCount;

                while (i--) {
                    thisValue = this.getCall(i).thisValue;

                    for (prop in thisValue) {
                        if (thisValue[prop] === this) {
                            return prop;
                        }
                    }
                }
            }

            return this.displayName || "sinon fake";
        },

        getConfig: function (custom) {
            var config = {};
            custom = custom || {};
            var defaults = sinon.defaultConfig;

            for (var prop in defaults) {
                if (defaults.hasOwnProperty(prop)) {
                    config[prop] = custom.hasOwnProperty(prop) ? custom[prop] : defaults[prop];
                }
            }

            return config;
        },

        format: function (val) {
            return "" + val;
        },

        defaultConfig: {
            injectIntoThis: true,
            injectInto: null,
            properties: ["spy", "stub", "mock", "clock", "server", "requests"],
            useFakeTimers: true,
            useFakeServer: true
        },

        timesInWords: function timesInWords(count) {
            return count == 1 && "once" ||
                count == 2 && "twice" ||
                count == 3 && "thrice" ||
                (count || 0) + " times";
        },

        calledInOrder: function (spies) {
            for (var i = 1, l = spies.length; i < l; i++) {
                if (!spies[i - 1].calledBefore(spies[i]) || !spies[i].called) {
                    return false;
                }
            }

            return true;
        },

        orderByFirstCall: function (spies) {
            return spies.sort(function (a, b) {
                // uuid, won't ever be equal
                var aCall = a.getCall(0);
                var bCall = b.getCall(0);
                var aId = aCall && aCall.callId || -1;
                var bId = bCall && bCall.callId || -1;

                return aId < bId ? -1 : 1;
            });
        },

        log: function () {},

        logError: function (label, err) {
            var msg = label + " threw exception: "
            sinon.log(msg + "[" + err.name + "] " + err.message);
            if (err.stack) { sinon.log(err.stack); }

            setTimeout(function () {
                err.message = msg + err.message;
                throw err;
            }, 0);
        },

        typeOf: function (value) {
            if (value === null) {
                return "null";
            }
            else if (value === undefined) {
                return "undefined";
            }
            var string = Object.prototype.toString.call(value);
            return string.substring(8, string.length - 1).toLowerCase();
        },

        createStubInstance: function (constructor) {
            if (typeof constructor !== "function") {
                throw new TypeError("The constructor should be a function.");
            }
            return sinon.stub(sinon.create(constructor.prototype));
        },

        restore: function (object) {
            if (object !== null && typeof object === "object") {
                for (var prop in object) {
                    if (isRestorable(object[prop])) {
                        object[prop].restore();
                    }
                }
            }
            else if (isRestorable(object)) {
                object.restore();
            }
        }
    };

    
    return sinon;
}());

// source spy.js
/**
  * @depend ../sinon.js
  * @depend call.js
  */
/*jslint eqeqeq: false, onevar: false, plusplus: false*/
/*global module, require, sinon*/
/**
  * Spy functions
  *
  * @author Christian Johansen (christian@cjohansen.no)
  * @license BSD
  *
  * Copyright (c) 2010-2013 Christian Johansen
  */
"use strict";

(function (sinon) {
    var push = Array.prototype.push;
    var slice = Array.prototype.slice;
    var callId = 0;

    
    function spy(object, property) {
        if (!property && typeof object == "function") {
            return spy.create(object);
        }

        if (!object && !property) {
            return spy.create(function () { });
        }

        var method = object[property];
        return sinon.wrapMethod(object, property, spy.create(method));
    }

    function matchingFake(fakes, args, strict) {
        if (!fakes) {
            return;
        }

        var alen = args.length;

        for (var i = 0, l = fakes.length; i < l; i++) {
            if (fakes[i].matches(args, strict)) {
                return fakes[i];
            }
        }
    }

    function incrementCallCount() {
        this.called = true;
        this.callCount += 1;
        this.notCalled = false;
        this.calledOnce = this.callCount == 1;
        this.calledTwice = this.callCount == 2;
        this.calledThrice = this.callCount == 3;
    }

    function createCallProperties() {
        this.firstCall = this.getCall(0);
        this.secondCall = this.getCall(1);
        this.thirdCall = this.getCall(2);
        this.lastCall = this.getCall(this.callCount - 1);
    }

    var vars = "a,b,c,d,e,f,g,h,i,j,k,l";
    function createProxy(func) {
        // Retain the function length:
        var p;
        if (func.length) {
            eval("p = (function proxy(" + vars.substring(0, func.length * 2 - 1) +
                ") { return p.invoke(func, this, slice.call(arguments)); });");
        }
        else {
            p = function proxy() {
                return p.invoke(func, this, slice.call(arguments));
            };
        }
        return p;
    }

    var uuid = 0;

    // Public API
    var spyApi = {
        reset: function () {
            this.called = false;
            this.notCalled = true;
            this.calledOnce = false;
            this.calledTwice = false;
            this.calledThrice = false;
            this.callCount = 0;
            this.firstCall = null;
            this.secondCall = null;
            this.thirdCall = null;
            this.lastCall = null;
            this.args = [];
            this.returnValues = [];
            this.thisValues = [];
            this.exceptions = [];
            this.callIds = [];
            if (this.fakes) {
                for (var i = 0; i < this.fakes.length; i++) {
                    this.fakes[i].reset();
                }
            }
        },

        create: function create(func) {
            var name;

            if (typeof func != "function") {
                func = function () { };
            } else {
                name = sinon.functionName(func);
            }

            var proxy = createProxy(func);

            sinon.extend(proxy, spy);
            delete proxy.create;
            sinon.extend(proxy, func);

            proxy.reset();
            proxy.prototype = func.prototype;
            proxy.displayName = name || "spy";
            proxy.toString = sinon.functionToString;
            proxy._create = sinon.spy.create;
            proxy.id = "spy#" + uuid++;

            return proxy;
        },

        invoke: function invoke(func, thisValue, args) {
            var matching = matchingFake(this.fakes, args);
            var exception, returnValue;

            incrementCallCount.call(this);
            push.call(this.thisValues, thisValue);
            push.call(this.args, args);
            push.call(this.callIds, callId++);

            try {
                if (matching) {
                    returnValue = matching.invoke(func, thisValue, args);
                } else {
                    returnValue = (this.func || func).apply(thisValue, args);
                }
            } catch (e) {
                push.call(this.returnValues, undefined);
                exception = e;
                throw e;
            } finally {
                push.call(this.exceptions, exception);
            }

            push.call(this.returnValues, returnValue);

            createCallProperties.call(this);

            return returnValue;
        },

        getCall: function getCall(i) {
            if (i < 0 || i >= this.callCount) {
                return null;
            }

            return sinon.spyCall(this, this.thisValues[i], this.args[i],
                                    this.returnValues[i], this.exceptions[i],
                                    this.callIds[i]);
        },

        calledBefore: function calledBefore(spyFn) {
            if (!this.called) {
                return false;
            }

            if (!spyFn.called) {
                return true;
            }

            return this.callIds[0] < spyFn.callIds[spyFn.callIds.length - 1];
        },

        calledAfter: function calledAfter(spyFn) {
            if (!this.called || !spyFn.called) {
                return false;
            }

            return this.callIds[this.callCount - 1] > spyFn.callIds[spyFn.callCount - 1];
        },

        withArgs: function () {
            var args = slice.call(arguments);

            if (this.fakes) {
                var match = matchingFake(this.fakes, args, true);

                if (match) {
                    return match;
                }
            } else {
                this.fakes = [];
            }

            var original = this;
            var fake = this._create();
            fake.matchingAguments = args;
            push.call(this.fakes, fake);

            fake.withArgs = function () {
                return original.withArgs.apply(original, arguments);
            };

            for (var i = 0; i < this.args.length; i++) {
                if (fake.matches(this.args[i])) {
                    incrementCallCount.call(fake);
                    push.call(fake.thisValues, this.thisValues[i]);
                    push.call(fake.args, this.args[i]);
                    push.call(fake.returnValues, this.returnValues[i]);
                    push.call(fake.exceptions, this.exceptions[i]);
                    push.call(fake.callIds, this.callIds[i]);
                }
            }
            createCallProperties.call(fake);

            return fake;
        },

        matches: function (args, strict) {
            var margs = this.matchingAguments;

            if (margs.length <= args.length &&
                sinon.deepEqual(margs, args.slice(0, margs.length))) {
                return !strict || margs.length == args.length;
            }
        },

        printf: function (format) {
            var spy = this;
            var args = slice.call(arguments, 1);
            var formatter;

            return (format || "").replace(/%(.)/g, function (match, specifyer) {
                formatter = spyApi.formatters[specifyer];

                if (typeof formatter == "function") {
                    return formatter.call(null, spy, args);
                } else if (!isNaN(parseInt(specifyer), 10)) {
                    return sinon.format(args[specifyer - 1]);
                }

                return "%" + specifyer;
            });
        }
    };

    function delegateToCalls(method, matchAny, actual, notCalled) {
        spyApi[method] = function () {
            if (!this.called) {
                if (notCalled) {
                    return notCalled.apply(this, arguments);
                }
                return false;
            }

            var currentCall;
            var matches = 0;

            for (var i = 0, l = this.callCount; i < l; i += 1) {
                currentCall = this.getCall(i);

                if (currentCall[actual || method].apply(currentCall, arguments)) {
                    matches += 1;

                    if (matchAny) {
                        return true;
                    }
                }
            }

            return matches === this.callCount;
        };
    }

    delegateToCalls("calledOn", true);
    delegateToCalls("alwaysCalledOn", false, "calledOn");
    delegateToCalls("calledWith", true);
    delegateToCalls("calledWithMatch", true);
    delegateToCalls("alwaysCalledWith", false, "calledWith");
    delegateToCalls("alwaysCalledWithMatch", false, "calledWithMatch");
    delegateToCalls("calledWithExactly", true);
    delegateToCalls("alwaysCalledWithExactly", false, "calledWithExactly");
    delegateToCalls("neverCalledWith", false, "notCalledWith",
        function () { return true; });
    delegateToCalls("neverCalledWithMatch", false, "notCalledWithMatch",
        function () { return true; });
    delegateToCalls("threw", true);
    delegateToCalls("alwaysThrew", false, "threw");
    delegateToCalls("returned", true);
    delegateToCalls("alwaysReturned", false, "returned");
    delegateToCalls("calledWithNew", true);
    delegateToCalls("alwaysCalledWithNew", false, "calledWithNew");
    delegateToCalls("callArg", false, "callArgWith", function () {
        throw new Error(this.toString() + " cannot call arg since it was not yet invoked.");
    });
    spyApi.callArgWith = spyApi.callArg;
    delegateToCalls("callArgOn", false, "callArgOnWith", function () {
        throw new Error(this.toString() + " cannot call arg since it was not yet invoked.");
    });
    spyApi.callArgOnWith = spyApi.callArgOn;
    delegateToCalls("yield", false, "yield", function () {
        throw new Error(this.toString() + " cannot yield since it was not yet invoked.");
    });
    // "invokeCallback" is an alias for "yield" since "yield" is invalid in strict mode.
    spyApi.invokeCallback = spyApi.yield;
    delegateToCalls("yieldOn", false, "yieldOn", function () {
        throw new Error(this.toString() + " cannot yield since it was not yet invoked.");
    });
    delegateToCalls("yieldTo", false, "yieldTo", function (property) {
        throw new Error(this.toString() + " cannot yield to '" + property +
            "' since it was not yet invoked.");
    });
    delegateToCalls("yieldToOn", false, "yieldToOn", function (property) {
        throw new Error(this.toString() + " cannot yield to '" + property +
            "' since it was not yet invoked.");
    });

    spyApi.formatters = {
        "c": function (spy) {
            return sinon.timesInWords(spy.callCount);
        },

        "n": function (spy) {
            return spy.toString();
        },

        "C": function (spy) {
            var calls = [];

            for (var i = 0, l = spy.callCount; i < l; ++i) {
                var stringifiedCall = "    " + spy.getCall(i).toString();
                if (/\n/.test(calls[i - 1])) {
                    stringifiedCall = "\n" + stringifiedCall;
                }
                push.call(calls, stringifiedCall);
            }

            return calls.length > 0 ? "\n" + calls.join("\n") : "";
        },

        "t": function (spy) {
            var objects = [];

            for (var i = 0, l = spy.callCount; i < l; ++i) {
                push.call(objects, sinon.format(spy.thisValues[i]));
            }

            return objects.join(", ");
        },

        "*": function (spy, args) {
            var formatted = [];

            for (var i = 0, l = args.length; i < l; ++i) {
                push.call(formatted, sinon.format(args[i]));
            }

            return formatted.join(", ");
        }
    };

    sinon.extend(spy, spyApi);

    spy.spyCall = sinon.spyCall;

    

    sinon.spy = spy;
    
}(sinon));

// source call.js
/**
  * @depend ../sinon.js
  * @depend match.js
  */
/*jslint eqeqeq: false, onevar: false, plusplus: false*/
/*global module, require, sinon*/
/**
  * Spy calls
  *
  * @author Christian Johansen (christian@cjohansen.no)
  * @author Maximilian Antoni (mail@maxantoni.de)
  * @license BSD
  *
  * Copyright (c) 2010-2013 Christian Johansen
  * Copyright (c) 2013 Maximilian Antoni
  */
"use strict";

(function (sinon) {
    
    function throwYieldError(proxy, text, args) {
        var msg = sinon.functionName(proxy) + text;
        if (args.length) {
            msg += " Received [" + slice.call(args).join(", ") + "]";
        }
        throw new Error(msg);
    }

    var slice = Array.prototype.slice;

    var callProto = {
        calledOn: function calledOn(thisValue) {
            if (sinon.match && sinon.match.isMatcher(thisValue)) {
                return thisValue.test(this.thisValue);
            }
            return this.thisValue === thisValue;
        },

        calledWith: function calledWith() {
            for (var i = 0, l = arguments.length; i < l; i += 1) {
                if (!sinon.deepEqual(arguments[i], this.args[i])) {
                    return false;
                }
            }

            return true;
        },

        calledWithMatch: function calledWithMatch() {
            for (var i = 0, l = arguments.length; i < l; i += 1) {
                var actual = this.args[i];
                var expectation = arguments[i];
                if (!sinon.match || !sinon.match(expectation).test(actual)) {
                    return false;
                }
            }
            return true;
        },

        calledWithExactly: function calledWithExactly() {
            return arguments.length == this.args.length &&
                this.calledWith.apply(this, arguments);
        },

        notCalledWith: function notCalledWith() {
            return !this.calledWith.apply(this, arguments);
        },

        notCalledWithMatch: function notCalledWithMatch() {
            return !this.calledWithMatch.apply(this, arguments);
        },

        returned: function returned(value) {
            return sinon.deepEqual(value, this.returnValue);
        },

        threw: function threw(error) {
            if (typeof error === "undefined" || !this.exception) {
                return !!this.exception;
            }

            return this.exception === error || this.exception.name === error;
        },

        calledWithNew: function calledWithNew(thisValue) {
            return this.thisValue instanceof this.proxy;
        },

        calledBefore: function (other) {
            return this.callId < other.callId;
        },

        calledAfter: function (other) {
            return this.callId > other.callId;
        },

        callArg: function (pos) {
            this.args[pos]();
        },

        callArgOn: function (pos, thisValue) {
            this.args[pos].apply(thisValue);
        },

        callArgWith: function (pos) {
            this.callArgOnWith.apply(this, [pos, null].concat(slice.call(arguments, 1)));
        },

        callArgOnWith: function (pos, thisValue) {
            var args = slice.call(arguments, 2);
            this.args[pos].apply(thisValue, args);
        },

        "yield": function () {
            this.yieldOn.apply(this, [null].concat(slice.call(arguments, 0)));
        },

        yieldOn: function (thisValue) {
            var args = this.args;
            for (var i = 0, l = args.length; i < l; ++i) {
                if (typeof args[i] === "function") {
                    args[i].apply(thisValue, slice.call(arguments, 1));
                    return;
                }
            }
            throwYieldError(this.proxy, " cannot yield since no callback was passed.", args);
        },

        yieldTo: function (prop) {
            this.yieldToOn.apply(this, [prop, null].concat(slice.call(arguments, 1)));
        },

        yieldToOn: function (prop, thisValue) {
            var args = this.args;
            for (var i = 0, l = args.length; i < l; ++i) {
                if (args[i] && typeof args[i][prop] === "function") {
                    args[i][prop].apply(thisValue, slice.call(arguments, 2));
                    return;
                }
            }
            throwYieldError(this.proxy, " cannot yield to '" + prop +
                "' since no callback was passed.", args);
        },

        toString: function () {
            var callStr = this.proxy.toString() + "(";
            var args = [];

            for (var i = 0, l = this.args.length; i < l; ++i) {
                args.push(sinon.format(this.args[i]));
            }

            callStr = callStr + args.join(", ") + ")";

            if (typeof this.returnValue != "undefined") {
                callStr += " => " + sinon.format(this.returnValue);
            }

            if (this.exception) {
                callStr += " !" + this.exception.name;

                if (this.exception.message) {
                    callStr += "(" + this.exception.message + ")";
                }
            }

            return callStr;
        }
    };

    callProto.invokeCallback = callProto.yield;

    function createSpyCall(spy, thisValue, args, returnValue, exception, id) {
        if (typeof id !== "number") {
            throw new TypeError("Call id is not a number");
        }
        var proxyCall = sinon.create(callProto);
        proxyCall.proxy = spy;
        proxyCall.thisValue = thisValue;
        proxyCall.args = args;
        proxyCall.returnValue = returnValue;
        proxyCall.exception = exception;
        proxyCall.callId = id;

        return proxyCall;
    };
    createSpyCall.toString = callProto.toString; // used by mocks

    sinon.spyCall = createSpyCall;
    
}(sinon));


// source stub.js
/**
 * @depend ../sinon.js
 * @depend spy.js
 */
/*jslint eqeqeq: false, onevar: false*/
/*global module, require, sinon*/
/**
 * Stub functions
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @license BSD
 *
 * Copyright (c) 2010-2013 Christian Johansen
 */
"use strict";

(function (sinon) {
    
    function stub(object, property, func) {
        if (!!func && typeof func != "function") {
            throw new TypeError("Custom stub should be function");
        }

        var wrapper;

        if (func) {
            wrapper = sinon.spy && sinon.spy.create ? sinon.spy.create(func) : func;
        } else {
            wrapper = stub.create();
        }

        if (!object && !property) {
            return sinon.stub.create();
        }

        if (!property && !!object && typeof object == "object") {
            for (var prop in object) {
                if (typeof object[prop] === "function") {
                    stub(object, prop);
                }
            }

            return object;
        }

        return sinon.wrapMethod(object, property, wrapper);
    }

    function getChangingValue(stub, property) {
        var index = stub.callCount - 1;
        var values = stub[property];
        var prop = index in values ? values[index] : values[values.length - 1];
        stub[property + "Last"] = prop;

        return prop;
    }

    function getCallback(stub, args) {
        var callArgAt = getChangingValue(stub, "callArgAts");

        if (callArgAt < 0) {
            var callArgProp = getChangingValue(stub, "callArgProps");

            for (var i = 0, l = args.length; i < l; ++i) {
                if (!callArgProp && typeof args[i] == "function") {
                    return args[i];
                }

                if (callArgProp && args[i] &&
                    typeof args[i][callArgProp] == "function") {
                    return args[i][callArgProp];
                }
            }

            return null;
        }

        return args[callArgAt];
    }

    var join = Array.prototype.join;

    function getCallbackError(stub, func, args) {
        if (stub.callArgAtsLast < 0) {
            var msg;

            if (stub.callArgPropsLast) {
                msg = sinon.functionName(stub) +
                    " expected to yield to '" + stub.callArgPropsLast +
                    "', but no object with such a property was passed."
            } else {
                msg = sinon.functionName(stub) +
                            " expected to yield, but no callback was passed."
            }

            if (args.length > 0) {
                msg += " Received [" + join.call(args, ", ") + "]";
            }

            return msg;
        }

        return "argument at index " + stub.callArgAtsLast + " is not a function: " + func;
    }

    var nextTick = (function () {
        if (typeof process === "object" && typeof process.nextTick === "function") {
            return process.nextTick;
        } else if (typeof setImmediate === "function") {
            return setImmediate;
        } else {
            return function (callback) {
                setTimeout(callback, 0);
            };
        }
    })();

    function callCallback(stub, args) {
        if (stub.callArgAts.length > 0) {
            var func = getCallback(stub, args);

            if (typeof func != "function") {
                throw new TypeError(getCallbackError(stub, func, args));
            }

            var callbackArguments = getChangingValue(stub, "callbackArguments");
            var callbackContext = getChangingValue(stub, "callbackContexts");

            if (stub.callbackAsync) {
                nextTick(function() {
                    func.apply(callbackContext, callbackArguments);
                });
            } else {
                func.apply(callbackContext, callbackArguments);
            }
        }
    }

    var uuid = 0;

    sinon.extend(stub, (function () {
        var slice = Array.prototype.slice, proto;

        function throwsException(error, message) {
            if (typeof error == "string") {
                this.exception = new Error(message || "");
                this.exception.name = error;
            } else if (!error) {
                this.exception = new Error("Error");
            } else {
                this.exception = error;
            }

            return this;
        }

        proto = {
            create: function create() {
                var functionStub = function () {

                    callCallback(functionStub, arguments);

                    if (functionStub.exception) {
                        throw functionStub.exception;
                    } else if (typeof functionStub.returnArgAt == 'number') {
                        return arguments[functionStub.returnArgAt];
                    } else if (functionStub.returnThis) {
                        return this;
                    }
                    return functionStub.returnValue;
                };

                functionStub.id = "stub#" + uuid++;
                var orig = functionStub;
                functionStub = sinon.spy.create(functionStub);
                functionStub.func = orig;

                functionStub.callArgAts = [];
                functionStub.callbackArguments = [];
                functionStub.callbackContexts = [];
                functionStub.callArgProps = [];

                sinon.extend(functionStub, stub);
                functionStub._create = sinon.stub.create;
                functionStub.displayName = "stub";
                functionStub.toString = sinon.functionToString;

                return functionStub;
            },

            resetBehavior: function () {
                var i;

                this.callArgAts = [];
                this.callbackArguments = [];
                this.callbackContexts = [];
                this.callArgProps = [];

                delete this.returnValue;
                delete this.returnArgAt;
                this.returnThis = false;

                if (this.fakes) {
                    for (i = 0; i < this.fakes.length; i++) {
                        this.fakes[i].resetBehavior();
                    }
                }
            },

            returns: function returns(value) {
                this.returnValue = value;

                return this;
            },

            returnsArg: function returnsArg(pos) {
                if (typeof pos != "number") {
                    throw new TypeError("argument index is not number");
                }

                this.returnArgAt = pos;

                return this;
            },

            returnsThis: function returnsThis() {
                this.returnThis = true;

                return this;
            },

            "throws": throwsException,
            throwsException: throwsException,

            callsArg: function callsArg(pos) {
                if (typeof pos != "number") {
                    throw new TypeError("argument index is not number");
                }

                this.callArgAts.push(pos);
                this.callbackArguments.push([]);
                this.callbackContexts.push(undefined);
                this.callArgProps.push(undefined);

                return this;
            },

            callsArgOn: function callsArgOn(pos, context) {
                if (typeof pos != "number") {
                    throw new TypeError("argument index is not number");
                }
                if (typeof context != "object") {
                    throw new TypeError("argument context is not an object");
                }

                this.callArgAts.push(pos);
                this.callbackArguments.push([]);
                this.callbackContexts.push(context);
                this.callArgProps.push(undefined);

                return this;
            },

            callsArgWith: function callsArgWith(pos) {
                if (typeof pos != "number") {
                    throw new TypeError("argument index is not number");
                }

                this.callArgAts.push(pos);
                this.callbackArguments.push(slice.call(arguments, 1));
                this.callbackContexts.push(undefined);
                this.callArgProps.push(undefined);

                return this;
            },

            callsArgOnWith: function callsArgWith(pos, context) {
                if (typeof pos != "number") {
                    throw new TypeError("argument index is not number");
                }
                if (typeof context != "object") {
                    throw new TypeError("argument context is not an object");
                }

                this.callArgAts.push(pos);
                this.callbackArguments.push(slice.call(arguments, 2));
                this.callbackContexts.push(context);
                this.callArgProps.push(undefined);

                return this;
            },

            yields: function () {
                this.callArgAts.push(-1);
                this.callbackArguments.push(slice.call(arguments, 0));
                this.callbackContexts.push(undefined);
                this.callArgProps.push(undefined);

                return this;
            },

            yieldsOn: function (context) {
                if (typeof context != "object") {
                    throw new TypeError("argument context is not an object");
                }

                this.callArgAts.push(-1);
                this.callbackArguments.push(slice.call(arguments, 1));
                this.callbackContexts.push(context);
                this.callArgProps.push(undefined);

                return this;
            },

            yieldsTo: function (prop) {
                this.callArgAts.push(-1);
                this.callbackArguments.push(slice.call(arguments, 1));
                this.callbackContexts.push(undefined);
                this.callArgProps.push(prop);

                return this;
            },

            yieldsToOn: function (prop, context) {
                if (typeof context != "object") {
                    throw new TypeError("argument context is not an object");
                }

                this.callArgAts.push(-1);
                this.callbackArguments.push(slice.call(arguments, 2));
                this.callbackContexts.push(context);
                this.callArgProps.push(prop);

                return this;
            }
        };

        // create asynchronous versions of callsArg* and yields* methods
        for (var method in proto) {
            // need to avoid creating anotherasync versions of the newly added async methods
            if (proto.hasOwnProperty(method) &&
                method.match(/^(callsArg|yields|thenYields$)/) &&
                !method.match(/Async/)) {
                proto[method + 'Async'] = (function (syncFnName) {
                    return function () {
                        this.callbackAsync = true;
                        return this[syncFnName].apply(this, arguments);
                    };
                })(method);
            }
        }

        return proto;

    }()));

    sinon.stub = stub;
    
}(sinon));

// source mock.js
/**
 * @depend ../sinon.js
 * @depend stub.js
 */
/*jslint eqeqeq: false, onevar: false, nomen: false*/
/*global module, require, sinon*/
/**
 * Mock functions.
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @license BSD
 *
 * Copyright (c) 2010-2013 Christian Johansen
 */
"use strict";

(function (sinon) {
    var push = [].push;

    
    function mock(object) {
        if (!object) {
            return sinon.expectation.create("Anonymous mock");
        }

        return mock.create(object);
    }

    sinon.mock = mock;

    sinon.extend(mock, (function () {
        function each(collection, callback) {
            if (!collection) {
                return;
            }

            for (var i = 0, l = collection.length; i < l; i += 1) {
                callback(collection[i]);
            }
        }

        return {
            create: function create(object) {
                if (!object) {
                    throw new TypeError("object is null");
                }

                var mockObject = sinon.extend({}, mock);
                mockObject.object = object;
                delete mockObject.create;

                return mockObject;
            },

            expects: function expects(method) {
                if (!method) {
                    throw new TypeError("method is falsy");
                }

                if (!this.expectations) {
                    this.expectations = {};
                    this.proxies = [];
                }

                if (!this.expectations[method]) {
                    this.expectations[method] = [];
                    var mockObject = this;

                    sinon.wrapMethod(this.object, method, function () {
                        return mockObject.invokeMethod(method, this, arguments);
                    });

                    push.call(this.proxies, method);
                }

                var expectation = sinon.expectation.create(method);
                push.call(this.expectations[method], expectation);

                return expectation;
            },

            restore: function restore() {
                var object = this.object;

                each(this.proxies, function (proxy) {
                    if (typeof object[proxy].restore == "function") {
                        object[proxy].restore();
                    }
                });
            },

            verify: function verify() {
                var expectations = this.expectations || {};
                var messages = [], met = [];

                each(this.proxies, function (proxy) {
                    each(expectations[proxy], function (expectation) {
                        if (!expectation.met()) {
                            push.call(messages, expectation.toString());
                        } else {
                            push.call(met, expectation.toString());
                        }
                    });
                });

                this.restore();

                if (messages.length > 0) {
                    sinon.expectation.fail(messages.concat(met).join("\n"));
                } else {
                    sinon.expectation.pass(messages.concat(met).join("\n"));
                }

                return true;
            },

            invokeMethod: function invokeMethod(method, thisValue, args) {
                var expectations = this.expectations && this.expectations[method];
                var length = expectations && expectations.length || 0, i;

                for (i = 0; i < length; i += 1) {
                    if (!expectations[i].met() &&
                        expectations[i].allowsCall(thisValue, args)) {
                        return expectations[i].apply(thisValue, args);
                    }
                }

                var messages = [], available, exhausted = 0;

                for (i = 0; i < length; i += 1) {
                    if (expectations[i].allowsCall(thisValue, args)) {
                        available = available || expectations[i];
                    } else {
                        exhausted += 1;
                    }
                    push.call(messages, "    " + expectations[i].toString());
                }

                if (exhausted === 0) {
                    return available.apply(thisValue, args);
                }

                messages.unshift("Unexpected call: " + sinon.spyCall.toString.call({
                    proxy: method,
                    args: args
                }));

                sinon.expectation.fail(messages.join("\n"));
            }
        };
    }()));

    var times = sinon.timesInWords;

    sinon.expectation = (function () {
        var slice = Array.prototype.slice;
        var _invoke = sinon.spy.invoke;

        function callCountInWords(callCount) {
            if (callCount == 0) {
                return "never called";
            } else {
                return "called " + times(callCount);
            }
        }

        function expectedCallCountInWords(expectation) {
            var min = expectation.minCalls;
            var max = expectation.maxCalls;

            if (typeof min == "number" && typeof max == "number") {
                var str = times(min);

                if (min != max) {
                    str = "at least " + str + " and at most " + times(max);
                }

                return str;
            }

            if (typeof min == "number") {
                return "at least " + times(min);
            }

            return "at most " + times(max);
        }

        function receivedMinCalls(expectation) {
            var hasMinLimit = typeof expectation.minCalls == "number";
            return !hasMinLimit || expectation.callCount >= expectation.minCalls;
        }

        function receivedMaxCalls(expectation) {
            if (typeof expectation.maxCalls != "number") {
                return false;
            }

            return expectation.callCount == expectation.maxCalls;
        }

        return {
            minCalls: 1,
            maxCalls: 1,

            create: function create(methodName) {
                var expectation = sinon.extend(sinon.stub.create(), sinon.expectation);
                delete expectation.create;
                expectation.method = methodName;

                return expectation;
            },

            invoke: function invoke(func, thisValue, args) {
                this.verifyCallAllowed(thisValue, args);

                return _invoke.apply(this, arguments);
            },

            atLeast: function atLeast(num) {
                if (typeof num != "number") {
                    throw new TypeError("'" + num + "' is not number");
                }

                if (!this.limitsSet) {
                    this.maxCalls = null;
                    this.limitsSet = true;
                }

                this.minCalls = num;

                return this;
            },

            atMost: function atMost(num) {
                if (typeof num != "number") {
                    throw new TypeError("'" + num + "' is not number");
                }

                if (!this.limitsSet) {
                    this.minCalls = null;
                    this.limitsSet = true;
                }

                this.maxCalls = num;

                return this;
            },

            never: function never() {
                return this.exactly(0);
            },

            once: function once() {
                return this.exactly(1);
            },

            twice: function twice() {
                return this.exactly(2);
            },

            thrice: function thrice() {
                return this.exactly(3);
            },

            exactly: function exactly(num) {
                if (typeof num != "number") {
                    throw new TypeError("'" + num + "' is not a number");
                }

                this.atLeast(num);
                return this.atMost(num);
            },

            met: function met() {
                return !this.failed && receivedMinCalls(this);
            },

            verifyCallAllowed: function verifyCallAllowed(thisValue, args) {
                if (receivedMaxCalls(this)) {
                    this.failed = true;
                    sinon.expectation.fail(this.method + " already called " + times(this.maxCalls));
                }

                if ("expectedThis" in this && this.expectedThis !== thisValue) {
                    sinon.expectation.fail(this.method + " called with " + thisValue + " as thisValue, expected " +
                        this.expectedThis);
                }

                if (!("expectedArguments" in this)) {
                    return;
                }

                if (!args) {
                    sinon.expectation.fail(this.method + " received no arguments, expected " +
                        sinon.format(this.expectedArguments));
                }

                if (args.length < this.expectedArguments.length) {
                    sinon.expectation.fail(this.method + " received too few arguments (" + sinon.format(args) +
                        "), expected " + sinon.format(this.expectedArguments));
                }

                if (this.expectsExactArgCount &&
                    args.length != this.expectedArguments.length) {
                    sinon.expectation.fail(this.method + " received too many arguments (" + sinon.format(args) +
                        "), expected " + sinon.format(this.expectedArguments));
                }

                for (var i = 0, l = this.expectedArguments.length; i < l; i += 1) {
                    if (!sinon.deepEqual(this.expectedArguments[i], args[i])) {
                        sinon.expectation.fail(this.method + " received wrong arguments " + sinon.format(args) +
                            ", expected " + sinon.format(this.expectedArguments));
                    }
                }
            },

            allowsCall: function allowsCall(thisValue, args) {
                if (this.met() && receivedMaxCalls(this)) {
                    return false;
                }

                if ("expectedThis" in this && this.expectedThis !== thisValue) {
                    return false;
                }

                if (!("expectedArguments" in this)) {
                    return true;
                }

                args = args || [];

                if (args.length < this.expectedArguments.length) {
                    return false;
                }

                if (this.expectsExactArgCount &&
                    args.length != this.expectedArguments.length) {
                    return false;
                }

                for (var i = 0, l = this.expectedArguments.length; i < l; i += 1) {
                    if (!sinon.deepEqual(this.expectedArguments[i], args[i])) {
                        return false;
                    }
                }

                return true;
            },

            withArgs: function withArgs() {
                this.expectedArguments = slice.call(arguments);
                return this;
            },

            withExactArgs: function withExactArgs() {
                this.withArgs.apply(this, arguments);
                this.expectsExactArgCount = true;
                return this;
            },

            on: function on(thisValue) {
                this.expectedThis = thisValue;
                return this;
            },

            toString: function () {
                var args = (this.expectedArguments || []).slice();

                if (!this.expectsExactArgCount) {
                    push.call(args, "[...]");
                }

                var callStr = sinon.spyCall.toString.call({
                    proxy: this.method || "anonymous mock expectation",
                    args: args
                });

                var message = callStr.replace(", [...", "[, ...") + " " +
                    expectedCallCountInWords(this);

                if (this.met()) {
                    return "Expectation met: " + message;
                }

                return "Expected " + message + " (" +
                    callCountInWords(this.callCount) + ")";
            },

            verify: function verify() {
                if (!this.met()) {
                    sinon.expectation.fail(this.toString());
                } else {
                    sinon.expectation.pass(this.toString());
                }

                return true;
            },

            pass: function(message) {
              sinon.assert.pass(message);
            },
            fail: function (message) {
                var exception = new Error(message);
                exception.name = "ExpectationError";

                throw exception;
            }
        };
    }());

    
    sinon.mock = mock;
    
}(sinon));

// end:source /vendor/sinon.js

