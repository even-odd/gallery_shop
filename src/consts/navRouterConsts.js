export const NAV_ITEMS_TYPES = {
  A_LINK: 0,
  BTN_LINK: 1,
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
    options: {
      source: require('../assets/logo.svg'),
      className: 'path path-img path-logo',
    },
  },
  {
    type: NAV_ITEMS_TYPES.A_LINK,
    path: CATALOG_PATH,
    options: {
      title: 'Каталог',
      className: 'path path-a path-catalog',
    },
  },
  {
    type: NAV_ITEMS_TYPES.A_LINK,
    path: DELIVERY_PATH,
    options: {
      title: 'Доставка',
      className: 'path path-a path-delivery',
    },
  },
  {
    type: NAV_ITEMS_TYPES.A_LINK,
    path: PAYMENT_PATH,
    options: {
      title: 'Оплата',
      className: 'path path-a path-payment',
    },
  },
  {
    type: NAV_ITEMS_TYPES.A_LINK,
    path: CONTACT_PATH,
    options: {
      title: 'Контакты',
      className: 'path path-a path-contacts',
    },
  },
  {
    type: NAV_ITEMS_TYPES.A_LINK,
    path: ABOUT_PATH,
    options: {
      title: 'О галерее',
      className: 'path path-a path-about',
    },
  },
]

export default {
  NAV_ITEMS,
  NAV_ITEMS_TYPES,
  PATHS,
}
