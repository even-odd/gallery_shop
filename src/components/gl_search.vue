<template>
  <div class="search">
    <input type="text" class="search--input" v-model.lazy.trim="value" />
    <button class="search--btn" @click="find()">Найти</button>
  </div>
</template>

<script>
import { UPDATE_SEARCH } from '../consts/eventBusConsts'

// TODO: подписаться на события синхронизации
export default {
  name: 'gl_search',
  data() {
    return {
      value: '',
    }
  },
  watch: {
    value() {
      this.find()
    },
  },
  methods: {
    find() {
      let data = {
        searchValue: this.value,
      }
      this.$bus.dispatch(UPDATE_SEARCH, data)
    },
  },
}
</script>
