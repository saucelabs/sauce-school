author:Lindsay Walker
summary: Module 1 of the Selenium Python Test Automation. Learn to write Selenium tests in Java language using the Pytest framework, the PyCharm IDE
id: Module1-SeleniumPython
categories: beginner
tags: python  
environments: Web
status: Published
feedback link: https://forms.gle/CGu4QchgBxxWnNJK8
analytics account: UA-6735579-1

<!-- ------------------------ -->
# Module 1- Introduction to Selenium with Java

<!-- ------------------------ -->
## 1.01 What You'll Learn
Duration: 0:03:00

*   Learn to install and use Selenium WebDriver in conjunction with Java tools (IntelliJ and Maven) to write tests.  
*   Use----- and ---to compile and run tests and manage dependencies on your machine
*   Use the Selenium WebDriver in conjunction with a --------- test runner to write tests
*   Understand what the Selenium WebDriver is and the basics of how it is used to automate testing
*   Understand the role a test runner, such as ------, plays in creating tests
*   Differentiate between the Selenium language bindings and the web drivers for different browsers
*   Know how ------ manages and updates packages and tools used for Selenium testing in --------
*   Explain how Selenium bindings, web drivers, and ---------- work together to create tests and test suites
*   Understand that good tests are atomic: They have tests grouped by functionality and are named descriptively. Good tests also use test runners, and are maintained in version control systems.

<!-- ------------------------ -->
## 1.02 What is Selenium?
Duration: 0:05:00

Selenium is an open source tool used for automating testing of web applications. Without  automated testing, each time a web application was updated, a human would have to go onto the website and try various combinations of clicks, interactions, and submissions. If you  automate your testing with a tool like Selenium, when an update is made, you can write and run tests with the “robot” that is Selenium, which performs programmed sets of interactions for you to
test new features and functionality before an updated version of a web app is released into the wild.

<img src="assets/1.02A.png" alt="Automation bot" width="200"/>


Selenium is a robotic testing tool, not a framework. It expresses no judgement, nor does it help you test. In order to orchestrate how tests are run, and report on the things that Selenium does, you need a framework, which will be covered later on.


### The Seven Basic Steps of Selenium Tests

There are seven basic elements of a Selenium test script, which apply to any test case and any application under test (AUT):



1. Create a WebDriver instance.
2. Navigate to a Web page.
3. Locate an HTML element on the Web page.
4. Perform an action on the HTML element.
5. Anticipate the browser response to the action.
6. Run tests and record test results using a test framework.
7. Conclude the test.

The Selenium Grid allows you to run parallel tests on multiple combinations of machines (Mac, Windows, or Unix-based systems) using multiple web browsers (versions of Chrome, Edge, Firefox, or Safari). These different machines can exist virtually on a server in a cloud environment, or as a network of real devices. JSON is used to communicate test requirements and route those requirements to different nodes, which have different environments to test on.

<img src="assets/1.02B.png" alt="Selenium Computer" width="350"/>

