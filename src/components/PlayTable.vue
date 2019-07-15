<template>
  <div class="container-fluid background">
      <div class="row money">
        <p class="text-center">Please bet, <br><strong >{{name}}</strong></p>
        <div class="cash">
          <label class="text-uppercase">Cash :</label>
          <p class="text-center">{{cash}}</p>
        </div>
        <div class="bet">
          <label class="text-uppercase">Bet :</label>
          <p class="text-center">{{bet}}</p>
        </div>        
      </div>
      <div class="row">
        <div class="col-md-8 offset-md-4 handD">
          <p v-show="isShow">{{card.dealerHandSum}}</p>          
          <div v-for="(card, index) in card.dealerHand" :key="index">
            <dealer-hand :dealerHand="card" ></dealer-hand>       
          </div>  
        </div>
      </div>
      <div v-for="(dib, index) in dibs" :key="index">
        <dibs-bet :addClass="dib.addClass" :number="dib.number"></dibs-bet>
      </div>
      <div class="row">        
        <div class="col-md-8 offset-md-4 handP">
          <p v-show="isShow">{{card.playerHandSum}}</p>          
          <div v-for="(card, index) in card.playerHand" :key="index">
            <player-hand :playerHand="card" ></player-hand>       
          </div>          
        </div>
      </div>      
      <div class="row fishka" >
         <ul class="text-center col-md-12">
          <li>
            <button type="button" class="blue"  :disabled="isDib" @click="onCreateDibHandler(1, 'blue1')">1</button>
          </li>
          <li>
            <button type="button" class="blue" :disabled="isDib" @click="onCreateDibHandler(5, 'blue5')">5</button>
          </li>
          <li>
            <button type="button" class="yellow" :disabled="isDib" @click="onCreateDibHandler(25, 'yellow25')">25</button>
          </li>
          <li>
            <button type="button" class="yellow" :disabled="isDib" @click="onCreateDibHandler(50, 'yellow50')">50</button>
          </li>
          <li class="red" :disabled="isDib" @click="onCreateDibHandler(100, 'red100')">
            <button type="button" class="red" :disabled="isDib" @click="onCreateDibHandler(100, 'red100')">100</button>
          </li>
          <li>
            <button type="button" class="red" :disabled="isDib" @click="onCreateDibHandler(200, 'red200')">200</button>
          </li>
        </ul>
      </div>
      <div class="row">
        <div class=" play offset-md-5 col-md-7"> 
          <button type="button" class="btn btn-success" id="game" :disabled="!isPlay" @click="play">Play</button>
          <button type="button" class="btn btn-success" :disabled="!isEnought" @click="enough">Enough</button>
          <button type="button" class="btn btn-success" :disabled="!isMore" @click="more">More</button>
        </div>
      </div>       
    </div>  
</template>

<script>
import Dib from './Dib'
import PlayerHand from './Hand/PlayerHad'
import DealerHand from './Hand/DealerHand'

