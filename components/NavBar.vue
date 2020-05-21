<template>
  <nav class="navbar is-white" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <strong>TASK-WIZ</strong>
      </nuxt-link>
      <div class="navbar-burger burger" data-target="nabvarMenu" @click="$store.commit('toggleMenu')" :class="{'is-active': $store.state.isMenuActive}">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="navMenu" class="navbar-menu" :class="{'is-active': $store.state.isMenuActive}">
      <div class="navbar-start">
        <nuxt-link v-for="item in items" :key="item.title" :to="item.url" class="navbar-item">
          {{item.title}}
        </nuxt-link>
      </div>
      <div class="nav-end">
        <div class="nabar-item">
          <a class="button is-light" v-if="isLoggedIn">{{username}}</a>
          <a class="button is-primary" v-if="isLoggedIn" @click="logout">Logout</a>
        </div> 
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapState, mapGetters, mapActions } from "vuex"

  export default {
    data: () => ({
      items: [
        {title: 'Home', icon: 'home', url: '/' },
        {title: 'About', icon: 'code', url: '/about'},
        {title: 'Task Template', icon: 'question_answer', url: '/templatePage'}
      ]
    }),
    computed: {
      ...mapState("auth", [
        "username"
      ]),
      ...mapGetters("auth", [
        "isLoggedIn"
      ])
    },
    methods: {
      ...mapActions("auth", ["logout"])
    }
  }
</script>

<style>
</style>
