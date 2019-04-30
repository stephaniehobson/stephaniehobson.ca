---
title: "Using Tinypng to optimize images from the command line"
date: 2019-04-30T16:36:56-05:00
year: "2019"
tags:
    - code
    - webdesign
---

Our team has identified image optimization as one of the more time consuming and often forgotten steps of our current process. In the long run we want to automate it using a git pre-commit hook. As the first step to this I've got PNG and JPG optimization working manually using [TinyPNG](https://tinypng.com/) from the command line:

```
git diff --diff-filter=ACM --name-only HEAD | grep ".png\|.jpg" | xargs tinypng
```

To set this up:

1. [Get a TinyPNG API key](https://tinypng.com/developers).
1. Save the API key in a file named `.tinypng` in your home directory.
1. Install the [npm TinyPNG CLI](https://www.npmjs.com/package/tinypng-cli).
    Because it's not part of our site yet I installed it globally:
    ```
    npm install -g tinypng-cli
    ```
1. Add the files you want to optimize to Git's staging area. (`git add *` will add all the files you've edited)
1. Run `git diff --diff-filter=ACM --name-only HEAD | grep ".png\|.jpg" | xargs tinypng`.
1. Add add the new modified files to your Git staging area before committing.

What it's doing:

`git diff`
: Telling Git we want to a list of differences between two things

`--diff-filter=ACM`
: Filtering what we want to compare to include only Additions, Changes, and Modifications

`--name-only`
: Asking for just the file names instead of the full output.

`HEAD`
: One of the two things we're comparing is the files in the staging area. Specifying `HEAD` here says to compare them to the files in the most recent commit.

`|`
: This is a "pipe", it passes the results of the Git diff to the next command.

`grep`
: Grep is a command line search tool.

`".png\|.jpg"`
: I'm using grep to find only the files with .png or .jpg file extensions.

`|`
: Another pipe to pass our reduced list of files on to the next step.

`xargs`
: This is the results of the grep. (Why it goes here instead of after the next command I do not know.)

`tinypng`
: Finally we get tinypng to do its magic. The compressed files will replace the originals.
