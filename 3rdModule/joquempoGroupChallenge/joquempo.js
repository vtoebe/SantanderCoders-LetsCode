class Joquempo {
    constructor(){
        this.player1 = [];
        this.player2 = [];
        this._playerHistory = {player1: {wins: 0, losses: 0},
                             player2: {wins: 0, losses: 0}};
        this.jogadas = [];
    }
    
    get jogadas(){
        return this.jogadas
    }

    set jogadas(jogada){
        this.jogadas = jogada;
    }

    savePlays(){
        // save player history loss/win
    }

    start(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
    }

    result(jogadas){
        
        if (jogadas.length == 2){
               
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
        game.jogadas = [...game.jogadas, hand];
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