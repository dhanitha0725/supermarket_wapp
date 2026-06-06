# Supermarket Project Mandates

## Backend Architecture: Vertical Slice Architecture (VSA)

The backend MUST follow a Vertical Slice Architecture. This promotes scalability and maintainability by grouping logic by feature rather than by technical layer.

### Core Principles

1.  **Feature Grouping:** All code related to a specific feature (API routes, business logic, data access) must live within a dedicated feature directory under `src/features/`.
2.  **Slices over Layers:** Avoid generic "controllers", "services", or "repositories" folders. Each file in a feature folder should represent a single action/command/query.
3.  **Shared Logic:** Common utilities, shared middleware, and the Prisma client should live in `src/common/` or `src/lib/`.
4.  **Independence:** Slices should be as independent as possible. Minimizing cross-feature dependencies prevents a "ball of mud" architecture.

### Directory Structure Example

```
src/
├── server.ts (Entry point)
├── app.ts (App configuration)
├── prisma.ts (Shared Prisma client)
└── features/
    └── products/
        ├── products.router.ts (Feature routes)
        ├── get-products.ts (Action: Fetch products)
        └── create-product.ts (Action: Add product)
```

## Database Standards

- **PostgreSQL:** Primary database.
- **Prisma:** ORM. Use plural model names and snake_case fields.
- **UUID:** Mandatory for all Primary Keys.

## Frontend Standards

- **React-Vite:** Foundation.
- **Vanilla CSS:** Preferred for styling.
- **Shadcn/UI:** Component library.
- **Storybook:** For component documentation and isolated testing.
