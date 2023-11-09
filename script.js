field = document.getElementById('field');

let rows = 3;
let cols = 3;

for(let i = 0; i < rows; i++) {
  let tr = document.createElement('tr');
  field.appendChild(tr);

  for(let j = 0; j < cols; j++) {    
    let td = document.createElement('td');
    tr.appendChild(td);  
  }
}

