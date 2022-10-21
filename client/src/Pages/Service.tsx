import React, { useEffect, useState } from 'react'
import Navbar from '../Containers/Navbar'
import Main from '../Layouts/Main'
import ServiceInterface from '../Interfaces/ServiceInterface'
import axios from 'axios'
import Hosts from '../Utils/Hosts'
import Swal from 'sweetalert2'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import {DateTime} from 'luxon'

const Service = () => {
  const [services, setServices] = useState<ServiceInterface[]>([])
  useEffect(() => {
    (async () => {
      const data = await axios.get(Hosts.main + '/services')
        .then(res => res.data.data)
        .then(data => {
          return data
        })
        .catch(err => Swal.fire(JSON.stringify(err), undefined, 'error'))

      console.log(data)
      setServices(data)
    })()
  }, [])
  return (
    <Main>
      <div id="services-list" className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-3'>
        {
          services.length ? services.map(service => (
            <div id="services-item" key={service.id}
              className={'shadow-md rounded overflow-hidden'}
            >
              <LazyLoadImage
                placeholderSrc={'/images/no_image_available.jpg'}
                src={service.images}
                className={'aspect-video object-cover object-center'}
              />
              <article className='p-3'>
                <h1 className='text-lg font-bold capitalize hover:text-blue-500'>
                  <Link to={`/service/${service.slug}`}>{service.title}</Link>
                </h1>
                <p className='text-right'>{new Date(service.updated_at).toLocaleDateString('id')}</p>
              </article>
            </div>
          ))
            : 'No Services'
        }
      </div>
    </Main>
  )
}

export default Service