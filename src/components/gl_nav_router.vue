<template>
  <div class="nav">
    <div
      v-for="(item, index) in nav_items"
      :key="index"
      :class="['nav--item_box', { active: isCurrent(item) }]"
    >
      <a
        v-if="isDefLink(item)"
        :class="item.options.className"
        :href="item.path"
        >{{ item.options.title }}</a
      >

      <img
        v-else-if="isImageLink(item)"
        :class="item.options.className"
        :src="item.options.source"
        @click="changePage(item)"
      />

      <button v-else :class="item.options.className" @click="changePage(item)">
        {{ item.options.title }}
      </button>
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

      this.$bus.dispatch(CHANGE_PAGE, data)
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

<style lang="scss">
.nav {
  display: flex;
  align-items: center;
  overflow: hidden;
}

.nav:first-child {
  margin-left: -28px;
}

.path {
  margin-left: 28px;
  color: #555555;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.path-a {
  padding: 5px 10px;
  font-size: 14px;
  text-decoration: none;
  line-height: 150%;
  outline: none;
}
.path-img {
}
.path-button {
}
</style>
