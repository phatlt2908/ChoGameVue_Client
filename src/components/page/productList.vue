<template>
  <div class="py-5 bg-light">
    <div class="row">
      <div class="col-md-4" v-for="(item, key) in this.productsList" :key="item.prodId">
        <div class="card mb-4 box-shadow">
          <img
            class="card-img-top img-fluid mycss-img-block"
            src="{item.logoUrl}"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  data() {
    return {
      productsList: []
    }
  },

  created() {
    this.getList()
  },

  methods: {
    getList() {
      this.$api.getAllProducts()
        .then((res) => {
          if (res.data) {
            this.productsList = res.data.items
          }
        })
        .catch((error) => {
          console.log(">> AVC")
          this.loading = false
        })
    }
  }
}
</script>

<style scoped>
  .mycss-img-block {
    height: auto;
    overflow: hidden;
  }
</style>
