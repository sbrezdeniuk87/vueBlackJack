<template>  
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header text-center">
            <h3>RESULT</h3>
          </div>
          <div class="modal-body">
              {{massege}}
          </div>

          <div class="modal-footer">
            <button class="modal-default-button" @click="$emit('close')">OK</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['massege']
}
</script>

<style scoped src="@/assets/css/modal.css">

</style>


