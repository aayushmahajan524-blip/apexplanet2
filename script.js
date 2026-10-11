const taskInput=document.getElementById('taskInput');
const taskList=document.getElementById('taskList');
const addTaskButton=document.getElementById('add-task-btn');

function addTask(event){

    if(event) event.preventDefault();
    const taskText=taskInput.value.trim();
    if(taskText == ""){
        alert("please enter a task");
        return;
    }

    const li=document.createElement('li');
    li.className="list-group-item d-flex justify-content-between align-items-center animate-fade-in";

    li.innerHTML=`
    <span>${taskText}</span>
    <button class="btn btn-danger btn-sm rounded-pill py-1 px-3 delete-btn">Delete</button>
    `;
    taskList.appendChild(li);

    taskInput.value="";

    li.querySelector('.delete-btn').addEventListener('click', function(){
        li.remove();
    });
}

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        addTask();
    }
});