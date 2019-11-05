const key = document.querySelectorAll('div.key');
const textArea = document.getElementById('result');

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

const changeLang = () => {
    const onLang = 'on';
    const offLang = 'off';
    switchClasses(onLang, offLang);
};

const changeActiveClass = (button) => {
    button.classList.contains(animationClass) ? button.classList.remove(animationClass) : button.classList.add(animationClass);
};

const pressButton = (node) => {
    let button;
    if (document.querySelector(`.${node}`)) {
        button = document.querySelector(`.${node}`).parentNode;
    } else {
        return;
    }
    changeActiveClass(button);
};

const keyEventUp = (eo) => {
    textArea.focus();
    pressButton(eo.code);
};

const keyEventDown = (eo) => {
    pressButton(eo.code);
};

const clickAnim = (elem) => {
    changeActiveClass(elem);
    setTimeout(() => changeActiveClass(elem), 100);
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
    CapsLock() {
        changeCase();
    },
    Tab() {
        textArea.value += '    ';
    }
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

key.forEach(elem => {
    elem.addEventListener('click', clickButton);
});

document.addEventListener('keyup', keyEventUp);
document.addEventListener('keydown', keyEventDown);

window.addEventListener('DOMContentLoaded', () => console.log('hello')
);