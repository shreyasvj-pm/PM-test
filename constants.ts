import type { Round } from './types';

export const TOTAL_ROUNDS = 4;

export const GAME_ROUNDS: Round[] = [
  {
    roundNumber: 1,
    scenario: 'You are a Product Manager of a mature enterprise collaboration platform. Recent budget cuts force you to prioritize carefully. Stakeholders are divided: the CTO urges refactoring the core architecture to reduce tech debt; Marketing demands a new AI-driven feature to fend off a rising competitor; partners want more platform integrations; and customer support warns an outdated legacy module is causing frequent issues.',
    choices: [
      { id: 'A', text: 'Invest in an AI-powered feature (e.g. smarter search/personalization) to gain buzz.', outcome: 'The AI feature launch generates excitement and some early adoption. However, without upgrading the core, you experience stability issues and occasional outages. Marketing is pleased, but the CTO is concerned about mounting tech debt.', metrics: { adoption: 15, nps: -10, revenue: 5 } },
      { id: 'B', text: 'Focus on platform support by building new APIs and partner integrations.', outcome: 'Strengthening partner integrations brings new alliances and a few joint customers. But core performance problems persist, and the product’s innovation pace lags behind the competitor. Growth is steady but slower than needed.', metrics: { adoption: 5, nps: -5, revenue: 10 } },
      { id: 'C', text: 'Enhance the core architecture (refactor backend, improve reliability).', outcome: 'The refactoring improves stability and reduces bugs. Engineering is thrilled, and support tickets drop. However, customers grow impatient for new features, and executives worry you’re missing market opportunities by not adding visible capabilities.', metrics: { adoption: -5, nps: 20, revenue: -5 } },
      { id: 'D', text: 'Sunset the old legacy module (begin end-of-life) to free up resources.', outcome: 'Retiring the legacy module delights support (fewer headaches) and frees developer time. Some legacy users are upset (requiring compensatory discounts), but the team can now focus on modern features. The competitor still moves on without this feature gap.', metrics: { adoption: -10, nps: -15, revenue: 0 } },
    ],
  },
  {
    roundNumber: 2,
    scenario: 'A quarter later, you review outcomes. Profit margins still lag targets. A major enterprise client complains about a missing advanced feature. Meanwhile, industry news highlights AI ethics concerns. Leadership demands more impact.',
    choices: [
      { id: 'A', text: 'Continue infrastructure investment – push more backend improvements to future-proof the platform.', outcome: 'Platform performance keeps improving and support issues vanish. However, without new “hero” features, user growth remains flat. Executives are frustrated by the lack of visible gains on the top line.', metrics: { adoption: -5, nps: 15, revenue: -10 } },
      { id: 'B', text: 'Double down on AI features – launch a beta of the AI tool (despite ethical questions).', outcome: 'The AI beta impresses tech-savvy users and gets industry press. However, because ethics reviews were bypassed, some users express privacy concerns, and you may face scrutiny. Marketing is energized, but your legal team raises red flags.', metrics: { adoption: 20, nps: -20, revenue: 10 } },
      { id: 'C', text: 'Forge a strategic partnership – collaborate with a well-known vendor for co-marketing and shared feature development.', outcome: 'The partnership opens new markets and adds a modest revenue share. Integration work is intensive, stretching your team thin. Some short-term revenue comes in, but resource conflicts emerge between partner demands and your roadmap.', metrics: { adoption: 10, nps: 0, revenue: 15 } },
      { id: 'D', text: 'Plan further EOLs – announce retiring a rarely used legacy feature to reallocate work.', outcome: 'Transparency about retiring another old feature wins trust from most users. Developers now focus on core platform work. The freed-up resources are used to polish remaining features, pleasing existing customers and slowly rebuilding confidence.', metrics: { adoption: 0, nps: 10, revenue: 5 } },
    ],
  },
  {
    roundNumber: 3,
    scenario: 'Suddenly, a competitor launches a game-changing feature that attracts media attention. Simultaneously, regulators are examining data use, and your recent AI initiative faces internal ethics review. Leadership demands a decisive move.',
    choices: [
      { id: 'A', text: 'Push AI live immediately to match the competitor’s innovation (risky move).', outcome: 'You match the competitor’s deadline with a public AI release. Short-term media attention is positive, but later compliance issues emerge (e.g. an unvetted data model causes a glitch), risking fines. Your boldness paid off in PR but at regulatory cost.', metrics: { adoption: 25, nps: -30, revenue: 5 } },
      { id: 'B', text: 'Shift focus to user-facing enhancements – build features that directly address customer requests.', outcome: 'Delivering on promised enhancements boosts user satisfaction and retention. The product seems responsive and customer-focused. However, some fear you are “missing the AI train,” and tech leaders worry about lagging tech leadership.', metrics: { adoption: 15, nps: 25, revenue: 10 } },
      { id: 'C', text: 'Ensure compliance first – halt new features to conduct a full data/privacy audit.', outcome: 'By focusing on compliance, you avoid any regulatory penalties and strengthen user trust. However, the new competitor feature steals the spotlight, and internal morale dips because innovation feels stalled. Users appreciate the integrity but some defect to “shiny” alternatives.', metrics: { adoption: -10, nps: 15, revenue: -5 } },
      { id: 'D', text: 'Propose a strategic pivot – develop a new roadmap targeting an emerging market or use-case.', outcome: 'The pivot proposal energizes the leadership team with a fresh vision. You decide to explore a new segment, splitting focus. This creates uncertainty: some developers are excited by the new direction, others frustrated by the change of course. It’s high-risk: success could open new growth, or it might squander remaining momentum.', metrics: { adoption: 0, nps: -10, revenue: -15 } },
    ],
  },
  {
    roundNumber: 4,
    scenario: 'It’s crunch time before the next release. A critical outage has occurred in the old billing system (a downstream legacy component), shaking customer confidence. You have one final chance to allocate resources to stabilize the product before year-end.',
    choices: [
      { id: 'A', text: 'Immediate bug-fix sprint – assign everyone to fix the billing crash and freeze other work.', outcome: 'The team fixes the billing bug quickly. System stability returns, and customers applaud the swift response. Innovation sprints are delayed, so promised AI/features slip, causing slight disappointment internally. But trust is restored.', metrics: { adoption: -5, nps: 40, revenue: 5 } },
      { id: 'B', text: 'Continue planned innovation – keep pushing the AI/feature development and patch issues when convenient.', outcome: 'New features are delivered on schedule, but the billing issue drags on. Another outage follows, eroding customer trust. The leadership faces criticism for prioritizing innovation over reliability. Morale sours as support scrambles.', metrics: { adoption: 10, nps: -50, revenue: -20 } },
      { id: 'C', text: 'Communicate and train – pause dev work this cycle and focus on customer communications, training, and interim workarounds.', outcome: 'By communicating transparently and offering training, users appreciate the support and temporary solutions. There is no major outage, but no new features either, leaving some stakeholders anxious about lack of progress. However, the team avoids rushing and burnout.', metrics: { adoption: 0, nps: 10, revenue: -5 } },
      { id: 'D', text: 'Finalize EOL & refocus – complete the billing module sunset and shift team to core improvements.', outcome: 'You fully retire the old billing component mid-release. This finalizes the transition begun earlier. The team is now unencumbered and quickly rebuilds a modern replacement that is reliable. Some legacy clients drop off due to change pains, but a new, future-ready product emerges.', metrics: { adoption: 5, nps: 20, revenue: 15 } },
    ]
  },
];