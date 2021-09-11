import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PropsTheme } from '../providers/ThemeProvider/models'
import { flexCenter, flexColumn, transitionMixin } from '../components/mixins'
import breakpoints from '../utils/breakpoints'

const NavigationContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    ${flexCenter};
    justify-content: flex-end;
    width: 100%;
    height: 60px;
    padding: 10px 80px;
    background-color: ${({ theme }: PropsTheme) => theme.color?.black};

    ${breakpoints.miniPhone} {
        padding: 10px 40px;
    }
`

const LinksContainer = styled.div`
    ${flexCenter};
    width: auto;
    ${transitionMixin('0.5s')};

    a {
        ${flexCenter};
        position: relative;
        overflow: hidden;
        margin: 0 20px;
        padding: 5px 10px;
        color: ${({ theme }: PropsTheme) => theme.color?.white || '#fff'};
        font-size: ${({ theme }: PropsTheme) => theme.fSize?.miniXS};
        font-weight: ${({ theme }: PropsTheme) => theme.fWeight?.light};
        font-family: ${({ theme }: PropsTheme) => theme.ff?.Montserrat};
        ${transitionMixin()};
        transition-delay: 0s;

        svg {
            max-height: 1em;
            margin-left: 5px;
            ${transitionMixin()};
        }

        &::after {
            position: absolute;
            top: 0;
            right: 0;
            z-index: -1;
            opacity: 0;
            content: '';
            width: 100%;
            height: 100%;
            background-color: ${({ theme }: PropsTheme) => theme.color?.white};
            transform: translateX(-100%);
            ${transitionMixin()};
        }

        &:hover {
            color: ${({ theme }: PropsTheme) => theme.color?.black};

            svg {
                fill: ${({ theme }: PropsTheme) => theme.color?.black};
            }

            &::after {
                transform: translateY(0);
                opacity: 1;
                width: 100%;
            }
        }
    }

    @media screen and (max-width: 1500px) {
        a {
            font-size: ${({ theme }: PropsTheme) => theme.fSize?.miniXXS};
        }
    }

    @media screen and (max-width: 980px) {
        a {
            margin: 0 10px;
        }
    }

    @media screen and (max-width: 800px) {
        ${flexColumn};
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translateY(100%) translateX(-100%) scale(0);
        width: 100%;
        padding: 20px 0;
        border-top: 1px solid ${({ theme }: PropsTheme) => theme.color?.white};
        background-color: ${({ theme }: PropsTheme) => theme.color?.black};

        &.opened {
            transform: translateY(100%) translateX(0) scale(1);
        }

        a {
            width: 80%;
            max-width: 300px;
            margin: 10px 0;
            padding-bottom: 10px;
            border-bottom: 1px solid #fff;
        }
    }
`

const Hamburger = styled.div`
    position: relative;
    overflow: hidden;
    width: 40px;
    height: 60px;
    display: none;

    span {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 2px;
        border-radius: 5px;
        background-color: ${({ theme }: PropsTheme) => theme.color?.white};
        ${transitionMixin()};

        &:nth-of-type(1) {
            width: 100%;
            left: unset;
            transform: translateX(40%);
            right: 0;
            top: 22px;
        }
        &:nth-of-type(2) {
            top: 32px;
        }
        &:nth-of-type(3) {
            top: 41px;
        }
    }

    &:hover {
        span {
            &:nth-of-type(1) {
                transform: translateX(0);
            }
        }
    }

    &.active {
        span {
            &:nth-of-type(1) {
                opacity: 0;
            }
            &:nth-of-type(2) {
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) rotate(-45deg);
            }
            &:nth-of-type(3) {
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) rotate(45deg);
            }
        }
    }

    @media screen and (max-width: 800px) {
        ${flexCenter};
        ${flexColumn};
    }
`

const NavigationComponent = () => {
    const [openedMenu, setOpenedMenu] = useState<boolean>(false)

    const closeMenu = (): void => setOpenedMenu(false)
    const openMenu = (): void => setOpenedMenu(true)

    const toggleMenu = (): void => (openedMenu ? closeMenu() : openMenu())

    return (
        <NavigationContainer>
            <LinksContainer className={openedMenu ? 'opened' : ''}>
                <Link to="/" onClick={toggleMenu}>
                    Main Page
                </Link>
            </LinksContainer>

            <Hamburger
                onClick={toggleMenu}
                className={openedMenu ? 'active' : ''}
            >
                <span />
                <span />
                <span />
            </Hamburger>
        </NavigationContainer>
    )
}
export default NavigationComponent
