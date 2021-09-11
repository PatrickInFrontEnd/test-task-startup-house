enum BreakType {
    MaxWidth,
    MinWidth,
    MaxHeight,
    MinHeight,
}

interface BreakpointCreator {
    bp: number
    typeOfBreak: BreakType
}

const toBpType = (type: BreakType): string => {
    const bpType = BreakType[type]
    let finalType: string

    switch (bpType) {
        case BreakType[BreakType.MinWidth]: {
            finalType = 'min-width'

            break
        }
        case BreakType[BreakType.MaxHeight]: {
            finalType = 'max-height'
            break
        }
        case BreakType[BreakType.MinHeight]: {
            finalType = 'min-height'
            break
        }

        default: {
            finalType = 'max-width'
            break
        }
    }

    return finalType
}

const createBreakPoint = ({ bp, typeOfBreak }: BreakpointCreator): string =>
    `@media screen and (${toBpType(typeOfBreak)}:${bp}px)`

interface BPObjectMapper extends BreakpointCreator {
    name: string
}

const bpArray: BPObjectMapper[] = [
    { name: 'laptop', bp: 1500, typeOfBreak: BreakType.MaxWidth },
    { name: 'tablet', bp: 800, typeOfBreak: BreakType.MaxWidth },
    { name: 'phone', bp: 560, typeOfBreak: BreakType.MaxWidth },
    { name: 'miniPhone', bp: 400, typeOfBreak: BreakType.MaxWidth },
]

const breakpoints = bpArray.reduce(
    (bpoints, { name, bp, typeOfBreak }) => ({
        ...bpoints,
        [name]: createBreakPoint({ bp, typeOfBreak }),
    }),
    {}
) as BreakpointsModel

interface BreakpointsModel {
    laptop: string
    tablet: string
    phone: string
    miniPhone: string
}

export { createBreakPoint, BreakType }
export type { BreakpointsModel }

export default breakpoints
