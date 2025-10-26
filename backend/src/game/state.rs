#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct GameState {
    pub id:
    pub players: Vec<Player>
    pub deck: 
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct Player {
    pub id: String,
    pub name: String,
    pub chips: u32,
    pub hand: Vec<Card>,
    pub status: PlayerStatus,
    pub current_bet: u32,
    pub position: usize,
}


#[derive(Clone, Debug, Serialize, Deserialize)]
pub enum PlayerStatus {
    Active,
    Folded,
    AllIn,
    Out,
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub enum Suit {
    Hearts,
    Spades,
    Clubs,
    Diamonds
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub enum Rank {
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King,
    Ace,
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct Card {
    pub suit:Suit,
    pub rank:Rank,
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub enum GamePhase {
    Waiting,
    PreFlop,
    Flop,
    Turn,
    River,
    Showdown,
    Ended,
}
