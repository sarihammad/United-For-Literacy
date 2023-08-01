<template>
    <div class="modal-overlay">
      <div class="modal">
        
        <slot/>
        
        <div class="card-container">
          <h1>Your Achievements:</h1>
          <MilestoneCard v-for="m in milestones" :key="m">
            <a v-if="m >= 1 && m < 50" href="https://www.flaticon.com/free-icons/achievement" title="achievement icons"><img src="../assets/achievement-icons/medal.png" class="w-[80px]"></a>
            <a v-if="m >= 50 && m < 250" href="https://www.flaticon.com/free-icons/achievement" title="achievement icons"><img src="../assets/achievement-icons/trophy.png" class="w-[80px]"></a>
            <a v-if="m >= 250 && m < 1000" href="https://www.flaticon.com/free-icons/achievement" title="achievement icons"><img src="../assets/achievement-icons/star.png" class="w-[80px]"></a>
            <a v-if="m>= 1000" href="https://www.flaticon.com/free-icons/achievement" title="achievement icons"><img src="../assets/achievement-icons/wreath.png" class="w-[80px]"></a>
            <div class="w-100">
              <p>You have completed</p>
              <h6>{{ m }} hour<span v-if="m > 1">s</span>!</h6>
            </div>
            <div v-if="m > vhours" class="disabler" ></div>
          </MilestoneCard>
        </div>
          
        <button class="close" @click="$emit('close-modal')">Close</button>
      </div>
      
    </div>
  </template>

<script lang="ts">
export default{
  props: ['vhours'],
  data() {
    return {
      showModal: false,
      milestones: [1, 2, 5, 10, 25, 50, 100, 250, 500, 1000]
    }
  }
}
</script>

<style scoped>

.disabler {
     background-color: #00000060;
     position: absolute;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
     border-radius: 10px;
 }
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #0000008e;
  z-index: 10;
}

.modal {
  text-align: center;
  background-color: #F8F8F8;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 20px 0 20px 0;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  background-color: var(--dark-green);
  width: 150px;
  height: 50px;
  color: white;
  font-size: 1rem;
  border-radius: 10px;
}
.card-container{
  height: 375px;
  overflow-y: scroll;
  padding: 0 1.2em;
  margin: 1em 0;
}
.card-container::-webkit-scrollbar {
    width: 8px;
}
.card-container::-webkit-scrollbar-thumb {
  background: #00000080; 
  border-radius: 10px;
}
h6{
  font-weight: 500;
  font-size: 1.5rem;
}  

@media only screen and (max-width: 480px) {
  .modal{
    width: 375px;
    height: 560px;
    margin-top: 30%;
  }
  .card-container{
    width: 375px;
    height: 420px;
  }
}
</style>    
