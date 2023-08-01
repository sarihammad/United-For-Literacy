import * as z from 'zod'
import { createRouter } from '../createRouter'
import { auth, api } from '../salesforce'

export const createRecordRouter = createRouter().mutation('createRecord', {
  input: z.object({
    userID: z.string(),
    programID: z.string(),
    hours: z.number(),
    days: z.number(),
    date: z.string(),
    notes: z.string()
  }),
  async resolve({ input }) {
    const { userID, programID, hours, days, date, notes } = input

    const fields = {
      Participant_Contact__c: userID,
      Program_Offering__c: programID,
      Volunteer_Hours__c: hours,
      Days_attended__c: days,
      Date_Entered__c: date,
      Notes__c: notes
    }
    const Resp = await api.createRecord('ProgPar__c', fields, auth)
    const response = await Resp.json()

    return response.success
  },
})


