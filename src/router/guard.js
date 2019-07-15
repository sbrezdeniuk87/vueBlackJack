import store from '../store'

export default function (to, from, next){
  if(store.getters.getUser.id !== null){
    next()
  }else{
    next('/login')
  }
}