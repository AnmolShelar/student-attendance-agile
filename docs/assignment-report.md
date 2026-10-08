# Agile Level Up Assignment — Student Attendance System

**Course:** Agile, Semester V, TE/DS  
**Project scenario:** A browser-based tool for instructors to record a college class's attendance.  
**Increment:** A searchable roster, session date, Present/Late/Absent status actions, live summary, and browser-local persistence.

**Author:** Anmol Shelar
**Team format:** Solo demonstration. I performed the Product Owner, Scrum Master, and Developer responsibilities; no additional team members or pair-programming session are claimed.

**DevOps extension:** The public repository is [AnmolShelar/student-attendance-agile](https://github.com/AnmolShelar/student-attendance-agile). GitHub Actions CI and Docker publishing have succeeded, and the GitHub Pages deployment is live at [the attendance app](https://anmolshelar.github.io/student-attendance-agile/). Docker Hub publishes `anmolfr/student-attendance:1.0.0`.

> Replace the author/team details and add your own Jira and implementation screenshots before submitting. The screenshots must show your actual account and work.

## Q1 — Scrum using Jira

### Team and project

Created the Jira Scrum space **Student Attendance System** (key `SAS`). Jira account Anmol Shelar is the sole assignee. In this solo demonstration I take the Product Owner role (clarify and prioritize instructor needs), Scrum Master role (plan the sprint and record simulated events), and Developer role (implement and verify the increment). The board is available at [SAS backlog](https://librarymanagementsystemanmol.atlassian.net/jira/software/projects/SAS/boards/68/backlog).

### Initial requirements and acceptance criteria

1. **View roster:** show student names and roll numbers; show a clear empty state when there are no students.
2. **Mark present/absent:** let the instructor set each student's status; show the selected state; update totals after a change.
3. **Review totals:** show enrolled, present, absent, and unmarked counts; counts must reconcile to the roster size.
4. **Find records:** search by name/roll number; filter by status; allow search and filter together.

The Jira backlog currently contains five assigned stories. The four first-increment stories are estimated at 3, 5, 3, and 3 points (14 total); the separate late/session-date feedback story remains unestimated as follow-up scope. The matching detailed acceptance criteria and facilitation notes are in `jira/product-backlog.csv` and `jira/sprint-plan.md`.

### Sprint and simulated events

Sprint 1 is active for 8–15 October 2026 with the goal of recording the roster and session summary. Its four stories total 14 points. Jira currently shows SAS-1 and SAS-2 Done, SAS-3 In Progress, and SAS-4 To Do. This is a staged classroom demonstration snapshot of the implemented increment, not a claim that work took four separate days. The daily Scrum, review, and retrospective notes are explicitly simulated.

At the review, demonstrate the roster, attendance actions, search/filter, and summary. Simulated instructor feedback requests late arrivals and separate dated sessions; these are captured in the follow-up story and implemented in the current increment. In the retrospective, keep small stories and explicit criteria; improve early clarification of edge cases; action: retain automated checks and validate persistence on a second date. The Jira artifacts to capture are listed in the sprint plan.

## Q2 — Three Agile development models

### Scenario

An instructor needs an attendance tracker that is simple to use during class. The implementation is deliberately small enough to demonstrate workflow practices and a working increment.

### 1. Kanban

- **Practices:** visualize work, limit work in progress, pull the next item when capacity is available, and improve flow continuously.
- **Jira demonstration board:** a separate project, **Student Attendance Kanban Demo** (SAKD), uses Backlog → Selected for Development → In Progress → Done. The In Progress column has a WIP threshold of 2; Jira flags a limit breach but does not prevent extra cards. Sample attendance work is distributed across the columns. The separate board was used because the SAS project is team-managed Scrum.
- **Project demonstration:** roster, status controls, summary, search, and feedback changes move as individual cards; acceptance criteria are checked before Done.
- **Practical activity:** use the sample cards to explain how work is pulled through the board and keep In Progress at or below two items.

### 2. Extreme Programming (XP)

- **Practices:** small releases, close customer feedback, simple design, pair programming, continuous integration, refactoring, and collective quality ownership.
- **Project demonstration:** implement one narrow story at a time; ask an instructor/peer to review the attendance flow; pair on status transition and summary logic; integrate the changes and rerun checks.
- **Practical activity:** This was completed individually; no real pair-programming session is claimed. For the model demonstration, use a simulated driver/navigator walkthrough of `setAttendance` or `summarizeAttendance`, and label it as simulated.

### 3. Test Driven Development (TDD)

- **Practices:** Red (write a failing test), Green (minimum implementation), Refactor (improve while tests stay green).
- **Project demonstration:** tests cover totals, unknown/unmarked values, valid and invalid transitions, search, and combined filtering. Source is in `tests/attendance.test.js`; core functions are in `app/attendance.js`.
- **Practical activity:** run `node --test tests/attendance.test.js`, capture the passing output, and explain one Red-Green-Refactor example (e.g., adding the `late` status required a failing summary test before adding its implementation).

**TDD caption:** *Red:* the late-status summary test fails because the summary does not count late arrivals. *Green:* add the smallest calculation change so present + late + absent + unmarked reconcile to the roster. *Refactor:* keep status validation and counting in the attendance module, then rerun all five tests successfully.

Workflow diagrams are in `docs/workflows.md`.

## Q3 — Change management, constraints, and stakeholder feedback

### Initial backlog

The first requirements are: view roster, mark present/absent, review counts, and search/filter. The Product Owner prioritizes core marking and totals before convenience features. This initial scope is captured in the first four rows of the Jira CSV.

### Simulated change and reprioritization

During the review, the instructor requests (a) a **Late** status and (b) separate attendance records by **session date**, so a later class does not overwrite earlier attendance. Add these as backlog items and reprioritize them above lower-value polish. With limited developer capacity, select late status, date-specific persistence, and their tests for a short follow-up iteration. The live app implements those changes using browser local storage. Data remains local to the browser and is demonstration data, not a shared production database.

| Requirement | Value / urgency | Effort | Decision |
|---|---:|---:|---|
| Mark present/absent and show totals | High / immediate | Medium | Done in first increment |
| Add Late status | High / requested in review | Small | Pull into next iteration |
| Keep records by session date | High / avoids overwriting classes | Medium | Pull into next iteration |
| Search and status filter | Medium / usability | Small | Included in current increment |
| Multi-user sync and exports | Lower for demo / later | Large | Defer |

### Short iteration plan and review simulation

1. Solo owner Anmol: add Late button, late summary/filter, date-based persistence, and tests; review the flows in the Product Owner role and track progress in the Scrum Master role.
2. Daily check: record yesterday's completion, today's work, and blockers; update Jira cards as work changes.
3. Review: instructor asks to distinguish late from present and preserve earlier dates; demonstrate a late student, change session date, and return to confirm each date is separate.
4. Implement feedback: add late status, date selection, persistence, summary/filter behavior, and automated tests. Current app is the updated increment.

### Outcome

Short iterations and a prioritized backlog make changes visible and keep the team focused on the highest-value behavior. Acceptance criteria reduce ambiguity, while date-specific records and status tests control regression risk. Daily coordination and a WIP limit help a small team expose capacity issues early. Regular review keeps the increment aligned with instructor expectations. The current prototype is appropriate for a demonstration; a real deployment would need authentication, a shared database, backups, privacy controls, and server-side validation.

## DevOps extension — Git, CI/CD, and Docker

The project defines a feature branch/pull-request workflow. GitHub Actions runs unit tests, builds the Docker image, and smoke-tests the served app for pushes and pull requests to `main`. A second workflow deploys the app folder to GitHub Pages when code reaches `main`. A version-tag workflow publishes the Docker image to Docker Hub using repository secrets. See `docs/devops-guide.md` for setup and evidence screenshots. A successful hosted CI/CD run can only be claimed after the workflows have run in the actual GitHub repository.

## Evidence checklist for the standard output file

- [ ] Jira Student Attendance System project overview/backlog showing the project key and account.
- [ ] Jira roles/team view (identify Anmol as performing the three roles in a solo demo; do not invent teammates).
- [ ] Backlog ordered by priority and story points, plus Sprint 1 goal, dates, and 14-point scope.
- [ ] Jira roles, backlog, sprint scope, and active board state (SAS-1/SAS-2 Done, SAS-3 In Progress, SAS-4 To Do); attach the simulated daily Scrum, review, and retrospective notes from `jira/sprint-plan.md`.
- [ ] Jira Kanban board SAKD with a 2-item In Progress threshold and sample cards across its default columns. Capture the board; explain that it is a separate demo project and the WIP threshold is a warning.
- [ ] Terminal test output (5 passing tests) and the TDD caption above.
- [ ] Live app with Anmol, Patrick, and Harvey; varied statuses and visible totals.
- [ ] Live app on a second date after changing at least one status, then returning to the first date to show records stay separate.
- [ ] GitHub Actions page showing successful CI, GitHub Pages deployment, and Docker publish runs.
- [ ] Docker Hub repository `anmolfr/student-attendance`, Tags view with `1.0.0`.
