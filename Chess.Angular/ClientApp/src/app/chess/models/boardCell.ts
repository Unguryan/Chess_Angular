import { X_axic, Y_axic, CellColor } from "./cellPropeties";
import { ChessUnit } from "./chessUnit";

export class BoardCell{
    readonly Color: CellColor;
    
    Unit: ChessUnit | null;
    X: X_axic;
    Y: Y_axic;

    isPossibleMove: boolean;
    isSelected: boolean;

    constructor(color: CellColor, unit: ChessUnit | null, x: X_axic, y: Y_axic){
        this.Color = color;
        this.Unit = unit;
        this.X = x;
        this.Y = y;
        this.isPossibleMove = false;
        this.isSelected = false;
    }


}