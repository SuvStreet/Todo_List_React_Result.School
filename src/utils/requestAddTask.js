import { ref, push } from 'firebase/database'
import { db } from '../firebase'

export const requestAddTask = (setIsLoading) => {
	const handleClickAddTask = () => {

		const task = prompt('Введите задачу:')

		if (task?.trim()) {
			setIsLoading(true)

			const todoListRef = ref(db, 'todos')

			push(todoListRef, {
				title: task,
			})

			setIsLoading(false)
		}
	}

	return { handleClickAddTask }
}
