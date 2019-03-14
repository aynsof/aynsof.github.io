---
title: Principles of Software Development
layout: page
permalink: cloud/coding_principles_sub.html
---
 
 Software quality is supported by a set of practices:
 
 * A culture of **test driven development**. Regression tests are written as an integral part of development, debugging, optimisation and deployment.
 * Software is kept in **source code control systems** that are accessible to all relevant stakeholders.
 * **Continuous delivery pipelines** execute test suites on commit and provide visibility of the health of all software systems.
 * Developers have access to development platforms with **sufficient admin rights** and network access.
 * Documentation is kept and maintained within the same source code control system as the code it documents - and are reviewed and tested together.
 * Coding style is agreed to and enforced programmatically where possible.
 * Software is designed to either perform as expected; or provide an appropriate response (error message or exception) that allow the caller to recover from the error condition. It is not acceptable to silently fail unless there are explicit reasons why.
 * **Code reviews** are an integrated part of the development workflows. They include review of code, tests, docs and other artefacts.
 * There is a managed but **agile process for deployment and updates of production systems**.
 * The simplest design that meet business requirements is generally adopted.
 * Meeting requirements is more important than complying with standards. However, complying with standards as well as meeting requirements is better yet.
 * Design for code reuse where possible.
 * Quality applies to all artefacts in the SDLC (code, tests, documentation, UI, reports, etc). Having the UI fit for purpose and items spelled correctly.
