import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

export default function App() {
	const [todos, setTodos] = useState([
		{
			title: "eat lunch",
			isDone: false,
		},
	]);

	const addTodo = (newTodo) => {
		newTodo = {
			title: newTodo,
			completed: false,
		};
		const newTodos = [...todos, newTodo];
		setTodos(newTodos);
	};

	const markTodo = (index) => {
		const newTodos = [...todos];
		newTodos[index].isDone = !newTodos[index].isDone;
		setTodos(newTodos);
	};

	const removeTodo = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<div className="flex flex-col min-h-screen justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
			<TodoForm addTodo={addTodo}></TodoForm>
			<table>
				{todos.map((element, index) => (
					<Todo
						key={Math.random()}
						index={index}
						todo={element}
						markTodo={markTodo}
						removeTodo={removeTodo}
					></Todo>
				))}
			</table>
		</div>
	);
}
