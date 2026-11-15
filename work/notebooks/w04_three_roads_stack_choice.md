# Week 4 — Three Roads: Choose Your Stack with AI

## My constraints

- **Cost:** free hosting and free tools only.
- **Relevant experience:** I have used React and Vite in project work. I am choosing from practical experience, not claiming expert-level front-end skills; I want a setup I can keep learning and maintain.
- **What the site needs to do:** a one-page portfolio with five sections in this order: Home, About, Work, Skills, Contact. The Work section should place the AI Subject Tracker first, Pac-Man (Java) second, and the ML Vision Pipeline third. Each case study needs a problem, my decisions, a verified result, and real demo or repository evidence. The existing content map calls for a clear Contact action and a secondary View Work action.
- **How work should be displayed:** readable case-study text, genuine project screenshots or image galleries, and links to verified demos and repositories. Some project evidence is still to be gathered, so unfinished links and unmeasured results must stay out.
- **Dynamic features:** none are needed yet. This version can be static; an email link is enough for the Contact action, so no backend or contact-form database is needed.

## Three options, simplest to most powerful

| Option | How I would build it | Free hosting | Backend? | Trade-off |
|---|---|---|---|---|
| **1. HTML, CSS, and JavaScript** | Build the five sections directly in static files; add project cards, text, and image galleries by hand. | GitHub Pages from a public repository on GitHub Free. | No. | The least setup and the smallest amount to maintain. Repeated project cards and layouts would be more manual as the portfolio grows. |
| **2. React + Vite — chosen** | Build a static React page with reusable section and case-study components; use Vite to build the production files. | GitHub Pages with a GitHub Actions build and deploy workflow. GitHub Pages supports static sites and build processes; Vite documents the required workflow and repository path configuration. | No. | More setup than plain HTML, but reusable components fit the repeated case-study and gallery structure. I already have project experience with React/Vite. The build workflow and asset paths need attention. |
| **3. Next.js** | Use React with Next.js routing and, if later needed, server features; this portfolio could also be exported as a static site. | Vercel Hobby is free for personal projects within its usage limits. | Not for the current static version; server features would be available later on a supported deployment. | It offers the most room for routing and dynamic features, but adds framework and deployment concepts I do not currently need to maintain. |

GitHub Pages on GitHub Free requires a public repository. I will keep only public-safe portfolio content there. Next.js supports static export, while Vercel’s free Hobby plan has usage caps; the free tier is not an unlimited production guarantee.

## Pressure test

- **If I choose the simplest option:** the five-section site, text, galleries, and links still work. As case studies repeat the same structure, editing each one manually could become harder to keep consistent.
- **If I choose the most powerful option:** I would maintain additional routing, framework, and deployment configuration without a current need for server rendering, user accounts, or saved data.
- **Can I finish in two weeks?** Yes, if I keep the scope to one static page, use only verified project evidence, and defer dynamic features. React/Vite still requires a working build and deploy workflow, so I should confirm the live page and its asset paths before calling it done.
- **Does it show my work well?** Yes. Components can present the three case studies consistently, while each page section can hold longer explanations, real screenshots, and verified demo/repository links. The stack cannot replace missing project evidence; those links and results must be checked before publishing.

## My decision

I choose **React + Vite** for this portfolio. I have already used React/Vite in project work, so I can build on that familiarity and use components for the repeated case-study sections. My sitemap is still a single static page, and my content map needs clear project evidence, images, readable case studies, and a Contact action. I do not need a backend yet.

Plain HTML/CSS/JavaScript would be simpler and would meet the current requirements; I did not choose it because I want to reuse a consistent case-study layout and build on tools I have used. Next.js would give me more routing and server options, but those features add work without solving a current portfolio need. I will use GitHub Pages for the static build, keep the repository public-safe, and avoid claiming results or linking demos until I have verified them.

## Official references

- [GitHub Pages: What is GitHub Pages?](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Vite: Deploying a static site](https://vite.dev/guide/static-deploy)
- [Next.js: Static exports](https://nextjs.org/docs/app/guides/static-exports)
- [Vercel Hobby plan](https://vercel.com/docs/plans/hobby)
