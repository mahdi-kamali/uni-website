import React from 'react'
import { useState } from 'react'
import { ADMIN_DELETE_GALLERY_PHOTO, ADMIN_GET_GALLERY_PHOTO, BASE_URL } from '../../../../consts/API'
import { Icon } from '@iconify/react'
import axios from "axios"
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
const Gallery = () => {


  const user = useSelector(state => state.user.value)
  const [gallery, setGallery] = useState([])
  const [refresh, setRefresh] = useState(false)




  useEffect(
    () => {
      axios({
        method: "get",
        url: ADMIN_GET_GALLERY_PHOTO,
        headers: {
          "Authorization": user.token
        }
      })
        .then(response => {
          setGallery(response.data.data)
        })
        .catch(error => {
          console.log(error);
        })
    }
    , [refresh])


  const handleDeleteButtonClick = (gallery) => {
    axios({
      method: "delete",
      url: ADMIN_DELETE_GALLERY_PHOTO + `/${gallery.id}`,
      headers: {
        "Authorization": user.token
      }
    }).then(res => {
      setRefresh(!refresh)
    })
  }






  return (
    <div className='dashboard-gallery'>
      {
        gallery.map((gallery, index) => {
          const src = gallery.attributes.image
          return <div className="item" key={index}>
            <div className="item-header">
              <img src={BASE_URL + src} />
            </div>
            <div className="item-body">
              <h1>
                <span>
                  {gallery.attributes.title}
                </span>
                <Icon icon="mdi:delete"
                  onClick={() => { handleDeleteButtonClick(gallery) }} />
              </h1>
            </div>

          </div>
        })
      }
    </div>
  )
}

export default Gallery