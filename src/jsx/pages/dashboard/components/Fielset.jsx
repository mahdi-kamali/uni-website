
const Fielset = ({ title, svg, inputType, inputName, component }) => {
    return (
        <fieldset>
            <legend>
                <span>{title}</span>
                {svg}
            </legend>
            <div className="content">
                {component ? component : <input type={inputType} name={inputName} />
                }
            </div>
        </fieldset>
    )
}

export default Fielset