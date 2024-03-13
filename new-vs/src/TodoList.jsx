import { useState } from "react"

function TodoList(){
const[todoList,setTodoList] = useState("")
const[taskName,setTaskName] = useState('')
const[isComplated,setIsComplated] = useState(false)
const[date,setDate] = useState();

function addTask(){
const newTodo = {
Name:taskName.trim(),
Date:date.trim(),
Complated:isComplated
}

setTodoList([...todoList,newTodo]);

setTaskName("")
setDate();
}
function updateTaskName(event){
setTaskName(event.target.value)
}
function updateDate(event){
setDate(event.target.value)
}
function deleteTask(index){
    setTodoList(todoList.filter((_,i)=>i!=index))

}
function moveUp(index){

    if(index > 0){
        const updateTask = [...todoList];
        [updateTask[index],updateTask[index-1]] = [updateTask[index-1],updateTask[index]]
        setTodoList(updateTask);
        

}

}

function moveDown(index){
    if(index < todoList.length-1){
        const updateTask = [...todoList];
        [updateTask[index],updateTask[index+1]] = [updateTask[index+1],updateTask[index]]
        setTodoList(updateTask);
        

}
}
function complateTask(index){
  /* todoList.map((_,i)=>{
    const updatedTask = [...todoList]
    updatedTask[index].Complated= true,
    setTodoList(updatedTask)
    
   })*/
   todoList.map((todo,i)=>{
    if(i===index){
        const update = [...todoList]
        update[index].Complated = true
        setTodoList(update);
    }
   })
}
    return<div className="container">
            <h3 className="todo-list">Simple TodoLlist</h3>

    <div className="inputs">
        <input type="text" placeholder="Add Task" onChange={updateTaskName} value={taskName}/>
        <input type="date" onChange={updateDate} value={date}/>
        <button onClick={addTask}>Add Task</button>
    </div>
    {todoList&&<div className="lists">
        {todoList.map((todo,index)=><div className="list" key={index}>
          <div className="listcontainer" style={{backgroundColor:todo.Complated ?"green":"transparent"}}>
            <label className="label1">{todo.Name}</label>
            <label className="label2">{todo.Date}</label>
            <button className="button-up" onClick={()=>moveUp(index)}>Up</button>
            <button className="button-down" onClick={()=>moveDown(index)}>Down</button>
            <button className="button-complated" onClick={()=>complateTask(index)}>Complated</button>
            <button className="button-deleted" onClick={()=>deleteTask(index)}>Delete</button>
            </div>
            

        </div>)}
    </div>}
    </div>

}
export default TodoList