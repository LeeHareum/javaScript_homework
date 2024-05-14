// 문제 1,2
document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector(".title").innerHTML = "제목이아니다.";
});

// 문제 3
function sum(num1, num2) {
  console.log(num1 + num2);
}
sum(3, 7);

// 문제 4
function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("짝수입니다.");
  } else {
    console.log("홀수입니다.");
  }
}
isEvenOrOdd(33);

// 문제 5
let cute = {
  name: "밤송이",
  secret: 1004,
};
console.log(cute);
