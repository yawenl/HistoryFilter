/*!CK:1499522000!*//*1409753512,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["BdiMI"]); }

__d("CanvasBookmarkUpdateController",["Arbiter","AsyncSignal","ChannelConstants","CSS","DOM","csx","getElementText"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){function n(o,p,q){"use strict";this.$CanvasBookmarkUpdateController0=o;this.$CanvasBookmarkUpdateController1=p;this.$CanvasBookmarkUpdateController2=q;g.subscribe(i.getArbiterType('app_request_create'),function(r,s){var t=k.scry(this.$CanvasBookmarkUpdateController1,".item_"+s.obj.appid)[0],u=t&&k.scry(t,"._1k71")[0];u&&k.appendContent(u,s.obj.request);t&&this.$CanvasBookmarkUpdateController3(t,1);}.bind(this));g.subscribe(i.getArbiterType('app_request_delete'),function(r,s){var t=k.scry(this.$CanvasBookmarkUpdateController1,".item_"+s.obj.appid)[0],u=t&&k.scry(t,"[data-requestid='"+s.obj.requestid+"']")[0];u&&k.remove(u.parentNode);t&&this.$CanvasBookmarkUpdateController3(t,-1);}.bind(this));this.$CanvasBookmarkUpdateController0.subscribe('page_start',function(r,s){this.$CanvasBookmarkUpdateController4(this.$CanvasBookmarkUpdateController2,s);}.bind(this));this.$CanvasBookmarkUpdateController4(this.$CanvasBookmarkUpdateController2,0);}n.prototype.$CanvasBookmarkUpdateController3=function(o,p){"use strict";var q=k.find(o,'.countValue'),r=parseInt(m(q),10),s=Math.max(0,r+p);k.setContent(q,s);if(s<1){j.hide(q.parentNode);}else j.show(q.parentNode);};n.prototype.$CanvasBookmarkUpdateController4=function(o,p){"use strict";if(p<o.length&&o[p]){var q='/ajax/canvas/bookmark/slider_logger';new h(q,{data:o[p]}).send();o[p]=null;}};e.exports=n;},null);
__d("RecommendationSliderLogger",["AsyncSignal"],function(a,b,c,d,e,f,g){function h(j,k){if(k<j.length&&j[k]){var l='/ajax/canvas/recommendation/slider_logger';new g(l,{data:j[k]}).send();j[k]=null;}}function i(j,k){this._logData=k;j.subscribe('page_start',function(l,m){if(m<0)m+=this._logData.length;h(this._logData,m);}.bind(this));h(this._logData,0);}e.exports=i;},null);
__d("GamesDivebar",["Event"],function(a,b,c,d,e,f,g){var h={register:function(i,j){var k=i.getRightArrow();if(!k)return;var l=g.listen(k,'click',function(){l.remove();l=null;j.forEach(function(m){i.push(m);});});}};e.exports=h;},null);
__d("GamesLargeIconRecUnit",["CSS","Event"],function(a,b,c,d,e,f,g,h){var i={showXoutOnHover:function(j,k){h.listen(j,'mouseover',function(){g.show(k);}.bind(this));h.listen(j,'mouseout',function(){g.hide(k);}.bind(this));}};e.exports=i;},null);
__d("GamesRecGrid",["CSS","DOM","DOMQuery","Event","Run","Animation","Ease","Style","BanzaiODS","csx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=88,r=352;function s(t,u){"use strict";this.$GamesRecGrid0=t;this.$GamesRecGrid1=u;if(this.$GamesRecGrid1.autoscroll){this.$GamesRecGrid2=h.find(this.$GamesRecGrid0,"._8eu");this.$GamesRecGrid3=this.$GamesRecGrid2.childNodes.length;this.$GamesRecGrid4=0;this.$GamesRecGrid5=j.listen(this.$GamesRecGrid0,'mouseenter',this.pauseAutoscroll.bind(this));this.$GamesRecGrid6=j.listen(this.$GamesRecGrid0,'mouseleave',this.resumeAutoscroll.bind(this));this.resumeAutoscroll();}var v=i.scry(this.$GamesRecGrid0,"._8et");if(v.length===1){this.$GamesRecGrid7=v[0];this.$GamesRecGrid8();}}s.prototype.$GamesRecGrid8=function(){"use strict";var t=h.find(this.$GamesRecGrid0,"._bva"),u=j.listen(this.$GamesRecGrid7,'click',function(){u.remove();u=null;g.hide(this.$GamesRecGrid7);g.show(t);if(this.$GamesRecGrid1.autoscroll){clearInterval(this.$GamesRecGrid9);this.$GamesRecGrid6.remove();this.$GamesRecGrid5.remove();n.set(h.find(this.$GamesRecGrid0,"._8eu"),'top','0px');n.set(h.find(this.$GamesRecGrid0,"._8ev"),'height',r+'px');}else h.scry(this.$GamesRecGrid0,"._5wml").forEach(function(v){g.show(v);});o.bumpEntityKey('platform_www','games_homepage_rhc_unit.expand');}.bind(this));k.onLeave(function(){u&&u.remove();});};s.prototype.resumeAutoscroll=function(){"use strict";this.$GamesRecGrid9=setInterval(function(){new l(this.$GamesRecGrid2).to('top',-(this.$GamesRecGrid4*q)).ease(m.sineInOut).duration(400).go();this.$GamesRecGrid4=((this.$GamesRecGrid4+this.$GamesRecGrid3+1)%this.$GamesRecGrid3);}.bind(this),this.$GamesRecGrid1.autoscrollTimeout);};s.prototype.pauseAutoscroll=function(){"use strict";clearInterval(this.$GamesRecGrid9);this.$GamesRecGrid9=null;};e.exports=s;},null);
__d("GamesImpressionTracker",["VisibilityTracking","throttle","Event","Banzai","Arbiter"],function(a,b,c,d,e,f,g,h,i,j,k){var l='data-gamesegoimp',m=1000,n=false;function o(v){if(!n)return;v.style.display="inline-block";v.style.backgroundColor="green";v.style.opacity="0.5";}for(var p in g)if(g.hasOwnProperty(p))r[p]=g[p];var q=g===null?null:g.prototype;r.prototype=Object.create(q);r.prototype.constructor=r;r.__superConstructor__=g;function r(){"use strict";if(g!==null)g.apply(this,arguments);}r.prototype.handleEvent=function(v,event){"use strict";if(event.name===g.EVENT.VISIBLE){var w=v.getAttribute(l);v.removeAttribute(l);if(w){o(v);j.post('games_ego_imp',{data:w});}}};var s=new r({selector:'[data-gamesegoimp]',handleAllVisibleEvents:true,skipVisibilityHiddenEvents:true,cacheTrackedElements:true}),t=h.acrossTransitions(function(){return s.fireEventCallback();},m,null);s.listeners.addSubscriptions(i.listen(document,'mousemove',t),i.listen(document,'click',t),k.subscribe('games_unit_loaded',function(){return s.refreshAllTrackedElements();}));var u={triggerGoggles:function(){n=true;}};e.exports=u;},null);
__d("Slideshow",["ArbiterMixin","CSS","DOM","Event","Locale","Parent","csx","cx","getActiveElement","mixin","shield"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r=p(g);for(var s in r)if(r.hasOwnProperty(s))u[s]=r[s];var t=r===null?null:r.prototype;u.prototype=Object.create(t);u.prototype.constructor=u;u.__superConstructor__=r;function u(v,w){"use strict";this._root=v;this._config=w;this._currentIndex=0;this._animating=false;this._autoplayTimer=null;this._autoplayTimeout=w.autoplayTimeout;this._init();}u.prototype.getIndex=function(){"use strict";return this._currentIndex;};u.prototype.getNumItems=function(){"use strict";return this._items.length;};u.prototype.getRightArrow=function(){"use strict";if(this._config.arrows)return i.find(this._root,"a._2xw");return null;};u.prototype.page=function(v){"use strict";if(typeof v==='undefined')v='next';if(v==='next'){if(this._config.wrap||this.getIndex()<this.getNumItems()-1)this._animateTo((this.getIndex()+1)%this.getNumItems());}else if(v==='prev')if(this._config.wrap||this.getIndex()>0){var w=(this.getNumItems()+this.getIndex()-1)%this.getNumItems();this._animateTo(w);}};u.prototype.pageTo=function(v){"use strict";this._animateTo(v,q(this._setCurrent,this,v));};u.prototype.insert=function(v,w){"use strict";if(v>this._currentIndex){i.insertAfter(this._items[v-1],w);}else{i.insertBefore(this._items[v],w);this._currentIndex++;}this._items.splice(v,0,w);this._updateArrowState(this._currentIndex);this.inform('items_updated');};u.prototype.push=function(v){"use strict";this.insert(this._items.length,v);};u.prototype._init=function(){"use strict";this._container=i.find(this._root,"ul._2xq");this._items=i.scry(this._container,"li._2xr");if(this._config.arrows){j.listen(this._root,'click',this._clickListener.bind(this));var v=i.find(this._root,"a._2xw"),w=i.find(this._root,"a._2xx");this._arrowLeft=k.isRTL()?v:w;this._arrowRight=k.isRTL()?w:v;}if(this._config.autoplay){if(this._config.autoplaycontrol){j.listen(this._root,'mouseenter',this.stopAutoplay.bind(this));j.listen(this._root,'mouseleave',this.resetAutoplay.bind(this));}this.resetAutoplay();}this.subscribe(['page_start','page_end'],function(x,y){h.conditionClass(this._root,"_2xm",x==='page_start');}.bind(this));};u.prototype._clickListener=function(event){"use strict";var v=event.getTarget(),w=l.byTag(v,'a');if(w&&!h.hasClass(w,"_2xo"))if(h.hasClass(w,"_2xw")){this.page('next');}else if(h.hasClass(w,"_2xx"))this.page('prev');};u.prototype._updateArrowState=function(v){"use strict";if(!this._config.arrows)return;h.conditionClass(this._arrowRight,"_2xo",this._items.length===1);h.conditionClass(this._arrowLeft,"_2xo",this._items.length===1);};u.prototype._animateTo=function(v){"use strict";};u.prototype._setCurrent=function(v){"use strict";h.removeClass(this._items[this._currentIndex],"_2xn");h.addClass(this._items[v],"_2xn");h.removeClass(this._root,"_2xm");var w=i.scry(this._items[this._currentIndex],'a').some(function(y){return y==o();});if(w){var x=i.scry(this._items[v],'a');if(x[0])x[0].focus();}this._currentIndex=v;this._animating=false;this.inform('page_end',v);};u.prototype.resetAutoplay=function(){"use strict";if(this._config.autoplay){clearTimeout(this._autoplayTimer);this._autoplayTimer=setTimeout(this._autoplay.bind(this),this._autoplayTimeout);}};u.prototype.stopAutoplay=function(){"use strict";clearTimeout(this._autoplayTimer);this._autoplayTimer=null;};u.prototype._autoplay=function(){"use strict";this.resetAutoplay();if(this._items.length>1)this.page();};u.prototype.setAutoplayTimeout=function(v){"use strict";this._autoplayTimeout=v;};e.exports=u;},null);
__d("Carousel",["Animation","CSS","Ease","Locale","Slideshow","Style","cx","shield"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o=j.isRTL()?'right':'left',p=i.sineInOut;for(var q in k)if(k.hasOwnProperty(q))s[q]=k[q];var r=k===null?null:k.prototype;s.prototype=Object.create(r);s.prototype.constructor=s;s.__superConstructor__=k;function s(t,u){"use strict";k.call(this,t,u);this.subscribe('items_updated',this._updateItemState.bind(this));}s.prototype._updateItemState=function(t,u){"use strict";this._setContainerPos(t);l.set(this._container,'width',(this._items.length*this._config.width)+'px');};s.prototype._updateArrowState=function(t){"use strict";if(!this._config.arrows)return;var u=this._config.wrap,v=this._items.length,w=Math.floor(v/this._config.photosperframe);h.conditionClass(this._arrowRight,"_2xo",w===1||(!u&&t===w-1));h.conditionClass(this._arrowLeft,"_2xo",w===1||(!u&&t===0));};s.prototype._animate=function(t,u){"use strict";var v=(t===-1)?this._items.length-1:t;this._animating=true;this.inform('page_start',v);new g(this._container).to(o,-t*this._config.width).duration(this._config.animationDuration).ease(p).ondone(u).go();};s.prototype._setContainerPos=function(t){"use strict";l.set(this._container,o,-t*this._config.width+'px');};s.prototype._animateTo=function(t){"use strict";if(this._animating)return;var u=this._items.length;if((0<=t&&t<u)||!this._config.wrap){var v=(t+u)%u;this._updateArrowState(v);return this._animate(v,n(this._setCurrent,this,v));}var w=t%u,x=w?u-1:0,y=this._items[u-1];l.set(y,'position','absolute');l.set(y,o,-this._config.width+'px');if(x===0)this._setContainerPos(-1);this._animate(w,function(){l.set(y,'position','static');l.set(y,o,'auto');this._setContainerPos(x);this._setCurrent(x);}.bind(this));};e.exports=s;},null);