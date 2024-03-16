import { useEffect, useState } from 'react'

import useDebounce from './useDebounce'

export const useSearch = ( todoLists, setIsLoading, valueSearch) => {
	const [resultSearch, setResultSearch] = useState([])
	
	const debouncedSearchTerm = useDebounce(valueSearch, 700)

	useEffect(() => {
		if (debouncedSearchTerm && debouncedSearchTerm.trim() !== '') {
			setIsLoading(true)

			fetch(`http://localhost:3005/todos?q=${debouncedSearchTerm}`)
				.then((response) => response.json())
				.then((data) => {
					setResultSearch(data)
				})
				.finally(() => setIsLoading(false))
		} else {
			setResultSearch(todoLists)
		}
	}, [debouncedSearchTerm, todoLists])

	return { resultSearch }
}
