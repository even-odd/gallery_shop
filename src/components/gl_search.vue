<template>
  <div :class="['search', { editing: edit }]">
    <input
      type="text"
      class="search--input"
      placeholder="Поиск по названию картины"
      v-model.lazy.trim="value"
      @focus="toggleEdit(true)"
      @blur="toggleEdit(false)"
    />
    <button class="btn search--btn" @click="find()">Найти</button>
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
      edit: false,
    }
  },
  created() {
    this.synchronize()
  },
  watch: {
    value() {
      this.find()
    },
  },
  methods: {
    find() {
      let data = {
        value: this.value,
      }
      this.$bus.dispatch(UPDATE_SEARCH, data)
    },
    toggleEdit(edit) {
      this.edit = edit
    },
    synchronize() {
      let toSync = ['value']
      let action = {
        type: UPDATE_SEARCH,
      }

      let composed = this.$synchronizer.getData(action, toSync)
      // console.debug('product sync', { composed })
      this.$synchronizer.updateData(this, composed)
    },
  },
}
</script>

<style lang="scss">
.search {
  display: flex;
  width: 416px;
  border: 1px solid #e1e1e1;

  &.editing {
    border-color: #b5b5b5;
  }

  &--input {
    flex: 1;
    border: none;
    font-family: 'Merriweather', serif;
  }
  &--btn {
    flex-basis: 122px;
    font-family: 'Merriweather', serif;
    font-weight: bold;
    color: white;
  }
}
</style>
