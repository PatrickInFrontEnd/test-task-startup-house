import styled from 'styled-components'
import { PropsTheme } from '../../providers/ThemeProvider/models'
import { transitionMixin } from '../mixins'

const LinkComponent = styled.a`
    padding: 10px;
    background-color: ${({ theme }: PropsTheme) => theme.color?.lightBlue};
    font-size: ${({ theme }: PropsTheme) => theme.fSize?.miniXS};
    font-weight: ${({ theme }: PropsTheme) => theme.fWeight?.semiBold};
    color: ${({ theme }: PropsTheme) => theme.color?.white};
    ${transitionMixin()};

    &:hover {
        background-color: ${({ theme }: PropsTheme) => theme.color?.black};
    }
`

export default LinkComponent
