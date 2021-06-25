# RickRoll.js
Some javascript module that used for rickrolling people in website.

## Install
You can get RickRoll.js at npm
```bash
npm install rickroll.js
```
Add this script to your page
```html
<script src="node_modules/rickroll.js/RickRoll.js"></script>
<script>
  rickroll();
</script>
```
Or this:
```html
<script src="https://yonle.github.io/RickRoll.js/RickRoll.js"></script>
<script>
  rickroll();
</script>
```
## Method
There's alot of method in RickRoll.js to RickRoll people in your website:
 - `rickroll()` A main function of RickRoll.js
   #### Parameters (Optional)
    These Parameter that you must provide is in type of `boolean`.
    - `click` for Triggering any Click Event in `document`.
    - `scroll` for Triggering any scroll Event in `document`.
    - `mousemove` for Triggering any mouse movement Event in `document`.
    - `mouseenter` for Triggering some mouse when entered to `document` *(Unstable)*.
    - `mouseleave` for Triggering mouse when mouse leaves `document`.
    - `mousewheel` for Triggering any mouse wheel event in `document`.
    - `drag` for Triggering any drag event in `document` *(Unstable)*.
    - `input` for Triggering any `input` and `key` event in `document`.
    - `resize` for Triggering any `resize` event in `document` *(**Notice:** This option may not stable for mobile browser user.)*.
 - `rickroll.showup()` A function that clean the webpage and Play the rickroll.
   #### Parameters (Optional)
    Those parameter is optional. Default will goes to `rickroll.showup.loop` and other.
    - `force`(boolean) A parameter that used to force `showup()` function rickrolls even `rickroll.playing` is `true`.
    - `src`(string) A parameter that used to Plays a Video from URL Destination.
    - `loop`(boolean) A parameter that used to loop a video.
    
   Example:
   ```js
   button.onclick = function () {
     rickroll.showup();
   });
   ```

   To force rickroll video even `rickroll.playing` is `true`.:
   ```js 
   rickroll.showup({ force: true });
   ```
 - `rickroll.video` A variable that contains RickRoll Video(raw) URL. You can also change it.
 - `rickroll.showup.only_once` A variable that used to make `rickroll.showup()` function to run only once. Default is `true`.
 - `rickroll.showup.loop` A variable that used for looping a video.
 - `rickroll.playing` A variable that used to know if the player is loaded & played a video right now. Returns `false` if it's not playing.
## Community
Any question or doubt can contact us at our [discord server](https://discord.gg/9S3ZCDR).
