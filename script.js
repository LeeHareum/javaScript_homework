// 1.
document
  .getElementById("container")
  .addEventListener("click", function (event) {
    if (event.target.classlist.container("box")) {
      event.target.classlist.toggle("clicked");
    }
  });

// 2.
function getSquare(number) {
  // number의 제곱을 계산하여 반환하는 함수를 작성하세요.
  return number * number;
}

const result = getSquare(5);
console.log("5의 제곱 -> ", result); // 25 출력 (5의 제곱)
