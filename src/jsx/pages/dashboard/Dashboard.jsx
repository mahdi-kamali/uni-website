import { Icon } from "@iconify/react"
import { useEffect, useState } from "react"
import Employes from "./Employes/Employes"
import NestingItem from "./side-menu/NestingItem"
import CreateEmployeCategory from "./Employes/CreateEmployeCategory"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import NormalItem from "./side-menu/NormalItem"
import CreateEmploye from "./Employes/CreateEmploye"
import PostsCategories from "./posts/PostsCategories"
import CreatePostsCategory from "./posts/CreatePostsCategory"
import PostsCreate from "./posts/PostsCreate"
import Posts from "./posts/Posts"
import CreateGalleryCategory from "./gallery/CreateGalleryCategory"
import GalleryCategories from "./gallery/GalleryCategories"
import Gallery from "./gallery/Gallery"
import CreateGalleryPhoto from "./gallery/CreateGalleryPhoto"
import Files from "./files/Files"
import CreateFile from "./files/CreateFile"

const Dashboard = ({ panelState, setPanelState }) => {



    const user = useSelector(state => state.user)
    const navigator = useNavigate()

    const items = [
        {
            svg: <Icon icon="clarity:employee-solid" />,
            title: "پرسنل ها",
            type: "acordion",
            childs: [
                
                {
                    svg: <Icon icon="clarity:employee-group-solid" />,
                    title: "همه ی پرسنل ها",
                    component: <Employes />,
                },
                {
                    svg: <Icon icon="material-symbols:create-new-folder-rounded" />,
                    title: "ایحاد دسته پرسنل",
                    component: <CreateEmployeCategory />,
                },
                {
                    svg: <Icon icon="clarity:employee-solid" />,
                    title: "ایجاد پرسنل جدید",
                    component: <CreateEmploye />,
                }
            ]
        },
        {
            svg: <Icon icon="material-symbols:post-rounded" />,
            title: "پست ها",
            type: "acordion",
            childs: [
                {
                    svg: <Icon icon="tabler:category-filled" />,
                    title: "همه ی دسته بندی",
                    component: <PostsCategories />,
                },
                {
                    svg: <Icon icon="ic:round-create-new-folder" />,
                    title: "ایجاد دسته بندی",
                    component: <CreatePostsCategory />,
                },
                {
                    svg: <Icon icon="solar:posts-carousel-vertical-bold" />,
                    title: "همه ی پست ها",
                    component: <Posts />,
                },
                {
                    svg: <Icon icon="ic:round-create-new-folder" />,
                    title: "ایجاد پست جدید",
                    component: <PostsCreate />,
                }
            ]
        },
        {
            svg: <Icon icon="solar:gallery-wide-bold-duotone" />,
            title: "گالری ",
            type: "acordion",
            childs: [
                {
                    svg: <Icon icon="tabler:category-filled" />,
                    title: "همه دسته بندی ها",
                    component: <GalleryCategories />,
                },
                {
                    svg: <Icon icon="ic:round-create-new-folder" />,
                    title: "ایجاد دسته بندی",
                    component: <CreateGalleryCategory />,
                },
                {
                    svg: <Icon icon="ph:image-fill" />,
                    title: "همه عکس ها",
                    component: <Gallery />,
                },
                {
                    svg: <Icon icon="ic:round-create-new-folder" />,
                    title: "ایجاد عکس جدید",
                    component: <CreateGalleryPhoto />,
                },
            ]
        },
        {
            svg: <Icon icon="ph:files-fill" />,
            title: "فایل ها",
            type: "acordion",
            childs: [
                {
                    svg: <Icon icon="ph:files-fill" />,
                    title: "همه فایل ها",
                    component: <Files />,
                },
                {
                    svg: <Icon icon="ant-design:file-add-filled" />,
                    title: "ایجاد فایل جدید",
                    component: <CreateFile />,
                }
            ]
        },
    ]

    const [currentSelected, setSelected] = useState(items[0])

    const setCurrentSelected = (item) => {
        setSelected(item)
        setPanelState(false)
    }

    useEffect(() => {

        if (user.value === null) {
            navigator("/auth")
        } else {
            return
        }
    }, [user])






    if (user?.value !== null && user !== null) {
        return (
            <main className="dashboard">
                <div className={`left `}>
                    {currentSelected.component}
                </div>
                <div className={`right ${panelState ? "show" : ""}`}>
                    <h1>پنل مدریتی</h1>
                    <ul>
                        {items.map((item, index) => {
                            if (item?.type === "acordion") {
                                return <NestingItem
                                    item={item}
                                    key={index}
                                    currentSelected={currentSelected}
                                    clickEvent={setCurrentSelected} />
                            }
                            if (item.type === "normal") {
                                return <NormalItem
                                    item={item}
                                    key={index}
                                    clickEvent={setCurrentSelected}
                                    currentSelected={currentSelected}
                                />
                            }
                        })}
                    </ul>
                </div>
            </main>
        )
    }


}

export default Dashboard