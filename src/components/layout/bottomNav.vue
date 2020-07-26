<template>
  <div class="d-block d-sm-none">
    <div class="fixed-bottom row no-gutters text-center shadow-lg bg-white py-1">
      <a href="" class="col-3 active">
        <font-awesome-icon class="bottom-icon" icon="bell" />
        <div class="bottom-text">Trang chủ</div>
      </a>
      <a href="" class="col-3">
        <font-awesome-icon class="bottom-icon" icon="bell" />
        <div class="bottom-text">Trang chủ</div>
      </a>
      <a href="" class="col-3">
        <font-awesome-icon class="bottom-icon" icon="bell" />
        <div class="bottom-text">Trang chủ</div>
      </a>
      <a href="" class="col-3">
        <font-awesome-icon class="bottom-icon" icon="bell" />
        <div class="bottom-text">Trang chủ</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "bottomNav",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bottom-icon {
  color: #f05f95;
  font-size: 20px;
}
a .bottom-text {
  font-size: 10px;
  font-weight: 100;
  line-height: 1.5;
  color: #000;
}
</style>
