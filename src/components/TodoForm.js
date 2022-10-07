import { useState } from "react"

function TodoForm({addTodo}) {

    const [state,setState] = useState("")


    const onSubmit=(event)=>{
        event.preventDefault()
        if(!state) return
        addTodo(state);
        setState("")
    }

    return( <>

    <form onSubmit={onSubmit}>
        <label > Add TODO</label>
        <input type="text" name="" value={state} onChange={(e)=>{
            setState(e.target.value)
        }}/>
        <button type="submit" className="border-2 border-black">submit</button>
    </form>
    </>
    )

}


export default TodoForm