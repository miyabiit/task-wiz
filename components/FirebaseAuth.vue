<template>
  <div id="firebaseui-auth-container"></div>
</template>

<script>
  import { auth, authProviders } from '~/plugins/firebase'
  //import firebaseui from 'firebaseui'
  
  export default {
    name: "firebaseAuth",
    mounted() {
      auth.onAuthStateChanged(user => {
        if (!user) {
          const firebaseui = require('firebaseui')
          const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth)
          
          const config = {
            signInOptions: [
              authProviders.Email,
              authProviders.Google,
              //authProviders.Facebook,
              //authProviders.Github
            ],
            callbacks: {
              // for cores error in dev server 
              signInSuccessWithAuthResult: (authResult) => {
                //window.location.href = "/"
                //return false
                return true
              }
            },
            signInSuccessUrl: '/',
            signInFlow: 'redirect'
          }
          
          ui.start('#firebaseui-auth-container', config)
        }
      })
    }
  }
</script>
