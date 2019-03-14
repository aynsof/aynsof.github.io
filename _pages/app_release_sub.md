---
title: Release Checklists
layout: page
permalink: cloud/release_checklist_sub.html
---

### Technical checklist

1. Get the code into version control
1. Ensure the software has automated tests
1. Decide on a release process for the project - this should ideally use a [Continuous Delivery pipeline](setting_up_cd_sub.html)
1. Decide on a decommissioning strategy for the project
1. Prepare your codebase - this includes:
  * Well-documented code
  * Consistent style
  * Appropriate licence
  * Appropriate language, e.g. ensure there is no profanity or derogatory language
  * No hard-coded GA-specifics, such as passwords, file paths, AWS keys
1. Ensure your application adheres to the DTA's [Digital Service Standard](https://www.dta.gov.au/standard/)
1. Perform an [AWS Well Architected Review](https://d0.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf) either within your team, or with the help of AWS

### Communications checklist

1. If the site is GA-branded, get approval from Products & Promotions - this includes sites that use the GA crest and sites that are hosted on ga.gov.au
1. Consult IP/Copyright and Contracts regarding IP and licensing issues - this can be bypassed if the following conditions are met:
  * No 3rd-party code
  * No algorithms with ambiguous licencing
  * No algorithms that are related to pending publications
  * No code with ambiguous IP (e.g. developed in partnership with external stakeholders, 3rd-party funding)
  * Recommended licence in place - this is [Apache Version 2.0](https://www.apache.org/licenses/LICENSE-2.0)
1. Create a GeoCat record for the release 
1. Make any appropriate announcements to forums, partner agencies and notify Communications and Client Services of the release

