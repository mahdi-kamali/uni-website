import { useState } from "react"
import axios from "axios"
import { ADMIN_DELETE_FILES, ADMIN_GET_FILES, BASE_URL } from "../../../../consts/API"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { Icon } from "@iconify/react"

const Files = () => {

    const [files, setFiles] = useState([])
    const [refresh, setRefresh] = useState(false)
    const user = useSelector(state => state.user.value)

    useEffect(() => {
        axios({
            method: "get",
            url: ADMIN_GET_FILES,
            headers: {
                "Authorization": user.token
            }
        })
            .then(response => {
                setFiles(response.data.data)
            })
            .catch(error => { })
    }, [refresh])


    const onDownloadclick = (file) => {
        const downloadLink = BASE_URL + file.attributes.file;
        const ancher = document.createElement("a")
        ancher.href = downloadLink
        ancher.click()
    }

    const onDeleteClick = (file) => {
        console.log(ADMIN_DELETE_FILES + `/${file.id}`);
        axios({
            method: "delete",
            url: ADMIN_DELETE_FILES + `/${file.id}`,
            headers: {
                "Authorization": user.token
            }
        })
            .then(response => {
                setRefresh(!refresh)
                console.log(response);
            })
            .catch(error => { })
    }


    return (
        <div className="dashboard-files">
            {
                files.map((file, index) => {
                    return <div className="item" key={index}>
                        <div className="item-header">
                            {file.attributes.title}
                        </div>
                        <div className="item-body">
                            <Icon icon="ph:download-fill"
                                onClick={() => onDownloadclick(file)} />
                            <Icon icon="mdi:delete" onClick={() => { onDeleteClick(file) }} />
                        </div>

                    </div>
                })
            }
        </div>
    )
}

export default Files