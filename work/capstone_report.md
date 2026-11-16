# Capstone Report — Refresh / Content Opportunity Scoring

- **Author:** Shaik Fiona Ali
- **Lane:** Refresh / Content Opportunity Scoring
- **Repository:** https://github.com/Fiona-ali/flyrank-ml-internship
- **Deployed paper:** https://fiona-ali.github.io/flyrank-capstone.html
- **Date:** 16 November 2026

## Abstract
Which anonymized content items should an editor review first for a possible refresh? Using the repository’s 30,000-row starter extract (44 columns, 32 client groups), I ranked the 22,006 rows meeting a 100-impression eligibility floor. A Logistic Regression model using nine content metadata fields was evaluated against the Week-4 freshness-and-volume rule on the same fixed client-held-out split. The model reached Precision@50 of 0.720 and average precision 0.632, compared with 0.380 and 0.521 for the rule; the held-out proxy base rate was 0.577. These results support a human review shortlist on this snapshot only: they do not establish future decline, refresh value, or a causal effect.

## 1. Problem and data
The decision is which eligible items an editor should inspect first. The repository starter CSV has 30,000 rows × 44 columns, one content item per row, and 32 pseudonymous client groups. Metrics are trailing-window aggregates. The target proxy, trend_direction == down, compares the latest 30 days with the preceding 30 days. This extract has no calendar timestamp, so exact dates are unavailable; the analysis did not query the full Hugging Face warehouse. Eligibility is impressions_90d >= 100, yielding 22,006 rows. IDs are grouping keys only; model features exclude IDs, target-derived fields, and performance windows.

## 2. Method and baseline
Logistic Regression uses search volume, competition, CPC, word count, character count, content age, days since update, content type, and main intent. Numeric fields are median-imputed with missingness indicators and standardized; categories use an explicit missing category and one-hot encoding. The target is a trailing proxy, not future decline. The fixed Week-4 baseline is log1p(impressions_90d) × min(days_since_last_update, 180) / 180. Its 90-day impressions value overlaps the target’s two 30-day windows, so it is a historical comparator, not a leakage-safe prospective baseline.

## 3. Evaluation
A GroupShuffleSplit (test fraction 0.25, seed 42) holds out whole clients: 17,396 training rows from 22 clients and 4,610 test rows from 8 clients, with no overlap. The test proxy base rate is 0.577. Both rankings are scored on identical test rows.

| Measure | Logistic model | Week-4 rule | Reference |
|---|---:|---:|---:|
| Precision@10 | 0.600 | 0.500 | 0.577 proxy base rate |
| Precision@50 | 0.720 | 0.380 | 0.577 proxy base rate |
| Average precision | 0.632 | 0.521 | 0.577 proxy base rate |
| ROC AUC | 0.571 | 0.418 | 0.500 random reference |

At 50, model Precision@50 is 14.3 percentage points above base rate and 34.0 points above the rule. At 10, it is only 2.3 points above base rate. Low ROC AUC and modest top-10 performance counsel against strong prediction language.

## 4. Limitations
The label is a trailing comparison, not a future outcome. One grouped split cannot establish temporal or cross-client stability. Eligibility limits the target population. The comparator has a metric overlapping the target window. No experiment measured refresh impact, editorial cost, or realized value. This starter dataset does not support claims about the full warehouse or Google’s algorithm.

## 5. Ranked recommendations
1. Treat the top 50 as a human-review starting list, never an edit command.
2. Verify context in the authorized internal system before an editorial decision.
3. Define a frozen cutoff and non-overlapping future outcome before prospective evaluation; preserve client and time separation.
4. Record editorial dispositions and future outcomes; monitor the new-period ranking before retraining.

## 6. Reproducibility
See work/notebooks/capstone.ipynb. It fixes seed 42, recomputes the grouped split and both rankings, checks against the ML-10 receipt, writes work/outputs/capstone_metrics.json, and saves work/figures/capstone_model_vs_rule.svg. Use the checked-in requirements.txt and run every cell.

## 7. Acknowledgments and data credit
Built on the [FlyRank ML Internship dataset](https://flyrank.ai). The analysis uses the anonymized starter extract committed in Fiona’s repository.
