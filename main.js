const answers = {
  answer1: "千葉大学教育学部小学校コース教育学選修",
  answer2: "教育政策・行財政学",
  answer3: "一人旅・飲食店巡り・ゲーム配信視聴",
  answer4: "好奇心・決断力・向上心が強い",
  answer5: "アウトプットファースト",
  answer6: "ITパスポート",
};

for (let answerT in answers) {
  let answerElement = document.getElementById(answerT);

  // answerElementにマウスがのった時の処理
  answerElement.onmouseover = () => {
    answerElement.textContent = answers[answerT];
    answerElement.classList.add("visible");
  };
  answerElement.onmouseout = () => {
    answerElement.classList.remove("visible");
  };
}

//留学画像のスライドショー
const gibraltarImage = document.getElementById("gibraltar-image");
const internshipImage = document.getElementById("internship-image");

let gibraltarSlideInfo = [
  "大きな橋.jpg",
  "夕やけ.jpg",
  "賞状授与.jpg",
  "植物園.jpg",
];

let internSlideInfo = [
  "プレゼン.jpg",
  "ワクワク研究所.jpg",
  "挙手.jpg",
  "ワクワクの木.jpg",
];

let i = 0;
gibraltarImage.src = `./images/${gibraltarSlideInfo[i]}`;

let m = 0;
internshipImage.src = `./images/${internSlideInfo[m]}`;

const gibraltarImageChange = () => {
  if (i === gibraltarSlideInfo.length - 1) {
    i = 0;
  } else {
    i++;
  }
  gibraltarImage.src = `./images/${gibraltarSlideInfo[i]}`;
};
const internImageChange = () => {
  if (m === internSlideInfo.length - 1) {
    m = 0;
  } else {
    m++;
  }
  internshipImage.src = `./images/${internSlideInfo[m]}`;
};

setInterval(gibraltarImageChange, 5000);
setInterval(internImageChange, 5000);

//contents-coverの付け外し
const contentsCover = document.querySelectorAll(".contents-cover");
contentsCover.forEach((cover) => {
  cover.onclick = () => {
    cover.classList.add("unvisible");
  };
});
