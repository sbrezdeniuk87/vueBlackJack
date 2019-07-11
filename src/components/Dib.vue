<template> 
   <div :class="addClass" class="text-center">{{number}}</div> 
</template>

<script>

export default {
 props: ['addClass', 'number']
}
</script>

<style scoped src="@/assets/css/play.css">
 
</style>