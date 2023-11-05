import { Component, OnInit } from '@angular/core';
import { BoardCell } from '../models/boardCell';
import { BoardService } from './board.service';
import { Game } from '../models/game';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private prevTest: BoardCell;

  activeGame: Game | null;
  board : BoardCell[][];

  constructor(private boardService: BoardService){
  }

  ngOnInit() {
    this.activeGame = this.boardService.CreateGame();
    this.board = this.activeGame.board;
  }

  GetUnitImage(cell: BoardCell): string | null{
    return this.boardService.GetUnitImage(cell);
  }

  SelectTest(cell: BoardCell){
    if(this.prevTest != null){
      this.prevTest.isPossibleMove = false;
    }
    cell.isPossibleMove = true;
    this.prevTest = cell;
  }
}
