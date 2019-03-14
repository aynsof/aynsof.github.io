---
title: Code Review
layout: page
permalink: cloud/code_review_sub.html
---

### Introduction

Getting our peers to review our code can be an effective method of ensuring application security, and ensures code is comprehensible, well-documented, and understood by the whole team before going into production.

Some considerations to consider when conducting code reviews:

#### Application Security

This reminds us to handle buffer overruns, mask or remove any internal resource references, and verify server-side validity checks to coincide with client-side ones. Often overlooked security items such as session information, transaction controls, developer back-doors, and hard-coded passwords are investigated.

#### Error Handling

This area is looked at to help ensure safe and user-friendly end-user experiences by questioning function caller notifications, assertions, and exception handling. It’s also important not to give too much information in errors.

#### Performance

Looking at recursive functions, duplicated objects, system call blocks, and busy waits.

#### Resource Leaks

This could include questions regarding the freeing of allocated memory and objects, and tracking reference counts.

#### Comments

Well commented code will be easier to operate and maintain in the long run.

#### Coding Conventions

Adherence to coding standards/style/conventions (add link or references) helps to ensure consistency and readability and thus improve maintainability.

### Checklist

1. Does the code have consistent style? (\*)
1. Does it match the coding conventions used in the system? Has it been formatted to match the code format of the system / team?(\*)
1. Is there any commented-out / unused code? Can it be removed? (\*)
1. Are there any IDE warnings present?
1. Are function/method/variable/class names clear and concise? Do they convey meaning well?
1. Are there any obvious defects/bugs in the code?
1. Do loop counters start, end and increment appropriately?
1. Are there any null or error cases that are left unguarded? Is there a reason for it?
1. Are all errors/exceptions handled appropriately?
1. Is logging performed consistently and in keeping with GA guidelines? Is there enough useful information being logged that a developer would be able to debug the system in the future?
1. Do any thrown exceptions contain enough information to identify the root cause of the issue if they occur?
1. Are there unit tests that execute the changes made? If not, why not?
1. Have appropriate data structures / algorithms been used? Are there more appropriate ones that could be used?
1. Does the code meet best practice guidelines for the language it is written in? (this will be language specific - see the appropriate community of practice for more information)
1. Does the code follow the standard naming conventions and project layouts used at GA? (this will be language specific - see the appropriate community of practice for more information)
1. Is the code appropriately documented ie. for Java code it should documented in JAVA DOC pattern

*(\*) These items can (and should) be automated*
