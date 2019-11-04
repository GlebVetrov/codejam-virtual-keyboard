const key = document.querySelectorAll('div.key');
const textArea = document.getElementById('result');

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

const addSymbolsInText = (symbol) => {
    console.log();
    const exceptSymbols = {
        Tab: 'Tab',
        CapsLock: 'CapsLock',
        Shift: 'Shift',
        Control: 'Control',
        Alt: 'Alt',
        Meta: 'Meta',
        Backspace: 'Backspace',
        Enter: 'Enter',
        Delete: 'Delete',
        ArrowUp: 'ArrowUp',
        ArrowDown: 'ArrowDown',
        ArrowLeft: 'ArrowLeft',
        ArrowRight: 'ArrowRight',
    };
    if (exceptSymbols[symbol]) {
        return;
    }
    console.log(symbol);
    textArea.textContent = textArea.textContent + symbol;
};

const pressButton = (node) => {
    const button = document.querySelector(`.${node}`).parentNode;
    button.classList.toggle('active');
};

const keyEventUp = (eo) => {
    // console.log(eo.key);
    // console.log(eo.code);
    console.log();
    textArea.focus();
    addSymbolsInText(eo.key);
    pressButton(eo.code);
    eo.preventDefault();
};

const keyEventDown = (eo) => {
    pressButton(eo.code);
    eo.preventDefault();
};

document.addEventListener('keyup', keyEventUp);
document.addEventListener('keydown', keyEventDown);

key.forEach(elem => {
    elem.addEventListener('click', () => console.log('click'));
});
console.log(key);