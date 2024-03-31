# Snippet - Code Snippet App w/ Next.js, Prisma and PostgreSQL

<!-- ![Snippet Manager preview image](./public/preview.png) -->

## The Challenge ⚡️

I wanted to finally build an app with Next.js 14, to see if it deserves all the hype.

This is a very small project as of now, and any contributions will be highly appreciated.

Some of the core features and challenges include:

- Integrating Prisma with PostgreSQL for both development and production environments.
- Developing functionality to create, list, delete, and edit code snippets.
- Combining Shadcn/ui, Prisma, and TailwindCSS with Next.js 14.
- Implementing React Hot Toast with server components.

## Project Structure 📁

```bash

|-- prisma
|   |-- dev.db
|   |-- migrations
|   |-- schema.prisma
|-- src
|   |-- actions
|   |   |-- index.ts
|   |-- app
|   |   |-- favicon.ico
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   |-- page.tsx
|   |   |-- snippets
|   |       |-- [id]
|   |       |   |-- edit
|   |       |   |   |-- loading.tsx
|   |       |   |   |-- page.tsx
|   |       |   |-- loading.tsx
|   |       |   |-- not-found.tsx
|   |       |   |-- page.tsx
|   |       |-- new
|   |           |-- page.tsx
|   |-- components
|   |   |-- snippet-create-form.tsx
|   |   |-- snippet-delete-form.tsx
|   |   |-- snippet-edit-form.tsx
|   |   |-- snippet-list.tsx
|   |   |-- theme-provider.tsx
|   |   |-- ui
|   |       |-- alert.tsx
|   |       |-- button.tsx
|   |       |-- dropdown-menu.tsx
|   |       |-- input.tsx
|   |       |-- label.tsx
|   |       |-- loading.tsx
|   |       |-- mode-toggle.tsx
|   |       |-- textarea.tsx
|   |-- db
|   |   |-- index.ts
|   |-- lib
|       |-- utils.ts
```

## Built With ✨

- [Next.js](https://nextjs.org/) - React.js framework
- [Prisma](https://www.prisma.io/) - Next-generation Node.js and TypeScript ORM
- [PostgreSQL](https://www.postgresql.org/) - Open-source relational database
- [Railway](https://railway.app/) - Hosting for PostgreSQL
- [Vercel](https://vercel.com/) - Deployment platform
- [ShadcnUI](https://ui.shadcn.com/) - Open Source UI components
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- TypeScript

## Running Locally 🖥️

Clone the project

```bash
git clone https://github.com/NightClover-code/snippets
```

Go to the project directory

```bash
cd snippets
```

Install dependencies

```bash
yarn install

or

npm install
```

Add Environment Variables

<details>
  <summary>Click to expand!</summary>
  
  - `DATABASE_URL`
</details>

Start the app

```bash
yarn dev
```

## Deployment 🚀

- Client deployed on [Vercel](https://vercel.com/)
- Server deployed on [Railway](https://railway.app/)

## Inspiration & credits ☄️

- [@StephenGrider](hhttps://github.com/StephenGrider) - Project Idea

## Author

- [@achrafdev](https://achrafdev.com)

**Thanks for sharing** 🚀
