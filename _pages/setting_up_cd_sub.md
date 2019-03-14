---
title: Setting Up Continuous Delivery
layout: page
permalink: cloud/setting_up_cd_sub.html
---

### Setting up Continuous Delivery

1. Make sure your code is in version control in Github or Bitbucket.
1. Get started with your pipeline:
  * If you're using Github, you'll be using [TravisCI](https://travis-ci.org/). Start by adding a .travis.yml to your repository.
  * If you're using Bitbucket, you'll be using [Bitbucket Pipelines](https://confluence.atlassian.com/bitbucket/get-started-with-bitbucket-pipelines-792298921.html). This link has all the information you need to get started.
1. Remember to store your secrets (passwords, AWS access keys, etc.) in encrypted environment variables. Don't commit them to your codebase!
