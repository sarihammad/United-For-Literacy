**1. Summary of your software (you can reuse the same submission in D1 if it hasn’t changed).
a. One paragraph for the problem & partner (if applicable)
b. One paragraph introducing any existing software/infrastructure (if applicable)**

The major problems that our partner, United For Literacy, is experiencing are that they do not have a centralized location to exchange vital information between the members of the organization such as volunteers, staff, and administrators. The creation of dedicated user accounts for volunteers and staff will enable them to access the relevant information, resources, and features they need to meet their responsibilities on a consistent basis. For volunteers, accessing the platform through an established account enables them to have access to manuals, training resources, and other informative data to assist them in their volunteering experience.
The existing web app was primarily built :
Nodejs and Typescript
Frontend: Nuxt framework, uses front-end framework Vuejs with TypeScript
Backend: tRPC - a Typescript library
PostgresSQL for info not stored on Salesforce

**2. 1-4 paragraph(s) on how you decided to divide the project. Ideally, this will be accompanied by a software architecture diagram and how each component connects to the others.**

We found that the work that corresponded with our stories was mainly front-end focused, so we collectively decided to dedicate two of our three sub-teams to work on the front-end and the other on the back-end. The two front-end teams focused on building the interfaces for all of the pages of our web app we had initially designed in our mockup. The back-end implemented a simple UI for the login and homepages and focused on the logic in order to connect these pages, fetch data from the database according to the user that was logged in, and then update the homepage accordingly to display this data. 

**3. One paragraph for part(s) each sub-team is responsible for.**

Sub-team 12.1: The first front-end team was responsible for making the user interface of the web app. We were tasked to make the web app responsive so that both desktop and mobile users can easily access and interact with it. Additionally, we had to add more pages to the web app to cater for the new features that our clients asked us to implement. These include pages to write a testimonial, view a user’s profile, track volunteer hours, view notifications, access resources and more.

Sub-team 12.2: Our team focused on creating a connected login page and homepage with updated user data fetched from the database depending on the user that was logged in. We created a simple UI to display the functionality of our logic and connections between the two pages, which are both an essential part of what the partners wanted us to include in the application. We focused on mimicking the login functionality that we will develop further along in the development process, as well as creating a connection to the homepage so the data displayed depends on the user that is logged in.

Sub-team 12.3: Initially, we were planning on being responsible for connecting data with the application, i.e., working with the database. Upon starting, we had realized that there was not much to be done based on the existing implementation of the web app, so we also decided to work on the front-end with a focus on implementing the UI of pages that would require some back-end/database work, specifically the resources and messages pages. The resources pages include relevant resources volunteers can access, and the messages pages is a page with in-app messaging features. We note that the messages page is partially implemented - one can send messages to have them displayed on the UI without having them saved to a database.
