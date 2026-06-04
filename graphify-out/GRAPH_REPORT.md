# Graph Report - .  (2026-06-05)

## Corpus Check
- 68 files · ~50,549 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 163 nodes · 90 edges · 45 communities detected
- Extraction: 89% EXTRACTED · 11% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.82)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Admin Dashboard & Product Management|Admin Dashboard & Product Management]]
- [[_COMMUNITY_Product Catalog & Shop Views|Product Catalog & Shop Views]]
- [[_COMMUNITY_UI Dropdown Components|UI Dropdown Components]]
- [[_COMMUNITY_UI Badge & Utility Functions|UI Badge & Utility Functions]]
- [[_COMMUNITY_Brand Design System (Starbucks Style)|Brand Design System (Starbucks Style)]]
- [[_COMMUNITY_Admin Actions & Data Flow|Admin Actions & Data Flow]]
- [[_COMMUNITY_Application Shell & Main Entry|Application Shell & Main Entry]]
- [[_COMMUNITY_UI Card Layouts|UI Card Layouts]]
- [[_COMMUNITY_Admin Order Management|Admin Order Management]]
- [[_COMMUNITY_UI Button Components|UI Button Components]]
- [[_COMMUNITY_UI Input Components|UI Input Components]]
- [[_COMMUNITY_UI Separator Components|UI Separator Components]]
- [[_COMMUNITY_Admin Authentication|Admin Authentication]]
- [[_COMMUNITY_Customer Homepage|Customer Homepage]]
- [[_COMMUNITY_Development Stack Logos|Development Stack Logos]]
- [[_COMMUNITY_Routing Security & Guards|Routing Security & Guards]]
- [[_COMMUNITY_Customer-Facing Routes|Customer-Facing Routes]]
- [[_COMMUNITY_Hero Section Components|Hero Section Components]]
- [[_COMMUNITY_Promotional Marketing Banners|Promotional Marketing Banners]]
- [[_COMMUNITY_Interactive Frap UI|Interactive Frap UI]]
- [[_COMMUNITY_About Us Content|About Us Content]]
- [[_COMMUNITY_Storybook Component Documentation|Storybook Component Documentation]]
- [[_COMMUNITY_System Requirements & Technical Specs|System Requirements & Technical Specs]]
- [[_COMMUNITY_Brand Green Accents|Brand Green Accents]]
- [[_COMMUNITY_Loyalty & Rewards Visuals|Loyalty & Rewards Visuals]]
- [[_COMMUNITY_React DOM Initialization|React DOM Initialization]]
- [[_COMMUNITY_Visual Hero Assets|Visual Hero Assets]]
- [[_COMMUNITY_Vite Framework Boilerplate|Vite Framework Boilerplate]]
- [[_COMMUNITY_Order Workflow & WhatsApp Integration|Order Workflow & WhatsApp Integration]]
- [[_COMMUNITY_Product Data & Schema Definition|Product Data & Schema Definition]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 54|Community 54]]
- [[_COMMUNITY_Community 55|Community 55]]
- [[_COMMUNITY_Community 56|Community 56]]
- [[_COMMUNITY_Community 57|Community 57]]

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

## Hyperedges (group relationships)
- **Supermarket System Definition** — requirements_core_purpose, requirements_product_management, requirements_customer_workflow, requirements_whatsapp_integration, requirements_technical_constraints [EXTRACTED 1.00]

## Communities

### Community 0 - "Admin Dashboard & Product Management"
Cohesion: 0.25
Nodes (7): AdminDashboard Component, MOCK_ORDERS, MOCK_PRODUCTS, handleLogin Function, Order Interface, OrderList Component, ProductForm()

### Community 1 - "Product Catalog & Shop Views"
Cohesion: 0.28
Nodes (8): CategoryPage Component, Mock Products Data, Header Component, Pagination Component, ProductCard Component, ProductGrid Component, Mock Products Data, ShopPage()

### Community 2 - "UI Dropdown Components"
Cohesion: 0.48
Nodes (5): cn(), DropdownMenu(), DropdownMenuCheckboxItem(), DropdownMenuPortal(), DropdownMenuTrigger()

### Community 3 - "UI Badge & Utility Functions"
Cohesion: 0.33
Nodes (2): Badge(), cn()

