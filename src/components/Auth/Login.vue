<template>
  <div class="container-fluid background">
      <div class="row text-center logo">
        <img src="../../assets/images/logo.jpg" alt="logo" class="img-rounded">
        <h1 class="text-center text-uppercase"><strong>Sing in</strong></h1>
      </div>
      <div class="row">
        <form class="offset-md-4 col-md-4" @submit.prevent="checkLogin"> 
          <div class="form-group">
            <label for="exampleInputEmail1" class="control-label">Email</label>
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1" class="control-label">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <router-link :to="'/'"><button type="submit" class="btn btn-primary">Back</button></router-link>
          <button type="submit" class="btn btn-primary">Sing In</button>
        </form>        
      </div>  
    </div>   
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods:{
    checkLogin(){
      const user = {
        email: this.email,
        password: this.password
      }
      console.log(user)
    }
  }
}
</script>


<style scoped src="@/assets/css/login.css">

</style>