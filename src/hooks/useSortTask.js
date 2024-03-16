import { useState } from 'react'

export const useSortTask = (todoLists, setTodoLists, refreshList) => {
	const [sort, setSort] = useState(false)

	const sortToggle = () => setSort(!sort)

	const handleClickSort = () => {
		sortToggle()

		if (!sort) {
			sortList()
		} else {
			refreshList()
		}
	}

	const sortList = () => {
		setTodoLists(todoLists.toSorted((a, b) => a.title.localeCompare(b.title)))
	}

	return { sort, handleClickSort }
}
