import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import ThemeProviderProps, { PropsTheme } from './models'
import theme from './theme'
import breakpoints from '../../utils/breakpoints'

const GlobalStyle = createGlobalStyle`

    html{
        font-size:10px;

        ${breakpoints.miniPhone}{
            font-size: 9px;
        }
    }

    body{
        padding-top:60px;
        font-family:${({ theme }: PropsTheme) => theme.ff?.Montserrat};
        background-color:#f5f5f5;
    }

    *,*::before,*::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

h1{
        font-size:${({ theme }: PropsTheme) => theme.fSize?.XXXL}
    }
    h2{
        font-size:${({ theme }: PropsTheme) => theme.fSize?.XXL}
    }
    h3{
       font-size: ${({ theme }: PropsTheme) => theme.fSize?.XL}
    }
    h4{
       font-size: ${({ theme }: PropsTheme) => theme.fSize?.L}
    }
    h5{
        font-size:${({ theme }: PropsTheme) => theme.fSize?.M}
    }
    h6{
        font-size:${({ theme }: PropsTheme) => theme.fSize?.S}
    }

    p{
        font-size:${({ theme }: PropsTheme) => theme.fSize?.miniS}
    }

    a{
        font-size:${({ theme }: PropsTheme) => theme.fSize?.XS};
        text-decoration:none;
    }
`

const ThemeProviderComponent: React.FC = ({ children }: ThemeProviderProps) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />
            {children}
        </>
    </ThemeProvider>
)
export default ThemeProviderComponent
