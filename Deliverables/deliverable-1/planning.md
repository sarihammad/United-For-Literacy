# **United for Literacy**
> _Note:_ This document will evolve throughout your project. You commit regularly to this file while working on the project (especially edits/additions/deletions to the _Highlights_ section). 
 > **This document will serve as a master plan between your team, your partner and your TA.**

# **Product Details**
 
## **Q1: What is the product?**

We are planning to build on top of a web application that is integrated with United For Literacy's existing infrastructure and serves as the primary application for the organization's volunteers and supervisors to manage and share resources.

Our partner, United for Literacy, previously known as Frontier College, is a national charitable organization that works with volunteers that provide tutoring, education, and reading services as well as participate in special events to accomplish the organization’s mission: to increase literacy across Canada.

We are asked to add the following features:
* Enable volunteers and supervisors to communicate with each other
* Enable volunteers to book meetings and access documents
* Enable supervisors to upload documents or videos
* Enable volunteers to leave testimonials about their volunteering experiences
* Enable volunteers to book their hours and keep track of it
* Add flexibility to users by giving them the choice to integrate the in-app calendar with an external calendar

The mock-up is made with Figma. Please refer to the mockup.pdf file.

## **Q2: Who are your target users?**

The target users for our application are the volunteers and their respective supervisors from the United for Literacy organization. The volunteers are individuals over 16 years old that are enthusiastic, interested in new experiences, and willing to dedicate time to help others with their literacy skills. The supervisors are either experienced volunteers or staff from the United for Literacy organization. They are responsible for overlooking, training, and supporting the new volunteers in the endeavors they may engage in. 

Personas:
A compassionate, proactive individual interested in taking initiative to support their community; someone who would be interested in improving literacy across Canada and hopes to gain more volunteer experience by working with United for Literacy. An available, dedicated staff member with previous volunteer experience and has been working at the organization is matched up with them. Our platform will serve as a medium for the volunteer to sign up, and for the volunteers and supervisors to communicate so they can book meetings, begin training, ask questions, and more.

## **Q3: Why would your users choose your product? What are they using today to solve their problem/need?**

Upon discussing the issues that the organization is facing, specifically in regards to not having a centralized location to exchange vital information between the members of United for Literacy and the decline in volunteers that is being observed, we have brainstormed features to successfully resolve these issues. Previous teams have worked on the implementation of a centralized, information and communication application for the volunteers and supervisors of the organization. However, it is incomplete and so our team is responsible for its continuation and improvement.

The creation of dedicated user accounts for volunteers and staff will enable them to access the relevant information, resources, and features they need to meet their responsibilities on a consistent basis. For volunteers, accessing the platform through an established account enables them to have access to manuals, training resources, and other informative data to assist them in their volunteering experience. 

Additionally, the process of signing-up, booking, and tracking volunteer hours is made easier. Volunteers will also be able to communicate with the staff and leave testimonials about their experiences through in-app messaging. These testimonials can be utilized in the future by the organization to either improve upon or promote their services to the public. On the other hand, staff members will have the necessary administrative tools to manage and monitor the progress of the volunteers. They can upload important documents or videos directly to the platform, organize events, and have a direct line of communication with the volunteers.

Furthermore, our design choices would save the organization’s time and human resources as less staff are required to manage the onboarding process and the training phase of the volunteers. These feature implementations will assist the organization in solving the two major problems it is facing. They promote volunteer retention by simplifying their experience with the organization and its management, while providing all parties of United for Literacy with a centralized hub to exchange information.


## **Q4: What are the user stories that make up the Minumum Viable Product (MVP)?**


### User Story 1
As a volunteer, I want to invite my friends, so they can also participate in the volunteer events.

#### Acceptance Criteria
- The volunteer's friends receive an email with a link to volunteer registration.
- The link sent through the email takes the person to the registration page.
 
### User Story 2
As a staff member, I want to have an account, so I can log in to the application and use all the app features intended for staff members.
 
#### Acceptance Criteria
- The supervisor can choose to sign in to the app under supervisor login.
- The supervisor can sign in successfully with the proper credentials, then they will have access to use all the app features provided for supervisors
- If the supervisor provided wrong credentials or missed one of the fields, an error message is displayed.
  
