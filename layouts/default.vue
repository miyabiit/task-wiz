<template>
  <div class="site">
    <Header/>
    <nav-bar/>
    <div class="siteContent">
      <nuxt class="has-text-centered"/>
    </div>
    <footer-bar/>
  </div>
</template>

<script>
  import Header from '~/components/Header.vue'
  import FooterBar from '~/components/FooterBar.vue'
  import NavBar from '~/components/NavBar.vue'
  
  export default {
    components: {
      Header,
      NavBar,
      FooterBar
    }
  }
</script>
