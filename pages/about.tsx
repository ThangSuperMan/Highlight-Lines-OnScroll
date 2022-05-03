import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/about.module.css'

const About = () => {
	const [inactiveWindow, setInactiveWindow] = useState<boolean>(false)
	const windowRef = useRef<HTMLDivElement>(null)
	console.log(windowRef.current)

	const showWindow = () => {
		setInactiveWindow(prev => !prev)
	}

	useEffect(() => {
		console.log(windowRef.current)
	}, [])

	return (
		<div className={styles.container}>
			<h3>about page</h3>
			<div>
				<button onClick={showWindow}>show window</button>

				{inactiveWindow && (
					<div ref={windowRef} className={styles.window}>
						This is window
					</div>
				)}

			</div>
		</div>
	)
}

export default About
