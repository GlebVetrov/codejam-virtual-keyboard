const key = document.querySelectorAll('div.key');

const pressButton = (node) => {
    const button = document.querySelector(`.${node}`).parentNode;
    button.classList.toggle('active');
};

const keyEventUp = (eo) => {
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