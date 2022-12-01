let todoList = JSON.parse(localStorage.getItem("todoList"));
if (todoList === null) {
  let crearArchivo = [{id: 0, title: "", desc: ""}];
  localStorage.setItem("todoList", JSON.stringify(crearArchivo));
}
let id = todoList.length;
let btnClear = document.getElementById("btnClear")
let btnNew = document.getElementById("btnNew")
let contTasks = document.getElementById("contTasks")

const addTable = () => {
    console.log(todoList)
    contTasks.innerHTML = ``

        for (let i = 0; i < todoList.length; i++) {
            contTasks.innerHTML += `
                <div class="task">
                    <div class="taskBtn">
                        <button id="taskState" onclick="deleteTask(${todoList[i].id})"></button>
                    </div>
                    <div class="taskInfo">
                        <h2 id="taskTitle">${todoList[i].title}</h2>
                        <p id="taskDesc">${todoList[i].desc}</p>
                    </div>
                </div>
            `
        }
} 

const addTasks = (title, desc) => {
    id++
    title.focus()
    todoList.push({id: id, title: title.value, desc: desc.value});
    localStorage.setItem("todoList", JSON.stringify(todoList));
     addTable();
}

const deleteTasks = () => {
    id = 0;
    todoList = [];
    localStorage.setItem("todoList", JSON.stringify(todoList));
    addTable();
    console.log(todoList)
}

const deleteTask = (id) => {
    for (let i = 0; i < todoList.length; i++) {
        if (id === todoList[i].id) {
          todoList.splice(i, 1);
          localStorage.setItem("todoList", JSON.stringify(todoList));
          addTable();
        }
      }
}
addTable()