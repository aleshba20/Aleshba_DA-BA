---
title: Apple Financial Analytics
summary: I built a dashboard to explore Apple’s stock price, moving averages, and trading volume, then tested whether a Random Forest could beat a simple forecasting baseline.
tags: [Python, MySQL, FastAPI, React, scikit-learn]
order: 1
featured: true
image: images/apple-financial-analytics.webp
metrics:
  - { value: "1,464", label: Daily records }
  - { value: "20 / 50", label: Moving-average windows }
  - { value: "80 / 20", label: Train / test split }
---

## Project question

How can a single dashboard help someone compare recent price movements with the longer trend, check whether trading activity was unusually high, and understand how well a forecasting model actually performed?

## Data and methodology

I processed 1,464 daily stock records using Python and Pandas, calculated daily returns and rolling indicators, and stored the processed data in MySQL. FastAPI exposes the data to a React dashboard built with Recharts. A date filter lets the reader compare the closing price, moving averages and trading volume across the same period.

## Reading the dashboard

In the 29 October snapshot, the closing price was **$348.00**, above both the **$341.00** 20-day moving average and the **$332.37** 50-day moving average. The shorter average was also above the longer one. That ordering shows that recent prices were higher than the longer-run average at that point.

Trading volume provides a separate view of activity. A daily volume value counts the shares traded during that session. Average volume summarises activity over a period. Comparing both helps identify whether a particular day was unusually active.

## Forecast evaluation

| Evaluation                             | Result |
| -------------------------------------- | -----: |
| Random Forest price MAE                | $35.37 |
| Random Forest price RMSE               | $46.22 |
| Random Forest return MAE, as reported  |   3.14 |
| Naïve return baseline MAE, as reported |  3.142 |

The return model and naïve baseline gave nearly identical errors at the reported precision. The return figures above preserve the reported values. Verify their scale and units in the original model outputs before interpreting them as percentages.

## What I’d improve next

I’d use a walk-forward evaluation and report results separately for different market conditions. I’d also document the return units beside each error metric so the model and baseline can be compared directly.
