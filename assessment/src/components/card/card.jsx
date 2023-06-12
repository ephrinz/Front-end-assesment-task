import React from "react"
import Logo from "../../assets/Company-logo.png"
import Button from "../button/button"
import { buttonText } from "../../components/tokens/TextTokens"

const Card = (props) => {
    const { position, company, location, jobType, time, experience,
        salary, companyStrength, applyType } = props

    return (
        <div className="bg-white border-secondary rounded-10 border-1 py-4 px-6 max-w-830 w-full mx-auto">
            <div className="flex items-start">
                <img src={Logo} alt="netflix" />
                <div className="pl-2">
                    <div>
                        <p className="text-2xl text-black font-normal">{position}</p>
                        <p className="text-base text-black font-normal">{company}</p>
                        <p className="text-base text-grey font-normal">{location}</p>
                    </div>
                    <div className="mt-6 mb-6">
                        <p className="text-base text-secondaryBlack font-normal mb-2">{jobType} {time}</p>
                        <p className="text-base text-secondaryBlack font-normal mb-2">{experience}</p>
                        <p className="text-base text-secondaryBlack font-normal mb-2">{salary}</p>
                        <p className="text-base text-secondaryBlack font-normal">{companyStrength}</p>
                    </div>
                    <Button variant={applyType.external ? "outlined" : "standard"}
                        value={applyType.external ? buttonText.external : buttonText.quick} />
                </div>
            </div>
        </div>
    )
}
export default Card