import React from 'react'
import { Helmet } from 'react-helmet-async'
import SEOProps from './models'

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    children,
}: SEOProps) => (
    <>
        <Helmet>
            {title && <title>{title}</title>}
            {description && <meta name="description" content={description} />}
        </Helmet>
        {children}
    </>
)
export default SEO
