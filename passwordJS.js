// Function for Password Generator

function generate() {

    let passwordgen = document.getElementById("slider").value;

    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-_+{}\/<>"

    let password = "";

    for (var i = 0; i <= passwordgen; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length)));
    }


    // show password

    document.getElementById("display").value = password;
}

