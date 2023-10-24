let todoList = JSON.parse(localStorage.getItem("todoList"));
if (todoList === null) {
  let crearArchivo = [{ id: 0, title: "", desc: "" }];
  localStorage.setItem("todoList", JSON.stringify(crearArchivo));
}
let id = todoList.length;
let btnClear = document.getElementById("btnClear");
let btnAdd = document.getElementById("btnAdd");
let contTasks = document.getElementById("contTasks");

const addElement = () => {
  console.log(todoList);
  contTasks.innerHTML = ``;
  for (let i = 0; i < todoList.length; i++) {
    contTasks.innerHTML += `
      <div id="task">
        <div class="taskInfo">
          <h2 id="taskTitle">${todoList[i].title}</h2>
          <p id="taskDesc">${todoList[i].desc}</p>
        </div>
        <i id="taskState" class="fa-solid fa-xmark" onclick="deleteTask(${todoList[i].id})"></i>
      </div>
    `;
  }
};

const addTask = (title, desc) => {
  id++;
  title.focus();
  if (title.value != "") {
    todoList.push({ id: id, title: title.value, desc: desc.value });
    localStorage.setItem("todoList", JSON.stringify(todoList));
    addElement();
  }
  title.value = "";
  desc.value = "";
};

const deleteAllTasks = () => {
  id = 0;
  todoList = [];
  localStorage.setItem("todoList", JSON.stringify(todoList));
  addElement();
  console.log(todoList);
};

const deleteTask = (id) => {
  for (let i = 0; i < todoList.length; i++) {
    if (id === todoList[i].id) {
      todoList.splice(i, 1);
      localStorage.setItem("todoList", JSON.stringify(todoList));
      addElement();
    }
  }
};
