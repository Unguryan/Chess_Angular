import { BoardCell } from "./boardCell";

export class Game{
    
    board: BoardCell[][];
    selectedCell: BoardCell | null;
    
    WhiteMove: boolean;
    WhiteWin: boolean | null;
}