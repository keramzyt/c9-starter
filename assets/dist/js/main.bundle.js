!function(t){var e={};function n(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1);jQuery(document).ready(function(){var t;(t=jQuery)(window).width()<=667?(t(".navbar").addClass("navbar-small"),t(window).scroll(function(){var e=t(window).scrollTop();e>=288&&t(".navbar").addClass("opacity0"),e<=287&&t(".navbar").removeClass("opacity0"),e>=338&&(t(".navbar").addClass("fixed-top opacity100"),t(".header-navbar").addClass("jumpfix")),e<=337&&(t(".navbar").removeClass("fixed-top opacity100"),t(".header-navbar").removeClass("jumpfix"))})):t(window).scroll(function(){var e=t(window).scrollTop();e>=168&&t(".navbar").addClass("opacity0"),e<=167&&t(".navbar").removeClass("opacity0"),e>=218&&(t(".navbar").addClass("navbar-small fixed-top opacity100"),t(".header-navbar").addClass("jumpfix")),e<=217&&(t(".navbar").removeClass("navbar-small fixed-top opacity100"),t(".header-navbar").removeClass("jumpfix"))}),t(window).width(),t(".cortex-popup-video").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-zoom-in",removalDelay:160,preloader:!1,fixedContentPos:!1}),t('.wp-block-gallery a[href$=".jpg"], .wp-block-gallery a[href$=".jpeg"], .wp-block-gallery a[href$=".png"], .wp-block-gallery a[href$=".gif, "], .cortex-popup').click(function(e){e.preventDefault();var n=[],a=t(this).attr("href"),o=t(this).attr("title");n.push({src:a,title:o}),t(this).parent().parent().nextAll().children().find("a").each(function(){var e=t(this).attr("href"),a=t(this).attr("title");n.push({src:e,title:a})}),t(this).parent().parent().prevAll().children().find("a").each(function(){var e=t(this).attr("href"),a=t(this).attr("title");n.push({src:e,title:a})}),t.magnificPopup.open({items:n,type:"image",gallery:{enabled:!0},mainClass:"mfp-zoom-in",callbacks:{open:function(){t.magnificPopup.instance.next=function(){var e=this;e.wrap.removeClass("mfp-image-loaded"),setTimeout(function(){t.magnificPopup.proto.next.call(e)},120)},t.magnificPopup.instance.prev=function(){var e=this;e.wrap.removeClass("mfp-image-loaded"),setTimeout(function(){t.magnificPopup.proto.prev.call(e)},120)}},imageLoadComplete:function(){var t=this;setTimeout(function(){t.wrap.addClass("mfp-image-loaded")},16)}}})}),t(".btn-nav-search").on("click",function(e){e.preventDefault(),t("#search").addClass("open"),t('#search > form > div > input[type="search"]').focus()}),t("#search, #search .search-close, #search .search-close .fa-close").on("click keyup",function(e){e.target!=this&&"search-close"!=e.target.className&&27!=e.keyCode||(t(this).removeClass("open"),t(this).parent().removeClass("open"),t(this).parent().parent().removeClass("open"))})})},function(t,e,n){!function(t,e,n,a){"use strict";if(!e.history.pushState)return t.fn.smoothState=function(){return this},void(t.fn.smoothState.options={});if(!t.fn.smoothState){var o=t("html, body"),r=e.console,i={isExternal:function(t){var n=t.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);return"string"==typeof n[1]&&n[1].length>0&&n[1].toLowerCase()!==e.location.protocol||"string"==typeof n[2]&&n[2].length>0&&n[2].replace(new RegExp(":("+{"http:":80,"https:":443}[e.location.protocol]+")?$"),"")!==e.location.host},stripHash:function(t){return t.replace(/#.*/,"")},isHash:function(t,n){n=n||e.location.href;var a=t.indexOf("#")>-1,o=i.stripHash(t)===i.stripHash(n);return a&&o},translate:function(e){var n={dataType:"html",type:"GET"};return e="string"==typeof e?t.extend({},n,{url:e}):t.extend({},n,e)},shouldLoadAnchor:function(t,e){var n=t.prop("href");return!(i.isExternal(n)||i.isHash(n)||t.is(e)||t.prop("target"))},clearIfOverCapacity:function(t,e){return Object.keys||(Object.keys=function(t){var e,n=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push(e);return n}),Object.keys(t).length>e&&(t={}),t},storePageIn:function(e,n,a,o){var r=t(a);return e[n]={status:"loaded",title:r.filter("title").first().text(),html:r.filter("#"+o)},e},triggerAllAnimationEndEvent:function(e,n){n=" "+n||!1;var a=0;e.on("animationstart webkitAnimationStart oanimationstart MSAnimationStart",function(n){t(n.delegateTarget).is(e)&&(n.stopPropagation(),a++)}),e.on("animationend webkitAnimationEnd oanimationend MSAnimationEnd",function(n){t(n.delegateTarget).is(e)&&(n.stopPropagation(),0==--a&&e.trigger("allanimationend"))}),e.on("allanimationend"+n,function(){a=0,i.redraw(e)})},redraw:function(t){t.height()}},s=function(a,s){var l,c=t(a),u=c.prop("id"),f=null,d=!1,p={},h=e.location.href,m=function(e,n){n=n||t.noop;var a=i.translate(e);if(!p.hasOwnProperty(a.url)||void 0!==a.data){(p=i.clearIfOverCapacity(p,s.cacheLength))[a.url]={status:"fetching"};var o=t.ajax(a);o.success(function(t){i.storePageIn(p,a.url,t,u),c.data("smoothState").cache=p}),o.error(function(){p[a.url].status="error"}),n&&o.complete(n)}},g=function(a){var i="#"+u,l=p[a]?t(p[a].html.html()):null;l.length?(n.title=p[a].title,c.data("smoothState").href=a,s.loadingClass&&o.removeClass(s.loadingClass),s.onReady.render(c,l),c.one("ss.onReadyEnd",function(){d=!1,s.onAfter(c,l),function(){if(f){var e=t(f,c);if(e.length){var a=e.offset().top;n.body.scrollTop=a}f=null}}()}),e.setTimeout(function(){c.trigger("ss.onReadyEnd")},s.onReady.duration)):!l&&s.debug&&r?r.warn("No element with an id of "+i+" in response from "+a+" in "+p):e.location=a},v=function(t,n){var a=i.translate(t);void 0===n&&(n=!0);var l=!1,f=!1,d={loaded:function(){var t=l?"ss.onProgressEnd":"ss.onStartEnd";f&&l?f&&g(a.url):c.one(t,function(){g(a.url)}),n&&e.history.pushState({id:u},p[a.url].title,a.url)},fetching:function(){l||(l=!0,c.one("ss.onStartEnd",function(){s.loadingClass&&o.addClass(s.loadingClass),s.onProgress.render(c),e.setTimeout(function(){c.trigger("ss.onProgressEnd"),f=!0},s.onProgress.duration)})),e.setTimeout(function(){p.hasOwnProperty(a.url)&&d[p[a.url].status]()},10)},error:function(){s.debug&&r?r.log("There was an error loading: "+a.url):e.location=a.url}};p.hasOwnProperty(a.url)||m(a),s.onStart.render(c),e.setTimeout(function(){o.scrollTop(0),c.trigger("ss.onStartEnd")},s.onStart.duration),d[p[a.url].status]()},y=function(e){var n,a=t(e.currentTarget);i.shouldLoadAnchor(a,s.blacklist)&&!d&&(e.stopPropagation(),n=i.translate(a.prop("href")),n=s.alterRequest(n),m(n))},b=function(e){var n=t(e.currentTarget);if(!e.metaKey&&!e.ctrlKey&&i.shouldLoadAnchor(n,s.blacklist)){var a=i.translate(n.prop("href"));d=!0,e.stopPropagation(),e.preventDefault(),f=n.prop("hash"),a=s.alterRequest(a),s.onBefore(n,c),v(a)}},w=function(e){var n=t(e.currentTarget);if(!n.is(s.blacklist)){e.preventDefault(),e.stopPropagation();var a={url:n.prop("action"),data:n.serialize(),type:n.prop("method")};d=!0,"get"===(a=s.alterRequest(a)).type.toLowerCase()&&(a.url=a.url+"?"+a.data),s.onBefore(n,c),v(a)}};return s=t.extend({},t.fn.smoothState.options,s),null===e.history.state&&e.history.replaceState({id:u},n.title,h),i.storePageIn(p,h,n.documentElement.outerHTML,u),i.triggerAllAnimationEndEvent(c,"ss.onStartEnd ss.onProgressEnd ss.onEndEnd"),(l=c).on("click",s.anchors,b),l.on("submit",s.forms,w),s.prefetch&&l.on("mouseover touchstart",s.anchors,y),{href:h,cache:p,clear:function(t){(t=t||!1)&&p.hasOwnProperty(t)?delete p[t]:p={},c.data("smoothState").cache=p},load:v,fetch:m,restartCSSAnimations:function(){var t=c.prop("class");c.removeClass(t),i.redraw(c),c.addClass(t)}}};e.onpopstate=function(n){if(null!==n.state){var a=e.location.href,o=t("#"+n.state.id).data("smoothState");o.href===a||i.isHash(a,o.href)||o.load(a,!1)}},t.smoothStateUtility=i,t.fn.smoothState=function(e){return this.each(function(){var n=this.tagName.toLowerCase();this.id&&"body"!==n&&"html"!==n&&!t.data(this,"smoothState")?t.data(this,"smoothState",new s(this,e)):!this.id&&r?r.warn("Every smoothState container needs an id but the following one does not have one:",this):"body"!==n&&"html"!==n||!r||r.warn("The smoothstate container cannot be the "+this.tagName+" tag")})},t.fn.smoothState.options={debug:!1,anchors:"a",forms:"form",blacklist:".no-smoothState",prefetch:!1,cacheLength:0,loadingClass:"is-loading",alterRequest:function(t){return t},onBefore:function(t,e){},onStart:{duration:0,render:function(t){}},onProgress:{duration:0,render:function(t){}},onReady:{duration:0,render:function(t,e){t.html(e)}},onAfter:function(t,e){}}}}(jQuery,window,document)}]);