class Joquempo {
    constructor(){
        this.player1 = [];
        this.player2 = [];
        this.jogadas = []
    }

    savePlays(){
        // save player history loss/win
    }

    start(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
        this.jogadas = {player1: {name: `${player1.name}`, jogadas: `${player1._hand}`, history: {wins: 0, losses: 0}},
                        player2: {name: `${player2.name}`, jogadas: `${player2._hand}`, history: {wins: 0, losses: 0}}
                        };
    }
    
    result(){
        if (jogadas.length == 2){
               console.log('entrou aqui')
        }
    }
}


class Player {
    constructor(name){
        this.name = name
        this._hand = [];
        this.playerHistory = {wins: 0, losses: 0};
    }

    play(game, hand){
        this._hand.push(hand);
        if (game.player1.name == this.name){
            game.jogadas['player1']['jogadas'] = [...game.jogadas['player1']['jogadas'], hand]
            console.log('entrou aqui')
        } else {
            game.jogadas['player2']['jogadas'] = [...game.jogadas['player2']['jogadas'], hand]
            console.log('entrou aqui')
        }
    }

    playedHistory(){
        // show the hand array
    }
}


let vitoria = new Player('Vitoria')
let pedro = new Player('Pedro')
let tiago = new Player('Tiago')
let michele = new Player('Michele')
let jogo1 = new Joquempo()
let jogo2 = new Joquempo()
let jogo3 = new Joquempo()
jogo1.start(vitoria, pedro)
jogo2.start(vitoria, michele)
jogo3.start(tiago, pedro)