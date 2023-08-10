import { useState } from "react"
import NormalItem from "./NormalItem"

const NestingItem = ({ item, clickEvent, currentSelected }) => {


    const [isOpen, setIsOpen] = useState(false)
    const svg = item.svg
    const title = item.title
    const nestingChild = item.childs

    return (
        <li className={`item  ${isOpen ? "open" : ""}`}>
            <div className="item-header"
                onClick={() => { setIsOpen(state => !state) }}>
                <span>{title}</span>
                {svg}
            </div>
            <div className="item-body">
                <div className="content">
                    {nestingChild?.map((item, index) => {
                        return <NormalItem
                            item={item}
                            key={index}
                            currentSelected={currentSelected}
                            clickEvent={clickEvent} />
                    })}
                </div>

            </div>
        </li>
    )
}

export default NestingItem