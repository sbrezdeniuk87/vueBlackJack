<template>
  <div class="container-fluid background">
      <div class="row money">
        <p class="text-center">Please bet <br><strong id="user">Sasha</strong></p>
        <div class="bet">
          <label class="text-uppercase">Bet :</label>
          <p class="text-center" id="bet">100</p>
        </div>
        <div class="cash">
          <label class="text-uppercase">Cash :</label>
          <p class="text-center" id="cash">0</p>
        </div>        
      </div>
      <div class="row col-md-8 col-md-offset-4 handD" id="dealHand">
        <!-- <p id="countD" class="text-center"></p> -->
      </div>
      <div class="row col-md-8 col-md-offset-4 handP" id="playHand">
        <!-- <p id="countP" class="text-center"></p> -->
      </div>      
      <div class="row fishka">
         <ul class="text-center col-md-12">
          <li class="blue" onclick="createFishka1()">1</li>
          <li class="blue" onclick="createFishka5()">5</li>
          <li class="yellow" onclick="createFishka25()">25</li>
          <li class="yellow" onclick="createFishka50()">50</li>
          <li class="red" onclick="createFishka100()">100</li>
          <li class="red" onclick="createFishka200()">200</li>
        </ul>
      </div>
      <div class="row play col-md-12 text-center"> 
          <button type="button" class="btn btn-success" id="game" onclick="play();">Play</button>
          <button type="button" class="btn btn-success" onclick="enough()">Enough</button>
          <button type="button" class="btn btn-success" onclick="more()">More</button>
      </div>       
    </div>  
</template>

<script>
export default {
  beforeCreate() {
    console.log(this.$store.getters.getUser);
		return;
	},
}
</script>


<style scoped src="@/assets/css/play.css">

</style>