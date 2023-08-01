<script lang="ts" setup>
definePageMeta({
  showBack: false,
  title: "Home"
})

// const currUser = 2
const client = useClient()
let contact, name, hours

// window is only defined on client-side
if (typeof window !== "undefined"){
  contact = await client.query('user', {
    userId: window.localStorage.getItem("userId")
  })

  name = contact.name

  hours = (await (await client.query('VolunteerHours', {userId: window.localStorage.getItem("userId")})).total_hours)
  if (!hours){
    hours = 0
  } 

}

// Obtain the assigned program events for this user
const events = await(
  await client.query('userEvents', { userId: '003Au000005YI4mIAG' })
).events

// Check if the events list if empty, otherwise, obtain the first one
let eventContent = 'No upcoming programs'
if (events.length === 0) {
  eventContent = 'No upcoming programs'
} else {
  const eventData = await client.query('eventDetails', {eventId: 'a26Au00000008tdIAA'})

  if (eventData?.description === null) {
    eventContent =
      eventData.name + ', Goals: ' + eventData.goals.replace(/;/g, ', ')
  } else if (eventData?.description != null) {
    eventContent = eventData.name + ': ' + eventData.description
  }
}
</script>

<template>
    <div> 
      <div class="welcome-card mt-[80px] md:mt-0  md:ml-[220px] ">
        <h1>Welcome, {{ name }}!</h1>
      </div>
      <div class="grid lg:grid-cols-2 sm:grid-cols-1 md:ml-[220px] md:pl-8 md:pr-8">
    <div>
      <div class="rounded-tl-card">
        <h1>Enrolled Programs</h1>
        <div>
          <div><FCArrowCard
          title="Assigned Programs"
          :text="eventContent"
          textcolor="black"
          color="var(--lime-green)"
          link="/programs"
        /></div>
        </div>
      </div>
      <div class="rounded-tl-card">
        <h1>Training resources</h1>
        <div>
          <FCArrowCard
          title="Assigned Modules"
          :text="eventContent"
          textcolor="black"
          color="var(--lime-green)"
          link="/resources"
        />
        <FCArrowCard
          title="Assigned Modules"
          :text="eventContent"
          textcolor="black"
          color="var(--lime-green)"
          link="/resources"
        />
        </div>
      </div>
    </div>
    
    <div>
      <div class="rounded-tl-card">
        <h1>Invite a friend</h1>
        <div class="flex">
          Let your friend know about this volunteer program!<Icon name="ri:user-shared-fill" class="ml-4" size="2em" color="var(--dark-green)"/>
        </div>
      </div>
      
      <NuxtLink to="/track-hours">
      <div class="rounded-tl-card">
        <h1>Volunteer Hours</h1>
        <div class="flex">
          Don't forget to input your volunteer hour(s) after each event to keep track of all your volunteer hours.
          <div class="rounded-full border-6 circle flex flex-col"><div class="font-bold text-3xl">{{ hours }}</div><div>Hours</div></div>
        </div>
      </div> 
      </NuxtLink>

      <NuxtLink to="/testimonial">
      <div class="rounded-tl-card">
        <div class="flex"><h1>Testimonial</h1> <Icon name="jam:write" class="ml-4" size="1.8em" color="var(--dark-green)"/>
      </div>
        <div>
          Tell us how you feel about doing the volunteer program.
        </div>
      </div>
      </NuxtLink>
    </div>
    </div>
    </div>
  </template>
  
<style scoped>
  .rounded-tl-card{
        color: black;
        margin: 1.5em;
        padding: 2em;
        background-color: #fff;
        border-radius: 50px 0 0 0;
        box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
        max-height: 350px;
        overflow-y: hidden;
  }
  h1{
    font-size: 1.5rem;
  }
  .welcome-card {
    color: white;
    font-weight:800;
    font-size: 1.5rem;
    line-height: 29px;
    padding: 13px;
    display: inline-block;
  }
  .circle{
    min-width:120px; 
    max-width: 120px;
    min-height: 120px;
    max-height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1em;
    border-color: var(--dark-green);
  }
  </style>
  