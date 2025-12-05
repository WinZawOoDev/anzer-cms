# Anzer CMS Project Guide

## Overview
- Anzer CMS is a Strapi v5 backend (Node 18-20) with a Next.js 14 frontend for Anzer IT Healthcare Asia content.
- Docker compose sets up frontend (port 3000), Strapi backend (port 1337), Postgres 14, and optional pgAdmin (port 5050).
- Local development works either via Docker or running backend/frontend independently.

## Repository Layout
- `backend/`: Strapi CMS app (content types, API, admin UI).
- `frontend/`: Next.js 14 site consuming Strapi content.
- `docker-compose.yml`: Dev stack (frontend, Strapi, Postgres, pgAdmin).
- `backend/seed_data/`: Example content and uploads for seeding.
- `backend/public/uploads/`: Media uploads (mounted as a volume in Docker).

## Tech Stack
- Backend: Strapi 5, PostgreSQL (default), Node 18-20, TypeScript.
- Frontend: Next.js 14 (App Router), React 18, TailwindCSS, Radix UI, Framer Motion.
- Tooling: Docker, pgAdmin, ESLint, Prettier, TypeScript.

## Prerequisites
- Node 18-20 and npm/yarn (for non-Docker workflows).
- Docker + Docker Compose (preferred for dev).
- For email sending (Resend) or maps (Leaflet), set the related API keys in your frontend env.

## Environment Variables (backend)
Set these in `backend/.env` (Docker uses this file). Common keys:
- `APP_KEYS` (comma-separated), `JWT_SECRET`, `ADMIN_JWT_SECRET`
- `API_TOKEN_SALT`, `TRANSFER_TOKEN_SALT`
- `DATABASE_CLIENT` (e.g., `postgres`), `DATABASE_URL` or `DATABASE_HOST`, `DATABASE_PORT`, `DATABASE_NAME`, `DATABASE_USERNAME`, `DATABASE_PASSWORD`, `DATABASE_SCHEMA`
- `NODE_ENV` (`development` by default)

## Environment Variables (frontend)
Create `frontend/.env.local` as needed, e.g.:
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:1337
RESEND_API_KEY=...
MAPBOX_TOKEN=... (if used)
```
Adjust keys to match the components you enable (email, maps, analytics, etc.).

## Quick Start (Docker)
1) From repo root: `docker-compose up --build`
2) Strapi: http://localhost:1337 — complete the admin signup on first run.
3) Frontend: http://localhost:3000
4) pgAdmin (optional): http://localhost:5050 (default creds in compose file).

## Local Development Without Docker
Backend (Strapi):
```
cd backend
npm install
npm run develop   # hot reload
# npm run start   # production mode
```
Frontend (Next.js):
```
cd frontend
npm install
npm run dev       # http://localhost:3000
npm run lint      # lint checks
```

## Postgres Local Install (no Docker)
Install Postgres and create a database/user for Strapi.

1) Install Postgres
- macOS (Homebrew): `brew install postgresql@14` then `brew services start postgresql@14`
- Ubuntu/Debian: `sudo apt update && sudo apt install postgresql postgresql-contrib`
- Windows: install Postgres 14 via the official installer and start the service.

2) Create role and database (adjust names if you prefer)
```
sudo -u postgres psql
CREATE ROLE anzer_admin WITH LOGIN PASSWORD 'anzer-admin';
ALTER ROLE anzer_admin CREATEDB;
CREATE DATABASE anzer_cms OWNER anzer_admin;
\q
```

3) Configure backend env (`backend/.env`)
```
DATABASE_CLIENT=postgres
DATABASE_HOST=127.0.0.1
DATABASE_PORT=5432
DATABASE_NAME=anzer_cms
DATABASE_USERNAME=anzer_admin
DATABASE_PASSWORD=anzer-admin
DATABASE_SCHEMA=public
APP_KEYS=replace,with,your,keys
JWT_SECRET=replace
ADMIN_JWT_SECRET=replace
API_TOKEN_SALT=replace
TRANSFER_TOKEN_SALT=replace
```

4) Run Strapi against local Postgres
```
cd backend
npm run develop
```
If you see connection errors, verify the DB is running (`pg_isready`) and that the user/password match.

## Data and Seeding
- Default Postgres settings come from `docker-compose.yml` (see `strapi-db` service env vars).
- To seed example data: `cd backend && npm run seed:example` (uses `backend/seed_data`).
- Media uploads persist in `backend/public/uploads` (mounted in Docker volume).

## Build and Production Notes
- Backend: `npm run build` then `npm run start` (ensure all secrets are set and database reachable).
- Frontend: `npm run build` then `npm run start` with the same API base URL configured.
- For containerized prod, add real secrets to `backend/.env` and consider removing the wildcard CORS in `backend/config/middlewares.ts`.

## Deployment with PM2 (Linux/Windows)
Prereqs: Node 18-20, filled env files (`backend/.env`, `frontend/.env.local`). Build once, then run with PM2.

Shared build steps
```
cd backend && npm ci && npm run build
cd ../frontend && npm ci && npm run build
```

Using the existing PM2 ecosystem files
- Backend: `backend/ecosystem.json` (runs `server.js`, name `cms-be`).
- Frontend: `frontend/ecosystem.json` (runs Next.js standalone server, name `cms-fe`).

Build first, then start each:
```
cd backend && npm ci && npm run build
pm2 start ecosystem.json --env production   # inside backend/

cd ../frontend && npm ci && npm run build
pm2 start ecosystem.json --env production   # inside frontend/

pm2 save
pm2 startup ... # see platform steps below
```
Logs are under each app's `logs/` directory per the ecosystem files.

Linux (systemd)
```
npm install -g pm2
pm2 start npm --name strapi -- run start -- --port 1337 --cwd /home/USER/anzer-cms/backend
pm2 start npm --name frontend -- run start -- --port 3000 --cwd /home/USER/anzer-cms/frontend
pm2 save
sudo env "PATH=$PATH" pm2 startup systemd -u USER --hp /home/USER
```
Replace `USER` and paths as needed. After `pm2 save`, processes auto-start after reboot.

Windows (Command Prompt/PowerShell as Admin)
```
npm install -g pm2
pm2 start npm --name strapi -- run start -- --port 1337 --cwd C:\\path\\to\\anzer-cms\\backend
pm2 start npm --name frontend -- run start -- --port 3000 --cwd C:\\path\\to\\anzer-cms\\frontend
pm2 save
pm2 startup windows
```
Run `pm2 startup windows` in an elevated shell so PM2 installs the startup task.

Notes
- Ensure the ports (1337, 3000) are open in firewalls/security groups.
- Adjust `NEXT_PUBLIC_API_BASE_URL` to the deployed backend URL.
- For HTTPS/SSL, front with Nginx/Apache and proxy to PM2 processes.

## Useful Scripts
Backend (`backend/package.json`): `develop`, `start`, `build`, `deploy`, `seed:example`.
Frontend (`frontend/package.json`): `dev`, `build`, `start`, `lint`.

## Troubleshooting
- Connection errors: confirm Postgres env vars and that `strapi-db` is running.
- Admin login issues: verify `ADMIN_JWT_SECRET` and `APP_KEYS` are set; recreate `.env` if missing.
- CORS/API access: update CORS origins in `backend/config/middlewares.ts` for non-local hosts.
