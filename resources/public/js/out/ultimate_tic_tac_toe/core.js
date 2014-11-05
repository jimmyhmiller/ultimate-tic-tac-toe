// Compiled by ClojureScript 0.0-2371
goog.provide('ultimate_tic_tac_toe.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
ultimate_tic_tac_toe.core.generate_board = (function generate_board(p__16684){var vec__16686 = p__16684;var tl = cljs.core.nth.call(null,vec__16686,(0),null);var tm = cljs.core.nth.call(null,vec__16686,(1),null);var tr = cljs.core.nth.call(null,vec__16686,(2),null);var ml = cljs.core.nth.call(null,vec__16686,(3),null);var mm = cljs.core.nth.call(null,vec__16686,(4),null);var mr = cljs.core.nth.call(null,vec__16686,(5),null);var bl = cljs.core.nth.call(null,vec__16686,(6),null);var bm = cljs.core.nth.call(null,vec__16686,(7),null);var br = cljs.core.nth.call(null,vec__16686,(8),null);return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"tl","tl",-35265210),new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.Keyword(null,"bl","bl",8157834),new cljs.core.Keyword(null,"mr","mr",-1224518357),new cljs.core.Keyword(null,"tm","tm",-1949999569),new cljs.core.Keyword(null,"ml","ml",1909675057),new cljs.core.Keyword(null,"br","br",934104792),new cljs.core.Keyword(null,"bm","bm",457471643)],[mm,tl,tr,bl,mr,tm,ml,br,bm]);
});
if(typeof ultimate_tic_tac_toe.core.app_state !== 'undefined')
{} else
{ultimate_tic_tac_toe.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"current-board","current-board",-1741972735),new cljs.core.Keyword(null,"tl","tl",-35265210),new cljs.core.Keyword(null,"big","big",903550151),new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.Keyword(null,"bl","bl",8157834),new cljs.core.Keyword(null,"mr","mr",-1224518357),new cljs.core.Keyword(null,"tm","tm",-1949999569),new cljs.core.Keyword(null,"ml","ml",1909675057),new cljs.core.Keyword(null,"br","br",934104792),new cljs.core.Keyword(null,"bm","bm",457471643),new cljs.core.Keyword(null,"current-player","current-player",-970625153)],[ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),new cljs.core.Keyword(null,"_","_",1453416199),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),new cljs.core.Keyword(null,"X","X",1705996313)]));
}
ultimate_tic_tac_toe.core.board_full_QMARK_ = (function board_full_QMARK_(board){return cljs.core.not_any_QMARK_.call(null,(function (p1__16687_SHARP_){return cljs.core._EQ_.call(null,p1__16687_SHARP_,new cljs.core.Keyword(null,"_","_",1453416199));
}),cljs.core.vals.call(null,board));
});
ultimate_tic_tac_toe.core.switch_players = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null);
ultimate_tic_tac_toe.core.place_piece = (function place_piece(board,spot){if((cljs.core._EQ_.call(null,spot.call(null,board.call(null,cljs.core.deref.call(null,ultimate_tic_tac_toe.core.app_state))),new cljs.core.Keyword(null,"_","_",1453416199))) && (cljs.core.not_EQ_.call(null,board,new cljs.core.Keyword(null,"big","big",903550151))) && ((cljs.core._EQ_.call(null,cljs.core.deref.call(null,ultimate_tic_tac_toe.core.app_state).call(null,new cljs.core.Keyword(null,"current-board","current-board",-1741972735)),board)) || (cljs.core._EQ_.call(null,cljs.core.deref.call(null,ultimate_tic_tac_toe.core.app_state).call(null,new cljs.core.Keyword(null,"current-board","current-board",-1741972735)),new cljs.core.Keyword(null,"_","_",1453416199))) || (ultimate_tic_tac_toe.core.board_full_QMARK_.call(null,cljs.core.deref.call(null,ultimate_tic_tac_toe.core.app_state).call(null,cljs.core.deref.call(null,ultimate_tic_tac_toe.core.app_state).call(null,new cljs.core.Keyword(null,"current-board","current-board",-1741972735)))))))
{return cljs.core.swap_BANG_.call(null,ultimate_tic_tac_toe.core.app_state,(function (state){return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board,spot], null),cljs.core.deref.call(null,ultimate_tic_tac_toe.core.app_state).call(null,new cljs.core.Keyword(null,"current-player","current-player",-970625153))),new cljs.core.Keyword(null,"current-player","current-player",-970625153),ultimate_tic_tac_toe.core.switch_players.call(null,cljs.core.deref.call(null,ultimate_tic_tac_toe.core.app_state).call(null,new cljs.core.Keyword(null,"current-player","current-player",-970625153)))),new cljs.core.Keyword(null,"current-board","current-board",-1741972735),spot);
}));
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
ultimate_tic_tac_toe.core.create_cell = (function create_cell(board,spot,mark,size){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name.call(null,spot),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),size,new cljs.core.Keyword(null,"width","width",-384071477),size], null),ultimate_tic_tac_toe.core.mark_cell.call(null,mark,size)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return ultimate_tic_tac_toe.core.place_piece.call(null,board,spot);
})], null)], null);
});
ultimate_tic_tac_toe.core.create_row = (function create_row(board,row,marks,cell_size){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),cell_size,new cljs.core.Keyword(null,"width","width",-384071477),((cell_size + (6)) * (3))], null)], null),cljs.core.map.call(null,(function (spot){var spot__$1 = ultimate_tic_tac_toe.core.combine_keywords.call(null,row,spot);var mark = marks.call(null,spot__$1);return ultimate_tic_tac_toe.core.create_cell.call(null,board,spot__$1,mark,cell_size);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"r","r",-471384190)], null))], null);
});
ultimate_tic_tac_toe.core.create_board = (function create_board(board,app,p__16688,cell_size){var map__16690 = p__16688;var map__16690__$1 = ((cljs.core.seq_QMARK_.call(null,map__16690))?cljs.core.apply.call(null,cljs.core.hash_map,map__16690):map__16690);var position = map__16690__$1;var y = cljs.core.get.call(null,map__16690__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__16690__$1,new cljs.core.Keyword(null,"x","x",2099068185));var active_QMARK_ = (cljs.core._EQ_.call(null,app.call(null,new cljs.core.Keyword(null,"current-board","current-board",-1741972735)),board)) || (cljs.core._EQ_.call(null,app.call(null,new cljs.core.Keyword(null,"current-board","current-board",-1741972735)),new cljs.core.Keyword(null,"_","_",1453416199))) || (ultimate_tic_tac_toe.core.board_full_QMARK_.call(null,app.call(null,app.call(null,new cljs.core.Keyword(null,"current-board","current-board",-1741972735)))));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"left","left",-399115937),x], null),new cljs.core.Keyword(null,"class","class",-2030961996),((active_QMARK_)?"active":"")], null),cljs.core.map.call(null,((function (active_QMARK_,map__16690,map__16690__$1,position,y,x){
return (function (row,position__$1){return ultimate_tic_tac_toe.core.create_row.call(null,board,row,app.call(null,board),cell_size);
});})(active_QMARK_,map__16690,map__16690__$1,position,y,x))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"b","b",1482224470)], null))], null);
});
ultimate_tic_tac_toe.core.create_ultimate_boards = (function create_ultimate_boards(app,p__16691,cell_size){var map__16699 = p__16691;var map__16699__$1 = ((cljs.core.seq_QMARK_.call(null,map__16699))?cljs.core.apply.call(null,cljs.core.hash_map,map__16699):map__16699);var position = map__16699__$1;var y = cljs.core.get.call(null,map__16699__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__16699__$1,new cljs.core.Keyword(null,"x","x",2099068185));return cljs.core.map.call(null,((function (map__16699,map__16699__$1,position,y,x){
return (function (board,board_position){return ultimate_tic_tac_toe.core.create_board.call(null,board,app,board_position,(cell_size / (4)));
});})(map__16699,map__16699__$1,position,y,x))
,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tl","tl",-35265210),new cljs.core.Keyword(null,"ml","ml",1909675057),new cljs.core.Keyword(null,"bl","bl",8157834),new cljs.core.Keyword(null,"tm","tm",-1949999569),new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"bm","bm",457471643),new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.Keyword(null,"mr","mr",-1224518357),new cljs.core.Keyword(null,"br","br",934104792)], null),(function (){var iter__9834__auto__ = ((function (map__16699,map__16699__$1,position,y,x){
return (function iter__16700(s__16701){return (new cljs.core.LazySeq(null,((function (map__16699,map__16699__$1,position,y,x){
return (function (){var s__16701__$1 = s__16701;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16701__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var x1 = cljs.core.first.call(null,xs__4624__auto__);var iterys__9830__auto__ = ((function (s__16701__$1,x1,xs__4624__auto__,temp__4126__auto__,map__16699,map__16699__$1,position,y,x){
return (function iter__16702(s__16703){return (new cljs.core.LazySeq(null,((function (s__16701__$1,x1,xs__4624__auto__,temp__4126__auto__,map__16699,map__16699__$1,position,y,x){
return (function (){var s__16703__$1 = s__16703;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__16703__$1);if(temp__4126__auto____$1)
{var s__16703__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__16703__$2))
{var c__9832__auto__ = cljs.core.chunk_first.call(null,s__16703__$2);var size__9833__auto__ = cljs.core.count.call(null,c__9832__auto__);var b__16705 = cljs.core.chunk_buffer.call(null,size__9833__auto__);if((function (){var i__16704 = (0);while(true){
if((i__16704 < size__9833__auto__))
{var y1 = cljs.core._nth.call(null,c__9832__auto__,i__16704);cljs.core.chunk_append.call(null,b__16705,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((x1 + x) + (cell_size * 0.125)),new cljs.core.Keyword(null,"y","y",-1757859776),((y1 + y) + (cell_size * 0.125))], null));
{
var G__16706 = (i__16704 + (1));
i__16704 = G__16706;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16705),iter__16702.call(null,cljs.core.chunk_rest.call(null,s__16703__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16705),null);
}
} else
{var y1 = cljs.core.first.call(null,s__16703__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((x1 + x) + (cell_size * 0.125)),new cljs.core.Keyword(null,"y","y",-1757859776),((y1 + y) + (cell_size * 0.125))], null),iter__16702.call(null,cljs.core.rest.call(null,s__16703__$2)));
}
} else
{return null;
}
break;
}
});})(s__16701__$1,x1,xs__4624__auto__,temp__4126__auto__,map__16699,map__16699__$1,position,y,x))
,null,null));
});})(s__16701__$1,x1,xs__4624__auto__,temp__4126__auto__,map__16699,map__16699__$1,position,y,x))
;var fs__9831__auto__ = cljs.core.seq.call(null,iterys__9830__auto__.call(null,cljs.core.range.call(null,(0),(cell_size * (3)),cell_size)));if(fs__9831__auto__)
{return cljs.core.concat.call(null,fs__9831__auto__,iter__16700.call(null,cljs.core.rest.call(null,s__16701__$1)));
} else
{{
var G__16707 = cljs.core.rest.call(null,s__16701__$1);
s__16701__$1 = G__16707;
continue;
}
}
} else
{return null;
}
break;
}
});})(map__16699,map__16699__$1,position,y,x))
,null,null));
});})(map__16699,map__16699__$1,position,y,x))
;return iter__9834__auto__.call(null,cljs.core.range.call(null,(0),(cell_size * (3)),cell_size));
})());
});
ultimate_tic_tac_toe.core.main = (function main(){return om.core.root.call(null,(function (app,owner){if(typeof ultimate_tic_tac_toe.core.t16712 !== 'undefined')
{} else
{
/**
* @constructor
*/
ultimate_tic_tac_toe.core.t16712 = (function (owner,app,main,meta16713){
this.owner = owner;
this.app = app;
this.main = main;
this.meta16713 = meta16713;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ultimate_tic_tac_toe.core.t16712.cljs$lang$type = true;
ultimate_tic_tac_toe.core.t16712.cljs$lang$ctorStr = "ultimate-tic-tac-toe.core/t16712";
ultimate_tic_tac_toe.core.t16712.cljs$lang$ctorPrWriter = (function (this__9672__auto__,writer__9673__auto__,opt__9674__auto__){return cljs.core._write.call(null,writer__9673__auto__,"ultimate-tic-tac-toe.core/t16712");
});
ultimate_tic_tac_toe.core.t16712.prototype.om$core$IRender$ = true;
ultimate_tic_tac_toe.core.t16712.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,(function (){var attrs16715 = ultimate_tic_tac_toe.core.create_board.call(null,new cljs.core.Keyword(null,"big","big",903550151),self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),(230));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs16715))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["big"], null)], null),attrs16715)):{"className": "big"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16715))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16715)], null))));
})(),sablono.interpreter.interpret.call(null,ultimate_tic_tac_toe.core.create_ultimate_boards.call(null,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),(230))));
});
ultimate_tic_tac_toe.core.t16712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16714){var self__ = this;
var _16714__$1 = this;return self__.meta16713;
});
ultimate_tic_tac_toe.core.t16712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16714,meta16713__$1){var self__ = this;
var _16714__$1 = this;return (new ultimate_tic_tac_toe.core.t16712(self__.owner,self__.app,self__.main,meta16713__$1));
});
ultimate_tic_tac_toe.core.__GT_t16712 = (function __GT_t16712(owner__$1,app__$1,main__$1,meta16713){return (new ultimate_tic_tac_toe.core.t16712(owner__$1,app__$1,main__$1,meta16713));
});
}
return (new ultimate_tic_tac_toe.core.t16712(owner,app,main,null));
}),ultimate_tic_tac_toe.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
});

//# sourceMappingURL=core.js.map