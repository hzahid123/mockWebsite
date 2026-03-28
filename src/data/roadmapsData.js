/** First N milestones shown clearly; rest are preview-blurred (full path covered in PKR 2000 mock for this track). */
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
    id: "dotnet",
    title: ".NET",
    subtitle: "C#, ASP.NET Core, and enterprise patterns",
    steps: [
      { title: "C# & .NET fundamentals", detail: "Types, LINQ, async/await, and project structure." },
      { title: "ASP.NET Core pipeline", detail: "Middleware, DI, configuration, and hosting models." },
      { title: "Web APIs & minimal APIs", detail: "Controllers, validation, filters, and OpenAPI." },
      { title: "Entity Framework Core", detail: "DbContext, migrations, relationships, and performance." },
      { title: "Auth in .NET", detail: "Identity, JWT bearer, policies, and secure APIs." },
      { title: "Testing", detail: "xUnit, integration tests with TestServer, and mocking boundaries." },
      { title: "Deployment & cloud", detail: "Docker, Azure/AWS touchpoints, and configuration by environment." },
      { title: "Interview focus", detail: "SOLID in .NET, performance tuning, and architecture talking points." }
    ]
  },
  {
    id: "angular",
    title: "Angular",
    subtitle: "TypeScript, RxJS, and scalable SPAs",
    steps: [
      { title: "TypeScript for Angular", detail: "Strict typing, generics, and decorators mental model." },
      { title: "Components & templates", detail: "Inputs/outputs, lifecycle, and change detection basics." },
      { title: "Modules & standalone APIs", detail: "Routing, lazy loading, and library boundaries." },
      { title: "RxJS & state", detail: "Observables, operators, Subjects, and avoiding memory leaks." },
      { title: "Forms & validation", detail: "Reactive forms, validators, and UX for errors." },
      { title: "HTTP & interceptors", detail: "Services, error handling, and auth headers." },
      { title: "Testing Angular", detail: "Jasmine/Karma, component tests, and TestBed patterns." },
      { title: "Production Angular", detail: "Performance, i18n, a11y, and senior interview themes." }
    ]
  }
];

export function getRoadmapById(id) {
  return roadmaps.find((r) => r.id === id) || roadmaps[0];
}
