<template>
  <div>
    <div
      id="xsCarousel"
      class="carousel slide d-block d-sm-none"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li data-target="#xsCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#xsCarousel" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="first-slide"
            src="https://cdn.concung.com/17011-24117-large_mobile/nhiet-ke-hong-ngoai-do-tran-microlife-fr1mf.jpg"
            alt="First slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="second-slide"
            src="https://cdn.concung.com/17011-24116-large_mobile/nhiet-ke-hong-ngoai-do-tran-microlife-fr1mf.jpg"
            alt="Second slide"
          />
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
      <div
        id="lgCarousel"
        class="carousel slide d-sm-block d-none"
        data-ride="carousel"
      >
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

      <!-- <div class="row">
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
              > -->
      <!-- <div class="card-bg" :style="{'background-image': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + item.urlBanner + ')'}"> -->
      <!-- <div class="card-bg-text">
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
      </div> -->

      <!-- <h1>Gamatra mall</h1>
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
              > -->
      <!-- <div class="card-bg" :style="{'background-image': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + item.urlBanner + ')'}"> -->
      <!-- <div class="card-bg-text">
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
      </div> -->

      <div v-show="isLoading">
        <dotLoading></dotLoading>
      </div>
    </div>

    <!-- contain -->

    <div class="container">
      <label class="text-label bg-blue mr-1">FREESHIP</label>
      <h4 class="font-18 font-weight-normal mb-0">
        Nhiệt kế hồng ngoại đo trán Microlife FR1MF1
      </h4>
      <span class="font-weight-bold product-price font-26 mb-2">
        1.000.000₫
      </span>
    </div>

    <div class="container">
      <div class="border-block box-shadow-none">
        <ul class="checked-list mr-2 mb-0">
          <li>Xuất xứ: Trung Quốc</li>
          <li>Xuất xứ: Trung Quốc</li>
        </ul>
      </div>
    </div>

    <!-- Facebook component -->
    <div class="mb-2 hr-8 fb-block">
      <div
        class="fb-page"
        data-href="https://www.facebook.com/betoshopembe/"
        data-tabs="timeline"
        data-width="500"
        data-height="300"
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
        data-lazy="true"
      >
        <blockquote
          cite="https://www.facebook.com/betoshopembe/"
          class="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/betoshopembe/"
            >BeTo Shop - Quần áo em bé</a
          >
        </blockquote>
      </div>
    </div>
    <!-- End Facebook component -->

    <div class="container hr-8">
      <h3 class="the-title section-title mb-2">Sản phẩm liên quan</h3>
      <div class="product-list row">
        <div class="col-6 col-sm-4 col-lg-5ths col-md-5ths">
          <div class="product-item">
            <div class="product-img">
              <a href="" class="thumb-img">
                <img
                  src="https://cdn.concung.com/17011-24117-cat/nhiet-ke-hong-ngoai-do-tran-microlife-fr1mf.jpg"
                  alt=""
                />
              </a>
            </div>
            <h4 class="item-title font-weight-normal">
              <a href="">Nhiệt kế hồng ngoại đo trán Microlife FR1MF1</a>
            </h4>
            <span class="font-weight-bold product-price">
              1.000.000₫
            </span>
          </div>
        </div>
        <div class="col-6 col-sm-4 col-lg-5ths col-md-5ths">
          <div class="product-item">
            <div class="product-img">
              <a href="" class="thumb-img">
                <img
                  src="https://cdn.concung.com/17011-24117-cat/nhiet-ke-hong-ngoai-do-tran-microlife-fr1mf.jpg"
                  alt=""
                />
              </a>
            </div>
            <h4 class="item-title font-weight-normal">
              <a href="">Nhiệt kế hồng ngoại đo trán Microlife FR1MF1</a>
            </h4>
            <span class="font-weight-bold product-price">
              1.000.000₫
            </span>
          </div>
        </div>
        <div class="col-6 col-sm-4 col-lg-5ths col-md-5ths">
          <div class="product-item">
            <div class="product-img">
              <a href="" class="thumb-img">
                <img
                  src="https://cdn.concung.com/17011-24117-cat/nhiet-ke-hong-ngoai-do-tran-microlife-fr1mf.jpg"
                  alt=""
                />
              </a>
            </div>
            <h4 class="item-title font-weight-normal">
              <a href="">Nhiệt kế hồng ngoại đo trán Microlife FR1MF1</a>
            </h4>
            <span class="font-weight-bold product-price">
              1.000.000₫
            </span>
          </div>
        </div>
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
    // this.getList();
  },

  mounted() {
    if (typeof FB === "undefined") {
      this.fbInit();
    } else {
      window.FB.XFBML.parse();
    }
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
</style>
