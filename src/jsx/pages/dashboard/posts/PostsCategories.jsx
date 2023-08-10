import { Icon } from '@iconify/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import { ADMIN_GET_POSTS_CATEGORIES, BASE_URL } from '../../../../consts/API'
import { useSelector } from 'react-redux'
const PostsCategories = () => {


  const user = useSelector(state => state.user.value)

  const [categories, setCategories] = useState([])
  const [refresh, setRefresh] = useState(true)
  useEffect(() => {
    axios({
      method: "get",
      url: ADMIN_GET_POSTS_CATEGORIES,
      headers: {
        "Authorization": user.token
      }
    }).then(response => {
      setCategories(response.data.data)
    })
      .catch(err => {
      })
  }, [refresh])


  const handleDeleteClick = (item) => {
    const DELETE_URL = ADMIN_GET_POSTS_CATEGORIES + `/${item.id}`
    axios({
      method: "delete",
      url: DELETE_URL,
      headers: {
        "Authorization": user.token
      }
    }).then(resp => {
      setRefresh(!refresh);
    })
  }




  return (
    <div className='dashboard-posts-categories'>
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

export default PostsCategories