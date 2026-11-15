# FL-04 — Ship an Automation Workflow v2
**Fiona Ali Shaik · Week 4 · General AI Fluency**

## Workflow chosen

I used the **draft → critique → revise** writing pipeline against my real portfolio work. It follows the FL-01 goal: help a technical hiring manager evaluate my practical software work and invite me to an interview. The inputs come from my FL-02 case-study work, Week 3 portfolio plan, and the current state of my portfolio. I did not use another intern’s work.

This is a no-code workflow in my **Fiona Ali Portfolio Studio** Claude Project. Its persistent project instructions define the fact-checking process; I supplied a new, fact-bounded input for each run. Claude is the draft and critique tool. I then reviewed the actual outputs against the stated facts. The five runs below are real Claude runs; model text is labeled as such, and my human review is separate.

## Flow and handoffs

```text
Verified source notes + current project status
                 ↓
1. Gather — list facts, audience/action, status, and missing evidence
                 ↓ facts + gaps
2. Draft — write concise portfolio copy using only supplied facts
                 ↓ first draft
3. Critique — check every claim, tense, links, outcomes, tools, and scope
                 ↓ flagged claims + proposed revision
4. Revise — preserve supported claims; remove unsupported ones
                 ↓
Human review — compare every line with the source and verify links/status
                 ↓
Publish only after project evidence and contact details are checked
```

The handoff between stages is explicit: the draft receives the fact list; the critique receives the draft and the same fact list; the revision receives the critique. A human remains responsible for checking whether the original facts are current and whether a claim is supported outside the prompt.

## Claude Project configuration

The workflow instructions saved in the Claude Project are:

> **FL-04 PORTFOLIO WRITING WORKFLOW — DRAFT → CRITIQUE → REVISE**
>
> Use only verified facts from Fiona’s supplied source notes and the Project context. Do not invent tools, metrics, results, responsibilities, links, experience, availability, or contact details. Keep project status accurate: planned work is not presented as finished; a project described by the portfolio as working is not treated as independently verified without a working demo or other evidence.
>
> For each new input:
> 1. Gather facts, intended reader/action, project status, and missing evidence.
> 2. Draft concise portfolio copy with tense that matches the verified status.
> 3. Critique every material claim against the supplied facts. Flag unsupported or overstated claims, including implied project scope, outcomes, performance, links, and contact methods.
> 4. Revise the copy and list remaining evidence to gather.
>
> Return sections: Source facts, First draft, Critique, Revised copy, Remaining evidence. State when the input is insufficient. Do not claim that this critique verifies the underlying project.

### Per-run prompt template

For each run I supplied a real input with known facts and explicit gaps, then asked Claude to follow the saved workflow. The actual five prompts are recorded below. This is a repeatable manual-trigger workflow; it is not an unattended integration.

## Five real runs

### Run 1 — FL-01 portfolio proof statement

**Prompt used**

> Run the FL-04 portfolio writing workflow on one real input. Label this Run 1 of 5. Input: Fiona’s FL-01 portfolio proof statement task. Source facts from the Week 1 audit as recorded in Fiona’s FL-02 submission: primary skill = developing functional software applications that address practical problems; intended reader = a technical hiring manager recruiting entry-level software developers and evaluating candidates through actual project work; desired action = an invitation to a technical interview; reason = a portfolio provides direct evidence of how she applies programming skills to build working applications beyond what a resume and LinkedIn describe. Status = the portfolio was planned/in progress at audit time; do not claim published project evidence from this input. Apply the project workflow in order: gather facts; draft; critique every claim against facts; revise. Return concise sections: Source facts, First draft, Critique (claim-by-claim with unsupported/additions flagged), Revised copy, Remaining evidence. Do not add tools, metrics, outcomes, responsibilities, or experience.

**Claude output**

- **First draft:** “I develop functional software applications that address practical problems. This portfolio shows how I apply my programming skills in working projects, so you can judge my work directly instead of relying on a resume or LinkedIn profile. If you’re hiring entry-level software developers, I’d welcome an invitation to a technical interview.”
- **Critique:** Claude caught that “this portfolio shows” implied published evidence even though the audit said the portfolio was planned/in progress. It also flagged “instead of relying on a resume or LinkedIn” as a shift from the source’s “beyond” idea. The skill, audience, and interview-invitation action were supported.
- **Claude revision:** “I develop functional software applications that address practical problems. A resume and LinkedIn can describe that skill. This portfolio is being built to show it through working projects you can evaluate directly. If you’re recruiting entry-level software developers, I’d welcome an invitation to a technical interview.”
- **Human check:** The revision still says “working projects you can evaluate directly,” which the input did not establish and the current live site does not yet show. Safer status-aware copy: **“I build practical software to address real problems. My portfolio is in progress; I’m adding project evidence so technical hiring teams can review how I work. If you’re recruiting entry-level developers, I’d welcome an invitation to interview.”** This is a draft only; the live page and project evidence still need their own verification.

