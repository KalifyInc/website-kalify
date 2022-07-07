import React from 'react'
import Logo from './logo'
import '../styles/contact.scss'

const Contact: React.FC = () => {
	return (
		<div className='contact-container'>
			<div className='contact'>
				<div className='contact__logo'>
					<img src="Margelo/assets/logo.png" width={120} height={120} />
				</div>
				<h2 className='contact__title'>Contact Us</h2>
				<a href="mailto:kalifyinc@gmail.com">
					<button type='submit' className='form__submit-btn'>Send us a email</button>
				</a>
			</div>
		</div>
	)
}

export default Contact
