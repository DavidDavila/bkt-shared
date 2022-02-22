export type BKT_HEADER_PROPS = {
  navList: BKT_HEADER_PROPS_NAV_LIST[],
  logo?: BKT_HEADER_PROPS_LOGO
}
export type BKT_HEADER_PROPS_NAV_LIST = {
  text: string,
  path: string
}
export type BKT_HEADER_PROPS_LOGO = {
  src: string,
  onClick?: Function
}