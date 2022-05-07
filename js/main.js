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

body.insertBefore(texarea, keyboard);


keyboard.addEventListener('click', function (event) {
    let elem = event.target;
    if (elem.classList.contains('key')) {
        texarea.value += elem.innerHTML;
    }

});

renderKeyboard();

function renderKeyboard() {
    let i = 0;

for (let key in engLocation) {

    if (i <= 13) {
        if (i == 0) {
            createRow('01');
        }
        let row = document.getElementById('01');
        let div = document.createElement('div');
        div.classList.add('key');
        div.setAttribute('id', key);
        div.innerHTML = engLocation[key].default;

        if (div.innerHTML === 'Backspace') {
            div.classList.add('key__delete');
        }
        row.append(div);
        i++;
    }

    else if (i >= 14 && i <= 28) {
        if (i === 14) {
            createRow('02');
        }
        let row = document.getElementById('02');
        let div = document.createElement('div');
        div.classList.add('key');
        div.setAttribute('id', key);
        div.innerHTML = engLocation[key].default;

        if (div.innerHTML === 'Tab') {
            div.classList.add('key__oneandhalf');
        }

        row.append(div);
        i++;
    }

    else if (i >= 29 && i <= 41) {
        if (i === 29) {
            createRow('03');
        }
        let row = document.getElementById('03');
        let div = document.createElement('div');
        div.classList.add('key');
        div.setAttribute('id', key);
        div.innerHTML = engLocation[key].default;

        if (div.innerHTML === 'CapsLock') {
            div.classList.add('key__caps');
        }
        if (div.innerHTML === 'Enter') {
            div.classList.add('key__enter');
        }

        row.append(div);
        i++;
    }

    else if (i >= 42 && i <= 54) {
        if (i === 42) {
            createRow('04');
        }
        let row = document.getElementById('04');
        let div = document.createElement('div');
        div.classList.add('key');
        div.setAttribute('id', key);
        div.innerHTML = engLocation[key].default;

        if (key === 'ShiftLeft' || key === 'ShiftRight') {
            div.classList.add('key__shift');
        }
        if (key === 'ArrowUp') {
            div.classList.add('key__arrow');
            div.innerHTML = '&uarr;'
        }

        row.append(div);
        i++;
    }

    else {
        if (i === 55) {
            createRow('05')
        }
        let row = document.getElementById('05');
        let div = document.createElement('div');
        div.classList.add('key');
        div.setAttribute('id', key);
        div.innerHTML = engLocation[key].default;

        if (key === 'ControlLeft') {
            div.classList.add('key__bottom-funct');
            div.innerHTML = 'Ctrl';
        }
        if (key === 'MetaLeft') {
            div.classList.add('key__bottom-funct');
            div.innerHTML = 'Win';
        }
        if (key === 'Space') {
            div.classList.add('key__spacebar');
        }
        if (key === 'ArrowLeft') {
            div.classList.add('key__arrow');
            div.innerHTML = '&larr;'
        }
        if (key === 'ArrowDown') {
            div.classList.add('key__arrow');
            div.innerHTML = '&darr;'
        }
        if (key === 'ArrowRight') {
            div.classList.add('key__arrow');
            div.innerHTML = '&rarr;'
        }
        if (key === 'ControlRight') {
            div.innerHTML = 'Ctrl';
        }

        row.append(div);
        i++;
    }
}
}

function createRow(id) {
    let row = document.createElement('div');
    row.classList.add('row');
    row.setAttribute('id', `${id}`);
    keyboard.append(row);
}

keyboard.addEventListener('click', function(e){
    console.log(e.target);
});
