// Compiled by ClojureScript 0.0-2371
goog.provide('ultimate_tic_tac_toe.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
ultimate_tic_tac_toe.core.generate_board = (function generate_board(p__16901){var vec__16903 = p__16901;var tl = cljs.core.nth.call(null,vec__16903,(0),null);var tm = cljs.core.nth.call(null,vec__16903,(1),null);var tr = cljs.core.nth.call(null,vec__16903,(2),null);var ml = cljs.core.nth.call(null,vec__16903,(3),null);var mm = cljs.core.nth.call(null,vec__16903,(4),null);var mr = cljs.core.nth.call(null,vec__16903,(5),null);var bl = cljs.core.nth.call(null,vec__16903,(6),null);var bm = cljs.core.nth.call(null,vec__16903,(7),null);var br = cljs.core.nth.call(null,vec__16903,(8),null);return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"tl","tl",-35265210),new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.Keyword(null,"bl","bl",8157834),new cljs.core.Keyword(null,"mr","mr",-1224518357),new cljs.core.Keyword(null,"tm","tm",-1949999569),new cljs.core.Keyword(null,"ml","ml",1909675057),new cljs.core.Keyword(null,"br","br",934104792),new cljs.core.Keyword(null,"bm","bm",457471643)],[mm,tl,tr,bl,mr,tm,ml,br,bm]);
});
if(typeof ultimate_tic_tac_toe.core.app_state !== 'undefined')
{} else
{ultimate_tic_tac_toe.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"current-board","current-board",-1741972735),new cljs.core.Keyword(null,"tl","tl",-35265210),new cljs.core.Keyword(null,"big","big",903550151),new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.Keyword(null,"bl","bl",8157834),new cljs.core.Keyword(null,"mr","mr",-1224518357),new cljs.core.Keyword(null,"tm","tm",-1949999569),new cljs.core.Keyword(null,"ml","ml",1909675057),new cljs.core.Keyword(null,"br","br",934104792),new cljs.core.Keyword(null,"bm","bm",457471643),new cljs.core.Keyword(null,"current-player","current-player",-970625153)],[ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),new cljs.core.Keyword(null,"_","_",1453416199),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),new cljs.core.Keyword(null,"X","X",1705996313)]));
}
ultimate_tic_tac_toe.core.board_full_QMARK_ = (function board_full_QMARK_(board){return cljs.core.not_any_QMARK_.call(null,(function (p1__16904_SHARP_){return cljs.core._EQ_.call(null,p1__16904_SHARP_,new cljs.core.Keyword(null,"_","_",1453416199));
}),cljs.core.vals.call(null,board));
});
ultimate_tic_tac_toe.core.active_board_QMARK_ = (function active_board_QMARK_(app,board){return (cljs.core._EQ_.call(null,app.call(null,new cljs.core.Keyword(null,"current-board","current-board",-1741972735)),board)) || (cljs.core._EQ_.call(null,app.call(null,new cljs.core.Keyword(null,"current-board","current-board",-1741972735)),new cljs.core.Keyword(null,"_","_",1453416199))) || (ultimate_tic_tac_toe.core.board_full_QMARK_.call(null,app.call(null,app.call(null,new cljs.core.Keyword(null,"current-board","current-board",-1741972735)))));
});
ultimate_tic_tac_toe.core.switch_players = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null);
ultimate_tic_tac_toe.core.place_piece = (function place_piece(app,board,spot){if((cljs.core._EQ_.call(null,spot.call(null,board.call(null,cljs.core.deref.call(null,app))),new cljs.core.Keyword(null,"_","_",1453416199))) && (cljs.core.not_EQ_.call(null,board,new cljs.core.Keyword(null,"big","big",903550151))) && (ultimate_tic_tac_toe.core.active_board_QMARK_.call(null,cljs.core.deref.call(null,app),board)))
{var current_player = cljs.core.deref.call(null,app).call(null,new cljs.core.Keyword(null,"current-player","current-player",-970625153));om.core.update_BANG_.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board,spot], null),current_player);
om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"current-player","current-player",-970625153),ultimate_tic_tac_toe.core.switch_players);
return om.core.update_BANG_.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-board","current-board",-1741972735)], null),spot);
} else
{return null;
}
});
ultimate_tic_tac_toe.core.combine_keywords = (function combine_keywords(k1,k2){return cljs.core.keyword.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k1))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k2))));
});
ultimate_tic_tac_toe.core.mark_cell = (function mark_cell(mark,size){if(cljs.core._EQ_.call(null,mark,new cljs.core.Keyword(null,"_","_",1453416199)))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core._EQ_.call(null,mark,new cljs.core.Keyword(null,"X","X",1705996313)))
{return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),"url(images/X.png)",new cljs.core.Keyword(null,"background-size","background-size",-1248630243),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((size - (20)))+"px "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((size - (20)))+"px"),new cljs.core.Keyword(null,"background-repeat","background-repeat",-387201191),"no-repeat",new cljs.core.Keyword(null,"background-position","background-position",1112702746),"60% 60%"], null);
} else
{if(cljs.core._EQ_.call(null,mark,new cljs.core.Keyword(null,"O","O",795252742)))
{return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),"url(images/O.png)",new cljs.core.Keyword(null,"background-size","background-size",-1248630243),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((size - (20)))+"px "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((size - (20)))+"px"),new cljs.core.Keyword(null,"background-repeat","background-repeat",-387201191),"no-repeat",new cljs.core.Keyword(null,"background-position","background-position",1112702746),"60% 60%"], null);
} else
{return null;
}
}
}
});
ultimate_tic_tac_toe.core.create_cell = (function create_cell(app,board,spot,mark,size){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name.call(null,spot),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),size,new cljs.core.Keyword(null,"width","width",-384071477),size], null),ultimate_tic_tac_toe.core.mark_cell.call(null,mark,size)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return ultimate_tic_tac_toe.core.place_piece.call(null,app,board,spot);
})], null)], null);
});
ultimate_tic_tac_toe.core.create_row = (function create_row(app,board,row,marks,cell_size){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),cell_size,new cljs.core.Keyword(null,"width","width",-384071477),((cell_size + (6)) * (3))], null)], null),cljs.core.map.call(null,(function (spot){var spot__$1 = ultimate_tic_tac_toe.core.combine_keywords.call(null,row,spot);var mark = marks.call(null,spot__$1);return ultimate_tic_tac_toe.core.create_cell.call(null,app,board,spot__$1,mark,cell_size);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"r","r",-471384190)], null))], null);
});
ultimate_tic_tac_toe.core.create_board = (function create_board(app,board,p__16905,cell_size){var map__16907 = p__16905;var map__16907__$1 = ((cljs.core.seq_QMARK_.call(null,map__16907))?cljs.core.apply.call(null,cljs.core.hash_map,map__16907):map__16907);var position = map__16907__$1;var y = cljs.core.get.call(null,map__16907__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__16907__$1,new cljs.core.Keyword(null,"x","x",2099068185));var active_QMARK_ = ultimate_tic_tac_toe.core.active_board_QMARK_.call(null,app,board);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"left","left",-399115937),x], null),new cljs.core.Keyword(null,"class","class",-2030961996),((active_QMARK_)?"active":"")], null),cljs.core.map.call(null,((function (active_QMARK_,map__16907,map__16907__$1,position,y,x){
return (function (row,position__$1){return ultimate_tic_tac_toe.core.create_row.call(null,app,board,row,app.call(null,board),cell_size);
});})(active_QMARK_,map__16907,map__16907__$1,position,y,x))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"b","b",1482224470)], null))], null);
});
ultimate_tic_tac_toe.core.create_ultimate_boards = (function create_ultimate_boards(app,p__16908,cell_size){var map__16916 = p__16908;var map__16916__$1 = ((cljs.core.seq_QMARK_.call(null,map__16916))?cljs.core.apply.call(null,cljs.core.hash_map,map__16916):map__16916);var position = map__16916__$1;var y = cljs.core.get.call(null,map__16916__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__16916__$1,new cljs.core.Keyword(null,"x","x",2099068185));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.big","span.big",963687293),ultimate_tic_tac_toe.core.create_board.call(null,app,new cljs.core.Keyword(null,"big","big",903550151),position,cell_size)], null),cljs.core.map.call(null,((function (map__16916,map__16916__$1,position,y,x){
return (function (board,board_position){return ultimate_tic_tac_toe.core.create_board.call(null,app,board,board_position,(cell_size / (4)));
});})(map__16916,map__16916__$1,position,y,x))
,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tl","tl",-35265210),new cljs.core.Keyword(null,"ml","ml",1909675057),new cljs.core.Keyword(null,"bl","bl",8157834),new cljs.core.Keyword(null,"tm","tm",-1949999569),new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"bm","bm",457471643),new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.Keyword(null,"mr","mr",-1224518357),new cljs.core.Keyword(null,"br","br",934104792)], null),(function (){var iter__9836__auto__ = ((function (map__16916,map__16916__$1,position,y,x){
return (function iter__16917(s__16918){return (new cljs.core.LazySeq(null,((function (map__16916,map__16916__$1,position,y,x){
return (function (){var s__16918__$1 = s__16918;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16918__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var x1 = cljs.core.first.call(null,xs__4624__auto__);var iterys__9832__auto__ = ((function (s__16918__$1,x1,xs__4624__auto__,temp__4126__auto__,map__16916,map__16916__$1,position,y,x){
return (function iter__16919(s__16920){return (new cljs.core.LazySeq(null,((function (s__16918__$1,x1,xs__4624__auto__,temp__4126__auto__,map__16916,map__16916__$1,position,y,x){
return (function (){var s__16920__$1 = s__16920;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__16920__$1);if(temp__4126__auto____$1)
{var s__16920__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__16920__$2))
{var c__9834__auto__ = cljs.core.chunk_first.call(null,s__16920__$2);var size__9835__auto__ = cljs.core.count.call(null,c__9834__auto__);var b__16922 = cljs.core.chunk_buffer.call(null,size__9835__auto__);if((function (){var i__16921 = (0);while(true){
if((i__16921 < size__9835__auto__))
{var y1 = cljs.core._nth.call(null,c__9834__auto__,i__16921);cljs.core.chunk_append.call(null,b__16922,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((x1 + x) + (cell_size * 0.125)),new cljs.core.Keyword(null,"y","y",-1757859776),((y1 + y) + (cell_size * 0.125))], null));
{
var G__16923 = (i__16921 + (1));
i__16921 = G__16923;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16922),iter__16919.call(null,cljs.core.chunk_rest.call(null,s__16920__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16922),null);
}
} else
{var y1 = cljs.core.first.call(null,s__16920__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((x1 + x) + (cell_size * 0.125)),new cljs.core.Keyword(null,"y","y",-1757859776),((y1 + y) + (cell_size * 0.125))], null),iter__16919.call(null,cljs.core.rest.call(null,s__16920__$2)));
}
} else
{return null;
}
break;
}
});})(s__16918__$1,x1,xs__4624__auto__,temp__4126__auto__,map__16916,map__16916__$1,position,y,x))
,null,null));
});})(s__16918__$1,x1,xs__4624__auto__,temp__4126__auto__,map__16916,map__16916__$1,position,y,x))
;var fs__9833__auto__ = cljs.core.seq.call(null,iterys__9832__auto__.call(null,cljs.core.range.call(null,(0),(cell_size * (3)),cell_size)));if(fs__9833__auto__)
{return cljs.core.concat.call(null,fs__9833__auto__,iter__16917.call(null,cljs.core.rest.call(null,s__16918__$1)));
} else
{{
var G__16924 = cljs.core.rest.call(null,s__16918__$1);
s__16918__$1 = G__16924;
continue;
}
}
} else
{return null;
}
break;
}
});})(map__16916,map__16916__$1,position,y,x))
,null,null));
});})(map__16916,map__16916__$1,position,y,x))
;return iter__9836__auto__.call(null,cljs.core.range.call(null,(0),(cell_size * (3)),cell_size));
})())], null);
});
ultimate_tic_tac_toe.core.main = (function main(){return om.core.root.call(null,(function (app,owner){if(typeof ultimate_tic_tac_toe.core.t16928 !== 'undefined')
{} else
{
/**
* @constructor
*/
ultimate_tic_tac_toe.core.t16928 = (function (owner,app,main,meta16929){
this.owner = owner;
this.app = app;
this.main = main;
this.meta16929 = meta16929;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ultimate_tic_tac_toe.core.t16928.cljs$lang$type = true;
ultimate_tic_tac_toe.core.t16928.cljs$lang$ctorStr = "ultimate-tic-tac-toe.core/t16928";
ultimate_tic_tac_toe.core.t16928.cljs$lang$ctorPrWriter = (function (this__9674__auto__,writer__9675__auto__,opt__9676__auto__){return cljs.core._write.call(null,writer__9675__auto__,"ultimate-tic-tac-toe.core/t16928");
});
ultimate_tic_tac_toe.core.t16928.prototype.om$core$IRender$ = true;
ultimate_tic_tac_toe.core.t16928.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret.call(null,ultimate_tic_tac_toe.core.create_ultimate_boards.call(null,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),(230)));
});
ultimate_tic_tac_toe.core.t16928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16930){var self__ = this;
var _16930__$1 = this;return self__.meta16929;
});
ultimate_tic_tac_toe.core.t16928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16930,meta16929__$1){var self__ = this;
var _16930__$1 = this;return (new ultimate_tic_tac_toe.core.t16928(self__.owner,self__.app,self__.main,meta16929__$1));
});
ultimate_tic_tac_toe.core.__GT_t16928 = (function __GT_t16928(owner__$1,app__$1,main__$1,meta16929){return (new ultimate_tic_tac_toe.core.t16928(owner__$1,app__$1,main__$1,meta16929));
});
}
return (new ultimate_tic_tac_toe.core.t16928(owner,app,main,null));
}),ultimate_tic_tac_toe.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
});

//# sourceMappingURL=core.js.map