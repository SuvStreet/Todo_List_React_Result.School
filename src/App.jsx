import { useState } from 'react'

import { useSearch, useGetTodoList, useSortTask } from './hooks'

import { requestAddTask, requestEditTask, requestDeleteTask } from './utils'

import { Title, Search, Button } from './components'

import s from './style.module.css'

function App() {
	const [isLoading, setIsLoading] = useState(true)
	const [refreshListFlag, setRefreshListFlag] = useState(false)
	const [valueSearch, setValueSearch] = useState('')

	const refreshList = () => setRefreshListFlag(!refreshListFlag)

	const { todoLists, setTodoLists } = useGetTodoList(setIsLoading, refreshListFlag)
	const { resultSearch } = useSearch(todoLists, setIsLoading, valueSearch)

	const { handleClickSort, sort } = useSortTask(todoLists, setTodoLists, refreshList)
	const { handleClickAddTask } = requestAddTask(setIsLoading, refreshList)
	const { handleClickEditTask } = requestEditTask(setIsLoading, refreshList)
	const { handleClickDeleteTask } = requestDeleteTask(setIsLoading, refreshList)

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
						{resultSearch.length === 0 ? (
							<small className={s.emptyTodoList}>
								{todoLists.length === 0
									? 'На сегодня дел нет, может добавим?'
									: 'Ничего не нашли!'}
							</small>
						) : (
							(valueSearch ? resultSearch : todoLists).map((todo) => (
								<div key={todo.id} className={s.contentTask} id={todo.id}>
									<span className={s.text}>{todo.title}</span>

									<Button onClick={handleClickEditTask} type={'edit'} />
									<Button onClick={handleClickDeleteTask} type={'remove'} />
								</div>
							))
						)}
					</div>
				)}
			</div>
		</>
	)
}

export default App
