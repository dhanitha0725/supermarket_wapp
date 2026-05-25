# Graph Report - .  (2026-05-26)

## Corpus Check
- Corpus is ~21,229 words - fits in a single context window. You may not need a graph.

## Summary
- 135 nodes · 82 edges · 40 communities detected
- Extraction: 91% EXTRACTED · 9% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.82)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Admin Dashboard & Mocks|Admin Dashboard & Mocks]]
- [[_COMMUNITY_Shop & Category Pages|Shop & Category Pages]]
- [[_COMMUNITY_UI Dropdown Menu|UI: Dropdown Menu]]
- [[_COMMUNITY_UI Badge Component|UI: Badge Component]]
- [[_COMMUNITY_Design System Master|Design System: Master]]
- [[_COMMUNITY_Admin Logic|Admin Logic]]
- [[_COMMUNITY_App Entry & Core|App Entry & Core]]
- [[_COMMUNITY_UI Card Component|UI: Card Component]]
- [[_COMMUNITY_Order Management|Order Management]]
- [[_COMMUNITY_UI Button Component|UI: Button Component]]
- [[_COMMUNITY_UI Input Component|UI: Input Component]]
- [[_COMMUNITY_UI Separator Component|UI: Separator Component]]
- [[_COMMUNITY_Auth Login View|Auth: Login View]]
- [[_COMMUNITY_Build Dependencies|Build: Dependencies]]
- [[_COMMUNITY_Auth Protected Routes|Auth: Protected Routes]]
- [[_COMMUNITY_Routing Customer|Routing: Customer]]
- [[_COMMUNITY_UI Hero Section|UI: Hero Section]]
- [[_COMMUNITY_UI Promotional Banners|UI: Promotional Banners]]
- [[_COMMUNITY_UI Floating Action Button|UI: Floating Action Button]]
- [[_COMMUNITY_Marketing About Page|Marketing: About Page]]
- [[_COMMUNITY_Design CTA & Accents|Design: CTA & Accents]]
- [[_COMMUNITY_Design Rewards|Design: Rewards]]
- [[_COMMUNITY_DOM Mounting|DOM Mounting]]
- [[_COMMUNITY_Assets Hero Image|Assets: Hero Image]]
- [[_COMMUNITY_Build Vite Tools|Build: Vite Tools]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]

