import { useState } from "react";

function TodoForm({ addTodo }) {
	const [state, setState] = useState("");

	const onSubmit = (event) => {
		event.preventDefault();
		if (!state) return;
		addTodo(state);
		setState("");
	};

	return (
		<>
			<form className="mb-10" onSubmit={onSubmit}>
				<label className="text-xl text-white"> Add TODO</label>
				<br />
				<input
					className="shadow appearance-none border rounded py-2 px-3 mr-4 text-grey-darker"
					type="text"
					name=""
					value={state}
					onChange={(e) => {
						setState(e.target.value);
					}}
				/>
				<button
					type="submit"
					className="flex-no-shrink p-2 border-2 rounded bg-white text-black hover:border-teal-600 hover:text-white hover:bg-teal-500"
				>
					submit
				</button>
			</form>
		</>
	);
}

export default TodoForm;
