import { PropsEnum } from '../enum/props.enum'

export type GeneratePasswordFunctionProps = {
  [key in PropsEnum]?: key extends PropsEnum.LENGTH | PropsEnum.COUNT
    ? number
    : key extends PropsEnum.EXCLUDE
      ? string
      : key extends
            | PropsEnum.USE_NUMBERS
            | PropsEnum.USE_UPPERCASE
            | PropsEnum.USE_LOWERCASE
            | PropsEnum.USE_SYMBOLS
            | PropsEnum.EXCLUDE_SIMILAR_CHARACTERS
        ? boolean
        : never
}
