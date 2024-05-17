// 3.
window.addEventListener("scroll", function () {
  let scrolled = window.scrollY;
  console.log(`스크롤 양-> ${scrolled}`);
});

// 4.
for (let i = 0; i <= 10; i++) {
  console.log(`for문-> ${i}`);
}

// 5.
for (let a = 0; a <= 20; a++) {
  if (a % 2 === 0) {
    console.log(`짝수출력-> ${a}`);
  }
}

// 6.
setTimeout(() => {
  console.log("3초 후에 출력되는 텍스트입니다.");
}, 3000);
