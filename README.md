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

RickRoll.js also available at [jsdelivr](https://cdn.jsdelivr.net/npm/rickroll.js).
```html
<script src="https://cdn.jsdelivr.net/npm/rickroll.js"></script>
<script>
  rickroll();
</script>
```
## Method
There's alot of method in RickRoll.js to RickRoll people in your website:
 - `rickroll()` A main function of RickRoll.js
   #### Parameters
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
   Example:
   ```js
     button.onclick = function () {
       rickroll.showup();
     });
   ```
 - `rickroll.video` A variable that contains RickRoll Video(raw) URL. You can also change it.
 
## Community
Any question or doubt can contact us at our [discord server](https://discord.gg/9S3ZCDR).
