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
    bottomNav: bottomNav
  },
};
</script>

<style scoped>
.main-content {
  min-height: 800px;
}
</style>
