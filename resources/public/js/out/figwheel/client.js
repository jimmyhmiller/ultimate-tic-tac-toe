// Compiled by ClojureScript 0.0-2371
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__20393,args){var map__20395 = p__20393;var map__20395__$1 = ((cljs.core.seq_QMARK_.call(null,map__20395))?cljs.core.apply.call(null,cljs.core.hash_map,map__20395):map__20395);var debug = cljs.core.get.call(null,map__20395__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__20393,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__20393,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__20396){
var p__20393 = cljs.core.first(arglist__20396);
var args = cljs.core.rest(arglist__20396);
return log__delegate(p__20393,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__20397){var map__20399 = p__20397;var map__20399__$1 = ((cljs.core.seq_QMARK_.call(null,map__20399))?cljs.core.apply.call(null,cljs.core.hash_map,map__20399):map__20399);var websocket_url = cljs.core.get.call(null,map__20399__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__20400,callback){var map__20402 = p__20400;var map__20402__$1 = ((cljs.core.seq_QMARK_.call(null,map__20402))?cljs.core.apply.call(null,cljs.core.hash_map,map__20402):map__20402);var msg = map__20402__$1;var dependency_file = cljs.core.get.call(null,map__20402__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__20402__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__20402__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__9093__auto__ = dependency_file;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__20402,map__20402__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__20402,map__20402__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__20403,p__20404){var map__20407 = p__20403;var map__20407__$1 = ((cljs.core.seq_QMARK_.call(null,map__20407))?cljs.core.apply.call(null,cljs.core.hash_map,map__20407):map__20407);var opts = map__20407__$1;var url_rewriter = cljs.core.get.call(null,map__20407__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__20408 = p__20404;var map__20408__$1 = ((cljs.core.seq_QMARK_.call(null,map__20408))?cljs.core.apply.call(null,cljs.core.hash_map,map__20408):map__20408);var d = map__20408__$1;var file = cljs.core.get.call(null,map__20408__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__20409,p__20410){var map__20452 = p__20409;var map__20452__$1 = ((cljs.core.seq_QMARK_.call(null,map__20452))?cljs.core.apply.call(null,cljs.core.hash_map,map__20452):map__20452);var opts = map__20452__$1;var on_jsload = cljs.core.get.call(null,map__20452__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__20452__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__20453 = p__20410;var map__20453__$1 = ((cljs.core.seq_QMARK_.call(null,map__20453))?cljs.core.apply.call(null,cljs.core.hash_map,map__20453):map__20453);var files = cljs.core.get.call(null,map__20453__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__13184__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13184__auto__,map__20452,map__20452__$1,opts,on_jsload,before_jsload,map__20453,map__20453__$1,files){
return (function (){var f__13185__auto__ = (function (){var switch__13119__auto__ = ((function (c__13184__auto__,map__20452,map__20452__$1,opts,on_jsload,before_jsload,map__20453,map__20453__$1,files){
return (function (state_20476){var state_val_20477 = (state_20476[(1)]);if((state_val_20477 === (6)))
{var inst_20458 = (state_20476[(7)]);var inst_20467 = (state_20476[(2)]);var inst_20468 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20469 = [inst_20458];var inst_20470 = (new cljs.core.PersistentVector(null,1,(5),inst_20468,inst_20469,null));var inst_20471 = cljs.core.apply.call(null,on_jsload,inst_20470);var state_20476__$1 = (function (){var statearr_20478 = state_20476;(statearr_20478[(8)] = inst_20467);
return statearr_20478;
})();var statearr_20479_20493 = state_20476__$1;(statearr_20479_20493[(2)] = inst_20471);
(statearr_20479_20493[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20477 === (5)))
{var inst_20474 = (state_20476[(2)]);var state_20476__$1 = state_20476;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20476__$1,inst_20474);
} else
{if((state_val_20477 === (4)))
{var state_20476__$1 = state_20476;var statearr_20480_20494 = state_20476__$1;(statearr_20480_20494[(2)] = null);
(statearr_20480_20494[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20477 === (3)))
{var inst_20458 = (state_20476[(7)]);var inst_20461 = console.debug("Figwheel: loaded these files");var inst_20462 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_20458);var inst_20463 = cljs.core.prn_str.call(null,inst_20462);var inst_20464 = console.log(inst_20463);var inst_20465 = cljs.core.async.timeout.call(null,(10));var state_20476__$1 = (function (){var statearr_20481 = state_20476;(statearr_20481[(9)] = inst_20464);
(statearr_20481[(10)] = inst_20461);
return statearr_20481;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20476__$1,(6),inst_20465);
} else
{if((state_val_20477 === (2)))
{var inst_20458 = (state_20476[(7)]);var inst_20458__$1 = (state_20476[(2)]);var inst_20459 = cljs.core.not_empty.call(null,inst_20458__$1);var state_20476__$1 = (function (){var statearr_20482 = state_20476;(statearr_20482[(7)] = inst_20458__$1);
return statearr_20482;
})();if(cljs.core.truth_(inst_20459))
{var statearr_20483_20495 = state_20476__$1;(statearr_20483_20495[(1)] = (3));
} else
{var statearr_20484_20496 = state_20476__$1;(statearr_20484_20496[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20477 === (1)))
{var inst_20454 = before_jsload.call(null,files);var inst_20455 = figwheel.client.add_request_urls.call(null,opts,files);var inst_20456 = figwheel.client.load_all_js_files.call(null,inst_20455);var state_20476__$1 = (function (){var statearr_20485 = state_20476;(statearr_20485[(11)] = inst_20454);
return statearr_20485;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20476__$1,(2),inst_20456);
} else
{return null;
}
}
}
}
}
}
});})(c__13184__auto__,map__20452,map__20452__$1,opts,on_jsload,before_jsload,map__20453,map__20453__$1,files))
;return ((function (switch__13119__auto__,c__13184__auto__,map__20452,map__20452__$1,opts,on_jsload,before_jsload,map__20453,map__20453__$1,files){
return (function() {
var state_machine__13120__auto__ = null;
var state_machine__13120__auto____0 = (function (){var statearr_20489 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20489[(0)] = state_machine__13120__auto__);
(statearr_20489[(1)] = (1));
return statearr_20489;
});
var state_machine__13120__auto____1 = (function (state_20476){while(true){
var ret_value__13121__auto__ = (function (){try{while(true){
var result__13122__auto__ = switch__13119__auto__.call(null,state_20476);if(cljs.core.keyword_identical_QMARK_.call(null,result__13122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13122__auto__;
}
break;
}
}catch (e20490){if((e20490 instanceof Object))
{var ex__13123__auto__ = e20490;var statearr_20491_20497 = state_20476;(statearr_20491_20497[(5)] = ex__13123__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20476);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20490;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20498 = state_20476;
state_20476 = G__20498;
continue;
}
} else
{return ret_value__13121__auto__;
}
break;
}
});
state_machine__13120__auto__ = function(state_20476){
switch(arguments.length){
case 0:
return state_machine__13120__auto____0.call(this);
case 1:
return state_machine__13120__auto____1.call(this,state_20476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13120__auto____0;
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13120__auto____1;
return state_machine__13120__auto__;
})()
;})(switch__13119__auto__,c__13184__auto__,map__20452,map__20452__$1,opts,on_jsload,before_jsload,map__20453,map__20453__$1,files))
})();var state__13186__auto__ = (function (){var statearr_20492 = f__13185__auto__.call(null);(statearr_20492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13184__auto__);
return statearr_20492;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13186__auto__);
});})(c__13184__auto__,map__20452,map__20452__$1,opts,on_jsload,before_jsload,map__20453,map__20453__$1,files))
);
return c__13184__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__20499,link_href){var map__20501 = p__20499;var map__20501__$1 = ((cljs.core.seq_QMARK_.call(null,map__20501))?cljs.core.apply.call(null,cljs.core.hash_map,map__20501):map__20501);var request_url = cljs.core.get.call(null,map__20501__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__20501__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__13184__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13184__auto__,parent){
return (function (){var f__13185__auto__ = (function (){var switch__13119__auto__ = ((function (c__13184__auto__,parent){
return (function (state_20522){var state_val_20523 = (state_20522[(1)]);if((state_val_20523 === (2)))
{var inst_20519 = (state_20522[(2)]);var inst_20520 = parent.removeChild(orig_link);var state_20522__$1 = (function (){var statearr_20524 = state_20522;(statearr_20524[(7)] = inst_20519);
return statearr_20524;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20522__$1,inst_20520);
} else
{if((state_val_20523 === (1)))
{var inst_20517 = cljs.core.async.timeout.call(null,(200));var state_20522__$1 = state_20522;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20522__$1,(2),inst_20517);
} else
{return null;
}
}
});})(c__13184__auto__,parent))
;return ((function (switch__13119__auto__,c__13184__auto__,parent){
return (function() {
var state_machine__13120__auto__ = null;
var state_machine__13120__auto____0 = (function (){var statearr_20528 = [null,null,null,null,null,null,null,null];(statearr_20528[(0)] = state_machine__13120__auto__);
(statearr_20528[(1)] = (1));
return statearr_20528;
});
var state_machine__13120__auto____1 = (function (state_20522){while(true){
var ret_value__13121__auto__ = (function (){try{while(true){
var result__13122__auto__ = switch__13119__auto__.call(null,state_20522);if(cljs.core.keyword_identical_QMARK_.call(null,result__13122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13122__auto__;
}
break;
}
}catch (e20529){if((e20529 instanceof Object))
{var ex__13123__auto__ = e20529;var statearr_20530_20532 = state_20522;(statearr_20530_20532[(5)] = ex__13123__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20522);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20529;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20533 = state_20522;
state_20522 = G__20533;
continue;
}
} else
{return ret_value__13121__auto__;
}
break;
}
});
state_machine__13120__auto__ = function(state_20522){
switch(arguments.length){
case 0:
return state_machine__13120__auto____0.call(this);
case 1:
return state_machine__13120__auto____1.call(this,state_20522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13120__auto____0;
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13120__auto____1;
return state_machine__13120__auto__;
})()
;})(switch__13119__auto__,c__13184__auto__,parent))
})();var state__13186__auto__ = (function (){var statearr_20531 = f__13185__auto__.call(null);(statearr_20531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13184__auto__);
return statearr_20531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13186__auto__);
});})(c__13184__auto__,parent))
);
return c__13184__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__20534){var map__20536 = p__20534;var map__20536__$1 = ((cljs.core.seq_QMARK_.call(null,map__20536))?cljs.core.apply.call(null,cljs.core.hash_map,map__20536):map__20536);var f_data = map__20536__$1;var request_url = cljs.core.get.call(null,map__20536__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__20536__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__20537,files_msg){var map__20559 = p__20537;var map__20559__$1 = ((cljs.core.seq_QMARK_.call(null,map__20559))?cljs.core.apply.call(null,cljs.core.hash_map,map__20559):map__20559);var opts = map__20559__$1;var on_cssload = cljs.core.get.call(null,map__20559__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__20560_20580 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__20561_20581 = null;var count__20562_20582 = (0);var i__20563_20583 = (0);while(true){
if((i__20563_20583 < count__20562_20582))
{var f_20584 = cljs.core._nth.call(null,chunk__20561_20581,i__20563_20583);figwheel.client.reload_css_file.call(null,f_20584);
{
var G__20585 = seq__20560_20580;
var G__20586 = chunk__20561_20581;
var G__20587 = count__20562_20582;
var G__20588 = (i__20563_20583 + (1));
seq__20560_20580 = G__20585;
chunk__20561_20581 = G__20586;
count__20562_20582 = G__20587;
i__20563_20583 = G__20588;
continue;
}
} else
{var temp__4126__auto___20589 = cljs.core.seq.call(null,seq__20560_20580);if(temp__4126__auto___20589)
{var seq__20560_20590__$1 = temp__4126__auto___20589;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20560_20590__$1))
{var c__9863__auto___20591 = cljs.core.chunk_first.call(null,seq__20560_20590__$1);{
var G__20592 = cljs.core.chunk_rest.call(null,seq__20560_20590__$1);
var G__20593 = c__9863__auto___20591;
var G__20594 = cljs.core.count.call(null,c__9863__auto___20591);
var G__20595 = (0);
seq__20560_20580 = G__20592;
chunk__20561_20581 = G__20593;
count__20562_20582 = G__20594;
i__20563_20583 = G__20595;
continue;
}
} else
{var f_20596 = cljs.core.first.call(null,seq__20560_20590__$1);figwheel.client.reload_css_file.call(null,f_20596);
{
var G__20597 = cljs.core.next.call(null,seq__20560_20590__$1);
var G__20598 = null;
var G__20599 = (0);
var G__20600 = (0);
seq__20560_20580 = G__20597;
chunk__20561_20581 = G__20598;
count__20562_20582 = G__20599;
i__20563_20583 = G__20600;
continue;
}
}
} else
{}
}
break;
}
var c__13184__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13184__auto__,map__20559,map__20559__$1,opts,on_cssload){
return (function (){var f__13185__auto__ = (function (){var switch__13119__auto__ = ((function (c__13184__auto__,map__20559,map__20559__$1,opts,on_cssload){
return (function (state_20570){var state_val_20571 = (state_20570[(1)]);if((state_val_20571 === (2)))
{var inst_20566 = (state_20570[(2)]);var inst_20567 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_20568 = on_cssload.call(null,inst_20567);var state_20570__$1 = (function (){var statearr_20572 = state_20570;(statearr_20572[(7)] = inst_20566);
return statearr_20572;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20570__$1,inst_20568);
} else
{if((state_val_20571 === (1)))
{var inst_20564 = cljs.core.async.timeout.call(null,(100));var state_20570__$1 = state_20570;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20570__$1,(2),inst_20564);
} else
{return null;
}
}
});})(c__13184__auto__,map__20559,map__20559__$1,opts,on_cssload))
;return ((function (switch__13119__auto__,c__13184__auto__,map__20559,map__20559__$1,opts,on_cssload){
return (function() {
var state_machine__13120__auto__ = null;
var state_machine__13120__auto____0 = (function (){var statearr_20576 = [null,null,null,null,null,null,null,null];(statearr_20576[(0)] = state_machine__13120__auto__);
(statearr_20576[(1)] = (1));
return statearr_20576;
});
var state_machine__13120__auto____1 = (function (state_20570){while(true){
var ret_value__13121__auto__ = (function (){try{while(true){
var result__13122__auto__ = switch__13119__auto__.call(null,state_20570);if(cljs.core.keyword_identical_QMARK_.call(null,result__13122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13122__auto__;
}
break;
}
}catch (e20577){if((e20577 instanceof Object))
{var ex__13123__auto__ = e20577;var statearr_20578_20601 = state_20570;(statearr_20578_20601[(5)] = ex__13123__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20570);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20577;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20602 = state_20570;
state_20570 = G__20602;
continue;
}
} else
{return ret_value__13121__auto__;
}
break;
}
});
state_machine__13120__auto__ = function(state_20570){
switch(arguments.length){
case 0:
return state_machine__13120__auto____0.call(this);
case 1:
return state_machine__13120__auto____1.call(this,state_20570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13120__auto____0;
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13120__auto____1;
return state_machine__13120__auto__;
})()
;})(switch__13119__auto__,c__13184__auto__,map__20559,map__20559__$1,opts,on_cssload))
})();var state__13186__auto__ = (function (){var statearr_20579 = f__13185__auto__.call(null);(statearr_20579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13184__auto__);
return statearr_20579;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13186__auto__);
});})(c__13184__auto__,map__20559,map__20559__$1,opts,on_cssload))
);
return c__13184__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__20603){var map__20608 = p__20603;var map__20608__$1 = ((cljs.core.seq_QMARK_.call(null,map__20608))?cljs.core.apply.call(null,cljs.core.hash_map,map__20608):map__20608);var opts = map__20608__$1;var on_compile_fail = cljs.core.get.call(null,map__20608__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__20608__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__20608__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__20608__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__20608,map__20608__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__20609 = cljs.core._EQ_;var expr__20610 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__20609.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__20610)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__20609.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__20610)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__20609.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__20610)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__20608,map__20608__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__20608,map__20608__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__20608,map__20608__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__20608,map__20608__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__20608,map__20608__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__20608,map__20608__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__20608,map__20608__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__20608,map__20608__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__20608,map__20608__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj20615 = {"detail":url};return obj20615;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__20616){var map__20618 = p__20616;var map__20618__$1 = ((cljs.core.seq_QMARK_.call(null,map__20618))?cljs.core.apply.call(null,cljs.core.hash_map,map__20618):map__20618);var class$ = cljs.core.get.call(null,map__20618__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__20618__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__20619){var map__20625 = p__20619;var map__20625__$1 = ((cljs.core.seq_QMARK_.call(null,map__20625))?cljs.core.apply.call(null,cljs.core.hash_map,map__20625):map__20625);var ed = map__20625__$1;var exception_data = cljs.core.get.call(null,map__20625__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__20625__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__20626_20630 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__20627_20631 = null;var count__20628_20632 = (0);var i__20629_20633 = (0);while(true){
if((i__20629_20633 < count__20628_20632))
{var msg_20634 = cljs.core._nth.call(null,chunk__20627_20631,i__20629_20633);console.log(msg_20634);
{
var G__20635 = seq__20626_20630;
var G__20636 = chunk__20627_20631;
var G__20637 = count__20628_20632;
var G__20638 = (i__20629_20633 + (1));
seq__20626_20630 = G__20635;
chunk__20627_20631 = G__20636;
count__20628_20632 = G__20637;
i__20629_20633 = G__20638;
continue;
}
} else
{var temp__4126__auto___20639 = cljs.core.seq.call(null,seq__20626_20630);if(temp__4126__auto___20639)
{var seq__20626_20640__$1 = temp__4126__auto___20639;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20626_20640__$1))
{var c__9863__auto___20641 = cljs.core.chunk_first.call(null,seq__20626_20640__$1);{
var G__20642 = cljs.core.chunk_rest.call(null,seq__20626_20640__$1);
var G__20643 = c__9863__auto___20641;
var G__20644 = cljs.core.count.call(null,c__9863__auto___20641);
var G__20645 = (0);
seq__20626_20630 = G__20642;
chunk__20627_20631 = G__20643;
count__20628_20632 = G__20644;
i__20629_20633 = G__20645;
continue;
}
} else
{var msg_20646 = cljs.core.first.call(null,seq__20626_20640__$1);console.log(msg_20646);
{
var G__20647 = cljs.core.next.call(null,seq__20626_20640__$1);
var G__20648 = null;
var G__20649 = (0);
var G__20650 = (0);
seq__20626_20630 = G__20647;
chunk__20627_20631 = G__20648;
count__20628_20632 = G__20649;
i__20629_20633 = G__20650;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__9093__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__20651){var map__20653 = p__20651;var map__20653__$1 = ((cljs.core.seq_QMARK_.call(null,map__20653))?cljs.core.apply.call(null,cljs.core.hash_map,map__20653):map__20653);var opts = map__20653__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__20651 = null;if (arguments.length > 0) {
  p__20651 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__20651);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__20654){
var p__20651 = cljs.core.seq(arglist__20654);
return watch_and_reload__delegate(p__20651);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map