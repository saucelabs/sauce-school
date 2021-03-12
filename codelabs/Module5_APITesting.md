<!-- Copy this file into tools/site/coursenameFolder & start editing -->

summary: In Module 5 of the API Testing course, you will learn how to execute these tests in a couple different ways, learning the automated ways of kicking off and scheduling the tests you have created.
id: Module5-APITesting
categories: advanced
tags: api
environments: Web
status: One or more of (Draft, Published, Deprecated, Hidden)
feedback link: https://forms.gle/CGu4QchgBxxWnNJK8
author:Lindsay Walker
<!-- ------------------------ -->
# Module 5 – Executing Tests

<!-- ------------------------ -->
## 5.01 Executing Scheduled Tests
Duration: 0:05:00

Just as important as testing an API before and after release is validating that API is always up and functioning as expected. This is the difference between _Uptime_ (which an API can measure) and _Functional Uptime_, which is a powerful and unique aspect of the API testing platform .

Ultimately, it means using your existing detailed functional/integration tests, and scheduling them to run against a live environment. This way they are constantly testing for uptime, functionality, and performance. Take a look at the details on [using the scheduler](https://docs.saucelabs.com/api-testing/quick-start/schedule-a-test):

* A test must be Published before you can schedule it. This allows for there to be a finalized version that doesn’t get affected when you start editing a test. This is because when you edit a test it creates a _Working Copy_.

* You should monitor your own APIs, but you can also monitor third party APIs. Have a partner API with an SLA? Make sure that API is working as contractually agreed upon.

<img src="assets/API3.05C.png" alt="Publish and Schedule" width="850"/>

<!-- ------------------------ -->
## 5.02 Executing Automatic Tests
Duration: 0:03:00


### By API

The platform has extensive APIs specifically created to empower engineers and testers to execute tests however they choose. You can read more about integration into a CI pipeline here. For specific use cases see some below, or search our docs.

- [Jenkins](https://docs.saucelabs.com/api-testing/ci/jenkins/using-the-api)
- [Bamboo](https://docs.saucelabs.com/api-testing/ci/connecting-with-bamboo)
- [Microfocus ALM](https://docs.saucelabs.com/api-testing/ci/micro-focus-alm-integration)
- [Azure DevOps](https://docs.saucelabs.com/api-testing/ci/azure-devops)
- [Bitbucket](https://docs.saucelabs.com/api-testing/ci/bitbucket)
- [GitLab](https://docs.saucelabs.com/api-testing/ci/gitlab


See the API documentation at [Apiary](https://apifortressv3.docs.apiary.io/#reference/0/tests/basic-run), and get more information in [our docs](https://docs.saucelabs.com/api-testing).

### By Command-Line Tool

The platform also has command-line tools available to paying customers, or potential customers doing a proof of concept. It allows full execution of test, and is particularly useful for CI pipelines. It can help return a lot of useful test report data right back into your CI platforms, like Jenkins.

The API testing platform has [its own set of commands and flags](https://docs.saucelabs.com/api-testing/ci/apif-auto/index.html) to execute tests, incorporating tests in Git, and pushing test code.
