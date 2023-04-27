import keyboard from "./js/keyboard.js";
import rebuilder from "./js/rebuilder.js";
//import {i2} from "./js/i.js";
let i = 0
keyboard()
export {i};

let activeButton = 0
let pressed = new Set()

//Нажатие кнопки
document.addEventListener('keydown', function(event) {
    pressed = new Set()
    activeButton = document.getElementById(`${event.code}Id`);
    console.log(activeButton)
    if (activeButton !== 0 && activeButton !== null) {
    activeButton.classList.add("button-active");
    let screen = document.querySelector(`.screen`);
    screen.textContent = screen.textContent + event.key
    console.log(event.getModifierState('CapsLock'))
    }
  });

function changeLang() {
    console.log("func")
    if (i===0) {
        i = 2
        rebuilder();
        console.log("rebuild")
        console.log(i)
    } else if (i===2) {
        i = 0;
        rebuilder();
        console.log("rebuild")
        console.log(i)
    } else {
        console.log("not working")
        
    }
}

function runOnKeys(func, ...codes) {
    let pressed = new Set();
    document.addEventListener('keydown', function(event) {
      pressed.add(event.code);
      for (let code of codes) {
        if (!pressed.has(code)) {
          return;
        }
      }
      console.log(pressed)
      console.log(i + "runOnKeys")
      pressed.clear();
      func();
    });
    document.addEventListener('keyup', function(event) {
      pressed.delete(event.code);
    });
}

runOnKeys(changeLang, "ControlLeft", "ShiftLeft");

//Отпускание кнопки
document.addEventListener('keyup', function(event) {
    activeButton = document.getElementById(`${event.code}Id`);
    if (activeButton !== 0 && activeButton !== null) {
    activeButton.classList.remove("button-active");
    }
  });

//Щелчек мыши по кнопке
document.getElementById(`keyboardId`).addEventListener('mousedown', function(event) {
    console.log(event.target.id)
    if (event.target.id !== "keyboardId") {
        activeButton = document.getElementById(`${event.target.id}`);
        if (activeButton !== 0) {
        activeButton.classList.add("button-active");
        let screen = document.querySelector(`.screen`);
        screen.textContent = screen.textContent + activeButton.textContent 
        }
    }
  });

//отпускание кнопки мыши
document.addEventListener('mouseup', function(event) {
    if (activeButton !== 0) {
    //let activeButton = document.getElementById(`${event.target.id}`);
    activeButton.classList.remove("button-active");
    }
  });


  function setLocalStorage() {
    localStorage.setItem('index', i);
  }
  window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if(localStorage.getItem('index')) {
        i = Number(localStorage.getItem('index'));
        console.log(typeof(i))
        console.log((i))
        changeLang()
        changeLang()
        return i
    } 
  }
  window.addEventListener('load', getLocalStorage) 