The [Sauce Labs](https://saucelabs.com/?utm_source=referral&utm_medium=LMS&utm_campaign=link) platform enables you to use a Selenium Grid at scale to run thousands of tests at once, on our suite of different test environments in the cloud. Sauce also has a robust dashboard for easy viewing of test outcomes and increased velocity of debugging tests. This dashboard includes tracking of errors and even a visual record of what occurred in different environments.

As your test suite grows, your test runs will take longer to complete. To speed them up, you will want to run them in parallel, which is where the benefit of having your own servers or using a cloud provider comes in -- that, and the ability to have numerous browser and operating system combinations to run your tests on.

This course focuses on the fourth version of Selenium, which supports communication via the W3C WebDriver protocol. All modern web browsers are also built in compliance with this protocol (a set of rules on how to communicate), which means Selenium 4 can be used with any programming language and any browser and OS combination in your environment. With the W3C protocol, you can discover and manipulate elements on a page in order to test their functionality.

Selenium is really good at a specific set of things. If you know what those are and stick to them, then you can easily write reliable, scalable, and maintainable tests that you and your team can trust.


### What Selenium Is and Is Not Good At

Selenium is built to automate browsers and human interaction with them. This can include things like navigating to pages, clicking on elements, typing text into input fields, etc.

It is less ideal for checking lower-level functionality, like HTTP status codes or HTTP headers. While you can use Selenium this way, it requires third-party tools.

<!-- ------------------------ -->
## 1.03 What is the W3C WebDriver Protocol?
Duration: 0:05:00

The WebDriver protocol consists of rules for communication between the client on the local end, -- which uses languages and libraries like Java, Ruby, Python, or JavaScript -- and a web browser. The local end (your computer) communicates with the remote end node on the server side. The web driver defines how the remote end can behave, and the method for how the remote end receives information. As an example, the Selenium WebDriver provides instructions to the browser on how to click or type into elements on a page. This is then communicated to specific browser drivers, such as Chromedriver (for the Chrome browser) or Geckodriver (for the Firefox browser) and the commands are carried out.

The code that Selenium provides to you as a developer (as libraries) is called a Selenium language binding. It binds together the Python code you write for actions and tests with things that WebDriver can understand.



<img src="assets/1.03A.png" alt="PSelenium Diagram" width="550"/>`

Python uses the driver method to interact with Selenium. When you use it, you instantiate a web driver, and then you have access to methods allowed by the web driver. Selenium uses the driver to automate and manipulate elements in the browser. Some examples of drivers include Chromedriver for the Chrome browser or Geckodriver for the Firefox browser.

The Pytest dependencies are a set of Python library/package that allow you to communicate with Selenium and run unit tests. It also helps orchestrate test execution. The [Python language binding](https://selenium-python.readthedocs.io/installation.html#downloading-python-bindings-for-selenium), which are Selenium WebDriver methods written in python, allow you to leverage the features specified by the W3C WebDriver protocol.


#### Quiz
![Embed URL](Share URL)

<!-- ------------------------ -->
## 1.04 Test Frameworks and Dependencies
Duration: 0:05:00

A test framework includes code libraries as well as rules and conventions for setting up tests. When it comes to testing frameworks, there are three basic pieces that go into creating a framework.

**Test Runner –** A library or tool that takes the tests you write, along with settings you have configured in your tests, and executes them. It orchestrates the execution of the tests, controlling what is run when and in what order. For this course, we will be using the Pytest test runner.

**Robot –** Performs the actual actions on the browser. In this case, Selenium is the robot used to perform the interactions. It is a protocol that tells the browser to locate elements and perform actions on a page.

**Reporting –** This is the mechanism for providing information to the humans who have run the automated tests. It provides a summary of test activities and results.

A good framework combines best practices for structuring and writing code, along with structure for how data is handled and stored, enabling you to write test code that is reusable and will have less need for maintenance.

Frameworks provide both tools and guidelines for creating and designing test suites. They can include coding standards, test-data handling methods, Page Object Models, processes for storing test results, and information on how to access external resources.

So far, you’ve learned a bit about how the code on your end communicates with the W3C WebDriver using Selenium. This isn’t the whole picture, however. There are other tools that enable you to write and implement test code. Usually, runners and frameworks are used alongside the base programming language that help give structure, create commands, manage and organize files, store data, and more. In this course, we will use Python and methods with -------- and Selenium to write our tests.

<img src="assets/1.04C.png" alt="Framework Diagram" width="650"/>

Above is an example of how you might connect a framework with the Selenium grid that then executes tests with the Selenium WebDriver.

In the exercises that follow, you will learn more about the different tools you use when you write code, and the roles that the different elements play in your test suites and the execution of tests will become more clear.


<!-- ------------------------ -->
## 1.05  Installing Dependencies
Duration: 0:15:00


You will need several dependencies dependencies in order for our test to run as planned, and now we will get set up to do that. In this module, you’re going to install a program called Homebrew, which will help install Python version 3 and manage it's dependencies.

If you are installing Python on a Widows of Linux machine, you can follow the instructions found on [_The Hitchikers Guide to Python_](https://docs.python-guide.org/starting/installation/)

#### NOTE

In order to install Jenkins on the Mac, Jenkins has opted to enlist the help of another tool called [Homebrew](https://brew.sh/). Homebrew makes it easier to install and keep other files and software up to date on your machine. To install brew, copy and paste the command on there into your terminal:


```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```


If you type `brew info` in your terminal, and you have homebrew installed correctly, you should see something like this:

<img src="assets/5.06C.png" alt="Pencil" width="350"/>

The Homebrew installation should also update the PATH variable when you install it, so other programs on your computer know how to access `brew` commands

--

###Installing Python

Once you have [Homebrew](https://brew.sh/) installed, it's easy to install python by typing this command into your terminal:

```
$ brew install python
```

The nice thing about Homebrew is that it will automatically download the several version of Python. Once it's installed, you should see messages letting you know where it installed your versions of Python:

<img src="assets/1.05O.png" alt="Selenium Computer" width="550"/>

Homebrew may have installed several versions of Python. You can check which version you are using by typing

 ```
 python --version
 ```


Since Homebrew installed several versions, you will want to specify which, you will want to type in the command:
```
python3
```
This will take you into the interface that will allow you to interact and write programs on the Python interpreter.

<img src="assets/1.05P.png" alt="Selenium Computer" width="450"/>

You can exit the python interpreter by typing _control + D_  or:
```
quit()
```

Next, create a project folder and install pip so that later on we can install other dependencies. The dependencies include WebDrivers that communicate with different browsers, as well as----, a --- framework/ library that ----


### Install PyCharm
In order to write and edit your test code, you will need an  **I**ntegrated **D**evelopment **E**nvironments (IDE) to edit code and manage your project. [Pycharm](https://www.jetbrains.com/pycharm/) is a good option for this. Download and install the community version for this project.

<img src="assets/1.05Q.png" alt="PSelenium Diagram" width="550"/>`


### Install Pip?

Download and install

// ...

### Install Pytest Libraries

Download and install

// ...

### Install VirtualEnv

Download and install

// ...

### Dependency Overview
**Python–** A -----, ------ typed language // ... before you are able to run Selenium tests locally or in the cloud. .

**Pip Package Manager –** Manages other required dependencies, as well as builds any application code you create. // ...

**Pytest Test Runner –** An open-source, J// ...

**IDE & Debugger –** This tool helps with the writing, debugging, and organization of your code. This includes features that make your code easier to read and organize. // ..


#### Cheat Sheet

![Embed URL](share URL)


### Use GitHub Repository (Optional)

If you are familiar with using GitHub to write your code, you can also fork/ branch this repository here for the first set of code:

**[Module 1 Project Folder](EDIT)**

<!-- ------------------------ -->
## 1.06 Editing Code and XXX Summary
Duration: 0:10:00

Take a look at the first test code we will be creating in the next module. There are several things at play:

```
import pytest
import os
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.service import Service as FirefoxService


class TestLogin():

    @pytest.fixture
    def driver(self, request):
        _geckodriver = os.path.join(os.getcwd(), 'vendor', 'geckodriver')
        if os.path.isfile(_geckodriver):
            _service = FirefoxService(executable_path=_geckodriver)
            driver_ = webdriver.Firefox(service=_service)
        else:
            driver_ = webdriver.Firefox()

        def quit():
            driver_.quit()

        request.addfinalizer(quit)
        return driver_

    def test_valid_credentials(self, driver):
        driver.get("http://the-internet.herokuapp.com/login")
        driver.find_element(By.ID, "username").send_keys("tomsmith")
        driver.find_element(By.ID, "password").send_keys(
            "SuperSecretPassword!")
        driver.find_element(By.CSS_SELECTOR, "button").click()
        assert(
            driver.find_element(
                By.CSS_SELECTOR,
                ".flash.success").is_displayed())
        #assert(driver.find_element(By.CSS_SELECTOR, ".flash.successasdf").is_displayed())
```



### Python Methods


**Example method** – Description



### Pytest Methods

**[example method ](link) –** Description


### Selenium Elements

**driver variable with driver.get(), driver.findElement, etc –** The driver variable instantiates a WebDriver session/ object, and then you can use Python commands with that driver.

**[Driver.quit](https://artoftesting.com/difference-between-driver-close-and-driver-quit-command-in-selenium-webdriver) –** An important Selenium command to use within **quit()** annotations, this closes any browser windows that may be open and terminates the WebDriver session.

You can see an example of the project we will begin to be setting up in the next module [here.](https://github.com/walkerlj0/Selenium_Course_Example_Code/tree/master/java/Mod1/SeleniumJava%20copy/src/test/java/companyname)

<!-- ------------------------ -->

## 1.07 Module 1 Quiz
Duration: 0:03:00


![Embed URL](Share URL)
