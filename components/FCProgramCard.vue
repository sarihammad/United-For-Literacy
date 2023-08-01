<script lang="ts" setup>

const props = defineProps<{
    date: string
    title: string
    content: string
    contentcolor: string
    datecolor: string
}>()
</script>

<template>
    <div class="program-card">
        <div class="content">
            <div class="date-text">{{ props.date }}</div>
            <div class="title-text">{{ props.title }}</div>
            <div class="content-text">{{ props.content }}</div>
        </div>
        <button class="card-button">
            <Icon name="fe:arrow-right"/>
        </button>
        
    </div>
</template>

<style scoped>
.program-card {
    min-width: 250px;
    height: 118px;
    border-radius: 10px;
    margin: 15px 0;
    display: flex;
    background-color: #fbfbfb;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.program-card div {
    margin-left: 10px;
}

.date-text {
    font-size: 13px;
    font-weight: 700;
    margin-top: 5px;
    color: black
}

.title-text {
    font-size: 18px;
    line-height: 19px;
    font-weight: 700;
    text-overflow: ellipsis;
    color: black;
}

.content-text {
    font-size: 15px;
    font-weight: 500;
    text-overflow: ellipsis;
    overflow: hidden;
    height:35%;
    width: 95%;
    line-height: 19px;
    padding-bottom: 10%;
    margin-top: 5px;
    color: black;
}

.content {
    width: 90%;
    overflow: hidden;
}
.card-button {
    width: 20%;
    font-size: 20px;
    color: black;
}
</style>
