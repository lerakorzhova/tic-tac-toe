class TicTacToe {
    constructor() {
        this.curPlayer = 'x';
        this.gameField = [[null, null, null],
                          [null, null, null],
                          [null, null, null]];

    }

    getCurrentPlayerSymbol() {
        return this.curPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex] == null) {
            this.gameField[rowIndex][columnIndex] = this.curPlayer;
            if (this.curPlayer === 'x') this.curPlayer = 'o';
            else this.curPlayer = 'x';
        }
    }

    isFinished() {
        if (this.getWinner()!==null || this.isDraw() === true) return true;
        return false;
    }



    getWinner() {
        if (this.gameField[0][0] === this.gameField[0][1] && this.gameField[0][1] === this.gameField[0][2]) return this.gameField[0][0];

        if (this.gameField[1][0] == this.gameField[1][1] && this.gameField[1][1] == this.gameField[1][2]) return this.gameField[1][0];

        if (this.gameField[2][0] == this.gameField[2][1] && this.gameField[2][1] == this.gameField[2][2]) return this.gameField[2][0];

        if (this.gameField[0][0] == this.gameField[1][0] && this.gameField[1][0] == this.gameField[2][0]) return this.gameField[0][0];

        if (this.gameField[0][1] == this.gameField[1][1] && this.gameField[1][1] == this.gameField[2][1]) return this.gameField[0][1];

        if (this.gameField[0][2] == this.gameField[1][2] && this.gameField[1][2] == this.gameField[2][2]) return this.gameField[0][2];

        if (this.gameField[0][0] == this.gameField[1][1] && this.gameField[1][1] == this.gameField[2][2]) return this.gameField[0][0];

        if (this.gameField[0][2] === this.gameField[1][1] && this.gameField[1][1] === this.gameField[2][0]) {
            return this.gameField[0][2];
        }

        return null;
    }

    noMoreTurns() {
        var length = this.gameField.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length; j++) {
                if (this.gameField[i][j] === null) {
                    return false;
                    break;
                }
            }
        }
        return true;
    }

    isDraw() {
        if (this.noMoreTurns() === true && this.getWinner() === null) return true;
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
