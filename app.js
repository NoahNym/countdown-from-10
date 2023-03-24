let a = document.getElementById("a");
let background = document.body
let secondsLeft = 9;
let b = document.getElementById("b")

function minFunktion() {
    a.innerText = secondsLeft+" ";
    secondsLeft--;
    if (secondsLeft >= -1) {
        setTimeout(minFunktion, 1000);
    }else{
        background.style.backgroundColor = "red"
        a.innerText = "Hej på dej"
        b.innerText = ""
    }
}

setTimeout(minFunktion, 1000);