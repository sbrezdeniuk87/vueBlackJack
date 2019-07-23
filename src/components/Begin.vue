<template >
  <div class="container-fluid background text-center" >
      <div class="row text-center  ">
        <router-link class="btn btn-success text-uppercase col-md-6 btn-lg" :to="'/registration'"><font-awesome-icon  :icon="['fas', 'clipboard']"/> Registration</router-link>
        <router-link class="btn btn-success text-uppercase col-md-6 btn-lg" :to="'/login'"><font-awesome-icon  :icon="['fas', 'sign-in-alt']"/> Sing in</router-link>
      </div>      
    </div>    
</template>

<script>
export default {
 
}
</script>


<style scoped src="@/assets/css/begin.css">

</style>