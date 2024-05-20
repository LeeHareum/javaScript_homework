// 1
const friends = [
  {
    이름: "철수",
    나이: 19,
    성별: "남",
  },
  {
    이름: "짱구",
    나이: 20,
    성별: "남",
  },
  {
    이름: "유리",
    나이: 21,
    성별: "여",
  },
];
console.log(friends);

// 2
const friendContainer = document.querySelector(".friend-container");

friends.forEach(function (friends) {
  let html = `<div class="friends">
                <h2 class="name">이름: ${friends.이름}</h2>
                <h3 class="age">나이: ${friends.나이}</h3>
                <h3 class="gender">성별: ${friends.성별}</h3>
                </div>`;
  friendContainer.insertAdjacentHTML("beforeend", html);
});

// 3
const girl = friends.find((friends) => friends.성별 === "여");
console.log(girl);

// 4
const boy = friends.filter((friends) => friends.성별 === "남");
console.log(boy);

// 5
const oldFriends = friends.map((friends) => {
  return {
    이름: friends.이름,
    나이: friends.나이 + 10,
    성별: friends.성별,
  };
});
console.log(oldFriends);
console.log(friends);

// 6
let age = [...friends];
age.sort((a, b) => {
  return b.나이 - a.나이;
});
console.log(age);
console.log(friends);

// 7
const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};
const { 이름, 나이, 주소 } = user;
console.log(user);
