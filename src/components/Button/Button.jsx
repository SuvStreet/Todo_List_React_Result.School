import propsType from 'prop-types'

import s from './style.module.css'

import remove from '../../assets/delete.svg'
import edit from '../../assets/edit.svg'
import add from '../../assets/add.svg'
import sort from '../../assets/sort.svg'

const IMG = {
	remove,
	edit,
	add,
	sort,
}

export const Button = ({ onClick, type, sort }) => {
	return (
		<button className={s[type] + ' ' + (sort ? s.active : '')} onClick={onClick}>
			{['edit', 'remove', 'add', 'sort'].includes(type) && (
				<img
					src={IMG[type]}
					alt={type}
				/>
			)}
		</button>
	)
}

Button.propTypes = {
	onClick: propsType.func,
	type: propsType.string,
	sort: propsType.bool
}
