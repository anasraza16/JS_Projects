let pick = (val) => {
    document.getElementById("display").value += val;
};

let clr = () => {
    document.getElementById("display").value = "";
};

let solve = () => {
    let inputValue = document.getElementById("display").value;
    let evaluate = eval(inputValue);
    document.getElementById("display").value = evaluate;
};