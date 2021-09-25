
const xhr = new XMLHttpRequest();

xhr.open('GET', '/salads.json', true);
xhr.responseType = "json";
xhr.onload = function() {
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    console.log(this.response);
  }
};

xhr.send();

/**
 * Timer function notify each time after timer ticks
 * @param {function} callback - function which is triggered after each tick
 * @param {number} timeBetweenTicks - time in miliseconds
 * @param {number} maxTicks - maximum ticks after which function stops propagate
 */
function timer(callback, timeBetweenTicks, maxTicks) {
  let i = 1;
  const interval = setInterval(() => {
    if (i >= maxTicks) {
      clearInterval(interval);
    }

    callback(i);

    i++;
  }, timeBetweenTicks);
};
