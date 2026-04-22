let pick = (val) => {
    document.getElementById("display").value += val;
};

let clr = () => {
    document.getElementById("display").value = "";
};

let solve = () => {
    let x = document.getElementById("display").value;
    let y = eval(x);
    document.getElementById("display").value = y;
};