### User Story 3
As a volunteer, I want to be able to send and receive messages to other volunteers so we can communicate and collaborate together.
 
#### Acceptance Criteria
- A chat room is created for each group of volunteers.
- Each group member can send messages in the chat room and receive all messages sent to this chat room.
- All messages in the room are visible to all group members.
 
### User Story 4 
As a volunteer, I want to access an in-app messaging feature so I can message my supervisors directly.
#### Acceptance Criteria
- An in-app messaging feature is available through the app for the volunteer to send a message to their supervisor directly.
- The supervisor gets the message successfully when the volunteer sends it.
- Supervisors also can send messages to each one of the volunteers they supervise.

### User Story 5
As a volunteer, I want to be able to see the past events I participated in so that I can keep track of my volunteer hours. 
#### Acceptance Criteria
-The details of every event that the volunteer participated in will be recorded on the volunteer logs.
- The total volunteer hours are summed and displayed on the top of the page.

### User Story 6
As an app user, I want to be able to integrate the app calendar with an external calendar so I can see events using that external calendar
#### Acceptance Criteria
- Each app user has access to a link that, when clicked, prompts the user to integrate the app's calendar with an external calendar of their choice
- The app's calendar is integrated successfully with an external calendar of the user's choice and is updated in real-time.
 
### User Story 7
As a volunteer, I want to be able to make a testimonial entry, so I can share my feedback about my experience with a specific program.
#### Acceptance Criteria
- The volunteer has access to a text editor inside the app where they can write a testimonial entry.

### Link to User Stories Artifact:
https://docs.google.com/document/d/1C7tbhtbLTaNxdMnLILhqkRUODk9MRtpObQZJT0MxH5Y/edit#

### Reviewal and Acceptance of User Stories by Partner:
![Acceptance](../d1_pictures/user_story_confirm.png)

## **Q5: Have you decided on how you will build it? Share what you know now or tell us the options you are considering.**

For our implementation, we will be building upon the existing project created by the previous team and adding additional features as requested from our partner. A notable difference in our project compared to the previous edition is that we will be switching from a mobile interface to a desktop interface.

After careful discussion and consideration, we decided to use React as the front-end framework and Django for the back-end framework. We will also be using the Django REST framework to build our APIs as it is the most viable option that will ensure our application is scalable and flexible. We will be using axios to handle HTTP requests, and React Router to utilize dynamic routing and easy navigation for a better user experience. For the database management system, we will be using PostgreSQL. We will also use the partner provided Salesforce Sandbox as our testing environment. Last but not least, we will use Docker to deploy the application. The following diagram is the architecture that we will be following.

![](../d1_pictures/diagram1.jpg)

Source: https://mahdiaaliyya.medium.com/software-architecture-bb44325bf0cf

----
## **Intellectual Property Confidentiality Agreement**
> Note this section is **not marked** but must be completed briefly if you have a partner. If you have any questions, please ask on Piazza.
>  
**By default, you own any work that you do as part of your coursework.** However, some partners may want you to keep the project confidential after the course is complete. As part of your first deliverable, you should discuss and agree upon an option with your partner. Examples include:
1. You can share the software and the code freely with anyone with or without a license, regardless of domain, for any use.
2. You can upload the code to GitHub or other similar publicly available domains.
3. You will only share the code under an open-source license with the partner but agree to not distribute it in any way to any other entity or individual. 
4. You will share the code under an open-source license and distribute it as you wish but only the partner can access the system deployed during the course.
5. You will only reference the work you did in your resume, interviews, etc. You agree to not share the code or software in any capacity with anyone unless your partner has agreed to it.

**Your partner cannot ask you to sign any legal agreements or documents pertaining to non-disclosure, confidentiality, IP ownership, etc.**

We had a discussion pertaining to the Intellectual Property Confidentiality Agreement with our partner. The organization decided to provide us with a level 4 approval, which is described as follows: 

**“4. You will share the code under an open-source license and distribute it as you wish but only the partner can access the system deployed during the course.”**

----

# **Teamwork Details**

## **Q6: Have you met with your team?**

