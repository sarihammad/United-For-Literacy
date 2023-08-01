<script lang="ts" setup="">
import { resolveHTTPResponse } from '@trpc/server';
import { ref } from 'vue';
definePageMeta({
  title: 'Track Hours',
  showBack: true
})

const hours_num = ref(0);
const days_attended = ref(0);
const date_entered = ref(new Date().toISOString().slice(0, 10)); // format as YYYY-MM-DD
const notes = ref('');

const submit = async () => {

      if (hours_num.value <=0) {
          alert("INVALID INPUT: Number of hours must be greater than 0")
      }
      else if (days_attended.value <=0) {
          alert("INVALID INPUT: Days attended must be greater than 0")
      }
      else{
        const client = useClient();
        if (typeof window !== "undefined"){
          alert("Volunteer Hours Added")
          let user = window.localStorage.getItem('userId')
          const mut = await client.mutation('createRecord', {
          userID: user,
          programID: 'a26Au00000008tdIAA',
          hours: hours_num.value,
          days: days_attended.value,
          date: date_entered.value,
          notes: notes.value,
          })
          if (mut === true || mut === "true"){
            alert("Volunteer Hours has been added successfully!");
          }
          else{
            alert("Failed to add hours");
          }
        }
      }     

}

const client = useClient()

let rec: { 
  userId: string; 
  record: never[]; 
  total_hours?: undefined; } | 
  { userId: string; 
    total_hours: number; 
    record: string[] }
  
  rec = {
    userId: "",
    total_hours: 0,
    record: []
  }
  const recordHoursList: {  
    program: any;
    hours: any;
    daysAttended: any;
    recordedDate: any;
    notes: string
  }[] = []

  // const eventsList: {
  //   id: any,
  //   name: any
  // }[] = []
  
  if (typeof window !== "undefined"){

  // get a list of volunteer record IDs for the user with contactID
  rec = (await client.query('VolunteerHours', {userId: window.localStorage.getItem("userId")}))
  const records: String[] = rec.record
  if (!rec.total_hours){
    rec.total_hours = 0
  } 

  // for each volunteer record id, find the record details & add to the recordHourList
  for (let i=0; i<records.length; i++){
    const recordDetails = await client.query("recordDetails", {recordName: records[i]})
    const recordinfo = {
      program: recordDetails?.program,
      hours: recordDetails?.hours,
      daysAttended: recordDetails?.daysAttended,
      recordedDate: recordDetails?.recordedDate,
      notes: recordDetails?.notes
    }
    recordHoursList.push(recordinfo)
  }
}

// fetching the events program for the form porgram selection

  // const eventIds: string[] = (await client.query("userEvents", {userId: window.localStorage.getItem("userId")})).events

  // for (let i=0; i<eventIds.length; i++){
  //   const eventDetail = await client.query("eventDetails", {eventId: eventIds[i]})
  //   if (eventDetail){
  //     const event = {
  //     id: eventDetail.programId,
  //     name: eventDetail.name
  //   }
  //   eventsList.push(event)
  //   }
  // }

</script>

<template>
  <div>
          <TitlePage title="Track Volunteer Hours"/>
          <div class="middle-section-container">
          <div class="top-row">
            <div class="left-col flex flex-1">
              <div class="rounded-tl-card">
                <div class="total-header flex flex-row px-5 py-5 justify-between">
                  <div class="text-[30px] font-bold text-[#00565a]">Total</div>
                  <button class="flex flex-col items-center" @click="showModal = true">Achievements
                    <img v-if="rec.total_hours && rec.total_hours >= 1  && rec.total_hours < 50" src="../assets/achievement-icons/medal.png" class="w-12">
                    <img v-else-if="rec.total_hours && rec.total_hours < 250 " src="../assets/achievement-icons/trophy.png" class="w-12">
                    <img v-else-if="rec.total_hours && rec.total_hours < 1000 " src="../assets/achievement-icons/star.png" class="w-12">
                    <img v-else-if="rec.total_hours && rec.total_hours >= 1000" src="../assets/achievement-icons/wreath.png" class="w-12">
                  </button>
                  <Modal v-show="showModal" :vhours=rec.total_hours @close-modal="showModal = false" />
                </div>
                <div class="total-hrs-container flex flex-col justify-center items-center">
                  
                  <div class="total-hrs-circle-container flex flex-col justify-center items-center">
                    <div id="hours-100" class="flex font-bold text-[60px]">
                      {{rec.total_hours}}
                    </div>
                    <div class="flex font-bold">hours</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="right-col">
              <div class="rounded-tl-card-right">
                <div class="signup-form-container">
                  <div class="text-xl font-bold text-[#00734F]">
                    Add Volunteer Hours
                  </div>
                  <form class="signup-form" action="" method="">
                    <div class="form-row">
                      <label class="form-label" for="program"
                        >Program name:</label
                      >
                      <!-- <input type="text" required name="program" placeholder="summer camp"> -->
                      <select required class="form-label border border-opacity-90 rounded h-8">
                    <option value="none"></option>
                    <option value="Literacy and Basic skills">Literacy and Basic skills</option>
                    </select>
                      <!-- <select  v-model="program" class="border w-100">
                        <option v-for="e in eventsList" :key="e.id" :value="e.id">{{ e.name }}</option>
                      </select> -->
                    </div>
                    <div class="form-row">
                      <label class="form-label" for="date_entered">Date Attended (or start date if multiple days attended)</label>
                      <input type="date" required name="date_entered" v-model="date_entered"/>
                    </div>
                    <div class="form-row">
                      <label class="form-label" for="days_attended">Days Attended:</label>
                      <input
                        type="number"
                        required
                        name="days_attended"
                        placeholder="1"
                        v-model="days_attended"
                      />
                    </div>

                    <div class="form-row">
                      <label class="form-label" for="hours_num"
                        >Number of hours</label
                      >
                      <input
                        type="number"
                        required
                        name="hours_num"
                        placeholder="10"
                        v-model="hours_num"
                      />
                    </div>
                    <div class="form-row">
                      <label class="form-label" for="notes"
                        >Notes (if any)</label
                      >
                      <input
                        type="text"
                        name="notes"
                        v-model="notes"
                      />
                    </div>
                   

                    <div class="flex flex-col justify-center items-center mt-5">
                      <div class="button-input">
                        <button class="btn" @click="submit">Add</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-row flex flex-col">
            <div class="table-container">
              <table id="hours-log-table">
                <tr>
                  <th id="table-head" colspan="5">Volunteer Hours Log</th>
                </tr>
                <tr>
                  <th>Program Name</th>
                  <th>Volunteer Hours</th>
                  <th>Days Attended</th>
                  <th>Recorded Date</th>
                  <th>Notes (if any)</th>
                </tr>
                <tr v-if="recordHoursList.length === 0"><td id="table-head" colspan="5" class="text-center">No Volunteer Hours Recorded</td></tr>
                
                <tr v-for="rec in recordHoursList" :key="rec">
                  <td>{{rec.program}}</td>
                  <td>{{rec.hours}}</td>
                  <td>{{rec.daysAttended}}</td>
                  <td>{{rec.recordedDate}}</td>
                  <td>{{rec.notes}}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
  </div>
