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
        player1: { name: `${player1.name}`, played: `${player1._hand}`, history: { wins: 0, losses: 0 } },
        player2: { name: `${player2.name}`, played: `${player2._hand}`, history: { wins: 0, losses: 0 } }
      };
    }

    Wins(player){
      return this.playerHistory.player1.history.wins
    }

    updatePlayerWins(player){
      
    }
  
    updatePlayerHistory(player, hand) {
      this.playerHistory[player]['played'] = [...this.playerHistory[player]['played'], hand]
    }
  
    receivePlay(hand, playerName) {
      if (this.player1.name == playerName) {
        this.updatePlayerHistory('player1', hand)
      } else {
        this.updatePlayerHistory('player2', hand)
      }

      if (this.playerHistory.player1.played.length == this.playerHistory.player2.played.length){
          console.log(this.result());
      }
    }
  
    result(){
        let winner = []
        let scorePlayer1 = this.Wins(this.player1)
        let scorePlayer2 = this.Wins(this.player2)
              if (this.player1._hand == this.player2._hand) {
                winner = 'empate';
              } else if (this.player1._hand == 'papel' && this.player2._hand == 'pedra') {
                winner = this.player1.name;
                scorePlayer1 += 1;
              } else if (this.player1._hand == 'tesoura' && this.player2._hand == 'papel') {
                winner = this.player1.name;
              } else if (this.player1._hand == 'pedra' && this.player2._hand == 'tesoura') {
                winner = this.player1.name;
              } else {
                winner = this.player2.name;
                scorePlayer2 += 1
              }
              return winner == 'empate' ? 'Empatou!' : `Resultado: ${winner} venceu! Player1 ${scorePlayer1} x ${scorePlayer2} Player2 `;
      }
  }
  
  class Player {
    constructor(name) {
      this.name = name
      this._hand = '';
      this.playerHistory = { wins: 0, losses: 0 , hands: []};
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
  vitoria.play(jogo1, 'pedra')
  pedro.play(jogo1, 'pedra')

 vitoria.play(jogo1, 'pedra')
 pedro.play(jogo1, 'papel')
 
 vitoria.play(jogo1, 'tesoura')
 pedro.play(jogo1, 'pedra')

vitoria.play(jogo1, 'pedra')
pedro.play(jogo1, 'tesoura')
 
 console.log(jogo1.playerHistory);