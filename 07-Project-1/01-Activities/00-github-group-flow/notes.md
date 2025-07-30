# Github Group Flow

## Flow for group work in Github.com

There are a lot of different types of flows for work in github.com. Just make sure that your group follows at least 1 standardized flow and stick to it.

The type of flow that we will be doing in class will be based on pull requests which bears some similarities to open source projects. We won't squash any commits or do any complicated rebasing too much.

- developer will create a branch for a feature/dev
- developer will push to code to their own branch
- developer will create a pull request and do any discussion with the group on the changes if necessary
- developer and team will work on any merge conflicts
- developer will merge the code into the main branch (the branch main will auto-deploy via continuous deployment)

## Developer branch setup

- clone group repo

```bash

git clone <url>

```

- creates a branch

```bash

git checkout -b <branch-name>

```

- push to your own branch in github (may cause an error)

```bash

git push

```

- copy the error or just type in, to create the branch in github

```bash

git push --set-upstream <branch_name>

```

## Developer making versions and merges

You want to make commit versions frequently. Make a commit version and push (after this you can do a pull request) (repeat this step until you fix all errors in your branch)

```bash

git add -A
git commit -m "Add something to do something"
git push
git pull origin main
# if there was a huge "fast-forward", check and see if the website still works and repeat from "git add -A"

```

Make a pull request only when you want the entire group to have this working new feature.

Make pull request, check with your group before merging any big changes. (most of the time, it should be ok)
Merge the pull the request in github once all merge conflicts are resolved
Everyone in group should do `git pull origin main`

```bash

# do this after major changes/once a day/after merge conflicts
git pull origin main

```
