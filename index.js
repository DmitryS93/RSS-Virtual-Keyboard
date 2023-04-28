import keyboard from "./js/keyboard.js";
import rebuilder from "./js/rebuilder.js";
import capsru from "./js/capsru.js";
import capsen from "./js/capsen.js"
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
    //console.log(activeButton)
    if (activeButton !== 0 && activeButton !== null) {
    activeButton.classList.add("button-active");
    let screen = document.querySelector(`.screen`);
    if (event.key === "Shift") {
      if (i === 0) {
        i = 1;
        rebuilder();
      } else if (i === 2) {
        i = 3;
        rebuilder();
      }
    } else if (event.key === "CapsLock") {
        if (i === 0) {
          i = 1;
          capsru();
        } else if (i === 2) {
          i = 3;
          capsen();
        } else if (i === 1) {
          i = 0;
          capsru();
        } else if (i === 3) {
          i = 2;
          capsen();
        }
    } else if (event.key === "Alt" || event.key === "Control" || event.key === "Meta") {
    } else if (event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "ArrowLeft" || event.key === "ArrowRight") {
      if (event.key === "ArrowUp") {
        let newSymb = document.createElement('span');
        newSymb.innerHTML = "&#8593"
        screen.append(newSymb);
      } else if (event.key === "ArrowDown") {
        let newSymb = document.createElement('span');
        newSymb.innerHTML = "&#8595"
        screen.append(newSymb);
      } else if (event.key === "ArrowLeft") {
        let newSymb = document.createElement('span');
        newSymb.innerHTML = "&#8592"
        screen.append(newSymb);
      } else if (event.key === "ArrowRight") {
        let newSymb = document.createElement('span');
        newSymb.innerHTML = "&#8594"
        screen.append(newSymb);
      }
    } else if (event.key === "Backspace") {
        screen.removeChild(screen.lastChild)
    } else if (event.code === "Space") {
      let newSymb = document.createElement('span');
      newSymb.className = "space"
      //newSymb.innerHTML = ""
      screen.append(newSymb);
    } else if (event.key === "Tab") {
      let newSymb = document.createElement('span');
      newSymb.className = "tab"
      //newSymb.innerHTML = ""
      screen.append(newSymb);
    } else if (event.key === "Enter") {
      let newSymb = document.createElement('br');
      //newSymb.className = "tab"
      //newSymb.innerHTML = ""
      screen.append(newSymb);
    }else {
    let newSymb = document.createElement('span');
    let buttonTextContent = document.getElementById(`${event.code}Id`).textContent
    //console.log(buttonTextContent)
    newSymb.innerHTML = buttonTextContent
    screen.append(newSymb);
    //screen.textContent = screen.textContent + event.key
    }
    }
  });
//Смена языка
function changeLang() {
    //console.log("func")
    if (i === 0) {
        i = 2
        rebuilder();
        //console.log("rebuild")
        //console.log(i)
    } else if (i === 2) {
        i = 0;
        rebuilder();
       // console.log("rebuild")
       // console.log(i)
    } else if (i === 1) {
        i = 3;
        //rebuilder();
        capsru();
    } else if (i === 3) {
        i = 1;
        //rebuilder();
        capsru();
    } else {
        //console.log("not working");
    }
}
//запуск функции при одновременном нажатии кнопок
function runOnKeys(func, ...codes) {
    let pressed = new Set();
    document.addEventListener('keydown', function(event) {
      pressed.add(event.code);
      for (let code of codes) {
        if (!pressed.has(code)) {
          return;
        }
      }
      //console.log(pressed)
     // console.log(i + "runOnKeys")
      pressed.clear();
      func();
    });
    document.addEventListener('keyup', function(event) {
      pressed.delete(event.code);
    });
}

runOnKeys(changeLang, "ControlLeft", "AltLeft");

//Отпускание кнопки
document.addEventListener('keyup', function(event) {
    activeButton = document.getElementById(`${event.code}Id`);
    if (activeButton !== 0 && activeButton !== null) {
      if (event.key === "Shift") {
       // console.log("shiftEvent")
        if (i === 1) {
          i = 0;
          rebuilder();
        //  console.log("shift1")
        //  console.log(i)
        } else if (i === 3) {
          i = 2;
          rebuilder();
        //  console.log("shift3")
        //  console.log(i)
        } else {

        }
      }
      activeButton.classList.remove("button-active");
    }
  });

//Щелчек мыши по кнопке
document.getElementById(`keyboardId`).addEventListener('mousedown', function(event) {
    //console.log(event.target.id)
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

//Сохранение языка и загрузка
  function setLocalStorage() {
    localStorage.setItem('index', i);
  }
  window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if(localStorage.getItem('index')) {
        i = Number(localStorage.getItem('index'));
       // console.log(typeof(i))
       // console.log((i))
        changeLang()
        changeLang()
        return i
    } 
  }
  window.addEventListener('load', getLocalStorage) 