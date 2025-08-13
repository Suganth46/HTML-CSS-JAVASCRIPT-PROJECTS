const todolist=[{
    name:'Watching Movie',
    dueDate:'2025-08-10'
}];

renderToDoList();
function renderToDoList() {
    let todoListHtml='';
    todolist.forEach((todo,index)=>{
    const {name}=todo;
    const {dueDate}=todo;
    const html=`<div>${name} </div> 
    <div>${dueDate} </div>
    <button class="todo-delete-button js-delete-btn";>
    Delete</button></div>`;
    todoListHtml+=html;
    });
document.querySelector('.js-todo-list').innerHTML=todoListHtml;

document.querySelectorAll('.js-delete-btn').forEach((deleteButton ,index)=>{
        deleteButton.addEventListener('click',()=>{
            todolist.splice(index,1);
            renderToDoList();
        })
});
}
document.querySelector('.js-add-btn').addEventListener('click',()=>{
    addToDo();
})
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