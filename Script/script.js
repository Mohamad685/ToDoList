let tasks={};
let inputTask = document.getElementById("input-task")
let inputDate=document.getElementById("task-date")
let inputTaskButton = document.getElementById("taskadd-button")
let containerToDo= document.getElementById("todo-container")
let redNotice=''
let TasksListAdd=document.getElementById('tasks-list')
let ItemListElement = document.getElementsByTagName('li')

//add the tasks
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
        
        
        // adding the input data to the tasks list
        TasksListAdd.innerHTML += 
                        `<li> 
                        <div class="listitems-style"> 
                        <span class="task-text">${inputTask.value}</span>
                        <span class="label-check date-todo">${inputDate.value}</span>
                        <input type="checkbox" class="checkbox" id="checkbox-complete">
                        <label for="checkbox-complete" class="label-check">Completed</label>
                        <button class="addition-button edit-button" id="chechbox"><img src="Assets/edit.png " alt="edit" class="edit-button-img" ></button>
                        <button class=" addition-button delete-button">Delete</button>
                        </div>
                        
                    </li>`
        tasks[inputTask.value]=inputDate.value  //adding the tasks and dates to the object https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object
        
        inputTask.value='' // empty the user entry space
        inputDate.value=''
        console.log(tasks)
    }
})

// Check the completed task
TasksListAdd.addEventListener("change",function(e){ //targeting the list after the user addition
        let listItem=e.target.closest('li') // assign the closest function to  retutn the checked task(li)  https://allthingssmitty.com/2019/03/25/using-closest-to-return-the-correct-dom-element/
        if(e.target.checked){
            listItem.classList.add('completed-taskorder')
        }
        else{
            listItem.classList.remove('completed-taskorder')
        }
})