---
title: Apple Financial Analytics
summary: I built a dashboard to analyse Apple’s historical stock prices and trading volume, and tested whether a Random Forest forecast improved on a naïve baseline.
tags: [Python, MySQL, FastAPI, React, scikit-learn]
order: 1
featured: true
image: images/apple-financial-analytics.webp
live: https://aleshba-equity-analytics.netlify.app
imageAlt: Apple dashboard showing historical closing prices and the 20-day moving average

metrics:
  - { value: "1,464", label: "Daily records analysed" }
  - { value: "$348.00", label: "29 Oct closing price" }
  - { value: "$341.00", label: "29 Oct · 20-day average" }
  - { value: "$332.37", label: "29 Oct · 50-day average" }
  - { value: "+2.05%", label: "29 Oct · close vs. 20-day average" }
  - { value: "+4.70%", label: "29 Oct · close vs. 50-day average" }
---

## Project question

How did Apple’s closing price compare with its recent and longer-term trends, and did a Random Forest forecast improve on a simple baseline?

## Data and methodology

I processed 1,464 daily stock records in Python and Pandas, calculated daily returns and 20- and 50-trading-day moving averages, and stored the processed data in MySQL. FastAPI serves the data to a React dashboard built with Recharts. A date filter lets readers compare price trends and trading volume over the same period.

I used an 80/20 train–test split to evaluate the forecasting model and compared its return forecast error with a naïve baseline.

## Key finding

On 29 October, Apple closed at **$348.00**. That was **$7.00 (+2.05%) above its 20-day moving average** and **$15.63 (+4.70%) above its 50-day moving average**. The 20-day average was also higher than the 50-day average, placing the session’s close above both trend benchmarks.

## Trading volume

The dashboard shows how many shares traded in each session. Comparing a session’s volume with its recent average would help establish whether a price move coincided with unusually high trading activity.

## Forecast evaluation

| Evaluation                             | Result |
| -------------------------------------- | -----: |
| Random Forest price MAE                | $35.37 |
| Random Forest price RMSE               | $46.22 |
| Random Forest return MAE, as reported  |   3.14 |
| Naïve return baseline MAE, as reported |  3.142 |

The return errors were nearly identical at the reported precision, so the comparison showed no clear advantage for the Random Forest. The return error units still need to be confirmed against the original model outputs.

## What I’d improve next

I’d add a 20-session average-volume benchmark and annotate a session with a notable price move. For forecasting, I’d use walk-forward evaluation to check whether the results hold across different periods.
