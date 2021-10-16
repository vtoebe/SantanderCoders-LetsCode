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
  
    updatePlayerHistory(player, hand) {
      this.playerHistory[player]['played'] = [...this.playerHistory[player]['played'], hand]
    }
  
    receivePlay(hand, playerName) {
      if (this.player1.name == playerName) {
        this.updatePlayerHistory('player1', hand)
      } else {
        this.updatePlayerHistory('player2', hand)
      }
  
      if (this.player1._hand.length == this.player2._hand.length){
          console.log(this.result());
      }
    }
  
    result(){
        let winner = [];
          if (this.playerHistory.player1.played && this.playerHistory.player2.played !== undefined){
              
              if (this.player1._hand.at(-1) == 'pedra') {
                  if (this.player2._hand.at(-1) == 'pedra') {
                      winner = 'empate';
                  } else if (this.player2._hand.at(-1) == 'papel') {
                      winner = this.player2.name;
                  } else if (this.player2._hand.at(-1) == 'tesoura') {
                      winner = this.player1.name;
                  }
  
              }
  
              if (this.player1._hand.at(-1) == 'papel') {
                  if (this.player2._hand.at(-1) == 'pedra') {
                      winner = this.player1.name;
                  } else if (this.player2._hand.at(-1) == 'papel') {
                      winner = 'empate';
                  } else if (this.player2._hand.at(-1) == 'tesoura') {
                      winner = this.player2.name;
                  }
              }
  
              if (this.player1._hand.at(-1) == 'tesoura') {
                  if (this.player2._hand.at(-1) == 'pedra') {
                      winner = this.player2.name;
                  } else if (this.player2._hand.at(-1) == 'papel') {
                      winner = this.player1.name;
                  } else if (this.player2._hand.at(-1) == 'tesoura') {
                      winner = 'empate';
                  }
              } 
  
              return winner == 'empate' ? 'Empatou!' : `Resultado: ${winner} venceu!`;
          }
      }
  }
  
  class Player {
    constructor(name) {
      this.name = name
      this._hand = [];
      this.playerHistory = { wins: 0, losses: 0 };
    }
  
  
    play(game, hand) {
      this._hand.push(hand);
      game.receivePlay(hand, this.name)
    }
  
    playedHistory() {
      // show the hand array
    }
  }
  
  
  let vitoria = new Player('Vitoria')
  let pedro = new Player('Pedro')
  let jogo1 = new Joquempo()
  jogo1.start(vitoria, pedro)
  
 // copy/paste one by one to test conditionals
 vitoria.play(jogo1, 'pedra')
 pedro.play(jogo1, 'pedra')
 
 vitoria.play(jogo1, 'pedra')
 pedro.play(jogo1, 'papel')
 
 vitoria.play(jogo1, 'tesoura')
 pedro.play(jogo1, 'pedra')
 
  console.log(jogo1.playerHistory)