import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { bcContext } from '../../providers/BreadCrumbProvider'
import { PropsTheme } from '../../providers/ThemeProvider/models'

const BreadcrumbWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 10px 40px;
    background-color: ${({ theme }: PropsTheme) => theme.color?.lightBlue};
    color: ${({ theme }: PropsTheme) => theme.color?.black};

    a {
        font-size: ${({ theme }: PropsTheme) => theme.fSize?.miniXS};
        color: inherit;
    }

    span {
        margin: 0 15px;
        font-size: ${({ theme }: PropsTheme) => theme.fSize?.miniXS};
    }
`

const BreadcrumbComponent: React.FC = () => {
    const { path } = useContext(bcContext)

    return (
        <BreadcrumbWrapper>
            <Link to="/">Posts</Link>
            {path && (
                <>
                    <span>{'>'}</span>
                    <span>{path}</span>
                </>
            )}
        </BreadcrumbWrapper>
    )
}
export default BreadcrumbComponent
