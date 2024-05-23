function decrement() {
  let imgResEl = document.getElementById("imgRes");
  let imgSize = parseInt(imgResEl.style.height);
  imgResEl.style.height = imgSize - 5 + "px";
}

function increment() {
  let imgResEl = document.getElementById("imgRes");
  let imgSize = parseInt(imgResEl.style.height);
  imgResEl.style.height = imgSize + 5 + "px";
}
