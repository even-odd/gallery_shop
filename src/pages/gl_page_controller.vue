<template>
  <component v-if="pageToRender" :is="pageToRender" />
  <ErrorPage v-else error="404 Unknow page" />
</template>

<script>
import consts from '../consts/pageControllerConsts'
import { CHANGE_PAGE } from '../consts/eventBusConsts'

import ErrorPage from './gl_error_page'

const { PAGES } = consts

// ПОКА не поддерживает вложенность, но можно немного поиграться
// и все будет ок. Реализовал ради демонстрации
export default {
  name: 'gl_page_controller',
  components: {
    ErrorPage,
  },
  data() {
    return {
      pageToRender: null,
      listeners: {},
    }
  },
  created() {
    this.changePage()

    this.listeners = {
      [CHANGE_PAGE]: this.$bus.subscribe(
        CHANGE_PAGE,
        this.changePage.bind(this)
      ),
    }
  },
  beforeDestroy() {
    this.$bus.unsubListeners(this.listeners)
  },
  methods: {
    changePage(data) {
      data = data || {}
      let { page } = data

      let currentPage = page || getCurrentPage()
      if (!currentPage) return console.warn('Page is not exist!')

      this.pageToRender = PAGES[currentPage]
    },
  },
}

function getCurrentPage() {
  let pagesKeys = Object.keys(PAGES),
    pathname = window.location.pathname

  for (let pageName of pagesKeys) {
    if (pathname.indexOf(pageName) === -1) continue

    return pageName
  }

  return
}
</script>
