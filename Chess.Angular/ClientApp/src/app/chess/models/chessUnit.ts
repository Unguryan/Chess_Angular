export class ChessUnit{
    
    readonly Type: UnitType;
    readonly Color: UnitColor;

    constructor(color: UnitColor, type: UnitType){
        this.Color = color;
        this.Type = type;
    }
}

export enum UnitType {
    Pawn = 0,
    Rook = 1,
    Knight = 2,
    Bishop = 3,
    Queen = 4,
    King = 5,
  }

export enum UnitColor {
    White = 0,
    Black = 1,
  }