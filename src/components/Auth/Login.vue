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
            <input v-model="email" v-validate="'required|email'" type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <span class="alert-danger" >{{ errors.first('email') }}</span>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1" class="control-label">Password</label>
            <input v-model="password" v-validate="'required|min:6'" name='password' type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            <span class="alert-danger" >{{ errors.first('password') }}</span>
          </div>
          <button type="submit" class="btn btn-primary"><font-awesome-icon  :icon="['fas', 'sign-in-alt']"/> Sing In</button>
          <router-link :to="'/'"><button type="submit" class="btn btn-primary"><font-awesome-icon  :icon="['fas', 'arrow-circle-left']"/> Back</button></router-link>
        </form>        
      </div>  
    </div>   
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      valid: false
    }
  },
  methods:{
    checkLogin(e){
      this.$validator.validateAll().then((result) => {
        if (result) {
          const user = {
              email: this.email,
              password: this.password
            }
            this.$store.dispatch('loginUser', user)
            .then(() => {
              this.$router.push('/play')
            })
            .catch((err) => {console.log(err)})
          return
        }
        alert('Correct them errors!');
      })      
    }
  }
}
</script>


<style scoped src="@/assets/css/login.css">

</style>