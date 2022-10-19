import React, { useEffect, useState,  } from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Containers/Navbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Hosts from '../Utils/Hosts'
import Loading from '../Components/Loading'
import Main from '../Layouts/Main'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper'
import ArticleInterface from '../Interfaces/ArticleInterface'
// import 'swiper'

type Props = {
  //
}

const ArticleShow = (props:Props) => {
  const [article, setArticle] = useState<ArticleInterface>()
  const [isLoading, setIsLoading] = useState(true)
  const {slug} = useParams()
	
  useEffect(() => {
    axios.get(`${Hosts.main}/articles/${slug}`)
      .then(res => {
        setIsLoading(false)
        setArticle(res.data.data)
      })
  }, [])

  return (
    <Main>
      <main className='min-h-screen pt-24 md:px-24'>
        <Swiper
          pagination={{
            dynamicBullets: true
          }}
          modules={[Pagination]}
        >
          {/* {
            article?.images ? article.images
          } */}
        </Swiper>
      </main>
    </Main>
  )
}

ArticleShow.propTypes = {
  auth: PropTypes.any
}

export default ArticleShow