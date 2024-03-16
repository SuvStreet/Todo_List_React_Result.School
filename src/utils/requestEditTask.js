export const requestEditTask = ( setIsLoading, refreshList) => {
 
  const handleClickEditTask = (event) => {
		const { id } = event.target.closest('div')
    const { textContent } = event.target.closest('div').children[0]

		const task = prompt(
			'Введите свои изменения:',
			textContent,
		)

		if (task && task.trim() !== '' && textContent !== task) {
			setIsLoading(true)
			fetch(`http://localhost:3005/todos/${id}`, {
				method: 'PUT',
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

  return { handleClickEditTask }
}
