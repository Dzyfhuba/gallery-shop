import React, { useCallback, useState } from 'react'
import AdminNavbar from '../../Containers/AdminNavbar'
import Navbar from '../../Containers/Navbar'
import PropTypes from 'prop-types'
import Input from '../../Components/Input'
import SimpleMdeReact from 'react-simplemde-editor'
import "easymde/dist/easymde.min.css";
import GDrive2Embed from '../../Components/GDrive2Embed'
import Textarea from '../../Components/Textarea'
import Button from '../../Components/Button'
import slug from 'slug'
import axios from 'axios'
import Hosts from '../../Utils/Hosts'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import Admin from '../../Layouts/Admin'
import MDEditor from '@uiw/react-md-editor'

type Props = {
  //
}

const ServiceCreate = (props:Props) => {
  const [title, setTitle] = useState(String)
  const [images, setImage] = useState(Array)
  const [content, setContent] = useState<string | undefined>('Initial value')
  const navigate = useNavigate()

  const handleChangeTitle = (e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)

  const handleSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault()

    const data = {
      title, 
      slug: slug(title),
      images, 
      content: content
    }

    axios.post(`${Hosts.main}/services`, data)
      .then(res => {
        if (!res.data.error) {
          swal('Success', res.data.message, 'success')
            .then(() => navigate('/admin/services'))
        } else {
          swal('Failed', res.data.message, 'error')
          console.log(res.data.e)
        }
      })
  }
	
  return (
    <Admin>
      <main className='pt-4 min-h-screen bg-primary md:px-24 px-4'>
        <h1 className='text-4xl font-black mb-3'>Admin: Service Page Create</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-end"><Button type='submit'>Submit</Button></div>
          <Input label='Title' name='title' type='text' onChange={handleChangeTitle} required/>
          <MDEditor value={content} onChange={setContent} />
        </form>
      </main>
    </Admin>
  )
}

ServiceCreate.propTypes = {
  auth: PropTypes.any
}

export default ServiceCreate