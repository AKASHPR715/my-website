<div align="center">

# ⚡ Akash PR — Premium Personal Portfolio

**Automation Engineer · AI Engineer · Data Science**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-slate?style=flat-square)](LICENSE)

*A premium, dark-first personal portfolio website — built to communicate technical depth, not just list technologies.*

[**Live Demo**](https://akashpr.vercel.app) · [**LinkedIn**](https://www.linkedin.com/in/akashpr715/) · [**GitHub**](https://github.com/AKASHPR715)

</div>

---

## ✨ What Makes This Different

This is **not a generic developer template**. Every design and architectural decision was made to reflect the actual work of an engineer who builds intelligent systems.

- 🔬 **Interactive Engineering Lab** — step-through RAG pipeline, live multi-agent simulator, real-time ML predictor
- 🕸️ **Custom SVG Tech Nexus Visual** — interactive node graph in the hero (not a stock photo or avatar)
- 🏗️ **Inline Architecture Diagrams** — clickable stage-by-stage breakdowns for flagship projects (TaxMate, Teams Agent)
- 📐 **Neuro-Symbolic boundary labeling** — deterministic vs. probabilistic component color-coding across all system diagrams
- 📋 **Honest content standards** — no fabricated metrics, no fake testimonials, no inflated claims
- 🗂️ **Structured data files** — all professional content in `/data/*.ts`, zero code changes needed to update bio/experience/projects

---

## 🗺️ Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Home — full single-page experience |
| `/about` | Biography, career timeline, core pillars |
| `/experience` | Professional timeline with expandable deep-dives |
| `/projects` | Filterable project index with keyword search |
| `/projects/[slug]` | Individual deep-dive for each of the 6 projects |
| `/lab` | Interactive Engineering Lab (3 live demos) |
| `/skills` | Categorized skill matrix — no fake % bars |
| `/contact` | Channel cards + genuine mailto dispatch form |
| `/sitemap.xml` | Auto-generated XML sitemap |

---

## 🔬 Interactive Engineering Lab

Three fully client-side interactive demonstrations — **no API keys, no backend, no cost**:

### Demo A — RAG Pipeline Visualizer
Walk through the full Retrieval-Augmented Generation lifecycle:

```
Document Intake → Chunking → Vector Embedding → Cosine Similarity Search → Context Retrieval → Grounded LLM Response
```

- Switchable knowledge bases (Indian Tax Law / Enterprise LLM Safety)
- Simulated chunk vectors, similarity scores, and relevance pruning
- Prompt injection context preview and grounded answer output

### Demo B — AI Agent Workflow Simulator

Animated LangGraph-style multi-agent state machine with two preset scenarios:

| Scenario | Agents | Output |
|----------|--------|--------|
| TaxMate Tax Advisory | Ingestion → Orchestrator → Extraction → Tax Engine → RAG Advisor → ITR Schema | Comparative regime analysis + ITR JSON |
| Teams Intelligence Agent | Teams Receiver → Thread Parser → LLM Summarizer → Task Extractor → To Do Sync | Prioritized Microsoft To Do tasks |

- Sequential node activation with live telemetry terminal
- Real tool call signatures (e.g. `state_graph.route()`, `ms_graph.create_todo_tasks()`)
- Synthesized output artifact on completion

### Demo C — Data Science Explorer

Full ML pipeline demo based on the WhatsApp Chat Analysis project:

- **Recharts AreaChart** — hourly message volume vs. response latency
- **K-Means cluster personas** — 3 behavioral cohorts (Silhouette: 0.6019)
- **Interactive Random Forest predictor** — 3 feature sliders (message volume, latency, lexical richness) → live engagement tier classification

---

## 🏗️ Project Architecture

```
d:/portfolio/
│
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx                # Root layout, metadata, SEO
│   ├── page.tsx                  # Home (all homepage sections)
│   ├── sitemap.ts                # Auto-generated XML sitemap
│   ├── about/page.tsx
│   ├── experience/page.tsx
│   ├── projects/
│   │   ├── page.tsx              # Projects index + filter/search
│   │   └── [slug]/page.tsx       # Dynamic project detail pages
│   ├── lab/page.tsx
│   ├── skills/page.tsx
│   └── contact/page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky nav, mobile drawer, resume button
│   │   ├── Footer.tsx            # Links, tagline, dynamic copyright
│   │   └── ScrollToTop.tsx       # Floating scroll-to-top button
│   ├── hero/
│   │   ├── Hero.tsx              # Main hero with CTAs and status panel
│   │   ├── TechNexusVisual.tsx   # Custom interactive SVG node graph
│   │   └── QuickIntro.tsx        # Philosophy quote + 3 core pillars
│   ├── about/
│   │   └── AboutSection.tsx      # Biography, education, chronological timeline
│   ├── experience/
│   │   └── ExperienceTimeline.tsx # Vertical timeline, expandable cards
│   ├── projects/
│   │   ├── ProjectCard.tsx        # Feature-rich card with inline expand
│   │   ├── TaxMateArchitecture.tsx # Interactive 6-stage pipeline diagram
│   │   └── TeamsAgentArchitecture.tsx # 5-stage enterprise agent diagram
│   ├── lab/
│   │   ├── EngineeringLab.tsx     # Tab shell for all 3 demos
│   │   ├── RagVisualizer.tsx      # Stage-by-stage RAG walkthrough
│   │   ├── AgentWorkflowSimulator.tsx # LangGraph-style node animation
│   │   └── DataScienceExplorer.tsx   # Charts + ML predictor
│   ├── skills/
│   │   └── SkillsGrid.tsx         # Domain-grouped, filterable skills
│   ├── certifications/
│   │   └── CertificationsList.tsx
│   ├── resume/
│   │   ├── ResumeModal.tsx        # In-browser interactive resume + print
│   │   └── ResumeSection.tsx      # Resume CTA section
│   └── contact/
│       └── ContactSection.tsx     # Channel cards + mailto form
│
├── data/                          # ← All professional content lives here
│   ├── profile.ts                 # Bio, headline, social links, hero content
│   ├── experience.ts              # 5 roles with key projects + tech tags
│   ├── projects.ts                # 6 projects: architecture, challenges, metrics
│   ├── skills.ts                  # 6 skill categories with competency context
│   └── certifications.ts          # 7 verified certifications
│
├── lib/
│   └── utils.ts                   # cn() Tailwind class merger
│
├── public/
│   ├── robots.txt
│   └── resume/                    # ← Drop your resume PDF here
│
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── vercel.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js **v18+**
- npm **v9+**

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/AKASHPR715/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## ☁️ Deployment

### Vercel (Recommended — Free Tier)

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "feat: initial portfolio build"
git remote add origin https://github.com/AKASHPR715/portfolio.git
git push -u origin main

# 2. Import at vercel.com
#    Framework:    Next.js (auto-detected)
#    Build cmd:    npm run build
#    Output dir:   .next
#    Click Deploy → Done
```

**Custom domain**: Point your domain DNS to Vercel and add it in project settings.

---

## 📝 Updating Content (No Code Required)

All professional data is separated into typed files. Update these to keep the site current:

### `data/profile.ts` — Identity & Links
```ts
export const profileData = {
  name: "Akash PR",
  email: "akashpr715@gmail.com",
  github: "https://github.com/AKASHPR715",
  linkedin: "https://www.linkedin.com/in/akashpr715/",
  // hero text, identity tags, quick intro, core pillars...
};
```

### `data/experience.ts` — Work History
```ts
// Add new roles, update Equifax entry as production work begins
// Each entry has: role, company, period, description, responsibilities, keyProjects, skills
```

### `data/projects.ts` — Engineering Projects
```ts
// Each project has:
// - summary, problemStatement, solution
// - architectureSteps[] (shown in interactive diagrams)
// - technologies[], implementationDetails[]
// - challenges[], resultsAndEvaluation (with honestDisclaimer)
// - githubUrl, liveUrl
```

### `data/skills.ts` — Skill Categories
```ts
// 6 categories, each with skills[] that have:
// name, level ("Core Competency" | "Proficient" | "Applied Experience"), context
```

### `data/certifications.ts` — Credentials
```ts
// Add new certifications as they are earned
// credentialUrl field available for verified links
```

---

## 🎨 Design System Reference

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#080c14` | Page background |
| Surface | `#0c1220` | Cards, panels |
| Accent Blue | `#38bdf8` | Primary CTA, highlights |
| Accent Indigo | `#6366f1` | Secondary nodes, AI elements |
| Accent Emerald | `#10b981` | Deterministic/success states |
| Accent Amber | `#f59e0b` | Warnings, probabilistic labels |
| Body Font | Inter | General prose |
| Heading Font | Space Grotesk | H1–H3, section titles |
| Code Font | JetBrains Mono | Labels, metadata, badges, code |

**Component patterns:**
- `glass-card` — `bg-[#0c1220] border border-white/[0.08] rounded-2xl`
- Hover lift — `hover:border-sky-500/30 hover:-translate-y-0.5 transition-all`
- Mono badge — `text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded`

---

## ✅ Content Accuracy Standards

This portfolio enforces strict honesty rules throughout:

| Rule | Implementation |
|------|---------------|
| **Equifax disclosure** | Amber notice card: *"Project responsibilities and production contributions have not yet started."* |
| **Metric labeling** | Every result marked as *"from original project experiment"* — not universal claims |
| **No fake benchmarks** | AI safety work: *"Evaluated on internal enterprise benchmark suites"* only |
| **Contact form** | Opens user's mail client via `mailto:` — no fake submission success message |
| **Certifications** | No invented credential IDs or unverified links |
| **GitHub links** | Real `github.com/AKASHPR715` profile — no dummy repo links |
| **Lab demos** | Labelled `SIMULATION MODE · ZERO API KEY REQ` / `CLIENT-SIDE SIMULATION` |

---

## 📦 Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5.6 |
| Styling | Tailwind CSS 3.4 |
| Icons | Lucide React |
| Charts | Recharts 2 |
| Fonts | Inter · Space Grotesk · JetBrains Mono (Google Fonts) |
| Deployment | Vercel |
| SEO | Built-in Next.js metadata API · sitemap.ts · robots.txt |

---

## 📌 Roadmap / Future Additions

- [ ] Add actual resume PDF to `public/resume/`
- [ ] Update Equifax entry in `data/experience.ts` as production work begins
- [ ] Add real project screenshots to `public/images/projects/`
- [ ] Wire up Framer Motion entrance animations on section scroll
- [ ] Add GitHub Actions CI pipeline for lint + build on push
- [ ] Add OpenGraph preview image at `public/og-image.png`
- [ ] Extend Engineering Lab with live Gemini API demo (optional, needs key)

---

## 📄 License

MIT License — feel free to reference the architecture and structure.  
Content (biography, experience, projects) is personal and not for reuse.

---

<div align="center">

**Akash PR** · Kerala, India · [akashpr715@gmail.com](mailto:akashpr715@gmail.com)

*"Building intelligent systems through automation, AI and data."*

</div>
