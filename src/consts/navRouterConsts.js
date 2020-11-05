export const NAV_ITEMS_TYPES = {
  A_LINK: 0,
  PATH_LINK: 1,
  IMG_LINK: 2,
}

export const CATALOG_PATH = 'catalog'
export const DELIVERY_PATH = 'delivery'
export const PAYMENT_PATH = 'payment'
export const CONTACT_PATH = 'contact'
export const ABOUT_PATH = 'about'

export const PATHS = {
  [CATALOG_PATH]: CATALOG_PATH,
  [DELIVERY_PATH]: DELIVERY_PATH,
  [PAYMENT_PATH]: PAYMENT_PATH,
  [CONTACT_PATH]: CONTACT_PATH,
  [ABOUT_PATH]: ABOUT_PATH,
}

export const NAV_ITEMS = [
  {
    type: NAV_ITEMS_TYPES.IMG_LINK,
    path: CATALOG_PATH,
    source: '../assets/logo.png',
  },
  {
    type: NAV_ITEMS_TYPES.PATH_LINK,
    path: CATALOG_PATH,
    title: 'Каталог',
  },
  {
    type: NAV_ITEMS_TYPES.A_LINK,
    path: DELIVERY_PATH,
    title: 'Доставка',
  },
  {
    type: NAV_ITEMS_TYPES.A_LINK,
    path: PAYMENT_PATH,
    title: 'Оплата',
  },
  {
    type: NAV_ITEMS_TYPES.A_LINK,
    path: CONTACT_PATH,
    title: 'Контакты',
  },
  {
    type: NAV_ITEMS_TYPES.A_LINK,
    path: ABOUT_PATH,
    title: 'О галерее',
  },
]

export default {
  NAV_ITEMS,
  NAV_ITEMS_TYPES,
  PATHS,
}
