<template>
  #firebaseui-auth-container
</template>

<script>
  import { auth, authProvider} from '~/plugins/firebase'
  import firebaseui from 'firebaseui'
  
  export default {
    name: "firebaseAuth",
    mounted(): {
      auth.onAuthStateChanged(user => {
        if (!user) {
          const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth)
          
          const config = {
            signInOptions: [
              authProviders.Email,
              authProviders.Google,
              authProviders.Facebook,
              authProviders.Gethub
            ],
            callbacks: {
              // for cores error in dev server 
              signInSuccessWithAuthResult: (authResult) => {
                window.location.href = "/"
                return false
              }
            },
            signInSuccessUrl: '/',
            signInFlow: 'popup'
          }
          
          ui.start('#firebaseui-auth-container', config)
        }
      })
    }
  }
</script>