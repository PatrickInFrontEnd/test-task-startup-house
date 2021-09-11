import React from 'react'

export interface ColorPalette {
    black: string
    white: string
    lightBlue: string
}

export interface FontSizePalette {
    XXXL: '6.4rem'
    XXL: '5.2rem'
    XL: '4.8rem'
    L: '3.6rem'
    M: '3.2rem'
    S: '2.8rem'
    XS: '2.6rem'
    XXS: '2.4rem'
    XXXS: '2.2rem'
    miniS: '1.8rem'
    miniXS: '1.6rem'
    miniXXS: '1.4rem'
    miniXXXS: '1.2rem'
}

export interface FontWeightPalette {
    thin: string
    extraLight: string
    light: string
    regular: string
    medium: string
    semiBold: string
    bold: string
    extraBold: string
    black: string
}

export interface FontFamilyPalette {
    Montserrat: string
}

//  Final shape of theme object
export interface DefaultTheme {
    color?: ColorPalette
    fSize?: FontSizePalette
    fWeight?: FontWeightPalette
    ff?: FontFamilyPalette
}

export interface PropsTheme {
    theme: DefaultTheme
}

interface ThemeProviderProps {
    children?: React.ReactNode
}

export default ThemeProviderProps
