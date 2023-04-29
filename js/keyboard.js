import keysArray from "./keysArray.js";
import {i} from "../index.js";

export default function keyboard () {

const arrayCapAndLang = ["ruSmall", "ruCap", "enSmall", "enCap"];
//const keyboardId = document.getElementById("keyboardId");
//let b = arrayCapAndLang[i]

//Заголовок
let header = document.createElement('h1');
header.className = "keyboard-header"
header.innerHTML = "KEYBOARD"
document.body.append(header);

//экран вывода
let screen = document.createElement('div');
screen.className = "screen"
document.body.append(screen);

//Клавиатура
let keyboard = document.createElement('div');
keyboard.className = "keyboard"
keyboard.id = "keyboardId"
document.body.append(keyboard);


//Кнопки

//1 линия
//ё
let Backquote = document.createElement('div');
Backquote.className = "button-standard";
Backquote.id = "BackquoteId";
Backquote.innerHTML = `${keysArray[0][arrayCapAndLang[i]]}`;
keyboard.append(Backquote);
//1
let Digit1 = document.createElement('div');
Digit1.className = "button-standard"
Digit1.id = "Digit1Id"
Digit1.innerHTML = "1"
keyboard.append(Digit1);
//2
let Digit2 = document.createElement('div');
Digit2.className = "button-standard"
Digit2.id = "Digit2Id"
Digit2.innerHTML = "2"
keyboard.append(Digit2);
//3
let Digit3 = document.createElement('div');
Digit3.className = "button-standard"
Digit3.id = "Digit3Id"
Digit3.innerHTML = "3"
keyboard.append(Digit3);
//4
let Digit4 = document.createElement('div');
Digit4.className = "button-standard"
Digit4.id = "Digit4Id"
Digit4.innerHTML = "4"
keyboard.append(Digit4);
//5
let Digit5 = document.createElement('div');
Digit5.className = "button-standard"
Digit5.id = "Digit5Id"
Digit5.innerHTML = "5"
keyboard.append(Digit5);
//6
let Digit6 = document.createElement('div');
Digit6.className = "button-standard"
Digit6.id = "Digit6Id"
Digit6.innerHTML = "6"
keyboard.append(Digit6);
//7
let Digit7 = document.createElement('div');
Digit7.className = "button-standard"
Digit7.id = "Digit7Id"
Digit7.innerHTML = "7"
keyboard.append(Digit7);
//8
let Digit8 = document.createElement('div');
Digit8.className = "button-standard"
Digit8.id = "Digit8Id"
Digit8.innerHTML = "8"
keyboard.append(Digit8);
//9
let Digit9 = document.createElement('div');
Digit9.className = "button-standard"
Digit9.id = "Digit9Id"
Digit9.innerHTML = "9"
keyboard.append(Digit9);
//0
let Digit0 = document.createElement('div');
Digit0.className = "button-standard"
Digit0.id = "Digit0Id"
Digit0.innerHTML = "0"
keyboard.append(Digit0);
//-
let Minus = document.createElement('div');
Minus.className = "button-standard"
Minus.id = "MinusId"
Minus.innerHTML = "-"
keyboard.append(Minus);
//=
let Equal = document.createElement('div');
Equal.className = "button-standard"
Equal.id = "EqualId"
Equal.innerHTML = "="
keyboard.append(Equal);
//backspace
let Backspace = document.createElement('div');
Backspace.className = "button-standardx2"
Backspace.id = "BackspaceId"
Backspace.innerHTML = "Backspace"
keyboard.append(Backspace);

//2 линия
//tab
let Tab = document.createElement('div');
Tab.className = "button-standard"
Tab.id = "TabId"
Tab.innerHTML = "Tab"
keyboard.append(Tab);
//й
let KeyQ = document.createElement('div');
KeyQ.className = "button-standard"
KeyQ.id = "KeyQId"
KeyQ.innerHTML = "й"
keyboard.append(KeyQ);
//ц
let KeyW = document.createElement('div');
KeyW.className = "button-standard"
KeyW.id = "KeyWId"
KeyW.innerHTML = "ц"
keyboard.append(KeyW);
//у
let KeyE = document.createElement('div');
KeyE.className = "button-standard"
KeyE.id = "KeyEId"
KeyE.innerHTML = "у"
keyboard.append(KeyE);
//к
let KeyR = document.createElement('div');
KeyR.className = "button-standard"
KeyR.id = "KeyRId"
KeyR.innerHTML = "к"
keyboard.append(KeyR);
//е
let KeyT = document.createElement('div');
KeyT.className = "button-standard"
KeyT.id = "KeyTId"
KeyT.innerHTML = "е"
keyboard.append(KeyT);
//н
let KeyY = document.createElement('div');
KeyY.className = "button-standard"
KeyY.id = "KeyYId"
KeyY.innerHTML = "н"
keyboard.append(KeyY);
//г
let KeyU = document.createElement('div');
KeyU.className = "button-standard"
KeyU.id = "KeyUId"
KeyU.innerHTML = "г"
keyboard.append(KeyU);
//ш
let KeyI = document.createElement('div');
KeyI.className = "button-standard"
KeyI.id = "KeyIId"
KeyI.innerHTML = "ш"
keyboard.append(KeyI);
//щ
let KeyO = document.createElement('div');
KeyO.className = "button-standard"
KeyO.id = "KeyOId"
KeyO.innerHTML = "щ"
keyboard.append(KeyO);
//з
let KeyP = document.createElement('div');
KeyP.className = "button-standard"
KeyP.id = "KeyPId"
KeyP.innerHTML = "з"
keyboard.append(KeyP);
//х
let BracketLeft = document.createElement('div');
BracketLeft.className = "button-standard"
BracketLeft.id = "BracketLeftId"
BracketLeft.innerHTML = "х"
keyboard.append(BracketLeft);
//ъ
let BracketRight = document.createElement('div');
BracketRight.className = "button-standard"
BracketRight.id = "BracketRightId"
BracketRight.innerHTML = "ъ"
keyboard.append(BracketRight);
//\
let Backslash = document.createElement('div');
Backslash.className = "button-standard"
Backslash.id = "BackslashId"
Backslash.innerHTML = "&#92"
keyboard.append(Backslash);
//Del
let Delete = document.createElement('div');
Delete.className = "button-standard"
Delete.id = "DeleteId"
Delete.innerHTML = "Del"
keyboard.append(Delete);

//3 линия
//Caps lock
let CapsLock = document.createElement('div');
CapsLock.className = "button-standardx2"
CapsLock.id = "CapsLockId"
CapsLock.innerHTML = "Caps lock"
keyboard.append(CapsLock);
//ф
let KeyA = document.createElement('div');
KeyA.className = "button-standard"
KeyA.id = "KeyAId"
KeyA.innerHTML = "ф"
keyboard.append(KeyA);
//ы
let KeyS = document.createElement('div');
KeyS.className = "button-standard"
KeyS.id = "KeySId"
KeyS.innerHTML = "ы"
keyboard.append(KeyS);
//в
let KeyD = document.createElement('div');
KeyD.className = "button-standard"
KeyD.id = "KeyDId"
KeyD.innerHTML = "в"
keyboard.append(KeyD);
//а
let KeyF = document.createElement('div');
KeyF.className = "button-standard"
KeyF.id = "KeyFId"
KeyF.innerHTML = "а"
keyboard.append(KeyF);
//п
let KeyG = document.createElement('div');
KeyG.className = "button-standard"
KeyG.id = "KeyGId"
KeyG.innerHTML = "п"
keyboard.append(KeyG);
//р
let KeyH = document.createElement('div');
KeyH.className = "button-standard"
KeyH.id = "KeyHId"
KeyH.innerHTML = "р"
keyboard.append(KeyH);
//о
let KeyJ = document.createElement('div');
KeyJ.className = "button-standard"
KeyJ.id = "KeyJId"
KeyJ.innerHTML = "о"
keyboard.append(KeyJ);
//л
let KeyK = document.createElement('div');
KeyK.className = "button-standard"
KeyK.id = "KeyKId"
KeyK.innerHTML = "л"
keyboard.append(KeyK);
//д
let KeyL = document.createElement('div');
KeyL.className = "button-standard"
KeyL.id = "KeyLId"
KeyL.innerHTML = "д"
keyboard.append(KeyL);
//ж
let Semicolon = document.createElement('div');
Semicolon.className = "button-standard"
Semicolon.id = "SemicolonId"
Semicolon.innerHTML = "ж"
keyboard.append(Semicolon);
//э
let Quote = document.createElement('div');
Quote.className = "button-standard"
Quote.id = "QuoteId"
Quote.innerHTML = "э"
keyboard.append(Quote);
//Enter
let Enter = document.createElement('div');
Enter.className = "button-standardx2"
Enter.id = "EnterId"
Enter.innerHTML = "Enter"
keyboard.append(Enter);

//4 линия
//Shift
let ShiftLeft = document.createElement('div');
ShiftLeft.className = "button-standardx2"
ShiftLeft.id = "ShiftLeftId"
ShiftLeft.innerHTML = "Shift"
keyboard.append(ShiftLeft);
//я
let KeyZ = document.createElement('div');
KeyZ.className = "button-standard"
KeyZ.id = "KeyZId"
KeyZ.innerHTML = "я"
keyboard.append(KeyZ);
//ч
let KeyX = document.createElement('div');
KeyX.className = "button-standard"
KeyX.id = "KeyXId"
KeyX.innerHTML = "ч"
keyboard.append(KeyX);
//с
let KeyC = document.createElement('div');
KeyC.className = "button-standard"
KeyC.id = "KeyCId"
KeyC.innerHTML = "c"
keyboard.append(KeyC);
//м
let KeyV = document.createElement('div');
KeyV.className = "button-standard"
KeyV.id = "KeyVId"
KeyV.innerHTML = "м"
keyboard.append(KeyV);
//и
let KeyB = document.createElement('div');
KeyB.className = "button-standard"
KeyB.id = "KeyBId"
KeyB.innerHTML = "и"
keyboard.append(KeyB);
//т
let KeyN = document.createElement('div');
KeyN.className = "button-standard"
KeyN.id = "KeyNId"
KeyN.innerHTML = "т"
keyboard.append(KeyN);
//ь
let KeyM = document.createElement('div');
KeyM.className = "button-standard"
KeyM.id = "KeyMId"
KeyM.innerHTML = "ь"
keyboard.append(KeyM);
//б
let Comma = document.createElement('div');
Comma.className = "button-standard"
Comma.id = "CommaId"
Comma.innerHTML = "б"
keyboard.append(Comma);
//ю
let Period = document.createElement('div');
Period.className = "button-standard"
Period.id = "PeriodId"
Period.innerHTML = "ю"
keyboard.append(Period);
//.
let Slash = document.createElement('div');
Slash.className = "button-standard"
Slash.id = "SlashId"
Slash.innerHTML = "."
keyboard.append(Slash);
//up
let ArrowUp = document.createElement('div');
ArrowUp.className = "button-standard"
ArrowUp.id = "ArrowUpId"
ArrowUp.innerHTML = "&#8593"
keyboard.append(ArrowUp);
//пShift
let ShiftRight = document.createElement('div');
ShiftRight.className = "button-standardx2"
ShiftRight.id = "ShiftRightId"
ShiftRight.innerHTML = "Shift"
keyboard.append(ShiftRight);

//5 Линия
//Ctrl
let ControlLeft = document.createElement('div');
ControlLeft.className = "button-standard"
ControlLeft.id = "ControlLeftId"
ControlLeft.innerHTML = "Ctrl"
keyboard.append(ControlLeft);
//Win
let MetaLeft = document.createElement('div');
MetaLeft.className = "button-standard"
MetaLeft.id = "MetaLeftId"
MetaLeft.innerHTML = "Win"
keyboard.append(MetaLeft);
//AltLeft
let AltLeft = document.createElement('div');
AltLeft.className = "button-standard"
AltLeft.id = "AltLeftId"
AltLeft.innerHTML = "Alt"
keyboard.append(AltLeft);
//Backspace
let Space = document.createElement('div');
Space.className = "button-bkspace"
Space.id = "SpaceId"
Space.innerHTML = "Space"
keyboard.append(Space);
//AltRight
let AltRight = document.createElement('div');
AltRight.className = "button-standard"
AltRight.id = "AltRightId"
AltRight.innerHTML = "Alt"
keyboard.append(AltRight);
//Left
let ArrowLeft = document.createElement('div');
ArrowLeft.className = "button-standard"
ArrowLeft.id = "ArrowLeftId"
ArrowLeft.innerHTML = "&#8592"
keyboard.append(ArrowLeft);
//down
let ArrowDown = document.createElement('div');
ArrowDown.className = "button-standard"
ArrowDown.id = "ArrowDownId"
ArrowDown.innerHTML = "&#8595"
keyboard.append(ArrowDown);
//right
let ArrowRight = document.createElement('div');
ArrowRight.className = "button-standard"
ArrowRight.id = "ArrowRightId"
ArrowRight.innerHTML = "&#8594"
keyboard.append(ArrowRight);
//Ctrl right
let ControlRight = document.createElement('div');
ControlRight.className = "button-standard"
ControlRight.id = "ControlRightId"
ControlRight.innerHTML = "Ctrl"
keyboard.append(ControlRight);

//Подпись
let howToChLang = document.createElement('p');
howToChLang.className = "howToChLang"
howToChLang.innerHTML = "Для смены языка нажмите левые alt + ctrl"
document.body.append(howToChLang);
}


