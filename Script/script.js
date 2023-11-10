const tasks={}
const inputTask = document.getElementById("input-task")
const inputDate=document.getElementById("task-date")
const inputTaskButton = document.getElementById("taskadd-button")
const containerToDo= document.getElementById("todo-container")
const redNotice=''
const TasksListAdd=document.getElementById('tasks-list')
const ItemListElement = document.getElementsByTagName('li')
const editButton= document.getElementById('editbutton-id')

//add the tasks
function addingtask(e){
    
    if (inputTask.value.trim().length === 0 || inputDate.value ===""){    //trim method to remove any leading or trailing whitespace characters before checking for emptiness.(https://www.freecodecamp.org/news/check-if-string-is-empty-or-null-javascript/)
        if (!redNotice){ // to add and remove the red notice1
        
            redNotice = document.createElement("p")
            redNotice.textContent = '*Please Enter a statement or a date'
            redNotice.classList.add('emptytask-notice')
            containerToDo.appendChild(redNotice)
        }else{
        }
    } 
    else{
        if (redNotice){ //if the notice is found
             
            containerToDo.removeChild(redNotice)
            redNotice=''
        }
        
        
        // adding the input data to the tasks list
        TasksListAdd.innerHTML += 
                        `<li draggable= 'true'> 
                        <div class="listitems-style"> 
                        <span class="task-text">${inputTask.value}</span>
                        <span class="label-check date-todo">${inputDate.value}</span>
                        <input type="checkbox" class="checkbox" id="checkbox-complete">
                        <label for="checkbox-complete" class="label-check">Completed</label>
                        <button class="edit-button addition-button ">...</button>
                        <button class=" addition-button delete-button ">Delete</button>
                        </div>
                        
                    </li>`
        tasks[inputTask.value]=inputDate.value  //adding the tasks and dates to the object https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object
        
        inputTask.value='' // empty the user entry space
        inputDate.value=''
        console.log(tasks)
    }
}


function completecheck(e){
    
    const listItem=e.target.closest('li') // assign the closest function to  retutn the checked task(li)  https://allthingssmitty.com/2019/03/25/using-closest-to-return-the-correct-dom-element/
    
    if(e.target.checked){
        listItem.classList.add('completed-taskorder')
    }
    else{
        listItem.classList.remove('completed-taskorder')
    }
}


function deletetask(e){
    if(e.target.classList.contains('delete-button')){
        const listItem=e.target.closest('li')
        const taskName=taskText.textContent
        delete tasks[taskName]
        listItem.remove()
    }
}


function edittask(e){
    
    const listItem = e.target.closest('li')
    const taskText = listItem.getElementsByClassName('task-text')[0]
    
    if (e.target.classList.contains('delete-button')) {
    
        const taskName = taskText.textContent
        delete tasks[taskName]
        listItem.remove()
     
      } else if (e.target.classList.contains('edit-button')) {
        
          const newTask = prompt("Edit Your Task:")
    
        if (newTask !== 0 && newTask.trim() !== "") {
          
          const oldTaskName = taskText.textContent
          tasks[newTask] = tasks[oldTaskName]
          delete tasks[oldTaskName]
          
          taskText.textContent = newTask
        } else {
          alert("Enter a valid task")
        }
    }
}

// Addition of a new task
inputTaskButton.addEventListener("click", (e)=>addingtask(e))

// Checking the completed task
TasksListAdd.addEventListener("change",(e) => completecheck(e)) 

// deleting of a task
TasksListAdd.addEventListener("click",(e) => deletetask(e))

// editing of an old task
TasksListAdd.addEventListener("click",(e) => edittask(e))