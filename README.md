# Welcome to the Green Bee System
> There are two main parts to this sytem. 

- The frontend is created in SvelteKit and is located within the ./greenbee folder.
- The backend is created in Supabase and uses a postgres database, this is located in the ./supabase folder. 

- Git Clone this directory and follow these steps to get the Project up and running.

## The Frontend 
> Made in SvelteKit
Requirements: 
- node
- npm

#### To get it up and running: 

1. CD into ./app directory
2. Run commands in directory

```
npm install
npm run dev
```
3. Create a `.env` file and enter in the credentials from your local instance of Supabase
```
PUBLIC_SUPABASE_URL=<API_KEY>
PUBLIC_SUPABASE_ANON_KEY=<ANON_KEY>
```

## The Endback
> Made in Supabase
Requirements: 
- Postgres
- Docker
- Supabase CLI (local)

#### To get it up and running: 

1. Start docker desktop.
2. CD into ./supabase directory
3. Run command in directory

```
supabase start
```

or:
Run this to see if everything is up and running

```
supabase status
```




