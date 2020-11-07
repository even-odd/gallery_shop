<template>
  <div :class="['product', { 'product-is_buyed': product.isBuyed }]">
    <Preloader v-if="loading" />

    <div :class="['product--wrap', { locked: loading }]">
      <img class="product--image" :src="product.imgSrc" />
      <div class="product--box-info">
        <h2 class="product--title">{{ product.title }}</h2>

        <div v-if="!product.isBuyed" class="product--box-controls">
          <div class="product--box-prices">
            <span
              :class="[
                'product--price',
                {
                  'product--price-initial': product.price.discount,
                  'product--price-current': !product.price.discount,
                },
              ]"
            >
              {{ getFormatPrice(product.price.initial) }}
            </span>
            <span
              v-if="product.price.discount"
              class="product--price product--price-current"
            >
              {{ getFormatPrice(priceWithDiscount) }}
            </span>
          </div>

          <button
            :class="[
              'btn',
              'product--btn_buy',
              { 'product--btn_buy-in_cart': inCart },
            ]"
            @click="toggleItemInCart(product.id)"
          >
            <img v-if="inCart" src="../assets/mark.svg" class="product--mark" />
            {{ inCart ? 'В корзине' : 'Купить' }}
          </button>
        </div>

        <div v-else class="catalog--item_title-buyed">
          Продана на аукционе
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-prototype-builtins */
import { PUSH_TO_CART } from '../consts/eventBusConsts'
import { formatPrice, checkResponseStatus } from '../helpers'

import Preloader from './gl_preloader'

export default {
  name: 'gl_catalog_product',
  components: {
    Preloader,
  },
  props: {
    product: Object,
  },
  data() {
    return {
      inCart: this.product.inCart,
      loading: false,
    }
  },
  created() {
    this.synchronize()
  },
  computed: {
    priceWithDiscount() {
      let { initial, discount } = this.product.price,
        discountValue = initial * (discount / 100)

      return initial - discountValue
    },
  },
  methods: {
    toggleItemInCart(id) {
      this.loading = true
      this.$http
        .get(`https://reqres.in/api/products/${id}`)
        .then(checkResponseStatus)
        .then((response) => {
          console.debug('RESPONSE', { ...response })
          let { data } = response
          if (!data || !data.data) throw new Error('Data not found!')
          // Так как нам не нужна data, мы её не используем

          this.inCart = !this.inCart

          let dataToDispatch = {
            id: this.product.id,
            inCart: this.inCart,
          }
          this.$bus.dispatch(PUSH_TO_CART, dataToDispatch)
        })
        .catch((err) => {
          this.loading = false
          console.error(err)
          alert('Произошла ошибка загрузки данных...')
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false
          })
        }, 10000)
    },

    getFormatPrice(price) {
      return formatPrice(price)
    },

    synchronize() {
      let toSync = ['inCart']
      let action = {
        id: this.product.id,
        type: PUSH_TO_CART,
      }

      let composed = this.$synchronizer.getData(action, toSync)
      // console.debug('product sync', { composed })
      this.$synchronizer.updateData(this, composed)
    },
  },
}
</script>

<style lang="scss">
.product {
  display: flex;
  flex-direction: column;
  width: 280px;
  border: 1px solid #e1e1e1;
}
.product-is_buyed {
  opacity: 0.5;
}
.product--wrap {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.product--image {
  flex: 1 0 50%;
}
.product--box-info {
  display: flex;
  flex-direction: column;
  flex: 1 0 50%;
  padding: 20px 24px 24px 24px;
}
.product--title {
  width: 100%;
  margin: 0 0 20px 0;
  font-weight: 400;
  line-height: 150%;
}
.product--box-controls {
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
}
.product--box-prices {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
}
.product--price {
  color: #343030;
  line-height: 150%;

  &-current {
    font-size: 16px;
    font-weight: bold;
  }
  &-initial {
    color: #a0a0a0;
    font-size: 14px;
    font-weight: 300;
    text-decoration-line: line-through;
  }
  &::after {
    content: ' $';
  }
}
.product--btn_buy {
  flex-grow: 1;
  width: 118px;
  height: 48px;
  margin: 0 0 0 12px;
  color: #f4f6f9;
  font-size: 14px;
  font-weight: bold;

  &-in_cart {
    background: #5b3a32;
  }
}
.product--mark {
  width: 16px;
  height: 16px;
  margin: 0 4px 0 0;
}
.catalog--item_title-buyed {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #343030;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
}
</style>
