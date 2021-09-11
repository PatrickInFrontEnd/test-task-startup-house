import React from 'react'
import NavigationComponent from './Navigation'
import LayoutProps from './models'
import BreadcrumbComponent from '../components/Breadcrumb/BreadCrumb.component'

const LayoutComponent: React.FC<LayoutProps> = ({ children }: LayoutProps) => (
    <>
        <NavigationComponent />
        <BreadcrumbComponent />
        {children}
    </>
)
export default LayoutComponent
