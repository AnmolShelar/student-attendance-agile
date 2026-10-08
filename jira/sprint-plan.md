# Jira Scrum project and sprint plan

## Scrum project

- **Project:** Student Attendance System
- **Project type:** Scrum
- **Sprint duration:** 1 week (planned 8–15 October 2026)
- **Sprint goal:** An instructor can mark a class roster and see the session's attendance summary.
- **Definition of Done:** story acceptance criteria pass; changes are reviewed; app works in the browser; backlog issue is demonstrated on the Scrum board.

## Roles

Use actual team members in Jira. For an individual/solo submission, one student may perform multiple roles and should say so in the report.

| Role | Responsibility |
|---|---|
| Product Owner | Anmol Shelar — represents instructor needs, prioritizes stories, accepts the increment. |
| Scrum Master | Anmol Shelar — facilitates the simulated planning/daily Scrum/review/retrospective and tracks blockers. |
| Developer | Anmol Shelar — implements, tests, and demonstrates the attendance tracker. |

Suggested class-team names can be entered once teammates are known; do not present placeholders as real participants.

## Sprint 1 selection

Select the top four stories from the CSV: roster display (3 points), mark present/absent (5), attendance summary (3), and search/filter (3). Total: **14 points**. Sprint 1 is active (8–15 October 2026) with SAS-1 through SAS-4; SAS-5 remains in Backlog. Current staged demonstration snapshot: SAS-1 and SAS-2 are Done, SAS-3 is In Progress, and SAS-4 is To Do. The implementation is already present; statuses illustrate a staged sprint walk-through, not a claim that work took four days.

| Day | Work / owner | Board movement |
|---|---|---|
| 1 | Anmol: confirm criteria and roster story | To Do → In Progress |
| 2 | Anmol: status controls and summary calculation | In Progress |
| 3 | Anmol: integrate search/filter and resolve defects | In Progress → Review |
| 4 | Anmol: acceptance walkthrough and increment polish | Review → Done |
| 5 | Anmol: simulated review and retrospective; capture board and app evidence | Sprint complete |

## Daily Scrum simulation notes

These are clearly labelled **simulated** daily Scrum notes for the assignment, not records of real daily meetings:

1. **Day 1:** roster story started; no blockers; next implement status controls.
2. **Day 2:** present/absent actions work; summary calculation is in progress; clarify whether unmarked students count separately.
3. **Day 3:** summary and search are integrated; discovered need to test no-result state; next acceptance walkthrough.
4. **Day 4:** acceptance criteria pass; one visual issue fixed; ready for review.

## Sprint Review

Demonstrate the roster, mark students present/absent, filter/search the list, and show the live count summary. Ask the stakeholder whether late arrival should be tracked separately. Treat the answer as customer feedback for Question 3.

## Retrospective

- **Keep:** small stories with explicit acceptance criteria made progress visible.
- **Improve:** agree on edge cases (unmarked, late, date/session) before implementation.
- **Action:** add a late status and persistent, date-specific session records in the next iteration; add tests for summary and filtering.

## Jira completion steps and required evidence

SAS-1 through SAS-4 are in active Sprint 1 and SAS-5 remains in Backlog. The Scrum board's current workflow is **To Do → In Progress → Done**; Review is described in the meeting notes, not configured as a Scrum status. An empty SAS Sprint 2 may remain visible; it is out of scope. A separate **Student Attendance Kanban Demo** Jira project was created at board 101. Its In Progress column has a maximum WIP threshold of 2, with example cards across Backlog, Selected for Development, In Progress, and Done. Jira's selected/development labels are left at their defaults; this board is separate from the SAS Scrum project. The WIP threshold signals when the column exceeds the limit; it does not hard-block additional cards.

Capture the actual Jira project name, role owner, ordered backlog priorities, Sprint 1 goal/dates/scope, board status changes, daily Scrum, review, and retrospective notes. Do not claim simulated ceremonies as events with real participants.
