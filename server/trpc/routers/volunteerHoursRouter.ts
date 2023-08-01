import { z } from 'zod'
import { auth, api } from '../salesforce'
import { createRouter, TRPCError } from '../createRouter'

/**
 * Return volunteer hours, identified by its ownerId (User Id in Salesforce).
 */
export const volunteerHoursRouter = createRouter().query('VolunteerHours', {
  input: z.object({
    userId: z.string()
  }),

  async resolve({ input }) {
    const query = `select Name, Volunteer_Hours__c from ProgPar__c WHERE Participant_Contact__c='${input.userId}'`
    const resp = await api.query(query, auth)
    const data = await resp.json() // returns a json dict of all ids of volunteer records
    if (!resp || resp.status !== 200) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        cause: data
      })
    }

    // if data not available return empty record    
    if (!data || !data.totalSize) {
      return {
        userId: input.userId,
        record: []
      }
    }
    else{
        const story = data.records
        let totalHours = 0
        const recordlist: Set<string> = new Set()

        for (let i=0; i< story.length; i++){
            recordlist.add(story[i].Name)
            if (story[i].Volunteer_Hours__c){
              totalHours += story[i].Volunteer_Hours__c
            }
        }
        return{
            userId: input.userId,
            total_hours: totalHours,
            record: [...recordlist] // returns arraylist of Volunteer prog praticipation ID
        }

        
    }
  }
})



