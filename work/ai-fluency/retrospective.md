# Final retrospective — FlyRank AI/ML internship

*Draft grounded in the notebooks, capstone paper, and Study Notes Coach build log saved in this repository. It describes documented work; Fiona should adjust any personal reflection that does not sound like her.*

## What I set out to do

At the start, the goal was to learn how to work through an applied AI/ML project from a real question to a result I could explain. The internship’s Search Intelligence lane gave me a concrete setting: help a content team decide which eligible pages might deserve a closer look for a refresh. I wanted to learn the full sequence, not only fit a model: define the decision, understand the data, create a baseline, validate the result, and communicate what it can and cannot support.

## What changed

The biggest change in my approach was moving from “Can a model predict this label?” to “Would this output help someone make a careful decision?” The notebooks first framed the task and data contract, then examined signals, built a rule baseline, trained a logistic-regression ranking, and checked it on a client-held-out split. The final paper compares the model and rule on the same held-out rows. On that split, the model reached Precision@50 of 0.72 and the Week-4 rule reached 0.38. That is a useful result for prioritizing human review in this sample, but it is not evidence that a refresh will cause traffic gains.

Validation also changed what I am willing to claim. The target is a trailing-window trend proxy, and the analysis uses the anonymized 30,000-row starter extract. The full warehouse was not available in the executed analysis. The work has one grouped split, not temporal validation or repeated evaluation across time. Keeping those boundaries visible made the recommendation narrower and more useful: treat the ranking as a review queue, verify page context, and do not automate content changes from the score.

A second change came from building the Study Notes Coach as a private Claude Project. Its instructions make uploaded notes the default source, require page citations, and ask before filling a gap with general knowledge. Three documented runs checked the missing-source guardrail and source-grounded responses. This taught me that a fluent answer is not enough; I need to check whether its evidence actually supports the claim. The project is read-only, and three runs are a small qualitative check rather than a reliability benchmark.

## What I would build next

I would add a time-based evaluation that trains on earlier periods and tests on a later period, then repeat it across several cutoffs. I would compare ranking quality and queue stability across client groups, inspect performance where data is sparse, and ask editors to review a small sample of recommendations. If approved, the next iteration would measure whether the queue saves review time. I would not claim a causal traffic effect without a design that can support one.

For the Study Notes Coach, I would record the required narrated live demo and expand the evaluation with deliberately difficult cases: conflicting notes, a missing citation, and a question that asks for unsupported detail. I would check every cited passage manually and document failures as well as successful runs.

## Three transferable lessons

1. **Start with the decision.** A metric matters when it maps to an action a person can take; define that action before choosing a model.
2. **Protect the evaluation.** Split data in a way that reflects who or when the system must generalize to, exclude target-derived signals, and keep the baseline on the same test set.
3. **Make evidence and limits visible.** A readable paper, reproducible notebook, source citations, and explicit limitations make it easier for another person to trust—and challenge—the work.

The main outcome is a more disciplined way to move from an AI idea to a reviewable artifact. The paper, code, and project notes are linked from the package index. The remaining closeout work is to complete the narrated demo, record actual hours, and obtain FlyRank’s human review.