## God Nodes (most connected - your core abstractions)
1. `AdminDashboard Component` - 5 edges
2. `ShopPage()` - 5 edges
3. `ProductForm()` - 4 edges
4. `CategoryPage Component` - 4 edges
5. `Badge()` - 3 edges
6. `cn()` - 3 edges
7. `Starbucks Design System` - 3 edges
8. `ProductGrid Component` - 3 edges
9. `getStatusIcon()` - 2 edges
10. `cn()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `ProductForm()` --semantically_similar_to--> `OrderList Component`  [INFERRED] [semantically similar]
  D:\supermarket\supermarket-ui\src\components\admin\inventory\ProductForm.tsx → src/components/admin/orders/OrderList.tsx
- `SoDoSans Typeface` --semantically_similar_to--> `SoDoSans Typeface`  [INFERRED] [semantically similar]
  DESIGN.md → design-system/MASTER.md
- `@vitejs/plugin-react` --conceptually_related_to--> `React Logo`  [INFERRED]
  README.md → src/assets/react.svg
- `@vitejs/plugin-react` --conceptually_related_to--> `Vite Logo`  [INFERRED]
  README.md → src/assets/vite.svg
- `Badge()` --calls--> `cn()`  [INFERRED]
  D:\supermarket\supermarket-ui\src\components\ui\badge.tsx → D:\supermarket\supermarket-ui\src\lib\utils.ts

## Communities

### Community 0 - "Admin Dashboard & Mocks"
Cohesion: 0.25
Nodes (7): AdminDashboard Component, MOCK_ORDERS, MOCK_PRODUCTS, handleLogin Function, Order Interface, OrderList Component, ProductForm()

### Community 1 - "Shop & Category Pages"
Cohesion: 0.28
Nodes (8): CategoryPage Component, Mock Products Data, Header Component, Pagination Component, ProductCard Component, ProductGrid Component, Mock Products Data, ShopPage()

### Community 2 - "UI: Dropdown Menu"
Cohesion: 0.48
Nodes (5): cn(), DropdownMenu(), DropdownMenuCheckboxItem(), DropdownMenuPortal(), DropdownMenuTrigger()

### Community 3 - "UI: Badge Component"
Cohesion: 0.33
Nodes (2): Badge(), cn()

### Community 4 - "Design System: Master"
Cohesion: 0.33
Nodes (6): Confident Friendly Voice, SoDoSans Typeface, Starbucks Design System, Frap Floating Button, SoDoSans Typeface, Starbucks Green Color

### Community 5 - "Admin Logic"
Cohesion: 0.6
Nodes (3): handleLogout(), handleOrderStatusChange(), handleProductSubmit()

### Community 6 - "App Entry & Core"
Cohesion: 0.4
Nodes (1): App()

### Community 7 - "UI: Card Component"
Cohesion: 0.67
Nodes (2): CardAction(), cn()

### Community 8 - "Order Management"
Cohesion: 0.67
Nodes (1): getStatusIcon()

### Community 9 - "UI: Button Component"
Cohesion: 0.67
Nodes (1): cn()

### Community 10 - "UI: Input Component"
Cohesion: 0.67
Nodes (1): Input()

### Community 11 - "UI: Separator Component"
Cohesion: 0.67
Nodes (1): cn()

### Community 12 - "Auth: Login View"
Cohesion: 0.67
Nodes (1): AdminLogin()

### Community 13 - "Build: Dependencies"
Cohesion: 0.67
Nodes (3): React Logo, @vitejs/plugin-react, Vite Logo

### Community 14 - "Auth: Protected Routes"
Cohesion: 0.67
Nodes (1): ProtectedRoute()

### Community 15 - "Routing: Customer"
Cohesion: 0.67
Nodes (1): CustomerRoutes()

### Community 16 - "UI: Hero Section"
Cohesion: 0.67
Nodes (1): Hero()

### Community 17 - "UI: Promotional Banners"
Cohesion: 0.67
Nodes (1): PromotionalBanners()

### Community 18 - "UI: Floating Action Button"
Cohesion: 0.67
Nodes (1): FrapButton()

### Community 19 - "Marketing: About Page"
Cohesion: 0.67
Nodes (1): AboutPage()

### Community 20 - "Design: CTA & Accents"
Cohesion: 1.0
Nodes (2): Frap Floating CTA, Green Accent

### Community 21 - "Design: Rewards"
Cohesion: 1.0
Nodes (2): Gold, Rewards Ceremony

### Community 22 - "DOM Mounting"
Cohesion: 1.0
Nodes (2): main.tsx, root div

### Community 23 - "Assets: Hero Image"
Cohesion: 1.0
Nodes (1): Stacked Platforms Visual

### Community 24 - "Build: Vite Tools"
Cohesion: 1.0
Nodes (2): Vite SVG Logo, Vite Framework

### Community 37 - "Community 37"
Cohesion: 1.0
Nodes (1): Starbucks Green

### Community 38 - "Community 38"
Cohesion: 1.0
Nodes (1): ESLint Configuration

### Community 39 - "Community 39"
Cohesion: 1.0
Nodes (1): Base64 Design System

### Community 40 - "Community 40"
Cohesion: 1.0
Nodes (1): Wrapped Base64 Design System

### Community 41 - "Community 41"
Cohesion: 1.0
Nodes (1): Favicon

### Community 42 - "Community 42"
Cohesion: 1.0
Nodes (1): Icons Spritesheet

### Community 43 - "Community 43"
Cohesion: 1.0
Nodes (1): Hero Image

### Community 46 - "Community 46"
Cohesion: 1.0
Nodes (1): Application Favicon

### Community 47 - "Community 47"
Cohesion: 1.0
Nodes (1): Bluesky Icon

### Community 48 - "Community 48"
Cohesion: 1.0
Nodes (1): Discord Icon

### Community 49 - "Community 49"
Cohesion: 1.0
Nodes (1): Documentation Icon

### Community 50 - "Community 50"
Cohesion: 1.0
Nodes (1): GitHub Icon

### Community 51 - "Community 51"
Cohesion: 1.0
Nodes (1): Social Icon

### Community 52 - "Community 52"
Cohesion: 1.0
Nodes (1): X (Twitter) Icon

### Community 53 - "Community 53"
Cohesion: 1.0
Nodes (1): React Logo

## Knowledge Gaps
- **35 isolated node(s):** `Starbucks Green`, `Green Accent`, `Frap Floating CTA`, `Gold`, `Rewards Ceremony` (+30 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `UI: Badge Component`** (6 nodes): `Badge()`, `badge.tsx`, `utils.ts`, `badge.tsx`, `utils.ts`, `cn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `App Entry & Core`** (5 nodes): `App()`, `App.tsx`, `main.tsx`, `App.tsx`, `main.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI: Card Component`** (4 nodes): `CardAction()`, `cn()`, `card.tsx`, `card.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Order Management`** (3 nodes): `OrderList.tsx`, `getStatusIcon()`, `OrderList.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI: Button Component`** (3 nodes): `cn()`, `button.tsx`, `button.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI: Input Component`** (3 nodes): `input.tsx`, `Input()`, `input.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI: Separator Component`** (3 nodes): `separator.tsx`, `cn()`, `separator.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Auth: Login View`** (3 nodes): `AdminLogin()`, `AdminLogin.tsx`, `AdminLogin.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Auth: Protected Routes`** (3 nodes): `ProtectedRoute.tsx`, `ProtectedRoute()`, `ProtectedRoute.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Routing: Customer`** (3 nodes): `CustomerRoutes()`, `CustomerRoutes.tsx`, `CustomerRoutes.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI: Hero Section`** (3 nodes): `Hero.tsx`, `Hero.tsx`, `Hero()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI: Promotional Banners`** (3 nodes): `PromotionalBanners.tsx`, `PromotionalBanners.tsx`, `PromotionalBanners()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI: Floating Action Button`** (3 nodes): `FrapButton.tsx`, `FrapButton.tsx`, `FrapButton()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Marketing: About Page`** (3 nodes): `AboutPage()`, `AboutPage.tsx`, `AboutPage.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Design: CTA & Accents`** (2 nodes): `Frap Floating CTA`, `Green Accent`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Design: Rewards`** (2 nodes): `Gold`, `Rewards Ceremony`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `DOM Mounting`** (2 nodes): `main.tsx`, `root div`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Assets: Hero Image`** (2 nodes): `hero.png`, `Stacked Platforms Visual`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Build: Vite Tools`** (2 nodes): `Vite SVG Logo`, `Vite Framework`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 37`** (1 nodes): `Starbucks Green`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 38`** (1 nodes): `ESLint Configuration`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 39`** (1 nodes): `Base64 Design System`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 40`** (1 nodes): `Wrapped Base64 Design System`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (1 nodes): `Favicon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 42`** (1 nodes): `Icons Spritesheet`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 43`** (1 nodes): `Hero Image`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 46`** (1 nodes): `Application Favicon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 47`** (1 nodes): `Bluesky Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 48`** (1 nodes): `Discord Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 49`** (1 nodes): `Documentation Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 50`** (1 nodes): `GitHub Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 51`** (1 nodes): `Social Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 52`** (1 nodes): `X (Twitter) Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 53`** (1 nodes): `React Logo`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `Starbucks Green`, `Green Accent`, `Frap Floating CTA` to the rest of the system?**
  _35 weakly-connected nodes found - possible documentation gaps or missing edges._