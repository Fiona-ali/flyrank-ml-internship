# FL-07 Build Log — Study Notes Coach

**Owner:** Fiona Ali  
**Platform:** Claude Project  
**Build date:** 15 November 2026  
**Status:** Working project, three end-to-end runs, and a raw 120-second screen capture complete.

## Goal and scope

Build the FL-06 Study Notes Coach as a private Claude Project. Its core job is to explain topics from Fiona’s supplied course material, cite the source when possible, state when the source is insufficient, and teach interactively with at most one check question per turn.

## Build record

1. **Created the project.** Created a separate project named **Study Notes Coach** rather than changing Fiona’s existing portfolio or AI Learning Assistant projects. Claude displayed the project as visible to “Only you.”
2. **Added project instructions.** The instructions make uploaded project knowledge the default source, require source and page/section references, prohibit invented facts or citations, ask Fiona before supplying clearly labeled general context when notes are missing, and flag conflicting sources. They also keep the coach read-only and prevent it from submitting assignments, editing repositories, publishing, or sharing files.
3. **First end-to-end run — missing-source guardrail.** Asked why the coach should ask Fiona before answering from general knowledge when the supplied notes do not cover a topic. With the FL-06 spec as the only source, Claude cited the relevant sections on pages 1–2 and asked one check question. This showed the instructions and project-file retrieval working, but the source was the design spec rather than class notes.
4. **Changed the source set.** Added Fiona’s existing **Fiona_Ali_FL02_Prompting_Fundamentals_Real_Tasks.pdf** so the coach could answer from actual course material. Kept the FL-06 spec as a second reference for the agent’s design and guardrails.
5. **Second end-to-end run — course-note retrieval.** Asked the coach to explain what V6’s ordered steps improved and what factual issue remained. Claude cited the FL-02 PDF, page 7, and correctly reported that the steps improved readability while the output still added unsupported details about technical decisions and individual contributions. It also connected the finding to the context-leak discussion on page 8 and asked one check question.
6. **Third end-to-end run — cross-page source check.** Asked what unsupported details the V6 ChatGPT output added and how the reusable template prevents unsupported claims. Claude cited the FL-02 PDF, pages 7–8, identified “technical decisions” and “individual contributions,” explained the `<facts>` block, evidence and status fields, claim-check step, and missing-fact rule, then ended with one check question.

## Tools, data, and changes from FL-06

- **Live data source:** Project knowledge files: Fiona’s FL-02 assignment PDF and the FL-06 design spec.
- **External connectors:** None. The build uses uploaded project files only; no Drive, GitHub, email, calendar, or web-search connector was added.
- **Implementation changes:** The FL-06 spec is included as a reference, and the first test used it before Fiona’s FL-02 notes were added. That first run exposed the need for a real course source; the second run used the FL-02 notes.
- **Cut from scope:** No autonomous actions, code execution, or external integrations. This preserves the private, read-only boundary in the design.

## Current evaluation evidence

| Run | Expected behavior | Observed result |
| --- | --- | --- |
| Missing-source guardrail | Explain the source boundary, cite the spec, ask one check question | Source sections cited; one check question asked |
| Grounded course explanation | Retrieve the FL-02 V6 finding, cite the relevant page, ask one check question | Page 7 finding and page 8 context-leak note cited; one check question asked |
| Cross-page source check | Identify unsupported additions and template safeguards, cite pages 7–8, ask one check question | Both unsupported additions and the template safeguards were grounded in pages 7–8; one check question asked |

These are three interactive runs, not a claim that all six FL-06 evaluation cases have been run.

## Submission files

The FL-07 card requires the working agent, this build log, and one raw, unedited screen capture of about two minutes showing a successful end-to-end run. The new capture is `Fiona_Ali_FL07_Study_Notes_Coach_Run.mp4` (120 seconds, no narration), recorded from the live Claude Project. It shows the project and its source files, the request, the grounded answer, citations to FL-02 pages 7–8, and the final check question.
