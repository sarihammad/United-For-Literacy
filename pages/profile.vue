<script lang="ts" setup>
definePageMeta({
  title: 'Profile',
  showBack: true
})

const client = useClient()
let contact, name, hours, email, type, user_id, number, date_of_birth, alt_number, gender

if (typeof window !== "undefined"){
  contact = await client.query('user', {
    userId: window.localStorage.getItem("userId")
  })

  name = contact.name
  email = contact.email
  type = contact.userType
  user_id = contact.userId
  number = contact.number
  alt_number = contact.alt_number
  date_of_birth = contact.date_birth
  gender = contact.gender


}




</script>


<template>
    <div>
        <TitlePage title="Profile"/>
        <div class="card md:ml-[240px] m-6 md:p-10 p-6">
            <div class="container">
                <div class="mt-4 flex flex-col">
                    <!-- <img id="portrait" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"> -->
                </div>
                <div class="flex flex-col">
                    <div class="flex flex-row">                      
                        <b>Name:</b>
                        <p>{{ name }}</p>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="flex flex-row">                      
                        <b>Date of Birth:</b>
                        <p>{{ date_of_birth }}</p>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="flex flex-row">                      
                        <b>Gender:</b>
                        <p>{{ gender }}</p>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="flex flex-row">                      
                        <b>User ID:</b>
                        <p>{{ user_id }}</p>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="flex flex-row">                      
                        <b>Status:</b>
                        <p>{{ type }}</p>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="flex flex-row">                      
                        <b>Email:</b>
                        <p>{{ email }}</p>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="flex flex-row">                      
                        <b>Primary Phone Number:</b>
                        <p>{{ number }}</p>
                    </div>                     
                </div>
                <div class="flex flex-col">
                    <div class="flex flex-row">                      
                        <b>Alternative Phone Number:</b>
                        <p>{{ alt_number }}</p>
                    </div>                     
                </div>
                <!--<button id="edit">Edit Profile</button>-->
            </div>
        </div>
    </div>
</template>

<style scoped>
    .card{
        color: black;
        background-color: #ffffff;  
        border-radius: 30px 30px 30px 30px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        overflow-y: hidden;
        max-width: 600px;
        align-items: center;
    }

    /*
    #edit{
        border-radius: 5px;
        padding: 6px 12px;
        background-color: rgb(4, 187, 20);
        margin-top: 20px;
    }
    */

    #portrait{
        width: 290px;
        height: 395px;
        margin-bottom: 25px;
    }

    .container{
        width: 100%;
        margin: 0;
        align-items: center;
    }

    b, p{
        padding-bottom: 20px;
        padding-right: 10px;
        font-size: 18px;
    }

    .mt-4.flex.flex-col{
        align-items: flex-start;
    }
    
</style>