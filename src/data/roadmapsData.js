/** How many roadmap steps render in the “open” state before locked styling (see RoadmapsSection). */
export const ROADMAP_VISIBLE_COUNT = 3;

export const roadmaps = [
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "From core web to production-ready UI",
    steps: [
      { title: "HTML, CSS & semantic layout", detail: "Structure, accessibility basics, responsive thinking." },
      { title: "JavaScript fundamentals", detail: "ES6+, async flow, DOM, and debugging habits." },
      { title: "Component-driven UI", detail: "Reusable patterns, state locally vs lifted, styling systems." },
      { title: "Data fetching & API integration", detail: "REST, error states, loading UX, and caching awareness." },
      { title: "Testing & quality", detail: "Unit/UI tests, linting, and confident refactors." },
      { title: "Performance & Core Web Vitals", detail: "Bundles, lazy loading, images, and perceived speed." },
      { title: "Build tooling & deployment", detail: "Vite/Webpack mental model, envs, and CI-friendly habits." },
      { title: "Interview depth", detail: "System-like UI discussions, trade-offs, and portfolio narrative." }
    ]
  },
  {
    id: "backend",
    title: "Backend",
    subtitle: "APIs, data, and reliable services",
    steps: [
      { title: "HTTP & API design", detail: "REST shapes, status codes, versioning, and idempotency." },
      { title: "Language runtime & concurrency", detail: "Threads vs async, memory basics, and safe defaults." },
      { title: "Databases & persistence", detail: "SQL modeling, indexes, migrations, and transactions." },
      { title: "Authentication & authorization", detail: "JWT vs sessions, OAuth flows, and least privilege." },
      { title: "Caching & messaging", detail: "Redis patterns, queues, and eventual consistency trade-offs." },
      { title: "Observability", detail: "Structured logging, metrics, tracing, and on-call mindset." },
      { title: "Security essentials", detail: "OWASP top risks, secrets, and dependency hygiene." },
      { title: "Scaling & system design", detail: "Load, sharding, CAP intuition, and interview storytelling." }
    ]
  },
  {
    id: "oop",
    title: "OOP",
    subtitle: "Objects, design principles, and maintainable code",
    steps: [
      { title: "Core concepts", detail: "Classes, objects, encapsulation, and abstraction in practice." },
      { title: "Inheritance & polymorphism", detail: "When to extend vs compose; interfaces and contracts." },
      { title: "SOLID principles", detail: "SRP through DIP—recognizing violations and refactors." },
      { title: "Design patterns", detail: "Common creational, structural, and behavioral patterns—and when not to use them." },
      { title: "Coupling & cohesion", detail: "Module boundaries, dependency direction, and testability." },
      { title: "Modeling real domains", detail: "Entities, value objects, and keeping models honest." },
      { title: "Error handling & invariants", detail: "Defensive APIs, validation, and failure modes." },
      { title: "Interview focus", detail: "Explain trade-offs, sketch class diagrams, and defend design choices." }
    ]
  },
  {
    id: "database",
    title: "Database",
    subtitle: "SQL, modeling, and how data scales",
    steps: [
      { title: "Relational foundations", detail: "Tables, keys, normalization, and when to denormalize." },
      { title: "SQL fluency", detail: "Joins, aggregates, subqueries, and readable query structure." },
      { title: "Indexing & performance", detail: "B-trees, covering indexes, and reading execution plans at a high level." },
      { title: "Transactions & consistency", detail: "ACID, isolation levels, and common concurrency pitfalls." },
      { title: "Schema design", detail: "One-to-many vs many-to-many, soft deletes, and audit fields." },
      { title: "Migrations & evolution", detail: "Backward-compatible changes and zero-downtime habits." },
      { title: "Beyond relational", detail: "When NoSQL fits; caching and read replicas at a conceptual level." },
      { title: "Interview focus", detail: "Design a schema, optimize a slow query, and discuss trade-offs aloud." }
    ]
  },
  {
    id: "dsa",
    title: "DSA",
    subtitle: "Structures, algorithms, and interview problem solving",
    steps: [
      { title: "Complexity & basics", detail: "Big-O intuition, recursion, and choosing the right approach." },
      { title: "Arrays & strings", detail: "Two pointers, sliding window, and in-place techniques." },
      { title: "Hashing & sets", detail: "Frequency maps, deduplication, and amortized O(1) thinking." },
      { title: "Stacks & queues", detail: "Monotonic stack, BFS layering, and parsing patterns." },
      { title: "Trees & graphs", detail: "Traversals, BST properties, shortest path, and cycle detection." },
      { title: "Sorting & searching", detail: "Binary search variants, merge/quick sort trade-offs." },
      { title: "Dynamic programming", detail: "Memoization vs tabulation; classic patterns (knapsack, LCS-style)." },
      { title: "Interview focus", detail: "Clarify constraints, test edge cases, and communicate your reasoning." }
    ]
  }
];

export function getRoadmapById(id) {
  return roadmaps.find((r) => r.id === id) || roadmaps[0];
}
