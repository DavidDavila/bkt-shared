export type BKT_BUTTON_PROPS = {
  text: string,
  type: 'primary' | 'secondary',
  icon?: {
    src: string,
    position: 'center' | 'right' | 'left'
  }
}