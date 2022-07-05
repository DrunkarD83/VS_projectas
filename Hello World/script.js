"use strict"

alert("begin");

/*
OR - || - return FIRST True valuse, if avery value is false return last false  
AND - && - return FIRST Fasle value, if avery value is true return last true 
*/

let login = prompt("Who`s there?",'');
let password ;

if (login == "Admin") {
    if ((password = prompt("Password?",'')) == "TheMaster") {
        alert ("Welcome!");
    } else {
        if ((password = prompt("Password?",'')) == null) {
            alert ("canceled");
        } else {
            alert ("Wrong password");
        }
    }} 
else {
        if (login == null) {
            alert ("canceled");
        } else {
            alert ("I dont know you!");
        }
    }