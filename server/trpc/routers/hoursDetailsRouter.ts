import { z } from 'zod'
import { auth, api } from '../salesforce'
import { createRouter, TRPCError } from '../createRouter'

/**
 * Return a volunteer hour record object, identified by its id
 *
 */
export const hoursDetailsRouter = createRouter().query('recordDetails', {
  input: z.object({
    recordName: z.string()
  }),

  async resolve({ input }) {
    const qString = `select Date_Entered__c, CreatedById, Program_Name__c, Volunteer_Hours__c, Days_Attended__c, Notes__c, ownerid from ProgPar__c WHERE Name ='${input.recordName}'`
    const resp = await api.query(qString, auth)
    const data = await resp.json()

    if (!resp || resp.status !== 200) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          cause: data
        })
      }
    const story = data.records[0]
    // only parse data if records are available
    if (data.totalSize && data.totalSize > 0) {
        return {
            program: story.Program_Name__c,
            hours: story.Volunteer_Hours__c,
            daysAttended: story.Days_Attended__c,
            recordedDate: story.Date_Entered__c,
            notes: story.Notes__c
        }
    }
  }
})