### Community 4 - "Brand Design System (Starbucks Style)"
Cohesion: 0.33
Nodes (6): Confident Friendly Voice, SoDoSans Typeface, Starbucks Design System, Frap Floating Button, SoDoSans Typeface, Starbucks Green Color

### Community 5 - "Admin Actions & Data Flow"
Cohesion: 0.6
Nodes (3): handleLogout(), handleOrderStatusChange(), handleProductSubmit()

### Community 6 - "Application Shell & Main Entry"
Cohesion: 0.4
Nodes (1): App()

### Community 7 - "UI Card Layouts"
Cohesion: 0.67
Nodes (2): CardAction(), cn()

### Community 8 - "Admin Order Management"
Cohesion: 0.67
Nodes (1): getStatusIcon()

### Community 9 - "UI Button Components"
Cohesion: 0.67
Nodes (1): cn()

### Community 10 - "UI Input Components"
Cohesion: 0.67
Nodes (1): Input()

### Community 11 - "UI Separator Components"
Cohesion: 0.67
Nodes (1): cn()

### Community 12 - "Admin Authentication"
Cohesion: 0.67
Nodes (1): AdminLogin()

### Community 13 - "Customer Homepage"
Cohesion: 0.67
Nodes (1): HomePage()

### Community 14 - "Development Stack Logos"
Cohesion: 0.67
Nodes (3): React Logo, @vitejs/plugin-react, Vite Logo

### Community 15 - "Routing Security & Guards"
Cohesion: 0.67
Nodes (1): ProtectedRoute()

### Community 16 - "Customer-Facing Routes"
Cohesion: 0.67
Nodes (1): CustomerRoutes()

### Community 17 - "Hero Section Components"
Cohesion: 0.67
Nodes (1): Hero()

### Community 18 - "Promotional Marketing Banners"
Cohesion: 0.67
Nodes (1): PromotionalBanners()

### Community 19 - "Interactive Frap UI"
Cohesion: 0.67
Nodes (1): FrapButton()

### Community 20 - "About Us Content"
Cohesion: 0.67
Nodes (1): AboutPage()

### Community 21 - "Storybook Component Documentation"
Cohesion: 0.67
Nodes (1): Button()

### Community 22 - "System Requirements & Technical Specs"
Cohesion: 0.67
Nodes (3): Storybook Configuration, React Root, Core Purpose

### Community 23 - "Brand Green Accents"
Cohesion: 1.0
Nodes (2): Frap Floating CTA, Green Accent

### Community 24 - "Loyalty & Rewards Visuals"
Cohesion: 1.0
Nodes (2): Gold, Rewards Ceremony

### Community 25 - "React DOM Initialization"
Cohesion: 1.0
Nodes (2): main.tsx, root div

### Community 26 - "Visual Hero Assets"
Cohesion: 1.0
Nodes (1): Stacked Platforms Visual

### Community 27 - "Vite Framework Boilerplate"
Cohesion: 1.0
Nodes (2): Vite SVG Logo, Vite Framework

### Community 28 - "Order Workflow & WhatsApp Integration"
Cohesion: 1.0
Nodes (2): Customer Workflow & Ordering, WhatsApp Integration

### Community 29 - "Product Data & Schema Definition"
Cohesion: 1.0
Nodes (2): Product Management (Admin), Technical Constraints

### Community 41 - "Community 41"
Cohesion: 1.0
Nodes (1): Starbucks Green

### Community 42 - "Community 42"
Cohesion: 1.0
Nodes (1): ESLint Configuration

### Community 43 - "Community 43"
Cohesion: 1.0
Nodes (1): Base64 Design System

### Community 44 - "Community 44"
Cohesion: 1.0
Nodes (1): Wrapped Base64 Design System

### Community 45 - "Community 45"
Cohesion: 1.0
Nodes (1): Favicon

### Community 46 - "Community 46"
Cohesion: 1.0
Nodes (1): Icons Spritesheet

### Community 47 - "Community 47"
Cohesion: 1.0
Nodes (1): Hero Image

### Community 50 - "Community 50"
Cohesion: 1.0
Nodes (1): Application Favicon

### Community 51 - "Community 51"
Cohesion: 1.0
Nodes (1): Bluesky Icon

