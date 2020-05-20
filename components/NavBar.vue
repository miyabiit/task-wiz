<template>
  <nav class="navbar has-background-light">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma" width="112" height="28">
      </nuxt-link>
      <div class="navbar-burger burger" data-target="nabvarMenu" @click="showNav = !showNav" :class="{'is-active': showNav}">
        <span></span>
        <span></span>
        <span></span>        
      </div>
    </div>
    <div id="navBarTransparentExample" class="navbar-menu" :class="{'is-active': showNav}">
      <div class="nav-end">
        <nuxt-link class="navbar-item" to="/">
          HOME
        </nuxt-link>
        <div class="nabar-item has-dropdown is-hoverable">
          <div class="navbar-dropdown is-boxed">
            <nuxt-link v-for="item in items" :key="item.title" :to="item.url" class="navbar-item">
              {{item.title}}
            </nuxt-link>
          </div>
        </div> 
        <div class="navbar-item">
          <p class="control">
            <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.0/bulma-0.7.0.zip">
              <span class="icon">
                <i class="fa fa-download"></i>
              </span>
              <span>Download</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import feature from "~/pages/feature.vue"
  import contact from "~/pages/contact.vue"
  
  export default {
    components: {
      feature,
      contact
    },
    data: () => ({
      showNav: false,
      items: [
        {title: 'Home', icon: 'home', url: '/' },
        {title: 'Feature', icon: 'code', url: '/feature'},
        {title: 'Contact', icon: 'question_answer', url: '/contact'}
      ]
    })
  }
</script>

<style>
  .navbar {
    margin-bottom: 20px;
  }
</style>
