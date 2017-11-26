# Simple hamburger button

## Install
 
```
npm install --save hamburger-button
```

Or

```
bower install --save hamburger-button
```

If used _bower_ include script into your page:

```html
<srcipt src="bower_components/hamburger-button/index.js"></script>
```

## Using

Insert html code

```html
<div class="hamburger" role="button"><span><span>≡</span></span></div>
```

Initialize script

```javascript
import hamburgerButton from 'hamburger-button'; // if used NPM

let hamburder = hamburgerButton({
  mainClass       : 'hamburger',              // by default
  stateActiveClass: 'hamburger_state_active', // by default
  onOpen() { console.log('Opened'); },
  onClose(){ console.log('Closed'); },
});

hamburder.toggle(); // Toggle state
hamburder.open();   // Open menu
hamburder.close();  // Close menu
```

Include scss-mixin into your styles and exec it:

```scss
import './bower_components/hamburger-button/hamburger.scss'; // with BOWER
import './node_modules/hamburger-button/hamburger.scss'; // with NPM

@include makeHamburgerButton((
    main-class: '.hamburger',
    width     : 3rem,
    height    : 3rem,
));
```

## Javascript options

| Option | Default | Description
|---:|:---:|:---|
| `mainClass`        | `'hamburger'`             | CSS-class of block
| `stateActiveClass` | `'hamburger_state_active'`| The class at which the button is in the open state
| `onOpen`           | `null`                    | Callback function that is called when you go to the open state
| `onClose`          | `null`                    | Callback function that is called when you go to the close state

## Javascript API

| Method | Description
|---:|:---
| `toggle()` | Toggle state of the button
| `open()`   | Toggle to open state of the button
| `close()`  | Toggle to close state of the button

## SCSS options

| Option | Default | Description
|---:|:---:|:---|
| `main-class`            | `'.hamburger'`  | CSS-class of block
| `state-active-modifier` | `_state_active` | The BEM modifier at which the button is in the open state
| `background`            | `transparent`   | Background of the button
| `icon-color`            | `currentColor`  | Color of the icon
| `width`                 | `50px`          | Width of the button
| `height`                | `50px`          | Height of the button
| `icon-width`            | half of width   | Width of the icon
| `icon-height`           | third of height | Height of the icon
| `icon-item-space-chunk` | `2`             |
| `icon-item-height`      | calculate       |
| `icon-item-space`       | calculate       |
