// fluxify.js
const _ = require('lodash');
const moment = require('moment');

// Function to double each element of an array
function doubleArray(arr) {
  return _.map(arr, (num) => num * 2);
}

// Function to filter an array by a given predicate function
function filterArray(arr, predicate) {
  return _.filter(arr, predicate);
}

// Function to format a date using moment.js
function formatDate(date, format) {
  return moment(date).format(format);
}

module.exports = {
  doubleArray,
  filterArray,
  formatDate
};
