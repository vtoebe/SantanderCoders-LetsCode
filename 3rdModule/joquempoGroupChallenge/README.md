# JokenPo Game </h1>

## How to Play
### 1. Create two players
```js
const 'youNameHere' = new Player('Your Name Here')
const 'secondPlayerNameHere' = new Player('2nd Player Name Here')
```

### 2. Create a new game
```js
const 'yourGameName' = new Joquempo()
```

### 3. Start the game
###### You'll use the *start* function, passing both players names
```js
yourGameName.start(youNameHere, secondPlayerNameHere);
```

### 4. Enter your play ('pedra, papel ou tesoura')
###### Each player will use the *play* function, passing first the game name, then their hand choice.
```js
playerName.play(gameName, 'pedra')
player2Name.play(gameName, 'tesoura')
```

### 5. End Game
###### When the players want to end the game, you can call the *endGame* function
###### The Final winner and score will be shown!

```js
gameName.endGame
```
###### All players' scores will be reset and you can stop playing or keep playing, starting from zero again.
###### If you'd like to keep playing, jsut use the *play* function again, no need to start a new game.
```js
playerName.play(gameName, 'papel')
player2Name.play(gameName, 'pedra')
```


#
# Santander Coders | Let's Code
### Joquempo.js was developed by
* Michele Felix de Godoy Monteiro
* Pedro Ruas
* Tiago Correa Sant'Ana
* Vitória Regina Ragazzon Toebe
##### We chose to develop this game for the final assignment on our Web Full Stack course.
#

### Instructions | The Game (advanced)
Pick one of three games: Chess, Poker, or Roshambo (rock, paper, scissors). Roshambo is the easiest, followed by Poker, then Chess.

* Your game should have a **Game** object shat should be responsible for keeping track of it's state
	* State depends on the game, all games have players, but not all games have pieces, cards, or moves. try to plan out what your state will be first
	* Your game should keep a reference to **players**, and it should tell them whether or not they have won or lost
	* Your game should be able to look at the state of the players and execute a **turn**- this is where you put code that looks at the state of each player and evaluates the results of what happens when that player changes it's state
	* Some games will have multiple turns that will change the state of the game, while others (like roshambo) only have one turn that determines a win or a loss.
* You should have **Players** for your game, which should be a class
	* Each player should keep track of how many wins and losses it has
	* Players should keep track of their pieces, cards, or hands
* You should have a class for each **Piece**, **Card** or **Move**

It's up to you to do the rest of the design for this program! Ensure two players can be created in the console as classes, join a game, execute methods with moves, and one player can win each game.
