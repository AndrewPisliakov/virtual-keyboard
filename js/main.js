import { engLocation, rusLocation } from "./keys.js";

const body = document.querySelector('body');
let currentLocation = engLocation;

// ==================== render body ====================================

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

body.append(texarea);

let keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
body.append(keyboard);

const h3 = document.createElement('h3');
h3.innerHTML = "Для переключения языка комбинация: левыe ctrl + alt";
h3.style.textAlign = 'center';
h3.style.marginTop = '50px';
body.append(h3);

keyboard.addEventListener('click', function (event) {
    let elem = event.target;
    if (elem.id === 'CapsLock') return;
    if (elem.id === 'Tab') return;
    if (elem.id === 'MetaLeft') return;
    if (elem.id === 'Enter') return;
    if (elem.id === 'Backspace') return;
    if (elem.id === 'Delete') return;
    if (elem.id === 'ShiftLeft' || elem.id === 'ShiftRight') return;
    if (elem.id === 'ControlLeft' || elem.id === 'ControlRight') return;
    if (elem.id === 'AltLeft' || elem.id === 'AltRight') return;
    if (elem.classList.contains('key')) {
        texarea.focus();
        texarea.value += elem.innerHTML;
    }
});

// ============== Local Storage =========================================

if (localStorage.getItem('sessionKeyBoard')) {
    renderKeyboard();
    currentLocation = JSON.parse(localStorage.getItem('sessionKeyBoard'));
    reRender(currentLocation);
} else {
    reRender();
};

function listenerLocakStorage() {
    localStorage.setItem('sessionKeyBoard', JSON.stringify(currentLocation));
};

// ================================ render virtualKeyBoard ==============


