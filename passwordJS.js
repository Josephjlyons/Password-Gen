


function generate(){

let passwordgen = document.getElementById ("slider").value;

let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-_+{}\/<>"

let password = "";

for(var i = 0; i <= passwordgen; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length)));
}


// show password

document.getElementById("display").value = password;
}





// Functions

// const passwordgen = {
//     lower: getRandomLower(),
//     upper: getRandomUpper(),
//     number: getRandomNumber(),
//     symbol: gerRandomSymbol(),


// function getRandomLower() {
//     return StringfromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

// }

// function getRandomNumber() {
//     return String.fromCharCode(Math.floor(Math.random() *10) + 58);
// }

// function getRandomSymbol() {
//     const symbols = '!@#$%^&**(){}[]\<>+=.,';
//     return symbols [Math.floor(math.random() * symbols.length)];
// }

