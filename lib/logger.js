/* eslint-disable no-console */
function info(...args) {
  console.log(...args);
}

function warn(...args) {
  console.warn(...args);
}

function error(...args) {
  console.error(...args);
}
/* eslint-enable no-console */

const log = {
  info,
  warn,
  error,
};

module.exports = log;
