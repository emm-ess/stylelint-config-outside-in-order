# stylelint-config-outside-in-order

Stylelint config that sorts related properties together thinking outside and outstanding first. Of course that's highly opinionated.

Properties are grouped as follows:

1. Positioning & layout
2. Box Model
3. Visual (including borders)
4. Typography
5. Animation
6. Misc

```css
.declaration-order {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  /* Layout */
  display: block;
  flex-direction: column;

  /* Box Model */
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;

  /* Visual */
  color: #888;
  background-color: #eee;
  border: 1px solid #888;
  border-radius: 4px;
  opacity: 1;

  /* Typography */
  font: normal 16px Helvetica, sans-serif;
  line-height: 1.3;
  text-align: center;

  /* Animation */
  transition: all 1s;

  /* Misc */
  user-select: none;
}
```

## Usage

1.  Add Stylelint and this package to your project:

```bash
npm install --save-dev stylelint stylelint-config-outside-in-order
```

2.  Add this package to the end of the extends array inside your Stylelint configuration:

```javascript
{
  "extends": [
    // "stylelint-config-standard",
    "stylelint-config-outside-in-order"
  ]
}
```

## Credits

inspired by [stylelint-config-rational-order](https://github.com/constverum/stylelint-config-rational-order) and several discussions around the web & with colleagues
