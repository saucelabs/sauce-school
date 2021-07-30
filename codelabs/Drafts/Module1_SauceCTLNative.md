 summary: Module 1 of the Native App  Tests on Sauce course will introduce you how to set up an XCUI test with saucectl on the Sauce Labs Cloud virtual machines, and use saucectl to run your automated tests creating artifacts to share and analyze.
id: Module1-saucectl-native
categories: beginner
environments: Web
status: Published
feedback link: https://forms.gle/CGu4QchgBxxWnNJK8
analytics account: UA-86110990-1
tags: saucectl-native
authors: Lindsay Walker
<!-- ------------------------ -->
# Module 1 – Intro to saucectl with XCUITest

<!-- ------------------------ -->
## 1.01 What You'll Learn
Duration: 0:01:00

### Skills & Knowledge

* How saucectl with the Sauce Labs platform is different than other automated test solutions that you can use with Sauce Labs

* Learn about the components of saucectl with the Sauce Labs platform, including the command line tool, the Sauce Labs Real Device Cloud, and the XCUITest iOS tests

* Set up the necessary components to run XCUITest and saucectl with the Sauce Labs platform on your computer

* Understand the configuration files for XCUITest on saucectl with the Sauce Labs platform and how to modify them

* Learn to run a XCUITest app test on Sauce Labs Real Device Cloud




