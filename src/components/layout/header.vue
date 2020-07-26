<template>
  <header class="d-sm-block d-none">
    <div class="top-bar pt-0 pb-0">
      <div class="container text-left" style="padding-top: 5px; height: 30px;">
        <a href="#" class="mr-4">Test</a>
        <a href="#" class="mr-4">Test</a>
        <a href="#" class="float-right">Test</a>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "header",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-bar {
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: #e13475;
  padding: 8px 0;
  font-size: 15px;
  color: #fff;
  line-height: 1.25;
}

.top-bar a {
  color: inherit;
}
</style>
