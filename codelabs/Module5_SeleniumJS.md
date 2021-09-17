summary: Module 5 Using Sauce Connect proxy, Sauce OnDemand, and CI
id: Module5-SeleniumJS
categories: advanced
tags: javascript
environments: Web
status: Published
feedback link: https://forms.gle/CGu4QchgBxxWnNJK8
analytics account: UA-86110990-1
author:Lindsay Walker

<!-- ------------------------ -->
# Module 5 – Sauce Connect, Sauce OnDemand, and Continuous Integration


<!-- ------------------------ -->
## 5.01 What You’ll Learn
Duration: 0:02:00

This module, based off chapters 13-18 of _The Selenium Guidebook:_ _JavaScript Edition_ by Dave Haeffner, brings you to the next level with learning how to plan a test strategy, run tests in parallel, use the Sauce Connect Proxy, and add your tests to a pipeline with the Jenkins Continuous Integration (CI) server. Learn about best practices to avoid creating a test suite that is brittle when used in parallel or with tools that make for more automation (but more latency) such as the Sauce Labs platform or CI servers. Use tags to categorize tests for use in different situations and gain the tools and skills to truly automate your testing practices.


### Skills & Knowledge


*   Set up and run tests using the Sauce Connect Proxy tunnel with terminal commands and the Sauce Labs application interface. Set up environment variables and access them with the Sauce Connect software to run tests using the tunnel
*   Use npm to install the mocha-parallel-tests package and use that package to run tests on the Sauce Platform in parallel
*   Add tags to tests and test classes and use the grep function in the terminal to run different groups of tests for different purposes
*   Set up the the Jenkins CI server on your local machine and learn how to use the user interface to set up projects that run your tests, as well as configure the Jenkins CI server
*   Add your credentials to your instance of a Jenkins CI server using Sauce OnDemand and run a test that you can view in both the Jenkins console and the Sauce Labs application
*   Modify the configuration of a local instance on a Jenkins CI server, add plugins, and update a test to take desired capabilities from a config.js file updated for your Jenkins tests.
*   Run tests using Sauce Connect Proxy through your Jenkins server, passing information back and forth from Sauce Labs to Jenkins using Sauce Connect.
*   Develop a strategy for planning how many and which types of tests your team and company will develop to best build automated testing suites for your product
*   Connect how the tests that you have written in the UI using Selenium can be integrated into a comprehensive testing strategies that tests on multiple layers
*   Establish autonomous test suites that are set up to run without relying on the execution of any other tests
*   Understand how static variables can impede parallel test function since only one unmodifiable instance can exist at a time
*   Describe a use case for the Sauce Connect Proxy and how it can allow access to secure applications while maintaining data privacy
*   Understand how a CI server like Jenkins can be used to automate the software development pipeline and automate the testing to run specific tests with certain triggers
*   Understand how to configure a local instance of Jenkins to work with a test suite and the Sauce OnDemand plugin

<!-- ------------------------ -->
## 5.02 Testing Strategy
Duration: 0:12:00


