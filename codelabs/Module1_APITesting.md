summary: Module 1 of the API Testing course. Module 1 will give you a high level understanding of what an API is and why testing APIs is important. This course will guide you on all you need to know to get started with continuous API testing.
id: Module1-APITesting
categories: beginner
tags: zapi
environments: Web
status: One or more of (Draft, Published, Deprecated, Hidden)
feedback link: https://forms.gle/CGu4QchgBxxWnNJK8
analytics account: UA-86110990-1
author:Lindsay Walker
<!-- ------------------------ -->
# Module 1 – API Testing Basics

<!-- ------------------------ -->
## 1.01 What You'll Learn
Duration: 0:02:00

<!-- ------------------------ -->
## 1.02 Introduction to APIs
Duration: 0:02:00

APIs are...

<img src="assets/API1.01A.png" alt="What's an API" width="550"/>

### Types of APIs
#### SOAP

This was the most commonly used format, but is now seen as a legacy technology. It’s advantage is that it’s simple and can return a bunch of data. The negative is that it is very poor for more interactive usage, like you see with mobile applications today.

#### REST

REST is the most common protocol you see today, and more robust overall. It’s specifically made for interactive usage, such as mobile applications. You can transfer information through a REST API in a variety of formats. [Learn more about how they are structured](https://en.wikipedia.org/wiki/Representational_state_transfer).

#### GraphQL

A querying language gaining popularity and made by Facebook, that allows you to specify which data you want (and nothing you don't) returned by an API call in a single request.

The response of an API call can come in many different formats. Again, for simplicity you will just focus on the ones that apply to what the API testing dashboard can test.


### API Response Methods
//...


<!-- ------------------------ -->
## 1.03 Exploring API Responses
Duration: 0:06:00

// API response header & body

### Response Data Formats

#### XML

This is a very straightforward format that can return in virtually any layout. An example:

```
<?xml version="1.0" encoding="UTF-8"?>
<XML>
   <note>
      <to>Patrick</to>
      <from>Mom</from>
      <subject>Reminder</subject>
      <body>We need milk</body>
   </note>
</XML>
```

#### JSON

This is the more commonly seen format in REST APIs today. The Uber example is in JSON. It’s more standardized and therefore cleaned for machines to understand.

#### Object

This is the item that has data associated with it. If you look at the Uber response again, `display_name`, `description`, and `Image` are examples of individual objects within the JSON file.

#### Assertion

A rule or specific test against a single object and/or piece of data. The API testing platform is powered by a proprietary XML language with over 70 assertions, that handle just about every scenario in a very quick and easy way to write.


This is a fairly common misconception. While yes, UI testing does trigger API calls, it does nothing to test the API itself.


<!-- ------------------------ -->
## 1.04 Authorization Basics
Duration: 0:04:00

API testing...  

<!-- ------------------------ -->
## 1.05 The API Testing Platform
Duration: 0:04:00

// Walkthrough of API Fortress UI

<!-- ------------------------ -->
## 1.06 Run Your First API Test
Duration: 0:04:00

Create your First project and run a test, and update the test code

<!-- ------------------------ -->
## 1.07 View Test Results
Duration: 0:04:00

//Understand how to view your test results and troubleshoot errors. Learn about payload variables

<!-- ------------------------ -->
## 1.08 View Test Results
Duration: 0:04:00
