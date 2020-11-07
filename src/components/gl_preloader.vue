<template>
  <div class="preloader">
    <div class="preloader--item"></div>
  </div>
</template>

<script>
export default {
  name: 'preloader',
}
</script>

<style lang="scss">
.preloader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: rgb(211, 210, 210);
}
.preloader--item {
  width: 25px;
  height: 25px;
  border: 3px dashed #5b3a32;
  animation: preloader-bounce 2s infinite ease-in-out;
}
@keyframes preloader-bounce {
  100% {
    transform: rotate(360deg);
  }
}
</style>
