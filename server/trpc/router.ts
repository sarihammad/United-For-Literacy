import { createRootRouter } from './createRouter'
import { helloRouter } from './routers/helloRouter'
import { eventDetailsRouter } from './routers/eventDetailsRouter'
import { announcementsRouter } from './routers/announcementsRouter'
import { userEventsRouter } from './routers/userEventsRouter'
import { userRouter } from './routers/userRouter'
import { createTestimonialRouter } from './routers/testimonialRouter'
import { volunteerHoursRouter } from './routers/volunteerHoursRouter'
import { hoursDetailsRouter } from './routers/hoursDetailsRouter'
import { createRecordRouter } from './routers/inputHoursRouter'

export const router = createRootRouter()
  .merge(helloRouter)
  .merge(eventDetailsRouter)
  .merge(announcementsRouter)
  .merge(userEventsRouter)
  .merge(userRouter)
  .merge(createTestimonialRouter)
  .merge(volunteerHoursRouter)
  .merge(hoursDetailsRouter)
  .merge(createRecordRouter)
