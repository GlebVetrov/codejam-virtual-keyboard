const keys = document.querySelectorAll('div.key');
const textArea = document.getElementById('result');

const codes = ['ShiftLeft', 'AltLeft'];
let pressed = new Set();

const detectLang = () => {
    const [key] = keys;
    const isClass = key.querySelector('span:first-child.on');
    if (isClass) {
        return 'ru';
    } else {
        return 'en';
    }
};

const animationClass = 'active';

const exceptSymbols = {
    Tab: 'Tab',
    CapsLock: 'CapsLock',
    Shift: 'Shift',
    Win: 'Win',
    Ctrl: 'Ctrl',
    Alt: 'Alt',
    Meta: 'Meta',
    Backspace: 'Backspace',
    ENTER: 'ENTER',
};

const funcButton = {
    ENTER() {
        textArea.value += '\n';
    },
    Backspace() {
        textArea.value = textArea.value.substring(0, textArea.value.length - 1);
    },
    Shift() {
        changeCase();
    },
    ShiftLeft() {
        changeCase();
    },
    ShiftRight() {
        changeCase();
    },
    CapsLock() {
        changeCase();
    },
    Tab() {
        textArea.value += '    ';
    }
};

const replaceClass = (node, classNameFirst, classNameSecond) => {
    node.classList.toggle(classNameFirst);
    node.classList.toggle(classNameSecond);
};

const switchClasses = (firstClass, secondClass) => {
    const nodesFirst = document.querySelectorAll(`.${firstClass}`);
    const nodesSecond = document.querySelectorAll(`.${secondClass}`);
    nodesFirst.forEach(node => replaceClass(node, firstClass, secondClass));
    nodesSecond.forEach(node => replaceClass(node, firstClass, secondClass));
};

const changeCase = () => {
    const lowCase = 'down';
    const upCase = 'up';
    switchClasses(lowCase, upCase);
};

const saveLang = (lang) => {
    localStorage.setItem('lang', lang);
};

const changeLang = () => {
    const onLang = 'on';
    const offLang = 'off';
    switchClasses(onLang, offLang);
    saveLang(detectLang());
};

const setLang = () => {
    const isLocal = localStorage.getItem('lang');
    if (isLocal) {
        isLocal === detectLang() ? null : changeLang();
    }
};

setLang();

const changeActiveClass = (button) => {
    button.classList.contains(animationClass) ? button.classList.remove(animationClass) : button.classList.add(animationClass);
};

const pressButton = (className) => {
    let button;
    if (document.querySelector(`.${className}`)) {
        button = document.querySelector(`.${className}`).parentNode;
    } else {
        return;
    }
    changeActiveClass(button);
};

const isRunOnKeys = (eo) => {
    pressed.add(eo.code);

    for (let code of codes) {
        if (!pressed.has(code)) {
            return;
        }
    }
    console.log(eo.code);
    pressed.clear();
    changeLang();
    return true;
};

const hotKey = {
    ShiftLeft: null,
    AltLeft: null,
    AltRight: null,
    ShiftRight: null,
};

const keyEventUp = (eo) => {
    textArea.focus();
    pressButton(eo.code);
    if (eo.code in hotKey) {
        if (isRunOnKeys(eo)) {
            eo.preventDefault();
            return;
        }
    }
    if (funcButton[eo.code]) {
        funcButton[eo.code]();
        eo.preventDefault();
    }
};

const keyEventDown = (eo) => {
    pressButton(eo.code);
    if (eo.code in hotKey) {
        pressed.delete(eo.code);
        eo.preventDefault();
    }
    if (funcButton[eo.code]) {
        eo.preventDefault();
    }
};

const clickAnim = (elem) => {
    changeActiveClass(elem);
    setTimeout(() => changeActiveClass(elem), 100);
};

const clickButton = (eo) => {
    textArea.focus();
    let elem = eo.target;
    if (elem.classList.contains('down')) {
        elem = elem.parentNode.parentNode;
    }
    clickAnim(elem);
    const sign = elem.querySelector('.down').innerHTML;
    if (!exceptSymbols[sign]) {
        textArea.value += sign;
        return;
    }
    if(funcButton[sign]) {
        funcButton[sign]();
    }
};

keys.forEach(elem => {
    elem.addEventListener('click', clickButton);
});

document.addEventListener('keyup', keyEventUp);
document.addEventListener('keydown', keyEventDown);

window.addEventListener('DOMContentLoaded', () => console.log('hello')
);