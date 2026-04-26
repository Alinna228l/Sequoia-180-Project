# Sequoia Parks Conservancy — Marketing Execution Toolkit

A buildable marketing runway for **Sequoia Parks Conservancy (SPC)**, working backward from the **LA28 Opening Ceremony on July 14, 2028**. The toolkit translates strategy into concrete weekly and monthly moves a small team can actually ship — across audiences, partnerships, content, and the existing SPC tech stack.

## Overview

This repository ships a single self-contained deliverable: a long-form, navigable execution toolkit covering audience strategy, partnership prospecting, the conversion funnel, a small-team short-form content engine, intern responsibilities, the SPC tooling stack, copy-paste AI prompts, a month-by-month plan to LA28, and KPI baselines.

It is built to be opened directly in a browser, handed to a stakeholder, or printed — no build step, no dependencies, no server.

## Open this first

**`SPC_Execution_Toolkit.html`** — open in any modern browser.

## Toolkit sections

The HTML deliverable is organized into the following sections (matching the in-page sticky nav anchors):

- **Strategy** (`#strategy`) — six bets the toolkit is built around
- **Audiences** (`#audiences`) — three working segments, framed as hypotheses
- **Partners** (`#partners`) — 25+ real, public-route partner prospects
- **USC** (`#usc`) — a potential USC partnership and how the conversation could open
- **Funnel** (`#funnel`) — strengthening each link, leading with email capture
- **Content** (`#content`) — a small-team TikTok / Reels strategy
- **Interns** (`#interns`) — day-to-day responsibilities and deliverables
- **Stack** (`#stack`) — what SPC runs today vs. suggested future capabilities
- **Prompts** (`#prompts`) — copy-paste AI prompts with embedded guidance
- **Plan** (`#plan`) — month-by-month plan to July 14, 2028
- **KPIs** (`#kpis`) — baselines and hypothetical targets

## Implementation notes

- **Single self-contained HTML file.** All CSS and JS are inlined; there are no external assets, build tools, or runtime dependencies.
- **Responsive layout.** Hero, grids, and tables collapse cleanly on tablet and mobile widths.
- **Sticky nav with scroll spy.** The top nav stays pinned and highlights the active section as the reader scrolls.
- **Copy buttons on prompts.** Each AI prompt block has a one-click copy-to-clipboard control.
- **No tracking, no fonts CDN, no external scripts.** Safe to share via email, drive, or print.

## Source and citation standards

This toolkit is intended to hold up to scrutiny from program leadership, board members, and partner organizations. Treat sourcing as a hard requirement, not a polish step.

- **Every public statistic, benchmark, or third-party claim must carry an inline citation** with a link to a primary or reputable secondary source.
- **Unsupported claims must be removed**, or **explicitly labeled** as `hypothetical`, `internal baseline`, or `working assumption` so a reader can tell modeled targets apart from observed reality.
- **Targets and KPIs** are framed as hypotheses against current baselines — not as commitments — until SPC has the analytics in place to set real goals.
- **Partner prospects** are listed via public-route only: public websites, public partnership pages, public press. No private contacts, no confidential intros.

When in doubt: cite it, label it as hypothetical, or cut it.

## SPC stack notes

The `Stack` section reflects what SPC actually runs today and what is in development. When updating the toolkit, keep it consistent with this current state:

**In active use**

- **Monday.com** — project, content, and partnership pipeline management
- **Constant Contact** — email marketing and list management
- **Later.com** — social scheduling and content calendar
- **LinkTree** — link-in-bio routing
- **Google Analytics** — site analytics
- **Bit.ly** — link tracking and short URLs
- **Meta Ads, Reddit Ads, Google Ad Grants** — paid and grant-funded acquisition
- **Canva** and **Adobe** — design and creative production
- **Google Workspace** — docs, sheets, drive, calendar
- **Claude, ChatGPT, Gemini** — AI assistance for drafting, review, and research

**In development**

- **Power BI** — reporting and KPI dashboards (in development; not yet the source of truth)

If a tool is not in this list, it should not appear in the toolkit as part of SPC's current stack. Future-state suggestions belong in the "suggested future capabilities" column of the Stack section.

## Contributor guidance

This toolkit is a living document. Contributions should preserve its tone (practical, sourced, small-team feasible) and its single-file simplicity.

- **Keep it one file.** Do not split into a build pipeline, framework, or asset bundle. Inline any new CSS/JS.
- **Match the existing visual system.** Use the CSS variables already defined in `:root` (moss / paper / bark / sun palette, serif headings, sans body) rather than introducing new colors or fonts.
- **Cite as you write.** New stats, benchmarks, or claims need inline links. If you cannot source it, label it `hypothetical` or remove it.
- **Reflect reality.** Tools, partners, and tactics described as current must actually be in use at SPC. Aspirational items go in clearly labeled "suggested" or "future" buckets.
- **Preserve accessibility.** Keep semantic headings, `aria-labelledby` on sections, sufficient contrast, and keyboard-reachable controls (including copy buttons).
- **Keep section anchors stable.** The sticky nav and any external links rely on the existing `id` values (`#strategy`, `#audiences`, `#partners`, `#usc`, `#funnel`, `#content`, `#interns`, `#stack`, `#prompts`, `#plan`, `#kpis`). Renaming an anchor is a breaking change.
- **Test the file by opening it in a browser** before committing — confirm the nav scroll-spy, copy buttons, and responsive layout still work.

## Update checklist

Run through this list before merging any change to `SPC_Execution_Toolkit.html`:

- [ ] File still opens cleanly in a fresh browser tab with no console errors
- [ ] Sticky top nav stays pinned and highlights the correct section while scrolling
- [ ] All section anchors (`#strategy` … `#kpis`) resolve and scroll to the right place
- [ ] Layout holds up at desktop, tablet (~768px), and mobile (~375px) widths
- [ ] Every new public stat, benchmark, or third-party claim has an inline citation
- [ ] Any unsourced claim is removed or explicitly labeled hypothetical / internal baseline
- [ ] Stack section matches the SPC stack listed above (no phantom tools, Power BI still flagged as in development)
- [ ] Partner list remains public-route only
- [ ] Copy buttons on AI prompts still copy the full prompt text to the clipboard
- [ ] No external scripts, trackers, fonts, or images have been introduced
- [ ] Dates, deadlines, and the LA28 countdown framing are still accurate as of the commit date
