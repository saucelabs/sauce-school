<!-- Copy this file into tools/site/coursenameFolder & start editing -->

summary: In Module 4 of the API Testing course, you will learn even more advanced API testing techniques such as dealing with authentications.
id: Module4-APITesting
categories: intermediate
tags: zapi
environments: Web
status: One or more of (Draft, Published, Deprecated, Hidden)
feedback link: https://forms.gle/CGu4QchgBxxWnNJK8
analytics account: UA-86110990-1
author:Lindsay Walker
<!-- ------------------------ -->
# Module 4 – Advanced API Test Creation

<!-- ------------------------ -->
## 4.01 Validate Metrics Within a Test
Duration: 0:02:00

Monitoring your internal APIs is always a good step for keeping track of its performance. When building tests to monitor the performance of your API, we recommend not only testing for functionality and load but also testing for metrics such as fetch, latency, and overall times.  

These performance metrics can be turned into an assertion themselves using the [_assert-less_ component](https://docs.saucelabs.com/api-testing/how-to/assertions-for-metrics-performance/).  

The platform also has a robust dashboard that allows for detailed notifications in terms of global performance.   

These metrics can also be pulled from our Insights API and put into any analytics platform of your choice that supports JSON inputs. The data can be pulled all at once or in a streaming fashion. Learn more in the [API documentation](https://apifortressv3.docs.apiary.io/#reference/0/insights/metrics).


<!-- ------------------------ -->
## 4.02 The If Component
Duration: 0:01:00

One of the most powerful components in the API testing platform (and in programming) is the [If component](https://docs.saucelabs.com/api-testing/on-prem/logical-components/if/).  

This gives you the flexibility to create assertions that can be specific to certain conditions. For example, **if statuscode==200** vs. **if statuscode=400**. Meaning you can create positive and negative validations in a single test.  

Another use case is to build resilient tests that can work with asynchronous APIs. For example:
1. Call the API.
2. IF status is not complete.
3. wait a few seconds and retry the API call.


<!-- ------------------------ -->
## 4.03 Dealing with Authentications
Duration: 0:02:00

The API platform can handle just about any sort of authentication scheme your API is using, including simple, oAuth, etc. See how [authentication is handled](https://docs.saucelabs.com/api-testing/on-prem/how-to/authorization-simple-oauth-etc/).  

The only authentication that is a problem is one that is specifically built to not allow for automation, though we have taken steps to support those as well. For example, 3-legged OAuth can now be automated using our open-source helper tool called [3loa](https://github.com/apifortress/3loa).  

Not only can you build tests for APIs that require different levels of authentication, but we also highly recommend building tests to validate your security flow.

<!-- ------------------------ -->
## 4.04 Functionally Test the Security of an API
Duration: 0:04:00

According to Gartner, over 95% of security vulnerabilities in APIs are related to “functional” or “human” errors. That is why functional testing of your APIs is so important to general API security. A good API security policy includes testing of API functionality before release as well as constant monitoring of those APIs using the same detailed functional tests.

Below, we list some of the types of tests we suggest that will help you not be in the 95% of API breaches. This is by no means a comprehensive list, but a series of suggestions that will constantly be evolving.

### Fuzz Tests:

- **Invalid Input Test**  
    The goal of this test is to validate how the API functions when given invalid data. Fundamentally, it’s a data-driven test with a series of invalid inputs that helps to reveal potential exceptions. Some of these exceptions may include crashes, assertion failures, error responses that give out too much information, and potential memory leaks.
- **Wildcard Testing**  
    This one is pretty straightforward, and yet it is one of the reasons for a [major breach at the US Postal Service](https://apifortress.com/usps-api-security-vulnerabilities-caused-by-functional-errors/). The goal here is to see how the API reacts when a wildcard (\*) is used in place of an input value. For most APIs, it shouldn’t be allowed as it would return a broad dataset.



### Authentication / Access Control:

- **Common Logins**  
    This test is meant to simply go through the most common username and password combinations to try to see if one of those is valid. This includes logins such as admin/admin. These tests are particularly useful before pushing an API live when you have internal credentials used for debugging.
- **Brute Force**  
    This test randomly generates login credentials such as usernames and passwords in an attempt to brute force its way in. The goal here is to validate that the API only allows a certain amount of login attempts before forcing a timeout.
- **Your Authentication Flow**  
    It is important to create tests that validate your authentication flows. This can even include 3-leg OAuth using something like our [open source 3loa project](https://apifortress.com/opensourceprojects/).
- **Access Control**  
    In this test, the goal is to confirm that a user with permissions of X can only achieve X. For example, in the API testing platform, a person with “analyst” rights should only be able to view results and tests. They cannot edit tests or change settings.

###Sensitive Data

- **Header Validation**  
    Headers contain critical details of the API transaction, but they can also sometimes contain sensitive information. In this test, we analyze the header and give some examples of potential weaknesses. This can include revealing an Apache server version that has a known weakness, or the authentication type.
- **Sensitive Information**  
    In this test, the goal is to search for string patterns that should never appear in a payload, such as credit cards, and social security numbers, etc.
