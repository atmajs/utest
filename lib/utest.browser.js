// source /vendor/jquery.js
/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);
// end:source /vendor/jquery.js

// source /ref-atma-libs/browser/globals.js
(function(globals){function __eval(e,t){"use strict";t&&t.route.params;return eval.call(window,e)}function obj_extend(e,t){for(var n in t)null!=t[n]&&(null==globals[n]||"object"!=typeof globals[n]||"object"!=typeof t[n]?e[n]=t[n]:obj_extend(globals[n],t[n]))}/*!
 * ClassJS v%VERSION%
 * Part of the Atma.js Project
 * http://atmajs.com/
 *
 * MIT license
 * http://opensource.org/licenses/MIT
 *
 * (c) 2012, %YEAR% Atma.js and other contributors
 */
!function(e,t){"use strict";function n(){return t(o,r)}var r,o="undefined"==typeof window||null==window.navigator?global:window;return r=e||o,"function"==typeof define&&define.amd?define(n):(n(),void("undefined"!=typeof module&&(module.exports=r.Class)))}(this,function(e,t){"use strict";var n,r,o,i,l,u,s,a,c,f=Array.prototype.slice,h=Array.prototype.sort,p={ModelHost:null},d="__$class__";!function(){n=function(e){return"function"==typeof e},r=function(e){return null!=e&&"object"==typeof e},u=function(e){return null!=e&&"Date"===e.constructor.name&&e instanceof Date},o=function(e){return null!=e&&"number"==typeof e.length&&"function"==typeof e.slice},i=o,l=function(e){return"string"==typeof e},s=function(e){return"string"==typeof e&&""!==e},a=function(e){return null==e?!1:"object"!=typeof e?!1:e.constructor===Object},c=function(t){return void 0===t||t===e}}();var g,m,v;!function(){g=function(e,t){if(m(e))for(var n=0,r=e.length;r>n;n++)t(e[n],n);else t(e)},m=function(e){return null!=e&&"object"==typeof e&&"number"==typeof e.length&&"function"==typeof e.splice},v=function(e,t){for(var n=e.length,r=-1;++r<n;)t(e[r])===!0&&(e.splice(r,1),r--,n--)},"function"!=typeof Array.isArray&&(Array.isArray=function(e){return e instanceof Array?!0:null==e||"object"!=typeof e?!1:void 0!==e.length&&"function"==typeof e.slice})}();var y,_,b,x,w,C;!function(){function t(e,t){if(null==t||"object"!=typeof t)return t;var n=this,o=n[e];return o[d]&&o.toJSON?r(o[d],t):t}function r(e,t){var n={};return n.json=t,n[d]=e,n}function o(e,t){var n;return null!=t&&"object"==typeof t&&t[d]&&(n=Y(t[d]),"function"==typeof n?t=new n(t.json):console.error("<class:parse> Class was not registered",t[d])),t}function i(t,n){"function"==typeof t&&(t=t.prototype),null==n&&(n={});var r,o,l;for(o in t)if(l=t[o],r=null==l?null:typeof l,"function"!==r){var u=o.charCodeAt(0);if(!(95===u&&"_id"!==o||u>=65&&90>=u))if("object"!==r)n[o]=r;else{var s=l.constructor,a=s&&s.name;if("Object"!==a&&a&&e[a]===s){n[o]=a;continue}n[o]=i(l)}}return t.__proto__&&i(t.__proto__,n),n}y=function(e,t){T(p.ModelHost||Y.Model,e,t)},_=function(e){return D(p.ModelHost||Y.Model,e)},b=function(e,t){var r=l(e)?_(e):e;return!n(r)&&console.error("<class:patch> Not a Function",e),t.Base=r,r=Y(t),l(e)&&y(e,r),r},x=function(e){return JSON.stringify(e,t)},w=function(e){return JSON.parse(e,o)},C=function(e){return i(e)}}();var j,N,A;!function(){function e(e,t){if(null!=t){"function"==typeof e&&(e=e.prototype),"function"==typeof t&&(t=t.prototype);var n,r;for(n in t)"constructor"!==n&&(r=t[n],null!=r&&(e[n]=r))}}function t(e,t){var n;return n=e?function(t){var n=1===arguments.length&&f(t)?t:arguments;return $(e,this,n)}:B,function(){return this["super"]=n,$(t,this,arguments)}}function o(n,r,o,i,l,u){var a=i,c=i;a.constructor=n.prototype.constructor,null!=o&&(c[s]={},g(o,function(t){e(c[s],t)}),c=c[s]),null!=r&&(c[s]=r.prototype);for(var f in u)null==a[f]&&(a[f]=u[f]);for(var f in l)a[f]=t(a[f],l[f]);n.prototype=a}function l(n,r,o,i,l,u){if(null!=r){var s=function(){};s.prototype=r.prototype,n.prototype=new s,n.prototype.constructor=n}null!=o&&g(o,function(t){delete t.constructor,e(n,t)});var a=n.prototype;R(a,u);for(var c in l)a[c]=t(a[c],l[c]);e(n,i)}function u(e){return n(e)?e.prototype:e}var s="__proto__",c=Object.prototype.toString,f=function(e){return"[object Arguments]"===c.call(e)};j=s in Object.prototype?o:l,N=function(e,t){if(null!=t)if(i(t))for(var o=t.length;--o>-1;)N(e,t[o]);else{var l;n(t)?l=t:r(t.Static)&&(l=t.Static),null!=l&&M(e,l)}},A=function(e,t,n){var r,o;for(r in e)o=e[r],a(o)&&(null!=t&&a(t.prototype[r])&&R(o,t.prototype[r]),null!=n&&g(n,function(e){e=u(e),a(e[r])&&R(o,e[r])}))}}();var k,O,S="__$serialization";!function(){k=function(e){var t,n,r,o=this,i={};null==e&&(e=o[S]);var l;for(t in o)if(l=t,null!=e&&e.hasOwnProperty(t)&&(r=e[t],null!=r&&"object"==typeof r&&(r.key&&(l=r.key),r.hasOwnProperty("serialize")))){if(null==r.serialize)continue;i[l]=r.serialize(o[t])}else if(95!==t.charCodeAt(0)&&"Static"!==t&&"Validate"!==t&&(n=o[t],null!=n))if("_id"!==t){switch(typeof n){case"function":continue;case"object":if(u(n))break;var s=n.toJSON;if(null==s)break;i[l]=n.toJSON();continue}i[l]=n}else i[l]=n;return null!=o._id&&(i._id=o._id),i},O=function(){for(var e,t=this,n=t.length,r=0,o=new Array(n);n>r;r++){if(e=t[r],null!=e&&"object"==typeof e){var i=e.toJSON;if(i===k||i===O){o[r]=e.toJSON();continue}if(null==i){o[r]=k.call(e);continue}}o[r]=e}return o}}();var E,D,T,R,L,P,M,I;!function(){E=function(e){n(e)&&(e=e.prototype);for(var t,r,o=1,i=arguments.length;i>o;o++){t=n(arguments[o])?arguments[o].prototype:arguments[o];for(r in t)if("Static"!==r||null==e.Static)e[r]=t[r];else for(r in t.Static)e.Static[r]=t.Static[r]}return e},D=function(e,t){for(var n=t.split("."),r=n.length,o=-1;++o<r;){if(null==e)return null;e=e[n[o]]}return e},T=function(e,t,n){for(var r,o=t.split("."),i=o.length,l=-1;++l<i-1;)r=o[l],null==e[r]&&(e[r]={}),e=e[r];e[o[l]]=n},R=function(e,t){for(var n in t)null==e[n]&&(e[n]=t[n]);return e},L=function(e,t){if(null==e&&(e={}),null==t)return e;var n,r;for(r in t)n=t[r],null!=n&&(e[r]=n);return e},function(){function e(e,r,o){if(null==e)return{};if(null==r)return r;var i,l;for(l in r)(o!==!0||null==e[l])&&(i=t(r,l),null!=i?void 0===i.value?n(e,l,i):e[l]=i.value:P(e,r.__proto__));return e}var t=Object.getOwnPropertyDescriptor,n=Object.defineProperty;return null==t?(P=L,void(M=R)):(P=function(t,n){return e(t,n,!1)},void(M=function(t,n){return e(t,n,!0)}))}(),function(){function e(e,n,i){var l,a,c,f;for(a in n)if(null==s||e!==i||s.hasOwnProperty(a)!==!1){switch(a.charCodeAt(0)){case 63://! accept falsy value
if(f=a.substring(1),c=e[f],!c)continue;if(l=t(c,n[a],i),null!=l)return l.setInvalidProperty(f),l;continue;case 45:if(f=a.substring(1),"object"==typeof e&&f in e)return o(f);continue}if(c=e[a],null==c)return r(a);if(l=t(c,n[a],i),null!=l)return l.setInvalidProperty(a),l}if(u)for(a in e)if(!(a in n||"?"+a in n))return o(a)}function t(t,o,u){if(null==o)return null;if("function"==typeof o){var s=o.call(u,t);return null==s||s===!0?null:s===!1?l():i(s)}if(null==t)return r();if("string"==typeof o){var a="string",c="number",f="boolean";switch(o){case a:return typeof t!==a||0===t.length?n(a):null;case c:return typeof t!==c?n(c):null;case f:return typeof t!==f?n(f):null}}if(o instanceof RegExp)return o.test(t)===!1?l():null;if(Array.isArray(o)){if(Array.isArray(t)===!1)return n("array");for(var s,h=-1,p=t.length;++h<p;)if(s=e(t[h],o[0]))return s.setInvalidProperty(h),s;return null}return typeof t!=typeof o?n(typeof t):"object"==typeof t?e(t,o):null}I=function(t){if(null==t)return l("object");s=null,u=!1;for(var n,r,o=arguments.length;--o>0;)switch(r=arguments[o],typeof r){case"string":null==s&&(s={}),s[r]=1;continue;case"boolean":u=r;continue;case"undefined":continue;default:if(1!==o)return l("validation argument at "+o);n=r;continue}return null==n&&(n=t.Validate),null==n?null:e(t,n,t)};var n,r,o,i,l,u=!1,s=null;!function(){function e(e,n,r){return r.type=e,r.property=null,r.setInvalidProperty=t,n.prototype=r,function(e){return new n(e)}}function t(e){return null==this.property?void(this.property=e):void(this.property=e+"."+this.property)}n=e("type",function(e){this.expect=e},{toString:function(){return"Invalid type."+(this.expect?" Expect: "+this.expect:"")+(this.property?" Property: "+this.property:"")}}),r=e("expect",function(e){this.property=e},{toString:function(){return"Property expected."+(this.property?"`"+this.property+"`":"")}}),o=e("unexpect",function(e){this.property=e},{toString:function(){return"Unexpected property"+(this.property?"`"+this.property+"`":"")}}),i=e("custom",function(e){this.error=e},{toString:function(){return"Custom validation: "+this.error+(this.property?" Property: "+this.property:"")}}),l=e("invalid",function(e){this.expect=e},{toString:function(){return"Invalid."+(this.expect?" Expect: "+this.expect:"")+(this.property?" Property: "+this.property:"")}})}()}()}();var F,U;!function(){function e(e,t,n){for(var r in t)n(D(e,r),t[r],r)}function t(e,t,n){for(var r in t)T(e,r,n(D(e,r),t[r],r))}function n(){var e=arguments;return function(t,n,r){for(var o,i=0,l=e.length;l>i;i++)if(o=e[i],o(t,n,r)===!1)return}}function r(e,t,n){return m(e)===!1?(console.warn("<patch> property is not an array",n),!1):void 0}function o(e,t){if(t.hasOwnProperty("$each"))for(var n=0,r=t.$each.length;r>n;n++)e.push(t.$each[n]);else e.push(t)}function i(e,t){e[t>0?"pop":"shift"]()}function l(e,t){v(e,function(e){return c(e,t)})}function u(e,t){return e+t}function s(e,t){return t}function a(){return void 0}F=function(e,t){for(var n in t){var r=p[n];r?r[f](e,t[n],r[h]):console.error("Unknown or not implemented patcher",n)}return e},U=function(e){if(null==e)return"Undefined";var t=!1;for(var n in e)if(t=!0,null==p[n])return"Unsupported patcher: "+n;return t===!1?"No data":null};var c;!function(){c=function(e,t){for(var n in t)if(e[n]!==t[n])return!1;return!0}}();var f=0,h=1,p={$push:[e,n(r,o)],$pop:[e,n(r,i)],$pull:[e,n(r,l)],$inc:[t,u],$set:[t,s],$unset:[t,a],$bit:[t,a]}}();var H,$,z,B,q;!function(){function e(e,t){if(e.length!==t.length)return!1;for(var n=e.length,r=0;n>r;r++)if(e[r]!==t[r])return!1;return!0}H=function(e,t){return function(){return $(e,t,arguments)}},$=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2]);case 4:return e.call(t,n[0],n[1],n[2],n[3]);case 5:return e.call(t,n[0],n[1],n[2],n[3],n[4])}return e.apply(t,n)},z=function(e){var t=f.call(arguments,1);return function(){return arguments.length>0&&(t=t.concat(f.call(arguments))),$(e,null,t)}},B=function(){},q=function(t,n){if(0===t.length)return 0;for(var r=n.length,o=-1;++o<r;)if(e(n[o],t))return o+1;return n.push(t),n.length}}();var V={};(function(){!function(e){function t(){this._callbacks=[]}function n(e){function n(e){return function(){i+=1,o[e]=Array.prototype.slice.call(arguments),i===l&&r.done(o)}}var r=new t,o=[];if(!e||!e.length)return r.done(o),r;for(var i=0,l=e.length,u=0;l>u;u++)e[u].then(n(u));return r}function r(e,n){var o=new t;return 0===e.length?o.done.apply(o,n):e[0].apply(null,n).then(function(){e.splice(0,1),r(e,arguments).then(function(){o.done.apply(o,arguments)})}),o}function o(e){var t="";if("string"==typeof e)t=e;else{var n=encodeURIComponent;for(var r in e)e.hasOwnProperty(r)&&(t+="&"+n(r)+"="+n(e[r]))}return t}function i(){var e;if(window.XMLHttpRequest)e=new XMLHttpRequest;else if(window.ActiveXObject)try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){e=new ActiveXObject("Microsoft.XMLHTTP")}return e}function l(e,n,r,l){function u(){d.abort(),g.done(f,"",d)}var d,g=new t,m=l&&l["Content-Type"]||p.contentType;try{d=i()}catch(v){return g.done(c,""),g}if(r)if("GET"===e)n+="?"+o(r),r=null;else switch(m){case s:r=o(r);break;case a:try{r=JSON.stringify(r)}catch(y){return g.done(h,""),g}default:r=o(r)}d.open(e,n),r&&d.setRequestHeader("Content-Type",m);for(var _ in l)l.hasOwnProperty(_)&&d.setRequestHeader(_,l[_]);var b=p.ajaxTimeout;if(b)var x=setTimeout(u,b);return d.onreadystatechange=function(){if(b&&clearTimeout(x),4===d.readyState){var e=!d.status||(d.status<200||d.status>=300)&&304!==d.status;g.done(e,d.responseText,d)}},d.send(r),g}function u(e){return function(t,n,r){return l(e,t,n,r)}}var s="application/x-www-form-urlencoded",a="application/json",c=1,f=2,h=3;t.prototype.then=function(e,n){var r;return this._isdone?r=e.apply(n,this.result):(r=new t,this._callbacks.push(function(){var t=e.apply(n,arguments);t&&"function"==typeof t.then&&t.then(r.done,r)})),r},t.prototype.done=function(){this.result=arguments,this._isdone=!0;for(var e=0;e<this._callbacks.length;e++)this._callbacks[e].apply(null,arguments);this._callbacks=[]};var p={Promise:t,join:n,chain:r,ajax:l,get:u("GET"),post:u("POST"),put:u("PUT"),del:u("DELETE"),patch:u("PATCH"),ENOXHR:c,ETIMEOUT:f,E_PREPAIR_DATA:h,ajaxTimeout:0,contentType:a};"function"==typeof define&&define.amd?define(function(){return p}):e.promise=p}(this)}).call(V),g(["get"],function(e){V[e]=function(t,n){this.promise[e](t).then(function(e,t,r){return e?void n.onError(e,t,r):void n.onSuccess(t)})}}),g(["del","post","put","patch"],function(e){V[e]=function(t,n,r){this.promise[e](t,n).then(function(e,t,n){r(e,t,n)})}});var W;!function(){W=function(t){if(this===Y||null==this||this===e){var n=function(e){this[S]=L(this[S],t),W.call(this,e)};return n}null!=t&&(this.deserialize?this.deserialize(t):W.deserialize(this,t))},W.serialize=function(e){return n(e.toJSON)?e.toJSON():k.call(e,e[S])},W.deserialize=function(e,t){if(l(t))try{t=JSON.parse(t)}catch(i){return console.error("<json:deserialize>",t),e}if(o(t)&&n(e.push)){e.length=0;for(var u=0,s=t.length;s>u;u++)e.push(t[u]);return e}var a,c,f,h,p,d=e[S];if(null!=d){var g="__desAsKeys";if(a=d[g],null==a){a=d[g]={};for(f in d)"__desAsKeys"!==f&&d[f].hasOwnProperty("key")===!0&&(a[d[f].key]=f)}}for(f in t)h=t[f],c=f,e[c]=null!=d&&(p=d.hasOwnProperty(f)?d[f]:null,a[f]&&(c=a[f]),null!=p&&(r(p)&&(p=p.deserialize),l(p)&&(p=_(p)),n(p)))?h instanceof p?h:new p(h):h;return e}}();var J,X=function(){function e(e){this.route=r(e)}function t(e){var t=i.exec(e);return t?{optional:"?"===(t[2]||t[3]),parts:[t[1],t[4]]}:(t=l.exec(e))?{optional:"?"===t[3],parts:[t[1],t[4],t[5]]}:(console.error("Paths breadcrumbs should be matched by regexps"),{parts:[e]})}function n(e,n){for(var r=e.split(n),o=0,i=r.length;i>o;o++)r[o]=t(r[o]);return r}function r(e){var t=/[^\:\{]\?[^:]/.exec(e),r=null;return t&&(t=t.index+1,r=e.substring(t+1),e=e.substring(0,t)),{path:n(e,"/"),query:null==r?null:n(r,"&")}}function o(e,t,n){for(var r,o,i,l=[],u=0,s=e.length;s>u;u++)if(i=e[u],o=i.parts.slice(0),null!=o[1]){if(r=o[1],o[1]=t[r],null!=o[1])l.push(o.join(""));else if(!i.optional)return console.error("Object has no value, for not optional part - ",r),null}else l.push(o[0]);return l.join(n)}e.prototype={constructor:e,create:function(e){var t,n;return t=o(this.route.path,e,"/"),null==t?null:this.route.query&&(n=o(this.route.query,e,"&"),null==n)?null:t+(n?"?"+n:"")},hasAliases:function(e){for(var t,n=0,r=this.route.path.length;r>n;n++)if(t=this.route.path[n].parts[1],t&&null==e[t])return!1;return!0}};var i=/^([^:\?]*)(\??):(\??)([\w]+)$/,l=/^([^\{\?]*)(\{(\??)([\w]+)\})?([^\s]*)?$/;return e}();!function(){function e(e,t,n,r){return null==r?e:(null!=t?$(r,e,t):n.push(r),e)}function t(e){e._done=null,e._fail=null,e._always=null}function n(e,t,n){if(null!=e){for(var r,o=e.length,i=-1;++i<o;)r=e[i],r&&$(r,t,n);e.length=0}}function r(e){return null==e||"object"!=typeof e?!1:e instanceof J?!0:"function"==typeof e.done&&"function"==typeof e.fail}J=function(){},J.prototype={_isAsync:!0,_done:null,_fail:null,_always:null,_resolved:null,_rejected:null,defer:function(){this._rejected=null,this._resolved=null},isResolved:function(){return null!=this._resolved},isRejected:function(){return null!=this._rejected},isBusy:function(){return null==this._resolved&&null==this._rejected},resolve:function(){var e=this._done,r=this._always;return this._resolved=arguments,t(this),n(e,this,arguments),n(r,this,[this]),this},reject:function(){var e=this._fail,r=this._always;return this._rejected=arguments,t(this),n(e,this,arguments),n(r,this,[this]),this},resolveDelegate:function(){return H(this.resolve,this)},rejectDelegate:function(){return H(this.reject,this)},then:function(e,t){return this.pipe(e,t)},done:function(t){return null!=this._rejected?this:e(this,this._resolved,this._done||(this._done=[]),t)},fail:function(t){return null!=this._resolved?this:e(this,this._rejected,this._fail||(this._fail=[]),t)},always:function(t){return e(this,this._rejected||this._resolved,this._always||(this._always=[]),t)},pipe:function(e){function t(e,t,n){return function(){if(null!=n){var o=n.apply(this,arguments);if(null!=o)return r(o)===!0?void o.pipe(e):void e[t](o)}e[t].apply(e,arguments)}}var n;if("function"==typeof e){n=new J;var o=e,i=arguments.length>1?arguments[1]:null;return this.done(t(n,"resolve",o)).fail(t(n,"reject",i)),n}n=e;for(var l,u=arguments.length,s=1===u,a=1===u,c=0;++c<u;)switch(l=arguments[c]){case"done":s=!0;break;case"fail":a=!0;break;default:console.error("Unsupported pipe channel",arguments[c])}return s&&this.done(n.resolveDelegate()),a&&this.fail(n.rejectDelegate()),this},pipeCallback:function(){var e=this;return function(t){if(null!=t)return void e.reject(t);var n=f.call(arguments,1);$(e.resolve,e,n)}}},J.run=function(e,t){var n=new J;return null==t&&(t=n),e.call(t,n.resolveDelegate(),n.rejectDelegate(),n),n},J.create=function(e){return function(){var t=f.call(arguments),n=new J;return t.unshift(n),$(e,this,t),n}},J.memoize=function(e){var t={},n=[];return function(){var r=f.call(arguments),o=q(n,r);if(null!=t[o])return t[o];var i=t[o]=new J;return r.unshift(i),$(e,this,r),i}}}();var G;!function(){function e(){var e,t,n=f.call(arguments),r=n.shift(),o=this._listeners[r],i=0;if(null==o)return this;for(t=o.length;t>i;i++)e=o[i],$(e,this,n),e._once===!0&&(o.splice(i,1),i--,t--);return this}G=function(){this._listeners={}},G.prototype={constructor:G,on:function(e,t){return null!=t&&(this._listeners[e]||(this._listeners[e]=[])).push(t),this},once:function(e,t){return null!=t&&(t._once=!0,(this._listeners[e]||(this._listeners[e]=[])).push(t)),this},pipe:function(e){var t,n=this;return function(){t=f.call(arguments),t.unshift(e),$(n.trigger,n,t)}},emit:e,trigger:e,off:function(e,t){var n=this._listeners[e];if(null==n)return this;if(1===arguments.length)return n.length=0,this;for(var r=n.length,o=-1;++o<r;)n[o]===t&&(n.splice(o,1),o--,r--);return this}}}();var K,Y=function(e){var t,n;if(l(e)){if(t=e,1===arguments.length)return _(e);n=arguments[1],n[d]=t}else n=e;var r=n.Base,i=n.Extends,u=n.Static,s=n.Construct,a=null,f=n.Store,h=n.Self,p=n.Override;return null!=r&&delete n.Base,null!=i&&delete n.Extends,null!=u&&delete n.Static,null!=h&&delete n.Self,null!=s&&delete n.Construct,null!=f&&(null==i?i=f:o(i)?i.unshift(f):i=[f,i],delete n.Store),null!=p&&delete n.Override,null==r&&null==i&&null==h?(void 0===n.toJSON&&(n.toJSON=k),a=null==s?function(){}:s,n.constructor=a.prototype.constructor,null!=u&&P(a,u),a.prototype=n,null!=t&&y(t,a),a):(a=function(){if(null!=i)for(var e=i instanceof Array,t=e?i.length:1,n=0,o=null;t>n;n++)o=e?i[n]:i,"function"==typeof o&&$(o,this,arguments);if(null!=r&&$(r,this,arguments),null!=h&&c(this)===!1)for(var l in h)this[l]=H(h[l],this);if(null!=s){var u=$(s,this,arguments);if(null!=u)return u}return this["super"]=null,this},null!=t&&y(t,a),null!=u&&P(a,u),null!=r&&N(a,r),null!=i&&N(a,i),A(n,r,i),j(a,r,i,n,p,{toJSON:k}),n=null,u=null,a)};!function(){function e(e,n,r){var o,i=t(e,n,!0);return r.done(function(){o=f.call(arguments),o.unshift(null),i.apply(null,o)}).fail(function(e){i(e)})}function t(e,t,r){null==r&&(r=!0),e._timeout&&clearTimeout(e._timeout),e.defer(),e._wait++,t&&(e._result||(e._result={}),t in e._result&&console.warn("<await>",t,"already awaiting"),e._result[t]=null);var o=z(n,e,t,r);return e._timeout=setTimeout(o,K.TIMEOUT),o}function n(e,t,n){if(0===arguments.length)return e._wait=0,void e.reject("408: Timeout");if(0!==e._wait){var r=e._result;if(t){var o=f.call(arguments,3);r[t]={error:n?o.shift():null,arguments:o}}else n&&null!=arguments[3]&&(null==r&&(r=e._result={}),r.__error=arguments[3]);if(0===--e._wait){clearTimeout(e._timeout);var i,l,u=r&&r.__error;if(null==u)for(l in r)if(i=r[l],u=i&&i.error)break;if(u)return void e.reject(u,r);e.resolve(r)}}}K=Y({Extends:J.prototype,_wait:0,_timeout:null,_result:null,_resolved:[],Construct:function(){for(var t,n=arguments.length,r=-1;++r<n;)t=arguments[r],null!=t&&"function"==typeof t.done&&e(this,null,t)},delegate:function(e,n){return t(this,e,n)},deferred:function(t){return e(this,t,new J)},Static:{TIMEOUT:2e3}})}();var Q,Z,et,tt,nt={fetch:null,save:null,del:null,onSuccess:null,onError:null,Static:{fetch:function(e){return(new this).fetch(e)}}};!function(){function e(e,n){return function(){var r=null==e._rejected,o=r?e._resolved:e._rejected,u=r?i:l;t([u,e,n].concat(o))}}function t(e){u.trigger.apply(u,e)}var n,r,o="start",i="fulfilled",l="rejected",u=new G;Q=function(e){u.on(o,e),n=!0},Z=function(e,t){u.on(i,e).on(l,t),r=!0},et=function(e){u.off(i,e).off(l,e).off(o,e)},tt=function(i){return J.prototype.defer.call(this),n&&t([o,this,i]),r&&this.always(e(this,i)),this}}(),Y.Remote=function(){function e(e,n){var r;try{r=JSON.parse(n)}catch(o){return void t(e,o)}e.deserialize(r),e.resolve(e)}function t(e,t,r){var o;if("string"==typeof t&&n(r))try{o=JSON.parse(t)}catch(i){o=i}e.reject(o||t)}function n(e){var t=e.getResponseHeader(u);return null!=t&&-1!==t.toLowerCase().indexOf(s)}function i(e,i,l){return function(u,s,a){if(n(a))try{s=JSON.parse(s)}catch(u){return console.error("<XHR> invalid json response",s),t(e,u,a)}if(i&&i(u,s),u)return t(e,s,a);if("save"===l&&r(s)){if(o(e))for(var c=e.length,f=s.length,h=-1;++h<c&&f>h;)W.deserialize(e[h],s[h]);else e.deserialize(s);return e.resolve(e)}e.resolve(s)}}function l(e){return new a(e)}var u="content-type",s="json",a=function(e){this._route=new X(e)};return E(a,nt,W,J,{defer:tt,serialize:function(){return o(this)?O.call(this):k.call(this)},deserialize:function(e){return W.deserialize(this,e)},fetch:function(e){return this.defer("fetch"),V.get(this._route.create(e||this),this),this},save:function(e){this.defer("save");var t=this.serialize(),n=this._route.create(this),r=this._route.hasAliases(this)?"put":"post";return V[r](n,t,i(this,e,"save")),this},patch:function(e){return this.defer("patch"),F(this,e),V.patch(this._route.create(this),e,i(this)),this},del:function(e){this.defer("del");var t=this.serialize(),n=this._route.create(this);return V.del(n,t,i(this,e)),this},onSuccess:function(t){e(this,t)},onError:function(e,n,r){t(this,n,r)}}),l.onBefore=Q,l.onAfter=Z,g(["get","post","put","delete"],function(e){l[e]=function(t,n){var r=n;null!=n.serialize&&(r=n.serialize()),null==r&&n.toJSON&&(r=n.toJSON());var o=new J;return V[e](t,r,i(o)),o}}),l}(),Y.LocalStore=function(){function e(e,t){var n=e.create(t);localStorage.removeItem(n)}var t=function(e){this._route=new X(e)};E(t,nt,W,J,{serialize:function(){var e=o(this)?O.call(this):k.call(this);return JSON.stringify(e)},deserialize:function(e){return W.deserialize(this,e)},fetch:function(e){var t=this._route.create(e||this),n=localStorage.getItem(t);if(null==n)return this.resolve(this);if(l(n))try{n=JSON.parse(n)}catch(r){return this.reject(r)}return this.deserialize(n),this.resolve(this)},save:function(e){var t=this._route.create(this),n=this.serialize();return localStorage.setItem(t,n),e&&e(),this.resolve(this)},del:function(t){if(null==t&&0!==arguments.length)return this.reject("<localStore:del> - selector is specified, but is undefined");if(m(this)===!1)return e(this._route,t||this),this.resolve();if(null==t){for(var n=0,r=this.length;r>n;n++)this[n]=null;return this.length=0,e(this._route,this),this.resolve()}var o=this.remove(t);return 0===o.length?this.resolve():this.save()},onError:function(e){this.reject({error:e})}});var n=function(e){return new t(e)};return n.prototype=t.prototype,n}(),Y.bind=function(e){for(var t,n=arguments,r=1,o=arguments.length;o>r;r++)t=n[r],e[t]=e[t].bind(e);return e},Y.cfg=function(e,t){if(l(e))return 1===arguments.length?p[e]:void(p[e]=t);if(r(e))for(var n in e)Y.cfg(n,e[n])},Y.Model={},Y.Serializable=W,Y.Deferred=J,Y.EventEmitter=G,Y.Await=K,Y.validate=I,Y.stringify=x,Y.parse=w,Y.patch=b,Y.properties=C,Y.Collection=function(){function e(e,t){return t instanceof e?t:new e(t)}function t(){var e,t=arguments.length,o=arguments[t-1],i=arguments[t-2];return t>2&&(e=arguments[0]),o._ctor=i,E(o,r,n),null==e?Y(o):Y(e,o)}var n=function(){function t(e,t){if(null==t)return!1;if("function"==typeof t)return t(e);if("object"==typeof t){if(e.constructor===t.constructor&&e.constructor!==Object)return e===t;var n,r;for(var o in t){if(n=e[o],r=t[o],"string"==typeof r){var i=r[0],l=1;if("<"===i||">"===i)switch("="===r[1]&&(i+="=",l++),r=r.substring(l),i){case"<":if(n>=r)return!1;continue;case"<=":if(n>r)return!1;continue;case">":if(r>=n)return!1;continue;case">=":if(r>n)return!1;continue}}if(n!=r)return!1}return!0}return console.warn("No valid matcher",t),!1}function n(e,t){for(var n=this.length,r=-1;++r<n;)e.call(t||this,this[r],r);return this}var r={length:0,push:function(){for(var t=arguments.length,n=-1;++n<t;)this[this.length++]=e(this._ctor,arguments[n]);return this},pop:function(){var e=this[--this.length];return this[this.length]=null,e},shift:function(){if(0===this.length)return null;for(var e=this[0],t=this.length-1,n=0;t>n;n++)this[n]=this[n+1];return this[t]=null,this.length--,e},unshift:function(t){this.length++;for(var n=this.length;--n;)this[n]=this[n-1];return this[0]=e(this._ctor,t),this},splice:function(t,n){var r,o,i,l=this.length;if(t>=l)for(n=0,r=l,o=t;o>r;r++)this[r]=void 0;var u=n,s=t,a=t+u,c=arguments.length-2,f=l+c-u,h=a,p=l,d=f-l;if(d>0)for(r=p;--r>=h;)this[r+d]=this[r];if(0>d)for(r=h;p>r;)this[r+d]=this[r],r++;for(r=s,i=2;i<arguments.length;i)this[r++]=e(this._ctor,arguments[i++]);return this.length=f,this},slice:function(){return $(f,this,arguments)},sort:function(e){return h.call(this,e),this},reverse:function(){for(var e=f.call(this),t=this.length,n=-1;++n<t;)this[n]=e[t-n-1];return this},toString:function(){return f.call(this,0).toString()},each:n,forEach:n,where:function(e){for(var n,r=new this.constructor,o=0,i=this.length;i>o;o++)n=this[o],t(n,e)&&(r[r.length++]=n);return r},remove:function(e){for(var n=-1,r=[],o=0,i=this.length;i>o;o++)t(this[o],e)?r.push(this[o]):this[++n]=this[o];for(o=++n;i>o;o++)this[o]=null;return this.length=n,r},first:function(e){if(null==e)return this[0];var t=this.indexOf(e);return-1!==t?this[t]:null},last:function(e){if(null==e)return this[this.length-1];var t=this.lastIndexOf(e);return-1!==t?this[t]:null},indexOf:function(e,n){if(null==e)return-1;if(null!=n){if(0>n&&(n=0),n>=this.length)return-1}else n=0;for(var r=this.length;r>n;n++)if(t(this[n],e))return n;return-1},lastIndexOf:function(e,n){if(null==e)return-1;if(null!=n){if(n>=this.length&&(n=this.length-1),0>n)return-1}else n=this.length-1;for(;n>-1;n--)if(t(this[n],e))return n;return-1},map:function(e){for(var t=[],n=this.length,r=-1;++r<n;)t[r]=e(this[r]);return t},filter:function(e,t){for(var n=new this.constructor,r=this.length,o=-1;++o<r;)e.call(t||this,this[o])&&n.push(this[o]);return n}};return"undefined"!=typeof Symbol&&Symbol.iterator&&(r[Symbol.iterator]=function(){var e=this,t=-1;return{next:function(){return{value:e[++t],done:t>e.length-1}},hasNext:function(){return t<e.length}}}),r}(),r={toArray:function(){for(var e=new Array(this.length),t=0,n=this.length;n>t;t++)e[t]=this[t];return e},toJSON:O};return t}(),function(){var e,t;!function(){function n(e,t,n){return function(){e[n]=arguments;for(var r,o=0,i=t[n].length;i>o;o++)r=t[n][o],$(r,this,arguments);t[o]=null,e=null,t=null}}e=function(e){var t={},n=[];return function(){var r=q(arguments,n);return null==t[r]?t[r]=$(e,this,arguments):t[r]}},t=function(e){var t={},r={},o=[];return function(){var i=f.call(arguments),l=i.pop(),u=q(i,o);return t[u]?void $(l,this,t[u]):r[u]?void r[u].push(l):(r[u]=[l],i=f.call(i),i.push(n(t,r,u)),void $(e,this,i))}}}(),Y.Fn={memoize:e,memoizeAsync:t}}(),t.Class=Y}),function(e,t){"use strict";var n,r;return"undefined"==typeof exports||e!==exports&&null!=e||(n=r=global),null==n&&(n="undefined"==typeof window?global:window),null==r&&(r=e||n),"undefined"!=typeof include&&"function"==typeof include.js?(r.include=include,void(r.includeLib=include.Lib||n.includeLib)):void t(n,r,n.document)}(this,function(global,exports,document){"use strict";function fn_proxy(e,t){return function(){e.apply(t,arguments)}}function fn_doNothing(e){"function"==typeof e&&e()}function arr_invoke(e,t,n){if(null!=e&&e instanceof Array!=!1)for(var r=0,o=e.length;o>r;r++)"function"==typeof e[r]&&(null==t?e[r].call(n):e[r].apply(n,t))}function arr_ensure(e,t){if(!t)return e;for(var n,r=t.split("."),o=r.length-1,i=0;o>i;i++)n=r[i],e=e[n]||(e[n]={});return n=r[o],e[n]||(e[n]=[])}var bin={js:{},css:{},load:{}},isWeb=!!(global.location&&global.location.protocol&&/^https?:/.test(global.location.protocol)),reg_subFolder=/([^\/]+\/)?\.\.\//,reg_hasProtocol=/^(file|https?):/i,cfg={path:null,loader:null,version:null,lockedToFolder:null,sync:null,eval:null==document},handler={},hasOwnProp={}.hasOwnProperty,emptyResponse={load:{}},__array_slice=Array.prototype.slice,XMLHttpRequest=global.XMLHttpRequest,Helper={reportError:function(e){console.error("IncludeJS Error:",e,e.message,e.url),"function"==typeof handler.onerror&&handler.onerror(e)}},XHR=function(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){4===n.readyState&&t&&t(e,n.responseText)},n.open("GET","object"==typeof e?e.url:e,!0),n.send()},obj_inherit,obj_getProperty,obj_setProperty;!function(){obj_inherit=function(e){"function"==typeof e&&(e=e.prototype);for(var t,n,r=1,o=arguments.length;o>r;r++){t="function"==typeof arguments[r]?arguments[r].prototype:arguments[r];for(n in t)e[n]=t[n]}return e},obj_getProperty=function(e,t){for(var n=t.split("."),r=n.length,o=0;r>o;o++){if(null==e)return null;e=e[n[o]]}return e},obj_setProperty=function(e,t,n){for(var r,o=t.split("."),i=o.length-1,l=-1;++l<i;)r=o[l],null==e[r]&&(e[r]={}),e=e[r];e[o[l]]=n}}();var path_getDir,path_getFile,path_getExtension,path_resolveCurrent,path_normalize,path_win32Normalize,path_resolveUrl,path_combine,path_isRelative;!function(){function e(e){for(;-1!==e.indexOf("../");)e=e.replace(reg_subFolder,"");return e.replace(/\/\.\//g,"/")}path_getDir=function(e){return e.substring(0,e.lastIndexOf("/")+1)},path_getFile=function(e){return e=e.replace("file://","").replace(/\\/g,"/").replace(/\?[^\n]+$/,""),/^\/\w+:\/[^\/]/i.test(e)?e.substring(1):e},path_getExtension=function(e){var t=e.indexOf("?");return-1===t?e.substring(e.lastIndexOf(".")+1):e.substring(e.lastIndexOf(".",t)+1,t)},path_resolveCurrent=function(){if(null==document)return"undefined"==typeof module?"":path_win32Normalize(module.parent.filename);var e=document.getElementsByTagName("script"),t=e[e.length-1],n=t&&t.getAttribute("src")||"";if("/"===n[0])return n;var r=window.location.pathname.replace(/\/[^\/]+\.\w+$/,"");return"/"!==r[r.length-1]&&(r+="/"),r+n},path_normalize=function(e){return e.replace(/\\/g,"/").replace(/([^:\/])\/{2,}/g,"$1/")},path_win32Normalize=function(e){return e=path_normalize(e),"file:"===e.substring(0,5)?e:"file:///"+e},path_resolveUrl=function(t,n){return reg_hasProtocol.test(t)?e(t):("./"===t.substring(0,2)&&(t=t.substring(2)),"/"===t[0]&&null!=n&&null!=n.base&&(t=path_combine(n.base,t),reg_hasProtocol.test(t))?e(t):"/"===t[0]&&cfg.path&&(t=cfg.path+t.substring(1),reg_hasProtocol.test(t))?e(t):("/"===t[0]?(isWeb===!1||cfg.lockedToFolder===!0)&&(t=t.substring(1)):null!=n&&null!=n.location&&(t=n.location+t),e(t)))},path_isRelative=function(e){var t=e.charCodeAt(0);switch(t){case 47:return!1;case 102:case 104:return reg_hasProtocol.test(e)===!1}return!0},path_combine=function(){for(var e,t="",n=arguments.length,r=-1;++r<n;)e=arguments[r],e&&(e=path_normalize(e),""!==t?("/"!==t[t.length-1]&&(t+="/"),"/"===e[0]&&(e=e.substring(1)),t+=e):t=e);return t}}();var tree_resolveUsage;!function(){function e(t,n,r){if(null==n){console.warn("<include> Usage Not Found:",t),console.warn("- Ensure to have it included before with the correct alias"),console.warn("- Initiator Stacktrace:");for(var o=[],i=r;null!=i;)o.push(i.url),i=i.parent;return console.warn(o.join("\n")),null}for(var l,u,s=n.includes,a=-1,c=s.length;++a<c;)if(l=s[a],u=l.route.alias||Routes.parseAlias(l.route),u===t)return l.resource;return e(t,n.parent,r)}tree_resolveUsage=function(t,n,r){for(var o,i,l,u,s,a=[],c=n.length,f=-1;++f<c;){if(l=i=n[f],u=i.indexOf("."),-1!==u&&(l=i.substring(0,u),i=i.substring(u+1)),s=e(l,t.parent,t),null==s)return null;if(4!==s.state)return t.state=3,s.on(4,r,s,"push"),null;o=s.exports,l!==i&&(o=obj_getProperty(o,i)),"object"==typeof o&&null==o&&console.warn("<include:use> Used resource has no exports",l,t.url),a[f]=o}return a}}();var RoutesLib=function(){var e={},t=/([^\\\/]+)\.\w+$/;return{register:function(t,n,r){if("string"==typeof n&&path_isRelative(n)){var o=r||include,i=o.location||path_getDir(o.url||path_resolveCurrent());path_isRelative(i)&&(i="/"+i),n=i+n}e[t]=n instanceof Array?n:n.split(/[\{\}]/g)},resolve:function(t,n){var r,o,i,l,u,s,a,c,f=n.indexOf("?"),h=n.indexOf("::");if(-1!==h&&(r=n.substring(h+2),n=n.substring(0,h)),-1!==f){for(c=n.substring(f+1).split("&"),i={},u=0,a=c.length;a>u;u++)s=c[u].split("="),i[s[0]]=s[1];n=n.substring(0,f)}if(n=n.split("/"),l=e[t],null==l)return{path:n.join("/"),params:i,alias:r};for(o=l[0],u=1;u<l.length;u++)if(u%2===0)o+=l[u];else{var p=l[u]<<0;if(p>n.length-1&&(p=n.length-1),o+=n[p],u===l.length-2)for(p++;p<n.length;p++)o+="/"+n[p]}return{path:o,params:i,alias:r}},each:function(e,t,n,r,o){var i;if(null!=t)if("lazy"!==e||null!=o)if(t instanceof Array)for(var l=0;l<t.length;l++)this.each(e,t[l],n,r,o);else if("object"!=typeof t){if("string"==typeof t){var u=this.resolve(r,t);return r&&(r+="."+t),void n(r,u,o)}console.error("Include Package is invalid",arguments)}else for(i in t)hasOwnProp.call(t,i)&&this.each(e,t[i],n,i,o);else for(i in t)this.each(e,t[i],n,null,i)},getRoutes:function(){return e},parseAlias:function(e){var n=e.path,r=t.exec(n);return r&&r[1]}}},Routes=RoutesLib(),Events=function(e){function t(){Events.ready=fn_doNothing,null!=n&&(arr_invoke(n),n=null)}if(null==e)return{ready:fn_doNothing,load:fn_doNothing};var n=[];return"onreadystatechange"in e?e.onreadystatechange=function(){/complete|interactive/g.test(e.readyState)!==!1&&t()}:e.addEventListener?e.addEventListener("DOMContentLoaded",t):window.onload=t,{ready:function(e){n.unshift(e)}}}(document),ScriptStack=function(){function e(e,t){var n=document.createElement("script");n.type="text/javascript",n.src=e,"onreadystatechange"in n?n.onreadystatechange=function(){("complete"===this.readyState||"loaded"===this.readyState)&&t()}:n.onload=n.onerror=t,(o||(o=document.getElementsByTagName("head")[0])).appendChild(n)}function t(){function n(e){e&&"error"===e.type&&console.log("Script Loaded Error",o.url);for(var n=0,r=u.length;r>n;n++)if(u[n]===o){u.splice(n,1);break}return n===r?void console.error("Loaded Resource not found in stack",o):(2.5!==o.state&&o.readystatechanged(3),i=null,void t())}if(!l){if(0===u.length)return void r();if(null==i){var o=i=u[0];if(1!==o.state)return o.state=1,global.include=o,global.iparams=o.route.params,o.source?(__eval(o.source,o),void n()):void e(o.url,n)}}}function n(){if(!l){if(0===u.length)return void r();if(null==i){var e=u[0];if(!(e.state<2)){i=e,e.state=1,global.include=e,__eval(e.source,e);for(var t,o=0,s=u.length;s>o;o++)if(t=u[o],t===e){u.splice(o,1);break}2.5!==e.state&&e.readystatechanged(3),i=null,n()}}}}function r(){for(var e=-1,t=s.length;++e<t;)s[e]();s.length=0}var o,i,l,u=[],s=[];return{load:function(e,r,o){return this.add(e,r),!cfg.eval||o?void t():e.source?(e.state=2,void n()):void XHR(e,function(e,t){t||(console.error("Not Loaded:",e.url),console.error("- Initiator:",e.parent&&e.parent.url||"<root resource>")),e.source=t,e.state=2,n()})},add:function(e,t){if(1===e.priority)return u.unshift(e);if(null==t)return u.push(e);for(var n=u.length,r=-1;++r<n;)if(u[r]===t)return u.splice(r,0,e);u.push(e)},moveToParent:function(e,t){var n,r=u.length,o=-1,i=-1;for(n=0;r>n;n++)if(u[n]===e){i=n;break}if(-1!==i){for(n=0;r>n;n++)if(u[n]===t){o=n;break}-1!==o&&(o>i||(u.splice(i,1),u.splice(o,0,e)))}},pause:function(){l=!0},resume:function(){l=!1,null==i&&this.touch()},touch:function(){var e=cfg.eval?n:t;e()},complete:function(e){return l!==!0&&0===u.length?void e():void s.push(e)}}}(),IncludeDeferred=function(){this.callbacks=[],this.state=-1};IncludeDeferred.prototype={on:function(e,t,n,r){return this===n&&-1===this.state?(t(this),this):(null==r&&(r=this.state<3||this===n?"unshift":"push"),e<=this.state?t(this):this.callbacks[r]({state:e,callback:t}),this)},readystatechanged:function(e){var t,n,r,o;if(e>this.state&&(this.state=e),3===this.state){var i=this.includes;if(null!=i&&i.length)for(t=0;t<i.length;t++)if(4!==i[t].resource.state)return;this.state=4}if(t=0,n=this.callbacks.length,0!==n){for("js"===this.type&&4===this.state&&(o=global.include,global.include=this);n>t&&(r=this.callbacks[t],null==r||r.state>this.state||(this.callbacks.splice(t,1),n--,t--,r.callback(this),!(this.state<4)));t++);null!=o&&(global.include=o)}},ready:function(e){var t=this;return this.on(4,function(){Events.ready(function(){t.resolve(e)})},this)},done:function(e){var t=this;return this.on(4,function(){t.resolve(e)},this)},resolve:function(e){var t=this.includes,n=null==t?0:t.length;if(n>0&&null==this.response){this.response={};for(var r,o,i,l=0;n>l;l++)if(i=t[l],r=i.resource,o=i.route,"undefined"!=typeof r.exports){var u=r.type;switch(u){case"js":case"load":case"ajax":var s=o.alias||Routes.parseAlias(o),a="js"===u?this.response:this.response[u]||(this.response[u]={});if(null!=s){obj_setProperty(a,s,r.exports);break}console.warn("<includejs> Alias is undefined",r)}}}var c=this.response||emptyResponse,f=this;return null==this._use&&null!=this._usage&&(this._use=tree_resolveUsage(this,this._usage,function(){f.state=4,f.resolve(e),f.readystatechanged(4)}),this.state<4)?void 0:this._use?void e.apply(null,[c].concat(this._use)):void e(c)}};var Include,IncludeLib={};!function(IncludeDeferred){function incl_getResource(e,t){var n=e;if(path_isRelative(e)===!0&&(n="/"+n),null!=t)return bin[t][n];for(var r in bin)if(bin[r].hasOwnProperty(n))return bin[r][n];
return null}function embedPlugin(source){eval(source)}function enableModules(){return"undefined"==typeof Object.defineProperty?void console.warn("Browser do not support Object.defineProperty"):(Object.defineProperty(global,"module",{get:function(){return global.include}}),void Object.defineProperty(global,"exports",{get:function(){var e=global.include;return e.exports||(e.exports={})},set:function(e){global.include.exports=e}}))}function includePackage(e,t,n){var r=1===n.length?n[0]:__array_slice.call(n);return e instanceof Resource?e.include(t,r):new Resource("js").include(t,r)}function createIncluder(e){return function(){return includePackage(this,e,arguments)}}function doNothing(){return this}function stub_freeze(e){e.js=e.css=e.load=e.ajax=e.embed=e.lazy=e.inject=doNothing}function stub_release(e){for(var t=["js","css","load","ajax","embed","lazy"],n=t.length;-1!==--n;)e[t[n]]=createIncluder(t[n]);e.inject=e.js}Include=function(){IncludeDeferred.call(this)},stub_release(Include.prototype),obj_inherit(Include,IncludeDeferred,{_use:null,_usage:null,isBrowser:!0,isNode:!1,setCurrent:function(e){var t=e.url,n=this.getResourceById(t,"js");if(null==n){"/"===t[0]&&this.base&&(t=this.base+t.substring(1));var n=new Resource("js",{path:t},e.namespace,null,null,t)}n.state<3&&console.error("<include> Resource should be loaded",e),n.state=3,global.include=n},cfg:function(e){switch(typeof e){case"object":var t,n;for(t in e)switch(n=e[t],t){case"loader":for(var r in n)CustomLoader.register(r,n[r]);break;case"modules":n===!0&&enableModules();break;default:cfg[t]=n}break;case"string":if(1===arguments.length)return cfg[e];2===arguments.length&&(cfg[e]=arguments[1]);break;case"undefined":return cfg}return this},routes:function(e){if(null==e)return Routes.getRoutes();if(2===arguments.length)return Routes.register(e,arguments[1],this),this;for(var t in e)Routes.register(t,e[t],this);return this},promise:function(e){for(var t=e.split("."),n=global;t.length;){var r=t.shift();n=n[r]||(n[r]={})}return n},register:function(e){function t(e){return null==s?e:("/"===e.url[0]&&(e.url=s+e.url.substring(1)),"/"===e.parent[0]&&(e.parent=s+e.parent.substring(1)),e.id=e.url,e)}function n(e,t){e.exports=t,e.readystatechanged(4)}var r,o,i,l,u,s=this.base;for(r in e)for(i=e[r],l=i.length,u=-1;++u<l;){o=t(i[u]);var a=o.id,c=o.url,f=o.namespace,h=o.parent&&incl_getResource(o.parent,"js"),p=new Resource,d=o.state;if(a||c){switch(c&&("/"===c[0]&&(c=c.substring(1)),p.location=path_getDir(c)),p.state=null==d?"js"===r?3:4:d,p.namespace=f,p.type=r,p.url=c||a,p.parent=h,p.base=h&&h.base||s,r){case"load":case"lazy":var g=document.querySelector("#includejs-"+a.replace(/\W/g,""));if(null==g){console.error('"%s" Data was not embedded into html',a);break}p.exports=g.innerHTML,CustomLoader.exists(p)&&(p.state=3,CustomLoader.load(p,n))}(bin[r]||(bin[r]={}))[a]=p}}},instance:function(e,t){var n;return null==e?(n=new Include,n.state=4,n):(n=new Resource,n.state=4,n.location=path_getDir(path_normalize(e)),n.parent=t,n)},getResource:function(e,t){return this.base&&"/"===e[0]&&(e=this.base+e.substring(1)),incl_getResource(e,t)},getResourceById:function(e,t){var n=bin[t],r=n[e];return null!=r?r:this.base&&"/"===e[0]&&(r=n[path_combine(this.base,e)],null!=r)?r:this.base&&this.location&&(r=n[path_combine(this.base,this.location,e)],null!=r)?r:this.location&&(r=n[path_combine(this.location,e)],null!=r)?r:null},getResources:function(){return bin},plugin:function(e,t){var n=[],r=0,o=0,i=0,l=function(e,n){o++,embedPlugin(n),o===r-1&&t&&(t(),t=null)};for(Routes.each("",e,function(e,t){n.push("/"===t.path[0]?t.path.substring(1):t.path)}),r=n.length;r>i;i++)XHR(n[i],l);return this},client:function(){return cfg.server===!0&&stub_freeze(this),this},server:function(){return cfg.server!==!0&&stub_freeze(this),this},use:function(){return null==this.parent?(console.error("<include.use> Parent resource is undefined"),this):(this._usage=arguments,this)},pauseStack:fn_proxy(ScriptStack.pause,ScriptStack),resumeStack:fn_proxy(ScriptStack.resume,ScriptStack),allDone:function(e){ScriptStack.complete(function(){function t(){--r<1&&e()}var n=include.getPending("js"),r=n.length;if(0===r)return void e();for(var o=-1,i=r;++o<i;)n[o].on(4,t)})},getPending:function(e){var t,n,r,o=[];for(n in bin)if(null==e||e===n)for(r in bin[n])t=bin[n][r],t.state<4&&o.push(t);return o},Lib:IncludeLib})}(IncludeDeferred);var CustomLoader=function(){function e(e){return"string"==typeof e?!1:"function"==typeof e.ready||"function"==typeof e.process}function t(t){var n=path_getExtension(t),r=cfg.loader[n];if(e(r))return r;var o,i=r;if("object"==typeof i)for(var l in i){o=l,i=i[l];break}return cfg.loader[n]=new Resource("js",Routes.resolve(o,i),o,null,null,null,1)}function n(e,t){return function(n){e(t,n)}}function r(e,t,r,o){if(null==r.process)return void o(t,e);var i=n(o,t),l=r.process(e,t,i);"undefined"!=typeof l&&o(t,l)}function o(e,t,n){function o(e,o){r(o,e,t,n)}return"string"==typeof e.exports?void r(e.exports,e,t,n):t.load?t.load(e,o):void XHR(e,o)}var i={process:function(e){try{return JSON.parse(e)}catch(t){return console.error(t,e),null}}};return cfg.loader={json:i},{load:function(e,n){var r=t(e.url);return r.process?void o(e,r,n):void r.on(4,function(){o(e,r.exports,n)},null,"push")},exists:function(e){if(!e.url)return!1;var t=path_getExtension(e.url);return cfg.loader.hasOwnProperty(t)},register:function(e,t){if("string"==typeof t){var n=include;null==n.location&&(n={location:path_getDir(path_resolveCurrent())}),t=path_resolveUrl(t,n)}cfg.loader[e]=t}}}(),LazyModule={create:function(e,t){for(var n=e.split("."),r=global,o=n[n.length-1];n.length>1;){var i=n.shift();r=r[i]||(r[i]={})}n=null,Object.defineProperty(r,o,{get:function(){delete r[o];try{var n=__eval(t,global.include);null==n||n instanceof Resource||(r[o]=n)}catch(i){i.xpath=e,Helper.reportError(i)}finally{return t=null,e=null,r[o]}}})}},Resource;!function(e,t,n,r){function o(e){var t=e.type,o=e.parent,l=e.url;if(null==document&&"css"===t)return e.state=4,e;if(r.exists(e)===!1)switch(t){case"js":case"embed":n.load(e,o,"embed"===t);break;case"ajax":case"load":case"lazy":XHR(e,i);break;case"css":e.state=4;var u=document.createElement("link");u.href=l,u.rel="stylesheet",u.type="text/css",document.getElementsByTagName("head")[0].appendChild(u)}else("js"===t||"embed"===t)&&n.add(e,e.parent),r.load(e,i);return e}function i(e,t){switch(t||console.warn("Resource cannt be loaded",e.url),e.type){case"js":case"embed":return e.source=t,e.state=2,void n.touch();case"load":case"ajax":e.exports=t;break;case"lazy":LazyModule.create(e.xpath,t);break;case"css":var r=document.createElement("style");r.type="text/css",r.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(r)}e.readystatechanged(4)}function l(e,t,n){if(null==e)return null;null==n&&(n=[]);for(var r,o=e.length,i=-1;++i<o;)r=e[i].resource,t===r.type&&n.push(r),null!=r.includes&&l(r.includes,t,n);return n}Resource=function(t,r,i,l,u,s,a){e.call(this),this.childLoaded=fn_proxy(this.childLoaded,this);var c=r&&r.path;null!=c&&(this.url=c=path_resolveUrl(c,u)),this.type=t,this.xpath=l,this.route=r,this.parent=u,this.priority=a,this.namespace=i,this.base=u&&u.base,null==s&&c&&(s=(path_isRelative(c)?"/":"")+c);var f=bin[t]&&bin[t][s];return f?(f.state<4&&"js"===t&&n.moveToParent(f,u),f):null==c?(this.state=3,this.location=path_getDir(path_resolveCurrent()),this):(this.state=0,this.location=path_getDir(c),(bin[t]||(bin[t]={}))[s]=this,cfg.version&&(this.url+=(-1===this.url.indexOf("?")?"?":"&")+"v="+cfg.version),o(this))},Resource.prototype=obj_inherit(Resource,e,{state:null,location:null,includes:null,response:null,url:null,base:null,type:null,xpath:null,route:null,parent:null,priority:null,namespace:null,setBase:function(e){return this.base=e,this},childLoaded:function(){var e=this,t=e.includes;if(t&&t.length){if(e.state<3)return;for(var n=0;n<t.length;n++)if(4!==t[n].resource.state)return}e.readystatechanged(4)},create:function(e,t,n,r,o){var i;return this.state=this.state>=3?3:2,this.response=null,null==this.includes&&(this.includes=[]),i=new Resource(e,t,n,r,this,o),this.includes.push({resource:i,route:t}),i},include:function(e,n){var r,o=this,i=[];t.each(e,n,function(t,n,l){(null==o.route||o.route.path!==n.path)&&(r=o.create(e,n,t,l),i.push(r))});for(var l=-1,u=i.length;++l<u;)i[l].on(4,this.childLoaded);return this},pause:function(){this.state=2.5;var e=this;return function(t){1===arguments.length&&(e.exports=t),e.readystatechanged(3)}},getNestedOfType:function(e){return l(this.includes,e)}})}(Include,Routes,ScriptStack,CustomLoader),IncludeLib.Routes=RoutesLib,IncludeLib.Resource=Resource,IncludeLib.ScriptStack=ScriptStack,IncludeLib.registerLoader=CustomLoader.register,exports.include=new Include,exports.includeLib=IncludeLib}),/*!
 * MaskJS v0.12.3
 * Part of the Atma.js Project
 * http://atmajs.com/
 *
 * MIT license
 * http://opensource.org/licenses/MIT
 *
 * (c) 2012, 2014 Atma.js and other contributors
 */
