# Study Notes Coach — Documentation

**Owner:** Shaik Fiona Ali  
**Project type:** Private Claude Project  
**Current evidence:** Three documented end-to-end runs  
**FL-09 demo recording:** Pending a 3–5 minute narrated live capture

## What it does

Study Notes Coach helps Fiona study from uploaded course notes. It treats those files as the source of truth, cites the file and page or section, says when the notes do not support an answer, asks whether Fiona wants a clearly labelled general explanation, and ends with one check question before waiting.

The current Project is private to Fiona. To reproduce the design, create a Claude Project in your own account and upload course material you are allowed to use. Do not upload someone else’s private notes.

## Recreate the setup

1. In Claude, create a Project named **Study Notes Coach**.
2. Add the course notes you want the coach to use. The documented Fiona Project used her FL-02 assignment PDF and the FL-06 design specification.
3. Add project instructions that:
   - use uploaded course files as the default source of truth;
   - cite the exact filename and page or section for supported claims;
   - never invent quotations, facts, or citations;
   - when the notes do not support an answer, say so and ask whether the learner wants a clearly labelled general explanation;
   - identify conflicting sources rather than silently choosing one;
   - finish with exactly one check question, then wait;
   - remain read-only and do not submit work, edit repositories, publish, or share files.
4. Test one supported question and one question the uploaded material does not answer. Check each citation against the source before relying on it.

## Simple architecture

Learner question → Claude Project instructions → uploaded source retrieval → cited explanation or missing-source question → one check question

The Project uses the provider’s built-in retrieval over its uploaded knowledge. It has no external connectors, custom code, autonomous actions, or write access.

## Evaluation evidence

Three live scenarios are documented in the Fiona-specific build log. They are qualitative checks, not a full benchmark or a claim that all six design-spec cases were run.

| Scenario | Expected behavior | Observed result |
|---|---|---|
| Missing-source guardrail | Cite the design spec, explain the source boundary, ask one check question | Cited relevant FL-06 specification sections on pages 1–2 and asked one question |
| Grounded course-note answer | Use the uploaded course notes and identify the remaining factual issue | Cited the FL-02 notes on page 7, connected the context-leak discussion on page 8, and asked one question |
| Cross-page source check | Find unsupported additions and explain the template safeguards | Cited pages 7–8, identified unsupported details, described the evidence and missing-fact safeguards, and asked one question |

No numerical accuracy score is claimed. A citation being present does not by itself prove that every sentence is correct; the source page still needs to be checked.

## Limitations

- The Project is private to its owner and depends on the provider’s account and service.
- Answers can still misread a page or cite the wrong passage; verify the cited text.
- Three documented scenarios do not establish broad reliability.
- The source set is only as complete and current as the files the learner uploads.
- There is no future-outcome evaluation or autonomous workflow.

## AI-use note

AI assistance helped structure this documentation and the reproducible notebook materials. The Study Notes Coach itself is a Claude Project configured with uploaded course sources and instructions. The three cited responses were checked against their referenced pages; this small review is not a comprehensive evaluation.

## Demo recording

The required FL-09 video must show a live end-to-end run, last 3–5 minutes, include narration, and explain one design decision and one limitation. The existing FL-07 capture is 120 seconds and has no narration, so it does not meet this requirement. Add the video link here after recording a compliant demo.