#### Clone the Project
If you would like to follow along with the course, using the exact sample code, you can use the [example tests here](https://github.com/saucelabs-training/demo-xcuitest).

<!-- ------------------------ -->
## 1.02 What Is saucectl?
Duration: 0:03:00

Sauce Labs has developed a set of tools in conjunction with a command line tool called `saucectl` to enable test developers to get setup quickly to scale up their testing to more browsers and devices using the Sauce Labs Cloud, and to be able to do this with a wider range of testing frameworks than ever before.

This is a testing solution for developers that simplifies user setup, speeds up test execution time, unifies test results, and supports new open source frameworks like Playwright, XCUITest, TestCafe, Espresso, and XCUI for running end-to-end web & mobile tests.

<img src="assets/TRT1.02A.png" alt="saucectl tools" width="600"/>

#### Scalable Testing, Quickly
Installing with `saucectl` allows you to quickly and easily install all dependencies and start testing
* Test with JavaScript frameworks such as XCUITest, PlayWright, and TestCafe
* Configure your test suite and credentials quickly
* Access Sauce Labs VMs with thousands of browser/ operating system combinations


### What can saucectl and the Sauce Labs Platform Do?

`saucectl` stands for Sauce Control, the command line interface for running non-Selenium tests such a XCUITest, TestCafe, Espresso, and XCUITest. The toolkit includes `saucectl` commands that allow you to interface with Sauce Labs, as well as the tools necessary to record the output from tests on a Sauce Labs Virtual Machine, making it easy to interpret, share and analyze those test results.


### Why Use saucectl

Historically, most end-to-end testing consisted of various components such as Selenium, mocha-chai (test assertion frameworks), and other tools that are necessary to run, automate, and debug tests. Users would create a remote session to test a web application. With [Sauce Labs saucectl and XCUITest](https://docs.saucelabs.com/testrunner-toolkit/configuration/XCUITest), you have an all-in-one test framework, runner, and assertion platform that doesn’t require the client to send commands and wait for a response in order to run.

In other words, saucectl with XCUITest provides a powerful [clear-box testing](https://en.wikipedia.org/wiki/White-box_testing) tool that doesn’t require downloading and installing several tools and libraries:

<img src="assets/TRT1.02B.png" alt="Testrunner Toolkit setup" width="600"/>

Using XCUITest alongside Sauce Labs also allow you to:



*   Run your tests using a containerized solution, to simplify setting up your environment and dependencies
*   Review, share, and evaluate your test assets, such as logs, test results, and test videos
*   Use our Insights feature to perform deeper analysis of test outcomes

<img src="assets/TRT1.02C.png" alt="Testrunner Toolkit Sauce Labs dashboard" width="600"/>

### Two Ways to Run Tests

#### Sauce Mode
By default, when you use saucectl, it works by passing your entire test suite, including dependencies and configurations to Sauce Labs Cloud of Virtual Machines, where your tests will be executed as per your configurations. Use the command `saucectl run` or update `mode: sauce` in `config.yml`, to run your tests on Sauce Labs VMs.

#### Docker Mode
With saucectl, you can also install Docker and run a containerized version of your test environment, then pass the results to the Sauce Labs Dashboard , by setting `mode: docker` in `config.yml`.`


<!-- ------------------------ -->
## 1.03 Setup saucectl to Run Tests on Sauce Labs
Duration: 0:07:00

In this module, you will see how you can set up   saucectl on Sauce Labs VMs _or_ use saucectl along with Docker on your MacOS Computer. The basic steps include:

* Setup an [example XCUITest project](https://github.com/saucelabs/saucectl-XCUITest-example)
* Install saucectl with `npm i -g saucectl`
* Set your Sauce username and access key with `saucectl configure`
* Update `.sauce/config.yml` with test suite information

_More detailed instructions are below_

<!-- Docker is software that allows you to create an isolated environment on your computer that is separate from your operating system, creating a lightweight environment built off a Linux kernel to do specific tasks. Learn more from the [Docker documentation](https://docs.docker.com/get-started/overview/). Each environment coupled with the software and setting packaged together to use in that environment is called an _image_. -->


<!-- In our case, we will use Docker engine, which is made up of:

*   A long-running server that runs a daemon process in the background. This process listens for REST API commands and allows you to run environments, including an isolated filesystem, separate from the operating system on your computer.
*   A Command Line Interface (CLI) which you use to interact with and give commands to Docker
*   A REST API you can use to send commands to the background process. -->


#### Video

[XCUITest and saucectl Setup](https://www.youtube.com/watch?v=XCzmAbXyK-A&list=PL67l1VPxOnT7YTdCbpvSpJ8FF-sNxm8r-&index=1)

<video id="XCzmAbXyK-A"></video>


Negative
: Note that the config file in the video may be out of date, and the [correct configuration can be found in the documentation.](https://docs.staging.saucelabs.net/testrunner-toolkit/configuration/XCUITest). This video also doesn't include the `.sauceignore` file, where you can list the files & directories you don't want uploaded when you run your tests in _sauce mode_.

### Download and Install saucectl

Next you need to download and install the saucectl Command Line Interface (CLI) that you will use to run Sauce Labs. This is a part of the Sauce Labs set of tools that allows you to set a configuration location & update the file in your local directory.  There are several options (https://docs.saucelabs.com/testrunner-toolkit/installation) for installing it, and in this tutorial we will use npm, which means you need to have [NodeJS installed on your machine](https://nodejs.org/en/download/).

It also allows you to run commands to run tests locally or remotely on the Sauce Labs platform.

First, anywhere on your machine install the saucectl tool globally, using this command `npm` to install the saucectl package:

`npm i -g saucectl`.


### XCUITest Test Code

You want to fork, clone or download a .zip copy of the [example project](https://docs.saucelabs.com/testrunner-toolkit/installation), then place your tests in the **XCUITest** directory that contains your tests.

You have the following options to test out XCUITest on Sauce:
* Use an existing project you have already (copy-paste in `/XCUITest` & `XCUITest.json`)
* Follow [lessons 1.07 - 1.08](https://training.saucelabs.com/codelabs/Module1-Testrunner/index.html?index=..%2F..testrunner#5) to write simple tests
* Clone or download [this example XCUITest test suite](https://github.com/saucelabs/saucectl)

Once you have a project directory containing XCUITest tests on your machine, navigate to the directory where the `XCUITest.json ` and `/XCUITest` directory are, you can update the configuration file to run your tests.

<!-- #### Note
Negative
: You will want to make sure your XCUITest tests are (and the project structure) works with the same version that you have listed in the `.sauce/config.yml` file. If you are using `saucectl` in an existing project, make sure that in the setup workflow, you do not overwrite any of the existing files. <img src="assets/TRT1.03D.png" alt="Project directory setup" width="800"/> -->

### Set Sauce Username and Access Key

You can access your Sauce Username and Access Key on the [Sauce Labs App](https://app.saucelabs.com/user-settings) and go to **Account> User Settings** . There are three ways you can configure your credentials with saucectl:

* Set them as environment variables (saucectl will detect them)
* Enter them when you run `saucectl init`
* Use `saucectl configure`

To manually configure your usename and access key, simply type the command:

```
saucectl configure
```

This command prompts you to manually enter your credentials, and will generate a `credentials.yml` file in a `.sauce directory` where you installed saucectl initially (in your home folder).

To find `credentials.yml`, search for a file called `credentials.yml` in a hidden directory (Cntrl + Shit + .) called `.sauce`.

<img src="assets/SCTL1.03A.png" alt="the .sauce directory with credentials.yml" width="500"/>

Visit [accounts.saucelabs.com](https://accounts.saucelabs.com/am/XUI/#login/?utm_source=referral&utm_medium=LMS&utm_campaign=link). You can create a free trial account if you haven’t been assigned one.

<img src="assets/4.05A.png" alt="Sauce Labs Account" width="450"/>

Watch [this video](https://www.youtube.com/watch?v=3K1Eu0eTha8&t=12s) to see how to set up your Sauce username and access key as environment variables on your machine, or use [the instructions here to set them up on Windows](https://docs.google.com/document/d/1Cb27j6hgau5JHmAxGHPihd3V4Og3autPCei82_m1Ae8/edit?usp=sharing).




### Initialize saucectl

Now that you have your XCUITest test files set up in a directory, and your Sauce Labs username and access key setup globally with saucectl, you can initialize the test runner in order to run your XCUITest tests on the Sauce Labs Cloud

From the folder where you should have placed `XCUITest.json`, and `/XCUITest` directory, and any other test files or assets, run the terminal command:

```
saucectl init
```

You will see a workflow appear allowing you to choose the data center you run tests in, the framework and version, configuration file, browser, platform, and options to download test assets.

Once you make all the choices in your workflow, you should be able to see the hidden `/.sauce` directory and the `.sauceignore` file in your project:

<img src="assets/SCTL1.03B.png" alt="saucectl init workflow" width="700"/>



### The Configuration File

Once you have your project setup, open the project directory, take a look at the project files inside.

<img src="assets/TRT1.03C.png" alt="Project directory setup" width="500"/>

You will see a `XCUITest` folder containing the `/integrations` directory where all test files are stored, as well as a `XCUITest.json` file where you can set options such as reporters, the base URL that tests will be run against, and [more](https://docs.XCUITest.io/guides/references/configuration.html#Global).

Another part of the package that was installed when you ran `saucectl` new is the /`.sauce` directory. The /`.sauce` directory has a `.sauceignore` file where you can designate the files and directories you don't want uploaded to Sauce Labs, and the `config.yml` file in which you will see something like the following ([Config Docs](https://docs.saucelabs.com/testrunner-toolkit/configuration#basic-configuration)):

**[The Config File](https://github.com/saucelabs/saucectl/blob/main/.sauce/XCUITest.yml)**

```
apiVersion: v1alpha
kind: XCUITest
sauce:
  region: us-west-1
  concurrency: 10
  metadata:
    tags:
      - e2e
    build: "$BUILD_ID"
rootDir: tests/e2e/
docker:
  fileTransfer: mount
XCUITest:
  version: 7.3.0
  configFile: "XCUITest.json"
suites:
  - name: "saucy test in docker"
    mode: docker
    browser: "chrome"
    config:
      env:
        hello: world
      testFiles: [ "**/*.*" ]

  - name: "saucy test in sauce"
    browser: "chrome"
    platformName: "Windows 10"
    config:
      env:
        hello: world
      testFiles: [ "**/*.*" ]

artifacts:
  download:
    when: always
    match:
      - console.log
    directory: ./artifacts/
```

Take a look at the top of the config file. There are several important elements here that can be modified.
*   The `apiVersion` is the [saucectl API](https://github.com/saucelabs/saucectl) Version
*   The `kind` is the tesing framework
* The `defaults` allow you to configure various settings. You can set the mode (_Docker_ or _Sauce_) in `mode` at this level, or as a field that is a part of the `suites` below.
* If you are using _Docker mode_, you can `mount` or `copy` files
*   The `XCUITest` information tells your XCUITest tests where to look for the test configuration file, and which version of XCUITest you are running. Other file locations are relative to where `config.json` is place. See the docs for a [list of supported versions](https://docs.saucelabs.com/testrunner-toolkit)
* An optional setting is where the `rootDir` or root directory is placed
* The `sauce` information. Here is where you will put information that will be passed to sauce and can be used for debugging tests, such as the name, `build` number from your CI tool, and number of machines you would like to run concurrently
*   The `suites` information includes the name, browser, and the configuration for your test suites such as what types of file names to look for to run as tests, and other metadata that is passed to the Sauce Labs dashboard for running tests and displaying results.
  * The `config: testFiles:` specify the directory relative to `XCUITest.json` or `rootDir` and the file names of your tests
*   The `artifact` information includes what assets (such as images and videos of your tests) are fetched and stored locally. The options for downloading assets include `always`, `never`, `pass`, `fail`.

#### .sauceignore

The `sauceignore` file that is essential to use to speed up your test runs. By default, everything that is in your project folder will be uploaded to Sauce Labs when you run your tests, however, it's important to include things like asset directories or other files that aren't necessary for a test run to this file.

**Example :**

```
XCUITest/videos/
XCUITest/results/
XCUITest/screenshots/
node_modules/
.git/
.github/
.DS_Store
__assets__
**/__assets__
```

### Install Docker (Optional)

If you would like to run your tests in a Docker container and pass the results to the Sauce Labs platform, visit the [docker download website ](https://docs.docker.com/get-docker/)and install the newest version of Docker on your machine.

Start up Docker to ensure it’s running properly on your machine, and follow the instructions in the next module to modify  `config.yml` to run tests in _Docker Mode_.

You can check to see if it’s running with the command `docker info`, and see which version you have with the command `docker -v`.  

See the next module for more about running tests with the command `saucectl run`

<!-- ------------------------ -->
## 1.04 Run Your XCUITest Test on Sauce
Duration: 0:03:00

Running a XCUITest test on sauce is easy. If you follow the configuration steps using `saucectl init` in the last module, all you need to do is run the command:

```
saucectl run
```

Specifying which tests you want to run in which environment can be configured in the `suites:` tab in the `.sauce/config.yml` file. This lesson will cover:

* Setting different directories
* Specifying certain test files
* Running in different web browsers
* Executing test in _Docker Mode_ or _Sauce Mode_
* View test results on the Sauce Labs App

Running tests using XCUITest and saucectl allows you to run as many combinations of tests and environments as you would like

#### Video

[Running Tests with Sauce and XCUITest](https://www.youtube.com/watch?v=ofa9Y1u6RAc&list=PL67l1VPxOnT7YTdCbpvSpJ8FF-sNxm8r-&index=3)

<video id="ofa9Y1u6RAc"></video>

#### Example XCUITest Code
For example XCUITest tests, you can:
* Use the [simplified XCUITest test code ](https://github.com/walkerlj0/saucectl-course-example-code/tree/main/Mod1)you can learn more about in 1.07-1.08 that goes along with the `suites` examples
* Use the [Sauce Labs XCUITest Test Code](https://github.com/saucelabs/saucectl-XCUITest-example)
* Use your own XCUITest tests


### Add and Run New Tests
As you grow your testing suite, you may want to add new tests to run, and you may want to have the option to run different specific groups of tests, and run on different browsers. The `config: testFiles:` objects under the `suites:` tag allow you to specify which tests are run, when:

If you used `saucectl init` the object test will automatically run any tests in the `XCUITest/integration` directory with a [supported XCUITest test file type](https://docs.XCUITest.io/guides/core-concepts/writing-and-organizing-tests#Test-files) and look something like this:

```
suites:
- name: XCUITest - windows 10 - chrome
  browser: chrome
  platformName: windows 10
  config:
    testFiles:
    - '**/*.*'
  mode: sauce
rootDir: .
```

Lets create two directories within your `XCUITest/integration` directory so that you can learn to specify both directories and files. create a `/smoke` and a `/regression` directory, and paste copies of your tests in each.

<img src="assets/SCTL1.04C.png" alt="saucectl init workflow" width="700"/>

You will want to modify any code that refers to the project structure that may change. In this example, you will want to update the imports in `login.spec.js` with an additional `../` to account for the re-organization:

<img src="assets/SCTL1.04E.png" alt="saucectl init workflow" width="700"/>

Now you can modify your `config.yml` to run one test from each directory. You will need to create two `-name:` objects under the `suites:`;

```
suites:
- name: XCUITest - windows 10 - chrome smoke
  browser: chrome
  platformName: windows 10
  config:
    testFiles:
    - 'smoke/*.spec.*'
  mode: sauce
- name: XCUITest - windows 10 - chrome regression
  browser: chrome
  platformName: windows 10
  config:
    testFiles:
      ['regression/*.test.*']
```

#### Note

Negative
: There are also two alternatives for listing the `testFiles;` in your suite, either in brackets `[]` [like the example here](https://docs.saucelabs.com/testrunner-toolkit/configuration/XCUITest#suites/&utm_source=referral&utm_medium=LMS&utm_campaign=link), or underneath tabbed in, in front of a dash with a space: `-'**/login].spec.js' `

Now when you use the command `saucectl run` you should see both test suites, **chrome smoke** and **chrome regression** having run:

<img src="assets/SCTL1.04D.png" alt="saucectl init workflow" width="700"/>

### Run Your Tests in Different Browsers

Sauce Labs supports running XCUITest tests in the [environments that are supported](https://docs.saucelabs.com/testrunner-toolkit/index.html#supported-frameworks-in-sauce-cloud) by the XCUITest test runner. This means you can run using the Chrome, Microsoft Edge, and Firefox browsers.

### Run Your Tests in Different Modes

#### Run All Tests in One Mode

If you do not have the `mode:` specified anywhere in your `.sauce/config.yml` file, then, by default, all your tests will be bundled, and uploaded and run on the Sauce Labs Cloud of virtual machines.

If you would like to try running tests in docker, you can set all your test suites to run, by default, in docker mode by setting the `defaults:` option:

```
defaults:
  mode: docker
```

#### Note
Negative
: Not all browsers may be supported in _Docker Mode_, see the [release notes](https://github.com/saucelabs/sauce-XCUITest-runner/releases/tag/v7.1.0).

#### Run Certain Tests in Different Modes

Though you can set a default for the entire suite, there is also an option to set the mode for each suite. This setting will override whatever is set in `default:`. That is to say, if you have the default mode for all your suites set to (Docker, but specify the mode in a suite to run in

With this option, you can run some suites in _Docker Mode_, and some suites in _Sauce Mode_, all from the same test run.

To set the mode on the suite level, simply add the `mode:` option somewhere under your test suite `name;`

```
  suites:
    - name: saucy test suite
      mode: docker
```

The following configuration will run two of your tests in _Docker Mode_ (by default) and two of your tests in _Sauce Mode_:

```
apiVersion: v1alpha
kind: XCUITest
defaults:
  mode: docker
```
```
suites:
- name: XCUITest - windows 10 - chrome smoke
  mode: sauce
  browser: chrome
  platformName: windows 10
  config:
    testFiles:
    - 'smoke/*.spec.*'
- name: XCUITest - windows 10 - chrome regression
  browser: chrome
  platformName: windows 10
  config:
    testFiles:
      ['regression/*.test.*']
- name: XCUITest - windows 10 - firefox - all
  browser: firefox
  browserVersion: 86.0
  platformName: windows 10
  config:
    testFiles:
      - '**/*.*'
- name: XCUITest - windows 10 - edge -all
  browser: microsoftedge
  browserVersion: 90.0
  platformName: windows 10
  config:
    testFiles:
      - '**/*.*'
  mode: sauce
```


Now, when you run the command `saucectl run`, you should see output like this in your console.

### View Your Test Results

If you go to [app.saucelabs.com](https://accounts.saucelabs.com/am/XUI/#login/&utm_source=referral&utm_medium=LMS&utm_campaign=link ), you should see the two tests on your automated test results dashboard:

<img src="assets/TRT1.06B.png" alt="XCUITest Tests on Sauce" width="550"/>

If you click into the tests, you can see the video of the test running on the XCUITest client, and a log you can easily share with others:

<img src="assets/TRT1.06C.png" alt="Sauce XCUITest Test Results" width="850"/>

Once you have your tests running, learn more about what you can do with Sauce Labs and XCUITest in [Module 2](https://training.saucelabs.com/codelabs/Module2-Testrunner/index.html?index=..%2F..testrunner#0)

#### Final Code
See an example of the test suite with [updated suites in `.sauce/config.yml`](https://github.com/walkerlj0/saucectl-course-example-code/tree/main/Mod1/1.04)

<img src="assets/SCTL1.04F.png" alt="All Specs passed" width="550"/>


<img src="assets/SCTL1.04G.png" alt="All Specs passed" width="550"/>

<!-- ------------------------ -->
## 1.05 Run XCUITest Tests in Parallel
Duration: 0:03:00

Running XCUITest tests in parallel on the Sauce Labs Cloud using the saucectl is as simple as updating a single field in your `.sauce/config.yml` file:

<img src="assets/TRT1.05A.gif" alt="Sauce XCUITest Test Results" width="850"/>

Inside of the `.sauce` data object, find the `concurrency` field, and change it from `1` to a larger number (`2` or `10`)

You are able to run suites of tests in parallel using the `concurrency` field in `config.yml`, running as many test suites in parallel as you would like (limited by the of virtual machines you have available on your Sauce Labs account).

Negative
: In order to run tests in parallel, you must have a paid account that has a concurrency of more than one. See the docs to learn more about concurrency, and check your concurrency  under **User Settings**. <img src="assets/TRT1.05B.png" alt="Concurrency in user settings" width="550"/>


### Run Parallel Tests in Multiple Browsers
Suites will automatically be run in parallel depending on your teams' allowed concurrency.

In this example, _Login Chrome_, _Login Edge_, and _Login  Firefox_ will have all the test files in each suite run in parallel on a different machine.

```
...
suites:
  # Chrome
  - name: "Login Chrome"
    browser: "chrome"
    platformName: "Windows 10"
    screenResolution: "1400x1050"
    config:
      testFiles: [ "**/login.*" ]
  # MicrosoftEdge
  - name: "Login MicrosoftEdge"
    browser: "edge"
    platformName: "Windows 10"
    screenResolution: "1400x1050"
    config:
      testFiles: [ "**/login.*" ]
 # Firefox
  - name: "Login Firefox"
    browser: "firefox"
    platformName: "Windows 10"
    screenResolution: "1400x1050"
    config:
      testFiles: [ "**/login.*" ]
```
To find out more about the names for the different browser and platform  (OS) combinations, visit the [platform configurator](https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/), and [see the docs](https://docs.saucelabs.com/testrunner-toolkit/running-tests#cross-browser-tests) for the most up to date config.

#### Final Code
See [an example suite](https://github.com/walkerlj0/testrunner-course-example-code/blob/main/Mod1/1.05/.sauce/config.yml) set to run in parallel on multiple browsers.

<!-- ------------------------ -->
## 1.06 Module 1 Quiz
Duration: 0:02:00


![https://docs.google.com/forms/d/e/1FAIpQLScW-Us4yITlZud5PQZBBOY-a7GsSjhcMlzX-6MtVg_FTBJDrw/viewform?embedded=true](https://docs.google.com/forms/d/e/1FAIpQLScW-Us4yITlZud5PQZBBOY-a7GsSjhcMlzX-6MtVg_FTBJDrw/viewform?usp=sf_link)


<!--
1. What advantages do JavaScript Frameworks such a XCUITest, paired with Sauce Labs Testrunner Toolkit provide?
a. You can easily take code from any framework and parse it into the Sauce Labs proprietary test framework language and run your tests more easily
b. You can quickly access a test environment that makes it easy to start running your XCUITest (or other non-Webdriver based) tests on Sauce Labs*
c. You can quickly get sample code for a XCUITest tests that will automatically be run on Sauce Labs without any setup
d. You can use any type of JavaScript testing framework, with any kinds of browser automation tools, and run them by simply adding your credentials to saucectl

*Sauce CTL allows you to run tests that are written using a non-webdriver based framework such as XCUITest, and using only a couple commands and choosing a few options, run tests from that framework. It does not parse any test code from one framework to another, or create code for you, however it does offer you options to use a wider ranges of test frameworks.

2. Why does Sauce Labs' Testrunner Toolkit use Docker?
a. To allow you to write test code for any operating system on your own machine
b. To allow you to set a special environment to store your SAUCE_USERNAME and SAUCE_ACCESS_KEY in safely
c. To allow you to quickly set up an environment with all dependencies for your XCUITest tests*
d. Its the only way to make API calls to Sauce Labs from an environment behind a firewall

*The purpose of the Docker container is to make it easy to use Sauce Labs without having to worry about setting up your environment. Though you can store your Sauce user name and access key within this image, it's not the purpose of it.

3. The file in the .sauce directory entitles config.yml allows you to set which of the following? Choose the answer that is the most correct:

a. The data center on Sauce Labs, the URL of the app you will run your tests against, and which test files will be run in a suite
b. The data center on Sauce Labs, the URL of the app you will run your tests against, and the name of the XCUITest config file
c. The number of machines you want to run concurrently on Sauce Labs, the URL of the app you will run your tests against, and the name of the XCUITest config file
d. The number of machines you want to run concurrently on Sauce Labs, which test files will be run in a suite, and the name of the XCUITest config file*

* The .sauce/config.yml file allows you to set the data center, number of concurrent machines, which test files are run for different suites, and the name of the XCUITest config file, however the URL of the app you are testing against can only be set in the XCUITest.json file
 -->
#### Go on to [Module 2](https://training.saucelabs.com/codelabs/Module2-Testrunner/index.html?index=..%2F..testrunner#0) if you have your XCUITest Tests set up.
<!-- ------------------------ -->
## 1.07 Create Page Objects (Optional)
Duration: 0:05:00

Sauce Labs’ Testrunner Toolkit allows you to take existing XCUITest test suites (or build a XCUITest test suite) and quickly run them on Sauce Labs. In this lesson, you will learn how to modify a couple settings in the `XCUITest.json` and `.sauce/config.yml` files, then write a basic test and run it on Sauce Labs.

#### Video

[Create Page Objects For a XCUITest Test](https://www.youtube.com/watch?v=GTGlkiUCRLM&list=PL67l1VPxOnT7YTdCbpvSpJ8FF-sNxm8r-&index=3)

<video id="GTGlkiUCRLM"></video>

#### Note
Negative
: Different versions of XCUITest will come with different pre-set project structures. If you have additional directories and files, you can keep them where they are, just make sure that you have the directories and files specified in this tutorial.


### Test Configuration


#### XCUITest.json

Inside your **testrunner-tests** project file that you created, you will notice the XCUITest.json file. This file is used to set [all kinds of options for your XCUITest test](https://docs.XCUITest.io/guides/references/configuration.html). If you don’t set any options, XCUITest will use a set of default values. You can pull in data from this file into your tests, to make it easier to preload data in your test.

First, you will need to add information for your tests about the URL of the app you are testing against. Add the following line to `XCUITest.json`, which you will use in your tests to pull in the site you are testing against.



```
//filename: testrunner-tests/XCUITest.json
{
 "baseUrl": "https://www.saucedemo.com/v1/"
}
```



#### Constants.js

Next, in the `XCUITest/support` directory (create the `XCUITest/support` directory if it doesn’t already exist) create a file called `constants.js`.

It’s good practice to store sensitive information like a username and a password in a separate file so you can use a .gitignore file to exclude it from Github repositories you will commit your project to.

Open `constants.js` and add the following objects to store different login credentials:



```
// filename: XCUITest/support/constants.js
export const LOGIN_USERS = {
   LOCKED: {
       username: 'locked_out_user',
       password: 'secret_sauce',
   },
   STANDARD: {
       username: 'standard_user',
       password: 'secret_sauce',
   },
};
```


Now you can use these objects to login in your tests by calling `LOGIN_USERS.LOCKED` or `LOGIN_USERS.STANDARD`.


### Create Page Objects Directory

After that Create a directory called `pageobjects` in the `XCUITest/` directory. Typically, when you write tests you separate your code into items that control interactions with the page, or _page objects, _ or code that specifies what to test, or _test objects._

You project should now look something like this:


<img src="assets/TRT1.04A.png" alt="Project structure with page objects" width="550"/>


### Create Login Page Object

Open the new  `pageobjects` directory and add a file named: `LoginPage.js`, then open `LoginPage.js` and add the following: \


In `LoginPage.js` you will create several get methods to locate elements on the page you will use in your test later on:


```
// filename: XCUITest/pageobjects/LoginPage.js
class LoginPage {
   get screen() {
       return cy.get('#login_button_container');
   }

   get username() {
       return cy.get('#user-name');
   }

   get password() {
       return cy.get('#password');
   }

   get loginButton() {
       return cy.get('.btn_action');
   }

   get errorMessage() {
       return cy.get('[data-test="error"]');
   }

// ...
```


Since you have baseUrl specified in `XCUITest.json`, your tests know to visit a page that looks like [https://www.saucedemo.com/v1/](https://www.saucedemo.com). The first `get` method locates the div in blue below, where the other elements are found.

<img src="assets/TRT1.04B.png" alt="Login Page elements" width="850"/>

You can also see the ids, classes, and `data-test` element that your tests’ `get` methods use to locate other elements on the page.

Next, below the get methods, add in the code to create your `signIn method`, and export the` LoginPage` class so it can be used by other classes (your test methods).


```
// filename: XCUITest/pageobjects/LoginPage.js
// ...


   signIn(userDetails) {
       const {password, username} = userDetails;

       if (username) {
           this.username.type(username);
       }
       if (password) {
           this.password.type(password);
       }

       this.loginButton.click();
   }
}

export default new LoginPage();

```


If you recall, in `const.js` there is a constant created called `LOGIN_USERS `which contains two objects, either `LOCKED` or `STANDARD`.

The `signIn()` method will allow you to pass either the `LOCKED` or `STANDARD` object in with the `username` and `password` values.

Later, when you call that method in your test, you will pass in the set of username and password fields from `const.js` depending on whether you call the method with `signIn(LOGIN_USERS.STANDARD)` or `signIn(LOGIN_USERS.LOCKED).`


### Create Inventory Page Object

You will also need to create a page object for the second page in the login flow, the Inventory Test.


<img src="assets/TRT1.04C.png" alt="The inventory page" width="850"/>


Create a new file in the `XCUITest/pageobjects` directory called `SwagOverviewPage.js`. Your project structure should look something like this:


<img src="assets/TRT1.04D.png" alt="Project structure with inventory page" width="550"/>



Open `SwagOverviewPage.js` and copy in the following code:


```
//filename: XCUITest/pageobjects/SwagOverviewPage.js
class SwagOverviewPage {
    get screen() {
        return cy.get('.inventory_list');
    }
}
export default new SwagOverviewPage();
```


 This will go to the sauce demo page that lists the products, and search for the div that contains the list of items with an id of `inventory_list`.

#### Final Code

 See a sample of the [project and code here.](https://github.com/walkerlj0/testrunner-course-example-code/tree/main/Mod1/1.07)

<img src="assets/TRT1.04E.png" alt="Final Lesson Code" width="450"/>

<img src="assets/TRT1.04F.png" alt="Final Lesson Code" width="550"/>

<img src="assets/TRT1.04G.png" alt="Final Lesson Code" width="750"/>

<img src="assets/TRT1.04H.png" alt="Final Lesson Code" width="550"/>



<!-- ------------------------ -->
## 1.08 Write Your First Test (Optional)
Duration: 0:04:00

Now that you have all the configuration files and page objects created, you can create your first test object to use all of these elements and run a test.


#### Video

[Write a XCUITest Test](https://www.youtube.com/watch?v=0zYCOeATnnM&list=PL67l1VPxOnT7YTdCbpvSpJ8FF-sNxm8r-&index=4)

<video id="0zYCOeATnnM"></video>

### Write Your First Test

Now you will create a new test object In the `XCUITest/integration `directory, named `login.spec.js`. In accordance with [Page Object Model (POM) conventions](https://www.selenium.dev/documentation/en/guidelines_and_recommendations/page_object_models/), you are creating separate directories for page and test objects.

Open `login.spec.js` and create the `describe()` method to set up your test. The `cy.visit() `method contains an empty string because it will automatically pull the `baseUrl `from the `XCUITest.json` file:


```
//filename: XCUITest/integrations/login.spec.js
import LoginPage from '../pageobjects/LoginPage';
import SwagOverviewPage from '../pageobjects/SwagOverviewPage';
import { LOGIN_USERS } from '../support/constants';

describe('LoginPage', () => {
   beforeEach(() => {
       cy.visit('');
   });
// ...
```


Next, add in an `it()` method, which is a Mocha/ XCUITest standard for declaring test methods. This will check to see that when you get onto the page, the `screen` (Defined in `LoginPage.js`) element which contains the login field is visible.:


```
//filename: XCUITest/integrations/login.spec.js
import LoginPage from '../pageobjects/LoginPage';
import SwagOverviewPage from '../pageobjects/SwagOverviewPage';
import { LOGIN_USERS } from '../support/constants';

describe('LoginPage', () => {
   beforeEach(() => {
       cy.visit('');
   });

   it('should be able to test loading of login page', () => {
       LoginPage.screen.should('be.visible');
   });
// ...
```


Next, add a test to check that the next page (where you can choose items for your cart.) is visible when you log in with valid user credentials:


```
//filename: XCUITest/integrations/login.spec.js
import LoginPage from '../pageobjects/LoginPage';
import SwagOverviewPage from '../pageobjects/SwagOverviewPage';
import { LOGIN_USERS } from '../support/constants';

describe('LoginPage', () => {
   beforeEach(() => {
       cy.visit('');
   });

   it('should be able to test loading of login page', () => {
       LoginPage.screen.should('be.visible');
   });

   it('should be able to login with a standard user', () => {
       LoginPage.signIn(LOGIN_USERS.STANDARD);
       SwagOverviewPage.screen.should('be.visible');
   });

// ...
```


Finally, add one last `it()` method to create a test that will login in with invalid user credentials, and verify that the error message shows up:


```
//filename: login.spec.js
import LoginPage from '../pageobjects/LoginPage';
import SwagOverviewPage from '../pageobjects/SwagOverviewPage';
import { LOGIN_USERS } from '../support/constants';

describe('LoginPage', () => {
   beforeEach(() => {
       cy.visit('');
   });

   it('should be able to test loading of login page', () => {
       LoginPage.screen.should('be.visible');
   });

   it('should be able to login with a standard user', () => {
       LoginPage.signIn(LOGIN_USERS.STANDARD);
       SwagOverviewPage.screen.should('be.visible');
   });

   it('should not be able to login with a locked user', () => {
              LoginPage.signIn(LOGIN_USERS.LOCKED);
       LoginPage.errorMessage.should('have.text','Epic sadface: Sorry, this user has been locked out.');
   });
});

```

Negative
: Once you finish, **go back to [Module 1.04](https://training.saucelabs.com/codelabs/Module1-Testrunner/index.html?index=..%2F..testrunner#3)** to see how to run your tests in sauce or docker mode.

#### Final Code

See a sample of the [project and code here](https://github.com/walkerlj0/testrunner-course-example-code/tree/main/Mod1/1.08)

<img src="assets/TRT1.05A.png" alt="Final Lesson Code" width="550"/>


<!-- ------------------------ -->
## 1.09 Debugging Locally with XCUITest (Optional)
Duration: 0:05:00

It often helps to debug on your local machine, and the XCUITest client provides some additional debugging features if you install it locally.


#### Video

[Run and Debug A XCUITest Test Locally](https://www.youtube.com/watch?v=0zYCOeATnnM&list=PL67l1VPxOnT7YTdCbpvSpJ8FF-sNxm8r-&index=4)

<video id="GBgJR-w2Kew"></video>

### Install npm Packages

Install node package manager (`npm`) in the project folder by navigating to your project directory and running `npm init` to initialize it in your project.

What this does is install node package manager, which will allow you to install XCUITest on your machine so you can try running the tests locally first. When you do this, you will see a file called `package.json`, which you will need to update.

To install XCUITest locally, add `dependencies: {}` with `XCUITest:"x.x.x"` to the `package.json` file that was added:


```
{
  "name": "XCUITest-examples",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Your Name",
  "license": "ISC",
  "dependencies": {
    "XCUITest": "5.6.0",
  }
}

```



#### Note

Negative
: You will want to check `.sauce/config.yml` to see which version of XCUITest you are running in saucectl and match the version here. You can also use a newer version of XCUITest, however you will want to check to make sure your project structure stays the same, as well as your files. If saucectl asks to overwrite files when it installs the new version, choose **No** in the npm workflow.

Now run `npm install` again to install the extra dependencies specified in `package.json`. Now in your folder you should see:


<img src="assets/TRT1.07B.png" alt="Project directory with npm" width="350"/>



### Run XCUITest on Your Computer

Now you can save and run a local XCUITest test from your project directory in terminal using:
`npx XCUITest open`

A new window will open on your machine, and you will see the XCUITest client open up. You should see the tests from your `XCUITest/integrations` directory open up.

<img src="assets/TRT1.07C.png" alt="The XCUITest Client" width="550"/>

Click on `login.spec.js`, and you will see your tests run in a new window. Notice that if you make changes and save them to your code, your test window will update in real time.

<img src="assets/TRT1.07D.png" alt="XCUITest Test Runner" width="750"/>
