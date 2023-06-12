import React from "react"
import Input from "../../../components/input/Input"
import Button from "../../../components/button/button"
import Radio from "../../../components/radio/radio"
import FormCard from "../../../components/formCard/formCard"
import { buttonText, formSubmitText } from "../../../components/tokens/TextTokens"

const StepTwo = () => {

    const renderComponent = () => (
        <>
            <div className="flex items-end justify-between">
                <Input className="max-w-244 w-full" type="text" name="Experience" placeholder="Minimum" />
                <Input className="max-w-244 w-full" type="text" name="" placeholder="Maximum" />
            </div>
            <div className="flex items-end justify-between">
                <Input className="max-w-244 w-full" type="text" name="Salary" placeholder="Minimum" />
                <Input className="max-w-244 w-full" type="text" name="" placeholder="Maximum" />
            </div>
            <Input className="max-w-513 w-full" type="text" name="Total employee" placeholder="ex. 100" />
            <div className="mb-24">
                <p className="text-sm mb-3 font-medium">{formSubmitText.applyType}</p>
                <div className="flex items-end">
                    <Radio name="applyType" label="Quick Apply" />
                    <Radio name="applyType" label="External Apply" />
                </div>
            </div>
            <div className="float-right">
                <Button variant="standard" value={buttonText.save} />
            </div>
        </>
    )

    return (
        <FormCard header="Create a job" subHeader="Step-2" renderComponent={renderComponent} />
    )
}
export default StepTwo