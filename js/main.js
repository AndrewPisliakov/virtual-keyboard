import { engLocation, rusLocation } from "./keys.js";

console.log(engLocation);
console.log(rusLocation);

const body = document.querySelector('body');
const keyboard = document.querySelector('.keyboard');


let h1 = document.createElement('h1');
h1.innerHTML = "RSS Виртуальная клавиатура";
body.prepend(h1);
h1.classList.add('main-title');

const texarea = document.createElement('textarea');
texarea.classList.add('textarea');
texarea.rows = '5';
texarea.cols = '50';
texarea.style.marginBottom = '50px'
/* texarea.setAttribute('id', 'texarea'); */
body.insertBefore(texarea, keyboard);

/* texarea.addEventListener('input', function() {
    console.log(this.value);
}); */

keyboard.addEventListener('click', function(event) {
    let elem = event.target;
    if(elem.classList.contains('key')) {
        texarea.value += elem.innerHTML;
        //let currentLetter = event.target;
        //texarea.value = currentLetter;
    }

});

let i = 0;

for(let key in engLocation){
    
    if(i <= 13) {
        if(i == 0) {
            createRow();
        }
        let row = document.querySelector('.row');
        let div = document.createElement('div');
        div.classList.add('key');
        div.innerHTML = engLocation[key].default;
        if(div.innerHTML === 'Backspace') {
            div.classList.add('key__delete');
        }
        row.append(div);
        console.log(engLocation[key].default);

        i++;
    }
    
}

function createRow() {
    let row = document.createElement('div');
    row.classList.add('row');
    keyboard.append(row);
}

console.log(i);