<template>
  <div>
    <TitlePage title="Calendar"/>
    <body> 
      <div id="content-container" class="flex flex-col justify-center px-10">
        <div class="heading-container">
        </div>
        <div
          id="notification-container"
          class="flex flex-col justify-start"
        >
          <div id="calendar-card" class="overflow-hidden md:ml-[240px]">
            <ClientOnly>
                <FullCalendar  id="calendar" ref="calendar" :options="calendarOptions" />
            </ClientOnly>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>


  
<script setup>
  import { ref } from 'vue'
  import FullCalendar from '@fullcalendar/vue3'
  import dayGridPlugin from "@fullcalendar/daygrid";
  import interactionPlugin from "@fullcalendar/interaction";

  const calendar = ref(null);

const currUser = '003Au000005YI4mIAG'
const client = useClient()

const eventIds = (await client.query("userEvents", {userId: currUser})).events
const events = []

for (let i = 0; i < eventIds.length; i++) {
  const eventInfo = await client.query("eventDetails", {eventId: eventIds[i]})
  if (!eventInfo) {
    continue
  }
  if (eventInfo.name && eventInfo.startDate) {
    events.push({ title: eventInfo.name, start: eventInfo.startDate })
  }
}
  const eventList = ref(events)

  // const handleDateClick = (arg) => {
  //   const eventTitle = prompt('Event Title: ');
  //   if (eventTitle) {
  //     const newEvent = {
  //       title: eventTitle,
  //       start: arg.dateStr
  //     }
  //     eventList.value.push(newEvent);

  //     calendar.value.getApi().render(); // re-render the calendar with the new events
  //   }
  // };

  const calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    // dateClick: handleDateClick,
    events: eventList.value
  };

  onMounted(() => {
  setTimeout(function () {
    window.dispatchEvent(new Event('resize'));
  }, 0.1);
});
</script>






<style>

#calendar-card {
      flex-direction: column;
      color: #00565a;
      margin-bottom: 0.8rem;
      padding: 1em;
      background-color: #fff;
      border-radius: 25px 0 0 0;
      box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
      overflow-y: hidden;
      margin-top: 3rem;
      max-width: 65rem;
    }

#calendar {
    /* max-width: 75%; */
}

@media only screen and (max-width: 540px) {

  #fc-dom-1 {
    font-size: 1.4rem;
  }

}

</style>