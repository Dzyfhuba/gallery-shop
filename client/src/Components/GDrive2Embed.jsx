import anime from 'animejs'
import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'

const GDrive2Embed = () => {
  const [, setShow] = useState(Boolean)
  const [result, setResult] = useState(String)

  const handleShow = async (enable) => {
    const modal = document.querySelector('#modal')
    if(enable) {
      modal.classList.remove('hidden')
      modal.classList.add('fixed')
      anime({
        targets: '#modal',
        width: '60vw',
        maxHeight: '50vh',
        right: '88px',
        bottom: '88px',
        duration: 500
      })
      setShow(enable)
    } else {
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
    // console.log(show)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const original = e.target.querySelector('[name="original"]').value
    const id = original.replace('https://drive.google.com/file/d/', '').replace('/view?usp=sharing', '')
    setResult('https://drive.google.com/uc?export=view&id='+id)
    e.target.reset()
  }

  const copyResult = (e) => {
    navigator.clipboard.writeText(result)
    anime({
      targets: `#${e.target.getAttribute('id')}`,
      backgroundColor: ['rgb(0,255,0)', 'rgb(109, 139, 116)'],
      easing: 'easeInOutCirc',
    })
  }

  return (
    <>
      <div id='modal' className={`hidden bottom-4 right-4 bg-primary 
            border border-neutral-400 shadow-xl rounded-lg w-1 aspect-square z-20 p-3`}>
        <div id="head" className='w-full flex justify-between'>
          <h1>Convert GD Link to Embedable URL</h1>
          <button id='close' className='p-1 aspect-square'
            onClick={() => handleShow(false)}
          >
            <span className="material-symbols-rounded">
                        close
            </span>
          </button>
        </div>
        <div id="body">
          <form onSubmit={handleSubmit}>
            <Input name='original' label='Google Drive Image URL'
              placeholder='https://drive.google.com/file/d/.../view?usp=sharing'
              required
            />
            <Button type='submit' className='w-full bg-ternary'>
							Convert&#160;<span className="material-symbols-rounded">vertical_align_bottom</span>
            </Button>
          </form>
          <Input name='result' label='Result' value={result} readOnly/>
          <Button className='bg-ternary w-full' onClick={copyResult} id='copyResult'>Copy The Result</Button>
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