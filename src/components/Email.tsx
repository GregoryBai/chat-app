import React from 'react'
import './Email.scss'

interface Props {}

const Email: React.FC<Props> = () => {
	return (
		<div className='inbox__email'>
			<div className='email__head'>
				<p className='email__header'>Design Language</p>
				<p className='email__time'>08:00 PM</p>
			</div>
			<div className='email__body'>
				<p className='email__from'>Salman Shah</p>
			</div>
		</div>
	)
}

export default Email
