import keysArray from "./keysArray.js";
import {i} from "../index.js";

export default function keyboard () {

const arrayCapAndLang = ["ruSmall", "ruCap", "enSmall", "enCap"]
let b = arrayCapAndLang[i]

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
Backquote.className = "button-standard"
Backquote.id = "BackquoteId"
//Backquote.innerHTML = "ё"
Backquote.innerHTML = `${keysArray[0][arrayCapAndLang[i]]}`
keyboardId.append(Backquote);
//1
let Digit1 = document.createElement('div');
Digit1.className = "button-standard"
Digit1.id = "Digit1Id"
Digit1.innerHTML = "1"
keyboardId.append(Digit1);
//2
let Digit2 = document.createElement('div');
Digit2.className = "button-standard"
Digit2.id = "Digit2Id"
Digit2.innerHTML = "2"
keyboardId.append(Digit2);
//3
let Digit3 = document.createElement('div');
Digit3.className = "button-standard"
Digit3.id = "Digit3Id"
Digit3.innerHTML = "3"
keyboardId.append(Digit3);
//4
let Digit4 = document.createElement('div');
Digit4.className = "button-standard"
Digit4.id = "Digit4Id"
Digit4.innerHTML = "4"
keyboardId.append(Digit4);
//5
let Digit5 = document.createElement('div');
Digit5.className = "button-standard"
Digit5.id = "Digit5Id"
Digit5.innerHTML = "5"
keyboardId.append(Digit5);
//6
let Digit6 = document.createElement('div');
Digit6.className = "button-standard"
Digit6.id = "Digit6Id"
Digit6.innerHTML = "6"
keyboardId.append(Digit6);
//7
let Digit7 = document.createElement('div');
Digit7.className = "button-standard"
Digit7.id = "Digit7Id"
Digit7.innerHTML = "7"
keyboardId.append(Digit7);
//8
let Digit8 = document.createElement('div');
Digit8.className = "button-standard"
Digit8.id = "Digit8Id"
Digit8.innerHTML = "8"
keyboardId.append(Digit8);
//9
let Digit9 = document.createElement('div');
Digit9.className = "button-standard"
Digit9.id = "Digit9Id"
Digit9.innerHTML = "9"
keyboardId.append(Digit9);
//0
let Digit0 = document.createElement('div');
Digit0.className = "button-standard"
Digit0.id = "Digit0Id"
Digit0.innerHTML = "0"
keyboardId.append(Digit0);
//-
let Minus = document.createElement('div');
Minus.className = "button-standard"
Minus.id = "MinusId"
Minus.innerHTML = "-"
keyboardId.append(Minus);
//=
let Equal = document.createElement('div');
Equal.className = "button-standard"
Equal.id = "EqualId"
Equal.innerHTML = "="
keyboardId.append(Equal);
//backspace
let Backspace = document.createElement('div');
Backspace.className = "button-standardx2"
Backspace.id = "BackspaceId"
Backspace.innerHTML = "Backspace"
keyboardId.append(Backspace);

//2 линия
//tab
let Tab = document.createElement('div');
Tab.className = "button-standard"
Tab.id = "TabId"
Tab.innerHTML = "Tab"
keyboardId.append(Tab);
//й
let KeyQ = document.createElement('div');
KeyQ.className = "button-standard"
KeyQ.id = "KeyQId"
KeyQ.innerHTML = "й"
keyboardId.append(KeyQ);
//ц
let KeyW = document.createElement('div');
KeyW.className = "button-standard"
KeyW.id = "KeyWId"
KeyW.innerHTML = "ц"
keyboardId.append(KeyW);
//у
let KeyE = document.createElement('div');
KeyE.className = "button-standard"
KeyE.id = "KeyEId"
KeyE.innerHTML = "у"
keyboardId.append(KeyE);
//к
let KeyR = document.createElement('div');
KeyR.className = "button-standard"
KeyR.id = "KeyRId"
KeyR.innerHTML = "к"
keyboardId.append(KeyR);
//е
let KeyT = document.createElement('div');
KeyT.className = "button-standard"
KeyT.id = "KeyTId"
KeyT.innerHTML = "е"
keyboardId.append(KeyT);
//н
let KeyY = document.createElement('div');
KeyY.className = "button-standard"
KeyY.id = "KeyYId"
KeyY.innerHTML = "н"
keyboardId.append(KeyY);
//г
let KeyU = document.createElement('div');
KeyU.className = "button-standard"
KeyU.id = "KeyUId"
KeyU.innerHTML = "г"
keyboardId.append(KeyU);
//ш
let KeyI = document.createElement('div');
KeyI.className = "button-standard"
KeyI.id = "KeyIId"
KeyI.innerHTML = "ш"
keyboardId.append(KeyI);
//щ
let KeyO = document.createElement('div');
KeyO.className = "button-standard"
KeyO.id = "KeyOId"
KeyO.innerHTML = "щ"
keyboardId.append(KeyO);
//з
let KeyP = document.createElement('div');
KeyP.className = "button-standard"
KeyP.id = "KeyPId"
KeyP.innerHTML = "з"
keyboardId.append(KeyP);
//х
let BracketLeft = document.createElement('div');
BracketLeft.className = "button-standard"
BracketLeft.id = "BracketLeftId"
BracketLeft.innerHTML = "х"
keyboardId.append(BracketLeft);
//ъ
let BracketRight = document.createElement('div');
BracketRight.className = "button-standard"
BracketRight.id = "BracketRightId"
BracketRight.innerHTML = "ъ"
keyboardId.append(BracketRight);
//\
let Backslash = document.createElement('div');
Backslash.className = "button-standard"
Backslash.id = "BackslashId"
Backslash.innerHTML = "&#92"
keyboardId.append(Backslash);
//Del
let Delete = document.createElement('div');
Delete.className = "button-standard"
Delete.id = "DeleteId"
Delete.innerHTML = "Del"
keyboardId.append(Delete);

//3 линия
//Caps lock
let CapsLock = document.createElement('div');
CapsLock.className = "button-standardx2"
CapsLock.id = "CapsLockId"
CapsLock.innerHTML = "Caps lock"
keyboardId.append(CapsLock);
//ф
let KeyA = document.createElement('div');
KeyA.className = "button-standard"
KeyA.id = "KeyAId"
KeyA.innerHTML = "ф"
keyboardId.append(KeyA);
//ы
let KeyS = document.createElement('div');
KeyS.className = "button-standard"
KeyS.id = "KeySId"
KeyS.innerHTML = "ы"
keyboardId.append(KeyS);
//в
let KeyD = document.createElement('div');
KeyD.className = "button-standard"
KeyD.id = "KeyDId"
KeyD.innerHTML = "в"
keyboardId.append(KeyD);
//а
let KeyF = document.createElement('div');
KeyF.className = "button-standard"
KeyF.id = "KeyFId"
KeyF.innerHTML = "а"
keyboardId.append(KeyF);
//п
let KeyG = document.createElement('div');
KeyG.className = "button-standard"
KeyG.id = "KeyGId"
KeyG.innerHTML = "п"
keyboardId.append(KeyG);
//р
let KeyH = document.createElement('div');
KeyH.className = "button-standard"
KeyH.id = "KeyHId"
KeyH.innerHTML = "р"
keyboardId.append(KeyH);
//о
let KeyJ = document.createElement('div');
KeyJ.className = "button-standard"
KeyJ.id = "KeyJId"
KeyJ.innerHTML = "о"
keyboardId.append(KeyJ);
//л
let KeyK = document.createElement('div');
KeyK.className = "button-standard"
KeyK.id = "KeyKId"
KeyK.innerHTML = "л"
keyboardId.append(KeyK);
//д
let KeyL = document.createElement('div');
KeyL.className = "button-standard"
KeyL.id = "KeyLId"
KeyL.innerHTML = "д"
keyboardId.append(KeyL);
//ж
let Semicolon = document.createElement('div');
Semicolon.className = "button-standard"
Semicolon.id = "SemicolonId"
Semicolon.innerHTML = "ж"
keyboardId.append(Semicolon);
//э
let Quote = document.createElement('div');
Quote.className = "button-standard"
Quote.id = "QuoteId"
Quote.innerHTML = "э"
keyboardId.append(Quote);
//Enter
let Enter = document.createElement('div');
Enter.className = "button-standardx2"
Enter.id = "EnterId"
Enter.innerHTML = "Enter"
keyboardId.append(Enter);

//4 линия
//Shift
let ShiftLeft = document.createElement('div');
ShiftLeft.className = "button-standardx2"
ShiftLeft.id = "ShiftLeftId"
ShiftLeft.innerHTML = "Shift"
keyboardId.append(ShiftLeft);
//я
let KeyZ = document.createElement('div');
KeyZ.className = "button-standard"
KeyZ.id = "KeyZId"
KeyZ.innerHTML = "я"
keyboardId.append(KeyZ);
//ч
let KeyX = document.createElement('div');
KeyX.className = "button-standard"
KeyX.id = "KeyXId"
KeyX.innerHTML = "ч"
keyboardId.append(KeyX);
//с
let KeyC = document.createElement('div');
KeyC.className = "button-standard"
KeyC.id = "KeyCId"
KeyC.innerHTML = "c"
keyboardId.append(KeyC);
//м
let KeyV = document.createElement('div');
KeyV.className = "button-standard"
KeyV.id = "KeyVId"
KeyV.innerHTML = "м"
keyboardId.append(KeyV);
//и
let KeyB = document.createElement('div');
KeyB.className = "button-standard"
KeyB.id = "KeyBId"
KeyB.innerHTML = "и"
keyboardId.append(KeyB);
//т
let KeyN = document.createElement('div');
KeyN.className = "button-standard"
KeyN.id = "KeyNId"
KeyN.innerHTML = "т"
keyboardId.append(KeyN);
//ь
let KeyM = document.createElement('div');
KeyM.className = "button-standard"
KeyM.id = "KeyMId"
KeyM.innerHTML = "ь"
keyboardId.append(KeyM);
//б
let Comma = document.createElement('div');
Comma.className = "button-standard"
Comma.id = "CommaId"
Comma.innerHTML = "б"
keyboardId.append(Comma);
//ю
let Period = document.createElement('div');
Period.className = "button-standard"
Period.id = "PeriodId"
Period.innerHTML = "ю"
keyboardId.append(Period);
//.
let Slash = document.createElement('div');
Slash.className = "button-standard"
Slash.id = "SlashId"
Slash.innerHTML = "."
keyboardId.append(Slash);
//up
let ArrowUp = document.createElement('div');
ArrowUp.className = "button-standard"
ArrowUp.id = "ArrowUpId"
ArrowUp.innerHTML = "&#8593"
keyboardId.append(ArrowUp);
//пShift
let ShiftRight = document.createElement('div');
ShiftRight.className = "button-standardx2"
ShiftRight.id = "ShiftRightId"
ShiftRight.innerHTML = "Shift"
keyboardId.append(ShiftRight);

//5 Линия
//Ctrl
let ControlLeft = document.createElement('div');
ControlLeft.className = "button-standard"
ControlLeft.id = "ControlLeftId"
ControlLeft.innerHTML = "Ctrl"
keyboardId.append(ControlLeft);
//Win
let MetaLeft = document.createElement('div');
MetaLeft.className = "button-standard"
MetaLeft.id = "MetaLeftId"
MetaLeft.innerHTML = "Win"
keyboardId.append(MetaLeft);
//AltLeft
let AltLeft = document.createElement('div');
AltLeft.className = "button-standard"
AltLeft.id = "AltLeftId"
AltLeft.innerHTML = "Alt"
keyboardId.append(AltLeft);
//Backspace
let Space = document.createElement('div');
Space.className = "button-bkspace"
Space.id = "SpaceId"
Space.innerHTML = "Space"
keyboardId.append(Space);
//AltRight
let AltRight = document.createElement('div');
AltRight.className = "button-standard"
AltRight.id = "AltRightId"
AltRight.innerHTML = "Alt"
keyboardId.append(AltRight);
//Left
let ArrowLeft = document.createElement('div');
ArrowLeft.className = "button-standard"
ArrowLeft.id = "ArrowLeftId"
ArrowLeft.innerHTML = "&#8592"
keyboardId.append(ArrowLeft);
//down
let ArrowDown = document.createElement('div');
ArrowDown.className = "button-standard"
ArrowDown.id = "ArrowDownId"
ArrowDown.innerHTML = "&#8595"
keyboardId.append(ArrowDown);
//right
let ArrowRight = document.createElement('div');
ArrowRight.className = "button-standard"
ArrowRight.id = "ArrowRightId"
ArrowRight.innerHTML = "&#8594"
keyboardId.append(ArrowRight);
//Ctrl right
let ControlRight = document.createElement('div');
ControlRight.className = "button-standard"
ControlRight.id = "ControlRightId"
ControlRight.innerHTML = "Ctrl"
keyboardId.append(ControlRight);


//Подпись
let howToChLang = document.createElement('p');
howToChLang.className = "howToChLang"
howToChLang.innerHTML = "Для смены языка нажмите левые shift + ctrl"
document.body.append(howToChLang);
}


