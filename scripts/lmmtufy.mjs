/*
▓█████▄  ██▀███           ▒█████  
▒██▀ ██▌▓██ ▒ ██▒        ▒██▒  ██▒
░██   █▌▓██ ░▄█ ▒        ▒██░  ██▒
░▓█▄   ▌▒██▀▀█▄          ▒██   ██░
░▒████▓ ░██▓ ▒██▒ ██▓    ░ ████▓▒░
 ▒▒▓  ▒ ░ ▒▓ ░▒▓░ ▒▓▒    ░ ▒░▒░▒░ 
 ░ ▒  ▒   ░▒ ░ ▒░ ░▒       ░ ▒ ▒░ 
 ░ ░  ░   ░░   ░  ░      ░ ░ ░ ▒  
   ░       ░       ░         ░ ░  
 ░                 ░              
 */

 const MOD_NAME = "lmmtufy";


let lmmtufy_socket;
Hooks.once("socketlib.ready", () => {
  // socketlib is activated, lets register our function
	lmmtufy_socket = socketlib.registerModule("lmmtufy");	
	lmmtufy_socket.register("_runMacro", _runMacro);
});

function _runMacro(macro){
    let m = game.macros.getName(macro);
    m.execute();
}

export function runMacroAs(player, macro){
  if (game.user.isGM){
    let playerId = game.users.getName(player).id;
    lmmtufy_socket.executeAsUser("_runMacro", playerId, macro);
  }
}
window.runMacroAs = runMacroAs;