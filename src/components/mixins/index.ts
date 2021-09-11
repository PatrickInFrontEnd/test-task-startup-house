import { css } from 'styled-components'

const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

const flexColumn = css`
    display: flex;
    flex-direction: column;
`

const absoluteCenter = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const transitionMixin = (t = '0.3s') => css`
    transition: ${t};
`

const marginToChildren = (margin = '0 0 15px 0') => css`
    & > * {
        margin: ${margin};
    }
`

export {
    flexCenter,
    flexColumn,
    absoluteCenter,
    marginToChildren,
    transitionMixin,
}
