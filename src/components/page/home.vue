<template>
  <div>
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="first-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="First slide">
          <div class="container">
            <div class="carousel-caption text-left">
              <h1>Example headline.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a class="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img class="second-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Second slide">
          <div class="container">
            <div class="carousel-caption">
              <h1>Another example headline.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img class="third-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Third slide">
          <div class="container">
            <div class="carousel-caption text-right">
              <h1>One more for good measure.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a class="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="row">
      <div class="col-md-4" v-for="(item, key) in this.categoryList" :key="item.code">
        <router-link :to="{name: 'home'}">
          <div class="card mb-4 box-shadow">
            <div class="card-bg" :style="{'background-image': 'url(' + item.urlBanner + ')'}">
            <!-- <div class="card-bg" :style="{'background-image': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + item.urlBanner + ')'}"> -->
              <div class="card-bg-text">
                <h2>{{item.name}}</h2>
              </div>
            </div>
            <div class="card-body box-shadow">
              <div class="d-flex justify-content-between align-items-center">
                <div class="card-text">{{item.name}}</div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <div v-show="isLoading">
      <dotLoading></dotLoading>
    </div>
    
  </div>
</template>

<script>

import dotLoading from '@/components/block/dotLoading'

export default {
  name: 'HomePage',
  components: {
    'dotLoading': dotLoading
  },

  data () {
    return {
      isLoading: false,
      categoryList: []
    }
  },

  created() {
    this.getList()
  },

  methods: {
    getList() {
      this.isLoading = true
      this.$api.getAllCategory('abc')
        .then((res) => {
          if (res.data) {
            this.categoryList = res.data
            this.isLoading = false
          }
        })
        .catch((error) => {
          console.log(">> AVC: " + error)
          this.loading = false
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.card-bg {
  height: 200px;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.card-bg-text {
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
}

.card-text {
  color: black;
}

.card-body {
  position: absolute;
  display: none;
  top: 100%;
  width: 100%;
  background-color: white;
  border-left: #42b983 1px solid;
  border-right: #42b983 1px solid;
  border-bottom: #42b983 1px solid;
  z-index: 9;
}

.card:hover .card-body {
  display: block;
}
</style>
