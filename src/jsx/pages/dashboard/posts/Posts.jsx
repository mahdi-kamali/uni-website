import { Icon } from '@iconify/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from "axios"
import { ADMIN_DELETE_POSTS, ADMIN_GET_POSTS, BASE_URL } from '../../../../consts/API'
const Posts = () => {


    const user = useSelector(state => state.user.value)
    const [posts, setPosts] = useState([])
    const [refresh ,setRefresh] = useState(false)


    useEffect(() => {
        axios({
            method: "get",
            url: ADMIN_GET_POSTS,
            headers: {
                "Authorization": user.token
            }
        })
            .then(res => {
                setPosts(res.data.data)
            })
    }, [refresh])

    const handleDeleteButtonClick = (post) => {
        axios({
            method: "delete",
            url: ADMIN_DELETE_POSTS + post.id,
            headers: {
                "Authorization": user.token
            }
        }).then(res => {
           setRefresh(!refresh)
        })
    }




    return (
        <div className='dashboard-posts'>
            {
                posts.map((post, index) => {
                    const image = BASE_URL + post.attributes.image
                    console.log();
                    return <div div className="item" key={index}>
                        <div className="item-header">
                            <img src={image} />
                        </div>
                        <div className="item-body">
                            <h1>
                                <span>
                                    {post.attributes.title}
                                </span>
                                <Icon icon="mdi:delete"
                                    onClick={() => handleDeleteButtonClick(post)} />
                            </h1>
                        </div>

                    </div>
                })
            }
        </div >
    )
}

export default Posts