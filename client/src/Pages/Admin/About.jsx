import React from 'react'
import AdminNavbar from '../../Containers/AdminNavbar'
import Navbar from '../../Containers/Navbar'
import PropTypes from 'prop-types'
import Admin from '../../Layouts/Admin.tsx'
import Input from '../../Components/Input'
import Textarea from '../../Components/Textarea'

const About = props => {
  return (
    <Admin>
      <main className='pt-32 min-h-screen bg-primary md:px-24 px-4'>
        <Input name='title' label='Nama UMKM' placeholder='Tulis Nama UMKM di sini' />
        <Input name='address' label='Alamat UMKM' placeholder='Tulis Alamat UMKM di sini' />
        <Input name='phone' label='Nomor Telepon' placeholder='Tulis Nomor Telepon di sini' />
        <Input name='email' label='Email' placeholder='Tulis Email di sini' />
        <Input name='facebook' label='Facebook' placeholder='Tulis Facebook di sini' />
        <Input name='instagram' label='Instagram' placeholder='Tulis Instagram di sini' />
        <Textarea name='description' label='Deskripsi UMKM' placeholder='Tulis Deskripsi UMKM di sini' />
      </main>
    </Admin>
  )
}

About.propTypes = {
  auth: PropTypes.any
}


export default About