---
name: Shiftwize
tagline: Staff schedules that follow your rules.
status: In development
year: "2025"
summary: A scheduling engine that builds staff schedules from your own staffing rules, so nobody has to check them by hand.
problem: >-
  Building schedules for a Portland restaurant meant bouncing between Paylocity and spreadsheets to
  check staffing rules. Off-the-shelf tools (7shifts, Restaurant365, HotSchedules) couldn’t follow
  those rules automatically, and one wanted 12 weeks of history before it would automate anything.
  What we started for that problem is becoming Shiftwize, a stand-alone product.
how_it_works:
  - Staff submit their availability; managers upload staffing needs.
  - An optimization solver builds the schedule.
  - It never breaks hard rules, and works toward the soft goals.
features:
  - "Hard rules it never breaks: availability, max hours, shift-lead coverage, consecutive days, no overstaffing."
  - "Soft goals it works toward: hit staffing targets, spread hours fairly, avoid split shifts."
  - Peak-hour coverage met across test weeks.
tech: [Python, Linear and constraint optimization, Spreadsheet-upload web UI]
order: 4
---
