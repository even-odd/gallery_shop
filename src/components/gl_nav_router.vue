<template>
  <div class="nav">
    <div
      v-for="(item, index) in nav_items"
      :key="index"
      :class="['nav--item_box', { active: isCurrent(item) }]"
    >
      <a v-if="isDefLink(item)" :href="item.path">{{ item.title }}</a>

      <img
        v-else-if="isImageLink(item)"
        :src="item.source"
        @click="changePage(item)"
      />

      <button v-else @click="changePage(item)">{{ item.title }}</button>
    </div>
  </div>
</template>

<script>
import consts from '../consts/navRouterConsts'
import { CHANGE_PAGE } from '../consts/eventBusConsts'

const { NAV_ITEMS: DEF_NAV_ITEMS, NAV_ITEMS_TYPES } = consts

export default {
  name: 'gl-nav-router',
  props: {
    items: Array,
  },
  data() {
    return {
      currentPage: '',
      nav_items: [],
    }
  },
  created() {
    this.nav_items = this.items || DEF_NAV_ITEMS
  },
  methods: {
    changePage(item) {
      this.currentPage = item.path

      let data = {
        page: item.path,
      }

      this.$bus.dispatсh(CHANGE_PAGE, data)
    },

    isCurrent(item) {
      return item.path === this.currentPage
    },

    isDefLink(item) {
      return item.type === NAV_ITEMS_TYPES.A_LINK
    },

    isImageLink(item) {
      return item.type === NAV_ITEMS_TYPES.IMG_LINK
    },
  },
}
</script>