</template>

<script lang="ts">
import Modal from '~/components/modal.vue'

export default {
  components: { Modal },
  data() {
    return {
      showModal: false,
      vhours: 0,
    }

  },
}
</script>

<style scoped>

      .middle-section-container {
        display: flex;
        flex-direction: column;
        /* background-color: lightgreen; */
        height: 100%;
        max-width: 1200px;
        margin-left: 250px;
      }

      @media screen and (max-width: 768px) {
        .middle-section-container{
          margin-left: 0px;
        } 
        .table-container{
          z-index: 0;
          margin:1rem;
          /* overflow-y: auto; */
        }
        
      }


      @media (max-width: 1000px) {
        .top-row {
          flex-wrap: wrap;
        }
        .table-container {
          overflow-x: auto;
        }
      }


      .rounded-tl-card {
        color: #00565a;
        margin: 1.5em;
        padding: 2.2em;
        background-color: #92c83e;
        border-radius: 50px 0 0 0;
        box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
        height: 45vh;
        width: 100%;
        overflow-y: hidden;
      }
      .rounded-tl-card-right {
        color: #00565a;
        margin: 1.5em;
        padding: 1em;
        background-color: #fff;
        border-radius: 50px 0 0 0;
        box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
        height: 45vh;
        width: 100%;
        overflow-y: auto;
      }
      h1 {
        color: #00565a;
        font-size: large;
        font-weight: 700;
      }
      hr {
        color: #00734f;
        border: 4px solid #00734f;
      }

      .btn {
        height: 40px;
        width: 175px;
        background-color: #00734f !important;
        border-radius: 10px;
        color: white;
      }


      .btn:hover {
        opacity: 80%;
        border-radius: 10px;

      }

      /*Add volunteer Hours Form*/
      .top-row {
        display: flex;
        flex-direction: row;
      }

      .left-col {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        /* background-color: lightblue; */
      }

      /*Total Hours*/
      .total-hrs-circle-container {
        height: 200px;
        width: 200px;
        border: 7px solid #00734f;
        border-radius: 50%;
      }



      @media (max-width: 420px) {
        .total-hrs-circle-container {
          height: 150px;
          width: 150px;
          border: 7px solid #00734f;
          border-radius: 50%;
        }
      }

      .right-col {
        display: flex;
        flex: 1.5;
        justify-content: center;
        align-items: center;
        /* background-color: lightpink; */
      }

      .signup-form-container {
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 1rem;
        display: flex;
        flex-direction: column;
        max-width: 771.94px;
        width: 100%;
        /* background-color: #cce7f0; */
      }

      .form-label {
        text-align: left;
        width: 100%;
      }

      .form-row input {
        width: 100%;
        background: #ffffff;
        border: 1px solid lightgray;
        border-radius: 4px;
        height: 30px;
        font-size: 1rem;
        padding-left: 10px;
        padding-right: 10px;
        color: black;
      }

      .form-row{
        margin-top: 1em;
      }

      /*tables*/

      .bottom-row {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        margin-bottom: 1rem;
      }
      .table-container {
        display: flex;
        border-radius: 20px;
        border: 1px solid lightgray;
        overflow-x: auto;
        overflow-y: auto;
        max-height: 450px;
        box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
      }
      #hours-log-table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }

      #hours-log-table td,
      #hours-log-table th {
        padding: 8px;
      }

      #hours-log-table tr:nth-child(even) {
        background-color: #f2f2f2;
      }

      #table-head {
        color: #00734f !important;
        background-color: white !important;
        top: 0;
        position: sticky;
        z-index: 1;
      }

      #hours-log-table th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #00734f;
        color: white;
        top: 0;
        position: sticky;
        z-index: 1;
      }


    </style>