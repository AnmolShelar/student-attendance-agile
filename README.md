# Student Attendance System — Agile Level Up Assignment

This submission uses one scenario across all three questions: a lightweight attendance tracker for a college class. The web app runs locally in a browser and saves records in that browser's local storage.

## Contents

- `app/` — working attendance tracker (includes the updated requirements from the simulated customer review)
- `docs/assignment-report.md` — report and activity evidence notes for Questions 1–3
- `docs/workflows.md` — Mermaid diagrams for Scrum, Kanban, XP, TDD, and the feedback iteration
- `jira/product-backlog.csv` — Jira-importable sample backlog with stories, criteria, priorities, and estimates
- `jira/sprint-plan.md` — suggested team roles, sprint scope, task assignments, daily Scrum log, review, and retrospective
- `tests/` — automated unit tests for attendance calculations and transitions
- `.github/workflows/` — CI checks, GitHub Pages deployment, and version-tagged Docker Hub publishing
- `Dockerfile` / `compose.yaml` — run the demo as a container

## Run the app

Open `app/index.html` in a modern browser. No server or package installation is required. Use **Reset demo data** to clear saved attendance and restore the sample roster.

## Run the TDD activity tests

From this directory, run:

```sh
node --test tests/attendance.test.js
```

## Run with Docker

```sh
docker compose up --build
```

Open `http://localhost:8080`. Stop it with `Ctrl+C`.

## CI/CD demonstration

- **CI:** pushes and pull requests to `main` run the unit tests, build the container, and smoke-test the served app.
- **CD to web:** a push to `main` deploys `app/` to GitHub Pages.
- **CD to Docker Hub:** a version tag such as `v1.0.0` publishes a versioned and `latest` container image.

Before enabling the Docker publish workflow, add repository variable `DOCKERHUB_USERNAME` and repository secret `DOCKERHUB_TOKEN` in GitHub **Settings → Secrets and variables → Actions**. Use a Docker Hub access token with write access; never put it in source files or screenshots.

See `docs/devops-guide.md` for Git steps, workflow details, and evidence to capture.

## Jira setup

Create a Scrum project named **Student Attendance System**. Create the roles and sprint using `jira/sprint-plan.md`; import `jira/product-backlog.csv` using Jira's CSV importer and map `Summary`, `Issue Type`, `Description`, `Priority`, and `Story Points` where available. Jira editions differ in available import fields, so set the sprint and assignees in the project UI if the importer does not offer them.

The Jira board, meetings, and screenshots must be captured in your own Jira account. The files here provide ready-to-enter content; they do not claim that a Jira project has already been created.

## Suggested evidence screenshots

1. Jira project board showing issues and sprint columns.
2. Jira backlog with selected sprint and prioritized stories.
3. Daily Scrum status/progress and sprint burndown (if available in your Jira plan).
4. App showing roster, attendance statuses, and summary after the feedback change.
5. Terminal showing the test results.
6. Docker Hub image page only if your instructor asks to connect this assignment to the earlier Docker experiment.
