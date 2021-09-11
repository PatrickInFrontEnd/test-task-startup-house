import React from 'react'

export interface BcContextModel {
    path: string
    clearPath: () => void
    setPath: (s: string) => void
}

interface BreadCrumbProps {
    children?: React.ReactNode
}

export default BreadCrumbProps
