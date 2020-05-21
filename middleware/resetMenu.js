export default function ({ route, store, redirect }) {
  fetch ({store}){
    store.commit('resetMenu')
  }
}