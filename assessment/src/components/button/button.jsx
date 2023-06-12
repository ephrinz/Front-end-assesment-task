import React from "react"

const Button = (props) => {
    const { value, variant, onClick } = props
    const standardStyle = "py-2 px-4 bg-custom-blue shadow-primary text-white rounded-md";
    const outlinedStyle = "py-2 px-4 bg-white border-custom-blue border-1 text-custom-blue rounded-md"

    return (
        <button onClick={onClick} className={variant === "standard" ? standardStyle : outlinedStyle} type="submit">{value}</button>
    )
}
export default Button;