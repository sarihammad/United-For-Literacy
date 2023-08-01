<template>
    <div class="milestone-card">
      <slot/>
    </div>
</template>

<style scoped>
.milestone-card{
    background-color: white;
    color: #212427;
    border-radius: 10px;
    box-shadow: 0 2px 12px rgb(0 0 0 / 20%);
    padding: 1em;
    width: 100%;
    display: flex;
    margin: 0.5em 0;
    align-items: center;
    position: relative;
}

</style>