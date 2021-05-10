import { appConfig } from '~/config/app'

export const siteTitle = (...titles: string[]) =>
  [...titles, appConfig.name].filter(Boolean).join(' | ')

export const classNames = (...classes: (string | null | undefined)[]) =>
  classes.filter(Boolean).join(' ')
