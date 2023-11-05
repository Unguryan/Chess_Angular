import { Injectable } from '@angular/core';
import { BoardCell } from '../models/boardCell';
import { ChessUnit, UnitType } from '../models/chessUnit';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor() { }

  CreateGame() : Game{
    var game = new Game();
    game.WhiteWin = null;
    game.WhiteMove = true;
    game.board = this.CreateBoard();
    return game;
  }

  GetUnitImage(cell: BoardCell): string | null{
    if(cell.Unit == null){
      return null;
    }

    var color: string = cell.Unit.Color == 0 ? "White" : "Black"; 
    var type: string = UnitType[cell.Unit.Type]; 

    return `assets/img/${color}_${type}.png`;
  }

  SelectCell(selectedCell: BoardCell, game: Game) : boolean | null{

    return null;

    
    //if no game created
    if(selectedCell == null || game == null || game.board == null){
      return null;
    }

    // //first selection
    // if(this.selectedCell == null && selectedCell.Unit != null){
    //   if(selectedCell.Unit.Color == 0 && this.whiteMove){
    //     this.selectedCell = selectedCell;
    //     selectedCell.isSelected = true;
    //     return true;
    //   }

    //   if(selectedCell.Unit.Color == 1 && !this.whiteMove){
    //     this.selectedCell = selectedCell;
    //     selectedCell.isSelected = true;
    //     return true;
    //   }
    // }
    
    // // if(selectedCell.Unit == null){
    // //   return;
    // // }

    // if(this.selectedCell != null && !selectedCell.isPossibleMove){
    //   for (let i = 0; i < this.board.length; i++) {
    //     for (let j = 0; j < this.board[i].length; j++) {
    //       const element = this.board[i][j];
    //       element.isPossibleMove = false;
    //       element.isSelected = false;
    //     }
    //   }

    //   if(selectedCell.Unit == null){
    //     return false;
    //   }

    //   if(selectedCell.Unit.Color == 0 && this.whiteMove){
    //     this.selectedCell = selectedCell;
    //     selectedCell.isSelected = true;
    //     return true;
    //   }

    //   if(selectedCell.Unit.Color == 1 && !this.whiteMove){
    //     this.selectedCell = selectedCell;
    //     selectedCell.isSelected = true;
    //     return true;
    //   }
    // }

    // if(this.selectedCell != null && selectedCell.isPossibleMove){

    // }

    
  }

  private CreateBoard() : BoardCell[][]{
    var counter = false;
    return [...Array(8)].map((x, j) => {
      return Array(8).fill(null).map((y, i) => {
          // var x_axic = X_axic[`${String.fromCharCode(65 + i)}` as keyof typeof X_axic];
          var x_axic = i + 1;
          var y_axic = 8 - j;
          // var color = counter ? 1 : 0;
          // counter = !counter;

          var color = (x_axic + y_axic) % 2 == 0 ? 1 : 0;
          var unit = this.GetUnit(x_axic, y_axic); 
          return new BoardCell(color, unit, x_axic, y_axic);
      });
    });
  }

  private GetUnit(x: number, y: number) : ChessUnit | null {
    //black
    if(y == 8){
      if(x == 1 || x == 8){
        return new ChessUnit(1, UnitType.Rook);
      }
      if(x == 2 || x == 7){
        return new ChessUnit(1, UnitType.Knight);
      }
      if(x == 3 || x == 6){
        return new ChessUnit(1, UnitType.Bishop);
      }

      if(x == 4){
        return new ChessUnit(1, UnitType.Queen);
      }

      return new ChessUnit(1, UnitType.King);
    }

    //black pawn line
    if(y == 7){
      return new ChessUnit(1, UnitType.Pawn);
    }

    //white
    if(y == 1){
      if(x == 1 || x == 8){
        return new ChessUnit(0, UnitType.Rook);
      }
      if(x == 2 || x == 7){
        return new ChessUnit(0, UnitType.Knight);
      }
      if(x == 3 || x == 6){
        return new ChessUnit(0, UnitType.Bishop);
      }

      if(x == 4){
        return new ChessUnit(0, UnitType.Queen);
      }

      return new ChessUnit(0, UnitType.King);
    }

    //white pawn line
    if(y == 2){
      return new ChessUnit(0, UnitType.Pawn);
    }

    return null;
  }

  

  // GetPossibleMoves(cell: BoardCell) : BoardCell[] | null{
  //   if(cell.Unit.)
  // }
}

