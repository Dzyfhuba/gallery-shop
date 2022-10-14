import React, { useEffect, useState,  } from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Containers/Navbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Hosts from '../Utils/Hosts'
import Loading from '../Components/Loading'
import Main from '../Layouts/Main.tsx'

const ServiceShow = props => {
  const [service, setService] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const {slug} = useParams()
	
  useEffect(() => {
    axios.get(`${Hosts.main}/service/${slug}`)
      .then(res => {
        setIsLoading(false)
        setService(res.data.data)
      })
  }, [])

  return (
    <Main>
      <main className='min-h-screen pt-24 md:px-24'>
        {
          isLoading? (<Loading color={'#5F7161'} type={'spin'} className='mx-auto' />) : (
            <article>
              {
                JSON.parse(service.images).length == 1 && JSON.parse(service.images).length != 0 ? (
                  <img src={JSON.parse(service.images)} alt={service.title} className='max-w-4xl object-cover mx-auto' />
                ) : (
                  <div className="flex max-w-4xl ">
                    {JSON.parse(service.images).map((item, i) => (
                      <img src={item} alt={service.title} key={i} className='object-cover mx-auto' />
                    ))}
                  </div>
                )
              }
              <hr className='my-5' />
              <h1 className='font-black text-3xl capitalize'>{service.title}</h1>
            </article>
          )
        }
      </main>
    </Main>
  )
}
export default ServiceShow