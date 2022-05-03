import React, { useContext, useEffect, useRef } from 'react'
import s from '../styles/skills.module.css'
import { ScrollContext } from '../utils/scroll-observer'

// opacity: opacityForBlock(progress, 0)
const opacityForBlock = (sectionProgress: number, blockNo: number) => {
	const progress = sectionProgress - blockNo
	if (progress >= 0 && progress < 1) return 1
	return 0.2
}

const Skills: React.FC = () => {
	const { scrollY } = useContext(ScrollContext)
	const refContainer = useRef<HTMLDivElement>(null)
	// console.log(`Scroll Y: ${scrollY}`)

	// Number of blocks in side the elContainer
	const numberOfPages = 3
	let progress = 0

	const { current: elContainer } = refContainer

	if (elContainer) {
		const { clientHeight, offsetTop } = elContainer
		// console.log(`Offsettop: ${offsetTop}`)

		const screenH = window.innerHeight
		const halfH = screenH / 2

		const percentY = Math.min(
			clientHeight + halfH,
			Math.max(-screenH, scrollY - offsetTop) + halfH
		) / clientHeight

		progress = Math.min(
			numberOfPages - 0.5,
			Math.max(0.5, percentY * numberOfPages)
		)

		console.log(
			`
ScrollY: ${scrollY}
offsetTop: ${offsetTop}
PercentY: ${percentY}
Progress: ${progress}
			`
		)
	}


	useEffect(() => {
	}, [])

	return (
		<div ref={refContainer} className={s.container}>
			<div className={s.wrapper}>
				<div
					className={s.skillText}
					style={{
						opacity: opacityForBlock(progress, 0)
					}}
				>We know our tools inside out.</div>
				<span
					className={s.skillText}
					style={{
						opacity: opacityForBlock(progress, 1)
					}}
				>
					Our teams has contributed 123 commits to React Native core, power
					thousands of apps worldwide.
				</span>
				<span
					className={s.skillText}
					style={{
						opacity: opacityForBlock(progress, 2)
					}}
				>
					We&apos;re maintaining some of the most popular open-source projects,
					with over <strong>1.234</strong> dowloads.
				</span>
			</div>
		</div>
	)
}

export default Skills
