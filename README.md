# farmaniyah-mod

Farmaniyah-mod is a Node.js module for data manipulation. It provides several interesting functions to work with arrays and dates.

## Installation

You can install Farmaniyah-mod via npm: `npm install farmaniyah-mod`

## Usage

```javascript
const fluxify = require('fluxify');

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = fluxify.doubleArray(numbers);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

const filteredNumbers = fluxify.filterArray(numbers, (num) => num % 2 === 0);
console.log(filteredNumbers); // Output: [2, 4]

const formattedDate = fluxify.formatDate(new Date(), 'YYYY-MM-DD');
console.log(formattedDate); // Output: formatted date
```

