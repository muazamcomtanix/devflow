# DevFlow

**DevFlow** is a production-quality, multi-tenant SaaS engineering collaboration platform — built phase-by-phase to demonstrate real-world software architecture, not tutorial CRUD.

Think: Linear + Jira + GitHub Projects with a clean, typed backend and a deliberate engineering foundation.

---

## Why this project exists

Most portfolio projects are CRUD apps. DevFlow is different.

It's being built to demonstrate:

- **Multi-tenant SaaS architecture** — strict tenant isolation, no cross-organization data leaks
- **PostgreSQL relational modeling** — foreign keys, constraints, indexes, transactions
- **RBAC** — role-based access control enforced at the API/service layer, not just the UI
- **REST API design** — versioned, consistent, properly structured
- **Authentication & sessions** — secure password handling, JWT/session strategy
- **TypeScript** — strict mode, ESM, proper type discipline throughout
- **Git workflow** — feature branches, conventional commits, PRs to main
- **Production architecture patterns** — layered services, clean error handling, input validation

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js v24 |
| Language | TypeScript (strict, ESM) |
| Framework | Express 5 |
| Database | PostgreSQL 18 |
| ORM | Prisma 8 RC (contract workflow) |
| Frontend | React 19 + Vite 8 (Phase 15) |
| Auth | bcryptjs + JWT |

---

## Architecture

```
Route → Controller → Validation → Service → Data Access → PostgreSQL
```

- **Routes** — declare endpoints, delegate to controllers
- **Controllers** — thin: parse request, call service, return response
- **Services** — business logic, authorization checks, transactions
- **Prisma contract** — typed database client, schema-driven

---

## Domain (eventual)

```
User
  └── Organization (multi-tenant root)
        ├── Teams
        └── Projects
              └── Issues → Comments, Labels, Attachments
```

A user can belong to multiple organizations with different roles (OWNER, ADMIN, MEMBER, VIEWER).

---

## Project Status

> **Phase 0 — Foundation** ✅  
> **Phase 1 — Database Foundation** 🔜 next

See [`docs/`](./docs/) for architecture decisions, API reference, and database schema.

---

## Getting Started

### Prerequisites

- Node.js v20+
- PostgreSQL 15+

### Setup

```bash
# Clone
git clone https://github.com/muazamcomtanix/devflow.git
cd devflow

# Install server dependencies
cd server
npm install

# Configure environment
cp .env.example .env
# Edit .env with your PostgreSQL connection string

# Start the dev server
npm run dev
```

### Verify

```bash
curl http://localhost:5000/api/v1/health
# → { "success": true, "message": "DevFlow API is running", "timestamp": "..." }
```

---

## Repository Structure

```
devflow/
├── server/
│   ├── src/
│   │   ├── app.ts           # Express app (middleware + route wiring)
│   │   ├── server.ts        # Process entry point
│   │   ├── routes/          # Route declarations (thin)
│   │   ├── controllers/     # Request handlers (thin)
│   │   ├── services/        # Business logic
│   │   ├── middleware/      # Auth, error handling, rate limiting
│   │   ├── validators/      # Input validation schemas
│   │   ├── utils/           # Shared utilities
│   │   └── prisma/          # DB contract, generated types, client
│   ├── prisma.config.ts
│   ├── .env.example
│   └── tsconfig.json
└── client/                  # React frontend (Phase 15)
```

---

## Build Phases

| Phase | Feature | Status |
|---|---|---|
| 0 | Foundation — repo, TypeScript, Express, health endpoint | ✅ Done |
| 1 | Database Foundation — schema, migrations, seed | 🔜 Next |
| 2 | Authentication — register, login, sessions, middleware | 🔜 |
| 3 | Organizations — multi-tenant, RBAC, invitations | 🔜 |
| 4 | Teams | 🔜 |
| 5 | Projects | 🔜 |
| 6 | Issues | 🔜 |
| 7–16 | Sprints, notifications, GitHub integration, CI/CD, frontend... | 🔜 |

---

## License

MIT
