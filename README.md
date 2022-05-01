# foundry_pushable
Pushable tokens for FoundryVTT.

System agnostic.
To set up, install the manifest below (or use the default Foundry installer), add some tokens, edit them (1) and mark them as pushable(2) and/or pullable(3).

![image](https://user-images.githubusercontent.com/8543541/160937714-1cc164bb-ee06-4bb7-a6c5-78081b15a387.png)

Install manually by adding the module manifest:

https://github.com/oOve/pushable/releases/latest/download/module.json

Version 1.1.1, 
* tokens can now also be pulled. Default key for this is P. Hold down P, and move away from a token.
* Mark tokens individually as pushable, and/or pullable 
* Configure Settings:
  * "Enable pull as well", enables pulling of tokens, tokens must individually be marked as pullable.
  * "Maximum pushed tokens" set the number of tokens that can be maximum pushed and pulled. Set to -1 if there is no limit.
* Configure Controls:
  * The key that enables pulling

## Localization
Current support for:
* English
* Brazilian Portuguese
* German

If you want to translate this module, download [this file](lang/en.json) and translate it. After that open an issue sharing your translation. Also share the default name convention for your language. You can find that by either, finding a system or module that is already translated to your language and open its module.json. It should look something like this:
`
"languages": [
      {
        "lang": "en",
        "name": "English",
        "path": "lang/en.json"
      }
`

## Demo:
[![Sokoban puzzle using pushable tokens](http://img.youtube.com/vi/FOMEqN03SUU/0.jpg)](http://www.youtube.com/watch?v=FOMEqN03SUU "Sokoban video puzzle")

Do you like this module?; then please support me at [Patreon](https://www.patreon.com/drO_o).

Would you like to show off your creations or ask questions about the module feel free to drop in at my [discord channel](https://discord.gg/5CCAhsKFDp). 