### Run 2 — AI-Powered Subject Tracker

**Prompt used**

> Run the FL-04 portfolio writing workflow on a second real input. Label this Run 2 of 5. Input: Subject Tracker project. Verified facts available: it is a browser-based, on-device subject tracking project; the portfolio presents it as a working project. The known design decision was choosing browser interaction rather than an offline notebook. No verified repository/demo link, screen recording, device testing, accuracy, performance metric, or user outcome is available in this input. Apply the project workflow in order: gather facts; draft; critique every claim against facts; revise. Return concise sections: Source facts, First draft, Critique (claim-by-claim; flag unsupported claims), Revised copy, Remaining evidence. Do not add tools, metrics, outcomes, responsibilities, or links. Keep all uncertain detail explicit.

**Claude output**

- **First draft:** “A browser-based tracker that follows a subject entirely on your device. I built it as a working web project rather than an offline notebook, so visitors can interact with it directly. It runs in real time and tracks subjects accurately, even on low-powered devices.”
- **Critique:** Claude flagged real-time behavior, accuracy, low-powered-device performance, and the rationale that visitors can interact directly as unsupported. It also cautioned that “I built it” may overstate the unprovided scope.
- **Claude revision:** “A browser-based, on-device subject-tracking project. I chose to build it as an interactive browser experience rather than an offline notebook. It is presented on my portfolio as a working project.”
- **Human check:** The revision still changes the verified decision “choosing browser interaction rather than an offline notebook” into the broader claim “I chose to build it as an interactive browser experience.” I would retain only the narrower sourced fact: **“AI-Powered Subject Tracker is a browser-based, on-device subject-tracking project. The design choice was browser interaction rather than an offline notebook. My portfolio currently presents it as a working project; a verified demo and repository link are still needed.”** The “working” status is attributed to the portfolio, not represented as independently tested.

### Run 3 — Pac-Man (Java)

**Prompt used**

> Run the FL-04 workflow on a third real input. Label Run 3 of 5. Keep the entire response under 220 words. Input: Pac-Man project. Verified facts: it is one of Fiona's portfolio projects and was built in Java. It is secondary to the Subject Tracker in the portfolio order. No verified repository/demo link, screenshots, feature list, technical design details, testing, results, or personal contribution details are available. Follow gather facts → draft → critique every claim → revise. Return Source facts, First draft, Critique, Revised copy, Remaining evidence. Flag anything not supported; do not invent a feature list or say it is playable/complete.

**Claude output**

- **First draft:** “A Java Pac-Man game I built from scratch. Playable in the browser, with ghost AI and multiple levels. It shows my grasp of object-oriented design.”
- **Critique:** Claude correctly identified “built from scratch,” browser playability, object-oriented design, and the listed features as unsupported or invented.
- **Claude revision:** “A Java project from my portfolio. Details are being confirmed.”
- **Human check:** This is appropriately restrained. A slightly more useful safe version is **“Pac-Man (Java) is one of the projects in my portfolio. I’m verifying its features, my contribution, and the project link before publishing a detailed case study.”** It does not imply a demo or implementation details.

### Run 4 — ML Vision Pipeline

**Prompt used**

> Run the FL-04 workflow on a fourth real input. Label Run 4 of 5. Keep the response under 220 words. Input: ML Vision Pipeline project. Verified facts from Fiona’s portfolio planning records: the project is a machine-learning/computer-vision project using Python and TensorFlow; it is third in the portfolio's current project order. No verified dataset, model architecture, metric, result, deployment, demo/repository link, or detailed contribution is available. Follow gather facts → draft → critique every claim → revise. Return Source facts, First draft, Critique, Revised copy, Remaining evidence. Treat the broad label as a project category only; do not invent its task, model, results, or impact.

**Claude output**

- **First draft:** “A computer-vision pipeline that classifies images with a trained neural network. I built the full pipeline, from data preparation to evaluation, and it reached strong accuracy.”
- **Critique:** Claude flagged image classification as an invented task, the neural-network statement as unsupported, the claimed end-to-end contribution and stages as unknown, and “strong accuracy” as unsupported without a metric.
- **Claude revision:** “A machine-learning and computer-vision project built with Python and TensorFlow. Details are being confirmed.”
- **Human check:** The revision stays within the supplied tool/category facts. Do not add dataset, architecture, metric, result, or deployment until those are sourced.

### Run 5 — Home-page message

**Prompt used**

