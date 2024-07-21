function getData() {
    let myinput = document.getElementById("myinput") as HTMLInputElement;
    //make the multiplication of the value
    let mytable = document.getElementById("mytable") as HTMLTableElement;

    for (let i: number = 1; i <= 10; i++) {
        {
            if (myinput.value === '') {
                mytable.innerHTML = '';
                break;
            }

            let result: number = Number(myinput.value) * i;
            mytable.innerHTML += `<tr><td>${myinput.value} * ${i} =${result} </td></tr>`
        }
    }
}