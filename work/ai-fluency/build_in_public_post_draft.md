# Build-in-public post draft — not yet published

I’ve completed a FlyRank Search Intelligence capstone exploring how to prioritize content pages for human refresh review.

I compared a logistic-regression ranking with a simple Week-4 rule on a client-held-out test split. On the anonymized starter extract, the model reached Precision@50 of 0.72 versus 0.38 for the rule. That result supports using the score as a review queue in this sample; it does not show that refreshing a page will cause traffic to increase.

One decision I’m glad I made was to keep the recommendation human-reviewed. The label is a trailing-window proxy, the full warehouse was not available in this run, and the evaluation uses one grouped split rather than a time-based test. Those limits change what the score is safe to say.

The paper, notebook, and limitations are here:
- Paper: https://fiona-ali.github.io/flyrank-capstone.html
- Repository: https://github.com/Fiona-ali/flyrank-ml-internship

I’m waiting for FlyRank’s review and will update the case study if the review changes the findings.
