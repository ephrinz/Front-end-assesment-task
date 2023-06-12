import React, { Fragment } from "react"
import FormSubmission from "./formSubmission/formSubmission"
import RecipientCard from "./recipientCard/receipientCard"

const Dashboard = () => {
    return (
        <Fragment>
            <FormSubmission />
            <RecipientCard />
        </Fragment>
    )
}
export default Dashboard