function renderKeyboard() {
    let i = 0;

    for (let key in currentLocation) {

        if (i <= 13) {
            if (i === 0) {
                createRow('01');
            }
            let row = document.getElementById('01');
            let div = document.createElement('div');
            div.classList.add('key');
            div.setAttribute('id', key);
            div.innerHTML = currentLocation[key].default;

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
            div.innerHTML = currentLocation[key].default;

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
            div.innerHTML = currentLocation[key].default;

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
            div.innerHTML = currentLocation[key].default;

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
            div.innerHTML = currentLocation[key].default;

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
};

function createRow(id) {
    let row = document.createElement('div');
    row.classList.add('row');
    row.setAttribute('id', `${id}`);
    keyboard.append(row);
};


//===================== function rerender ===================

function reRender(langLocation, localizationKey = 'default') {
    let listKey = document.querySelectorAll('.key');

    /*     let capsLock = document.querySelector('#CapsLock').classList.contains('acitve');
        console.log(capsLock);
        let localizationKey = 'default';
        
        if(capsLock) {
            localizationKey = 'shift';
        }  */

    listKey.forEach((elem) => {
        let keyCode = elem.id;
        elem.innerHTML = langLocation[keyCode][localizationKey];

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

};

reRender(currentLocation);

// ============== disable text selection =============== ============
const disableselect = (e) => {
    return false
};
keyboard.onselectstart = disableselect
keyboard.onmousedown = disableselect

// hover mouse =======================================

keyboard.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('key')) {
        e.target.style.backgroundColor = '#A2CCB6';
        e.target.style.fontWeight = '400';
    };
});

keyboard.addEventListener('mouseout', function (e) {
    if (e.target.classList.contains('key')) {
        e.target.style.backgroundColor = '';
        e.target.style.fontWeight = '';
    };
    if (e.target.classList.contains('key') && e.target.classList.contains('active')) {
        e.target.classList.remove('active');
    }
});


//========= event keyboard =============================

window.addEventListener('keydown', function (e) {
    let realKey = e.code;
    let virtualKeyboardKey = keyboard.querySelector(`#${realKey}`);

    if (realKey === 'CapsLock') {
        return;
    };

    virtualKeyboardKey.classList.add('active');
});

window.addEventListener('keyup', function (e) {
    let realKey = e.code;
    let virtualKeyboardKey = keyboard.querySelector(`#${realKey}`);

    if (realKey === 'CapsLock') {
        return;
    };

    virtualKeyboardKey.classList.remove('active');
});

// event virtual keyboard ================================

// hover to button
keyboard.addEventListener('mousedown', function (e) {
    if (e.target.classList.contains('key')) {
        e.target.style.backgroundColor = '';
        e.target.style.fontWeight = '';
        e.target.style.fontWeight = '600';
        e.target.classList.toggle('active');
    }
});

keyboard.addEventListener('mouseup', function (e) {

    if (e.target.id === 'CapsLock') {
        return;
    };

    if (e.target.classList.contains('key')) {
        e.target.classList.remove('active');
        e.target.style.fontWeight = '';
    }
});


//======== capsLock  active =============

window.addEventListener('keydown', function (e) {

    let realKey = e.code;
    let virtualKeyboardKey = keyboard.querySelector(`#CapsLock`);

    if (realKey === 'CapsLock') {
        virtualKeyboardKey.classList.toggle('active');
    };

    if (realKey === 'CapsLock' && virtualKeyboardKey.classList.contains('active')) {
        reRender(currentLocation, 'caps');
    } else {
        reRender(currentLocation, 'default')
    }
});

keyboard.addEventListener('mousedown', function (e) {
    let elem = e.target;
    if (elem.id === 'CapsLock') {
        if (elem.classList.contains('active')) {
            reRender(currentLocation, 'caps');
        } else {
            elem.classList.remove('acitve');
            reRender(currentLocation, 'default')
        }
    }
});


//======== shift active =============

window.addEventListener('keydown', function (e) {
    let realKey = e.code;
    if (realKey === 'ShiftLeft' || realKey === 'ShiftRight') {
        reRender(currentLocation, 'shift')
    };
});

window.addEventListener('keyup', function (e) {
    let realKey = e.code;
    if (realKey === 'ShiftLeft' || realKey === 'ShiftRight') {
        reRender(currentLocation, 'default')
    };
});

keyboard.addEventListener('mousedown', function (e) {
    let elem = e.target;
    if (elem.id === 'ShiftLeft' || elem.id === 'ShiftRight') {
        reRender(currentLocation, 'shift')
    };
});

keyboard.addEventListener('mouseup', function (e) {
    let elem = e.target;
    if (elem.id === 'ShiftLeft' || elem.id === 'ShiftRight') {
        reRender(currentLocation, 'default')
    };
});


// =========== change language =======================

window.addEventListener('keydown', function (e) {
    if (e.code === 'AltLeft') {
        e.preventDefault();
    }
    let capsLock = this.document.querySelector('#CapsLock');
    let ctrl = this.document.querySelector('#ControlLeft');
    let alt = this.document.querySelector('#AltLeft');

    if (ctrl.classList.contains('active') && alt.classList.contains('active')) {
        if (currentLocation === engLocation) {
            currentLocation = rusLocation;
        } else {
            currentLocation = engLocation;
        }
        if (capsLock.classList.contains('active')) {
            reRender(currentLocation, 'caps');
        } else {
            reRender(currentLocation);
        };

        listenerLocakStorage();
    }
});


// =========== change TAB =======================

window.addEventListener('keydown', function (e) {
    if (e.code === 'Tab') {
        e.preventDefault();
        texarea.value += '    ';
    };
});

keyboard.addEventListener('mousedown', function (e) {
    let elem = e.target;
    if (elem.id === 'Tab') {
        texarea.value += '    ';
    };
});


//=========== enter =======================

keyboard.addEventListener('mousedown', function (e) {
    let elem = e.target;
    if (elem.id === 'Enter') {
        e.preventDefault();
        texarea.value += '\n';
    };
});

//=========== Backspace =======================

keyboard.addEventListener('mousedown', function (e) {
    let elem = e.target;
    if (elem.id === 'Backspace') {
        e.preventDefault();
        let str = texarea.value;
        texarea.value = str.substring(0, str.length - 1)
    };
});


//=========== DELETE =======================

keyboard.addEventListener('mousedown', function (e) {
    let elem = e.target;
    if (elem.id === 'Delete') {
        e.preventDefault();
        let str = texarea.value;
        texarea.value = str.substring(0, str.length - 1);
    };
});


