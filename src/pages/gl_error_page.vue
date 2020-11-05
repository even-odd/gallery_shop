<template>
  <div class="error_page">{{ error }}</div>
</template>

<script>
export default {
  name: 'gl_error_page',
  props: {
    error: String,
  },
}
</script>
