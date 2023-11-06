namespace Chess.Domain.Models
{
    public class User
    {
        public User(int id, string name, string nickName, uint rate)
        {
            Id = id;
            Name = name;
            NickName = nickName;
            Rate = rate;
        }

        public int Id { get; }

        public string Name { get; }

        public string NickName { get; }

        public uint Rate { get; set; }

    }
}
