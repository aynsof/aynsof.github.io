---
title: Failure Management
layout: page
permalink: cloud/failure_sub.html
---

### Requirements

What is your application's recovery time objective (RTO) and recovery point objective (RPO)? How are you tracking metrics for these?

### Backups

The key points are:

1. Regularly back up your data.
1. Automate your backup process and alert when your backups fail.
1. Regularly test your backup files.
1. For critical data, consider backing up to a separate AWS account.
1. Consider data lifecycle policies to either delete old data or send it to cold storage.

### Resilience Testing

Consider using a tool like [Netflix's ChaosMonkey](https://github.com/Netflix/chaosmonkey) to intentionally inject failures into your system. This can expose weaknesses in your configuration, increasing your overall resilience.

### Disaster Planning

How would you recover if...

* An application server was terminated unexpectedly?
* Your entire production application was deleted?
* An availability zone or region was unavailable?

* Is your code in version control? Application code, infrastructure code, automated tests, and pipeline?
* Is your architecture self-healing and auto-scaling?
* Are you monitoring your application for faults? For content changes?

