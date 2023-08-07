import { Icon } from "@iconify/react"
import { useEffect, useState } from "react"
import Users from "./Users/Users"
import { setSelectionRange } from "@testing-library/user-event/dist/utils"
import Employes from "./Employes/Employes"
import NestingItem from "./Employes/NestingItem"
import NormalItem from "./Employes/NormalItem"
import CreateEmployeCategory from "./Employes/CreateEmployeCategory"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {



    const user = useSelector(state => state.user)
    const navigator = useNavigate()

    const items = [
        {
            svg: <Icon icon="clarity:employee-solid" />,
            title: "پرسنل ها",
            component: <Employes />,
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
                }
            ]
        },
        {
            svg: <Icon icon="material-symbols:post-rounded" />,
            title: "پست ها",
            type: "normal",

            component: <h1>Helo</h1>,
        },
        {
            svg: <Icon icon="solar:slider-horizontal-bold" />,
            title: "اسلایدرها",
            type: "normal",

            component: <h1>Helo</h1>,

        },
        {
            svg: <Icon icon="solar:gallery-wide-bold-duotone" />,
            title: "گالری ها",
            type: "normal",

            component: <h1>Helo</h1>,

        },
        {
            svg: <Icon icon="ph:files-fill" />,
            title: "فایل ها",
            type: "normal",
            component: <h1>Helo</h1>,
        },
    ]

    const [currentSelected, setCurrentSelected] = useState(items[0])

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
                <div className="left">
                    {currentSelected.component}
                </div>
                <div className="right">
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