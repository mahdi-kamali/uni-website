import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import axios from "axios"
import { useEffect } from 'react';
import { APP_GET_GALLERIES, APP_GET_GALLERY_CATEGORIES, BASE_URL } from '../../../consts/API';
const Gallery = () => {


  const [gallery, setGallery] = useState([])
  const [categories, setCategories] = useState([])
  const [finalData, setFinalData] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios({
      method: "get",
      url: APP_GET_GALLERY_CATEGORIES
    }).then(response => {
      const data = response.data.data
      setCategories(data)
    })
  }, [])

  useEffect(() => {
    axios({
      method: "get",
      url: APP_GET_GALLERIES
    }).then(resp => {
      const data = resp.data.data
      setGallery(data)
    })
  }, [categories])



  useEffect(() => {
  }, [gallery])




  const onClickCategory = (cat) => {
    //  console.log(cat);
    const temp = []
    gallery.forEach((item) => {
      if (item.attributes["cat_id"] == cat.id) {
        temp.push(item)
      }
    })
    setPosts(temp)
  }







  return (
    <main className='gallery'>
      <div className="left">

        {
          posts.map((item, index) => {
            const image = BASE_URL + item.attributes.image
            return <div className="item" key={index}>
              <div className="item-header">
                <div className="image">
                  <img src={image} alt="" />
                </div>
              </div>
              <div className="item-body">
                <div className="title">
                  {item.attributes.title}
                </div>
              </div>
            </div>
          })
        }
      </div>
      <aside className='right'>
        <h1>
          <span>
            گالری تصاویر
          </span>
          <Icon icon="clarity:image-gallery-solid" />
        </h1>
        <ul>

          {categories.map((cat, index) => {
            const image = BASE_URL + cat.attributes.image
            return <li onClick={() => { onClickCategory(cat) }}>
              <img src={image} />
              <span>
                {cat?.attributes?.title}
              </span>
            </li>
          })}
        </ul>
      </aside>
    </main>
  )
}

export default Gallery