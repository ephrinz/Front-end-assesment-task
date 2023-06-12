import React from "react"

const FormCard = (props) => {
    const { header, subHeader, renderComponent } = props
    return (
        <div className="bg-white max-w-577 w-full mx-auto rounded-10 border-lightGrey border-1 p-8">
            <div className="flex items-center justify-between mb-6">
                <p className="text-xl font-normal">{header}</p>
                <p className="text-base font-medium">{subHeader}</p>
            </div>
            {renderComponent()}
        </div>
    )
}
export default FormCard