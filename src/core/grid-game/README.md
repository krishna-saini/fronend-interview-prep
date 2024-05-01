## Rules
1. Multiple Games can be spawned in the arena.
2. A game contains a grid with random destination. Players will spawn at random location in grid.
3. Any no of players can join arena where they can join the game of their choosing
4. Once joined the players move towards destination. They are supposed to move automatically one step at a time in horizontal, vertical or diagonal direction after every 5sec. Automatic Moves will have to done through some algorithm whose goal should be to reach the FINAL destination in minimum steps. no two players are aware about their position. so if multiple players end up on a grid, remove all of them. if multiple players reaches at destination at once, remove all of them.
5. If we get a winner or all players are eliminated a game is over and is considered expired. Hence it is removed from the pool of available games
6. When the games are running, any player can join mid games and join the available games with other player of their choosing
7. If players are eliminated from a game, they are free to choose and join other games till all the games expire.
8. Max player number < empty grid spots
9. New player can be added after a game starts
10. Arena closes once all games are over and no player can enter arena thereafter