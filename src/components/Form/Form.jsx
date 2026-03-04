import { useState } from "react";
import "./Form.scss";

function Form({ onAddTask }) {
	const [description, setDescription] = useState("");
	const [status, setStatus] = useState("open");
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (description.trim() === "") {
			setError("Description cannot be empty");
			return;
		}

		onAddTask(description, status === "completed");

		setDescription("");
		setStatus("open");
		setError("");
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<h2>Add New Task</h2>

			{error && <div className="error">{error}</div>}

			<div>
				<label>Description:</label>
				<input
					type='text'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>

			<div>
				<label>Status:</label>
				<select
					value={status}
					onChange={(e) => setStatus(e.target.value)}>
					<option value='open'>Open</option>
					<option value='completed'>Completed</option>
				</select>
			</div>

			<button type='submit'>Add Task</button>

			<hr />
		</form>
	);
}

export default Form;
