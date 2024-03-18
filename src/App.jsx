import { useState } from 'react'

import { useSearch, useGetTodoList, useSortTask } from './hooks'

import { requestAddTask, requestEditTask, requestDeleteTask } from './utils'

import { Title, Search, Button } from './components'

import s from './style.module.css'

function App() {
	const [isLoading, setIsLoading] = useState(true)
	const [valueSearch, setValueSearch] = useState('')

	const { todoLists, setTodoLists } = useGetTodoList(setIsLoading)
	const { resultSearch, debouncedSearchTerm } = useSearch(todoLists, valueSearch)

	const { handleClickSort, sort, sortTodoLists } = useSortTask(todoLists, setTodoLists)
	const { handleClickAddTask } = requestAddTask(setIsLoading)
	const { handleClickEditTask } = requestEditTask(setIsLoading)
	const { handleClickDeleteTask } = requestDeleteTask(setIsLoading)

	return (
		<>
			<div className={s.container}>
				<Title />

				<div className={s.change}>
					<Search setValueSearch={setValueSearch} />

					<Button onClick={handleClickAddTask} type={'add'} disabled={isLoading} />

					<Button
						type={'sort'}
						onClick={handleClickSort}
						disabled={isLoading}
						sort={sort}
					/>
				</div>

				{isLoading ? (
					<div className={s.loader}></div>
				) : (
					<div className={s.content}>
						{(debouncedSearchTerm && resultSearch.length === 0) ||
						todoLists.length === 0 ? (
							<small className={s.emptyTodoList}>
								{todoLists.length === 0
									? 'На сегодня дел нет, может добавим?'
									: 'Ничего не нашли!'}
							</small>
						) : (
							(debouncedSearchTerm ? resultSearch : sort ? sortTodoLists : todoLists).map(
								([id, { title }]) => (
									<div key={id} className={s.contentTask} id={id}>
										<span className={s.text}>{title}</span>

										<Button onClick={handleClickEditTask} type={'edit'} />
										<Button onClick={handleClickDeleteTask} type={'remove'} />
									</div>
								),
							)
						)}
					</div>
				)}
			</div>
		</>
	)
}

export default App
