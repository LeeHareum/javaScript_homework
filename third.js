// 7.

let count = document.querySelector("#counter");
let timer = parseInt(count.textContent);

const Interval = setInterval(() => {
  console.log(timer);
  if (timer < 5) {
    timer = timer + 1;
    count.textContent = timer;
  } else {
    clearInterval(Interval);
    console.log("종료 !");
  }
}, 1000);
