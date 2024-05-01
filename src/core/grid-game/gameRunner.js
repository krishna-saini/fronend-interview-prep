import Game from './game';
import Player from './player';

const game1 = Game.create(3, 4);
const game2 = Game.create(4, 4);

const playerA = Player.create('A');
const playerB = Player.create('B');
const playerC = Player.create('C');
const playerD = Player.create('D');

game1.addPlayer(playerA);
game1.addPlayer(playerB);
game2.addPlayer(playerC);
game2.addPlayer(playerD);

game1.start();
game2.start();
