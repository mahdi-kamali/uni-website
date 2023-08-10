import React from 'react'
import { useState } from 'react'

import axios from "axios"
import { ADMIN_DELETE_GALLERY_CATEGORY, ADMIN_GET_GALLERY_CATEGORY, BASE_URL } from '../../../../consts/API'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Icon } from '@iconify/react'

const GalleryCategories = () => {


  const user = useSelector(state => state.user.value)
  const [categories, setCategories] = useState([])
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    axios({
      method: "get",
      url: ADMIN_GET_GALLERY_CATEGORY,
      headers: {
        "Authorization": user.token
      }
    })
      .then(response => {
        setCategories(response.data.data)
      }).catch(error => {

      })


  }, [refresh])

  const handleDeleteClick = (item) => {
    axios({
      method: "delete",
      url: ADMIN_DELETE_GALLERY_CATEGORY + `/${item.id}`,
      headers: {
        "Authorization": user.token
      }
    }).then(response => {
      setRefresh(!refresh)
    })
      .catch(err => { })
  }


  return (
    <div className='dashboard-gallery-categories'>
      {
        categories.map((item, index) => {
          const src = item.attributes.image
          return <div className="item" key={index}>
            <div className="item-header">
              <img src={BASE_URL + src} />
            </div>
            <div className="item-body">
              <h1>
                <span>
                  {item.attributes.title}
                </span>
                <Icon icon="mdi:delete" onClick={() => { handleDeleteClick(item) }} />
              </h1>
            </div>

          </div>
        })
      }
    </div>
  )
}

export default GalleryCategories