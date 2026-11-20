---
title: Automated staff scheduling
client: Face Plant
industry: Restaurant
location: Portland, OR
year: "2025–2026"
services: [ai, analytics, software]
status: Completed
summary: A scheduling engine that follows a restaurant's own staffing rules, so nobody has to.
challenge: >-
  Building schedules at Face Plant, a Portland vegan fast-food restaurant, meant bouncing between
  Paylocity and spreadsheets to check staffing rules. Off-the-shelf tools (7shifts, Restaurant365,
  HotSchedules) couldn't follow Face Plant's rules automatically, and one wanted 12 weeks of history
  before it would automate anything.
results:
  - Peak-hour coverage met across test weeks.
tech: [Python, Linear and constraint optimization, Spreadsheet-upload web UI]
quote_id: will
cover_image: svc-analytics
cover_alt: Three people around a table reviewing charts pinned to a whiteboard.
featured: true
order: 2
---

A scheduling engine with a simple web front end:

- **Staff submit availability**; managers upload staffing needs.
- **An optimization solver** produces the schedule.
- **Hard rules** it never breaks: availability, max hours, shift-lead coverage, consecutive days, no overstaffing.
- **Soft goals** it works toward: hit staffing targets, spread hours fairly, avoid split shifts.

Earlier in 2025 we also ran customer-data discovery for Face Plant, whose customer info was scattered across four separate places.
