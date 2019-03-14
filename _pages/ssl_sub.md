---
title: SSL & HTTPS
layout: page
permalink: cloud/ssl_sub.html
---

### https by default

Your site should use https by default, and should redirect http to https. This is especially true for a \*.ga.gov.au site.

Unencrypted http doesn't protect data from interception or alteration. The user is vulnerable to man-in-the-middle attacks or snooping. For more details, check out the [HTTPS Only Standard](https://https.cio.gov/) from the US Government's CIO Council.

### Certificate providers

If your site is on AWS, use [ACM](https://aws.amazon.com/certificate-manager/). If not, use [LetsEncrypt](https://letsencrypt.org/).

### ACM

1. From the Certificate Manager console in AWS, request a certificate
2. Add the name of your server (or servers), or add a wildcard certificate for your domain
3. An approval email will be sent to [a number of email addresses](http://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate.html) to ensure that you have the approval of the domain owner. For example, for a request for a certificate for \*.server.example.com, emails will be sent to:
  * admin@server.example.com
  * administrator@server.example.com
  * hostmaster@server.example.com
  * postmaster@server.example.com
  * webmaster@server.example.com
4. If you need to set up an email address for your domain, you can use [AWS Simple Email Service](http://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-getting-started.html).
5. When the link in the email is clicked, the certificate is generated and ready for use!
6. [Follow the documentation](http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-https-load-balancers.html) to add an HTTPS listener to your load balancer and attach the certificate

### LetsEncrypt

Follow the [Getting Started](https://letsencrypt.org/getting-started/) guide. If you have shell access to your server, install the [Certbot](https://certbot.eff.org/) client and follow the documentation.

Certificates expire after 90 days, so you should run a cronjob to automate certificate renewal.
