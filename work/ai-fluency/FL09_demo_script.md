# FL-09 live demo narration script

**Target duration:** 3 minutes  
**Format:** Narrated walkthrough over the original live Study Notes Coach capture. The voice is synthesized; it is not Fiona’s voice. The capture itself is the original two-minute Project run, slowed for readability.

## Spoken script

This is a demonstration of Fiona Ali's private Study Notes Coach, built as a Claude Project. The narration is a synthesized reading of the prepared script; the on-screen project and answer come from a real recorded run. The purpose is simple: help a student understand supplied course notes while making the evidence and uncertainty visible.

The project has two source files: Fiona's Prompting Fundamentals assignment notes and the Study Notes Coach design specification. Its standing instructions make those uploaded files the default source. The coach should name the file and page for specific claims, never invent quotations or citations, and say when its sources do not support an answer. It should ask before switching to general knowledge. The project is private and read-only; it cannot submit assignments, edit repositories, publish, message, or share files.

Here the live run asks about the V6 prompt iteration in the uploaded FL-02 notes. The coach searches the project material, explains what changed, and points to the relevant page. In the answer shown, it distinguishes the readability improvement from two unsupported additions: technical decisions and individual contributions. It connects those additions to context leakage and explains how an evidence block, a current-status field, and a claim-check step can reduce the risk. The response ends with one check question, following the project instructions.

The key design decision is to ask before filling a gap with general knowledge. For a student, an answer that sounds plausible but does not match the course source can create confusion. Asking gives the learner a choice and keeps course evidence separate from outside explanation. Citing a page also makes the answer easier to check, but a citation is not proof by itself; the page must still be opened and read.

One limitation is retrieval quality. The project can select the wrong passage or misread a page, and the evaluation currently has only three documented qualitative scenarios. That is useful early evidence, not a reliability benchmark. The source set is also limited to the files uploaded by the learner. For a broader evaluation, I would test missing, conflicting, and ambiguous sources, inspect every citation, record failures, and only then decide whether the project is dependable for more topics.

This run demonstrates the source-grounded response, a checkable citation, a gap-handling guardrail, and the current limits. The README and build log in the internship repository describe how to recreate the project and what the three checks do and do not establish.

## Upload checklist

- Keep the video visibility set to **Unlisted**.
- Verify the final YouTube URL opens the uploaded video.
- Submit the README link and the YouTube link together in FL-09.
- State that the voiceover is synthesized; do not imply Fiona narrated it.
