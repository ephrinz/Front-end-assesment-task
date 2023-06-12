import React, { createContext, useState, useEffect } from "react"
import { availableJobs } from "../components/tokens/MockData"
export const ParentContext = createContext();

const Layout = ({ children }) => {
    const [jobs, setJobs] = useState([])
    console.log(availableJobs)

    useEffect(() => {
        setJobs(availableJobs)
    }, [])

    let values = {
        jobs,
        setJobs
    }

    return (
        <ParentContext.Provider value={values}>
            <div>{children}</div>
        </ParentContext.Provider>
    )
}
export default Layout