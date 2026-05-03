let inp = document.getElementById("input");
let ul = document.getElementById("ul");

let todo = JSON.parse(localStorage.getItem("daraz")) || [];

function submit() {
    ul.innerHTML = "";

    if (inp.value.trim() === "")
        return;

    let obj = {
        id: Date.now(),
        text: inp.value,
        isCompleted: false,
    };

    todo.push(obj);
    localStorage.setItem("daraz", JSON.stringify(todo));

    inp.value = "";

    getTodo();

};

function getTodo() {
    
    for (let i = 0; i < todo.length; i++) {
        
        // creating list buttons

        let li = document.createElement("li");
        li.innerHTML = todo[i].text
        ul.appendChild(li);

        let shanakht = todo[i].id

        // creating update button
        let uptd = document.createElement("button");
        uptd.innerHTML = "update";
        li.appendChild(uptd);
        uptd.addEventListener("click", () => {
            uptdTodo(id)
        });

        // creating delete button
        let del = document.createElement("button");
        del.innerHTML = "delete";
        li.appendChild(del);
        del.addEventListener("click", () => {
            delTodo(shanakht)
        });
    };
};

function uptdTodo(shanakht) {

    for (let i = 0; i > todo.length; i++) {
        if (todo[i].id === shanakht) {
            let updated = prompt("Please update you value!");
            todo[i].text = updated;
        };
    };

    localStorage.setItem("daraz", JSON.stringify(todo));
    getTodo()
};

function delTodo(shanakht) {
    let newTodo = [];
    
    for (let i = 0; i < todo.length; i++) {
        
        if (todo[i].id != shanakht) {
            newTodo.push(todo[i])
        };

    };

    todo = newTodo;
    localStorage.setItem('daraz', JSON.stringify(todo));
    getTodo();
    
};

getTodo();