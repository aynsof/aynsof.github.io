---
title: Cost Management
layout: page
permalink: cloud/cost_management_sub.html
---

### Metrics

Log into [Cloudability](https://www.cloudability.com) to see cost information for your AWS account. If you don't have access, get in touch with the Autobots.

### Billing alerts

Run [space-provisioner](https://bitbucket.org/geoscienceaustralia/space-provisioner) - it will create billing alerts that will inform you when your billing estimate exceeds certain thresholds.

### Keep your AWS keys secure

Bots trawl through public git repositories looking for unencrypted AWS keys. A loose key can result in tens of thousands of dollars of AWS bills. Keep your AWS keys secure!

### Use the right type of service

Use your [monitoring](monitoring_index.html) to make sure your instances are the right size. Consider auto-scaling smaller sized instances rather than having a single large instance.

If you're running batch processing, look into [spot instances](https://aws.amazon.com/ec2/spot/).

If you're running cronjobs or small tasks, look into [AWS Lambda](https://aws.amazon.com/lambda/).

If you know that you'll need EC2 instances for a longer period of time, look into [AWS Reserved Instances](https://aws.amazon.com/ec2/pricing/reserved-instances/). (The break-even point for a 12-month reserved instance is around seven months.)
