import React from "react"
import Input from "../../../components/input/Input"
import Button from "../../../components/button/button"
import FormCard from "../../../components/formCard/formCard"
import { buttonText } from "../../../components/tokens/TextTokens"

const StepOne = () => {

    const renderComponent = () => (
        <>
            <Input className="max-w-513 w-full" type="text" mandatory name="Job title" placeholder="ex. UX Designer" />
            <Input className="max-w-513 w-full" type="text" mandatory name="Company name" placeholder="ex. Google" />
            <Input className="max-w-513 w-full" type="text" mandatory name="Industry" placeholder="ex. Information Technology" />
            <div className="flex items-center justify-between mb-24">
                <Input noMargin className="max-w-244 w-full" type="text" name="Location" placeholder="ex. Chennai" />
                <Input noMargin className="max-w-244 w-full" type="text" name="Remote Type" placeholder="ex. In office" />
            </div>
            <div className="float-right">
                <Button variant="standard" value={buttonText.next} />
            </div>
        </>
    )

    return (
        <FormCard header="Create a job" subHeader="Step-1" renderComponent={renderComponent} />
    )
}
export default StepOne