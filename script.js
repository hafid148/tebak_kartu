const cardValue = ["🍓", "🍌", "🍓", "🍉", "🍉", "🍌", "🍔", "🍔"];
const answer = Array(2).fill(null);
const allAnswer = Array(cardValue.length).fill(null);
const indexAnswer = [];
let attempt = 0;
let turn = false;

function handleClick(value, index) {
  const cardElement = document.querySelector(`[data-value="${index}"]`);
  setTimeout(() => {
    cardElement.innerHTML = cardValue[index];
  }, 300);
  cardElement.style.animation = "flip 1s forwards";
  if (allAnswer[index]) return;

  if (turn === false) {
    indexAnswer[0] = index;
    answer[0] = value;
  } else {
    indexAnswer[1] = index;
    answer[1] = value;

    if (answer[0] === answer[1]) {
      allAnswer[indexAnswer[0]] = value;
      allAnswer[indexAnswer[1]] = value;
      setTimeout(() => {
        answer.fill(null);
        console.log(allAnswer);
      }, 100);
    } else {
      attempt += 1;
      setTimeout(() => {
        document.querySelector(
          `[data-value="${indexAnswer[0]}"]`
        ).style.animation = "flipTutup 1s forwards";
        cardElement.style.animation = "flipTutup 1s forwards";
      }, 800);
      setTimeout(() => {
        document.getElementById("attempt").innerHTML =
          "percobaan gagal:" + attempt;
        document.querySelector(`[data-value="${indexAnswer[0]}"]`).innerHTML =
          "";
        cardElement.innerHTML = "";
        answer.fill(null);
        handleClick();
      }, 1000);
    }
  }
  turn = !turn;
  console.log(answer);
  alertWin();
}
function alertWin() {
  if (!allAnswer.includes(null)) {
    setTimeout(() => {
      alert("selamat,kamu menang");
    }, 1000);
  }
}
alertWin();

function restart() {
  document.getElementById("attempt").innerHTML = "percobaan gagal:";
  document.querySelector(`[data-value="${indexAnswer[0]}"]`).innerHTML = "";
  cardElement.innerHTML = "";

  allAnswer.fill(null);
  a;
  answer.fill(null);
  attempt = 0;
  turn = false;
  indexAnswer.fill(null);
}
