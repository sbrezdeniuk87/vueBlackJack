<template>
  <div class="container-fluid background">
      <div class="row text-center logo">
        <img src="../../assets/images/logo.jpg" alt="logo" class="img-rounded">
        <h1 class="text-center text-uppercase"><strong>Sing in</strong></h1>
      </div>
      <div class="row">
        <form class="offset-md-4 col-md-4"> 
          <div class="form-group">
            <label for="exampleInputEmail1" class="control-label">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1" class="control-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword2" class="control-label">Password again</label>
            <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password again">
          </div>
          <button type="submit" class="btn btn-primary">Back</button>          
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <!-- <form class="row offset-md-4">
          <div class="form-group">
            <label for="inputNamel3" class="col-sm-4 control-label">Name:</label>
            <div class="col-sm-4">
              <input type="text" class="form-control" id="inputName3" placeholder="Name" name="name">
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword3" class="col-sm-4 control-label">Password:</label>
            <div class="col-sm-4">
              <input type="password" class="form-control" id="inputPassword3" placeholder="Password" name="pass">
            </div>
          </div>
          <div class="form-group ">
            <div class="col-sm-offset-4 col-sm-4 text-center">
              <a class="btn btn-success text-uppercase" href="/">Back</a>
              <a class="btn btn-success text-uppercase">Sign in</a> -->
              <!--<button type="submit" class="btn btn-success text-uppercase">Sign in</button>
            </div>
          </div>
        </form>  -->
      </div>  
    </div>   
</template>

<script>
export default {
  
}
</script>


<style scoped src="@/assets/css/login.css">

</style>