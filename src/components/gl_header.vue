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
