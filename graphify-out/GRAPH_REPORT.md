# Graph Report - supermarket  (2026-05-26)

## Corpus Check
- 32 files · ~20,010 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 91 nodes · 40 edges · 22 communities detected
- Extraction: 90% EXTRACTED · 10% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]

## God Nodes (most connected - your core abstractions)
1. `Starbucks Design System` - 3 edges
2. `Badge()` - 2 edges
3. `cn()` - 2 edges
4. `SoDoSans Typeface` - 2 edges
5. `SoDoSans Typeface` - 2 edges
6. `@vitejs/plugin-react` - 2 edges
7. `Green Accent` - 1 edges
8. `Frap Floating CTA` - 1 edges
9. `Gold` - 1 edges
10. `Rewards Ceremony` - 1 edges

## Surprising Connections (you probably didn't know these)
- `SoDoSans Typeface` --semantically_similar_to--> `SoDoSans Typeface`  [INFERRED] [semantically similar]
  DESIGN.md → design-system/MASTER.md
- `@vitejs/plugin-react` --conceptually_related_to--> `React Logo`  [INFERRED]
  README.md → src/assets/react.svg
- `@vitejs/plugin-react` --conceptually_related_to--> `Vite Logo`  [INFERRED]
  README.md → src/assets/vite.svg
- `Badge()` --calls--> `cn()`  [INFERRED]
  supermarket-ui\src\components\ui\badge.tsx → supermarket-ui\src\lib\utils.ts

## Hyperedges (group relationships)
- **Admin UI Components** — productform_productform, orderlist_orderlist, admindashboard_admindashboard, adminlogin_adminlogin [INFERRED 0.90]
- **Starbucks Design Elements** — master_sodosans, master_starbucks_green, master_frap_button, master_design_system [EXTRACTED 0.95]

## Communities

### Community 1 - "Community 1"
Cohesion: 0.33
Nodes (6): Confident Friendly Voice, SoDoSans Typeface, Starbucks Design System, Frap Floating Button, SoDoSans Typeface, Starbucks Green Color

### Community 2 - "Community 2"
Cohesion: 0.5
Nodes (2): Badge(), cn()

### Community 6 - "Community 6"
Cohesion: 0.67
Nodes (3): React Logo, @vitejs/plugin-react, Vite Logo

### Community 22 - "Community 22"
Cohesion: 1.0
Nodes (2): Frap Floating CTA, Green Accent

### Community 23 - "Community 23"
Cohesion: 1.0
Nodes (2): Gold, Rewards Ceremony

### Community 24 - "Community 24"
Cohesion: 1.0
Nodes (1): Stacked Platforms Visual

### Community 35 - "Community 35"
Cohesion: 1.0
Nodes (1): Starbucks Green

### Community 36 - "Community 36"
Cohesion: 1.0
Nodes (1): ESLint Configuration

### Community 37 - "Community 37"
Cohesion: 1.0
Nodes (1): Base64 Design System

### Community 38 - "Community 38"
Cohesion: 1.0
Nodes (1): Wrapped Base64 Design System

### Community 39 - "Community 39"
Cohesion: 1.0
Nodes (1): Favicon

### Community 40 - "Community 40"
Cohesion: 1.0
Nodes (1): Icons Spritesheet

### Community 41 - "Community 41"
Cohesion: 1.0
Nodes (1): Hero Image

### Community 42 - "Community 42"
Cohesion: 1.0
Nodes (1): Application Favicon

### Community 43 - "Community 43"
Cohesion: 1.0
Nodes (1): Bluesky Icon

### Community 44 - "Community 44"
Cohesion: 1.0
Nodes (1): Discord Icon

### Community 45 - "Community 45"
Cohesion: 1.0
Nodes (1): Documentation Icon

### Community 46 - "Community 46"
Cohesion: 1.0
Nodes (1): GitHub Icon

### Community 47 - "Community 47"
Cohesion: 1.0
Nodes (1): Social Icon

### Community 48 - "Community 48"
Cohesion: 1.0
Nodes (1): X (Twitter) Icon

### Community 49 - "Community 49"
Cohesion: 1.0
Nodes (1): React Logo

### Community 50 - "Community 50"
Cohesion: 1.0
Nodes (1): Vite SVG Logo

## Knowledge Gaps
- **26 isolated node(s):** `Starbucks Green`, `Green Accent`, `Frap Floating CTA`, `Gold`, `Rewards Ceremony` (+21 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 2`** (4 nodes): `Badge()`, `badge.tsx`, `utils.ts`, `cn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 22`** (2 nodes): `Frap Floating CTA`, `Green Accent`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 23`** (2 nodes): `Gold`, `Rewards Ceremony`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 24`** (2 nodes): `hero.png`, `Stacked Platforms Visual`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 35`** (1 nodes): `Starbucks Green`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 36`** (1 nodes): `ESLint Configuration`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 37`** (1 nodes): `Base64 Design System`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 38`** (1 nodes): `Wrapped Base64 Design System`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 39`** (1 nodes): `Favicon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 40`** (1 nodes): `Icons Spritesheet`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (1 nodes): `Hero Image`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 42`** (1 nodes): `Application Favicon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 43`** (1 nodes): `Bluesky Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 44`** (1 nodes): `Discord Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 45`** (1 nodes): `Documentation Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 46`** (1 nodes): `GitHub Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 47`** (1 nodes): `Social Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 48`** (1 nodes): `X (Twitter) Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 49`** (1 nodes): `React Logo`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 50`** (1 nodes): `Vite SVG Logo`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `Starbucks Green`, `Green Accent`, `Frap Floating CTA` to the rest of the system?**
  _26 weakly-connected nodes found - possible documentation gaps or missing edges._