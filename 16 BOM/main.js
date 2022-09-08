let container = document.getElementById("container");
let tasks = document.getElementById("tasks");
console.log(tasks);
let inputAdd = document.getElementsByTagName("input")[0];
let outputAdd = document.getElementsByTagName("input")[1];

container.style.alignItems = "center";
container.style.backgroundColor = "lightblue";
// container.style.width = "50%";
// container.style.height = "10%";
container.style.textAlign = "center";
// tasks.style.backgroundColor = "re";
outputAdd.onclick = function () {
  //make div for new task and button for delete it
  let divAdded = document.createElement("div");
  let btnDelete = document.createElement("button");
  //style of the task added
  divAdded.style.backgroundColor = "yellow";
  divAdded.style.width = "50%";
  divAdded.style.height = "10%";
  divAdded.style.textAlign = "center";
  divAdded.style.display = "inline";

  //style of the button delete
  btnDelete.innerText = "Delete";
  btnDelete.style.backgroundColor = "red";
  btnDelete.style.display = "inline";
  btnDelete.style.width = "50%";
  btnDelete.style.marginLeft = "50%";
  btnDelete.className = "btnDelete";
  divAdded.innerHTML = inputAdd.value;

  //add tasks only when input is not empty
  if (inputAdd.value != "") {
    tasks.appendChild(divAdded);
    tasks.appendChild(btnDelete);
    inputAdd.value = "";
  }

  //add the tasks to the local storage
  window.localStorage.setItem("tasks", tasks.innerHTML);
  // remove any tasks when the delete button is clicked
  btnDelete.onclick = function () {
    tasks.removeChild(divAdded);
    tasks.removeChild(btnDelete);
  };
};
// show the tasks from the local storage
window.onload = function () {
  if (window.localStorage.getItem("tasks") != null) {
    tasks.innerHTML = window.localStorage.getItem("tasks");
    for (let i = 0; i < tasks.children.length; i++) {
      if (tasks.children[i].className == "btnDelete") {
        tasks.children[i].onclick = function () {
          tasks.removeChild(tasks.children[i]);
          tasks.removeChild(tasks.children[i - 1]);
          window.localStorage.setItem("tasks", tasks.innerHTML);
        };
      }
    }
  }
};

//remove all tasks from the local storage
// window.localStorage.clear();
