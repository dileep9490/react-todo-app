function Todo({ todo, index, markTodo, removeTodo }) {
	return (
		<tr>
			<th>
				<span
					className="table-cell text-white text-left text-lg font-normal"
					style={{
						textDecoration: todo.isDone ? "line-through" : "none",
						textDecorationColor: todo.isDone ? "black" : "",
					}}
				>
					{todo.title}
				</span>
			</th>

			<td>
				<button
					className=" table-cell flex-no-shrink p-2 ml-4 mr-2 px-3 border-2 rounded bg-white hover:text-white   hover:bg-green-600"
					onClick={() => {
						markTodo(index);
					}}
				>
					✓
				</button>
			</td>
			<td>
				<button
					className="table-cell flex-no-shrink p-2 ml-2 border-2 rounded px-3 bg-white hover:text-white hover:bg-red-600"
					onClick={() => {
						removeTodo(index);
					}}
				>
					✕
				</button>
			</td>
		</tr>
	);
}

export default Todo;
