import React, { useEffect, useState } from 'react'
import Main from '../Layouts/Main'
import ArticleInterface from '../Interfaces/ArticleInterface'
import axios from 'axios'
import Hosts from '../Utils/Hosts'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Articles = () => {
  const [articles, setArticles] = useState<ArticleInterface[]>([])
  useEffect(() => {
    (async () => {
      const data = await axios.get(Hosts.main + '/articles')
        .then(res => res.data.data)
        .then(data => {
          return data.map((item:ArticleInterface) => {
            return {
              ...item,
              images: JSON.parse(item.images || '')[0] || 'no image'
            }
          })
        })
        .catch(err => Swal.fire(JSON.stringify(err), undefined, 'error'))

      console.log(data)
      setArticles(data)
    })()
  }, [])
  return (
    <Main>
      <main className='min-h-screen bg-primary'>
        <div id="articles-list" className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-3'>
          {
            articles.length ? articles.map(article => (
              <div id="articles-item" key={article.id}
                className={'shadow-md rounded overflow-hidden'}
              >
                <LazyLoadImage
                  placeholderSrc={'/images/no_image_available.jpg'}
                  src={article.images}
                  className={'aspect-video object-cover object-center'}
                />
                <article className='p-3'>
                  <h1 className='text-lg font-bold capitalize hover:text-blue-500'>
                    <Link to={`/article/${article.slug}`}>{article.title}</Link>
                  </h1>
                  <p className='text-right'>{new Date(article.updated_at).toLocaleDateString('id')}</p>
                </article>
              </div>
            ))
              : 'No articles'
          }
        </div>
      </main>
			
    </Main>
  )
}

export default Articles