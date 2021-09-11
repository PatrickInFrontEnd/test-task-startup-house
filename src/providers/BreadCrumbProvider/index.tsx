import React, { createContext, useState } from 'react'
import BreadCrumbProps, { BcContextModel } from './models'

export const bcContext = createContext<BcContextModel>({
    path: '',
    clearPath: () => {},
    setPath: () => {},
})

const BreadCrumbProvider: React.FC<BreadCrumbProps> = ({
    children,
}: BreadCrumbProps) => {
    const [path, setCurrPath] = useState('')

    const clearPath = () => {
        setCurrPath('')
    }

    const setPath = (p: string) => {
        setCurrPath(p)
    }

    return (
        <bcContext.Provider
            value={{
                path,
                clearPath,
                setPath,
            }}
        >
            {children}
        </bcContext.Provider>
    )
}

export default BreadCrumbProvider
