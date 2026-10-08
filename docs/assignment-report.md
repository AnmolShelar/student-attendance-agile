# Agile Level Up Assignment — Student Attendance System

**Course:** Agile, Semester V, TE/DS  
**Project scenario:** A browser-based tool for instructors to record a college class's attendance.  
**Increment:** A searchable roster, session date, Present/Late/Absent status actions, live summary, and browser-local persistence.

**DevOps extension:** Git version control, GitHub Actions CI, GitHub Pages continuous deployment, and a Docker container publish workflow are included in the project files. The hosted workflows require publishing the repository and adding the Docker Hub token as a GitHub secret.

> Replace the author/team details and add your own Jira and implementation screenshots before submitting. The screenshots must show your actual account and work.

## Q1 — Scrum using Jira

### Team and project

Create a Scrum project named **Student Attendance System**. Assign the Product Owner to clarify instructor needs and accept stories, the Scrum Master to facilitate the events and remove blockers, and the Development Team to implement and test the increment. In a solo submission, one student may play multiple roles; disclose that honestly.

### Initial requirements and acceptance criteria

1. **View roster:** show student names and roll numbers; show a clear empty state when there are no students.
2. **Mark present/absent:** let the instructor set each student's status; show the selected state; update totals after a change.
3. **Review totals:** show enrolled, present, absent, and unmarked counts; counts must reconcile to the roster size.
4. **Find records:** search by name/roll number; filter by status; allow search and filter together.

These stories are prioritized and estimated in `jira/product-backlog.csv`. Sprint scope and facilitation notes are in `jira/sprint-plan.md`.

### Sprint and simulated events

Sprint 1 is one week, with the goal of recording a roster and seeing a session summary. Four top-priority stories (14 points) form the sprint backlog. Update Jira issues across **To Do → In Progress → Review → Done** during the simulation. Use the daily Scrum notes in the sprint plan as a starting point, adjusting them to reflect the board and actual work.

At the review, demonstrate the roster, attendance actions, search/filter, and summary. Ask the instructor whether late arrivals and multiple dated sessions are needed. In the retrospective, keep small stories and explicit criteria; improve early clarification of edge cases; action: add late status, session persistence, and automated checks in the next iteration. The Jira artifacts to capture are listed in the sprint plan.

## Q2 — Three Agile development models

### Scenario

An instructor needs an attendance tracker that is simple to use during class. The implementation is deliberately small enough to demonstrate workflow practices and a working increment.

### 1. Kanban

- **Practices:** visualize work, limit work in progress, pull the next item when capacity is available, and improve flow continuously.
- **Board:** Ready → In Progress (WIP limit 2) → Review → Done.
- **Project demonstration:** roster, status controls, summary, search, and feedback changes move as individual cards; acceptance criteria are checked before Done.
- **Practical activity:** configure the four columns and WIP limit; use the Jira board or reproduce it in the report with real screenshot evidence.

### 2. Extreme Programming (XP)

- **Practices:** small releases, close customer feedback, simple design, pair programming, continuous integration, refactoring, and collective quality ownership.
- **Project demonstration:** implement one narrow story at a time; ask an instructor/peer to review the attendance flow; pair on status transition and summary logic; integrate the changes and rerun checks.
- **Practical activity:** conduct a short pair-programming session on `setAttendance` or `summarizeAttendance`, record driver/navigator and the change made. If completed individually, describe it as a planned/simulated activity rather than claiming a real pair session.

### 3. Test Driven Development (TDD)

- **Practices:** Red (write a failing test), Green (minimum implementation), Refactor (improve while tests stay green).
- **Project demonstration:** tests cover totals, unknown/unmarked values, valid and invalid transitions, search, and combined filtering. Source is in `tests/attendance.test.js`; core functions are in `app/attendance.js`.
- **Practical activity:** run `node --test tests/attendance.test.js`, capture the passing output, and explain one Red-Green-Refactor example (e.g., adding the `late` status required a failing summary test before adding its implementation).

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

1. Developer A: add Late button and late summary/filter; Developer B: add date-based persistence and test; PO: review flows; Scrum Master: track blocker and WIP.
2. Daily check: yesterday's completion, today's work, blockers; update board cards as work changes.
3. Review: instructor asks to distinguish late from present and preserve earlier dates; demonstrate a late student, change session date, and return to confirm each date is separate.
4. Implement feedback: add late status, date selection, persistence, summary/filter behavior, and automated tests. Current app is the updated increment.

### Outcome

Short iterations and a prioritized backlog make changes visible and keep the team focused on the highest-value behavior. Acceptance criteria reduce ambiguity, while date-specific records and status tests control regression risk. Daily coordination and a WIP limit help a small team expose capacity issues early. Regular review keeps the increment aligned with instructor expectations. The current prototype is appropriate for a demonstration; a real deployment would need authentication, a shared database, backups, privacy controls, and server-side validation.

## DevOps extension — Git, CI/CD, and Docker

The project defines a feature branch/pull-request workflow. GitHub Actions runs unit tests, builds the Docker image, and smoke-tests the served app for pushes and pull requests to `main`. A second workflow deploys the app folder to GitHub Pages when code reaches `main`. A version-tag workflow publishes the Docker image to Docker Hub using repository secrets. See `docs/devops-guide.md` for setup and evidence screenshots. A successful hosted CI/CD run can only be claimed after the workflows have run in the actual GitHub repository.

## Evidence checklist

- [ ] Jira Scrum project roles and board.
- [ ] Prioritized backlog and Sprint 1 selection.
- [ ] Board after status updates and sprint progress; review/retrospective notes.
- [ ] Kanban board with WIP limit and sample cards.
- [ ] XP pair-programming activity notes (accurately label simulated vs actually performed).
- [ ] TDD test run output.
- [ ] App screenshot showing Late and summary; second date showing session separation.
- [ ] This report updated with your name, team, dates, and actual evidence captions.
