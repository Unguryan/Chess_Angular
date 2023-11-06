using Chess.Domain.Enums;

namespace Chess.Domain.Models
{
    public class ChessUnit
    {
        public ChessUnit(UnitType type, UnitColor color)
        {
            Type = type;
            Color = color;
        }

        public UnitType Type { get; }

        public UnitColor Color { get; }

    }
}
