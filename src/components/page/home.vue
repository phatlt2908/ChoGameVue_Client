<template>
  <div>
    <div id="xsCarousel" class="carousel slide d-block d-sm-none" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#xsCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#xsCarousel" data-slide-to="1"></li>
        <li data-target="#xsCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="first-slide"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt="First slide"
          />
          <div class="container">
            <div class="carousel-caption text-left">
              <h1>Example headline.</h1>
              <p>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Donec id elit non mi porta gravida at eget metus. Nullam id
                dolor id nibh ultricies vehicula ut id elit.
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="#" role="button"
                  >Sign up today</a
                >
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="second-slide"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt="Second slide"
          />
          <div class="container">
            <div class="carousel-caption">
              <h1>Another example headline.</h1>
              <p>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Donec id elit non mi porta gravida at eget metus. Nullam id
                dolor id nibh ultricies vehicula ut id elit.
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="#" role="button"
                  >Learn more</a
                >
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="third-slide"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt="Third slide"
          />
          <div class="container">
            <div class="carousel-caption text-right">
              <h1>One more for good measure.</h1>
              <p>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Donec id elit non mi porta gravida at eget metus. Nullam id
                dolor id nibh ultricies vehicula ut id elit.
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="#" role="button"
                  >Browse gallery</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#xsCarousel"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#xsCarousel"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div class="container">
      <div id="lgCarousel" class="carousel slide d-sm-block d-none" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#lgCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#lgCarousel" data-slide-to="1"></li>
          <li data-target="#lgCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="first-slide"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="First slide"
            />
            <div class="container">
              <div class="carousel-caption text-left">
                <h1>Example headline.</h1>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Donec id elit non mi porta gravida at eget metus. Nullam id
                  dolor id nibh ultricies vehicula ut id elit.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#" role="button"
                    >Sign up today</a
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="second-slide"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="Second slide"
            />
            <div class="container">
              <div class="carousel-caption">
                <h1>Another example headline.</h1>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Donec id elit non mi porta gravida at eget metus. Nullam id
                  dolor id nibh ultricies vehicula ut id elit.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#" role="button"
                    >Learn more</a
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="third-slide"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="Third slide"
            />
            <div class="container">
              <div class="carousel-caption text-right">
                <h1>One more for good measure.</h1>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Donec id elit non mi porta gravida at eget metus. Nullam id
                  dolor id nibh ultricies vehicula ut id elit.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#" role="button"
                    >Browse gallery</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#lgCarousel"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#lgCarousel"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <h1>Chợ game</h1>
      <div class="row">
        <div
          class="col-md-4"
          v-for="item in this.categoryList"
          :key="item.code"
        >
          <router-link :to="{ name: 'home' }">
            <div class="card mb-4">
              <div
                class="card-bg"
                :style="{ 'background-image': 'url(' + item.urlBanner + ')' }"
              >
                <!-- <div class="card-bg" :style="{'background-image': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + item.urlBanner + ')'}"> -->
                <div class="card-bg-text">
                  <h2>{{ item.name }}</h2>
                </div>
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="card-text">{{ item.name }}</div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <h1>Gamatra mall</h1>
      <div class="row">
        <div
          class="col-md-4"
          v-for="item in this.categoryList"
          :key="item.code"
        >
          <router-link :to="{ name: 'home' }">
            <div class="card mb-4">
              <div
                class="card-bg"
                :style="{ 'background-image': 'url(' + item.urlBanner + ')' }"
              >
                <!-- <div class="card-bg" :style="{'background-image': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + item.urlBanner + ')'}"> -->
                <div class="card-bg-text">
                  <h2>{{ item.name }}</h2>
                </div>
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="card-text">{{ item.name }}</div>
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
  </div>
</template>

<script>
import dotLoading from "@/components/block/dotLoading";

export default {
  name: "HomePage",
  components: {
    dotLoading: dotLoading,
  },

  data() {
    return {
      isLoading: false,
      categoryList: [],

      pagination: {
        currentPage: 0,
        itemsPerPage: 0,
        sort: null,
        sortOrder: true,
      },
      queries: {
        keywords: "",
      },
    };
  },

  created() {
    this.getList();
  },

  methods: {
    getList() {
      this.isLoading = true;
      this.$swal.toast("Tải danh sách game");
      this.$api
        .getAllCategory({ queries: this.queries, pagination: this.pagination })
        .then((res) => {
          if (res.data) {
            this.categoryList = res.data.items;
            this.isLoading = false;
          }
        })
        .catch((error) => {
          console.log(error);
          this.$swal.error(undefined, "Không thể tải danh sách game");
          this.loading = false;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
</style>
