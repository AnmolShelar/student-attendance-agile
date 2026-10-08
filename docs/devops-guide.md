# Git, GitHub Actions, and Docker demonstration

## What the pipeline does

| Stage | Trigger | Evidence |
|---|---|---|
| Continuous Integration | Push or pull request to `main` | `CI` workflow runs unit tests, builds the Docker image, and smoke-tests the served app. |
| Continuous Deployment — web | Push to `main` | `CD — GitHub Pages` deploys `app/`; the deployment environment reports the live URL. |
| Continuous Deployment — container | Push a version tag such as `v1.0.0` | `CD — Publish Docker image` pushes `student-attendance:1.0.0` and `student-attendance:latest` to Docker Hub. |

## Git workflow

Use a feature branch and pull request for a visible CI demonstration:

```sh
git switch -c feature/attendance-demo
git add .
git commit -m "Build student attendance demo and CI pipeline"
git push -u origin feature/attendance-demo
```

Open a pull request to `main`, wait for the CI checks to pass, and merge. The push to `main` runs CI again and deploys the site to GitHub Pages.

## One-time GitHub setup

1. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
2. Add repository variable `DOCKERHUB_USERNAME` with the Docker Hub handle `anmolfr`.
3. Add repository secret `DOCKERHUB_TOKEN` with a Docker Hub personal access token that has write access. Enter it directly in GitHub settings; never paste it in chat or commit it.
4. The Docker publish workflow only runs when a version tag is pushed, so normal feature branch pushes do not publish images.

## Publish a Docker image

After the Docker secret is configured and `main` contains the workflows, create a version tag:

```sh
git switch main
git pull --ff-only
git tag v1.0.0
git push origin v1.0.0
```

Then show the successful `CD — Publish Docker image` run in the GitHub **Actions** tab and the `student-attendance` repository/tag in Docker Hub. Do not create/push a release tag until the repository secret is configured.

## Screenshots for the professor

1. GitHub repository overview with README and workflow files.
2. A pull request page with green CI status.
3. The CI run showing test results, Docker build, and smoke test.
4. The GitHub Pages deployment run and live app URL.
5. The Docker publish run and Docker Hub version tag.
6. The live app with Anmol, Patrick, and Harvey and attendance counts changed.
