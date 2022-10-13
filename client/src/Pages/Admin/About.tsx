import React, { useEffect, useState } from 'react'
import AdminNavbar from '../../Containers/AdminNavbar'
import Navbar from '../../Containers/Navbar'
import PropTypes from 'prop-types'
import Admin from '../../Layouts/Admin'
import Input from '../../Components/Input'
import Textarea from '../../Components/Textarea'
import Button from '../../Components/Button'
import axios from 'axios'
import Hosts from '../../Utils/Hosts'
import AboutInterface from '../../Interfaces/AboutInterface'

type Props = {
    //
}

const About = (props:Props) => {
  const [about, setAbout] = useState<AboutInterface>()
  const [formData, setFormData] = useState<AboutInterface>()

  useEffect(() => {
    (async () => {
      const data = await axios.get(Hosts.main + '/about/1/edit')
        .then(res => res.data)
        .catch(err => console.error(err))

      console.log(data)
      setFormData(data)
      setAbout(data)
    })()
  }, [])

  const handleSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault()
    console.log(formData === about);
  }

  return (
    <Admin>
      <main className='pt-4 min-h-screen bg-primary md:px-24 px-4'>
        <form onSubmit={handleSubmit}>
          <Input name='title' label='Nama UMKM' defaultValue={about?.title} placeholder='Tulis Nama UMKM di sini' 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, title: e.target.value})}
          />
          <Input name='address' label='Alamat UMKM' defaultValue={about?.address} placeholder='Tulis Alamat UMKM di sini' 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, address: e.target.value})}
          />
          <Input name='phone' label='Nomor Telepon' defaultValue={about?.phone} placeholder='Tulis Nomor Telepon di sini' 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, phone: e.target.value})}
          />
          <Input name='email' label='Email' defaultValue={about?.email} placeholder='Tulis Email di sini' 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, email: e.target.value})}
          />
          <Input name='facebook' label='Facebook' defaultValue={about?.facebook} placeholder='Tulis Facebook di sini' 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, facebook: e.target.value})}
          />
          <Input name='instagram' label='Instagram' defaultValue={about?.instagram} placeholder='Tulis Instagram di sini' 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, instagram: e.target.value})}
          />
          <Textarea name='description' label='Deskripsi UMKM' defaultValue={about?.description} placeholder='Tulis Deskripsi UMKM di sini' 
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({...formData, description: e.target.value})}
          />
          <Button type='submit' className='ml-auto bg-ternary'>Simpan</Button>
        </form>
      </main>
    </Admin>
  )
}

export default About