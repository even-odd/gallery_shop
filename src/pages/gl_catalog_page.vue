<template>
  <div class="page_box">
    <div class="catalog_page">
      <h1 class="catalog--title">
        Картины эпохи Возрождения
      </h1>
      <div class="catalog">
        <Product
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
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

<style lang="scss">
.catalog_page {
  width: 1200px;
  margin: 0 auto;
}
.catalog--title {
  margin: 0 0 39px 0;
}
.catalog {
  display: flex;
  justify-content: space-around;
}
</style>
