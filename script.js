let btns = document.getElementsByTagName("button");
let calc = document.getElementById("calc");

for (let thisBtn of btns) {
    thisBtn.addEventListener("click", function() {
        if (this.innerHTML == "=") calc.value = eval(calc.value);
        else if (this.innerHTML == "C") calc.value = "";
        else if (
            this.innerHTML == "Red" ||
            this.innerHTML == "Green" ||
            this.innerHTML == "Blue" ||
            this.innerHTML == "Yellow" ||
            this.innerHTML == "Silver"
        )
            calc.value = calc.value;
        else calc.value += this.innerHTML;
    });
}

function back() {
    let value = document.getElementById("calc").value;
    document.getElementById("calc").value = value.substr(0, value.length - 1);
}

// let regEx = /^\s*([-+]?)(\d+)(?:\s*([-+*\/])\s*((?:\s[-+])?\d+)\s*)+$/;

document.addEventListener("keydown", (event) => {
    if (event.keyCode == 13 || event.code == "NumpadEnter") {
        calc.value = eval(calc.value);
    } else if (event.keyCode == 46) {
        calc.value = "";
    } else if (event.keyCode == 8) {
        back();
    } else if (event.keyCode >= 48 && event.keyCode <= 57) {
        calc.value += event.key;
    } else if (event.keyCode >= 96 && event.keyCode <= 105) {
        calc.value += event.key;
    } else if (
        event.keyCode == 107 ||
        event.keyCode == 109 ||
        event.keyCode == 106 ||
        event.keyCode == 111 ||
        event.keyCode == 190 ||
        event.keyCode == 110
    ) {
        calc.value += event.key;
    }
});

let botones = document.getElementById("calcInput");
let elementField = document.getElementById("calc");
let element = document.body;
let sliderDark = document.getElementById("sliderDark");
let redBTN = document.getElementById("red");
let greenBTN = document.getElementById("green");
let blueBTN = document.getElementById("blue");
let yellowBTN = document.getElementById("yellow");
let silverBTN = document.getElementById("silver");
let radio1 = document.getElementById("customRadio1");
let radio2 = document.getElementById("customRadio2");

function enableColors() {
    redBTN.disabled = false;
    greenBTN.disabled = false;
    blueBTN.disabled = false;
    yellowBTN.disabled = false;
    silverBTN.disabled = false;
}

function disableColors() {
    redBTN.disabled = true;
    greenBTN.disabled = true;
    blueBTN.disabled = true;
    yellowBTN.disabled = true;
    silverBTN.disabled = true;
}

function changeColor(color) {
    botones.className = `calcInput${color}`;
    elementField.className = `calc${color}`;
    element.classList.remove("dark-mode");
    botones.classList.remove(`calcInputDark`);
    elementField.classList.remove(`calcDark`);
}

function darkTheme() {
    element.classList.add("dark-mode");
    botones.classList.add(`calcInputDark`);
    elementField.classList.add(`calcDark`);
    elementField.style.color = "white";
    disableColors();
}

function lightTheme() {
    element.classList.remove("dark-mode");
    botones.classList.remove(`calcInputDark`);
    elementField.classList.remove(`calcDark`);
    elementField.style.color = "black";
    enableColors();
}

let egg = new Egg();
egg
    .addCode("4,2,0", function() {
        jQuery("#egggif").fadeIn(500, function() {
            window.setTimeout(function() {
                jQuery("#egggif").hide();
            }, 5000);
        });
    })
    .addHook(function() {
        console.log("#blazeit");
    })
    .listen();