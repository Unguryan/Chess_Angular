namespace Chess.Domain.Models
{
    public class Game
    {
        public int Id { get; set; }

        public User WhitePlayer { get; private set; }

        public User BlackPlayer { get; private set; }


    }
}
