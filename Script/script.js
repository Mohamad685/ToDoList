const tasks={}
const inputTask = document.getElementById("input-task")
const inputDate=document.getElementById("task-date")
const inputTaskButton = document.getElementById("taskadd-button")
const containerToDo= document.getElementById("todo-container")
let redNotice=''
const tasksListAdd=document.getElementById('tasks-list')
const ItemListElement = document.getElementsByTagName('li')
const editButton= document.getElementById('editbutton-id')
const taskText= document.getElementsByClassName('task-text')
const activeTasksButton = document.getElementById("active-tasks")
const showAllButton = document.getElementById("all-include")
const showCompleted = document.getElementById("completed-tasks")

//function to add the tasks
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
        tasksListAdd.innerHTML += 
                        `<li> 
                        <div class="listitems-style"> 
                        <span class="task-text">${inputTask.value}</span>
                        <span class="label-check date-todo">${inputDate.value}</span>
                        <input type="checkbox" class="checkbox" name="checkbox-complete">
                        <label for="checkbox-complete" class="label-check">Completed</label>
                        <button class="edit-button addition-button ">...</button>
                        <button class=" addition-button delete-button ">Delete</button>
                        </div>
                        
                    </li>`
        tasks[inputTask.value]=inputDate.value  //adding the tasks and dates to the object https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object
        
        inputTask.value='' // empty the user entry space
        inputDate.value=''
    }
}

// function to check the completed tasks
function completecheck(e){
    
    const listItem=e.target.closest('li') // assign the closest function to  retutn the checked task(li)  https://allthingssmitty.com/2019/03/25/using-closest-to-return-the-correct-dom-element/
    
    //checking if the checkbox is checked
    if(e.target.checked){
        listItem.classList.add('completed-taskorder')
    }
    else{
        listItem.classList.remove('completed-taskorder')
    }
}

// function to delete tasks
function deletetask(e){
    // checking if contains delete button id
    if(e.target.classList.contains('delete-button')){
        const listItem=e.target.closest('li')
        const taskName=taskText.textContent
        delete tasks[taskName]
        listItem.remove()
    }
}

// function to edit task names
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

// function to show active tasks
function activeTask() {
    // entering checkbox type attribute to all li //https://stackoverflow.com/questions/1120879/css-checkbox-input-styling
    const checkedItems = document.querySelectorAll('li input[type="checkbox"]:checked') //https://forum.freecodecamp.org/t/validate-fields-with-queryselectorall/427746
    // checking for each checkbox,if checked then add display:none property 
    checkedItems.forEach((checkbox) => {
        checkbox.closest('li').style.display = 'none'
    })
}

// function to show all tasks
function showAllTasks() {
    // select all li
    const items = document.querySelectorAll('li')
    // add display block characteristic
    items.forEach((item) => {
        item.style.display = 'block'
    })
}

// function to show completed tasks
function showCompletedTasks() {
    const items = document.querySelectorAll('li')
    items.forEach((item) => {
        // searching for li items that has type checkbox in order to change the item style display into none
        const checkbox = item.querySelector('input[type="checkbox"]')
        // checking if checked and change display
        if (checkbox.checked) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}




// Addition of a new task
inputTaskButton.addEventListener("click", (e)=>addingtask(e))

// Checking the completed task
tasksListAdd.addEventListener("change",(e) => completecheck(e)) 

// deleting of a task
tasksListAdd.addEventListener("click",(e) => deletetask(e))

// editing of an old task
tasksListAdd.addEventListener("click",(e) => edittask(e))

// showing all tasks
showAllButton.addEventListener("click", showAllTasks)

// showing active tasks
activeTasksButton.addEventListener("click", activeTask)

// showing completed tasks
showCompleted.addEventListener("click", showCompletedTasks)