export default {
  data () {
    return {
      name: '',
      id: null,
      bet: 0,
      cash: 0,      
      dibs: [],
      isShow: false,
      isPlay: false,
      isEnought: false,
      isMore: false,
      isDib: false
    }
  },
  components: {
    'dibs-bet': Dib,
    'player-hand': PlayerHand,
    'dealer-hand': DealerHand
  },
  methods:{
    onCreateDibHandler (number, addClass) {
        this.bet += number;
        this.cash -=number;
        const dib = {
          number,
          addClass
        };
        this.dibs.push(dib); 
        this.isPlay = true;         
    },
    async play () {
      this.isShow = true;
      this.isPlay = false;
      this.isEnought = true;
      this.isMore = true;
      this.isDib = true;
      await this.$store.dispatch('play');
      const card = this.$store.getters.card;

      if(card.playerHandSum === 21){ 
            setTimeout(async ()=>{
                this.cash += this.bet*3;
                this.$store.commit('clear');
                this.bet = 0;
                this.isShow = false;
                this.isEnought = false;
                this.isMore = false;
                this.isDib = false;
                this.dibs = [];   
                alert('У Вас BlackJack!!!!!!!!!!!!!'); 
                const payload = {
                  id: this.id,
                  cash: this.cash
                }
                await this.$store.dispatch('updatePlayer', payload); 
            }, 600);           
            
        }else if(card.playerHandSum > 21){
            setTimeout(async ()=>{
                this.$store.commit('clear');
                this.bet = 0;
                this.isShow = false;
                this.isEnought = false;
                this.isMore = false;
                this.isDib = false;
                this.dibs = [];
                alert('Вы проиграли!!!!!!!');
                const payload = {
                  id: this.id,
                  cash: this.cash
                }
                await this.$store.dispatch('updatePlayer', payload); 
            }, 600);     
        }
    },
    async more () {
      await this.$store.dispatch('more');
      const card = this.$store.getters.card;
      if(card.playerHandSum === 21){ 
            setTimeout(async ()=>{
                this.cash += this.bet*3; 
                this.$store.commit('clear');
                this.bet = 0;
                this.isShow = false;
                this.isEnought = false;
                this.isMore = false;
                this.isDib = false;
                this.dibs = [];        
                alert('У Вас BlackJack!!!!!!!!!!!!!');
                const payload = {
                  id: this.id,
                  cash: this.cash
                }
                await this.$store.dispatch('updatePlayer', payload);
            }, 600);           
            
        }else if(card.playerHandSum > 21){
            setTimeout(async ()=>{
                this.$store.commit('clear');
                this.bet = 0;
                this.isShow = false;
                this.isEnought = false;
                this.isMore = false;
                this.isDib = false;
                this.dibs = [];        
                alert('Вы проиграли!!!!!!!');
                const payload = {
                  id: this.id,
                  cash: this.cash
                }
                await this.$store.dispatch('updatePlayer', payload); 
            }, 600);
        }
    },
    async enough () {
      await this.$store.dispatch('enough');
      const card = this.$store.getters.card;

      if(card.dealerHandSum === 21){
            setTimeout(async ()=>{         
                this.$store.commit('clear');
                this.bet = 0;
                this.isShow = false;
                this.isEnought = false;
                this.isMore = false;
                this.isDib = false;
                this.dibs = [];                
                alert('У дилера BlackJack! Вы проиграли((((('); 
                const payload = {
                  id: this.id,
                  cash: this.cash
                }
                await this.$store.dispatch('updatePlayer', payload);   
            }, 600); 
        }else if(card.dealerHandSum > 21 || card.playerHandSum > card.dealerHandSum){
            setTimeout(async ()=>{
                this.cash += this.bet*2;             
                this.$store.commit('clear');
                this.bet = 0;
                this.isShow = false;
                this.isEnought = false;
                this.isMore = false;
                this.isDib = false;
                this.dibs = [];              
                alert('Вы выграли!!!!!!!!!!!!!'); 
                const payload = {
                  id: this.id,
                  cash: this.cash
                }
                await this.$store.dispatch('updatePlayer', payload); 
            }, 600);        
        }else if(card.dealerHandSum === card.playerHandSum){
            setTimeout(async ()=>{
                this.cash += this.bet;                
                this.$store.commit('clear');
                this.bet = 0;
                this.isShow = false;
                this.isEnought = false;
                this.isMore = false;
                this.isDib = false;
                this.dibs = [];               
                alert('Победила дружба!!!!!!!!!!!!!'); 
                const payload = {
                  id: this.id,
                  cash: this.cash
                }
                await this.$store.dispatch('updatePlayer', payload); 
            }, 600); 
        }else{
            setTimeout(async ()=>{               
                this.$store.commit('clear');
                this.bet = 0;
                this.isShow = false;
                this.isEnought = false;
                this.isMore = false;
                this.isDib = false;
                this.dibs = [];
                alert('Вы проиграли!!!!!!!');
                const payload = {
                  id: this.id,
                  cash: this.cash
                }
                await this.$store.dispatch('updatePlayer', payload);                
            }, 600);
        }
    }
    
  },
  created: function (){
    const user = this.$store.getters.getUser;
    this.name = user.name;
    this.cash = user.bet;
    this.id = user.id;
  },  
  beforeRouteLeave (to, from, next) {
    if(confirm('Are you sure you want to leave?')){
      this.$store.commit('clearUser');
      next();
    }else{
      next(false);
    }
  },
  computed: {
    card () {
      return this.$store.getters.card
    }
  } 
}
</script>


<style scoped src="@/assets/css/play.css">
  
</style>