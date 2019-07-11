
export default {
  state: {
    deck: [
        {
            name: 'Ace',
            suit: 'Hearts',
            value: 11
        },
        {
            name: 'Two',
            suit: 'Hearts',
            value: 2
        },
        {
            name: 'Three',
            suit: 'Hearts',
            value: 3
        },
        {
            name: 'Four',
            suit: 'Hearts',
            value: 4
        },
        {
            name: 'Five',
            suit: 'Hearts',
            value: 5
        },
        {
            name: 'Six',
            suit: 'Hearts',
            value: 6
        },
        {
            name: 'Seven',
            suit: 'Hearts',
            value: 7
        },
        {
            name: 'Eight',
            suit: 'Hearts',
            value: 8
        },
        {
            name: 'Nine',
            suit: 'Hearts',
            value: 9
        },
        {
            name: 'Ten',
            suit: 'Hearts',
            value: 10
        },
        {
            name: 'Jack',
            suit: 'Hearts',
            value: 10
        },
        {
            name: 'Queen',
            suit: 'Hearts',
            value: 10
        },
        {
            name: 'King',
            suit: 'Hearts',
            value: 10
        },
        {
            name: 'Ace',
            suit: 'Diamonds',
            value: 11
        },
        {
            name: 'Two',
            suit: 'Diamonds',
            value: 2
        },
        {
            name: 'Three',
            suit: 'Diamonds',
            value: 3
        },
        {
            name: 'Four',
            suit: 'Diamonds',
            value: 4
        },
        {
            name: 'Five',
            suit: 'Diamonds',
            value: 5
        },
        {
            name: 'Six',
            suit: 'Diamonds',
            value: 6
        },
        {
            name: 'Seven',
            suit: 'Diamonds',
            value: 7
        },
        {
            name: 'Eight',
            suit: 'Diamonds',
            value: 8
        },
        {
            name: 'Nine',
            suit: 'Diamonds',
            value: 9
        },
        {
            name: 'Ten',
            suit: 'Diamonds',
            value: 10
        },
        {
            name: 'Jack',
            suit: 'Diamonds',
            value: 10
        },
        {
            name: 'Queen',
            suit: 'Diamonds',
            value: 10
        },
        {
            name: 'King',
            suit: 'Diamonds',
            value: 10
        },
        {
            name: 'Ace',
            suit: 'Clubs',
            value: 11
        },
        {
            name: 'Two',
            suit: 'Clubs',
            value: 2
        },
        {
            name: 'Three',
            suit: 'Clubs',
            value: 3
        },
        {
            name: 'Four',
            suit: 'Clubs',
            value: 4
        },
        {
            name: 'Five',
            suit: 'Clubs',
            value: 5
        },
        {
            name: 'Six',
            suit: 'Clubs',
            value: 6
        },
        {
            name: 'Seven',
            suit: 'Clubs',
            value: 7
        },
        {
            name: 'Eight',
            suit: 'Clubs',
            value: 8
        },
        {
            name: 'Nine',
            suit: 'Clubs',
            value: 9
        },
        {
            name: 'Ten',
            suit: 'Clubs',
            value: 10
        },
        {
            name: 'Jack',
            suit: 'Clubs',
            value: 10
        },
        {
            name: 'Queen',
            suit: 'Clubs',
            value: 10
        },
        {
            name: 'King',
            suit: 'Clubs',
            value: 10
        },
        {
            name: 'Ace',
            suit: 'Spades',
            value: 11
        },
        {
            name: 'Two',
            suit: 'Spades',
            value: 2
        },
        {
            name: 'Three',
            suit: 'Spades',
            value: 3
        },
        {
            name: 'Four',
            suit: 'Spades',
            value: 4
        },
        {
            name: 'Five',
            suit: 'Spades',
            value: 5
        },
        {
            name: 'Six',
            suit: 'Spades',
            value: 6
        },
        {
            name: 'Seven',
            suit: 'Spades',
            value: 7
        },
        {
            name: 'Eight',
            suit: 'Spades',
            value: 8
        },
        {
            name: 'Nine',
            suit: 'Spades',
            value: 9
        },
        {
            name: 'Ten',
            suit: 'Spades',
            value: 10
        },
        {
            name: 'Jack',
            suit: 'Spades',
            value: 10
        },
        {
            name: 'Queen',
            suit: 'Spades',
            value: 10
        },
        {
            name: 'King',
            suit: 'Spades',
            value: 10
        }
    ],
    playerHand: [],
    playerHandSum: 0,
    dealerHand: [],
    dealerHandSum: 0  
  },
  mutations: {
    play(state, payload){
        state.playerHand = payload.playerHand;
        state.playerHandSum = payload.playerHandSum;
        state.dealerHand = payload.dealerHand;
        state.dealerHandSum = payload.dealerHandSum;
    },
    more(state, payload){
        state.playerHand = payload.playerHand;
        state.playerHandSum = payload.playerHandSum;
    },
    enough(state, payload){
        state.dealerHand = payload.dealerHand;
        state.dealerHandSum = payload.dealerHandSum;
    },
    clear (state){
        state.playerHand = [];
        state.playerHandSum = 0;
        state.dealerHand = [];
        state.dealerHandSum = 0;
    }
  },
  actions: {
    async play (context) {      
      let playerHand = await [getCard(context.state), getCard(context.state)];
      let dealerHand = await [getCard(context.state)];
      let playerHandSum = await getSum(playerHand);
      let dealerHandSum = await getSum(dealerHand);
      const payload = {
        playerHand,
        playerHandSum,
        dealerHand,
        dealerHandSum
      }
      context.commit('play', payload);
    },
    async more (context) {
        let playerHand = context.state.playerHand;
        await playerHand.push(getCard(context.state));
        let playerHandSum = await getSum(playerHand);

        const payload = {
            playerHand,
            playerHandSum
          }
        context.commit('more', payload);
    },
    async enough (context) {
        let dealerHand = context.state.dealerHand;
        await dealerHand.push(getCard(context.state));
        let dealerHandSum = await getSum(dealerHand);
        const payload = {
            dealerHand,
            dealerHandSum
        }
        await context.commit('enough', payload);
        
        while(dealerHandSum < 17){
            await dealerHand.push(getCard(context.state));
            dealerHandSum = await getSum(dealerHand);
            const payload = {
                dealerHand,
                dealerHandSum
            }
            await context.commit('enough', payload);
        }
    }   
  },
  getters: {
    card (state){
      const hand = {
        playerHand: state.playerHand,
        playerHandSum: state.playerHandSum,
        dealerHand: state.dealerHand,
        dealerHandSum: state.dealerHandSum 
      }
      return hand
    }
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function getCard(state){
  return state.deck[getRandomInt(0, state.deck.length - 1)];
}

function getSum (hand){
  let sum = 0;

  for( let i=0; i<hand.length; i++){
      let card = hand[i];
      if(card.name !== 'Ace'){
          sum += card.value;
      }
  }

  for(let i=0; i<hand.length; i++){
      let card = hand[i];
      if(card.name === 'Ace'){
          if(sum > 10){
              sum ++;
          }else{
              sum += card.value;
          }
      }
  }

  return sum;
}
