# Let Me Mess That Up For You
Execute macro on a given player's client.
Introduces the function:
```JS
runMacroAs("PlayerName", "macro name");
```
You can also send parameters along to the macro, and wait for a return value from the macro executed on the remote client.
```JS
console.log( await runMacroAs("PlayerName", "macro name", arg1, arg2, arg3 ) );
```

If you wonder if this will now allow anyone to execute anything on anyones client, then no, the clients will only execute code with a GM as author.

I won't register this tiny, and almost useless module in the official foundry registry. If you wish to install it, use the following manifest: 
https://github.com/oOve/lmmtufy/releases/latest/download/module.json

So, what can you do with this?

You can, for example, modify the token image that one of your players see:
![ezgif-4-8d028bcc63](https://user-images.githubusercontent.com/8543541/166147806-98304729-8473-4d36-a1ef-316b7ac11075.gif)

But, the possibilities are endless.

## Changing the token image for one of your players:
Create two macros as DM. I've named them "mess him up" and "messup".
In the first we add the code:
```JS
await runMacroAs("Player2", "messup");          // Run the macro called "messup" on another player's client
let tk = canvas.tokens.get('UqXGF2EAzlj2Myhf'); // Get the token in question and 
tk.document.update({'x':tk.data.x+1});          // Lets move it a bit to force an update
```
In the second macro (called "messup") we add:
```JS
let tk = canvas.tokens.get('UqXGF2EAzlj2Myhf');  // The ID of the token we want to edit
tk.document.data.img = 'creatures/mimic.png';    // Set its image path to our new image
tk.data.img = 'creatures/mimic.png';             // Again
await tk.draw();                                 // Draw forces the token to reload its image
console.log("Did this on ", game.user.name);
``` 
Remember to mark both macros as "Script" in the drop down box. Both of these macros use the **ID** of a specific token(here UqXGF2EAzlj2Myhf), you'll need to replace this with the id of your token that should its image changed. To do this, select the token, press F12, and in the console below write ```_token.id``` . 
To run the macro on another player's machine, you need to open the "Macros Directory" (click the folder icon next to the macro hotbar).
In that directory/folder right-click your "messup" macro select "Configure Permissions". Give all players observer rights to this macro.


Do you like this module?; then please support me at [Patreon](https://www.patreon.com/drO_o).

Would you like to show off your creations or ask questions about the module feel free to drop in at my [discord channel](https://discord.gg/5CCAhsKFDp). 
