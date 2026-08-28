# Smart Retry Insights

Build the frontend for a fintech AI Revenue Recovery Agent called "Smart Retry".

This is the frontend only. Do NOT create or replace the Python ML backend. The backend will be provided separately through a FastAPI REST API.

The product solves payment revenue leakage:

failed payment → eligibility check → ML analyzes retry options → recommends the best retry time → confidence assessment → bounded recovery action → recovery result → audit trail.

TECH STACK

- React

- TypeScript

- Modern component architecture

- Responsive desktop-first design

- REST API integration

- Use mock data initially if the FastAPI backend is not available yet

- Structure API calls so the mock layer can later be replaced by the real FastAPI endpoints without redesigning the UI

VISUAL DIRECTION

Create a polished, premium fintech analytics interface.

IMPORTANT:

DO NOT use dark mode.

DO NOT use black/dark navy backgrounds.

DO NOT use high-contrast neon colors.

DO NOT create a cyberpunk or generic "AI dashboard" aesthetic.

Use a LIGHT, AIRY, MODERN pastel visual system.

Suggested palette:

- warm white / ivory page background

- very light lavender

- soft periwinkle

- muted pastel blue

- soft mint

- pale peach

- subtle rose accents

- charcoal/slate text

- gentle borders

- soft shadows

- rounded cards

The UI should feel calm, trustworthy, intelligent, and premium.

Use color meaningfully:

- mint/green for recovered/success

- soft amber for medium confidence/warnings

- soft rose for failed/lost

- lavender/periwinkle for AI recommendations

- avoid saturated colors

Do not overuse gradients. Use subtle pastel gradients only where they improve hierarchy.

PRODUCT STRUCTURE

Create four main areas:

1. Revenue Recovery Command Center

2. Smart Retry Agent

3. Business Impact

4. Audit Trail

GLOBAL NAVIGATION

Create a clean sidebar or top navigation with:

- Overview

- Recovery Agent

- Business Impact

- Audit Trail

Include:

- product name: "Smart Retry"

- subtitle: "AI Revenue Recovery Agent"

- small status indicator: "Simulation Environment"

PAGE 1: REVENUE RECOVERY COMMAND CENTER

Create a polished executive dashboard.

Hero heading:

"Recover revenue before it's lost."

Supporting text:

"AI-powered retry decisions for failed payments."

Top KPI cards:

- Total Failed Payments

- Eligible for Recovery

- Fixed Schedule Recovery

- Smart Retry Recovery

- Incremental Revenue Recovered

- Recovery Lift

The most important visual should compare:

Fixed Schedule vs Smart Retry

Show:

- recovered INR

- recovery rate

- recovered transactions

- incremental INR

- percentage lift

Use attractive charts:

- comparison bar chart

- recovery-rate visualization

- recovery by decline reason

- Smart Retry selected retry-time distribution

Highlight:

"₹7.09M incremental recovery"

and

"+41.87% recovered-value lift"

These values should eventually come from the backend, not be hardcoded.

PAGE 2: SMART RETRY AGENT

Create an interactive transaction-level decision screen.

Allow the user to:

- select a transaction from a list

OR

- enter transaction context manually

Show:

Transaction amount

Decline reason

Payment method

Failure time

Customer history

Then show a prominent AI recommendation card:

"Recommended Action"

Example:

"Retry in 2 hours"

Display:

- calibrated probability

- confidence tier

- eligibility

- reason/context summary

Below it show candidate retry times as a clean horizontal or vertical comparison:

15m

30m

1h

2h

6h

12h

24h

48h

72h

Each should show predicted probability.

Highlight the selected candidate.

Include a "Recovery Workflow" visual:

Payment Failed

→ Eligibility Checked

→ Candidate Times Scored

→ Retry Selected

→ Retry Executed

→ Recovered / Stopped

Add a clearly bounded action button:

"Execute Simulated Retry"

This must be clearly labeled as a simulation/demo action, not a real payment operation.

PAGE 3: BUSINESS IMPACT

Create a strong business-value presentation.

Main comparison:

Fixed Schedule

₹16.93M recovered

VS

Smart Retry

₹24.02M recovered

Center the incremental result:

"+₹7.09M incremental recovery"

"+41.87% recovered-value lift"

Show:

- recovery-rate comparison

- recovery by decline reason

- recovery by payment method

- recovery by amount band

- retry-time distribution

Also show confidence-tier performance:

High

₹8.00M incremental

Medium

₹1.65M incremental

Low

−₹2.56M incremental

Do NOT hide the negative low-confidence result.

Instead present it as an important product insight:

"Low-confidence recommendations should be bounded or stopped."

Add a small methodology note:

"Results are from a synthetic-data policy simulation and are not production payment performance."

PAGE 4: AUDIT TRAIL

Create a clean chronological event timeline.

Example:

Payment Failed

↓

Retry Eligibility Checked

↓

Candidate Retry Times Scored

↓

AI Recommendation Generated

↓

Confidence Evaluated

↓

Bounded Retry Action

↓

Payment Recovered / Workflow Stopped

Show transaction ID, timestamp, action, selected retry time, confidence, result, and recovered amount.

Allow filtering by:

- transaction

- result

- confidence

- decline reason

API INTEGRATION

Prepare the frontend for these FastAPI endpoints:

GET /api/dashboard

GET /api/business-impact

GET /api/recovery-breakdown

GET /api/retry-distribution

GET /api/confidence

GET /api/audit

GET /api/transactions

POST /api/predict

POST /api/simulate

Create a centralized API client so the backend base URL can be configured through an environment variable such as:

VITE_API_BASE_URL

Do not scatter URLs throughout components.

Use loading states, empty states, and graceful API error states.

For now, if the backend is unavailable, use realistic mock data behind a clearly separated mock service layer.

IMPORTANT PRODUCT CONSTRAINTS

- Do not invent ML metrics that are not returned by the backend.

- Do not imply the system is connected to live Razorpay payments.

- Clearly label the application as a simulation/prototype.

- Do not display fake "live" payment activity.

- Keep the UI polished but restrained.

- Prioritize readability and judge/demo friendliness.

- Make the business-value comparison immediately understandable.

The final frontend should feel like a credible fintech revenue-recovery product rather than a generic ML dashboard.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/aab65115-1905-4fac-9dce-c972f075a077).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