During the group meeting on Zoom, we introduced ourselves and did a few ice-breakers to get to know each other better. We talked about where everyone is from, our interests, our course load for the semester, and learned some fun facts about each other. We were unable to meet in person since we are not all in the same area, but we still got to know each other online. Other than our Zoom meeting, we also have a Discord server for communication.

Fun Facts:
1. We have a member in the group who is double the age of everyone else.
2. There’s a member in the group named Mcgill but he goes to U of T. 
3. We all come from different cultures and backgrounds but agree that soccer should be called football!

![](../d1_pictures/zoom_call.PNG)

## **Q7: What are the roles & responsibilities on the team?**

Roles & Brief Descriptions:
Front-end: UI/UX design, prototyping, focus on what the users see and interact with.
Back-end: Server-side software, implementing features, APIs, site architecture.
Databases: On the back-end side of things, focused on the databases aspect.
Product Manager: Organizes the team, meetings, and communicates with the client.
Partner Liaison: Will attend meetings with partners, keep a line of communication open with them.

Team Members & Roles:

Syeda Fatimeh Hassan:
Front-End/Back-End Developer

I’m interested in full-stack development so I chose to work on both front-end and back-end depending on the needs of my team. I have experience with both but I am interested in learning more and growing my skillset in these areas which is why I decided to contribute in this way and take on those roles. As for non-software related work, I’m a very organized person and I have been trying my best to help facilitate group meetings, create and write in shared documents, and thoroughly read through handouts to make sure we complete everything correctly.

Ibrahim Bess:
DataBases/Backend/Product Manager

I like working with databases, it feels natural to me. Also very interested in Backend programming because I enjoy setting up the core and basis of any job. I want to play the product Manager role because I want to make sure everything is going as planned, I hope I will not be too annoying :) 

Corinne Lee Slew: 
Front-end: 
I have experience with UX and Web design so I would be more interested in working on the front-end and see how this integrates when doing front-end development. I can also work on doing the prototype. But I will be able to help my team members in the backend as well as I am currently taking related courses.

Heng-Kuan Chen:
Front-end/Back-end/Product Manager/Partner Liaison

I’m interested in doing front-end because it’s more interactive. I am also taking courses relevant to the front-end so this would be a good experience implementing the skills that I just learned. I also have experiences in the back-end from relevant courses, so I am open to the role as well. I am one of the Partner Liaison because I have decent communication skills and I’m reachable most of the time. I’m also willing to be the product manager because I am currently taking only 3 courses, so my schedules are more flexible in comparison to my team members. 

Xing Ling:
Front-end/Back-end/Databases
I’m interested in full-stack and databases because I took relevant courses and want to put my knowledge into practice. I’ve only used Django as backend, React frontend, and Postgresql - I hope to learn other tech stacks in this project and expand my skill sets. Non-software related: I will do my best to help other members with their difficulties and do relevant research/googling.

Meet Patel:
Front-end/Partner Liaison
I am interested in front-end development and I have had previous experience in relevant courses. I chose this role as I would like to apply my learning to a more practical, large-scale software implementation. Furthermore, as the dedicated partner liaison, I am responsible for maintaining consistent communication with the partner and relaying important information to either the team or partner. I have a flexible schedule that allows me to attend all the partner meetings.

Sari Hammad:
Front-end/Back-end

I have decent experience with both, and generally don’t have a preference. Seeing as more people on the team prefer front-end and I have slightly less experience with backend, I would like to use this project as an opportunity to improve my back-end development skills - in particular, I would like to learn new technologies that are currently used that I haven’t applied before; for instance, Node/Express, Spring, etc. 


## **Q8: How will you work as a team?**

Team meetings will be held online on Zoom due to the differing schedules and locations of the group members. They will be recurring 2 times a week. The purpose of each meeting is to discuss the progress each member has made throughout the week and what they have worked on. Additionally, the group will talk about any future goals or tasks that need to be accomplished. We may also complete code reviews if needed. Furthermore, the dedicated partner liaisons will bring up any information or requests provided by the partner. They will ask the team if they have any questions for the partner as well so that the liaison can relay it forward. Any quick communication between group members will be facilitated through Discord or email. Our meeting schedule will be 8:30 pm on Wednesdays for a check-in meeting during the week, and we will have longer meetings on Saturdays/Sundays starting at 1 pm to discuss our tasks for the week and complete anything else we need to.

