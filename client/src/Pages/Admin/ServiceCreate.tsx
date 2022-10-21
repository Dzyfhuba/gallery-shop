import MDEditor from '@uiw/react-md-editor'
import axios from 'axios'
import "easymde/dist/easymde.min.css"
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import slug from 'slug'
import swal from 'sweetalert'
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import Admin from '../../Layouts/Admin'
import Hosts from '../../Utils/Hosts'
import ImageUploading, { ImageListType } from 'react-images-uploading'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/free-mode"
import { FreeMode } from 'swiper'
import {FaRegEdit, FaTrash} from 'react-icons/fa'
import Compressor from 'compressorjs'

type Props = {
  //
}

const ServiceCreate = (props:Props) => {
  const [title, setTitle] = useState(String)
  const [images, setImage] = useState([])
  const [compresedImages, setCompressedImages] = useState<{dataURL: string, file: File|Blob}[]>([])
  const [content, setContent] = useState('Initial value')
  const navigate = useNavigate()

  const handleChangeTitle = (e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)

  const handleSubmit = async (e:React.SyntheticEvent) => {
    e.preventDefault()

    const data:{
      title: string,
      slug: string,
      images: {dataURL: string, file: File|Blob}[],
      content: string,
    } = {
      title, 
      slug: slug(title),
      images, 
      content: content
    }

    if (!data.images.length) {
      console.log('no images')
    }

    console.log('uncompressed', data)
    const formData = new FormData()

    data.images.forEach(image => {
      const compressed = new Compressor(image.file, {
        quality: 0.6,
        success: async (file) => {
          // const temp = compresedImages || []
          // const will:{dataURL: string, file: File|Blob} = {dataURL: image.dataURL, file: file}
          // temp.push(will)
          // setCompressedImages(temp)
          console.log(file)
          formData.append('images[]', file)
        }
      })
    })

    data.images = compresedImages
    setCompressedImages([])

    formData.append('title', data.title)
    formData.append('content', data.content)
    

    console.log('compressed', formData)

    const res = await axios.post(`${Hosts.main}/services`, formData)
      .then(res => {
        if (!res.data.error) {
          swal('Success', res.data.message, 'success')
          // .then(() => navigate('/admin/services'))
        } else {
          swal('Failed', res.data.message, 'error')
          console.log(res.data.e)
        }
        return res.data
      })

    console.log(res)
  }

  const handleChangeImage = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined,
  ) => {
    setImage(imageList as never[])
  }
	
  return (
    <Admin>
      <main className='pt-4 min-h-screen md:px-24 px-4'>
        <h1 className='text-4xl font-black mb-3'>Admin: Service Page Create</h1>
        <ImageUploading
          multiple
          value={images}
          onChange={handleChangeImage}
        >
          {
            ({
              imageList,
              onImageUpdate,
              onImageRemoveAll,
              onImageUpload,
              onImageRemove,
              dragProps,
              isDragging
            }) => (
              <>
                <Button 
                  className='bg-blue-500 rounded border border-blue-500 hover:bg-transparent transition-colors duration-300 mb-3'
                  onClick={onImageUpload}
                  {...dragProps}
                >
                    Click or Drop Image Here
                </Button>
                <Swiper
                  spaceBetween={12}
                  freeMode={true}
                  modules={[FreeMode]}
                >
                  {
                    imageList.map((image, index) => (
                      <SwiperSlide 
                        className="w-fit"
                        key={index}
                      >
                        <LazyLoadImage
                          alt={'create'}
                          src={image.dataURL}
                          className={'h-40'}
                        />
                        <div className="flex gap-3">
                          <Button className='bg-yellow-500'>
                            <FaRegEdit />
                          </Button>
                          <Button className='bg-red-500'>
                            <FaTrash />
                          </Button>
                        </div>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </>
            )
          }
        </ImageUploading>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-end"><Button level='primary' type='submit'>Submit</Button></div>
          <Input label='Title' name='title' type='text' onChange={handleChangeTitle} required/>
          <MDEditor value={content} onChange={setContent as never} />
        </form>
      </main>
    </Admin>
  )
}

ServiceCreate.propTypes = {
  auth: PropTypes.any
}

export default ServiceCreate