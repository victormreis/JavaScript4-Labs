import { useState } from "react";
import uuid from "react-uuid";
import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import Form from "./components/Form/Form";

import Help from "./pages/Help/Help";
import HelpAdd from "./pages/Help/HelpAdd";
import HelpRemove from "./pages/Help/HelpRemove";
import HelpChange from "./pages/Help/HelpChange";
import NotFound from "./pages/NotFound/NotFound";

function App() {
	const [tasks, setTasks] = useState([
		{ id: uuid(), description: "Walk the dog", done: true },
		{ id: uuid(), description: "Wash the car", done: false },
		{ id: uuid(), description: "Finish the lab", done: false },
	]);

	const handleClearTasks = () => setTasks([]);

	const handleStatusChange = (id) => {
		const updatedTasks = [...tasks];
		updatedTasks.forEach((task) => {
			if (task.id === id) task.done = !task.done;
		});
		setTasks(updatedTasks);
	};

	const handleTaskRemove = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	const handleAddTask = (description, done) => {
		const newTask = { id: uuid(), description, done };
		setTasks([...tasks, newTask]);
	};

	return (
		<BrowserRouter>
			<Header />

			<Routes>

				{/* HOME */}
				<Route
					path="/"
					element={
						<div className="main-layout">
							<Tasks
								tasks={tasks}
								onClearTasks={handleClearTasks}
								onStatusChange={handleStatusChange}
								onTaskRemove={handleTaskRemove}
							/>
						</div>
					}
				/>

				{/* ADD TASK */}
				<Route
					path="/add"
					element={
						<div className="main-layout">
							<Form onAddTask={handleAddTask} />
						</div>
					}
				/>

				{/* HELP */}
				<Route path="/help" element={<Help />}>
					<Route path="add" element={<HelpAdd />} />
					<Route path="remove" element={<HelpRemove />} />
					<Route path="change" element={<HelpChange />} />
				</Route>

				{/* NOT FOUND */}
				<Route path="*" element={<NotFound />} />

			</Routes>
		</BrowserRouter>
	);
}

export default App;