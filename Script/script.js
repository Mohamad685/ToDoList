let tasks={};
let inputTask = document.getElementById("input-task")
let inputDate=document.getElementById("task-date")
let inputTaskButton = document.getElementById("taskadd-button")
let containerToDo= document.getElementById("todo-container")
let redNotice=''

inputTaskButton.addEventListener("click", function(){
    
    if (inputTask.value.trim().length === 0 || inputDate.value ===""){    //trim method to remove any leading or trailing whitespace characters before checking for emptiness.(https://www.freecodecamp.org/news/check-if-string-is-empty-or-null-javascript/)
        if (!redNotice){ // to add and remove the red notice1
        
            redNotice = document.createElement("p")
            redNotice.textContent = '*Please Enter a statement or a date'
            redNotice.classList.add('emptytask-notice')
            containerToDo.appendChild(redNotice)
        }
        else
        {
        }

    } 
    else{
        if (redNotice){ //if the notice is found
             
            containerToDo.removeChild(redNotice)
            redNotice=''
        }
        
        let TasksListAdd=document.getElementById('tasks-list')
        // adding the input data to the tasks list
        TasksListAdd.innerHTML += 
                        `<li> 
                        <div class="listitems-style"> 
                        <span class="task-text">${inputTask.value}</span>
                        <span class="label-check date-todo">${inputDate.value}</span>
                        <input type="checkbox" class="checkbox">
                        <label for="checkbox" class="label-check">Completed</label>
                        <button class="addition-button edit-button"><img src="Assets/edit.png " alt="edit" class="edit-button-img" ></button>
                        <button class=" addition-button delete-button">Delete</button>
                        </div>
                        
                    </li>`
        tasks[inputTask.value]=inputDate.value  //adding the tasks and dates to the object
        
        inputTask.value='' // empty the user entry space
        inputDate.value=''
       
    }
})

