<!-- Copy this file into tools/site/coursenameFolder & start editing -->

summary: Once you have completed module 1, jump into module 2 where you will learn how to use the API Fortress Platform.
id: Module2-APITesting
categories: beginner
tags: zapi
environments: Web
status: One or more of (Draft, Published, Deprecated, Hidden)
feedback link: https://forms.gle/CGu4QchgBxxWnNJK8
analytics account: UA-86110990-1
author: James Tacker & Lindsay Walker
<!-- ------------------------ -->
# Module 2 – Run an API Fortress Test

<!------------------------------>

## 2.01 What You'll Learn
Duration: 0:02:00

1. **Introduction to the API Fortress Platform and Visual Test Composer**
   * Create a project & test file
   * Use the **HTTP Client** to generate a GET request
   * Use the **Test Component Library** to create a request
   * Add authorization credentials to a request
   * Generate a test from a valid GET request
   * View the test results
   * Publish and schedule a test run

<!------------------------------>
## 2.02 Introduction to API Fortress
Duration: 0:04:00

[API Fortress](https://apifortress.com/) is the API Testing Platform of Sauce Labs. We will use this platform throughout the remainder of this course. Some concepts we cover during this course require the API Fortress platform.

However, you can try and follow along using other tools like [Postman](https://www.postman.com/), and then [import your requests later on](https://docs.saucelabs.com/api-testing/quick-start/importing-postman-collections).

### Getting Started with API Fortress

If you don't have an API Fortress account you can [Create a Sauce Labs Account](https://saucelabs.com/sign-up/), and get started with a free trial. You can now access [API testing](https://app.saucelabs.com/api-testing).


> **NOTE**: If you don't receive an email confirmation, check your spam folder or please email [support@saucelabs.com](support@saucelabs.com) for assistance.


#### Create a Project

For this first test project we will test against the Sauce Labs API.

1. Log in to the platform
2. Select the **Create Project** button.
   <img src="assets/apif-mod2/01/createProject.png" alt="API Fortress: Create Project"/>
3. The **Add New Project** alert window appears.
   <img src="assets/apif-mod2/01/newProject.png" alt="API Fortress: Project Fields"/>

   Add the following for each category:
    * **Project Name**: `Test Project`
    * **Description**: `Simple Test against the Sauce Labs User API`
    * **Notes**: `https://docs.saucelabs.com/dev/api/accounts#user-methods`

5. Find your project and select the **Tests Icon** to continue.

   <img src="assets/apif-mod2/01/testIcon.png" alt="API Fortress:Test Icon Button" />

<!------------------------------>

## 2.03 Create the API Test
Duration: 0:04:00

We now have a project in which we can begin writing API Tests. Let's create the first API Test. Sign in to Sauce Labs and access [API testing](https://app.saucelabs.com/api-testing).


#### Create a Test File

We're going to test against the [Sauce Labs GET user endpoint](https://docs.saucelabs.com/dev/api/accounts#get-users). In order to successfully create this test we need to complete the following steps using the Visual Editor :
* Send an example HTTP Request using the **HTTP Client**
* Add the **Basic Authorization Header** to our sample request
* **Generate a Test** based on the response payload.

From the project:

1. Select **Tests** at the top navigation bar in order to see the project test list
2. From the project test list, select **+ Create Test**
   <img src="assets/apif-mod2/01/createTest.png" alt="API Fortress: Create New Tests" />

3. You should now see the new **Test Details** alert window
   <img src="assets/apif-mod2/01/testDetails.png" alt="API Fortress: Test Details" />

   Add the following for each category:
    * **Test Name**: `GET User Info`
    * **Description**: `Test for /team-management/users method`
    * **Tags**: `GET`, `user`, `team-management`

5. Now your test should appear in the project **Tests** page.

   <img src="assets/apif-mod2/01/newTest.png" alt="API Fortress: Test Status / Interstitial Page" />

#### Note:
Negative
: Enter tags individually an then press 'Enter' to submit the tag. These will be helpful down the road when you want to search or query test results by tag name.


<!------------------------------>

## 2.04 Generate a Test
Duration: 0:04:00  

At the moment, the test content is empty. So from here, we can generate a test with the following options:
* Generate a test manually with the HTTP Client,
* Generate a test from a spec file.

For the purposes of this lesson, we will generate a test manually with the HTTP Client.

From the Tests page:

1. Select the **HTTP Client** in the top navigation bar.
   <img src="assets/apif-mod2/01/httpClient.png" alt="API Fortress: HTTP Client button" />

3. At the bottom of the UI, enter the following URL where it says **Request url** in the **HTTP Client**:
   ```
   https://api.us-west-1.saucelabs.com/team-management/v1/users?limit=3
   ```

4. Select the **Send** button:

   <img src="assets/apif-mod2/01/sendRequest.png" alt="API Fortress: Generate Test Step 1" />

   You should receive the following error response to the right of the request input:
   ```http request
   "HTTP Code 401: Authorization failed"
   ```
   <img src="assets/apif-mod2/01/authFailed.png" alt="API Fortress: HTTP 401 Request Error" />


#### Note:

Negative
: To see the raw response body in the HTTP Client select **Body** and then either *Raw* or *Parsed*

### Adding a Test Component

Let's add a GET component that makes a successful API call against the Sauce Labs REST API.

In the previous step we encountered a common authentication error, **[HTTP: 401](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401)**, because you didn't send the `username` and `accesskey` that Sauce Labs requires to communicate with their API. In order to fix this error we must add our [Sauce Labs Account Credentials](https://app.saucelabs.com/user-settings) as a [Basic Authentication Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication).

1. Navigate  back to the **Tests** page and click to edit the test you created.
   <img src="assets/apif-mod2/01/goBackTests.png" alt="API Fortress: Go back to the tests page" />

2. Select **+ Add Request / Assertions**
   <img src="assets/apif-mod2/01/addRequest.png" alt="API Fortress: Add Component Button" />

3. From the dropdown list, select **GET**:

   <img src="assets/apif-mod2/select-get-component.png" alt="API Fortress: Select GET Component" />


### Create A GET Component
1. In the next screen, recreate your HTTP Client request with the following information
    * **Url**: `https://api.us-west-1.saucelabs.com/team-management/v1/users` – The URL that you are retrieving data from
    * **Variable**: `payload` - The variable where the response to GET is stored
    * **Expect**: Leave blank
    * **Mode**: `json` - The format of the information from the GET call
    * **Query Params**: *Name*: `limit` *String value*: `3` – Sets the number of responses to a limit of 3, so that your test doesn't take too long to complete

2. Then select **Add Authentication** at the bottom right.
   <img src="assets/apif-mod2/01/addAuthentication.png" alt="API Fortress: Authentication Details" />


3. Select **Basic Authentication**, then add your [Sauce Labs Username and Access Key](https://app.us-west-1.saucelabs.com/user-settings) in the relevant fields.    When you're finished, select the **green check mark** <img src="assets/apif-mod2/green-check-mark.png" alt="API Fortress: Green Check Mark" width="30"/> in the top right.

   <img src="assets/apif-mod2/basic-auth-component.png" alt="API Fortress: Basic Auth Component" />

   <img src="assets/apif-mod2/01/basicAuthDetails.png" alt="API Fortress: Basic Auth Details" />



#### Note
Negative
: **There is no autosave!** It's important to save each time you make a change to your test and/or an HTTP Request. <img src="assets/apif-mod2/01/saveTheThings.png" alt="API Fortress: Save" />  


### Copy and Paste the Encoded Auth Header
1. You'll notice that API Fortress automagically encodes and adds the [Base64 Authorization header](https://developer.mozilla.org/en-US/docs/Glossary/Base64) for you. Double-click the component to see the details:
   <img src="assets/apif-mod2/01/basicEncode.png" alt="API Fortress: New Auth Component" />

2. Copy the `base64` Basic Authorization value (e.g. `Basic anRhY2s0Oxxxxxxxxxxxxxxxxxxxxxxxx==`) to your clipboard
3. Return to the HTTP Client tab in your project.

4. Paste the `base64` Basic Authorization value into your HTTP Client **Headers** section and type `Authorization` into the _Key_ field. Also, make sure the endpoint URL: `https://api.us-west-1.saucelabs.com/team-management/v1/users?limit=3` is still there:
   <img src="assets/apif-mod2/01/get3Users.png" alt="Add Auth details to request" />


5. Save your HTTP request in your project to use later. Name it whatever you wish (here it is named `GET 3 Users`):
   <img src="assets/apif-mod2/01/save3UsersTest.png" alt="Add Auth details to request" />


6. Back in the _HTTP Client_, select the **Send** button again. To the right, you should see a `200` response code and something similar in the response headers:
   <img src="assets/apif-mod2/01/responseBody200.png" alt="API Fortress: Response Body Example" />


7. Next, select the **Generate Test** button and API Fortress automagically generates a sample test based on the request data.
   <img src="assets/apif-mod2/01/generateTest.png" alt="API Fortress: Generate Test Button" />

8. Enter the test details (a name such as `First GET Test` and a description), select **Save**, and click through the prompts, and you should now see a full test back in the **Tests** page.
   <img src="assets/apif-mod2/01/generatedTest.png" alt="API Fortress: Generated Test" />


6. The final step is to run your tests. At the top of the toolbar, select **Save** then **Run**
   <img src="assets/apif-mod2/01/runTest.png" alt="API Fortress: Run Test Button" />

<!------------------------------>

## 2.05 View Test Results
Duration: 0:01:00

If your previous step ran without any errors you should see the following test results page:
<img src="assets/apif-mod2/01/testResults.png" alt="API Fortress: Test Results Page 1" />

If you ran into any errors, they appear here.

### Troubleshooting API Test Errors

If you are getting  a test error, and want to find out more about what an HTTP call you are making is returning, The HTTP Client, accessible from your project dashaboard, can be a useful tool.

You can use the HTTP Client to send a request, and even add in headers (suach as authorization credentials) &  other information to  a

<img src="assets/apif-mod2/HTTP_Test.png" alt="Add Global Parameter", width="600"/>

<!-- ------------------------ -->

## 2.06 Schedule and Publish a Test
Duration: 0:04:00

If you navigate back to the **Tests** page, you may notice to the right is a message stating: **Unpublished changes**

<img src="assets/apif-mod2/01/unpublished.png" alt="API Fortress: Unpublished Status " />

There's either one of two reasons for this:

* The test wasn't *published*
* The test isn't *scheduled*

### Publish the Working Copy
All the work we previously completed only exists as a **Working Copy**. It's basically still in *rough draft* form, and we need to publish the test in order to actually use it in production.

From the Test editing page, hover over the message that states "Unpublished changes" and select the **Publish** button to publish the working copy.

<img src="assets/apif-mod2/01/publish.png" alt="API Fortress: Publish Button" />

Immediately, the Publish button turns green to indicate your test is ready for a scheduled a test run. Save your test.

<img src="assets/apif-mod2/01/published2.png" alt="API Fortress: Publish Status" />

### Schedule a Test

Scheduling a test basically means we can set up a recurring job (sort of like a [`cron` job](https://www.hostinger.com/tutorials/cron-job)) that can run our published tests at a specific time, along with other test parameters. If you look on the project page where your tests are listed, a test that is published, but not scheduled, appears with a `-` underneath the **Schedules** tab like this:

<img src="assets/apif-mod2/01/unscheduled.png" alt="API Fortress: Not Scheduled" />

Below are the steps to schedule a test.

From the page where your projects' tests are listed, select the **Schedule Test** button:

   <img src="assets/apif-mod2/01/schedule1.png" alt="API Fortress: Schedule Button" />

You should now see the **Test Scheduler**:

1. Next select **Create Schedule**
   <img src="assets/apif-mod2/01/createSchedule.png" alt="API Fortress: Create New Schedule" />
3. In the next page you can set the test run parameters and scheduling details such as when and how often tests run.
   <img src="assets/apif-mod2/01/scheduleDetails.png" alt="API Fortress: Schedule Details" />
4. Enter the desired details and when you're finished, select **Save** at the bottom. Below is an example of a schedule that runs on the 55th minute at noon and midnight, during every day of every month.
   <img src="assets/apif-mod2/01/highNoon.png" alt="API Fortress: High Noon Schedule" />

If everything worked correctly, you should see the following status on the **Schedule** page:
<img src="assets/apif-mod2/01/scheduleExample.png" alt="API Fortress: Schedule Example" />

Also, you will see the following on the page where the tests for your project are listed:
<img src="assets/apif-mod2/01/schedulesOnTest.png" alt="API Fortress: Schedule Icon" />


Congratulations on running, publishing, and scheduling your first API Test!

In the next module, we will take a step back and dive deeper into the API Fortress Test Component Library where we cover such topics as:

* Adding **Assertions**
* Working with **Variables** and **Input Sets**
* Using the **The Vault**
* and more!

<!-- ------------------------ -->
## 2.07 Module 2 Quiz

![https://docs.google.com/forms/d/e/1FAIpQLScD-Qv4R-99_uW2IumSKhPTkwO3RX-3mU0G-aotTWMrIVVrUA/viewform?embedded=true](https://docs.google.com/forms/d/e/1FAIpQLScD-Qv4R-99_uW2IumSKhPTkwO3RX-3mU0G-aotTWMrIVVrUA/viewform?usp=sf_link)
