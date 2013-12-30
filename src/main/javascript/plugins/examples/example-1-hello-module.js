/*
  A simple minecraft plugin.
  Usage: At the in-game prompt type ...
  
  /js hello(self)

  ... and a message `Hello {player-name}` will appear (where {player-name} is 
  replaced by your own name).
  
  This example demonstrates the basics of adding new functionality which is only
  usable by server operators or users with the scriptcraft.evaluate permission.
  By default, only ops are granted this permission.
  
  The `hello` function below is only usable by players with the scriptcraft.evaluate 
  permission since it relies on the `/js` command to execute.

*/
exports.hello = function(player){
    player.sendMessage('Hello ' + player.name);
};
