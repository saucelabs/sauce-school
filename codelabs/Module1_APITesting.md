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
* Web Service Basics
* API Types
* Authorization Basics
* The Sauce Labs API Testing Platform
Duration: 0:02:00

<!-- ------------------------ -->
## 1.02 Introduction to APIs
Duration: 0:06:00

Most companies are considered "tech" companies now. More specifically, companies invest a large amount of time, money, and technical resources into delivering digital services over the internet. So what exactly does a web service mean in terms of software development and how it relates to APIs?

### What is a Web Service?

First, let's take a step back and talk about we interact with applications and/or websites over the internet. When you use an app, either on a mobile device or in a web browser, you typically interact by clicking or tapping somewhere on the screen. 

This sort of user activity (clicking or tapping) is defined as user *input*. Input results in a system *output* response—either in the form of the expected result, or an error message. In order for this cycle to occur, a dedicated **web service** exists between you the user, and the data you want to access or manipulate. Here's a practical example:

Go visit [www.saucedemo.com](https://www.saucedemo.com), and the first page you see is the *Login Page*:

<img src="assets/swaglabs.png" alt="Swag Labs Login Page"/>

When you type in the `username` and `password`, and then select the **LOGIN** button, you're *inputting* data in an effort to receive a desired *output*; which in this case is gaining access to the site.

Now try and input the incorrect login credentials:
* Username: `locked_out_user`
* Password: `secret_sauce`

You should see this screen:

<img src="assets/incorrect-login.png" alt="Incorrect Swaglabs Login"/>

The site uses a login **web service** to determine the appropriate response based on the user *input*; in this case the error: 

> *Epic sadface: Sorry, this user has been locked out*.


### How Do APIs Fit In?

An API stands for **Application Programming Interface**. Think of the API as the language, or contract, of the user *input*. APIs allow a user to send commands to a web service in terms the service can understand in order to produce the desired output.

Here's a more complex example using the popular ride-share mobile application Uber:

<img src="assets/API1.01A.png" alt="What's an API" width="550"/>

In this application the APIs communicate with multiple web services that in turn connect to different platforms and data services. Each action performed in the app equates to its own web service, and the way you communicate with said web service is via APIs. 

In other words, the way you search for a location, choose the type of ride you want, pay for the ride, and rate the driver are all separate web services communicated through APIs.

### So What Does an API Look Like? 

Let's consider a common use case for Uber.

You need to search for a vehicle in Uber. So you open the app, select a destination, and select 'search for ride'. Below is an example Uber API that makes an HTTP request after you input the data:

* `token`: your login access token that proves you are who you say you are
* `latitude`: the latitude of your current location
* `longitude`: the longitude of your current location

Here's what the formatted URL ends up looking like:

```http
https://api.uber.com/v1/products?server_token=[token]&latitude=40.6797300818661&longitude=-73.9639477463489
```

Uber then performs numerous calculations and actions and returns this **JSON** (JavaScript Object Notation) response to your phone:

```json
{
  "products": {
    "capacity": 2,
    "product_id": "929fcc19-8cb4-4007-a54f-3ab34473700f",
    "Price_details": {
      "service_fees": [],
      "cost_per_minute": 0.74,
      "distance_unit": "mile",
      "minimum": 8,
      "cost_per_distance": 1.62,
      "base": 0,
      "cancellation_fee": 5,
      "currency_code": "USD"
    },
    "Image": "https://d1a3f4spazzrp4.cloudfront.net/car-types/mono/mono-uberpool.png",
    "cash_enabled": false,
    "shared": true,
    "short_description": "Pool",
    "display_name": "UberPool",
    "product_group": "rideshare",
    "description": "Shared rides, door to door"
  }
}
```

You can see the max number of passengers (`capacity`), the cost (`Price_details`), and other relevant information. Usually as the user you won't see this raw data format, but this is essentially how your mobile app communicates with the necessary web services behind the scenes in order to display information on your phone's UI.

### Why is API Testing so important? 

Let's review how the process works:

* Web service takes in a command (*input*)
* Performs some action and returns a response (*output*)

We don't know the internal workings of how the service works, nor how it is implemented when we issue commands. The service itself is what's commonly referred to in the software testing world as a **Black Box**. So in order to test the system we must use the publicly exposed APIs in order to verify the system works as intended. Throughout this course we will conduct many types of [black box testing](https://en.wikipedia.org/wiki/Black-box_testing) techniques in order to verify the integrity of the web service or services.

### Types of APIs

You may have guessed but not all APIs are created equal. In fact there are many types and formats and over the years the term API itself is now somewhat vague. For the purposes this course we will always be talking about **HTTP APIs** (APIs that can be hit with an HTTP call). 

Below are some examples of API types.

#### HTTP APIs

There are two types of HTTP APIs, REST and SOAP. That is a huge topic, but from a very high level:

##### SOAP

This used to be the most commonly used format, but is now seen as a legacy technology. Its advantage is that it’s simple and can return a bunch of data. The negative is that it is very poor for more interactive usage, like you see with mobile applications today.

##### REST

REST is the most common protocol you see today, and more robust overall. It’s specifically made for interactive usage, such as mobile applications. You can transfer information through a REST API in a variety of formats. [Learn more about how they are structured](https://en.wikipedia.org/wiki/Representational_state_transfer).

#### GraphQL

A querying language made by Facebook that's gaining popularity. It allows you to specify which data you want (and nothing you don't) returned by an API call in a single request. The response of an API call can come in many formats.

<!--------------------------------------->

## 1.03 API Request Methods
Duration: 0:02:00
There are commonly used terms when referring to APIs that will help us when we think about how to run our tests. These are the most common **API request methods**, sometimes referred to as API verbs, that dictate what type of interaction you want to perform.

<ul>
  <li><p class="api get">GET</p></li>
  <li><p class="api post">POST</p></li>
  <li><p class="api put">PUT</p></li>
  <li><p class="api delete">DELETE</p></li>
</ul>

You as the user use these methods to communicate with what's known as a **service endpoint** in order to make a change.

### Wait, What is a Service Endpoint?

A service endpoint is one end of a communication channel. It's typically a URL at which you, the user, can interact with using an API call. The API essentially acts as the language and contract for how the systems interact. For more information regarding the details

> **NOTE**: for the purposes of this course we will only refer to **web service endpoints**, meaning a service endpoint associated with a web-based application.

### GET

The <span class="api get">GET</span> method communicates with the service endpoint when you want to retrieve some data. This is the easiest API to use and understand. For example the [Sauce Labs get users API method](https://docs.saucelabs.com/dev/api/accounts#get-users).

### POST

The <span class="api post">POST</span> method communicates with the service endpoint in order to create something. An example of this is the [Sauce Labs create team API method](https://docs.saucelabs.com/dev/api/accounts#create-a-team).

### PUT

The <span class="api put">PUT</span> method communicates with the service endpoint in order to update an existing object or item. An example of this is the [Sauce Labs update team API method](https://docs.saucelabs.com/dev/api/accounts#update-a-team).

### DELETE

The <span class="api delete">DELETE</span> method communicates with the service endpoint in order to delete and object or item. An example of this is the [Sauce Labs delete team API method](https://docs.saucelabs.com/dev/api/accounts#delete-a-team).

<!--------------------------------->

## 1.04 API Responses
Duration: 0:02:00

These are the common response formats that a web service returns after receiving an HTTP API call.

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
