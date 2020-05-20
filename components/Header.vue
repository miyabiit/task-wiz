<template lang="pug">
  <nav class="navbar">
    <div class="navbar-end">
      <div class="navbar-items">
        <div class="buttons">
          <a class="button is-light"><strong> {{username}}</strong></a>
          <a class="button is-primary" v-if="isLoggedIn" @click="logout">Logout</a>
          <!-- v-btn(flat='' v-if="isLoggedIn" @click="logout") Logout -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapState, mapGetters, mapActions } from "vuex"

  export default {
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
