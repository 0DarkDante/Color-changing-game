let field = document.getElementById('field');
let counter = document.getElementById('counter');
let rows = 3;
let cols = 3;
let colors = ['red', 'green', 'blue'];
let currentIndex = 0;
let count = 0;

counter.textContent = 0;

for (let i = 0; i < rows; i++) {
  let tr = document.createElement('tr');
  field.appendChild(tr);

  for (let j = 0; j < cols; j++) {
    let td = document.createElement('td');
    tr.appendChild(td);
    changingColors(td);
    nextColors(td);
  }
}

let tds = document.querySelectorAll('td');

function changingColors(td) {
  let min = 0;
  let max = 2;
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  td.classList.add(colors[randomNum]);
}

function checkVictory() {
  let firstTdClass = tds[0].classList[0];

  for (let td of tds) {
    if (td.classList[0] !== firstTdClass) {
      return false;
    }
  }

  return true;
}

function nextColors(td) {
  td.addEventListener('click', function () {
    counter.textContent++;
    td.classList.remove(colors[currentIndex]);
    currentIndex = (currentIndex + 1) % colors.length;
    td.classList.add(colors[currentIndex]);

    if (checkVictory()) {
      alert('Перемога, вітаю!');
      markVictory();
    }
  });
}

function markVictory() {
  for (let td of tds) {
    td.classList.add('victory');
  }
}
