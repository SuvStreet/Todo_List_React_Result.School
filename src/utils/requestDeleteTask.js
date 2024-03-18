import { ref, remove } from 'firebase/database'
import { db } from '../firebase'

export const requestDeleteTask = (setIsLoading) => {
	const handleClickDeleteTask = (event) => {
		const { id } = event.target.closest('div')

		setIsLoading(true)

		remove(ref(db, `todos/${id}`))
	}

	return { handleClickDeleteTask }
}
