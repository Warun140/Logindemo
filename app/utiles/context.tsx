'use client'

import { createContext, useContext, useEffect, useState } from "react"
interface LoginContextType {
    email: string
}
const AppContext = createContext<LoginContextType | undefined>(undefined)

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [emailTest, setEmail] = useState<LoginContextType | undefined>(undefined)

    useEffect(() => {
        //load data init from sever 
        _onLoadBankCompany()
    }, [])

    const _onLoadBankCompany = async (isNoCache = false): Promise<void> => {
        try {
            //load api
            setEmail({ email: 'm@example.com' })

        } catch (error) {
        }
    }

    const dataContext = {
        emailTest
    }

    return (
        <>
            <AppContext.Provider value={dataContext.emailTest}>
                {children}
            </AppContext.Provider>
        </>
    )

}
export default AppProvider



export const useAppContext = () => {
    return useContext(AppContext)
}