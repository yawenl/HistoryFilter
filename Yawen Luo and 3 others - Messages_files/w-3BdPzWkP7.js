/*!CK:930955082!*//*1409636441,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["YGEuA"]); }

__d("EntStreamGroupMall",["DOM","$","ge"],function(a,b,c,d,e,f,g,h,i){var j={replacePager:function(k){g.setContent(h('pagelet_group_pager'),k);},replaceFilesPager:function(k,l){g.setContent(h('group_files_pager_'+l),k);},replacePostApprovalSection:function(k){var l=i('pagelet_consolidate_posts');if(l!==null)g.setContent(l,k);}};e.exports=j;},null);
__d("ShareAttachmentDescriptionEllipsis",["DOMDimensions","LitestandEllipsis","Style"],function(a,b,c,d,e,f,g,h,i){var j={add:function(k,l,m){var n=g.getElementDimensions(l).height,o=i.getFloat(k,'marginTop'),p=k.parentElement.clientHeight-n-o;if(m)p-=(i.getFloat(m,'marginTop')+g.getElementDimensions(m).height);h.add(k,p);}};e.exports=j;},null);
__d("DoublyLinkedListMap",[],function(a,b,c,d,e,f){function g(){"use strict";this._head=null;this._tail=null;this._nodes={};this._nodeCount=0;}g.prototype.get=function(h){"use strict";return this._nodes[h]?this._nodes[h].data:null;};g.prototype.getIndex=function(h){"use strict";for(var i=this._head,j=0;i;i=i.next,j++)if(i.key===h)return j;return null;};g.prototype._insert=function(h,i,j,k){"use strict";j&&!this._nodes[j]&&(j=null);var l=(j&&this._nodes[j])||(k?this._head:this._tail),m={data:i,key:h,next:null,prev:null};if(l){this.remove(h);if(k){m.prev=l.prev;l.prev&&(l.prev.next=m);l.prev=m;m.next=l;}else{m.next=l.next;l.next&&(l.next.prev=m);l.next=m;m.prev=l;}}m.prev===null&&(this._head=m);m.next===null&&(this._tail=m);this._nodes[h]=m;this._nodeCount++;return this;};g.prototype.insertBefore=function(h,i,j){"use strict";return this._insert(h,i,j,true);};g.prototype.insertAfter=function(h,i,j){"use strict";return this._insert(h,i,j,false);};g.prototype.prepend=function(h,i){"use strict";return this.insertBefore(h,i,this._head&&this._head.key);};g.prototype.append=function(h,i){"use strict";return this.insertAfter(h,i,this._tail&&this._tail.key);};g.prototype.remove=function(h){"use strict";var i=this._nodes[h];if(i){var j=i.next,k=i.prev;j&&(j.prev=k);k&&(k.next=j);this._head===i&&(this._head=j);this._tail===i&&(this._tail=k);delete this._nodes[h];this._nodeCount--;}return this;};g.prototype.find=function(h){"use strict";for(var i=this._head;i;i=i.next)if(h(i.data))return i.key;return null;};g.prototype.reduce=function(h,i){"use strict";for(var j=this._head;j;j=j.next)i=h(j.data,i);return i;};g.prototype.exists=function(h){"use strict";return !!this._nodes[h];};g.prototype.isEmpty=function(){"use strict";return !this._head;};g.prototype.reset=function(){"use strict";this._head=null;this._tail=null;this._nodes={};this._nodeCount=0;};g.prototype.map=function(h){"use strict";for(var i=this._head;i;i=i.next)h(i.data);};g.prototype.getCount=function(){"use strict";return this._nodeCount;};g.prototype.getHead=function(){"use strict";return this._head&&this._head.data;};g.prototype.getTail=function(){"use strict";return this._tail&&this._tail.data;};g.prototype.getNext=function(h){"use strict";var i=this._nodes[h];if(i&&i.next)return i.next.data;return null;};g.prototype.getPrev=function(h){"use strict";var i=this._nodes[h];if(i&&i.prev)return i.prev.data;return null;};e.exports=g;},null);
__d("ScrollingPager",["Arbiter","CSS","DOM","OnVisible","UIPagelet","$","copyProperties","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o={};function p(q,r,s,t){"use strict";this.scroll_loader_id=q;this.pagelet_src=r;this.data=s;this.options=t||{};if(this.options.target_id){this.target_id=this.options.target_id;this.options.append=true;}else this.target_id=q;this.scroll_area_id=this.options.scroll_area_id;this.handler=null;}p.prototype.setBuffer=function(q){"use strict";this.options.buffer=q;this.onvisible&&this.onvisible.setBuffer(q);};p.prototype.getBuffer=function(){"use strict";return this.options.buffer;};p.prototype.register=function(){"use strict";this.onvisible=new j(l(this.scroll_loader_id),this.getHandler(),false,this.options.buffer,false,n(this.scroll_area_id));o[this.scroll_loader_id]=this;g.inform(p.REGISTERED,{id:this.scroll_loader_id});};p.prototype.getInstance=function(q){"use strict";return o[q];};p.prototype.getHandler=function(){"use strict";if(this.handler)return this.handler;function q(r){var s=n(this.scroll_loader_id);if(!s){this.onvisible.remove();return;}h.addClass(s.firstChild,'async_saving');var t=this.options.handler,u=this.options.force_remove_pager&&(this.scroll_loader_id!==this.target_id);this.options.handler=function(){g.inform('ScrollingPager/loadingComplete');t&&t.apply(null,arguments);if(u)i.remove(s);};if(r)this.data.pager_fired_on_init=true;k.loadFromEndpoint(this.pagelet_src,this.target_id,this.data,this.options);}return q.bind(this);};p.prototype.setHandler=function(q){"use strict";this.handler=q;};p.prototype.removeOnVisible=function(){"use strict";this.onvisible.remove();};p.prototype.checkBuffer=function(){"use strict";this.onvisible&&this.onvisible.checkBuffer();};p.getInstance=function(q){"use strict";return o[q];};m(p,{REGISTERED:'ScrollingPager/registered'});e.exports=p;},null);
__d("TimelineSection",["Arbiter","DOMScroll","DoublyLinkedListMap","Run","TidyArbiterMixin","copyProperties","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=null;function o(){n=null;}function p(q,r,s){"use strict";this.id=q;this.label=s;this.nodeID=r;this._parentSection=null;this.childSections=new i();this._isLoaded=false;setTimeout(p.inform.bind(p,'sectionInitialized/'+q,{section:this},g.BEHAVIOR_STATE),0);}p.prototype.appendSection=function(q){"use strict";this.childSections.append(q.id,q);q._parentSection=this;};p.prototype.freeze=function(){"use strict";this.freezeChildren();};p.prototype.freezeChildren=function(){"use strict";var q=this.childSections.getHead();while(q){!q.isActive()&&q.freeze();q=q.getNext();}};p.prototype.getNext=function(){"use strict";return this._parentSection&&this._parentSection.childSections.getNext(this.id);};p.prototype.getPrev=function(){"use strict";return this._parentSection&&this._parentSection.childSections.getPrev(this.id);};p.prototype.isActive=function(){"use strict";var q=this;while(q){if(q.id===n)return true;q=q._parentSection;}return false;};p.prototype.isLoaded=function(){"use strict";return this._isLoaded;};p.prototype.setIsLoaded=function(q){"use strict";this._isLoaded=q;return this;};p.prototype.scrollTo=function(){"use strict";if(!m(this.nodeID))return;h.scrollTo(this.getNode(),true,false,false,0,h.scrollTo.bind(this).bind(null,this.getNode(),0));};p.prototype.thaw=function(){"use strict";this.thawChildren();};p.prototype.thawChildren=function(){"use strict";var q=this.childSections.getHead();while(q){q.thaw();q=q.getNext();}};p.prototype.getNode=function(){"use strict";throw new Error('This function needs to be implemented in children.');};p.callWithSection=function(q,r){"use strict";this.subscribe('sectionInitialized/'+q,function(s,t){r(t.section);});};p.setActiveSectionID=function(q){"use strict";!n&&j.onLeave(o);n=q;};l(p,k);e.exports=p;},null);
__d("TimelineConstants",[],function(a,b,c,d,e,f){var g={DS_HEIGHT:'timeline-unit-height',DS_LOADED:'timeline-capsule-loaded',DS_SIDEORG:'timeline-unit-sideorg',DS_TAILBALANCE:'timeline-capsule-tailbalance',DS_COLUMN_HEIGHT_DIFFERENTIAL:'timeline-column-diff-height',FIXED_SIDE_LEFT:'left',FIXED_SIDE_RIGHT:'right',FIXED_SIDE_BOTH:'both',FIXED_SIDE_NONE:'none',SCROLL_TO_OFFSET:100,SCRUBBER_DEFAULT_OFFSET:38,SECTION_LOADING:'TimelineConstants/sectionLoading',SECTION_LOADED:'TimelineConstants/sectionLoaded',SECTION_FULLY_LOADED:'TimelineConstants/sectionFullyLoaded',SECTION_REGISTERED:'TimelineConstants/sectionRegistered'};e.exports=g;},null);
__d("TimelineLegacySections",[],function(a,b,c,d,e,f){var g={},h={get:function(i){return g[i]||{};},getAll:function(){return g;},remove:function(i){delete g[i];},removeAll:function(){g={};},set:function(i,j){g[i]=j;}};e.exports=h;},null);
__d("TimelineURI",["URI"],function(a,b,c,d,e,f,g){var h={TIMELINE_KEY:'timeline',WALL_KEY:'wall',parseURI:function(i){i=g(i);var j=i.getQueryData(),k=i.getPath(),l=k.split('/').slice(1);if(l[0]=='people'||l[0]=='pages')l=l.slice(2);var m=j.sk||l[1]||h.TIMELINE_KEY;if(m==h.WALL_KEY)m=h.TIMELINE_KEY;var n=null,o=null;if(m==h.TIMELINE_KEY){o=parseInt(l[2],10)||null;n=parseInt(l[3],10)||null;}return {path:k,id:j.id||l[0],key:m,viewas:j.viewas?j.viewas:0,filter:j.filter?j.filter:null,year:o,month:n,friendship:!!j.and};}};e.exports=h;},null);
__d("TimelineController",["Event","Arbiter","CSS","DataStore","DOM","DOMQuery","Run","ScrollingPager","TidyArbiter","TimelineConstants","TimelineLegacySections","TimelineURI","Vector","ViewportBounds","$","copyProperties","csx","ge","tidyEvent","queryThenMutateDOM"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){var aa=358,ba=48,ca=740,da=1285,ea='top',fa='paddingTop',ga='paddingTop',ha=null,ia=false,ja,ka,la,ma={},na={},oa=[],pa=null,qa=false,ra=false,sa=false,ta=0,ua=false,va=false,wa=false,xa={},ya=false;function za(lb,mb,nb){nb=nb||[];if(ma[lb])return ma[lb][mb].apply(ma[lb],nb);na[lb]=na[lb]||{};na[lb][mb]=nb;return false;}function ab(){if(!(ua||va||wa))return;ua=ua&&eb(x('rightCol'),ga,kb.getCurrentScrubber());va=va&&eb(u('pagelet_above_header_timeline'),ea);wa=wa&&eb(k.find(document,"div._4f7n"),fa);}var bb=0;function cb(){bb=s.getScrollPosition();}function db(){z(cb,function(){var lb=ta===0||bb.y>=ta;ab();za(kb.STICKY_HEADER,'toggle',[lb]);za(kb.CONTENT,'checkCurrentSectionChange');},'TimelineController/scrollListener');}function eb(lb,mb,nb){if(!lb)return false;if(bb.y<=0){fb(lb,mb);return false;}else if(nb&&i.hasClass(nb.getRoot(),'fixed_elem')){fb(lb,mb);return false;}else{var ob=parseInt(lb.style[mb],10)||0;if(bb.y<ob){i.addClass(lb,'timeline_fixed');lb.style[mb]=bb.y+'px';}else i.removeClass(lb,'timeline_fixed');}return true;}function fb(lb,mb){lb.style[mb]='0px';i.removeClass(lb,'timeline_fixed');}function gb(){z(kb.shouldShowWideAds,function(){za(kb.ADS,'adjustAdsType',[qa]);za(kb.ADS,'adjustAdsToFit');za(kb.CONTENT,'adjustContentPadding');za(kb.STICKY_HEADER_NAV,'adjustMenuHeights');},'TimelineController/resize');}function hb(lb,mb){if(lb=='sidebar/initialized')ya=true;za(kb.ADS,'adjustAdsType',[kb.shouldShowWideAds()]);}function ib(lb,mb){var nb=s.getScrollPosition();mb=Math.min(mb,nb.y);var ob=x('rightCol');if(ob){ob.style[ga]=mb+'px';ua=true;}var pb=u('pagelet_above_header_timeline');if(pb.firstChild){var qb=u('above_header_timeline_placeholder');qb.style.height=pb.offsetHeight+'px';pb.style[ea]=mb+'px';va=true;}var rb=document.documentElement;wa=rb.clientHeight<400||rb.clientWidth<rb.scrollWidth;if(wa)k.find(document,"div._4f7n").style[fa]=mb+'px';h.inform('reflow');}function jb(){while(oa.length)oa.pop().remove();for(var lb in ma)ma[lb].reset&&ma[lb].reset();la.unsubscribe();la=null;ha=null;ja=null;ma={};na={};pa=null;ra=false;ta=0;va=false;if(ua){var mb=x('rightCol');if(mb)fb(mb,ga);}ua=false;if(wa){var nb=k.find(document,"div._4f7n");fb(nb,fa);wa=false;}ya=false;ia=false;j.purge(p.DS_HEIGHT);j.purge(p.DS_LOADED);j.purge(p.DS_SIDEORG);j.purge(p.DS_TAILBALANCE);j.purge(p.DS_COLUMN_HEIGHT_DIFFERENTIAL);}var kb={NAV:'nav',STICKY_HEADER:'sticky_header',STICKY_HEADER_NAV:'sticky_header_nav',SCRUBBER:'scrubber',CONTENT:'content',ADS:'ads',LOGGING:'logging',init:function(lb,mb,nb){if(ia)return;if(mb==r.WALL_KEY)mb=r.TIMELINE_KEY;ia=true;ja=lb;ka=nb.has_fixed_ads;ra=nb.one_column_minimal;sa=nb.is_rhc_redesign;xa={allactivity:true,approve:true};if(!ra)v(xa,{games:true,map:true,music:true,video:true});xa[r.TIMELINE_KEY]=true;za(kb.CONTENT,'adjustContentPadding');oa.push(g.listen(window,'scroll',db),g.listen(window,'resize',gb));la=h.subscribe(['sidebar/initialized','sidebar/show','sidebar/hide'],hb);y(o.subscribe('TimelineCover/coverCollapsed',ib));m.onLeave(jb);kb.registerCurrentKey(mb);},setAdsTracking:function(lb){za(kb.ADS,'start',[lb]);},pageHasScrubber:function(lb){return !lb||(!ra&&lb.match(/^(og_)?app_/))||(lb in xa);},fixedAds:function(){return ka;},registerCurrentKey:function(lb){ha=lb;pa=lb!=='map'&&s.getViewportDimensions().y<ca&&kb.pageHasScrubber(lb);var mb=k.find(document,"div._4f7n");pa=pa||mb.offsetTop;za(kb.ADS,'setShortMode',[pa]);za(kb.ADS,'updateCurrentKey',[lb]);ta=lb==r.TIMELINE_KEY?aa-ba:0;},getCurrentKey:function(){return ha;},getCurrentScrubber:function(){return ma[kb.SCRUBBER];},getCurrentStickyHeaderNav:function(){return ma[kb.STICKY_HEADER_NAV];},scrubberHasLoaded:function(lb){i.conditionClass(lb.getRoot(),'fixed_elem',!pa);za(kb.ADS,'registerScrubber',[lb]);},scrubberHasChangedState:function(){za(kb.ADS,'adjustAdsToFit');},scrubberWasClicked:function(lb){za(kb.LOGGING,'logScrubberClick',[lb]);},stickyHeaderNavWasClicked:function(lb){za(kb.LOGGING,'logStickyHeaderNavClick',[lb]);},sectionHasChanged:function(lb,mb){za(kb.STICKY_HEADER_NAV,'updateSection',[lb,mb]);za(kb.SCRUBBER,'updateSection',[lb,mb]);za(kb.ADS,'loadAdsIfEnoughTimePassed');za(kb.LOGGING,'logSectionChange',[lb,mb]);},navigateToSection:function(lb){za(kb.CONTENT,'navigateToSection',[lb]);},shouldShowWideAds:function(){if(!ya||sa){qa=false;}else{var lb=da+t.getRight()+t.getLeft();qa=s.getViewportDimensions().x>=lb;}return qa;},sidebarInitialized:function(){return ya;},adjustStickyHeaderWidth:function(){za(kb.STICKY_HEADER,'adjustWidth');},isOneColumnMinimal:function(){return ra;},hideStickyHeaderNavSectionMenu:function(){za(kb.STICKY_HEADER_NAV,'hideSectionMenu');},register:function(lb,mb){ma[lb]=mb;if(na[lb]){for(var nb in na[lb])za(lb,nb,na[lb][nb]);delete na[lb];}},adjustScrollingPagerBuffer:function(lb,mb){var nb=j.get(p.DS_COLUMN_HEIGHT_DIFFERENTIAL,mb);if(!nb)return;var ob=n.getInstance(lb);ob&&ob.setBuffer(ob.getBuffer()+Math.abs(nb));},runOnceWhenSectionFullyLoaded:function(lb,mb,nb){var ob=q.get(mb);if(ob){var pb=false;l.scry(ob.node,'.fbTimelineCapsule').forEach(function(rb){if(!pb&&parseInt(j.get(p.DS_LOADED,rb.id),10)>=parseInt(nb,10)){lb();pb=true;}});if(pb)return;}var qb=h.subscribe(p.SECTION_FULLY_LOADED,function(rb,sb){if(sb.scrubberKey===mb&&sb.pageIndex===nb){lb();qb.unsubscribe();}});}};e.exports=kb;},null);
__d("TimelineSmartInsert",["Run","UserAgent_DEPRECATED","Vector"],function(a,b,c,d,e,f,g,h,i){var j=100;function k(q){if(q==='viewport')return i.getViewportDimensions().y;return q;}var l=false,m=false;function n(){if(m)return;g.onLeave(o);m=true;}function o(){l=false;m=false;}var p={run:function(q,r,s){n();if(!l||h.ie()<=8){r();return;}var t=q.offsetHeight;r();var u=q.offsetHeight,v=i.getScrollPosition().y,w=i.getElementPosition(q).y;if(u!==t&&w<v&&w+t<v+k(s||j))window.scrollBy(0,u-t);},enable:function(){l=true;}};e.exports=p;},null);
__d("legacy:ui-scrolling-pager-js",["ScrollingPager"],function(a,b,c,d){a.ScrollingPager=b('ScrollingPager');},3);
__d("ButtonGroup",["CSS","DataStore","Parent","copyProperties","createArrayFrom"],function(a,b,c,d,e,f,g,h,i,j,k){var l='firstItem',m='lastItem';function n(s,t){var u=i.byClass(s,t);if(!u)throw new Error('invalid use case');return u;}function o(s){return g.shown(s)&&k(s.childNodes).some(g.shown);}function p(s){var t,u,v;k(s.childNodes).forEach(function(w){v=o(w);g.removeClass(w,l);g.removeClass(w,m);g.conditionShow(w,v);if(v){t=t||w;u=w;}});t&&g.addClass(t,l);u&&g.addClass(u,m);g.conditionShow(s,t);}function q(s,t){var u=n(t,'uiButtonGroupItem');s(u);p(u.parentNode);}function r(s){"use strict";this._root=n(s,'uiButtonGroup');h.set(this._root,'ButtonGroup',this);p(this._root);}r.getInstance=function(s){"use strict";var t=n(s,'uiButtonGroup'),u=h.get(t,'ButtonGroup');return u||new r(t);};j(r.prototype,{hideItem:q.bind(null,g.hide),showItem:q.bind(null,g.show),toggleItem:q.bind(null,g.toggle)});e.exports=r;},null);
__d("ButtonGroupMonitor",["ContextualDialog","ContextualLayer","CSS","Layer","Parent","SelectorDeprecated","DataStore"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){function n(o,p){var q=k.byClass(o,'bg_stat_elem')||k.byClass(o,'uiButtonGroup');if(!q&&p)q=m.get(p,'toggleElement',null);if(q){p&&m.set(p,'toggleElement',q);i.toggleClass(q,'uiButtonGroupActive');}}j.subscribe(['hide','show'],function(o,p){if(p instanceof h||p instanceof g)n(p.getCausalElement(),p);});l.subscribe(['close','open'],function(o,p){n(p.selector);});},null);
__d("ContextualLayerAsyncRelative",["Event","Parent","copyProperties"],function(a,b,c,d,e,f,g,h,i){function j(k){"use strict";this._layer=k;}j.prototype.enable=function(){"use strict";this._layerSubscription=this._layer.subscribe('show',this._attachListener.bind(this));if(this._layer.isShown())this._attachListener();};j.prototype.disable=function(){"use strict";this._layerSubscription.unsubscribe();this._layerSubscription=null;if(this._listener){this._listener.remove();this._listener=null;}};j.prototype._attachListener=function(){"use strict";this._listener=g.listen(this._layer.getRoot(),'click',this._onclick.bind(this));};j.prototype._onclick=function(k){"use strict";var l=h.byTag(k.getTarget(),'A');if(!l)return;var m=l.getAttribute('ajaxify'),n=l.href,o=m||n;if(l.rel==='async'||l.rel==='async-post'){d(['AsyncRequest'],function(p){p.bootstrap(o,this._layer.getContext(),l.rel==='async-post');}.bind(this));return false;}};i(j.prototype,{_layerSubscription:null,_listener:null});e.exports=j;},null);