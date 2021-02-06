## Contains Burmese

This package provides a way to check whether a string contains Burmese text.

## Install

```
npm i contains-burmese
```

## Usage

```javascript
const { containsBurmese } = require('contains-burmese');

let result = containsBurmese('မြန်မာနိုင်ငံ Myanmar Country');
```

The function will return `true` if there is at least one Burmese character in the string.