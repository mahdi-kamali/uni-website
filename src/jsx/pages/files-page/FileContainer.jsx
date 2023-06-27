import React, { useState } from 'react'
import { Icon } from '@iconify/react';



const FileContainer = ( {defValue}) => {

    const [expanded, toggle] = useState(defValue)

    const handleHeaderClick = () => {
        toggle(prev => !prev)
    }
    console.log(defValue);
    return (
        <fieldset className={`files-container  ${expanded ? "expanded" : ""}`}>
            <legend className="container-header" onClick={handleHeaderClick}>
                <h1>فایل شماره ی یک</h1>
                <small>
                    <Icon className='icon' icon="fa6-solid:file" />
                    12 فایل موجود است</small>

            </legend>
            <div className={`container-body`}>
                <div className="files">
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
                    </li>
                </div>
            </div>




        </fieldset>
    )
}

export default FileContainer