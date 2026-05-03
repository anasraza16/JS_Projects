let inp = document.getElementById("input");
let ul = document.getElementById("ul");



// Mistake: if localStorage empty => null
// Fixed with || []
let todo = JSON.parse(localStorage.getItem("daraz")) || [];

function submit() {
    ul.innerHTML = "";

    // Mistake:
    // if (inp.value.trim() === "");
    // semicolon ended the if condition
    if (inp.value.trim() === "") return;

    let obj = {
        id: Date.now(),
        text: inp.value,
        isCompleted: false,
    };

    todo.push(obj);
    localStorage.setItem("daraz", JSON.stringify(todo));

    inp.value = "";

    getTodo();
}

function getTodo() {
    ul.innerHTML = "";

    for (let i = 0; i < todo.length; i++) {

        let li = document.createElement("li");

        // text
        let span = document.createElement("span");
        span.innerText = todo[i].text;

        let id = todo[i].id;

        // button box (CREATE INSIDE LOOP)
        let btnBox = document.createElement("div");
        btnBox.className = "btn-box";

        // update button
        let uptd = document.createElement("button");
        uptd.innerHTML = '<i class="fa-solid fa-pen"></i>';
        uptd.className = "update-btn";

        uptd.addEventListener("click", () => {
            uptdTodo(id);
        });

        // delete button
        let del = document.createElement("button");
        del.innerHTML = '<i class="fa-solid fa-trash"></i>';
        del.className = "delete-btn";

        del.addEventListener("click", () => {
            delTodo(id);
        });

        // assemble
        btnBox.appendChild(uptd);
        btnBox.appendChild(del);

        li.appendChild(span);
        li.appendChild(btnBox);

        ul.appendChild(li);
    }
}

// ____________________________________________________________________

function uptdTodo(id) {

    // Mistake:
    // for (let i = 0; i > todo.length; i++)
    for (let i = 0; i < todo.length; i++) {

        // Mistake:
        // used shanakht which was not in scope
        if (todo[i].id === id) {
            let updated = prompt("Please update your value!");

            if (updated !== null && updated.trim() !== "") {
                todo[i].text = updated;
            }
        }
    }

    // Mistake:
    // todo.push("updated")
    // no need to push string
    localStorage.setItem("daraz", JSON.stringify(todo));

    getTodo();
}


// ______________________________________________________________________


function delTodo(id) {
    let newTodo = [];

    for (let i = 0; i < todo.length; i++) {

        // Mistake:
        // used shanakht instead of id
        if (todo[i].id != id) {
            newTodo.push(todo[i]);
        }
    }

    todo = newTodo;

    localStorage.setItem("daraz", JSON.stringify(todo));

    getTodo();
}

getTodo();
