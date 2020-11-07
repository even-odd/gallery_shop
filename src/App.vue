<template>
  <div id="app" class="app">
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

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

body {
  padding: 0;
  margin: 0;
}
h1 {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  padding: 0;
}
h2 {
  font-size: 18px;
  margin: 0;
  padding: 0;
}
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Merriweather', serif;

  & div {
    box-sizing: border-box;
  }
}
#app .locked {
  display: none;
  opacity: 0;
  pointer-events: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: #382e2b;
  cursor: pointer;
  user-select: none;
  transition: all 0.1s;

  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.3;
  }
}
.page_box {
  flex: 1 1 auto;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  padding: 45px 0 0 0;
}
</style>
