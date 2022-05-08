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
texarea.style.marginBottom = '50px';
texarea.autofocus = true;

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
            if (i === 0) {
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


//===================== function rerender ===================

function reRender(langLocation) {
    let listKey = document.querySelectorAll('.key');

    listKey.forEach((elem) => {
        let keyCode = elem.id;
        elem.innerHTML = langLocation[keyCode].default;

        if (keyCode === 'ArrowUp') {
            elem.innerHTML = '&uarr;'
        }
        if (keyCode === 'ArrowLeft') {

            elem.innerHTML = '&larr;'
        }
        if (keyCode === 'ArrowDown') {
            elem.innerHTML = '&darr;'
        }
        if (keyCode === 'ArrowRight') {
            elem.innerHTML = '&rarr;'
        }
        if (keyCode === 'ControlRight') {
            elem.innerHTML = 'Ctrl';
        }
        if (keyCode === 'ControlLeft') {
            elem.innerHTML = 'Ctrl';
        }
    });
}

reRender(rusLocation);



// hover mouse

keyboard.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('key')) {
        e.target.style.backgroundColor = '#A2CCB6';
        e.target.style.fontWeight = '400';
    }
});

keyboard.addEventListener('mouseout', function (e) {
    if (e.target.classList.contains('key')) {
        e.target.style.backgroundColor = '';
        e.target.style.fontWeight = '';
    }
});

// event keyboard
window.addEventListener('keydown', function (e) {
    texarea.autofocus = true;
    let realKey = e.code;
    let virtualKeyboardKey = keyboard.querySelector(`#${realKey}`);

    if (e.target.classList.contains('key')) {
        virtualKeyboardKey.classList.add('active');
    }

});

window.addEventListener('keyup', function (e) {
    let realKey = e.code;
    console.log(realKey);
    let virtualKeyboardKey = keyboard.querySelector(`#${realKey}`);
    console.log(virtualKeyboardKey);

    virtualKeyboardKey.classList.toggle('active');
});



// hover to button
keyboard.addEventListener('mousedown', function (e) {
    if (e.target.classList.contains('key')) {
        e.target.style.backgroundColor = '';
        e.target.style.fontWeight = '';
        e.target.style.fontWeight = '600';
        e.target.classList.add('active');
    }
});

keyboard.addEventListener('mouseup', function (e) {
    if (e.target.classList.contains('key')) {
        e.target.classList.remove('active');
        e.target.style.fontWeight = '';
    }
});









// разобраться с локализацией, менять innerHTML при переходе на другой язык

// на мышь mouseUp mouseDown  KeyUp KeyDown
//keyboard.addEventListener('keydown'){} // добавили класс актив
//keyup убрали класс эктив на shift
// =======================  event.keyCode === elem.id   чтобы класс актив клавиша была круглой

//добавить в локализацию CapsLock => Caps   если зажаты шифт и капслок то отображает маленькие буквы

// когда вызываем функцию rerender смотрим нажат ли 1.shift + caps, 2.shift, 3.caps


//определение нажатия shift ctr caps
// 1. в event
// 2. прописываем через класс active
//


// 1. при нажатии на клавишу добавлять класс active
// 2. пеереключение языка
// 3. shift
// 4. caps
// 5 shift + caps 