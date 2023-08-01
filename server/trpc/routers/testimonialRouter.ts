import { z } from 'zod'
import { auth, api } from '../salesforce'
import { createRouter } from '../createRouter'


export const createTestimonialRouter = createRouter().mutation('createTestimonial', {
  input: z.object({
    programID: z.string(),
    role: z.string(),
    otherRole: z.string(),
    topics: z.string(),
    story: z.string(),
    date: z.string()
  }),
  async resolve({ input }) {
    const { programID, role, otherRole, topics, story, date } = input
    
    // date, program and topic are required fields!
    const fields = {
      Program_Offering__c: programID,
      Topics__c: topics,
      Source__c: role,
      Other_Source__c: otherRole,
      Long_Story__c: story,
      Date_Recorded__c: date
    }
    const Resp = await api.createRecord('Testimonial__c', fields, auth)
    
    const response = await Resp.json()

    return response.success

  },
})




/**
 * Return a testimonial, identified by its ownerId (User Id in Salesforce).

export const testimonialRouter = createRouter().query('testimonial', {
  input: z.object({
    userId: z.string()
  }),

  async resolve({ input }) {
    const query = `select CreatedById, Date_Recorded__c, Long_Story__c, Topics__c, ownerid from Testimonial__c WHERE OwnerId='${input.userId}'`
    const resp = await api.query(query, auth)
    const data = await resp.json()
    if (!resp || resp.status !== 200) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        cause: data
      })
    }

    if (!data || !data.totalSize || data.totalSize !== 1) {
      return{
        ownerId: input.userId,
        topic: "-",
        content: "-- No testimonial written yet --",
        date: "--/--/--"
      }
      // throw new TRPCError({
      //   code: 'NOT_FOUND',
      //   message: 'Given testimonial user not found by Id = ' + input.userId
      // })
    }
    const story = data.records[0]

    return {
      ownerId: story.OwnerId,
      topic: story.Topics__c,
      content: story.Long_Story__c,
      date: story.Date_Recorded__c
    }
  }
})
 */