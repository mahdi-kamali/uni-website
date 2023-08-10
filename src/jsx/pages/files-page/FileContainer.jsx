import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { BASE_URL } from '../../../consts/API';



const FileContainer = ({ defValue, data }) => {

    const [expanded, toggle] = useState(true)

    const date = new Date(data.attributes.created_at)



    const handleHeaderClick = () => {
        toggle(prev => !prev)
    }



    const onDownloadClick = (link) => {
        const ancherTag = document.createElement("a")
        ancherTag.href = link
        ancherTag.click()
    }

    console.log(data);
    console.log(data);


    return (
        <fieldset className={`files-container  ${expanded ? "expanded" : ""}`}>
            <legend className="container-header" onClick={handleHeaderClick}>
                <h1>{data?.attributes?.title}</h1>
                {/* <small>
                    <Icon className='icon' icon="fa6-solid:file" />
                    12 فایل موجود است</small> */}

            </legend>
            <div className={`container-body`}>
                <div className="files">
                    <li className="file" >
                        <div className="file-title">
                            {data.attributes.description}
                        </div>
                        <div className="file-download">
                            <button>
                                <small>
                                    {date.getFullYear()}/
                                    {date.getMonth() + 1}/
                                    {date.getDate()}
                                    {/* 1400/1/1 */}
                                </small>
                                <Icon icon="clarity:date-solid" />
                            </button>
                            <button
                                onClick={() => { onDownloadClick(BASE_URL + data.attributes.file) }}>
                                <small>دانلود فایل</small>
                                <Icon icon="ph:download-fill" />
                            </button>
                        </div>
                    </li>
                    {/* <li className="file">
                        <div className="file-title">
                            این یک فایل تست برای دانلود هست
                        </div>
                        <div className="file-download">
                            <button>
                                <small>1400/1/1</small>
                                <Icon icon="clarity:date-solid" />
                            </button>
                            <button>
                                <small>دانلود فایل</small>
                                <Icon icon="ph:download-fill" />
                            </button>
                        </div>
                    </li>
                    <li className="file">
                        <div className="file-title">
                            این یک فایل تست برای دانلود هست
                        </div>
                        <div className="file-download">
                            <button>
                                <small>1400/1/1</small>
                                <Icon icon="clarity:date-solid" />
                            </button>
                            <button>
                                <small>دانلود فایل</small>
                                <Icon icon="ph:download-fill" />
                            </button>
                        </div>
                    </li> */}
                </div>
            </div>

        </fieldset>
    )
}

export default FileContainer