<template>
  <div class="wrapper">
     <!-- header -->
     <header class="header">
       <!-- Loading -->
       <div v-if="isWaiting" class="log_wait">
         <p>読み込み中</p>
       </div>
       <!-- !login -->
       <div class="isLogin_wrap" v-else>
         <div v-if="!isLogin" class="btn_login">
           <button class="button" outlined @click="googleLogin">Googleでログイン</button>
         </div>
         <!-- login -->
         <div v-else class="log_wrap">
           <button class="button" outlined @click="logOut">ログアウト</button>
         </div>
       </div>
     </header>
     <!-- body -->
     <section class="container">
       <div>
         <logo/>
         <h1 class="title">Nuxtapp</h1>
         <div class="links">
           <nuxt-link to="/testbulma" class="btn">bulmaテストページへ</nuxt-link>
         </div>
       </div>
     </section>
   </div>
</template>

<script>
  import firebase from "@/plugins/firebase"
  import Logo from '~/components/Logo.vue'
  
  export default {
    components: {
      Logo
    },
    asyncData() {
      return {
        isWaiting: true,
        isLogin: false,
        user: []
      };
   },
   mounted: function() {
     firebase.auth().onAuthStateChanged(user => {
       this.isWaiting = false;
       if (user) {
         this.isLogin = true;
         this.user = user;
       } else {
         this.isLogin = false;
         this.user = [];
       }
     });
   },
   methods: {
     googleLogin() {
       const provider = new firebase.auth.GoogleAuthProvider();
       firebase.auth().signInWithRedirect(provider);
     },
     logOut() {
       firebase.auth().signOut();
     }
   }
  };
</script>
