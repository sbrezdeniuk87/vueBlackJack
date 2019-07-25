import store from '../store'

export default (to, from, next)=>{
  if(store.getters.getUser.id !== null){
    next()
  }else{
    next('/login')
  }
}