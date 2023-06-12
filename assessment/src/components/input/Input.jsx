import React from "react"

const Input = (props) => {
    const { name, onChange, placeholder, className, noMargin, mandatory, type } = props

    return (
        <div className={[noMargin ? "" : "mb-6", className].join(' ')}>
            <p className="text-sm mb-1 font-medium">{name}{mandatory &&<span className="text-error">*</span>}</p>
            <input className="border-lightGrey w-full border-1 h-9 rounded-md py-2 pl-3" type={type} placeholder={placeholder} name={name} onChange={onChange} />
        </div>
    )
}
export default Input