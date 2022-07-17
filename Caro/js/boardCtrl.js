var ctrl = {
	newGame : function() {
		currGame = new game(16, 16);
		board.writeBoard();
	},
	undo : function() {
		alert('Sao bạn cùi bắp thế ! Cố gắng thắng ván sau nhé ! ');
		this.newGame();
	},
	resign : function() {
		alert('Bạn đã chịu thua ');
		currGame.isGamming = false;
		this.newGame();
	},
	standUp : function() {
		if (currGame.Turn == X) {
			var bestMove = {row: 0, col:0};
			AIthink(X, bestMove);
			currGame.sq[bestMove.row][bestMove.col] = X;
			board.sqUpdate(bestMove.row, bestMove.col);
			referee.checkWin();
			currGame.Turn = O;
			currGame.noOfPiece++;
		} else {
			var bestMove = {row:0, col:0};
			AIthink(O, bestMove);
			currGame.sq[bestMove.row][bestMove.col] = O;
			board.sqUpdate(bestMove.row, bestMove.col);
			referee.checkWin();
			currGame.Turn = X;
			currGame.noOfPiece++;
		}
	}
};