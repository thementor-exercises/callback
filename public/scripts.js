
const xhr = new XMLHttpRequest();

xhr.open('GET', '/salads.json', true);
xhr.responseType = "json";
xhr.onload = function() {
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    console.log(this.response);
  }
};

xhr.send();

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
