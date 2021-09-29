let zmienna = [];
function stopMe() {
  return;
}

function createArray(xhrResponse) {
  xhrResponse.forEach(function (item) {
    zmienna.push(item);
  });
  timer(createTable, fireSecondRequest, 100, zmienna.length);
}
function createTable(index) {
  index = index - 1;
  let dishName = zmienna[index];
  const dishP = document.createElement("p");
  dishP.id = `dish${index + 1}`;
  dishP.innerHTML = `${index + 1}. ${dishName}`;
  document.getElementById("main").append(dishP);
}

const xhr = new XMLHttpRequest();
xhr.open("GET", "/salads.json", true);
xhr.responseType = "json";
xhr.onload = function () {
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    //console.log(this.response);
    createArray(this.response);
    //fireSecondRequest();
  }
};
xhr.send();

function fireSecondRequest() {
  var jpg = new XMLHttpRequest();
  jpg.open("GET", "suggested_view.png", true);
  jpg.responseType = "blob";
  jpg.onload = function (e) {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      const blob = this.response;
      //loadImage(blob, timer);
      timer(
        function (i) {
          loadImage(blob);
        },
        stopMe,
        1000,
        10
      );
    }
  };
  jpg.send();
}

function loadImage(image) {
  const newImage = document.createElement("img");
  newImage.src = window.URL.createObjectURL(image);
  document.getElementById("image").append(newImage);
}

//timer(loadImage, 5, 10);
/**
 * Timer function notify each time after timer ticks
 * @param {function} callback - function which is triggered after each tick
 * @param {number} timeBetweenTicks - time in miliseconds
 * @param {number} maxTicks - maximum ticks after which function stops propagate
 */

//timer(triggerInfo, 100, 1000);
//timer(createTable, 100, zmienna.length);
function timer(callback, callback2, timeBetweenTicks, maxTicks) {
  let i = 1;
  const interval = setInterval(() => {
    if (i >= maxTicks) {
      clearInterval(interval);
      callback2();
    }

    callback(i);

    i++;
  }, timeBetweenTicks);
}
