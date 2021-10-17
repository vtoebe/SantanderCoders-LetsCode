class Joquempo {
    constructor() {
      this.player1 = [];
      this.player2 = [];
      this.playerHistory = []
    }
  
    savePlays() {
      // save player history loss/win
    }
  
    start(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
      this.playerHistory = {
        player1: { name: `${player1.name}`, played: `${player1._hand}`, score: {wins: 0, losses: 0} },
        player2: { name: `${player2.name}`, played: `${player2._hand}`, score: {wins: 0, losses: 0} }
      };
    }
  
    updatePlayerHistory(player, prop, value) {
      this.playerHistory[player][prop] = [...this.playerHistory[player][prop], value]
    }
  
    updatePlayerScore(winner, loser){
      
        this.playerHistory[winner].score.wins = this.playerHistory[winner].score.wins + 1
        this.playerHistory[loser].score.losses = this.playerHistory[loser].score.losses + 1
      
    }
  
    receivePlay(hand, playerName) {
      if (this.player1.name == playerName) {
        this.updatePlayerHistory('player1', 'played', hand)
      } else {
        this.updatePlayerHistory('player2', 'played', hand)
      }
  
      if (this.playerHistory.player1.played.length == this.playerHistory.player2.played.length) {
        console.log(this.result());
      }
    }
  
    checkHand() {
      // this.player1._hand == handP1 && this.player2._hand == handP2
  
      const handP1 = this.player1._hand
      const handP2 = this.player2._hand
  
      const playedWinner = {
        'papel': 'pedra',
        'tesoura': 'papel',
        'pedra': 'tesoura'
      }
  
      if (playedWinner[handP1] === handP2) {
        return ['player1', 'player2']
      }
  
      if (handP1 === handP2) {
        return ['empate', 'empate']
      }
  
      return ['player2', 'player1']
    }
  
    Wins(player) {
      return player.score.wins
    }
  
    result() {
  //     debugger;
      let [winner, loser] = this.checkHand()
      if (winner === 'player1' || winner === 'player2'){this.updatePlayerScore(winner, loser)}
      
      let scorePlayer1 = this.Wins(this.playerHistory.player1)
      let scorePlayer2 = this.Wins(this.playerHistory.player2)
      let gameScore = `${this.player1.name} ${scorePlayer1} x ${scorePlayer2} ${this.player2.name}`
  
      return winner == 'empate' ? `Empatou! ${gameScore}` : `${this[winner].name} venceu! ${gameScore}`;
    }
  }
  
  class Player {
    constructor(name) {
      this.name = name
      this._hand = '';
    }
  
    play(game, hand) {
      this.setHandHistory(hand);
      game.receivePlay(hand, this.name)
    }
  
    setHandHistory(hand) {
      this._hand = hand;
    }
  
    getHandHistory() {
      return this._hand;
    }
  
    getPlayerHistory() {
      return this.playerHistory;
    }
  }
  
  let vitoria = new Player('Vitoria')
  let pedro = new Player('Pedro')
  let jogo1 = new Joquempo()
  jogo1.start(vitoria, pedro);
  
  // copy/paste one by one to test conditionals
  // vitoria.play(jogo1, 'pedra')
  // pedro.play(jogo1, 'pedra')
  
  // vitoria.play(jogo1, 'pedra')
  // pedro.play(jogo1, 'papel')
  
  // vitoria.play(jogo1, 'tesoura')
  // pedro.play(jogo1, 'pedra')
  
  // vitoria.play(jogo1, 'pedra')
  // pedro.play(jogo1, 'tesoura')
  
  // console.log(jogo1.playerHistory);