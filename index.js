let symbols = false
let numbers = false
let one = document.getElementById("pwd1-el")
let two = document.getElementById("pwd2-el")
let three = document.getElementById("pwd3-el")
const checkbox1 = document.getElementById("checkbox1-el");
const checkbox2 = document.getElementById("checkbox2-el");

function copyToClipboard(thing) {
    var text = thing.textContent;
    navigator.clipboard.writeText(text);
  }


checkbox1.addEventListener("click", () => {
  if (checkbox1.checked) numbers=true
  else numbers = false
});

checkbox2.addEventListener("click", () => {
    if (checkbox2.checked) symbols=true
  else symbols = false
});



one.textContent = "Password 1"
two.textContent = "Password 2"
three.textContent = "Password 3"
const all_characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const no_numbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const no_symbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const just_letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function pickRandom(arr) { //
    const length = arr.length;
    const randomIndex = Math.floor(Math.random() * length);
    return arr[randomIndex];
  }

function newPassword(arr) {
    password = ""
    for(i=0;i<12;i++) {
        string = pickRandom(arr)
        password+=string
    }
    return password
}

function updateTextContent(arr)
    {
        one.textContent = newPassword(arr)
        two.textContent = newPassword(arr)
        three.textContent = newPassword(arr)
    }

function refresh() {
    if (numbers==false && symbols==false) 
    {updateTextContent(just_letters)}
    else if (numbers==true && symbols==false) 
    {updateTextContent(no_symbols)}
    else if (symbols==true && numbers==false) 
    {updateTextContent(no_numbers)}
    else if (symbols==true && numbers==true) {updateTextContent(all_characters)}
}
