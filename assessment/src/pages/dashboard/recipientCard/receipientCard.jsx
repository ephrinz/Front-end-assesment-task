import React, { useContext, Fragment } from "react"
import Card from "../../../components/card/card";
import { ParentContext } from "../../../layout/Layout";

const RecipientCard = () => {
    const { jobs } = useContext(ParentContext)

    return (
        <div className="grid grid-cols-1 gap-4 bg-secondary p-6">
            {jobs.map((value, index) => (
                <Fragment key={index}>
                    <Card
                        company={value.company}
                        companyStrength={value.companyStrength}
                        position={value.position}
                        experience={value.experience}
                        jobType={value.jobType}
                        salary={value.salary}
                        time={value.time}
                        applyType={value.applyType}
                        location={value.location} />
                </Fragment>
            ))}
        </div>
    )
}
export default RecipientCard