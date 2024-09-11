import {useEffect, useState} from "react";
import {TodoItemInterface} from "../../assets/types/global.ts";
import {todoList} from "../../assets/data/todo.ts";
import {TodoItem} from "../../components/TodoItem";

export const TodoPage = () => {

	const [todoData, setTodoData] = useState<TodoItemInterface[]>(todoList)

	useEffect(() => {
	// 	TODO сделать добавление новой todo
		return () => {}
	}, [])

	return (
		<div>
			<h1>Todo Page</h1>
			<ul>

				{/* TODO вынести список в TodoList*/}

				{todoData.map((todo) => (
					<TodoItem key={todo.id} todo={todo} />
				))}
			</ul>
		</div>
	)
}


