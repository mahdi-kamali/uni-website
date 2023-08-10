import React, { useEffect, useState } from 'react'
import FileContainer from './FileContainer';
import axios from 'axios';
import { APP_GET_ALL_FILES } from '../../../consts/API';


const Files = () => {

    const [files, setFiles] = useState([])

    useEffect(() => {
        axios({
            method: "get",
            url: APP_GET_ALL_FILES
        }).then(response => {
            const data = response.data.data
            setFiles(data)
        })
    }, [])


    return (
        <main className='files-page'>
            {
                files.map((file, index) => {
                    return <FileContainer
                        data={file}
                        key={index}
                        defValue={false} />

                })
            }


        </main>
    )
}

export default Files