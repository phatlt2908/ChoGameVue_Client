<template>
  <body>
    <headerNav></headerNav>
    <topNav class="sticky-top"></topNav>
    <main class="main-content">
      <router-view></router-view>
    </main>
    <bottom class="d-sm-block d-none"></bottom>
    <bottomNav></bottomNav>
  </body>
</template>

<script>
import topNav from "@/components/layout/topNav";
import headerNav from "@/components/layout/header";
import bottomNav from "@/components/layout/bottomNav";
import bottom from "@/components/layout/bottom";

export default {
  name: "layout-full",
  components: {
    topNav: topNav,
    headerNav: headerNav,
    bottom: bottom,
    bottomNav: bottomNav,
  },
  mounted() {
    if (typeof FB === "undefined") {
      this.fbInit();
    } else {
      window.FB.XFBML.parse();
    }
  },
  methods: {
    fbInit() {
      window.fbAsyncInit = function () {
        FB.init({
          appId: "190324515024845",
          autoLogAppEvents: true,
          xfbml: true,
          version: "v7.0",
        });
        FB.AppEvents.logPageView();
      };
      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/vi_VN/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    },
  },
};
</script>

<style scoped>
.main-content {
  min-height: 800px;
  margin-bottom: 50px;
}
</style>
