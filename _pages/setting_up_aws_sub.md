---
title: Setting Up AWS Account
layout: page
permalink: cloud/setting_up_aws_sub.html
---

# First steps

1. Join [Slack](https://geoscience-australia.slack.com/signup), our messaging app. It's a great place to ask questions.
2. Join the #cloud and #autobots channels to chat with experts from across GA.
3. Talk with your Divisional Information Officer (DIO) and/or the Autobots about what you wish to achieve. If you are just looking to have a play with AWS or try out a specific service, then the GA AWS Development environment may be suitable for your needs.

# Create an AWS account

If you have an application that will eventually become a production service, you should create a stand-alone account. The steps for creating a new AWS account are:

## 1. Email the [Autobots](mailto:autobots@ga.gov.au)

Include this information in your email:

  * Approval from your financial delegate with GA Cost and Activity Codes
  
  * The name for your Account (ga-aws-______)
  
  * The name of the technical owner of the account. This user will receive credentials to log into the new account, and they will be responsible for the ongoing security of the account

## 2. Log in

The technical owner of the account will receive an email with:
* A link to the new account
* A temporary password

They will need to log in and set a new password.
  
## 3. Clean up steps 

 * Update your contact email addresses if necessary
 * Do steps to set IAM Security Status to Green

## 4. Add other users
 
 * [Create IAM users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html) for other users of the account
 * Make sure to [enable MFA](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html) for these users
