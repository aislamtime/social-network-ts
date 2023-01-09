import React from 'react'
import preloader from '../../../assets/images/preloader.svg'

type PreloaderPropsType = any

export const Preloader = (props: PreloaderPropsType) => {
	const styles = {
		display: 'flex',
		justifyContent: 'center',
		alightItems: 'center',
		width: '100%',
		//height: '100vh',
		padding: '20px 0',
	}
	const stylesImg = {
		width: '100px',
	}
	return (
		<div style={styles}>
			<img src={preloader} style={stylesImg} />
		</div>
	)
}
