# Graph Report - supermarket  (2026-06-08)

## Corpus Check
- 58 files · ~51,797 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 135 nodes · 56 edges · 27 communities detected
- Extraction: 91% EXTRACTED · 9% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 61|Community 61]]
- [[_COMMUNITY_Community 62|Community 62]]
- [[_COMMUNITY_Community 63|Community 63]]
- [[_COMMUNITY_Community 64|Community 64]]
- [[_COMMUNITY_Community 65|Community 65]]
- [[_COMMUNITY_Community 66|Community 66]]
- [[_COMMUNITY_Community 67|Community 67]]
- [[_COMMUNITY_Community 68|Community 68]]
- [[_COMMUNITY_Community 69|Community 69]]
- [[_COMMUNITY_Community 70|Community 70]]
- [[_COMMUNITY_Community 71|Community 71]]
- [[_COMMUNITY_Community 72|Community 72]]
- [[_COMMUNITY_Community 73|Community 73]]
- [[_COMMUNITY_Community 74|Community 74]]
- [[_COMMUNITY_Community 75|Community 75]]
- [[_COMMUNITY_Community 76|Community 76]]
- [[_COMMUNITY_Community 77|Community 77]]
- [[_COMMUNITY_Community 78|Community 78]]

## God Nodes (most connected - your core abstractions)
1. `Starbucks Design System` - 3 edges
2. `Header Component` - 2 edges
3. `Badge()` - 2 edges
4. `cn()` - 2 edges
5. `CategoryPage Component` - 2 edges
6. `ShopPage Component` - 2 edges
7. `SoDoSans Typeface` - 2 edges
8. `SoDoSans Typeface` - 2 edges
9. `@vitejs/plugin-react` - 2 edges
10. `Mock Products Data` - 1 edges

## Surprising Connections (you probably didn't know these)
- `SoDoSans Typeface` --semantically_similar_to--> `SoDoSans Typeface`  [INFERRED] [semantically similar]
  DESIGN.md → design-system/MASTER.md
- `@vitejs/plugin-react` --conceptually_related_to--> `React Logo`  [INFERRED]
  README.md → src/assets/react.svg
- `@vitejs/plugin-react` --conceptually_related_to--> `Vite Logo`  [INFERRED]
  README.md → src/assets/vite.svg
- `Badge()` --calls--> `cn()`  [INFERRED]
  supermarket-ui\src\components\ui\badge.tsx → supermarket-ui\src\lib\utils.ts
- `CategoryPage Component` --calls--> `Header Component`  [EXTRACTED]
  supermarket-ui/src/pages/CategoryPage.tsx → supermarket-ui/src/components/layout/Header.tsx

## Hyperedges (group relationships)
- **Supermarket System Definition** — requirements_core_purpose, requirements_product_management, requirements_customer_workflow, requirements_whatsapp_integration, requirements_technical_constraints [EXTRACTED 1.00]

## Communities

### Community 1 - "Community 1"
Cohesion: 0.33
Nodes (6): Confident Friendly Voice, SoDoSans Typeface, Starbucks Design System, Frap Floating Button, SoDoSans Typeface, Starbucks Green Color

### Community 2 - "Community 2"
Cohesion: 0.4
Nodes (5): CategoryPage Component, Mock Products Data, Header Component, Mock Products Data, ShopPage Component

### Community 3 - "Community 3"
Cohesion: 0.5
Nodes (2): Badge(), cn()

### Community 7 - "Community 7"
Cohesion: 0.67
Nodes (3): React Logo, @vitejs/plugin-react, Vite Logo

### Community 33 - "Community 33"
Cohesion: 1.0
Nodes (2): Frap Floating CTA, Green Accent

### Community 34 - "Community 34"
Cohesion: 1.0
Nodes (2): Gold, Rewards Ceremony

### Community 35 - "Community 35"
Cohesion: 1.0
Nodes (1): Stacked Platforms Visual

