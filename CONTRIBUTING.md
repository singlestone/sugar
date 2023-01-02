# Contributing

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Introduction](#introduction)
- [Request Support](#request-support)
- [Report an Error or Bug](#report-an-error-or-bug)
- [Request a Feature](#request-a-feature)
- [Project Setup](#project-setup)
- [Contribute Documentation](#contribute-documentation)
- [Contribute Code](#contribute-code)
  - [Run the Project with Live Reload](#run-the-project-with-live-reload)
  - [Create a new Package](#create-a-new-package)
- [Provide Support on Issues](#provide-support-on-issues)
- [Label Issues](#label-issues)
- [Clean Up Issues and PRs](#clean-up-issues-and-prs)
- [Review Pull Requests](#review-pull-requests)
- [Merge Pull Requests](#merge-pull-requests)
- [Tag A Release](#tag-a-release)
- [Join the Project Team](#join-the-project-team)
  - [Ways to Join](#ways-to-join)
- [Attribution](#attribution)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

Thank you so much for your interest in contributing!. All types of contributions are encouraged and valued.
See the [table of contents](#table-of-contents) for different ways to help and details about how this project handles
them!📝

Please make sure to read the relevant section before making your contribution! It will make it a lot easier for us
maintainers to make the most of it and smooth out the experience for all involved. 💚

The [Project Team](#join-the-project-team) looks forward to your contributions. 🙌🏾✨

## Request Support

If you have a question about this project, how to use it, or need clarification about something:

- Open an Issue at <https://github.com/singlestone/sugar/issues>
- Provide as much context as you can about what you're running into.
- Provide project and platform versions (nodejs, npm, etc), depending on what seems relevant. If not, please be ready
  to provide that information if maintainers ask for it.

Once it's filed:

- The project team will [label the issue](#label-issues).
- Someone will try to have a response soon.
- If you or the maintainers don't respond to an issue for 30 days, the [issue will be closed](#clean-up-issues-and-prs).
  If you want to come back to it, reply (once, please), and we'll reopen the existing issue. Please avoid filing new
  issues as extensions of one you already made.

## Report an Error or Bug

If you run into an error or bug with the project:

- Open an Issue at <https://github.com/singlestone/sugar/issues>
- Include _reproduction steps_ that someone else can follow to recreate the bug or error on their own.
- Provide project and platform versions (nodejs, npm, etc), depending on what seems relevant. If not, please be ready
- to provide that information if maintainers ask for it.

Once it's filed:

- The project team will [label the issue](#label-issues).
- A team member will try to reproduce the issue with your provided steps. If there are no repro steps or no clear way
  to reproduce the issue, the team will ask you for those steps and mark the issue as `🚦 Status: Needs Review`. Bugs with the
  `🚦 Status: Needs Review` tag will not be addressed until they are reproduced.
- If the team is able to reproduce the issue, it will be marked `needs-fix`, as well as possibly other tags (such as
  `⏰ Priority: Critical`), and the issue will be left to be [implemented by someone](#contribute-code).
- If you or the maintainers don't respond to an issue for 30 days, the [issue will be closed](#clean-up-issues-and-prs).
  If you want to come back to it, reply (once, please), and we'll reopen the existing issue. Please avoid filing new
  issues as extensions of one you already made.
- `⏰ Priority: Critical` issues may be left open, depending on perceived immediacy and severity, even past the 30 day deadline.

## Request a Feature

If the project doesn't do something you need or want it to do:

- Open an Issue at <https://github.com/singlestone/sugar/issues>
- Provide as much context as you can about what you're running into.
- Please try and be clear about why existing features and alternatives would not work for you.

Once it's filed:

- The project team will [label the issue](#label-issues).
- The project team will evaluate the feature request, possibly asking you more questions to understand its purpose and
  any relevant requirements. If the issue is closed, the team will convey their reasoning and suggest an alternative
  path forward.
- If the feature request is accepted, it will be marked for implementation with `feature-accepted`, which can then be
  done by either by a core team member or by anyone in the community who wants to [contribute code](#contribute-code).

Note: The team is unlikely to be able to accept every single feature request that is filed. Please understand if they
need to say no.

## Project Setup

So you wanna contribute some code! That's great! This project uses GitHub Pull Requests to manage contributions, so
[read up on how to fork a GitHub project and file a PR](https://guides.github.com/activities/forking) if you've never
done it before.

If this seems like a lot or you aren't able to do all this setup, you might also be able to
[edit the files directly](https://help.github.com/articles/editing-files-in-another-user-s-repository/) without having
to do any of this setup. Yes, [even code](#contribute-code).

If you want to go the usual route and run the project locally, though:

- [Install Node.js](https://nodejs.org/en/download/)
  - We recommend using [Volta](https://volta.sh/) or [nvm](https://github.com/nvm-sh/nvm) to install NodeJS
- [Install pnpm](https://pnpm.io/installation)
- [Setup an SSH key with GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

Then in your terminal:

- `git clone git@github.com:singlestone/sugar.git`
- `cd path/to/your/clone`
- `pnpm install`
- `pnpm build`

And you should be ready to go!

## Contribute Documentation

Documentation is a super important, critical part of this project. Docs are how we keep track of what we're doing, how,
and why. It's how we stay on the same page about our policies. And it's how we tell others everything they need in order
to be able to use this project -- or contribute to it. So thank you in advance.

Documentation contributions of any size are welcome! Feel free to file a PR even if you're rewording a sentence to
be more clear, or fixing a spelling mistake!

To contribute documentation:

- [Set up the project](#project-setup).
- Edit or add any relevant documentation.
- Make sure your changes are formatted correctly and consistently with the rest of the documentation.
- Re-read what you wrote, and run a spellchecker on it to make sure you didn't miss anything.
- Write clear, concise commit message(s).
- Go to <https://github.com/singlestone/sugar/pulls> and open a new pull request with your changes.
- If your PR is connected to an open issue, add a line in your PR's description that says `closes #123`, where `#123`is
  the number of the issue you're fixing.

Once you've filed the PR:

- One or more maintainers will use GitHub's review feature to review your PR.
- If the maintainer asks for any changes, edit your changes, push, and ask for another review.
- If the maintainer decides to pass on your PR, they will thank you for the contribution and explain why they won't be
  accepting the changes. That's ok! We still really appreciate you taking the time to do it, and we don't take that
  lightly. 💚
- If your PR gets accepted, it will be marked as such, and merged into the `latest` branch soon after. Your contribution
  will be distributed to the masses next time the maintainers [tag a release](#tag-a-release)

## Contribute Code

We like code commits a lot! They're super handy, and they keep the project going and doing the work it needs to do to be
useful to others.

Code contributions of any size are acceptable!

The main difference between code contributions and documentation contributions is that contributing code requires
inclusion of relevant tests for the code being added or changed. Contributions without accompanying tests will be held
off until a test is added, unless the maintainers consider the specific tests to be either impossible, or way too much
of a burden for such a contribution.

To contribute code:

- [Set up the project](#project-setup).
- Make any necessary changes to the source code.
- Include any [additional documentation](#contribute-documentation) the changes might need.
- Write tests that verify that your contribution works as expected.
- Write clear, concise commit message(s).
- Dependency updates, additions, or removals must be in individual commits.
- Go to <https://github.com/singlestone/sugar/pulls> and open a new pull request with your changes.
- If your PR is connected to an open issue, add a line in your PR's description that says `closes #123`, where `#123`
  is the number of the issue you're fixing.
- This project uses [changesets](https://github.com/changesets/changesets) for release management, so please run
  `pnpm changeset` in your terminal to provide what packages should be bumped, their associated semver bump types,
  and some markdown which will be inserted into changelogs.

Once you've filed the PR:

- Barring unusual circumstances, maintainers will not review PRs until all checks pass (GitHub Actions).
- One or more maintainers will use GitHub's review feature to review your PR.
- If the maintainer asks for any changes, edit your changes, push, and ask for another review. Additional tags
  (such as `needs-tests`) will be added depending on the review.
- If the maintainer decides to pass on your PR, they will thank you for the contribution and explain why they won't be
  accepting the changes. That's ok! We still really appreciate you taking the time to do it, and we don't take that
  lightly. 💚
- If your PR gets accepted, it will be marked as such, and merged into the `latest` branch soon after. Your contribution
  will be distributed to the masses next time the maintainers [tag a release](#tag-a-release)

### Run the Project with Live Reload

As a code contributor, having a low turnaround time on seeing your changes become available is important. It helps you
feel productive and makes sure that your changes are working the way you intend. You can run this project with a live
reload feature that will automatically rebuild the entire project when you make changes.

To use live reload:

- [Set up the project](#project-setup).
- In your terminal, run `pnpm dev`.

### Create a new Package

If you want to create a new package, we have good news! We've written some tooling to make scaffolding
a new package relatively painless. Follow the below steps to get started:

- [Set up the project](#project-setup).
- In your terminal, run `pnpm generate`.

This will prompt you for a few inputs and then generate the necessary files.

## Provide Support on Issues

[Needs Collaborator](#join-the-project-team): none

Helping out other users with their questions is a really awesome way of contributing to any community. It's not uncommon
for most of the issues on an open source projects being support-related questions by users trying to understand
something they ran into, or find their way around a known bug.

Sometimes, the `support` label will be added to things that turn out to actually be other things, like bugs or feature
requests. In that case, suss out the details with the person who filed the original issue, add a comment explaining what
the bug is, and change the label from `support` to `bug` or `feature`. If you can't do this yourself, @mention a
maintainer so they can do it.

In order to help other folks out with their questions:

- Go to the issue tracker and [filter open issues by the `support` label](https://github.com/singlestone/sugar/issues?q=is%3Aopen+is%3Aissue+label%3Asupport).
- Read through the list until you find something that you're familiar enough with to give an answer to.
- Respond to the issue with whatever details are needed to clarify the question, or get more details about what's going
  on.
- Once the discussion wraps up and things are clarified, either close the issue, or ask the original issue filer
  (or a maintainer) to close it for you.

Some notes on picking up support issues:

- Avoid responding to issues you don't know you can answer accurately.
- As much as possible, try to refer to past issues with accepted answers. Link to them from your replies with the
  `#123` format.

## Label Issues

[Needs Collaborator](#join-the-project-team): Issue Tracker

One of the most important tasks in handling issues is labeling them usefully and accurately. All other tasks involving
issues ultimately rely on the issue being classified in such a way that relevant parties looking to do their own tasks
can find them quickly.

In order to label issues, [open up the list of unlabeled issues](https://github.com/singlestone/sugar/issues?q=is%3Aopen+is%3Aissue+no%3Alabel)
and, **from newest to oldest**, read through each one and apply issue labels according to the table below. If you're
unsure about what label to apply, skip the issue and try the next one: don't feel obligated to label each and every
issue yourself!

| Label                          | Apply When                                                                               | Notes                                                                                                                                                     |
| ------------------------------ | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🧐 Needs: Creative Director    | The issue needs attention from Kevin                                                     |                                                                                                                                                           |
| 🧐 Needs: Designer             | The issue needs attention from a designer                                                | This can include Kevin as well                                                                                                                            |
| 🧐 Needs: Developer            | The issue needs attention from a developer                                               |                                                                                                                                                           |
| 🧐 Needs: Steering Committee   | The issue needs attention from the Steering Committee                                    |                                                                                                                                                           |
| ⏰ Priority: Critical          | We need to do this NOW                                                                   | This typically is reserved for security issues or issues that prevent the usage/development of Sugar                                                      |
| ⏰ Priority: High              | We need to do this                                                                       |                                                                                                                                                           |
| ⏰ Priority: Medium            | We should do this                                                                        |                                                                                                                                                           |
| ⏰ Priority: Low               | We can do this                                                                           |                                                                                                                                                           |
| ⏰ Priority: Not Addressing    | We are not addressing this issue at this time                                            |                                                                                                                                                           |
| 🚦 Status: Blocked             | Issue is unable to be completed                                                          | Examples include: that an upstream dependency needs a fix applied, there's a conflict, etc.                                                               |
| 🚦 Status: Needs Review        | Needs additional information before being ready to pick up                               |                                                                                                                                                           |
| 🚦 Status: Ready for Work      | Ready for somebody to pick up                                                            |                                                                                                                                                           |
| ✅ ToDo: Design                | Design work (including comps linked in the issue) is required to consider issue complete |                                                                                                                                                           |
| ✅ ToDo: Documentation         | Documentation work is needed to consider issue complete                                  |                                                                                                                                                           |
| ✅ ToDo: HTML/CSS              | HTML/CSS work is required to consider issue complete                                     |                                                                                                                                                           |
| ✅ ToDo: JavaScript/TypeScript | JavaScript/TypeScript work is required to consider issue complete                        |                                                                                                                                                           |
| ✅ ToDo: Testing               | Testing is required to consider issue complete                                           | This can include user testing for new features/enhancements or unit/integration tests                                                                     |
| 💡 Type: Bug                   | Something wrong with the implementation of Sugar                                         | If something is happening that surprises the _user_ but does not go against the way the code is designed, it should use the `💡 Type: Enhancement` label. |
| 💡 Type: Idea                  | An improvement to Sugar that doesn't have enough details for full implementation         |                                                                                                                                                           |
| 💡 Type: Enhancement           | An improvement to Sugar that requires minor additions to the repository                  |                                                                                                                                                           |
| 💡 Type: Feature               | An improvement to Sugar that requires major additions to the repository                  |                                                                                                                                                           |
| 💡 Type: Duplicate             | An issue already covered by an existing issue                                            |                                                                                                                                                           |

## Clean Up Issues and PRs

[Needs Collaborator](#join-the-project-team): Issue Tracker

Issues and PRs can go stale after a while. Maybe they're abandoned. Maybe the team will not have time to
address them any time soon.

In these cases, they should be closed until they're brought up again or the interaction starts over.

To clean up issues and PRs:

- Search the issue tracker for issues or PRs, and add the term `updated:<=YYYY-MM-DD`, where the date is 30 days before
  today.
- Go through each issue _from oldest to newest_, and close them if **all of the following are true**:
  - not opened by a maintainer
  - not marked as `⏰ Priority: Critical`
  - no explicit messages in the comments asking for it to be left open
  - does not belong to a milestone
- Leave a message when closing saying "Cleaning up stale issue. Please reopen or ping us if and when you're ready to
  resume this. See <https://github.com/singlestone/sugar/blob/latest/CONTRIBUTING.md#clean-up-issues-and-prs> for more details."

## Review Pull Requests

[Needs Collaborator](#join-the-project-team): Maintainer

While anyone can comment on a PR, add feedback, etc., PRs are only _approved_ by team members with Maintainer or
higher permissions.

PR reviews use [GitHub's own review feature](https://help.github.com/articles/about-pull-request-reviews/), which
manages comments, approval, and review iteration.

Some notes:

- You may ask for minor changes ("nitpicks"), but consider whether they are really blockers to merging: try to err on
  the side of "approve, with comments".
- _ALL PULL REQUESTS_ should be covered by a test: either by a previously-failing test, an existing test that covers
  the entire functionality of the submitted code, or new tests to verify any new/changed behavior. All tests must also
  pass and follow established conventions. Test coverage should not drop, unless the specific case is considered
  reasonable by maintainers.
- Please make sure you're familiar with the code or documentation being updated, unless it's a minor change
  (spellchecking, minor formatting, etc). You may @mention another project member who you think is better suited for
  the review, but still provide a non-approving review of your own.
- Be extra kind: people who submit code/doc contributions are putting themselves in a pretty vulnerable position, and
  have put time and care into what they've done (even if that's not clear to you!) -- always respond with respect, be
  understanding, but don't feel like you need to sacrifice your standards for their sake, either.
  Don't be a jerk about it?

## Merge Pull Requests

[Needs Collaborator](#join-the-project-team): Maintainer

PRs are automatically merged by Kodiak if they have `🚦 Status: Automerge` label and have been [approved](#review-pull-requests)
by a maintainer. PRs should not be merged manually.

## Tag A Release

[Needs Collaborator](#join-the-project-team): Maintainer

TBD - need to hash out a bit more of this process. The most important bit here is probably that all tests must pass,
and tags must use [semver](https://semver.org).

## Join the Project Team

### Ways to Join

There are many ways to contribute! Most of them don't require any official status unless otherwise noted. That said,
there's a couple of positions that grant extra repository abilities, and this section describes how they're granted
and what they do.

All of the below positions are granted based on the project team's needs, as well as their consensus opinion about
whether they would like to work with the person and think that they would fit well into that position. The process
is relatively informal, and it's likely that people who express interest in participating can be granted the
permissions they'd like.

You can spot a collaborator on the repo by looking for the `[Collaborator]` or `[Owner]` tags next to their names.

TBD - need to hash out the below list post the Feb 9 Governance/Roadmap meeting.

| Permission    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Issue Tracker | Granted to contributors who express a strong interest in spending time on the project's issue tracker. These tasks are mainly [labeling issues](#label-issues), [cleaning up old ones](#clean-up-issues-and-prs), and [reviewing pull requests](#review-pull-requests), as well as all the usual things non-team-member contributors can do. Issue handlers should not merge pull requests, tag releases, or directly commit code themselves: that should still be done through the usual pull request process. Becoming an Issue Handler means the project team trusts you to understand enough of the team's process and context to implement it on the issue tracker. |
| Maintainer    | Granted to contributors who want to handle the actual pull request merges, tagging new versions, etc. Maintainers should have a good level of familiarity with the codebase, and enough context to understand the implications of various changes, as well as a good sense of the will and expectations of the project team.                                                                                                                                                                                                                                                                                                                                             |
| Admin/Owner   | Granted to people ultimately responsible for the project, its community, etc.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Attribution

This guide was generated using the WeAllJS `CONTRIBUTING.md` generator. [Make your own](https://npm.im/weallcontribute)!