> Run the FL-04 portfolio writing workflow on a fifth real input. Label Run 5 of 5. Keep the response under 220 words. Input: Home page message for Fiona’s portfolio. Verified facts: her live GitHub Pages site currently identifies itself as “Portfolio in progress,” with the lines “A little space for what I build” and “This portfolio is taking shape. Check back soon.” The earlier content map sets the intended reader as a technical hiring manager seeking entry-level developers and the desired action as an interview invitation. The page is currently a near-blank/in-progress page; project proof and confirmed contact method are not present. Follow gather facts → draft → critique every claim → revise. Return Source facts, First draft, Critique, Revised copy, Remaining evidence. Do not imply the portfolio has published project case studies or invent a contact link.

**Claude output**

- **First draft:** “I build practical AI-powered software. Browse my featured projects and case studies below, then email me to book a technical interview.”
- **Critique:** Claude flagged the unpublished project/case-study claim, invented email contact method, and “book a technical interview” as stronger than the source’s invitation action. It also caught that the draft omitted the in-progress status.
- **Claude revision:** “I build practical AI-powered software. This portfolio is in progress, and I’m adding projects with evidence you can check. If you’re recruiting entry-level developers, check back soon.”
- **Human check:** The revised copy is consistent with the current status, but “check back soon” is not the desired interview action and could be mistaken for a timing promise. A safer temporary version is **“I build practical AI-powered software. This portfolio is in progress; project evidence and a contact route are being added.”** Add an interview CTA only after a confirmed contact path exists.

## What the runs show

The workflow produced a consistent claim-by-claim review, and it surfaced useful omissions: project links, Fiona’s exact contribution, screenshots/demos, datasets, evaluation, and a confirmed contact channel. However, the critique step is not a guarantee. In Runs 2 and 5, unsupported claims survived into Claude’s revised copy; in Runs 3 and 4, the first draft invented features, scope, and results before the critique caught them. Run 1’s final wording also retained an evidence claim that did not fit the current site. **The human check is required on every final draft.** The model’s output is not itself project verification.

### Failure points and human checks

| Failure point observed | Human check before publishing |
|---|---|
| Model invents features, model behavior, performance, or results | Compare each factual phrase to a source, repository, demo, or actual measurement |
| Model overstates the person’s contribution (“I built the full pipeline/from scratch”) | Confirm Fiona’s exact work and distinguish individual from team work |
| Model uses present tense or implies live evidence for planned/in-progress work | Check current site state, link, and project completion status |
| Model invents contact methods or implies case studies are published | Verify the destination and published page before using the CTA |
| Critique catches a claim but revision leaves a related overclaim | Review the **revised** copy from scratch against the fact list |
| “AI-powered,” “working,” “interactive,” or “on-device” can sound more specific than the evidence | Keep the narrowest sourced wording and link evidence where available |

## Timing and time-saved estimate

I did **not** run a stopwatch during the five Claude runs or record a manual baseline. The Project instructions were already configured for this workflow and their setup time was not separately logged. I therefore cannot provide a measured time saved or a defensible numeric comparison. This is a gap against the assignment’s timing requirement; I am reporting it rather than manufacturing numbers. A proper comparison on the next five inputs would time (1) one manual draft-and-review, (2) the full Claude workflow including human review, and (3) initial Project setup separately.

## Reuse on a brand-new input

1. Copy the prompt template below.
2. Replace the bracketed fields with a new task and facts from a source you can inspect.
3. Include current status and explicitly list unknowns.
4. Run it in Fiona Ali Portfolio Studio.
5. Check the first draft, the critique, and the revised draft independently against the source. Do not publish a claim just because Claude marked it supported.

### Reusable prompt template

> Run the portfolio writing workflow on this new input: **[task/project]**.
>
> **Verified facts and their source:** [list only facts you can verify]
>
> **Current status:** [planned / in progress / complete / live, with evidence]
>
> **Audience and desired action:** [reader] / [action]
>
> **Unknown or unverified:** [features, contribution, links, metrics, outcomes, tools, contact details, as applicable]
>
> Follow gather facts → draft → critique every material claim against the facts → revise. Return Source facts, First draft, Critique, Revised copy, and Remaining evidence. Keep tense accurate. Flag unsupported statements and do not fill gaps with plausible details. The critique does not verify the underlying project.

## Evidence sources used

- Fiona’s FL-02 submission, **“Prompting Fundamentals on Real Tasks”** — FL-01 audience, positioning, and desired action.
- Fiona’s Week 2 portfolio case-study notes and Week 3 content map — project names/order, Subject Tracker framing, intended voice and page purpose.
- Current public portfolio status observed during this work: https://fiona-ali.github.io/flyrank-ml-internship/
- Actual Claude project and outputs: **Fiona Ali Portfolio Studio**, chat “Portfolio proof statement for developer interview,” five prompts and five responses recorded during this workflow.
- Each run is checked only against the facts listed in that run. This document does not claim to verify unprovided code, demos, metrics, or project results.
