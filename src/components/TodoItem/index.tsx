import {TodoItemInterface} from "../../assets/types/global.ts";
import {useEffect} from "react";

interface TodoItemProps{
	todo: TodoItemInterface
}

export const TodoItem = ({todo}: TodoItemProps) => {

	const {title, description, priority, dueDate} = todo

	useEffect(() => {
		console.log('Монтирование')
		return () => {
			console.log('Размонтирование')
		}
	}, [])

	useEffect(() => {
		console.log('Обновление')
	})

	return (
		<li>
			<h2>{title}</h2>
			<p>Описание: {description}</p>
			<p>Приоритет: {priority}</p>
			<p>Срок: {dueDate}</p>
		</li>
	)
}