Meeting 1:
A representative from the partner explained what their organization does and what product they are hoping to build. They told us their expectations for the application, explained what has been done so far and how they are hoping to improve it. We asked some questions as well to learn more about what we are going to do and the key features they want us to focus on. We gained access to the previous Github repositories that we will be building from. We also mutually decided on a meeting schedule and discussed how we will communicate moving forward if we want to book meetings or have any further discussions.

  
## **Q9: How will you organize your team?**

We will be using Discord to organize our team. We have created to-do lists and meeting schedules on Discord to keep track of what we need to do as well as our meeting times to make sure everyone is able to attend. We have also created sub-channels on our discord to further divide our team into specific task groups and keep our communication organized. We have a Google Drive for shared documents that everyone has access to, and we will use this to keep track of important documents, including ones we use for planning, minutes, and assignment-related work. We will prioritize tasks according to the needs of the partner as well as the capabilities of the team. Tasks will get assigned to team members based on their strengths, interests, and contributions to the team so far. The status of work will be determined through the success of different features, modules, prototypes, code that will go through several stages of review. We will ensure everyone will contribute as much as they can by discussing the work they have completed and having regular check-ins.

![](../d1_pictures/discord_channel1.PNG) ![](../d1_pictures/discord_channel2.PNG)

## **Q10: What are the rules regarding how your team works?**

Communication will be facilitated through Zoom for team meetings, Microsoft Teams for partner meetings, and Discord/email for any quick communication or questions between team members. We will have weekly check-ins as well as keep each other updated on important tasks or things we are working on. We will expect everyone to be responsive when it comes to discussing meetings or important questions. We hold ourselves to strong expectations and require that team members attend meetings and respond to any communication in a timely manner. Although, we do understand if someone has a schedule conflict or is running late, we will try our best to make accommodations. If it is a recurring issue, we will discuss it and ensure that everyone attends meetings on time and actively participates. We have discussed our expectations for each other and we know how to reach each other if any of us are unresponsive. We also expect everyone to contribute equally and if we feel that someone is lacking, we will make sure to let them know. Other than that, we have discussed our answers for Q8 and Q9 from A1 and have written them down below so everyone in the group is aware of how to reach each other if someone is being particularly unresponsive or is not contributing enough to the team.

Fatimeh: I will be as responsive as possible, and will reply to communication and messages as soon as I can. If I am not responsive when needed, a private message on Discord or an @ping will most likely catch my attention since I have push notifications enabled. If that does not work, my email is also an option as I regularly check that as well. 

Heng-Kuan: I will try to be responsive at any time. I check messages regularly throughout the day. In cases that I am not responsive my team members could @myname on discord to make sure the push notifications can be seen on my phone. At the last resort or in emergencies, my teammates can call me through my personal number(416-475-8492) or email me at “hengkuan.chen@mail.utoronto.ca”. 

Sari: I would personally try my best to be responsive at all times and make this project my biggest priority. In the case that I am not responsive when needed, I urge anyone from my team to reach out and contact me on Discord. I regularly check my Discord and should hopefully always be responsive when needed. As a last resort, my teammates have my phone number and can call or WhatsApp me if necessary.

Corinne: I usually check messages throughout the day but if I’m slow to respond in most cases it means that I’m in class so I’m not checking my phone. If anything urgent, send me a message on discord or email me.

Xing: I have Discord push message on my phone so if anyone @me I’ll respond. If any work is assigned to me or I choose to take any task, I’ll do it. If I didn’t respond on Discord, send me an email because I might have missed the message (worst case).

Meet: I try to be responsive at all times and I make sure that I am frequently reading emails or Discord messages so that I can respond in a timely manner. If I do not respond, anyone from the team can ping me on Discord or send me an email.

Ibrahim: I will check daily and be responsive as much as possible. I want to attend all meetings and do all tasks I have as soon as possible. Will put more effort when needed.
