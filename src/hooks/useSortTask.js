import { useState } from 'react'

export const useSortTask = (todoLists) => {
	const [sort, setSort] = useState(false)
	const [sortTodoLists, setSortTodoLists] = useState([]) 

	const sortToggle = () => setSort(!sort)

	const handleClickSort = () => {
		sortToggle()

		if (!sort) {
			sortList()
		} else {
			setSortTodoLists(todoLists)
		}
	}

	const sortList = () => {
		setSortTodoLists(todoLists.toSorted((a, b) => a[1].title.localeCompare(b[1].title)))
	}

	return { sort, handleClickSort, sortTodoLists }
}
