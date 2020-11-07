// Будем думать, что мы взяли это с сервера
export const PRODUCTS_STUB = [
  {
    id: 0,
    imgSrc: require('../assets/product_1.svg'),
    title: '«Рождение Венеры» Сандро Боттичелли',
    isBuyed: false,
    inCart: false,
    price: {
      initial: 2000000,
      discount: 50,
    },
  },
  {
    id: 1,
    imgSrc: require('../assets/product_2.svg'),
    title: '«Тайная вечеря»  Леонардо да Винчи',
    isBuyed: false,
    inCart: false,
    price: {
      initial: 3000000,
    },
  },
  {
    id: 2,
    imgSrc: require('../assets/product_3.svg'),
    title: '«Сотворение Адама» Микеланджело',
    isBuyed: false,
    inCart: true,
    price: {
      initial: 6000000,
      discount: 16.66666666666667,
    },
  },
  {
    id: 3,
    imgSrc: require('../assets/product_4.svg'),
    title: '«Урок анатомии»  Рембрандт',
    isBuyed: true,
    inCart: false,
    price: {
      initial: 0,
      discount: 0,
    },
  },
]

export default {
  PRODUCTS_STUB,
}
