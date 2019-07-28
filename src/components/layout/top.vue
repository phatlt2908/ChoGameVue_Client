<template>
  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">
        <router-link to="/home" class="navbar-brand d-flex align-items-center"><strong>Chợ Game</strong></router-link>
      </h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <router-link to="/products" class="p-2 text-dark">Tất cả</router-link>
        <router-link to="/abc" class="p-2 text-dark">Enterprise</router-link>
        <router-link to="/home" class="p-2 text-dark">Support</router-link>
        <router-link to="/home" class="p-2 text-dark">Pricing</router-link>
      </nav>
      <a class="btn btn-outline-primary" href="#">Rao bán acc</a>
    </div>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }
</style>
