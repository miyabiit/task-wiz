<template>
  <div class="site">
    <nav-bar/>
    <nuxt/>
    <footer-bar/>
  </div>
</template>

<script>
  import FooterBar from '~/components/FooterBar.vue'
  import NavBar from '~/components/NavBar.vue'
  
  export default {
    components: {
      NavBar,
      FooterBar
    }
  }
</script>
