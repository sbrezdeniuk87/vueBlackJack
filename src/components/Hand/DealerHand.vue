<template> 
   <img :src="require('../../assets/images/cards/'+dealerHand.suit+'/'+dealerHand.name+'.jpg')" alt="Card" class="imgHandler" />
</template>

<script>

export default {
 props: ['dealerHand']
}
</script>

<style scoped src="@/assets/css/play.css">
 
</style>