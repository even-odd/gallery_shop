<template>
  <div :class="['product', { 'product-is_buyed': product.isBuyed }]">
    <img :src="product.imgSrc" />
    <div class="product--title">{{ product.title }}</div>
    <div v-if="product.isBuyed" class="product--box">
      <div class="product--box product--box-price">
        <div class="product--initial_price">
          {{ product.price.initial }}
        </div>
        <div class="product--discount_price">
          {{ priceWithDiscount }}
        </div>
      </div>

      <div class="btn product--btn_buy" @click="toggleBuyItem">
        Купить
      </div>
    </div>
    <div v-else class="catalog--item_title-buyed">
      Продана на аукционе
    </div>
  </div>
</template>

<script>
import { PUSH_TO_CART } from '../consts/eventBusConsts'
export default {
  name: 'gl_catalog_product',
  props: {
    product: Object,
  },
  data() {
    return {
      inCart: false,
    }
  },
  computed: {
    priceWithDiscount() {
      let { initial, discount } = this.product.price,
        discountValue = initial * (discount / 100)

      return initial - discountValue
    },
  },
  methods: {
    toggleBuyItem() {
      this.inCart = !this.inCart

      let data = {
        id: this.props.id,
        inCart: this.inCart,
      }
      this.$bus.dispatch(PUSH_TO_CART, data)
    },
  },
}
</script>
