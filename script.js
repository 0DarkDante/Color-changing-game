field = document.getElementById('field');

let rows = 3;
let cols = 3;

let colors = ['red', 'green', 'blue'];
let currentIndex = 0;

for(let i = 0; i < rows; i++) {
  let tr = document.createElement('tr');
  field.appendChild(tr);

  for(let j = 0; j < cols; j++) {    
    let td = document.createElement('td');
    tr.appendChild(td);  
    changingСolors(td);
    nextColors(td);
  }
}

function changingСolors(td) {
  let min = 0;
  let max = 2;
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  td.classList.add(colors[randomNum]);
}

function nextColors(td) {
  td.addEventListener('click', function(){
    td.classList.remove(colors[currentIndex]);
    currentIndex = (currentIndex + 1) % colors.length;
    td.classList.add(colors[currentIndex]);
  }); 
}