### Community 36 - "Community 36"
Cohesion: 1.0
Nodes (2): Product Management (Admin), Technical Constraints

### Community 37 - "Community 37"
Cohesion: 1.0
Nodes (2): Customer Workflow & Ordering, WhatsApp Integration

### Community 61 - "Community 61"
Cohesion: 1.0
Nodes (1): Starbucks Green

### Community 62 - "Community 62"
Cohesion: 1.0
Nodes (1): ESLint Configuration

### Community 63 - "Community 63"
Cohesion: 1.0
Nodes (1): Base64 Design System

### Community 64 - "Community 64"
Cohesion: 1.0
Nodes (1): Wrapped Base64 Design System

### Community 65 - "Community 65"
Cohesion: 1.0
Nodes (1): Favicon

### Community 66 - "Community 66"
Cohesion: 1.0
Nodes (1): Icons Spritesheet

### Community 67 - "Community 67"
Cohesion: 1.0
Nodes (1): Hero Image

### Community 68 - "Community 68"
Cohesion: 1.0
Nodes (1): Application Favicon

### Community 69 - "Community 69"
Cohesion: 1.0
Nodes (1): Bluesky Icon

### Community 70 - "Community 70"
Cohesion: 1.0
Nodes (1): Discord Icon

### Community 71 - "Community 71"
Cohesion: 1.0
Nodes (1): Documentation Icon

### Community 72 - "Community 72"
Cohesion: 1.0
Nodes (1): GitHub Icon

### Community 73 - "Community 73"
Cohesion: 1.0
Nodes (1): Social Icon

### Community 74 - "Community 74"
Cohesion: 1.0
Nodes (1): X (Twitter) Icon

### Community 75 - "Community 75"
Cohesion: 1.0
Nodes (1): React Logo

### Community 76 - "Community 76"
Cohesion: 1.0
Nodes (1): Vite SVG Logo

### Community 77 - "Community 77"
Cohesion: 1.0
Nodes (1): Core Purpose

### Community 78 - "Community 78"
Cohesion: 1.0
Nodes (1): Storybook Configuration

## Knowledge Gaps
- **34 isolated node(s):** `Mock Products Data`, `Mock Products Data`, `Starbucks Green`, `Green Accent`, `Frap Floating CTA` (+29 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 3`** (4 nodes): `Badge()`, `badge.tsx`, `utils.ts`, `cn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 33`** (2 nodes): `Frap Floating CTA`, `Green Accent`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 34`** (2 nodes): `Gold`, `Rewards Ceremony`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 35`** (2 nodes): `hero.png`, `Stacked Platforms Visual`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 36`** (2 nodes): `Product Management (Admin)`, `Technical Constraints`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 37`** (2 nodes): `Customer Workflow & Ordering`, `WhatsApp Integration`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 61`** (1 nodes): `Starbucks Green`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 62`** (1 nodes): `ESLint Configuration`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 63`** (1 nodes): `Base64 Design System`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 64`** (1 nodes): `Wrapped Base64 Design System`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 65`** (1 nodes): `Favicon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 66`** (1 nodes): `Icons Spritesheet`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 67`** (1 nodes): `Hero Image`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 68`** (1 nodes): `Application Favicon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 69`** (1 nodes): `Bluesky Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 70`** (1 nodes): `Discord Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 71`** (1 nodes): `Documentation Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 72`** (1 nodes): `GitHub Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 73`** (1 nodes): `Social Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 74`** (1 nodes): `X (Twitter) Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 75`** (1 nodes): `React Logo`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 76`** (1 nodes): `Vite SVG Logo`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 77`** (1 nodes): `Core Purpose`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 78`** (1 nodes): `Storybook Configuration`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `Mock Products Data`, `Mock Products Data`, `Starbucks Green` to the rest of the system?**
  _34 weakly-connected nodes found - possible documentation gaps or missing edges._