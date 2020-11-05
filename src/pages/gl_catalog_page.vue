<template>
  <div class="catalog_page">
    <div class="catalog--title">
      Картины эпохи Возрождения
    </div>
    <div class="catalog">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import consts from '../consts/catalogPageConsts'

import Product from '../components/gl_catalog_product'

const { PRODUCTS_STUB } = consts

export default {
  name: 'gl_catalog_page',
  components: {
    Product,
  },
  data() {
    return {
      products: [...PRODUCTS_STUB],
    }
  },
}
</script>
