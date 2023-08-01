<script lang="ts" setup>
const props = defineProps<{
  title: string
  text: string
}>()
</script>

<template>
  <div class="rounded-tl-card2">
    <div class="right-section">
      <div class="text-2xl font-bold mb-1">{{ props.title }}</div>
      <div>
          <!-- {{ props.text}} -->
          <div class="text" v-html="text"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rounded-tl-card2 {
  display: flex;
  flex-direction: row;
  color: #00565a;
  margin: 1.5em;
  margin-bottom: 0.8rem;
  padding: 1em;
  background-color: #fff;
  border-radius: 25px 0 0 0;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  width: 1000px;
  height: 150px;
  max-width: 1000px;
  max-height: 350px;
  overflow-x: auto;
  overflow-y: auto;
  cursor: pointer;
}

.rounded-tl-card2:hover {
        opacity: 70%;
        border-radius: 10px
      }

.left-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0.7;
  padding-right: 1rem;
}

.right-section {
  display: flex;
  flex-direction: column;
  flex: 6;
}


@media screen and (max-width: 480px) {
  /* 0px < screensize < 426px */
  img{
    width: 50px;
    height: 50px;
  }  
  .rounded-tl-card2{
    width: 350px;
    height: 230px;
    overflow-x: auto;
    overflow-y: auto;
  }
}

@media (min-width: 481px) and (max-width: 766px) {
  /* 481px < screensize < 765px */
  img{
    width: 50px;
    height: 50px;
  }  
  .rounded-tl-card2{
    width: 450px;
    height: 200px;
    overflow-x: auto;
    overflow-y: auto;
  }
}

@media (min-width: 767px) and (max-width: 1050px) {
  /* 767px < screensize < 1050px */
  img{
    width: 50px;
    height: 50px;
  }  
  .rounded-tl-card2{
    width: 500px;
    height: 180px;
    overflow-x: auto;
    overflow-y: auto;
  }
}

@media (min-width: 1050px) and (max-width: 1292px) {
  /* 481px < screensize < 765px */
  img{
    width: 50px;
    height: 50px;
  }  
  .rounded-tl-card2{
    width: 700px;
    height: 180px;
    overflow-x: auto;
    overflow-y: auto;
  }
}



</style>