<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

  definePageMeta({
  showBack: false,
  home: true
  })

interface User {
  userId: string
}

// using hard-coded user values for now instead of fetching from database
// in salesforce: 
// userId = contact.id, progpar__c.participant_contact__c
// contactId here is the ownerId for testimonial
export default defineComponent({
  name: 'LandingPage',
  setup() {
    const router = useRouter()

    // all users have been set to test volunteer

    const user1: User = { // Admin
      userId: '003Au000005D9H7IAK',
    }
    const user2: User = { 
      userId: '003Au000005D9H7IAK', // test volunteer
    }
    const user3: User = {
      userId: '003Au000005D9H7IAK', // Staff
    }

// will send userId and contactId to the homepage
    function loginAsUser(user: User) {
      window.localStorage.setItem("userId", user.userId)
    }

    return {
      user1,
      user2,
      user3,
      loginAsUser
    }
  }
})
</script>

<template>
  <div class="landing-page flex flex-col flex-nowrap items-center">
    <div class="topbanner">
      <img src="../assets/header-logo.png" class="banner-image">
    </div>
    <div class="content">
    <h1 class="login-heading">Please select a user type to log in as:</h1>
    <div class="user-options">
      <NuxtLink to="/home">
        <div class="user-option" @click="loginAsUser(user1)">
          <h2>Admin</h2>
        </div>
      </NuxtLink>
      <NuxtLink to="/home">
        <div class="user-option ml-2 mr-2" @click="loginAsUser(user2)">
          <h2>Volunteer</h2>
        </div>
      </NuxtLink>
      <NuxtLink to="/home">
        <div class="user-option" @click="loginAsUser(user3)">
          <h2>Staff</h2>
        </div>
      </NuxtLink>
    </div>
  </div>
</div>
</template>

<style scoped>
.landing-page {
  height: 100vh;
  width: 100%;
  background-color: white;
  z-index: 10;
  position: absolute;
}

.user-options {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  text-align: center;
}

.user-option {
  background-color: #91c73e;
  color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}

.user-option:hover {
  background-color: var(--dark-green);
  color: white;
}

.user-option h2 {
  font-size: 30px;
  margin-bottom: 5px;
  text-align: center;
}

.user-option p {
  margin: 10px;
  font-size: 14px;
  text-align: center;
}

.topbanner {
  position: fixed; 
  top: 0; 
  left: 0;
  width: 100%;
  background-color: #0d324d; 
  display: flex;
  align-items: center; 
  padding: 10px;
}

.banner-image {
  width: 200px;
  margin-right: 10px;
}

.content {
  margin-top: 300px;
  text-align: center; 
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-heading {
  font-size: 28px;
  text-align: center;
}

</style>
