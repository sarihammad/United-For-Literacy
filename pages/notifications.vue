<script lang="ts" setup>
definePageMeta({
  title: 'Notifications',
  showBack: true
})

const announcementStore = useAnnouncementStore()
announcementStore.updateLastChecked()

const refetch = async () => {
  announcementStore.announcements = []
  await announcementStore.fetchAnnouncements()
}
</script>


<template>
<div>


<TitlePage title="Notifications" class="title-section"/>


  <div id="middle-section-container" class="flex flex-col justify-center items-center px-5">
    
    <div
        id="button-container"
        class="flex flex-row mt-20 mb-8"
      >
        <button class="btn" @click.prevent="refetch">
        Refresh
        </button>
      </div>

      <div
        class="notification-container flex flex-col justify-start items-center"
      >

        <div
          v-for="announcement in announcementStore.announcements"
          :key="announcement.Id"
        >
          <notificationCard
            :title="announcement.Title"
            :text="announcement.Body"
          />
        </div>
      </div>
      
    </div>
  </div>
</template>



<style scoped>
      .notification-container {
        min-height: 800px;
        padding: 1rem;
        margin-left:200px;
        /* background-color: lightblue; */
      }

      #button-container{
        display: flex;
        justify-content: flex-start !important;
        align-items: flex-start;
        
      }

      @media screen and (max-width: 768px) {
        .notification-container{
          margin-left:0px;
          float:none;
        }
        .title-section{
          padding-top:80px;
        }
      

      }
      @media (min-width: 769px) and (max-width: 2000px) {

        #button-container{
          margin-left: 200px;
        }

      }

      
      .btn {
        height: 68px;
        width: 175px;
        background-color: #00734f;
        border-radius: 10px;
        color: white;
      }

      .btn:hover {
        opacity: 80%;
        border-radius: 10px;

      }


    </style>