function(e,t){"use strict";function n(){return t(i,r,o)}var r,o,i="undefined"==typeof window||null==window.navigator?global:window;return"undefined"==typeof exports||null!=e&&e!==exports&&e!==i||(e=exports),o=i.document,r=e||i,"function"==typeof define&&define.amd?define(n):n()}(this,function(global,exports,document){"use strict";function util_interpolate(e,t,n,r,o,i,l){for(var u,s,a,c,f,h=e.length,p=-1,d=null,g="",m=!0;++p<h;){if(m===!0)null==d?g+=e[p]:d.push(e[p]);else{if(c=e[p],s=null,a=c.indexOf(":"),-1===a)s=obj_getPropertyEx(c,n,r,i);else{if(u=a>0?c.substring(0,a).trim():"",""===u&&(u="expression"),c=c.substring(a+1),f=custom_Utils[u],null==f){log_error("Undefined custom util `%s`",u);continue}s=f(c,n,r,o,i,l,t)}null!=s&&("object"==typeof s&&null==d&&(d=[g]),null==d?g+=s:d.push(s))}m=!m}return null==d?g:d}function Template(e){this.template=e,this.index=0,this.length=e.length}function VarStatement(){}var coll_each,coll_remove,coll_map,coll_indexOf,coll_find;if(function(){coll_each=function(e,t,n){if(null==n&&(n=e),null==e)return e;for(var r=e.length,o=0;r>o;o++)t.call(n,e[o],o);return n},coll_indexOf=function(e,t){if(null==e)return-1;for(var n=e.length,r=0;n>r;r++)if(e[r]===t)return r;return-1},coll_remove=function(e,t){var n=coll_indexOf(e,t);return-1===n?!1:(e.splice(n,1),!0)},coll_map=function(e,t,n){var r=new Array(e.length);return coll_each(e,function(e,n){r[n]=t.call(this,e,n)},n),r},coll_find=function(e,t,n){for(var r=e.length,o=0;r>o;o++)if(t.call(n||e,e[o],o))return!0;return!1}}(),void 0===Array.prototype.forEach&&(Array.prototype.forEach=function(e,t){coll_each(this,e,t)}),void 0===Array.prototype.indexOf&&(Array.prototype.indexOf=function(e){return coll_indexOf(this,e)}),null==String.prototype.trim&&(String.prototype.trim=function(){var e,t=-1,n=this.length;if(0===n)return this;for(;++t<n&&(e=this.charCodeAt(t),!(e>32)););for(;0!==--n&&(e=this.charCodeAt(n),!(e>32)););return 0!==t&&n!==length-1?this.substring(t,n+1):this}),null==Function.prototype.bind){var _Array_slice;Function.prototype.bind=function(){if(arguments.length<2&&"undefined"==typeof arguments[0])return this;var e=this,t=_Array_slice.call(arguments),n=t.shift();return function(){return e.apply(n,t.concat(_Array_slice.call(arguments)))}}}var is_Function,is_Array,is_ArrayLike,is_String,is_Object,is_notEmptyString,is_rawObject;!function(){is_Function=function(e){return"function"==typeof e},is_Object=function(e){return null!=e&&"object"==typeof e},is_Array=is_ArrayLike=function(e){return null!=e&&"object"==typeof e&&"number"==typeof e.length&&"function"==typeof e.slice},is_String=function(e){return"string"==typeof e},is_notEmptyString=function(e){return"string"==typeof e&&""!==e},is_rawObject=function(e){return null==e||"object"!=typeof e?!1:e.constructor===Object}}();var obj_getProperty,obj_setProperty,obj_extend,obj_create;!function(){obj_getProperty=function(e,t){if("."===t)return e;for(var n=t.split("."),r=n.length,o=-1;null!=e&&++o<r;)e=e[n[o]];return e},obj_setProperty=function(e,t,n){for(var r,o=t.split("."),i=o.length-1,l=-1;++l<i;)r=o[l],null==e[r]&&(e[r]={}),e=e[r];e[o[l]]=n},obj_extend=function(e,t){if(null==t)return e||{};if(null==e)return obj_create(t);for(var n in t)e[n]=t[n];return e},obj_create=Object.create||function(e){var t=function(){};return t.prototype=e,new t}}();var arr_remove,arr_each,arr_indexOf,arr_contains;!function(){arr_remove=function(e,t){var n=e.indexOf(t);return-1===n?!1:(e.splice(n,1),!0)},arr_each=function(e,t,n){e.forEach(t,n)},arr_indexOf=function(e,t){return e.indexOf(t)},arr_contains=function(e,t){return-1!==e.indexOf(t)}}();var fn_proxy,fn_apply,fn_doNothing;!function(){fn_proxy=function(e,t){return function(){return fn_apply(e,t,arguments)}},fn_apply=function(e,t,n){var r=n.length;return 0===r?e.call(t):1===r?e.call(t,n[0]):2===r?e.call(t,n[0],n[1]):3===r?e.call(t,n[0],n[1],n[2]):4===r?e.call(t,n[0],n[1],n[2],n[3]):e.apply(t,n)},fn_doNothing=function(){return!1}}();var class_create;!function(){class_create=function(){var e=_Array_slice.call(arguments),t=e.pop();null==t&&(t={});for(var n,r,o,i=t.hasOwnProperty("constructor")?t.constructor:null,l=e.length;--l>-1;){r=e[l],"function"==typeof r&&(null==i&&null==n&&(n=r),r=r.prototype);for(var u in r)null==t[u]&&(t[u]=r[u]);null==o&&(o=r)}return t.Parent=o,null==i&&(i=function(){var e=_Array_slice.call(arguments);return n?n.apply(this,e):void 0}),i.prototype=t,i}}();var _Array_slice=Array.prototype.slice,_Array_splice=Array.prototype.splice,_Array_indexOf=Array.prototype.indexOf,_Object_create=obj_create,_Object_hasOwnProp=Object.hasOwnProperty,__rgxEscapedChar={"'":/\\'/g,'"':/\\"/g,"{":/\\\{/g,">":/\\>/g,";":/\\>/g},__cfg={allowCache:!0},attr_extend;!function(){attr_extend=function(e,t){if(null==e)return null==t?{}:obj_create(t);if(null==t)return e;var n;for(n in t)"class"!==n||"string"!=typeof e[n]?e[n]=t[n]:e[n]+=" "+t[n];return e}}(),Template.prototype={skipWhitespace:function(){for(var e=this.template,t=this.index,n=this.length;n>t&&!(e.charCodeAt(t)>32);t++);return this.index=t,this},skipToAttributeBreak:function(){var e,t=this.template,n=this.index,r=this.length;do if(e=t.charCodeAt(++n),35===e&&123===t.charCodeAt(n+1))return this.index=n,this.sliceToChar("}"),void this.index++;while(46!==e&&35!==e&&62!==e&&123!==e&&32!==e&&59!==e&&r>n);this.index=n},sliceToChar:function(e){for(var t,n,r=this.template,o=this.index,i=o,l=!1;(n=r.indexOf(e,o))>-1&&(o=n,92===r.charCodeAt(o-1));)l=!0,o++;return t=r.substring(i,o),this.index=o,l?t.replace(__rgxEscapedChar[e],e):t}};var arr_pushMany;!function(){arr_pushMany=function(e,t){if(null!=t&&null!=e)for(var n=e.length,r=t.length,o=-1;++o<r;)e[n+o]=t[o]}}();var obj_getPropertyEx,obj_toDictionary;!function(){function e(e,t,n,r){for(var o=e;r>n&&null!=o;)o=o[t[n]],n++;return o}obj_getPropertyEx=function(t,n,r,o){if("."===t)return n;var i,l=t.split("."),u=n,s=-1,a=l.length,c=l[0];for("$c"===c?(u=o,s++):"$a"===c?(u=o&&o.attr,s++):"$u"===c?(u=customUtil_$utils,s++):"$ctx"===c&&(u=r,s++),i=s;null!=u&&++s<a;)u=u[l[s]];if(null==u&&-1===i)for(var f;null!=o;){if(f=o.scope,null!=f&&(u=e(f,l,0,a),null!=u))return u;o=o.parent}return u},obj_toDictionary=function(e){var t,n=[],r=0;for(t in e)n[r++]={key:t,value:e[t]};return n}}();var listeners_on,listeners_off,listeners_emit;!function(){listeners_on=function(t,n){(e[t]||(e[t]=[])).push(n)},listeners_off=function(t,n){return null==n?void(e[t]=[]):void arr_remove(e[t],n)},listeners_emit=function(t){var n=e[t];if(null!=n)for(var r=n.length,o=-1,i=_Array_slice.call(arguments,1);++o<r;)n[o].apply(null,i)};var e={compoCreated:null,error:null}}();var throw_,parser_error,parser_warn,log,log_warn,log_error;!function(){function e(e){function r(n,r,o){this.type="Parser"+e,this.message=n,this.original=r,this.index=o,this.stack=t()}return n(r,Error),r}function t(){var e=(new Error).stack;return null==e?null:e.split("\n").slice(6,8).join("\n")}function n(e,t){Object.create&&(e.prototype=Object.create(t.prototype))}function r(e,t,n,r,s,a,c){t+=o(s)+i(n,r,c)+"\nParser "+l(a)+u(e,n,r);var p="error"===e?f:h;return new p(t,n,r)}function o(e){return null==e?"":("number"==typeof e&&(e=String.fromCharCode(e))," Invalid token: `"+e+"`")}function i(e,t,n){if(null==t||!n)return"";var r=s(e,t),o=r[1],i=r[2];return" at "+(n||"")+"("+o+":"+i+")"}function l(e){var t={2:"tag",3:"tag",5:"attribute key",6:"attribute value",8:"literal","var":"VarStatement",expr:"Expression"};return null==e||null==t[e]?"":' on "'+t[e]+'"'}function u(e,t,n){if(null==n)return"";var r=s(t,n),o=r[0],i=r[1],l=r[2];return null==n?"":" at ("+i+":"+l+") \n"+c(o,i,l)}function s(e,t){var n=e.substring(0,t).split("\n"),r=n.length,o=t+1-n.slice(0,r-2).join("\n").length;return[e.split("\n"),r,o]}if(throw_=function(e){log_error(e),listeners_emit("error",e)},parser_error=function(e,t,n,o,i,l){var u=r("error",e,t,n,o,i,l);log_error(u.message),log_warn(u.stack),listeners_emit("error",u)},parser_warn=function(e,t,n,o,i,l){var u=r("warn",e,t,n,o,i,l);log_warn(u.message),log(u.stack),listeners_emit("error",u)},"undefined"==typeof console)log=log_warn=log_error=function(){};else{var a=Function.prototype.bind;log=a.call(console.warn,console),log_warn=a.call(console.warn,console,"MaskJS [Warn] :"),log_error=a.call(console.error,console,"MaskJS [Error] :")}var c,f=e("Error"),h=e("Warning");!function(){function e(e,t){for(var n=String(e);n.length<t;)n+=" ";return n}function t(e,t){for(var n="";--t>-1;)n+=e;return n}c=function(n,r,o){var i=3,l=2,u=r-1-i,s=u+i+l,a="";0>u&&(u=0),s>n.length&&(s=n.length);for(var c,f=String(s).length;s>u;u++)a&&(a+="\n"),c=e(u+1,f),a+=c+"|"+n[u],u+1===r&&(a+="\n"+t(" ",f+1),a+=n[u].substring(0,o-2).replace(/[^\s]/g," "),a+="^");return a}}()}();var custom_Utils,custom_Statements,custom_Attributes,custom_Tags,custom_Tags_defs,custom_Parsers,customUtil_get,customUtil_$utils,customUtil_register,customTag_register;!function(){var e={div:null,span:null,input:null,button:null,textarea:null,select:null,option:null,h1:null,h2:null,h3:null,h4:null,h5:null,h6:null,a:null,p:null,img:null,table:null,td:null,tr:null,pre:null,ul:null,li:null,ol:null,i:null,em:null,b:null,br:null,strong:null,form:null,audio:null,video:null,canvas:null,svg:null},t={"class":null,id:null,style:null,name:null,type:null,value:null,required:null};custom_Utils={expression:function(e,t,n,r,o){return ExpressionUtil.eval(e,t,n,o)}},custom_Statements={},custom_Attributes=obj_create(t),custom_Tags=obj_create(e),custom_Parsers=obj_create(e),custom_Tags_defs={},function(e){function t(e){function t(e,t){this.tagName=e.tagName,this.attr=e.attr,this.expression=e.expression,this.nodes=e.nodes,this.nextSibling=e.nextSibling,this.parent=t,this.components=null}return t.prototype=e,t}customTag_register=function(n,r){null!=r&&"object"==typeof r&&(r.__Ctor=t(r)),e[n]=r}}(custom_Tags),function(e){function t(e){if("parsed"===e.arguments)return r(e.process);var t=fn_proxy(e.process||n,e);return t.util=e,t}function n(e,t,n,r,o,i,l){return"node"===l?(this.nodeRenderStart(e,t,n,r,o),this.node(e,t,n,r,o)):(this.attrRenderStart(e,t,n,r,o,i),this.attr(e,t,n,r,o,i))}function r(e){return function(t,n,r,o,i){var l=ExpressionUtil.evalStatements(t,n,r,i);return e.apply(null,l)}}customUtil_$utils={},customUtil_register=function(n,r){return is_Function(r)?void(e[n]=r):(e[n]=t(r),void("parsed"===r.arguments&&(customUtil_$utils[n]=r.process)))},customUtil_get=function(t){return null!=t?e[t]:e}}(custom_Utils)}();var ExpressionUtil=function(){function e(e,t){null==t&&(t=!1),n=e,o=0,i=e.length,r=new et;var l,C,W=r,G=Y;e:for(;;)if(i>o&&(l=n.charCodeAt(o))<33)o++;else{if(o>=i)break;if(C=_t(l),null==C&&i>o)break;if(C===L){if(t===!0)return[r,o];break}if(t===!0){var K=W.parent;if(null!=K&&K.type===H&&null==K.parent&&C===P)return[r,o]}if(C===L)break;switch(C){case j:W=ht(W,new tt(W)),W=ht(W,new et(W)),o++;continue;case N:var Z=H;G===Q&&(G=Y,Z=B);do W=W.parent;while(null!=W&&W.type!==Z);if(Z===H&&(W=W.parent),null==W){dt("OutOfAst Exception",l);break e}o++;continue;case O:W=ht(W,new ot(W)),C=U,o++;break;case S:for(;null!=W&&W.type!==J;)W=W.parent;o++;continue;case E:if(G!==Q){G=Y;do W=W.parent;while(null!=W&&W.type!==H&&W.type!==J);if(o++,null==W){dt("Unexpected comma",l);break e}if(W.type===J){C=U;break}continue}do W=W.parent;while(null!=W&&W.type!==B);if(null==W){dt("OutOfAst Exception",l);break e}W=W.newArgument(),o++;continue;case T:r=new ct(r),W=r.case1,o++;continue;case R:W=r.case2,o++;continue;case D:l=n.charCodeAt(o+1),l>=48&&57>=l?C=F:(C=W.type===H?P:M,o++);break;case A:if(W.type===z||W.type===V||W.type===q){W=ht(W,new st(W)),W=W.getBody(),o++;continue}W=ht(W,new rt(W)),W=W.body,o++;continue;case k:do W=W.parent;while(null!=W&&W.type!==V&&W.type!==X);o++;continue}if(W.type===H&&(W=ht(W,new tt(W))),u!==C&&d!==C||null!=W.body)switch(C){case u:case s:case c:case a:case f:case p:case h:case g:case m:case v:case y:case _:case b:case x:case w:for(;W&&W.type!==$;)W=W.parent;if(null==W.body)return dt("Unexpected operator",l);W.join=C;do W=W.parent;while(null!=W&&W.type!==H);if(null==W)return dt("Unexpected operator",l);o++;continue;case I:case F:if(null!=W.body&&null==W.join)return dt("Directive expected",l);I===C&&(o++,ht(W,new nt(mt(l))),o++),F===C&&ht(W,new nt(vt(l)));continue;case P:case M:var pt=yt();if(C===P&&("null"===pt&&(pt=null),"false"===pt&&(pt=!1),"true"===pt&&(pt=!0),"string"!=typeof pt)){ht(W,new nt(pt));continue}for(;i>o;){l=n.charCodeAt(o);{if(!(33>l))break;o++}}if(40===l){G=Q,o++;var bt=ht(W,new it(W,pt));W=bt.newArgument();continue}var xt=C===P?lt:ut;W=ht(W,new xt(W,pt));break;case U:if(125===gt())continue;var wt=yt();if(58!==gt())return dt("Object parser. Semicolon expeted",l);o++,W=W.nextProp(wt),C=P;continue}else W=ht(W,new at(W,C)),o++}return null==W.body&&W.type===$?dt("Unexpected end of expression",l):(ft(r),r)}function t(n,r,o,i){var C,j;if(null==n)return null;if("."===n)return r;if(j="string"==typeof n?l.hasOwnProperty(n)===!0?l[n]:l[n]=e(n):n,null==j)return null;var N,A,k,O=j.type;if(H===O){var S,E;e:for(N=0,k=j.body.length;k>N;N++)if(A=j.body[N],S=t(A,r,o,i),null!=E&&null!=E.join){if(E.join===p)if(C)C=S;else for(;k>N&&j.body[N].join!==h;N++);if(E.join===h){if(C)break e;if(S){C=S;break e}}switch(E.join){case u:C-=S;break;case s:C+=S;break;case a:C/=S;break;case c:C*=S;break;case f:C%=S;break;case v:C=C!=S;break;case y:C=C!==S;break;case g:C=C==S;break;case m:C=C===S;break;case _:C=C>S;break;case b:C=C>=S;break;case x:C=S>C;break;case w:C=S>=C}E=A}else E=A,C=S}if($===O)return C=t(j.body,r,o,i),null==j.next?C:pt(j.next,C);if(W===O)return j.body;if(X===O){var D=j.body.body,T=D.length,N=-1;for(C=new Array(T);++N<T;)C[N]=t(D[N],r,o,i);return C}if(J===O){C={};var R=j.props;for(var L in R)C[L]=t(R[L],r,o,i);return C}if(z===O||B===O||V===O||q===O)return pt(j,r,o,i);if(G===O)switch(C=t(j.body,r,o,i),j.prefix){case u:C=-C;break;case d:C=!C}return K===O&&(C=t(j.body,r,o,i),C=t(C?j.case1:j.case2,r,o,i)),C}var n,r,o=0,i=0,l={},u="-",s="+",a="/",c="*",f="%",h="||",p="&&",d="!",g="==",m="===",v="!=",y="!==",_=">",b=">=",x="<",w="<=",C=".",j=20,N=21,A=22,k=23,O=24,S=25,E=26,D=27,T=28,R=29,L=30,P=31,M=32,I=33,F=34,U=35,H=1,$=2,z=3,B=4,q=5,V=6,W=7,J=10,X=11,G=12,K=13,Y=1,Q=2,Z={};Z[C]=1,Z[a]=2,Z[c]=2,Z[u]=3,Z[s]=3,Z[_]=4,Z[b]=4,Z[x]=4,Z[w]=4,Z[g]=5,Z[m]=5,Z[v]=5,Z[y]=5,Z[p]=6,Z[h]=6;var et,tt,nt,rt,ot,it,lt,ut,st,at,ct;!function(){et=function(e){this.parent=e,this.type=H,this.body=[],this.join=null},tt=function(e){this.parent=e},tt.prototype={constructor:tt,type:$,join:null,body:null},nt=function(e){this.type=W,this.body=e,this.join=null},rt=function(e){this.type=X,this.parent=e,this.body=new et(this)},ot=function(e){this.type=J,this.parent=e,this.props={}},ot.prototype={nextProp:function(e){var t=new tt(this);return this.props[e]=t,t}},it=function(e,t){this.parent=e,this.type=B,this.body=t,this.arguments=[],this.next=null},it.prototype={constructor:it,newArgument:function(){var e=new et(this);return this.arguments.push(e),e}},lt=function(e,t){this.type=z,this.parent=e,this.body=t,this.next=null},ut=function(e,t){this.type=q,this.parent=e,this.body=t,this.next=null},st=function(e){this.parent=e,this.body=new tt(this),this.body.body=new et(this.body),this.next=null},st.prototype={type:V,getBody:function(){return this.body.body}},at=function(e,t){this.parent=e,this.prefix=t},at.prototype={constructor:at,type:G,body:null},ct=function(e){this.body=e,this.case1=new et(this),this.case2=new et(this)},ct.prototype={constructor:ct,type:K,case1:null,case2:null}}();var ft,ht;!function(){function e(e){if(0===e.length)return null;var t=new et(e[0].parent);return t.join=e[e.length-1].join,t.body=e,t}ht=function(e,t){switch(e.type){case H:return e.body.push(t),t;case $:if(t.type===q||t.type===V)return e.next=t;case G:return e.body=t;case z:case B:case q:case V:return e.next=t}return dt("Invalid expression")},ft=function(t){if(t.type!==H)return void(null!=t.body&&"object"==typeof t.body&&ft(t.body));for(var n,r,o,i=t.body,l=0,u=i.length;u>l;l++)ft(i[l]);for(l=1;u>l&&(n=i[l],r=i[l-1],!(Z[r.join]>Z[n.join]));l++);if(l!==u){for(o=[i[0]],l=1;u>l;l++){n=i[l],r=i[l-1];var s=Z[r.join];if(s>Z[n.join]&&u-1>l){for(var a,c,f=l;++l<u&&(a=i[l].join,null!=a)&&!(s<=Z[a]););c=i.slice(f,l+1),n=e(c),ft(n)}o.push(n)}t.body=o}}}();var pt,dt;!function(){dt=function(e,t){return parser_error(e,n,o,t,"expr")},pt=function(e,n,r,o){var i,l,u,s,a,c=e,f=e.body;if("$c"===f){l=o;var h=c.next,p=null!=h&&h.body;if(null!=p&&null==l[p]){if(h.type===B&&"function"==typeof Compo.prototype[p])i=o,l=Compo.prototype[p],c=h;else for(;;){if(l=l.parent,null==l)break;if(null!=l[p]){i=l,l=l[p],c=h;break}}null==l&&(f="$c."+p,c=h)}}else if("$a"===f)l=o&&o.attr;else if("$u"===f)l=customUtil_$utils;else if("$ctx"===f)l=r;else if(null!=n&&(i=n,l=n[f]),null==l)for(;null!=o&&(i=o.scope,null!=i&&(l=i[f]),null==l);)o=o.parent;if(null==l)return(null==c||null!=c.next)&&log_warn("<mask:expression> Accessor error:",f),null;for(;;){if(c.type===B){for(u=[],s=-1,a=c.arguments.length;++s<a;)u[s]=t(c.arguments[s],n,r,o);l=l.apply(i,u)}if(null==l||null==c.next)break;if(c=c.next,f=c.type===V?t(c.body,n,r,o):c.body,i=l,l=l[f],null==l)break}return l}}();var gt,mt,vt,yt,_t;!function(){gt=function(){for(var e;i>o;){if(e=n.charCodeAt(o),e>32)return e;o++}return null},mt=function(e){for(var t,r,i=!1,l=39===e?"'":'"',u=o;(t=n.indexOf(l,o))>-1&&(o=t,92===n.charCodeAt(t-1));)i=!0,o++;return r=n.substring(u,o),i===!0&&(r=r.replace(__rgxEscapedChar[l],l)),r},vt=function(){for(var e,t,r=o;;){if(e=n.charCodeAt(o),46===e){if(t===!0)return dt("Invalid number",e),null;t=!0}if(!((e>=48&&57>=e||46===e)&&i>o))break;o++}return+n.substring(r,o)},yt=function(){var e,t=o,r=n.charCodeAt(o);if(34===r||39===r)return o++,e=mt(r),o++,e;for(;;){if(o===i)break;if(r=n.charCodeAt(o),36!==r&&95!==r){if(!(r>=48&&57>=r||r>=65&&90>=r||r>=97&&122>=r))break;o++}else o++}return n.substring(t,o)},_t=function(e){if(null==e&&o===i)return null;switch(e){case 40:return j;case 41:return N;case 123:return O;case 125:return S;case 91:return A;case 93:return k;case 44:return E;case 46:return D;case 59:return L;case 43:return s;case 45:return u;case 42:return c;case 47:return a;case 37:return f;case 61:return n.charCodeAt(++o)!==e?(dt("Assignment violation: View can only access model/controllers","="),null):n.charCodeAt(o+1)===e?(o++,m):g;case 33:return 61===n.charCodeAt(o+1)?(o++,61===n.charCodeAt(o+1)?(o++,y):v):d;case 62:return 61===n.charCodeAt(o+1)?(o++,b):_;case 60:return 61===n.charCodeAt(o+1)?(o++,w):x;case 38:return n.charCodeAt(++o)!==e?(dt("Not supported: Bitwise AND",e),null):p;case 124:return n.charCodeAt(++o)!==e?(dt("Not supported: Bitwise OR",e),null):h;case 63:return T;case 58:return R}return e>=65&&90>=e||e>=97&&122>=e||95===e||36===e?P:e>=48&&57>=e?F:34===e||39===e?I:(dt("Unexpected or unsupported directive",e),null)}}();var bt;return function(){function n(e,l,u,s){if(null==e)return null;var a,c,f=e.type;if(H===f)for(var h=e.body,p=h.length,d=-1;++d<p;)c=n(h[d],l,u,s),a=o(a,c);if(z===f||q===f||V===f){for(var g,m=e.body,v=e.next;null!=v;){if(g=v.type,B===g)return n(v,l,u,s);if(z!==g&&q!==g&&V!==g)return log_error("Ast Exception: next should be a symbol/function ref"),null;var y=g===V?t(v.body,l,u,s):v.body;if("string"!=typeof y)return log_warn("Can`t extract accessor name",m),null;m+="."+y,v=v.next}return m}switch(f){case $:case G:case K:c=n(e.body,l,u,s),a=o(a,c)}if(K===f&&(c=n(r.case1,l,u,s),a=o(a,c),c=n(r.case2,l,u,s),a=o(a,c)),B===f){for(var _=e.arguments,p=_.length,d=-1;++d<p;)c=n(_[d],l,u,s),a=o(a,c);c=null;var b=e;e:for(;b=b.parent;)switch(b.type){case z:case q:case V:c=b.body+(null==c?"":"."+c);break;case H:case $:break e;default:c=null;break e}null!=c&&(a=o(a,c)),e.next&&(c=n(e.next,l,u,s),a=o(a,{accessor:i(e),ref:c}))}return a}function o(e,t){if(null==e)return t;if(null==t)return e;if(("object"!=typeof e||null==e.length)&&(e=[e]),"object"!=typeof t||null==t.length)return-1===e.indexOf(t)&&e.push(t),e;for(var n=0,r=t.length;r>n;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function i(e){var t=e;e:for(;t.parent;){switch(t.parent.type){case H:case $:break e}t=t.parent}return l(t,e.next)}function l(e,t){if(e===t||null==e)return null;if("object"!=typeof e)return e;if(null!=e.length&&"function"==typeof e.splice){for(var n=[],r=0,o=e.length;o>r;r++)n[r]=l(e[r],t);return n}var i={};for(var u in e)null!=e[u]&&"parent"!==u&&(i[u]=l(e[u],t));return i}bt=function(t,r,o,i){return"string"==typeof t&&(t=e(t)),n(t,r,o,i)}}(),{parse:e,eval:t,varRefs:bt,evalStatements:function(n,r,o,i){for(var l=e(n).body,u=[],s=l.length,a=-1,c=new et;++a<s;)c.body.push(l[a]),null==l[a].join&&(u.push(t(c,r,o,i)),c.body.length=0);return u}}}(),Dom;!function(){function e(e){var t=this.nodes;if(null==t)return void(this.nodes=[e]);t.push(e);var n=t[t.length-2];n.nextSibling=e}function t(e,t){this.type=Dom.NODE,this.tagName=e,this.parent=t,this.attr={}}function n(e,t){this.content=e,this.parent=t}function r(e,t,n){this.tagName=e,this.parent=t,this.controller=n,this.attr={}}function o(){}var i=1,l=2,u=3,s=4,a=9,c=10,f=15;t.prototype={constructor:t,type:i,tagName:null,parent:null,attr:null,nodes:null,expression:null,appendChild:e,stringify:null,__single:null},n.prototype={type:l,content:null,parent:null},r.prototype={constructor:r,type:s,parent:null,attr:null,controller:null,nodes:null,components:null,model:null,modelRef:null},o.prototype={constructor:o,type:u,nodes:null,appendChild:e},Dom={NODE:i,TEXTNODE:l,FRAGMENT:u,COMPONENT:s,CONTROLLER:a,SET:c,STATEMENT:f,Node:t,TextNode:n,Fragment:o,Component:r}}(),function(){function e(e,t,n,r){function o(e){return ExpressionUtil.eval(e,t,n,r)}if(o(e.expression))return e.nodes;for(;;){if(e=e.nextSibling,null==e||"else"!==e.tagName)break;var i=e.expression;if(null==i||""===i||o(i))return e.nodes}return null}custom_Statements["if"]={getNodes:e,render:function(t,n,r,o,i,l){var u=e(t,n,r,i);null!=u&&builder_build(u,n,r,o,i,l)}}}(),function(){function e(e,n,r,o,i,l,u,s){builder_build(t(r,e,n[0],n[1],n[2],n[3]),o,i,l,u,s)}function t(e,t,o,i,l,u){return"of"===l?is_Array(t)===!1?(log_error("<ForStatement> Value is not enumerable",t),null):n(e,t,o,i,u):"in"===l?"object"!=typeof t?(log_warn("<ForStatement> Value is not an object",t),null):(is_Array(t)&&log_warn("<ForStatement> Consider to use `for..of` for Arrays"),r(e,t,o,i,u)):void 0}function n(e,t,n,r,i){for(var l,u=-1,s=t.length,a=new Array(s);++u<s;)l={},l[n]=t[u],r&&(l[r]=u),a[u]=o(p,e,l,u,n,i);return a}function r(e,t,n,r,i){var l,u,s,a=[],c=0;for(u in t)s=t[u],l={},l[n]=u,r&&(l[r]=s),a[c++]=o(d,e,l,u,r,i);return a}function o(e,t,n,r,o,l){return{type:Dom.COMPONENT,tagName:e,nodes:t,controller:i(e,n,r,o,l)}}function i(e,t,n,r,o){return{meta:{serializeScope:!0},compoName:e,scope:t,elements:null,propVal:r,key:n,expression:o,renderEnd:l,dispose:u,serializeScope:s}}function l(e){this.elements=e}function u(){this.elements&&(this.elements.length=0)}function s(e){var t=this,n=t.expression,r=t.key,o=t.propVal,i=e[o];return null!=i&&"object"==typeof i&&(e[o]="$ref:("+n+')."'+r+'"'),e}function a(e){g=e,v=e.length,m=0;var t,n,r,o,i;if(i=c(),40===i&&(o=!0,m++,c()),t=f(),i=c(),44===i){if(o!==!0)return h("Parenthese must be used in multiple var declarion");m++,c(),n=f()}if(o){if(i=c(),41!==i)return h("Closing parenthese expected");m++}i=c();var r;return 105===i&&110===g.charCodeAt(++m)&&(r="in"),111===i&&102===g.charCodeAt(++m)&&(r="of"),null==r?h("Invalid FOR statement. (in|of) expected"):(y[0]=t,y[1]=n,y[2]=r,y[3]=g.substring(++m),y)}function c(){for(var e;v>m;m++)if(e=g.charCodeAt(m),!(33>e))return e;return-1}function f(){for(var e,t=m;v>m;m++)if(e=g.charCodeAt(m),e>48&&57>e){if(t===m)return h("Variable name begins with a digit")}else if(!(36===e||95===e||e>=97&&122>=e||e>=65&&90>=e))break;return t===m?h("Variable declaration expected"):g.substring(t,m)}function h(e){throw new Error("<ForStatement parser> "+e+" `"+g.substring(m,20)+"`")}var p="for..of::item",d="for..in::item";custom_Statements["for"]={render:function(t,n,r,o,i,l){a(t.expression);var u=ExpressionUtil.eval(y[3],n,r,i);null!=u&&e(u,y,t.nodes,n,r,o,i,l)},build:e,parseFor:a,createForNode:o,getNodes:t,getHandler:function(e,t){return i(e,t)}},function(){function e(e){function t(){}return t.prototype={meta:{serializeScope:!0},serializeScope:s,type:Dom.COMPONENT,compoName:e,renderEnd:l,dispose:u},t}custom_Tags[p]=e(p),custom_Tags[d]=e(d)}();var g,m,v,y=["prop1","prop2","in|of","expression"]}(),function(){function e(e,n){for(var r=n.length,o=new Array(r),i=e.nodes,l=e.expression,u="."===l?'."':"("+e.expression+')."',s=0;r>s;s++)o[s]=t(i,n[s],u,s);return o}function t(e,t,r,o){return{type:Dom.COMPONENT,tagName:"each::item",nodes:e,controller:n(t,o,r)}}function n(e,t,n){return{compoName:"each::item",model:e,scope:{index:t},modelRef:n+t+'"',attr:null,meta:null}}custom_Statements.each={render:function(t,n,r,o,i,l){var u=ExpressionUtil.eval(t.expression,n,r,i);null!=u&&builder_build(e(t,u),u,r,o,i,l)}}}(),custom_Statements["with"]={render:function(e,t,n,r,o,i){var l=ExpressionUtil.eval(e.expression,t,n,o);builder_build(e.nodes,l,n,r,o,i)}},function(){function e(e,n,r,o,i){if(null==n)return null;for(var l,u,s,a,c=n.length,f=-1;++f<c;)if(l=n[f],"default"!==l.tagName)if("case"===l.tagName)if(u=l.expression){if(t(u,r,o,i)==e){s=l;break}}else log_warn("<mask:switch:case> Expression expected");else log_warn("<mask:switch> Case expected",l.tagName);else a=l;return null==s&&(s=a),null!=s?s.nodes:null}var t=ExpressionUtil.eval;custom_Statements["switch"]={render:function(n,r,o,i,l,u){var s=t(n.expression,r,o,l),a=e(s,n.nodes,r,o,l);null!=a&&builder_build(a,r,o,i,l,u)},getNodes:e}}(),function(){function e(e){this.parent=e,this.compoName="include",this.components=[],this.templates=null}custom_Statements.include={render:function(t,n,r,o,i,l){for(var u,s=ExpressionUtil.evalStatements(t.expression);null!=i&&(u=i.resource,null==u);)i=i.parent;var a=new e(i),c=Compo.pause(a,r);include.instance(u&&u.url).load.apply(u,s).done(function(e){a.templates=e.load,builder_build(t.nodes,n,r,o,a,l),c()})}}}(),custom_Statements["import"]={render:function(e,t,n,r,o,i){var l=e.expression,u=ExpressionUtil.evalStatements(l,t,n,o),s=u[0];if("string"!=typeof s)return void log_error("<mask:import> Invalid argument",l);for(;;){if("include"===o.compoName)break;if(o=o.parent,null==o)break}if(null!=o){var a=o.templates[s];null!=a&&builder_build(parser_parse(a),t,n,r,o,i)}}},custom_Tags["var"]=VarStatement,VarStatement.prototype={renderStart:function(e,t){var n,r,o=this.parent,i=o.scope;null==i&&(i=o.scope={}),this.model={};for(n in this.attr)r=ExpressionUtil.eval(this.attr[n],e,t,o),this.model[n]=i[n]=r;this.attr={}},onRenderStartClient:function(){var e=this.parent,t=e.scope;null==t&&(t=e.scope={});for(var n in this.model)t[n]=this.model[n]}},function(){function e(e,t){for(var n=0;n<e.length;n++)e[n].style.display=t?"":"none"}custom_Statements.visible={toggle:e,render:function(t,n,r,o,i,l){var u=[];builder_build(t.nodes,n,r,o,i,u),arr_pushMany(l,u);var s=ExpressionUtil.eval(t.expression,n,r,i);e(u,s)}}}();var parser_parse,parser_parseAttr,parser_ensureTemplateFunction,parser_setInterpolationQuotes,parser_cleanObject,Parser;!function(e,t,n){function r(e){for(var t=-1;-1!==(t=e.indexOf(a,t))&&e.charCodeAt(t+1)!==p;)t++;if(-1===t)return e;for(var n,r=e.length,i=[],l=0,u=0;;){if(n=o(e,t+2,r,p,d),-1===n)break;for(i[u++]=l===t?"":e.substring(l,t),i[u++]=e.substring(t+2,n),l=t=n+1;-1!==(t=e.indexOf(a,t))&&e.charCodeAt(t+1)!==p;)t++;if(-1===t)break}return r>l&&(i[u]=e.substring(l)),e=null,function(e,t,n,r,o,l){if(null==e){for(var u,s="",h=i.length,p=-1;++p<h;)u=i[p],s+=p%2===1?a+c+u+f:u;return s}return util_interpolate(i,e,t,n,r,o,l)}}var o,i,l,u,s,a="~",c="[",f="]",h=126,p=91,d=93;!function(){o=function(e,t,n,r,o){for(var l,u=0,s=t;n>t;t++)if(l=e.charCodeAt(t),34!==l&&39!==l)if(l!==r){if(l===o&&-1===--u)return t}else u++;else t=i(e,t+1,n,34===l?'"':"'");return parser_warn("Group was not closed",e,s),n},l=function(e,t,n){for(var r;n>t;)if(r=e.charCodeAt(t),36!==r&&95!==r){if(!(r>=48&&57>=r||r>=65&&90>=r||r>=97&&122>=r))break;t++}else t++;return t},i=function(e,t,n,r){for(var o=t;-1!==(t=e.indexOf(r,t));){if(92!==e.charCodeAt(t-1))return t;t++}return parser_warn("Quote was not closed",e,o),n},u=function(e,t,n){for(;n>t;t++)if(e.charCodeAt(t)>32)return t;return t},s=function(e,t,n){for(;n>t;t++)if(e.charCodeAt(t)<33)return t;return t}}(),function(){function t(){var e=this.attr,t="var ";for(var n in e)"var "!==t&&(t+=","),t+=n+"="+e[n];return t+";"}custom_Parsers["var"]=function(n,r,u,s){var a,c,f=new e("var",s);f.stringify=t;for(var h,p=1,d=2,g=3,m=4,v=p;;)if(u>r&&(c=n.charCodeAt(r))<33)r++;else if(v!==p)if(v!==d)if(v!==g){if(v===m){if(44===c){v=p,r++;continue}break}}else{switch(a=r,r++,c){case 123:case 91:r=o(n,r,u,c,c+2);break;case 39:case 34:r=i(n,r,u,39===c?"'":'"');break;default:for(;u>r&&(c=n.charCodeAt(r),44!==c&&59!==c);)r++;r--}r++,f.attr[h]=n.substring(a,r),v=m}else{if(61!==c)return parser_error("Assignment expected",n,r,c,"var"),[f,r];v=g,r++}else a=r,r=l(n,r,u),h=n.substring(a,r),v=d;return[f,r]}}(),function(){function e(e){return function(n,r,i,l){var u=n.indexOf("{",r)+1,s=t(n.substring(r,u-1)),a=o(n,u,i,123,125),c=n.substring(u,a);return[new e(s,c,l),a+1]}}function t(e){var t=/(\w+)\s*\(([^\)]*)\)/.exec(e);if(null==t)return log_error("`slot` has invalid head syntax",e),null;var n=[t[1]];return n=n.concat(t[2].replace(/\s/g,"").split(","))}function n(e,t,n){this.name=e.shift(),this.args=e,this.body=t,this.fn=this.compile(),this.parent=n}n.prototype={type:Dom.COMPONENT,controller:null,elements:null,model:null,stringify:function(){return this.tagName+this.name+"("+this.args.join(",")+") {"+this.body+"}"},compile:function(){var e=_Array_slice.call(this.args);return e.push(this.body),new(Function.bind.apply(Function,[null].concat(e)))},render:function(){}};var r=class_create(n,{tagName:"slot",render:function(e,t,n,r){var o=r.slots;null==o&&(o=r.slots={}),o[this.name]=this.fn}}),i=class_create(n,{tagName:"event",render:function(e,t,n){n.addEventListener(this.name,this.fn,!1)}});custom_Parsers.slot=e(r),custom_Parsers.event=e(i)}(),function(){function e(e,r,o){null!=e.scoped&&(r=t(r,o)),r=n(r,o),this.content=parser_ensureTemplateFunction(r),this.parent=o,this.attr=e}custom_Parsers.style=function(t,n,r,i){var l=t.indexOf("{",n)+1,u=parser_parseAttr(t,n,l-1),s=o(t,l,r,123,125),a=t.substring(l,s);if(null!=u.self){var c=i.attr.style;return i.attr.style=parser_ensureTemplateFunction((c||"")+a),[null,s+1]}return[new e(u,a,i),s+1]},e.prototype={tagName:"style",type:Dom.COMPONENT,controller:null,elements:null,model:null,stringify:function(){return"style {"+this.getStyle()+"}"},render:function(e,t,n,r){var o=document.createElement("style");o.textContent=this.getStyle(e,t,o,r);var i,l;for(i in this.attr)l=this.attr[i],null!=l&&o.setAttribute(i,l);n.appendChild(o)},getStyle:function(e,t,n,r){return is_Function(this.content)?this.content("node",e,t,n,r):this.content}};var t,n;!function(){function e(e){if(null==e)return log_warn('"style" should be inside elements node'),"";var t=e.attr.id;return null==t&&(t=e.attr.id="scoped__css__"+ ++r),"#"+t}var r=0,o=/^([\s]*)([^\{\}]+)\{/gm,i=/^([\s]*):host\s*(\(([^)]+)\))?\s*\{/gm;t=function(t,n){var r;return t=t.replace(o,function(t,o,i){if(-1!==i.indexOf(":host"))return t;null==r&&(r=e(n));for(var l=i.split(","),u=l.length,s=0;u>s;s++)l[s]=r+" "+l[s];return i=l.join(","),o+i+"{"})},n=function(t,n){var r;return t=t.replace(i,function(t,o,i,l){return o+(r||(r=e(n)))+(l||"")+"{"})}}()}();var g=2,m=3,v=5,y=6,_=7,b=8,x=9;Parser={parse:function(i){var l,u,s,a,c,f,w,C,j=new n,N=j,A=g,k=m,O=0,S=i.length;e:for(;;)if(S>O&&(f=i.charCodeAt(O))<33)O++;else{if(47===f){if(C=i.charCodeAt(O+1),47===C){for(O++;10!==f&&13!==f&&S>O;)f=i.charCodeAt(++O);continue}if(42===C){O=i.indexOf("*/",O+2)+2,1===O&&(log_warn("<mask:parse> block comment has no end"),O=S);continue}}if(k===v&&(null!=l&&(j.attr["class"]=r(l),l=null),null!=s&&(j.attr[s]=s,s=null,u=null)),null!=u){if(A===v)null==s?s=u:a=u,null!=s&&null!=a&&("class"!==s?j.attr[s]=a:l=null==l?a:l+" "+a,s=null,a=null);
else if(k===m){if(null!=custom_Parsers[u]){var E=custom_Parsers[u](i,O,S,j),D=E[0];null!=D&&j.appendChild(D),O=E[1],A=g,u=null;continue}c=new e(u,j),j.appendChild(c),j=c,A=v}else if(k===b){if(c=new t(u,j),j.appendChild(c),j.__single===!0)do j=j.parent;while(null!=j&&null!=j.__single);A=g}u=null}if(O>=S){A===v&&(null!=l&&(j.attr["class"]=r(l)),null!=s&&(j.attr[s]=s)),f=null;break}if(A===x){for(j=j.parent;null!=j&&null!=j.__single;)j=j.parent;A=g}switch(f){case 123:k=A,A=g,O++;continue;case 62:k=A,A=g,O++,j.__single=!0;continue;case 59:if(null!=j.nodes){O++;continue}case 125:125!==f||A!==m&&A!==v||O--,O++,k=A,A=x;continue;case 39:case 34:A===y?A=v:k=A=b,O++;var T=!1,R=!1,L=39===f?"'":'"';for(w=O;(O=i.indexOf(L,O))>-1&&92===i.charCodeAt(O-1);)T=!0,O++;-1===O&&(parser_warn("Literal has no ending",i,w),O=S),O===w&&(C=i.charCodeAt(O+1),(124===C||C===f)&&(R=!0,w=O+2,O=i.indexOf((124===C?"|":L)+L+L,w),-1===O&&(O=S))),u=i.substring(w,O),T===!0&&(u=u.replace(__rgxEscapedChar[L],L)),(A!==v||"class"!==s)&&(u=r(u)),O+=R?3:1;continue}if(A===g){if(k=m,A=m,46===f||35===f){u="div";continue}}else if(A===v)if(46===f)O++,s="class",A=_;else if(35===f)O++,s="id",A=_;else{if(61===f){O++,A=y,k===m&&null==s&&parser_warn("Unexpected tag assignment",i,O,f,A);continue}if(40===f){w=1+O,O=1+o(i,w,S,f,41),j.expression=i.substring(w,O-1),j.type=Dom.STATEMENT;continue}if(null!=s){u=s;continue}}(A===y||A===_)&&(k=A,A=v);var P=null;for(w=O;S>O;){if(f=i.charCodeAt(O),f===h&&i.charCodeAt(O+1)===p){P=!0,++O;do f=i.charCodeAt(++O);while(f!==d&&S>O)}if(39===f||34===f||47===f||60===f||44===f){parser_warn("",i,O,f,A);break e}if(k!==y&&(46===f||35===f))break;if(33>f||61===f||62===f||59===f||40===f||123===f||125===f)break;O++}if(u=i.substring(w,O),""===u){parser_warn("String expected",i,O,f,A);break}if(P===!0){if(A===m){parser_warn("Invalid interpolation (in tag name)",i,O,u,A);break}if(A===v)if("id"===s||k===y)u=r(u);else if("class"!==s){parser_warn("Invalid interpolation (in attr name)",i,O,u,A);break}}}f!==f&&parser_warn("IndexOverflow",i,O,f,A);var M=j.parent;null!=M&&M!==N&&M.__single!==!0&&null!=j.nodes&&parser_warn("Tag was not closed: "+j.tagName,i);var I=N.nodes;return null!=I&&1===I.length?I[0]:N},cleanObject:function(e){if(e instanceof Array){for(var t=0;t<e.length;t++)this.cleanObject(e[t]);return e}return delete e.parent,delete e.__single,null!=e.nodes&&this.cleanObject(e.nodes),e},setInterpolationQuotes:function(e,t){return e&&2===e.length?t&&1===t.length?(h=e.charCodeAt(0),p=e.charCodeAt(1),d=t.charCodeAt(0),a=e[0],c=e[1],void(f=t)):void log_error("Interpolation End must be of 1 Character"):void log_error("Interpolation Start must contain 2 Characters")},ensureTemplateFunction:r},parser_parse=Parser.parse,parser_ensureTemplateFunction=Parser.ensureTemplateFunction,parser_cleanObject=Parser.cleanObject,parser_setInterpolationQuotes=Parser.setInterpolationQuotes,parser_parseAttr=function(e,t,n){for(var r,o,l={},a=t;n>a&&(a=u(e,a,n),a!==n);){for(t=a;n>a&&(o=e.charCodeAt(a),!(61===o||33>o));a++);if(r=e.substring(t,a),a=u(e,a,n),a===n){l[r]=r;break}61===e.charCodeAt(a)?(a=t=u(e,a+1,n),o=e.charCodeAt(a),34!==o&&39!==o?(a=s(e,a,n),l[r]=e.substring(t,a)):(a=i(e,a+1,n,39===o?"'":'"'),l[r]=e.substring(t+1,a),a++)):l[r]=r}return l}}(Dom.Node,Dom.TextNode,Dom.Fragment,Dom.Component);var builder_componentID=0,builder_build;!function(e,t,n){function r(e,t,n,r,i){var l=r.appendChild(document.createComment(""));return function(){return o(e,t,n,l,i)}}function o(t,n,r,o,i){null!=t.tagName&&t.tagName!==t.compoName&&(t.nodes={tagName:t.tagName,attr:t.attr,nodes:t.nodes,type:1}),null!=t.model&&(n=t.model);var l=t.nodes,u=[];if(null!=l){for(var s=l instanceof Array,a=s===!0?l.length:1,c=0,f=null,h=document.createDocumentFragment();a>c;c++)f=s===!0?l[c]:l,builder_build(f,n,r,h,t,u);o.parentNode.insertBefore(h,o)}if(null==t.tagName){var p,d,g=t.handlers&&t.handlers.attr;for(d in t.attr)p=null,g&&is_Function(g[d])&&(p=g[d]),null==p&&is_Function(e[d])&&(p=e[d]),null!=p&&p(o,t.attr[d],n,r,u[0],t)}if(is_Function(t.renderEnd)&&t.renderEnd(u,n,r,o.parentNode),null!=i&&i!==u)for(var m=i.length,v=u.length,y=-1;++y<v;)i[m+y]=u[y]}function i(e,t){var n=e.components;return null==n?void(e.components=[t]):void n.push(t)}var l,u=function(){var e=function(e){return function(t,n){t.appendChild(e.createTextNode(n))}}(document);return function(t,n,r,o,i){var l=t.content;if(is_Function(l)){var u=l("node",n,r,o,i);if("string"==typeof u)return void e(o,u);for(var s,a="",c=u.length,f=0;c>f;f++)if(s=u[f],"object"!=typeof s)a+=s;else{if(""!==a&&(e(o,a),a=""),null==s.nodeType){a+=s.toString();continue}o.appendChild(s)}return void(""!==a&&e(o,a))}e(o,l)}}(),s=function(){var t=function(e){return function(t){try{return e.createElement(t)}catch(n){return log_error(t,"element cannot be created. If this should be a custom handler tag, then controller is not defined"),null}}}(document);return function(n,r,o,i,l,u){var s=n.tagName,a=n.attr,c=t(s);if(null!=c){null!=u&&(u.push(c),a["x-compo-id"]=l.ID),null!=i&&i.appendChild(c);var f,h;for(f in a)is_Function(a[f])?(h=a[f]("attr",r,o,c,l,f),h instanceof Array&&(h=h.join(""))):h=a[f],h&&(is_Function(e[f])?e[f](n,h,r,o,c,l,i):c.setAttribute(f,h));return c}}}();!function(){function e(e,t,n,o,l,u,s){var a,c;e.ID=++builder_componentID,e.attr=a=attr_extend(e.attr,t.attr),e.parent=u,e.expression=t.expression,null==e.compoName&&(e.compoName=t.tagName),null==e.model&&(e.model=n),null==e.nodes&&(e.nodes=t.nodes);for(c in a)"function"==typeof a[c]&&(a[c]=a[c]("attr",n,o,l,u,c));return listeners_emit("compoCreated",e,n,o,l),is_Function(e.renderStart)&&e.renderStart(n,o,l),i(u,e),e.async===!0?(e.await(r(e,n,o,l,s)),null):(null!=e.tagName&&(e.nodes={tagName:e.tagName,attr:e.attr,nodes:e.nodes,type:1}),"function"==typeof e.render?(e.render(e.model,o,l),null):e)}function n(e,t,n,r,o,l,u){var s,a,c,f=e.__Ctor,h=!1;if(null!=f)c=new f(t,l);else{c=e;for(var p in t)c[p]=t[p];c.parent=l}var d=c.attr;if(null!=d)for(var p in d)"function"==typeof d[p]&&(d[p]=d[p]("attr",n,r,o,l,p));is_Function(c.renderStart)&&c.renderStart(n,r,o,l,u),i(l,c);var g=l.components.length-1;return is_Function(c.render)&&(h=!0,s=c.render(n,r,o,l,u),arr_pushMany(u,s),is_Function(c.renderEnd)&&(a=c.renderEnd(s,n,r,o,l),null!=a&&(l.components[g]=a))),h?null:c}function o(e,t,n,r,o,l){e.ID=++builder_componentID,i(o,e),null==e.model&&(e.model=t);var u=e.elements=[];return e.render?e.render(e.model,n,r,o,u):builder_build(e.nodes,e.model,n,r,e,u),null!=l&&0!==u.length&&arr_pushMany(l,u),null}l=function(r,i,l,u,s,a){var c,f=r.tagName;if(null!=r.controller&&(c=r.controller),null==c&&(c=t[f]),null==c)return o(r,i,l,u,s,a);var h,p=!1;"function"==typeof c?h=new c(r,i,l,u,s):(h=c,p=!0);var d=p?n:e;return d(h,r,i,l,u,s,a)}}(),builder_build=function(r,o,i,a,c,f){if(null==r)return a;var h,p,d,g,m=r.type;if(null==c&&(c=new n),null==m&&(r instanceof Array?m=10:null!=r.tagName?m=1:null!=r.content&&(m=2)),1===m&&null!=t[r.tagName]&&(m=4),null==a&&1!==m&&(a=document.createDocumentFragment()),2===m)return u(r,o,i,a,c),a;if(10===m){for(d=0,g=r.length;g>d;d++)builder_build(r[d],o,i,a,c,f);return a}var v=r.tagName;if("else"===v)return a;if(15===m){var y=custom_Statements[v];if(null==y){if(null==t[v])return log_error("<mask: statement is undefined>",v),a;m=4}if(15===m)return y.render(r,o,i,a,c,f),a}if(1===m&&(a=s(r,o,i,a,c,f),f=null),4===m){if(c=l(r,o,i,a,c,f),null==c)return a;h=[],r=c,c.model!==o&&null!=c.model&&(o=c.model)}var _=r.nodes;if(null!=_){null!=f&&null==h&&(h=f);for(var b=_ instanceof Array,x=b===!0?_.length:1,w=0,C=null;x>w;w++)C=b===!0?_[w]:_,builder_build(C,o,i,a,c,h)}if(4===m){if(null==r.tagName&&"%"!==r.compoName){var j,N,p,A=r.handlers&&r.handlers.attr;for(p in r.attr)N=r.attr[p],null!=N&&(j=null,null!=A&&is_Function(A[p])&&(j=A[p]),null==j&&null!=e[p]&&(j=e[p]),null!=j&&j(r,N,o,i,h[0],c))}is_Function(r.renderEnd)&&r.renderEnd(h,o,i,a)}return null!=f&&null!=h&&f!==h&&arr_pushMany(f,h),a}}(custom_Attributes,custom_Tags,Dom.Component);var mask_run;!function(){mask_run=function(){var e,t,n,r,o,i,l=_Array_slice.call(arguments);for(r=l.length,o=-1;++o<r;)i=l[o],i instanceof Node?e=i:is_Function(i)?n=i:is_Object(i)&&(t=i);null==e&&(e=document.body);var u=is_Function(n)?new n:new Compo;u.ID=++builder_componentID,null==t&&(t=u.model||{});var s,a=_Array_slice.call(document.getElementsByTagName("script")),c=!1;for(r=a.length,o=-1;++o<r;)if(s=a[o],"text/mask"===s.getAttribute("type")&&"true"===s.getAttribute("data-run")){var f=builder_build(parser_parse(s.textContent),t,{},null,u);s.parentNode.insertBefore(f,s),c=!0}return c===!1&&log_warn("No blocks found: <script type='text/mask' data-run='true'>...</script>"),is_Function(u.renderEnd)&&u.renderEnd(e,t),Compo.signal.emitIn(u,"domInsert"),u}}();var mask_merge;!function(){function e(e,o,i,u){if(null==e)return null;if(is_Array(e))return t(e,o,i,u);switch(e.type){case x:return l(e,o,i);case b:case C:return r(e,o,i,u);case w:return n(e,o,i,u)}return log_warn("Uknown type",e.type),null}function t(t,n,r,o){for(var i,l,u=[],s=t.length,a=-1;++a<s;){if(l=t[a],l.tagName===m){if(null!=i)continue;if(l.expression&&!d(l.expression,n,r))continue;i=e(t[a].nodes,n,r,o)}else i=e(l,n,r,o);c(u,i)}return u}function n(e,n,r,o){var i=new Dom.Fragment;return i.parent=o,i.nodes=t(e.nodes,n,r,i),i}function r(t,n,r,l){var u=t.tagName;if(64!==u.charCodeAt(0))return i(t,n,r,l);var s=t.attr.id;if(u===_&&null==s)return r.nodes;if(y===u){var a,h=n[t.expression];if(null==h)return log_error("No template node: @"+t.expression),null;if(is_Array(h)===!1)return a=h,e(t.nodes,f(a.nodes,a.nodes,new g(n)),a,l);for(var m=new Dom.Fragment,x=h.length,w=-1;++w<x;)a=h[w],c(m,e(t.nodes,f(a.nodes,a.nodes,new g(n)),a,l));return m}if(v===u){var C=d(t.expression,n,r);return C?e(t.nodes,n,r,l):null}null==s&&(s=u.substring(1));var j=n.$getNode(s);if(null==j)return null;j.parent&&p(l,j.parent);var N,A=j.nodes;if(void 0!==t.attr.as){var k=t.attr.as;N={type:b,tagName:k,attr:o(t.attr,j.attr,n,r),parent:l,nodes:A},N.attr.as=null}if(null==t.nodes)return N||A;var O=e(t.nodes,f(A,A,new g(n)),j,N||l);return null!=N?(N.nodes=O,N):O}function o(e,t,n,r){if(null==e||null==t)return e||t;var o=u(e,n,r);for(var i in t)o[i]=s(t[i],n,r);return o}function i(t,n,r,o){var i=t.tagName||t.compoName;if(":template"===i){var l=s(t.attr.id,n,r);return Mask.templates.register(l,t.nodes),null}if(":import"===i){var l=s(t.attr.id,n,r),a=Mask.templates.resolve(t,l);return e(a,n,r,o)}var c={type:t.type,tagName:i,attr:u(t.attr,n,r),expression:s(t.expression,n,r),controller:t.controller,parent:o};return t.nodes&&(c.nodes=e(t.nodes,n,r,c)),c}function l(e,t,n,r){return{type:e.type,content:s(e.content,t,n),parent:r}}function u(e,t,n){var r,o=_Object_create(e);for(var i in o)r=o[i],null!=r&&(o[i]=s(r,t,n));return o}function s(e,t,n){var r=-1,o=!1,i=e;if("function"==typeof e&&(o=!0,i=e()),"string"!=typeof i||-1===(r=i.indexOf("@")))return e;for(var l,u=i.substring(0,r),s=i.length,c=91===i.charCodeAt(r+1),f=-1;s>r;){if(f=r,c===!0)r=i.indexOf("]",f),-1===r&&(r=s),f+=2;else for(;s>r&&(l=i.charCodeAt(++r),36===l||95===l||46===l||l>=48&&57>=l||l>=65&&90>=l||l>=97&&122>=l););var h=i.substring(f,r),p=c?d:a,g=p(h,t,n);null!=g&&(u+=g),f=c?r+1:r,r=i.indexOf("@",r),-1===r&&(r=s),u+=i.substring(f,r)}return o?parser_ensureTemplateFunction(u):u}function a(e,t,n){var r=e.indexOf(".");if(-1===r)return log_warn("Merge templates. Accessing node",e),"";var o=e.substring(0,r),i=o.substring(1),l=e.substring(r+1),u=null;return null!=n&&("@attr"===o?u=n.attr:o===n.tagName&&(u=n)),null==u&&(u=t.$getNode(i)),null==u?(log_error("Merge templates. Node not found",o),""):obj_getProperty(u,l)}function c(e,t){if(null!=t)if("function"!=typeof t.concat){if(t.type===w)return void c(e,t.nodes);if("function"==typeof e.appendChild)return void e.appendChild(t);var n=e.length;if(n>0){var r=e[n-1];r.nextSibling=t}e.push(t)}else for(var o=t.length,i=0;o>i;i++)c(e,t[i])}function f(e,t,n){if(null==t)return n;if(is_Array(t)){for(var r=t.length,o=-1;++o<r;)f(t===e?t[o]:e,t[o],n);return n}var i=t.type;if(i===x)return n;if(i===b){var l=t.tagName;if(null!=l&&64===l.charCodeAt(0)){var u=l.substring(1);-1!==j.indexOf(" "+u+" ")&&log_error("MaskMerge. Reserved Name",u);var s={tagName:t.tagName,parent:h(e,t),nodes:t.nodes,attr:t.attr,expression:t.expression};if(null==n[u])n[u]=s;else{var a=n[u];is_Array(a)?a.push(s):n[u]=[a,s]}return n}}return f(e,t.nodes,n)}function h(e,t){if(t===e)return null;for(var n,r,o=t.parent;;){if(null==o)break;if(o===e&&e.type!==b)break;var i={type:o.type,tagName:o.tagName,attr:o.attr,controller:o.controller,expression:o.expression,nodes:null,parent:null};null==r?n=r=i:(n.parent=i,n=i),o=o.parent}return r}function p(e,t){for(var n=e,r=t;null!=n&&null!=r;){r.tagName&&(n.tagName=r.tagName),r.expression&&(n.expression=r.expression);for(var o in r.attr)n.attr[o]=r.attr[o];n=n.parent,r=r.parent}}function d(e,t,n){return n&&(t.attr=n.attr),ExpressionUtil.eval(e,t,null,t)}function g(e){this.scope=this,this.parent=e}mask_merge=function(t,n,r){"string"==typeof t&&(t=parser_parse(t)),"string"==typeof n&&(n=parser_parse(n));var o=f(n,n,new g);return e(t,o,r)};var m="@else",v="@if",y="@each",_="@placeholder",b=Dom.NODE,x=Dom.TEXTNODE,w=Dom.FRAGMENT,C=Dom.STATEMENT,j=" else placeholder each attr if parent scope";g.prototype={parent:null,attr:null,scope:null,$getNode:function(e){for(var t,n=this;null!=n;){if(t=n[e],null!=t)return t;n=n.parent}}}}();var cache={},Mask={render:function(e,t,n,r,o){return null!=r&&"function"!=typeof r.appendChild&&(log_error(".render(template[, model, ctx, container, controller]","Container should implement .appendChild method"),log_warn("Args:",arguments)),"string"==typeof e&&(e=_Object_hasOwnProp.call(cache,e)?cache[e]:cache[e]=parser_parse(e)),null==n&&(n={}),builder_build(e,t,n,r,o)},compile:parser_parse,parse:parser_parse,build:builder_build,run:mask_run,merge:mask_merge,registerHandler:customTag_register,getHandler:function(e){return null!=e?custom_Tags[e]:custom_Tags},registerStatement:function(e,t){custom_Statements[e]=is_Function(t)?{render:t}:t},getStatement:function(e){return null!=e?custom_Statements[e]:custom_Statements},registerAttrHandler:function(e,t,n){is_Function(t)&&(n=t),custom_Attributes[e]=n},getAttrHandler:function(e){return null!=e?custom_Attributes[e]:custom_Attributes},registerUtil:customUtil_register,getUtil:customUtil_get,$utils:customUtil_$utils,registerUtility:function(e,t){log_warn("@registerUtility - deprecated - use registerUtil(utilName, mix)",e),this.registerUtility=this.registerUtil,this.registerUtility(e,t)},getUtility:function(e){return log_warn("@getUtility - deprecated - use getUtil(utilName)",e),this.getUtility=this.getUtil,this.getUtility()},clearCache:function(e){"string"==typeof e?delete cache[e]:cache={}},Utils:{Expression:ExpressionUtil,getProperty:function(e,t){return log_warn("mask.getProperty is deprecated. Use `mask.obj.get`"),obj_getProperty(e,t)},ensureTmplFn:Parser.ensureTemplateFunction},Dom:Dom,plugin:function(source){eval(source)},obj:{get:obj_getProperty,set:obj_setProperty,extend:obj_extend},is:{Function:is_Function,String:is_String,ArrayLike:is_ArrayLike},on:listeners_on,off:listeners_off,delegateReload:function(){},setInterpolationQuotes:Parser.setInterpolationQuotes,setCompoIndex:function(e){builder_componentID=e},cfg:function(){var e=arguments;if(0===e.length)return __cfg;var t;if(2===e.length)return t=e[0],void(__cfg[t]=e[1]);var n=e[0];if("object"==typeof n)for(t in n)__cfg[t]=n[t]}};Mask.renderDom=Mask.render,function(e){var t;!function(){function n(e){for(var t="";e--;)t+=" ";return t}function r(e,t,r){var i,l;null==t&&(t=0),null==r&&(i=!0,r=[]);var u=r.length;if(e.type===h.FRAGMENT&&(e=e.nodes),e instanceof Array)for(l=0;l<e.length;l++)o(e[l],t,r);else o(e,t,r);var s=n(t);for(l=u;l<r.length;l++)r[l]=s+r[l];return i?r.join(0===f?"":"\n"):void 0}function o(e,t,n){if("function"==typeof e.stringify)return void n.push(e.stringify(c));if("string"==typeof e.content)return void n.push(a(e.content));if("function"==typeof e.content)return void n.push(a(e.content()));if(l(e))return void n.push(i(e)+";");if(u(e)){var o=c?">":" > ";return n.push(i(e)+o),void r(s(e),f,n)}n.push(i(e)+"{"),r(e.nodes,f,n),n.push("}")}function i(e){var t,n,r=e.tagName;null!=e.attr&&(t=e.attr.id||"",n=e.attr["class"]||""),"function"==typeof t&&(t=t()),"function"==typeof n&&(n=n()),t&&(t=-1!==t.indexOf(" ")?"":"#"+t),n&&(n="."+n.split(" ").join("."));var o="";for(var i in e.attr)if("id"!==i&&"class"!==i){var l=e.attr[i];"function"==typeof l&&(l=l()),i===l||c!==!1&&!/[^\w_$\-\.]/.test(l)||(l=a(l)),o+=" "+i,i!==l&&(o+="="+l)}"div"===r&&(t||n)&&(r="");var u="";return e.expression&&(u="("+e.expression+")"),r+t+n+o+u}function l(e){return null==e.nodes||e.nodes instanceof Array&&0===e.nodes.length}function u(e){return e.nodes&&(e.nodes instanceof Array==!1||1===e.nodes.length)}function s(e){return e.nodes instanceof Array?e.nodes[0]:e.nodes}function a(e){return-1===e.indexOf("'")?"'"+e.trim()+"'":-1===e.indexOf('"')?'"'+e.trim()+'"':'"'+e.replace(/"/g,'\\"').trim()+'"'}t=function(t,n){return null==t?"":("string"==typeof t&&(t=e.parse(t)),null==n?(f=0,c=!0):"number"==typeof n?(f=n,c=0===f):(f=n&&n.indent||4,c=0===f||n&&n.minimizeAttributes),r(t))};var c,f,h=e.Dom}(),e.stringify=t}(Mask),function(){Mask.registerHandler(":html",{$meta:{mode:"server:all"},render:function(e,t,n){if(this.html=jmask(this.nodes).text(e,t,this),n.insertAdjacentHTML)return void n.insertAdjacentHTML("beforeend",this.html);if(n.ownerDocument){var r,o=document.createElement("div"),i=document.createDocumentFragment();for(o.innerHTML=this.html,r=o.firstChild;null!=r;)i.appendChild(r),r=r.nextSibling}},toHtml:function(){return this.html||""},html:null})}(),function(e){function t(){}function n(){var t;for(t in this.attr)break;var n=this.nodes;e.registerHandler(t,Compo({renderStart:function(){this.nodes=e.merge(n,this.nodes||[],this)}}))}custom_Tags.define=t,t.prototype={$meta:{serializeNodes:!0},render:n,onRenderStartClient:n}}(Mask),function(){var e={},t={get:function(t){return e[t]},resolve:function(t,n){var r=e[n];if(null!=r)return r;for(var o=":template[id="+n+"]",i=t.parent,l=null;null!=i;){if(l=jmask(i.nodes).filter(o).get(0),null!=l)return l.nodes;i=i.parent}return log_warn("Template was not found",n),null},register:function(t,n){return null==t?void log_warn("`:template` must be define via id attr."):void(e[t]=n)}};Mask.templates=t,Mask.registerHandler(":template",{render:function(){t.register(this.attr.id,this.nodes)}}),Mask.registerHandler(":import",{renderStart:function(){var e=this.attr.id;return null==e?void log_error("`:import` shoud reference the template via id attr"):void(this.nodes=t.resolve(this,e))}})}(),function(){custom_Statements.log={render:function(e,t,n,r,o){var i=ExpressionUtil.evalStatements(e.expression,t,n,o);i.unshift("Mask::Log"),console.log.apply(console,i)}},customTag_register("debugger",{render:function(){}}),customTag_register(":utest",{render:function(){}})}();var Compo=exports.Compo=function(mask){function domLib_initialize(){null!=domLib&&null!=domLib.fn&&(domLib.fn.compo=function(e){if(0===this.length)return null;var t=Anchor.resolveCompo(this[0]);return null==e?t:find_findSingle(t,selector_parse(e,Dom.CONTROLLER,"up"))},domLib.fn.model=function(e){var t=this.compo(e);if(null==t)return null;for(var n=t.model;null==n&&t.parent;)t=t.parent,n=t.model;return n},function(){var e=["append","prepend","before","after"];["appendMask","prependMask","beforeMask","afterMask"].forEach(function(t,n){domLib.fn[t]=function(r,o,i,l){if(0===this.length)return log_warn("<jcompo> $.",t,"- no element was selected(found)"),this;this.length>1&&log_warn("<jcompo> $.",t," can insert only to one element. Fix is comming ..."),null==i&&(i=2>n?this.compo():this.parent().compo());var u=!1;null==i&&(i={},u=!0),null==i.components&&(i.components=[]);for(var s=i.components,a=s.length,c=mask.render(r,o,l,null,i),f=this[e[n]](c),h=s.length;h>a;a++)Compo.signal.emitIn(s[a],"domInsert");return u&&0!==h&&(log_warn("$.",t,"- parent controller was not found in Elements DOM.","This can lead to memory leaks."),log_warn("Specify the controller directly, via $.",t,"(template[, model, controller, ctx])")),f}})}(),function(){function e(e,t){node_tryDispose(t)}function t(e,t){node_tryDisposeChildren(t)}var n=domLib.fn.remove,r=domLib.fn.empty;domLib.fn.removeAndDispose=function(){return this.each(e),n.call(this)},domLib.fn.emptyAndDispose=function(){return this.each(t),r.call(this)}}())}function SlotHandler(){}var Dom=mask.Dom,_mask_ensureTmplFnOrig=mask.Utils.ensureTmplFn,_mask_ensureTmplFn,_resolve_External,domLib,Class;!function(){function e(){for(var e,t=arguments.length;--t>-1;)if(e=_resolve_External(arguments[t]),null!=e)return e;return null}_mask_ensureTmplFn=function(e){return"string"!=typeof e?e:_mask_ensureTmplFnOrig(e)},_resolve_External=function(e){return t[e]||r[e]||n[e]};var t=global,n=global.atma||{},r=exports||{};domLib=e("jQuery","Zepto","$"),Class=e("Class")}(),null!=global.document&&null==domLib&&log_warn("DomLite is used. You can set jQuery-Zepto-Kimbo via `Compo.config.setDOMLibrary($)`");var selector_parse,selector_match;!function(){function e(e){return function(n){return t(n,e)}}function t(e,n,r){if("string"!=typeof e)return!1;if(null==r&&(r=0),r=e.indexOf(n,r),-1===r)return!1;if(r>0&&e.charCodeAt(r-1)>32)return t(e,n,r+1);var o=e.length,i=n.length;return o-i>r&&e.charCodeAt(r+i)>32?t(e,n,r+1):!0}selector_parse=function(t,n,r){if(null==t&&log_error("<compo>selector is undefined",n),"object"==typeof t)return t;var o,i,l;if(null==o)switch(t[0]){case"#":o="id",t=t.substring(1),i="attr";break;case".":o="class",t=e(t.substring(1)),i="attr";break;default:o=n===Dom.SET?"tagName":"compoName"}return l="up"===r?"parent":n===Dom.SET?"nodes":"components",{key:o,prop:i,selector:t,nextKey:l}},selector_match=function(e,t,n){is_String(t)&&(null==n&&(n=Dom[e.compoName?"CONTROLLER":"SET"]),t=selector_parse(t,n));var r=t.prop?e[t.prop]:e;return null==r?!1:is_Function(t.selector)?t.selector(r[t.key]):null!=t.selector.test?t.selector.test(r[t.key]):r[t.key]==t.selector}}();var find_findSingle,find_findAll;!function(){find_findSingle=function(e,t){if(is_Array(e)){for(var n,r=e.length,o=0;r>o;o++)if(n=find_findSingle(e[o],t),null!=n)return n;return null}return selector_match(e,t)?e:(e=e[t.nextKey],null==e?null:find_findSingle(e,t))},find_findAll=function(e,t,n){if(null==n&&(n=[]),is_Array(e)){for(var r=e.length,o=0;r>o;o++)find_findAll(e[o],t,n);return n}return selector_match(e,t)&&n.push(e),e=e[t.nextKey],null==e?n:find_findAll(e,t,n)}}();var dom_addEventListener,node_tryDispose,node_tryDisposeChildren;!function(){dom_addEventListener=function(e,t,n){return null!=EventDecorator&&(t=EventDecorator(t)),null!=domLib?domLib(e).on(t,n):null!=e.addEventListener?e.addEventListener(t,n,!1):void(e.attachEvent&&e.attachEvent("on"+t,n))},node_tryDispose=function(e){if(e.hasAttribute("x-compo-id")){var t=e.getAttribute("x-compo-id"),n=Anchor.getByID(t);if(n){if(null==n.$||1===n.$.length)return compo_dispose(n),void compo_detachChild(n);var r=_Array_indexOf.call(n.$,e);-1!==r&&_Array_splice.call(n.$,r,1)}}node_tryDisposeChildren(e)},node_tryDisposeChildren=function(e){for(var t=e.firstChild;null!=t;)1===t.nodeType&&node_tryDispose(t),t=t.nextSibling}}();var domLib_find,domLib_on;!function(){domLib_find=function(e,t){return e.filter(t).add(e.find(t))},domLib_on=function(e,t,n,r){return null==n?e.on(t,r):(e.on(t,n,r).filter(n).on(t,r),e)}}();var compo_dispose,compo_detachChild,compo_ensureTemplate,compo_ensureAttributes,compo_attachDisposer,compo_removeElements,compo_prepairAsync,compo_errored,compo_meta_prepairAttributeHandler,compo_meta_executeAttributeHandler;!function(){function e(e){var t=e.template;if(null==t){if(t=e.attr.template,null==t)return null;delete e.attr.template}if("object"==typeof t)return t;if(is_String(t)){if(35===t.charCodeAt(0)&&/^#[\w\d_-]+$/.test(t)){var n=document.getElementById(t.substring(1));if(null==n)return log_warn("Template not found by id:",t),null;t=n.innerHTML}return mask.parse(t)}return log_warn("Invalid template",typeof t),null}compo_dispose=function(e){null!=e.dispose&&e.dispose(),Anchor.removeCompo(e);for(var t=e.components,n=null==t?0:t.length;--n>-1;)compo_dispose(t[n])},compo_detachChild=function(e){var t=e.parent;if(null!=t){var n,r=e.$,o=t.$||t.elements;if(o&&r){var i,l,u=r.length;for(n=o.length;--n>-1;)for(i=o[n],l=u;--l>-1;)if(i===r[l]){o.splice(n,1);break}}var s=t.components;if(null!=s){for(n=s.length;--n>-1;)if(s[n]===e){s.splice(n,1);break}-1===n&&log_warn("<compo:remove> - i`m not in parents collection",e)}}},compo_ensureTemplate=function(t){if(null==t.nodes)return void(t.nodes=e(t));var n=t.meta.template;if(null!=n&&"replace"!==n){var r=e(t);return"merge"===n?void(t.nodes=mask_merge(r,t.nodes,t)):"join"===n?void(t.nodes=[r,t.nodes]):void log_error("Invalid meta.nodes behaviour",n)}},compo_attachDisposer=function(e,t){if(null==e.dispose)return void(e.dispose=t);var n=e.dispose;e.dispose=function(){t.call(this),n.call(this)}},compo_removeElements=function(e){if(e.$)return void e.$.remove();var t=e.elements;if(t)for(var n=-1,r=t.length;++n<r;)t[n].parentNode&&t[n].parentNode.removeChild(t[n]);else{var o=e.components;if(o)for(var n=-1,r=o.length;++n<r;)compo_removeElements(o[n])}},compo_prepairAsync=function(e,t,n){var r=Compo.pause(t,n);e.then(r,function(e){compo_errored(t,e),r()})},compo_errored=function(e,t){e.nodes=mask.parse('.-mask-compo-errored > "~[.]"'),e.model=t.message||String(t),e.renderEnd=fn_doNothing},function(){function e(e){return function(t,n){var o,i,l,u,s=t.attr;for(o in e)if(i=e[o],l=s[o],u=i(t,l,n),null!=u)return r(t,u,o,l),!1;return!0}}function t(e,t,r,l){var u=63===t.charCodeAt(0),s=u?t.substring(1):t,a=s.replace(/-(\w)/g,n),c=r;return"string"==typeof r?c=o[r]:r instanceof RegExp?c=i.regexp(r):"function"==typeof r?c=r:null==r&&(c=i.any()),null==c?void log_error("Function expected for the attr. handler",t):(e[a]=null,e=null,void(l[s]=function(e,t,n){if(null==t)return u?null:Error("Expected");var r=c.call(e,t,e,n,s);return r instanceof Error?r:(e[a]=r,null)}))}function n(e,t){return t.toUpperCase()}function r(e,t,n,r){t.message=e.compoName+" - attribute `"+n+"`: "+t.message,compo_errored(e,t),log_error(t.message,". Current: ",r)}compo_meta_prepairAttributeHandler=function(n){null==n.meta&&(n.meta={attributes:null,cache:null,mode:null});var r=n.meta.attributes,o=null;if(r){var i={};for(var l in r)t(n,l,r[l],i);o=e(i)}n.meta.handleAttributes=o},compo_meta_executeAttributeHandler=function(e,t){var n=e.meta&&e.meta.handleAttributes;return null==n?!0:n(e,t)};var o={string:function(e){return"string"==typeof e?e:Error("String")},number:function(e){var t=Number(e);return t===t?t:Error("Number")},"boolean":function(e,t,n,r){return"boolean"==typeof e?e:e===r?!0:"true"===e||"1"===e?!0:"false"===e||"0"===e?!1:Error("Boolean")}},i={regexp:function(e){return function(t){return e.test(t)?t:Error("RegExp")}},any:function(){return function(e){return e}}}}()}();var compo_create,compo_createConstructor;!function(){compo_create=function(e){var t,n,r=e.length,o=e[r-1];r>1&&compo_inherit(o,_Array_slice.call(e,0,r-1)),null==o&&(o={});var i=_resolve_External("include");null!=i&&(o.__resource=i.url);o.attr;for(n in o.attr)o.attr[n]=_mask_ensureTmplFn(o.attr[n]);var l=o.slots;for(n in l)"string"==typeof l[n]&&(is_Function(o[l[n]])===!1&&log_error("Not a Function @Slot.",l[n]),l[n]=o[l[n]]);compo_meta_prepairAttributeHandler(o),t=o.hasOwnProperty("constructor")?o.constructor:function(){},t=compo_createConstructor(t,o);for(n in CompoProto)null==o[n]&&(o[n]=CompoProto[n]);return t.prototype=o,o=null,t},compo_createConstructor=function(e,t){var n=t.compos,r=t.pipes,o=t.scope,i=t.attr;return null==n&&null==r&&null==i&&null==o?e:function(t,l,u,s,a){if(null!=e){var c=e.call(this,t,l,u,s,a);if(null!=c)return c}null!=n&&(this.compos=obj_create(this.compos)),null!=r&&Pipes.addController(this),null!=i&&(this.attr=obj_create(this.attr)),null!=o&&(this.scope=obj_create(this.scope))}}}();var compo_inherit;!function(){function e(o,i,l){if(null!=o&&null!=i){if("node"===l){var u=o.template||o.nodes,s=i.template||i.nodes;null==u||null==s?o.template=u||s:o.nodes=mask.merge(s,u,o)}var a,c,f,h=!1;for(var p in i)if(a=i[p],null!=a&&"constructor"!==p&&("node"!==l||"template"!==p&&"nodes"!==p))if(c=typeof a,null!=o[p]){if("node"===l){var d="renderStart"===p||"renderEnd"===p||"emitIn"===p||"emitOut"===p||"components"===p||"nodes"===p||"template"===p||"find"===p||"closest"===p||"on"===p||"remove"===p||"slotState"===p||"signalState"===p||"append"===p||"appendTo"===p;if(d===!0)continue}if("pipes"!==l)if("function"!==c){if("object"===c){switch(p){case"slots":case"pipes":case"events":case"attr":e(o[p],a,p);continue}n(o[p],a)}}else f=!1,"slots"===l||"events"===l||"pipe"===l?f=!0:"node"!==l||"onRenderStart"!==p&&"onRenderEnd"!==p||(f=!0),o[p]=r(o[p],a,f),h=!0;else e(o[p],a,"pipe")}else o[p]="object"===c?t(a):a;h===!0&&(null!=o.super&&log_error("`super` property is reserved. Dismissed. Current prototype",o),o.super=null)}}/*! Circular references are not handled */
function t(e){if(null==e)return null;if("object"!=typeof e)return e;if(is_Array(e)){for(var n=e.length,r=-1,o=new Array(n);++r<n;)o[r]=t(e[r]);return o}var i,l,u=obj_create(e);for(i in u)l=u[i],null!=l&&"object"==typeof l&&(u[i]=t(l));return u}function n(e,t){var r,o,i;for(var i in t)r=e[i],o=t[i],null!=r?is_rawObject(r)&&is_rawObject(o)&&n(r,o):e[i]=o}function r(e,t,n){function r(){var e=u._fn||(u._fn=l(u._fn_chain));return e.apply(this,arguments)}if("compoInheritanceWrapper"===e.name)return e._fn_chain.push(t),e;var l=n===!0?i:o,u=r;return u._fn_chain=[e,t],u._fn=null,u}function o(e){for(var t=e.length,n=e[--t];--t>-1;)n=l(e[t],n);return n}function i(e){var t=e.length;return function(){for(var n,r,o,i=t;--i>-1;)r=e[i],null!=r&&(o=fn_apply(r,this,arguments),void 0!==o&&(n=o));return n}}function l(e,t){return function(){this.super=t;var n=fn_apply(e,this,arguments);return this.super=null,n}}function u(e){var t=e.length;return function(){for(var n,r=t;--r>-1;){var o=e[r].apply(this,arguments);null!=o&&(n=o)}return n}}compo_inherit=function(t,n){for(var r,o=n.length,i=o,l=[];--i>-1;)r=n[i],"string"==typeof r&&(r=Mask.getHandler(r)),null!=r?("function"==typeof r&&(l.push(r),r=r.prototype),e(t,r,"node")):log_error("Base component not defined",n[i]);i=-1,o=l.length,o>0&&(t.hasOwnProperty("constructor")&&l.unshift(t.constructor),t.constructor=u(l))}}(mask.merge);var dfr_isBusy;!function(){dfr_isBusy=function(e){return null==e||"function"!=typeof e.then?!1:is_Function(e.isBusy)?e.isBusy():is_Function(e.state)?"pending"===e.state():(log_warn("Class or jQuery deferred interface expected"),!1)}}();var Children_={select:function(e,t){for(var n in t){var r=t[n],o=null,i=null;if(r instanceof Array&&(i=r[0],o=r.splice(1)),"string"==typeof r&&(i=r),null==r||null==i)return log_error("Unknown component child",n,t[n]),void log_warn("Is this object shared within multiple compo classes? Define it in constructor!");var l=i.indexOf(":"),u=i.substring(0,l);u=Compo.config.selectors[u],null==u?e.compos[n]=e.$[0].querySelector(i):(i=i.substring(++l).trim(),e.compos[n]=u(e,i));var s=e.compos[n];null!=o&&(null!=s.$&&(s=s.$),Events_.on(e,o,s))}}},Events_={on:function(e,t,n){null==n&&(n=e.$);for(var r,o=t instanceof Array,i=o?t.length:1,l=0;o?i>l:1>l;l++)if(r=o?t[l]:t,r instanceof Array)null!=EventDecorator&&(r[0]=EventDecorator(r[0])),n.on.apply(n,r);else for(var u in r){var s,a,c="string"==typeof r[u]?e[r[u]]:r[u],f=u.indexOf(":");-1!==f?(s=u.substring(0,f),a=u.substring(f+1).trim()):s=u,null!=EventDecorator&&(s=EventDecorator(s)),domLib_on(n,s,a,fn_proxy(c,e))}}},EventDecorator=null,EventDecos=function(){var e=function(){if(null==document)return!1;if("createTouch"in document)return!0;try{return!!document.createEvent("TouchEvent").initTouchEvent}catch(e){return!1}}();return{touch:function(t){return e===!1?t:"click"===t?"touchend":"mousedown"===t?"touchstart":"mouseup"===t?"touchend":"mousemove"===t?"touchmove":t}}}(),Pipes=function(){function e(e,t){return function(n){new i(e).emit(t,n)}}function t(e,t){return null==t.pipes[e]?void log_error("Controller has no pipes to be added to collection",e,t):(null==l[e]&&(l[e]=[]),void l[e].push(t))}function n(e,t){for(var n=l[e],r=n.length;--r>-1;)n[r]===t&&n.splice(r,1)}function r(){var e=this,t=e.pipes;for(var r in t)n(r,e)}function o(e){var n=e.pipes;if(null==n)return void log_error("Controller has no pipes",e);for(var o in n)t(o,e);Compo.attachDisposer(e,r.bind(e))}function i(e){return this instanceof i==!1?new i(e):(this.pipeName=e,this)}var l={};return mask.registerAttrHandler("x-pipe-signal","client",function(t,n,r,o,i){for(var l,u=n.split(";"),s=u.length,a=-1;++a<s;)if(l=u[a].trim(),""!==l){var c,f,h=l.indexOf(":"),p=l.substring(0,h),d=l.substring(h+1).trim(),g=d.indexOf(".");if(-1===g)return void log_error('define pipeName "click: pipeName.pipeSignal"');c=d.substring(0,g),f=d.substring(++g);var m=e(c,f);!p&&log_error("Signal: event type is not set",n),dom_addEventListener(i,p,m)}}),i.prototype={constructor:i,emit:function(e){var t,n=l[this.pipeName],r=this.pipeName;if(null==n)return void log_warn("Pipe.emit: No signals were bound to:",r);2===arguments.length&&is_Array(arguments[1])?t=arguments[1]:arguments.length>1&&(t=_Array_slice.call(arguments,1));for(var o,i,u,s,a=n.length;-1!==--a;)o=n[a],i=o.pipes[r],null!=i&&(u=i[e],is_Function(u)&&(u.apply(o,t),s=!0));s||log_warn("Pipe `%s` has not slots for `%s`",r,e)}},i.addController=o,i.removeController=r,{addController:o,removeController:r,pipe:i}}(),Anchor=function(){var e={};return{create:function(t){return null==t.ID?void log_warn("Component should have an ID"):void(e[t.ID]=t)},resolveCompo:function(t){if(null==t)return null;var n,r,o;do{if(r=t.getAttribute("x-compo-id"),r&&(null==n&&(n=r),o=e[r],null!=o&&(o=Compo.find(o,{key:"ID",selector:n,nextKey:"components"}),null!=o)))return o;t=t.parentNode}while(t&&1===t.nodeType);return n&&log_warn("No controller for ID",n),null},removeCompo:function(t){null!=t.ID&&delete e[t.ID]},getByID:function(t){return e[t]}}}(),Compo,CompoProto;!function(){Compo=function(){return this instanceof Compo?void 0:compo_create(arguments)},obj_extend(Compo,{create:function(){return compo_create(arguments)},createClass:function(){var e=compo_create(arguments),t=e.prototype;return t.Construct=e,Class(t)},render:function(e,t,n,r){compo_ensureTemplate(e);var o=[];return mask.render(null==e.tagName?e.nodes:e,t,n,r,e,o),e.$=domLib(o),null!=e.events&&Events_.on(e,e.events),null!=e.compos&&Children_.select(e,e.compos),e},initialize:function(e,t,n,r,o){var i;null==r&&(n&&null!=n.nodeType?(r=n,n=null):t&&null!=t.nodeType&&(r=t,t=null)),"string"==typeof e&&(i=e,e=mask.getHandler(i),e||log_error("Compo not found:",e));var l={controller:e,type:Dom.COMPONENT,tagName:i};null==o&&null!=r&&(o=Anchor.resolveCompo(r)),null==o&&(o=new Dom.Component);var u=mask.render(l,t,n,null,o),s=o.components[o.components.length-1];return null!=r&&(r.appendChild(u),Compo.signal.emitIn(s,"domInsert")),s},find:function(e,t){return find_findSingle(e,selector_parse(t,Dom.CONTROLLER,"down"))},closest:function(e,t){return find_findSingle(e,selector_parse(t,Dom.CONTROLLER,"up"))},dispose:compo_dispose,ensureTemplate:compo_ensureTemplate,attachDisposer:compo_attachDisposer,config:{selectors:{$:function(e,t){var n=domLib_find(e.$,t);return 0===n.length&&log_warn("<compo-selector> - element not found -",t,e),n},compo:function(e,t){var n=Compo.find(e,t);return null==n&&log_warn("<compo-selector> - component not found -",t,e),n}},setDOMLibrary:function(e){domLib!==e&&(domLib=e,domLib_initialize())},getDOMLibrary:function(){return domLib},eventDecorator:function(e){return"function"==typeof e?void(EventDecorator=e):"string"==typeof e?void(EventDecorator=EventDecos[e]):"boolean"==typeof e&&e===!1?void(EventDecorator=null):void 0}},pipe:Pipes.pipe,resource:function(e){for(var t=e;null!=t;){if(t.resource)return t.resource;t=t.parent}return include.instance()},plugin:function(source){eval(source)},Dom:{addEventListener:dom_addEventListener}}),function(){function e(e,t,n){return null==e[t]&&(e[t]=[]),e[t].push(n),e}function t(e,t,n){var r=e[t];if(null!=r)for(var o,i=0,l=r.length;l>i;i++)o=r[i],null!=o&&(r[i]=null,null!=n?o.apply(this,n):o())}var n={done:function(t){return e(this,"_cbs_done",t)},fail:function(t){return e(this,"_cbs_fail",t)},always:function(t){return e(this,"_cbs_always",t)},resolve:function(){this.async=!1,t(this,"_cbs_done",arguments),t(this,"_cbs_always",arguments)},reject:function(){this.async=!1,t(this,"_cbs_fail",arguments),t(this,"_cbs_always")},_cbs_done:null,_cbs_fail:null,_cbs_always:null},r={async:!0,await:function(e){this.resume=e}};Compo.pause=function(e,t){return null==t.async&&(t.defers=[],obj_extend(t,n)),t.async=!0,t.defers.push(e),obj_extend(e,r),function(){Compo.resume(e,t)}},Compo.resume=function(e,t){e.resume&&e.resume(),e.async=!1;for(var n,r=!1,o=t.defers,i=o.length,l=-1;++l<i;)n=o[l],n!==e?r=r||null!=n:o[l]=null;r===!1&&t.resolve()}}(),CompoProto={type:Dom.CONTROLLER,__resource:null,tagName:null,compoName:null,nodes:null,components:null,expression:null,attr:null,model:null,slots:null,pipes:null,compos:null,events:null,async:!1,await:null,meta:{mode:null,modelMode:null,attributes:null,serializeNodes:null,handleAttributes:null},onRenderStart:null,onRenderEnd:null,render:null,renderStart:function(e,t,n){if(1===arguments.length&&null!=e&&e instanceof Array==!1&&null!=e[0]){var r=arguments[0];e=r[0],t=r[1],n=r[2]}if(compo_meta_executeAttributeHandler(this,e)!==!1&&(compo_ensureTemplate(this),is_Function(this.onRenderStart))){var o=this.onRenderStart(e,t,n);void 0!==o&&dfr_isBusy(o)&&compo_prepairAsync(o,this,t)}},renderEnd:function(e,t,n,r){if(1===arguments.length&&e instanceof Array==!1){var o=arguments[0];e=o[0],t=o[1],n=o[2],r=o[3]}Anchor.create(this,e),this.$=domLib(e),null!=this.events&&Events_.on(this,this.events),null!=this.compos&&Children_.select(this,this.compos),is_Function(this.onRenderEnd)&&this.onRenderEnd(e,t,n,r)},appendTo:function(e){var t="string"==typeof e?document.querySelector(e):e;if(null==t)return log_warn("Compo.appendTo: parent is undefined. Args:",arguments),this;for(var n=this.$,r=0,o=n.length;o>r;r++)t.appendChild(n[r]);return this.emitIn("domInsert"),this},append:function(e,t,n){var r;if(null==this.$){var o="string"==typeof e?mask.compile(e):e;return r=n?find_findSingle(this,selector_parse(n,Dom.CONTROLLER,"down")):this,null==r.nodes?(this.nodes=o,this):(r.nodes=[this.nodes,o],this)}var i=mask.render(e,t,null,null,this);return r=n?this.$.find(n):this.$,r.append(i),this.emitIn("domInsert"),this},find:function(e){return find_findSingle(this,selector_parse(e,Dom.CONTROLLER,"down"))},findAll:function(e){return find_findAll(this,selector_parse(e,Dom.CONTROLLER,"down"))},closest:function(e){return find_findSingle(this,selector_parse(e,Dom.CONTROLLER,"up"))},on:function(){var e=_Array_slice.call(arguments);return arguments.length<3?(log_error("Invalid Arguments Exception @use .on(type,selector,fn)"),this):(null!=this.$&&Events_.on(this,[e]),null==this.events?this.events=[e]:is_Array(this.events)?this.events.push(e):this.events=[e,this.events],this)},remove:function(){return compo_removeElements(this),compo_detachChild(this),compo_dispose(this),this.$=null,this},slotState:function(e,t){return Compo.slot.toggle(this,e,t),this},signalState:function(e,t){return Compo.signal.toggle(this,e,t),this},emitOut:function(e){return Compo.signal.emitOut(this,e,this,arguments.length>1?_Array_slice.call(arguments,1):null),this},emitIn:function(e){return Compo.signal.emitIn(this,e,this,arguments.length>1?_Array_slice.call(arguments,1):null),this}},Compo.prototype=CompoProto}(),function(){function e(t,n,r,o,i){if(null==t)return!1;var l=!1,u=null!=t.slots&&t.slots[n];if("string"==typeof u&&(u=t[u]),"function"==typeof u){l=!0;var s=null!=t.slots.__disabled&&t.slots.__disabled[n];if(s!==!0){var a=null==o?u.call(t,r):u.apply(t,[r].concat(o));if(a===!1)return!0;null!=a&&"object"==typeof a&&null!=a.length&&(o=a)}}if(-1===i&&null!=t.parent)return e(t.parent,n,r,o,i)||l;if(1===i&&null!=t.components)for(var c,f=t.components,h=f.length,p=0;h>p;p++)c=e(f[p],n,r,o,i),!l&&(l=c);return l}function t(e,n,r,o){if(null==e)return!1;var i=e.slots;if(null!=i&&null!=i[n]&&("string"==typeof i[n]&&(i[n]=e[i[n]]),"function"==typeof i[n])){if(o!==!0)return!0;if(null==i.__disabled||i.__disabled[n]!==!0)return!0}if(-1===r&&null!=e.parent)return t(e.parent,n,r);if(1===r&&null!=e.components)for(var l=0,u=e.components.length;u>l;l++)if(t(e.components[l],n,r))return!0;return!1}function n(n,r){return t(n,r,-1)===!1?null:function(t){var o=arguments.length>1?_Array_slice.call(arguments,1):null;e(n,r,t,o,-1)}}function r(e,t,n){var r=e.slots;null!=r&&r.hasOwnProperty(t)!==!1&&(null==r.__disabled&&(r.__disabled={}),r.__disabled[t]=n===!1)}function o(e,t,n){if(r(e,t,n),null!=e.components)for(var i=0,l=e.components.length;l>i;i++)o(e.components[i],t,n)}function i(e,t,n){return null==e.$?void log_warn("Controller has no elements to toggle state"):void domLib().add(e.$.filter("[data-signals]")).add(e.$.find("[data-signals]")).each(function(e,r){var o=r.getAttribute("data-signals");null!=o&&-1!==o.indexOf(t)&&r[n===!0?"removeAttribute":"setAttribute"]("disabled","disabled")})}function l(e,t,n){for(var l=e,u=e;null!=(l=l.parent);)r(l,t,n),null!=l.$&&0!==l.$.length&&(u=l);o(e,t,n),i(u,t,n)}function u(e,n,o){r(e,n,o),(o||!t(e,n,-1,!0)&&!t(e,n,1,!0))&&i(e,n,o)}mask.registerAttrHandler("x-signal","client",function(e,t,r,o,i,l){for(var u,s=t.split(";"),a="",c=s.length,f=-1;++f<c;)if(u=s[f].trim(),""!==u){var h=u.indexOf(":"),p=u.substring(0,h),d=u.substring(h+1).trim(),g=n(l,d);!p&&log_error("Signal: event type is not set",t),g&&(a+=","+d+",",dom_addEventListener(i,p,g)),!g&&log_warn("No slot found for signal",d,l)}""!==a&&i.setAttribute("data-signals",a)}),obj_extend(Compo,{signal:{toggle:l,emitOut:function(t,n,r,o){var i=e(t,n,r,o,-1);!i&&log_warn("Signal %c%s","font-weight:bold;",n,"was not captured")},emitIn:function(t,n,r,o){e(t,n,r,o,1)},enable:function(e,t){l(e,t,!0)},disable:function(e,t){l(e,t,!1)}},slot:{toggle:u,enable:function(e,t){u(e,t,!0)},disable:function(e,t){u(e,t,!1)},invoke:function(e,t,n,r){var o=e.slots;return null==o||"function"!=typeof o[t]?(log_error("Slot not found",t,e),null):null==r?o[t].call(e,n):o[t].apply(e,[n].concat(r))}}})}();var DomLite;return function(e){function t(e,t,n){if(null==e)return n||e;for(var r=e.length,o=-1;++o<r;)t.call(n||e,e[o],o);return n||e}function n(e,t,n){if(null==e)return-1;for(var r=e.length,o=-1;++o<r;)if(t.call(n||e,e[o],o)===!0)return o;return-1}if(null!=e){Compo.DomLite=DomLite=function(e){return this instanceof DomLite==!1?new DomLite(e):this.add(e)},null==domLib&&(domLib=DomLite);var r=DomLite.fn={constructor:DomLite,length:0,add:function(e){if(null==e)return this;if(is_Array(e)===!0)return t(e,this.add,this);var n=e.nodeType;return 11===n?t(e.childNodes,this.add,this):null==n?"number"==typeof e.length?t(e,this.add,this):(log_warn("Uknown domlite object"),this):(this[this.length++]=e,this)},on:function(){return o.call(this,i,u,arguments)},off:function(){return o.call(this,l,s,arguments)},find:function(e){return t(this,function(t){this.add(c.call(t,e))},new DomLite)},filter:function(e){return t(this,function(t){f(t,e)===!0&&this.add(t)},new DomLite)},parent:function(){var e=this[0];return new DomLite(e&&e.parentNode)},children:function(e){var n=t(this,function(e){this.add(e.childNodes)},new DomLite);return null==e?n:n.filter(e)},closest:function(e){for(var t=this[0],n=new DomLite;null!=t&&null!=t.parentNode;)if(t=t.parentNode,f(t,e))return n.add(t);return n},remove:function(){return t(this,function(e){e.parentNode.removeChild(e)})}};!function(){function e(e,t,n){null!=e&&null!=n&&e.insertBefore(n,t)}function n(t,n,r){var o=null!=n?n.nextSibling:null;e(t,o,r)}var o={append:function(e,t){n(e,e.lastChild,t)},prepend:function(t,n){e(t,t.firstChild,n)},after:function(e,t){n(e.parentNode,e,t)},before:function(t,n){e(t.parentNode,t,n)}};t(["append","prepend","before","after"],function(e){var n=o[e];r[e]=function(e){var r=is_Array(e);return t(this,function(o){return r?void t(e,function(e){n(o,e)}):void n(o,e)})}})}();var o,i,l,u,s,a=e.documentElement,c=a.querySelectorAll,f=function(){var e=a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector||a.matchesSelector;return function(t,n){return null==t||1!==t.nodeType?!1:e.call(t,n)}}();!function(){function e(e,n,r,o){return t(e,function(e){n.call(e,r,o,!1)})}o=function(e,n,r){var o,i=r.length;return 2===i&&(o=e),3===i&&(o=n),null!=o?t(this,function(e){o.apply(DomLite(e),r)}):(log_error("`DomLite.on|off` - invalid arguments count"),this)},i=function(t,r){return e(this,n,t,r)},l=function(t,n){return e(this,r,t,n)},u=function(e,t,n){function r(e){var r=e.target,o=e.currentTarget;if(o!==r)for(;null!=r&&r!==o;){if(f(r,t))return void n(e);r=r.parentNode}}return(n._guards||(n._guards=[])).push(r),i.call(this,e,r)},s=function(e,n,r){return t(r._quards,function(t){l.call(this,e,t)},this)};var n=a.addEventListener,r=a.removeEventListener}(),function(){var e=null!=a.classList,o=e===!0?function(e,t){return e.classList.contains(t)}:function(e,t){return-1!==(" "+e.className+" ").indexOf(" "+t+" ")};r.hasClass=function(e){return-1!==n(this,function(t){return o(t,e)})};var i;!function(){function e(e,t){e.className+=" "+t}function t(e,t){e.className=(" "+e.className+" ").replace(" "+t+" "," ")}i={add:function(t,n){o(t,n)===!1&&e(t,n)},remove:function(e,n){o(e,n)===!0&&t(e,n)},toggle:function(n,r){var i=o(n,r)===!0?t:e;i(n,r)}}}(),t(["add","remove","toggle"],function(n){var o=e===!1?i[n]:function(e,t){var r=e.classList;r[n].call(r,t)};r[n+"Class"]=function(e){return t(this,function(t){o(t,e)})}})}(),function(){var n=function(t){var n=e.createEvent("Event");return n.initEvent(t,!0,!0),n},o=function(t,r){if(null==r)return n(t);var o=e.createEvent("CustomEvent");return o.initCustomEvent(t,!0,!0,r),o},i=function(e,t){e.dispatchEvent(t)};r.trigger=function(e,n){var r=o(e,n);return t(this,function(e){i(e,r)})}}(),function(){r.attr=function(e,n){return void 0===n?this[0]&&this[0].getAttribute(e):t(this,function(t){t.setAttribute(e,n)})},r.removeAttr=function(e){return t(this,function(t){t.removeAttribute(e)})}}(),Object.setPrototypeOf?Object.setPrototypeOf(r,Array.prototype):r.__proto__&&(r.__proto__=Array.prototype),DomLite.prototype=r,domLib_initialize()}}(global.document),domLib_initialize(),mask.registerHandler(":slot",SlotHandler),SlotHandler.prototype={constructor:SlotHandler,renderEnd:function(){this.slots={},this.expression=this.attr.on,this.slots[this.attr.signal]=this.handle},handle:function(){var e=this.expression;mask.Utils.Expression.eval(e,this.model,global,this)}},Compo}(Mask),jmask=exports.jmask=Mask.jmask=function(e){function t(e){return"string"!=typeof e?e:s(e)}function n(e){return this instanceof n==!1?new n(e):null==e?this:e.type===i.SET?e:this.add(e)}var r,o,i=e.Dom,l=e.render,u=e.parse,s=e.Utils.ensureTmplFn,a=(e.Compo||Compo).signal.emitIn;!function(){r=function(e,t){if(is_ArrayLike(e)===!1)return void t(e);for(var n=e.length,r=-1;++r<n;)t(e[r],r)},function(){function e(e,n){return e===n?(t=!0,0):1}o=function(n){if(t=!1,n.sort(e),t===!1)return n;for(var r=[],o=0,i=0,l=n.length-1;l>o;)n[o++]===n[o]&&(r[i++]=o);for(;i--;)n.splice(r[i],1);return n};var t=!1}()}();var c,f;!function(){function e(e){return function(n){return t(n,e)}}function t(e,n,r){if("string"!=typeof e)return!1;if(null==r&&(r=0),r=e.indexOf(n,r),-1===r)return!1;if(r>0&&e.charCodeAt(r-1)>32)return t(e,n,r+1);var o=e.length,i=n.length;return o-i>r&&e.charCodeAt(r+i)>32?t(e,n,r+1):!0}function n(e,t,n){for(var r,o=!1,i=!1;n>t&&(r=e.charCodeAt(t),(34===r||39===r)&&(o=!o),92===r&&(i=!i),!(46===r||35===r||91===r||93===r||62===r||33>r)||o===!0||i===!0);)t++;return t}c=function(t,s,a){if(null==t&&log_error("selector is null for the type",s),"object"==typeof t)return t;var c,f,h,p,d,g,m,v,y,_,b,x=0,w=t.length;for(c="up"===a?r:s===i.SET?o:l;w>x;)d=t.charCodeAt(x),33>d?x++:62!==d?(g=n(t,x+1,w),46===d?(f="class",h=u,p=e(t.substring(x+1,g))):35===d?(f="id",h=u,p=t.substring(x+1,g)):91===d?(_=t.indexOf("=",x),-1===_&&console.error('Attribute Selector: should contain "="'),h=u,f=t.substring(x+1,_),d=t.charCodeAt(_+1),b=34===d||39===d?2:1,p=t.substring(_+b,g-b+1),g++):(null!=m&&(m.next={type:"any",matcher:null},y=m,m=null),h=null,f=s===i.SET?"tagName":"compoName",p=t.substring(x,g)),x=g,null!=m?(null==m.filters&&(m.filters=[]),m.filters.push({key:f,selector:p,prop:h})):(m={key:f,prop:h,selector:p,nextKey:c,filters:null},null==v&&(v=m),null!=y&&(y.next.matcher=m))):(null==m?v=m={selector:"__scope__",nextKey:c,filters:null,next:{type:"children",matcher:null}}:m.next={type:"children",matcher:null},y=m,m=null,x++);return y&&y.next&&(y.next.matcher=m),v},f=function(e,t,n){if("string"==typeof t&&(null==n&&(n=i[e.compoName?"CONTROLLER":"SET"]),t=c(t,n)),"*"===t.selector)return!0;var r=t.prop?e[t.prop]:e,o=!1;if(null==r)return!1;if("function"==typeof t.selector?o=t.selector(r[t.key]):null!=t.selector.test?t.selector.test(r[t.key])&&(o=!0):r[t.key]===t.selector&&(o=!0),o===!0&&null!=t.filters)for(var l,u=0,s=t.filters.length;s>u;u++)if(l=t.filters[u],f(e,l,n)===!1)return!1;return o};var r="parent",o="nodes",l="components",u="attr"}();var h,p,d,g,m;!function(){h=function(e,t){if(null==t)return e;var n=[];return r(e,function(e){f(e,t)&&n.push(e)}),n},p=function(e,t,n,o){return null==e?n:(null==n&&(n=[]),null==o&&("__scope__"===t.selector?(o=!1,t=t.next.matcher):o=!0),r(e,function(e){if(f(e,t)===!1)return void(null==t.next&&o!==!1&&p(e[t.nextKey],t,n,o));if(null==t.next)return n.push(e),void(o===!0&&p(e[t.nextKey],t,n,o));var r=t.next;o="children"!==r.type,p(e[t.nextKey],r.matcher,n,o)}),n)},d=function(e,t){var n={type:1,tagName:1,compoName:1,controller:1},r={parent:t};for(var o in e)1===n[o]&&(r[o]=e[o]);null!=e.attr&&(r.attr=obj_create(e.attr));var i=e.nodes;if(null!=i&&i.length>0)if(is_ArrayLike(i)===!1)r.nodes=[d(i,r)];else{r.nodes=[];for(var l=i.length,u=0;l>u;u++)r.nodes[u]=d(i[u],r)}return r},g=function(e){for(var t,n=e;null!=n;)t=n,n=n.nodes&&n.nodes[0];return t},m=function(e,t,n,r){if(i.TEXTNODE===e.type)return is_Function(e.content)?e.content("node",t,n,null,r):e.content;var o="";if(null!=e.nodes)for(var l,u=0,s=e.nodes.length;s>u;u++)l=e.nodes[u],o+=m(l,t,n,r);return o}}();var v=n.prototype={constructor:n,type:i.SET,length:0,components:null,add:function(e){var t,n;if("string"==typeof e&&(e=u(e)),is_ArrayLike(e)){for(t=0,n=e.length;n>t;t++)this.add(e[t]);return this}"function"==typeof e&&null!=e.prototype.type&&(e={controller:e,type:i.COMPONENT});var r=e.type;if(!r)return console.error("Only Mask Node/Component/NodeText/Fragment can be added to jmask set",e),this;if(r===i.FRAGMENT){var o=e.nodes;for(t=0,n=o.length;n>t;)this[this.length++]=o[t++];return this}if(r===i.CONTROLLER){if(null!=e.nodes&&e.nodes.length)for(t=e.nodes.length;0!==t;)e.nodes[--t].parent=e;null!=e.$&&(this.type=i.CONTROLLER)}return this[this.length++]=e,this},toArray:function(){return Array.prototype.slice.call(this)},render:function(e,t,n,r){if(this.components=[],1===this.length)return l(this[0],e,t,n,r||this);null==n&&(n=document.createDocumentFragment());for(var o=0,i=this.length;i>o;o++)l(this[o],e,t,n,r||this);return n},prevObject:null,end:function(){return this.prevObject||this},pushStack:function(e){var t;return t=n(e),t.prevObject=this,t},controllers:function(){return null==this.components&&console.warn("Set was not rendered"),this.pushStack(this.components||[])},mask:function(t){var n;if(null!=t)return this.empty().append(t);if(arguments.length)return this;if(0===this.length)n=new i.Node;else if(1===this.length)n=this[0];else{n=new i.Fragment,n.nodes=[];for(var r=-1;++r<this.length;)n.nodes[r]=this[r]}return e.stringify(n)},text:function(e,t,n){if("string"==typeof e&&1===arguments.length){for(var r,o=[new i.TextNode(e)],l=0,u=this.length;u>l;l++)r=this[l],r.nodes=o;return this}for(var r,s="",l=0,u=this.length;u>l;l++)r=this[l],s+=m(r,e,t,n);return s}};return arr_each(["append","prepend"],function(e){n.prototype[e]=function(t){for(var r,o,i=n(t),l=0,u=this.length;u>l;l++){o=this[l],r=i.toArray();for(var s=0,a=r.length;a>s;s++)r[s].parent=o;o.nodes=null!=o.nodes?"append"===e?o.nodes.concat(r):r.concat(o.nodes):r}return this}}),arr_each(["appendTo"],function(e){n.prototype[e]=function(e,t,r,o){return null==o&&(o=this),null!=e.nodeType&&"function"==typeof e.appendChild?(e.appendChild(this.render(t,r,null,o)),a(o,"domInsert"),this):(n(e).append(this),this)}}),function(){function e(e,t,n){e[t]=n}function n(e){var t={};return e.split(";").forEach(function(e){if(""!==e){var n=e.indexOf(":"),r=e.substring(0,n).trim(),o=e.substring(n+1).trim();t[r]=o}}),t}function r(e){var t,n="";for(t in e)n+=t+":"+e[t]+";";return n}function o(e,t){return e+":"+t+";"}v.removeAttr=v.removeProp=function(e){return coll_each(this,function(t){t.attr[e]=null})},v.attr=v.prop=function(e,n){function r(e,n,r){e.attr[n]=t(r)}function o(e,t){for(var n in t)r(e,n,t[n])}if(1===arguments.length)return this.length>0?this[0].attr[e]:null;var i=is_String(e)?r:o;return coll_each(this,function(t){i(t,e,n)})},v.tag=function(e){return 0===arguments.length?this[0]&&this[0].tagName:coll_each(this,function(t){t.tagName=e})},v.css=function(t,i){if(arguments.length<=1&&"string"==typeof t){if(null==this.length)return null;var l=this[0].attr.style;if(null==l)return null;var u=n(l);return null==t?u:u[t]}if(null==t)return this;var s="object"==typeof t?r:o,a="object"==typeof t?obj_extend:e;return coll_each(this,function(e){var o=e.attr.style;if(null==o)return void(e.attr.style=s(t,i));var l=n(o);a(l,t,i),e.attr.style=r(l)})}}(),function(){function e(e){var t=e.attr["class"];return"string"==typeof t?t:""}function t(t,n){return-1!==(" "+e(t)+" ").indexOf(" "+n+" ")}function n(t,n){t.attr["class"]=(e(t)+" "+n).trim()}function r(t,n){t.attr["class"]=(" "+e(t)+" ").replace(" "+n+" ","").trim()}v.hasClass=function(e){return coll_find(this,function(n){return t(n,e)})};var o={add:function(e,r){t(e,r)===!1&&n(e,r)},remove:function(e,n){t(e,n)===!0&&r(e,n)},toggle:function(e,o){var i=t(e,o)===!0?r:n;i(e,o)}};arr_each(["add","remove","toggle"],function(e){var t=o[e];v[e+"Class"]=function(e){return coll_each(this,function(n){t(n,e)})}})}(),obj_extend(n.prototype,{clone:function(){return n(coll_map(this,d))},wrap:function(e){var t=n(e);if(0===t.length)return log_warn("Not valid wrapper",e),this;var r=coll_map(this,function(e){var n=t.clone()[0];if(g(n).nodes=[e],null!=e.parent){var r=coll_indexOf(e.parent.nodes,e);-1!==r&&e.parent.nodes.splice(r,1,n)}return n});return n(r)},wrapAll:function(e){var t=n(e);return 0===t.length?(log_error("Not valid wrapper",e),this):(this.parent().mask(t),g(t[0]).nodes=this.toArray(),this.pushStack(t))}}),arr_each(["empty","remove"],function(e){n.prototype[e]=function(){return coll_each(this,t[e])};var t={remove:function(e){null!=e.parent&&coll_remove(e.parent.nodes,e)},empty:function(e){e.nodes=null}}}),obj_extend(n.prototype,{each:function(e,t){for(var n=0;n<this.length;n++)e.call(t||this,this[n],n);return this},eq:function(e){return-1===e?this.slice(e):this.slice(e,e+1)},get:function(e){return 0>e?this[this.length-e]:this[e]},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments))}}),arr_each(["filter","children","closest","parent","find","first","last"],function(e){n.prototype[e]=function(t){var r,l,u=[],s=null==t?null:c(t,this.type,"closest"===e?"up":"down");switch(e){case"filter":return n(h(this,s));case"children":for(r=0;r<this.length;r++)l=this[r],null!=l.nodes&&(u=u.concat(null==s?l.nodes:h(l.nodes,s)));break;case"parent":for(r=0;r<this.length;r++)l=this[r].parent,!l||l.type===i.FRAGMENT||s&&f(l,s)||u.push(l);o(u);break;case"closest":case"find":if(null==s)break;for(r=0;r<this.length;r++)p(this[r][s.nextKey],s,u);break;case"first":case"last":var a;for(r=0;r<this.length;r++)if(a="first"===e?r:this.length-r-1,l=this[a],null==s||f(l,s)){u[0]=l;break}}return this.pushStack(u)}}),n}(Mask);return function(e,t){function n(e){return e.parentNode.removeChild(e)}function r(e){if(null!=e)for(var t=e.length,r=-1;++r<t;)n(e[r])}function o(e,t){return t.parentNode.insertBefore(e,t.nextSibling)}function i(e,t){return t.parentNode.insertBefore(e,t)}function l(){}function u(){}function s(){}function a(e,t){if(null==t&&(t=[]),null==e.components)return t;for(var n,r=e.components,o=0,i=r.length;i>o;o++)n=r[o],"validate"!==n.compoName?a(n):t.push(n);return t}var c,f,h,p,d,g,m,v,y=!1,_="undefined"!=typeof t?t:e.Compo||global.Compo,b=_.Dom.addEventListener,x=e.registerHandler,w=e.registerAttrHandler,C=e.registerUtil,j=_.config.getDOMLibrary();!function(){function e(e,t){for(var n,r=-1,o=t.length-1;++r<o;)n=t[r],null==e[n]&&(e[n]={}),e=e[n];return e}function t(e){return null==e||"object"!=typeof e?null:"number"==typeof e.length&&"function"==typeof e.slice?w.Array:"function"==typeof e.toUTCString?w.Date:null}function n(n,o,i,l){var s=l.length,c=s>1?e(n,l):n,f=l[s-1],h=c[f];if(s>1&&r(n,l),"length"===f){var p=t(c);if(null!=p)return u(c,p,function(){for(var e=i.length,t=-1;++t<e;)i[t].apply(null,arguments)}),h}return x(c,f,{get:function(){return h},set:function(e){if(e!==h){h=e;var r=0,l=i.length,s=t(e);if(null!=s)for(;l>r;r++)u(e,s,i[r]);if(null!=n[a][b])return void(n[a][b][o]=1);for(r=0;l>r;r++)i[r](e)}},configurable:!0,enumerable:!0}),h}function r(e,t){for(var n,r=i(e),l="",u=t.length-1,s=0;u>s;s++)n=t[s],l+=n+".",o(l,e,n,r),e=e[n]}function o(e,t,n,r){var o,i=t[n];x(t,n,{get:function(){return i},set:function(t){t!==i&&(o=i,i=t,r(e,o))},configurable:!0,enumerable:!0})}function i(e){return function(t,n){var r=e[a];if(null!=r)for(var o in r)if(0===o.indexOf(t)){var i=r[o].slice(0),l=i.length,u=0;if(0!==l){var s,f,p=obj_getProperty(e,o);for(u=0;l>u;u++)s=i[u],h(e,o,s),f=o.substring(t.length),h(n,f,s);for(u=0;l>u;u++)i[u](p);for(u=0;l>u;u++)c(e,o,i[u])}}}}function l(e,t,n){var r=g(e,t);return arr_contains(r,n)===!1&&r.push(n),r}c=function(e,r,o){for(var i=r.split("."),s=i.length,c=-1,f=e;++c<s&&(f=f[i[c]],null!=f);)if(null!=f[a]){var h=i.slice(c+1).join(".");if(null!=f[a][h]){l(f,h,o);var p=l(e,r,o);if(1===p.length){var d=i.splice(0,c);0!==d.length&&n(e,r,p,d,!0)}return}}var p=l(e,r,o);1===p.length&&n(e,r,p,i,!0);var g=obj_getProperty(e,r),m=t(g);null!=m&&u(g,m,o)},f=function(e,t,n){for(var r=t.split("."),o=r.length,i=-1,l=e;++i<o&&(l=l[r[i]],null!=l);)if(null!=l[a]){if(f(l,r.slice(i).join("."),n))return!0;break}var u=e[a];return null==u||null==u[t]?!1:arr_contains(u[t],n)},h=function(e,n,r){for(var o=n.split("."),i=o.length,l=-1,u=e;++l<i&&(u=u[o[l]],null!=u);)if(null!=u[a]){h(u,o.slice(l).join("."),r);break}var c=g(e,n),f=obj_getProperty(e,n);void 0===r?c.length=0:arr_remove(c,r);var p=t(f);null!=p&&s(f,p,r)},p=function(e){var t=e[a];null!=t&&(t[b]={})},d=function(e){var t=e[a],n=null==t?null:t[b];if(null!=n){t[b]=null;var r,o,i,l,u;for(r in n)if(o=e[a][r],l=null==o?0:o.length,0!==l)for(u=-1,i=r===y?e:obj_getProperty(e,r);++u<l;)o[u](i)}},g=function(e,t){var n=e[a];if(null==n&&(n={__dirty:null,__dfrTimeout:null,__mutators:null},x(e,"__observers",{value:n,enumerable:!1})),null==t)return n;var r=n[t];return null==r?n[t]=[]:r},m=function(e,n){var r=t(e);null!=r&&u(e,r,n)},v=function(e,t){s(e,null,t)};var u,s,a="__observers",y="__mutators",_="__dfrTimeout",b="__dirty",x=Object.defineProperty,w={Array:{throttle:!1,methods:["push","unshift","splice","pop","shift","reverse","sort","remove"]},Date:{throttle:!0,methods:["setDate","setFullYear","setHours","setMilliseconds","setMinutes","setMonth","setSeconds","setTime","setUTCDate","setUTCFullYear","setUTCHours","setUTCMilliseconds","setUTCMinutes","setUTCMonth","setUTCSeconds"]}};!function(){function e(e,r,o,i){var l=i===!0?n:t;return function(){return l(e,r,o,_Array_slice.call(arguments))}}function t(e,t,n,o){var i=g(e,y),l=t.apply(e,o);return r(e,i,n,o,l),l}function n(e,t,n,o){var i=g(e,y),l=t.apply(e,o),u=e[a];return null!=u[_]?l:(u[_]=setTimeout(function(){u[_]=null,r(e,i,n,o,l)}),l)}function r(e,t,n,r,o){if(0!==t.length){var i=e[a];if(null!=i[b])return void(i[b][y]=1);for(var l,u=t.length,s=-1;++s<u;)l=t[s],"function"==typeof l&&l(e,n,r,o)}}u=function(t,n,r){var o=n.methods,i=n.throttle,l=g(t,y);if(0===l.length)for(var u,s,a=o.length,c=-1;++c<a;)u=o[c],s=t[u],null!=s&&(t[u]=e(t,s,u,i));l[l.length++]=r},s=function(e,t,n){var r=g(e,y);return void 0===n?void(r.length=0):void arr_remove(r,n)}}()}();var N;!function(){N=function(e){return null==e||""===e?null:("string"==typeof e&&(e=new Date(e)),isNaN(e)===!1&&"function"==typeof e.getFullYear?e:null)}}();var A,k,O,S,E;!function(){A=function(e,t,n,r){if(null==e.components)return o(n,r||e.placeholder);var l,u=e.components,s=null,a=!0,c=u.length,f=t-1;if(null==s)for(;++f<c;)if(l=u[f].elements,l&&l.length){s=l[0];break}if(null==s)for(a=!1,f=c>t?t:c;--f>-1;)if(l=u[f].elements,l&&l.length){s=l[l.length-1];break}return null==s&&(s=r||e.placeholder),a?i(n,s):o(n,s)
},k=function(t,n,r,o,i){return e.render(n,r,o,i,t)},O=function(e,t){if(null==e)return!1;null!=e.elements&&(r(e.elements),e.elements=null),_.dispose(e);var n=t&&t.components||e.parent&&e.parent.components;return null==n?(log_error("Parent Components Collection is undefined"),!1):arr_remove(n,e)},S=function(e){_.signal.emitIn(e,"domInsert")},E=function(e,t){if("function"==typeof e.dispose){var n=e.dispose;return void(e.dispose=function(){t.call(this),n.call(this)})}e.dispose=t}}();var D,T,R,L,P,M,I,F;!function(){function t(e,t,i,l,u){if(null!=l){if("object"==typeof l){var s=T(l.accessor,t,null,i);return null==s||"object"!=typeof s?void console.error("Binding failed to an object over accessor",l.ref):void e(s,l.ref,u)}var a=l,c=a.split("."),f=c.length;if(f>1){var h=c[0];if("$c"===h)return i=r(i,c.slice(1),f-1),void e(i,a.substring(3),u);if("$a"===h||"$ctx"===h)return}var s=null;o(t,c,f)&&(s=t),null==s&&(s=n(i,c,f)),null==s&&(s=t),e(s,a,u)}}function n(e,t,n){for(var r;null!=e;){if(r=e.scope,null!=r&&o(r,t,n))return r;e=e.parent}return null}function r(e,t,n){for(;null!=e;){if(o(e,t,n))return e;e=e.parent}return e}function o(e,t,n){if(null==e)return!1;for(var r=0;n>r;r++)if(e=e[t[r]],null==e)return!1;return!0}var i=e.Utils.Expression;T=i.eval,I=i.parse,F=i.varRefs,D=function(e,t,n,r){if("."===e)return t;var o=T(e,t,n,r);return null==o?"":o},R=function(e,n,r,o,i){if("."===e)return void m(n,i);var l=I(e),u=F(l,n,r,o);if(null!=u){if("string"==typeof u)return void t(c,n,o,u,i);for(var s,a=null!=u.length&&"function"==typeof u.splice,f=a===!0?u.length:1,h=0;f>h;h++)s=a===!0?u[h]:u,t(c,n,o,s,i)}},L=function(e,n,r,o){if("function"==typeof r&&log_warn("[mask.binding] - expression unbind(expr, model, controller, callback)"),"."===e)return void v(n,o);var i,l=F(e,n,null,r);if(null!=l){if("string"==typeof l)return void t(h,n,r,l,o);for(var i,u=null!=l.length&&"function"==typeof l.splice,s=u===!0?l.length:1,a=0;s>a;a++)i=u===!0?l[a]:l,t(h,n,r,i,o)}},P=function(e,t,n,r,o){var i=0;return function(){if(++i>1)return i=0,void log_warn("<mask:bind:expression> Concurent binder detected",e);var l=D(e,t,n,r);if(arguments.length>1){var u=_Array_slice.call(arguments);u[0]=l,o.apply(this,u)}else o(l);i--}},M=function(e){var t=0;return function(){return++t>1?(t=0,void log_warn("<listener:expression> concurent binder")):(e(),void t--)}}}();var U,H;!function(){U=function(e,t,n){for(var r,o,i,l,u=e.split(";"),s=[],a=0,c=u.length;c>a;a++)r=u[a].split(":"),1===r.length||2===r.length?(i=2===r.length?r[0]:n,o=r[2===r.length?1:0],l=H(o.trim(),i,t),null!=l&&s.push(l)):log_error('Too much ":" in a signal def.',u[a]);return s},H=function(e,t,n){if(n!==!0)return{signal:e,type:t};var r=e.indexOf(".");return-1===r?(log_error("No pipe name in a signal",e),null):{signal:e.substring(r+1),pipe:e.substring(0,r),type:t}}}();var $;!function(){function e(e,t,n){return null==e||"function"!=typeof e[t]?(log_error("BindingProvider.",n,"should be a function. Property:",t),!1):!0}function t(e,t){var n=e.ctr.parent;if(null!=n[t])return n;var r=e.model;return null!=r[t]?r:(log_error("BindingProvider. Accessor `",t,"`should be a function"),null)}function n(e){var t=e.getFullYear(),n=e.getMonth()+1,r=e.getDate();return t+"-"+(10>n?"0":"")+n+"-"+(10>r?"0":"")+r}function r(e){var t=e.getHours(),n=e.getMinutes();return t+":"+(10>n?"0":"")+n}var o={get:function(e,n){var r=e.objGetter;if(null==r)return D(n,e.model,e.ctx,e.ctr);var o=t(e,r);return null==o?null:o[r](n,e.model,e.ctr.parent)},set:function(e,n,r,o){var i=o.objSetter;if(null==i)return void obj_setProperty(e,n,r);var l=t(o,i);null!=l&&l[i](n,r,o.model,o.ctr.parent)}},i={get:function(t){var n=t.domGetter;if(null==n)return obj_getProperty(t,t.property);var r=t.ctr.parent;return e(r,n,"Getter")===!1?null:r[n](t.element)},set:function(t,n){var r=t.domSetter;if(null==r)return void obj_setProperty(t,t.property,n);var o=t.ctr.parent;e(o,r,"Setter")!==!1&&o[r](n,t.element)}},l={domSet:function(e){return function(t,n){var r=N(n);t.element.value=null==r?"":e(r)}},objSet:function(e){return function(t,n,r){var o=N(r);if(null!=o){var i=N(obj_getProperty(t,n));return null==i?void obj_setProperty(t,n,o):void e(i,o)}}}};$={objectWay:o,domWay:i,SELECT:{get:function(e){var t=e.element,n=t.selectedIndex;if(-1===n)return"";var r=t.options[n],o=r.getAttribute("value");return null==o?r.getAttribute("name"):o},set:function(e,t){var n,r,o,i=e.element,l=i.options,u=l.length;for(o=0;u>o;o++)if(n=l[o],r=n.getAttribute("value"),null==r&&(r=n.getAttribute("name")),r==t)return void(i.selectedIndex=o);log_warn("Value is not an option",t)}},DATE:{domWay:{get:i.get,set:function(e,t){var r=N(t);e.element.value=null==r?"":n(r)}},objectWay:{get:o.get,set:l.objSet(function(e,t){e.setFullYear(t.getFullYear()),e.setMonth(t.getMonth()),e.setDate(t.getDate())})}},TIME:{domWay:{get:i.get,set:l.domSet(r)},objectWay:{get:o.get,set:l.objSet(function(e,t){e.setHours(t.getHours()),e.setMinutes(t.getMinutes()),e.setSeconds(t.getSeconds())})}}}}();var z={};e.registerBinding=function(e,t){z[e]=t};var B;!function(){function t(e){var t=e.expression,n=e.model,r=e.objectChanged=e.objectChanged.bind(e);if(e.binder=P(t,n,e.ctx,e.ctr,r),R(t,n,e.ctx,e.ctr,e.binder),"dual"===e.bindingType){var o=e.ctr.attr;if(!o["change-slot"]&&!o["change-pipe-event"]){var i=e.element,l=o["change-event"]||o.changeEvent||"change",u=e.domChanged.bind(e);b(i,l,u)}if(!e.objectWay.get(e,e.expression))return setTimeout(function(){e.domWay.get(e)&&e.domChanged()}),e}return e.objectChanged(),e}function n(e,t,r){if(null!=e){var o=e.slots;(null==o||"function"!=typeof o[t]||o[t].apply(e,r)!==!1)&&n(e.parent,t,r)}}e.BindingProvider=B=function(e,t,n,r){null==r&&(r=":bind"===n.compoName?"single":"dual");var o,i=n.attr;if(this.node=n,this.ctr=n,this.ctx=null,this.model=e,this.element=t,this.value=i.value,this.property=i.property,this.domSetter=i.setter||i["dom-setter"],this.domGetter=i.getter||i["dom-getter"],this.objSetter=i["obj-setter"],this.objGetter=i["obj-getter"],this["typeof"]=i["typeof"]||null,this.dismiss=0,this.bindingType=r,this.log=!1,this.signal_domChanged=null,this.signal_objectChanged=null,this.locked=!1,null==this.property&&null==this.domGetter)switch(t.tagName){case"INPUT":if(o=t.getAttribute("type"),"checkbox"===o){this.property="element.checked";break}if("date"===o){var l=$.DATE;this.domWay=l.domWay,this.objectWay=l.objectWay}"number"===o&&(this["typeof"]="Number"),this.property="element.value";break;case"TEXTAREA":this.property="element.value";break;case"SELECT":this.domWay=$.SELECT;break;default:this.property="element.innerHTML"}if(i.log&&(this.log=!0,"log"!==i.log&&(this.logExpression=i.log)),i["x-signal"]){var u=U(i["x-signal"],null,"dom")[0],s=u&&u.type;switch(s){case"dom":case"object":this["signal_"+s+"Changed"]=u.signal;break;default:log_error("Signal typs is not supported",u)}}if(i["x-pipe-signal"]){var u=U(i["x-pipe-signal"],!0,"dom")[0],s=u&&u.type;switch(s){case"dom":case"object":this["pipe_"+s+"Changed"]=u;break;default:log_error("Pipe type is not supported")}}if(i["dom-slot"]){this.slots={};var a=n.parent,c=a.parent;a.parent=this,this.parent=c,this.slots[i["dom-slot"]]=function(e,t){this.domChanged(e,t)}}var f=i["object-pipe-slot"]||i["x-pipe-slot"];if(f){var h=f,p=h.indexOf("."),d=h.substring(0,p),u=h.substring(p+1);this.pipes={},this.pipes[d]={},this.pipes[d][u]=function(){this.objectChanged()},_.pipe.addController(this)}if(i.expression){if(this.expression=i.expression,null==this.value&&"single"!==r){var g=F(this.expression);"string"==typeof g?this.value=g:log_warn("Please set value attribute in DualBind Control.")}}else this.expression=this.value},B.create=function(e,t,n,r){var o,i=n.attr.bindingProvider,l=null==i?null:z[i];return"function"==typeof l?new l(e,t,n,r):(o=new B(e,t,n,r),null!=l&&obj_extend(o,l),o)},B.bind=function(e){return t(e)},B.prototype={constructor:B,dispose:function(){L(this.expression,this.model,this.ctr,this.binder)},objectChanged:function(e){if(!(this.dismiss-->0)){if(this.locked===!0)return void log_warn("Concurance change detected",this);if(this.locked=!0,null==e&&(e=this.objectWay.get(this,this.expression)),this.domWay.set(this,e),this.log&&console.log("[BindingProvider] objectChanged -",e),this.signal_objectChanged&&n(this.ctr,this.signal_objectChanged,[e]),this.pipe_objectChanged){var t=this.pipe_objectChanged;_.pipe(t.pipe).emit(t.signal)}this.locked=!1}},domChanged:function(e,t){if(this.locked===!0)return void log_warn("Concurance change detected",this);this.locked=!0,null==t&&(t=this.domWay.get(this));var r=this["typeof"];if(null!=r){var o=window[r];t=o(t)}var i=!0,l=this.ctr.validations;if(l)for(var u,s=l.length,a=-1;++a<s;)if(u=l[a],u.validate(t,this.element,this.objectChanged.bind(this))===!1){i=!1;break}if(i&&(this.dismiss=1,this.objectWay.set(this.model,this.value,t,this),this.dismiss=0,this.log&&console.log("[BindingProvider] domChanged -",t),this.signal_domChanged&&n(this.ctr,this.signal_domChanged,[t]),this.pipe_domChanged)){var c=this.pipe_domChanged;_.pipe(c.pipe).emit(c.signal)}this.locked=!1},objectWay:$.objectWay,domWay:$.domWay},obj_extend(B,{addObserver:c,removeObserver:h})}(),x(":visible",l),l.prototype={constructor:l,refresh:function(e,t){t.style.display=D(this.attr.check,e)?"":"none"},renderStart:function(e,t,n){this.refresh(e,n),this.attr.bind&&c(e,this.attr.bind,this.refresh.bind(this,e,n))}},function(){function e(){}x(":bind",e),e.prototype={constructor:e,renderEnd:function(e,t,n,r){this.provider=B.create(t,r,this,"single"),B.bind(this.provider)},dispose:function(){this.provider&&"function"==typeof this.provider.dispose&&this.provider.dispose()}}}(),x(":dualbind",u),u.prototype={constructor:u,renderEnd:function(t,n,r,o){if(this.provider=B.create(n,o,this),this.components)for(var i,l=0,u=this.components.length;u>l;l++)i=this.components[l],":validate"===i.compoName&&(this.validations||(this.validations=[])).push(i);if(!this.attr["no-validation"]&&!this.validations){var s=n.Validate,a=this.provider.value;if(null==s&&-1!==a.indexOf(".")){for(var c=a.split("."),l=0,f=c.length,h=n[c[0]];null==s&&++l<f&&h;)s=h.Validate,h=h[c[l]];a=c.slice(l).join(".")}var p=s&&s[a];"function"==typeof p&&(p=e.getHandler(":validate").createCustom(o,p),(this.validations||(this.validations=[])).push(p))}B.bind(this.provider)},dispose:function(){this.provider&&"function"==typeof this.provider.dispose&&this.provider.dispose()},handlers:{attr:{"x-signal":function(){}}}},function(){function n(){}function r(e,t){this.fn=e,this.message=t}function o(e,t,n){log_warn("Validate Notification:",e,t);var r=j(e).next("."+l);return 0===r.length&&(r=j("<div>").addClass(l).html("<span></span><button>cancel</button>").insertAfter(e)),r.children("button").off().on("click",function(){r.hide(),n&&n()}).end().children("span").text(t).end().show()}function i(e){return j(e).next("."+l).hide()}var l="-validate-invalid";e.registerValidator=function(e,t){u[e]=t},x(":validate",n),n.prototype={constructor:n,attr:{},renderStart:function(e,t,o){if(this.element=o,this.attr.value){var i=n.resolveFromModel(e,this.attr.value);i&&(this.validators=[new r(i)])}},validate:function(e,t,n){null==t&&(t=this.element),this.attr&&(null==e&&this.attr.getter&&(e=obj_getProperty({node:this,element:t},this.attr.getter)),null==e&&this.attr.value&&(e=obj_getProperty(this.model,this.attr.value))),null==this.validators&&this.initValidators();for(var r,o=0,i=this.validators.length;i>o;o++)if(r=this.validators[o].validate(e),r&&!this.attr.silent)return this.notifyInvalid(t,r,n),!1;return this.makeValid(t),!0},notifyInvalid:function(e,t,n){return o(e,t,n)},makeValid:function(e){return i(e)},initValidators:function(){this.validators=[];for(var e in this.attr){switch(e){case"message":case"value":case"getter":continue}if(e in u!=!1){var t=u[e];this.validators.push(new r(t(this.attr[e],this),this.attr.message))}else log_error("Unknown Validator:",e,this)}}},n.resolveFromModel=function(e,t){return obj_getProperty(e.Validate,t)},n.createCustom=function(e,t){var o=new n;return o.element=e,o.validators=[new r(t)],o},r.prototype.validate=function(e){var t=this.fn(e);return t===!1?this.message||"Invalid - "+e:t},x(":validate:message",t({template:"div."+l+' { span > "~[bind:message]" button > "~[cancel]" }',onRenderStart:function(e){"string"==typeof e&&(e={message:e}),e.cancel||(e.cancel="cancel"),this.model=e},compos:{button:"$: button"},show:function(e,t){var n=this;this.model.message=e,this.compos.button.off().on(function(){n.hide(),t&&t()}),this.$.show()},hide:function(){this.$.hide()}}));var u={match:function(e){return function(t){return new RegExp(e).test(t)}},unmatch:function(e){return function(t){return!new RegExp(e).test(t)}},minLength:function(e){return function(t){return t.length>=parseInt(e,10)}},maxLength:function(e){return function(t){return t.length<=parseInt(e,10)}},check:function(e,t){return function(n){return D("x"+e,t.model,{x:n},t)}}}}(),x(":validate:group",s),s.prototype={constructor:s,validate:function(){for(var e,t=a(this),n=0,r=t.length;r>n;n++)if(e=t[n],!e.validate())return!1;return!0}},function(){function e(e,t,n){return e?null==t||""===t?e+" "+n:e.replace(t,n):n}function t(e){return function(t){e.textContent=t}}function n(t,n,r){return function(o){var i=t.getAttribute(n),l=e(i,r,o);t.setAttribute(n,l),r=o}}function r(t,n,r){return function(o){switch(typeof t[n]){case"boolean":return void(r=t[n]=!!o);case"number":return void(r=t[n]=Number(o));case"string":return void(r=t[n]=e(t[n],r,o));default:return void log_warn("Unsupported elements property type",n)}}}function o(e,o,i,l,u){if("node"===e)return t(i);if("attr"===e){switch(u){case"value":case"disabled":case"checked":case"selected":case"selectedIndex":return r(i,u,l)}return n(i,u,l)}throw Error("Unexpected binder type: "+e)}function i(e,t,n,r,i,l,u,s){var a=o(s,t,i,e,u),c=P(t,n,r,l,a);R(t,n,r,l,c),E(l,function(){L(t,n,l,c)})}C("bind",{mode:"partial",current:null,element:null,nodeRenderStart:function(e,t,n,r,o){var i=D(e,t,n,o);return this.element=document.createTextNode(i),this.current=i},node:function(e,t,n,r,o){return i(this.current,e,t,n,this.element,o,null,"node"),this.element},attrRenderStart:function(e,t,n,r,o){return this.current=D(e,t,n,o)},attr:function(e,t,n,r,o,l){return i(this.current,e,t,n,r,o,l,"attr"),this.current}})}(),w("xx-visible",function(e,t,n,r,o,i){var l=P(t,n,r,i,function(e){o.style.display=e?"":"none"});R(t,n,r,i,l),E(i,function(){L(t,n,i,l)}),D(t,n,r,i)||(o.style.display="none")}),w("x-toggle","client",function(e,t,n,r,o,i){var l=t.substring(0,t.indexOf(":")),u=t.substring(l.length+1),s=F(u);"string"!=typeof s&&(s=s[0]),b(o,l,function(){var e=D(u,n,r,i);obj_setProperty(n,s,e)})}),w("x-class-toggle","client",function(e,t,n,r,o){var i=t.substring(0,t.indexOf(":")),l=t.substring(i.length+1).trim();b(o,i,function(){j(o).toggleClass(l)})}),function(){var n,o,l,u,s,a=e.getStatement();!function(){n=function(e,t,n,r,o){return a[e].getNodes(t,n,r,o)},o=function(e,t,n,r,o){if(null==e)return null;var i=[];return builder_build(e,t,n,r,o,i),i},l=function(e,t){e.placeholder=document.createComment(""),t.appendChild(e.placeholder)},u=function(e,t,n,r,o,i){e.parent=i,e.model=n,e.refresh=fn_proxy(e.refresh,e),e.binder=P(e.expr||e.expression,n,r,i,e.refresh),R(e.expr||e.expression,n,r,i,e.binder)},s=function(e,t){if(null!=e)for(var n,r="function"==typeof e.splice,o=r?e.length:1,i=-1;++i<o;)n=r?e[i]:e,n.style.display=t?"":"none"}}(),function(){function t(){}function r(e,t,n,r,o,i,l,u){for(e.model=o,e.ctx=i,e.controller=u,e.refresh=fn_proxy(e.refresh,e),e.binder=M(e.refresh),e.index=n,e.Switch=[{node:t,elements:null}],R(t.expression,o,i,u,e.binder);;){if(t=t.nextSibling,null==t||"else"!==t.tagName)break;e.Switch.push({node:t,elements:null}),t.expression&&R(t.expression,o,i,u,e.binder)}null!=n&&(e.Switch[n].elements=r)}e.registerHandler("+if",{meta:{serializeNodes:!0},render:function(e,t,r,i,l){for(var u=this,s=n("if",u,e,t,i),a=0,c=u;;){if(c.nodes===s)break;if(a++,c=u.nextSibling,null==c||"else"!==c.tagName){a=null;break}}return this.attr["switch-index"]=a,o(s,e,t,r,i,l)},renderEnd:function(e,n,o,i,l){var u=new t,s=this.attr["switch-index"];return u.placeholder=document.createComment(""),i.appendChild(u.placeholder),r(u,this,s,e,n,o,i,l),u},serializeNodes:function(t){for(var n=[t];;){if(t=t.nextSibling,null==t||"else"!==t.tagName)break;n.push(t)}return e.stringify(n)}}),t.prototype={compoName:"+if",ctx:null,model:null,controller:null,index:null,Switch:null,binder:null,refresh:function(){for(var t,n=this,r=n.Switch,o=r.length,l=-1,u=n.index,a=n.model,c=n.ctx,f=n.controller;++l<o&&(t=r[l].node.expression,null!=t)&&!D(t,a,c,f););if(u!==l){if(null!=u&&s(r[u].elements,!1),l===o)return void(n.index=null);this.index=l;var h=r[l];if(null!=h.elements)return void s(h.elements,!0);var p=e.render(h.node.nodes,a,c,null,f),d=p.nodeType===Node.DOCUMENT_FRAGMENT_NODE?_Array_slice.call(p.childNodes):p;i(p,n.placeholder),h.elements=d}},dispose:function(){for(var e,t,n=this.Switch,r=n.length,o=-1;++o<r;)e=n[o],t=e.node.expression,t&&L(t,this.model,this.controller,this.binder),e.node=null,e.elements=null;this.controller=null,this.model=null,this.ctx=null}}}(),function(){function t(){}function n(e,t,n,r,o){if(u=f.getNodes(e,t,n,r,o),c=null,null!=u){for(var i=t.length,l=-1;++l<i&&t[l].nodes!==u;);c=l===i?null:l}}function r(e,t,n,r,o,i,l,u){e.ctx=i,e.expr=t.expression,e.model=o,e.controller=u,e.index=n,e.nodes=t.nodes,e.refresh=fn_proxy(e.refresh,e),e.binder=P(e.expr,o,i,u,e.refresh),e.Switch=new Array(t.nodes.length),null!=n&&(e.Switch[n]=r),R(t.expression,o,i,u,e.binder)}var u,c,f=a["switch"],h="switch-index";e.registerHandler("+switch",{meta:{serializeNodes:!0},serializeNodes:function(t){return e.stringify(t)},render:function(e,t,r,i,l){var s=D(this.expression,e,t,i);return n(s,this.nodes,e,t,i),null==u?null:(this.attr[h]=c,o(u,e,t,r,i,l))},renderEnd:function(e,n,o,i,u){var s=new t,a=this.attr[h];return l(s,i),r(s,this,a,e,n,o,i,u),s}}),t.prototype={compoName:"+switch",ctx:null,model:null,controller:null,index:null,nodes:null,Switch:null,binder:null,refresh:function(t){var r=this,o=r.Switch,l=(o.length,r.index),a=r.model,f=r.ctx,h=r.controller;if(n(t,r.nodes,a,f,h),c!==l){if(null!=l&&s(o[l],!1),null==c)return void(r.index=null);this.index=c;var p=o[c];if(null!=p)return void s(p,!0);var d=e.render(u,a,f,null,h),g=d.nodeType===Node.DOCUMENT_FRAGMENT_NODE?_Array_slice.call(d.childNodes):d;i(d,r.placeholder),o[c]=g}},dispose:function(){L(this.expr,this.model,this.controller,this.binder),this.controller=null,this.model=null,this.ctx=null;var e,t,n,r,o=this.Switch;for(e in o)if(t=o[e],null!=t)for(r=t.length,n=-1;++n<r;)null!=t[n].parentNode&&t[n].parentNode.removeChild(t[n])}}}(),function(){function n(e){this.expr=e.expression,this.nodes=e.nodes}function o(e,t,n,r,o){var i=[];return builder_build(e,t,n,r,o,i),i}a["with"];e.registerHandler("+with",{meta:{serializeNodes:!0},rootModel:null,render:function(e,t,n,r){var i=this.expression,l=this.nodes,u=T(i,e,t,r);return this.rootModel=e,o(l,u,t,n,r)},onRenderStartClient:function(e,t){this.rootModel=e,this.model=T(this.expression,e,t,this)},renderEnd:function(e,t,r,o,i){t=this.rootModel||t;var u=new n(this);return u.elements=e,u.model=t,u.parent=i,u.refresh=fn_proxy(u.refresh,u),u.binder=P(u.expr,t,r,i,u.refresh),R(u.expr,t,r,i,u.binder),l(u,o),u}}),n.prototype={compoName:"+with",elements:null,binder:null,model:null,parent:null,refresh:function(e){if(r(this.elements),this.components){for(var n=this.components.length,l=-1;++l<n;)t.dispose(this.components[l]);this.components.length=0}var u=document.createDocumentFragment();this.elements=o(this.nodes,e,null,u,this),i(u,this.placeholder),S(this)},dispose:function(){L(this.expr,this.model,this.parent,this.binder),this.parent=null,this.model=null,this.ctx=null}}}(),function(){function t(e){this.expr=e.expression,this.nodes=e.nodes}function n(e,t,n,r,o){var i=[];return builder_build(e,t,n,r,o,i),i}var r=a.visible;e.registerHandler("+visible",{meta:{serializeNodes:!0},render:function(e,t,r,o){return n(this.nodes,e,t,r,o)},renderEnd:function(e,n,r,o,i){var l=new t(this);return l.elements=e,l.model=n,l.parent=i,l.refresh=fn_proxy(l.refresh,l),l.binder=P(l.expr,n,r,i,l.refresh),R(l.expr,n,r,i,l.binder),l.refresh(),l}}),t.prototype={compoName:"+visible",elements:null,binder:null,model:null,parent:null,refresh:function(){var e=D(this.expr,this.model,this.ctx,this);r.toggle(this.elements,e)},dispose:function(){L(this.expr,this.model,this.parent,this.binder),this.parent=null,this.model=null,this.ctx=null}}}(),function(){function t(e){for(var t,n=e.length,r=-1;++r<n;)switch(t=e[r],typeof t){case"string":case"number":case"boolean":e[r]=Object(t)}}function n(e,t){for(var n=e.node.components,r=0,o=n.length,l=0,u=null,s=null,a=null,c=document.createDocumentFragment(),f=[];o>r;r++)if(a=n[r],null!=a.elements&&0!==a.elements.length)for(l=0,u=a.elements.length;u>l;l++)s=a.elements[l],s.parentNode.removeChild(s);e:for(l=0,u=t.length;u>l;l++){for(r=0;o>r;r++)if(t[l]===e._getModel(n[r])){f[l]=n[r];continue e}console.warn("No Model Found for",t[l])}for(r=0,o=f.length;o>r;r++)if(a=f[r],null!=a.elements&&0!==a.elements.length)for(l=0,u=a.elements.length;u>l;l++)s=a.elements[l],c.appendChild(s);e.components=e.node.components=f,i(c,e.placeholder)}function r(e,t,n,r,o){var i=e.node,l=i.components;null==l&&(l=i.components=[]);var u=(e.prop1,e.prop2,e.type,e.ctx),s=e.node;if(null!=t&&null!=n){var a=t,c=t+n;for(c>l.length&&(c=l.length);c>a;a++)O(l[a],i)&&(a--,c--)}if(null!=r&&o&&o.length){var f,a=l.length,h=e._build(i,o,u,s),p=l.splice(a);for(A(i,r,h,e.placeholder),l.splice.apply(l,[r,0].concat(p)),a=0,f=p.length;f>a;a++)_.signal.emitIn(p[a],"domInsert")}}function o(e,t){for(var n,r=e.components,o=r.length;--o>-1;)n=r[o],-1!==t.indexOf(n.model)&&O(n,e.node)}var l={model:null,parent:null,refresh:function(e,l,u,s){var a,c=0,f=this.node,h=(this.model,this.ctx),p=this.node;if(null==l){var d=f.components;if(null!=d){for(var a=d.length,c=-1;++c<a;)O(d[c],f)&&(c--,a--);d.length=0}var g=this._build(f,e,h,p);return i(g,this.placeholder),void arr_each(f.components,S)}var m=e;switch(t(e),l){case"push":r(this,null,null,m.length-1,m.slice(m.length-1));break;case"pop":r(this,m.length,1);break;case"unshift":r(this,null,null,0,m.slice(0,1));break;case"shift":r(this,0,1);break;case"splice":var v=u[0],y=1===u.length?this.components.length:u[1],_=u.length>2?m.slice(u[0],u.length-2+u[0]):null;r(this,v,y,v,_);break;case"sort":case"reverse":n(this,m);break;case"remove":null!=s&&s.length&&o(this,s)}},dispose:function(){L(this.expr||this.expression,this.model,this.parent,this.binder)}};!function(){function n(e,t){this.prop1=t[o],this.prop2=t[i],this.type=t[s],this.expr=t[c],null==e.components&&(e.components=[]),this.node=e,this.components=e.components}var r=a["for"],o="for-prop-1",i="for-prop-2",s="for-type",c="for-expr";e.registerHandler("+for",{meta:{serializeNodes:!0},serializeNodes:function(t){return e.stringify(t)},render:function(e,n,l,u,a){var f=r.parseFor(this.expression),h=this.attr;h[o]=f[0],h[i]=f[1],h[s]=f[2],h[c]=f[3];var p=T(f[3],e,n,u);null!=p&&(is_Array(p)&&t(p),r.build(p,f,this.nodes,e,n,l,this,a))},renderEnd:function(e,t,r,o,i){var l=new n(this,this.attr);return l.placeholder=document.createComment(""),o.appendChild(l.placeholder),u(l,this,t,r,o,i),l},getHandler:function(e,t){return r.getHandler(e,t)}}),n.prototype={compoName:"+for",model:null,parent:null,refresh:l.refresh,dispose:l.dispose,_getModel:function(e){return e.scope[this.prop1]},_build:function(e,t,n,o){var i=r.getNodes(e.nodes,t,this.prop1,this.prop2,this.type);return builder_build(i,this.model,n,null,o)}}}(),function(){function n(e,t,n,o,i,l){for(var u,s=t.length,a=(new Array(s),0);s>a;a++)u=r(e,a),builder_build(u,t[a],n,o,i,l)}function r(e,t){var n=new o;return n.scope={index:t},{type:Dom.COMPONENT,tagName:"each::item",nodes:e,controller:function(){return n}}}function o(){}function i(e){this.expression=e.expression,this.nodes=e.nodes,null==e.components&&(e.components=[]),this.node=e,this.components=e.components}a.each;e.registerHandler("+each",{meta:{serializeNodes:!0},serializeNodes:function(t){return e.stringify(t)},render:function(e,r,o,i,l){var u=D(this.expression,e,r,i);null!=u&&(t(u),n(this.nodes,u,r,o,this,l))},renderEnd:function(e,t,n,r,o){var l=new i(this,this.attr);return l.placeholder=document.createComment(""),r.appendChild(l.placeholder),u(l,this,t,n,r,o),l}}),e.registerHandler("each::item",o),o.prototype={compoName:"each::item",scope:null,model:null,modelRef:null,parent:null,renderStart:y===!0?function(){var e=this.parent.expression;this.modelRef=""+("."===e?"":"("+e+")")+'."'+this.scope.index+'"'}:null,renderEnd:function(e){this.elements=e},dispose:function(){null!=this.elements&&(this.elements.length=0,this.elements=null)}},i.prototype={compoName:"+each",refresh:l.refresh,dispose:l.dispose,_getModel:function(e){return e.model},_build:function(e,t,r,o){var i=document.createDocumentFragment();return n(e.nodes,t,r,i,o),i}}}()}()}()}(Mask,Compo),Mask.Compo=Compo,Mask.jmask=jmask,exports.mask=Mask}),function(e,t){"use strict";null==e&&(e="undefined"!=typeof window&&"undefined"!=typeof document?window:global),e.ruta=t(e)}(this,function(e){"use strict";function t(){return null==v&&(v=new _(b)),v}var n,r=e.mask||Mask,o=!0,i=Array.prototype.slice;!function(){n=function(){var e=i.call(arguments);console.error.apply(console,["Ruta"].concat(e))}}();var l,u,s,a;!function(){function e(e){for(var t,n,r=e.trim().split(/\s+/),o=r.length,i=-1;++i<o;)if(n=r[i],0!==n.length&&(t=n[0],'"'===t||"'"===t))for(var l=i;o>i;i++)if(n=r[i],n[n.length-1]===t){var u=r.splice(l,i-l+1).join(" ").slice(1,-1);r.splice(l,0,u),o=r.length;break}return r}function t(e){for(var t,n,r,o=e.length,i=0,l={},u=[];o>i;i++)r=e[i],"-"!==r[0]?u.push(r):(t=r.replace(/^[\-]+/,""),o-1>i&&"-"!==e[i+1][0]?(n=e[i+1],i++):n=!0,l[t]=n);return{path:u,query:l}}l=function(e){for(var t=e.length,n=0,r=t-1;t>n&&"/"===e[n];n++);for(;r>n&&"/"===e[r];r--);return e.substring(n,r+1)},u=function(e){return e=l(e),""===e?[]:e.split("/")},s=function(e){return"/"+e.join("/")},a=function(n){"string"==typeof n&&(n=e(n));var r=t(n);return g(r)}}();var c,f;!function(){function e(e,t,n){for(var r,o=t.split("."),i=o.length,l=-1;++l<i-1;)r=o[l],null==e[r]&&(e[r]={}),e=e[r];e[o[l]]=n}function t(e){try{return decodeURIComponent(e)}catch(t){return n("decode:URI malformed"),""}}function r(e){try{return encodeURIComponent(e)}catch(t){return n("encode:URI malformed"),""}}c=function(n,r){null==r&&(r="&");for(var o,i,l={},u=n.split(r),s=0,a=u.length;a>s;s++)o=u[s].split("="),i=null==o[1]?"":t(o[1]),e(l,o[0],i);return l},f=function(e,t){null==t&&(t="&");var n,o,i="";for(n in e)o=e[n],null!=o&&("boolean"==typeof o&&(o=null),i=i+(i?t:"")+n,null!=o&&(i+="="+r(o)));return i}}();var h,p,d;!function(){h=function(e,t){return new RegExp(e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),t)},p=function(e){if("^"===e[0])return new RegExp(e);for(var t=e.split("|"),n=0,r=t.length;r>n;n++)t[n]="^"+t[n]+"$";return new RegExp(t.join("|"))},d=function(e){var t=e.indexOf("("),r=e.lastIndexOf(")");if(-1===t||-1===r)return n("Expected alias part with regexp",e),null;var o=e.substring(t+1,r);return{alias:e.substring(1,t),matcher:p(o)}}}();var g,m;!function(){g=function(e){var t=s(e.path);return null==e.query?t:t+"?"+f(e.query,"&")},m=function(e){var t=e.indexOf("?"),n=-1===t?e:e.substring(0,t);return{path:u(n),query:-1===t?null:c(e.substring(t+1),"&")}}}();var v,y=function(){function e(e,t){this.method=36===e.charCodeAt(0)?e.substring(1,e.indexOf(" ")).toUpperCase():null,null!=this.method&&(e=e.substring(this.method.length+2)),this.strict=o,this.value=t,this.definition=e,r(this,e)}function t(){this.routes=[]}var r,i;!function(){function e(e,t){for(var n in e)if(t.test(n))return e[n]}r=function(e,t){var r=t.charCodeAt(0);switch(r){case 33:e.strict=!0,t=t.substring(1);break;case 94:e.strict=!1,t=t.substring(1);break;case 40:var o=1,i=t.length-1;return 41!==t.charCodeAt(t.length-1)&&(n("parser - expect group closing"),i++),void(e.match=new RegExp(t.substring(o,i)))}var l,u,s,a,c,f,h=t.split("/"),d=0,g=h.length,m=h[g-1];u=m.indexOf("?"),u>(1===g?-1:0)&&(l=m.substring(u+1),h[g-1]=m.substring(0,u));for(var v,y,_,b=!0,x=e.path=[];g>d;d++)if(s=h[d],""!==s){a=s.charCodeAt(0),f=s.charCodeAt(1),v=63===a,y=58===(v?f:a),c=0,v&&c++,y&&c++,0!==c&&(s=s.substring(c)),v||b||n("Strict part found after optional",t),v&&(b=!1);var w=s.indexOf("(");if(y&&-1!==w){var i=s.length-1;")"!==s[i]&&(i+=1),_=new RegExp(p(s.substring(w+1,i))),s=s.substring(0,w)}v||y?y&&x.push({alias:s,matcher:_,optional:v}):x.push(s)}if(l){var C=e.query={};h=l.split("&"),d=-1,g=h.length;for(var j,N,A,k;++d<g;)A=h[d],k=A.indexOf("="),-1!==k?(j=A.substring(0,k),N=A.substring(k+1),40===N.charCodeAt(0)&&(N=new RegExp(p(N))),C[j]=N):C[A]="";0===e.path.length&&(e.strict=!1)}},i=function(t,n){var r=n.indexOf("?"),o=-1===r?null:n.substring(r+1),i={path:n,params:null==o?{}:c(o,"&")};if(t.query)for(var l in t.query)if("?"===l[0]&&(l=l.substring(1)),":"===l[0]){var s=d(l),a=s.alias;i.params[a]=e(i.params,s.matcher)}if(-1!==r&&(n=n.substring(0,r)),null!=t.path)for(var f,h,p=u(n),g=t.path,m=g.length,v=p.length,y=0;v>y;y++)if(f=p[y],h=m>y?g[y]:null){if("string"==typeof h)continue;if(h.alias){i.params[h.alias]=f;continue}}return i}}();var l,s;!function(){function e(e,t){for(var n in e)if(t.test(n))return!0;return!1}l=function(e,t,n){for(var r,o=m(e),l=0,u=t.length;u>l;l++)if(r=t[l],s(o,r,n))return r.current=i(r,e),r;return null},s=function(t,n,r){if(null!=r&&null!=n.method&&n.method!==r)return!1;if(n.match)return n.match.test("string"==typeof t?t:g(t));if("string"==typeof t&&(t=m(t)),n.query){var o,i,l=t.query;if(null==l)return!1;for(o in n.query){i=n.query[o];var u=o[0];if(":"!==u){if("?"!==u)if("string"!=typeof i){if(i.test&&!i.test(l[o]))return!1}else{if(null==l[o])return!1;if(i&&l[o]!==i)return!1}}else{var s=d(o);if(null==s||e(l,s.matcher)===!1)return!1}}}var a=n.path,c=a.length;if(0===c)return n.strict?0===t.path.length:!0;for(var f,h=0,p=t.path.length;p>h;h++){if(f=a[h],h>=c)return n.strict!==!0;if("string"==typeof f){if(t.path[h]===f)continue;return!1}if(f.matcher&&f.matcher.test(t.path[h])===!1)return!1;if(f.optional)return!0;if(!f.alias)return!1}return c>h?a[h].optional===!0:!0}}();return e.prototype={path:null,query:null,value:null,current:null},t.prototype={add:function(t,n){return this.routes.push(new e(t,n)),this},get:function(e,t){return l(e,this.routes,t)},clear:function(){return this.routes.length=0,this}},t.parse=function(e,t){var n={};return r(n,e),i(n,t)},t}(),_=function(){function e(e){if("undefined"==typeof window||"onhashchange"in window==!1)return null;this.listener=e;var t=this;return window.onhashchange=function(){t.changed(location.hash)},this}function t(e){if("undefined"==typeof window)return null;if(!window.history||!window.history.pushState)return null;var t=this;return t.listener=e,t.initial=location.pathname,window.onpopstate=function(){return t.initial===location.pathname?void(t.initial=null):void t.changed()},t}function r(r,o){if(this.collection=r||new y,o){var i="hash"===o?e:t;this.emitter=new i(this)}null==this.emitter&&(this.emitter=new t(this)),null==this.emitter&&(this.emitter=new e(this)),null==this.emitter&&n("Router can not be initialized - (nor HistoryAPI / nor hashchange")}return"undefined"==typeof window?function(){}:(function(){function t(e){return e.replace(/^[!#/]+/,"/")}e.prototype={navigate:function(e){return null==e?void this.changed(location.hash):void(location.hash=e)},changed:function(e){this.listener.changed(t(e))},current:function(){return t(location.hash)}}}(),t.prototype={navigate:function(e){return null==e?void this.changed():(history.pushState({},null,e),this.initial=null,void this.changed())},changed:function(){this.listener.changed(location.pathname+location.search)},current:function(){return location.pathname+location.search}},r.prototype={changed:function(e){var t=this.collection.get(e);t&&this.action(t)
},action:function(e){if("function"==typeof e.value){var t=e.current;e.value(e,t&&t.params)}},navigate:function(e){this.emitter.navigate(e)},current:function(){return this.collection.get(this.currentPath())},currentPath:function(){return this.emitter.current()}},r)}(),b=new y,x={Collection:y,setRouterType:function(e){return null==v&&(v=new _(b,e)),this},setStrictBehaviour:function(e){return o=e,this},add:function(e,n){return t(),b.add(e,n),this},get:function(e){return b.get(e)},navigate:function(e){return t().navigate(e),this},current:function(){return t().current()},currentPath:function(){return t().currentPath()},notifyCurrent:function(){return t().navigate(),this},parse:y.parse,$utils:{pathFromCLI:a,query:{serialize:f,deserialize:c}}};return function(){function e(e){e.preventDefault(),e.stopPropagation(),x.navigate(this.href)}r.registerAttrHandler("x-dynamic",function(t,n,r,o,i){i.onclick=e},"client")}(),x}),function(e){"use strict";function t(e,t){if("object"!=typeof e||null==t)return e;for(var n,r=e,o=t.split("."),i=o.length,l=0;i>l;l++)if(n=o[l],r=r[n],null==r)return r;return r}function n(e,t){for(var n in t)t[n]&&(e[n]=t[n]);return e}function r(e,n,r,o){if("function"==typeof n)return n(e)?e:null;if("undefined"==typeof r)return e==n?e:null;var i=null!=n?t(e,n):e,l=r,u=o;switch(l){case">":return i>u?e:null;case"<":return u>i?e:null;case">=":return i>=u?e:null;case"<=":return u>=i?e:null;case"!=":return i!=u?e:null;case"==":return i==u?e:null}return console.error("InvalidArgumentException: arr.js:check",arguments),null}function o(e){this.items=e}function i(e){o.prototype[e]=function(){var t=arguments.length,n=u[e](this.items,t>0?arguments[0]:null,t>1?arguments[1]:null,t>2?arguments[2]:null,t>3?arguments[3]:null);return n instanceof Array?(this.items=n,this):n}}var l=e.ruqq||(e.ruqq={}),u={where:function(e,t,n,o){var i=[];if(null==e)return i;for(var l,u=0,s=e.length;s>u;u++)l=e[u],null!=r(l,t,n,o)&&i.push(l);return i},each:"undefined"!=typeof Array.prototype.forEach?function(e,t){return null==e?e:(e.forEach(t),e)}:function(e,t){if(null==e)return e;for(var n=0,r=e.length;r>n;n++)t(e[n]);return e},remove:function(e,t,n,o){for(var i=0,l=e.length;l>i;i++)null!=r(e[i],t,n,o)&&(e.splice(i,1),i--,l--);return e},invoke:function(){for(var e=Array.prototype.slice.call(arguments),t=e.shift(),n=e.shift(),r=[],o=0;o<t.length;o++)r.push("function"==typeof t[o][n]?t[o][n].apply(t[o],e):null);return r},last:function(e,t,n,o){if(null==e)return null;if(null==t)return e[e.length-1];for(var i=e.length;i>-1;--i)if(null!=r(e[i],t,n,o))return e[i];return null},first:function(e,t,n,o){if(null==t)return e[0];for(var i=0,l=e.length;l>i;i++)if(null!=r(e[i],t,n,o))return e[i];return null},any:function(e,t,n,o){for(var i=0,l=e.length;l>i;i++)if(null!=r(e[i],t,n,o))return!0;return!1},isIn:function(e,t){for(var n=0;n<e.length;n++)if(t==e[n])return!0;return!1},map:"undefined"!=typeof Array.prototype.map?function(e,t){return null==e?[]:e.map(t)}:function(e,t){var n=[];if(null==e)return n;for(var r=0,o=e.length;o>r;r++)n.push(t(e[r],r));return n},aggr:function(e,t,n){for(var r=0,o=e.length;o>r;r++){var i=n(e[r],t,r);null!=i&&(t=i)}return t},select:function(e,t){if(null==e)return[];for(var n,r=[],o=0,i=e.length;i>o;o++)if(n=e[o],"string"==typeof t)r.push(n[t]);else if("function"==typeof t)r.push(t(n));else if(t instanceof Array){for(var l={},u=0;u<t.length;u++)l[t[u]]=e[o][t[u]];r.push(l)}return r},indexOf:function(e,t,n,o){for(var i=0,l=e.length;l>i;i++)if(null!=r(e[i],t,n,o))return i;return-1},count:function(e,t,n,o){for(var i=0,l=0,u=e.length;u>l;l++)null!=r(e[l],t,n,o)&&i++;return i},distinct:function(e,t){var n=[];if(null==e)return n;for(var r=0,o=e.length;o>r;r++){for(var i=!0,l=0;l<n.length;l++)if(t&&t(e[r],n[l])||null==t&&e[r]==n[l]){i=!1;break}i&&n.push(e[r])}return n},groupBy:function(e,t){for(var n,r,o,i=[],l=e.length,u=-1,s={};++u<l;)if(s[u]!==!0){for(o=e[u],n=[o],r=u;++r<l;)s[r]!==!0&&t(o,e[r])&&(s[r]=!0,n.push(e[r]));i.push(n)}return i}};u.each(["min","max"],function(e){u[e]=function(n,r){if(null==n)return null;for(var o=null,i=0,l=n.length;l>i;i++){var u=t(n[i],r);null!=o?"max"===e&&u>o?o=u:"min"===e&&o>u&&(o=u):o=u}return o}}),l.arr=function(e){return new o(e)},n(l.arr,u);for(var s in u)i(s)}("undefined"!=typeof window?window:global),function(e,t){"use strict";null==e&&(e="undefined"!=typeof window&&"undefined"!=typeof document?window:global),null==e.net&&(e.net={}),e.net.Uri=t(e)}(this,function(){"use strict";function e(e){return e&&"object"==typeof e&&"function"==typeof e.combine}function t(){for(var e,t="",n=0,r=arguments.length;r>n;n++)e=arguments[n],e&&(t?("/"!==t[t.length-1]&&(t+="/"),t+="/"===e[0]?e.substring(1):e):t=e);return t}function n(e){return"/"===e[e.length-1]?e.substring(0,e.length-1):e}function r(e){var t,n=new d;for(t in e)"string"==typeof e[t]&&(n[t]=e[t]);return n}function o(e){return e.replace(/\\/g,"/").replace(/^\.\//,"").replace(/^(\w+):\/([^\/])/,"/$1:/$2")}function i(e){return p.test(e)&&"/"===e[0]?e.substring(1):e}function l(e){var t=c.exec(e.value);null==t&&"/"===e.value[0]&&(e.protocol="file"),null!=t&&(e.protocol=t[1],e.value=e.value.substring(t[0].length))}function u(e){if(null!=e.protocol){if("file"===e.protocol){var t=p.exec(e.value);return void(t&&(e.host=t[1],e.value=e.value.substring(e.host.length)))}var n=e.value.indexOf("/",2);e.host=~n?e.value.substring(0,n):e.value,e.value=e.value.replace(e.host,"")}}function s(e){var t=e.value.indexOf("?");-1!==t&&(e.search=e.value.substring(t),e.value=e.value.substring(0,t))}function a(e){var t=f.exec(e.value),r=null==t?null:t[1];null!=r&&(e.file=r,e.value=e.value.substring(0,e.value.length-r.length),e.value=n(e.value),t=h.exec(r),e.extension=null==t?null:t[1])}var c=/^([a-zA-Z]+):\/\//,f=/([^\/]+(\.[\w\d]+)?)$/i,h=/\.([\w\d]+)$/i,p=/(^\/?\w{1}:)(\/|$)/,d=function(t){return null==t?this:e(t)?t.combine(""):(t=o(t),this.value=t,l(this),u(this),s(this),a(this),this.path=n(this.value),/^[\w]+:\//.test(this.path)&&(this.path="/"+this.path),this)};return d.prototype={cdUp:function(){return this.path?"/"===this.path?this:/^\/?[a-zA-Z]+:\/?$/.test(this.path)?this:(this.path=this.path.replace(/\/?[^\/]+\/?$/i,""),this):this},combine:function(o){if(e(o)&&(o=o.toString()),!o)return r(this);if(p.test(o))return new d(o);var i=r(this);if(i.value=o,s(i),a(i),!i.value)return i;if(o=i.value.replace(/^\.\//i,""),"/"===o[0])return i.path=o,i;for(;/^(\.\.\/?)/gi.test(o);)i.cdUp(),o=o.substring(3);return i.path=n(t(i.path,o)),i},toString:function(){var e=this.protocol?this.protocol+"://":"";return e+=t(this.host,this.path,this.file)+(this.search||""),this.file||this.search||(e+="/"),e},toPathAndQuery:function(){return t(this.path,this.file)+(this.search||"")},toRelativeString:function(e){if("string"==typeof e&&(e=new d(e)),0===this.path.indexOf(e.path)){var n=this.path?this.path.replace(e.path,""):"";return"/"===n[0]&&(n=n.substring(1)),t(n,this.file)+(this.search||"")}for(var r=this.path.split("/"),o=e.path.split("/"),i="",l=0,u=Math.min(r.length,o.length);u>l&&r[l]===o[l];l++);if(l>0&&(i=r.splice(0,l).join("/")),i){for(var s,a="",c=e.path;c;){if(0==this.path.indexOf(c)){s=this.path.replace(c,"");break}c=c.replace(/\/?[^\/]+\/?$/i,""),a+="../"}return t(a,s,this.file)}return this.toString()},toLocalFile:function(){var e=t(this.host,this.path,this.file);return i(e)},toLocalDir:function(){var e=t(this.host,this.path,"/");return i(e)},toDir:function(){var e=this.protocol?this.protocol+"://":"";return e+t(this.host,this.path,"/")},isRelative:function(){return!(this.protocol||this.host)},getName:function(){return this.file.replace("."+this.extension,"")}},d.combinePathes=t,d.combine=t,d}),function(){var e={};String.format=function(t){if(~t.indexOf("#{")){for(var n="",r=0,o=arguments[1];;){var i=t.indexOf("#{",r);if(-1==i)break;n+=t.substring(r,i);var l=t.indexOf("}",i);n+=Object.getProperty(o,t.substring(i+2,l)),r=++l}return n+=t.substring(r)}for(var u=1;u<arguments.length;u++){var s=e[u]||(e[u]=new RegExp("%"+u,"g"));t=t.replace(s,arguments[u])}return t},Object.defaults=function(e,t){for(var n in t)null==e[n]&&(e[n]=t[n]);return e},Object.clear=function(e,t){if(t instanceof Array)for(var n,r=0,o=t.length;o>r;r++)n=t[r],n in e&&delete e[n];else if("object"==typeof t)for(var i in t)i in e&&delete e[i];return e},Object.extend=function(e,t){if(null==e&&(e={}),null==t)return e;for(var n in t)null!=t[n]&&(e[n]=t[n]);return e},Object.getProperty=function(e,t){if("."===t)return e;for(var n=e,r="string"==typeof t?t.split("."):t,o=-1,i=r.length;null!=n&&++o<i;)n=n[r[o]];return n},Object.setProperty=function(e,t,n){for(var r=t.split("."),o=e,i=r[r.length-1];r.length>1;){var l=r.shift();o=o[l]||(o[l]={})}o[i]=n},Object.lazyProperty=function(e,t,n){if("object"!=typeof t){for(var r=t.split("."),o=e,i=r[r.length-1];r.length>1;){var l=r.shift();o=o[l]||(o[l]={})}r=null,o.__defineGetter__(i,function(){return delete o[i],o[i]=n(),n=null,o[i]})}else for(var u in t)Object.lazyProperty(e,u,t[u])},Object.clone=function(e){if(null==e)return null;switch(typeof e){case"number":case"string":case"function":return e}if(e instanceof Array){for(var t=[],n=0,r=e.length;r>n;n++)t[n]=Object.clone(e[n]);return t}var o=e.constructor;if("function"==typeof o&&(o===String||o===Number||o===RegExp||o===Date))return new o(e);var i={};for(var l in e)i[l]=Object.clone(e[l]);return i},Object.observe=function(e,t,n){if(null==e.__observers&&Object.defineProperty(e,"__observers",{value:{},enumerable:!1}),e.__observers[t])return void e.__observers[t].push(n);(e.__observers[t]||(e.__observers[t]=[])).push(n);var r=t.split("."),o=e,i=t;r.length>1&&(i=r.pop(),o=Object.getProperty(e,r));var l=o[i];Object.defineProperty(o,i,{get:function(){return l},set:function(n){l=n;for(var r=e.__observers[t],o=0,i=r.length;i>o;o++)r[o](n)}})},Date.format=function(e,t){function n(e){return e>9?e:"0"+e}t||(t="MM/dd/yyyy"),t=t.replace("MM",n(e.getMonth()+1));var r=e.getFullYear();return t.indexOf("yyyy")>-1?t=t.replace("yyyy",r):t.indexOf("yy")>-1&&(t=t.replace("yy",r.toString().substr(2,2))),t=t.replace("dd",n(e.getDate())),t.indexOf("HH")>-1&&(t=t.replace("HH",n(e.getHours()))),t.indexOf("mm")>-1&&(t=t.replace("mm",n(e.getMinutes()))),t.indexOf("ss")>-1&&(t=t.replace("ss",n(e.getSeconds()))),t},RegExp.fromString=function(e,t){return new RegExp(e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),t)},Function.invoke=function(){var e=Array.prototype.slice.call(arguments),t=e.shift(),n=e.shift();return function(){return t[n].apply(t,e)}}}(),function(e){function t(){}function n(){}function r(e,t,n){if(e instanceof Array){for(var o,i=[],l=0,u=e.length;u>l;l++)o=r(e[l],t,n),e[l].tagName===s&&u-1>l&&e[l+1].tagName===a&&(l+=1,null==o&&(o=r(e[l].nodes,t,n))),null!=o&&(o instanceof Array?i=i.concat(o):i.push(o));return i}if(null!=e.content)return{content:e.content,type:e.type};if(e.tagName===s){var c=e.attr.id?t[e.attr.id]:n;return c?null==e.nodes?c:r(e.nodes,t,c):null}var f={tagName:e.tagName||e.compoName,attr:e.attr,type:e.type,controller:e.controller};return e.nodes&&(f.nodes=r(e.nodes,t,n)),f}function o(e,t){if(null==t&&(t={}),e instanceof Array){for(var n=e,r=0,l=n.length;l>r;r++)o(n[r],t);return t}var s=e.tagName;if(null!=s&&s===u){var a=e.attr.id;!a&&console.error("@content has no id specified",e),t[a]&&console.error("@content already exists",a),t[a]=i(e)}return null!=e.nodes&&o(e.nodes,t),t}function i(e){for(var t,n=e.parent;null!=n&&n.tagName!==c;){var r={type:n.type,tagName:n.tagName,attr:n.attr,controller:n.controller,nodes:null};null==t?(t=r,t.nodes=e.nodes):t.nodes=[r],n=n.parent}return null!=t?t:e.nodes}var l=e.mask||Mask,u="@content",s="@placeholder",a="@else",c="layout:view",f="layout:master",h={};t.prototype={constructor:t,render:function(){h[this.attr.id]=this}},l.registerHandler(f,t),n.prototype={constructor:n,renderStart:function(){var e=h[this.attr.master];return null==e?void console.error("Master Layout is not defined for",this):(null==this.contents&&(this.contents=o(this.nodes),Object.keys&&0===Object.keys(this.contents).length&&console.warn("no contents: @content #someID")),void(this.nodes=r(e,this.contents).nodes))}},l.registerHandler(c,n)}(this),obj_extend(globals,this)}).call({},"undefined"!=typeof global?global:window);
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
	
	var _Array_slice = Array.prototype.slice;
	// end:source /src/vars.js
	
	// source /src/assert/assert.browser.js
	(function(global){
		
		// source /ref-assertion/lib/assert.embed.js
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
	  runner.process();
	  runner.always(callback);
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
	    args.unshift(mask.Utils.Expression.eval);
	    return run.apply(null, args);
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
	var Traverser = {};
	(function() {
	  [['find', 'filter'], ['filter'], ['closest'], ['children'], ['siblings']].forEach((function(x) {
	    var $__0 = x,
	        name = $__0[0],
	        fallback = $__0[1];
	    Traverser[name] = create(name, fallback);
	  }));
	  function create(name, fallback) {
	    return function assert_Traverse(current) {
	      var selector = current.node.expression;
	      if (/^\s*('|")/.test(selector)) {
	        selector = node_eval(selector);
	      }
	      var x = current.$[name](selector);
	      if (fallback && x.length === 0) {
	        x = current.$[fallback](selector);
	      }
	      assert.notEqual(x.length, 0, ("Selector does not matched any elements: " + name + "(" + selector + ")"));
	      current.$ = x;
	    };
	  }
	}());
	var Simulate = {
	  'press': function(runner, current, done) {
	    var str = node_eval(current.node);
	    current.$.simulate('key-combo', {combo: str});
	    setTimeout(done);
	  },
	  'type': function(runner, current, done) {
	    var str = node_eval(current.node);
	    current.$.simulate('key-sequence', {sequence: str});
	    setTimeout(done);
	  },
	  'select': function(runner, current, done) {
	    var str = node_eval(current.node),
	        el = current.$.filter('select').eq(0),
	        opts = null,
	        opt = null;
	    assert.notEqual(el.length, 0, 'Should call on "select" tag');
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
	    setTimeout(done);
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
	};
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
	      var $element = current.$;
	      debugger;
	      done();
	    },
	    'slot': function(runner, current, done) {
	      var fn = current.node.fn;
	      if (fn.length === 2) {
	        fn(current.$, done);
	        return;
	      }
	      fn(current.$);
	      done();
	    },
	    'do': function(runner, current, done) {
	      var event = resolveAttrFirst(current.node);
	      runner.ensureInDom_();
	      var fn = Simulate[event];
	      if (fn) {
	        fn(runner, current, done);
	        return;
	      }
	      current.$.simulate(event, current.node.attr);
	      setTimeout(done);
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
	function Dfr() {}
	Dfr.prototype = {
	  resolved: null,
	  rejected: null,
	  _resolveCb: null,
	  _rejectCb: null,
	  _alwaysCb: null,
	  resolve: function() {
	    for (var args = [],
	        $__0 = 0; $__0 < arguments.length; $__0++)
	      args[$__0] = arguments[$__0];
	    this.resolved = args;
	    dfr_call(this._resolveCb, args);
	    dfr_call(this._alwaysCb);
	    dfr_clear(this);
	  },
	  reject: function() {
	    for (var args = [],
	        $__1 = 0; $__1 < arguments.length; $__1++)
	      args[$__1] = arguments[$__1];
	    this.rejected = args;
	    dfr_call(this._rejectCb, args);
	    dfr_call(this._alwaysCb);
	    dfr_clear(this);
	  },
	  done: function(cb) {
	    if (cb == null)
	      return this;
	    if (this.resolved) {
	      cb.apply(null, this.resolved);
	      return this;
	    }
	    if (this.rejected == null) {
	      dfr_bind(this, 'resolve', cb);
	    }
	    return this;
	  },
	  fail: function(cb) {
	    if (cb == null)
	      return this;
	    if (this.rejected) {
	      cb.apply(null, this.rejected);
	      return this;
	    }
	    if (this.resolved == null) {
	      dfr_bind(this, 'reject', cb);
	    }
	    return this;
	  },
	  always: function(cb) {
	    if (cb == null)
	      return this;
	    if (this.rejected || this.resolved) {
	      cb();
	      return this;
	    }
	    dfr_bind(this, 'always', cb);
	    return this;
	  },
	  then: function(ok, fail) {
	    return this.done(ok).fail(fail);
	  }
	};
	var Reporter;
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
	}());
	function Runner(container, node, model, compo) {
	  if (container.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
	    container = container.childNodes;
	  }
	  this.model = model;
	  this.compo = compo;
	  this.$ = $(container);
	  this.stack = [{
	    $: this.$,
	    node: node
	  }];
	  if (this.$.length === 0) {
	    __assert(false, 'No elements to test <root>');
	  }
	  this.process = this.process.bind(this);
	  this.backtrace = new Error().stack;
	}
	Runner.prototype = obj_extend({
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
	      this.resolve();
	      return;
	    }
	    var name = current.node.tagName;
	    var traverser = Traverser[name];
	    if (traverser) {
	      var error = this.run_(traverser, [current]);
	      this.process(error);
	      return;
	    }
	    var action = Actions[name];
	    if (action) {
	      this.run_(action, [this, current, this.process]);
	      return;
	    }
	    var args = this.getCurrentArgs_();
	    var ctx = current.$;
	    if (is_JQuery(ctx)) {
	      var fn = assert_getFn(name);
	      if (fn) {
	        this.run_(fn, [ctx, name, args, current.node.attr]);
	        this.process();
	        return;
	      }
	      log_error('Uknown test function: ', name);
	      this.process();
	      return;
	    }
	    assert_test(ctx, name, args);
	    this.process();
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
	  },
	  report_: function(error) {
	    error = this.prepairError_(error);
	    Reporter.report(error);
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
	    var msg = error.generatedMessage ? tmpl : error.message + '\n' + tmpl;
	    Object.defineProperty(error, 'message', {
	      value: msg,
	      writable: true,
	      enumerable: true,
	      configurable: true
	    });
	    Object.defineProperty(error, 'stack', {
	      value: assert.prepairStack(this.backtrace),
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
	  }
	}, Dfr.prototype);
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
	        dfr = new Dfr;
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
	
	//# sourceMappingURL=exports.es6.map
		// end:source /src/exports.es6
		
		return assert_TestDom;
	}));
	
	
	(function($){
		if ($.simulate && $.simulate.prototype.simulateKeyCombo) {
			return;
		}
		
		// source /bower_components/jquery-simulate-ext/libs/bililiteRange.js
		// Cross-broswer implementation of text ranges and selections
		// documentation: http://bililite.com/blog/2011/01/17/cross-browser-text-ranges-and-selections/
		// Version: 1.1
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
		
		bililiteRange = function(el, debug){
			var ret;
			if (debug){
				ret = new NothingRange(); // Easier to force it to use the no-selection type than to try to find an old browser
			}else if (document.selection){
				// Internet Explorer
				ret = new IERange();
			}else if (window.getSelection && el.setSelectionRange){
				// Standards. Element is an input or textarea 
				ret = new InputRange();
			}else if (window.getSelection){
				// Standards, with any other kind of element
				ret = new W3CRange();
			}else{
				// doesn't support selection
				ret = new NothingRange();
			}
			ret._el = el;
			ret._textProp = textProp(el);
			ret._bounds = [0, ret.length()];
			return ret;
		};
		
		function textProp(el){
			// returns the property that contains the text of the element
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
				if (s === 'all'){
					this._bounds = [0, this.length()];
				}else if (s === 'start'){
					this._bounds = [0, 0];
				}else if (s === 'end'){
					this._bounds = [this.length(), this.length()];
				}else if (s === 'selection'){
					this.bounds ('all'); // first select the whole thing for constraining
					this._bounds = this._nativeSelection();
				}else if (s){
					this._bounds = s; // don't error check now; the element may change at any moment, so constrain it when we need it.
				}else{
					var b = [
						Math.max(0, Math.min (this.length(), this._bounds[0])),
						Math.max(0, Math.min (this.length(), this._bounds[1]))
					];
					return b; // need to constrain it to fit
				}
				return this; // allow for chaining
			},
			select: function(){
				this._nativeSelect(this._nativeRange(this.bounds()));
				return this; // allow for chaining
			},
			text: function(text, select){
				if (arguments.length){
					this._nativeSetText(text, this._nativeRange(this.bounds()));
					if (select == 'start'){
						this.bounds ([this._bounds[0], this._bounds[0]]);
						this.select();
					}else if (select == 'end'){
						this.bounds ([this._bounds[0]+text.length, this._bounds[0]+text.length]);
						this.select();
					}else if (select == 'all'){
						this.bounds ([this._bounds[0], this._bounds[0]+text.length]);
						this.select();
					}
					return this; // allow for chaining
				}else{
					return this._nativeGetText(this._nativeRange(this.bounds()));
				}
			},
			insertEOL: function (){
				this._nativeEOL();
				this._bounds = [this._bounds[0]+1, this._bounds[0]+1]; // move past the EOL marker
				return this;
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
				rng = document.body.createTextRange ();
				rng.moveToElementText(this._el);
			}
			if (bounds){
				if (bounds[1] < 0) bounds[1] = 0; // IE tends to run elements out of bounds
				if (bounds[0] > this.length()) bounds[0] = this.length();
				if (bounds[1] < rng.text.replace(/\r/g, '').length){ // correct for IE's CrLf wierdness
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
			if (document.selection.type != 'Text') return [len, len]; // append to the end
			var sel = document.selection.createRange();
			try{
				return [
					iestart(sel, rng),
					ieend (sel, rng)
				];
			}catch (e){
				// IE gets upset sometimes about comparing text to input elements, but the selections cannot overlap, so make a best guess
				return (sel.parentElement().sourceIndex < this._el.sourceIndex) ? [0,0] : [len, len];
			}
		};
		IERange.prototype._nativeGetText = function (rng){
			return rng.text.replace(/\r/g, ''); // correct for IE's CrLf weirdness
		};
		IERange.prototype._nativeSetText = function (text, rng){
			rng.text = text;
		};
		IERange.prototype._nativeEOL = function(){
			if (typeof this._el.value != 'undefined'){
				this.text('\n'); // for input and textarea, insert it straight
			}else{
				this._nativeRange(this.bounds()).pasteHTML('<br/>');
			}
		};
		// IE internals
		function iestart(rng, constraint){
			// returns the position (in character) of the start of rng within constraint. If it's not in constraint, returns 0 if it's before, length if it's after
			var len = constraint.text.replace(/\r/g, '').length; // correct for IE's CrLf wierdness
			if (rng.compareEndPoints ('StartToStart', constraint) <= 0) return 0; // at or before the beginning
			if (rng.compareEndPoints ('StartToEnd', constraint) >= 0) return len;
			for (var i = 0; rng.compareEndPoints ('StartToStart', constraint) > 0; ++i, rng.moveStart('character', -1));
			return i;
		}
		function ieend (rng, constraint){
			// returns the position (in character) of the end of rng within constraint. If it's not in constraint, returns 0 if it's before, length if it's after
			var len = constraint.text.replace(/\r/g, '').length; // correct for IE's CrLf wierdness
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
		
		function W3CRange(){}
		W3CRange.prototype = new Range();
		W3CRange.prototype._nativeRange = function (bounds){
			var rng = document.createRange();
			rng.selectNodeContents(this._el);
			if (bounds){
				w3cmoveBoundary (rng, bounds[0], true, this._el);
				rng.collapse (true);
				w3cmoveBoundary (rng, bounds[1]-bounds[0], false, this._el);
			}
			return rng;					
		};
		W3CRange.prototype._nativeSelect = function (rng){
			window.getSelection().removeAllRanges();
			window.getSelection().addRange (rng);
		};
		W3CRange.prototype._nativeSelection = function (){
				// returns [start, end] for the selection constrained to be in element
				var rng = this._nativeRange(); // range of the element to constrain to
				if (window.getSelection().rangeCount == 0) return [this.length(), this.length()]; // append to the end
				var sel = window.getSelection().getRangeAt(0);
				return [
					w3cstart(sel, rng),
					w3cend (sel, rng)
				];
			};
		W3CRange.prototype._nativeGetText = function (rng){
			return rng.toString();
		};
		W3CRange.prototype._nativeSetText = function (text, rng){
			rng.deleteContents();
			rng.insertNode (document.createTextNode(text));
			this._el.normalize(); // merge the text with the surrounding text
		};
		W3CRange.prototype._nativeEOL = function(){
			var rng = this._nativeRange(this.bounds());
			rng.deleteContents();
			var br = document.createElement('br');
			br.setAttribute ('_moz_dirty', ''); // for Firefox
			rng.insertNode (br);
			rng.insertNode (document.createTextNode('\n'));
			rng.collapse (false);
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
					if (n <= node.nodeValue.length){
						rng[bStart ? 'setStart' : 'setEnd'](node, n);
						// special case: if we end next to a <br>, include that node.
						if (n == node.nodeValue.length){
							// skip past zero-length text nodes
							for (var next = nextnode (node, el); next && next.nodeType==3 && next.nodeValue.length == 0; next = nextnode(next, el)){
								rng[bStart ? 'setStartAfter' : 'setEndAfter'](next);
							}
							if (next && next.nodeType == 1 && next.nodeName == "BR") rng[bStart ? 'setStartAfter' : 'setEndAfter'](next);
						}
						return;
					}else{
						rng[bStart ? 'setStartAfter' : 'setEndAfter'](node); // skip past this one
						n -= node.nodeValue.length; // and eat these characters
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
			return constraint.toString().length - rng.toString().length;
		}
		function w3cend (rng, constraint){
			if (rng.compareBoundaryPoints (END_TO_END, constraint) >= 0) return constraint.toString().length; // at or after the end
			if (rng.compareBoundaryPoints (START_TO_END, constraint) <= 0) return 0;
			rng = rng.cloneRange(); // don't change the original
			rng.setStart (constraint.startContainer, constraint.startOffset); // they now start at the same place
			return rng.toString().length;
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
		
		})();
		// end:source /bower_components/jquery-simulate-ext/libs/bililiteRange.js
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
				timeout: 1500,
				errorableCallbacks: false,
				breakOnError: false,
				
				// master server configurations, in browser runners
				'http.config': null,
				'http.eval': null,
				'http.include': null,
				'http.service': null
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
		
		// source UTest.config.js
		var UTestConfiguration;
		
		(function(){
			UTestConfiguration = {
				$cfg: function(key){
					var cfg = this.suite.$config;
					if (cfg == null || cfg[key] == null) 
						return _options[key];
					
					return cfg[key];
				},
				configurate: function(/*?cfg, done */){
					var cfg,
						done,
						x,
						xtype,
						i = arguments.length;
					while( --i > -1){
						x = arguments[i];
						xtype = typeof x;
						xtype === 'function'
							&& (done = x);
						
						xtype === 'object'
							&& x != null
							&& (cfg = x);
					}
					if (cfg == null) 
						cfg = this.suite.$config;
					
					if (cfg == null) {
						done && done();
						return;
					}
					
					var await = new Class.Await;
					for(var key in cfg){
						if (_options.hasOwnProperty(key) === false) {
							logger.warn('Unknown key `%s`, support:', key, Object.keys(_options));
							continue;
						}
						
						configurate(key, cfg[key], await.delegate());
					}
					
					await
						.fail(function(error){
							console.error('<utest:configurate> ', error);
						})
						.always(done);
				}
			};
			
			var Configurations = {
				http: {
					service: function(routes, done){
						http_config('http.service', routes, done);
					},
					config: function(configDir, done) {
						http_config('http.config', configDir, done);
					},
					include: function(pckg, done){
						http_config('include', pckg, done);
					},
					
					eval: function(fn, done){
						http_config('eval', fn.toString(), done);
					}
				}
				
			};
			
			function http_config(args){
				var args = Array.prototype.slice.call(arguments);
				
				
				args.splice(1, 0, null); // populate later with current configuration
				
				args.unshift('>server:utest:action');
				
				UTest
					.getSocket(function(socket, config){
						
						args[2] = (UTest.getConfig && UTest.getConfig()) || config;
						socket
							.emit
							.apply(socket, args)
							;	
					});
			}
			
			function configurate(key, args, done) {
				var fn = obj_getProperty(Configurations, key);
				if (typeof fn !== 'function') 
					return done();
				
				fn(args, done)
			}
		}());
		// end:source UTest.config.js
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
						if (/https?:/.test(url)) {
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
							
						/* expose Atma and jQuery */
						_win.Class = Class;
						_win.include = include.instance(url);
						_win.mask = mask;
						_win.Compo = mask.Compo;
						_win.jmask = mask.jmask;
						_win.jQuery = _win.$ = $;
						_win.__utest_isLoading = true;
						_win.domain = window.domain;
						
						var listener = xhr_createListener(_win);
						
						$(_iframe).load(function(){
							_win.include.allDone(function(){
								listener.done(function(){
									_win.__utest_isLoading = false;
									
									
									callback(null, _doc, _win, headers);
								});
							});
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
						render: function(template /* [, ?model|params, ?ctr, callback] */){
							
							var model,
								include,
								scripts,
								ctr,
								callback;
							
							// @Obsolete - use `model`, `controller`, `include` in single params object
							var args = _Array_slice.call(arguments, 1),
								dfr = new Class.Deferred()
								;
							
							if (typeof args[args.length - 1] === 'function') 
								callback = args.pop();
							
							model = args.shift();
							ctr = args.shift();
							
							// @obsolete workaround
							if (model.include || model.model) {
								include = model.include;
								ctr = model.controller;
								scripts = model.scripts;
								model = model.model;
							}
							
							
							
							UTestPage.request('/utest/server/render', 'post', null, {
								template: template,
								model: model,
								controller: ctr,
								include: include,
								scripts: scripts
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
				if (has) 
					clearObject(this.suite);
				
				//var has = ruqq.arr.any(Object.keys(this.suite), function(x){
				//	return x[0] === '!';
				//});
				//
				//if (!has)
				//	return;
				//
				//for (var key in this.suite) {
				//	// reserved
				//	if (RESERVED.indexOf(key) !== -1) {
				//		continue;
				//	}
				//	
				//	if (key[0] !== '!') {
				//		delete this.suite[key];
				//	}
				//}
				
				function rewriteDeep(obj){
					var has = false;
					Object
						.keys(obj)
						.forEach(function(key){
							var val = obj[key];
							if (key[0] !== '!' && is_Object(val) && hasBang(val)) {
								delete obj[key];
								key = '!' + key;
								obj[key] = val;
								rewriteDeep(val);
							}
							if (key[0] === '!') 
								has = true;
						});
					return has;
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
				socket.emit('browser:assert:failure', Array.prototype.slice.call(arguments));
			}
			assert.onsuccess = function() {
				socket.emit('browser:assert:success', Array.prototype.slice.call(arguments));
			}
		
			function logger_create(key) {
		
				var original = console[key];
				return function() {
					var args = [];
		
					for (var i = 0, x, imax = arguments.length; i < imax; i++) {
						args[i] = logger_dimissCircular(arguments[i]);
					}
					
					if (socket) 
						socket.emit('browser:log', key, args);
		
					return original.apply(console, args);
				};
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

