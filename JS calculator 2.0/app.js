let pick = (val) => {
    document.getElementById("screen").value += val;
}

let back = () => {
    let input = document.getElementById("screen");
    input.value = input.value.slice(0, -1);
}

let clr = () => {
    document.getElementById("screen").value = "";
    
}

let solve = () => {
    let x = document.getElementById("screen").value;
    let y = eval(x)
    document.getElementById("screen").value = y;
}

