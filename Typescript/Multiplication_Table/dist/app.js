"use strict";
function getData() {
    let myinput = document.getElementById("myinput");
    //make the multiplication of the value
    let mytable = document.getElementById("mytable");
    for (let i = 1; i <= 10; i++) {
        {
            if (myinput.value === '') {
                mytable.innerHTML = '';
                break;
            }
            let result = Number(myinput.value) * i;
            mytable.innerHTML += `<tr><td>${myinput.value} * ${i} =${result} </td></tr>`;
        }
    }
}
