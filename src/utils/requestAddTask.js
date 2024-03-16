export const requestAddTask = (setIsLoading, refreshList) => {
	const handleClickAddTask = () => {

		const task = prompt('Введите задачу:')

		if (task && task.trim() !== '') {
			setIsLoading(true)
			fetch('http://localhost:3005/todos', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					title: task,
				}),
			})
				.then((response) => response.json())
				.then(() => refreshList())
		}
	}

	return { handleClickAddTask }
}
