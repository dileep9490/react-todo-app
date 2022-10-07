import { useState } from "react"
import Todo from "./components/Todo"
import TodoForm from "./components/TodoForm"


export default function App() {

  const [todos,setTodos] = useState([{
    title: "eat lunch",
    isDone: false
  }])

  const addTodo=(newTodo)=>{
    newTodo={
      title: newTodo,
      completed:false
    }
   const newTodos = [...todos,newTodo]
    setTodos(newTodos)
  }

  const markTodo=(index)=>{
    const newTodos = [...todos]
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos)
  }

  const removeTodo=(index)=>{
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }


  return (
      <>
      <h1 >
      What do you want to do?
      </h1>
    <TodoForm addTodo={addTodo}></TodoForm>
          {todos.map((element,index)=>(
            <Todo key={Math.random()} 
            index={index}
            todo={element}
            markTodo={markTodo}
            removeTodo={removeTodo}
            >
            </Todo>
          ))}

      </>

    )
  }