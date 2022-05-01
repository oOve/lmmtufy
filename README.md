# Let Me Mess That Up For You
Execute macro on a given player's client.
Introduces the function:
```JS
runMacroAs("PlayerName", "macro name");
```

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
Remember to mark both macros as "Script" in the drop down box.
To run the macro on another player's machine, you need to open the "Macros Directory" (click the folder icon next to the macro hotbar).
In that directory/folder right click your "messup" macro select "Configure Permissions" (see encircled in the image below). Give all players observer rights to this macro.
![image](https://user-images.githubusercontent.com/8543541/166147984-201111c1-ecad-429f-96b2-9aca75a545e6.png)


Do you like this module?; then please support me at [Patreon](https://www.patreon.com/drO_o).

Would you like to show off your creations or ask questions about the module feel free to drop in at my [discord channel](https://discord.gg/5CCAhsKFDp). 
