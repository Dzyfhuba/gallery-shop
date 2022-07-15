import anime from 'animejs'
import React, { useState } from 'react'
import Button from './Button'

const GDrive2Embed = () => {
	const [show, setShow] = useState(Boolean)

	const handleShow = async (enable) => {
		const modal = document.querySelector('#modal')
		if(enable) {
			modal.classList.remove('hidden')
			modal.classList.add('fixed')
			anime({
				targets: '#modal',
				width: '400px',
				right: '88px',
				bottom: '88px',
				duration: 500
			})
			setTimeout(() => {
				const content = document.querySelector('#modal #close')
				content.classList.remove('hidden')
				content.classList.add('inline')
				console.log(content.classList)
			}, 500);
			setShow(enable)
		} else {
			const content = document.querySelector('#modal #close')
			content.classList.remove('inline')
			content.classList.add('hidden')
			anime({
				targets: '#modal',
				width: '4px',
				right: '12px',
				bottom: '12px',
				duration: 500
			})
			setTimeout(() => {
				modal.classList.remove('fixed')
				modal.classList.add('hidden')
			}, 500);
			setShow(enable)
		}
		console.log(show)
	}

	return (
		<>
			<div id='modal' className={`hidden bottom-4 right-4 bg-primary 
            border shadow-xl rounded-lg w-1 aspect-square z-20`}>
				<div id="head" className='text-right w-full'>
					<button id='close' className='hidden p-1 aspect-square'
						onClick={() => handleShow(false)}
					>
						<span className="material-symbols-rounded">
                        close
						</span>
					</button>
				</div>
			</div>
			<Button 
				className='fixed right-4 bottom-4 bg-ternary rounded-full aspect-square active:shadow-inner z-10'
				onClick={() =>handleShow(true)}
			>
				<span className="material-symbols-rounded">
                    add_to_drive
				</span>
			</Button>
		</>
	)
}

export default GDrive2Embed