<script lang="ts" setup>
    const props = defineProps<{
    title: string
    }>()
</script>


<template>
    <div class="title-page md:ml-[240px] ml-4 mr-4"><h1 class="font-bold text-3xl pt-[80px] md:pt-4">{{ props.title }}</h1></div>
</template>

<style>
    .title-page{
        color: var(--dark-green);
        border-bottom: solid 4px #00565a; 
        padding: 0.2em 0;
        max-width: 700px;
        min-width: fit-content;
        
    }
</style>