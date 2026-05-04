# TeamSync — Client

React single-page application for TeamSync, a project and task management platform. Supports workspaces, projects, tasks, member management, and role-based permissions with a dark/light theme.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build tool | Vite |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Component library | shadcn/ui (Radix UI) |
| Data fetching | TanStack React Query |
| Global state | Zustand |
| Routing | React Router v7 |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |

---

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui primitives
│   ├── asidebar/        # Sidebar navigation and workspace switcher
│   ├── workspace/       # Domain components (projects, tasks, members)
│   └── theme-toggle.tsx # Light / dark / system theme switcher
├── context/
│   ├── auth-provider.tsx   # Auth context (user, workspace, permissions)
│   ├── theme-provider.tsx  # Theme context with localStorage persistence
│   └── query-provider.tsx  # React Query configuration
├── hooks/               # Custom hooks (API, auth, workspace)
├── lib/                 # Axios client, API functions, utilities
├── page/                # Page components (auth, workspace, errors)
├── routes/              # Route definitions and guards
├── store/               # Zustand auth store
└── types/               # TypeScript type definitions
```

---

## Prerequisites

- Node.js 18+
- TeamSync backend running (see [team-sync-backend](https://github.com/jayan92/team-sync-backend))

---

## Setup & Run

### 1. Clone and install

```bash
git clone https://github.com/jayan92/team-sync-client.git
cd team-sync-client
npm install
```

### 2. Configure environment variables

Create a `.env` file in the root:

```env
VITE_API_BASE_URL=http://localhost:5000
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

### 3. Start development server

```bash
npm run dev
```

App runs at `http://localhost:5173`.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |

---

## Features

- **Authentication** — Email/password login, Google OAuth
- **Workspaces** — Create and switch between multiple workspaces
- **Projects** — Create projects with emoji, manage per workspace
- **Tasks** — Full task lifecycle: Backlog → Todo → In Progress → In Review → Done
- **Members** — Invite members via invite code, assign roles
- **Role-based access** — Owner / Admin / Member permission levels
- **Dark / Light theme** — Toggle in sidebar footer, persisted to localStorage
- **Responsive** — Collapsible sidebar, mobile sheet navigation

---

## Test Account

After running the backend seeder, use these credentials to explore the app:

| Email | Password |
|---|---|
| alice@teamsync.dev | Alice@1234 |
