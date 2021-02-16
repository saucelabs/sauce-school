summary: Module 3 of the API Testing course. Now that you have learned the basics and some helpful tips on how to do API testing, check out module 3. In this course you will learn how to create your first test. You will learn the different ways to begin writing a test, as well as some more advanced techniques to help you simulate real life scenarios.
id: Module3-APITesting
categories: beginner
tags: api
environments: Web
status: One or more of (Draft, Published, Deprecated, Hidden)
feedback link: https://forms.gle/CGu4QchgBxxWnNJK8
author:Lindsay Walker
<!-- ------------------------ -->
# Module 3 – Writing Your First API Test

<!-- ------------------------ -->
## 3.01 What is an API?
Duration: 0:02:00

There are two ways to create a test with the API tool, from a payload (the response) when you make an api call, or from a spec file from a tool such as [swagger.io](https://swagger.io/).

### From a Payload

Before you dive into this, watch this quick video on how to login and generate a test in under a minute. Then read the below to get a better understanding of the nuances of the tests themselves.

#### An API response payload.
This is used to auto generate a functional test in API Fortress.

<img src="assets/wp-content/uploads/2019/07/Screen-Shot-2019-07-01-at-12.02.21-PM.png" alt="Generate a Test" width="850"/>

[Generate a Test Video](https://www.youtube.com/watch?v=qujShNWCDvM&feature=emb_logo)

<!-- ![https://www.youtube.com/embed/qujShNWCDvM](https://youtu.be/qujShNWCDvM) --> <!-- This YouTube link doesn't work -->

[Generate a Test Guide](https://apifortress.com/doc/create-a-test-quickly/)

### From a Spec File

The above video shows you the method using Generate Test from a payload, and to generate a test from a spec file you can review [this page](https://apifortress.com/doc/build-from-spec/). This includes [Postman Collections](https://apifortress.com/doc/importing-postman-collections/).

```
{
    "swagger": "2.0",
    "info": {
        "title": "demoapif",
        "version": "",
        "description": "Call to the APIF demo API All Products Get."
    },
    "host": "demoapi.apifortress.com",
    "basePath": "/api/retail",
    "schemes": [
        "http"
    ],
    "paths": {
        "/product": {
            "get": {
                "responses": {
                    "200": {
                        "description": "OK",
                        "headers": {},
                        "examples": {
                            "application/json": [
                                {
                                    "id": 1,
                                    "name": "Baseball Cap",
                                    "price": 29.99,
                                    "category": "1",
                                    "description": "This is product 1!",
                                    "quantity": 5,
                                    "imageURL": "http://image.com",
                                    "color": [
                                        "blue",
                                        "yellow"
                                    ],
                                    "createdAt": "2018-03-20T15:38:39.542Z",
                                    "updatedAt": "2018-03-20T15:38:39.542Z"
                                },
                                {
                                    "id": 2,
                                    "name": "Long Sleeve Shirt",
                                    "price": 39.99,
                                    "category": "1",
                                    "description": "This is product 2!",
                                    "quantity": 7,
                                    "imageURL": "http://image.com",
                                    "color": [
                                        "blue",
                                        "yellow",
                                        "red"
                                    ],
                                    "createdAt": "2018-03-20T15:38:39.542Z",
                                    "updatedAt": "2018-03-20T15:38:39.542Z"
                                },
                                {
                                    "id": 3,
                                    "name": "Bluetooth Headphones",
                                    "price": 49.99,
                                    "category": "1",
                                    "description": "This is product 3!",
                                    "quantity": 50,
                                    "imageURL": "http://image.com",
                                    "color": [
                                        "green",
                                        "yellow"
                                    ],
                                    "createdAt": "2018-03-20T15:38:39.542Z",
                                    "updatedAt": "2018-03-20T15:38:39.542Z"
                                }
                            ]
                        }
                    }
                },
                "summary": "List All Products",
                "description": "",
                "tags": [],
                "parameters": [],
                "produces": [
                    "application/json"
                ]
            }
        }
    },
    "definitions": {
        "Questions Collection": {}
    }
}
```

<!-- ------------------------ -->
## 3.02 Building a Strong Functional Test
Duration: 0:04:00

#### Note
This example exists in your **Examples** project, and it is named **Retail: Integration - Products**.


Lets build your first functional test: Start by using this API call.  

**[https://mastiff.apifortress.com/app/api/examples/retail/products](https://mastiff.apifortress.com/app/api/examples/retail/products)**

#### Video
View [this video](https://drive.google.com/file/d/1xxTUnnG6OZzfoygWpOxlTO01PWCZslVC/view?usp=sharing) to see how to run your test:
![https://drive.google.com/file/d/1xxTUnnG6OZzfoygWpOxlTO01PWCZslVC/preview](https://drive.google.com/file/d/1xxTUnnG6OZzfoygWpOxlTO01PWCZslVC/view?usp=sharing)

By clicking that link, or using the HTTP composer in the **HTTP Client** section to make the call, you get this response.


<img src="assets/API3.02C.png" alt="Generate a Test" width="450"/>



As you can see there are 5 objects, so at minimum lets make sure they ‘exist.’ What API Fortress allows you to do is validate the objects exist _and_ the data is as expected. This is done using our XML markup language, or our GUI composer.

#### Our Platform
API Fortress was specifically built to bridge the gap between testers and engineers, allowing you to write detailed API tests in whatever format you are most comfortable with. Our composer has a drag-and-drop interface that writes the XML code for you, and it also makes it easier to visually understand the nature of the test.

<img src="assets/API3.02D.png" alt="Generate a Test" width="850"/>

Our GUI composer also has a **Code View** which exposes the underlying XML. This XML can be written or edited in the GUI, or using your own IDE. Meaning that how you want to write and/or edit a test is completely unlocked, so you can work how you are most comfortable.

<img src="assets/API3.02E.png" alt="Generate a Test" width="850"/>

Why you click on **Code**, or were looking at the test in your own IDE, this is what you see:

```
<unit xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" name="main" xsi:noNamespaceSchemaLocation="http://apifortress.com/app/unit.xsd">
   <requirements />
   <configs />
   <sequence name="main">
      <get url="${protocol}${domain}${productsEndpoint}" params="[:]" var="productsPayload" mode="json" />
      <assert-equals expression="productsPayload.status" value="200" comment="" />
      <assert-is expression="productsPayload.success" type="boolean" comment="" />
      <assert-exists expression="productsPayload.content.act" comment="" />
      <assert-is expression="productsPayload.content.products" type="array" comment="" />
   </sequence>
</unit>
```

Now look at the code itself carefully:

- The `unit `section is referencing our markup Namespace file (useful when using your own IDE).
- `Requirements` and` Sequence` are more advanced features discussed later.
- `get` is where the API call is made. Within this call it contains the necessary information to make the call (can include more if we’re dealing with oAuth for example).

Some important things to note is how the platform has crated variables for `protocol`, `domain`, and then the chosen endpoint.

If you click on the **Input Set** section on the left you can see those same variables and the data.

This is hugely important to allow the test to be easily run against any environment by replacing the vribles.

<img src="assets/API3.02F.png" alt="Input Set" width="850"/>


There is also `var="productsPayload"`. What this does is call an API, gets a response, and then stores that entire payload into a variable called `productsPayload`. This is then referenced in the next assertions.

#### Note
Negative
: Performance can be an assertion within the test itself. See [this page](https://apifortress.com/doc/assertions-for-metrics-performance/) for more information.

### Assertions
Now, the assertions. [There are over 70 assertions](https://assertible.com/docs/guide/assertions#:~:text=Assertions%20allow%20you%20to%20validate,time%20a%20test%20is%20run.) possible for an API test.  You can see the next four lines are `assert` statements for each object. Looking at the first you will see:  

```
<assert-equals expression="productsPayload.status" value="200" comment="" />
<assert-is expression="productsPayload.success" type="boolean" comment="" />
```

* This line calls the `assert-equals` assertion, which validates an object exists and is equal to a chosen amount.  The `productsPayload.status`  is referencing the `status` object within the `productsPayload` variable.
* The `assert-is expression` [checks that an object is a certain data type](https://apifortress.com/doc/assert-is/).

The GET call gets an API response and stores it in that variable. This is useful for when you are dealing with multiple payloads (variables) in an integration test.  


It’s important to note that with the **Generate Test** feature you can have this entire structure generated for you in seconds. This frees you to focus on the more important and tricky aspects of writing detailed tests.

<img src="assets/API3.02G.png" alt="Input Set" width="850"/>

<!-- ------------------------ -->
## 3.03 Create an Integration Test
Duration: 0:04:00

### Using an API as a Datasource
Now lets take the functional test, and use it as the first step in an integration test. Notice that the first API call actually contains an array of product IDs. What if you use it as a datasource, and then iterate on each of them individually?

First, you have the original test:

<img src="assets/API3.02D.png" alt="Generate a Test" width="850"/>

Creating an integration test requires the use of two new components. The [_For Each_](https://apifortress.com/doc/each-component/) component helps you iterate through a series of data (product IDs in this case), and the [_Set_](https://apifortress.com/doc/set-var/) which creates a temporary variable to reference.

You can add components to any step in the test like so:

<img src="assets/API3.03A.png" alt="Generate a Test" width="850"/>

If you look at the above GUI view of this test, you see that we have our original test. It makes the first API call, and then tests each object in that response.

<img src="assets/API3.03B.png" alt="Generate a Test" width="850"/>

Then you will add in the component that makes this integration test, that is using an API to be data-driven, the _For Each_ component.

You’ll notice that it is referencing the variable that we stored the entire response, then the array, and finally the object we want to use - _productsPayload.content.products.pick(2)._ You’ll notice the _.pick(2)_ we added at the end. This is entirely optional, and what it does is randomly select X number of items from the list we are iterating through. This is useful if the dataset is far too large. Ours is small so we would remove that and allow every product ID to be tested. We will leave it for training purposes.

Next we have the _Set_ component, which is creating a new variable called _id_. The value of that variable depends on the location the _For Each_ is at in the iteration. Here we set the value as ${\_1}. This is saying “using the current location in the array”. Traversing an array is a bit of a larger topic, so we’ll get into that later.

Finally, you see the next _GET_ component. You’ll notice we are using the _id_ that we stored from the first _GET_ call to populate into the second _GET_ call. Each iteration of the _For Each_ will call the current _id_ in the subsequent _GET_ call.

That’s it! What we’ve done here is made an API call to the products list API, then tested that API thoroughly, and then used that API as the datasource for the subsequent GET which dives into each of those product IDs individually. You then want to test that entire API response as well. So here is what that entire test looks like complete in the GUI.

<!-- ![Full integration test that uses an API response to data drive the rest of the flow.](https://lh4.googleusercontent.com/e1B7AF-mtQAhvUEsrSvvqjqWfu3ll3cR3Z1n3xmqtFJ4Ld8k8hvoqQ-wJ1SGKNTiEMOtGDffH7BwlgLx7fypOgI-A7ixjqJiF26H-G9N9nqD4Kfmbgx2c8Q7q5jaMuWi-nLW5MVo) -->

To see the code itself, go to the Examples directory and open the test _Retail: Integration - Products._

end to end, iterate


<!-- ------------------------ -->
## 3.04 Creating an Integration Test
Duration: 0:04:00
