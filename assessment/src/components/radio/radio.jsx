import React from "react"

const Radio = (props) => {
    const { name, label } = props

    return (
        <label className="inline-flex items-center mr-4 pb-2">
            <input
                type="radio"
                className="form-radio border-grey3 border-2 h-20 w-20"
                name={name}
            />
            <span className="text-sm ml-1 text-grey font-normal">{label}</span>
        </label>
    )
}
export default Radio