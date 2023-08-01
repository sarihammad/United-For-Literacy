<script lang="ts" setup>
// day number mapping
const days: { [day: number]: string } = {
  0: 'Mon',
  1: 'Tue',
  2: 'Wed',
  3: 'Thu',
  4: 'Fri',
  5: 'Sat',
  6: 'Sun'
}

function upperFirst(str: string) {
  if (str.length > 0) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return str
}

const route = useRoute()

const currEventId: string = route.params.programslug.toString()
const client = useClient()
const eventDetails = await client.query('eventDetails', {
  eventId: currEventId
})

const eventInfo = {
  id: eventDetails?.programId,
  name: eventDetails?.name,
  type: 'recurring',
  recurrence: eventDetails?.programOfferingSchedule,
  location: eventDetails?.locationLabel,
  description: eventDetails?.description,
  goals: eventDetails?.goals,
  fileSharing: eventDetails?.fileSharing
}

// Handle null description/goal
if (eventInfo.description && eventInfo.goals) {
  eventInfo.description += '\n\nGoals: ' + eventInfo.goals.replaceAll(';', ', ')
} else if (eventInfo.goals) {
  eventInfo.description = '\n\nGoals: ' + eventInfo.goals.replaceAll(';', ', ')
} else if (eventInfo.description) {
  eventInfo.goals = 'There are no goals for this program.'
} else {
  eventInfo.description = 'There is no description for this program.'
}

let eventDays = ''
const daysOfWeek: number[] = eventInfo.recurrence.daysOfWeek
// create text for days of week tag
for (let i = 0; i < daysOfWeek.length; i++) {
  eventDays += days[daysOfWeek[i]]

  if (i !== daysOfWeek.length - 1) {
    eventDays += ', '
  }
}

// Set url for location search
let googleMapsURL: string = 'https://www.google.com/maps/search/'
if (eventDetails?.locationAddress) {
  let locationStr: string = eventDetails.locationAddress
  locationStr = locationStr.replaceAll('<br>', '+').replaceAll(' ', '+')
  googleMapsURL += locationStr
} else if (eventInfo.location) {
  let locationStr: string = eventInfo.location
  locationStr = locationStr.replaceAll('<br>', '+').replaceAll(' ', '+')
  googleMapsURL += locationStr
} else {
  googleMapsURL = ''
}


definePageMeta({
  title: 'Program Info',
  showBack: true
})
</script>

<template>
  <div class="flex flex-col flex-nowrap justify-center items-center content-container md:ml-[220px] md:pl-8 md:pr-8">
    <h1 class="mt-6 pt-[80px] md:pt-6">{{ eventInfo.name }}</h1>
    <div class="event-tags-wrapper">
      <div class="tags-wrapper">
        <FCTag
          v-if="eventInfo.type == 'recurring'"
          :text="upperFirst(eventInfo.recurrence.interval)"
          icon="fe:loop"
          color="var(--lime-green)"
        />
        <FCTag
          v-if="eventInfo.type == 'recurring'"
          :text="eventDays"
          icon="fe:calendar"
          color="var(--lime-green)"
        />
        <a v-if="googleMapsURL" target="_self" :href="googleMapsURL">
          <FCTag
            :text="eventInfo.location"
            icon="fe:location"
            color="var(--lime-green)"
          />
        </a>
        <FCTag
            v-else
            :text="eventInfo.location"
            icon="fe:location"
            color="var(--lime-green)"
          />
      </div>

      <div class="border rounded-md">
        <a v-if="eventInfo.fileSharing" target="_self" :href="eventInfo.fileSharing">
        <FCFileButton text="Event Files" :enabled ="true"/>
        </a>
        <FCFileButton v-else text="No Event Files" :enabled="false"/>
      </div>
      
    </div>

    <div class="rounded-tl-card md:mt-4 m-2 md:m-0">
      <h2>Description</h2>
      <div class="desc-text">{{ eventInfo.description }}</div>
    </div>
    

  </div>
</template>

<style scoped>
  .rounded-tl-card{
        color: black;
        padding: 1.5em;
        background-color: #fff;
        border-radius: 10px;
        border: solid 1px #00000090;
        /* box-shadow: 0 2px 8px rgb(0 0 0 / 20%); */
        max-height: 350px;
        overflow-y: hidden;
  }
.event-tags-wrapper {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.tags-wrapper {
  width: 50%;
  margin-right: 20px;
  background-color: var(--lime-green);
  border-radius: 40px 0 0 0;
  padding: 1.5em;
}

h1 {
  font-size: 24px;
  font-weight: 700;
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: black;
}

h2 {
  font-size: 20px;
  font-weight: 700;
  margin: 15px;
  color: black;
}

.desc-text {
  font-size: 1rem;
  margin: 15px;
  color: black;
}

.content-container {
  max-width: 800px;
  /* margin: 0 auto; */
}

</style>
