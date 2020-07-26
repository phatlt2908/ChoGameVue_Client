<template>
  <div>
    <div class="my-header py-2">
      <div class="container">
        <div class="row no-gutters justify-content-between align-items-center">
          <div class="col-3 d-sm-block d-none pt-1">
            <a href="#" title="betoshop.vn">
              <img
                src="../../assets/image/beto-logo-no-bg.png"
                alt="Quần áo em bé"
                width="70%"
              />
            </a>
          </div>
          <div class="d-block d-sm-none">
            <button
              class="navbar-toggler navbar-dark"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="col-10 col-sm-6 text-center">
            <div class="input-group">
              <input
                type="text"
                class="form-control bg-transparent text-white border-white"
                placeholder="Mẹ đang muốn tìm gì cho bé?"
                aria-label="Mẹ đang muốn tìm gì cho bé?"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-outline-white" type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="10.5" cy="10.5" r="7.5"></circle>
                    <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="col-3 d-sm-block d-none">
            <a class="text-muted mx-2" href="#">
              <font-awesome-icon icon="bell" />
            </a>
            <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
          </div>
        </div>
      </div>
    </div>
    <div class="d-block d-sm-none">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#"
                >Home <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "topNav",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-toggler {
  padding: 1px 6px;
}
.navbar {
  padding: 0 1rem;
}
.form-control::-webkit-input-placeholder {
  color: #faaebd;
}
</style>
