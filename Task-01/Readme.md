# Git Exercises

I came to know about many Git commands and their usage after performing the tasks and completing them one by one. Unfortunately, the website was down, so I am writing my blog until where I have done.

## First Exercise
The exercise was simple; it just meant to start the task by performing a simple command:

```sh
git start 
```

There is nothing much to tell about this exercise.

## Second Exercise
This exercise was about committing individual files with different commit messages rather than committing all at once using `git add .`. The task was to commit the `B.txt` file individually with a message. So, I used the following commands:

```sh
git add B.txt
git commit -m "Committed B.txt file"
git verify
```

The `git verify` command was used to check whether the solution was correct or not.

## Third Exercise
To start the task, I used:

```sh
git start commit-one-file-staged
```

Here, I first used:

```sh
git reset 
```

This command is used in Git to unstage changes that have been added to the staging area but not committed. After this, I committed a file named `A.txt` using:

```sh
git add A.txt
git commit -m "Committed A.txt file"
git verify
```

## Fourth Exercise
To start the task, I used:

```sh
git start ignore-them
```

This task was about `.gitignore`, which tells Git which files or directories to ignore while pushing to GitHub. This keeps our repo clean without pushing unnecessary files. Next, I edited the `.gitignore` file using:

```sh
nano .gitignore

```

Then, I committed the changes:

```sh
git add .gitignore
git commit -m "Ignored the unwanted files"
git verify
```

## Fifth Exercise
To start the task, I used:

```sh
git start chase-branch
```

Here, I used the command:

```sh
git reset escaped --hard
```

- `git reset` moves the current branch to a specific commit.
- `--hard` resets everything, including the HEAD, staging area, and working directory.

This is considered a dangerous command because it permanently deletes all uncommitted changes, and they cannot be undone unless you have a backup.

## Sixth Exercise
To start the exercise, I used:

```sh
git start merge-conflict
```

Here, I needed to edit the `equation.txt` file to resolve the problem:

```sh
nano equation.txt
git add equation.txt
git commit -m "Resolved merge conflict"
git verify
```

## Seventh Exercise
To start the exercise, I used:

```sh
git start save-your-work
```

This was a very interesting one. First, I needed to stash my present working directory:

```sh
git stash
```

Next, I resolved the conflicts in `bug.txt`:

```sh
git add bug.txt
git commit -m "Bug fixed"
git stash pop
nano bug.txt
git add .
git commit -m "Solved bug"
git verify
```

## Eighth Exercise
To start the task, I used:

```sh
git start change-branch-history
```

Here, I used rebase:

```sh
git rebase hot-bugfix
```

Rebasing allows us to change the base of the branch from one commit to another. It takes all the commits from the current branch that are not in `hot-bugfix`, removes them temporarily, moves the current branch to `hot-bugfix`'s latest commit, and replays the removed commits on top.

## Ninth Exercise
To start the task, I used:

```sh
git start remove-ignored
```

Here, I needed to remove a file that was already committed in Git. For that, I used:

```sh
git rm ignored.txt
git commit -m "Removed ignored.txt"
git verify
```

Another way to do this is:

```sh
rm ignored.txt
git add .
git commit -m "Removed ignored.txt"
git verify
```

However, the `git rm` command is preferable as it does both tasks at once.

## Tenth Exercise
To start the task, I used:

```sh
git start case-sensitive-filename
```

This task was similar to the last one but involved renaming a committed file. This can be done using:

```sh
git mv File.txt file.txt
git commit -m "Renamed the file"
git verify
```

## Eleventh Exercise
To start the task, I used:

```sh
git start fix-typo
```

Here, I learned about `amend`, which allows editing the previous commit message. First, I fixed the typo in the file and then used:

```sh
git commit -a --amend
```

This lets me edit the previous commit message. Then, I verified the task:

```sh
git verify
```

## Twelfth Exercise
To start the task, I used:

```sh
git start forge-date
```

This task was about editing the date of the previous commit message. I used:

```sh
git commit --amend --no-edit --date="1987-08-03"
git verify
```

## Thirteenth Exercise
To start the task, I used:

```sh
git start fix-old-typo
```

I used interactive rebase:

```sh
git rebase -i HEAD^^
```

I changed `pick` to `edit` for the corresponding commit message, added the file again, and then:

```sh
git add .
git rebase --continue
git verify
```

## Fourteenth Exercise
To start the task, I used:

```sh
git start commit-lost
```

I used:

```sh
git reflog
git reset --hard HEAD@{1}
git verify
```

`git reflog` helps track changes, and `git reset --hard HEAD@{1}` resets the working directory, staging area, and HEAD to the previous recorded state.

## Fifteenth Exercise
To start the task, I used:

```sh
git start split-commit
```

I used:

```sh
git reset HEAD^
```

This moves to the previous HEAD, allowing me to commit the files separately:

```sh
git add first.txt
git commit -m "First.txt committed"
git add second.txt
git commit -m "Second.txt committed"
git verify
```

This successfully splits the commit into separate commits for each file.

