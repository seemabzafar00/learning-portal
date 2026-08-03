# Learning Portal

A prototype training portal built during a one-month internship, demonstrating proposed improvements to the existing training dashboard experience.

## Overview

This project is a working, click-through prototype covering the highest-priority missing features identified in the original portal. It was built from scratch using core web technologies within a one-month timeline by two first-time interns.

## Features

- **Dashboard** — summary cards for total programs, active programs, and certificates
- **Programs** — searchable list of all programs
- **Resource Library** — files grouped by week, so each week's material is easy to find
- **Events** — upcoming events sorted automatically by date
- **Certificates** — certificate cards with download and LinkedIn share actions
- **Mentors** — mentor profile cards with office hours
- **Notifications** — toggle switches for email, SMS, push, and weekly summary preferences

Live class and discussion forum were intentionally left out of this version.

## Tech Stack

- HTML5 — structure
- CSS3 — styling
- JavaScript (vanilla) — search, filtering, sorting, and page navigation

No backend or database is connected yet — all data is stored directly in `script.js` for demonstration purposes.

## How to Run

1. Clone or download this repository
2. Open `index.html` in any browser
   (or use the "Live Server" extension in VS Code for auto-refresh while editing)

## Current Limitations

- Data is hardcoded, not pulled from a database
- No login or user accounts
- Download and Share buttons are UI-only, not yet functional
- Not yet tested on mobile screen sizes

## Next Steps

- Connect to a real database
- Add login system with role-based views (student / mentor / admin)
- Make certificate download and LinkedIn share functional
- Test and refine for mobile devices

## Author

Seemab Zafar & [Team Member Name] — Interns, NCAI
