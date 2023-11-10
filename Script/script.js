let tasks={}
let inputTask = document.getElementById("input-task")
let inputDate=document.getElementById("task-date")
let inputTaskButton = document.getElementById("taskadd-button")
let containerToDo= document.getElementById("todo-container")
let redNotice=''
let TasksListAdd=document.getElementById('tasks-list')
let ItemListElement = document.getElementsByTagName('li')
let editButton= document.getElementById('editbutton-id')

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
// deletion of a task
TasksListAdd.addEventListener("click",function(e){
    if(e.target.classList.contains('delete-button')){
        let listItem=e.target.closest('li')
        let taskName=taskText.textContent
        delete tasks[taskName]
        listItem.remove()

    }
})

// editing of the task

TasksListAdd.addEventListener("click",function(e){
    
    if (e.target.classList.contains('delete-button')) {
      let listItem = e.target.closest('li')
      let taskText = listItem.getElementsByClassName('task-text')[0]
      let taskName = taskText.textContent
      delete tasks[taskName]
      listItem.remove()
   
    } else if (e.target.classList.contains('edit-button')) {
      
        let listItem = e.target.closest('li')
        let taskText = listItem.getElementsByClassName('task-text')[0]
        let newTask = prompt("Edit Your Task:")
  
      if (newTask !== 0 && newTask.trim() !== "") {
        
        let oldTaskName = taskText.textContent
        tasks[newTask] = tasks[oldTaskName]
        delete tasks[oldTaskName]
        
        taskText.textContent = newTask
      } else {
        alert("Enter a valid task")
      }
    }
  })

