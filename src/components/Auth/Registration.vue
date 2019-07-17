<template>
  <div class="container-fluid background">
      <div class="row text-center logo">
        <img src="../../assets/images/logo.jpg" alt="logo" class="img-rounded">
        <h1 class="text-center text-uppercase"><strong>Sing in</strong></h1>
      </div>
      <div class="row">
        <form class="offset-md-4 col-md-4" @submit.prevent="createUser"> 
          <div class="form-group">
            <label for="exampleInputName" class="control-label">Name</label>
            <input v-validate="'required|alpha'" name="name" type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter name" v-model="name">
            <span class="alert-danger" >{{ errors.first('name') }}</span>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1" class="control-label">Email</label>
            <input v-validate="'required|email'" type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
            <span class="alert-danger" >{{ errors.first('email') }}</span>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1" class="control-label">Password</label>
            <input v-validate="'required|min:6'" name='password' type="password" ref="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
            <span class="alert-danger" >{{ errors.first('password') }}</span>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword2" class="control-label">Password again</label>
            <input v-validate="'required|confirmed:password'" name="passwordAgain" type="password" data-vv-as="password"  class="form-control" id="exampleInputPassword2" placeholder="Password again">
            <span class="alert-danger" >{{ errors.first('passwordAgain') }}</span>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary"><font-awesome-icon  :icon="['fas', 'clipboard']"/>  Record</button>
            <router-link :to="'/'"><button type="submit" class="btn btn-primary"><font-awesome-icon  :icon="['fas', 'arrow-circle-left']"/> Back</button></router-link>           
          </div>
        </form>        
      </div>  
    </div>   
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods:{
    createUser () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          const user = {
            name: this.name,
            email: this.email,
            password: this.password
          }
          
          this.$store.dispatch('createUser', user)
            .then((doc) => {
              if(doc != false){
                this.$router.push('/login')
              }else{
                alert('User already created')
              }
              
            })
            .catch(() => {alert('User already created')})
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