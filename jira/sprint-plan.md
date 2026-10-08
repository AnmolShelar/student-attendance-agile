# Jira Scrum project and sprint plan

## Scrum project

- **Project:** Student Attendance System
- **Project type:** Scrum
- **Sprint duration:** 1 week
- **Sprint goal:** An instructor can mark a class roster and see the session's attendance summary.
- **Definition of Done:** story acceptance criteria pass; changes are reviewed; app works in the browser; backlog issue is demonstrated on the Scrum board.

## Roles

Use actual team members in Jira. For an individual/solo submission, one student may perform multiple roles and should say so in the report.

| Role | Responsibility |
|---|---|
| Product Owner | Represents instructor needs, prioritizes stories, accepts the increment. |
| Scrum Master | Facilitates planning/daily Scrum/review/retrospective and removes blockers. |
| Development Team | Implements, tests, and demonstrates the attendance tracker. |

Suggested class-team names can be entered once teammates are known; do not present placeholders as real participants.

## Sprint 1 selection

Select the top four stories from the CSV: roster display (3 points), mark present/absent (5), attendance summary (3), and search/filter (3). Total: **14 points**. Keep late status and persistence as the first scope for the feedback iteration in Question 3.

| Day | Work / owner (replace with team names) | Board movement |
|---|---|---|
| 1 | Developer A: roster UI; Developer B: story/task setup; PO: confirm criteria | To Do → In Progress |
| 2 | Developer A: status controls; Developer B: write summary calculation and checks | In Progress |
| 3 | Team: integrate, search/filter, resolve defects | In Progress → Review |
| 4 | Team: acceptance walkthrough and increment polish | Review → Done |
| 5 | Review and retrospective; capture board and app evidence | Sprint complete |

## Daily Scrum simulation notes

Record these as dated Jira comments or meeting notes during the actual sprint simulation:

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

## Required Jira evidence

Capture the actual Jira project name, backlog priorities, Sprint 1 scope, board status changes, and sprint review/retrospective notes. Replace role placeholders with actual names and dates before submission.
