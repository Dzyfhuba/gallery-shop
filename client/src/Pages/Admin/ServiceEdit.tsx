import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import GDrive2Embed from '../../Components/GDrive2Embed'
import Admin from '../../Layouts/Admin'
import slugify from 'slug'
import axios from 'axios'
import Hosts from '../../Utils/Hosts'
import swal from 'sweetalert'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import Textarea from '../../Components/Textarea'
import SimpleMdeReact from 'react-simplemde-editor'

type Props = {
    //
}

const ServiceEdit = (props: Props) => {
  const [title, setTitle] = useState<string>('')
  const [images, setImages] = useState(Array)
  const [markdownValue, setMarkdownValue] = useState('Initial value')
  const [id, setId] = useState<number>()
  const navigate = useNavigate()
  const {slug} = useParams()

  useEffect(() => {
    (async () => {
      const res:{
          title: string,
          id: number
          images: string
      } = await axios.get(Hosts.main + '/service/' + slug + '/edit')
        .then(res => res.data.data.service)
        .catch(err => console.error(err))
      console.log(res);
      
      setTitle(res.title)
      setId(res.id)
      setImages(JSON.parse(res.images))
    })()
  }, [])

  const handleChangeTitle = (e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
  const handleChangeImage = (e:React.ChangeEvent<HTMLInputElement>) => {
    const imagesURL = e.target.value
    setImages(imagesURL.split(';'))
  }
  const handleChangeMarkdown = useCallback((value: string) => {
    setMarkdownValue(value)
  }, [])

  const handleSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault()

    const data = {
      id,
      title, 
      slug: slugify(title),
      images, 
      content: markdownValue
    }

    axios.put(`${Hosts.main}/service`, data)
      .then(res => {
        if (!res.data.error) {
          swal('Success', res.data.message, 'success')
            .then(() => navigate('/admin/service'))
        } else {
          swal('Failed', res.data.message, 'error')
          console.log(res.data.e)
        }
      })
  }
	
  return (
    <Admin>
      <main className='pt-32 min-h-screen bg-primary md:px-24 px-4'>
        <h1 className='text-4xl font-black mb-3'>Admin: Service Page Edit</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-end"><Button type='submit'>Submit</Button></div>
          <Input label='Title' name='title' type='text' defaultValue={title} onChange={handleChangeTitle} required/>
          <Textarea label='Images' name='image' type='text' defaultValue={images} onChange={handleChangeImage} required/>
          <div id="preview" className='flex gap-1 mb-3'>
            {images.map((image, key) => <img 
              src={image as string} key={key} 
              alt='image preview'
              className='h-14'
            />)}
          </div>
          <SimpleMdeReact 
            onChange={handleChangeMarkdown} 
            value={markdownValue}
          />
        </form>
      </main>
      <GDrive2Embed />
    </Admin>
  )
}

export default ServiceEdit