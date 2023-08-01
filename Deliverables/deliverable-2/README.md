# Volunteer Engagement App /TEAM 12 - United for Literacy

The deployment link is:
https://3nyqxuznpf.us-east-2.awsapprunner.com/
​
​
## Description 

​Our implementation is a web application that acts as a centralized location for volunteers and employees of the United For Literacy organization to access important documentation and services that correspond to their daily activities.

The major problems that our partner, United For Literacy, is experiencing are that they do not have a centralized location to exchange vital information between the members of the organization such as volunteers, staff, and administrators. Their current process is tedious and time-consuming, consequently leading to a decline in volunteers working for the organization. Therefore, the application aims to simplify this process by introducing an efficient method to access data relating to the organization’s activities.


## Key Features
Newly implemented features
 * View all their recorded volunteer hours
The user (volunteer) can keep track of all their volunteer hours. 

 * See their achievements/ milestones in their volunteer hours
This is an incentive for the user to volunteer more hours to unlock the achievements. The achievement badges are grayed out unless they have completed them.

 * Access to training resources
The user can access training manuals and download them to their devices.

 * View program instances on the calendar
The user can have a general overview of their volunteer scheduling for the current month. (The calendar events are added by the user for now)

*  View their profile details
The user can now view their own profile data, including their name, user id, status, email, and phone number.

*  View their notifications
The user can now view the notifications and is able to refresh to see new notifications manually

​
## Instructions

A user can login as an admin, staff member, or volunteer. 
Currently, the accounts are pre-created, but in the future, we will implement a sign-up and login functionality. 

Once the user selects the type of account they want to login as, they will see the homepage. 

Here, they can see programs they are enrolled in, training resources, the total volunteer hours they have, and they can write testimonials about their experience. 

Clicking on the green assigned programs module will take users to the programs page where they can see the programs/training they are enrolled in. 

Clicking on one of the assigned modules under training resources will take users to this page as well. 

Clicking on the volunteer hours module will take users to the track volunteer hours page. 

Finally, users can also click on the testimonial module in order to fill out a form and submit a testimonial about their experience (submitting the form is not implemented yet). 

On the left side of the screen, there are multiple tabs the user can visit. 

The homepage is as described above. 

The programs page allows users to see information about their enrolled programs and training. 

Users can click on a specific program to bring up more details about it, such as a description and event files. The resources page has a list of resources that can be downloaded. 

The calendar page has the user’s upcoming events on the calendar, and new events can be added by clicking on a date and entering a name for it. 

The track hours page is where the users can see the volunteer hours they have logged. 

The notifications page provides a user with relevant notifications depending on the programs/training they are enrolled in. 

The messages page allows users to communicate with other users of the platform such as supervisors and other volunteers. 
 
 ## Development requirements


## Prerequisites

- [Node.js](https://nodejs.org/en/) 16.x
  - Recommend [fnm](https://github.com/Schniz/fnm) for Node.js version management
- [pnpm](https://pnpm.io/)
- [Docker](https://www.docker.com/)
- [VS Code](https://code.visualstudio.com/) for the best experience
  - Don't forget to install the recommended VS Code extensions when prompted
  - Enable "Takeover Mode" for Vue type-checking - [Instructions](https://github.com/johnsoncodehk/volar/discussions/471)

## Setup

Run the following commands after cloning this git repository.

```bash
# Install Node.js dependencies
pnpm install
# Clean install (deletes build artifacts)
pnpm run clean
```

Add the following sensitive environment variables to the `.env` file to connect to a SalesForce environment. This application has been developed to integrate with United for Literacy's SalesForce environment as of December 4th, 2022. See [`server/trpc/salesforce-usage.md`](https://github.com/csc301-fall-2022/team-project-5-frontier-college-m/tree/main/server/trpc/salesforce-usage.md) for more details.

```bash
# Leave this as default
DATABASE_URL="postgresql://root:password@localhost:5433/root?schema=public"

# Fill in these values according to Salesforce sandbox
SF_BASE_URL="https://frontiercollege--group467.sandbox.my.salesforce.com"
SF_CLIENT_ID="<SalesForce Client ID>"
SF_CLIENT_SECRET="<SalesForce Client Secret>"
SF_USERNAME="<SalesForce Username>"
SF_PASSWORD="<SalesForce Password>"
```

For more information see [`server/trpc/README.md`](https://github.com/csc301-fall-2022/team-project-5-frontier-college-m/tree/main/server/trpc)

## Development Server

Run the following commands to start the development server.

```bash
# Start the development server
pnpm run dev
```

## Local Database

Run the following commands to start the local database

```bash
# Start a local PostgreSQL instance
# If this command fails make sure to start the Docker app
docker-compose up -d

# Migrate the database schema
pnpm run db-migrate

# Stop the local POstgreSQL instance when you're done
docker-compose down
```



 

 ## Deployment and Github Workflow
​

We have a master branch called “main” which is kept clean and working at all times. 
We split our tasks in the meetings, so we do not have conflicts. Each task will have its own branch name based on the nature of the task. 
After we complete the task in its branch, we will create a pull-request in which we will conduct a group code review on Discord to verify the pull requests and merge them to the main branch. 

We are using AWS ECR with Docker. The following is a detailed list of steps taken in the deployment process:

Create a container ECR in AWS
Create a repository in AWS
Go to the repository you created and press “View Push Commands” and follow the steps to authenticate and push an image to your repository
NOTE: if you are using windows, you may need to enable running 
scripts on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
Create a “Dockerfile” and “.dockerignore” in the root directory of the app for deployment instructions
Build the application using Docker on Visual Studio Code
Push the built image to the repository you just created in the AWS ECR
Create an App Runner with the repository containing the newly pushed image
Set the corresponding port number and any required environment variables (DOCKER_DEFAULT_PLATFORM=linux/amd64). Note that this is required for deployment on an M1 Mac. 
Finally, deploy the application
​
The partners requested deployment to be made on AWS.

 ## Licenses 
​
 Keep this section as brief as possible. You may read this [Github article](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository) for a start.
​
 * What type of license will you apply to your codebase? And why?

We used Apache License, Version 2.0

 * What affect does it have on the development and use of your codebase?
Other people have the freedom to modify, distribute, and use the existing codebase.

Copyright 2023 Heng-Kuan Chen, Sari Hammad, Ibrahim Bess, Meet Patel, Corinne Lee Slew, Fatimeh Hassan Licensed under the Apache License, Version 2.0 (the "License"); 
you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

