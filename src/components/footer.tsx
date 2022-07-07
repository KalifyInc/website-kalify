// eslint-disable-next-line

import React from 'react'
import '../styles/footer.scss'

const Footer: React.FC = () => {
	return (
		<div className='footer'>
			<a href='/' className='footer__item'>Kalify Inc</a>
			<a href='https://github.com/KalifyInc' target="_blank" rel="noreferrer"className='footer__item'>Github</a>
			<a href='https://twitter.com/KalifyInc' target="_blank" rel="noreferrer"className='footer__item'>Twitter</a>
		</div>
	)
}

export default Footer
