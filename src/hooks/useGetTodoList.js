import { useEffect, useState } from 'react'
import { ref, onValue } from 'firebase/database'
import { db } from '../firebase'

export const useGetTodoList = (setIsLoading) => {
	const [todoLists, setTodoLists] = useState([])

	useEffect(() => {
		const todoListRef = ref(db, 'todos')

		return onValue(todoListRef, (snapshot) => {
			const data = snapshot.val() || []
			setTodoLists(Object.entries(data))
			setIsLoading(false)
		})
	}, [])

	return { todoLists, setTodoLists }
}
