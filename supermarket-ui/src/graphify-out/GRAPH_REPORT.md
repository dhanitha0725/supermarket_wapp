# Graph Report - supermarket-ui\src  (2026-05-26)

## Corpus Check
- 18 files · ~5,507 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 39 nodes · 23 edges · 1 communities detected
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 1|Community 1]]

## God Nodes (most connected - your core abstractions)
1. `Badge()` - 2 edges
2. `cn()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Badge()` --calls--> `cn()`  [INFERRED]
  supermarket-ui\src\components\ui\badge.tsx → supermarket-ui\src\lib\utils.ts

## Communities

### Community 1 - "Community 1"
Cohesion: 0.5
Nodes (2): Badge(), cn()

## Knowledge Gaps
- **Thin community `Community 1`** (4 nodes): `Badge()`, `badge.tsx`, `utils.ts`, `cn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Not enough signal to generate questions. This usually means the corpus has no AMBIGUOUS edges, no bridge nodes, no INFERRED relationships, and all communities are tightly cohesive. Add more files or run with --mode deep to extract richer edges._