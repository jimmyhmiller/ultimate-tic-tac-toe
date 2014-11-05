// Compiled by ClojureScript 0.0-2371
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__17093__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__17092 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__17092,(0),null);var body = cljs.core.nthnext.call(null,vec__17092,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__17093 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17093__delegate.call(this,args);};
G__17093.cljs$lang$maxFixedArity = 0;
G__17093.cljs$lang$applyTo = (function (arglist__17094){
var args = cljs.core.seq(arglist__17094);
return G__17093__delegate(args);
});
G__17093.cljs$core$IFn$_invoke$arity$variadic = G__17093__delegate;
return G__17093;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__9832__auto__ = (function iter__17099(s__17100){return (new cljs.core.LazySeq(null,(function (){var s__17100__$1 = s__17100;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17100__$1);if(temp__4126__auto__)
{var s__17100__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17100__$2))
{var c__9830__auto__ = cljs.core.chunk_first.call(null,s__17100__$2);var size__9831__auto__ = cljs.core.count.call(null,c__9830__auto__);var b__17102 = cljs.core.chunk_buffer.call(null,size__9831__auto__);if((function (){var i__17101 = (0);while(true){
if((i__17101 < size__9831__auto__))
{var args = cljs.core._nth.call(null,c__9830__auto__,i__17101);cljs.core.chunk_append.call(null,b__17102,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__17103 = (i__17101 + (1));
i__17101 = G__17103;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17102),iter__17099.call(null,cljs.core.chunk_rest.call(null,s__17100__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17102),null);
}
} else
{var args = cljs.core.first.call(null,s__17100__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__17099.call(null,cljs.core.rest.call(null,s__17100__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9832__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__9832__auto__ = (function iter__17108(s__17109){return (new cljs.core.LazySeq(null,(function (){var s__17109__$1 = s__17109;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17109__$1);if(temp__4126__auto__)
{var s__17109__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17109__$2))
{var c__9830__auto__ = cljs.core.chunk_first.call(null,s__17109__$2);var size__9831__auto__ = cljs.core.count.call(null,c__9830__auto__);var b__17111 = cljs.core.chunk_buffer.call(null,size__9831__auto__);if((function (){var i__17110 = (0);while(true){
if((i__17110 < size__9831__auto__))
{var style = cljs.core._nth.call(null,c__9830__auto__,i__17110);cljs.core.chunk_append.call(null,b__17111,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__17112 = (i__17110 + (1));
i__17110 = G__17112;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17111),iter__17108.call(null,cljs.core.chunk_rest.call(null,s__17109__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17111),null);
}
} else
{var style = cljs.core.first.call(null,s__17109__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__17108.call(null,cljs.core.rest.call(null,s__17109__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9832__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__17113){
var styles = cljs.core.seq(arglist__17113);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to17114 = (function() { 
var link_to17114__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to17114 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to17114__delegate.call(this,url,content);};
link_to17114.cljs$lang$maxFixedArity = 1;
link_to17114.cljs$lang$applyTo = (function (arglist__17115){
var url = cljs.core.first(arglist__17115);
var content = cljs.core.rest(arglist__17115);
return link_to17114__delegate(url,content);
});
link_to17114.cljs$core$IFn$_invoke$arity$variadic = link_to17114__delegate;
return link_to17114;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17114);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to17116 = (function() { 
var mail_to17116__delegate = function (e_mail,p__17117){var vec__17119 = p__17117;var content = cljs.core.nth.call(null,vec__17119,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__9093__auto__ = content;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to17116 = function (e_mail,var_args){
var p__17117 = null;if (arguments.length > 1) {
  p__17117 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to17116__delegate.call(this,e_mail,p__17117);};
mail_to17116.cljs$lang$maxFixedArity = 1;
mail_to17116.cljs$lang$applyTo = (function (arglist__17120){
var e_mail = cljs.core.first(arglist__17120);
var p__17117 = cljs.core.rest(arglist__17120);
return mail_to17116__delegate(e_mail,p__17117);
});
mail_to17116.cljs$core$IFn$_invoke$arity$variadic = mail_to17116__delegate;
return mail_to17116;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17116);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list17121 = (function unordered_list17121(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__9832__auto__ = (function iter__17126(s__17127){return (new cljs.core.LazySeq(null,(function (){var s__17127__$1 = s__17127;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17127__$1);if(temp__4126__auto__)
{var s__17127__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17127__$2))
{var c__9830__auto__ = cljs.core.chunk_first.call(null,s__17127__$2);var size__9831__auto__ = cljs.core.count.call(null,c__9830__auto__);var b__17129 = cljs.core.chunk_buffer.call(null,size__9831__auto__);if((function (){var i__17128 = (0);while(true){
if((i__17128 < size__9831__auto__))
{var x = cljs.core._nth.call(null,c__9830__auto__,i__17128);cljs.core.chunk_append.call(null,b__17129,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__17130 = (i__17128 + (1));
i__17128 = G__17130;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17129),iter__17126.call(null,cljs.core.chunk_rest.call(null,s__17127__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17129),null);
}
} else
{var x = cljs.core.first.call(null,s__17127__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__17126.call(null,cljs.core.rest.call(null,s__17127__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9832__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17121);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list17131 = (function ordered_list17131(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__9832__auto__ = (function iter__17136(s__17137){return (new cljs.core.LazySeq(null,(function (){var s__17137__$1 = s__17137;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17137__$1);if(temp__4126__auto__)
{var s__17137__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17137__$2))
{var c__9830__auto__ = cljs.core.chunk_first.call(null,s__17137__$2);var size__9831__auto__ = cljs.core.count.call(null,c__9830__auto__);var b__17139 = cljs.core.chunk_buffer.call(null,size__9831__auto__);if((function (){var i__17138 = (0);while(true){
if((i__17138 < size__9831__auto__))
{var x = cljs.core._nth.call(null,c__9830__auto__,i__17138);cljs.core.chunk_append.call(null,b__17139,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__17140 = (i__17138 + (1));
i__17138 = G__17140;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17139),iter__17136.call(null,cljs.core.chunk_rest.call(null,s__17137__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17139),null);
}
} else
{var x = cljs.core.first.call(null,s__17137__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__17136.call(null,cljs.core.rest.call(null,s__17137__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9832__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17131);
/**
* Create an image element.
*/
sablono.core.image17141 = (function() {
var image17141 = null;
var image17141__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image17141__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image17141 = function(src,alt){
switch(arguments.length){
case 1:
return image17141__1.call(this,src);
case 2:
return image17141__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image17141.cljs$core$IFn$_invoke$arity$1 = image17141__1;
image17141.cljs$core$IFn$_invoke$arity$2 = image17141__2;
return image17141;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17141);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__17142_SHARP_,p2__17143_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17142_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__17143_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__17144_SHARP_,p2__17145_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17144_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__17145_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field17146 = (function() {
var color_field17146 = null;
var color_field17146__1 = (function (name__10582__auto__){return color_field17146.call(null,name__10582__auto__,null);
});
var color_field17146__2 = (function (name__10582__auto__,value__10583__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10582__auto__,value__10583__auto__);
});
color_field17146 = function(name__10582__auto__,value__10583__auto__){
switch(arguments.length){
case 1:
return color_field17146__1.call(this,name__10582__auto__);
case 2:
return color_field17146__2.call(this,name__10582__auto__,value__10583__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field17146.cljs$core$IFn$_invoke$arity$1 = color_field17146__1;
color_field17146.cljs$core$IFn$_invoke$arity$2 = color_field17146__2;
return color_field17146;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17146);
/**
* Creates a date input field.
*/
sablono.core.date_field17147 = (function() {
var date_field17147 = null;
var date_field17147__1 = (function (name__10582__auto__){return date_field17147.call(null,name__10582__auto__,null);
});
var date_field17147__2 = (function (name__10582__auto__,value__10583__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10582__auto__,value__10583__auto__);
});
date_field17147 = function(name__10582__auto__,value__10583__auto__){
switch(arguments.length){
case 1:
return date_field17147__1.call(this,name__10582__auto__);
case 2:
return date_field17147__2.call(this,name__10582__auto__,value__10583__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field17147.cljs$core$IFn$_invoke$arity$1 = date_field17147__1;
date_field17147.cljs$core$IFn$_invoke$arity$2 = date_field17147__2;
return date_field17147;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17147);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field17148 = (function() {
var datetime_field17148 = null;
var datetime_field17148__1 = (function (name__10582__auto__){return datetime_field17148.call(null,name__10582__auto__,null);
});
var datetime_field17148__2 = (function (name__10582__auto__,value__10583__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10582__auto__,value__10583__auto__);
});
datetime_field17148 = function(name__10582__auto__,value__10583__auto__){
switch(arguments.length){
case 1:
return datetime_field17148__1.call(this,name__10582__auto__);
case 2:
return datetime_field17148__2.call(this,name__10582__auto__,value__10583__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field17148.cljs$core$IFn$_invoke$arity$1 = datetime_field17148__1;
datetime_field17148.cljs$core$IFn$_invoke$arity$2 = datetime_field17148__2;
return datetime_field17148;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17148);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field17149 = (function() {
var datetime_local_field17149 = null;
var datetime_local_field17149__1 = (function (name__10582__auto__){return datetime_local_field17149.call(null,name__10582__auto__,null);
});
var datetime_local_field17149__2 = (function (name__10582__auto__,value__10583__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10582__auto__,value__10583__auto__);
});
datetime_local_field17149 = function(name__10582__auto__,value__10583__auto__){
switch(arguments.length){
case 1:
return datetime_local_field17149__1.call(this,name__10582__auto__);
case 2:
return datetime_local_field17149__2.call(this,name__10582__auto__,value__10583__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field17149.cljs$core$IFn$_invoke$arity$1 = datetime_local_field17149__1;
datetime_local_field17149.cljs$core$IFn$_invoke$arity$2 = datetime_local_field17149__2;
return datetime_local_field17149;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17149);
/**
* Creates a email input field.
*/
sablono.core.email_field17150 = (function() {
var email_field17150 = null;
var email_field17150__1 = (function (name__10582__auto__){return email_field17150.call(null,name__10582__auto__,null);
});
var email_field17150__2 = (function (name__10582__auto__,value__10583__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10582__auto__,value__10583__auto__);
});
email_field17150 = function(name__10582__auto__,value__10583__auto__){
switch(arguments.length){
case 1:
return email_field17150__1.call(this,name__10582__auto__);
case 2:
return email_field17150__2.call(this,name__10582__auto__,value__10583__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field17150.cljs$core$IFn$_invoke$arity$1 = email_field17150__1;
email_field17150.cljs$core$IFn$_invoke$arity$2 = email_field17150__2;
return email_field17150;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17150);
/**
* Creates a file input field.
*/
sablono.core.file_field17151 = (function() {
var file_field17151 = null;
var file_field17151__1 = (function (name__10582__auto__){return file_field17151.call(null,name__10582__auto__,null);
});
var file_field17151__2 = (function (name__10582__auto__,value__10583__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10582__auto__,value__10583__auto__);
});
file_field17151 = function(name__10582__auto__,value__10583__auto__){
switch(arguments.length){
case 1:
return file_field17151__1.call(this,name__10582__auto__);
case 2:
return file_field17151__2.call(this,name__10582__auto__,value__10583__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field17151.cljs$core$IFn$_invoke$arity$1 = file_field17151__1;
file_field17151.cljs$core$IFn$_invoke$arity$2 = file_field17151__2;
return file_field17151;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17151);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field17152 = (function() {
var hidden_field17152 = null;
var hidden_field17152__1 = (function (name__10582__auto__){return hidden_field17152.call(null,name__10582__auto__,null);
});
var hidden_field17152__2 = (function (name__10582__auto__,value__10583__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10582__auto__,value__10583__auto__);
});
hidden_field17152 = function(name__10582__auto__,value__10583__auto__){
switch(arguments.length){
case 1:
return hidden_field17152__1.call(this,name__10582__auto__);
case 2:
return hidden_field17152__2.call(this,name__10582__auto__,value__10583__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field17152.cljs$core$IFn$_invoke$arity$1 = hidden_field17152__1;
hidden_field17152.cljs$core$IFn$_invoke$arity$2 = hidden_field17152__2;
return hidden_field17152;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17152);
/**
* Creates a month input field.
*/
sablono.core.month_field17153 = (function() {
var month_field17153 = null;
var month_field17153__1 = (function (name__10582__auto__){return month_field17153.call(null,name__10582__auto__,null);
});
var month_field17153__2 = (function (name__10582__auto__,value__10583__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10582__auto__,value__10583__auto__);
});
month_field17153 = function(name__10582__auto__,value__10583__auto__){
switch(arguments.length){
case 1:
return month_field17153__1.call(this,name__10582__auto__);
case 2:
return month_field17153__2.call(this,name__10582__auto__,value__10583__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field17153.cljs$core$IFn$_invoke$arity$1 = month_field17153__1;
month_field17153.cljs$core$IFn$_invoke$arity$2 = month_field17153__2;
return month_field17153;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17153);
/**
* Creates a number input field.
*/
sablono.core.number_field17154 = (function() {
var number_field17154 = null;
var number_field17154__1 = (function (name__10582__auto__){return number_field17154.call(null,name__10582__auto__,null);
});
var number_field17154__2 = (function (name__10582__auto__,value__10583__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10582__auto__,value__10583__auto__);
});
number_field17154 = function(name__10582__auto__,value__10583__auto__){
switch(arguments.length){
case 1:
return number_field17154__1.call(this,name__10582__auto__);
case 2:
return number_field17154__2.call(this,name__10582__auto__,value__10583__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field17154.cljs$core$IFn$_invoke$arity$1 = number_field17154__1;
number_field17154.cljs$core$IFn$_invoke$arity$2 = number_field17154__2;
return number_field17154;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17154);
/**
* Creates a password input field.
*/
sablono.core.password_field17155 = (function() {
var password_field17155 = null;
var password_field17155__1 = (function (name__10582__auto__){return password_field17155.call(null,name__10582__auto__,null);
});
var password_field17155__2 = (function (name__10582__auto__,value__10583__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10582__auto__,value__10583__auto__);
});
password_field17155 = function(name__10582__auto__,value__10583__auto__){
switch(arguments.length){
case 1:
return password_field17155__1.call(this,name__10582__auto__);
case 2:
return password_field17155__2.call(this,name__10582__auto__,value__10583__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field17155.cljs$core$IFn$_invoke$arity$1 = password_field17155__1;
password_field17155.cljs$core$IFn$_invoke$arity$2 = password_field17155__2;
return password_field17155;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17155);
/**
* Creates a range input field.
*/
sablono.core.range_field17156 = (function() {
var range_field17156 = null;
var range_field17156__1 = (function (name__10582__auto__){return range_field17156.call(null,name__10582__auto__,null);
});
var range_field17156__2 = (function (name__10582__auto__,value__10583__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10582__auto__,value__10583__auto__);
});
range_field17156 = function(name__10582__auto__,value__10583__auto__){
switch(arguments.length){
case 1:
return range_field17156__1.call(this,name__10582__auto__);
case 2:
return range_field17156__2.call(this,name__10582__auto__,value__10583__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field17156.cljs$core$IFn$_invoke$arity$1 = range_field17156__1;
range_field17156.cljs$core$IFn$_invoke$arity$2 = range_field17156__2;
return range_field17156;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17156);
/**
* Creates a search input field.
*/
sablono.core.search_field17157 = (function() {
var search_field17157 = null;
var search_field17157__1 = (function (name__10582__auto__){return search_field17157.call(null,name__10582__auto__,null);
});
var search_field17157__2 = (function (name__10582__auto__,value__10583__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10582__auto__,value__10583__auto__);
});
search_field17157 = function(name__10582__auto__,value__10583__auto__){
switch(arguments.length){
case 1:
return search_field17157__1.call(this,name__10582__auto__);
case 2:
return search_field17157__2.call(this,name__10582__auto__,value__10583__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field17157.cljs$core$IFn$_invoke$arity$1 = search_field17157__1;
search_field17157.cljs$core$IFn$_invoke$arity$2 = search_field17157__2;
return search_field17157;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17157);
/**
* Creates a tel input field.
*/
sablono.core.tel_field17158 = (function() {
var tel_field17158 = null;
var tel_field17158__1 = (function (name__10582__auto__){return tel_field17158.call(null,name__10582__auto__,null);
});
var tel_field17158__2 = (function (name__10582__auto__,value__10583__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10582__auto__,value__10583__auto__);
});
tel_field17158 = function(name__10582__auto__,value__10583__auto__){
switch(arguments.length){
case 1:
return tel_field17158__1.call(this,name__10582__auto__);
case 2:
return tel_field17158__2.call(this,name__10582__auto__,value__10583__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field17158.cljs$core$IFn$_invoke$arity$1 = tel_field17158__1;
tel_field17158.cljs$core$IFn$_invoke$arity$2 = tel_field17158__2;
return tel_field17158;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17158);
/**
* Creates a text input field.
*/
sablono.core.text_field17159 = (function() {
var text_field17159 = null;
var text_field17159__1 = (function (name__10582__auto__){return text_field17159.call(null,name__10582__auto__,null);
});
var text_field17159__2 = (function (name__10582__auto__,value__10583__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10582__auto__,value__10583__auto__);
});
text_field17159 = function(name__10582__auto__,value__10583__auto__){
switch(arguments.length){
case 1:
return text_field17159__1.call(this,name__10582__auto__);
case 2:
return text_field17159__2.call(this,name__10582__auto__,value__10583__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field17159.cljs$core$IFn$_invoke$arity$1 = text_field17159__1;
text_field17159.cljs$core$IFn$_invoke$arity$2 = text_field17159__2;
return text_field17159;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17159);
/**
* Creates a time input field.
*/
sablono.core.time_field17160 = (function() {
var time_field17160 = null;
var time_field17160__1 = (function (name__10582__auto__){return time_field17160.call(null,name__10582__auto__,null);
});
var time_field17160__2 = (function (name__10582__auto__,value__10583__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10582__auto__,value__10583__auto__);
});
time_field17160 = function(name__10582__auto__,value__10583__auto__){
switch(arguments.length){
case 1:
return time_field17160__1.call(this,name__10582__auto__);
case 2:
return time_field17160__2.call(this,name__10582__auto__,value__10583__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field17160.cljs$core$IFn$_invoke$arity$1 = time_field17160__1;
time_field17160.cljs$core$IFn$_invoke$arity$2 = time_field17160__2;
return time_field17160;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17160);
/**
* Creates a url input field.
*/
sablono.core.url_field17161 = (function() {
var url_field17161 = null;
var url_field17161__1 = (function (name__10582__auto__){return url_field17161.call(null,name__10582__auto__,null);
});
var url_field17161__2 = (function (name__10582__auto__,value__10583__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10582__auto__,value__10583__auto__);
});
url_field17161 = function(name__10582__auto__,value__10583__auto__){
switch(arguments.length){
case 1:
return url_field17161__1.call(this,name__10582__auto__);
case 2:
return url_field17161__2.call(this,name__10582__auto__,value__10583__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field17161.cljs$core$IFn$_invoke$arity$1 = url_field17161__1;
url_field17161.cljs$core$IFn$_invoke$arity$2 = url_field17161__2;
return url_field17161;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17161);
/**
* Creates a week input field.
*/
sablono.core.week_field17162 = (function() {
var week_field17162 = null;
var week_field17162__1 = (function (name__10582__auto__){return week_field17162.call(null,name__10582__auto__,null);
});
var week_field17162__2 = (function (name__10582__auto__,value__10583__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10582__auto__,value__10583__auto__);
});
week_field17162 = function(name__10582__auto__,value__10583__auto__){
switch(arguments.length){
case 1:
return week_field17162__1.call(this,name__10582__auto__);
case 2:
return week_field17162__2.call(this,name__10582__auto__,value__10583__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field17162.cljs$core$IFn$_invoke$arity$1 = week_field17162__1;
week_field17162.cljs$core$IFn$_invoke$arity$2 = week_field17162__2;
return week_field17162;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17162);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box17163 = (function() {
var check_box17163 = null;
var check_box17163__1 = (function (name){return check_box17163.call(null,name,null);
});
var check_box17163__2 = (function (name,checked_QMARK_){return check_box17163.call(null,name,checked_QMARK_,"true");
});
var check_box17163__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box17163 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box17163__1.call(this,name);
case 2:
return check_box17163__2.call(this,name,checked_QMARK_);
case 3:
return check_box17163__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box17163.cljs$core$IFn$_invoke$arity$1 = check_box17163__1;
check_box17163.cljs$core$IFn$_invoke$arity$2 = check_box17163__2;
check_box17163.cljs$core$IFn$_invoke$arity$3 = check_box17163__3;
return check_box17163;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17163);
/**
* Creates a radio button.
*/
sablono.core.radio_button17164 = (function() {
var radio_button17164 = null;
var radio_button17164__1 = (function (group){return radio_button17164.call(null,group,null);
});
var radio_button17164__2 = (function (group,checked_QMARK_){return radio_button17164.call(null,group,checked_QMARK_,"true");
});
var radio_button17164__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button17164 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button17164__1.call(this,group);
case 2:
return radio_button17164__2.call(this,group,checked_QMARK_);
case 3:
return radio_button17164__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button17164.cljs$core$IFn$_invoke$arity$1 = radio_button17164__1;
radio_button17164.cljs$core$IFn$_invoke$arity$2 = radio_button17164__2;
radio_button17164.cljs$core$IFn$_invoke$arity$3 = radio_button17164__3;
return radio_button17164;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17164);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options17165 = (function() {
var select_options17165 = null;
var select_options17165__1 = (function (coll){return select_options17165.call(null,coll,null);
});
var select_options17165__2 = (function (coll,selected){var iter__9832__auto__ = (function iter__17174(s__17175){return (new cljs.core.LazySeq(null,(function (){var s__17175__$1 = s__17175;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17175__$1);if(temp__4126__auto__)
{var s__17175__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17175__$2))
{var c__9830__auto__ = cljs.core.chunk_first.call(null,s__17175__$2);var size__9831__auto__ = cljs.core.count.call(null,c__9830__auto__);var b__17177 = cljs.core.chunk_buffer.call(null,size__9831__auto__);if((function (){var i__17176 = (0);while(true){
if((i__17176 < size__9831__auto__))
{var x = cljs.core._nth.call(null,c__9830__auto__,i__17176);cljs.core.chunk_append.call(null,b__17177,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17180 = x;var text = cljs.core.nth.call(null,vec__17180,(0),null);var val = cljs.core.nth.call(null,vec__17180,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__17180,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options17165.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__17182 = (i__17176 + (1));
i__17176 = G__17182;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17177),iter__17174.call(null,cljs.core.chunk_rest.call(null,s__17175__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17177),null);
}
} else
{var x = cljs.core.first.call(null,s__17175__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17181 = x;var text = cljs.core.nth.call(null,vec__17181,(0),null);var val = cljs.core.nth.call(null,vec__17181,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__17181,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options17165.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__17174.call(null,cljs.core.rest.call(null,s__17175__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9832__auto__.call(null,coll);
});
select_options17165 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options17165__1.call(this,coll);
case 2:
return select_options17165__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options17165.cljs$core$IFn$_invoke$arity$1 = select_options17165__1;
select_options17165.cljs$core$IFn$_invoke$arity$2 = select_options17165__2;
return select_options17165;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17165);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down17183 = (function() {
var drop_down17183 = null;
var drop_down17183__2 = (function (name,options){return drop_down17183.call(null,name,options,null);
});
var drop_down17183__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down17183 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down17183__2.call(this,name,options);
case 3:
return drop_down17183__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down17183.cljs$core$IFn$_invoke$arity$2 = drop_down17183__2;
drop_down17183.cljs$core$IFn$_invoke$arity$3 = drop_down17183__3;
return drop_down17183;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17183);
/**
* Creates a text area element.
*/
sablono.core.text_area17184 = (function() {
var text_area17184 = null;
var text_area17184__1 = (function (name){return text_area17184.call(null,name,null);
});
var text_area17184__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area17184 = function(name,value){
switch(arguments.length){
case 1:
return text_area17184__1.call(this,name);
case 2:
return text_area17184__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area17184.cljs$core$IFn$_invoke$arity$1 = text_area17184__1;
text_area17184.cljs$core$IFn$_invoke$arity$2 = text_area17184__2;
return text_area17184;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17184);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label17185 = (function label17185(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17185);
/**
* Creates a submit button.
*/
sablono.core.submit_button17186 = (function submit_button17186(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17186);
/**
* Creates a form reset button.
*/
sablono.core.reset_button17187 = (function reset_button17187(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17187);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to17188 = (function() { 
var form_to17188__delegate = function (p__17189,body){var vec__17191 = p__17189;var method = cljs.core.nth.call(null,vec__17191,(0),null);var action = cljs.core.nth.call(null,vec__17191,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to17188 = function (p__17189,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to17188__delegate.call(this,p__17189,body);};
form_to17188.cljs$lang$maxFixedArity = 1;
form_to17188.cljs$lang$applyTo = (function (arglist__17192){
var p__17189 = cljs.core.first(arglist__17192);
var body = cljs.core.rest(arglist__17192);
return form_to17188__delegate(p__17189,body);
});
form_to17188.cljs$core$IFn$_invoke$arity$variadic = form_to17188__delegate;
return form_to17188;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17188);

//# sourceMappingURL=core.js.map