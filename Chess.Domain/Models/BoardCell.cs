using Chess.Domain.Enums;

namespace Chess.Domain.Models
{
    public class BoardCell
    {
        public BoardCell(CellColor cellColor, X_axic x, Y_axic y, ChessUnit? unit)
        {
            CellColor = cellColor;
            X = x;
            Y = y;
            Unit = unit;

            IsPossibleMove = false;
            IsSelected = false;
        }

        public CellColor CellColor { get; }

        public X_axic X { get; }

        public Y_axic Y { get; }

        public ChessUnit? Unit { get; set; }

        public bool IsPossibleMove { get; set; }

        public bool IsSelected { get; set; }
    }
}
