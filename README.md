# United for Literacy
​
## Description 

A web application that acts as a centralized location for volunteers and employees of the United For Literacy organization to access important documentation and services that correspond to their daily activities. 

## Preview
<img width="1440" alt="Screenshot 2023-12-11 at 16 18 58" src="https://github.com/sarihammad/United-For-Literacy/assets/63919507/e27299f3-f75e-4991-b48e-5e1a461aa930">

![unnamed](https://github.com/sarihammad/United-For-Literacy/assets/63919507/63546638-c6f4-4106-b632-fe63818b452b)


<img width="1440" alt="Screenshot 2023-12-11 at 16 15 44" src="https://github.com/sarihammad/United-For-Literacy/assets/63919507/6887cea7-66d5-4cc5-bb25-d928ba53fe6f">
<img width="1439" alt="Screenshot 2023-12-11 at 16 17 20" src="https://github.com/sarihammad/United-For-Literacy/assets/63919507/7c39dd8e-56e9-4234-9c7a-fe3342caeee7">
<img width="1440" alt="Screenshot 2023-12-11 at 16 15 57" src="https://github.com/sarihammad/United-For-Literacy/assets/63919507/d58ebb0c-cad1-46c9-ad5d-d2136d31a68f">



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
