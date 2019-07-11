<template> 
   <img :src="require('../../assets/images/cards/'+playerHand.suit+'/'+playerHand.name+'.jpg')" alt="Card" class="imgPlayer" />
</template>

<script>

export default {
 props: ['playerHand']
}
</script>

<style scoped src="@/assets/css/play.css">
 
</style>