<template>
  <div id="app">
    <Header />
    <PageController />
    <Footer />
  </div>
</template>

<script>
import Header from './components/gl_header'
import Footer from './components/gl_footer'
import PageController from './pages/gl_page_controller'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    PageController,
  },
}
</script>
