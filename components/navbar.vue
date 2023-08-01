<!-- eslint-disable vue/multi-word-component-names -->

<template> 
    <div class="lg:flex lg:float-left">
        
        <div class="md:hidden flex flex-row fixed md:relative w-full" style="background-color:#093254; color: white;">
            <button id="menu-btn" class="p-4 left-2"><Icon name="material-symbols:menu-rounded" size="2em"/></button>
            <NuxtLink to="/"><img src="../assets/header-logo.png" alt="logo" class="w-36 mt-2"></NuxtLink>
        </div>
        <nav 
        id="navbar" class="float-left fixed flex flex-col sm:h-full lg:h-screen fixed leading-5 inset-y-0 left-0 bottom-0 transform -translate-x-full md:relative
        md:translate-x-0 transition duration-100 ease-in-out z-10">
            <div class="flex justify-end border-white"><button id="close-menu" class="bg-[#093254] absolute m-1 sm:visible md:invisible"><Icon name="ic:round-close" size="2em"/></button></div>
            <NuxtLink to="/"><img src="../assets/header-logo.png" alt="logo" class="w-10/12 mt-6"></NuxtLink>
            <div class="mt-10 mb-10">
                <ul class="list-none">
                <NuxtLink to="/home/"><li class="my-1 mx-2 p-3 flex"><Icon name="ic:baseline-home" size="1.5em" class="mr-3"/>Home</li></NuxtLink>
                <NuxtLink to="/programs"><li class="my-1 mx-2 p-3 flex"><Icon name="lucide:briefcase" size="1.5em" class="mr-3"/>Programs</li></NuxtLink>
                <NuxtLink to="/resources"><li class="my-1 mx-2 p-3 flex"><Icon name="material-symbols:menu-book-outline-rounded" size="1.5em" class="mr-3"/>Resources</li></NuxtLink>
                <NuxtLink to="/calendar"><li class="my-1 mx-2 p-3 flex"><Icon name="material-symbols:calendar-month-outline-rounded" size="1.5em" class="mr-3"/>Calendar</li></NuxtLink>
                <NuxtLink to="/track-hours"><li class="my-1 mx-2 p-3 flex"><Icon name="material-symbols:more-time-rounded" size="1.5em" class="mr-3"/>Track Hours</li></NuxtLink>
                <NuxtLink to="/notifications"><li class="my-1 mx-2 p-3 flex"><Icon name="ic:outline-notifications-none" size="1.5em" class="mr-3"/>Notifications</li></NuxtLink>
                <NuxtLink to="/messages"><li class="my-1 mx-2 p-3 flex"><Icon name="tabler:message-circle" size="1.5em" class="mr-3"/>Messages</li></NuxtLink>
                </ul>
            </div>
                
            <div class="mt-10">
                <ul>
                <NuxtLink to="/profile"><li class="my-1 mx-2 p-3 flex"><Icon name="material-symbols:account-circle" size="1.5em" class="mr-3"/>Profile</li></NuxtLink>
                <li class="my-1 mx-2 p-3">Log out</li>
                </ul>
            </div>
        </nav>  

    </div>
    
</template>

<script lang="ts">
    export default{

        mounted () {
            const sidebar = document.getElementById('navbar');
            const closebtn = document.getElementById('close-menu');
            const openbtn = document.getElementById('menu-btn');
            if(openbtn && sidebar && closebtn)
            openbtn.addEventListener("click", ()=>{
                sidebar.classList.toggle("-translate-x-full");
                closebtn.style.visibility = "visible";
            });
            if (closebtn && sidebar)
            closebtn.addEventListener("click",()=> {
                sidebar.classList.toggle("-translate-x-full");
                closebtn.style.visibility = "hidden";
            })
        },
    }

</script>


<style>
    h1{
      color: #00565a;
      font-size: large;
      font-weight: 700;
    }

    #navbar{
        background-color:#093254; 
        color: white; 
        width: 220px; 
        position: fixed; 
        overflow: scroll; 
        scrollbar-width: 0px;
        

    }
    #navbar::-webkit-scrollbar {
        width: 0px;
    }   
    #navbar ul li:hover, .active{
      background-color: #0e4d82;
      border-radius: 10px;
    }

  </style>

