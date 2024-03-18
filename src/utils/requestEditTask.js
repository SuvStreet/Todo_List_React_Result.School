import { ref, set } from 'firebase/database'
import { db } from '../firebase'

export const requestEditTask = (setIsLoading) => {
	const handleClickEditTask = (event) => {
		const { id } = event.target.closest('div')
		const { textContent } = event.target.closest('div').children[0]

		const task = prompt('Введите свои изменения:', textContent)

		if (task?.trim() && textContent !== task) {
			setIsLoading(true)

			set(ref(db, `todos/${id}`), {
				title: task,
			})

			setIsLoading(false)
		}
	}

	return { handleClickEditTask }
}
