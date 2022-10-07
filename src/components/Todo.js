

function Todo({todo,index,markTodo,removeTodo}) {
   return ( <div className="">
    <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.title}</span>
    <button className="border-2 border-black" onClick={()=>{markTodo(index)}}>✓</button>
    <button className="border-2 border-black" onClick={()=>{removeTodo(index)}}>✕</button>
    <br />
    </div>)
}

export default Todo