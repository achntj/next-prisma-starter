# Next JS and Prisma Starter

This starter is a simple and sensible repository that gives you the basic boilerplate for your next project. Prisma gives you support almost all popular databases and is easy to use. This starter uses Next.js (+React), TypeScript, TailwindCSS, and Vercel.

## Setup

- Forking this repository makes it much easier. However, incase you want to start from cloning, follow along-

- Clone this repository.

```shell
git clone https://github.com/achintyajha/next-prisma-starter.git <project-name>
```

- Install all dependencies

```shell
    cd <project-name>
    npm i
```

- Setup a cloud-based heroku postgres server.

Follow this guide: <https://dev.to/prisma/how-to-setup-a-free-postgresql-database-on-heroku-1dc1>

Add the database URL to your .env file. (Rename .env.example to .env)

- Push changes to the database

**Make sure to change the prisma/schema.prisma file as per your requirements before proceeding further.**

```shell
    npx prisma db push
```

- Start the development server

```shell
    npm run dev
```

## Deployment

- Login to Vercel and create a new project with your github repository. Add the Database URL (that you added in the .env file) to the vercel environment variables. That's it, your project is now available online!

