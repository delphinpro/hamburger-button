# Простая кнопка-гамбургер для меню

Не включает в себя меню. Только кнопка.

## Установка
 
```
npm install hamburger-button
```

## Использование

Вставьте код кнопки в нужное место на вашей странице

```html
<div class="hamburger" role="button"><span><span>≡</span></span></div>
```

Инициализация

```javascript
import HamburgerButton from 'hamburger-button';

let hamburger = new HamburgerButton({
  mainClass       : 'hamburger',              // по умолчанию
  stateActiveClass: 'hamburger_state_active', // по умолчанию
  onOpen() { console.log('Открыто'); },
  onClose(){ console.log('Закрыто'); },
});

hamburger.toggle(); // Переключить состояние
hamburger.open();   // Открыть меню
hamburger.close();  // Закрыть меню
```

*Если не используется модульный сборщик, скрипт можно подключить напрямую в страницу*

```html
<srcipt src="node_modules/hamburger-button/dist/hamburger.js"></script>
```

Подключите scss-миксин в ваш файл стилей и вызовите его:

```scss
import './node_modules/hamburger-button/hamburger.scss';

@include makeHamburgerButton((
    main-class: '.hamburger',
    width     : 3rem,
    height    : 3rem,
));
```

## Javascript options

|             Option |          Default           | Description                                                     |
|-------------------:|:--------------------------:|:----------------------------------------------------------------|
|        `mainClass` |       `'hamburger'`        | CSS-class of block                                              |
| `stateActiveClass` | `'hamburger_state_active'` | The class at which the button is in the open state              |
|           `onOpen` |           `null`           | Callback function that is called when you go to the open state  |
|          `onClose` |           `null`           | Callback function that is called when you go to the close state |

## Javascript API

|     Method | Description                         |
|-----------:|:------------------------------------|
| `toggle()` | Toggle state of the button          |
|   `open()` | Toggle to open state of the button  |
|  `close()` | Toggle to close state of the button |

## SCSS options

|                  Option |     Default     | Description                                               |
|------------------------:|:---------------:|:----------------------------------------------------------|
|            `main-class` | `'.hamburger'`  | CSS-class of block                                        |
| `state-active-modifier` | `_state_active` | The BEM modifier at which the button is in the open state |
|            `background` |  `transparent`  | Background of the button                                  |
|            `icon-color` | `currentColor`  | Color of the icon                                         |
|                 `width` |     `50px`      | Width of the button                                       |
|                `height` |     `50px`      | Height of the button                                      |
|            `icon-width` |  half of width  | Width of the icon                                         |
|           `icon-height` | third of height | Height of the icon                                        |
| `icon-item-space-chunk` |       `2`       |                                                           |
|      `icon-item-height` |    calculate    |                                                           |
|       `icon-item-space` |    calculate    |                                                           |
