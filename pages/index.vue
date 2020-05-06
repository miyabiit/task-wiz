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
   </div>
</template>

<script>
  import firebase from "@/plugins/firebase";
  export default {
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
