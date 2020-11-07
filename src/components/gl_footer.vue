<template>
  <div class="footer main_footer">
    <NavRouter />
    <div class="footer--info">
      <a class="footer--item footer--item-phone" href="tel:+74955555555">
        +7(495) 555-55-55
      </a>
      <div class="footer--item footer--item-address">
        г. Москва, ул. Расплетина, 24
      </div>
    </div>
  </div>
</template>

<script>
import NavRouter from './gl_nav_router'

export default {
  name: 'gl_footer',
  components: {
    NavRouter,
  },
}
</script>

<style lang="scss">
.main_footer {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  height: 88px;
  margin: 0 auto;
  padding: 20px 0;
}
.footer--info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
.footer--item {
  position: relative;
  margin-left: 65px;
  font-size: 14px;
  line-height: 150px;
  color: #555555;
}
.footer--item-phone {
  text-decoration: none;

  &::before {
    content: url(../assets/phone_icon.svg);
    position: absolute;
    top: 3px;
    left: -15px;
  }
}
.footer--item-address::before {
  content: url(../assets/map_icon.svg);
  position: absolute;
  top: 3px;
  left: -15px;
}
</style>
