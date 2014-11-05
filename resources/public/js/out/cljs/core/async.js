// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t17659 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17659 = (function (f,fn_handler,meta17660){
this.f = f;
this.fn_handler = fn_handler;
this.meta17660 = meta17660;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17659.cljs$lang$type = true;
cljs.core.async.t17659.cljs$lang$ctorStr = "cljs.core.async/t17659";
cljs.core.async.t17659.cljs$lang$ctorPrWriter = (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t17659");
});
cljs.core.async.t17659.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17659.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t17659.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t17659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17661){var self__ = this;
var _17661__$1 = this;return self__.meta17660;
});
cljs.core.async.t17659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17661,meta17660__$1){var self__ = this;
var _17661__$1 = this;return (new cljs.core.async.t17659(self__.f,self__.fn_handler,meta17660__$1));
});
cljs.core.async.__GT_t17659 = (function __GT_t17659(f__$1,fn_handler__$1,meta17660){return (new cljs.core.async.t17659(f__$1,fn_handler__$1,meta17660));
});
}
return (new cljs.core.async.t17659(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__17663 = buff;if(G__17663)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17663.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__17663.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17663);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17663);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_17664 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_17664);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_17664,ret){
return (function (){return fn1.call(null,val_17664);
});})(val_17664,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__9963__auto___17665 = n;var x_17666 = (0);while(true){
if((x_17666 < n__9963__auto___17665))
{(a[x_17666] = (0));
{
var G__17667 = (x_17666 + (1));
x_17666 = G__17667;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__17668 = (i + (1));
i = G__17668;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t17672 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17672 = (function (flag,alt_flag,meta17673){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17673 = meta17673;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17672.cljs$lang$type = true;
cljs.core.async.t17672.cljs$lang$ctorStr = "cljs.core.async/t17672";
cljs.core.async.t17672.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t17672");
});})(flag))
;
cljs.core.async.t17672.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17672.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t17672.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t17672.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17674){var self__ = this;
var _17674__$1 = this;return self__.meta17673;
});})(flag))
;
cljs.core.async.t17672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17674,meta17673__$1){var self__ = this;
var _17674__$1 = this;return (new cljs.core.async.t17672(self__.flag,self__.alt_flag,meta17673__$1));
});})(flag))
;
cljs.core.async.__GT_t17672 = ((function (flag){
return (function __GT_t17672(flag__$1,alt_flag__$1,meta17673){return (new cljs.core.async.t17672(flag__$1,alt_flag__$1,meta17673));
});})(flag))
;
}
return (new cljs.core.async.t17672(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t17678 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17678 = (function (cb,flag,alt_handler,meta17679){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17679 = meta17679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17678.cljs$lang$type = true;
cljs.core.async.t17678.cljs$lang$ctorStr = "cljs.core.async/t17678";
cljs.core.async.t17678.cljs$lang$ctorPrWriter = (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t17678");
});
cljs.core.async.t17678.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17678.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t17678.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t17678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17680){var self__ = this;
var _17680__$1 = this;return self__.meta17679;
});
cljs.core.async.t17678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17680,meta17679__$1){var self__ = this;
var _17680__$1 = this;return (new cljs.core.async.t17678(self__.cb,self__.flag,self__.alt_handler,meta17679__$1));
});
cljs.core.async.__GT_t17678 = (function __GT_t17678(cb__$1,flag__$1,alt_handler__$1,meta17679){return (new cljs.core.async.t17678(cb__$1,flag__$1,alt_handler__$1,meta17679));
});
}
return (new cljs.core.async.t17678(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17681_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17681_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17682_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17682_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__9093__auto__ = wport;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__17683 = (i + (1));
i = G__17683;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__9093__auto__ = ret;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__9081__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__9081__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__9081__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__17684){var map__17686 = p__17684;var map__17686__$1 = ((cljs.core.seq_QMARK_.call(null,map__17686))?cljs.core.apply.call(null,cljs.core.hash_map,map__17686):map__17686);var opts = map__17686__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__17684 = null;if (arguments.length > 1) {
  p__17684 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__17684);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17687){
var ports = cljs.core.first(arglist__17687);
var p__17684 = cljs.core.rest(arglist__17687);
return alts_BANG___delegate(ports,p__17684);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t17695 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17695 = (function (ch,f,map_LT_,meta17696){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17696 = meta17696;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17695.cljs$lang$type = true;
cljs.core.async.t17695.cljs$lang$ctorStr = "cljs.core.async/t17695";
cljs.core.async.t17695.cljs$lang$ctorPrWriter = (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t17695");
});
cljs.core.async.t17695.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17695.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t17695.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17695.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t17698 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17698 = (function (fn1,_,meta17696,ch,f,map_LT_,meta17699){
this.fn1 = fn1;
this._ = _;
this.meta17696 = meta17696;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17699 = meta17699;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17698.cljs$lang$type = true;
cljs.core.async.t17698.cljs$lang$ctorStr = "cljs.core.async/t17698";
cljs.core.async.t17698.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t17698");
});})(___$1))
;
cljs.core.async.t17698.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17698.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t17698.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t17698.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__17688_SHARP_){return f1.call(null,(((p1__17688_SHARP_ == null))?null:self__.f.call(null,p1__17688_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t17698.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17700){var self__ = this;
var _17700__$1 = this;return self__.meta17699;
});})(___$1))
;
cljs.core.async.t17698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17700,meta17699__$1){var self__ = this;
var _17700__$1 = this;return (new cljs.core.async.t17698(self__.fn1,self__._,self__.meta17696,self__.ch,self__.f,self__.map_LT_,meta17699__$1));
});})(___$1))
;
cljs.core.async.__GT_t17698 = ((function (___$1){
return (function __GT_t17698(fn1__$1,___$2,meta17696__$1,ch__$2,f__$2,map_LT___$2,meta17699){return (new cljs.core.async.t17698(fn1__$1,___$2,meta17696__$1,ch__$2,f__$2,map_LT___$2,meta17699));
});})(___$1))
;
}
return (new cljs.core.async.t17698(fn1,___$1,self__.meta17696,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__9081__auto__ = ret;if(cljs.core.truth_(and__9081__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__9081__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t17695.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17695.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17695.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t17695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17697){var self__ = this;
var _17697__$1 = this;return self__.meta17696;
});
cljs.core.async.t17695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17697,meta17696__$1){var self__ = this;
var _17697__$1 = this;return (new cljs.core.async.t17695(self__.ch,self__.f,self__.map_LT_,meta17696__$1));
});
cljs.core.async.__GT_t17695 = (function __GT_t17695(ch__$1,f__$1,map_LT___$1,meta17696){return (new cljs.core.async.t17695(ch__$1,f__$1,map_LT___$1,meta17696));
});
}
return (new cljs.core.async.t17695(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t17704 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17704 = (function (ch,f,map_GT_,meta17705){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta17705 = meta17705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17704.cljs$lang$type = true;
cljs.core.async.t17704.cljs$lang$ctorStr = "cljs.core.async/t17704";
cljs.core.async.t17704.cljs$lang$ctorPrWriter = (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t17704");
});
cljs.core.async.t17704.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17704.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t17704.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17704.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t17704.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17704.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17706){var self__ = this;
var _17706__$1 = this;return self__.meta17705;
});
cljs.core.async.t17704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17706,meta17705__$1){var self__ = this;
var _17706__$1 = this;return (new cljs.core.async.t17704(self__.ch,self__.f,self__.map_GT_,meta17705__$1));
});
cljs.core.async.__GT_t17704 = (function __GT_t17704(ch__$1,f__$1,map_GT___$1,meta17705){return (new cljs.core.async.t17704(ch__$1,f__$1,map_GT___$1,meta17705));
});
}
return (new cljs.core.async.t17704(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t17710 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17710 = (function (ch,p,filter_GT_,meta17711){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta17711 = meta17711;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17710.cljs$lang$type = true;
cljs.core.async.t17710.cljs$lang$ctorStr = "cljs.core.async/t17710";
cljs.core.async.t17710.cljs$lang$ctorPrWriter = (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t17710");
});
cljs.core.async.t17710.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17710.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t17710.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17710.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t17710.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17710.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17710.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t17710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17712){var self__ = this;
var _17712__$1 = this;return self__.meta17711;
});
cljs.core.async.t17710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17712,meta17711__$1){var self__ = this;
var _17712__$1 = this;return (new cljs.core.async.t17710(self__.ch,self__.p,self__.filter_GT_,meta17711__$1));
});
cljs.core.async.__GT_t17710 = (function __GT_t17710(ch__$1,p__$1,filter_GT___$1,meta17711){return (new cljs.core.async.t17710(ch__$1,p__$1,filter_GT___$1,meta17711));
});
}
return (new cljs.core.async.t17710(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13184__auto___17795 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13184__auto___17795,out){
return (function (){var f__13185__auto__ = (function (){var switch__13119__auto__ = ((function (c__13184__auto___17795,out){
return (function (state_17774){var state_val_17775 = (state_17774[(1)]);if((state_val_17775 === (7)))
{var inst_17770 = (state_17774[(2)]);var state_17774__$1 = state_17774;var statearr_17776_17796 = state_17774__$1;(statearr_17776_17796[(2)] = inst_17770);
(statearr_17776_17796[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17775 === (1)))
{var state_17774__$1 = state_17774;var statearr_17777_17797 = state_17774__$1;(statearr_17777_17797[(2)] = null);
(statearr_17777_17797[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17775 === (4)))
{var inst_17756 = (state_17774[(7)]);var inst_17756__$1 = (state_17774[(2)]);var inst_17757 = (inst_17756__$1 == null);var state_17774__$1 = (function (){var statearr_17778 = state_17774;(statearr_17778[(7)] = inst_17756__$1);
return statearr_17778;
})();if(cljs.core.truth_(inst_17757))
{var statearr_17779_17798 = state_17774__$1;(statearr_17779_17798[(1)] = (5));
} else
{var statearr_17780_17799 = state_17774__$1;(statearr_17780_17799[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17775 === (6)))
{var inst_17756 = (state_17774[(7)]);var inst_17761 = p.call(null,inst_17756);var state_17774__$1 = state_17774;if(cljs.core.truth_(inst_17761))
{var statearr_17781_17800 = state_17774__$1;(statearr_17781_17800[(1)] = (8));
} else
{var statearr_17782_17801 = state_17774__$1;(statearr_17782_17801[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17775 === (3)))
{var inst_17772 = (state_17774[(2)]);var state_17774__$1 = state_17774;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17774__$1,inst_17772);
} else
{if((state_val_17775 === (2)))
{var state_17774__$1 = state_17774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17774__$1,(4),ch);
} else
{if((state_val_17775 === (11)))
{var inst_17764 = (state_17774[(2)]);var state_17774__$1 = state_17774;var statearr_17783_17802 = state_17774__$1;(statearr_17783_17802[(2)] = inst_17764);
(statearr_17783_17802[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17775 === (9)))
{var state_17774__$1 = state_17774;var statearr_17784_17803 = state_17774__$1;(statearr_17784_17803[(2)] = null);
(statearr_17784_17803[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17775 === (5)))
{var inst_17759 = cljs.core.async.close_BANG_.call(null,out);var state_17774__$1 = state_17774;var statearr_17785_17804 = state_17774__$1;(statearr_17785_17804[(2)] = inst_17759);
(statearr_17785_17804[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17775 === (10)))
{var inst_17767 = (state_17774[(2)]);var state_17774__$1 = (function (){var statearr_17786 = state_17774;(statearr_17786[(8)] = inst_17767);
return statearr_17786;
})();var statearr_17787_17805 = state_17774__$1;(statearr_17787_17805[(2)] = null);
(statearr_17787_17805[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17775 === (8)))
{var inst_17756 = (state_17774[(7)]);var state_17774__$1 = state_17774;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17774__$1,(11),out,inst_17756);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13184__auto___17795,out))
;return ((function (switch__13119__auto__,c__13184__auto___17795,out){
return (function() {
var state_machine__13120__auto__ = null;
var state_machine__13120__auto____0 = (function (){var statearr_17791 = [null,null,null,null,null,null,null,null,null];(statearr_17791[(0)] = state_machine__13120__auto__);
(statearr_17791[(1)] = (1));
return statearr_17791;
});
var state_machine__13120__auto____1 = (function (state_17774){while(true){
var ret_value__13121__auto__ = (function (){try{while(true){
var result__13122__auto__ = switch__13119__auto__.call(null,state_17774);if(cljs.core.keyword_identical_QMARK_.call(null,result__13122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13122__auto__;
}
break;
}
}catch (e17792){if((e17792 instanceof Object))
{var ex__13123__auto__ = e17792;var statearr_17793_17806 = state_17774;(statearr_17793_17806[(5)] = ex__13123__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17774);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17792;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17807 = state_17774;
state_17774 = G__17807;
continue;
}
} else
{return ret_value__13121__auto__;
}
break;
}
});
state_machine__13120__auto__ = function(state_17774){
switch(arguments.length){
case 0:
return state_machine__13120__auto____0.call(this);
case 1:
return state_machine__13120__auto____1.call(this,state_17774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13120__auto____0;
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13120__auto____1;
return state_machine__13120__auto__;
})()
;})(switch__13119__auto__,c__13184__auto___17795,out))
})();var state__13186__auto__ = (function (){var statearr_17794 = f__13185__auto__.call(null);(statearr_17794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13184__auto___17795);
return statearr_17794;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13186__auto__);
});})(c__13184__auto___17795,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13184__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13184__auto__){
return (function (){var f__13185__auto__ = (function (){var switch__13119__auto__ = ((function (c__13184__auto__){
return (function (state_17973){var state_val_17974 = (state_17973[(1)]);if((state_val_17974 === (7)))
{var inst_17969 = (state_17973[(2)]);var state_17973__$1 = state_17973;var statearr_17975_18016 = state_17973__$1;(statearr_17975_18016[(2)] = inst_17969);
(statearr_17975_18016[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17974 === (20)))
{var inst_17939 = (state_17973[(7)]);var inst_17950 = (state_17973[(2)]);var inst_17951 = cljs.core.next.call(null,inst_17939);var inst_17925 = inst_17951;var inst_17926 = null;var inst_17927 = (0);var inst_17928 = (0);var state_17973__$1 = (function (){var statearr_17976 = state_17973;(statearr_17976[(8)] = inst_17950);
(statearr_17976[(9)] = inst_17925);
(statearr_17976[(10)] = inst_17928);
(statearr_17976[(11)] = inst_17927);
(statearr_17976[(12)] = inst_17926);
return statearr_17976;
})();var statearr_17977_18017 = state_17973__$1;(statearr_17977_18017[(2)] = null);
(statearr_17977_18017[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17974 === (1)))
{var state_17973__$1 = state_17973;var statearr_17978_18018 = state_17973__$1;(statearr_17978_18018[(2)] = null);
(statearr_17978_18018[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17974 === (4)))
{var inst_17914 = (state_17973[(13)]);var inst_17914__$1 = (state_17973[(2)]);var inst_17915 = (inst_17914__$1 == null);var state_17973__$1 = (function (){var statearr_17979 = state_17973;(statearr_17979[(13)] = inst_17914__$1);
return statearr_17979;
})();if(cljs.core.truth_(inst_17915))
{var statearr_17980_18019 = state_17973__$1;(statearr_17980_18019[(1)] = (5));
} else
{var statearr_17981_18020 = state_17973__$1;(statearr_17981_18020[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17974 === (15)))
{var state_17973__$1 = state_17973;var statearr_17985_18021 = state_17973__$1;(statearr_17985_18021[(2)] = null);
(statearr_17985_18021[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17974 === (21)))
{var state_17973__$1 = state_17973;var statearr_17986_18022 = state_17973__$1;(statearr_17986_18022[(2)] = null);
(statearr_17986_18022[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17974 === (13)))
{var inst_17925 = (state_17973[(9)]);var inst_17928 = (state_17973[(10)]);var inst_17927 = (state_17973[(11)]);var inst_17926 = (state_17973[(12)]);var inst_17935 = (state_17973[(2)]);var inst_17936 = (inst_17928 + (1));var tmp17982 = inst_17925;var tmp17983 = inst_17927;var tmp17984 = inst_17926;var inst_17925__$1 = tmp17982;var inst_17926__$1 = tmp17984;var inst_17927__$1 = tmp17983;var inst_17928__$1 = inst_17936;var state_17973__$1 = (function (){var statearr_17987 = state_17973;(statearr_17987[(9)] = inst_17925__$1);
(statearr_17987[(10)] = inst_17928__$1);
(statearr_17987[(11)] = inst_17927__$1);
(statearr_17987[(14)] = inst_17935);
(statearr_17987[(12)] = inst_17926__$1);
return statearr_17987;
})();var statearr_17988_18023 = state_17973__$1;(statearr_17988_18023[(2)] = null);
(statearr_17988_18023[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17974 === (22)))
{var state_17973__$1 = state_17973;var statearr_17989_18024 = state_17973__$1;(statearr_17989_18024[(2)] = null);
(statearr_17989_18024[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17974 === (6)))
{var inst_17914 = (state_17973[(13)]);var inst_17923 = f.call(null,inst_17914);var inst_17924 = cljs.core.seq.call(null,inst_17923);var inst_17925 = inst_17924;var inst_17926 = null;var inst_17927 = (0);var inst_17928 = (0);var state_17973__$1 = (function (){var statearr_17990 = state_17973;(statearr_17990[(9)] = inst_17925);
(statearr_17990[(10)] = inst_17928);
(statearr_17990[(11)] = inst_17927);
(statearr_17990[(12)] = inst_17926);
return statearr_17990;
})();var statearr_17991_18025 = state_17973__$1;(statearr_17991_18025[(2)] = null);
(statearr_17991_18025[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17974 === (17)))
{var inst_17939 = (state_17973[(7)]);var inst_17943 = cljs.core.chunk_first.call(null,inst_17939);var inst_17944 = cljs.core.chunk_rest.call(null,inst_17939);var inst_17945 = cljs.core.count.call(null,inst_17943);var inst_17925 = inst_17944;var inst_17926 = inst_17943;var inst_17927 = inst_17945;var inst_17928 = (0);var state_17973__$1 = (function (){var statearr_17992 = state_17973;(statearr_17992[(9)] = inst_17925);
(statearr_17992[(10)] = inst_17928);
(statearr_17992[(11)] = inst_17927);
(statearr_17992[(12)] = inst_17926);
return statearr_17992;
})();var statearr_17993_18026 = state_17973__$1;(statearr_17993_18026[(2)] = null);
(statearr_17993_18026[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17974 === (3)))
{var inst_17971 = (state_17973[(2)]);var state_17973__$1 = state_17973;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17973__$1,inst_17971);
} else
{if((state_val_17974 === (12)))
{var inst_17959 = (state_17973[(2)]);var state_17973__$1 = state_17973;var statearr_17994_18027 = state_17973__$1;(statearr_17994_18027[(2)] = inst_17959);
(statearr_17994_18027[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17974 === (2)))
{var state_17973__$1 = state_17973;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17973__$1,(4),in$);
} else
{if((state_val_17974 === (23)))
{var inst_17967 = (state_17973[(2)]);var state_17973__$1 = state_17973;var statearr_17995_18028 = state_17973__$1;(statearr_17995_18028[(2)] = inst_17967);
(statearr_17995_18028[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17974 === (19)))
{var inst_17954 = (state_17973[(2)]);var state_17973__$1 = state_17973;var statearr_17996_18029 = state_17973__$1;(statearr_17996_18029[(2)] = inst_17954);
(statearr_17996_18029[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17974 === (11)))
{var inst_17925 = (state_17973[(9)]);var inst_17939 = (state_17973[(7)]);var inst_17939__$1 = cljs.core.seq.call(null,inst_17925);var state_17973__$1 = (function (){var statearr_17997 = state_17973;(statearr_17997[(7)] = inst_17939__$1);
return statearr_17997;
})();if(inst_17939__$1)
{var statearr_17998_18030 = state_17973__$1;(statearr_17998_18030[(1)] = (14));
} else
{var statearr_17999_18031 = state_17973__$1;(statearr_17999_18031[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17974 === (9)))
{var inst_17961 = (state_17973[(2)]);var inst_17962 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_17973__$1 = (function (){var statearr_18000 = state_17973;(statearr_18000[(15)] = inst_17961);
return statearr_18000;
})();if(cljs.core.truth_(inst_17962))
{var statearr_18001_18032 = state_17973__$1;(statearr_18001_18032[(1)] = (21));
} else
{var statearr_18002_18033 = state_17973__$1;(statearr_18002_18033[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17974 === (5)))
{var inst_17917 = cljs.core.async.close_BANG_.call(null,out);var state_17973__$1 = state_17973;var statearr_18003_18034 = state_17973__$1;(statearr_18003_18034[(2)] = inst_17917);
(statearr_18003_18034[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17974 === (14)))
{var inst_17939 = (state_17973[(7)]);var inst_17941 = cljs.core.chunked_seq_QMARK_.call(null,inst_17939);var state_17973__$1 = state_17973;if(inst_17941)
{var statearr_18004_18035 = state_17973__$1;(statearr_18004_18035[(1)] = (17));
} else
{var statearr_18005_18036 = state_17973__$1;(statearr_18005_18036[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17974 === (16)))
{var inst_17957 = (state_17973[(2)]);var state_17973__$1 = state_17973;var statearr_18006_18037 = state_17973__$1;(statearr_18006_18037[(2)] = inst_17957);
(statearr_18006_18037[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17974 === (10)))
{var inst_17928 = (state_17973[(10)]);var inst_17926 = (state_17973[(12)]);var inst_17933 = cljs.core._nth.call(null,inst_17926,inst_17928);var state_17973__$1 = state_17973;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17973__$1,(13),out,inst_17933);
} else
{if((state_val_17974 === (18)))
{var inst_17939 = (state_17973[(7)]);var inst_17948 = cljs.core.first.call(null,inst_17939);var state_17973__$1 = state_17973;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17973__$1,(20),out,inst_17948);
} else
{if((state_val_17974 === (8)))
{var inst_17928 = (state_17973[(10)]);var inst_17927 = (state_17973[(11)]);var inst_17930 = (inst_17928 < inst_17927);var inst_17931 = inst_17930;var state_17973__$1 = state_17973;if(cljs.core.truth_(inst_17931))
{var statearr_18007_18038 = state_17973__$1;(statearr_18007_18038[(1)] = (10));
} else
{var statearr_18008_18039 = state_17973__$1;(statearr_18008_18039[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13184__auto__))
;return ((function (switch__13119__auto__,c__13184__auto__){
return (function() {
var state_machine__13120__auto__ = null;
var state_machine__13120__auto____0 = (function (){var statearr_18012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18012[(0)] = state_machine__13120__auto__);
(statearr_18012[(1)] = (1));
return statearr_18012;
});
var state_machine__13120__auto____1 = (function (state_17973){while(true){
var ret_value__13121__auto__ = (function (){try{while(true){
var result__13122__auto__ = switch__13119__auto__.call(null,state_17973);if(cljs.core.keyword_identical_QMARK_.call(null,result__13122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13122__auto__;
}
break;
}
}catch (e18013){if((e18013 instanceof Object))
{var ex__13123__auto__ = e18013;var statearr_18014_18040 = state_17973;(statearr_18014_18040[(5)] = ex__13123__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17973);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18013;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18041 = state_17973;
state_17973 = G__18041;
continue;
}
} else
{return ret_value__13121__auto__;
}
break;
}
});
state_machine__13120__auto__ = function(state_17973){
switch(arguments.length){
case 0:
return state_machine__13120__auto____0.call(this);
case 1:
return state_machine__13120__auto____1.call(this,state_17973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13120__auto____0;
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13120__auto____1;
return state_machine__13120__auto__;
})()
;})(switch__13119__auto__,c__13184__auto__))
})();var state__13186__auto__ = (function (){var statearr_18015 = f__13185__auto__.call(null);(statearr_18015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13184__auto__);
return statearr_18015;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13186__auto__);
});})(c__13184__auto__))
);
return c__13184__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__13184__auto___18136 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13184__auto___18136){
return (function (){var f__13185__auto__ = (function (){var switch__13119__auto__ = ((function (c__13184__auto___18136){
return (function (state_18112){var state_val_18113 = (state_18112[(1)]);if((state_val_18113 === (7)))
{var inst_18108 = (state_18112[(2)]);var state_18112__$1 = state_18112;var statearr_18114_18137 = state_18112__$1;(statearr_18114_18137[(2)] = inst_18108);
(statearr_18114_18137[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18113 === (1)))
{var state_18112__$1 = state_18112;var statearr_18115_18138 = state_18112__$1;(statearr_18115_18138[(2)] = null);
(statearr_18115_18138[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18113 === (4)))
{var inst_18091 = (state_18112[(7)]);var inst_18091__$1 = (state_18112[(2)]);var inst_18092 = (inst_18091__$1 == null);var state_18112__$1 = (function (){var statearr_18116 = state_18112;(statearr_18116[(7)] = inst_18091__$1);
return statearr_18116;
})();if(cljs.core.truth_(inst_18092))
{var statearr_18117_18139 = state_18112__$1;(statearr_18117_18139[(1)] = (5));
} else
{var statearr_18118_18140 = state_18112__$1;(statearr_18118_18140[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18113 === (13)))
{var state_18112__$1 = state_18112;var statearr_18119_18141 = state_18112__$1;(statearr_18119_18141[(2)] = null);
(statearr_18119_18141[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18113 === (6)))
{var inst_18091 = (state_18112[(7)]);var state_18112__$1 = state_18112;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18112__$1,(11),to,inst_18091);
} else
{if((state_val_18113 === (3)))
{var inst_18110 = (state_18112[(2)]);var state_18112__$1 = state_18112;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18112__$1,inst_18110);
} else
{if((state_val_18113 === (12)))
{var state_18112__$1 = state_18112;var statearr_18120_18142 = state_18112__$1;(statearr_18120_18142[(2)] = null);
(statearr_18120_18142[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18113 === (2)))
{var state_18112__$1 = state_18112;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18112__$1,(4),from);
} else
{if((state_val_18113 === (11)))
{var inst_18101 = (state_18112[(2)]);var state_18112__$1 = state_18112;if(cljs.core.truth_(inst_18101))
{var statearr_18121_18143 = state_18112__$1;(statearr_18121_18143[(1)] = (12));
} else
{var statearr_18122_18144 = state_18112__$1;(statearr_18122_18144[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18113 === (9)))
{var state_18112__$1 = state_18112;var statearr_18123_18145 = state_18112__$1;(statearr_18123_18145[(2)] = null);
(statearr_18123_18145[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18113 === (5)))
{var state_18112__$1 = state_18112;if(cljs.core.truth_(close_QMARK_))
{var statearr_18124_18146 = state_18112__$1;(statearr_18124_18146[(1)] = (8));
} else
{var statearr_18125_18147 = state_18112__$1;(statearr_18125_18147[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18113 === (14)))
{var inst_18106 = (state_18112[(2)]);var state_18112__$1 = state_18112;var statearr_18126_18148 = state_18112__$1;(statearr_18126_18148[(2)] = inst_18106);
(statearr_18126_18148[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18113 === (10)))
{var inst_18098 = (state_18112[(2)]);var state_18112__$1 = state_18112;var statearr_18127_18149 = state_18112__$1;(statearr_18127_18149[(2)] = inst_18098);
(statearr_18127_18149[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18113 === (8)))
{var inst_18095 = cljs.core.async.close_BANG_.call(null,to);var state_18112__$1 = state_18112;var statearr_18128_18150 = state_18112__$1;(statearr_18128_18150[(2)] = inst_18095);
(statearr_18128_18150[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13184__auto___18136))
;return ((function (switch__13119__auto__,c__13184__auto___18136){
return (function() {
var state_machine__13120__auto__ = null;
var state_machine__13120__auto____0 = (function (){var statearr_18132 = [null,null,null,null,null,null,null,null];(statearr_18132[(0)] = state_machine__13120__auto__);
(statearr_18132[(1)] = (1));
return statearr_18132;
});
var state_machine__13120__auto____1 = (function (state_18112){while(true){
var ret_value__13121__auto__ = (function (){try{while(true){
var result__13122__auto__ = switch__13119__auto__.call(null,state_18112);if(cljs.core.keyword_identical_QMARK_.call(null,result__13122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13122__auto__;
}
break;
}
}catch (e18133){if((e18133 instanceof Object))
{var ex__13123__auto__ = e18133;var statearr_18134_18151 = state_18112;(statearr_18134_18151[(5)] = ex__13123__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18112);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18133;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18152 = state_18112;
state_18112 = G__18152;
continue;
}
} else
{return ret_value__13121__auto__;
}
break;
}
});
state_machine__13120__auto__ = function(state_18112){
switch(arguments.length){
case 0:
return state_machine__13120__auto____0.call(this);
case 1:
return state_machine__13120__auto____1.call(this,state_18112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13120__auto____0;
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13120__auto____1;
return state_machine__13120__auto__;
})()
;})(switch__13119__auto__,c__13184__auto___18136))
})();var state__13186__auto__ = (function (){var statearr_18135 = f__13185__auto__.call(null);(statearr_18135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13184__auto___18136);
return statearr_18135;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13186__auto__);
});})(c__13184__auto___18136))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13184__auto___18253 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13184__auto___18253,tc,fc){
return (function (){var f__13185__auto__ = (function (){var switch__13119__auto__ = ((function (c__13184__auto___18253,tc,fc){
return (function (state_18228){var state_val_18229 = (state_18228[(1)]);if((state_val_18229 === (7)))
{var inst_18224 = (state_18228[(2)]);var state_18228__$1 = state_18228;var statearr_18230_18254 = state_18228__$1;(statearr_18230_18254[(2)] = inst_18224);
(statearr_18230_18254[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18229 === (1)))
{var state_18228__$1 = state_18228;var statearr_18231_18255 = state_18228__$1;(statearr_18231_18255[(2)] = null);
(statearr_18231_18255[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18229 === (4)))
{var inst_18205 = (state_18228[(7)]);var inst_18205__$1 = (state_18228[(2)]);var inst_18206 = (inst_18205__$1 == null);var state_18228__$1 = (function (){var statearr_18232 = state_18228;(statearr_18232[(7)] = inst_18205__$1);
return statearr_18232;
})();if(cljs.core.truth_(inst_18206))
{var statearr_18233_18256 = state_18228__$1;(statearr_18233_18256[(1)] = (5));
} else
{var statearr_18234_18257 = state_18228__$1;(statearr_18234_18257[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18229 === (13)))
{var state_18228__$1 = state_18228;var statearr_18235_18258 = state_18228__$1;(statearr_18235_18258[(2)] = null);
(statearr_18235_18258[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18229 === (6)))
{var inst_18205 = (state_18228[(7)]);var inst_18211 = p.call(null,inst_18205);var state_18228__$1 = state_18228;if(cljs.core.truth_(inst_18211))
{var statearr_18236_18259 = state_18228__$1;(statearr_18236_18259[(1)] = (9));
} else
{var statearr_18237_18260 = state_18228__$1;(statearr_18237_18260[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18229 === (3)))
{var inst_18226 = (state_18228[(2)]);var state_18228__$1 = state_18228;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18228__$1,inst_18226);
} else
{if((state_val_18229 === (12)))
{var state_18228__$1 = state_18228;var statearr_18238_18261 = state_18228__$1;(statearr_18238_18261[(2)] = null);
(statearr_18238_18261[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18229 === (2)))
{var state_18228__$1 = state_18228;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18228__$1,(4),ch);
} else
{if((state_val_18229 === (11)))
{var inst_18205 = (state_18228[(7)]);var inst_18215 = (state_18228[(2)]);var state_18228__$1 = state_18228;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18228__$1,(8),inst_18215,inst_18205);
} else
{if((state_val_18229 === (9)))
{var state_18228__$1 = state_18228;var statearr_18239_18262 = state_18228__$1;(statearr_18239_18262[(2)] = tc);
(statearr_18239_18262[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18229 === (5)))
{var inst_18208 = cljs.core.async.close_BANG_.call(null,tc);var inst_18209 = cljs.core.async.close_BANG_.call(null,fc);var state_18228__$1 = (function (){var statearr_18240 = state_18228;(statearr_18240[(8)] = inst_18208);
return statearr_18240;
})();var statearr_18241_18263 = state_18228__$1;(statearr_18241_18263[(2)] = inst_18209);
(statearr_18241_18263[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18229 === (14)))
{var inst_18222 = (state_18228[(2)]);var state_18228__$1 = state_18228;var statearr_18242_18264 = state_18228__$1;(statearr_18242_18264[(2)] = inst_18222);
(statearr_18242_18264[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18229 === (10)))
{var state_18228__$1 = state_18228;var statearr_18243_18265 = state_18228__$1;(statearr_18243_18265[(2)] = fc);
(statearr_18243_18265[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18229 === (8)))
{var inst_18217 = (state_18228[(2)]);var state_18228__$1 = state_18228;if(cljs.core.truth_(inst_18217))
{var statearr_18244_18266 = state_18228__$1;(statearr_18244_18266[(1)] = (12));
} else
{var statearr_18245_18267 = state_18228__$1;(statearr_18245_18267[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13184__auto___18253,tc,fc))
;return ((function (switch__13119__auto__,c__13184__auto___18253,tc,fc){
return (function() {
var state_machine__13120__auto__ = null;
var state_machine__13120__auto____0 = (function (){var statearr_18249 = [null,null,null,null,null,null,null,null,null];(statearr_18249[(0)] = state_machine__13120__auto__);
(statearr_18249[(1)] = (1));
return statearr_18249;
});
var state_machine__13120__auto____1 = (function (state_18228){while(true){
var ret_value__13121__auto__ = (function (){try{while(true){
var result__13122__auto__ = switch__13119__auto__.call(null,state_18228);if(cljs.core.keyword_identical_QMARK_.call(null,result__13122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13122__auto__;
}
break;
}
}catch (e18250){if((e18250 instanceof Object))
{var ex__13123__auto__ = e18250;var statearr_18251_18268 = state_18228;(statearr_18251_18268[(5)] = ex__13123__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18228);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18250;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18269 = state_18228;
state_18228 = G__18269;
continue;
}
} else
{return ret_value__13121__auto__;
}
break;
}
});
state_machine__13120__auto__ = function(state_18228){
switch(arguments.length){
case 0:
return state_machine__13120__auto____0.call(this);
case 1:
return state_machine__13120__auto____1.call(this,state_18228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13120__auto____0;
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13120__auto____1;
return state_machine__13120__auto__;
})()
;})(switch__13119__auto__,c__13184__auto___18253,tc,fc))
})();var state__13186__auto__ = (function (){var statearr_18252 = f__13185__auto__.call(null);(statearr_18252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13184__auto___18253);
return statearr_18252;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13186__auto__);
});})(c__13184__auto___18253,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13184__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13184__auto__){
return (function (){var f__13185__auto__ = (function (){var switch__13119__auto__ = ((function (c__13184__auto__){
return (function (state_18316){var state_val_18317 = (state_18316[(1)]);if((state_val_18317 === (7)))
{var inst_18312 = (state_18316[(2)]);var state_18316__$1 = state_18316;var statearr_18318_18334 = state_18316__$1;(statearr_18318_18334[(2)] = inst_18312);
(statearr_18318_18334[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18317 === (6)))
{var inst_18305 = (state_18316[(7)]);var inst_18302 = (state_18316[(8)]);var inst_18309 = f.call(null,inst_18302,inst_18305);var inst_18302__$1 = inst_18309;var state_18316__$1 = (function (){var statearr_18319 = state_18316;(statearr_18319[(8)] = inst_18302__$1);
return statearr_18319;
})();var statearr_18320_18335 = state_18316__$1;(statearr_18320_18335[(2)] = null);
(statearr_18320_18335[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18317 === (5)))
{var inst_18302 = (state_18316[(8)]);var state_18316__$1 = state_18316;var statearr_18321_18336 = state_18316__$1;(statearr_18321_18336[(2)] = inst_18302);
(statearr_18321_18336[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18317 === (4)))
{var inst_18305 = (state_18316[(7)]);var inst_18305__$1 = (state_18316[(2)]);var inst_18306 = (inst_18305__$1 == null);var state_18316__$1 = (function (){var statearr_18322 = state_18316;(statearr_18322[(7)] = inst_18305__$1);
return statearr_18322;
})();if(cljs.core.truth_(inst_18306))
{var statearr_18323_18337 = state_18316__$1;(statearr_18323_18337[(1)] = (5));
} else
{var statearr_18324_18338 = state_18316__$1;(statearr_18324_18338[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18317 === (3)))
{var inst_18314 = (state_18316[(2)]);var state_18316__$1 = state_18316;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18316__$1,inst_18314);
} else
{if((state_val_18317 === (2)))
{var state_18316__$1 = state_18316;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18316__$1,(4),ch);
} else
{if((state_val_18317 === (1)))
{var inst_18302 = init;var state_18316__$1 = (function (){var statearr_18325 = state_18316;(statearr_18325[(8)] = inst_18302);
return statearr_18325;
})();var statearr_18326_18339 = state_18316__$1;(statearr_18326_18339[(2)] = null);
(statearr_18326_18339[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__13184__auto__))
;return ((function (switch__13119__auto__,c__13184__auto__){
return (function() {
var state_machine__13120__auto__ = null;
var state_machine__13120__auto____0 = (function (){var statearr_18330 = [null,null,null,null,null,null,null,null,null];(statearr_18330[(0)] = state_machine__13120__auto__);
(statearr_18330[(1)] = (1));
return statearr_18330;
});
var state_machine__13120__auto____1 = (function (state_18316){while(true){
var ret_value__13121__auto__ = (function (){try{while(true){
var result__13122__auto__ = switch__13119__auto__.call(null,state_18316);if(cljs.core.keyword_identical_QMARK_.call(null,result__13122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13122__auto__;
}
break;
}
}catch (e18331){if((e18331 instanceof Object))
{var ex__13123__auto__ = e18331;var statearr_18332_18340 = state_18316;(statearr_18332_18340[(5)] = ex__13123__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18316);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18331;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18341 = state_18316;
state_18316 = G__18341;
continue;
}
} else
{return ret_value__13121__auto__;
}
break;
}
});
state_machine__13120__auto__ = function(state_18316){
switch(arguments.length){
case 0:
return state_machine__13120__auto____0.call(this);
case 1:
return state_machine__13120__auto____1.call(this,state_18316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13120__auto____0;
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13120__auto____1;
return state_machine__13120__auto__;
})()
;})(switch__13119__auto__,c__13184__auto__))
})();var state__13186__auto__ = (function (){var statearr_18333 = f__13185__auto__.call(null);(statearr_18333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13184__auto__);
return statearr_18333;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13186__auto__);
});})(c__13184__auto__))
);
return c__13184__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13184__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13184__auto__){
return (function (){var f__13185__auto__ = (function (){var switch__13119__auto__ = ((function (c__13184__auto__){
return (function (state_18415){var state_val_18416 = (state_18415[(1)]);if((state_val_18416 === (7)))
{var inst_18397 = (state_18415[(2)]);var state_18415__$1 = state_18415;var statearr_18417_18440 = state_18415__$1;(statearr_18417_18440[(2)] = inst_18397);
(statearr_18417_18440[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18416 === (1)))
{var inst_18391 = cljs.core.seq.call(null,coll);var inst_18392 = inst_18391;var state_18415__$1 = (function (){var statearr_18418 = state_18415;(statearr_18418[(7)] = inst_18392);
return statearr_18418;
})();var statearr_18419_18441 = state_18415__$1;(statearr_18419_18441[(2)] = null);
(statearr_18419_18441[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18416 === (4)))
{var inst_18392 = (state_18415[(7)]);var inst_18395 = cljs.core.first.call(null,inst_18392);var state_18415__$1 = state_18415;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18415__$1,(7),ch,inst_18395);
} else
{if((state_val_18416 === (13)))
{var inst_18409 = (state_18415[(2)]);var state_18415__$1 = state_18415;var statearr_18420_18442 = state_18415__$1;(statearr_18420_18442[(2)] = inst_18409);
(statearr_18420_18442[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18416 === (6)))
{var inst_18400 = (state_18415[(2)]);var state_18415__$1 = state_18415;if(cljs.core.truth_(inst_18400))
{var statearr_18421_18443 = state_18415__$1;(statearr_18421_18443[(1)] = (8));
} else
{var statearr_18422_18444 = state_18415__$1;(statearr_18422_18444[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18416 === (3)))
{var inst_18413 = (state_18415[(2)]);var state_18415__$1 = state_18415;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18415__$1,inst_18413);
} else
{if((state_val_18416 === (12)))
{var state_18415__$1 = state_18415;var statearr_18423_18445 = state_18415__$1;(statearr_18423_18445[(2)] = null);
(statearr_18423_18445[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18416 === (2)))
{var inst_18392 = (state_18415[(7)]);var state_18415__$1 = state_18415;if(cljs.core.truth_(inst_18392))
{var statearr_18424_18446 = state_18415__$1;(statearr_18424_18446[(1)] = (4));
} else
{var statearr_18425_18447 = state_18415__$1;(statearr_18425_18447[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18416 === (11)))
{var inst_18406 = cljs.core.async.close_BANG_.call(null,ch);var state_18415__$1 = state_18415;var statearr_18426_18448 = state_18415__$1;(statearr_18426_18448[(2)] = inst_18406);
(statearr_18426_18448[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18416 === (9)))
{var state_18415__$1 = state_18415;if(cljs.core.truth_(close_QMARK_))
{var statearr_18427_18449 = state_18415__$1;(statearr_18427_18449[(1)] = (11));
} else
{var statearr_18428_18450 = state_18415__$1;(statearr_18428_18450[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18416 === (5)))
{var inst_18392 = (state_18415[(7)]);var state_18415__$1 = state_18415;var statearr_18429_18451 = state_18415__$1;(statearr_18429_18451[(2)] = inst_18392);
(statearr_18429_18451[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18416 === (10)))
{var inst_18411 = (state_18415[(2)]);var state_18415__$1 = state_18415;var statearr_18430_18452 = state_18415__$1;(statearr_18430_18452[(2)] = inst_18411);
(statearr_18430_18452[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18416 === (8)))
{var inst_18392 = (state_18415[(7)]);var inst_18402 = cljs.core.next.call(null,inst_18392);var inst_18392__$1 = inst_18402;var state_18415__$1 = (function (){var statearr_18431 = state_18415;(statearr_18431[(7)] = inst_18392__$1);
return statearr_18431;
})();var statearr_18432_18453 = state_18415__$1;(statearr_18432_18453[(2)] = null);
(statearr_18432_18453[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13184__auto__))
;return ((function (switch__13119__auto__,c__13184__auto__){
return (function() {
var state_machine__13120__auto__ = null;
var state_machine__13120__auto____0 = (function (){var statearr_18436 = [null,null,null,null,null,null,null,null];(statearr_18436[(0)] = state_machine__13120__auto__);
(statearr_18436[(1)] = (1));
return statearr_18436;
});
var state_machine__13120__auto____1 = (function (state_18415){while(true){
var ret_value__13121__auto__ = (function (){try{while(true){
var result__13122__auto__ = switch__13119__auto__.call(null,state_18415);if(cljs.core.keyword_identical_QMARK_.call(null,result__13122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13122__auto__;
}
break;
}
}catch (e18437){if((e18437 instanceof Object))
{var ex__13123__auto__ = e18437;var statearr_18438_18454 = state_18415;(statearr_18438_18454[(5)] = ex__13123__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18415);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18437;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18455 = state_18415;
state_18415 = G__18455;
continue;
}
} else
{return ret_value__13121__auto__;
}
break;
}
});
state_machine__13120__auto__ = function(state_18415){
switch(arguments.length){
case 0:
return state_machine__13120__auto____0.call(this);
case 1:
return state_machine__13120__auto____1.call(this,state_18415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13120__auto____0;
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13120__auto____1;
return state_machine__13120__auto__;
})()
;})(switch__13119__auto__,c__13184__auto__))
})();var state__13186__auto__ = (function (){var statearr_18439 = f__13185__auto__.call(null);(statearr_18439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13184__auto__);
return statearr_18439;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13186__auto__);
});})(c__13184__auto__))
);
return c__13184__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj18457 = {};return obj18457;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__9081__auto__ = _;if(and__9081__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__9081__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__9730__auto__ = (((_ == null))?null:_);return (function (){var or__9093__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj18459 = {};return obj18459;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__9081__auto__ = m;if(and__9081__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__9081__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__9730__auto__ = (((m == null))?null:m);return (function (){var or__9093__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__9081__auto__ = m;if(and__9081__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__9081__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__9730__auto__ = (((m == null))?null:m);return (function (){var or__9093__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__9081__auto__ = m;if(and__9081__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__9081__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__9730__auto__ = (((m == null))?null:m);return (function (){var or__9093__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t18681 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18681 = (function (cs,ch,mult,meta18682){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18682 = meta18682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18681.cljs$lang$type = true;
cljs.core.async.t18681.cljs$lang$ctorStr = "cljs.core.async/t18681";
cljs.core.async.t18681.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t18681");
});})(cs))
;
cljs.core.async.t18681.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t18681.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t18681.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t18681.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t18681.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18681.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t18681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18683){var self__ = this;
var _18683__$1 = this;return self__.meta18682;
});})(cs))
;
cljs.core.async.t18681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18683,meta18682__$1){var self__ = this;
var _18683__$1 = this;return (new cljs.core.async.t18681(self__.cs,self__.ch,self__.mult,meta18682__$1));
});})(cs))
;
cljs.core.async.__GT_t18681 = ((function (cs){
return (function __GT_t18681(cs__$1,ch__$1,mult__$1,meta18682){return (new cljs.core.async.t18681(cs__$1,ch__$1,mult__$1,meta18682));
});})(cs))
;
}
return (new cljs.core.async.t18681(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13184__auto___18902 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13184__auto___18902,cs,m,dchan,dctr,done){
return (function (){var f__13185__auto__ = (function (){var switch__13119__auto__ = ((function (c__13184__auto___18902,cs,m,dchan,dctr,done){
return (function (state_18814){var state_val_18815 = (state_18814[(1)]);if((state_val_18815 === (7)))
{var inst_18810 = (state_18814[(2)]);var state_18814__$1 = state_18814;var statearr_18816_18903 = state_18814__$1;(statearr_18816_18903[(2)] = inst_18810);
(statearr_18816_18903[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (20)))
{var inst_18715 = (state_18814[(7)]);var inst_18725 = cljs.core.first.call(null,inst_18715);var inst_18726 = cljs.core.nth.call(null,inst_18725,(0),null);var inst_18727 = cljs.core.nth.call(null,inst_18725,(1),null);var state_18814__$1 = (function (){var statearr_18817 = state_18814;(statearr_18817[(8)] = inst_18726);
return statearr_18817;
})();if(cljs.core.truth_(inst_18727))
{var statearr_18818_18904 = state_18814__$1;(statearr_18818_18904[(1)] = (22));
} else
{var statearr_18819_18905 = state_18814__$1;(statearr_18819_18905[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (27)))
{var inst_18755 = (state_18814[(9)]);var inst_18762 = (state_18814[(10)]);var inst_18686 = (state_18814[(11)]);var inst_18757 = (state_18814[(12)]);var inst_18762__$1 = cljs.core._nth.call(null,inst_18755,inst_18757);var inst_18763 = cljs.core.async.put_BANG_.call(null,inst_18762__$1,inst_18686,done);var state_18814__$1 = (function (){var statearr_18820 = state_18814;(statearr_18820[(10)] = inst_18762__$1);
return statearr_18820;
})();if(cljs.core.truth_(inst_18763))
{var statearr_18821_18906 = state_18814__$1;(statearr_18821_18906[(1)] = (30));
} else
{var statearr_18822_18907 = state_18814__$1;(statearr_18822_18907[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (1)))
{var state_18814__$1 = state_18814;var statearr_18823_18908 = state_18814__$1;(statearr_18823_18908[(2)] = null);
(statearr_18823_18908[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (24)))
{var inst_18715 = (state_18814[(7)]);var inst_18732 = (state_18814[(2)]);var inst_18733 = cljs.core.next.call(null,inst_18715);var inst_18695 = inst_18733;var inst_18696 = null;var inst_18697 = (0);var inst_18698 = (0);var state_18814__$1 = (function (){var statearr_18824 = state_18814;(statearr_18824[(13)] = inst_18695);
(statearr_18824[(14)] = inst_18697);
(statearr_18824[(15)] = inst_18696);
(statearr_18824[(16)] = inst_18698);
(statearr_18824[(17)] = inst_18732);
return statearr_18824;
})();var statearr_18825_18909 = state_18814__$1;(statearr_18825_18909[(2)] = null);
(statearr_18825_18909[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (39)))
{var state_18814__$1 = state_18814;var statearr_18829_18910 = state_18814__$1;(statearr_18829_18910[(2)] = null);
(statearr_18829_18910[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (4)))
{var inst_18686 = (state_18814[(11)]);var inst_18686__$1 = (state_18814[(2)]);var inst_18687 = (inst_18686__$1 == null);var state_18814__$1 = (function (){var statearr_18830 = state_18814;(statearr_18830[(11)] = inst_18686__$1);
return statearr_18830;
})();if(cljs.core.truth_(inst_18687))
{var statearr_18831_18911 = state_18814__$1;(statearr_18831_18911[(1)] = (5));
} else
{var statearr_18832_18912 = state_18814__$1;(statearr_18832_18912[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (15)))
{var inst_18695 = (state_18814[(13)]);var inst_18697 = (state_18814[(14)]);var inst_18696 = (state_18814[(15)]);var inst_18698 = (state_18814[(16)]);var inst_18711 = (state_18814[(2)]);var inst_18712 = (inst_18698 + (1));var tmp18826 = inst_18695;var tmp18827 = inst_18697;var tmp18828 = inst_18696;var inst_18695__$1 = tmp18826;var inst_18696__$1 = tmp18828;var inst_18697__$1 = tmp18827;var inst_18698__$1 = inst_18712;var state_18814__$1 = (function (){var statearr_18833 = state_18814;(statearr_18833[(13)] = inst_18695__$1);
(statearr_18833[(18)] = inst_18711);
(statearr_18833[(14)] = inst_18697__$1);
(statearr_18833[(15)] = inst_18696__$1);
(statearr_18833[(16)] = inst_18698__$1);
return statearr_18833;
})();var statearr_18834_18913 = state_18814__$1;(statearr_18834_18913[(2)] = null);
(statearr_18834_18913[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (21)))
{var inst_18736 = (state_18814[(2)]);var state_18814__$1 = state_18814;var statearr_18838_18914 = state_18814__$1;(statearr_18838_18914[(2)] = inst_18736);
(statearr_18838_18914[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (31)))
{var inst_18762 = (state_18814[(10)]);var inst_18766 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_18767 = cljs.core.async.untap_STAR_.call(null,m,inst_18762);var state_18814__$1 = (function (){var statearr_18839 = state_18814;(statearr_18839[(19)] = inst_18766);
return statearr_18839;
})();var statearr_18840_18915 = state_18814__$1;(statearr_18840_18915[(2)] = inst_18767);
(statearr_18840_18915[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (32)))
{var inst_18755 = (state_18814[(9)]);var inst_18756 = (state_18814[(20)]);var inst_18754 = (state_18814[(21)]);var inst_18757 = (state_18814[(12)]);var inst_18769 = (state_18814[(2)]);var inst_18770 = (inst_18757 + (1));var tmp18835 = inst_18755;var tmp18836 = inst_18756;var tmp18837 = inst_18754;var inst_18754__$1 = tmp18837;var inst_18755__$1 = tmp18835;var inst_18756__$1 = tmp18836;var inst_18757__$1 = inst_18770;var state_18814__$1 = (function (){var statearr_18841 = state_18814;(statearr_18841[(9)] = inst_18755__$1);
(statearr_18841[(20)] = inst_18756__$1);
(statearr_18841[(22)] = inst_18769);
(statearr_18841[(21)] = inst_18754__$1);
(statearr_18841[(12)] = inst_18757__$1);
return statearr_18841;
})();var statearr_18842_18916 = state_18814__$1;(statearr_18842_18916[(2)] = null);
(statearr_18842_18916[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (40)))
{var inst_18782 = (state_18814[(23)]);var inst_18786 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_18787 = cljs.core.async.untap_STAR_.call(null,m,inst_18782);var state_18814__$1 = (function (){var statearr_18843 = state_18814;(statearr_18843[(24)] = inst_18786);
return statearr_18843;
})();var statearr_18844_18917 = state_18814__$1;(statearr_18844_18917[(2)] = inst_18787);
(statearr_18844_18917[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (33)))
{var inst_18773 = (state_18814[(25)]);var inst_18775 = cljs.core.chunked_seq_QMARK_.call(null,inst_18773);var state_18814__$1 = state_18814;if(inst_18775)
{var statearr_18845_18918 = state_18814__$1;(statearr_18845_18918[(1)] = (36));
} else
{var statearr_18846_18919 = state_18814__$1;(statearr_18846_18919[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (13)))
{var inst_18705 = (state_18814[(26)]);var inst_18708 = cljs.core.async.close_BANG_.call(null,inst_18705);var state_18814__$1 = state_18814;var statearr_18847_18920 = state_18814__$1;(statearr_18847_18920[(2)] = inst_18708);
(statearr_18847_18920[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (22)))
{var inst_18726 = (state_18814[(8)]);var inst_18729 = cljs.core.async.close_BANG_.call(null,inst_18726);var state_18814__$1 = state_18814;var statearr_18848_18921 = state_18814__$1;(statearr_18848_18921[(2)] = inst_18729);
(statearr_18848_18921[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (36)))
{var inst_18773 = (state_18814[(25)]);var inst_18777 = cljs.core.chunk_first.call(null,inst_18773);var inst_18778 = cljs.core.chunk_rest.call(null,inst_18773);var inst_18779 = cljs.core.count.call(null,inst_18777);var inst_18754 = inst_18778;var inst_18755 = inst_18777;var inst_18756 = inst_18779;var inst_18757 = (0);var state_18814__$1 = (function (){var statearr_18849 = state_18814;(statearr_18849[(9)] = inst_18755);
(statearr_18849[(20)] = inst_18756);
(statearr_18849[(21)] = inst_18754);
(statearr_18849[(12)] = inst_18757);
return statearr_18849;
})();var statearr_18850_18922 = state_18814__$1;(statearr_18850_18922[(2)] = null);
(statearr_18850_18922[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (41)))
{var inst_18773 = (state_18814[(25)]);var inst_18789 = (state_18814[(2)]);var inst_18790 = cljs.core.next.call(null,inst_18773);var inst_18754 = inst_18790;var inst_18755 = null;var inst_18756 = (0);var inst_18757 = (0);var state_18814__$1 = (function (){var statearr_18851 = state_18814;(statearr_18851[(9)] = inst_18755);
(statearr_18851[(27)] = inst_18789);
(statearr_18851[(20)] = inst_18756);
(statearr_18851[(21)] = inst_18754);
(statearr_18851[(12)] = inst_18757);
return statearr_18851;
})();var statearr_18852_18923 = state_18814__$1;(statearr_18852_18923[(2)] = null);
(statearr_18852_18923[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (43)))
{var state_18814__$1 = state_18814;var statearr_18853_18924 = state_18814__$1;(statearr_18853_18924[(2)] = null);
(statearr_18853_18924[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (29)))
{var inst_18798 = (state_18814[(2)]);var state_18814__$1 = state_18814;var statearr_18854_18925 = state_18814__$1;(statearr_18854_18925[(2)] = inst_18798);
(statearr_18854_18925[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (44)))
{var inst_18807 = (state_18814[(2)]);var state_18814__$1 = (function (){var statearr_18855 = state_18814;(statearr_18855[(28)] = inst_18807);
return statearr_18855;
})();var statearr_18856_18926 = state_18814__$1;(statearr_18856_18926[(2)] = null);
(statearr_18856_18926[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (6)))
{var inst_18746 = (state_18814[(29)]);var inst_18745 = cljs.core.deref.call(null,cs);var inst_18746__$1 = cljs.core.keys.call(null,inst_18745);var inst_18747 = cljs.core.count.call(null,inst_18746__$1);var inst_18748 = cljs.core.reset_BANG_.call(null,dctr,inst_18747);var inst_18753 = cljs.core.seq.call(null,inst_18746__$1);var inst_18754 = inst_18753;var inst_18755 = null;var inst_18756 = (0);var inst_18757 = (0);var state_18814__$1 = (function (){var statearr_18857 = state_18814;(statearr_18857[(9)] = inst_18755);
(statearr_18857[(29)] = inst_18746__$1);
(statearr_18857[(20)] = inst_18756);
(statearr_18857[(30)] = inst_18748);
(statearr_18857[(21)] = inst_18754);
(statearr_18857[(12)] = inst_18757);
return statearr_18857;
})();var statearr_18858_18927 = state_18814__$1;(statearr_18858_18927[(2)] = null);
(statearr_18858_18927[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (28)))
{var inst_18773 = (state_18814[(25)]);var inst_18754 = (state_18814[(21)]);var inst_18773__$1 = cljs.core.seq.call(null,inst_18754);var state_18814__$1 = (function (){var statearr_18859 = state_18814;(statearr_18859[(25)] = inst_18773__$1);
return statearr_18859;
})();if(inst_18773__$1)
{var statearr_18860_18928 = state_18814__$1;(statearr_18860_18928[(1)] = (33));
} else
{var statearr_18861_18929 = state_18814__$1;(statearr_18861_18929[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (25)))
{var inst_18756 = (state_18814[(20)]);var inst_18757 = (state_18814[(12)]);var inst_18759 = (inst_18757 < inst_18756);var inst_18760 = inst_18759;var state_18814__$1 = state_18814;if(cljs.core.truth_(inst_18760))
{var statearr_18862_18930 = state_18814__$1;(statearr_18862_18930[(1)] = (27));
} else
{var statearr_18863_18931 = state_18814__$1;(statearr_18863_18931[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (34)))
{var state_18814__$1 = state_18814;var statearr_18864_18932 = state_18814__$1;(statearr_18864_18932[(2)] = null);
(statearr_18864_18932[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (17)))
{var state_18814__$1 = state_18814;var statearr_18865_18933 = state_18814__$1;(statearr_18865_18933[(2)] = null);
(statearr_18865_18933[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (3)))
{var inst_18812 = (state_18814[(2)]);var state_18814__$1 = state_18814;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18814__$1,inst_18812);
} else
{if((state_val_18815 === (12)))
{var inst_18741 = (state_18814[(2)]);var state_18814__$1 = state_18814;var statearr_18866_18934 = state_18814__$1;(statearr_18866_18934[(2)] = inst_18741);
(statearr_18866_18934[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (2)))
{var state_18814__$1 = state_18814;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18814__$1,(4),ch);
} else
{if((state_val_18815 === (23)))
{var state_18814__$1 = state_18814;var statearr_18867_18935 = state_18814__$1;(statearr_18867_18935[(2)] = null);
(statearr_18867_18935[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (35)))
{var inst_18796 = (state_18814[(2)]);var state_18814__$1 = state_18814;var statearr_18868_18936 = state_18814__$1;(statearr_18868_18936[(2)] = inst_18796);
(statearr_18868_18936[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (19)))
{var inst_18715 = (state_18814[(7)]);var inst_18719 = cljs.core.chunk_first.call(null,inst_18715);var inst_18720 = cljs.core.chunk_rest.call(null,inst_18715);var inst_18721 = cljs.core.count.call(null,inst_18719);var inst_18695 = inst_18720;var inst_18696 = inst_18719;var inst_18697 = inst_18721;var inst_18698 = (0);var state_18814__$1 = (function (){var statearr_18869 = state_18814;(statearr_18869[(13)] = inst_18695);
(statearr_18869[(14)] = inst_18697);
(statearr_18869[(15)] = inst_18696);
(statearr_18869[(16)] = inst_18698);
return statearr_18869;
})();var statearr_18870_18937 = state_18814__$1;(statearr_18870_18937[(2)] = null);
(statearr_18870_18937[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (11)))
{var inst_18695 = (state_18814[(13)]);var inst_18715 = (state_18814[(7)]);var inst_18715__$1 = cljs.core.seq.call(null,inst_18695);var state_18814__$1 = (function (){var statearr_18871 = state_18814;(statearr_18871[(7)] = inst_18715__$1);
return statearr_18871;
})();if(inst_18715__$1)
{var statearr_18872_18938 = state_18814__$1;(statearr_18872_18938[(1)] = (16));
} else
{var statearr_18873_18939 = state_18814__$1;(statearr_18873_18939[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (9)))
{var inst_18743 = (state_18814[(2)]);var state_18814__$1 = state_18814;var statearr_18874_18940 = state_18814__$1;(statearr_18874_18940[(2)] = inst_18743);
(statearr_18874_18940[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (5)))
{var inst_18693 = cljs.core.deref.call(null,cs);var inst_18694 = cljs.core.seq.call(null,inst_18693);var inst_18695 = inst_18694;var inst_18696 = null;var inst_18697 = (0);var inst_18698 = (0);var state_18814__$1 = (function (){var statearr_18875 = state_18814;(statearr_18875[(13)] = inst_18695);
(statearr_18875[(14)] = inst_18697);
(statearr_18875[(15)] = inst_18696);
(statearr_18875[(16)] = inst_18698);
return statearr_18875;
})();var statearr_18876_18941 = state_18814__$1;(statearr_18876_18941[(2)] = null);
(statearr_18876_18941[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (14)))
{var state_18814__$1 = state_18814;var statearr_18877_18942 = state_18814__$1;(statearr_18877_18942[(2)] = null);
(statearr_18877_18942[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (45)))
{var inst_18804 = (state_18814[(2)]);var state_18814__$1 = state_18814;var statearr_18878_18943 = state_18814__$1;(statearr_18878_18943[(2)] = inst_18804);
(statearr_18878_18943[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (26)))
{var inst_18746 = (state_18814[(29)]);var inst_18800 = (state_18814[(2)]);var inst_18801 = cljs.core.seq.call(null,inst_18746);var state_18814__$1 = (function (){var statearr_18879 = state_18814;(statearr_18879[(31)] = inst_18800);
return statearr_18879;
})();if(inst_18801)
{var statearr_18880_18944 = state_18814__$1;(statearr_18880_18944[(1)] = (42));
} else
{var statearr_18881_18945 = state_18814__$1;(statearr_18881_18945[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (16)))
{var inst_18715 = (state_18814[(7)]);var inst_18717 = cljs.core.chunked_seq_QMARK_.call(null,inst_18715);var state_18814__$1 = state_18814;if(inst_18717)
{var statearr_18882_18946 = state_18814__$1;(statearr_18882_18946[(1)] = (19));
} else
{var statearr_18883_18947 = state_18814__$1;(statearr_18883_18947[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (38)))
{var inst_18793 = (state_18814[(2)]);var state_18814__$1 = state_18814;var statearr_18884_18948 = state_18814__$1;(statearr_18884_18948[(2)] = inst_18793);
(statearr_18884_18948[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (30)))
{var state_18814__$1 = state_18814;var statearr_18885_18949 = state_18814__$1;(statearr_18885_18949[(2)] = null);
(statearr_18885_18949[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (10)))
{var inst_18696 = (state_18814[(15)]);var inst_18698 = (state_18814[(16)]);var inst_18704 = cljs.core._nth.call(null,inst_18696,inst_18698);var inst_18705 = cljs.core.nth.call(null,inst_18704,(0),null);var inst_18706 = cljs.core.nth.call(null,inst_18704,(1),null);var state_18814__$1 = (function (){var statearr_18886 = state_18814;(statearr_18886[(26)] = inst_18705);
return statearr_18886;
})();if(cljs.core.truth_(inst_18706))
{var statearr_18887_18950 = state_18814__$1;(statearr_18887_18950[(1)] = (13));
} else
{var statearr_18888_18951 = state_18814__$1;(statearr_18888_18951[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (18)))
{var inst_18739 = (state_18814[(2)]);var state_18814__$1 = state_18814;var statearr_18889_18952 = state_18814__$1;(statearr_18889_18952[(2)] = inst_18739);
(statearr_18889_18952[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (42)))
{var state_18814__$1 = state_18814;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18814__$1,(45),dchan);
} else
{if((state_val_18815 === (37)))
{var inst_18773 = (state_18814[(25)]);var inst_18782 = (state_18814[(23)]);var inst_18686 = (state_18814[(11)]);var inst_18782__$1 = cljs.core.first.call(null,inst_18773);var inst_18783 = cljs.core.async.put_BANG_.call(null,inst_18782__$1,inst_18686,done);var state_18814__$1 = (function (){var statearr_18890 = state_18814;(statearr_18890[(23)] = inst_18782__$1);
return statearr_18890;
})();if(cljs.core.truth_(inst_18783))
{var statearr_18891_18953 = state_18814__$1;(statearr_18891_18953[(1)] = (39));
} else
{var statearr_18892_18954 = state_18814__$1;(statearr_18892_18954[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18815 === (8)))
{var inst_18697 = (state_18814[(14)]);var inst_18698 = (state_18814[(16)]);var inst_18700 = (inst_18698 < inst_18697);var inst_18701 = inst_18700;var state_18814__$1 = state_18814;if(cljs.core.truth_(inst_18701))
{var statearr_18893_18955 = state_18814__$1;(statearr_18893_18955[(1)] = (10));
} else
{var statearr_18894_18956 = state_18814__$1;(statearr_18894_18956[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13184__auto___18902,cs,m,dchan,dctr,done))
;return ((function (switch__13119__auto__,c__13184__auto___18902,cs,m,dchan,dctr,done){
return (function() {
var state_machine__13120__auto__ = null;
var state_machine__13120__auto____0 = (function (){var statearr_18898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18898[(0)] = state_machine__13120__auto__);
(statearr_18898[(1)] = (1));
return statearr_18898;
});
var state_machine__13120__auto____1 = (function (state_18814){while(true){
var ret_value__13121__auto__ = (function (){try{while(true){
var result__13122__auto__ = switch__13119__auto__.call(null,state_18814);if(cljs.core.keyword_identical_QMARK_.call(null,result__13122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13122__auto__;
}
break;
}
}catch (e18899){if((e18899 instanceof Object))
{var ex__13123__auto__ = e18899;var statearr_18900_18957 = state_18814;(statearr_18900_18957[(5)] = ex__13123__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18814);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18899;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18958 = state_18814;
state_18814 = G__18958;
continue;
}
} else
{return ret_value__13121__auto__;
}
break;
}
});
state_machine__13120__auto__ = function(state_18814){
switch(arguments.length){
case 0:
return state_machine__13120__auto____0.call(this);
case 1:
return state_machine__13120__auto____1.call(this,state_18814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13120__auto____0;
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13120__auto____1;
return state_machine__13120__auto__;
})()
;})(switch__13119__auto__,c__13184__auto___18902,cs,m,dchan,dctr,done))
})();var state__13186__auto__ = (function (){var statearr_18901 = f__13185__auto__.call(null);(statearr_18901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13184__auto___18902);
return statearr_18901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13186__auto__);
});})(c__13184__auto___18902,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj18960 = {};return obj18960;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__9081__auto__ = m;if(and__9081__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__9081__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__9730__auto__ = (((m == null))?null:m);return (function (){var or__9093__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__9081__auto__ = m;if(and__9081__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__9081__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__9730__auto__ = (((m == null))?null:m);return (function (){var or__9093__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__9081__auto__ = m;if(and__9081__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__9081__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__9730__auto__ = (((m == null))?null:m);return (function (){var or__9093__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__9081__auto__ = m;if(and__9081__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__9081__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__9730__auto__ = (((m == null))?null:m);return (function (){var or__9093__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__9081__auto__ = m;if(and__9081__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__9081__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__9730__auto__ = (((m == null))?null:m);return (function (){var or__9093__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t19080 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19080 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19081){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19081 = meta19081;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19080.cljs$lang$type = true;
cljs.core.async.t19080.cljs$lang$ctorStr = "cljs.core.async/t19080";
cljs.core.async.t19080.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t19080");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19080.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t19080.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19080.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19080.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19080.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19080.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19080.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19080.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19080.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19082){var self__ = this;
var _19082__$1 = this;return self__.meta19081;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19082,meta19081__$1){var self__ = this;
var _19082__$1 = this;return (new cljs.core.async.t19080(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19081__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t19080 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t19080(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19081){return (new cljs.core.async.t19080(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19081));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t19080(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__13184__auto___19199 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13184__auto___19199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__13185__auto__ = (function (){var switch__13119__auto__ = ((function (c__13184__auto___19199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19152){var state_val_19153 = (state_19152[(1)]);if((state_val_19153 === (7)))
{var inst_19096 = (state_19152[(7)]);var inst_19101 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19096);var state_19152__$1 = state_19152;var statearr_19154_19200 = state_19152__$1;(statearr_19154_19200[(2)] = inst_19101);
(statearr_19154_19200[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (20)))
{var inst_19111 = (state_19152[(8)]);var state_19152__$1 = state_19152;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19152__$1,(23),out,inst_19111);
} else
{if((state_val_19153 === (1)))
{var inst_19086 = (state_19152[(9)]);var inst_19086__$1 = calc_state.call(null);var inst_19087 = cljs.core.seq_QMARK_.call(null,inst_19086__$1);var state_19152__$1 = (function (){var statearr_19155 = state_19152;(statearr_19155[(9)] = inst_19086__$1);
return statearr_19155;
})();if(inst_19087)
{var statearr_19156_19201 = state_19152__$1;(statearr_19156_19201[(1)] = (2));
} else
{var statearr_19157_19202 = state_19152__$1;(statearr_19157_19202[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (24)))
{var inst_19104 = (state_19152[(10)]);var inst_19096 = inst_19104;var state_19152__$1 = (function (){var statearr_19158 = state_19152;(statearr_19158[(7)] = inst_19096);
return statearr_19158;
})();var statearr_19159_19203 = state_19152__$1;(statearr_19159_19203[(2)] = null);
(statearr_19159_19203[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (4)))
{var inst_19086 = (state_19152[(9)]);var inst_19092 = (state_19152[(2)]);var inst_19093 = cljs.core.get.call(null,inst_19092,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_19094 = cljs.core.get.call(null,inst_19092,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_19095 = cljs.core.get.call(null,inst_19092,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_19096 = inst_19086;var state_19152__$1 = (function (){var statearr_19160 = state_19152;(statearr_19160[(7)] = inst_19096);
(statearr_19160[(11)] = inst_19093);
(statearr_19160[(12)] = inst_19094);
(statearr_19160[(13)] = inst_19095);
return statearr_19160;
})();var statearr_19161_19204 = state_19152__$1;(statearr_19161_19204[(2)] = null);
(statearr_19161_19204[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (15)))
{var state_19152__$1 = state_19152;var statearr_19162_19205 = state_19152__$1;(statearr_19162_19205[(2)] = null);
(statearr_19162_19205[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (21)))
{var inst_19104 = (state_19152[(10)]);var inst_19096 = inst_19104;var state_19152__$1 = (function (){var statearr_19163 = state_19152;(statearr_19163[(7)] = inst_19096);
return statearr_19163;
})();var statearr_19164_19206 = state_19152__$1;(statearr_19164_19206[(2)] = null);
(statearr_19164_19206[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (13)))
{var inst_19148 = (state_19152[(2)]);var state_19152__$1 = state_19152;var statearr_19165_19207 = state_19152__$1;(statearr_19165_19207[(2)] = inst_19148);
(statearr_19165_19207[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (22)))
{var inst_19146 = (state_19152[(2)]);var state_19152__$1 = state_19152;var statearr_19166_19208 = state_19152__$1;(statearr_19166_19208[(2)] = inst_19146);
(statearr_19166_19208[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (6)))
{var inst_19150 = (state_19152[(2)]);var state_19152__$1 = state_19152;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19152__$1,inst_19150);
} else
{if((state_val_19153 === (25)))
{var state_19152__$1 = state_19152;var statearr_19167_19209 = state_19152__$1;(statearr_19167_19209[(2)] = null);
(statearr_19167_19209[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (17)))
{var inst_19126 = (state_19152[(14)]);var state_19152__$1 = state_19152;var statearr_19168_19210 = state_19152__$1;(statearr_19168_19210[(2)] = inst_19126);
(statearr_19168_19210[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (3)))
{var inst_19086 = (state_19152[(9)]);var state_19152__$1 = state_19152;var statearr_19169_19211 = state_19152__$1;(statearr_19169_19211[(2)] = inst_19086);
(statearr_19169_19211[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (12)))
{var inst_19107 = (state_19152[(15)]);var inst_19126 = (state_19152[(14)]);var inst_19112 = (state_19152[(16)]);var inst_19126__$1 = inst_19107.call(null,inst_19112);var state_19152__$1 = (function (){var statearr_19170 = state_19152;(statearr_19170[(14)] = inst_19126__$1);
return statearr_19170;
})();if(cljs.core.truth_(inst_19126__$1))
{var statearr_19171_19212 = state_19152__$1;(statearr_19171_19212[(1)] = (17));
} else
{var statearr_19172_19213 = state_19152__$1;(statearr_19172_19213[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (2)))
{var inst_19086 = (state_19152[(9)]);var inst_19089 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19086);var state_19152__$1 = state_19152;var statearr_19173_19214 = state_19152__$1;(statearr_19173_19214[(2)] = inst_19089);
(statearr_19173_19214[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (23)))
{var inst_19137 = (state_19152[(2)]);var state_19152__$1 = state_19152;if(cljs.core.truth_(inst_19137))
{var statearr_19174_19215 = state_19152__$1;(statearr_19174_19215[(1)] = (24));
} else
{var statearr_19175_19216 = state_19152__$1;(statearr_19175_19216[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (19)))
{var inst_19134 = (state_19152[(2)]);var state_19152__$1 = state_19152;if(cljs.core.truth_(inst_19134))
{var statearr_19176_19217 = state_19152__$1;(statearr_19176_19217[(1)] = (20));
} else
{var statearr_19177_19218 = state_19152__$1;(statearr_19177_19218[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (11)))
{var inst_19111 = (state_19152[(8)]);var inst_19117 = (inst_19111 == null);var state_19152__$1 = state_19152;if(cljs.core.truth_(inst_19117))
{var statearr_19178_19219 = state_19152__$1;(statearr_19178_19219[(1)] = (14));
} else
{var statearr_19179_19220 = state_19152__$1;(statearr_19179_19220[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (9)))
{var inst_19104 = (state_19152[(10)]);var inst_19104__$1 = (state_19152[(2)]);var inst_19105 = cljs.core.get.call(null,inst_19104__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_19106 = cljs.core.get.call(null,inst_19104__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_19107 = cljs.core.get.call(null,inst_19104__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_19152__$1 = (function (){var statearr_19180 = state_19152;(statearr_19180[(15)] = inst_19107);
(statearr_19180[(10)] = inst_19104__$1);
(statearr_19180[(17)] = inst_19106);
return statearr_19180;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19152__$1,(10),inst_19105);
} else
{if((state_val_19153 === (5)))
{var inst_19096 = (state_19152[(7)]);var inst_19099 = cljs.core.seq_QMARK_.call(null,inst_19096);var state_19152__$1 = state_19152;if(inst_19099)
{var statearr_19181_19221 = state_19152__$1;(statearr_19181_19221[(1)] = (7));
} else
{var statearr_19182_19222 = state_19152__$1;(statearr_19182_19222[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (14)))
{var inst_19112 = (state_19152[(16)]);var inst_19119 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19112);var state_19152__$1 = state_19152;var statearr_19183_19223 = state_19152__$1;(statearr_19183_19223[(2)] = inst_19119);
(statearr_19183_19223[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (26)))
{var inst_19142 = (state_19152[(2)]);var state_19152__$1 = state_19152;var statearr_19184_19224 = state_19152__$1;(statearr_19184_19224[(2)] = inst_19142);
(statearr_19184_19224[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (16)))
{var inst_19122 = (state_19152[(2)]);var inst_19123 = calc_state.call(null);var inst_19096 = inst_19123;var state_19152__$1 = (function (){var statearr_19185 = state_19152;(statearr_19185[(7)] = inst_19096);
(statearr_19185[(18)] = inst_19122);
return statearr_19185;
})();var statearr_19186_19225 = state_19152__$1;(statearr_19186_19225[(2)] = null);
(statearr_19186_19225[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (10)))
{var inst_19111 = (state_19152[(8)]);var inst_19112 = (state_19152[(16)]);var inst_19110 = (state_19152[(2)]);var inst_19111__$1 = cljs.core.nth.call(null,inst_19110,(0),null);var inst_19112__$1 = cljs.core.nth.call(null,inst_19110,(1),null);var inst_19113 = (inst_19111__$1 == null);var inst_19114 = cljs.core._EQ_.call(null,inst_19112__$1,change);var inst_19115 = (inst_19113) || (inst_19114);var state_19152__$1 = (function (){var statearr_19187 = state_19152;(statearr_19187[(8)] = inst_19111__$1);
(statearr_19187[(16)] = inst_19112__$1);
return statearr_19187;
})();if(cljs.core.truth_(inst_19115))
{var statearr_19188_19226 = state_19152__$1;(statearr_19188_19226[(1)] = (11));
} else
{var statearr_19189_19227 = state_19152__$1;(statearr_19189_19227[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (18)))
{var inst_19107 = (state_19152[(15)]);var inst_19112 = (state_19152[(16)]);var inst_19106 = (state_19152[(17)]);var inst_19129 = cljs.core.empty_QMARK_.call(null,inst_19107);var inst_19130 = inst_19106.call(null,inst_19112);var inst_19131 = cljs.core.not.call(null,inst_19130);var inst_19132 = (inst_19129) && (inst_19131);var state_19152__$1 = state_19152;var statearr_19190_19228 = state_19152__$1;(statearr_19190_19228[(2)] = inst_19132);
(statearr_19190_19228[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19153 === (8)))
{var inst_19096 = (state_19152[(7)]);var state_19152__$1 = state_19152;var statearr_19191_19229 = state_19152__$1;(statearr_19191_19229[(2)] = inst_19096);
(statearr_19191_19229[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13184__auto___19199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__13119__auto__,c__13184__auto___19199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__13120__auto__ = null;
var state_machine__13120__auto____0 = (function (){var statearr_19195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19195[(0)] = state_machine__13120__auto__);
(statearr_19195[(1)] = (1));
return statearr_19195;
});
var state_machine__13120__auto____1 = (function (state_19152){while(true){
var ret_value__13121__auto__ = (function (){try{while(true){
var result__13122__auto__ = switch__13119__auto__.call(null,state_19152);if(cljs.core.keyword_identical_QMARK_.call(null,result__13122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13122__auto__;
}
break;
}
}catch (e19196){if((e19196 instanceof Object))
{var ex__13123__auto__ = e19196;var statearr_19197_19230 = state_19152;(statearr_19197_19230[(5)] = ex__13123__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19152);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19196;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19231 = state_19152;
state_19152 = G__19231;
continue;
}
} else
{return ret_value__13121__auto__;
}
break;
}
});
state_machine__13120__auto__ = function(state_19152){
switch(arguments.length){
case 0:
return state_machine__13120__auto____0.call(this);
case 1:
return state_machine__13120__auto____1.call(this,state_19152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13120__auto____0;
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13120__auto____1;
return state_machine__13120__auto__;
})()
;})(switch__13119__auto__,c__13184__auto___19199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__13186__auto__ = (function (){var statearr_19198 = f__13185__auto__.call(null);(statearr_19198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13184__auto___19199);
return statearr_19198;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13186__auto__);
});})(c__13184__auto___19199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj19233 = {};return obj19233;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__9081__auto__ = p;if(and__9081__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__9081__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__9730__auto__ = (((p == null))?null:p);return (function (){var or__9093__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__9081__auto__ = p;if(and__9081__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__9081__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__9730__auto__ = (((p == null))?null:p);return (function (){var or__9093__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__9081__auto__ = p;if(and__9081__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__9081__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__9730__auto__ = (((p == null))?null:p);return (function (){var or__9093__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__9081__auto__ = p;if(and__9081__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__9081__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__9730__auto__ = (((p == null))?null:p);return (function (){var or__9093__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__9093__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__9093__auto__,mults){
return (function (p1__19234_SHARP_){if(cljs.core.truth_(p1__19234_SHARP_.call(null,topic)))
{return p1__19234_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__19234_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__9093__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t19349 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19349 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19350){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19350 = meta19350;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19349.cljs$lang$type = true;
cljs.core.async.t19349.cljs$lang$ctorStr = "cljs.core.async/t19349";
cljs.core.async.t19349.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t19349");
});})(mults,ensure_mult))
;
cljs.core.async.t19349.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t19349.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t19349.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t19349.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t19349.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t19349.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19349.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t19349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19351){var self__ = this;
var _19351__$1 = this;return self__.meta19350;
});})(mults,ensure_mult))
;
cljs.core.async.t19349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19351,meta19350__$1){var self__ = this;
var _19351__$1 = this;return (new cljs.core.async.t19349(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19350__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t19349 = ((function (mults,ensure_mult){
return (function __GT_t19349(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19350){return (new cljs.core.async.t19349(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19350));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t19349(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13184__auto___19463 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13184__auto___19463,mults,ensure_mult,p){
return (function (){var f__13185__auto__ = (function (){var switch__13119__auto__ = ((function (c__13184__auto___19463,mults,ensure_mult,p){
return (function (state_19419){var state_val_19420 = (state_19419[(1)]);if((state_val_19420 === (7)))
{var inst_19415 = (state_19419[(2)]);var state_19419__$1 = state_19419;var statearr_19421_19464 = state_19419__$1;(statearr_19421_19464[(2)] = inst_19415);
(statearr_19421_19464[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19420 === (20)))
{var state_19419__$1 = state_19419;var statearr_19422_19465 = state_19419__$1;(statearr_19422_19465[(2)] = null);
(statearr_19422_19465[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19420 === (1)))
{var state_19419__$1 = state_19419;var statearr_19423_19466 = state_19419__$1;(statearr_19423_19466[(2)] = null);
(statearr_19423_19466[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19420 === (4)))
{var inst_19354 = (state_19419[(7)]);var inst_19354__$1 = (state_19419[(2)]);var inst_19355 = (inst_19354__$1 == null);var state_19419__$1 = (function (){var statearr_19424 = state_19419;(statearr_19424[(7)] = inst_19354__$1);
return statearr_19424;
})();if(cljs.core.truth_(inst_19355))
{var statearr_19425_19467 = state_19419__$1;(statearr_19425_19467[(1)] = (5));
} else
{var statearr_19426_19468 = state_19419__$1;(statearr_19426_19468[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19420 === (15)))
{var inst_19396 = (state_19419[(2)]);var state_19419__$1 = state_19419;var statearr_19427_19469 = state_19419__$1;(statearr_19427_19469[(2)] = inst_19396);
(statearr_19427_19469[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19420 === (21)))
{var inst_19402 = (state_19419[(8)]);var inst_19410 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19402);var state_19419__$1 = state_19419;var statearr_19428_19470 = state_19419__$1;(statearr_19428_19470[(2)] = inst_19410);
(statearr_19428_19470[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19420 === (13)))
{var inst_19378 = (state_19419[(9)]);var inst_19380 = cljs.core.chunked_seq_QMARK_.call(null,inst_19378);var state_19419__$1 = state_19419;if(inst_19380)
{var statearr_19429_19471 = state_19419__$1;(statearr_19429_19471[(1)] = (16));
} else
{var statearr_19430_19472 = state_19419__$1;(statearr_19430_19472[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19420 === (22)))
{var inst_19412 = (state_19419[(2)]);var state_19419__$1 = (function (){var statearr_19431 = state_19419;(statearr_19431[(10)] = inst_19412);
return statearr_19431;
})();var statearr_19432_19473 = state_19419__$1;(statearr_19432_19473[(2)] = null);
(statearr_19432_19473[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19420 === (6)))
{var inst_19402 = (state_19419[(8)]);var inst_19354 = (state_19419[(7)]);var inst_19402__$1 = topic_fn.call(null,inst_19354);var inst_19403 = cljs.core.deref.call(null,mults);var inst_19404 = cljs.core.get.call(null,inst_19403,inst_19402__$1);var inst_19405 = cljs.core.async.muxch_STAR_.call(null,inst_19404);var state_19419__$1 = (function (){var statearr_19433 = state_19419;(statearr_19433[(8)] = inst_19402__$1);
return statearr_19433;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19419__$1,(19),inst_19405,inst_19354);
} else
{if((state_val_19420 === (17)))
{var inst_19378 = (state_19419[(9)]);var inst_19387 = cljs.core.first.call(null,inst_19378);var inst_19388 = cljs.core.async.muxch_STAR_.call(null,inst_19387);var inst_19389 = cljs.core.async.close_BANG_.call(null,inst_19388);var inst_19390 = cljs.core.next.call(null,inst_19378);var inst_19364 = inst_19390;var inst_19365 = null;var inst_19366 = (0);var inst_19367 = (0);var state_19419__$1 = (function (){var statearr_19434 = state_19419;(statearr_19434[(11)] = inst_19364);
(statearr_19434[(12)] = inst_19389);
(statearr_19434[(13)] = inst_19366);
(statearr_19434[(14)] = inst_19365);
(statearr_19434[(15)] = inst_19367);
return statearr_19434;
})();var statearr_19435_19474 = state_19419__$1;(statearr_19435_19474[(2)] = null);
(statearr_19435_19474[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19420 === (3)))
{var inst_19417 = (state_19419[(2)]);var state_19419__$1 = state_19419;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19419__$1,inst_19417);
} else
{if((state_val_19420 === (12)))
{var inst_19398 = (state_19419[(2)]);var state_19419__$1 = state_19419;var statearr_19436_19475 = state_19419__$1;(statearr_19436_19475[(2)] = inst_19398);
(statearr_19436_19475[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19420 === (2)))
{var state_19419__$1 = state_19419;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19419__$1,(4),ch);
} else
{if((state_val_19420 === (19)))
{var inst_19407 = (state_19419[(2)]);var state_19419__$1 = state_19419;if(cljs.core.truth_(inst_19407))
{var statearr_19437_19476 = state_19419__$1;(statearr_19437_19476[(1)] = (20));
} else
{var statearr_19438_19477 = state_19419__$1;(statearr_19438_19477[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19420 === (11)))
{var inst_19364 = (state_19419[(11)]);var inst_19378 = (state_19419[(9)]);var inst_19378__$1 = cljs.core.seq.call(null,inst_19364);var state_19419__$1 = (function (){var statearr_19439 = state_19419;(statearr_19439[(9)] = inst_19378__$1);
return statearr_19439;
})();if(inst_19378__$1)
{var statearr_19440_19478 = state_19419__$1;(statearr_19440_19478[(1)] = (13));
} else
{var statearr_19441_19479 = state_19419__$1;(statearr_19441_19479[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19420 === (9)))
{var inst_19400 = (state_19419[(2)]);var state_19419__$1 = state_19419;var statearr_19442_19480 = state_19419__$1;(statearr_19442_19480[(2)] = inst_19400);
(statearr_19442_19480[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19420 === (5)))
{var inst_19361 = cljs.core.deref.call(null,mults);var inst_19362 = cljs.core.vals.call(null,inst_19361);var inst_19363 = cljs.core.seq.call(null,inst_19362);var inst_19364 = inst_19363;var inst_19365 = null;var inst_19366 = (0);var inst_19367 = (0);var state_19419__$1 = (function (){var statearr_19443 = state_19419;(statearr_19443[(11)] = inst_19364);
(statearr_19443[(13)] = inst_19366);
(statearr_19443[(14)] = inst_19365);
(statearr_19443[(15)] = inst_19367);
return statearr_19443;
})();var statearr_19444_19481 = state_19419__$1;(statearr_19444_19481[(2)] = null);
(statearr_19444_19481[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19420 === (14)))
{var state_19419__$1 = state_19419;var statearr_19448_19482 = state_19419__$1;(statearr_19448_19482[(2)] = null);
(statearr_19448_19482[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19420 === (16)))
{var inst_19378 = (state_19419[(9)]);var inst_19382 = cljs.core.chunk_first.call(null,inst_19378);var inst_19383 = cljs.core.chunk_rest.call(null,inst_19378);var inst_19384 = cljs.core.count.call(null,inst_19382);var inst_19364 = inst_19383;var inst_19365 = inst_19382;var inst_19366 = inst_19384;var inst_19367 = (0);var state_19419__$1 = (function (){var statearr_19449 = state_19419;(statearr_19449[(11)] = inst_19364);
(statearr_19449[(13)] = inst_19366);
(statearr_19449[(14)] = inst_19365);
(statearr_19449[(15)] = inst_19367);
return statearr_19449;
})();var statearr_19450_19483 = state_19419__$1;(statearr_19450_19483[(2)] = null);
(statearr_19450_19483[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19420 === (10)))
{var inst_19364 = (state_19419[(11)]);var inst_19366 = (state_19419[(13)]);var inst_19365 = (state_19419[(14)]);var inst_19367 = (state_19419[(15)]);var inst_19372 = cljs.core._nth.call(null,inst_19365,inst_19367);var inst_19373 = cljs.core.async.muxch_STAR_.call(null,inst_19372);var inst_19374 = cljs.core.async.close_BANG_.call(null,inst_19373);var inst_19375 = (inst_19367 + (1));var tmp19445 = inst_19364;var tmp19446 = inst_19366;var tmp19447 = inst_19365;var inst_19364__$1 = tmp19445;var inst_19365__$1 = tmp19447;var inst_19366__$1 = tmp19446;var inst_19367__$1 = inst_19375;var state_19419__$1 = (function (){var statearr_19451 = state_19419;(statearr_19451[(11)] = inst_19364__$1);
(statearr_19451[(16)] = inst_19374);
(statearr_19451[(13)] = inst_19366__$1);
(statearr_19451[(14)] = inst_19365__$1);
(statearr_19451[(15)] = inst_19367__$1);
return statearr_19451;
})();var statearr_19452_19484 = state_19419__$1;(statearr_19452_19484[(2)] = null);
(statearr_19452_19484[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19420 === (18)))
{var inst_19393 = (state_19419[(2)]);var state_19419__$1 = state_19419;var statearr_19453_19485 = state_19419__$1;(statearr_19453_19485[(2)] = inst_19393);
(statearr_19453_19485[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19420 === (8)))
{var inst_19366 = (state_19419[(13)]);var inst_19367 = (state_19419[(15)]);var inst_19369 = (inst_19367 < inst_19366);var inst_19370 = inst_19369;var state_19419__$1 = state_19419;if(cljs.core.truth_(inst_19370))
{var statearr_19454_19486 = state_19419__$1;(statearr_19454_19486[(1)] = (10));
} else
{var statearr_19455_19487 = state_19419__$1;(statearr_19455_19487[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13184__auto___19463,mults,ensure_mult,p))
;return ((function (switch__13119__auto__,c__13184__auto___19463,mults,ensure_mult,p){
return (function() {
var state_machine__13120__auto__ = null;
var state_machine__13120__auto____0 = (function (){var statearr_19459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19459[(0)] = state_machine__13120__auto__);
(statearr_19459[(1)] = (1));
return statearr_19459;
});
var state_machine__13120__auto____1 = (function (state_19419){while(true){
var ret_value__13121__auto__ = (function (){try{while(true){
var result__13122__auto__ = switch__13119__auto__.call(null,state_19419);if(cljs.core.keyword_identical_QMARK_.call(null,result__13122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13122__auto__;
}
break;
}
}catch (e19460){if((e19460 instanceof Object))
{var ex__13123__auto__ = e19460;var statearr_19461_19488 = state_19419;(statearr_19461_19488[(5)] = ex__13123__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19419);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19460;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19489 = state_19419;
state_19419 = G__19489;
continue;
}
} else
{return ret_value__13121__auto__;
}
break;
}
});
state_machine__13120__auto__ = function(state_19419){
switch(arguments.length){
case 0:
return state_machine__13120__auto____0.call(this);
case 1:
return state_machine__13120__auto____1.call(this,state_19419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13120__auto____0;
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13120__auto____1;
return state_machine__13120__auto__;
})()
;})(switch__13119__auto__,c__13184__auto___19463,mults,ensure_mult,p))
})();var state__13186__auto__ = (function (){var statearr_19462 = f__13185__auto__.call(null);(statearr_19462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13184__auto___19463);
return statearr_19462;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13186__auto__);
});})(c__13184__auto___19463,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__13184__auto___19626 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13184__auto___19626,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__13185__auto__ = (function (){var switch__13119__auto__ = ((function (c__13184__auto___19626,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19596){var state_val_19597 = (state_19596[(1)]);if((state_val_19597 === (7)))
{var state_19596__$1 = state_19596;var statearr_19598_19627 = state_19596__$1;(statearr_19598_19627[(2)] = null);
(statearr_19598_19627[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19597 === (1)))
{var state_19596__$1 = state_19596;var statearr_19599_19628 = state_19596__$1;(statearr_19599_19628[(2)] = null);
(statearr_19599_19628[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19597 === (4)))
{var inst_19560 = (state_19596[(7)]);var inst_19562 = (inst_19560 < cnt);var state_19596__$1 = state_19596;if(cljs.core.truth_(inst_19562))
{var statearr_19600_19629 = state_19596__$1;(statearr_19600_19629[(1)] = (6));
} else
{var statearr_19601_19630 = state_19596__$1;(statearr_19601_19630[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19597 === (15)))
{var inst_19592 = (state_19596[(2)]);var state_19596__$1 = state_19596;var statearr_19602_19631 = state_19596__$1;(statearr_19602_19631[(2)] = inst_19592);
(statearr_19602_19631[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19597 === (13)))
{var inst_19585 = cljs.core.async.close_BANG_.call(null,out);var state_19596__$1 = state_19596;var statearr_19603_19632 = state_19596__$1;(statearr_19603_19632[(2)] = inst_19585);
(statearr_19603_19632[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19597 === (6)))
{var state_19596__$1 = state_19596;var statearr_19604_19633 = state_19596__$1;(statearr_19604_19633[(2)] = null);
(statearr_19604_19633[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19597 === (3)))
{var inst_19594 = (state_19596[(2)]);var state_19596__$1 = state_19596;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19596__$1,inst_19594);
} else
{if((state_val_19597 === (12)))
{var inst_19582 = (state_19596[(8)]);var inst_19582__$1 = (state_19596[(2)]);var inst_19583 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19582__$1);var state_19596__$1 = (function (){var statearr_19605 = state_19596;(statearr_19605[(8)] = inst_19582__$1);
return statearr_19605;
})();if(cljs.core.truth_(inst_19583))
{var statearr_19606_19634 = state_19596__$1;(statearr_19606_19634[(1)] = (13));
} else
{var statearr_19607_19635 = state_19596__$1;(statearr_19607_19635[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19597 === (2)))
{var inst_19559 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_19560 = (0);var state_19596__$1 = (function (){var statearr_19608 = state_19596;(statearr_19608[(9)] = inst_19559);
(statearr_19608[(7)] = inst_19560);
return statearr_19608;
})();var statearr_19609_19636 = state_19596__$1;(statearr_19609_19636[(2)] = null);
(statearr_19609_19636[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19597 === (11)))
{var inst_19560 = (state_19596[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19596,(10),Object,null,(9));var inst_19569 = chs__$1.call(null,inst_19560);var inst_19570 = done.call(null,inst_19560);var inst_19571 = cljs.core.async.take_BANG_.call(null,inst_19569,inst_19570);var state_19596__$1 = state_19596;var statearr_19610_19637 = state_19596__$1;(statearr_19610_19637[(2)] = inst_19571);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19596__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19597 === (9)))
{var inst_19560 = (state_19596[(7)]);var inst_19573 = (state_19596[(2)]);var inst_19574 = (inst_19560 + (1));var inst_19560__$1 = inst_19574;var state_19596__$1 = (function (){var statearr_19611 = state_19596;(statearr_19611[(10)] = inst_19573);
(statearr_19611[(7)] = inst_19560__$1);
return statearr_19611;
})();var statearr_19612_19638 = state_19596__$1;(statearr_19612_19638[(2)] = null);
(statearr_19612_19638[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19597 === (5)))
{var inst_19580 = (state_19596[(2)]);var state_19596__$1 = (function (){var statearr_19613 = state_19596;(statearr_19613[(11)] = inst_19580);
return statearr_19613;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19596__$1,(12),dchan);
} else
{if((state_val_19597 === (14)))
{var inst_19582 = (state_19596[(8)]);var inst_19587 = cljs.core.apply.call(null,f,inst_19582);var state_19596__$1 = state_19596;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19596__$1,(16),out,inst_19587);
} else
{if((state_val_19597 === (16)))
{var inst_19589 = (state_19596[(2)]);var state_19596__$1 = (function (){var statearr_19614 = state_19596;(statearr_19614[(12)] = inst_19589);
return statearr_19614;
})();var statearr_19615_19639 = state_19596__$1;(statearr_19615_19639[(2)] = null);
(statearr_19615_19639[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19597 === (10)))
{var inst_19564 = (state_19596[(2)]);var inst_19565 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_19596__$1 = (function (){var statearr_19616 = state_19596;(statearr_19616[(13)] = inst_19564);
return statearr_19616;
})();var statearr_19617_19640 = state_19596__$1;(statearr_19617_19640[(2)] = inst_19565);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19596__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19597 === (8)))
{var inst_19578 = (state_19596[(2)]);var state_19596__$1 = state_19596;var statearr_19618_19641 = state_19596__$1;(statearr_19618_19641[(2)] = inst_19578);
(statearr_19618_19641[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13184__auto___19626,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__13119__auto__,c__13184__auto___19626,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__13120__auto__ = null;
var state_machine__13120__auto____0 = (function (){var statearr_19622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19622[(0)] = state_machine__13120__auto__);
(statearr_19622[(1)] = (1));
return statearr_19622;
});
var state_machine__13120__auto____1 = (function (state_19596){while(true){
var ret_value__13121__auto__ = (function (){try{while(true){
var result__13122__auto__ = switch__13119__auto__.call(null,state_19596);if(cljs.core.keyword_identical_QMARK_.call(null,result__13122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13122__auto__;
}
break;
}
}catch (e19623){if((e19623 instanceof Object))
{var ex__13123__auto__ = e19623;var statearr_19624_19642 = state_19596;(statearr_19624_19642[(5)] = ex__13123__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19596);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19623;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19643 = state_19596;
state_19596 = G__19643;
continue;
}
} else
{return ret_value__13121__auto__;
}
break;
}
});
state_machine__13120__auto__ = function(state_19596){
switch(arguments.length){
case 0:
return state_machine__13120__auto____0.call(this);
case 1:
return state_machine__13120__auto____1.call(this,state_19596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13120__auto____0;
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13120__auto____1;
return state_machine__13120__auto__;
})()
;})(switch__13119__auto__,c__13184__auto___19626,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__13186__auto__ = (function (){var statearr_19625 = f__13185__auto__.call(null);(statearr_19625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13184__auto___19626);
return statearr_19625;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13186__auto__);
});})(c__13184__auto___19626,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13184__auto___19751 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13184__auto___19751,out){
return (function (){var f__13185__auto__ = (function (){var switch__13119__auto__ = ((function (c__13184__auto___19751,out){
return (function (state_19727){var state_val_19728 = (state_19727[(1)]);if((state_val_19728 === (7)))
{var inst_19706 = (state_19727[(7)]);var inst_19707 = (state_19727[(8)]);var inst_19706__$1 = (state_19727[(2)]);var inst_19707__$1 = cljs.core.nth.call(null,inst_19706__$1,(0),null);var inst_19708 = cljs.core.nth.call(null,inst_19706__$1,(1),null);var inst_19709 = (inst_19707__$1 == null);var state_19727__$1 = (function (){var statearr_19729 = state_19727;(statearr_19729[(7)] = inst_19706__$1);
(statearr_19729[(8)] = inst_19707__$1);
(statearr_19729[(9)] = inst_19708);
return statearr_19729;
})();if(cljs.core.truth_(inst_19709))
{var statearr_19730_19752 = state_19727__$1;(statearr_19730_19752[(1)] = (8));
} else
{var statearr_19731_19753 = state_19727__$1;(statearr_19731_19753[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19728 === (1)))
{var inst_19698 = cljs.core.vec.call(null,chs);var inst_19699 = inst_19698;var state_19727__$1 = (function (){var statearr_19732 = state_19727;(statearr_19732[(10)] = inst_19699);
return statearr_19732;
})();var statearr_19733_19754 = state_19727__$1;(statearr_19733_19754[(2)] = null);
(statearr_19733_19754[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19728 === (4)))
{var inst_19699 = (state_19727[(10)]);var state_19727__$1 = state_19727;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19727__$1,(7),inst_19699);
} else
{if((state_val_19728 === (6)))
{var inst_19723 = (state_19727[(2)]);var state_19727__$1 = state_19727;var statearr_19734_19755 = state_19727__$1;(statearr_19734_19755[(2)] = inst_19723);
(statearr_19734_19755[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19728 === (3)))
{var inst_19725 = (state_19727[(2)]);var state_19727__$1 = state_19727;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19727__$1,inst_19725);
} else
{if((state_val_19728 === (2)))
{var inst_19699 = (state_19727[(10)]);var inst_19701 = cljs.core.count.call(null,inst_19699);var inst_19702 = (inst_19701 > (0));var state_19727__$1 = state_19727;if(cljs.core.truth_(inst_19702))
{var statearr_19736_19756 = state_19727__$1;(statearr_19736_19756[(1)] = (4));
} else
{var statearr_19737_19757 = state_19727__$1;(statearr_19737_19757[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19728 === (11)))
{var inst_19699 = (state_19727[(10)]);var inst_19716 = (state_19727[(2)]);var tmp19735 = inst_19699;var inst_19699__$1 = tmp19735;var state_19727__$1 = (function (){var statearr_19738 = state_19727;(statearr_19738[(11)] = inst_19716);
(statearr_19738[(10)] = inst_19699__$1);
return statearr_19738;
})();var statearr_19739_19758 = state_19727__$1;(statearr_19739_19758[(2)] = null);
(statearr_19739_19758[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19728 === (9)))
{var inst_19707 = (state_19727[(8)]);var state_19727__$1 = state_19727;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19727__$1,(11),out,inst_19707);
} else
{if((state_val_19728 === (5)))
{var inst_19721 = cljs.core.async.close_BANG_.call(null,out);var state_19727__$1 = state_19727;var statearr_19740_19759 = state_19727__$1;(statearr_19740_19759[(2)] = inst_19721);
(statearr_19740_19759[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19728 === (10)))
{var inst_19719 = (state_19727[(2)]);var state_19727__$1 = state_19727;var statearr_19741_19760 = state_19727__$1;(statearr_19741_19760[(2)] = inst_19719);
(statearr_19741_19760[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19728 === (8)))
{var inst_19706 = (state_19727[(7)]);var inst_19699 = (state_19727[(10)]);var inst_19707 = (state_19727[(8)]);var inst_19708 = (state_19727[(9)]);var inst_19711 = (function (){var c = inst_19708;var v = inst_19707;var vec__19704 = inst_19706;var cs = inst_19699;return ((function (c,v,vec__19704,cs,inst_19706,inst_19699,inst_19707,inst_19708,state_val_19728,c__13184__auto___19751,out){
return (function (p1__19644_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__19644_SHARP_);
});
;})(c,v,vec__19704,cs,inst_19706,inst_19699,inst_19707,inst_19708,state_val_19728,c__13184__auto___19751,out))
})();var inst_19712 = cljs.core.filterv.call(null,inst_19711,inst_19699);var inst_19699__$1 = inst_19712;var state_19727__$1 = (function (){var statearr_19742 = state_19727;(statearr_19742[(10)] = inst_19699__$1);
return statearr_19742;
})();var statearr_19743_19761 = state_19727__$1;(statearr_19743_19761[(2)] = null);
(statearr_19743_19761[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13184__auto___19751,out))
;return ((function (switch__13119__auto__,c__13184__auto___19751,out){
return (function() {
var state_machine__13120__auto__ = null;
var state_machine__13120__auto____0 = (function (){var statearr_19747 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19747[(0)] = state_machine__13120__auto__);
(statearr_19747[(1)] = (1));
return statearr_19747;
});
var state_machine__13120__auto____1 = (function (state_19727){while(true){
var ret_value__13121__auto__ = (function (){try{while(true){
var result__13122__auto__ = switch__13119__auto__.call(null,state_19727);if(cljs.core.keyword_identical_QMARK_.call(null,result__13122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13122__auto__;
}
break;
}
}catch (e19748){if((e19748 instanceof Object))
{var ex__13123__auto__ = e19748;var statearr_19749_19762 = state_19727;(statearr_19749_19762[(5)] = ex__13123__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19727);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19748;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19763 = state_19727;
state_19727 = G__19763;
continue;
}
} else
{return ret_value__13121__auto__;
}
break;
}
});
state_machine__13120__auto__ = function(state_19727){
switch(arguments.length){
case 0:
return state_machine__13120__auto____0.call(this);
case 1:
return state_machine__13120__auto____1.call(this,state_19727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13120__auto____0;
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13120__auto____1;
return state_machine__13120__auto__;
})()
;})(switch__13119__auto__,c__13184__auto___19751,out))
})();var state__13186__auto__ = (function (){var statearr_19750 = f__13185__auto__.call(null);(statearr_19750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13184__auto___19751);
return statearr_19750;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13186__auto__);
});})(c__13184__auto___19751,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13184__auto___19856 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13184__auto___19856,out){
return (function (){var f__13185__auto__ = (function (){var switch__13119__auto__ = ((function (c__13184__auto___19856,out){
return (function (state_19833){var state_val_19834 = (state_19833[(1)]);if((state_val_19834 === (7)))
{var inst_19815 = (state_19833[(7)]);var inst_19815__$1 = (state_19833[(2)]);var inst_19816 = (inst_19815__$1 == null);var inst_19817 = cljs.core.not.call(null,inst_19816);var state_19833__$1 = (function (){var statearr_19835 = state_19833;(statearr_19835[(7)] = inst_19815__$1);
return statearr_19835;
})();if(inst_19817)
{var statearr_19836_19857 = state_19833__$1;(statearr_19836_19857[(1)] = (8));
} else
{var statearr_19837_19858 = state_19833__$1;(statearr_19837_19858[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19834 === (1)))
{var inst_19810 = (0);var state_19833__$1 = (function (){var statearr_19838 = state_19833;(statearr_19838[(8)] = inst_19810);
return statearr_19838;
})();var statearr_19839_19859 = state_19833__$1;(statearr_19839_19859[(2)] = null);
(statearr_19839_19859[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19834 === (4)))
{var state_19833__$1 = state_19833;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19833__$1,(7),ch);
} else
{if((state_val_19834 === (6)))
{var inst_19828 = (state_19833[(2)]);var state_19833__$1 = state_19833;var statearr_19840_19860 = state_19833__$1;(statearr_19840_19860[(2)] = inst_19828);
(statearr_19840_19860[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19834 === (3)))
{var inst_19830 = (state_19833[(2)]);var inst_19831 = cljs.core.async.close_BANG_.call(null,out);var state_19833__$1 = (function (){var statearr_19841 = state_19833;(statearr_19841[(9)] = inst_19830);
return statearr_19841;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19833__$1,inst_19831);
} else
{if((state_val_19834 === (2)))
{var inst_19810 = (state_19833[(8)]);var inst_19812 = (inst_19810 < n);var state_19833__$1 = state_19833;if(cljs.core.truth_(inst_19812))
{var statearr_19842_19861 = state_19833__$1;(statearr_19842_19861[(1)] = (4));
} else
{var statearr_19843_19862 = state_19833__$1;(statearr_19843_19862[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19834 === (11)))
{var inst_19810 = (state_19833[(8)]);var inst_19820 = (state_19833[(2)]);var inst_19821 = (inst_19810 + (1));var inst_19810__$1 = inst_19821;var state_19833__$1 = (function (){var statearr_19844 = state_19833;(statearr_19844[(10)] = inst_19820);
(statearr_19844[(8)] = inst_19810__$1);
return statearr_19844;
})();var statearr_19845_19863 = state_19833__$1;(statearr_19845_19863[(2)] = null);
(statearr_19845_19863[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19834 === (9)))
{var state_19833__$1 = state_19833;var statearr_19846_19864 = state_19833__$1;(statearr_19846_19864[(2)] = null);
(statearr_19846_19864[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19834 === (5)))
{var state_19833__$1 = state_19833;var statearr_19847_19865 = state_19833__$1;(statearr_19847_19865[(2)] = null);
(statearr_19847_19865[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19834 === (10)))
{var inst_19825 = (state_19833[(2)]);var state_19833__$1 = state_19833;var statearr_19848_19866 = state_19833__$1;(statearr_19848_19866[(2)] = inst_19825);
(statearr_19848_19866[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19834 === (8)))
{var inst_19815 = (state_19833[(7)]);var state_19833__$1 = state_19833;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19833__$1,(11),out,inst_19815);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13184__auto___19856,out))
;return ((function (switch__13119__auto__,c__13184__auto___19856,out){
return (function() {
var state_machine__13120__auto__ = null;
var state_machine__13120__auto____0 = (function (){var statearr_19852 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19852[(0)] = state_machine__13120__auto__);
(statearr_19852[(1)] = (1));
return statearr_19852;
});
var state_machine__13120__auto____1 = (function (state_19833){while(true){
var ret_value__13121__auto__ = (function (){try{while(true){
var result__13122__auto__ = switch__13119__auto__.call(null,state_19833);if(cljs.core.keyword_identical_QMARK_.call(null,result__13122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13122__auto__;
}
break;
}
}catch (e19853){if((e19853 instanceof Object))
{var ex__13123__auto__ = e19853;var statearr_19854_19867 = state_19833;(statearr_19854_19867[(5)] = ex__13123__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19833);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19853;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19868 = state_19833;
state_19833 = G__19868;
continue;
}
} else
{return ret_value__13121__auto__;
}
break;
}
});
state_machine__13120__auto__ = function(state_19833){
switch(arguments.length){
case 0:
return state_machine__13120__auto____0.call(this);
case 1:
return state_machine__13120__auto____1.call(this,state_19833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13120__auto____0;
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13120__auto____1;
return state_machine__13120__auto__;
})()
;})(switch__13119__auto__,c__13184__auto___19856,out))
})();var state__13186__auto__ = (function (){var statearr_19855 = f__13185__auto__.call(null);(statearr_19855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13184__auto___19856);
return statearr_19855;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13186__auto__);
});})(c__13184__auto___19856,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13184__auto___19965 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13184__auto___19965,out){
return (function (){var f__13185__auto__ = (function (){var switch__13119__auto__ = ((function (c__13184__auto___19965,out){
return (function (state_19940){var state_val_19941 = (state_19940[(1)]);if((state_val_19941 === (7)))
{var inst_19935 = (state_19940[(2)]);var state_19940__$1 = state_19940;var statearr_19942_19966 = state_19940__$1;(statearr_19942_19966[(2)] = inst_19935);
(statearr_19942_19966[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19941 === (1)))
{var inst_19917 = null;var state_19940__$1 = (function (){var statearr_19943 = state_19940;(statearr_19943[(7)] = inst_19917);
return statearr_19943;
})();var statearr_19944_19967 = state_19940__$1;(statearr_19944_19967[(2)] = null);
(statearr_19944_19967[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19941 === (4)))
{var inst_19920 = (state_19940[(8)]);var inst_19920__$1 = (state_19940[(2)]);var inst_19921 = (inst_19920__$1 == null);var inst_19922 = cljs.core.not.call(null,inst_19921);var state_19940__$1 = (function (){var statearr_19945 = state_19940;(statearr_19945[(8)] = inst_19920__$1);
return statearr_19945;
})();if(inst_19922)
{var statearr_19946_19968 = state_19940__$1;(statearr_19946_19968[(1)] = (5));
} else
{var statearr_19947_19969 = state_19940__$1;(statearr_19947_19969[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19941 === (6)))
{var state_19940__$1 = state_19940;var statearr_19948_19970 = state_19940__$1;(statearr_19948_19970[(2)] = null);
(statearr_19948_19970[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19941 === (3)))
{var inst_19937 = (state_19940[(2)]);var inst_19938 = cljs.core.async.close_BANG_.call(null,out);var state_19940__$1 = (function (){var statearr_19949 = state_19940;(statearr_19949[(9)] = inst_19937);
return statearr_19949;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19940__$1,inst_19938);
} else
{if((state_val_19941 === (2)))
{var state_19940__$1 = state_19940;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19940__$1,(4),ch);
} else
{if((state_val_19941 === (11)))
{var inst_19920 = (state_19940[(8)]);var inst_19929 = (state_19940[(2)]);var inst_19917 = inst_19920;var state_19940__$1 = (function (){var statearr_19950 = state_19940;(statearr_19950[(10)] = inst_19929);
(statearr_19950[(7)] = inst_19917);
return statearr_19950;
})();var statearr_19951_19971 = state_19940__$1;(statearr_19951_19971[(2)] = null);
(statearr_19951_19971[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19941 === (9)))
{var inst_19920 = (state_19940[(8)]);var state_19940__$1 = state_19940;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19940__$1,(11),out,inst_19920);
} else
{if((state_val_19941 === (5)))
{var inst_19917 = (state_19940[(7)]);var inst_19920 = (state_19940[(8)]);var inst_19924 = cljs.core._EQ_.call(null,inst_19920,inst_19917);var state_19940__$1 = state_19940;if(inst_19924)
{var statearr_19953_19972 = state_19940__$1;(statearr_19953_19972[(1)] = (8));
} else
{var statearr_19954_19973 = state_19940__$1;(statearr_19954_19973[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19941 === (10)))
{var inst_19932 = (state_19940[(2)]);var state_19940__$1 = state_19940;var statearr_19955_19974 = state_19940__$1;(statearr_19955_19974[(2)] = inst_19932);
(statearr_19955_19974[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19941 === (8)))
{var inst_19917 = (state_19940[(7)]);var tmp19952 = inst_19917;var inst_19917__$1 = tmp19952;var state_19940__$1 = (function (){var statearr_19956 = state_19940;(statearr_19956[(7)] = inst_19917__$1);
return statearr_19956;
})();var statearr_19957_19975 = state_19940__$1;(statearr_19957_19975[(2)] = null);
(statearr_19957_19975[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13184__auto___19965,out))
;return ((function (switch__13119__auto__,c__13184__auto___19965,out){
return (function() {
var state_machine__13120__auto__ = null;
var state_machine__13120__auto____0 = (function (){var statearr_19961 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19961[(0)] = state_machine__13120__auto__);
(statearr_19961[(1)] = (1));
return statearr_19961;
});
var state_machine__13120__auto____1 = (function (state_19940){while(true){
var ret_value__13121__auto__ = (function (){try{while(true){
var result__13122__auto__ = switch__13119__auto__.call(null,state_19940);if(cljs.core.keyword_identical_QMARK_.call(null,result__13122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13122__auto__;
}
break;
}
}catch (e19962){if((e19962 instanceof Object))
{var ex__13123__auto__ = e19962;var statearr_19963_19976 = state_19940;(statearr_19963_19976[(5)] = ex__13123__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19940);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19962;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19977 = state_19940;
state_19940 = G__19977;
continue;
}
} else
{return ret_value__13121__auto__;
}
break;
}
});
state_machine__13120__auto__ = function(state_19940){
switch(arguments.length){
case 0:
return state_machine__13120__auto____0.call(this);
case 1:
return state_machine__13120__auto____1.call(this,state_19940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13120__auto____0;
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13120__auto____1;
return state_machine__13120__auto__;
})()
;})(switch__13119__auto__,c__13184__auto___19965,out))
})();var state__13186__auto__ = (function (){var statearr_19964 = f__13185__auto__.call(null);(statearr_19964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13184__auto___19965);
return statearr_19964;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13186__auto__);
});})(c__13184__auto___19965,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13184__auto___20112 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13184__auto___20112,out){
return (function (){var f__13185__auto__ = (function (){var switch__13119__auto__ = ((function (c__13184__auto___20112,out){
return (function (state_20082){var state_val_20083 = (state_20082[(1)]);if((state_val_20083 === (7)))
{var inst_20078 = (state_20082[(2)]);var state_20082__$1 = state_20082;var statearr_20084_20113 = state_20082__$1;(statearr_20084_20113[(2)] = inst_20078);
(statearr_20084_20113[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20083 === (1)))
{var inst_20045 = (new Array(n));var inst_20046 = inst_20045;var inst_20047 = (0);var state_20082__$1 = (function (){var statearr_20085 = state_20082;(statearr_20085[(7)] = inst_20047);
(statearr_20085[(8)] = inst_20046);
return statearr_20085;
})();var statearr_20086_20114 = state_20082__$1;(statearr_20086_20114[(2)] = null);
(statearr_20086_20114[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20083 === (4)))
{var inst_20050 = (state_20082[(9)]);var inst_20050__$1 = (state_20082[(2)]);var inst_20051 = (inst_20050__$1 == null);var inst_20052 = cljs.core.not.call(null,inst_20051);var state_20082__$1 = (function (){var statearr_20087 = state_20082;(statearr_20087[(9)] = inst_20050__$1);
return statearr_20087;
})();if(inst_20052)
{var statearr_20088_20115 = state_20082__$1;(statearr_20088_20115[(1)] = (5));
} else
{var statearr_20089_20116 = state_20082__$1;(statearr_20089_20116[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20083 === (15)))
{var inst_20072 = (state_20082[(2)]);var state_20082__$1 = state_20082;var statearr_20090_20117 = state_20082__$1;(statearr_20090_20117[(2)] = inst_20072);
(statearr_20090_20117[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20083 === (13)))
{var state_20082__$1 = state_20082;var statearr_20091_20118 = state_20082__$1;(statearr_20091_20118[(2)] = null);
(statearr_20091_20118[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20083 === (6)))
{var inst_20047 = (state_20082[(7)]);var inst_20068 = (inst_20047 > (0));var state_20082__$1 = state_20082;if(cljs.core.truth_(inst_20068))
{var statearr_20092_20119 = state_20082__$1;(statearr_20092_20119[(1)] = (12));
} else
{var statearr_20093_20120 = state_20082__$1;(statearr_20093_20120[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20083 === (3)))
{var inst_20080 = (state_20082[(2)]);var state_20082__$1 = state_20082;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20082__$1,inst_20080);
} else
{if((state_val_20083 === (12)))
{var inst_20046 = (state_20082[(8)]);var inst_20070 = cljs.core.vec.call(null,inst_20046);var state_20082__$1 = state_20082;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20082__$1,(15),out,inst_20070);
} else
{if((state_val_20083 === (2)))
{var state_20082__$1 = state_20082;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20082__$1,(4),ch);
} else
{if((state_val_20083 === (11)))
{var inst_20062 = (state_20082[(2)]);var inst_20063 = (new Array(n));var inst_20046 = inst_20063;var inst_20047 = (0);var state_20082__$1 = (function (){var statearr_20094 = state_20082;(statearr_20094[(10)] = inst_20062);
(statearr_20094[(7)] = inst_20047);
(statearr_20094[(8)] = inst_20046);
return statearr_20094;
})();var statearr_20095_20121 = state_20082__$1;(statearr_20095_20121[(2)] = null);
(statearr_20095_20121[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20083 === (9)))
{var inst_20046 = (state_20082[(8)]);var inst_20060 = cljs.core.vec.call(null,inst_20046);var state_20082__$1 = state_20082;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20082__$1,(11),out,inst_20060);
} else
{if((state_val_20083 === (5)))
{var inst_20047 = (state_20082[(7)]);var inst_20055 = (state_20082[(11)]);var inst_20046 = (state_20082[(8)]);var inst_20050 = (state_20082[(9)]);var inst_20054 = (inst_20046[inst_20047] = inst_20050);var inst_20055__$1 = (inst_20047 + (1));var inst_20056 = (inst_20055__$1 < n);var state_20082__$1 = (function (){var statearr_20096 = state_20082;(statearr_20096[(11)] = inst_20055__$1);
(statearr_20096[(12)] = inst_20054);
return statearr_20096;
})();if(cljs.core.truth_(inst_20056))
{var statearr_20097_20122 = state_20082__$1;(statearr_20097_20122[(1)] = (8));
} else
{var statearr_20098_20123 = state_20082__$1;(statearr_20098_20123[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20083 === (14)))
{var inst_20075 = (state_20082[(2)]);var inst_20076 = cljs.core.async.close_BANG_.call(null,out);var state_20082__$1 = (function (){var statearr_20100 = state_20082;(statearr_20100[(13)] = inst_20075);
return statearr_20100;
})();var statearr_20101_20124 = state_20082__$1;(statearr_20101_20124[(2)] = inst_20076);
(statearr_20101_20124[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20083 === (10)))
{var inst_20066 = (state_20082[(2)]);var state_20082__$1 = state_20082;var statearr_20102_20125 = state_20082__$1;(statearr_20102_20125[(2)] = inst_20066);
(statearr_20102_20125[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20083 === (8)))
{var inst_20055 = (state_20082[(11)]);var inst_20046 = (state_20082[(8)]);var tmp20099 = inst_20046;var inst_20046__$1 = tmp20099;var inst_20047 = inst_20055;var state_20082__$1 = (function (){var statearr_20103 = state_20082;(statearr_20103[(7)] = inst_20047);
(statearr_20103[(8)] = inst_20046__$1);
return statearr_20103;
})();var statearr_20104_20126 = state_20082__$1;(statearr_20104_20126[(2)] = null);
(statearr_20104_20126[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13184__auto___20112,out))
;return ((function (switch__13119__auto__,c__13184__auto___20112,out){
return (function() {
var state_machine__13120__auto__ = null;
var state_machine__13120__auto____0 = (function (){var statearr_20108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20108[(0)] = state_machine__13120__auto__);
(statearr_20108[(1)] = (1));
return statearr_20108;
});
var state_machine__13120__auto____1 = (function (state_20082){while(true){
var ret_value__13121__auto__ = (function (){try{while(true){
var result__13122__auto__ = switch__13119__auto__.call(null,state_20082);if(cljs.core.keyword_identical_QMARK_.call(null,result__13122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13122__auto__;
}
break;
}
}catch (e20109){if((e20109 instanceof Object))
{var ex__13123__auto__ = e20109;var statearr_20110_20127 = state_20082;(statearr_20110_20127[(5)] = ex__13123__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20082);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20109;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20128 = state_20082;
state_20082 = G__20128;
continue;
}
} else
{return ret_value__13121__auto__;
}
break;
}
});
state_machine__13120__auto__ = function(state_20082){
switch(arguments.length){
case 0:
return state_machine__13120__auto____0.call(this);
case 1:
return state_machine__13120__auto____1.call(this,state_20082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13120__auto____0;
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13120__auto____1;
return state_machine__13120__auto__;
})()
;})(switch__13119__auto__,c__13184__auto___20112,out))
})();var state__13186__auto__ = (function (){var statearr_20111 = f__13185__auto__.call(null);(statearr_20111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13184__auto___20112);
return statearr_20111;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13186__auto__);
});})(c__13184__auto___20112,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13184__auto___20271 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13184__auto___20271,out){
return (function (){var f__13185__auto__ = (function (){var switch__13119__auto__ = ((function (c__13184__auto___20271,out){
return (function (state_20241){var state_val_20242 = (state_20241[(1)]);if((state_val_20242 === (7)))
{var inst_20237 = (state_20241[(2)]);var state_20241__$1 = state_20241;var statearr_20243_20272 = state_20241__$1;(statearr_20243_20272[(2)] = inst_20237);
(statearr_20243_20272[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20242 === (1)))
{var inst_20200 = [];var inst_20201 = inst_20200;var inst_20202 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_20241__$1 = (function (){var statearr_20244 = state_20241;(statearr_20244[(7)] = inst_20201);
(statearr_20244[(8)] = inst_20202);
return statearr_20244;
})();var statearr_20245_20273 = state_20241__$1;(statearr_20245_20273[(2)] = null);
(statearr_20245_20273[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20242 === (4)))
{var inst_20205 = (state_20241[(9)]);var inst_20205__$1 = (state_20241[(2)]);var inst_20206 = (inst_20205__$1 == null);var inst_20207 = cljs.core.not.call(null,inst_20206);var state_20241__$1 = (function (){var statearr_20246 = state_20241;(statearr_20246[(9)] = inst_20205__$1);
return statearr_20246;
})();if(inst_20207)
{var statearr_20247_20274 = state_20241__$1;(statearr_20247_20274[(1)] = (5));
} else
{var statearr_20248_20275 = state_20241__$1;(statearr_20248_20275[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20242 === (15)))
{var inst_20231 = (state_20241[(2)]);var state_20241__$1 = state_20241;var statearr_20249_20276 = state_20241__$1;(statearr_20249_20276[(2)] = inst_20231);
(statearr_20249_20276[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20242 === (13)))
{var state_20241__$1 = state_20241;var statearr_20250_20277 = state_20241__$1;(statearr_20250_20277[(2)] = null);
(statearr_20250_20277[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20242 === (6)))
{var inst_20201 = (state_20241[(7)]);var inst_20226 = inst_20201.length;var inst_20227 = (inst_20226 > (0));var state_20241__$1 = state_20241;if(cljs.core.truth_(inst_20227))
{var statearr_20251_20278 = state_20241__$1;(statearr_20251_20278[(1)] = (12));
} else
{var statearr_20252_20279 = state_20241__$1;(statearr_20252_20279[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20242 === (3)))
{var inst_20239 = (state_20241[(2)]);var state_20241__$1 = state_20241;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20241__$1,inst_20239);
} else
{if((state_val_20242 === (12)))
{var inst_20201 = (state_20241[(7)]);var inst_20229 = cljs.core.vec.call(null,inst_20201);var state_20241__$1 = state_20241;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20241__$1,(15),out,inst_20229);
} else
{if((state_val_20242 === (2)))
{var state_20241__$1 = state_20241;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20241__$1,(4),ch);
} else
{if((state_val_20242 === (11)))
{var inst_20209 = (state_20241[(10)]);var inst_20205 = (state_20241[(9)]);var inst_20219 = (state_20241[(2)]);var inst_20220 = [];var inst_20221 = inst_20220.push(inst_20205);var inst_20201 = inst_20220;var inst_20202 = inst_20209;var state_20241__$1 = (function (){var statearr_20253 = state_20241;(statearr_20253[(11)] = inst_20221);
(statearr_20253[(7)] = inst_20201);
(statearr_20253[(8)] = inst_20202);
(statearr_20253[(12)] = inst_20219);
return statearr_20253;
})();var statearr_20254_20280 = state_20241__$1;(statearr_20254_20280[(2)] = null);
(statearr_20254_20280[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20242 === (9)))
{var inst_20201 = (state_20241[(7)]);var inst_20217 = cljs.core.vec.call(null,inst_20201);var state_20241__$1 = state_20241;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20241__$1,(11),out,inst_20217);
} else
{if((state_val_20242 === (5)))
{var inst_20202 = (state_20241[(8)]);var inst_20209 = (state_20241[(10)]);var inst_20205 = (state_20241[(9)]);var inst_20209__$1 = f.call(null,inst_20205);var inst_20210 = cljs.core._EQ_.call(null,inst_20209__$1,inst_20202);var inst_20211 = cljs.core.keyword_identical_QMARK_.call(null,inst_20202,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_20212 = (inst_20210) || (inst_20211);var state_20241__$1 = (function (){var statearr_20255 = state_20241;(statearr_20255[(10)] = inst_20209__$1);
return statearr_20255;
})();if(cljs.core.truth_(inst_20212))
{var statearr_20256_20281 = state_20241__$1;(statearr_20256_20281[(1)] = (8));
} else
{var statearr_20257_20282 = state_20241__$1;(statearr_20257_20282[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20242 === (14)))
{var inst_20234 = (state_20241[(2)]);var inst_20235 = cljs.core.async.close_BANG_.call(null,out);var state_20241__$1 = (function (){var statearr_20259 = state_20241;(statearr_20259[(13)] = inst_20234);
return statearr_20259;
})();var statearr_20260_20283 = state_20241__$1;(statearr_20260_20283[(2)] = inst_20235);
(statearr_20260_20283[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20242 === (10)))
{var inst_20224 = (state_20241[(2)]);var state_20241__$1 = state_20241;var statearr_20261_20284 = state_20241__$1;(statearr_20261_20284[(2)] = inst_20224);
(statearr_20261_20284[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20242 === (8)))
{var inst_20201 = (state_20241[(7)]);var inst_20209 = (state_20241[(10)]);var inst_20205 = (state_20241[(9)]);var inst_20214 = inst_20201.push(inst_20205);var tmp20258 = inst_20201;var inst_20201__$1 = tmp20258;var inst_20202 = inst_20209;var state_20241__$1 = (function (){var statearr_20262 = state_20241;(statearr_20262[(7)] = inst_20201__$1);
(statearr_20262[(8)] = inst_20202);
(statearr_20262[(14)] = inst_20214);
return statearr_20262;
})();var statearr_20263_20285 = state_20241__$1;(statearr_20263_20285[(2)] = null);
(statearr_20263_20285[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13184__auto___20271,out))
;return ((function (switch__13119__auto__,c__13184__auto___20271,out){
return (function() {
var state_machine__13120__auto__ = null;
var state_machine__13120__auto____0 = (function (){var statearr_20267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20267[(0)] = state_machine__13120__auto__);
(statearr_20267[(1)] = (1));
return statearr_20267;
});
var state_machine__13120__auto____1 = (function (state_20241){while(true){
var ret_value__13121__auto__ = (function (){try{while(true){
var result__13122__auto__ = switch__13119__auto__.call(null,state_20241);if(cljs.core.keyword_identical_QMARK_.call(null,result__13122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13122__auto__;
}
break;
}
}catch (e20268){if((e20268 instanceof Object))
{var ex__13123__auto__ = e20268;var statearr_20269_20286 = state_20241;(statearr_20269_20286[(5)] = ex__13123__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20241);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20268;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20287 = state_20241;
state_20241 = G__20287;
continue;
}
} else
{return ret_value__13121__auto__;
}
break;
}
});
state_machine__13120__auto__ = function(state_20241){
switch(arguments.length){
case 0:
return state_machine__13120__auto____0.call(this);
case 1:
return state_machine__13120__auto____1.call(this,state_20241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13120__auto____0;
state_machine__13120__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13120__auto____1;
return state_machine__13120__auto__;
})()
;})(switch__13119__auto__,c__13184__auto___20271,out))
})();var state__13186__auto__ = (function (){var statearr_20270 = f__13185__auto__.call(null);(statearr_20270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13184__auto___20271);
return statearr_20270;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13186__auto__);
});})(c__13184__auto___20271,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map