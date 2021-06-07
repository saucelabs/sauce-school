<!-- Copy this file into tools/site/coursenameFolder & start editing -->

summary: Module 3 of the Sauce Labs Quickstart course, shows users how to quickly take an automated test written in Java with the JUnit testing library, and update a few settings to run your automated tests on the Sauce Labs platform. Users will add a few things to their tests, including the URL for the Sauce Labs endpoint, a username and access key, and update capabilities
id: Module3-Quickstart
categories: advanced
tags: quickstart
environments: Web
status: Draft
analytics account: UA-86110990-1
feedback link: https://forms.gle/CGu4QchgBxxWnNJK8
author:Lindsay Walker
<!-- ------------------------ -->
# Module 3 - Sauce Labs Web Applications Tests

<!-- ------------------------ -->
## 3.01 What You'll Learn
Duration: 0:02:00


There are many possibilities for testing on [Sauce Labs](http://app.saucelabs.com/?utm_source=referral&utm_medium=LMS&utm_campaign=link), and in this module we will cover the specific case of testing a desktop browser web applications using the Sauce Labs Cloud of virtual machines.

**Users who have their own local test environment and code set up can [start on module 3.03](https://training.saucelabs.com/codelabs/Module3-Quickstart/index.html?index=..%2F..quickstart#2)**

You can also use the **[Example Test Suite](https://github.com/walkerlj0/Selenium_Course_Example_Code/tree/master/java/Quickstart/Mod3/3.02)** and follow the next module to get set up.

The examples here use Java code using Selenium version 3.14.15, the Maven build tool, as well as the JUnit4 test runner. The examples are on a MacOS machine, however we do provide examples of environment setup on a Windows machine.


### Skills & Knowledge

In this Module you will:

* Learn how to set up and run a local Java JUnit4 test using the IntelliJ IDE and Maven project management tool
* The services and advantages available when you use the Sauce Labs Cloud to run automated tests
* The structure and functionality of a Java Junit test suite that uses the _Page Object Model_ (POM)
* What capabilities are and how to update a test to connect to sauce labs and use capabilities to communicate test suite information


<!-- ------------------------ -->
## 3.02 Setup & Run Your Test Suite Locally
Duration: 0:05:00

This module contains a list of resources your will need to clone & use the [sample test code](https://github.com/walkerlj0/Selenium_Course_Example_Code/tree/master/java/Quickstart/Mod3) as well as get set up including:

* Access the correct directory to run this example test code
* Install dependencies to run tests locally
* Understand dependencies that help you set up & run your tests
* Troubleshoot issues with running the code.

#### Video
**[Local Test Project Code – Java and JUnit4]()**

### Test Code
If you have your own testing suite written in Java, using the JUnit 4 test runner, with capabilities set up similar to [the base test here](https://github.com/walkerlj0/Selenium_Course_Example_Code/blob/master/java/Mod4/4.05/src/test/java/tests/BaseTest.java)  or you understand the differences between the test runner you are using and how to structure capabilities, you jump to the next section. Otherwise, use the example code in the GitHub repo.


#### Use GitHub Repository (Optional)

If you are familiar with using GitHub to write your code, you can also fork/ branch this repository here and run the code in 3.02 as a boilerplate:

**[Example Starting Folder](https://github.com/walkerlj0/Selenium_Course_Example_Code/tree/master/java/Quickstart/Mod3/3.02)**


### Required Dependencies
To run a local test as shown, you will need to set up and install the following:

*   A Java SDK ([Version 8 used in this example](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html))
*   An IDE ([IDEA Community Edition](https://www.jetbrains.com/idea/download/))
*  Apache [Maven](https://maven.apache.org/) to build your project and manage dependencies.

If you would like step-by-step instructions to help installing the dependencies above you can use the instructions in the [Selenium Java course](https://training.saucelabs.com/codelabs/Module1-SeleniumJava/index.html?index=..%2F..SeleniumJava#4).

#### Windows
Follow [these instructions](https://docs.google.com/document/d/1herzHbTJdQpa-hAIR5llTfbbw20PeM99-BAoVTeuC8U/edit?usp=sharing) to install and set up a JDK, Maven, and IntelliJ on Windows 10.

#### MacOS
 [See the lesson in the Selenium Java course](https://training.saucelabs.com/codelabs/Module1-SeleniumJava/index.html?index=..%2F..SeleniumJava#4) to see how to set up your local environment on MacOS


### Run the Test Code Locally

If you are cloning a project, run the command in IntelliJ (after you have updated `pom.xml`):

```
mvn clean test
```

### WebDriver Manager
This sample of test code is  using [WebDriver Manager](https://github.com/bonigarcia/webdrivermanager), which handles the downloading of the browser drivers that works with the version of the browser you are working with on your machine, and pointing your tests to the correct driver.



### Update `pom.xml`
Add your configurations into `pom.xml` [like the project here](https://github.com/walkerlj0/Selenium_Course_Example_Code/blob/master/java/Quickstart/Mod3/Mod3_Final/pom.xml) to get all the dependencies you will need for this module.

You may need to invalidate caches and restart IntelliJ IDE again to activate the imports specified in `pom.xml`. You can also search for the [latest Maven package versions](https://mvnrepository.com/).

### Troubleshoot Project Setup

If your test isn't running, try the following to troubleshoot to get the tests running locally:

* Right-click on the project name and choose **Add Framework Support**. <img src="assets/QS2.03D.png" alt="Add framework support" width="350"/>
* Choose **Maven** as a build tool.
* Go to **File > Project Structure**. Select a JDK that you have installed on your machine.
* Choose **File > Invalidate Caches and Restart** so the changes can take effect. <img src="assets/QS2.03E.png" alt="Appium Doctor" width="350"/>


<!-- ------------------------ -->
## 3.03 Setup to Run Tests on Sauce Labs
Duration: 0:05:00

Once you understand how the test suite functions, you need to update settings such as the capabilities, endpoint to run against the Sauce Labs Cloud, and your Sauce username and access key. In this module you will gain understanding about:
* The features and functionality Sauce Labs offers for automated tests
* How to get your Sauce Username and Access Key to use in automated tests
* What settings you will need to run on Sauce Labs
* How to set up your test structure to easily switch between running a test locally and on Sauce Labs


#### Video
**[Setup to Run Web App Tests On Sauce Labs]()**

### About Running Tests on Sauce Labs

#### Capabilities

Capabilities are sets of settings that you can pass along to the environment your test is being run, using the JSON wire protocol. W3C has a set of capabilities you can use, and you can create your own sets of capabilities using [Mutable Capabilities](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/MutableCapabilities.html) to create your own capabilities as well.

Other vendors, such as [Chrome](https://chromedriver.chromium.org/capabilities), [Firefox](https://developer.mozilla.org/en-US/docs/Web/WebDriver/Capabilities/firefoxOptions), and Sauce Labs have created other pre-defined subsets of capabilities that you can set, which are useful when you need to set specific capabilities such as extensions for Chrome, or the Sauce username.



#### Why Sauce Labs?
In this module you are going to learn how to move the test suite that you have on your local machine onto the [Sauce Labs](https://accounts.saucelabs.com/am/XUI/#login/?utm_source=referral&utm_medium=LMS&utm_campaign=link) cloud platform.

Sauce Labs maintains a set of real and virtual devices, as well as a Selenium grid that you can use to run your test in almost any environment. There are many reasons this is advantageous:

* You don't have to worry about about downloading and matching browser drivers  
* You can use virtual machines (without having to set it up on your own machine)
    *   To test older versions of operating systems
    *   Test browsers that run on different operating systems that your own.
* You don’t have to provision all the different kinds of virtual machines you will need yourself
*   You don’t have to set up and maintain the Selenium Grid that will coordinate the test across all of these different machines

When you run tests on Sauce Labs, you are using the _Selenium Grid_ to test on multiple operating systems and the _Remote Webdriver_.  The Sauce Labs Selenium Grid lets you distribute test execution across several machines and you connect to it with [Selenium RemoteWebDriver](https://www.selenium.dev/documentation/en/remote_webdriver/remote_webdriver_client/).

You tell the Grid which browser and OS you want your test to run on through the use of Selenium's class object, [MutableCapabilities](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/MutableCapabilities.html), and its various subclasses for specific browser options (ChromeOptions, FirefoxOptions, etc.) Sauce Labs has [specific language bindings](https://github.com/saucelabs/sauce_bindings) that act as wrappers for supported programming languages.

### Setup your Sauce Labs Account

You'll need an account to use Sauce Labs. Their [free trial](https://accounts.saucelabs.com/am/XUI/#login/?utm_source=referral&utm_medium=LMS&utm_campaign=link) offers enough to get you started.

Once you have your account set up, go to **Account> User Settings** to find your username and access key.

<img src="assets/4.05B.png" alt="Sauce Labs User Name Access Key" width="450"/>


You will need to set up your username and access key on your machine’s (or CI Tools') environment variables to use them in your test.

To learn more about setting up environment variables, you can see the article [here](https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Use+Environment+Variables+for+Authentication+Credentials#BestPractice:UseEnvironmentVariablesforAuthenticationCredentials-SettingUpEnvironmentVariablesonMacOSX/LinuxSystems/?utm_source=referral&utm_medium=LMS&utm_campaign=link).


#### Video

Watch This Video to See how to [set up your Sauce Credentials as environment variables on MacOS](https://www.youtube.com/watch?v=3K1Eu0eTha8&t=12s).

<video id="3K1Eu0eTha8"></video>


### Setup Tests for Sauce Labs

#### Update `Config.java`
In the `Config.java` file, you are going to communicate the settings for our test environment with the W3C [Capabilities](https://wiki.saucelabs.com/display/DOCS/Desired+Capabilities+Required+for+Selenium+and+Appium+Tests/?utm_source=referral&utm_medium=LMS&utm_campaign=link), required for every Selenium test.

Here, you will define some variables that you can use in your Base Test code, for your tests to be able to communicate with Sauce Labs:


```
// filename: tests/Config.java
package tests;

public class Config {
    public static final String baseUrl = System.getProperty("baseUrl", "http://the-internet.herokuapp.com");
    public static final String host = System.getProperty("host", "saucelabs");
    public static final String browserName = System.getProperty("browserName", "chrome");
    public static final String browserVersion = System.getProperty("browserVersion", "75.0");
    public static final String platformName = System.getProperty("platformName", "Windows 10");
    public static final String sauceUser = System.getenv("SAUCE_USERNAME");
    public static final String sauceKey = System.getenv("SAUCE_ACCESS_KEY");
}
```


Notice the new variables you have added:



*   `host `enables you to specify whether our tests run locally or on Sauce Labs. Right now, the host is either` "saucelabs`” or `"localhost"`
*   The [Sauce Labs Test Configuration Options](https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options) contains information for each specific test. You assume you may pass in unique usernames and access keys
    *   `browserName` specifies the browser for a test.
    *   `browserVersion` specifies which version of the browser for a test
    *   `platformName` specifies the operating system for a test.
    *   `username` is the username you have created for Sauce Labs
    *   `accessKey` is generated (and can be regenerated) in your user settings in Sauce Labs


### Switch the `host` in `BaseTest.java`
Now that you have the variables you will you for your capabilities, you want to create `switch` statement with two different cases that you can use: one for running tests on you local machine, and one for running tests on Sauce Labs.

In the `BaseTest.java` class, within the `before()` method, add a `switch()` method with two different host options:

```
// filename: tests/BaseTest.java
// ...
       switch (host) {
             case "saucelabs": {
                  //...
                  break;
              }
              case "localhost":
                  //...
                  break;
              }
```
Inside of the first case, `"saucelabs"`, type in the declaration of the `sauceUrl` variable, and create your `MutableCapabilities`. We will add more to these capabilities later.

```
// filename: tests/BaseTest.java
// ...
    switch (host) {
        case "saucelabs": {
            String sauceUrl = "https://ondemand.us-west-1.saucelabs.com/wd/hub";
            MutableCapabilities capabilities;
        break;
    }
```

Finally, move the `if, else if` statement that checks the `browserName` variable inside of the `"localhost"` case:

```
// filename: tests/BaseTest.java
// ...
    case "localhost": {
         if ("firefox".equals(browserName)) {
             WebDriverManager.firefoxdriver().setup();
             driver = new FirefoxDriver();
         } else if ("chrome".equals(browserName)) {
             WebDriverManager.chromedriver().setup();
             driver = new ChromeDriver();
         }
         break;
     }
```



#### Final Code
See and [example of both BaseTest.java and Config.yml in the 3.03 example](https://github.com/walkerlj0/Selenium_Course_Example_Code/tree/master/java/Quickstart/Mod3/3.03).

<img src="assets/QS3.04A.png" alt="Sauce Labs Account" width="750"/>

Notice how many of the variables for capabilities are grey in this example, since they aren’t yet used in the test code:

<img src="assets/4.05J.png" alt="Capabilities for your test" width="750"/>




<!-- ------------------------ -->
## 3.04 Run Web App Tests on Sauce Labs
Duration: 0:05:00

Now that you have the pieces in place, such as your Sauce Labs credentials and variables to pass in as capabilities, you can run the example test suite on Sauce Labs in a few simple steps:
* Add the endpoint (URL) to run tests on Sauce Labs VMs
* Add in capabilities to set the browser and operating system for your tests
* Start a Remote WebDriver and run tests using different options on Sauce Labs

#### Video
**[Run a Web App Test on Sauce Labs]()**


### Update your URL and Capabilities

Now you need to update `BaseTest.java `to work with these new values and connect to Sauce Labs. Note that these are called [Capabilities](https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options), and the format they are in here is compatible with Selenium WebDriver 4.0, as well as all previous Selenium versions. They set the options for setting up the environment for your tests.


```
// filename: tests/BaseTest.java
// ...
  @Override
        protected void before() throws Exception {
            if (host.equals("saucelabs")) {
                MutableCapabilities sauceOptions = new MutableCapabilities();
                sauceOptions.setCapability("username", sauceUser);
                sauceOptions.setCapability("accessKey", sauceKey);
                MutableCapabilities capabilities = new MutableCapabilities();
                capabilities.setCapability("browserName", browserName);
                capabilities.setCapability("browserVersion", browserVersion);
                capabilities.setCapability("platformName", platformName);
                capabilities.setCapability("sauce:options", sauceOptions);
                String sauceUrl = String.format("https://ondemand.saucelabs.com/wd/hub");
                driver = new RemoteWebDriver(new URL(sauceUrl), capabilities);
            } else if (host.equals("localhost")) {
                if (browserName.equals("firefox")) {
                    System.setProperty("webdriver.gecko.driver",
                            System.getProperty("webdriver.gecko.driver", "src/test/java/drivers/geckodriver"));
                    driver = new FirefoxDriver();
                } else if (browserName.equals("chrome")) {
                    System.setProperty("webdriver.chrome.driver", "src/test/java/drivers/chromedriver");
                    ChromeOptions browserOptions = new ChromeOptions();
                    driver = new ChromeDriver();
                }
            }
        }


```


This has two if/ else statements:



*   The first one checks to see if you have set your test to run on the `"localhost"` or `"saucelabs".`
*   The second, nested in the `localhost` condition, sets your test up to use the Geckodriver or Chromedriver saved in your project folder, depending on which browser you have set your test to use.

Now you can import the `MutableCapabilities `and` RemoteWebDriver` Selenium classes, as well as the` URL` java class. Add these imports in `BaseTest.java`:


```
// filename: tests/BaseTest.java
// ...
import org.openqa.selenium.MutableCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.net.URL;
// ...
```



### Run Your Tests

Now you can use terminal commands to run your tests on Sauce Labs while specifying the `browserName`,` browserVersion`, and `platformName`. As an example, if you run this command the test will be run in Sauce Labs in on MacOS 10.10 in the Chrome 75 browser:


```
mvn clean test -Dhost=saucelabs -DbrowserName=chrome -DbrowserVersion=75 -Dplatform="OS X 10.10"
```


You should also visit [http://app.saucelabs.com/](http://app.saucelabs.com/). Go to the left hand menu and choose **Automated → Test Results**. There you will see your tests with icons indicating they were run on the operating system & browser that you chose:



<img src="assets/4.05E.png" alt="Jobs Run on Sauce" width="550"/>


#### Final Code

The complete code can be found [here](https://github.com/walkerlj0/Selenium_Course_Example_Code/tree/master/java/Quickstart/Mod3/3.04). Your final code will look like this:

<img src="assets/SC3.04A.png" alt="Updated Sauce Labs capabilities" width="750"/>

<img src="assets/SC3.04B.png" alt="Updated imports" width="750"/>




<!-- ------------------------ -->
## 3.05 Add a Test Name on Sauce Labs
Duration: 0:06:00

In this lesson you will add in the test name to make it easier to understand which tests you are viewing results for on the [Sauce Labs automated web testing platform](https://accounts.saucelabs.com/am/XUI/#login/?utm_source=referral&utm_medium=LMS&utm_campaign=link). In this lesson you will learn to:

* Use the [JUnit TestWatcher](https://junit.org/junit4/javadoc/latest/org/junit/rules/TestWatcher.html) to capture the test method name
* Set the name capability to pass that information to Sauce Labs

#### Video
**[Adding a Test Name on Sauce Labs – Java JUnit4]()**


Now that your tests are up and running on the Sauce Labs platform, you’ll notice it’s hard to tell one apart from the other. The tests you should have run will show up as **Unnamed job** with a hash identifier- not easy to use for testing and debugging.

<img src="assets/4.06A.png" alt="Unnamed Job" width="550"/>


To fix this issue, you can pull information from the test and send it to the [Sauce Labs dashboard ](https://accounts.saucelabs.com/am/XUI/#login/?utm_source=referral&utm_medium=LMS&utm_campaign=link).

### Use TestWatcher to Add a Test Name

Not having test runs that are named makes it extremely challenging to know which tests were run in each job. The [TestWatcher rule](https://github.com/junit-team/junit4/wiki/Rules#testwatchmantestwatcher-rules) will allow you gather information at the right time, and pass the test name to Sauce Labs.

In` BaseTest` you will use another JUnit rule called `TestWatcher().` First you will need to create a string variable called `testName` in the `BaseTest` class underneath where you instantiate the driver.


```
// filename: tests/BaseTest.java
// ...
private String testName;
// ...
```
Next, before the final closing bracket of the `BaseTest` class, create a new `@Rule`, after the `@Override` that quits the driver. This will create a `TestRule` using [`TestWatcher`](https://junit.org/junit4/javadoc/latest/org/junit/rules/TestWatcher.html) that pulls the display name of the test when the test is starting, so you can pass it in as a Sauce Option.



### Add a Sauce Capability for Test Name

Now you can add it to [Sauce Options](https://opensource.saucelabs.com/sauce_bindings/docs/basic-options) in between` platformName `after the `accessKey` and before the list of `Mutable Capabilities`:


```
// filename: tests/BaseTest.java
// ...
sauceOptions.setCapability("name", testName);
// ...

```

### Run Your Test
Once you have all three elements added, make sure you have imported the JUnit dependencies:

```
// filename: tests/BaseTest.java
// ...
import org.junit.rules.TestRule;
import org.junit.rules.TestWatcher;
import org.junit.runner.Description;
// ...
```

Run `mvn clean test -Dhost=saucelabs` in your project in terminal to see if it works. Now when you run our tests in Sauce Labs, the [account dashboard](https://accounts.saucelabs.com/am/XUI/#login/?utm_source=referral&utm_medium=LMS&utm_campaign=link) will show the tests running with the name of the test, test class, and package appearing on the dashboard:

<img src="assets/4.06Q.png" alt="Error or Complete" width="750"/>

#### Final Code
See an example of the [test with a name added.](https://github.com/walkerlj0/Selenium_Course_Example_Code/tree/master/java/Quickstart/Mod3/3.05)

<img src="assets/QS3.05A.png" alt="Import assets and create test name variable" width="650"/>

<img src="assets/QS3.05B.png" alt="Create test name variable capability" width="650"/>

<img src="assets/QS3.05C.png" alt="Test watcher for test name" width="650"/>

<!-- ------------------------ -->
## 3.06 Add a Test Status for Sauce Labs
Duration: 0:05:00

Right now regardless of the outcome of a test, the job in Sauce Labs will register as **Complete** or **Error**. Ideally you want to know if the job was a **Pass** or a **Fail**. That way we can tell at a glance if a test failed or not. With a couple of tweaks we can make this happen easily enough. In this lesson you will learn to:

* Capture the `sessionId` from RemoteWebDriver
* Create a connection with the [SauceRest API](https://github.com/saucelabs/saucerest-java)
* Pass information about the pass or fail status with TestWatcher of your test using the Sauce REST API, and the `sessionId`

#### Video
**[Add a Test Status on Sauce Labs – Java JUnit4]()**

<img src="assets/4.06F.png" alt="Error or Complete" width="750"/>

Negative
: A  _failure_ is different from an _error_. An error means that you test code is erroneous, and you, as the test writer, need to make a change. You should see this error in your terminal output, and if the code is correct to communicate with Sauce Labs, it should be on your dashboard as well. A failure means a test successfully ran, but the conditions it was checking for were not present – in other words, the code for the app isn’t as expected or needs fixing.


### Create Session ID and Sauce Rest Functionality

In the variable list of the` BaseTest` class (below `private string testName;`) add in the following to create variables to store the `RemoteWebDriver` SessionId and the instance of the SauceREST client:


```
// filename: tests/BaseTest.java
// ...
    private String sessionId;
    private SauceREST sauceClient;
// ...
```


Under the saucelabs` driver` instantiation in the` before()` rule instantiate a` sessionId` and `sauceClient` for when you are running tests on Sauce Labs:


```
// filename: tests/BaseTest.java
// ...
  case "saucelabs":}
  // ...
      driver = new RemoteWebDriver(new URL(sauceUrl), capabilities);
      sessionId = ((RemoteWebDriver) driver).getSessionId().toString();
      sauceClient = new SauceREST(sauceUser, sauceKey, DataCenter.US);

// ...
```


The `sessionId` is retrieved from the `RemoteWebDriver`. The `sauceClient` creates an instance using the Sauce Labs REST API, passing in the username, access key, and data center location. You can change the data center on the Sauce Labs dashboard. Once that is changed, if you would like, go into your code and [change](https://wiki.saucelabs.com/display/DOCS/Data+Center+Endpoints) the `DataCenter` option in your code to reflect this.

<img src="assets/4.06H.png" alt="Data Center" width="750"/>


Now you can import the `SauceREST` and `DataCenter` libraries in the` imports` list of `BaseTest.java`:

```
// filename: tests/BaseTest.java
// ...
import com.saucelabs.saucerest.SauceREST;
import com.saucelabs.saucerest.DataCenter;
// ...
```

#### Using the Sauce REST API
In order to tell Sauce Labs that your test has passed or failed, you will need to use the [SauceREST API](https://github.com/saucelabs/saucerest-java)

You’ll first need install the `saucerest` library is a part of your `pom.xml` file within the `dependencies` tags.


```
// filename: pom.xml
// ...
    <dependencies>
    // ...
        <dependency>
            <groupId>com.saucelabs</groupId>
            <artifactId>saucerest</artifactId>
            <version>1.0.40</version>
            <scope>test</scope>
        </dependency>
// ...

```



#### NOTE

Negative
: If you add a dependency and the text appears in red (Maven isn’t recognizing it) you can right click on the pom.xml file in the project directory in IntelliJ then choose **Maven > Reload project**: <img src="assets/4.06G.png" alt="Reload project with Maven" width="450"/>



#### Get Pass And Fail Status with TestWatcher

Now, go down to the` TestWatcher` rule. Under the first` @Override` annotation, add in two more:


```
// filename: tests/BaseTest.java
// ...
  public TestRule watcher;{
    // ...
          @Override
          protected void failed(Throwable throwable, Description description) {
              if (host.equals("saucelabs")) {
                  sauceClient.jobFailed(sessionId);
                  System.out.println(String.format("https://saucelabs.com/tests/%s", sessionId));
              }
          }

          @Override
          protected void succeeded(Description description) {
              if (host.equals("saucelabs")) {
                  sauceClient.jobPassed(sessionId);
              }
          }
        };
// ...
```

Once a Sauce Job is started we're able to get the session ID from `RemoteWebDriver` and store it's string value in the `sessionId` variable. You then connect to the session of the Sauce REST client (which connects to the Sauce API) and use TestWatcher to send either a passed or failed status using the Sauce REST API.

With a conditional check in each `@Override` statement you make sure the sauceClient commands only trigger when a Sauce session has been established.

When a test is successful the `succeeded()` method will fire, marking the Sauce job for the test as `passed`. When a test fails the `failed()` method will trigger, and the job will be marked as `failed`. When there's a failure, we'll want to know the URL to view the job on [Sauce Labs](https://accounts.saucelabs.com/am/XUI/#login/?utm_source=referral&utm_medium=LMS&utm_campaign=link) so you concatenate the URL and output it to the console using the `System.out.println` command.

Now when you run `mvn clean test -Dhost=saucelabs` in terminal, then check your [Sauce Labs dashboard](https://accounts.saucelabs.com/am/XUI/#login/?utm_source=referral&utm_medium=LMS&utm_campaign=link). On the right you should be able to see a status of passed with each test.

<img src="assets/4.06C.png" alt="Passed Tests" width="550"/>

#### Final Code
See an example of the [completed code to compare.](https://github.com/walkerlj0/Selenium_Course_Example_Code/tree/master/java/Mod4/4.06)


<img src="assets/4.06I.png" alt="Test Rule and Watcher" width="550"/>

<img src="assets/4.06J.png" alt="Session ID and SauceREST API" width="750"/>

<img src="assets/4.06K.png" alt="Test Watcher" width="750"/>

<img src="assets/4.06L.png" alt="Sauce Rest in pom.xml" width="650"/>


<!-- ------------------------ -->
## 3.07 Run Web App Tests in Different Browsers
Duration: 0:04:00

It's easy to add in a new type of browser in your Config file, however there is a caveat; each browser has other capabilities that are possible to add along with it. In this module you will:

* Add a switch statement using Selenium `BrowserType` class to detect the browser
* Add browser options to set capabilities for 5 different types of browsers
* Run tests on different browser (and operating systems)


#### Video
**[Run Tests on Different Browsers on Sauce Labs]()**

### Use Browser Options Capabilities
Currently in your test, you are using [`MutableCapabilities`](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/MutableCapabilities.html), which allow you to add any capability in that you want (you can even make up and add a capability that doesn't exist, or make up your own).

A better way to set these capabilities is with sets of browser options, such as `SafariOptions()`, `FirefoxOptions()`, etc.

Each browser has created a limited set of 'capabilities' or settings that are possible use with each browser, which we are going to start using for testing on different browsers. The different capabilities we will use are:
* [`SafariOptions`](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/safari/SafariOptions.html)
* [`Firefox Options`](https://developer.mozilla.org/en-US/docs/Web/WebDriver/Capabilities/firefoxOptions)
* [`InternetExplorerOptions`](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/ie/InternetExplorerOptions.html)
* [`EdgeOptions`](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/edge/EdgeOptions.html)
* [`ChromeOptions`](https://chromedriver.chromium.org/capabilities)

### Update Capabilities

First, you are going to remove the `new Mutablecapabilities();` from the capabilities declaration since you will be declaring browser capabilities depending on which browser you are using:

```
// filename BaseTest.java
// ...
  @Override
          protected void before() throws Exception {
              switch (host) {
                  case "saucelabs": {
                      String sauceUrl = "https://ondemand.us-west-1.saucelabs.com/wd/hub";
                      MutableCapabilities sauceOptions = new MutableCapabilities();
                      sauceOptions.setCapability("username", sauceUser);
                      sauceOptions.setCapability("accesskey", sauceKey);
                      sauceOptions.setCapability("name", testName);
                      MutableCapabilities capabilities; //modified
```

Next, add in a `switch` statement with four cases and a default:

```
// filename BaseTest.java
// ...
        MutableCapabilities capabilities;
                 switch(browserName) {
                     case : {
                         capabilities =
                         break;
                     }
                     case : {
                         capabilities =
                         break;
                     }
                     case : {
                         capabilities =
                         break;
                     }
                     case : {
                         capabilities =
                         break;
                     }
                     default: {
                         capabilities =
                         break;
                     }
                 }
```

Now, import the `BrowserType` class from Selenium:

```
// filename BaseTest.java
// ...
import org.openqa.selenium.remote.BrowserType;
```

For this code, we are going to use the [Selenium `BrowserType`](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/remote/BrowserType.html) interface to determine the type of browser and use the correct set of browser capabilities.

Inside each of the `switch` cases, add the name of the browser type, and the options for each browser, setting the default to `ChromeOptions`:

```
// filename BaseTest.java
// ...
                MutableCapabilities capabilities;
                switch(browserName) {
                    case BrowserType.SAFARI: {
                        capabilities = new SafariOptions();
                        break;
                    }
                    case BrowserType.FIREFOX: {
                        capabilities = new FirefoxOptions();
                        break;
                    }
                    case BrowserType.IE: {
                        capabilities = new InternetExplorerOptions();
                        break;
                    }
                    case BrowserType.EDGE: {
                        capabilities = new EdgeOptions();
                        break;
                    }
                    default: {
                        capabilities = new ChromeOptions();
                        break;
                    }
                }
```

Now, you will need to make sure you have imported the different sets of options for each browser you have set up to test on. You should already have Chrome and Firefox options since you used those to test locally. Right underneath those, import the options for the rest of the options:

```
// filename BaseTest.java
// ...

import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.ie.InternetExplorerOptions;
import org.openqa.selenium.safari.SafariOptions;
```
### Run Tests in Different Environments
Now, when you replace the options using the Sauce Labs [Platform Configurator](https://wiki.saucelabs.com/display/DOCS/Platform+Configurator) to find the values for `browserName`, `browserVersion`, and `platformName` you should be able to run in any browser & version that is supported by Sauce Labs.

This example will run on version 90.0 of the Edge browser:

```
// filename: tests/Config.java
package tests;

public class Config {
    // ...
    public static final String browserName = System.getProperty("browserName", "MicrosoftEdge");
    public static final String browserVersion = System.getProperty("browserVersion", "90.0");
    public static final String platformName = System.getProperty("platformName", "macOS 10.14");
   // ...
```
#### Use Maven and the -D Flag
Beacuse we have set up variables for each of the capabilities, you can use the `-D` flag with your `mvn clean test` command to run your suite of tests in a certain operating system. For each variable you want to change, add  `-DvariableName="variableValue"` after the `mvn clean test` command.

This example would run your tests on Firefox Version 86.0 on a Windows 10 machine:

```
mvn clean test -DbrowserName="firefox" -DbrowserVersion="86.0" -DplatformName="Windows 10"   
```

Using these commands can be helpful if you want to use a Continuous Integration tool (such as Jenkins of Github Actions)

<img src="assets/QS3.07A.png" alt="Sauce W3C case" width="650"/>

_Learn more about setting up tests with Jenkins in the [Selenium Java Course](https://training.saucelabs.com/codelabs/Module5-SeleniumJava/index.html?index=..%2F..SeleniumJava#5)_

#### Final Code
See an example of the [completed code to compare](https://github.com/walkerlj0/Selenium_Course_Example_Code/tree/master/java/Quickstart/Mod3/3.07).

<img src="assets/QS3.07B.png" alt="Import browser options" width="650"/>


<img src="assets/QS3.07C.png" alt="Switch statement with browser options" width="650"/>

<img src="assets/QS3.07D.png" alt="Modifying environment with config" width="650"/>

<!-- ------------------------ -->
## 3.08 Run Web App Tests in Parallel
Duration: 0:08:00

Your tests are currently taking a good deal of time to run since they're executing in series (i.e., one after another).

In this lesson you will be learning how to set up Sauce Labs to run tests in parallel. This means that you can run two or more tests or classes at the same time. In this lesson you will:
* Include the Maven Surefire Plugin in `pom.xml`
* Use the [plugin with the <`parallel`> tag](https://maven.apache.org/surefire/maven-surefire-plugin/examples/fork-options-and-parallel-execution.html) to run tests in parallel
* Add some additional configuration to optimize running tests in parallel on Sauce Labs


#### Video
**[Title]()**

Parallelization is one of the main advantages to using a platform like Sauce Labs, however you also must be careful when designing a test suite to make sure the tests can be run in parallel, and in any order, or else account for and create code that does run certain tests in order. Luckily, our test suite has been well set up to run in parallel.

To run the tests in parallel, you will be using [JUnit and Maven's Surefire Plugin.](http://maven.apache.org/surefire/maven-surefire-plugin/examples/junit.html)


### Add Configuration Options to your Maven Surefire Plugin

You should already have the `maven-surefire-plugin` in your `pom.xml` file within the <`build`> tags. If for some reason you don’t, add it in now:


```
// filename: pom.xml
// ...
    <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <version>2.18.1</version>
    </plugin>
// ...
```


What you will do is add in <`configuration`> options that will allow you to run tests in parallel. Underneath `artifactID`, add in a <`configuration`> opening and closing tag, and within that tag add in the all <`parallel`> parameter.


```
// filename: pom.xml
// ...
    <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <configuration>
            <parallel>all</parallel>
        </configuration>
        <version>2.18.1</version>
    </plugin>

```


The `all` value tells you to run all suites, classes, and methods in parallel. You can also choose to run one or multiple of those options.

Underneath parallel, add in parameters for the number of thread counts for methods, set unlimited thread counts to `true`. This will allow you to use as many threads as CPUs you have available to you, and not run multiple tests in the same thread. <`threadCountMethods`> sets the number of methods (but not classes or suites)  to be tested at once at a limit of `30`. These configurations optimize the running of large test suites.

You also don’t want the output for the reporting to be created in a file, otherwise you cannot run tests in parallel, so we set  <`redirectTestOutputToFile`> to` false`.


```
// filename: pom.xml
// ...
           <threadCountMethods>30</threadCountMethods>
           <useUnlimitedThreads>true</useUnlimitedThreads>                    
           <redirectTestOutputToFile>false</redirectTestOutputToFile>
// ...
```


### Run Parallel Tests

Before you get started, head to the [Sauce Labs Dashboard](https://accounts.saucelabs.com/am/XUI/#login/?utm_source=referral&utm_medium=LMS&utm_campaign=link) and look under **Account > User settings** and check out how many tests you (and your team) can run at once.

<img src="assets/5.04C.png" alt="Sauce W3C case" width="650"/>

Once you are sure that you are able to run tests in parallel (you should have less tests than your concurrency limit), you can run your tests. If you send more jobs than your concurrency limit, Sauce Labs will queue the excess and run them as the initial batch of jobs finish.

Run `mvn clean test -Dhost=saucelabs` and visit the [Sauce Labs Dashboard ](https://accounts.saucelabs.com/am/XUI/#login/?utm_source=referral&utm_medium=LMS&utm_campaign=link)while your tests are running. You should see more than one test running at the same time, and notice that your test suite as a whole runs more quickly! You can see the completed code [here](https://github.com/walkerlj0/Selenium_Course_Example_Code/tree/master/javascript/Mod5/5.04).

<img src="assets/5.04H.png" alt="Concurrent tests running" width="650"/>

### Part 3: Randomize Your Tests

You might ask, why randomization? This is a very effective way to see if your tests are truly atomic and independent of one another. As you run more and more tests, it’s important to make sure that they aren’t dependent on the behavior of a different test, because conditions will not always be the same as you use tests for different cases.

In your `pom.xml` file, below the <`redirectTestOutputToFile`>, add in:


```
// filename: pom.xml
// ...
           <runOrder>random</runOrder>
// ...
```


Now run your tests using `mvn clean test -Dhost=saucelabs` and you should see your tests run in a different order than before.

### Final Code
You can see the [example code here](https://github.com/walkerlj0/Selenium_Course_Example_Code/tree/master/java/Quickstart/Mod3/3.08)
<img src="assets/5.04I.png" alt="pom.xml Final code" width="650"/>


<!-- ------------------------ -->
## 3.09 Module 3 Quiz
Duration: 0:02:00
![]()