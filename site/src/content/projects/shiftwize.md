---
title: Automated staff scheduling
client: Shiftwize
industry: Restaurants and hourly teams
location: Portland, OR
year: "2025–2026"
services: [ai, analytics, software]
status: In development
summary: A scheduling engine that follows a business’s own staffing rules, so nobody has to.
challenge: >-
  Building schedules for a Portland restaurant meant bouncing between Paylocity and spreadsheets
  to check staffing rules. Off-the-shelf tools (7shifts, Restaurant365, HotSchedules) couldn't
  follow the restaurant's rules automatically, and one wanted 12 weeks of history before it would
  automate anything. The scheduler we started for that problem is now becoming Shiftwize, a
  stand-alone product.
results:
  - Peak-hour coverage met across test weeks.
tech: [Python, Linear and constraint optimization, Spreadsheet-upload web UI]
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

Shiftwize is in development as a stand-alone product, for any team that schedules hourly staff against rules like these.
