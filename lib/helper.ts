export const classNames = (...classes: (string | null | undefined)[]) =>
  classes.filter(Boolean).join(' ')
