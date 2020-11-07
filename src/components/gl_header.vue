<template>
  <div class="main_header">
    <NavRouter />
    <Search />
  </div>
</template>

<script>
import NavRouter from './gl_nav_router'
import Search from './gl_search'

export default {
  name: 'gl_header',
  components: {
    NavRouter,
    Search,
  },
}
</script>

<style lang="scss">
.main_header {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  height: 88px;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
