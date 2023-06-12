import React from "react"
import StepOne from "./stepOne"
import StepTwo from "./stepTwo"

const FormSubmission = () => {

    return (
        <div className="flex justify-around items-start bg-primary p-8 flex-wrap">
            <StepOne/>
            <StepTwo/>
        </div>
    )
}
export default FormSubmission;