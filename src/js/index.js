import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

console.log('HELLO 🚀')

const buttonBack = document.querySelector('.button1--js');
const counter = document.querySelector('.counter--js');
const buttonAdd = document.querySelector('.button2--js');
const key = new Date ().toLocaleString().slice(0, 10)
const currentValue = localStorage.getItem('entry');
let glasses = 0;

const localSorageValue = localStorage.getItem(key);

if (localSorageValue) {
    glasses = localSorageValue;
} else {
    localStorage.setItem(key, 0);
}
counter.innerHTML = glasses;



buttonAdd.addEventListener('click',() => {
(++glasses);
counter.innerHTML = glasses;
localStorage.setItem(key, glasses);
});

buttonBack.addEventListener('click',() => {
    if (glasses > 0){
    (--glasses);
    }
    counter.innerHTML = glasses;
    localStorage.setItem(key, glasses);
    });
