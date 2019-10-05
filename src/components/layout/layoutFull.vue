<template>
  <body>
    <top></top>
    <main class="main">
      <router-view></router-view>
    </main>
    <bottom></bottom>
  </body>
</template>

<script>
  import top from '@/components/layout/top'
  import bottom from '@/components/layout/bottom'

  export default {
    name: 'layout-full',
    components: {
      'top': top,
      'bottom': bottom
    }
  }
</script>