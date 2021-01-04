


function generate() {

   let password = "";

    for (var i = 0; i <= passwordgen; i++) {
        if (document.getElementById("lowercase").checked == true) {
            password += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        } 
        
        if (document.getElementById("uppercase").checked == true) {
            password += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        } 
        
        if (document.getElementById("symbol").checked == true) { 
            password += String.fromCharCode(Math.floor(Math.random() *15) + 33);
    
        }
        if (document.getElementById("number").checked == true) {
            password += String.fromCharCode(Math.floor(Math.random() *10) + 58);
        }
        }
      return password
    }

   




