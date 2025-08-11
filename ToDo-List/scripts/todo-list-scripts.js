const todolist=[{
    name:'Watching Movie',
    dueDate:'2025-08-10'
}];

renderToDoList();
function renderToDoList() {
    let todoListHtml='';
    for (let index = 0; index < todolist.length; index++) {
    const todo=todolist[index];
    const {name}=todo;
    const {dueDate}=todo;
    const html=`<div>${name} </div> 
    <div>${dueDate} </div>
    <button class="todo-delete-button"; onclick=" 
    todolist.splice(${index},1);
    renderToDoList();
    ">Delete</button></div>`;
    todoListHtml+=html;
}
document.querySelector('.js-todo-list').innerHTML=todoListHtml;
}

function addToDo() {
    const inputElemnet=document.querySelector(".js-name-input");
    const dateElement=document.querySelector(".js-date");
    todolist.push({
        name:inputElemnet.value,
        dueDate:dateElement.value
    });
    console.log(todolist);
    inputElemnet.value="";
    renderToDoList();
}