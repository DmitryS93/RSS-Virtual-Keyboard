import keysArray from "./keysArray.js";
import {i} from "../index.js";

export default function capsru () {
const arrayCapAndLang = ["ruSmall", "ruCap", "enSmall", "enCap"]
let b = arrayCapAndLang[i]
//Кнопки
//1 линия
//ё
let Backquote = document.getElementById("BackquoteId");
Backquote.innerHTML = `${keysArray[0][arrayCapAndLang[i]]}`;

//2 линия
//й
let KeyQ = document.getElementById("KeyQId");
KeyQ.innerHTML = `${keysArray[13][arrayCapAndLang[i]]}`;
//ц
let KeyW = document.getElementById("KeyWId");
KeyW.innerHTML = `${keysArray[14][arrayCapAndLang[i]]}`;
//у
let KeyE = document.getElementById("KeyEId");
KeyE.innerHTML = `${keysArray[15][arrayCapAndLang[i]]}`;
//к
let KeyR = document.getElementById("KeyRId");
KeyR.innerHTML = `${keysArray[16][arrayCapAndLang[i]]}`;
//е
let KeyT = document.getElementById("KeyTId");
KeyT.innerHTML = `${keysArray[17][arrayCapAndLang[i]]}`;
//н
let KeyY = document.getElementById("KeyYId");
KeyY.innerHTML = `${keysArray[18][arrayCapAndLang[i]]}`;
//г
let KeyU = document.getElementById("KeyUId");
KeyU.innerHTML = `${keysArray[19][arrayCapAndLang[i]]}`;
//ш
let KeyI = document.getElementById("KeyIId");
KeyI.innerHTML = `${keysArray[20][arrayCapAndLang[i]]}`;
//щ
let KeyO = document.getElementById("KeyOId");
KeyO.innerHTML = `${keysArray[21][arrayCapAndLang[i]]}`;
//з
let KeyP = document.getElementById("KeyPId");
KeyP.innerHTML = `${keysArray[22][arrayCapAndLang[i]]}`;
//х
let BracketLeft = document.getElementById("BracketLeftId");
BracketLeft.innerHTML = `${keysArray[23][arrayCapAndLang[i]]}`;
//ъ
let BracketRight = document.getElementById("BracketRightId");
BracketRight.innerHTML = `${keysArray[24][arrayCapAndLang[i]]}`;

//3 линия
//ф
let KeyA = document.getElementById("KeyAId");
KeyA.innerHTML = `${keysArray[26][arrayCapAndLang[i]]}`;
//ы
let KeyS = document.getElementById("KeySId");
KeyS.innerHTML = `${keysArray[27][arrayCapAndLang[i]]}`;
//в
let KeyD = document.getElementById("KeyDId");
KeyD.innerHTML = `${keysArray[28][arrayCapAndLang[i]]}`;
//а
let KeyF = document.getElementById("KeyFId");
KeyF.innerHTML = `${keysArray[29][arrayCapAndLang[i]]}`;
//п
let KeyG = document.getElementById("KeyGId");
KeyG.innerHTML = `${keysArray[30][arrayCapAndLang[i]]}`;
//р
let KeyH = document.getElementById("KeyHId");
KeyH.innerHTML = `${keysArray[31][arrayCapAndLang[i]]}`;
//о
let KeyJ = document.getElementById("KeyJId");
KeyJ.innerHTML = `${keysArray[32][arrayCapAndLang[i]]}`;
//л
let KeyK = document.getElementById("KeyKId");
KeyK.innerHTML = `${keysArray[33][arrayCapAndLang[i]]}`;
//д
let KeyL = document.getElementById("KeyLId");
KeyL.innerHTML = `${keysArray[34][arrayCapAndLang[i]]}`;
//ж
let Semicolon = document.getElementById("SemicolonId");
Semicolon.innerHTML = `${keysArray[35][arrayCapAndLang[i]]}`;
//э
let Quote = document.getElementById("QuoteId");
Quote.innerHTML = `${keysArray[36][arrayCapAndLang[i]]}`

//4 линия
//я
let KeyZ = document.getElementById("KeyZId");
KeyZ.innerHTML = `${keysArray[37][arrayCapAndLang[i]]}`;
//ч
let KeyX = document.getElementById("KeyXId");
KeyX.innerHTML = `${keysArray[38][arrayCapAndLang[i]]}`;
//с
let KeyC = document.getElementById("KeyCId");
KeyC.innerHTML = `${keysArray[39][arrayCapAndLang[i]]}`;
//м
let KeyV = document.getElementById("KeyVId");
KeyV.innerHTML = `${keysArray[40][arrayCapAndLang[i]]}`;
//и
let KeyB = document.getElementById("KeyBId");
KeyB.innerHTML = `${keysArray[41][arrayCapAndLang[i]]}`;
//т
let KeyN = document.getElementById("KeyNId");
KeyN.innerHTML = `${keysArray[42][arrayCapAndLang[i]]}`;
//ь
let KeyM = document.getElementById("KeyMId");
KeyM.innerHTML = `${keysArray[43][arrayCapAndLang[i]]}`;
//б
let Comma = document.getElementById("CommaId");
Comma.innerHTML = `${keysArray[44][arrayCapAndLang[i]]}`;
//ю
let Period = document.getElementById("PeriodId");
Period.innerHTML = `${keysArray[45][arrayCapAndLang[i]]}`;

}