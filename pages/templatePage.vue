<template>
  <section class="hero is-primary is-bold">
    <div class="hero-body">
      <h1 class="title is-size-2">
       TEMPLATE TASK
      </h1>
      <h2 class="subtitle is-size-4">
        TEMPLATE TASK とは？
      </h2>
    </div>
  </section>
</template>

<script>
  export default {
    fetch ({store}){
      store.commit('resetMenu')
    }
  }
</script>
