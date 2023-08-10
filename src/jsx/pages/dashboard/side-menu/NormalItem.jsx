
const NormalItem = ({ item, clickEvent, currentSelected }) => {
    const title = item.title
    const svg = item.svg
    return (
        <li className={`item ${currentSelected.title === item.title}`}
            onClick={() => clickEvent(item)}>
            <div className="item-header">
                <span>{title}</span>
                {svg}
            </div>
            <div className="item-body">

            </div>
        </li>
    )
}

export default NormalItem