import { useEffect, useState } from 'react'

export const useGetTodoList = (setIsLoading, refreshListFlag) => {
	const [todoLists, setTodoLists] = useState([])

	useEffect(() => {
		fetch('http://localhost:3005/todos')
			.then((response) => response.json())
			.then((data) => {
				// console.log('data', data)
				setTodoLists(data)
			})
			.finally(() => setIsLoading(false))
	}, [refreshListFlag])

	return { todoLists, setTodoLists }
}
