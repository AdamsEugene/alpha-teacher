import appTheme from './theme/appTheme'

export type ColorsKey = keyof typeof appTheme.custom.colors

export interface ColorPayload {
  main: ColorsKey
  color: string
  sub1: string
  sub2: string
}