### Community 52 - "Community 52"
Cohesion: 1.0
Nodes (1): Discord Icon

### Community 53 - "Community 53"
Cohesion: 1.0
Nodes (1): Documentation Icon

### Community 54 - "Community 54"
Cohesion: 1.0
Nodes (1): GitHub Icon

### Community 55 - "Community 55"
Cohesion: 1.0
Nodes (1): Social Icon

### Community 56 - "Community 56"
Cohesion: 1.0
Nodes (1): X (Twitter) Icon

### Community 57 - "Community 57"
Cohesion: 1.0
Nodes (1): React Logo

## Knowledge Gaps
- **41 isolated node(s):** `Starbucks Green`, `Green Accent`, `Frap Floating CTA`, `Gold`, `Rewards Ceremony` (+36 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `UI Badge & Utility Functions`** (6 nodes): `Badge()`, `badge.tsx`, `utils.ts`, `badge.tsx`, `utils.ts`, `cn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Application Shell & Main Entry`** (5 nodes): `App()`, `App.tsx`, `main.tsx`, `App.tsx`, `main.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Card Layouts`** (4 nodes): `CardAction()`, `cn()`, `card.tsx`, `card.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Admin Order Management`** (3 nodes): `OrderList.tsx`, `getStatusIcon()`, `OrderList.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Button Components`** (3 nodes): `cn()`, `button.tsx`, `button.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Input Components`** (3 nodes): `input.tsx`, `Input()`, `input.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Separator Components`** (3 nodes): `separator.tsx`, `cn()`, `separator.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Admin Authentication`** (3 nodes): `AdminLogin()`, `AdminLogin.tsx`, `AdminLogin.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Customer Homepage`** (3 nodes): `HomePage.tsx`, `HomePage()`, `HomePage.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Routing Security & Guards`** (3 nodes): `ProtectedRoute.tsx`, `ProtectedRoute()`, `ProtectedRoute.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Customer-Facing Routes`** (3 nodes): `CustomerRoutes()`, `CustomerRoutes.tsx`, `CustomerRoutes.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Hero Section Components`** (3 nodes): `Hero.tsx`, `Hero.tsx`, `Hero()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Promotional Marketing Banners`** (3 nodes): `PromotionalBanners.tsx`, `PromotionalBanners.tsx`, `PromotionalBanners()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Interactive Frap UI`** (3 nodes): `FrapButton.tsx`, `FrapButton.tsx`, `FrapButton()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `About Us Content`** (3 nodes): `AboutPage()`, `AboutPage.tsx`, `AboutPage.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Storybook Component Documentation`** (3 nodes): `Button()`, `Button.tsx`, `Button.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Brand Green Accents`** (2 nodes): `Frap Floating CTA`, `Green Accent`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Loyalty & Rewards Visuals`** (2 nodes): `Gold`, `Rewards Ceremony`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `React DOM Initialization`** (2 nodes): `main.tsx`, `root div`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Visual Hero Assets`** (2 nodes): `hero.png`, `Stacked Platforms Visual`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Vite Framework Boilerplate`** (2 nodes): `Vite SVG Logo`, `Vite Framework`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Order Workflow & WhatsApp Integration`** (2 nodes): `Customer Workflow & Ordering`, `WhatsApp Integration`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Product Data & Schema Definition`** (2 nodes): `Product Management (Admin)`, `Technical Constraints`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (1 nodes): `Starbucks Green`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 42`** (1 nodes): `ESLint Configuration`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 43`** (1 nodes): `Base64 Design System`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 44`** (1 nodes): `Wrapped Base64 Design System`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 45`** (1 nodes): `Favicon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 46`** (1 nodes): `Icons Spritesheet`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 47`** (1 nodes): `Hero Image`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 50`** (1 nodes): `Application Favicon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 51`** (1 nodes): `Bluesky Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 52`** (1 nodes): `Discord Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 53`** (1 nodes): `Documentation Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 54`** (1 nodes): `GitHub Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 55`** (1 nodes): `Social Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 56`** (1 nodes): `X (Twitter) Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 57`** (1 nodes): `React Logo`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `Starbucks Green`, `Green Accent`, `Frap Floating CTA` to the rest of the system?**
  _41 weakly-connected nodes found - possible documentation gaps or missing edges._