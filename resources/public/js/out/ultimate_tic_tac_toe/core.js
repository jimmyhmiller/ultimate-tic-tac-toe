// Compiled by ClojureScript 0.0-2371
goog.provide('ultimate_tic_tac_toe.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
ultimate_tic_tac_toe.core.generate_board = (function generate_board(p__17184){var vec__17186 = p__17184;var tl = cljs.core.nth.call(null,vec__17186,(0),null);var tm = cljs.core.nth.call(null,vec__17186,(1),null);var tr = cljs.core.nth.call(null,vec__17186,(2),null);var ml = cljs.core.nth.call(null,vec__17186,(3),null);var mm = cljs.core.nth.call(null,vec__17186,(4),null);var mr = cljs.core.nth.call(null,vec__17186,(5),null);var bl = cljs.core.nth.call(null,vec__17186,(6),null);var bm = cljs.core.nth.call(null,vec__17186,(7),null);var br = cljs.core.nth.call(null,vec__17186,(8),null);return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"tl","tl",-35265210),new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.Keyword(null,"bl","bl",8157834),new cljs.core.Keyword(null,"mr","mr",-1224518357),new cljs.core.Keyword(null,"tm","tm",-1949999569),new cljs.core.Keyword(null,"ml","ml",1909675057),new cljs.core.Keyword(null,"br","br",934104792),new cljs.core.Keyword(null,"bm","bm",457471643)],[mm,tl,tr,bl,mr,tm,ml,br,bm]);
});
if(typeof ultimate_tic_tac_toe.core.app_state !== 'undefined')
{} else
{ultimate_tic_tac_toe.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"current-board","current-board",-1741972735),new cljs.core.Keyword(null,"tl","tl",-35265210),new cljs.core.Keyword(null,"big","big",903550151),new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.Keyword(null,"bl","bl",8157834),new cljs.core.Keyword(null,"mr","mr",-1224518357),new cljs.core.Keyword(null,"tm","tm",-1949999569),new cljs.core.Keyword(null,"ml","ml",1909675057),new cljs.core.Keyword(null,"br","br",934104792),new cljs.core.Keyword(null,"bm","bm",457471643),new cljs.core.Keyword(null,"current-player","current-player",-970625153)],[ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),new cljs.core.Keyword(null,"_","_",1453416199),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),ultimate_tic_tac_toe.core.generate_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)),new cljs.core.Keyword(null,"X","X",1705996313)]));
}
ultimate_tic_tac_toe.core.winning_positions = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.Keyword(null,"tm","tm",-1949999569),new cljs.core.Keyword(null,"tl","tl",-35265210)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mr","mr",-1224518357),new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"ml","ml",1909675057)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792),new cljs.core.Keyword(null,"bm","bm",457471643),new cljs.core.Keyword(null,"bl","bl",8157834)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.Keyword(null,"mr","mr",-1224518357),new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tm","tm",-1949999569),new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"bm","bm",457471643)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tl","tl",-35265210),new cljs.core.Keyword(null,"ml","ml",1909675057),new cljs.core.Keyword(null,"bl","bl",8157834)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tl","tl",-35265210),new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bl","bl",8157834),new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"tr","tr",-1424774646)], null)], null);
ultimate_tic_tac_toe.core.positions_from_board = (function positions_from_board(board,pos){return cljs.core.vals.call(null,cljs.core.select_keys.call(null,board,pos));
});
ultimate_tic_tac_toe.core.winner = (function winner(row){if(((cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_","_",1453416199),null], null), null),row) == null)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.distinct.call(null,row)),(1))))
{return cljs.core.first.call(null,row);
} else
{return null;
}
});
ultimate_tic_tac_toe.core.app_history = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,ultimate_tic_tac_toe.core.app_state)], null));
ultimate_tic_tac_toe.core.replaying = cljs.core.atom.call(null,false);
cljs.core.add_watch.call(null,ultimate_tic_tac_toe.core.app_state,new cljs.core.Keyword(null,"history","history",-247395220),(function (_,___$1,___$2,n){if(cljs.core.truth_((function (){var or__9093__auto__ = cljs.core._EQ_.call(null,cljs.core.last.call(null,cljs.core.deref.call(null,ultimate_tic_tac_toe.core.app_history)),n);if(or__9093__auto__)
{return or__9093__auto__;
} else
{return cljs.core.deref.call(null,ultimate_tic_tac_toe.core.replaying);
}
})()))
{return null;
} else
{return cljs.core.swap_BANG_.call(null,ultimate_tic_tac_toe.core.app_history,cljs.core.conj,n);
}
}));
ultimate_tic_tac_toe.core.undo = (function undo(){if((cljs.core.count.call(null,cljs.core.deref.call(null,ultimate_tic_tac_toe.core.app_history)) > (1)))
{cljs.core.swap_BANG_.call(null,ultimate_tic_tac_toe.core.app_history,cljs.core.pop);
return cljs.core.reset_BANG_.call(null,ultimate_tic_tac_toe.core.app_state,cljs.core.last.call(null,cljs.core.deref.call(null,ultimate_tic_tac_toe.core.app_history)));
} else
{return null;
}
});
ultimate_tic_tac_toe.core.replay = (function() {
var replay = null;
var replay__0 = (function (){return replay.call(null,cljs.core.deref.call(null,ultimate_tic_tac_toe.core.app_history));
});
var replay__1 = (function (history){if(cljs.core.empty_QMARK_.call(null,history))
{return cljs.core.reset_BANG_.call(null,ultimate_tic_tac_toe.core.replaying,false);
} else
{cljs.core.reset_BANG_.call(null,ultimate_tic_tac_toe.core.replaying,true);
cljs.core.reset_BANG_.call(null,ultimate_tic_tac_toe.core.app_state,cljs.core.first.call(null,history));
return setTimeout(cljs.core.partial.call(null,replay,cljs.core.rest.call(null,history)),(1000));
}
});
replay = function(history){
switch(arguments.length){
case 0:
return replay__0.call(this);
case 1:
return replay__1.call(this,history);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replay.cljs$core$IFn$_invoke$arity$0 = replay__0;
replay.cljs$core$IFn$_invoke$arity$1 = replay__1;
return replay;
})()
;
ultimate_tic_tac_toe.core.replay_n = (function replay_n(n){var history = cljs.core.deref.call(null,ultimate_tic_tac_toe.core.app_history);return ultimate_tic_tac_toe.core.replay.call(null,cljs.core.drop.call(null,(cljs.core.count.call(null,history) - (n + (1))),history));
});
ultimate_tic_tac_toe.core.board_full_QMARK_ = (function board_full_QMARK_(board){return cljs.core.not_any_QMARK_.call(null,(function (p1__17187_SHARP_){return cljs.core._EQ_.call(null,p1__17187_SHARP_,new cljs.core.Keyword(null,"_","_",1453416199));
}),cljs.core.vals.call(null,board));
});
ultimate_tic_tac_toe.core.active_board_QMARK_ = (function active_board_QMARK_(app,board){return (cljs.core._EQ_.call(null,app.call(null,new cljs.core.Keyword(null,"current-board","current-board",-1741972735)),board)) || (cljs.core._EQ_.call(null,app.call(null,new cljs.core.Keyword(null,"current-board","current-board",-1741972735)),new cljs.core.Keyword(null,"_","_",1453416199))) || (ultimate_tic_tac_toe.core.board_full_QMARK_.call(null,app.call(null,app.call(null,new cljs.core.Keyword(null,"current-board","current-board",-1741972735)))));
});
ultimate_tic_tac_toe.core.switch_players = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null);
ultimate_tic_tac_toe.core.place_piece = (function place_piece(app,board,spot){if((cljs.core._EQ_.call(null,spot.call(null,board.call(null,cljs.core.deref.call(null,app))),new cljs.core.Keyword(null,"_","_",1453416199))) && (cljs.core.not_EQ_.call(null,board,new cljs.core.Keyword(null,"big","big",903550151))) && (ultimate_tic_tac_toe.core.active_board_QMARK_.call(null,cljs.core.deref.call(null,app),board)))
{var current_player = cljs.core.deref.call(null,app).call(null,new cljs.core.Keyword(null,"current-player","current-player",-970625153));return om.core.update_BANG_.call(null,app,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [board,spot], null),current_player),new cljs.core.Keyword(null,"current-player","current-player",-970625153),ultimate_tic_tac_toe.core.switch_players.call(null,current_player)),new cljs.core.Keyword(null,"current-board","current-board",-1741972735),spot));
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
ultimate_tic_tac_toe.core.create_board = (function create_board(app,board,p__17188,cell_size){var map__17190 = p__17188;var map__17190__$1 = ((cljs.core.seq_QMARK_.call(null,map__17190))?cljs.core.apply.call(null,cljs.core.hash_map,map__17190):map__17190);var position = map__17190__$1;var y = cljs.core.get.call(null,map__17190__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__17190__$1,new cljs.core.Keyword(null,"x","x",2099068185));var active_QMARK_ = ultimate_tic_tac_toe.core.active_board_QMARK_.call(null,app,board);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"left","left",-399115937),x], null),new cljs.core.Keyword(null,"class","class",-2030961996),((active_QMARK_)?"active":"")], null),cljs.core.map.call(null,((function (active_QMARK_,map__17190,map__17190__$1,position,y,x){
return (function (row,position__$1){return ultimate_tic_tac_toe.core.create_row.call(null,app,board,row,app.call(null,board),cell_size);
});})(active_QMARK_,map__17190,map__17190__$1,position,y,x))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"b","b",1482224470)], null))], null);
});
ultimate_tic_tac_toe.core.create_ultimate_boards = (function create_ultimate_boards(app,p__17191,cell_size){var map__17199 = p__17191;var map__17199__$1 = ((cljs.core.seq_QMARK_.call(null,map__17199))?cljs.core.apply.call(null,cljs.core.hash_map,map__17199):map__17199);var position = map__17199__$1;var y = cljs.core.get.call(null,map__17199__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__17199__$1,new cljs.core.Keyword(null,"x","x",2099068185));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.big","span.big",963687293),ultimate_tic_tac_toe.core.create_board.call(null,app,new cljs.core.Keyword(null,"big","big",903550151),position,cell_size)], null),cljs.core.map.call(null,((function (map__17199,map__17199__$1,position,y,x){
return (function (board,board_position){return ultimate_tic_tac_toe.core.create_board.call(null,app,board,board_position,(cell_size / (4)));
});})(map__17199,map__17199__$1,position,y,x))
,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tl","tl",-35265210),new cljs.core.Keyword(null,"ml","ml",1909675057),new cljs.core.Keyword(null,"bl","bl",8157834),new cljs.core.Keyword(null,"tm","tm",-1949999569),new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"bm","bm",457471643),new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.Keyword(null,"mr","mr",-1224518357),new cljs.core.Keyword(null,"br","br",934104792)], null),(function (){var iter__9832__auto__ = ((function (map__17199,map__17199__$1,position,y,x){
return (function iter__17200(s__17201){return (new cljs.core.LazySeq(null,((function (map__17199,map__17199__$1,position,y,x){
return (function (){var s__17201__$1 = s__17201;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17201__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var x1 = cljs.core.first.call(null,xs__4624__auto__);var iterys__9828__auto__ = ((function (s__17201__$1,x1,xs__4624__auto__,temp__4126__auto__,map__17199,map__17199__$1,position,y,x){
return (function iter__17202(s__17203){return (new cljs.core.LazySeq(null,((function (s__17201__$1,x1,xs__4624__auto__,temp__4126__auto__,map__17199,map__17199__$1,position,y,x){
return (function (){var s__17203__$1 = s__17203;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__17203__$1);if(temp__4126__auto____$1)
{var s__17203__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17203__$2))
{var c__9830__auto__ = cljs.core.chunk_first.call(null,s__17203__$2);var size__9831__auto__ = cljs.core.count.call(null,c__9830__auto__);var b__17205 = cljs.core.chunk_buffer.call(null,size__9831__auto__);if((function (){var i__17204 = (0);while(true){
if((i__17204 < size__9831__auto__))
{var y1 = cljs.core._nth.call(null,c__9830__auto__,i__17204);cljs.core.chunk_append.call(null,b__17205,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((x1 + x) + (cell_size * 0.125)),new cljs.core.Keyword(null,"y","y",-1757859776),((y1 + y) + (cell_size * 0.125))], null));
{
var G__17206 = (i__17204 + (1));
i__17204 = G__17206;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17205),iter__17202.call(null,cljs.core.chunk_rest.call(null,s__17203__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17205),null);
}
} else
{var y1 = cljs.core.first.call(null,s__17203__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((x1 + x) + (cell_size * 0.125)),new cljs.core.Keyword(null,"y","y",-1757859776),((y1 + y) + (cell_size * 0.125))], null),iter__17202.call(null,cljs.core.rest.call(null,s__17203__$2)));
}
} else
{return null;
}
break;
}
});})(s__17201__$1,x1,xs__4624__auto__,temp__4126__auto__,map__17199,map__17199__$1,position,y,x))
,null,null));
});})(s__17201__$1,x1,xs__4624__auto__,temp__4126__auto__,map__17199,map__17199__$1,position,y,x))
;var fs__9829__auto__ = cljs.core.seq.call(null,iterys__9828__auto__.call(null,cljs.core.range.call(null,(0),(cell_size * (3)),cell_size)));if(fs__9829__auto__)
{return cljs.core.concat.call(null,fs__9829__auto__,iter__17200.call(null,cljs.core.rest.call(null,s__17201__$1)));
} else
{{
var G__17207 = cljs.core.rest.call(null,s__17201__$1);
s__17201__$1 = G__17207;
continue;
}
}
} else
{return null;
}
break;
}
});})(map__17199,map__17199__$1,position,y,x))
,null,null));
});})(map__17199,map__17199__$1,position,y,x))
;return iter__9832__auto__.call(null,cljs.core.range.call(null,(0),(cell_size * (3)),cell_size));
})())], null);
});
ultimate_tic_tac_toe.core.main = (function main(){return om.core.root.call(null,(function (app,owner){if(typeof ultimate_tic_tac_toe.core.t17211 !== 'undefined')
{} else
{
/**
* @constructor
*/
ultimate_tic_tac_toe.core.t17211 = (function (owner,app,main,meta17212){
this.owner = owner;
this.app = app;
this.main = main;
this.meta17212 = meta17212;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ultimate_tic_tac_toe.core.t17211.cljs$lang$type = true;
ultimate_tic_tac_toe.core.t17211.cljs$lang$ctorStr = "ultimate-tic-tac-toe.core/t17211";
ultimate_tic_tac_toe.core.t17211.cljs$lang$ctorPrWriter = (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"ultimate-tic-tac-toe.core/t17211");
});
ultimate_tic_tac_toe.core.t17211.prototype.om$core$IRender$ = true;
ultimate_tic_tac_toe.core.t17211.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret.call(null,ultimate_tic_tac_toe.core.create_ultimate_boards.call(null,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),(230)));
});
ultimate_tic_tac_toe.core.t17211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17213){var self__ = this;
var _17213__$1 = this;return self__.meta17212;
});
ultimate_tic_tac_toe.core.t17211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17213,meta17212__$1){var self__ = this;
var _17213__$1 = this;return (new ultimate_tic_tac_toe.core.t17211(self__.owner,self__.app,self__.main,meta17212__$1));
});
ultimate_tic_tac_toe.core.__GT_t17211 = (function __GT_t17211(owner__$1,app__$1,main__$1,meta17212){return (new ultimate_tic_tac_toe.core.t17211(owner__$1,app__$1,main__$1,meta17212));
});
}
return (new ultimate_tic_tac_toe.core.t17211(owner,app,main,null));
}),ultimate_tic_tac_toe.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
});

//# sourceMappingURL=core.js.map