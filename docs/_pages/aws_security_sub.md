---
title: AWS Security
layout: page
permalink: cloud/aws_security_sub.html
---

### AWS keys
Don't commit your AWS keys to git repositories!

### AWS users

* Don't commit your AWS credentials to public repositories. To avoid committing keys, you could look into [git-secrets](https://github.com/awslabs/git-secrets). If you do commit a key, delete the key from AWS immediately and let the Autobots know. You might also want to look into [BFG](https://github.com/IBM-Swift/BluePic/wiki/Using-BFG-Repo-Cleaner-tool-to-remove-sensitive-files-from-your-git-repo) to delete content from git permanently.
* Enable [Multi-Factor Authentication](https://aws.amazon.com/iam/details/mfa/) on your account.
* Keep your EC2 instances patched.

### AWS account owners

* Teach your users the importance of not committing their AWS credentials to public repositories.
* Enable [Multi-Factor Authentication](https://aws.amazon.com/iam/details/mfa/) on all user accounts in your space.
* Keep an eye on [SecGA](https://sec.gadevs.ga) for any security holes in your AWS account. These could include:
  * Security groups open to the whole internet
  * Credentials that haven't been rotated
  * MFA not enabled
  * User accounts don't have [least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege)
* If you have [premium support](https://aws.amazon.com/premiumsupport/) enabled on your AWS account, you can use [AWS Trusted Advisor](https://aws.amazon.com/premiumsupport/trustedadvisor/), which can help you reduce cost, increase performance, and improve security by optimizing your AWS environment. Note that business support incurs an additional fee on your account.

### Reading material

* Ask yourself the questions in the [AWS Well Architected Framework](https://d0.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf) about your application.
* Have a read of the [AWS security whitepapers](https://aws.amazon.com/whitepapers/).
* Familiarise yourself with GA security policies on the intranet and with the APS Code of Conduct. Complete the Security Awareness eLearning course. Remember you can get in touch with the ICT IS Security team if you have any questions about IT security.

### And remember...
Don't commit your AWS keys to git repositories!
