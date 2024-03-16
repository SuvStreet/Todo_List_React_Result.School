export const requestDeleteTask = ( setIsLoading, refreshList) => {
	const handleClickDeleteTask = (event) => {
		const { id } = event.target.closest('div')

		setIsLoading(true)
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'DELETE',
		})
			.then((response) => response.json())
			.then(() => refreshList())
	}

  return { handleClickDeleteTask }
}
