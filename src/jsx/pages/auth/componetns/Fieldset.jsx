
const Fieldset = ({ legend, inputType, inputName }) => {
    return (
        <fieldset>
            <legend>
                <span>{legend.title}</span>
                {legend?.svg}
            </legend>
            <div className="content">
                <input type={inputType} name={inputName} />
            </div>
        </fieldset>
    )
}

export default Fieldset