Testing pyramids are a way of framing the strategy for what kind of tests you are going to create as a part of your testing suite(s) and expressing the amount of types of tests your team or company is going to create. At the bottom of the pyramid is the easiest, most plentiful, and typically cheapest type of tests to create. At the top of the pyramid are the types of tests that are more labor- and cost-intensive tests that make up a smaller portion of your suite(s). Learn more about the [details of a test pyramid here](https://medium.com/@Colin_But/define-testing-strategy-using-the-testing-pyramid-1dabee37e823).


<img src="assets/5.02A.png" alt="Pyramids" width="650"/>`

There are many versions of the pyramid created by experts in the testing field, and your own team or company can decide on which strategy for developing tests works for you. It is, however, important to understand how the plan is set up and the considerations for types of tests, the best layer to test on, and how to plan so your test suite is accurately fulfilling the purposes that stakeholders expect.


#### Video

Watch [5.02 Testing Strategy](https://www.youtube.com/watch?v=dPe9hxsbfLg), Excerpts from “Pyramids Are Ancient” By Richard Bradshaw to learn about how to develop a testing strategy for your business, as well as tip on how to plan and identify the layers of your application you should run your tests on.

<video id="dPe9hxsbfLg)"></video>


### Testing Layers

An important thing to understand is that there is so much more to test than just the UI layer that you have been testing with Selenium. In this model, the different places the app interacts with layers of the platform is demonstrated.

<img src="assets/5.02B.png" alt="Testing Layers" width="750"/>`


Here you can see the following interactions occur:



1. User loads the login page.
2. React (A JS framework) builds the elements on the login page.
3. User performs login on interface.
4. A “login” API request is sent by the JavaScript layer.
5. The API processes and directs the login request.
6. The credentials of the login request are checked by the application.
7. A response is sent to the API from the app (e.g., “allow login” or “failed login”).
8. The login is sent to the JavaScript layer to process the page after login.
9. The post-login page is rendered.
10. The user sees the post-login page on the interface.

When choosing a testing strategy, you need to consider two important things.



1. What do I actually want to test? Do you want to test that the page after the login loads, or do you want to check that the login credentials are sent correctly?
2. Which is the best layer to test this on?

Selenium is intended to be mainly a UI testing tool, however, as you are developing your overall strategy, and building a repertoire of new tools and frameworks, you can use Selenium alongside other tools that you may know. Depending on which tools and frameworks you know, and which you know you will have time to learn, you should let your skill set guide your choices for a good testing strategy that allows you to automate on the best layer of an application.


### TRIMS

Learning the tools to test things like API calls means that you can write shorter, more concise tests where you don’t have to do a ton of clicks on a screen to get the place or feature you want to test. Using TRIMS means you can make your tests more **T**argeted, **R**eliable, **I**nformative, **M**aintainable, and **S**peedy.

As an example, a bad test would tell you had a failed login. Why did that test fail? Did the developer change something in the UI like a “success” message for login? Did it take too long to load the post-login page? Were incorrect credentials sent to the API?

A good test would tell you exactly what failed and how it failed. Some examples include tests such as “login success message not present” or “failed to return a 200 code from API.” Understanding the tools that you have at your disposal and what skills you can develop next will help you work towards creating a well-planned, efficient testing strategy.

<!-- ------------------------ -->
## 5.03 Using Sauce Connect Proxy
Duration: 0:15:00


[Sauce Connect Proxy](https://docs.saucelabs.com/secure-connections/sauce-connect) is software that enables you to establish a secure connection between applications hosted on an internal server and the Sauce Labs virtual machines (such as Jenkins) or real devices that are used for testing. It also allows you to create a secure connection for uploading tests, application, and source code.

#### Video
[Set Up Sauce Connect Proxy](https://youtu.be/cpBcGeZ_wQU)

<video id="cpBcGeZ_wQU"></video>


In many cases, testers need to run their tests on internal sites. These can be dev/staging versions of their production site or actual internal sites only employees use. In either case, these sites are not available out in the open internet for sauce to access. The best, most secure option is to create a connection with Sauce Connect Proxy. Sauce Connect Proxy uses a proprietary [TLS protocol](https://www.cloudflare.com/learning/ssl/transport-layer-security-tls/) to encrypt traffic between Sauce Labs and your network and servers.


### Download Sauce Connect Proxy

The first step is to download The Sauce Connect Proxy software -- available on the **[Sauce Connect Proxy](https://docs.saucelabs.com/secure-connections/sauce-connect/)** page in the Sauce Labs Cookbook -- and extract the contents of the **.zip** or **.gz** download package. You can also get the software on the [Sauce Labs](https://accounts.saucelabs.com/am/XUI/#login/?utm_source=referral&utm_medium=LMS&utm_campaign=link) platform under **Tunnels.**


<img src="assets/5.03A.png" alt="Tunnels Software" width="750"/>


Once you’ve extracted the contents, take the Sauce Connect Proxy folder and move it into another directory. In this example, I moved mine into the **Documents** folder.

<img src="assets/5.03B.png" alt="Tunnel Software Directory" width="450"/>

### Set Up Your Tunnel

Go to the **Tunnels** tab in the Sauce Labs app.


<img src="assets/5.03C.png" alt="Tunnels Menu" width="250"/>


Navigate to the folder using the terminal where you saved the Sauce Connect download (this one is in **Documents/sc-4.6.2-osx**). Next, type and run the command below. Make sure to fill in your credentials (username after the `-u` command and access key after` -k`) and add your tunnel name (aka tunnel identifier) after the `-i `command.


```
bin/ sc -u <SAUCE_USERNAME> -k <SAUCE_ACCESS_KEY> -i <SAUCE_TUNNEL>
```
###Note
Negative
: **Create Environment Variables for Sauce Labs –** The first thing you should do when creating a test is set up environment variables on your local machine in the (.zshrc or .bash profile) for your `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY`. It is important to save your Sauce username and access key as environment variables, instead of coding them into your test, so that when you share your tests or upload them to Github, your private access keys aren’t shared.   It will also make transitioning to a continuous integration pipeline easier, since they will use the same environment variables.  Watch [this video](https://youtu.be/3K1Eu0eTha8) to learn how to set up environment variables with your Sauce Labs credentials on a Mac, or view the [instructions for Windows](https://docs.google.com/document/d/1Cb27j6hgau5JHmAxGHPihd3V4Og3autPCei82_m1Ae8/edit?usp=sharing).

You can copy the command that you will find at the bottom of the **Tunnels** page, and paste this into your terminal as well, instead of typing what is above. Once you paste, append the command line with `-i <Sauce tunnel name>`:. In this example, I’ve called mine `linds-proxy-tunnel.`

<img src="assets/5.03D.png" alt="Command to run tunnel" width="750"/>

Your command should look like this:

<img src="assets/5.03E.png" alt="Terminal command to run tunnel" width="750"/>

After `-u` you will see your username and after` -k `you will have your access key, and `-i  `prepend the name you made up for your tunnel. Learn more about the other commands you can use to configure your tunnel at [Sauce Connect Proxy CLI Reference](https://docs.saucelabs.com/dev/cli/sauce-connect-proxy). Hit enter and you should see your tunnel up and running.

<img src="assets/5.03F.png" alt="Terminal running tunnel" width="500"/>


<img src="assets/5.03G.png" alt="Tunnel running on Sauce Labs" width="750"/>



### Set Sauce Connect Tunnel Capability

Since you are using environment variables in our `config.js` file, for your `SAUCE_USERNAME `and` SAUCE_ACCESS_KEY, `we will set up an environment variable for your` SAUCE_TUNNEL` as well. This variable will store the tunnel identifier, so after you start up a Sauce Connect tunnel, you can run your tests using it. First, lets add the code to use it:\.

First, we will need to add in a new set of capabilities called `sauceW3C` for when you want to run your tests through a tunnel on Sauce. Update `config.js` like so:


```
// filename: lib/config.js
module.exports = {
  baseUrl: process.env.BASE_URL || 'http://the-internet.herokuapp.com',
  browser: process.env.BROWSER || 'firefox',
  host: process.env.HOST || "saucelabs"
  sauce: {
    username: process.env.SAUCE_USERNAME,
    accessKey: process.env.SAUCE_ACCESS_KEY,
    browserName: process.env.BROWSER_NAME || 'internet explorer',
    browserVersion: process.env.BROWSER_VERSION || "11.0",
    platformName: process.env.PLATFORM_NAME || "Windows 7",
  },
  sauceW3C: {
    "browserName": process.env.BROWSER_NAME || 'chrome',
    "browserVersion": process.env.BROWSER_VERSION || "75.0",
    "platformName": process.env.PLATFORM_NAME || "Windows 7",
    "sauce:options": {
      "username": process.env.SAUCE_USERNAME,
      "accessKey": process.env.SAUCE_ACCESS_KEY,
      "tunnelIdentifier": process.env.SAUCE_TUNNEL,
    }
  },

```


Next, you will need to update by adding in another` case` in the `_configure {} `method in `DriverFactory.js`:


```
// filename: lib/DriverFactory.js
//...
configure() {
    let builder = new Builder()
    switch (this.config.host) {
      case 'saucelabs':
        const url = 'http://ondemand.saucelabs.com:80/wd/hub'
        builder.usingServer(url)
        builder.withCapabilities(this.config.sauce)
        break
      case 'localhost':
        // process.env.PATH +=
        //   path.delimiter + path.join(__dirname, '..', 'vendor')
        builder.forBrowser(this.config.browser)
        break
      case 'sauce-W3C':
        const url2 = 'http://ondemand.saucelabs.com:80/wd/hub'
        builder.usingServer(url2)
        builder.withCapabilities(this.config.sauceW3C)
        break
    }
    return builder
  }

```
You will also want to update the `quit` method so it will print out the test name and result when you use the `W3C` case:

```
// filename: lib/DriverFactory.js
//...
  async quit(testPassed) {
    if (this.config.host === 'saucelabs' || 'sauce-W3C') {
  //...
```

Last but not least, update `config.js` so that the `host` variable is set to `sauce-W3C` so it matches the third case in `DriverFactory.js:`


```
// filename: lib/config.js
module.exports = {
  baseUrl: process.env.BASE_URL || 'http://the-internet.herokuapp.com',
  browser: process.env.BROWSER || 'firefox',
  host: process.env.HOST || "sauce-W3C"

```



### Run Tests Using Sauce Connect Proxy

Once your tunnel is up and running, (you should see the message Sauce Connect is up in terminal)  and you have updated your `config.js` and `DriverFactory.js` files, you can run your tests in Sauce Labs using Sauce Connect Proxy. First, update your `.bash_profile ` (or `.zshrc`) with an environment variable (`export SAUCE_TUNNEL=`) and name it with the` tunnel id ` you used to start the tunnel with.

<img src="assets/5.03H.png" alt="Tunnel Tests running on Sauce Labs" width="750"/>

You will want to restart your terminal and run `source ~/.bash_profile` so your machine looks for the new `SAUCE_TUNNEL` variable.

Now you can run `npm test` in terminal and see your tests run both in Jenkins and on Sauce Labs with a tunnel. Note that because it is running through a proxy, you will no longer be able to see the name and status of the tests. You can see the completed code [here](https://github.com/walkerlj0/Selenium_Course_Example_Code/tree/master/javascript/Mod5/5.03).

<img src="assets/5.03I.png" alt="Bash Profile" width="750"/>


#### Final Code


<img src="assets/5.03J.png" alt="Sauce W3C environment variable" width="750"/>

<img src="assets/5.03K.png" alt="Sauce W3C case" width="750"/>

<img src="assets/5.03R.png" alt="Sauce W3C case in quit method" width="650"/>



<!-- ------------------------ -->
## 5.04  Running Parallel Tests
Duration: 0:12:00


Your tests still take a good deal of time to run since they're executing in series (i.e., one after another). As our suite grows, test latency will grow with it, if you continue to run tests in series the time it takes to run your test suite can grow exponentially.

In this lesson you will be learning how to set up Sauce Labs to run tests in parallel. This means that you can run two or more tests, using two or more instances of DriverFactory at the same time.  Previously what you were doing was running` LoginTest.js `first, then running `DynamicLoadingTest.js `once it was done.

Parallelization is one of the main advantages to using a platform like Sauce Labs, however you also must be careful when designing a test suite to make sure the tests can be run in parallel, and in any order, or else account for and create code that does run certain tests in order. Luckily, our test suite has been well set up to run in parallel.


### Autonomous Tests

Autonomous tests are the type of tests that are not dependent on other tests to be run. Consider the following set of tests:



1. **LoginTest–** This test is performed first to allow you to login to the platform.
2. **ShoppingTest–** This test is performed second, where the user chooses and adds an item to the test.
3. **CheckoutTest–** This test is performed third, where the user accesses the checkout screen where they can pay and order the item from their shopping cart.

Clearly these tests aren’t autonomous when you are doing User Interface (UI) tests; you cannot perform CheckoutTest until you have logged into the platform and chosen an item for the shopping cart. There are ways, however, to set up your test so you can “jump right in” with a filled shopping cart without having to wait for other tests to run by using API calls and other tricks that can help you write a suite of autonomous tests.


### Avoid the Static Keyword

A static variable or function means that a given variable or function can only exist as one instance for the life of a program, and that the value of that variable cannot change. That can be a major problem if you reuse the variable or function several times for different tests.

As an example, if this `builder` variable was static, each time a test tried to use it to build the environment for that test, only the first test would run successfully.

<img src="assets/5.04A.png" alt="Sauce W3C case" width="550"/>


This variable grabs information from config.js to  see which browser, OS, and environment variables to use. If it was a static variable, the `builder `variable would only be created for the first test, and parallel tests would fail because only one version of the `builder `variable can exist at a time.


### Install ‘mocha-parallel-tests’

Before version 8 of Mocha, you could only run tests in a serial using the Mocha test runner. Now, you can run multiple tests in parallel using [mocha-parallel-tests](https://www.npmjs.com/package/mocha-parallel-tests). This can either be done across multiple processes (max of the` (number of CPUs you have) -1`). In this case, you are going to run parallel tests across multiple virtual machines on [Sauce Labs](https://accounts.saucelabs.com/am/XUI/#login/?utm_source=referral&utm_medium=LMS&utm_campaign=link).


#### NOTE

It is recommended that you do not use the Sauce Connect tunnel and change the variable in `config.js` to:


```
//Filename: lib/config.js
// ...
 host: process.env.HOST || 'saucelabs',
```




--

First you need to install [mocha-parallel-tests](https://www.npmjs.com/package/mocha-parallel-tests). So let's update our package.json file and use `npm install` to install it.

Open your `package.json` file and add in  `the following `at the bottom of the file (add in a comma after `"mocha:{}" `) :


```
//Filename: package.json
// ...
 "mocha": {
    "timeout": 30000
  },
  "devDependencies": {
    "mocha": "^8.1.0",
    "mocha-parallel-tests": "^2.3.0"
  }
}
```


Above, under scripts, update `"scripts`” from mocha to `mocha --parallel`:


```
"scripts": {
    "test": "mocha --parallel test/*Test.js"
  },

```



#### NOTE

Visit the [mocha-parallel-tests ](https://www.npmjs.com/package/mocha-parallel-tests)page and look on the left at what the latest version is, and include that version above.

<img src="assets/5.04B.png" alt="Sauce W3C case" width="550"/>

--

Run `npm install` in your project folder to install the` mocha-parallel-tests `test runner as one of the files in node_modules. (If your parallel test don’t work correctly, try deleting node-modules and re-installing them with `npm install`.)

This will allow you to run several tests at the same time. This test runner executes each of your test files in a separate process while maintaining the output structure of mocha.


### Run Parallel Tests

Before you get started, head to [Sauce Labs](https://accounts.saucelabs.com/am/XUI/#login/?utm_source=referral&utm_medium=LMS&utm_campaign=link) and look under **Account > User settings** and check out how many tests you (and your team) can run at once.

<img src="assets/5.04C.png" alt="Sauce W3C case" width="650"/>

Once you are sure that you are able to run tests in parallel (you should have less tests than your concurrency limit), you can run your tests. If you send more jobs than your concurrency limit, Sauce Labs will queue the excess and run them as the initial batch of jobs finish.

Run` npm test` and visit [Sauce Labs](https://accounts.saucelabs.com/am/XUI/#login/?utm_source=referral&utm_medium=LMS&utm_campaign=link) while your tests are running. You should see more than one test running at the same time, and notice that your test suite as a whole runs more quickly! You can see the completed code [here](https://github.com/walkerlj0/Selenium_Course_Example_Code/tree/master/javascript/Mod5/5.04).

<img src="assets/5.04D.png" alt="Sauce W3C case" width="750"/>


#### Final Code

<img src="assets/5.04E.png" alt="Sauce W3C case" width="750"/>


### Quiz
![https://docs.google.com/forms/d/e/1FAIpQLSeSYrddrxOs9YwuN_-2vcdGel6PmJiPhN6PReaCXKwzb_G40w/viewform?embedded=true](https://docs.google.com/forms/d/e/1FAIpQLSeSYrddrxOs9YwuN_-2vcdGel6PmJiPhN6PReaCXKwzb_G40w/viewform?usp=sf_link)

<!-- ------------------------ -->
## 5.05 Grouping Tests
Duration: 0:08:00
In order to get the most out of your tests, you'll want a way to break them up into relevant, targeted chunks. Running tests in smaller groupings (along with parallel execution) will help keep test run times to a minimum and help you quickly sift through test results and target your tests. It also allows you to run different groups of tests for different purposes.

With [Mocha's --grep feature](https://github.com/mochajs/mocha/wiki/Tagging) we're able to easily achieve test grouping (a.k.a. tags).

Let's step through how to set this up.


### Adding Tags to Tests

What you are doing with` grep `is looking through the test files and executing them if a match is found for a given string pattern. To make this work, we'll add some tags to our test names with a special character to make it stand out so it's easier to search for.

Some simple examples of this are `@shallow `and `@deep. @shallow` tests are a type of _smoke _or _sanity _tests. These should pass before you can consider running other tests which aren't as mission critical and may take longer to run, which is what our `@deep` tests will do.

Let's update our tests to apply these tags. First, go to `LoginTest.js` and inside the `it() `function where the test names are (that show up when you get test results), add in the` @shallow` and `@deep `tags to each of the functions:


```
// filename: test/LoginTest.js
// ...
  it('with valid credentials @shallow', async function() {
// ...
  it('with invalid credentials @deep', async function() {
// ...

```


Now, in `DynamicLoadingTest.js`, add in the `@deep` tag. In this test, rather than updating the individual test names, you’ll add a tag to the entire class  `Dynamic Loading`.


```
// filename: test/DynamicLoadingTest.js
// ...
describe('Dynamic Loading @deep', function() {
// ...
```



### Running Tests with Tags

With both Mocha and mocha-parallel-tests you can specify which marker to launch at runtime. This is done by adding `--grep` to the `npm test `command you run in terminal.


```
npm test -- --grep @shallow
```


`grep` (**g**lobal regular **e**xpression **p**rint) is a  terminal command that searches the plain text of any file. In this command, you had to include two lines of dashes since you are running the mocha command from the package.json file. The extra `-- `allows your computer to add the `--grep @shallow` command in before the `mocha` command when you run `npm test`.

Run your tests (they should run in parallel on Sauce Labs. You should get an output of only one successful test. If you change the command to `npm test -- --grep @deep`, you should get three successful tests. You can see the completed code [here.](https://github.com/walkerlj0/Selenium_Course_Example_Code/tree/master/javascript/Mod5/5.05)


<img src="assets/5.05A.png" alt="Deep Tests" width="750"/>

#### Final Code


<img src="assets/5.05B.png" alt="Login Test Tags" width="550"/>


<img src="assets/5.05C.png" alt="Dynamice Loading Test Tags" width="550"/>



<!-- ------------------------ -->
## 5.06 Setting Up Jenkins
Duration: 0:15:00


You'll probably get a lot of mileage out of your test suite in its current form if you just run things from your computer, look at the results, and tell people when there are issues. But that only helps you solve part of the problem.

The real goal in test automation is to find issues reliably, quickly, and automatically. We've built things to be reliable and quick. Now you need to make them run on their own, and ideally, in sync with the development workflow you are a part of.

To do that you need to use a _Continuous Integration server_.


### CI Servers

A _Continuous Integration_ server (CI server) makes it possible for several developers to merge their code into a central repository, then automate the process of building, testing, and deploying the set of code with the entire team’s contributions. As an example, In GitHub, this would be a certain branch of a shared repository. A CI server can be set up so that it takes updated code through the process several times a month, week, or even a day.

The great thing about doing this is that code from several teams or developers can be brought together into the same working project quickly and tested, instead of developers trying to test their code in isolation (and not know what could break when all contributors’ code is built together).  

<img src="assets/5.06A.png" alt="Shared Repo" width="750"/>

The best thing about using Jenkins is that it has a lot of features that make your tests easier. You can set it up to automatically pull in your code from a GitHub repository, as well as trigger projects that contain your test code to run a given suite of tests automatically when certain things occur, such as when a pull request is made, or set up test suites to run on a schedule.

<img src="assets/5.06B.png" alt="Build Triggers" width="650"/>


In the next couple lessons, you will dip your toes into adding and running your tests with the Jenkins server so you are ready to work with the DevOps team on the key _test phase_ of the CI pipeline. Typically, most tests that are run on a CI Server are unit (and potentially integration) tests, and you can very easily add in our Selenium tests as well. Learn more about Continuous Integration servers [ here.](https://www.thoughtworks.com/continuous-integration)


### Set Up Jenkins CI Server

[Jenkins](https://jenkins.io/) is a fully functional, widely adopted, free, and open-source CI server. It’s a great candidate for us to try. You will use [Homebrew](https://brew.sh/) to install it on your computer.


#### NOTE

In order to install Jenkins on the Mac, Jenkins has opted to enlist the help of another tool called [Homebrew](https://brew.sh/). Homebrew makes it easier to install and keep other files and software up to date on your machine. To install brew, [go to the website](https://brew.sh/) to view instructions. Copy and paste the command on there into your terminal:


```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```


If you type in `brew info` in your terminal, and you have homebrew installed correctly, you should see something like this:

<img src="assets/5.06C.png" alt="Running Brew" width="450"/>

--

Let's start by setting up Jenkins on your local machine and using the test code from your computer as well. Keep in mind that this isn’t the proper way to go about this — it's merely beneficial for this example. To do it right, the Jenkins server (i.e., master node) would live on a machine of its own, or in a Virtual Machine (VM) like a Docker container.

These instructions give you the step-by-step for how to set up on MacOS, however there are instructions for other operating systems, as well as the option for setup using a Docker container with other operating systems [here](https://www.jenkins.io/doc/book/installing/).


### Install Jenkins

A simple way to get started is to use [Homebrew ](https://brew.sh/)to install Jenkins on MacOS. Once Homebrew is installed on your computer, use the instructions on the [Jenkins download page](https://jenkins.io/download/). If you are using Homebrew on MacOS, all you need to do is run this command in the terminal:


```
sudo brew install jenkins
```


You will have to enter your password, and Jenkins should install on your machine.

Jenkins was built on Java, and in order for your program to work, you will also need to install either [Java version 8](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html) or Java version 11. If you try to install Jenkins and get this error, install Java 8 or 11 and retry installing Jenkins.

<img src="assets/5.06D.png" alt="Wrong Java Error" width="550"/>

#### NOTE

Negative
: To Install JDK 8, visit the [Java 8 download page](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html) from Oracle. You may have to create an account. <img src="assets/5.06E.png" alt="JDK 8" width="650"/> Download the file, then open and follow the instructions to install Java. <img src="assets/5.06F.png" alt="Install JDK 8" width="650"/>


Negative
: If you haven’t installed Java before, you’ll need to update your `.bash_profle `(or your `.zshrc` file on MacOS Catalina) with the system variables and PATH: <img src="assets/5.06G.png" alt="Java Path Variable" width="650"/>




### Run Jenkins

Once you have all dependencies (Java 8 or 11 and Homebrew) with Jenkins downloaded, launch it from the terminal with the command:


```
brew services start jenkins
```


You should see the following message:

<img src="assets/5.06H.png" alt="Start Jenkins" width="550"/>

Next, set up Jenkins by visiting `localhost:8080` by typing it into your chrome browser:


<img src="assets/5.06I.png" alt="Unlock Jenkins" width="750"/>


Now use your terminal to navigate to the folder above, written in red. Once you are in the folder `/Users/username/.jenkins/secrets, `you can run the command in the terminal:


```
 less initialAdminPassword
```

<img src="assets/5.06J.png" alt="Unlock Jenkins with Admin Password" width="550"/>


You will see the contents of the file with the password in the terminal. Copy and paste the password into the Jenkins dashboard in your browser. You will be directed to create a username and password (write these down!) and enter your information. Make sure to include your email address for account recovery information. You should now have a dashboard that looks like this:

<img src="assets/5.06K.png" alt="Welcome to Jenkins" width="750"/>

### Stopping Jenkins

To stop the Jenkins process running on your machine with Homebrew, simply type:


```
brew services stop jenkins
```


<!-------->
## 5.07 Create a Jenkins Project
Duration: 0:05:00

Typically when you set up tests, you would add your test code as a part of the pipeline to put code into production, typically on a staging server. Three typical jobs that are in almost every pipeline are build, test, and deploy.

Jenkins is one of many tools you can use to automate your builds, however it also means that one has to log in to the Jenkins dashboard to debug tests. Using Sauce Labs makes it a lot easier to see, share, and debug tests results that are a part of a release pipeline.


#### Video

Watch [Run Jenkins with Homebrew ](https://youtu.be/XjFnhbM56zs)for a walk through of how to run and check the configuration of your test job and Node environment in Jenkins.

<video id="XjFnhbM56zs"></video>

### Create a Test Project

Now that Jenkins is loaded in the browser, let's create a **Project** and configure it to run our shallow tests against Chrome on Windows 10.

1. Click **New Item** from the Dashboard menu.

<img src="assets/5.06L.png" alt="New Project" width="350"/>

2. Give it a name based on what it’s testing (**Shallow Tests Chrome 50 Windows 10**).
3. Select the **Freestyle** project option.

<img src="assets/5.06M.png" alt="New Project" width="550"/>

4. Click **OK**.

This will load a configuration screen for the Jenkins project.


### Jenkins Project Configuration

Once you have clicked on a project and chosen **Configure** from the menu, go to the Advanced Project Options section, select the **Advanced** button:

<img src="assets/5.06N.png" alt="Advanced Configurations" width="650"/>

1. Choose the checkbox for **Use custom workspace. **This is where your test files are stored on your computer. When setting up a real CI pipeline, you would direct this to the local copy of your GitHub repo.
2. Provide the full path to your test code.
3. Leave the **Display Name** field blank.

<img src="assets/5.06O.png" alt="Test Code Path" width="650"/>

4. Scroll down to the **Build** section and select **Add build step.**
5. Select **Execute shell.**.
6. Add the commands below to run a test on only the tests tagged with `@shallow`, using Chrome 50 and Windows 10 for your environment:

```
BROWSER=chrome BROWSER_VERSION=50 PLATFORM='Windows 10' npm test -- --grep=@shallow
```

* Click **Save** to add the changes and return to the test main page.

To return to the dashboard and see the list of projects, you can click **Back to Dashboard** in the menu. You can also click **Configure** to change or update the changes you just made:

<img src="assets/5.06P.png" alt="Back to Dashboard or Configure" width="750"/>


### Add NodeJS as a Global Tool

Since you are using `npm` to manage dependencies, including Mocha and the `npm test `command, you need to set up **NodeJS as a Global Tool** so Jenkins can use it in the same way your machine does to run tests.

First, return to the dashboard (You can do this by clicking the **Jenkins** icon in the menu at any time). Next, click on **Manage Jenkins > Global Tool Configuration**.

<img src="assets/5.06Q.png" alt="Manage Jenkins Global Tools Configuration" width="750"/>

NOTE
If you see a warning at the top of your Global Tool Configuration dashboard, you can go to the plugin manager, choose the **Available** tab, and install necessary updates.<img src="assets/5.06R.png" alt="Global Tools Config" width="750"/> For those updates to take effect, you need to type in terminal: `Brew services restart jenkins`




Scroll down to the bottom where you will see the NodeJS section. Open it up and choose **Add NodeJS**. Give this one a name, and pick your version of NodeJS. We also need to make sure it installs the most recent version of mocha. You will do this by typing `mocha@x.x.x`. This should be the same as the version in your `package.json` file. Hit **Save**.

<img src="assets/5.06R.png" alt="Add NodeJS" width="750"/>

Last but not least you need to use this NodeJS installation in our test. Return to your dashboard and click on the name of your test. Click the **Configure** tab and scroll down to find the **Build Environment** section.

<img src="assets/5.06S.png" alt="Build Environment" width="750"/>

Check the box that says **Provide Node & npm bin/folder to PATH.**



*   From the first dropdown, choose the version of node you just set up with the Mocha dependency.
*   From the third dropdown, choose **Local to the workspace.**

This way the tests you run can also use `npm` to run the tests the way you have been on your local machine, and it will cache temporary files in the Jenkins environment. If you want to cache on your machine, you will have to change the system settings on your computer. Click **Save**. You are now ready to run your tests.


### Run Your Tests Using Jenkins

To run your test, simply click **Build Now** in the menu, then click on the sphere next to the test number on the list to jump to the console output. Since Mocha has a built-in test reporter in the console, you can view the test results there.

<img src="assets/5.06T.png" alt="Test Result Output" width="750"/>

#### NOTE

Negative
: Ideally, your test code would live in a version control system such as Git. The first thing you will need to do is get the plugin under **Manage Jenkins > Manage Plugins.** You can configure this under **Manage Jenkins > Global Tools Configuration**. To use a Git project, create a new project from the Jenkins homepage, then under the configuration of that project, choose Git for Source Code Management.  <img src="assets/5.06U.png" alt="NodeJS Configuration" width="750"/>  Learn more about setting up GitHub source control in [this tutorial.](http://www.mastertheboss.com/cool-stuff/jenkins/jenkins-source-code-management-with-git)



<!-- ------------------------ -->
## 5.08 Jenkins and Sauce OnDemand
Duration: 0:15:00

You haven’t run a test yet that has successfully passed in Sauce Labs. In this lesson, you’ll learn to connect your Jenkins server to your Sauce Labs account using the Sauce OnDemand Jenkins plugin, as well as run a test with Jenkins using Sauce Connect Proxy.

### Test Reporters

You have been running your tests and observing the output in the console, however, in many cases this may not be the best method to see the status of your test. When you want to share the output of the test with others—human or software—a formatted .xml doc can be much more useful. This doc lets you obtain a longer form of printout for test results and has the potential for use with an analytics tool. Some options include:



*   [JUnit Results Reporter](https://www.jenkins.io/doc/pipeline/steps/junit/#:~:text=Jenkins%20understands%20the%20JUnit%20test,tracking%20failures%2C%20and%20so%20on.) plugin
*   [JUnit Reporter for Mocha](https://www.npmjs.com/package/mocha-junit-reporter)

Note that there are plugins/additional configurations you’ll have to modify in the **Manage Jenkins** section to get these working as well. In these examples, you will not be using a reporter;instead you’ll use the reporter that is built in with mocha on the console/ terminal.


### Force a Failed Test

We want to run a test with Jenkins that has a failed test so that you can see an example of the output provided to a reporter.

Add a new test method to `LoginTest.js `after the other two `it() `methods that will fail every time you run it because it has incorrect credentials and a false assertion. Notice how it is tagged as a part of the `@shallow` suite.


```
// filename: test/LoginTest.js
// ...
  it('forced failure @shallow', async function() {
    await login.authenticate('tomsmith', 'bad password')
    assert.equal(false, true)
  })
```


Unlike the other `it()` methods, which await a return value from some element on the page (or else display an error), this has the` equal()` method, which simply checks that the two parameters are equal (spoiler alert, false != true). Instead of just getting an error with the invalid login, you get a notification of a failed assertion.

One more thing we'll want to do is update how we're outputting the Sauce Labs job URL when there's a test failure. Right now we're outputting it to the console, but throwing and `Error() `can be easier to detect for some reporters.


```
// filename: lib/DriverFactory.js
// ...
  async quit(testPassed) {
    if (this.config.host === 'saucelabs') {
      this.driver.executeScript('sauce:job-name=' + this.testName)
      this.driver.executeScript('sauce:job-result=' + testPassed)
    }
    await this.driver.quit()
    if (this.config.host === 'saucelabs' && !testPassed) {
      throw new Error(
        'See a video of the run at https://saucelabs.com/tests/' +
          this.sessionId
      )
    }
  }
}

module.exports = DriverFactory

```


Now, `quit() `will throw an exception with the Sauce Labs job URL when there's a test failure. This error also happens after  `driver.quit()` to ensure that the job in Sauce Labs terminates correctly.

Now let's run our Jenkins project by clicking **Build Now** from the left-hand side of the screen. Now when you look at the console for the build, there’s a nice clear error message.

<img src="assets/5.07B.png" alt="Error Message" width="650"/>

### Set Up Sauce Labs OnDemand

The full reference for configuring Sauce OnDemand and support can be found [here.](https://docs.saucelabs.com/ci/jenkins)

The first thing you will need to do is install the Git Jenkins plugin, then go to **Manage Jenkins >  Manage Plugins**. Search for **Sauce** under the **Available** tab.

<img src="assets/5.07C.png" alt="Sauce On Demand Plugin" width="650"/>

Install and restart Jenkins in the terminal with Homebrew (which is quicker) by typing:


```
brew services restart jenkins
```


Once the plugin is installed, you can check under the **Installed** tab on the same page.


### Configure Credentials with Sauce OnDemand

You can set up your Sauce Labs credentials to be passed into tests as variables running on Jenkins in the same way that you set up your tests to get the credentials stored on your personal machine as variables. The nice thing about this is that you can control which Jenkins users have access to these credentials, and allow or disallow certain people that use the same Jenkins instance to use these credentials.

Go to **Security > Manage Jenkins > Manage Credentials**.

Depending on how Jenkins is set up, other instances of Jenkins may have different domains. In this example, you can set things up in the **global** domain:

<img src="assets/5.07D.png" alt="Sauce On Demand Plugin" width="450"/>


Click on the link for **adding some credentials**:

<img src="assets/5.07E.png" alt="Global Credentials" width="450"/>

You can look on [Sauce Labs](https://accounts.saucelabs.com/am/XUI/#login/?utm_source=referral&utm_medium=LMS&utm_campaign=link) under **Account > User Settings** to find your username and profile or look at the variables you set up in your .bash_profile. From the **Kind** dropdown, choose **Sauce Labs**, then enter your username and Sauce Access Key. Give it a logical tag and name as well.

<img src="assets/5.07F.png" alt="Add Username and Sauce Access Key" width="650"/>


Once you click **Save**, you should see your new access key listed under **Global credentials**.

<img src="assets/5.07G.png" alt="See Global Credentials" width="650"/>

Now you can go to your project and set up your credentials. Go back to your Jenkins dashboard, choose the project you created, and then **Configure** in the menu. Scroll down, and under **Build Environment**, click the **Sauce Labs Options** checkbox. Make sure the credentials you just set up are listed here.

You can configure a failed build to trigger things like e-mail messages or send information directly to Jira tickets. You can find out more[ here](https://plugins.jenkins.io/email-ext/). All you need to do to get started is go to **Manage Jenkins > Manage Plugins** and search for an email plugin in available plugins


### Run Tests with Sauce OnDemand

You can now run a test with [Sauce OnDemand](https://docs.saucelabs.com/ci/jenkins) with just a couple of tweaks to the code. We’re going to create a setup in our `config.js` file. The only difference from the sauceW3C configuration will be the lack of a `tunnelIdentifier`.

Open `config.js`. Below the `sauceW3C `object, create a` jenkins `object (don’t forget the comma after the previous object). This will include a build name that you can view on the Sauce Labs **Builds** dashboard:


```
// filename: lib/config.js
//...
  sauceW3C: {
    "browserName": process.env.BROWSER_NAME || 'chrome',
    "browserVersion": process.env.BROWSER_VERSION || "75.0",
    "platformName": process.env.PLATFORM_NAME || "Windows 7",
    "sauce:options": {
      "username": process.env.SAUCE_USERNAME,
      "accessKey": process.env.SAUCE_ACCESS_KEY,
      "tunnelIdentifier": process.env.SAUCE_TUNNEL,
    }
  },
  jenkins: {
    "browserName": process.env.BROWSER_NAME || 'chrome',
    "browserVersion": process.env.BROWSER_VERSION || "75.0",
    "platformName": process.env.PLATFORM_NAME || "Windows 10",
    "sauce:options": {
      "username": process.env.SAUCE_USERNAME,
      "accessKey": process.env.SAUCE_ACCESS_KEY,
      "build": process.env.SAUCE_BUILD_NAME,
    }
  }

}

```


In this example, you are setting up our test with Chrome 75 and you need to use the new capabilities that are compliant with the latest W3C capabilities. First, change the name of the project from the Jenkins **Dashboard**:

<img src="assets/5.07H.png" alt="Rename Test" width="650"/>

Name it **Shallow Test Chrome 75 Windows 10**.

Next, you are going to delete the old `PLATFORM` and `BROWSER` variables. With newer versions of W3C compliant browsers, these [variables have new names](https://docs.saucelabs.com/dev/test-configuration-options), and you will add them in `config.js`. Delete the old variables from the **Configure > Build** page so it simply says `npm test -- --grep @shallow`:


<img src="assets/5.07I.png" alt="Execute Shell Command" width="750"/>


Next, in `DriverFactory.js`, create a new case called `'ondemand'` and build an instance using the new `jenkins `object:


```
_configure() {
    let builder = new Builder()
    switch (this.config.host) {
      case 'saucelabs':
        const url = 'http://ondemand.saucelabs.com/wd/hub'
        builder.usingServer(url)
        builder.withCapabilities(this.config.sauce)
        break
      case 'localhost':
        // process.env.PATH +=
        //   path.delimiter + path.join(__dirname, '..', 'vendor')
        builder.forBrowser(this.config.browser)
        break
      case 'sauce-W3C':
        const url2 = 'http://ondemand.saucelabs.com/wd/hub'
        builder.usingServer(url2)
        builder.withCapabilities(this.config.sauceW3C)
        break
      case 'ondemand':
        const url3 = " https://ondemand.us-west-1.saucelabs.com/wd/hub"
        builder.usingServer(url3)
        builder.withCapabilities(this.config.jenkins)
    }
    return builder
  }

```


Also in `DriverFactoryJS`, you’ll need to change the `quit() `function that passed the test name and passing status so that it also works with the` ondemand `case.


```
async quit(testPassed) {
    if (this.config.host === 'saucelabs' || 'ondemand') {
      this.driver.executeScript('sauce:job-name=' + this.testName)
      this.driver.executeScript('sauce:job-result=' + testPassed)
    await this.driver.quit()
    if (this.config.host === ('saucelabs' || 'ondemand') && !testPassed)
      throw new Error(
        'See a video of the run at https://saucelabs.com/tests/' +
          this.sessionId
        )
    }

```


Finally, go back into config.js and change the `HOST` environment variable that the case in `DriverFactory.js `checks for to `'ondemand'`:


```
// filename: lib/config.js
module.exports = {
  baseUrl: process.env.BASE_URL || 'http://the-internet.herokuapp.com',
  browser: process.env.BROWSER || 'firefox',
  host: process.env.HOST || 'ondemand',

```



### Running a Test with Sauce OnDemand and Sauce Connect

This part is simple: to get a Sauce Connect Proxy tunnel up and running, all you’ll need to do is change one Jenkins configuration in your job. All of your tests will be routed through that tunnel.

Go to **Shallow Test Chrome 75 Windows 10 > Configure**. Under **Build Environment,** check the box that says **Sauce Labs Support**,then check the **Enable Sauce Connect** checkbox, and choose the global credentials you set up (or add new ones).


<img src="assets/5.07J.png" alt="Enable Sauce Connect" width="750">

You don’t have to do anything to set the variable, or install any software or run commands to get the tunnel running—Sauce OnDemand creates a tunnel and runs the tests in it for you.

Now you can run your tests. If you would like, you can also comment out the failing test from LoginTest.js, then watch as your tests are built successfully on [Sauce Labs](https://accounts.saucelabs.com/am/XUI/#login/?utm_source=referral&utm_medium=LMS&utm_campaign=link) and your Jenkins interface:


```
// filename: test/LoginTest.js
//...
// it('forced failure @shallow', async function() {
    //   await login.authenticate('tomsmith', 'bad password')
    //   assert.equal(false, true)
    // })
})
```


You can see the complete source code for this module [here](https://github.com/walkerlj0/Selenium_Course_Example_Code/tree/master/javascript/Mod5/5.07).

Congratulations!  You now have the skills to create a basic test suite, plan your test strategy using testing best practices, and even work with your team to add testing to your software development pipeline. There is a lot more to explore both with tests and with Jenkins, so after the quiz, take a look at Module 5.09 for more resources, and visit the [Sauce Labs Documentation](https://docs.saucelabs.com/) for more information.


#### Final Code

<img src="assets/5.07K.png" alt="On Demand Jenkins Host" width="750"/>

<img src="assets/5.07L.png" alt="Comment out failed test" width="750"/>

<img src="assets/5.07M.png" alt="On Demand case" width="750"/>



<!-- ------------------------ -->
## 5.09 Quiz
Duration: 0:05:00

![https://docs.google.com/forms/d/e/1FAIpQLSeRXdkLZTwivvNYpudqfKkcNMCojGuobA507hUL7os0veu-9w/viewform?embedded=true](https://docs.google.com/forms/d/e/1FAIpQLSeRXdkLZTwivvNYpudqfKkcNMCojGuobA507hUL7os0veu-9w/viewform?usp=sf_link)

<!-- ------------------------ -->
## 5.10 Resources and Community
Duration: 0:03:00


Here is a list breaking down a majority of the Selenium resources available, along with information about what these resources provide.


### Documentation & Tips


#### [Selenium HQ](http://bit.ly/se-info-1)

This is the official Selenium project documentation site. It doesn’t always have the most up-to-date version, but there is loads of helpful information here.


#### [The Selenium Wiki](http://bit.ly/se-info-29)

This is where all the good stuff is — mainly, documentation about the various language bindings and browser drivers. If you're not already familiar with it, take a look.


#### [Elemental Selenium Archives](http://bit.ly/se-info-3)

These are tips that will help you expand your Selenium skills to write tests for nearly anything you can imagine using Selenium for. There are over 70 different Selenium problems and solutions covered. They're in Ruby, but the code has been open-sourced with a fair number of them being ported into other programming languages. You can find the code for them [here](https://github.com/tourdedave/elemental-selenium-tips).


#### [Sauce Labs Documentation](https://docs.saucelabs.com/)

This is the official Sauce Labs documentation. You can find updated and maintained tips and tricks regarding web/mobile automated testing.


### Blogs


#### [The Official Selenium blog](http://bit.ly/se-info-4)

This is where Selenium announces project updates and the occasional round-ups of testing news in the testing automation space. Definitely worth a look.


#### [Other Selenium WebDriver blogs](http://bit.ly/se-info-5)

At some point, someone rounded up a large list of blogs from Selenium practitioners and committers. It's a pretty good list.


#### [The Sauce Labs blog](https://saucelabs.com/blog)

This is where you can find product announcements and great articles regarding Sauce Labs and the automated testing space.


### Other Books


#### _[Selenium Testing Tools Cookbook](http://bit.ly/se-info-18)_

This book outlines some great ways to leverage Selenium, using a pragmatic approach.


#### [Selenium Design Patterns and Best Practices](http://bit.ly/se-info-21)

This book covers useful tactics and strategies for successful test automation with Selenium. While the book covers Ruby, the author has also ported the [examples into Java](https://github.com/dimacus/SeleniumBestPracticesBook).


### Meetups


#### [Selenium Meetups on Meetup.com](http://bit.ly/se-info-13)

A list of in-person Selenium Meetups is available on Meetup.com. If you're near a major city, odds are there's one waiting for you.


### Conferences


#### [Selenium Conference](http://seleniumconf.com/)

This is the official conference of the Selenium project, where practitioners and committers gather and share their latest testing knowledge and experience. . Selenium holds two conferences each year, convening in cities all over the world.


#### [Selenium Camp](http://seleniumcamp.com/)

This is an annual Selenium conference in Eastern Europe (in Kiev, Ukraine) organized by [XP Injection](http://xpinjection.com/).


#### [Other Testing Conferences](http://testingconferences.org/)

A helpful website that lists all of the testing conferences out there.


#### [SauceCon](https://saucecon.com/)

This is the Sauce Labs annual conference, where they invite speakers from the industry to impart their knowledge and techniques on the testing community. This conference also offers the opportunity to talk to Sauce Labs employees and other platform users.


### Videos

#### [An Introduction to JavaScript Testing at Scale](https://www.youtube.com/playlist?list=PL67l1VPxOnT4kdoFKN1M4yTOvCwgD7BDY)

A 10-part video workshop that takes a look at the JavaScript framework landscape for automated functional testing. You'll learn the principles of browser automation and how to pick the right JavaScript framework for your project.


#### [Selenium Conference Talks](http://bit.ly/se-info-15)

All of the talks from The Selenium Conference are recorded and made freely available online.


#### [Selenium Meetup Talks](http://bit.ly/se-info-16)

Some of the Selenium Meetup Groups record their talks and publish them afterwards.


### Mailing Lists


#### [Selenium Developers List](https://groups.google.com/forum/#!forum/selenium-developers)

This is where developers discuss changes to the Selenium project, both technically and administratively.



*   [Selenium Users Google Group](https://groups.google.com/forum/?fromgroups#!forum/selenium-users)
*   [Selenium LinkedIn Users Group](https://www.linkedin.com/groups/961927/)

There can be a lot of content in these groups, But you can easily search and find answers to many questions.


### Forums



*   [Stack Overflow](http://stackoverflow.com/questions/tagged/selenium)
*   [Quora](http://www.quora.com/Selenium-testing-framework)
*   [Reddit](http://reddit.com/r/selenium)

These are the usual developer-centric forums where you can search for answers to questions you're facing, that can help you find answers that a traditional search engine may not.


### Issues



*   [Selenium Issue Tracker](https://github.com/seleniumhq/selenium/issues)

If you're running into a specific and repeatable issue that just doesn't make sense, you may have found a bug in Selenium. You'll want to check the Selenium Issue Tracker to see if it has already been reported. If not, then create a new issue -- assuming you're able to provide a short and self-contained example that reproduces the problem.

This is known as [SSCCE](http://sscce.org/) (a Short, Self Contained, Correct (Compilable), Example). For a tongue-in-cheek take on the topic, see [this post](http://jimevansmusic.blogspot.com/2012/12/not-providing-html-page-is-bogus.html).


### Chatting With the Selenium Community

The Selenium Chat Channel is arguably the best way to connect with the Selenium community and get questions answered. This is where committers and practitioners hang out day in and day out.

You can connect either through Slack or IRC. Details on how to connect are available [here](http://elementalselenium.com/tips/20-irc-chat).

Once connected, feel free to say hello and introduce yourself. But more importantly, ask your question. If it looks like no one is chatting, ask it anyway. Someone will see it and eventually respond. The benefit of being a fly on the wall is that you gain insight into other problems people face, possible solutions, and the current state of the Selenium project and its various pieces.
